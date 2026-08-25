import { ArrowRight, Radar, Microscope, PenTool, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { WA_MESSAGES } from "@/lib/contact";

/**
 * 404. Quem chega aqui veio de link quebrado, URL digitada errada ou página
 * que mudou de endereço. É tráfego já conquistado, então a página devolve os
 * quatro caminhos do site em vez de encerrar a visita.
 */

const caminhos = [
  {
    href: "/inteligencia",
    icon: Radar,
    titulo: "Decidir sobre tecnologia de terceiros",
    desc: "Avaliação independente antes de comprometer piloto, time ou capital.",
  },
  {
    href: "/tecnologia",
    icon: Microscope,
    titulo: "Comercializar a sua tecnologia",
    desc: "Prontidão comercial, aplicações priorizadas e rota até o primeiro cliente.",
  },
  {
    href: "/projetos",
    icon: PenTool,
    titulo: "Financiar o desenvolvimento",
    desc: "Escrita de projetos e LaunchScore para FINEP, FAPESP, CNPq e Embrapii.",
  },
  {
    href: "/treinamentos",
    icon: GraduationCap,
    titulo: "Aprender a fazer internamente",
    desc: "O método completo para escrever e defender projetos de fomento.",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 lg:pt-40 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <header className="text-center mb-14">
              <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
                Erro 404
              </p>
              <h1 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-5">
                Esta página não existe
              </h1>
              <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
                O endereço pode ter mudado, ou o link que trouxe você até aqui
                está quebrado. Abaixo estão os quatro caminhos do site.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 gap-5 mb-14">
              {caminhos.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="group flex items-start gap-4 p-6 bg-surface/50 border border-stroke/50 hover:border-cta/40 rounded-2xl transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-11 h-11 grid place-items-center bg-cta/10 rounded-xl">
                    <c.icon className="w-5 h-5 text-cta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-text mb-1 leading-snug">
                      {c.titulo}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <p className="text-text mb-4">
                Não sabe em qual você se encaixa?
              </p>
              <a
                href="/triagem"
                className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
              >
                Fazer a triagem de 2 minutos
                <ArrowRight className="w-4 h-4" />
              </a>
              <ContactOptions
                message={WA_MESSAGES.geral}
                source="404"
                className="max-w-xl mx-auto"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
