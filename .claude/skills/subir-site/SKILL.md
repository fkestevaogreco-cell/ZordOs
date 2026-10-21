---
name: subir-site
description: >
  Publica a versão atual do site no ar — via FTP (hospedagem tradicional, ex: Hostinger)
  ou via git push (deploy automático tipo Netlify/Vercel), detectando qual se aplica.
  Confirma que o site subiu de verdade checando a URL ao final. Use quando o usuário
  disser "sobe o site", "publica o site", "atualiza o site no ar", "site atualizado",
  ou /subir-site.
---

# /subir-site — Publicar o site atualizado

## Dependências

- **Contexto do negócio:** `pessoal/sobre-mim.md`

---

## Passo 1 — Detectar o tipo de hospedagem

Primeira vez nesse projeto, decidir entre os dois modos:

- Se `.env` tem `FTP_HOST`/`FTP_USER`/`FTP_PASS`/`FTP_REMOTE_PATH` preenchidos → **modo FTP**
- Se a pasta é um repositório git com remote no GitHub/GitLab → perguntar: "Esse
  repositório tem deploy automático configurado (Netlify, Vercel, GitHub Pages)? Se
  sim, basta eu subir o código que o próprio serviço publica." → se confirmado,
  **modo Git**
- Se nenhum dos dois estiver claro, perguntar diretamente: "Como seu site é publicado
  hoje — você sobe arquivo por FTP, ou tem um serviço (Netlify/Vercel) que publica
  sozinho quando você dá push no GitHub?"

Depois de descobrir, registrar a resposta na seção "Específico desse projeto" do
`CLAUDE.md` (ver convenção em `/novo-projeto`), pra não perguntar de novo.

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
seguir pro Passo 4 (comum aos dois modos).

---

## Passo 4 — Confirmar que subiu de verdade (comum aos dois modos)

```bash
curl -sf -o /dev/null -w "%{http_code}" "$SITE_URL"
```

Esperar HTTP 200 (timeout de 5 min no modo Git, imediato no modo FTP já que não tem
build/deploy assíncrono). **Nunca reportar "site publicado" sem essa checagem** —
só porque o upload/push não deu erro não significa que o site está servindo a versão
nova (cache de CDN, erro de build silencioso, etc.).

Resumo final:
```
✓ Site publicado: <SITE_URL>
Modo: [FTP | Git] · Verificado: HTTP 200
```

---

## Regras

- Nunca subir sem confirmar que a pasta/commit corresponde ao que o usuário quer
  publicar (se o pedido for ambíguo, perguntar o que exatamente deve ir pro ar)
- No modo FTP, nunca apagar arquivos do servidor automaticamente — só sobrescrever
- Se a checagem final (Passo 4) não retornar 200, reportar o problema e não declarar
  sucesso — pode ser cache, DNS, ou falha silenciosa no upload
