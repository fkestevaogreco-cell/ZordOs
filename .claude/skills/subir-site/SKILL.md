---
name: subir-site
description: >
  Publica a versão atual do site no ar — via Cloudflare (grátis, pra quem ainda não tem
  hospedagem), via FTP (hospedagem tradicional, ex: Hostinger) ou via git push (deploy
  automático tipo Netlify/Vercel), detectando qual se aplica.
  Confirma que o site subiu de verdade checando a URL ao final. Use quando o usuário
  disser "sobe o site", "publica o site", "atualiza o site no ar", "site atualizado",
  ou /subir-site.
---

# /subir-site — Publicar o site atualizado

## Dependências

- **Contexto do negócio:** `pessoal/sobre-mim.md`

---

## Passo 1 — Detectar o tipo de hospedagem

Primeira vez nesse projeto, decidir entre os três modos:

- Se existe `wrangler.jsonc` na raiz do projeto → **modo Cloudflare**
- Se `.env` tem `FTP_HOST`/`FTP_USER`/`FTP_PASS`/`FTP_REMOTE_PATH` preenchidos → **modo FTP**
- Se a pasta é um repositório git com remote no GitHub/GitLab → perguntar: "Esse
  repositório tem deploy automático configurado (Netlify, Vercel, GitHub Pages)? Se
  sim, basta eu subir o código que o próprio serviço publica." → se confirmado,
  **modo Git**
- Se nenhum dos dois estiver claro, perguntar diretamente: "Como seu site é publicado
  hoje — você sobe arquivo por FTP, ou tem um serviço (Netlify/Vercel) que publica
  sozinho quando você dá push no GitHub?"
- Se o usuário ainda não tem hospedagem nenhuma → sugerir o **modo Cloudflare**: é
  grátis, aguenta bastante visita e aceita domínio próprio depois.

Depois de descobrir, registrar a resposta na seção "Específico desse projeto" do
`CLAUDE.md` (ver convenção em `/novo-projeto`), pra não perguntar de novo.

---

## Modo Cloudflare (grátis)

O site sobe como arquivos estáticos num Worker da Cloudflare. Plano gratuito, sem cartão.

### Pré-requisitos (uma vez só)

1. Conta grátis em cloudflare.com (o usuário cria; guiar uma tela por vez se precisar)
2. Node.js instalado (`node --version`). Sem ele, mandar baixar a versão LTS em nodejs.org
3. Login da Cloudflare no terminal: `npx wrangler@4 login`. Abre o navegador, o usuário
   clica em "Allow" e volta
4. Criar `wrangler.jsonc` na raiz do projeto:
   ```jsonc
   // Publicar: npx wrangler@4 deploy
   {
     "name": "<slug>",                  // só letras minúsculas, números e hífen
     "compatibility_date": "<data de hoje, AAAA-MM-DD>",
     "assets": {
       "directory": "./<pasta-do-site>",   // ex: ./sites/doce-oficio
       "html_handling": "auto-trailing-slash",
       "not_found_handling": "none"
     },
     "workers_dev": true
   }
   ```

### Passo 2 — Conferir o que vai subir

Cada arquivo pode ter no máximo 25 MiB. Vídeo maior que isso precisa ser comprimido antes.
Arquivo que está na pasta do site mas não deve subir (rascunho, original pesado) vai
listado em `<pasta-do-site>/.assetsignore`, um por linha.

### Passo 3 — Publicar

```bash
npx wrangler@4 deploy
```

No fim, o comando mostra o endereço do site (`https://<slug>.<subdominio>.workers.dev`).
Na primeira vez, salvar esse endereço como `SITE_URL` no `.env`.

**Domínio próprio (opcional):** o domínio precisa estar adicionado na mesma conta da
Cloudflare. Depois, no painel: Workers & Pages → o projeto → Settings → Domains & Routes →
Add → Custom domain. Guiar o usuário tela por tela.

---

## Modo FTP

### Pré-requisitos (uma vez só)

`.env` na raiz com:
```
FTP_HOST=
FTP_USER=
FTP_PASS=
FTP_REMOTE_PATH=     # ex: /public_html
SITE_URL=            # ex: https://seudominio.com.br — pra validar no final
```

Se faltar, pedir pro usuário buscar essas credenciais no painel da hospedagem
(geralmente em "Contas FTP" ou "Gerenciador de Arquivos" → "Detalhes de FTP").

### Passo 2 — Identificar a pasta local do site

Perguntar (ou já saber, se registrado no `CLAUDE.md`): "Qual pasta local tem os
arquivos do site prontos pra subir?" (ex: `site/`, `dist/`, `build/` — depende de
como o site foi feito).

### Passo 3 — Enviar

```bash
node --env-file=.env scripts/subir-site.js <pasta-local>
```

Isso envia todos os arquivos da pasta pro `FTP_REMOTE_PATH`, sobrescrevendo o que já
existir no servidor (não apaga arquivos que só existem no servidor — se o pedido for
"limpar o que não existe mais localmente", avisar que isso precisa ser feito manualmente
por segurança).

---

## Modo Git

### Pré-requisitos (uma vez só)

Repositório já conectado a um serviço de deploy automático (Netlify/Vercel/GitHub
Pages) a partir do branch `main`. `SITE_URL` no `.env` pra validar no final.

### Passo 2 — Commit e push

```bash
git add -A
git commit -m "atualiza site"
git push origin main
```

Se não houver nada pra commitar, avisar que o site já está com a versão mais recente
do código — não há o que subir.

### Passo 3 — Aguardar o deploy

Deploy automático leva de alguns segundos a ~2 min dependendo do serviço. Esperar e
seguir pro Passo 4 (comum aos três modos).

---

## Passo 4 — Confirmar que subiu de verdade (comum aos três modos)

```bash
curl -sf -o /dev/null -w "%{http_code}" "$SITE_URL"
```

Esperar HTTP 200 (timeout de 5 min no modo Git, até 1 min no modo Cloudflare na primeira publicação, imediato no modo FTP já que não tem
build/deploy assíncrono). **Nunca reportar "site publicado" sem essa checagem** —
só porque o upload/push não deu erro não significa que o site está servindo a versão
nova (cache de CDN, erro de build silencioso, etc.).

Resumo final:
```
✓ Site publicado: <SITE_URL>
Modo: [Cloudflare | FTP | Git] · Verificado: HTTP 200
```

---

## Regras

- Nunca subir sem confirmar que a pasta/commit corresponde ao que o usuário quer
  publicar (se o pedido for ambíguo, perguntar o que exatamente deve ir pro ar)
- No modo FTP, nunca apagar arquivos do servidor automaticamente — só sobrescrever
- Se a checagem final (Passo 4) não retornar 200, reportar o problema e não declarar
  sucesso — pode ser cache, DNS, ou falha silenciosa no upload
