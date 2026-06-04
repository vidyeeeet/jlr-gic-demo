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
  'Range Rover':        [{ source: 'jlr.com', title: 'Range Rover | Land Rover', url: 'https://www.landrover.com/vehicles/range-rover/index.html' }, { source: 'Wikipedia', title: 'Range Rover (L460) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_(L460)' }],
  'Range Rover Sport':  [{ source: 'jlr.com', title: 'Range Rover Sport | Land Rover', url: 'https://www.landrover.com/vehicles/range-rover-sport/index.html' }, { source: 'Wikipedia', title: 'Range Rover Sport — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_Sport' }],
  'Range Rover Velar':  [{ source: 'jlr.com', title: 'Range Rover Velar | Land Rover', url: 'https://www.landrover.com/vehicles/range-rover-velar/index.html' }, { source: 'Wikipedia', title: 'Range Rover Velar — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_Velar' }],
  'Range Rover Evoque': [{ source: 'jlr.com', title: 'Range Rover Evoque | Land Rover', url: 'https://www.landrover.com/vehicles/range-rover-evoque/index.html' }, { source: 'Wikipedia', title: 'Range Rover Evoque — Wikipedia', url: 'https://en.wikipedia.org/wiki/Range_Rover_Evoque' }],
  'Defender':           [{ source: 'jlr.com', title: 'Defender | Land Rover', url: 'https://www.landrover.com/vehicles/defender/index.html' }, { source: 'Wikipedia', title: 'Land Rover Defender — Wikipedia', url: 'https://en.wikipedia.org/wiki/Land_Rover_Defender' }],
  'Discovery':          [{ source: 'jlr.com', title: 'Discovery | Land Rover', url: 'https://www.landrover.com/vehicles/discovery/index.html' }, { source: 'Wikipedia', title: 'Land Rover Discovery — Wikipedia', url: 'https://en.wikipedia.org/wiki/Land_Rover_Discovery' }],
  'Discovery Sport':    [{ source: 'jlr.com', title: 'Discovery Sport | Land Rover', url: 'https://www.landrover.com/vehicles/discovery-sport/index.html' }, { source: 'Wikipedia', title: 'Land Rover Discovery Sport — Wikipedia', url: 'https://en.wikipedia.org/wiki/Land_Rover_Discovery_Sport' }],
  'Jaguar XE':          [{ source: 'jlr.com', title: 'Jaguar XE | Jaguar', url: 'https://www.jaguar.com/jaguar-range/xe/index.html' }, { source: 'Wikipedia', title: 'Jaguar XE — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_XE' }],
  'Jaguar XF':          [{ source: 'jlr.com', title: 'Jaguar XF | Jaguar', url: 'https://www.jaguar.com/jaguar-range/xf/index.html' }, { source: 'Wikipedia', title: 'Jaguar XF — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_XF' }],
  'Jaguar F-PACE':      [{ source: 'jlr.com', title: 'Jaguar F-PACE | Jaguar', url: 'https://www.jaguar.com/jaguar-range/f-pace/index.html' }, { source: 'Wikipedia', title: 'Jaguar F-Pace — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_F-Pace' }],
  'Jaguar E-PACE':      [{ source: 'jlr.com', title: 'Jaguar E-PACE | Jaguar', url: 'https://www.jaguar.com/jaguar-range/e-pace/index.html' }, { source: 'Wikipedia', title: 'Jaguar E-Pace — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_E-Pace' }],
  'Jaguar F-TYPE':      [{ source: 'jlr.com', title: 'Jaguar F-TYPE | Jaguar', url: 'https://www.jaguar.com/jaguar-range/f-type/index.html' }, { source: 'Wikipedia', title: 'Jaguar F-type — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_F-type' }],
  'PB Balaji':          [{ source: 'jlr.com', title: 'JLR Leadership | JLR', url: 'https://www.jlr.com/en/about/leadership' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover' }],
  'Gerry McGovern OBE': [{ source: 'jlr.com', title: 'JLR Leadership | JLR', url: 'https://www.jlr.com/en/about/leadership' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover' }],
  'Nick Rogers':        [{ source: 'jlr.com', title: 'JLR Leadership | JLR', url: 'https://www.jlr.com/en/about/leadership' }],
  'Barbara Bergmeier':  [{ source: 'jlr.com', title: 'JLR Leadership | JLR', url: 'https://www.jlr.com/en/about/leadership' }],
  'Prof. Sir Ralf Speth':[{ source: 'jlr.com', title: 'JLR About | JLR', url: 'https://www.jlr.com/en/about' }, { source: 'Wikipedia', title: 'Ralf Speth — Wikipedia', url: 'https://en.wikipedia.org/wiki/Ralf_Speth' }],
  'Rawdon Glover':      [{ source: 'jlr.com', title: 'JLR Leadership | JLR', url: 'https://www.jlr.com/en/about/leadership' }],
  'Reimagine':          [{ source: 'jlr.com', title: 'Reimagine Strategy | JLR', url: 'https://www.jlr.com/en/about/reimagine' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover#Reimagine_strategy' }],
  'MLA Platform':       [{ source: 'jlr.com', title: 'Innovation | JLR', url: 'https://www.jlr.com/en/innovation' }, { source: 'Wikipedia', title: 'Jaguar Land Rover — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover' }],
  'JEA Platform':       [{ source: 'jlr.com', title: 'Innovation | JLR', url: 'https://www.jlr.com/en/innovation' }],
  'Pivi Pro':           [{ source: 'jlr.com', title: 'Pivi Pro Infotainment | JLR', url: 'https://www.jlr.com/en/innovation/connected' }],
  'MHEV':               [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/en/innovation/electrification' }],
  'PHEV':               [{ source: 'jlr.com', title: 'Electrification | JLR', url: 'https://www.jlr.com/en/innovation/electrification' }],
  'Terrain Response 2': [{ source: 'jlr.com', title: 'Land Rover Capability | JLR', url: 'https://www.jlr.com/en/innovation' }],
  'Air Suspension':     [{ source: 'jlr.com', title: 'Land Rover Technology | JLR', url: 'https://www.jlr.com/en/innovation' }],
  'InControl':          [{ source: 'jlr.com', title: 'InControl Connected Services | JLR', url: 'https://www.jlr.com/en/innovation/connected' }],
  'ClearSight':         [{ source: 'jlr.com', title: 'Driver Assist Technology | JLR', url: 'https://www.jlr.com/en/innovation' }],
  'Wade Sensing':       [{ source: 'jlr.com', title: 'Off-Road Technology | JLR', url: 'https://www.jlr.com/en/innovation' }],
  'Ingenium Engines':   [{ source: 'jlr.com', title: 'Ingenium Engines | JLR', url: 'https://www.jlr.com/en/innovation' }, { source: 'Wikipedia', title: 'Jaguar Land Rover Ingenium — Wikipedia', url: 'https://en.wikipedia.org/wiki/Jaguar_Land_Rover_Ingenium' }],
  'Gaydon':             [{ source: 'jlr.com', title: 'JLR About | JLR', url: 'https://www.jlr.com/en/about' }, { source: 'Wikipedia', title: 'Gaydon — Wikipedia', url: 'https://en.wikipedia.org/wiki/Gaydon' }],
  'Solihull':           [{ source: 'jlr.com', title: 'Manufacturing | JLR', url: 'https://www.jlr.com/en/about/manufacturing' }, { source: 'Wikipedia', title: 'Solihull — Wikipedia', url: 'https://en.wikipedia.org/wiki/Solihull' }],
  'Halewood':           [{ source: 'jlr.com', title: 'Manufacturing | JLR', url: 'https://www.jlr.com/en/about/manufacturing' }, { source: 'Wikipedia', title: 'Halewood — Wikipedia', url: 'https://en.wikipedia.org/wiki/Halewood' }],
  'Castle Bromwich':    [{ source: 'jlr.com', title: 'Manufacturing | JLR', url: 'https://www.jlr.com/en/about/manufacturing' }, { source: 'Wikipedia', title: 'Castle Bromwich — Wikipedia', url: 'https://en.wikipedia.org/wiki/Castle_Bromwich' }],
  'Whitley':            [{ source: 'jlr.com', title: 'JLR About | JLR', url: 'https://www.jlr.com/en/about' }],
  'Graz, Austria':      [{ source: 'Wikipedia', title: 'Magna Steyr — Wikipedia', url: 'https://en.wikipedia.org/wiki/Magna_Steyr' }],
  'Shannon, Ireland':   [{ source: 'jlr.com', title: 'Manufacturing | JLR', url: 'https://www.jlr.com/en/about/manufacturing' }],
  'Project Artemis':    [{ source: 'jlr.com', title: 'Electric Range Rover | JLR', url: 'https://www.jlr.com/en/innovation/electrification' }],
  'Project Panthera':   [{ source: 'jlr.com', title: 'New Jaguar GT | JLR', url: 'https://www.jlr.com/en/innovation' }],
  'Project Symphony':   [{ source: 'jlr.com', title: 'Software-Defined Vehicle | JLR', url: 'https://www.jlr.com/en/innovation/software' }],
  'Modern Luxury':      [{ source: 'jlr.com', title: 'Land Rover Modern Luxury | JLR', url: 'https://www.jlr.com/en/about/reimagine' }],
  '2039 Carbon Net Zero':[{ source: 'jlr.com', title: 'Sustainability | JLR', url: 'https://www.jlr.com/en/sustainability' }],
  'Destination Zero':   [{ source: 'jlr.com', title: 'Destination Zero | JLR', url: 'https://www.jlr.com/en/sustainability/destination-zero' }],
};

// Category-level fallback URLs when a node has no specific entry
const CATEGORY_FALLBACK: Record<Category, DocRef> = {
  vehicle:    { source: 'jlr.com', title: 'Vehicles | JLR', url: 'https://www.jlr.com/en/vehicles' },
  person:     { source: 'jlr.com', title: 'Leadership | JLR', url: 'https://www.jlr.com/en/about/leadership' },
  department: { source: 'jlr.com', title: 'About JLR | JLR', url: 'https://www.jlr.com/en/about' },
  technology: { source: 'jlr.com', title: 'Innovation | JLR', url: 'https://www.jlr.com/en/innovation' },
  location:   { source: 'jlr.com', title: 'About JLR | JLR', url: 'https://www.jlr.com/en/about' },
  project:    { source: 'jlr.com', title: 'Strategy | JLR',  url: 'https://www.jlr.com/en/about/reimagine' },
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
