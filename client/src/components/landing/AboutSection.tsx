import { Rocket, Award, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-text mb-6">
              Sobre o Launchpad
            </h2>
            <p className="text-xl text-cta font-display font-semibold">
              Explore novos mundos — com método.
            </p>
          </div>

          <div className="p-8 lg:p-12 bg-surface/50 border border-stroke/50 rounded-3xl card-glow mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-cta/10 rounded-2xl">
                <Rocket className="w-7 h-7 text-cta" strokeWidth={1.5} />
              </div>
              <p className="text-lg text-text-muted leading-relaxed">
                O LaunchpadHub existe para ajudar organizações a explorar o espaço da inovação: um ambiente hostil, incerto e cheio de riscos, onde boas ideias não sobrevivem sem disciplina. Nossa missão é transformar ambição em missões bem-sucedidas — definindo rotas claras, construindo projetos robustos, assegurando recursos e criando governança para navegar a complexidade com precisão.
              </p>
            </div>

            <div className="border-t border-stroke/50 pt-8">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-24 h-24 bg-cta/10 rounded-2xl flex items-center justify-center">
                  <span className="font-display font-bold text-3xl text-cta">JRM</span>
                </div>
                
                <div>
                  <h3 className="font-display font-bold text-xl text-text mb-4">José Renato Martini</h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    Engenheiro de produção (UNESP/OTH), com pós-graduação em Administração de Empresas (FGV/HEC Paris) e especialização em Empreendedorismo e Inovação (MIT). Desde 2012, atuo diretamente em inovação tecnológica, com experiência em gestão de projetos, captação de recursos, planejamento estratégico e mapeamento tecnológico.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-cta/10 rounded-xl">
                      <TrendingUp className="w-5 h-5 text-cta" strokeWidth={1.5} />
                      <span className="text-text font-semibold">+R$ 35 milhões</span>
                      <span className="text-text-muted text-sm">aprovados</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-xl border border-stroke/50">
                      <Award className="w-5 h-5 text-cta" strokeWidth={1.5} />
                      <span className="text-text-muted text-sm">Desde 2012</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mt-8 text-text-muted leading-relaxed">
                Ao longo desse caminho, já aprovei <strong className="text-text">mais de R$ 35 milhões</strong> em projetos de fomento reembolsáveis e não reembolsáveis para empresas dos segmentos automotivo, químico, alimentício, agrícola, saúde e tecnologia da informação. O LaunchpadHub nasceu dessa vivência: tirar inovação do "modo tentativa" e colocar em <span className="text-cta font-semibold">trajetória</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
