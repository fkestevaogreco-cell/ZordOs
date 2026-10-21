---
name: proposta-comercial
description: >
  Monta uma proposta comercial/orçamento pra cliente a partir de um briefing rápido —
  escopo, prazo, valor, forma de pagamento. Entrega pronta pra enviar (texto ou documento).
  Use quando o usuário pedir "proposta pro cliente X", "orçamento pra Y", "monta uma
  proposta", "preciso mandar um orçamento", ou /proposta-comercial.
---

# /proposta-comercial — Proposta/orçamento pra cliente

## Dependências

- **Contexto do negócio:** `_memoria/perfil.md`
- **Tom de voz:** `_memoria/preferencias.md`
- **Identidade visual** (se for gerar como documento, não só texto): `identidade/design-guide.md`

---

## Workflow

### Passo 1 — Entrevista

Perguntar o que não tiver vindo junto do pedido:
1. "Qual o nome do cliente/empresa?"
2. "O que exatamente vai ser entregue? (liste os itens/escopo, não resuma demais)"
3. "Prazo de entrega?"
4. "Valor — total fechado, por item, ou faixa a definir com o cliente?"
5. "Forma de pagamento (à vista, parcelado, entrada + saldo, recorrente)?"
6. "Tem algo que precisa ficar explícito como fora do escopo, pra evitar mal-entendido depois?"

Se o usuário já deu a maioria dessas informações no pedido inicial, não perguntar de
novo — só completar o que faltou.

### Passo 2 — Montar a proposta

Estrutura padrão (ajustar conforme o negócio/perfil — agência tende a ser mais formal,
solopreneur mais direto):

```markdown
# Proposta — [Nome do cliente]

**De:** [nome do negócio, de _memoria/perfil.md]
**Data:** [data de hoje]
**Validade da proposta:** [padrão 15 dias, perguntar se quiser outro prazo]

## Escopo

[Lista clara do que será entregue — um item por linha, sem enrolação]

## Fora do escopo

[Se o usuário mencionou algo na pergunta 6 — senão, omitir essa seção]

## Prazo

[Prazo de entrega, com marcos intermediários se fizer sentido pro tamanho do projeto]

## Investimento

[Valor — total ou por item, conforme resposta 4]

## Forma de pagamento

[Conforme resposta 5]

## Próximos passos

[Como o cliente aprova/formaliza — ex: "responda este email confirmando" ou
"assinatura do contrato anexo"]
```

### Passo 3 — Entregar

Perguntar se o usuário quer:
- **Texto direto** (pra colar em email/WhatsApp) — formato mais enxuto, sem títulos markdown
- **Documento formal** (PDF/Word, se as skills nativas `/pdf`/`/docx` estiverem disponíveis)

Salvar uma cópia em `propostas/<cliente>-<data>.md` (criar a pasta se não existir) pra
manter histórico — útil depois pra `/relatorio-cliente` e pra referência em negociações
futuras com o mesmo cliente.

---

## Regras

- Nunca inventar valor, prazo ou escopo que o usuário não confirmou — perguntar antes
  de assumir
- Tom segue `_memoria/preferencias.md`, mas propostas comerciais pedem mais formalidade
  que o padrão de conversa — calibrar pra cima sem virar "prezado cliente" genérico
- Se o cliente já tem pasta própria (criada via `/novo-projeto`), salvar a proposta
  dentro dela em vez de `propostas/` solto
- Clareza de escopo é mais importante que venda agressiva — ambiguidade numa proposta
  vira discussão de contrato depois
