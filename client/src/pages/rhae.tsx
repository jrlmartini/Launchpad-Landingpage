import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ExternalLink, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FormularioRhae } from "@/components/rhae/FormularioRhae";
import { trackEvent } from "@/lib/analytics";
import { capturarOrigem } from "@/lib/utm";
import {
  RHAE, CTA_LABEL, NUMEROS, CRITERIOS, CONTEUDO,
  PUBLICO, VERIFICACOES, FAQ, linhaEvento,
} from "@/lib/rhae";

const PESO_MAX = Math.max(...CRITERIOS.map((c) => c.peso));

function Cta({
  secao,
  className = "",
}: {
  secao: string;
  className?: string;
}) {
  return (
    <a
      href="#inscricao"
      onClick={() =>
        trackEvent(secao === "hero" ? "hero_cta_click" : "section_cta_click", {
          section: secao,
        })
      }
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 text-base lg:text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group ${className}`}
      data-testid={`cta-${secao}`}
    >
      {CTA_LABEL}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

export default function RhaeIa2026() {
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const [mostrarBarra, setMostrarBarra] = useState(false);

  useEffect(() => {
    capturarOrigem();
  }, []);

  /* CTA fixo em mobile, só depois que o botão do hero sai da viewport. */
  useEffect(() => {
    const el = heroCtaRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([e]) => setMostrarBarra(!e.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Profundidade de leitura. Dispara uma vez cada. */
  useEffect(() => {
    const marcos = { 50: false, 90: false };
    const onScroll = () => {
      const alcance =
        document.documentElement.scrollHeight - window.innerHeight;
      if (alcance <= 0) return;
      const pct = (window.scrollY / alcance) * 100;
      for (const m of [50, 90] as const) {
        if (pct >= m && !marcos[m]) {
          marcos[m] = true;
          trackEvent(`scroll_${m}`, { page: "rhae-ia-2026" });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar active="treinamentos" ctaHref="#inscricao" ctaLabel={CTA_LABEL} />

        <main>
          {/* 4.1 Hero */}
          <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background" />
              <div className="absolute inset-0 hero-scrim" />
            </div>

            <div className="max-w-3xl mx-auto px-6 lg:px-8 relative">
              <p className="text-xs font-mono uppercase tracking-widest text-cta mb-5">
                Live gratuita · RHAE IA 2026
              </p>
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-[1.15] mb-6">
                Sua empresa pode solicitar até R$ 300 mil em bolsas para
                desenvolver um projeto de inteligência artificial.
              </h1>
              <p className="text-lg text-text/85 leading-relaxed mb-8">
                Em 24 de agosto, vamos explicar quem pode participar da{" "}
                {RHAE.edital.chamada}, quais projetos atendem ao RHAE IA e como
                os critérios de julgamento devem orientar a preparação da
                proposta.
              </p>

              <p className="inline-block px-4 py-2 mb-8 text-xs font-mono uppercase tracking-wider text-text bg-surface/70 border border-stroke/60 rounded-full">
                {linhaEvento()}
              </p>

              <div ref={heroCtaRef}>
                <Cta secao="hero" className="w-full sm:w-auto" />
                <p className="mt-4 text-sm text-text-muted">
                  Inscrição gratuita para participação ao vivo.
                </p>
              </div>
            </div>
          </section>

          {/* 4.2 A chamada em números */}
          <section className="py-16 lg:py-20 bg-surface/30 border-y border-stroke/30">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-5">
                A chamada RHAE IA 2026
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10">
                A chamada prevê R$ 50 milhões para projetos de Pesquisa,
                Desenvolvimento e Inovação que adotem ou desenvolvam
                inteligência artificial para inovação empresarial. O apoio é
                concedido por meio de bolsas para inserir pesquisadores e
                profissionais no desenvolvimento do projeto.
              </p>

              <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mb-10">
                {NUMEROS.map((n) => (
                  <div key={n.legenda}>
                    <dt className="font-display font-bold text-2xl lg:text-[1.75rem] text-cta leading-tight mb-2">
                      {n.valor}
                    </dt>
                    <dd className="text-sm text-text-muted leading-relaxed">
                      {n.legenda}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="p-5 bg-background/50 border border-stroke/50 rounded-2xl text-text-muted leading-relaxed">
                A empresa e eventuais instituições parceiras devem aportar uma
                contrapartida mínima equivalente a 20% do valor solicitado em
                bolsas. As demais despesas do projeto também ficam sob
                responsabilidade da empresa e dos parceiros, quando houver.
              </p>
            </div>
          </section>

          {/* 4.3 Público */}
          <section className="py-16 lg:py-20">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-5">
                Para quem é esta live
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                A live foi preparada para fundadores, gestores de inovação e
                P&amp;D, responsáveis por projetos tecnológicos e pesquisadores
                ligados a microempresas, pequenas empresas ou startups
                brasileiras.
              </p>
              <p className="text-text-muted mb-4">
                Ela será especialmente útil para quem:
              </p>
              <ul className="space-y-3 mb-10">
                {PUBLICO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-cta"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="text-text-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Cta secao="publico" className="w-full sm:w-auto" />
            </div>
          </section>

          {/* 4.4 Conteúdo */}
          <section className="py-16 lg:py-20 bg-surface/30 border-y border-stroke/30">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-5">
                O que será apresentado
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-10">
                A live vai organizar o edital em três decisões: quem pode
                concorrer, que projetos se enquadram e como preparar a proposta
                de acordo com os critérios publicados pelo CNPq.
              </p>

              <ol className="space-y-5">
                {CONTEUDO.map((c, i) => (
                  <li
                    key={c.titulo}
                    className="flex items-start gap-4 p-5 bg-background/40 border border-stroke/50 rounded-2xl"
                  >
                    <span
                      className="flex-shrink-0 w-8 h-8 grid place-items-center font-mono text-sm font-bold text-cta bg-cta/10 rounded-lg"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-text mb-1">
                        {c.titulo}
                      </h3>
                      <p className="text-text-muted leading-relaxed">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* 4.5 Enquadramento */}
          <section className="py-16 lg:py-20">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-5">
                O uso de IA precisa ser parte real do projeto
              </h2>
              <div className="space-y-5 text-lg text-text-muted leading-relaxed">
                <p>
                  O edital exige que o projeto adote ou desenvolva soluções de
                  inteligência artificial para inovação empresarial. A proposta
                  também precisa demonstrar alinhamento a pelo menos uma missão
                  da Nova Indústria Brasil.
                </p>
                <p>
                  Descrever um produto convencional como “projeto de IA” não
                  resolve o enquadramento. A proposta precisa explicar por que a
                  inteligência artificial é necessária, qual produto ou processo
                  será desenvolvido ou melhorado e como o trabalho se conecta às
                  políticas citadas na chamada.
                </p>
                <p className="p-5 bg-surface/50 border border-highlight/25 rounded-2xl text-base">
                  <AlertTriangle
                    className="inline-block w-5 h-5 mr-2 -mt-1 text-highlight"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  Na avaliação, a aderência à IA e ao Eixo 4 do PBIA tem peso 5.
                  A aderência às missões da NIB tem peso 4. São os dois maiores
                  pesos individuais do julgamento e também os primeiros
                  critérios de desempate.
                </p>
              </div>
            </div>
          </section>

          {/* 4.6 Critérios */}
          <section className="py-16 lg:py-20 bg-surface/30 border-y border-stroke/30">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-8">
                Como as propostas serão avaliadas
              </h2>

              <table className="w-full mb-8">
                <caption className="sr-only">
                  Critérios de julgamento e respectivos pesos
                </caption>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="text-left font-mono text-[11px] uppercase tracking-wider text-cta pb-3"
                    >
                      Critério
                    </th>
                    <th
                      scope="col"
                      className="text-right font-mono text-[11px] uppercase tracking-wider text-cta pb-3 w-16"
                    >
                      Peso
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CRITERIOS.map((c) => (
                    <tr key={c.nome} className="border-t border-stroke/50">
                      <td className="py-4 pr-4 align-top">
                        <span className="text-text-muted leading-snug block mb-2">
                          {c.nome}
                        </span>
                        {/* Barra é reforço visual; o peso está sempre em número. */}
                        <span
                          className="block h-1.5 bg-stroke/50 rounded-full overflow-hidden max-w-[240px]"
                          aria-hidden
                        >
                          <span
                            className="block h-full bg-cta rounded-full"
                            style={{ width: `${(c.peso / PESO_MAX) * 100}%` }}
                          />
                        </span>
                      </td>
                      <td className="py-4 text-right align-top font-display font-bold text-lg text-text tabular-nums">
                        {c.peso}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-text-muted leading-relaxed">
                Durante a live, vamos interpretar essa régua e mostrar como os
                critérios se relacionam com a definição do projeto, a composição
                da equipe e as evidências apresentadas na proposta.
              </p>
            </div>
          </section>

          {/* 4.7 Verificações */}
          <section className="py-16 lg:py-20">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-5">
                Quatro verificações iniciais
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                Antes de mobilizar a equipe para escrever, a empresa precisa
                verificar:
              </p>
              <ul className="space-y-3 mb-10">
                {VERIFICACOES.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-cta"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="text-text-muted leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
              <Cta secao="verificacoes" className="w-full sm:w-auto" />
            </div>
          </section>

          {/* Formulário */}
          <section className="py-16 lg:py-20 bg-surface/30 border-y border-stroke/30">
            <div className="max-w-2xl mx-auto px-6 lg:px-8">
              <FormularioRhae />
            </div>
          </section>

          {/* 4.8 / 4.9 Sobre e apresentador */}
          <section className="py-16 lg:py-20">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-5">
                Sobre a Launchpad
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-12">
                A Launchpad ajuda empresas a transformar desafios tecnológicos e
                oportunidades de fomento em projetos estruturados. O trabalho
                combina desenvolvimento tecnológico, estratégia de inovação e
                experiência prática na preparação e execução de projetos de
                PD&amp;I.
              </p>

              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-6">
                Quem apresenta
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src="/jose-martini.webp"
                  alt="José Renato Martini, apresentador da live"
                  width={560}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  className="flex-shrink-0 w-28 h-28 object-cover rounded-2xl"
                />
                <div>
                  <p className="font-display font-semibold text-xl text-text mb-2">
                    José Renato Martini
                  </p>
                  {RHAE.bio ? (
                    <p className="text-text-muted leading-relaxed">{RHAE.bio}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </section>

          {/* 4.10 FAQ */}
          <section className="py-16 lg:py-20 bg-surface/30 border-y border-stroke/30">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-8">
                Perguntas frequentes
              </h2>
              <div className="space-y-3">
                {FAQ.map((f) => (
                  <details
                    key={f.p}
                    className="group p-5 bg-background/40 border border-stroke/50 rounded-2xl"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer text-text font-medium marker:content-none list-none">
                      {f.p}
                      <span
                        className="flex-shrink-0 text-cta transition-transform group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-text-muted leading-relaxed">{f.r}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* 4.11 CTA final */}
          <section className="py-16 lg:py-24">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-5">
                Avalie a oportunidade antes de preparar a proposta
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                Participe da live gratuita e entenda os requisitos do RHAE IA
                2026, os projetos que a chamada pretende apoiar e os critérios
                que orientarão a avaliação.
              </p>
              <p className="inline-block px-4 py-2 mb-8 text-xs font-mono uppercase tracking-wider text-text bg-surface/70 border border-stroke/60 rounded-full">
                {linhaEvento(false)} · ONLINE
              </p>
              <div className="mb-8">
                <Cta secao="final" className="w-full sm:w-auto" />
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                O conteúdo da live tem caráter informativo e não substitui a
                leitura integral do edital nem esclarecimentos formais do CNPq.
                O prazo de submissão termina em {RHAE.edital.prazo}.
              </p>
            </div>
          </section>

          {/* 10. Fontes */}
          <section className="pb-20">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <div className="p-6 bg-surface/40 border border-stroke/50 rounded-2xl">
                <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
                  Fontes
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={RHAE.edital.paginaOficial}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-muted hover:text-cta transition-colors"
                    >
                      Página oficial da {RHAE.edital.chamada}
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                    </a>
                  </li>
                  <li>
                    <a
                      href={RHAE.edital.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-muted hover:text-cta transition-colors"
                    >
                      Edital completo do RHAE IA 2026 (PDF)
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* CTA fixo em mobile */}
        <div
          className={`lg:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-background/95 backdrop-blur border-t border-stroke/60 transition-transform duration-200 ${
            mostrarBarra ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <a
            href="#inscricao"
            onClick={() =>
              trackEvent("section_cta_click", { section: "barra-mobile" })
            }
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-base font-semibold text-white bg-cta rounded-xl"
          >
            {CTA_LABEL}
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}
