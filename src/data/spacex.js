// ============================================================
//  DOSSIER : Space Exploration Technologies Corp. (SPCX)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "spacex",                   // identifiant d'URL : /dossier/spacex
  ticker: "SPCX",
  name: "Space Exploration Technologies Corp.",
  exchange: "Nasdaq",
  sector: "Aérospatiale, Connectivité LEO & IA",
  initials: "SX",                   // affiché dans la pastille
  tagline: "Conglomérat orbital fondé par Elon Musk : lancement réutilisable, connectivité Starlink et IA (xAI), réuni dans la plus grande IPO de l'histoire.",
  riskScore: 33,                    // score du rapport de risque (ou null)
  riskLabel: "Risque élevé",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "spacex.html",
  updated: "2026-06",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

SpaceX (Space Exploration Technologies Corp.) est un **conglomérat verticalement intégré** fondé par **Elon Musk en 2002**, coté au Nasdaq depuis le **12 juin 2026** sous le ticker **SPCX**. Ce qui était à l'origine un constructeur de fusées est devenu, après l'absorption de **xAI** (février 2026), un ensemble à trois segments aux économies radicalement différentes. Le chiffre d'affaires consolidé 2025 atteint **18,7 milliards $** (+33% a/a), mais le groupe affiche une **perte nette de 4,94 milliards $** — entièrement creusée par l'IA.

Le modèle repose sur une **logique de subvention croisée** : le segment spatial (Falcon, Starship) construit l'infrastructure, **Starlink génère le profit**, et le segment IA (xAI) consomme massivement du capital en pariant sur une monétisation future.

## Principaux produits et services

**Connectivity — Starlink (61% du CA)** : constellation de plus de 9 600 satellites en orbite basse (LEO) fournissant un accès internet haut débit à **10,3 millions d'abonnés** dans 164 pays. Tarification par paliers : grand public (~120 $/mois), entreprise/maritime (5 000 $+/mois), gouvernement/défense.

**Space — Lancement (22% du CA)** : Falcon 9 (réutilisable, ~67 M$/lancement, 99%+ de succès, plus de 620 lancements orbitaux), Starship (en développement, ~15 Mds$ investis), Starshield (défense).

**AI — SpaceXAI / xAI (17% du CA)** : Grok (IA conversationnelle), monétisation des données de X (ex-Twitter), centres de données COLOSSUS, contrats de calcul.

## Clients, fournisseurs, concurrents

**Clients** : abonnés grand public Starlink, entreprises maritimes/aériennes, gouvernements (NASA, Department of Defense, agences étrangères), opérateurs de satellites pour le lancement, clients entreprise de Grok/xAI.

**Fournisseurs** : fabricants de composants aérospatiaux et électroniques, fournisseurs de silicium et GPU (Nvidia — également investisseur dans xAI), fournisseurs d'énergie pour les data centers, sous-traitants de matériaux.

**Concurrents** : **Amazon Kuiper** (connectivité LEO, menace directe sur l'ARPU Starlink), **Rocket Lab / Blue Origin / ULA** (lancement), **OpenAI / Anthropic / Google DeepMind** (IA), AST SpaceMobile (connectivité directe satellite-mobile).

## Modalités contractuelles

Le modèle Starlink est **transactionnel et par abonnement** : revenus récurrents mensuels, faibles barrières de sortie côté grand public, contrats pluriannuels côté entreprise/gouvernement. Le segment lancement fonctionne par **contrats de mission** (gouvernementaux et commerciaux). Le segment IA monétise par **abonnement, licences et contrats de calcul**. La valeur du groupe ne tient pas à des contrats take-or-pay de long terme mais à la **domination technologique** (réutilisabilité, constellation LEO) et au **récit d'infrastructure IA orbitale**.

> **Note de prudence** : SPCX est cotée depuis le 12 juin 2026 seulement — l'historique boursier est très court. La structure consolidée mêle un cœur rentable (Starlink) et un gouffre (xAI). Toute analyse doit lire les chiffres **par segment**, jamais au seul niveau consolidé. Premiers résultats publics attendus le **2 septembre 2026**.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de SpaceX dans la chaîne de valeur

SpaceX occupe une position rare de **producteur-opérateur verticalement intégré** : il conçoit et fabrique ses propres fusées et satellites, opère sa propre constellation, et — depuis l'absorption de xAI — exploite sa propre infrastructure de calcul IA. Cette intégration est à la fois sa force (contrôle des coûts, réutilisabilité) et sa fragilité (intensité capitalistique extrême).

### Amont — Intrants

**Matériaux & composants aérospatiaux** : alliages, propulseurs (méthalox pour Starship), électronique embarquée, fournisseurs spécialisés en aérospatiale.

**Silicium & calcul IA** : **Nvidia** (GPU, également co-investisseur dans le tour de 20 Mds$ de xAI), fournisseurs de serveurs et d'infrastructure data center pour COLOSSUS.

**Énergie** : approvisionnement électrique massif pour les centres de données xAI — poste de coût critique et croissant.

---

### SpaceX — Production, opérations et calcul

**Production aérospatiale** : usines de Falcon 9, Starship (Starbase, Texas), fabrication de satellites Starlink en interne.

**Opérations orbitales** : réseau de plus de 9 600 satellites LEO, stations sol, gestion de constellation, ~620 lancements orbitaux cumulés.

**Infrastructure IA** : centres de données COLOSSUS, entraînement de Grok, ~12,7 Mds$ de capex IA en 2025 (et 7,7 Mds$ rien qu'au T1 2026, soit ~76% du capex groupe).

---

### Aval — Clients finaux

**Grand public** : 10,3 M d'abonnés Starlink dans 164 pays (haut débit résidentiel, mobilité).

**Entreprises & maritime/aérien** : forfaits premium (5 000 $+/mois), connectivité en zones reculées.

**Gouvernements & défense** : NASA (missions habitées, cargo), DoD (Starshield), agences spatiales étrangères, contrats de lancement commerciaux.

**Clients IA** : entreprises utilisant Grok/xAI, contrats de calcul, monétisation des données de la plateforme X.

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                →   SPACEX (INTÉGRÉ)          →   CLIENTS FINAUX
Matériaux aérospatiaux   Fabrication fusées/satellites  Abonnés Starlink (10,3 M)
Nvidia (GPU/calcul)      Constellation LEO (9 600 sat.) Entreprises & gouvernements
Énergie (data centers)   COLOSSUS / xAI (Grok)          NASA, DoD, opérateurs sat.
(fournisseurs            Lancement réutilisable         Clients IA / entreprise
 spécialisés)            (Falcon 9, Starship)           (marché mondial)
\`\`\`

**Le pari central** : SpaceX parie que l'intégration verticale — du lancement à la constellation jusqu'au calcul IA orbital — créera un fossé que ni un opérateur télécom, ni un lanceur, ni un laboratoire IA seul ne peuvent répliquer. Mais cette intégration concentre aussi un **risque capitalistique colossal** sur une seule entité.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — Exercice 2025

**Avertissement méthodologique** : SpaceX consolide xAI depuis février 2026 seulement. Les chiffres 2025 incluent l'IA en partie, et le T1 2026 reflète le premier trimestre plein de consolidation xAI — d'où un creusement séquentiel des pertes. Lire impérativement **par segment**.

### Structure à trois segments (2025)

| Segment | CA 2025 | Rés. opér. 2025 | EBITDA aj. | Poids CA |
|---|---|---|---|---|
| Connectivity (Starlink) | 11,4 Mds$ | **+4,42 Mds$** | 7,17 Mds$ | ~61% |
| Space (lancement) | 4,09 Mds$ | -657 M$ | +653 M$ | ~22% |
| AI (xAI / SpaceXAI) | 3,20 Mds$ | **-6,355 Mds$** | -609 M$ | ~17% |
| **Consolidé** | **18,7 Mds$** | **-2,6 Mds$** | **+6,58 Mds$** | 100% |

---

### Détail T1 2026 (trimestre clé — 1er plein de consolidation xAI)

| Segment | CA | Rés. opér. | EBITDA aj. |
|---|---|---|---|
| Connectivity (Starlink) | 3,26 Md$ | +1,19 Md$ | +2,09 Md$ |
| Space (lancement) | 619 M$ | -662 M$ | -351 M$ |
| AI (SpaceXAI) | 818 M$ | -2,469 Md$ | -609 M$ |

---

### Répartition géographique

Présence mondiale via Starlink (**164 pays**), mais le siège de revenus reste concentré sur les marchés développés (Amérique du Nord en tête). Pas de ventilation géographique détaillée publiée à ce stade — la S-1 met l'accent sur la couverture par nombre de pays plutôt que par CA régional.

---

### Profil de marge et dynamique

- **Marge brute / EBITDA consolidé** : EBITDA ajusté 6,58 Mds$ (marge ~35%), mais qui **masque la perte nette** de 4,94 Mds$
- **Starlink** : marge opérationnelle ~39%, marge EBITDA ~63% — **véritable centre de profit**, +86% d'EBITDA ajusté entre 2024 et 2025, abonnés doublés (4,5 M → 10,3 M)
- **Space** : déficitaire au résultat opérationnel (R&D Starship ~15 Mds$ cumulés) mais EBITDA positif sur l'année — économie Falcon déjà extraordinaire (réutilisabilité)
- **AI** : **gouffre** — perte opérationnelle 6,355 Mds$ sur 2025, capex 12,7 Mds$ ; c'est ce segment qui fait basculer le consolidé en perte nette

**Lecture** : SPCX est valorisé comme une **histoire d'infrastructure IA**, mais sa seule rentabilité réelle vient de la connectivité. Le marché paie pour l'optionnalité Starship + IA, pas pour les flux actuels.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Réutilisabilité orbitale — un moat technologique unique
SpaceX a **résolu la réutilisabilité** : un booster Falcon 9 a démontré jusqu'à 34 revols, à ~67 M$ le lancement, avec un taux de succès de 99%+ sur plus de 620 lancements. Aucun concurrent occidental n'approche ce coût orbital. C'est le **fossé le plus tangible et le plus difficile à répliquer** — il a pris deux décennies et des milliards de R&D à construire.

### 2. Constellation LEO et avance Starlink — effet de réseau et d'échelle
Avec **plus de 9 600 satellites déployés** et **10,3 millions d'abonnés**, Starlink dispose d'une avance massive en orbite basse. Le spectre, les créneaux orbitaux et la base installée constituent une barrière à l'entrée réelle. Starlink génère 4,42 Mds$ de résultat opérationnel — le seul segment qui finance tout le reste.

### 3. Intégration verticale — du lancement au satellite
SpaceX **lance ses propres satellites**, ce qui lui donne un avantage de coût structurel sur tout opérateur LEO dépendant de lanceurs tiers (dont Kuiper, en partie). Cette boucle lancement → constellation → revenus est unique.

### 4. Le « capital Elon Musk » — moat de capital et de récit
La capacité de SpaceX à **lever des montants colossaux** (plus de 10 Mds$ en VC, 75 Mds$ levés à l'IPO, tour xAI de 20 Mds$ avec Nvidia) tient en grande partie au récit Musk et à son track record (Tesla, IPO record). C'est un actif réel — **mais incarné par une personne**, donc un risque de dépendance majeur.

### 5. Réutilisabilité étendue — option Starship
Starship vise 100 tonnes en LEO en configuration totalement réutilisable, avec une réduction potentielle de 99% du coût de lancement. Si l'engin réussit (12ᵉ test en cours, livraisons de charges visées au 2ᵉ semestre 2026), le **changement d'échelle** serait massif — c'est l'option haussière clé.

## Positionnement vs concurrence

| Critère | SpaceX | Amazon Kuiper | Rocket Lab |
|---|---|---|---|
| Réutilisabilité | Leader absolu | En rattrapage | Partielle (Neutron) |
| Constellation LEO | 9 600 sat. / 10,3 M ab. | En déploiement | N/A |
| Échelle de lancement | ~620 vols, dominante | Dépendant de tiers | Faible volume |
| Rentabilité (cœur) | Starlink très rentable | Déficitaire (montée) | Déficitaire |
| Optionnalité IA | xAI / COLOSSUS | AWS (séparé) | Aucune |

## Pouvoir de négociation

- **Vis-à-vis des clients Starlink** : **Modéré** — abonnés grand public peu captifs (switching facile), mais clients entreprise/gouvernement plus liés ; l'ARPU subit déjà une pression (99 $ → 66 $)
- **Vis-à-vis des clients lancement** : **Élevé** — quasi-monopole occidental sur le lancement à bas coût ; NASA et DoD dépendent largement de SpaceX
- **Vis-à-vis des fournisseurs** : **Modéré à élevé** — intégration verticale réduit la dépendance, mais le calcul IA crée une nouvelle dépendance forte aux GPU (Nvidia)`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — pas de pair direct coté (conglomérat unique)

| Société | Code | Cap. boursière | Profil | Rentabilité | Valorisation |
|---|---|---|---|---|---|
| **SpaceX** | **SPCX US** | **~2,65 T$** | **Conglomérat orbital + IA, déficitaire** | **Perte nette -4,9 Mds$** | **PE n.s. · Cap/CA ~142×** |
| Rocket Lab | RKLB US | ~30 Mds$ | Lancement (échelle ≪) | Déficitaire | EV/CA élevé |
| AST SpaceMobile | ASTS US | ~25 Mds$ | Connectivité directe-mobile | Pré-revenu | Spéculatif |
| EchoStar | SATS US | ~5 Mds$ | Détient ~3% de SpaceX | Variable | Décoté |
| Comparaison télécom LEO | — | — | Multiple sectoriel | — | <5× le CA |

*Données estimatives sur la base des cours et publications disponibles à juin 2026. Cap/CA ~142× = ~2,65 T$ / 18,7 Mds$. À affiner sur la S-1 directe.*

---

### Analyse comparative

**SpaceX — l'objet financier non comparable**
SpaceX ne se compare à **aucun pair coté direct** : c'est à la fois un lanceur, un opérateur télécom LEO et un laboratoire IA. Sa valorisation (~2,65 T$, ~142× le CA, ~403× l'EBITDA ajusté) n'a de sens que si l'on croit au récit d'**infrastructure IA à 28,5 T$ de TAM revendiqué**, encore largement à prouver. Le seul segment rentable (Starlink, valorisé sur un multiple télécom) vaudrait bien moins seul. La cible analyste moyenne est ~164 $ (range 63–227 $) — une dispersion qui traduit l'incertitude extrême.

**Amazon Kuiper — le concurrent que les optimistes sous-estiment**
Kuiper, adossé au bilan colossal d'Amazon et à AWS, monte en puissance sur la connectivité LEO. Sa pression sur l'ARPU Starlink (déjà tombé de 99 $ à 66 $) est le risque concurrentiel le plus tangible sur le cœur de profit du groupe.

**Rocket Lab — le comparateur de lancement**
RKLB illustre l'échelle d'un lanceur pur, sans commune mesure avec les ~620 vols de SpaceX. Utile comme proxy de lancement, mais ne capte ni Starlink ni l'IA.

---

### Le ratio qui compte : somme des parties et exécution
SpaceX se juge en **somme des parties** : Starlink (rentable, valorisé télécom-plus), Space (option Starship), AI (pari à 28,5 T$ de TAM). Les multiples classiques (PE, EV/EBIT) sont **peu informatifs** tant que le consolidé est déficitaire. Le vrai débat : la prime IA est-elle justifiée, ou paie-t-on un récit non encore validé commercialement ?`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats 2025 & T1 2026 — Analyse (1ère publication auditée)

### Chiffre d'affaires & rentabilité 2025

| Indicateur | 2025 | 2024 | Écart |
|---|---|---|---|
| CA consolidé | 18,7 Mds$ | 14,02 Mds$ | **+33%** |
| Résultat net | **-4,94 Mds$** | +791 M$ (standalone) | **-5,7 Mds$** |
| EBITDA ajusté | 6,58 Mds$ | — | Positif mais trompeur |
| Rés. opér. Starlink | +4,42 Mds$ | — | +86% EBITDA aj. |
| Perte opér. IA | -6,355 Mds$ | — | Le gouffre |

**Lecture** : c'est la **première publication auditée** de SpaceX. Le CA croît fortement (+33%), mais le groupe bascule en **perte nette de 4,94 Mds$**, un renversement de 5,7 Mds$ vs le profit standalone 2024 — **entièrement imputable à l'absorption de xAI**.

---

### Détail T1 2026

- **CA** : +15% a/a — décélération nette vs +33% annuel
- **Perte nette trimestrielle** : ~-4,28 Md$ (vs -528 M$ le trimestre précédent) — creusement dû au 1er trimestre plein de consolidation xAI
- **Starlink** : 3,26 Md$ de CA, +1,19 Md$ de résultat opérationnel — moteur intact
- **Space** : 619 M$, -662 M$ (R&D Starship)
- **AI** : 818 M$, -2,469 Md$ — capex 7,7 Mds$ (76% du capex groupe)

---

### Bilan — points de vigilance

- **Dette long terme** : **29,1 Mds$** à fin mars 2026 — niveau élevé, à surveiller au regard de l'intensité capex
- **Capex IA** : 12,7 Mds$ en 2025, trajectoire ascendante — la génération de FCF est sous tension
- **Trésorerie** : renforcée par l'IPO (~75 Mds$ levés) — coussin de liquidité significatif post-cotation
- **Subvention croisée** : Starlink finance xAI — tient tant que la connectivité marge

---

### Perspectives et guidance

- **Premiers résultats publics** : **2 septembre 2026** — premier ancrage fondamental réel (croissance abonnés Starlink, capex xAI, cadence Starship deviennent des chiffres publiés, non plus des projections S-1)
- **Starship** : livraisons de charges visées au 2ᵉ semestre 2026 — catalyseur majeur
- **Récit de croissance** : objectifs ambitieux (économie lunaire, Starlink Mobile, calcul IA orbital, monétisation X) — mais peu d'engagements chiffrés fermes

---

### Réaction du marché

L'IPO du 12 juin 2026 (135 $) a **bondi de +19% le jour 1** (clôture 160,95 $), puis le titre a poursuivi sa hausse vers ~202 $ (clôture du 16 juin, +4,83%, 3ᵉ séance de hausse). L'inclusion MSCI (T+1) et un flottant limité soutiennent le cours. Mais l'expiration prochaine des lock-ups (option de surallocation de 83,3 M d'actions exerçable dès le 15 juin) crée une **pression vendeuse à venir**. Le marché tarife une exécution quasi parfaite — toute déception au premier earnings (2 sept.) comprimerait brutalement le multiple.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Contexte
SpaceX n'a **pas encore tenu de conférence de résultats publique** : la cotation date du 12 juin 2026 et le **premier earnings call est prévu le 2 septembre 2026**. L'analyse ci-dessous porte donc sur le **discours de roadshow IPO**, la S-1 et les interventions publiques de Musk et de la direction.

### Ton général — roadshow & S-1 (2026)

**Roadshow IPO (juin 2026)** : Ton de **conquête et de récit**. Le pitch central recadre SpaceX d'un « constructeur de fusées » vers une **« infrastructure IA orbitale »** — un TAM revendiqué de 28,5 T$ dont 93% en IA. L'ajout de l'accord Google (divulgué pendant le roadshow) a permis de **plus que doubler les projections de CA 2026**, alimentant l'enthousiasme.

**S-1 (mai 2026)** : La prose du prospectus assume la **logique de subvention croisée** (Starlink finance xAI) et reconnaît explicitement les **risques de gouvernance** — les investisseurs n'auront « pas les mêmes protections » qu'ailleurs, du fait du contrôle de Musk.

---

### Priorités affichées du management

**1. Le récit IA d'abord** — La narration place l'IA orbitale au centre. Starlink est présenté comme le **backbone de distribution** d'une stratégie de calcul plus large (xAI / COLOSSUS).

**2. La domination du lancement** — Réutilisabilité, Starship, cadence : le management martèle l'avance de coût orbital comme socle défensif.

**3. La monétisation de Starlink** — Passage de la conquête (croissance abonnés) à l'**extraction de valeur** : hausse tarifaire (mai 2026), paliers premium, Starlink Mobile.

**4. Les marchés futurs** — Économie lunaire, fabrication en orbite, tourisme spatial, minage d'astéroïdes : un discours d'**optionnalité maximale**, volontairement spéculatif.

---

### Analyse du sentiment

- **Confiance** : Très élevée, **promotionnelle** — objectifs spectaculaires (TAM 28,5 T$, trillionnaire Musk évoqué). Atout narratif **et** signal de vigilance.
- **Transparence** : Bonne sur la structure (segments clairs, subvention croisée assumée), plus floue sur le **calendrier de retour au bénéfice net** — le management parle d'EBITDA ajusté et d'optionnalité, pas d'un chemin chiffré vers le profit GAAP.
- **Gouvernance** : Reconnaissance honnête (dans la S-1) de l'absence de contre-pouvoir actionnarial — ce qui a déclenché le **boycott de plusieurs fonds de gouvernance**.

> **À lire entre les lignes** : SpaceX vend une **trajectoire d'infrastructure**, pas des résultats courants. Le 2 septembre 2026 sera le **premier test fondamental réel** — le moment où les projections S-1 deviennent des chiffres vérifiables.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Elon Musk — Fondateur, CEO, CTO et Président du conseil

**Track record** : Musk a fondé ou dirigé plusieurs entreprises transformationnelles — **Tesla** (n°1 mondial du véhicule électrique), **PayPal** (cofondateur), **SpaceX** (leader mondial du lancement réutilisable), **xAI/X**. SpaceX sous sa direction a **résolu la réutilisabilité orbitale**, déployé la plus grande constellation LEO de l'histoire (9 600+ satellites, 10,3 M d'abonnés) et réalisé la **plus grande IPO jamais vue** (~75 Mds$ levés).

**Cumul des fonctions** : Musk est simultanément **CEO, CTO et président du conseil** — une concentration de pouvoir extrême.

**Contrôle & alignement** : via une structure **dual-class** (actions B à 10 voix), Musk détient **~82–85% des droits de vote pour seulement ~42% du capital économique**. Il ne peut **pas être révoqué** par les actionnaires publics, quel que soit leur poids. Alignement financier fort, mais **contrôle quasi-absolu** sans contre-pouvoir.

---

### Équipe & gouvernance

L'absorption de xAI (février 2026, valorisée ~250 Mds$, après un tour de 20 Mds$ avec Nvidia notamment) a transformé SpaceX en conglomérat IA. La gouvernance reste **structurée autour de Musk** : la S-1 reconnaît elle-même que les investisseurs n'auront « pas les mêmes protections » qu'ailleurs. Plusieurs **fonds de gouvernance ont boycotté** l'IPO pour cette raison.

---

### Allocation du capital — l'enjeu central

| Décision | Lecture |
|---|---|
| Réinvestissement Starlink → xAI | Subvention croisée : finance le pari IA |
| Acquisition xAI (~250 Mds$, fév. 2026) | Pari transformationnel all-stock |
| Capex IA 12,7 Mds$ (2025) | Intensité extrême, FCF sous tension |
| R&D Starship ~15 Mds$ cumulés | Option long terme, dépassement de budget |
| IPO ~75 Mds$ levés | Coussin de liquidité record |

**Tendance** : allocation **agressive et capitalistiquement intensive**, orientée vers l'optionnalité long terme (IA, Starship) au détriment du bénéfice courant. Le ROE/ROIC consolidé est **négatif** (groupe déficitaire) — la qualité de l'allocation ne pourra être jugée qu'**a posteriori**, sur la monétisation de l'IA et la réussite de Starship.

---

### Signaux d'alerte

- **Concentration du pouvoir** : CEO + CTO + président, ~82–85% des votes, non révocable — **aucun contre-pouvoir actionnarial**
- **Parties liées** : locations Valor évoquées >20 Mds$, fusion Tesla-SpaceX évoquée — transactions entre entités Musk à surveiller de près
- **Comportement promotionnel** : objectifs spectaculaires (TAM 28,5 T$), récit de trillionnaire — à pondérer
- **Risque clé homme total** : SpaceX **est** le pari Elon Musk, avec une dépendance encore plus extrême que dans la plupart des sociétés fondateur-dirigées
- **Type** : **fondateur-visionnaire** de très haut niveau — archétype recherché pour un pari d'infrastructure de rupture, mais qui concentre un risque de gouvernance majeur`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours

### Contexte
SPCX est cotée **depuis le 12 juin 2026 seulement** — l'historique boursier est **extrêmement court**. Avant l'IPO, la « valeur » se lisait via les **tours privés et marchés secondaires** (Hiive ~832 $/action plus tôt en 2026, tenders ~800 Mds$ → 1,25 T$ → 1,77 T$ à l'IPO). Le titre est par nature **événementiel et très volatil**.

### Hausses significatives

**12 juin 2026 — IPO record (+19%)** : Introduite à 135 $ (valorisation 1,77 T$), l'action a ouvert à 150 $, atteint 176,52 $ en séance et clôturé à 160,95 $, soit **+19,2%** — la plus grande IPO de l'histoire (~75 Mds$ levés), avec ~30% du flottant réservé au retail (inhabituel).

**13–16 juin 2026 — Poursuite de la hausse** : Le titre a grimpé vers ~202 $ au 16 juin (clôture 201,80 $, +4,83%), dépassant Amazon en valeur, soutenu par l'**inclusion MSCI (T+1)**, un **flottant limité**, et l'enthousiasme retail. Plus haut 52 semaines : 225,64 $ (16 juin).

**Roadshow (juin 2026) — Effet « accord Google »** : La divulgation d'un accord avec Google a **plus que doublé les projections de CA 2026**, galvanisant la demande.

---

### Baisses / risques de baisse

**Repli depuis les pics privés** : Les perpétuels liés à SPCX (Hyperliquid) ont culminé >220 $ en mai 2026 avant de refluer — signe d'une **spéculation pré-IPO surchauffée** qui s'est partiellement dégonflée.

**Mur du flottant à venir** : L'**option de surallocation** (83,3 M d'actions au prix IPO de 135 $) devient exerçable dès le 15 juin pour 30 jours, et l'**expiration des lock-ups** créera une pression vendeuse mécanique — risque baissier identifié par plusieurs analystes.

**Premier earnings (2 sept. 2026)** : Premier vrai test fondamental. Le marché tarife une exécution parfaite ; **toute déception comprimerait brutalement le multiple** (~142× le CA).

---

### Facteurs structurels

- **Prime « Elon Musk »** : le titre se paie sur la crédibilité du fondateur et le récit d'infrastructure IA
- **Récit IA vs réalité déficitaire** : tension permanente entre TAM 28,5 T$ revendiqué et perte nette de 4,9 Mds$
- **Flottant limité & flux indiciels** : inclusion MSCI et appétit ETF soutiennent, mais amplifient la volatilité
- **Sensibilité aux jalons** : chaque test Starship, chiffre d'abonnés Starlink ou annonce xAI peut faire bouger le titre — profil **événementiel** par nature`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement majeur
SpaceX est **déficitaire** (perte nette 2025 de 4,94 Mds$), avec une structure **bouleversée par la consolidation de xAI** depuis février 2026 et un historique public d'à peine quelques jours. Toute projection de BPA est **hautement spéculative** : le périmètre, la dette (29,1 Mds$), le capex IA et le nombre d'actions évoluent rapidement. Les scénarios ci-dessous sont **indicatifs** — des chiffres plus serrés exigeraient un modèle pro-forma bâti sur la S-1 directe.

### Hypothèses de modélisation

**Chiffre d'affaires** :
- Starlink (cœur) : croissance soutenue (+50% en 2025), mais ARPU sous pression (99 $ → 66 $) ; abonnés 10,3 M et croissants
- Space : croissance lente (+8%), montée en charge de Starship au 2ᵉ semestre 2026
- AI : base faible (3,2 Mds$) mais croissance potentielle forte si monétisation Grok/calcul ; un PM cité évoque ~200 Mds$ de CA groupe d'ici 2030 (scénario très optimiste)
- Décélération T1 2026 (+15% vs +33% annuel) à surveiller

**Marges & pertes** :
- Le segment IA reste le **principal foyer de pertes** (capex 12,7 Mds$+) — le retour au bénéfice net dépend de la monétisation IA et/ou d'un ralentissement du capex
- Starlink et Space (hors R&D Starship) sont profitables au niveau opérationnel

**Coûts financiers & dilution** :
- Dette 29,1 Mds$ → charge d'intérêts significative
- Dilution post-IPO (555,6 M d'actions émises) + surallocation 83,3 M

---

### Scénarios de BPA (indicatifs)

| Exercice | Scénario | BPA estimé | Commentaire |
|---|---|---|---|
| 2025 (réalisé) | — | **perte (-4,9 Mds$ net)** | xAI bascule le groupe en perte |
| 2026E | Base | **perte (BPA négatif)** | T1 déjà à -4,28 Md$ net ; capex IA massif |
| 2027E | Base | **perte réduite à seuil** | Dépend de la monétisation IA et de la cadence Starship |
| 2028E | Base | **bascule possible vers le profit** | Si IA monétise + Starlink marge + capex normalise |

### Sensibilité

- **Scénario haussier** : monétisation IA rapide (contrats calcul, Grok), Starship opérationnel, Starlink résilient → retour au profit plus tôt, justifiant les cibles hautes (jusqu'à 227 $)
- **Scénario de base** : pertes prolongées 2026-2027, valorisation portée par la **somme des parties** et le récit, pas par le BPA — bascule vers 2028
- **Scénario baissier** : capex IA non maîtrisé, ARPU Starlink comprimé par Kuiper, Starship retardé → pertes durables, dilution, dégonflement de la prime (cible basse 63 $)

**Conclusion** : SPCX ne s'évalue **pas au BPA** à ce stade. La thèse repose sur la **monétisation future de l'IA** et la **réussite de Starship**, financées par le cash de Starlink. Le BPA est un indicateur retardé ; l'**EBITDA par segment**, le **capex IA** et la **dette nette** sont les vrais juges de paix d'ici 2028.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Monétisation de Starlink — passage à l'extraction de valeur** : 10,3 M d'abonnés, +50% de CA, hausse tarifaire (mai 2026), paliers premium et Starlink Mobile. Le cœur de profit (4,42 Mds$ de résultat opérationnel, marge ~39%) est un actif rare qui finance tout le reste.

**2. Réutilisabilité & Starship — avance unique sur le coût orbital** : Falcon 9 a démontré 34 revols à 67 M$ ; Starship vise 100 t en LEO totalement réutilisable et une réduction de 99% du coût de lancement. Livraisons de charges visées au 2ᵉ semestre 2026 — un **changement d'échelle** du modèle si l'engin réussit.

**3. Optionnalité IA (xAI / COLOSSUS)** : Le récit d'**infrastructure orbitale IA** (TAM revendiqué 28,5 T$) offre un upside massif si la monétisation se concrétise (Grok, contrats de calcul, données X). L'accord Google a déjà plus que doublé les projections 2026.

**4. Domination du lancement** : ~620 vols, 99%+ de succès, quasi-monopole occidental sur le lancement à bas coût — NASA et DoD en dépendent largement.

**5. Demande retail & inclusion indicielle** : Forte appétence retail (jusqu'à 30% de l'IPO), inclusion MSCI (T+1), flottant limité → flux acheteurs malgré la gouvernance.

**6. Capacité de financement** : ~75 Mds$ levés à l'IPO + accès au capital exceptionnel — coussin pour financer Starship et xAI.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents

**1. Pertes IA structurelles** : xAI a perdu **6,355 Mds$ au niveau opérationnel en 2025**, faisant basculer le groupe en perte nette de 4,9 Mds$. Starlink **subventionne le gouffre**. Si l'ARPU Starlink se comprime (concurrence Kuiper), le financement interne de l'IA se fragilise.

**2. Gouvernance verrouillée** : Musk détient ~82–85% des votes pour ~42% du capital, cumule CEO/CTO/président, et est **non révocable**. Locations Valor >20 Mds$, fusion Tesla-SpaceX évoquée. **Aucun contre-pouvoir** — d'où le boycott de fonds de gouvernance.

**3. Valorisation extrême** : ~2,65 T$ pour un groupe déficitaire, **~142× le CA**, ~403× l'EBITDA ajusté. Toute déception comprime brutalement le multiple. Le cœur rentable (Starlink) vaudrait bien moins seul.

### Analyse pré-mortem
Que se passe-t-il si SPCX vaut 90 $ dans 18 mois ? Scénario : monétisation IA décevante, capex xAI non maîtrisé, ARPU Starlink érodé par Kuiper, Starship retardé, **mur du flottant** (surallocation + lock-ups) créant une pression vendeuse au moment où le premier earnings (2 sept.) déçoit. La prime « Musk » se dégonfle faute de preuve de rentabilité.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le marché oscille entre euphorie retail (cible 227 $) et scepticisme « valorisation stupide » (cible 63 $). La vérité est peut-être que SPCX est une **option binaire de très long terme** sur deux paris simultanés — Starship ET monétisation IA — valorisée comme si les deux étaient déjà gagnés. Les bulls extrapolent le génie d'ingénierie de Musk sans tarifer le **risque de gouvernance et le gouffre IA** ; les bears sous-estiment la valeur réelle de Starlink. Le risque/rendement est **binaire et incertain** — à dimensionner comme une option, pas comme une conviction.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### EBITDA ajusté vs perte nette GAAP — RISQUE ÉLEVÉ
C'est le signal le plus important. SpaceX met en avant un **EBITDA ajusté positif de 6,58 Mds$** alors que le résultat GAAP est une **perte nette de 4,94 Mds$**. L'ajustement exclut amortissements, charges financières, rémunération en actions et une partie des pertes.

**À surveiller** : l'écart entre EBITDA ajusté et résultat GAAP, et la **nature récurrente** des ajustements. Un EBITDA ajusté qui « gomme » structurellement le gouffre xAI est un signal de **présentation flatteuse de la rentabilité**.

### Comptabilisation et consolidation de xAI — RISQUE ÉLEVÉ
L'absorption de xAI (all-stock, ~250 Mds$, février 2026) introduit un **goodwill et des incorporels considérables**, ainsi qu'un changement de périmètre qui rend les comparaisons historiques peu fiables.

**À surveiller** : montant du goodwill xAI, **tests de dépréciation** (un pari IA qui déçoit pourrait forcer une dépréciation massive), et hypothèses de valorisation (250 Mds$ pour un segment perdant 6,35 Mds$/an).

### Parties liées — RISQUE ÉLEVÉ
Structure Musk omniprésente : **locations Valor évoquées >20 Mds$**, **fusion Tesla-SpaceX évoquée**, tour xAI avec des entités liées. L'écosystème d'entreprises Musk multiplie les transactions entre parties liées.

**À surveiller** : annexes de la S-1 et futurs 10-Q sur les transactions inter-entités Musk, et leur équité pour l'actionnaire minoritaire.

### Capex et capitalisation — RISQUE ÉLEVÉ
Capex IA de **12,7 Mds$ en 2025** (7,7 Mds$ au seul T1 2026, ~76% du capex groupe), R&D Starship ~15 Mds$ cumulés.

**À surveiller** : la part de R&D/capex **capitalisée vs passée en charges**, et la **conversion EBITDA → FCF** une fois capex et intérêts pris en compte. Un FCF flatté par des charges capitalisées serait un signal.

### Dette & engagements — RISQUE ÉLEVÉ
**Dette long terme 29,1 Mds$** à fin mars 2026.

**À surveiller** : le ratio dette nette/EBITDA, les covenants, l'échéancier, et la capacité à financer le gouffre IA sans dilution ou endettement supplémentaires excessifs.

### Information sectorielle — RISQUE MODÉRÉ
La S-1 fournit une ventilation à 3 segments (utile), mais la **subvention croisée** (Starlink → xAI) peut masquer la vraie économie de chaque ligne au niveau consolidé.

**À surveiller** : cohérence des allocations inter-segments (coûts partagés, prix de transfert internes).

### Rémunération en actions (SBC) & dilution — RISQUE MODÉRÉ À ÉLEVÉ
IPO de 555,6 M d'actions + surallocation 83,3 M, structure dual-class, tour xAI all-stock.

**À surveiller** : impact de la SBC sur le nombre d'actions dilué et sur tout BPA futur, et concentration du vote (dual-class).

---

### Verdict global
**Risque comptable : ÉLEVÉ — par nature du conglomérat.** SpaceX n'a pas (à ce stade) de fraude identifiée et publie une S-1 auditée détaillée. Mais un **conglomérat déficitaire** mêlant un cœur rentable (Starlink) et un gouffre IA (xAI), financé par dette et dilution, avec une gouvernance verrouillée et des parties liées massives, cumule structurellement les zones de vigilance : EBITDA ajusté, goodwill xAI, capex capitalisé, parties liées Musk. L'investisseur doit suivre les 10-Q de près et **se méfier des métriques « ajustées »**.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Elon Musk et l'équipe SpaceX

### Stratégie et avantage concurrentiel

**1.** Le segment IA (xAI) a perdu 6,355 Mds$ au niveau opérationnel en 2025 et consomme ~76% du capex groupe. **À quel horizon précis** ce segment devient-il cash-flow positif, et quels jalons de monétisation (contrats de calcul, Grok, données X) devons-nous suivre ?

**2.** L'ARPU Starlink est tombé de 99 $ à 66 $/mois. Avec Amazon Kuiper en montée, **comment défendez-vous le pricing** et la marge du seul segment rentable, qui finance tout le reste ?

**3.** Le récit IPO recadre SpaceX en « infrastructure IA orbitale » avec un TAM de 28,5 T$. **Quelle preuve commerciale tangible** (revenus de calcul orbital, clients signés) pouvez-vous montrer aujourd'hui, au-delà du narratif ?

### Allocation du capital et bilan

**4.** Avec une dette long terme de 29,1 Mds$ et un capex IA de 12,7 Mds$/an, **quel ratio dette nette/EBITDA** visez-vous, et quel est votre plafond avant de ralentir les investissements xAI ?

**5.** À quel **horizon précis** anticipez-vous un retour au **bénéfice net GAAP positif** (pas seulement un EBITDA ajusté) ? Quels jalons trimestriels surveiller ?

**6.** Starship a coûté ~15 Mds$ (au-delà du budget initial). **Quel est le seuil de rentabilité** de Starship, et que se passe-t-il si les livraisons de charges glissent au-delà de 2026 ?

**7.** La valorisation de xAI à 250 Mds$ pour un segment perdant 6,35 Mds$/an : **sur quelles hypothèses** repose-t-elle, et quel risque de dépréciation du goodwill anticipez-vous ?

### Exécution opérationnelle

**8.** Le capex IA a atteint 7,7 Mds$ au seul T1 2026. **Quelle est la trajectoire de capex** xAI sur 2026-2028, et à partir de quand la monétisation couvre-t-elle ce capex ?

**9.** Quelle est la **part fixe vs variable** des coûts du segment IA, et quel serait l'impact d'un ralentissement de la demande de calcul sur le seuil de rentabilité ?

**10.** Starlink Mobile et les paliers premium : **quel CA additionnel** et quel gain de marge en attendez-vous d'ici 2028, isolé de la croissance du nombre d'abonnés ?

### Risques et gouvernance

**11.** La structure dual-class vous donne ~82–85% des votes pour ~42% du capital, sans possibilité de révocation. **Quelles protections concrètes** offrez-vous à l'actionnaire minoritaire, au-delà de la reconnaissance du risque dans la S-1 ?

**12.** Les transactions entre parties liées (locations Valor >20 Mds$, fusion Tesla-SpaceX évoquée) : **comment garantissez-vous leur équité** pour l'actionnaire public, et qui les valide indépendamment de vous ?

**13.** L'expiration des lock-ups et la surallocation (83,3 M d'actions) créent une pression vendeuse. **Comment gérez-vous** la transition du flottant sans pénaliser les actionnaires de l'IPO ?

### Vision long terme

**14.** SpaceX **est**, de fait, le pari Elon Musk, avec un cumul de fonctions inédit. Quel est le **plan de succession** et comment l'entreprise survit-elle à votre éventuel retrait ou à la dispersion de votre attention sur vos autres entreprises ?

**15.** Quel est le **risque unique que vous sous-estimez le plus** aujourd'hui dans ce conglomérat, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le récit IA est une promesse, pas un revenu

Les bulls paient ~2,65 T$ (~142× le CA) pour un récit d'**« infrastructure IA orbitale »** et un TAM revendiqué de 28,5 T$ dont 93% en IA. **Problème** : ce segment a généré 3,2 Mds$ de CA pour une **perte opérationnelle de 6,355 Mds$** en 2025. On paie un multiple de pépite IA pour un gouffre qui détruit le résultat consolidé. **Si la monétisation IA déçoit, SPCX n'est qu'un opérateur télécom LEO + un lanceur**, valorisés bien en dessous du cours actuel.

### 2. Starlink subventionne un gouffre — un modèle fragile

Le seul segment rentable (Starlink, +4,42 Mds$ de résultat opérationnel) **finance les pertes de xAI**. Ce modèle de subvention croisée tient tant que l'ARPU Starlink marge. **Mais** l'ARPU est déjà tombé de 99 $ à 66 $, et **Amazon Kuiper** monte en puissance. Si la connectivité se comprime, le financement interne de l'IA s'effondre — et avec une dette de 29,1 Mds$, la marge de manœuvre se réduit.

### 3. La rentabilité réelle est absente — et masquée par l'EBITDA ajusté

SpaceX affiche un **EBITDA ajusté de 6,58 Mds$** mais une **perte nette GAAP de 4,94 Mds$**. **Méfiance** : un conglomérat qui met en avant l'EBITDA ajusté et le récit d'optionnalité, sans calendrier ferme de bénéfice net GAAP, peut masquer une rentabilité courante médiocre. Le T1 2026 (-4,28 Md$ net) montre des pertes qui se **creusent séquentiellement** avec la consolidation xAI.

### 4. Gouvernance verrouillée — l'actionnaire minoritaire n'a aucun recours

Musk détient ~82–85% des votes pour ~42% du capital, cumule **CEO + CTO + président**, et est **non révocable**. La S-1 admet que les investisseurs n'auront « pas les mêmes protections » qu'ailleurs. Locations Valor >20 Mds$, fusion Tesla-SpaceX évoquée : les **parties liées sont massives**. Vous financez la vision sans aucun moyen de la contester si elle déraille — d'où le **boycott de plusieurs fonds de gouvernance**.

### 5. Le concurrent que les bulls sous-estiment : Amazon Kuiper

Adossé au bilan d'Amazon et à AWS, **Kuiper** attaque frontalement la connectivité LEO — précisément le **cœur de profit** qui finance tout. Les bulls extrapolent la domination actuelle de Starlink sans intégrer qu'un géant aussi capitalisé peut **comprimer l'ARPU et les marges** du seul segment qui tient le groupe debout.

### 6. La prime « Elon Musk » est une dépendance totale, pas un moat

SPCX **est** Elon Musk. Toute la valorisation repose sur la foi en sa capacité à réussir simultanément Starship ET la monétisation IA. Mais : (a) le risque clé homme est **total** ; (b) Musk dirige plusieurs entreprises (Tesla, X, xAI) — attention dispersée ; (c) le **comportement promotionnel** (TAM 28,5 T$, trillionnaire évoqué) est un red flag classique. La prime peut se dégonfler vite si un seul pari (Starship ou IA) tourne mal.

### Le scénario catastrophe unique
**Monétisation IA qui ne vient pas + ARPU Starlink comprimé par Kuiper + Starship retardé, simultanément.** Dans ce cas : les pertes se creusent, la dette de 29,1 Mds$ devient un fardeau, une levée dilutive devient nécessaire au pire moment (avec le mur du flottant déjà actif), et la prime Musk s'évapore. La probabilité ? Non négligeable — le titre se paie comme si **les deux paris étaient déjà gagnés**.

### Conclusion short
SpaceX est une **entreprise d'ingénierie d'exception** — mais le titre intègre **l'exécution quasi parfaite de deux paris risqués simultanés** (Starship + monétisation IA), avec un cœur rentable (Starlink) menacé par Kuiper, une gouvernance sans contre-pouvoir et une valorisation extrême (~142× le CA). À ce stade, c'est une **option binaire**, pas un investissement de qualité à conviction. L'écart entre les cibles analystes (63 $ à 227 $) ne mesure pas un upside — il mesure l'**incertitude**.`,
  },
];

export default { ...meta, modules };
