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

import lvmh from "./lvmh.js";
import ferrari from "./ferrari.js";
import meta from "./meta.js";
import toast from "./tost.js";
import airliquide from "./air-liquide.js";
import intuitivesurgical from "./isrg.js";
import spacex from "./spacex.js";
import americanExpress from "./amex.js";
import amazon from "./amazon.js";
import amd from "./amd.js";
import anet from "./anet.js";
import amtm from "./amtm.js";
import asml from "./asml.js";
import axon from "./axon.js";

// L'ordre du tableau = l'ordre d'affichage sur la page d'accueil.
export const COMPANIES = [
  axon,
  asml,
  amtm,
  anet,
  amd,
  amazon,
  lvmh,
  ferrari,
  meta,
  toast,
  airliquide,
  intuitivesurgical,
  spacex,
  americanExpress,
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
