// ============================================================
//  DOSSIER : NVIDIA Corporation (NVDA)
//  Version 2 — mise à jour post-résultats T2 FY2027 (26 août 2026)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "nvda",                     // identifiant d'URL : /dossier/nvda
  ticker: "NVDA",
  name: "NVIDIA Corporation",
  exchange: "NASDAQ",
  sector: "Semi-conducteurs & infrastructure IA",
  initials: "NVDA",                 // affiché dans la pastille
  tagline: "Monopole de fait sur le calcul accéléré, devenu banquier, bailleur et désormais emprunteur de la construction des usines à IA.",
  riskScore: 67,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "nvda.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

NVIDIA conçoit et vend l'**infrastructure de calcul accéléré** sur laquelle repose l'essentiel de l'intelligence artificielle mondiale. Fondée en 1993 par **Jensen Huang**, Chris Malachowsky et Curtis Priem, la société est passée en trois décennies du statut de fabricant de cartes graphiques pour jeux vidéo à celui de **fournisseur d'usines à IA complètes** — racks, GPU, CPU, réseau, logiciel.

Le chiffre d'affaires de l'exercice **FY2026** (clos le 25 janvier 2026) atteint **215,9 Mds$, en hausse de 65%**. Le deuxième trimestre FY2027 (clos le 26 juillet 2026) porte le rythme à **96,2 Mds$ sur un seul trimestre, +106% sur un an**, dont **89,0 Mds$ de Data Center (+117%)**. Le premier semestre FY2027 cumule **177,8 Mds$**, soit 82% de l'exercice 2026 complet en six mois.

Trois caractéristiques définissent le modèle :

- **Fabless** : NVIDIA ne possède aucune usine. Elle conçoit, TSMC fabrique, SK Hynix/Micron/Samsung fournissent la mémoire HBM, Foxconn/Wistron/Quanta assemblent les serveurs.
- **Vente de systèmes, plus de puces** : la brique commerciale n'est plus un GPU mais un **rack complet** — Vera Rubin, entré en pleine production au T2, incluant le CPU Vera, le réseau NVLink et les commutateurs Spectrum-6.
- **Logiciel comme verrou** : **CUDA**, cuDNN, TensorRT, NIM, Omniverse. Vingt ans de bibliothèques accumulées que les développeurs ne réécrivent pas volontiers.

Marge brute de **75,0%** (GAAP et non-GAAP, identiques) et marge opérationnelle de **66,2%** : ce sont des niveaux de société de logiciel appliqués à du matériel.

## Principaux produits et services

**Data Center (92% du CA — 89,0 Mds$ au T2)**
- **Plateforme Vera Rubin**, en pleine production chez CoreWeave, Google Cloud, Microsoft Azure, Oracle Cloud Infrastructure et Nebius
- **NVIDIA Vera**, premier CPU conçu pour les agents IA — AWS s'est engagé sur **2 millions de GPU** et des CPU Vera
- **Groq 3 LPX**, accélérateur d'inférence interactive, désormais en pleine production
- **Réseau** : Spectrum-6 (optique co-packagée), NVLink, InfiniBand — **+138% sur un an**
- **DSX**, plateforme de conception et d'exploitation d'usines à IA à grande échelle

**Edge Computing (7,2 Mds$, +27%)** : RTX Spark avec Microsoft, DGX Station pour Windows, DRIVE Hyperion (robotaxi), Isaac GR00T (robotique humanoïde), Cosmos 3 (IA physique).

## Clients, fournisseurs, concurrents

**Clients** : les quatre grands hyperscalers américains, plus OpenAI, Anthropic, Meta, SpaceXAI, Oracle, CoreWeave, Nebius, et les programmes d'IA souveraine (Corée du Sud, Japon, Europe, Golfe). Colette Kress a chiffré le capex des **cinq premiers hyperscalers à ~800 Mds$ en 2026 et ~1 300 Mds$ en 2027**.

**Fournisseurs** : **TSMC** (fonderie, packaging CoWoS), **SK Hynix** (partenariat pluriannuel annoncé au T2), **Micron, Samsung** (HBM4), **Foxconn, Wistron, Quanta, Supermicro, Dell, HPE**.

**Concurrents** : **AMD** (Instinct MI450), **Broadcom** et **Marvell** (co-conception des ASIC des hyperscalers), et surtout les **puces internes des clients** : Google TPU, AWS Trainium, Microsoft Maia, Meta MTIA, OpenAI Titan.

## Modalités contractuelles

Le modèle est **transactionnel mais pré-vendu**. Et c'est ici que le T2 change la donne : les **engagements d'approvisionnement sont passés de 119,0 à 279,0 Mds$ en un trimestre**, « principalement liés à l'achat de mémoire ». Les stocks atteignent 31,6 Mds$ et les créances clients 63,1 Mds$.

> **Le fait nouveau, et il est majeur.** NVIDIA n'est plus seulement un fournisseur qui investit chez ses clients et garantit leurs baux. Au T2 FY2027, elle a **acheté pour 15,8 Mds$ de titres de participation** (42,4 Mds$ sur le semestre) et **levé 24,9 Mds$ de dette**, portant l'endettement long terme de 7,5 à 32,4 Mds$. Une entreprise qui génère 21,3 Mds$ de free cash-flow trimestriel s'est endettée pour financer l'écosystème qui lui achète ses puces. Aucune lecture des comptes n'est complète sans ce fait.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de NVIDIA dans la chaîne de valeur

NVIDIA occupe la position d'**architecte-intégrateur sans usine** : elle capte l'essentiel de la valeur de la chaîne du calcul IA sans en posséder les actifs industriels. Le T2 FY2027 montre toutefois que ce modèle « asset-light » se densifie très vite en engagements contractuels.

### Amont — Le nouveau goulot : la mémoire

**Le signal du trimestre** : les engagements d'approvisionnement ont plus que doublé, de **119,0 à 279,0 Mds$**, et la direction précise qu'ils sont « **principalement liés à l'achat de mémoire** ». Vera Rubin consomme de la HBM4 en quantités sans précédent, et NVIDIA a préempté la capacité pour plusieurs années.

- **SK Hynix** : partenariat technologique pluriannuel annoncé au T2 sur les mémoires de nouvelle génération
- **Micron, Samsung** : HBM4, vendue à guichets fermés
- **Conséquence directe** : la marge brute du T3 est guidée à **74,0%, contre 75,0%** — première inflexion depuis la sortie de la crise H20. Le coût de la mémoire commence à mordre.

**Fonderie — dépendance mono-fournisseur**
- **TSMC** : quasi-totalité de la production avancée. Packaging **CoWoS** toujours contraint.

**CPU et propriété intellectuelle**
- **Arm** : les CPU Grace puis **Vera sont exclusivement Arm**. Vera est présenté comme le premier CPU conçu pour les agents.

**Assemblage, énergie et refroidissement**
- **Foxconn, Wistron, Quanta, Jabil** ; **Supermicro, Dell, HPE, Lenovo**
- **Vertiv, Schneider Electric** — et désormais l'accès au foncier et à l'électricité, sécurisé directement par NVIDIA via SB Energy (campus PORTS-Pike, Ohio)

---

### NVIDIA — Conception, logiciel et allocation

**Conception** : Hopper → Blackwell → **Vera Rubin, en pleine production depuis le T2**, avec racks déployés chez CoreWeave, Google Cloud, Azure, OCI et Nebius. Ajout du **Groq 3 LPX** pour l'inférence interactive et de **Spectrum-6** pour le réseau optique co-packagé.

**Logiciel** : CUDA-X, Agent Toolkit, PhysicsNeMo, BioNeMo, Nemotron. C'est ici que se situe le fossé économique réel.

**Allocation** : dans un marché en pénurie, décider *qui* est servi reste un instrument de pouvoir commercial et géopolitique.

---

### Aval — Clients et utilisateurs finaux

**Hyperscalers** : capex cumulé des cinq premiers attendu à **~1 300 Mds$ en 2027**, contre ~800 Mds$ en 2026 (chiffre communiqué par la direction financière). AWS s'est engagé sur **2 millions de GPU** plus des CPU Vera.

**Laboratoires de frontière** : OpenAI, Anthropic, SpaceXAI (qui déploiera des CPU Vera), Safe Superintelligence, Poolside.

**Clouds IA natifs** : CoreWeave, Nebius, IREN, Lambda — plusieurs sont aussi des **participations de NVIDIA**.

**IA souveraines** : Corée du Sud (SK Telecom, NAVER, Brookfield, échelle gigawatt), Japon (première infrastructure nationale d'IA), Europe (35 nouveaux supercalculateurs en développement).

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                      NVIDIA                     AVAL
TSMC (N3/N2, CoWoS)   →   Vera Rubin (production)  →  Hyperscalers (capex 2027E
SK Hynix (accord           Vera CPU / Groq 3 LPX       ~1 300 Mds$)
 pluriannuel)         →   Spectrum-6, NVLink       →  Labos IA (OpenAI, Anthropic,
Micron / Samsung           CUDA-X, DSX                 SpaceXAI, Poolside)
 (HBM4)                    Allocation de capacité   →  Neoclouds (CoreWeave,
Foxconn / Quanta      →                                Nebius, IREN)
SB Energy (foncier,        ↑ ET AUSSI : 42,4 Mds$   →  IA souveraines (Corée,
 électricité, Ohio)          de participations          Japon, Europe)
                             achetées au S1,
                             105 Mds$ de garanties,
                             24,9 Mds$ de dette levée
\`\`\`

### Ce que le T2 révèle sur la chaîne

Deux mouvements simultanés, et ils vont dans des directions opposées.

**Le premier est rassurant** : 279 Mds$ d'engagements d'approvisionnement, c'est une visibilité contractuelle que peu d'entreprises au monde possèdent. Une direction n'engage pas ce montant sans commandes en face.

**Le second l'est moins** : cette visibilité est **achetée par NVIDIA elle-même**, en trésorerie et désormais en dette. Elle immobilise la mémoire mondiale à l'avance, finance ses clients, garantit leurs baux et sécurise leur foncier. La chaîne n'est plus une séquence amont-aval : c'est une **boucle dont NVIDIA est simultanément le fournisseur, le financeur et le garant**. La contrepartie est que le risque de chaque maillon remonte désormais à son bilan.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires — T2 FY2027

### Structure au trimestre clos le 26 juillet 2026

| Segment | CA T2 FY27 | Croissance a/a | Croissance séq. | Poids |
|---|---|---|---|---|
| **Data Center** | **89,0 Mds$** | **+117%** | +18% | **92%** |
| — dont réseau | ~17 Mds$ | +138% | — | ~18% |
| Edge Computing | 7,2 Mds$ | +27% | +13% | 8% |
| **Total** | **96,2 Mds$** | **+106%** | **+18%** | 100% |

**Le franchissement du seuil des 100% de croissance annuelle est le fait marquant.** Une entreprise réalisant 46,7 Mds$ au trimestre un an plus tôt en fait 96,2 aujourd'hui. Aucune société de cette taille n'a jamais doublé à ce niveau de chiffre d'affaires absolu.

**Le réseau à +138%** reste le meilleur indicateur avancé du modèle : NVIDIA vend du gigawatt intégré, pas du composant. Chaque rack Vera Rubin embarque Spectrum-6, NVLink et désormais l'optique co-packagée.

**Edge Computing à +27%** sort de sa léthargie, porté par RTX Spark (partenariat Microsoft), DGX Station pour Windows et l'IA physique (DRIVE Hyperion, Isaac GR00T, Cosmos 3). Cela reste 8% du groupe.

---

### Évolution pluriannuelle

| Exercice | CA total | Croissance | Data Center | Marge brute non-GAAP |
|---|---|---|---|---|
| FY2024 | 60,9 Mds$ | +126% | 47,5 Mds$ | ~73,8% |
| FY2025 | 130,5 Mds$ | +114% | 115,2 Mds$ | ~75,5% |
| FY2026 | 215,9 Mds$ | +65% | 193,7 Mds$ | 71,3% |
| FY2027 S1 | **177,8 Mds$** | **+96%** | ~164 Mds$ | **75,0%** |
| FY2027 T3 (guidance) | 108,0 Mds$ | ~+89% | n.c. | **74,0%** |

Le premier semestre FY2027 représente à lui seul **82% de l'exercice 2026 complet**. Avec la guidance du T3 à 108 Mds$, l'exercice FY2027 devrait dépasser **400 Mds$**, soit une multiplication par 1,9 en un an.

**Point de vigilance** : la marge brute du T3 est guidée à **74,0% ± 50 pb, contre 75,0% réalisés**. Premier recul guidé depuis la normalisation post-H20, attribuable au coût de la mémoire. Cent points de base sur 108 Mds$ représentent environ 1,1 Md$ de marge brute.

---

### Répartition géographique — la Chine entrouverte

La Chine est passée de plus de 26% du CA en FY2022, à zéro expédition Data Center au T1 FY2027, à **moins de 1% du CA Data Center au T2** (livraisons Hopper en petit volume). Le retour est donc réel mais insignifiant à l'échelle du groupe.

**La guidance du T3 (108 Mds$) continue d'exclure tout revenu de calcul en Chine.** C'est un plancher assumé, et une option gratuite non valorisée dans les prévisions.

---

### Dynamiques par segment

**Data Center** : Blackwell Ultra a porté le trimestre, Vera Rubin prend le relais au T3. Le déploiement simultané chez cinq opérateurs de cloud majeurs dès la mise en production réduit le risque d'exécution habituel des transitions d'architecture.

**Réseau** : le segment le plus sous-estimé du dossier. À +138%, il croît plus vite que le calcul lui-même et rend la substitution partielle par un ASIC nettement plus coûteuse.

**Edge Computing** : croissance retrouvée mais poids marginal. L'optionnalité robotique et automobile n'est pas encore matérielle dans les comptes.

> **La nuance qui compte** : le communiqué du T2 ne détaille plus la ventilation **Hyperscale / ACIE** publiée au T1. On sait que les clients hyperscale ont plus que doublé leur contribution sur un an, mais **la granularité qui permettait de mesurer l'élargissement de la base clients a disparu**. C'est une régression d'information, à un moment où la question de la concentration est précisément celle qui compte.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. CUDA — le moat logiciel, et le seul vraiment durable
Vingt ans de bibliothèques, de compilateurs, de noyaux optimisés et de développeurs formés. Chaque framework a son chemin le plus court vers CUDA. Le T2 y ajoute une extension vers l'agentique : **Agent Toolkit, PhysicsNeMo, BioNeMo, Nemotron**, et **AgentPerf**, premier référentiel d'évaluation d'infrastructure agentique — que NVIDIA a conçu et évidemment remporté. Définir la métrique du secteur est une forme de moat en soi. **C'est un coût de changement, pas un brevet — donc érodable, mais lentement.**

### 2. L'échelle du rack — vendre le système plutôt que la puce
Vera Rubin est entré en pleine production au T2 avec racks déployés simultanément chez **CoreWeave, Google Cloud, Azure, OCI et Nebius**. Un ASIC concurrent doit non seulement égaler un GPU mais remplacer l'ensemble de l'assemblage : CPU Vera, NVLink, Spectrum-6 avec optique co-packagée. La croissance du réseau de **+138%** mesure ce verrouillage.

### 3. La cadence d'architecture — un moat de rythme
Blackwell Ultra a porté le T2 ; Vera Rubin porte déjà le T3. Cette cadence **annule l'avantage économique du concurrent au moment même où il rattrape**. Un ASIC conçu en dix-huit mois affronte une génération qui n'existait pas au lancement du projet.

### 4. La préemption de la mémoire — un moat nouveau, acheté au comptant
**279 Mds$ d'engagements d'approvisionnement, principalement de la mémoire**, plus un partenariat pluriannuel avec SK Hynix. En immobilisant la HBM4 mondiale plusieurs années à l'avance, NVIDIA prive mécaniquement ses concurrents — AMD comme les concepteurs d'ASIC — de l'intrant critique. C'est redoutablement efficace. **C'est aussi un engagement ferme de 279 Mds$ pris sur une demande qui n'est pas encore facturée.**

### 5. Le capital comme arme concurrentielle — un moat qui coûte désormais de la dette
NVIDIA investit dans ses clients (**42,4 Mds$ de titres achetés au premier semestre**), garantit leurs baux (105 Mds$), sécurise leur foncier et leur électricité (SB Energy) et structure leur financement (plus de 500 Mds$ avec six institutions). Broadcom ne peut pas faire cela. Mais depuis le T2, ce moat est partiellement financé par de la dette : **32,4 Mds$ d'endettement long terme contre 7,5 Mds$ six mois plus tôt**. À classer comme moat, oui — avec un astérisque qui vient de s'épaissir.

### 6. Les coûts de changement — MODÉRÉS, pas élevés
Point toujours surestimé par les optimistes, et rien dans le T2 ne l'infirme. Google fait tourner plus de 75% de Gemini sur TPU, AWS traite plus de la moitié du débit de Bedrock sur Trainium — **et le même AWS vient de commander 2 millions de GPU NVIDIA**. Les deux faits coexistent : les hyperscalers achètent massivement NVIDIA *et* déploient leur propre silicium. **Le verrou tient sur les charges diverses et évolutives ; il cède sur les charges massives, stables et prévisibles.**

## Positionnement vs concurrence

| Critère | NVIDIA | AMD | Broadcom (ASIC) | Google TPU |
|---|---|---|---|---|
| Part du marché accélérateurs | ~75-80% | ~5-7% | ~60% du co-design | Interne, très mature |
| Écosystème logiciel | CUDA — dominant | ROCm — en rattrapage | Client-spécifique | XLA/JAX, mature |
| Accès à la HBM4 | Préempté (279 Mds$) | Contraint | Contraint | Via Broadcom |
| Marge brute | 75,0% (74% guidée T3) | ~50% | ~68% | n/a |
| Interconnexion propriétaire | NVLink, Spectrum-6 | Infinity Fabric | Tomahawk | ICI |
| Vulnérabilité | Coût mémoire, substitution | Échelle, logiciel | Dépendance client | Non commercialisé |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Élevé mais en érosion, et désormais visible au bilan**. Les créances clients ont bondi de 64% en six mois et le délai de règlement est passé d'environ 51 à 60 jours. Un fournisseur en position de force absolue se fait payer plus vite, pas plus lentement. **C'est le premier signe chiffré d'un pouvoir de négociation qui se détend.**
- **Vis-à-vis des fournisseurs** : **Élevé sur l'allocation, mais le rapport de force s'inverse sur le prix**. NVIDIA obtient la mémoire, mais la guidance de marge brute à 74% indique qu'elle la paie plus cher. SK Hynix et Micron sont, pour la première fois depuis des années, en position de force.
- **Vis-à-vis des concurrents** : capacité démontrée à **acheter la menace** — Groq (2,9 Mds$ décaissés au T2), Enfabrica, AI21 Labs, licence Poolside pour 6 Mds$. Efficace, et sous l'œil du Congrès.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Silicium et infrastructure IA (août 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **NVIDIA** | **NVDA US** | **~5 150 Mds$** | **~17x** | **~24x** | **~23x (FY27E)** | **~0,5%** | **~80%** |
| Broadcom | AVGO US | ~1 900 Mds$ | ~24x | ~38x | ~45x | ~0,7% | ~25% |
| TSMC | 2330 TT | ~1 400 Mds$ | ~11x | ~22x | ~26x | ~1,2% | ~28% |
| AMD | AMD US | ~370 Mds$ | ~10x | ~55x | ~55x | 0% | ~5% |
| SK Hynix | 000660 KS | ~180 Mds$ | ~4x | ~9x | ~11x | ~0,8% | ~15% |
| Marvell | MRVL US | ~75 Mds$ | ~11x | ~35x | ~35x | ~0,3% | ~2% |

*Données estimatives à août 2026, hors NVIDIA dont les chiffres proviennent des comptes publiés. Les multiples de NVIDIA se sont mécaniquement contractés après le T2 : le dénominateur a progressé plus vite que le cours.*

---

### Analyse comparative

**Le paradoxe du trimestre : NVIDIA est devenue moins chère en publiant**
Le titre clôturait à **213,05 $ le 25 août**, en repli de 3% sur la semaine et en sous-performance du complexe semi-conducteurs depuis le début de l'année. Avec un BPA non-GAAP FY2027 désormais estimé autour de **9,30 $**, le multiple prospectif tombe à **~23x**, et à **~16x sur FY2028**. C'est moins cher que Broadcom, moins cher que TSMC, et à peine plus cher que le marché — pour une croissance de +106%.

**Broadcom — le concurrent qui gagne quoi qu'il arrive**
Co-conception du TPU de Google, de MTIA chez Meta, de Maia chez Microsoft, du programme **Titan d'OpenAI**. Carnet de commandes IA de 73 Mds$, objectif de 100 Mds$ de CA IA en FY2027. Avec Marvell, environ 95% du marché de la co-conception d'ASIC. Il **monétise la menace structurelle qui pèse sur NVIDIA** sans en porter le risque commercial — et se paie 45x pour cela, soit le double de NVIDIA.

**AMD — la seconde source, pas encore l'alternative**
5 à 7% du marché. Accords de 6 GW avec OpenAI, 6 GW avec Meta, 2 GW avec Anthropic à partir du S1 2027. Série MI400/MI450 en 2 nm au second semestre 2026. **Mais AMD affronte la même contrainte mémoire que tout le monde, sans les 279 Mds$ d'engagements de NVIDIA pour se la réserver.** C'est peut-être le fait concurrentiel le plus important du trimestre.

**SK Hynix et Micron — les nouveaux gagnants de la chaîne**
La guidance de marge brute à 74% dit explicitement où part la valeur : chez les mémoiristes. NVIDIA a signé un partenariat pluriannuel avec SK Hynix pour sécuriser la HBM de prochaine génération. **Le pouvoir de fixation des prix se déplace vers l'amont** — un renversement inédit depuis 2023.

**TSMC — le péage que tout le monde paie**
Que le client achète NVIDIA, AMD ou un ASIC Broadcom, la plaquette sort de chez TSMC. C'est aussi le rappel que **NVIDIA n'a pas de second fournisseur**.

---

### Le ratio qui compte : le multiple contre la conversion en trésorerie
À 23x les bénéfices FY2027, NVIDIA est la moins chère des grandes valeurs de l'IA rapportée à sa croissance. Mais le T2 introduit une contrepartie que les comparaisons de multiples ne captent pas : **la conversion du résultat en trésorerie est tombée de 86% à 40%**. Un bénéfice comptable identique ne vaut pas le même prix selon qu'il arrive en banque ou reste en créances. **La décote apparente de NVIDIA vis-à-vis de Broadcom s'explique en partie par cet écart de qualité de résultat** — c'est la lecture que le marché semble faire, et elle n'est pas absurde.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 FY2027 (publiés le 26 août 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 FY2027 | Consensus | Guidance | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | **96,2 Mds$** | ~92,1 Mds$ | 91,0 Mds$ | **+4,5% / +5,7%** |
| Croissance a/a | **+106%** | — | ~+95% | 4ᵉ trim. d'accélération |
| Croissance séquentielle | +18% | — | — | 15ᵉ trim. de hausse |
| Data Center | **89,0 Mds$** | ~86,3 Mds$ | — | **Dépassé** |
| BPA non-GAAP | **2,22 $** | 2,09 $ | — | **+6,2%** |
| BPA GAAP | 2,46 $ | — | — | +128% a/a |
| Marge brute | **75,0%** | ~75,0% | 75,0% | Conforme |

**Cinquième dépassement consécutif du consensus**, et le plus large de la série. Le résultat opérationnel atteint **63,7 Mds$, +124% sur un an**, pour des charges opérationnelles contenues à 8,4 Mds$ (+55%). Le levier opérationnel fonctionne parfaitement.

---

### La guidance du T3 : le vrai événement

- **108,0 Mds$ ± 2%**, contre un consensus de ~104,2 Mds$ — soit **+3,7% au-dessus des attentes**
- Croissance implicite de **~+89% sur un an**
- **Cette guidance exclut, à nouveau, tout revenu de calcul en Chine**
- Charges opérationnelles GAAP ~9,2 Mds$

**Mais** : la **marge brute est guidée à 74,0% ± 50 pb, contre 75,0% réalisés**. Premier recul guidé depuis la normalisation post-H20, attribuable au coût de la mémoire. Sur 108 Mds$, cent points de base valent environ 1,1 Md$.

---

### Le point qu'il ne faut pas manquer : la conversion en trésorerie

C'est ici que le trimestre se retourne.

| Indicateur | T1 FY2027 | T2 FY2027 | Variation |
|---|---|---|---|
| Chiffre d'affaires | 81,6 Mds$ | 96,2 Mds$ | **+18%** |
| Résultat net GAAP | 58,3 Mds$ | 59,7 Mds$ | +2% |
| Flux de trésorerie d'exploitation | **50,3 Mds$** | **24,1 Mds$** | **−52%** |
| Free cash-flow | **48,6 Mds$** | **21,3 Mds$** | **−56%** |
| Conversion (flux d'exploitation / RN) | **86%** | **40%** | **−46 pts** |

**Le chiffre d'affaires progresse de 18% et le free cash-flow recule de 56%.** L'explication est intégralement au bas du tableau de flux :
- **Créances clients : −22,3 Mds$** de variation sur le trimestre
- **Stocks : −5,8 Mds$**
- **Charges payées d'avance et autres actifs : −5,5 Mds$**

Les créances clients atteignent **63,1 Mds$ contre 38,5 Mds$ au 25 janvier (+64% en six mois)**. Le délai moyen de règlement passe d'environ **51 à 60 jours**. Ce n'est pas un accident comptable : NVIDIA vend davantage, mais encaisse plus tard.

---

### Bilan — un changement de nature

| Poste | 25 janv. 2026 | 26 juil. 2026 | Variation |
|---|---|---|---|
| Créances clients | 38,5 Mds$ | 63,1 Mds$ | **+64%** |
| Stocks | 21,4 Mds$ | 31,6 Mds$ | **+48%** |
| Titres non cotés | 22,3 Mds$ | 51,2 Mds$ | **+130%** |
| Titres cotés | 12,9 Mds$ | 42,8 Mds$ | **+232%** |
| **Dette long terme** | **7,5 Mds$** | **32,4 Mds$** | **+333%** |
| Capitaux propres | 157,3 Mds$ | 229,0 Mds$ | +46% |
| Engagements d'approvisionnement | 119,0 Mds$ | **279,0 Mds$** | **+134%** |

NVIDIA a **levé 24,9 Mds$ de dette** au T2 et **acheté pour 15,8 Mds$ de titres de participation** (42,4 Mds$ sur le semestre). La trésorerie nette reste positive (~23 Mds$ hors titres cotés) et le ratio courant s'établit à 4,6. Le bilan demeure très solide en niveau — **mais chaque ligne de qualité s'est dégradée en tendance, simultanément.**

---

### Qualité du résultat

Le résultat net GAAP de 59,7 Mds$ inclut **7,8 Mds$ de plus-values sur titres de participation**, après 15,9 Mds$ au T1. Soit environ **11% du résultat avant impôt**, contre ~30% le trimestre précédent — **la dépendance diminue, ce qui est positif**. L'écart BPA GAAP (2,46 $) / non-GAAP (2,22 $) en découle directement.

**Élément positif de gouvernance** : depuis le T1 FY2027, la rémunération en actions **n'est plus exclue** des mesures non-GAAP, et l'historique a été retraité. C'est une amélioration réelle de la transparence, rarement adoptée dans le secteur, et qui réduit mécaniquement le BPA publié.

---

### Retour aux actionnaires

**26,0 Mds$ restitués au T2** (19,7 Mds$ de rachats, 6,0 Mds$ de dividendes), avec **99,0 Mds$ d'autorisation restante**. Dividende maintenu à 0,25 $ par action, payable le 1ᵉʳ octobre 2026.

> **La contradiction, désormais chiffrée** : sur le semestre, NVIDIA a restitué ~45 Mds$ aux actionnaires, acheté 42,4 Mds$ de participations et levé 24,9 Mds$ de dette — pour un free cash-flow semestriel de 69,9 Mds$. L'entreprise emprunte pour financer simultanément le retour aux actionnaires et l'écosystème qui lui achète ses puces.

---

### Réaction du marché

Le titre clôturait à **213,05 $ le 25 août**, après sept séances consécutives de baisse et une sous-performance du secteur depuis le début de l'année. Après publication, la réaction a d'abord été négative avant de se retourner à la hausse d'environ **5% hors séance** pendant la conférence téléphonique.

Le contexte compte : **NVIDIA avait dépassé le consensus cinq trimestres d'affilée et le titre avait baissé après quatre de ces publications.** Que la sixième provoque enfin une réaction positive suggère que c'est la guidance de 108 Mds$ — et non le trimestre écoulé — qui a levé le doute.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — évolution 2024-2026

**2024 — Émerveillement contrôlé.** « Nouvelle révolution industrielle ». Le registre est celui de la découverte.

**2025 — Consolidation et pédagogie.** Le discours se déplace vers le *scaling* de l'inférence. Huang répond méthodiquement aux objections (DeepSeek, ASIC, efficacité des modèles). Ton défensif-explicatif.

**T4 FY2026 (février 2026) — Passage à l'offensive.** « La demande de calcul croît exponentiellement — le point d'inflexion de l'IA agentique est arrivé. »

**T1 FY2027 (mai 2026) — Superlatif assumé.** « La demande est devenue parabolique. »

**T2 FY2027 (août 2026) — Changement de registre, et il est significatif.**
> « L'IA a atteint son point d'inflexion. Elle fait un travail utile. Ses jetons sont productifs et rentables. Désormais, **le calcul, c'est du chiffre d'affaires**. »

Après trois ans d'escalade lexicale — croissance, exponentiel, parabolique — Huang **cesse de qualifier l'intensité de la demande et se met à en qualifier la nature**. Le message n'est plus « ils achètent beaucoup » mais « ce qu'ils achètent leur rapporte de l'argent ». C'est un déplacement stratégique parfaitement calibré : il répond frontalement à l'objection centrale des sceptiques, celle de la monétisation.

---

### Priorités répétées du management

**1. « Le calcul, c'est du chiffre d'affaires »** — la formule est conçue pour désamorcer la thèse de la bulle. Si les jetons produits sont facturés et rentables chez le client, le capex n'est plus spéculatif mais adossé à des revenus. C'est l'argument le plus fort possible — **et il reste une affirmation, non une démonstration** : NVIDIA ne publie ni les taux d'utilisation, ni la rentabilité des parcs installés chez ses clients.

**2. La sortie de la dépendance à un laboratoire unique** — « Il y a un an à la même époque, un seul laboratoire portait la construction ; aujourd'hui, nous avons un âge d'or de nouveaux laboratoires, plusieurs laboratoires de frontière montant en puissance en parallèle, un écosystème de modèles ouverts florissant et l'IA physique qui arrive. » **C'est la réponse directe à l'accusation de concentration** — et l'aveu implicite qu'un an plus tôt, cette concentration était bien réelle.

**3. Vera Rubin comme réponse à l'ASIC** — « en pleine production, conçue exactement pour ce moment », déployée simultanément chez cinq opérateurs de cloud majeurs.

**4. Le capex des clients comme preuve** — Colette Kress a chiffré le capex des cinq premiers hyperscalers à **~1 300 Mds$ en 2027 contre ~800 Mds$ en 2026**. Donner un chiffre prospectif sur les dépenses de tiers est inhabituel : c'est une manière de faire porter la crédibilité de la trajectoire par d'autres bilans que le sien.

**5. Le silence relatif sur la trésorerie** — le communiqué met en avant les 26 Mds$ restitués aux actionnaires et les 279 Mds$ d'engagements. **Il ne commente pas la division par deux du free cash-flow.** L'information figure dans le tableau de flux, correctement publiée, mais elle n'est pas mise en récit. C'est le point aveugle du discours de ce trimestre.

---

### Analyse du sentiment

- **Confiance** : maximale et intacte. Aucune inflexion depuis trois ans.
- **Transparence** : en amélioration réelle sur un point — la rémunération en actions n'est plus exclue du non-GAAP, avec retraitement de l'historique, ce qui est rare et méritoire. **En régression sur un autre** : la ventilation Hyperscale / ACIE introduite au T1, qui permettait de mesurer l'élargissement de la base clients, ne figure plus dans le communiqué du T2.
- **Cohérence** : remarquable, et validée cinq fois de suite par les chiffres.

> **Ce qu'il faut lire entre les lignes** : « le calcul, c'est du chiffre d'affaires » est l'argument juste, au bon moment. Mais il décrit le chiffre d'affaires *du client*. Pendant ce même trimestre, le chiffre d'affaires de NVIDIA a progressé de 18% et son encaissement a reculé de 52%. Le management a probablement raison sur la nature de la demande ; il n'a simplement rien dit du délai qui sépare désormais la vente de l'argent.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Jensen Huang — Fondateur, Président et Directeur Général (depuis 1993)

**Bilan chiffrable** : trente-trois ans à la tête de la même entreprise, et trois réinventions réussies de son marché principal.
- **2006** : lancement de **CUDA**, sans justification commerciale immédiate, coûteux pendant près d'une décennie, devenu le fossé économique central. La meilleure décision d'allocation de capital du secteur.
- **2019** : acquisition de **Mellanox (~7 Mds$)**, jugée coûteuse à l'époque. Le réseau croît aujourd'hui de **+138% sur un an**. Le retour est incontestable.
- **2020-2026** : chiffre d'affaires passé de ~10,9 Mds$ (FY2020) à un rythme annualisé supérieur à **385 Mds$** au T2 FY2027, avec un ROE toujours supérieur à 100%.

**Ancienneté et participation** : co-fondateur, environ **782 millions d'actions (~3,2% du capital)**. Alignement financier écrasant. Cessions régulières via plans **Rule 10b5-1** programmés — marginales rapportées à la participation, à suivre sans sur-interpréter.

---

### Colette Kress — Directrice financière (depuis 2013)

Treize ans de stabilité. Aucun retraitement, aucune *restatement*, aucun changement de commissaire aux comptes (**PricewaterhouseCoopers**).

**À porter à son crédit ce trimestre** : depuis le T1 FY2027, la rémunération en actions **n'est plus exclue** des mesures non-GAAP et l'historique a été retraité. C'est un durcissement volontaire de la présentation, rare dans le secteur, et qui réduit mécaniquement le BPA publié. Une direction financière qui s'impose une contrainte défavorable mérite d'être créditée.

---

### Allocation du capital — cinq régimes successifs

| Période | Doctrine | Résultat |
|---|---|---|
| 2006-2016 | R&D logicielle (CUDA) sans retour visible | Fossé économique central |
| 2019-2020 | Acquisition de plateformes (Mellanox) | Réseau à ~68 Mds$ annualisés |
| 2025-2026 | **Neutralisation de la concurrence** : Groq (20 Mds$, dont 2,9 décaissés au T2), Enfabrica, AI21, licence Poolside (6 Mds$) | Talent et PI acquis ; **enquête sénatoriale** |
| 2026 S1 | **Financement de l'écosystème** : 42,4 Mds$ de titres achetés, 105 Mds$ de garanties, foncier et électricité (SB Energy) | **Non évaluable à ce stade** |
| 2026 T2 | **Recours à l'endettement** : 24,9 Mds$ levés, dette LT portée de 7,5 à 32,4 Mds$ | **Nouveau, et le plus discutable** |

Les deux premiers régimes sont brillants et prouvés. **Le cinquième est celui qui doit préoccuper l'investisseur.**

Le raisonnement du management est défendable : la dette est bon marché rapportée à un ROE supérieur à 100%, et préempter la mémoire et l'énergie est un avantage concurrentiel réel. Mais le fait brut est le suivant : **sur le semestre, NVIDIA a restitué ~45 Mds$ aux actionnaires, investi 42,4 Mds$ dans des participations et levé 24,9 Mds$ de dette, pour 69,9 Mds$ de free cash-flow.** Les emplois excèdent les ressources, et l'écart est comblé par emprunt.

Une entreprise dont le produit est en pénurie n'a normalement besoin ni d'emprunter, ni de financer ses acheteurs.

---

### Signaux d'alerte

- **Risque clé homme** : Huang **est** NVIDIA. Aucun plan de succession public pour un dirigeant de 63 ans dont la vision constitue une part de la prime de valorisation.
- **Recours nouveau à l'endettement** — 24,9 Mds$ levés en un trimestre par une société qui n'en avait pas besoin six mois plus tôt. Le montant reste modeste rapporté à 229 Mds$ de capitaux propres, mais **c'est la direction qui informe, pas le niveau**.
- **Créances clients +64% en six mois** — une direction commerciale en position de force absolue ne consent pas des délais de règlement croissants. À interroger directement.
- **Structure de l'opération Groq** : les sénateurs **Warren et Blumenthal** ont saisi Huang le 19 mars 2026, estimant le montage conçu pour échapper à l'examen antitrust. Le paiement de 2,9 Mds$ apparaît en flux de financement au T2.
- **Parties liées** : NVIDIA investit dans des clients qui achètent ses puces. Les plus-values sur ces participations représentent ~11% du résultat avant impôt du T2. **La frontière entre client, actionnaire et contrepartie de crédit reste brouillée.**
- **Régression d'information** : la ventilation Hyperscale / ACIE a disparu du communiqué du T2.
- **Type de dirigeant** : **fondateur-visionnaire technique**, catégorie la plus performante quand la vision est juste, et la plus dangereuse quand elle cesse de l'être — parce qu'aucun contre-pouvoir interne n'existe pour le dire.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours

### Contexte
Le titre clôturait à **213,05 $ le 25 août 2026**, pour une capitalisation d'environ **5 150 Mds$**. Performance depuis le début de l'année : **+14,4%**, en **sous-performance du complexe semi-conducteurs**. Bêta de 2,21.

**Le fait le plus révélateur du dossier** : NVIDIA a dépassé le consensus **cinq trimestres d'affilée**, avec des écarts de +8,0%, +4,0%, +3,6%, +5,3% et +5,4% — et **le titre a baissé après quatre de ces publications**. Réactions du jour : environ +3,3%, puis −0,8%, −3,2%, −5,5% et −1,3 à −1,8%. Le dernier accueil franchement positif remontait à environ un an.

Autrement dit : **le titre avait cessé de suivre ses propres résultats**. Un analyste de Wedbush le formulait ainsi avant le T2 — NVIDIA dépasse systématiquement les attentes, et l'action est à peu près inchangée depuis octobre de l'année précédente.

### Hausses significatives (+5%)

**Février 2026 — T4 FY2026** : 68,1 Mds$ (+73%), exercice à 215,9 Mds$ (+65%).

**Mars 2026 — GTC** : dévoilement de **Vera Rubin** et du **Groq 3 LPX**, moins de trois mois après l'opération Groq.

**Décembre 2025 — Ouverture partielle sur la Chine** : autorisation d'exportations limitées de H200 moyennant une redevance de 25%.

**26 août 2026 — T2 FY2027** : après un repli initial, le titre s'est retourné à la hausse d'environ **5% hors séance** pendant la conférence téléphonique. **Ce n'est pas le trimestre écoulé qui a convaincu — c'est la guidance de 108 Mds$, 3,7% au-dessus du consensus, et le chiffrage du capex hyperscaler à 1 300 Mds$ pour 2027.**

---

### Baisses significatives (-5%)

**Avril 2025 — Contrôles à l'exportation H20** : plus de 7% en séance, repli cumulé d'environ 30% depuis le sommet de janvier, charge sur stocks de 4,5 Mds$. **Le précédent qui rappelle qu'une note administrative peut effacer un segment en une semaine.**

**Mars 2026 — Nouvelles craintes sur les exportations** : ~−3% le 6 mars, à ~177,83 $.

**27 juillet 2026 — Le choc du « financement circulaire »** : les révélations sur une garantie envisagée de 250 Mds$ pour les baux d'OpenAI ont fait chuter le titre de **4,5% en séance**. **La baisse la plus instructive de la période** : provoquée ni par les résultats, ni par la concurrence, ni par la demande, mais par la **structure financière** adoptée pour soutenir cette demande.

**Mi-août 2026 — Sept séances consécutives de baisse**, avant un rebond de 2,19% le 25 août. Le titre entrait dans la publication en position de faiblesse technique, ce qui explique en partie l'ampleur du rebond.

---

### Ce que le T2 change pour le cours

**L'argument haussier s'est renforcé mécaniquement** : le bénéfice a progressé plus vite que le cours, ramenant le multiple prospectif FY2027 à **~23x** et FY2028 à **~16x**. À croissance égale, NVIDIA n'a jamais été aussi peu chère.

**L'argument baissier s'est déplacé** : il ne porte plus sur la demande — 96,2 Mds$ réalisés et 108 Mds$ guidés l'ont réglée — mais sur **la qualité de la conversion de cette demande en trésorerie** (free cash-flow divisé par deux, créances +64%, dette multipliée par quatre) et sur **le coût de la mémoire** (marge brute guidée en repli à 74%).

**C'est un débat plus technique, donc moins lisible pour le marché.** Il mettra probablement plusieurs trimestres à se trancher dans le cours, ce qui plaide pour une volatilité soutenue plutôt que pour une tendance nette.

---

### Facteurs structurels

- **Concentration indicielle** : NVIDIA pèse une part considérable du S&P 500 et du Nasdaq 100. Les flux passifs achètent mécaniquement — et vendront tout aussi mécaniquement.
- **Le titre est devenu un baromètre macroéconomique** : il cote la conviction collective dans le cycle d'investissement en IA, d'où sa sensibilité à des informations qui ne concernent ni ses produits ni ses clients directs.
- **Sensibilité aux taux longs**, désormais double : elle affecte le financement des centres de données de ses clients **et**, depuis le T2, sa propre dette.
- **Objectifs de cours** : la dispersion reste extrême (JPMorgan à 280 $, Wedbush à 330 $, fourchette générale de ~180 $ à ~500 $). **L'amplitude de cette fourchette est la mesure la plus honnête du désaccord sur ce dossier.**`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

**Convention** : NVIDIA clôture son exercice fin janvier. FY2027 correspond pour l'essentiel à l'année civile 2026. Chiffres en **BPA non-GAAP dilué**, désormais **incluant la rémunération en actions** (changement de définition au T1 FY2027, historique retraité).

### Hypothèses de modélisation

**Chiffre d'affaires**
- S1 FY2027 réalisé : **177,8 Mds$**
- Guidance T3 : **108,0 Mds$ ± 2%**, hors Chine
- T4 estimé : ~120-125 Mds$ avec la montée en puissance complète de Vera Rubin
- **FY2027E : ~405-410 Mds$**, soit +88% sur FY2026
- Capex des cinq premiers hyperscalers : ~800 Mds$ en 2026 → **~1 300 Mds$ en 2027** (chiffre communiqué par la direction financière)
- **Contrainte physique** : la mémoire, et non plus seulement CoWoS, est désormais le facteur limitant

**Marges**
- Marge brute : **74,0% guidée au T3**, contre 75,0% réalisés. Nous retenons **73,5-74,5% sur FY2028** — le coût de la HBM4 est un vent contraire structurel, pas ponctuel
- Charges opérationnelles : ~9,2 Mds$ au T3, en hausse d'environ 50% par an, très en deçà de la croissance du CA
- Marge opérationnelle : maintenue entre **64% et 66%**

**Éléments hors exploitation**
- **Charge financière désormais non nulle** : 32,4 Mds$ de dette long terme contre 7,5 Mds$ six mois plus tôt
- **Les projections excluent délibérément les plus-values sur participations** (7,8 Mds$ au T2, 15,9 Mds$ au T1) : non monétaires, procycliques, réversibles
- Taux d'imposition guidé à **16-18%** sur FY2027

**Dilution**
- 99,0 Mds$ d'autorisation de rachat restante ; **24,29 Md d'actions diluées au T2 contre 24,53 Md un an plus tôt** — le nombre d'actions **recule d'environ 1% par an**. Effet relutif

---

### Estimations BPA (non-GAAP)

| Exercice | Scénario | BPA estimé | Croissance | P/E à 213,05 $ |
|---|---|---|---|---|
| FY2026 (réalisé) | — | **4,77 $** | +80% | — |
| **FY2027E** | Base | **~9,20-9,50 $** | **~+95%** | **~23x** |
| **FY2028E** | Base | **~13,00-14,00 $** | **+40-47%** | **~16x** |
| **FY2029E** | Base | **~16,50-18,50 $** | **+25-32%** | **~12x** |

*Détail du calcul FY2027E : S1 réalisé 4,09 $ ; T3E ~2,44 $ (108 Mds$ à 74,0% de marge brute, 9,0 Mds$ de charges opérationnelles non-GAAP, 17% d'impôt) ; T4E ~2,78 $. Total ~9,31 $.*

**Notre projection de mai (9,00-9,60 $ pour FY2027) est confirmée par le T2.** L'exécution est conforme à la modélisation ; ce sont les postes de bilan, non le compte de résultat, qui ont surpris.

### Sensibilité

- **Scénario haussier** (Vera Rubin sans accroc, réouverture chinoise, capex à 1 300 Mds$ confirmé) : BPA FY2029 vers 20-21 $, P/E 2028 sous 11x
- **Scénario de base** : BPA FY2029 ~17,50 $, décélération ordonnée vers +25%
- **Scénario baissier** (pause du capex, coût mémoire non répercuté, provision sur créances ou garanties) : BPA FY2029 ~11-12 $ **et** compression du multiple de 23x à 13x — l'effet cumulé ramènerait le titre vers 140-150 $

**Conclusion** : le paradoxe s'est accentué. À **~23x FY2027 et ~16x FY2028 pour une croissance de +106%**, NVIDIA est objectivement bon marché selon tous les critères conventionnels — moins chère que Broadcom, à peine plus chère que le marché.

**Le risque n'a jamais porté sur le multiple. Il porte sur le dénominateur.** Le T2 ajoute une nuance importante : le bénéfice comptable est solide et l'exécution excellente, mais **la fraction de ce bénéfice qui arrive effectivement en trésorerie est tombée de 86% à 40% en un trimestre**. Un P/E se calcule sur le bénéfice publié ; une entreprise se finance avec de la trésorerie.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels

**1. La demande n'est plus une hypothèse** — 96,2 Mds$ réalisés, +106% sur un an, quatrième trimestre consécutif d'accélération, et une guidance de **108 Mds$ pour le T3, 3,7% au-dessus du consensus**. Le débat sur l'existence de la demande est clos ; il ne reste que celui sur sa durée.

**2. Le capex des clients est chiffré et croissant** — la direction financière évalue le capex des cinq premiers hyperscalers à **~1 300 Mds$ en 2027 contre ~800 Mds$ en 2026**. **AWS s'est engagé sur 2 millions de GPU** plus des CPU Vera. Ce ne sont pas des intentions : ce sont des commandes.

**3. « Le calcul, c'est du chiffre d'affaires »** — l'argument de Huang répond frontalement à la thèse de la bulle : si les jetons produits sont facturés et rentables chez le client, le capex est adossé à des revenus, non à de la spéculation. Et la sortie de la dépendance à un laboratoire unique est explicite : « il y a un an, un seul laboratoire portait la construction ; aujourd'hui, plusieurs laboratoires de frontière montent en parallèle ».

**4. La préemption de la mémoire est une arme concurrentielle réelle** — 279 Mds$ d'engagements, principalement de la mémoire, plus un partenariat pluriannuel avec SK Hynix. **AMD et les concepteurs d'ASIC affrontent la même pénurie de HBM4 sans les moyens de se la réserver.** C'est peut-être le fait concurrentiel le plus sous-estimé du trimestre.

**5. Vera Rubin exécute** — pleine production dès le T2, déployée simultanément chez CoreWeave, Google Cloud, Azure, OCI et Nebius. Le réseau croît de **+138%**, le Groq 3 LPX entre en production, Spectrum-6 arrive avec l'optique co-packagée.

**6. La valorisation s'est détendue en publiant** — **~23x FY2027, ~16x FY2028** pour +106% de croissance. Moins cher que Broadcom (~45x), à peine plus cher que le marché. Le bénéfice a progressé plus vite que le cours.

**7. La Chine reste une option gratuite** — moins de 1% du CA Data Center au T2, et **toujours exclue de la guidance du T3**.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques susceptibles de nuire durablement

**1. La conversion du chiffre d'affaires en trésorerie s'est effondrée** — c'est le fait nouveau, et il est majeur. Le chiffre d'affaires progresse de 18% en séquentiel ; le **free cash-flow recule de 56%**, de 48,6 à 21,3 Mds$. La conversion du résultat en flux d'exploitation passe de **86% à 40%**. Les créances clients atteignent **63,1 Mds$, +64% en six mois**, portant le délai de règlement d'environ 51 à 60 jours. NVIDIA vend davantage et encaisse plus tard : **c'est la définition comptable d'un pouvoir de négociation qui se détend**, et cela survient précisément au moment où l'entreprise finance ses propres clients.

**2. Le modèle s'est mis à consommer de la dette** — 24,9 Mds$ levés au T2, dette long terme portée de **7,5 à 32,4 Mds$ (+333%)**, tandis que 42,4 Mds$ de participations étaient achetées sur le semestre et ~45 Mds$ restitués aux actionnaires. Une entreprise dont le produit est en pénurie ne devrait avoir besoin ni d'emprunter, ni de financer ses acheteurs. **Les 279 Mds$ d'engagements d'approvisionnement et les 105 Mds$ de garanties hors bilan sont désormais adossés à un bilan qui s'endette.**

**3. Le pouvoir de fixation des prix se déplace vers l'amont** — marge brute guidée à **74,0% contre 75,0%**, explicitement en raison du coût de la mémoire. Cent points de base sur 108 Mds$ valent 1,1 Md$. C'est modeste isolément ; c'est un renversement de tendance après trois ans de marges en expansion. Et il coexiste avec l'érosion de part de marché face aux ASIC, dont les livraisons croissent près de trois fois plus vite que celles des GPU marchands.

### Analyse pré-mortem
**Que s'est-il passé si NVIDIA vaut 120 $ en 2028 ?** L'enchaînement ne commence plus par une baisse de la demande — le T2 a rendu ce point de départ moins crédible. Il commence par le **bas du bilan** : les créances continuent de croître plus vite que le chiffre d'affaires, un ou deux neoclouds financés par NVIDIA peinent à honorer leurs échéances, une provision pour dépréciation apparaît. Simultanément, le coût de la HBM4 grignote la marge brute de 75% vers 70%. Les 279 Mds$ d'engagements deviennent partiellement des charges sur stocks lorsque la demande se normalise à +30% au lieu de +100%. Les 94 Mds$ de participations se déprécient, effaçant la composante « plus-values » du résultat GAAP. La dette, contractée en haut de cycle, doit être refinancée en bas. **Le multiple se comprime de 23x à 12x sur un bénéfice lui-même amputé.**

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat s'est entièrement déplacé, et peu semblent l'avoir remarqué.

Pendant deux ans, la question était *« la demande existe-t-elle ? »*. Le T2 y a répondu définitivement : 96,2 Mds$ réalisés, 108 Mds$ guidés, 1 300 Mds$ de capex client annoncés. **Les sceptiques de la demande ont perdu, et devraient le reconnaître.**

La vraie question est désormais *« cette demande arrive-t-elle en banque ? »* — et sur ce point, le trimestre est le plus mauvais depuis des années. Chiffre d'affaires +18%, free cash-flow −56%. Le communiqué met en avant les 26 Mds$ restitués aux actionnaires et les 279 Mds$ d'engagements ; **il ne commente pas la division par deux du free cash-flow**. L'information est publiée, correctement, dans le tableau de flux. Elle n'est simplement pas mise en récit.

Un trimestre ne fait pas une tendance, et il existe des explications parfaitement bénignes — montée en puissance de Vera Rubin, calendrier de facturation, saisonnalité des grands contrats. **Mais c'est précisément la ligne à surveiller au T3, et c'est celle dont personne ne parlera si le chiffre d'affaires dépasse à nouveau 108 Mds$.**`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Créances clients et conversion en trésorerie — RISQUE ÉLEVÉ (nouveau)
**C'est le signal le plus important du T2 FY2027, et il est apparu ce trimestre.**

| Indicateur | T1 FY2027 | T2 FY2027 |
|---|---|---|
| Chiffre d'affaires | 81,6 Mds$ | 96,2 Mds$ (**+18%**) |
| Flux de trésorerie d'exploitation | 50,3 Mds$ | 24,1 Mds$ (**−52%**) |
| Free cash-flow | 48,6 Mds$ | 21,3 Mds$ (**−56%**) |
| Conversion flux d'exploitation / résultat net | **86%** | **40%** |

Les créances clients passent de **38,5 Mds$ (25 janvier) à 63,1 Mds$ (26 juillet), soit +64% en six mois**, portant le délai moyen de règlement d'environ **51 à 60 jours**. La variation de créances a absorbé **22,3 Mds$** de trésorerie sur le seul trimestre.

**À surveiller au T3, dans cet ordre de priorité** :
1. Les créances progressent-elles encore plus vite que le chiffre d'affaires ?
2. Y a-t-il une concentration des créances sur les entités que NVIDIA finance elle-même (neoclouds, laboratoires) ? *Cette ventilation n'est pas publiée.*
3. Une provision pour créances douteuses apparaît-elle ?

**Interprétation prudente** : une montée en puissance produit peut légitimement décaler les encaissements, et un seul trimestre ne fait pas une tendance. Mais un fournisseur en situation de monopole se fait payer *plus vite*, pas plus lentement.

### Engagements d'approvisionnement — RISQUE ÉLEVÉ (aggravé)
**279,0 Mds$ contre 119,0 Mds$ un trimestre plus tôt (+134%)**, « principalement liés à l'achat de mémoire ». Les stocks atteignent 31,6 Mds$ (+48% en six mois).

**Précédent documenté** : la charge de **4,5 Mds$** sur les stocks H20 en 2025 démontre que ces engagements deviennent des pertes réelles dès que la demande escomptée disparaît. Ce précédent portait sur un engagement bien plus petit.

### Endettement — RISQUE MODÉRÉ (nouveau)
Dette long terme de **7,5 à 32,4 Mds$ en six mois (+333%)**, dont **24,9 Mds$ levés au seul T2**. Le ratio dette/capitaux propres passe de 0,07 à 0,15 — **encore très bas**, la trésorerie nette reste positive (~23 Mds$ hors titres cotés) et le ratio courant s'établit à 4,6.

**Ce n'est donc pas un problème de solvabilité.** C'est un signal de **doctrine** : une entreprise générant 21 Mds$ de free cash-flow trimestriel a jugé nécessaire d'emprunter. À rapprocher des emplois du semestre : 42,4 Mds$ de participations achetées, ~45 Mds$ restitués aux actionnaires, pour 69,9 Mds$ de free cash-flow.

### Engagements hors bilan et garanties — RISQUE ÉLEVÉ (inchangé)
Le 8-K du **17 août 2026** décrit des **garanties de valeur résiduelle** consenties à SB Energy pour ~4,25 GW sur le site de Portsmouth (Ohio), avec faculté discrétionnaire de soutenir 3,8 GW supplémentaires. Obligation cumulée **plafonnée à 105 Mds$**, locataire **OpenAI**, exposition jusqu'à **vingt ans**, effet à compter de **2028**.

**À surveiller** : le traitement comptable retenu (provision, passif éventuel en annexe, ou juste valeur), et **toute dégradation du profil de crédit d'OpenAI** — l'obligation s'éteint si OpenAI obtient une notation satisfaisante, ce qui signifie *a contrario* qu'elle n'en a pas.

### Plus-values sur participations dans le résultat — RISQUE ÉLEVÉ (en atténuation)
Le résultat net GAAP du T2 (59,7 Mds$) inclut **7,8 Mds$ de plus-values sur titres**, après **15,9 Mds$ au T1** — soit environ **11% du résultat avant impôt**, contre ~30% au trimestre précédent. **La dépendance diminue, ce qui est positif.**

Mais l'exposition sous-jacente a explosé : titres non cotés de 22,3 à **51,2 Mds$**, titres cotés de 12,9 à **42,8 Mds$**, avec **42,4 Mds$ d'achats sur le semestre**. Ces gains sont non monétaires, procycliques, et portent majoritairement sur des sociétés valorisées par modèles internes. **Le poste pèse moins dans le résultat, et beaucoup plus dans le bilan.**

### Parties liées — RISQUE MODÉRÉ À ÉLEVÉ (inchangé)
NVIDIA investit dans des entités qui achètent ses produits : OpenAI, CoreWeave, Nebius, IREN, NAVER, SSI, SB Energy, Poolside (1 Md$ investi, 6 Mds$ de licence). Le chiffre d'affaires reconnu sur ces contreparties est comptablement régulier, mais **économiquement partiellement autofinancé**.

**La part du CA réalisée avec des entités financées ou garanties par NVIDIA n'est pas communiquée séparément. Cette absence est en soi un point de vigilance** — et elle devient critique maintenant que les créances clients ont bondi de 64%.

### Information sectorielle — RISQUE MODÉRÉ (en régression)
La ventilation **Hyperscale / ACIE** introduite au T1, qui permettait de mesurer objectivement l'élargissement de la base clients, **ne figure plus dans le communiqué du T2**. C'est un recul d'information au moment précis où la question de la concentration devient centrale.

### Rémunération en actions — RISQUE FAIBLE (en amélioration)
**Point positif notable** : depuis le T1 FY2027, la rémunération en actions **n'est plus exclue** des mesures non-GAAP, avec retraitement de l'historique. Une direction financière qui s'impose volontairement une présentation moins flatteuse mérite d'être créditée. Les rachats excèdent la dilution : **24,29 Md d'actions diluées contre 24,53 Md un an plus tôt**.

---

### Verdict global
**Risque comptable : ÉLEVÉ — en aggravation sur le trimestre.**

Auditée par **PricewaterhouseCoopers**, aucun retraitement, aucun changement de commissaire aux comptes, et une transparence en amélioration sur la rémunération en actions. **Rien n'est dissimulé** : les 279 Mds$ d'engagements, les 24,9 Mds$ de dette levée, les 22,3 Mds$ de variation de créances et l'effondrement du free cash-flow figurent tous, correctement, dans les états publiés.

Le risque ne vient pas de ce qui est mal déclaré, mais de ce qui **n'est pas mis en récit** : le communiqué met en avant 96,2 Mds$ de chiffre d'affaires, 108 Mds$ de guidance et 26 Mds$ restitués aux actionnaires. Il ne commente pas la division par deux du free cash-flow. **Tout est dans le tableau de flux de trésorerie. C'est là qu'il faut aller le chercher.**`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Jensen Huang et Colette Kress

### Trésorerie et créances clients — les questions du trimestre

**1.** Le chiffre d'affaires a progressé de 18% en séquentiel et le free cash-flow a reculé de 56%, de 48,6 à 21,3 Mds$. La conversion du résultat net en flux d'exploitation est passée de 86% à 40%. **Quelle est votre explication ligne à ligne, et quel niveau de conversion visez-vous au T3 ?**

**2.** Les créances clients atteignent 63,1 Mds$, en hausse de 64% en six mois, portant le délai de règlement d'environ 51 à 60 jours. **Quelle part de ces créances est portée par des entités dans lesquelles NVIDIA détient une participation ou dont elle garantit la dette ?** Donnez-nous ce chiffre en dollars.

**3.** Avez-vous consenti des conditions de paiement plus favorables pour soutenir les commandes ? Si oui, à quelles catégories de clients, et **quel est votre encours de créances à plus de 90 jours** ?

### Endettement et allocation du capital

**4.** Vous avez levé 24,9 Mds$ de dette au T2 et porté votre endettement long terme de 7,5 à 32,4 Mds$, tout en générant 21,3 Mds$ de free cash-flow trimestriel. **Pourquoi emprunter ?** Et quel plafond d'endettement vous fixez-vous ?

**5.** Sur le semestre : 42,4 Mds$ de participations achetées, ~45 Mds$ restitués aux actionnaires, 69,9 Mds$ de free cash-flow. **Comment arbitrez-vous entre ces trois emplois ?** Lequel cède si l'un doit céder ?

**6.** Les engagements d'approvisionnement sont passés de 119 à 279 Mds$ en un trimestre. **Quel niveau de recul de la demande déclencherait une charge sur stocks comparable à celle de 4,5 Mds$ sur les H20 ?** Donnez-nous le seuil, pas la doctrine.

### Marge et pouvoir de fixation des prix

**7.** La marge brute du T3 est guidée à 74,0% contre 75,0% réalisés, en raison du coût de la mémoire. **Est-ce un plancher ou une première marche ?** Quelle marge brute retenez-vous pour FY2028 avec la HBM4 en volume ?

**8.** Vous avez signé un partenariat pluriannuel avec SK Hynix. **Quelle part de la hausse du prix de la mémoire pouvez-vous répercuter sur vos clients**, et à partir de quel niveau devrez-vous l'absorber ?

### Concurrence et concentration

**9.** AWS s'engage sur 2 millions de GPU et déploie simultanément Trainium3. **Quelle est votre part réelle des charges d'inférence chez vos quatre plus gros clients aujourd'hui, et quelle était-elle il y a deux ans ?**

**10.** La ventilation Hyperscale / ACIE, publiée au T1, a disparu du communiqué du T2. **Pourquoi ?** Et pouvez-vous la rétablir ?

**11.** Vous dites que « plusieurs laboratoires de frontière montent en parallèle » là où « un seul portait la construction » il y a un an. **Quelle part de votre chiffre d'affaires Data Center vos trois premiers clients représentent-ils aujourd'hui ?**

### Garanties et risque de crédit

**12.** La garantie plafonnée à 105 Mds$ sur le site de Portsmouth s'éteint si OpenAI obtient une notation de crédit satisfaisante. **Quel niveau de notation, selon quelle agence, et à quel horizon l'anticipez-vous ?**

**13.** Vous affirmez que « le calcul, c'est du chiffre d'affaires » chez vos clients. **Quel taux d'utilisation moyen observez-vous sur le parc installé**, et quelle proportion de vos clients neocloud est aujourd'hui rentable au niveau du free cash-flow ?

### Vision et gouvernance

**14.** Vous dirigez NVIDIA depuis trente-trois ans et une part de la prime de valorisation repose sur votre jugement personnel. **Quel est le plan de succession, et le conseil l'a-t-il formellement approuvé ?**

**15.** Quel est le risque que vous sous-estimez le plus aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

**Avertissement préalable, et il est important** : le T2 FY2027 a détruit la moitié de la thèse baissière classique. 96,2 Mds$ réalisés, +106%, guidance à 108 Mds$, capex client annoncé à 1 300 Mds$ pour 2027. **Quiconque soutenait que la demande était illusoire a perdu, et devrait le reconnaître.** La thèse qui suit est donc différente de celle d'il y a trois mois — c'est le tableau de flux de trésorerie qui la porte désormais, plus le compte de résultat.

### 1. Le meilleur trimestre de l'histoire de l'entreprise a produit son plus mauvais trimestre de trésorerie

Chiffre d'affaires **+18% en séquentiel**. Free cash-flow **−56%**, de 48,6 à 21,3 Mds$. Conversion du résultat net en flux d'exploitation : **86% → 40%**.

La contrepartie est intégralement dans les créances clients : **63,1 Mds$, +64% en six mois**, délai de règlement passé d'environ 51 à 60 jours. Sur le seul T2, la variation de créances a absorbé **22,3 Mds$**.

Il existe des explications bénignes — montée en puissance de Vera Rubin, calendrier de facturation, contrats de grande taille. Elles sont plausibles. **Mais l'explication la moins flatteuse est aussi la plus simple : un fournisseur en monopole absolu se fait payer plus vite, pas plus lentement.** Et l'allongement survient exactement au moment où NVIDIA finance, garantit et cautionne ses propres acheteurs.

### 2. L'entreprise s'est mise à emprunter — et c'est un aveu

Dette long terme de **7,5 à 32,4 Mds$** en six mois, dont **24,9 Mds$ levés au seul T2**, par une société générant 21 Mds$ de free cash-flow trimestriel et disposant de 56 Mds$ de liquidités.

Regardez les emplois du semestre : **42,4 Mds$ de participations achetées**, ~45 Mds$ restitués aux actionnaires, pour **69,9 Mds$ de free cash-flow**. Les emplois excèdent les ressources ; l'écart est comblé par emprunt.

Le management dira que la dette est bon marché face à un ROE supérieur à 100%, et il aura arithmétiquement raison. **Mais la question n'est pas le coût, c'est la nécessité.** Une entreprise dont le produit est rationné n'a besoin ni d'emprunter, ni de financer ses acheteurs, ni de garantir leurs baux sur vingt ans. NVIDIA fait les trois simultanément.

### 3. Le pouvoir de fixation des prix a commencé à changer de camp

Marge brute guidée à **74,0% contre 75,0%**, explicitement en raison du coût de la mémoire. Cent points de base sur 108 Mds$ : 1,1 Md$.

Pris isolément, c'est négligeable. **Ce qui compte, c'est la direction et la cause.** Après trois ans de marges en expansion, le premier recul guidé provient du fait que **SK Hynix, Micron et Samsung ont retrouvé un pouvoir de négociation**. Les 279 Mds$ d'engagements confirment le diagnostic : on ne préempte pas des années de mémoire quand on est en position de force sur son fournisseur — on le fait quand on craint de ne pas en avoir.

NVIDIA est désormais prise en tenaille : ses fournisseurs augmentent leurs prix, ses clients paient plus tard, et ses concurrents ASIC croissent près de trois fois plus vite que les GPU marchands.

### 4. La concentration a changé de forme, pas d'intensité

Huang affirme que « plusieurs laboratoires de frontière montent en parallèle » là où « un seul portait la construction » il y a un an. C'est probablement vrai. **Mais la ventilation Hyperscale / ACIE, publiée au T1 et qui permettait précisément de le vérifier, a disparu du communiqué du T2.**

Et les nouveaux entrants dans la base clients — neoclouds, laboratoires, IA souveraines — sont **structurellement moins solvables** que les quatre hyperscalers. Croiser cette information avec des créances en hausse de 64% et l'absence de ventilation par qualité de contrepartie devrait suffire à interdire toute conclusion rassurante.

### 5. Le concurrent que les optimistes sous-estiment reste Broadcom — et il vient de gagner un allié

Broadcom co-conçoit le TPU de Google, MTIA chez Meta, Maia chez Microsoft, Titan chez OpenAI. Carnet IA de 73 Mds$, objectif de 100 Mds$ en FY2027, ~60% du co-design. **Il fournit aux clients de NVIDIA les moyens de ne plus être clients, sans porter le risque commercial** — et se paie 45x pour cela, contre 23x pour NVIDIA.

L'allié nouveau, ce sont les mémoiristes. Chaque point de marge brute que NVIDIA cède à SK Hynix est un point que Broadcom ne cède pas, puisqu'il ne porte pas le stock.

### 6. Les hypothèses requises pour justifier le cours

À 213,05 $ et ~5 150 Mds$, il faut que **toutes** ces propositions soient vraies simultanément :
- le capex des cinq premiers hyperscalers atteint bien ~1 300 Mds$ en 2027, **et se maintient** en 2028
- les 279 Mds$ d'engagements d'approvisionnement se transforment en ventes, pas en stocks
- les 63,1 Mds$ de créances sont intégralement encaissés
- la marge brute se stabilise à 74% et ne poursuit pas sa glissade
- OpenAI, CoreWeave et les neoclouds honorent leurs baux jusqu'en 2048
- TSMC produit sans interruption ni incident géopolitique

**Six conditions indépendantes. Même à 85% de probabilité chacune, la probabilité conjointe tombe sous 40%.**

### 7. Que devient la valorisation si la croissance déçoit de 20 à 30% ?

Une croissance FY2028 ramenée de +45% à +15% déclencherait une **triple compression** : le BPA baisse, le multiple se contracte (23x → 12-14x), et les plus-values sur un portefeuille de participations devenu **94 Mds$** s'inversent en moins-values. **Effet cumulé : une baisse du titre de 45 à 55%**, soit une zone de 95 à 115 $.

### Le scénario catastrophe unique
**Non plus la pause du capex — le T2 l'a rendue moins probable à court terme — mais l'accident de crédit dans l'écosystème financé.**

Un neocloud ou un laboratoire adossé à NVIDIA manque une échéance. Une provision pour créances douteuses apparaît sur un encours de 63 Mds$. Le marché découvre alors, faute de ventilation publiée, qu'il ne sait pas quelle part du chiffre d'affaires repose sur des contreparties financées par le vendeur. La révision ne porte pas sur un trimestre de bénéfice : elle porte sur **la qualité de tout le chiffre d'affaires des huit derniers trimestres**.

**Probabilité sur 18 à 30 mois : 20 à 30%.** En baisse par rapport à notre estimation de mai concernant la pause du capex — mais mieux ciblée.

### Conclusion short
Il faut le dire clairement : **NVIDIA vient de publier l'un des meilleurs trimestres de l'histoire du capitalisme moderne**, et à 23x les bénéfices FY2027 pour +106% de croissance, elle est objectivement moins chère que Broadcom.

Le problème n'est plus la demande, ni le multiple. C'est que **le meilleur trimestre commercial jamais réalisé s'est accompagné du plus mauvais trimestre de conversion en trésorerie depuis des années, du premier recul guidé de marge brute depuis trois ans, et du premier recours significatif à l'endettement de l'histoire récente de l'entreprise** — les trois simultanément, et aucun des trois n'a été commenté dans le communiqué.

La position honnête n'est pas « vendez NVIDIA ». C'est : **le débat a changé de terrain, du compte de résultat vers le tableau de flux de trésorerie, et la quasi-totalité du marché regarde encore le mauvais document.** Surveillez la ligne « variation des créances clients » au T3. C'est là que se trouve désormais la thèse, dans les deux sens.`,
  },
];

export default { ...meta, modules };
