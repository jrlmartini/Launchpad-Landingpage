import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Redirecionamento para o grupo Fomento para Deep Techs.
 *
 * O link do grupo NÃO entra no repositório: este projeto é público, e o que
 * vai para o código fica no histórico de commits para sempre. Ele vive apenas
 * como variável de ambiente no Vercel (WHATSAPP_GROUP_URL) e nunca é entregue
 * ao navegador como texto — só como destino de um 302.
 *
 * É um grupo permanente, não um grupo de evento: o convite não será
 * rotacionado depois da live, o que torna a aprovação manual de participantes
 * no WhatsApp a única barreira duradoura.
 *
 * Isso resolve as duas formas baratas de coleta: rastreador que lê HTML e
 * raspagem do bundle JavaScript. Não resolve alguém que abra a página de
 * confirmação e siga o redirecionamento. Para isso existe o controle do lado
 * do WhatsApp: exigir aprovação de novos participantes.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  const destino = process.env.WHATSAPP_GROUP_URL;

  // Nunca cachear: o CDN guardaria o 302 e o link vazaria pelo cache
  // compartilhado, além de congelar um convite que pode ser rotacionado.
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  res.setHeader("Referrer-Policy", "no-referrer");

  if (!destino) {
    res.status(404).json({ erro: "grupo_nao_configurado" });
    return;
  }

  // Só aceita convite do WhatsApp, para a variável não virar redirecionador
  // aberto caso alguém troque o valor por engano.
  if (!/^https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+$/.test(destino)) {
    res.status(500).json({ erro: "destino_invalido" });
    return;
  }

  res.redirect(302, destino);
}
