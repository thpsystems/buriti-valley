/**
 * Buriti Valley — JavaScript Principal da Vitrine
 * Internacionalização (PT/EN), Filtros Combináveis, Busca Textual e Interatividade
 */

const translations = {
  pt: {
    nav_subtext: "Comunidade de Startups de Roraima",
    nav_home: "Vitrine",
    nav_gov: "Governança & Sobre",
    nav_submit: "Submeter Startup",
    nav_investors: "Investidores",
    hero_pill: "Comunidade Oficial de Startups de Roraima",
    hero_title: "De Roraima para o Mundo: A Vitrine da Inovação na Amazônia",
    hero_subtitle: "Descubra, conecte-se e invista nas startups pioneiras que estão transformando a bioeconomia, agronegócio de precisão, saúde e software a partir do extremo norte do Brasil.",
    hero_btn_explore: "Explorar Startups",
    hero_btn_submit: "Submeter Startup",
    hero_btn_investor: "Conectar como Investidor",
    metrics_title: "Radiografia do Ecossistema de Startups (ELI Boa Vista & Roraima)",
    metrics_source: "Fonte: Levantamento Oficial Sebrae Roraima (mar/2026)",
    metric_startups_label: "Startups Mapeadas",
    metric_startups_sub: "86,5% sediadas na capital Boa Vista",
    metric_ideation_label: "Em Ideação",
    metric_ideation_sub: "Comunidade densa em novas teses",
    metric_mvp_label: "Em Validação & MVP",
    metric_mvp_sub: "Protótipos em teste de mercado",
    metric_traction_label: "Em Tração & Escala",
    metric_traction_sub: "Operações comerciais ativas",
    breakdown_verticals: "Verticais Líderes em Roraima",
    breakdown_network: "Rede de Fomento & Hubs Conectados",
    radar_title: "Radar Buriti Valley",
    radar_badge: "Destaque",
    radar_btn_prev: "⏪ ver ciclo anterior",
    radar_btn_curr: "⏩ voltar ao ciclo atual",
    radar_viewing_prev: "ciclo anterior",
    vitrine_title: "Vitrine Interativa de Startups",
    vitrine_desc: "Utilize a busca textual e os filtros combináveis para encontrar startups por estágio de maturidade, vertical tecnológica ou objetivo de captação e parcerias.",
    search_placeholder: "Buscar por nome, vertical, tecnologia, desafio ou fundador...",
    filter_stage: "Estágio:",
    filter_goal: "Buscando:",
    filter_vertical: "Vertical:",
    filter_all: "Todos",
    filter_all_f: "Todas",
    filter_clear: "Limpar todos os filtros",
    showing_results: "Exibindo {count} de {total} startups mapeadas",
    empty_title: "Nenhuma startup encontrada para os filtros selecionados",
    empty_desc: "Tente remover alguns filtros ou buscar por outro termo para explorar o ecossistema.",
    empty_btn: "Redefinir Filtros",
    card_seeking_lbl: "O QUE BUSCAM AGORA:",
    card_view_dossier: "Ver Dossiê Completo",
    cta_startup_title: "Sua Startup em Roraima Precisa de Visibilidade Global?",
    cta_startup_desc: "Cadastre sua empresa na vitrine oficial da Buriti Valley, conecte-se a programas de fomento (Centelha, Tecnova, Inova Amazônia) e amplie seu acesso a investidores.",
    cta_startup_btn: "Cadastrar Startup na Vitrine",
    cta_investor_title: "Investidor, Aceleradora ou Parceiro Corporativo?",
    cta_investor_desc: "Acesse deal flow exclusivo de DeepTech, Agrotech e Bioeconomia gerado no centro geográfico do Escudo das Guianas, com apoio institucional da governança ELI Boa Vista.",
    cta_investor_btn: "Acessar Deal Flow / Conectar",
    footer_desc: "A comunidade pioneira de startups e inovação de Roraima. Conectando o ecossistema do extremo norte do Brasil aos principais polos de investimento do planeta.",
    footer_col_platform: "Plataforma",
    footer_col_ecosystem: "Ecossistema ELI RR",
    footer_copy: "© 2026 Buriti Valley. Todos os direitos reservados. De Roraima para o Mundo."
  },
  en: {
    nav_subtext: "Roraima Startup & Innovation Community",
    nav_home: "Showcase",
    nav_gov: "Governance & About",
    nav_submit: "Submit Startup",
    nav_investors: "Investors",
    hero_pill: "Official Startup Community of Roraima, Brazil",
    hero_title: "From Roraima to the World: The Amazon Innovation Showcase",
    hero_subtitle: "Discover, connect, and invest in pioneering ventures driving bioeconomy, precision agritech, healthcare, and enterprise software from northern Brazil.",
    hero_btn_explore: "Explore Startups",
    hero_btn_submit: "Submit Startup",
    hero_btn_investor: "Connect as Investor",
    metrics_title: "Startup Ecosystem Telemetry (ELI Boa Vista & Roraima)",
    metrics_source: "Source: Official Sebrae Roraima Census (March 2026)",
    metric_startups_label: "Mapped Startups",
    metric_startups_sub: "86.5% located in capital city Boa Vista",
    metric_ideation_label: "Ideation Stage",
    metric_ideation_sub: "Dense pipeline of emerging theses",
    metric_mvp_label: "Validation & MVP",
    metric_mvp_sub: "Prototypes under active market test",
    metric_traction_label: "Traction & Scale",
    metric_traction_sub: "Commercially active revenue generators",
    breakdown_verticals: "Leading Verticals in Roraima",
    breakdown_network: "Innovation Hubs & Grants Network",
    radar_title: "Buriti Valley Radar",
    radar_badge: "Spotlight",
    radar_btn_prev: "⏪ view previous cycle",
    radar_btn_curr: "⏩ back to current cycle",
    radar_viewing_prev: "previous cycle",
    vitrine_title: "Interactive Startup Showcase",
    vitrine_desc: "Use search and combinable filters to discover ventures by maturity stage, technology vertical, or active fundraising & acceleration goals.",
    search_placeholder: "Search by startup name, vertical, technology, challenge or founder...",
    filter_stage: "Stage:",
    filter_goal: "Seeking:",
    filter_vertical: "Vertical:",
    filter_all: "All",
    filter_all_f: "All",
    filter_clear: "Clear all filters",
    showing_results: "Showing {count} of {total} mapped startups",
    empty_title: "No startups found matching your filter criteria",
    empty_desc: "Try relaxing some filters or searching for another keyword to explore the ecosystem.",
    empty_btn: "Reset Filters",
    card_seeking_lbl: "SEEKING NOW:",
    card_view_dossier: "View Full Dossier",
    cta_startup_title: "Does Your Roraima-based Startup Need Global Exposure?",
    cta_startup_desc: "List your venture in Buriti Valley's official showcase, connect to acceleration programs, state grants (Centelha, Tecnova) and venture capital funds.",
    cta_startup_btn: "Submit Startup to Showcase",
    cta_investor_title: "Investor, Accelerator or Corporate Partner?",
    cta_investor_desc: "Access proprietary deal flow in DeepTech, AgriTech, and Bioeconomy emerging from the Guiana Shield frontier, backed by the local ELI innovation governance.",
    cta_investor_btn: "Access Deal Flow / Connect",
    footer_desc: "The pioneering startup and innovation community of Roraima. Connecting Brazil's Northern Amazon hub to global venture capital ecosystems.",
    footer_col_platform: "Platform",
    footer_col_ecosystem: "ELI RR Ecosystem",
    footer_copy: "© 2026 Buriti Valley. All rights reserved. From Roraima to the World."
  }
};

let startupsData = [];
let currentLang = localStorage.getItem('bv_lang') || 'pt';
let isShowingPreviousRadar = false;
let activeFilters = {
  estagio: 'Todos',
  objetivo: 'Todos',
  vertical: 'Todas',
  searchQuery: ''
};

// Gerador Pseudo-aleatório semeado (Mulberry32) determinístico
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Retorna o índice do slot de 12 horas atual (epoch / 12h)
function getCurrentSlot() {
  const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000;
  return Math.floor(Date.now() / TWELVE_HOURS_MS);
}

// Seleciona 4 startups de forma determinística para um determinado slot
function getFeaturedStartupsForSlot(slotOffset = 0) {
  if (!startupsData || startupsData.length === 0) return [];
  const targetSlot = getCurrentSlot() + slotOffset;
  const rng = mulberry32(targetSlot);
  
  // Clone do array para embaralhamento Fisher-Yates com o PRNG
  const shuffled = [...startupsData];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Retorna até 4 startups
  return shuffled.slice(0, Math.min(4, shuffled.length));
}

// Alterna a exibição do Radar entre ciclo atual e ciclo anterior
function toggleRadarCycle() {
  isShowingPreviousRadar = !isShowingPreviousRadar;
  renderRadar();
}

// Renderiza a seção Radar Buriti Valley (4 em destaque a cada 12h)
function renderRadar() {
  const radarGrid = document.getElementById('radar-grid');
  const radarBtn = document.getElementById('radar-toggle-btn');
  const radarNotice = document.getElementById('radar-status-notice');
  if (!radarGrid) return;

  const t = translations[currentLang];
  const offset = isShowingPreviousRadar ? -1 : 0;
  const featured = getFeaturedStartupsForSlot(offset);

  // Atualiza botão discreto
  if (radarBtn) {
    radarBtn.textContent = isShowingPreviousRadar ? t.radar_btn_curr : t.radar_btn_prev;
    radarBtn.classList.toggle('active', isShowingPreviousRadar);
  }

  // Notificação sutil se estiver vendo as anteriores
  if (radarNotice) {
    if (isShowingPreviousRadar) {
      radarNotice.style.display = 'inline-flex';
      radarNotice.textContent = t.radar_viewing_prev;
    } else {
      radarNotice.style.display = 'none';
      radarNotice.textContent = '';
    }
  }

  // Gera cards do Radar
  radarGrid.innerHTML = featured.map(item => {
    const initials = item.logo_iniciais || item.nome.substring(0, 2).toUpperCase();
    const stageClass = getStageBadgeClass(item.estagio);
    const tagline = item.tagline ? (item.tagline[currentLang] || item.tagline.pt) : '';
    const goalsHtml = (item.buscando || []).map(g => `
      <span class="badge-goal ${getGoalBadgeClass(g)}">${g}</span>
    `).join(' ');

    return `
      <a href="./startups/${item.slug}/" class="startup-card radar-card" aria-label="Ver detalhes da startup ${item.nome}">
        <div>
          <div class="radar-card-topbar">
            <span class="badge-stage ${stageClass}">${item.estagio}</span>
            <span class="radar-card-badge">⚡ ${t.radar_badge}</span>
          </div>

          <div class="card-header">
            <div class="card-logo">${initials}</div>
            <div class="card-title-group">
              <div class="card-name">
                <span>${item.nome}</span>
              </div>
              <div class="card-meta-row">
                <span class="badge-vertical">${item.vertical}</span>
                <span class="badge-vertical">${item.modelo_negocio || 'B2B'}</span>
              </div>
            </div>
          </div>

          <p class="card-tagline">${tagline}</p>

          <div class="card-seeking-box">
            <span class="card-seeking-label">${t.card_seeking_lbl}</span>
            <div class="card-seeking-badges">
              ${goalsHtml}
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-founders-preview">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            <span>${(item.time && item.time[0]) ? item.time[0].nome : 'Roraima'}</span>
          </div>
          <div class="card-link-arrow">
            <span>${t.card_view_dossier}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </a>
    `;
  }).join('');
}

// Carrega os dados de startups
async function loadStartupsData() {
  try {
    const response = await fetch('./data/startups.json');
    if (!response.ok) throw new Error('Falha ao carregar data/startups.json');
    startupsData = await response.json();
    renderRadar();
    renderVitrine();
  } catch (error) {
    console.error('Erro ao carregar startups:', error);
    const grid = document.getElementById('startups-grid');
    if (grid) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <h3>Não foi possível carregar as startups</h3>
          <p>Verifique o arquivo data/startups.json ou tente recarregar a página.</p>
        </div>
      `;
    }
  }
}

// Troca de Idioma Global
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bv_lang', lang);
  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

  // Atualiza botões de idioma
  const ptBtn = document.getElementById('lang-pt');
  const enBtn = document.getElementById('lang-en');
  if (ptBtn && enBtn) {
    ptBtn.classList.toggle('active', lang === 'pt');
    enBtn.classList.toggle('active', lang === 'en');
  }

  // Atualiza labels data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Atualiza placeholder de busca
  const searchInput = document.getElementById('search-input');
  if (searchInput && translations[lang].search_placeholder) {
    searchInput.placeholder = translations[lang].search_placeholder;
  }

  // Re-renderiza a vitrine e radar com os textos do novo idioma
  if (startupsData.length > 0) {
    renderRadar();
    renderVitrine();
  }
}

// Utilitário para classes de badges de estágio
function getStageBadgeClass(estagio) {
  const norm = (estagio || '').toLowerCase();
  if (norm.includes('ideação') || norm.includes('ideacao')) return 'badge-ideacao';
  if (norm.includes('mvp') || norm.includes('validação')) return 'badge-mvp';
  if (norm.includes('operação') || norm.includes('operacao')) return 'badge-operacao';
  return 'badge-tracao';
}

// Utilitário para classes de badges de objetivo
function getGoalBadgeClass(goal) {
  const norm = (goal || '').toLowerCase();
  if (norm.includes('investimento')) return 'badge-goal-investimento';
  if (norm.includes('acelera')) return 'badge-goal-aceleracao';
  return 'badge-goal-parcerias';
}

// Renderização dos cards da vitrine
function renderVitrine() {
  const grid = document.getElementById('startups-grid');
  const countEl = document.getElementById('results-count');
  if (!grid) return;

  const t = translations[currentLang];

  // Aplica filtros combináveis
  const filtered = startupsData.filter(item => {
    // Filtro Estágio
    if (activeFilters.estagio !== 'Todos') {
      const matchStage = item.estagio.toLowerCase() === activeFilters.estagio.toLowerCase();
      if (!matchStage) return false;
    }

    // Filtro Objetivo (O que buscam)
    if (activeFilters.objetivo !== 'Todos') {
      const buscandoList = item.buscando || [];
      const matchGoal = buscandoList.some(b => b.toLowerCase().includes(activeFilters.objetivo.toLowerCase()));
      if (!matchGoal) return false;
    }

    // Filtro Vertical
    if (activeFilters.vertical !== 'Todas') {
      const matchVertical = item.vertical.toLowerCase().includes(activeFilters.vertical.toLowerCase());
      if (!matchVertical) return false;
    }

    // Busca Textual
    if (activeFilters.searchQuery.trim() !== '') {
      const q = activeFilters.searchQuery.toLowerCase();
      const nameMatch = item.nome.toLowerCase().includes(q);
      const verticalMatch = item.vertical.toLowerCase().includes(q);
      const taglineMatch = (item.tagline && (item.tagline.pt.toLowerCase().includes(q) || item.tagline.en.toLowerCase().includes(q)));
      const solucaoMatch = (item.solucao && (item.solucao.pt.toLowerCase().includes(q) || item.solucao.en.toLowerCase().includes(q)));
      const teamMatch = (item.time || []).some(m => m.nome.toLowerCase().includes(q) || (m.skills || []).some(s => s.toLowerCase().includes(q)));
      
      if (!nameMatch && !verticalMatch && !taglineMatch && !solucaoMatch && !teamMatch) {
        return false;
      }
    }

    return true;
  });

  // Atualiza contador
  if (countEl) {
    countEl.textContent = t.showing_results
      .replace('{count}', filtered.length)
      .replace('{total}', startupsData.length);
  }

  // Se nenhum resultado
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>${t.empty_title}</h3>
        <p>${t.empty_desc}</p>
        <button class="btn btn-secondary btn-sm" onclick="clearAllFilters()">${t.empty_btn}</button>
      </div>
    `;
    return;
  }

  // Gera cards
  grid.innerHTML = filtered.map(item => {
    const initials = item.logo_iniciais || item.nome.substring(0, 2).toUpperCase();
    const stageClass = getStageBadgeClass(item.estagio);
    const tagline = item.tagline ? (item.tagline[currentLang] || item.tagline.pt) : '';
    
    // Badges de objetivo
    const goalsHtml = (item.buscando || []).map(g => `
      <span class="badge-goal ${getGoalBadgeClass(g)}">${g}</span>
    `).join(' ');

    // Fundadores preview
    const foundersNames = (item.time || []).map(m => m.nome.split(' ')[0]).join(', ');

    return `
      <a href="./startups/${item.slug}/" class="startup-card" aria-label="Ver detalhes da startup ${item.nome}">
        <div>
          <div class="card-header">
            <div class="card-logo">${initials}</div>
            <div class="card-title-group">
              <div class="card-name">
                <span>${item.nome}</span>
                <span class="badge-stage ${stageClass}">${item.estagio}</span>
              </div>
              <div class="card-meta-row">
                <span class="badge-vertical">${item.vertical}</span>
                <span class="badge-vertical">${item.modelo_negocio || 'B2B'}</span>
              </div>
            </div>
          </div>

          <p class="card-tagline">${tagline}</p>

          <div class="card-seeking-box">
            <span class="card-seeking-label">${t.card_seeking_lbl}</span>
            <div class="card-seeking-badges">
              ${goalsHtml}
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-founders-preview">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            <span>${foundersNames ? 'Time: ' + foundersNames : 'Roraima'}</span>
          </div>
          <div class="card-link-arrow">
            <span>${t.card_view_dossier}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </a>
    `;
  }).join('');
}

// Limpa todos os filtros
function clearAllFilters() {
  activeFilters.estagio = 'Todos';
  activeFilters.objetivo = 'Todos';
  activeFilters.vertical = 'Todas';
  activeFilters.searchQuery = '';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  // Reseta classes ativas nos botões de filtros
  document.querySelectorAll('.filter-chip').forEach(btn => {
    const group = btn.getAttribute('data-filter-group');
    const val = btn.getAttribute('data-filter-val');
    const isDefault = (val === 'Todos' || val === 'Todas');
    btn.classList.toggle('active', isDefault);
  });

  renderVitrine();
}

// Configuração dos Eventos
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa Idioma
  switchLanguage(currentLang);

  // Inicializa Carregamento das Startups
  loadStartupsData();

  // Mobile Menu
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('bv_theme', nextTheme);
    });
  }

  // Busca Textual com debounce
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    let timeout = null;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        activeFilters.searchQuery = e.target.value;
        renderVitrine();
      }, 150);
    });
  }

  // Filtros Chips Clicáveis
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.getAttribute('data-filter-group');
      const val = chip.getAttribute('data-filter-val');

      // Desativa os outros do mesmo grupo
      document.querySelectorAll(`.filter-chip[data-filter-group="${group}"]`).forEach(c => {
        c.classList.remove('active');
      });

      // Ativa o clicado
      chip.classList.add('active');

      // Aplica no estado
      activeFilters[group] = val;
      renderVitrine();
    });
  });
});

