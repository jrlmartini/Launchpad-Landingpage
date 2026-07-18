import { Target, FileText, ClipboardCheck, Shield, ArrowRight } from "lucide-react";
import { LogoCarousel } from "./LogoCarousel";

const features = [
  {
    icon: Target,
    text: "Escolher o instrumento certo para o seu estágio (TRL) e evitar chamadas que só consomem energia",
  },
  {
    icon: FileText,
    text: "Construir uma narrativa técnica que pontua: problema → inovação → evidências → execução",
  },
  {
    icon: ClipboardCheck,
    text: "Montar plano de trabalho, entregáveis, orçamento e contrapartidas sem deixar lacunas",
  },
  {
    icon: Shield,
    text: "Preparar governança e prestação de contas para manter a missão em trajetória",
  },
];

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cta/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-base font-semibold text-cta bg-cta/10 border border-cta/20 rounded-full">
            <span className="w-2 h-2 bg-cta rounded-full animate-pulse" />
            Recursos do Governo para sua Inovação
          </p>
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text leading-tight tracking-tight mb-6 animate-fade-in-up">
            <span className="text-gradient-accent">Fomento para Deeptechs</span>
          </h1>

          <h2 className="font-display font-semibold text-xl sm:text-2xl lg:text-3xl text-text mb-6 animate-fade-in-up animate-delay-100">
            Escreva projetos com a lógica de quem avalia —<br />
            e transforme sua tecnologia em um projeto financiável.
          </h2>

          <p className="text-lg lg:text-xl text-text-muted leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Um treinamento prático, <strong className="text-text">passo a passo</strong>, com templates, checklists e um sistema replicável para operar um <strong className="text-text">pipeline de captação</strong> — FAPESP, FINEP, CNPq, FAPs estaduais e outros. Sem promessa de aprovação garantida: com método, aderência e execução.
          </p>
        </div>
      </div>
          
      <LogoCarousel title={null} className="mb-12 animate-fade-in-up animate-delay-200" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up animate-delay-300">
          <p className="text-lg font-semibold text-text mb-6 text-center">Você vai aprender a:</p>
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-surface/50 border border-stroke/50 rounded-2xl card-glow transition-all duration-200 hover:border-cta/30"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cta/10 rounded-xl">
                  <feature.icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
                </div>
                <p className="text-text-muted leading-relaxed flex-1">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in-up animate-delay-400">
          <a
            href="#oferta"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cta hover:bg-cta/90 rounded-2xl transition-all duration-200 cta-glow group"
            data-testid="button-cta-hero"
          >
            Quero preparar minha missão
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-sm text-text-muted italic">
            Sem promessas milagrosas. Com método, aderência e execução.
          </p>
        </div>
      </div>
    </section>
  );
}
