---
name: subir-sql
description: >
  Aplica um arquivo .sql (migration, alteração de schema, script de dados) direto no
  banco Supabase do projeto, com confirmação humana obrigatória antes de rodar. Use
  quando o usuário disser "sobe esse sql pro supabase", "aplica essa migration",
  "roda esse script no banco", "atualiza o schema", ou /subir-sql.
---

# /subir-sql — Aplicar SQL no Supabase

Operação técnica, de risco real — o SQL roda direto no banco de produção. Pensada
pra quem já mexe com banco (perfil agência/empresa com site/app próprio), não é algo
que um cliente final sem conhecimento técnico deveria rodar sem supervisão.

## Pré-requisito (uma vez só)

`psql` instalado na máquina:
```bash
# Mac
brew install libpq && brew link --force libpq
# confirma:
psql --version
```

`DATABASE_URL` no `.env` — pega em **Supabase → Project Settings → Database →
Connection string** (usar a versão "URI", modo "Session" ou "Transaction pooler"
conforme o painel indicar):
```
DATABASE_URL=postgresql://postgres.[ref]:[senha]@[host]:5432/postgres
```

Se `psql --version` falhar ou `DATABASE_URL` não existir, parar e guiar o usuário
nesses dois passos antes de continuar.

---

## Workflow

### Passo 1 — Localizar o arquivo

Se o usuário não anexou/apontou o `.sql`, perguntar o caminho. Se for um projeto que
já usa `supabase/migrations/`, sugerir seguir essa convenção (nome com prefixo numérico,
ex: `0009_nome_da_mudanca.sql`) em vez de um arquivo solto.

### Passo 2 — Mostrar o conteúdo e pedir confirmação

**Nunca rodar sem esse passo.** Mostrar o SQL completo (ou um resumo claro se for muito
longo — o que cria, o que altera, o que apaga) e perguntar:

> "Vou rodar isso no banco de produção. Confirma? (sim/não)"

Se o SQL tiver `DROP TABLE`, `DROP COLUMN`, `DELETE` ou `TRUNCATE` sem `WHERE`, destacar
isso explicitamente antes de pedir confirmação — são os comandos que perdem dado de
verdade.

### Passo 3 — Rodar

```bash
psql "$DATABASE_URL" -f <arquivo.sql> -v ON_ERROR_STOP=1
```

`-v ON_ERROR_STOP=1` é essencial — sem isso o `psql` continua rodando os comandos
seguintes mesmo depois de um erro, o que pode deixar o banco num estado parcial e
confuso.

### Passo 4 — Reportar

Se deu certo:
```
✓ SQL aplicado com sucesso: <arquivo>
```

Se deu erro, mostrar a mensagem exata do Postgres (geralmente aponta a linha/comando
que falhou) e **não tentar "corrigir e rodar de novo" sozinho** sem mostrar a correção
pro usuário primeiro — o estado do banco nesse ponto pode já ter mudado parcialmente.

---

## Regras

- Confirmação humana é obrigatória sempre, sem exceção — mesmo pra SQL que "parece"
  inofensivo (um `ALTER TABLE ADD COLUMN` mal feito também pode travar uma tabela grande)
- Nunca inventar ou "completar" SQL incompleto que o usuário mandou — se faltar algo
  (ex: um `;` ou um `END` de function), apontar o problema, não adivinhar a intenção
- Se o projeto usa RLS (Row Level Security, padrão em projetos Supabase bem feitos),
  lembrar de habilitar/policiar tabelas novas — não deixar uma tabela nova sem RLS
  silenciosamente
- Depois de aplicar, sugerir atualizar `types/database.ts` (ou equivalente) se o
  projeto mantém tipos TypeScript do schema à mão
