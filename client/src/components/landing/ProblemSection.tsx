import { XCircle } from "lucide-react";

const problems = [
  {
    title: "Match errado",
    description: "O projeto não encaixa no edital (tema, TRL, contrapartida, ticket)",
  },
  {
    title: "Texto acadêmico",
    description: "Muito contexto, pouca decisão",
  },
  {
    title: "Evidência fraca",
    description: "Promessa sem baseline, métricas ou validação",
  },
  {
    title: "Plano inconsistente",
    description: "Entregáveis e cronograma que não fecham",
  },
  {
    title: "Orçamento indefensável",
    description: "Números sem lógica e sem justificativa",
  },
  {
    title: "Governança frágil",
    description: "Prestação de contas vira caos (ou glosa)",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Por que projetos bons não decolam?
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            O sistema de fomento é um ambiente competitivo: regras, critérios, elegibilidade e riscos.
            O que derruba a maioria dos projetos não é "falta de potencial". É:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 bg-surface/50 border border-stroke/50 rounded-2xl card-glow transition-all duration-200 hover:border-destructive/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <XCircle className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg text-text">{problem.title}</h3>
              </div>
              <p className="text-text-muted">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-6 bg-destructive/5 border border-destructive/20 rounded-2xl text-center text-[#e44142]">
          <p className="text-lg text-text">
            <strong>Resultado:</strong> a ideia fica na torre. E o recurso vai para quem apresentou melhor{" "}
            <span className="font-extrabold text-[#eb0023]">"missão e rota"</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
