import { BookOpen, Layers, Pencil, ClipboardCheck, Calculator, Sparkles } from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Módulo 1 — O Sistema Nacional de Fomento à Inovação",
    description: "Instrumentos, políticas, programas e como navegar o ecossistema com clareza.",
  },
  {
    icon: Layers,
    title: "Módulo 2 — Os Pilares de um Projeto de Inovação",
    description: "Os 3 Pilares de um projeto e como estruturar.",
  },
  {
    icon: Pencil,
    title: "Módulo 3 — Desenvolvendo um Bom Projeto do Início ao Fim",
    description: "Leitura de edital, seções do projeto, mercado, impactos, riscos, orçamento, contrapartidas e armadilhas.",
  },
  {
    icon: ClipboardCheck,
    title: "Módulo 4 — Prestação de Contas e Governança",
    description: "Boas práticas, relatórios e trilha de evidências para auditoria e acompanhamento.",
  },
];

const bonuses = [
  {
    icon: Calculator,
    title: "Bônus 1 — Projeções Financeiras",
    description: "Premissas, receitas, custos, mão de obra e coerência com a narrativa do projeto.",
  },
  {
    icon: Sparkles,
    title: "Bônus 2 — IA para acelerar (sem virar texto genérico)",
    description: "Prompt packs por seção, anti-alucinação e IA para pitch/voice-over.",
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

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-highlight bg-highlight/10 border border-highlight/20 rounded-full">
              <Sparkles className="w-4 h-4" />
              Bônus Exclusivos
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
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
