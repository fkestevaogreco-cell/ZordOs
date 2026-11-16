---
name: criar-site
description: >
  Cria um site (landing page) completo em HTML, do briefing até a pasta pronta pra publicar:
  entrevista curta, estrutura aprovada, texto, visual na identidade da marca, versão de
  celular conferida e entrega pro /subir-site. Serve pro seu negócio ou pro de um cliente.
  Use quando o usuário pedir "cria um site", "faz uma landing", "página pro cliente X",
  "site institucional", "página de vendas", ou /criar-site.
---

# /criar-site: do briefing ao site pronto

Um site de negócio local tem um trabalho só: fazer a pessoa certa chamar, agendar ou
comprar. Tudo nessa skill serve a isso.

## Dependências

- **Identidade:** `marca/design.md` (site do próprio negócio) ou a identidade do cliente
- **Contexto:** `pessoal/sobre-mim.md`
- **Tom:** `pessoal/preferencias.md`
- **Conferência visual (opcional):** Playwright (`npx playwright screenshot`)
- **Saída:** `sites/<slug>/` com `index.html` e a pasta `img/`. Se o site for de um cliente
  que já tem pasta própria (criada com `/novo-projeto`), salvar em `<pasta-do-cliente>/site/`.
- **Publicação:** `/subir-site`

---

## Passo 1: de quem é o site

Perguntar, se não vier no pedido:
> "Esse site é do seu negócio ou de um cliente?"

Cliente → sugerir `/novo-projeto` antes, pra separar os arquivos dele (opcional, não travar
se o usuário quiser seguir direto). Cliente com identidade própria → pedir logo e cores;
sem identidade → propor uma paleta de 2 cores + 1 neutra e confirmar antes de usar.

## Passo 2: briefing

Uma mensagem só, no máximo 6 perguntas. Pular o que já veio no pedido ou já está em
`pessoal/`:

1. Nome do negócio, cidade e o que ele faz, em uma frase
2. Pra quem vende (quem é o cliente ideal)
3. O que a pessoa deve fazer no site: chamar no WhatsApp (qual número?), agendar,
   comprar ou preencher um formulário
4. Serviços ou produtos que precisam aparecer (com preço, se quiser mostrar)
5. Material real que já existe: logo, fotos, avaliações do Google, Instagram, endereço,
   horário de funcionamento
6. Um site de referência que você gosta (link ou print), se tiver

Se o negócio tiver perfil no Google ou no Instagram, pedir pro usuário colar o texto e as
avaliações de lá: é o material mais rápido e mais confiável.

## Passo 3: estrutura (aprovar antes de escrever)

Mostrar as seções em lista numerada, uma linha cada, e esperar o OK. Ponto de partida pra
negócio local, ajustado a cada caso:

1. **Topo:** o que é, pra quem, onde fica e o botão principal
2. **Serviços:** o que o negócio oferece, em cartões curtos
3. **Diferenciais:** motivos concretos pra escolher esse negócio (tempo de mercado,
   garantia, atendimento, estrutura), nunca frases vagas
4. **Prova:** fotos reais, avaliações reais do Google, números reais
5. **Onde fica:** endereço, mapa e horário
6. **Perguntas frequentes:** de 4 a 6 dúvidas que travam a venda
7. **Chamada final e rodapé:** botão principal de novo, contato e redes

## Passo 4: texto

- Título do topo diz o que o negócio faz e onde ("Estética facial em Franca"), sem slogan
  genérico. Ajuda o cliente a entender e ajuda o Google
- Cada botão diz o que acontece ao clicar: "Chamar no WhatsApp", "Ver horários"
- Frases curtas, no tom de `pessoal/preferencias.md` (ou do cliente)
- Nada inventado: depoimento, nome de cliente, número, prêmio ou certificação só se o
  usuário forneceu. O que faltar vira marcador visível, tipo `[avaliação real do Google]`,
  pra trocar depois
- Evitar travessão (—) e a fórmula "Não é X. É Y.": soam como texto de IA

## Passo 5: montar o HTML

Padrões técnicos (o `marca/design.md` manda em cor, fonte e estilo quando estiver preenchido):

- **Um `index.html`**, com o CSS dentro de `<style>` e o mínimo de JavaScript. Sem framework,
  sem build: abre em qualquer navegador e sobe em qualquer hospedagem
- **Celular primeiro:** o CSS base é pra tela de 390px de largura; o desktop entra com
  `@media (min-width: 768px)`. A maioria das visitas de negócio local vem do celular
- **Cores** como variáveis CSS no `:root`, tiradas da identidade
- **Fonte:** a do `marca/design.md`; sem definição, Manrope (Google Fonts)
- **WhatsApp:** link `https://wa.me/55<DDD><número>?text=<mensagem codificada>`, no botão
  principal e num botão flutuante no celular
- **Google:** `<html lang="pt-BR">`, `<title>` com negócio + cidade, `meta description`,
  Open Graph (`og:title`, `og:description`, `og:image` de 1200x630), favicon, um `<h1>` só
  e `alt` em todas as imagens
- **Mapa:** `<iframe src="https://www.google.com/maps?q=<endereço codificado>&output=embed">`
- **Imagens:** em `img/`, até ~300 KB cada (JPG ou WebP), com `width`/`height` e
  `loading="lazy"` abaixo do topo. Vídeo só se o usuário enviar, e com menos de 25 MB
- **Leitura:** texto com pelo menos 16px no celular, botões com pelo menos 44px de altura,
  contraste bom entre texto e fundo
- **Foto que falta:** bloco neutro com a legenda `[foto: fachada]`, nunca foto de banco de
  imagem fingindo ser do negócio

## Passo 6: conferir antes de entregar

1. Abrir no navegador: `open sites/<slug>/index.html` (Mac) ou `start sites/<slug>/index.html`
   (Windows)
2. Com Playwright disponível, tirar print em 390x844 (celular) e 1440x900 (desktop), olhar
   os dois e corrigir o que estiver errado. Sem Playwright, pedir pro usuário abrir no
   celular ou no modo celular do navegador (F12 → ícone de celular)
3. Checklist:
   - sem rolagem pro lado no celular
   - botão do WhatsApp abre o número certo com a mensagem
   - todas as imagens carregam
   - título e descrição preenchidos
   - marcadores `[...]` que ainda faltam trocar, listados pro usuário

Resumo final:
```
✓ Site pronto: sites/<slug>/index.html
Falta trocar: [lista de marcadores, ou "nada"]
Próximo passo: /subir-site pra colocar no ar
```

## Passo 7: publicar

Oferecer o `/subir-site`. Quem ainda não tem hospedagem pode usar o modo Cloudflare, que é
grátis.

---

## Regras

- Nunca inventar depoimento, cliente, número ou prêmio
- Estrutura aprovada antes de escrever o texto; texto e visual juntos só depois disso
- Pedido de ajuste depois da entrega: mexer só no que foi pedido, sem refazer o resto
- Nunca publicar sem o OK do usuário
