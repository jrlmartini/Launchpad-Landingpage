import { Navbar } from "@/components/landing/Navbar";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { Footer } from "@/components/landing/Footer";
import {
  HomeHero,
  ProofBand,
  PathsSection,
  AboutMe,
  HomeContact,
} from "@/components/home/HomeSections";
import { Testimonials } from "@/components/shared/Testimonials";

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
          ctaLabel="Escolher meu próximo passo"
        />
        <main>
          <HomeHero />
          <ProofBand />
          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />
          <PathsSection />
          <Testimonials
            tag="fomento"
            titulo="Quem já trabalhou comigo"
            className="bg-surface/30 border-y border-stroke/30"
          />
          <AboutMe />
          <HomeContact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
