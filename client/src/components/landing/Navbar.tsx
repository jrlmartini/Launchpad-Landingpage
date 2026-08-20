import { useState, useEffect, useRef } from "react";
import { temArtigos } from "@/lib/artigos";
import { TREINAMENTOS } from "@/lib/treinamentos";
import { RHAE, destaqueExpirado, linhaEvento } from "@/lib/rhae";
import { Menu, X, User, ChevronDown, PenTool, Eye, Microscope, Route, Scale, GraduationCap, Radar, Telescope, Radio } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Site-wide structure — identical on every page, never swapped out.    */
/* ------------------------------------------------------------------ */

const serviceMenu = [
  {
    group: "Inteligência técnica",
    groupHref: "/inteligencia",
    items: [
      {
        href: "/inteligencia#mapeamento",
        label: "Mapeamento Tecnológico",
        description: "Quais rotas existem para o seu problema",
        icon: Telescope,
      },
      {
        href: "/inteligencia#sprint",
        label: "Technology Decision Sprint",
        description: "Avançar, aprofundar, aguardar ou parar. Em 10 dias úteis",
        icon: Radar,
      },
      {
        href: "/inteligencia#parecer",
        label: "Parecer Técnico-Comercial",
        description: "Due diligence para investidores e financiadores",
        icon: Scale,
      },
    ],
  },
  {
    group: "Tecnologia e mercado",
    groupHref: "/tecnologia",
    items: [
      {
        href: "/tecnologia#diagnostico",
        label: "Diagnóstico de Prontidão Comercial",
        description: "Sua tecnologia vira negócio? Em 30 dias",
        icon: Microscope,
      },
      {
        href: "/tecnologia#rota",
        label: "Assessoria de Rota Comercial",
        description: "Do veredito à execução",
        icon: Route,
      },
    ],
  },
  {
    group: "Projetos de fomento",
    groupHref: "/projetos",
    items: [
      {
        href: "/projetos#escrita",
        label: "Escrita do Projeto",
        description: "A quatro mãos, do enquadramento à submissão",
        icon: PenTool,
      },
      {
        href: "/projetos#revisao",
        label: "Revisão do Projeto",
        description: "Leitura com olhos de avaliador",
        icon: Eye,
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
  active?: "home" | "curso" | "servicos" | "projetos" | "tecnologia" | "inteligencia" | "artigos" | "treinamentos" | null;
  ctaHref?: string;
  ctaLabel?: string;
}

export function Navbar({
  sections = [],
  active = null,
  ctaHref = "/treinamentos",
  ctaLabel = "Ver treinamentos",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  /* Começa visível para bater com o HTML do build; some depois da live. */
  const [liveNoMenu, setLiveNoMenu] = useState<boolean>(
    RHAE.PUBLICADA && RHAE.DESTACAR_NO_MENU,
  );
  useEffect(() => {
    if (RHAE.PUBLICADA && RHAE.DESTACAR_NO_MENU && destaqueExpirado()) {
      setLiveNoMenu(false);
    }
  }, []);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Hover intent: opening is instant, closing waits ~180ms so the pointer can
     travel from the trigger into the panel without the menu snapping shut. */
  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const trainingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTraining = () => {
    if (trainingTimer.current) clearTimeout(trainingTimer.current);
    setTrainingOpen(true);
  };
  const scheduleCloseTraining = () => {
    if (trainingTimer.current) clearTimeout(trainingTimer.current);
    trainingTimer.current = setTimeout(() => setTrainingOpen(false), 180);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 180);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const primaryLinkClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-text" : "text-text-muted hover:text-text"
    }`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* ---------------- Primary bar (site-wide) ----------------
          relative z-20 keeps this bar (and its dropdown) above the sub-bar,
          which creates its own stacking context via backdrop-blur. */}
      <nav className="relative z-20 bg-background/85 backdrop-blur-xl border-b border-stroke/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            <a href="/" className="flex items-center" data-testid="link-home">
              <img
                src="/logo.webp"
                alt="LaunchpadHub"
                width={680}
                height={120}
                className="h-8 lg:h-9 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-7">
              <a
                href="/"
                className={primaryLinkClass(active === "home")}
                data-testid="link-inicio"
              >
                Início
              </a>
              {/* Treinamentos: mesma mecânica de hover do dropdown de Serviços */}
              <div
                className="relative"
                onMouseEnter={openTraining}
                onMouseLeave={scheduleCloseTraining}
                onFocus={openTraining}
                onBlur={scheduleCloseTraining}
              >
                <a
                  href="/treinamentos"
                  className={`${primaryLinkClass(
                    active === "treinamentos" || active === "curso",
                  )} inline-flex items-center gap-1.5 py-5`}
                  aria-expanded={trainingOpen}
                  aria-haspopup="true"
                  data-testid="link-treinamentos"
                >
                  Treinamentos
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      trainingOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {trainingOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full z-50"
                    onMouseEnter={openTraining}
                    onMouseLeave={scheduleCloseTraining}
                  >
                    <div className="h-3 w-full" />
                    <div className="w-[26rem] p-2 bg-surface border border-stroke rounded-2xl shadow-2xl">
                      <a
                        href="/treinamentos"
                        onClick={() => setTrainingOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs font-mono uppercase tracking-wider text-cta hover:text-cta/80 transition-colors"
                      >
                        Todos os treinamentos
                        <span className="normal-case tracking-normal font-body text-[11px] text-text-muted">
                          ver página →
                        </span>
                      </a>
                      {liveNoMenu && (
                        <a
                          href={RHAE.slug}
                          onClick={() => setTrainingOpen(false)}
                          className="flex items-start gap-3 p-3 mb-1 rounded-xl bg-cta/5 border border-cta/20 hover:bg-cta/10 transition-colors group"
                          data-testid="link-live-rhae"
                        >
                          <div className="flex-shrink-0 w-9 h-9 grid place-items-center bg-cta/15 rounded-lg">
                            <Radio className="w-4 h-4 text-cta" strokeWidth={1.5} />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-text group-hover:text-cta transition-colors">
                                Live RHAE IA 2026
                              </span>
                              <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-cta bg-cta/15 border border-cta/25 rounded">
                                Gratuita
                              </span>
                            </div>
                            <p className="text-xs text-text-muted mt-0.5 leading-snug">
                              {linhaEvento(false)} · inscrição aberta
                            </p>
                          </div>
                        </a>
                      )}

                      {TREINAMENTOS.map((t) => {
                        const emBreve = t.status === "em-breve";
                        return (
                          <a
                            key={t.slug}
                            href={t.href}
                            onClick={() => setTrainingOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-background/60 transition-colors group"
                            data-testid={`link-treinamento-${t.slug}`}
                          >
                            <div
                              className={`flex-shrink-0 w-9 h-9 grid place-items-center rounded-lg ${
                                emBreve ? "bg-stroke/40" : "bg-cta/10"
                              }`}
                            >
                              <t.icon
                                className={`w-4 h-4 ${
                                  emBreve ? "text-text-muted" : "text-cta"
                                }`}
                                strokeWidth={1.5}
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-medium ${
                                    emBreve
                                      ? "text-text-muted"
                                      : "text-text group-hover:text-cta"
                                  } transition-colors`}
                                >
                                  {t.nome}
                                </span>
                                {emBreve && (
                                  <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-highlight bg-highlight/10 border border-highlight/25 rounded">
                                    Em breve
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-text-muted mt-0.5 leading-snug">
                                {emBreve
                                  ? "Entre na lista de espera"
                                  : t.chamada}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Serviços dropdown */}
              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
                onFocus={openServices}
                onBlur={scheduleCloseServices}
              >
                <a
                  href="/servicos"
                  className={`${primaryLinkClass(
                    active === "servicos" ||
                    active === "projetos" ||
                    active === "tecnologia" ||
                    active === "inteligencia"
                  )} inline-flex items-center gap-1.5 py-5`}
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
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full z-50"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    {/* transparent bridge: keeps hover alive across the gap */}
                    <div className="h-3 w-full" />
                    <div className="w-[30rem] p-2 bg-surface border border-stroke rounded-2xl shadow-2xl">
                      {serviceMenu.map((group) => (
                        <div key={group.group} className="p-2">
                          <a
                            href={group.groupHref}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-between px-3 py-2 text-xs font-mono uppercase tracking-wider text-cta hover:text-cta/80 transition-colors"
                          >
                            {group.group}
                            <span className="normal-case tracking-normal font-body text-[11px] text-text-muted">
                              ver página →
                            </span>
                          </a>
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

              <a href="/metodo" className={primaryLinkClass(false)}>
                Método
              </a>
              <a href="/triagem" className={primaryLinkClass(false)}>
                Triagem
              </a>
              {/* Só aparece quando existe artigo publicado. */}
              {temArtigos && (
                <a
                  href="/artigos"
                  className={primaryLinkClass(active === "artigos")}
                >
                  Artigos
                </a>
              )}
              <a href="/#sobre" className={primaryLinkClass(false)}>
                Sobre
              </a>
              <a href="/#contato" className={primaryLinkClass(false)}>
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
                active === "home" ? "text-cta" : "text-text"
              }`}
            >
              Início
            </a>
            <a
              href="/treinamentos"
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-medium border-t border-stroke/40 ${
                active === "treinamentos" || active === "curso"
                  ? "text-cta"
                  : "text-text"
              }`}
            >
              Treinamentos
            </a>
            <div className="pl-4 pb-2 space-y-1">
              {liveNoMenu && (
                <a
                  href={RHAE.slug}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-cta font-medium"
                >
                  Live RHAE IA 2026
                  <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-cta bg-cta/15 border border-cta/25 rounded">
                    Gratuita
                  </span>
                </a>
              )}
              {TREINAMENTOS.map((t) => (
                <a
                  key={t.slug}
                  href={t.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-text-muted"
                >
                  {t.nome}
                  {t.status === "em-breve" && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-highlight bg-highlight/10 border border-highlight/25 rounded">
                      Em breve
                    </span>
                  )}
                </a>
              ))}
            </div>

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
              href="/#sobre"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-text border-t border-stroke/40"
            >
              Sobre
            </a>
            <a
              href="/#contato"
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
