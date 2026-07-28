import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from "@/lib/contact";

/**
 * RASCUNHO BASE — revisar com apoio jurídico antes de considerar definitivo.
 * Cobre o essencial da LGPD para um site institucional com formulários,
 * WhatsApp, Calendly, checkout externo (Hotmart) e analytics.
 */
export default function Privacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-starfield opacity-40 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-32 lg:pt-40 pb-20">
          <article className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="font-display font-bold text-3xl lg:text-4xl text-text mb-4">
              Política de Privacidade
            </h1>
            <p className="text-sm text-text-muted mb-10">
              Última atualização: julho de 2026
            </p>

            <div className="space-y-8 text-text-muted leading-relaxed">
              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  1. Quem somos
                </h2>
                <p>
                  O LaunchpadHub é uma iniciativa de consultoria e educação em
                  fomento à inovação e comercialização de tecnologias. O curso{" "}
                  <em>Fomento para Deeptechs</em> é um produto do LaunchpadHub.
                  Contato: {CONTACT_EMAIL} · {WHATSAPP_DISPLAY}.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  2. Quais dados coletamos
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-text">Dados que você envia:</strong>{" "}
                    nome, e-mail, telefone, empresa e informações sobre o seu
                    projeto ou tecnologia, quando você nos escreve por WhatsApp,
                    e-mail, formulário ou agendamento.
                  </li>
                  <li>
                    <strong className="text-text">Dados de navegação:</strong>{" "}
                    páginas visitadas, origem do acesso, dispositivo e
                    interações com botões, coletados por cookies e ferramentas
                    de análise.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  3. Para que usamos
                </h2>
                <p>
                  Responder ao seu contato, avaliar se há encaixe com nossos
                  serviços, executar trabalhos contratados, enviar comunicações
                  que você autorizou e melhorar o site. Não vendemos dados
                  pessoais.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  4. Ferramentas de terceiros
                </h2>
                <p>
                  Utilizamos Google Analytics e Google Tag Manager (medição),
                  Calendly (agendamento), WhatsApp (atendimento) e Hotmart
                  (pagamento e área de membros do curso). Cada um trata dados
                  conforme suas próprias políticas de privacidade.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  5. Confidencialidade de informações técnicas
                </h2>
                <p>
                  Informações sobre tecnologias, projetos e estratégias
                  compartilhadas conosco são tratadas como confidenciais e não
                  são divulgadas a terceiros. Assinamos acordo de
                  confidencialidade (NDA) sempre que solicitado.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  6. Seus direitos (LGPD)
                </h2>
                <p>
                  Você pode solicitar acesso, correção, portabilidade,
                  anonimização ou exclusão dos seus dados, além de revogar
                  consentimento, escrevendo para {CONTACT_EMAIL}. Responderemos
                  nos prazos previstos na Lei nº 13.709/2018.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  7. Retenção
                </h2>
                <p>
                  Mantemos os dados pelo tempo necessário às finalidades acima
                  ou às obrigações legais e contratuais aplicáveis.
                </p>
              </section>

              <section>
                <h2 className="font-display font-semibold text-xl text-text mb-3">
                  8. Alterações
                </h2>
                <p>
                  Esta política pode ser atualizada. A data no topo indica a
                  última revisão.
                </p>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
