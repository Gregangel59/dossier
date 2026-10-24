// ============================================================
//  PIED DE PAGE COMMUN — liens vers l'accueil et les rubriques,
//  pour repartir sans remonter en haut des pages longues.
// ============================================================
import { Link } from "react-router-dom";
import { SECTIONS } from "./SiteHeader.jsx";

export default function SiteFooter({ note }) {
  return (
    <footer className="sf">
      <style>{CSS}</style>
      <nav className="sf-nav" aria-label="Plan du site">
        <Link to="/" className="sf-home">
          <span className="sf-logo" aria-hidden="true">221</span> Accueil
        </Link>
        {Object.entries(SECTIONS).map(([k, v]) => (
          <Link key={k} to={v.to} className="sf-link">{v.label}</Link>
        ))}
      </nav>
      {note && <p className="sf-note">{note}</p>}
    </footer>
  );
}

const CSS = `
.sf{margin-top:3rem;padding:1.6rem 0 0;border-top:1px solid #33291c;text-align:center;font-family:'IBM Plex Sans',system-ui,sans-serif}
.sf-nav{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:.5rem}
.sf-home,.sf-link{display:inline-flex;align-items:center;gap:.45rem;font-size:.88rem;font-weight:600;text-decoration:none;
  border-radius:999px;padding:.45rem .95rem;border:1px solid #33291c;color:#b9a98f}
.sf-home{color:#f2b450;border-color:#4a3a24;background:#2a2116}
.sf-link:hover,.sf-home:hover{border-color:#f2b45099;color:#f2b450}
.sf-home:focus-visible,.sf-link:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
.sf-logo{min-width:30px;height:22px;padding:0 .3rem;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#d98c2b,#f2b450);color:#1b1206;font-weight:900;font-size:.62rem;letter-spacing:.4px}
.sf-note{margin:1.2rem auto 0;max-width:70ch;font-size:.85rem;font-style:italic;color:#8c7c65;line-height:1.5}
`;
