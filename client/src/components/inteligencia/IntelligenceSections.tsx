import {
  ArrowRight,
  FileText,
  Database,
  Presentation,
  ClipboardList,
  Layers,
  Search,
  Scale,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Bot,
  UserCheck,
  Clock,
} from "lucide-react";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { WA_MESSAGES } from "@/lib/contact";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

export function IntelligenceHero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-5 py-2 mb-5 text-sm font-semibold text-cta bg-cta/10 border border-cta/20 rounded-full">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            Inteligência técnica independente
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.12] tracking-tight mb-6 animate-fade-in-up">
            Uma tecnologia promissora chegou até você.
            <br />
            <span className="text-gradient-accent">Vale o próximo passo?</span>
          </h1>

          <p className="text-lg lg:text-xl text-text-muted leading-relaxed mb-4 max-w-3xl mx-auto animate-fade-in-up animate-delay-100">
            Avaliação independente de tecnologias, startups, fornecedores e rotas
            técnicas para empresas industriais. Confrontamos os claims com
            evidências, comparamos alternativas e entregamos uma recomendação
            com os testes que ainda precisam ser feitos.
          </p>

          <p className="text-sm font-mono text-text-muted mb-9 animate-fade-in-up animate-delay-200">
            Technology Decision Sprint · 10 dias úteis · escopo fechado
          </p>

          <a
            href="#sprint"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group animate-fade-in-up animate-delay-200"
            data-testid="button-inteligencia-sprint"
          >
            Ver como funciona o Sprint
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROBLEMA                                                            */
/* ------------------------------------------------------------------ */

export function IntelligenceProblem() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-8">
          A decisão chega antes da informação
        </h2>
        <div className="text-lg text-text-muted leading-relaxed space-y-5 max-w-3xl mx-auto">
          <p>
            Um fornecedor apresenta uma rota nova. Uma startup pede NDA e reunião
            técnica. O scouting devolveu quarenta opções e alguém precisa cortar
            para cinco. Um concorrente anuncia uma parceria que ninguém tinha
            mapeado.
          </p>
          <p>
            As evidências existem, mas estão espalhadas entre papers, patentes,
            material comercial do próprio fornecedor e sinais soltos de mercado.
            Um time interno consegue reunir tudo isso. O custo é gastar semanas
            de gente cara para chegar a um resumo que ainda não decide nada.
          </p>
          <p>
            <strong className="text-text">
              O risco de errar não está só no piloto que não funciona.
            </strong>{" "}
            Está no NDA assinado cedo demais, no orçamento de teste comprometido,
            no tempo de especialista consumido e na credibilidade interna gasta
            defendendo uma rota que não se sustentava.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* O SPRINT                                                            */
/* ------------------------------------------------------------------ */

const vereditos = [
  { label: "Avançar", desc: "A tese se sustenta e o próximo compromisso se justifica." },
  { label: "Aprofundar", desc: "Há potencial, mas faltam evidências específicas antes do gate." },
  { label: "Aguardar", desc: "A rota é real, o momento não é. Definimos o gatilho de reavaliação." },
  { label: "Parar", desc: "As evidências não sustentam o investimento. Encerrar cedo é o resultado." },
];

const entregaveis = [
  {
    icon: FileText,
    nome: "Decision memo",
    desc: "A recomendação, as condições que a sustentam, os riscos e o que ainda não se sabe.",
  },
  {
    icon: Layers,
    nome: "Evidence pack",
    desc: "Cada claim crítico rastreado até a fonte, com qualidade da evidência, conflitos e lacunas.",
  },
  {
    icon: Database,
    nome: "Dataset estruturado",
    desc: "Entidades, players, patentes indicativas e sinais organizados para reuso interno.",
  },
  {
    icon: Presentation,
    nome: "Decision review",
    desc: "Sessão de 60 minutos com o time que vai decidir, para confrontar a recomendação.",
  },
  {
    icon: ClipboardList,
    nome: "Action brief",
    desc: "Uma página com o próximo teste de maior valor informacional e o critério de decisão.",
  },
];

export function SprintSection() {
  return (
    <section id="sprint" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
            Serviço principal
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-5">
            Technology Decision Sprint
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Dez dias úteis para responder uma pergunta só:{" "}
            <strong className="text-text">
              esta tecnologia merece o próximo compromisso de tempo,
              confidencialidade ou capital, e o que ainda precisa ser verdade
              antes disso?
            </strong>
          </p>
        </div>

        {/* Vereditos */}
        <div className="mb-14">
          <h3 className="font-display font-semibold text-xl text-text text-center mb-6">
            O Sprint termina em um destes quatro lugares
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vereditos.map((v) => (
              <div
                key={v.label}
                className="p-5 bg-surface/50 border border-stroke/50 rounded-2xl"
              >
                <p className="font-display font-bold text-lg text-cta mb-2">
                  {v.label}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-text-muted">
            Nenhum deles é o resultado esperado por padrão. Contratar o Sprint
            para confirmar uma decisão já tomada é desperdício de dinheiro.
          </p>
        </div>

        {/* Entregáveis */}
        <div className="p-8 lg:p-10 bg-surface border border-cta/30 rounded-3xl card-glow">
          <h3 className="font-display font-bold text-2xl text-text mb-6">
            O que você recebe
          </h3>
          <div className="space-y-5 mb-8">
            {entregaveis.map((e) => (
              <div key={e.nome} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 grid place-items-center bg-cta/10 rounded-xl">
                  <e.icon className="w-5 h-5 text-cta" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-text font-medium mb-1">{e.nome}</p>
                  <p className="text-text-muted leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-stroke/50">
            <ContactOptions
              message={WA_MESSAGES.sprint}
              source="inteligencia-sprint"
              className="max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* GATILHOS                                                            */
/* ------------------------------------------------------------------ */

const gatilhos = [
  "Uma startup ou fornecedor pediu NDA, reunião técnica, amostra ou piloto.",
  "O scouting gerou opções demais e a shortlist precisa ser reduzida com critério.",
  "Um concorrente anunciou solução, parceria ou investimento que ninguém tinha mapeado.",
  "Existe um gate de P&D, CAPEX, sustentabilidade ou corporate venture chegando.",
  "Uma rota parece promissora, mas os claims nunca foram confrontados por alguém de fora.",
];

export function TriggersSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-10">
          Quando o Sprint costuma ser contratado
        </h2>
        <div className="space-y-3">
          {gatilhos.map((g) => (
            <div
              key={g}
              className="flex items-start gap-4 p-5 bg-background/50 border border-stroke/50 rounded-2xl"
            >
              <CheckCircle2
                className="w-5 h-5 text-cta flex-shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <p className="text-text-muted leading-relaxed">{g}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* MÉTODO                                                              */
/* ------------------------------------------------------------------ */

export function MethodSection() {
  return (
    <section id="metodo-sprint" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-5">
            Como o trabalho é feito
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Automação para cobrir volume. Julgamento humano nos pontos em que
            errar custa caro.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="p-7 bg-surface/50 border border-stroke/50 rounded-3xl">
            <div className="w-12 h-12 mb-4 grid place-items-center bg-cta/10 rounded-2xl">
              <Bot className="w-6 h-6 text-cta" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-xl text-text mb-3">
              O que é acelerado por agentes
            </h3>
            <ul className="space-y-2 text-text-muted leading-relaxed">
              <li>Descoberta e varredura de literatura, patentes e fontes públicas</li>
              <li>Extração de claims e parâmetros técnicos</li>
              <li>Estruturação de entidades, players e sinais em dataset</li>
            </ul>
          </div>

          <div className="p-7 bg-surface border border-cta/30 rounded-3xl card-glow">
            <div className="w-12 h-12 mb-4 grid place-items-center bg-cta rounded-2xl">
              <UserCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-semibold text-xl text-text mb-3">
              O que permanece humano
            </h3>
            <ul className="space-y-2 text-text-muted leading-relaxed">
              <li>Definição do decision frame e do gate que será apoiado</li>
              <li>Julgamento sobre qualidade e conflito de evidências</li>
              <li>Critic review de cada conclusão crítica</li>
              <li>QA final assinado por José Renato antes da entrega</li>
            </ul>
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-background/50 border-l-2 border-cta rounded-r-2xl">
          <div className="flex items-start gap-4">
            <Search className="w-6 h-6 text-cta flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <p className="font-display font-semibold text-lg text-text mb-2">
                Claim, evidência, fonte
              </p>
              <p className="text-text-muted leading-relaxed">
                Toda afirmação crítica do memo preserva a cadeia até a origem,
                com a qualidade da evidência declarada e as lacunas apontadas
                onde elas existem. Você consegue defender a recomendação
                internamente sem precisar acreditar em nós.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* LIMITES                                                             */
/* ------------------------------------------------------------------ */

const naoSomos = [
  "Um buscador ou chatbot que devolve resumo de internet",
  "Um laboratório, uma certificadora ou um escritório de patentes",
  "Uma consultoria genérica de inovação",
  "Um substituto da decisão, que continua sendo da sua empresa",
];

const naoContratar = [
  "A decisão já está tomada e o que se procura é respaldo",
  "O que falta é ensaio de bancada ou validação laboratorial",
  "É preciso parecer jurídico de liberdade de operação em propriedade intelectual",
  "O prazo interno é menor que dez dias úteis",
];

export function LimitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text text-center mb-12">
          Onde este trabalho começa e onde termina
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-7 bg-background/50 border border-stroke/50 rounded-3xl">
            <h3 className="font-display font-semibold text-lg text-text mb-5 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-text-muted" strokeWidth={1.5} />
              O que o LaunchpadHub não é
            </h3>
            <ul className="space-y-3">
              {naoSomos.map((i) => (
                <li key={i} className="text-text-muted leading-relaxed">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 bg-background/50 border border-stroke/50 rounded-3xl">
            <h3 className="font-display font-semibold text-lg text-text mb-5 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-highlight" strokeWidth={1.5} />
              Quando não contratar o Sprint
            </h3>
            <ul className="space-y-3">
              {naoContratar.map((i) => (
                <li key={i} className="text-text-muted leading-relaxed">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto p-6 bg-background/40 border border-stroke/40 rounded-2xl">
          <p className="text-text-muted leading-relaxed">
            <strong className="text-text">Sobre o que ainda estamos construindo:</strong>{" "}
            o Sprint é uma oferta nova, com metodologia documentada e em
            validação comercial. Não temos plataforma de acesso self-service,
            base proprietária ampla, monitoramento contínuo nem equipe de
            analistas. O que existe é método, ferramentas próprias e a
            experiência de quem avalia tecnologia industrial desde 2012.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* AMOSTRA (placeholder até liberação do dossiê PFAS)                  */
/* ------------------------------------------------------------------ */

export function SampleSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="p-8 bg-surface/40 border border-stroke/50 border-dashed rounded-3xl text-center">
          <div className="w-12 h-12 mx-auto mb-4 grid place-items-center bg-cta/10 rounded-2xl">
            <FileText className="w-6 h-6 text-cta" strokeWidth={1.5} />
          </div>
          <h2 className="font-display font-semibold text-xl lg:text-2xl text-text mb-3">
            Quer ver um Sprint de verdade antes de decidir?
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Temos um dossiê completo sobre rotas de destruição de PFAS, com
            decision memo e evidence pack estruturados. A publicação aberta
            ainda depende de autorização. Peça pelo WhatsApp e avaliamos o envio
            sob confidencialidade.
          </p>
          <ContactOptions
            message="Olá! Vim pelo site e gostaria de ver a amostra do Technology Decision Sprint (dossiê PFAS)."
            source="inteligencia-amostra"
            className="max-w-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PARECER (oferta secundária desta frente)                            */
/* ------------------------------------------------------------------ */

export function ParecerSection() {
  return (
    <section id="parecer" className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30 scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start p-8 lg:p-10 bg-background/50 border border-stroke/50 rounded-3xl card-glow">
          <div className="flex-shrink-0 w-14 h-14 grid place-items-center bg-cta/10 rounded-2xl">
            <Scale className="w-7 h-7 text-cta" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-mono uppercase tracking-wider text-cta mb-2">
              Para investidores e financiadores · 1 a 3 semanas
            </p>
            <h2 className="font-display font-bold text-2xl text-text mb-4">
              Parecer Técnico-Comercial
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Quando a decisão é de investimento e não de compra, o objeto muda.
              O parecer avalia viabilidade técnica, prontidão comercial e os
              riscos que o pitch não mostra, no prazo do deal.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Atende fundos, CVCs, family offices e programas de fomento que
              precisam de leitura independente antes de comprometer capital.
            </p>
            <ContactOptions
              message={WA_MESSAGES.parecer}
              source="inteligencia-parecer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTATO                                                             */
/* ------------------------------------------------------------------ */

export function IntelligenceContact() {
  return (
    <section id="contato" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-6">
          Qual decisão está na sua mesa?
        </h2>
        <p className="text-lg text-text-muted leading-relaxed mb-8">
          Me conte qual tecnologia, startup ou fornecedor está em avaliação, qual
          compromisso vem a seguir e quando é o gate interno. Em uma conversa de
          20 minutos dá para saber se o Sprint resolve ou se o caso pede outra
          coisa.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
          <Clock className="w-4 h-4 text-cta" strokeWidth={1.5} />
          Trabalho com poucos sprints simultâneos. Gates têm data.
        </div>
        <ContactOptions
          message={WA_MESSAGES.inteligencia}
          variant="cards"
          source="inteligencia-contato"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CROSS-LINK                                                          */
/* ------------------------------------------------------------------ */

export function OwnTechCrossLink() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="p-8 bg-surface/40 border border-stroke/50 rounded-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
            Outra frente de trabalho
          </p>
          <h2 className="font-display font-semibold text-xl lg:text-2xl text-text mb-3">
            A tecnologia em questão é sua?
          </h2>
          <p className="text-text-muted leading-relaxed mb-5">
            Esta página trata de avaliar tecnologia de terceiros. Quando a
            tecnologia é da sua empresa e a dúvida é onde ela vira negócio, o
            trabalho é o Diagnóstico de Prontidão Comercial.
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
