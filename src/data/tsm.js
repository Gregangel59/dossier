// ============================================================
//  DOSSIER : Taiwan Semiconductor Manufacturing Co. (TSM)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "tsm",  // identifiant d'URL : /dossier/tsm
  ticker: "TSM",
  name: "Taiwan Semiconductor Manufacturing Co. (TSMC)",
  exchange: "NYSE (ADR) · TWSE 2330",
  sector: "Semi-conducteurs : fonderie de puces avancées",
  initials: "TSM",  // affiché dans la pastille
  tagline: "Le fondeur de l'IA mondiale : 72,5 % du marché de la fonderie, seul producteur en volume du 2 nm.",
  riskScore: 72,  // score du rapport de risque (ou null)
  riskLabel: "Risque faible",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "tsm.html",
  updated: "2026-10",  // période des données
  published: "2026-10-20",  // date de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

TSMC (Taiwan Semiconductor Manufacturing Company) a inventé en 1987 le modèle de la **fonderie pure** : l'entreprise ne conçoit et ne vend aucune puce sous sa propre marque. Elle **fabrique, sur commande, les puces conçues par ses clients** (Nvidia, Apple, Broadcom, AMD, Qualcomm, MediaTek…) dans ses usines de Hsinchu, Tainan, Taichung et Kaohsiung, et de plus en plus en Arizona, au Japon et en Allemagne.

En termes simples : les clients apportent le plan de la puce, TSMC apporte l'usine, le procédé de gravure et le savoir-faire industriel. Elle facture des **plaquettes de silicium (wafers) gravées**, puis, de plus en plus, l'**assemblage avancé** qui relie le processeur à sa mémoire (CoWoS, SoIC, InFO).

C'est un modèle d'une puissance rare :
- **Échelle** : 72,5 % du marché mondial de la fonderie au T2 2026 (TrendForce), plus de 500 clients et environ 300 procédés différents
- **Rentabilité** : marge brute de 66,4 % et marge nette de 51,1 % au T3 2026, des niveaux de logiciel dans une industrie lourde
- **Croissance** : chiffre d'affaires 2025 de NT$3 810 Md (~122 Md$), puis **+44 % attendus en dollars en 2026** (~176 Md$)

Le modèle repose sur une promesse résumée par la direction en trois piliers : **leadership technologique, excellence de fabrication et confiance des clients**. TSMC ne concurrence jamais ses clients, ce qui lui permet de servir à la fois Apple, Nvidia, AMD, Intel ou Qualcomm.

## Principaux produits et services

**Procédés de gravure avancés (79 % du CA wafers au T3 2026)** :
- **2 nm (N2)** : production de masse depuis le T4 2025, déjà 8 % du CA wafers au T3 2026 ; capacité plus que doublée en 2027
- **3 nm (N3)** : 33 % du CA wafers, le procédé phare des GPU et des puces de smartphones haut de gamme
- **5 nm (N5/N4)** : 28 %, cœur des accélérateurs IA de la génération actuelle
- **7 nm (N7/N6)** : 10 %
- **À venir** : A16 (alimentation par la face arrière) en 2026-2027, A14 en production de masse en 2028

**Procédés matures et de spécialité (~21 %)** : capteurs d'image, gestion de l'énergie, microcontrôleurs automobiles, radiofréquence (28 nm et au-delà).

**Assemblage avancé (packaging)** : CoWoS (le goulot d'étranglement mondial des accélérateurs IA), SoIC (empilement 3D), InFO (smartphones). La valeur d'une plaquette CoWoS approcherait celle d'une plaquette 7 nm (~10 000 $).

**Écosystème de conception (OIP)** : bibliothèques, kits de conception et partenariats avec les éditeurs de logiciels de conception (Synopsys, Cadence, Siemens EDA) et Arm, qui permettent aux clients de concevoir directement pour les procédés TSMC.

## Clients, fournisseurs, concurrents

**Clients** (part estimée du CA, non publiée par TSMC) : **Nvidia** (premier client depuis 2025, ~22 % du CA estimé en 2026), **Apple** (~18 %), puis Broadcom (puces sur mesure de Google, Meta, OpenAI), AMD, MediaTek, Qualcomm, Intel, Marvell, Amazon (Trainium via ses partenaires de conception), Sony. Les clients basés en **Amérique du Nord pèsent 79 % du CA** au T3 2026.

**Fournisseurs** : ASML (lithographie EUV, monopole mondial), Applied Materials, Lam Research, Tokyo Electron et KLA (équipements) ; Shin-Etsu, SUMCO et GlobalWafers (plaquettes vierges) ; JSR et Tokyo Ohka Kogyo (résines photosensibles) ; Taipower (électricité, intrant critique).

**Concurrents** : **Samsung Foundry** (5,9 % de part de marché), **Intel Foundry** (procédés 18A et 14A, soutenu par l'État américain), **SMIC** (5,4 %, champion chinois sans accès à l'EUV), UMC et GlobalFoundries sur les nœuds matures. Aucun ne produit aujourd'hui à volume comparable sur les nœuds de pointe.

## Modalités contractuelles et de paiement

- **Facturation en dollars** pour l'essentiel, ce qui expose les comptes en NT$ aux variations de change
- **Prix négociés annuellement** par procédé et par volume ; TSMC a relevé ses prix de 3 à 5 % sur les nœuds sous 5 nm en 2026, et des hausses allant jusqu'à 10 % sont évoquées pour 2027 (informations de presse, non confirmées)
- **Réservation de capacité** : les grands clients s'engagent des trimestres à l'avance ; lors des pénuries (2021-2023), certains ont versé des **acomptes** pour sécuriser de la capacité
- **Délais de paiement** courts (de l'ordre de 30 à 45 jours), créances de grande qualité
- **Coentreprises financées par les clients** : JASM au Japon (Sony, Denso, Toyota), ESMC en Allemagne (Bosch, Infineon, NXP), toujours **opérées par TSMC**

> **À retenir** : TSMC vend de la capacité de production rare. Quand la demande dépasse l'offre, comme en 2026 (C.C. Wei juge la demande liée à l'IA très supérieure à ce que TSMC peut livrer), elle fixe les prix ; la limite est sa capacité à construire des usines assez vite.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## La place de TSMC dans la chaîne de valeur

TSMC occupe le **maillon le plus étroit** de toute la chaîne des semi-conducteurs : la fabrication des puces de pointe. En amont, une poignée d'équipementiers et de chimistes ; en aval, des concepteurs de puces, des assembleurs de serveurs et les géants du cloud. Presque toute l'IA mondiale passe par ses usines taïwanaises.

### Amont : les intrants

**Équipements de production** (70 à 80 % du capex va aux procédés avancés) :
- **ASML** : seul fournisseur mondial de lithographie EUV (machines à plus de 150 M$ l'unité, plus de 350 M$ pour la version High-NA)
- **Applied Materials, Lam Research, Tokyo Electron** : dépôt, gravure, nettoyage
- **KLA** : inspection et métrologie
- **Advantest, Teradyne** : test

**Matériaux** :
- Plaquettes de silicium vierges : **Shin-Etsu, SUMCO, GlobalWafers, Siltronic, SK Siltron**
- Résines et chimie : **JSR, Tokyo Ohka Kogyo, Shin-Etsu Chemical, Entegris, Merck KGaA**
- Gaz ultra-purs et produits chimiques de haute pureté : fournisseurs mondiaux spécialisés, souvent installés sur les sites mêmes de TSMC

**Énergie et eau** : **Taipower** (électricité ; TSMC est l'un des plus gros consommateurs d'électricité de Taïwan), réseaux d'eau de Hsinchu et Tainan (sensibilité aux sécheresses, comme en 2021).

**Conception et propriété intellectuelle** : **Synopsys, Cadence, Siemens EDA** (logiciels de conception), **Arm** (architectures), partenaires de conception (**Alchip, Global Unichip** dont TSMC est actionnaire).

---

### TSMC : fabrication et assemblage avancé

**Fabrication des plaquettes** : giga-usines de Hsinchu, Taichung, Tainan et Kaohsiung (2 nm), auxquelles s'ajoutent **TSMC Arizona** (4 nm en production, 3 nm au T3 2027, 2 nm et A16 ensuite), **JASM** à Kumamoto (Japon) et **ESMC** à Dresde (Allemagne, 2027), plus Nankin en Chine (procédés matures).

**Assemblage avancé** : CoWoS et SoIC à Taïwan (Chunan, Chiayi, Tainan), premier site d'assemblage avancé prévu en Arizona.

**Chantier sans précédent** : près de 20 usines en cours de construction ou d'équipement (13 à Taïwan, 5 à 6 à l'étranger), contre 4 ou 5 en temps normal.

---

### Aval : les clients et l'usage final

**Concepteurs de puces (clients directs)** : Nvidia (GPU Blackwell, Rubin), Apple (puces A et M), Broadcom et Marvell (puces sur mesure de Google, Meta, OpenAI, Amazon), AMD (EPYC, Instinct), Qualcomm et MediaTek (smartphones), Intel (tuiles de processeurs PC), Sony (capteurs d'image, nouvelle coentreprise annoncée en août 2026).

**Mémoire associée (HBM)** : **SK hynix, Samsung, Micron** fournissent la mémoire empilée que TSMC assemble avec les GPU dans le CoWoS.

**Assembleurs et sous-traitants** : **ASE, Amkor** (test et assemblage, partenaire de TSMC en Arizona), **Foxconn (Hon Hai), Quanta, Wistron** (serveurs IA).

**Utilisateurs finaux** : hyperscalers (**Microsoft, Meta, Alphabet, Amazon, Oracle**), laboratoires d'IA (**OpenAI, Anthropic, xAI**), fabricants de smartphones et de PC, constructeurs automobiles.

---

### Schéma du parcours complet

\`\`\`
AMONT                      TSMC                          AVAL
ASML (EUV)          →   Fabrication des plaquettes  →   Concepteurs : Nvidia, Apple,
AMAT, Lam, TEL, KLA     (N2, N3, N5, N7…)               Broadcom, AMD, Qualcomm,
Shin-Etsu, SUMCO        Taïwan · Arizona · Japon         MediaTek, Intel, Marvell
JSR, TOK, Entegris      · Allemagne                            ↓
Taipower (énergie)            ↓                          Mémoire HBM : SK hynix,
Synopsys, Cadence,      Assemblage avancé                Samsung, Micron
Arm (conception)        CoWoS · SoIC · InFO                    ↓
                              ↓                          Serveurs : Foxconn, Quanta,
                        Test : ASE, Amkor                Wistron
                                                               ↓
                                                         Cloud et IA : Microsoft, Meta,
                                                         Alphabet, Amazon, Oracle, OpenAI
\`\`\`

**Le point clé** : TSMC est le **passage obligé** entre l'innovation des concepteurs et les centres de données. Ses seuls véritables « fournisseurs critiques » sont ASML et les producteurs de HBM ; ses clients, eux, n'ont pas d'alternative de même niveau à court terme. C'est cette asymétrie qui explique ses marges, et c'est aussi ce qui fait de Taïwan un point de fragilité pour toute l'économie numérique mondiale.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : TSMC ne publie qu'**un seul segment opérationnel** (la fonderie). Il n'existe donc ni EBITDA ni résultat net par segment. L'entreprise ventile en revanche son chiffre d'affaires par **plateforme d'application**, par **technologie de gravure** et par **zone géographique**. La rentabilité se lit au niveau du groupe.

### Par plateforme d'application (part du CA)

| Plateforme | 2021 | 2022 | 2023 | 2024 | 2025 | T3 2026 |
|---|---|---|---|---|---|---|
| **HPC** (IA, serveurs, PC) | 37 % | 41 % | 43 % | 51 % | 58 % | **68 %** |
| Smartphones | 44 % | 39 % | 38 % | 35 % | ~29 % | 21 % |
| Internet des objets | 9 % | 9 % | 8 % | 6 % | ~5 % | 4 % |
| Automobile | 4 % | 5 % | 6 % | 5 % | ~5 % | 4 % |
| Électronique grand public | 3 % | 3 % | 2 % | 1 % | ~1 % | 1 % |

**Lecture** : en cinq ans, TSMC est passée d'un **fournisseur de smartphones** à un **fabricant de l'infrastructure de l'IA**. Au T3 2026, le HPC a encore progressé de 22 % en un trimestre ; les smartphones (+10 %) et l'automobile (+23 %) restent dynamiques mais pèsent de moins en moins.

### Par technologie (part du CA wafers)

| Nœud | T3 2025 | T4 2025 | T1 2026 | T3 2026 |
|---|---|---|---|---|
| 2 nm | — | — | — | **8 %** |
| 3 nm | 23 % | 28 % | 25 % | 33 % |
| 5 nm | 37 % | 35 % | 36 % | 28 % |
| 7 nm | 14 % | 14 % | 13 % | 10 % |
| **≤ 7 nm (avancé)** | 74 % | 77 % | 74 % | **79 %** |

Le 2 nm est monté à 8 % du CA wafers dès son troisième trimestre de production, un rythme plus rapide que le 3 nm à ses débuts. Le 5 nm recule en part mais reste massif en valeur (accélérateurs IA de la génération actuelle).

### Par zone géographique (siège des clients)

| Zone | T3 2025 | T2 2026 | T3 2026 |
|---|---|---|---|
| **Amérique du Nord** | 76 % | 78 % | **79 %** |
| Reste du monde (Chine, Asie-Pacifique, Japon, EMEA) | 24 % | 22 % | 21 % |

La géographie reflète le siège des concepteurs (Nvidia, Apple, Broadcom, AMD, Qualcomm), pas le lieu de consommation des puces. La Chine continentale, autrefois proche de 20 % du CA, est tombée à un niveau à un chiffre sous l'effet des contrôles américains à l'export.

---

### Rentabilité consolidée au fil du temps (en NT$)

| Exercice | CA (Md NT$) | CA (Md$) | Marge brute | Marge opér. | Résultat net (Md NT$) | BPA (NT$) |
|---|---|---|---|---|---|---|
| 2021 | 1 587 | 56,8 | 51,6 % | 40,9 % | 597 | 23,01 |
| 2022 | 2 264 | 75,9 | 59,6 % | 49,5 % | 1 017 | 39,20 |
| 2023 | 2 162 | 69,3 | 54,4 % | 42,6 % | 839 | 32,34 |
| 2024 | 2 894 | 90,1 | 56,1 % | 45,7 % | 1 173 | 45,25 |
| 2025 | 3 810 | 122,4 | 59,9 % | ~50,8 % | 1 718 | 66,25 |
| 9 mois 2026 | 3 899 | 122,8 | ~66,8 % | ~59,0 % | 2 042 | 78,76 |

**EBITDA (estimation)** : TSMC ne publie pas d'EBITDA, mais en ajoutant les amortissements (environ NT$700 Md en 2025) au résultat opérationnel, on obtient un EBITDA de l'ordre de **NT$2 600 Md en 2025, soit une marge proche de 70 %**.

### Pourquoi ces évolutions ?

- **2022** : pénurie mondiale de puces, hausses de prix, taux d'utilisation maximal
- **2023** : correction des stocks (smartphones, PC), utilisation en baisse, marge brute ramenée à 54 %
- **2024-2025** : explosion de la demande d'accélérateurs IA ; montée en puissance du 3 nm et du CoWoS ; hausses de prix sélectives
- **2026** : nouvelle marche (marge brute record de 67,7 % au T2), malgré deux freins assumés : la **dilution du 2 nm** (2 à 3 points en phase de démarrage) et celle des **usines à l'étranger** (près de 2 points en 2026, puis 3 à 4 points dans les années suivantes)

> **À retenir** : un seul moteur explique presque tout, le HPC lié à l'IA. C'est la force du dossier (une croissance de 40 à 50 % sur une base de plus de 120 Md$) et sa principale concentration de risque.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. L'avance technologique : deux à trois ans d'avance sur la pointe
TSMC est la seule entreprise au monde à produire **en volume et avec de bons rendements** des puces en 3 nm puis en 2 nm. Le 2 nm, lancé au T4 2025, pesait déjà 8 % du CA wafers au T3 2026, et sa capacité doublera en 2027. Derrière, la feuille de route est tenue chaque année : A16 (alimentation par la face arrière), puis **A14 en production de masse en 2028**. Samsung a repoussé son 1,4 nm à 2029 ; Intel prévoit la production à risque de son 14A en 2028. Cette avance, accumulée sur des générations successives, est la base de tout le reste.

### 2. L'excellence de fabrication : le rendement comme barrière
Graver un procédé est une chose ; le produire à des **rendements élevés, à l'heure, sur des millions de plaquettes** en est une autre. C'est ce qui a coûté à Samsung une partie de ses clients en 3 nm et ce qui retient Intel depuis dix ans. Le CoWoS de TSMC, le plus grand du marché (5,5 fois la taille d'un réticule), afficherait un rendement de 98 %. Pour un client qui engage 1 Md$ dans la conception d'une puce 2 nm, le **risque d'exécution** prime sur le prix.

### 3. L'écosystème et les coûts de changement : un verrouillage par la conception
Une puce est conçue pour un procédé précis, avec les bibliothèques et les règles de conception de ce procédé (écosystème OIP, Synopsys, Cadence, Arm). **Changer de fonderie revient à refaire une grande partie de la conception**, à repasser des mois de validation et à prendre un risque de rendement. Les coûts de changement sont donc **élevés et récurrents** à chaque génération.

### 4. L'échelle et l'avantage de coût : un cercle vertueux
Avec 72,5 % du marché de la fonderie et un capex de 60 à 64 Md$ en 2026, TSMC peut amortir des machines EUV à plus de 150 M$ l'unité sur des volumes que personne d'autre n'atteint. Plus de volume, donc plus d'apprentissage, donc de meilleurs rendements, donc plus de clients : le **cercle vertueux de la courbe d'expérience** joue à plein.

### 5. La confiance : la neutralité du « pur fondeur »
TSMC ne vend pas ses propres puces : elle ne concurrence pas ses clients. Samsung (smartphones, mémoire) et Intel (processeurs) sont à la fois fondeurs et concurrents de leurs clients potentiels. Cette **neutralité**, entretenue depuis 1987, est un actif de réputation difficile à copier.

### 6. Le packaging avancé : un second fossé en construction
L'IA a déplacé une partie de la valeur vers l'assemblage (relier GPU et mémoire HBM). TSMC domine le CoWoS, dont la capacité croît de plus de 80 % par an (2022-2027), et prépare les générations suivantes (CoWoS à 14 réticules en 2028, intégration sur plaquette entière). Les clients achètent désormais une **solution complète « gravure + assemblage »**, ce qui renforce le verrouillage.

## Positionnement face à la concurrence

| Critère | TSMC | Samsung Foundry | Intel Foundry | SMIC |
|---|---|---|---|---|
| Part de marché fonderie (T2 2026) | **72,5 %** | 5,9 % | n.c. (surtout interne) | 5,4 % |
| Nœud de pointe en volume | **2 nm** | 2 nm (rendements à prouver) | 18A (surtout interne) | 7 nm (sans EUV) |
| Packaging avancé | **CoWoS, SoIC (leader)** | I-Cube, mémoire intégrée | EMIB, Foveros | Limité |
| Neutralité vis-à-vis des clients | **Totale** | Faible (concurrent) | Faible (concurrent) | Forte, mais marché chinois |
| Rentabilité de la fonderie | **Marge brute ~66 %** | Pertes opérationnelles récentes | Pertes opérationnelles | Marge brute ~20-25 % |

## Valeur perçue, marque et marketing

TSMC n'a **pas de marque grand public**, et n'en a pas besoin : sa marque, c'est la **fiabilité industrielle**. Les clients la citent dans leurs présentations comme un argument de qualité. Son « marketing » se fait par les symposiums technologiques annuels, la feuille de route publiée et le respect des calendriers. Elle peut **relever ses prix** (3 à 5 % sur les nœuds avancés en 2026, jusqu'à 10 % évoqués pour 2027) sans perdre ses clients.

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Très élevé** en période de pénurie comme aujourd'hui. Les clients se battent pour la capacité 3 nm, 2 nm et CoWoS. Limite : Nvidia et Apple pèsent ensemble environ 40 % du CA et ont, eux aussi, du poids ; TSMC évite d'abuser de sa position pour ne pas pousser ses clients vers Samsung ou Intel.
- **Vis-à-vis des fournisseurs** : **Élevé**, sauf face à ASML (monopole EUV) et aux trois producteurs de HBM. TSMC est le premier client d'ASML et co-développe les outils avec ses fournisseurs.
- **Vis-à-vis des États** : **Croissant mais à double tranchant**. TSMC est un enjeu de souveraineté : subventions (CHIPS Act, Japon, Allemagne), mais aussi pressions pour produire aux États-Unis (165 Md$ engagés en Arizona) et contrôles à l'export.

> **À retenir** : le fossé le plus solide n'est pas la technologie d'une génération, mais la **combinaison** avance technologique, rendement, écosystème et neutralité, renouvelée à chaque nœud. Un concurrent devrait réussir les quatre à la fois, plusieurs années de suite.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif : fondeurs mondiaux (octobre 2026)

| Société | Code Bloomberg | Cap. (Md$) | VE/CA | VE/EBIT | PER | Rdt div. | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|
| **TSMC** | **2330 TT / TSM US** | **~2 180** | **~13x** | **~23x** | **27x (12 mois) · ~19x (2027E)** | **~1,0 %** | **~32 %** |
| Samsung Electronics | 005930 KS | ~1 030 | ~3x | ~12x | ~12x (prévisionnel) | ~0,8 % | ~10 % |
| Intel | INTC US | ~475 | ~8x | n.s. | n.s. (bénéfices très faibles) | 0 % (suspendu en 2024) | ~3 % |
| SMIC | 981 HK | ~92 | ~7x | n.s. | ~60x | 0 % | ~7 % |
| UMC | 2303 TT / UMC US | ~28 | ~3x | ~15x | ~15x | ~5 % | ~17 % |
| GlobalFoundries | GFS US | ~27 | 3,8x | ~25x | 38x (12 mois) · 19x (prév.) | 0 % | ~6 % |
| **Médiane des pairs (hors TSMC)** | | | **~3,8x** | **~15x** | **~19x (prév.)** | **~0 %** | **~7 %** |

*Données estimatives arrêtées au 19-20 octobre 2026 (cours de clôture, publications trimestrielles, agrégateurs). Les multiples de Samsung, Intel, SMIC et UMC sont des ordres de grandeur : ils changent vite et doivent être vérifiés avant toute décision. « n.s. » = non significatif. Pour TSMC, ROE annualisé de 45,5 % au T3 2026.*

---

### Analyse comparative

**TSMC : une « prime de qualité » moins chère qu'il n'y paraît**
Sur la valeur d'entreprise rapportée au CA (~13x), TSMC paraît très chère face à ses pairs (~4x). Mais cette comparaison est trompeuse : TSMC dégage une **marge nette de 51 %**, contre quelques pourcents (ou des pertes) pour la fonderie de Samsung et d'Intel. Rapporté aux bénéfices, son **PER prévisionnel 2027 (~19x)** est au niveau de la médiane des pairs, alors que sa croissance des bénéfices (+69 % au T3) et sa rentabilité (ROE de 45 %) sont sans équivalent. C'est l'une des rares valeurs de l'IA qui se paie **moins cher que ses propres clients** (Nvidia, Broadcom, AMD se paient nettement plus cher).

**Samsung Electronics : le concurrent conglomérat**
Sa capitalisation a plus que doublé en un an, portée par le **supercycle de la mémoire** (HBM, DRAM), pas par la fonderie. Samsung Foundry recule (5,9 % du marché au T2 2026) malgré le contrat de 16,5 Md$ signé avec Tesla pour sa puce AI6 en 2 nm au Texas. C'est un rival crédible sur le papier (EUV, 2 nm, mémoire et packaging intégrés), mais qui doit encore **prouver ses rendements**.

**Intel : le concurrent soutenu par l'État américain**
Valorisé ~475 Md$ (×3 en un an), Intel compte l'État américain à son capital (~10 % depuis 2025) et a reçu un investissement de Nvidia. Son activité de fonderie a gagné des clients de prestige (Microsoft, Tesla et le projet Terafab sur le 14A, des commandes de Google rapportées en juin 2026). Ses multiples sont **non significatifs** faute de bénéfices : le marché paie une **option stratégique**, pas des résultats.

**SMIC : le champion chinois, sans EUV**
Troisième fondeur mondial (5,4 %), SMIC croît vite sur les nœuds matures grâce à la demande chinoise et à la politique d'autosuffisance de Pékin. Sans accès aux machines EUV, il plafonne vers le 7 nm : c'est une concurrence **sur les procédés matures**, pas sur l'IA de pointe.

**UMC et GlobalFoundries : les spécialistes des nœuds matures**
Rentabilité correcte, rendement du dividende élevé pour UMC, mais croissance faible et aucune présence sur la pointe. Ils montrent ce que vaut un fondeur **sans avance technologique** : 3 à 4 fois le CA.

---

### Le ratio qui compte : la rentabilité par dollar de capital
Dans la fonderie, la vraie mesure de l'avance est le **retour sur capitaux propres** sur un cycle complet. TSMC affiche **~32 % en moyenne sur cinq ans** (et 45,5 % au T3 2026) quand la médiane de ses pairs tourne autour de 7 %. Cet écart de 25 points, répété année après année malgré un capex record, est la preuve chiffrée du fossé économique.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T3 2026 (publiés le 15 octobre 2026)

### Chiffre d'affaires et bénéfices face aux attentes

| Indicateur | T3 2026 | Guidance / consensus | T3 2025 | Variation a/a |
|---|---|---|---|---|
| CA (Md$) | **46,72** | Guidance 44,6-45,8 · consensus ~45,4 | 33,10 | **+41,2 %** |
| CA (Md NT$) | 1 494,2 | consensus LSEG ~1 460 | 989,9 | +50,9 % |
| Marge brute | **66,4 %** | Guidance 65-67 % | 59,5 % | +6,9 pts |
| Marge opérationnelle | **58,7 %** | Guidance 56-58 % | 50,6 % | +8,1 pts |
| Résultat net (Md NT$) | **763,1** | consensus LSEG ~746 | 452,3 | **+68,7 %** |
| BPA par ADR | **4,60 $** | consensus ~4,42 $ | 2,92 $ | +57,5 % |
| ROE (annualisé) | 45,5 % | — | — | — |

**Verdict : dépassement net sur toute la ligne.** Le CA dépasse le haut de la fourchette de 0,9 Md$ (+2,9 % vs consensus), le BPA par ADR bat le consensus de ~4 %, le résultat net de ~2,3 %. C'est le **sixième trimestre record consécutif**. La marge opérationnelle dépasse même le haut de la guidance.

---

### Moteurs par plateforme

- **HPC (IA, serveurs)** : +22 % sur un trimestre, **68 % du CA**. Accélérateurs IA, mais aussi, nouveauté soulignée par C.C. Wei, les **processeurs pour l'IA agentique** et les puces réseau
- **Smartphones** : +10 % séquentiel (21 % du CA), saison des lancements de l'automne
- **Automobile** : +23 % (4 %) ; **IoT** : +5 % (4 %) ; **électronique grand public** : −12 % (1 %)
- **Technologie** : le **2 nm atteint 8 % du CA wafers** dès son troisième trimestre ; 3 nm à 33 %, 5 nm à 28 %. 79 % du CA wafers provient des nœuds avancés

**Accélération ou ralentissement ?** Nette **accélération** : croissance en dollars de +41 % (contre +34 % au T2), et une guidance du T4 qui implique **+58 % sur un an**.

---

### Évolution des marges

- **Marge brute : 66,4 %**, en baisse de 1,3 point sur le trimestre (record de 67,7 % au T2) mais **+6,9 points sur un an**
- **Cause principale** : la dilution liée au démarrage du 2 nm (coûts fixes élevés, rendements encore en progression), plus celle des usines à l'étranger (proche de 2 points en 2026)
- **Ce qui compense** : prix plus élevés, taux d'utilisation maximal, effet de levier opérationnel (charges opérationnelles à 7,8 % du CA seulement)
- **T4 2026** : marge brute guidée à **65-67 %** (66 % au milieu, −0,4 point), marge opérationnelle à 56,5-58,5 %

---

### Prévisions et perspectives

| Élément | T4 2026 (guidance) |
|---|---|
| CA | **52,3 à 54,3 Md$** (+14 % séquentiel, +58 % a/a au milieu) |
| Marge brute | 65 à 67 % |
| Marge opérationnelle | 56,5 à 58,5 % |
| Croissance 2026 en $ | **~44 %** (relevée à chaque publication : ~30 % en janvier, >30 % en avril, >40 % en juillet) |
| Capex 2026 | 60 à 64 Md$ (confirmé) ; 2026-2028 « nettement supérieur » aux trois années précédentes |

**Changement de ton ?** Oui, vers **plus de confiance et plus d'investissement**. La direction ne voit aucun signe de ralentissement de la demande d'IA, qui reste supérieure à l'offre, et juge que la croissance des accélérateurs IA (TCAC visé « mi à haut 50 % » sur 2024-2029) sera « probablement supérieure ». Elle prévient aussi que la rentabilité ne bondira pas du jour au lendemain, compte tenu de l'intensité capitalistique.

---

### Bilan et flux de trésorerie : points d'attention

- **Trésorerie et placements** : NT$4 017 Md (~126 Md$), 39,9 % de l'actif, pour seulement NT$818 Md de dette à long terme : **trésorerie nette proche de 100 Md$**
- **Flux de trésorerie opérationnel** : NT$920 Md (×2,2 sur un an) ; **capex** : NT$443 Md (13,8 Md$) ; **free cash-flow** : NT$477 Md (~14,9 Md$), en hausse de 66 % sur le trimestre
- **Dividendes** : NT$156 Md versés au T3 ; dividende trimestriel porté à NT$7,0 par action
- **Stocks** : 82 jours, niveau sain pour un fondeur en forte croissance
- **À surveiller** : le capex a légèrement baissé au T3, ce qui implique un **T4 au-delà de 21 Md$** pour tenir l'objectif annuel ; le free cash-flow sera mécaniquement plus faible en fin d'année

---

### Réaction du marché

Malgré ces chiffres, l'ADR a reculé de **2,3 % le 16 octobre** (412,61 $), après avoir déjà perdu ~11,5 % sur les sept séances précédant la publication. Trois raisons :
1. **Les marges** : le marché, habitué aux records, a retenu la baisse séquentielle et la dilution annoncée (2 nm, usines à l'étranger de 3 à 4 points à terme)
2. **Le capex** : des dépenses 2027-2028 « nettement supérieures » ravivent la crainte d'une surcapacité (certains courtiers anticipent jusqu'à 105 Md$ de capex en 2028)
3. **Le contexte** : repli général des valeurs de l'IA (inquiétudes sur l'endettement des « néo-clouds »), inflation américaine plus forte que prévu

**Ce que cela indique** : le dépassement était **déjà intégré dans le cours**, qui avait touché un record de 485,80 $ début octobre. Le marché ne paie plus la croissance de TSMC, il paie la **durée du cycle d'investissement de l'IA**. Les analystes, eux, ont relevé leurs objectifs (Needham 560 $, Barclays 670 $).

> **Élément inhabituel** : jamais TSMC n'avait affiché une croissance de 58 % (guidance T4) avec une marge brute supérieure à 65 % et près de 20 usines en chantier simultanément. C'est à la fois l'apogée de son pouvoir de marché et le moment de son plus fort engagement de capital.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Ce que dit le management, conférence après conférence

### Évolution du ton (2025-2026)

**Janvier 2025 (T4 2024) : confiance et premiers chiffres sur l'IA.** La direction annonce un doublement du CA des accélérateurs IA en 2025 et un capex de 38 à 42 Md$. Le ton est assuré, mais la question du « vrai » niveau de la demande revient déjà.

**Avril 2025 (T1 2025) : prudence face aux droits de douane.** Les annonces tarifaires américaines dominent. TSMC maintient ses objectifs mais parle d'incertitude et d'effets indirects possibles sur la demande grand public. C'est le point bas du sentiment.

**Juillet et octobre 2025 (T2-T3 2025) : retour de la conviction.** Objectif de croissance 2025 relevé (environ 30 %, puis le milieu de la fourchette 30-40 %). La demande d'IA est décrite comme plus forte qu'attendu trois mois plus tôt. Le seul vent contraire mis en avant est la hausse du dollar taïwanais.

**Janvier 2026 (T4 2025) : le pari du capex.** Capex 2026 porté à 52-56 Md$ (contre 40,9 Md$ en 2025), au-delà de toutes les attentes. C.C. Wei explique avoir vérifié auprès des clients de ses clients (les hyperscalers) que la demande était réelle avant d'engager de tels montants. Ton : **conviction assumée, mais lucide sur l'ampleur du risque**.

**Avril 2026 (T1 2026) : la demande « extrêmement robuste ».** Croissance 2026 relevée à plus de 30 % ; TCAC des accélérateurs IA relevé à 54-56 % sur 2024-2029. Seule réserve exprimée : le conflit au Moyen-Orient, avec un approvisionnement en matériaux jugé sécurisé.

**Juillet 2026 (T2 2026) : accélération, avec franchise sur les marges.** Capex relevé de ~15 % à 60-64 Md$, croissance 2026 portée à plus de 40 %. Le directeur financier annonce que la marge brute va baisser (dilution du 2 nm et des usines à l'étranger). Le marché sanctionne : −7 % à Taipei le lendemain.

**Octobre 2026 (T3 2026) : « la demande dépasse toujours l'offre ».** Croissance 2026 à ~44 %, guidance T4 à +58 %, près de 20 usines en chantier, capex 2026-2028 « nettement supérieur » aux trois années passées. Wei affirme que la croissance des accélérateurs IA sera « probablement supérieure » à l'objectif. Sur Terafab, il pose une condition ferme : toute usine devra être **exploitée par TSMC**.

---

### Les priorités répétées de la direction

**1. La capacité, encore la capacité.** Le message central de 2026 : servir la demande. Trois nouvelles usines 3 nm (Tainan au S1 2027, Tainan au S1 2028, Arizona au T3 2027), capacité 2 nm doublée en 2027, CoWoS en forte hausse.

**2. La rentabilité structurelle.** La direction répète son objectif d'une **marge brute de 56 % ou plus à travers le cycle** et d'un ROE supérieur à 25 %. Elle chiffre à l'avance les dilutions (2 nm, étranger) et promet de les compenser par les prix et la productivité : une communication **sans surprise**.

**3. La discipline du capital.** Formule-clé du directeur financier Wendell Huang : si TSMC fait bien son travail, la **hausse du CA dépassera celle du capex**. Le capex est justifié par une demande de long terme, pas par la conjoncture.

**4. La neutralité et la confiance.** Refus de concurrencer les clients, refus de céder l'exploitation d'une usine (Terafab), refus de communiquer la part de chaque client.

**5. La gestion du risque géopolitique.** Diversification géographique (Arizona, Japon, Allemagne), tout en gardant la R&D et les procédés les plus avancés à Taïwan.

---

### Analyse du sentiment

| Période | Sentiment | Mot-clé |
|---|---|---|
| T4 2024 | Positif | Accélérateurs IA |
| T1 2025 | Prudent | Droits de douane |
| T2-T3 2025 | Positif | Demande supérieure aux attentes |
| T4 2025 | Très positif, lucide | Capex record |
| T1 2026 | Très positif | « Extrêmement robuste » |
| T2 2026 | Très positif, franc sur les marges | Dilution du 2 nm |
| T3 2026 | **Très positif, offensif** | Demande supérieure à l'offre |

- **Confiance** : au plus haut historique, mais **adossée à des chiffres** (six trimestres records, guidance systématiquement dépassée), pas à des promesses
- **Transparence** : excellente sur les marges et le capex, volontairement **opaque sur les clients** (aucune part de client publiée) et sur le capex au-delà de 2026
- **Cohérence** : remarquable. Les objectifs de marge, de ROE et de dividende n'ont pas varié depuis des années

> **À lire entre les lignes** : la direction ne cherche plus à rassurer sur la demande, elle prévient que **la rentabilité ne montera plus aussi vite** (dilutions, capex). Le risque qu'elle surestime le cycle existe, mais son historique plaide pour elle : en 2023, elle avait annoncé et géré la correction des stocks sans dégrader sa marge sous 53 %.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### C.C. Wei : président et directeur général

**Parcours** : docteur en génie électrique de l'université Yale, passé par Texas Instruments et Chartered Semiconductor, **entré chez TSMC en 1998**. Co-directeur général de 2013 à 2018 aux côtés de Mark Liu, **directeur général depuis juin 2018**, puis **président et directeur général depuis juin 2024**. Héritier désigné du fondateur Morris Chang, retiré en 2018.

**Bilan chiffré sous sa direction (2018-2026)** :
- CA : de NT$1 031 Md (2018) à NT$3 810 Md (2025), **×3,7**, et ~+44 % attendus en dollars en 2026
- Résultat net : de NT$351 Md à NT$1 718 Md, **×4,9**
- Marge brute : de 48 % à 59,9 % (2025), puis 66-68 % en 2026
- ROE : de ~22 % à ~35 % (2025), 45,5 % annualisé au T3 2026
- Exécution technologique : N5 (2020), N3 (2022), **N2 en volume au T4 2025** dans les délais, A16 et A14 en préparation
- Mise à l'échelle du **CoWoS**, devenu la ressource la plus rare de l'IA
- Internationalisation : Arizona (4 nm en production avec des rendements comparables à Taïwan), JASM au Japon, ESMC en Allemagne

**Ancienneté et alignement** : 28 ans dans l'entreprise. Wei détient environ **0,03 % du capital** (de l'ordre de 7,5 millions d'actions, soit plusieurs centaines de millions de dollars au cours actuel). Sa rémunération (environ NT$946 M en 2024, ~30 M$) est composée à **plus de 98 % de primes et d'actions**, indexées sur les résultats et des critères ESG. L'alignement est réel, sans être celui d'un fondeur-actionnaire.

---

### L'équipe dirigeante

- **Wendell Huang**, directeur financier **depuis 2010** : architecte d'une communication financière d'une grande régularité (guidance prudente, systématiquement atteinte ou dépassée)
- **Y.P. Chyn** (opérations) et **Y.J. Mii** (R&D), **co-directeurs des opérations** depuis février 2024 : la relève opérationnelle et technologique, issue du sérail
- **Conseil d'administration** : 10 membres dont **7 indépendants** (anciens dirigeants d'Applied Materials, de Xerox, de Xilinx, ex-président du MIT…), plus un représentant du **Fonds national de développement**, premier actionnaire (6,38 %)

---

### Historique de l'allocation du capital

| Décision | Montant | Lecture |
|---|---|---|
| Capex 2024 → 2025 → 2026 | 29,8 → 40,9 → 60-64 Md$ | Réinvestissement massif, financé par les flux internes |
| Arizona (6 usines, 2 sites de packaging, R&D) | 165 Md$ engagés | Choix géopolitique coûteux (coûts ~30 % plus élevés qu'à Taïwan) |
| Coentreprises (JASM, ESMC, Sony 2026) | Partenaires minoritaires | Partage du capital et des subventions, exploitation conservée |
| Acquisitions | Quasi nulles | Croissance organique exclusive |
| Dividende trimestriel | NT$2,0 (2019) → **NT$7,0** (2026) | Croissance continue, jamais réduit |
| Rachats d'actions | Marginaux | Pas de rachat de soutien au cours |

**Évolution de la rentabilité du capital** : ROE de 20 à 30 % sur la période 2018-2023, puis 30 % en 2024, ~35 % en 2025 et 45,5 % annualisé au T3 2026, **malgré un doublement du capex**. Le capital est investi à des rendements très supérieurs à son coût : **aucune trace de destruction de valeur**. Le seul point discutable est le coût des usines étrangères, assumé comme une assurance géopolitique.

---

### Signaux d'alerte

- **Transactions avec des parties liées** : limitées et publiées (coentreprises JASM et ESMC, participations dans VIS, GUC et SSMC). L'État taïwanais, premier actionnaire, n'intervient pas dans la gestion courante
- **Rémunération** : élevée pour Taïwan, raisonnable au regard de la création de valeur ; structure très majoritairement variable
- **Changements de stratégie** : aucun. La stratégie de « fonderie pure » n'a pas varié depuis 1987
- **Comportement promotionnel** : **absent**. Guidance prudente, refus de commenter les clients, refus de rehausser le capex au-delà de 2026 sans visibilité
- **Point de vigilance** : **succession**. Wei a dépassé les 70 ans ; les co-directeurs des opérations forment une relève crédible mais non désignée

---

### Fondateur ou gestionnaire professionnel ?

TSMC est dirigée par un **gestionnaire professionnel issu du sérail**, formé pendant vingt ans à la culture du fondateur Morris Chang. À ce stade (leader mondial, 2 000 Md$ de capitalisation), c'est l'archétype adapté : la priorité n'est plus d'inventer un modèle mais de **l'exécuter sans faute à une échelle inédite**. Le risque est inverse de celui des sociétés de fondateurs : moins de vision disruptive, mais une **continuité culturelle** remarquable.

> **Verdict** : management de premier plan, discipliné et prévisible. L'exécution du 2 nm, la gestion des droits de douane et la mise à l'échelle du CoWoS en 2025-2026 en sont la preuve. Le seul vrai sujet de gouvernance est la succession de C.C. Wei.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Les moteurs du cours sur cinq ans (2021-2026)

### Contexte
L'ADR TSMC (NYSE : TSM) est passé d'environ 100 $ en octobre 2021 à **420,22 $ le 19 octobre 2026** (+~310 %), avec un record de **485,80 $ en clôture le 5 octobre 2026**. Le parcours n'a rien eu de linéaire : un krach de −58 % entre février 2021 et octobre 2022, puis un quintuplement porté par l'IA. Le titre a un **bêta modéré (~1,2-1,4)**, mais il réagit fortement à trois familles d'événements : **les publications trimestrielles, l'IA et la géopolitique**.

*Les variations ci-dessous concernent l'ADR (séance américaine) sauf mention contraire ; les amplitudes sont arrondies.*

### Hausses de plus de 5 %

| Date | Mouvement | Déclencheur |
|---|---|---|
| Janv. 2021 | ~+7 % | Capex 2021 annoncé à 25-28 Md$, signal d'un supercycle |
| 15 nov. 2022 | ~+10 % | Révélation d'une participation de 4,1 Md$ de Berkshire Hathaway |
| Nov. 2022 (mois) | +35 % | Rebond après le point bas d'octobre, détente des craintes sur la Chine |
| 25 mai 2023 | ~+14 % | Prévisions historiques de Nvidia : naissance du « trade » de l'IA |
| 18 janv. 2024 | ~+10 % | Résultats du T4 2023 et prévision de croissance 2024 de plus de 20 % |
| 17 oct. 2024 | ~+10 % | Résultats du T3 2024 très supérieurs aux attentes, IA confirmée |
| 9 avr. 2025 | ~+12 % | Pause de 90 jours sur les droits de douane réciproques |
| 15-16 janv. 2026 | ~+5 % | Résultats du T4 2025 et capex 2026 de 52-56 Md$ ; record à ~348 $ |
| Avr. 2026 (mois) | +16,5 % | Résultats du T1 2026, marge brute record de 66,2 % |
| 30 juil. 2026 | +7,6 % | Rebond après la purge post-résultats, capex des hyperscalers relevés |

### Baisses de plus de 5 %

| Date | Mouvement | Déclencheur |
|---|---|---|
| Févr.-oct. 2022 | −58 % (du pic au creux) | Hausse des taux, correction des stocks de puces, tensions sino-taïwanaises (visite de Nancy Pelosi en août 2022) |
| 7-13 oct. 2022 | ~−13 % | Contrôles américains à l'export vers la Chine ; point bas annuel |
| 17 juil. 2024 | ~−8 % | Propos de Donald Trump (« Taïwan devrait nous payer pour sa défense ») et menaces de restrictions |
| 27 janv. 2025 | ~−13 % | Choc DeepSeek : doutes sur le besoin de calcul de l'IA |
| 3-4 avr. 2025 | ~−13 % sur deux séances | Droits de douane du « Liberation Day » |
| Nov. 2025 | Plus bas annuel à 266,82 $ (21 nov.) | Craintes de bulle de l'IA, financement des centres de données |
| Mars 2026 (mois) | −9,6 % | Conflit au Moyen-Orient, prises de bénéfices sur les semi-conducteurs |
| 23-24 juin 2026 | ~−6 % | Chute de 7,9 % de l'indice des semi-conducteurs avant les résultats de Micron |
| 16-17 juil. 2026 | −7,3 % à Taipei (ADR ~−5 %) | Marge brute du T3 guidée à 65-67 % contre ~70 % attendus (dilution du 2 nm) |
| 7-15 oct. 2026 | ~−11,5 % en sept séances | Repli des valeurs de l'IA (dette des « néo-clouds »), inflation américaine, puis marges et capex du T3 |

---

### Les facteurs structurels du cours

**1. Le cycle de l'IA, devenu le facteur dominant.** Depuis mai 2023, chaque signal sur les dépenses d'investissement des hyperscalers (prévisions de Nvidia, capex de Microsoft, Meta, Alphabet, Amazon) fait bouger TSMC. Le titre se comporte comme une **valeur « pelle et pioche » de l'IA**, avec une volatilité moindre que les concepteurs de puces.

**2. La décote géopolitique.** Taïwan, la Chine et les relations avec Washington pèsent sur le multiple : TSMC se paie structurellement **moins cher que ses clients américains** malgré une rentabilité supérieure. Chaque épisode de tension (2022, 2024, 2025) s'est traduit par des baisses de 8 à 13 %, toutes rattrapées depuis.

**3. Les marges et le capex, juges de paix trimestriels.** En 2026, le marché a sanctionné deux trimestres records (juillet et octobre) pour une simple baisse de la marge brute et un capex en hausse : le cours se joue désormais **sur la qualité de la croissance, plus sur son niveau**.

**4. Le change.** Les résultats sont en NT$, l'ADR en dollars : chaque point d'appréciation du dollar taïwanais (comme en 2025) coûte environ 0,4 point de marge brute, mais soutient la valeur en dollars des bénéfices.

> **À retenir** : sur cinq ans, toutes les baisses de plus de 10 % ont eu une cause **externe** (taux, géopolitique, DeepSeek, droits de douane) et ont été rachetées dans les douze mois. Aucune n'est venue d'une erreur d'exécution de TSMC.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimation du BPA 2026-2028

*Toutes les données par action sont exprimées **par ADR** (1 ADR = 5 actions ordinaires), en dollars, avec une hypothèse de change de 32 NT$ pour 1 $. Le BPA 2025 réalisé est de 10,65 $ par ADR (NT$66,25 par action).*

### Hypothèses de modélisation

**1. Croissance du secteur**
- Marché de la fonderie : +20 à 25 % par an attendu jusqu'en 2028, tiré par l'IA (TrendForce, consensus)
- Accélérateurs IA : TCAC visé par TSMC « mi à haut 50 % » sur 2024-2029, jugé « probablement supérieur »
- Smartphones, PC, automobile : croissance à un chiffre, avec un contenu en silicium avancé croissant (2 nm dans les smartphones haut de gamme dès 2026)

**2. Gains de parts de marché**
- Part de marché fonderie déjà à 72,5 % : gains limités (+0,5 à 1 point par an), surtout sur la pointe (2 nm, A16) où Samsung et Intel peinent
- Risque inverse à partir de 2028 : Intel 14A (Tesla, Terafab) et Samsung 2 nm pourraient capter des volumes de seconde source

**3. Hausses de prix**
- 2026 : +3 à 5 % sur les nœuds sous 5 nm
- 2027 : jusqu'à +10 % évoqués par la presse, plus des surcharges sur les volumes HPC non prévus ; nous retenons **+4 à 6 %** dans le scénario de base
- Le 2 nm se vend environ 50 % plus cher que le 3 nm par plaquette

**4. Pressions sur les coûts**
- **Dilution du 2 nm** : 2 à 3 points de marge brute en phase de démarrage (2026-2027)
- **Usines à l'étranger** : près de 2 points en 2026, **3 à 4 points** dans les années suivantes (Arizona ~30 % plus cher que Taïwan)
- Inflation des équipements, des matériaux et de la main-d'œuvre, reconnue par la direction
- Amortissements en forte hausse avec un capex de 60-64 Md$ (2026) puis 80-100 Md$ (estimations des courtiers pour 2027-2028)

**5. Effet de levier opérationnel**
- Charges opérationnelles à ~8 % du CA seulement : chaque dollar de CA supplémentaire tombe largement en résultat
- Le levier compense en partie les dilutions : nous retenons une **marge nette de 48,5 à 49 %** en base (contre 51 % au T3 2026)

**6. Coûts de financement**
- Trésorerie nette proche de 100 Md$ : **produits financiers nets positifs** (~NT$26 Md par trimestre)
- Dette à long terme de NT$818 Md, majoritairement à taux fixe et bas ; aucun besoin de financement externe prévu

**7. Dilution**
- Nombre d'actions quasi stable (25,93 Md d'actions, soit 5,19 Md d'ADR équivalents) ; actions gratuites aux dirigeants inférieures à 0,1 % par an
- Pas de rachat d'actions significatif prévu : **effet nul sur le BPA**

---

### Scénario de base

| Exercice | CA (Md$) | Croissance | Marge nette | Résultat net (Md$) | BPA par ADR | PER à 420 $ |
|---|---|---|---|---|---|---|
| 2025 (réalisé) | 122,4 | +36 % | 45 % | ~55 | **10,65 $** | 39x |
| **2026E** | **176,1** | **+44 %** | ~50 % | ~91 | **17,50 $** | **24x** |
| **2027E** | **229** | **+30 %** | 49 % | ~112 | **21,60 $** | **19,5x** |
| **2028E** | **275** | **+20 %** | 48,5 % | ~133 | **25,70 $** | **16,4x** |

*2026E = trois trimestres publiés (12,40 $) + T4 au milieu de la guidance (53,3 Md$, marge nette ~50 %, soit ~5,10 $). Notre 2026E est légèrement supérieur au consensus d'avant publication (16,6 à 16,9 $) ; notre 2027E (21,60 $) est proche du consensus (~21,8 à 22,3 $).*

---

### Sensibilité

| Scénario | 2027E | 2028E | Hypothèses clés |
|---|---|---|---|
| **Optimiste** | **23,90 $** | **30,60 $** | CA +38 % puis +28 %, hausses de prix de 10 %, marge nette 51 % |
| **Base** | **21,60 $** | **25,70 $** | CA +30 % puis +20 %, marge nette ~49 % |
| **Pessimiste** | **17,60 $** | **16,40 $** | CA +15 % puis 0 % (pause du capex IA en 2028), marge nette 45 % puis 42 % |

**Lecture des scénarios** :
- **Optimiste** : un BPA 2028 de 30,60 $ valorisé 22x donnerait ~670 $ (objectif haut de Barclays)
- **Base** : 25,70 $ valorisé 20x donne ~515 $, soit +22 % sur deux ans, cohérent avec le consensus des analystes (~530 à 585 $)
- **Pessimiste** : 16,40 $ valorisé 14x (multiple de bas de cycle) donne ~230 $, soit −45 %. C'est le scénario d'un **arrêt brutal des investissements dans l'IA**, comparable à 2022-2023

---

### Conclusion

Le BPA pourrait **plus que doubler entre 2025 et 2028** (de 10,65 $ à ~25,70 $ en base, soit +34 % par an). À 420 $, le titre se paie ~19,5 fois les bénéfices 2027 et ~16 fois ceux de 2028 : une valorisation **modeste pour une telle croissance**, qui reflète la décote géopolitique et le doute du marché sur la durée du cycle de l'IA. Les deux juges de paix d'ici 2028 : **la marge brute** (doit rester au-dessus de 60 % malgré les dilutions) et **le rapport entre croissance du CA et croissance du capex**.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (bull case)

### Avantages compétitifs et barrières à l'entrée

**1. Un quasi-monopole sur la pointe, renouvelé à chaque génération.** 72,5 % du marché de la fonderie et, sur les nœuds 3 nm et 2 nm, une part bien supérieure. Le 2 nm monte plus vite que tous les nœuds précédents (8 % du CA wafers dès son troisième trimestre) ; l'A16 et l'A14 (2028) prolongent l'avance. Samsung recule, Intel n'a pas encore livré de volume externe sur sa pointe.

**2. Des barrières qui se renforcent avec l'IA.** Le coût d'entrée explose : une usine 2 nm coûte plus de 25 Md$, une conception de puce 2 nm plus de 1 Md$. Plus le ticket d'entrée monte, plus les clients concentrent leurs paris sur le fondeur qui ne rate pas ses rendements. Le **packaging avancé (CoWoS, SoIC)** ajoute un second verrou que ni Samsung ni Intel ne maîtrisent à la même échelle.

### Leviers de croissance

**3. Les vents porteurs structurels de l'IA.** Les hyperscalers investissent plusieurs centaines de milliards de dollars par an ; l'IA « agentique » ajoute une demande de processeurs et de puces réseau qui n'est **même pas comptée** dans l'objectif de croissance des accélérateurs IA de TSMC. La direction juge la demande supérieure à l'offre et anticipe une croissance des accélérateurs supérieure à son objectif de « mi à haut 50 % » par an jusqu'en 2029.

**4. Le pouvoir de prix.** Hausses de 3 à 5 % en 2026, jusqu'à 10 % évoquées pour 2027, surcharges sur les volumes HPC non prévus : en pénurie, TSMC fixe ses prix. C'est ce qui compense les dilutions (2 nm, Arizona).

**5. Les surprises possibles sur les bénéfices.** La guidance a été dépassée à chaque trimestre de 2026, et la croissance annuelle relevée à chaque publication (de ~30 % à ~44 %). Avec un levier opérationnel élevé (charges à 8 % du CA), chaque point de croissance non prévu tombe presque entièrement en résultat.

### Allocation du capital

**6. Une machine à cash qui s'autofinance.** Free cash-flow de ~46 Md$ sur douze mois malgré un capex record, trésorerie nette proche de 100 Md$, dividende relevé régulièrement (NT$7 par trimestre). Le ROE (45 % annualisé) démontre que chaque dollar investi rapporte bien plus que son coût.

**7. Une valorisation encore raisonnable.** ~19,5 fois les bénéfices 2027 estimés, ~16 fois ceux de 2028, avec un BPA qui pourrait plus que doubler entre 2025 et 2028. TSMC se paie moins cher que la plupart de ses clients, alors qu'elle capte une part croissante de la valeur.

---

## 🐻 Scénario pessimiste (bear case)

### Les 2 à 3 risques susceptibles de nuire durablement à l'activité

**1. Taïwan : le risque qui ne se modélise pas.** Plus de 90 % de la capacité de pointe est à Taïwan. Un blocus, une crise militaire ou une coupure énergétique majeure n'est pas un risque de marge : c'est un **risque de valeur**. Les usines d'Arizona ne remplaceront pas Taïwan avant la fin de la décennie.

**2. Le cycle de l'investissement dans l'IA.** 68 % du CA vient du HPC, dépendant des dépenses de quelques hyperscalers et laboratoires d'IA, dont certains financent leurs centres de données par la dette. Une pause de 12 à 18 mois (saturation, électricité, financement, gains d'efficacité à la DeepSeek) laisserait TSMC avec **près de 20 usines en chantier** et un capex engagé au plus haut.

**3. L'érosion de la marge par la géopolitique industrielle.** Les usines à l'étranger dilueront la marge brute de 3 à 4 points à terme ; les droits de douane américains (section 232) et les contrôles à l'export limitent la marge de manœuvre. La marge brute pourrait revenir de 66 % vers 58-60 % sans erreur de gestion.

### Compression des marges et ralentissement

- Dilution simultanée du 2 nm, de l'A16 et des usines étrangères en 2027-2028
- Concurrence de seconde source (Intel 14A pour Tesla et Terafab, Samsung 2 nm pour Tesla) sur une partie des volumes
- Normalisation de la croissance : de +44 % (2026) à +15-20 % (2028) dans un scénario prudent

### Attentes trop élevées ?
Le consensus intègre une croissance du BPA de plus de 20 % en 2027. Le cours, lui, a déjà reculé de ~14 % depuis son record d'octobre, signe que le marché **commence à douter** de la durée du cycle.

---

## Analyse pré-mortem

*Nous sommes en octobre 2028, l'ADR vaut 260 $. Que s'est-il passé ?*

Au S2 2027, deux grands hyperscalers réduisent leur capex de 20 % après une année de rentabilité décevante de l'IA générative. Les commandes de CoWoS sont décalées, les stocks de GPU gonflent. TSMC, qui a engagé 85 Md$ de capex en 2027, voit son taux d'utilisation baisser pour la première fois depuis 2023 ; la marge brute retombe à 57 % sous l'effet combiné de la sous-utilisation, du 2 nm et de l'Arizona. Le BPA 2028 stagne vers 17 $, le marché applique un multiple de bas de cycle (15x) : **255 $**. Rien d'irréversible pour l'entreprise, mais **−40 % pour l'actionnaire**.

---

## Les multiples sont-ils trop élevés ?

| Multiple | TSMC | Lecture |
|---|---|---|
| PER 12 mois | 27x | Dans la moyenne haute historique (15-25x) |
| PER 2027E | ~19,5x | Raisonnable pour +30 % de croissance |
| VE/CA 12 mois | ~13x | Élevé, justifié par une marge nette de 51 % |
| Rendement FCF | ~2,1 % | Faible, comprimé par le capex |
| PEG (PER 2026E / croissance du BPA 2025-2028) | ~0,7 | Attractif |

**Réponse** : **non, pas au regard des bénéfices**. Le multiple n'est tendu que si l'on considère que les marges de 2026 sont un sommet de cycle. Historiquement, TSMC s'est payé 15 à 25 fois ses bénéfices ; elle est aujourd'hui au milieu de cette fourchette sur les bénéfices 2027.

---

## Point de vue à contre-courant

**Ce que le marché refuse de voir** : le marché traite TSMC comme une **valeur cyclique exposée à l'IA**, d'où sa réaction négative à deux trimestres records. Or le modèle est en train de changer de nature : avec le packaging avancé, les hausses de prix annuelles et la position de passage obligé de tout le calcul mondial, TSMC ressemble de plus en plus à une **infrastructure à péage**, dont le revenu dépend moins du nombre de puces vendues que de la complexité de chaque puce. Chaque nouvelle génération (2 nm, A16, A14) coûte plus cher par plaquette et concentre davantage la demande. Si cette lecture est juste, la décote face aux clients n'est pas une prime de risque, c'est une **erreur de classification**, et la vraie question n'est pas « quand le cycle se retournera-t-il ? » mais « que vaut une entreprise qui prélève une part croissante de chaque dollar investi dans l'IA ? ». À l'inverse, le risque taïwanais, lui, est probablement **sous-estimé** par les investisseurs qui l'ont « appris » à ignorer depuis 2022.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique : signaux d'alerte comptables

*TSMC publie ses comptes en normes IFRS taïwanaises (TIFRS) et dépose un rapport annuel 20-F auprès de la SEC. Commissaire aux comptes : Deloitte & Touche (Taïwan).*

### Comptabilisation des produits : RISQUE FAIBLE
Le chiffre d'affaires est reconnu à la **livraison des plaquettes** (transfert de contrôle), sur la base de prix contractuels en dollars. Pas de contrats complexes à plusieurs composantes, pas de licences à reconnaissance étalée.

**Points à surveiller** :
- **Acomptes et réservations de capacité** : en période de pénurie, certains clients versent des avances (comptabilisées en passif). Un gonflement de ces avances signale une demande forte, mais leur **dégonflement brutal** serait le premier signe d'un retournement
- **Remises et ajustements de prix** rétroactifs avec les très grands clients : non détaillés publiquement
- **Effet de change** : CA facturé en dollars, comptes en NT$ ; une partie de la croissance publiée en NT$ (+50,9 % au T3) vient du change, la croissance en dollars (+41,2 %) est la mesure pertinente

### Information sectorielle : RISQUE FAIBLE À MODÉRÉ
Un seul segment publié (la fonderie). La ventilation par plateforme, technologie et géographie est fournie, mais **aucune rentabilité par nœud** n'est publiée : impossible de vérifier la marge réelle du 2 nm, du CoWoS ou des usines d'Arizona, sauf à travers les « dilutions » annoncées par la direction. **Aucune part client n'est publiée** nominativement, alors que deux clients pèseraient ~40 % du CA (estimations).

### Contrats de location (IFRS 16) : RISQUE FAIBLE
Droits d'utilisation limités (terrains des parcs scientifiques taïwanais, bureaux), sans commune mesure avec les actifs industriels. Pas de financement hors bilan d'usines identifié.

### Parties liées : RISQUE FAIBLE
Transactions publiées avec les sociétés associées et coentreprises : **VIS** (participation ~27 %), **GUC** (~35 %), **SSMC** (coentreprise avec NXP à Singapour), **JASM** (Japon, avec Sony, Denso, Toyota) et **ESMC** (Allemagne, avec Bosch, Infineon, NXP), nouvelle coentreprise d'**image sensors** avec Sony (jusqu'à 282 Md¥ d'investissement). Le **Fonds national de développement** (État taïwanais, 6,38 %) siège au conseil. Les flux avec ces entités sont faibles au regard du CA et réalisés à des conditions de marché déclarées.

### Engagements conditionnels et litiges : RISQUE MODÉRÉ
- **Contrôles à l'export américains** : selon Reuters (avril 2025), une enquête du département du Commerce portait sur une puce TSMC retrouvée dans un processeur Huawei via un client chinois (Sophgo), avec une amende possible de **1 Md$ ou plus**. Aucune issue publique connue à ce jour : risque à provisionner mentalement
- **Engagements d'achat** : contrats d'équipements (ASML et autres) et d'électricité pluriannuels, très importants en montant, cohérents avec le plan de capex mais **rigides** en cas de retournement
- **Subventions publiques** (CHIPS Act ~6,6 Md$ pour l'Arizona, aides japonaises et allemandes) : assorties de **conditions** (calendriers, emplois, partage de bénéfices éventuel) dont le non-respect pourrait entraîner des remboursements
- **Litiges de brevets** : courants dans le secteur, sans impact matériel historique

### Rémunération en actions : RISQUE FAIBLE
Actions gratuites conditionnelles (RSA) réservées à quelques dizaines de dirigeants : quelques millions d'actions par an sur 25,9 Md, **dilution inférieure à 0,1 %**. Charge comptabilisée en résultat ; pas d'ajustement « hors normes » des bénéfices publiés (TSMC ne publie pas de résultat retraité).

### Goodwill et incorporels : RISQUE FAIBLE
Goodwill négligeable (~NT$5 Md, hérité de petites opérations anciennes) : **TSMC n'a pratiquement jamais fait d'acquisition**. Les incorporels se limitent à des logiciels et licences de technologie.

---

### Compte de résultat, bilan et flux de trésorerie

**Compte de résultat** :
- **Politique d'amortissement conservatrice** : les équipements sont amortis sur 5 ans, une durée courte au regard de leur vie utile réelle, ce qui **minore** les bénéfices publiés (l'inverse d'une comptabilité agressive)
- **Éléments non opérationnels** : NT$34,6 Md au T3 2026 contre NT$95,8 Md au T2 (produits financiers et gains de change volatils) : à neutraliser pour juger la tendance
- **Taux d'imposition** favorable (incitations taïwanaises à la R&D et à l'investissement), qui pourrait remonter (impôt minimum mondial de 15 %)

**Bilan** :
- Stocks à 82 jours, créances saines, ratio de liquidité de 2,6x
- Immobilisations nettes de NT$4 530 Md (45 % de l'actif) : risque de **dépréciation** en cas de surcapacité sur un nœud (comme les capacités 7 nm sous-utilisées en 2023)
- Dette à long terme de NT$818 Md (8 % de l'actif), **trésorerie nette** largement positive

**Flux de trésorerie** :
- Free cash-flow sur douze mois de ~NT$1 480 Md (~46 Md$) : la **conversion du résultat en cash est élevée**, sans artifice de besoin en fonds de roulement
- Point de vigilance : le capex 2026-2028 « nettement supérieur » pourrait ramener le free cash-flow vers zéro en cas de baisse de la demande, alors que le dividende est rigide (jamais réduit)

---

### Verdict global
**Risque comptable : FAIBLE.** TSMC présente l'un des profils comptables les plus propres du secteur : pas d'acquisitions, pas de résultat retraité, amortissement prudent, bilan liquide, trésorerie nette. Les vrais points de vigilance ne sont pas comptables mais **informationnels** (absence de rentabilité par nœud et par client) et **juridiques** (contrôles à l'export, conditions des subventions).`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions pour C.C. Wei, classées par ordre d'importance

### Les quatre questions décisives

**1. Résilience face à une crise taïwanaise.** Plus de 90 % de votre capacité de pointe est à Taïwan. En cas de blocus ou de crise prolongée, **quelle part de la production 2 nm, 3 nm et CoWoS** pourriez-vous maintenir ou transférer, et dans quel délai ? Quel est le calendrier pour qu'une génération de pointe soit produite hors de Taïwan au même moment qu'à Taïwan ?

**2. La durée du cycle de l'IA.** Vous engagez un capex 2026-2028 « nettement supérieur » aux trois années précédentes. **Quel scénario de demande** retenez-vous pour 2028, et quel serait le taux d'utilisation de vos usines si les hyperscalers réduisaient leurs investissements de 20 % ? Quels signaux avancés surveillez-vous ?

**3. La marge à long terme.** Avec 3 à 4 points de dilution liés à l'étranger, la dilution du 2 nm puis de l'A16, **quel niveau de marge brute** considérez-vous comme soutenable en 2028 ? Votre plancher de 56 % « à travers le cycle » est-il encore le bon repère alors que vous êtes à 66 % ?

**4. La règle « croissance du CA supérieure à celle du capex ».** Votre directeur financier a posé ce principe. **Sur quel horizon** l'appréciez-vous, et vous engagez-vous à ralentir le capex si elle n'est pas respectée deux années de suite ?

### Avantage compétitif et concurrence

**5. Intel 14A.** Intel a gagné Tesla et Terafab, compte l'État américain et Nvidia à son capital et cible 2028 pour le 14A. **Combien de clients de pointe** pourraient adopter Intel ou Samsung comme seconde source d'ici 2029, et quelle part de vos volumes 2 nm et A16 est exposée ?

**6. Terafab.** Vous exigez d'exploiter toute usine au sein de Terafab, Elon Musk veut garder le contrôle. **Quel modèle** accepteriez-vous, et TSMC pourrait-elle refuser un très grand client plutôt que de partager son savoir-faire d'exploitation ?

**7. Le packaging avancé.** Le CoWoS est devenu le goulot d'étranglement de l'IA. **Quelle part du CA** représente désormais l'assemblage avancé, quelle est sa marge par rapport à la gravure, et quand l'offre rattrapera-t-elle la demande ?

**8. Le pouvoir de prix.** Les hausses de prix 2027 évoquées (jusqu'à 10 %) seraient les plus fortes depuis 2022. **Jusqu'où pouvez-vous augmenter vos prix** sans pousser vos clients vers des secondes sources ou vers des puces moins avancées ?

### Allocation du capital

**9. Le retour de l'Arizona.** Les usines américaines coûtent ~30 % de plus. **Quel ROE** visez-vous pour TSMC Arizona en régime de croisière, et les clients américains acceptent-ils de payer une prime pour une production locale ?

**10. Le dividende face au capex.** Le dividende est passé à NT$7 par trimestre. **Quelle part du free cash-flow** souhaitez-vous redistribuer, et le dividende serait-il maintenu en cas de retournement du cycle combiné à un capex de 80 à 100 Md$ ?

**11. La trésorerie nette de ~100 Md$.** Pourquoi conserver un tel coussin ? Est-ce une **réserve géopolitique** assumée, et envisagez-vous des rachats d'actions si la décote face aux pairs américains persiste ?

### Risques à l'horizon

**12. Concentration des clients.** Deux clients pèseraient ~40 % du CA. **Comment protégez-vous** TSMC contre un ralentissement chez Nvidia ou un transfert partiel d'Apple vers une autre fonderie ?

**13. Contrôles à l'export et droits de douane.** Où en est l'enquête du département du Commerce liée à Huawei, et **quelle est l'exposition** de TSMC aux droits de douane de la section 232 sur les semi-conducteurs et les équipements ?

**14. Énergie et eau.** Vos besoins électriques vont exploser avec près de 20 usines en chantier. **Taïwan peut-elle vous fournir** l'électricité nécessaire en 2028, et quel est le plan si ce n'est pas le cas ?

### Gouvernance

**15. Succession.** Vous avez porté le 2 nm et l'internationalisation de TSMC. **Quel est le plan de succession** et la relève (Y.P. Chyn, Y.J. Mii) est-elle prête à prendre la présidence ou la direction générale à brève échéance ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short : démontage de l'argumentaire optimiste

### 1. Ce qui pourrait compromettre structurellement le modèle

Le modèle de TSMC repose sur une hypothèse rarement formulée : **que la loi de Moore économique continue**, c'est-à-dire que chaque nouvelle génération vaille le prix qu'elle coûte. Or le 2 nm coûte environ 50 % plus cher par plaquette que le 3 nm, pour un gain de densité de 15 à 25 % : **le coût par transistor remonte**. Tant que l'IA paie n'importe quel prix, cela ne se voit pas. Le jour où les clients arbitrent en faveur du coût (puces d'inférence, réseau, smartphones), une partie de la demande glissera vers des nœuds moins avancés, moins chers et **plus disputés** (Samsung, Intel, SMIC).

### 2. Où se concentrent les revenus, et ce qui se passe si cela change

- **Par usage** : 68 % du CA vient du HPC, c'est-à-dire en grande partie de quelques programmes d'IA
- **Par client** : Nvidia (~22 %) et Apple (~18 %) pèseraient ~40 % du CA ; les dix premiers clients, probablement plus de 80 %
- **Par zone** : 79 % du CA provient de clients nord-américains

Si le capex des hyperscalers baisse de 20 % en 2028, les accélérateurs IA (déjà au-delà d'un quart du CA selon nos estimations) pourraient reculer de 30 à 40 %. Avec des coûts fixes massifs (amortissements en forte hausse), **chaque point de CA perdu coûterait environ 1,5 point de résultat**. Le précédent de 2023 (CA en NT$ −4,5 %, résultat net −17,5 %) l'a montré à petite échelle.

### 3. Pourquoi l'avantage concurrentiel est plus fragile qu'il n'y paraît

- **Les clients financent leurs alternatives** : Nvidia a investi dans Intel ; Apple étudierait Intel ; Tesla a signé avec Samsung (16,5 Md$) et Intel (14A, Terafab). L'objectif n'est pas de quitter TSMC, mais de **casser son pouvoir de prix**
- **Les États subventionnent la concurrence** : l'État américain est actionnaire d'Intel, la Chine finance SMIC sans limite, la Corée soutient Samsung. Le jeu n'est plus seulement économique
- **Le savoir-faire migre** : en construisant aux États-Unis, au Japon et en Allemagne, TSMC forme les ingénieurs et les écosystèmes qui serviront demain ses concurrents locaux

### 4. Le concurrent le plus dangereux sous-estimé par les optimistes : Intel, adossé à l'État américain

Les optimistes regardent les rendements actuels d'Intel et concluent à l'absence de menace. Erreur de perspective : Intel n'a pas besoin d'être meilleur que TSMC, il lui suffit d'être **« suffisamment bon » et américain**. Avec l'État fédéral et Nvidia à son capital, des clients comme Microsoft, Tesla et des commandes de Google rapportées, une politique de droits de douane qui favorise la production locale et un 14A visé pour 2028, Intel peut devenir **la seconde source officielle** de l'industrie américaine. Même 10 % de la pointe captée par Intel suffirait à casser la dynamique de prix de TSMC.

### 5. Les pires décisions d'allocation du capital

- **L'Arizona** : 165 Md$ engagés dans des usines ~30 % plus chères, qui dilueront la marge brute de 3 à 4 points. C'est une décision **politique**, prise sous pression de Washington, pas une décision de rendement
- **Le capex 2026-2028** : 60-64 Md$ en 2026, jusqu'à 100 Md$ anticipés en 2028 par certains courtiers, engagés **au sommet probable d'un cycle**. L'histoire des semi-conducteurs est jalonnée de surinvestissements au moment où tout le monde juge la demande infinie
- **Nankin** : une usine en Chine désormais exposée aux contrôles à l'export américains

### 6. Parties liées, comptabilité, incitations

Pas de comptabilité agressive (amortissement prudent, aucun résultat retraité). Mais trois zones grises : l'**État taïwanais** premier actionnaire (6,38 %), dont les intérêts géopolitiques peuvent diverger de ceux des actionnaires minoritaires ; une **rémunération des dirigeants** indexée sur la croissance du résultat, qui incite à investir dans la capacité ; et une **opacité totale** sur la rentabilité par client, par nœud et par usine.

### 7. Les hypothèses que le cours actuel exige

À 420 $, l'investisseur parie implicitement que :
1. Le BPA passe de 10,65 $ (2025) à ~21-22 $ en 2027 (+40 % par an)
2. La marge brute reste au-dessus de 62-63 % malgré les dilutions
3. Le capex de l'IA ne se retourne pas avant 2028
4. **Aucune crise majeure** ne touche Taïwan

### 8. Que se passe-t-il si la croissance déçoit de 20 à 30 % ?

| Scénario | BPA 2027E | Multiple | Cours implicite | Variation |
|---|---|---|---|---|
| Consensus | ~21,6 $ | 19,5x | ~420 $ | — |
| Croissance −20 % | ~17,3 $ | 16x | ~277 $ | **−34 %** |
| Croissance −30 % | ~15,1 $ | 14x | ~212 $ | **−50 %** |

Une déception de croissance s'accompagne presque toujours d'une **compression du multiple** : c'est la double peine qui a fait chuter le titre de 58 % en 2021-2022.

### 9. Le scénario unique qui nuirait durablement à l'entreprise

**Un blocus de Taïwan ou une crise militaire prolongée dans le détroit.** Même sans destruction physique, l'arrêt des importations d'énergie, de matériaux et d'équipements (Taïwan importe l'essentiel de son énergie) paralyserait la production en quelques semaines. Les usines étrangères ne représenteront qu'une petite part de la capacité de pointe avant 2030. **Plausibilité** : faible à moyen terme (quelques pourcents par an selon la plupart des analystes géopolitiques), mais **probabilité non nulle et impact quasi total** : c'est exactement le type de risque qu'aucun multiple ne capte correctement.

### Conclusion short
TSMC est probablement la meilleure entreprise industrielle du monde, mais l'action combine **trois risques corrélés** : un cycle d'investissement de l'IA à son sommet, des marges historiquement hautes appelées à se diluer et une concentration géographique sans équivalent. Le short n'est pas une thèse sur l'entreprise ; c'est un pari que le marché paie aujourd'hui **le sommet du cycle comme s'il était permanent**.`,
  },
];

export default { ...meta, modules };
