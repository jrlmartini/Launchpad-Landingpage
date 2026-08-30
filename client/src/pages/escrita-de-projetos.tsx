import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  PenTool,
  SearchCheck,
  Target,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { LogoCarousel } from "@/components/landing/LogoCarousel";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/hub/WhatsAppIcon";
import { Testimonials } from "@/components/shared/Testimonials";
import { waLink, WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const sections = [
  { href: "#quando-faz-sentido", label: "Para quem é" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#entregas", label: "Entregas" },
  { href: "#contato", label: "Contato" },
];

const etapas = [
  {
    numero: "01",
    titulo: "Enquadramento e Go/No-Go",
    texto:
      "Confirmamos edital, linha, elegibilidade, TRL, contrapartida e aderência antes de investir tempo na redação.",
  },
  {
    numero: "02",
    titulo: "Arquitetura da proposta",
    texto:
      "Organizamos problema, diferencial, evidências, objetivos, método, entregáveis e indicadores na lógica em que o projeto será avaliado.",
  },
  {
    numero: "03",
    titulo: "Redação a quatro mãos",
    texto:
      "A Launchpad escreve cada campo. Seu time valida os dados técnicos, as premissas e as decisões que pertencem à empresa.",
  },
  {
    numero: "04",
    titulo: "Fechamento e defesa",
    texto:
      "Revisamos coerência, cronograma, orçamento, riscos e perguntas prováveis antes da versão final de submissão.",
  },
];

const entregas = [
  "Enquadramento do projeto e decisão Go/No-Go",
  "Redação completa da proposta, campo a campo",
  "Plano de trabalho, cronograma, metas e entregáveis",
  "Orçamento defensável e memória das principais premissas",
  "Riscos, indicadores e coerência entre todas as seções",
  "Preparação para defesa e questionamentos do avaliador",
];

const fit = [
  {
    icon: Target,
    titulo: "Você já tem um edital em vista",
    texto:
      "A chamada, a linha e o prazo estão definidos, mas a proposta ainda precisa ser estruturada.",
  },
  {
    icon: Users,
    titulo: "O conhecimento está no seu time",
    texto:
      "A empresa domina a tecnologia e os dados; falta transformar esse conhecimento em uma proposta clara e avaliável.",
  },
  {
    icon: FileCheck2,
    titulo: "O projeto precisa fechar como sistema",
    texto:
      "Objetivos, método, equipe, cronograma, orçamento e impacto precisam sustentar a mesma tese.",
  },
];

function WritingCta({ source, label = "Conversar sobre meu projeto" }: { source: string; label?: string }) {
  return (
    <a
      href={waLink(WA_MESSAGES.escrita, source)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_whatsapp", { source, offer: "escrita-de-projetos" })}
      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-cta px-7 py-4 text-base font-semibold text-white cta-glow transition-colors hover:bg-cta/90"
      data-testid={`cta-whatsapp-${source}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
      <ArrowRight className="h-5 w-5" aria-hidden />
    </a>
  );
}

export default function EscritaDeProjetos() {
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
          <section className="relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-48">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
              <div className="absolute inset-0 hero-scrim" />
            </div>
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
              <div>
                <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-cta">
                  Escrita de projetos de fomento
                </p>
                <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
                  Sua tecnologia precisa funcionar também no papel.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text/85 lg:text-xl">
                  A Launchpad estrutura e escreve a proposta com o seu time, do enquadramento do edital à versão final para submissão.
                </p>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <WritingCta source="escrita-hero" />
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center gap-2 px-3 py-3 font-semibold text-text-muted transition-colors hover:text-cta"
                  >
                    Ver como funciona
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-cta/30 bg-surface/90 p-7 card-glow lg:p-9">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cta">
                  <PenTool className="h-7 w-7 text-white" strokeWidth={1.5} aria-hidden />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cta">
                  Do enquadramento à submissão
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-text">
                  Um especialista dentro da construção da proposta
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    "Decisão Go/No-Go antes da redação",
                    "Texto construído campo a campo",
                    "Plano de trabalho e orçamento coerentes",
                    "Revisão final e preparação para a defesa",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-muted">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cta" strokeWidth={1.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="quando-faz-sentido" className="scroll-mt-32 border-y border-stroke/30 bg-surface/30 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="font-display text-3xl font-bold text-text lg:text-4xl">
                  Quando a escrita a quatro mãos faz sentido
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  Este trabalho começa antes da versão avançada. Ele serve para empresas que precisam construir a lógica inteira da proposta, e não apenas revisar o texto.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {fit.map((item) => (
                  <article key={item.titulo} className="rounded-3xl border border-stroke/50 bg-background/45 p-7">
                    <item.icon className="h-7 w-7 text-cta" strokeWidth={1.5} aria-hidden />
                    <h3 className="mt-5 font-display text-xl font-semibold text-text">{item.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-text-muted">{item.texto}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="como-funciona" className="scroll-mt-32 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mb-12 max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cta">Processo de trabalho</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-text lg:text-4xl">
                  A proposta é construída na ordem das decisões
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {etapas.map((etapa) => (
                  <article key={etapa.numero} className="rounded-3xl border border-stroke/50 bg-surface/50 p-7 lg:p-8">
                    <p className="font-mono text-sm text-cta">{etapa.numero}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-text">{etapa.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-text-muted">{etapa.texto}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="entregas" className="scroll-mt-32 border-y border-stroke/30 bg-surface/30 py-20 lg:py-28">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div>
                <SearchCheck className="h-9 w-9 text-cta" strokeWidth={1.5} aria-hidden />
                <h2 className="mt-5 font-display text-3xl font-bold text-text lg:text-4xl">O que entra na entrega</h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  O escopo final depende do edital e do estágio do projeto. A conversa inicial serve para confirmar prazo, disponibilidade do time e volume real de trabalho.
                </p>
              </div>
              <div className="rounded-3xl border border-cta/25 bg-background/55 p-7 lg:p-9">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {entregas.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cta" strokeWidth={1.5} />
                      <span className="leading-relaxed text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Testimonials
            tag="fomento"
            titulo="Projetos técnicos exigem tradução, estrutura e decisão"
            subtitulo="Depoimentos de empresas e pesquisadores que trabalharam com a Launchpad em projetos de fomento e comercialização."
          />
          <LogoCarousel title="Experiência com os principais instrumentos de fomento do país" />

          <section id="contato" className="scroll-mt-32 border-t border-stroke/30 bg-surface/30 py-20 lg:py-28">
            <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
              <h2 className="font-display text-3xl font-bold text-text lg:text-4xl">Vamos avaliar o seu edital e o estágio da proposta</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
                Envie a chamada, o prazo, um resumo da tecnologia e o que já existe no papel. A primeira conversa define se há aderência e qual escopo precisa ser construído.
              </p>
              <div className="mt-9">
                <WritingCta source="escrita-final" label="Enviar meu caso pelo WhatsApp" />
              </div>
              <p className="mt-6 text-sm text-text-muted">
                Já tem uma versão avançada? <a href="/projetos/launchscore" className="font-semibold text-cta hover:underline">Conheça o LaunchScore.</a>
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.escrita} />
      </div>
    </div>
  );
}
