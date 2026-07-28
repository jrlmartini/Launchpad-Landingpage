import { WhatsAppIcon } from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/**
 * Atalho persistente de WhatsApp nas páginas de serviço — permite iniciar
 * contato de qualquer ponto da rolagem.
 *
 * Colapsado por padrão: mostra só o ícone e expande o rótulo no hover.
 */
export function FloatingWhatsApp({
  message = WA_MESSAGES.geral,
  source = "botao-flutuante",
}: {
  message?: string;
  source?: string;
}) {
  return (
    <a
      href={waLink(message, source)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_whatsapp", { source })}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 px-5 py-4 bg-cta hover:bg-cta/90 text-white font-semibold rounded-2xl cta-glow transition-all duration-200 group"
      aria-label="Falar no WhatsApp"
      data-testid="floating-whatsapp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="hidden sm:inline max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
        Falar no WhatsApp
      </span>
    </a>
  );
}
