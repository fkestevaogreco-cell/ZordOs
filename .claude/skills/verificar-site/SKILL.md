---
name: verificar-site
description: >
  Faz um healthcheck rápido do site — confirma que está no ar, checa validade do
  certificado SSL, e testa se os links principais da home não estão quebrados. Use
  quando o usuário pedir "verifica se o site tá no ar", "testa o site", "checa o
  certificado", "o site caiu?", "confere os links do site", ou /verificar-site.
---

# /verificar-site — Healthcheck do site

## Pré-requisito

`SITE_URL` no `.env` (mesma variável usada por `/subir-site` e pelo `/carrossel`).
Se não existir, perguntar a URL direto.

---

## Workflow

### Passo 1 — Site está no ar?

```bash
curl -s -o /dev/null -w "%{http_code} (%{time_total}s)" "$SITE_URL"
```

- **200** → no ar, reportar o tempo de resposta
- **3xx** → redirecionamento — seguir e reportar pra onde foi (pode ser esperado,
  ex: redirect de `.com` pra `.com.br`, ou pode ser um erro de configuração — avisar
  os dois casos)
- **4xx/5xx ou sem resposta** → site fora do ar ou com erro — essa é a informação mais
  importante, reportar primeiro e com destaque

### Passo 2 — Certificado SSL

```bash
echo | openssl s_client -servername "<domínio>" -connect "<domínio>:443" 2>/dev/null \
  | openssl x509 -noout -enddate
```

Extrai a data de validade. Se faltar menos de 30 dias pra expirar, alertar — a maioria
dos certificados modernos (Let's Encrypt via hospedagem) renova sozinha, mas vale
confirmar isso com o usuário se a data estiver próxima.

### Passo 3 — Links principais quebrados

Baixar o HTML da home e extrair os links internos (`href="/..."` ou `href="https://<mesmo domínio>..."`):

```bash
curl -s "$SITE_URL" | grep -oE 'href="[^"]+"' | sed 's/href="//;s/"$//'
```

Pra cada link interno único (ignorar âncoras `#`, `mailto:`, `tel:`, links externos),
checar o status:

```bash
curl -s -o /dev/null -w "%{http_code}" "<url-completa>"
```

Reportar só os que não forem 200/3xx. **Não checar links externos** (de outros
domínios) — isso testa a saúde de sites de terceiros, não o site do usuário, e gera
falso alarme se o terceiro estiver temporariamente fora.

### Passo 4 — Resumo

```
Site: <SITE_URL>
✓/✗ No ar: <status> (<tempo>)
✓/✗ SSL: válido até <data> [⚠️ expira em breve]
✓/✗ Links internos: <N> verificados, <M> quebrados
  [lista dos quebrados, se houver]
```

---

## Regras

- Nunca declarar "tudo certo" se qualquer uma das 3 checagens falhou — resumo sempre
  reflete o pior resultado encontrado, não só o que deu certo
- Não testar formulários, login, ou qualquer ação que exija autenticação — isso é um
  healthcheck de leitura, não um teste funcional completo
- Se o site for muito grande (centenas de links na home), avisar e perguntar se quer
  mesmo checar todos ou só uma amostra
