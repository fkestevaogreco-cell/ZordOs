---
name: relatorio-cliente
description: >
  Monta um relatório periódico de status pra mandar pro cliente — o que foi entregue,
  o que está em andamento, próximos passos, e bloqueios se houver. Use quando o
  usuário pedir "relatório pro cliente X", "resumo do mês pro cliente", "status
  report", "o que entreguei esse mês pra Y", ou /relatorio-cliente.
---

# /relatorio-cliente — Relatório de status pro cliente

## Dependências

- **Tom de voz:** `pessoal/preferencias.md`
- **Contexto do projeto** (se o cliente tem pasta própria via `/novo-projeto`): ler
  `CLAUDE.md`/`briefing.md` dessa pasta antes de perguntar o que já está documentado lá
- **Histórico:** se existir `propostas/<cliente>-*.md` (de `/proposta-comercial`), ler
  pra saber o que foi prometido originalmente e comparar com o que foi entregue

---

## Workflow

### Passo 1 — Coletar o período e os fatos

1. "Qual cliente/projeto e qual período esse relatório cobre? (semana, mês, desde o
   último relatório)"
2. "O que foi entregue de fato nesse período?" — se o usuário não souber de cabeça,
   oferecer olhar `git log` (se for projeto de código) ou a pasta de entregas do
   cliente pra levantar junto
3. "Tem algo em andamento que ainda não fechou?"
4. "Algum bloqueio — esperando aprovação, informação ou decisão do próprio cliente?"
5. "Próximos passos previstos pro período seguinte?"

Não inventar entregas — se o usuário não confirmar algo como "feito", listar como
"em andamento", nunca como concluído.

### Passo 2 — Montar o relatório

```markdown
# Relatório — [Cliente] — [período]

## Entregue nesse período
- [item 1]
- [item 2]

## Em andamento
- [item] — [previsão, se houver]

## Bloqueios
- [o que está esperando o quê — se não houver nenhum, omitir essa seção inteira,
  não escrever "nenhum bloqueio" só pra preencher espaço]

## Próximos passos
- [item 1]
- [item 2]
```

Tom: direto e factual, sem inflar entregas pequenas com linguagem de agência genérica
("trabalhamos arduamente para entregar excelência"). O cliente quer saber o que
aconteceu, não ler propaganda sobre o próprio fornecedor.

### Passo 3 — Entregar

Perguntar o formato: texto pra email/WhatsApp, ou documento (se `/pdf`/`/docx`
disponíveis e o cliente esperar algo mais formal). Salvar uma cópia em
`<pasta-do-cliente>/relatorios/<data>.md` se o projeto tiver pasta própria, senão em
`relatorios/<cliente>-<data>.md`.

---

## Regras

- Nunca reportar como "entregue" algo que o usuário descreveu como "quase pronto" ou
  "só falta ajustar"
- Bloqueios que dependem do próprio cliente devem ser nomeados com clareza (sem
  acusação, mas sem disfarçar que o atraso não é seu) — isso protege o freelancer/
  agência numa eventual cobrança de prazo depois
- Se não houver nada de relevante nesse período, dizer isso diretamente em vez de
  inflar itens pequenos pra parecer que houve mais progresso do que houve
