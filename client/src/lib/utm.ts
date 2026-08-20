/**
 * Captura e persistência de origem de tráfego.
 *
 * Os UTMs chegam na primeira URL visitada e se perdem assim que a pessoa
 * navega para outra página. Guardamos na sessão para que o formulário receba
 * a origem real mesmo quando o visitante entra pela home e só depois abre a
 * landing.
 *
 * Vale para a sessão do navegador, não entre visitas: atribuição de primeiro
 * toque exigiria armazenamento persistente e consentimento, o que não se
 * justifica aqui.
 */

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type Utms = Partial<Record<UtmKey, string>>;

const STORE_UTM = "lp_utms";
const STORE_ORIGEM = "lp_origin_page";

const disponivel = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    window.sessionStorage.setItem("__t", "1");
    window.sessionStorage.removeItem("__t");
    return true;
  } catch {
    return false; // modo restrito ou storage bloqueado
  }
};

/**
 * Roda uma vez por carregamento. Grava os UTMs presentes na URL e a primeira
 * página da sessão. Chamadas seguintes não sobrescrevem: a origem que importa
 * é a do primeiro contato, não a da última navegação interna.
 */
export function capturarOrigem(): void {
  if (!disponivel()) return;

  try {
    const params = new URLSearchParams(window.location.search);
    const encontrados: Utms = {};
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) encontrados[k] = v.slice(0, 200);
    }

    if (Object.keys(encontrados).length > 0) {
      window.sessionStorage.setItem(STORE_UTM, JSON.stringify(encontrados));
    }
    if (!window.sessionStorage.getItem(STORE_ORIGEM)) {
      window.sessionStorage.setItem(
        STORE_ORIGEM,
        window.location.pathname + window.location.search,
      );
    }
  } catch {
    /* nunca deve quebrar a navegação */
  }
}

export function lerUtms(): Utms {
  if (!disponivel()) return {};
  try {
    const bruto = window.sessionStorage.getItem(STORE_UTM);
    const daUrl: Utms = {};
    const params = new URLSearchParams(window.location.search);
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) daUrl[k] = v.slice(0, 200);
    }
    // A URL atual tem precedência: se a pessoa chegou agora por um anúncio,
    // essa é a origem correta.
    return { ...(bruto ? (JSON.parse(bruto) as Utms) : {}), ...daUrl };
  } catch {
    return {};
  }
}

export function lerOrigem(): string {
  if (!disponivel()) return "";
  try {
    return (
      window.sessionStorage.getItem(STORE_ORIGEM) ||
      window.location.pathname ||
      ""
    );
  } catch {
    return "";
  }
}
