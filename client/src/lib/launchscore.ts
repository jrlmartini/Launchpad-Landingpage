/**
 * Oferta avulsa do LaunchScore.
 *
 * Os checkouts pertencem exclusivamente a este produto e foram validados no
 * Asaas em 30/08/2026. Não reutilizar estes links em outras ofertas.
 */
export const LAUNCHSCORE = {
  VERSAO: "launchscore-fomento-2026-v03",
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
} as const;
