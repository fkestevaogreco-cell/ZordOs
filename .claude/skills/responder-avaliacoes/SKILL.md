---
name: responder-avaliacoes
description: >
  Escreve respostas curtas e humanas pra avaliações do Google Meu Negócio, variando
  agradecimento e puxando algo concreto da review — nada de resposta de robô corporativo.
  Use quando o usuário disser "responder avaliação", "resposta pro Google", "tem uma
  avaliação nova", "me ajuda a responder essas reviews", "avaliação do GMB", ou colar
  texto/print de uma review do Google.
---

# /responder-avaliacoes — Resposta pra review do Google

## Dependências

- **Tom:** `pessoal/preferencias.md`
- **Contexto:** `pessoal/sobre-mim.md`

---

## Como toda resposta deve soar

Curta (1-2 frases), pessoal, específica. O oposto de atendimento automatizado.

### O que nunca muda

1. **Nome do cliente sempre que der.** Primeiro nome, capitalizado direito mesmo que o perfil esteja tudo minúsculo ("jj nascimento" → "JJ", "alexandre fior" → "Alexandre"). Nome ambíguo ou parecendo username: agradecimento caloroso sem forçar um nome.
2. **Agradecimento variado.** Alternar "Obrigado", "Muito obrigado", "Que bom", "Valeu" — repetir sempre a mesma palavra soa automático.
3. **Um detalhe concreto, não frase pronta.** Puxar algo da review específica ou algo real do negócio. Fora do repertório: "seu feedback é muito importante pra nós", "estamos à disposição", "agradecemos a preferência".
4. **Emoji opcional no final.** Cabe bem em review calorosa/elogiosa. Pular em review formal, seca ou crítica. No máximo um.
5. **Tom conforme `pessoal/preferencias.md`.** Nada de "premium", "qualidade ímpar", "experiência diferenciada".

### Exemplos (adaptar, nunca copiar literal)

- 5★ "Produto excelente, recomendo." → *"Obrigado, [Nome]! Saber que agradou é o que a gente mais quer. 🤩"*
- 5★ "Atendimento ótimo" → *"Que bom que curtiu o atendimento, [Nome]! A gente capricha mesmo."*
- 5★ sem texto → *"Valeu pelo carinho, [Nome]."*

### Repertório de emoji

- **Calorosos:** 🤩 😊 🙏 ❤️
- **Por nicho:** varia (comida 🔥👏🥩, beleza 💅✨ com cuidado, serviços 👏🙌)
- **Evitar por soar genérico:** ✨ 🎉 💯 🚀 (a menos que já seja a cara da marca em `pessoal/preferencias.md`)

---

## Workflow

### Passo 1 — Receber as reviews

Usuário cola texto, print ou lista. Extrair de cada uma: nome, nota, texto (se tiver). Print: transcrever antes de responder.

### Passo 2 — Responder cada uma

Uma resposta por review, seguindo o padrão acima.

**Calibragem por tipo:**

| Tipo | Como tratar |
|---|---|
| 5★ elogio específico | Agradecer + ecoar o que foi elogiado + emoji caloroso |
| 5★ genérica ("ótimo", "recomendo") | Agradecer + frase sobre o cuidado/processo + emoji opcional |
| 5★ sem texto | Agradecimento curto, sem inventar contexto que não existe |
| 4★ com ressalva | Agradecer + reconhecer o ponto + um compromisso simples, sem emoji |
| 3★ ou menos | **Parar e alinhar com o usuário antes de responder.** Negativa merece resposta pensada, não automática |

### Passo 3 — Entregar pronto pra colar

```
**[Nome]** — [estrelas] — "[trecho da review]"
→ [resposta]
```

Lote grande (5+): bloco corrido com separador claro entre cada item.

### Passo 4 — Histórico (só se pedido)

Se o usuário quiser guardar, salvar em `marketing/avaliacoes-google/YYYY-MM-DD-respostas.md`. Não criar isso por padrão.

---

## Regras

- Nunca repetir a mesma resposta em duas reviews diferentes
- Não prometer o que não depende só do negócio (prazo de fornecedor, logística terceirizada)
- Não pedir pra chamar no privado dentro da resposta pública, a menos que o usuário peça
- Só o primeiro nome, nunca o completo
- Não mencionar concorrente, mesmo se o cliente citar
- Review negativa: reconhecer sem se defender, oferecer canal privado só se autorizado
