import { DocumentoLegal, type SecaoLegal } from "@/components/legal/DocumentoLegal";
import { CONTROLADORA, PRIVACY_NOTICE_VERSION, LEGAL_DATA } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/contact";

/**
 * Aviso de Privacidade V1.
 *
 * Texto canônico de AVISO-DE-PRIVACIDADE-V1.md, com uma diferença deliberada:
 * as seções 6 e 12 descrevem também os fornecedores realmente em uso no site
 * (Google Analytics e Tag Manager, Hotmart, Calendly, WhatsApp), que a minuta
 * não previa por assumir uma configuração sem analytics.
 *
 * Publicar o texto sem essa correção colocaria no ar um aviso menos preciso do
 * que o anterior, omitindo cookies de medição e checkout de terceiro. As
 * adições estão comentadas com REVISÃO JURÍDICA para facilitar a conferência.
 */

const mail = (
  <a
    href={`mailto:${CONTACT_EMAIL}`}
    className="font-medium text-cta hover:text-cta/80 underline underline-offset-2"
  >
    {CONTACT_EMAIL}
  </a>
);

const secoes: SecaoLegal[] = [
  {
    id: "responsavel",
    titulo: "Quem é responsável pelos dados",
    conteudo: (
      <>
        <p>
          A responsável pelo tratamento dos dados pessoais descritos neste aviso
          é:
        </p>
        <p>
          <strong>{CONTROLADORA.razaoSocial}</strong>
          <br />
          CNPJ: {CONTROLADORA.cnpj}
          <br />
          {CONTROLADORA.endereco}
          <br />
          {CONTROLADORA.bairroCidade}
          <br />
          {CONTROLADORA.cep}
          <br />
          E-mail: {mail}
        </p>
        <p>
          Neste documento, a empresa também é identificada como{" "}
          <strong>Launchpad</strong>.
        </p>
      </>
    ),
  },
  {
    id: "aplicacao",
    titulo: "Onde este aviso se aplica",
    conteudo: (
      <>
        <p>Este aviso se aplica aos tratamentos realizados por meio de:</p>
        <ul>
          <li>launchpad.tec.br;</li>
          <li>deeptechs.com.br;</li>
          <li>páginas, formulários e landing pages vinculados a esses domínios;</li>
          <li>
            inscrições em eventos, lives, reuniões e outras atividades da
            Launchpad;
          </li>
          <li>
            contatos realizados por e-mail, WhatsApp ou outros canais informados
            pela Launchpad.
          </li>
        </ul>
        <p>
          Sites e serviços de terceiros possuem regras próprias de privacidade.
          Quando você acessar um serviço externo, recomendamos a leitura dos
          documentos aplicáveis a esse serviço.
        </p>
      </>
    ),
  },
  {
    id: "dados",
    titulo: "Dados que podemos tratar",
    conteudo: (
      <>
        <p>De acordo com a sua interação com a Launchpad, podemos tratar:</p>
        <ul>
          <li>
            <strong>dados de identificação e contato</strong>, como nome, e-mail
            e WhatsApp;
          </li>
          <li>
            <strong>dados profissionais</strong>, como empresa, cargo ou área de
            atuação;
          </li>
          <li>
            <strong>dados relacionados a eventos</strong>, como estágio de um
            projeto, dúvidas, respostas e participação;
          </li>
          <li>
            <strong>informações fornecidas voluntariamente</strong>, como uma
            descrição breve do produto, processo ou projeto que você pretende
            desenvolver;
          </li>
          <li>
            <strong>dados de origem da visita</strong>, como parâmetros UTM,
            página de origem e campanha;
          </li>
          <li>
            <strong>dados técnicos e de segurança</strong>, como endereço IP,
            tipo de navegador, data e horário do acesso, registros de
            funcionamento e prevenção a abusos, quando processados pelos sites ou
            fornecedores utilizados;
          </li>
          {/* REVISÃO JURÍDICA — adição: o site usa medição desde antes desta versão. */}
          <li>
            <strong>dados de navegação agregados</strong>, como páginas
            visitadas, profundidade de leitura e cliques em botões de contato,
            coletados por ferramentas de medição descritas na seção 12.
          </li>
        </ul>
        <p>
          Não solicitamos dados pessoais sensíveis nos formulários de inscrição.
          Também recomendamos que você não envie segredos comerciais,
          informações confidenciais de terceiros ou dados que não sejam
          necessários para a finalidade do formulário.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    titulo: "Para que usamos os dados",
    conteudo: (
      <>
        <table>
          <thead>
            <tr>
              <th>Finalidade</th>
              <th>Exemplos de uso</th>
              <th>Fundamento aplicável</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Administrar inscrições e atividades</td>
              <td>
                Confirmar inscrição, organizar participantes, enviar acesso,
                lembretes e mudanças relacionadas ao evento
              </td>
              <td>
                Procedimentos solicitados pelo titular e legítimo interesse,
                conforme aplicável
              </td>
            </tr>
            <tr>
              <td>Responder a contatos</td>
              <td>
                Responder perguntas, solicitações e mensagens encaminhadas à
                Launchpad
              </td>
              <td>
                Procedimentos solicitados pelo titular e legítimo interesse,
                conforme aplicável
              </td>
            </tr>
            <tr>
              <td>Preparar conteúdo e entender a audiência</td>
              <td>
                Agrupar respostas, identificar estágios dos projetos e preparar
                exemplos compatíveis com a audiência
              </td>
              <td>
                Legítimo interesse, com uso proporcional e respeito às
                expectativas do participante
              </td>
            </tr>
            <tr>
              <td>Enviar comunicações futuras</td>
              <td>
                Enviar conteúdos e informações sobre inovação, tecnologia,
                fomento, eventos ou serviços da Launchpad
              </td>
              <td>Consentimento, quando solicitado no formulário</td>
            </tr>
            {/* REVISÃO JURÍDICA — adição correspondente ao uso de medição. */}
            <tr>
              <td>Medir e melhorar os sites</td>
              <td>
                Entender quais páginas são acessadas, como o conteúdo é lido e
                quais caminhos levam ao contato, de forma agregada
              </td>
              <td>Legítimo interesse, com uso proporcional</td>
            </tr>
            <tr>
              <td>Proteger os sites e formulários</td>
              <td>
                Prevenir spam, fraude, abuso, incidentes e acessos não
                autorizados
              </td>
              <td>
                Legítimo interesse e cumprimento de obrigações de segurança
              </td>
            </tr>
            <tr>
              <td>Cumprir obrigações e exercer direitos</td>
              <td>
                Manter registros necessários, atender autoridades e responder a
                solicitações ou demandas
              </td>
              <td>
                Cumprimento de obrigação legal ou regulatória e exercício regular
                de direitos
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Quando o tratamento depender de consentimento, você poderá revogá-lo
          por meio do canal indicado neste aviso. A revogação não afeta os
          tratamentos realizados de forma válida antes do pedido.
        </p>
      </>
    ),
  },
  {
    id: "comunicacoes",
    titulo: "Comunicações sobre a atividade e comunicações futuras",
    conteudo: (
      <>
        <p>
          As mensagens necessárias para administrar uma inscrição, como
          confirmação, acesso, lembretes e mudanças de horário, fazem parte da
          atividade solicitada por você.
        </p>
        <p>
          Comunicações futuras sobre conteúdos, eventos, oportunidades ou
          serviços serão tratadas separadamente. Quando utilizarmos consentimento
          para essa finalidade, a escolha será opcional e não impedirá sua
          participação na atividade principal. Você poderá cancelar essas
          comunicações a qualquer momento.
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    titulo: "Com quem compartilhamos dados",
    conteudo: (
      <>
        <p>
          Compartilhamos dados somente quando isso é necessário para operar os
          sites, formulários, comunicações e atividades da Launchpad, cumprir uma
          obrigação ou proteger direitos.
        </p>
        <p>
          Na configuração atual, usamos o <strong>Tally</strong> para criar e
          administrar formulários. Nesse contexto:
        </p>
        <ul>
          <li>
            a Launchpad determina quais dados serão solicitados e para quais
            finalidades;
          </li>
          <li>o Tally processa e armazena as respostas em nome da Launchpad;</li>
          <li>
            fornecedores técnicos do Tally podem participar da hospedagem,
            segurança, armazenamento ou envio de notificações, conforme as
            configurações utilizadas;
          </li>
          <li>
            a relação de fornecedores e as condições aplicáveis podem ser
            consultadas na{" "}
            <a
              href="https://tally.so/help/gdpr"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentação de privacidade do Tally
            </a>
            .
          </li>
        </ul>
        {/* REVISÃO JURÍDICA — adição: fornecedores em uso não previstos na minuta. */}
        <p>Também utilizamos, conforme a página acessada:</p>
        <ul>
          <li>
            <strong>Google Analytics e Google Tag Manager</strong>, para medição
            de uso dos sites, conforme descrito na seção 12;
          </li>
          <li>
            <strong>Vercel</strong>, para hospedagem e entrega das páginas;
          </li>
          <li>
            <strong>Calendly</strong>, quando você opta por agendar uma conversa;
          </li>
          <li>
            <strong>Hotmart</strong>, quando houver compra de curso, hipótese em
            que a plataforma trata os dados de pagamento sob suas próprias
            condições;
          </li>
          <li>
            <strong>WhatsApp</strong>, quando você escolhe esse canal para falar
            conosco.
          </li>
        </ul>
        <p>
          Também podemos usar fornecedores de hospedagem, domínio, e-mail,
          segurança e comunicação estritamente necessários à operação. Esses
          fornecedores devem tratar os dados conforme suas funções e obrigações
          contratuais.
        </p>
        <p>
          <strong>Não vendemos dados pessoais.</strong>
        </p>
      </>
    ),
  },
  {
    id: "transferencias",
    titulo: "Transferências internacionais",
    conteudo: (
      <>
        <p>
          O Tally está estabelecido na Bélgica e informa que os dados de
          respostas a formulários são armazenados na Europa. Por isso, o uso
          desse serviço envolve transferência internacional de dados pessoais.
        </p>
        <p>
          A União Europeia é reconhecida pela Autoridade Nacional de Proteção de
          Dados como território com grau de proteção adequado para fins de
          transferência internacional. Alguns fornecedores técnicos do Tally
          podem operar em outros países, conforme a funcionalidade utilizada e a
          lista de subprocessadores mantida pelo próprio Tally.
        </p>
        {/* REVISÃO JURÍDICA — adição: os demais fornecedores também são estrangeiros. */}
        <p>
          Os demais fornecedores citados na seção 6 estão sediados fora do
          Brasil e podem tratar dados em outros países, de acordo com suas
          próprias políticas e mecanismos de transferência.
        </p>
        <p>
          A Launchpad procura limitar a transferência aos dados necessários e
          utilizar fornecedores que adotem medidas contratuais, técnicas e
          organizacionais compatíveis com a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    id: "retencao",
    titulo: "Por quanto tempo mantemos os dados",
    conteudo: (
      <>
        <p>Adotamos os seguintes critérios de retenção:</p>
        <ul>
          <li>
            <strong>inscrições e informações relacionadas a eventos:</strong> até
            12 meses após a realização da atividade;
          </li>
          <li>
            <strong>comunicações futuras autorizadas:</strong> até a revogação do
            consentimento ou por até 24 meses sem interação relevante, o que
            ocorrer primeiro;
          </li>
          <li>
            <strong>
              solicitações, registros de consentimento e evidências de
              conformidade:
            </strong>{" "}
            pelo período necessário para atender à solicitação, demonstrar o
            cumprimento de obrigações ou exercer direitos;
          </li>
          <li>
            <strong>registros técnicos e de segurança:</strong> pelo período
            necessário à prevenção, investigação e solução de incidentes, de
            acordo com a natureza do registro e os prazos aplicáveis.
          </li>
        </ul>
        <p>
          Os dados podem ser eliminados ou anonimizados antes desses períodos
          quando deixarem de ser necessários. Alguns registros poderão ser
          mantidos por prazo superior quando houver obrigação legal, necessidade
          de preservação de direitos ou determinação de autoridade competente.
        </p>
        <p>
          Segundo sua documentação, o Tally permite que a Launchpad exporte e
          exclua respostas. Dados excluídos são removidos dos backups do
          fornecedor em até 90 dias, salvo eliminação antecipada disponível na
          própria ferramenta.
        </p>
      </>
    ),
  },
  {
    id: "seguranca",
    titulo: "Como protegemos os dados",
    conteudo: (
      <>
        <p>
          Adotamos medidas proporcionais à natureza dos dados e aos riscos do
          tratamento, incluindo controle de acesso, limitação de permissões, uso
          de conexões seguras, seleção de fornecedores e revisão das informações
          coletadas.
        </p>
        <p>
          Nenhum ambiente digital elimina completamente o risco de incidentes.
          Caso ocorra um incidente que possa causar risco ou dano relevante,
          adotaremos as medidas cabíveis de avaliação, contenção e comunicação.
        </p>
      </>
    ),
  },
  {
    id: "direitos",
    titulo: "Seus direitos",
    conteudo: (
      <>
        <p>Nos termos da legislação aplicável, você pode solicitar:</p>
        <ul>
          <li>confirmação da existência de tratamento;</li>
          <li>acesso aos dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            anonimização, bloqueio ou eliminação de dados desnecessários,
            excessivos ou tratados em desconformidade;
          </li>
          <li>informações sobre compartilhamentos;</li>
          <li>portabilidade, quando aplicável e conforme regulamentação;</li>
          <li>
            informação sobre a possibilidade de não fornecer consentimento e suas
            consequências;
          </li>
          <li>revogação do consentimento;</li>
          <li>
            eliminação dos dados tratados com consentimento, observadas as
            hipóteses legais de conservação;
          </li>
          <li>
            oposição a tratamento realizado em desconformidade com a legislação;
          </li>
          <li>
            revisão e informações sobre decisões tomadas unicamente com base em
            tratamento automatizado, quando aplicável;
          </li>
          <li>
            peticionamento perante a Autoridade Nacional de Proteção de Dados e
            os órgãos competentes.
          </li>
        </ul>
        <p>
          Para exercer seus direitos, escreva para {mail}. Podemos solicitar
          informações necessárias para confirmar sua identidade e proteger seus
          dados contra acesso indevido.
        </p>
      </>
    ),
  },
  {
    id: "criancas",
    titulo: "Dados de crianças e adolescentes",
    conteudo: (
      <p>
        Os sites, formulários e atividades empresariais da Launchpad não são
        direcionados a crianças. Não coletamos intencionalmente dados de crianças
        por meio dos formulários descritos neste aviso. Caso você identifique uma
        coleta indevida, entre em contato para que possamos avaliar e adotar as
        medidas cabíveis.
      </p>
    ),
  },
  {
    id: "cookies",
    titulo: "Cookies e tecnologias semelhantes",
    conteudo: (
      <>
        {/* REVISÃO JURÍDICA — seção reescrita: a minuta descrevia uma
            configuração sem analytics, que não corresponde ao site. */}
        <p>
          Os sites utilizam <strong>Google Analytics</strong> e{" "}
          <strong>Google Tag Manager</strong> para medir o uso das páginas.
          Essas ferramentas gravam cookies e identificadores que permitem
          entender, de forma agregada, quais páginas são acessadas, como o
          conteúdo é lido e quais caminhos levam ao contato.
        </p>
        <p>
          Não enviamos nome, e-mail, telefone, empresa ou descrições de projeto
          para essas ferramentas. Não utilizamos publicidade comportamental,
          perfilização individual ou revenda de audiência.
        </p>
        <p>
          Além da medição, os sites e o formulário incorporado usam recursos
          técnicos necessários a funcionamento, segurança, prevenção de abuso e
          manutenção da sessão.
        </p>
        <p>
          Você pode bloquear ou apagar cookies nas configurações do seu
          navegador. O bloqueio de cookies de medição não impede o uso dos sites
          nem a inscrição em atividades.
        </p>
        <p>
          Se forem adicionadas ferramentas de publicidade, CRM ou outras
          tecnologias não essenciais, este aviso e os mecanismos de preferência
          serão atualizados antes de sua utilização, conforme aplicável.
        </p>
      </>
    ),
  },
  {
    id: "atualizacoes",
    titulo: "Atualizações deste aviso",
    conteudo: (
      <p>
        Este aviso poderá ser atualizado quando houver mudança nas atividades,
        nos fornecedores ou na legislação. A versão e a data de atualização ficam
        disponíveis no início do documento. Mudanças relevantes serão comunicadas
        pelos meios adequados ao contexto do tratamento.
      </p>
    ),
  },
  {
    id: "contato",
    titulo: "Contato",
    conteudo: (
      <p>
        Dúvidas, solicitações ou reclamações sobre privacidade podem ser enviadas
        para {mail}, com o assunto sugerido{" "}
        <strong>Privacidade e dados pessoais</strong>.
      </p>
    ),
  },
];

export default function Privacidade() {
  return (
    <DocumentoLegal
      titulo="Aviso de Privacidade"
      versao={PRIVACY_NOTICE_VERSION.split("-")[0]}
      data={LEGAL_DATA}
      intro={
        <p>
          A Launchpad respeita a privacidade de quem acessa seus sites, entra em
          contato ou se inscreve em suas atividades. Este aviso explica quais
          dados pessoais tratamos, para quais finalidades, com quem podemos
          compartilhá-los e como você pode exercer seus direitos.
        </p>
      }
      secoes={secoes}
    />
  );
}
