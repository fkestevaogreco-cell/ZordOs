---
name: novo-projeto
description: >
  Cria uma pasta isolada com `CLAUDE.md` próprio pra um cliente, projeto ou iniciativa nova,
  depois de uma entrevista rápida sobre objetivo e entregas. Use quando o usuário disser
  "novo projeto", "novo cliente", "/novo-projeto", "começar projeto pra X" ou pedir pra
  estruturar um trabalho novo.
---

# /novo-projeto — Espaço dedicado pra um trabalho novo

Quando algo novo começa (cliente, iniciativa, ideia que vai virar projeto), essa skill monta uma pasta própria que herda o contexto da raiz mas guarda o que é só daquele trabalho.

## Workflow

### Passo 1 — Quatro perguntas

1. "Como vamos chamar esse projeto ou cliente?"
2. "É cliente novo, projeto seu interno, ou ideia pessoal?"
3. "Em uma frase, qual é o objetivo disso?"
4. "O que vai sair daqui? (pode ser mais de uma coisa: site, conteúdo, automação, proposta...)"

### Passo 2 — Onde criar

Conforme a resposta 2:

- **Cliente:** `clientes/<Nome>/` (confirmar a convenção de pasta no `CLAUDE.md` da raiz antes, pode já existir outra)
- **Projeto interno:** `projetos/<nome>/` (cria `projetos/` se ainda não existir)
- **Ideia pessoal:** perguntar direto onde o usuário prefere guardar

### Passo 3 — O que vai dentro

- `CLAUDE.md` do projeto, com as instruções específicas
- `briefing.md`, com o que saiu da entrevista
- Uma subpasta pra cada entrega citada na resposta 4 (ex: citou "ads e conteúdo" → cria `ads/` e `conteudo/`)

### Passo 4 — Modelo do `CLAUDE.md` do projeto

```markdown
# [Nome do projeto]

> Criado em [data]. As regras daqui valem mais que as da raiz quando entrarem em conflito.

## Do que se trata

[resposta 3]

## Natureza

[Cliente / Projeto interno / Ideia pessoal]

## O que vai sair daqui

- [entrega 1]
- [entrega 2]
- ...

## O que já vem pronto da raiz

Tom de voz, marca e contexto geral vêm de `_memoria/` e `identidade/` na raiz. Não duplicar isso aqui.

## Regras só desse projeto

[Vazio por enquanto — preencher conforme forem surgindo particularidades]
```

### Passo 5 — Fechar com um resumo

```
Pasta criada em: [caminho]
✓ CLAUDE.md do projeto
✓ briefing.md
✓ Subpastas: [lista]

Da próxima vez, abre o terminal já dentro dessa pasta — assim eu leio o CLAUDE.md dela junto com o da raiz.
```

## Regras

- Nome de pasta reconhecível: mantém acento, troca espaço por hífen, sem normalizar até descaracterizar
- Só cria a subpasta que foi pedida — nada de "organizar melhor" por conta própria
- Pasta com esse nome já existe: avisar e perguntar se segue dentro dela ou cria com um sufixo
