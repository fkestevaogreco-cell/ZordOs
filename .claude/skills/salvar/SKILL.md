---
name: salvar
description: >
  Garante que o trabalho dessa pasta está salvo no GitHub (commit + push), configurando o
  repositório remoto na primeira vez que rodar. Use quando o usuário disser "salvar", "salva
  no github", "commit", "push", "/salvar" ou pedir backup do trabalho.
---

# /salvar — Backup no GitHub

Uma função só: o que você fez não pode existir só no seu computador.

## Workflow

### Ainda sem repositório

Testar com `git rev-parse --is-inside-work-tree`. Se der erro:

1. Perguntar:
   > "Primeira vez sincronizando. Já existe um repositório no GitHub pra essa pasta?
   > 1. Sim — me passa a URL (tipo https://github.com/usuario/nome.git)
   > 2. Não — crio agora, só me dá um nome"

2. **Resposta 1:** `git init`, `git add .`, `git commit -m "Setup inicial"`, `git branch -M main`, `git remote add origin <URL>`, `git push -u origin main`.

3. **Resposta 2:** checar se `gh` está disponível (`gh --version`).
   - Instalado: `git init` + commit inicial + `gh repo create <nome> --private --source=. --push`.
   - Não instalado: pedir pra instalar (cli.github.com) ou criar manualmente em github.com/new e voltar com a URL.

### Já configurado

1. `git status` sem mudanças → responder "Já tá tudo sincronizado" e parar.

2. Mostrar o status resumido e perguntar:
   > "Vou salvar essas mudanças. Quer escrever a mensagem do commit ou uso uma automática?"

3. Usar a mensagem do usuário, ou gerar uma a partir dos arquivos alterados.

4. `git add .` → `git commit -m "<mensagem>"` → `git push`.

5. Confirmar com a URL (via `git remote get-url origin`):
   > "Salvo. Repositório: <URL>"

## Regras

- `--force` só se o usuário pedir isso explicitamente
- Nada de `git reset --hard` ou outro comando destrutivo sem confirmação clara antes
- Push rejeitado por divergência: avisar e oferecer `git pull --rebase` antes de tentar de novo
- `user.name`/`user.email` não configurados: perguntar e rodar `git config --global` na primeira vez
