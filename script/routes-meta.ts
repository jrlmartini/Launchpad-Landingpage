/**
 * Per-route SEO metadata — single source of truth.
 *
 * Consumed by:
 *  - script/prerender.ts  → writes one HTML file per route at build time
 *  - script/sitemap.ts    → generates sitemap.xml
 *
 * SITE_URL drives canonicals and OG urls. Flip it to the LaunchpadHub domain
 * on the day the DNS migration goes live (see plan §1.3) — canonicals must
 * never point at a domain that isn't serving yet.
 */

export const SITE_URL = "https://deeptechs.com.br";

export const ORG_NAME = "LaunchpadHub";
export const PERSON_NAME = "José Renato Lanzi Martini";
export const WHATSAPP_E164 = "+55-19-3195-2808";
export const EMAIL = "contato@launchpadhub.com.br";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority 0..1 */
  priority: number;
  /** Breadcrumb label (omitted on home) */
  crumb?: string;
  /** Extra JSON-LD nodes specific to this route */
  schema?: (siteUrl: string) => Record<string, unknown>[];
}

/* ---------------- Shared JSON-LD nodes ---------------- */

export function organizationSchema(siteUrl: string) {
  return {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: ORG_NAME,
    url: `${siteUrl}/`,
    description:
      "Consultoria e educação em fomento à inovação e comercialização de tecnologias para deep techs e empresas industriais.",
    email: EMAIL,
    telephone: WHATSAPP_E164,
    areaServed: { "@type": "Country", name: "Brasil" },
    availableLanguage: "pt-BR",
    founder: { "@id": `${siteUrl}/#person` },
    knowsAbout: [
      "Fomento à inovação",
      "FINEP",
      "FAPESP PIPE",
      "CNPq",
      "Embrapii",
      "Comercialização de tecnologia",
      "Technology Readiness Level",
      "Commercial Readiness Level",
      "Deep tech",
    ],
  };
}

export function personSchema(siteUrl: string) {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: PERSON_NAME,
    jobTitle: "Engenheiro e consultor em fomento e comercialização de tecnologia",
    worksFor: { "@id": `${siteUrl}/#organization` },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "UNESP" },
      { "@type": "CollegeOrUniversity", name: "OTH Regensburg" },
      { "@type": "CollegeOrUniversity", name: "FGV" },
      { "@type": "CollegeOrUniversity", name: "HEC Paris" },
      { "@type": "CollegeOrUniversity", name: "MIT" },
    ],
    knowsAbout: [
      "Projetos de fomento à inovação",
      "Prontidão comercial de tecnologias",
      "Química industrial",
      "Tratamento de água",
      "Tecnologias ambientais",
    ],
  };
}

function service(
  siteUrl: string,
  id: string,
  name: string,
  description: string,
) {
  return {
    "@type": "Service",
    "@id": `${siteUrl}${id}`,
    name,
    description,
    serviceType: name,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "LaunchpadHub | Fomento e Mercado para Deep Techs",
    description:
      "Avaliação independente de tecnologias e startups, diagnóstico de prontidão comercial e projetos FINEP, FAPESP e CNPq para empresas industriais e deep techs.",
    priority: 1.0,
  },
  {
    path: "/curso",
    title: "Curso de Fomento para Deeptechs | LaunchpadHub",
    description:
      "Aprenda a escolher editais e escrever projetos defensáveis com templates, checklists e método aplicado a FINEP, FAPESP, CNPq e FAPs estaduais.",
    priority: 0.9,
    crumb: "Curso",
    schema: (siteUrl) => [
      {
        "@type": "Course",
        "@id": `${siteUrl}/curso#course`,
        name: "Fomento para Deeptechs",
        description:
          "Treinamento prático para escolher editais, escrever e defender projetos de fomento à inovação, com templates, planilhas e checklists aplicáveis a FINEP, FAPESP, CNPq, Embrapii e FAPs estaduais.",
        inLanguage: "pt-BR",
        provider: { "@id": `${siteUrl}/#organization` },
        educationalLevel: "Profissional",
        teaches: [
          "Escolha e enquadramento de editais de fomento",
          "Decisão Go/No-Go de aderência",
          "Narrativa técnica e evidências",
          "Plano de trabalho, cronograma e entregáveis",
          "Orçamento defensável e contrapartidas",
          "Governança e prestação de contas",
        ],
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: "PT10H",
          inLanguage: "pt-BR",
          instructor: { "@id": `${siteUrl}/#person` },
        },
      },
    ],
  },
  {
    path: "/servicos",
    title: "Consultoria para Deep Techs: Fomento e Mercado | LaunchpadHub",
    description:
      "Inteligência técnica sobre tecnologias de terceiros, prontidão comercial da sua tecnologia e projetos de fomento. Escolha pela decisão que precisa tomar.",
    priority: 0.8,
    crumb: "Serviços",
  },
  {
    path: "/projetos",
    title: "Projetos FINEP, FAPESP e CNPq: Escrita e Revisão | LaunchpadHub",
    description:
      "Estruturação e revisão de projetos de fomento com decisão Go/No-Go, evidências, plano de trabalho, orçamento defensável e leitura com olhos de avaliador.",
    priority: 0.9,
    crumb: "Projetos de fomento",
    schema: (siteUrl) => [
      service(
        siteUrl,
        "/projetos#escrita",
        "Escrita de Projeto de Fomento",
        "Escrita completa da proposta a quatro mãos, do enquadramento e da decisão Go/No-Go ao plano de trabalho, orçamento defensável e preparação para a defesa. Aplicável a FINEP, FAPESP, CNPq, Embrapii e FAPs estaduais.",
      ),
      service(
        siteUrl,
        "/projetos#revisao",
        "Revisão de Projeto de Fomento",
        "Revisão crítica da proposta com leitura de avaliador: lacunas, afirmações sem evidência, inconsistências entre plano e orçamento, com correções priorizadas por impacto e sessão de mentoria.",
      ),
    ],
  },
  {
    path: "/tecnologia",
    title: "Diagnóstico de Prontidão Comercial para Deep Techs | LaunchpadHub",
    description:
      "Em 30 dias, avalie TRL × CRL, priorize aplicações e defina os próximos experimentos para levar uma tecnologia industrial ao mercado.",
    priority: 0.9,
    crumb: "Tecnologia e mercado",
    schema: (siteUrl) => [
      service(
        siteUrl,
        "/tecnologia#diagnostico",
        "Diagnóstico de Prontidão Comercial",
        "Avaliação em 30 dias que cruza maturidade técnica (TRL) e comercial (CRL) de uma tecnologia industrial, com riscos ranqueados, aplicações priorizadas, tese de primeiro cliente e plano de experimentos de redução de incerteza.",
      ),
      service(
        siteUrl,
        "/tecnologia#rota",
        "Assessoria de Rota Comercial",
        "Estruturação da rota do laboratório ao mercado: aplicações priorizadas, desenho de piloto, mapa de parceiros, estratégia de fomento e roadmap de 12 meses com acompanhamento como conselheiro.",
      ),
    ],
  },
  {
    path: "/lista",
    title: "Lista de pré-venda — Fomento para Deeptechs | LaunchpadHub",
    description:
      "Entre na lista de pré-venda do curso Fomento para Deeptechs e receba em primeira mão as condições de abertura.",
    priority: 0.5,
    crumb: "Lista de pré-venda",
  },
  {
    path: "/inteligencia",
    title: "Avaliação Independente de Tecnologias e Startups | LaunchpadHub",
    description:
      "Technology Decision Sprint: avaliação independente em 10 dias úteis para decidir se uma tecnologia, startup, fornecedor ou rota merece o próximo compromisso de tempo, confidencialidade ou capital.",
    priority: 0.95,
    crumb: "Inteligência técnica",
    schema: (siteUrl) => [
      service(
        siteUrl,
        "/inteligencia#sprint",
        "Technology Decision Sprint",
        "Avaliação técnica e comercial independente, concluída em dez dias úteis, para decidir se uma tecnologia, startup, fornecedor ou rota deve avançar, ser aprofundada, aguardar ou parar. Entrega decision memo, evidence pack com rastreabilidade de fontes, dataset estruturado, sessão de revisão e action brief.",
      ),
      service(
        siteUrl,
        "/inteligencia#parecer",
        "Parecer Técnico-Comercial",
        "Due diligence de tecnologias para decisões de investimento: viabilidade técnica, prontidão comercial e riscos priorizados para fundos, CVCs e financiadores.",
      ),
    ],
  },
  {
    path: "/metodo",
    title: "Prontidão Comercial: a matriz TRL × CRL | LaunchpadHub",
    description:
      "O método para medir a maturidade comercial (CRL) de uma tecnologia e cruzá-la com o TRL. Cinco eixos, nove níveis e um autodiagnóstico gratuito para descobrir o descompasso da sua tecnologia.",
    priority: 0.9,
    crumb: "Método",
    schema: (siteUrl) => [
      {
        "@type": "Article",
        "@id": `${siteUrl}/metodo#article`,
        headline: "Prontidão Comercial: a matriz TRL × CRL",
        description:
          "Framework para avaliar maturidade comercial (Commercial Readiness Level) de tecnologias industriais em cinco eixos e nove níveis, cruzando com o TRL para identificar o descompasso entre desenvolvimento técnico e prova de mercado.",
        inLanguage: "pt-BR",
        author: { "@id": `${siteUrl}/#person` },
        publisher: { "@id": `${siteUrl}/#organization` },
        about: [
          "Commercial Readiness Level",
          "Technology Readiness Level",
          "Comercialização de tecnologia",
          "Deep tech",
        ],
      },
    ],
  },
  {
    path: "/triagem",
    title: "Triagem gratuita: qual é o seu próximo passo? | LaunchpadHub",
    description:
      "Responda cinco perguntas rápidas e descubra se o seu caso é curso, escrita de projeto, revisão, diagnóstico de prontidão comercial ou parecer técnico-comercial.",
    priority: 0.7,
    crumb: "Triagem",
  },
  {
    path: "/privacidade",
    title: "Política de Privacidade | LaunchpadHub",
    description:
      "Como o LaunchpadHub coleta, usa e protege dados pessoais, em conformidade com a LGPD.",
    priority: 0.3,
    crumb: "Política de Privacidade",
  },
];
