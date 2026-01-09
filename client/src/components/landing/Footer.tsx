import { Rocket, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-surface/50 border-t border-stroke/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 text-xl font-display font-semibold text-text">
            <Rocket className="w-6 h-6 text-cta" strokeWidth={1.5} />
            <span>LaunchpadHub</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contato@launchpadhub.com.br"
              className="flex items-center gap-2 text-text-muted hover:text-cta transition-colors"
              data-testid="link-email"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span className="hidden sm:inline">contato@launchpadhub.com.br</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/launchpadhub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-stroke/30 hover:bg-cta/20 rounded-xl transition-colors"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
            </a>
            <a
              href="https://youtube.com/@launchpadhub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-stroke/30 hover:bg-cta/20 rounded-xl transition-colors"
              data-testid="link-youtube"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stroke/30 text-center">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} LaunchpadHub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
