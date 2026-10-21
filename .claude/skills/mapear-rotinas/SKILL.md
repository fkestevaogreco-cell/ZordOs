---
name: mapear-rotinas
description: >
  Entrevista o usuário sobre o que ele repete toda semana (vida ou negócio) e transforma em
  skills novas dentro de `.claude/skills/`. Use quando o usuário pedir "/mapear-rotinas",
  "criar skills personalizadas", "automatizar minhas tarefas" ou "o que dá pra automatizar".
---

# /mapear-rotinas — Da rotina repetida pra skill pronta

Objetivo: achar o que o usuário já faz de forma repetitiva e deixar isso automatizado de verdade, não só documentado.

## Workflow

### Passo 1 — Entrevista

Três perguntas, uma de cada vez:

1. "Quais tarefas você repete toda semana e já queria nem ter que pensar mais nelas? Lista até 3."
2. "Pra cada uma, o que normalmente é o ponto de partida?"
3. "E o que você espera receber no final de cada uma?"

### Passo 2 — Desenhar as skills propostas

Pra cada rotina mapeada:

```
### /<nome-da-skill>
**Faz:** [uma frase]
**Recebe:** [input]
**Entrega:** [output]
**Precisa de:** [arquivos de pessoal/, ferramenta externa, etc.]
```

Mostrar a lista inteira de uma vez e perguntar:
> "Dessas, quais eu crio agora? Pode ser todas, algumas, nenhuma, ou pedir ajuste em alguma antes."

### Passo 3 — Criar as aprovadas

Pra cada uma:

1. `.claude/skills/<nome>/` nova
2. `SKILL.md` com frontmatter (`name`, `description`), workflow claro, dependências e regras
3. Template ou exemplo de apoio, se a skill precisar, dentro da própria pasta
4. Calibrar tom e conteúdo lendo `pessoal/sobre-mim.md`

### Passo 4 — Fechar

```
[N] skills criadas:
✓ /<nome1> — .claude/skills/<nome1>/SKILL.md
...

Pra usar qualquer uma delas, é só digitar / e o nome.
```

## Regras

- Rotina que só aconteceu uma vez não vira skill — tem que se repetir de verdade
- Máximo 5 skills por sessão de mapeamento
- Toda skill criada precisa de um gatilho claro na `description`
- Se a skill depender de ferramenta que o usuário não tem configurada, avisar antes de criar
