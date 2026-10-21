---
name: instalar
description: >
  Faz o primeiro setup do ZordOS: entrevista sobre contexto pessoal/de negócio, tom de voz,
  foco atual e identidade visual, e preenche `_memoria/perfil.md`, `_memoria/preferencias.md`,
  `_memoria/foco.md`, `identidade/design-guide.md`, além de adaptar o `CLAUDE.md`. Use quando
  o usuário acabou de clonar o repositório, ou pedir explicitamente "rodar /instalar",
  "instalar o ZordOS", "primeiro setup".
---

# /instalar — Primeira conversa

O primeiro comando depois do clone. Não é formulário, é conversa: uma pergunta de cada vez, resposta ouvida de verdade antes da próxima. No final, o sistema sai sabendo quem é você, como fala, e onde dói no dia a dia.

## Antes de começar

### Nome da pasta

Checar `basename "$(pwd)"`. Se ainda for algo genérico (`zordos`, `ZordOS`, `ZordOs`, `ZordOs-main` ou variação):

> "A pasta ainda tá com o nome genérico ('<nome-atual>'). Melhor ela levar o nome do seu negócio ou o seu — no fim da entrevista eu te lembro de renomear, é rápido. Seguimos?"

Guardar esse nome pra usar mais adiante.

### Contexto já existente

Checar se `_memoria/perfil.md`, `preferencias.md`, `foco.md` ou `identidade/design-guide.md` já têm conteúdo real (não placeholder). Se sim:

> "Já existe contexto preenchido aqui. Sobrescrevo do zero ou só completo o que falta?"

Pasta limpa: seguir direto.

---

## Parte 1 — Qual perfil combina

1. **Solo / criador individual** — uma pessoa só, marca pessoal e negócio misturados
2. **Freelancer** — atende clientes, organiza por projeto
3. **Agência / consultoria** — time pequeno, vários clientes
4. **Empresa estabelecida** — já tem setores definidos (marketing, comercial, financeiro...)

A escolha define qual `templates/perfis/claude-md-<perfil>.md` vira a base do `CLAUDE.md`.

---

## Parte 2 — A entrevista

Uma pergunta por vez, espera a resposta antes de seguir. Resposta vaga: repete pedindo algo mais concreto, só uma vez — depois disso, registra o que veio e segue.

**Contexto:**
1. "Como você chama isso? Nome do negócio, ou seu nome se for marca pessoal."
2. "O que você entrega, do jeito que explicaria pro seu vizinho?"
3. "Quem paga por isso? Descreve o cliente real, sem ficha de persona genérica."
4. "É só você ou tem mais gente? Se tiver, quem faz o quê?"

**Voz:**
5. "Me manda um exemplo real de algo que você escreveu recentemente (legenda, email, mensagem) — assim eu calibro sem chutar."
6. "O que te irrita quando alguém escreve de um certo jeito? (tipo 'vamos juntos!', emoji em email sério, jargão de guru, 'alavancar', 'sinergia')"

**Foco:**
7. "Qual é o gargalo de hoje? O que tá travando o próximo passo?"
8. "Se eu pudesse tirar UMA coisa repetitiva das suas costas agora, qual seria?"

**Identidade:**
9. "Já tem cores e fonte definidas, ou começa do zero? Se tem, me passa."
10. "Tem logo? Coloca em `identidade/logo.png` ou `.svg` e confirma aqui."

---

## Parte 3 — Preenchendo os arquivos

**`_memoria/perfil.md`** — respostas 1-4: nome, o que entrega, cliente real, estrutura de equipe.

**`_memoria/preferencias.md`** — respostas 5-6:
- Tom de voz: descrito a partir do exemplo real da pergunta 5
- O que evitar: direto da resposta 6
- Resumo geral do que combina e do que não combina

**`_memoria/foco.md`** — respostas 7-8:
- Gargalo atual
- O que tirar das costas (marcar como candidato a `/mapear-rotinas`)
- Próximas prioridades, derivadas do gargalo

**`identidade/design-guide.md`** — se veio algo nas respostas 9-10, preencher. Se não:
> "Deixei `identidade/design-guide.md` em branco por enquanto. Quando definir a identidade, edita lá — é o que as skills visuais leem antes de criar qualquer peça."

**`CLAUDE.md`** — puxar `templates/perfis/claude-md-<perfil-escolhido>.md`, adaptar com o que saiu da entrevista, sobrescrever o da raiz.

---

## Parte 4 — Confirmação

```
✓ Perfil: [perfil]
✓ _memoria/perfil.md
✓ _memoria/preferencias.md
✓ _memoria/foco.md
✓ identidade/design-guide.md — [preenchida | em branco]
✓ CLAUDE.md adaptado
```

---

## Parte 5 — Renomear a pasta (se aplicável)

Se a pasta ainda tinha nome genérico, gerar slug a partir da resposta 1 (minúsculo, sem acento, espaço vira hífen, sem caractere especial). Ex.: "Estúdio Fulano" → `estudio-fulano`.

> "Falta só uma coisa: a pasta ainda se chama '<nome-atual>'.
> Sugiro renomear pra '<slug>'.
>
> 1. Fecha o VS Code
> 2. Renomeia no Finder/Explorer (ou no terminal, fora da pasta: `mv <nome-atual> <slug>`)
> 3. Abre de novo na pasta renomeada
>
> Quer outro nome? Me fala que eu ajusto."

Pasta já com nome próprio: pular essa parte.

---

## Parte 6 — Daqui pra frente

> "Pronto, o sistema já te conhece.
>
> Começa cada sessão com `/abrir` — eu carrego tudo isso antes da primeira frase.
> Pra carrossel, SEO, campanha ou qualquer outra coisa, chama a skill certa.
>
> Você disse que '<resposta 8>' se repete toda semana. Quando quiser parar de fazer isso na mão, roda `/mapear-rotinas`."

Se o usuário quiser o trabalho salvo no GitHub, citar `/salvar`.

---

## Regras

- Não inventar o que não foi dito — resposta vaga vira placeholder claro, não invenção
- Arquivo final não leva aviso de "será preenchido" — isso só existe no placeholder, some depois do /instalar
- A entrevista inteira cabe em 5-7 minutos; usuário enrolando numa pergunta → registra o que tem e segue
- Nenhuma pergunta além das listadas, sem motivo concreto pra isso
