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
 * ALTURA — o Tally não envia a altura nos eventos `Tally.*`: ele fala o
 * protocolo do iframe-resizer, que precisa do parent correspondente. Tentei
 * usar o embed.js oficial com `data-tally-src`, mas o `loadEmbeds()` não
 * inicializou o iframe aqui e o formulário ficava em branco.
 *
 * Optei pelo caminho determinístico: `src` direto, altura folgada e
 * `scrolling="auto"`. Com isso o formulário sempre carrega e a barra de
 * rolagem só apareceria se o conteúdo passasse da altura reservada. O custo é
 * um espaço vazio embaixo em formulários curtos, que é bem menos ruim do que
 * rolagem dentro da página ou iframe vazio.
 *
 * Analytics recebe apenas eventos de fluxo. Nome, e-mail, WhatsApp, empresa e
 * respostas ficam no Tally e nunca viram propriedade de evento.
 */

/** Folga suficiente para o formulário completo, evitando rolagem interna. */
const ALTURA = 1180;

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

  /* Conclusão da inscrição. */
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin === "string" && !e.origin.includes("tally.so")) return;
      const dado = typeof e.data === "string" ? e.data : "";
      if (!dado.includes("Tally.FormSubmitted")) return;

      trackEvent("form_submit_success", { form: "rhae-ia-2026" });
      try {
        // Marca a inscrição para a confirmação liberar o convite do grupo.
        // Não é segurança, é higiene: evita expor o CTA a quem só abriu a URL.
        window.sessionStorage.setItem("rhae_inscrito", "1");
      } catch {
        /* storage bloqueado: a confirmação some com o CTA, e tudo bem */
      }
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
            src={src}
            title="Formulário de inscrição na live RHAE IA 2026"
            height={ALTURA}
            className="w-full border-0 block"
            data-testid="iframe-form-rhae"
          />
        ) : (
          <div
            className="grid place-items-center text-text-muted"
            style={{ height: ALTURA }}
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
