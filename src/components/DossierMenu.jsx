// ============================================================
//  MENU LATÉRAL D'UN DOSSIER — mutualisé pour TOUS les dossiers.
//  Même séquence que la page d'accueil du dossier (DossierAccueil.jsx) :
//  Comprendre → Qualifier → Mesurer → Évaluer → Challenger → Conclure.
//  Palette « sombre chaleureux » (oct. 2026).
// ============================================================

import { Link } from "react-router-dom";

export default function DossierMenu({ phases, active, onOpen, onHome, reportHref }) {
  const total = phases.reduce((n, p) => n + p.items.length, 0);
  const currentPhase = phases.findIndex((p) => p.items.some((i) => i.module.id === active));

  return (
    <nav className="dm-root" aria-label="Parcours du dossier">
      <style>{CSS}</style>

      <Link to="/" className="dm-portal">
        <span aria-hidden="true">←</span> Toutes les enquêtes
      </Link>

      <button type="button" className={`dm-home${active == null ? " is-on" : ""}`} onClick={onHome}>
        <span className="dm-home-icon" aria-hidden="true">⌂</span>
        <span>
          <span className="dm-home-title">Accueil du dossier</span>
          <span className="dm-home-sub">Le parcours en {phases.length} étapes · {total} analyses</span>
        </span>
      </button>

      <ol className="dm-phases">
        {phases.map((p, pi) => {
          const state = pi === currentPhase ? "is-current" : pi < currentPhase ? "is-done" : "";
          return (
            <li key={p.key} className={`dm-phase ${state}`}>
              <div className="dm-phase-head">
                <span className="dm-num" aria-hidden="true">{pi + 1}</span>
                <span className="dm-phase-title">{p.title}</span>
                <span className="dm-phase-hint">{p.hint}</span>
              </div>
              <ul className="dm-items">
                {p.items.map(({ module: m }) => (
                  <li key={m.id}>
                    <button
                      type="button"
                      className={`dm-item${active === m.id ? " is-on" : ""}`}
                      aria-current={active === m.id ? "page" : undefined}
                      onClick={() => onOpen(m.id)}
                    >
                      <span className="dm-icon" aria-hidden="true">{m.icon}</span>
                      <span className="dm-item-title">{m.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}

        {reportHref && (
          <li className="dm-phase dm-phase-final">
            <div className="dm-phase-head">
              <span className="dm-num dm-num-gold" aria-hidden="true">★</span>
              <span className="dm-phase-title">Conclure</span>
              <span className="dm-phase-hint">la synthèse</span>
            </div>
            <ul className="dm-items">
              <li>
                <a className="dm-report" href={reportHref} target="_blank" rel="noopener noreferrer">
                  <span className="dm-icon" aria-hidden="true">🎯</span>
                  <span className="dm-item-title">Rapport de risque ↗</span>
                </a>
              </li>
            </ul>
          </li>
        )}
      </ol>
    </nav>
  );
}

const CSS = `
.dm-root{padding:.8rem 0 1.4rem;font-family:'IBM Plex Sans',system-ui,sans-serif}
.dm-portal{display:flex;align-items:center;gap:.45rem;margin:0 .6rem .55rem;padding:.4rem .7rem;border-radius:10px;
  font-size:.8rem;font-weight:600;color:#b9a98f;text-decoration:none}
.dm-portal:hover{color:#f2b450;background:#1f1912}
.dm-portal:focus-visible{outline:2px solid #f2b450;outline-offset:1px}
.dm-home{display:flex;align-items:center;gap:.65rem;width:calc(100% - 1.2rem);margin:0 .6rem .9rem;padding:.6rem .7rem;
  font:inherit;text-align:left;cursor:pointer;background:#1f1912;border:1px solid #33291c;border-radius:12px;color:#f3e9d8}
.dm-home:hover{border-color:#f2b45088}
.dm-home.is-on{border-color:#f2b450;background:#2a2116}
.dm-home-icon{flex:none;width:1.9rem;height:1.9rem;border-radius:9px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(140deg,#f2b450,#d98c2b);color:#1b1206;font-size:1rem;font-weight:900}
.dm-home-title{display:block;font-size:.85rem;font-weight:700}
.dm-home-sub{display:block;font-size:.7rem;color:#8c7c65;margin-top:.1rem}

.dm-phases{list-style:none;margin:0;padding:0}
.dm-phase{position:relative;padding:0 .6rem 0 .9rem}
.dm-phase + .dm-phase{margin-top:.55rem}
.dm-phase-head{display:flex;align-items:center;gap:.5rem;padding:.3rem 0}
.dm-num{flex:none;width:1.45rem;height:1.45rem;border-radius:50%;display:flex;align-items:center;justify-content:center;
  font-family:Georgia,serif;font-size:.75rem;font-weight:800;color:#8c7c65;border:1.5px solid #4a3a24;background:#17130e}
.dm-phase-title{font-family:Georgia,serif;font-size:.92rem;font-weight:800;color:#d9ccb6}
.dm-phase-hint{font-size:.68rem;font-style:italic;color:#7a6b56;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dm-phase.is-done .dm-num{color:#f2b450;border-color:#f2b45099}
.dm-phase.is-current .dm-num{background:linear-gradient(140deg,#f2b450,#d98c2b);border-color:transparent;color:#1b1206}
.dm-phase.is-current .dm-phase-title{color:#f8eedc}
.dm-num-gold{background:#ffd23f;border-color:#ffd23f;color:#1b1206}

.dm-items{list-style:none;margin:.1rem 0 0 .7rem;padding:0 0 0 .55rem;border-left:2px solid #33291c}
.dm-phase.is-current .dm-items{border-left-color:#f2b45066}
.dm-phase-final .dm-items{border-left-color:transparent}
.dm-item,.dm-report{display:flex;align-items:center;gap:.5rem;width:100%;padding:.4rem .55rem;margin:.08rem 0;
  font:inherit;text-align:left;cursor:pointer;text-decoration:none;background:transparent;border:none;border-radius:8px}
.dm-item:hover{background:#1f1912}
.dm-item.is-on{background:linear-gradient(90deg,#2a2116,#33281a);box-shadow:inset 3px 0 0 #f2b450}
.dm-icon{flex:none;font-size:.9rem}
.dm-item-title{font-size:.8rem;color:#b9a98f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dm-item:hover .dm-item-title{color:#efe3cf}
.dm-item.is-on .dm-item-title{color:#f8eedc;font-weight:600}
.dm-report{border:1px solid #ffd23f88;background:rgba(255,210,63,.06)}
.dm-report:hover{background:rgba(255,210,63,.13)}
.dm-report .dm-item-title{color:#ffd23f;font-weight:600}
.dm-home:focus-visible,.dm-item:focus-visible,.dm-report:focus-visible{outline:2px solid #f2b450;outline-offset:1px}
`;
