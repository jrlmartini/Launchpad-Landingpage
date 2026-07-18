import { BookOpen, Layers, Pencil, ClipboardCheck, Calculator, Sparkles, Compass, Target } from "lucide-react";

const modules = [
  {
    icon: Compass,
    title: "Módulo 0 — Introdução ao Fomento para Deep Techs",
    description: "Como o curso funciona, diagnóstico do seu ponto de partida e o caminho mais curto para transformar tecnologia em projeto financiável.",
  },
  {
    icon: BookOpen,
    title: "Módulo 1 — O Sistema Nacional de Fomento à Inovação",
    description: "Instrumentos, políticas e programas (FAPESP, FINEP, CNPq e outros) para navegar o ecossistema com clareza e escolher o recurso certo.",
  },
  {
    icon: Target,
    title: "Módulo 2 — Estratégia de Captação",
    description: "Como ler edital como avaliador, medir aderência (Go/No-Go), montar pipeline por TRL e evitar chamadas que só consomem energia.",
  },
  {
    icon: Layers,
    title: "Módulo 3 — Arquitetura de um Bom Projeto",
    description: "Os pilares que sustentam aprovação: aderência, evidências e execução — com TRL na prática e storytelling técnico que gera confiança.",
  },
  {
    icon: Pencil,
    title: "Módulo 4 — Desenvolvendo o Projeto",
    description: "Campo a campo: resumo, descrição, inovação, riscos, mercado, impactos, plano de trabalho, orçamento e contrapartidas — com foco em consistência e defesa.",
  },
  {
    icon: ClipboardCheck,
    title: "Módulo 5 — Prestação de Contas",
    description: "Governança, trilha de evidências e relatórios para executar com segurança, reduzir glosas e manter o projeto em trajetória até o fim.",
  },
];

const bonuses = [
  {
    icon: Calculator,
    title: "Bônus 1 — Projeções Financeiras",
    description: "Premissas, receitas, custos e cenários para construir números defensáveis e alinhar viabilidade à narrativa do projeto.",
  },
  {
    icon: Sparkles,
    title: "Bônus 2 — Usando IA para Acelerar a Escrita",
    description: "Como usar IA para ganhar velocidade sem cair no genérico: prompts por seção, controle de qualidade e apoio para pitch/roteiro.",
  },
];

export function ModulesSection() {
  return (
    <section id="modulos" className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            O que você vai aprender?
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            São seis módulos, do mapa do ecossistema até a prestação de contas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-6 bg-background/50 border border-stroke/50 rounded-2xl card-glow transition-all duration-200 hover:border-cta/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cta/10 rounded-xl">
                  <module.icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-text mb-2">{module.title}</h3>
                  <p className="text-text-muted">{module.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-highlight bg-highlight/10 border border-highlight/20 rounded-full">
              <Sparkles className="w-4 h-4" />
              Bônus Exclusivos
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="p-6 bg-highlight/5 border border-highlight/20 rounded-2xl transition-all duration-200 hover:border-highlight/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-highlight/10 rounded-xl">
                    <bonus.icon className="w-6 h-6 text-highlight" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-text mb-2">{bonus.title}</h3>
                    <p className="text-text-muted text-sm">{bonus.description}</p>
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
