/**
 * JLR Knowledge Graph Scraper (node-fetch + cheerio, no browser needed)
 *
 * Crawls jlr.com (depth 2) and JLR Wikipedia page (depth 1).
 * Writes scripts/jlr-scraped.json.
 *
 * Usage:  node scripts/scrape-jlr.js
 */

import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ────────────────────────────────────────────────────────────────────

const JLR_SEEDS = [
  'https://www.jlr.com',
  'https://www.jlr.com/en',
  'https://www.jlr.com/en/about',
  'https://www.jlr.com/en/innovation',
  'https://www.jlr.com/en/sustainability',
  'https://www.jlr.com/en/about/leadership',
  'https://www.jlr.com/en/about/manufacturing',
  'https://www.jlr.com/en/innovation/electrification',
];

const WIKI_SEED  = 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover';
const JLR_MAX_DEPTH  = 2;
const WIKI_MAX_DEPTH = 1;
const DELAY_MS = 600; // polite crawl delay

const JLR_SKIP = [
  /\/news\b/i, /\/press\b/i, /\/careers\b/i, /\/jobs\b/i,
  /\/media\b/i, /\/events\b/i, /\/legal\b/i, /\/privacy\b/i,
  /\/cookie/i,  /\.(pdf|jpg|jpeg|png|gif|svg|webp|mp4|zip)(\?|$)/i,
];

const WIKI_HINTS = [
  'jaguar', 'land_rover', 'range_rover', 'defender', 'discovery',
  'f-pace', 'f_pace', 'f-type', 'f_type', 'e-pace', 'e_pace',
  'velar', 'evoque', 'solihull', 'halewood', 'gaydon', 'whitley',
  'reimagine', 'tata_motors', 'ingenium', 'ralf_speth',
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; JLR-Graph-Scraper/1.0; educational use)',
  'Accept-Language': 'en-GB,en;q=0.9',
};

function normalise(url) {
  try {
    const u = new URL(url);
    u.hash = '';
    // keep query only for Wikipedia (it doesn't use query strings for articles)
    u.search = '';
    return u.href.replace(/\/$/, '');
  } catch { return null; }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function isJlrInternal(href, base) {
  try {
    const u = new URL(href, base);
    return u.hostname === 'www.jlr.com' || u.hostname === 'jlr.com';
  } catch { return false; }
}

function shouldSkipJlr(url) {
  return JLR_SKIP.some(p => p.test(url));
}

function isWikiJlrLink(href) {
  const p = href.toLowerCase();
  return (
    p.startsWith('/wiki/') &&
    !/special:|wikipedia:|talk:|file:|help:|category:|portal:|template:/i.test(p) &&
    WIKI_HINTS.some(h => p.includes(h))
  );
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: HEADERS, redirect: 'follow', timeout: 15000 });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = res.headers.get('content-type') ?? '';
  if (!ct.includes('html')) throw new Error(`Not HTML: ${ct}`);
  return res.text();
}

function extractPage(html, url, sourceLabel) {
  const $ = cheerio.load(html);

  // Remove nav, footer, script, style noise
  $('nav, footer, script, style, noscript, aside, .cookie, #cookie').remove();

  const title = $('title').first().text().trim()
    || $('h1').first().text().trim();

  const metaDescription = $('meta[name="description"]').attr('content')?.trim()
    || $('meta[property="og:description"]').attr('content')?.trim()
    || '';

  const headings = [];
  $('h1, h2, h3').each((_, el) => {
    const t = $(el).text().trim();
    if (t && t.length > 2 && headings.length < 25) headings.push(t);
  });

  const paragraphs = [];
  $('p').each((_, el) => {
    const t = $(el).text().trim();
    if (t.length > 40) paragraphs.push(t);
  });
  const bodyText = paragraphs.join(' ').slice(0, 3000);

  return { url, source: sourceLabel, title, metaDescription, headings, bodyText };
}

function collectLinks($, base, filter) {
  const links = [];
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (href && filter(href, base)) {
      const abs = normalise(new URL(href, base).href);
      if (abs) links.push(abs);
    }
  });
  return [...new Set(links)];
}

// ── Crawlers ──────────────────────────────────────────────────────────────────

async function crawlJlr() {
  const results = [];
  const visited = new Set();
  const queue = JLR_SEEDS.map(u => ({ url: normalise(u), depth: 0 }));

  while (queue.length > 0) {
    const { url, depth } = queue.shift();
    if (!url || visited.has(url) || shouldSkipJlr(url)) continue;
    visited.add(url);

    console.log(`[jlr.com d${depth}] ${url}`);
    await sleep(DELAY_MS);

    let html;
    try {
      html = await fetchHtml(url);
    } catch (e) {
      console.warn(`  ✗ ${e.message}`);
      continue;
    }

    const $ = cheerio.load(html);
    const page = extractPage(html, url, 'jlr.com');

    // Only keep pages that have some meaningful content
    if (page.bodyText.length > 100 || page.headings.length > 0) {
      results.push(page);
    }

    if (depth < JLR_MAX_DEPTH) {
      const links = collectLinks($, url, isJlrInternal)
        .filter(l => !shouldSkipJlr(l) && !visited.has(l));
      for (const l of links) {
        queue.push({ url: l, depth: depth + 1 });
      }
    }
  }

  return results;
}

async function crawlWikipedia() {
  const results = [];
  const visited = new Set();
  const queue = [{ url: WIKI_SEED, depth: 0 }];

  while (queue.length > 0) {
    const { url, depth } = queue.shift();
    if (!url || visited.has(url)) continue;
    visited.add(url);

    console.log(`[wikipedia d${depth}] ${url}`);
    await sleep(DELAY_MS);

    let html;
    try {
      html = await fetchHtml(url);
    } catch (e) {
      console.warn(`  ✗ ${e.message}`);
      continue;
    }

    const $ = cheerio.load(html);
    const page = extractPage(html, url, 'Wikipedia');
    results.push(page);

    if (depth < WIKI_MAX_DEPTH) {
      const links = [];
      $('#mw-content-text a[href]').each((_, el) => {
        const href = $(el).attr('href');
        if (href && isWikiJlrLink(href)) {
          const abs = normalise('https://en.wikipedia.org' + href.split('?')[0]);
          if (abs && !visited.has(abs)) links.push(abs);
        }
      });
      for (const l of [...new Set(links)]) {
        queue.push({ url: l, depth: depth + 1 });
      }
    }
  }

  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== Crawling jlr.com ===');
  const jlrPages = await crawlJlr();

  console.log('\n=== Crawling Wikipedia ===');
  const wikiPages = await crawlWikipedia();

  const output = {
    scraped_at: new Date().toISOString(),
    total: jlrPages.length + wikiPages.length,
    jlr_count: jlrPages.length,
    wiki_count: wikiPages.length,
    pages: [...jlrPages, ...wikiPages],
  };

  const outPath = join(__dirname, 'jlr-scraped.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');

  console.log(`\nDone: ${jlrPages.length} jlr.com + ${wikiPages.length} Wikipedia pages`);
  console.log(`Written → ${outPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });
