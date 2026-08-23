/**
 * Launch Lab RHAE IA 2026
 *
 * A rota permanece fora do catálogo, da navegação e do sitemap até o Founder
 * QA. O checkout usa o produto Hotmart específico desta edição; nunca
 * reutilizar a configuração de outro treinamento.
 */

export const LAUNCH_LAB = {
  VERSAO: "launch-lab-rhae-ia-2026-v01",
  PUBLICADA: false,
  slug: "/treinamentos/launch-lab-rhae-ia-2026",
  nome: "Launch Lab | RHAE IA 2026",
  formato: {
    duracao: "4 semanas",
    encontros: "8 encontros ao vivo",
    frequencia: "2 encontros por semana",
    dinamica: "Workshop + clínica + construção",
  },
  oferta: {
    precoLive: 497,
    precoRegular: 697,
    moeda: "BRL",
  },
  hotmart: {
    checkoutUrl: "https://pay.hotmart.com/J107289464X?checkoutMode=2",
    embedUrl: "https://pay.hotmart.com/J107289464X?checkoutMode=2",
  },
} as const;

export const PILARES = [
  {
    nome: "Workshop",
    descricao:
      "Blocos curtos de conteúdo para tomar decisões e aplicar o aprendizado imediatamente ao projeto.",
  },
  {
    nome: "Clínica",
    descricao:
      "Projetos reais são discutidos para testar hipóteses, identificar inconsistências e melhorar decisões.",
  },
  {
    nome: "LaunchScore",
    descricao:
      "Um diagnóstico individual de prontidão identifica alertas, fragilidades e prioridades antes da submissão.",
  },
] as const;

export const SEMANAS = [
  {
    numero: "01",
    titulo: "Escolha do projeto certo",
    descricao:
      "Definição da oportunidade, elegibilidade, problema, solução, inovação, aplicação, mercado e resultado esperado.",
    encontros: ["Aula 1.1 — Tese do projeto", "Aula 1.2 — Mapeamento de oportunidades de IA"],
    entregas: ["Tese do projeto", "Mapa de oportunidades e tese de IA"],
  },
  {
    numero: "02",
    titulo: "Da tese ao projeto",
    descricao:
      "Aderência ao edital, PBIA e NIB, seguida da definição de objetivos, metas, indicadores, entregáveis e critérios de sucesso.",
    encontros: ["Aula 2.1 — Enquadramento estratégico", "Aula 2.2 — Arquitetura do projeto"],
    entregas: ["Matriz de enquadramento", "Mapa de objetivos, metas e indicadores"],
  },
  {
    numero: "03",
    titulo: "Construção da proposta competitiva",
    descricao:
      "Metodologia, experimentos, validação, cronograma e riscos, com argumentação de viabilidade, inovação, mercado e impacto.",
    encontros: ["Aula 3.1 — Metodologia e plano de execução", "Aula 3.2 — Clínica de inovação, negócio e impacto"],
    entregas: ["Plano de execução", "Caso de inovação, viabilidade e impacto"],
  },
  {
    numero: "04",
    titulo: "Revisão e finalização da proposta",
    descricao:
      "Equipe, bolsas, parceiros, governança e contrapartida, seguidos pelo diagnóstico de prontidão e pela clínica final da proposta.",
    encontros: ["Aula 4.1 — Equipe, bolsas e governança", "Aula 4.2 — Clínica final da proposta"],
    entregas: ["Plano de equipe, bolsas e governança", "Checklist de submissão", "LaunchScore Report"],
  },
] as const;

export const ENTREGAVEIS = [
  "Caderno de construção do projeto",
  "Proposta estruturada no modelo do CNPq",
  "Checklist de submissão",
  "LaunchScore Report",
] as const;

export const PUBLICO_LAUNCH_LAB = [
  "fundadores de startups e sócios de pequenas empresas",
  "gestores de inovação e de P&D",
  "engenheiros, pesquisadores e líderes técnicos ligados a empresas",
  "responsáveis pela submissão de projetos de inovação",
] as const;

export const INCLUIDO = [
  "8 encontros online e ao vivo",
  "4 semanas de programa",
  "workshops e clínicas coletivas",
  "modelos, ferramentas e checklists",
  "gravações e materiais",
  "comunidade fechada da turma",
  "uma rodada individual do LaunchScore",
] as const;

export const NAO_INCLUIDO = [
  "redação integral da proposta pela Launchpad",
  "revisão humana individual linha a linha",
  "consultoria individual ilimitada",
  "submissão realizada pela Launchpad",
  "garantia de nota, aprovação ou obtenção dos recursos",
] as const;

export const FAQ_LAUNCH_LAB = [
  {
    pergunta: "Preciso chegar com a proposta pronta?",
    resposta:
      "Não. O participante ideal possui uma empresa potencialmente elegível, uma ideia de projeto e disponibilidade para trabalhar nela durante as quatro semanas.",
  },
  {
    pergunta: "Os encontros são ao vivo?",
    resposta:
      "Sim. São oito encontros online e ao vivo, distribuídos em quatro semanas. As gravações e os materiais ficam disponíveis para a turma.",
  },
  {
    pergunta: "A Launchpad escreverá a proposta por mim?",
    resposta:
      "Não. O programa fornece método, ferramentas, clínicas coletivas e um diagnóstico de prontidão. O participante continua responsável pela redação, pelas informações e pela submissão da proposta.",
  },
  {
    pergunta: "O LaunchScore prevê a aprovação?",
    resposta:
      "Não. O LaunchScore é um diagnóstico de prontidão produzido a partir de uma versão da proposta. Ele considera os critérios e pesos oficiais, requisitos formais, coerência interna e padrões observados na base histórica de projetos aprovados disponível à Launchpad. O resultado não corresponde à nota do CNPq nem representa probabilidade de aprovação.",
  },
  {
    pergunta: "O programa serve para projetos fora de software?",
    resposta:
      "Sim. O trabalho inclui aplicações de IA em produtos físicos, processos, experimentação, visão computacional, otimização, manufatura e outros contextos compatíveis com a chamada.",
  },
  {
    pergunta: "Qual é a condição apresentada na live?",
    resposta:
      "A condição de lançamento é R$ 497. Depois da live, o valor passa a R$ 697.",
  },
] as const;
