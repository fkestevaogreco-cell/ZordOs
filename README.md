# ZordOS

> Seu agente pessoal dentro do Claude Code.



---

## Instalação

### Pelo Claude Code (mais rápido)

Abre o Claude Code em qualquer pasta e cola:

```
Clona o https://github.com/fkestevaogreco-cell/ZordOs.git na pasta atual,
entra nela e roda o /instalar.
```

Ele clona, entra na pasta nova e dispara a entrevista de setup. Você só
responde.

### Pelo terminal (mais previsível)

```
git clone https://github.com/fkestevaogreco-cell/ZordOs.git
cd ZordOs
code .
```

Na janela do VS Code que abrir: terminal integrado → `claude` → `/instalar`.

---

Quando o `/instalar` terminar, renomeia a pasta `ZordOs/` pro que fizer
sentido pra você (fecha o VS Code, renomeia no Finder/Explorer, abre de
novo). O `/instalar` roda uma vez só — te entrevista sobre contexto
pessoal/negócio, monta a memória (`_memoria/`) e adapta o `CLAUDE.md`.
Depois disso, todo dia começa com `/abrir`.

Se já rodou o `/instalar` antes (e `_memoria/` já está preenchida com o
seu contexto), pode pular direto pro `/abrir`.

Pra publicação automática (Instagram/Facebook) e geração de imagem IA,
copia `.env.example` pra `.env` e preenche as chaves — ver `scripts/README.md`
pra detalhes de cada uma.

---

## O sistema

**Núcleo** — o jeito de operar o dia a dia
`/abrir` carrega o contexto antes de cada sessão de trabalho · `/salvar`
faz commit + push no GitHub · `/atualizar` varre o projeto e atualiza
a memória · `/novo-projeto` cria pasta isolada pra cada cliente ou
iniciativa · `/mapear-rotinas` descobre o que você repete e transforma
em skill personalizada.

**Conteúdo e SEO** — vitrine pública e produção
`/carrossel` cria carrosséis 1080×1350 com identidade visual (com ou
sem foto IA) · `/publicar-tema` pega um tema e entrega artigo de blog +
carrossel + 3 legendas amarradas · `/seo` roda fluxo completo de 8 passos
(demanda, concorrência, GMB, on-page, conteúdo, ads, monitoramento, GEO)
· `/responder-avaliacoes` escreve respostas humanas pras reviews do
Google · `/aprovar-post` publica blog + Instagram + Facebook num comando
· `/schwartz-copy` escreve copy de venda (landing page, email, VSL) com
a metodologia de Eugene Schwartz · `/ogilvy-copy` escreve copy
institucional e de posicionamento com a metodologia de David Ogilvy.

**Anúncios pagos** — onde o dinheiro entra
`/anuncio-google` monta a campanha inteira em CSV pronto pra importar
no Google Ads Editor · `/relatorio-ads` lê os exports de Google + Meta
e devolve relatório semanal com alertas e recomendações.

**Produção** — ferramentas do dia a dia
`/analisar-dados` lê CSV/XLSX/PDF e gera resumo executivo ·
`/email-profissional` rascunha email a partir de contexto livre ·
`/yt-transcript` extrai a transcrição de um vídeo do YouTube.

**Comercial** — relação com cliente
`/proposta-comercial` monta orçamento/proposta a partir de um briefing rápido ·
`/relatorio-cliente` monta relatório periódico de status pra mandar pro cliente.

**Infraestrutura** — site e banco
`/subir-site` publica o site no ar (FTP ou git, detecta qual usar) ·
`/subir-sql` aplica uma migration/SQL no Supabase, com confirmação antes de rodar ·
`/verificar-site` healthcheck — site no ar, SSL válido, links quebrados.

---

## Como o ZordOS pensa

`_memoria/` é o cérebro. Tudo que importa mora aqui — quem é você,
como você fala, o que tá em foco essa semana. O Claude lê isso antes de
cada resposta. Quanto melhor a memória, melhor o sistema.

`identidade/` é o rosto. Cores, fontes, logo, padrão visual. Todo
carrossel, slide, peça que o sistema gera respeita isso.

`scripts/` são as integrações (Instagram, Facebook, geração de imagem)
que as skills chamam quando precisam sair do alcance da IA pura.

