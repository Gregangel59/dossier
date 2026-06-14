import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { COMPANY_BY_SLUG } from "../data/index.js";
import MarkdownRenderer, { CATEGORY_COLORS } from "../components/MarkdownRenderer.jsx";

export default function Dossier() {
  const { slug } = useParams();
  const company = COMPANY_BY_SLUG[slug];

  const [active, setActive] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!company) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#060d1a",
          color: "#cbd5e1",
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
        <h1 style={{ color: "#f8fafc", fontSize: "1.2rem" }}>Dossier introuvable</h1>
        <p style={{ color: "#64748b", fontSize: "0.85rem" }}>
          Aucune société ne correspond à « {slug} ».
        </p>
        <Link
          to="/"
          style={{
            color: "#38bdf8",
            textDecoration: "none",
            fontSize: "0.85rem",
            border: "1px solid #1e4976",
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

  // base d'URL pour les rapports statiques (gère le déploiement sous sous-chemin)
  const reportHref = company.riskReport
    ? `${import.meta.env.BASE_URL}rapports/${company.riskReport}`
    : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060d1a",
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          background: "linear-gradient(90deg,#0a1628,#0d1f3a)",
          borderBottom: "1px solid #1e3a5f",
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
          style={{
            background: "none",
            border: "none",
            color: "#64748b",
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
            color: "#64748b",
            textDecoration: "none",
            fontSize: "0.95rem",
            padding: "0 0.2rem",
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
            background: "linear-gradient(135deg,#016fd0,#38bdf8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.7rem",
            fontWeight: 900,
            color: "#fff",
            flexShrink: 0,
            letterSpacing: "0.5px",
          }}
        >
          {company.initials}
        </div>
        <div>
          <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.9rem" }}>
            {company.name}
          </div>
          <div
            style={{
              color: "#475569",
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Analyse Institutionnelle — {modules.length} modules
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem", alignItems: "center" }}>
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
              }}
            >
              Rapport de risque ↗
            </a>
          )}
          <span
            style={{
              background: "#0f2942",
              color: "#38bdf8",
              fontSize: "0.65rem",
              padding: "2px 8px",
              borderRadius: "10px",
              border: "1px solid #1e4976",
              fontWeight: 600,
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
            background: "#0a1628",
            borderRight: "1px solid #1e3a5f",
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
                    color: "#334155",
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
                      onClick={() => setActive(a.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.55rem",
                        padding: "0.45rem 1rem",
                        background:
                          active === a.id
                            ? "linear-gradient(90deg,#0c2340,#0f2d4a)"
                            : "transparent",
                        border: "none",
                        borderLeft:
                          active === a.id
                            ? `2px solid ${CATEGORY_COLORS[a.category] || "#38bdf8"}`
                            : "2px solid transparent",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>{a.icon}</span>
                      <span
                        style={{
                          color: active === a.id ? "#f1f5f9" : "#94a3b8",
                          fontSize: "0.78rem",
                          fontWeight: active === a.id ? 600 : 400,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <span style={{ color: "#334155", fontSize: "0.65rem", marginRight: "0.3em" }}>
                          {String(a.id).padStart(2, "0")}
                        </span>
                        {a.title}
                      </span>
                    </button>
                  ))}
              </div>
            ))}
          </div>
        </aside>

        <main style={{ flex: 1, overflowY: "auto", background: "#060d1a" }}>
          {!current ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100%",
                padding: "2.5rem 1.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  minWidth: 80,
                  height: 50,
                  padding: "0 0.8rem",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg,#016fd0,#38bdf8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: "1.25rem",
                  boxShadow: "0 0 40px rgba(56,189,248,0.15)",
                  letterSpacing: "1px",
                }}
              >
                {company.initials}
              </div>
              <h1
                style={{
                  color: "#f8fafc",
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  fontFamily: "Georgia, serif",
                  margin: "0 0 0.4rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {company.name}
              </h1>
              <p
                style={{
                  color: "#475569",
                  fontSize: "0.82rem",
                  maxWidth: 440,
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Plateforme d'analyse institutionnelle — {modules.length} modules.
                Sélectionnez un projet dans la barre latérale.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(185px,1fr))",
                  gap: "0.6rem",
                  maxWidth: 680,
                  width: "100%",
                }}
              >
                {modules.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setActive(a.id)}
                    style={{
                      background: "linear-gradient(135deg,#0d1f3a,#0a1628)",
                      border: "1px solid #1e3a5f",
                      borderRadius: "8px",
                      padding: "0.75rem 0.9rem",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = CATEGORY_COLORS[a.category] || "#38bdf8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1e3a5f";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem" }}>
                      <span style={{ fontSize: "0.85rem" }}>{a.icon}</span>
                      <span style={{ color: "#64748b", fontSize: "0.62rem", fontWeight: 700 }}>
                        {String(a.id).padStart(2, "0")}
                      </span>
                    </div>
                    <div style={{ color: "#e2e8f0", fontSize: "0.76rem", fontWeight: 600 }}>
                      {a.title}
                    </div>
                    <div style={{ color: "#475569", fontSize: "0.62rem", marginTop: "0.15rem" }}>
                      {a.category}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ padding: "1.75rem", maxWidth: 840, margin: "0 auto" }}>
              <div style={{ marginBottom: "1.25rem", borderBottom: "1px solid #1e3a5f", paddingBottom: "0.9rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>{current.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.2rem" }}>
                      <span style={{ color: "#334155", fontSize: "0.7rem", fontWeight: 700 }}>
                        Projet {String(current.id).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          background: `${CATEGORY_COLORS[current.category]}15`,
                          color: CATEGORY_COLORS[current.category] || "#38bdf8",
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
                        color: "#f8fafc",
                        fontSize: "1.2rem",
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

              <div style={{ background: "#0a1628", borderRadius: "10px", border: "1px solid #1e3a5f", padding: "1.5rem" }}>
                <MarkdownRenderer text={current.content} />
              </div>

              <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem", justifyContent: "space-between" }}>
                {idx > 0 && (
                  <button
                    onClick={() => setActive(modules[idx - 1].id)}
                    style={{
                      background: "#0d1f3a",
                      border: "1px solid #1e3a5f",
                      color: "#94a3b8",
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
                      background: "linear-gradient(90deg,#0c2340,#0f2d4a)",
                      border: "1px solid #1e4976",
                      color: "#38bdf8",
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
      <style>{`* { box-sizing:border-box; } ::-webkit-scrollbar { width:4px; } ::-webkit-scrollbar-thumb { background:#1e3a5f; border-radius:2px; }`}</style>
    </div>
  );
}
