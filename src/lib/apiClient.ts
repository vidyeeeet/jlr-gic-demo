import { jlrNodes, nodeMap, adjacencyMap, type JLRNode, type Category } from './jlrData';

export let isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
}

export type SuggestionsCustom = { title: string; normalized: string }[];

export interface DocRef {
  source: 'Confluence' | 'SharePoint' | 'Jira' | 'Workday';
  title: string;
  docId: string;
}

function stableId(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return Math.abs(h);
}

function hexId(str: string) {
  return stableId(str).toString(16).slice(0, 6).toUpperCase();
}

function generateRefs(node: JLRNode): DocRef[] {
  const h = hexId(node.id);
  const year = 2024;
  const refsByCategory: Record<Category, DocRef[]> = {
    vehicle: [
      { source: 'Confluence', title: `${node.id} — Programme Overview & Specifications`, docId: `JLR-PROD-${h}` },
      { source: 'Confluence', title: `${node.id} — Market Positioning & Variant Guide`, docId: `JLR-MKT-${h}` },
      { source: 'SharePoint',  title: `${node.id} — Launch Readiness Deck Q2 ${year}`,  docId: `SP-LR-${h}` },
    ],
    person: [
      { source: 'Workday',    title: `${node.id} — Executive Profile & Responsibilities`, docId: `WD-EXEC-${h}` },
      { source: 'Confluence', title: `JLR Leadership Team — Org Chart ${year}`,          docId: `JLR-ORG-${year}` },
    ],
    department: [
      { source: 'Confluence', title: `${node.id} — Team Wiki & Onboarding Guide`, docId: `JLR-TEAM-${h}` },
      { source: 'SharePoint', title: `${node.id} — Annual Operating Plan ${year}`,docId: `SP-AOP-${h}` },
      { source: 'Jira',       title: `${node.id} — Q3 ${year} Roadmap`,           docId: `JLR-RD-${h}` },
    ],
    technology: [
      { source: 'Confluence', title: `${node.id} — Technical Architecture`,             docId: `JLR-TECH-${h}` },
      { source: 'Jira',       title: `${node.id} — Feature Epics & Backlog`,            docId: `ENG-EP-${h}` },
      { source: 'SharePoint', title: `${node.id} — Supplier Qualification Report ${year}`, docId: `SP-SQR-${h}` },
    ],
    location: [
      { source: 'SharePoint', title: `${node.id} — Site Capacity & Infrastructure`,   docId: `SP-SITE-${h}` },
      { source: 'SharePoint', title: `${node.id} — HSE Annual Report ${year}`,        docId: `SP-HSE-${h}` },
      { source: 'Confluence', title: `${node.id} — EV Transition Readiness Plan`,     docId: `JLR-EV-${h}` },
    ],
    project: [
      { source: 'Jira',       title: `${node.id} — Programme Board & Milestones`,       docId: `JIRA-PB-${h}` },
      { source: 'Confluence', title: `${node.id} — Project Charter & Objectives`,       docId: `JLR-PC-${h}` },
      { source: 'SharePoint', title: `${node.id} — Steering Committee Deck Q2 ${year}`, docId: `SP-SC-${h}` },
    ],
  };
  return refsByCategory[node.category] ?? [];
}

function buildPageObject(id: string) {
  const node = nodeMap.get(id);
  if (!node) return null;
  return {
    titles: { normalized: id },
    description: node.category,   // used as category label
    pageid: stableId(id),
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
