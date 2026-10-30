/* ==========================================================================
   Portfolio-Logik
   - portfolio.html: Grid, Filter und Lightbox aus js/portfolio-data.js
   - index.html:     "Ausgewählte Arbeiten" (Stücke mit featured: true)
   Hier muss normalerweise nichts geändert werden, Stücke pflegt man in
   js/portfolio-data.js.
   ========================================================================== */
(function () {
  'use strict';

  const IMG_BASE = 'images/portfolio/';
  const ERAS = ['antiquity', 'migration', 'medieval', 'renaissance', 'modern'];

  const STATUS = {
    available:  { en: 'Available',      de: 'Verfügbar' },
    commission: { en: 'Commission',     de: 'Auftragsarbeit' },
    sold:       { en: 'Sold',           de: 'Verkauft' }
  };

  const LABEL = {
    period:    { en: 'Period',          de: 'Epoche' },
    culture:   { en: 'Culture / style', de: 'Kultur / Stil' },
    materials: { en: 'Materials',       de: 'Materialien' },
    technique: { en: 'Technique',       de: 'Technik' },
    status:    { en: 'Status',          de: 'Status' },
    source:    { en: 'Source',          de: 'Quelle' }
  };

  const UI = {
    shop:  { en: 'View in shop',                          de: 'Im Shop ansehen' },
    empty: { en: 'No pieces in this category yet.',       de: 'In dieser Kategorie gibt es noch keine Stücke.' },
    error: { en: 'The portfolio could not be loaded.',    de: 'Das Portfolio konnte nicht geladen werden.' }
  };

  // ── Helfer ──────────────────────────────────────────────────────────────
  const lang = () => (document.documentElement.lang === 'de' ? 'de' : 'en');

  // { en, de } -> Text in aktueller Sprache; einfache Strings bleiben unverändert
  const tx = (v) => {
    if (v && typeof v === 'object') return v[lang()] || v.en || v.de || '';
    return v || '';
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const imgSrc = (p) => (/^(https?:)?\/\//.test(p.image) || p.image.charAt(0) === '/')
    ? p.image
    : IMG_BASE + p.image;

  const focusAttr = (p) => (p.focus ? ' style="object-position: ' + esc(p.focus) + '"' : '');
  const metaLine = (p) => [tx(p.date), tx(p.culture)].filter(Boolean).join(' · ');
  const byId = {};

  // ── Daten laden und prüfen ──────────────────────────────────────────────
  let cache; // undefined = noch nicht geladen, null = Fehler
  function getPieces() {
    if (cache !== undefined) return cache;
    if (typeof PORTFOLIO === 'undefined' || !Array.isArray(PORTFOLIO)) {
      console.error('Portfolio: js/portfolio-data.js fehlt oder enthält einen Syntaxfehler (Komma vergessen?).');
      cache = null;
      return cache;
    }
    cache = [];
    PORTFOLIO.forEach((p, i) => {
      const where = 'Portfolio-Eintrag #' + (i + 1) + (p && p.id ? ' (' + p.id + ')' : '');
      if (!p || typeof p !== 'object') { console.warn(where + ': kein gültiger Eintrag, übersprungen.'); return; }
      const missing = ['id', 'era', 'image', 'title'].filter((k) => !p[k]);
      if (missing.length) { console.warn(where + ': Pflichtfeld fehlt (' + missing.join(', ') + '), übersprungen.'); return; }
      if (!/^[a-z0-9-]+$/.test(p.id)) { console.warn(where + ': id darf nur Kleinbuchstaben, Ziffern und Bindestriche enthalten, übersprungen.'); return; }
      if (byId[p.id]) { console.warn(where + ': id kommt doppelt vor, übersprungen.'); return; }
      if (ERAS.indexOf(p.era) === -1) console.warn(where + ': unbekannte Epoche "' + p.era + '", erscheint nur unter "Alle".');
      if (p.status && !STATUS[p.status]) console.warn(where + ': unbekannter Status "' + p.status + '", wird nicht angezeigt.');
      byId[p.id] = p;
      cache.push(p);
    });
    return cache;
  }

  // ── Startseite: Ausgewählte Arbeiten ────────────────────────────────────
  function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    const pieces = getPieces();
    if (!pieces) return;
    grid.innerHTML = pieces.filter((p) => p.featured).map((p) => {
      const st = STATUS[p.status];
      const tag = st ? '<div class="product-card-tag">' + esc(tx(st)) + '</div>' : '';
      const meta = [tx(p.culture), tx(p.materials)].filter(Boolean).join(' · ');
      return '<a class="product-card" href="portfolio.html#' + esc(p.id) + '">' +
        '<img loading="lazy" src="' + esc(imgSrc(p)) + '" alt="' + esc(tx(p.alt) || tx(p.title)) + '"' + focusAttr(p) + ' />' +
        tag +
        '<div class="product-card-overlay">' +
          '<div class="product-name">' + esc(tx(p.title)) + '</div>' +
          '<div class="product-era">' + esc(meta) + '</div>' +
        '</div></a>';
    }).join('');
  }

  // ── Portfolio-Seite ─────────────────────────────────────────────────────
  let activeFilter = 'all';
  let currentId = null;
  let lastFocus = null;

  const $ = (id) => document.getElementById(id);

  function visiblePieces() {
    const pieces = getPieces() || [];
    return activeFilter === 'all' ? pieces : pieces.filter((p) => p.era === activeFilter);
  }

  function renderPortfolio() {
    const grid = $('portfolioGrid');
    if (!grid) return;
    const pieces = getPieces();
    if (!pieces) {
      grid.innerHTML = '<p class="portfolio-empty">' + esc(UI.error.de) + '<br>' + esc(UI.error.en) + '</p>';
      return;
    }

    // Filter: nur Epochen anzeigen, die es gibt; Leiste ausblenden, wenn sie nichts bringt
    const counts = {};
    pieces.forEach((p) => { counts[p.era] = (counts[p.era] || 0) + 1; });
    if (activeFilter !== 'all' && !counts[activeFilter]) activeFilter = 'all';
    const bar = $('filterBar');
    if (bar) {
      bar.hidden = Object.keys(counts).length < 2;
      bar.querySelectorAll('.filter-btn').forEach((btn) => {
        const f = btn.dataset.filter;
        btn.hidden = f !== 'all' && !counts[f];
        const on = f === activeFilter;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }

    const list = visiblePieces();
    grid.innerHTML = list.length ? list.map((p) =>
      '<a class="portfolio-item" href="#' + esc(p.id) + '" data-id="' + esc(p.id) + '" data-era="' + esc(p.era) + '">' +
        '<img class="portfolio-img" loading="lazy" src="' + esc(imgSrc(p)) + '" alt="' + esc(tx(p.alt) || tx(p.title)) + '"' + focusAttr(p) + ' />' +
        '<div class="portfolio-info">' +
          '<div class="portfolio-era">' + esc(metaLine(p)) + '</div>' +
          '<div class="portfolio-name">' + esc(tx(p.title)) + '</div>' +
          '<div class="portfolio-materials">' + esc(tx(p.materials)) + '</div>' +
        '</div></a>'
    ).join('') : '<p class="portfolio-empty">' + esc(tx(UI.empty)) + '</p>';

    if (currentId) renderLightbox();
  }

  // ── Lightbox ────────────────────────────────────────────────────────────
  const isOpen = () => { const lb = $('lightbox'); return !!lb && lb.classList.contains('open'); };

  function renderLightbox() {
    const p = byId[currentId];
    if (!p) return;
    const img = $('lightboxImg');
    img.src = imgSrc(p);
    img.alt = tx(p.alt) || tx(p.title);
    img.style.objectPosition = p.focus || '';
    $('lightboxEra').textContent = metaLine(p);
    $('lightboxName').textContent = tx(p.title);
    $('lightboxDesc').textContent = tx(p.description);

    const rows = [
      ['period', tx(p.date)],
      ['culture', tx(p.culture)],
      ['materials', tx(p.materials)],
      ['technique', tx(p.technique)],
      ['status', STATUS[p.status] ? tx(STATUS[p.status]) : ''],
      ['source', tx(p.source)]
    ].filter((r) => r[1]);
    $('lightboxFacts').innerHTML = rows.map((r) =>
      '<div class="fact-row"><span class="fact-label">' + esc(tx(LABEL[r[0]])) + '</span>' +
      '<span class="fact-value">' + esc(r[1]) + '</span></div>'
    ).join('');

    // Shop-Button nur mit gültigem https-Link und nicht bei verkauften Stücken
    const actions = $('lightboxActions');
    const url = typeof p.shopUrl === 'string' ? p.shopUrl.trim() : '';
    actions.innerHTML = (/^https?:\/\//i.test(url) && p.status !== 'sold')
      ? '<a class="btn-primary" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(tx(UI.shop)) + ' ↗</a>'
      : '';

    const multi = visiblePieces().length > 1;
    $('lightboxPrev').hidden = !multi;
    $('lightboxNext').hidden = !multi;
  }

  function setHash(id) {
    try { history.replaceState(null, '', id ? '#' + id : location.pathname + location.search); } catch (e) { /* ignorieren */ }
  }

  function openPiece(id, trigger) {
    if (!byId[id]) return;
    if (!isOpen()) lastFocus = trigger || document.activeElement;
    currentId = id;
    renderLightbox();
    $('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
    $('lightboxClose').focus();
    setHash(id);
  }

  function closeLightbox(resetHash) {
    if (!isOpen()) return;
    $('lightbox').classList.remove('open');
    document.body.style.overflow = '';
    currentId = null;
    if (resetHash !== false) setHash('');
    if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus();
  }

  function navigate(dir) {
    const list = visiblePieces();
    if (list.length < 2) return;
    const pos = list.findIndex((p) => p.id === currentId);
    const next = list[(pos + dir + list.length) % list.length];
    currentId = next.id;
    renderLightbox();
    setHash(next.id);
  }

  function trapTab(e) {
    const nodes = Array.prototype.filter.call(
      $('lightbox').querySelectorAll('button, a[href]'), (n) => !n.hidden
    );
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id && byId[id]) { activeFilter = 'all'; renderPortfolio(); openPiece(id); }
    else if (isOpen()) closeLightbox(false);
  }

  let bound = false;
  function initPortfolio() {
    const grid = $('portfolioGrid');
    if (!grid || bound) return;
    bound = true;
    getPieces();

    grid.addEventListener('click', (e) => {
      const a = e.target.closest('.portfolio-item');
      if (!a) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      openPiece(a.dataset.id, a);
    });

    const bar = $('filterBar');
    if (bar) bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      renderPortfolio();
    });

    $('lightboxClose').addEventListener('click', () => closeLightbox());
    $('lightboxPrev').addEventListener('click', () => navigate(-1));
    $('lightboxNext').addEventListener('click', () => navigate(1));
    $('lightbox').addEventListener('click', (e) => { if (e.target === $('lightbox')) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
      if (!isOpen()) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') navigate(1);
      else if (e.key === 'ArrowLeft') navigate(-1);
      else if (e.key === 'Tab') trapTab(e);
    });

    window.addEventListener('hashchange', openFromHash);
    renderPortfolio();
    openFromHash();
  }

  // ── Start ───────────────────────────────────────────────────────────────
  function render() { renderFeatured(); renderPortfolio(); }

  // main.js meldet jeden Sprachwechsel (auch den beim Laden) mit diesem Ereignis
  document.addEventListener('orniello:langchange', render);
  document.addEventListener('DOMContentLoaded', () => { initPortfolio(); renderFeatured(); });
})();
