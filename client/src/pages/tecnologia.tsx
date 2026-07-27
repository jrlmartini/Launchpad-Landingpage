import { Navbar } from "@/components/landing/Navbar";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { AboutSection } from "@/components/landing/AboutSection";
import { Footer } from "@/components/landing/Footer";
import {
  HubHero,
  HubProblem,
  HubMethod,
  DiagnosticoSection,
  OtherServicesSection,
  HubForWho,
  HubFAQ,
  ContactSection,
  ProjectsCrossLink,
} from "@/components/hub/HubSections";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { WA_MESSAGES } from "@/lib/contact";

const sections = [
  { href: "#metodo", label: "Método" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#rota", label: "Rota Comercial" },
  { href: "#parecer", label: "Parecer" },
  { href: "#sobre", label: "Sobre" },
];

export default function Tecnologia() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar
          sections={sections}
          active="tecnologia"
          ctaHref="#diagnostico"
          ctaLabel="Solicitar Diagnóstico"
        />
        <main>
          <HubHero />
          <HubProblem />
          <HubMethod />
          <DiagnosticoSection />
          <OtherServicesSection />
          <HubForWho />
          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />
          <AboutSection />
          <HubFAQ />
          <ProjectsCrossLink />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.tecnologia} />
      </div>
    </div>
  );
}
