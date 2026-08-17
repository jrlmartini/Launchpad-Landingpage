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
import { OfferSection } from "@/components/landing/OfferSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Testimonials } from "@/components/shared/Testimonials";
import { Footer } from "@/components/landing/Footer";

const sections = [
  { href: "#problema", label: "Por que projetos não decolam" },
  { href: "#metodo", label: "Método" },
  { href: "#modulos", label: "Módulos" },
  { href: "#oferta", label: "O que está incluso" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export default function Curso() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar
          sections={sections}
          active="curso"
          ctaHref="#oferta"
          ctaLabel="Quero preparar minha missão"
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
          <Testimonials
            tag="curso"
            titulo="Quem aprendeu o método"
            className="bg-surface/30 border-y border-stroke/30"
          />
          <OfferSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
