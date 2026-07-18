import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ShortFold } from "@/components/landing/ShortFold";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { WhatIsSection } from "@/components/landing/WhatIsSection";
import { DeliverablesSection } from "@/components/landing/DeliverablesSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { ForWhoSection } from "@/components/landing/ForWhoSection";
import { ModulesSection } from "@/components/landing/ModulesSection";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { AboutSection } from "@/components/landing/AboutSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

const PRE_SALE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScaA1q3j1zm-gZ3oEwedC6CO0gresyzlr2XATlgv4YtuX_10g/viewform?embedded=true";

export default function Lista() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar
          links={[
            { href: "#problema", label: "Problema" },
            { href: "#metodo", label: "Método" },
            { href: "#modulos", label: "Módulos" },
            { href: "#faq", label: "FAQ" },
          ]}
          ctaHref="#oferta"
          ctaLabel="Entrar na lista de pré-venda"
        />
        <main>
          <Hero />
          <ShortFold />
          <ProblemSection />
          <WhatIsSection />
          <DeliverablesSection />
          <LogoCarousel title="Aprenda um método para aumentar suas chances de aprovação em qualquer edital" />
          <MethodSection />
          <ForWhoSection />
          <ModulesSection />
          <LogoCarousel />
          <AboutSection />

          <section id="oferta" className="py-20 lg:py-28 bg-gradient-to-b from-cta/5 via-cta/10 to-cta/5 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-4" data-testid="text-presale-title">
                    Entre na lista de pré-venda
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed" data-testid="text-presale-subtitle">
                    Deixe seu contato para receber em primeira mão as informações de abertura, condições e próximos passos.
                  </p>
                </div>

                <div className="bg-surface border border-stroke/60 rounded-3xl overflow-hidden">
                  <div className="w-full bg-white" data-testid="container-presale-form">
                    <iframe
                      src={PRE_SALE_FORM_URL}
                      className="w-full h-[1100px] border-0"
                      title="Lista de pré-venda LaunchpadHub"
                      data-testid="iframe-presale-form"
                    />
                  </div>
                </div>

                <p className="mt-4 text-center text-sm text-text-muted" data-testid="text-presale-note">
                  Formulário hospedado no Google Forms.
                </p>
              </div>
            </div>
          </section>

          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
