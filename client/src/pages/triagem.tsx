import { useState } from "react";
import {
  ArrowRight,
  
  CalendarClock,
  CheckCircle2,
  GraduationCap,
  PenTool,
  ClipboardCheck,
  Microscope,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { WhatsAppIcon } from "@/components/hub/WhatsAppIcon";
import { Footer } from "@/components/landing/Footer";
import { waLink, calendlyLink } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/**
 * Triagem — qualificação sem backend.
 *
 * As respostas são montadas em uma mensagem estruturada e entregues pelo
 * WhatsApp (ou levam ao Calendly). Nenhum dado é armazenado ou enviado a
 * terceiros: o visitante revisa tudo antes de enviar, o que também simplifica
 * a conformidade com a LGPD. Quando houver CRM, basta trocar o handoff.
 */

type Situacao =
  | "edital-aberto"
  | "proposta-escrita"
  | "tecnologia-parada"
  | "avaliando-investimento"
  | "aprender";

const situacoes: {
  id: Situacao;
  label: string;
  hint: string;
  icon: typeof PenTool;
  recomendacao: string;
  porque: string;
  href: string;
}[] = [
  {
    id: "edital-aberto",
    label: "Tenho um edital na mira e o projeto ainda não está escrito",
    hint: "FINEP, FAPESP, CNPq, Embrapii, FAPs…",
    icon: PenTool,
    recomendacao: "Escrita do Projeto",
    porque:
      "Como o projeto ainda não existe no papel, dá tempo de acertar o enquadramento antes de escrever, que é onde a maioria das propostas se perde.",
    href: "/projetos#escrita",
  },
  {
    id: "proposta-escrita",
    label: "Já escrevi a proposta e quero saber onde ela é frágil",
    hint: "Rascunho avançado, antes da submissão",
    icon: ClipboardCheck,
    recomendacao: "LaunchScore",
    porque:
      "Com o texto pronto, o LaunchScore identifica fragilidades, inconsistências e melhorias prioritárias antes da submissão.",
    href: "/projetos#launchscore",
  },
  {
    id: "tecnologia-parada",
    label: "Tenho uma tecnologia que funciona, mas não sei onde ela vira negócio",
    hint: "Piloto feito, projeto concluído, patente depositada…",
    icon: Microscope,
    recomendacao: "Diagnóstico de Prontidão Comercial",
    porque:
      "Antes de captar mais recurso, vale saber qual aplicação perseguir e qual experimento reduz mais incerteza pelo menor custo.",
    href: "/tecnologia#diagnostico",
  },
  {
    id: "avaliando-investimento",
    label: "Preciso avaliar a tecnologia de terceiros para uma decisão de investimento",
    hint: "Fundo, CVC, family office, programa de fomento",
    icon: Scale,
    recomendacao: "Parecer Técnico-Comercial",
    porque:
      "Due diligence independente, no prazo do deal, sobre viabilidade técnica, prontidão comercial e os riscos que o pitch não mostra.",
    href: "/inteligencia#parecer",
  },
  {
    id: "aprender",
    label: "Quero aprender a fazer isso dentro da minha equipe",
    hint: "Construir a competência internamente",
    icon: GraduationCap,
    recomendacao: "Curso Fomento para Deeptechs",
    porque:
      "Se a necessidade é recorrente, faz mais sentido internalizar o método do que contratar escrita a cada edital.",
    href: "/treinamentos",
  },
];

const prazos = [
  "Menos de 2 semanas",
  "2 a 4 semanas",
  "1 a 3 meses",
  "Sem prazo definido",
];

export default function Triagem() {
  const [situacao, setSituacao] = useState<Situacao | null>(null);
  const [prazo, setPrazo] = useState("");
  const [contexto, setContexto] = useState("");
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");

  const escolha = situacoes.find((s) => s.id === situacao);

  const mensagem = [
    "Olá! Fiz a triagem no site do LaunchpadHub.",
    "",
    nome && `*Nome:* ${nome}`,
    empresa && `*Empresa:* ${empresa}`,
    escolha && `*Situação:* ${escolha.label}`,
    prazo && `*Prazo:* ${prazo}`,
    contexto && `*Contexto:* ${contexto}`,
    "",
    escolha && `A triagem indicou: ${escolha.recomendacao}.`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 lg:pt-40 pb-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <header className="text-center mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
                Triagem · 2 minutos, sem compromisso
              </p>
              <h1 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-5">
                Qual é o seu próximo passo?
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Responda o que fizer sentido e eu digo qual caminho se encaixa: curso,
                escrita, revisão, diagnóstico ou parecer. Se nenhum servir, eu
                falo isso também.
              </p>
            </header>

            {/* Passo 1 */}
            <section className="mb-10">
              <h2 className="font-display font-semibold text-lg text-text mb-4">
                <span className="font-mono text-cta mr-2">1.</span>
                O que descreve melhor a sua situação hoje?
              </h2>
              <div className="space-y-3">
                {situacoes.map((s) => {
                  const active = situacao === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setSituacao(s.id);
                        trackEvent("triagem_situacao", { situacao: s.id });
                      }}
                      className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-200 ${
                        active
                          ? "bg-cta/10 border-cta/50"
                          : "bg-surface/50 border-stroke/50 hover:border-cta/30"
                      }`}
                      aria-pressed={active}
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl ${
                          active ? "bg-cta" : "bg-cta/10"
                        }`}
                      >
                        <s.icon
                          className={`w-5 h-5 ${active ? "text-white" : "text-cta"}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-text font-medium leading-snug">{s.label}</p>
                        <p className="text-sm text-text-muted mt-0.5">{s.hint}</p>
                      </div>
                      {active && (
                        <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-2" strokeWidth={1.5} />
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Resultado */}
            {escolha && (
              <section className="mb-10 p-6 lg:p-8 bg-surface border border-cta/30 rounded-3xl card-glow">
                <p className="text-xs font-mono uppercase tracking-widest text-cta mb-2">
                  Provável encaixe
                </p>
                <h2 className="font-display font-bold text-2xl text-text mb-3">
                  {escolha.recomendacao}
                </h2>
                <p className="text-text-muted leading-relaxed mb-4">{escolha.porque}</p>
                <a
                  href={escolha.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
                >
                  Ler os detalhes desse trabalho
                  <ArrowRight className="w-4 h-4" />
                </a>
              </section>
            )}

            {/* Passo 2 */}
            <section className="mb-10">
              <h2 className="font-display font-semibold text-lg text-text mb-4">
                <span className="font-mono text-cta mr-2">2.</span>
                Qual é o seu prazo?
              </h2>
              <div className="flex flex-wrap gap-3">
                {prazos.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPrazo(p)}
                    className={`px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 ${
                      prazo === p
                        ? "bg-cta/10 border-cta/50 text-text"
                        : "bg-surface/50 border-stroke/50 text-text-muted hover:border-cta/30"
                    }`}
                    aria-pressed={prazo === p}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </section>

            {/* Passo 3 */}
            <section className="mb-10">
              <h2 className="font-display font-semibold text-lg text-text mb-4">
                <span className="font-mono text-cta mr-2">3.</span>
                Me conte o caso em duas linhas{" "}
                <span className="text-text-muted font-body font-normal text-base">
                  (opcional)
                </span>
              </h2>
              <textarea
                value={contexto}
                onChange={(e) => setContexto(e.target.value)}
                rows={4}
                placeholder="Ex.: desenvolvemos um processo de recuperação de sais de um efluente industrial, piloto rodando há 8 meses, queremos submeter à FINEP mas não sabemos em qual linha."
                className="w-full p-4 bg-surface/50 border border-stroke/50 rounded-2xl text-text placeholder:text-text-muted/60 focus:outline-none focus:border-cta/50 transition-colors resize-y"
              />

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="p-4 bg-surface/50 border border-stroke/50 rounded-2xl text-text placeholder:text-text-muted/60 focus:outline-none focus:border-cta/50 transition-colors"
                />
                <input
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Empresa ou instituição"
                  className="p-4 bg-surface/50 border border-stroke/50 rounded-2xl text-text placeholder:text-text-muted/60 focus:outline-none focus:border-cta/50 transition-colors"
                />
              </div>
            </section>

            {/* Envio */}
            <section className="p-6 lg:p-8 bg-surface/40 border border-stroke/50 rounded-3xl">
              <h2 className="font-display font-semibold text-lg text-text mb-2">
                Como prefere continuar?
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Suas respostas vão montadas na mensagem — você revisa antes de
                enviar. Nada é armazenado neste site.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(mensagem, "triagem")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("submit_qualification_form", {
                      canal: "whatsapp",
                      situacao: situacao ?? "nao-informada",
                      prazo: prazo || "nao-informado",
                    })
                  }
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
                  data-testid="triagem-whatsapp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Enviar pelo WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={calendlyLink("triagem")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("submit_qualification_form", {
                      canal: "calendly",
                      situacao: situacao ?? "nao-informada",
                      prazo: prazo || "nao-informado",
                    })
                  }
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold text-text border border-stroke hover:border-cta/40 rounded-2xl transition-all duration-200"
                  data-testid="triagem-calendly"
                >
                  <CalendarClock className="w-5 h-5 text-cta" strokeWidth={1.5} />
                  Agendar 20 minutos
                </a>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
