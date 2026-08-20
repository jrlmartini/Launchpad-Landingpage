import { useRoute } from "wouter";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { WA_MESSAGES } from "@/lib/contact";
import { getArtigo, formatarData, ARTIGOS } from "@/lib/artigos";
import NotFound from "@/pages/not-found";

export default function Artigo() {
  const [, params] = useRoute("/artigos/:slug");
  const artigo = params?.slug ? getArtigo(params.slug) : undefined;

  if (!artigo) return <NotFound />;

  const relacionados = ARTIGOS.filter(
    (a) => a.slug !== artigo.slug && a.tags.some((t) => artigo.tags.includes(t)),
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar active="artigos" />
        <main className="pt-32 lg:pt-40 pb-20">
          <article className="max-w-3xl mx-auto px-6 lg:px-8">
            <a
              href="/artigos"
              className="inline-flex items-center gap-2 mb-8 text-sm text-text-muted hover:text-cta transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos os artigos
            </a>

            <header className="mb-10">
              {artigo.tags.length > 0 && (
                <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
                  {artigo.tags.join(" · ")}
                </p>
              )}
              <h1 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-[1.15] mb-6">
                {artigo.titulo}
              </h1>
              <p className="text-lg text-text-muted leading-relaxed mb-6">
                {artigo.resumo}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-6 border-b border-stroke/50 text-sm text-text-muted">
                <span>José Renato Lanzi Martini</span>
                <time dateTime={artigo.publicado}>
                  {formatarData(artigo.publicado)}
                </time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cta" strokeWidth={1.5} />
                  {artigo.minutos} min de leitura
                </span>
                {artigo.atualizado && (
                  <span className="text-text-muted/70">
                    Atualizado em {formatarData(artigo.atualizado)}
                  </span>
                )}
              </div>
            </header>

            <div
              className="prose-artigo"
              dangerouslySetInnerHTML={{ __html: artigo.html }}
            />

            {artigo.ofertaHref && (
              <div className="mt-14 p-7 lg:p-8 bg-surface/60 border border-cta/30 rounded-3xl card-glow">
                <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
                  Trabalho relacionado
                </p>
                <p className="text-lg text-text leading-relaxed mb-6">
                  Se a decisão descrita aqui está na sua mesa, este é o trabalho
                  que a endereça.
                </p>
                <a
                  href={artigo.ofertaHref}
                  className="inline-flex items-center gap-2 text-base font-semibold text-cta hover:text-cta/80 transition-colors"
                >
                  {artigo.ofertaLabel ?? "Ver o serviço"}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            )}

            <div className="mt-12 pt-10 border-t border-stroke/50">
              <p className="text-text mb-5">
                Tem uma decisão parecida em mãos? Me conte em duas linhas.
              </p>
              <ContactOptions message={WA_MESSAGES.geral} source={`artigo-${artigo.slug}`} />
            </div>

            {relacionados.length > 0 && (
              <div className="mt-14 pt-10 border-t border-stroke/50">
                <h2 className="font-display font-semibold text-xl text-text mb-5">
                  Relacionados
                </h2>
                <div className="space-y-3">
                  {relacionados.map((r) => (
                    <a
                      key={r.slug}
                      href={`/artigos/${r.slug}`}
                      className="group flex items-start justify-between gap-4 p-5 bg-surface/50 border border-stroke/50 hover:border-cta/40 rounded-2xl transition-all"
                    >
                      <span className="text-text font-medium leading-snug">
                        {r.titulo}
                      </span>
                      <ArrowRight className="w-5 h-5 flex-shrink-0 text-cta group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
