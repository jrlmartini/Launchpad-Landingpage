import { WhatsAppIcon } from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/**
 * Atalho persistente de WhatsApp nas páginas de serviço — permite iniciar
 * contato de qualquer ponto da rolagem.
 *
 * No mobile é um botão circular (não rouba largura); a partir de sm mostra o
 * rótulo de forma estável, sem animação de largura no hover — que causava
 * tranco de layout e deixava o alvo de clique instável.
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
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center gap-2.5 h-14 w-14 sm:w-auto sm:px-5 bg-cta hover:bg-cta/90 text-white font-semibold rounded-full sm:rounded-2xl cta-glow transition-colors duration-200"
      aria-label="Falar no WhatsApp"
      data-testid="floating-whatsapp"
    >
      <WhatsAppIcon className="w-6 h-6 shrink-0" />
      <span className="hidden sm:inline text-sm">Falar no WhatsApp</span>
    </a>
  );
}
