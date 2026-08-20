import { readdirSync, readFileSync, existsSync } from "fs";
import path from "path";

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

export const SITE_URL = "https://www.deeptechs.com.br";

export const ORG_NAME = "LaunchpadHub";
export const PERSON_NAME = "José Renato Lanzi Martini";
export const WHATSAPP_E164 = "+55-19-3195-2808";
export const EMAIL = "contato@launchpad.tec.br";

/**
 * Perfis públicos usados em `sameAs`. Servem para o buscador desambiguar a
 * entidade e ligar o site ao histórico profissional. Só entram aqui URLs
 * verificadas: um `sameAs` apontando para 404 é sinal negativo.
 */
export const PROFILES = {
  /** Perfil pessoal. Peso alto para desambiguar a entidade em contexto B2B. */
  linkedin:
    "https://www.linkedin.com/in/jos%C3%A9-renato-lanzi-martini/",
  instagram: "https://www.instagram.com/launchpadhub/",
  /**
   * URL por ID do canal, e nao por @handle. O @handle pode ser trocado e o
   * proprio YouTube declara a URL de canal como canonica, entao apontar para
   * ela evita o mesmo descasamento de canonical que corrigimos no dominio.
   */
  youtube: "https://www.youtube.com/channel/UCIkisP_perLLXFTIL0RRUhg",
} as const;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority 0..1 */
  priority: number;
  /** Breadcrumb label (omitted on home) */
  crumb?: string;
  /** Nível intermediário da migalha, ex.: Artigos > Título do post */
  crumbParent?: { name: string; path: string };
  /** Título de Open Graph, quando precisa diferir do title. */
  ogTitle?: string;
  /** Descrição de Open Graph, quando precisa diferir da description. */
  ogDescription?: string;
  /** Fora do índice e do sitemap. Usado em páginas em Founder QA. */
  noindex?: boolean;
  /** Data de referência para o sitemap (artigos trazem do front-matter) */
  lastmod?: string;
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
    logo: `${siteUrl}/logo.webp`,
    image: `${siteUrl}/opengraph.jpg`,
    sameAs: [PROFILES.linkedin, PROFILES.instagram, PROFILES.youtube],
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
    jobTitle: "Tecnologista: avaliação de tecnologias, prontidão comercial e fomento à inovação",
    image: `${siteUrl}/jose-martini.webp`,
    worksFor: { "@id": `${siteUrl}/#organization` },
    sameAs: [PROFILES.linkedin, PROFILES.instagram],
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
      "Tecnologias sustentáveis e ambientais",
      "Avaliação de maturidade tecnológica",
      "Transição energética",
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

const PAGINAS_FIXAS: RouteMeta[] = [
  {
    path: "/",
    title: "Avaliação Independente de Tecnologias | LaunchpadHub",
    description:
      "Avaliação independente de tecnologias e startups, diagnóstico de prontidão comercial e projetos FINEP, FAPESP e CNPq para empresas industriais e deep techs.",
    priority: 1.0,
  },
  {
    path: "/treinamentos",
    title: "Treinamentos em fomento e inovação | LaunchpadHub",
    description:
      "Programas para internalizar a competência de captar recursos e levar tecnologia ao mercado. Método aplicado, com os templates usados nos projetos que conduzo.",
    priority: 0.9,
    crumb: "Treinamentos",
    schema: (siteUrl) => [
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/treinamentos#lista`,
        name: "Treinamentos LaunchpadHub",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@id": `${siteUrl}/curso#course` },
          },
        ],
      },
    ],
  },
  {
    path: "/curso",
    title: "Curso de Fomento para Deeptechs | LaunchpadHub",
    description:
      "Método para escolher editais e escrever projetos defensáveis, com templates e checklists aplicados a FINEP, FAPESP, CNPq e FAPs. Em pré-lançamento: entre na lista de espera.",
    priority: 0.8,
    crumb: "Fomento para Deeptechs",
    crumbParent: { name: "Treinamentos", path: "/treinamentos" },
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
        // Pré-lançamento: sem turma aberta. Declarar PreOrder evita prometer
        // matrícula que ainda não existe. Trocar para InStock no lançamento.
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          url: `${siteUrl}/lista`,
          category: "Pré-lançamento",
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
      "Technology Decision Sprint: avaliação independente em 10 dias úteis para decidir se uma tecnologia, startup, fornecedor ou rota merece o próximo compromisso de piloto, time técnico ou capital.",
    priority: 0.95,
    crumb: "Inteligência técnica",
    schema: (siteUrl) => [
      service(
        siteUrl,
        "/inteligencia#mapeamento",
        "Mapeamento Tecnológico",
        "Levantamento das rotas técnicas que competem para resolver um problema industrial, com maturidade estimada, mapa de players, startups, grupos de pesquisa e patentes indicativas, dataset estruturado para reuso interno e shortlist justificada dos candidatos que seguem para avaliação profunda.",
      ),
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


/* ------------------------------------------------------------------ */
/* Artigos                                                             */
/* ------------------------------------------------------------------ */

/**
 * As rotas dos artigos são derivadas de content/artigos/*.md no build, para
 * que prerender e sitemap não precisem de uma lista mantida à mão. Um arquivo
 * novo já nasce com HTML renderizado, schema e entrada no sitemap.
 */
interface ArtigoMeta {
  slug: string;
  titulo: string;
  resumo: string;
  publicado: string;
  atualizado?: string;
  tags: string[];
  imagem?: string;
}

function lerArtigos(): ArtigoMeta[] {
  const dir = path.resolve(import.meta.dirname, "..", "content", "artigos");
  if (!existsSync(dir)) return [];

  return readdirSync(dir)
    // `_` prefixa arquivos de trabalho e README.md é documentação da pasta:
    // nenhum dos dois é artigo.
    .filter((f) => f.endsWith(".md") && !f.startsWith("_") && f !== "README.md")
    .map((f) => {
      const raw = readFileSync(path.join(dir, f), "utf-8");
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const front: Record<string, string> = {};
      if (m) {
        for (const linha of m[1].split(/\r?\n/)) {
          const i = linha.indexOf(":");
          if (i > 0) {
            front[linha.slice(0, i).trim()] = linha
              .slice(i + 1)
              .trim()
              .replace(/^["']|["']$/g, "");
          }
        }
      }
      return {
        slug: front.slug || f.replace(/\.md$/, ""),
        titulo: front.titulo || f,
        resumo: front.resumo || "",
        publicado: front.publicado || "",
        atualizado: front.atualizado || undefined,
        tags: (front.tags || "")
          .replace(/^\[|\]$/g, "")
          .split(",")
          .map((t) => t.trim().replace(/^["']|["']$/g, ""))
          .filter(Boolean),
        imagem: front.imagem || undefined,
        rascunho: front.rascunho === "true",
      } as ArtigoMeta & { rascunho: boolean };
    })
    .filter((a) => !(a as ArtigoMeta & { rascunho: boolean }).rascunho)
    .sort((a, b) => b.publicado.localeCompare(a.publicado));
}

export const ARTIGOS_META = lerArtigos();

function artigoRoute(a: ArtigoMeta): RouteMeta {
  const url = `/artigos/${a.slug}`;
  return {
    path: url,
    title: `${a.titulo} | LaunchpadHub`,
    description: a.resumo,
    priority: 0.7,
    crumb: a.titulo,
    crumbParent: { name: "Artigos", path: "/artigos" },
    lastmod: a.atualizado || a.publicado,
    schema: (siteUrl) => [
      {
        "@type": "TechArticle",
        "@id": `${siteUrl}${url}#article`,
        headline: a.titulo,
        description: a.resumo,
        datePublished: a.publicado,
        dateModified: a.atualizado || a.publicado,
        inLanguage: "pt-BR",
        image: `${siteUrl}${a.imagem ?? "/opengraph.jpg"}`,
        author: { "@id": `${siteUrl}/#person` },
        publisher: { "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: { "@id": `${siteUrl}${url}#webpage` },
        ...(a.tags.length ? { keywords: a.tags.join(", ") } : {}),
      },
    ],
  };
}

/**
 * O índice de artigos só entra no site quando existe pelo menos um publicado.
 * Página de listagem vazia é conteúdo fino: atrapalha em vez de ajudar.
 */
const ROTAS_ARTIGOS: RouteMeta[] = ARTIGOS_META.length
  ? [
      {
        path: "/artigos",
        title: "Artigos: rotas técnicas avaliadas | LaunchpadHub",
        description:
          "Análises de rotas tecnológicas com evidência rastreada até a fonte, alternativas comparadas e lacunas declaradas. O mesmo método das avaliações contratadas.",
        priority: 0.8,
        crumb: "Artigos",
      },
      ...ARTIGOS_META.map(artigoRoute),
    ]
  : [];

/* ------------------------------------------------------------------ */
/* Campanhas                                                           */
/* ------------------------------------------------------------------ */

/**
 * A landing da live existe na URL desde já, para Founder QA, mas sai com
 * noindex e fora do sitemap enquanto `RHAE_PUBLICADA` for false. Isso mantém
 * a página fora de busca sem impedir a revisão no ambiente real.
 *
 * Espelha `PUBLICADA` em client/src/lib/rhae.ts. Trocar os dois juntos.
 */
const RHAE_PUBLICADA = true;

const ROTAS_CAMPANHA: RouteMeta[] = [
  {
    path: "/treinamentos/rhae-ia-2026",
    title: "Live gratuita RHAE IA 2026 | Launchpad",
    description:
      "Entenda quem pode participar do RHAE IA 2026, quais projetos se enquadram e como o CNPq avaliará as propostas. Live gratuita em 24 de agosto.",
    priority: 0.8,
    crumb: "RHAE IA 2026",
    crumbParent: { name: "Treinamentos", path: "/treinamentos" },
    noindex: !RHAE_PUBLICADA,
    ogTitle: "RHAE IA 2026: live gratuita sobre a chamada do CNPq",
    ogDescription:
      "Requisitos, enquadramento, bolsas e critérios de avaliação para empresas que estudam submeter um projeto de IA.",
    schema: (siteUrl) => [
      {
        "@type": "Event",
        "@id": `${siteUrl}/treinamentos/rhae-ia-2026#event`,
        name: "RHAE IA 2026: requisitos, enquadramento e avaliação da proposta",
        description:
          "Live gratuita sobre a Chamada Pública CNPq nº 29/2026: elegibilidade, enquadramento do projeto, bolsas, contrapartida e critérios de julgamento.",
        startDate: "2026-08-24T19:00:00-03:00",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        inLanguage: "pt-BR",
        location: {
          "@type": "VirtualLocation",
          url: `${siteUrl}/treinamentos/rhae-ia-2026`,
        },
        organizer: { "@id": `${siteUrl}/#organization` },
        performer: { "@id": `${siteUrl}/#person` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/treinamentos/rhae-ia-2026`,
        },
      },
    ],
  },
  {
    path: "/treinamentos/rhae-ia-2026/confirmacao",
    title: "Inscrição confirmada | Launchpad",
    description:
      "Sua inscrição na live RHAE IA 2026 foi confirmada. As informações de acesso serão enviadas pelos contatos informados.",
    priority: 0.1,
    crumb: "Inscrição confirmada",
    crumbParent: { name: "RHAE IA 2026", path: "/treinamentos/rhae-ia-2026" },
    // Página de confirmação nunca entra no índice: só faz sentido depois do envio.
    noindex: true,
  },
];

export const ROUTES: RouteMeta[] = [
  ...PAGINAS_FIXAS,
  ...ROTAS_ARTIGOS,
  ...ROTAS_CAMPANHA,
];
