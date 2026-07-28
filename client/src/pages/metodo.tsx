import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { MatrizTrlCrl } from "@/components/metodo/MatrizTrlCrl";
import { Autodiagnostico } from "@/components/metodo/Autodiagnostico";
import { FloatingWhatsApp } from "@/components/hub/FloatingWhatsApp";
import { ContactOptions } from "@/components/hub/ContactOptions";
import { WA_MESSAGES } from "@/lib/contact";
import { ArrowRight, Users, Banknote, ShieldCheck, Network, Factory } from "lucide-react";

const sections = [
  { href: "#matriz", label: "A matriz" },
  { href: "#eixos", label: "Os 5 eixos" },
  { href: "#niveis", label: "Os 9 níveis" },
  { href: "#autodiagnostico", label: "Autodiagnóstico" },
];

const eixos = [
  {
    icon: Users,
    nome: "Cliente e problema",
    desc: "Quem sente a dor, e se ela está entre as prioridades reais dessa pessoa, com orçamento associado. Dor confirmada por entrevista vale mais que persona bem desenhada.",
  },
  {
    icon: Banknote,
    nome: "Disposição a pagar",
    desc: "Vale a evidência de pagamento. Carta de intenção é um sinal fraco; piloto pago por quem não é sócio nem investidor é outro patamar.",
  },
  {
    icon: ShieldCheck,
    nome: "Rota regulatória",
    desc: "ANVISA, INMETRO, CONAMA, ANP, registro de fertilizante, normas de potabilidade. Em tecnologia industrial é aqui que cronogramas comerciais morrem, e quase nenhum framework de inovação olha para isso.",
  },
  {
    icon: Network,
    nome: "Modelo de negócio e cadeia",
    desc: "Como a tecnologia chega ao cliente, quem mais precisa participar da entrega e quem captura valor em cada elo.",
  },
  {
    icon: Factory,
    nome: "Capacidade de escala",
    desc: "Rota de scale-up, custo em escala, parceiro industrial, CAPEX e fornecimento do insumo crítico. Funcionar em bancada diz muito pouco sobre funcionar em tonelada.",
  },
];

const niveisCrl = [
  {
    bloco: "Descoberta",
    faixa: "1 a 3",
    itens: [
      "1 · Aplicação hipotética, sem cliente identificado",
      "2 · Perfil de cliente definido, dor presumida",
      "3 · Dor confirmada em entrevistas com clientes reais",
    ],
  },
  {
    bloco: "Validação",
    faixa: "4 a 6",
    itens: [
      "4 · Ganho econômico quantificado para o cliente",
      "5 · Interesse formalizado — carta de intenção, acordo de piloto",
      "6 · Piloto pago em condição real de operação",
    ],
  },
  {
    bloco: "Escala",
    faixa: "7 a 9",
    itens: [
      "7 · Primeira venda fora de piloto",
      "8 · Vendas repetidas, preço estável, canal definido",
      "9 · Operação comercial consolidada e cadeia estabelecida",
    ],
  },
];

export default function Metodo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar sections={sections} ctaHref="#autodiagnostico" ctaLabel="Fazer o autodiagnóstico" />

        <main>
          {/* Hero */}
          <section className="relative pt-36 lg:pt-44 pb-16 overflow-hidden">
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-bottom" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />
            </div>
            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-cta mb-4">
                O método · Prontidão Comercial
              </p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight mb-6">
                Toda tecnologia tem duas maturidades.
                <br />
                <span className="text-gradient-accent">Você provavelmente só mediu uma.</span>
              </h1>
              <p className="text-lg lg:text-xl text-text-muted leading-relaxed">
                As agências de fomento exigem a maturidade técnica (TRL) há décadas. A
                maturidade comercial (CRL) quase ninguém mede, e é ela que explica
                por que tecnologias prontas ficam paradas.
              </p>
            </div>
          </section>

          {/* A matriz */}
          <section id="matriz" className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30 scroll-mt-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <MatrizTrlCrl className="w-full" />

                <div>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-6">
                    O que importa é a distância entre os dois.
                  </h2>
                  <div className="space-y-4 text-lg text-text-muted leading-relaxed mb-8">
                    <p>
                      Saber que uma tecnologia está em TRL 6 não gera decisão nenhuma. O
                      time técnico já sabe disso. A decisão aparece quando você
                      cruza esse número com a maturidade comercial e olha o espaço
                      entre os dois.
                    </p>
                    <p>
                      <strong className="text-text">Descompasso = TRL − CRL.</strong> Quanto
                      maior o descompasso, mais valor fica parado, e menos
                      adianta continuar investindo no eixo técnico.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-background/50 border border-stroke/50 rounded-xl">
                      <p className="font-mono text-sm text-cta mb-1">0 a 1 · saudável</p>
                      <p className="text-text-muted text-sm">
                        Os dois eixos andam juntos. Seguir o plano.
                      </p>
                    </div>
                    <div className="p-4 bg-background/50 border border-stroke/50 rounded-xl">
                      <p className="font-mono text-sm text-text mb-1">2 a 3 · atenção</p>
                      <p className="text-text-muted text-sm">
                        A técnica começou a correr na frente. Momento mais barato
                        de corrigir.
                      </p>
                    </div>
                    <div className="p-4 bg-highlight/10 border border-highlight/30 rounded-xl">
                      <p className="font-mono text-sm text-highlight mb-1">4 ou mais · tecnologia órfã</p>
                      <p className="text-text-muted text-sm">
                        Tecnicamente pronta, comercialmente não comprovada. Cada
                        real em desenvolvimento aumenta o valor parado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 max-w-3xl mx-auto p-6 lg:p-8 bg-background/50 border-l-2 border-cta rounded-r-2xl">
                <p className="text-lg text-text leading-relaxed">
                  <strong>A regra que orienta tudo:</strong> invista sempre no eixo
                  mais atrasado, mesmo quando ele é o mais desconfortável. Times
                  técnicos costumam investir em TRL porque é o que sabem fazer e o
                  que dá prazer fazer. Cada rodada assim aumenta o descompasso e o
                  custo de descobrir a verdade depois.
                </p>
              </div>
            </div>
          </section>

          {/* Os 5 eixos */}
          <section id="eixos" className="py-20 lg:py-28 scroll-mt-32">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-5">
                  O CRL é composto por cinco eixos
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  Cada um recebe um nível de 1 a 9. O CRL da tecnologia é a leitura
                  conjunta dos cinco, e o eixo mais atrasado costuma definir o
                  próximo passo.
                </p>
              </div>

              <div className="space-y-4">
                {eixos.map((e, i) => (
                  <div
                    key={e.nome}
                    className="flex items-start gap-5 p-6 bg-surface/50 border border-stroke/50 rounded-2xl"
                  >
                    <div className="flex-shrink-0 w-12 h-12 grid place-items-center bg-cta/10 rounded-xl">
                      <e.icon className="w-6 h-6 text-cta" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-cta mb-1">
                        Eixo {i + 1}
                      </p>
                      <h3 className="font-display font-semibold text-lg text-text mb-2">
                        {e.nome}
                      </h3>
                      <p className="text-text-muted leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Os 9 níveis */}
          <section id="niveis" className="py-20 lg:py-28 bg-surface/30 border-y border-stroke/30 scroll-mt-32">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-5">
                  Os nove níveis de prontidão comercial
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  Nove níveis para espelhar a escala de TRL que você já usa, agrupados em
                  três blocos, na ordem em que a evidência comercial aparece na
                  prática.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {niveisCrl.map((b) => (
                  <div
                    key={b.bloco}
                    className="p-6 bg-background/50 border border-stroke/50 rounded-2xl"
                  >
                    <p className="font-mono text-sm text-cta mb-1">CRL {b.faixa}</p>
                    <h3 className="font-display font-semibold text-xl text-text mb-4">
                      {b.bloco}
                    </h3>
                    <ul className="space-y-3">
                      {b.itens.map((i) => (
                        <li key={i} className="text-sm text-text-muted leading-relaxed">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 max-w-3xl mx-auto p-6 bg-background/40 border border-stroke/40 rounded-2xl">
                <p className="text-text-muted leading-relaxed">
                  <strong className="text-text">Uma nota de honestidade:</strong> o TRL
                  é padronizado internacionalmente (ISO 16290) e adotado pelas
                  agências brasileiras. O CRL não é — existem versões
                  concorrentes, com números de níveis diferentes. A escala acima
                  é a que eu uso, construída para tecnologias industriais
                  brasileiras. Trate como método de trabalho, não como norma. Está aberto
                  para você usar.
                </p>
              </div>
            </div>
          </section>

          {/* Autodiagnóstico */}
          <Autodiagnostico />

          {/* CTA final */}
          <section className="py-20 lg:py-28 bg-surface/30 border-t border-stroke/30">
            <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-5">
                Da estimativa ao veredito
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                O autodiagnóstico trabalha com a sua percepção. O Diagnóstico de
                Prontidão Comercial trabalha com evidência verificada, aplicação
                por aplicação, e termina com os próximos 3 a 5 experimentos, cada
                um com custo e critério de decisão.
              </p>
              <a
                href="/tecnologia#diagnostico"
                className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
              >
                Ver como funciona o Diagnóstico
                <ArrowRight className="w-4 h-4" />
              </a>
              <ContactOptions
                message={WA_MESSAGES.diagnostico}
                source="metodo-final"
                className="max-w-xl mx-auto"
              />
            </div>
          </section>
        </main>

        <Footer />
        <FloatingWhatsApp message={WA_MESSAGES.tecnologia} source="metodo" />
      </div>
    </div>
  );
}
