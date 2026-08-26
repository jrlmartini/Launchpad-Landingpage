import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Check,
  ClipboardCheck,
  FileSearch,
  FlaskConical,
  MessageSquareText,
  LoaderCircle,
  ShieldCheck,
  Target,
  UsersRound,
  X,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { trackEvent } from "@/lib/analytics";
import { capturarOrigem } from "@/lib/utm";
import {
  ENTREGAVEIS,
  FAQ_LAUNCH_LAB,
  INCLUIDO,
  LAUNCH_LAB,
  NAO_INCLUIDO,
  PILARES,
  PUBLICO_LAUNCH_LAB,
  SEMANAS,
} from "@/lib/launch-lab";

const pillarIcons = [FlaskConical, MessageSquareText, FileSearch];

function Cta({ origem, className = "" }: { origem: string; className?: string }) {
  return (
    <a
      href="#inscricao"
      onClick={() =>
        trackEvent("launch_lab_cta_click", {
          page: "launch-lab-rhae-ia-2026",
          section: origem,
        })
      }
      className={`inline-flex items-center justify-center gap-3 rounded-2xl bg-cta px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-cta/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-background cta-glow group ${className}`}
      data-testid={`cta-launch-lab-${origem}`}
    >
      Quero construir meu projeto
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-3xl mb-10 lg:mb-12">
      <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-cta">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-text lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-text-muted">{description}</p>
      )}
    </header>
  );
}

function Checkout() {
  const embedUrl = LAUNCH_LAB.hotmart.embedUrl;
  const [checkoutState, setCheckoutState] = useState<"idle" | "loading" | "error">("idle");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    trackEvent("launch_lab_checkout_view", {
      page: "launch-lab-rhae-ia-2026",
      provider: "hotmart",
    });
  }, []);

  useEffect(() => {
    if (!checkoutOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCheckoutOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [checkoutOpen]);

  const openCheckout = () => {
    setCheckoutState("loading");
    setCheckoutOpen(true);

    trackEvent("launch_lab_checkout_click", {
      page: "launch-lab-rhae-ia-2026",
      provider: "hotmart",
      price: LAUNCH_LAB.oferta.precoAtual,
    });
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    setCheckoutState("idle");
    trackEvent("launch_lab_checkout_close", {
      page: "launch-lab-rhae-ia-2026",
      provider: "hotmart",
    });
  };

  return (
    <div
      className="grid min-h-64 place-items-center rounded-2xl border border-cta/35 bg-background/50 p-8 text-center"
      data-testid="hotmart-checkout-container"
    >
      <div className="max-w-md">
        <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-cta" strokeWidth={1.5} aria-hidden />
        <p className="font-display text-xl font-semibold text-text">
          Inscrição no Launch Lab
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          Finalize sua inscrição no ambiente seguro de pagamento da Hotmart.
        </p>
        <button
          type="button"
          onClick={openCheckout}
          className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cta px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-cta/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-background cta-glow group"
          data-testid="button-hotmart-launch-lab"
        >
          Comprar por R$ {LAUNCH_LAB.oferta.precoAtual}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
        </button>
        <p className="mt-4 text-xs leading-relaxed text-text-muted">
          O checkout abrirá nesta página. A Hotmart apresentará as condições de pagamento antes da confirmação.
        </p>
        {checkoutState === "error" && (
          <p className="mt-3 text-sm leading-relaxed text-highlight" role="alert">
            Não foi possível carregar o checkout. Recarregue a página e tente novamente.
          </p>
        )}
      </div>

      {checkoutOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-0 backdrop-blur-md sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hotmart-checkout-title"
          data-testid="modal-hotmart-launch-lab"
        >
          <div className="flex h-full w-full flex-col overflow-hidden bg-surface sm:h-[94vh] sm:max-w-4xl sm:rounded-3xl sm:border sm:border-stroke/70 sm:shadow-2xl">
            <header className="flex items-center justify-between gap-4 border-b border-stroke/60 px-5 py-4 sm:px-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-cta">Pagamento seguro · Hotmart</p>
                <h3 id="hotmart-checkout-title" className="mt-1 font-display text-lg font-semibold text-text">
                  Inscrição no Launch Lab
                </h3>
              </div>
              <button
                type="button"
                onClick={closeCheckout}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-stroke/60 text-text-muted transition-colors hover:border-cta/50 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
                aria-label="Fechar checkout"
                data-testid="button-close-hotmart-launch-lab"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </header>

            <div className="relative min-h-0 flex-1 bg-white">
              {checkoutState === "loading" && (
                <div className="absolute inset-0 z-10 grid place-items-center bg-surface">
                  <div className="text-center">
                    <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-cta" aria-hidden />
                    <p className="mt-4 text-sm text-text-muted">Carregando checkout seguro…</p>
                  </div>
                </div>
              )}
              <iframe
                src={embedUrl}
                title="Checkout do Launch Lab na Hotmart"
                className="h-full w-full border-0 bg-white"
                allow="payment *"
                referrerPolicy="strict-origin-when-cross-origin"
                onLoad={() => setCheckoutState("idle")}
                onError={() => {
                  setCheckoutState("error");
                  trackEvent("launch_lab_checkout_error", {
                    page: "launch-lab-rhae-ia-2026",
                    provider: "hotmart",
                  });
                }}
                data-testid="iframe-hotmart-launch-lab"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LaunchLabRhae() {
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    capturarOrigem();
  }, []);

  useEffect(() => {
    const target = heroCtaRef.current;
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowMobileCta(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reached = { 50: false, 90: false };
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = (window.scrollY / total) * 100;
      for (const mark of [50, 90] as const) {
        if (progress >= mark && !reached[mark]) {
          reached[mark] = true;
          trackEvent(`scroll_${mark}`, { page: "launch-lab-rhae-ia-2026" });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-starfield opacity-35" />
      <div className="relative z-10">
        <Navbar
          active="treinamentos"
          ctaHref="#inscricao"
          ctaLabel="Ver inscrição"
        />

        <main>
          <section className="relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/35 to-background" />
              <div className="absolute inset-0 hero-scrim" />
            </div>

            <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
              <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-cta">
                Launch Lab · RHAE IA 2026
              </p>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] text-text sm:text-5xl lg:text-6xl">
                Construa. Avalie. Melhore. Submeta.
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-text/85 lg:text-2xl">
                Quatro semanas para transformar sua ideia em um projeto estruturado para o RHAE IA, com oito encontros aplicados e um diagnóstico individual antes da submissão.
              </p>

              <dl className="mt-9 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Duração", LAUNCH_LAB.formato.duracao],
                  ["Encontros", LAUNCH_LAB.formato.encontros],
                  ["Formato", "Online e ao vivo"],
                  ["Entrega", "Projeto + LaunchScore"],
                ].map(([label, value]) => (
                  <div key={label} className="border-l border-cta/50 pl-4">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-semibold text-text">{value}</dd>
                  </div>
                ))}
              </dl>

              <div ref={heroCtaRef} className="mt-10">
                <Cta origem="hero" className="w-full sm:w-auto" />
                <p className="mt-4 text-sm text-text-muted">
                  Inscrições até {LAUNCH_LAB.oferta.inscricoesAte}. O curso começa na mesma data.
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-stroke/40 bg-surface/35 py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <p className="font-display text-2xl font-medium leading-relaxed text-text lg:text-3xl">
                Existe uma distância entre identificar uma oportunidade no edital e ter uma proposta coerente, executável e pronta para uma leitura crítica.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">
                O Launch Lab organiza as decisões de elegibilidade, papel da IA, aderência, objetivos, metodologia, inovação, equipe e orçamento em uma sequência de trabalho aplicada ao projeto real de cada participante.
              </p>
            </div>
          </section>

          <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Método de trabalho"
                title="Três componentes da entrega"
                description="Cada encontro combina o conteúdo necessário, a aplicação no projeto e a discussão das decisões tomadas."
              />
              <div className="grid gap-5 lg:grid-cols-3">
                {PILARES.map((pilar, index) => {
                  const Icon = pillarIcons[index];
                  return (
                    <article key={pilar.nome} className="rounded-3xl border border-stroke/60 bg-surface/70 p-7">
                      <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-cta/10">
                        <Icon className="h-5 w-5 text-cta" strokeWidth={1.5} aria-hidden />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-text">{pilar.nome}</h3>
                      <p className="mt-3 leading-relaxed text-text-muted">{pilar.descricao}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-y border-stroke/40 bg-surface/30 py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Programa"
                title="Quatro módulos de construção"
                description="A sequência acompanha a lógica do projeto: definir a tese, estruturar a execução, sustentar o mérito e fechar a proposta."
              />
              <div className="grid gap-5 lg:grid-cols-2">
                {SEMANAS.map((semana) => (
                  <article key={semana.numero} className="rounded-3xl border border-stroke/60 bg-background/50 p-7 lg:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-sm font-semibold text-cta">MÓDULO {semana.numero}</span>
                      <CalendarDays className="h-5 w-5 text-text-muted" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-text">{semana.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-text-muted">{semana.descricao}</p>
                    <div className="mt-6 grid gap-5 border-t border-stroke/50 pt-5 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Aulas</p>
                        <ul className="mt-2 space-y-2 text-sm text-text">
                          {semana.encontros.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Entregas</p>
                        <ul className="mt-2 space-y-2 text-sm text-text">
                          {semana.entregas.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
              <div>
              <SectionTitle
                eyebrow="Resultado do programa"
                  title="Quatro entregas conectadas à proposta"
                  description="O caderno organiza o trabalho dos módulos, alimenta o modelo oficial e prepara a proposta para o checklist e o diagnóstico final."
                />
                <ul className="grid gap-3 sm:grid-cols-2">
                  {ENTREGAVEIS.map((item, index) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-stroke/50 bg-surface/45 p-4">
                      <span className="font-mono text-xs text-cta">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-sm leading-relaxed text-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="self-start rounded-3xl border border-cta/35 bg-cta/[0.07] p-7 lg:sticky lg:top-32 lg:p-9">
                <ClipboardCheck className="h-8 w-8 text-cta" strokeWidth={1.5} aria-hidden />
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-cta">LaunchScore Report</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-text">Uma segunda leitura estruturada</h3>
                <p className="mt-5 leading-relaxed text-text-muted">
                  O relatório analisa uma versão da proposta com base nos critérios e pesos oficiais, nos requisitos formais, na coerência interna e em padrões observados na base histórica de projetos aprovados disponível à Launchpad.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Alertas de elegibilidade e completude", "Score estimado por critério", "Evidências, fragilidades e inconsistências", "Cinco melhorias prioritárias"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-cta/20 pt-5 text-sm leading-relaxed text-text-muted">
                  O LaunchScore é um diagnóstico da Launchpad. Não corresponde à nota do CNPq, não estima probabilidade de aprovação e não substitui a decisão do comitê julgador.
                </p>
                <a
                  href="/projetos#launchscore"
                  onClick={() =>
                    trackEvent("launch_lab_launchscore_learn_more", {
                      page: "launch-lab-rhae-ia-2026",
                      section: "launchscore",
                    })
                  }
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cta transition-colors hover:text-cta/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
                >
                  Entenda como funciona o LaunchScore
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </aside>
            </div>
          </section>

          <section className="border-y border-stroke/40 bg-surface/30 py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Perfil da turma"
                title="Para quem está construindo um projeto real"
                description="O participante ideal possui uma empresa potencialmente elegível, uma ideia de projeto e disponibilidade para trabalhar nela durante quatro semanas."
              />
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-stroke/60 bg-background/45 p-7 lg:p-8">
                  <UsersRound className="h-7 w-7 text-cta" strokeWidth={1.5} aria-hidden />
                  <ul className="mt-6 space-y-4">
                    {PUBLICO_LAUNCH_LAB.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-muted">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-cta" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-stroke/60 bg-background/45 p-7 lg:p-8">
                  <BrainCircuit className="h-7 w-7 text-cta" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-6 font-display text-xl font-semibold text-text">O ponto de partida</h3>
                  <p className="mt-3 leading-relaxed text-text-muted">
                    Não é necessário chegar com a proposta pronta. O formulário inicial registra empresa, setor, problema, tecnologia, aplicação, estágio, papel esperado para a IA, equipe e dúvidas antes do primeiro encontro.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <SectionTitle eyebrow="Escopo" title="O que está incluído" />
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-cta/25 bg-cta/[0.05] p-7 lg:p-8">
                  <Target className="h-7 w-7 text-cta" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold text-text">Entrega do Launch Lab</h3>
                  <ul className="mt-5 space-y-3">
                    {INCLUIDO.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-stroke/60 bg-surface/50 p-7 lg:p-8">
                  <ShieldCheck className="h-7 w-7 text-text-muted" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold text-text">Responsabilidade do participante</h3>
                  <ul className="mt-5 space-y-3">
                    {NAO_INCLUIDO.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="inscricao" className="scroll-mt-28 border-y border-cta/20 bg-cta/[0.06] py-16 lg:py-24">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-cta">Inscrições abertas</p>
                  <h2 className="mt-4 font-display text-3xl font-bold text-text lg:text-4xl">Launch Lab | RHAE IA 2026</h2>
                  <p className="mt-5 leading-relaxed text-text-muted">
                    Oito encontros ao vivo, materiais de construção, comunidade da turma e LaunchScore Report.
                  </p>
                  <div className="mt-8 border-y border-stroke/50 py-7">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">Investimento</p>
                    <p className="mt-2 font-display text-5xl font-bold text-text">R$ {LAUNCH_LAB.oferta.precoAtual}</p>
                    <p className="mt-3 text-sm text-text-muted">
                      Inscrições até {LAUNCH_LAB.oferta.inscricoesAte}. O curso começa em {LAUNCH_LAB.oferta.inicio}.
                    </p>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-text-muted">
                    A compra será processada pela Hotmart. Condições de pagamento, termos e dados do produto serão apresentados no checkout.
                  </p>
                </div>
                <Checkout />
              </div>
            </div>
          </section>

          <section className="py-16 lg:py-24" id="faq">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <SectionTitle eyebrow="Perguntas frequentes" title="Informações antes da inscrição" />
              <div className="divide-y divide-stroke/60 border-y border-stroke/60">
                {FAQ_LAUNCH_LAB.map((item) => (
                  <details key={item.pergunta} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-semibold text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta">
                      {item.pergunta}
                      <span className="text-2xl font-normal text-cta transition-transform group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="max-w-3xl pt-4 leading-relaxed text-text-muted">{item.resposta}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-stroke/40 bg-surface/30 py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cta">Próxima decisão</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-text lg:text-4xl">Organize o trabalho antes do prazo de submissão</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
                A chamada encerra em 9 de outubro de 2026. O Launch Lab cria uma cadência de quatro semanas para construir, testar e revisar a proposta.
              </p>
              <Cta origem="final" className="mt-8 w-full sm:w-auto" />
              <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-text-muted">
                O programa não garante aprovação ou obtenção de recursos. O participante é responsável pela proposta, pelas informações fornecidas e pela submissão ao CNPq.
              </p>
            </div>
          </section>
        </main>

        <Footer productName="Launch Lab" />
      </div>

      {showMobileCta && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stroke/60 bg-background/95 p-3 backdrop-blur-xl sm:hidden">
          <Cta origem="mobile-sticky" className="w-full py-3.5 text-sm" />
        </div>
      )}
    </div>
  );
}
