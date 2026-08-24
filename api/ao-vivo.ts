import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Endereço estável da transmissão.
 *
 * É este link que vai no convite de calendário e nos e-mails, nunca a URL da
 * plataforma. Evento já criado na agenda de terceiros não pode ser corrigido:
 * se a transmissão fosse gravada direto no .ics, definir a plataforma depois
 * ou trocá-la na véspera deixaria todo mundo com um link morto.
 *
 * O destino padrão é a transmissão oficial desta edição. LIVE_STREAM_URL pode
 * substituí-lo no Vercel se o endereço precisar mudar sem novo deploy.
 */

const TRANSMISSAO_OFICIAL = "https://www.youtube.com/live/a9JAFSIXFuQ";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const destino = process.env.LIVE_STREAM_URL || TRANSMISSAO_OFICIAL;

  // Sem cache: o link pode ser definido ou trocado a qualquer momento, e um
  // 302 guardado pelo CDN continuaria mandando para o lugar antigo.
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");

  if (!/^https:\/\//.test(destino)) {
    res.redirect(302, TRANSMISSAO_OFICIAL);
    return;
  }

  res.redirect(302, destino);
}
