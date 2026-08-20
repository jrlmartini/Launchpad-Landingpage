import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Convite de calendário (.ics) para a live RHAE IA 2026.
 *
 * Escolhemos .ics em vez do link do Google Agenda porque o link do Google só
 * atende quem usa Google. O .ics é aceito por Google, Apple e Outlook com o
 * mesmo botão, e o público desta live é corporativo.
 *
 * O endereço de acesso gravado no evento é a rota estável /ao-vivo, nunca a
 * URL da transmissão. Quem adicionar o evento hoje continua com um link que
 * funciona mesmo que a plataforma seja definida depois ou trocada na véspera.
 * Evento já criado na agenda de terceiros não tem como ser corrigido.
 */

const SITE = "https://www.deeptechs.com.br";
const PAGINA = `${SITE}/treinamentos/rhae-ia-2026`;
const AO_VIVO = `${PAGINA}/ao-vivo`;

/** 19h de Brasília (UTC-3) = 22h UTC. Duração de 1h30. */
const INICIO_UTC = "20260824T220000Z";
const FIM_UTC = "20260824T233000Z";

/** Quebra em 75 octetos, como manda o RFC 5545. Outlook rejeita linhas longas. */
function dobrar(linha: string): string {
  if (linha.length <= 75) return linha;
  const partes: string[] = [linha.slice(0, 75)];
  let resto = linha.slice(75);
  while (resto.length > 74) {
    partes.push(" " + resto.slice(0, 74));
    resto = resto.slice(74);
  }
  if (resto) partes.push(" " + resto);
  return partes.join("\r\n");
}

/** Escapa os caracteres com significado próprio no formato. */
const esc = (v: string) =>
  v.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

export default function handler(req: VercelRequest, res: VercelResponse) {
  const descricao = [
    "Live gratuita sobre a Chamada Publica CNPq no 29/2026 (RHAE IA 2026).",
    "",
    "Vamos tratar de elegibilidade da empresa e do coordenador, enquadramento do projeto, bolsas e contrapartida, estrutura da proposta e criterios de julgamento.",
    "",
    `Acesso a transmissao: ${AO_VIVO}`,
    `Pagina do evento: ${PAGINA}`,
    "",
    "O conteudo tem carater informativo e nao substitui a leitura integral do edital.",
  ].join("\n");

  const linhas = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//LaunchpadHub//RHAE IA 2026//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    // UID estável: adicionar duas vezes atualiza em vez de duplicar.
    "UID:rhae-ia-2026@deeptechs.com.br",
    `DTSTAMP:${INICIO_UTC}`,
    `DTSTART:${INICIO_UTC}`,
    `DTEND:${FIM_UTC}`,
    dobrar(
      `SUMMARY:${esc("Live RHAE IA 2026: requisitos, enquadramento e avaliacao da proposta")}`,
    ),
    dobrar(`DESCRIPTION:${esc(descricao)}`),
    dobrar(`LOCATION:${esc(AO_VIVO)}`),
    dobrar(`URL:${AO_VIVO}`),
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    "DESCRIPTION:A live RHAE IA 2026 comeca em 30 minutos",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  res.setHeader("Content-Type", "text/calendar; charset=utf-8");
  res.setHeader("Content-Disposition", 'attachment; filename="rhae-ia-2026.ics"');
  res.setHeader("Cache-Control", "public, max-age=3600");
  // Quebra de linha do .ics é CRLF por especificação.
  res.status(200).send(linhas.join("\r\n"));
}
