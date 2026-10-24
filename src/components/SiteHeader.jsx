// ============================================================
//  EN-TÊTE COMMUN À TOUTES LES PAGES — fil d'Ariane cliquable.
//  221 Bourse › Rubrique › Page : le logo ramène à l'accueil, la rubrique
//  ramène à sa section de l'accueil (Enquêtes, Formations, Portefeuilles).
//  Palette « sombre chaleureux » commune au site.
// ============================================================
import { Link } from "react-router-dom";

export const SECTIONS = {
  enquetes: { label: "Enquêtes", to: "/#dossiers" },
  formations: { label: "Formations", to: "/#formations" },
  portefeuilles: { label: "Portefeuilles", to: "/#portefeuilles" },
};

export default function SiteHeader({ section, title, subtitle, leading, children, tagline, sectionNav = false }) {
  const s = section ? SECTIONS[section] : null;
  const hasActions = Boolean(children);
  return (
    <header className={`sh${hasActions ? " sh-has-actions" : ""}`}>
      <style>{CSS}</style>
      {leading}
      <nav className="sh-crumbs" aria-label="Fil d'Ariane">
        <Link to="/" className="sh-brand" title="Accueil" aria-label="221 Bourse — accueil">
          <span className="sh-logo" aria-hidden="true">221</span>
          <span className="sh-word" aria-hidden="true">Bourse</span>
        </Link>
        {tagline && <span className="sh-tagline">{tagline}</span>}
        {s && (
          <>
            <span className="sh-sep" aria-hidden="true">›</span>
            <Link to={s.to} className="sh-crumb">{s.label}</Link>
          </>
        )}
        {title && (
          <>
            <span className="sh-sep sh-sep-current" aria-hidden="true">›</span>
            <span className="sh-current" aria-current="page">
              <span className="sh-title">{title}</span>
              {subtitle && <span className="sh-sub">{subtitle}</span>}
            </span>
          </>
        )}
      </nav>
      {sectionNav && (
        <nav className="sh-sections" aria-label="Rubriques">
          {Object.entries(SECTIONS).map(([k, v]) => (
            <Link key={k} to={v.to} className="sh-section">{v.label}</Link>
          ))}
        </nav>
      )}
      {hasActions && <div className="sh-actions">{children}</div>}
    </header>
  );
}

const CSS = `
.sh{position:sticky;top:0;z-index:100;height:52px;flex-shrink:0;display:flex;align-items:center;gap:.75rem;padding:0 1.25rem;
  background:linear-gradient(90deg,#17130e,#1f1912);border-bottom:1px solid #33291c;font-family:'IBM Plex Sans',system-ui,sans-serif}
.sh *{box-sizing:border-box}
.sh-crumbs{flex:1;min-width:0;display:flex;align-items:center;gap:.55rem}
.sh-brand{flex:none;display:inline-flex;align-items:center;gap:.45rem;text-decoration:none;border-radius:9px;padding:2px 6px 2px 2px;margin-left:-2px}
.sh-brand:hover{background:#2a2116}
.sh-brand:hover .sh-word{color:#f2b450}
.sh-logo{min-width:40px;height:30px;padding:0 .4rem;border-radius:7px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#d98c2b,#f2b450);color:#1b1206;font-weight:900;font-size:.75rem;letter-spacing:.5px}
.sh-word{font-weight:800;font-size:.95rem;color:#f3e9d8;letter-spacing:.2px}
.sh-tagline{min-width:0;font-size:.78rem;color:#8c7c65;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  padding-left:.7rem;border-left:1px solid #33291c}
.sh-sep{flex:none;color:#5c4f3d;font-size:1rem}
.sh-crumb{flex:none;font-size:.86rem;font-weight:600;color:#f2b450;text-decoration:none;padding:.3rem .55rem;border-radius:8px;margin:0 -.2rem}
.sh-crumb:hover{background:#2a2116;color:#ffd23f}
.sh-current{min-width:0;display:flex;flex-direction:column;line-height:1.2}
.sh-title{color:#f3e9d8;font-weight:700;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sh-sub{color:#8c7c65;font-size:.68rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sh-sections{flex:none;display:flex;gap:.25rem}
.sh-section{font-size:.86rem;font-weight:600;color:#b9a98f;text-decoration:none;padding:.4rem .7rem;border-radius:8px}
.sh-section:hover{background:#2a2116;color:#f2b450}
.sh-actions{flex:none;display:flex;gap:.5rem;align-items:center;margin-left:auto}
.sh-brand:focus-visible,.sh-crumb:focus-visible,.sh-section:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
@media (max-width:820px){
  .sh-tagline{display:none}
}
@media (max-width:560px){
  .sh{padding:0 .6rem;gap:.45rem}
  .sh-crumbs{gap:.35rem}
  .sh-word{display:none}
  .sh-sub{display:none}
  .sh-has-actions .sh-current,.sh-has-actions .sh-sep-current{display:none}
  .sh-sections{gap:0}
  .sh-section{padding:.4rem .45rem;font-size:.82rem}
}
@media (max-width:360px){
  .sh-section{font-size:.76rem;padding:.4rem .3rem}
}
`;
