/**
 * Configuração da live RHAE IA 2026.
 *
 * Tudo que depende de aprovação do fundador está reunido aqui. Enquanto
 * `PUBLICADA` for false, a página existe na URL mas sai com noindex, fica fora
 * do sitemap e não aparece em nenhum menu. É o portão de Founder QA previsto
 * no PRD.
 *
 * Fonte normativa dos números: Chamada Pública CNPq nº 29/2026.
 */

export const RHAE = {
  /** Trocar para true só depois do QA dos itens marcados como PENDENTE. */
  PUBLICADA: false,

  /** Versão da página, enviada ao formulário para rastreabilidade. */
  VERSAO: "rhae-ia-2026-v1",

  slug: "/treinamentos/rhae-ia-2026",
  confirmacao: "/treinamentos/rhae-ia-2026/confirmacao",

  evento: {
    nome: "RHAE IA 2026: requisitos, enquadramento e avaliação da proposta",
    dataISO: "2026-08-24",
    dataExtenso: "24 de agosto de 2026",
    horario: "19h (Brasília)",
    /** Usado no schema Event. Brasília em agosto é UTC-3, sem horário de verão. */
    inicioISO: "2026-08-24T19:00:00-03:00",
    formato: "Online",
    preco: "Gratuita",
  },

  /** Formulário Tally. Os campos ocultos são anexados como query string. */
  formulario: {
    embedBase: "https://tally.so/embed/44lzEd",
    params: "alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  },

  /** PENDENTE — fundador. Sem isso o CTA da confirmação não aparece. */
  calendarioUrl: "",
  /**
   * Caminho interno, não o convite. O link real fica na variável de ambiente
   * WHATSAPP_GROUP_URL no Vercel e nunca chega ao navegador como texto.
   * Vazio desliga o CTA.
   */
  grupoWhatsappUrl: "/api/grupo",

  privacidadeUrl: "/privacidade",

  /** PENDENTE — fundador. Entre 45 e 70 palavras, sem currículo extenso. */
  bio: "",

  edital: {
    chamada: "Chamada Pública CNPq nº 29/2026",
    prazo: "9 de outubro de 2026, às 23h59 (horário de Brasília)",
    paginaOficial:
      "https://www.gov.br/cnpq/pt-br/chamadas/todas-as-chamadas/chamadas-2026/chamada-no-29-2026/chamada-publica-cnpq-N-29-2026",
    pdf: "https://www.gov.br/cnpq/pt-br/chamadas/todas-as-chamadas/chamadas-2026/chamada-no-29-2026/chamadapublica29_2026_RHAEIA_2769274.pdf",
  },
} as const;

/** Rótulo único de conversão, repetido em todos os CTAs. */
export const CTA_LABEL = "Inscrever-se gratuitamente";

export const NUMEROS = [
  { valor: "R$ 50 milhões", legenda: "Recursos globais previstos na chamada", fonte: "item 7.1" },
  { valor: "Até R$ 300 mil", legenda: "Bolsas de fomento tecnológico por proposta", fonte: "item 8.1.1" },
  { valor: "Até 30 meses", legenda: "Duração do projeto", fonte: "item 12.6" },
  { valor: "09/10/2026", legenda: "Data-limite para submissão", fonte: "itens 5 e 9.2" },
];

export const CRITERIOS = [
  { nome: "Clareza, objetividade e aderência aos objetivos da chamada", peso: 2 },
  { nome: "Aderência à IA e ao Eixo 4 do PBIA", peso: 5 },
  { nome: "Aderência a uma ou mais missões da NIB", peso: 4 },
  { nome: "Viabilidade técnica, econômica e mercadológica", peso: 3 },
  { nome: "Inovação, impacto e aderência à Enimpacto", peso: 3 },
  { nome: "Perfil da equipe e das bolsas solicitadas", peso: 1 },
  { nome: "Adequação dos arranjos cooperativos", peso: 1 },
  { nome: "Empresa liderada por mulher", peso: 1 },
];

export const CONTEUDO = [
  { titulo: "Oportunidade e objetivo da chamada", desc: "Recursos disponíveis, duração dos projetos e finalidade do RHAE IA." },
  { titulo: "Elegibilidade", desc: "Requisitos da empresa executora, do coordenador, da equipe e dos bolsistas." },
  { titulo: "Enquadramento do projeto", desc: "Aderência à inteligência artificial, ao Eixo 4 do Plano Brasileiro de Inteligência Artificial e às missões da Nova Indústria Brasil." },
  { titulo: "Bolsas e contrapartida", desc: "Modalidades financiáveis, exigência de bolsa SET, limite por proposta, contrapartida e despesas que permanecem com a empresa." },
  { titulo: "Estrutura da proposta", desc: "Informações exigidas, Modelo Estruturado de Projeto e coerência entre problema, objetivos, atividades, equipe, metas e resultados." },
  { titulo: "Critérios de julgamento", desc: "Pesos, prioridades e pontos que orientam a análise de mérito." },
  { titulo: "Perguntas ao vivo", desc: "Espaço para dúvidas sobre a chamada e a leitura de seus requisitos." },
];

export const PUBLICO = [
  "desenvolve um produto ou processo baseado em inteligência artificial",
  "pretende incorporar IA a um produto ou processo empresarial",
  "precisa ampliar a equipe de PD&I com pesquisadores ou profissionais especializados",
  "ainda está avaliando se a empresa e o projeto atendem à chamada",
  "já decidiu submeter uma proposta e quer compreender a lógica de avaliação",
];

export const VERIFICACOES = [
  "se atende aos critérios de empresa executora previstos no edital",
  "se o coordenador possui vínculo formal com a empresa e currículo Lattes atualizado",
  "se o projeto adota ou desenvolve IA para inovação empresarial e se alinha a uma missão da NIB",
  "se a empresa consegue assumir a contrapartida e as despesas não cobertas pelas bolsas",
];

export const FAQ = [
  { p: "A live é gratuita?", r: "Sim. A participação ao vivo é gratuita mediante inscrição." },
  { p: "Preciso ter um projeto definido?", r: "Não. A live também é indicada para quem está verificando se possui uma oportunidade compatível com a chamada." },
  { p: "Preciso ser pesquisador?", r: "Não necessariamente. O edital estabelece requisitos específicos para o coordenador, a empresa executora, a equipe e os bolsistas. Esses requisitos serão explicados durante a live." },
  { p: "Qualquer empresa pode participar da chamada?", r: "Não. O edital prevê a participação de empresas privadas com fins lucrativos, constituídas no Brasil, com sede e administração no país, enquadradas como microempresas, pequenas empresas ou startups nos termos indicados pela chamada." },
  { p: "Quanto pode ser solicitado?", r: "Cada proposta pode solicitar até R$ 300 mil em bolsas de fomento tecnológico nas modalidades previstas no edital." },
  { p: "A empresa precisa oferecer contrapartida?", r: "Sim. A proposta deve prever contrapartida mínima de 20% do valor solicitado em bolsas. Ela pode ser financeira ou não financeira, desde que seja necessária ao projeto, mensurável e demonstrável." },
  { p: "Poderei enviar perguntas?", r: "Sim. Haverá um espaço para perguntas durante a transmissão." },
  { p: "A live será gravada?", r: "Sim, a transmissão será gravada. As condições de acesso à gravação serão informadas posteriormente." },
];

/** Linha de data usada no hero e no CTA final. Omite o horário se pendente. */
export function linhaEvento(comFormato = true): string {
  const { dataExtenso, horario, formato, preco } = RHAE.evento;
  return [
    dataExtenso.toUpperCase(),
    horario ? horario.toUpperCase() : null,
    comFormato ? formato.toUpperCase() : null,
    comFormato ? preco.toUpperCase() : null,
  ]
    .filter(Boolean)
    .join(" · ");
}
