import { FileCheck, Table, BookOpen, CheckSquare, FolderOpen } from "lucide-react";

const deliverables = [
  {
    icon: FileCheck,
    title: "Projeto estruturado",
    description: "Pronto para submissão/adaptação",
  },
  {
    icon: Table,
    title: "Templates e planilhas",
    description: "EAP/WBS, WPs, canvas de TRL, cronograma, matriz de riscos, orçamento, contrapartidas, impactos e métricas",
  },
  {
    icon: BookOpen,
    title: "eBook prático",
    description: "Para consulta rápida com o resumo do conteúdo",
  },
  {
    icon: CheckSquare,
    title: "Checklist pré-submissão",
    description: 'O "controle de missão" antes do envio',
  },
  {
    icon: FolderOpen,
    title: "Kit de governança",
    description: "Trilha de evidências e modelos de relatórios",
  },
];

export function DeliverablesSection() {
  return (
    <section className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            O que você tem ao final?
          </h2>
          <p className="text-lg text-text-muted">
            Ao final, você sai com:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className={`p-6 bg-surface/50 border border-stroke/50 rounded-2xl card-glow transition-all duration-200 hover:border-cta/30 ${
                index === deliverables.length - 1 && deliverables.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cta/10 rounded-xl">
                <item.icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">{item.title}</h3>
              <p className="text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
