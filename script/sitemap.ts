/** Generates sitemap.xml and robots.txt into dist/public at build time. */

import { writeFile } from "fs/promises";
import path from "path";
import { ROUTES, SITE_URL } from "./routes-meta";

const DIST = path.resolve(import.meta.dirname, "..", "dist", "public");

async function run() {
  const today = new Date().toISOString().split("T")[0];

  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
  ).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  await writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf-8");
  await writeFile(path.join(DIST, "robots.txt"), robots, "utf-8");
  console.log("  wrote sitemap.xml and robots.txt");
}

run().catch((err) => {
  console.error("sitemap failed:", err);
  process.exit(1);
});
