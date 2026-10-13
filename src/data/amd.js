// ============================================================
//  DOSSIER : Advanced Micro Devices, Inc. (AMD)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  221 Bourse · Le cabinet d'analyse fondamentale — données au 13 octobre 2026
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "amd",   // identifiant d'URL : /dossier/amd
  ticker: "AMD",
  name: "Advanced Micro Devices, Inc.",
  exchange: "Nasdaq",
  sector: "Semi-conducteurs — CPU, GPU et accélérateurs IA",
  initials: "AMD",   // affiché dans la pastille (ticker complet)
  tagline: "Le challenger devenu plateforme : processeurs EPYC et Ryzen, GPU Instinct et racks Helios pour l'ère de l'IA agentique.",
  riskScore: 55,   // score du rapport de risque (0 = risque extrême, 100 = sûr)
  riskLabel: "Risque modéré",   // libellé indicatif — la couleur est toujours dérivée de riskScore
  riskReport: "amd.html",   // fichier HTML déposé dans public/rapports/
  updated: "2026-10",   // période des données
  published: "2026-10-13",   // date de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

AMD (Advanced Micro Devices) est un **concepteur de puces sans usine (fabless)** : il dessine des processeurs et des accélérateurs, en confie la fabrication à des fonderies (essentiellement **TSMC**), puis les vend aux constructeurs de serveurs et de PC, aux hyperscalers et, de plus en plus, directement aux laboratoires d'IA sous forme de **systèmes complets (racks)**.

En termes simples, AMD vend de la **puissance de calcul**. Pendant 50 ans, ce fut l'éternel numéro 2 du x86 derrière Intel. Depuis 2014 et l'arrivée de Lisa Su, l'entreprise s'est réinventée autour de trois paris : l'architecture **Zen** (CPU), la conception en **chiplets** (plusieurs petites puces assemblées dans un même boîtier, moins chères à produire) et, depuis 2023, les **accélérateurs IA Instinct** qui l'opposent frontalement à Nvidia.

**Chiffres clés** : CA 2025 record de **34,6 Md$** (+34 %), CA des 12 derniers mois **41,3 Md$**, T2 2026 à **11,5 Md$** (+50 %), dont **58 %** issus du data center. Capitalisation ~**970 Md$** (le seuil des 1 000 Md$ a été franchi en séance le 21 septembre 2026).

## Principaux produits et services

- **Data Center (58 % du CA au T2 2026)** : processeurs serveurs **EPYC** (6e génération « Venice »), GPU **Instinct** (MI355X, puis MI400 : MI455X pour l'IA frontière, MI430X pour le calcul scientifique et l'IA souveraine), racks **Helios** (72 GPU MI455X + 18 CPU Venice + réseau), cartes réseau **Pensando** (DPU, NIC IA « Vulcano »), FPGA pour data center, logiciel ouvert **ROCm**
- **Client & Gaming (33 %)** : processeurs **Ryzen** pour PC (dont Ryzen AI pour « PC IA »), cartes graphiques **Radeon**, puces **semi-custom** pour consoles (Sony PlayStation, Microsoft Xbox)
- **Embedded (8 %)** : héritage **Xilinx** — FPGA (Versal, Spartan), SoC adaptatifs, processeurs embarqués pour industrie, automobile, aéronautique-défense, télécoms, robotique (Kria)

## Clients, fournisseurs, concurrents

**Clients** : hyperscalers et clouds (**Microsoft**, **Meta**, **Oracle**, AWS, Google), laboratoires d'IA (**OpenAI**, **Anthropic**, xAI…), « néoclouds » (Vultr, Tensorwave, Cirrascale, Crusoe), IA souveraine (**HUMAIN** en Arabie saoudite), OEM serveurs (Dell, HPE, Supermicro, Lenovo), OEM PC (HP, Lenovo, Dell, Asus, Acer), consoles (Sony, Microsoft), milliers d'industriels côté Embedded.

**Fournisseurs** : **TSMC** (gravure N2/N3/N4 et packaging avancé CoWoS), mémoire HBM (**SK hynix**, **Samsung**, **Micron**), substrats et assemblage-test (ASE, Amkor, Ibiden, Unimicron), intégrateurs de racks (**Sanmina**, Wiwynn), outils de conception (Synopsys, Cadence), IP (Arteris).

**Concurrents** : **Nvidia** (GPU IA, réseau NVLink/InfiniBand, et désormais CPU Vera), **Intel** (x86 serveur et PC), **Broadcom** et **Marvell** (puces IA sur mesure — ASIC — pour Google, Meta, OpenAI), puces maison des hyperscalers (TPU Google, Trainium AWS, Maia Microsoft), processeurs **Arm** (Graviton, Axion, Cobalt, Grace), **Qualcomm** (PC Snapdragon), Altera et Lattice (FPGA).

## Modalités contractuelles et de paiement

- **Ventes de composants** (CPU, GPU) : bons de commande auprès des OEM, ODM et distributeurs, paiement à **30-60 jours** ; les distributeurs bénéficient de **protections de prix et de remises**, comptabilisées en réduction du CA
- **Accords pluriannuels à l'échelle du gigawatt** : nouveauté de 2025-2026. **OpenAI** (6 GW, octobre 2025) et **Meta** (6 GW, février 2026) se sont engagés sur plusieurs générations de GPU Instinct ; en contrepartie, AMD leur a attribué des **bons de souscription (warrants) de 160 M d'actions chacun**, qui ne s'acquièrent qu'au rythme des déploiements et du franchissement de paliers de cours de bourse. **Anthropic** (jusqu'à 2 GW de MI450, premier gigawatt au S1 2027) et **Microsoft** (Helios sur Azure) complètent ce carnet
- **Semi-custom** (consoles) : frais de développement (NRE) puis prix unitaire par puce, sur la durée du cycle de la console
- **Export** : les ventes de GPU vers la Chine sont soumises à licence américaine (MI308 bloqué en 2025, charge de 800 M$ au T2 2025)

> **À retenir** : AMD n'est plus un fournisseur de « puces moins chères ». C'est une plateforme de calcul complète (CPU + GPU + réseau + logiciel + rack) qui vend désormais de la capacité à l'échelle du gigawatt, avec une visibilité commerciale de 12 à 18 mois revendiquée par la direction.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'AMD dans la chaîne de valeur

AMD occupe le maillon le plus riche en propriété intellectuelle : la **conception**. Il ne possède aucune usine depuis la cession de ses fabs (GlobalFoundries, 2009) et a revendu en 2025 l'activité de fabrication de racks de ZT Systems à Sanmina, pour ne garder que l'ingénierie système. C'est un modèle **léger en capital** (capex ~1,7 Md$ sur 12 mois, ~4 % du CA) mais **dépendant de partenaires critiques**.

### Amont — Intrants

**Fonderie et packaging** :
- **TSMC** — fournisseur quasi unique : gravure des chiplets en N2, N3 et N4, packaging avancé **CoWoS** et SoIC (empilement 3D V-Cache). C'est le goulot d'étranglement n° 1 de l'industrie
- **Samsung Foundry** et **GlobalFoundries** — rôles secondaires (certains die d'E/S, produits matures)

**Mémoire haute bande passante (HBM)** :
- **SK hynix**, **Samsung**, **Micron** — la HBM4 représente une part majeure du coût d'un GPU MI455X (432 Go par GPU) ; l'approvisionnement est alloué des trimestres à l'avance

**Substrats, assemblage et test** : Ibiden, Unimicron (substrats ABF), ASE/SPIL, Amkor (assemblage-test)

**Logiciels et propriété intellectuelle** : Synopsys, Cadence (EDA), Arteris (interconnexion sur puce FlexGen), Microsoft (Windows), communauté open source (PyTorch, Triton, vLLM) pour ROCm

---

### AMD — Conception, intégration, logiciel

**Conception** : cœurs Zen, architecture CDNA (GPU data center) et RDNA (graphique), FPGA Versal, réseau Pensando, interconnexion Infinity Fabric et UALink.

**Intégration système** : depuis l'acquisition de **ZT Systems** (2025), AMD conçoit des racks complets (Helios) ; la fabrication est sous-traitée à **Sanmina** et **Wiwynn**, avec **Schneider Electric** pour la conception de référence (racks de 246 kW, refroidissement liquide).

**Logiciel** : ROCm (concurrent ouvert de CUDA), ROCm.ai, optimisation conjointe avec OpenAI, Meta et Anthropic.

---

### Aval — Clients finaux

**Clouds et IA** : Microsoft Azure, Meta, Oracle OCI, AWS, Google Cloud, OpenAI, Anthropic, HUMAIN, Vultr, Tensorwave, Cirrascale, Crusoe

**OEM serveurs** : Dell, HPE, Supermicro, Lenovo, Cisco, Gigabyte (Giga Computing)

**OEM PC et distribution** : HP, Lenovo, Dell, Asus, Acer, MSI ; distributeurs (Arrow, Avnet pour l'Embedded) et e-commerce pour les processeurs grand public

**Consoles** : Sony (PlayStation 5), Microsoft (Xbox Series)

**Embedded** : Siemens, Bosch, constructeurs automobiles (Subaru, Tesla pour l'info-divertissement), défense (Lockheed, Raytheon), télécoms (Ericsson, Nokia), équipementiers de mesure

---

### Schéma du parcours

| Étape | Acteurs | Ce qui s'y joue |
|---|---|---|
| 1. Intrants | TSMC, SK hynix, Samsung, Micron, Ibiden, ASE, Synopsys | Capacité de gravure N2/N3, CoWoS, HBM4 |
| 2. Conception | **AMD** (Zen, CDNA, Versal, Pensando, ROCm) | Propriété intellectuelle, feuille de route annuelle |
| 3. Intégration | Sanmina, Wiwynn, Dell, HPE, Supermicro | Racks Helios, serveurs EPYC, PC Ryzen |
| 4. Déploiement | Microsoft, Meta, Oracle, OpenAI, Anthropic, néoclouds | Data centers à l'échelle du gigawatt |
| 5. Usage final | Entreprises, développeurs, joueurs, industriels | Inférence IA, agents, cloud, PC, consoles |

**Le point de fragilité** : deux fournisseurs (TSMC pour la gravure et le packaging, trois fabricants de HBM) conditionnent la capacité d'AMD à livrer les gigawatts promis. Lisa Su a reconnu des **tensions d'approvisionnement au S1 2026** ; la montée en charge de Helios au T4 2026 dépend de leur résolution.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment

**Précision méthodologique** : AMD publie **chiffre d'affaires et résultat opérationnel** par segment, mais **ni EBITDA ni résultat net sectoriels**. Les charges non affectées (rémunération en actions, amortissement des incorporels Xilinx, coûts d'acquisition) sont regroupées dans « All other » (~1,08 Md$ de perte par trimestre). L'EBITDA n'est publié qu'au niveau du groupe (EBITDA ajusté T2 2026 : **3,32 Md$**). Depuis 2025, Client et Gaming sont regroupés en un seul segment.

### Évolution du chiffre d'affaires (Md$)

| Segment | 2023 | 2024 | 2025 | S1 2026 | T2 2026 (a/a) |
|---|---|---|---|---|---|
| Data Center | 6,5 | 12,6 | 16,6 | 12,5 | **6,72 (+107 %)** |
| Client | 4,7 | 7,1 | ~10,7 | 5,9 | 3,06 (+23 %) |
| Gaming | 6,2 | 2,6 | 3,9 | 1,5 | 0,78 (−31 %) |
| Embedded | 5,3 | 3,6 | 3,5 | 1,9 | 0,98 (+19 %) |
| **Total** | **22,7** | **25,8** | **34,6** | **21,8** | **11,54 (+50 %)** |

### Résultat opérationnel par segment — T2 2026

| Segment | Rés. opér. | Marge | T2 2025 |
|---|---|---|---|
| Data Center | **2,10 Md$** | 31 % | −0,16 Md$ (charge MI308) |
| Client & Gaming | 0,58 Md$ | 15 % | 0,77 Md$ |
| Embedded | 0,39 Md$ | 40 % | 0,28 Md$ |
| All other | −1,08 Md$ | — | −1,02 Md$ |
| **Groupe (GAAP)** | **1,99 Md$** | **17 %** | −0,13 Md$ |

---

### Dynamique de chaque segment

**Data Center — le moteur** : passé de 29 % du CA en 2023 à 58 % au T2 2026. Deux sous-moteurs : les **CPU EPYC**, avec cinq trimestres consécutifs de record et plus de 40 % de part de revenus serveur fin 2025, portés par l'IA agentique (les agents exécutent du code et orchestrent des tâches, ce qui consomme du CPU) ; et les **GPU Instinct**, dont la vraie rampe (MI450/Helios) commence au T3 2026. La direction attend une croissance serveur de **plus de 80 %** au S2 2026 et une croissance du data center IA « **bien au-delà de 100 %** » en 2027.

**Client — la surprise** : +23 % au T2 malgré un marché du PC en repli, grâce aux gains de parts face à Intel et à une hausse de prix moyen (~10 %).

**Gaming — le déclin assumé** : −31 % au T2. La 7e année du cycle des consoles fait chuter le semi-custom ; la direction a annoncé une baisse « à deux chiffres significative » sur 2026. Ce segment ne pèse plus que 7 % du CA.

**Embedded — le rebond** : +19 % après une année 2025 de déstockage (−3 %). Marge opérationnelle la plus élevée du groupe (40 %), mais croissance structurelle modeste.

---

### Répartition géographique

AMD ventile son CA selon la **localisation de facturation**, et non selon la demande finale. Les États-Unis sont le premier marché (de l'ordre de 40 %), suivis de la Chine (y compris Hong Kong, de l'ordre d'un quart) et de Taïwan, Singapour et l'Europe. Une part importante des facturations « Chine » et « Taïwan » correspond à des assembleurs (ODM) qui réexpédient vers des clients occidentaux : l'**exposition réelle à la demande chinoise est plus faible** que ne le suggèrent les chiffres bruts, mais l'exposition aux **contrôles à l'export** reste réelle (MI308 : 800 M$ de charge en 2025, ventes de 390 M$ au T4 2025 sous licence).

---

### Évolution des marges du groupe

- **Marge brute non-GAAP** : 43 % (T2 2025, plombée par la charge MI308) → **56 %** (T2 2026) ; guidance T3 : ~56 %
- **Marge opérationnelle non-GAAP** : 12 % → **27 %** ; objectif long terme > 35 %
- **Résultat net non-GAAP** : 0,78 Md$ → **2,76 Md$** (×3,5)

**Lecture** : la rentabilité d'AMD est désormais dictée par le **mix data center**. Les CPU serveurs sont plus margés que la moyenne ; les racks Helios, qui intègrent de la HBM et du réseau à faible marge, risquent de **diluer la marge brute** au démarrage, même s'ils font exploser le résultat en valeur absolue.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. Maîtrise des chiplets et du packaging — FORT
AMD a été le premier à industrialiser massivement la conception en **chiplets** (Zen 2, 2019). Découper une puce géante en petits morceaux réduit le coût, améliore les rendements et permet de mélanger les finesses de gravure. Cette avance de sept ans se retrouve dans les GPU MI400 et dans l'empilement 3D V-Cache. Nvidia et Intel ont adopté la méthode, mais AMD garde l'**expérience industrielle la plus longue**.

### 2. Le duopole x86 et l'avantage de coût total des EPYC — FORT
Le jeu d'instructions x86 n'est partagé qu'avec Intel, via des licences croisées. Sur le serveur, AMD offre depuis plusieurs générations **plus de cœurs par watt et par dollar** (TCO). Résultat : part de revenus serveur passée de quasi zéro en 2017 à **plus de 40 %** fin 2025. Toute la base logicielle d'entreprise tourne nativement sur EPYC, ce qui crée de vrais coûts de changement face à Arm.

### 3. Le portefeuille le plus complet hors Nvidia — RÉEL
CPU, GPU, DPU, NIC IA, FPGA, rack complet, logiciel : AMD est le **seul acteur, avec Nvidia, à couvrir tout le rack**. C'est ce qui lui permet de vendre des gigawatts et non plus des puces. Les ASIC de Broadcom ou Google n'offrent pas ce niveau d'intégration à des clients qui n'ont pas les moyens de concevoir leurs propres puces.

### 4. Le statut de « seconde source » contractualisée — RÉEL
Les hyperscalers et les laboratoires d'IA refusent de dépendre d'un fournisseur unique. Les accords d'OpenAI (6 GW), Meta (6 GW), Anthropic (2 GW) et Microsoft font d'AMD l'**alternative officielle** à Nvidia, avec une visibilité de 12 à 18 mois sur les plans de construction des data centers. Mais ce statut a été **acheté** : les warrants (jusqu'à 320 M d'actions) sont le prix de cette fidélité.

### 5. L'écosystème logiciel ouvert (ROCm, UALink, Ethernet) — COPIABLE
ROCm progresse vite (co-optimisé avec les grands laboratoires) et le pari de l'ouverture (UALink, Ultra Ethernet) séduit les clients qui craignent l'enfermement. Mais **CUDA reste le standard de fait** avec près de 20 ans d'avance et des millions de développeurs. Ici, AMD est en rattrapage : c'est l'avantage le plus fragile.

## Positionnement face à la concurrence

| Critère | AMD | Nvidia | Intel | Broadcom (ASIC) |
|---|---|---|---|---|
| CPU serveur | Leader en performance/TCO | Vera (Arm), entrant | Historique, en reconquête | — |
| GPU / accélérateur IA | Challenger n° 2 (~5-7 %) | Dominant (~80-90 %) | Marginal | Puces sur mesure |
| Rack complet | Helios (2026) | NVL72 (depuis 2024) | — | Non |
| Logiciel | ROCm (ouvert, en rattrapage) | CUDA (standard) | oneAPI | Propre au client |
| Marge brute | ~56 % | ~75 % | ~39 % | ~76 % |
| Image de marque | Montante, crédibilité d'exécution | Incontournable | Abîmée | Discrète, B2B |

**Valeur perçue** : AMD revendique jusqu'à **30 % de jetons d'inférence par dollar en plus** que le Rubin NVL72 de Nvidia. L'argument est le prix-performance et l'ouverture, pas la marque. Le marketing est sobre et technique ; la crédibilité vient du respect de la feuille de route annuelle.

## Pouvoir de négociation

- **Face à TSMC** : **faible**. Fournisseur quasi unique, capacité CoWoS et N2 allouée en concurrence avec Nvidia, Apple et Broadcom. AMD est un gros client mais pas le premier.
- **Face aux fabricants de HBM** : **faible à modéré**. Marché tendu, priorité historique à Nvidia.
- **Face aux hyperscalers et laboratoires d'IA** : **modéré**. Ils ont besoin d'une seconde source, mais ils ont obtenu des warrants et des prix agressifs. Ce sont eux qui fixent le tempo.
- **Face aux OEM PC et serveurs** : **modéré à élevé**. La demande pour Ryzen et EPYC donne à AMD une position de force inédite face à Intel.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Semi-conducteurs de calcul (13 octobre 2026)

| Société | Code Bloomberg | Cap. (Md$) | EV/CA | EV/EBIT | P/E TTM | P/E fwd | Rdt div. | ROE moy. 5 ans |
|---|---|---|---|---|---|---|---|---|
| **AMD** | **AMD US** | **~970** | **23,1x** | **146x** | **155x** | **55x** | **0 %** | **~5 %*** |
| Nvidia | NVDA US | ~5 470 | 18,0x | 27,6x | 29x | 19x | 0,4 % | ~75 % |
| Broadcom | AVGO US | ~1 700 | 19,6x | 40,2x | 46x | 21x | 0,7 % | ~30 % |
| Intel | INTC US | ~531 | 9,7x | 125x | n.s. | 62x | 0 % | ~0 % |
| Arm Holdings | ARM US | ~272 | 53,2x | 307x | 272x | 112x | 0 % | ~12 % |
| Qualcomm | QCOM US | ~186 | 4,4x | 18,4x | 20x | 19x | 2,1 % | ~45 % |

*Sources : données au 13 octobre 2026, derniers cours du 12 octobre (S&P Global Market Intelligence via StockAnalysis). ROE moyens sur 5 ans : ordres de grandeur calculés sur les résultats publiés (GAAP). *AMD : ~5 % sur 2022-2026, plombé par l'amortissement des incorporels Xilinx (~12 % en incluant 2021).*

---

### Lecture du tableau

**AMD — la prime de la croissance attendue**
À 55 fois les bénéfices des 12 prochains mois, AMD se paie **près de 3 fois plus cher que Nvidia** (19x), alors que Nvidia affiche une marge opérationnelle de 65 % contre 16 % (GAAP) pour AMD. Le marché paie la **dérivée** : un BPA attendu en hausse de +76 % par an sur trois ans (consensus), contre +65 % pour Nvidia. Le PEG (0,84) rend la prime moins choquante qu'elle n'en a l'air, à condition que la croissance soit livrée.

**Nvidia — le benchmark absolu**
Plus de sept fois le CA d'AMD sur 12 mois (303 Md$ contre 41 Md$), un ROIC de 92 % et une valorisation plus faible en multiple de bénéfices. C'est l'argument le plus fort contre la prime d'AMD : on paie plus cher le challenger que le leader.

**Broadcom — l'alternative silencieuse**
Les puces IA sur mesure (TPU Google, MTIA Meta, puces OpenAI) concurrencent directement les GPU Instinct sur le créneau « seconde source ». Broadcom se paie 21x les bénéfices futurs avec 49 % de marge opérationnelle.

**Intel — le concurrent en convalescence**
Valorisation tirée par l'espoir de la fonderie. Sur le CPU, Intel reste le rival direct d'EPYC et de Ryzen, mais il perd des parts depuis sept ans.

**Arm et Qualcomm — les menaces périphériques**
Arm (112x les bénéfices futurs) illustre la prime accordée aux architectures alternatives qui grignotent le x86 (Graviton, Axion, Grace/Vera). Qualcomm attaque le PC portable avec ses Snapdragon X.

---

### Ce qu'il faut retenir
AMD est **le titre le plus cher du groupe en multiple de bénéfices futurs hors Arm et Intel**, et l'un des moins rentables en ROE historique. La thèse n'est donc pas un rattrapage de valorisation : c'est un pari sur la **convergence des marges** (objectif > 35 % de marge opérationnelle) et sur la conversion du carnet de gigawatts en bénéfices.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 4 août 2026)

### Chiffre d'affaires et bénéfices face au consensus

| Indicateur | T2 2026 | Consensus | Écart | T2 2025 | Variation a/a |
|---|---|---|---|---|---|
| Chiffre d'affaires | **11,54 Md$** | ~11,28 Md$ | **+2,3 %** | 7,69 Md$ | +50 % |
| BPA non-GAAP | **1,66 $** | ~1,55-1,62 $ | **+3 à +7 %** | 0,48 $ | +246 % |
| BPA GAAP | 1,38 $ | — | — | 0,54 $ | +156 % |
| Marge brute non-GAAP | 56 % | ~55 % | +1 pt | 43 % | +13 pts |
| Marge opér. non-GAAP | 27 % | — | — | 12 % | +15 pts |
| Guidance CA T3 | **13,0 ± 0,3 Md$** | ~12,5 Md$ | **+4 %** | — | +41 % a/a |

**Verdict** : un **« beat and raise » net**, sur toutes les lignes. Pourtant, le titre a perdu **−7,0 %** le lendemain.

---

### Facteurs clés par segment

- **Data Center (+107 %, 6,72 Md$)** : cinquième record consécutif des CPU serveurs (cloud et entreprise chacun > +70 %), montée en puissance des MI355X. Marge opérationnelle du segment 31 %
- **Client (+23 %, 3,06 Md$)** : gains de parts sur Intel et hausse du prix moyen dans un marché PC en repli
- **Gaming (−31 %, 0,78 Md$)** : fin de cycle des consoles, conforme aux attentes
- **Embedded (+19 %, 0,98 Md$)** : reprise après le déstockage de 2025

**Accélération notable** : le data center a accéléré de +57 % (T1) à +107 % (T2), et la direction annonce une nouvelle accélération au S2 avec les premières livraisons Helios en fin de T3.

---

### Évolution des marges

- **Marge brute non-GAAP** : 56 % (+1 pt en séquentiel), portée par le mix CPU serveur, mieux margé que la moyenne
- **Charges d'exploitation non-GAAP** : 3,39 Md$ (+40 % a/a), en ligne avec l'effort de R&D sur l'IA
- **Marge opérationnelle non-GAAP** : 27 % (+2 pts séquentiel), encore loin de l'objectif de 35 %

---

### Perspectives

- **T3 2026** : CA de ~13,0 Md$ (+41 % a/a, +13 % séquentiel), marge brute ~56 %
- **S2 2026** : CPU serveurs > +80 % a/a, rampe Helios « substantielle » au T4
- **2027** : data center IA « bien au-delà de +100 % », CPU serveurs > +70 %
- **Changement de ton** : plus affirmé qu'en février. La direction parle de visibilité de 12 à 18 mois et assume d'être « trop prudente » sur les estimations du marché

---

### Signaux d'alerte dans le bilan

- **Créances clients** : 7,28 Md$ (+1,25 Md$ sur le seul T2), plus vite que le CA
- **Stocks** : 8,47 Md$ (+7 % en six mois), cohérent avec la préparation de la rampe Helios, mais à surveiller
- **Dettes fournisseurs** : +2,27 Md$ au T2, ce qui a **soutenu** le flux de trésorerie d'exploitation
- **Flux de trésorerie disponible** : 1,56 Md$ (14 % du CA), en **baisse** face au T1 (2,57 Md$), avec un capex triplé (808 M$)
- **Dette** : 3,2 Md$ seulement, contre 13,1 Md$ de trésorerie et placements, soit une trésorerie nette de ~9,9 Md$

---

### Réaction du marché

**−7,0 % le 5 août** (de 518,6 $ à 482,1 $), après +7 % la veille. Trois explications : un titre déjà en hausse de ~140 % sur l'année, des attentes officieuses (« whisper ») proches de 14 Md$ pour le T3, et une **marge brute guidée stable à 56 %**, qui rappelle que Helios diluera la marge. C'est un schéma récurrent : le titre a reculé après la plupart de ses publications depuis 2024, à l'exception notable du T1 2026 (+18,6 %).

**Ce que cela indique** : la croissance était entièrement intégrée dans le cours. Le titre a toutefois regagné ~25 % depuis, jusqu'à franchir 1 000 Md$ de capitalisation le 21 septembre : le marché achète la rampe 2027 plus que les trimestres individuels.

**Élément inhabituel** : le BPA GAAP du T2 inclut **483 M$ de plus-values sur investissements** (hors exploitation), qui gonflent le résultat publié.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences — priorités du management

### Évolution du ton (2025-2026)

**T2 2025 (août 2025) — Défensif** : l'interdiction d'exporter le MI308 vers la Chine coûte 800 M$. Le discours porte sur la résilience et le lancement du MI350.

**T3 2025 et journée investisseurs (novembre 2025) — Conquérant** : l'accord OpenAI (6 GW) change la dimension du dossier. Objectifs à 3-5 ans : **croissance du CA > 35 %/an, marge opérationnelle > 35 %, BPA > 20 $**, data center > +60 %/an, data center IA > +80 %/an, marché adressable de plus de 1 000 Md$ en 2030.

**T4 2025 (février 2026) — Prudent** : trimestre record, mais guidance T1 jugée timide (9,8 Md$) et poids des ventes MI308 en Chine (390 M$). Le marché sanctionne (−17 %). Le management insiste sur une année 2026 « à deux temps », avec une seconde moitié beaucoup plus forte.

**T1 2026 (mai 2026) — Offensif** : nouveau récit du **CPU dans l'IA agentique**. Le marché des CPU serveurs est réévalué à plus de 120 Md$ en 2030 (> +35 %/an). Le titre bondit de +18,6 %.

**Advancing AI (juin 2026)** : lancement de Helios, du MI400 et de Venice ; partenariat Anthropic (2 GW) ; marché des CPU serveurs porté à plus de 200 Md$ en 2030.

**T2 2026 (août 2026) — Confiant, presque impatient** : Lisa Su juge trop basses les estimations du marché pour 2027 (data center IA « bien au-delà de 100 % »). Jean Hu évoque en septembre un marché adressable de **2 000 à 3 000 Md$ en 2030**.

---

### Priorités répétées du management

**1. Exécuter la rampe Helios / MI450** — Sujet n° 1 depuis un an. Production lancée, premières livraisons fin T3, rampe forte au T4 et en 2027. OpenAI met ses premiers racks en service au T4, Meta les valide.

**2. Le CPU comme bénéficiaire caché de l'IA** — Thème montant depuis mai 2026. Les agents consomment du CPU ; le ratio CPU/GPU pourrait passer d'un CPU pour quatre GPU à plus d'un pour un, voire deux pour un dans certaines configurations.

**3. L'approvisionnement** — Reconnaissance de tensions au S1 2026 (TSMC, HBM), compensées par de meilleures prévisions et de nouvelles capacités.

**4. L'ouverture comme arme commerciale** — ROCm, UALink, Ethernet : le message « pas d'enfermement propriétaire » est martelé face à Nvidia.

**5. La marge** — Discours plus défensif : les CPU serveurs soutiennent la marge, mais la direction évite de s'engager sur l'effet des racks Helios.

---

### Analyse du sentiment

| Période | Ton | Signal clé | Réaction du titre |
|---|---|---|---|
| Août 2025 | Défensif | Charge MI308 | −6 à −8 % |
| Nov. 2025 | Très confiant | Objectifs 3-5 ans | Hausse |
| Fév. 2026 | Prudent | Guidance T1 | −17 % |
| Mai 2026 | Offensif | Récit CPU agentique | +18,6 % |
| Août 2026 | Confiant | IA 2027 > +100 % | −7 % |

- **Trajectoire** : un sentiment qui monte nettement depuis un an, avec un vocabulaire de plus en plus quantifié (gigawatts, visibilité, TAM).
- **Point d'attention** : l'escalade des tailles de marché (1 000 Md$, puis 2 000-3 000 Md$) relève en partie du **discours promotionnel**. Elle n'est pas un engagement de résultat.
- **Cohérence** : la feuille de route produit annoncée est tenue depuis 2017. C'est l'atout de crédibilité principal de cette équipe.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Lisa Su — Présidente du conseil et directrice générale

**Bilan** : l'un des redressements les plus spectaculaires de l'histoire des semi-conducteurs.
- Arrivée en 2012, directrice générale depuis **octobre 2014** : AMD valait alors ~2,5 Md$, l'action ~3 $, et l'entreprise était au bord de la faillite
- CA multiplié par **6** (5,5 Md$ en 2014, 34,6 Md$ en 2025), capitalisation passée à ~970 Md$
- Paris gagnés : architecture **Zen** (2017), passage total à **TSMC**, conception en **chiplets**, rachat de **Xilinx**, conquête du serveur (de ~0 à plus de 40 % de part de revenus)
- Carrière antérieure : Texas Instruments, IBM (vice-présidente R&D semi-conducteurs), Freescale. Docteure en génie électrique du MIT

**Ancienneté et participation** : 12 ans à la tête du groupe, présidente du conseil depuis 2022. Détient plusieurs millions d'actions (environ 3,4 M en direct plus des trusts), soit **plus de 2 Md$** au cours actuel. Elle a vendu 125 000 titres en juin 2026 (~57,6 M$), dans le cadre de cessions programmées. Rémunération 2025 de l'ordre de **55 M$** selon le proxy 2026 (contre ~31 M$ en 2024), majoritairement en actions de performance conditionnées au rendement relatif du titre et à la croissance du BPA.

### L'équipe dirigeante

- **Jean Hu** — directrice financière depuis 2022 (ex-Marvell, Qlogic). Discipline financière, communication sobre
- **Forrest Norrod** — data center depuis 2014 (ex-Dell). Architecte de la percée EPYC
- **Mark Papermaster** — directeur technique depuis 2011 (ex-Apple, IBM). Père de la feuille de route Zen
- **Vamsi Boppana** — IA (ex-Xilinx). **Jack Huynh** — informatique et graphique

**Une équipe remarquablement stable** : le noyau dur est en place depuis dix ans. C'est un actif rare dans un secteur où les feuilles de route s'étalent sur cinq ans.

---

### Allocation du capital

| Opération | Montant | Lecture |
|---|---|---|
| Xilinx (2022) | ~49 Md$ en actions | Diversification réussie (Embedded à 40 % de marge), mais 41 Md$ d'incorporels au bilan |
| Pensando (2022) | 1,9 Md$ | Brique réseau devenue clé dans Helios |
| Silo AI, Nod.ai, Brium, MEXT… | < 1 Md$ | Renforcement logiciel IA ciblé |
| ZT Systems (2025) | ~4,9 Md$ | Ingénierie de racks ; fabrication revendue à Sanmina (~3 Md$) |
| Rachats d'actions | 0,9 Md$ (2024), 1,2 Md$ (S1 2025), 0,2 Md$ (S1 2026) | Compensent à peine la dilution |
| Warrants OpenAI et Meta | Jusqu'à 320 M d'actions | Parts de capital échangées contre des volumes |

**ROE / ROIC sous sa direction** : excellent avant Xilinx (ROE ~47 % en 2021), puis écrasé par l'amortissement de la fusion (2 à 3 % en 2022-2024), et en remontée (ROIC 9,8 % sur 12 mois). La création de valeur de Xilinx reste **à démontrer en GAAP** : le rachat a été payé en actions surévaluées de 2020-2021, ce qui en a limité le coût réel.

---

### Signaux d'alerte

- **Parties liées** : aucune transaction significative identifiée. Les warrants donnent toutefois à deux clients majeurs un intérêt actionnarial potentiel
- **Rémunération** : en forte hausse, mais encore inférieure à celle du dirigeant de Nvidia ; vote consultatif autour de 80 % en 2024
- **Dilution** : 65 M d'actions supplémentaires autorisées pour le plan d'actions en 2026 ; nombre d'actions en hausse de +1,1 % sur un an malgré les rachats
- **Comportement promotionnel** : modéré mais croissant (escalade des marchés adressables)
- **Stratégie** : aucun revirement depuis dix ans. Cohérence exemplaire

### Fondatrice ou gestionnaire ?

Lisa Su est une **gestionnaire professionnelle à l'esprit de fondatrice** : ingénieure, elle a refondé l'entreprise et porte personnellement chaque pari technologique. À ce stade (passage du composant à la plateforme), c'est un atout majeur, mais aussi un **risque de personne clé** : aucune succession n'est publiquement préparée.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Les facteurs qui ont fait bouger le titre (oct. 2021 - oct. 2026)

Le titre est **très volatil** (bêta ~2,45) : sur cinq ans, il est passé de ~120 $ (octobre 2021) à un creux de ~55 $ (fin 2022), puis à un record intraday de **658,5 $** (6 octobre 2026). Depuis le 1er janvier 2026 : **+176 %**.

### Hausses significatives (> +5 %)

**Novembre 2021 — Meta adopte EPYC** (+10 % en séance) : première grande victoire serveur auprès d'un hyperscaler.

**Décembre 2023 — Lancement du MI300X** (~+10 % le lendemain) : AMD devient crédible dans les GPU IA et relève sa prévision de marché.

**6 octobre 2025 — Accord OpenAI** (**+24 %** à la clôture, jusqu'à +38 % en séance) : 6 GW de GPU et un warrant de 160 M d'actions. La plus forte hausse en une séance depuis 2016.

**Novembre 2025 — Journée investisseurs** : objectifs de BPA > 20 $ et de croissance > 35 %/an.

**Avril 2026 — Le grand basculement** (+74 % sur le mois) : la thèse « CPU de l'IA agentique » s'impose, appuyée par des relèvements d'analystes.

**6 mai 2026 — Résultats du T1** (**+18,6 %**) : BPA de 1,37 $ contre 1,29 $ attendu, marché des CPU serveurs réévalué.

**Juin 2026 — Advancing AI** : lancement de Helios, accord Anthropic ; record de clôture à 580,9 $ (+7,7 % en une séance).

**Septembre 2026 — Le cap des 1 000 Md$** : +5,9 % (8 sept.), +6,4 % (17 sept.), **+10 %** (21 sept.), soit une série de cinq séances à +25 %.

---

### Baisses significatives (> −5 %)

**Octobre 2022 — Avertissement sur le PC** (−14 %) : effondrement de la demande post-COVID, prémices d'une baisse de 65 % depuis le sommet.

**Octobre 2024 — Résultats du T3** (−10 %) : guidance data center jugée décevante.

**Avril 2025 — Interdiction du MI308 en Chine** (~−7 %) : premier choc des contrôles à l'export ; creux sous 80 $.

**Août 2025 — Résultats du T2** (−6 à −8 %) : charge de 800 M$.

**4 février 2026 — Résultats du T4** (**−17 %**) : guidance T1 jugée insuffisante et dépendance aux ventes chinoises. Plus forte baisse sur une séance depuis des années.

**Juin-juillet 2026 — Vague de prises de bénéfices sur les semi-conducteurs** (−6 % en préouverture le 23 juin ; repli fin juillet) : doutes sur la surcapacité de calcul de certains hyperscalers.

**5 août 2026 — Résultats du T2** (**−7,0 %**) : « beat and raise » vendu sur la nouvelle.

---

### Facteurs structurels

- **Le schéma « bat et baisse »** : la plupart des publications depuis 2024 ont été suivies d'un repli (seule exception marquante : mai 2026). Les attentes officieuses dépassent régulièrement le consensus
- **Corrélation au cycle d'investissement IA** : chaque doute sur les capex des hyperscalers frappe AMD plus fort que Nvidia (bêta supérieur)
- **Le levier des annonces de partenariats** : OpenAI, Meta, Anthropic, Microsoft ont produit les plus fortes hausses, avant tout résultat financier
- **Le risque réglementaire** : contrôles à l'export (Chine) et droits de douane
- **Les options** : le marché anticipe un mouvement de ±10,8 % autour des résultats du 3 novembre 2026`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA non-GAAP 2026-2028

**Pourquoi le non-GAAP** : AMD est suivi par le marché et guide en non-GAAP (hors amortissement des incorporels Xilinx, ~2,2 Md$/an, et rémunération en actions, ~2 Md$/an). L'écart avec le BPA GAAP est significatif (1,66 $ contre 1,38 $ au T2 2026).

### Hypothèses de modélisation

**Croissance du secteur** :
- Marché des accélérateurs IA en croissance de 40 à 60 %/an jusqu'en 2028, porté par l'inférence et les agents
- Marché des CPU serveurs > +35 %/an (prévision de la direction)
- PC et consoles : stables à légèrement négatifs

**Gains de parts de marché** :
- GPU IA : de ~5-7 % aujourd'hui à ~10-12 % en 2028 (scénario central), grâce aux 14+ GW contractés
- CPU serveurs : poursuite de la progression au-delà de 40 % de part de revenus
- PC : stabilité autour de 25-30 % des unités

**Prix** : hausse du prix moyen par la montée en gamme (racks complets, Venice) ; pression concurrentielle sur les GPU (AMD vend sur le rapport jetons/dollar)

**Pressions sur les coûts** : HBM4 et packaging en tension, racks Helios moins margés, R&D en hausse de +30-40 %/an

**Levier opérationnel** : marge opérationnelle non-GAAP de 27 % (T2 2026) vers ~31 % (2027) et ~34 % (2028)

**Coûts de financement** : négligeables (trésorerie nette ~9,9 Md$) ; produits financiers légèrement positifs

**Dilution** : rémunération en actions (~1 %/an) et **warrants OpenAI/Meta** (jusqu'à 320 M d'actions, soit ~20 % du capital, acquis par tranches selon les gigawatts déployés et des paliers de cours). Hypothèse : +5 à +8 % d'actions en circulation d'ici 2028. Taux d'impôt non-GAAP : 13 %

---

### Estimations

| Exercice | CA (Md$) | Marge op. non-GAAP | Actions dil. (Md) | BPA non-GAAP | Croissance | P/E à 594 $ |
|---|---|---|---|---|---|---|
| 2024 (réalisé) | 25,8 | 24 % | 1,63 | **3,31 $** | — | — |
| 2025 (réalisé) | 34,6 | 22 % | 1,64 | **4,17 $** | +26 % | — |
| **2026E** | **~50** | **~27 %** | **1,67** | **6,85-7,35 $** (centre 7,05 $) | **+69 %** | **~84x** |
| **2027E** | **~71** | **~31 %** | **1,71** | **10,50-12,50 $** (centre 11,40 $) | **+62 %** | **~52x** |
| **2028E** | **~90** | **~34 %** | **1,76** | **13,80-17,00 $** (centre 15,40 $) | **+35 %** | **~39x** |

*2026E : 3,03 $ réalisés au S1 + T3E ~1,80 $ (guidance 13 Md$) + T4E ~2,20 $ (rampe Helios). Pour comparaison, le consensus anticipe ~11 $ en 2027.*

---

### Sensibilité (BPA 2028)

- **Scénario haussier** — CA ~105 Md$, marge 36 %, part GPU IA > 12 % : BPA ~**18,50 $**, P/E 2028 ~32x. L'objectif de la direction (> 20 $) serait atteint dès 2029
- **Scénario central** — BPA ~**15,40 $**, P/E 2028 ~39x : valorisation exigeante mais cohérente avec une croissance de +30 %/an au-delà
- **Scénario baissier** — rampe Helios retardée, ralentissement des capex IA, marge 29 %, CA ~70 Md$ : BPA ~**10,50 $**, P/E 2028 ~56x, sans marge de sécurité

**Conclusion** : à 594 $, le cours intègre déjà la quasi-totalité du scénario central à horizon 2028. Les deux juges de paix sont la **marge brute pendant la rampe Helios** (tenir ~55-56 %) et le **rythme d'acquisition des warrants**, qui peut amputer le BPA de 5 à 10 % si toutes les tranches se déclenchent.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Leviers de croissance structurels

**1. Le seul fournisseur de plateforme complète hors Nvidia** : CPU, GPU, réseau, rack et logiciel. Les accords OpenAI (6 GW), Meta (6 GW), Anthropic (2 GW) et Microsoft représentent **plus de 14 GW contractés**, soit des dizaines de milliards de dollars de CA par an à partir de 2027. Chaque gigawatt représente, selon les estimations de marché, plus de 10 Md$ de CA.

**2. L'IA agentique fait renaître le CPU** : c'est la surprise que le marché sous-estimait encore début 2026. Un agent exécute du code, appelle des outils, manipule des données : autant de travail CPU. Si le ratio CPU/GPU passe de 1 pour 4 à 1 pour 1, le marché des CPU serveurs peut dépasser 200 Md$ en 2030. AMD y est le leader en performance.

**3. Le levier opérationnel** : le CA a progressé de +50 % au T2 pour des charges en hausse de +40 %. Avec un objectif de marge opérationnelle > 35 %, le BPA peut croître nettement plus vite que le CA.

**4. Des surprises de bénéfices possibles** : la direction juge le consensus 2027 trop bas ; la HBM et l'approvisionnement se détendent ; Helios revendique +30 % de jetons par dollar face au Rubin NVL72.

**5. Un bilan de forteresse** : trésorerie nette de ~9,9 Md$, FCF de 8,4 Md$ sur 12 mois, dette insignifiante. AMD peut financer sa R&D et ses rachats sans contrainte.

**6. Une équipe qui livre** : dix ans de feuille de route respectée, une crédibilité devenue un actif commercial auprès des hyperscalers.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques susceptibles d'endommager durablement l'activité

**1. Nvidia contre-attaque sur le prix et le CPU** : avec 75 % de marge brute, Nvidia peut baisser ses prix sur Blackwell et Rubin pour assécher le rôle de « seconde source ». Son CPU Vera vise aussi le cœur du marché EPYC. AMD se battrait alors sur deux fronts contre un rival trente fois plus rentable en résultat net.

**2. Les ASIC sur mesure captent la seconde source** : Google (TPU), Amazon (Trainium), Meta (MTIA) et OpenAI (puces Broadcom) développent leurs propres accélérateurs. Si les hyperscalers internalisent, le marché adressable des GPU marchands se réduit au moment même où AMD y entre en force.

**3. Le cycle des capex IA se retourne** : les engagements en gigawatts sont des **plafonds** (« jusqu'à »), pas des commandes fermes. Une pause de financement chez OpenAI ou un néocloud décalerait des milliards de CA.

### Compression des marges et attentes
Les racks Helios intègrent de la HBM, de la mémoire et du réseau à faible marge : la marge brute pourrait reculer vers 50-52 % pendant la rampe. Les warrants, comptabilisés en réduction du CA, pèsent aussi sur la marge.

### Analyse pré-mortem
*Nous sommes en octobre 2028, AMD cote 300 $. Que s'est-il passé ?* La rampe Helios a pris six mois de retard (CoWoS, HBM4, refroidissement liquide). OpenAI a réduit son engagement faute de financement. Nvidia a baissé ses prix de 20 %. La marge brute est retombée à 51 %, le BPA 2028 plafonne à 10 $ et le multiple se comprime de 55x à 30x. Toutes les briques de ce scénario existent déjà en germe.

### Les multiples sont-ils trop élevés ?
**Oui, à court terme.** 155x les bénéfices publiés, 102x les bénéfices non-GAAP des 12 derniers mois, 55x les bénéfices futurs : c'est près de trois fois Nvidia. Le cours ne se justifie qu'à l'horizon 2028 (39x notre BPA central), en supposant une exécution sans faute. Le PEG de 0,84 reste en revanche raisonnable si la croissance est livrée.

---

## 🎯 Le point de vue à contre-courant

**Ce que le marché refuse de voir** : tout le monde regarde la bataille des GPU contre Nvidia. Or **la vraie rente d'AMD pourrait être le CPU**. Si l'IA agentique transforme le CPU serveur en goulot d'étranglement, AMD détient la meilleure position du marché, sans Nvidia en face (Vera n'en est qu'au début). Paradoxalement, le scénario où AMD réussit modestement sur les GPU mais domine le CPU agentique pourrait être plus rentable que celui où il gagne la guerre des prix sur les GPU. Le revers : le marché paie déjà les deux paris en même temps.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — signaux d'alerte comptables

### Comptabilisation des produits — RISQUE MODÉRÉ À ÉLEVÉ

**Les warrants clients** : les bons de souscription accordés à OpenAI et Meta (jusqu'à 160 M d'actions chacun, prix d'exercice symbolique) constituent une contrepartie versée au client. En principe, leur juste valeur vient **en déduction du chiffre d'affaires** à mesure que les tranches deviennent probables. Leur montant potentiel (320 M d'actions à ~594 $, soit plus de 190 Md$ en valeur faciale) est sans précédent.

**À surveiller** : le rythme de reconnaissance de cette contrepartie dans les 10-Q, et l'écart entre « prix catalogue » et prix effectif des GPU vendus à ces clients.

**Les racks Helios** : la vente de systèmes complets pose la question **agent ou principal** pour les composants tiers (HBM, réseau, châssis via Sanmina et Wiwynn). Comptabiliser en brut gonfle le CA et dilue la marge ; en net, l'inverse.

**Protections de prix et remises distributeurs** : réduites du CA sur estimation, sensibles en cas de retournement du marché PC.

### Information sectorielle — RISQUE MODÉRÉ
- La ligne « All other » absorbe ~1,08 Md$ par trimestre (rémunération en actions, amortissements, acquisitions), ce qui **embellit les marges des segments** (data center à 31 %)
- AMD ne publie plus séparément le CA des GPU Instinct : le data center mélange CPU et GPU, ce qui empêche de mesurer la vraie part de marché IA
- Client et Gaming ont été fusionnés en 2025, ce qui masque partiellement le déclin du gaming

### Contrats de location et engagements — RISQUE MODÉRÉ
- Dettes locatives à long terme passées de 625 M$ à **1 050 M$** en six mois (+68 %)
- **Obligations d'achat** auprès de TSMC et des fabricants de HBM : engagements fermes de plusieurs milliards, nécessaires à la rampe, mais qui deviendraient un risque de dépréciation de stocks en cas de baisse de la demande (précédent : charge de 800 M$ sur le MI308 en 2025, puis reprise partielle de 360 M$ au T4 2025)

### Parties liées — RISQUE FAIBLE
Aucune transaction significative avec des dirigeants. **Nuance** : les warrants transforment deux clients majeurs en actionnaires potentiels de premier rang, ce qui peut créer des conflits d'intérêts commerciaux (conditions, priorités d'allocation).

### Engagements conditionnels — RISQUE MODÉRÉ
Litiges de brevets courants dans le secteur ; provision de 17 M$ constituée au T2 2026. Exposition réglementaire aux contrôles à l'export et aux droits de douane.

### Rémunération en actions — RISQUE MODÉRÉ
- ~503 M$ par trimestre, soit ~2 Md$/an (~4-5 % du CA), **exclus du BPA non-GAAP**
- Nombre d'actions en hausse de +1,1 % sur un an malgré les rachats
- 65 M d'actions supplémentaires autorisées pour le plan d'intéressement (AG 2026)

### Goodwill et incorporels — RISQUE MODÉRÉ
- **Goodwill de 25,5 Md$ + incorporels de 15,6 Md$ = 41,1 Md$**, soit **61 % des capitaux propres**, essentiellement hérités de Xilinx
- Amortissement de ~2,2 Md$/an exclu du non-GAAP : il explique l'essentiel de l'écart entre P/E GAAP (155x) et P/E non-GAAP (~102x)
- Risque de dépréciation limité tant que l'Embedded dégage 40 % de marge

### Flux de trésorerie contre résultat — RISQUE MODÉRÉ
- FCF du T2 : 1,56 Md$ pour 2,76 Md$ de résultat net non-GAAP, soit une **conversion de 56 %**
- Le flux d'exploitation a été soutenu par +2,27 Md$ de dettes fournisseurs, alors que créances (+1,25 Md$) et stocks (+0,42 Md$) absorbaient du cash
- Le résultat net GAAP du T2 inclut **483 M$ de plus-values sur participations** (hors exploitation)
- Capex triplé (808 M$ au T2) : bascule vers un modèle plus capitalistique avec les racks

---

### Verdict global
**Risque comptable : MODÉRÉ.** Pas de fraude ni de pratique agressive identifiée, un bilan sans dette et un audit de premier rang. Mais trois zones méritent un suivi trimestriel : **le traitement des warrants clients**, **la conversion du résultat en cash pendant la rampe Helios** et **l'écart GAAP / non-GAAP** (amortissement Xilinx et rémunération en actions, ~4,2 Md$/an à eux deux).`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Lisa Su (classées par importance)

### Exécution et avantage concurrentiel

**1.** Les accords OpenAI et Meta portent sur « jusqu'à » 6 GW chacun. **Quelle part de ces 12 GW est aujourd'hui couverte par des commandes fermes et non annulables**, et quel calendrier de reconnaissance du CA retenez-vous pour 2027 ?

**2.** Quelle **marge brute** anticipez-vous sur un rack Helios complet face à un GPU vendu seul, et à partir de quel trimestre la rampe cessera-t-elle de diluer la marge du groupe ?

**3.** Nvidia peut baisser ses prix de 20 % sans menacer sa rentabilité. **Quel est votre plan si la guerre des prix démarre en 2027**, et quel est le plancher de marge que vous accepteriez pour défendre vos parts ?

**4.** Les hyperscalers développent leurs propres ASIC. **Combien de vos clients GPU actuels ont aussi un programme de puce interne**, et quel scénario retenez-vous pour la part des GPU marchands en 2030 ?

**5.** Votre thèse du CPU agentique repose sur un ratio CPU/GPU qui monterait au-delà de 1 pour 1. **Quelles données de déploiement réelles** (pas des projections) appuient ce scénario aujourd'hui ?

### Allocation du capital

**6.** Les warrants peuvent représenter jusqu'à 320 M d'actions, soit ~20 % du capital. **Quelle dilution totale anticipez-vous d'ici 2028**, et envisagez-vous des rachats pour la compenser ?

**7.** Le ROIC GAAP n'est que de ~10 %, en dessous du coût du capital. **À quelle échéance prévoyez-vous un ROIC durablement supérieur à 20 %**, et comment jugez-vous a posteriori le rachat de Xilinx ?

**8.** Après ZT Systems, **envisagez-vous d'autres acquisitions d'envergure** (réseau, photonique, mémoire) ou privilégiez-vous la croissance organique ?

### Risques

**9.** TSMC et trois fabricants de HBM conditionnent vos livraisons. **Quelle capacité CoWoS et HBM4 avez-vous sécurisée pour 2027**, et à quelles conditions (prépaiements, engagements fermes) ?

**10.** Vos engagements d'achat ont fortement progressé. **Quelle part deviendrait un risque de dépréciation** si un grand client décalait son déploiement de six mois ?

**11.** Comment le **traitement comptable des warrants** affectera-t-il le CA et la marge publiés au fil des tranches, et pourquoi ne pas le présenter séparément ?

**12.** Quelle est votre exposition résiduelle à la **Chine et aux contrôles à l'export**, et quelle part de la croissance 2027 en dépend ?

### Vision long terme

**13.** Vous évoquez un marché adressable de 2 000 à 3 000 Md$ en 2030, contre 1 000 Md$ il y a un an. **Qu'est-ce qui a changé dans vos hypothèses**, et quelle part de marché visez-vous ?

**14.** ROCm progresse, mais CUDA reste le standard. **Quel indicateur mesurable** (développeurs actifs, modèles optimisés au lancement) prouve que l'écart logiciel se referme ?

### Gouvernance

**15.** Vous êtes à la tête d'AMD depuis 12 ans et cumulez présidence et direction générale. **Comment le conseil prépare-t-il votre succession**, et quel est le risque que vous sous-estimez le plus aujourd'hui ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — démontage de l'argumentaire haussier

### 1. Ce qui peut compromettre le modèle structurellement

AMD n'a **pas de pouvoir de fixation des prix** sur le GPU : il gagne parce qu'il est moins cher par jeton. C'est la position la plus inconfortable du marché, coincée entre un leader à 75 % de marge brute (Nvidia) et des clients qui conçoivent leurs propres puces. Si le GPU devient une commodité, AMD perd ; si le GPU reste premium, Nvidia garde la rente. Le gagnant structurel de la « seconde source » pourrait être Broadcom, pas AMD.

### 2. Une concentration des revenus inédite

Le scénario 2027 repose sur **une poignée de clients** : OpenAI, Meta, Microsoft, Oracle, Anthropic. Ces engagements sont exprimés en « jusqu'à X GW », pas en commandes fermes. OpenAI dépend de levées de fonds successives pour financer des centaines de milliards d'engagements de calcul. **Qu'un seul de ces clients ralentisse, et la courbe de 2027 se décale d'un an.** Pendant ce temps, le gaming s'effondre (−31 %) et le PC reste cyclique.

### 3. Un avantage concurrentiel plus fragile qu'il n'y paraît

- **Le moat CPU** : Nvidia lance Vera, les hyperscalers généralisent les CPU Arm maison (Graviton, Axion, Cobalt). Le x86 est un duopole dans un marché qui rétrécit relativement
- **Le moat logiciel** : ROCm reste en rattrapage. Les laboratoires d'IA peuvent optimiser pour AMD parce qu'ils ont des milliers d'ingénieurs ; l'entreprise moyenne, non
- **Le moat contractuel** : il a été **acheté avec des warrants**. Un fossé qu'on paie en actions n'est pas un fossé, c'est une remise

### 4. Le concurrent le plus dangereux que les optimistes sous-estiment

**Broadcom**, pas Nvidia. Ses ASIC pour Google, Meta et OpenAI s'adressent exactement aux clients qui forment le carnet d'AMD, avec 76 % de marge brute et un modèle de coconception qui crée un verrouillage plus fort que ROCm. Chaque gigawatt d'ASIC Broadcom chez OpenAI est un gigawatt qui ne sera pas en MI450.

### 5. Les pires décisions d'allocation du capital

- **Xilinx (~49 Md$)** : 41 Md$ d'incorporels pour un segment Embedded de 3,5 Md$ de CA en 2025, en baisse de 3 %. Le ROE est passé de ~47 % à ~2 %
- **Les warrants** : jusqu'à 20 % du capital cédés à deux clients, une forme de rabais massif qui ne passe pas par le compte de résultat de manière lisible
- **Les rachats** : 0,2 Md$ au S1 2026 pour ~2 Md$ de rémunération en actions par an. Les actionnaires sont dilués en continu

### 6. Comptabilité et incitations
Pas de fraude, mais **un écart GAAP / non-GAAP de ~4,2 Md$ par an** (amortissements et rémunération en actions) et un BPA GAAP du T2 dopé par 483 M$ de plus-values financières. Les actions de performance des dirigeants sont indexées sur le BPA **non-GAAP** et le rendement boursier relatif, pas sur le ROIC.

### 7. Les hypothèses que le cours actuel exige
Pour justifier ~594 $ (~970 Md$), il faut **simultanément** : une rampe Helios sans retard, 10-12 % de part du marché des GPU IA en 2028, une marge opérationnelle de 34-35 %, un marché des capex IA qui continue de croître de 40 % par an et une dilution des warrants contenue. Cinq conditions, toutes nécessaires.

### 8. Si la croissance déçoit de 20 à 30 %
Avec un BPA 2028 de 11 à 12 $ au lieu de 15,40 $, et un multiple ramené à 30x (celui d'un semi-conducteur de croissance mature), le titre vaudrait **330 à 370 $, soit −37 à −44 %**. Dans un marché qui comprime aussi les multiples du secteur, la baisse pourrait dépasser −50 %, comme en 2022 (−65 %).

### 9. Le scénario unique qui ferait le plus de dégâts
**Une pause du financement de l'IA frontière** : si les laboratoires d'IA ne parviennent plus à lever les capitaux nécessaires à leurs engagements de calcul, les gigawatts « jusqu'à » deviennent des gigawatts « peut-être ». AMD, dernier entré, serait le premier décalé : Nvidia garderait la priorité, les ASIC resteraient protégés par leur coconception. **Plausibilité** : 20 à 30 % sur trois ans. Le scénario n'est pas central, mais l'asymétrie est forte à ce niveau de valorisation.

### Conclusion short
AMD est probablement la meilleure histoire d'exécution du secteur depuis dix ans. **Mais le titre ne se paie plus sur ce qu'AMD a accompli, il se paie sur ce que ses clients promettent.** À 55x les bénéfices futurs, l'entreprise doit tout réussir ; l'action, elle, n'a plus droit à l'erreur.`,
  },
];

export default { ...meta, modules };
