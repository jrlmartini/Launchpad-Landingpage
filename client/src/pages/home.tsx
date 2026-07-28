import { Navbar } from "@/components/landing/Navbar";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { Footer } from "@/components/landing/Footer";
import {
  HomeHero,
  PathsSection,
  AboutMe,
  HomeContact,
} from "@/components/home/HomeSections";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { WA_MESSAGES } from "@/lib/contact";

const sections = [
  { href: "#caminhos", label: "Como trabalho" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#contato", label: "Contato" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar
          sections={sections}
          active="home"
          ctaHref="#caminhos"
          ctaLabel="Começar"
        />
        <main>
          <HomeHero />
          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />
          <PathsSection />
          <AboutMe />
          <HomeContact />
        </main>
        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.geral} />
      </div>
    </div>
  );
}
