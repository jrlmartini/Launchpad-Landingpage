# Como publicar um artigo

Um arquivo `.md` nesta pasta vira uma página completa: HTML renderizado no
servidor, schema `TechArticle`, migalha, entrada no sitemap e card no índice.
Não há CMS nem painel. Publicar é adicionar o arquivo e fazer o commit.

## Estrutura

```
content/artigos/destruicao-de-pfas-rotas.md   →   /artigos/destruicao-de-pfas-rotas
```

O nome do arquivo define a URL. Use apenas minúsculas, sem acento, separando
por hífen. **A URL não deve mudar depois de publicada** — se mudar, os links
existentes quebram e o histórico de busca da página se perde.

## Front-matter

```markdown
---
titulo: Rotas de destruição de PFAS: o que a evidência sustenta
resumo: Cinco rotas comparadas por maturidade, custo e barreira regulatória, com o que ainda não está resolvido em cada uma.
publicado: 2026-09-02
atualizado: 2026-10-14
tags: [PFAS, Tratamento de água]
imagem: /artigos/pfas.jpg
ofertaHref: /inteligencia#sprint
ofertaLabel: Ver o Technology Decision Sprint
---

O texto começa aqui.
```

| Campo | Obrigatório | Observação |
|---|---|---|
| `titulo` | sim | Vira `<h1>` e entra no `<title>` |
| `resumo` | sim | Meta description e card do índice. **Até 155 caracteres** |
| `publicado` | sim | `AAAA-MM-DD`. Ordena o índice |
| `atualizado` | não | Só quando o conteúdo mudar de verdade |
| `tags` | não | Alimentam o bloco de relacionados |
| `imagem` | não | Caminho em `/public`. Cai para a OG padrão se ausente |
| `ofertaHref` | não | Rota do serviço que o artigo endereça |
| `ofertaLabel` | não | Texto do link da oferta |
| `ofertaTexto` | não | Texto específico do bloco de oferta |
| `ctaExclusivo` | não | `true` remove contato e relacionados, mantendo apenas a oferta do artigo |
| `rascunho` | não | `true` mantém fora do site inteiro |

## Regras que valem a pena seguir

**Um `#` nunca.** O `titulo` do front-matter já gera o `<h1>`. No corpo, comece
os cortes em `##`. Dois `<h1>` na mesma página confundem a leitura da estrutura.

**O resumo é a promessa.** Ele aparece no resultado de busca. Escreva o que a
pessoa vai saber depois de ler, não o assunto genérico do texto.

**Aponte para uma oferta.** `ofertaHref` é o que separa artigo que gera
conversa de artigo que gera visita. Escolha a que corresponde à decisão tratada:

| Assunto do artigo | Oferta |
|---|---|
| Comparação de rotas técnicas | `/inteligencia#mapeamento` |
| Avaliação de um fornecedor ou tecnologia | `/inteligencia#sprint` |
| Due diligence para investimento | `/inteligencia#parecer` |
| Prontidão comercial, TRL e CRL | `/tecnologia#diagnostico` |
| Go-to-market de tecnologia | `/tecnologia#rota` |
| Editais e projetos de fomento | `/projetos` |

**Toda afirmação técnica com fonte.** Link direto para paper, patente ou norma.
É o mesmo compromisso de rastreabilidade que o site promete nos serviços; um
artigo sem fonte contradiz a oferta.

**Declare a lacuna.** O que não pôde ser verificado aparece como não
verificado. Isso é o diferencial do método, e vale mais que parecer completo.

**Nada de promessa de resultado.** Sem garantia de aprovação, retorno ou
desempenho futuro. Vale a mesma regra do resto do site.

## Antes de publicar

- [ ] `resumo` com até 155 caracteres
- [ ] Corpo começa em `##`, não em `#`
- [ ] `ofertaHref` preenchido
- [ ] Toda afirmação crítica com link para a fonte
- [ ] Nome do arquivo definitivo (a URL não muda depois)
- [ ] Imagem, se houver, em `client/public/artigos/`

## Depois de publicar

O índice `/artigos` e o link no menu aparecem sozinhos assim que existir o
primeiro artigo publicado. Enquanto a pasta só tiver rascunhos, nada disso
entra no site — página de listagem vazia é conteúdo fino e atrapalha.

Vale enviar a URL nova para inspeção no Search Console, em Inspeção de URL →
Solicitar indexação. Acelera bastante a primeira leitura.
