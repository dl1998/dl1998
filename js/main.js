const BROWSER_TO_LANG = { en: 'en', pl: 'pl', uk: 'uk', ru: 'ru', es: 'es', it: 'it' };
const PROJECTS = [
  { name: 'go-scheduler', url: 'https://github.com/dl1998/go-scheduler', desc: 'Minimalistic scheduler library for Go. Schedule tasks with start time, duration, and interval. Supports task waiting and manual stop.', tech: 'Go', links: [{ label: 'Docs', url: 'https://pkg.go.dev/github.com/dl1998/go-scheduler' }] },
  { name: 'go-logging', url: 'https://github.com/dl1998/go-logging', desc: 'Logging library for Golang inspired by Python logger. 11 logging levels, standard & structured loggers, async support, config from JSON/YAML/XML.', tech: 'Go', links: [{ label: 'Docs', url: 'https://pkg.go.dev/github.com/dl1998/go-logging' }] },
  { name: 'workflows-manager', url: 'https://github.com/dl1998/workflows-manager', desc: 'Python CLI for running custom workflows. Create workflows from reusable steps, define pipelines in config.', tech: 'Python', links: [
    { label: 'Docs', url: 'https://dl1998.github.io/workflows-manager/' },
    { label: 'PyPI', url: 'https://pypi.org/project/workflows-manager/' },
    { label: 'Docker Hub', url: 'https://hub.docker.com/repository/docker/dl1998/workflows-manager' }
  ] }
];
const CERTIFICATIONS = [
  { name: 'Design Patterns in Python', issuer: 'Python', url: 'https://www.python.org', icon: 'python', title: 'Object-oriented design patterns implemented in Python' },
  { name: 'ISTQB Foundation Level 2011', issuer: 'ISTQB', url: 'https://www.istqb.org', icon: 'istqb', title: 'Software testing foundation certification' },
  { name: 'AZ-400 Microsoft DevOps', issuer: 'Microsoft', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-devops-engineer/', icon: 'azure', title: 'Azure DevOps Engineer certification' },
  { name: 'DevOps Generalist', issuer: 'CNCF', url: 'https://www.cncf.io', icon: 'kubernetes', title: 'Cloud-native DevOps fundamentals' },
  { name: 'PMBOK Project Management', issuer: 'PMI', url: 'https://www.pmi.org', icon: 'pmi', title: 'Project Management Body of Knowledge' }
];
const HUMAN_LANGUAGES = [
  { name: 'English', levelKey: 'proWorking', level: 80 },
  { name: 'Polish', levelKey: 'fullPro', level: 90 },
  { name: 'Ukrainian', levelKey: 'native', level: 100 },
  { name: 'Russian', levelKey: 'native', level: 100 },
  { name: 'Spanish', levelKey: 'elementary', level: 25 },
  { name: 'Italian', levelKey: 'elementary', level: 25 }
];
const SKILLS_LIST = ['Java', 'Python', 'Go', 'TypeScript', 'C', 'Django', 'Spring Boot', 'Angular', 'Git', 'OpenTelemetry', 'Docker', 'Kubernetes', 'Jenkins', 'Google Cloud', 'Azure', 'Linux'];
const LEARNING_LIST = ['Rust', 'Kotlin', 'Istio', 'Nix', 'AWS', 'iOS'];

function detectBrowserLang() {
  const pref = navigator.languages?.[0] || navigator.language || '';
  const code = pref.split('-')[0].toLowerCase();
  return BROWSER_TO_LANG[code] || 'en';
}

let currentLang = localStorage.getItem('cv-lang');
if (!currentLang) {
  currentLang = detectBrowserLang();
  localStorage.setItem('cv-lang', currentLang);
}

function renderAboutBullets(bullets) {
  const container = document.getElementById('about-bullets');
  if (!container) return;
  container.innerHTML = bullets.map(b => `<li data-i18n-bullet>${b}</li>`).join('');
}

function renderCertifications() {
  const iconFallback = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2314b8a6"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.45 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/></svg>');
  const azureLogo = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230089D6"><path d="M11.4 24H0L7 5.5h4.5L11.4 24zm12.6-16.5L18.1 24h-4.2L24 7.5z"/></svg>');
  const icons = { python: 'https://cdn.simpleicons.org/python/3776AB', istqb: iconFallback, azure: azureLogo, kubernetes: 'https://cdn.simpleicons.org/kubernetes/326CE5', pmi: iconFallback };
  const container = document.getElementById('cert-content');
  container.innerHTML = CERTIFICATIONS.map(c => {
    const Tag = c.url ? 'a' : 'span';
    const attrs = c.url ? ` href="${c.url}" target="_blank" rel="noopener"` : '';
    const iconUrl = icons[c.icon] || iconFallback;
    return `<${Tag} class="cert-card"${attrs} title="${(c.title || '').replace(/"/g, '&quot;')}"><span class="cert-icon"><img src="${iconUrl}" alt="" width="20" height="20"></span><div><span class="cert-name">${c.name}</span><div class="cert-issuer">${c.issuer}</div></div></${Tag}>`;
  }).join('');
}

function renderProjects() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const list = t.projects?.list || PROJECTS.map(p => ({ name: p.name, desc: p.desc }));
  const container = document.getElementById('project-content');
  if (!container) return;
  container.innerHTML = PROJECTS.map((p, i) => {
    const item = list[i] || p;
    const name = item.name || p.name;
    const desc = item.desc || p.desc;
    const linksHtml = (p.links || []).map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="project-link">${l.label}</a>`).join(' ');
    return `<div class="project-card"><a href="${p.url}" target="_blank" rel="noopener" class="project-name">${name}</a><span class="project-desc">${desc}</span><span class="project-meta"><span class="project-tech">${p.tech}</span>${linksHtml ? `<span class="project-links">${linksHtml}</span>` : ''}</span></div>`;
  }).join('');
}

const FLAGS = { en: '🇬🇧', pl: '🇵🇱', uk: '🇺🇦', ru: '🇷🇺', es: '🇪🇸', it: '🇮🇹' };
const LANG_ORDER = ['en', 'pl', 'uk', 'ru', 'es', 'it'];
function renderLanguages() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const list = t.humanLanguages || LANG_ORDER.map((code, i) => ({
    name: ['English', 'Polish', 'Ukrainian', 'Russian', 'Spanish', 'Italian'][i],
    levelKey: ['proWorking', 'fullPro', 'native', 'native', 'elementary', 'elementary'][i],
    level: [80, 90, 100, 100, 25, 25][i]
  }));
  const ll = t.langLevel || {};
  const container = document.getElementById('language-list');
  if (!container) return;
  container.innerHTML = list.map((item, i) => {
    const level = ll[item.levelKey] || item.levelKey;
    const cls = ['native', 'native'].includes(item.levelKey) ? 'language-item native' : 'language-item';
    const flag = FLAGS[LANG_ORDER[i]] || '🇬🇧';
    return `<div class="${cls}" data-level="${item.level}"><span class="flag">${flag}</span><div class="content"><span class="name">${item.name}</span><span class="level">${level}</span><div class="language-bar-wrap"><div class="language-bar" style="width:${item.level}%"></div></div></div></div>`;
  }).join('');
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cv-lang', lang);
  document.querySelectorAll('.lang-switcher button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = key.split('.').reduce((o, k) => o?.[k], t);
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = key.split('.').reduce((o, k) => o?.[k], t);
    if (val !== undefined) el.placeholder = val;
  });
  renderExperience(t.experience);
  renderCertifications();
  renderProjects();
  renderAboutBullets(t.about?.bullets || []);
  renderLanguages();
  const langAttr = { en: 'en', pl: 'pl', uk: 'uk', ru: 'ru', es: 'es', it: 'it' };
  document.documentElement.lang = langAttr[lang] || 'en';
}

const BULLETS_COLLAPSED = 4;
const COMPANY_LOGOS = {
  box: { url: 'https://cdn.simpleicons.org/box/0061D5', fallback: 'B' },
  zf: { url: 'https://logo.clearbit.com/zf.com', fallbackUrl: 'https://www.google.com/s2/favicons?domain=zf.com&sz=128', fallback: 'ZF' }
};
const EDU_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>';
function renderPathTimeline(exp, education) {
  const path = [];
  if (education?.degree) {
    path.push({ type: 'edu', label: education.degree });
  }
  const reversed = [...(exp || [])].reverse();
  const expLen = exp?.length || 0;
  let prevCompany = null;
  reversed.forEach((item, r) => {
    const expId = expLen - 1 - r;
    const isFirstAtCompany = item.company && item.company !== prevCompany;
    if (isFirstAtCompany) {
      const companyName = (item.meta || '').split('•')[0].trim() || item.company;
      path.push({ type: 'company', company: item.company, companyName });
      prevCompany = item.company;
    }
    path.push({ type: 'position', title: item.title, expId });
  });
  const container = document.getElementById('path-timeline');
  if (!container) return;
  const logoOnErr = (info) => info?.fallbackUrl ? `if(!this.dataset.retry){this.dataset.retry=1;this.src='${info.fallbackUrl}'}else{this.style.display='none';this.nextElementSibling.style.display='flex'}` : `this.style.display='none';this.nextElementSibling.style.display='flex'`;
  container.innerHTML = `<div class="path-track">${path.map(p => {
    if (p.type === 'edu') {
      return `<div class="path-node path-node-edu-wrap"><span class="path-node-logo path-node-edu" aria-hidden="true">${EDU_ICON}</span><span class="path-node-label">${p.label}</span></div>`;
    }
    if (p.type === 'company') {
      const logo = COMPANY_LOGOS[p.company];
      const logoHtml = logo ? `<img src="${logo.url}" alt="" onerror="${logoOnErr(logo)}" width="28" height="28"><span class="path-logo-fallback" style="display:none">${logo.fallback}</span>` : '';
      return `<div class="path-node path-node-company"><span class="path-node-logo">${logoHtml || ''}</span><span class="path-node-label">${p.companyName}</span></div>`;
    }
    return `<a href="#exp-${p.expId}" class="path-node path-node-position"><span class="path-node-icon"><span class="path-node-dot"></span></span><span class="path-node-label">${p.title}</span></a>`;
  }).join('')}</div>`;
}
function renderExperience(exp) {
  const tr = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  renderPathTimeline(exp, tr.education);
  const showMore = tr.actions?.showMore ?? 'Show more';
  const showLess = tr.actions?.showLess ?? 'Show less';
  const container = document.getElementById('experience-content');
  container.innerHTML = exp.map((item, i) => {
    const bullets = item.bullets || [];
    const hasMany = bullets.length > BULLETS_COLLAPSED;
    const collapsedBullets = hasMany ? bullets.slice(0, BULLETS_COLLAPSED) : bullets;
    const hiddenBullets = hasMany ? bullets.slice(BULLETS_COLLAPSED) : [];
    const listId = `exp-bullets-${i}`;
    const toggleId = `exp-toggle-${i}`;
    const logoInfo = item.company ? COMPANY_LOGOS[item.company] : null;
    const logoOnError = logoInfo?.fallbackUrl
      ? `if(!this.dataset.retry){this.dataset.retry=1;this.src='${logoInfo.fallbackUrl}'}else{this.style.display='none';this.nextElementSibling.style.display='flex'}`
      : `this.style.display='none';this.nextElementSibling.style.display='flex'`;
    const logoHtml = logoInfo ? `<span class="company-logo-wrap"><img class="company-logo" src="${logoInfo.url}" alt="" onerror="${logoOnError}" width="36" height="36"><span class="company-logo-fallback" style="display:none">${logoInfo.fallback}</span></span>` : '';
    return `
        <div class="experience-item" id="exp-${i}" style="animation: fadeInUp 0.5s ease ${i * 0.08}s forwards; opacity: 0;">
          <h3>${logoHtml}<span>${item.title}</span></h3>
          <p class="meta">${item.meta}</p>
          <p class="summary">${item.summary}</p>
          ${bullets.length ? `
            <ul id="${listId}">
              ${collapsedBullets.map(b => `<li>${b}</li>`).join('')}
              ${hiddenBullets.map(b => `<li class="bullets-hidden">${b}</li>`).join('')}
            </ul>
            ${hasMany ? `
              <button type="button" class="experience-bullets-toggle" id="${toggleId}" aria-expanded="false" aria-controls="${listId}">
                <span class="chevron">▼</span>
                <span class="toggle-text">${showMore}</span>
              </button>
            ` : ''}
          ` : ''}
        </div>
      `}).join('');
  container.querySelectorAll('.experience-bullets-toggle').forEach(btn => {
    const list = document.getElementById(btn.getAttribute('aria-controls'));
    const hidden = list?.querySelectorAll('.bullets-hidden') || [];
    const textSpan = btn.querySelector('.toggle-text');
    btn.addEventListener('click', (e) => { e.stopPropagation();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      hidden.forEach(li => li.classList.toggle('bullets-hidden', expanded));
      btn.setAttribute('aria-expanded', !expanded);
      if (textSpan) textSpan.textContent = !expanded ? showLess : showMore;
    });
  });
}

document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Theme toggle (system default)
function applyTheme(theme) {
  const root = document.documentElement;
  const meta = document.getElementById('theme-color-meta');
  if (theme === 'system') {
    root.removeAttribute('data-theme');
    meta.content = window.matchMedia('(prefers-color-scheme: dark)').matches ? '#0a0a0b' : '#fafaf9';
  } else {
    root.setAttribute('data-theme', theme);
    meta.content = theme === 'dark' ? '#0a0a0b' : '#fafaf9';
  }
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === theme));
}
let themePref = localStorage.getItem('cv-theme') || 'system';
applyTheme(themePref);
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    themePref = btn.dataset.theme;
    localStorage.setItem('cv-theme', themePref);
    applyTheme(themePref);
  });
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (themePref === 'system') applyTheme('system');
});

document.querySelectorAll('.skill-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panelId = tab.dataset.panel;
    if (panelId === 'all') {
      document.querySelectorAll('.skill-panel').forEach(p => p.classList.add('active'));
    } else {
      document.getElementById(panelId)?.classList.add('active');
    }
  });
});

// Skill search - filter badges, switch to first matching panel when searching
const skillSearchEl = document.getElementById('skill-search');
skillSearchEl?.addEventListener('input', () => {
  const q = skillSearchEl.value.trim().toLowerCase();
  document.querySelectorAll('.skill-badge').forEach(badge => {
    const text = (badge.textContent || '').toLowerCase();
    const slug = (badge.dataset.skill || '').toLowerCase();
    const match = !q || text.includes(q) || slug.includes(q);
    badge.style.display = match ? '' : 'none';
  });
  if (q) {
    const firstVisible = Array.from(document.querySelectorAll('.skill-badge')).find(b => b.style.display !== 'none');
    if (firstVisible) {
      const panel = firstVisible.closest('.skill-panel');
      if (panel) {
        document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
        panel.classList.add('active');
        const tab = document.querySelector(`.skill-tab[data-panel="${panel.id}"]`);
        if (tab) tab.classList.add('active');
      }
    }
  } else {
    document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.skill-panel').forEach(p => p.classList.remove('active'));
    document.querySelector('.skill-tab[data-panel="all"]')?.classList.add('active');
    document.querySelectorAll('.skill-panel').forEach(p => p.classList.add('active'));
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('section').forEach(s => observer.observe(s));

// Scroll progress
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
});

// Back to top
const backBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backBtn.classList.toggle('visible', window.scrollY > 400);
});
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active nav based on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
function updateActiveNav() {
  const scrollY = window.scrollY + 150;
  let current = sections[0]?.id || '';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Copy email + toast
const toast = document.getElementById('toast');
// vCard download
document.getElementById('download-vcard')?.addEventListener('click', () => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const fullName = t.name || 'Dmytro Leshchenko';
  const nameN = t.nameN || 'Leshchenko;Dmytro;;;';
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
N:${nameN}
TITLE:Software Engineer
ORG:Box
EMAIL:dima.leschenko1998@gmail.com
URL:https://dl1998.github.io
NOTE:Software Engineer at Box • Observability, DevOps, Data Platform
END:VCARD`;
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'dmytro-leshchenko.vcf';
  a.click();
  URL.revokeObjectURL(a.href);
});

document.querySelector('.contact-card.copy-email')?.addEventListener('click', (e) => {
  const email = e.currentTarget.dataset.email;
  if (email && navigator.clipboard?.writeText) {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      toast.textContent = 'Copied!';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    });
  }
});

document.getElementById('year-current').textContent = new Date().getFullYear();

// Sticky header: full at top, compact when scrolled
const headerEl = document.querySelector('header');
function updateHeaderScroll() {
  headerEl?.classList.toggle('scrolled', window.scrollY > 50);
}
updateHeaderScroll(); // set initial state on load
window.addEventListener('scroll', updateHeaderScroll, { passive: true });

// Mobile nav menu: toggle and close on link click
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const MOBILE_BREAKPOINT = 1024;
function setNavToggleA11y() {
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  if (navToggle) navToggle.setAttribute('aria-hidden', !isMobile);
}
function closeNavMenu() {
  if (navMenu) navMenu.classList.remove('open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}
function openNavMenu() {
  if (navMenu) navMenu.classList.add('open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
}
function toggleNavMenu() {
  const isOpen = navMenu?.classList.contains('open');
  if (isOpen) closeNavMenu(); else openNavMenu();
}
navToggle?.addEventListener('click', toggleNavMenu);
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) closeNavMenu();
  });
});
window.addEventListener('resize', () => {
  setNavToggleA11y();
  if (window.innerWidth > MOBILE_BREAKPOINT) closeNavMenu();
});
setNavToggleA11y();

// Download PDF using pdfmake — programmatic generation, single library for all languages (Roboto: Latin, Cyrillic, Latin-ext)
function buildCvDocDefinition(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const s = t.sections || {};
  const ll = t.langLevel || {};
  const content = [];
  const h2 = (text) => ({ text, style: 'h2', margin: [0, 16, 0, 6] });
  const p = (text, opts = {}) => ({ text, style: 'body', margin: [0, 2, 0, 4], ...opts });
  const meta = (text) => ({ text, style: 'meta', margin: [0, 0, 0, 4] });
  content.push({ text: t.name || 'Dmytro Leshchenko', style: 'title' });
  content.push({ text: t.tagline, style: 'tagline', margin: [0, 0, 0, 12] });
  content.push(h2(s.about || 'About'));
  (t.about?.bullets || []).forEach(b => content.push(p('• ' + b)));
  content.push(h2(s.skills || 'Skills'));
  content.push(p(SKILLS_LIST.join(' • ')));
  content.push(h2(s.experience || 'Experience'));
  (t.experience || []).forEach(exp => {
    content.push({ text: exp.title, style: 'h3', margin: [0, 8, 0, 2] });
    content.push(meta(exp.meta));
    content.push(p(exp.summary || ''));
    (exp.bullets || []).forEach(b => content.push(p('• ' + b, { margin: [0, 0, 0, 2] })));
  });
  content.push(h2(s.education || 'Education'));
  content.push({ text: t.education?.degree, style: 'h3', margin: [0, 0, 0, 2] });
  content.push(meta(t.education?.meta));
  content.push(h2(s.certifications || 'Certifications'));
  CERTIFICATIONS.forEach(c => content.push(p(c.name + ' — ' + c.issuer)));
  content.push(h2(s.projects || 'Projects'));
  content.push(p(t.projects?.intro || ''));
  const projList = t.projects?.list || PROJECTS.map(p => ({ name: p.name, desc: p.desc }));
  PROJECTS.forEach((pr, i) => {
    const item = projList[i] || pr;
    content.push({ text: item.name || pr.name, style: 'link', link: pr.url, margin: [0, 2, 0, 0] });
    content.push(p((item.desc || pr.desc) + ' (' + pr.tech + ')'));
  });
  content.push(h2(s.learning || 'Learning'));
  content.push(p((t.learning?.intro || '') + ' ' + LEARNING_LIST.join(', ')));
  content.push(h2(s.humanLanguages || 'Languages'));
  (t.humanLanguages || HUMAN_LANGUAGES).forEach(hl => {
    const level = ll[hl.levelKey] || hl.levelKey;
    content.push(p(hl.name + ' — ' + level));
  });
  content.push(h2(s.contact || 'Contact'));
  content.push(p('dima.leschenko1998@gmail.com'));
  content.push(p('github.com/dl1998 • linkedin.com/in/dmytrol1998'));
  return {
    content,
    defaultStyle: { font: 'Roboto', fontSize: 10 },
    styles: {
      title: { fontSize: 22, bold: true },
      tagline: { fontSize: 11, color: '#444' },
      h2: { fontSize: 14, bold: true },
      h3: { fontSize: 11, bold: true },
      body: { fontSize: 10 },
      meta: { fontSize: 9, color: '#666' },
      link: { fontSize: 10, color: '#0061d5', decoration: 'underline' }
    },
    pageMargins: [40, 40, 40, 40]
  };
}
function generatePdf() {
  if (typeof pdfMake === 'undefined') {
    toast.textContent = 'PDF library loading…';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
    return;
  }
  try {
    const doc = buildCvDocDefinition(currentLang);
    const filename = `dmytro-leshchenko-cv-${currentLang}.pdf`;
    pdfMake.createPdf(doc).download(filename);
  } catch (e) {
    toast.textContent = 'PDF failed';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}
function openPrintDialog() { generatePdf(); }
document.getElementById('download-pdf')?.addEventListener('click', generatePdf);

// Copy CV as plain text
document.getElementById('copy-cv')?.addEventListener('click', () => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const lines = [
    t.name || 'Dmytro Leshchenko',
    t.tagline,
    '',
    'About',
    ...(t.about?.bullets || [t.about?.p1, t.about?.p2].filter(Boolean)),
    '',
    'Experience',
    ...(t.experience || []).flatMap(e => [e.title, e.meta, e.summary || '', ...(e.bullets || [])]),
    '',
    'Education',
    t.education?.degree,
    t.education?.meta,
    '',
    'Contact',
    'dima.leschenko1998@gmail.com',
    'https://github.com/dl1998',
    'https://linkedin.com/in/dmytrol1998'
  ];
  const text = lines.join('\n');
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      toast.textContent = 'CV copied!';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    });
  }
});

// Section jump dots
const sectionJump = document.getElementById('section-jump');
const sectionIds = ['about','skills','experience','education','certifications','projects','learning','languages','contact'];
sectionJump.innerHTML = sectionIds.map((id, i) => `<button type="button" class="jump-dot" data-section="${id}" aria-label="Jump to ${id}" title="${id}"></button>`).join('');
sectionJump.querySelectorAll('.jump-dot').forEach(btn => {
  btn.addEventListener('click', () => document.getElementById(btn.dataset.section)?.scrollIntoView({ behavior: 'smooth' }));
});
function updateJumpDots() {
  const y = window.scrollY + 120;
  let active = sectionIds[0];
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && y >= el.offsetTop) active = id;
  });
  sectionJump.querySelectorAll('.jump-dot').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === active);
  });
}
window.addEventListener('scroll', updateJumpDots);
updateJumpDots();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === '?') { document.getElementById('help-overlay').classList.toggle('visible'); return; }
  if (e.key === 'Escape') { document.getElementById('help-overlay').classList.remove('visible'); return; }
  if (e.key === 'p' || e.key === 'P') { if (!e.ctrlKey && !e.metaKey) { e.preventDefault(); openPrintDialog(); } return; }
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= 9 && sectionIds[n - 1]) {
    document.getElementById(sectionIds[n - 1])?.scrollIntoView({ behavior: 'smooth' });
  }
});
document.getElementById('help-overlay')?.addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.classList.remove('visible'); });

setLang(currentLang);

// Typing effect for tagline on first load (after setLang populates it)
const tagline = document.querySelector('.tagline');
if (tagline && !sessionStorage.getItem('tagline-typed')) {
  const full = tagline.textContent;
  if (full) {
    tagline.textContent = '';
    let i = 0;
    const type = () => {
      if (i < full.length) {
        tagline.textContent += full[i++];
        setTimeout(type, 25);
      } else {
        sessionStorage.setItem('tagline-typed', '1');
      }
    };
    setTimeout(type, 300);
  }
}
