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

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority 0..1 */
  priority: number;
}

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "LaunchpadHub | Fomento e Mercado para Deep Techs",
    description:
      "Projetos FINEP, FAPESP e CNPq, curso de fomento e diagnóstico de prontidão comercial para tecnologias complexas. Mais de R$ 35 milhões aprovados desde 2012.",
    priority: 1.0,
  },
  {
    path: "/curso",
    title: "Curso de Fomento para Deeptechs | LaunchpadHub",
    description:
      "Aprenda a escolher editais e escrever projetos defensáveis com templates, checklists e método aplicado a FINEP, FAPESP, CNPq e FAPs estaduais.",
    priority: 0.9,
  },
  {
    path: "/servicos",
    title: "Consultoria para Deep Techs: Fomento e Mercado | LaunchpadHub",
    description:
      "Escrita e revisão de projetos de fomento, diagnóstico de prontidão comercial e due diligence técnico-comercial para deep techs e empresas industriais.",
    priority: 0.8,
  },
  {
    path: "/projetos",
    title: "Projetos FINEP, FAPESP e CNPq: Escrita e Revisão | LaunchpadHub",
    description:
      "Estruturação e revisão de projetos de fomento com decisão Go/No-Go, evidências, plano de trabalho, orçamento defensável e leitura com olhos de avaliador.",
    priority: 0.9,
  },
  {
    path: "/tecnologia",
    title: "Diagnóstico de Prontidão Comercial para Deep Techs | LaunchpadHub",
    description:
      "Em 30 dias, avalie TRL × CRL, priorize aplicações e defina os próximos experimentos para levar uma tecnologia industrial ao mercado.",
    priority: 0.9,
  },
  {
    path: "/lista",
    title: "Lista de pré-venda — Fomento para Deeptechs | LaunchpadHub",
    description:
      "Entre na lista de pré-venda do curso Fomento para Deeptechs e receba em primeira mão as condições de abertura.",
    priority: 0.5,
  },
];
