---
name: publicar-tema
description: >
  Pega um tema (escolhido ou tirado da estratégia de conteúdo do SEO) e entrega o pacote
  completo: artigo de blog, carrossel-resumo (via `/carrossel`) e legendas pra Instagram,
  Facebook e LinkedIn, tudo linkado entre si. Use quando o usuário pedir "publicar tema",
  "gera o conteúdo do tema X", "transforma esse tema em post", "cria o conteúdo completo",
  ou /publicar-tema.
---

# /publicar-tema — De um tema ao pacote de conteúdo completo

Skill orquestradora: um tema entra, saem o artigo, o carrossel e três legendas, todos conectados entre si.

## Dependências

- **Lista mestra de temas:** `marketing/seo/05-estrategia-conteudo.md` (produzida pelo `/seo`)
- **Pesquisas de apoio:** `marketing/seo/01-pesquisa-demanda.md`, `02-analise-concorrencia.md`, `08-geo-otimizacao-ia.md`
- **Carrossel:** chama `.claude/skills/carrossel/SKILL.md` na fase certa
- **Blog:** pasta `site/` — formato varia (Astro em `site/astro-site/src/content/blog/`, WordPress, outro). Sem site ainda, perguntar antes de seguir
- **Contexto:** `pessoal/sobre-mim.md`, `marca/guia.md`

---

## Workflow

### Passo 0 — Qual tema

Tema já veio explícito → usa direto.

Nada veio → ler `marketing/seo/05-estrategia-conteudo.md`, listar página pilar + satélites, perguntar:
> "Qual desses tá na fila?"

Checar antes quais já viraram post (olhar a pasta do blog) pra não duplicar.

### Passo 1 — Pesquisa rápida antes de escrever

- Keyword principal e variações: `01-pesquisa-demanda.md`
- Como a concorrência trata o assunto: `02-analise-concorrencia.md` — serve pra fugir do óbvio
- Ângulo pra IA generativa, se fizer sentido: `08-geo-otimizacao-ia.md`

### Passo 2 — O artigo

**Destino conforme o stack do site:**
- Astro: `site/astro-site/src/content/blog/<slug>.md`
- WordPress: markdown pronto pro usuário colar no editor
- Outro stack: perguntar

**Slug:** kebab-case, curto, sem stopword. "Como conservar carne salgada no restaurante" → `conservar-carne-salgada`.

**Frontmatter (quando o stack usa markdown):**
```yaml
---
title: "Título que puxa pra keyword, mas não robótico"
description: "150-160 caracteres, keyword + benefício pro leitor"
publishedAt: YYYY-MM-DD
author: "<nome de pessoal/sobre-mim.md>"
keywords:
  - keyword principal
  - variação 1
  - variação 2
draft: true
---
```

**Sempre nasce como `draft: true`.** Vira `false` só quando o usuário aprovar.

**Esqueleto do artigo (800-1500 palavras):**
1. Abertura (1-2 parágrafos) com o problema real, sem enrolar
2. H2 explicando o quê e o porquê
3. H2 prático — como fazer, o que observar
4. H2 opcional de comparação ou detalhe técnico
5. H2 conectando com o que o negócio oferece, sem virar anúncio
6. CTA final (WhatsApp, formulário, contato)

**Regras de escrita** (`pessoal/sobre-mim.md` manda):
- Sem inglês de marketing que o público não usa
- Frase curta, parágrafo de 2-4 linhas
- Concreto sempre que der: número, data, certificação
- Markdown limpo (`##`/`###`, listas com `-`, link em `[texto](url)`)

### Passo 3 — O carrossel-resumo

**Sem pedir permissão**, chamar `.claude/skills/carrossel/SKILL.md` (carrossel texto puro).

**Pasta:** `marketing/conteudo/<slug-do-blog>-<YYYY-MM-DD>/`

- Capa: título do blog ou variação mais curta
- Slides do meio: um ponto-chave do artigo por slide, frase natural (não bullet seco)
- Último slide: CTA pro blog, com a URL `<dominio>/blog/<slug>`

Capa: respeitar a sequência alternada do feed (checar a última pasta criada em `marketing/conteudo/`).

### Passo 4 — As três legendas

Tudo em `marketing/conteudo/<pasta-do-carrossel>/`:

**`legenda.md`** (Instagram + Facebook, mesmo texto):
- Hook na primeira linha
- 2-3 parágrafos de contexto, frase natural
- CTA pro carrossel + CTA pro blog (link na bio ou URL direta)
- Diferenciais + contato
- 10-15 hashtags (público, nicho, local)

**`legenda-linkedin.md`** (mais formal, sem hashtag em excesso):
- Hook mais analítico
- 3-5 parágrafos, texto longo é aceito ali
- Sem "arraste pro lado" — comportamento de feed diferente
- CTA: link direto pro blog
- Fecha com uma linha de quem é, sem oferta forçada
- No máximo 3 hashtags de nicho profissional

### Passo 5 — Fechar com checklist

```
✓ Blog: <caminho>/<slug>.md (draft)
✓ Carrossel: marketing/conteudo/<pasta>/ (carrossel.html + render.js + PNGs)
✓ legenda.md (Insta + FB)
✓ legenda-linkedin.md

Pra publicar:
1. Revisar o blog → draft: false
2. Rebuild do site ou colar no CMS
3. cd marketing/conteudo/<pasta> && node render.js
4. Postar Insta + FB com legenda.md (ou usar /aprovar-post)
5. Postar LinkedIn com legenda-linkedin.md
```

---

## Quando essa skill não é a certa

- Carrossel avulso sem blog por trás → `/carrossel` direto
- Só atualizar um artigo que já existe → editar o `.md` na mão
- Frase de impacto isolada → `/carrossel`

## Princípios

1. O artigo é a peça-mãe — carrossel e legendas derivam dele, nunca o contrário
2. Tudo aponta pra tudo: carrossel linka blog, blog tem CTA de contato
3. Nasce sempre em draft — ninguém publica sozinho sem revisão (ou via `/aprovar-post`)
4. Linguagem de gente de verdade, sem corporativês
