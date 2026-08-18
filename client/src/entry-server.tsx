import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

/**
 * Entrada de renderização estática, usada só no build.
 *
 * O site é uma SPA: sem isto, o HTML entregue pelo servidor contém apenas o
 * <head> e uma div vazia. O Google renderiza JavaScript e acaba indexando, com
 * atraso de fila. Bing, agregadores e os crawlers de IA (GPTBot, ClaudeBot,
 * PerplexityBot) não executam JS e veem uma página em branco.
 *
 * `script/prerender.ts` chama esta função para cada rota e injeta o resultado
 * dentro de #root. O cliente então hidrata esse markup em vez de recriá-lo.
 *
 * `ssrPath` diz ao wouter qual rota renderizar, já que não existe
 * window.location durante o build.
 */
export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
}
