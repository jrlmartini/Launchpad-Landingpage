import { useState, useRef, useEffect } from "react";
import { Play, FileSpreadsheet, Sparkles, Target, Radio, ArrowRight, ChevronUp, X } from "lucide-react";
import { CHECKOUT_CONFIG } from "@/lib/checkout-widget";

const features = [
  { icon: Play, text: "Aulas gravadas + materiais" },
  { icon: FileSpreadsheet, text: "Templates, planilhas, checklists e eBook completo com todo o conteúdo" },
  { icon: Sparkles, text: "Aulas Bônus - Projeções Financeiras e IA para Projetos (com prompts!)" },
  { icon: Target, text: "Missão final (capstone): seu projeto completo + checklist final" },
  { icon: Radio, text: "1 ano de acesso às lives dos lançamentos de novos editais (fique atualizado!)" },
];

export function OfferSection() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const checkoutRef = useRef<HTMLDivElement>(null);

  const handleToggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  useEffect(() => {
    if (isCheckoutOpen && checkoutRef.current) {
      setTimeout(() => {
        checkoutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [isCheckoutOpen]);

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
              <button
                onClick={handleToggleCheckout}
                className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group cursor-pointer"
                data-testid="button-cta-offer"
              >
                Quero entrar no LaunchpadHub
                {isCheckoutOpen ? (
                  <ChevronUp className="w-5 h-5 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
              <p className="mt-4 text-sm text-text-muted italic">
                Explore novos mundos — com uma missão que para em pé.
              </p>
            </div>
          </div>

          <div
            ref={checkoutRef}
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isCheckoutOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 lg:p-8 bg-surface border border-stroke/50 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-xl text-text">
                  Finalizar inscrição
                </h3>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="p-2 text-text-muted hover:text-text transition-colors rounded-lg hover:bg-stroke/30"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {isCheckoutOpen && (
                <div className="flex justify-center">
                  <a
                    href={CHECKOUT_CONFIG.hotmart.productUrl}
                    className="hotmart-fb hotmart__button-checkout inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-200"
                    data-testid="button-hotmart-checkout"
                  >
                    <img 
                      src="https://static.hotmart.com/img/btn-buy-green.png" 
                      alt="Comprar agora" 
                      className="h-6"
                    />
                    Ir para pagamento seguro
                  </a>
                </div>
              )}
              
              <p className="mt-4 text-center text-sm text-text-muted">
                Pagamento processado pela Hotmart com total segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
