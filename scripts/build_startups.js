/**
 * Gerador Estático de Dossiês de Startups — Buriti Valley
 * Lê data/startups.json e gera as rotas /startups/[slug]/index.html
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT_DIR, 'data', 'startups.json');
const TEMPLATE_FILE = path.join(ROOT_DIR, 'templates', 'startup-detail.html');
const STARTUPS_DIR = path.join(ROOT_DIR, 'startups');

function getStageClass(estagio) {
  const norm = (estagio || '').toLowerCase();
  if (norm.includes('ideação') || norm.includes('ideacao')) return 'badge-ideacao';
  if (norm.includes('mvp') || norm.includes('validação')) return 'badge-mvp';
  if (norm.includes('operação') || norm.includes('operacao')) return 'badge-operacao';
  return 'badge-tracao';
}

function getGoalClass(goal) {
  const norm = (goal || '').toLowerCase();
  if (norm.includes('investimento')) return 'badge-goal-investimento';
  if (norm.includes('acelera')) return 'badge-goal-aceleracao';
  return 'badge-goal-parcerias';
}

function generateLinksHtml(links) {
  if (!links) return '';
  let html = '';
  
  if (links.website) {
    html += `
      <a href="${links.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        Website Oficial
      </a>
    `;
  }

  if (links.pitch_deck) {
    html += `
      <a href="${links.pitch_deck}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        Pitch Deck
      </a>
    `;
  }

  if (links.linkedin) {
    html += `
      <a href="${links.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        LinkedIn
      </a>
    `;
  }

  return html;
}

function generateAwardsHtml(premiacoes) {
  if (!premiacoes || premiacoes.length === 0) {
    return `<div class="award-item"><span class="award-title">Em fase de submissão aos editais estaduais (Centelha/Tecnova)</span></div>`;
  }

  return premiacoes.map(item => `
    <div class="award-item">
      <span class="award-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
        ${item.titulo}
      </span>
      <span class="award-year">${item.ano}</span>
    </div>
  `).join('\n');
}

function generateGoalsHtml(buscando) {
  if (!buscando) return '';
  return buscando.map(b => `<span class="badge-goal ${getGoalClass(b)}">${b}</span>`).join(' ');
}

function generateTeamHtml(time) {
  if (!time || time.length === 0) return '';

  return time.map(membro => {
    const initials = membro.nome.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
    const skillsHtml = (membro.skills || []).map(s => `<span class="member-skill-tag">${s}</span>`).join(' ');
    
    let socialLinksHtml = '';
    if (membro.linkedin) {
      socialLinksHtml += `
        <a href="${membro.linkedin}" target="_blank" rel="noopener" class="member-social-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>
      `;
    }
    if (membro.github) {
      socialLinksHtml += `
        <a href="${membro.github}" target="_blank" rel="noopener" class="member-social-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub
        </a>
      `;
    }

    return `
      <div class="member-card">
        <div>
          <div class="member-header">
            <div class="member-avatar">${initials}</div>
            <div class="member-meta">
              <h4>${membro.nome}</h4>
              <span class="member-role">${membro.cargo}</span>
            </div>
          </div>

          <div class="member-academic">
            <strong>Formação Acadêmica</strong>
            ${membro.formacao || 'Ensino Superior / Pós-Graduação'}
          </div>

          <p class="member-bio">${membro.experiencia || ''}</p>
        </div>

        <div>
          <div class="member-skills-row">
            ${skillsHtml}
          </div>
          <div class="member-socials">
            ${socialLinksHtml || '<span style="font-size:0.75rem; color:var(--color-text-muted);">Perfil verificado Buriti Valley</span>'}
          </div>
        </div>
      </div>
    `;
  }).join('\n');
}

function build() {
  console.log('🌱 Iniciando geração de páginas estáticas de Startups...');

  if (!fs.existsSync(DATA_FILE)) {
    console.error(`❌ Arquivo de dados não encontrado: ${DATA_FILE}`);
    process.exit(1);
  }

  if (!fs.existsSync(TEMPLATE_FILE)) {
    console.error(`❌ Template não encontrado: ${TEMPLATE_FILE}`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
  const startups = JSON.parse(rawData);
  const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

  if (!fs.existsSync(STARTUPS_DIR)) {
    fs.mkdirSync(STARTUPS_DIR, { recursive: true });
  }

  let count = 0;

  for (const s of startups) {
    const startupDir = path.join(STARTUPS_DIR, s.slug);
    if (!fs.existsSync(startupDir)) {
      fs.mkdirSync(startupDir, { recursive: true });
    }

    const stageClass = getStageClass(s.estagio);
    const linksHtml = generateLinksHtml(s.links);
    const awardsHtml = generateAwardsHtml(s.premiacoes);
    const goalsHtml = generateGoalsHtml(s.buscando);
    const teamHtml = generateTeamHtml(s.time);

    let outputHtml = template
      .replace(/{{STARTUP_NAME}}/g, s.nome)
      .replace(/{{STARTUP_INITIALS}}/g, s.logo_iniciais || s.nome.substring(0, 2).toUpperCase())
      .replace(/{{STARTUP_SLUG}}/g, s.slug)
      .replace(/{{STAGE_CLASS}}/g, stageClass)
      .replace(/{{STARTUP_STAGE}}/g, s.estagio)
      .replace(/{{STARTUP_VERTICAL}}/g, s.vertical)
      .replace(/{{STARTUP_MODEL}}/g, s.modelo_negocio || 'B2B')
      .replace(/{{STARTUP_TAGLINE_PT}}/g, s.tagline ? s.tagline.pt : '')
      .replace(/{{STARTUP_TAGLINE_CURRENT}}/g, s.tagline ? s.tagline.pt : '')
      .replace(/{{STARTUP_PROBLEM_CURRENT}}/g, s.problema ? s.problema.pt : '')
      .replace(/{{STARTUP_SOLUTION_CURRENT}}/g, s.solucao ? s.solucao.pt : '')
      .replace(/{{STARTUP_DIFF_CURRENT}}/g, s.diferencial ? s.diferencial.pt : 'Tecnologia inovadora desenvolvida e validada no ecossistema de Roraima.')
      .replace(/{{STARTUP_METRICS_CURRENT}}/g, s.metricas_destaque ? s.metricas_destaque.pt : 'Métricas validadas em comitê de aceleração local.')
      .replace(/{{STARTUP_SEEKING_CURRENT}}/g, s.pedido_atual ? s.pedido_atual.pt : 'Buscando parceiros estratégicos e investimento no ecossistema.')
      .replace(/{{LINKS_HTML}}/g, linksHtml)
      .replace(/{{AWARDS_HTML}}/g, awardsHtml)
      .replace(/{{GOALS_HTML}}/g, goalsHtml)
      .replace(/{{TEAM_HTML}}/g, teamHtml)
      .replace(/{{STARTUP_JSON_RAW}}/g, JSON.stringify(s, null, 2));

    const outputFile = path.join(startupDir, 'index.html');
    fs.writeFileSync(outputFile, outputHtml, 'utf-8');
    console.log(`✅ Gerada página dedicada: /startups/${s.slug}/index.html`);
    count++;
  }

  console.log(`🎉 Total de ${count} páginas de startups geradas com sucesso!`);
}

build();

