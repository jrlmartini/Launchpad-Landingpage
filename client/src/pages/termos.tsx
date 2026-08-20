import { DocumentoLegal, type SecaoLegal } from "@/components/legal/DocumentoLegal";
import { CONTROLADORA, TERMS_VERSION, LEGAL_DATA } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/contact";

/** Termos de Uso V1. Texto canônico de TERMOS-DE-USO-V1.md. */

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
    id: "identificacao",
    titulo: "Identificação",
    conteudo: (
      <>
        <p>Os sites são mantidos por:</p>
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
        <p>Estes termos se aplicam a:</p>
        <ul>
          <li>launchpad.tec.br;</li>
          <li>deeptechs.com.br;</li>
          <li>
            landing pages, formulários e páginas vinculados a esses domínios.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "aceitacao",
    titulo: "Aceitação",
    conteudo: (
      <>
        <p>
          Ao utilizar os sites, você reconhece estes termos e concorda em
          respeitar a legislação aplicável e os direitos da Launchpad e de
          terceiros.
        </p>
        <p>
          Quando uma atividade, evento, produto ou serviço possuir condições
          específicas, essas condições complementarão estes termos. Em caso de
          conflito, prevalecerão as condições específicas para a respectiva
          atividade.
        </p>
      </>
    ),
  },
  {
    id: "finalidade",
    titulo: "Finalidade dos sites",
    conteudo: (
      <>
        <p>Os sites podem disponibilizar:</p>
        <ul>
          <li>informações institucionais;</li>
          <li>
            conteúdos sobre inovação, tecnologia, pesquisa, desenvolvimento e
            fomento;
          </li>
          <li>artigos, relatórios, materiais e referências;</li>
          <li>
            inscrições em eventos, lives, reuniões e outras atividades;
          </li>
          <li>canais de contato e informações sobre serviços.</li>
        </ul>
        <p>
          A disponibilidade de um conteúdo não representa obrigação de manter sua
          publicação por prazo indeterminado.
        </p>
      </>
    ),
  },
  {
    id: "natureza",
    titulo: "Natureza informativa do conteúdo",
    conteudo: (
      <>
        <p>
          Os conteúdos procuram apresentar informações de forma clara e
          fundamentada, considerando as fontes e a data de corte indicadas quando
          aplicável. Ainda assim:
        </p>
        <ul>
          <li>
            conteúdos públicos não substituem análise técnica, jurídica,
            contábil, financeira ou regulatória adequada ao caso concreto;
          </li>
          <li>
            informações sobre editais, programas e normas não substituem os
            documentos oficiais nem esclarecimentos emitidos pelos órgãos
            responsáveis;
          </li>
          <li>
            exemplos, interpretações e recomendações gerais podem não se aplicar
            às circunstâncias de uma empresa ou projeto específico;
          </li>
          <li>
            nenhum conteúdo público representa promessa de aprovação em edital,
            obtenção de recursos, viabilidade técnica, resultado comercial ou
            contratação.
          </li>
        </ul>
        <p>
          O usuário é responsável por verificar informações relevantes antes de
          tomar uma decisão ou assumir um compromisso.
        </p>
      </>
    ),
  },
  {
    id: "inscricoes",
    titulo: "Inscrições e eventos",
    conteudo: (
      <>
        <p>
          Ao realizar uma inscrição, você se compromete a fornecer informações
          corretas e atualizadas. A Launchpad poderá usar os contatos informados
          para administrar a atividade, incluindo confirmações, informações de
          acesso, lembretes e mudanças necessárias.
        </p>
        <p>
          Datas, horários, apresentadores, formato e conteúdo poderão ser
          ajustados por razões operacionais ou de força maior. Quando uma
          alteração for relevante, a Launchpad procurará comunicá-la pelos
          contatos disponíveis.
        </p>
        <p>Salvo indicação expressa em contrário:</p>
        <ul>
          <li>a inscrição é pessoal;</li>
          <li>
            o envio do formulário não garante acesso quando houver limite técnico
            previamente informado;
          </li>
          <li>
            gravações, materiais complementares e certificados não estão
            incluídos automaticamente;
          </li>
          <li>
            perguntas enviadas poderão ser agrupadas ou respondidas de forma
            geral, sem obrigação de análise individual ou confidencial.
          </li>
        </ul>
        <p>
          Não envie pelo formulário informações sigilosas, segredos comerciais ou
          dados pessoais desnecessários.
        </p>
      </>
    ),
  },
  {
    id: "uso-permitido",
    titulo: "Uso permitido",
    conteudo: (
      <>
        <p>
          Você pode acessar os sites e utilizar os conteúdos para fins legítimos,
          pessoais ou profissionais, respeitando estes termos e os direitos
          aplicáveis.
        </p>
        <p>Não é permitido:</p>
        <ul>
          <li>
            tentar obter acesso não autorizado aos sites, contas, formulários ou
            sistemas;
          </li>
          <li>interferir no funcionamento ou na segurança dos serviços;</li>
          <li>
            enviar código malicioso, spam, informações fraudulentas ou conteúdo
            ilícito;
          </li>
          <li>
            coletar dados de usuários ou da Launchpad por meios automatizados sem
            autorização;
          </li>
          <li>
            remover avisos de autoria, fonte, marca ou propriedade intelectual;
          </li>
          <li>
            copiar, republicar ou explorar comercialmente conteúdos protegidos
            além do permitido pela legislação ou por autorização escrita.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "propriedade",
    titulo: "Propriedade intelectual",
    conteudo: (
      <>
        <p>
          Textos, relatórios, apresentações, metodologias, elementos visuais,
          marcas, códigos e demais materiais produzidos pela Launchpad são
          protegidos pela legislação aplicável, salvo indicação diferente.
        </p>
        <p>
          A disponibilização de um conteúdo não transfere direitos de propriedade
          intelectual. Citações e usos permitidos por lei devem preservar
          autoria, integridade, contexto e fonte. Qualquer uso adicional depende
          de autorização prévia e escrita.
        </p>
        <p>
          Marcas, conteúdos e materiais de terceiros permanecem sujeitos aos
          direitos de seus respectivos titulares.
        </p>
      </>
    ),
  },
  {
    id: "terceiros",
    titulo: "Links e serviços de terceiros",
    conteudo: (
      <>
        <p>
          Os sites podem conter links ou recursos operados por terceiros, como
          plataformas de formulários, videoconferência, calendário, mensagens e
          documentos oficiais. Esses serviços possuem termos e avisos próprios.
        </p>
        <p>
          A presença de um link não representa controle da Launchpad sobre o
          serviço externo nem aprovação de todo o seu conteúdo. O usuário deve
          avaliar os documentos e condições aplicáveis antes de utilizar o
          serviço de terceiro.
        </p>
      </>
    ),
  },
  {
    id: "disponibilidade",
    titulo: "Disponibilidade e segurança",
    conteudo: (
      <>
        <p>
          A Launchpad procura manter os sites disponíveis e seguros, mas podem
          ocorrer interrupções, manutenções, falhas de rede, indisponibilidade de
          fornecedores ou eventos fora de seu controle.
        </p>
        <p>
          Podemos suspender ou limitar o acesso quando isso for necessário para
          manutenção, segurança, cumprimento de obrigação ou proteção de
          direitos. Nada nestes termos exclui responsabilidades que não possam
          ser afastadas pela legislação aplicável.
        </p>
      </>
    ),
  },
  {
    id: "privacidade",
    titulo: "Privacidade",
    conteudo: (
      <p>
        O tratamento de dados pessoais relacionado aos sites, formulários e
        atividades é explicado no{" "}
        <a href="/privacidade">Aviso de Privacidade da Launchpad</a>, que integra
        a experiência de uso e permanece acessível nos dois domínios.
      </p>
    ),
  },
  {
    id: "alteracoes",
    titulo: "Alterações",
    conteudo: (
      <p>
        Estes termos poderão ser atualizados para refletir mudanças nos sites,
        nas atividades ou na legislação. A versão e a data de atualização são
        indicadas no início do documento.
      </p>
    ),
  },
  {
    id: "legislacao",
    titulo: "Legislação e solução de questões",
    conteudo: (
      <>
        <p>
          Estes termos são regidos pela legislação brasileira. Questões serão
          tratadas pelo foro competente definido pela legislação aplicável, sem
          restrição aos direitos assegurados ao usuário por normas obrigatórias.
        </p>
        <p>
          Antes de iniciar uma medida formal, você pode entrar em contato para
          buscar esclarecimento ou solução direta.
        </p>
      </>
    ),
  },
  {
    id: "contato",
    titulo: "Contato",
    conteudo: <p>E-mail: {mail}</p>,
  },
];

export default function Termos() {
  return (
    <DocumentoLegal
      titulo="Termos de Uso"
      versao={TERMS_VERSION.split("-")[0]}
      data={LEGAL_DATA}
      intro={
        <p>
          Estes Termos de Uso regulam o acesso e a utilização dos sites, páginas
          e conteúdos digitais mantidos pela Launchpad.
        </p>
      }
      secoes={secoes}
    />
  );
}
