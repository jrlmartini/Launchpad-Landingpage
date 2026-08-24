import { FlaskConical, GraduationCap, type LucideIcon } from "lucide-react";

/**
 * Catálogo de treinamentos.
 *
 * Fonte única para o menu, a página /treinamentos e o schema. Lançar um curso
 * novo é adicionar uma entrada aqui e trocar o `status`. Nada mais precisa ser
 * editado: o dropdown, os cards e o sitemap leem daqui.
 */

export type StatusTreinamento = "ativo" | "em-breve";

export interface Treinamento {
  slug: string;
  nome: string;
  /** Uma linha, para o item do menu. */
  chamada: string;
  /** Parágrafo curto, para o card da página. */
  descricao: string;
  /** Para quem é, em uma frase. */
  publico: string;
  status: StatusTreinamento;
  /** Destino do clique. Em pré-lançamento aponta para a lista de espera. */
  href: string;
  /** Página completa do treinamento, quando existir. */
  paginaHref?: string;
  icon: LucideIcon;
  /** Tópicos principais, no card. Máximo de 4 para não pesar. */
  topicos: string[];
}

export const TREINAMENTOS: Treinamento[] = [
  {
    slug: "launch-lab-rhae-ia-2026",
    nome: "Launch Lab | RHAE IA 2026",
    chamada: "Quatro semanas para construir e revisar a proposta",
    descricao:
      "Laboratório aplicado para transformar uma oportunidade de IA em uma proposta estruturada para o RHAE IA 2026, com oito encontros ao vivo e uma rodada individual do LaunchScore.",
    publico:
      "Para fundadores, gestores de inovação e P&D, líderes técnicos e responsáveis pela submissão de projetos.",
    status: "ativo",
    href: "/treinamentos/launch-lab-rhae-ia-2026",
    icon: FlaskConical,
    topicos: [
      "Tese e enquadramento estratégico",
      "Arquitetura, metodologia e execução",
      "Equipe, bolsas e governança",
      "Checklist e LaunchScore Report",
    ],
  },
  {
    slug: "fomento-para-deeptechs",
    nome: "Fomento para Deeptechs",
    chamada: "Escrever e defender projetos que resistem ao avaliador",
    descricao:
      "O método completo para estruturar, escrever e defender projetos de fomento à inovação. Do enquadramento no edital certo até a resposta às diligências, com os templates e checklists que uso nos projetos que conduzo.",
    publico:
      "Para quem submete a FINEP, FAPESP, CNPq, Embrapii e FAPs, e quer internalizar a competência.",
    status: "em-breve",
    href: "/lista",
    paginaHref: "/curso",
    icon: GraduationCap,
    topicos: [
      "Enquadramento e escolha do edital",
      "Estrutura da proposta e mérito técnico",
      "Orçamento e contrapartida",
      "Diligências e recursos",
    ],
  },
];

export const TREINAMENTOS_ATIVOS = TREINAMENTOS.filter(
  (t) => t.status === "ativo",
);

export const temTreinamentoAtivo = TREINAMENTOS_ATIVOS.length > 0;
