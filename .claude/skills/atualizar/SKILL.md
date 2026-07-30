---
name: atualizar
description: >
  Varre a pasta pessoal e atualiza os arquivos de contexto (`_memoria/perfil.md`, `preferencias.md`,
  `foco.md`, `CLAUDE.md`) que ficaram desatualizados em relação ao estado real. Use quando o
  usuário disser "atualiza", "/atualizar", "varre o projeto", ou pedir uma reconciliação geral.
---

# /atualizar — Varredura e atualização de contexto

Compara o que está nos arquivos de contexto com o estado real do workspace e propõe atualizações.

## Workflow

### Passo 1 — Levantamento

Listar:
- Pastas na raiz (cada uma representa uma área pessoal ou de projeto)
- Skills em `.claude/skills/` — quais existem hoje
- Arquivos recentes (últimos 30 dias) que sugiram mudança de contexto

### Passo 2 — Comparação

Ler os arquivos de contexto e identificar:

- **Em `_memoria/perfil.md`:** o contexto de vida/negócio ainda bate com a realidade?
- **Em `_memoria/foco.md`:** o foco atual ainda faz sentido (datas, prioridades)?
- **Em `CLAUDE.md`:** as regras batem com o que existe?
- **Em `identidade/design-guide.md`:** continua coerente com o que foi gerado nas últimas peças (carrosséis, slides)?

### Passo 3 — Proposta de mudanças

Apresentar pro usuário uma lista curta no formato:

```
Encontrei [N] coisas pra atualizar:

1. _memoria/perfil.md — ...
2. _memoria/foco.md — ...

Quer que eu aplique essas mudanças? Posso aplicar todas, escolher algumas, ou nenhuma.
```

### Passo 4 — Aplicação

Se o usuário aprovar, editar os arquivos com cirurgia — só a linha relevante, sem reformatar o documento todo. Mostrar o diff de cada mudança aplicada.

## Regras

- Não inventar fatos — só registrar o que tem evidência no workspace
- Se a evidência for ambígua, perguntar antes de adicionar
- Não apagar conteúdo dos arquivos de contexto — só atualizar e adicionar
- Se nenhuma mudança for necessária, responder "Tá tudo coerente, nada pra atualizar"
