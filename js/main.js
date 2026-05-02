/* ═══════════════════════════════════════════════
   main.js — Navigation, Modal, Animations, Form
   ═══════════════════════════════════════════════ */

/* ── Merge all project arrays into PROJECTS ── */
const PROJECTS = [
  ...ACADEMIC_PROJECTS,
  ...WORK_PROJECTS,
  ...BLOG_PROJECTS,
  ...ACTIVITIES_PROJECTS,
];

/* ══════════════════════════════════════════
   MODAL FIELD SCHEMAS
   Define which fields appear in the modal
   header for each project type.
   Each schema is an array of:
   { label, key }  where key maps to the
   project object's property.
══════════════════════════════════════════ */
const MODAL_SCHEMAS = {

  thesis: [
    { label: "Year",       key: "year" },
    { label: "Status",     key: "status" },
    { label: "Supervisor", key: "supervisor" },
    { label: "Institution",key: "institution" },
  ],

  paper: [
    { label: "Year",        key: "year" },
    { label: "Status",      key: "status" },
    { label: "Authors",     key: "authors" },
    { label: "Co-Authors",  key: "coAuthors" },
    { label: "Conference",  key: "conference" },
    { label: "Institution", key: "institution" },
  ],

  journal: [
    { label: "Year",          key: "year" },
    { label: "Status",        key: "status" },
    { label: "Authors",       key: "authors" },
    { label: "Co-Authors",    key: "coAuthors" },
    { label: "Journal",       key: "journal" },
    { label: "Volume/Issue",  key: "volumeIssue" },
    { label: "Publisher",     key: "publisher" },
  ],

  project: [
    { label: "Year",       key: "year" },
    { label: "Status",     key: "status" },
    { label: "Role",       key: "role" },
    { label: "Supervisor", key: "supervisor" },
    { label: "Institution",key: "institution" },
  ],

  work: [
    { label: "Period",       key: "year" },
    { label: "Status",       key: "status" },
    { label: "Role",         key: "role" },
    { label: "Organization", key: "organization" },
    { label: "Location",     key: "location" },
  ],

  blog: [
    { label: "Year",     key: "year" },
    { label: "Status",   key: "status" },
    { label: "Author",   key: "authors" },
    { label: "Platform", key: "platform" },
    { label: "Topic",    key: "topic" },
  ],

  activity: [
    { label: "Year",         key: "year" },
    { label: "Status",       key: "status" },
    { label: "Role",         key: "role" },
    { label: "Organization", key: "organization" },
    { label: "Location",     key: "location" },
  ],

};

/* Fallback schema if type is not listed above */
const DEFAULT_SCHEMA = [
  { label: "Year",       key: "year" },
  { label: "Status",     key: "status" },
  { label: "Institution",key: "institution" },
];

/* ── Page HTML cache ── */
const pageCache = {};

/* ══════════════════════════════════════════
   PAGE NAVIGATION
══════════════════════════════════════════ */
async function showPage(name, category = null) {
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  const navLink = document.getElementById('nav-' + name);
  if (navLink) navLink.classList.add('active');

  const container = document.getElementById('page-content');
  container.innerHTML = `
    <div class="page-loader">
      <div class="loader-dot"></div>
      <div class="loader-dot"></div>
      <div class="loader-dot"></div>
    </div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  try {
    if (!pageCache[name]) {
      const res = await fetch(`pages/${name}.html`);
      if (!res.ok) throw new Error(`Could not load pages/${name}.html`);
      pageCache[name] = await res.text();
    }

    container.innerHTML = pageCache[name];

    if (name === 'about')     animateSkillBars();
    if (name === 'portfolio') renderPortfolio(category || 'all', category);

    triggerRevealAnimations();

  } catch (err) {
    container.innerHTML = `
      <div class="card" style="text-align:center;color:var(--text-muted);padding:3rem;">
        <div style="font-size:2rem;margin-bottom:0.75rem;">⚠️</div>
        <p>Could not load page. Run this on a local server:<br/>
        <code>npx serve .</code> or VS Code Live Server.</p>
      </div>`;
    console.error(err);
  }
}

/* ══════════════════════════════════════════
   PORTFOLIO — render & filter
══════════════════════════════════════════ */
function renderPortfolio(category = 'all', activeTab = null) {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  const tabToActivate = activeTab || category;
  document.querySelectorAll('.port-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === tabToActivate);
  });

  const items = category === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === category);

  if (!items.length) {
    grid.innerHTML = `<p style="color:var(--text-muted);font-size:0.875rem;
      padding:1rem 0;grid-column:1/-1;">No projects in this category yet.</p>`;
    return;
  }

  grid.innerHTML = items.map(p => `
    <div class="portfolio-item reveal" onclick="openModal('${p.id}')">
      <div class="portfolio-thumb" style="background:${p.thumbBg}">
        ${p.thumb}
        <div class="portfolio-thumb-overlay">🔍</div>
      </div>
      <div class="portfolio-meta">
        <strong>${p.title}</strong>
        <span>${p.typeLabel} · ${p.year}</span>
      </div>
    </div>
  `).join('');

  triggerRevealAnimations();
}

function filterPortfolio(category, btn) {
  document.querySelectorAll('.port-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderPortfolio(category);
}

/* ══════════════════════════════════════════
   MODAL — type-aware rendering
══════════════════════════════════════════ */
function openModal(projectId) {
  const p = PROJECTS.find(x => x.id === projectId);
  if (!p) return;

  /* ── Badge ── */
  const badge = document.getElementById('modal-badge');
  badge.className   = 'modal-badge ' + p.type;
  badge.textContent = p.typeLabel;

  /* ── Title & description ── */
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').innerHTML    = p.description;

  /* ── Schema-driven fixed meta fields ── */
  const schema = MODAL_SCHEMAS[p.type] || DEFAULT_SCHEMA;
  const fixedMeta = document.getElementById('modal-fixed-meta');
  fixedMeta.innerHTML = schema
    .filter(field => p[field.key])           // only show fields that have a value
    .map(field => `
      <div class="modal-meta-item">
        <span class="mlbl">${field.label}</span>
        <span class="mval">${p[field.key]}</span>
      </div>
    `).join('');

  /* ── Dynamic extra meta (software, codes, etc.) ── */
  const extraMeta = document.getElementById('modal-extra-meta');
  if (p.meta && p.meta.length) {
    extraMeta.innerHTML = p.meta.map(m => `
      <div class="modal-meta-item">
        <span class="mlbl">${m.label}</span>
        <span class="mval">${m.value}</span>
      </div>
    `).join('');
    extraMeta.style.display = 'grid';
  } else {
    extraMeta.style.display = 'none';
  }

  /* ── Key findings ── */
  const findingsBox  = document.getElementById('modal-findings-box');
  const findingsList = document.getElementById('modal-findings-list');
  if (p.findings && p.findings.length) {
    findingsList.innerHTML = p.findings.map(f => `<li>${f}</li>`).join('');
    findingsBox.style.display = 'block';
  } else {
    findingsBox.style.display = 'none';
  }

  /* ── Action buttons ── */
  const footer = document.getElementById('modal-footer');
  footer.innerHTML = '';
  if (p.doi)    footer.innerHTML += `<a href="${p.doi}"    target="_blank" rel="noopener" class="btn btn-primary">🔗 View DOI / Full Text</a>`;
  if (p.github) footer.innerHTML += `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline">💻 GitHub Repository</a>`;
  if (p.report) footer.innerHTML += `<a href="${p.report}" target="_blank" rel="noopener" class="btn btn-outline">📄 View / Download</a>`;
  if (!p.doi && !p.github && !p.report) {
    footer.innerHTML = `<span style="font-size:0.8rem;color:var(--text-muted);">Full text / link coming soon.</span>`;
  }

  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════
   ANIMATIONS
══════════════════════════════════════════ */
function triggerRevealAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 55);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    io.observe(el);
  });
}

function animateSkillBars() {
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }, 150);
}

/* ══════════════════════════════════════════
   DARK MODE
══════════════════════════════════════════ */
function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.querySelector('.nav-toggle').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
function handleSubmit() {
  const fields = ['cf-name', 'cf-email', 'cf-subject', 'cf-message'];
  let allOk = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) { el.style.borderColor = '#fca5a5'; allOk = false; }
    else { el.style.borderColor = ''; }
  });
  if (!allOk) return;

  /* ── Enable real email via Formspree ──────────────────────────
     1. Sign up free at https://formspree.io
     2. Create a form → copy endpoint: https://formspree.io/f/XXXXX
     3. Replace the alert below with:

     fetch('https://formspree.io/f/YOUR_CODE', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         name:    document.getElementById('cf-name').value,
         email:   document.getElementById('cf-email').value,
         subject: document.getElementById('cf-subject').value,
         message: document.getElementById('cf-message').value,
       }),
     }).then(r => r.ok
       ? alert('Message sent!')
       : alert('Error. Please email me directly.')
     );
  ──────────────────────────────────────────────────────────── */

  alert('Thank you! I will get back to you soon.');
  fields.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    const t = document.querySelector('.nav-toggle');
    if (t) t.textContent = '☀️';
  }

  document.getElementById('project-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  showPage('home');
});

/* ══════════════════════════════════════════
// to add dynamic date in footer
══════════════════════════════════════════ */
document.getElementById("year").textContent = new Date().getFullYear();
