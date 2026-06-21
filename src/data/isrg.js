// ============================================================
//  DOSSIER : Intuitive Surgical, Inc. (ISRG)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "isrg",                     // identifiant d'URL : /dossier/isrg
  ticker: "ISRG",
  name: "Intuitive Surgical, Inc.",
  exchange: "Nasdaq",
  sector: "Technologies médicales — Chirurgie robotique",
  initials: "ISRG",                 // affiché dans la pastille
  tagline: "Pionnier et leader mondial de la chirurgie robotique assistée, modèle « lames de rasoir » à revenus récurrents.",
  riskScore: 72,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "isrg.html",
  updated: "2026-06",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Intuitive Surgical est le **pionnier et leader mondial de la chirurgie robotique assistée**, fondé en 1995 et coté au Nasdaq. Le chiffre d'affaires 2025 atteint **10,06 Mds$** (+20,5 % a/a), pour un bénéfice net de **2,86 Mds$**. La société emploie ~17 000 personnes et a franchi le cap de **20 millions de patients** traités avec ses systèmes da Vinci.

Le cœur de la thèse est un **modèle « lames de rasoir » (razor-and-blades)** : Intuitive vend (ou place) des systèmes robotiques coûteux, puis génère des **revenus récurrents** à chaque intervention via les instruments à usage limité, les accessoires et les services. C'est ce qui explique que **~86 % du CA est récurrent**, déconnecté du rythme de vente des machines.

Trois flux de revenus :
- **Instruments & accessoires (~64 % du CA)** : consommables à usage limité, facturés à chaque procédure — le moteur de marge et de récurrence
- **Systèmes (~22 %)** : vente ou placement (leasing/usage) des robots da Vinci et Ion
- **Services (~14 %)** : maintenance, support 24/7, monitoring, formation

## Principaux produits et services

- **da Vinci 5** : plateforme phare de 5ᵉ génération (lancée 2024), avec retour de force (Force Feedback), architecture numérique intégrée et IA d'assistance. ~53 % des placements da Vinci au T1 2026, ~85 % des placements US
- **da Vinci (multi-port & SP)** : gammes antérieures et port unique pour chirurgie générale, urologique, gynécologique, thoracique
- **Ion** : système endoluminal pour **biopsies pulmonaires** mini-invasives — le segment à plus forte croissance (+39 % de procédures au T1 2026)
- **Écosystème numérique** : Case Insights, My Intuitive, outils de formation IA, télémétrie et analytics

## Clients, fournisseurs, concurrents

**Clients** : hôpitaux, systèmes hospitaliers, centres chirurgicaux ambulatoires aux États-Unis, en Europe et en Asie. La décision d'achat est un **investissement capital** validé par les comités hospitaliers.

**Fournisseurs** : fabricants de composants de précision (optique, capteurs, électronique), sous-traitants d'usinage, fournisseurs de matériaux médicaux. Chaîne industrielle interne fortement intégrée (Sunnyvale, Mexicali, Europe).

**Concurrents** : **Medtronic** (système Hugo, cleared US en urologie seulement), **Johnson & Johnson** (plateforme Ottava, en cours de soumission FDA), **CMR Surgical** (Versius), **Stereotaxis**, et des acteurs chinois (**MicroPort**) sur les marchés hors États-Unis.

## Modalités contractuelles

Le modèle repose sur l'**effet de verrouillage (lock-in)** : une fois le robot installé et l'équipe chirurgicale formée, l'hôpital est lié à l'écosystème Intuitive pour toute la durée de vie du système (~10 ans). Les instruments sont **propriétaires et à usage limité** (nombre de procédures plafonné), générant un revenu prévisible par intervention. Les contrats de service pluriannuels et les courbes d'apprentissage des chirurgiens cimentent cette récurrence — c'est la source de la visibilité et de la résilience exceptionnelles du modèle.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Intuitive Surgical dans la chaîne de valeur

Intuitive occupe une position d'**équipementier médical intégré (OEM)** : elle conçoit, fabrique, vend et entretient ses propres systèmes, tout en contrôlant le flux de consommables. Cette **intégration verticale poussée** est une force du modèle — peu d'intermédiaires entre la R&D et le patient.

### Amont — Intrants et composants

**Composants de précision** :
- Optique et systèmes de vision (caméras 3D haute définition, endoscopes)
- Capteurs de force et d'effort (cœur du Force Feedback du da Vinci 5)
- Électronique, semi-conducteurs, cartes de contrôle
- Actionneurs, moteurs miniaturisés, mécanique de précision

**Matériaux médicaux** :
- Aciers chirurgicaux, polymères médicaux, matériaux biocompatibles pour les instruments à usage limité

**Sous-traitance & fabrication** :
- Sites internes (Sunnyvale CA, Mexicali Mexique, Europe) — l'essentiel de l'assemblage critique est internalisé
- Sous-traitants spécialisés pour composants non stratégiques

---

### Intuitive — Fabrication, distribution et service

**Production** : usines propriétaires, contrôle qualité strict (dispositifs médicaux soumis FDA / EU MDR)

**Distribution** :
- Force de vente directe (équipes commerciales capital + cliniques)
- Acquisition récente des activités de distribution da Vinci / Ion en **Italie, Espagne, Portugal** (T1 2026, ~566 M$) — internalisation de la distribution européenne

**Service & support** :
- Réseau de spécialistes service client, installation, maintenance, support 24/7, monitoring proactif de la santé des systèmes

---

### Aval — Clients finaux

**Hôpitaux & systèmes hospitaliers** : décideurs capitaux, achètent ou prennent en leasing les robots

**Chirurgiens** : utilisateurs formés sur la plateforme da Vinci — souvent dès la résidence/fellowship, créant un verrouillage générationnel

**Patients** : bénéficiaires finaux des interventions mini-invasives (urologie, gynécologie, chirurgie générale, thoracique)

**Coentreprises** : **JV Intuitive-Fosun** en Chine (Shanghai/Hong Kong) — accès au marché chinois via partenariat avec Fosun Pharma

---

### Le pari central de la chaîne
L'intégration verticale et le contrôle propriétaire des consommables permettent à Intuitive de **capter la valeur sur tout le cycle de vie** du système. La dépendance amont aux composants de précision et la complexité réglementaire (FDA, EU MDR) constituent des barrières à l'entrée — mais aussi des points de vigilance (tarifs douaniers, ruptures de composants).`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires — Exercice 2025

### Par nature de revenu (CA 2025 : 10,06 Mds$)

| Flux | Poids approximatif | Dynamique |
|---|---|---|
| Instruments & accessoires | ~64 % | Moteur récurrent, croît avec le volume de procédures (+23 % au T1 2026) |
| Systèmes (robots) | ~22 % | Cyclique, tiré par le cycle d'upgrade da Vinci 5 |
| Services | ~14 % | Récurrent, stable, croît avec la base installée |

**Point clé** : ~86 % du CA est **récurrent** (instruments + services), ce qui découple la performance du rythme volatil des ventes de machines. Au T1 2026, le revenu récurrent a crû de +23 % à ~2,4 Mds$, **plus vite que la base installée (+12 %)** — signe que l'utilisation par système et les services numériques montent en puissance.

---

### Par moteur opérationnel

| Indicateur | 2025 / T1 2026 | Tendance |
|---|---|---|
| Procédures mondiales | +17 % (T1 2026) | Cœur de la thèse — chaque procédure = consommables |
| Procédures da Vinci | +16 % (T1 2026) | Solide, élargissement au-delà de l'urologie |
| Procédures Ion (poumon) | +39 % (T1 2026) | Segment le plus dynamique |
| Base installée systèmes | 11 395 unités (+12 %) | Effet boule de neige du parc |
| Placements da Vinci T1 2026 | 431 (vs 367) | Dont 232 da Vinci 5 |

---

### Répartition géographique

- **États-Unis** : marché dominant, où le da Vinci 5 représente ~85 % des placements — verrouillage des budgets capitaux hospitaliers avant l'arrivée de la concurrence
- **International (OUS)** : Europe (distribution internalisée Italie/Espagne/Portugal), Asie
- **Chine** : via la JV Fosun — **point faible** : les placements chinois sont tombés à ~4 unités au T1 2026 sous l'effet des robots domestiques et de la pression réglementaire
- **Japon / Chine** : la direction a explicitement cité le ralentissement Chine/Japon comme frein au taux de croissance

---

### Profil de marge et rentabilité

- **Marge brute non-GAAP** : ~65-66,5 % (2025), en repli vs 69,1 % en 2024 — **impact tarifs douaniers ~1,7 % du CA** + montée en cadence du da Vinci 5
- **Marge opérationnelle pro forma** : ~37 % (T4 2025)
- **Free cash-flow 2025** : ~2,5 Mds$ (vs 1,3 Md$ en 2024) — quasi-doublement
- **BPA pro forma** : +22 % en 2025

**Lecture** : Intuitive combine **croissance volumique forte** et **récurrence élevée**, mais la marge brute est temporairement comprimée par les tarifs et le ramp-up du da Vinci 5 — un arbitrage de court terme pour sécuriser le parc installé à long terme.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Coûts de changement (switching costs) — Moat le plus puissant
C'est le cœur du fossé. Une fois qu'un hôpital a investi dans un système da Vinci (~1-2 M$) et que ses équipes chirurgicales sont **formées sur la plateforme**, changer de fournisseur impose un coût prohibitif : nouvel investissement capital, **reformation complète du bloc opératoire**, courbe d'apprentissage à reparcourir. Ce verrouillage se compte en **années et en risque patient**.

### 2. Verrouillage générationnel des chirurgiens
La plupart des chirurgiens en exercice ont été **formés sur da Vinci pendant leur résidence ou fellowship**. Cette familiarité acquise tôt crée une préférence durable et un avantage que ni Medtronic (Hugo) ni J&J (Ottava) ne peuvent rattraper rapidement — ils doivent gravir la même courbe d'apprentissage de plus d'une décennie qu'Intuitive a déjà parcourue.

### 3. Modèle « lames de rasoir » — Récurrence et marge
Avec ~86 % de revenus récurrents, Intuitive ne dépend pas de la vente de machines mais du **volume de procédures**. Chaque robot installé génère un flux d'instruments propriétaires à usage limité pendant ~10 ans. C'est un moat **économique et contractuel** : le revenu est prévisible, à forte marge, et croît mécaniquement avec le parc.

### 4. Données et écosystème numérique — Moat émergent
Intuitive accumule les **données chirurgicales** de millions de procédures (20 M de patients). Combinées à l'IA (Case Insights, formation, assistance), elles créent un avantage de **plateforme data-centrique** difficile à répliquer : plus le parc grandit, plus les données s'enrichissent, plus l'outil s'améliore.

### 5. Barrières réglementaires et base installée
Chaque système et chaque indication exige des **autorisations FDA / EU MDR** longues à obtenir. La base installée de **11 395 systèmes** et l'avance de 20+ ans constituent une barrière à l'entrée structurelle. Le da Vinci 5 (cleared cardiaque en 2026) étend continuellement le périmètre d'indications.

## Positionnement vs concurrence

| Critère | Intuitive | Medtronic (Hugo) | J&J (Ottava) |
|---|---|---|---|
| Base installée | 11 395 systèmes | Naissante | Pré-lancement |
| Indications US | Larges | Urologie seulement | Soumission FDA |
| Écosystème data/IA | Très avancé | En développement | En développement |
| Modèle récurrent | ~86 % du CA | À construire | À construire |
| Avance temporelle | 20+ ans | — | — |

## Pouvoir de négociation

- **Vis-à-vis des hôpitaux** : **Élevé** — switching costs massifs, écosystème propriétaire, mais sous surveillance croissante des budgets et de la pression sur le coût des soins
- **Vis-à-vis des fournisseurs** : **Modéré à élevé** — intégration verticale, mais dépendance aux composants de précision et exposition tarifaire
- **Vis-à-vis des chirurgiens** : **Très élevé** — la formation initiale crée une fidélité quasi-structurelle`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Technologies médicales / chirurgie (juin 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Intuitive Surgical** | **ISRG US** | **~145 Mds$** | **~14x** | **~42x** | **~49x** | **0 %** | **~16 %** |
| Medtronic | MDT US | ~115 Mds$ | ~3,2x | ~17x | ~24x | ~3,2 % | ~9 % |
| Johnson & Johnson | JNJ US | ~390 Mds$ | ~4,3x | ~16x | ~16x | ~3,0 % | ~22 % |
| Stryker | SYK US | ~135 Mds$ | ~6x | ~28x | ~32x | ~0,8 % | ~15 % |
| Boston Scientific | BSX US | ~140 Mds$ | ~7x | ~33x | ~38x | 0 % | ~12 % |

*Données estimatives sur la base des cours et publications disponibles à juin 2026. À affiner sur filings SEC directs.*

---

### Analyse comparative

**Intuitive Surgical — Le pure-player premium**
ISRG se paie une **prime de valorisation massive** (P/E ~49x vs ~24x pour la moyenne du secteur medtech) justifiée par sa croissance organique (+20 % de CA), sa récurrence (~86 %) et son moat. Le P/E actuel (~49x) reste néanmoins **bien en-deçà de sa médiane 5 ans (~72x)** — le marché a dératé le titre en 2026 (-29 % YTD). La question n'est pas la qualité de l'actif mais le **prix payé pour cette qualité**.

**Medtronic — Le concurrent diversifié et bon marché**
MDT attaque le marché soft-tissue avec **Hugo** (cleared US en urologie seulement). Diversifié, rentable, peu cher (P/E ~24x), il dispose de moyens colossaux mais reste **structurellement en retard** : Piper Sandler a relevé qu'au moins un grand système hospitalier US a refusé même d'évaluer Hugo.

**Johnson & Johnson — La menace à long terme**
J&J et sa plateforme **Ottava** (soumission FDA de novo en chirurgie générale début 2026) sont le challenger le mieux capitalisé. Mais Ottava doit gravir la **même courbe réglementaire et de formation d'une décennie** qu'Intuitive a déjà parcourue. Menace réelle mais lointaine.

**Stryker / Boston Scientific — Les comparateurs de croissance premium**
Ces medtechs de croissance se paient aussi des multiples élevés (P/E 32-38x), ce qui **relativise** la prime d'ISRG : dans l'univers des actifs medtech de qualité, ISRG n'est pas une aberration absolue, mais reste le plus cher.

---

### Le ratio qui compte : croissance procédures × récurrence
ISRG se juge sur sa capacité à **maintenir une croissance des procédures à deux chiffres** (guidance FY26 : +13,5 à +15,5 %) tout en défendant ses marges face aux tarifs et à la concurrence. Tant que le volume de procédures croît et que le parc s'étend, le moteur récurrent tourne. La décote de multiple vs l'historique (49x vs 72x) reflète l'inquiétude sur la **décélération** plus que sur une dégradation des fondamentaux.`,
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
| Chiffre d'affaires | **2,77 Mds$** | 2,25 Mds$ | 2,62 Mds$ | **+150 M$ ✓ (+23 % a/a)** |
| BPA non-GAAP | **2,50 $** | 1,81 $ | — | **+38 % a/a** |
| BPA GAAP dilué | 2,28 $ | 1,92 $ | — | — |
| Résultat net (GAAP) | 821,5 M$ | 698 M$ | — | **Supérieur** |
| Résultat opérationnel | 855,3 M$ | — | — | En hausse |

**Intuitive a largement dépassé le consensus** (CA 2,77 Mds$ vs 2,62 Mds$ attendus) — un trimestre quasi-parfait.

---

### Facteurs clés par segment

- **Procédures mondiales** : +17 % — moteur de la croissance des consommables
- **da Vinci** : +16 % de procédures, élargissement au-delà de l'urologie (chirurgie générale, gynécologie en tête)
- **Ion (poumon)** : **+39 %** — segment le plus dynamique, sous-estimé par le marché
- **Instruments & accessoires** : +23 % — récurrence à forte marge
- **Placements** : 431 da Vinci (dont 232 da Vinci 5, soit ~53 % du mix) vs 367 un an plus tôt

---

### Évolution des marges

- **Marge brute ~66,3 %** — sous pression vs ~69 % historique, du fait des **tarifs douaniers (~1 % de pénalité de CA intégrée à la guidance FY26)** et du ramp-up da Vinci 5
- **Marge opérationnelle** en expansion grâce à l'effet d'échelle, malgré la hausse des dépenses commerciales et R&D

---

### Perspectives et guidance

- **Guidance FY26 procédures relevée à +13,5 % / +15,5 %** — mais **en dessous** des +17 à +20 % de 2025, signalant une **normalisation** post-pandémie
- **Changement de ton** : plus prudent. La direction a explicitement cité le **frein Chine/Japon** et baké une **pénalité tarifaire** dans la marge
- **da Vinci 5 cleared pour la chirurgie cardiaque** (janvier 2026) — extension du périmètre d'indications

---

### Signaux d'alerte bilan

- **Trésorerie & placements** : ~7,98 Mds$ — bilan ultra-solide, dette quasi nulle (passifs totaux ~2,51 Mds$)
- **Acquisition européenne** : distribution da Vinci/Ion en Italie/Espagne/Portugal pour ~566 M$ — ajoute ~243 M$ de goodwill et ~163 M$ d'incorporels
- **Rachats d'actions** : ~1,13 Md$ au T1 2026 ; achèvement d'un programme pluriannuel de 9,08 Mds$ (29,4 M d'actions) — signal de confiance du management aux niveaux de valorisation actuels
- **Cash-flow opérationnel** : 911,9 M$ — couvre largement capex, acquisition et rachats

---

### Réaction du marché

Malgré un trimestre **sans faille**, le titre est sous pression : **~407 $ (juin 2026)**, en baisse de **~29 % YTD** et ~27 % sur un an, loin du plus haut 52 semaines (~604 $). Le marché sanctionne la **décélération annoncée** (guidance procédures sous les niveaux 2025), la **compression de marge tarifaire** et un de-rating sectoriel des multiples premium en medtech. Deutsche Bank affiche un objectif Sell à 366 $, tandis que le consensus reste « Buy » avec un objectif moyen ~565 $. Cet écart est le cœur du débat sur la valeur.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2024-2026

**2024** : Ton confiant, centré sur le **lancement du da Vinci 5** et l'adoption précoce. Optimisme sur le cycle d'upgrade à venir.

**2025** : Ton **équilibré et exécutif**. Année de transition managériale (Dave Rosa devient CEO le 1er juillet 2025, Gary Guthart passe président exécutif). Le discours insiste sur l'adoption da Vinci 5, le free cash-flow record (2,5 Mds$) et la discipline opérationnelle.

**2026 (T1)** : Ton **plus prudent et mesuré**. La direction a relevé la guidance procédures (+13,5/+15,5 %) tout en reconnaissant explicitement une **normalisation** et des freins géographiques (Chine/Japon). Mention systématique de l'**impact tarifaire** sur la marge — sans dramatisation, mais en transparence.

---

### Priorités répétées du management

**1. Adoption du da Vinci 5 et cycle d'upgrade** — Thème dominant. La direction met en avant les **taux d'utilisation supérieurs** du da Vinci 5 (architecture numérique, Force Feedback réduisant le temps opératoire et la fatigue du chirurgien). 85 % des placements US sont des da Vinci 5.

**2. Croissance des procédures** — Le vrai juge de paix. Chaque call détaille la croissance par spécialité : élargissement de l'urologie vers la chirurgie générale et la gynécologie. Ion (poumon) est le relais de croissance le plus rapide.

**3. Écosystème numérique et données** — Pivot stratégique vers une **plateforme medicale data-centrique** : Case Insights, formation IA, outils d'analytics. C'est le moat de demain.

**4. Discipline du capital** — Free cash-flow record, rachats massifs (9,08 Mds$ de programme achevé), bilan sans dette. Le management rachète **aux niveaux de valorisation actuels**, signal de conviction.

**5. Gestion des vents contraires** — Reconnaissance transparente : tarifs douaniers (~1 % de pénalité marge), ralentissement Chine/Japon, pression GLP-1 sur la bariatrie, rappel FDA SureForm (stapler).

---

### Analyse du sentiment

- **Confiance** : Élevée sur le moat et l'exécution, **plus mesurée** sur le rythme de croissance court terme. Le management ne survend pas.
- **Transparence** : Remarquable. Les freins (Chine, tarifs, GLP-1, rappel) sont nommés sans euphémisme — gage de crédibilité.
- **Cohérence** : Forte. Le pivot data-centrique et le cycle da Vinci 5 sont martelés depuis 2024 sans dévier.

> **À lire entre les lignes** : le management vend une **transition de plateforme** (da Vinci 5) et un **élargissement d'indications**, tout en préparant les investisseurs à une **décélération ordonnée** post-pandémie. La prudence sur la guidance est un choix de crédibilité, pas un aveu de faiblesse.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Dave Rosa — Directeur Général (depuis le 1er juillet 2025)

**Parcours** : Ancien Président d'Intuitive, Rosa a travaillé **des décennies** aux côtés de Gary Guthart. Sa nomination est présentée comme une **transition de continuité** : profil orienté patients, stratégie, qualité produit et excellence opérationnelle. Guthart l'a décrit comme « uniquement qualifié » pour mener l'entreprise.

**Enjeu** : Rosa hérite d'un actif exceptionnel mais à un moment charnière — transition da Vinci 5, montée de la concurrence (Hugo, Ottava), normalisation de la croissance. Son bilan en tant que CEO reste **à écrire**, ce qui constitue un point de vigilance (track record CEO court).

---

### Gary Guthart — Président exécutif du conseil (depuis juillet 2025)

**Bilan** : CEO pendant **15 ans** (2010-2025). Sous sa direction, Intuitive est passé d'un acteur de niche au **leader incontesté** de la chirurgie robotique : lancement des générations da Vinci successives, da Vinci 5, Ion, SP, expansion internationale, passage de ~20 M de patients traités. **Création de valeur actionnariale considérable** sur la période. Reste en soutien actif de la transition et en conseil senior.

---

### Allocation du capital — Historique

| Indicateur | Lecture |
|---|---|
| Free cash-flow 2025 | 2,5 Mds$ (vs 1,3 Md$ en 2024) — quasi-doublement |
| Rachats d'actions | Programme pluriannuel de 9,08 Mds$ (29,4 M d'actions) achevé ; 1,13 Md$ au T1 2026 |
| Dividende | **Aucun** — réinvestissement total dans la croissance et les rachats |
| Bilan | ~8 Mds$ de trésorerie, dette quasi nulle — forteresse financière |
| Acquisitions | Ciblées (distribution européenne ~566 M$) — disciplinées, pas de méga-deal |

**Tendance** : Allocation **disciplinée et conservatrice**. Pas de dividende (cohérent avec une croissance forte), rachats opportunistes aux niveaux actuels, bilan sans levier. Le ROE 5 ans (~16 %) est solide pour une entreprise qui conserve une trésorerie massive.

---

### Signaux d'alerte

- **Ventes d'initiés** : les dirigeants (Guthart, Rosa, autres) ont **vendu des actions** ces derniers mois (~3,1 M$ sur 3 mois, davantage sur 6 mois), **aucun achat** — fréquent pour des dirigeants rémunérés en actions, mais à noter
- **Transition CEO** : track record de Rosa comme CEO encore à prouver
- **Pas de transactions avec parties liées significatives** identifiées au-delà de la JV Fosun (structurelle, contrôlée)
- **Rémunération** : élevée mais alignée sur les pratiques medtech premium
- **Type** : **gestionnaires professionnels** issus du rang (Guthart, Rosa), pas des fondateurs — avantage de continuité et de connaissance métier, à un stade où l'entreprise est mature et leader établi`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Hausses significatives (+5 %)

**2023-2024 — Reprise post-pandémie et lancement da Vinci 5** : Forte appréciation portée par le rebond des procédures électives (rattrapage post-COVID) et l'enthousiasme autour du lancement du da Vinci 5. Le titre a atteint son plus haut historique (~610 $) en janvier 2025.

**Publications trimestrielles 2024-2025** : Intuitive a battu le consensus dans **22 des 24 derniers trimestres** — chaque beat a soutenu le cours. Croissance des procédures à deux chiffres et adoption da Vinci 5 ont alimenté la dynamique.

**Janvier 2026 — da Vinci 5 cleared cardiaque** : L'extension aux procédures cardiaques a élargi le marché adressable, soutien ponctuel au titre.

---

### Baisses significatives (-5 %)

**Tout au long de 2026 — De-rating massif (-29 % YTD)** : Malgré des fondamentaux solides, le titre est tombé de ~604 $ à ~407 $. Quatre forces cumulées, **invisibles dans le compte de résultat** : (1) robots domestiques chinois réduisant les placements Chine à ~4 unités au T1, (2) **GLP-1** comprimant la bariatrie US (~-10 %), (3) **alerte FDA** sur les recharges de stapler SureForm, (4) compression du multiple premium (de-rating sectoriel medtech).

**T1 2026 — Guidance prudente** : Bien que le trimestre ait battu le consensus, la **guidance procédures sous les niveaux 2025** (+13,5/+15,5 % vs +17/+20 %) a déçu les attentes de croissance, pesant sur le titre.

**Juin 2026 — Révisions d'objectifs** : Deutsche Bank a abaissé son objectif à 366 $ (Sell), BofA à 515 $, Piper Sandler à 580 $ — vague de révisions à la baisse traduisant l'inquiétude sur la décélération.

---

### Facteurs structurels

- **Sensibilité au multiple** : à ~49x les bénéfices (vs médiane 5 ans ~72x), le titre est très **sensible aux révisions de croissance** — toute déception comprime le P/E
- **Bêta de croissance** : valeur de croissance premium, volatile en phase de de-rating sectoriel
- **Pas de dividende** : la performance dépend entièrement de l'appréciation du cours et des rachats
- **Beat systématique** : 22 beats sur 24 trimestres — base d'investisseurs habituée à l'excellence opérationnelle, donc exigeante`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du CA** :
- Croissance des procédures : guidance FY26 +13,5/+15,5 %, normalisation vers ~12-14 %/an sur 2027-2028
- Effet récurrence : ~86 % du CA récurrent croît avec le parc et l'utilisation
- Gains de parts : Intuitive défend une position dominante ; la concurrence (Hugo, Ottava) grignote surtout hors US
- Effet prix : modéré (instruments propriétaires), pression possible sur les systèmes
- **Croissance CA estimée : ~+13-16 %/an**

**Marges** :
- Marge brute sous pression court terme (tarifs ~1 % de pénalité, ramp-up da Vinci 5) puis normalisation possible à mesure que la production monte en cadence
- Effet de levier opérationnel sur les volumes croissants

**Coûts financiers** : Quasi nuls — bilan sans dette, trésorerie génératrice d'intérêts

**Dilution** : **Relutive** — les rachats massifs (9,08 Mds$ achevés) réduisent le nombre d'actions, soutenant le BPA

---

### Estimations BPA (non-GAAP)

| Exercice | BPA estimé | Croissance | P/E au cours actuel (~407 $) |
|---|---|---|---|
| 2025 (réalisé) | **~8,30 $** | +22 % | — |
| **2026E** | **~9,30-9,80 $** | **+12-18 %** | **~42-44x** |
| **2027E** | **~10,80-11,50 $** | **+15-17 %** | **~36-38x** |
| **2028E** | **~12,50-13,50 $** | **+15-17 %** | **~30-33x** |

*BPA non-GAAP indicatif ; le consensus voit le FCF passer de ~2,3 Mds$ à ~6,1 Mds$ d'ici 2030.*

---

### Sensibilité

- **Scénario optimiste** (procédures +16 %, da Vinci 5 maximise l'utilisation, marges se redressent) : BPA 2028 ~13,50 $ → P/E 2028 ~30x — justifierait les objectifs analystes (~565 $)
- **Scénario de base** : BPA 2028 ~13,00 $ → P/E 2028 ~31x — valorisation correcte pour un actif de qualité en croissance
- **Scénario pessimiste** (décélération sous +12 %, concurrence érode les parts, tarifs persistent) : BPA 2028 ~11,50 $ → P/E 2028 ~35x — peu de marge de sécurité, justifierait l'objectif Sell (~366 $)

**Conclusion** : ISRG ne se valorise pas sur le BPA courant mais sur la **durabilité de la croissance des procédures** et la défense du moat. À ~407 $, le titre a déjà dératé de 49x vs sa médiane de 72x. Le débat n'est pas la qualité (incontestable) mais le **prix payé pour une croissance qui normalise**. Profil favorable pour un investisseur patient si la croissance procédures tient au-dessus de +12 %.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels

**1. Moat quasi-insurmontable** : Coûts de changement massifs, verrouillage générationnel des chirurgiens (formés sur da Vinci dès la résidence), modèle récurrent à ~86 % du CA. Medtronic (Hugo) et J&J (Ottava) doivent gravir la **même courbe d'une décennie** qu'Intuitive a déjà parcourue.

**2. Cycle d'upgrade da Vinci 5** : Le da Vinci 5 (~85 % des placements US) déclenche un **renouvellement systémique** du parc, avec des taux d'utilisation supérieurs (architecture numérique, Force Feedback). Ce « refresh wall » verrouille les budgets capitaux hospitaliers pour 10 ans avant que la concurrence s'installe.

**3. Relais de croissance Ion (poumon)** : +39 % de procédures au T1 2026 — un marché du diagnostic pulmonaire mini-invasif que le marché **n'a pas pleinement valorisé**. Intuitive scale agressivement dans le diagnostic à haute valeur.

**4. Pivot data-centrique** : 20 M de patients traités, accumulation de données chirurgicales + IA (Case Insights, formation). Plus le parc grandit, plus la plateforme s'améliore — un moat composé.

**5. Forteresse financière** : ~8 Mds$ de trésorerie, dette quasi nulle, FCF de 2,5 Mds$ (doublé), rachats massifs aux niveaux actuels — la direction achète sa propre action en signal de conviction.

**6. De-rating offrant un point d'entrée** : P/E ~49x vs médiane 5 ans ~72x. Objectif analyste consensus ~565 $ (+39 %). Le marché sanctionne une décélération, pas une dégradation des fondamentaux.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents au business

**1. Normalisation de la croissance** : La guidance procédures FY26 (+13,5/+15,5 %) est **nettement sous** les +17/+20 % de 2025. La phase d'hyper-croissance post-pandémie se termine. À 49x les bénéfices, **toute décélération supplémentaire comprime brutalement le multiple**.

**2. Concurrence qui se réveille** : Hugo (Medtronic) cleared US, Ottava (J&J) en soumission FDA, robots chinois (MicroPort) déjà disruptifs hors US (placements Chine tombés à ~4 unités). Le moat tient aux États-Unis mais **s'érode à l'international**.

**3. Compression de marge structurelle** : Tarifs douaniers (~1 % de pénalité de CA bakée dans la guidance), ramp-up da Vinci 5. La marge brute est passée de ~69 % à ~66 % — si les tarifs persistent, la profitabilité plafonne.

### Analyse pré-mortem
Que se passerait-il si ISRG cotait 300 $ dans 2 ans ? Scénario : décélération des procédures sous +12 %, percée de Hugo/Ottava aux US, GLP-1 érodant durablement la bariatrie, tarifs comprimant les marges, et compression du P/E de 49x à 30x. La valorisation chuterait de 25-30 % même avec une croissance positive du BPA.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat se polarise entre bulls (qualité du moat) et bears (décélération). La vérité est peut-être que **la qualité n'est plus la question — le prix l'est**. Un actif d'exception à 49x reste cher si la croissance normalise à +13 %. À l'inverse, le de-rating de 72x à 49x a peut-être déjà purgé l'excès. Le risque/rendement dépend entièrement de la **trajectoire des procédures** : au-dessus de +14 %, le titre est attractif ; en-dessous de +12 %, la prime ne tient pas.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus — RISQUE FAIBLE
Le modèle récurrent (instruments à usage limité, services pluriannuels) est encadré par US GAAP (ASC 606). La reconnaissance est **prévisible et peu manipulable** : revenu à la procédure pour les consommables, étalé pour les services. Peu de complexité vs un modèle à contrats long terme. **À surveiller** : la répartition systèmes (vente vs leasing/usage), qui affecte le timing de reconnaissance.

### Goodwill et immobilisations incorporelles — RISQUE MODÉRÉ
L'acquisition de la distribution européenne (Italie/Espagne/Portugal, T1 2026) a ajouté **~243 M$ de goodwill et ~163 M$ d'incorporels** (relations clients). Montants modestes au regard du bilan, mais **premier signal d'une stratégie M&A** à suivre. **À surveiller** : les tests de dépréciation et l'accélération éventuelle des acquisitions.

### Coentreprise Fosun (Chine) — RISQUE MODÉRÉ
La **JV Intuitive-Fosun** (Shanghai/Hong Kong) est consolidée avec un intérêt minoritaire présenté séparément en capitaux propres. Structure **contrôlée** mais exposée au risque géopolitique et réglementaire chinois (placements Chine en chute). **À surveiller** : la performance de la JV et l'impact des robots domestiques chinois.

### Rémunération en actions (SBC) — RISQUE MODÉRÉ
Medtech premium = SBC élevée. L'écart entre BPA GAAP (2,28 $) et non-GAAP (2,50 $) au T1 2026 reflète notamment la SBC et l'amortissement. **À surveiller** : la dilution liée à la SBC, partiellement compensée par les rachats massifs.

### Tarifs douaniers et engagements — RISQUE MODÉRÉ
La direction a **explicitement baké ~1 % de pénalité de CA** dans la guidance marge FY26 pour les tarifs. C'est un facteur **structurel externe** correctement provisionné, mais à surveiller en cas d'escalade commerciale.

### Rappel produit (FDA SureForm) — RISQUE FAIBLE À MODÉRÉ
Une **alerte FDA** a visé les recharges de stapler SureForm 30 (8 mm gris) pour staplers à pointe courbée. Risque de réputation et de coût ponctuel, mais **circonscrit** et géré de manière transparente.

### Ventes d'initiés — RISQUE MODÉRÉ
Les dirigeants ont **vendu des actions** ces derniers mois (aucun achat). Fréquent pour une rémunération en actions, mais l'absence totale d'achats à des niveaux de valorisation dératés (407 $ vs 604 $) est à noter.

### Flux de trésorerie vs résultat — RISQUE FAIBLE
FCF de 2,5 Mds$ en 2025, cash-flow opérationnel de 911,9 M$ au T1 2026 couvrant largement capex, acquisition et rachats. **Forte qualité des bénéfices** — le résultat se traduit bien en cash.

---

### Verdict global
**Risque comptable : FAIBLE.** Intuitive présente un bilan **forteresse** (~8 Mds$ de trésorerie, dette quasi nulle), une forte conversion bénéfice→cash, et une comptabilité simple et lisible. Les zones de vigilance (goodwill européen naissant, JV Fosun, tarifs, ventes d'initiés) sont **modestes et transparentes**. Aucun signal de maquillage. La complexité reste faible — un profil comptable rassurant, l'enjeu se situe sur la **croissance opérationnelle**, pas sur la qualité des comptes.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour le PDG d'Intuitive Surgical (Dave Rosa)

### Stratégie et avantage concurrentiel

**1.** La guidance procédures FY26 (+13,5/+15,5 %) est nettement sous les +17/+20 % de 2025. **Cette normalisation est-elle structurelle ou conjoncturelle** (Chine/Japon, GLP-1) ? À quel taux de croissance des procédures « de croisière » devons-nous nous attendre sur 2027-2028 ?

**2.** Medtronic (Hugo) et J&J (Ottava) attaquent le soft-tissue. **Quelle est votre part de marché réelle** par géographie, et où voyez-vous le risque d'érosion le plus concret au cours des 3 prochaines années ?

**3.** Les robots domestiques chinois ont réduit vos placements Chine à ~4 unités au T1. **Quel est votre plan pour la Chine** au-delà de la JV Fosun, et combien le marché chinois pèse-t-il dans votre TAM long terme ?

### Allocation du capital

**4.** Vous avez ~8 Mds$ de trésorerie, pas de dette, pas de dividende. **Pourquoi ne pas initier un dividende** ou accélérer les rachats ? Quel est votre cadre d'allocation entre R&D, M&A, rachats et retour aux actionnaires ?

**5.** L'acquisition de la distribution européenne marque un tournant M&A. **Faut-il s'attendre à une stratégie d'acquisitions plus active**, et dans quels domaines (distribution, adjacences technologiques, données) ?

**6.** Vous rachetez vos actions à ~407 $ après un de-rating. **Considérez-vous le titre sous-évalué** à ce niveau, et qu'est-ce que cela signale sur votre vision de la valeur intrinsèque ?

### Marges et rentabilité

**7.** Les tarifs douaniers coûtent ~1 % de CA en marge. **Quelle est votre stratégie de mitigation** (relocalisation, pricing, supply chain), et à quel horizon la marge brute peut-elle revenir vers ~69 % ?

**8.** Le ramp-up du da Vinci 5 comprime temporairement la marge. **À quel trimestre la cadence de production atteint-elle son point d'inflexion** de rentabilité ?

### Croissance et innovation

**9.** Ion croît à +39 %. **Quel est le TAM du diagnostic pulmonaire** et au-delà, et envisagez-vous d'étendre la plateforme endoluminale à d'autres organes ?

**10.** Le da Vinci 5 vient d'être cleared en cardiaque. **Quelles indications nouvelles** représentent les plus gros relais de croissance d'ici 2030 ?

**11.** Votre pivot data-centrique (Case Insights, IA) : **comment le monétisez-vous concrètement** ? Est-ce un produit facturé ou un facteur de rétention/utilisation ?

### Risques

**12.** Les GLP-1 érodent la bariatrie (~-10 %). **Quelle part de vos procédures est exposée** aux médicaments anti-obésité, et est-ce un risque structurel ou un simple mix shift ?

**13.** L'alerte FDA SureForm : **quel est l'impact financier et réputationnel** réel, et quelles mesures qualité avez-vous renforcées ?

### Gouvernance et vision

**14.** Vous prenez les rênes après 15 ans de Gary Guthart. **Qu'allez-vous faire différemment**, et quel est le risque que vous perceviez aujourd'hui que le marché ne voit pas encore ?

**15.** À 49x les bénéfices après de-rating, **quelles hypothèses de croissance** justifient selon vous la valorisation actuelle, et quel est le scénario unique qui pourrait nuire durablement à Intuitive ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le « moat insurmontable » est attaqué de trois côtés simultanément

Les bulls vantent le verrouillage des chirurgiens et les switching costs. **Problème** : pour la première fois en 20 ans, Intuitive affronte **trois menaces concurrentes en même temps** — Medtronic (Hugo, cleared US), J&J (Ottava, soumission FDA), et les robots chinois (MicroPort). Le moat tient aux États-Unis, mais **s'effondre déjà en Chine** (placements à ~4 unités). Si Hugo et Ottava obtiennent des clearances larges aux US, le récit du monopole inattaquable s'érode — et à 49x les bénéfices, le titre ne pardonne pas.

### 2. La croissance normalise — et la valorisation ne l'a pas digéré

La guidance procédures FY26 (+13,5/+15,5 %) est **bien sous** les +17/+20 % de 2025. La phase d'hyper-croissance post-pandémie est terminée. Pourtant, le titre se paie encore **~49x les bénéfices** — soit une prime de croissance pour une croissance qui **décélère**. C'est une contradiction : si les procédures convergent vers ~12 %, le P/E « juste » est plus proche de 30x (cf. Fair Ratio Simply Wall St ~31x), soit **~40 % en dessous** du cours actuel.

### 3. Concentration de la croissance et exposition GLP-1

Le cœur historique (urologie) est mature ; la croissance vient de l'**élargissement** (chirurgie générale, gynécologie) et d'Ion. **Mais** : les GLP-1 (anti-obésité) ont déjà comprimé la bariatrie US de ~10 %. Si l'usage des GLP-1 s'étend et réduit structurellement le besoin de chirurgies métaboliques et associées, un **relais de croissance se ferme**. Le marché sous-estime ce risque séculaire.

### 4. La marge plafonne — tarifs et ramp-up

La marge brute est passée de ~69 % à ~66 %, avec une **pénalité tarifaire de ~1 % bakée** et un ramp-up da Vinci 5 coûteux. Les bulls présentent cela comme temporaire. **Et si ça ne l'était pas ?** Une escalade commerciale ou une production da Vinci 5 durablement plus coûteuse plafonnerait la profitabilité — invalidant l'effet de levier opérationnel attendu.

### 5. Le concurrent que les bulls sous-estiment : J&J

Medtronic (Hugo) est en retard et snobé par certains hôpitaux. Mais **J&J (Ottava)** dispose de **140 ans dans la chirurgie**, d'un portefeuille complet (énergie, agrafage, fermeture) et de moyens colossaux. Les bulls répètent qu'Ottava « doit gravir la courbe d'une décennie » — mais J&J peut **subventionner massivement** l'adoption, bundler avec son portefeuille existant, et viser les hôpitaux soucieux du coût. Sous-estimer J&J est l'erreur classique.

### 6. Les ventes d'initiés et l'absence d'achats

Sur 6 mois, les dirigeants ont réalisé **33 transactions, toutes des ventes, aucun achat** (Guthart ~49,5 M$). Certes, la rémunération est en actions — mais **aucun dirigeant n'a acheté** à des niveaux dératés (407 $ vs 604 $). Si le management considérait le titre sous-évalué, pourquoi ne pas acheter à titre personnel ? Le signal des rachats d'entreprise sonne creux face à l'unanimité des ventes individuelles.

### Le scénario catastrophe unique
**Décélération des procédures sous +12 % + percée simultanée de Hugo/Ottava aux US + érosion GLP-1 de la bariatrie + tarifs persistants.** Dans ce cas : la croissance ralentit, la part de marché s'effrite, les marges plafonnent, et le P/E se comprime de 49x vers 30x. Le titre perdrait **30-40 %** même avec un BPA en hausse. La probabilité ? Non négligeable (25-35 %) si la concurrence obtient des clearances larges en 2027-2028.

### Conclusion short
Intuitive est une **entreprise d'exception — mais pas nécessairement une excellente action à 49x une croissance qui normalise**. Le moat US est réel mais s'érode à l'international, la croissance décélère, les marges plafonnent, et trois concurrents bien capitalisés convergent enfin. À ce prix, le titre intègre la **persistance d'un quasi-monopole** dans un secteur où la concurrence vient juste de devenir réelle. L'écart entre le cours (~407 $) et l'objectif consensus (~565 $) ne mesure pas un upside — il mesure le **pari sur la durabilité du monopole**.`,
  },
];

export default { ...meta, modules };
