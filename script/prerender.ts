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
import path from "path";
import { ROUTES, SITE_URL } from "./routes-meta";

const DIST = path.resolve(import.meta.dirname, "..", "dist", "public");

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function run() {
  const template = await readFile(path.join(DIST, "index.html"), "utf-8");

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

    // Canonical — inserted before </head>
    html = html.replace(
      "</head>",
      `  <link rel="canonical" href="${url}" />\n  </head>`,
    );

    const outDir =
      route.path === "/" ? DIST : path.join(DIST, route.path.replace(/^\//, ""));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html, "utf-8");
    console.log(`  prerendered ${route.path} → ${path.relative(DIST, path.join(outDir, "index.html"))}`);
  }
}

run().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
