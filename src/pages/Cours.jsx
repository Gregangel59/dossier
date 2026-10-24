import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

// ============================================================
//  PAGES DES FORMATIONS — lecture et téléchargement des PDF.
//  Même palette « sombre chaleureux » que Home.jsx et Dossier.jsx.
//  Une formation = un objet ci-dessous + son PDF et sa couverture dans public/cours/.
//  Pour publier une nouvelle version d'un PDF : le remplacer en gardant le même nom de fichier.
//  Pour ajouter une formation : créer l'objet, l'ajouter à FORMATIONS et déclarer sa route dans App.jsx.
// ============================================================

const BASE = import.meta.env.BASE_URL;

export const COURS = {
  slug: "cours",
  path: "/cours",
  kicker: "Formation · PDF gratuit",
  title: "Stratégie Buy and Hold",
  subtitle: "Le cours complet",
  cardTitle: "Stratégie Buy and Hold : le cours complet",
  lead: "Investir dans des entreprises d'exception et les garder longtemps. Le cours explique, leçon par leçon, les 6 habitudes de l'investisseur, les 6 traits des entreprises recherchées et les 6 principes du portefeuille, avec les slides commentées, des exercices et des quiz.",
  pdf: `${BASE}cours/cours-strategie-buy-and-hold.pdf`,
  cover: `${BASE}cours/couverture.jpg`,
  downloadName: "Cours-Strategie-Buy-and-Hold-221Bourse.pdf",
  size: "1,2 Mo",
  edition: "octobre 2026",
  facts: ["70 pages", "18 leçons", "57 slides commentées", "3 quiz corrigés"],
  modules: [
    { n: "Module 1", t: "L'investisseur", d: "Les 6 habitudes qui permettent de garder ses meilleures entreprises." },
    { n: "Module 2", t: "L'entreprise", d: "Les 6 traits des entreprises que la stratégie recherche." },
    { n: "Module 3", t: "Le portefeuille", d: "Les 6 principes pour construire, alimenter et suivre son portefeuille." },
  ],
  related: { to: "/cours/valorisation", label: "Hors-série : la valorisation n'est pas qu'un chiffre" },
};

export const HORS_SERIE_VALORISATION = {
  slug: "valorisation",
  path: "/cours/valorisation",
  kicker: "Hors-série · PDF gratuit",
  title: "La valorisation n'est pas qu'un chiffre",
  subtitle: "Stratégie Buy and Hold · Hors-série",
  cardTitle: "Hors-série : la valorisation n'est pas qu'un chiffre",
  lead: "Lire un prix plutôt que le juger. Ce que cache une valorisation, ce que suppose un multiple, quel outil pour quelle entreprise, et pourquoi les meilleures entreprises paraissent presque toujours chères. Avec un cas pratique chiffré et un quiz.",
  pdf: `${BASE}cours/hors-serie-valorisation.pdf`,
  cover: `${BASE}cours/couverture-valorisation.jpg`,
  downloadName: "Hors-serie-Valorisation-221Bourse.pdf",
  size: "0,3 Mo",
  edition: "octobre 2026",
  facts: ["22 pages", "6 leçons", "1 cas pratique", "1 quiz corrigé"],
  modules: [
    { n: "Leçons 1 et 2", t: "Lire un chiffre", d: "Pourquoi une valorisation n'est jamais aussi précise que le chiffre qui la résume." },
    { n: "Leçons 3 et 4", t: "Les outils", d: "Six ratios, le bon outil pour chaque entreprise, et ce que le prix suppose." },
    { n: "Leçons 5 et 6", t: "Décider", d: "Pourquoi la croissance paraît chère, et quatre questions avant de dire « trop cher »." },
  ],
  related: { to: "/cours", label: "Le cours complet : Stratégie Buy and Hold" },
};

export const FORMATIONS = [COURS, HORS_SERIE_VALORISATION];

// La visionneuse intégrée n'est fiable que sur ordinateur : sur téléphone,
// Android télécharge le PDF et iOS l'affiche mal dans une page.
function useCanEmbed() {
  const test = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 821px)").matches &&
    !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const [ok, setOk] = useState(test);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 821px)");
    const on = () => setOk(test());
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return ok;
}

export default function Cours({ data = COURS }) {
  const COURS = data;
  const canEmbed = useCanEmbed();
  useEffect(() => {
    document.title = `${COURS.cardTitle} — 221 Bourse`;
    window.scrollTo(0, 0);
  }, [COURS]);

  return (
    <div className="co-root" lang="fr">
      <style>{CSS}</style>

      <SiteHeader section="formations" title={COURS.cardTitle} subtitle="Formation gratuite" />

      <main className="co-main">
        <section className="co-hero">
          <a className="co-cover" href={COURS.pdf} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le cours">
            <img src={COURS.cover} alt={`Couverture : ${COURS.cardTitle}`} width="663" height="937" />
          </a>
          <div className="co-hero-text">
            <div className="co-kicker">{COURS.kicker}</div>
            <h1 className="co-title">{COURS.title}<span>{COURS.subtitle}</span></h1>
            <p className="co-lead">{COURS.lead}</p>
            <div className="co-chips">
              {COURS.facts.map((f) => <span key={f} className="co-chip">{f}</span>)}
            </div>
            <div className="co-actions">
              <a className="co-cta" href={COURS.pdf} download={COURS.downloadName}>Télécharger le PDF</a>
              <a className="co-ghost" href={COURS.pdf} target="_blank" rel="noopener noreferrer">Lire en plein écran ↗</a>
            </div>
            <div className="co-small">PDF · {COURS.size} · édition {COURS.edition}</div>
          </div>
        </section>

        <section className="co-modules" aria-label="Contenu du cours">
          {COURS.modules.map((m) => (
            <div key={m.n} className="co-module">
              <div className="co-module-n">{m.n}</div>
              <div className="co-module-t">{m.t}</div>
              <p className="co-module-d">{m.d}</p>
            </div>
          ))}
        </section>

        <section className="co-reader" aria-label="Lire le cours">
          <h2 className="co-h2">Lire le cours</h2>
          {canEmbed ? (
            <iframe className="co-frame" src={`${COURS.pdf}#view=FitH`} title={COURS.cardTitle} />
          ) : (
            <div className="co-mobile">
              <p>Sur téléphone, le cours s'ouvre dans le lecteur PDF de votre appareil.</p>
              <a className="co-cta" href={COURS.pdf} target="_blank" rel="noopener noreferrer">Ouvrir le cours</a>
            </div>
          )}
        </section>

        {COURS.related && (
          <Link to={COURS.related.to} className="co-related">Voir aussi : {COURS.related.label} ›</Link>
        )}

        <SiteFooter note="221 Bourse — Je documente, je ne conseille pas. Ce cours est un support d'éducation financière, pas un conseil en investissement." />
      </main>
    </div>
  );
}

const CSS = `
.co-root *,.co-root *::before,.co-root *::after{box-sizing:border-box}
.co-root{min-height:100vh;color:#f3e9d8;font-family:'IBM Plex Sans',system-ui,sans-serif;
  background:radial-gradient(ellipse at 15% -5%, rgba(242,180,80,.14), transparent 50%), #120f0b}
.co-main{max-width:1040px;margin:0 auto;padding:2.5rem 1.5rem 4rem}
.co-hero{display:flex;gap:2.2rem;align-items:center}
.co-cover{flex:none;width:250px;display:block;border-radius:10px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.45);
  border:1px solid #33291c;transition:transform .15s ease}
.co-cover:hover{transform:translateY(-3px)}
.co-cover img{display:block;width:100%;height:auto}
.co-hero-text{flex:1;min-width:0}
.co-kicker{font-size:.8rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#f2b450}
.co-title{margin:.4rem 0 0;font-family:Georgia,serif;font-size:2.4rem;font-weight:800;line-height:1.1;color:#f8eedc}
.co-title span{display:block;font-size:1.3rem;font-weight:700;color:#b9a98f;margin-top:.35rem}
.co-lead{margin:1rem 0 0;max-width:60ch;font-size:1.02rem;line-height:1.7;color:#b9a98f}
.co-chips{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.1rem}
.co-chip{font-size:.82rem;font-weight:600;color:#b9a98f;border:1px solid #33291c;background:rgba(255,255,255,.02);
  padding:.3rem .75rem;border-radius:999px}
.co-actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.4rem}
.co-cta{display:inline-block;font-size:.98rem;font-weight:700;color:#1b1206;text-decoration:none;
  background:linear-gradient(140deg,#f2b450,#d98c2b);border-radius:999px;padding:.7rem 1.4rem;box-shadow:0 6px 20px rgba(217,140,43,.25)}
.co-ghost{display:inline-block;font-size:.95rem;font-weight:600;color:#ffd23f;text-decoration:none;
  border:1px solid rgba(255,210,63,.35);background:rgba(255,210,63,.07);border-radius:999px;padding:.65rem 1.2rem}
.co-ghost:hover{background:rgba(255,210,63,.15)}
.co-cta:focus-visible,.co-ghost:focus-visible,.co-cover:focus-visible{outline:2px solid #f2b450;outline-offset:3px}
.co-small{margin-top:.8rem;font-size:.8rem;color:#8c7c65}
.co-modules{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2.6rem}
.co-module{background:#1b1610;border:1px solid #33291c;border-radius:16px;padding:1.2rem 1.3rem}
.co-module-n{font-size:.75rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#f2b450}
.co-module-t{margin-top:.3rem;font-family:Georgia,serif;font-size:1.25rem;font-weight:800;color:#f8eedc}
.co-module-d{margin:.4rem 0 0;font-size:.9rem;line-height:1.5;color:#b9a98f}
.co-reader{margin-top:3rem}
.co-h2{margin:0 0 1rem;font-family:Georgia,serif;font-size:1.55rem;font-weight:800;color:#f3e9d8}
.co-frame{display:block;width:100%;height:85vh;min-height:600px;border:1px solid #33291c;border-radius:14px;background:#fff}
.co-mobile{background:#1b1610;border:1px dashed #33291c;border-radius:16px;padding:1.4rem;text-align:center}
.co-mobile p{margin:0 0 1rem;color:#b9a98f;font-size:.95rem;line-height:1.5}
.co-related{display:block;margin:2.2rem auto 0;width:fit-content;max-width:100%;font-size:.95rem;font-weight:600;color:#f2b450;text-decoration:none;border:1px solid #33291c;background:#1b1610;border-radius:999px;padding:.6rem 1.2rem}
.co-related:hover{border-color:#f2b45099}
.co-related:focus-visible{outline:2px solid #f2b450;outline-offset:3px}
.co-sign{margin:3rem 0 0;text-align:center;font-size:.85rem;font-style:italic;color:#8c7c65}
@media (max-width:820px){
  .co-modules{grid-template-columns:1fr}
}
@media (max-width:640px){
  .co-main{padding:1.6rem 1rem 3rem}
  .co-hero{flex-direction:column;align-items:flex-start;gap:1.4rem}
  .co-cover{width:170px}
  .co-title{font-size:1.9rem}
  .co-actions a{flex:1 1 100%;text-align:center}
}
@media (prefers-reduced-motion:reduce){.co-cover{transition:none}.co-cover:hover{transform:none}}
`;
