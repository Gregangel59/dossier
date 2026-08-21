// ============================================================
//  DOSSIER : Broadcom Inc. (AVGO)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "avgo",                     // identifiant d'URL : /dossier/avgo
  ticker: "AVGO",
  name: "Broadcom Inc.",
  exchange: "Nasdaq",
  sector: "Semi-conducteurs & logiciels d'infrastructure",
  initials: "AVGO",                 // affiché dans la pastille
  tagline: "Champion mondial des accélérateurs IA sur mesure (XPU) et de la mise en réseau Ethernet, adossé à une rente logicielle VMware.",
  riskScore: 64,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "avgo.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Broadcom est un **concepteur fabless de semi-conducteurs doublé d'un éditeur de logiciels d'infrastructure**, coté au Nasdaq et basé à Palo Alto. Le groupe a réalisé **64 milliards $ de chiffre d'affaires sur l'exercice 2025** (clos le 2 novembre 2025), en hausse de 24 %, et affiche un CA glissant sur douze mois de **~75,5 milliards $** à la mi-2026.

Le modèle repose sur deux moteurs très différents, réunis par une même logique : **détenir des positions techniquement inattaquables sur des marchés critiques, puis en extraire une marge maximale**.

- **Semiconductor Solutions (~68 % du CA FY2025, 37 Mds$)** — conception de puces sur mesure et de composants réseau. Le groupe ne possède pas de fonderie : il conçoit, fait fabriquer (TSMC essentiellement) et assemble.
- **Infrastructure Software (~42 % du CA FY2025, 27 Mds$)** — logiciels d'infrastructure vendus par abonnement, dominés par VMware Cloud Foundation. Marge brute de **93 %**, marge opérationnelle passée de 67 % à **~79 %** en un an.

La bascule stratégique du groupe est l'**IA**. Les revenus semi-conducteurs liés à l'IA sont passés de 20 Mds$ sur FY2025 à une prévision d'environ **56 Mds$ sur FY2026**, avec un objectif réaffirmé de **plus de 100 Mds$ sur FY2027**.

## Principaux produits et services

**Côté silicium :**
- **XPU (accélérateurs IA sur mesure)** — puces co-conçues pour un client unique et sa charge de travail précise. C'est le cœur de la thèse : les TPU de Google, les MTIA de Meta, les accélérateurs d'OpenAI et d'Anthropic.
- **Mise en réseau IA** — commutateurs Ethernet Tomahawk (le Tomahawk 6 à 102,4 Tb/s), routeurs de tissu Jericho 3 et 4, DSP 1,6 Tb/s, optique co-packagée (CPO), lasers, commutateurs PCIe. Ce pôle représentait **près de 40 % du CA IA au T2 2026**.
- **Semi-conducteurs hors IA** — haut débit, sans-fil (filtres FBAR pour smartphones), stockage serveur, réseau d'entreprise, industriel. 4,2 Mds$ au T2 2026, en reprise lente (+6 %).

**Côté logiciel :** VMware Cloud Foundation (VCF 9.0), logiciels mainframe, cybersécurité (héritage Symantec), réseau applicatif et sécurité, gestion de SAN Fibre Channel.

## Clients, fournisseurs, concurrents

**Clients.** Concentration extrême assumée : le 10-Q du T1 2026 indique que **les cinq premiers clients finaux représentent environ 50 % du CA**, et que les distributeurs pèsent 55 % des ventes. Six clients XPU structurent le récit IA : **Google** (accord étendu jusqu'en 2031), **Meta** (MTIA), **Anthropic**, **OpenAI**, plus deux clients non nommés ayant déjà passé 6 Mds$ de commandes. Côté logiciel, la cible revendiquée est le « top 10 000 » des grands comptes mondiaux.

**Fournisseurs.** **TSMC** pour la gravure avancée et l'assemblage CoWoS, **SK hynix / Samsung / Micron** pour la HBM, fabricants de substrats avancés. Le management affirme avoir **sécurisé sa capacité pour 2026 et 2027**, et travaille sur 2028-2029.

**Concurrents.** **NVIDIA** (GPU généralistes), **Marvell** (ASIC sur mesure — devenu frontal en août 2026), **Alchip, GUC, MediaTek** (ASIC asiatiques), **Astera Labs et Credo** (interconnexion), **Cisco, Arista et NVIDIA** (Ethernet de data center), **Nutanix, Microsoft, Red Hat** (virtualisation).

## Modalités contractuelles

Les programmes XPU reposent sur des **engagements pluriannuels chiffrés en gigawatts de capacité de calcul** plutôt qu'en unités : plus de 1 GW pour Anthropic en 2026 puis 5 GW à partir de 2027, 1,3 GW pour OpenAI en 2027 dans un cadre de 10 GW d'ici 2029, 3 GW pour Meta d'ici fin 2028. Le carnet de commandes IA dépassait **73 Mds$ sur dix-huit mois** fin 2025, et les seules prises de commandes IA du T2 2026 ont dépassé **30 Mds$** pour 10,8 Mds$ livrés.

Côté logiciel, la conversion des licences perpétuelles VMware en **abonnements pluriannuels** a mécaniquement fait monter la marge et la visibilité — au prix d'une hausse de facture parfois brutale pour les clients.

> **Point de vigilance méthodologique** : le 10-Q signale que certains clients IA cherchent désormais à **louer** les baies XPU plutôt qu'à les acheter, avec des montages de financement alternatifs ou des paiements différés. C'est une inflexion majeure du modèle de revenus, encore peu reflétée dans les multiples.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Broadcom dans la chaîne de valeur

Broadcom occupe une position de **concepteur-intégrateur sans usine (fabless)**, situé entre les outils de conception et les fonderies en amont, et les exploitants de data centers en aval. Sa valeur ajoutée n'est ni la fabrication ni l'exploitation : c'est la **propriété intellectuelle et l'orchestration industrielle**.

### Amont — Outils, IP et fabrication

**Conception et propriété intellectuelle :**
- **Synopsys, Cadence** — outils d'automatisation de la conception électronique (EDA)
- **Arm** — jeux d'instructions et blocs IP sous licence
- Portefeuille propriétaire : SerDes, packaging avancé, blocs mémoire

**Fabrication et conditionnement — le goulot d'étranglement :**
- **TSMC** — fondeur principal (nœuds 3 nm et 2 nm), et surtout capacité d'assemblage avancé **CoWoS**, ressource la plus disputée du secteur
- **ASE, Amkor** — assemblage et test sous-traités
- **SK hynix, Samsung, Micron** — mémoire à haute bande passante (HBM), intégrée aux XPU
- **Ibiden, Shinko** — substrats organiques avancés

**Composants optiques :** lasers EML et CW, modules optiques — Broadcom est intégré verticalement sur une partie de cette chaîne, ce qui constitue un avantage rare.

---

### Broadcom — Conception, intégration et logiciel

**Silicium sur mesure** : co-conception d'un XPU avec le client (18 à 24 mois de cycle), puis pilotage de la production chez TSMC. Broadcom sert de **conduit technique et industriel** entre le concepteur de modèles et la fonderie.

**Mise en réseau** : commutateurs Tomahawk, routeurs Jericho, DSP, CPO — la « plomberie » sans laquelle les grappes de puces ne fonctionnent pas.

**Logiciel** : VMware Cloud Foundation, mainframe, sécurité — vendu directement aux grands comptes, sans intermédiaire matériel.

---

### Aval — Clients finaux

**Hyperscalers et laboratoires de modèles :**
- **Alphabet / Google** — TPU (huitième génération), partenariat prolongé jusqu'en 2031 ; capex annoncé de 175 à 185 Mds$ pour 2026
- **Meta** — accélérateurs MTIA, 3 GW planifiés d'ici fin 2028
- **Anthropic** — accès à du calcul TPU via Google et Broadcom, plus de 1 GW en 2026, 5 GW supplémentaires à partir de 2027
- **OpenAI** — premier accélérateur d'inférence co-conçu, production visée fin 2026
- **Deux clients non identifiés** — 6 Mds$ de bons de commande reçus

**Entreprises et opérateurs (côté logiciel)** : banques, télécoms, administrations — Standard Chartered a par exemple retenu Broadcom en juillet 2026 pour ses services bancaires critiques.

**Marchés hors IA** : équipementiers télécoms, fabricants de smartphones, constructeurs de baies de stockage.

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                    BROADCOM                    AVAL
Synopsys / Cadence       Conception XPU              Google (TPU)
Arm (IP)                 Réseau Tomahawk/Jericho     Meta (MTIA)
TSMC (3 nm / CoWoS)  →   Optique & DSP           →   Anthropic / OpenAI
SK hynix (HBM)           VMware Cloud Foundation     2 clients non nommés
Ibiden (substrats)       (fabless : zéro usine)      Grands comptes VMware
\`\`\`

### Une nouveauté qui change la nature de la chaîne

Depuis 2026, Broadcom ne se contente plus de vendre du silicium : le groupe monte une **plateforme AI XPU avec Apollo, Blackstone et d'autres investisseurs** visant plus de 20 GW de capacité de calcul d'ici 2028, dont une première tranche de 35 Mds$ portée par Apollo. En août 2026, Bloomberg a rapporté des discussions pour lever **plus de 60 Mds$ de dette** au bénéfice d'Anthropic et d'autres clients.

**Traduction** : Broadcom devient partie prenante du **financement** de ses propres clients. C'est un levier de croissance puissant — et le risque le plus mal compris du dossier.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

### Structure par segment — exercice 2025 et trajectoire 2026

| Segment | FY2025 | Croissance | Marge brute | Dynamique |
|---|---|---|---|---|
| Semiconductor Solutions | 37 Mds$ | +21 % | ~67 % | Portée par l'IA, hors IA en reprise lente |
| — dont IA | 20 Mds$ | +65 % | Diluée | ~56 Mds$ attendus en FY2026 |
| — dont hors IA | ~17 Mds$ | ~0 % | Élevée | Creux cyclique, reprise en U |
| Infrastructure Software | 27 Mds$ | +26 % | 93 % | VMware Cloud Foundation, abonnements |

---

### Progression trimestrielle de l'exercice 2026

| Trimestre | CA total | Croissance | CA IA | Croissance IA | Marge opér. |
|---|---|---|---|---|---|
| T1 (1er févr. 2026) | 19,3 Mds$ | +29 % | 8,4 Mds$ | +106 % | ~66 % |
| T2 (3 mai 2026) | 22,19 Mds$ | +48 % | 10,8 Mds$ | +143 % | 67,3 % |
| T3E (2 août 2026) | ~29,4 Mds$ | +84 % | 16,0 Mds$ | >+200 % | ~67 % |

Le T3 sera publié le **2 septembre 2026**. Le consensus vise un BPA non-GAAP d'environ **3,22 $**, contre 1,69 $ un an plus tôt.

---

### Décomposition du revenu IA

Le CA IA se scinde en deux briques que le marché confond souvent :

- **XPU (accélérateurs sur mesure)** — environ 60 % du CA IA au T2 2026. Marge brute structurellement plus faible qu'un composant catalogue : ce sont des puces spécifiques, produites en volume pour un client unique.
- **Mise en réseau IA** — près de 40 % au T2 2026, part que le management anticipe voir revenir vers 30 % à mesure que les XPU montent en cadence. Marges plus élevées, position quasi monopolistique sur le Tomahawk 6 et les DSP 1,6 Tb/s.

Cette bascule de mix explique intégralement l'érosion de la marge brute : **77,1 % au T2 2026, contre 79,4 % un an plus tôt (-230 pb)**, avec une prévision à **~74 % au T3**. Le management insiste — à juste titre — sur le fait qu'il s'agit d'un effet de composition, non d'une dégradation structurelle du pouvoir de fixation des prix.

---

### Répartition géographique et canaux

Broadcom ne publie plus de ventilation géographique fine par pays de destination finale, la facturation transitant massivement par des sous-traitants asiatiques. Deux indicateurs comptent davantage :

- **Distributeurs : 55 % du CA** au T1 2026
- **Cinq premiers clients finaux : ~50 % du CA**

C'est le fait structurant du dossier : Broadcom est une entreprise de 75 Mds$ dont la moitié du chiffre dépend de cinq acheteurs.

---

### Profil de marge et rentabilité

- **Marge brute** : 76,3 % (glissant), en repli sous l'effet du mix XPU
- **Marge opérationnelle non-GAAP** : record à 67,3 % au T2 2026 — le levier opérationnel joue à plein, les charges d'exploitation ne suivant pas la croissance du CA
- **EBITDA ajusté** : 15,2 Mds$ au T2 (69 % du CA), 68 % attendus au T3
- **Free cash-flow** : 10,26 Mds$ au T2 (46 % du CA) ; **32,8 Mds$ sur douze mois glissants** pour seulement 860 M$ de capex
- **ROE 37,3 % · ROIC 24,2 %**

**Lecture** : le groupe est une machine à convertir le chiffre d'affaires en trésorerie, avec une intensité capitalistique quasi nulle. La question n'est pas la qualité du modèle — elle est excellente — mais **la durabilité de la demande et la solidité de ceux qui la financent**.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Coûts de co-conception — le moat le plus réel
Un XPU n'est pas un produit qu'on achète sur étagère : c'est un projet de **18 à 24 mois** mené conjointement avec le client, où Broadcom apporte ses blocs SerDes, son expertise de packaging avancé et son accès privilégié aux créneaux de production TSMC. Changer de partenaire en cours de génération revient à repartir de zéro. C'est ce qui explique dix ans de collaboration ininterrompue avec Google sur les TPU.

**Mais attention à ne pas surestimer ce fossé** : il protège une **génération de puce**, pas la génération suivante. L'accord Google-Marvell d'août 2026 en est la démonstration.

### 2. Leadership Ethernet — le moat le plus sous-estimé
Le Tomahawk 6 (102,4 Tb/s) est, selon le management, **le seul commutateur de cette capacité sur le marché**. Sur les DSP 1,6 Tb/s, l'optique co-packagée, les lasers CW et EML, Broadcom se décrit comme « standard de fait ». Or plus les grappes IA s'étendent — jusqu'à relier plusieurs data centers entre eux —, plus la valeur migre vers l'interconnexion. Ce pôle a pesé près de 40 % du CA IA au T2 2026 et sert **aussi bien les grappes XPU que les grappes NVIDIA**.

C'est le seul segment où Broadcom encaisse quel que soit le vainqueur de la guerre des accélérateurs.

### 3. La rente VMware — moat de captivité
Après le rachat à 61 Mds$ fin 2023, Broadcom a converti les licences perpétuelles en abonnements et concentré l'effort commercial sur les 10 000 plus gros comptes, dont plus de 90 % ont migré vers VCF. Résultat : marge brute 93 %, marge opérationnelle passée de ~13-22 % avant rachat à **79 %**. Les clients pestent publiquement contre les hausses tarifaires — mais migrent rarement, parce que remplacer une couche de virtualisation d'entreprise est un chantier pluriannuel.

Ce moat est **réel et rentable**, mais il repose sur la captivité, pas sur la préférence. Il s'érode par le bas, lentement, à chaque cycle de renouvellement.

### 4. Accès à la capacité — moat conjoncturel
Le management affirme avoir sécurisé wafers avancés, HBM et substrats **pour 2026 et 2027**. Dans un marché où la capacité CoWoS est le facteur limitant, réserver plusieurs années à l'avance est un avantage tangible sur des concurrents plus petits. Mais c'est un avantage **loué, pas possédé** : il dépend entièrement de TSMC.

### 5. Discipline d'allocation — moat de gouvernance
Hock Tan applique depuis 2006 une méthode constante : acquérir des franchises à position dominante, tailler dans les coûts, concentrer l'effort commercial sur les gros comptes, refuser les guerres de prix. Sur vingt ans, cela a produit une marge opérationnelle non-GAAP de 67 % — un chiffre presque anormal dans le semi-conducteur.

## Positionnement vs concurrence

| Critère | Broadcom | NVIDIA | Marvell |
|---|---|---|---|
| Modèle de puce IA | Sur mesure (XPU) | Généraliste (GPU) | Sur mesure (ASIC) |
| Échelle CA IA | ~56 Mds$ (FY26E) | Nettement supérieure | Nettement inférieure |
| Position réseau | Leader Ethernet | InfiniBand + Ethernet | Optique / DSP |
| Rente logicielle | VMware, 93 % de marge | CUDA (écosystème) | Aucune |
| Dépendance clients | ~50 % sur 5 clients | Élevée aussi | Concentrée |
| Marge opér. non-GAAP | ~67 % | Très élevée | Nettement inférieure |

## Pouvoir de négociation

- **Vis-à-vis des clients IA** : **en érosion**. Un client de la taille de Google peut, et vient de le faire, ouvrir un second fournisseur. Hock Tan l'a lui-même anticipé en mai : « nous nous attendons pleinement à une certaine diversité de sources chez eux ». Le pouvoir de fixation des prix par gigawatt reste stable selon le management, mais la trajectoire est claire.
- **Vis-à-vis des clients VMware** : **très élevé** à court terme, décroissant à chaque renouvellement.
- **Vis-à-vis de TSMC** : **modéré**. Broadcom est un client majeur, mais il n'est pas le seul à réserver du CoWoS, et il n'a aucune alternative crédible.
- **Vis-à-vis des fournisseurs de HBM** : **modéré**, marché en tension structurelle.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — silicium et infrastructure IA (août 2026)

| Société | Code Bloomberg | Capitalisation | EV/CA | PER (TTM) | PER (fwd) | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Broadcom** | **AVGO US** | **~1,73 T$** | **~24x** | **~60x** | **~20-24x** | **0,72 %** | **~25 %** |
| NVIDIA | NVDA US | ~4,5 T$ | ~20x | ~45x | ~30x | ~0,02 % | ~70 % |
| Marvell | MRVL US | ~200 Mds$ | ~24x | n.s. | ~30x | ~0,3 % | ~2 % |
| AMD | AMD US | ~840 Mds$ | ~25x | Élevé | ~45x | 0 % | ~5 % |
| Qualcomm | QCOM US | ~175 Mds$ | ~4x | ~17x | ~14x | ~2,3 % | ~40 % |
| Arista Networks | ANET US | ~180 Mds$ | ~17x | ~50x | ~40x | 0 % | ~30 % |

*Ordres de grandeur reconstitués à partir des cotations et publications disponibles au 21 août 2026. À affiner sur filings SEC directs avant tout usage décisionnel.*

---

### Analyse comparative

**NVIDIA — le géant que Broadcom ne cherche pas à battre frontalement**
Le segment data center de NVIDIA a généré 75,2 Mds$ sur un seul trimestre fiscal, soit environ sept fois le CA IA trimestriel de Broadcom. Mais les deux entreprises ne vendent pas la même chose : NVIDIA vend de la **flexibilité** (un GPU exécute n'importe quel modèle), Broadcom vend de l'**optimisation** (un XPU exécute une charge précise pour 30 à 50 % de coût total en moins à l'échelle hyperscaler). Broadcom croît plus vite en pourcentage, depuis une base bien plus petite. Point crucial souvent oublié : **Broadcom fournit aussi le réseau des grappes NVIDIA**.

**Marvell — le concurrent devenu frontal en août 2026**
Longtemps le challenger poli, Marvell a signé le 29 juillet un accord commercial avec Google assorti d'un **warrant de 12,2 Mds$** (58 970 907 actions à 206,58 $), dont les tranches ne se débloquent qu'au rythme de 500 M$ d'achats de silicium — soit jusqu'à ~120 Mds$ de CA cumulé d'ici l'exercice 2033 si tout est atteint. Le périmètre couvre les accélérateurs d'inférence et les contrôleurs qui **entourent** le TPU, pas le TPU cœur (analyse JPMorgan). L'action Marvell a bondi de ~10 %, Broadcom a cédé 4,61 % et **87 Mds$ de capitalisation** en une séance. Macquarie anticipe une part Broadcom du custom Google en repli depuis ~95 % en 2026.

**Arista Networks — le rival sur la brique la plus rentable**
Sur l'Ethernet de data center, Arista est le concurrent le plus sérieux — et ironiquement un **client** de Broadcom sur les puces Tomahawk. La relation ambivalente illustre bien la position de Broadcom : fournisseur d'armes autant que combattant.

**AMD et Qualcomm — hors du champ direct**
AMD attaque le GPU IA par le prix ; Qualcomm reste centré sur le mobile et tente une percée data center. Ni l'un ni l'autre ne concurrence sérieusement le modèle XPU sur mesure aujourd'hui.

---

### Le ratio qui compte : EV/CA rapporté à la durabilité de la demande

À ~24x le chiffre d'affaires, Broadcom se paie au même niveau que NVIDIA et Marvell. La différence tient à la **structure du carnet** : Broadcom vend des programmes pluriannuels contractualisés en gigawatts, ce qui donne une visibilité supérieure — mais auprès d'un nombre de contreparties bien plus restreint, et dont plusieurs (Anthropic, OpenAI) ne sont **pas encore autofinancées**. Le multiple ne rémunère donc pas seulement la croissance : il rémunère un **pari sur la solvabilité future des clients**.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (clos le 3 mai 2026) — analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | 22,19 Mds$ | ~15,0 Mds$ | ~22,0 Mds$ | **Dépassé** |
| Croissance publiée | +48 % | +20 % | — | +15 % en séquentiel |
| CA IA | 10,8 Mds$ | 4,4 Mds$ | ~10,7 Mds$ | **+143 %** |
| BPA non-GAAP | 2,44 $ | 1,58 $ | 2,39 $ | **+0,05 $** |
| EBITDA ajusté | 15,2 Mds$ | 10,0 Mds$ | — | **69 % du CA** |
| Free cash-flow | 10,26 Mds$ | — | — | **46 % du CA** |

**Broadcom a dépassé le consensus sur le chiffre d'affaires et sur le bénéfice — et le titre a chuté de 12,6 % le lendemain.** C'est l'information la plus importante du trimestre.

---

### Facteurs clés par segment

- **Semi-conducteurs : 15,0 Mds$ (+79 %)** — moteur unique de la surperformance
- **IA : 10,8 Mds$ (+143 %)**, dont ~60 % de XPU et ~40 % de réseau
- **Hors IA : 4,2 Mds$ (+6 %)** — prises de commandes supérieures à 6 Mds$, signal d'une reprise cyclique en cours mais lente
- **Logiciel : 7,2 Mds$ (+9 %)** — décélération nette ; marge brute 93 %, marge opérationnelle ~79 % (+310 pb)

---

### Évolution des marges

- **Marge brute non-GAAP : 77,1 %**, en repli de **230 pb** sur un an — effet mécanique du poids croissant des XPU, moins margés que les composants catalogue
- **Marge opérationnelle : record à 67,3 %** — le levier opérationnel compense largement l'érosion brute
- **Prévision T3 : marge brute ~74 %**, marge opérationnelle stable à 67 %

Le message du management est cohérent : la marge brute baisse, la marge opérationnelle tient, et les **dollars de profit explosent**. C'est arithmétiquement vrai. Cela reste une dégradation de la qualité du chiffre d'affaires.

---

### Perspectives et guidance

- **T3 2026 (publication le 2 septembre 2026)** : CA ~29,4 Mds$ (+84 %), IA 16,0 Mds$ (+200 %), logiciel ~8,9 Mds$ (+31 %), EBITDA ajusté ~68 % du CA
- **FY2026** : CA IA d'environ 56 Mds$, en hausse de ~180 %
- **FY2027** : objectif IA **maintenu** à « plus de 100 Mds$ » — c'est précisément ce refus de relever la cible qui a déclenché la sanction boursière, le consensus travaillant déjà sur ~120 Mds$
- **2027** : ~10 GW de livraisons XPU planifiées, concentrées sur le second semestre ; 2028 annoncé « substantiellement supérieur »
- Taux d'impôt non-GAAP attendu à ~16 %, effet de l'impôt minimum mondial

---

### Signaux d'alerte au bilan

- **Trésorerie : 19,6 Mds$** en fin de trimestre, contre 14,2 Mds$ au trimestre précédent
- **Dette / capitaux propres : 0,74** — soutenable, mais l'histoire va changer : Broadcom négocierait **plus de 60 Mds$ de dette supplémentaire** pour un montage IA bénéficiant à Anthropic et à d'autres
- **Engagements de financement contingents** : Bank of America a modélisé jusqu'à **~370 Mds$ d'exposition** liée à la plateforme AI XPU. Chiffre à manier avec précaution — c'est un modèle, pas une donnée publiée — mais il pointe le bon endroit
- **Capex quasi nul (860 M$ sur douze mois)** — le modèle fabless reste extraordinairement peu capitalistique

---

### Réaction du marché

Le titre a perdu **12,6 % le 3 juin 2026** malgré un double dépassement, puis a oscillé entre 400 et 430 $ durant l'été avant de retomber à **~367 $ le 21 août**, soit **-26 % depuis le sommet historique de clôture (480,77 $ le 2 juin)**. Deux catalyseurs baissiers en août : l'accord Google-Marvell du 19 août et l'inquiétude croissante sur les montages de financement.

**Ce que cela indique** : le cours n'intègre plus une simple exécution, il intègre une **accélération permanente**. Un dépassement conforme est désormais lu comme une déception. C'est la définition d'une valorisation tendue.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Évolution du ton — 2024 à 2026

**2024 — Intégration et promesse.** Le discours porte sur l'absorption de VMware et l'amorce du récit IA. Hock Tan parle alors de « quelques clients hyperscale », sans chiffrer d'objectif pluriannuel. Ton mesuré, presque défensif face aux critiques sur les hausses tarifaires VMware.

**2025 — Chiffrage et montée en puissance.** Le CA IA passe de 4,1 Mds$ au T1 à 6,5 Mds$ au T4. Tan introduit la métrique du **gigawatt** et annonce une « ligne de mire » vers plus de 100 Mds$ de CA IA en 2027, adossée à un carnet de 73 Mds$. Le conseil prolonge son mandat **jusqu'en 2030 au moins**. Formule marquante sur le reste du marché : l'IA « aspire l'oxygène » des autres budgets informatiques.

**2026 — Triomphe et refus de surpromettre.** Au T2, Tan qualifie la demande d'« **tout simplement insatiable** ». Mais il **refuse de relever** l'objectif 2027 au-delà de 100 Mds$, alors même qu'il porte la capacité livrable à plus de 10 GW. Il annonce aussi un recentrage : Broadcom vendra « des puces seulement », plutôt que des systèmes IA intégrés complets.

Ce refus de relever une cible que tout le monde attendait supérieure est **l'événement de communication de l'année**. Deux lectures possibles, et le marché a choisi la mauvaise.

---

### Priorités répétées du management

**1. Le gigawatt comme unité de compte.** Tan a substitué au vocabulaire du semi-conducteur (unités, wafers, ASP) celui de l'énergie. C'est habile : cela déplace le débat de la part de marché vers la capacité disponible, terrain sur lequel Broadcom est en position de force.

**2. La diversification client, martelée trimestre après trimestre.** Google, Meta, Anthropic, OpenAI, plus deux clients non nommés avec 6 Mds$ de commandes. Le message implicite : « nous ne sommes plus le sous-traitant de Google ».

**3. La sécurisation de l'approvisionnement.** Tan répète être « très à l'aise » sur 2026 et 2027, et travailler sur 2028-2029. Dans un secteur où la capacité CoWoS est le facteur limitant, c'est un argument de crédibilité déterminant.

**4. La défense de la marge brute.** À chaque appel, la même explication : le repli est un **effet de mix**, non structurel. C'est exact, et cela reste répété avec une insistance qui trahit la sensibilité du sujet.

**5. Le levier opérationnel.** « Croissance du profit d'exploitation sans hausse des charges d'exploitation » — la signature Hock Tan depuis vingt ans.

---

### Analyse du sentiment

- **Confiance** : très élevée, mais **calibrée**. Tan ne surpromet pas — il a explicitement refusé de le faire au T2 2026. C'est une différence notable avec la plupart des dirigeants du secteur.
- **Transparence sélective** : excellente sur la demande et la capacité ; **délibérément floue** sur l'identité des deux derniers clients XPU, sur la structure exacte des montages de financement Apollo/Blackstone, et sur la répartition du CA par client.
- **Anticipation des mauvaises nouvelles** : Tan a lui-même prévenu en mai que Google diversifierait ses sources. Trois mois plus tard, l'accord Marvell tombe. Le management avait raison ; le marché ne l'avait pas écouté.
- **Sujet évité** : la **qualité de crédit des clients**. Lorsque la question de la solvabilité des laboratoires de modèles est posée, la réponse porte systématiquement sur la demande, jamais sur le risque de contrepartie.

> **À lire entre les lignes** : le passage de « systèmes intégrés » à « puces seulement » n'a été ni expliqué ni discuté longuement. C'est pourtant une révision de périmètre significative — moins de CA par gigawatt, mais aussi moins de capital immobilisé et moins de risque d'exécution. Le management a fait un choix de prudence qu'il n'a pas vendu comme tel.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Hock E. Tan — Président et Directeur Général depuis mars 2006

**Formation** : ingénierie mécanique et MBA au MIT. Passages par General Motors, PepsiCo, puis direction d'Integrated Circuit Systems (1999-2005) et présidence d'Integrated Device Technology.

**Bilan chiffrable** : c'est l'un des track records d'allocation de capital les plus documentés de la tech américaine. Une série d'acquisitions transformatrices, toutes suivies du même protocole — couper les coûts, recentrer sur les grands comptes, monter les prix, refuser les segments à faible marge :

| Opération | Année | Montant | Résultat |
|---|---|---|---|
| LSI Corporation | 2014 | 6,6 Mds$ | Intégrée, relutive |
| Broadcom Corporation | 2016 | 37 Mds$ | Change le nom du groupe |
| Brocade | 2017 | 5,9 Mds$ | SAN Fibre Channel, rente |
| CA Technologies | 2018 | 18,9 Mds$ | Entrée dans le logiciel |
| Symantec (entreprise) | 2019 | 10,7 Mds$ | Cybersécurité grands comptes |
| VMware | 2023 | ~61 Mds$ | Marge opér. 13-22 % → 79 % |

**L'échec instructif** : la tentative hostile sur Qualcomm (117 Mds$, 2018) a été bloquée par l'administration américaine pour raisons de sécurité nationale. Tan a abandonné sans surenchérir — cohérent avec sa discipline de prix.

**Ancienneté** : vingt ans à la tête du groupe. Il s'est engagé auprès du conseil à rester **jusqu'en 2030 au moins**.

---

### Alignement financier — l'aspect le plus discuté

La rémunération de Hock Tan pour l'exercice 2025 s'est élevée à **205,3 M$**, dont **202,4 M$ en actions** et 1,2 M$ de salaire fixe. À comparer aux 2,63 M$ de 2024, exercice sans attribution d'actions — la comparaison brute est donc trompeuse, l'attribution étant pluriannuelle.

La structure de l'attribution de septembre 2025 mérite d'être lue attentivement : **610 521 actions de performance**, avec un mécanisme à seuils sur le CA IA réalisé sur quatre trimestres consécutifs entre les exercices 2028 et 2030 :

- **Moins de 60 Mds$** → l'intégralité est perdue
- **90 Mds$** → attribution à la cible (~205 M$ au cours actuel)
- **105 Mds$** → 200 % de la cible
- **Plus de 120 Mds$** → 300 % de la cible (~617 M$ au cours actuel)

Tan s'est engagé à conserver les titres non transférables jusqu'au 3 novembre 2030.

**Lecture** : l'alignement sur la trajectoire IA est total et le risque de perte intégrale est réel. C'est la meilleure et la pire des choses — cela garantit l'engagement, mais **incite structurellement à maximiser le CA IA déclaré**, y compris via des montages de financement qui déplacent le risque hors du compte de résultat.

---

### Changement de direction financière

**Kirsten Spears**, directrice financière depuis 2021 et voix de la discipline de marge lors des conférences, part à la retraite. **Amie Thuener** lui succède. Une transition de CFO au moment précis où le groupe monte des véhicules de financement de plusieurs dizaines de milliards mérite d'être suivie de près — sans y voir de signal négatif en soi.

---

### Allocation du capital — historique récent

| Indicateur | FY2023 | FY2024 | FY2025 | Glissant 2026 |
|---|---|---|---|---|
| Marge opér. non-GAAP | ~62 % | ~62 % | ~65 % | 67 % |
| Dividende/action | ~1,84 $ | ~2,36 $ | 2,36 $ | 2,60 $ |
| ROE | Élevé | Élevé | ~35 % | 37,3 % |
| Free cash-flow | ~17,6 Mds$ | ~19,4 Mds$ | ~26 Mds$ | 32,8 Mds$ |

**Tendance** : progression continue de la rentabilité et du FCF, dividende relevé de 10 % pour l'exercice 2026, environ 27 Mds$ restitués aux actionnaires sur l'année civile 2025 entre dividendes et rachats.

---

### Signaux d'alerte

- **Rémunération** : 205,3 M$ sur un exercice place Tan parmi les dirigeants les mieux payés au monde. La structure est défendable ; le montant absolu suscitera des débats de gouvernance récurrents.
- **Dépendance à une personne** : après vingt ans, la méthode Hock Tan **est** le modèle Broadcom. Aucun plan de succession public n'a été détaillé au-delà de 2030.
- **Modèle promotionnel maîtrisé** : contrairement à beaucoup de pairs, Tan sous-promet plutôt qu'il ne surpromet. C'est à porter à son crédit.
- **Zone d'ombre** : les véhicules de financement montés avec Apollo et Blackstone, et les discussions sur plus de 60 Mds$ de dette, sont **structurellement peu lisibles** depuis les états financiers publiés.
- **Type de dirigeant** : allocateur de capital de très haut niveau, pas un technologue. À ce stade du cycle IA — où la question est de savoir qui finance la demande —, c'est probablement le bon profil.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours

### Contexte
Le titre a été divisé par dix (split 10 pour 1) en juillet 2024. Il a progressé d'environ **52 % sur 2025**, atteint un sommet historique de clôture à **480,77 $ le 2 juin 2026** (495,00 $ en séance le 3 juin), avant de retomber à **~367 $ le 21 août 2026**, soit un repli de ~26 % depuis le point haut. Le bêta ressort à 1,47, la fourchette 52 semaines à **281,87 – 495,00 $**.

### Hausses significatives

**Septembre 2025 — Le sixième client.** L'annonce d'une commande de 10 Mds$ auprès d'un nouveau client — rapidement identifié comme OpenAI — déclenche un relèvement massif des objectifs. Le marché comprend que Broadcom n'est plus « le sous-traitant de Google ».

**Décembre 2025 — Résultats FY2025 et carnet de 73 Mds$.** CA annuel de 64 Mds$ (+24 %), CA IA de 20 Mds$ (+65 %), dividende relevé de 10 %. La révélation d'un carnet IA supérieur à 73 Mds$ sur dix-huit mois donne une visibilité inédite dans le secteur.

**Avril 2026 — Le mois des accords structurants.** Extension du partenariat Google **jusqu'en 2031**, accord Anthropic pour 3,5 GW de calcul TPU à partir de 2027, partenariat Meta sur plusieurs générations de MTIA. Le titre s'apprécie fortement.

**2-3 juin 2026 — Sommet historique.** Le CA IA franchit les 10 Mds$ trimestriels ; le titre culmine à 495 $ en séance.

---

### Baisses significatives

**Janvier-février 2026 — Réévaluation sectorielle.** Correction générale des valeurs IA. HSBC abaisse son objectif de 535 à 450 $ en invoquant explicitement une « remise à plat de la valorisation des noms IA ».

**3 juin 2026 — La sanction du non-relèvement : -12,6 %.** Broadcom dépasse le consensus sur le CA **et** sur le BPA, guide le T3 très au-dessus des attentes… mais **maintient** son objectif IA 2027 à « plus de 100 Mds$ » quand le consensus travaillait sur ~120 Mds$. La séance la plus instructive de l'année : à ce niveau de valorisation, ne pas accélérer équivaut à décevoir.

**Mi-août 2026 — Faille VMware.** Une vulnérabilité de sécurité sur le serveur Syslog de vCenter fait céder près de 6 % au titre. Épisode mineur sur le fond, révélateur de la nervosité du marché.

**19 août 2026 — L'accord Google-Marvell : -4,61 %.** Marvell révèle un accord commercial avec Google assorti d'un warrant de 12,2 Mds$. **87 Mds$ de capitalisation partent en une séance**, cinq fois le gain enregistré par Marvell. Le titre clôture à 362,48 $, son plus bas depuis début juillet.

**Toile de fond d'août** : montée des rendements du Trésor, rotation hors des valeurs de construction IA, et interrogations croissantes sur les montages de financement circulaires du secteur.

---

### Facteurs structurels

- **Sensibilité au capex des hyperscalers** : les dépenses d'infrastructure IA des grandes plateformes dépasseraient 700 Mds$ en 2026, contre ~400 Mds$ en 2025. Toute inflexion de ce chiffre se transmet directement au titre.
- **Profil événementiel** : chaque annonce d'un client, d'un concurrent ou d'un montage financier fait bouger le cours de plusieurs points. Le dossier se négocie sur les nouvelles, pas sur les flux.
- **Écart cours / objectif de consensus** : l'objectif moyen ressort à **~528 $** contre ~367 $ de cours, soit un écart théorique de plus de 40 %. Un tel écart ne mesure pas un potentiel — il mesure une **incertitude non résolue**.
- **Flux passifs** : présence dans le Nasdaq-100 et le S&P 500, avec des flux d'ETF réguliers qui amortissent partiellement les mouvements.
- **Positionnement** : intérêt vendeur à découvert faible (~1,3 % du flottant). Le débat n'est pas mené par les vendeurs à découvert, mais par des acheteurs qui doutent.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement méthodologique
L'exercice fiscal de Broadcom se clôt début novembre. Les projections ci-dessous portent sur les exercices **FY2026 (clos nov. 2026), FY2027 et FY2028**, en BPA **non-GAAP dilué**, mesure suivie par le consensus. L'écart avec le BPA GAAP reste important en raison de l'amortissement des incorporels VMware et de la rémunération en actions.

### Hypothèses de modélisation

**Chiffre d'affaires** :
- **CA IA** : ~56 Mds$ sur FY2026 (guidance), plus de 100 Mds$ sur FY2027 (objectif maintenu), consensus vers 120 Mds$. Retenu ici : ~110 Mds$ en scénario central.
- **Semi-conducteurs hors IA** : ~17 Mds$, reprise cyclique lente en U, +5 à 8 % par an
- **Logiciel** : croissance à un chiffre élevé, ~31 % attendus au T3 par effet de calendrier de renouvellements, mais tendance sous-jacente autour de 9-12 %
- **CA total** : ~95-100 Mds$ en FY2026, ~155-175 Mds$ en FY2027

**Marges** :
- Marge brute en repli continu par effet de mix : ~74 % au T3 2026, potentiellement 70-72 % en FY2027 à mesure que les XPU dominent
- Marge opérationnelle non-GAAP **stable autour de 66-68 %** — le levier opérationnel compense
- EBITDA ajusté ~68 % du CA

**Coûts financiers** : point de bascule du modèle. Le groupe négocierait **plus de 60 Mds$ de dette supplémentaire**. Chaque tranche de 60 Mds$ à ~6 % coûte ~3,6 Mds$ de charge annuelle, soit environ **0,55 $ de BPA**. C'est loin d'être neutre.

**Fiscalité** : taux non-GAAP d'environ 16 %, sous l'effet de l'impôt minimum mondial.

**Dilution** : environ 4,76 milliards d'actions, en hausse de ~1 % sur un an. Rémunération en actions élevée, partiellement compensée par les rachats.

---

### Estimations BPA

| Exercice | BPA non-GAAP estimé | Croissance | PER au cours actuel (~367 $) |
|---|---|---|---|
| FY2025 (réalisé) | **~6,30 $** | +36 % | — |
| FY2026E | **~11,50-12,20 $** | **+85-95 %** | **~30-32x** |
| FY2027E | **~17,00-19,50 $** | **+45-60 %** | **~19-22x** |
| FY2028E | **~20,50-24,00 $** | **+18-25 %** | **~15-18x** |

*Le BPA glissant GAAP ressort à 6,02 $, d'où un PER affiché de ~60x qui n'est pas comparable aux estimations non-GAAP ci-dessus.*

---

### Sensibilité

- **Scénario haussier** (CA IA 2027 à 120 Mds$, marge opérationnelle tenue à 68 %, financement limité) : BPA FY2028 vers 24 $ → PER 2028 d'environ 15x. À ce niveau, le titre serait manifestement bon marché au cours actuel.
- **Scénario central** (CA IA 2027 à ~110 Mds$, marge 66-67 %, 60 Mds$ de dette levés) : BPA FY2028 vers 22 $ → PER 2028 d'environ 17x. Valorisation raisonnable pour une croissance de cette qualité.
- **Scénario baissier** (glissement des livraisons 2027 vers 2028, part Google en repli au profit de Marvell, un client incapable d'honorer ses engagements) : BPA FY2028 vers 15-16 $ → PER 2028 d'environ 23x, sur une croissance ralentie. **Le multiple se comprimerait alors bien en dessous** et la baisse du titre serait sévère.

**Conclusion** : à ~367 $, le titre se paie environ **20x le bénéfice FY2027 estimé** — ce qui n'a rien d'excessif pour une croissance de cet ordre. Le débat n'est donc **pas** le multiple. Il porte sur la question de savoir si le dénominateur existe : les 100 Mds$ de CA IA 2027 dépendent d'une poignée de clients dont plusieurs ne sont pas encore autofinancés, et que Broadcom aide désormais activement à se financer.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Une visibilité sans équivalent dans le secteur.** Le carnet IA dépassait 73 Mds$ sur dix-huit mois fin 2025 ; les seules prises de commandes IA du T2 2026 ont excédé 30 Mds$ pour 10,8 Mds$ facturés. Les engagements sont contractualisés en gigawatts sur plusieurs années : plus de 1 GW pour Anthropic en 2026 puis 5 GW dès 2027, 1,3 GW pour OpenAI en 2027 (dans un cadre de 10 GW d'ici 2029), 3 GW pour Meta d'ici fin 2028. Peu d'entreprises technologiques disposent d'une telle profondeur de carnet.

**2. La position réseau : encaisser quel que soit le vainqueur.** Le Tomahawk 6 est présenté comme le seul commutateur à 102,4 Tb/s du marché. Sur les DSP 1,6 Tb/s, l'optique co-packagée et les lasers, Broadcom se qualifie de standard de fait. Ce pôle sert **aussi bien les grappes XPU que les grappes NVIDIA** : il est structurellement indifférent à l'issue de la guerre des accélérateurs.

**3. Un levier opérationnel spectaculaire.** Marge opérationnelle record à 67,3 %, EBITDA ajusté à 69 % du CA, free cash-flow à 46 % du CA pour seulement 860 M$ de capex annuel. Le CA a bondi de 48 % sans hausse correspondante des charges d'exploitation. C'est la signature d'un modèle fabless bien géré.

**4. La rente VMware finance le pari IA.** 27 Mds$ de CA à 93 % de marge brute et 79 % de marge opérationnelle, en abonnement, auprès de clients captifs. Ce socle finance l'expansion IA sans dilution.

**5. Une valorisation qui n'est plus tendue.** À ~367 $, soit -26 % depuis le sommet de juin, le titre se paie environ **20x le bénéfice FY2027 estimé**, avec un PEG de l'ordre de 0,45-0,5. L'objectif de consensus ressort à ~528 $ (JPMorgan à 580 $, Bank of America à 530 $), sur un consensus « Strong Buy ».

**6. La diversification client progresse réellement.** Il y a deux ans, Broadcom était l'histoire d'un client. Il y en a désormais six, dont deux non nommés ayant déjà passé 6 Mds$ de commandes. La dépendance à Google recule mécaniquement à chaque trimestre.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents

**1. La concentration client reste le fait dominant.** Le 10-Q est sans ambiguïté : **les cinq premiers clients pèsent ~50 % du chiffre d'affaires**. Six clients XPU structurent tout le récit IA. Il ne s'agit pas d'une clientèle diversifiée mais d'une poignée de contreparties dont deux — OpenAI et Anthropic — brûlent encore massivement de la trésorerie.

**2. Le financement circulaire.** C'est le risque le plus récent et le moins bien intégré. Broadcom monte une plateforme AI XPU avec Apollo et Blackstone (>20 GW, première tranche de 35 Mds$), et négocierait **plus de 60 Mds$ de dette** au bénéfice d'Anthropic et d'autres. Bank of America a modélisé jusqu'à ~370 Mds$ d'exposition contingente. Autrement dit : Broadcom aide à financer les clients qui achètent ses puces. Tant que la demande tient, c'est un accélérateur. En cas de retournement, c'est un **risque de crédit déguisé en risque commercial**.

**3. L'érosion du pouvoir de fixation des prix.** L'accord Google-Marvell du 19 août 2026 valide le scénario baissier : le client historique, avec qui Broadcom co-conçoit les TPU depuis dix ans, a signé un accord adossé à un warrant de 12,2 Mds$ avec un concurrent. Macquarie anticipe un recul de la part Broadcom depuis ~95 % du custom Google en 2026. La perte de 87 Mds$ de capitalisation en une séance mesure exactement ce dont il s'agit.

### Analyse pré-mortem
**Que se passe-t-il si le titre vaut 220 $ dans deux ans ?** Enchaînement le plus plausible : les livraisons XPU 2027, concentrées sur le second semestre, glissent d'un ou deux trimestres ; un des laboratoires de modèles renégocie ou étale son engagement faute de financement ; Google accélère le transfert vers Marvell sur les générations suivantes ; la marge brute tombe sous 70 % ; le CA IA 2027 atterrit à 80 Mds$ au lieu de 100. Le BPA FY2028 ressort à 15 $ au lieu de 22, et le multiple se comprime de 20x à 15x. **-40 % depuis les niveaux actuels**, sans qu'aucune fraude ni aucun choc macroéconomique ne soit nécessaire.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat public porte sur la mauvaise question. Tout le monde discute de la part de marché de Broadcom face à Marvell ou à NVIDIA. La vraie question est **qui paie les factures en 2028**. Le carnet de commandes est réel, contractualisé, chiffré — mais adossé à des contreparties dont plusieurs financent leurs achats par des levées de capitaux et des montages de dette auxquels Broadcom participe désormais. Le carnet n'est pas une créance sur des flux de trésorerie existants ; c'est une créance sur la **capacité future du marché à continuer de financer l'IA**.

Symétriquement, les vendeurs à découvert commettent l'erreur inverse : ils traitent le dossier comme une bulle pure, en ignorant qu'un pôle réseau à ~40 % du CA IA, une rente VMware de 27 Mds$ et 33 Mds$ de flux de trésorerie annuels constituent un plancher de valeur bien réel. **La bonne dimension de position est donc modérée, avec un horizon long** — ni conviction maximale, ni évitement.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — signaux d'alerte comptables

### Engagements hors bilan et financements clients — RISQUE ÉLEVÉ
C'est le point d'attention numéro un du dossier, et le plus récent.

Broadcom a lancé une **plateforme AI XPU avec Apollo, Blackstone et d'autres investisseurs**, visant plus de 20 GW de capacité d'ici 2028, dont une première tranche de 35 Mds$. En août 2026, Bloomberg a rapporté des négociations pour lever **plus de 60 Mds$ de dette** dans un montage bénéficiant à Anthropic et à d'autres clients. Bank of America a modélisé jusqu'à **~370 Mds$ d'exposition de financement contingent**.

**À surveiller impérativement** :
- La qualification comptable de ces véhicules : consolidés ou déconsolidés ? Le traitement des entités structurées (VIE) sous ASC 810 déterminera si le risque apparaît au bilan
- Les **garanties, engagements d'achat et lettres de crédit** accordés aux véhicules — à chercher dans les annexes, pas dans les états principaux
- Le 10-Q du T1 2026 signale déjà que des clients cherchent à **louer** les baies XPU plutôt qu'à les acheter, avec « des financements alternatifs, des modèles de paiement nouveaux ou différés ». La reconnaissance du revenu diffère radicalement entre une vente et une location.

### Comptabilisation du chiffre d'affaires — RISQUE MODÉRÉ À ÉLEVÉ
Le 10-Q d'août 2025 mentionne des contrats pluriannuels « **où les clients n'ont pas de droit de résiliation** », avec ~27,5 Mds$ d'obligations de prestation restantes fermement engagées, dont ~34 % attendus en revenu sur douze mois.

**Point d'attention spécifique au logiciel** : le passage aux abonnements VMware a impliqué la **reconnaissance anticipée de revenu de licence** sur les contrats sans droit de résiliation. C'est conforme à l'ASC 606, mais cela **avance du revenu** et flatte les comparaisons annuelles. Le ralentissement à +9 % au T2 2026 pourrait être le premier effet de cet épuisement.

### Goodwill et immobilisations incorporelles — RISQUE MODÉRÉ
L'acquisition de VMware (~61 Mds$, novembre 2023) a généré un goodwill et des incorporels très importants, qui pèsent lourdement sur l'écart entre résultat GAAP et non-GAAP. Le BPA GAAP glissant s'établit à 6,02 $, contre des estimations non-GAAP largement supérieures.

**À surveiller** : les hypothèses des tests de dépréciation annuels (taux d'actualisation, croissance long terme). Un ralentissement durable du logiciel d'entreprise rendrait ces hypothèses difficiles à tenir.

### Rémunération en actions — RISQUE MODÉRÉ
La rémunération du directeur général a atteint **205,3 M$ sur FY2025, dont 202,4 M$ en actions**. L'attribution de performance de septembre 2025 (610 521 actions) peut atteindre **300 % de la cible**, soit ~617 M$ au cours actuel, si le CA IA dépasse 120 Mds$.

**Le problème n'est pas le montant — c'est l'incitation.** Le déclencheur est le **chiffre d'affaires IA déclaré**, non le bénéfice, non le free cash-flow, non le retour sur capital. Une structure qui récompense le volume de CA IA au moment précis où l'entreprise monte des véhicules destinés à financer les acheteurs de ce CA mérite une lecture attentive.

### Parties liées et structures d'investissement — RISQUE MODÉRÉ
Les relations avec Apollo, Blackstone et les autres investisseurs de la plateforme XPU ne sont pas des transactions avec parties liées au sens strict, mais elles créent des **intérêts croisés complexes** peu lisibles depuis les états publiés. À documenter dans les annexes des prochains dépôts.

### Contrats de location (IFRS 16 / ASC 842) — RISQUE FAIBLE
Rien d'anormal identifié à ce stade. Le modèle fabless implique peu d'immobilisations lourdes (860 M$ de capex sur douze mois).

### Flux de trésorerie vs résultat — RISQUE FAIBLE
Flux d'exploitation de 33,6 Mds$ pour un résultat net de 29,3 Mds$ sur douze mois : la conversion est excellente, l'écart s'expliquant par l'amortissement des incorporels VMware. **Aucun signal de qualité des résultats dégradée à ce jour.**

**Mais c'est précisément ce qu'il faudra surveiller** : si les clients passent à la location et au paiement différé, l'écart entre revenu comptabilisé et trésorerie encaissée se creusera. Le suivi des **créances clients** et de leur antériorité devient le meilleur indicateur avancé du dossier.

---

### Verdict global
**Risque comptable : MODÉRÉ, en dégradation.** Les états financiers historiques de Broadcom sont propres, la conversion en trésorerie est excellente, et aucun signal classique de manipulation n'apparaît. Le risque n'est pas rétrospectif — il est **prospectif** : les montages de financement clients, la bascule possible vers la location, et une incitation de rémunération centrée sur le CA IA constituent trois vecteurs convergents. L'investisseur doit suivre les 10-Q ligne à ligne, en particulier les annexes sur les engagements et les entités structurées.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Hock Tan et l'équipe de direction

### Financement des clients — le sujet le plus urgent

**1.** Vous négociez plus de 60 Mds$ de dette dans un montage bénéficiant à Anthropic et à d'autres clients. **Quelle est l'exposition économique nette de Broadcom** si un de ces clients ne peut pas honorer ses paiements ? Cette exposition figure-t-elle au bilan, en engagement hors bilan, ou nulle part ?

**2.** La plateforme AI XPU montée avec Apollo et Blackstone est-elle **consolidée** dans vos comptes ? Quels critères d'ASC 810 avez-vous appliqués, et quelles garanties ou engagements d'achat Broadcom a-t-il accordés à ces véhicules ?

**3.** Votre 10-Q mentionne des clients souhaitant **louer** les baies XPU plutôt que les acheter. Quelle part de vos 100 Mds$ de CA IA 2027 serait comptabilisée en location ou en paiement différé plutôt qu'en vente ferme ?

### Concentration et pouvoir de négociation

**4.** Vos cinq premiers clients représentent ~50 % du chiffre d'affaires. **Quel est le poids du premier client seul**, et à quel horizon anticipez-vous qu'aucun client ne dépasse 15 % ?

**5.** Google a signé avec Marvell un accord adossé à un warrant de 12,2 Mds$. Vous aviez anticipé cette diversification en mai. **Quelle part du silicium personnalisé de Google Broadcom conservera-t-il** sur les générations 2027 et 2028, et qu'est-ce qui vous protège de la même dynamique chez Meta ?

**6.** Vous mesurez la demande en gigawatts et affirmez que le prix par gigawatt est stable. **Quel est ce prix**, et quelle a été son évolution sur les douze derniers mois à périmètre technologique comparable ?

**7.** Les deux clients XPU non nommés ont passé 6 Mds$ de commandes. **Pourquoi ne pas les identifier**, et quelle est leur solidité financière relative à celle de Google ou de Meta ?

### Marges et modèle économique

**8.** La marge brute passe de 79,4 % à 77,1 % puis à ~74 % en trois trimestres. **Où se situe le plancher** une fois les XPU pleinement montés en cadence, et à quel niveau de marge brute le levier opérationnel cesse-t-il de compenser ?

**9.** Vous êtes passés de « systèmes IA intégrés » à « puces seulement ». **Combien de dollars de chiffre d'affaires par gigawatt cette décision vous fait-elle abandonner**, et pourquoi maintenant ?

**10.** Le logiciel d'infrastructure ne croît plus que de 9 % au T2. Quelle part de la croissance 2024-2025 provenait de la **reconnaissance anticipée de licence** sur les contrats sans droit de résiliation, et quelle est la croissance sous-jacente réelle ?

### Approvisionnement et exécution

**11.** Vous dites avoir sécurisé wafers, HBM et substrats pour 2026 et 2027. **Ces engagements sont-ils fermes ou conditionnels**, et quel est votre engagement d'achat minimum si la demande client fléchissait de 30 % ?

**12.** Les livraisons XPU 2027 sont concentrées sur le second semestre. **Quel est le chemin critique** de ce calendrier, et quel glissement maximal absorberiez-vous sans réviser l'objectif de 100 Mds$ ?

### Gouvernance et vision

**13.** Votre attribution d'actions de performance se déclenche sur le **chiffre d'affaires IA**, pas sur le bénéfice ni sur le retour sur capital. En quoi cette structure ne vous incite-t-elle pas à maximiser le volume au détriment de la qualité de crédit des contreparties ?

**14.** Vous vous êtes engagé jusqu'en 2030. **Quel est le plan de succession**, et quels dirigeants internes sont aujourd'hui préparés à conduire une entreprise dont le modèle repose sur votre méthode d'allocation depuis vingt ans ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — démontage de l'argumentaire haussier

### 1. Le carnet de commandes n'est pas ce que vous croyez

Les haussiers récitent le chiffre : **plus de 73 Mds$ de carnet IA**, 30 Mds$ de prises de commandes au seul T2. Impressionnant — jusqu'à ce qu'on demande **qui a signé**.

Google et Meta sont des contreparties impeccables, autofinancées, aux flux de trésorerie colossaux. Mais **Anthropic et OpenAI ne le sont pas** : ce sont des entreprises en forte croissance qui consomment massivement de la trésorerie et financent leurs achats d'infrastructure par des levées de capitaux successives. Un engagement pluriannuel de plusieurs gigawatts signé par une entreprise qui n'a pas encore prouvé son autofinancement n'est pas un carnet de commandes : c'est une **option d'achat conditionnée à la poursuite du financement du secteur**.

Un carnet exécutoire vaut ce que vaut la solvabilité de celui qui l'a signé.

### 2. Le financement circulaire est le vrai risque, et il n'est pas dans les comptes

Voici le mécanisme, énoncé simplement : Broadcom monte une plateforme XPU avec Apollo et Blackstone (>20 GW, première tranche de 35 Mds$), puis négocie **plus de 60 Mds$ de dette** au bénéfice d'Anthropic et d'autres clients. Bank of America modélise jusqu'à **~370 Mds$ d'exposition contingente**.

Traduisons : **Broadcom aide à financer les entreprises qui achètent ses puces**. Le CA IA de 2027 sera partiellement adossé à de la dette que Broadcom a contribué à arranger.

Ce montage est parfaitement légal, largement pratiqué dans le secteur, et **exactement le motif qui précède les retournements de cycle industriel**. Les télécoms de 1999 ont fait la même chose : Lucent et Nortel finançaient leurs clients opérateurs. Cela a fonctionné admirablement jusqu'à ce que cela cesse de fonctionner.

### 3. Le moat client vient d'être publiquement fissuré

L'argument haussier central est le coût de changement : dix ans de co-conception avec Google, cycles de 18 à 24 mois, intégration profonde.

Le 19 août 2026, Google a signé avec **Marvell** un accord adossé à un warrant de 12,2 Mds$, couvrant les accélérateurs d'inférence et les contrôleurs de l'écosystème TPU. Broadcom a perdu **87 Mds$ de capitalisation en une séance** — cinq fois ce que Marvell a gagné. Macquarie anticipe une baisse de la part Broadcom depuis ~95 % du custom Google.

Les haussiers répondent, à juste titre, que Marvell ne prend pas le TPU cœur et que le gâteau grossit. Soit. Mais le fait établi est le suivant : **le fossé n'a pas empêché l'entrée d'un concurrent**. Il ralentit, il ne bloque pas. Et ce qui vient d'arriver chez Google peut arriver chez Meta.

### 4. Le refus de relever la cible 2027 est un aveu, pas de la prudence

En juin 2026, Broadcom dépasse le consensus sur le CA et le BPA, guide un T3 spectaculaire (+84 %), porte la capacité livrable à plus de 10 GW… et **maintient** son objectif IA 2027 à « plus de 100 Mds$ » alors que le consensus travaillait sur 120 Mds$.

Les haussiers y voient de la prudence de bon aloi. Autre lecture, tout aussi cohérente : Hock Tan connaît la solidité réelle des engagements et le calendrier réel des livraisons — massivement concentrées sur le second semestre 2027 — et **refuse de s'engager sur un chiffre qu'il n'est pas certain de tenir**. Le titre a perdu 12,6 % le lendemain. Le marché a peut-être compris quelque chose de juste.

### 5. La marge brute se dégrade et cela ne s'inversera pas

79,4 % → 77,1 % → ~74 % en trois trimestres. Le management parle d'effet de mix, non structurel. **C'est exact et c'est précisément le problème** : le mix continuera de se déplacer vers les XPU. Un accélérateur sur mesure produit en volume pour un client unique se margera toujours moins qu'un commutateur Tomahawk vendu à toute l'industrie.

Broadcom troque une entreprise à 79 % de marge brute contre une entreprise à 72 %. Le volume compense en dollars aujourd'hui. Il ne compensera plus le jour où le volume cessera de croître de 143 % par an.

### 6. La rémunération incite exactement au mauvais comportement

L'attribution de performance du directeur général se déclenche sur le **chiffre d'affaires IA** : rien en dessous de 60 Mds$, la cible à 90 Mds$, **300 % au-dessus de 120 Mds$** — soit environ 617 M$ au cours actuel.

Ni bénéfice. Ni free cash-flow. Ni retour sur capital. Ni qualité de crédit des clients. **Du chiffre d'affaires.**

Placez cette incitation à côté de véhicules de financement destinés à permettre aux clients d'acheter davantage, et vous obtenez une structure qui rémunère le volume à crédit. Ce n'est pas une accusation de mauvaise foi : c'est de l'analyse d'incitations, et l'analyse d'incitations est rarement démentie par les faits.

### Le scénario catastrophe unique
**Un resserrement du financement de l'IA en 2027.** Les marchés de dette se ferment aux laboratoires de modèles, une levée majeure échoue, un client renégocie ou étale un engagement pluriannuel. Simultanément : les livraisons XPU du second semestre 2027 glissent, Google accélère vers Marvell, la marge brute passe sous 70 %. Le CA IA 2027 atterrit à 80 Mds$ au lieu de 100. Le BPA FY2028 tombe à 15 $, le multiple se comprime de 20x à 15x. **Le titre vaut 220-230 $, soit -40 %.**

Probabilité ? Non négligeable — de l'ordre de 25 à 35 % sur deux ans. Le titre a déjà cédé 26 % depuis son sommet de juin : le marché commence à tarifer une partie de ce risque.

### Conclusion short
Broadcom est une entreprise remarquable, dirigée par l'un des meilleurs allocateurs de capital de sa génération, avec une position réseau qui encaisse quel que soit le vainqueur de la guerre des accélérateurs. **Rien de tout cela n'est en cause.**

Ce qui est en cause, c'est qu'un investisseur qui achète aujourd'hui n'achète pas seulement une exécution industrielle : il achète **la solvabilité future de six clients, dont deux ne sont pas encore autofinancés, et que le vendeur aide désormais à emprunter**. C'est un risque de crédit vendu au prix d'un risque technologique. À ~20x le bénéfice 2027, ce n'est pas absurde — mais ce n'est certainement pas la valeur de qualité sans risque que décrit le consensus « Strong Buy » à 528 $.`,
  },
];

export default { ...meta, modules };
