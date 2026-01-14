import { Check, X } from "lucide-react";

const forYou = [
  "Tem uma tecnologia forte e quer transformar isso em projeto financiável",
  "Quer parar de \"tentar edital\" e operar captação como processo",
  "Precisa de um método reutilizável, com templates e checklists",
];

const notForYou = [
  "Procura \"hack\" ou promessa de aprovação garantida",
  "Não quer escrever, revisar e melhorar com rigor",
  "Quer conteúdo motivacional em vez de execução",
];

export function ForWhoSection() {
  return (
    <section className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Para quem é (e para quem não é)
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Este curso foi desenhado para empreendedores e founders de deep tech, consultores e gestores de inovação que querem navegar melhor o ecossistema de fomento e escrever, avaliar e defender projetos consistentes, com alta competitividade e maior probabilidade de aprovação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-cta/5 border border-cta/20 rounded-3xl">
            <h3 className="font-display font-semibold text-xl text-cta mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" strokeWidth={2} />
              Este curso é para você se:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-surface/50 border border-stroke/50 rounded-3xl">
            <h3 className="font-display font-semibold text-xl text-text-muted mb-6 flex items-center gap-2">
              <X className="w-6 h-6" strokeWidth={2} />
              Não é para você se:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
