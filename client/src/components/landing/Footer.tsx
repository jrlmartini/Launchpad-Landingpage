import { Instagram, Youtube, Linkedin, Mail, CalendarClock } from "lucide-react";
import { WhatsAppIcon } from "@/components/hub/WhatsAppIcon";
import { waLink, WA_MESSAGES, CALENDLY_URL, WHATSAPP_DISPLAY, CONTACT_EMAIL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-surface/50 border-t border-stroke/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <a href="/" className="block">
            <img
              src="/logo.webp"
              alt="LaunchpadHub"
              width={680}
              height={120}
              loading="lazy"
              decoding="async"
              className="h-10 w-auto"
            />
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href={waLink(WA_MESSAGES.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-cta transition-colors"
              data-testid="link-whatsapp-footer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-cta transition-colors"
              data-testid="link-calendly-footer"
            >
              <CalendarClock className="w-5 h-5" strokeWidth={1.5} />
              <span>Agendar 20 min</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-text-muted hover:text-cta transition-colors"
              data-testid="link-email"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span className="hidden lg:inline">{CONTACT_EMAIL}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-renato-lanzi-martini/"
              target="_blank"
              rel="noopener noreferrer me"
              className="w-10 h-10 flex items-center justify-center bg-stroke/30 hover:bg-cta/20 rounded-xl transition-colors"
              data-testid="link-linkedin"
              aria-label="LinkedIn de José Renato Lanzi Martini"
            >
              <Linkedin className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/launchpadhub"
              target="_blank"
              rel="noopener noreferrer me"
              className="w-10 h-10 flex items-center justify-center bg-stroke/30 hover:bg-cta/20 rounded-xl transition-colors"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
            </a>
            <a
              href="https://youtube.com/@launchpadhub"
              target="_blank"
              rel="noopener noreferrer me"
              className="w-10 h-10 flex items-center justify-center bg-stroke/30 hover:bg-cta/20 rounded-xl transition-colors"
              data-testid="link-youtube"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stroke/30">
          <p className="text-sm text-text-muted text-center max-w-3xl mx-auto leading-relaxed mb-4">
            <strong className="text-text">Fomento para Deeptechs</strong> é um
            produto do LaunchpadHub. O site também pode ser acessado por
            deeptechs.com.br — mesmo time, mesma empresa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            <a
              href="/"
              className="text-sm text-text-muted hover:text-cta transition-colors"
            >
              Início
            </a>
            <a
              href="/curso"
              className="text-sm text-text-muted hover:text-cta transition-colors"
            >
              Curso
            </a>
            <a
              href="/projetos"
              className="text-sm text-text-muted hover:text-cta transition-colors"
            >
              Projetos de fomento
            </a>
            <a
              href="/inteligencia"
              className="text-sm text-text-muted hover:text-cta transition-colors"
            >
              Inteligência técnica
            </a>
            <a
              href="/tecnologia"
              className="text-sm text-text-muted hover:text-cta transition-colors"
            >
              Tecnologia e mercado
            </a>
            <a
              href="/metodo"
              className="text-sm text-text-muted hover:text-cta transition-colors"
            >
              Método TRL × CRL
            </a>
            <a
              href="/privacidade"
              className="text-sm text-text-muted hover:text-cta transition-colors"
            >
              Política de Privacidade
            </a>
          </div>

          <p className="text-sm text-text-muted text-center">
            © {new Date().getFullYear()} LaunchpadHub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
