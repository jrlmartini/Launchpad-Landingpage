import { useEffect, useMemo, useRef, useState } from "react";
import { RHAE } from "@/lib/rhae";
import { lerUtms, lerOrigem, UTM_KEYS } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";

/**
 * Formulário de inscrição (Tally embutido).
 *
 * Campos ocultos vão como query string no src do iframe. Para chegarem à
 * resposta, precisam existir como *hidden fields* no formulário do Tally com
 * exatamente estes nomes:
 *
 *   utm_source, utm_medium, utm_campaign, utm_content, utm_term,
 *   landing_page_version, origin_page
 *
 * O src só é montado no cliente: no build não existe window.location, e
 * congelar a query no HTML estático gravaria todo visitante com a origem de
 * quem gerou a página.
 *
 * ALTURA — o Tally não manda a altura nos eventos `Tally.*`. Ele fala o
 * protocolo do iframe-resizer (a primeira mensagem é `[iFrameResizerChild]
 * Ready`), e quem responde é o script oficial de embed deles. Sem carregar
 * esse script o iframe fica com altura fixa e barra de rolagem própria.
 *
 * Por isso o iframe usa `data-tally-src` em vez de `src`: é assim que o
 * embed.js encontra e inicializa. Se o script não carregar, o efeito colateral
 * é o `src` ser aplicado direto, com altura generosa e rolagem interna.
 *
 * Analytics recebe apenas eventos de fluxo. Nome, e-mail, WhatsApp, empresa e
 * respostas ficam no Tally e nunca viram propriedade de evento.
 */

const ALTURA_INICIAL = 760;
const EMBED_JS = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

/**
 * Plano B do próprio Tally: copiar data-tally-src para src. O formulário
 * carrega sem redimensionamento automático, o que é muito melhor do que
 * iframe em branco.
 */
function carregarDireto() {
  document
    .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
    .forEach((el) => {
      el.src = el.dataset.tallySrc ?? "";
      el.setAttribute("scrolling", "auto");
    });
}

/** Carrega o embed.js uma única vez e inicializa os iframes da página. */
function carregarTally() {
  const iniciar = () => {
    try {
      window.Tally?.loadEmbeds();
    } catch {
      /* cai no temporizador abaixo */
    }
    // Rede de segurança: se em 2s o iframe continuar sem src, força o
    // carregamento. Sem isso, qualquer mudança no embed.js do Tally deixaria
    // a página com um formulário invisível, que é a pior falha possível aqui.
    window.setTimeout(carregarDireto, 2000);
  };

  if (window.Tally) return iniciar();

  const existente = document.querySelector<HTMLScriptElement>(
    `script[src="${EMBED_JS}"]`,
  );
  if (existente) {
    existente.addEventListener("load", iniciar);
    window.setTimeout(carregarDireto, 2500);
    return;
  }

  const script = document.createElement("script");
  script.src = EMBED_JS;
  script.async = true;
  script.onload = iniciar;
  script.onerror = carregarDireto;
  document.body.appendChild(script);
  // Bloqueador de terceiros pode impedir o onerror de disparar.
  window.setTimeout(carregarDireto, 3000);
}

export function FormularioRhae({ id = "inscricao" }: { id?: string }) {
  const [src, setSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const jaContou = useRef(false);

  const base = useMemo(
    () => `${RHAE.formulario.embedBase}?${RHAE.formulario.params}`,
    [],
  );

  useEffect(() => {
    const params = new URLSearchParams();
    const utms = lerUtms();
    for (const k of UTM_KEYS) if (utms[k]) params.set(k, utms[k]!);
    params.set("landing_page_version", RHAE.VERSAO);
    const origem = lerOrigem();
    if (origem) params.set("origin_page", origem);

    setSrc(`${base}&${params.toString()}`);
  }, [base]);

  /* Redimensionamento pelo embed oficial, com plano B se o script falhar. */
  useEffect(() => {
    if (!src) return;
    carregarTally();
  }, [src]);

  /* Conclusão da inscrição. */
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin === "string" && !e.origin.includes("tally.so")) return;
      const dado = typeof e.data === "string" ? e.data : "";
      if (!dado.includes("Tally.FormSubmitted")) return;

      trackEvent("form_submit_success", { form: "rhae-ia-2026" });
      window.location.assign(RHAE.confirmacao);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  /* form_start: primeira vez que o formulário aparece na tela. */
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting && !jaContou.current) {
            jaContou.current = true;
            trackEvent("form_start", { form: "rhae-ia-2026" });
            obs.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [src]);

  return (
    <div ref={containerRef} id={id} className="scroll-mt-32">
      <div className="p-6 lg:p-8 bg-surface/60 border border-stroke/50 rounded-3xl">
        <h2 className="font-display font-bold text-2xl text-text mb-2">
          Inscrição para a live
        </h2>
        <p className="text-text-muted leading-relaxed mb-6">
          Inscrição gratuita para participação ao vivo. Usamos seus dados para
          administrar a inscrição e enviar as informações de acesso.{" "}
          <a
            href={RHAE.privacidadeUrl}
            className="font-medium text-cta hover:text-cta/80 underline underline-offset-2 transition-colors"
          >
            Política de privacidade
          </a>
          .
        </p>

        {src ? (
          <iframe
            ref={iframeRef}
            data-tally-src={src}
            title="Formulário de inscrição na live RHAE IA 2026"
            scrolling="no"
            height={ALTURA_INICIAL}
            className="w-full border-0 block"
            data-testid="iframe-form-rhae"
          />
        ) : (
          <div
            className="grid place-items-center text-text-muted"
            style={{ height: ALTURA_INICIAL }}
            aria-live="polite"
          >
            Carregando formulário…
          </div>
        )}

        <noscript>
          <p className="mt-4 text-text-muted">
            O formulário precisa de JavaScript.{" "}
            <a
              href={base}
              className="text-cta underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir o formulário em nova aba
            </a>
            .
          </p>
        </noscript>
      </div>
    </div>
  );
}
