import { Play, FileSpreadsheet, CheckSquare, BookOpen, Sparkles, Target, Radio, ArrowRight } from "lucide-react";

const features = [
  { icon: Play, text: "Aulas gravadas + materiais" },
  { icon: FileSpreadsheet, text: "Templates, planilhas, checklists e eBook completo com todo o conteúdo" },
  { icon: Sparkles, text: "Aulas Bônus - Projeções Financeiras e IA para Projetos (com prompts!)" },
  { icon: Target, text: "Missão final (capstone): seu projeto completo + checklist final" },
  { icon: Radio, text: "1 ano de acesso às lives dos lançamentos de novos editais (fique atualizado!)" },
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-20 lg:py-28 bg-gradient-to-b from-cta/5 via-cta/10 to-cta/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-4">
              Acesso ao curso + Ferramentas LaunchpadHub
            </h2>
          </div>

          <div className="p-8 lg:p-10 bg-surface border border-cta/30 rounded-3xl card-glow mb-8">
            <ul className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-cta/10 rounded-xl">
                    <feature.icon className="w-5 h-5 text-cta" strokeWidth={1.5} />
                  </div>
                  <span className="text-text text-lg pt-1.5">{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href="www.conatusambiental.com.br"
                className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
                data-testid="button-cta-offer"
              >
                Quero entrar no LaunchpadHub
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-4 text-sm text-text-muted italic">
                Explore novos mundos — com uma missão que para em pé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
