---
name: abrir
description: >
  Carrega o contexto pessoal (perfil, preferências, foco) no início de uma sessão e devolve
  uma síntese curta pro usuário. Use quando o usuário disser "abrir", "começar o dia",
  "/abrir" ou for o primeiro turno de uma sessão.
---

# /abrir — Começo de sessão

Objetivo único: carregar o contexto e devolver uma frase de situação antes de qualquer trabalho.

## Workflow

1. Ler, nessa ordem: `pessoal/sobre-mim.md`, `pessoal/agora.md`, e dar uma olhada em `marca/guia.md` só pra saber se tem conteúdo ou tá vazio.

2. Se `sobre-mim.md` ou `agora.md` ainda estiver com o placeholder original, responder:
   > "`pessoal/<arquivo>.md` ainda tá vazio. Completa agora antes de seguir?"
   E esperar.

3. Com tudo preenchido, devolver uma única mensagem curta:

```
[Nome] — [resumo de vida/negócio em poucas palavras]
Foco: [a prioridade que está em agora.md, resumida numa linha]
Tom: [3-4 palavras que descrevem como escrever]

Beleza, o que fazemos agora?
```

4. Não narrar o que foi lido, não pedir confirmação de leitura. Só chegar já sabendo.

## Regras

- A resposta cabe em poucas linhas, sem rodeio
- A única pergunta permitida é o "o que fazemos agora"
- `marca/guia.md` vazio não entra nesse resumo — só vira assunto quando uma skill visual precisar dele
