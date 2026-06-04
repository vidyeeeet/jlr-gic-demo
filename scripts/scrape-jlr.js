/**
 * JLR Knowledge Graph Scraper
 *
 * Crawls jlr.com (depth 3) and the JLR Wikipedia page (depth 1) and writes
 * scripts/jlr-scraped.json for Claude to process into jlrData.ts.
 *
 * Usage:
 *   npm install -D playwright
 *   npx playwright install chromium
 *   node scripts/scrape-jlr.js
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ────────────────────────────────────────────────────────────────────

const JLR_SEEDS = [
  'https://www.jlr.com',
  'https://www.jlr.com/en/about',
  'https://www.jlr.com/en/innovation',
  'https://www.jlr.com/en/sustainability',
  'https://www.jlr.com/en/vehicles',
];

const WIKI_SEED = 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover';

const JLR_MAX_DEPTH  = 3;
const WIKI_MAX_DEPTH = 1;   // only direct links from the JLR article

// URL patterns to skip on jlr.com
const JLR_SKIP_PATTERNS = [
  /\/news\//i, /\/press\//i, /\/careers\//i, /\/jobs\//i,
  /\/media\//i, /\/events\//i, /\/legal\//i, /\/privacy\//i,
  /\/cookie/i,  /\.(pdf|jpg|jpeg|png|gif|svg|webp|mp4|zip)$/i,
  /\?/, /#/,
];

// Wikipedia: only follow links that look JLR-related
const WIKI_ENTITY_HINTS = [
  'jaguar', 'land_rover', 'range_rover', 'defender', 'discovery',
  'f-pace', 'f-type', 'e-pace', 'velar', 'evoque',
  'solihull', 'halewood', 'gaydon', 'whitley',
  'reimagine', 'tata_motors', 'ingenium',
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function normalise(url) {
  try {
    const u = new URL(url);
    u.hash = '';
    u.search = '';
    return u.href.replace(/\/$/, '');
  } catch { return null; }
}

function isJlrInternal(href, base) {
  try {
    const u = new URL(href, base);
    return u.hostname === 'www.jlr.com' || u.hostname === 'jlr.com';
  } catch { return false; }
}

function shouldSkipJlr(url) {
  return JLR_SKIP_PATTERNS.some(p => p.test(url));
}

function isWikiJlrLink(href) {
  const path = href.toLowerCase();
  return (
    path.startsWith('/wiki/') &&
    !path.startsWith('/wiki/special:') &&
    !path.startsWith('/wiki/wikipedia:') &&
    !path.startsWith('/wiki/talk:') &&
    !path.startsWith('/wiki/file:') &&
    !path.startsWith('/wiki/help:') &&
    !path.startsWith('/wiki/category:') &&
    WIKI_ENTITY_HINTS.some(hint => path.includes(hint))
  );
}

async function extractPage(page, url, sourceLabel) {
  const title = await page.title().catch(() => '');

  const metaDescription = await page
    .$eval('meta[name="description"]', el => el.getAttribute('content'))
    .catch(() => '');

  const headings = await page.$$eval('h1, h2, h3', els =>
    els.map(el => el.innerText?.trim()).filter(Boolean).slice(0, 20)
  ).catch(() => []);

  // Grab meaningful paragraphs, skip nav/footer noise
  const bodyText = await page.$$eval('p', els => {
    const texts = els
      .map(el => el.innerText?.trim())
      .filter(t => t && t.length > 40);
    return texts.join(' ').slice(0, 2000);
  }).catch(() => '');

  return { url, source: sourceLabel, title, metaDescription, headings, bodyText };
}

// ── JLR crawler ───────────────────────────────────────────────────────────────

async function crawlJlr(browser) {
  const results = [];
  const visited = new Set();
  // queue items: { url, depth }
  const queue = JLR_SEEDS.map(u => ({ url: normalise(u), depth: 0 }));

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (compatible; JLR-Graph-Scraper/1.0)',
    locale: 'en-GB',
  });
  const page = await context.newPage();

  // Dismiss cookie banners via keyboard after load
  page.on('dialog', d => d.dismiss().catch(() => {}));

  while (queue.length > 0) {
    const { url, depth } = queue.shift();
    if (!url || visited.has(url) || shouldSkipJlr(url)) continue;
    visited.add(url);

    console.log(`[jlr.com d${depth}] ${url}`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(800); // let JS settle

      const data = await extractPage(page, url, 'jlr.com');
      results.push(data);

      if (depth < JLR_MAX_DEPTH) {
        const links = await page.$$eval('a[href]', els =>
          els.map(el => el.getAttribute('href')).filter(Boolean)
        ).catch(() => []);

        for (const href of links) {
          if (!isJlrInternal(href, url)) continue;
          const abs = normalise(new URL(href, url).href);
          if (abs && !visited.has(abs) && !shouldSkipJlr(abs)) {
            queue.push({ url: abs, depth: depth + 1 });
          }
        }
      }
    } catch (err) {
      console.warn(`  ✗ ${url} — ${err.message}`);
    }
  }

  await context.close();
  return results;
}

// ── Wikipedia crawler ─────────────────────────────────────────────────────────

async function crawlWikipedia(browser) {
  const results = [];
  const visited = new Set();
  const queue = [{ url: WIKI_SEED, depth: 0 }];

  const context = await browser.newContext();
  const page = await context.newPage();

  while (queue.length > 0) {
    const { url, depth } = queue.shift();
    if (!url || visited.has(url)) continue;
    visited.add(url);

    console.log(`[wikipedia d${depth}] ${url}`);

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });

      const data = await extractPage(page, url, 'Wikipedia');
      // For Wikipedia, bodyText is the article intro (first 2000 chars of paragraphs)
      results.push(data);

      if (depth < WIKI_MAX_DEPTH) {
        const links = await page.$$eval('#mw-content-text a[href]', els =>
          els.map(el => el.getAttribute('href')).filter(Boolean)
        ).catch(() => []);

        for (const href of links) {
          if (!isWikiJlrLink(href)) continue;
          const abs = normalise('https://en.wikipedia.org' + href);
          if (abs && !visited.has(abs)) {
            queue.push({ url: abs, depth: depth + 1 });
          }
        }
      }
    } catch (err) {
      console.warn(`  ✗ ${url} — ${err.message}`);
    }
  }

  await context.close();
  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Launching browser…');
  const browser = await chromium.launch({ headless: true });

  console.log('\n=== Crawling jlr.com ===');
  const jlrPages = await crawlJlr(browser);

  console.log('\n=== Crawling Wikipedia ===');
  const wikiPages = await crawlWikipedia(browser);

  await browser.close();

  const output = {
    scraped_at: new Date().toISOString(),
    total: jlrPages.length + wikiPages.length,
    pages: [...jlrPages, ...wikiPages],
  };

  const outPath = join(__dirname, 'jlr-scraped.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');

  console.log(`\nDone. ${jlrPages.length} jlr.com pages + ${wikiPages.length} Wikipedia pages`);
  console.log(`Output → ${outPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });
