// ============================================================
//  DOSSIER : Meta Platforms, Inc. (META)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "meta",                     // identifiant d'URL : /dossier/meta
  ticker: "META",
  name: "Meta Platforms, Inc.",
  exchange: "Nasdaq",
  sector: "Publicité numérique & Intelligence artificielle",
  initials: "MET",                  // affiché dans la pastille
  tagline: "Géant de la publicité numérique (Facebook, Instagram, WhatsApp) en pleine bascule vers la superintelligence, piloté par Mark Zuckerberg.",
  riskScore: 79,                    // score du rapport de risque (ou null)
  riskLabel: "Risque faible",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "meta.html",
  updated: "2026-07",               // période des données (clôture 1er juillet 2026)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Meta Platforms est le **n°1 mondial de la publicité sur les réseaux sociaux**, fondé en 2004 (sous le nom de Facebook), rebaptisé Meta en 2021. Le chiffre d'affaires 2025 atteint **200,97 milliards $** (+22% a/a), pour un bénéfice net de **60,5 milliards $**. L'entreprise touche **3,56 milliards d'utilisateurs quotidiens** (mars 2026) — près de la moitié de l'humanité.

Le modèle est d'une simplicité radicale et d'une puissance rare : **monétiser l'attention par la publicité ciblée**. ~98% des revenus proviennent de la publicité numérique vendue sur ses applications. La couche d'IA (recommandation de contenu via Reels, ciblage automatisé via Advantage+) transforme un **graphe social inégalé** en marges publicitaires.

Deux segments reportés :
- **Family of Apps (FoA, ~99% du CA)** : Facebook, Instagram, WhatsApp, Messenger, Threads — publicité + revenus annexes
- **Reality Labs (RL, ~1% du CA)** : casques VR/AR (Quest), lunettes IA (Ray-Ban Meta), logiciels — déficitaire structurel

## Principaux produits et services

- **Instagram** : 3 milliards d'utilisateurs mensuels, &gt;50% du CA pub américain — moteur de croissance principal
- **Facebook** : socle historique, toujours massif
- **WhatsApp** : monétisation naissante (business messaging) en forte croissance (+74% sur "Other revenue")
- **Advantage+** : suite publicitaire IA à ~60 Mds$ de run-rate — automatise ciblage, création et enchères
- **Meta AI / Superintelligence Labs** : assistant IA (modèle Muse Spark), pari frontière
- **Reality Labs** : Quest (VR), Ray-Ban Meta & Oakley Meta (lunettes IA), prototype AR Orion

## Clients, fournisseurs, concurrents

**Clients** : &gt;10 millions d'annonceurs (de la PME au grand compte), des marques mondiales aux commerçants locaux. Aucune dépendance à un client unique.

**Fournisseurs** : Nvidia, AMD (GPU) ; TSMC (puces, dont silicium maison MTIA) ; Nebius Group (capacité GPU, deal ~27 Mds$) ; EssilorLuxottica (partenaire lunettes Ray-Ban) ; fournisseurs d'énergie pour data centers.

**Concurrents** : **Alphabet/Google** (publicité, IA, cloud), **TikTok/ByteDance** (vidéo courte, audience jeune), **Amazon** (publicité retail), **Snap, Pinterest, Reddit** (réseaux sociaux), **Apple** (via ATT, contrôle de la donnée mobile), **OpenAI/Anthropic** (course à l'IA frontière).

## Modalités contractuelles

La publicité est un modèle **transactionnel et automatisé** : enchères en temps réel (CPM/CPC), pas de contrats long terme. La valeur vient de la **profondeur des données utilisateurs**, de l'**échelle d'audience** et de l'**efficacité algorithmique** du ciblage. C'est un business à **marge brute ~82%** et marge opérationnelle ~41%, dont la rentabilité dépend du maintien de l'engagement et de la capacité à monétiser via l'IA.

> **Note de prudence** : malgré une rentabilité exceptionnelle du cœur publicitaire, Meta engage un **capex IA massif (125-145 Mds$ en 2026, ~2× 2025)** dont le retour sur investissement n'est pas encore prouvé. Reality Labs creuse par ailleurs une perte cumulée &gt;70 Mds$ depuis 2021.`,
  },
  {
    id: 2,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Effets de réseau — Moat le plus puissant au monde
Avec **3,56 milliards d'utilisateurs quotidiens**, Meta possède le **plus grand graphe social de l'histoire**. La valeur de chaque application croît avec le nombre d'utilisateurs : on reste sur Instagram/WhatsApp parce que tout le monde y est. Ce verrouillage est **structurellement irréplicable** pour un nouvel entrant — il faudrait reconstruire des milliards de relations.

### 2. Moat de données — Le carburant de l'IA publicitaire
Des années d'interactions (likes, partages, temps passé, achats) alimentent un **moteur de ciblage publicitaire** que peu d'acteurs peuvent égaler. Advantage+ (run-rate ~60 Mds$) transforme cette donnée en performance mesurable pour l'annonceur, créant un avantage de rendement difficile à concurrencer.

### 3. Échelle et effet de levier opérationnel
Une marge opérationnelle de **41%** sur 201 Mds$ de CA témoigne d'une structure de coûts diluée sur une base d'utilisateurs colossale. Chaque dollar de revenu publicitaire supplémentaire tombe en grande partie en résultat.

### 4. Intégration verticale IA — Moat en construction
Le **silicium maison MTIA** (4ᵉ génération) réduit la dépendance à Nvidia ; l'acquisition de Scale AI (~14,3 Mds$, fondateur Alexandr Wang comme directeur IA) verrouille un intrant critique de la chaîne d'entraînement. Meta tente de devenir auto-suffisant à l'échelle des modèles frontière.

### 5. Marque et habitude — Coûts de changement comportementaux
Si les coûts de changement contractuels sont nuls, les **coûts comportementaux** sont élevés : changer de réseau social signifie quitter ses contacts, son historique, ses habitudes. C'est un verrouillage psychologique et social, pas juridique.

## Positionnement vs concurrence

| Critère | Meta | Alphabet | TikTok |
|---|---|---|---|
| Audience quotidienne | ~3,56 Md | ~Énorme (Search/YouTube) | Forte, jeune |
| Marge opérationnelle | ~41% | ~32% | Privé, opaque |
| Diversification revenus | Faible (~98% pub) | Forte (cloud, devices) | Faible (pub) |
| Avance IA publicitaire | Élevée | Élevée | Modérée |
| Part pub sociale mondiale | ~70% | — | En hausse |

## Pouvoir de négociation

- **Vis-à-vis des annonceurs** : **Élevé** — l'audience et le rendement du ciblage rendent Meta quasi incontournable pour la pub digitale, mais la concurrence d'Alphabet et TikTok limite le pouvoir de prix absolu
- **Vis-à-vis des fournisseurs de puces** : **Croissant** — le silicium maison MTIA et la multiplication des fournisseurs (Nvidia, AMD) réduisent la dépendance
- **Vis-à-vis d'Apple** : **Faible** — l'App Tracking Transparency (ATT) a montré qu'Apple contrôle l'accès à la donnée mobile, un point de vulnérabilité structurel`,
  },
  {
    id: 3,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Meta dans la chaîne de valeur

Meta occupe une position de **plateforme d'intermédiation publicitaire** : elle agrège l'attention de milliards d'utilisateurs en amont (gratuitement, en échange du service) et la revend aux annonceurs en aval. La couche technologique (IA, data centers) est le cœur de transformation.

### Amont — Intrants

**Infrastructure de calcul** (poste d'investissement explosif) :
- Nvidia, AMD — GPU pour l'entraînement et l'inférence IA
- TSMC — fabrication des puces, dont le silicium maison **MTIA**
- Nebius Group — capacité GPU externalisée (deal ~27 Mds$)
- Fournisseurs d'énergie & opérateurs de data centers

**Matériel Reality Labs** :
- EssilorLuxottica — partenaire des lunettes Ray-Ban Meta & Oakley Meta
- Fabricants asiatiques de composants pour les casques Quest

**Contenu** : généré gratuitement par les **utilisateurs eux-mêmes** (le produit, c'est l'attention) et les créateurs.

---

### Meta — Transformation et distribution

**Production** : data centers mondiaux, modèles d'IA (recommandation, ciblage, Muse Spark), plateformes applicatives.

**Distribution** :
- Applications mobiles & web (Facebook, Instagram, WhatsApp, Messenger, Threads)
- Régie publicitaire automatisée (Advantage+, enchères temps réel)
- Matériel grand public (Quest, lunettes IA)

---

### Aval — Clients finaux

**Annonceurs** : &gt;10 millions, de la PME locale aux multinationales — Procter & Gamble, Amazon (paradoxalement), e-commerçants Shopify, applications mobiles, marques de grande consommation.

**Utilisateurs** : 3,56 milliards de personnes par jour — ils ne paient pas, ils sont monétisés via leur attention et leurs données.

**Développeurs & créateurs** : écosystème de contenu et d'applications tierces.

---

### Cartographie simplifiée du flux

\`\`\`
INTRANTS            →   META (PLATEFORME)         →   AVAL
Nvidia, AMD, TSMC       Data centers + IA             >10 M annonceurs
Nebius (GPU)            Apps (FB, IG, WA)             3,56 Md utilisateurs
EssilorLuxottica        Régie pub Advantage+          Créateurs
(contenu = gratuit,     (ciblage = différenciateur)   (attention monétisée)
 fourni par les users)
\`\`\`

**Le pari central** : Meta investit massivement en amont (capex IA 125-145 Mds$) pour renforcer le moteur algorithmique qui monétise l'attention en aval — en pariant que cette dépense créera plus de valeur publicitaire qu'elle ne coûte.`,
  },
  {
    id: 4,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — Exercice 2025

Meta reporte **deux segments** : Family of Apps (FoA) et Reality Labs (RL). La quasi-totalité du profit vient de FoA ; RL est un investissement déficitaire de long terme.

### Family of Apps (FoA — ~99% du CA)

| Indicateur | 2025 | 2024 | Variation |
|---|---|---|---|
| Chiffre d'affaires | 198,8 Mds$ | 162,4 Mds$ | +22% |
| Résultat opérationnel | 102,5 Mds$ | 87,1 Mds$ | +18% |
| Marge opérationnelle | ~52% | ~54% | Légère pression |

FoA regroupe Facebook, Instagram, WhatsApp, Messenger, Threads. La publicité représente ~98% du total. Instagram (3 Md MAU) est devenu le principal moteur, &gt;50% du CA pub américain.

---

### Reality Labs (RL — ~1% du CA)

| Indicateur | 2025 | 2024 | Variation |
|---|---|---|---|
| Chiffre d'affaires | 2,2 Mds$ | 2,1 Mds$ | +3% |
| Résultat opérationnel | -19,2 Mds$ | -17,7 Mds$ | -8% (perte accrue) |

RL (Quest VR, Ray-Ban Meta, Orion AR) a perdu de l'argent **chaque trimestre** depuis sa séparation comptable. Perte cumulée &gt;70 Mds$ depuis 2021. La direction guide une perte 2026 "similaire à 2025", puis une réduction graduelle.

---

### Évolution du chiffre d'affaires consolidé

| Exercice | CA | Croissance | Résultat net |
|---|---|---|---|
| 2024 | 164,5 Mds$ | — | ~62 Mds$ |
| 2025 | 201,0 Mds$ | +22% | 60,5 Mds$ |
| T1 2026 (trim.) | 56,3 Mds$ | +33% | 26,8 Mds$ |

**Point clé** : le résultat net 2025 (60,5 Mds$) est légèrement sous 2024 malgré la hausse du CA, du fait de l'accroissement de la perte RL et des coûts d'infrastructure. Le T1 2026 marque une **accélération** (+33%), dopée par un bénéfice fiscal exceptionnel de 8 Mds$.

---

### Répartition géographique

Meta génère ses revenus mondialement, avec une **monétisation par utilisateur (ARPU) la plus élevée en Amérique du Nord et en Europe**. L'ARPU consolidé T1 2026 atteint 15,66 $ (+27% a/a). La croissance utilisateurs se fait surtout dans le reste du monde (ARPU plus faible).

---

### Dynamiques par segment

**Family of Apps** : moteur de profit quasi exclusif. Croissance tirée par le prix par publicité (+9% en 2025), les impressions (+18%) et la monétisation IA (Advantage+, WhatsApp business).

**Reality Labs** : option long terme sur l'informatique de demain. Échec relatif du métavers immersif, mais succès commercial inattendu des **lunettes Ray-Ban Meta** — pivot vers le wearable IA.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Mega-cap technologiques (juin 2026)

| Société | Code Bloomberg | Capitalisation (Mds$) | EV/CA | EV/EBITDA | P/E | Rendement div. | ROE |
|---|---|---|---|---|---|---|---|
| **Meta Platforms** | **META US** | **~1 390** | **~7x** | **~13x** | **~20x** | **~0,4%** | **~33%** |
| Alphabet | GOOGL US | ~3 840 | ~7x | ~17x | ~25x | ~0,4% | ~30% |
| Microsoft | MSFT US | ~3 500 | ~12x | ~22x | ~32x | ~0,7% | ~35% |
| Amazon | AMZN US | ~2 200 | ~3x | ~18x | ~35x | 0% | ~22% |
| Apple | AAPL US | ~3 200 | ~8x | ~24x | ~30x | ~0,5% | ~150%* |

*Données estimatives sur la base des cours et publications disponibles à juin 2026. *ROE Apple distordu par les rachats massifs réduisant les capitaux propres.*

---

### Analyse comparative

**Meta — La décote du sceptique**
Meta se distingue par le **P/E parmi les plus bas du groupe mega-cap (~20,5x, forward ~17x)** alors que sa croissance de CA (+33% au T1) et sa marge opérationnelle (41%) figurent parmi les meilleures. Le marché applique une décote car (a) les revenus sont concentrés à ~98% sur la publicité, (b) le capex IA explose avec un ROI encore à prouver, (c) la gouvernance est verrouillée. Le consensus reste pourtant **"Strong Buy"** avec un objectif ~825 $ (vs ~613 $ à la clôture du 1er juillet 2026), soit un upside théorique de ~35%. Le rebond de +9,7% le 1er juillet, sur l'annonce d'un projet d'activité cloud, a commencé à résorber cette décote.

**Alphabet — Le rival le plus complet**
Alphabet combine Search, YouTube et un cloud rentable. Ses initiatives IA (Gemini) montrent déjà un impact bottom-line que Meta n'a pas encore démontré — d'où une prime relative de valorisation. C'est le concurrent le plus dangereux car il attaque Meta sur la publicité ET l'IA.

**Microsoft / Amazon — Les diversifiés**
MSFT (Azure) et AMZN (AWS) tirent une part majeure de leurs profits du cloud, ce que Meta n'a pas. Cette diversification justifie une partie de leur prime, mais leurs P/E (32-35x) supposent une exécution parfaite. Meta apparaît, par contraste, comme l'actif de qualité le moins cher.

---

### Le ratio qui compte : P/E rapporté à la croissance (PEG)
Le **PEG de Meta (~0,81)** est le plus favorable du groupe — on paie moins de 1× la croissance. Si l'IA publicitaire continue de doper l'ARPU et que le capex finit par monétiser, le re-rating du multiple vers la médiane historique (~28x) représenterait un upside substantiel. C'est la thèse bull principale en 2026-2027.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T1 2026 — Analyse complète

### Chiffre d'affaires vs consensus

| Indicateur | T1 2026 | Consensus | Écart |
|---|---|---|---|
| CA | 56,3 Mds$ | 55,5 Mds$ | **+0,8 Md$ ✓** |
| Croissance a/a | +33% | — | Accélération |
| BPA GAAP | 10,44 $ | 6,79 $ | **Dépassé (dont fiscal)** |
| BPA ajusté (hors fiscal) | 7,31 $ | 6,79 $ | **+9,6% beat** |
| Résultat net | 26,8 Mds$ | — | Dont 8,03 Mds$ de bénéfice fiscal |
| Marge opérationnelle | 41% | — | Stable malgré +35% de coûts |

**Meta a dépassé le consensus** sur le CA et nettement sur le BPA. Mais attention : le BPA GAAP de 10,44 $ inclut un **bénéfice fiscal ponctuel de 8,03 Mds$** (lié à la fiscalité R&D US). Le vrai beat opérationnel est le BPA ajusté à 7,31 $ (+9,6% vs consensus).

---

### Facteurs clés par segment

- **Family of Apps** : moteur, +33% — publicité dopée par l'IA, ARPU +27% à 15,66 $
- **Reality Labs** : -4,03 Mds$ de perte opérationnelle au T1, sur seulement 402 M$ de CA
- **Impressions pub** : +19% ; **prix par pub** : en hausse — combinaison vertueuse
- **WhatsApp / Other** : +74% — monétisation du business messaging en plein décollage

---

### Évolution des marges

- Marge opérationnelle maintenue à **41%** malgré une hausse des coûts de +35% (infrastructure, amortissement, talents IA) — signe d'un fort levier opérationnel
- La discipline de coûts (8 000 suppressions de postes en mai, coupe RL jusqu'à -30%) vise à protéger la marge

---

### Perspectives et guidance

- **CA T2 2026** : 58-61 Mds$ (~+25% au point milieu), avec ~2% de vent favorable de change
- **Dépenses totales 2026** : 162-169 Mds$ (inchangé)
- **Résultat opérationnel 2026** attendu **supérieur à 2025**
- **Capex 2026 relevé** : de 115-135 à **125-145 Mds$** — c'est cette hausse qui a fait chuter le titre

---

### Signaux d'alerte bilan

- **Capex explosif** : 19,8 Mds$ au seul T1 2026, guidance annuelle ~2× 2025 — FCF sous pression
- **Engagements contractuels** : +107 Mds$ de "step-up" sur le trimestre, total ~238 Mds$ — engagements d'infrastructure massifs
- **Bilan solide** : 81,2 Mds$ de cash vs 58,7 Mds$ de dette — trésorerie nette positive, aucun risque de solvabilité
- **Risques juridiques** : litiges jeunesse, DSA européen, fiscalité — provisions potentielles en milliards

---

### Réaction du marché

Paradoxalement, le titre a **chuté de ~6-7% après publication** malgré le beat, sanctionnant la **hausse du capex** et un léger manque sur les utilisateurs (3,56 Md vs 3,62 Md attendus, attribué aux coupures internet en Iran). Le marché a "puni le bon élève" : il craint que l'investissement IA dépasse la capacité du cœur publicitaire à le financer.

**Suite (juin-juillet 2026)** : le titre a continué de sous-performer (creux ~520 $) jusqu'à un **retournement le 1er juillet 2026 : +9,7% à 612,91 $** sur l'annonce (Bloomberg) d'un projet d'activité cloud vendant la capacité de calcul IA excédentaire. Ce même jour, les valeurs neocloud (CoreWeave -11%, Nebius -12%) ont chuté, y voyant l'arrivée d'un concurrent hyperscaler bien capitalisé. Cet écart entre fondamentaux solides et sentiment de marché volatil est le cœur du débat sur la valeur.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2023-2026

**2023 — "Year of Efficiency"** : Ton de redressement. Après le krach de 2022 (métavers), Mark Zuckerberg a opéré un virage radical — 21 000 suppressions de postes, recentrage sur la publicité et l'IA de recommandation. Message : discipline et retour à la rentabilité.

**2024-2025 — Confiance retrouvée** : Ton offensif. L'IA publicitaire (Advantage+, Reels) prouve sa valeur. Zuckerberg pivote le discours vers l'**IA générale** et la "personal superintelligence".

**2026 — "Personal superintelligence"** : Ton visionnaire et ambitieux. Zuckerberg : *"Nous sommes en bonne voie pour offrir une superintelligence personnelle à des milliards de personnes."* Le lancement de Meta Superintelligence Labs et du modèle Muse Spark est présenté comme le développement le plus important de l'année.

---

### Priorités répétées du management

**1. L'IA comme priorité absolue du capital** — La CFO Susan Li l'a dit explicitement : "Meta considère l'investissement IA comme l'usage prioritaire de son capital" (pas de rachats au T4 2025 ni au T1 2026). Le capex 125-145 Mds$ matérialise ce choix.

**2. Monétisation IA en quatre axes** — Zuckerberg détaille : (a) amélioration du cœur publicitaire, (b) agents personnels (gratuit + premium), (c) agents business (modèle de commission sur ventes), (d) ranking/recommandation.

**3. Discipline de coûts ciblée** — Coupe du budget Reality Labs jusqu'à -30%, ~8 000 suppressions de postes en mai 2026 pour "compenser" l'investissement IA. Le message : investir massivement sans laisser filer la marge.

**4. Reality Labs comme option longue** — Le management assume les pertes (cumul &gt;70 Mds$) comme un pari sur l'informatique de demain, avec un succès tangible : les lunettes Ray-Ban Meta.

**5. Retour au capital mesuré** — Dividende maintenu (1,3 Md$ au T1), 25 Mds$ d'autorisation de rachat restants, mais aucun rachat récent — l'IA prime.

---

### Analyse du sentiment

- **Confiance** : Très élevée, à la limite du visionnaire. Zuckerberg ne gère pas vers une marge cible précise — il pilote la croissance du profit opérationnel consolidé sur le long terme.
- **Transparence** : Bonne sur la stratégie, plus floue sur le **calendrier de monétisation de l'IA** — le management parle d'opportunités sans engagement chiffré de ROI.
- **Cohérence** : Le pivot IA est martelé depuis 2024 sans dévier. Mais la concentration du pouvoir sur une seule personne (Zuckerberg) signifie que la lisibilité repose sur **une seule vision**.

> **À lire entre les lignes** : le management vend une **trajectoire de superintelligence**, finançée par une machine publicitaire ultra-rentable. Tant que la pub finance le pari IA et que la marge tient, le discours est crédible. Le risque serait un dérapage simultané du capex et d'un ralentissement publicitaire.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Mark Zuckerberg — Fondateur, Président et Directeur Général

**Track record** : Fondateur de Facebook en 2004, il a bâti l'une des entreprises les plus rentables de l'histoire. Bilan chiffrable :
- Transformation d'un réseau étudiant en **plateforme de 3,56 Md d'utilisateurs quotidiens**
- Acquisitions visionnaires : **Instagram** (2012, ~1 Md$ — aujourd'hui &gt;50% du CA pub US) et **WhatsApp** (2014, ~19 Mds$ — monétisation en plein décollage)
- Pivot réussi de 2023 ("Year of Efficiency") : -21 000 postes, action passée de 88 $ à 485 $ en un an
- Pari risqué et coûteux sur le métavers (Reality Labs, perte cumulée &gt;70 Mds$) — le revers de la médaille

**Ancienneté et alignement** : Aux commandes depuis 2004 (20+ ans). Détient ~14% du capital économique mais **~61% des droits de vote** via les actions Class B (10 voix). Alignement financier réel, mais pouvoir disproportionné.

---

### Équipe dirigeante

- **Susan Li — CFO** : architecte de la discipline financière, voix de la rigueur sur le capex et l'allocation
- **Alexandr Wang — Chief AI Officer** : fondateur de Scale AI, recruté via un deal ~14,3 Mds$ pour diriger Superintelligence Labs — pari sur le talent IA frontière
- Équipe construite pour la **bascule IA**, avec recrutements massifs de talents techniques

---

### Allocation du capital — Historique

| Indicateur | 2022 | 2023 | 2024 | 2025 |
|---|---|---|---|---|
| ROE | ~18% | ~28% | ~35% | ~33% |
| Capex | ~32 Mds$ | ~28 Mds$ | ~39 Mds$ | ~72 Mds$ |
| Résultat net | ~23 Mds$ | ~39 Mds$ | ~62 Mds$ | ~60 Mds$ |

**Tendance** : allocation **agressive et concentrée sur l'IA**. Le ROE reste élevé (~33%) malgré l'explosion du capex. La qualité de l'allocation IA (125-145 Mds$ en 2026) ne pourra être jugée qu'a posteriori — c'est le pari central.

---

### Signaux d'alerte

- **Gouvernance verrouillée** : ~61% des votes pour ~14% du capital. À l'AG 2026, **les dix propositions d'actionnaires ont été rejetées** alors que plusieurs avaient la majorité des Class A. Aucun contre-pouvoir effectif.
- **Comportement visionnaire** : objectifs spectaculaires ("superintelligence pour des milliards") — à pondérer, surtout après l'échec relatif du métavers.
- **Risque clé homme** : Meta = la vision Zuckerberg. Pas de plan de succession clair.
- **Risques réglementaires** : litiges jeunesse, DSA, retrait du fact-checking — exposition juridique et réputationnelle.
- **Type** : **fondateur-visionnaire** au pouvoir absolu. Avantage de conviction long terme et de rapidité de décision — mais le revers est l'absence de garde-fou si la vision déraille.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2022-2026)

### Hausses significatives (+5%)

**2023 — "Year of Efficiency"** : Le titre passe de **88 $ à 485 $ sur l'année** (+450%), l'un des plus grands redressements de l'histoire boursière. Les coupes de coûts (21 000 postes) et la preuve que l'IA de recommandation (Reels) retient les utilisateurs ET dope le rendement publicitaire ont retourné le sentiment.

**2024-2025 — Le re-rating IA** : La hausse se prolonge, le titre touche **796 $** (plus haut 52 sem.). Le marché price non plus le métavers mais l'IA — la capacité à convertir le graphe social en marges publicitaires.

**Trimestres de beat publicitaire** : Chaque publication montrant une accélération de l'ARPU et des impressions a soutenu le cours.

---

### Baisses significatives (-5%)

**2022 — Krach métavers** : Le titre s'effondre de **378 $ à 88 $ (-77%)**. Le marché conclut que Meta est un réseau social en déclin brûlant des milliards sur une VR dont personne ne veut.

**Janvier 2026 — Selloff post-T4 sur le capex** : L'annonce d'un capex 2026 de 115-135 Mds$ (puis relevé) déclenche un repli marqué. Le titre baisse de ~28% depuis la publication de janvier, le marché doutant du ROI de l'investissement IA.

**Avril 2026 — Réaction post-T1** : Malgré un beat, le titre chute de ~6-7% après que Meta a **relevé son capex à 125-145 Mds$** et manqué légèrement sur les utilisateurs (coupures internet en Iran). "Le bon élève puni."

**2026 (S1) — Sous-performance puis rebond** : Le titre a touché un creux ~520 $ (52 sem.), traité comme une valeur "de marché baissier" malgré des fondamentaux solides. **Le 1er juillet 2026, il bondit de +9,7% pour clôturer à 612,91 $** après un rapport Bloomberg révélant un projet d'activité cloud (vente de capacité de calcul IA excédentaire) — le marché reframe le capex IA de coût subi en source de revenus potentielle. Sur 52 semaines, le titre reste néanmoins en repli d'environ -23% depuis son plus haut de 796 $.

**Juin 2026 — Vent contraire Gemini** : Google a limité l'accès de Meta à ses modèles Gemini, soulignant la dépendance de Meta à des modèles tiers pour certains usages internes — un facteur de pression ponctuel avant le rebond de juillet.

---

### Facteurs structurels

- **Sensibilité au sentiment IA** : le titre bouge au rythme des craintes sur la soutenabilité du capex IA sectoriel (~700 Mds$ pour les 4 hyperscalers en 2026)
- **Décote de valorisation** : P/E ~20x, 27% sous la médiane 10 ans — le marché exige une preuve de ROI avant de re-rater
- **Volatilité élevée** : beta ~1,23, titre événementiel piloté par les résultats et l'actualité réglementaire
- **Concentration publicitaire** : toute crainte sur le cycle pub ou la réglementation (DSA, ATT) pèse directement`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du CA** :
- Publicité : +15-25%/an, tirée par l'IA (Advantage+), l'ARPU (+27% au T1) et la monétisation WhatsApp
- Effet prix par pub : +6-9%/an ; impressions : +12-19%/an
- Reality Labs : croissance faible, reste marginal en CA
- Effet devises : variable, ~+2-4% de vent favorable attendu en 2026
- **Croissance CA consolidée estimée : +15-22%/an, en décélération graduelle**

**Marges** :
- Marge opérationnelle ~41%, sous pression du capex (amortissement croissant) mais protégée par le levier opérationnel et la discipline de coûts
- Reality Labs : perte ~19 Mds$/an, en réduction graduelle après 2026

**Coûts financiers** : trésorerie nette positive — charge financière nette faible, mais le capex pèse sur le FCF

**Dilution** : SBC élevée mais rachats compensant partiellement (autorisation 25 Mds$ restante) — nombre d'actions globalement stable à légèrement décroissant

---

### Estimations BPA

| Exercice | BPA estimé | Croissance | P/E au cours actuel (~613 $) |
|---|---|---|---|
| 2025 (réalisé) | **23,49 $** | — | ~26x |
| 2026E | **27-30 $** | **+15-28%** | **~20-23x** |
| 2027E | **31-36 $** | **+15-20%** | **~17-20x** |
| 2028E | **36-43 $** | **+15-20%** | **~14-17x** |

*Note : le BPA 2026 sera distordu par le bénéfice fiscal ponctuel de 8 Mds$ du T1. La fourchette ajustée hors éléments exceptionnels est plus pertinente pour la valorisation.*

---

### Sensibilité

- **Scénario optimiste** (IA publicitaire forte, capex monétisé, marge tenue) : BPA 2028 ~43 $ → P/E 2028 ~13x — re-rating vers la médiane (~28x) impliquerait un upside majeur
- **Scénario de base** : BPA 2028 ~39 $ → P/E 2028 ~14x — valorisation déjà attractive pour un actif de cette qualité
- **Scénario pessimiste** (capex sans ROI, ralentissement pub, choc réglementaire) : BPA 2028 ~33 $, compression du multiple, FCF durablement comprimé

**Conclusion** : à ~613 $ (clôture du 1er juillet 2026), Meta se paie ~17-20x ses bénéfices forward pour une croissance de 15-25%. Le PEG &lt;1 et la décote vs la médiane historique offrent une marge de sécurité rare. La thèse repose sur la **conversion du capex IA en croissance durable** — désormais renforcée par la perspective d'une activité cloud monétisant la capacité de calcul excédentaire, un relais de revenus qui atténue le principal risque du dossier.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. La machine publicitaire IA en pleine puissance** : Advantage+ (run-rate ~60 Mds$) transforme le graphe social de 3,56 Md d'utilisateurs en rendement publicitaire mesurable. L'ARPU bondit (+27% au T1), les impressions (+19%) et les prix montent simultanément. L'IA ne fait que commencer à monétiser.

**2. Une décote de valorisation rare** : P/E ~20x (forward ~17x), 27% sous la médiane 10 ans (~28x), PEG ~0,81. Pour une croissance de CA &gt;30% et une marge de 41%, c'est anormalement bon marché. Consensus "Strong Buy", objectif ~827 $ (+50%).

**3. Rentabilité et bilan exceptionnels** : marge opérationnelle 41%, ROE ~33%, ROIC ~30%, trésorerie nette positive (+22 Mds$), FCF encore ~48 Mds$ malgré le capex. Peu d'entreprises au monde combinent cette qualité.

**4. Optionnalité IA (Superintelligence Labs + cloud)** : modèle Muse Spark, silicium maison MTIA, talent Scale AI. Nouveauté du 1er juillet 2026 : un projet d'**activité cloud** vendant la capacité de calcul excédentaire (modèle AWS Bedrock ou neocloud à la CoreWeave). Ce relais transformerait le capex IA de coût subi en source de revenus — le titre a bondi de +9,7% sur la nouvelle. Si l'IA générale ou les agents business monétisent aussi, le potentiel de croissance au-delà de la pub est massif.

**5. Le pivot wearable réussi** : les lunettes Ray-Ban Meta sont un succès commercial inattendu — un produit que les consommateurs achètent réellement, validant une partie du pari Reality Labs.

**6. Discipline de coûts** : 8 000 suppressions de postes, coupe RL -30% — le management protège la marge tout en investissant dans l'IA.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents

**1. Le capex IA peut détruire de la valeur** : 125-145 Mds$ en 2026 (~2× 2025), sans ROI prouvé. Si l'IA ne monétise pas à la hauteur, c'est du cash brûlé qui comprime durablement le FCF. Le marché a déjà sanctionné chaque hausse de capex.

**2. Concentration publicitaire à ~98%** : quasi-mono-revenu. Tout choc (cycle pub, réglementation ATT/DSA, perte d'audience face à TikTok) frappe directement le cœur, sans diversification cloud comme Alphabet ou Amazon.

**3. Risque réglementaire matériel** : DSA européen (amende potentielle ~12 Mds$), procès sur l'impact des réseaux sur les mineurs, scrutin sur la publicité. Provisions et contraintes opérationnelles possibles.

### Analyse pré-mortem
Que se passe-t-il si Meta vaut 350 $ dans 2 ans ? Scénario : le capex IA ne monétise pas, le FCF s'effondre, un ralentissement publicitaire (récession, perte de parts face à TikTok) frappe le cœur, et une décision réglementaire majeure (interdiction de pub personnalisée en UE) ampute les revenus. La décote actuelle se transforme en juste prix d'une croissance ralentie.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le marché traite Meta comme un hyperscaler qui brûle du cash sans retour, alors que c'est la seule mega-cap dont l'IA renforce DÉJÀ le cœur de métier rentable (la pub), et non un pari pur. La décote (P/E 20x) suppose un scepticisme extrême sur le capex — mais si même une fraction de cet investissement monétise via l'amélioration publicitaire continue, le re-rating vers la médiane historique serait mécanique. Le risque/rendement penche favorablement pour un investisseur patient, à condition d'accepter la volatilité et la gouvernance verrouillée.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus — RISQUE FAIBLE
La publicité est reconnue à la livraison de l'impression/du clic — modèle transactionnel standard sous US GAAP (ASC 606). Peu de complexité ou de marge d'interprétation. Surveiller néanmoins les créances clients (annonceurs) en période de ralentissement.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE À MODÉRÉ
Les acquisitions historiques (Instagram, WhatsApp) et récentes (Scale AI ~14,3 Mds$) génèrent du goodwill. Jamais déprécié de façon majeure. **À surveiller** : l'intégration de Scale AI et la valorisation des actifs IA dans les tests de dépréciation annuels.

### Capitalisation et amortissement de l'infrastructure — RISQUE MODÉRÉ
C'est le point le plus important pour Meta. Le capex explosif (125-145 Mds$) est capitalisé puis amorti sur la durée de vie des serveurs/data centers. **À surveiller** : la **durée d'amortissement retenue** — l'allonger flatterait le résultat à court terme. Toute révision de la durée de vie utile des GPU (qui se déprécient vite) serait un signal.

### Engagements hors bilan et contractuels — RISQUE MODÉRÉ À ÉLEVÉ
Le "step-up" de +107 Mds$ d'engagements contractuels au seul T1 2026 (total ~238 Mds$) et le deal Nebius (~27 Mds$) constituent des **engagements fermes massifs** d'infrastructure. Bien que divulgués, leur ampleur crée une rigidité de dépense. **À examiner** : les annexes sur les obligations d'achat et les contrats de location (IFRS 16 / leases finance).

### Rémunération en actions (SBC) — RISQUE MODÉRÉ
La SBC est élevée (talents techniques IA, recrutements massifs). Elle dilue les actionnaires et gonfle les mesures "ajustées". **À surveiller** : l'écart entre résultat GAAP et "ajusté", et l'impact de la SBC sur le nombre d'actions dilué malgré les rachats.

### Parties liées — RISQUE FAIBLE À MODÉRÉ
Structure de gouvernance **concentrée autour du fondateur** (Zuckerberg ~61% des votes). Pas de transaction avec parties liées significative identifiée, mais le pouvoir absolu du dirigeant est un point de vigilance de gouvernance à documenter.

### Éléments fiscaux exceptionnels — RISQUE MODÉRÉ (lisibilité)
Le résultat T1 2026 inclut un **bénéfice fiscal ponctuel de 8,03 Mds$** (et fait suite à une charge non-cash de 15,93 Mds$ au T3 2025). Ces éléments distordent fortement le BPA GAAP. **À surveiller** : toujours raisonner sur le BPA ajusté hors éléments fiscaux exceptionnels pour évaluer la performance réelle.

### Flux de trésorerie vs résultat net — RISQUE MODÉRÉ
Le FCF (~48 Mds$ TTM) est désormais nettement inférieur au cash d'exploitation (~124 Mds$) à cause du capex. **À surveiller** : la **conversion résultat net → FCF** se dégrade mécaniquement avec l'investissement IA — à distinguer d'une dégradation de la qualité des bénéfices.

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** Meta n'a aucun signal de fraude, est auditée par Ernst & Young, et sa communication financière est transparente. Les zones de vigilance ne sont pas des manipulations mais des **conséquences mécaniques du pari IA** : amortissement de l'infrastructure, engagements contractuels massifs, distorsions fiscales ponctuelles et compression du FCF. L'investisseur doit raisonner sur les mesures ajustées hors exceptionnels et suivre de près la durée d'amortissement de l'infrastructure et l'évolution des engagements hors bilan.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Mark Zuckerberg et l'équipe Meta

### Stratégie et avantage concurrentiel

**1.** Le capex IA atteint 125-145 Mds$ en 2026, soit ~2× 2025. Quels **jalons mesurables de retour sur investissement** (gain d'ARPU attribuable à l'IA, marge incrémentale, revenus d'agents) devons-nous suivre pour vérifier que cette dépense crée de la valeur plutôt qu'elle ne la détruit ?

**2.** Alphabet montre déjà un impact bottom-line de Gemini que Meta n'a pas encore démontré. **Qu'est-ce qui vous distingue** structurellement dans la monétisation de l'IA, et pourquoi le marché devrait-il vous accorder la même confiance ?

**3.** ~98% de vos revenus viennent de la publicité. **Quel est votre plan de diversification crédible** (agents business, cloud, abonnements premium) et à quel horizon ces relais peuvent-ils peser &gt;10% du CA ?

### Allocation du capital

**4.** Vous avez suspendu les rachats d'actions pour financer l'IA. À quel **niveau de FCF ou de ROI** prévoyez-vous de reprendre le retour au capital, et quel est votre seuil d'alerte sur la compression du FCF ?

**5.** Reality Labs a cumulé &gt;70 Mds$ de pertes depuis 2021. **Quel est le calendrier précis** de réduction de ces pertes, et à quel moment ce segment deviendra-t-il contributif (ou sera-t-il redimensionné) ?

**6.** La durée d'amortissement des GPU et de l'infrastructure IA est critique pour le résultat. **Quelle durée de vie utile retenez-vous**, et comment gérez-vous le risque d'obsolescence rapide du matériel ?

### Risques

**7.** Le DSA européen pourrait entraîner une amende jusqu'à 6% du CA mondial (~12 Mds$). **Quelle est votre stratégie** face à la pression réglementaire UE, et quel impact sur votre modèle de pub personnalisée ?

**8.** Les procès sur l'impact des réseaux sociaux sur les mineurs se multiplient aux États-Unis. **Quelle est votre exposition financière maximale**, et comment cela modifie-t-il la conception de vos produits ?

**9.** TikTok continue de capter l'audience jeune et les budgets vidéo courte. **Quelle est votre stratégie défensive** sur ce segment, et observez-vous une érosion de l'engagement des moins de 25 ans ?

### Vision long terme

**10.** Vous parlez de "superintelligence personnelle pour des milliards de personnes". **Concrètement**, à quoi ressemble la monétisation de cette vision dans 5 ans, et quelle part du CA en attendez-vous ?

**11.** Les lunettes Ray-Ban Meta sont un succès. **Le wearable IA est-il le vrai débouché** du pari Reality Labs, et comment arbitrez-vous entre VR (Quest) et lunettes intelligentes ?

**12.** Avez-vous l'intention d'ouvrir une **offre cloud** (vous avez dit que c'était "sur la table") ? À quelles conditions, et n'est-ce pas un aveu que votre capex dépasse vos besoins internes ?

### Gouvernance et culture

**13.** Vous détenez ~61% des droits de vote pour ~14% du capital, et les dix propositions d'actionnaires de l'AG 2026 ont été rejetées malgré une majorité des Class A. **Comment garantissez-vous** que l'intérêt des actionnaires minoritaires est protégé ?

**14.** Meta dépend largement de votre vision personnelle. **Quel est le plan de succession**, et comment l'entreprise survit-elle à votre éventuel retrait ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui dans ce pari IA, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le capex IA est un puits sans fond non prouvé

Les bulls achètent l'idée que 125-145 Mds$ de capex IA (~2× 2025) vont monétiser. **Problème** : Meta n'a fourni AUCUN jalon chiffré de ROI. Contrairement à Alphabet (Gemini montre un impact bottom-line) ou Amazon/Microsoft (le cloud vend la capacité à des tiers), Meta consomme son capex en interne sans revenu externe associé. Si la monétisation IA déçoit, c'est ~135 Mds$/an de cash brûlé qui comprime durablement le FCF — déjà tombé de ~73 à ~48 Mds$. **Le marché sanctionne chaque hausse de capex pour cette raison.**

### 2. Une concentration de revenus extrême — ~98% en publicité

Meta est un **quasi-mono-revenu**. Tout choc sur le cœur publicitaire frappe sans amortisseur : récession (les budgets pub sont cycliques), réglementation (ATT d'Apple a déjà coûté des milliards ; le DSA menace la pub personnalisée en UE), ou perte d'audience face à TikTok. Alphabet et Amazon ont le cloud pour absorber ; Meta n'a rien. La diversification (agents, RL) est marginale et non prouvée.

### 3. Le concurrent que les bulls sous-estiment : TikTok ET Alphabet

Deux menaces, pas une. **TikTok** capte l'audience jeune et les budgets vidéo courte (~155 Mds$ de CA 2024), érodant l'engagement des moins de 25 ans — le futur de l'audience. **Alphabet** attaque sur la pub ET l'IA, avec une longueur d'avance sur la monétisation Gemini. Meta est pris en tenaille entre un rival qui lui prend l'audience et un autre qui prouve mieux son IA.

### 4. La gouvernance verrouillée est un risque réel, pas théorique

Zuckerberg détient ~61% des votes pour ~14% du capital. À l'AG 2026, **les dix propositions d'actionnaires ont été rejetées** alors que plusieurs avaient la majorité des Class A. Concrètement : l'actionnaire public finance un capex IA de 145 Mds$ décidé par un seul homme, sans aucun recours si la vision déraille. Le précédent du métavers (perte cumulée &gt;70 Mds$ décidée unilatéralement) montre que ce risque s'est DÉJÀ matérialisé une fois.

### 5. Le risque réglementaire est sous-estimé

DSA (amende potentielle ~12 Mds$), procès jeunesse (un jury a jugé pour la première fois en mars 2026 que les apps sociales peuvent être des "produits défectueux"), retrait du fact-checking exposant à la prolifération de contenus problématiques. Chacun de ces fronts peut entraîner des provisions, des contraintes produit ou une atteinte réputationnelle qui frappe l'engagement — donc la pub.

### 6. La "décote" pourrait être un juste prix, pas une opportunité

Les bulls voient un P/E de 20x comme bon marché vs une médiane de 28x. Mais peut-être que le marché a raison : un quasi-mono-revenu publicitaire qui brûle 145 Mds$/an dans un pari IA non prouvé, sous gouvernance verrouillée et pression réglementaire, MÉRITE une décote. Le re-rating vers 28x suppose que tout se passe bien — l'inverse du principe de prudence.

### Le scénario catastrophe unique
**Capex IA sans ROI + ralentissement publicitaire + choc réglementaire UE, simultanément.** Dans ce cas : le FCF s'effondre, la marge se comprime, une décision UE ampute la pub personnalisée, et la prime "qualité" se dégonfle. La probabilité ? Non négligeable (20-30%) si la monétisation IA tarde au-delà de 2027. Le titre était tombé jusqu'à ~520 $ avant de rebondir à 613 $ le 1er juillet sur le projet cloud — mais attention : ce rebond repose sur un rapport *non confirmé* par Meta. Si le projet cloud ne se concrétise pas ou peine face à AWS/Azure/Google Cloud (incumbents entrenchés), l'euphorie retomberait aussi vite qu'elle est montée.

### Conclusion short
Meta est une **excellente entreprise** — mais le titre suppose que le pari IA à 145 Mds$/an se transforme en croissance durable, dans un modèle dangereusement concentré sur la pub, sous une gouvernance sans contre-pouvoir et une pression réglementaire montante. La décote n'est pas forcément une aubaine : c'est peut-être le prix correct de l'incertitude sur le ROI du plus grand pari d'investissement de l'histoire de l'entreprise.`,
  },
];

export default { ...meta, modules };
