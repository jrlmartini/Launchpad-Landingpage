import { Quote } from "lucide-react";

/**
 * Depoimentos de clientes.
 *
 * Textos reproduzidos na íntegra, sem edição. `tags` controla em quais páginas
 * cada depoimento aparece: prova só vale perto da promessa que ela sustenta,
 * então um depoimento sobre captação não deve ilustrar uma oferta de
 * inteligência técnica.
 */

export type TestimonialTag = "fomento" | "curso" | "metodo";

interface Testimonial {
  nome: string;
  papel?: string;
  empresa: string;
  texto: string;
  tags: TestimonialTag[];
  /** Caminho do logo em /public/logos-clientes/. Cai para as iniciais se ausente. */
  logo?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    nome: "Ana Paula",
    papel: "Diretora Executiva",
    empresa: "Legalbot",
    logo: "/logos-clientes/legalbot.png",
    texto:
      "A consultoria do Launchpad foi conduzida de forma objetiva, assertiva e altamente profissional, sendo fundamental durante o processo de elaboração do projeto e nos esclarecimentos junto aos órgãos governamentais financiadores. O José Renato esteve sempre disponível, prestativo e ágil, oferecendo orientações claras que trouxeram segurança e facilitaram a condução de todo o processo. Recomendamos seu trabalho pela competência, comprometimento e qualidade da consultoria.",
    tags: ["fomento"],
  },
  {
    nome: "Natália Naddeo",
    papel: "Pesquisadora e empreendedora",
    empresa: "Small Nanotechnology",
    logo: "/logos-clientes/small-nanotechnology.png",
    texto:
      "A Launchpad teve um papel fundamental na minha transição da academia para o ecossistema de inovação. Com o suporte da equipe, consegui adaptar a linguagem dos projetos para uma abordagem mais estratégica, voltada aos desafios tecnológicos e às demandas do mercado. Foi uma experiência de grande aprendizado, que contribuiu significativamente para minha evolução como pesquisadora e empreendedora.",
    tags: ["fomento", "curso"],
  },
];

function initials(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

interface Props {
  /** Filtra os depoimentos pertinentes à página. */
  tag: TestimonialTag;
  titulo?: string;
  subtitulo?: string;
  className?: string;
}

export function Testimonials({
  tag,
  titulo = "O que dizem quem já trabalhou comigo",
  subtitulo,
  className = "",
}: Props) {
  const itens = TESTIMONIALS.filter((t) => t.tags.includes(tag));
  if (itens.length === 0) return null;

  return (
    <section className={`py-20 lg:py-28 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-4">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="text-lg text-text-muted leading-relaxed">{subtitulo}</p>
          )}
        </div>

        <div
          className={`grid gap-6 ${
            itens.length > 1 ? "lg:grid-cols-2" : "max-w-2xl mx-auto"
          }`}
        >
          {itens.map((t) => (
            <figure
              key={t.nome + t.empresa}
              className="flex flex-col h-full p-7 lg:p-8 bg-surface/50 border border-stroke/50 rounded-3xl card-glow"
            >
              <Quote
                className="w-7 h-7 text-cta/50 mb-5"
                strokeWidth={1.5}
                aria-hidden
              />
              <blockquote className="text-text-muted leading-relaxed mb-6">
                {t.texto}
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-4 pt-6 border-t border-stroke/50">
                {t.logo ? (
                  <img
                    src={t.logo}
                    alt={t.empresa}
                    className="flex-shrink-0 h-12 w-auto max-w-[140px] object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex-shrink-0 w-11 h-11 grid place-items-center bg-cta/10 rounded-full"
                    aria-hidden
                  >
                    <span className="font-display font-semibold text-sm text-cta">
                      {initials(t.nome)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-text font-medium leading-tight">{t.nome}</p>
                  <p className="text-sm text-text-muted">
                    {t.papel ? `${t.papel} · ` : ""}
                    {t.empresa}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
