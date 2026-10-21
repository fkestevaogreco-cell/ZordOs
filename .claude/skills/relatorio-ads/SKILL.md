---
name: relatorio-ads
description: >
  Lê os exports de Google Ads e Meta Ads (CSV ou print) e devolve um relatório semanal com
  KPIs, destaques de criativos, alertas (orçamento queimando, CTR caindo, conversão sumindo)
  e o que fazer na semana seguinte. Use quando o usuário pedir "relatório de ads", "relatório
  de campanha", "como foram os ads", "performance da semana", "relatorio meta", "relatorio
  google ads", ou /relatorio-ads.
---

# /relatorio-ads — Relatório semanal de Google + Meta Ads

Pega o export cru das duas plataformas e devolve algo que o dono entende sem abrir o painel de nenhuma delas.

## Dependências

- **Contexto:** `_memoria/perfil.md`, `_memoria/foco.md`
- **Tom:** `_memoria/preferencias.md`
- **Entrada:** CSV do Google Ads e/ou Meta Ads Manager (print também serve, transcrever)
- **Histórico:** `marketing/campanhas/relatorios/` (criar se faltar)

---

## Como chamar

```
/relatorio-ads
dados/google-ads-2026-05-12.csv
dados/meta-ads-2026-05-12.csv
```

Ou só `/relatorio-ads` — a skill pergunta onde estão os arquivos da semana.

## Workflow

### Passo 1 — Ler os exports

**Google Ads precisa de:** Campanha, Grupo, Impressões, Cliques, CTR, CPC médio, Custo, Conversões, CPA, Taxa de conversão.

**Meta Ads precisa de:** Campanha, Conjunto, Impressões, Alcance, Cliques no link, CTR, CPM, Frequência, Custo, Resultados, Custo por resultado.

Coluna de conversão faltando: avisar e seguir só com dados de tráfego.

### Passo 2 — Comparar com a semana passada

Procurar o relatório anterior em `marketing/campanhas/relatorios/`. Existindo, calcular a variação de: investimento, cliques/impressões, CTR, CPC/CPM, conversões totais, CPA, custo por canal.

Sem relatório anterior: é a primeira leitura, vira baseline.

### Passo 3 — Resumo no topo

Uma tela, dois minutos de leitura:

```markdown
# Ads da semana — <DD/MM> a <DD/MM>

## Resumo

**Investimento:** R$ X.XXX (▼/▲ Y% vs semana anterior)
**Conversões:** N (▼/▲ Y%)
**CPA médio:** R$ X.XX (▼/▲ Y%)

**Por canal:**
- Google: R$ X.XXX → N conversões (CPA R$ X.XX)
- Meta:   R$ X.XXX → N conversões (CPA R$ X.XX)

**O que mais importou essa semana:** uma frase (campanha que estourou, criativo que funcionou, alerta de orçamento, queda fora do padrão).
```

### Passo 4 — Por canal

- **Top 3** campanhas/grupos (menor CPA, maior conversão)
- **Bottom 3** (sinalizar pra pausar ou ajustar)
- **Criativos Meta** que performaram (e os que não)
- **Keywords do Google** que gastaram e não converteram — candidatas a negativa

### Passo 5 — Alertas automáticos

| Alerta | Quando disparar |
|---|---|
| 🔴 Queimando orçamento | Gastou >R$X, 0 conversão |
| 🔴 CTR despencou | Caiu >30% vs semana anterior |
| 🟡 Frequência alta (Meta) | >3.0 — público já saturado |
| 🟡 Conversão baixa | <1% em Search |
| 🟡 CPC subindo | +20% vs semana anterior |
| 🟢 Oportunidade | CTR/conversão acima da média, orçamento ainda curto → considerar aumentar |

### Passo 6 — O que fazer na próxima semana

3 a 5 ações concretas:

```markdown
## Pra semana que vem

1. **Pausar** Grupo "X" — R$ 230 gastos, zero conversão em 7 dias
2. **Negativar:** [termos que gastaram sem converter]
3. **Trocar criativo** do conjunto "Y" — frequência 4.2, caindo
4. **Subir orçamento** da campanha "Z" — CPA R$ 12, abaixo da meta
5. **Testar** headline nova: "<sugestão baseada na concorrência>"
```

### Passo 7 — Salvar

`marketing/campanhas/relatorios/<YYYY-MM-DD>-relatorio.md`, com frontmatter:

```yaml
---
periodo_inicio: YYYY-MM-DD
periodo_fim: YYYY-MM-DD
investimento_total: 0000.00
conversoes_total: 0
cpa_medio: 00.00
canais: [google-ads, meta-ads]
---
```

Isso deixa comparações futuras mais fáceis de automatizar.

### Passo 8 — Entregar

Resumo direto no chat (Passos 3, 5 e 6), apontando pro arquivo completo:

> "Relatório completo em `marketing/campanhas/relatorios/<data>-relatorio.md`. Envio por email?"

Sim → chamar `/email-profissional` com o resumo e o anexo/link.

---

## Regras

- **Nunca inventar número.** Export truncado ou ilegível: dizer "dado incompleto" e seguir com o que der.
- **Comparação é o que importa.** Um número solto não diz nada sem o antes/depois.
- **Ordem dos alertas:** vermelho, depois amarelo, depois verde.
- **Recomendação concreta.** "Pausar Grupo X" vale mais que "otimizar campanhas" — sempre nome, valor, motivo.
- **Linguagem do dono:** se ele já entende CPM/CTR/CPA, usa os termos; se não, traduz ("quanto custou cada mil pessoas que viram", "quanto custou cada cliente").
- **Frequência saudável no Meta:** 1.5-3.0. Acima de 3 já satura, acima de 4 vira ruído.
- **Perda é perda.** "A campanha X queimou R$ 200 sem venda nenhuma" é mais útil que suavizar com "performance abaixo do esperado".
