# ZordOS

> O Claude Code que já chega te conhecendo.

Clona, roda `/instalar`, responde uma entrevista curta sobre você. Dali em
diante o Claude já sabe quem você é, como você escreve e o que está em foco
essa semana, e chega com 22 comandos prontos pra marketing, vendas, produção
e operação.

---

## Instalação

### Direto no terminal

```
git clone https://github.com/fkestevaogreco-cell/ZordOs.git
cd ZordOs
code .
```

Abre o terminal integrado do VS Code, roda `claude` e depois `/instalar`.

### Pedindo pro Claude

Se já tiver o Claude Code aberto numa pasta vazia, só cola:

```
Clona o https://github.com/fkestevaogreco-cell/ZordOs.git na pasta atual,
entra nela e roda o /instalar.
```

Ele clona, entra na pasta e já dispara a entrevista.

---

`/instalar` roda uma vez só. No fim, renomeia a pasta pro que fizer sentido
pra você (fecha o VS Code, renomeia no Finder/Explorer, abre de novo) e passa
a usar `/abrir` no início de cada sessão.

Já rodou o `/instalar` antes e a `pessoal/` já tá preenchida? Pula direto
pro `/abrir`.

Quer publicação automática (Instagram/Facebook) e geração de imagem por IA?
Copia `.env.example` pra `.env` e preenche as chaves (`scripts/README.md`
explica cada uma).

---

## Os comandos

**Rotina** — abrir e fechar o dia
`/abrir` carrega sua memória antes de cada sessão · `/salvar` sobe o
trabalho pro GitHub · `/atualizar` revê o projeto inteiro e atualiza a
memória que ficou pra trás · `/novo-projeto` isola uma pasta com `CLAUDE.md`
próprio pra cada cliente ou iniciativa · `/mapear-rotinas` entrevista você
sobre o que se repete toda semana e transforma em skill.

**Marketing e conteúdo**
`/carrossel` desenha carrosséis 1080×1350 na sua identidade visual (com ou
sem foto gerada por IA) · `/publicar-tema` parte de um tema e devolve artigo
de blog + carrossel + legendas pras três redes, tudo amarrado · `/seo` roda
demanda, concorrência, Google Meu Negócio, on-page, conteúdo, ads,
monitoramento e GEO em sequência · `/responder-avaliacoes` escreve resposta
humana pra review do Google · `/aprovar-post` publica blog, Instagram e
Facebook de uma vez · `/schwartz-copy` e `/ogilvy-copy` escrevem copy de
venda e de posicionamento nas metodologias de Eugene Schwartz e David
Ogilvy.

**Tráfego pago**
`/anuncio-google` monta a campanha inteira (grupos, RSAs, extensões,
negativas) em CSV pronto pro Google Ads Editor · `/relatorio-ads` lê os
exports do Google e do Meta e devolve relatório semanal com alertas e
recomendação.

**Dia a dia**
`/analisar-dados` abre um CSV, XLSX ou PDF e devolve resumo executivo ·
`/email-profissional` rascunha email a partir do contexto que você der ·
`/yt-transcript` puxa a transcrição de um vídeo do YouTube.

**Vendas**
`/proposta-comercial` monta orçamento a partir de um briefing rápido ·
`/relatorio-cliente` fecha o relatório periódico de status pra mandar pro
cliente.

**Operação técnica**
`/subir-site` publica o site (detecta se é por FTP ou git) e confere se
voltou 200 · `/subir-sql` aplica uma migration no Supabase, sempre com
confirmação antes de rodar · `/verificar-site` faz o healthcheck: site no
ar, SSL válido, link quebrado.

---

## Por baixo do capô

`pessoal/` é o que o Claude lê antes de responder: `sobre-mim.md` (quem
você é), `preferencias.md` (como você fala) e `agora.md` (o que importa
agora). `marca/` guarda cor, fonte e padrão visual, e qualquer peça
gerada respeita isso.
`scripts/` são as integrações (Instagram, Facebook, geração de imagem) que
as skills chamam quando precisam sair do alcance da IA pura.
