// ============================================================
//  MOTEUR DE RENDU MARKDOWN — mutualisé pour TOUS les dossiers.
//  Géré une seule fois ici. Ne pas dupliquer par entreprise.
// ============================================================

export function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return (
        <strong key={i} style={{ color: "#f1f5f9", fontWeight: 700 }}>
          {part.slice(2, -2)}
        </strong>
      );
    if (part.startsWith("*") && part.endsWith("*"))
      return (
        <em key={i} style={{ color: "#a5f3fc" }}>
          {part.slice(1, -1)}
        </em>
      );
    if (part.startsWith("`") && part.endsWith("`"))
      return (
        <code
          key={i}
          style={{
            background: "#1e293b",
            color: "#7dd3fc",
            padding: "0.1em 0.35em",
            borderRadius: "3px",
            fontSize: "0.82em",
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    return part;
  });
}

export default function MarkdownRenderer({ text }) {
  const lines = text.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      elements.push(<div key={i} style={{ height: "0.4em" }} />);
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          style={{
            color: "#e2e8f0",
            fontSize: "0.9rem",
            fontWeight: 700,
            margin: "1.2em 0 0.3em",
            fontFamily: "Georgia, serif",
          }}
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{
            color: "#f1f5f9",
            fontSize: "1rem",
            fontWeight: 700,
            margin: "1.4em 0 0.4em",
            borderBottom: "1px solid #1e3a5f",
            paddingBottom: "0.25em",
            fontFamily: "Georgia, serif",
          }}
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("---")) {
      elements.push(
        <hr
          key={i}
          style={{
            border: "none",
            borderTop: "1px solid #1e3a5f",
            margin: "1em 0",
          }}
        />
      );
      i++;
      continue;
    }

    if (line.includes("|") && lines[i + 1] && lines[i + 1].includes("---")) {
      const headers = line.split("|").map((h) => h.trim()).filter(Boolean);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").map((c) => c.trim()).filter(Boolean));
        i++;
      }
      elements.push(
        <div key={`table-${i}`} style={{ overflowX: "auto", margin: "0.8em 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.78rem",
            }}
          >
            <thead>
              <tr>
                {headers.map((h, j) => (
                  <th
                    key={j}
                    style={{
                      background: "#0f172a",
                      color: "#38bdf8",
                      padding: "0.45em 0.7em",
                      textAlign: "left",
                      border: "1px solid #1e293b",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  style={{ background: ri % 2 === 0 ? "#0d1b2a" : "#0a1628" }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "0.4em 0.7em",
                        border: "1px solid #1e293b",
                        color: "#cbd5e1",
                      }}
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("• ")) {
      elements.push(
        <div
          key={i}
          style={{ display: "flex", gap: "0.5em", margin: "0.2em 0 0.2em 0.3em" }}
        >
          <span style={{ color: "#38bdf8", flexShrink: 0 }}>›</span>
          <span style={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "0.85rem" }}>
            {renderInline(line.slice(2))}
          </span>
        </div>
      );
      i++;
      continue;
    }

    const numMatch = line.match(/^(\d+)\.\s(.+)/);
    if (numMatch) {
      elements.push(
        <div
          key={i}
          style={{ display: "flex", gap: "0.6em", margin: "0.25em 0 0.25em 0.3em" }}
        >
          <span
            style={{
              color: "#38bdf8",
              fontWeight: 700,
              flexShrink: 0,
              minWidth: "1.3em",
              fontSize: "0.85rem",
            }}
          >
            {numMatch[1]}.
          </span>
          <span style={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "0.85rem" }}>
            {renderInline(numMatch[2])}
          </span>
        </div>
      );
      i++;
      continue;
    }

    elements.push(
      <p
        key={i}
        style={{
          color: "#cbd5e1",
          lineHeight: 1.8,
          margin: "0.25em 0",
          fontSize: "0.85rem",
        }}
      >
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <div>{elements}</div>;
}

export const CATEGORY_COLORS = {
  "Compréhension du business": "#0ea5e9",
  "Valorisation & thèses": "#8b5cf6",
  "Analyse financière": "#10b981",
  Gouvernance: "#f59e0b",
  Marché: "#ef4444",
  "Comparaison sectorielle": "#6366f1",
  "Valorisation prospective": "#ec4899",
  "Risques comptables": "#f97316",
  "Préparation d'entretien": "#14b8a6",
  "Analyse critique / Short": "#dc2626",
};
