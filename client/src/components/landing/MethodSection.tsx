import { Map, Target, BarChart3, Hammer, Shield } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Map,
    title: "Mapa do jogo",
    description: "Navegue o ecossistema de fomento com clareza: FAPESP, FINEP, CNPq, FAPs estaduais — entendendo instrumentos, regras e o melhor encaixe por TRL.",
  },
  {
    number: "2",
    icon: Target,
    title: "Enquadramento e aderência",
    description: "Você aprende a ler edital como avaliador e escolher as melhores oportunidades para seu projeto, sem perder tempo e energia.",
  },
  {
    number: "3",
    icon: BarChart3,
    title: "Evidências e credibilidade",
    description: "Defina métricas e validações mínimas para tornar seu projeto crível em deep tech.",
  },
  {
    number: "4",
    icon: Hammer,
    title: "Execução (plano e orçamento)",
    description: "Construa a estrutura do projeto com entregáveis, cronograma, equipe, riscos e orçamento defensável claros.",
  },
  {
    number: "5",
    icon: Shield,
    title: "Governança e prestação de contas",
    description: "Prepare a operação para manter a missão em trajetória até o fim — sem sustos.",
  },
];

export function MethodSection() {
  return (
    <section id="metodo" className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Nosso Método
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 lg:gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-cta text-white rounded-2xl shadow-lg">
                    <span className="font-display font-bold text-xl lg:text-2xl">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-cta/40 to-transparent" />
                  )}
                </div>
                
                <div className="flex-1 pb-6">
                  <div className="p-6 bg-background/50 border border-stroke/50 rounded-2xl card-glow transition-all duration-200 hover:border-cta/30">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-cta" strokeWidth={1.5} />
                      <h3 className="font-display font-semibold text-lg lg:text-xl text-text">{step.title}</h3>
                    </div>
                    <p className="text-text-muted">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
