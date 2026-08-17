import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { WA_MESSAGES } from "@/lib/contact";
import {
  IntelligenceHero,
  IntelligenceProblem,
  MapeamentoSection,
  SprintSection,
  TriggersSection,
  MethodSection,
  LimitsSection,
  SampleSection,
  ParecerSection,
  OwnTechCrossLink,
  IntelligenceContact,
} from "@/components/inteligencia/IntelligenceSections";

const sections = [
  { href: "#mapeamento", label: "Mapeamento" },
  { href: "#sprint", label: "O Sprint" },
  { href: "#metodo-sprint", label: "Como é feito" },
  { href: "#parecer", label: "Parecer" },
  { href: "#contato", label: "Contato" },
];

export default function Inteligencia() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar
          sections={sections}
          active="inteligencia"
          ctaHref="#contato"
          ctaLabel="Avaliar meu caso"
        />
        <main>
          <IntelligenceHero />
          <IntelligenceProblem />
          <MapeamentoSection />
          <SprintSection />
          <TriggersSection />
          <MethodSection />
          <SampleSection />
          <LimitsSection />
          <ParecerSection />
          <OwnTechCrossLink />
          <IntelligenceContact />
        </main>
        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.inteligencia} source="inteligencia" />
      </div>
    </div>
  );
}
