<script lang="ts">
  import WikiSearch from "./lib/WikiSearch.svelte";
  import { bus, createRenderer } from "./core-anvaka-vs";
  import { appState, performSearch } from "./lib/state";
  import { apiClient, isMobile, type DocRef } from "./lib/apiClient";
  import { CATEGORY_COLORS } from "./lib/jlrData";

  apiClient.setLang('en');

  appState.maxDepth = 2;

  const renderer = createRenderer(appState.progress, isMobile, (node) => node.id, null);

  if (appState.query) {
    performSearchWrap(appState.query).then(() => {
      if (appState.graph) renderer.render(appState.graph);
    });
  }

  // ── Side Panel state ──────────────────────────────────────────────────────
  let panelVisible = false;
  let panelNodeId   = '';
  let panelContent  = '';
  let panelRefs: DocRef[] = [];
  let panelColor    = '#333';
  let panelCategory = '';

  // suppress hover tooltip
  bus.on('show-tooltip-node', (_e) => {}, {});

  bus.on('show-details-node', (e) => {
    if (!e.node) return;
    const { id, data } = e.node;

    // toggle off if same node clicked again
    if (panelVisible && panelNodeId === id) {
      panelVisible = false;
      return;
    }

    panelNodeId   = id;
    panelContent  = data.extract_html ?? '';
    panelRefs     = (data.refs as DocRef[]) ?? [];
    panelCategory = data.description ?? '';
    panelColor    = CATEGORY_COLORS[data.description as keyof typeof CATEGORY_COLORS] ?? '#555';
    panelVisible  = true;
  }, {});

  function closePanel() { panelVisible = false; }

  function onNodeClickRight(e) {
    appState.query = e.node.id;
    panelVisible = false;
    onSearch({ detail: e.node.id });
  }
  bus.on('node-click-right', onNodeClickRight, {});

  // ── Search ────────────────────────────────────────────────────────────────
  async function onSearch(e) {
    const q = e.detail;
    panelVisible = false;
    await performSearchWrap(q);
    renderer.render(appState.graph);
  }

  async function performSearchWrap(query: string) {
    const summary  = await apiClient.getSummary(query);
    const entryItem = apiClient.getItem(summary);
    performSearch(entryItem);
  }

  // source → colour mapping
  const SOURCE_COLORS: Record<string, string> = {
    Confluence: '#0052CC',
    SharePoint: '#038387',
    Jira:       '#0052CC',
    Workday:    '#C8102E',
  };
</script>

<WikiSearch on:search={onSearch} />

<!-- ── Info Panel ──────────────────────────────────────────────────────────── -->
<div class="info-panel" class:visible={panelVisible} aria-hidden={!panelVisible}>

  <div class="panel-header" style="--cat-color: {panelColor}">
    <button class="panel-close" on:click={closePanel} aria-label="Close">
      <span class="close-x">×</span>
      <span class="close-back">← Back</span>
    </button>
    <div class="panel-meta">
      <span class="cat-badge">{panelCategory}</span>
    </div>
    <h2 class="panel-title">{panelNodeId}</h2>
  </div>

  <div class="panel-body">
    {@html panelContent}
  </div>

  <div class="panel-refs">
    <h3 class="refs-heading">Source Documents</h3>
    {#each panelRefs as ref}
      <div class="ref-row">
        <span class="ref-badge" style="background:{SOURCE_COLORS[ref.source] ?? '#555'}">{ref.source}</span>
        <span class="ref-title">{ref.title}</span>
        <span class="ref-id">{ref.docId}</span>
      </div>
    {/each}
  </div>

  <div class="panel-footer">
    <button class="report-btn" on:click|preventDefault={() => {}}>
      ⚠ Report an Error
    </button>
  </div>
</div>

<!-- dim background when panel open -->
{#if panelVisible}
  <div class="panel-backdrop" on:click={closePanel} on:keydown={() => {}} role="presentation"></div>
{/if}

<!-- JLR watermark -->
<div class="jlr-brand">
  <span class="jlr-logo">JLR</span>
  <span class="jlr-tagline">Knowledge Graph</span>
</div>

<style>
  @import "./assets/style.css";
  @import "normalize.css";

  .info-panel {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 400px;
    max-width: 92vw;
    background: #fff;
    box-shadow: -6px 0 32px rgba(0,0,0,0.14);
    z-index: 60;
    display: flex;
    flex-direction: column;
    transform: translateX(102%);
    transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .info-panel.visible {
    transform: translateX(0);
  }

  .panel-backdrop {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.12);
    z-index: 55;
    cursor: pointer;
  }

  .panel-header {
    position: relative;
    padding: 1.2rem 3rem 1rem 1.2rem;
    border-bottom: 3px solid var(--cat-color, #ccc);
    flex-shrink: 0;
  }
  .panel-meta {
    margin-bottom: 0.3rem;
  }
  .cat-badge {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--cat-color);
    border: 1.5px solid var(--cat-color);
    border-radius: 3px;
    padding: 0.1em 0.5em;
  }
  .panel-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #111;
    line-height: 1.3;
  }
  .panel-close {
    position: absolute;
    top: 0.9rem;
    right: 0.9rem;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    font-size: 1.4rem;
    line-height: 1;
    color: #888;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  .panel-close:hover {
    background: #f0f0f0;
    color: #333;
  }
  .close-back { display: none; }

  .panel-body {
    padding: 1.1rem 1.2rem;
    font-size: 0.875rem;
    line-height: 1.65;
    color: #333;
    overflow-y: auto;
    flex: 1 1 auto;
  }
  :global(.panel-body b) {
    color: #111;
    font-weight: 600;
  }

  .panel-refs {
    padding: 0.8rem 1.2rem 0.6rem;
    border-top: 1px solid #ebebeb;
    flex-shrink: 0;
  }
  .refs-heading {
    margin: 0 0 0.6rem;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #999;
  }
  .ref-row {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.3rem 0;
    font-size: 0.8rem;
  }
  .ref-row:not(:last-child) {
    border-bottom: 1px solid #f5f5f5;
  }
  .ref-badge {
    flex-shrink: 0;
    font-size: 0.65rem;
    font-weight: 700;
    color: #fff;
    border-radius: 3px;
    padding: 0.1em 0.45em;
    letter-spacing: 0.04em;
  }
  .ref-title {
    flex: 1;
    color: #2c5282;
    cursor: default;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ref-id {
    flex-shrink: 0;
    font-size: 0.7rem;
    color: #aaa;
    font-family: monospace;
  }

  .panel-footer {
    padding: 0.8rem 1.2rem 1rem;
    border-top: 1px solid #ebebeb;
    flex-shrink: 0;
  }
  .report-btn {
    width: 100%;
    padding: 0.55em 1em;
    border: 1.5px solid #e53e3e;
    border-radius: 4px;
    background: transparent;
    color: #e53e3e;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: background 140ms, color 140ms;
  }
  .report-btn:hover {
    background: #fff5f5;
  }

  .jlr-brand {
    position: fixed;
    bottom: 1em;
    left: 1.2em;
    display: flex;
    align-items: baseline;
    gap: 0.4em;
    opacity: 0.35;
    pointer-events: none;
    user-select: none;
  }
  .jlr-logo {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    color: var(--c-accent);
  }
  .jlr-tagline {
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    color: var(--textColorMuted);
  }

  /* ── Mobile: full-screen panel with back button ── */
  @media (max-width: 640px) {
    .info-panel {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: 0;
      box-shadow: none;
      transform: translateY(105%);
      overflow-y: auto;
    }
    .info-panel.visible {
      transform: translateY(0);
    }
    /* back button: top-left, visible on mobile */
    .panel-close {
      top: 0.85rem;
      left: 0.85rem;
      right: auto;
      width: auto;
      height: auto;
      padding: 0.35em 0.75em;
      font-size: 0.9rem;
      background: #f4f4f4;
      border: 1px solid #ddd;
      border-radius: 6px;
      color: #333;
      gap: 0.25em;
    }
    .close-x { display: none; }
    .close-back { display: inline; }
    /* push title/badge right to clear the back button */
    .panel-header {
      padding-left: 5.5rem;
      padding-top: 0.85rem;
    }
    .panel-refs {
      padding-bottom: 0.4rem;
    }
    .ref-title {
      white-space: normal;
    }
    .jlr-brand {
      display: none;
    }
  }
</style>
