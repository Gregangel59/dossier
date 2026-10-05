import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { COMPANIES } from "../data/index.js";

// ============================================================
//  PAGE D'ACCUEIL DU PORTAIL — palette « sombre chaleureux » (oct. 2026),
//  commune à Dossier.jsx et DossierAccueil.jsx.
//  « À la une » : les 3 dossiers publiés le plus récemment, en bannières
//  dans le style de l'en-tête des dossiers ; puis tous les dossiers.
//  Tri par date : champ meta `published` (AAAA-MM-JJ) s'il existe,
//  sinon `updated` (AAAA-MM), sinon ordre de la liste COMPANIES.
// ============================================================

const FEATURED = 3;          // nombre de dossiers « À la une »
const NEW_DAYS = 21;         // badge « Nouveau » pendant 3 semaines

const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août",
  "septembre", "octobre", "novembre", "décembre"];

// Zones de risque — mêmes bornes que les rapports (30 / 50 / 70)
function zoneOf(score) {
  if (score == null) return null;
  if (score < 30) return { color: "#ff4d5e", label: "Risque très élevé" };
  if (score < 50) return { color: "#ff9f43", label: "Risque élevé" };
  if (score < 70) return { color: "#ffd23f", label: "Risque modéré" };
  return { color: "#28d17c", label: "Risque faible" };
}

function sortKey(c) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(c.published || "")) return c.published;
  if (/^\d{4}-\d{2}/.test(c.updated || "")) return `${c.updated.slice(0, 7)}-00`;
  return "0000-00-00";
}

function formatDate(c) {
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(c.published || "");
  if (d) {
    const day = Number(d[3]);
    return `${day === 1 ? "1ᵉʳ" : day} ${MONTHS[Number(d[2]) - 1]} ${d[1]}`;
  }
  const m = /^(\d{4})-(\d{2})/.exec(c.updated || "");
  return m ? `${MONTHS[Number(m[2]) - 1]} ${m[1]}` : null;
}

function isNew(c) {
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(c.published || "");
  if (!d) return false;
  const age = (Date.now() - new Date(`${c.published}T00:00:00`).getTime()) / 86400000;
  return age >= 0 && age <= NEW_DAYS;
}

function metaLine(c) {
  return [c.exchange && c.ticker ? `${c.exchange} : ${c.ticker}` : c.ticker, c.sector].filter(Boolean).join(" — ");
}

function norm(s) {
  return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Mini-barre de risque, écho de la barre du rapport
function RiskGauge({ score, compact = false }) {
  const z = zoneOf(score);
  if (!z) return null;
  return (
    <div className={`hp-gauge${compact ? " hp-gauge-compact" : ""}`}>
      <div className="hp-gauge-head">
        <span className="hp-gauge-num" style={{ color: z.color }}>{score}</span>
        <span className="hp-gauge-of">/100</span>
      </div>
      <div className="hp-gauge-bar" aria-hidden="true">
        <span style={{ flex: 30, background: "#ff4d5e" }} />
        <span style={{ flex: 20, background: "#ff9f43" }} />
        <span style={{ flex: 20, background: "#ffd23f" }} />
        <span style={{ flex: 30, background: "#28d17c" }} />
        <i style={{ left: `${score}%` }} />
      </div>
      <div className="hp-gauge-label" style={{ color: z.color }}>{z.label}</div>
    </div>
  );
}

function reportUrl(c) {
  return c.riskReport ? `${import.meta.env.BASE_URL}rapports/${c.riskReport}` : null;
}

// Grande bannière « À la une »
function Feature({ c, lead }) {
  const date = formatDate(c);
  const report = reportUrl(c);
  return (
    <article className={`hp-feature${lead ? " hp-feature-lead" : ""}`}>
      <div className="hp-feature-main">
        <div className="hp-feature-top">
          <div className="hp-badge" aria-hidden="true">{c.initials}</div>
          <div className="hp-id">
            <h3 className="hp-name">
              <Link to={`/dossier/${c.slug}`} className="hp-stretch">{c.name}</Link>
            </h3>
            <div className="hp-meta">{metaLine(c)}</div>
          </div>
        </div>
        {c.tagline && <p className="hp-tagline">{c.tagline}</p>}
        {!lead && <RiskGauge score={c.riskScore} compact />}
        <div className="hp-chips">
          {isNew(c) && <span className="hp-chip hp-chip-new">Nouveau</span>}
          {date && <span className="hp-chip">Publié {/^\d{4}-\d{2}-\d{2}$/.test(c.published || "") ? "le " : "en "}{date}</span>}
          <span className="hp-chip">{c.modules.length} analyses</span>
        </div>
        <div className="hp-actions">
          <span className="hp-cta" aria-hidden="true">Lire le dossier</span>
          {report && (
            <a className="hp-report" href={report} target="_blank" rel="noopener noreferrer">
              Rapport de risque ↗
            </a>
          )}
        </div>
      </div>
      {lead && <RiskGauge score={c.riskScore} />}
    </article>
  );
}

// Bannière compacte de la liste complète
function Row({ c }) {
  const date = formatDate(c);
  const z = zoneOf(c.riskScore);
  return (
    <li className="hp-row">
      <div className="hp-badge hp-badge-sm" aria-hidden="true">{c.initials}</div>
      <div className="hp-row-id">
        <div className="hp-row-name">
          <Link to={`/dossier/${c.slug}`} className="hp-stretch">{c.name}</Link>
          {isNew(c) && <span className="hp-chip hp-chip-new hp-chip-xs">Nouveau</span>}
        </div>
        <div className="hp-meta">{metaLine(c)}</div>
        {c.tagline && <p className="hp-row-tagline">{c.tagline}</p>}
      </div>
      <div className="hp-row-side">
        {z && (
          <span className="hp-score-pill" style={{ color: z.color, borderColor: `${z.color}55` }}>
            <b>{c.riskScore}</b>/100 · {z.label.replace("Risque ", "")}
          </span>
        )}
        {date && <span className="hp-row-date">{date}</span>}
      </div>
      <span className="hp-chevron" aria-hidden="true">›</span>
    </li>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("recent");

  const byDate = useMemo(
    () => COMPANIES.map((c, i) => ({ c, i }))
      .sort((a, b) => sortKey(b.c).localeCompare(sortKey(a.c)) || a.i - b.i)
      .map((x) => x.c),
    []
  );
  const featured = byDate.slice(0, Math.min(FEATURED, byDate.length));
  const latest = featured[0];

  const list = useMemo(() => {
    const q = norm(query.trim());
    let l = byDate.filter((c) => !q || norm(`${c.name} ${c.ticker} ${c.sector}`).includes(q));
    if (order === "score") l = [...l].sort((a, b) => (b.riskScore ?? -1) - (a.riskScore ?? -1));
    if (order === "name") l = [...l].sort((a, b) => a.name.localeCompare(b.name, "fr"));
    return l;
  }, [byDate, query, order]);

  const n = COMPANIES.length;

  return (
    <div className="hp-root" lang="fr">
      <style>{CSS}</style>

      <header className="hp-header">
        <div className="hp-logo" aria-hidden="true">221</div>
        <div className="hp-header-title">
          <div className="hp-header-name">Le cabinet d'analyse fondamentale</div>
          <div className="hp-header-sub">221 Bourse — {n} {n > 1 ? "sociétés couvertes" : "société couverte"}</div>
        </div>
      </header>

      <main className="hp-main">
        <section className="hp-intro">
          <h1 className="hp-title">Les enquêtes en cours</h1>
          <p className="hp-lead">
            Chaque dossier se lit comme une enquête en cinq étapes : quatorze analyses fondamentales,
            de la compréhension du métier à la critique la plus sévère, puis un rapport de risque en deux pages.
          </p>
          <div className="hp-chips">
            <span className="hp-chip">{n} {n > 1 ? "dossiers" : "dossier"}</span>
            {latest && formatDate(latest) && (
              <span className="hp-chip">Dernière publication : {latest.name}, {formatDate(latest)}</span>
            )}
          </div>
        </section>

        {featured.length > 0 && (
          <section className="hp-section" aria-labelledby="hp-une">
            <h2 id="hp-une" className="hp-h2">À la une <span className="hp-h2-hint">les dernières publications</span></h2>
            <div className="hp-features">
              {featured.map((c, i) => <Feature key={c.slug} c={c} lead={i === 0} />)}
            </div>
          </section>
        )}

        <section className="hp-section" aria-labelledby="hp-tous">
          <div className="hp-list-head">
            <h2 id="hp-tous" className="hp-h2">Tous les dossiers</h2>
            <div className="hp-tools">
              <input
                className="hp-search"
                type="search"
                placeholder="Rechercher une société, un ticker, un secteur"
                aria-label="Rechercher un dossier"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="hp-sort" role="group" aria-label="Trier les dossiers">
                {[["recent", "Plus récents"], ["score", "Moins risqués"], ["name", "A → Z"]].map(([k, l]) => (
                  <button key={k} type="button" aria-pressed={order === k}
                    className={`hp-sort-btn${order === k ? " is-on" : ""}`} onClick={() => setOrder(k)}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {list.length ? (
            <ul className="hp-rows">{list.map((c) => <Row key={c.slug} c={c} />)}</ul>
          ) : (
            <p className="hp-empty">Aucun dossier ne correspond à « {query} ». Essayez le ticker ou le secteur.</p>
          )}
        </section>

        <p className="hp-sign">221 Bourse — Élémentaire, mon cher Buffett. Ceci n'est pas un conseil en investissement.</p>
      </main>
    </div>
  );
}

const CSS = `
.hp-root *,.hp-root *::before,.hp-root *::after{box-sizing:border-box}
.hp-root{min-height:100vh;color:#f3e9d8;font-family:'IBM Plex Sans',system-ui,sans-serif;
  background:radial-gradient(ellipse at 15% -5%, rgba(242,180,80,.14), transparent 50%),
             radial-gradient(ellipse at 100% 60%, rgba(217,140,43,.07), transparent 50%), #120f0b}
.hp-header{position:sticky;top:0;z-index:50;height:52px;display:flex;align-items:center;gap:.75rem;padding:0 1.25rem;
  background:linear-gradient(90deg,#17130e,#1f1912);border-bottom:1px solid #33291c}
.hp-logo{flex:none;min-width:40px;height:30px;padding:0 .4rem;border-radius:7px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#d98c2b,#f2b450);color:#1b1206;font-weight:900;font-size:.75rem;letter-spacing:.5px}
.hp-header-title{min-width:0}
.hp-header-name{color:#f3e9d8;font-weight:700;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hp-header-sub{color:#8c7c65;font-size:.68rem;white-space:nowrap}
.hp-main{max-width:1040px;margin:0 auto;padding:2.5rem 1.5rem 4rem}
.hp-title{margin:0;font-family:Georgia,serif;font-size:2.2rem;font-weight:800;color:#f8eedc}
.hp-lead{margin:.7rem 0 0;max-width:62ch;font-size:1.05rem;line-height:1.7;color:#b9a98f}
.hp-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.1rem}
.hp-chip{display:inline-flex;align-items:center;font-size:.82rem;font-weight:600;color:#b9a98f;border:1px solid #33291c;
  background:rgba(255,255,255,.02);padding:.3rem .75rem;border-radius:999px}
.hp-chip-new{color:#1b1206;background:linear-gradient(135deg,#f2b450,#d98c2b);border-color:transparent}
.hp-chip-xs{font-size:.68rem;padding:.12rem .5rem;margin-left:.5rem;vertical-align:middle}
.hp-section{margin-top:3rem}
.hp-h2{margin:0 0 1.1rem;font-family:Georgia,serif;font-size:1.55rem;font-weight:800;color:#f3e9d8}
.hp-h2-hint{font-family:'IBM Plex Sans',system-ui,sans-serif;font-size:.95rem;font-weight:500;font-style:italic;color:#8c7c65;margin-left:.4rem}

/* À la une */
.hp-features{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.hp-feature{position:relative;display:flex;gap:1.5rem;align-items:flex-start;justify-content:space-between;
  background:linear-gradient(160deg,#211a11,#1b1610);border:1px solid #33291c;border-radius:22px;padding:1.6rem;
  transition:border-color .15s ease, transform .15s ease, box-shadow .15s ease}
.hp-feature-lead{grid-column:1/-1;padding:2rem;background:linear-gradient(150deg,#2a2015,#1b1610 60%)}
.hp-feature:hover{border-color:#f2b45099;transform:translateY(-2px);box-shadow:0 14px 40px rgba(0,0,0,.35)}
.hp-feature-main{flex:1;min-width:0}
.hp-feature-top{display:flex;align-items:center;gap:1rem}
.hp-badge{flex:none;min-width:58px;height:58px;padding:0 .6rem;border-radius:16px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(140deg,#f2b450,#d98c2b);color:#1b1206;font-weight:900;font-size:1.1rem;letter-spacing:.5px;
  box-shadow:0 8px 26px rgba(217,140,43,.22)}
.hp-feature-lead .hp-badge{min-width:68px;height:68px;font-size:1.3rem;border-radius:18px}
.hp-badge-sm{min-width:46px;height:46px;font-size:.9rem;border-radius:13px;box-shadow:none}
.hp-id{min-width:0}
.hp-name{margin:0;font-family:Georgia,serif;font-size:1.45rem;font-weight:800;line-height:1.2}
.hp-feature-lead .hp-name{font-size:2rem}
.hp-name a{color:#f8eedc;text-decoration:none}
.hp-meta{margin-top:.25rem;font-size:.88rem;color:#b9a98f}
.hp-tagline{margin:1rem 0 0;font-family:Georgia,serif;font-size:1.05rem;line-height:1.55;color:#efe3cf;max-width:62ch}
.hp-feature-lead .hp-tagline{font-size:1.2rem}
.hp-actions{display:flex;flex-wrap:wrap;align-items:center;gap:.8rem;margin-top:1.2rem}
.hp-cta{font-size:.95rem;font-weight:700;color:#1b1206;background:linear-gradient(140deg,#f2b450,#d98c2b);
  border-radius:999px;padding:.6rem 1.2rem;box-shadow:0 6px 20px rgba(217,140,43,.25)}
.hp-report{position:relative;z-index:2;font-size:.88rem;font-weight:600;color:#ffd23f;text-decoration:none;
  border:1px solid rgba(255,210,63,.35);background:rgba(255,210,63,.07);border-radius:999px;padding:.5rem 1rem}
.hp-report:hover{background:rgba(255,210,63,.15)}

/* Lien étiré : toute la carte est cliquable, le lien du rapport reste au-dessus */
.hp-stretch::after{content:"";position:absolute;inset:0;border-radius:inherit;z-index:1}
.hp-stretch:focus-visible{outline:none}
.hp-feature:focus-within,.hp-row:focus-within{outline:2px solid #f2b450;outline-offset:3px}

/* Jauge de risque */
.hp-gauge{flex:none;width:170px;text-align:right}
.hp-gauge-head{display:flex;align-items:baseline;justify-content:flex-end;gap:.2rem}
.hp-gauge-num{font-family:Georgia,serif;font-size:3rem;font-weight:900;line-height:1}
.hp-feature-lead .hp-gauge-num{font-size:3.6rem}
.hp-gauge-of{font-size:.9rem;color:#8c7c65}
.hp-gauge-bar{position:relative;display:flex;height:8px;border-radius:6px;overflow:visible;margin-top:.7rem}
.hp-gauge-bar span:first-child{border-radius:6px 0 0 6px}.hp-gauge-bar span:nth-child(4){border-radius:0 6px 6px 0}
.hp-gauge-bar i{position:absolute;top:-4px;width:4px;height:16px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 2px #1b1610}
.hp-gauge-label{margin-top:.55rem;font-size:.85rem;font-weight:700}
.hp-gauge-compact{width:auto;display:flex;align-items:center;gap:.9rem;text-align:left;margin-top:1rem}
.hp-gauge-compact .hp-gauge-num{font-size:2.1rem}
.hp-gauge-compact .hp-gauge-bar{flex:none;width:130px;margin-top:0}
.hp-gauge-compact .hp-gauge-label{margin-top:0}

/* Liste complète */
.hp-list-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:1.1rem}
.hp-list-head .hp-h2{margin:0}
.hp-tools{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}
.hp-search{font:inherit;font-size:.92rem;color:#f3e9d8;background:#1b1610;border:1px solid #33291c;border-radius:999px;
  padding:.55rem 1rem;width:300px;max-width:100%}
.hp-search::placeholder{color:#8c7c65}
.hp-search:focus{outline:2px solid #f2b450;outline-offset:1px}
.hp-sort{display:flex;background:#1b1610;border:1px solid #33291c;border-radius:999px;padding:3px}
.hp-sort-btn{font:inherit;font-size:.85rem;font-weight:600;color:#b9a98f;background:none;border:none;border-radius:999px;padding:.4rem .85rem;cursor:pointer}
.hp-sort-btn.is-on{background:#2a2116;color:#f2b450}
.hp-sort-btn:focus-visible{outline:2px solid #f2b450}
.hp-rows{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.6rem}
.hp-row{position:relative;display:flex;align-items:center;gap:1rem;background:#1b1610;border:1px solid #33291c;border-radius:16px;
  padding:.95rem 1.1rem;transition:background .15s ease,border-color .15s ease}
.hp-row:hover{background:#241d14;border-color:#f2b45088}
.hp-row-id{flex:1;min-width:0}
.hp-row-name{font-family:Georgia,serif;font-size:1.15rem;font-weight:800}
.hp-row-name a{color:#f8eedc;text-decoration:none}
.hp-row-tagline{margin:.35rem 0 0;font-size:.9rem;line-height:1.45;color:#b9a98f;
  display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
.hp-row-side{flex:none;display:flex;flex-direction:column;align-items:flex-end;gap:.35rem}
.hp-score-pill{font-size:.82rem;font-weight:600;border:1px solid;border-radius:999px;padding:.25rem .7rem;white-space:nowrap}
.hp-score-pill b{font-size:.95rem}
.hp-row-date{font-size:.8rem;color:#8c7c65;white-space:nowrap}
.hp-chevron{flex:none;font-size:1.6rem;color:#8c7c65;line-height:1}
.hp-row:hover .hp-chevron{color:#f2b450}
.hp-empty{color:#b9a98f;font-size:1rem;padding:1.5rem;border:1px dashed #33291c;border-radius:16px;text-align:center}
.hp-sign{margin:3rem 0 0;text-align:center;font-size:.85rem;font-style:italic;color:#8c7c65}

@media (max-width:820px){
  .hp-features{grid-template-columns:1fr}
}
@media (max-width:640px){
  .hp-main{padding:1.6rem 1rem 3rem}
  .hp-title{font-size:1.7rem}
  .hp-feature,.hp-feature-lead{flex-direction:column;padding:1.3rem;gap:1rem}
  .hp-feature-lead .hp-name{font-size:1.55rem}
  .hp-feature-lead .hp-tagline{font-size:1.05rem}
  .hp-gauge{width:100%;text-align:left}
  .hp-gauge-head{justify-content:flex-start}
  .hp-feature-lead .hp-gauge-num,.hp-gauge-num{font-size:2.4rem}
  .hp-search{width:100%}
  .hp-tools{width:100%}
  .hp-row{flex-wrap:wrap;gap:.7rem .9rem}
  .hp-row-id{flex:1 1 calc(100% - 70px)}
  .hp-row-side{flex-direction:row;align-items:center;width:100%;justify-content:space-between;padding-left:calc(46px + .9rem)}
  .hp-chevron{display:none}
}
@media (prefers-reduced-motion:reduce){.hp-feature,.hp-row{transition:none}.hp-feature:hover{transform:none}}
`;
