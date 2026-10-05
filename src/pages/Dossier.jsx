// Palette « sombre chaleureux » (oct. 2026), commune à l'en-tête, au menu latéral,
// aux pages de modules et à DossierAccueil.jsx : fond #120f0b, surfaces #17130e / #1f1912,
// bordures #33291c, texte #f3e9d8 / #b9a98f, accent ambre #f2b450, or #ffd23f.
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COMPANY_BY_SLUG } from "../data/index.js";
import MarkdownRenderer, { CATEGORY_COLORS } from "../components/MarkdownRenderer.jsx";
import DossierAccueil from "../components/DossierAccueil.jsx";

export default function Dossier() {
  const { slug } = useParams();
  const company = COMPANY_BY_SLUG[slug];

  const [active, setActive] = useState(null);
  // Barre latérale fermée par défaut sur téléphone, ouverte sur ordinateur
  const [sidebarOpen, setSidebarOpen] = useState(
    () => typeof window === "undefined" || window.innerWidth > 768
  );

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
  const categories = [...new Set(modules.map((a) => a.category))];
  const current = modules.find((a) => a.id === active);
  const idx = current ? modules.findIndex((a) => a.id === current.id) : -1;

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
        <Link
          to="/"
          title="Retour au portail"
          style={{
            color: "#8c7c65",
            textDecoration: "none",
            fontSize: "0.95rem",
            padding: "0 0.2rem",
            flexShrink: 0,
          }}
        >
          ←
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
            Analyse Institutionnelle — {modules.length} modules
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
            {active ? `Projet ${active}/${modules.length}` : `${modules.length} analyses`}
          </span>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          height: "calc(100vh - 52px)",
        }}
      >
        <aside
          style={{
            width: sidebarOpen ? 272 : 0,
            flexShrink: 0,
            background: "#17130e",
            borderRight: "1px solid #33291c",
            overflowY: "auto",
            overflowX: "hidden",
            transition: "width 0.2s ease",
          }}
        >
          <div style={{ width: 272, paddingBottom: "1rem" }}>
            {categories.map((cat) => (
              <div key={cat}>
                <div
                  style={{
                    padding: "0.6rem 1rem 0.2rem",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6f6250",
                    fontWeight: 700,
                    marginTop: "0.4rem",
                  }}
                >
                  {cat}
                </div>
                {modules
                  .filter((a) => a.category === cat)
                  .map((a) => (
                    <button
                      key={a.id}
                      onClick={() => openModule(a.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.55rem",
                        padding: "0.45rem 1rem",
                        background:
                          active === a.id
                            ? "linear-gradient(90deg,#2a2116,#33281a)"
                            : "transparent",
                        border: "none",
                        borderLeft:
                          active === a.id
                            ? `2px solid ${CATEGORY_COLORS[a.category] || "#f2b450"}`
                            : "2px solid transparent",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>{a.icon}</span>
                      <span
                        style={{
                          color: active === a.id ? "#f3e9d8" : "#b9a98f",
                          fontSize: "0.78rem",
                          fontWeight: active === a.id ? 600 : 400,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <span style={{ color: "#6f6250", fontSize: "0.65rem", marginRight: "0.3em" }}>
                          {String(a.id).padStart(2, "0")}
                        </span>
                        {a.title}
                      </span>
                    </button>
                  ))}
              </div>
            ))}

            {/* 15e projet : Rapport de risque — ouvre le HTML, liseré or */}
            {reportHref && (
              <div>
                <div
                  style={{
                    padding: "0.6rem 1rem 0.2rem",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6f6250",
                    fontWeight: 700,
                    marginTop: "0.4rem",
                  }}
                >
                  Synthèse
                </div>
                <a
                  href={reportHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    padding: "0.5rem 1rem",
                    margin: "0.15rem 0.5rem",
                    width: "calc(100% - 1rem)",
                    boxSizing: "border-box",
                    background: "rgba(255,210,63,0.05)",
                    border: "1px solid #ffd23f",
                    borderRadius: "8px",
                    cursor: "pointer",
                    textAlign: "left",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>🎯</span>
                  <span
                    style={{
                      color: "#ffd23f",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <span style={{ color: "#a8821f", fontSize: "0.65rem", marginRight: "0.3em" }}>
                      15
                    </span>
                    Rapport de risque ↗
                  </span>
                </a>
              </div>
            )}
          </div>
        </aside>

        <main style={{ flex: 1, overflowY: "auto", background: "#120f0b" }}>
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
                        Projet {String(current.id).padStart(2, "0")}
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

              <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem", justifyContent: "space-between" }}>
                {idx > 0 && (
                  <button
                    onClick={() => setActive(modules[idx - 1].id)}
                    style={{
                      background: "#1f1912",
                      border: "1px solid #33291c",
                      color: "#b9a98f",
                      padding: "0.4rem 0.9rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.75rem",
                    }}
                  >
                    ← {modules[idx - 1].title}
                  </button>
                )}
                <div style={{ flex: 1 }} />
                {idx < modules.length - 1 && (
                  <button
                    onClick={() => setActive(modules[idx + 1].id)}
                    style={{
                      background: "linear-gradient(90deg,#2a2116,#33281a)",
                      border: "1px solid #4a3a24",
                      color: "#f2b450",
                      padding: "0.4rem 0.9rem",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {modules[idx + 1].title} →
                  </button>
                )}
              </div>
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
.dh-title{min-width:0;flex:1}
.dh-name,.dh-sub{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dh-short{display:none}
@media (max-width:560px){
  .dh-header{padding:0 0.6rem !important;gap:0.45rem !important}
  .dh-sub{display:none}
  .dh-long{display:none}
  .dh-short{display:inline}
}
@media (max-width:420px){
  .dh-count{display:none}
}
`;
