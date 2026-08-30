import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileSearch,
  MessageSquareText,
  QrCode,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { LAUNCHSCORE } from "@/lib/launchscore";
import { WA_MESSAGES } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const sections = [
  { href: "#analise", label: "O que analisa" },
  { href: "#entrega", label: "O relatório" },
  { href: "#comprar", label: "Comprar" },
  { href: "#faq", label: "Perguntas" },
];

const dimensoes = [
  {
    titulo: "Elegibilidade e completude",
    texto: "Alertas para requisitos formais, campos incompletos e condições que precisam ser verificadas antes da submissão.",
  },
  {
    titulo: "Critérios e pesos do edital",
    texto: "Leitura da proposta pela estrutura de avaliação definida na chamada, com score estimado por critério.",
  },
  {
    titulo: "Coerência interna",
    texto: "Confronto entre problema, objetivos, método, equipe, cronograma, entregáveis, orçamento e impacto.",
  },
  {
    titulo: "Padrões de propostas aprovadas",
    texto: "Comparação com padrões observados na base histórica de projetos aprovados disponível à Launchpad.",
  },
];

const relatorio = [
  "Alertas de elegibilidade e completude",
  "Score estimado para cada critério de avaliação",
  "Evidências fortes, fragilidades e inconsistências",
  "Trechos que precisam de melhor sustentação",
  "Cinco melhorias prioritárias antes da submissão",
];

const faqs = [
  {
    pergunta: "O que preciso enviar?",
    resposta:
      "Uma versão suficientemente completa da proposta, o edital e os anexos que definem critérios, pesos e requisitos da submissão.",
  },
  {
    pergunta: "O LaunchScore reescreve o projeto?",
    resposta:
      "A entrega principal é o diagnóstico: o relatório identifica o que precisa ser corrigido e prioriza as melhorias. A escrita completa da proposta é um serviço separado.",
  },
  {
    pergunta: "Como funciona o pagamento?",
    resposta:
      "O LaunchScore custa R$ 329,00. Você pode pagar por Pix à vista ou no cartão de crédito em até 10 parcelas de R$ 32,90 sem juros.",
  },
  {
    pergunta: "E a modalidade com mentoria?",
    resposta:
      "O LaunchScore com uma sessão individual de uma hora será oferecido por R$ 697,00. A abertura dessa modalidade será anunciada nesta página.",
  },
];

function PaymentCard({ method }: { method: "pix" | "cartao" }) {
  const isPix = method === "pix";
  const payment = LAUNCHSCORE.pagamentos[method];
  const Icon = isPix ? QrCode : CreditCard;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-stroke/60 bg-background/55 p-6">
      <div className="flex items-center gap-2 text-cta">
        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        <p className="font-mono text-xs uppercase tracking-[0.14em]">{isPix ? "Pix" : "Cartão"}</p>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-text">{payment.label}</h3>
      <p className="mt-2 min-h-12 leading-relaxed text-text-muted">{payment.detalhe}</p>
      <a
        href={payment.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("launchscore_checkout_click", {
            page: "launchscore",
            provider: "asaas",
            payment_method: isPix ? "pix" : "credit_card",
            price: LAUNCHSCORE.preco,
            ...(!isPix && { installments: LAUNCHSCORE.pagamentos.cartao.parcelas }),
          })
        }
        className={`mt-auto inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-3.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta ${
          isPix ? "bg-cta text-white hover:bg-cta/90 cta-glow" : "border border-cta/45 text-text hover:border-cta"
        }`}
        data-testid={`button-launchscore-${method}`}
      >
        {isPix ? "Pagar com Pix" : "Pagar com cartão"}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}

export default function LaunchScore() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar sections={sections} active="projetos" ctaHref="#comprar" ctaLabel="Adquirir LaunchScore" />

        <main>
          <section className="relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-48">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
              <div className="absolute inset-0 hero-scrim" />
            </div>
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
              <div>
                <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-cta">LaunchScore</p>
                <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
                  Descubra onde sua proposta perde força antes da submissão.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text/85 lg:text-xl">
                  Envie uma versão da proposta e receba um relatório completo com alertas, scores por critério, fragilidades e melhorias prioritárias.
                </p>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#comprar"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-cta px-7 py-4 text-base font-semibold text-white cta-glow transition-colors hover:bg-cta/90"
                    data-testid="cta-launchscore-hero"
                  >
                    Adquirir por R$ 329
                    <ArrowRight className="h-5 w-5" aria-hidden />
                  </a>
                  <a href="#analise" className="inline-flex items-center gap-2 px-3 py-3 font-semibold text-text-muted transition-colors hover:text-cta">
                    Entender a análise
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-cta/30 bg-surface/90 p-7 card-glow lg:p-9">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10">
                    <ClipboardCheck className="h-7 w-7 text-cta" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">Investimento</p>
                    <p className="mt-1 font-display text-4xl font-bold text-text">R$ 329</p>
                  </div>
                </div>
                <h2 className="mt-7 font-display text-2xl font-bold text-text">Revisão estruturada da proposta</h2>
                <ul className="mt-6 space-y-4">
                  {[
                    "Critérios e pesos oficiais do edital",
                    "Coerência entre todas as partes do projeto",
                    "Padrões observados em projetos aprovados",
                    "Prioridades claras para a próxima revisão",
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

          <section id="analise" className="scroll-mt-32 border-y border-stroke/30 bg-surface/30 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <h2 className="font-display text-3xl font-bold text-text lg:text-4xl">O relatório é baseado em quatro dimensões</h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  O LaunchScore organiza a revisão pela lógica do edital e pela coerência da proposta. Cada apontamento precisa mostrar o problema e orientar a correção.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {dimensoes.map((item, index) => (
                  <article key={item.titulo} className="rounded-3xl border border-stroke/50 bg-background/45 p-7">
                    <p className="font-mono text-xs text-cta">0{index + 1}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-text">{item.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-text-muted">{item.texto}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="entrega" className="scroll-mt-32 py-20 lg:py-28">
            <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div>
                <FileSearch className="h-9 w-9 text-cta" strokeWidth={1.5} aria-hidden />
                <h2 className="mt-5 font-display text-3xl font-bold text-text lg:text-4xl">O que você recebe</h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  O resultado é um relatório de revisão para orientar a próxima versão da proposta. Os problemas aparecem organizados por impacto e prioridade.
                </p>
              </div>
              <div className="rounded-3xl border border-cta/25 bg-surface/60 p-7 lg:p-9">
                <ul className="space-y-4">
                  {relatorio.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cta" strokeWidth={1.5} />
                      <span className="leading-relaxed text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-stroke/50 pt-6">
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-text-muted">
                    <Scale className="mt-0.5 h-5 w-5 shrink-0 text-cta" strokeWidth={1.5} aria-hidden />
                    O score organiza o diagnóstico da Launchpad. Ele não é a nota oficial da agência nem uma previsão do resultado do comitê.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-stroke/30 bg-surface/30 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mb-12 max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cta">Fluxo da entrega</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-text lg:text-4xl">Da proposta ao plano de revisão</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  ["01", "Envio", "Você envia a proposta, o edital e os anexos que definem os critérios de avaliação."],
                  ["02", "Análise", "A Launchpad aplica a estrutura de avaliação e confronta critérios, evidências e coerência interna."],
                  ["03", "Relatório", "Você recebe os scores, os alertas e as cinco melhorias que devem entrar primeiro na revisão."],
                ].map(([numero, titulo, texto]) => (
                  <article key={numero} className="rounded-3xl border border-stroke/50 bg-background/45 p-7">
                    <p className="font-mono text-sm text-cta">{numero}</p>
                    <h3 className="mt-3 font-display text-xl font-semibold text-text">{titulo}</h3>
                    <p className="mt-3 leading-relaxed text-text-muted">{texto}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="comprar" className="scroll-mt-32 py-20 lg:py-28">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cta">Escolha a forma de pagamento</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-text lg:text-4xl">Adquira o LaunchScore por R$ 329</h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">O pagamento é processado no ambiente seguro do Asaas.</p>
              </div>

              <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
                <PaymentCard method="pix" />
                <PaymentCard method="cartao" />
              </div>

              <article className="mx-auto mt-6 max-w-4xl rounded-3xl border border-dashed border-cta/40 bg-cta/[0.05] p-7 lg:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cta/10">
                      <MessageSquareText className="h-6 w-6 text-cta" strokeWidth={1.5} aria-hidden />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-xl font-semibold text-text">{LAUNCHSCORE.mentoria.nome}</h3>
                        <span className="rounded-full border border-cta/30 bg-cta/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-cta">Em breve</span>
                      </div>
                      <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">{LAUNCHSCORE.mentoria.descricao}</p>
                    </div>
                  </div>
                  <p className="shrink-0 font-display text-3xl font-bold text-text">R$ 697</p>
                </div>
              </article>

              <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-text-muted">
                Os checkouts abrem em uma nova aba. Esta página permanece disponível para você consultar as informações da entrega.
              </p>
            </div>
          </section>

          <section id="faq" className="scroll-mt-32 border-y border-stroke/30 bg-surface/30 py-20 lg:py-28">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <h2 className="text-center font-display text-3xl font-bold text-text lg:text-4xl">Perguntas frequentes</h2>
              <div className="mt-12 space-y-5">
                {faqs.map((faq) => (
                  <article key={faq.pergunta} className="rounded-2xl border border-stroke/50 bg-background/45 p-6">
                    <h3 className="font-display text-lg font-semibold text-text">{faq.pergunta}</h3>
                    <p className="mt-2 leading-relaxed text-text-muted">{faq.resposta}</p>
                  </article>
                ))}
              </div>
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-stroke/40 bg-background/35 p-5 text-sm text-text-muted">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-cta" strokeWidth={1.5} aria-hidden />
                <p>Se a proposta ainda não existe em versão avançada, o trabalho indicado é a <a href="/projetos/escrita-de-projetos" className="font-semibold text-cta hover:underline">Escrita de Projetos</a>.</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.revisao} />
      </div>
    </div>
  );
}
