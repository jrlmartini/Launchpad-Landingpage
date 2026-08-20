import {
  ArrowRight,
  GraduationCap,
  PenTool,
  Microscope,
  Radar,
  Quote,
  TrendingUp,
  Building2,
  FlaskConical,
  Rocket,
  Leaf,
} from "lucide-react";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { WA_MESSAGES, calendlyLink } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

export function HomeHero() {
  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background" />
        <div className="absolute inset-0 hero-scrim" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-5 py-2 mb-5 text-sm font-semibold text-cta bg-cta/10 border border-cta/20 rounded-full">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            Inteligência técnica e comercialização para empresas industriais
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.12] tracking-tight mb-5 animate-fade-in-up">
            Decisões técnicas difíceis,
            <br />
            <span className="text-gradient-accent">tomadas com evidência</span>
          </h1>

          <p className="text-lg lg:text-xl text-text/85 leading-relaxed mb-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            Avalio tecnologias de terceiros antes do próximo compromisso, defino
            a rota comercial da sua própria tecnologia e estruturo os projetos que
            financiam o desenvolvimento.{" "}
            <strong className="text-text">
              Química, água, saneamento, sustentabilidade e infraestrutura.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 animate-fade-in-up animate-delay-200">
            <a
              href={calendlyLink("home-hero")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("click_calendly", { source: "home-hero" })}
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
              data-testid="button-home-calendly"
            >
              Avaliar meu caso em 20 minutos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#caminhos"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-text border border-stroke hover:border-cta/40 rounded-2xl transition-all duration-200"
              data-testid="button-home-paths"
            >
              Ver as quatro frentes de trabalho
            </a>
          </div>

          <p className="text-sm text-text/70 animate-fade-in-up animate-delay-300">
            Sem apresentação comercial. Se não houver encaixe, você sai com a
            indicação do próximo passo.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROOF BAND — immediately below the hero                             */
/* ------------------------------------------------------------------ */

const proofItems = [
  {
    value: "+R$ 35 milhões",
    label: "aprovados em fomento",
    note: "Projetos reembolsáveis e não reembolsáveis.",
  },
  {
    value: "Desde 2012",
    label: "em inovação tecnológica",
    note: "Da engenharia de processos à construção de negócios.",
  },
  {
    value: "FINEP · FAPESP · CNPq",
    label: "Embrapii e FAPs estaduais",
    note: "Experiência com diferentes lógicas e formatos de avaliação.",
  },
  {
    value: "Decisão antes da redação",
    label: "Go / No-Go",
    note: "Quando o edital ou a rota não fecham, o primeiro resultado é um “não”.",
  },
];

export function ProofBand() {
  return (
    <section className="py-12 lg:py-16 bg-surface/40 border-y border-stroke/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofItems.map((item) => (
            <div key={item.value} className="text-center sm:text-left">
              <p className="font-display font-bold text-xl lg:text-2xl text-cta mb-1">
                {item.value}
              </p>
              <p className="text-text font-medium mb-2">{item.label}</p>
              <p className="text-sm text-text-muted leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* THREE PATHS                                                         */
/* ------------------------------------------------------------------ */

const paths = [
  {
    href: "/inteligencia",
    icon: Radar,
    eyebrow: "Decidir sobre tecnologia de terceiros",
    title: "Inteligência técnica",
    description:
      "Uma startup, fornecedor ou rota chegou até você e é preciso decidir se merece piloto, time técnico ou capital. Avaliação independente com evidências rastreáveis.",
    items: [
      "Technology Decision Sprint · 10 dias úteis",
      "Parecer técnico-comercial para investidores",
      "Recomendação com os próximos testes",
    ],
    cta: "Ver o Decision Sprint",
    featured: true,
  },
  {
    href: "/tecnologia",
    icon: Microscope,
    eyebrow: "Comercializar a sua tecnologia",
    title: "Tecnologia e mercado",
    description:
      "A tecnologia é da sua empresa, funciona, e a dúvida é onde ela vira negócio. Prontidão comercial, aplicações priorizadas e rota até o primeiro cliente.",
    items: [
      "Diagnóstico de Prontidão Comercial",
      "Assessoria de Rota Comercial",
      "Matriz TRL × CRL",
    ],
    cta: "Ver diagnóstico de 30 dias",
    featured: false,
  },
  {
    href: "/projetos",
    icon: PenTool,
    eyebrow: "Financiar o desenvolvimento",
    title: "Projetos de fomento",
    description:
      "Escrevo o projeto a quatro mãos com você, ou reviso o que você já escreveu lendo com os olhos de quem avalia. Para quem tem edital na mira e prazo correndo.",
    items: ["Escrita do Projeto", "Revisão do Projeto", "FINEP, FAPESP, CNPq, Embrapii, FAPs"],
    cta: "Ver escrita e revisão",
    featured: false,
  },
  {
    href: "/treinamentos",
    icon: GraduationCap,
    eyebrow: "Aprender a fazer internamente",
    title: "Curso: Fomento para Deeptechs",
    description:
      "O método completo para escrever e defender projetos de fomento, com templates, planilhas e checklists. Para quem quer construir essa competência dentro de casa.",
    items: ["6 módulos + bônus", "Templates e checklists", "Acesso às lives de novos editais"],
    cta: "Ver método, conteúdo e preço",
    featured: false,
  },
];

export function PathsSection() {
  return (
    <section id="caminhos" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Quatro formas de trabalhar comigo
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Entre pela decisão que você precisa tomar. Se duas parecerem certas, a
            triagem de dois minutos resolve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((path) => (
            <a
              key={path.href}
              href={path.href}
              className={`group flex flex-col p-8 rounded-3xl card-glow transition-all duration-200 ${
                path.featured
                  ? "bg-surface border border-cta/30 hover:border-cta/60"
                  : "bg-surface/50 border border-stroke/50 hover:border-cta/40"
              }`}
            >
              <div
                className={`w-14 h-14 mb-5 flex items-center justify-center rounded-2xl ${
                  path.featured ? "bg-cta" : "bg-cta/10"
                }`}
              >
                <path.icon
                  className={`w-7 h-7 ${path.featured ? "text-white" : "text-cta"}`}
                  strokeWidth={1.5}
                />
              </div>

              <p className="text-xs font-mono uppercase tracking-widest text-cta mb-2">
                {path.eyebrow}
              </p>
              <h3 className="font-display font-bold text-xl lg:text-2xl text-text mb-4">
                {path.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">{path.description}</p>

              <ul className="space-y-2 mb-8">
                {path.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-muted"
                  >
                    <span className="w-1 h-1 bg-cta rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-cta">
                {path.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ABOUT ME                                                            */
/* ------------------------------------------------------------------ */

const domains = [
  { icon: Leaf, label: "Tecnologias sustentáveis e ambientais" },
  { icon: FlaskConical, label: "Química industrial, água e processos" },
  { icon: Building2, label: "Saneamento, energia e infraestrutura" },
  { icon: Rocket, label: "Deep techs e startups de base científica" },
];

export function AboutMe() {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30 scroll-mt-32"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
            Quem está do outro lado
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-4">
            José Renato Lanzi Martini
          </h2>
          <p className="text-lg text-cta">
            Tecnologista. Avalio tecnologias e ajudo a decidir o que fazer com
            elas.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] gap-8 lg:gap-12 items-start">
          <div className="p-7 lg:p-8 bg-background/50 border border-stroke/50 rounded-3xl card-glow lg:sticky lg:top-32">
            <img
              src="/jose-martini.webp"
              alt="José Renato Lanzi Martini"
              width={560}
              height={560}
              loading="lazy"
              className="w-full aspect-square object-cover rounded-2xl mb-6"
            />

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-text-muted">Formação</p>
                <p className="text-text">Engenharia de Produção — UNESP / OTH-Regensburg</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Pós-graduação</p>
                <p className="text-text">Administração de Empresas — FGV / HEC Paris</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Especialização</p>
                <p className="text-text">Empreendedorismo e Inovação — MIT</p>
              </div>
            </div>

            <div className="pt-6 border-t border-stroke/50 space-y-3">
              {domains.map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <d.icon className="w-5 h-5 text-cta flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-text-muted">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-lg text-text-muted leading-relaxed">
            <p>
              Comecei em 2012 do lado técnico, em química industrial, processos,
              tratamento de água e tecnologias ambientais. Com o tempo fui parar no
              lugar que quase ninguém quer ocupar: o meio de campo entre quem
              desenvolve a tecnologia, quem financia e quem compra.
            </p>
            <p>
              É desse lugar que trabalho hoje. Estudo tecnologias, comparo rotas
              concorrentes, confronto o que o fornecedor promete com o que a
              evidência sustenta e escrevo o parecer que a empresa usa para
              decidir. Boa parte disso em sustentabilidade, tratamento de
              efluentes, valorização de resíduos e transição energética, onde a
              regulação costuma pesar tanto quanto a engenharia.
            </p>
            <p>
              No caminho até aqui fundei e ajudei a construir empresas de
              tecnologia, estruturei dezenas de projetos de inovação e{" "}
              <strong className="text-text">
                aprovei mais de R$ 35 milhões em fomento
              </strong>{" "}
              entre recursos reembolsáveis e não reembolsáveis, para empresas dos setores
              automotivo, químico, alimentício, agrícola, saúde e tecnologia da
              informação.
            </p>
            <p>
              Também escrevi projetos que foram reprovados e avaliei projetos bons que
              perderam para propostas piores, porém mais bem construídas. Foi isso
              que me ensinou o que separa um bom projeto de um projeto aprovado. É
              o que eu ensino no curso e aplico quando trabalho junto com uma
              empresa.
            </p>

          </div>
        </div>

        {/* Citação atravessando as duas colunas */}
        <figure className="mt-14 lg:mt-16">
          <div className="relative px-6 py-10 lg:px-16 lg:py-14 bg-background/40 border-y border-cta/25 rounded-3xl text-center">
            <Quote
              className="w-9 h-9 text-cta/40 mx-auto mb-5"
              strokeWidth={1.5}
              aria-hidden
            />
            <blockquote className="font-display text-xl lg:text-3xl text-text leading-snug max-w-4xl mx-auto text-balance">
              Gosto de tecnologia que resolve problema real e chega ao mercado.
              Parte do trabalho é dizer, com evidência, quando ela não vai
              chegar.
            </blockquote>
            <figcaption className="mt-6 text-sm font-mono uppercase tracking-widest text-text-muted">
              José Renato Lanzi Martini
            </figcaption>
          </div>
        </figure>

        {/* Credenciais */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-cta/10 border border-cta/20 rounded-xl">
            <TrendingUp className="w-5 h-5 text-cta" strokeWidth={1.5} />
            <span className="text-text font-semibold">+R$ 35 milhões</span>
            <span className="text-text-muted text-sm">aprovados em fomento</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-background/60 border border-stroke/50 rounded-xl">
            <span className="text-text font-semibold">Desde 2012</span>
            <span className="text-text-muted text-sm">em inovação tecnológica</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-background/60 border border-stroke/50 rounded-xl">
            <Leaf className="w-5 h-5 text-cta" strokeWidth={1.5} />
            <span className="text-text-muted text-sm">
              Foco em tecnologias sustentáveis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTACT                                                             */
/* ------------------------------------------------------------------ */

export function HomeContact() {
  return (
    <section id="contato" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-6">
          Não sabe por onde começar?
        </h2>
        <p className="text-lg text-text-muted leading-relaxed mb-8">
          Me conte em duas linhas o que você tem em mãos: uma tecnologia, um
          edital, um projeto pela metade. Eu digo qual caminho faz sentido, mesmo
          quando a resposta é "nenhum dos meus".
        </p>

        <a
          href="/triagem"
          className="inline-flex items-center gap-2 mb-10 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
          data-testid="link-triagem-home"
        >
          Ou faça a triagem de 2 minutos primeiro
          <ArrowRight className="w-4 h-4" />
        </a>

        <ContactOptions message={WA_MESSAGES.geral} variant="cards" source="home-contato" />
      </div>
    </section>
  );
}
