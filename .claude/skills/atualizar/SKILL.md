---
name: atualizar
description: >
  Compara os arquivos de contexto (`pessoal/sobre-mim.md`, `pessoal/agora.md`,
  `CLAUDE.md`) com o estado real da pasta e corrige o que ficou pra trás. Use quando o
  usuário disser "atualiza", "/atualizar", "varre o projeto", ou pedir uma reconciliação geral.
---

# /atualizar — Reconciliar memória com a realidade

A memória só serve se continuar batendo com o que você realmente está fazendo. Essa skill audita isso.

## Workflow

### Passo 1 — Olhar o que existe hoje

Levantar:
- As pastas na raiz (cada uma é uma área de vida ou projeto)
- As skills instaladas em `.claude/skills/`
- Arquivos criados/alterados nos últimos 30 dias que indiquem mudança de rumo

### Passo 2 — Confrontar com a memória

Pra cada arquivo de contexto, perguntar se ainda reflete a realidade:

- `pessoal/sobre-mim.md` ainda descreve seu momento atual?
- `pessoal/agora.md` ainda tem datas e prioridades válidas?
- `CLAUDE.md` ainda bate com o que de fato existe na pasta?
- `marca/guia.md` ainda é coerente com as últimas peças geradas?

### Passo 3 — Propor, não aplicar direto

```
Achei [N] pontos fora de sincronia:

1. pessoal/sobre-mim.md — ...
2. pessoal/agora.md — ...

Aplico tudo, só uma parte, ou nenhuma?
```

### Passo 4 — Aplicar com cirurgia

Só editar a linha que mudou, nunca reescrever o arquivo inteiro. Mostrar o que mudou em cada arquivo tocado.

## Regras

- Nada de inventar: só entra o que tem evidência real na pasta
- Evidência ambígua → perguntar antes de escrever
- Atualizar e somar, nunca apagar conteúdo existente
- Sem nada pra ajustar → "Tá tudo batendo, nada pra mudar"
