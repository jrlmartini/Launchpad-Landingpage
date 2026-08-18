/** Generates sitemap.xml and robots.txt into dist/public at build time. */

import { writeFile } from "fs/promises";
import { existsSync, readFileSync } from "fs";
import { execFileSync } from "child_process";
import path from "path";
import { ROUTES, SITE_URL } from "./routes-meta";

const DIST = path.resolve(import.meta.dirname, "..", "dist", "public");
const SRC = path.resolve(import.meta.dirname, "..", "client", "src");

/**
 * Componentes presentes em toda página. Se entrassem na conta, qualquer mexida
 * no menu marcaria as dez rotas como atualizadas no mesmo dia, que é o que
 * torna o lastmod inútil.
 */
const CHROME = [
  path.join(SRC, "components", "landing", "Navbar.tsx"),
  path.join(SRC, "components", "landing", "Footer.tsx"),
];

const isChrome = (f: string) =>
  CHROME.includes(f) || f.startsWith(path.join(SRC, "components", "ui") + path.sep);

/** Resolve um import para um arquivo real dentro de client/src. */
function resolveImport(spec: string, fromFile: string): string | null {
  let base: string;
  if (spec.startsWith("@/")) base = path.join(SRC, spec.slice(2));
  else if (spec.startsWith(".")) base = path.resolve(path.dirname(fromFile), spec);
  else return null; // pacote externo

  for (const cand of [
    base,
    `${base}.tsx`,
    `${base}.ts`,
    path.join(base, "index.tsx"),
    path.join(base, "index.ts"),
  ]) {
    if (existsSync(cand) && !cand.endsWith(path.sep)) {
      try {
        if (readFileSync(cand)) return cand;
      } catch {
        /* diretório */
      }
    }
  }
  return null;
}

/** Todos os arquivos de conteúdo que compõem uma página. */
function filesForPage(entry: string): string[] {
  const seen = new Set<string>();
  const queue = [entry];

  while (queue.length) {
    const file = queue.pop()!;
    if (seen.has(file) || isChrome(file)) continue;
    seen.add(file);

    let source: string;
    try {
      source = readFileSync(file, "utf-8");
    } catch {
      continue;
    }

    for (const m of source.matchAll(/from\s+["']([^"']+)["']/g)) {
      const resolved = resolveImport(m[1], file);
      if (resolved) queue.push(resolved);
    }
  }
  return [...seen];
}

/**
 * O histórico precisa ser completo para o lastmod significar alguma coisa.
 *
 * Em clone raso (o padrão de vários CIs, incluindo o Vercel) `git log` devolve
 * o commit do corte para qualquer arquivo, porque daquele ponto para trás não
 * existe história. O resultado seria a mesma data em todas as rotas, que é
 * exatamente o sinal falso que este script existe para eliminar.
 *
 * Tentamos aprofundar o clone; se não der, omitimos o lastmod. O Google
 * recomenda omitir quando não há como ser preciso, porque data errada faz o
 * campo inteiro ser desconsiderado.
 */
function hasUsableHistory(): boolean {
  const shallow = () => {
    try {
      return (
        execFileSync("git", ["rev-parse", "--is-shallow-repository"], {
          encoding: "utf-8",
          stdio: ["ignore", "pipe", "ignore"],
        }).trim() === "true"
      );
    } catch {
      return true; // sem git: trata como indisponível
    }
  };

  if (!shallow()) return true;

  try {
    execFileSync("git", ["fetch", "--unshallow", "--quiet"], {
      stdio: "ignore",
      timeout: 60_000,
    });
  } catch {
    /* sem credencial ou sem rede no build */
  }
  return !shallow();
}

/**
 * Data do commit mais recente que tocou qualquer arquivo da página.
 */
function lastModified(files: string[]): string | null {
  let newest: string | null = null;

  for (const file of files) {
    try {
      const out = execFileSync(
        "git",
        ["log", "-1", "--format=%cI", "--", path.relative(process.cwd(), file)],
        { encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] },
      ).trim();
      if (out && (!newest || out > newest)) newest = out;
    } catch {
      /* sem git ou arquivo sem histórico */
    }
  }
  return newest ? newest.split("T")[0] : null;
}

const PAGE_FILE: Record<string, string> = {
  "/": "home.tsx",
  "/curso": "curso.tsx",
  "/servicos": "servicos.tsx",
  "/projetos": "projetos.tsx",
  "/tecnologia": "tecnologia.tsx",
  "/lista": "lista.tsx",
  "/inteligencia": "inteligencia.tsx",
  "/metodo": "metodo.tsx",
  "/triagem": "triagem.tsx",
  "/privacidade": "privacidade.tsx",
};

async function run() {
  let semData = 0;
  const historico = hasUsableHistory();

  const urls = ROUTES.map((r) => {
    const pageFile = PAGE_FILE[r.path];
    const entry = pageFile ? path.join(SRC, "pages", pageFile) : null;
    const lastmod =
      historico && entry && existsSync(entry)
        ? lastModified(filesForPage(entry))
        : null;
    if (!lastmod) semData++;

    return `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>${
      lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""
    }
    <changefreq>monthly</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`;
  }).join("\n");

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
  console.log(
    `  wrote sitemap.xml and robots.txt` +
      (semData
        ? ` (${semData} rota(s) sem lastmod: histórico git ${
            historico ? "sem registro do arquivo" : "raso"
          })`
        : ""),
  );
}

run().catch((err) => {
  console.error("sitemap failed:", err);
  process.exit(1);
});
