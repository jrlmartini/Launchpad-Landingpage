import { MessageCircle, CalendarClock, ArrowRight } from "lucide-react";
import { waLink, calendlyLink, WHATSAPP_DISPLAY } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

interface ContactOptionsProps {
  /** Pre-filled WhatsApp opener for this context. */
  message: string;
  /** "buttons" = side-by-side CTAs · "cards" = full explanatory block */
  variant?: "buttons" | "cards";
  /** Page/offer identifier used for UTMs, WhatsApp origin line and events. */
  source?: string;
  className?: string;
}

/**
 * Two ways to talk: WhatsApp for right now, Calendly for a scheduled call.
 * Used at the bottom of every service section and page.
 */
export function ContactOptions({
  message,
  variant = "buttons",
  source = "site",
  className = "",
}: ContactOptionsProps) {
  const onWhats = () =>
    trackEvent("click_whatsapp", { source, variant });
  const onCalendly = () =>
    trackEvent("click_calendly", { source, variant });

  if (variant === "buttons") {
    return (
      <div className={`flex flex-col sm:flex-row items-stretch gap-3 ${className}`}>
        <a
          href={waLink(message, source)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhats}
          className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
          data-testid="cta-whatsapp"
        >
          <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
          Avaliar meu caso no WhatsApp
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href={calendlyLink(source)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onCalendly}
          className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-text border border-stroke hover:border-cta/40 rounded-2xl transition-all duration-200"
          data-testid="cta-calendly"
        >
          <CalendarClock className="w-5 h-5 text-cta" strokeWidth={1.5} />
          Agendar triagem de 20 min
        </a>
      </div>
    );
  }

  return (
    <div className={`grid sm:grid-cols-2 gap-5 ${className}`}>
      <a
        href={waLink(message, source)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onWhats}
        className="group p-7 bg-surface border border-cta/30 hover:border-cta/60 rounded-3xl card-glow transition-all duration-200 text-left"
        data-testid="card-whatsapp"
      >
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cta rounded-2xl">
          <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>
        <h3 className="font-display font-semibold text-xl text-text mb-2">
          Falar agora no WhatsApp
        </h3>
        <p className="text-text-muted leading-relaxed mb-4">
          Escreva direto, com a mensagem já preenchida. Respondo em horário
          comercial, normalmente no mesmo dia.
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cta">
          {WHATSAPP_DISPLAY}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </a>

      <a
        href={calendlyLink(source)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onCalendly}
        className="group p-7 bg-surface/50 border border-stroke/50 hover:border-cta/40 rounded-3xl card-glow transition-all duration-200 text-left"
        data-testid="card-calendly"
      >
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cta/10 rounded-2xl">
          <CalendarClock className="w-6 h-6 text-cta" strokeWidth={1.5} />
        </div>
        <h3 className="font-display font-semibold text-xl text-text mb-2">
          Agendar uma triagem de 20 minutos
        </h3>
        <p className="text-text-muted leading-relaxed mb-4">
          Uma call rápida para eu entender o seu caso e dizer se é curso,
          escrita, revisão, diagnóstico — ou outro caminho. Sem apresentação
          comercial.
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cta">
          Ver horários disponíveis
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </a>
    </div>
  );
}
