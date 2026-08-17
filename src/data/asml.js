// ============================================================
//  DOSSIER : ASML Holding N.V. (ASML)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Données arrêtées au 17 août 2026 (résultats T2 2026 publiés
//  le 15 juillet 2026, cours de clôture du 14 août 2026).
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "asml",                     // identifiant d'URL : /dossier/asml
  ticker: "ASML",
  name: "ASML Holding N.V.",
  exchange: "Euronext Amsterdam / Nasdaq",
  sector: "Équipements de lithographie pour semi-conducteurs",
  initials: "ASML",                 // affiché dans la pastille
  tagline: "Monopole mondial de la lithographie EUV — le goulot d'étranglement de toute la chaîne de valeur des semi-conducteurs.",
  riskScore: 67,                   // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "asml.html",
  updated: "2026-08",              // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

ASML Holding N.V. est le **fournisseur exclusif au monde de machines de lithographie EUV** (ultraviolet extrême), les équipements qui impriment les motifs des circuits sur les plaquettes de silicium. Fondée en 1984 à Veldhoven (Pays-Bas) comme coentreprise entre Philips et ASM International, la société emploie aujourd'hui plus de **44 500 collaborateurs** et cote simultanément sur Euronext Amsterdam et le Nasdaq.

Le modèle est d'une simplicité redoutable : **aucune puce avancée au monde ne peut être fabriquée sans une machine ASML**. Il n'existe pas de deuxième fournisseur d'EUV. Cette position de goulot d'étranglement unique explique un chiffre d'affaires 2025 de **32,7 milliards €** pour un bénéfice net de **9,6 milliards €** — soit une marge nette de 29 %.

L'activité repose sur deux jambes économiquement distinctes :

- **Vente de systèmes (~72 % du CA)** : machines vendues 60 à 250 millions € l'unité pour la gamme EUV Low NA (NXE:3800E), et **environ 380 millions $ pour les systèmes High NA (EXE:5200)**. Cycle long, revenus lumpy, exposés au calendrier d'investissement des fondeurs.
- **Installed Base Management (~28 % du CA)** : services, maintenance, pièces et surtout **upgrades de performance** sur un parc installé de plus de 5 000 machines. Revenu récurrent, à marge élevée, croissant mécaniquement avec la base — **2,76 milliards € au seul T2 2026, en hausse de 32 % sur un an**.

## Principaux produits et services

- **EUV Low NA** (NXE:3600D, NXE:3800E) : le cheval de bataille de la production actuelle, des nœuds 7 nm aux nœuds 2 nm. Capacité de production d'environ **65 unités en 2026**.
- **EUV High NA** (EXE:5000, EXE:5200B) : ouverture numérique 0,55, motifs jusqu'à 66 % plus fins. Destiné aux nœuds sub-2 nm à partir de 2027-2028. Moins d'une douzaine d'unités livrées dans le monde.
- **DUV** (immersion NXT, sec) : le socle volumique, environ **130 systèmes d'immersion en 2026**. C'est la gamme exposée aux restrictions à l'export vers la Chine.
- **Métrologie et inspection** (YieldStar, HMI e-beam) et **lithographie computationnelle** — logiciels d'optimisation de rendement.
- **Advanced packaging** : premier système TWINSCAN XT:260 expédié en 2025, nouvelle jambe de croissance liée au HBM et au chiplet.

## Clients, fournisseurs, concurrents

**Clients** : une poignée d'acteurs. **TSMC**, **Samsung Electronics**, **Intel**, **SK Hynix**, **Micron**, auxquels s'ajoutent Rapidus, GlobalFoundries, UMC, SMIC et Hua Hong sur les nœuds matures. La concentration est extrême : trois clients logiques représentent probablement plus de la moitié des ventes de systèmes avancés.

**Fournisseurs critiques** : **Carl Zeiss SMT** (optiques EUV, partenariat exclusif et capitalistique), **TRUMPF** (lasers CO₂ de haute puissance), **Cymer** (sources lumineuses, filiale ASML depuis 2013), **VDL Groep**, **Neways**, **Prodrive**, **Settels Savenije**.

**Concurrents** : sur l'EUV, **aucun**. Sur le DUV, **Nikon** et **Canon** subsistent avec des parts marginales ; Canon pousse l'alternative **nanoimprint (NIL)**. En Chine, **SMEE** et de nouveaux entrants comme Shanghai Yuliangsheng tentent de reproduire l'immersion DUV — avec un retard technologique estimé à une décennie, mais un soutien étatique massif.

## Modalités contractuelles

Les commandes sont enregistrées avec **autorisation écrite du client** et alimentent un carnet (backlog) qui atteignait **38,8 milliards € fin 2025**. Les acomptes clients (customer down payments) sont significatifs et financent partiellement le cycle de production, très long (12 à 18 mois pour un EUV). La reconnaissance du revenu intervient à l'expédition ou à l'acceptation selon le type de système.

> **Point d'attention structurel** : le backlog n'est **pas un contrat ferme irrévocable**. Les clients peuvent décaler ou annuler des livraisons — ASML l'a douloureusement démontré en octobre 2024, lorsqu'un effondrement des prises de commandes avait fait chuter le titre de 16 % en une séance.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'ASML dans la chaîne de valeur

ASML n'est pas un fabricant de puces : c'est **l'intégrateur système situé au sommet de la chaîne**. La société conçoit, assemble et met au point les machines, mais externalise environ **85 % de la valeur des composants** à un réseau de fournisseurs spécialisés dont plusieurs sont, eux aussi, en situation de monopole de fait.

### Amont — Les fournisseurs irremplaçables

**Optiques et miroirs** :
- **Carl Zeiss SMT** (Allemagne) — miroirs EUV polis à la précision atomique. ASML détient une participation minoritaire et cofinance la R&D. **Il n'existe aucune alternative au monde.** C'est le vrai goulot d'étranglement derrière le goulot d'étranglement.

**Sources lumineuses et lasers** :
- **Cymer** (San Diego, filiale ASML depuis 2013, 2,5 Mds$) — source EUV par plasma d'étain
- **TRUMPF** (Allemagne) — laser CO₂ de plusieurs dizaines de kilowatts qui vaporise les gouttelettes d'étain

**Mécatronique, modules et sous-ensembles** :
- **VDL Groep**, **Neways Electronics**, **Prodrive Technologies**, **Settels Savenije**, **KMWE** — le cluster industriel du Brabant néerlandais
- **Berliner Glas** (acquis en 2020) — porte-plaquettes en céramique

**Autres intrants** : étain de haute pureté, tungstène, terres rares, composants électroniques, et une main-d'œuvre d'ingénieurs hautement qualifiés dont la rareté est un facteur limitant reconnu par la direction.

---

### ASML — Assemblage, installation, service

**Production** : Veldhoven (siège et assemblage EUV), Wilton (Connecticut), San Diego (Cymer), Linkou (Taïwan), Corée du Sud.

**Logistique** : une machine EUV pèse environ 180 tonnes et nécessite plusieurs avions cargo Boeing 747 pour être livrée. L'installation sur site du client prend plusieurs mois.

**Service** : équipes permanentes intégrées dans les fabs clientes — c'est le socle du revenu récurrent Installed Base Management.

---

### Aval — Les clients et l'utilisateur final

**Fondeurs et fabricants de mémoire** :
- **TSMC** (capex 2026 annoncé de 52 à 56 milliards $, en hausse d'environ 30 %)
- **Samsung Electronics**, **Intel**, **SK Hynix**, **Micron**, **Rapidus**, **GlobalFoundries**, **UMC**, **SMIC**

**Concepteurs de puces (clients de nos clients)** : **NVIDIA**, **Apple**, **AMD**, **Qualcomm**, **Broadcom**, **MediaTek** — leurs feuilles de route en 2 nm et 1,4 nm déterminent mécaniquement la demande d'EUV.

**Utilisateurs finaux** : hyperscalers (Microsoft, Google, Amazon, Meta), constructeurs automobiles, industriels. Le projet **Terafab** d'Elon Musk — des fabs capables de traiter des millions de plaquettes par mois pour alimenter les data centers d'IA — a été explicitement cité par le PDG comme illustration du changement d'échelle de la demande.

---

### Cartographie simplifiée du flux

- **Étage 1 — Composants critiques** : Zeiss SMT (optiques) · TRUMPF (lasers) · Cymer (source EUV) · VDL, Neways, Prodrive (mécatronique)
- **Étage 2 — Intégration** : **ASML** — assemblage, calibration, installation, service permanent en fab
- **Étage 3 — Fabrication** : TSMC · Samsung · Intel · SK Hynix · Micron
- **Étage 4 — Conception** : NVIDIA · Apple · AMD · Qualcomm · Broadcom
- **Étage 5 — Usage final** : hyperscalers, data centers d'IA, automobile, industrie

**La lecture qui compte** : ASML est un monopole *encadré par des monopoles*. Sa capacité de production n'est pas limitée par la demande — elle l'est par Zeiss, par TRUMPF et par la disponibilité d'ingénieurs. L'annonce d'une hausse de **30 % de la capacité EUV Low NA pour 2027** est donc autant une décision d'ASML qu'un engagement de toute sa chaîne amont.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

ASML publie en US GAAP et ventile essentiellement entre **ventes de systèmes** et **Installed Base Management** (services et field options), avec des découpages complémentaires par technologie, par usage final et par géographie.

### Structure T2 2026

| Poste | T1 2026 | T2 2026 | Lecture |
|---|---|---|---|
| CA total | 8 767 M€ | **9 326 M€** | +6,4 % séquentiel |
| dont ventes de systèmes | 6 279 M€ | **6 564 M€** | Le moteur volumique |
| dont Installed Base Mgmt | 2 488 M€ | **2 762 M€** | +32 % sur un an — la pépite |
| Systèmes neufs vendus | 67 | **86** | Accélération nette |
| Systèmes d'occasion | 12 | **5** | Mix qualitatif favorable |
| Marge brute | 53,0 % | **54,0 %** | Au-dessus de la guidance |

---

### Par technologie

- **EUV Low NA** : cœur de la valeur ajoutée. Capacité d'environ 65 systèmes en 2026, portée à environ 85 en 2027 (+30 %), avec une étude d'un nouveau bond de 30 % en 2028.
- **EUV High NA** : volumes encore anecdotiques mais chaque EXE:5200 livré représente environ 380 millions $ de CA. Intel vise la production en volume de son nœud 14A à partir de 2028 ; TSMC et Samsung restent plus prudents sur le calendrier.
- **DUV immersion** : environ 130 unités en 2026, également en hausse de 30 % prévue pour 2027. C'est le segment le plus exposé à la Chine et aux contrôles à l'export.
- **Métrologie, inspection, computational** : petit en valeur, structurant en attachement client.
- **Advanced packaging** : jambe naissante (XT:260), portée par le HBM4 et l'empilement 3D.

---

### Par usage final

Le mix bascule structurellement vers la **mémoire**. Historiquement, la logique représentait environ deux tiers des ventes de systèmes ; l'explosion du **HBM4**, qui consomme un nombre inédit de couches EUV par plaquette, rééquilibre le mix vers la mémoire (DRAM). C'est un changement de régime important : la mémoire est historiquement le segment le plus cyclique et le plus volatil du secteur.

---

### Répartition géographique

| Zone | Poids 2025 | Tendance 2026 |
|---|---|---|
| Chine | ~33 % du CA | **→ ~20 %** — chute dirigée par les contrôles à l'export |
| Taïwan | En forte hausse | Capex TSMC record |
| Corée du Sud | En hausse | Cycle mémoire / HBM |
| États-Unis | En hausse | Intel, TSMC Arizona, Micron |
| Reste EMEA / Japon | Stable | Rapidus, Infineon, STMicro |

**Le fait marquant de 2026** : la part de la Chine dans les ventes de systèmes est passée de **36 % au T4 2025 à 19 % au T1 2026**. Cette contraction brutale — subie, non choisie — a été plus qu'absorbée par la demande liée à l'IA en Asie du Nord-Est et aux États-Unis. C'est précisément ce qui permet à ASML de relever sa guidance annuelle de 36-40 Mds€ à **43-45 Mds€** tout en perdant un tiers de son marché chinois.

---

### Profil de marge

- **Marge brute** : 52,8 % en 2025 → **54,0 % au T2 2026**, guidée à **55-57 % au T3** et 54-56 % sur l'année. Le levier vient du mix EUV, des upgrades et de l'absorption des coûts fixes.
- **Marge opérationnelle** : **37,1 % au T2 2026** contre 34,6 % un an plus tôt.
- **Marge nette** : **31,3 %** au T2 2026.
- **R&D** : environ 1,2 milliard € par trimestre — soit près de 5 milliards € par an, un niveau que personne dans la lithographie ne peut égaler.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

ASML détient probablement **le moat le plus large et le plus vérifiable de toute la cote mondiale**. Ce n'est pas une opinion d'analyste : c'est une constatation d'ingénierie.

### 1. Monopole technologique absolu sur l'EUV — 100 % de part de marché
Aucun concurrent, nulle part, ne dispose d'une machine EUV commercialisable. Il a fallu **plus de 30 ans, plus de 10 milliards $ de R&D cumulée** et un consortium industriel international (Zeiss, TRUMPF, imec, financement Intel-Samsung-TSMC) pour y parvenir. Reproduire ce résultat supposerait de reconstituer simultanément l'ensemble de l'écosystème. Sur la lithographie totale (EUV + DUV), la part de marché d'ASML dépasse **90 %**.

### 2. Verrouillage amont — le monopole protégé par d'autres monopoles
**Carl Zeiss SMT** est le seul fabricant au monde de miroirs EUV, et il travaille de facto en exclusivité avec ASML. Un entrant hypothétique devrait donc non seulement rattraper 30 ans de retard mais aussi **créer son propre Zeiss**. Cette structure verticale est le fossé le plus sous-estimé.

### 3. Base installée et coûts de changement prohibitifs
Plus de **5 000 systèmes** installés dans les fabs mondiales. Chaque machine est intégrée à un processus de fabrication qualifié pendant des années, avec des équipes ASML en poste permanent dans les fabs. Changer de fournisseur de lithographie signifie **requalifier un nœud entier** — un coût opérationnel et un risque de rendement qu'aucun fondeur n'accepte.

### 4. Le revenu de service : la rente cachée
L'Installed Base Management représente environ **28 % du CA à marge élevée** et croît de plus de 30 % par an. Les **upgrades de performance** — vendre plus de productivité sur une machine déjà installée — sont l'activité la plus rentable du groupe et la moins visible pour l'investisseur non spécialiste. Cette rente amortit fortement la cyclicité du segment systèmes.

### 5. Pouvoir de fixation des prix
Une NXE:3800E se vend environ 250 millions €, une EXE:5200 environ 380 millions $. Ces prix ne sont pas contestés : les clients se disputent des créneaux de livraison. Quand **trois clients** (TSMC, Samsung, Intel) se battent pour chaque slot, la tension tarifaire est structurellement favorable au vendeur — y compris en cas de ralentissement macroéconomique.

### 6. Propriété intellectuelle et souveraineté
Des dizaines de milliers de brevets, mais surtout un **savoir-faire tacite** non brevetable. À cela s'ajoute une protection réglementaire involontaire : les gouvernements néerlandais et américain contrôlent les exportations d'ASML, ce qui **interdit de facto** à la Chine d'accéder à la technologie de pointe.

## Positionnement vs concurrence

| Critère | ASML | Nikon | Canon | SMEE (Chine) |
|---|---|---|---|---|
| EUV | **100 %** | Aucun | Aucun (pari NIL) | Aucun |
| DUV immersion | Dominant | Marginal | Marginal | Prototypes |
| R&D annuelle | ~5 Mds€ | Très inférieure | Très inférieure | Subventionnée |
| Base installée | >5 000 systèmes | En déclin | En déclin | Naissante |
| Écosystème fournisseurs | Exclusif (Zeiss) | Optiques internes | Optiques internes | En construction |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Très élevé** — situation de rationnement, pas de solution de repli. Les clients cofinancent parfois la R&D et versent des acomptes.
- **Vis-à-vis des fournisseurs** : **Modéré, voire faible** — c'est l'angle mort. ASML ne peut pas remplacer Zeiss ou TRUMPF. Sa capacité de production est *subordonnée* à celle de ses fournisseurs, ce qui limite sa liberté stratégique et son pouvoir de négociation amont.
- **Vis-à-vis des États** : **Faible** — ASML est un actif géopolitique. La Haye et Washington décident de ce qu'elle peut vendre et à qui. C'est la seule contrepartie sérieuse au monopole.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Équipements pour semi-conducteurs (août 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E (fwd) | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **ASML** | **ASML NA** | **~710 Mds$** | **~14x** | **~36x** | **~41x** | **~0,5 %** | **~45 %** |
| Applied Materials | AMAT US | ~400 Mds$ | ~13x | ~34x | ~34x | ~0,4 % | ~40 % |
| Lam Research | LRCX US | ~250 Mds$ | ~10x | ~30x | ~34x | ~0,5 % | ~45 % |
| KLA Corporation | KLAC US | ~200 Mds$ | ~14x | ~33x | ~37x | ~0,6 % | ~70 % |
| Tokyo Electron | 8035 JP | ~110 Mds$ | ~5x | ~19x | ~22x | ~1,8 % | ~25 % |
| Nikon | 7731 JP | ~5 Mds$ | ~0,4x | ~15x | ~18x | ~2,5 % | ~4 % |

*Ordres de grandeur estimés à partir des cours et publications disponibles à mi-août 2026 ; à recalculer sur filings directs (20-F, 10-K, Tanshin) avant toute décision.*

---

### Analyse comparative

**ASML — hors catégorie sur le moat, dans la catégorie sur le multiple**
Le point le plus contre-intuitif de ce tableau : ASML, seul monopole absolu du groupe, ne se paie « que » 15 à 20 % de prime sur ses pairs américains en P/E prospectif. Applied Materials et Lam Research affichent environ 34x, KLA environ 37x, ASML environ 41x. Le marché ne rémunère donc pas la rareté du monopole autant qu'on pourrait le croire — **il rémunère surtout la croissance à court terme**, actuellement spectaculaire chez tous les acteurs WFE.

**Le vrai comparable n'est pas Nikon, c'est le cycle WFE**
Les dépenses mondiales en équipements de fabrication (WFE) sont attendues **autour de 150 milliards $ en 2026**, un niveau relevé en cours d'année (de 140 à 150 Mds$ selon Lam Research). ASML capte environ un quart de ce marché, mais sur le segment qui croît le plus vite et où elle n'a aucun concurrent. La question de valorisation n'est donc pas « ASML vs AMAT » mais « à quel multiple payer un pic de cycle WFE ».

**Tokyo Electron — le rappel à l'ordre du multiple japonais**
TEL, quatrième acteur mondial du WFE avec environ 10 % de part de marché, se paie environ 22x les bénéfices prospectifs. Elle est structurellement moins rentable et plus concurrencée (ASM International, Lam), mais l'écart de multiple illustre qu'un actif d'équipement de qualité peut se traiter à la moitié du multiple d'ASML en régime normal.

**Nikon et Canon — les fantômes de la lithographie**
Nikon et Canon ont perdu la bataille de l'immersion puis abandonné l'EUV. Canon pousse la **nanoimprint (NIL)**, technologie potentiellement beaucoup moins coûteuse mais handicapée par les défauts de gabarit et l'absence de qualification en production de masse chez un grand fondeur. Ce n'est pas une menace à horizon 5 ans ; c'est une option longue à surveiller.

**La Chine — le concurrent qui n'existe pas encore mais qui est financé**
SMEE et de nouveaux entrants (notamment autour de Shanghai) annoncent la production de DUV d'immersion domestiques. Les experts occidentaux jugent le niveau de performance très en retrait, mais **la trajectoire compte plus que le niveau** : chaque euro de restriction à l'export accélère mécaniquement l'effort d'indigénisation chinois. C'est le risque de long terme le plus mal évalué du dossier.

---

### Le ratio qui compte : marge brute et intensité lithographique
ASML se juge sur deux chiffres : **la marge brute** (52,8 % en 2025, 54 % au T2 2026, guidée 55-57 % au T3) et **l'intensité lithographique** — la part du budget d'un fondeur consacrée à la litho. Tant que la miniaturisation exige plus de couches EUV par plaquette (nœuds 2 nm, HBM4), cette intensité monte et ASML capte une part croissante du capex sectoriel. Le jour où elle plafonne, tout le modèle de croissance se renormalise.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 2026 — Analyse complète

Publiés le **15 juillet 2026**, les résultats du deuxième trimestre marquent un point d'inflexion : ASML a dépassé sa propre guidance sur les deux lignes et **relevé massivement ses perspectives annuelles**.

### Chiffres clés vs guidance

| Indicateur | T2 2026 | Guidance | Écart |
|---|---|---|---|
| CA total | **9 326 M€** | 8 400-9 000 M€ | **Au-dessus du haut de fourchette** |
| Marge brute | **54,0 %** | 51-52 % | **+200 à 300 bps** |
| Résultat net | **2 918 M€** | — | 31,3 % du CA |
| BPA (de base) | **7,59 €** | — | +28,6 % sur un an |
| Marge opérationnelle | **37,1 %** | — | vs 34,6 % un an plus tôt |
| Installed Base Mgmt | **2 762 M€** | ~2 400 M€ | **Le vrai moteur de la surprise** |

**Quatrième trimestre consécutif de dépassement du consensus de BPA.** L'origine de la surprise n'est pas les machines mais les **services et upgrades** : les clients dépensent pour extraire davantage de productivité de leur parc existant, une dépense moins visible et beaucoup plus rentable.

---

### Facteurs clés par segment

- **Systèmes** : 6 564 M€, avec **86 systèmes neufs vendus** contre 67 au T1 — accélération franche du rythme d'expédition.
- **Installed Base Management** : 2 762 M€, **+32 % sur un an**. Le poste devient le stabilisateur structurel du compte de résultat.
- **Mix géographique** : la Chine, tombée à environ 19 % des ventes de systèmes au T1, ne pèse plus que ~20 % attendu sur l'année contre 33 % en 2025 — et pourtant la croissance accélère. C'est le fait saillant du trimestre.

---

### Évolution des marges

La marge brute progresse trimestre après trimestre : **51,6 % (T3 2025) → 52,2 % (T4 2025) → 53,0 % (T1 2026) → 54,0 % (T2 2026)**, avec une guidance de **55-57 % au T3**. Trois moteurs : mix EUV plus riche, poids croissant des upgrades à très forte marge, et absorption des coûts fixes sur des volumes en hausse. La marge opérationnelle gagne 250 bps sur un an à 37,1 % — **levier opérationnel manifeste**.

---

### Perspectives et guidance — le vrai événement

- **T3 2026** : CA de **11,0 à 12,0 Mds€**, marge brute **55-57 %**, R&D ~1,2 Md€, SG&A ~0,4 Md€, taux d'impôt annualisé ~17 %.
- **Exercice 2026** : relevé de **36-40 Mds€ à 43-45 Mds€**, marge brute de 51-53 % à **54-56 %**.
- **Capacité** : **+30 % de capacité EUV Low NA pour 2027** (base ~65 unités en 2026), avec étude d'un nouveau +30 % en 2028. Même schéma pour le DUV immersion (~130 unités en 2026).
- **Capital Markets Day** fixé au **10 juin 2027** pour actualiser le modèle long terme.

Le changement de ton est net : de « nous ne prévoyons pas que 2026 soit inférieur à 2025 » (octobre 2025) à un plan d'expansion de capacité sur deux ans. La direction ne gère plus une reprise, elle gère un **rationnement**.

---

### Signaux d'alerte bilan

- **Trésorerie** : 7 582 M€ de disponibilités et placements court terme à fin T2, contre 8 376 M€ à fin T1 et 12 741 M€ fin 2024. La baisse est **volontaire** (rachats d'actions, dividendes, capex de capacité), mais mérite un suivi si le rythme d'investissement s'accélère.
- **Stocks et acomptes clients** : postes structurellement volumineux compte tenu de cycles de production de 12 à 18 mois. À surveiller en cas de décalage de livraisons.
- **Backlog** : 38,8 Mds€ fin 2025 ; la presse évoque un niveau record autour de 45 Mds€ mi-2026. Ce chiffre n'étant pas un engagement ferme irrévocable, il doit être lu comme un indicateur de visibilité, pas comme un revenu acquis.

---

### Réaction du marché

Le titre a progressé d'environ **2 à 5 % en séance** le 15 juillet, puis a poursuivi son ascension jusqu'à un plus haut à **1 999,96 $** sur l'ADR avant de refluer vers **1 844 $** mi-août (**1 554 €** à Amsterdam). Sur douze mois, l'action affiche environ **+148 %**, et **+72 % depuis le 1er janvier**. Le message du marché est clair : le relèvement de guidance était attendu, son **ampleur** ne l'était pas — mais un titre qui a doublé en un an ne réagit plus proportionnellement aux bonnes nouvelles. La barre est désormais très haute.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Ton et priorités

### Évolution du ton, 2024-2026

**2024 — Prudence sous tension.** L'année est marquée par le trimestre le plus douloureux de la décennie : le **15 octobre 2024**, une publication anticipée par erreur révèle un effondrement des prises de commandes ; le titre perd plus de 16 % en séance. Christophe Fouquet, PDG depuis avril 2024, adopte une communication défensive : reprise décalée à 2026, prudence sur la mémoire, transparence sur la Chine.

**2025 — Reconstruction méthodique.** Le discours se stabilise autour de trois axes : l'IA comme moteur durable, la baisse programmée de la Chine (« nos ventes en Chine reviendront autour de 20 % du total, conformément à leur part dans le carnet »), et la montée en puissance de l'EUV. Fin 2025, le ton bascule : la direction évoque des clients qui expriment une **vision nettement plus positive** du marché à moyen terme. Le T4 délivre **13,2 Mds€ de prises de commandes**, près du double du consensus.

**2026 — Confiance assumée, mais encadrée.** Le langage devient celui d'un fournisseur en situation de rationnement : « notre prise de commandes est restée extrêmement forte au premier semestre », « nos clients accélèrent leurs plans d'expansion de capacité », « visibilité accrue sur la demande à plus long terme ». Fouquet annonce l'expansion de capacité de 30 % pour 2027 et **étudie** un nouveau bond de 30 % en 2028. Le verbe « étudier » est important : il préserve une porte de sortie.

---

### Priorités répétées du management

**1. L'IA comme changement de régime, pas comme cycle.** Le management insiste sur le fait que la demande vient d'une intensification structurelle (plus de couches EUV par plaquette, HBM4, nœuds sub-2 nm), non d'un simple restockage.

**2. La capacité industrielle plutôt que la demande.** Le sujet n'est plus de vendre mais de **produire**. Toute la communication porte sur les slots, les délais et l'écosystème fournisseurs.

**3. La normalisation chinoise, assumée et anticipée.** Roger Dassen (directeur financier) a guidé la baisse à ~20 % dès 2025 et l'a tenue. C'est un point de crédibilité réel : ASML n'a pas subi la nouvelle sans l'avoir annoncée.

**4. Le High NA, présenté avec prudence.** Fouquet cible une production en volume en **2027-2028**, et passe 2026 à fiabiliser les machines chez les clients. Aucune promesse chiffrée agressive — ton délibérément conservateur.

**5. Le retour au capital comme signal.** Programme de rachat de **12 milliards €** sur 2026-2028, dividende intérimaire porté à **1,88 €** (+17 %). Message implicite : la génération de trésorerie est telle qu'elle finance l'expansion *et* la distribution.

---

### Analyse du sentiment

- **Confiance** : en hausse continue depuis le T4 2025, sans dérive promotionnelle. Le vocabulaire reste technique et quantifié.
- **Crédibilité** : élevée. Quatre trimestres consécutifs de dépassement du consensus de BPA, deux relèvements de guidance annuelle en six mois.
- **Zone d'ombre** : le management commente très peu la **soutenabilité du capex client au-delà de 2027**. Interroger un dirigeant d'ASML sur ce qui se passe si les hyperscalers ralentissent leurs commandes de puces d'IA reste l'exercice le moins bien couvert des conférences.
- **Signal faible à retenir** : Fouquet a publiquement déclaré que l'Europe était « nettement en retard » dans la course à l'IA, les États-Unis absorbant environ 80 % des puces avancées. C'est une prise de parole géopolitique inhabituelle pour un dirigeant néerlandais — et un indice de la concentration croissante de sa clientèle.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Christophe Fouquet — Président du Directoire et Directeur Général (depuis avril 2024)

**Parcours** : ingénieur français formé à Grenoble, entré chez ASML en 2008 après un début de carrière chez Applied Materials et KLA. Il gravit l'échelle technique — responsable Applications, puis **directeur de l'activité EUV** à partir de 2018, puis directeur des opérations commerciales — avant d'être nommé Chief Business Officer en 2022 puis directeur général en avril 2024, succédant à Peter Wennink.

**Bilan chiffré depuis sa nomination** :
- Chiffre d'affaires porté de 27,6 Mds€ (2024) à **32,7 Mds€ (2025)** puis une guidance de **43-45 Mds€ pour 2026**
- Résultat net 2025 record à **9,6 Mds€**, marge brute portée de 51,3 % à 52,8 % puis 54 % au T2 2026
- Carnet de commandes record (38,8 Mds€ fin 2025) après le creux de fin 2024
- Décision d'augmenter la capacité EUV de 30 % pour 2027 — le pari industriel le plus lourd de sa mandature
- Plan de **réduction de 1 700 postes (~4 % des effectifs)** annoncé début 2026, ciblé sur les fonctions management et IT, en pleine croissance du chiffre d'affaires : signal de discipline de coûts assez rare dans un secteur en boom

**Point notable** : Fouquet est **l'homme de l'EUV**. Il a dirigé le programme qui constitue aujourd'hui l'intégralité du moat. C'est un avantage de légitimité technique considérable — et un biais potentiel, analysé plus bas.

---

### Roger Dassen — Directeur Financier (depuis 2018)

Ancien associé global de Deloitte, en charge de l'audit et du risque. Sa communication financière est réputée pour sa **précision et son absence de complaisance** : c'est lui qui a guidé la baisse chinoise à 20 % un an avant qu'elle ne se matérialise, et qui a maintenu ce chiffre malgré les tentations d'optimisme. Sa crédibilité est un actif immatériel réel du dossier.

---

### Rémunération et alignement

La rémunération totale du directeur général s'est établie autour de **7 M€ en 2025** (contre ~5 M€ en 2024), pour un résultat net de 9,6 Mds€ — soit environ 0,07 % du bénéfice, un ratio modeste au regard des standards américains du secteur. La structure comprend une part significative d'actions de performance. En revanche, **aucun dirigeant ne détient une participation matérielle au capital** : ASML est une société à actionnariat totalement dispersé, sans actionnaire de référence. L'alignement passe par les plans d'actions, pas par la propriété.

---

### Allocation du capital — historique

| Décision | Montant | Lecture |
|---|---|---|
| Acquisition Cymer (2013) | ~2,5 Mds$ | **Excellente** — internalisation de la source EUV, décisive pour le programme |
| Acquisition HMI (2016) | ~2,7 Mds€ | Bonne — métrologie e-beam, complémentaire |
| Acquisition Berliner Glas (2020) | Non divulgué | Bonne — sécurisation d'un composant critique |
| Participation dans Carl Zeiss SMT | Minoritaire | Stratégique — verrouille l'amont |
| Investissement dans Mistral AI (2025) | ~1,3 Md€ | **À surveiller** — diversification hors cœur de métier, logique industrielle défendable mais exécution incertaine |
| Rachats d'actions 2026-2028 | **12 Mds€** | Discipliné, mais exécuté à des multiples historiquement élevés |
| Dividende | 7,50 € au titre de 2025 ; intérimaire 1,88 € en 2026 | Croissant, prudent (rendement ~0,5 %) |

**Rentabilité du capital** : le ROE d'ASML s'établit durablement au-dessus de **40 %**, le ROIC largement au-dessus du coût du capital. La question n'est pas la qualité de l'allocation mais son **arbitrage** : racheter des actions à environ 41x les bénéfices prospectifs, dans un secteur cyclique près d'un pic de cycle, est une décision qui devra être jugée a posteriori.

---

### Signaux d'alerte

- **Pas d'actionnaire de référence** : gouvernance dispersée, direction structurellement autonome. Contrepouvoir principalement réglementaire (État néerlandais) plutôt qu'actionnarial.
- **Biais de l'ingénieur** : une direction issue de la technique peut sous-estimer le risque de **surcapacité**. Ajouter 30 % de capacité EUV pour 2027 sur la foi d'un carnet non irrévocable est le pari le plus lourd du dossier.
- **Diversification Mistral AI** : 1,3 Md€ dans une société d'IA générative est un écart notable au principe de concentration sur le métier. À documenter et à suivre.
- **Rémunération** : en forte hausse (+40 % en un an) mais partant d'un niveau bas ; pas de dérive caractérisée à ce stade.
- **Type de dirigeants** : **gestionnaires professionnels issus du rang**, pas fondateurs. À ce stade de maturité de l'entreprise, c'est l'archétype adapté — l'enjeu est l'exécution industrielle, pas la vision entrepreneuriale.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

Le titre ASML est **structurellement volatil malgré la qualité de l'actif**. La raison est simple : les revenus sont lumpy, la visibilité passe par des prises de commandes trimestrielles erratiques, et le dossier est devenu un **proxy géopolitique**.

### Hausses significatives (+5 % et plus)

**2021 — Le sacre de l'EUV.** L'année du basculement : pénurie mondiale de puces, plans CHIPS Act et EU Chips Act, reconnaissance du caractère indispensable de l'EUV. Le titre triple en valeur sur deux ans et ASML devient la première capitalisation européenne.

**Janvier 2026 — Prises de commandes record.** Le 28 janvier, ASML publie **13,2 Mds€ de prises de commandes au T4 2025**, presque le double du consensus Bloomberg (6,85 Mds$), portant le carnet à **38,8 Mds€**. L'ADR bondit de 7 % à l'ouverture… avant de clôturer en baisse de 2,2 % après la conférence, la direction ayant tempéré le calendrier de conversion en chiffre d'affaires. Illustration parfaite du régime dans lequel évolue le titre : **les bonnes nouvelles sont attendues, les nuances sont sanctionnées**.

**Mars-juin 2026 — Reprise en V.** Le marché intègre le passage du High NA de la R&D à la production de masse et l'accélération du capex TSMC (52-56 Mds$ annoncés pour 2026). Le titre passe d'environ 1 186 € (mi-mars) à plus de 1 400 € en juin.

**15 juillet 2026 — Le relèvement de guidance.** Le passage de 36-40 Mds€ à **43-45 Mds€** de CA 2026 et de 51-53 % à **54-56 %** de marge brute provoque un mouvement de l'ordre de +2 à +5 % en séance, prolongé jusqu'à un plus haut de **1 999,96 $** sur l'ADR.

---

### Baisses significatives (-5 % et plus)

**15 octobre 2024 — Le trimestre noir.** Publication accidentelle avec un jour d'avance de prises de commandes très inférieures aux attentes et d'une guidance 2025 abaissée. **Le titre chute de plus de 16 % en une séance**, la plus forte baisse journalière depuis 1998. Leçon durable : c'est le carnet de commandes, pas le chiffre d'affaires, qui fixe le cours.

**Janvier 2025 — Choc DeepSeek.** L'annonce d'un modèle d'IA chinois entraîné à moindre coût fait craindre une baisse structurelle de la demande de calcul. Toutes les valeurs de la chaîne semi-conducteurs corrigent violemment. Le contrecoup s'avérera erroné, mais l'épisode montre la sensibilité du titre au **récit de l'IA**, pas seulement à ses fondamentaux.

**Septembre 2024 et 2025 — Vagues de contrôles à l'export.** Chaque annonce néerlandaise ou américaine de restriction sur la Chine se traduit par une baisse immédiate de 3 à 8 %.

**7 avril 2026 — Le MATCH Act.** Des parlementaires américains proposent le *Multilateral Alignment of Technology Controls on Hardware Act*, visant à bloquer la vente **et le service** des DUV d'immersion en Chine. Le titre recule d'environ 4 % ; JPMorgan chiffre l'impact potentiel jusqu'à **10 % du BPA**.

**Mi-juillet à mi-août 2026 — Consolidation.** Après le plus haut à 1 999,96 $, la capitalisation recule d'environ **11 % en trente jours** pour revenir à ~1 844 $ (1 554 € à Amsterdam). Pas de nouvelle négative identifiée : simple prise de bénéfices sur un titre en hausse de 148 % sur un an.

---

### Facteurs structurels

- **Proxy du capex des fondeurs** : le cours réagit davantage aux annonces de TSMC, Samsung et Intel qu'à ses propres résultats.
- **Proxy géopolitique** : chaque tension Washington-La Haye-Pékin se transmet immédiatement au cours.
- **Statut de première capitalisation européenne** : flux passifs importants (indices STOXX, MSCI, ETF), qui amplifient les mouvements dans les deux sens.
- **Double cotation** : Amsterdam (**1 554 €**) et Nasdaq via ADR (**1 844 $**) — l'écart de performance intègre l'évolution du taux de change EUR/USD, un facteur souvent oublié par l'investisseur français.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Point de départ

| Exercice | BPA réalisé | Croissance |
|---|---|---|
| 2024 | ~19,90 € | — |
| 2025 | **24,73 €** | +24 % |
| S1 2026 (T1+T2) | **14,74 €** | +23 % sur un an |

---

### Hypothèses de modélisation

**Chiffre d'affaires** :
- 2026 : guidance de **43 à 45 Mds€**, soit une croissance de **+32 à +38 %**. Retenons le point médian de **44 Mds€**.
- 2027 : capacité EUV Low NA en hausse de 30 % (de ~65 à ~85 unités), DUV immersion de ~130 à ~170 unités. En supposant une conversion partielle et un mix stable, **52 à 56 Mds€** paraît raisonnable, soit +20 à +27 %.
- 2028 : nouvelle hausse de capacité de 30 % **à l'étude**, non confirmée. Fourchette large de **58 à 66 Mds€**.

**Marges** :
- Marge brute 2026 : **54-56 %** (guidance) ; effet de mix EUV et upgrades.
- 2027-2028 : poursuite de l'amélioration vers **56-58 %**, avec un plafond structurel lié au coût du High NA en phase de montée en cadence.
- Marge opérationnelle : 37 % au T2 2026, potentiel de **40-42 %** en 2027-2028 par levier opérationnel (R&D et SG&A croissant moins vite que le CA).

**Coûts de financement** : marginaux. ASML est en position de trésorerie nette, avec une dette obligataire longue à coupons faibles. Non déterminant pour le BPA.

**Dilution / relution** : le programme de rachat de **12 Mds€ sur 2026-2028** représente environ 2 % du capital par an aux cours actuels — soit une **relution de l'ordre de +1,5 à +2 % par an** sur le BPA. Effet réel mais modeste à ces multiples.

**Fiscalité** : taux effectif annualisé guidé à **~17 %**.

---

### Estimations BPA

| Exercice | BPA estimé | Croissance | P/E au cours de 1 554 € |
|---|---|---|---|
| 2025 (réalisé) | **24,73 €** | +24 % | 63x |
| **2026E** | **36,00-38,00 €** | **+46 à +54 %** | **~42x** |
| **2027E** | **43,00-48,00 €** | **+18 à +28 %** | **~34x** |
| **2028E** | **48,00-56,00 €** | **+10 à +18 %** | **~30x** |

*Le consensus de place se situe autour de 35,7 € pour 2026 et 42-43 € pour 2027 — nos fourchettes sont légèrement au-dessus sur 2026, la guidance relevée n'étant pas encore pleinement intégrée dans toutes les estimations.*

---

### Sensibilité

- **Scénario optimiste** (conversion intégrale de la capacité 2027, marge brute 58 %, HBM4 soutenu) : BPA 2028 vers **58-60 €**, soit un P/E 2028 de ~26x — le titre resterait défendable.
- **Scénario de base** : BPA 2028 autour de **52 €**, P/E 2028 de ~30x pour une croissance retombée à 10-15 %. Valorisation tendue mais pas absurde.
- **Scénario pessimiste** (digestion du cycle IA en 2028, décalage des livraisons, durcissement chinois) : CA 2028 stagnant autour de 50 Mds€, BPA **~42 €**. À un multiple normalisé de 25x, le cours reviendrait vers **1 050 €**, soit **-32 %** par rapport au niveau actuel.

**Conclusion** : le BPA d'ASML va, selon toute vraisemblance, **doubler entre 2025 et 2028**. Le débat n'est pas là. Il porte sur le multiple que le marché acceptera de payer une fois que cette croissance sera derrière lui — car le pic de croissance en pourcentage se situe très probablement **en 2026**.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Avantages concurrentiels et pérennité des barrières
Le moat d'ASML n'est pas une opinion : **100 % de part de marché sur l'EUV, plus de 90 % sur la lithographie totale**, un partenaire optique exclusif (Zeiss SMT) que personne ne peut dupliquer, et 30 ans de savoir-faire accumulé. Aucune barrière à l'entrée de la cote mondiale n'est aussi vérifiable. Elle n'est pas menacée à horizon 5-7 ans.

### Leviers de croissance
**1. Intensité lithographique croissante.** Chaque nœud (2 nm, 1,4 nm) exige davantage de couches EUV par plaquette. ASML capte une part *croissante* d'un capex sectoriel lui-même en croissance — double effet multiplicatif.

**2. Le HBM4 change la nature de la demande mémoire.** L'empilement de mémoire haute bande passante consomme un nombre de couches EUV sans précédent. La mémoire, historiquement le parent pauvre de la demande EUV, devient un second moteur.

**3. Rationnement structurel.** ASML augmente sa capacité EUV Low NA de **30 % pour 2027** et étudie **+30 % pour 2028**. Une entreprise n'engage pas un tel investissement industriel sans engagements clients solides. Le pouvoir de prix reste intact tant que la demande excède l'offre.

**4. Le service comme rente cachée.** L'Installed Base Management (2,76 Mds€ au T2 2026, **+32 % sur un an**) croît mécaniquement avec le parc installé, à marge supérieure et sans cyclicité. Plus de 5 000 machines installées : c'est un actif d'annuité rarement valorisé correctement.

**5. Surprises de bénéfices répétées.** Quatre trimestres consécutifs de dépassement du consensus ; deux relèvements de guidance annuelle en six mois (34-39 → 36-40 → **43-45 Mds€**). Le levier opérationnel dépasse systématiquement les modèles des analystes.

**6. Allocation du capital lisible.** 12 Mds€ de rachats sur 2026-2028, dividende croissant, aucune acquisition transformante risquée. ROE durablement supérieur à 40 %.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Trois risques susceptibles de nuire durablement

**1. La cyclicité n'a pas été abolie, elle a été décalée.** L'équipement de semi-conducteurs est **le secteur le plus cyclique de la tech**. Le capex WFE attendu à ~150 Mds$ en 2026 constitue un sommet historique. Si les hyperscalers ralentissent leurs commandes de puces d'IA en 2027-2028, les fondeurs décaleront leurs commandes — et ASML découvrira que son carnet de 45 Mds€ n'est **pas un contrat ferme**. C'est exactement ce qui s'est produit en octobre 2024.

**2. Le risque géopolitique est asymétrique et croissant.** La Chine est passée de 33 % du CA (2025) à ~20 % (2026), après un pic à 47 % au T3 2024. Le **MATCH Act** américain vise désormais le DUV d'immersion et son service. La direction de la trajectoire est claire : **vers zéro**. Chaque restriction accélère simultanément l'effort d'indigénisation chinois — ASML perd un marché aujourd'hui et finance involontairement un concurrent pour demain.

**3. La surcapacité auto-infligée.** Décider +30 % de capacité EUV pour 2027 et étudier +30 % de plus pour 2028 est un pari industriel énorme, engageant aussi Zeiss et TRUMPF. Si la demande fléchit, ASML se retrouve avec une base de coûts fixes gonflée au pire moment. L'histoire du secteur est jonchée d'expansions de capacité décidées au sommet du cycle.

### Analyse pré-mortem
**Que s'est-il passé si le titre vaut 1 000 € en 2029 ?** Scénario : l'investissement mondial en IA se normalise en 2028 après une phase de suraccumulation de capacité de calcul ; TSMC et Samsung décalent de six à douze mois leurs commandes ; la Chine est totalement fermée par un MATCH Act adopté ; le High NA reste cantonné à quelques dizaines d'unités faute de retour sur investissement clair pour les fondeurs. Le CA plafonne vers 50 Mds€, le BPA vers 42 €, et le multiple se comprime de 42x à 24x — **soit une baisse de 35 %** malgré une entreprise toujours excellente.

### Les multiples actuels sont-ils trop élevés ?
Le titre se paie **~56x les bénéfices des douze derniers mois** et **~42x les bénéfices 2026 estimés**, après une hausse de **148 % sur un an**. C'est le haut de la fourchette historique. Le potentiel implicite par rapport à l'objectif de cours consensuel (~2 117 $ contre ~1 844 $) n'est plus que d'environ **15 %** — pour un actif dont le pic de croissance en pourcentage est probablement en 2026.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le marché valorise ASML comme un actif d'infrastructure quasi obligataire, avec la certitude que le monopole garantit le résultat. Or le monopole garantit le **prix**, pas le **volume**. ASML contrôle la marge par machine ; elle ne contrôle ni le nombre de fabs construites dans le monde, ni les décisions de capex de trois clients, ni les décisions de Washington. À 42x les bénéfices prospectifs, l'investisseur ne paie pas le monopole — **il paie l'hypothèse que le capex d'IA ne connaîtra pas de trou d'air**. Ce sont deux paris très différents, et seul le second est réellement incertain.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

ASML publie en **US GAAP** (référentiel principal des publications trimestrielles et du 20-F) et en IFRS pour ses comptes statutaires néerlandais. Cette dualité est une première source de complexité de lecture.

### Comptabilisation des revenus — RISQUE MODÉRÉ
C'est le poste le plus sensible. Une machine EUV vaut jusqu'à 250 M€ et un système High NA environ 380 M$ : **la date de reconnaissance d'un seul système peut déplacer un trimestre entier**. Les règles diffèrent selon le type de système (reconnaissance à l'expédition pour les modèles matures et qualifiés, à l'acceptation client pour les nouvelles configurations).

**À surveiller** : la ligne *deferred revenue*, la politique de reconnaissance des **premiers exemplaires High NA**, et l'écart entre systèmes expédiés et systèmes reconnus en chiffre d'affaires sur un trimestre donné.

### Le backlog — RISQUE ÉLEVÉ (de communication, pas de fraude)
Le carnet de commandes (38,8 Mds€ fin 2025) est présenté comme un indicateur de visibilité. Mais ASML précise elle-même dans ses facteurs de risque que le carnet est exposé aux **annulations, décalages et restrictions à l'export**. Ce n'est pas une créance ; c'est une intention documentée.

**À surveiller** : la volatilité trimestrielle des prises de commandes, et tout changement de définition ou de granularité de publication de cet indicateur — un fournisseur qui cesse de publier une métrique qui l'a desservie mérite toujours une question.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE À MODÉRÉ
Le goodwill provient principalement de **Cymer (2013)**, **HMI (2016)** et **Berliner Glas (2020)**. Aucune dépréciation significative n'a été constatée depuis, ce qui est cohérent avec la performance opérationnelle de ces actifs (la source EUV de Cymer est un composant central du produit phare).

**À surveiller** : l'évaluation de la participation de **1,3 Md€ dans Mistral AI**. Un investissement minoritaire dans une société non cotée du secteur de l'IA générative pose une question classique d'évaluation à la juste valeur — les niveaux de valorisation de ce segment sont extrêmement mobiles.

### Information sectorielle — RISQUE MODÉRÉ
ASML publie **un seul segment opérationnel**. La ventilation entre EUV, DUV, métrologie et Installed Base Management est fournie à titre indicatif, sans compte de résultat par segment. **On ne connaît donc pas la marge réelle de l'EUV, ni celle du service.** C'est le point d'opacité le plus significatif du dossier : l'investisseur doit prendre la rentabilité par activité sur la parole du management.

### Contrats de location (IFRS 16 / ASC 842) — RISQUE FAIBLE
Immobilier industriel et bureaux principalement. Montants non structurants au regard du bilan. Pas d'anomalie identifiée.

### Parties liées — RISQUE FAIBLE
Actionnariat totalement dispersé, absence d'actionnaire de contrôle. La relation avec **Carl Zeiss SMT** (participation minoritaire d'ASML + cofinancement de R&D + fournisseur exclusif) constitue toutefois une relation économique profonde qui mérite une lecture attentive des annexes : flux financiers croisés, engagements d'achat, financement de capacité.

### Engagements conditionnels — RISQUE MODÉRÉ
Deux familles : les **engagements d'achat auprès des fournisseurs critiques** liés à l'expansion de capacité de 30 % pour 2027 (obligations fermes prises sur la foi d'un carnet révocable — c'est le décalage à surveiller), et les **risques réglementaires liés aux contrôles à l'export**, dont l'impact chiffré n'est jamais quantifié en amont.

### Rémunération en actions — RISQUE FAIBLE
Niveau modéré au regard des standards du secteur technologique. La dilution est plus que compensée par le programme de rachat de 12 Mds€. Rémunération du dirigeant en hausse marquée (~5 M€ → ~7 M€) mais partant d'un niveau bas.

### Flux de trésorerie vs résultat net — POINT DE VIGILANCE
La trésorerie et placements court terme sont passés de **12,7 Mds€ (fin 2024) à 7,6 Mds€ (fin T2 2026)** alors même que le résultat net atteignait des records. L'explication est connue et légitime — rachats d'actions, dividendes, capex d'expansion — mais l'écart mérite un suivi rigoureux : **le besoin en fonds de roulement d'une expansion de capacité de 30 % est massif** (stocks, en-cours, acomptes fournisseurs).

**À surveiller** : la conversion résultat net → free cash-flow trimestre après trimestre en 2027, ainsi que l'évolution des stocks rapportée au chiffre d'affaires.

---

### Verdict global

**Risque comptable : FAIBLE.** ASML est auditée par **Deloitte**, cotée au Nasdaq (donc soumise au SOX et au 20-F), et sa communication financière est considérée comme l'une des plus rigoureuses d'Europe. Aucun signal de manipulation n'est identifié. Les zones de vigilance relèvent de la **structure du modèle** — reconnaissance de revenus par machine unitaire, carnet non ferme, segment unique — et non d'une intention comptable douteuse. La discipline consiste à ne pas confondre l'absence de red flag comptable avec l'absence de risque économique.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Christophe Fouquet et Roger Dassen

### Stratégie et avantage concurrentiel

**1.** Vous augmentez la capacité EUV Low NA de 30 % pour 2027 et étudiez 30 % de plus pour 2028. **Quelle part de ce plan repose sur des engagements clients contractuellement fermes**, avec pénalités d'annulation, plutôt que sur des intentions inscrites au carnet ?

**2.** Le carnet de commandes est exposé aux annulations et décalages — octobre 2024 l'a rappelé brutalement. **Quel est aujourd'hui le taux d'annulation ou de report historique** sur votre carnet, et pourquoi devrions-nous croire que le cycle actuel se comportera différemment ?

**3.** Votre capacité est contrainte par Zeiss SMT et TRUMPF autant que par vous-mêmes. **Ces partenaires ont-ils déjà engagé les investissements correspondant à +30 % en 2027 et +30 % en 2028**, et quel est leur point de rupture ?

**4.** Le High NA coûte environ 380 M$ par unité. **Quel retour sur investissement démontré pouvez-vous présenter à un fondeur** par rapport à un double patterning Low NA, et pourquoi TSMC reste-t-elle plus prudente qu'Intel sur ce calendrier ?

### Allocation du capital et rentabilité

**5.** Vous rachetez pour 12 Mds€ d'actions sur 2026-2028, à des multiples proches de leurs plus hauts historiques. **Quel niveau de valorisation vous conduirait à ralentir ces rachats** au profit de la trésorerie ou du dividende ?

**6.** La trésorerie et les placements court terme sont passés de 12,7 Mds€ fin 2024 à 7,6 Mds€ fin T2 2026. **Quel plancher de liquidité considérez-vous comme intangible** compte tenu du besoin en fonds de roulement de l'expansion de capacité ?

**7.** Vous avez investi environ 1,3 Md€ dans Mistral AI. **Quelle est la thèse industrielle précise** de cet investissement, comment est-il évalué au bilan, et quels jalons vous conduiraient à le considérer comme un échec ?

**8.** ASML ne publie **qu'un seul segment opérationnel**. Pouvez-vous indiquer l'écart de marge brute entre l'EUV, le DUV et l'Installed Base Management, ne serait-ce qu'en ordre de grandeur ? À défaut, **qu'est-ce qui vous en empêche** ?

### Risques

**9.** La Chine est passée de 47 % des ventes de systèmes au T3 2024 à 19 % au T1 2026. **Modélisez-vous un scénario à 0 %**, et quel serait son impact sur le chiffre d'affaires, la marge brute et le résultat par action ?

**10.** Le MATCH Act viserait aussi le **service** de vos machines DUV en Chine. Quelle part de vos revenus Installed Base Management provient de la Chine, et **cette rente serait-elle perdue de façon permanente** ?

**11.** Chaque restriction accélère l'effort d'indigénisation chinois. **Quel horizon retenez-vous en interne** pour qu'un acteur chinois produise un DUV d'immersion qualifié en production de masse ? Et pour un EUV ?

**12.** Si l'investissement mondial en infrastructure d'IA se normalisait de 20 à 30 % en 2028, **quelle serait votre flexibilité de coûts** ? Quelle part de votre base de coûts est réellement variable à douze mois ?

### Vision long terme et gouvernance

**13.** Le HBM4 tire aujourd'hui la demande EUV côté mémoire. **Quelle est la durabilité de ce moteur** si l'architecture mémoire des accélérateurs d'IA évolue vers d'autres solutions dans les cinq prochaines années ?

**14.** ASML n'a aucun actionnaire de référence et une direction issue du rang. **Quel contrepouvoir interne existe-t-il** pour contester une décision d'expansion industrielle majeure, au-delà du conseil de surveillance ?

**15.** Quel est le risque que vous sous-estimez le plus aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

Précision liminaire : personne de sérieux ne conteste la qualité industrielle d'ASML. La thèse baissière ne porte pas sur l'entreprise mais sur **le prix payé pour une hypothèse implicite** — celle d'un capex d'IA sans discontinuité.

### 1. Le monopole protège le prix, pas le volume

C'est l'erreur de raisonnement centrale des optimistes. ASML contrôle totalement **combien elle facture** une machine. Elle ne contrôle **rien** de ce qui détermine combien de machines seront commandées : les décisions de capex de trois clients, le rythme de construction de fabs dans le monde, la demande finale de puces d'IA. Un monopole sur un marché cyclique reste **un actif cyclique**. Octobre 2024 — une chute de plus de 16 % en une séance sur un simple trou d'air de commandes — en constitue la démonstration expérimentale, sur cette valeur précise, il y a moins de deux ans.

### 2. La concentration des revenus est extrême et croissante

**Trois clients** — TSMC, Samsung, Intel — décident de l'essentiel des ventes de systèmes avancés. À cela s'ajoute que ces trois clients dépendent eux-mêmes d'une poignée de donneurs d'ordre (NVIDIA, Apple, hyperscalers). La chaîne est donc : *quelques hyperscalers → quelques fabless → trois fondeurs → ASML*. Une décision de rationalisation prise dans deux ou trois salles de conseil d'administration suffit à décaler le chiffre d'affaires d'ASML de plusieurs milliards. Le dirigeant d'ASML a lui-même souligné que les États-Unis absorbent environ **80 % des puces avancées** : cette concentration géographique est un facteur de fragilité, pas de solidité.

### 3. Le carnet de commandes est un mirage rassurant

38,8 Mds€ fin 2025, environ 45 Mds€ selon la presse mi-2026. Ces chiffres sont brandis comme une garantie. Ils n'en sont pas une : ASML reconnaît explicitement dans ses facteurs de risque le risque **d'annulation, de décalage et de blocage à l'export**. Un carnet de commandes de biens d'équipement à 200 M€ l'unité, dans un secteur où les clients ajustent leurs plans deux fois par an, est un indicateur de sentiment. **Le trimestre où ce carnet cessera de croître, le multiple se comprimera avant même que le chiffre d'affaires ne bouge.**

### 4. La Chine : un tiers du marché perdu, et un concurrent financé

La Chine représentait 33 % du chiffre d'affaires en 2025 et environ 47 % des ventes de systèmes au pic du T3 2024. Elle est tombée à **19 % au T1 2026**. Le **MATCH Act** vise désormais aussi le **service** des DUV d'immersion — c'est-à-dire la partie récurrente et à haute marge. La trajectoire est unidirectionnelle : vers zéro. Pire, chaque restriction transforme une contrainte politique en **programme industriel national chinois** doté de moyens illimités. Sur un horizon de dix à quinze ans, ASML finance involontairement l'apparition de son unique concurrent potentiel.

### 5. L'expansion de capacité au sommet du cycle — le classique du secteur

Décider +30 % de capacité EUV pour 2027, étudier +30 % de plus pour 2028, entraîner Zeiss et TRUMPF dans la même direction : voilà exactement le type de décision que les entreprises d'équipement prennent au **sommet** des cycles, jamais au creux. Si la demande fléchit de 20 %, ASML se retrouve avec une structure de coûts fixes dimensionnée pour un monde qui n'existe plus, et une chaîne de fournisseurs en surcapacité qu'elle devra soutenir. La direction, issue de l'ingénierie et non de la finance, présente le plus grand risque du dossier comme une bonne nouvelle.

### 6. La valorisation ne pardonne aucun décalage

À **~56x les bénéfices des douze derniers mois** et **~42x ceux de 2026 estimés**, après **+148 % en un an** et **+72 % depuis le 1er janvier**, ASML se paie plus cher que Applied Materials (~34x) et Lam Research (~34x) alors que sa croissance de 2027-2028 devrait *converger* vers la leur. Le titre n'a pas besoin d'une mauvaise nouvelle pour baisser : **il lui suffit d'une bonne nouvelle légèrement moins bonne qu'attendu.** Janvier 2026 l'a montré — 13,2 Mds€ de commandes, presque le double du consensus, et le titre a clôturé en baisse.

### Que se passe-t-il si la croissance déçoit de 20 à 30 % ?
Chiffre d'affaires 2028 à 48 Mds€ au lieu de 62, BPA à ~40 € au lieu de ~54, multiple normalisé à 24x au lieu de 42x : le cours reviendrait vers **960 €**, soit **-38 %**. Aucune fraude, aucun effondrement du moat — simplement une normalisation de croissance et de multiple simultanée. C'est le scénario classique de l'actif de qualité acheté au mauvais prix.

### Le scénario catastrophe unique
**Une digestion mondiale du capex d'IA en 2027-2028.** Les hyperscalers ont accumulé une capacité de calcul qui excède la demande monétisable ; ils réduisent leurs commandes de 25 % ; TSMC et Samsung décalent leurs plans de fabs de douze mois ; le carnet d'ASML se dégonfle en deux trimestres ; la capacité tout juste installée devient un fardeau. Probabilité ? Difficile à estimer, mais **manifestement non nulle** : l'histoire des cycles d'investissement technologique (télécoms 2001, solaire 2011, mémoire 2019 et 2023) suggère qu'une phase de suraccumulation est la règle, pas l'exception.

### Conclusion short
ASML est **l'une des meilleures entreprises industrielles du monde**. Mais à 42x les bénéfices prospectifs, l'acheteur d'aujourd'hui n'achète pas le monopole — il achète le pari que trois clients continueront d'accélérer leurs investissements pendant trois ans, sans trou d'air, dans un contexte géopolitique qui se durcit. Le monopole survivra à ce pari. **Le multiple, non.**`,
  },
];

export default { ...meta, modules };
