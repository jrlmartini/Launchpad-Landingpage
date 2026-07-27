import { useState, useEffect } from "react";
import { Menu, X, User, ChevronDown, PenTool, Eye, Microscope, Route, Scale, GraduationCap } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Site-wide structure — identical on every page, never swapped out.    */
/* ------------------------------------------------------------------ */

const serviceMenu = [
  {
    group: "Projeto de fomento",
    items: [
      {
        href: "/servicos#escrita",
        label: "Escrita do Projeto",
        description: "A quatro mãos, do enquadramento à submissão",
        icon: PenTool,
      },
      {
        href: "/servicos#revisao",
        label: "Revisão do Projeto",
        description: "Leitura com olhos de avaliador",
        icon: Eye,
      },
    ],
  },
  {
    group: "Tecnologia e mercado",
    items: [
      {
        href: "/servicos#diagnostico",
        label: "Diagnóstico de Prontidão Comercial",
        description: "Sua tecnologia vira negócio? Em 30 dias",
        icon: Microscope,
      },
      {
        href: "/servicos#rota",
        label: "Assessoria de Rota Comercial",
        description: "Do veredito à execução",
        icon: Route,
      },
      {
        href: "/servicos#parecer",
        label: "Parecer Técnico-Comercial",
        description: "Due diligence para investidores",
        icon: Scale,
      },
    ],
  },
];

export interface SectionLink {
  href: string;
  label: string;
}

interface NavbarProps {
  /** In-page section anchors for the current page (rendered in the sub-bar). */
  sections?: SectionLink[];
  /** Which primary item is the current page. */
  active?: "curso" | "servicos" | null;
  ctaHref?: string;
  ctaLabel?: string;
}

export function Navbar({
  sections = [],
  active = null,
  ctaHref = "/#oferta",
  ctaLabel = "Quero o curso",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close menus on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const primaryLinkClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-text" : "text-text-muted hover:text-text"
    }`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* ---------------- Primary bar (site-wide) ---------------- */}
      <nav className="bg-background/85 backdrop-blur-xl border-b border-stroke/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            <a href="/" className="flex items-center" data-testid="link-home">
              <img
                src="/logo.png"
                alt="LaunchpadHub"
                className="h-8 lg:h-9 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className={primaryLinkClass(active === "curso")}
                data-testid="link-curso"
              >
                Curso
              </a>

              {/* Serviços dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href="/servicos"
                  className={`${primaryLinkClass(active === "servicos")} inline-flex items-center gap-1.5`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  data-testid="link-servicos"
                >
                  Serviços
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {servicesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                    <div className="w-[30rem] p-2 bg-surface border border-stroke rounded-2xl shadow-2xl">
                      {serviceMenu.map((group) => (
                        <div key={group.group} className="p-2">
                          <p className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-cta">
                            {group.group}
                          </p>
                          {group.items.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-background/60 transition-colors group"
                            >
                              <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-cta/10 rounded-lg">
                                <item.icon className="w-4.5 h-4.5 text-cta" strokeWidth={1.5} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-text group-hover:text-cta transition-colors">
                                  {item.label}
                                </p>
                                <p className="text-xs text-text-muted leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/servicos#sobre" className={primaryLinkClass(false)}>
                Sobre
              </a>
              <a href="/servicos#contato" className={primaryLinkClass(false)}>
                Contato
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-5">
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
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-cta hover:bg-cta/90 rounded-xl transition-all duration-200 cta-glow"
                data-testid="button-cta-nav"
              >
                {ctaLabel}
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
              aria-label="Abrir menu"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ---------------- Secondary bar (page sections) ---------------- */}
      {sections.length > 0 && (
        <div className="hidden lg:block bg-surface/70 backdrop-blur-xl border-b border-stroke/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-1 h-11 overflow-x-auto">
              <span className="flex items-center gap-2 pr-4 mr-2 border-r border-stroke/50 text-xs font-mono uppercase tracking-wider text-text-muted whitespace-nowrap">
                {active === "curso" ? (
                  <>
                    <GraduationCap className="w-4 h-4 text-cta" strokeWidth={1.5} />
                    Nesta página
                  </>
                ) : (
                  <>
                    <Route className="w-4 h-4 text-cta" strokeWidth={1.5} />
                    Nesta página
                  </>
                )}
              </span>
              {sections.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="px-3 py-1.5 text-sm text-text-muted hover:text-text hover:bg-background/50 rounded-lg transition-colors whitespace-nowrap"
                  data-testid={`subnav-${s.label.toLowerCase()}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Mobile menu ---------------- */}
      {isOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-xl border-b border-stroke max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-6 py-4">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-medium ${
                active === "curso" ? "text-cta" : "text-text"
              }`}
            >
              Curso
            </a>

            <div className="border-t border-stroke/40">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 text-base font-medium text-text"
                aria-expanded={mobileServicesOpen}
              >
                Serviços
                <ChevronDown
                  className={`w-5 h-5 text-text-muted transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pb-2">
                  {serviceMenu.map((group) => (
                    <div key={group.group} className="mb-3">
                      <p className="py-2 text-xs font-mono uppercase tracking-wider text-cta">
                        {group.group}
                      </p>
                      {group.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start gap-3 py-2.5 pl-1"
                        >
                          <item.icon
                            className="w-5 h-5 text-cta flex-shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <div>
                            <p className="text-sm font-medium text-text">{item.label}</p>
                            <p className="text-xs text-text-muted">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  ))}
                  <a
                    href="/servicos"
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm font-semibold text-cta"
                  >
                    Ver todos os serviços →
                  </a>
                </div>
              )}
            </div>

            <a
              href="/servicos#sobre"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-text border-t border-stroke/40"
            >
              Sobre
            </a>
            <a
              href="/servicos#contato"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-text border-t border-stroke/40"
            >
              Contato
            </a>

            {sections.length > 0 && (
              <div className="pt-3 mt-2 border-t border-stroke/40">
                <p className="py-2 text-xs font-mono uppercase tracking-wider text-text-muted">
                  Nesta página
                </p>
                <div className="flex flex-wrap gap-2">
                  {sections.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-1.5 text-sm text-text-muted bg-background/60 border border-stroke/50 rounded-lg"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <a
              href="https://membros.deeptechs.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-3 mt-2 text-base font-medium text-text-muted border-t border-stroke/40"
            >
              <User className="w-5 h-5" />
              Área de Membros
            </a>

            <a
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 mt-3 mb-2 text-sm font-semibold text-white bg-cta rounded-xl"
              data-testid="button-cta-mobile"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
