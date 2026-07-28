/* Central contact configuration — every non-course CTA routes through here. */

export const WHATSAPP_NUMBER = "551931952808"; // +55 19 3195-2808
export const WHATSAPP_DISPLAY = "+55 19 3195-2808";
export const CONTACT_EMAIL = "contato@launchpadhub.com.br";

const CALENDLY_BASE =
  "https://calendly.com/mentorialaunchpad/avaliacao-mentoria";

/** Default Calendly link (kept for imports that don't pass context). */
export const CALENDLY_URL = `${CALENDLY_BASE}?utm_source=site&utm_medium=cta&utm_campaign=launchpadhub`;

/**
 * Calendly link carrying page/offer context as UTMs, so scheduled calls can be
 * attributed to the page and CTA that produced them.
 */
export function calendlyLink(source?: string): string {
  if (!source) return CALENDLY_URL;
  return `${CALENDLY_BASE}?utm_source=site&utm_medium=cta&utm_campaign=launchpadhub&utm_content=${encodeURIComponent(source)}`;
}

/**
 * Builds a wa.me link with a pre-filled message so the conversation starts with
 * context. `source` appends a discreet origin line — WhatsApp can't carry UTMs,
 * so this is the only reliable way to know which page produced the message.
 */
export function waLink(message: string, source?: string): string {
  const body = source ? `${message}\n\n— vim pela página: ${source}` : message;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
}

/** Pre-filled openers per service — the visitor never faces an empty message box. */
export const WA_MESSAGES = {
  geral:
    "Olá! Vim pelo site do LaunchpadHub e gostaria de conversar sobre um projeto.",
  escrita:
    "Olá! Vim pelo site e quero conversar sobre a *Escrita do Projeto* (a quatro mãos). Meu edital de interesse é:",
  revisao:
    "Olá! Vim pelo site e quero conversar sobre a *Revisão do Projeto*. Já tenho uma proposta escrita para o edital:",
  duvidaProjeto:
    "Olá! Vim pelo site e estou em dúvida entre a escrita e a revisão do projeto. Minha situação é:",
  diagnostico:
    "Olá! Vim pelo site e quero conversar sobre o *Diagnóstico de Prontidão Comercial*. A tecnologia é:",
  rota:
    "Olá! Vim pelo site e quero conversar sobre a *Assessoria de Rota Comercial*. O contexto é:",
  parecer:
    "Olá! Vim pelo site e quero conversar sobre um *Parecer Técnico-Comercial*. A tecnologia a ser avaliada é:",
  tecnologia:
    "Olá! Vim pelo site e quero conversar sobre uma tecnologia que precisa de avaliação comercial.",
} as const;
