import { Navbar } from "@/components/landing/Navbar";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { AboutSection } from "@/components/landing/AboutSection";
import { Footer } from "@/components/landing/Footer";
import {
  HubHero,
  HubProblem,
  ServicesSection,
  CourseSection,
  ContactSection,
} from "@/components/hub/HubSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HubHero />
          <HubProblem />
          <ServicesSection />
          <CourseSection />
          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
