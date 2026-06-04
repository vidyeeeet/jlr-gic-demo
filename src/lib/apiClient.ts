import { jlrNodes, nodeMap, adjacencyMap, type JLRNode, type Category } from './jlrData';

export let isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
}

export type SuggestionsCustom = { title: string; normalized: string }[];

export interface DocRef {
  source: 'jlr.com' | 'Wikipedia';
  title: string;
  url: string;
}

// Real source URLs per node — populated from scraper output.
// Until the scraper runs, each node falls back to its category landing page.
const NODE_REFS: Partial<Record<string, DocRef[]>> = {
  'Range Rover':        [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Range Rover (L460) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_(L460)' }],
  'Range Rover Sport':  [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Range Rover Sport (L461) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_Sport_(L461)' }],
  'Range Rover Velar':  [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Range Rover Velar — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_Velar' }],
  'Range Rover Evoque': [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Range Rover Evoque (L551) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_Evoque_(L551)' }],
  'Defender':           [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Land Rover Defender (L663) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Land_Rover_Defender_(L663)' }],
  'Discovery':          [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Land Rover Discovery (L462) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Land_Rover_Discovery_(L462)' }],
  'Discovery Sport':    [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Land Rover Discovery Sport (L550) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Land_Rover_Discovery_Sport_(L550)' }],
  'Jaguar XE':          [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Jaguar XE — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_XE' }],
  'Jaguar XF':          [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Jaguar XF (X260) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_XF_(X260)' }],
  'Jaguar F-PACE':      [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Jaguar F-Pace — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_F-Pace' }],
  'Jaguar E-PACE':      [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Jaguar E-Pace — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_E-Pace' }],
  'Jaguar F-TYPE':      [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Jaguar F-Type — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_F-Type' }],
  'PB Balaji':          [{ source: 'jlr.com', title: 'Leadership | JLR', url: 'https://www.jlr.com/leadership' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover' }],
  'Gerry McGovern OBE': [{ source: 'jlr.com', title: 'Modern Luxury | JLR', url: 'https://www.jlr.com/modern-luxury' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover' }],
  'Nick Rogers':        [{ source: 'jlr.com', title: 'Leadership | JLR', url: 'https://www.jlr.com/leadership' }],
  'Barbara Bergmeier':  [{ source: 'jlr.com', title: 'Leadership | JLR', url: 'https://www.jlr.com/leadership' }],
  'Prof. Sir Ralf Speth':[{ source: 'jlr.com', title: 'About JLR | JLR', url: 'https://www.jlr.com' }, { source: 'Wikipedia', title: 'Ralf Speth — Wikipedia', url: 'https://en.wikipedia.org/wiki/Ralf_Speth' }],
  'Rawdon Glover':      [{ source: 'jlr.com', title: 'Leadership | JLR', url: 'https://www.jlr.com/leadership' }],
  'Reimagine':          [{ source: 'jlr.com', title: 'Reimagine | JLR', url: 'https://www.jlr.com/reimagine' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover' }],
  'MLA Platform':       [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' }, { source: 'Wikipedia', title: 'Range Rover (L460) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_(L460)' }],
  'JEA Platform':       [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' }],
  'Pivi Pro':           [{ source: 'jlr.com', title: 'Reimagine | JLR', url: 'https://www.jlr.com/reimagine' }],
  'MHEV':               [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' }],
  'PHEV':               [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' }],
  'Terrain Response 2': [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }],
  'Air Suspension':     [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }],
  'InControl':          [{ source: 'jlr.com', title: 'Reimagine | JLR', url: 'https://www.jlr.com/reimagine' }],
  'ClearSight':         [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }],
  'Wade Sensing':       [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }],
  'Ingenium Engines':   [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' }, { source: 'Wikipedia', title: 'Ingenium engine family — Wikipedia', url: 'https://en.wikipedia.org/wiki/Ingenium_engine_family' }],
  'Gaydon':             [{ source: 'jlr.com', title: 'JLR Corporate | JLR', url: 'https://www.jlr.com' }, { source: 'Wikipedia', title: 'JLR Gaydon Centre — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover_Gaydon_Centre' }],
  'Solihull':           [{ source: 'jlr.com', title: 'JLR Corporate | JLR', url: 'https://www.jlr.com' }, { source: 'Wikipedia', title: 'Solihull plant — Wikipedia', url: 'https://en.wikipedia.org/wiki/Solihull_plant' }],
  'Halewood':           [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' }, { source: 'Wikipedia', title: 'JLR Halewood — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover_Halewood' }],
  'Castle Bromwich':    [{ source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover' }],
  'Whitley':            [{ source: 'jlr.com', title: 'JLR Corporate | JLR', url: 'https://www.jlr.com' }, { source: 'Wikipedia', title: 'Whitley plant — Wikipedia', url: 'https://en.wikipedia.org/wiki/Whitley_plant' }],
  'Graz, Austria':      [{ source: 'Wikipedia', title: 'Magna Steyr — Wikipedia', url: 'https://en.wikipedia.org/wiki/Magna_Steyr' }],
  'Shannon, Ireland':   [{ source: 'Wikipedia', title: 'JLR Engine Manufacturing Centre — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover_Engine_Manufacturing_Centre' }],
  'Project Artemis':    [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' }, { source: 'Wikipedia', title: 'Range Rover (L460) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_(L460)' }],
  'Project Panthera':   [{ source: 'jlr.com', title: 'Reimagine | JLR', url: 'https://www.jlr.com/reimagine' }],
  'Project Symphony':   [{ source: 'jlr.com', title: 'Reimagine | JLR', url: 'https://www.jlr.com/reimagine' }],
  'Modern Luxury':      [{ source: 'jlr.com', title: 'Modern Luxury | JLR', url: 'https://www.jlr.com/modern-luxury' }],
  '2039 Carbon Net Zero':[{ source: 'jlr.com', title: 'Sustainability | JLR', url: 'https://www.jlr.com/sustainability' }],
  'Destination Zero':   [{ source: 'jlr.com', title: 'Sustainability | JLR', url: 'https://www.jlr.com/sustainability' }],
};

// Category-level fallback URLs when a node has no specific entry
const CATEGORY_FALLBACK: Record<Category, DocRef> = {
  vehicle:    { source: 'jlr.com', title: 'Brands | JLR', url: 'https://www.jlr.com/brands' },
  person:     { source: 'jlr.com', title: 'Leadership | JLR', url: 'https://www.jlr.com/leadership' },
  department: { source: 'jlr.com', title: 'JLR Corporate | JLR', url: 'https://www.jlr.com' },
  technology: { source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/electrification' },
  location:   { source: 'jlr.com', title: 'JLR Corporate | JLR', url: 'https://www.jlr.com' },
  project:    { source: 'jlr.com', title: 'Reimagine | JLR', url: 'https://www.jlr.com/reimagine' },
};

function generateRefs(node: JLRNode): DocRef[] {
  return NODE_REFS[node.id] ?? [CATEGORY_FALLBACK[node.category]];
}

function buildPageObject(id: string) {
  const node = nodeMap.get(id);
  if (!node) return null;
  return {
    titles: { normalized: id },
    description: node.category,   // used as category label
    pageid: id.split('').reduce((h, c) => Math.imul(31, h) + c.charCodeAt(0) | 0, 0),
    extract_html: node.details,   // clean description text only
    refs: generateRefs(node),
    thumbnail: null,
    originalimage: null,
    content_urls: {
      desktop: { page: '#' },
      mobile:  { page: '#' },
    },
  };
}

async function suggestCustom(query: string): Promise<SuggestionsCustom> {
  const q = query.toLowerCase();
  return jlrNodes
    .filter(n => n.id.toLowerCase().includes(q) || n.description.toLowerCase().includes(q))
    .slice(0, 12)
    .map(n => ({ title: n.id, normalized: n.id }));
}

async function getSummary(query: string) {
  const exact = nodeMap.get(query);
  if (exact) return buildPageObject(query)!;
  const fuzzy = jlrNodes.find(n => n.id.toLowerCase() === query.toLowerCase());
  return buildPageObject(fuzzy?.id ?? jlrNodes[0].id)!;
}

async function getResponse(query: string) {
  const neighbors = adjacencyMap.get(query) ?? new Set<string>();
  return [...neighbors]
    .map(id => buildPageObject(id))
    .filter(Boolean) as NonNullable<ReturnType<typeof buildPageObject>>[];
}

function getItem(item: ReturnType<typeof buildPageObject>) {
  if (!item) return { id: '', data: {} as any };
  const { description, pageid, extract_html, originalimage, thumbnail, content_urls, refs } = item;
  const page_url = isMobile ? content_urls.mobile.page : content_urls.desktop.page;
  return {
    id: item.titles.normalized,
    data: { description, pageid, extract_html, originalimage, thumbnail, page_url, refs },
  };
}

function setLang(_lang: string) { /* no-op */ }

export const apiClient = {
  suggestCustom,
  getSummary,
  getResponse,
  getItem,
  setLang,
};
