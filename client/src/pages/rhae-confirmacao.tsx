import { CalendarPlus, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppIcon } from "@/components/hub/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import { RHAE, linhaEvento } from "@/lib/rhae";

/**
 * Confirmação de inscrição.
 *
 * Os dois CTAs são condicionais: só aparecem se a URL correspondente estiver
 * configurada. Botão que leva a lugar nenhum é pior que botão ausente.
 * Não prometemos acesso à gravação aqui.
 */
export default function RhaeConfirmacao() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar active="treinamentos" ctaHref="/treinamentos" ctaLabel="Ver treinamentos" />

        <main className="pt-32 lg:pt-40 pb-20">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
            <div className="w-16 h-16 mx-auto mb-7 grid place-items-center bg-cta/10 rounded-2xl">
              <CheckCircle2 className="w-8 h-8 text-cta" strokeWidth={1.5} aria-hidden />
            </div>

            <h1 className="font-display font-bold text-3xl lg:text-4xl text-text mb-5">
              Inscrição confirmada
            </h1>

            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Você está na lista para a live{" "}
              <strong className="text-text">{RHAE.evento.nome}</strong>.
            </p>

            <p className="inline-block px-4 py-2 mb-8 text-xs font-mono uppercase tracking-wider text-text bg-surface/70 border border-stroke/60 rounded-full">
              {linhaEvento(false)} · ONLINE
            </p>

            <p className="text-text-muted leading-relaxed mb-10">
              Enviaremos as informações de acesso pelos contatos informados na
              inscrição.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {RHAE.calendarioUrl && (
                <a
                  href={RHAE.calendarioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("calendar_click", { page: "rhae-confirmacao" })}
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all cta-glow"
                  data-testid="cta-calendario"
                >
                  <CalendarPlus className="w-5 h-5" strokeWidth={1.5} aria-hidden />
                  Adicionar ao calendário
                </a>
              )}

              {RHAE.grupoWhatsappUrl && (
                <a
                  href={RHAE.grupoWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_group_click", { page: "rhae-confirmacao" })}
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-semibold text-text bg-surface border border-stroke hover:border-cta/40 rounded-2xl transition-all"
                  data-testid="cta-grupo"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Entrar no grupo da live
                </a>
              )}
            </div>

            <p className="mt-12 pt-8 border-t border-stroke/50 text-sm text-text-muted leading-relaxed">
              O conteúdo da live tem caráter informativo e não substitui a
              leitura integral do edital nem esclarecimentos formais do CNPq.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
