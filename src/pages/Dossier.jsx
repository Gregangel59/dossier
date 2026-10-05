// Palette « sombre chaleureux » (oct. 2026), commune à l'en-tête, au menu latéral,
// aux pages de modules et à DossierAccueil.jsx : fond #120f0b, surfaces #17130e / #1f1912,
// bordures #33291c, texte #f3e9d8 / #b9a98f, accent ambre #f2b450, or #ffd23f.
import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COMPANY_BY_SLUG } from "../data/index.js";
import MarkdownRenderer, { CATEGORY_COLORS } from "../components/MarkdownRenderer.jsx";
import DossierAccueil, { groupByPhase } from "../components/DossierAccueil.jsx";
import DossierMenu from "../components/DossierMenu.jsx";

export default function Dossier() {
  const { slug } = useParams();
  const company = COMPANY_BY_SLUG[slug];

  const [active, setActive] = useState(null);
  // Barre latérale fermée par défaut sur téléphone, ouverte sur ordinateur
  const [sidebarOpen, setSidebarOpen] = useState(
    () => typeof window === "undefined" || window.innerWidth > 768
  );

  // À chaque changement de module (ou retour à l'accueil), revenir en haut de la page
  const mainRef = useRef(null);
  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [active]);

  if (!company) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#120f0b",
          color: "#d9ccb6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2rem" }}>🔍</div>
        <h1 style={{ color: "#f8eedc", fontSize: "1.2rem" }}>Dossier introuvable</h1>
        <p style={{ color: "#8c7c65", fontSize: "0.85rem" }}>
          Aucune société ne correspond à « {slug} ».
        </p>
        <Link
          to="/"
          style={{
            color: "#f2b450",
            textDecoration: "none",
            fontSize: "0.85rem",
            border: "1px solid #4a3a24",
            borderRadius: "6px",
            padding: "0.5rem 1rem",
          }}
        >
          ← Retour au portail
        </Link>
      </div>
    );
  }

  const modules = company.modules;
  const current = modules.find((a) => a.id === active);
  // Séquence de lecture = parcours en étapes (comme l'accueil du dossier)
  const phases = groupByPhase(modules);
  const sequence = phases.flatMap((p) => p.items.map((i) => i.module));
  const pos = current ? sequence.findIndex((m) => m.id === current.id) : -1;
  const phaseIdx = current ? phases.findIndex((p) => p.items.some((i) => i.module.id === current.id)) : -1;
  const phaseOfId = (id) => phases.findIndex((p) => p.items.some((i) => i.module.id === id));
  const prev = pos > 0 ? sequence[pos - 1] : null;
  const next = pos >= 0 && pos < sequence.length - 1 ? sequence[pos + 1] : null;
  const nextPhase = next && phaseOfId(next.id) !== phaseIdx ? phases[phaseOfId(next.id)] : null;

  // Ouvre un module ; sur téléphone, referme la barre latérale pour libérer l'écran
  const openModule = (id) => {
    setActive(id);
    if (typeof window !== "undefined" && window.innerWidth <= 768) setSidebarOpen(false);
  };

  // base d'URL pour les rapports statiques (gère le déploiement sous sous-chemin)
  const reportHref = company.riskReport
    ? `${import.meta.env.BASE_URL}rapports/${company.riskReport}`
    : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#120f0b",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{HEADER_CSS}</style>
      <header
        className="dh-header"
        style={{
          background: "linear-gradient(90deg,#17130e,#1f1912)",
          borderBottom: "1px solid #33291c",
          padding: "0 1.25rem",
          height: "52px",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          position: "sticky",
          top: 0,
          zIndex: 100,
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? "Masquer la liste des analyses" : "Afficher la liste des analyses"}
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            color: "#8c7c65",
            cursor: "pointer",
            fontSize: "1.1rem",
            padding: "4px",
          }}
        >
          ☰
        </button>
        <Link to="/" className="dh-back" title="Revenir à la liste des enquêtes" aria-label="Revenir à la liste des enquêtes">
          <span aria-hidden="true">←</span>
          <span className="dh-long">Les enquêtes</span>
          <span className="dh-short">Enquêtes</span>
        </Link>
        <div
          style={{
            minWidth: 40,
            height: 30,
            padding: "0 0.4rem",
            borderRadius: "6px",
            background: "linear-gradient(135deg,#d98c2b,#f2b450)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.7rem",
            fontWeight: 900,
            color: "#1b1206",
            flexShrink: 0,
            letterSpacing: "0.5px",
          }}
        >
          {company.initials}
        </div>
        <div className="dh-title">
          <div className="dh-name" style={{ color: "#f3e9d8", fontWeight: 700, fontSize: "0.9rem" }}>
            {company.name}
          </div>
          <div
            className="dh-sub"
            style={{
              color: "#7a6b56",
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Le cabinet d'analyse fondamentale — {modules.length} modules
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem", alignItems: "center", flexShrink: 0 }}>
          {reportHref && (
            <a
              href={reportHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "rgba(255,210,63,.1)",
                color: "#ffd23f",
                fontSize: "0.65rem",
                padding: "3px 9px",
                borderRadius: "10px",
                border: "1px solid rgba(255,210,63,.3)",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <span className="dh-long">Rapport de risque ↗</span>
              <span className="dh-short">Risque ↗</span>
            </a>
          )}
          <span
            className="dh-count"
            style={{
              background: "#2a2116",
              color: "#f2b450",
              fontSize: "0.65rem",
              padding: "2px 8px",
              borderRadius: "10px",
              border: "1px solid #4a3a24",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {pos >= 0 ? `Analyse ${pos + 1}/${sequence.length}` : `${modules.length} analyses`}
          </span>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        <aside
          style={{
            width: sidebarOpen ? 272 : 0,
            flexShrink: 0,
            // Le menu reste visible pendant la lecture d'un long module
            position: "sticky",
            top: 52,
            height: "calc(100vh - 52px)",
            background: "#17130e",
            borderRight: "1px solid #33291c",
            overflowY: "auto",
            overflowX: "hidden",
            transition: "width 0.2s ease",
          }}
        >
          <div style={{ width: 272 }}>
            <DossierMenu
              phases={phases}
              active={active}
              onOpen={openModule}
              onHome={() => openModule(null)}
              reportHref={reportHref}
            />
          </div>
        </aside>

        <main ref={mainRef} style={{ flex: 1, minWidth: 0, minHeight: "calc(100vh - 52px)", background: "#120f0b" }}>
          {!current ? (
            <DossierAccueil
              company={company}
              modules={modules}
              reportHref={reportHref}
              onOpen={openModule}
            />
          ) : (
            <div style={{ padding: "1.75rem", maxWidth: 840, margin: "0 auto" }}>
              <div style={{ marginBottom: "1.25rem", borderBottom: "1px solid #33291c", paddingBottom: "0.9rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>{current.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.2rem" }}>
                      <span style={{ color: "#6f6250", fontSize: "0.7rem", fontWeight: 700 }}>
                        {phaseIdx >= 0 ? `Étape ${phaseIdx + 1} · ${phases[phaseIdx].title}` : "Analyse"}
                        {pos >= 0 && ` — ${pos + 1}/${sequence.length}`}
                      </span>
                      <span
                        style={{
                          background: `${CATEGORY_COLORS[current.category]}15`,
                          color: CATEGORY_COLORS[current.category] || "#f2b450",
                          fontSize: "0.62rem",
                          padding: "1px 7px",
                          borderRadius: "10px",
                          border: `1px solid ${CATEGORY_COLORS[current.category]}30`,
                          fontWeight: 600,
                        }}
                      >
                        {current.category}
                      </span>
                    </div>
                    <h2
                      style={{
                        color: "#f8eedc",
                        fontSize: "1.55rem",
                        fontWeight: 800,
                        margin: 0,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {current.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div style={{ background: "#17130e", borderRadius: "10px", border: "1px solid #33291c", padding: "1.5rem" }}>
                <MarkdownRenderer text={current.content} />
              </div>

              <nav className="dn-nav" aria-label="Analyse précédente et suivante">
                {prev ? (
                  <button type="button" className="dn-btn dn-prev" onClick={() => openModule(prev.id)}>
                    <span className="dn-label">Précédent</span>
                    <span className="dn-title">← {prev.title}</span>
                  </button>
                ) : (
                  <button type="button" className="dn-btn dn-prev" onClick={() => openModule(null)}>
                    <span className="dn-label">Retour</span>
                    <span className="dn-title">← Accueil du dossier</span>
                  </button>
                )}
                {next ? (
                  <button type="button" className="dn-btn dn-next" onClick={() => openModule(next.id)}>
                    <span className="dn-label">
                      {nextPhase ? `Étape suivante · ${nextPhase.title}` : "Suivant"}
                    </span>
                    <span className="dn-title">{next.title} →</span>
                  </button>
                ) : (
                  reportHref && (
                    <a className="dn-btn dn-next dn-final" href={reportHref} target="_blank" rel="noopener noreferrer">
                      <span className="dn-label">Conclure · la synthèse</span>
                      <span className="dn-title">Rapport de risque ↗</span>
                    </a>
                  )
                )}
              </nav>
            </div>
          )}
        </main>
      </div>
      <style>{`* { box-sizing:border-box; } ::-webkit-scrollbar { width:4px; } ::-webkit-scrollbar-thumb { background:#33291c; border-radius:2px; }`}</style>
    </div>
  );
}

// En-tête : sur téléphone, le nom se tronque proprement, le sous-titre disparaît
// et le lien du rapport se raccourcit.
const HEADER_CSS = `
.dn-nav{display:flex;gap:.8rem;margin-top:1.4rem;justify-content:space-between;flex-wrap:wrap}
.dn-btn{display:flex;flex-direction:column;gap:.15rem;max-width:48%;min-width:0;padding:.65rem 1rem;border-radius:12px;
  font:inherit;cursor:pointer;text-decoration:none;text-align:left;background:#1f1912;border:1px solid #33291c}
.dn-btn:hover{border-color:#f2b45088}
.dn-next{margin-left:auto;text-align:right;align-items:flex-end;background:linear-gradient(90deg,#2a2116,#33281a);border-color:#4a3a24}
.dn-label{font-size:.72rem;color:#8c7c65}
.dn-title{font-size:.9rem;font-weight:600;color:#d9ccb6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.dn-next .dn-title{color:#f2b450}
.dn-final{border-color:#ffd23f88;background:rgba(255,210,63,.07)}
.dn-final .dn-title{color:#ffd23f}
.dn-btn:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
@media (max-width:560px){.dn-btn{max-width:100%;width:100%}.dn-next{align-items:flex-end}}
.dh-title{min-width:0;flex:1}
.dh-back{flex:none;display:inline-flex;align-items:center;gap:.4rem;padding:.32rem .8rem;border-radius:999px;
  font-size:.78rem;font-weight:600;color:#f2b450;text-decoration:none;border:1px solid #4a3a24;background:#2a2116}
.dh-back:hover{border-color:#f2b450;background:#33281a}
.dh-back:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
.dh-name,.dh-sub{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dh-short{display:none}
@media (max-width:560px){
  .dh-header{padding:0 0.6rem !important;gap:0.45rem !important}
  .dh-sub{display:none}
  .dh-long{display:none}
  .dh-short{display:inline}
  .dh-count{display:none}
}
@media (max-width:420px){
  /* Très petit écran : le bouton de retour garde sa pastille ambrée mais ne montre que la flèche */
  .dh-back .dh-short{display:none}
  .dh-back{padding:.32rem .7rem;font-size:.95rem}
}
`;
