// ============================================================
//  DOSSIER : Arista Networks, Inc. (ANET)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "anet",                     // identifiant d'URL : /dossier/anet
  ticker: "ANET",
  name: "Arista Networks, Inc.",
  exchange: "NYSE",
  sector: "Équipement réseau & infrastructure IA",
  initials: "ANET",                 // affiché dans la pastille
  tagline: "Leader du commutateur Ethernet haute performance pour data centers IA, adossé au système d'exploitation EOS et à une base de clients hyperscalers ultra-concentrée.",
  riskScore: 65,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "anet.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Arista Networks conçoit et vend des **commutateurs Ethernet haute performance** et le logiciel réseau qui les pilote, pour les grands data centers, les réseaux d'IA, les campus d'entreprise et le routage. Fondée en 2004 à Santa Clara par **Andy Bechtolsheim, David Cheriton et Ken Duda**, cotée au NYSE depuis 2014, la société a réalisé **9,006 Mds$ de chiffre d'affaires en 2025** (+28,6 %) et vise **~12,6 Mds$ en 2026** (+40 %).

Le modèle est simple à énoncer et difficile à copier : Arista ne fabrique **ni ses puces ni ses boîtiers**. Elle achète du **silicium marchand** (principalement Broadcom), sous-traite l'assemblage, et concentre sa valeur ajoutée sur **EOS (Extensible Operating System)** — un système d'exploitation réseau unique, à base de noyau Linux non modifié et d'une base de données d'état centralisée (SysDB), déployé **sur toute la gamme, du campus au cœur de data center**.

Trois conséquences économiques :
- **Marge brute élevée** (~63-64 %) pour un fabricant de matériel, car la valeur perçue est logicielle
- **R&D concentrée** : une seule image logicielle à maintenir, contre des dizaines chez les concurrents historiques
- **Cycle produit rapide** : Arista suit le rythme des générations Broadcom (Tomahawk, Jericho) sans supporter le coût du développement ASIC

## Principaux produits et services

- **Data center & IA** : gammes 7800R / 7700R / 7060X / **Etherlink** — commutateurs 400G, 800G et désormais **plateformes 1,6 Tbit/s** (dont des versions à refroidissement liquide), destinés aux réseaux back-end IA (scale-out), front-end et **scale-across** (interconnexion entre sites)
- **Campus** : commutation filaire et Wi-Fi (objectif **≥ 1,25 Md$ de CA en 2026**), reconnue « Leader » au Magic Quadrant Gartner 2026 LAN filaire/sans fil
- **Routage** : agrégation, DCI, edge WAN — substitution progressive aux routeurs propriétaires
- **Logiciel & services** : EOS, **CloudVision** (télémétrie et automatisation), sécurité réseau, contrats de support. Les **services représentent ~16 % du CA**, les **produits ~84 %**

## Clients, fournisseurs, concurrents

**Clients** — trois grandes catégories : **Cloud & AI Titans** (moins de cinq comptes, mais l'essentiel du volume), **Entreprises** (finance, santé, industrie, secteur public) et **Providers**. **Microsoft a représenté ~26 % du CA 2025** et **Meta plus de 10 %** ; la direction a confirmé en août 2026 attendre **un, voire deux nouveaux clients à plus de 10 %** — le marché anticipe **Google** (déploiement Virgo Fabric) et **Oracle**.

**Fournisseurs** : **Broadcom** (silicium de commutation prédominant, décrit comme source quasi unique dans le 10-K), fournisseurs d'optiques et de mémoire, et des sous-traitants d'assemblage — **Foxconn, Jabil, Sanmina, Celestica, Flex**.

**Concurrents** : **NVIDIA** (Spectrum-X, devenu n°1 en revenus du commutateur Ethernet data center au T1 2026), **Cisco**, **HPE/Juniper**, **Huawei**, et l'écosystème **white box** (Accton, Edgecore, Quanta, Celestica) alimenté par le même silicium Broadcom.

## Modalités contractuelles

Le modèle est **transactionnel**, sans contrats de long terme de type take-or-pay : les hyperscalers commandent par vagues de déploiement, avec des remises de volume qui pèsent sur la marge brute. La récurrence vient des **contrats de support pluriannuels** (facturés d'avance, d'où un stock de **revenus différés de 6,87 Mds$ au T2 2026**) et de l'inertie du parc installé sous EOS. À l'inverse, Arista s'engage massivement en amont : **~8,9 Mds$ d'engagements d'achat** auprès de ses sous-traitants pour sécuriser des composants dont les délais dépassent **52 semaines**.

> **Lecture** : Arista est une société **logicielle déguisée en équipementier**, dont la trésorerie nette (**13,3 Mds$, sans dette**) et les marges (**49,9 % de marge opérationnelle non-GAAP au T2 2026**) sont d'un niveau atypique pour du hardware — mais dont la demande dépend d'un très petit nombre d'acheteurs.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Arista dans la chaîne de valeur

Arista occupe une position d'**intégrateur système et éditeur logiciel** : elle capte la valeur entre les fondeurs et concepteurs de silicium en amont et les opérateurs de data centers en aval, sans posséder d'usine ni de fonderie.

### Amont — Silicium, optiques, assemblage

**Silicium de commutation (intrant critique)** :
- **Broadcom** — fournisseur marchand prédominant (familles **Tomahawk** pour le scale-out, **Jericho/Qumran** pour le buffer profond et le routage). Le 10-K déposé en février 2026 reconnaît explicitement cette dépendance
- **Intel**, **Marvell**, **NVIDIA** (composants annexes), **Credo / Astera** (retimers, DSP)
- Fonderie ultime : **TSMC** (3 nm / 5 nm), hors du champ contractuel direct d'Arista

**Optiques et modules** : Coherent/Finisar, Innolight, Eoptolink, Lumentum — goulet d'étranglement majeur sur les 800G et 1,6T. Arista pousse son standard **XPO** (optiques enfichables haute densité à refroidissement liquide, annoncé en mai 2026 : jusqu'à −75 % de baies réseau, −44 % d'emprise au sol).

**Mémoire et composants passifs** : tension généralisée sur la DRAM depuis 2025, avec effet ASP haussier sur tout le secteur.

**Assemblage (EMS)** : **Foxconn, Jabil, Sanmina, Celestica, Flex** — production diversifiée hors de Chine (Mexique, Vietnam, Asie du Sud-Est) sous l'effet des droits de douane.

---

### Arista — Conception, EOS, intégration

**Ce qu'Arista fait réellement** : architecture système, conception carte, qualification silicium en amont avec Broadcom, et surtout **développement d'EOS** — image unique, base d'état SysDB, télémétrie CloudVision. Le logiciel est chargé dans l'un des centres de distribution directe avant expédition.

**Engagements fournisseurs** : **~8,9 Mds$ de commandes fermes** portées au bilan, avec des délais d'approvisionnement à **52 semaines et au-delà**. Jayshree Ullal a qualifié la pénurie de composants de problème « d'un à deux ans » lors de la publication du T1 2026.

---

### Aval — Clients finaux

**Cloud & AI Titans** : **Microsoft** (~26 % du CA 2025, déployé du leaf au spine régional, en WAN et en edge cloud), **Meta** (> 10 %, partenaire depuis les premières architectures), **Google** (Virgo Fabric) et **Oracle** — candidats déclarés au statut de client à plus de 10 %.

**Néoclouds et opérateurs IA** : opérateurs de « AI factories » construisant des grappes de dizaines de milliers de GPU.

**Entreprises** : banques et salles de marché (latence), santé, industrie, énergie, secteur public, éducation — cœur de la stratégie campus.

**Canaux** : vente directe pour les Titans, distributeurs, intégrateurs, VAR et partenaires OEM pour l'entreprise.

---

### Cartographie simplifiée du flux

\`\`\`
SILICIUM / OPTIQUES   →   EMS (ASSEMBLAGE)   →   ARISTA          →   CLIENTS FINAUX
Broadcom (Tomahawk,       Foxconn, Jabil,        Architecture +      Microsoft (~26 %)
Jericho), TSMC            Sanmina, Celestica     EOS + CloudVision   Meta (> 10 %)
Optiques 800G/1,6T        Flex                   Qualification       Google, Oracle
Mémoire, DSP              (Mexique, Vietnam)     Support & services  Entreprises, néoclouds
(délais > 52 sem.)        (diversification       (~16 % du CA)       (grappes GPU)
                           hors Chine)
\`\`\`

**La fragilité structurelle** : Arista est **prise en tenaille** entre un fournisseur de silicium quasi unique (Broadcom, qui arme aussi ses concurrents white box) et une poignée d'acheteurs géants qui disposent tous des compétences internes pour concevoir leurs propres commutateurs.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Arista publie **un seul segment opérationnel**. La granularité disponible se limite à la répartition **produits / services**, à la géographie et aux **objectifs de marché indiqués par la direction** (IA, campus, routage). Les chiffres ci-dessous combinent publications officielles et objectifs annoncés.

### Structure produits / services

| Ligne | Poids ~ | Marge | Dynamique |
|---|---|---|---|
| Produits (commutateurs, routeurs) | ~84 % | Plus faible, sensible au mix client | Portée par l'IA et le 800G |
| Services (support, CloudVision) | ~16 % | Nettement supérieure | Croissance mécanique avec le parc installé |

Le stock de **revenus différés atteint 6,87 Mds$ au T2 2026** (contre ~4,0 Mds$ fin 2025) : il mêle support facturé d'avance et livraisons produits non encore reconnues, ce qui en fait à la fois un signal de carnet et une source de volatilité trimestrielle.

### Objectifs de marché 2026 (communiqués par la direction)

| Marché | Objectif 2026 | Commentaire |
|---|---|---|
| **AI fabrics** | **≥ 3,5 Mds$** | Plus gros que le CA total du groupe en 2022 (2,9 Mds$) |
| **Campus** | **≥ 1,25 Md$** | Pilier de diversification hors IA |
| **Routage** | Non chiffré | Substitution aux routeurs propriétaires |
| **Total groupe** | **~12,6 Mds$** | Relevé **trois fois** en 2026 (10,5 → 11,25 → 11,5 → 12,6) |

Les plateformes **Etherlink** dépassent **100 clients cumulés** au T2 2026. Le segment **scale-across** (interconnexion entre data centers IA) est estimé par la direction à un marché de **15 à 20 Mds$ d'ici 2030**, contre 3 à 4 Mds$ en 2026.

---

### Répartition géographique

| Zone | Poids T2 2026 | Tendance |
|---|---|---|
| Amériques | ~77 % | Cœur historique, hyperscalers US |
| International (EMEA + Asie-Pacifique) | **~23 %** | En progression, croissance organique |

La direction insiste sur le caractère **organique** de la progression internationale — souveraineté numérique européenne, néoclouds régionaux, opérateurs asiatiques.

---

### Profil de marge et rentabilité

- **Marge brute** : **63,4 % (non-GAAP) au T2 2026**, contre 65,6 % un an plus tôt — **compression de 220 pb** attribuée au mix client (poids croissant des hyperscalers, remises de volume) et à la hausse du coût des composants. La guidance T3 à **~63 %** suggère que le phénomène est **structurel et non ponctuel**
- **Marge opérationnelle** : **49,9 % non-GAAP** au T2 2026 (45,4 % GAAP), en hausse de 110 pb a/a — le levier opérationnel compense la compression brute
- **Marge nette** : ~38-40 % — un niveau de rentabilité de société logicielle
- **ROE** : ~31 % ; **ROIC** très supérieur au coût du capital, du fait d'une base d'actifs légère (capex < 150 M$/an)

**Lecture** : le vrai débat de segment n'est pas « quel produit vend Arista », mais **« à qui »**. Chaque point de part supplémentaire pris chez un hyperscaler dilue la marge brute tout en gonflant le chiffre d'affaires. La croissance du campus et de l'international est, à ce titre, **relutive en marge** autant que stratégique.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. EOS — image logicielle unique, coût de changement réel
C'est le moat principal. **Un seul système d'exploitation** couvre toute la gamme, du switch de campus au cœur de data center, avec un noyau Linux non modifié et une base de données d'état (SysDB) qui isole les processus. Conséquences : mises à jour sans interruption (**Smart System Upgrade**), automatisation par API, et surtout **un savoir-faire opérationnel accumulé chez le client**. Les équipes réseau, les scripts, les outils de supervision et les procédures d'exploitation sont écrits pour EOS. Changer de fournisseur, ce n'est pas changer de boîtier — c'est réécrire l'exploitation.

### 2. Co-conception avec les hyperscalers — barrière de qualification
Les cycles de qualification chez un Titan durent **12 à 24 mois** et engagent des équipes d'ingénierie des deux côtés. Arista est déployée chez Microsoft **sur toutes les couches du réseau** depuis plus d'une décennie. Cette intimité technique est un actif que la concurrence ne peut pas acheter — mais qu'elle peut, à terme, contourner en internalisant.

### 3. Vitesse d'exécution sur le silicium marchand
En ne concevant pas ses ASIC, Arista transforme le calendrier de Broadcom en avantage : elle est régulièrement **première ou deuxième à livrer** une plateforme sur une nouvelle génération (51,2 Tbit/s hier, **1,6 Tbit/s aujourd'hui, avec option refroidissement liquide**). Le corollaire est évident — ce moat est **loué, pas possédé**.

### 4. Marque et NPS dans un métier de confiance
Arista revendique un **Net Promoter Score leader du secteur** et figure au **Magic Quadrant Gartner 2026** comme Leader du LAN filaire/sans fil. Dans un domaine où une panne réseau arrête une usine ou une salle de marché, la réputation d'ingénierie est une barrière commerciale réelle.

### 5. Effet de bilan
**13,3 Mds$ de trésorerie et titres, aucune dette.** Cela permet d'engager **~8,9 Mds$ de commandes fermes** de composants dans un marché en pénurie — un luxe que peu de concurrents de taille moyenne peuvent s'offrir, et qui se traduit directement en capacité de livraison.

## Ce qui n'est PAS un moat

- **Le matériel** : les mêmes puces Broadcom équipent Accton, Edgecore, Celestica et Quanta, qui facturent **30 à 40 % moins cher**
- **Le protocole** : l'Ethernet est ouvert par construction ; Arista est membre fondateur de l'**Ultra Ethernet Consortium**, aux côtés de ses propres clients
- **La relation client** : elle est concentrée, donc **négociable par le client**, pas par le fournisseur

## Positionnement vs concurrence

| Critère | Arista | NVIDIA (Spectrum-X) | Cisco | White box |
|---|---|---|---|---|
| Part datacenter Ethernet (T1 2026) | **20,7 %** | **21,5 %** | 17,8 % | Significative |
| Modèle de vente | Réseau autonome + EOS | Intégré à l'architecture GPU | Parc installé entreprise | Prix |
| Marge opérationnelle | ~50 % (non-GAAP) | Très élevée | ~25-30 % | Faible |
| Dépendance silicium | Broadcom | Interne | Mixte | Broadcom |
| Force principale | Logiciel & fiabilité | Verrou GPU | Distribution & entreprise | Coût |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **faible à modéré**. Deux à trois comptes pèsent ~50 % du CA et disposent d'alternatives crédibles ; les remises de volume expliquent l'essentiel de la compression de marge brute
- **Vis-à-vis de Broadcom** : **faible**. Fournisseur quasi unique, qui vend le même silicium aux concurrents et dispose de son propre écosystème
- **Vis-à-vis des entreprises et néoclouds** : **fort**. Là, Arista vend de la fiabilité et de l'automatisation, pas du prix au port — c'est le segment où le moat se monétise le mieux`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Réseau & infrastructure IA (août 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Arista Networks** | **ANET US** | **~258 Mds$** | **~23x** | **~52x** | **~63x** | **0 %** | **~30 %** |
| NVIDIA | NVDA US | > 4 000 Mds$ | ~20x | ~35x | ~40x | ~0,03 % | ~60 % |
| Cisco Systems | CSCO US | ~290 Mds$ | ~4,5x | ~17x | ~26x | ~2,3 % | ~22 % |
| Broadcom | AVGO US | > 1 500 Mds$ | ~20x | ~35x | ~55x | ~0,7 % | ~25 % |
| HPE (avec Juniper) | HPE US | ~35 Mds$ | ~1,0x | ~12x | ~14x | ~2,5 % | ~9 % |
| Celestica | CLS US | ~40 Mds$ | ~3,0x | ~30x | ~40x | 0 % | ~18 % |

*Ordres de grandeur au 14 août 2026, sur la base des cours et publications disponibles. Les multiples d'Arista sont calculés sur un cours de **204,79 $** et une trésorerie nette de 13,3 Mds$. À affiner sur filings SEC directs.*

---

### Analyse comparative

**NVIDIA — le concurrent devenu n°1**
Le fait marquant de 2026 : selon IDC, **NVIDIA a pris la première place du commutateur Ethernet data center au T1 2026 avec 21,5 % de part de marché** (2,1 Mds$ sur le trimestre), contre **moins de 4 % deux ans plus tôt**. Arista suit à **20,7 %**, Cisco à 17,8 %. La lecture qualitative importe autant que le chiffre : **Spectrum-X n'est pas vendu comme un commutateur mais comme un composant de l'« AI factory »**, packagé avec les GPU. Arista ne perd pas un appel d'offres réseau — elle perd un arbitrage d'architecture décidé en amont.

**Cisco — le concurrent qui vaut la moitié du multiple**
Cisco reste **n°1 du marché Ethernet total (29,3 %)** grâce au campus et à l'entreprise, mais recule sur le data center haute vitesse. Il se paie **~26x les bénéfices** contre ~63x pour Arista. C'est le miroir de valorisation : la prime d'Arista rémunère **une croissance de 40 % et une marge opérationnelle de 50 %**, pas la qualité du parc installé.

**Broadcom — le fournisseur qui pourrait devenir juge**
Broadcom fournit le silicium d'Arista **et** celui de tous les fabricants de white box. Le rapport de force est asymétrique : Broadcom capte une part croissante de la valeur du réseau IA sans supporter le risque commercial.

**HPE/Juniper — le consolidateur discount**
La fusion crée un troisième acteur crédible en entreprise, valorisé à **~14x** les bénéfices. Sa capacité de nuisance est plus tarifaire que technologique.

**Celestica / Accton — les gagnants silencieux**
Les ODM ont capté une part significative des commandes hyperscalers, en facturant **30 à 40 % moins cher** que les équivalents de marque. C'est la pression de fond sur les prix, invisible dans les parts de marché en valeur.

---

### Le ratio qui compte : EV/CA rapporté à la croissance
À **~23x le chiffre d'affaires** pour une croissance de 40 % et une marge opérationnelle non-GAAP de 50 %, Arista se paie **comme un éditeur de logiciels**. Cette assimilation tient tant que : (1) la marge brute ne descend pas sous 62-63 %, et (2) la croissance reste au-dessus de 25 %. Le marché total du commutateur Ethernet data center a progressé de **61 % au T1 2026 (10 Mds$ sur le trimestre)** — dans un tel marché, la question n'est pas la demande, c'est **la part qu'Arista en conserve**.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 2026 (publiés le 4 août 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart |
|---|---|---|---|
| Chiffre d'affaires | **3,036 Mds$** | ~2,83 Mds$ | **+7,2 % ✓** |
| Croissance a/a | **+37,7 %** | — | Accélération vs +35,1 % au T1 |
| BPA non-GAAP | **1,02 $** | 0,88-0,89 $ | **+15 % ✓** |
| BPA GAAP | 0,95 $ | — | +35,7 % a/a |
| Marge opér. non-GAAP | **49,9 %** | ~48 % | vs 48,8 % un an plus tôt |
| Marge brute non-GAAP | 63,4 % | ~63,5 % | **−220 pb a/a** |

**Premier trimestre au-dessus de 3 Mds$ de l'histoire de la société**, et **cinquième à sixième dépassement consécutif** du consensus. Le titre a bondi de ~12 % en après-Bourse.

---

### Facteurs clés

- **IA** : plateformes **Etherlink au-delà de 100 clients cumulés** ; introduction des plateformes **1,6 Tbit/s**, dont des versions à refroidissement liquide, pour le scale-up, le scale-out et le **scale-across**
- **Croissance large** : cœur data center, **campus** et **routage** contribuent tous — la direction insiste sur ce point pour désamorcer la thèse « pure play IA »
- **International à 23 % du CA**, en progression organique
- **Innovations réseau** annoncées : Smart System Upgrade, Multipath Reliable Connection, répartition de charge SRv6

---

### Évolution des marges — le vrai point de vigilance

La marge brute passe de **65,6 % à 63,4 %** en un an, et la guidance T3 la place à **~63 %**. La direction l'attribue au **mix client final** — c'est-à-dire au poids croissant des hyperscalers, qui obtiennent des remises. La marge opérationnelle, elle, **progresse** (49,9 % contre 48,8 %) : le levier sur les charges d'exploitation absorbe plus que la compression brute. Tant que la croissance reste à 40 %, cette mécanique fonctionne ; à 15 % de croissance, elle s'inverse.

---

### Perspectives et guidance

- **T3 2026** : CA **~3,3 Mds$**, marge brute ~63 %, marge opérationnelle **48-49 %**, BPA non-GAAP **1,06-1,08 $**
- **Exercice 2026** : objectif relevé à **~12,6 Mds$ (+40 %)** — **troisième relèvement de l'année**, soit +2,1 Mds$ par rapport à l'objectif de l'Analyst Day (10,5 Mds$) et +1,1 Md$ par rapport à la projection de mai (11,5 Mds$)
- **Objectifs maintenus** : AI fabrics **≥ 3,5 Mds$**, campus **≥ 1,25 Md$**
- **Ton** : nettement plus offensif qu'au T1, où le discours portait sur les contraintes d'approvisionnement

---

### Signaux d'alerte bilan

- **Revenus différés : 6,87 Mds$** (contre ~4,0 Mds$ fin 2025). Positif comme indicateur de carnet, mais il **décale la reconnaissance du revenu** et rend la lecture trimestrielle moins lisible
- **Engagements d'achat ~8,9 Mds$** : indispensable pour livrer, mais c'est une **obligation ferme** en cas de retournement de la demande
- **Stocks** en hausse continue pour sécuriser les composants — à surveiller si la croissance décélère
- **Trésorerie et titres : 13,3 Mds$, aucune dette** — le coussin est considérable
- **Créances** : concentration mécanique sur deux à trois débiteurs de très haute qualité de crédit

---

### Réaction du marché

Le titre est passé d'environ **190 $ à un record de clôture de 210,50 $ le 12 août 2026**, portant la performance à **+64 % sur douze mois** et la capitalisation à **~258 Mds$**. Une quinzaine de bureaux ont relevé leur objectif dans les jours suivants (Citi 215 $, Morgan Stanley 220 $, Goldman 225 $, Truist 234 $, BofA et Piper 240 $, JPMorgan / KeyBanc / TD Cowen / Evercore 250 $, Wells Fargo 255 $, UBS 259 $, Needham 260 $, Rosenblatt 280 $, Barclays 289 $). L'objectif moyen s'établit autour de **242 $**.

**Ce que cela dit du cours** : le marché avait déjà intégré une croissance forte ; ce qu'il n'avait pas intégré, c'est **l'accélération séquentielle** (+12,1 % t/t) et la capacité d'Arista à livrer malgré la pénurie de composants. Le débat s'est déplacé de « la demande tiendra-t-elle ? » à **« à quel multiple payer une croissance de 40 % financée par deux clients ? »**.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Ton et priorités

### Évolution du ton, 2024 → 2026

**2024-2025 — Prudence méthodique.** Jayshree Ullal cadre l'IA comme une opportunité réelle mais **non linéaire**, refuse de commenter les capex clients, et répète que 2025 sera « une année de transition ». Le discours est délibérément sous-promotionnel : le management guide bas et dépasse.

**T1 2026 (mai) — Le trimestre de la contrainte.** Le sujet dominant n'est plus la demande mais **l'offre** : pénurie de wafers, désengagements de fournisseurs de semi-conducteurs, délais dépassant **52 semaines**. Ullal qualifie le problème de « un à deux ans ». La CFO Chantelle Breithaupt parle d'un environnement « macro et chaîne d'approvisionnement dynamique ». Le titre souffre d'un doute sur la capacité à convertir la demande en revenu.

**T2 2026 (août) — Le basculement.** Ton nettement plus assuré. Ullal : *« Arista connaît une demande considérable, qui lui permet d'atteindre son premier trimestre à 3 milliards de dollars »*, rappelant qu'il y a cinq ans, c'était le **chiffre d'affaires annuel** de la société. Le cadre stratégique est renommé **« Arista 2.0 »** : le réseau comme *système nerveux central* de l'infrastructure, du client au campus jusqu'aux centres de données et d'IA.

---

### Priorités répétées du management

**1. Diversifier la base client — sans jamais le dire comme un risque.** Sur le T2, la direction confirme attendre **un, voire deux nouveaux clients à plus de 10 %**, tout en réaffirmant l'engagement envers « nos deux partenaires les plus anciens, Microsoft et Meta ». C'est la réponse implicite à la principale objection des investisseurs.

**2. Contrer la thèse white box.** Argument systématique : le blue box / white box convient aux **cas d'usage simples** ; dès que le réseau IA se complexifie, les clients reviennent à **EOS**. Ullal évoque explicitement des clients partis vers le blue box puis revenus.

**3. Élargir le récit au-delà de l'IA.** Campus, routage, cœur de data center sont mis en avant à chaque appel — la direction veut être valorisée comme **plateforme réseau**, pas comme dérivé du capex GPU.

**4. Le scale-across comme prochain relais.** Marché estimé à **15-20 Mds$ en 2030** contre 3-4 Mds$ aujourd'hui, avec des essais au second semestre 2026 et une production élargie en 2027.

**5. L'approvisionnement comme différenciateur.** Le message subtil : dans un marché en pénurie, **la capacité à livrer est un avantage concurrentiel** — et elle se paie en engagements de 8,9 Mds$ que peu d'acteurs peuvent porter.

---

### Analyse du sentiment

- **Confiance** : montante et désormais élevée, mais dans un registre **d'ingénieur, non de vendeur**. Ullal chiffre systématiquement, y compris ce qui dérange (la marge brute)
- **Transparence** : bonne sur la marge — la compression liée au mix client est reconnue **avant** d'être détectée par les analystes. Plus évasive sur l'identité des nouveaux clients à 10 %
- **Cohérence** : remarquable sur trois ans. Aucun changement de stratégie, aucune révision de guidance à la baisse ; les relèvements sont réguliers et documentés
- **Signal à surveiller** : le passage d'un discours d'offre (T1) à un discours de demande (T2) est le **type de bascule qui précède les cycles de révisions haussières… et les déceptions quand le carnet se normalise**

> **À lire entre les lignes** : la direction guide encore conservativement (six dépassements consécutifs). L'écart entre guidance et réalisation est devenu si systématique que **le consensus intègre désormais le dépassement** — ce qui réduit mécaniquement la marge de bonne surprise.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Jayshree Ullal — Présidente du conseil et Directrice générale

**Bilan chiffré.** Arrivée en 2008 alors qu'Arista réalisait quelques dizaines de millions de dollars de chiffre d'affaires, elle a conduit la société à **9 Mds$ en 2025** et à un objectif de **12,6 Mds$ en 2026** — une croissance composée à deux chiffres pendant près de vingt ans, avec une **marge opérationnelle non-GAAP à ~50 %**, un niveau inédit dans l'équipement réseau. Auparavant, quinze ans chez Cisco, où elle a dirigé la division data center (dont l'activité qui allait devenir le Nexus).

**Ancienneté** : DG depuis **2008**, présidente du conseil depuis 2022. C'est l'une des durées de mandat les plus longues du secteur technologique américain.

**Participation financière** : significative, mais **en réduction régulière**. Les trusts familiaux liés à la dirigeante ont cédé **573 509 actions le 12 août 2026** entre 207 et 211 $, dans le cadre d'un plan **Rule 10b5-1 adopté en novembre 2025**. Elle ne détient plus que ~9 900 actions en direct, l'essentiel étant logé dans des structures familiales dont elle décline la propriété économique.

---

### Andy Bechtolsheim — Fondateur et Chief Architect

Cofondateur de Sun Microsystems, premier investisseur de Google, cofondateur d'Arista : un ingénieur d'exception et **le premier actionnaire individuel**, avec encore **~181 millions d'actions** détenues via un trust familial (~14 % du capital).

**Deux points de gouvernance à ne pas éluder** :
1. **Règlement SEC pour délit d'initié (2022)** : sanction civile de près d'1 M$ et interdiction d'exercer un mandat d'administrateur ou de dirigeant de société cotée pendant cinq ans, sans reconnaissance ni contestation des faits. Il a quitté la présidence du conseil et conserve un rôle technique.
2. **Ventes massives et régulières** : dans le cadre d'un plan 10b5-1 signé le **20 février 2026**, il a cédé environ **1,5 million d'actions entre juin et août 2026** (240 000 le 4 juin, 260 000 le 15 juin, 260 000 le 1er juillet, 300 000 le 14 juillet, 411 848 le 6 août, 300 000 le 5 août), à des cours allant de ~157 $ à ~197 $, soit **plus de 250 M$**. Ces ventes sont programmées et représentent une fraction de sa position — mais leur **régularité mécanique** doit être intégrée à l'analyse du flottant.

---

### Reste de l'équipe

- **Ken Duda** — CTO et cofondateur, architecte d'EOS. Sa présence est l'un des actifs les moins substituables de la société
- **Chantelle Breithaupt** — Directrice financière depuis 2024, issue de Cisco. Communication financière précise, notamment sur la compression de marge brute, reconnue en amont plutôt que subie

---

### Allocation du capital

| Levier | Pratique Arista | Lecture |
|---|---|---|
| Capex | < 150 M$/an | Modèle asset-light assumé |
| R&D | Priorité absolue, EOS unique | Efficacité structurelle |
| Acquisitions | Rares, petites (Awake Security, Untangle, Pluribus) | **Discipline remarquable** — aucun méga-deal, aucun goodwill massif |
| Dividende | **Aucun** | Cohérent avec la phase de croissance |
| Rachats d'actions | Programme actif, opportuniste | Nombre d'actions quasi stable (−0,5 % sur un an) |
| Trésorerie | **13,3 Mds$, zéro dette** | Sous-optimisé au sens strict, mais assure les 8,9 Mds$ d'engagements composants |

**ROE ~31 %, ROIC très élevé** : sur vingt ans, l'allocation n'a **jamais détruit de valeur par acquisition** — un point rare dans l'équipement réseau, où l'histoire est jonchée de rachats dépréciés.

---

### Signaux d'alerte

- **Cumul des fonctions** : Ullal est à la fois **présidente du conseil et DG** — absence de séparation des pouvoirs, contre-pouvoir affaibli
- **Risque de succession** : le duo Ullal/Duda incarne l'entreprise depuis quinze ans. Aucun successeur désigné publiquement
- **Ventes d'initiés soutenues** : programmées et légales, mais **massives et continues** de la part des deux figures fondatrices
- **Antécédent réglementaire** du cofondateur, à documenter mais à ne pas surpondérer : il ne siège plus au conseil
- **Type** : dirigeante **professionnelle devenue quasi-fondatrice** — profil idéal pour une phase de scale-up technologique, mais qui rend le sujet de la relève d'autant plus sensible`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

**Repères actuels** : cours de **204,79 $** au 14 août 2026, record de clôture à **210,50 $ le 12 août 2026**, fourchette 52 semaines **114,52 $ – 214,89 $**, **+64 % sur douze mois**, bêta **~1,61**. Un **split 4 pour 1** est intervenu en décembre 2024 (tous les cours cités sont ajustés).

### Hausses significatives (> 5 %)

**2023-2024 — Découverte de la thèse IA.** Le passage de l'InfiniBand à l'Ethernet pour les réseaux back-end d'IA fait d'Arista un bénéficiaire direct du capex GPU. Le titre triple en deux ans ; la création de l'Ultra Ethernet Consortium valide la thèse.

**Février 2026 — Résultats 2025 record.** CA annuel de 9,006 Mds$ (+28,6 %), **premier trimestre à plus d'1 Md$ de résultat net**, dépassement du consensus de ~4 %. Le titre progresse de ~4,8 % le jour de la publication.

**Mars 2026 — Doublement du TAM annoncé.** À la conférence Morgan Stanley, Ullal chiffre le marché adressable à **~105 Mds$**, environ le double de l'estimation précédente, en y intégrant le campus et le WAN.

**Mai 2026 — Relèvement de guidance et lancement XPO.** L'objectif 2026 passe à 11,5 Mds$, l'objectif AI fabrics à 3,5 Mds$. Le titre reprend fortement ; Morgan Stanley relève son objectif et souligne que **Google et Oracle pourraient chacun approcher 10 % du CA**, ce qui affaiblirait l'argument de concentration.

**4-12 août 2026 — Premier trimestre à 3 Mds$.** +12 % en après-Bourse, puis série de records jusqu'à **210,50 $**. Une quinzaine de relèvements d'objectifs en quelques jours, jusqu'à **289 $** (Barclays).

---

### Baisses significatives (> 5 %)

**Janvier 2025 — Choc DeepSeek.** L'hypothèse d'une IA moins gourmande en calcul provoque une correction brutale de toutes les valeurs d'infrastructure. Arista, pure exposition au capex data center, est frappée de plein fouet.

**Mars 2025 — Annulations de baux Microsoft.** L'information selon laquelle Microsoft renonce à certains contrats de data centers réactive l'inquiétude sur le **client n°1 (~26 % du CA)**. Le secteur repart à la baisse.

**Avril 2025 puis avril 2026 — Droits de douane.** Le risque tarifaire touche directement une société dont l'assemblage est sous-traité au Mexique, au Vietnam et en Asie. Le titre perd jusqu'à **28 % par rapport à son plus haut** début avril 2026.

**Juin 2026 — Publication IDC.** L'annonce que **NVIDIA devient n°1 du commutateur Ethernet data center (21,5 % contre 20,7 % pour Arista)** provoque un décrochage sectoriel — ce jour-là, Arista cède 8 % en séance, dans un mouvement qui emporte aussi Ciena et Lumentum.

---

### Facteurs structurels

- **Corrélation au capex hyperscaler** : le titre réagit davantage aux annonces de Microsoft, Meta, Google et Oracle qu'à ses propres publications intermédiaires
- **Sensibilité au récit IA** : chaque doute sur l'intensité capitalistique de l'IA se traduit immédiatement dans le multiple
- **Aucun dividende** : la base d'actionnaires est intégralement composée d'investisseurs de croissance — donc **volatile**
- **Flottant alimenté par les initiés** : ventes programmées régulières de Bechtolsheim et des trusts liés à Ullal
- **Multiple élevé** : à ~63x les bénéfices publiés, la moindre révision de croissance a un effet démultiplié sur le cours`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Chiffre d'affaires** :
- **2026** : guidance société **~12,6 Mds$ (+40 %)**, dont AI fabrics ≥ 3,5 Mds$ et campus ≥ 1,25 Md$. Historiquement, la direction dépasse sa guidance — hypothèse retenue : **12,6 à 12,8 Mds$**
- **2027** : décélération naturelle sur base élevée, mais soutenue par le **scale-across** (production élargie annoncée pour 2027), le campus et l'international. Hypothèse **+28 à +33 %**, soit **16,2 à 17,0 Mds$**
- **2028** : normalisation vers **+18 à +22 %**, soit **19,5 à 20,5 Mds$**
- **Risque de part de marché** : NVIDIA et les ODM continuent de prendre de la part dans le back-end ; l'hypothèse suppose qu'Arista compense par le front-end, l'inférence, le campus et le routage

**Marges** :
- **Marge brute** : poursuite de l'érosion vers **62-63 %** sous l'effet du mix hyperscaler et du coût des composants ; stabilisation supposée à partir de 2027 grâce au campus et aux services
- **Marge opérationnelle non-GAAP** : **~49 % en 2026**, puis **47-49 %** — le levier opérationnel s'atténue à mesure que la croissance ralentit
- **Coût des composants** : la hausse des prix frappera après épuisement du stock de composants déjà acquis, soit **à partir de 2027**

**Coûts de financement** : **aucune dette**. À l'inverse, les **13,3 Mds$ de trésorerie** génèrent un produit financier significatif — contributeur non négligeable au BPA en régime de taux élevés.

**Dilution** : rémunération en actions substantielle, **compensée par les rachats**. Nombre d'actions quasi stable (−0,5 % sur un an) — hypothèse de dilution nette **nulle à +0,5 %/an**.

---

### Estimations BPA (non-GAAP dilué)

| Exercice | BPA estimé | Croissance | P/E à 204,79 $ |
|---|---|---|---|
| 2024 (réalisé) | **~2,32 $** | — | — |
| 2025 (réalisé) | **2,98 $** | **+28 %** | — |
| **2026E** | **4,10 – 4,20 $** | **+38-41 %** | **~49-50x** |
| **2027E** | **5,20 – 5,60 $** | **+26-33 %** | **~37-39x** |
| **2028E** | **6,30 – 6,90 $** | **+20-24 %** | **~30-33x** |

*Construction 2026 : 0,87 $ (T1 réalisé) + 1,02 $ (T2 réalisé) + ~1,07 $ (guidance T3) + ~1,15-1,25 $ (T4 estimé). Attention : les consensus publiés par les agrégateurs varient fortement selon le retraitement fiscal des rémunérations en actions ; certains affichent encore ~3,3 $ pour 2026 sur une base non homogène.*

---

### Sensibilité

- **Scénario haussier** (croissance > 35 % en 2027, marge brute stabilisée à 63 %, Google et Oracle deviennent clients à 10 %) : BPA 2028 ~7,50 $ → P/E 2028 ~27x. À un multiple de 35x, cela justifierait un cours **au-delà de 260 $**
- **Scénario de base** : BPA 2028 ~6,60 $ → P/E 2028 ~31x. À 30x, cours implicite ~200 $ — **le cours actuel intègre donc déjà le scénario de base**
- **Scénario baissier** (croissance 2027 ramenée à 15 % par une pause capex ou une perte de part au profit de Spectrum-X, marge brute à 60 %) : BPA 2028 ~5,00 $. À un multiple comprimé de 22x, cours implicite **~110 $**, soit **−45 %**

**Conclusion** : la trajectoire bénéficiaire est parmi les plus lisibles du secteur à 18 mois, et bien plus incertaine à 36 mois. **L'asymétrie ne vient pas des bénéfices, elle vient du multiple** : passer de 50x à 30x annule trois ans de croissance des résultats.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels

**1. L'Ethernet gagne la guerre des réseaux IA.** Le back-end IA bascule de l'InfiniBand vers l'Ethernet standardisé, porté par l'**Ultra Ethernet Consortium** dont Arista est membre fondateur. Le marché du commutateur Ethernet data center a crû de **61 % au T1 2026**, à 10 Mds$ sur le seul trimestre. Arista est l'acteur le mieux placé pour vendre de l'Ethernet **à ceux qui n'achètent pas de GPU NVIDIA**.

**2. Le carnet et la guidance.** Objectif 2026 relevé **trois fois** en une année, jusqu'à **12,6 Mds$ (+40 %)**. Revenus différés à **6,87 Mds$**. Engagements d'achat de **8,9 Mds$**, qu'une entreprise ne prend pas sans visibilité sur la demande.

**3. La diversification des clients devient réalité.** Confirmation par la direction d'**un à deux nouveaux clients à plus de 10 %** — Google (Virgo Fabric) et Oracle. Si l'un des deux se matérialise, la principale décote de la thèse (la concentration) perd sa justification. Morgan Stanley en avait fait le pivot de son relèvement d'objectif dès mai 2026.

**4. Le scale-across, relais 2027-2030.** Marché estimé à **15-20 Mds$ en 2030** contre 3-4 Mds$ aujourd'hui, avec essais au S2 2026. Arista y arrive avec le buffer profond (Jericho) et l'expérience du DCI.

**5. Les piliers non-IA sont réels.** Campus **≥ 1,25 Md$** en 2026, statut de Leader au Magic Quadrant Gartner 2026, routage en substitution. International à **23 % du CA** et en progression.

**6. Un bilan qui est une arme.** **13,3 Mds$ de trésorerie, zéro dette.** Dans un marché en pénurie de composants, la capacité à préempter la capacité **est** l'avantage concurrentiel.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques susceptibles de nuire durablement

**1. La concentration client est une hypothèque permanente.** **Microsoft ~26 % du CA 2025, Meta > 10 %**, les deux à trois premiers clients pesant probablement **plus de 50 %**. Ces clients disposent tous des équipes capables de concevoir leurs propres commutateurs, achètent déjà du white box, et négocient chaque génération. Une décision d'architecture prise dans une seule salle de réunion peut effacer un quart du chiffre d'affaires.

**2. NVIDIA ne vend pas un commutateur, il vend une architecture.** Spectrum-X est passé de **moins de 4 % à 21,5 % de part de marché en deux ans**, prenant la première place à Arista au T1 2026. Le combat ne se joue pas sur la qualité du réseau mais sur le **bundle GPU + réseau**, là où Arista n'a rien à opposer.

**3. La compression de marge brute est structurelle.** De **65,6 % à 63,4 %** en un an, guidance à ~63 %, hausse du coût des composants à venir une fois le stock épuisé. Le mix qui fait la croissance est le mix qui détruit la marge.

### Analyse pré-mortem

*Nous sommes en 2028, le titre vaut 110 $.* Ce qui s'est passé : la vague de construction des grappes IA a marqué une pause de deux trimestres en 2027 ; Microsoft a internalisé une partie de son leaf ; NVIDIA a converti son avance d'architecture en part sur le front-end ; la marge brute est tombée à 60 % ; la croissance 2027 s'est établie à 12 % au lieu de 30 %. Le BPA n'a pas baissé — il a simplement cessé de croître. **Le multiple, lui, est passé de 50x à 22x.** Aucun de ces éléments n'exige de scénario catastrophe : chacun est une déception ordinaire.

### Les multiples sont-ils trop élevés ?

**~63x les bénéfices publiés, ~50x le BPA 2026 estimé, ~23x le chiffre d'affaires**, contre ~26x pour Cisco et ~14x pour HPE/Juniper. Ce sont des multiples d'éditeur de logiciels appliqués à une société qui **vend du matériel assemblé par des tiers avec le silicium d'un fournisseur unique**. La prime est défendable tant que la croissance dépasse 25 % ; elle devient indéfendable en dessous.

### Point de vue à contre-courant

**Ce que le marché refuse de voir** : le consensus se rassure en disant que l'arrivée de Google et d'Oracle « résout » la concentration. C'est une erreur de raisonnement. Passer de deux à quatre clients géants ne diversifie pas le risque — **cela ne fait que le corréler différemment**, puisque ces quatre acheteurs prennent leurs décisions de capex en réponse aux mêmes signaux macro sur l'IA. La vraie diversification serait le campus et l'entreprise, qui pèsent aujourd'hui **environ 10 % du chiffre d'affaires**. Le marché paie une prime de plateforme pour ce qui reste, économiquement, **un fournisseur de composants d'infrastructure IA en situation de dépendance bilatérale**.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus et revenus différés — RISQUE MODÉRÉ
Le poste le plus important à surveiller. Les **revenus différés sont passés de ~4,0 Mds$ fin 2025 à 6,87 Mds$ au T2 2026**. Ils recouvrent deux natures très différentes : les **contrats de support facturés d'avance** (récurrents, lisibles) et les **livraisons produits dont les critères de reconnaissance ne sont pas remplis** (acceptation client, obligations résiduelles).

**À surveiller** : la ventilation entre différé « produit » et « service » dans les annexes du 10-Q, ainsi que le rythme de reprise en résultat. Un différé qui gonfle **plus vite que le CA** peut indiquer soit un carnet solide (lecture haussière), soit des livraisons sans acceptation client (lecture baissière). Les deux se ressemblent jusqu'au retournement.

### Information sectorielle — RISQUE MODÉRÉ
Arista publie **un seul segment opérationnel**. Il n'existe **aucune ventilation officielle** du CA par ligne (IA, campus, routage) ni par client nommé au-delà des seuils réglementaires de 10 %. Les chiffres « AI fabrics ≥ 3,5 Mds$ » ou « campus ≥ 1,25 Md$ » sont des **objectifs de direction non audités**, non réconciliables avec les états financiers. C'est une opacité légale, mais réelle : l'investisseur ne peut pas vérifier indépendamment la diversification revendiquée.

### Engagements conditionnels et commandes fermes — RISQUE MODÉRÉ À ÉLEVÉ
**~8,9 Mds$ d'engagements d'achat** auprès des sous-traitants, dans un contexte de délais supérieurs à 52 semaines. Ces engagements sont **fermes** et hors bilan pour l'essentiel.

**À surveiller** : toute **provision pour engagements excédentaires** ou dépréciation de stock — c'est le signal classique du retournement dans le matériel réseau, et il apparaît généralement **un trimestre avant** que la demande ne fléchisse visiblement.

### Stocks — RISQUE MODÉRÉ
Constitution volontaire d'un stock de composants pour sécuriser la production. Un ratio stocks/CA en hausse est **justifié en pénurie** et **destructeur en surcapacité**.

**À surveiller** : rotation des stocks, provisions pour obsolescence, et coïncidence avec un ralentissement de la croissance des commandes.

### Rémunération en actions — RISQUE MODÉRÉ
L'écart **GAAP / non-GAAP est significatif** : marge opérationnelle 45,4 % GAAP contre 49,9 % non-GAAP au T2 2026, BPA 0,95 $ contre 1,02 $. L'essentiel de l'écart est de la **rémunération en actions**, charge réelle mais exclue des indicateurs mis en avant. La société a par ailleurs **modifié en 2026 sa méthode de calcul de l'impôt non-GAAP** sur les rémunérations en actions, avec application rétrospective (+19,7 M$ de résultat net non-GAAP sur le T1 2025). Changement documenté et de faible ampleur, mais **tout changement de méthode qui améliore la série historique mérite d'être noté**.

### Parties liées — RISQUE FAIBLE
Pas de transaction significative avec parties liées identifiée. En revanche, l'**antécédent réglementaire du cofondateur** (règlement SEC pour délit d'initié en 2022, sanction de près d'1 M$ et interdiction de mandat de dirigeant pendant cinq ans) impose une vigilance sur les procédures internes de communication d'information privilégiée.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Point fort du dossier. Arista n'a réalisé que des acquisitions de petite taille (sécurité, SD-WAN) : **le goodwill est marginal au regard des capitaux propres**, et le risque de dépréciation massive est quasi nul. C'est l'exact inverse du profil d'un consolidateur.

### Contrats de location (IFRS 16 / ASC 842) — RISQUE FAIBLE
Modèle asset-light, capex inférieur à 150 M$/an. Droits d'utilisation limités. Aucune anomalie.

### Flux de trésorerie vs résultat — RISQUE FAIBLE
**Flux d'exploitation de 1,69 Md$ sur le seul T1 2026**, FCF annuel supérieur à 5 Mds$, conversion du résultat en trésorerie excellente. Aucun signe de résultat « comptable » non converti en cash.

---

### Verdict global

**Risque comptable : FAIBLE À MODÉRÉ.** Bilan sans dette, trésorerie de 13,3 Mds$, goodwill négligeable, conversion en cash exemplaire — le profil est structurellement sain. Les zones de vigilance ne relèvent pas de la manipulation mais de la **lisibilité** : un seul segment publié, des objectifs de marché non auditables, un stock de revenus différés en forte croissance et des engagements d'achat considérables. Ce sont précisément les postes qui deviennent **des amortisseurs en phase haute et des accélérateurs en phase basse**.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour la direction générale

### Concentration et pouvoir de négociation

**1.** Vos deux à trois premiers clients pèsent probablement plus de 50 % du chiffre d'affaires. **Quel pourcentage exact** représentent-ils au T2 2026, et à partir de quel seuil considérez-vous que la concentration devient un risque structurel plutôt qu'un atout commercial ?

**2.** Vous annoncez un, voire deux nouveaux clients à plus de 10 %. **En quoi ajouter deux hyperscalers supplémentaires diversifie-t-il réellement le risque**, alors que ces quatre acheteurs prennent leurs décisions de capex en réponse aux mêmes signaux macro sur l'IA ?

**3.** Quelle part de votre chiffre d'affaires provient de clients **non hyperscalers** — entreprises, secteur public, néoclouds régionaux ? Et quelle est votre cible à trois ans sur ce mix ?

### Marge et coût des composants

**4.** La marge brute est passée de 65,6 % à 63,4 % en un an, avec une guidance à ~63 %. **Où se situe le plancher** que vous êtes prêt à défendre, et à partir de quel niveau refuseriez-vous un volume hyperscaler ?

**5.** Vous indiquez que les hausses de prix des composants frapperont après épuisement de votre stock actuel. **Quel trimestre précis**, et quelle part pourrez-vous répercuter en prix de vente ?

**6.** Sur les **8,9 Mds$ d'engagements d'achat** : quelle part est annulable sans pénalité, et quel serait l'impact P&L d'une baisse de 20 % de la demande sur deux trimestres ?

### Concurrence

**7.** NVIDIA est passé de moins de 4 % à 21,5 % de part du commutateur Ethernet data center en deux ans, en vendant le réseau **avec** les GPU. Que pouvez-vous opposer à un client à qui l'on propose un rack intégré, hors de tout appel d'offres réseau ?

**8.** Broadcom vous fournit le silicium **et** arme vos concurrents white box, qui facturent 30 à 40 % moins cher. **Qu'est-ce qui vous protège** d'une intégration verticale de Broadcom ou d'un accès préférentiel accordé à un ODM ?

**9.** Avez-vous étudié le développement d'un ASIC propriétaire, et à quelles conditions de volume et de marge cela deviendrait-il rationnel ?

### Chaîne d'approvisionnement

**10.** Vous décrivez la pénurie comme un problème « d'un à deux ans ». **Quelle part de votre croissance 2026 est contrainte par l'offre** plutôt que par la demande, et quel chiffre d'affaires n'avez-vous pas pu livrer ?

**11.** Quelle proportion de votre production sort encore de Chine, et quel serait l'impact d'un durcissement tarifaire supplémentaire sur votre marge brute ?

### Lisibilité financière

**12.** Vous publiez un segment unique tandis que vos objectifs IA, campus et routage ne sont pas réconciliables avec vos états financiers. **À quelle échéance envisagez-vous une information sectorielle auditée** ?

**13.** Les revenus différés sont passés de ~4 Mds$ à 6,87 Mds$ en deux trimestres. **Quelle est la ventilation produit / service**, et quel est le délai moyen de reprise en résultat ?

### Gouvernance et long terme

**14.** Vous cumulez la présidence du conseil et la direction générale, et le duo fondateur détient une part significative du capital tout en cédant régulièrement des titres via des plans 10b5-1. **Quel est le plan de succession**, et à quelle échéance envisagez-vous de séparer les fonctions ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le moat logiciel protège les revenus, pas les prix

EOS est réel, et le coût de changement pour une banque ou un hôpital l'est aussi. **Mais ce n'est pas là que se fait le chiffre d'affaires.** L'essentiel du volume vient de trois ou quatre entreprises qui emploient chacune des milliers d'ingénieurs réseau, exploitent déjà du SONiC, achètent du white box, et savent parfaitement ce que coûte un commutateur. Face à ces clients, EOS ne crée pas de pouvoir de fixation des prix — la **preuve est dans les comptes** : la marge brute recule de 220 pb en un an, précisément parce que le mix se déplace vers ces clients-là. **Le moat vaut là où il n'y a pas de volume ; là où il y a du volume, il ne tient pas les prix.**

### 2. La concentration des revenus est le dossier tout entier

**Microsoft ~26 % du chiffre d'affaires 2025, Meta plus de 10 %**, deux à trois clients au-delà de 50 %. Que se passe-t-il si cela change ? Trois scénarios, tous plausibles :
- **Internalisation** : Microsoft déploie déjà SONiC sur une partie de son parc. Chaque couche reprise en interne est un revenu qui ne revient pas
- **Arbitrage d'architecture** : un client bascule sur un rack intégré NVIDIA — la décision est prise par l'équipe compute, pas par l'équipe réseau
- **Pause capex** : deux trimestres de digestion suffisent, et Arista n'a **aucun contrat de long terme** pour amortir le choc, contrairement à un modèle d'infrastructure sous contrat

Les haussiers répondent : « Google et Oracle arrivent ». Ils ajoutent deux clients **exposés au même cycle** — c'est de la corrélation, pas de la diversification.

### 3. Le concurrent que les optimistes sous-estiment : Broadcom, pas NVIDIA

Tout le monde surveille Spectrum-X. Le danger plus profond est **en amont**. Arista déclare dans son propre 10-K dépendre principalement de Broadcom pour ses puces de commutation. Or Broadcom vend exactement le même silicium à Accton, Celestica, Edgecore et Quanta, qui livrent aux mêmes hyperscalers **30 à 40 % moins cher**. Arista n'est pas seulement en concurrence avec ses rivaux : **elle est en concurrence avec les clients de son propre fournisseur**, dont la marge dépend de la valeur qu'elle parvient à ajouter au-dessus d'une puce que tout le monde peut acheter.

### 4. La perte de la première place est un fait, pas une opinion

IDC, T1 2026 : **NVIDIA 21,5 % du commutateur Ethernet data center, Arista 20,7 %**. En deux ans, un nouvel entrant est passé de moins de 4 % à la première place. On peut objecter que le marché a crû de 61 % et qu'Arista a progressé de 37 % en valeur — c'est vrai, et c'est précisément le problème : **Arista croît moins vite que son marché**. Dans une phase d'expansion aussi violente, perdre de la part relative est le signal avancé de ce qui arrivera quand le marché se normalisera.

### 5. L'allocation du capital : le reproche inverse

Ici, la critique classique du short ne tient pas. Pas de méga-acquisition, pas de goodwill à déprécier, pas de dette. **Le reproche est symétrique** : 13,3 Mds$ dormants, pas de dividende, des rachats qui compensent tout juste la dilution, et **8,9 Mds$ d'engagements d'achat** pris au sommet du cycle. Si la demande fléchit, ces engagements deviennent des provisions pour engagements excédentaires et des dépréciations de stock. C'est le mode de défaillance classique de l'équipementier réseau — il n'a rien à voir avec le bilan, tout à voir avec **le pari sur le cycle**.

### 6. Ce que le cours doit supposer pour être justifié

À **204,79 $**, soit ~63x les bénéfices publiés et ~50x le BPA 2026, il faut admettre simultanément :
- une croissance supérieure à 25 % **au-delà de 2027**,
- une marge brute qui cesse de se comprimer autour de 63 %,
- aucune perte de compte majeur, ni internalisation significative,
- et un maintien du multiple à un niveau d'éditeur de logiciels.

**Si la croissance déçoit de 20 à 30 %** — soit +21 % au lieu de +30 % en 2027 — le BPA 2028 tombe vers 5,00-5,50 $ et le multiple se réévalue à 22-25x, cours implicite **110 à 135 $**, soit **−35 à −45 %**. Il n'y a besoin d'aucun scandale : juste d'une croissance normale.

### Le scénario unique le plus dommageable

**L'internalisation combinée.** Microsoft et Meta ont déjà les compétences ; NVIDIA fournit une alternative intégrée pour ceux qui n'internalisent pas ; les ODM couvrent le milieu de gamme. Si, sur une même fenêtre de 18 mois, un Titan internalise une couche entière et un autre bascule sur du rack intégré, Arista perd 20 à 30 % de son chiffre d'affaires **sans qu'aucun produit ne soit devenu mauvais**. Probabilité sur trois ans : **20 à 30 %** — non négligeable, et non tarifée dans un multiple de 50x.

### Conclusion short

Arista est une **entreprise d'ingénierie remarquable** : 50 % de marge opérationnelle, zéro dette, une allocation du capital irréprochable, un logiciel réellement supérieur. Ce n'est pas la thèse qui est attaquable, c'est **le prix payé pour elle**. Le titre se paie comme un éditeur de logiciels alors qu'il vend du matériel bâti sur le silicium d'un tiers, à quatre acheteurs qui savent tous le fabriquer eux-mêmes. **Le short n'est pas sur la qualité. Il est sur le multiple, et sur la certitude que le carnet actuel est reproductible.**`,
  },
];

export default { ...meta, modules };
