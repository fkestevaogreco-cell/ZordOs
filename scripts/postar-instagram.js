#!/usr/bin/env node
/**
 * Publica um carrossel no Instagram via Meta Graph API.
 *
 * Uso:
 *   node scripts/postar-instagram.js <pasta-com-slides> "<legenda>"
 *
 * <pasta-com-slides> deve conter slide-01.png, slide-02.png, ... (2 a 10 imagens).
 *
 * Requer no .env (raiz do projeto):
 *   META_PAGE_ACCESS_TOKEN
 *   META_IG_USER_ID
 *   SITE_URL          (ex: https://triivision.com — usado só pra montar a URL pública das imagens)
 *   FTP_HOST, FTP_USER, FTP_PASS, FTP_REMOTE_PATH  (pra subir as imagens antes de postar)
 */

process.loadEnvFile();

const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const GRAPH_VERSION = 'v21.0';
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`;

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Faltando no .env: ${name}`);
    process.exit(1);
  }
  return v;
}

async function graphPost(pathSegment, params) {
  const url = new URL(`${GRAPH_BASE}/${pathSegment}`);
  const body = new URLSearchParams(params);
  const res = await fetch(url, { method: 'POST', body });
  const json = await res.json();
  if (!res.ok || json.error) {
    throw new Error(`Graph API error em ${pathSegment}: ${JSON.stringify(json.error || json)}`);
  }
  return json;
}

function uploadSlidesViaFtp(localDir, remoteSubdir) {
  const ftpHost = requireEnv('FTP_HOST');
  const ftpUser = requireEnv('FTP_USER');
  const ftpPass = requireEnv('FTP_PASS');
  const remoteBase = requireEnv('FTP_REMOTE_PATH').replace(/\/$/, '');
  const siteUrl = requireEnv('SITE_URL').replace(/\/$/, '');

  const files = fs.readdirSync(localDir)
    .filter(f => /^slide-\d+\.(png|jpg|jpeg)$/i.test(f))
    .sort();

  if (files.length < 2 || files.length > 10) {
    throw new Error(`Carrossel precisa de 2 a 10 imagens, achei ${files.length} em ${localDir}`);
  }

  const publicUrls = [];
  for (const file of files) {
    const localPath = path.join(localDir, file);
    const remotePath = `${remoteBase}/${remoteSubdir}/${file}`;
    const ftpUrl = `ftp://${ftpHost}/${remotePath}`;
    console.log(`Enviando ${file} -> ${remotePath}`);
    execSync(`curl -s --user '${ftpUser}:${ftpPass}' -T '${localPath}' '${ftpUrl}'`, { stdio: 'inherit' });
    publicUrls.push(`${siteUrl}/${remoteSubdir}/${file}`);
  }
  return publicUrls;
}

async function createCarouselItem(igUserId, token, imageUrl) {
  const json = await graphPost(igUserId, {
    image_url: imageUrl,
    is_carousel_item: 'true',
    access_token: token,
  });
  return json.id;
}

async function createCarouselContainer(igUserId, token, childIds, caption) {
  const json = await graphPost(igUserId, {
    media_type: 'CAROUSEL',
    children: childIds.join(','),
    caption,
    access_token: token,
  });
  return json.id;
}

async function publishContainer(igUserId, token, creationId) {
  const json = await graphPost(igUserId, {
    creation_id: creationId,
    access_token: token,
  });
  return json.id; // ID do post publicado
}

async function main() {
  const [, , localDir, caption] = process.argv;
  if (!localDir || !caption) {
    console.error('Uso: node scripts/postar-instagram.js <pasta-com-slides> "<legenda>"');
    process.exit(1);
  }
  if (!fs.existsSync(localDir)) {
    console.error(`Pasta não encontrada: ${localDir}`);
    process.exit(1);
  }

  const token = requireEnv('META_PAGE_ACCESS_TOKEN');
  const igUserId = requireEnv('META_IG_USER_ID');

  const slug = path.basename(localDir).replace(/[^a-z0-9-]/gi, '-').toLowerCase();
  const remoteSubdir = `posts/${slug}`;

  console.log('1/4 — Subindo imagens pro site (URL pública exigida pela API)...');
  const publicUrls = uploadSlidesViaFtp(localDir, remoteSubdir);
  console.log('URLs públicas:', publicUrls);

  console.log('2/4 — Criando containers de cada slide...');
  const childIds = [];
  for (const url of publicUrls) {
    const id = await createCarouselItem(igUserId, token, url);
    childIds.push(id);
  }

  console.log('3/4 — Criando container do carrossel...');
  const creationId = await createCarouselContainer(igUserId, token, childIds, caption);

  console.log('4/4 — Publicando...');
  const postId = await publishContainer(igUserId, token, creationId);

  console.log(`\nPublicado! ID do post: ${postId}`);
}

main().catch(err => {
  console.error('Falhou:', err.message);
  process.exit(1);
});
