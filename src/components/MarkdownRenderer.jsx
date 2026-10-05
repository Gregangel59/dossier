// ============================================================
//  MOTEUR DE RENDU MARKDOWN — mutualisé pour TOUS les dossiers.
//  Géré une seule fois ici. Ne pas dupliquer par entreprise.
//  Typographie « lecture confortable » (oct. 2026) : texte 1,02 rem,
//  titres 1,3 rem, sous-titres 1,1 rem, tableaux 0,9 rem.
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

// Découpe une ligne de tableau Markdown en cellules.
// Seuls les séparateurs de début et de fin de ligne sont retirés :
// une cellule vide au milieu ou en fin de ligne est conservée.
function splitRow(line) {
  const cells = line.split("|").map((c) => c.trim());
  if (cells.length && cells[0] === "" && line.trim().startsWith("|")) cells.shift();
  if (cells.length && cells[cells.length - 1] === "" && line.trim().endsWith("|")) cells.pop();
  return cells;
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
            fontSize: "1.1rem",
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
            fontSize: "1.3rem",
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
      const headers = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|")) {
        const cells = splitRow(lines[i]);
        while (cells.length < headers.length) cells.push("");
        rows.push(cells);
        i++;
      }
      elements.push(
        <div key={`table-${i}`} style={{ overflowX: "auto", margin: "0.8em 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
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
                      padding: "0.55em 0.8em",
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
                        padding: "0.55em 0.8em",
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
          <span style={{ color: "#cbd5e1", lineHeight: 1.75, fontSize: "1.02rem" }}>
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
              fontSize: "1.02rem",
            }}
          >
            {numMatch[1]}.
          </span>
          <span style={{ color: "#cbd5e1", lineHeight: 1.75, fontSize: "1.02rem" }}>
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
          margin: "0.35em 0",
          fontSize: "1.02rem",
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
