import {
  ArrowRight,
  Microscope,
  Route,
  Scale,
  GraduationCap,
  CheckCircle2,
  Mail,
} from "lucide-react";

const CONTACT_EMAIL = "contato@launchpadhub.com.br";

export function HubHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cta/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-base font-semibold text-cta bg-cta/10 border border-cta/20 rounded-full">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            Do laboratório ao mercado
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight tracking-tight mb-6 animate-fade-in-up">
            Sua tecnologia funciona.
            <br />
            <span className="text-gradient-accent">Mas ela é um negócio?</span>
          </h1>

          <p className="text-lg lg:text-xl text-text-muted leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            O LaunchpadHub ajuda deep techs e empresas industriais a transformar
            tecnologia em negócio: prontidão comercial, rota de mercado e
            captação de recursos — com método, prazo e veredito.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-200">
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
              data-testid="button-hub-services"
            >
              Conhecer os serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/curso"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-text border border-stroke hover:border-cta/40 rounded-2xl transition-all duration-200"
              data-testid="button-hub-course"
            >
              Curso: Fomento para Deeptechs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HubProblem() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-2xl lg:text-3xl font-display font-semibold text-text leading-relaxed mb-6">
          Toda tecnologia tem duas maturidades:{" "}
          <span className="text-cta">técnica</span> e{" "}
          <span className="text-cta">comercial</span>.
          <br />
          Quase todo projeto parado só mediu a primeira.
        </p>
        <p className="text-lg text-text-muted leading-relaxed">
          Anos de P&D, resultados consistentes, talvez um piloto que funcionou —
          e a pergunta que ninguém respondeu: em qual aplicação, para qual
          cliente, com qual modelo de negócio? É nessa lacuna que projetos
          morrem. E é exatamente nela que trabalhamos.
        </p>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Microscope,
    title: "Diagnóstico de Prontidão Comercial",
    tag: "30 dias · escopo fechado",
    description:
      "Avaliação estruturada de uma tecnologia: posição de maturidade técnica e comercial, riscos ranqueados e rota preliminar de mercado.",
    bullets: [
      "Parecer escrito com veredito claro — inclusive se for \"não vá\"",
      "Plano de redução de incerteza: os próximos experimentos, com custo e critério de decisão",
      "Sessão de decisão de 2 horas com sócios ou diretoria",
    ],
    cta: "Solicitar diagnóstico",
    subject: "Diagnóstico de Prontidão Comercial",
  },
  {
    icon: Route,
    title: "Assessoria de Rota Comercial",
    tag: "Sprint de 6–8 semanas + acompanhamento",
    description:
      "Da avaliação à execução: aplicações priorizadas, tese de primeiro cliente, desenho de piloto, parceiros e estratégia de captação integrada ao roadmap.",
    bullets: [
      "Roadmap de 12 meses com marcos, dependências e pontos de decisão",
      "Estratégia de fomento (FINEP, FAPESP, Embrapii) como instrumento da rota — não como fim",
      "Acompanhamento mensal como conselheiro durante a execução",
    ],
    cta: "Conversar sobre assessoria",
    subject: "Assessoria de Rota Comercial",
  },
  {
    icon: Scale,
    title: "Parecer Técnico-Comercial",
    tag: "Para investidores e financiadores · 1–3 semanas",
    description:
      "Due diligence de tecnologias para decisões de investimento: viabilidade técnica, prontidão comercial e riscos que o pitch não mostra.",
    bullets: [
      "Análise independente, com fundamento técnico e de mercado",
      "Riscos priorizados e perguntas críticas para a negociação",
      "Prazo compatível com o ritmo do deal",
    ],
    cta: "Solicitar parecer",
    subject: "Parecer Técnico-Comercial",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Serviços
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Trabalho de assessoria com escopo fechado e preço fechado — para
            empresas e investidores que precisam decidir o futuro de uma
            tecnologia com método, não com fé.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-8 bg-surface/50 border border-stroke/50 rounded-3xl card-glow transition-all duration-200 hover:border-cta/30"
            >
              <div className="w-14 h-14 mb-5 flex items-center justify-center bg-cta/10 rounded-2xl">
                <service.icon className="w-7 h-7 text-cta" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cta mb-2">
                {service.tag}
              </p>
              <h3 className="font-display font-bold text-xl text-text mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-cta flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm text-text-muted leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(service.subject)}`}
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-cta hover:bg-cta/90 rounded-xl transition-all duration-200"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CourseSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 p-8 lg:p-12 bg-background/50 border border-stroke/50 rounded-3xl card-glow">
          <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-cta/10 rounded-2xl">
            <GraduationCap className="w-10 h-10 text-cta" strokeWidth={1.5} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-cta mb-2">
              Curso · Faça você mesmo, com método
            </p>
            <h2 className="font-display font-bold text-2xl lg:text-3xl text-text mb-3">
              Fomento para Deeptechs
            </h2>
            <p className="text-text-muted leading-relaxed">
              Treinamento prático para escrever e defender projetos de inovação
              com a lógica de quem avalia — templates, checklists e um sistema
              replicável para operar seu pipeline de captação. FAPESP, FINEP,
              CNPq, FAPs estaduais e outros.
            </p>
          </div>
          <a
            href="/curso"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
            data-testid="button-course-section"
          >
            Conhecer o curso
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-6">
          A pergunta já está na mesa. Só falta a resposta.
        </h2>
        <p className="text-lg text-text-muted leading-relaxed mb-8">
          Conte em poucas linhas qual tecnologia está em jogo, em que estágio
          está e quanto já foi investido. Respondemos em até 2 dias úteis
          dizendo se o caso é para nós — e, se não for, para quem deveria ser.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Contato — LaunchpadHub")}`}
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
          data-testid="button-contact"
        >
          <Mail className="w-5 h-5" />
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
