import { marked } from "marked";

/**
 * Fonte dos artigos.
 *
 * Cada arquivo em content/artigos/*.md vira uma rota. O markdown é embutido no
 * bundle em tempo de build (import.meta.glob eager), então funciona igual no
 * servidor, durante o prerender, e no cliente, na navegação interna. Não há
 * busca em runtime nem CMS: publicar é adicionar um arquivo.
 *
 * O front-matter é lido por um parser mínimo próprio, em vez de gray-matter,
 * para não arrastar um interpretador de YAML inteiro para dentro do bundle.
 */

export interface Artigo {
  slug: string;
  titulo: string;
  /** Usada na meta description e no card do índice. Máximo recomendado: 155 caracteres. */
  resumo: string;
  /** ISO 8601, ex.: 2026-08-20 */
  publicado: string;
  /** Preenche apenas quando o conteúdo mudar de forma relevante. */
  atualizado?: string;
  tags: string[];
  /** Caminho da imagem em /public. Cai para a OG padrão se ausente. */
  imagem?: string;
  /** Rota da oferta para onde o artigo aponta no fim. */
  ofertaHref?: string;
  ofertaLabel?: string;
  /** Texto específico exibido no bloco da oferta. */
  ofertaTexto?: string;
  /** Quando ativo, remove contato e relacionados para preservar uma única ação. */
  ctaExclusivo?: boolean;
  /** Rascunhos não entram no índice, no sitemap nem no menu. */
  rascunho?: boolean;
  html: string;
  minutos: number;
}

type Front = Record<string, string | string[]>;

/** Parser de front-matter: pares `chave: valor` e listas `[a, b]`. */
function parseFrontMatter(raw: string): { front: Front; corpo: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { front: {}, corpo: raw };

  const front: Front = {};
  for (const linha of match[1].split(/\r?\n/)) {
    const sep = linha.indexOf(":");
    if (sep === -1) continue;
    const chave = linha.slice(0, sep).trim();
    let valor = linha.slice(sep + 1).trim();
    if (!chave) continue;

    if (valor.startsWith("[") && valor.endsWith("]")) {
      front[chave] = valor
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      front[chave] = valor.replace(/^["']|["']$/g, "");
    }
  }
  return { front, corpo: match[2] };
}

const str = (v: string | string[] | undefined): string =>
  typeof v === "string" ? v : "";

/** ~200 palavras por minuto, arredondado para cima, mínimo de 1. */
function tempoLeitura(texto: string): number {
  return Math.max(1, Math.ceil(texto.trim().split(/\s+/).length / 200));
}

marked.setOptions({ gfm: true, breaks: false });

// Caminho relativo, e não absoluto: a raiz do Vite é `client/`, então
// "/content/..." resolveria para client/content/ e não encontraria nada.
const arquivos = import.meta.glob("../../../content/artigos/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const todos: Artigo[] = Object.entries(arquivos)
  // `_` prefixa arquivos de trabalho e README.md documenta a pasta.
  .filter(([caminho]) => {
    const nome = caminho.split("/").pop()!;
    return !nome.startsWith("_") && nome !== "README.md";
  })
  .map(([caminho, raw]) => {
    const { front, corpo } = parseFrontMatter(raw);
    const slug =
      str(front.slug) || caminho.split("/").pop()!.replace(/\.md$/, "");

    return {
      slug,
      titulo: str(front.titulo) || slug,
      resumo: str(front.resumo),
      publicado: str(front.publicado),
      atualizado: str(front.atualizado) || undefined,
      tags: Array.isArray(front.tags) ? front.tags : [],
      imagem: str(front.imagem) || undefined,
      ofertaHref: str(front.ofertaHref) || undefined,
      ofertaLabel: str(front.ofertaLabel) || undefined,
      ofertaTexto: str(front.ofertaTexto) || undefined,
      ctaExclusivo: str(front.ctaExclusivo) === "true",
      rascunho: str(front.rascunho) === "true",
      html: marked.parse(corpo) as string,
      minutos: tempoLeitura(corpo),
    };
  })
  .sort((a, b) => b.publicado.localeCompare(a.publicado));

/** Artigos publicados, do mais recente para o mais antigo. */
export const ARTIGOS: Artigo[] = todos.filter((a) => !a.rascunho);

export const temArtigos = ARTIGOS.length > 0;

export function getArtigo(slug: string): Artigo | undefined {
  return ARTIGOS.find((a) => a.slug === slug);
}

export function formatarData(iso: string): string {
  if (!iso) return "";
  const [ano, mes, dia] = iso.split("-").map(Number);
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  return `${dia} de ${meses[mes - 1]} de ${ano}`;
}
