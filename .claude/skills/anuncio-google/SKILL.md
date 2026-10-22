---
name: anuncio-google
description: >
  Monta a estrutura inteira de uma campanha do Google Ads a partir de um briefing ou da
  pesquisa de SEO, e entrega em CSV pronto pra importar no Google Ads Editor: campanhas,
  grupos por cluster de palavra-chave, RSAs, extensões e negativas. Lê o briefing de
  `pessoal/sobre-mim.md` e, se existir, da pesquisa de SEO. Use quando o usuário pedir
  "criar campanha google ads", "anúncio google", "google ads", "csv pro google ads",
  ou /anuncio-google.
---

# /anuncio-google — Campanha pronta pro Google Ads Editor

Do briefing direto pro CSV — sem montar grupo por grupo na interface do Google.

## Dependências

- **Contexto:** `pessoal/sobre-mim.md` (produto, público, região, diferenciais)
- **Tom:** `pessoal/preferencias.md`
- **Pesquisa de SEO, se existir:** `marketing/seo/01-pesquisa-demanda.md`, `06-google-ads.md`
- **Saída:** `marketing/campanhas/google-ads-<YYYY-MM-DD>/`

---

## Workflow

### Passo 1 — Briefing

Sem briefing pronto, perguntar:

1. O que vai anunciar (1-3 linhas)
2. Quem é o público (perfil, dor que resolve)
3. Raio de atendimento e cidade-base
4. Orçamento diário
5. Objetivo (ligação, WhatsApp, formulário, visita física)
6. Site ou landing page já existe? Qual URL?

Já existindo `marketing/seo/06-google-ads.md` (saída do `/seo`): usar como base, pular o que já estiver respondido.

### Passo 2 — Palavras-chave

Com `marketing/seo/01-pesquisa-demanda.md` pronto: usar os 10-20 termos prioritários (intenção comercial/transacional).

Sem pesquisa prévia:
- Gerar 30-50 termos-semente a partir do briefing
- WebSearch por grupo pra ver concorrência e sazonalidade
- Ficar só com intenção comercial/transacional (informacional fica pra SEO orgânico)
- Agrupar em clusters (ex.: "feijoada-buffet", "feijoada-restaurante", "feijoada-evento")

### Passo 3 — Estrutura

**Padrão pra negócio local:**

```
Campanha 1: <Negócio> — Search Geral
├── Grupo: <Cluster 1>
│   ├── 10-15 keywords (exata + frase + ampla modificada)
│   ├── 3 RSAs (15 headlines + 4 descriptions cada)
│   └── 10-15 negativas no grupo
├── Grupo: <Cluster 2>
│   └── ...
└── (um grupo por cluster)

Campanha 2: <Negócio> — Local (opcional)
├── Anúncios pro Maps
└── Segmentação por proximidade

Negativas globais: termos genéricos fora do escopo + marcas concorrentes
```

### Passo 4 — Os anúncios (RSAs)

3 RSAs por grupo:

**15 headlines:**
- 5 com a keyword principal
- 3 com diferencial concreto (certificação, prazo, garantia)
- 3 com CTA ("Peça orçamento", "Chama no WhatsApp", "Fala com a gente")
- 2 com prova social (tempo de mercado, clientes atendidos)
- 2 de proposta de valor mais genérica

**4 descriptions** (90 caracteres cada):
- 1 institucional + CTA
- 1 com diferencial técnico + CTA
- 1 com urgência, se couber
- 1 com prova social + CTA

**Limites do Google:** headline até 30 caracteres, description até 90. Sem emoji, sem caixa alta, sem repetir palavra. Sem superlativo não comprovado ("o melhor", "número 1") sem base real.

Tom conforme `pessoal/preferencias.md`.

### Passo 5 — Extensões

- **Sitelinks** (4-6): "Quem somos", "Catálogo", "Cases", "WhatsApp", "Como chegar"
- **Chamada:** telefone de `pessoal/sobre-mim.md`
- **Snippets:** lista de serviços/categorias
- **Preço**, se fizer sentido: faixas dos serviços principais
- **Promoção**, se houver: desconto ou condição especial

### Passo 6 — Configuração da campanha

Arquivo `configuracoes.md` com:

- Estratégia de lance: "Maximizar conversões" no início, migrar pra tCPA depois de 30+ conversões
- Orçamento diário do briefing
- Raio geográfico a partir do endereço
- Idioma: português
- Ajuste por dispositivo (mobile +0%, desktop +0%, tablet -20% como ponto de partida)
- Programação de dias/horário conforme o negócio
- Conversões a configurar: clique no WhatsApp, formulário, ligação, tempo no site

### Passo 7 — Gerar os CSVs

```
marketing/campanhas/google-ads-<YYYY-MM-DD>/
  campanhas.csv
  grupos.csv
  keywords.csv
  keywords-negativas.csv
  anuncios.csv
  extensoes-sitelinks.csv
  extensoes-chamadas.csv
  extensoes-snippets.csv
  extensoes-preco.csv (se houver)
  configuracoes.md
  README.md   ← passo a passo de importação
```

Colunas seguindo o padrão de importação do Google Ads Editor (Campaign, Ad group, Keyword, Match type, Status, Max CPC, etc.).

### Passo 8 — Fechar

```
✓ Campanha pronta: marketing/campanhas/google-ads-<YYYY-MM-DD>/

- <N> campanhas · <N> grupos · <N> keywords (+<N> negativas) · <N> RSAs

Pra subir:
1. Abrir o Google Ads Editor
2. Conta → Importar → CSV
3. Ordem: campanhas → grupos → keywords → anúncios → extensões
4. Tudo entra pausado — ativar manualmente depois de revisar
5. Confirmar que as conversões estão configuradas no Tag Manager
6. Ativar quando estiver tudo certo

Orçamento sugerido pra começar: R$<X>/dia por <Y> dias antes de avaliar.
```

---

## Regras

- **Nunca inventar CPC.** Se perguntarem quanto vai custar, dizer que depende da concorrência real e dar uma faixa via WebSearch.
- **Sempre nasce pausado.** Quem ativa é o usuário, depois de revisar.
- **Sem anúncio pra termo informacional** — "como fazer X" quase não converte, isso é papel do SEO orgânico.
- **Match type:** Phrase na maioria, Exact pros termos mais valiosos, Broad só com dado histórico consistente.
- **Lista de negativa global é obrigatória** — sem ela, o orçamento vaza em busca irrelevante.
- **Sem conversão configurada, o Google não otimiza nada** — avisar e pedir esse setup antes de ativar.
- Copy sempre seguindo `pessoal/preferencias.md`, sem jargão que o público não usa.
