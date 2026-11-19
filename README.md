# 🌴 Buriti Valley — Plataforma Oficial da Comunidade de Startups de Roraima

> **Protótipo Interativo (Marco 1) — De Roraima para o Mundo**  
> Desenvolvido para dar visibilidade global às startups do extremo norte do Brasil, conectando fundadores a investidores, aceleradoras, editais e parceiros de mercado.

---

## 🏛️ Sobre a Buriti Valley e o Ecossistema

* **Fundação:** 19 de maio de 2016 em Boa Vista/RR (com raízes de mentoria técnica desde 2014).
* **Ciclo de Revitalização (2025–2026):** Meetups presenciais *Beeriti Valley*, *StartupON Roraima* (out/2026) e integração formal na **Governança do Ecossistema Local de Inovação (ELI) de Boa Vista** junto a 11 instituições (Rorainova, Fier, UFRR, IFRR, Faperr, Sebrae/RR, Senai/RR, Seadi, Jucerr, Desenvolve RR e AME).
* **Radiografia Oficial (Levantamento Sebrae Roraima, mar/2026):**
  * **126 Startups mapeadas** (86,5% sediadas em Boa Vista).
  * **51%** em Ideação | **25,6%** em Validação/MVP | **20%** em Tração/Escala.
  * **Verticais líderes:** Agronegócio (18%), Impacto Socioambiental (16%), Alimentos & Bebidas (12%), Saúde & Bem-estar (10%), TI & SaaS (8%).

---

## 🚀 Arquitetura Técnica & Decisões de Design

1. **100% Estático & Compatível com GitHub Pages:**
   * Zero dependências de servidor ou banco de dados externo no Marco 1.
   * Todos os links e assets utilizam caminhos relativos (`./`, `../`, `../../`), funcionando perfeitamente em subdiretórios (`https://<usuario>.github.io/<repo>/`) ou domínios personalizados.
2. **Design System Buriti Valley (`css/custom.css`):**
   * **Tipografia:** `Outfit` (headings) e `Inter` (corpo de texto), servidas localmente em formato `.woff2` de alta performance.
   * **Paleta:** Fundo floresta amazônica profundo (`#06110a`), acentos em Verde Esmeralda Amazônia (`#10b981`), Dourado Fruto do Buriti (`#f59e0b`) e Ciano Rio Branco (`#06b6d4`).
   * **Componentes:** Cards com glassmorphism, badges semânticos para Estágio e Objetivo, e suporte completo a Dark/Light Mode.
3. **Internacionalização Real-Time (PT / EN):**
   * Toggle no header com chaveamento instantâneo de interface e dos dados bilíngues estruturados das startups, persistindo a preferência em `localStorage`.
4. **Fonte Única de Verdade (`data/startups.json`) & Gerador Automatizado:**
   * Todas as informações das startups residem em `data/startups.json`.
   * O script `scripts/build_startups.js` consome o template `templates/startup-detail.html` e compila cada página individual `/startups/[slug]/index.html`.

---

## 📁 Estrutura de Rotas

| Rota | Descrição |
| :--- | :--- |
| `/` (`index.html`) | **Home & Vitrine Interativa:** Hero com manifesto, radiografia de métricas oficiais, busca em tempo real e filtros combináveis por Estágio, Objetivo e Vertical. |
| `/startups/[slug]/index.html` | **Dossiê Dedicado da Startup:** URL limpa e compartilhável com problema, solução, métricas, premiações, captação atual e time detalhado (formação acadêmica, bio, skills). |
| `/governanca/index.html` | **Governança & História:** Linha do tempo de 2014 a 2026, as 11 instituições do ELI Boa Vista e critérios de inclusão na vitrine. |
| `/conectar/index.html` | **Canal de Entrada & Matchmaking:** Formulário em abas para *Cadastrar Startup* e *Acesso ao Deal Flow para Investidores*. |

---

## 🛠️ Como Adicionar Novas Startups

1. Abra `data/startups.json` e adicione o novo objeto seguindo o schema padrão.
2. Execute o gerador:
   ```bash
   node scripts/build_startups.js
   ```
3. A nova pasta `/startups/<novo-slug>/index.html` será gerada automaticamente e a startup aparecerá na Vitrine da Home.

---

## 🌐 Teste Local

Para rodar localmente um servidor HTTP estático:

```bash
# Opção com Python
python3 -m http.server 8080

# Ou com Node
npx serve .
```

Abra `http://localhost:8080` no navegador.

