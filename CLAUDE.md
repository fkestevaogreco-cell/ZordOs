# ZordOS — Memória e skills pessoais

Esse arquivo governa como o Claude se comporta dentro dessa pasta: o que
ele lê antes de responder, quando ele aprende algo novo sobre você e como
ele cria uma skill nova. É editável — o `/instalar` completa o fim dele
com o que for específico do seu contexto, e você pode ajustar o resto a
qualquer momento.

---

## O que ler antes de responder

No início de cada conversa, ler (quando existirem e estiverem preenchidos):

1. `pessoal/sobre-mim.md` — quem você é, o que faz, como fala, o que evitar
2. `pessoal/agora.md` — o que tá prioritário agora, pessoal e profissional

Usar isso como base de qualquer resposta ou decisão, sem precisar listar o
que foi lido ou confirmar a leitura. Pra qualquer peça visual (carrossel,
post, landing page), usar `marca/guia.md` como referência.

---

## Antes de qualquer tarefa

Checar se já existe uma skill relevante em `.claude/skills/`. Se existir,
seguir ela. Se não existir, resolver a tarefa do jeito normal — e, se a
tarefa não tinha skill mas parece algo que vai se repetir, perguntar:

> "Acho que isso pode virar comando pra próxima vez. Crio?"

Só perguntar quando o padrão de repetição ficar claro, não pra tarefa
pontual ou pergunta simples. (`/mapear-rotinas` faz essa mesma varredura de
forma mais estruturada quando você pedir direto.)

---

## Quando você corrige algo

Frases do tipo "é diferente disso", "muda pra sempre", "prefiro que",
"nunca mais faça assim", "a partir de agora" costumam indicar uma
preferência duradoura, não um ajuste pontual. Nesses casos, perguntar:

> "Isso vale pra sempre? Salvo pra não esquecer."

Se sim, decidir onde guardar:

- **Sobre você, sua vida, seu negócio, tom ou formato** → `pessoal/sobre-mim.md`
- **Sobre prioridade ou foco** → `pessoal/agora.md`
- **Regra de comportamento do Claude nessa pasta** → este `CLAUDE.md`

Adicionar uma linha nova e objetiva, sem reescrever o arquivo inteiro, e
mostrar a linha que entrou. Pular a pergunta quando a correção for só sobre
o que está na tela naquele momento, sem valor fora dessa conversa.

---

## Mantendo tudo em dia

Terminou algo que mudou seu contexto (projeto novo, mudança de foco,
ferramenta nova, estrutura nova)? Perguntar:

> "Isso muda seu contexto. Atualizo a memória?"

Na dúvida, `/atualizar` faz a varredura completa de uma vez.

---

## Criando uma skill nova

Quando você pedir uma skill:

1. Checar `modelos/skills-sugeridas.md` — se já tiver uma receita
   parecida lá, usar como ponto de partida em vez de começar do zero
2. Perguntar se ela serve só pra essa pasta ou pra qualquer projeto seu:
   - Só essa pasta → `.claude/skills/nome-da-skill/SKILL.md`
   - Qualquer projeto → `~/.claude/skills/nome-da-skill/SKILL.md`
3. Ler `pessoal/sobre-mim.md` antes de escrever, pra calibrar tom e
   conteúdo ao seu contexto
4. Criar arquivos de apoio (modelo, exemplo) dentro da própria pasta da
   skill, se precisar
5. Seguir o fluxo nativo de criação de skill do Claude Code
