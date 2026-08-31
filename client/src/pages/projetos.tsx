import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
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
import { Testimonials } from "@/components/shared/Testimonials";

const sections = [
  { href: "#escrita", label: "Escrita do Projeto" },
  { href: "#launchscore", label: "LaunchScore" },
  { href: "#faq", label: "Perguntas frequentes" },
];

export default function Projetos() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const scrollToSection = () => document.getElementById(id)?.scrollIntoView();
    window.requestAnimationFrame(scrollToSection);
    const retry = window.setTimeout(scrollToSection, 200);

    return () => window.clearTimeout(retry);
  }, []);

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
          <Testimonials
            tag="fomento"
            titulo="Quem já passou por isso"
            subtitulo="Empresas e pesquisadores que estruturaram projetos de fomento comigo."
            className="bg-surface/30 border-y border-stroke/30"
          />
          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />
          <ProjectsFAQ />
          <TechCrossLink />
          <ProjectsContact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
