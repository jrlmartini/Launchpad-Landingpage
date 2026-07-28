/**
 * Glifo do WhatsApp em traço, para combinar com o restante do set (lucide).
 * viewBox quadrado e desenho centrado — evita o desalinhamento óptico que o
 * MessageCircle causava dentro de botões quadrados por causa da "cauda".
 */
export function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 21.5a9.5 9.5 0 1 0-8.23-4.77L2.5 21.5l4.86-1.24A9.46 9.46 0 0 0 12 21.5Z" />
      <path d="M9.2 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2 0 .4-.1.5l-.5.6c-.1.2-.2.3-.1.5a6 6 0 0 0 2.7 2.7c.2.1.4 0 .5-.1l.6-.6c.2-.2.3-.2.5-.1l1.8.9c.2.1.3.2.3.4v.6c0 .3-.2.6-.5.8-.4.3-.9.4-1.4.4a9 9 0 0 1-6.4-6.4c0-.5.1-1 .4-1.4Z" />
    </svg>
  );
}
