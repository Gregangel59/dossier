// ============================================================
//  DOSSIER : Advanced Micro Devices (AMD)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "amd",                     // identifiant d'URL : /dossier/amd
  ticker: "AMD",
  name: "Advanced Micro Devices, Inc.",
  exchange: "Nasdaq",
  sector: "Semi-conducteurs",
  initials: "AMD",                  // affiché dans la pastille
  tagline: "Concepteur fabless de puces hautes performances — CPU, GPU IA, FPGA.",
  riskScore: 38,                    // score du rapport de risque (ou null)
  riskLabel: "Risque élevé",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "amd.html",
  updated: "2026-06",              // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Advanced Micro Devices (AMD) est un **concepteur de semi-conducteurs « fabless »** fondé en 1969, basé à Santa Clara (Californie), ~31 000 employés. Le chiffre d'affaires 2025 atteint un record de **34,6 milliards $** (+34% vs 2024), pour un bénéfice net GAAP de **4,3 milliards $** et un BPA de **2,65 $**.

AMD conçoit des puces hautes performances mais **ne possède aucune usine** : la fabrication est externalisée, essentiellement à **TSMC** (Taïwan, nœuds 5nm/3nm/2nm). Le modèle repose sur la conception (architectures Zen pour CPU, CDNA pour GPU de calcul, RDNA pour le gaming), la propriété intellectuelle et la relation client, l'industrialisation étant déléguée aux fondeurs.

## Principaux produits et services — 3 segments

- **Data Center (48% du CA)** : processeurs serveurs **EPYC**, accélérateurs IA **Instinct** (MI300X, MI350, bientôt MI450), DPU Pensando, systèmes rack-scale Helios. Cœur de la croissance.
- **Client & Gaming (42%)** : CPU **Ryzen** pour PC, GPU **Radeon**, et SoC semi-custom pour consoles (PlayStation 5, Xbox). Segments Client et Gaming fusionnés en 2025.
- **Embedded (10%)** : FPGA et SoC adaptatifs (gamme Versal, Virtex, Zynq) issus de l'acquisition Xilinx — automobile, industriel, communications.

## Clients, fournisseurs, concurrents

**Clients** : hyperscalers (Microsoft, Meta, Oracle, Google), OpenAI (accord 6 GW), fabricants de PC (Dell, HP, Lenovo), Sony et Microsoft (consoles), entreprises et data centers.

**Fournisseurs** : **TSMC** (fabrication des puces — fournisseur critique quasi-exclusif sur le haut de gamme), **Samsung/SK Hynix/Micron** (mémoire HBM), Amkor (packaging avancé), substrats et équipementiers.

**Concurrents** : **Nvidia** (n°1 mondial GPU IA, ~85% de parts), **Intel** (CPU serveurs et PC), **Broadcom** et **Marvell** (ASIC custom IA), **Qualcomm/Arm** (mobile, edge).

## Modalités contractuelles

Contrairement à un modèle d'abonnement, AMD vend des **composants** : revenus reconnus à la livraison. Les hyperscalers passent commande par vagues de capex liées aux cycles d'investissement IA. L'accord **OpenAI** (octobre 2025) introduit une structure originale : déploiement de 6 GW de GPU + **warrant de 160M d'actions** pour OpenAI (jusqu'à ~10% du capital) conditionné aux jalons de déploiement et au cours de l'action.`,
  },
  {
    id: 2,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Architecture x86 — Duopole réglementaire de fait
AMD est, avec Intel, l'un des **deux seuls détenteurs de licence x86** capables de produire des CPU serveurs et PC compatibles. Cette barrière, héritée d'un accord de licence croisée historique, rend l'entrée d'un nouveau concurrent x86 quasi impossible. Sur le serveur, AMD a pris des parts massives à Intel grâce à la supériorité des EPYC.

### 2. Avance d'exécution — Leadership produit Zen
Depuis 2017, AMD enchaîne les générations Zen avec une **régularité d'exécution** qui a inversé le rapport de force avec Intel. Le couple TSMC (gravure de pointe) + architecture Zen donne un avantage performance/watt difficile à rattraper pour un Intel englué dans ses problèmes de fonderie.

### 3. Portefeuille IP élargi par Xilinx et Pensando
L'acquisition de **Xilinx (2022, ~49 Md$)** a apporté le leadership FPGA/adaptatif, et **Pensando** les DPU. AMD est aujourd'hui le seul acteur à combiner CPU + GPU + FPGA + DPU sous un même toit — une plateforme de calcul complète.

### 4. Écosystème et co-conception client
L'accord OpenAI illustre un moat émergent : la **co-ingénierie** matériel/logiciel avec les plus gros acheteurs de calcul mondiaux. Plus AMD optimise ROCm sur les modèles d'OpenAI, plus le coût de sortie augmente.

### 5. Diversification — Amortisseur de cycle
À la différence de Nvidia (très concentré GPU), AMD couvre serveurs, PC, consoles, embarqué. Cette diversité lisse les cycles, même si elle dilue la croissance moyenne.

## Positionnement vs concurrence

| Critère | AMD | Nvidia | Intel |
|---|---|---|---|
| Parts GPU IA | ~10-15% | ~85% | <5% |
| Parts CPU serveur | en forte hausse | — | en déclin |
| Marge brute (non-GAAP) | ~52% | ~70%+ | ~30-40% |
| Écosystème logiciel | ROCm (rattrapage) | CUDA (dominant) | oneAPI |
| Diversification | Forte | Concentrée GPU | Forte mais sous pression |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Modéré** — les hyperscalers sont peu nombreux et puissants ; AMD doit séduire pour diversifier face à Nvidia, ce qui limite son pricing power IA.
- **Vis-à-vis des fournisseurs (TSMC, HBM)** : **Faible** — dépendance critique à TSMC pour les nœuds avancés et tension sur l'offre de HBM ; AMD est preneur de prix sur ces intrants.
- **Talon d'Achille** : l'écosystème **CUDA** de Nvidia reste le standard de facto ; le moat logiciel d'AMD (ROCm) est encore en construction.`,
  },
  {
    id: 3,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels
**1. Supercycle IA — Accélérateurs Instinct** : Le Data Center est devenu le moteur principal (>50% du CA au T1 2026, +57% en glissement annuel). La montée en charge des MI350 puis **MI450/Helios** (déploiement S2 2026) et l'accord **OpenAI 6 GW** (potentiel ~100 Md$ de CA cumulé) ouvrent un marché de plusieurs dizaines de milliards.

**2. Réévaluation du TAM serveur CPU** : Le management a relevé sa prévision de croissance du marché CPU serveur de ~18% à **~35%/an**, visant un TAM >120 Md$ d'ici 2030, porté par l'IA agentique et l'inférence qui consomment du CPU en plus du GPU.

**3. Parts de marché Intel** : AMD continue de grignoter Intel sur le serveur et le PC, soutenu par une exécution Zen régulière et les difficultés de fonderie d'Intel.

**4. Levier opérationnel** : CA 2025 +34%, BPA non-GAAP record à 4,17 $, free cash-flow record (2,6 Md$ rien qu'au T1 2026, x3 sur un an). La marge brute non-GAAP atteint ~55-57% hors charges exceptionnelles MI308.

**5. Bilan solide** : 10,6 Md$ de trésorerie fin 2025, dette/fonds propres très faible (~0,06) — flexibilité pour investir dans la capacité (wafers TSMC, packaging) et les acquisitions (ZT Systems, 4,4 Md$).

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents au business

**1. Domination CUDA de Nvidia** : Nvidia conserve ~85% du marché des accélérateurs IA et un écosystème logiciel (CUDA) qui crée des switching costs énormes. AMD reste le « numéro 2 » et doit prouver ROCm à grande échelle ; tout retard MI450 redonne l'avantage à Nvidia.

**2. Dépendance TSMC & contrainte HBM** : L'offre de nœuds 2nm et de HBM4 est limitée. La capacité de TSMC peut **plafonner les expéditions** d'AMD indépendamment de la demande, et l'inflation du coût mémoire comprime les marges.

**3. Concentration clients & risque OpenAI** : Une part croissante du CA Data Center dépend d'une poignée d'hyperscalers et d'OpenAI. Le warrant OpenAI **dilue** les actionnaires et lie le destin d'AMD à la santé financière d'un client encore déficitaire.

### Analyse pré-mortem
Que se passerait-il si AMD reculait à 250 $ dans 2 ans ? Scénario : ralentissement du capex IA des hyperscalers (« digestion » post-2026), retard ou sous-performance du MI450, et compression du multiple d'un P/E forward de ~58x à ~30x. La valorisation chuterait mécaniquement de 40-50%.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : à ~520 $ et un P/E historique >160x (forward ~58x), le titre intègre une **exécution parfaite** du roadmap IA ET un re-rating durable face à Nvidia. AMD se paie plus cher que Nvidia sur le forward P/E (~58x vs ~25x) alors que Nvidia croît plus vite, garde de meilleures marges et domine le logiciel. Le moindre faux pas d'exécution se paierait très cher.`,
  },
  {
    id: 4,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'AMD dans la chaîne de valeur

AMD est un **concepteur fabless** : il occupe le maillon « design + IP + intégration » entre les fournisseurs d'outils/fonderie en amont et les fabricants de systèmes / clients finaux en aval.

### Amont — Intrants

**Fabrication (étape la plus critique)** :
- **TSMC** — fondeur quasi-exclusif sur le haut de gamme (nœuds 5nm, 3nm, 2nm) ; dépendance structurelle
- **Samsung Foundry / GlobalFoundries** — nœuds plus matures, accords historiques

**Mémoire & packaging** :
- **SK Hynix, Samsung, Micron** — mémoire HBM (HBM3E, HBM4) critique pour les GPU Instinct
- **Amkor, ASE** — packaging avancé (CoWoS chez TSMC, packaging chez Amkor)

**Outils de conception (EDA) & IP** :
- **Synopsys, Cadence** — logiciels EDA
- **Arm** — licences pour certains cœurs ; **x86** sous licence croisée Intel

---

### AMD — Conception et intégration

**Conception** : architectures Zen (CPU), CDNA (GPU calcul), RDNA (gaming), Versal (FPGA), Pensando (DPU)

**Intégration de systèmes** :
- Acquisition **ZT Systems (2025, 4,4 Md$)** pour l'ingénierie de systèmes rack-scale (plateforme Helios)
- Pile logicielle **ROCm** (concurrent de CUDA)

---

### Aval — Clients finaux

**Hyperscalers / Cloud** : Microsoft Azure, Meta, Oracle, Google, AWS — EPYC et Instinct

**Laboratoires IA** : **OpenAI** (accord 6 GW), autres acteurs IA

**Fabricants de PC (OEM)** : Dell, HP, Lenovo, Asus — Ryzen et Radeon

**Consoles** : Sony (PlayStation), Microsoft (Xbox) — SoC semi-custom

**Embarqué / Industriel / Auto** : équipementiers via FPGA Versal (issus de Xilinx)

**Distributeurs & intégrateurs** : Supermicro (plateforme Helios présentée à Computex), revendeurs, fabricants de cartes`,
  },
  {
    id: 5,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — Exercice 2025 (CA total : 34,6 Md$)

| Segment | CA 2025 | Croissance vs 2024 | Tendance |
|---|---|---|---|
| Data Center | 16,6 Md$ | **+32%** | Moteur n°1 (EPYC + Instinct) |
| Client & Gaming | 14,6 Md$ | **+51%** | Forte (Ryzen + consoles + Radeon) |
| Embedded | 3,5 Md$ | **-3%** | Faible, demande mixte |

*Note : depuis 2025, AMD a fusionné les segments Client et Gaming en un seul reportable.*

---

### Dynamique récente — T1 2026

| Indicateur | T1 2026 | Glissement annuel |
|---|---|---|
| CA total | 10,25 Md$ | **+38%** |
| Data Center | 5,8 Md$ | **+57%** |
| BPA non-GAAP | 1,37 $ | +43% |
| Marge brute non-GAAP | 55% | +170 bps |
| Free cash-flow | 2,6 Md$ | x3 |

**Point clé** : le Data Center représente désormais **plus de la moitié** du CA — Lisa Su parle d'« une inflexion claire de la trajectoire de croissance et d'un changement structurel du business ».

---

### Dynamiques par segment

**Data Center** : le cœur du dossier. EPYC gagne des parts sur Intel ; Instinct (MI300X → MI350 → MI450) monte en charge sur l'IA. Le management a doublé sa prévision de croissance du TAM CPU serveur (~35%/an, >120 Md$ d'ici 2030). Volatilité liée aux **contrôles export MI308 vers la Chine** (~440 M$ de charges nettes sur 2025).

**Client & Gaming** : forte croissance 2025 (+51%) portée par les CPU Ryzen Zen 5, le mix plus riche et les consoles. La partie Gaming pure (Radeon + consoles) reste à marge faible — la fusion des segments rend la profitabilité du gaming moins lisible (critique d'analystes).

**Embedded** : segment hérité de Xilinx, en repli (-3%) sur une demande industrielle/auto/comm encore molle. Cycles de design longs ; apporte de la diversification de marge plutôt que de la croissance.`,
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
| CA | 10,25 Md$ | ~9,89 Md$ | **+4% ✓** |
| Croissance YoY | +38% | — | Forte |
| BPA non-GAAP | 1,37 $ | ~1,29 $ | **Battu** |
| BPA GAAP | 0,84 $ | — | +91% YoY |
| Data Center | 5,8 Md$ | — | **+57% YoY** |

**AMD a dépassé le consensus** sur le CA comme sur le BPA, porté par le Data Center.

---

### Guidance T2 2026

- CA attendu : **~11,2 Md$ ± 300 M$** (vs consensus ~10,5 Md$) — soit **~45-46% de croissance** en glissement annuel
- Réaction : titre **+14 à +18%** en after-hours après publication (5 mai 2026)

---

### Évolution des marges

- Marge brute non-GAAP **55%** (+170 bps YoY), tirée par le mix Data Center
- Marge brute GAAP passée de 50% à 53%
- Marge opérationnelle ~14,4% (vs 10,8% un an plus tôt)
- Free cash-flow record **2,6 Md$** (x3) ; cash-flow opérationnel 3,0 Md$

---

### Perspectives et guidance management

- Lisa Su : **« forte et croissante confiance »** d'atteindre des dizaines de milliards de $ de CA IA Data Center l'an prochain, et de dépasser l'objectif long terme de croissance >80%
- Relèvement du TAM CPU serveur (~35%/an, >120 Md$ d'ici 2030)
- Montée en charge MI450/Helios attendue au S2 2026

---

### Signaux d'alerte bilan

- **Charges MI308 / contrôles export Chine** : ~440 M$ de charges nettes sur 2025 (dont une reprise de ~360 M$ au T4) — volatilité réglementaire
- **Jours de stock** à 160 (vs 163) — sous contrôle mais à surveiller dans un contexte de montée en charge
- **Dilution warrant OpenAI** : jusqu'à 160M d'actions (~10%) à intégrer dans les modèles
- **Dépendance capacité TSMC/HBM** : risque de plafond d'expéditions

---

### Réaction du marché

Le titre a connu un **rallye exceptionnel** (+~320-375% sur 12 mois, all-time high ~533 $ début juin 2026). Cela indique que le marché price désormais une exécution quasi-parfaite du roadmap IA — laissant peu de marge à la déception.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2024-2026

**2024** : Ton confiant mais mesuré. Lisa Su évoque le doublement du Data Center et le premier dépassement des 5 Md$ de CA Instinct. Langage prudent sur la rampe IA.

**2025** : Ton plus offensif. Année qualifiée de « définissante ». Annonce de l'accord OpenAI (octobre) comme tournant stratégique. Le management commence à parler de « changement structurel ».

**T1 2026** : Ton nettement plus affirmé. Su parle d'**« inflexion claire »** et de **« changement structurel du business »**, le Data Center devenant le moteur principal. Relèvement spectaculaire du TAM serveur CPU.

---

### Priorités répétées du management

**1. Leadership Data Center & IA** — Thème dominant. Su martèle la montée en charge Instinct (MI350 → MI450 → Helios) et la trajectoire vers des « dizaines de milliards » de CA IA.

**2. Réévaluation du marché** : doublement de la prévision de croissance du TAM CPU serveur (~18% → ~35%/an), justifiée par l'IA agentique et l'inférence qui consomment du CPU. Su affirme que les CPU agentiques sont **additifs** (et non cannibales) au TAM GPU.

**3. Sécurisation de la supply chain** : « nous travaillons étroitement avec nos partenaires pour augmenter significativement nos capacités wafer et back-end ». Reconnaissance implicite de la contrainte TSMC/HBM.

**4. Logiciel ROCm** : priorité affichée pour réduire l'écart avec CUDA — point sensible face aux questions analystes.

**5. Discipline d'investissement & FCF** : insistance sur le free cash-flow record et la solidité du bilan pour financer la croissance.

---

### Analyse du sentiment

- **Confiance** : nettement croissante depuis fin 2025. Le management « livre et relève » plutôt que de « surpromettre ».
- **Reconnaissance des contraintes** : Su mentionne systématiquement la capacité d'offre (wafers, HBM) et les contrôles export comme facteurs à gérer.
- **Questions analystes clés** (T1 2026) : crédibilité du doublement du TAM serveur (TD Cowen), additivité des CPU agentiques vs GPU et inflation mémoire (Bank of America). Réponses rassurantes mais à vérifier dans l'exécution.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Dr. Lisa Su — Présidente-Directrice Générale (CEO depuis 2014, Chair depuis 2022)

**Formation** : Triple diplômée du **MIT** (BS, MS, PhD en génie électrique) — profil d'ingénieure de très haut niveau.

**Bilan — un des meilleurs redressements de la tech** :
- Prise de fonction en 2014 alors qu'AMD était au bord de la faillite (action <2 $, quasi-insolvable)
- Architecte de la stratégie **Zen** (2017) qui a inversé le rapport de force avec Intel
- Acquisitions structurantes : **Xilinx (2022, ~49 Md$)**, Pensando, **ZT Systems (2025, 4,4 Md$)**
- CA passé de ~5 Md$ (2014) à **34,6 Md$ (2025)** ; action multipliée par plus de 200x sur la période
- Négociation de l'accord stratégique **OpenAI** (2025)

**Ancienneté** : >10 ans comme CEO, considérée comme l'une des dirigeantes les plus respectées du secteur. Récompensée à de multiples reprises (dont CEO de l'année par des publications sectorielles).

**Participation financière** : rémunération largement indexée sur la performance (actions). Détient une participation significative ; alignement jugé bon. Des **ventes d'initiés** ont été signalées récemment (~164 M$ sur 3 mois selon une source) — comportement courant de prise de bénéfices après un rallye de +300%, à surveiller sans le surinterpréter.

---

### Jean Hu — EVP, CFO & Trésorière

Pilote la discipline financière et l'expansion des marges. A qualifié l'accord OpenAI de « hautement relutif » au BPA non-GAAP, avec un potentiel >100 Md$ de CA sur 4 ans.

---

### Allocation du capital — Historique

| Indicateur | 2024 | 2025 | T1 2026 |
|---|---|---|---|
| ROE | ~faible | ~8% | en hausse |
| Marge brute non-GAAP | 53% | 52% | 55% |
| Croissance CA | +14% | +34% | +38% |
| Rachats d'actions | — | ~1,3 Md$ | — |

**Tendance** : croissance forte et marges en expansion. AMD **ne verse pas de dividende** (réinvestissement dans la croissance et les rachats modestes) — choix cohérent pour une valeur de croissance, mais sans coussin pour investisseurs « revenu ».

---

### Signaux d'alerte

- **Dilution warrant OpenAI** : jusqu'à ~10% du capital — relutif au CA mais dilutif au nombre d'actions
- **Ventes d'initiés récentes** : à surveiller dans le contexte du rallye
- **Risque clé d'allocation** : le pari capacitaire (engagements TSMC/HBM) doit être absorbé par la demande réelle
- **Type** : gestionnaire professionnelle issue de l'ingénierie — exécution remarquable, faible biais promotionnel, forte crédibilité technique`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2020-2026)

### Hausses significatives (+5%)

**Octobre 2025 — Accord OpenAI** : le titre a **bondi de ~24% en une séance** à l'annonce de l'accord 6 GW + warrant de 160M d'actions. Catalyseur majeur : validation par le marché de la crédibilité d'AMD comme alternative à Nvidia sur l'IA.

**Mai 2026 — Résultats T1 + relèvement guidance** : +14 à +18% en after-hours. CA +38%, Data Center +57%, guidance T2 ~11,2 Md$ au-dessus du consensus, doublement du TAM serveur CPU.

**2024-2026 — Supercycle IA** : tendance de fond. L'action a été multipliée par plus de 3 sur l'année écoulée (+~320-375%), atteignant un all-time high autour de **533 $** début juin 2026.

**Juin 2026 — Vague d'upgrades analystes** : Barclays (Overweight, cible relevée), passage à « Strong Buy » par plusieurs maisons sur la demande IA agentique.

---

### Baisses significatives (-5%)

**Mars 2020 — COVID-19** : chute initiale avec l'ensemble du marché, rapidement récupérée.

**2022 — Krach tech / hausse des taux** : forte correction des valeurs de croissance et semi-conducteurs ; cycle PC en repli post-COVID.

**2023-2025 — Contrôles export Chine (MI308)** : à plusieurs reprises, les restrictions américaines sur les ventes de GPU à la Chine ont pesé (~440 M$ de charges nettes sur 2025).

**Épisodes de « digestion » IA** : périodes de doute sur la pérennité du capex hyperscaler ayant provoqué des corrections sectorielles (Nvidia, AMD, CoreWeave).

---

### Facteurs structurels

- **Bêta élevé** : valeur de croissance/semi très volatile, sensible au sentiment IA et aux taux
- **Pas de dividende** : base d'actionnaires orientée croissance, peu de soutien « revenu »
- **Sensibilité Nvidia** : le cours d'AMD réagit fortement aux nouvelles et à la valorisation de Nvidia (corrélation et rotation sectorielle)
- **Cible analystes moyenne** ~480 $ (fourchette ~225-665 $) début juin 2026 — soit un **léger downside** sur le cours spot ~520 $, signe d'une valorisation tendue`,
  },
  {
    id: 10,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Semi-conducteurs IA (2026)

| Société | Code Bloomberg | Capitalisation (Md$) | EV/CA | P/E forward | P/E trailing | Rendement div. |
|---|---|---|---|---|---|---|
| **AMD** | **AMD US** | **~880** | **~élevé** | **~58x** | **>160x** | **0%** |
| Nvidia | NVDA US | ~4 500-5 300 | ~très élevé | ~24-25x | ~40x | ~0,1% |
| Broadcom | AVGO US | ~très élevée | — | ~38x | — | oui |
| Intel | INTC US | ~modeste | faible | en redressement | n/a (pertes) | réduit |
| Marvell | MRVL US | ~moyenne | — | élevé | élevé | faible |

*Données estimatives sur la base des cours et publications disponibles à juin 2026. Ordres de grandeur — à vérifier avant toute décision.*

---

### Analyse comparative

**Nvidia (NVDA) — Le benchmark absolu**
- ~85% de parts du marché des accélérateurs IA, écosystème **CUDA** dominant
- Marges brutes ~70%+, croissance ~65-85% YoY ; CA fiscal 2026 ~216 Md$
- Verse un dividende relevé (0,25 $/trim.) + ~80 Md$ de rachats autorisés
- **Verdict** : moins cher qu'AMD sur le forward P/E (~24x vs ~58x) **malgré** une croissance supérieure et de meilleures marges — l'argument « value » paradoxal

**Intel (INTC) — Le challenger en redressement**
- En perte de parts serveur/PC face à AMD ; difficultés de fonderie
- Bénéficie du thème « agentic AI » qui ravive certaines valeurs classiques
- Décote justifiée par l'exécution incertaine

**AMD vs Nvidia — L'écart qui compte**
AMD se paie une **prime de valorisation** sur le forward P/E alors qu'il est le « numéro 2 » de l'IA. La thèse bull suppose qu'AMD réduira l'écart de parts et de logiciel (ROCm vs CUDA). Le forward PEG d'AMD (~1,1-1,3) est proche de la médiane sectorielle, ce qui « justifie » la prime **si et seulement si** la croissance >34% se matérialise. C'est le pari central de 2026-2027.`,
  },
  {
    id: 11,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028 (non-GAAP)

### Hypothèses de modélisation

**Croissance du CA** :
- Data Center : moteur principal, +40-60%/an possible si MI450 et OpenAI montent en charge
- Client & Gaming : +10-20%/an (parts Intel, cycle PC, consoles)
- Embedded : reprise progressive (+0-10%/an)
- Contrainte : **capacité TSMC/HBM** peut plafonner les expéditions
- **Croissance CA totale estimée : +30-45%/an** sur la période (front-loaded sur 2026)

**Levier opérationnel** :
- Marge brute non-GAAP vers ~55%+ avec le mix Data Center
- Effet de levier : croissance du BPA supérieure à celle du CA

**Coûts** : inflation mémoire HBM à surveiller ; investissements R&D et capacité élevés

**Dilution** : warrant OpenAI (jusqu'à ~160M d'actions / ~10%) à intégrer progressivement selon les jalons

---

### Estimations BPA non-GAAP

| Exercice | BPA non-GAAP estimé | Croissance | P/E au cours actuel (~520 $) |
|---|---|---|---|
| 2024 (réalisé) | **3,31 $** | — | — |
| 2025 (réalisé) | **4,17 $** | **+26%** | — |
| **2026E** | **6,50-7,50 $** | **+55-80%** | **~70-80x** |
| **2027E** | **9,00-11,00 $** | **+35-50%** | **~47-58x** |
| **2028E** | **12,00-15,00 $** | **+30-40%** | **~35-43x** |

*Fourchettes larges reflétant l'incertitude élevée sur la rampe IA et la dilution.*

---

### Sensibilité

- **Scénario optimiste** (MI450 plein succès + OpenAI + parts Intel) : BPA 2028 ~15 $ → P/E 2028 ~35x — encore cher mais croissance qui « rattrape » le multiple
- **Scénario de base** : BPA 2028 ~12-13 $ → P/E 2028 ~40x — valorisation tendue
- **Scénario pessimiste** (digestion capex IA + retard MI450) : BPA 2028 ~8-9 $ → P/E 2028 >55x — forte vulnérabilité

**Conclusion** : la thèse repose entièrement sur l'**exécution du roadmap IA** et la **soutenabilité du capex hyperscaler**. À ~520 $, le titre price déjà une trajectoire très favorable ; le profil risque/rendement est asymétrique à la baisse à court terme, mais potentiellement attractif sur 3-5 ans pour un investisseur convaincu par la croissance et tolérant à une volatilité extrême.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus

**Risque modéré** : la vente de composants est reconnue à la livraison (IFRS/US GAAP standard). Le point sensible est l'**accord OpenAI** : la structure warrant-pour-volume mêle revenu produit et instrument de capitaux propres. Le traitement comptable du warrant (juste valeur, charges de rémunération en nature liées au contrat) mérite un examen attentif des notes annexes.

### Goodwill et immobilisations incorporelles

**Signal d'alerte à surveiller** : l'acquisition de **Xilinx (2022, ~49 Md$)** a généré un **goodwill très important** au bilan. Ce goodwill est testé annuellement ; toute dépréciation future serait un signal négatif. L'amortissement des incorporels liés aux acquisitions pèse sur le résultat GAAP (d'où l'écart GAAP/non-GAAP).

**Question à poser** : les hypothèses des tests de dépréciation (taux d'actualisation, croissance) sont-elles conservatrices ?

### Stocks et charges exceptionnelles

**Point de vigilance** : les **charges MI308 liées aux contrôles export Chine** (~440 M$ nets en 2025, avec une reprise de ~360 M$ au T4) illustrent la volatilité des provisions sur stocks. Les reprises de provisions **gonflent ponctuellement la marge** — il faut normaliser pour juger la rentabilité sous-jacente. Jours de stock à 160 : à surveiller en phase de montée en charge.

### Écart GAAP vs non-GAAP

**Risque modéré** : l'écart entre BPA GAAP (2,65 $) et non-GAAP (4,17 $) en 2025 est significatif, principalement dû à l'amortissement des incorporels (Xilinx) et à la rémunération en actions. Comportement courant dans la tech, mais à ne pas ignorer : le non-GAAP **exclut des coûts bien réels** (SBC).

### Rémunération en actions (SBC)

**À examiner** : la SBC est élevée dans la tech et **dilue** les actionnaires. Combinée au warrant OpenAI, la dilution potentielle est un vrai sujet. À rapporter au free cash-flow.

### Fusion des segments Client/Gaming

**Signal de transparence** : la **fusion des segments Client et Gaming** en 2025 réduit la visibilité sur la profitabilité (faible) du Gaming pur — critiquée par certains analystes comme masquant la faiblesse du segment.

### Flux de trésorerie vs résultat net

**Positif** : le free cash-flow record (2,6 Md$ au T1 2026, x3) **valide** la qualité des bénéfices — peu de divergence suspecte entre résultat et cash. Bon signal.

### Verdict global

**Risque comptable : FAIBLE À MODÉRÉ** — AMD est une large cap auditée, au reporting standard. Pas de fraude apparente. Les vrais points de vigilance sont : le **goodwill Xilinx**, l'**écart GAAP/non-GAAP** (amortissement + SBC), la **dilution warrant OpenAI**, et la **normalisation des charges/reprises MI308**. À examiner chaque trimestre.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour le CEO d'AMD

### Stratégie et avantage concurrentiel

**1.** L'écosystème CUDA reste le standard de l'IA. Quels jalons concrets et mesurables de **ROCm** prouveront que l'écart logiciel avec Nvidia se réduit réellement d'ici 12-18 mois, et non seulement sur le papier ?

**2.** Vous avez doublé votre prévision de TAM CPU serveur (~18% → ~35%/an). Sur quelles hypothèses précises d'IA agentique et d'inférence repose ce chiffre, et qu'est-ce qui l'invaliderait ?

**3.** Le MI450/Helios est central. Quels sont les risques d'exécution (2nm TSMC, HBM4, packaging) qui pourraient retarder le déploiement S2 2026, et quel est votre plan B ?

### Allocation du capital

**4.** Le ROE et le ROIC restent modestes (~8%) malgré la croissance. Quel est votre coût du capital, et à quelle échéance le ROIC dépassera-t-il structurellement le WACC ?

**5.** Vous ne versez pas de dividende et les rachats sont modestes (~1,3 Md$). Comment arbitrez-vous entre retour aux actionnaires et investissement capacitaire, et la dilution (SBC + warrant) ne pèse-t-elle pas trop ?

**6.** Après Xilinx, Pensando et ZT Systems, quels seraient vos prochains domaines d'acquisition prioritaires — et qu'avez-vous appris de l'intégration de Xilinx (goodwill, synergies réelles) ?

### Risques

**7.** La dépendance à TSMC sur les nœuds avancés et la contrainte HBM peuvent plafonner vos expéditions. Quelle part de la demande 2026-2027 est aujourd'hui **non servie faute de capacité**, et comment sécurisez-vous les wafers ?

**8.** Le warrant OpenAI lie votre destin à un client encore déficitaire. Que se passe-t-il pour votre CA Data Center si OpenAI ralentit ses déploiements ou rencontre des difficultés de financement ?

**9.** Les contrôles export Chine (MI308) ont coûté ~440 M$ en 2025. Comment modélisez-vous le risque réglementaire futur, et quelle part de votre TAM IA dépend de la Chine ?

### Vision long terme

**10.** Dans 5 ans, quelle part de marché des accélérateurs IA visez-vous de façon réaliste, et qu'est-ce qui vous fait penser que vous pouvez passer durablement de « numéro 2 » à co-leader ?

**11.** L'essor des **ASIC custom** (Broadcom/Marvell pour Google, Meta, Amazon) menace le marché GPU marchand. Comment vous protégez-vous de cette internalisation par les hyperscalers ?

**12.** L'IA agentique transforme-t-elle vraiment la demande CPU de façon additive, ou risque-t-elle de cannibaliser vos propres ventes GPU à terme ?

### Gouvernance et culture

**13.** Vous avez réalisé l'un des plus grands redressements de la tech. Comment institutionnalisez-vous l'exécution pour qu'elle survive au-delà de votre direction et évitez-vous l'excès de confiance après un rallye de +300% ?

**14.** Des ventes d'initiés ont été signalées récemment. Comment alignez-vous la rémunération du management sur la création de valeur **long terme** plutôt que sur le cours de bourse à court terme ?

**15.** Quel est le risque que vous sous-estimez le plus aujourd'hui et que le marché ne voit pas encore dans la valorisation ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le « moat » IA est plus fragile qu'on ne le pense

Les haussiers vantent le MI450 et l'accord OpenAI. Mais le vrai moat de l'IA est **logiciel** (CUDA), pas matériel — et là, AMD a 15 ans de retard. ROCm progresse, mais reste un argument de « rattrapage », pas de domination. Tant qu'AMD est le « plan B » de Nvidia, son **pricing power est structurellement limité** et ses marges plafonnent ~20 points sous celles de Nvidia.

### 2. Concentration des revenus — Hyperscalers & OpenAI

Le Data Center (>50% du CA) dépend d'une **poignée de clients** (Microsoft, Meta, Oracle, OpenAI). Une « digestion » du capex IA — scénario déjà observé par épisodes — comprimerait immédiatement la croissance. Pire : le warrant OpenAI lie AMD à un client **non rentable** dont le financement dépend de levées de fonds continues. Si le cycle capex IA marque une pause, AMD est exposé en première ligne.

### 3. La dépendance TSMC/HBM — Un plafond, pas un moteur

AMD est **fabless** et preneur de prix : sans capacité TSMC 2nm et HBM4, il ne peut pas livrer, peu importe la demande. L'inflation du coût mémoire grignote les marges. Le « supercycle » bull suppose une offre illimitée — or l'offre est précisément le goulot d'étranglement.

### 4. Valorisation — Une prime qui défie la logique

À **P/E forward ~58x** (trailing >160x), AMD se paie **plus cher que Nvidia** (~24-25x forward) alors que Nvidia croît plus vite, garde de meilleures marges et domine le logiciel. Pour justifier ce multiple, AMD doit croître >35% **chaque année sans accroc**. Une déception de croissance de 20-30% (digestion IA, retard MI450) ferait s'effondrer le multiple : un passage de 58x à 30x sur un BPA décevant représente une **baisse potentielle de 40-50%**.

### 5. Allocation du capital — Xilinx revisitée & dilution

Xilinx (~49 Md$) a généré un goodwill massif jamais déprécié — l'Embedded (issu de Xilinx) **recule** (-3% en 2025). Le retour sur cet investissement géant est-il vraiment au rendez-vous ? Ajoutez la **dilution** (SBC élevée + warrant OpenAI ~10%) : les actionnaires existants paient une partie de la croissance affichée.

### 6. Le scénario catastrophe unique

**Pause du capex IA + montée des ASIC custom** : si les hyperscalers internalisent leurs accélérateurs (Google TPU, Amazon Trainium, ASIC Broadcom/Marvell) ET digèrent leur capex, le marché GPU marchand sur lequel AMD parie se réduit pendant qu'AMD a engagé de la capacité coûteuse. Combiné à une domination Nvidia persistante, AMD se retrouve « coincé au milieu ». Probabilité ? 30-40% sur un horizon 2-3 ans selon les scénarios pessimistes.

### Conclusion short

AMD est une **excellente entreprise** menée par une dirigeante exceptionnelle — mais **pas nécessairement une excellente action à ~520 $**. Le titre price une exécution parfaite du roadmap IA, une réduction de l'écart avec Nvidia, ET la soutenabilité du capex hyperscaler. Trois paris simultanés. Si **un seul** déçoit, la valorisation se comprime brutalement. Après +300% en un an, le risque/rendement à court terme est asymétrique à la baisse.`,
  },
];

export default { ...meta, modules };
