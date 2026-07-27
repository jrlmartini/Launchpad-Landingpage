import {
  ArrowRight,
  PenTool,
  Eye,
  CheckCircle2,
  Clock,
  Users,
  MessageSquareQuote,
} from "lucide-react";

const CONTACT_EMAIL = "contato@launchpadhub.com.br";

export function ProjectServicesIntro() {
  return (
    <section id="projetos" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
          Trilha 1 · Projeto de fomento
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
          Você tem um edital na mira e o relógio correndo
        </h2>
        <p className="text-lg text-text-muted leading-relaxed">
          Escrever uma boa proposta não é sobre escrever bonito. É sobre
          antecipar o que o avaliador vai procurar, provar o que você afirma e
          montar um plano que fecha do começo ao fim. Trabalho de duas formas:
          escrevendo o projeto junto com você, ou revisando o que você já
          escreveu antes de submeter.
        </p>
      </div>
    </section>
  );
}

const projectServices = [
  {
    icon: PenTool,
    tag: "A quatro mãos · da estrutura à submissão",
    title: "Escrita do Projeto",
    lead:
      "Eu assumo a caneta. Você traz a tecnologia, o time e os dados; eu estruturo, escrevo e defendo o projeto no papel.",
    body:
      "É a modalidade mais próxima de ter um especialista dentro do seu time durante toda a construção da proposta. Começamos escolhendo o enquadramento certo — edital, linha, TRL, contrapartida — porque proposta boa no edital errado é proposta reprovada. Depois construímos a narrativa técnica na ordem em que o avaliador lê: qual o problema, por que a sua solução é diferente, que evidências você já tem, como vai executar e com que orçamento.",
    bullets: [
      "Enquadramento e decisão Go/No-Go antes de escrever a primeira linha",
      "Redação completa da proposta, campo a campo, com você revisando a cada etapa",
      "Plano de trabalho, cronograma, entregáveis, riscos e orçamento defensável",
      "Preparação para a defesa e para os questionamentos mais prováveis",
    ],
    closing:
      "São mais de dez anos escrevendo e avaliando projetos de fomento — e mais de R$ 35 milhões aprovados. Essa experiência entra na sua proposta como estrutura, não como promessa.",
    cta: "Quero escrever meu projeto",
    subject: "Escrita do Projeto — a quatro mãos",
    featured: true,
  },
  {
    icon: Eye,
    tag: "Mentoria · leitura com olhos de avaliador",
    title: "Revisão do Projeto",
    lead:
      "Você já escreveu. Antes de submeter, alguém precisa ler como quem vai julgar.",
    body:
      "Leio a sua proposta do jeito que um avaliador lê: procurando lacunas, promessas sem evidência, inconsistências entre plano e orçamento, e tudo aquilo que faz um parecerista hesitar. Você recebe o documento comentado ponto a ponto e uma sessão de trabalho para discutirmos o que muda, em ordem de prioridade — porque nem toda correção cabe no prazo, e algumas valem muito mais que outras.",
    bullets: [
      "Proposta comentada campo a campo, com o motivo de cada apontamento",
      "Correções priorizadas: o que é crítico, o que melhora, o que é opcional",
      "Sessão de mentoria para discutir os pontos e decidir os ajustes",
      "Checklist final de consistência antes do envio",
    ],
    closing:
      "O objetivo não é aprovar o seu texto. É encontrar, ainda dentro do prazo, tudo aquilo que faria você perder pontos.",
    cta: "Quero revisar meu projeto",
    subject: "Revisão do Projeto — mentoria",
    featured: false,
  },
];

export function ProjectServicesCards() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {projectServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 lg:p-10 rounded-3xl card-glow transition-all duration-200 ${
                service.featured
                  ? "bg-surface border border-cta/30 hover:border-cta/50"
                  : "bg-surface/50 border border-stroke/50 hover:border-cta/30"
              }`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl ${
                    service.featured ? "bg-cta" : "bg-cta/10"
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${service.featured ? "text-white" : "text-cta"}`}
                    strokeWidth={1.5}
                  />
                </div>
                {service.featured && (
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-cta bg-cta/10 border border-cta/20 rounded-full">
                    Mais completo
                  </span>
                )}
              </div>

              <p className="text-xs font-mono uppercase tracking-wider text-cta mb-2">
                {service.tag}
              </p>
              <h3 className="font-display font-bold text-2xl text-text mb-4">
                {service.title}
              </h3>
              <p className="text-lg text-text mb-4 leading-relaxed">{service.lead}</p>
              <p className="text-text-muted leading-relaxed mb-6">{service.body}</p>

              <ul className="space-y-3 mb-6">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-cta flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-text-muted leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="text-text-muted leading-relaxed mb-8 pt-6 border-t border-stroke/50 italic">
                {service.closing}
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(service.subject)}`}
                className={`mt-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-2xl transition-all duration-200 group ${
                  service.featured
                    ? "text-white bg-cta hover:bg-cta/90 cta-glow"
                    : "text-text border border-stroke hover:border-cta/40"
                }`}
                data-testid={`button-${service.subject}`}
              >
                {service.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-surface/30 border border-stroke/40 rounded-2xl max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-text-muted leading-relaxed">
              <strong className="text-text">Sobre prazo:</strong> trabalho com poucos
              projetos por vez, e editais têm data. Procure com a maior antecedência
              possível — quanto mais cedo entramos, mais decisões estruturais ainda
              estão em aberto. Revisões de última hora eu aceito, mas o que dá para
              corrigir é sempre menos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectServicesComparison() {
  const rows = [
    {
      label: "Onde você está",
      writing: "Tem a tecnologia e o edital, mas o projeto ainda não existe no papel",
      review: "Já escreveu a proposta e quer saber onde ela é frágil",
    },
    {
      label: "Meu papel",
      writing: "Escrevo com você, do enquadramento à versão final",
      review: "Leio como avaliador e aponto o que precisa mudar",
    },
    {
      label: "O que você recebe",
      writing: "Projeto completo, estruturado e pronto para submissão",
      review: "Proposta comentada, correções priorizadas e sessão de mentoria",
    },
    {
      label: "Quando procurar",
      writing: "Assim que o edital sair — ou antes, se já sabe que vai concorrer",
      review: "Com a proposta em rascunho avançado e prazo ainda confortável",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-4">
          Qual das duas é a sua situação?
        </h2>
        <p className="text-lg text-text-muted text-center mb-12 max-w-2xl mx-auto">
          A escolha depende menos do orçamento e mais de onde o seu projeto está
          hoje.
        </p>

        <div className="overflow-hidden rounded-3xl border border-stroke/50">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr_1.5fr] bg-surface">
            <div className="hidden sm:block p-5" />
            <div className="p-5 border-l border-stroke/40">
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5 text-cta" strokeWidth={1.5} />
                <span className="font-display font-semibold text-text">
                  Escrita do Projeto
                </span>
              </div>
            </div>
            <div className="p-5 border-l border-stroke/40">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-cta" strokeWidth={1.5} />
                <span className="font-display font-semibold text-text">
                  Revisão do Projeto
                </span>
              </div>
            </div>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 sm:grid-cols-[1fr_1.5fr_1.5fr] border-t border-stroke/40 ${
                index % 2 === 0 ? "bg-background/40" : "bg-surface/40"
              }`}
            >
              <div className="p-5 font-mono text-xs uppercase tracking-wider text-cta sm:text-text-muted sm:normal-case sm:tracking-normal sm:text-sm sm:font-body">
                {row.label}
              </div>
              <div className="p-5 sm:border-l border-stroke/40 text-text-muted leading-relaxed">
                {row.writing}
              </div>
              <div className="p-5 sm:border-l border-stroke/40 text-text-muted leading-relaxed">
                {row.review}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 text-text-muted">
            <MessageSquareQuote className="w-5 h-5 text-cta" strokeWidth={1.5} />
            <span>Na dúvida, me conte o caso — eu digo qual faz mais sentido.</span>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Dúvida — escrita ou revisão de projeto")}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
          >
            Falar sobre o meu caso
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function TechTrackIntro() {
  return (
    <section id="tecnologia" className="pt-20 lg:pt-28 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
          Trilha 2 · Tecnologia e mercado
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
          Antes do edital, uma pergunta maior
        </h2>
        <p className="text-lg text-text-muted leading-relaxed">
          Captar recurso resolve o financiamento do desenvolvimento. Não resolve
          se a tecnologia vira negócio. Quando a dúvida é essa — qual aplicação
          perseguir, quem é o primeiro cliente, o que validar primeiro — o
          trabalho é outro.
        </p>
      </div>
    </section>
  );
}

export function ServicesTrackNav() {
  return (
    <section className="py-12 lg:py-16 border-y border-stroke/30 bg-surface/20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="text-center text-text-muted mb-8">
          Dois tipos de problema, dois tipos de trabalho:
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <a
            href="#projetos"
            className="group p-6 bg-surface/60 border border-stroke/50 hover:border-cta/40 rounded-2xl transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <PenTool className="w-6 h-6 text-cta" strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-lg text-text">
                Preciso de um projeto aprovado
              </h3>
            </div>
            <p className="text-text-muted leading-relaxed mb-3">
              Escrita a quatro mãos ou revisão com olhos de avaliador, para
              editais FINEP, FAPESP, CNPq, Embrapii e FAPs.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-cta">
              Ver os dois formatos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#tecnologia"
            className="group p-6 bg-surface/60 border border-stroke/50 hover:border-cta/40 rounded-2xl transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-cta" strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-lg text-text">
                Preciso saber se isso vira negócio
              </h3>
            </div>
            <p className="text-text-muted leading-relaxed mb-3">
              Diagnóstico de prontidão comercial, rota de mercado e parecer
              técnico-comercial para investidores.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-cta">
              Ver a trilha de tecnologia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
