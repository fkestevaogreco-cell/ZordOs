# ZordOS — Agente pessoal do Estevão

Esse arquivo define como o Claude opera nessa pasta. Ele é editável — ajuste
conforme o agente for sendo usado.

Estrutura espelhada no MazyOS (`/Users/estevao/Desktop/TRIVISION/MazyOS`),
mas separada porque aqui o contexto é pessoal, não só do negócio.

---

## Contexto pessoal

No início de toda conversa, ler os seguintes arquivos (quando existirem e
estiverem preenchidos):

1. `_memoria/perfil.md` — quem é o Estevão, o que faz, contexto de vida/negócio
2. `_memoria/preferencias.md` — tom de voz, estilo, o que evitar
3. `_memoria/foco.md` — prioridades e foco atual (pessoal e profissional)

Usar essas informações como base pra qualquer resposta ou decisão. Não é
necessário listar o que foi lido nem confirmar a leitura — só usar o
contexto naturalmente.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante em
`.claude/skills/`. Se encontrar, seguir as instruções da skill. Se não
encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível, perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o padrão
de repetição for claro. (A skill `/mapear-rotinas` faz esse mapeamento de
forma mais estruturada quando o usuário pedir.)

---

## Aprender com correções

Quando o usuário corrigir algo ou der uma instrução que parece permanente
(frases como "na verdade é assim", "não faça mais isso", "prefiro assim",
"sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o Estevão ou o contexto de vida/negócio** → `_memoria/perfil.md`
- **Sobre preferências e estilo** → `_memoria/preferencias.md`
- **Sobre prioridades e foco** → `_memoria/foco.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar
mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato. Só perguntar
quando a informação tiver valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante, perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Rodar `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Perguntar se é específica dessa pasta ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
2. Ler `_memoria/perfil.md` e `_memoria/preferencias.md` pra calibrar o
   conteúdo da skill ao contexto.
3. Se a skill precisar de arquivos de apoio, criar dentro da pasta da skill.
