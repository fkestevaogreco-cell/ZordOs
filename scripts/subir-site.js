#!/usr/bin/env node
/**
 * Sobe uma pasta local inteira pro servidor via FTP (sobrescreve o que já existe lá,
 * não apaga nada que só exista no servidor).
 *
 * Uso:
 *   node scripts/subir-site.js <pasta-local>
 *
 * Requer no .env (raiz do projeto):
 *   FTP_HOST, FTP_USER, FTP_PASS, FTP_REMOTE_PATH
 *
 * Usa `curl` (já vem instalado no macOS/Linux) — sem dependência de pacote novo.
 */

process.loadEnvFile();

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Faltando ${name} no .env`);
    process.exit(1);
  }
  return value;
}

const host = requireEnv('FTP_HOST');
const user = requireEnv('FTP_USER');
const pass = requireEnv('FTP_PASS');
const remotePath = requireEnv('FTP_REMOTE_PATH').replace(/\/$/, '');

const localDir = process.argv[2];
if (!localDir || !fs.existsSync(localDir) || !fs.statSync(localDir).isDirectory()) {
  console.error('Uso: node scripts/subir-site.js <pasta-local>');
  process.exit(1);
}

function walk(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      files = files.concat(walk(path.join(dir, entry.name), rel));
    } else {
      files.push(rel);
    }
  }
  return files;
}

const files = walk(localDir);
if (files.length === 0) {
  console.error(`Pasta "${localDir}" está vazia — nada pra enviar.`);
  process.exit(1);
}

console.log(`Enviando ${files.length} arquivo(s) via FTP para ${host}${remotePath}...`);

let sent = 0;
let failed = [];
for (const rel of files) {
  const localFile = path.join(localDir, rel);
  const remoteUrl = `ftp://${host}${remotePath}/${rel}`;
  try {
    execFileSync('curl', [
      '-s', '--ftp-create-dirs',
      '-T', localFile,
      '-u', `${user}:${pass}`,
      remoteUrl,
    ]);
    sent++;
  } catch {
    failed.push(rel);
  }
  process.stdout.write(`\r${sent + failed.length}/${files.length}`);
}

console.log(`\n${sent} arquivo(s) enviados com sucesso.`);
if (failed.length > 0) {
  console.error(`${failed.length} arquivo(s) falharam:`);
  for (const f of failed) console.error(`  - ${f}`);
  process.exit(1);
}
