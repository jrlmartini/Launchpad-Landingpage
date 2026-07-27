import { MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/contact";

/**
 * Persistent WhatsApp affordance on service pages — the visitor can reach out
 * from any scroll position without hunting for the contact section.
 */
export function FloatingWhatsApp({ message = WA_MESSAGES.geral }: { message?: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 px-5 py-4 bg-cta hover:bg-cta/90 text-white font-semibold rounded-2xl cta-glow transition-all duration-200 group"
      aria-label="Falar no WhatsApp"
      data-testid="floating-whatsapp"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      <span className="hidden sm:inline max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
        Falar no WhatsApp
      </span>
    </a>
  );
}
