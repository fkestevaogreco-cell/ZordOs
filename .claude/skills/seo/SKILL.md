---
name: seo
description: >
  Roda o ciclo completo de SEO, GEO e Google Ads em 8 etapas: demanda, concorrência, Google
  Meu Negócio, on-page, estratégia de conteúdo, Google Ads, monitoramento e GEO (aparecer em
  respostas de IA como ChatGPT, Gemini, Perplexity). Use quando o usuário pedir "seo", "geo",
  "palavras-chave", "google ads", "aparecer no google", "aparecer no chatgpt", "aparecer nas
  ias", "google meu negócio", "gmb", "analisar concorrência seo", "pesquisa de nicho",
  "google trends".
---

# /seo — Ciclo completo de SEO, GEO e Google Ads

## Dependências

- **Contexto:** `pessoal/sobre-mim.md`
- **Tom:** `pessoal/preferencias.md`
- **Foco atual:** `pessoal/agora.md`
- **Ferramentas:** WebSearch, WebFetch
- **Saída:** `marketing/seo/`

---

## As 8 etapas

### Etapa 1 — DEMANDA: o que o público busca

**Pergunta a responder:** existe demanda de verdade, e como as pessoas procuram por isso?

1. Ler `pessoal/sobre-mim.md` pra puxar produto/serviço, região, público, diferencial
2. Montar uma lista de 30-50 termos-semente, cruzando:
   - Categoria de produto/serviço
   - Intenção (informacional, comercial, transacional)
   - Localização (cidade, região, estado)
   - Contexto de uso do cliente
3. WebSearch por grupo de termos:
   - `"[termo] site:trends.google.com"` pra sazonalidade
   - `"[termo]"` puro, pra ver o que domina (orgânico, ads, maps)
   - `"[termo] related searches"` pra expandir a lista
4. Classificar cada termo:
   - Volume: alto / médio / baixo / residual
   - Intenção: informacional, comercial, transacional, navegacional
   - Dificuldade: quantos concorrentes fortes aparecem
   - Relevância: direta (produto exato), indireta (nicho próximo), tangencial

**Sai em** `marketing/seo/01-pesquisa-demanda.md`: tabela classificada, top 10 prioritários (volume + intenção transacional + baixa concorrência), termos sazonais, o que foi descartado e por quê.

---

### Etapa 2 — CONCORRÊNCIA: quem domina o resultado

**Pergunta a responder:** quem aparece pra essas buscas, e onde estão os buracos?

1. Pegar os top 10 termos da Etapa 1
2. Por termo, via WebSearch:
   - Top 5 orgânicos: quem são, que tipo de página (site, marketplace, blog, diretório)
   - Maps/Local Pack: quem aparece, quantas avaliações, nota
   - Alguém anuncia ali? Com que copy?
3. Pros concorrentes mais relevantes (até 5-8), via WebFetch:
   - Estrutura do site (páginas, blog, catálogo)
   - Title e description das páginas principais
   - Profundidade do conteúdo
   - Tem schema markup?
   - GMB: perfil completo, fotos, posts, avaliações?
4. Mapear:
   - O que ninguém faz bem (gap)
   - Termo sem dono claro (oportunidade)
   - Concorrente forte demais pra atacar de frente (ameaça)
   - O padrão mínimo pra competir (benchmark)

**Sai em** `marketing/seo/02-analise-concorrencia.md`: tabela de concorrentes, mapa de gaps/oportunidades, recomendação de onde atacar primeiro.

---

### Etapa 3 — GMB: Google Meu Negócio

**Pergunta a responder:** o perfil no Maps está otimizado? (é o retorno mais rápido de todos)

1. Buscar o nome do negócio no Google, ver o estado atual do perfil
2. Documentar o que falta preencher ou ajustar:

   **Básico:** nome idêntico ao registrado · categoria principal + secundárias · endereço, telefone, site · horário · área de atendimento

   **Descrição:** até 750 caracteres, com palavra-chave natural, tom conforme `pessoal/preferencias.md`

   **Atributos e serviços:** lista de serviços relevantes + atributos (entrega, atacado, produção própria...)

   **Fotos:** checklist (fachada, interior, produto, equipe, processo) + especificação técnica

   **Posts:** 4 posts iniciais + calendário recorrente

   **Avaliações:** como pedir pros clientes atuais + modelo de resposta (usar `/responder-avaliacoes`)

   **Diretórios:** lista relevante pro nicho + NAP consistente (nome, endereço, telefone) em todos

**Sai em** `marketing/seo/03-google-meu-negocio.md`

---

### Etapa 4 — ON-PAGE: o site otimizado

**Pergunta a responder:** cada página está otimizada pra palavra-chave certa?

1. Levantar a estrutura atual (`site/`, se existir — senão perguntar as páginas)
2. Por página:

   Palavra-chave mapeada por página

   **Meta tags:** title (50-60 caracteres, keyword no início) · description (150-160 caracteres, com CTA) · H1/H2/H3 sugeridos

   **Schema (JSON-LD):** LocalBusiness · Product nos produtos · FAQ se houver seção de perguntas

   **Checklist técnico:** URL amigável · alt text · velocidade · mobile-friendly · sitemap.xml, robots.txt, canonical, Open Graph

   **Linkagem interna:** mapa sugerido

**Sai em** `marketing/seo/04-otimizacao-on-page.md`: tabela página → keyword → title → description → H1, schema pronto pra copiar, checklist com status.

---

### Etapa 5 — CONTEÚDO: construir autoridade

**Pergunta a responder:** o que publicar pra virar referência no nicho?

1. A partir dos termos informacionais da Etapa 1:

   **Pautas evergreen:** 5-10 ideias que respondem dúvida real, cada uma com título, keyword-alvo, estrutura de heading, tamanho estimado

   **Cluster:** página pilar + páginas satélite linkando pra ela

   **Calendário:** prioridade, frequência, formato (post, guia, FAQ, comparativo)

   **Conteúdo local, se fizer sentido:** páginas por área de atendimento, referência geográfica no texto

**Sai em** `marketing/seo/05-estrategia-conteudo.md`

> Essa lista alimenta o `/publicar-tema` — cada pauta vira artigo + carrossel + legendas num comando só.

---

### Etapa 6 — GOOGLE ADS: campanha pronta

**Pergunta a responder:** como estruturar a campanha com os dados já levantados?

1. Objetivo: lead (ligação, WhatsApp, formulário), visita ao site, ou alcance local
2. Estrutura:

   **Search:** um grupo por cluster · 10-15 keywords + negativas + 3 RSAs + extensões por grupo · orçamento, lance, geolocalização

   **Local, se aplicável:** anúncio pro Maps, segmentação por proximidade

   **Display/Remarketing (opcional):** público e formato

3. Copy: tom de `pessoal/preferencias.md`, diferencial real, CTA específico, 15 headlines + 4 descriptions
4. Landing page: o site atual serve, ou precisa de uma página dedicada?

**Sai em** `marketing/seo/06-google-ads.md`: estrutura completa, keywords organizadas, copy pronta, orçamento e configuração.

> O `/anuncio-google` lê esse arquivo e gera o CSV pronto pra importar.

---

### Etapa 7 — MONITORAMENTO: manter o resultado

**Pergunta a responder:** o trabalho continua rendendo depois de feito?

**Toda semana:** posição nos top 10 termos · responder avaliação no GMB · postar no GMB pelo menos 1x

**Todo mês:** revisar Google Ads (CTR, CPC, conversão, custo/lead — usar `/relatorio-ads`) · tráfego orgânico no Search Console · atualizar negativas · publicar 1-2 pautas do calendário · checar diretórios/citações

**A cada trimestre:** repetir a Etapa 2 de forma resumida · atualizar fotos/posts do GMB · revisar a estratégia de conteúdo · olhar novas oportunidades de keyword

**Sai em** `marketing/seo/07-checklist-monitoramento.md`

---

### Etapa 8 — GEO: aparecer quando alguém pergunta pra uma IA

**Pergunta a responder:** quando o cliente pergunta pro ChatGPT/Gemini/Perplexity "qual o melhor X em Y", o negócio aparece?

**Por que importa:** cada vez mais gente pergunta pra IA antes de buscar no Google — quem aparece ali ganha lead qualificado sem pagar ads.

1. **Auditoria:** WebSearch dos top 10 termos em engines de IA, ver se o negócio (ou concorrente) aparece, mapear que fontes a IA cita pro nicho
2. **Conteúdo pensado pra IA:** cada pauta da Etapa 5 responde direto nas primeiras linhas, com dado concreto (número, certificação, endereço, fato verificável), estruturado em formato pergunta/resposta (H2/H3), nunca vago — IA descarta texto genérico
3. **FAQ com schema:** seção de perguntas reais do nicho + FAQPage (JSON-LD), 5-10 perguntas baseadas no que o público pergunta de fato
4. **Menção externa:** IA pesa citação em fonte confiável — diretório, site de avaliação, guest post, menção em blog do nicho, aparição em mídia
5. **Schema reforçado:** LocalBusiness, FAQPage, Product, Article
6. **Monitorar:** a cada 30 dias, testar os top 5 termos no ChatGPT/Gemini/Perplexity, registrar se apareceu, quem apareceu, qual fonte foi citada, ajustar o conteúdo conforme o resultado

**Sai em** `marketing/seo/08-geo-otimizacao-ia.md`: auditoria, FAQ + schema, lista de ações pra ganhar citação, checklist de monitoramento.

---

## Rodando o ciclo

`/seo` sem mais nada: rodar as 8 etapas em sequência, salvando cada saída no arquivo correspondente, com um resumo entre uma etapa e outra antes de seguir.

Só uma etapa: `/seo passo 3` ou `/seo gmb` ou `/seo geo`.

No final, resumo executivo com: top 5 oportunidades, ação prioritária, estimativa de investimento em ads, próximos passos.

---

## Regras

- Pesquisa sempre real (WebSearch/WebFetch) — nunca inventar volume ou dado de concorrência
- Copy e texto seguem `pessoal/preferencias.md` à risca
- Termos em português do Brasil, como o público realmente busca
- Dado que não dá pra confirmar: declarar que é estimativa e explicar a lógica usada
- Foco em intenção comercial/transacional pro negócio local (B2B ou B2C)
- Schema sempre em JSON-LD
- Nunca inventar CPC ou estimativa de custo de ads sem base real
