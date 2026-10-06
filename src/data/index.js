// ============================================================
//  REGISTRE CENTRAL DES DOSSIERS
//  ----------------------------------------------------------
//  C'EST LE SEUL FICHIER À ÉDITER POUR AJOUTER UNE ENTREPRISE.
//  Pour chaque nouveau dossier :
//    1. Crée src/data/<slug>.js (copie american-express.js)
//    2. Importe-le ici et ajoute une entrée dans le tableau ci-dessous
//    3. (Optionnel) Dépose le rapport de risque HTML dans
//       public/rapports/<slug>.html
// ============================================================

import duol from "./duol.js";
import bros from "./bros.js";
import be from "./be.js";
import figs from "./figs.js";
import googl from "./googl.js";



// L'ordre du tableau = l'ordre d'affichage sur la page d'accueil.
export const COMPANIES = [
 duol,
 bros,
 be,
 figs,
 googl,
 

 
 

    // amd,
  // adyen,
  // toast,
  // amphenol,
  // airLiquide,
];

// Index par slug pour la résolution des routes (/dossier/:slug).
export const COMPANY_BY_SLUG = Object.fromEntries(
  COMPANIES.map((c) => [c.slug, c])
);
