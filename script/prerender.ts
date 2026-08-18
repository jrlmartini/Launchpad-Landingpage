/**
 * Post-build step: writes one HTML file per route with its own title,
 * description, canonical and Open Graph tags.
 *
 * Why this and not react-helmet: crawlers that generate link previews
 * (WhatsApp, LinkedIn, Slack, Telegram) read the raw HTML and do NOT execute
 * JavaScript. Client-side meta injection is invisible to them. Since this site
 * is fully static, emitting real HTML per route is both simpler and correct.
 *
 * Vercel serves /projetos/index.html for /projetos before applying the SPA
 * rewrite, so these files take precedence automatically.
 */

import { readFile, writeFile, mkdir } from "fs/promises";
import { pathToFileURL } from "url";
import path from "path";
import {
  ROUTES,
  SITE_URL,
  ORG_NAME,
  organizationSchema,
  personSchema,
  type RouteMeta,
} from "./routes-meta";

const DIST = path.resolve(import.meta.dirname, "..", "dist", "public");

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Builds the JSON-LD @graph for a route: site + organization + person are
 * present everywhere (so any entry page can establish entity identity),
 * plus breadcrumbs and any route-specific nodes.
 */
function buildSchema(route: RouteMeta): string {
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: ORG_NAME,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    organizationSchema(SITE_URL),
    personSchema(SITE_URL),
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: route.title,
      description: route.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  if (route.crumb) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: `${SITE_URL}/`,
        },
        { "@type": "ListItem", position: 2, name: route.crumb, item: url },
      ],
    });
  }

  if (route.schema) graph.push(...route.schema(SITE_URL));

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

async function run() {
  const template = await readFile(path.join(DIST, "index.html"), "utf-8");

  // O molde precisa vir limpo do `vite build`. Este script sobrescreve o
  // próprio index.html com a home renderizada, então rodá-lo duas vezes sem
  // rebuild faria todas as rotas herdarem o conteúdo da home. Falhar aqui é
  // melhor do que publicar dez páginas com o texto errado.
  if (!template.includes('<div id="root"></div>')) {
    throw new Error(
      "dist/public/index.html já contém markup em #root. Rode `vite build` antes de `prerender`.",
    );
  }

  // Renderizador estático produzido por `vite build --ssr`. Importado em tempo
  // de execução porque só existe depois do build do bundle de servidor.
  const { render } = (await import(
    pathToFileURL(path.resolve(import.meta.dirname, "..", "dist", "server", "entry-server.js")).href
  )) as { render: (url: string) => string };

  for (const route of ROUTES) {
    const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
    const title = escapeHtml(route.title);
    const description = escapeHtml(route.description);

    let html = template;

    // Title
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

    // Meta description
    html = html.replace(
      /<meta name="description" content="[\s\S]*?"\s*\/?>/,
      `<meta name="description" content="${description}" />`,
    );

    // Open Graph + Twitter
    html = html.replace(
      /<meta property="og:title" content="[\s\S]*?"\s*\/?>/,
      `<meta property="og:title" content="${title}" />`,
    );
    html = html.replace(
      /<meta property="og:description" content="[\s\S]*?"\s*\/?>/,
      `<meta property="og:description" content="${description}" />`,
    );
    html = html.replace(
      /<meta property="og:url" content="[\s\S]*?"\s*\/?>/,
      `<meta property="og:url" content="${url}" />`,
    );
    html = html.replace(
      /<meta name="twitter:title" content="[\s\S]*?"\s*\/?>/,
      `<meta name="twitter:title" content="${title}" />`,
    );
    html = html.replace(
      /<meta name="twitter:description" content="[\s\S]*?"\s*\/?>/,
      `<meta name="twitter:description" content="${description}" />`,
    );

    // Canonical + JSON-LD — inserted before </head> so crawlers see them in raw HTML
    const jsonLd = buildSchema(route).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      `  <link rel="canonical" href="${url}" />\n` +
        `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`,
    );

    // Conteúdo renderizado no build. Sem isto o <body> entregue ao crawler
    // fica vazio e só o Google, que executa JS, consegue ler a página.
    const appHtml = render(route.path);
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );

    const outDir =
      route.path === "/" ? DIST : path.join(DIST, route.path.replace(/^\//, ""));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html, "utf-8");
    console.log(`  prerendered ${route.path} → ${path.relative(DIST, path.join(outDir, "index.html"))}`);
  }

  // 404.html — servido pelo Vercel em qualquer rota inexistente, preservando o
  // status 404. Sem ele o visitante cai na tela de erro padrão, sem marca e sem
  // caminho de volta. `noindex` porque a página não deve entrar no índice.
  let notFound = template;
  notFound = notFound.replace(
    /<title>[\s\S]*?<\/title>/,
    "<title>Página não encontrada | LaunchpadHub</title>",
  );
  notFound = notFound.replace(
    /<meta name="description" content="[\s\S]*?"\s*\/?>/,
    '<meta name="description" content="A página que você procura não existe. Veja os caminhos disponíveis no site do LaunchpadHub." />',
  );
  notFound = notFound.replace(
    "</head>",
    '  <meta name="robots" content="noindex, follow" />\n  </head>',
  );
  notFound = notFound.replace(
    '<div id="root"></div>',
    `<div id="root">${render("/404-nao-existe")}</div>`,
  );
  await writeFile(path.join(DIST, "404.html"), notFound, "utf-8");
  console.log("  prerendered 404 → 404.html");
}

run().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
