import type { ReactNode } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

/**
 * Casca dos documentos jurídicos.
 *
 * Documento legal é lido para achar uma resposta, não do começo ao fim. Por
 * isso o sumário fica fixo ao lado no desktop e colapsado no topo em telas
 * pequenas, e cada seção tem âncora própria: dá para mandar o link direto de
 * um item específico.
 */

export interface SecaoLegal {
  id: string;
  titulo: string;
  conteudo: ReactNode;
}

interface Props {
  titulo: string;
  versao: string;
  data: string;
  intro: ReactNode;
  secoes: SecaoLegal[];
}

export function DocumentoLegal({ titulo, versao, data, intro, secoes }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 lg:pt-40 pb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <header className="max-w-3xl mb-10">
              <h1 className="font-display font-bold text-3xl lg:text-4xl text-text mb-4">
                {titulo}
              </h1>
              <p className="text-sm font-mono uppercase tracking-wider text-cta">
                Versão {versao} · {data}
              </p>
            </header>

            <div className="grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] gap-10 lg:gap-14">
              {/* Sumário */}
              <nav aria-label="Sumário" className="lg:sticky lg:top-32 lg:self-start">
                <details className="lg:open" open>
                  <summary className="lg:hidden cursor-pointer py-3 px-4 mb-3 text-sm font-medium text-text bg-surface/60 border border-stroke/50 rounded-xl list-none marker:content-none">
                    Sumário
                  </summary>
                  <p className="hidden lg:block text-xs font-mono uppercase tracking-widest text-cta mb-4">
                    Sumário
                  </p>
                  <ol className="space-y-1.5 pl-4 lg:pl-0">
                    {secoes.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block text-sm text-text-muted hover:text-cta transition-colors leading-snug"
                        >
                          <span className="font-mono text-xs text-cta/70 mr-1.5">
                            {i + 1}.
                          </span>
                          {s.titulo}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              </nav>

              {/* Corpo */}
              <article className="max-w-3xl">
                <div className="prose-artigo mb-12">{intro}</div>

                {secoes.map((s, i) => (
                  <section key={s.id} id={s.id} className="mb-12 scroll-mt-32">
                    <h2 className="font-display font-bold text-xl lg:text-2xl text-text mb-4">
                      <span className="font-mono text-base text-cta mr-2">
                        {i + 1}.
                      </span>
                      {s.titulo}
                    </h2>
                    <div className="prose-artigo">{s.conteudo}</div>
                  </section>
                ))}
              </article>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
