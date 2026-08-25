import {
  ArrowRight,
  PenTool,
  ClipboardCheck,
  CheckCircle2,
  Clock,
  XCircle,
  CalendarClock,
  MessageSquareText,
} from "lucide-react";
import { ContactOptions } from "./ContactOptions";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { waLink, calendlyLink, WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

export function ProjectsHero() {
  return (
    <section className="relative pt-36 lg:pt-48 pb-20 lg:pb-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background" />
        <div className="absolute inset-0 hero-scrim" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-base font-semibold text-cta bg-cta/10 border border-cta/20 rounded-full">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            Projetos de fomento · trabalho comigo
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight tracking-tight mb-6 animate-fade-in-up">
            Tem um edital na mira.
            <br />
            <span className="text-gradient-accent">E o relógio correndo.</span>
          </h1>

          <p className="text-lg lg:text-xl text-text/85 leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            Escrevo o projeto junto com você ou aplico o LaunchScore ao que você já
            escreveu. Nos dois casos, o trabalho identifica o que pode reduzir a
            avaliação da proposta antes da submissão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-200">
            <a
              href="#escrita"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
              data-testid="button-projetos-escrita"
            >
              Escrever meu projeto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#launchscore"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-text border border-stroke hover:border-cta/40 rounded-2xl transition-all duration-200"
              data-testid="button-projetos-launchscore"
            >
              Avaliar com o LaunchScore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROBLEM                                                             */
/* ------------------------------------------------------------------ */

const failures = [
  {
    title: "Enquadramento errado",
    description:
      "O projeto é bom, mas não é aquilo que o edital está comprando. Nenhuma qualidade de texto salva isso.",
  },
  {
    title: "Afirmação sem evidência",
    description:
      "\"Tecnologia inovadora com grande potencial de mercado.\" O avaliador lê isso vinte vezes por dia e não pontua nenhuma.",
  },
  {
    title: "Plano que não fecha",
    description:
      "Entregáveis que não batem com o cronograma, equipe que não cabe nas horas, metas sem indicador.",
  },
  {
    title: "Orçamento indefensável",
    description:
      "Números redondos, sem memória de cálculo e sem relação clara com as atividades do plano de trabalho.",
  },
];

export function ProjectsProblem() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Boas tecnologias perdem para propostas melhor escritas
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            O avaliador não conhece a sua tecnologia, tem dezenas de propostas para
            ler e decide pelo que está no papel. Quase sempre o que derruba um bom
            projeto é uma destas quatro coisas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {failures.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-background/50 border border-stroke/50 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg text-text">
                  {item.title}
                </h3>
              </div>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg text-text max-w-2xl mx-auto">
          Todas essas falhas se resolvem do mesmo jeito: com método e com quem
          já viu o processo dos dois lados do balcão.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

const projectServices = [
  {
    icon: PenTool,
    tag: "A quatro mãos · da estrutura à submissão",
    title: "Escrita do Projeto",
    lead:
      "Eu assumo a caneta. Você traz a tecnologia, o time e os dados; eu estruturo, escrevo e defendo o projeto no papel.",
    body:
      "É o mais próximo que existe de ter um especialista dentro do seu time durante toda a construção da proposta. Começamos pelo enquadramento (edital, linha, TRL, contrapartida), porque proposta boa no edital errado é proposta reprovada. Depois construímos a narrativa técnica na ordem em que o avaliador lê: qual é o problema, por que a sua solução é diferente, que evidências você já tem, como vai executar e com que orçamento.",
    bullets: [
      "Enquadramento e decisão Go/No-Go antes de escrever a primeira linha",
      "Redação completa da proposta, campo a campo, com você revisando a cada etapa",
      "Plano de trabalho, cronograma, entregáveis, riscos e orçamento defensável",
      "Preparação para a defesa e para os questionamentos mais prováveis",
    ],
    closing:
      "São mais de dez anos escrevendo e avaliando projetos de fomento, com mais de R$ 35 milhões aprovados. Essa experiência entra na sua proposta como estrutura, não como promessa.",
    cta: "Quero escrever meu projeto",
    waMessage: WA_MESSAGES.escrita,
    featured: true,
    id: "escrita",
  },
  {
    icon: ClipboardCheck,
    tag: "Diagnóstico estruturado · antes da submissão",
    title: "LaunchScore",
    lead:
      "Você envia uma versão da proposta e recebe um diagnóstico das fragilidades e melhorias prioritárias.",
    body:
      "O LaunchScore analisa a proposta com base nos critérios e pesos do edital, nos requisitos formais, na coerência interna e em padrões observados na base histórica de projetos aprovados disponível à Launchpad.",
    bullets: [
      "Alertas de elegibilidade e completude",
      "Score estimado por critério",
      "Evidências, fragilidades e inconsistências",
      "Cinco melhorias prioritárias antes da submissão",
    ],
    closing:
      "O LaunchScore é um diagnóstico da Launchpad. Não corresponde à nota da agência, não estima probabilidade de aprovação e não substitui a decisão do comitê julgador.",
    cta: "",
    waMessage: "",
    featured: false,
    id: "launchscore",
  },
];

export function ProjectServicesCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
            Duas formas de trabalhar
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            A diferença é o ponto de partida: a escrita estrutura a proposta;
            o LaunchScore avalia uma versão já preparada por você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projectServices.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`scroll-mt-32 flex flex-col p-8 lg:p-10 rounded-3xl card-glow transition-all duration-200 ${
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

              <div className="mt-auto">
                {service.id === "launchscore" ? (
                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-stroke/60 bg-background/45 p-5">
                      <p className="font-display text-lg font-semibold text-text">LaunchScore</p>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        Diagnóstico e relatório com os alertas, scores e melhorias prioritárias.
                      </p>
                      <p className="mt-5 font-display text-3xl font-bold text-text">R$ 297,00</p>
                    </div>
                    <div className="rounded-2xl border border-cta/35 bg-cta/[0.06] p-5">
                      <div className="flex items-center gap-2 text-cta">
                        <MessageSquareText className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                        <p className="font-mono text-[11px] uppercase tracking-wider">Com mentoria</p>
                      </div>
                      <p className="mt-3 font-display text-lg font-semibold text-text">
                        LaunchScore + 1 hora de mentoria
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        Inclui o diagnóstico e uma sessão individual para dúvidas e feedback sobre os ajustes.
                      </p>
                      <p className="mt-5 font-display text-3xl font-bold text-text">R$ 597,00</p>
                    </div>
                    <p className="text-center text-sm text-text-muted">
                      Os links de compra serão disponibilizados em breve.
                    </p>
                  </div>
                ) : (
                  <>
                    <a
                      href={waLink(service.waMessage, service.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-2xl transition-all duration-200 group text-white bg-cta hover:bg-cta/90 cta-glow"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      {service.cta}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={calendlyLink(service.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-text-muted hover:text-cta transition-colors"
                    >
                      <CalendarClock className="w-4 h-4" strokeWidth={1.5} />
                      ou agende 20 minutos comigo
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-surface/30 border border-stroke/40 rounded-2xl max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-cta flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-text-muted leading-relaxed">
              <strong className="text-text">Sobre prazo:</strong> trabalho com poucos
              projetos de escrita por vez e editais têm data. Procure com a maior
              antecedência possível. Para o LaunchScore, envie uma versão suficientemente
              completa para que critérios, coerência e lacunas possam ser avaliados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* COMPARISON                                                          */
/* ------------------------------------------------------------------ */

export function ProjectServicesComparison() {
  const rows = [
    {
      label: "Onde você está",
      writing: "Tem a tecnologia e o edital, mas o projeto ainda não existe no papel",
      review: "Já escreveu a proposta e quer identificar onde ela é frágil",
    },
    {
      label: "Meu papel",
      writing: "Escrevo com você, do enquadramento à versão final",
      review: "O LaunchScore aplica critérios, identifica lacunas e prioriza melhorias",
    },
    {
      label: "O que você recebe",
      writing: "Projeto completo, estruturado e pronto para submissão",
      review: "Relatório LaunchScore; opcionalmente, uma hora de mentoria",
    },
    {
      label: "Quando procurar",
      writing: "Assim que o edital sair — ou antes, se já sabe que vai concorrer",
      review: "Com a proposta em versão avançada e tempo para realizar os ajustes",
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
                <ClipboardCheck className="w-5 h-5 text-cta" strokeWidth={1.5} />
                <span className="font-display font-semibold text-text">
                  LaunchScore
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
              <div className="p-5 text-sm text-text-muted">{row.label}</div>
              <div className="p-5 sm:border-l border-stroke/40 text-text-muted leading-relaxed">
                {row.writing}
              </div>
              <div className="p-5 sm:border-l border-stroke/40 text-text-muted leading-relaxed">
                {row.review}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-text-muted mb-5">
            Na dúvida, me conte o caso — eu digo qual faz mais sentido.
          </p>
          <ContactOptions message={WA_MESSAGES.duvidaProjeto} source="projetos-comparacao" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ + CONTACT                                                       */
/* ------------------------------------------------------------------ */

export function ProjectsFAQ() {
  const faqs = [
    {
      q: "Você garante que o projeto será aprovado?",
      a: "Não. A decisão é de um comitê, com critérios e concorrência que ninguém controla. A escrita e o LaunchScore ajudam a identificar problemas de enquadramento, coerência, evidência e execução antes da submissão, sem prever nota ou aprovação.",
    },
    {
      q: "Funciona para qual edital?",
      a: "FINEP, FAPESP (PIPE), CNPq, Embrapii, FAPs estaduais, Centelha, SENAI e chamadas setoriais. O formulário muda, a lógica de avaliação não.",
    },
    {
      q: "Quanto custa?",
      a: "O LaunchScore custa R$ 297,00. A modalidade com o diagnóstico e uma hora de mentoria para dúvidas e feedback custa R$ 597,00. A escrita completa do projeto tem escopo e preço definidos depois da avaliação do edital e do estágio da proposta.",
    },
    {
      q: "Preciso ter a tecnologia pronta?",
      a: "Não, mas precisa ter algo real: resultados, protótipo, prova de conceito, dados. Se a tecnologia ainda está só no papel, edital nenhum resolve e eu digo isso na primeira conversa.",
    },
    {
      q: "E se o edital fecha em duas semanas?",
      a: "Uma proposta em versão avançada ainda pode passar pelo LaunchScore, desde que exista tempo para aplicar as melhorias. Se o material estiver incompleto demais para uma avaliação útil, isso precisa ser resolvido antes do diagnóstico.",
    },
    {
      q: "Meu projeto vira propriedade sua?",
      a: "Nunca. O projeto é seu, a tecnologia é sua, a submissão é da sua empresa. Trabalho sob confidencialidade e assino NDA sem problema.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-12">
          Perguntas frequentes
        </h2>
        <div className="space-y-5">
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

export function ProjectsContact() {
  return (
    <section
      id="contato"
      className="py-20 lg:py-28 bg-surface/30 border-t border-stroke/30 scroll-mt-32"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-6">
          Me conte qual edital você quer disputar
        </h2>
        <p className="text-lg text-text-muted leading-relaxed mb-10">
          Qual chamada, qual é a tecnologia, em que estágio está e qual é o
          prazo. Com isso eu já consigo dizer se dá para fazer um bom trabalho
          no tempo que existe.
        </p>
        <ContactOptions message={WA_MESSAGES.geral} variant="cards" source="projetos-contato" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CROSS-LINK to the technology track                                  */
/* ------------------------------------------------------------------ */

export function TechCrossLink() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="p-8 bg-surface/40 border border-stroke/50 rounded-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
            Outra frente de trabalho
          </p>
          <h2 className="font-display font-semibold text-xl lg:text-2xl text-text mb-3">
            A sua dúvida é antes do edital?
          </h2>
          <p className="text-text-muted leading-relaxed mb-5">
            Se a pergunta não é "como capto recurso para desenvolver isso", e sim
            "isso aqui vira negócio e por qual caminho", o trabalho é outro.
          </p>
          <a
            href="/tecnologia"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
          >
            Ver tecnologia e mercado
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
