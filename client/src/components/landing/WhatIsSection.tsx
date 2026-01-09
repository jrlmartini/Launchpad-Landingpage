import { Compass, Layers, Wallet, Settings } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Definir rotas claras",
    description: "Estratégia e aderência",
  },
  {
    icon: Layers,
    title: "Construir projetos robustos",
    description: "Completos e com critério",
  },
  {
    icon: Wallet,
    title: "Assegurar recursos",
    description: "Instrumentos e programas",
  },
  {
    icon: Settings,
    title: "Criar governança",
    description: "Execução e prestação de contas",
  },
];

export function WhatIsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            O que é o LaunchpadHub?
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            O LaunchpadHub é um hub de inovação e empreendedorismo para lançar ideias com responsabilidade.
            Você aprende a transformar ambição em uma missão bem-sucedida, para qualquer edital - FAPESP, FINEP, CNPq, FAPs estaduais e outros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 bg-background/50 border border-stroke/50 rounded-2xl card-glow text-center transition-all duration-200 hover:border-cta/30"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-cta/10 rounded-2xl">
                <pillar.icon className="w-7 h-7 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">{pillar.title}</h3>
              <p className="text-sm text-text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-medium text-text">
          Sem enfeite. <span className="text-cta">Com método.</span>
        </p>
      </div>
    </section>
  );
}
