/**
 * Oferta avulsa do LaunchScore.
 *
 * Os checkouts pertencem exclusivamente a este produto e foram validados no
 * Asaas em 30/08/2026. Não reutilizar estes links em outras ofertas.
 */
export const LAUNCHSCORE = {
  VERSAO: "launchscore-methodology-v0.1-site-v05",
  nome: "LaunchScore",
  preco: 329,
  moeda: "BRL",
  pagamentos: {
    pix: {
      url: "https://www.asaas.com/c/vsjtu5e0qwc2pgj4",
      label: "Pix à vista",
      detalhe: "R$ 329,00",
    },
    cartao: {
      url: "https://www.asaas.com/c/qhcn7sc4047e7sz3",
      label: "Cartão de crédito",
      detalhe: "Até 10x de R$ 32,90 sem juros",
      parcelas: 10,
    },
  },
  mentoria: {
    nome: "LaunchScore + 1h de mentoria",
    preco: 697,
    status: "em breve",
    descricao:
      "Relatório LaunchScore e uma sessão individual de uma hora para discutir os ajustes prioritários da proposta.",
  },
} as const;
