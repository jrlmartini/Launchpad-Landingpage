import { Navbar } from "@/components/landing/Navbar";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { AboutSection } from "@/components/landing/AboutSection";
import { Footer } from "@/components/landing/Footer";
import {
  ProjectsHero,
  ProjectsProblem,
  ProjectServicesCards,
  ProjectServicesComparison,
  ProjectsFAQ,
  ProjectsContact,
  TechCrossLink,
} from "@/components/hub/ProjectServices";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { WA_MESSAGES } from "@/lib/contact";

const sections = [
  { href: "#escrita", label: "Escrita do Projeto" },
  { href: "#revisao", label: "Revisão do Projeto" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export default function Projetos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar
          sections={sections}
          active="projetos"
          ctaHref="#contato"
          ctaLabel="Falar sobre meu projeto"
        />
        <main>
          <ProjectsHero />
          <ProjectsProblem />
          <ProjectServicesCards />
          <ProjectServicesComparison />
          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />
          <AboutSection />
          <ProjectsFAQ />
          <TechCrossLink />
          <ProjectsContact />
        </main>
        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.geral} />
      </div>
    </div>
  );
}
