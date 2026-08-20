import { ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { WA_MESSAGES } from "@/lib/contact";
import { ARTIGOS, formatarData } from "@/lib/artigos";

export default function Artigos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar active="artigos" />
        <main className="pt-32 lg:pt-40 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <header className="mb-14 max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
                Artigos
              </p>
              <h1 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text leading-tight mb-5">
                Rotas técnicas avaliadas, com veredito
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                O mesmo tipo de análise que entrego a clientes, em versão
                pública: evidência rastreada até a fonte, alternativas
                comparadas e o que ainda não se sabe declarado como lacuna.
              </p>
            </header>

            {ARTIGOS.length === 0 ? (
              <div className="p-8 bg-surface/40 border border-stroke/50 border-dashed rounded-3xl text-center">
                <p className="text-text-muted leading-relaxed">
                  As primeiras análises estão sendo finalizadas.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {ARTIGOS.map((a) => (
                  <a
                    key={a.slug}
                    href={`/artigos/${a.slug}`}
                    className="group block p-7 lg:p-8 bg-surface/50 border border-stroke/50 hover:border-cta/40 rounded-3xl card-glow transition-all duration-200"
                  >
                    {a.tags.length > 0 && (
                      <p className="text-xs font-mono uppercase tracking-widest text-cta mb-3">
                        {a.tags.join(" · ")}
                      </p>
                    )}
                    <h2 className="font-display font-bold text-xl lg:text-2xl text-text mb-3 leading-snug">
                      {a.titulo}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-5">
                      {a.resumo}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
                      <time dateTime={a.publicado}>
                        {formatarData(a.publicado)}
                      </time>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-cta" strokeWidth={1.5} />
                        {a.minutos} min
                      </span>
                      <span className="ml-auto inline-flex items-center gap-2 font-semibold text-cta">
                        Ler
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            <div className="mt-14 pt-10 border-t border-stroke/50 text-center">
              <p className="text-text mb-5">
                Precisa de uma avaliação sobre um caso específico?
              </p>
              <ContactOptions
                message={WA_MESSAGES.geral}
                source="artigos-indice"
                className="max-w-xl mx-auto"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
