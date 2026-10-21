---
name: yt-transcript
description: >
  Extrai a transcrição de um vídeo do YouTube (legendas automáticas ou enviadas pelo
  canal) usando yt-dlp, e devolve o texto limpo, sem timestamps. Suporta múltiplos
  idiomas. Use quando o usuário colar um link do YouTube e pedir "transcrição",
  "transcreve esse vídeo", "tira o texto desse vídeo", "resume esse vídeo do youtube",
  ou /yt-transcript.
---

# /yt-transcript — Transcrição de vídeo do YouTube

## Pré-requisito

`yt-dlp` instalado na máquina:
```bash
brew install yt-dlp
```

Se o comando `yt-dlp --version` falhar, parar e pedir pro usuário instalar antes de continuar.

---

## Workflow

### Passo 1 — Confirmar o vídeo e o idioma

Se o usuário só colou o link, seguir direto assumindo o idioma original do vídeo. Se
não for óbvio ou o usuário pedir explicitamente outro idioma, perguntar: "Transcrever
em que idioma? (original do vídeo, ou outro se tiver legenda traduzida disponível)"

### Passo 2 — Baixar a legenda (sem baixar o vídeo)

```bash
yt-dlp --write-auto-sub --write-sub --sub-lang <idioma>,<idioma>-orig --skip-download \
  --sub-format vtt -o "/tmp/yt-transcript-%(id)s.%(ext)s" "<url>"
```

- `--write-sub` pega legenda enviada pelo canal (mais precisa) se existir
- `--write-auto-sub` pega legenda automática como fallback
- Nunca baixar o vídeo em si — só a legenda, é o suficiente e muito mais rápido

Se nenhuma legenda existir no idioma pedido, listar os idiomas disponíveis
(`yt-dlp --list-subs "<url>"`) e perguntar qual usar.

### Passo 3 — Limpar o arquivo VTT

O arquivo `.vtt` vem com timestamps e metadados de cue. Ler o arquivo e extrair só o
texto corrido:

- Remover linhas de timestamp (`00:00:01.000 --> 00:00:04.000`)
- Remover tags de formatação (`<c>`, `</c>`, `<00:00:01.000>`)
- Juntar linhas duplicadas (legenda automática costuma repetir a linha anterior a cada cue)
- Juntar em parágrafos corridos, não lista linha por linha

### Passo 4 — Entregar

Perguntar ou inferir do pedido original o que fazer com o texto:

- **Só a transcrição** → devolver o texto limpo direto na resposta
- **Virar conteúdo** (o usuário mencionou carrossel, post, newsletter) → salvar em
  `dados/transcricoes/<slug-do-video>.md` com o link do vídeo no topo, e seguir pra
  skill correspondente (`/carrossel`, `/publicar-tema`, etc.) usando esse texto como base

Sempre limpar o arquivo temporário (`/tmp/yt-transcript-*`) depois de usar.

---

## Regras

- Nunca baixar o vídeo completo — só legenda, é tudo que essa skill precisa
- Se o vídeo não tiver nenhuma legenda (nem automática), avisar que não é possível
  transcrever esse vídeo específico — não inventar conteúdo
- Transcrição automática do YouTube erra pontuação e nomes próprios — se o usuário vai
  publicar o texto como está (não só usar como referência), avisar que vale uma revisão
