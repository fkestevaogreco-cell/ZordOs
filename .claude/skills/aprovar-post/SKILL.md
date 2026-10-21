---
name: aprovar-post
description: >
  Publica de verdade um conteúdo já pronto (criado por `/publicar-tema`): tira o blog do
  draft, copia os PNGs do carrossel pro site, sobe no GitHub (deploy automático), confere
  que foi ao ar e posta o carrossel no Instagram e Facebook via Meta Graph API. Use quando
  o usuário disser "aprovar post X", "publicar o post do tema Y", "/aprovar-post X", ou
  quiser disparar a publicação de algo que o /publicar-tema já criou.
---

# /aprovar-post — Do conteúdo pronto ao feed no ar

A ponte entre "já escrevi tudo" e "já está publicado": site, Instagram e Facebook, em sequência.

## Quando não rodar

- Conteúdo ainda não existe → `/publicar-tema` primeiro
- Usuário ainda revisando → só roda depois do "aprovado"/"pode postar" explícito
- Site sem deploy automático ou Meta API sem configurar → resolver o setup abaixo antes

## Setup (uma vez só)

- `.env` na raiz com `META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID`, `SITE_URL`
- Site com deploy automático a partir do `main` (Netlify, Vercel, etc.)
- Conta Instagram Business conectada à Página do Facebook
- Permissões corretas no Meta App
- `scripts/postar-instagram.js` e `scripts/postar-facebook.js` prontos

Falta algo disso: parar e indicar o guia de setup (criar `marketing/automacao-meta-setup.md` se ainda não existir).

## Como chamar

`/aprovar-post <slug>` — nome do arquivo do blog, sem `.md`. Ex.: `/aprovar-post como-conservar-produto`.

Sem slug: listar os posts em draft e perguntar qual.

## Workflow

### Passo 1 — Achar as peças

- Blog: `site/.../blog/<slug>.md`
- Carrossel: `marketing/conteudo/<slug>-*` (data no sufixo da pasta)
- PNGs em `<pasta>/instagram/slide-XX.png` (2 a 10)
- `legenda.md` e `legenda-linkedin.md` existindo

Faltou algo: parar e relatar o que falta.

### Passo 2 — Mostrar e confirmar

Mostrar título, número de slides, as primeiras linhas da legenda e a URL final.

> "Confirma a publicação? (sim/não)"

Só segue com um sim explícito.

### Passo 3 — Tirar do draft

`draft: true` → `draft: false` no frontmatter.

### Passo 4 — Levar os PNGs pro site

De `marketing/conteudo/<slug>-<data>/instagram/` pra `site/.../public/img/posts/<slug>/`. Criar a pasta se faltar, sobrescrever se já existir.

### Passo 5 — Subir

```bash
git add site/<caminho>/blog/<slug>.md site/<caminho>/public/img/posts/<slug>/
git commit -m "publicar: <título>"
git push origin main
```

### Passo 6 — Esperar o deploy

Deploy automático demora ~1-2 min. Confirmar com:

```bash
curl -sf -o /dev/null -w "%{http_code}" "$SITE_URL/blog/$slug/"
```

Esperar 200 (até 5 min). Conferir também que a primeira imagem está acessível:

```bash
curl -sf -o /dev/null -w "%{http_code}" "$SITE_URL/img/posts/$slug/slide-01.png"
```

Sem isso, a Meta API não acha a imagem pra postar (ela busca por URL pública).

### Passo 7 — Instagram

```bash
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<slug>-<data>
```

Guardar o id do post. Deu erro: **não seguir pro Facebook** — relatar e parar aqui.

### Passo 8 — Facebook

```bash
node --env-file=.env scripts/postar-facebook.js marketing/conteudo/<slug>-<data>
```

Guardar o id do post.

### Passo 9 — LinkedIn (manual por enquanto)

API de empresa do LinkedIn pede aprovação demorada, então:

```
LinkedIn: cola esse texto em https://linkedin.com/in/<seu-perfil>:
<conteúdo de legenda-linkedin.md>
```

### Passo 10 — Fechar

```
✓ Publicado: <título>

Site:      <SITE_URL>/blog/<slug>/
Instagram: <link>
Facebook:  <link>
LinkedIn:  pendente — texto pronto, postar manual
```

## Se algo falhar

- Push falhou: reverte `draft: false` pra `true`, relata, para
- Deploy não subiu em 5 min: relata e pergunta se segue mesmo assim ou aborta
- Instagram falhou: para e relata (site e blog já foram ao ar, só o post do feed ficou pra trás)
- Facebook falhou com Instagram OK: relata e sugere tentar só o Facebook de novo depois

## Princípios

1. Nada irreversível roda sem confirmação humana explícita — o Passo 2 nunca é pulado
2. Rodar de novo com o mesmo slug deve perceber que já foi publicado e perguntar se é repostagem ou só atualização
3. Pré-requisito faltando = abortar e dizer exatamente o que falta
4. Cada passo relata o que está fazendo e o resultado
