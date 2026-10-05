// ============================================================
//  PAGE D'ACCUEIL D'UN DOSSIER — mutualisée pour TOUS les dossiers.
//  Style sombre et chaleureux, parcours guidé en 5 étapes.
//  Les modules sont rangés par étape d'après leur TITRE (pas leur id),
//  ce qui fonctionne quel que soit l'ordre du fichier de données.
// ============================================================

import { Link } from "react-router-dom";

const C = {
  bg: "#120f0b",
  surface: "#1b1610",
  surfaceHover: "#241d14",
  border: "#33291c",
  text: "#f3e9d8",
  muted: "#b9a98f",
  faint: "#8c7c65",
  amber: "#f2b450",
  amberDeep: "#d98c2b",
  gold: "#ffd23f",
};

const PHASES = [
  {
    key: "comprendre",
    title: "Comprendre",
    hint: "le quoi",
    intro: "Le métier de l'entreprise, sans jargon : ce qu'elle vend, à qui, et comment.",
    modules: ["presentation", "chaine", "segments"],
  },
  {
    key: "qualifier",
    title: "Qualifier",
    hint: "pourquoi ça marche",
    intro: "Ce qui la protège de la concurrence, et comment elle se compare à ses pairs.",
    modules: ["avantages", "competition"],
  },
  {
    key: "mesurer",
    title: "Mesurer",
    hint: "les chiffres",
    intro: "Les derniers résultats, le ton de la direction et ce qui a fait bouger le cours.",
    modules: ["resultats", "earnings", "cours"],
  },
  {
    key: "evaluer",
    title: "Évaluer",
    hint: "qui pilote",
    intro: "Les dirigeants, leur bilan et leur façon d'utiliser l'argent des actionnaires.",
    modules: ["management"],
  },
  {
    key: "challenger",
    title: "Challenger",
    hint: "et si c'était faux ?",
    intro: "Mettre la thèse à l'épreuve avant de conclure.",
    tip: "Ne sautez pas cette étape : une analyse qui ne passe pas par la critique penche presque toujours vers l'optimisme.",
    modules: ["bull", "redflags", "avocat", "projections", "questions"],
  },
];

// Reconnaissance d'un module par son titre (ordre des tests important).
const MATCHERS = [
  ["questions", /question/],
  ["redflags", /red ?flag|signaux d'alerte/],
  ["avocat", /avocat|short/],
  ["bull", /bull|bear/],
  ["projections", /projection|bpa/],
  ["management", /management|dirigeant/],
  ["earnings", /earnings|conference/],
  ["cours", /cours|prix de l'action/],
  ["resultats", /resultat/],
  ["competition", /competition|concurren/],
  ["avantages", /avantage|moat/],
  ["segments", /segment/],
  ["chaine", /chaine|approvisionnement/],
  ["presentation", /presentation/],
];

const DESCRIPTIONS = {
  presentation: "Le modèle économique, expliqué simplement.",
  chaine: "Fournisseurs, clients : tout l'écosystème.",
  segments: "D'où vient vraiment le chiffre d'affaires.",
  avantages: "Les fossés qui protègent les marges.",
  competition: "Face aux concurrents, chiffres à l'appui.",
  resultats: "Les derniers chiffres, décryptés.",
  earnings: "Ce que dit, et ne dit pas, la direction.",
  cours: "Ce qui a fait monter ou baisser le titre.",
  management: "Qui pilote, et avec quel bilan.",
  bull: "Le scénario optimiste face au pessimiste.",
  redflags: "L'audit des comptes, sans complaisance.",
  avocat: "La thèse du vendeur à découvert.",
  projections: "Le bénéfice par action estimé à trois ans.",
  questions: "Quinze questions à poser au dirigeant.",
};

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août",
  "septembre", "octobre", "novembre", "décembre"];

function norm(s) {
  return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function keyOf(module) {
  const t = norm(module.title);
  const hit = MATCHERS.find(([, re]) => re.test(t));
  return hit ? hit[0] : null;
}

function zoneOf(score) {
  if (score < 30) return { color: "#ff4d5e", label: "Risque très élevé" };
  if (score < 50) return { color: "#ff9f43", label: "Risque élevé" };
  if (score < 70) return { color: "#ffd23f", label: "Risque modéré" };
  return { color: "#28d17c", label: "Risque faible" };
}

function formatUpdated(u) {
  const m = /^(\d{4})-(\d{2})/.exec(u || "");
  return m ? `${MONTHS[Number(m[2]) - 1]} ${m[1]}` : null;
}

function formatPublished(p) {
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(p || "");
  if (!d) return null;
  const day = Number(d[3]);
  return `${day === 1 ? "1ᵉʳ" : day} ${MONTHS[Number(d[2]) - 1]} ${d[1]}`;
}

// Répartit les modules dans les 5 étapes du parcours (utilisé aussi par le menu latéral).
// Renvoie [{ key, title, hint, intro, tip?, items: [{ module, desc }] }].
export function groupByPhase(modules) {
  const byKey = {};
  const others = [];
  modules.forEach((m) => {
    const k = keyOf(m);
    if (k && !byKey[k]) byKey[k] = m;
    else others.push(m);
  });
  const phases = PHASES.map((p) => ({
    ...p,
    items: p.modules.map((k) => byKey[k] && { module: byKey[k], desc: DESCRIPTIONS[k] }).filter(Boolean),
  })).filter((p) => p.items.length);
  if (others.length) {
    phases.push({
      key: "autres",
      title: "Autres analyses",
      hint: "compléments",
      intro: "Les modules complémentaires de ce dossier.",
      items: others.map((m) => ({ module: m, desc: m.category })),
    });
  }
  return phases;
}

export default function DossierAccueil({ company, modules, reportHref, onOpen }) {
  const phases = groupByPhase(modules);

  const first = phases[0]?.items[0]?.module;
  const hasScore = typeof company.riskScore === "number";
  const zone = hasScore ? zoneOf(company.riskScore) : null;
  const updated = formatUpdated(company.updated);
  const published = formatPublished(company.published);
  const meta = [company.exchange && company.ticker ? `${company.exchange} : ${company.ticker}` : company.ticker, company.sector]
    .filter(Boolean)
    .join(" — ");

  return (
    <div className="da-root" lang="fr">
      <style>{CSS}</style>

      <div className="da-wrap">
        {/* ---------- En-tête : carte d'identité ---------- */}
        <section className="da-hero">
          <div className="da-hero-top">
            <div className="da-badge" aria-hidden="true">{company.initials}</div>
            <div>
              <h1 className="da-name">{company.name}</h1>
              {meta && <div className="da-meta">{meta}</div>}
            </div>
          </div>

          {company.tagline && <p className="da-tagline">{company.tagline}</p>}

          <p className="da-welcome">
            Bienvenue dans ce dossier. Il se lit comme une enquête, en cinq étapes : chacune
            s'appuie sur la précédente, et la dernière remet tout en question.
          </p>

          <div className="da-chips">
            {hasScore && (
              <span className="da-chip" style={{ color: zone.color, borderColor: `${zone.color}55` }}>
                <span className="da-dot" style={{ background: zone.color }} />
                {zone.label} · {company.riskScore}/100
              </span>
            )}
            <span className="da-chip">{modules.length} analyses · {phases.length} étapes</span>
            {published ? (
              <span className="da-chip">Publié le {published}</span>
            ) : (
              updated && <span className="da-chip">Données de {updated}</span>
            )}
          </div>

          {first && (
            <button type="button" className="da-cta" onClick={() => onOpen(first.id)}>
              Commencer par « {first.title} »
            </button>
          )}
        </section>

        {/* ---------- Parcours ---------- */}
        <ol className="da-path">
          {phases.map((p, pi) => (
            <li key={p.key} className="da-step">
              <div className="da-step-num" aria-hidden="true">{pi + 1}</div>
              <div className="da-step-body">
                <h2 className="da-step-title">
                  {p.title} <span className="da-step-hint">{p.hint}</span>
                </h2>
                <p className="da-step-intro">{p.intro}</p>

                <div className="da-grid">
                  {p.items.map(({ module: m, desc }) => (
                    <button key={m.id} type="button" className="da-tile" onClick={() => onOpen(m.id)}>
                      <span className="da-icon" aria-hidden="true">{m.icon}</span>
                      <span className="da-tile-text">
                        <span className="da-tile-title">{m.title}</span>
                        <span className="da-tile-desc">{desc}</span>
                      </span>
                    </button>
                  ))}
                </div>

                {p.tip && <p className="da-tip">💡 {p.tip}</p>}
              </div>
            </li>
          ))}

          {reportHref && (
            <li className="da-step">
              <div className="da-step-num da-step-num-gold" aria-hidden="true">★</div>
              <div className="da-step-body">
                <h2 className="da-step-title">
                  Conclure <span className="da-step-hint">la synthèse</span>
                </h2>
                <p className="da-step-intro">Tout le dossier résumé en une note sur 100 et deux pages.</p>
                <a className="da-report" href={reportHref} target="_blank" rel="noopener noreferrer">
                  <span className="da-icon da-icon-gold" aria-hidden="true">🎯</span>
                  <span className="da-tile-text">
                    <span className="da-tile-title">Ouvrir le rapport de risque ↗</span>
                    <span className="da-tile-desc">
                      {hasScore ? `${zone.label} — ${company.riskScore}/100. ` : ""}
                      Valorisation, santé financière, croissance, et quand renforcer ou vendre.
                    </span>
                  </span>
                </a>
              </div>
            </li>
          )}
        </ol>

        <Link to="/" className="da-more">
          <span className="da-more-text">
            <span className="da-more-title">Les autres enquêtes en cours</span>
            <span className="da-more-sub">Retrouvez toutes les sociétés suivies par le cabinet.</span>
          </span>
          <span className="da-more-arrow" aria-hidden="true">→</span>
        </Link>

        <p className="da-sign">221 Bourse — Élémentaire, mon cher Buffett.</p>
      </div>
    </div>
  );
}

const CSS = `
.da-root{min-height:100%;background:
  radial-gradient(ellipse at 20% -10%, rgba(242,180,80,.16), transparent 55%),
  radial-gradient(ellipse at 100% 100%, rgba(217,140,43,.08), transparent 50%),
  ${C.bg};color:${C.text};font-family:'IBM Plex Sans',system-ui,sans-serif}
.da-wrap{max-width:880px;margin:0 auto;padding:2.5rem 1.5rem 3.5rem}
.da-hero{background:linear-gradient(160deg,#211a11,${C.surface});border:1px solid ${C.border};border-radius:22px;padding:1.9rem 1.9rem 1.7rem}
.da-hero-top{display:flex;align-items:center;gap:1.1rem}
.da-badge{flex:none;min-width:64px;height:64px;padding:0 .7rem;border-radius:18px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(140deg,${C.amber},${C.amberDeep});color:#1b1206;font-weight:900;font-size:1.25rem;letter-spacing:.5px;
  box-shadow:0 8px 30px rgba(217,140,43,.25)}
.da-name{margin:0;font-family:Georgia,serif;font-size:2rem;font-weight:800;line-height:1.15;color:${C.text}}
.da-meta{margin-top:.3rem;font-size:.95rem;color:${C.muted}}
.da-tagline{margin:1.3rem 0 0;font-family:Georgia,serif;font-size:1.2rem;line-height:1.55;color:#f8eedc;max-width:64ch}
.da-welcome{margin:.9rem 0 0;font-size:1rem;line-height:1.7;color:${C.muted};max-width:64ch}
.da-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.2rem}
.da-chip{display:inline-flex;align-items:center;gap:.45rem;font-size:.85rem;font-weight:600;color:${C.muted};
  border:1px solid ${C.border};background:rgba(255,255,255,.02);padding:.35rem .8rem;border-radius:999px}
.da-dot{width:.55rem;height:.55rem;border-radius:50%}
.da-cta{margin-top:1.4rem;font:inherit;font-size:1rem;font-weight:700;color:#1b1206;cursor:pointer;
  background:linear-gradient(140deg,${C.amber},${C.amberDeep});border:none;border-radius:999px;padding:.75rem 1.4rem;
  box-shadow:0 6px 22px rgba(217,140,43,.28);transition:transform .15s ease, box-shadow .15s ease}
.da-cta:hover{transform:translateY(-1px);box-shadow:0 10px 28px rgba(217,140,43,.36)}
.da-path{list-style:none;margin:2.4rem 0 0;padding:0;position:relative}
.da-step:not(:last-child)::before{content:"";position:absolute;left:21px;top:44px;bottom:0;width:2px;
  background:linear-gradient(${C.amber}66, ${C.border})}
.da-step{position:relative;display:flex;gap:1.2rem;padding-bottom:2.2rem}
.da-step:last-child{padding-bottom:0}
.da-step-num{position:relative;z-index:1;flex:none;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;
  background:${C.surface};border:2px solid ${C.amber};color:${C.amber};font-family:Georgia,serif;font-weight:800;font-size:1.2rem}
.da-step-num-gold{background:${C.gold};border-color:${C.gold};color:#1b1206}
.da-step-body{flex:1;min-width:0;padding-top:.35rem}
.da-step-title{margin:0;font-family:Georgia,serif;font-size:1.45rem;font-weight:800;color:${C.text}}
.da-step-hint{font-family:'IBM Plex Sans',system-ui,sans-serif;font-size:.95rem;font-weight:500;font-style:italic;color:${C.faint};margin-left:.35rem}
.da-step-intro{margin:.35rem 0 .9rem;font-size:1rem;line-height:1.6;color:${C.muted}}
.da-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.7rem}
.da-tile,.da-report{display:flex;align-items:flex-start;gap:.8rem;text-align:left;font:inherit;cursor:pointer;text-decoration:none;
  background:${C.surface};border:1px solid ${C.border};border-radius:14px;padding:.95rem 1rem;color:${C.text};
  transition:background .15s ease,border-color .15s ease}
.da-tile:hover{background:${C.surfaceHover};border-color:${C.amber}88}
.da-report{background:rgba(255,210,63,.06);border-color:${C.gold}88;max-width:560px}
.da-report:hover{background:rgba(255,210,63,.12);border-color:${C.gold}}
.da-icon{flex:none;width:2.4rem;height:2.4rem;border-radius:12px;display:flex;align-items:center;justify-content:center;
  font-size:1.2rem;background:rgba(242,180,80,.12)}
.da-icon-gold{background:rgba(255,210,63,.16)}
.da-tile-text{display:flex;flex-direction:column;gap:.2rem;min-width:0}
.da-tile-title{font-size:1rem;font-weight:700;color:${C.text};line-height:1.3;overflow-wrap:break-word;hyphens:auto}
.da-tile-desc{font-size:.88rem;line-height:1.45;color:${C.muted}}
.da-report .da-tile-title{color:${C.gold}}
.da-tip{margin:.9rem 0 0;font-size:.92rem;line-height:1.55;color:#e9c98f;background:rgba(242,180,80,.07);
  border:1px dashed ${C.amber}55;border-radius:12px;padding:.7rem .9rem}
.da-more{display:flex;align-items:center;gap:1rem;margin-top:2.6rem;padding:1.1rem 1.3rem;border-radius:16px;text-decoration:none;
  background:#1b1610;border:1px solid #33291c;transition:border-color .15s ease,background .15s ease}
.da-more:hover{border-color:#f2b45088;background:#241d14}
.da-more:focus-visible{outline:2px solid #f2b450;outline-offset:3px}
.da-more-text{flex:1;display:flex;flex-direction:column;gap:.2rem}
.da-more-title{font-family:Georgia,serif;font-size:1.15rem;font-weight:800;color:#f3e9d8}
.da-more-sub{font-size:.9rem;color:#b9a98f}
.da-more-arrow{font-size:1.5rem;color:#f2b450}
.da-sign{margin:2.6rem 0 0;text-align:center;font-size:.85rem;font-style:italic;color:${C.faint}}
.da-cta:focus-visible,.da-tile:focus-visible,.da-report:focus-visible{outline:2px solid ${C.amber};outline-offset:3px}
@media (max-width:560px){
  .da-wrap{padding:1.5rem 1rem 2.5rem}
  .da-hero{padding:1.4rem 1.2rem}
  .da-name{font-size:1.6rem}
  .da-badge{min-width:54px;height:54px;font-size:1.05rem}
  .da-step:not(:last-child)::before{left:17px;top:36px}
  .da-step{gap:.9rem}
  .da-step-num{width:36px;height:36px;font-size:1rem}
  .da-step-title{font-size:1.25rem}
}
@media (prefers-reduced-motion:reduce){.da-cta,.da-tile,.da-report{transition:none}.da-cta:hover{transform:none}}
`;
