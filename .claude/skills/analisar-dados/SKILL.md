---
name: analisar-dados
description: >
  Lê um arquivo de dados (CSV, Excel, TXT, JSON) e devolve um resumo executivo com o que
  importa: tendências, pontos fortes, riscos e recomendações. Use quando o usuário disser
  "analisa esse arquivo", "o que mostram esses dados", "resume esses resultados", "analisa
  esse relatório", ou arrastar um arquivo de dados.
---

# /analisar-dados — Leitura de arquivo e resumo executivo

## Dependências

- **Contexto:** `_memoria/perfil.md`, pra entender o que os números representam
- **Tom:** `_memoria/preferencias.md`

---

## Workflow

### Passo 1 — Situar o arquivo

Se não estiver óbvio pelo nome ou conteúdo, perguntar:
- "Esse arquivo é de quê? (vendas, ads, métricas, pesquisa...)"
- "Qual pergunta você quer responder com ele?"

Se já estiver claro, pular direto pra leitura.

### Passo 2 — Ler

Abrir o arquivo com a ferramenta certa pro formato (planilha, CSV, JSON, texto puro).

### Passo 3 — Extrair o que importa

**Sinais positivos:** métricas crescendo ou acima da média, destaques (produto, campanha, período que performou melhor)

**Sinais de alerta:** quedas, números fora do padrão, o que ficou abaixo do esperado, onde está o desperdício

**Comparações:** contra o período anterior (se der), melhores contra piores, como as categorias se distribuem entre si

**O que não salta aos olhos:** correlações e padrões que só aparecem olhando com cuidado

### Passo 4 — Entregar em texto corrido

```markdown
# Análise — [nome do arquivo]
*[data]*

## Panorama geral
[2-3 parágrafos]

## O que está indo bem
[com contexto, não só lista seca]

## O que merece atenção
[idem]

## 3 recomendações
1. [concreta]
2. [concreta]
3. [concreta]

## Números-chave
| Métrica | Valor | Contexto |
|---|---|---|
```

Salvar em `estudos/analise-[nome]-[data].md` (ou onde fizer mais sentido pro seu jeito de organizar).

Perguntar se quer uma versão em HTML pra apresentar ou compartilhar.

---

## Regras

- Texto corrido, não só tópicos soltos — tem que dar pra entender sem abrir o arquivo original
- Nunca inventar número que não está na fonte
- Dado incompleto ou corrompido: avisar antes de analisar em cima dele
- Tom conforme `_memoria/preferencias.md`
