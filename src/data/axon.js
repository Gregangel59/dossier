// ============================================================
//  DOSSIER : Axon Enterprise, Inc. (AXON)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "axon",                     // identifiant d'URL : /dossier/axon
  ticker: "AXON",
  name: "Axon Enterprise, Inc.",
  exchange: "Nasdaq",
  sector: "Technologie de sécurité publique",
  initials: "AX",                   // affiché dans la pastille
  tagline: "Le système d'exploitation de la sécurité publique : TASER, caméras-piétons, cloud de preuves et IA, vendus par abonnement aux forces de l'ordre.",
  riskScore: 54,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "axon.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Axon Enterprise, fondée en 1993 sous le nom **TASER International** et rebaptisée Axon en 2017, est le leader mondial de la **technologie de sécurité publique**. Basée à Scottsdale (Arizona), l'entreprise a réalisé **2,8 Mds$ de chiffre d'affaires en 2025 (+33 %)**, sa quatrième année consécutive de croissance supérieure à 30 %, et affiche un rythme de **+35 % au T2 2026** (904 M$).

Le modèle a basculé d'un vendeur d'armes à impulsion électrique vers une **plateforme d'abonnement matériel + logiciel**. La mécanique est la suivante :

- **Placer le matériel** (TASER, caméras-piétons, caméras embarquées, drones) auprès des agences de police
- **Verrouiller le cloud** : toutes les données remontent dans Axon Evidence (ex-Evidence.com), plateforme de gestion de preuves numériques
- **Vendre des plans par abonnement** de 5 à 10 ans, avec paliers premium (Officer Safety Plans, AI Era Plan)
- **Monter en gamme** : chaque nouvelle brique logicielle (IA, temps réel, 911) augmente le revenu par agent sans changer le client

Résultat : **1,64 Md$ de revenus récurrents annuels (ARR)** au T2 2026, en hausse de 39 %, un **taux de rétention nette de 126 %** et un carnet de commandes contractualisé de **15,1 Mds$**, en progression de 41 % sur un an.

## Principaux produits et services

**Connected Devices (matériel — environ 56 % du CA)** :
- **TASER 10** : arme à impulsion électrique de dernière génération, plus de 1 million d'unités vendues cumulées
- **Axon Body 4 / Body Mini** : caméras-piétons ; **Axon Fleet** : caméras embarquées
- **Drones et contre-drone** : Dedrone (détection/neutralisation de drones), Sky-Hero (robots au sol), partenariat Skydio
- **Axon Outpost / Lightpost** : caméras fixes de lecture de plaques (ALPR), lancées en 2025
- **VR training** : formation en réalité virtuelle

**Software & Services (environ 44 % du CA, 398 M$ au T2 2026, +36 %)** :
- **Axon Evidence** : stockage et gestion des preuves numériques (le cœur historique du cloud)
- **AI Era Plan** : Draft One (rédaction automatique de rapports), Auto-Transcribe, Real-Time Translation, Policy Chat, Axon Assistant — revenus en hausse de près de **700 %** sur un an
- **Axon Records / Standards** : logiciels de dossiers et de conformité
- **Axon Fusus** : centre de commandement temps réel (RTCC)
- **Axon 911** : prise d'appel d'urgence cloud, issue des acquisitions Prepared et Carbyne

## Clients, fournisseurs, concurrents

**Clients** : plus de **17 000 agences fédérales, d'État et locales** aux États-Unis, présence dans plus de **85 pays**. Extension récente vers les administrations pénitentiaires, les agences fédérales (dont l'ICE), la défense et le secteur privé (data centers, campus d'entreprise, sécurité événementielle). **Aucun client ne dépasse 10 % du chiffre d'affaires**.

**Fournisseurs** : fabrication et assemblage final en Arizona ; dépendance aux composants électroniques (mémoire, capteurs), aux fournisseurs cloud (Microsoft Azure) et à des partenaires matériels (Ubicquia pour Lightpost, Skydio pour les drones).

**Concurrents** : **Motorola Solutions** (le rival systémique : radio, vidéo, CommandCentral, WatchGuard, acquisition de D-Fend dans le contre-drone), **Flock Safety** (non coté, ALPR et drones), **Cellebrite** (forensique numérique), **Digital Ally**, **Panasonic i-PRO**, **Wolfcom**, **Verkada**, **Genetec**, **Rekor**, **Mark43** (CAD cloud natif), **Auterion**, **BRINC**.

## Modalités contractuelles

C'est le point clé du modèle. Les contrats sont des **abonnements pluriannuels de 5 à 10 ans**, souvent en **source unique (sole source)** parce que le matériel, le cloud et les logiciels forment un ensemble intégré. Ils incluent des **rafraîchissements matériels programmés**, des **escalades tarifaires annuelles** et un paiement étalé.

Deux conséquences directes :
1. La **visibilité est exceptionnelle** — 15,1 Mds$ de commandes déjà contractualisées, soit plus de quatre années de chiffre d'affaires courant
2. Le **cash arrive plus tard que le revenu comptable** — Axon finance le matériel en amont, ce qui explique la lourdeur du besoin en fonds de roulement et la faiblesse du free cash-flow au premier semestre

> **Note de prudence** : Axon a longtemps été **peu rentable en normes comptables GAAP** — perte opérationnelle de 62 M$ en 2025, marge nette de 4,5 % — en raison d'une rémunération en actions de 590 à 620 M$ attendue en 2026. Le résultat opérationnel GAAP est toutefois **redevenu positif au premier semestre 2026 (+76 M$)**, après +29,2 M$ au T1 et +46,8 M$ au T2. Toute lecture de la valorisation doit passer par ce filtre.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Axon dans la chaîne de valeur

Axon occupe une position d'**intégrateur vertical** rare : il conçoit et assemble son propre matériel, exploite sa propre couche logicielle et vend en direct à l'utilisateur final. Peu d'intermédiaires captent de la valeur entre l'usine et le commissariat — c'est une des explications de la marge brute ajustée de **62,9 %** atteinte au T2 2026.

### Amont — Composants et infrastructure

**Électronique et composants critiques** :
- Mémoire (NAND, DRAM) — **poste de coût en inflation marquée en 2026**, explicitement cité par la direction comme un vent contraire sur la marge du T3
- Capteurs d'image, batteries, semi-conducteurs, boîtiers ruggedisés
- Fournisseurs asiatiques exposés aux **droits de douane américains** (un remboursement de tarifs a d'ailleurs gonflé l'EBITDA du T2 2026)

**Infrastructure cloud** :
- **Microsoft Azure** — hébergement d'Axon Evidence, intégration de l'IA générative pour la synthèse de preuves (février 2026)
- Conformité **CJIS** (FBI Criminal Justice Information Services) — barrière technique et réglementaire majeure

**Partenaires technologiques** :
- **Ubicquia** (rétrofit de lampadaires pour Axon Lightpost), **Skydio** (drones), **Ring/Amazon** (partenariat caméras résidentielles)

---

### Axon — Conception, assemblage et distribution

**Fabrication** : assemblage final et tests dans les installations d'Arizona, avec un équipement détenu en propre. La direction a choisi de porter un **stock « durable » élevé** — des produits à cycle de vie de 10 à 15 ans — pour se protéger de l'instabilité géopolitique et des flambées de prix composants. Ce choix pèse mécaniquement sur le cash.

**Distribution** : ventes **majoritairement directes**, complétées par des distributeurs et revendeurs tiers à l'international. La force de vente et la relation client sont explicitement présentées comme un avantage stratégique dans le 10-K.

**Couche logicielle** : Axon Evidence, AI Era Plan, Fusus, Axon 911 — développés en interne ou acquis (Fusus 2024, Dedrone 2024, Sky-Hero, Prepared fin 2025, Carbyne février 2026 pour 625 M$).

---

### Aval — Clients finaux

**Police d'État et locale (cœur historique)** : plus de 17 000 agences américaines ; part de marché estimée à **80-85 %** sur les caméras-piétons des grandes villes. Contrats récents : San Bernardino County (74,5 M$), Denver (27 M$), Cook County (11,1 M$).

**Fédéral et corrections** : montée en puissance, dont des marchés liés à l'immigration — source de croissance mais aussi de **controverse politique**.

**International** : plus de 85 pays ; les prises de commandes internationales ont **triplé** sur un an au T2 2026.

**Entreprises et infrastructures critiques** : data centers, campus d'entreprise, sites sensibles — segment tiré par le contre-drone (Dedrone a dépassé **100 M$ de CA trimestriel** au T2 2026).

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                  AXON                        AVAL
Mémoire, capteurs   →  Assemblage Arizona      →   17 000+ agences US
Batteries, boîtiers    Axon Evidence (cloud)       85+ pays
Microsoft Azure        AI Era Plan / Fusus         Fédéral, corrections
Ubicquia, Skydio       Axon 911 (Carbyne)          Entreprises, data centers
(droits de douane      Vente directe               (contrats 5-10 ans,
 + coût mémoire)       + revendeurs intl.           source unique)
\`\`\`

**Le point de fragilité** : Axon contrôle presque toute la chaîne sauf **les composants électroniques**. Une flambée durable du prix de la mémoire ou un durcissement tarifaire frappe directement la marge du segment matériel — précisément le segment qui sert de cheval de Troie pour placer le logiciel.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

Depuis le premier trimestre 2025, Axon publie **deux segments** (contre TASER / Software & Sensors auparavant) : **Connected Devices** (matériel) et **Software & Services** (logiciel et services).

### Structure au T2 2026 (CA total 904 M$, +35 %)

| Segment | CA T2 2026 | Croissance a/a | Marge brute ajustée |
|---|---|---|---|
| Software & Services | ~398 M$ | +36 % | élevée (~75-78 %) |
| Connected Devices | ~506 M$ | +34,6 % | faible (~49-50 %) |
| **Total** | **904,4 M$** | **+35 %** | **62,9 % (ajustée)** |

**Point clé** : le mix ne bascule que lentement vers le logiciel. Software & Services représentait 43 % du CA en 2025 et reste autour de 44 % au T2 2026 — la croissance matérielle est trop forte pour que la bascule s'accélère. C'est une bonne nouvelle commerciale et une **contrainte sur la marge**.

---

### Dynamiques internes — ce qui bouge vraiment

| Ligne | Performance T2 2026 | Lecture |
|---|---|---|
| Revenus IA (AI Era Plan) | **+~700 %** | Petite base, mais adoption virale |
| Platform Solutions | 150 M$, **+123 %** | Porté par le contre-drone |
| Dedrone (contre-drone) | **>100 M$** trimestriel, +300 % | Nouveau moteur autonome |
| Logiciel hors Axon Evidence | environ 1/3 du logiciel, **+70 %** | Diversification réussie |
| ARR | **1,639 Md$, +39 %** | Ré-accélération en 2026 |
| Rétention nette (NRR) | **126 %** | Expansion chez les clients existants |

**Ce qu'il faut retenir** : la croissance n'est plus portée par un seul produit. Le TASER 10 a signé son plus haut volume trimestriel historique, mais le contre-drone, l'IA et Axon 911 créent trois nouveaux relais indépendants du cycle des caméras-piétons.

---

### Répartition géographique

Historiquement, la quasi-totalité du CA provenait des **États-Unis** (aucun pays étranger ne dépassait 10 % du CA). 2026 marque un basculement net : **l'international a plus que doublé au T1 2026 et représente désormais environ 20 % du chiffre d'affaires**. Au T2, les prises de commandes internationales et entreprises ont chacune **approximativement triplé** sur un an, et trois des cinq plus gros contrats AI Era Plan du trimestre venaient de clients internationaux.

Axon a d'ailleurs commencé à publier des **prises de commandes normalisées sur 5 ans** — parce que les contrats internationaux et entreprises sont plus courts que ceux de la police américaine, ce qui rend la comparaison brute trompeuse. Sur cette base normalisée, la croissance des nouvelles commandes dépasse **30 %**.

---

### Profil de marge et rentabilité

- **Marge brute ajustée** : 62,9 % au T2 2026, en amélioration séquentielle de 130 pb, mais **diluée par la montée en charge rapide des nouvelles activités** (contre-drone, services professionnels)
- **Marge d'EBITDA ajusté** : 26,8 % au T2 2026 (242 M$), aidée par un remboursement de droits de douane ; objectif annuel maintenu à **environ 25,5 %**
- **Marge opérationnelle GAAP** : négative en 2025 (perte de 62 M$) mais **redevenue positive au S1 2026** : +76 M$, dont +46,8 M$ au T2 contre −1,0 M$ un an plus tôt. La rémunération en actions absorbe encore l'essentiel du levier, mais l'inflexion est réelle
- **Marge nette 2025** : 4,5 % (125 M$) ; **3,3 % au T2 2026** (29,4 M$)

**Lecture** : Axon dégage une rentabilité solide en mesures ajustées et quasi nulle en GAAP. L'écart, c'est la rémunération en actions — 590 à 620 M$ attendus en 2026, soit environ **16 % du chiffre d'affaires**. Toute la thèse de valorisation dépend de la normalisation de ce poste.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. La chaîne de garde numérique — le moat le plus solide
Une preuve vidéo doit être admissible au tribunal. Cela exige une **chaîne de garde inviolable, auditable et certifiée CJIS**. Axon Evidence est le standard de fait depuis plus de dix ans : les procureurs, les tribunaux et les services d'affaires internes ont bâti leurs procédures autour. Changer de fournisseur signifie **migrer des années d'archives judiciaires** et refaire valider les procédures. Le coût de sortie n'est pas économique, il est **juridique et procédural**.

### 2. Intégration matériel-logiciel — un enchaînement que personne ne reproduit intégralement
Le TASER déclenche automatiquement la caméra-piéton, la caméra alimente le cloud, le cloud alimente Draft One qui rédige le rapport, le rapport alimente Axon Records. **Chaque brique augmente la valeur des autres.** Motorola détient la radio et la vidéo urbaine mais pas l'arme ni la preuve ; Flock détient le lecteur de plaques mais pas l'équipement de l'agent. Axon est le seul à tenir tous les maillons.

### 3. Verrouillage contractuel long — la visibilité comme actif
Les contrats de 5 à 10 ans, souvent en source unique, avec rafraîchissement matériel intégré et escalade tarifaire, produisent **15,1 Mds$ de commandes déjà signées** et une rétention nette de **126 %**. Autrement dit : sans gagner un seul nouveau client, la base installée grossit de 26 % par an. C'est un profil de logiciel d'entreprise, appliqué à un client public.

### 4. Position dominante installée — 80 à 85 % des caméras-piétons
Sur les grandes villes américaines, la part de marché estimée d'Axon en caméras-piétons et TASER atteint **80-85 %**. Cette base d'agents équipés est la rampe de lancement de chaque nouveau produit : quand Axon lance l'IA, le contre-drone ou le 911, il vend à des clients qui le connaissent déjà et dont le budget lui est déjà partiellement alloué.

### 5. La marque et le vocabulaire — « taser » est devenu un verbe
Axon possède une **antonomase**, ce que très peu d'entreprises réussissent. Cela ne se traduit pas directement en marge, mais cela structure la perception : pour un élu municipal, acheter Axon est le choix par défaut, donc le choix défendable.

### 6. Ce qui n'est PAS un moat — la technologie IA elle-même
Draft One, la traduction temps réel, la transcription : ce sont des applications de modèles de langage tiers. **Aucune barrière technologique propre.** Le moat n'est pas l'IA, c'est **l'accès aux données et le canal de distribution**. Il faut être lucide : Axon vend de l'IA parce qu'il a déjà les caméras et le cloud, pas parce que son IA est supérieure.

## Positionnement vs concurrence

| Critère | Axon | Motorola Solutions | Flock Safety |
|---|---|---|---|
| Caméras-piétons / TASER | Dominant (80-85 %) | Challenger (WatchGuard, VB400) | Absent |
| Cloud de preuves | Standard de fait | CommandCentral | Limité |
| Radio critique (LMR) | Absent | Quasi-monopole | Absent |
| ALPR / caméras fixes | Entrant (Outpost, Lightpost) | Vigilant | Leader historique |
| Contre-drone | Dedrone (>100 M$/trim.) | D-Fend (acquis 1,5 Md$) | Drones DFR |
| Rentabilité GAAP | Quasi nulle | Solide (marge opér. ~28 %) | Non coté |
| Croissance | +32 à 34 % attendu 2026 | ~10-13 % | Forte mais contestée |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Très élevé** — source unique, escalades tarifaires contractuelles, coût de sortie prohibitif. Les conseils municipaux le disent explicitement : « sole-source pricing creates vendor lock-in » revient dans les délibérations
- **Vis-à-vis des fournisseurs** : **Modéré** — Axon subit les prix de la mémoire et les droits de douane sans grande capacité de report immédiat
- **Vis-à-vis du régulateur et de l'opinion** : **Faible et en dégradation** — les controverses sur Draft One, l'ALPR et les contrats fédéraux liés à l'immigration créent un risque de contestation locale que le contrat commercial ne protège pas`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Technologie de sécurité publique (août 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Axon Enterprise** | **AXON US** | **~49 Mds$** | **~15,5x** | **n.s. (EBIT négatif)** | **~254x (TTM) · ~50x 2026e** | **0 %** | **~10-12 %** |
| Motorola Solutions | MSI US | ~70 Mds$ | ~6,3x | ~23x | ~25-36x | ~0,9 % | n.s. (fonds propres négatifs) |
| Palantir | PLTR US | ~418 Mds$ | très élevé | très élevé | >200x | 0 % | ~5-8 % |
| Cellebrite DI | CLBT US | ~2,7 Mds$ | ~5x | ~30x | ~40-50x | 0 % | ~8-10 % |
| Flock Safety | Non coté | n.d. | n.d. | n.d. | n.d. | n.d. | n.d. |

*Ordres de grandeur au 17 août 2026, sur la base des cours et publications disponibles. Le ROE 5 ans est un calcul approché et non un chiffre publié — à recouper sur les filings SEC directs.*

---

### Analyse comparative

**Motorola Solutions — le rival systémique**
MSI est environ **4 fois plus gros qu'Axon en chiffre d'affaires** (environ 12 Mds$) et **beaucoup plus rentable** (marge opérationnelle proche de 28 %, marge brute ~52 %, résultat net ~2,7 Mds$). Sa forteresse est la **radio critique (LMR)**, un quasi-monopole où Axon n'existe pas. Sur les caméras-piétons et le cloud de preuves, MSI est en revanche un challenger qui perd régulièrement les appels d'offres face à l'écosystème intégré d'Axon.

Le conflit se déplace : MSI a racheté **D-Fend Solutions pour 1,5 Md$** dans le contre-drone, précisément là où Dedrone vient de dépasser 100 M$ trimestriels. La collision frontale arrive.

**Le contraste de valorisation est brutal** : MSI se paie ~25-36x les bénéfices avec 10-13 % de croissance ; Axon se paie ~50x les bénéfices 2026 estimés avec 32-34 % de croissance. En PEG, l'écart se resserre nettement — c'est l'argument central des haussiers.

**Flock Safety — le concurrent le plus sous-estimé (et le plus instructif)**
Flock n'est pas coté, mais c'est le rival le plus intéressant. Axon en était partenaire, puis investisseur, avant de rompre début 2025 et de lancer **Outpost et Lightpost** en concurrence directe. En 2026, Flock a subi une crise de réputation majeure sur la vie privée : **plus de 50 juridictions ont résilié ou suspendu leur contrat**, et Flock a annoncé en août 2026 réduire sa rétention de données par défaut de 30 à 7 jours en admettant s'être trompé.

Axon récupère des contrats (Denver, Syracuse, Richmond). **Mais la leçon est double** : le marché de la surveillance urbaine est politiquement volatil, et ce qui est arrivé à Flock peut arriver à Axon, qui agrège bien plus de données encore.

**Cellebrite — le voisin qui montre la fragilité du secteur**
Cellebrite opère sur la forensique numérique, en aval d'Axon. Son cours a perdu environ 34 % sur un an et le titre s'échange autour de 10,4 $ après une révision d'objectifs et un changement de directeur général en août 2026. C'est un rappel utile : les fournisseurs technologiques des forces de l'ordre ne bénéficient d'aucune immunité de valorisation.

---

### Le ratio qui compte : EV/ARR et rétention
Les multiples de bénéfices sont peu informatifs sur Axon tant que la rémunération en actions écrase le résultat GAAP. Les deux chiffres à suivre sont : **l'EV rapportée à l'ARR** (environ 50 Mds$ pour 1,64 Md$ d'ARR, soit ~31x) et **la rétention nette (126 %)**. Un multiple d'ARR à 30x n'est soutenable que si la rétention reste supérieure à 120 % et si l'EBITDA ajusté converge vers l'objectif de 28 % en 2028.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 2026 (publiés le 5 août 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | **904,4 M$** | 668,5 M$ | ~876 M$ | **Dépassé (+3,2 %)** |
| Croissance a/a | **+35 %** | +33 % | ~+30 % | **Supérieur** |
| Résultat net GAAP | 29,4 M$ | 36,1 M$ | — | **En recul** |
| BPA dilué GAAP | 0,36 $ | 0,44 $ | — | **En recul de 18 %** |
| EBITDA ajusté | **242 M$** | ~172 M$ | — | **+40 %** |
| Marge EBITDA aj. | **26,8 %** | ~25,7 % | — | En amélioration |

**Lecture** : dépassement net sur le chiffre d'affaires, **dixième trimestre consécutif de croissance supérieure à 30 %**. Mais le résultat net GAAP **baisse en valeur absolue** alors que le CA progresse de 35 % — c'est toute la tension du dossier.

---

### Facteurs clés par segment

- **Software & Services** : 398 M$, **+36 %**. Environ un tiers provient d'offres autres qu'Axon Evidence, et ce tiers croît de **70 %**. Les revenus IA (AI Era Plan) progressent de près de **700 %**
- **Connected Devices** : **+34,6 %**, avec le plus haut volume trimestriel historique du TASER 10
- **Platform Solutions** : 150 M$, **+123 %**, tiré par le contre-drone
- **Dedrone** : franchit les **100 M$ de CA trimestriel**, +300 % — demande réelle sur les data centers, campus d'entreprise et même résidences de dirigeants
- **International et entreprises** : prises de commandes **approximativement triplées** chacune

---

### Indicateurs avancés

- **Commandes contractualisées futures** : **15,1 Mds$**, +41 % a/a
- **ARR** : **1,639 Md$**, +39 %
- **Rétention nette (NRR)** : **126 %**, en accélération depuis 125 % fin 2025
- Environ **30 % seulement** des clients sont sur un plan premium — le gisement d'expansion reste largement inexploité

---

### Évolution des marges

- **Marge brute ajustée** : 62,9 %, **+130 pb en séquentiel** mais sous pression annuelle
- Deux forces opposées : le mix logiciel tire vers le haut, la montée en charge rapide du contre-drone et des services professionnels (à marge plus faible) tire vers le bas
- Le T2 a bénéficié d'un **remboursement de droits de douane** non récurrent
- La direction avertit explicitement : **le T3 encaissera la hausse du coût mémoire sans le bénéfice tarifaire**, avant un rattrapage au T4

---

### Perspectives et guidance

- **Croissance 2026 relevée à 32-34 %** (contre 30-32 % auparavant), soit **3,67 à 3,73 Mds$** de chiffre d'affaires
- **Marge d'EBITDA ajusté maintenue à environ 25,5 %** — la hausse des coûts composants absorbe le levier du chiffre d'affaires
- **Rémunération en actions 2026** : 590 à 620 M$, dont environ **280 M$ liés au plan XSP et au CEO Performance Award** — montant relevé de 230 à 280 M$ entre les publications du T1 et du T2 2026
- **Capex 2026** : 160 à 190 M$ ; **free cash-flow visé : 450 M$** sur l'année, concentré au T4
- **Objectifs 2028 réaffirmés** : **6 Mds$ de CA**, **28 % de marge d'EBITDA ajusté**, conversion FCF à 60 % de l'EBITDA ajusté, dilution annuelle inférieure à 2,5 %

---

### Signaux d'alerte bilan

- **Free cash-flow négatif de 1 M$** au T2 2026 (contre une sortie bien plus lourde un an plus tôt) — l'investissement en stocks continue de peser
- **Trésorerie et placements** : 685 M$ ; **obligations senior** : 1,8 Md$ → **dette nette de 1,1 Md$**, en hausse de 46 M$ en séquentiel
- **Programme ATM** : environ 0,2 million d'actions vendues au T2 pour 100,3 M$ nets, avec environ 1,0 million d'actions encore autorisées — **dilution continue**
- **Goodwill** en hausse à chaque acquisition (Fusus, Dedrone, Prepared, Carbyne) — allocation du prix d'acquisition de Carbyne non finalisée avant le T1 2027

---

### Réaction du marché

Le titre a **chuté d'environ 6,5 % en séance après-Bourse** le 5 août malgré le double dépassement — les investisseurs ont sanctionné la pression annoncée sur les marges du T3 et un multiple déjà tendu. Puis le marché s'est ravisé : le titre a **repris près de 18 %** dans les jours suivants, revenant autour de **604 $** au 17 août 2026.

**Ce que cela révèle** : le cours n'est plus piloté par la croissance du chiffre d'affaires — qui est acquise et anticipée — mais par la **crédibilité de la trajectoire de marge**. Le marché achète la guidance relevée, mais avec une nervosité extrême sur chaque point de base de marge brute.

---

### L'anomalie à retenir : un résultat GAAP erratique

| Trimestre | CA | Croissance | Résultat net GAAP | Marge nette |
|---|---|---|---|---|
| T3 2025 | 710,6 M$ | +31 % | **−2,2 M$** | −0,3 % |
| T4 2025 | 797 M$ | +39 % | **+3,0 M$** | +0,4 % |
| T1 2026 | 807 M$ | +34 % | **+169 M$** | +21 % |
| T2 2026 | 904,4 M$ | +35 % | **+29,4 M$** | +3,3 % |

Quatre trimestres, une croissance remarquablement régulière entre 31 et 39 %, et un résultat net qui oscille de −2 M$ à +169 M$. Le T1 2026 est particulièrement révélateur : le **résultat net GAAP (169 M$) dépasse le résultat non-GAAP (133 M$)**, grâce à des gains hors exploitation sur placements. Autrement dit, le bénéfice comptable d'Axon dépend encore largement de la valorisation de son portefeuille financier et du calendrier de sa rémunération en actions. **C'est la raison technique pour laquelle aucun multiple de bénéfice net n'est exploitable tel quel sur ce dossier.**

---

### Deux inflexions à ne pas manquer sur 2026

**1. Le résultat opérationnel GAAP est repassé dans le vert.** C'est le fait le plus sous-commenté du semestre : +29,2 M$ au T1 et **+46,8 M$ au T2 2026**, contre une perte de 1,0 M$ un an plus tôt, soit **+76,0 M$ sur le semestre** après une perte de 62 M$ sur l'exercice 2025. Le levier opérationnel existe donc bel et bien — il était simplement masqué par la charge de rémunération en actions, désormais stable en valeur absolue (278,7 M$ au S1 2026 contre 279,5 M$ au S1 2025) alors que le chiffre d'affaires progresse de 34,6 %.

**2. La faiblesse de contrôle interne a été levée.** Dans son 10-Q du 30 juin 2026, la direction indique avoir achevé au deuxième trimestre les tests des contrôles mis en place sur la comptabilisation du revenu et conclut que **la faiblesse significative est remédiée au 30 juin 2026**. Le sujet, ouvert depuis l'exercice 2024, est refermé (cf. Red Flags).

**Le contrepoint** : le **BPA dilué non-GAAP recule** malgré tout — 3,50 $ au S1 2026 contre 3,65 $ au S1 2025 — parce que l'exercice précédent bénéficiait d'un avantage fiscal de 75 M$. Sur le seul T2, 1,88 $ contre 2,18 $. La croissance du chiffre d'affaires ne se transmet donc toujours pas au bénéfice par action.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — évolution 2024 à 2026

**2024 — Ton de conquête**. L'année du basculement : croissance supérieure à 30 % pour la troisième année, marge d'EBITDA ajusté de 25 % atteinte **un an en avance**. Le discours est celui d'une entreprise qui dépasse ses propres objectifs.

**2025 — Ton d'ambition assumée, premiers accrocs**. Le management martèle « l'opérateur de la sécurité publique ». Mais le T3 2025 déçoit franchement (BPA de 1,17 $, en dessous du consensus de plus de 20 %, perte nette GAAP) et le titre décroche de plus de 17 %. Le discours ne change pas ; la crédibilité, si.

**2026 — Ton de confiance méthodique, avec des avertissements explicites**. Rick Smith au T2 2026 : « nous avons eu un nouveau trimestre record… comme 39 %, wow », et son cadrage stratégique : **« dans la sécurité publique, Axon détient chaque maillon de la chaîne »**. Josh Isner et Brittany Bagley, eux, assument publiquement les vents contraires — coût mémoire, absence de remboursement tarifaire au T3, dilution de mix liée à la montée en charge des nouvelles activités.

**Ce changement est important** : le management est passé d'un discours purement offensif à un discours **offensif sur le haut du compte de résultat, prudent sur le bas**. C'est une maturation, pas un recul.

---

### Priorités répétées du management

**1. L'IA comme nécessité, plus comme option** — Selon la direction, le débat client a basculé : les agences ne demandent plus si l'IA est valide, mais à quelle vitesse la déployer. Avec 65 % des services de police déclarant des pénuries d'effectifs, Draft One (qui automatise une partie des 40 % de temps d'agent consacré à la paperasse) est vendu comme **nécessité budgétaire**, pas comme gadget.

**2. Les nouveaux marchés — international, entreprises, fédéral** — Prises de commandes internationales et entreprises **triplées** chacune. Le management a même changé sa métrique de reporting (prises de commandes normalisées sur 5 ans) pour rendre ces marchés comparables : signe qu'ils comptent désormais dans la thèse.

**3. La discipline de marge, sans engagement de bénéfice net** — L'objectif de 25,5 % d'EBITDA ajusté est maintenu malgré le relèvement de la croissance. Mais **aucun calendrier ferme de rentabilité GAAP** n'est communiqué. La direction s'engage en revanche sur la **dilution : moins de 2,5 % par an** à mesure que les plans de rémunération en actions se normalisent.

**4. Le stock comme choix stratégique** — Bagley justifie explicitement le portage de stocks « durables » : instabilité géopolitique, produits à cycle de vie de 10-15 ans. C'est une décision assumée qui coûte du cash à court terme et qui a largement protégé la guidance 2026 des flambées de prix mémoire.

**5. La confidentialité comme argument commercial** — Face à la crise Flock, le management met en avant son Equity and Ethics Advisory Council et des outils de détection de comportements de recherche anormaux. **Des agences migrent vers Axon explicitement pour ses contrôles.** Le management a transformé une contrainte réglementaire en argument de vente.

---

### Analyse du sentiment

- **Confiance** : élevée et documentée. Contrairement à une entreprise purement narrative, chaque affirmation s'adosse à un chiffre vérifiable (backlog, NRR, ARR)
- **Transparence** : bonne sur les vents contraires opérationnels, **plus faible sur le chemin vers le bénéfice GAAP** — le management guide en EBITDA ajusté et refuse explicitement de réconcilier vers le résultat net, invoquant la difficulté de prévoir la fiscalité et les gains sur placements
- **Cohérence** : forte. Les objectifs 2028 (6 Mds$, 28 %) sont réaffirmés à chaque publication depuis février 2026

> **À lire entre les lignes** : le management vend une **trajectoire de marge à horizon 2028**, pas une rentabilité présente. Tant que la croissance dépasse 30 % et que le backlog gonfle, ce contrat implicite avec le marché tient. Le jour où la croissance passe sous 25 % sans que la marge GAAP se soit redressée, il n'y aura plus rien pour absorber le choc de valorisation.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Rick Smith (Patrick W. Smith) — Fondateur et Directeur Général

**Bilan** : c'est l'un des track records de création de valeur les plus spectaculaires du marché américain. Smith a fondé l'entreprise en 1993 après le décès par arme à feu de deux amis de lycée, avec une mission déclarée : **rendre la balle obsolète**. Il a réussi deux pivots complets — de l'arme à impulsion électrique vers les caméras-piétons (2017), puis des caméras vers le logiciel et l'IA (2020-2026).

Chiffres à l'appui : CA multiplié par plus de cinq depuis 2020, quatre années consécutives de croissance supérieure à 30 %, ARR passé de zéro à 1,64 Md$, part de marché de 80-85 % sur son cœur.

**Ancienneté et alignement** : au poste depuis **1993**, soit plus de 30 ans. Son alignement est extrême et volontairement construit : Smith perçoit un **salaire au niveau du salaire minimum** (31 201 $ en 2023) et la quasi-totalité de sa rémunération est en actions conditionnelles.

**La rémunération — le point le plus discuté** : Smith a été le **dirigeant le mieux payé du S&P 500 en 2024**, avec un package déclaré de **164,5 M$** (dont 99,6 % en actions), et le seul du S&P 500 au-dessus de 100 M$. Il s'agit du **2024 CEO Performance Award** : 679 102 XSU conditionnées à des jalons de cours de Bourse et de performance opérationnelle sur 2024-2030. Axon insiste sur le fait que ce montant représente la **valeur potentielle si tous les jalons sont atteints**, pas une rémunération encaissée.

Le plan est explicitement modelé sur celui d'Elon Musk chez Tesla. Smith le justifie ainsi : le programme crée « une ambiance de startup », et il se sent mieux de pouvoir gagner beaucoup **s'il peut aussi gagner zéro**.

---

### Équipe dirigeante

- **Josh Isner — Président** : entré chez Axon en 2009 par le programme de développement du leadership, passé par le terrain, directeur commercial puis directeur des opérations, président depuis 2023. Diplômé de Harvard. Rémunération 2024 déclarée d'environ 118 M$, qu'il présente comme la reconnaissance de sept années de performance. C'est **l'exécutant** du binôme
- **Brittany Bagley — Directrice des opérations et Directrice financière** : arrivée en 2022 après avoir été directrice financière de Sonos et *managing director* chez KKR. Profil financier de haut niveau, en charge de la chaîne d'approvisionnement et du fonds de roulement — un choix cohérent avec les enjeux actuels d'Axon
- **Jeff Kunins** (produit et technologie), **Cameron Brooks** (revenus), **Isaiah Fields** (juridique)

---

### Allocation du capital

| Décision | Montant | Lecture |
|---|---|---|
| Fusus (RTCC) | fév. 2024 | Entrée dans le centre de commandement temps réel |
| Dedrone (contre-drone) | 2024 | **Le meilleur deal à ce jour** : >100 M$ de CA trimestriel en 2026 |
| Sky-Hero (robots au sol) | 2024 | Extension matérielle |
| Prepared | ~800 M$ (fin 2025) | Brique 911 |
| Carbyne | **625 M$** (fév. 2026) | Socle d'Axon 911 |
| Rachats d'actions | **Aucun** | Le capital finance la croissance et l'ATM dilue |

**Tendance** : allocation **agressive, en M&A logiciel adjacent**, financée par dette (1,8 Md$ d'obligations senior) et par émission d'actions (programme ATM, 100,3 M$ nets au T2 2026). Le ROIC est structurellement faible tant que le résultat opérationnel GAAP est négatif — **la qualité de cette allocation ne pourra être jugée qu'a posteriori**, sur la capacité de Dedrone, Fusus et Axon 911 à générer un EBITDA propre.

---

### Signaux d'alerte

- **Rémunération hors norme** : le package de 164,5 M$ a été validé par les actionnaires, mais il crée une **incitation forte au cours de Bourse** plutôt qu'à la rentabilité comptable. Environ 280 M$ de charge annuelle liée au seul XSP et au CEO Award en 2026, en hausse de 50 M$ par rapport à l'estimation de mai
- **Ventes d'initiés** : les dirigeants ont collectivement vendu environ **28 M$ de plus qu'ils n'ont acheté** sur douze mois. Bagley et Isner ont cédé des blocs significatifs en 2025 aux alentours de 610-775 $
- **Faiblesse significative de contrôle interne** sur la comptabilisation du revenu : identifiée sur l'exercice 2024, elle a été **déclarée remédiée au 30 juin 2026**. Le point est refermé, mais il aura fallu deux exercices complets et un restatement intermédiaire pour y parvenir (cf. Red Flags)
- **Litige Carbyne** : un actionnaire minoritaire (Intercap) conteste les termes de l'opération, alléguant que les fondateurs auraient perçu environ 20 M$ de primes en numéraire et plus de 40 M$ en actions Axon dans un conflit d'intérêts
- **Risque clé homme** : Axon **est** Rick Smith, sa mission et sa capacité à faire adopter chaque nouveau produit. Aucun plan de succession n'est communiqué publiquement
- **Type de dirigeant** : **fondateur-visionnaire de long terme**, mission-driven, avec un talent avéré pour le pivot produit. À ce stade — expansion multi-marchés — c'est l'archétype pertinent, mais il concentre le risque sur une seule personne`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours (2021-2026)

### Contexte
Le titre est **structurellement volatil** (beta ~1,4, volatilité réalisée bien supérieure) et se comporte comme une valeur de croissance logicielle : il réagit au **multiple** avant de réagir aux résultats. Fourchette sur 52 semaines : **339,01 $ – 794,29 $**, soit un écart de 134 % entre le point bas et le point haut.

---

### Hausses significatives

**2021-2023 — La reconnaissance du modèle SaaS**. Le marché cesse de valoriser Axon comme un fabricant d'armes pour le valoriser comme un éditeur de logiciel. L'ARR, la rétention nette et le backlog deviennent les métriques suivies. Le titre est **intégré au S&P 500 en 2023** — flux indiciels mécaniques à l'appui.

**2024 — L'année de l'accélération**. Troisième année consécutive à plus de 30 % de croissance, marge d'EBITDA ajusté de 25 % atteinte avec un an d'avance, résultat net record de 377 M$. Le titre entre dans le **95e centile des sociétés du S&P 500** sur les rendements actionnaires à 1, 3, 5 et 10 ans.

**Été 2025 — Sommet historique**. Le cours de clôture atteint son plus haut absolu à **870,97 $ le 7 août 2025**, portant la capitalisation au-delà de 60 Mds$.

**Août 2026 — Le rebond post-publication**. Après une chute de 6,5 % en séance après-Bourse le 5 août, le titre reprend **près de 18 %** dans la quinzaine suivante, ramené autour de 604 $. Le déclencheur : le relèvement de la guidance à 32-34 % et le backlog à 15,1 Mds$.

---

### Baisses significatives

**Novembre 2025 — Le trimestre qui casse le récit**. Le BPA du T3 2025 ressort à 1,17 $, **plus de 20 % en dessous du consensus**, avec une perte nette GAAP. Le titre perd plus de **17 %** en une séance. C'est le moment de bascule : le marché arrête de payer uniquement pour la croissance.

**2025 dans son ensemble — Première année de baisse depuis 2015**. Le titre recule d'environ **4 % sur l'année**, brisant une série de neuf années de hausse, alors que le S&P 500 progresse d'environ 16 %.

**Janvier-février 2026 — La purge de valorisation**. Deux séances consécutives de baisse marquée fin janvier (-10 % puis -7 %) sur volumes lourds. Le titre touche environ **483 $ début février 2026**, avec un P/E affiché supérieur à 250x. La baisse cumulée depuis le sommet d'août 2025 atteint environ **43 %**.

**Printemps 2026 — Le creux**. Le titre inscrit son plus bas 52 semaines à **339,01 $** et affiche environ **-25 % depuis le début de l'année** à la mi-juin, malgré des fondamentaux opérationnels intacts. Le marché déclasse le multiple, pas l'entreprise.

---

### Facteurs structurels

- **Sensibilité au multiple avant tout** : à 50x les bénéfices 2026 estimés, une révision de deux tours de multiple pèse plus que deux trimestres de croissance
- **Aucun dividende, aucun rachat** : la valorisation repose intégralement sur la croissance future
- **Dépendance aux budgets publics** : cycles de commande municipaux, sensibilité aux dotations fédérales, exposition politique
- **Risque politique et réputationnel** : contrats liés à l'immigration, critiques de l'EFF et de l'ACLU sur Draft One, loi californienne SB 524 (2026) imposant la divulgation de l'usage de l'IA dans les rapports de police. Le budget de lobbying est passé de 0,48 M$ en 2020 à 2,5 M$ en 2025
- **Ventes d'initiés régulières** : environ 28 M$ de ventes nettes des dirigeants sur douze mois — pas anormal pour des packages en actions, mais suivi de près par le marché
- **Écart cours / objectif analystes** : consensus autour de **693-731 $** contre 604 $, tandis que certains modèles de juste valeur (Simply Wall St) ressortent à **451 $** — la dispersion des opinions est en elle-même un indicateur de risque`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement méthodologique
Deux chiffres coexistent chez Axon et **ne racontent pas la même histoire** : le BPA **GAAP** (écrasé par la rémunération en actions) et le BPA **non-GAAP** (qui l'exclut). Le consensus de marché et les multiples cités publiquement portent presque toujours sur le **non-GAAP**. Les estimations ci-dessous sont indicatives et présentent les deux lectures.

### Hypothèses de modélisation

**Chiffre d'affaires** :
- 2026 guidé à **+32 à 34 %**, soit **3,67 à 3,73 Mds$**
- Objectif 2028 de la direction : **6 Mds$**, ce qui implique environ **+27 % par an** sur 2026-2028
- Moteurs : expansion premium (seulement ~30 % des clients sur un plan premium), contre-drone, international et entreprises (prises de commandes triplées), Axon 911
- Visibilité forte : 15,1 Mds$ de commandes contractualisées couvrent plus de quatre années de CA courant

**Marges** :
- Marge d'EBITDA ajusté 2026 : **~25,5 %**, avec un T3 sous pression (coût mémoire, pas de remboursement tarifaire) et un rattrapage au T4
- Objectif 2028 : **28 %** — soit environ +250 pb en deux ans, à obtenir par le levier logiciel et la normalisation des activités récentes

**Rémunération en actions** :
- 2026 : **590 à 620 M$**, dont ~280 M$ liés au XSP et au CEO Award
- Ces plans étant conditionnés à des jalons non linéaires, la charge devrait **décroître en pourcentage du CA** à partir de 2027 — c'est l'hypothèse clé de tout le modèle de convergence GAAP

**Coûts financiers et dilution** :
- 1,8 Md$ d'obligations senior, dette nette de 1,1 Md$ — charge d'intérêts modeste au regard de l'EBITDA
- Dilution : engagement de la direction à **moins de 2,5 % par an**, plus le programme ATM (≈1,0 million d'actions encore autorisées)

---

### Scénarios de BPA

| Exercice | BPA non-GAAP estimé | Croissance | P/E au cours de ~604 $ |
|---|---|---|---|
| 2025 (réalisé) | ~7,00 $ | — | — |
| **2026E** | **~7,70 à 8,20 $** | **+10 à 17 %** | **~74 à 78x** |
| **2027E** | **~10,00 à 10,80 $** | **+30 à 37 %** | **~56 à 60x** |
| **2028E** | **~13,00 à 13,80 $** | **+27 à 30 %** | **~44 à 46x** |

*Note : le BPA dilué non-GAAP ressort à **3,50 $ sur le seul premier semestre 2026** (contre 3,65 $ un an plus tôt, l'exercice précédent ayant bénéficié d'un avantage fiscal de 75 M$), avec un quatrième trimestre traditionnellement le plus fort. Certains courtiers publient un BPA 2026 proche de 7,7 $ et un BPA 2028 proche de 13,5 $ sur base non-GAAP. Le BPA GAAP reste très inférieur et erratique : 2,41 $ au S1 2026, dont l'essentiel provient de gains hors exploitation sur placements.*

### Sensibilité

- **Scénario haussier** (croissance maintenue >30 %, marge 2028 à 28 %, normalisation du XSP) : BPA 2028 vers 14 $, et un multiple de 40x soutenable donnerait un cours autour de 560 $ à cet horizon — **le titre est déjà proche de cette cible**, ce qui illustre la faible marge de sécurité
- **Scénario central** : convergence lente, BPA 2028 vers 13 $, multiple comprimé à 35x — cours autour de 455 $, proche de l'estimation de juste valeur de certains modèles (451 $)
- **Scénario baissier** (croissance ramenée à 20-22 %, marge bloquée à 25 %, coûts composants persistants) : BPA 2028 vers 10 $, multiple à 25x — cours autour de 250 $, soit **-60 %**

**Conclusion** : Axon ne se juge pas au BPA courant mais à sa capacité de tenir simultanément **trois promesses** — 6 Mds$ de CA en 2028, 28 % de marge d'EBITDA ajusté et une dilution sous 2,5 %. Le cours actuel intègre les trois. Le vrai juge de paix d'ici 2028 sera la **conversion en free cash-flow** (objectif de 60 % de l'EBITDA ajusté), aujourd'hui encore très en retard : **−55,6 M$ sur le premier semestre 2026** pour un objectif annuel de 450 M$, ce qui suppose une génération massive au second semestre.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Un quasi-monopole avec un coût de sortie juridique** : 80-85 % de part de marché sur les caméras-piétons des grandes villes américaines, un cloud de preuves qui est le standard de fait des tribunaux, des contrats de 5 à 10 ans en source unique. Ce n'est pas un moat de marque, c'est un **moat procédural** — changer de fournisseur oblige à refaire valider une chaîne de garde judiciaire.

**2. Une visibilité de revenus exceptionnelle** : **15,1 Mds$** de commandes déjà contractualisées, soit plus de quatre années de CA courant, en croissance de 41 %. Peu d'entreprises cotées offrent une telle lisibilité à trois ans.

**3. Une base installée à peine monétisée** : seulement **~30 % des clients** sont sur un plan premium. La rétention nette de **126 %** signifie que la base grossit d'un quart par an sans un seul nouveau logo. L'expansion premium est le levier le plus mécanique du dossier.

**4. Trois relais de croissance neufs et indépendants** : le contre-drone (Dedrone, >100 M$ trimestriels, +300 %), l'IA (AI Era Plan, +~700 %), et Axon 911 (Prepared + Carbyne). Aucun ne dépendait du cycle des caméras-piétons il y a deux ans.

**5. L'international et les entreprises comme deuxième acte** : prises de commandes **triplées** sur les deux fronts, trois des cinq plus gros contrats IA du trimestre issus de clients internationaux. Le marché adressable double si Axon réplique hors des États-Unis ce qu'il a construit en Amérique du Nord.

**6. L'IA vendue comme nécessité budgétaire** : avec 65 % des services de police en pénurie d'effectifs, Draft One n'est pas un gadget mais un **substitut de main-d'œuvre**. C'est le meilleur argument commercial possible face à un conseil municipal.

**7. Un alignement dirigeant total** : le fondateur au salaire minimum, une rémunération conditionnée à des jalons 2024-2030, un plan XSP étendu à tous les salariés. Si le cours stagne, l'équipe ne gagne rien.

**8. Deux verrous qui sautent en 2026** : le **résultat opérationnel GAAP redevient positif** (+76 M$ au S1 2026 après une perte de 62 M$ en 2025) et la **faiblesse de contrôle interne sur la comptabilisation du revenu est déclarée remédiée au 30 juin 2026**. Les deux principales objections comptables du dossier tombent la même année.

**9. Une décote vs objectif consensus** : cours autour de 604 $ contre un consensus de **693 à 731 $**, avec des relèvements récents (Goldman Sachs à 715 $, Piper Sandler à 732 $, Needham à 750 $).

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents

**1. La rentabilité GAAP n'arrive pas** : perte opérationnelle de 62 M$ en 2025, marge nette de 4,5 %, résultat net **en baisse au T2 2026** alors que le CA progresse de 35 %. La rémunération en actions — 590 à 620 M$ en 2026, environ 16 % du chiffre d'affaires — absorbe tout le levier opérationnel. Si elle ne se normalise pas, **le bénéfice n'arrive jamais**.

**2. La marge brute est structurellement attaquée** : le contre-drone et les services professionnels croissent plus vite que le logiciel, ce qui **dilue le mix**. Ajoutez la flambée du coût mémoire et les droits de douane sur le matériel : la marge brute matériel est tombée sous 50 %. Le paradoxe est cruel — plus les nouveaux produits marchent, plus la marge se dégrade à court terme.

**3. Le risque politique et réglementaire monte** : loi californienne SB 524 (2026) imposant la divulgation de l'usage de l'IA dans les rapports de police, critiques de l'EFF et de l'ACLU sur Draft One, contestation locale des contrats fédéraux liés à l'immigration, budget de lobbying multiplié par cinq depuis 2020. **Le cas Flock l'a démontré : plus de 50 juridictions ont résilié ou suspendu leurs contrats en 2026.** Ce qui frappe Flock peut frapper Axon.

**4. Le bénéfice par action ne suit toujours pas** : le **BPA dilué non-GAAP recule à 3,50 $ au S1 2026** contre 3,65 $ un an plus tôt, malgré une croissance du chiffre d'affaires de 34,6 %. L'exercice précédent bénéficiait d'un avantage fiscal de 75 M$, mais le constat demeure : on paie environ 50 fois un bénéfice par action qui, sur douze mois, ne progresse pas.

### Analyse pré-mortem
Que se passe-t-il si Axon vaut 300 $ dans deux ans ? Scénario : la croissance ralentit vers 20-22 % (saturation américaine, budgets municipaux comprimés, ralentissement fédéral), la marge d'EBITDA plafonne à 25 % au lieu des 28 % promis, la rémunération en actions reste au-dessus de 500 M$ et continue d'annuler le levier opérationnel tout juste retrouvé, et deux ou trois grandes villes résilient sous pression de leur conseil municipal sur la vie privée. Le multiple passe de 50x à 25x. **Le cours est divisé par deux sans qu'aucune catastrophe opérationnelle ne se produise.**

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat public porte sur la valorisation, or ce n'est pas là que se joue le dossier. La vraie question est de savoir si Axon est une entreprise **logicielle qui vend du matériel** ou une entreprise **matérielle qui vend du logiciel**. À 44 % de logiciel après dix ans de bascule, avec un mix qui n'avance plus, et une croissance matérielle qui reste le moteur, la réponse penche vers la seconde. Or les deux se valorisent à des multiples séparés d'un facteur trois.

Symétriquement, les baissiers font l'erreur inverse : ils traitent la rémunération en actions comme une charge permanente alors qu'elle est **conditionnée à des jalons finis** de 2024-2030. Si ces jalons se cristallisent, la charge chute mécaniquement et le résultat GAAP se redresse d'un coup.

Les deux camps se trompent de sujet. **Le vrai indicateur n'est ni le P/E ni la SBC : c'est la conversion en free cash-flow.** Objectif 2028 : 60 % de l'EBITDA ajusté. Réalité T2 2026 : -1 M$. Tout est là.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Contrôle interne sur la comptabilisation du revenu — RISQUE REFERMÉ (30 juin 2026)
**Mise à jour majeure.** C'était le signal le plus sérieux du dossier ; il ne l'est plus. Le 10-K de l'exercice 2025 indiquait que **les contrôles relatifs à la comptabilisation du revenu n'étaient pas efficaces au 31 décembre 2025** : l'entreprise n'avait pas mis à jour ses politiques de reconnaissance du revenu pour tenir compte des évolutions de son offre et de ses conditions contractuelles. Cette faiblesse avait produit des **erreurs qualifiées d'immatérielles** sur le revenu, les actifs et passifs de contrat et la publication des obligations de performance restantes, sur l'ensemble des périodes de 2023 et 2024.

Dans le **10-Q du 30 juin 2026**, la direction expose la séquence de remédiation : conception et mise en place de contrôles destinés à (i) évaluer périodiquement les politiques de comptabilisation du revenu, (ii) les mettre à jour lorsque l'offre ou les conditions contractuelles évoluent, et (iii) suivre et comptabiliser correctement les flux de revenus existants et nouveaux. Au **deuxième trimestre 2026**, Axon a achevé les tests de ces contrôles et conclu qu'ils étaient correctement conçus, mis en œuvre et opérants depuis une durée suffisante pour considérer que **la faiblesse significative est remédiée au 30 juin 2026**.

**Ce que cela change** : la thèse d'investissement repose sur des métriques dérivées de la comptabilisation du revenu — **ARR (1,64 Md$), carnet contractualisé (15,1 Mds$), rétention nette (126 %)**. Ces chiffres reposent désormais sur un environnement de contrôle validé. C'est la levée d'une décote de confiance, pas un événement de croissance.

**Ce qui reste à surveiller** : la confirmation par **PwC** dans le rapport d'audit sur l'ICFR au 31 décembre 2026 — un contrôle jugé efficace au 30 juin par la direction reste soumis à l'opinion de l'auditeur en fin d'exercice. Et le rappel statistique qui s'impose : environ un tiers des sociétés ayant déclaré une faiblesse significative en déclarent une nouvelle dans les années suivantes.

**Le précédent historique n'est pas anodin** : Axon avait déjà connu une faiblesse significative sur sa filiale britannique en 2017 (remédiée en 2018), puis une autre sur le cycle *quote-to-cash* en 2022. Trois épisodes en huit ans, sur une entreprise dont la complexité contractuelle augmente à chaque acquisition.

### Restatement du bilan (2025) — RISQUE MODÉRÉ, historique
En mai 2025, le comité d'audit a conclu que des états financiers antérieurs ne devaient plus être utilisés en raison d'une **erreur de présentation au bilan** des obligations convertibles 0,50 % échéance 2027 (690 M$), classées entre passifs courants et non courants. L'opinion de PwC sur les comptes 2024 et sur l'efficacité de l'ICFR au 31 décembre 2024 avait alors été déclarée non fiable. S'y ajoute une révision antérieure sur la qualification **principal contre agent** de certains accords de revendeurs sous ASC 606. Ces obligations convertibles ont depuis été intégralement remboursées au premier trimestre 2026 — le sujet est éteint, mais l'historique compte dans l'évaluation de la culture de contrôle.

### Rémunération en actions et dilution — RISQUE ÉLEVÉ
**590 à 620 M$ attendus en 2026**, soit environ **16 % du chiffre d'affaires**, dont environ 280 M$ pour le seul plan XSP et le CEO Performance Award (contre 230 M$ estimés un trimestre plus tôt). C'est ce poste qui transforme un EBITDA ajusté de 710 M$ (2025) en une perte opérationnelle GAAP de 62 M$.

**À surveiller** : le **nombre d'actions dilué**, l'engagement de dilution annuelle sous 2,5 %, et le **programme ATM** (0,2 million d'actions vendues au T2 2026 pour 100,3 M$ nets, ~1,0 million encore autorisées). Un émetteur qui vend des actions au fil de l'eau pour financer les obligations fiscales liées à sa rémunération en actions crée une dilution circulaire.

### Goodwill et immobilisations incorporelles — RISQUE ÉLEVÉ
Cinq acquisitions en trois ans : Fusus, Dedrone, Sky-Hero, Prepared (~800 M$), Carbyne (625 M$). Le goodwill est justifié par des « synergies attendues » et **n'est pas déductible fiscalement**. L'allocation du prix d'acquisition de Carbyne **reste ouverte jusqu'au T1 2027**.

**À surveiller** : le rapport goodwill / capitaux propres, les hypothèses des tests de dépréciation (taux d'actualisation, croissance à long terme), et le risque de dépréciation sur les acquisitions les plus récemment payées.

### Écart entre mesures ajustées et GAAP — RISQUE ÉLEVÉ
La direction **guide en EBITDA ajusté et refuse explicitement de réconcilier vers le résultat net**, invoquant la difficulté de prévoir la fiscalité et les gains sur placements. C'est légalement recevable, mais cela signifie qu'aucun engagement de rentabilité comptable n'est pris.

**Le test** : l'écart entre EBITDA ajusté (242 M$ au T2 2026) et résultat net GAAP (29,4 M$) est d'un facteur huit. Si cet écart ne se resserre pas d'ici 2028, les mesures ajustées ne sont pas un chemin vers le bénéfice, elles en sont un **substitut permanent**.

### Fonds de roulement, stocks et cash — RISQUE MODÉRÉ À ÉLEVÉ
Le free cash-flow était **négatif de 1 M$ au T2 2026** pour un objectif annuel de 450 M$, ce qui suppose une concentration massive sur le second semestre. La cause revendiquée est le portage volontaire de stocks « durables » face à l'instabilité géopolitique.

**À surveiller** : le **cycle de conversion de trésorerie** (environ 57 jours), les créances clients (les administrations publiques paient lentement), et surtout la réalisation effective des 450 M$ de FCF au T4. Un objectif annuel qui repose intégralement sur un trimestre est fragile par construction.

### Parties liées — RISQUE MODÉRÉ
Un litige porté par un actionnaire minoritaire de Carbyne (Intercap) allègue que les fondateurs de la cible auraient perçu environ **20 M$ de primes en numéraire et plus de 40 M$ en actions Axon** dans le cadre de la transaction, dans un contexte de conflit d'intérêts. Procédural à ce stade, mais à documenter dans les annexes.

### Comptabilisation du revenu sur contrats groupés — RISQUE STRUCTUREL
Axon vend des offres groupées de matériel, de cloud et de services sur 5 à 10 ans. Sous ASC 606, la **répartition du prix de transaction entre obligations de performance** (matériel livré immédiatement, logiciel étalé) est une zone de jugement significative. C'est précisément le sujet de la faiblesse de contrôle identifiée — le lien n'est pas une coïncidence.

---

### Verdict global
**Risque comptable : MODÉRÉ** (abaissé depuis la remédiation du 30 juin 2026). Axon n'est pas suspectée de fraude, est auditée par **PwC**, ses métriques opérationnelles (carnet, NRR) sont corroborées par la trajectoire du chiffre d'affaires, et le point de contrôle interne le plus sensible vient d'être refermé. Restent trois zones de vigilance permanentes : une **rémunération en actions massive** (590 à 620 M$ en 2026), un **goodwill en forte hausse** (1,90 Md$ au 30 juin 2026 contre 1,37 Md$ six mois plus tôt) et un **free cash-flow concentré sur le quatrième trimestre** (−55,6 M$ au S1 pour un objectif annuel de 450 M$). Le suivi trimestriel des 10-Q reste nécessaire, mais le dossier n'est plus un dossier à alerte comptable.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Rick Smith et l'équipe Axon

### Rentabilité et rémunération en actions

**1.** Vous déclarez la faiblesse significative de contrôle interne sur la comptabilisation du revenu **remédiée au 30 juin 2026**. Quelle assurance pouvez-vous donner que **PwC confirmera cette conclusion** dans son opinion sur l'ICFR au 31 décembre 2026 ? Et compte tenu de trois épisodes distincts depuis 2017 (filiale britannique, cycle quote-to-cash, comptabilisation du revenu), qu'est-ce qui a structurellement changé dans votre fonction contrôle plutôt que dans un contrôle donné ?

**2.** Vous guidez en EBITDA ajusté et refusez de réconcilier vers le résultat net. **À quel exercice précis anticipez-vous une marge opérationnelle GAAP durablement positive** — pas un trimestre isolé, une trajectoire ?

**3.** La rémunération en actions représente 590 à 620 M$ en 2026, soit environ 16 % du chiffre d'affaires. **Quelle est votre trajectoire chiffrée en pourcentage du CA pour 2027 et 2028**, et que se passe-t-il si les jalons du CEO Award et du XSP se cristallisent tous en même temps ?

**4.** Le free cash-flow était négatif de 1 M$ au T2 2026 pour un objectif annuel de 450 M$. **Qu'est-ce qui, mécaniquement, produit 450 M$ au second semestre**, et quel est votre plancher acceptable si l'investissement en stocks ne se modère pas ?

### Marges et mix

**5.** Chaque nouvelle activité qui réussit — contre-drone, services professionnels — **dilue votre marge brute**. Comment atteignez-vous 28 % d'EBITDA ajusté en 2028 si vos meilleurs moteurs de croissance sont vos produits les moins margés ?

**6.** Le mix logiciel stagne autour de 43-44 % depuis 2025 alors que la bascule vers le logiciel est le cœur de votre récit. **Quel niveau visez-vous en 2028**, et qu'est-ce qui débloque la ligne ?

**7.** Sur le coût mémoire : votre politique de stocks a protégé 2026. **Que se passe-t-il en 2027 quand ces stocks seront consommés** aux prix actuels du marché ?

### Croissance et marchés nouveaux

**8.** Vous indiquez que seulement 30 % des clients sont sur un plan premium. **Quel est le plafond réaliste de ce taux**, et pourquoi les 70 % restants n'ont-ils pas encore migré après plusieurs années ?

**9.** Les prises de commandes internationales et entreprises ont triplé, mais avec des contrats plus courts. **Quelle est la rétention nette sur ces deux segments spécifiquement**, comparée aux 126 % consolidés ?

**10.** Dedrone dépasse 100 M$ trimestriels. Motorola vient de payer **1,5 Md$ pour D-Fend**. Quelle part de votre pipeline contre-drone est déjà en concurrence directe avec eux, et sur quel critère gagnez-vous ?

### Risque politique et réglementaire

**11.** Plus de 50 juridictions ont résilié ou suspendu leurs contrats avec Flock Safety en 2026 sur des motifs de vie privée. **Quelle part de votre backlog est exposée à ce type de contestation locale**, et quel est votre scénario si une grande métropole résilie ?

**12.** La loi californienne SB 524 impose la divulgation de l'usage de l'IA dans les rapports de police, et l'EFF conteste la conception de Draft One. **Combien de vos revenus IA dépendent de juridictions où une contrainte comparable pourrait être adoptée ?**

**13.** Votre activité fédérale, notamment liée à l'immigration, croît vite et suscite une opposition municipale. **Comment arbitrez-vous entre ce relais de croissance et le risque de perdre des clients locaux ?**

### Gouvernance et long terme

**14.** Vous dirigez l'entreprise depuis 1993 et Axon est, de fait, **le pari Rick Smith**. Quel est le plan de succession, et quelle part de votre rôle est aujourd'hui réellement institutionnalisée ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Ce n'est pas une entreprise logicielle, et le mix le prouve

Les haussiers valorisent Axon comme un éditeur SaaS : ARR, rétention nette, backlog. **Mais après dix ans de bascule revendiquée, le logiciel ne représente que 44 % du chiffre d'affaires** — et la ligne ne bouge plus : 43 % en 2025, ~44 % au T2 2026. Le moteur reste le matériel, qui croît de 34,6 % avec une marge brute autour de 49-50 %.

Autrement dit : chaque trimestre de succès commercial **empêche mécaniquement la bascule de mix**. Le marché paie un multiple de logiciel pour une entreprise dont la croissance vient du hardware. Les deux se valorisent à un facteur trois d'écart.

### 2. La rentabilité GAAP est absente, et l'écart s'aggrave

Perte opérationnelle de **62 M$ en 2025**. Marge nette de 4,5 %. Et au T2 2026, le fait le plus révélateur du dossier : **le CA progresse de 35 % et le résultat net baisse** (29,4 M$ contre 36,1 M$), le BPA dilué reculant de 0,44 $ à 0,36 $.

Un modèle qui bénéficie d'un levier opérationnel produit l'inverse. Ici, chaque dollar de croissance est consommé par les coûts. La direction répond « EBITDA ajusté », qui exclut 600 M$ de rémunération en actions — soit **huit fois le résultat net GAAP du trimestre**.

### 3. Le pari central des haussiers est un pari comptable, pas opérationnel

Toute la convergence vers un bénéfice repose sur une hypothèse : **la rémunération en actions se normalise après 2027**, quand les jalons du XSP et du CEO Award se cristallisent. C'est plausible. Mais c'est un pari sur un **calendrier de comptabilisation**, pas sur une amélioration de l'exploitation.

Et il comporte un piège : ces jalons sont liés au **cours de Bourse**. Si le cours monte, ils se cristallisent — mais la charge explose avant de retomber. Si le cours stagne, la charge disparaît — mais les dirigeants n'ont plus d'incitation. Il n'existe aucun scénario où les actionnaires gagnent proprement sur les deux tableaux.

### 4. Le concurrent que les haussiers sous-estiment n'est pas Motorola — c'est le conseil municipal

Les baissiers classiques désignent Motorola. Erreur : Motorola perd les appels d'offres sur les caméras depuis dix ans. **Le vrai adversaire est politique.**

La démonstration est arrivée en 2026 avec Flock Safety : **plus de 50 juridictions ont résilié ou suspendu leurs contrats** sur des motifs de vie privée, contraignant l'entreprise à réduire sa rétention de données par défaut de 30 à 7 jours en reconnaissant publiquement s'être trompée. Axon a récupéré des contrats — mais **Axon agrège infiniment plus de données que Flock** : caméras-piétons, caméras embarquées, ALPR fixes, drones, robots au sol, flux CCTV privés via fususCORE, et désormais reconnaissance d'activité en temps réel via Axon Vision.

L'EFF conteste la conception de Draft One depuis 2025 ; la Californie a adopté SB 524 en 2026 ; deux décisions de justice de janvier 2026 ont identifié l'échelle, la durée de rétention et le périmètre de partage comme les variables constitutionnellement décisives. **Ce sont exactement les variables sur lesquelles Axon est le plus exposé.** Un contrat de dix ans ne protège pas d'un vote de conseil municipal.

### 5. L'historique comptable reste un antécédent, même après remédiation

Soyons honnêtes sur ce point : la **faiblesse significative de contrôle interne sur la comptabilisation du revenu a été déclarée remédiée au 30 juin 2026**. L'argument baissier le plus fort de ces deux dernières années vient de tomber, et il faut le dire.

**Ce qui subsiste** : c'est le **troisième épisode de contrôle interne en huit ans** — filiale britannique en 2017, cycle *quote-to-cash* en 2022, comptabilisation du revenu en 2024-2026 — auquel s'ajoute un **restatement** du classement au bilan des convertibles 2027 et une révision sur la qualification principal/agent de contrats de revente. Chaque épisode a été refermé ; la fréquence, elle, ne baisse pas, sur une entreprise dont la complexité contractuelle augmente à chaque acquisition.

**Et la conclusion reste celle de la direction, pas encore celle de l'auditeur** : PwC doit se prononcer sur l'efficacité de l'ICFR au 31 décembre 2026. Restent par ailleurs un **goodwill à 1,90 Md$** (contre 1,37 Md$ six mois plus tôt), dont l'allocation du prix d'acquisition de Carbyne demeure ouverte jusqu'au T1 2027.

### 6. L'alignement du dirigeant est aussi un problème

Rick Smith a été **le dirigeant le mieux payé du S&P 500 en 2024** avec 164,5 M$, dont 99,6 % en actions conditionnées à des **jalons de cours de Bourse**. Les haussiers y voient un alignement parfait. Un sceptique y voit une incitation à maximiser le multiple plutôt que le bénéfice — ce qui explique élégamment pourquoi l'entreprise guide en EBITDA ajusté et refuse tout engagement de rentabilité GAAP.

Accessoirement, les initiés ont vendu environ **28 M$ nets sur douze mois**.

### 7. Ce qui doit se vérifier pour justifier le cours actuel

Le cours de ~604 $ suppose que **tout** se réalise : 6 Mds$ de CA en 2028, 28 % de marge d'EBITDA ajusté, une dilution sous 2,5 %, une conversion FCF à 60 % de l'EBITDA (contre −55,6 M$ au S1 2026), une normalisation de la rémunération en actions, et aucune contestation politique majeure. **Six conditions simultanées.**

Si la croissance déçoit de 20 à 30 % — c'est-à-dire si elle ressort à 22-25 % au lieu de 32 % — le BPA 2028 tombe vers 10 $ et le multiple se comprime vers 25x. **Cours implicite : 250 $, soit -60 %.** Ce n'est pas un scénario catastrophe : c'est simplement ce qui arrive quand une valeur de croissance ralentit.

### Le scénario unique qui abîmerait durablement l'entreprise
**Une grande métropole américaine résilie publiquement pour motif de vie privée, et d'autres suivent.** Le cas Flock a montré que l'effet est en cascade et qu'aucun contrat n'y résiste. Axon perdrait moins des revenus qu'une **présomption d'inéluctabilité** — le fait que l'acheter soit le choix par défaut, donc défendable devant un élu. C'est ce statut, plus que le carnet de commandes, qui soutient le multiple. Probabilité à trois ans : non négligeable, de l'ordre de 20 à 30 %.

### Conclusion short
Axon est une entreprise remarquable qui exécute mieux que 95 % du marché. **Mais le titre n'est pas la société.** À environ 50x les bénéfices non-GAAP 2026 et 30x l'ARR, avec un **BPA non-GAAP qui recule sur le semestre** (3,50 $ contre 3,65 $) pendant que le chiffre d'affaires bondit de 34,6 %, un free cash-flow encore négatif à mi-année et un risque politique en montée, le rapport risque/rendement ne rémunère pas l'incertitude. **La question n'est pas si Axon va grandir — c'est ce qu'il faut payer pour cette certitude.**`,
  },
];

export default { ...meta, modules };
