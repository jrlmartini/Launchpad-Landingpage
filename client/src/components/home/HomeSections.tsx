import {
  ArrowRight,
  GraduationCap,
  PenTool,
  Microscope,
  Quote,
  TrendingUp,
  Building2,
  FlaskConical,
  Rocket,
} from "lucide-react";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { WA_MESSAGES } from "@/lib/contact";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

export function HomeHero() {
  return (
    <section className="relative pt-36 lg:pt-48 pb-20 lg:pb-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/10 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-sm font-semibold text-cta bg-cta/10 border border-cta/20 rounded-full">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            LaunchpadHub · Explore novos mundos
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text leading-[1.1] tracking-tight mb-8 animate-fade-in-up">
            Tirar tecnologia do laboratório
            <br />
            <span className="text-gradient-accent">é uma engenharia à parte</span>
          </h1>

          <p className="text-lg lg:text-xl text-text-muted leading-relaxed mb-4 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            A ciência resolve o "isso funciona?". Depois vem tudo o que ninguém
            ensina: qual edital disputar, como escrever um projeto que resiste a
            um avaliador, qual aplicação perseguir, quem é o primeiro cliente.
          </p>

          <p className="text-lg lg:text-xl text-text leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            É esse pedaço do caminho que eu faço com você — ou ensino você a
            fazer sozinho.
          </p>

          <a
            href="#caminhos"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group animate-fade-in-up animate-delay-300"
            data-testid="button-home-paths"
          >
            Ver por onde começar
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
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
    href: "/curso",
    icon: GraduationCap,
    eyebrow: "Aprender a fazer",
    title: "Curso: Fomento para Deeptechs",
    description:
      "O método completo para escrever e defender projetos de fomento — com templates, planilhas e checklists. Para quem quer construir essa competência dentro de casa.",
    items: ["6 módulos + bônus", "Templates e checklists", "Acesso às lives de novos editais"],
    cta: "Conhecer o curso",
    featured: false,
  },
  {
    href: "/projetos",
    icon: PenTool,
    eyebrow: "Fazer junto",
    title: "Projetos de fomento",
    description:
      "Escrevo o projeto a quatro mãos com você, ou reviso o que você já escreveu lendo com os olhos de quem avalia. Para quem tem edital na mira e prazo correndo.",
    items: ["Escrita do Projeto", "Revisão do Projeto", "FINEP, FAPESP, CNPq, Embrapii, FAPs"],
    cta: "Ver como trabalho",
    featured: true,
  },
  {
    href: "/tecnologia",
    icon: Microscope,
    eyebrow: "Decidir a rota",
    title: "Tecnologia e mercado",
    description:
      "Sua tecnologia funciona — mas é um negócio? Diagnóstico de prontidão comercial, rota de mercado e parecer para investidores. Para quando a dúvida é maior que o edital.",
    items: ["Diagnóstico em 30 dias", "Rota comercial e pilotos", "Due diligence técnica"],
    cta: "Ver assessoria",
    featured: false,
  },
];

export function PathsSection() {
  return (
    <section id="caminhos" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Três formas de trabalhar comigo
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Do curso que você faz no seu ritmo à assessoria em que eu entro no
            seu projeto. Escolha pelo momento em que você está.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
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
  { icon: FlaskConical, label: "Química industrial e processos" },
  { icon: Building2, label: "Indústria, energia e saneamento" },
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
            Engenheiro. Passei a última década entre o laboratório e o mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div className="p-8 bg-background/50 border border-stroke/50 rounded-3xl card-glow">
            <div className="w-20 h-20 mb-6 bg-cta/10 rounded-2xl flex items-center justify-center">
              <span className="font-display font-bold text-2xl text-cta">JRLM</span>
            </div>

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
              Comecei em 2012 do lado técnico: química industrial, processos,
              tratamento de água, tecnologias ambientais. Com o tempo fui parar
              no lado que quase ninguém quer ocupar — o meio de campo entre quem
              desenvolve a tecnologia, quem financia e quem compra.
            </p>
            <p>
              Desde então fundei e ajudei a construir empresas de tecnologia,
              estruturei dezenas de projetos de inovação e{" "}
              <strong className="text-text">
                aprovei mais de R$ 35 milhões em recursos de fomento
              </strong>{" "}
              — reembolsáveis e não reembolsáveis — para empresas dos setores
              automotivo, químico, alimentício, agrícola, saúde e tecnologia da
              informação.
            </p>
            <p>
              Nesse caminho eu também escrevi projetos que foram reprovados, e
              avaliei projetos bons que perderam para propostas piores, porém
              mais bem construídas. Foi isso que me ensinou o que realmente
              separa um bom projeto de um projeto aprovado — e é isso que eu
              ensino no curso e aplico quando trabalho junto com uma empresa.
            </p>

            <div className="p-6 bg-background/50 border-l-2 border-cta rounded-r-2xl">
              <Quote className="w-6 h-6 text-cta mb-3" strokeWidth={1.5} />
              <p className="text-text italic">
                O que me interessa não é preencher formulário de edital. É ver
                uma tecnologia que funciona chegar até onde ela deveria ter
                chegado.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-cta/10 rounded-xl">
                <TrendingUp className="w-5 h-5 text-cta" strokeWidth={1.5} />
                <span className="text-text font-semibold">+R$ 35 milhões</span>
                <span className="text-text-muted text-sm">aprovados</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-background/60 border border-stroke/50 rounded-xl">
                <span className="text-text font-semibold">Desde 2012</span>
                <span className="text-text-muted text-sm">em inovação</span>
              </div>
            </div>
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
        <p className="text-lg text-text-muted leading-relaxed mb-10">
          Me conte em duas linhas o que você tem em mãos — uma tecnologia, um
          edital, um projeto pela metade. Eu digo qual caminho faz sentido,
          mesmo que a resposta seja "nenhum dos meus".
        </p>
        <ContactOptions message={WA_MESSAGES.geral} variant="cards" />
      </div>
    </section>
  );
}
