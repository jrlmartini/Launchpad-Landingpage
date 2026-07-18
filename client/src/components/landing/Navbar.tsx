import { useState } from "react";
import { Menu, X, User } from "lucide-react";

const defaultLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/curso", label: "Curso" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

interface NavbarProps {
  links?: { href: string; label: string }[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function Navbar({
  links = defaultLinks,
  ctaHref = "/#contato",
  ctaLabel = "Falar com a gente",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = links;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-stroke/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="/"
            className="flex items-center"
            data-testid="link-home"
          >
            <img
              src="/logo.png"
              alt="LaunchpadHub - Explore novos mundos"
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-text transition-colors duration-200"
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://membros.deeptechs.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-cta transition-colors duration-200"
              title="Área de Membros"
              data-testid="link-members-desktop"
            >
              <User className="w-5 h-5" />
              <span className="hidden xl:inline">Área de Membros</span>
            </a>

            <a
              href={ctaHref}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-cta hover:bg-cta/90 rounded-xl transition-all duration-200 cta-glow"
              data-testid="button-cta-nav"
            >
              {ctaLabel}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-b border-stroke">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-text-muted hover:text-text transition-colors"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://membros.deeptechs.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 text-base font-medium text-text-muted hover:text-cta transition-colors"
              data-testid="link-mobile-members"
            >
              <User className="w-5 h-5" />
              Área de Membros
            </a>
            <a
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 mt-4 text-sm font-semibold text-white bg-cta rounded-xl"
              data-testid="button-cta-mobile"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
