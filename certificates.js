/* Certificates page: lists files from the GitHub repo folder. Runs after site.js (shared i18n). */
(() => {
  const OWNER = 'alexhp84';
  const REPO = 'portfolio';      // auto-detected on GitHub Pages
  const BRANCH = 'main';
  const FOLDER = 'Certificates'; // exact, case-sensitive
  const CACHE_KEY = 'certsCache:v1';
  const CACHE_MS = 10 * 60 * 1000; // avoids GitHub's 60 requests/hour/IP limit

  // Optional nicer titles. Key = exact file name.
  // 'My-Course.pdf': { title: 'My Course', issuer: 'Coursera', date: '2025-03' }
  const META = {};

  const IMG = ['png', 'jpg', 'jpeg', 'webp', 'gif'];
  const OK = ['pdf', ...IMG];

  const repo = (location.hostname.endsWith('github.io') && location.pathname.split('/')[1]) || REPO;
  const $ = id => document.getElementById(id);
  const grid = $('cert-grid'), search = $('cert-search'), filtersEl = $('cert-filters'), countEl = $('cert-count');
  const dlg = $('cert-dialog'), dlgImg = $('cert-dialog-img');
  let certs = [], activeType = 'all', failed = false;

  const lang = () => document.documentElement.lang === 'he' ? 'he' : 'en';
  const t = (key, fallback, vars = {}) => {
    const copy = (typeof translations !== 'undefined' && (translations[lang()] || translations.en)) || {};
    return String(copy[key] || fallback).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const extOf = n => (n.split('.').pop() || '').toLowerCase();
  const typeOf = c => (c.ext === 'jpeg' ? 'jpg' : c.ext);
  const prettify = n => n.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim().replace(/\b\w/g, c => c.toUpperCase());

  async function fetchFiles() {
    try {
      const hit = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
      if (hit && Date.now() - hit.t < CACHE_MS) return hit.files;
    } catch {}
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${repo}/contents/${encodeURIComponent(FOLDER)}?ref=${BRANCH}`);
    if (res.status === 404) throw new Error(`Folder "${FOLDER}" not found in ${OWNER}/${repo} (branch ${BRANCH}).`);
    if (!res.ok) throw new Error(`GitHub API error ${res.status}.`);
    const files = await res.json();
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), files })); } catch {}
    return files;
  }

  async function load() {
    try {
      const files = await fetchFiles();
      certs = files
        .filter(f => f.type === 'file' && OK.includes(extOf(f.name)))
        .map(f => {
          const m = META[f.name] || {};
          return { name: f.name, ext: extOf(f.name), title: m.title || prettify(f.name), issuer: m.issuer || '', date: m.date || '', url: f.html_url, raw: f.download_url };
        })
        .sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.title.localeCompare(b.title));
    } catch (e) {
      console.error(e);
      failed = true;
    }
    buildFilters();
    render();
  }

  function buildFilters() {
    const types = ['all', ...new Set(certs.map(typeOf))];
    filtersEl.hidden = types.length <= 2;
    if (filtersEl.hidden) return;
    filtersEl.innerHTML = types.map(x =>
      `<button type="button" class="cert-chip" data-type="${x}" aria-pressed="${x === activeType}">${x === 'all' ? esc(t('certsAll', 'All')) : x.toUpperCase()}</button>`
    ).join('');
  }

  function render() {
    if (failed) {
      countEl.textContent = '';
      grid.innerHTML = `<p class="cert-msg">${esc(t('certsError', 'Could not load certificates. Please try again later.'))}</p>`;
      return;
    }
    const q = search.value.trim().toLowerCase();
    const list = certs.filter(c =>
      (activeType === 'all' || typeOf(c) === activeType) &&
      (!q || `${c.title} ${c.issuer} ${c.date}`.toLowerCase().includes(q)));
    countEl.textContent = t('certsCount', '{shown} of {total} certificates', { shown: list.length, total: certs.length });
    if (!list.length) {
      const key = certs.length ? 'certsNoMatch' : 'certsEmpty';
      const fb = certs.length ? 'No certificates match your search.' : 'No certificates found in this folder yet.';
      grid.innerHTML = `<p class="cert-msg">${esc(t(key, fb))}</p>`;
      return;
    }
    grid.innerHTML = list.map(c => {
      const isImg = IMG.includes(c.ext);
      const thumb = isImg
        ? `<img src="${esc(c.raw)}" alt="" loading="lazy">`
        : `<span class="cert-ext">${esc(c.ext.toUpperCase())}</span>`;
      const meta = [c.issuer, c.date].filter(Boolean).join(' | ') || c.name;
      const primary = isImg
        ? `<a class="btn btn-primary" href="${esc(c.raw)}" data-preview="${esc(c.raw)}" data-alt="${esc(c.title)}">${esc(t('certsPreview', 'Preview'))}</a>`
        : `<a class="btn btn-primary" href="${esc(c.raw)}" target="_blank" rel="noopener">${esc(t('certsOpenPdf', 'Open PDF'))}</a>`;
      return `<article class="cert">
        <div class="cert-thumb">${thumb}</div>
        <div class="cert-body">
          <h2 class="cert-title">${esc(c.title)}</h2>
          <p class="cert-meta">${esc(meta)}</p>
          <div class="cert-actions">${primary}<a class="btn btn-secondary" href="${esc(c.url)}" target="_blank" rel="noopener">GitHub</a></div>
        </div>
      </article>`;
    }).join('');
  }

  filtersEl.addEventListener('click', e => {
    const b = e.target.closest('.cert-chip');
    if (!b) return;
    activeType = b.dataset.type;
    filtersEl.querySelectorAll('.cert-chip').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    render();
  });
  search.addEventListener('input', render);

  grid.addEventListener('click', e => {
    const a = e.target.closest('[data-preview]');
    if (!a) return;
    e.preventDefault();
    dlgImg.src = a.dataset.preview;
    dlgImg.alt = a.dataset.alt;
    dlg.showModal();
  });
  $('cert-dialog-close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => { dlgImg.removeAttribute('src'); });

  // Re-render labels when the language toggle fires.
  document.addEventListener('portfolio:languagechange', () => { buildFilters(); render(); });

  load();
})();
