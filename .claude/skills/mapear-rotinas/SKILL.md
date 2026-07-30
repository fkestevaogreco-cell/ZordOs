---
name: mapear-rotinas
description: >
  Mapeia tarefas repetitivas que o usuário faz no dia a dia (pessoal ou de negócio) e gera skills
  personalizadas pra automatizá-las. Faz uma entrevista curta, propõe skills concretas e cria as
  aprovadas em `.claude/skills/`. Use quando o usuário pedir "/mapear-rotinas", "criar skills
  personalizadas", "automatizar minhas tarefas" ou "o que dá pra automatizar".
---

# /mapear-rotinas — Mapeamento de tarefas repetitivas em skills

Skill de descoberta + criação. O objetivo é transformar o que o usuário repete em automações ativas.

## Workflow

### Passo 1 — Entrevista de descoberta

Fazer 3 perguntas, uma por vez:

1. "Quais 3 tarefas você repete toda semana e gostaria de não ter que pensar mais?"
2. "Pra cada uma delas, qual o input típico?"
3. "E o que você espera de output?"

### Passo 2 — Proposta de skills

Pra cada tarefa, propor uma skill no formato:

```
### /<nome-da-skill>
**O que faz:** [uma frase]
**Input:** [o que recebe]
**Output:** [o que entrega]
**Dependências:** [arquivos do _memoria/, ferramentas externas]
```

Mostrar todas as propostas juntas e perguntar:
> "Quais skills dessa lista você quer que eu crie agora? (pode escolher todas, algumas, ou nenhuma — também pode pedir ajustes)"

### Passo 3 — Criação das skills aprovadas

Pra cada skill aprovada:

1. Criar pasta `.claude/skills/<nome>/`
2. Criar `SKILL.md` com frontmatter (`name`, `description`), workflow estruturado, dependências e regras claras
3. Se a skill precisar de templates ou exemplos, criar dentro da pasta da skill
4. Calibrar o tom conforme `_memoria/preferencias.md` e `_memoria/perfil.md`

### Passo 4 — Resumo

```
Criei [N] skills:
✓ /<nome1> — em .claude/skills/<nome1>/SKILL.md
...

Pra usar: digita / e o nome da skill em qualquer sessão.
```

## Regras

- Não criar skill pra tarefa que aconteceu uma vez só. Tem que ser repetível
- Não criar mais de 5 skills por sessão de mapeamento
- Cada skill criada precisa ter um trigger claro na `description`
- Se a skill depender de uma ferramenta que o usuário não tem, avisar antes de criar
