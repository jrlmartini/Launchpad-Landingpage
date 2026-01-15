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
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
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
          <OfferSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
