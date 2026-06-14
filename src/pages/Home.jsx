import { Link } from "react-router-dom";
import { COMPANIES } from "../data/index.js";

// Couleur de la pastille de score (cohérente avec le rapport de risque)
function scoreColor(score) {
  if (score == null) return "#475569";
  if (score >= 75) return "#28d17c";
  if (score >= 50) return "#ffd23f";
  if (score >= 25) return "#ff9f43";
  return "#ff4d5e";
}

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#060d1a", fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}>
      <header
        style={{
          background: "linear-gradient(90deg,#0a1628,#0d1f3a)",
          borderBottom: "1px solid #1e3a5f",
          padding: "0 1.25rem",
          height: "52px",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "8px",
            background: "linear-gradient(135deg,#0284c7,#38bdf8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.85rem",
            fontWeight: 900,
            color: "#fff",
          }}
        >
          §
        </div>
        <div>
          <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.9rem" }}>
            Dossiers d'analyse institutionnelle
          </div>
          <div
            style={{
              color: "#475569",
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Portail — {COMPANIES.length} {COMPANIES.length > 1 ? "sociétés couvertes" : "société couverte"}
          </div>
        </div>
      </header>

      <main
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 4rem",
        }}
      >
        <h1
          style={{
            color: "#f8fafc",
            fontSize: "1.7rem",
            fontWeight: 800,
            fontFamily: "Georgia, serif",
            margin: "0 0 0.4rem",
          }}
        >
          Univers de couverture
        </h1>
        <p
          style={{
            color: "#475569",
            fontSize: "0.85rem",
            lineHeight: 1.7,
            maxWidth: 560,
            marginBottom: "2.25rem",
          }}
        >
          Chaque dossier regroupe 14 modules d'analyse fondamentale et un rapport
          de score de risque en deux pages. Sélectionnez une société pour ouvrir
          son dossier.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
            gap: "1rem",
          }}
        >
          {COMPANIES.map((c) => (
            <Link
              key={c.slug}
              to={`/dossier/${c.slug}`}
              style={{
                textDecoration: "none",
                background: "linear-gradient(135deg,#0d1f3a,#0a1628)",
                border: "1px solid #1e3a5f",
                borderRadius: "12px",
                padding: "1.25rem",
                display: "block",
                transition: "border-color 0.15s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#38bdf8";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e3a5f";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.9rem",
                }}
              >
                <div
                  style={{
                    minWidth: 52,
                    height: 38,
                    padding: "0 0.6rem",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg,#016fd0,#38bdf8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.95rem",
                    fontWeight: 900,
                    color: "#fff",
                    letterSpacing: "0.5px",
                  }}
                >
                  {c.initials}
                </div>
                {c.riskScore != null && (
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: scoreColor(c.riskScore),
                        lineHeight: 1,
                      }}
                    >
                      {c.riskScore}
                    </div>
                    <div style={{ color: "#475569", fontSize: "0.58rem" }}>
                      / 100 risque
                    </div>
                  </div>
                )}
              </div>

              <div
                style={{
                  color: "#f8fafc",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  fontFamily: "Georgia, serif",
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.68rem",
                  marginTop: "0.15rem",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {c.ticker} · {c.exchange} · {c.sector}
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.78rem",
                  lineHeight: 1.5,
                  margin: "0.7rem 0 0",
                }}
              >
                {c.tagline}
              </p>
              <div
                style={{
                  marginTop: "0.9rem",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    background: "#0f2942",
                    color: "#38bdf8",
                    fontSize: "0.62rem",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    border: "1px solid #1e4976",
                    fontWeight: 600,
                  }}
                >
                  {c.modules.length} modules
                </span>
                {c.riskReport && (
                  <span
                    style={{
                      background: "rgba(255,210,63,.1)",
                      color: "#ffd23f",
                      fontSize: "0.62rem",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,210,63,.3)",
                      fontWeight: 600,
                    }}
                  >
                    Rapport risque
                  </span>
                )}
                <span style={{ color: "#334155", fontSize: "0.6rem", marginLeft: "auto" }}>
                  maj {c.updated}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
