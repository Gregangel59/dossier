import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PORTEFEUILLES, CASH_PCT } from "../data/portefeuilles.js";

// ============================================================
//  PAGE D'UN PORTEFEUILLE — /portefeuille/:slug (historique, big-bang, epique).
//  Les données viennent de src/data/portefeuilles.js, généré par scripts/portefeuille.py.
//  Même palette « sombre chaleureux » que Home.jsx, Dossier.jsx et Cours.jsx.
// ============================================================

const nf1 = new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const nf0 = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });
const nfPx = new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const pct = (v) => {
  const s = Math.abs(v) >= 100 ? nf0.format(Math.abs(v)) : nf1.format(Math.abs(v));
  return `${v > 0 ? "+" : v < 0 ? "−" : ""}${s} %`;
};
const weight = (v) => (v < 0.1 ? "< 0,1 %" : `${nf1.format(v)} %`);
const tone = (v) => (v > 0 ? "pf-up" : v < 0 ? "pf-down" : "");
export const fmtDate = (iso, opts = { day: "numeric", month: "short", year: "numeric" }) =>
  new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", opts);
const year = (iso) => iso.slice(0, 4);
const monthYear = (iso) => fmtDate(iso, { month: "short", year: "numeric" });

const TYPE_CLASS = {
  Constitution: "pf-tag-const",
  "Nouvelle ligne": "pf-tag-new",
  "Nouvelle tranche": "pf-tag-add",
  "Allègement": "pf-tag-trim",
  Sortie: "pf-tag-out",
};

const SORTS = [
  { id: "weight", label: "Poids actuel" },
  { id: "invested", label: "Part investie" },
  { id: "perf", label: "Performance" },
  { id: "since", label: "Ancienneté" },
];

const MOVES_SHOWN = 12;   // au-delà de MOVES_SHOWN + 6 mouvements, la liste est repliée
const MOVES_FOLD = MOVES_SHOWN + 6;

function Move({ m }) {
  if (m.type === "Constitution") {
    return (
      <li className="pf-move">
        <div className="pf-move-date">{fmtDate(m.date)}</div>
        <div className="pf-move-body">
          <div className="pf-move-head">
            <span className={`pf-tag ${TYPE_CLASS[m.type]}`}>Constitution</span>
            <span className="pf-move-ticker">{m.tickers.length} lignes achetées le jour de la création</span>
          </div>
          <div className="pf-move-tickers">{m.tickers.join(" · ")}</div>
          <div className="pf-move-facts">
            <span>Ce panier depuis l'achat : <b className={tone(m.since)}>{pct(m.since)}</b></span>
          </div>
        </div>
      </li>
    );
  }
  const sell = m.type === "Sortie" || m.type === "Allègement";
  const cur = m.devise === "EUR" ? "€" : "$";
  return (
    <li className="pf-move">
      <div className="pf-move-date">{fmtDate(m.date)}</div>
      <div className="pf-move-body">
        <div className="pf-move-head">
          <span className={`pf-tag ${TYPE_CLASS[m.type]}`}>{m.type}</span>
          <span className="pf-move-ticker">{m.ticker}</span>
          {m.name !== m.ticker && <span className="pf-move-name">{m.name}</span>}
        </div>
        <div className="pf-move-facts">
          <span>{sell ? "Vendu" : "Acheté"} à {nfPx.format(m.price)} {cur}</span>
          {sell && (
            <span>
              Résultat sur la ligne : <b className={tone(m.realized)}>{pct(m.realized)}</b>
              <i> (détenue depuis {monthYear(m.heldSince)})</i>
            </span>
          )}
          <span>
            {sell ? "Le titre depuis la vente" : "Depuis l'achat"} : <b className={tone(m.since)}>{pct(m.since)}</b>
          </span>
        </div>
      </div>
    </li>
  );
}

export default function Portefeuille() {
  const { slug } = useParams();
  const P = PORTEFEUILLES.find((p) => p.slug === slug);
  const [sort, setSort] = useState("weight");
  const [sector, setSector] = useState("all");
  const [allMoves, setAllMoves] = useState(false);

  useEffect(() => {
    if (P) document.title = `${P.name} — 221 Bourse`;
    setSort("weight");
    setSector("all");
    setAllMoves(false);
    window.scrollTo(0, 0);
  }, [slug]);

  const counts = useMemo(() => {
    const c = {};
    (P ? P.moves : []).forEach((m) => (c[m.type] = (c[m.type] || 0) + 1));
    return c;
  }, [P]);

  const rows = useMemo(() => {
    if (!P) return [];
    const list = P.positions
      .map((p, i) => ({ ...p, rank: i + 1 }))
      .filter((p) => sector === "all" || p.sector === sector);
    if (sort === "invested") list.sort((a, b) => b.invested - a.invested);
    else if (sort === "perf") list.sort((a, b) => b.perf - a.perf);
    else if (sort === "since") list.sort((a, b) => a.since.localeCompare(b.since));
    return list;
  }, [P, sort, sector]);

  if (!P) return <Navigate to="/" replace />;

  const maxW = P.positions[0].weight;
  const maxS = P.sectors[0].weight;
  const young = new Date(P.asOf) - new Date(P.created) < 2 * 365 * 864e5;
  const entry = young ? monthYear : year;
  const folds = P.moves.length > MOVES_FOLD;
  const moves = allMoves || !folds ? P.moves : P.moves.slice(0, MOVES_SHOWN);
  const windowLabel = P.windowFromCreation
    ? `depuis la création, du ${fmtDate(P.windowStart)} au ${fmtDate(P.asOf)}`
    : `du ${fmtDate(P.windowStart)} au ${fmtDate(P.asOf)}`;

  return (
    <div className="pf-root" lang="fr">
      <style>{CSS}</style>

      <header className="pf-header">
        <Link to="/" className="pf-back" aria-label="Retour à l'accueil">‹</Link>
        <div className="pf-logo" aria-hidden="true">221</div>
        <div className="pf-header-title">
          <div className="pf-header-name">{P.name}</div>
          <div className="pf-header-sub">221 Bourse — Suivi au {fmtDate(P.asOf, { day: "numeric", month: "long", year: "numeric" })}</div>
        </div>
      </header>

      <main className="pf-main">
        <nav className="pf-switch" aria-label="Choisir un portefeuille">
          {PORTEFEUILLES.map((p) => (
            <Link key={p.slug} to={`/portefeuille/${p.slug}`}
              className={`pf-switch-a${p.slug === P.slug ? " is-on" : ""}`}
              aria-current={p.slug === P.slug ? "page" : undefined}>
              {p.name.replace("Portefeuille ", "")}
            </Link>
          ))}
        </nav>

        <section className="pf-hero">
          <div className="pf-kicker">Suivi de portefeuille · créé le {fmtDate(P.created, { day: "numeric", month: "long", year: "numeric" })}</div>
          <h1 className="pf-title">{P.name}</h1>
          <p className="pf-lead">
            Toutes les lignes du portefeuille, avec leur poids, leur part dans les sommes investies et leur
            performance depuis la première entrée, puis chaque achat et chaque vente{" "}
            {P.windowFromCreation ? "depuis sa création" : "des douze derniers mois"}.
          </p>
          <div className="pf-perfs">
            <div className="pf-big">
              <span className="pf-big-label">Performance globale</span>
              <b className={tone(P.globalPerf)}>{pct(P.globalPerf)}</b>
              <span className="pf-big-sub">
                soit {P.multiple.toLocaleString("fr-FR", { maximumFractionDigits: P.multiple < 2 ? 2 : 1 })} fois les sommes investies
              </span>
            </div>
            <div className="pf-big">
              <span className="pf-big-label">Rendement annualisé (TRI)</span>
              {P.irr === null ? (
                <>
                  <b className="pf-na">non annualisé</b>
                  <span className="pf-big-sub">le portefeuille a moins d'un an : un taux annuel extrapolerait quelques mois</span>
                </>
              ) : (
                <>
                  <b className={tone(P.irr)}>{pct(P.irr)} <small>par an</small></b>
                  <span className="pf-big-sub">chaque achat et chaque vente comptés à leur date</span>
                </>
              )}
            </div>
          </div>
          <div className="pf-stats">
            <div className="pf-stat"><b>{nf1.format(P.shareOfAssets)} %</b><span>de mes avoirs en bourse</span></div>
            <div className="pf-stat"><b>{P.lines}</b><span>lignes</span></div>
            <div className="pf-stat"><b>{nf0.format(P.top10)} %</b><span>dans les 10 premières lignes</span></div>
            <div className="pf-stat"><b>{P.moves.length}</b><span>mouvements {P.windowFromCreation ? "depuis la création" : "en 12 mois"}</span></div>
          </div>
        </section>

        <section className="pf-section" aria-labelledby="pf-mvt">
          <h2 id="pf-mvt" className="pf-h2">
            Les mouvements <span className="pf-h2-hint">{windowLabel}</span>
          </h2>
          <div className="pf-chips">
            {Object.entries(counts).map(([t, n]) => (
              <span key={t} className={`pf-tag ${TYPE_CLASS[t]}`}>{n} × {t.toLowerCase()}</span>
            ))}
          </div>
          <ol className="pf-moves">
            {moves.map((m, i) => <Move key={`${m.date}-${m.ticker || "c"}-${i}`} m={m} />)}
          </ol>
          {folds && (
            <button type="button" className="pf-more" onClick={() => setAllMoves(!allMoves)} aria-expanded={allMoves}>
              {allMoves ? "Afficher moins" : `Afficher les ${P.moves.length - MOVES_SHOWN} mouvements plus anciens`}
            </button>
          )}
        </section>

        <section className="pf-section" aria-labelledby="pf-sect">
          <h2 id="pf-sect" className="pf-h2">Répartition <span className="pf-h2-hint">par secteur, en poids</span></h2>
          <div className="pf-sectors">
            {P.sectors.map((s) => (
              <button
                key={s.name}
                type="button"
                className={`pf-sector${sector === s.name ? " is-on" : ""}`}
                onClick={() => setSector(sector === s.name ? "all" : s.name)}
                aria-pressed={sector === s.name}
              >
                <span className="pf-sector-name">{s.name}</span>
                <span className="pf-sector-bar"><i style={{ width: `${(100 * s.weight) / maxS}%` }} /></span>
                <span className="pf-sector-w">{weight(s.weight)}</span>
              </button>
            ))}
          </div>
          <p className="pf-note">Cliquer sur un secteur filtre la liste des lignes ci-dessous.</p>
        </section>

        <section className="pf-section" aria-labelledby="pf-lignes">
          <div className="pf-list-head">
            <h2 id="pf-lignes" className="pf-h2">
              Les lignes {sector !== "all" && <span className="pf-h2-hint">{sector}</span>}
            </h2>
            <div className="pf-tools" role="group" aria-label="Trier les lignes">
              {SORTS.map((s) => (
                <button key={s.id} type="button" className={`pf-sort${sort === s.id ? " is-on" : ""}`}
                  onClick={() => setSort(s.id)} aria-pressed={sort === s.id}>{s.label}</button>
              ))}
              {sector !== "all" && (
                <button type="button" className="pf-sort pf-clear" onClick={() => setSector("all")}>Tous les secteurs ✕</button>
              )}
            </div>
          </div>

          <div className="pf-table" role="table" aria-label="Lignes du portefeuille">
            <div className="pf-tr pf-th" role="row">
              <span role="columnheader">#</span>
              <span role="columnheader">Société</span>
              <span role="columnheader">Poids actuel</span>
              <span role="columnheader" className="pf-r">Part investie</span>
              <span role="columnheader" className="pf-r">Depuis l'entrée</span>
              <span role="columnheader" className="pf-r">Entrée</span>
            </div>
            {rows.map((p) => (
              <div key={p.ticker} className="pf-tr" role="row">
                <span className="pf-rank" role="cell">{p.rank}</span>
                <span className="pf-co" role="cell">
                  <b>{p.ticker}</b>
                  {p.name !== p.ticker && <span>{p.name}</span>}
                  <em>{p.sector}</em>
                </span>
                <span className="pf-w" role="cell">
                  <span className="pf-w-bar"><i style={{ width: `${(100 * p.weight) / maxW}%` }} /></span>
                  <span className="pf-w-n">{weight(p.weight)}</span>
                </span>
                <span className="pf-r pf-inv" role="cell">{weight(p.invested)}</span>
                <span className={`pf-r pf-perf ${tone(p.perf)}`} role="cell">{pct(p.perf)}</span>
                <span className="pf-r pf-since" role="cell">{entry(p.since)}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-method" aria-labelledby="pf-meth">
          <h2 id="pf-meth" className="pf-h3">Comment lire ces chiffres</h2>
          <ul>
            <li>Cours de clôture du {fmtDate(P.asOf)}. Les poids sont calculés en euros, au taux de {P.eurusd.toLocaleString("fr-FR", { minimumFractionDigits: 4 })} dollar pour 1 euro.</li>
            <li>La part de mes avoirs en bourse rapporte la valeur du portefeuille à l'ensemble de mes trois portefeuilles et de mes liquidités ({nf1.format(CASH_PCT)} %).</li>
            <li>
              La performance globale compare la valeur actuelle des lignes, augmentée du produit des ventes, au total des achats
              depuis la création, y compris ceux des lignes vendues.
              {P.irr === null
                ? " Elle n'est pas annualisée tant que le portefeuille n'a pas un an."
                : " Le rendement annualisé est un taux de rendement interne (TRI) : il tient compte de la date de chaque achat et de chaque vente, puisque l'argent a été investi progressivement et non en une seule fois à la création."}
              {" "}Hors dividendes et hors effet de change.
            </li>
            <li>Le poids actuel est la part de la ligne dans la valeur du portefeuille aujourd'hui. La part investie est sa part dans le total des sommes investies sur les lignes détenues (prix de revient). L'écart entre les deux montre ce que le marché a fait de chaque mise. Pour cette part investie, les achats en dollars sont convertis au même taux que ci-dessus.</li>
            <li>La performance d'une ligne compare le cours actuel au prix de revient moyen de tous les achats de la ligne, dans la devise de cotation : hors dividendes et hors effet de change. Les cours sont ajustés des divisions d'actions.</li>
            <li>« Constitution » regroupe les lignes achetées le jour de la création du portefeuille. « Nouvelle tranche » désigne un achat complémentaire sur une ligne déjà détenue, vers son allocation cible.</li>
            <li>Les lignes vendues ne figurent plus dans la liste : leur résultat apparaît dans les mouvements.</li>
          </ul>
        </section>

        <p className="pf-sign">221 Bourse — Je documente ce que je fais, je ne conseille pas. Rien sur cette page n'est une recommandation d'achat ou de vente.</p>
      </main>
    </div>
  );
}

const CSS = `
.pf-root *,.pf-root *::before,.pf-root *::after{box-sizing:border-box}
.pf-root{min-height:100vh;color:#f3e9d8;font-family:'IBM Plex Sans',system-ui,sans-serif;
  background:radial-gradient(ellipse at 15% -5%, rgba(242,180,80,.14), transparent 50%), #120f0b}
.pf-header{position:sticky;top:0;z-index:50;height:52px;display:flex;align-items:center;gap:.75rem;padding:0 1.25rem;
  background:linear-gradient(90deg,#17130e,#1f1912);border-bottom:1px solid #33291c}
.pf-back{flex:none;color:#f2b450;text-decoration:none;font-size:1.6rem;line-height:1;padding:0 .2rem}
.pf-logo{flex:none;min-width:40px;height:30px;padding:0 .4rem;border-radius:7px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,#d98c2b,#f2b450);color:#1b1206;font-weight:900;font-size:.75rem;letter-spacing:.5px}
.pf-header-title{min-width:0}
.pf-header-name{color:#f3e9d8;font-weight:700;font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pf-header-sub{color:#8c7c65;font-size:.68rem;white-space:nowrap}
.pf-main{max-width:1040px;margin:0 auto;padding:2.5rem 1.5rem 4rem}

.pf-kicker{font-size:.8rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#f2b450}
.pf-title{margin:.4rem 0 0;font-family:Georgia,serif;font-size:2.3rem;font-weight:800;line-height:1.15;color:#f8eedc;max-width:24ch}
.pf-lead{margin:1rem 0 0;max-width:64ch;font-size:1.02rem;line-height:1.7;color:#b9a98f}
.pf-perfs{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1.6rem}
.pf-big{background:linear-gradient(150deg,#2a2015,#1b1610 60%);border:1px solid #33291c;border-radius:18px;padding:1.2rem 1.4rem}
.pf-big-label{display:block;font-size:.78rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#f2b450}
.pf-big b{display:block;margin-top:.35rem;font-family:Georgia,serif;font-size:2.6rem;font-weight:900;line-height:1.05}
.pf-big b small{font-family:'IBM Plex Sans',system-ui,sans-serif;font-size:.95rem;font-weight:600;color:#b9a98f}
.pf-big-sub{display:block;margin-top:.35rem;font-size:.85rem;color:#b9a98f}
.pf-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;margin-top:1.6rem}
.pf-stat{background:#1b1610;border:1px solid #33291c;border-radius:16px;padding:1rem 1.1rem}
.pf-stat b{display:block;font-family:Georgia,serif;font-size:1.8rem;font-weight:900;color:#f8eedc;line-height:1.1}
.pf-stat span{display:block;margin-top:.25rem;font-size:.82rem;color:#b9a98f}

.pf-section{margin-top:3rem}
.pf-h2{margin:0 0 1rem;font-family:Georgia,serif;font-size:1.55rem;font-weight:800;color:#f3e9d8}
.pf-h2-hint{font-family:'IBM Plex Sans',system-ui,sans-serif;font-size:.85rem;font-weight:500;color:#8c7c65;margin-left:.4rem}
.pf-h3{margin:0 0 .6rem;font-family:Georgia,serif;font-size:1.15rem;font-weight:800;color:#f3e9d8}
.pf-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem}

.pf-tag{display:inline-block;font-size:.74rem;font-weight:700;letter-spacing:.3px;padding:.22rem .6rem;border-radius:999px;border:1px solid}
.pf-tag-new{color:#7fd69a;border-color:rgba(127,214,154,.35);background:rgba(127,214,154,.08)}
.pf-tag-add{color:#f2b450;border-color:rgba(242,180,80,.38);background:rgba(242,180,80,.08)}
.pf-tag-trim{color:#e0a07a;border-color:rgba(224,160,122,.38);background:rgba(224,160,122,.08)}
.pf-tag-out{color:#f08a7a;border-color:rgba(240,138,122,.38);background:rgba(240,138,122,.08)}

.pf-moves{list-style:none;margin:0;padding:0;border-left:2px solid #33291c;margin-left:.4rem}
.pf-move{position:relative;display:flex;gap:1.2rem;padding:.9rem 0 .9rem 1.4rem}
.pf-move::before{content:"";position:absolute;left:-7px;top:1.3rem;width:12px;height:12px;border-radius:50%;
  background:#120f0b;border:2px solid #f2b450}
.pf-move-date{flex:none;width:96px;font-size:.85rem;font-weight:600;color:#8c7c65;padding-top:.15rem}
.pf-move-body{flex:1;min-width:0;background:#1b1610;border:1px solid #33291c;border-radius:14px;padding:.85rem 1.1rem}
.pf-move-head{display:flex;flex-wrap:wrap;align-items:center;gap:.55rem}
.pf-move-ticker{font-weight:800;color:#f8eedc;letter-spacing:.3px}
.pf-move-name{color:#b9a98f;font-size:.92rem}
.pf-move-facts{display:flex;flex-wrap:wrap;gap:.35rem 1.4rem;margin-top:.5rem;font-size:.88rem;color:#b9a98f}
.pf-move-facts b{font-weight:700}
.pf-move-facts i{color:#8c7c65;font-style:normal}

.pf-switch{display:flex;flex-wrap:wrap;gap:.4rem;margin:0 0 1.6rem}
.pf-switch-a{font-size:.84rem;font-weight:600;color:#b9a98f;text-decoration:none;border:1px solid #33291c;border-radius:999px;padding:.35rem .9rem}
.pf-switch-a:hover{border-color:#f2b45066;color:#efe3cf}
.pf-switch-a.is-on{color:#1b1206;background:linear-gradient(140deg,#f2b450,#d98c2b);border-color:transparent}
.pf-switch-a:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
.pf-tag-const{color:#9cc3f0;border-color:rgba(156,195,240,.38);background:rgba(156,195,240,.08)}
.pf-move-tickers{margin-top:.45rem;font-size:.82rem;line-height:1.6;color:#efe3cf;letter-spacing:.2px}
.pf-more{display:block;margin:1rem 0 0 1.8rem;font:inherit;font-size:.88rem;font-weight:600;cursor:pointer;color:#ffd23f;
  border:1px solid rgba(255,210,63,.35);background:rgba(255,210,63,.07);border-radius:999px;padding:.5rem 1.1rem}
.pf-more:hover{background:rgba(255,210,63,.15)}
.pf-more:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
.pf-big b.pf-na{font-size:1.6rem;color:#b9a98f;padding:.35rem 0 .2rem}
.pf-up{color:#7fd69a}
.pf-down{color:#f08a7a}

.pf-sectors{display:grid;gap:.45rem}
.pf-sector{all:unset;cursor:pointer;display:grid;grid-template-columns:220px 1fr 70px;align-items:center;gap:1rem;
  padding:.5rem .75rem;border-radius:10px;border:1px solid transparent}
.pf-sector:hover{background:#1b1610;border-color:#33291c}
.pf-sector.is-on{background:#2a2015;border-color:#f2b45066}
.pf-sector:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
.pf-sector-name{font-size:.92rem;color:#efe3cf}
.pf-sector-bar{height:10px;border-radius:6px;background:#1f1912;overflow:hidden}
.pf-sector-bar i,.pf-w-bar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#d98c2b,#f2b450)}
.pf-sector-w{text-align:right;font-weight:700;font-size:.9rem;color:#f8eedc;font-variant-numeric:tabular-nums}
.pf-note{margin:.6rem 0 0;font-size:.8rem;color:#8c7c65}

.pf-list-head{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:.6rem 1rem}
.pf-tools{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem}
.pf-sort{font:inherit;font-size:.84rem;font-weight:600;cursor:pointer;color:#b9a98f;background:transparent;
  border:1px solid #33291c;border-radius:999px;padding:.35rem .85rem}
.pf-sort:hover{border-color:#f2b45066;color:#efe3cf}
.pf-sort.is-on{color:#1b1206;background:linear-gradient(140deg,#f2b450,#d98c2b);border-color:transparent}
.pf-sort:focus-visible{outline:2px solid #f2b450;outline-offset:2px}
.pf-clear{color:#ffd23f;border-color:rgba(255,210,63,.35)}

.pf-table{background:#1b1610;border:1px solid #33291c;border-radius:16px;overflow:hidden}
.pf-tr{display:grid;grid-template-columns:40px minmax(0,1.5fr) minmax(0,1.2fr) 100px 120px 64px;align-items:center;gap:1rem;
  padding:.7rem 1.1rem;border-top:1px solid #2a2117}
.pf-th{border-top:0;background:#17130e;font-size:.74rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#8c7c65}
.pf-r{text-align:right}
.pf-rank{color:#8c7c65;font-size:.85rem;font-variant-numeric:tabular-nums}
.pf-co{display:flex;flex-wrap:wrap;align-items:baseline;gap:.15rem .55rem;min-width:0}
.pf-co b{color:#f8eedc;font-weight:800;letter-spacing:.3px}
.pf-co span{color:#efe3cf;font-size:.92rem}
.pf-co em{flex-basis:100%;font-style:normal;font-size:.76rem;color:#8c7c65}
.pf-w{display:flex;align-items:center;gap:.7rem}
.pf-w-bar{flex:1;height:8px;border-radius:6px;background:#120f0b;overflow:hidden}
.pf-w-n{flex:none;width:62px;text-align:right;font-weight:700;font-size:.9rem;font-variant-numeric:tabular-nums}
.pf-perf{font-weight:700;font-variant-numeric:tabular-nums}
.pf-inv{color:#efe3cf;font-weight:600;font-size:.9rem;font-variant-numeric:tabular-nums}
.pf-since{color:#b9a98f;font-size:.9rem;font-variant-numeric:tabular-nums}

.pf-method{margin-top:3rem;background:#1b1610;border:1px dashed #33291c;border-radius:16px;padding:1.2rem 1.4rem}
.pf-method ul{margin:0;padding-left:1.1rem;display:grid;gap:.45rem}
.pf-method li{font-size:.88rem;line-height:1.55;color:#b9a98f}
.pf-sign{margin:3rem 0 0;text-align:center;font-size:.85rem;font-style:italic;color:#8c7c65}

@media (max-width:820px){
  .pf-stats{grid-template-columns:repeat(2,1fr)}
  .pf-sector{grid-template-columns:150px 1fr 62px;gap:.7rem}
}
@media (max-width:640px){
  .pf-main{padding:1.6rem 1rem 3rem}
  .pf-title{font-size:1.75rem}
  .pf-perfs{grid-template-columns:1fr}
  .pf-big b{font-size:2.1rem}
  .pf-move{flex-direction:column;gap:.35rem;padding-left:1.1rem}
  .pf-move-date{width:auto}
  .pf-sector{grid-template-columns:1fr 62px;gap:.3rem .7rem}
  .pf-sector-bar{grid-column:1 / -1;grid-row:2}
  .pf-th{display:none}
  .pf-tr{grid-template-columns:28px minmax(0,1fr) auto;grid-template-areas:"rank co perf" "rank w since" "rank inv inv";gap:.35rem .7rem}
  .pf-rank{grid-area:rank;align-self:start;padding-top:.15rem}
  .pf-co{grid-area:co}
  .pf-w{grid-area:w}
  .pf-perf{grid-area:perf}
  .pf-since{grid-area:since}
  .pf-since::before{content:"entrée "}
  .pf-inv{grid-area:inv;text-align:left;font-size:.82rem;color:#b9a98f;font-weight:500}
  .pf-inv::before{content:"part investie : "}
}
`;
