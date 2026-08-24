import { ArrowRight, Check, Wrench, Users, Repeat, Radio } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { Testimonials } from "@/components/shared/Testimonials";
import { WA_MESSAGES } from "@/lib/contact";
import { TREINAMENTOS } from "@/lib/treinamentos";
import { RHAE, linhaEvento } from "@/lib/rhae";

const principios = [
  {
    icon: Wrench,
    titulo: "Método, não teoria",
    desc: "Cada aula termina com você tendo produzido uma parte do seu próprio projeto. Templates, planilhas e checklists são os mesmos que uso nos trabalhos que conduzo.",
  },
  {
    icon: Users,
    // Ele não é avaliador de agência. A credencial real é ter escrito dos dois
    // lados do resultado e conhecer o critério, não ocupar a cadeira de quem julga.
    titulo: "A leitura de quem julga a proposta",
    desc: "Já escrevi projetos aprovados e reprovados. O que separa os dois raramente é o mérito técnico: é a forma como a proposta responde aos critérios que o avaliador tem na mão. É isso que o treinamento ensina.",
  },
  {
    icon: Repeat,
    titulo: "Para internalizar, não para depender",
    desc: "Se a necessidade é recorrente, contratar escrita a cada edital sai caro. Faz mais sentido construir a competência dentro de casa.",
  },
];

export default function Treinamentos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar active="treinamentos" ctaHref="#catalogo" ctaLabel="Ver treinamentos" />
        <main>
          {/* Hero */}
          <section className="relative pt-36 lg:pt-44 pb-16 overflow-hidden">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background" />
              <div className="absolute inset-0 hero-scrim" />
            </div>
            <div className="max-w-3xl mx-auto px-6 lg:px-8 relative text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
                Treinamentos
              </p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-6">
                Construir a competência dentro de casa
              </h1>
              <p className="text-lg lg:text-xl text-text/85 leading-relaxed">
                Consultoria resolve um projeto. Treinamento resolve todos os
                próximos. Aqui estão os programas para quem prefere o segundo
                caminho.
              </p>
            </div>
          </section>

          {/* Princípios */}
          <section className="py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-6">
                {principios.map((p) => (
                  <div
                    key={p.titulo}
                    className="p-7 lg:p-8 bg-surface/50 border border-stroke/50 rounded-3xl"
                  >
                    <div className="w-12 h-12 grid place-items-center bg-cta/10 rounded-2xl mb-5">
                      <p.icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
                    </div>
                    <h2 className="font-display font-semibold text-xl text-text mb-3">
                      {p.titulo}
                    </h2>
                    <p className="text-text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />

          {/* Acesso à live no dia do evento. O convite e o site usam a rota
              estável, que pode trocar de destino sem quebrar links enviados. */}
          {RHAE.PUBLICADA && (
            <section className="pb-4">
              <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <a
                  href={RHAE.aoVivoUrl}
                  className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 lg:p-7 bg-surface/60 border border-cta/30 rounded-3xl card-glow transition-all hover:border-cta/50"
                >
                  <div className="flex-shrink-0 w-12 h-12 grid place-items-center bg-cta/10 rounded-2xl">
                    <Radio className="w-6 h-6 text-cta" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono uppercase tracking-widest text-cta mb-2">
                      Live gratuita · {linhaEvento(false)}
                    </p>
                    <h2 className="font-display font-bold text-xl lg:text-2xl text-text mb-1.5 leading-snug">
                      RHAE IA 2026: requisitos, enquadramento e avaliação da
                      proposta
                    </h2>
                    <p className="text-text-muted leading-relaxed">
                      Quem pode participar da Chamada CNPq nº 29/2026, quais
                      projetos se enquadram e como as propostas serão avaliadas.
                    </p>
                  </div>
                  <span className="flex-shrink-0 inline-flex items-center gap-2 font-semibold text-cta">
                    Acessar a live
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </section>
          )}

          {/* Catálogo */}
          <section id="catalogo" className="py-16 lg:py-24 scroll-mt-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-4">
                Programas
              </h2>
              <p className="text-lg text-text-muted text-center leading-relaxed mb-12 max-w-2xl mx-auto">
                A linha está sendo construída. Novos treinamentos aparecem aqui
                conforme entram em produção.
              </p>

              <div className="space-y-6">
                {TREINAMENTOS.map((t) => {
                  const emBreve = t.status === "em-breve";
                  return (
                    <div
                      key={t.slug}
                      className={`p-7 lg:p-9 border rounded-3xl transition-all ${
                        emBreve
                          ? "bg-surface/30 border-stroke/40"
                          : "bg-surface/60 border-cta/30 card-glow"
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <div
                          className={`flex-shrink-0 w-12 h-12 grid place-items-center rounded-2xl ${
                            emBreve ? "bg-stroke/40" : "bg-cta/10"
                          }`}
                        >
                          <t.icon
                            className={`w-6 h-6 ${emBreve ? "text-text-muted" : "text-cta"}`}
                            strokeWidth={1.5}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3
                              className={`font-display font-bold text-2xl ${
                                emBreve ? "text-text-muted" : "text-text"
                              }`}
                            >
                              {t.nome}
                            </h3>
                            {emBreve && (
                              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-highlight bg-highlight/10 border border-highlight/25 rounded-full">
                                Em breve
                              </span>
                            )}
                          </div>

                          <p className="text-text-muted leading-relaxed mb-5">
                            {t.descricao}
                          </p>

                          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                            {t.topicos.map((topico) => (
                              <li
                                key={topico}
                                className="flex items-start gap-2.5 text-sm text-text-muted"
                              >
                                <Check
                                  className="w-4 h-4 flex-shrink-0 mt-0.5 text-cta"
                                  strokeWidth={2}
                                />
                                {topico}
                              </li>
                            ))}
                          </ul>

                          <p className="text-sm text-text-muted/80 mb-6">
                            {t.publico}
                          </p>

                          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <a
                              href={t.href}
                              className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                                emBreve
                                  ? "text-highlight hover:text-highlight/80"
                                  : "text-cta hover:text-cta/80"
                              }`}
                            >
                              {emBreve
                                ? "Entrar na lista de espera"
                                : "Ver o treinamento"}
                              <ArrowRight className="w-4 h-4" />
                            </a>
                            {emBreve && t.paginaHref && (
                              <a
                                href={t.paginaHref}
                                className="text-sm text-text-muted hover:text-cta transition-colors"
                              >
                                Ver conteúdo e módulos
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <Testimonials
            tag="curso"
            titulo="Quem já aprendeu o método"
            className="bg-surface/30 border-y border-stroke/30"
          />

          {/* Contato */}
          <section className="py-20 lg:py-28">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-5">
                Precisa treinar um time inteiro?
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                Para equipes de P&D, escritórios de inovação e núcleos técnicos,
                monto o programa a partir dos editais e das tecnologias que
                vocês têm em mãos. Me conte o contexto.
              </p>
              <ContactOptions
                message="Olá! Vim pelo site e quero conversar sobre um *treinamento para o meu time*. O contexto é:"
                variant="cards"
                source="treinamentos-contato"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
