import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, PenTool, Eye, Microscope, Route, Scale } from "lucide-react";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { WA_MESSAGES } from "@/lib/contact";

const tracks = [
  {
    href: "/projetos",
    eyebrow: "Projetos de fomento",
    title: "Preciso de um projeto aprovado",
    description:
      "Você tem um edital na mira — FINEP, FAPESP, CNPq, Embrapii, FAPs — e precisa de uma proposta que resista à leitura de um avaliador.",
    items: [
      { icon: PenTool, label: "Escrita do Projeto", note: "a quatro mãos, até a submissão" },
      { icon: Eye, label: "Revisão do Projeto", note: "leitura com olhos de avaliador" },
    ],
    cta: "Ver projetos de fomento",
  },
  {
    href: "/tecnologia",
    eyebrow: "Tecnologia e mercado",
    title: "Preciso saber se isso vira negócio",
    description:
      "Você tem uma tecnologia que funciona e uma decisão pela frente: qual aplicação perseguir, quem é o primeiro cliente, o que validar primeiro.",
    items: [
      { icon: Microscope, label: "Diagnóstico de Prontidão Comercial", note: "30 dias, com veredito" },
      { icon: Route, label: "Assessoria de Rota Comercial", note: "do veredito à execução" },
      { icon: Scale, label: "Parecer Técnico-Comercial", note: "due diligence para investidores" },
    ],
    cta: "Ver tecnologia e mercado",
  },
];

export default function Servicos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar active="servicos" ctaHref="/curso" ctaLabel="Conhecer o curso" />
        <main>
          <section className="relative pt-36 lg:pt-44 pb-16 overflow-hidden">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
            </div>
            <div className="max-w-3xl mx-auto px-6 lg:px-8 relative text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight mb-6">
                Como posso ajudar?
              </h1>
              <p className="text-lg lg:text-xl text-text-muted leading-relaxed">
                Trabalho com dois tipos de problema bem diferentes. Escolha o que
                se parece com o seu momento.
              </p>
            </div>
          </section>

          <section className="pb-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-6">
                {tracks.map((track) => (
                  <a
                    key={track.href}
                    href={track.href}
                    className="group flex flex-col p-8 lg:p-10 bg-surface/60 border border-stroke/50 hover:border-cta/40 rounded-3xl card-glow transition-all duration-200"
                  >
                    <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
                      {track.eyebrow}
                    </p>
                    <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-4">
                      {track.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-8">
                      {track.description}
                    </p>

                    <ul className="space-y-4 mb-8">
                      {track.items.map((item) => (
                        <li key={item.label} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cta/10 rounded-xl">
                            <item.icon className="w-5 h-5 text-cta" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-text font-medium">{item.label}</p>
                            <p className="text-sm text-text-muted">{item.note}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-cta">
                      {track.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-12 max-w-3xl mx-auto text-center">
                <p className="text-lg text-text mb-6">
                  Não sabe em qual você se encaixa? Fale comigo — dois minutos de
                  conversa resolvem.
                </p>
                <ContactOptions message={WA_MESSAGES.geral} source="servicos-hub" className="max-w-xl mx-auto" />
              </div>

              <p className="mt-10 text-center text-text-muted">
                Prefere aprender a fazer você mesmo?{" "}
                <a href="/curso" className="font-semibold text-cta hover:text-cta/80 transition-colors">
                  Conheça o curso Fomento para Deeptechs
                </a>
                .
              </p>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.geral} />
      </div>
    </div>
  );
}
