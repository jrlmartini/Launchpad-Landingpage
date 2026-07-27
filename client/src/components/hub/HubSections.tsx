import {
  ArrowRight,
  Microscope,
  Route,
  Scale,
  CheckCircle2,
  Mail,
  FileText,
  Map,
  ListChecks,
  Users,
} from "lucide-react";

const CONTACT_EMAIL = "contato@launchpadhub.com.br";

export function HubHero() {
  return (
    <section className="relative pt-36 lg:pt-48 pb-20 lg:pb-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-base font-semibold text-cta bg-cta/10 border border-cta/20 rounded-full">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            Trabalho comigo, direto
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight tracking-tight mb-6 animate-fade-in-up">
            Quando o curso não basta —
            <br />
            <span className="text-gradient-accent">e você precisa de alguém junto</span>
          </h1>

          <p className="text-lg lg:text-xl text-text-muted leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            Escrevo e reviso projetos de fomento com você, e ajudo empresas
            industriais a decidir o que fazer com uma tecnologia pronta.
            Poucos clientes por vez, sempre com escopo e prazo definidos.
          </p>

          <a
            href="#projetos"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group animate-fade-in-up animate-delay-200"
            data-testid="button-hub-servicos"
          >
            Ver como posso ajudar
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function HubProblem() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-8">
          A tecnologia ficou pronta. E agora ninguém sabe o próximo passo.
        </h2>
        <div className="text-lg text-text-muted leading-relaxed space-y-5 max-w-3xl mx-auto">
          <p>Você conhece essa história porque está dentro dela:</p>
          <p>
            Anos de desenvolvimento. Resultados de bancada consistentes. Talvez
            um piloto que funcionou, um projeto FINEP ou Embrapii concluído, uma
            patente depositada.
          </p>
          <p>
            E então — nada. O projeto não morre, mas não anda. A diretoria
            pergunta quando aquilo vira receita. O time técnico responde com
            mais testes. <strong className="text-text">A resposta certa não é técnica.</strong>
          </p>
          <p>
            A pergunta que destrava não é <em>"a tecnologia funciona?"</em> —
            essa você já respondeu. É:{" "}
            <strong className="text-text">
              "em qual aplicação, para qual cliente, com qual modelo de negócio,
              e qual é o experimento mais barato que prova isso?"
            </strong>
          </p>
          <p>Responder essa pergunta é o nosso trabalho.</p>
        </div>
      </div>
    </section>
  );
}

export function HubMethod() {
  const questions = [
    {
      icon: Map,
      title: "Onde está o risco real?",
      description: "Os pontos que podem matar o negócio, em ordem de gravidade.",
    },
    {
      icon: Route,
      title: "Qual rota faz sentido?",
      description:
        "Aplicações priorizadas, primeiro cliente provável, modelo de negócio candidato.",
    },
    {
      icon: ListChecks,
      title: "O que fazer primeiro?",
      description:
        "A sequência de experimentos que reduz incerteza mais rápido, pelo menor custo.",
    },
  ];

  return (
    <section id="metodo" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Toda tecnologia tem duas maturidades. Você só mediu uma.
          </h2>
          <div className="text-lg text-text-muted leading-relaxed space-y-4 text-left">
            <p>
              A maturidade técnica (<span className="font-mono text-text">TRL</span>) você
              conhece — as agências de fomento a exigem há anos.
            </p>
            <p>
              A maturidade <strong className="text-text">comercial</strong> (
              <span className="font-mono text-text">CRL</span>) quase ninguém mede: existe
              cliente definido? Disposição a pagar validada? Rota regulatória
              mapeada? Modelo de negócio testado? Parceiro de escala
              identificado?
            </p>
            <p>
              Tecnologias paradas têm quase sempre o mesmo diagnóstico:{" "}
              <strong className="text-text">TRL alto, CRL baixo.</strong> Tecnicamente
              prontas, comercialmente não comprovadas.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {questions.map((q, index) => (
            <div
              key={index}
              className="p-6 bg-surface/50 border border-stroke/50 rounded-2xl card-glow transition-all duration-200 hover:border-cta/30"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cta/10 rounded-xl">
                <q.icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {q.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{q.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DiagnosticoSection() {
  const deliverables = [
    "Parecer escrito com a posição TRL × CRL da tecnologia e os riscos ranqueados",
    "Rota comercial preliminar — aplicações priorizadas e tese de primeiro cliente",
    "Plano de redução de incerteza — os próximos 3 a 5 experimentos, com custo e critério de decisão de cada um",
    "Sessão de decisão de 2 horas com os sócios ou a diretoria",
  ];

  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-gradient-to-b from-cta/5 via-cta/10 to-cta/5 scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
            Serviço principal
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-4">
            Diagnóstico de Prontidão Comercial
          </h2>
          <p className="text-lg text-text-muted">Em 30 dias, você recebe:</p>
        </div>

        <div className="p-8 lg:p-10 bg-surface border border-cta/30 rounded-3xl card-glow">
          <ul className="space-y-5 mb-8">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2
                  className="w-6 h-6 text-cta flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="text-text text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-text-muted leading-relaxed mb-8 pb-8 border-b border-stroke/50">
            Escopo fechado. Preço fechado. E um compromisso incomum:{" "}
            <strong className="text-text">
              se a conclusão for que a tecnologia não deve ir ao mercado, é isso
              que estará escrito.
            </strong>{" "}
            Descobrir isso agora custa uma fração de descobrir depois do piloto.
          </p>

          <div className="text-center">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Diagnóstico de Prontidão Comercial")}`}
              className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
              data-testid="button-diagnostico-cta"
            >
              Solicitar Diagnóstico
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const otherServices = [
  {
    icon: Route,
    title: "Assessoria de Rota Comercial",
    tag: "Sprint de 6–8 semanas + acompanhamento",
    description:
      "Da avaliação à execução: aplicações priorizadas, tese de primeiro cliente, desenho de piloto, parceiros e estratégia de captação integrada — com roadmap de 12 meses e acompanhamento mensal como conselheiro.",
    subject: "Assessoria de Rota Comercial",
    id: "rota",
  },
  {
    icon: Scale,
    title: "Parecer Técnico-Comercial",
    tag: "Para investidores e financiadores · 1–3 semanas",
    description:
      "Due diligence de tecnologias para decisões de investimento: viabilidade técnica, prontidão comercial e os riscos que o pitch não mostra — no prazo do deal.",
    subject: "Parecer Técnico-Comercial",
    id: "parecer",
  },
];

export function OtherServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-4">
            Depois do diagnóstico — ou além dele
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {otherServices.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="scroll-mt-32 flex flex-col p-8 bg-surface/50 border border-stroke/50 rounded-3xl card-glow transition-all duration-200 hover:border-cta/30"
            >
              <div className="w-14 h-14 mb-5 flex items-center justify-center bg-cta/10 rounded-2xl">
                <service.icon className="w-7 h-7 text-cta" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-cta mb-2">
                {service.tag}
              </p>
              <h3 className="font-display font-bold text-xl text-text mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(service.subject)}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
              >
                Conversar sobre este serviço
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HubForWho() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-10">
          Este trabalho é para poucos casos. Talvez o seu.
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 bg-cta/5 border border-cta/20 rounded-3xl">
            <h3 className="font-display font-semibold text-xl text-cta mb-4 flex items-center gap-2">
              <Users className="w-6 h-6" strokeWidth={1.5} />
              Faz sentido conversarmos se:
            </h3>
            <p className="text-text leading-relaxed">
              Sua empresa desenvolveu (ou adquiriu, ou herdou de um projeto com
              ICT) uma tecnologia real, que já demonstrou funcionamento — e a
              decisão sobre o futuro dela envolve valores que tornam o erro
              caro.
            </p>
          </div>
          <div className="p-8 bg-surface/50 border border-stroke/50 rounded-3xl">
            <h3 className="font-display font-semibold text-xl text-text-muted mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" strokeWidth={1.5} />
              Não faz sentido se:
            </h3>
            <p className="text-text-muted leading-relaxed">
              Você procura alguém apenas para escrever propostas de fomento,
              precisa de um laboratório para desenvolver a tecnologia, ou busca
              um programa de inovação para a empresa. Existem bons profissionais
              para cada um desses casos — podemos inclusive indicar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HubFAQ() {
  const faqs = [
    {
      q: "Quanto custa?",
      a: "Todos os trabalhos têm escopo e preço fechados, definidos na conversa inicial conforme a complexidade do caso. Não trabalho por hora: o valor está na decisão certa, não no tempo que levo para chegar nela.",
    },
    {
      q: "Você garante aprovação do projeto?",
      a: "Não, e ninguém honesto garante. O que posso afirmar é que a proposta vai chegar muito mais consistente, mais bem enquadrada e muito mais difícil de reprovar do que chegaria sozinha.",
    },
    {
      q: "Quantos clientes você atende por vez?",
      a: "Poucos, de propósito. Escrever e revisar projeto é trabalho autoral e exige atenção real — por isso trabalho com um número limitado de casos simultâneos e às vezes preciso recusar.",
    },
    {
      q: "Você implementa a tecnologia?",
      a: "Não executo engenharia nem operação. Defino a rota, sequencio as decisões e acompanho a execução como conselheiro. Quem constrói é o seu time e os parceiros certos — que ajudo a selecionar.",
    },
    {
      q: "Atende startups?",
      a: "Seletivamente, e em geral por modelos de parceria, não honorários. O foco principal são empresas industriais estabelecidas, deep techs financiadas e investidores avaliando tecnologias.",
    },
    {
      q: "Por que não uma consultoria de inovação?",
      a: "Consultorias de inovação estruturam processos para a empresa inovar. Resolvo um problema diferente: o que fazer com um projeto ou uma tecnologia específica que já existe.",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-12">
          Perguntas frequentes
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-surface/50 border border-stroke/50 rounded-2xl"
            >
              <h3 className="font-display font-semibold text-lg text-text mb-2">
                {faq.q}
              </h3>
              <p className="text-text-muted leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-surface/30 border-t border-stroke/30 scroll-mt-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-6">
          A pergunta já está na mesa. Só falta a resposta.
        </h2>
        <p className="text-lg text-text-muted leading-relaxed mb-8">
          Me conte em poucas linhas qual é o caso: o edital que você quer
          disputar, o projeto que precisa de revisão ou a tecnologia que está
          parada. Respondo em até 2 dias úteis dizendo se posso ajudar — e, se
          não puder, quem provavelmente pode.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Contato — Assessoria LaunchpadHub")}`}
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
          data-testid="button-contact"
        >
          <Mail className="w-5 h-5" />
          Iniciar conversa
        </a>
        <p className="mt-4 text-sm font-mono text-text-muted">{CONTACT_EMAIL}</p>
      </div>
    </section>
  );
}
