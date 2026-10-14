// ============================================================
//  DOSSIER : ASML Holding N.V. (ASML)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "asml",                     // identifiant d'URL : /dossier/asml
  ticker: "ASML",
  name: "ASML Holding N.V.",
  exchange: "Euronext Amsterdam / Nasdaq",
  sector: "Équipements de lithographie pour semi-conducteurs",
  initials: "ASML",                 // affiché dans la pastille
  tagline: "Monopole mondial de la lithographie EUV : la machine sans laquelle aucune puce d'IA de pointe ne peut être gravée.",
  riskScore: 67,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "asml.html",
  updated: "2026-10",               // période des données
  published: "2026-10-15",          // date exacte de publication
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

ASML est le **fournisseur quasi unique des machines de lithographie** qui « impriment » les motifs des circuits sur les plaquettes de silicium. Fondée en 1984 (coentreprise Philips / ASM International) et basée à Veldhoven aux Pays-Bas, l'entreprise emploie ~45 500 personnes et a réalisé **32,7 Md€ de chiffre d'affaires en 2025** pour **9,6 Md€ de bénéfice net**. En 2026, la direction vise **44 à 45 Md€** de ventes (+36 %).

Le principe est simple à énoncer, extraordinairement difficile à reproduire : plus la lumière utilisée est courte, plus les transistors gravés peuvent être petits. ASML est **la seule entreprise au monde** à maîtriser la lithographie **EUV** (ultraviolet extrême, longueur d'onde de 13,5 nm), indispensable à toutes les puces avancées : GPU pour l'IA, processeurs de smartphones, mémoire DRAM et HBM de dernière génération.

Le modèle repose sur **deux moteurs complémentaires** :
- **Vente de systèmes (~72 % du CA 2026E)** : machines vendues à l'unité, de ~70 M€ (DUV immersion) à ~200 M€ (EUV « Low-NA ») et ~350-400 M€ (EUV « High-NA »)
- **Installed Base Management (~28 %)** : maintenance, pièces détachées, mises à niveau de productivité et logiciels sur un parc de plusieurs milliers de machines installées. Revenus récurrents et très margés, en hausse d'~50 % en 2026

## Principaux produits et services

- **EUV Low-NA (NXE:3800E, puis NXE:3800F en 2027)** : le cheval de bataille de la logique avancée et de la DRAM, ~220 à 260 plaquettes/heure. Environ **65 systèmes EUV** livrés en 2026 (+50 %)
- **EUV High-NA (EXE:5000 / EXE:5200)** : la génération suivante (ouverture numérique de 0,55), pour les nœuds de 2 nm et en dessous. En production de volume chez Intel (18A), adoption prévue vers 2028 chez Samsung et vers 2030 chez TSMC
- **DUV (ArF immersion, ArF sec, KrF, i-line)** : machines « classiques » qui restent majoritaires en nombre d'unités, notamment pour les couches les moins critiques et pour la Chine
- **Métrologie et inspection** (YieldStar, HMI e-beam) et **logiciels de lithographie computationnelle** (Brion)

## Clients, fournisseurs, concurrents

**Clients** : un club très fermé de fabricants de puces. **TSMC**, **Samsung**, **SK Hynix**, **Intel** et **Micron** pour l'EUV ; **SMIC**, **Hua Hong** et **CXMT** en Chine pour le DUV ; Rapidus au Japon. Au T3 2026, les ventes de systèmes se répartissaient entre Taïwan (32 %), la Corée du Sud (31 %), la Chine (23 %) et les États-Unis (13 %), et entre logique (54 %) et mémoire (46 %).

**Fournisseurs** : ASML est avant tout un **intégrateur**. Plus de 5 000 fournisseurs, dont des partenaires critiques et souvent exclusifs : **Carl Zeiss SMT** pour les optiques (ASML en détient 24,9 %), **Trumpf** pour le laser CO₂ de la source EUV, **VDL ETG** et **Prodrive** pour les sous-ensembles mécatroniques et électroniques.

**Concurrents** : en EUV, **aucun**. En DUV, **Nikon** et **Canon**, très loin derrière (moins de 10 % du marché immersion pour Nikon). La menace émergente vient de **Chine** (groupe public Shanghai Aishengna, issu notamment de SMEE), qui commence à produire ses propres machines DUV immersion en petites quantités.

## Modalités contractuelles

Les ventes de systèmes reposent sur des **contrats-cadres pluriannuels** avec les grands clients, assortis de **réservations de capacité** et d'**acomptes importants** versés bien avant la livraison : c'est ce qui explique l'énorme flux de trésorerie du T3 2026 (11,4 Md€). Le chiffre d'affaires est reconnu à l'**installation** et à l'**acceptation** chez le client, pas à la commande. Les clients réservent désormais des machines pour **2028**, et certains souhaitent commander pour **2029 voire 2030**. ASML vient aussi de conclure avec ses grands clients une **hausse de prix fondée sur la valeur** apportée, dont l'effet apparaîtra à partir de 2027.

> **À retenir** : ASML vend un **goulot d'étranglement**. Tant que l'industrie a besoin de graver plus fin et plus vite (IA, mémoire HBM), elle doit passer par Veldhoven, et la demande dépasse aujourd'hui l'offre au moins jusqu'en 2028.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'ASML dans la chaîne de valeur

ASML se situe **tout en amont** de l'industrie des semi-conducteurs : elle fabrique l'outil qui fabrique les puces. Elle est elle-même au bout d'une chaîne de fournisseurs ultra-spécialisés, pour la plupart européens, qu'elle a contribué à faire naître et qu'elle co-finance.

### Amont — les fournisseurs d'ASML

**Optique (le cœur de la machine)**
- **Carl Zeiss SMT** (Oberkochen, Allemagne) : miroirs EUV d'une planéité atomique, fournisseur exclusif. ASML détient 24,9 % de Carl Zeiss SMT depuis 2016
- **Berliner Glas** (devenu ASML Berlin) : composants optiques et mandrins, racheté en 2020

**Source de lumière EUV**
- **Cymer** (San Diego, filiale d'ASML depuis 2013) : source plasma qui vaporise 50 000 gouttelettes d'étain par seconde
- **Trumpf** (Ditzingen, Allemagne) : laser CO₂ de forte puissance qui frappe les gouttelettes
- **Gigaphoton** (Japon) : sources laser excimères pour une partie du parc DUV

**Mécatronique, électronique, sous-ensembles**
- **VDL ETG**, **Prodrive Technologies**, **NTS-Group**, **KMWE** (écosystème de Brainport Eindhoven)
- **Edwards** (vide), **Mitsubishi Electric**, **Siemens** (composants industriels), nombreux fournisseurs américains de sous-systèmes, d'où la sensibilité aux règles d'exportation américaines

---

### ASML — conception, intégration et service

- **Conception et R&D** : ~4,8 Md€ de R&D attendus en 2026 (Veldhoven, Wilton, San Diego, Berlin)
- **Intégration** : une machine EUV compte ~100 000 pièces, voyage dans ~40 conteneurs et 3 avions cargo, et s'assemble chez le client en plusieurs mois
- **Service** : des milliers d'ingénieurs résidents chez les clients, mises à niveau de productivité, pièces détachées (Installed Base Management)
- **Partenaires de recherche** : **imec** (Louvain), laboratoire commun High-NA avec imec à Veldhoven

---

### Écosystème « lithographie » autour de la machine

- **Résines photosensibles** : JSR, Tokyo Ohka Kogyo (TOK), Shin-Etsu Chemical, Sumitomo Chemical
- **Masques et ébauches** : Hoya, AGC (ébauches EUV), Toppan, Dai Nippon Printing, Photronics
- **Pellicules EUV** : Mitsui Chemicals (sous licence ASML)
- **Inspection des masques** : Lasertec, KLA
- **Équipements complémentaires du « cluster »** : Tokyo Electron (dépôt et développement des résines, couplé à chaque scanner), Applied Materials, Lam Research (gravure, dépôt)

---

### Aval — les clients d'ASML

- **Fondeurs** : TSMC, Samsung Foundry, Intel Foundry, GlobalFoundries, UMC, Rapidus, SMIC, Hua Hong
- **Mémoire** : SK Hynix, Samsung Memory, Micron, CXMT, Kioxia
- **Clients finaux de ces puces** : Nvidia, Broadcom, Apple, Qualcomm, puis les hyperscalers (Microsoft, Alphabet, Amazon, Meta) et les laboratoires d'IA qui financent la demande de calcul

---

### Schéma simplifié du parcours

\`\`\`
OPTIQUE & SOURCES         ASML                      FABRICANTS DE PUCES      CONCEPTEURS          UTILISATEURS
Carl Zeiss SMT  ──┐                                 TSMC, Samsung,           Nvidia, Apple,       Hyperscalers
Trumpf, Cymer   ──┼──►  Conception, intégration ──► SK Hynix, Intel,  ──►    Broadcom,        ──►  (Microsoft, Alphabet,
VDL, Prodrive   ──┘     et service (Veldhoven)      Micron, SMIC, CXMT       Qualcomm             Amazon, Meta),
                              ▲                            ▲                                       labos d'IA, grand public
Résines (JSR, TOK) ───────────┴── masques (Hoya, AGC, Toppan, DNP) ── cluster Tokyo Electron ──┘
\`\`\`

**Lecture** : ASML est le **point de passage obligé** de la chaîne de valeur de l'IA. Sa dépendance réciproque avec Zeiss (fournisseur exclusif, participation de 24,9 %) est à la fois son meilleur rempart, car aucun concurrent ne peut accéder à ces optiques, et son principal risque opérationnel : un incident chez Zeiss bloquerait toute la production EUV mondiale.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : ASML ne publie qu'**un seul segment opérationnel** (« conception, fabrication et vente de systèmes de lithographie et services associés »). Il n'existe donc **ni EBITDA ni résultat net par segment** publiés. La société détaille en revanche ses ventes par **technologie**, par **marché final** et par **région**, ce qui permet d'identifier les moteurs. Les ventilations 2025 par technologie ci-dessous sont des **estimations** reconstituées à partir des taux de croissance communiqués.

### Par activité

| Activité | 2024 | 2025 | 2026E (guidance) | Dynamique |
|---|---|---|---|---|
| Ventes de systèmes | 21,8 Md€ | 24,5 Md€ | ~32 Md€ | EUV +45 %, non-EUV +20 % |
| dont EUV (estim.) | ~8,3 Md€ | ~11,4 Md€ | ~16,5 Md€ | ~65 machines livrées en 2026 |
| dont non-EUV, DUV + métrologie (estim.) | ~13,5 Md€ | ~13,1 Md€ | ~15,7 Md€ | ArFi tiré par la Chine et l'IA |
| Installed Base Management | 6,5 Md€ | 8,2 Md€ | ~12,3 Md€ | +50 %, mises à niveau de productivité |
| **Total** | **28,3 Md€** | **32,7 Md€** | **44-45 Md€** | **+36 %** |

**Le fait marquant de 2026** est l'explosion de l'**Installed Base Management** : les clients, qui manquent de machines, font **mettre à niveau leurs scanners existants** pour gagner des plaquettes/heure. Ces mises à niveau sont très margées, d'où la marge brute record de 57,5 % au T3.

### Par marché final (ventes de systèmes)

| Marché | 2025 | T2 2026 | T3 2026 |
|---|---|---|---|
| Logique (fondeurs, Intel) | ~65 % | 51 % | 54 % |
| Mémoire (DRAM, HBM, NAND) | ~35 % | 49 % | 46 % |

La **mémoire a presque rejoint la logique** : la HBM qui équipe les accélérateurs d'IA exige de plus en plus de couches EUV, et SK Hynix, Samsung et Micron accélèrent leurs investissements.

### Par région (ventes de systèmes)

| Région | 2024 | 2025 | T3 2026 | 2026E |
|---|---|---|---|---|
| Chine | 41 % | 33 % | 23 % | ~20 % |
| Taïwan | ~16 % | ~24 % | 32 % | — |
| Corée du Sud | ~22 % | ~21 % | 31 % | — |
| États-Unis | ~11 % | ~13 % | 13 % | — |

*Chine : chiffres publiés par ASML. Taïwan, Corée et États-Unis pour 2024-2025 : ordres de grandeur estimés.*

La **normalisation chinoise** est la grande histoire géographique : après une frénésie d'achats de stocks de précaution en 2023-2024 (jusqu'à 49 % des ventes certains trimestres), la Chine revient vers 20 %, remplacée par Taïwan et la Corée, portés par l'IA.

---

### Évolution de la rentabilité (groupe)

| Indicateur | 2023 | 2024 | 2025 | 9 mois 2026 |
|---|---|---|---|---|
| Marge brute | 51,3 % | 51,3 % | 52,8 % | 55,0 % |
| Marge d'exploitation | ~32 % | ~32 % | ~34 % | ~39 % |
| Résultat net | 7,8 Md€ | 7,6 Md€ | 9,6 Md€ | 10,6 Md€ |
| BPA | 19,91 € | 19,25 € | 24,73 € | 27,69 € |

**Explications** : la marge progresse grâce au **volume** (meilleure absorption des coûts fixes), au **mix** (plus d'EUV et de mises à niveau), et bientôt aux **hausses de prix** négociées. L'EBITDA, non publié, peut être estimé à ~16 Md€ sur 12 mois glissants (résultat d'exploitation de ~15,2 Md€ + ~1 Md€ d'amortissements). Le résultat net du T3 2026 inclut un **gain non récurrent de ~0,5 Md€** lié à la réévaluation de la participation dans Mistral AI.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Le monopole technologique EUV — moat quasi absolu
ASML est **le seul fabricant au monde** de machines EUV. Il a fallu **près de 30 ans**, des dizaines de milliards d'euros de R&D et le soutien financier de ses propres clients (Intel, TSMC et Samsung ont investi ~5,3 Md€ dans le programme en 2012) pour rendre la technologie industrielle. Nikon et Canon ont abandonné la course à l'EUV. Aucun concurrent occidental ou japonais n'a de programme crédible ; les efforts chinois sont jugés à plus d'une décennie de distance.

### 2. L'écosystème de fournisseurs exclusifs
Le moat n'est pas seulement chez ASML : il est dans sa **chaîne d'approvisionnement**. Les miroirs de Carl Zeiss SMT (exclusifs, ASML actionnaire à 24,9 %), le laser de Trumpf et la source Cymer (filiale) forment un **verrou collectif**. Un concurrent devrait recréer non pas une entreprise, mais un écosystème entier.

### 3. Coûts de changement très élevés et base installée
Une usine de puces est conçue **autour** des scanners ASML : procédés, recettes, logiciels de lithographie computationnelle, ingénieurs résidents. Changer de fournisseur reviendrait à requalifier toute la ligne. La **base installée** de plusieurs milliers de machines génère des revenus récurrents (12 Md€ attendus en 2026) et une connaissance intime des procédés de chaque client.

### 4. La feuille de route : le moat se renouvelle
Le moat se prolonge par l'innovation : **High-NA** (en production chez Intel, adoption chez Samsung vers 2028 et chez TSMC vers 2030), puis **Hyper-NA** à l'étude pour la décennie suivante. TSMC vient même de demander à ASML de piloter un consortium industriel sur les **réticules de 12 pouces**. ASML écrit la feuille de route de l'industrie.

### 5. Pouvoir de prix démontré
En 2026, ASML a négocié avec ses clients clés une **hausse de prix fondée sur la valeur** de ses machines les plus critiques. Peu d'entreprises industrielles peuvent imposer une hausse à TSMC ou Samsung : c'est la signature d'un monopole.

## Positionnement vs concurrence

| Critère | ASML | Nikon | Canon | Concurrence chinoise |
|---|---|---|---|---|
| EUV (Low-NA et High-NA) | **Monopole** | Aucun | Aucun | Prototypes, 10 ans de retard estimés |
| DUV immersion (ArFi) | **~90 %** | <10 % | Absent | Premières machines (5 prévues en 2026) |
| DUV sec / KrF / i-line | Leader | Présent | Fort sur l'i-line | SMEE (nœuds anciens) |
| Lithographie alternative | — | — | Nano-impression | — |
| Service / base installée | Massive | Faible | Moyenne | Inexistante |

## Image de marque et valeur perçue

ASML n'a pas de « marque » au sens grand public, mais son **image auprès des clients** est celle d'un partenaire stratégique indispensable : TSMC, Samsung ou Intel bâtissent leurs feuilles de route technologiques sur celle d'ASML. Côté recrutement, ASML est l'employeur technologique le plus attractif des Pays-Bas.

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Très élevé**. La demande dépasse l'offre au moins jusqu'en 2028 ; les clients réservent des machines 2 à 4 ans à l'avance, versent des acomptes et acceptent les hausses de prix. Limite : une poignée de clients concentre la majorité des ventes EUV
- **Vis-à-vis des fournisseurs** : **Élevé mais réciproque**. ASML est le client quasi unique de Zeiss SMT ou de certains sous-traitants de Brainport, mais elle dépend aussi totalement d'eux : relation de **co-dépendance** plus que de domination
- **Vis-à-vis des États** : **Faible**. C'est la vraie limite du moat : les gouvernements américain et néerlandais décident à qui ASML a le droit de vendre (Chine), et le projet de loi américain MATCH Act pourrait encore restreindre le DUV et le service en Chine`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Équipements de fabrication de semi-conducteurs (15 octobre 2026)

| Société | Code Bloomberg | Cap. (Md$) | VE / CA | VE / EBIT | P/E (12 m.) | P/E futur | Rdt div. | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|---|
| **ASML** | **ASML NA** | **~670** | **~14,6x** | **~38x** | **~44x** | **~29x (2027E)** | **~0,5 %** | **~55 %** |
| Applied Materials | AMAT US | ~355 | ~11,5x | ~40x | ~40x | ~26x | ~0,5 % | ~45 % |
| Lam Research | LRCX US | ~359 | ~15,5x | ~47x | ~52x | ~32x | ~0,5 % | ~60 % |
| KLA | KLAC US | ~233 | ~17,4x | ~41x | ~50x | ~34x | ~0,5 % | ~90 % |
| Tokyo Electron | 8035 JT | ~175 | ~9,8x | ~36x | ~43x | ~31x | ~1,3 % | ~25 % |
| ASM International | ASM NA | ~49 | ~12,5x | ~42x | ~40x | ~32x | ~0,4 % | ~20 % |

*Cours de clôture du 13-14 octobre 2026 (StockAnalysis, MarketScreener). Capitalisation d'ASML convertie au change euro/dollar d'environ 1,14 ; celle de Tokyo Electron à ~150 ¥/$. VE/EBIT et ROE moyens sur 5 ans : estimations 221 Bourse à partir des marges et capitaux propres publiés, à affiner sur données Bloomberg. Le ROE de KLA est gonflé par des capitaux propres réduits par les rachats d'actions.*

---

### Analyse comparative

**ASML — la prime de monopole s'est résorbée**
Fait remarquable : ASML ne se paie **plus de prime** sur ses pairs. Son P/E sur les bénéfices attendus en 2027 (~29x) est même **légèrement inférieur à la médiane du secteur (~32x)**, alors que sa croissance 2026 (+36 %) est la plus forte du groupe et que sa position concurrentielle est la plus protégée. Le marché paie Lam Research et KLA plus cher qu'ASML sur les bénéfices futurs.

**Applied Materials et Lam Research — les gagnants de la complexité 3D**
Les deux américains profitent de la multiplication des étapes de **dépôt et de gravure** (transistors GAA, mémoire HBM empilée, NAND 3D). Ils sont en concurrence entre eux, alors qu'ASML est seule dans sa catégorie. En contrepartie, ils sont plus exposés à la Chine (souvent 30-40 % des ventes) et sans protection comparable à l'EUV.

**KLA — le meilleur élève de la rentabilité**
Leader du contrôle de procédés (inspection, métrologie) avec ~60 % de part de marché, marge d'exploitation supérieure à 40 % : c'est le seul pair dont le profil de rentabilité rivalise avec ASML. Il est aussi un concurrent direct d'ASML dans la métrologie (YieldStar, HMI).

**Tokyo Electron — le partenaire obligé**
Chaque scanner ASML est couplé à une piste de couchage-développement Tokyo Electron : son sort est lié à celui d'ASML. Il se paie moins cher, avec un ROE plus faible.

**ASM International — le petit cousin**
Issu de la même histoire (coentreprise fondatrice d'ASML en 1984), leader du dépôt de couches atomiques (ALD), indispensable aux transistors GAA. Valorisation comparable, taille 13 fois plus petite.

---

### Le ratio qui compte : rentabilité des capitaux
Avec un **ROE supérieur à 50 %** depuis cinq ans et un **ROIC de ~66 %**, ASML est l'une des entreprises industrielles les plus rentables au monde. Le fait qu'elle ne se paie pas plus cher que ses pairs sur les bénéfices 2027 est **le principal argument de valorisation** de la thèse haussière, à condition que ces bénéfices 2027 se matérialisent.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T3 2026 — publiés le 14 octobre 2026

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T3 2026 | T3 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | **11,66 Md€** | 7,52 Md€ | ~11,7-11,85 Md€ | **En ligne / léger manque** (haut de la fourchette 11-12 Md€) |
| dont systèmes | 8,37 Md€ | 5,55 Md€ | — | +51 % |
| dont Installed Base | 3,29 Md€ | 1,96 Md€ | ~2,9 Md€ | **+0,4 Md€ au-dessus du guidage** |
| Marge brute | **57,5 %** | 51,6 % | 55,9 % | **+1,6 pt** (guidage 55-57 %) |
| Marge d'exploitation | 44,4 % | 32,8 % | — | +11,6 pts |
| Résultat net | **4,96 Md€** | 2,13 Md€ | ~4,13 Md€ | **+20 %** (+8 % hors Mistral) |
| BPA | **12,95 €** | 5,49 € | — | +136 % |

**Lecture** : un trimestre **record sur tous les plans**. Le chiffre d'affaires est au rendez-vous, et la vraie surprise vient de la **marge brute** (57,5 %, record historique) portée par les mises à niveau de la base installée. Le résultat net inclut ~0,5 Md€ de **gain non récurrent** sur la participation dans Mistral AI ; hors cet élément, le bénéfice dépasse quand même le consensus d'environ 8 %.

---

### Facteurs clés par activité

- **EUV** : 49 % des ventes de systèmes, croissance attendue de plus de 45 % sur 2026, ~65 machines livrées sur l'année
- **DUV immersion (ArFi)** : 39 % des ventes de systèmes, livraisons stables par rapport à 2025 alors qu'une baisse était initialement prévue
- **Installed Base Management** : 3,3 Md€ (+68 % sur un an), tiré par les **mises à niveau de productivité** (YieldStar 550 : +60 % de productivité)
- **Systèmes vendus** : 113 machines neuves et 8 d'occasion (vs 86 et 5 au T2)
- **Mémoire** : 46 % des ventes de systèmes, contre ~35 % en 2025, soit une **accélération nette** liée à la HBM

---

### Évolution des marges

- **Marge brute** : 51,6 % (T3 2025) → 53,0 % (T1 2026) → 54,0 % (T2) → **57,5 %** (T3). Facteurs : volume, mix EUV et immersion favorable, poids des mises à niveau
- **R&D** : ~1,2 Md€ par trimestre, ~4,8 Md€ sur l'année ; **frais commerciaux et administratifs** : ~0,4 Md€
- **Guidage annuel de marge brute** relevé à **~56 %**, contre 51-53 % en janvier : +4 points en neuf mois

---

### Perspectives

| Guidage | T4 2026 | Exercice 2026 |
|---|---|---|
| Chiffre d'affaires | 14,2 à 15,2 Md€ | 44 à 45 Md€ (+36 %) |
| dont Installed Base | ~3,7 Md€ | ~12,3 Md€ (+50 %) |
| Marge brute | ~57 % | ~56 % |

**Changement de ton** : nettement plus offensif. Pour la première fois, la direction affirme que ses **capacités prévues pour 2027 et 2028 ne suffiront pas** à satisfaire la demande, et étudie une hausse au-delà des +30 % déjà planifiés pour 2028. Des clients veulent commander pour **2029 et 2030**.

**Historique du guidage 2026** : 34-39 Md€ (janvier) → 36-40 Md€ (avril) → 43-45 Md€ (juillet) → **44-45 Md€** (octobre). Trois relèvements en neuf mois.

---

### Bilan et flux de trésorerie — points notables

- **Trésorerie** : 12,7 Md€ (contre 7,6 Md€ fin juin), pour ~2 Md€ de dette obligataire : **trésorerie nette ~10,7 Md€**
- **Flux de trésorerie disponible du T3** : **11,4 Md€**, exceptionnel, gonflé par les **acomptes clients** pour les livraisons 2027-2028. À ne pas extrapoler : le flux était négatif de 2,6 Md€ au T1
- **Stocks** : ~11,7 Md€, stables à un niveau élevé (près de 4 mois de ventes), cohérents avec la montée en cadence
- **Créances clients** : 8,7 Md€ fin juin, en hausse avec les volumes
- **Rachats d'actions** : **4,1 Md€ au seul T3**, soit ~6,2 Md€ depuis janvier sur le programme de 12 Md€ 2026-2028 : plus de la moitié exécutée en neuf mois
- **Dividende** : acompte de 1,88 € payable le 4 novembre 2026

---

### Réaction du marché

Le titre avait chuté de **4,2 % la veille** (à 1 509,60 €), emporté par une vente généralisée des valeurs de semi-conducteurs (inquiétudes sur le financement de l'IA et sur le chinois CXMT). Le jour des résultats, l'action a rebondi de **+1,2 % à Amsterdam** (~1 528 €) et aidé l'AEX à battre un record en séance, avant que le certificat américain ne recule dans le sillage du secteur à Wall Street. Bank of America a relevé ses estimations de bénéfices mais **abaissé son objectif de cours**, jugeant un multiple un peu plus faible raisonnable.

**Ce que cela indique** : un trimestre exceptionnel était **déjà dans les cours**. Le titre reste ~12 % sous son record de juin (1 741 €) : le marché ne doute pas de 2026, il se demande **combien de temps durera le cycle** et à quel multiple payer des bénéfices au sommet.

### Éléments inhabituels
- Gain Mistral de ~0,5 Md€ dans le résultat net (non opérationnel)
- Flux de trésorerie trimestriel supérieur au chiffre d'affaires d'un trimestre de 2025
- Rythme de rachats d'actions multiplié par 4 d'un trimestre à l'autre
- ASML ne publie plus ses prises de commandes trimestrielles depuis 2026 (décision annoncée en janvier 2025 ; seul le carnet de commandes reste publié, une fois par an) : la visibilité passe désormais par les commentaires qualitatifs de la direction`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — priorités et sentiment

### Évolution du ton sur six trimestres

**Juillet 2025 (T2 2025) — Prudence et brouillard** : Christophe Fouquet refuse de confirmer une croissance en 2026, citant la géopolitique et les droits de douane américains. Le titre perd ~8 %. Le ton est défensif : « nous nous préparons à la croissance, mais ne pouvons pas la confirmer ».

**Octobre 2025 (T3 2025) — Le doute se lève** : la direction écarte le scénario d'une baisse des ventes en 2026, malgré une Chine attendue en net recul. Ton plus serein, mais encore mesuré.

**Janvier 2026 (T4 2025) — « Going out with a bang »** : prises de commandes record de **13,2 Md€** (deux fois le consensus), dont 7,4 Md€ en EUV. C'est la **dernière publication trimestrielle des commandes** (leur arrêt à partir de 2026 avait été annoncé dès janvier 2025, au motif qu'elles rendaient le titre trop volatil), et ASML annonce **1 700 suppressions de postes** (3,8 % des effectifs, encadrement de la R&D). Ton confiant sur l'IA, mais message mêlé.

**Avril 2026 (T1 2026) — Montée en puissance** : guidage annuel relevé à 36-40 Md€, prises de commandes qualifiées de « très fortes ». Réaction boursière pourtant modeste.

**Juillet 2026 (T2 2026) — Accélération** : guidage porté à **43-45 Md€**, mise en production de volume du High-NA chez Intel, annonce de **+30 % de capacités EUV et DUV immersion en 2027**. Fouquet parle d'investissements clients « en accélération ».

**Octobre 2026 (T3 2026) — Pénurie assumée** : trimestre record, marge record, et un message nouveau : **même +30 % en 2027 et +30 % en 2028 ne suffiront pas**. « Nous devons faire plus », résume le PDG. Le directeur financier Roger Dassen confirme que les discussions de prix sont closes et ont abouti à des **hausses**, tout en précisant qu'il ne s'agit pas d'un exercice annuel.

---

### Priorités répétées de la direction

**1. Capacité, capacité, capacité** — Le thème dominant de 2026. Livrer ~65 EUV en 2026, +30 % en 2027, plus encore en 2028. Leviers : nouvelles lignes, productivité des fournisseurs (Zeiss), machines plus rapides (NXE:3800F à 260 plaquettes/heure, immersion à 330), mises à niveau de la base installée.

**2. La marge brute vers le haut de la fourchette 2030 (56-60 %)** — Déjà atteinte en 2026 (~56 %), deux ans en avance sur la trajectoire. Les mises à niveau, le mix EUV et les hausses de prix sont les leviers cités.

**3. Le High-NA comme prochaine vague** — Intel en production de volume, Samsung vers 2028, TSMC vers 2030. Le discours est patient : la direction sait que l'adoption du High-NA dépend du coût par couche pour le client.

**4. La Chine, normalisée** — Discours constant depuis janvier : la Chine revient vers ~20 % des ventes. Le PDG juge « encore assez faible » la probabilité d'une concurrence chinoise majeure.

**5. Le retour aux actionnaires** — Programme de rachat de 12 Md€ (2026-2028) exécuté à un rythme accéléré, dividende en hausse de 17 % au titre de 2025.

---

### Analyse du sentiment

| Trimestre | Sentiment | Mot-clé | Guidage annuel |
|---|---|---|---|
| T2 2025 | Prudent | « Incertitude » | Croissance 2026 non confirmée |
| T3 2025 | Neutre + | « Pas de baisse » | 2026 au moins stable |
| T4 2025 | Positif | « Record » | 34-39 Md€ |
| T1 2026 | Positif + | « Très fort » | 36-40 Md€ |
| T2 2026 | Très positif | « Accélération » | 43-45 Md€ |
| T3 2026 | **Euphorique maîtrisé** | **« Pas assez de capacité »** | **44-45 Md€** |

- **Confiance** : au plus haut historique. La direction parle de visibilité jusqu'en 2028 et d'intérêt pour 2029-2030
- **Transparence** : en **recul**. Depuis 2026, la fin de la publication trimestrielle des commandes (seul le carnet de commandes reste publié, une fois par an) prive les investisseurs de leur principal indicateur avancé ; le marché dépend désormais du discours qualitatif de la direction
- **Cohérence** : bonne. Les objectifs 2030 (44-60 Md€ de CA, marge brute de 56-60 %) fixés en novembre 2024 seront probablement relevés lors du Capital Markets Day du **10 juin 2027**

> **À lire entre les lignes** : le passage en dix-huit mois d'un discours de prudence à un discours de pénurie est typique d'un **haut de cycle** dans les équipements de semi-conducteurs. Ce n'est pas une raison de vendre, mais c'est la raison pour laquelle le marché refuse de payer plus cher des bénéfices records.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Christophe Fouquet — Président du directoire (PDG) depuis avril 2024

**Profil** : Français, diplômé en physique de Grenoble INP. Passé par **KLA-Tencor** et **Applied Materials** avant de rejoindre ASML en **2008**. Il a dirigé le marketing, la gestion produit puis l'activité **EUV**, avant de devenir directeur commercial (2022-2024). Membre du directoire depuis 2018, mandat jusqu'en 2028.

**Bilan chiffré** :
- Il a piloté l'**industrialisation de l'EUV** dans les années 2010, quand la technologie passait de prototype à machine de production : les ventes EUV sont passées de quasi zéro à plus de 11 Md€ par an
- Depuis sa prise de fonctions (avril 2024) : CA de 27,6 Md€ (2023) à **44-45 Md€ attendus en 2026** (+~60 %), marge brute de 51 % à **~56 %**, résultat net de 7,8 à plus de 16 Md€
- Il a traversé l'**épisode d'octobre 2024** (publication accidentelle et anticipée des résultats, titre en chute de 16 %) et l'incertitude de 2025 sans renier ses objectifs 2030
- Il a mené une **restructuration de 1 700 postes** (janvier 2026) en pleine croissance, signe d'une gestion de coûts ferme
- **Point d'attention** : nommé **administrateur non exécutif d'Airbus** à compter du 1er octobre 2026. Un mandat extérieur prestigieux, mais qui consomme du temps en pleine montée en cadence

### Roger Dassen — Directeur financier depuis 2018

Ancien vice-président mondial et PDG de **Deloitte** aux Pays-Bas, docteur en audit (Maastricht). Reconduit pour quatre ans en avril 2026 (mandat jusqu'en 2030). Réputé pour sa prudence et sa crédibilité auprès des investisseurs : c'est lui qui porte la discipline du guidage et le programme de retour aux actionnaires.

### Le reste du directoire (6 membres)

| Membre | Fonction | Chez ASML depuis | Profil |
|---|---|---|---|
| Frédéric Schneider-Maunoury | Directeur des opérations | 2009 | Ex-Alstom, ministère de l'Industrie. Pilote la montée en capacité |
| Wayne Allan | Achats stratégiques | 2018 | 30 ans chez Micron, de l'opérateur de production au vice-président |
| Jim Koonmen | Directeur clients | 2007 (Brion) | Ex-Cymer, MIT. Relation avec TSMC, Samsung, Intel |
| Marco Pieters | Directeur technique | 1999 | Ingénieur maison, ex-patron de l'EUV, au directoire depuis 2026 |

**Lecture** : une équipe **très majoritairement issue du sérail**, avec en moyenne plus de 15 ans d'ancienneté. Continuité et maîtrise technique, mais peu de regards extérieurs.

---

### Participation des dirigeants

La rémunération repose sur un mix de fixe, de variable court terme et d'**actions de performance** sur trois ans (critères : CA, ROAIC, rendement pour l'actionnaire, technologie et ESG). La participation directe des dirigeants est **significative à titre personnel** (plusieurs millions d'euros d'actions pour le PDG) mais **marginale rapportée à la capitalisation** (~590 Md€). L'actionnariat est dispersé et institutionnel (Capital Group, BlackRock, Baillie Gifford, Vanguard), sans actionnaire de référence.

---

### Allocation du capital

| Indicateur | 2021 | 2022 | 2023 | 2024 | 2025 | 2026E |
|---|---|---|---|---|---|---|
| ROE (estim.) | ~55 % | ~65 % | ~60 % | ~42 % | ~50 % | ~65 % |
| Rachats d'actions | 8,6 Md€ | 4,6 Md€ | 1,0 Md€ | 0,5 Md€ | ~3,5 Md€ (estim.) | 6,2 Md€ (9 mois) |
| Dividende par action | 5,50 € | 5,80 € | 6,10 € | 6,40 € | 7,50 € | — |

*ROE estimés par 221 Bourse à partir des résultats nets et capitaux propres publiés.*

**Discipline remarquable** :
- **Réinvestissement** : R&D de ~4,8 Md€ par an, priorité absolue, jamais sacrifiée même en 2023-2024
- **Acquisitions** : rares, petites et stratégiques (Cymer 2013, HMI 2016, participation Zeiss SMT 2016, Berliner Glas 2020). Aucune destruction de valeur identifiée ; goodwill stable à 4,6 Md€
- **Retour aux actionnaires** : rachats **contracycliques** (8,6 Md€ en 2021, très peu en 2023-2024 quand la trésorerie était sollicitée), dividende en hausse régulière
- **Le pari Mistral AI** (1,3 Md€ en septembre 2025, ~11 % du capital, premier actionnaire) : hors du cœur de métier, critiqué à l'époque. Il est aujourd'hui **en plus-value** (gain de réévaluation de ~0,5 Md€ au T3 2026) et justifié par l'usage de l'IA dans la conception des machines

---

### Signaux d'alerte

- **Parties liées** : participation de 24,9 % dans Carl Zeiss SMT, fournisseur exclusif ; relations documentées et transparentes, pas d'anomalie identifiée
- **Rémunération** : niveau élevé pour les standards néerlandais mais **modeste** vs les pairs américains (le PDG d'Applied Materials gagne plusieurs fois plus) ; votes de l'assemblée générale favorables
- **Changements de stratégie** : aucun. La feuille de route EUV → High-NA est constante depuis 15 ans
- **Comportement promotionnel** : **faible**. ASML est historiquement prudente dans son guidage ; l'abandon de la publication des commandes est en revanche un **recul de transparence**

### Fondateur ou gestionnaire ?

**Gestionnaires professionnels issus du rang.** Il n'y a plus de fondateur depuis longtemps ; la culture d'ingénieur et la continuité (quatre PDG en 27 ans : Doug Dunn, Eric Meurice, Peter Wennink, puis Christophe Fouquet) remplacent l'esprit fondateur. À ce stade de maturité (entreprise de 590 Md€, monopole établi), c'est le **profil adapté** : l'enjeu n'est plus d'inventer un marché mais d'exécuter une montée en cadence sans faute et de préserver l'avance technologique.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours (2021-2026)

### Contexte
ASML est passée d'environ **400 € fin 2020** à **~1 528 €** aujourd'hui (clôture du 14 octobre 2026), soit un quasi-quadruplement, avec un **creux à ~390 € en octobre 2022** et un **record à 1 741 € en juin 2026**. Le titre est un baromètre du cycle mondial des semi-conducteurs et, depuis 2023, de l'investissement dans l'IA. Bêta d'environ 1,3.

---

### Hausses significatives (plus de 5 %)

**2021 — Le super-cycle des puces** : pénurie mondiale de semi-conducteurs, plans d'investissement record de TSMC, Samsung et Intel. Le titre gagne ~80 % sur l'année et dépasse 770 € en novembre.

**Janvier 2024 — Commandes record (9,2 Md€) au T4 2023** : forte hausse le lendemain des résultats, premier signe que l'IA prend le relais de la Chine.

**Juillet 2024 — Premier record au-dessus de 1 000 €** : euphorie autour de l'IA et de Nvidia.

**Janvier 2026 — Commandes record de 13,2 Md€** (28 janvier) : hausse jusqu'à +7,5 % en séance, record historique ; le titre gagne ~33 % sur le seul mois de janvier, porté aussi par des relèvements de recommandations en début d'année. ASML franchit les 500 Md$ de capitalisation et devient la première capitalisation européenne.

**Mai-juin 2026 — L'envolée de l'IA et de la mémoire** : hausse de ~40 % en deux mois, record à 1 741 € en juin. Le titre gagne ~87 % sur le premier semestre.

**15 juillet 2026 — Résultats du T2 et guidage relevé à 43-45 Md€** : +2,7 %, dans un mois par ailleurs très négatif.

---

### Baisses significatives (plus de 5 %)

**2022 — Krach des valeurs de croissance et premières restrictions** : hausse des taux, fin du cycle des PC et smartphones, règles américaines d'octobre 2022 sur la Chine. Le titre perd jusqu'à ~50 % depuis son sommet.

**17 juillet 2024 — Menace de restrictions américaines renforcées** : environ -13 % en une séance, sur fond d'informations de presse sur un durcissement des règles d'exportation vers la Chine.

**15 octobre 2024 — La publication accidentelle** : ASML publie par erreur ses résultats un jour plus tôt. Commandes de 2,6 Md€ (moitié du consensus) et guidage 2025 abaissé : **-16 %**, la pire séance depuis 1998.

**27 janvier 2025 — Choc DeepSeek** : environ -7 % ; le marché craint qu'une IA plus économe en calcul réduise les besoins en puces.

**Avril 2025 — Droits de douane américains** : forte baisse dans le sillage du « Liberation Day ».

**16 juillet 2025 — Croissance 2026 non confirmée** : environ -8 %.

**Mars 2026 — Guerre avec l'Iran** : pause du marché, le titre recule d'~9 % sur le mois.

**1er juillet 2026 — Anthropic et les puces sur mesure** : -7,4 % sur des informations selon lesquelles Anthropic travaillerait à sa propre puce d'IA avec Samsung.

**27 juillet 2026 — Le DUV chinois** : -6 à -7 % après l'annonce du démarrage de la production de machines DUV immersion par un groupe public chinois (Shanghai Aishengna). Le titre perd **18 % sur le mois de juillet**.

**14 septembre 2026 — Appel à ralentir l'IA** : -6,2 % après un essai du PDG d'Anthropic appelant à limiter le rythme de développement de l'IA.

**13 octobre 2026 — Vente généralisée des semi-conducteurs** : -4,2 % la veille des résultats (financement de l'IA, montée de CXMT).

---

### Facteurs structurels

- **Le cycle des investissements des fabricants de puces** : premier déterminant. ASML monte quand TSMC, Samsung et SK Hynix relèvent leurs budgets, et baisse dès que le marché anticipe un pic
- **Les prises de commandes** : principal catalyseur historique ; leur disparition en 2026 rend le titre plus sensible aux commentaires qualitatifs et aux rumeurs
- **La géopolitique sino-américaine** : chaque projet de restriction (2022, 2023, juillet 2024, MATCH Act en 2026) provoque une baisse
- **Le récit de l'IA** : depuis 2023, ASML réagit aux nouvelles de Nvidia, des hyperscalers et des laboratoires d'IA, y compris celles sans lien direct avec la lithographie (puces sur mesure, appels à ralentir l'IA)
- **Asymétrie récente** : sur les 18 derniers mois, le titre a souvent **baissé sur de bonnes nouvelles** (résultats d'avril 2026) et **beaucoup baissé sur des menaces hypothétiques** : signe d'un positionnement déjà très chargé`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du secteur** :
- Marché des équipements de fabrication de semi-conducteurs (WFE) : ~+15 % en 2026, croissance attendue à deux chiffres en 2027, portée par l'IA, la mémoire HBM et les nœuds de 2 nm
- **Intensité lithographique en hausse** : chaque nouveau nœud et chaque génération de DRAM ajoute des couches EUV, ce qui fait croître ASML plus vite que le marché

**Gains de parts de marché** :
- Limités en EUV (déjà 100 %) ; gains possibles en métrologie (YieldStar, HMI)
- Légère érosion possible en DUV en Chine à partir de 2027 (machines chinoises : ~5 en 2026, ~20 en 2027)

**Hausses de prix** :
- Hausse de prix fondée sur la valeur négociée en 2026, effet **partiel en 2027** et **plein en 2028** ; selon BofA, +5 % de prix moyen sans hausse de coûts représenterait ~+10 % de BPA

**Volumes** :
- Capacités EUV Low-NA et DUV immersion : **+30 % en 2027**, +30 % envisagés en 2028 (et davantage à l'étude)
- Installed Base Management : croissance de 15 à 20 % par an après le bond de 2026

**Pressions sur les coûts** :
- R&D en hausse de ~8 % par an (High-NA, Hyper-NA), coûts de montée en cadence, inflation salariale aux Pays-Bas
- Les premiers systèmes High-NA sont **dilutifs** pour la marge brute

**Effet de levier opérationnel** :
- Charges fixes (R&D + frais généraux) d'environ 6,4 Md€ en 2026 : chaque milliard de CA supplémentaire à 58 % de marge brute ajoute ~0,58 Md€ de résultat d'exploitation

**Coûts de financement** : nuls en net. Trésorerie nette de ~10,7 Md€, produits financiers légèrement positifs.

**Dilution / relution** : rachats de 12 Md€ sur 2026-2028 (dont ~6,2 Md€ déjà exécutés) → **réduction du nombre d'actions de ~1,5 à 2 % par an** ; dilution des plans d'actions négligeable (moins de 0,5 %).

**Fiscalité** : taux effectif de ~17 % (régime néerlandais de l'innovation).

---

### Estimations BPA

| Exercice | CA (Md€) | Marge brute | Marge d'exploit. | Actions (M) | BPA estimé | Croissance | P/E au cours actuel (~1 528 €) |
|---|---|---|---|---|---|---|---|
| 2024 (réalisé) | 28,3 | 51,3 % | 32 % | 393 | **19,25 €** | — | — |
| 2025 (réalisé) | 32,7 | 52,8 % | 34 % | 389 | **24,73 €** | +28 % | — |
| **2026E** | **44,5** | **~56 %** | **~41 %** | **~383** | **~42,5 €** (~41,2 € hors Mistral) | **+72 %** | **~36x** |
| **2027E** | **~54,5** | **~58 %** | **~45 %** | **~377** | **~54-55 €** | **+30 %** | **~28x** |
| **2028E** | **~63** | **~59 %** | **~47 %** | **~371** | **~66-67 €** | **+22 %** | **~23x** |

*Estimations 221 Bourse. Consensus de marché avant publication du T3 : ~38,8 € (2026) et ~53 € (2027), appelé à être relevé après le T3.*

---

### Sensibilité

- **Scénario haussier** (capacités +35 % par an, plein effet prix, mises à niveau soutenues) : CA 2028 de ~70 Md€, marge brute de 60 %, **BPA 2028 ~78 €** → P/E 2028 de ~20x. Le titre aurait un potentiel de 50 % ou plus s'il conserve un multiple de 30x
- **Scénario de base** : BPA 2028 de ~66 € → P/E 2028 de ~23x, cohérent avec l'objectif moyen des analystes (~2 075 €, soit ~31x le BPA 2028)
- **Scénario baissier** (pic des investissements en 2027, retournement mémoire, MATCH Act appliqué) : CA 2028 ramené à ~50 Md€, marge brute de 54 %, **BPA 2028 ~45 €** → P/E 2028 de ~34x au cours actuel ; avec un multiple de cycle bas (25x), le titre retomberait vers ~1 100 € (-28 %)

**Conclusion** : la croissance du BPA d'ASML est **mécaniquement adossée à des capacités déjà réservées** par les clients jusqu'en 2028. Le risque n'est pas tant la trajectoire 2026-2027, très visible, que **la durée du cycle au-delà de 2028**. À 28x les bénéfices 2027, le titre ne paie pas de prime excessive pour un monopole en croissance de 30 % : la valorisation devient tendue seulement si le cycle se retourne.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Avantages concurrentiels et barrières à l'entrée
**Un monopole qui se renouvelle** : 100 % de l'EUV aujourd'hui, 100 % du High-NA demain, et la direction de la feuille de route de l'industrie (consortium des réticules de 12 pouces demandé par TSMC). Les barrières à l'entrée ne sont pas seulement technologiques mais **écosystémiques** (Zeiss, Trumpf, Cymer). Aucun concurrent crédible avant la fin de la décennie.

### Leviers de croissance
**1. L'IA est un multiplicateur d'intensité lithographique** : les accélérateurs d'IA exigent les nœuds les plus fins (3 nm, 2 nm, puis A16 et A14) et la mémoire HBM, toutes deux gourmandes en couches EUV. La mémoire est passée de ~35 % à ~46 % des ventes de systèmes en un an.

**2. La pénurie donne du pouvoir de prix** : la demande dépasse l'offre au moins jusqu'en 2028. ASML vient de passer une hausse de prix fondée sur la valeur, dont l'effet plein n'arrivera qu'en 2028. Selon BofA, +5 % de prix moyen représentent ~+10 % de BPA : c'est une **surprise bénéficiaire potentielle** que le consensus n'intègre qu'en partie.

**3. La base installée, un moteur récurrent sous-estimé** : ~12 Md€ en 2026 (+50 %), marges supérieures à la moyenne, et un parc qui grossit de 65 EUV par an. À terme, le service et les mises à niveau peuvent représenter un tiers des ventes.

**4. Le relais High-NA (2028-2030)** : machines à ~350-400 M€ l'unité, adoption par Samsung (2028) et TSMC (2030). Un second cycle de remplacement s'ouvre au moment où le premier pourrait ralentir.

**5. Les objectifs 2030 seront relevés** : le Capital Markets Day du 10 juin 2027 devrait rehausser la fourchette de 44-60 Md€ de CA, atteinte dès 2026 sur son bas, et la marge brute de 56-60 %, déjà atteinte.

### Allocation du capital
Rachats de 12 Md€ sur 2026-2028 (plus de la moitié déjà exécutée), dividende en hausse, trésorerie nette de ~10,7 Md€, ROIC de ~66 %. L'investissement dans Mistral AI est en plus-value.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques susceptibles de nuire durablement à l'activité

**1. Le pic du cycle (risque principal)** : l'histoire des équipements de semi-conducteurs est une succession de pénuries suivies de surcapacités. Les clients qui réservent pour 2029-2030 sont exactement ceux qui annuleront en cas de retournement. Si les investissements dans l'IA (financés en partie par la dette des hyperscalers et des laboratoires) marquent le pas en 2028, ASML aura **augmenté ses capacités de 60 % au pire moment**.

**2. La géopolitique chinoise** : le MATCH Act, soutenu par les deux partis américains et en voie d'intégration au budget de la défense, pourrait interdire le DUV immersion **et le service** de la base installée en Chine (~20 % des ventes). Parallèlement, la Chine produit ses premières machines DUV : 5 en 2026, 20 en 2027.

**3. La concentration des clients et le risque Intel/Samsung** : TSMC, Samsung et SK Hynix concentrent la majorité des ventes EUV. Si Samsung et Intel échouent à rattraper TSMC dans la fonderie, la demande se concentre sur un seul client au pouvoir de négociation croissant.

### Compression des marges ou ralentissement
- Le High-NA est dilutif pour la marge brute dans ses premières années
- Les mises à niveau (qui ont porté la marge du T3) sont par nature **cycliques** : elles s'arrêtent quand les clients ont à nouveau assez de machines neuves
- Le directeur financier lui-même a prévenu que les hausses de prix ne seraient pas annuelles

### Attentes trop élevées ?
Le consensus attend +30 % de BPA en 2027. La barre est haute, et ASML ne publie plus ses commandes : le marché ne verra un ralentissement qu'**avec retard**, dans les chiffres de ventes.

### Analyse pré-mortem
*Nous sommes en octobre 2028 et l'action vaut 900 €. Que s'est-il passé ?* Courant 2027, deux hyperscalers réduisent leurs budgets d'IA, faute de retour sur investissement et sous la pression de leurs créanciers. La mémoire bascule en surcapacité, SK Hynix et Samsung reportent leurs machines EUV. Le MATCH Act est voté et coupe les ventes DUV et le service en Chine. ASML, qui a porté ses capacités à +60 %, voit son guidage 2028 baisser de 15 %, sa marge brute reculer à 53 %. Le multiple se contracte de 36x à 22x des bénéfices en baisse.

### Les multiples actuels sont-ils trop élevés ?
**Pas au regard de la croissance, mais oui au regard du cycle.** À ~36x les bénéfices 2026 et ~28x 2027, ASML se paie dans la moyenne de ses pairs, avec une croissance et une rentabilité supérieures. Mais ces bénéfices sont des **bénéfices de haut de cycle** : sur un BPA « normalisé » (moyenne de cycle ~40 €), le P/E serait de ~38x. La valorisation n'intègre pas de retournement.

---

## Le point de vue à contre-courant

**Ce que le marché refuse de voir** : le marché traite ASML comme une valeur cyclique au sommet de son cycle, et refuse de payer plus que ses pairs. Or **le cycle d'ASML est différent de celui de ses pairs** : ses machines sont le goulot d'étranglement, réservées 2 à 4 ans à l'avance, avec des acomptes ; sa base installée croît mécaniquement chaque année ; et le relais High-NA décale le prochain creux. Le marché sous-estime **la durée** du cycle plus que son amplitude. Le vrai risque n'est pas l'IA, c'est **Washington** : la seule variable qu'ASML ne contrôle pas, et que le cours n'intègre qu'à moitié.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE MODÉRÉ
Le chiffre d'affaires des systèmes est reconnu à l'**acceptation chez le client** (ou à la livraison pour les modèles éprouvés), selon la norme IFRS 15 / US GAAP ASC 606. Trois points d'attention :
- **Timing des acceptations** : quelques machines EUV (200-400 M€ l'unité) qui glissent d'un trimestre peuvent faire varier le CA de plusieurs centaines de millions ; ASML a déjà géré ses trimestres par le calendrier des livraisons rapides (« fast shipments », CA reporté à l'acceptation)
- **Les nouveaux produits (High-NA)** : le CA n'est reconnu qu'après acceptation complète, ce qui crée des effets de rattrapage
- **Contrats à éléments multiples** : la répartition du prix entre machine, installation, garantie et services est un jugement de la direction

**À surveiller** : l'écart entre machines livrées et machines reconnues en CA, et les mentions de « fast shipments » dans les communiqués.

### Les acomptes clients et le flux de trésorerie — RISQUE MODÉRÉ
Le flux de trésorerie du T3 2026 (11,4 Md€) et celui du T4 2025 (11,0 Md€) sont dopés par les **acomptes** sur des machines livrables en 2027-2028. Les passifs sur contrats (produits constatés d'avance) atteignaient ~19 Md€ fin 2025. Cela ne constitue pas une manipulation, mais :
- le flux de trésorerie disponible n'est **pas représentatif** de la génération de trésorerie normative (il était négatif de 2,6 Md€ au T1 2026)
- en cas de retournement, la **non-reconstitution des acomptes** ferait plonger le flux de trésorerie bien avant le résultat

### Information sectorielle — RISQUE MODÉRÉ
ASML ne publie qu'**un seul segment**. Pas de marge par technologie, pas de rentabilité séparée de la base installée (très margée) et des systèmes neufs. L'investisseur ne peut pas vérifier si la marge record du T3 repose sur les mises à niveau (cycliques) ou sur l'EUV. **La fin de la publication trimestrielle des prises de commandes** (depuis 2026, le carnet n'étant plus publié qu'une fois par an) réduit encore la visibilité.

### Stocks — RISQUE MODÉRÉ
~11,7 Md€ de stocks, soit **près de 4 mois de ventes** et un quart du total de l'actif. Normal pour un fabricant de machines au cycle de production de 12 à 18 mois, mais exposé à des **dépréciations** en cas d'obsolescence (passage du NXE:3800E au 3800F) ou d'interdiction d'exportation (machines destinées à la Chine).

### Parties liées — RISQUE FAIBLE
- **Carl Zeiss SMT** : ASML en détient 24,9 % (mise en équivalence) et finance une partie de sa R&D. Transactions importantes avec un fournisseur exclusif, mais documentées dans les annexes
- **Mistral AI** : ~11 % du capital, investissement de 1,3 Md€ ; ASML siège au comité stratégique. La **réévaluation de ~0,5 Md€** au T3 2026 passe par le compte de résultat : un gain comptable non opérationnel, fondé sur la valorisation d'une société non cotée

### Engagements conditionnels — RISQUE MODÉRÉ
- **Engagements d'achat** auprès des fournisseurs (plusieurs milliards d'euros) pour sécuriser la montée en capacité : rigides en cas de retournement
- **Litiges de propriété intellectuelle** (historiquement avec Nikon, réglés en 2019) : pas de litige majeur en cours identifié
- **Risque réglementaire** : une interdiction de servir la base installée en Chine (MATCH Act) pourrait entraîner des pénalités contractuelles ou des dépréciations de stocks de pièces

### Contrats de location (IFRS 16) — RISQUE FAIBLE
Droits d'utilisation limités (bureaux, entrepôts, véhicules), sans engagement significatif hors bilan.

### Rémunération en actions — RISQUE FAIBLE
Moins de 1 % du CA, dilution inférieure à 0,5 % par an, largement compensée par les rachats. Critères de performance publics (CA, ROAIC, rendement pour l'actionnaire).

### Goodwill et incorporels — RISQUE FAIBLE
Goodwill stable à **4,6 Md€** (Cymer, HMI), soit ~20 % des capitaux propres, sans dépréciation. Incorporels de ~0,6 Md€. Pas de capitalisation agressive de la R&D (passée en charges dans les comptes en US GAAP qui servent à la communication financière).

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** ASML est auditée par KPMG, publie des comptes clairs et un guidage historiquement prudent. Aucune fraude ni anomalie n'est identifiée. Les vrais points de vigilance sont **structurels** : la **volatilité des acomptes** qui flatte le flux de trésorerie, **l'opacité croissante** (un seul segment, plus de commandes publiées) et le **gain Mistral** qui gonfle le résultat du T3. Pour analyser ASML, il faut regarder le **résultat d'exploitation** et la **marge brute hors mises à niveau**, pas le flux de trésorerie trimestriel ni le résultat net.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Christophe Fouquet, classées par importance

### Risques majeurs

**1.** Vous augmentez vos capacités de 30 % en 2027 et étudiez davantage pour 2028, alors que l'histoire du secteur est faite de pénuries suivies de surcapacités. **Quelle part de vos coûts de montée en capacité est réversible** si la demande se retourne en 2028, et quelles clauses protègent ASML en cas d'annulation des réservations 2029-2030 ?

**2.** Le MATCH Act pourrait interdire le DUV immersion **et le service** de votre base installée en Chine. **Quel est l'impact chiffré** sur le CA et la marge d'un tel scénario, et comment gérez-vous vos obligations contractuelles envers les clients chinois dans ce cas ?

**3.** Vous avez cessé de publier vos prises de commandes. **Quel indicateur avancé** les actionnaires doivent-ils suivre désormais pour anticiper un retournement avant qu'il n'apparaisse dans vos ventes ?

### Avantage concurrentiel et stratégie long terme

**4.** La Chine prévoit de produire ~20 machines DUV immersion en 2027. **À quel horizon** une machine chinoise pourrait-elle être compétitive sur les couches critiques de 7 nm, et à quel horizon voyez-vous une EUV chinoise crédible ?

**5.** TSMC ne prévoit l'adoption du High-NA en volume que vers 2030. **Qu'est-ce qui bloque** : le coût par couche, la productivité, l'écosystème des masques ? Quel est votre plan pour convaincre TSMC plus tôt ?

**6.** Les mises à niveau de la base installée ont porté la marge du T3 à 57,5 %. **Quelle part de la hausse de marge 2026 est structurelle** (prix, mix EUV) et quelle part est cyclique (mises à niveau liées à la pénurie) ?

**7.** Le Capital Markets Day de juin 2027 réévaluera vos objectifs 2030. **Est-il raisonnable** de penser que le haut de la fourchette (60 Md€) est désormais un plancher ?

### Allocation du capital

**8.** Vous avez racheté pour 4,1 Md€ d'actions au T3, au plus haut historique du cours. **Selon quels critères de valorisation** pilotez-vous le rythme des rachats, et pourquoi ne pas privilégier un dividende exceptionnel ?

**9.** La participation dans Mistral AI a généré un gain de ~0,5 Md€. **Quelle est la logique stratégique** de long terme de cette participation, envisagez-vous d'investir davantage dans l'IA, et comment éviterez-vous que ces gains comptables brouillent la lecture de vos résultats ?

**10.** Avec ~10,7 Md€ de trésorerie nette et un flux de trésorerie record, **envisagez-vous d'intégrer davantage votre chaîne d'approvisionnement** (au-delà des 24,9 % dans Zeiss SMT) pour sécuriser la montée en capacité ?

### Exécution et chaîne d'approvisionnement

**11.** **Quel est le goulot d'étranglement** de votre montée en capacité 2027-2028 : les optiques Zeiss, les sources EUV, la main-d'œuvre qualifiée, les infrastructures aux Pays-Bas (électricité, logement, recrutement de talents étrangers) ?

**12.** Votre dépendance à des fournisseurs américains vous expose à la pression de Washington. **Avez-vous un plan pour réduire le contenu américain** de vos machines, et à quel horizon ?

### Clients et marchés

**13.** La mémoire représente désormais près de la moitié de vos ventes de systèmes. **Comment évaluez-vous le risque d'une surcapacité de la HBM** en 2027-2028, sachant que la mémoire est historiquement le segment le plus cyclique ?

**14.** Si Intel et Samsung ne parviennent pas à rattraper TSMC dans la fonderie avancée, **comment évolue votre pouvoir de négociation** face à un client quasi unique sur le leading edge ?

### Gouvernance

**15.** Vous avez rejoint le conseil d'administration d'Airbus en octobre 2026, au cœur de la plus forte montée en cadence de l'histoire d'ASML. **Comment garantissez-vous votre disponibilité**, et quel est le plan de succession pour le directoire, dont plusieurs membres sont en poste depuis plus de quinze ans ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Ce qui peut compromettre structurellement le modèle : le cycle, pas la concurrence

Les optimistes confondent **monopole** et **visibilité**. ASML a un monopole technologique, mais elle vend des **biens d'équipement** à une industrie qui investit par vagues. En 2026, toutes les planètes sont alignées : pénurie, IA, mémoire, hausses de prix, mises à niveau. Ce sont **précisément les conditions d'un sommet de cycle**. Le chiffre d'affaires d'ASML a déjà été divisé par près de deux en 2009 (de 3,0 à 1,6 Md€), et le titre a perdu près de 50 % en 2022. Les bénéfices records se paient au multiple le plus bas, pas au plus haut.

### 2. Où se concentrent les revenus — et ce qui se passe si cela change

- **Clients** : TSMC, Samsung et SK Hynix concentrent la grande majorité des ventes EUV. Si un seul d'entre eux décale son plan d'investissement d'un an, c'est plusieurs milliards de CA qui glissent
- **Thème** : l'IA porte l'essentiel de la croissance 2026-2028. Or la demande de calcul pour l'IA est financée par une poignée d'hyperscalers et de laboratoires, de plus en plus par la **dette**. Un ralentissement du financement de l'IA se transmettrait à ASML en 12 à 18 mois
- **Chine** : encore ~20 % des ventes, exposées à une décision politique américaine

### 3. Pourquoi l'avantage concurrentiel est plus fragile qu'il n'y paraît

L'EUV est un monopole, mais **le DUV ne l'est pas**, et il représente encore près de la moitié des ventes de systèmes. La Chine produit ses premières machines DUV immersion, financées sans contrainte de rentabilité. Surtout, le monopole d'ASML repose sur **un fournisseur unique** (Zeiss) et sur des **composants américains** : c'est un monopole sous **tutelle géopolitique**. Washington décide à qui ASML vend, et le gouvernement néerlandais l'a toujours suivi.

### 4. Le concurrent le plus dangereux que les optimistes sous-estiment

**Ce n'est pas Nikon ni Canon : c'est l'État chinois.** Le groupe public Shanghai Aishengna (issu de SMEE et Yuliangsheng) a démarré la production de DUV immersion, avec SMIC, Hua Hong et CXMT comme clients captifs. Pékin n'a pas besoin de rentabilité, seulement d'indépendance. Chaque machine chinoise installée est une machine ASML en moins, **et un parc de service en moins**. À plus long terme, la Chine poursuit des voies alternatives à l'EUV (sources à accélérateur de particules, lithographie par nano-impression de Canon) qui pourraient contourner le verrou optique de Zeiss.

### 5. Les pires décisions d'allocation du capital

- **Mistral AI (1,3 Md€)** : un investissement hors du cœur de métier dans une start-up d'IA générative non rentable, au sommet de l'euphorie. Le gain comptable de 0,5 Md€ embellit le T3, mais repose sur une valorisation privée non vérifiable
- **Rachats au plus haut** : 4,1 Md€ rachetés au T3 2026, quand le titre était proche de ses records, après en avoir très peu racheté en 2023-2024 quand il était deux fois moins cher
- **Montée en capacité de +60 %** décidée au sommet du cycle

### 6. Parties liées, comptabilité, incitations

Pas de fraude. Mais : **fin de la publication trimestrielle des commandes** depuis 2026 (décidée en janvier 2025, la dernière publication étant un record),  **un seul segment** publié, un **flux de trésorerie gonflé par les acomptes** et un **résultat embelli par un gain Mistral**. Prises ensemble, ces décisions réduisent la capacité des investisseurs à détecter un retournement. La rémunération variable fondée sur le CA et le rendement pour l'actionnaire incite à **maximiser les volumes** dans le cycle haut.

### 7. Les hypothèses qui doivent se vérifier pour justifier le cours

À ~1 528 €, le marché suppose :
1. Une croissance du BPA de ~30 % en 2027 et ~20 % en 2028, **sans retournement de cycle avant 2029**
2. Une marge brute maintenue au-dessus de 56 %, donc des mises à niveau et des hausses de prix durables
3. Aucune perte supplémentaire en Chine (MATCH Act non appliqué ou contourné)
4. Une adoption du High-NA dans les délais (Samsung 2028, TSMC 2030)
5. Un multiple d'environ 28-30x maintenu sur des bénéfices de haut de cycle

### 8. Si la croissance déçoit de 20 à 30 %

Si le BPA 2027 ressort à **~40-44 €** au lieu de ~55 € (soit un BPA stable par rapport à 2026, au lieu de +30 %), et que le marché applique un multiple de cycle mûr (25x) : cours théorique de **1 000 à 1 100 €**, soit **-28 à -35 %**. En cas de vrai retournement (BPA en baisse de 20 % et multiple de 22x), le titre retomberait vers **750 €**, soit **-50 %**, comme en 2022.

### 9. Le scénario unique qui pourrait nuire durablement à l'entreprise

**Un découplage technologique sino-occidental total.** Le MATCH Act est voté, ASML perd le DUV et le service en Chine (~20 % des ventes et une part importante de sa base installée, la plus rentable), et la Chine, privée de toute alternative, accélère massivement sa propre filière. En dix ans, l'industrie mondiale se scinde en deux écosystèmes, et ASML perd définitivement l'accès au premier marché mondial des semi-conducteurs. **Plausibilité** : élevée pour le volet réglementaire (30 à 40 % d'ici 2028, le texte bénéficiant d'un soutien bipartisan), plus faible pour la perte durable de compétitivité (la Chine resterait des années derrière sur l'EUV).

### Conclusion short
ASML est **la meilleure entreprise du secteur**, mais **pas un titre sans risque**. Le marché paie ~36x des bénéfices 2026 de haut de cycle, gonflés par des mises à niveau temporaires, un gain non opérationnel et une pénurie par définition passagère, alors que l'entreprise a réduit sa transparence au moment même où le cycle devient plus difficile à lire. **Le monopole protège l'entreprise, il ne protège pas l'actionnaire du cycle.**`,
  },
];

export default { ...meta, modules };
