import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { MatrizTrlCrl } from "./MatrizTrlCrl";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { trackEvent } from "@/lib/analytics";

/**
 * Autodiagnóstico público de prontidão comercial.
 *
 * Estimativa, não avaliação: usa uma pergunta por eixo do CRL e devolve a
 * média inteira. A rubrica completa (critérios de evidência por nível, pesos
 * por setor) é o que sustenta o Diagnóstico pago e não vive no cliente.
 */

interface Eixo {
  id: string;
  nome: string;
  pergunta: string;
  opcoes: { label: string; nivel: number }[];
}

const EIXOS: Eixo[] = [
  {
    id: "cliente",
    nome: "Cliente e problema",
    pergunta: "Quão confirmada está a dor que a sua tecnologia resolve?",
    opcoes: [
      { label: "É uma hipótese nossa, ainda não conversamos com o mercado", nivel: 1 },
      { label: "Temos o perfil de cliente definido, mas a dor é presumida", nivel: 3 },
      { label: "Entrevistamos clientes reais e a dor se confirmou", nivel: 5 },
      { label: "A dor é prioridade declarada do cliente, com orçamento associado", nivel: 7 },
      { label: "Clientes já buscam ativamente uma solução como a nossa", nivel: 9 },
    ],
  },
  {
    id: "pagamento",
    nome: "Disposição a pagar",
    pergunta: "Qual é a evidência mais forte de que alguém paga por isso?",
    opcoes: [
      { label: "Nenhuma ainda", nivel: 1 },
      { label: "Interesse verbal em conversas", nivel: 2 },
      { label: "Ganho econômico quantificado para o cliente", nivel: 4 },
      { label: "Carta de intenção ou acordo de piloto assinado", nivel: 6 },
      { label: "Piloto pago por um cliente que não é sócio nem investidor", nivel: 8 },
      { label: "Contrato comercial fora de piloto", nivel: 9 },
    ],
  },
  {
    id: "regulatorio",
    nome: "Rota regulatória",
    pergunta: "Como está o caminho normativo para vender (ANVISA, INMETRO, CONAMA, registro…)?",
    opcoes: [
      { label: "Não mapeamos ainda", nivel: 1 },
      { label: "Mapeado, mas sem plano nem prazo", nivel: 3 },
      { label: "Plano definido, com prazo e custo estimados", nivel: 5 },
      { label: "Processo iniciado junto ao órgão", nivel: 7 },
      { label: "Aprovado, ou não aplicável ao nosso caso", nivel: 9 },
    ],
  },
  {
    id: "modelo",
    nome: "Modelo de negócio e cadeia",
    pergunta: "Está claro como a tecnologia chega ao cliente e quem precisa participar?",
    opcoes: [
      { label: "Ainda indefinido", nivel: 1 },
      { label: "Temos uma hipótese de modelo", nivel: 3 },
      { label: "Modelo definido e cadeia de valor mapeada", nivel: 5 },
      { label: "Conversas em andamento com os parceiros-chave", nivel: 7 },
      { label: "Acordos firmados com quem precisa participar", nivel: 9 },
    ],
  },
  {
    id: "escala",
    nome: "Capacidade de escala",
    pergunta: "O que existe hoje sobre produzir na escala que o mercado exige?",
    opcoes: [
      { label: "Só funciona em bancada", nivel: 1 },
      { label: "Rota de scale-up desenhada no papel", nivel: 3 },
      { label: "Custo em escala estimado com premissas defensáveis", nivel: 5 },
      { label: "Parceiro industrial identificado e conversando", nivel: 7 },
      { label: "Capacidade contratada ou instalada", nivel: 9 },
    ],
  },
];

/** Definições oficiais da escala TRL, como usadas pelas agências de fomento. */
const TRL_DEFINICOES: Record<number, string> = {
  1: "Princípios básicos observados e relatados.",
  2: "Formulação de conceitos tecnológicos e/ou de aplicação.",
  3: "Prova de conceito analítica e experimental.",
  4: "Validação de componentes ou protótipos em laboratório.",
  5: "Validação de componentes em ambiente relevante.",
  6: "Demonstração de protótipo em ambiente relevante.",
  7: "Demonstração do sistema em ambiente operacional/real.",
  8: "Sistema completo e qualificado por testes e demonstrações reais.",
  9: "Sistema real provado em operação comercial plena.",
};

const TRL_BLOCOS = [
  { faixa: "1 a 3", label: "Conceito e prova de princípio" },
  { faixa: "4 a 6", label: "Validação em ambiente relevante" },
  { faixa: "7 a 9", label: "Sistema real, qualificado e operando" },
];

function veredito(descompasso: number) {
  if (descompasso <= 1)
    return {
      titulo: "Ritmo equilibrado",
      texto:
        "Técnica e comercial estão andando juntas, então o plano atual provavelmente faz sentido. O cuidado aqui é manter a cadência e não deixar o CRL ficar para trás no próximo ciclo de desenvolvimento.",
      tom: "ok" as const,
    };
  if (descompasso <= 3)
    return {
      titulo: "Descompasso em formação",
      texto:
        "A tecnologia começou a correr na frente do negócio. Este é o momento mais barato para corrigir: antes de subir mais um nível técnico, vale usar as próximas semanas para fechar as lacunas comerciais que apareceram acima.",
      tom: "atencao" as const,
    };
  return {
    titulo: "Tecnologia órfã",
    texto:
      "Tecnicamente pronta e comercialmente não comprovada. Nesse cenário, cada real investido em desenvolvimento técnico aumenta o valor parado em vez de reduzir risco. A prioridade passa a ser provar mercado.",
    tom: "critico" as const,
  };
}

export function Autodiagnostico() {
  const [respostas, setRespostas] = useState<Record<string, number>>({});
  const [trl, setTrl] = useState<number | null>(null);

  const completo =
    trl !== null && EIXOS.every((e) => respostas[e.id] !== undefined);

  const crl = completo
    ? Math.round(
        EIXOS.reduce((acc, e) => acc + respostas[e.id], 0) / EIXOS.length,
      )
    : null;

  const descompasso = completo ? Math.max(0, trl! - crl!) : null;
  const v = descompasso !== null ? veredito(descompasso) : null;

  const eixoMaisAtrasado = completo
    ? EIXOS.reduce((min, e) =>
        respostas[e.id] < respostas[min.id] ? e : min,
      )
    : null;

  const reset = () => {
    setRespostas({});
    setTrl(null);
  };

  return (
    <section id="autodiagnostico" className="py-20 lg:py-28 scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
            Autodiagnóstico · 2 minutos
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-4">
            Onde a sua tecnologia está na matriz?
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Uma pergunta por eixo. O resultado é uma estimativa, suficiente para você
            enxergar o descompasso e decidir o próximo passo.
          </p>
        </div>

        {/* TRL */}
        <div className="mb-8 p-6 bg-surface/50 border border-stroke/50 rounded-2xl">
          <h3 className="font-display font-semibold text-lg text-text mb-1">
            Primeiro: em que TRL você está?
          </h3>
          <p className="text-sm text-text-muted mb-4">
            Se você já submeteu projeto de fomento, provavelmente já respondeu isso.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {Array.from({ length: 9 }).map((_, i) => {
              const n = i + 1;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setTrl(n)}
                  className={`w-11 h-11 rounded-xl border font-mono text-sm transition-all duration-200 ${
                    trl === n
                      ? "bg-cta border-cta text-white"
                      : "bg-background/50 border-stroke/50 text-text-muted hover:border-cta/40"
                  }`}
                  aria-pressed={trl === n}
                  aria-label={`TRL ${n}`}
                >
                  {n}
                </button>
              );
            })}
          </div>
          {trl !== null ? (
            <div className="p-4 bg-cta/10 border border-cta/30 rounded-xl">
              <p className="text-xs font-mono uppercase tracking-wider text-cta mb-1">
                TRL {trl}
              </p>
              <p className="text-text leading-relaxed">{TRL_DEFINICOES[trl]}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-3">
              {TRL_BLOCOS.map((b) => (
                <div key={b.faixa} className="text-sm">
                  <span className="font-mono text-cta">{b.faixa}</span>
                  <span className="text-text-muted"> · {b.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Eixos do CRL */}
        <div className="space-y-6 mb-10">
          {EIXOS.map((eixo, i) => (
            <div
              key={eixo.id}
              className="p-6 bg-surface/50 border border-stroke/50 rounded-2xl"
            >
              <p className="text-xs font-mono uppercase tracking-wider text-cta mb-2">
                Eixo {i + 1} · {eixo.nome}
              </p>
              <h3 className="font-display font-semibold text-lg text-text mb-4">
                {eixo.pergunta}
              </h3>
              <div className="space-y-2">
                {eixo.opcoes.map((o) => {
                  const ativo = respostas[eixo.id] === o.nivel;
                  return (
                    <button
                      key={o.label}
                      type="button"
                      onClick={() => {
                        setRespostas((r) => ({ ...r, [eixo.id]: o.nivel }));
                        trackEvent("autodiagnostico_resposta", {
                          eixo: eixo.id,
                          nivel: o.nivel,
                        });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
                        ativo
                          ? "bg-cta/10 border-cta/50 text-text"
                          : "bg-background/40 border-stroke/40 text-text-muted hover:border-cta/30"
                      }`}
                      aria-pressed={ativo}
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Resultado */}
        {completo && v && (
          <div className="p-6 lg:p-8 bg-surface border border-cta/30 rounded-3xl card-glow">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              <MatrizTrlCrl trl={trl!} crl={crl!} className="w-full" />

              <div>
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                      TRL
                    </p>
                    <p
                      className="font-display font-bold text-3xl text-text"
                      title={TRL_DEFINICOES[trl!]}
                    >
                      {trl}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                      CRL
                    </p>
                    <p className="font-display font-bold text-3xl text-text">{crl}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                      Descompasso
                    </p>
                    <p
                      className={`font-display font-bold text-3xl ${
                        v.tom === "critico"
                          ? "text-highlight"
                          : v.tom === "atencao"
                            ? "text-text"
                            : "text-cta"
                      }`}
                    >
                      {descompasso}
                    </p>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-text mb-3">
                  {v.titulo}
                </h3>
                <p className="text-text-muted leading-relaxed mb-5">{v.texto}</p>

                {eixoMaisAtrasado && (
                  <div className="p-4 bg-background/50 border-l-2 border-cta rounded-r-xl">
                    <p className="text-sm text-text-muted mb-1">
                      Eixo mais atrasado
                    </p>
                    <p className="text-text font-medium">
                      {eixoMaisAtrasado.nome}
                    </p>
                    <p className="text-sm text-text-muted mt-2">
                      É aqui que o próximo investimento reduz mais incerteza por real
                      gasto, mesmo quando não é o que o time tem mais vontade de
                      fazer.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-stroke/50">
              <p className="text-text-muted leading-relaxed mb-5">
                Esta é uma leitura rápida, baseada na sua percepção. O Diagnóstico de
                Prontidão Comercial faz o mesmo exercício com evidências
                verificadas, aplicação por aplicação, e termina com um plano de
                experimentos. O veredito pode ser “não avance”.
              </p>
              <ContactOptions
                message={`Olá! Fiz o autodiagnóstico no site.\n\n*TRL ${trl}* — ${TRL_DEFINICOES[trl!]}\n*CRL ${crl}* · descompasso ${descompasso} (${v.titulo})\n*Eixo mais atrasado:* ${eixoMaisAtrasado?.nome}\n\nGostaria de conversar sobre o Diagnóstico de Prontidão Comercial.`}
                source="autodiagnostico"
              />
              <button
                type="button"
                onClick={reset}
                className="mt-5 inline-flex items-center gap-2 text-sm text-text-muted hover:text-cta transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Refazer
              </button>
            </div>
          </div>
        )}

        {!completo && (
          <p className="text-center text-text-muted">
            Responda o TRL e os cinco eixos para ver o resultado.
            <ArrowRight className="inline w-4 h-4 ml-1" />
          </p>
        )}
      </div>
    </section>
  );
}
