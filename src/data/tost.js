// ============================================================
//  DOSSIER : Toast, Inc. (TOST)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "tost",                     // identifiant d'URL : /dossier/tost
  ticker: "TOST",
  name: "Toast, Inc.",
  exchange: "NYSE",
  sector: "Technologie pour la restauration (FinTech / SaaS)",
  initials: "TOST",                 // affiché dans la pastille
  tagline: "Plateforme tout-en-un de paiements et de logiciels pour la restauration, désormais rentable, en forte croissance.",
  riskScore: 62,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "tost.html",
  updated: "2026-06",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Toast est une **plateforme technologique tout-en-un pour la restauration**, cotée au NYSE depuis septembre 2021, fondée à Boston en 2011 par Steve Fredette, Aman Narang et Jonathan Grimm. Le modèle combine **logiciel (SaaS), matériel (POS) et paiements (FinTech)** : Toast équipe les restaurants d'un système de point de vente, puis monétise chaque transaction de paiement traitée sur sa plateforme.

Le chiffre d'affaires 2025 atteint **6,15 milliards $** (+24 %), pour un **bénéfice net record de 342 millions $** — première année de profitabilité GAAP pleine et entière, après des années de pertes.

Le modèle repose sur trois sources de revenus :
- **Financial Technology Solutions** (~82 % du CA) : commissions sur le volume de paiements (GPV) traité. C'est le moteur de revenus, indexé sur le volume des restaurants
- **Subscription Services** (SaaS) : abonnements récurrents aux modules logiciels (POS, paie, commande en ligne, gestion de cuisine, etc.) — cœur de marge et de l'ARR
- **Hardware & Professional Services** : terminaux, kiosques, installation — segment à marge faible voire négative, conçu comme produit d'appel

## Principaux produits et services

- **Toast POS** : point de vente cloud spécialisé restauration (tables, additions partagées, coursing, écran de cuisine)
- **Toast IQ** : IA conversationnelle et analytique ; nouveaux produits Toast IQ Grow, Toast Drive-Thru
- **Paiements intégrés** : traitement des cartes, take rate &gt; 103 bps
- **Modules SaaS** : commande en ligne et livraison, paie et gestion d'équipe, gestion des stocks, xtraCHEF (back-office), Toast Capital (financement marchands)
- **Matériel** : terminaux, kiosques, écrans clients, accessoires durcis pour environnement restauration

## Clients, fournisseurs, concurrents

**Clients** : ~171 000 restaurants et établissements (T1 2026), majoritairement aux États-Unis (~96 %), avec présence en Irlande, Inde, Canada et Royaume-Uni. Du restaurant indépendant aux chaînes (Applebee's — plus gros contrat de l'histoire de Toast).

**Fournisseurs** : fabricants de puces et composants électroniques (mémoire) pour le matériel ; réseaux de cartes (Visa, Mastercard) et acquéreurs pour le traitement des paiements ; partenaires comme American Express et Uber.

**Concurrents** : **Fiserv/Clover** (n°1 du petit segment, ~20 % de parts), **Block/Square**, **Shift4**, **Lightspeed Commerce**, **SpotOn**, et les acteurs historiques **NCR (Aloha)** et **Oracle (Micros)**.

## Modalités contractuelles

Le modèle est **hybride récurrent + transactionnel** : les abonnements SaaS génèrent un revenu récurrent (ARR de 2,2 Mds$, +26 %), tandis que les revenus FinTech dépendent du volume de paiements traité, donc de l'activité des restaurants. Les switching costs sont **réels mais pas absolus** : une fois le POS, la paie et les paiements intégrés, changer de plateforme est coûteux en temps et en formation — mais la concurrence agressive contraint le pouvoir de prix. La rentabilité dépend de l'**effet d'échelle** (plus de locations, plus de volume) et de l'expansion de marge sur le SaaS (marge brute SaaS à 81 %).`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Toast dans la chaîne de valeur

Toast occupe une position d'**intégrateur de plateforme** entre les fournisseurs de technologie/paiements en amont et les restaurants en aval. Sa valeur vient de l'**agrégation** : réunir matériel, logiciel et paiements en un guichet unique pour un secteur historiquement fragmenté en outils disparates.

### Amont — Intrants

**Composants matériels** :
- Fabricants de **puces mémoire** et de semi-conducteurs (intrant critique des terminaux ; source du vent contraire de coût annoncé pour 2026-2027)
- Sous-traitants d'assemblage des terminaux, kiosques et écrans

**Infrastructure paiements** :
- Réseaux de cartes : **Visa, Mastercard, American Express, Discover**
- Acquéreurs / processeurs partenaires pour le règlement des transactions

**Infrastructure cloud & logicielle** :
- Hébergement cloud, briques d'IA et d'analytique (Toast IQ)

---

### Toast — Plateforme et distribution

**Logiciel** : POS cloud, modules SaaS (paie, commande en ligne, stocks, back-office)
**Matériel** : conception et distribution de terminaux durcis spécifiques à la restauration
**Paiements** : traitement intégré, prise de commission sur le GPV
**Financement** : Toast Capital (avances aux restaurants)

**Distribution** : force de vente directe, partenariats (American Express, Uber), et expansion vers de nouveaux segments (entreprises, international, hôtellerie F&B, retail).

---

### Aval — Clients finaux

**Restaurants indépendants** : cœur historique (la majorité des ~171 000 locations), marché très local
**Chaînes & entreprises** : segment en expansion (Applebee's, &gt; 10 000 locations en nouveaux marchés)
**International** : Irlande, Inde, Canada, Royaume-Uni — présence encore minoritaire
**Hôtellerie F&B et retail** : élargissement du TAM au-delà du restaurant indépendant

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                    →   TOAST (PLATEFORME)        →   CLIENTS FINAUX
Puces mémoire / hardware     Logiciel POS + SaaS           Restaurants indépendants
Visa, Mastercard, Amex       Matériel durci                Chaînes (Applebee's)
Cloud + IA (Toast IQ)        Paiements intégrés            International (IE, IN, CA)
(intrants critiques)         Toast Capital                 Hôtellerie F&B, retail
\`\`\`

**Le pari central** : Toast parie que l'intégration verticale (matériel + logiciel + paiements + financement) sur un secteur de niche crée un verrouillage et un take rate que des acteurs généralistes (Square, Clover) peinent à répliquer avec la même profondeur fonctionnelle.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires — Exercice 2025 & T1 2026

### Structure par source de revenus (T1 2026)

| Segment | CA T1 2026 | Croissance a/a | Tendance |
|---|---|---|---|
| Financial Technology Solutions | 1 323 M$ | +22 % | Moteur de revenus (volume paiements) |
| Subscription Services | 268 M$ | +28 % | Cœur de marge, ARR récurrent |
| Hardware & Professional Services | 39 M$ | en repli | Produit d'appel, marge faible/négative |
| **Total** | **1 630 M$** | **+22 %** | |

---

### Évolution annuelle (FY)

| Indicateur | FY2024 | FY2025 | Variation |
|---|---|---|---|
| Chiffre d'affaires | 4 960 M$ | 6 153 M$ | +24 % |
| Résultat net GAAP | 19 M$ | 342 M$ | ×18 |
| EBITDA ajusté | 373 M$ | 633 M$ | +70 % |
| GPV (volume de paiements) | 159,1 Mds$ | 195,1 Mds$ | +23 % |
| Locations (fin d'année) | ~134 000 | ~164 000 | +30 000 nets |
| ARR | &gt; 1,6 Md$ | &gt; 2,0 Mds$ | +26 % |

---

### Répartition géographique

Quasi-totalité **États-Unis** (~96 % des locations), avec une présence émergente en **Irlande, Inde, Canada et Royaume-Uni**. L'international, l'entreprise et le retail F&B ont dépassé **10 000 locations cumulées** au S1 2025 — un relais de croissance encore minoritaire mais stratégique pour étendre le TAM.

---

### Profil de marge et rentabilité

- **Marge brute consolidée** : ~25,9 % (FY2025) — diluée par le matériel à marge faible
- **Marge brute SaaS** : ~81 % et en expansion (automatisation du support par l'IA)
- **Marge opérationnelle GAAP** : 21 % au T1 2026 — record historique, &gt; 20 % pour la première fois
- **Marge nette** : ~6 % — encore mince, dépendante du volume
- **Take rate** : &gt; 103 bps pour la première fois au T1 2026

**Lecture** : Toast est désormais jugé sur ses bénéfices ET sa croissance. Le FinTech porte le volume de revenus, le SaaS porte la marge et l'ARR, le matériel reste un produit d'appel délibérément peu margé. La thèse repose sur l'expansion continue de la marge SaaS et la croissance des locations.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Intégration verticale spécialisée — Moat fonctionnel
Toast réunit **matériel, logiciel, paiements et financement** en une plateforme conçue spécifiquement pour la restauration (tables, coursing, additions partagées, écrans de cuisine). Les systèmes généralistes (Square, Clover) n'offrent pas la même profondeur fonctionnelle. Cette **spécialisation de niche** est le moat le plus tangible.

### 2. Coûts de changement — Moat modéré mais réel
Une fois que le POS, la paie, la commande en ligne et les paiements sont intégrés, **migrer vers un concurrent est coûteux** (temps, formation, interruption de service). Plus un restaurant adopte de modules, plus le verrouillage augmente. Mais ces switching costs sont **réels sans être absolus** — d'où une pression concurrentielle persistante sur les prix.

### 3. Effet de réseau et données — Moat en construction
Avec ~171 000 locations et 195 Mds$ de GPV annuel, Toast accumule des **données de transaction** qui alimentent l'IA (Toast IQ), le pricing, le financement (Toast Capital) et de nouveaux produits. Plus la base grandit, plus la plateforme s'améliore — un avantage cumulatif.

### 4. Modèle récurrent + transactionnel — Visibilité
L'ARR de 2,2 Mds$ (+26 %) offre une **base de revenus récurrents prévisible**, tandis que le FinTech capte la croissance du volume. Cette combinaison donne de la visibilité tout en conservant un fort levier de croissance.

### 5. Marque et leadership de catégorie
Toast est devenu une **marque de référence** dans la POS restauration aux États-Unis (~24-25 % de parts dans le segment selon certaines mesures), ce qui facilite l'acquisition de nouveaux clients par le bouche-à-oreille et les partenariats (American Express, Uber).

## Positionnement vs concurrence

| Critère | Toast | Fiserv/Clover | Block/Square |
|---|---|---|---|
| Spécialisation restauration | Très forte | Modérée | Modérée |
| Part du petit segment US | ~17 % | ~20 % | ~13 % |
| Profondeur logicielle | Élevée | Moyenne | Moyenne |
| Take rate | &gt; 103 bps | Variable | Variable |
| Croissance | +24 % | Plus lente | Modérée |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Modéré** — switching costs réels mais concurrence vive ; le take rate peut être contesté par des offres agressives (Clover, Square)
- **Vis-à-vis des fournisseurs de puces** : **Limité** — Toast subit le coût des composants mémoire (vent contraire 2026-2027), preuve d'un pouvoir d'achat contraint sur le hardware
- **Vis-à-vis des réseaux de cartes** : **Faible** — Toast est preneur des barèmes d'interchange ; sa marge FinTech dépend de la maîtrise de ses propres coûts`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Paiements & technologie restauration (juin 2026)

| Société | Code Bloomberg | Capitalisation (Mds$) | EV/CA | EV/EBIT | P/E | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Toast** | **TOST US** | **~15,2** | **~2,0x** | **~25x** | **~39x** | **0 %** | **négatif → positif** |
| Block (Square) | XYZ US | ~45 | ~1,5x | ~22x | ~18x | 0 % | ~5 % |
| Shift4 Payments | FOUR US | ~9 | ~2,5x | ~16x | ~22x | 0 % | ~18 % |
| Fiserv (Clover) | FI US | ~80 | ~3,5x | ~13x | ~14x | 0 % | ~12 % |
| Lightspeed Commerce | LSPD US | ~2 | ~1,5x | n.s. | n.s. | 0 % | négatif |

*Données estimatives sur la base des cours et publications disponibles à juin 2026. À affiner sur filings SEC directs.*

---

### Analyse comparative

**Fiserv/Clover — Le leader du petit segment**
Clover domine le segment des petits restaurants (~20 % de parts) et bénéficie de l'échelle colossale de Fiserv. Sa valorisation est **plus modeste** (P/E ~14x) car la croissance est plus lente. C'est le concurrent le plus direct sur le cœur de marché de Toast — et le plus dangereux par sa capacité de distribution.

**Block (Square) — Le généraliste agressif**
Square couvre la restauration parmi d'autres verticaux. Moins spécialisé que Toast, mais doté d'un **écosystème large** (Cash App, Afterpay) et d'un bilan solide. Valorisation plus basse (P/E ~18x), reflet d'une croissance restauration moins rapide.

**Shift4 — Le spécialiste rentable**
Shift4 affiche la **meilleure rentabilité** du panel (ROE ~18 %, EV/EBIT ~16x) et un positionnement hôtellerie/restauration. Son PDG a indiqué qu'il ne va pas « au corps à corps » avec Toast sur les petits restaurants — les deux se disputent surtout les clients déçus des acteurs historiques.

**Toast — La prime de croissance**
Toast se paie le **multiple le plus élevé** (P/E ~39x) car il combine la croissance la plus forte (+24 %) et une inflexion de rentabilité récente. Le marché paie l'exécution future ; la moindre décélération comprime ce multiple, comme l'a montré la chute de ~15 % après le T1 2026.

---

### Le ratio qui compte : take rate × locations × marge SaaS
Toast se juge sur trois leviers cumulés : **croissance des locations** (+22 %), **take rate** (&gt; 103 bps, en hausse) et **expansion de la marge SaaS** (81 %). Tant que ces trois moteurs progressent ensemble, la prime de valorisation tient. La comparaison de P/E avec des pairs plus lents (Fiserv ~14x) est peu informative isolément — c'est le triptyque croissance/marge/volume qui fait la valeur.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T1 2026 — Analyse complète

### Chiffre d'affaires vs consensus

| Indicateur | T1 2026 | T1 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | 1 630 M$ | 1 337 M$ | ~1 630 M$ | **Conforme (+22 %)** |
| BPA GAAP | 0,20 $ | 0,09 $ | 0,16 $ | **+28,6 % ✓** |
| Résultat net | 126 M$ | 56 M$ | — | **×2,2** |
| EBITDA ajusté | 179 M$ | 133 M$ | — | **+35 %** |
| FCF | 115 M$ | 69 M$ | — | **+67 %** |

**Toast a dépassé le consensus de bénéfice** (BPA GAAP 0,20 $ vs 0,16 $ attendu, soit +28,6 %), avec un chiffre d'affaires en ligne. Le résultat net a plus que doublé.

---

### Facteurs clés par segment

- **Financial Technology Solutions** : 1 323 M$ (+22 %) — porté par le GPV de 51,3 Mds$ (+22 %)
- **Subscription Services** : 268 M$ (+28 %) — moteur de marge, ARR à 2,2 Mds$ (+26 %)
- **Hardware & Professional Services** : 39 M$ en repli — produit d'appel délibéré
- **Locations** : ~171 000 (+22 %), ~7 000 ajoutées nettes au trimestre

---

### Évolution des marges

- **Marge opérationnelle GAAP** : **21 %** — record historique, &gt; 20 % pour la première fois
- **Résultat opérationnel** : 110 M$ (vs 43 M$ au T1 2025)
- **Marge brute SaaS** : ~81 % et en expansion (IA réduisant les coûts de support)
- **Take rate** : &gt; 103 bps, franchi pour la première fois

---

### Perspectives et guidance

- **FY2026 relevée** : croissance du gross profit récurrent de **21-23 %**, EBITDA ajusté de **790-810 M$**
- **T2 2026** : croissance subscription + FinTech gross profit de 22-24 %, EBITDA ajusté de 185-195 M$
- **Objectif long terme** : profil de marge EBITDA de **40 %+**
- **Avertissement marge** : la CFO Elena Gomez a confirmé que le coût des **puces mémoire** pèsera davantage en **2027** qu'en 2026 — choix stratégique (constitution de stock pour protéger les livraisons)

---

### Signaux d'alerte bilan

- **Trésorerie** : 1,77 Md$ (cash + titres) + 347 M$ de crédit non tiré — liquidité solide
- **Dette** : faible (D/E ~0,08) — bilan en trésorerie nette
- **Rachats d'actions** : 14 millions d'actions rachetées pour 378 M$ (YTD au 6 mai 2026) ; programme augmenté de 500 M$
- **Matériel** : segment structurellement déficitaire en marge brute — à surveiller avec le vent contraire des puces

---

### Réaction du marché

Malgré un trimestre supérieur aux attentes, **l'action a chuté de ~15 %** après publication. Deux raisons : une guidance d'EBITDA T2 jugée **prudente**, et l'avertissement sur le coût du matériel en 2027. Sur un titre valorisé pour la croissance et la marge (P/E ~39x), toute prudence sur les marges futures suffit à déclencher une correction. Le cours est passé d'un plus haut 52 semaines de 49,66 $ à ~26,82 $. Cet écart entre **résultats solides et réaction boursière** illustre la sensibilité extrême du titre aux révisions de marge.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2024-2026

**2024 (première profitabilité)** : Ton de **transition réussie**. Aman Narang, devenu PDG le 1ᵉʳ janvier 2024, célèbre une « année transformationnelle » : 28 000 locations nettes ajoutées, première année de profitabilité GAAP, EBITDA ajusté de 373 M$.

**2025 (accélération)** : Ton **confiant et discipliné**. Chaque trimestre bat le précédent : ARR franchit 2 Mds$, partenariat multi-année avec American Express, plus gros contrat de l'histoire (Applebee's). Narang évoque « une opportunité incroyable de croissance soutenue sur la prochaine décennie ».

**2026 (maturité)** : Ton **équilibré, plus prudent sur les marges**. La direction relève la guidance mais prévient sur le coût du matériel en 2027. La CFO Elena Gomez présente le headwind hardware comme un **choix stratégique délibéré**, pas une dégradation — un message de transparence pour désamorcer l'inquiétude.

---

### Priorités répétées du management

**1. Croissance des locations** — Le nombre de restaurants équipés est l'indicateur-roi : chaque cohorte ajoute du GPV et de l'ARR. L'objectif est une expansion soutenue, y compris dans les nouveaux marchés (entreprise, international, retail F&B).

**2. Expansion de la marge SaaS** — Marge brute SaaS à 81 %, tirée par l'automatisation du support via l'IA. C'est le levier de profitabilité structurelle.

**3. Take rate et monétisation** — Le passage de la conquête à l'**extraction de valeur** : take rate &gt; 103 bps, hausse tarifaire, nouveaux modules à ARPU supérieur.

**4. Plateforme agentique et IA** — Pivot vers Toast IQ, Toast IQ Grow, Toast Drive-Thru. L'IA est présentée à la fois comme produit (revenus) et comme levier de productivité (marge).

**5. Retour au capital** — Rachats d'actions (378 M$ YTD), programme augmenté de 500 M$ — signal de confiance dans la génération de cash.

---

### Analyse du sentiment

- **Confiance** : Élevée et constante. Le management livre trimestre après trimestre, ce qui crédibilise le discours.
- **Prudence émergente sur les marges** : nouveauté 2026 — la transparence sur le coût hardware 2027 est saluée mais a inquiété le marché à court terme.
- **Cohérence** : Remarquable depuis la transition de PDG en 2024. Pas de changement de stratégie majeur, exécution régulière — ce qui rassure sur la lisibilité du modèle.

> **À lire entre les lignes** : le management vend désormais une **trajectoire de marge** (objectif 40 %+ d'EBITDA) autant qu'une croissance de volume. Tant que les deux progressent, le discours tient. Le moindre signal de compression de marge (comme le headwind puces) suffit à fragiliser un titre valorisé pour la perfection.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Aman Narang — Directeur Général (depuis le 1ᵉʳ janvier 2024)

**Profil** : Co-fondateur de Toast en 2011 avec Steve Fredette et Jonathan Grimm. A occupé des rôles clés (Co-Président, COO) avant de devenir PDG. **Connaissance intime** du produit et du secteur depuis l'origine.

**Bilan** :
- A piloté la **première année de profitabilité GAAP** (2024) puis l'accélération vers 342 M$ de résultat net en 2025
- A mené l'**expansion des locations** (~134 000 fin 2024 → ~171 000 au T1 2026)
- A signé des **partenariats stratégiques** (American Express, Uber) et le plus gros contrat de l'histoire (Applebee's)
- A orchestré le **pivot IA** (Toast IQ) et l'expansion du TAM (entreprise, international, retail F&B)

**Ancienneté et alignement** : Fondateur présent depuis 2011. Détient des actions Class A et un volume important d'**actions Class B convertibles** (~18,9 M détenues directement) — alignement financier fort. Note : structure à double classe d'actions conférant aux fondateurs un poids de vote supérieur.

---

### Équipe dirigeante

- **Steve Fredette** — Président et administrateur ; détient ~25,7 M d'actions Class B — base actionnariale fondatrice solide
- **Jonathan Grimm** — Directeur technique (CTO), co-fondateur
- **Elena Gomez** — Directrice financière (CFO) ; communication transparente sur les marges et le headwind hardware

---

### Allocation du capital — Historique

| Indicateur | 2023 | 2024 | 2025 |
|---|---|---|---|
| Résultat net GAAP | perte | 19 M$ | 342 M$ |
| EBITDA ajusté | 29-113 M$/T | 373 M$ | 633 M$ |
| FCF | ~81 M$/T | ~134 M$/T | 608 M$ (an) |
| Locations (fin) | ~106 000 | ~134 000 | ~164 000 |

**Tendance** : allocation **disciplinée et croissante**. Réinvestissement dans la croissance (locations, IA) tout en lançant des **rachats d'actions** (378 M$ YTD 2026, programme +500 M$) — signe d'une bascule vers le retour au capital désormais que le FCF est solide.

---

### Signaux d'alerte

- **Structure à double classe d'actions** : les fondateurs conservent un poids de vote supérieur via les actions Class B — contre-pouvoir actionnarial limité
- **Ventes d'initiés répétées** : 17 ventes / 0 achat sur 6 mois ; ventes du PDG (souvent liées au vesting de RSU et à des plans 10b5-1, mais à noter)
- **Dépendance au modèle** : l'exécution repose sur la croissance continue des locations et l'expansion de marge — pas de plan B évident si le marché se sature
- **Type** : **fondateurs-exploitants** alignés et expérimentés — l'archétype recherché pour une scale-up technologique en phase de monétisation`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Contexte
Cotée depuis septembre 2021 (IPO à 40 $, ~1 Md$ levé), l'action Toast est **volatile** (beta ~1,0-1,6) et pilotée par la **trajectoire de croissance et de marge**. Le cours actuel (~26,82 $) reste sous le prix d'IPO, dans le bas d'une fourchette 52 semaines de 22,3-49,7 $.

### Hausses significatives (+5 %)

**2024 — Bascule vers la profitabilité** : L'atteinte de la première profitabilité GAAP et la forte croissance des locations ont porté le titre. Sur l'année, Toast a délivré une performance remarquable (~129 % sur 12 mois à un point haut fin 2024, cap atteignant ~22 Mds$).

**2025 — Croissance et partenariats** : Franchissement des 2 Mds$ d'ARR, partenariat American Express, contrat Applebee's. Le titre a surperformé le S&P 500 (~+69 % sur 12 mois à l'automne 2025).

**Juin 2026 — Inclusion S&P MidCap 400** : Annonce du remplacement de TopBuild dans le S&P 400 au 1ᵉʳ juillet 2026 — flux d'achat indiciels attendus, +6,6 % sur la nouvelle. Consensus analyste « Strong Buy ».

---

### Baisses significatives (-5 %)

**Décembre 2024 — Dégradations d'analystes** : DA Davidson, Goldman Sachs et d'autres ont abaissé leur recommandation (de Buy à Neutral) sur des inquiétudes de marge 2025 et une valorisation jugée pleine après le fort rallye.

**Mai 2026 — Chute post-T1** : Malgré un trimestre supérieur aux attentes, le titre a chuté de **~15 %** — guidance T2 d'EBITDA prudente et avertissement sur le coût des puces mémoire en 2027. Illustration de la sensibilité du titre aux révisions de marge.

**2026 (général)** : Repli marqué depuis le plus haut 52 semaines (49,66 $) vers ~25-27 $, soit une **forte décote** que certains analystes (TIKR) jugent excessive au regard de la trajectoire de profitabilité.

---

### Facteurs structurels

- **Sensibilité à la marge** : titre valorisé pour la croissance ET l'expansion de marge ; toute prudence sur les marges futures déclenche une correction
- **Cyclicité restauration** : la demande dépend du volume de paiements, donc de la consommation discrétionnaire dans la restauration
- **Flux indiciels** : inclusion S&P MidCap 400 (juillet 2026) — flux ETF positifs
- **Concurrence** : nouvelles de parts de marché (Clover, Square) font bouger le sentiment
- **Ventes d'initiés** : flux récurrent de ventes (vesting RSU, plans 10b5-1) pesant sur le sentiment court terme`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Chiffre d'affaires** :
- Croissance des locations : +18-22 %/an (cœur US + nouveaux marchés), avec décélération progressive vers la maturité
- GPV : +20-23 %/an, indexé sur le volume de paiements
- ARR : +20-26 %/an, porté par le SaaS et de nouveaux modules à ARPU supérieur
- **Croissance CA estimée : +18-22 %/an**, en ralentissement graduel

**Marges** :
- Expansion continue de la marge opérationnelle (21 % au T1 2026 → objectif long terme 40 %+ d'EBITDA)
- Marge brute SaaS ~81 % en légère hausse (IA, automatisation du support)
- **Vent contraire matériel** : coût des puces mémoire pesant davantage en 2027 — frein temporaire à l'expansion de marge

**Coûts de financement** : faibles (bilan net cash) — charge d'intérêts nette négative (revenus d'intérêts sur la trésorerie)

**Dilution** : SBC élevée (~255 M$ en 2025) mais partiellement compensée par les **rachats d'actions** (378 M$ YTD) — dilution nette modérée

---

### Estimations BPA

| Exercice | BPA GAAP estimé | Croissance | P/E au cours actuel (~26,8 $) |
|---|---|---|---|
| 2025 (réalisé) | ~0,57-0,68 $ | — | — |
| **2026E** | **~0,90-1,10 $** | **+50-60 %** | **~25-30x** |
| **2027E** | **~1,30-1,70 $** | **+40-50 %** | **~16-20x** |
| **2028E** | **~2,00-2,50 $** | **+40-50 %** | **~11-13x** |

*Note : le consensus de marché évoque un BPA non-GAAP supérieur (ordres de grandeur 1,3-2,9 $ sur 2026-2029). Les estimations ci-dessus sont indicatives et à affiner sur filings SEC + consensus à jour.*

---

### Sensibilité

- **Scénario optimiste** (locations + marge fortes, headwind puces absorbé) : BPA 2028 vers le haut de fourchette, P/E 2028 ~11x — titre attractif si la croissance tient
- **Scénario de base** : expansion de marge régulière, BPA 2028 ~2,0-2,2 $, valorisation portée par la combinaison croissance + marge
- **Scénario pessimiste** (décélération locations, headwind puces prolongé, concurrence sur take rate) : BPA 2028 sous la fourchette, compression du multiple

**Conclusion** : Toast s'évalue désormais au BPA ET sur la trajectoire de marge. À ~26,8 $, le P/E élevé (~39x sur le trailing) reflète la croissance ; rapporté au BPA forward, le multiple se dégonfle rapidement si l'exécution suit. Les juges de paix : croissance des locations, take rate, et expansion de la marge SaaS.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels

**1. Moteur locations + ARR intact** : ~171 000 locations (+22 %), ARR de 2,2 Mds$ (+26 %), GPV de 195 Mds$ annuel. L'effet de réseau et la profondeur fonctionnelle créent un verrouillage croissant. Tant que les locations progressent, le volume de revenus suit mécaniquement.

**2. Inflexion de rentabilité confirmée** : Première profitabilité GAAP (2024) muée en 342 M$ de résultat net (2025), EBITDA ajusté de 633 M$, marge opérationnelle à 21 % (record). L'objectif long terme de 40 %+ d'EBITDA offre un potentiel d'expansion de marge majeur.

**3. Expansion du TAM** : Au-delà du restaurant indépendant — entreprises (Applebee's), international (IE, IN, CA, UK), hôtellerie F&B et retail (&gt; 10 000 locations). Chaque nouvelle cohorte a un ARPU potentiel supérieur à la précédente.

**4. IA et plateforme agentique** : Toast IQ, Toast IQ Grow, Toast Drive-Thru — l'IA est à la fois produit (revenus) et levier de marge (support automatisé, marge SaaS à 81 %).

**5. Bilan net cash + rachats** : Trésorerie nette de 1,77 Md$, FCF de 608 M$, programme de rachat augmenté de 500 M$. Financement interne de la croissance et retour au capital.

**6. Décote vs trajectoire** : Cours dans le bas de la fourchette 52 semaines (~26,8 $ vs plus haut 49,7 $), consensus « Strong Buy ». Certains analystes jugent le titre sous-évalué au regard de la profitabilité normalisée.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents au business

**1. Concurrence intense et pression sur le take rate** : Fiserv/Clover (~20 % du petit segment), Block/Square, Shift4, Lightspeed, NCR/Oracle. Une guerre de fonctionnalités ou de prix pourrait comprimer le take rate (&gt; 103 bps) et les marges. Le moat (switching costs) est réel mais pas absolu.

**2. Valorisation tendue** : P/E ~39x sur le trailing. Le titre intègre une exécution quasi parfaite. La chute de ~15 % après un T1 pourtant supérieur aux attentes prouve que **toute déception de marge est sévèrement sanctionnée**.

**3. Vent contraire matériel & marges minces** : Coût des puces mémoire pesant davantage en 2027, segment matériel déficitaire en marge brute, marge nette consolidée encore mince (~6 %) et dépendante du volume.

### Analyse pré-mortem
Que se passerait-il si Toast valait 18 $ dans 2 ans ? Scénario : décélération des locations (saturation du marché US), guerre de prix sur le take rate avec Clover/Square, headwind hardware prolongé compressant la marge, et compression du multiple de ~39x à ~22x. La valorisation chuterait mécaniquement de 30-40 %.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat oppose des bulls extrapolant la croissance et des bears focalisés sur la valorisation. La vérité est peut-être que Toast est désormais une **vraie entreprise rentable** dont le multiple se normalisera à mesure que le BPA croît — mais aussi que la **prime de croissance reste vulnérable** à tout signal de maturité du marché US. Le risque/rendement dépend moins de la qualité du business (établie) que du **point d'entrée sur la valorisation**.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Rémunération en actions (SBC) — RISQUE MODÉRÉ À ÉLEVÉ
La SBC s'élève à **~255 M$ en 2025** (stable vs 256 M$ en 2024), un montant significatif rapporté au résultat net de 342 M$. 

**À surveiller** : l'écart entre résultat GAAP et non-GAAP. L'EBITDA ajusté (633 M$) exclut la SBC ; une SBC élevée et récurrente signifie que la rentabilité « ajustée » flatte la réalité GAAP. Les rachats d'actions (378 M$ YTD) compensent partiellement la dilution, mais à un coût en cash.

### Mesures ajustées vs GAAP — RISQUE MODÉRÉ
Toast met en avant l'**EBITDA ajusté** et le « gross profit récurrent non-GAAP » dans sa communication. Les ajustements incluent SBC, restructuration, amortissement, variation de juste valeur des warrants. 

**À surveiller** : la cohérence et la récurrence des « ajustements ». En 2025, la restructuration (12 M$) et la SBC dominent — à vérifier qu'ils ne deviennent pas un poste permanent masquant la rentabilité courante.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Toast croît **organiquement** (peu d'acquisitions majeures), donc le goodwill est limité — contrairement à un roll-up. Risque de dépréciation faible.

### Comptabilisation des revenus — RISQUE FAIBLE À MODÉRÉ
Modèle mixte : abonnements SaaS (reconnaissance étalée, IFRS/US GAAP standard) + revenus FinTech (commission sur transactions). 

**À surveiller** : le traitement du **revenu FinTech brut vs net** (le take rate est faible en pourcentage du GPV), et la **présentation des coûts d'interchange**. Les créances clients et le programme Toast Capital (avances marchands) méritent un suivi en cas de ralentissement de la restauration.

### Matériel et stocks — RISQUE MODÉRÉ
Le segment matériel est **déficitaire en marge brute** et Toast a annoncé constituer du **stock de puces mémoire par anticipation**. 

**À surveiller** : la **valorisation des stocks** et le risque d'obsolescence ou de dépréciation si les volumes déçoivent ; l'impact du coût des composants sur la marge 2026-2027.

### Parties liées et gouvernance — RISQUE MODÉRÉ
**Structure à double classe d'actions** : les fondateurs (Narang, Fredette) détiennent des actions Class B à droit de vote renforcé, limitant le contre-pouvoir actionnarial. 

**À surveiller** : les ventes d'initiés répétées (17 ventes / 0 achat sur 6 mois) — souvent liées au vesting de RSU et à des plans 10b5-1, mais à documenter.

### Flux de trésorerie vs résultat — RISQUE FAIBLE
FCF (608 M$) **supérieur** au résultat net (342 M$) — typique d'un modèle SaaS (amortissement, SBC non-cash). Conversion saine, pas de signal d'alerte. 

**À surveiller** : la durabilité de la conversion une fois la SBC et le capex pris en compte.

---

### Verdict global
**Risque comptable : MODÉRÉ.** Toast est désormais profitable, audité, avec un bilan net cash et une conversion de cash saine — un profil bien plus sain qu'un roll-up déficitaire. Les principales zones de vigilance sont la **SBC élevée** (écart GAAP/ajusté), la **présentation des mesures non-GAAP**, le **risque de stocks de composants**, et la **gouvernance à double classe d'actions**. Pas de signal de fraude ; surveillance normale des filings 10-Q/10-K recommandée.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Aman Narang et l'équipe Toast

### Stratégie et avantage concurrentiel

**1.** Le take rate a franchi 103 bps pour la première fois. Face à Clover (~20 % du petit segment) et Square qui peuvent casser les prix, **quelle est la marge de manœuvre réelle** sur le take rate avant de subir une attrition de clients ?

**2.** Vous étendez le TAM vers l'entreprise, l'international et le retail F&B. **Quelle est la part de la croissance des locations** qui vient de ces nouveaux marchés vs le cœur US, et quel est l'ARPU comparé ?

**3.** Le marché US des restaurants indépendants finira par se saturer. **À quel taux de pénétration** estimez-vous votre cœur de marché aujourd'hui, et à quel horizon la croissance des locations US ralentira-t-elle structurellement ?

### Allocation du capital et marges

**4.** Votre objectif long terme est une marge EBITDA de 40 %+. **Quel est le chemin précis** (leviers chiffrés) entre les ~10 % actuels et cet objectif, et sur quel horizon ?

**5.** Le coût des puces mémoire pèsera davantage en 2027. **De combien de points de marge** parle-t-on, et est-ce un choix réversible si les volumes hardware déçoivent ?

**6.** La SBC (~255 M$) est élevée vs le résultat net (342 M$). **Quelle trajectoire de SBC** en pourcentage du CA visez-vous, et les rachats d'actions suffiront-ils à neutraliser la dilution ?

**7.** Vous avez augmenté le programme de rachat de 500 M$. **Comment arbitrez-vous** entre rachats, réinvestissement dans l'IA/nouveaux marchés, et constitution de réserves ?

### Exécution opérationnelle

**8.** La marge brute SaaS est à 81 %. **Quelle part de l'amélioration** vient de l'automatisation par l'IA vs l'effet d'échelle, et où est le plafond ?

**9.** Toast Capital (financement marchands) : **quel est le profil de risque de crédit** de ce portefeuille en cas de ralentissement de la restauration, et comment le provisionnez-vous ?

**10.** Le segment matériel reste déficitaire en marge brute. **Est-ce un choix permanent** (produit d'appel) ou visez-vous le seuil de rentabilité hardware à terme ?

### Risques

**11.** En cas de récession touchant la consommation discrétionnaire en restauration, **quelle est la sensibilité** de votre revenu FinTech (indexé sur le GPV) et quel est votre scénario de stress ?

**12.** Quel est le **concurrent que vous prenez le plus au sérieux** aujourd'hui — Clover par sa distribution, Square par son écosystème, ou un nouvel entrant — et pourquoi ?

**13.** L'IA générative pourrait permettre à des concurrents de combler rapidement votre avance fonctionnelle. **Qu'est-ce qui protège durablement** votre moat de spécialisation restauration ?

### Vision et gouvernance

**14.** La structure à double classe d'actions concentre le vote chez les fondateurs. **Comment garantissez-vous** un contre-pouvoir et l'alignement avec les actionnaires minoritaires sur le long terme ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui dans le modèle Toast, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le moat est plus mince que vendu

Les bulls vantent les switching costs et la spécialisation restauration. **Problème** : le marché de la POS restauration est **encombré et concurrentiel** — Clover (Fiserv) domine le petit segment (~20 %), Square, Shift4, Lightspeed, NCR et Oracle se battent tous pour des parts. Un restaurant peut migrer, et la fidélité tient au prix, au service et aux fonctionnalités, pas à un verrouillage absolu. Si l'avance fonctionnelle se comble (notamment via l'IA générative que tous peuvent déployer), Toast n'est qu'un acteur de plus dans une **guerre de prix sur le take rate**.

### 2. Une valorisation qui ne pardonne pas

À **P/E ~39x** sur le trailing, Toast se paie une prime considérable vs ses pairs (Fiserv ~14x, Square ~18x). Pour justifier ce multiple, la croissance ET l'expansion de marge doivent rester quasi parfaites. La **chute de ~15 % après un T1 2026 pourtant supérieur aux attentes** est la démonstration empirique : le titre ne tolère aucune déception. Une simple guidance prudente a effacé un milliard de capitalisation.

### 3. Les marges réelles sont minces et menacées

La marge nette consolidée est de **~6 %** seulement, dépendante du volume de paiements. Le segment matériel est **structurellement déficitaire** en marge brute, et le coût des puces mémoire va peser davantage en 2027. La rentabilité « ajustée » (EBITDA 633 M$) exclut une SBC élevée (~255 M$) — l'écart entre image ajustée et réalité GAAP est un test permanent.

### 4. La concentration et la cyclicité

Le revenu FinTech (~82 % du CA) est **indexé sur le volume de paiements** des restaurants — donc directement exposé au **cycle de consommation discrétionnaire**. Une récession, une hausse des coûts pour les restaurateurs ou une vague de fermetures comprimerait immédiatement le GPV et le revenu. La concentration géographique (~96 % US) ajoute un risque de marché unique.

### 5. Le concurrent que les bulls sous-estiment : Fiserv/Clover

Clover domine déjà le petit segment (~20 % vs ~17 % pour Toast) avec la **puissance de distribution de Fiserv** et un bilan colossal. C'est la démonstration que Toast **n'est pas seul ni dominant** sur son cœur de marché, et qu'un géant peut casser les prix ou surinvestir en fonctionnalités. Les bulls extrapolent la croissance de Toast sans intégrer la capacité de riposte de rivaux mieux capitalisés.

### 6. Gouvernance et signaux d'initiés

La **structure à double classe d'actions** prive les minoritaires de contre-pouvoir réel. Et les **ventes d'initiés sont systématiques** : 17 ventes / 0 achat sur 6 mois, dont des ventes répétées du PDG. Même liées au vesting, l'absence totale d'achat sur le marché ouvert est un signal de conviction limité des dirigeants au cours actuel.

### Le scénario catastrophe unique
**Saturation du marché US + guerre de prix sur le take rate + récession en restauration, simultanément.** Dans ce cas : la croissance des locations ralentit, le take rate se comprime sous la pression de Clover/Square, le GPV recule avec la consommation, et la prime de valorisation (~39x) se dégonfle vers ~20x. Le titre, déjà passé de 49,7 $ à ~26,8 $, pourrait revisiter le bas de sa fourchette. Probabilité d'un scénario sévère : non négligeable (20-30 %) en cas de retournement macro.

### Conclusion short
Toast est une **bonne entreprise désormais rentable** — mais **pas nécessairement une bonne action à ce prix**. À ~39x les bénéfices, le titre intègre une croissance soutenue ET une expansion de marge quasi parfaite, dans un secteur où le moat est contestable et où un concurrent géant (Clover) domine déjà le cœur de marché. La qualité du business n'est plus le débat — c'est le **point d'entrée sur la valorisation** qui fait tout le risque.`,
  },
];

export default { ...meta, modules };
