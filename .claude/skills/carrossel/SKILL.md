---
name: carrossel
description: >
  Cria carrosséis e posts avulsos pra Instagram, TikTok e LinkedIn já na identidade visual
  configurada. Gera HTML e renderiza em PNG via Playwright, com legenda pronta no final.
  Cobre carrossel em texto puro, carrossel com foto (real ou gerada por IA) e post único.
  Use quando o usuário pedir "carrossel", "post", "conteúdo pro instagram", "criar imagem",
  "gerar foto", "post educativo", ou /carrossel.
---

# /carrossel — Peça visual pronta pra postar

A skill mais usada do sistema: tema entra, sai HTML + PNGs + legenda, no padrão visual configurado.

## Dependências

- **Identidade:** `marca/guia.md` — ler antes de desenhar qualquer coisa
- **Contexto:** `pessoal/sobre-mim.md`
- **Renderização:** Playwright (via `render.js` ou `npx playwright screenshot`)
- **Foto por IA (opcional):** API da OpenAI, só se a chave estiver configurada
- **Saída:** `marketing/conteudo/<tipo>-<tema>-<YYYY-MM-DD>/`

---

## O que essa skill entrega

Primeiro passo é identificar qual dos três formatos serve:

### Carrossel em texto
- Pra conteúdo educativo, dica, lista, explicação
- Formato 1080x1350 (4:5), sempre
- Tipografia limpa, cores alternando, sem foto

### Carrossel com foto
- Pra apresentação visual, capa com personagem, conteúdo mais aspiracional
- Formato 1080x1350
- Capa com gradiente sobre a foto + slides internos no padrão alternado
- Foto pode vir de IA (OpenAI) ou ser real, enviada pelo usuário

### Post único
- Frase de impacto, número/estatística, depoimento, bastidor
- Formato 1080x1350
- Estilo varia com o conteúdo: citação, número grande, foto com overlay

Tipo não estiver claro, perguntar:
> "Que formato? (1) carrossel texto, (2) carrossel com foto, (3) post único"

---

## Linguagem visual

O estilo default é editorial e contido: sem clip-art, sem emoji decorativo, sem gradiente genérico de IA. `marca/guia.md` manda sempre que estiver preenchido; em branco ou vago, usar os defaults abaixo (não precisa parar pra pedir `/instalar` — o `/carrossel` funciona sozinho).

### Tipografia

- **Fonte:** Manrope (Google Fonts), pesos 400 a 800
- **Título de capa:** 88-104px, peso 800, line-height 0.98, letter-spacing -0.03em
- **H2 (slide interno):** 58-70px, peso 700, line-height 1.05, letter-spacing -0.03em
- **Corpo:** 20-24px, peso 500, line-height 1.5
- **Eyebrow:** 13-15px, peso 700, caixa alta, letter-spacing 0.2em, cor de destaque
- **Contador de página** (canto superior direito): 14-16px, peso 500, letter-spacing 0.16em, cor neutra
- **Handle (@):** 15-18px, peso 600

Regra de kerning: título grande fecha o espaçamento, eyebrow pequeno abre. É esse contraste que dá o acabamento.

### Cores (quando o design-guide não define)

Paleta curta: um fundo escuro, uma alternativa clara, **uma** cor de destaque. Nunca disputa de quatro cores.

- Escuro: `#15171B`
- Claro: `#F3EFE7`
- Texto sobre escuro: `#F6F4EF`
- Texto sobre claro: `#1C1C1C` (títulos) e `#4A4A4A` (corpo)
- Destaque: a cor da marca, uma só

### Elementos recorrentes

- Traço fino (3-4px de altura, 60-80px de largura, cor de destaque) separando eyebrow de h2
- Logo no canto superior esquerdo + contador no direito, em todo slide
- Linha de 1px `rgba(255,255,255,0.12)` separando rodapé do conteúdo, em fundo escuro
- Selo circular (200x200, borda 3px translúcida, leve rotação) pra data ou dado em destaque
- Tag/pill em caixa alta com espaçamento largo, pra marcar categoria do slide
- Margem lateral padrão: 70-100px

### Layouts com nome

Vocabulário fixo de layout, pra variar com intenção:

- **CAPA** — eyebrow + título + subtítulo + handle. Fundo: foto com gradiente (`rgba(12,10,9,0.55)` a `rgba(12,10,9,0.85)`) ou cor sólida
- **DIVISÃO** — foto de um lado (50%), texto do outro (eyebrow + h2 + traço + parágrafo)
- **PAR** — texto em cima, duas fotos lado a lado embaixo (ou uma foto larga)
- **DESTAQUE** — número grande (200-320px, peso 800, cor de destaque) + h2 + parágrafo de apoio
- **CITAÇÃO** — aspas grandes como marca d'água + frase em h2 + atribuição
- **FECHAMENTO** — fundo na cor de destaque, logo centralizado, headline curta, CTA, contato

**Ritmo:** alternar fundo escuro, claro e cor de destaque. Nunca repetir o mesmo fundo em dois slides seguidos.

### Sequência de capas no feed

Antes de definir a capa nova, olhar qual foi a última publicada:
- última clara → essa vem foto/escura
- última foto/escura → essa vem na cor de destaque
- última na cor de destaque → essa vem clara
- nunca repetir o tipo de capa duas vezes seguidas

Sem certeza de qual foi a última, perguntar.

### Linguagem (crítico)

`pessoal/sobre-mim.md` manda. Regra geral: frase natural, sem jargão de marketing. Quase ninguém fala "ticket médio" ou "performance" no dia a dia — escrever como o público fala.

### Legenda — sempre junto, nunca por pedido

Terminou de renderizar os PNGs, já gera a legenda em `legenda.md` na mesma pasta, sem esperar pedido:

1. Hook (pergunta ou afirmação forte)
2. Contexto em 1-2 frases
3. CTA pro carrossel ("Arraste pro lado e confere")
4. Diferencial + contato
5. 10-15 hashtags (público + nicho + local, se fizer sentido)

---

## Como fazer

### Passo 1 — Entender antes de desenhar

1. Ler `pessoal/sobre-mim.md`
2. Ler `marca/guia.md` (cor, fonte, logo)
3. Decidir o formato (texto / foto / único)
4. Fechar tema e ângulo

### Passo 2 — Texto primeiro

**Carrossel (5-10 slides):**
- Capa: título de até 8 palavras, oferecer 3 opções
- Slides internos: uma ideia por slide, frase corrida, sem bullet seco
- Último slide: CTA + logo

**Post único:**
- Frase principal em destaque
- Contexto de apoio, se precisar
- CTA discreto

**Parar aqui e mostrar o texto completo. Só desenhar depois do aval.**

### Passo 3 — Foto por IA (só se o tipo pedir)

1. Prompt em inglês (a API responde melhor assim)
2. Modelo de prompt:
```
Professional [TIPO] photography of [ASSUNTO],
[DETALHES], [AMBIENTE],
[LUZ] lighting, shallow depth of field,
shot from [ÂNGULO], [ESTÉTICA],
editorial quality
```
3. Gerar (se `scripts/gerar-imagem.js` existir):
```bash
node --env-file=.env scripts/gerar-imagem.js "PROMPT" "marketing/conteudo/<pasta>/foto-<nome>.png"
```
Script ainda não existe: orientar a configurar `OPENAI_API_KEY` no `.env` e criar o script, ou usar outra ferramenta.

4. Mostrar a foto antes de seguir. Reprovada → ajustar prompt e gerar de novo.

### Passo 4 — HTML + PNG

1. Um único `carrossel.html` com todos os slides como `<div class="slide">`, CSS inline, Google Fonts como única dependência externa:
   - Cor e tipografia de `marca/guia.md`
   - Pelo menos 2 layouts diferentes no mesmo carrossel
   - Logo + contador em todo slide
   - Último slide na cor principal, com logo e CTA

   **Foto dentro do HTML:**
   ```html
   <div class="slide" style="
     background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url('foto-xxx.png');
     background-size: cover;
     background-position: center;
   ">
     <div class="content"><h2>Texto sobre a foto</h2></div>
   </div>
   ```

2. `render.js` na mesma pasta: script Node + Playwright, abre o HTML, tira print de cada `.slide` em 1080x1350. Reaproveitar `node_modules` de uma pasta anterior quando der (sem `npm install` de novo):
```bash
NODE_PATH="<pasta-com-node_modules>/node_modules" node render.js
```

3. Mostrar slide 1, 2 e o fechamento renderizados. Aprovado → mostrar os do meio.

### Passo 5 — Organizar a entrega

```
marketing/conteudo/<tipo>-<tema>-<YYYY-MM-DD>/
  texto.md              ← texto aprovado + legenda
  foto-<nome>.png       ← se tiver foto gerada
  carrossel.html
  render.js
  instagram/
    slide-01.png → slide-NN.png
  tiktok/ (só se pedido — 9:16)
    slide-01.png → ...
  legenda.md
  legenda-linkedin.md   ← se pedido
```

### Passo 6 — Puxar pro blog (opcional)

Depois de entregar o visual, perguntar:
> "Esse tema dá pra virar artigo de blog também. Crio a versão pro SEO?"

Sim → chamar `/publicar-tema` com o mesmo tema.

---

## Regras

- `marca/guia.md` sempre antes de qualquer visual
- Carrossel: 1080x1350 sempre. TikTok/Reels: 1080x1920, só quando pedido
- Linguagem segue `pessoal/sobre-mim.md` à risca
- Checar a sequência de capa no feed antes de fechar a capa nova
- Legenda sempre automática, sempre em `legenda.md`
- Foto IA: aprovação antes de usar, prompt em inglês, nunca rosto identificável
- `carrossel.html` único + `render.js` na mesma pasta, CSS inline
- Reaproveitar `node_modules` em vez de reinstalar a cada pasta
- Variar layout entre slides, nunca repetir o mesmo em sequência
