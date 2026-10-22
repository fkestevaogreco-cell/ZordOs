---
name: schwartz-copy
description: >
  Escreve copy de vendas (landing page, email, VSL, carta de venda, página de captura)
  usando a metodologia de Eugene Schwartz (Breakthrough Advertising). Diagnostica o
  nível de consciência e o nível de sofisticação do mercado antes de escrever qualquer
  texto, e estrutura a copy de acordo. Use quando o usuário pedir "copy de venda",
  "escreve uma landing page", "texto pra VSL", "carta de venda", "página de captura",
  "copy pra converter", ou /schwartz-copy.
---

# /schwartz-copy — Copy de resposta direta (Eugene Schwartz)

A premissa central de Schwartz: **você não cria desejo, só o canaliza.** O desejo
pelo resultado já existe no mercado — o trabalho da copy é identificar onde esse
desejo está e intensificá-lo na direção da oferta, não inventar um desejo novo.

## Dependências

- **Contexto:** `pessoal/sobre-mim.md`
- **Tom de voz:** `pessoal/preferencias.md`
- **Identidade visual** (se for gerar página, não só texto): `marca/design.md`

---

## Workflow

### Passo 1 — Entender a oferta

Perguntar o que for necessário (sem repetir o que já está óbvio no pedido do usuário):
1. "O que exatamente você está vendendo — produto, serviço, oferta?"
2. "Quem é o cliente ideal pra essa oferta? (não persona genérica — descreve alguém real)"
3. "Que resultado concreto essa oferta entrega? (não características — o que muda na vida de quem compra)"
4. "Tem prova — cases, números, depoimentos reais? Nunca inventar isso."

### Passo 2 — Diagnosticar o nível de consciência do mercado

Os 5 estágios (Schwartz), do mais frio ao mais quente:

1. **Inconsciente** — não sabe que tem o problema
2. **Consciente do problema** — sente o problema, não conhece soluções
3. **Consciente da solução** — sabe que soluções existem, não conhece a sua
4. **Consciente do produto** — conhece sua oferta, ainda não decidiu
5. **Mais consciente** — já quer comprar, só precisa do empurrão final (oferta, preço, urgência)

Perguntar ou inferir da resposta do Passo 1: "Pra alguém chegar nessa página/email, ele
já sabe que tem esse problema? Já procurou soluções? Já conhece vocês?" — isso define o estágio.

**Isso muda a abertura da copy:**
- Inconsciente/consciente do problema → abrir com o problema, não com a oferta
- Consciente da solução → abrir comparando abordagens, mostrando por que a sua é diferente
- Consciente do produto/mais consciente → pode abrir direto com a oferta e a prova

### Passo 3 — Diagnosticar o nível de sofisticação do mercado

Quantas promessas parecidas esse público já viu?

- **Sofisticação baixa** — mercado novo, a promessa direta ainda funciona ("perca peso sem dieta")
- **Sofisticação média** — já viu a promessa, precisa de um mecanismo diferente ("perca peso sem dieta — através de X, não Y")
- **Sofisticação alta** — já viu promessa e mecanismo, só identificação/credibilidade/exagero controlado convencem (quem fala, como fala, prova específica)

Mercados saturados (emagrecimento, "ganhar dinheiro online", relacionamento) quase sempre
estão em sofisticação alta — não usar promessa genérica aí.

### Passo 4 — Escrever a copy

Estrutura varia com o formato pedido, mas sempre:

1. **Headline/abertura** calibrada pelo estágio de consciência (Passo 2)
2. **Mecanismo** — o "como" que diferencia a oferta (essencial em sofisticação média/alta)
3. **Prova** — só a que foi fornecida no Passo 1, nunca inventada
4. **Objeções** — antecipar 2-3 objeções reais do público e responder antes que ele pergunte
5. **Oferta** — clara, sem ambiguidade no que a pessoa recebe
6. **CTA** — uma ação só, repetida quando fizer sentido (não múltiplos CTAs competindo)

Tom segue `pessoal/preferencias.md`. Se o design-guide existir e o pedido for uma página
(não só texto), montar como HTML autocontido seguindo o mesmo padrão visual do `/carrossel`.

### Passo 5 — Explicar as escolhas

Entregar a copy junto com uma linha curta do diagnóstico:

```
Diagnóstico: consciência [estágio] · sofisticação [nível]
Por isso: [1 frase explicando a escolha de abertura/mecanismo]
```

---

## Regras

- Nunca inventar prova, número ou depoimento — se não foi fornecido, não existe na copy
- Nunca pular o diagnóstico de consciência/sofisticação pra "ir direto escrever"
- Um mercado saturado sem mecanismo diferenciado = pedir mais informação antes de escrever,
  não forçar uma promessa genérica que não vai converter
- Headline não precisa ser "criativa" — precisa ser verdadeira e específica pro estágio certo
