import { Map, Target, BarChart3, Hammer, Shield } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Map,
    title: "Mapa do jogo",
    description: "Entenda instrumentos, programas e como governos financiam inovação — sem decorar, com lógica.",
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
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cta via-cta/50 to-transparent hidden lg:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 lg:gap-8"
                >
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 items-center justify-center bg-cta/10 border border-cta/30 rounded-2xl z-10">
                    <span className="font-display font-bold text-2xl text-cta">{step.number}</span>
                  </div>
                  
                  <div className="flex-1 p-6 bg-background/50 border border-stroke/50 rounded-2xl card-glow transition-all duration-200 hover:border-cta/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="lg:hidden w-10 h-10 flex items-center justify-center bg-cta/10 rounded-xl">
                        <span className="font-display font-bold text-lg text-cta">{step.number}</span>
                      </div>
                      <step.icon className="w-5 h-5 text-cta" strokeWidth={1.5} />
                      <h3 className="font-display font-semibold text-xl text-text">{step.title}</h3>
                    </div>
                    <p className="text-text-muted lg:pl-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
