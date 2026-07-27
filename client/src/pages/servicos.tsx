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
} from "@/components/hub/HubSections";
import {
  ServicesTrackNav,
  ProjectServicesIntro,
  ProjectServicesCards,
  ProjectServicesComparison,
  TechTrackIntro,
} from "@/components/hub/ProjectServices";

const servicosLinks = [
  { href: "/servicos#projetos", label: "Projetos" },
  { href: "/servicos#tecnologia", label: "Tecnologia" },
  { href: "/servicos#sobre", label: "Sobre" },
  { href: "/", label: "Curso" },
];

export default function Servicos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar
          links={servicosLinks}
          ctaHref="#contato"
          ctaLabel="Falar comigo"
        />
        <main>
          <HubHero />
          <ServicesTrackNav />

          {/* Trilha 1 — Projeto de fomento */}
          <ProjectServicesIntro />
          <ProjectServicesCards />
          <ProjectServicesComparison />

          {/* Trilha 2 — Tecnologia e mercado */}
          <TechTrackIntro />
          <HubProblem />
          <HubMethod />
          <DiagnosticoSection />
          <OtherServicesSection />
          <HubForWho />

          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />
          <AboutSection />
          <HubFAQ />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
