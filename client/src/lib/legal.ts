/**
 * Documentos jurídicos: versões e identificação da controladora.
 *
 * As versões são gravadas junto de cada inscrição, para que se saiba qual
 * texto a pessoa viu no momento do envio. Trocar o número aqui ao publicar
 * uma revisão relevante, nunca em ajuste de redação.
 */

export const PRIVACY_NOTICE_VERSION = "1.1-2026-08-30";
export const MARKETING_CONSENT_VERSION = "1.0-2026-08-20";
export const TERMS_VERSION = "1.0-2026-08-20";
export const PRIVACY_NOTICE_DATE = "30 de agosto de 2026";
export const TERMS_DATE = "20 de agosto de 2026";

export const CONTROLADORA = {
  razaoSocial: "Launchpad Desenvolvimento Empresarial Ltda. — ME",
  cnpj: "38.482.495/0001-05",
  endereco: "Avenida Itaberaba, 925, Sala 01",
  bairroCidade: "Nossa Senhora do Ó, São Paulo — SP",
  cep: "CEP 02734-000",
} as const;

/** Texto curto exibido junto ao formulário, antes do envio. */
export const AVISO_FORMULARIO =
  "A Launchpad usará seus dados para administrar sua inscrição, enviar informações de acesso e realizar comunicações necessárias sobre esta atividade.";

/** Alerta na descrição livre de projeto. */
export const AVISO_DESCRICAO_PROJETO =
  "Não inclua segredos comerciais, dados pessoais sensíveis ou informações confidenciais de terceiros. Uma descrição geral do problema, produto ou processo é suficiente.";
