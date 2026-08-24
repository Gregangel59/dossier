// ============================================================
//  DOSSIER : Bloom Energy Corporation (BE)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "be",                       // identifiant d'URL : /dossier/be
  ticker: "BE",
  name: "Bloom Energy Corporation",
  exchange: "NYSE",
  sector: "Équipements électriques / Production d'énergie sur site",
  initials: "BE",                   // affiché dans la pastille
  tagline: "Piles à combustible à oxyde solide pour l'alimentation sur site des centres de données IA — croissance explosive, valorisation extrême.",
  riskScore: 49,                    // score du rapport de risque (ou null)
  riskLabel: "Risque élevé",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "be.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Bloom Energy conçoit, fabrique, vend et installe des **piles à combustible à oxyde solide (SOFC)** — les *Bloom Energy Servers* — qui produisent de l'électricité **sur le site du client**, sans combustion, par un procédé électrochimique. Fondée en 2001 (sous le nom Ion America), cotée au NYSE depuis 2018, l'entreprise emploie plus de 2 000 personnes et fabrique aux États-Unis (Sunnyvale et Fremont en Californie, Newark dans le Delaware).

Le modèle a basculé d'une niche « énergie propre » à un rôle d'**infrastructure critique de l'IA** : quand le raccordement au réseau demande 5 à 7 ans dans les principaux bassins de centres de données, Bloom livre de la puissance en quelques mois. Le CA 2025 s'établit à **2,02 milliards $** (+37,3 %) ; le seul deuxième trimestre 2026 atteint **1,065 milliard $** (+165,5 %), premier trimestre milliardaire de l'histoire du groupe.

Trois flux de revenus structurent le compte de résultat :

- **Produit (Product)** — vente des serveurs eux-mêmes. 935,4 M$ au T2 2026, soit ~88 % du CA, en hausse de 215,4 % sur un an. C'est le moteur, et c'est un revenu **transactionnel et lumpy**, reconnu à la livraison.
- **Service** — contrats d'exploitation et de maintenance long terme, avec remplacement périodique des piles. 69,0 M$ au T2 2026, marge de service à 22 % (+977 points de base sur un an). **100 % des nouvelles commandes produit sont assorties d'un contrat de service** — c'est la brique récurrente du modèle.
- **Installation** (51,0 M$) et **Électricité** (9,95 M$, en repli de 22,3 %) — l'électricité correspond aux anciens contrats où Bloom vendait des kWh plutôt que des machines ; ce modèle est en extinction volontaire au profit de la vente d'équipement.

## Principaux produits et services

- **Bloom Energy Server** : module SOFC alimenté au gaz naturel, au biogaz ou à l'hydrogène, architecture **800 V continu** particulièrement adaptée aux salles informatiques IA, capable de suivre la charge (*load following*).
- **Power Connect** (lancé en août 2026) : système de déploiement réduisant de plus de 40 % le temps d'installation sur site.
- **Bloom Electrolyzer** : électrolyseur haute température pour la production d'hydrogène — activité marginale à ce stade, conservée comme option long terme.

## Clients, fournisseurs, concurrents

**Clients** : hyperscalers américains, *neoclouds*, laboratoires d'IA et opérateurs de colocation. **Oracle** est le partenaire de référence (accord-cadre jusqu'à 2,8 GW, dont 1,2 GW déjà contractés, et alimentation intégrale du campus Project Jupiter au Nouveau-Mexique). **American Electric Power (AEP)** a signé un accord jusqu'à 1 GW (~2,65 Mds$). Historiquement : hôpitaux, campus universitaires, distribution, semi-conducteurs, utilities.

**Fournisseurs** : **MTAR Technologies** (Inde) pour les composants critiques, fournisseurs de céramiques dopées à l'**oxyde de scandium**, fournisseurs de gaz naturel via les réseaux locaux. Le scandium est le point de vulnérabilité mis en cause depuis juillet 2026 (voir Red Flags).

**Concurrents** : **GE Vernova**, **Caterpillar**, **Cummins**, **Mitsubishi Power** et **Siemens Energy** sur les turbines à gaz et groupes électrogènes ; **FuelCell Energy**, **Plug Power**, **Ballard** et **Doosan Fuel Cell** sur les piles à combustible ; les **utilities** elles-mêmes lorsqu'elles parviennent à raccorder à temps.

## Modalités contractuelles

Les commandes produit sont **fermes mais non assimilables à un carnet contractuel classique** : Bloom communique un *backlog* d'environ **20 milliards $** (dont ~6 Mds$ de produit et ~14 Mds$ de service), alors que ses **obligations de prestation restantes (RPO) auditées au sens d'ASC 606** ne s'élevaient qu'à ~441 M$ (produit et installation) et ~51,5 M$ (service) au 31 mars 2026. Cet écart d'ordre de grandeur est **le débat central** sur le titre.

Le financement des projets est de plus en plus externalisé : **Brookfield** a porté son cadre de financement de 5 à **25 milliards $** le 30 juin 2026 pour déployer les systèmes chez les opérateurs d'IA. Les partenaires financiers sont **contractuellement tenus de prendre livraison**, ce qui limite l'exposition de Bloom aux retards de chantier côté client.

> **Note de prudence** : Bloom Energy est une entreprise qui vient tout juste de basculer en **bénéfice GAAP** (196,3 M$ au T2 2026) après vingt-cinq ans de pertes. Toute analyse de multiples doit intégrer ce point d'inflexion très récent et la **concentration extrême** de la clientèle (un seul client, non lié, a représenté **~73 % du chiffre d'affaires du seul deuxième trimestre 2026**).`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Bloom Energy dans la chaîne de valeur

Bloom occupe une position d'**équipementier-intégrateur** : il transforme des matières céramiques et métalliques spécialisées en systèmes de production électrique livrés clés en main, puis en assure l'exploitation via des contrats de service. Contrairement à un producteur d'électricité, il ne détient pas les actifs finaux ; contrairement à un pur industriel, il conserve une relation de service sur 10 à 20 ans.

### Amont — Intrants critiques

**Oxyde de scandium (Sc₂O₃)** : dopant qui stabilise l'électrolyte céramique en zircone au cœur de chaque pile. C'est **l'intrant le plus stratégique et le plus contesté**. La direction affirme disposer d'une visibilité permettant de soutenir 25 GW de production annuelle et de **ne pas dépendre de la Chine** ; le vendeur à découvert Hunterbrook affirme le contraire (voir Red Flags et Avocat du Diable).

**Composants mécaniques et sous-ensembles** :
- **MTAR Technologies** (Hyderabad, Inde) — fournisseur historique et concentré des *hot boxes* et pièces de précision
- Fournisseurs de tôlerie, d'électronique de puissance, d'onduleurs et de systèmes de conversion 800 V

**Matières premières** : zircone, yttrium, nickel, acier inoxydable, terres rares en faible quantité.

**Énergie d'entrée** : **gaz naturel** dans la quasi-totalité des déploiements actuels (biogaz et hydrogène restant marginaux). Bloom ne l'achète généralement pas : c'est le client ou le développeur qui contracte le gaz.

---

### Bloom Energy — Fabrication et déploiement

**Usines** : Fremont et Sunnyvale (Californie), Newark (Delaware). Capacité annuelle portée à **2 GW fin 2026**, avec une empreinte industrielle que la direction dit capable de soutenir **5 GW par an** moyennant des investissements complémentaires.

**Déploiement** : modules préfabriqués, mise en service en quelques mois. Le premier système livré à Oracle l'a été en **55 jours**, soit 35 jours d'avance sur la cible de 90 jours. *Power Connect* (août 2026) vise à réduire encore de 40 % le temps d'installation.

**Financement** : **Brookfield** (cadre porté à 25 Mds$ le 30 juin 2026) et **structures de projet dédiées** portent le capital, permettant à Bloom de facturer l'équipement sans immobiliser son propre bilan.

---

### Aval — Clients finaux

**Centres de données IA** : Oracle (jusqu'à 2,8 GW, campus Project Jupiter au Nouveau-Mexique, 2,45 GW), hyperscalers américains, plus d'une dizaine de *neoclouds*, laboratoires d'IA et opérateurs de colocation.

**Utilities** : **American Electric Power** (jusqu'à 1 GW, ~2,65 Mds$) — l'électricien devient revendeur/déployeur.

**Industrie et institutions** : fabrication de semi-conducteurs, hôpitaux, campus universitaires, distribution, sites industriels — la base historique, aujourd'hui minoritaire en part de CA.

**International** : Corée du Sud via **SK ecoplant** (actionnaire à plus de 10 % et partenaire de distribution historique), Inde, Italie, Japon, Taïwan.

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                    BLOOM ENERGY               AVAL
Oxyde de scandium    →   Fabrication US        →    Oracle (2,8 GW)
Zircone, nickel          Fremont / Sunnyvale        AEP (1 GW)
MTAR Technologies        Newark (Delaware)          Hyperscalers, neoclouds
Électronique 800 V       2 GW (fin 2026)            Colocation, labos IA
                         → 5 GW (empreinte)         SK ecoplant (Corée)
Gaz naturel (client)     Service 10-20 ans          Industrie, hôpitaux
                              ↑
                    Brookfield — 25 Mds$
                    (capital de déploiement)
\`\`\`

**Le point de tension** : toute la thèse repose sur la capacité à **industrialiser plus vite que la demande ne s'évapore**, avec deux goulots identifiés — l'oxyde de scandium et la montée en cadence des fournisseurs de composants. La direction reconnaît elle-même que Bloom ne peut pas croître au rythme d'un éditeur logiciel : c'est un métier d'usine.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Bloom Energy publie **un seul segment opérationnel**. La ventilation utile est donc celle des **flux de revenus** et de la **géographie**, pas celle de divisions. Par ailleurs, le périmètre économique change de nature très vite : le CA a été multiplié par plus de 2,5 entre le T2 2025 et le T2 2026.

### Ventilation par flux de revenus — T2 2026

| Flux | CA T2 2026 | T2 2025 | Variation | Poids |
|---|---|---|---|---|
| Produit | 935,4 M$ | 296,6 M$ | **+215,4 %** | ~88 % |
| Service | 69,0 M$ | 54,4 M$ | +26,8 % | ~6 % |
| Installation | 51,0 M$ | 37,4 M$ | +36,4 % | ~5 % |
| Électricité | 9,95 M$ | 12,8 M$ | **−22,3 %** | ~1 % |
| **Total** | **1 065,4 M$** | **401,2 M$** | **+165,5 %** | 100 % |

**Lecture** : la croissance est **quasi intégralement une croissance de vente de machines**. Le service progresse mais reste résiduel en poids — c'est pourtant lui qui, à terme, doit constituer la rente. L'électricité recule volontairement : Bloom sort du modèle où il vendait des kWh pour vendre des équipements.

---

### Trajectoire trimestrielle

| Trimestre | CA | Croissance a/a | Marge brute | Rés. opér. non-GAAP |
|---|---|---|---|---|
| T4 2025 | 777,7 M$ | +35,9 % | 31,9 % (n-GAAP) | 133,0 M$ |
| T1 2026 | 751,1 M$ | +130,4 % | — | 129,7 M$ (GAAP) |
| T2 2026 | **1 065,4 M$** | **+165,5 %** | **34,3 % (n-GAAP)** | **239,6 M$** |

L'accélération du T1 au T2 2026 est de **+42 % en séquentiel** — un rythme qui n'a rien d'industriel classique et qui reflète le déblocage des livraisons pour les projets de centres de données.

---

### Répartition géographique

Les **États-Unis** représentent **90 % du chiffre d'affaires** au T2 comme sur le premier semestre 2026 — contre seulement **59 % et 58 %** un an plus tôt. Le basculement domestique est donc récent et brutal. Historiquement, la **Corée du Sud** pesait lourd via **SK ecoplant**, actionnaire à plus de 10 % et partenaire de coentreprise : le chiffre d'affaires avec les parties liées atteignait encore **376,1 M$ sur le premier semestre 2026** (~21 % du total, concentré sur le T1) mais n'était plus que de **2,8 M$ au T2**, soit 0,26 %. Présence secondaire en Inde, en Italie, au Japon et à Taïwan.

**Conséquence** : l'exposition de Bloom est aujourd'hui **presque intégralement domestique et presque intégralement adossée au cycle d'investissement IA américain**. Il n'y a pas de diversification géographique susceptible d'amortir un retournement de ce cycle.

---

### Profil de marge et rentabilité

- **Marge brute GAAP** : **33,4 %** au T2 2026 (contre 26,7 % un an plus tôt, soit +668 points de base) ; **34,3 %** en non-GAAP
- **Marge opérationnelle** : **17,1 %** GAAP / **22,5 %** non-GAAP au T2 2026 — contre une marge quasi nulle un an plus tôt
- **EBITDA ajusté** : 253,4 M$ au T2 2026 (41,2 M$ au T2 2025)
- **Levier opérationnel** : les charges d'exploitation ont crû de 48 % quand le CA croissait de 166 %. Le CFO attribue cet écart à une base fixe de R&D et de frais généraux
- **Concentration** : **un seul client, non lié, a représenté ~73 % du CA du T2 2026** ; sur le premier semestre, deux clients ont pesé ~44 % et ~21 % (le second étant la partie liée coréenne)

**Lecture** : la structure de coûts se comporte exactement comme le management le promettait. Le problème n'est pas la marge — c'est **la dépendance à une poignée de donneurs d'ordre** dans un cycle d'investissement dont la durabilité fait débat.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Le délai de mise sous tension — le moat réel, et il est temporel
« *Time to power* » est passé du statut de critère d'achat à celui de contrainte existentielle. Un centre de données de 1 GW peut générer 12 à 24 milliards $ de revenus annuels pour son exploitant : **un mois de retard coûte 1 à 2 milliards $**. Face à des files d'attente de raccordement de 5 à 7 ans et à des carnets de commandes de turbines à gaz saturés jusqu'en 2029-2030, Bloom livre en quelques mois. C'est un avantage **réel, mesurable et immédiatement monétisable** — mais c'est aussi un avantage **de fenêtre**, pas de forteresse.

### 2. Validation par les donneurs d'ordre — un moat d'homologation
La direction affirme que **tous les grands hyperscalers américains** et plus d'une dizaine de *neoclouds*, laboratoires d'IA et opérateurs de colocation ont **validé et homologué** ses solutions. Dans l'infrastructure critique, l'homologation est un coût d'entrée considérable : un opérateur ne remet pas en jeu la disponibilité de son campus pour économiser quelques points de prix. Oracle, ayant reçu son premier système en 55 jours, a élargi son accord de 1,2 à 2,8 GW.

### 3. Vingt-cinq ans d'apprentissage industriel sur la SOFC
La pile à oxyde solide est une chimie difficile : température élevée, dégradation céramique, cyclage thermique. Bloom a accumulé des milliers de gigawattheures d'exploitation et une base installée de retours terrain que personne d'autre ne possède à cette échelle sur cette technologie. Les capitaux ne suffisent pas à rattraper cette courbe.

### 4. Le capital tiers — Brookfield comme accélérateur commercial
Le passage du cadre Brookfield de **5 à 25 milliards $** ne fait pas que financer : il **retire l'obstacle du bilan client**. Un opérateur peut déployer du Bloom sans immobiliser de capital, et les partenaires financiers sont **tenus de prendre livraison**, ce qui protège Bloom des retards de chantier. C'est un avantage distributif que les concurrents de niche n'ont pas.

### 5. Fabrication américaine — un moat politique conjoncturel
Production intégralement aux États-Unis, dans un contexte de droits de douane et de sécurisation des chaînes critiques. Argument commercial fort auprès des clients fédéraux et des hyperscalers sensibles au risque géopolitique — **précisément l'argument que le rapport Hunterbrook attaque** en contestant l'origine du scandium.

### 6. Ce qui n'est PAS un moat
- **Le coût de changement client est faible entre projets** : chaque nouveau campus est un nouvel appel d'offres. Bloom doit regagner sa place à chaque cycle
- **La technologie n'est pas protégée par un effet de réseau** : ni plateforme, ni écosystème verrouillé
- **Le pouvoir de prix vient de la pénurie, pas de la marque** : si les turbines à gaz rattrapent leur retard de production vers 2028-2029, l'argument temporel s'érode

## Positionnement vs concurrence

| Critère | Bloom Energy | GE Vernova (turbines) | FuelCell / Plug (SOFC-PEM) |
|---|---|---|---|
| Délai de mise sous tension | **Mois** | Années (carnet saturé) | Mois, mais échelle faible |
| Échelle industrielle | 2 GW/an (fin 2026) | Très élevée | Très faible |
| Rentabilité | Positive depuis 2026 | Élevée et stable | Structurellement négative |
| Bilan | Net cash, converti à 0 % | Investment grade | Fragile |
| Diversification client | **Très faible** | Très élevée | Faible |
| Valorisation | Extrême | Élevée | Décotée |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **temporairement élevé** — la direction indique que les clients acceptent des prix plus hauts parce que l'accès anticipé à l'électricité leur permet d'amortir plus tôt des GPU très coûteux. Mais ce pouvoir est **adossé à la pénurie**, pas à une dépendance structurelle
- **Vis-à-vis des fournisseurs** : **modéré et fragile** — concentration sur un fournisseur de composants (MTAR) et sur une filière matière (scandium) étroite. C'est le maillon faible du dispositif
- **Vis-à-vis des financeurs** : **renforcé** — le cadre Brookfield à 25 Mds$ change la nature de la conversation commerciale`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Alimentation des centres de données IA (août 2026)

| Société | Code Bloomberg | Capitalisation | EV/CA | EV/EBIT | P/E | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Bloom Energy** | **BE US** | **~59 Mds$** | **~14x (2026E)** | **~70x** | **~75x (2026E)** | **0 %** | **négatif** |
| GE Vernova | GEV US | ~263 Mds$ | ~5,5x | ~35x | ~40x | ~0,3 % | n.s. (scission 2024) |
| Caterpillar | CAT US | ~440 Mds$ | ~6,5x | ~28x | ~30x | ~1,0 % | ~45 % |
| Cummins | CMI US | ~83 Mds$ | ~2,4x | ~17x | ~22x | ~1,3 % | ~25 % |
| Vertiv | VRT US | ~100 Mds$ | ~7,3x | ~38x | ~52x | ~0,1 % | ~25 % |
| FuelCell Energy | FCEL US | ~0,5 Md$ | ~3x | n.s. | n.s. | 0 % | négatif |
| Plug Power | PLUG US | ~3 Mds$ | ~3x | n.s. | n.s. | 0 % | négatif |

*Données estimatives établies à partir des cours et publications disponibles au 21 août 2026. Les multiples de Bloom Energy sont calculés sur la guidance 2026 (CA 3,9-4,2 Mds$, BPA non-GAAP 2,55-2,85 $) ; sur les bénéfices GAAP des douze derniers mois, le P/E dépasse 250x. À affiner sur filings SEC directs.*

---

### Analyse comparative

**GE Vernova — le concurrent structurel, pas le concurrent immédiat**
GEV domine la turbine à gaz, la solution que Morgan Stanley identifie comme le plus gros contributeur potentiel (15 à 20 GW d'ici 2028) au comblement du déficit de puissance. Son carnet de commandes et réservations de créneaux atteint **116 GW** au T2 2026, avec une cible d'au moins 125 GW à fin d'année, et un carnet total de **176 Mds$**. Les commandes de matériel pour centres de données ont dépassé 5 Mds$ au seul premier semestre 2026, plus du double de l'ensemble de 2025. **Le point clé : GEV vend déjà des créneaux 2029-2030.** C'est exactement cette saturation qui crée la fenêtre de Bloom — et c'est sa fermeture qui la refermera.

**Caterpillar et Cummins — le contre-modèle de rentabilité**
CAT réalise désormais presque autant de chiffre d'affaires en production d'énergie qu'en équipement de construction. CMI, malgré une exposition réelle, reste valorisé à ~22x : le marché refuse de lui accorder une prime d'électrification. Ce sont les **miroirs de valorisation** : ils montrent à quel niveau se paie l'équipement électrique quand la croissance est de 20 à 40 % et non de 166 %.

**Vertiv — le comparable de multiple, pas de technologie**
VRT à ~52x les bénéfices anticipés, avec un carnet de 15 Mds$ et une croissance de ~31 %, constitue la borne haute « raisonnable » du complexe IA infrastructure. Bloom se paie **une fois et demie ce multiple pour une croissance quatre à cinq fois supérieure** — la question est de savoir combien de trimestres cette croissance tient.

**FuelCell Energy et Plug Power — l'avertissement**
Ce sont les cadavres du cycle précédent de la pile à combustible : promesses de décarbonation, capitaux levés, rentabilité jamais atteinte. Ils rappellent que **la chimie de la pile à combustible n'a jamais, historiquement, produit de champion durablement rentable**. Bloom vient d'y parvenir — c'est la nouveauté fondamentale de 2026, et le socle du scénario haussier.

---

### Le ratio qui compte : le prix du gigawatt livrable
Bloom se juge sur sa capacité à **convertir une empreinte industrielle en gigawatts effectivement livrés**. À ~700-800 M$ de CA annuel par gigawatt de capacité produit, l'écart entre 2 GW (fin 2026) et 5 GW (empreinte revendiquée) représente l'essentiel de la valeur actuelle du titre. Ce n'est pas un débat de multiple : c'est un débat d'exécution industrielle.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 2026 (publiés le 28 juillet 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | **1 065,4 M$** | 401,2 M$ | ~814 M$ | **+30,8 %** |
| BPA non-GAAP | **0,78 $** | 0,10 $ | 0,39 $ | **+100 %** |
| BPA dilué GAAP | 0,62 $ | (0,18) $ | — | Retournement |
| Marge brute GAAP | 33,4 % | 26,7 % | — | +668 pb |
| Rés. opér. non-GAAP | 239,6 M$ | 28,6 M$ | — | ×8,4 |
| EBITDA ajusté | 253,4 M$ | 41,2 M$ | — | ×6,1 |

**Bloom a écrasé le consensus sur les deux lignes** : +214 M$ de CA au-dessus des attentes, BPA doublé. Le résultat net attribuable aux actionnaires ordinaires atteint **196,3 M$**, contre une perte de 42,6 M$ un an plus tôt.

---

### Facteurs clés par flux

- **Produit** : 935,4 M$, **+215,4 %** — la totalité de l'accélération, tirée par les livraisons aux centres de données IA
- **Service** : 69,0 M$, marge portée à **22 %** (+977 pb) — la brique récurrente commence à devenir rentable, ce qui n'était historiquement pas le cas
- **Installation** : 51,0 M$
- **Électricité** : 9,95 M$, **−22,3 %** — extinction volontaire de l'ancien modèle de vente de kWh

**Accélération** : +42 % en séquentiel après un T1 déjà à +130,4 %. Il s'agit de la première séquence de deux trimestres à plus de 100 % de croissance dans l'histoire cotée du groupe.

---

### Évolution des marges

Le levier opérationnel est **le fait marquant du trimestre** : charges d'exploitation +48 % pour un CA +166 %. La marge opérationnelle non-GAAP passe de ~7 % à **22,5 %**, soit une expansion d'environ 1 536 points de base. Le CFO Simon Edwards attribue cet écart à la nature largement fixe des dépenses de R&D et de frais généraux, et anticipe la poursuite de cette divergence.

---

### Prévisions et perspectives — guidance relevée

| Métrique | Guidance 2026 relevée | Variation vs 2025 |
|---|---|---|
| Chiffre d'affaires | **3,9 – 4,2 Mds$** | ~+100 % (point médian) |
| Marge brute non-GAAP | ~34 % | +374 pb |
| Rés. opér. non-GAAP | **800 – 900 M$** | ×3,8 |
| BPA non-GAAP | **2,55 – 2,85 $** | ×3,6 |

La fourchette précédente était de 3,4-3,8 Mds$ ; elle-même relevée depuis 3,1-3,3 Mds$ en début d'année. **Trois relèvements successifs en trois trimestres** — c'est le signal opérationnel le plus fort du dossier. En revanche, la direction **refuse de guider le free cash-flow**, se contentant d'indiquer une conversion « forte » et une base de trésorerie d'exploitation supérieure à 375 M$.

---

### Signaux d'alerte au bilan

- **Trésorerie** : 2 666,9 M$ (plus 1,1 M$ restreint) au 30 juin 2026, contre 2 454,1 M$ fin 2025
- **Dette avec recours** : **2 475,4 M$**, dont 2 500 M$ de **notes convertibles à 0 % échéance 2030** et des *Green Notes* à 3 % (2028 / 2029). Revolving de 600 M$ non tiré
- **Position nette** : quasi neutre — mais la dette est **convertible en actions**, soit ~19,55 millions d'actions potentielles sur les seules notes à 0 %
- **Flux de trésorerie d'exploitation** : **+300,0 M$ sur le premier semestre 2026**, contre une sortie massive un an plus tôt. FCF T2 : 175 M$. C'est le test de durabilité que le titre attendait
- **Revenus différés et acomptes clients** : +211,7 M$ sur le trimestre — un signal de carnet, mais aussi un flatteur temporaire du cash
- **Contra-revenue Oracle** : le warrant exercé (2 154 231 actions émises, 324,4 M$ de juste valeur agrégée) est comptabilisé **en réduction du chiffre d'affaires** au fur et à mesure des livraisons — un frein mécanique de plusieurs centaines de millions sur le CA futur publié
- **Concentration client** : **~73 % du CA du T2 2026 attribuable à un seul client**, non lié ; sur le semestre, deux clients pèsent ~44 % et ~21 %. Au 30 juin 2026, trois clients concentrent **36 %, 34 % et 17 % des créances**

---

### Point de forme à signaler

Bloom a déposé un **10-Q/A le 29 juillet 2026**, le lendemain de la publication, pour corriger une **inversion des mentions « six mois » et « trois mois »** dans la note de concentration client. La version corrigée fait foi : **73 % sur le trimestre**, 44 % et 21 % sur le semestre. La quasi-totalité des reprises de presse s'appuie sur la version initiale, erronée.

---

### Réaction du marché

Le titre a bondi de **~26,5 %** le 30 juillet 2026 pour clôturer à 207,21 $, après avoir déjà rebondi depuis un point bas de ~163 $ fin juillet. Ce que cela indique : **le marché avait intégré le scénario Hunterbrook** (dépendance chinoise au scandium, retards de projets Oracle, qualité du carnet) et la publication a servi de démenti opérationnel. Depuis, le titre est retombé vers **~200 $** dans un contexte de repli général des valeurs d'infrastructure IA et de multiplication des recours collectifs.

**Élément inhabituel par rapport à l'historique** : c'est le **premier trimestre de l'histoire de Bloom où le résultat GAAP, l'EBITDA ajusté et le cash-flow d'exploitation sont simultanément et significativement positifs**. Sur vingt-cinq ans d'existence, c'est un basculement, pas une simple bonne saison.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — évolution 2025 → 2026

**2025** : Ton de **conquête prudente**. Le message central est l'homologation : convaincre que la pile à oxyde solide est une solution sérieuse pour les charges critiques. KR Sridhar formule la thèse du *bring your own power* : « *Bring-your-own-power est passé du slogan à la nécessité pour les hyperscalers de l'IA. Ce basculement est séculaire et croissant.* »

**T1 2026** : Ton de **validation**. Premier trimestre à plus de 100 % de croissance, formule qui devient le mantra du dossier : « *Le délai de mise sous tension est passé d'un critère de sélection à une nécessité existentielle.* » Guidance relevée à 3,4-3,8 Mds$.

**T2 2026** : Ton de **revendication de position dominante**. Sridhar : les clients qui se tournaient par défaut vers les technologies de combustion **choisissent désormais Bloom de manière proactive** ; tous les grands hyperscalers américains et plus d'une dizaine de *neoclouds*, laboratoires d'IA et opérateurs de colocation ont validé les solutions. Le mot employé est **« standard »** — Bloom serait devenu *le* standard de l'alimentation sur site pour les usines d'IA.

---

### Priorités répétées du management

**1. Le temps comme argument économique** — La direction quantifie systématiquement : un centre de 1 GW génère 12 à 24 Mds$ de revenus annuels pour son exploitant, un mois de retard coûte 1 à 2 Mds$. Le corollaire, formulé au T2 2026, est **un argument de prix** : les clients peuvent accepter des tarifs plus élevés parce qu'ils démarrent plus tôt l'amortissement de leur matériel de calcul. Morgan Stanley y a vu un signal positif sur le *pricing*.

**2. Le levier opérationnel** — Simon Edwards, arrivé comme CFO en avril 2026 (ex-CEO de Groq, ex-CFO de GE Digital), en fait sa signature : charges d'exploitation croissant durablement moins vite que le CA, base fixe de R&D et de frais généraux.

**3. La réponse au scandium** — Après le rapport Hunterbrook du 8 juillet 2026, la direction a répondu par un 8-K et une note technique publique. Trois messages martelés au T2 : quantité de scandium économiquement récupérable suffisante à l'échelle mondiale, **visibilité sur 25 GW de déploiements**, absence de dépendance à la Chine. Le reste est déclaré « propriétaire ». **C'est le point de communication le plus défensif du dossier — et le moins vérifiable de l'extérieur.**

**4. La protection contractuelle contre les retards** — Interrogé sur l'exposition financière aux décalages de projets, Edwards répond que les contrats comportent des protections fortes, que les équipements sont **redéployables** vers d'autres sites, et que **les partenaires financiers sont tenus de prendre livraison**. La guidance 2026 ne dépend d'aucun projet unique.

**5. Le refus de guider le free cash-flow** — Question récurrente des analystes (Evercore notamment), réponse constante : pas de guidance formelle de FCF, seulement une indication de conversion. Avec 2,7 Mds$ de trésorerie et aucune politique de retour aux actionnaires, **l'allocation du capital reste la zone la plus floue du discours.**

---

### Analyse du sentiment

- **Confiance** : très élevée et en hausse continue. Trois relèvements de guidance en trois trimestres, chacun accompagné d'un langage plus affirmatif.
- **Registre** : **promotionnel**. Le vocabulaire (« standard », « les clients nous choisissent de manière proactive ») dépasse le registre descriptif habituel d'un équipementier. Sur un titre déjà valorisé pour la perfection, c'est un facteur d'amplification dans les deux sens.
- **Transparence** : bonne sur les métriques opérationnelles, **délibérément partielle sur deux points** — la composition exacte de la chaîne d'approvisionnement en scandium et la conversion en trésorerie.
- **Cohérence** : remarquable. La thèse n'a pas dévié depuis 2025 : le temps est le produit, la puissance est la contrainte, la pile à oxyde solide est la réponse.

> **À lire entre les lignes** : le management vend une **position de marché** (« le standard ») plus qu'un carnet contractuel. Or l'écart entre le *backlog* revendiqué (~20 Mds$) et les obligations de prestation restantes auditées (~493 M$ au 31 mars 2026) signifie que cette position doit être **reconfirmée commande par commande**. Tant que la pénurie de puissance dure, le discours tient. Il devient fragile le jour où les turbines rattrapent leur retard.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### KR Sridhar — Fondateur, Président du conseil et Directeur Général

**Bilan réel** : ancien professeur d'ingénierie aérospatiale et mécanique à l'Université d'Arizona, directeur du Space Technologies Laboratory, ancien conseiller de la NASA, membre de la National Academy of Engineering. Il a fondé Bloom en 2001 et développé la plateforme à oxyde solide **et l'outillage nécessaire à sa fabrication**. Ce qu'il a accompli, chiffré :

- Passage de 4 fondateurs à plus de 2 000 salariés
- Introduction en Bourse en 2018
- CA porté de ~0 à **2,02 Mds$ en 2025**, puis à un rythme annualisé de ~4 Mds$ en 2026
- **Premier bénéfice GAAP significatif au T2 2026** — après vingt-cinq ans de pertes
- Capacité industrielle portée vers 2 GW/an, empreinte revendiquée à 5 GW

**Ancienneté** : **25 ans** au poste. C'est une durée exceptionnelle, qui est à la fois l'atout et le risque du dossier.

**Participation et alignement** : détient environ **1,4 % du capital**, soit ~2,7 millions d'actions détenues directement plus ~1,1 million via des trusts — une valeur de l'ordre de 700 M$ à 800 M$ aux cours actuels. Rémunération totale annuelle d'environ **3,5 M$** (≈27 % de fixe). Élément notable : une attribution de performance de **300 000 actions début 2026 dont il a volontairement différé la réception jusqu'en janvier 2030**.

**Le contrepoint** : Sridhar a **vendu 200 000 actions le 24 février 2026 pour ~34 M$**, et affiche **21 transactions Form 4 sur cinq ans dont zéro achat**. Sur l'ensemble des dirigeants, les initiés ont été **vendeurs nets d'environ 68 M$ sur douze mois**, avec 32 ventes et 0 achat sur six mois selon les relevés de marché. Shawn Soderberg (directrice juridique) a notamment cédé ~398 000 actions sur un trimestre. À l'inverse, **Aman Joshi (directeur commercial) a acquis plus d'un million d'actions** sur la même période — le seul signal d'achat significatif.

---

### Équipe dirigeante

- **Simon Edwards, CFO (depuis avril 2026)** — ex-CEO puis CFO de **Groq**, où il a piloté la montée en charge et l'accord de licence avec Nvidia ; auparavant CFO de Conga, ServiceMax et **GE Digital**. Profil rare : discipline financière SaaS greffée sur une culture industrielle GE
- **Ravi Prasher, CTO** ; **Satish Chitoori, COO** ; **Aman Joshi, CCO** ; **Shawn Soderberg, directrice juridique**
- **Ancienneté moyenne de l'équipe : ~3 ans** ; du conseil : ~6,9 ans

**Le point de vigilance** : le prédécesseur d'Edwards, **Dan Berenbaum, a démissionné brutalement en mai 2025 après douze mois de fonction**. Deux CFO en dix-huit mois dans une entreprise en hypercroissance est un signal à surveiller, même si le profil du remplaçant est nettement supérieur.

---

### Allocation du capital

| Décision | Nature | Lecture |
|---|---|---|
| Notes convertibles 0 % (2 500 M$, éch. 2030) | Financement | **Coût nominal nul**, mais dilution différée de ~19,55 M d'actions |
| Green Notes 3 % (2028 / 2029) | Financement | Remboursement en cours |
| Capacité 2 GW → empreinte 5 GW | Capex | Le pari central. Capex T2 2026 : 51,6 M$ seulement |
| Warrant Oracle (3,53 M d'actions à 113,28 $) | Commercial | Aligne Oracle sur le cours, mais **324,4 M$ comptabilisés en réduction de CA futur** |
| Dividende / rachats | **Aucun** | Réinvestissement intégral |

**Verdict** : l'émission de convertibles à **0 % pendant que le cours flambait** est une opération de financement remarquable — capital quasi gratuit obtenu au sommet de la valorisation. C'est le meilleur acte d'allocation de capital du dossier. En revanche, avec **2,7 Mds$ de trésorerie et aucune guidance de FCF**, la question « qu'allez-vous faire de cet argent » reste sans réponse publique.

**ROE** : négatif sur cinq ans (pertes structurelles), positif depuis 2026 (~22 % TTM). La série est trop courte pour conclure.

---

### Signaux d'alerte

- **Restatement 2020** : Bloom a dû retraiter ses comptes 2016-2019 (reclassement de contrats de services managés d'opérations en location-financement), suivi d'un recours collectif au titre de la Section 11. L'action visant l'auditeur PwC a finalement été rejetée. **Un antécédent de retraitement comptable reste un antécédent.**
- **Recours collectif en cours (juillet-août 2026)** : *Nevins v. Bloom Energy Corporation*, N.D. Cal., visant la société **et certains de ses dirigeants**, pour déclarations prétendument trompeuses sur l'exposition chinoise de la chaîne d'approvisionnement en scandium. Période de classe : 27 février 2025 – 8 juillet 2026
- **Comportement promotionnel** : le vocabulaire des conférences est nettement au-dessus de la moyenne sectorielle
- **Ventes d'initiés massives et unilatérales** sur douze mois
- **Type de dirigeant** : **fondateur-technologue**, pas gestionnaire professionnel. À ce stade — passage de l'invention à l'industrialisation de masse — c'est précisément le moment où ce profil est historiquement le plus exposé, et où la qualité du CFO devient déterminante`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours

### Contexte
Le titre a été multiplié par plus de **dix en dix-huit mois** : de ~15 $ mi-2025 à un plus haut de séance de **351,28 $ le 25 juin 2026** (plus haut de clôture 345,85 $ le 22 juin), avant de retomber vers **~201 $** le 21 août 2026. Le **bêta est de 3,82** — c'est l'un des profils les plus volatils du S&P 1500. Le cours ne réagit pas aux fondamentaux courants mais au **flux d'annonces de contrats et au sentiment sur l'investissement en IA**.

### Hausses significatives (> 5 %)

**Octobre 2025 — Cadre Brookfield de 5 Mds$** : première validation par un investisseur en infrastructure de premier plan, dans le cadre de son fonds dédié à l'infrastructure IA. Le titre change de catégorie aux yeux du marché.

**Février 2026 — Résultats 2025 et guidance** : BPA T4 à 0,45 $ contre 0,30 $ attendu, CA 2025 à 2,02 Mds$ (+37,3 %), carnet annoncé à ~20 Mds$ (+65 %) dont ~6 Mds$ de produit (+140 %). Le titre atteint 180,90 $ le 25 février.

**13 avril 2026 — Accord Oracle porté à 2,8 GW** : +14 % en séance, +15 % en pré-ouverture, franchissement des 50 Mds$ de capitalisation. Émission simultanée d'un warrant Oracle sur 3,53 M d'actions à 113,28 $.

**28 avril 2026 — T1 2026** : CA 751,1 M$ (+130,4 %), **39 % au-dessus du consensus**, guidance relevée à 3,4-3,8 Mds$. **+27,2 % en une séance.**

**30 juin 2026 — Brookfield quintuplé à 25 Mds$** : combiné à la décision d'Oracle de faire de Project Jupiter (Nouveau-Mexique) un campus **100 % Bloom** — jusqu'à 2,45 GW — en remplacement des turbines à gaz et du secours diesel initialement prévus. RBC qualifie l'extension de supérieure aux attentes. Le titre inscrit son sommet historique fin juin.

**30 juillet 2026 — T2 2026** : premier trimestre milliardaire, BPA doublé vs consensus, guidance relevée à 3,9-4,2 Mds$. **+26,5 %**, clôture à 207,21 $.

---

### Baisses significatives (> 5 %)

**8 juillet 2026 — Rapport Hunterbrook « Bloom's Big Lie »** : le vendeur à découvert affirme avoir tracé **quatre routes liées à la Chine** dans la chaîne d'approvisionnement en scandium (expéditions directes vers l'usine du Delaware, céramiques et poudres transitant par la Thaïlande, le Japon et la Corée du Sud), et cite un producteur chinois se présentant comme le premier fournisseur de Bloom. Le titre perd 15,28 $, soit **−5,7 %**, à 254,29 $, après avoir cédé jusqu'à 12 % en séance. Le rapport conteste également la qualité du carnet et évoque des retards sur les projets Oracle.

**Juillet 2026 — Correction de −30 %** : combinaison du rapport, de l'implosion du fonds *Situational Awareness* (dont les principales positions étaient au cœur du décrochage IA de juillet) et de la volatilité générale des valeurs d'infrastructure IA. Le titre touche **~163 $ fin juillet**, soit une division par deux depuis le sommet de juin.

**Août 2026 — Vague de recours collectifs** : dépôts successifs (Robbins Geller, Rosen, Kirby McInerney, Levi & Korsinsky, Bernstein Liebhard, Kaplan Fox), date limite de désignation du demandeur principal au **28 septembre 2026**. Le 18 août, le titre perd **~10 %** en une séance sur fond de remontée des taux longs et d'inquiétudes juridiques.

---

### Facteurs structurels

- **Corrélation au complexe IA** : le titre se comporte comme une option à fort levier sur l'investissement des hyperscalers, aux côtés de Nebius, CoreWeave et Vertiv
- **Sensibilité aux taux longs** : valeur de croissance à duration très longue — toute tension obligataire comprime le multiple
- **Événementiel contractuel** : chaque annonce de gigawatts déplace le titre de 10 à 25 %
- **Positionnement des fonds** : Goldman Sachs a augmenté sa position de 350 % au T1 2026 ; Citadel a en revanche dénoué plus de 80 % du risque lié au portefeuille *Situational Awareness*, dont Bloom faisait partie
- **Objectif de cours consensuel** : ~275 $ (fourchette 97 $ – 390 $). **L'amplitude de cette fourchette — un facteur 4 — est la mesure la plus honnête de l'incertitude du dossier**`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement
Bloom Energy vient de basculer en rentabilité. La base de comparaison est donc **très courte et très instable** : le BPA non-GAAP passe de 0,28 $ (2024) à 0,76 $ (2025) puis à une guidance de 2,55-2,85 $ (2026). Les projections ci-dessous sont des **scénarios**, pas des prévisions de précision. Un modèle plus serré exigerait la ventilation des livraisons en gigawatts par trimestre, non publiée.

### Hypothèses de modélisation

**Croissance sectorielle** : Morgan Stanley chiffre à ~38 GW le déficit de puissance des centres de données américains d'ici 2028, dont seulement une trentaine couverts par les projets en construction et les capacités réseau contractées. Les turbines à gaz devraient en couvrir 15 à 20 GW, laissant un espace substantiel à la production sur site rapide.

**Gains de parts de marché** : Bloom revendique la position de standard chez les hyperscalers. Morgan Stanley modélise **1,8 GW de déploiements en 2027 et 4,8 GW en 2028**. À ~700-800 M$ de CA par gigawatt, cela cadre une trajectoire de CA de ~6 Mds$ (2027) à ~9 Mds$ (2028).

**Hausses de prix** : levier réel et reconnu par la direction — les clients paient une prime pour l'antériorité de mise sous tension. Effet estimé : +2 à +5 %/an tant que la pénurie dure, nul ou négatif ensuite.

**Pressions sur les coûts** : montée en cadence des fournisseurs (MTAR, filière scandium), coûts de qualification, éventuelle prime d'approvisionnement hors Chine. Marge brute supposée stabilisée entre 34 % et 37 %.

**Levier opérationnel** : c'est le moteur principal. Charges d'exploitation à +48 % pour un CA à +166 % au T2 2026. Hypothèse : marge opérationnelle non-GAAP de ~21 % (2026) → 24-26 % (2028).

**Coûts de financement** : faibles — les 2,5 Mds$ de convertibles portent un coupon de **0 %**. Produits financiers sur 2,7 Mds$ de trésorerie partiellement compensatoires.

**Dilution** : facteur clé et systématiquement sous-estimé. Conversion potentielle des notes 2030 (**~19,55 M d'actions**), actions déjà émises sur le warrant Oracle (2,15 M), rémunération en actions élevée (**56,4 M$ au seul T2 2026**). Hypothèse : **~320 M d'actions diluées en 2026 → ~335 M en 2028**, soit ~2 %/an de dilution.

---

### Scénarios de BPA

| Exercice | BPA non-GAAP | Croissance | P/E au cours actuel (~201 $) |
|---|---|---|---|
| 2024 (réalisé) | **0,28 $** | — | — |
| 2025 (réalisé) | **0,76 $** | +171 % | — |
| **2026E** (guidance) | **2,55 – 2,85 $** | **×3,6** | **~71 – 79x** |
| **2027E** (base) | **3,80 – 4,50 $** | +45 à +60 % | **~45 – 53x** |
| **2028E** (base) | **5,00 – 6,50 $** | +30 à +45 % | **~31 – 40x** |

*Rappel : sur les bénéfices GAAP des douze derniers mois (BPA ~0,74 $), le P/E ressort au-delà de 250x. L'écart GAAP / non-GAAP tient essentiellement à la rémunération en actions.*

### Sensibilité

- **Scénario haussier** (4,8 GW livrés en 2028, marge opérationnelle 26 %, pas de rupture d'approvisionnement) : BPA 2028 vers **7,00 $** → P/E 2028 ~29x. Le titre est alors bon marché et l'objectif haut de 390 $ devient défendable
- **Scénario de base** : BPA 2028 ~5,75 $ → P/E 2028 ~35x. Valorisation exigeante mais soutenable si la croissance reste à deux chiffres élevés au-delà de 2028
- **Scénario baissier** (cycle IA qui décélère en 2027, retours des turbines à gaz, contentieux sur le scandium contraignant l'approvisionnement) : BPA 2028 ~3,00 $ → P/E 2028 ~67x, **avec compression simultanée du multiple**. C'est là que le risque est asymétrique : le titre ne baisserait pas de 30 %, il baisserait de 60 à 70 %

**Conclusion** : la valorisation actuelle n'exige pas seulement que Bloom exécute — elle exige que **le cycle d'investissement IA tienne au moins jusqu'en 2029**. Le BPA est le bon indicateur pour 2028 ; d'ici là, les juges de paix sont les **gigawatts livrés** et la **conversion du carnet revendiqué en obligations de prestation auditées**.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Le seul acteur capable de livrer de la puissance à l'échelle du gigawatt en quelques mois** : les files de raccordement atteignent 5 à 7 ans, les créneaux de turbines à gaz sont vendus jusqu'en 2029-2030. Bloom a livré son premier système Oracle en **55 jours**. Ce n'est pas un avantage marketing : c'est une **rente d'arbitrage temporel**, et elle est aujourd'hui sans équivalent industriel.

**2. Pérennité des barrières** : vingt-cinq ans de courbe d'apprentissage sur une chimie céramique difficile, homologation obtenue chez **tous les grands hyperscalers américains**, fabrication américaine dans un contexte de sécurisation des chaînes critiques. Un nouvel entrant capitalisé ne rattrape pas cela en trois ans.

**3. Levier opérationnel spectaculaire et déjà prouvé** : CA +166 % pour des charges d'exploitation à +48 % au T2 2026. Marge opérationnelle non-GAAP à **22,5 %**, contre ~7 % un an plus tôt. Chaque dollar de croissance supplémentaire tombe massivement au résultat — c'est la surprise de bénéfices structurelle du dossier, et elle a produit trois relèvements de guidance en trois trimestres.

**4. Le carnet et le capital de déploiement** : ~20 Mds$ de carnet revendiqué, cadre **Brookfield porté de 5 à 25 Mds$**, accord-cadre Oracle jusqu'à 2,8 GW, accord AEP jusqu'à 1 GW (~2,65 Mds$). Le capital tiers **supprime l'obstacle du bilan client**.

**5. Allocation du capital de premier ordre** : 2,5 Mds$ levés en convertibles à **0 % de coupon** au sommet de la valorisation — du capital gratuit. Trésorerie de 2,7 Mds$, position nette quasi neutre, cash-flow d'exploitation de +300 M$ au premier semestre 2026.

**6. Facteur structurel sous-estimé** : la visibilité revendiquée sur **25 GW de déploiements** représente, à 700-800 M$ de CA par gigawatt, un potentiel cumulé de plusieurs dizaines de milliards de dollars — hors revenus de service et de remplacement de piles, qui constituent la rente de long terme.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques susceptibles de nuire durablement à l'activité

**1. La concentration client est un risque existentiel, pas un risque de marge** : **un seul client, non lié, a représenté ~73 % du chiffre d'affaires du deuxième trimestre 2026** — chiffre confirmé par le 10-Q/A du 29 juillet 2026. Sur le semestre, deux clients pèsent ~44 % et ~21 %.  Et les États-Unis concentrent 90 % du CA. Un décalage de calendrier chez Oracle — et *TheStreet* a déjà rapporté un problème de canalisation susceptible d'affecter le planning de Project Jupiter — ne réduit pas la croissance : il l'efface. Aucune diversification géographique ou sectorielle n'amortit ce choc.

**2. La fenêtre temporelle se refermera** : GE Vernova affiche 116 GW de carnet et réservations de créneaux, avec une cible de 125 GW à fin 2026. Toute la valeur de Bloom vient de la saturation de ce carnet. Quand les turbines rattrapent — vers 2028-2029 — l'argument du délai s'érode, et Bloom redevient un équipementier comparé à CAT et CMI, qui se paient 22 à 30 fois les bénéfices.

**3. Le risque juridique et d'approvisionnement sur le scandium** : le recours collectif *Nevins v. Bloom Energy* vise la société **et ses dirigeants**. Au-delà du coût financier, l'enjeu réel est **opérationnel** : si la dépendance chinoise est avérée, elle expose Bloom à un levier géopolitique direct sur son intrant le plus critique, précisément au moment de la montée en cadence.

### Compression des marges ou ralentissement du CA

Trois mécanismes cumulables : le *contra-revenue* du warrant Oracle (324,4 M$ comptabilisés en réduction de CA au fil des livraisons), une prime d'approvisionnement si la chaîne scandium doit être reconfigurée hors Chine, et une normalisation du *pricing* dès que la pénurie de puissance se détend.

### Attentes trop élevées

À ~75x le BPA 2026 attendu et ~14x le chiffre d'affaires, le titre intègre une exécution parfaite. **Les RPO auditées (~493 M$ au 31 mars 2026) représentent moins de 2,5 % du carnet revendiqué de 20 Mds$** — un écart d'un ordre de grandeur que même BMO, pourtant non hostile, a signalé.

### Analyse pré-mortem
Nous sommes fin 2028, le titre vaut 70 $. Que s'est-il passé ? Le cycle d'investissement IA a décéléré courant 2027 ; deux hyperscalers ont reporté des campus ; les turbines à gaz sont redevenues disponibles à un coût du kWh inférieur ; Bloom a livré 2,5 GW au lieu des 4,8 GW modélisés ; le levier opérationnel a joué **en sens inverse** sur une base de coûts fixes désormais dimensionnée pour 5 GW ; la conversion des notes 2030 a dilué de 6 % ; et le multiple est passé de 75x à 20x sur un BPA de 3,50 $. Aucune de ces hypothèses n'est extravagante prise isolément.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : les deux camps se trompent d'objet. Les haussiers valorisent Bloom comme une plateforme technologique alors que **c'est une usine** — avec des délais d'outillage, une qualification fournisseur et une physique céramique qui ne s'accélèrent pas par décret. Les baissiers, eux, traitent le titre comme la énième bulle de la pile à combustible, alors que **Bloom vient de faire ce que FuelCell et Plug n'ont jamais réussi en vingt ans : gagner de l'argent en GAAP et générer du cash**. La vérité inconfortable est que la thèse ne se joue ni sur la technologie ni sur la comptabilité, mais sur **une seule variable exogène que ni Bloom ni les analystes ne contrôlent — la durée du cycle d'investissement des hyperscalers.** Une position doit donc être dimensionnée comme une option sur ce cycle, jamais comme une conviction de qualité.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Écart carnet / obligations de prestation restantes — RISQUE ÉLEVÉ
C'est **le signal numéro un**. Bloom communique un *backlog* d'environ **20 Mds$** (~6 Mds$ produit, ~14 Mds$ service). Ses **RPO auditées au sens d'ASC 606** au 31 mars 2026 s'élevaient à **441,1 M$** (produit et installation) et **51,5 M$** (service). Le carnet communiqué représente donc **plus de 40 fois les obligations contractuelles fermes reconnues dans les états financiers**.

**À surveiller** : la progression trimestrielle des RPO. Si le carnet croît pendant que les RPO stagnent — ce que relevait déjà une analyse post-T2 — cela signifie que le carnet est composé d'accords-cadres non contraignants et non de commandes fermes.

### Reconnaissance du revenu et *contra-revenue* Oracle — RISQUE MODÉRÉ À ÉLEVÉ
Le warrant émis à Oracle (3,53 M d'actions à 113,28 $), exercé sans décaissement le 9 avril 2026, a donné lieu à l'émission de **2 154 231 actions** pour une juste valeur agrégée de **324,4 M$**, comptabilisée **en réduction du chiffre d'affaires** au rythme des livraisons.

**Ce que cela implique** : une part du CA futur publié sera **mécaniquement amputée**, et un observateur non averti attribuera cette baisse à une faiblesse commerciale. C'est comptablement correct et économiquement une remise commerciale payée en actions — mais cela **brouille durablement la lisibilité de la croissance publiée**.

### Antécédent de retraitement comptable — RISQUE MODÉRÉ (historique)
Bloom a **retraité ses états financiers 2016-2019** en 2020, pour reclassement de contrats de services managés (*Managed Services Agreements*) de locations simples en locations-financement, entraînant une révision à la baisse du CA publié et un recours collectif au titre de la Section 11. L'action visant l'auditeur (PwC) a été rejetée.

**Lecture** : ce n'est pas un signal actif, mais un antécédent qui abaisse le seuil de bénéfice du doute sur les jugements comptables complexes.

### Rémunération en actions — RISQUE ÉLEVÉ SUR LA QUALITÉ DU BÉNÉFICE
**56,4 M$ de SBC au seul T2 2026**, soit ~5,3 % du chiffre d'affaires du trimestre. C'est le principal écart entre le BPA GAAP (0,62 $) et le BPA non-GAAP (0,78 $), soit **~20 % de l'écart de bénéfice**.

**À surveiller** : le ratio SBC / CA. S'il ne décroît pas à mesure que le CA double, la « rentabilité » non-GAAP restera partiellement financée par la dilution des actionnaires.

### Dette convertible et dilution — RISQUE MODÉRÉ
**2 500 M$ de notes à 0 % échéance 2030**, convertibles en **~19,55 M d'actions**, plus des *Green Notes* à 3 % (2028 / 2029). Le coupon nul flatte le résultat financier ; le prix se paiera en actions.

**À surveiller** : le nombre d'actions dilué publié trimestre après trimestre, et l'évaluation trimestrielle de l'éligibilité à conversion mentionnée dans les filings.

### Concentration client et créances — RISQUE ÉLEVÉ
**~73 % du CA du T2 2026 issu d'un seul client**, explicitement **non lié** ; sur le premier semestre, deux clients pèsent **~44 % et ~21 %** (le second étant la partie liée). Au 30 juin 2026, trois clients concentrent **36 %, 34 % et 17 % des créances**. C'est une exposition de contrepartie et de calendrier, pas seulement de mix.

**Point de méthode ajouté par la société** : le 10-Q précise désormais que « client » désigne **la contrepartie contractuelle, qui peut dans certaines transactions être un véhicule de financement de projet plutôt que l'utilisateur final** — et renvoie explicitement au cadre Brookfield. Autrement dit, **le client à 73 % n'est pas nécessairement l'exploitant du centre de données**, et son identité n'est pas communiquée.

**Erratum de la société** : un **10-Q/A déposé le 29 juillet 2026** corrige une inversion des périodes « six mois » / « trois mois » dans cette note. Une note de concentration client publiée à l'envers puis rectifiée en vingt-quatre heures n'est pas anodine sur un dossier où la concentration est le premier risque.

**À surveiller** : la rotation des créances clients et tout allongement des délais de paiement, qui précéderait mécaniquement une révision de guidance.

### Revenus différés et acomptes clients — POINT DE VIGILANCE
Le cash-flow d'exploitation du T2 (+226,4 M$) est **soutenu par une hausse de 211,7 M$ des revenus différés et acomptes clients**. C'est un signal de carnet positif, mais **il flatte la conversion en trésorerie du trimestre**. Un cash-flow porté par les acomptes n'est pas un cash-flow porté par le résultat.

### Parties liées — RISQUE FAIBLE, EN AMÉLIORATION
**SK ecoplant** détient plus de 10 % du capital et fut historiquement à la fois actionnaire et client. Le CA avec parties liées est tombé à **0,26 % du total** au T2 2026 — un assainissement notable, qui retire l'un des principaux griefs baissiers historiques.

### Engagements conditionnels — RISQUE ÉLEVÉ ET ACTIF
**Recours collectif fédéral en valeurs mobilières** : *Nevins v. Bloom Energy Corporation*, n° 26-cv-07944 (N.D. Cal.), déposé le 30 juillet 2026, visant la société et certains dirigeants pour violations du Securities Exchange Act de 1934. Période de classe : **27 février 2025 – 8 juillet 2026**. Date limite de désignation du demandeur principal : **28 septembre 2026**. Au moins sept cabinets ont annoncé des actions ou enquêtes parallèles.

### Absence de guidance de free cash-flow — POINT DE VIGILANCE
La direction refuse explicitement de guider le FCF, malgré des questions répétées d'analystes. Sur une société en hypercroissance capitalistique disposant de 2,7 Mds$ de trésorerie, **c'est une omission volontaire qui mérite d'être notée comme telle**.

---

### Verdict global
**Risque comptable : MODÉRÉ À ÉLEVÉ — par nature du modèle et du moment.** Il n'y a **aucune fraude identifiée** ni aucune anomalie caractérisée dans les états financiers, et la société a explicitement et catégoriquement rejeté les allégations comptables du rapport Hunterbrook dans un 8-K du 9 juillet 2026. Mais le dossier cumule structurellement : une métrique commerciale phare (le carnet) sans équivalent audité, un antécédent de retraitement, une SBC élevée, une dilution différée par convertibles, une concentration client extrême et un contentieux actif. **La comptabilité n'est pas le problème ; c'est la distance entre le récit et les chiffres audités qui l'est.**`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour KR Sridhar et l'équipe Bloom Energy

### Stratégie et avantage concurrentiel

**1.** Vous communiquez un carnet d'environ 20 Mds$ ; vos obligations de prestation restantes auditées s'élevaient à ~493 M$ au 31 mars 2026. **Donnez-nous la définition exacte du carnet, le pourcentage sous contrat ferme avec engagement de prise de livraison, et la trajectoire trimestrielle des RPO sur les huit derniers trimestres.**

**2.** Votre avantage tient au délai de mise sous tension. GE Vernova vise 125 GW de carnet et réservations de créneaux à fin 2026. **À quelle année anticipez-vous que la disponibilité des turbines à gaz redevienne normale, et que devient votre pouvoir de prix à ce moment-là ?**

**3.** Vous affirmez être devenus « le standard » de l'alimentation sur site pour les usines d'IA. **Quelle part de marché mesurable cela représente-t-il en gigawatts commandés en 2026, et face à quelles technologies avez-vous perdu des appels d'offres cette année ?**

### Concentration et dépendance

**4.** Un seul client a représenté ~73 % de votre chiffre d'affaires au deuxième trimestre 2026. **Qui est-il — utilisateur final ou véhicule de financement de projet ? Quel est votre plan chiffré de diversification, et à quel horizon aucun client ne pèsera-t-il plus de 25 % du CA ?**

**5.** Un retard sur Project Jupiter a été rapporté publiquement. **Quel pourcentage de votre guidance 2026 et de votre modèle 2027 dépend de ce seul campus, et quels équipements exactement sont redéployables sans coût de reconfiguration ?**

**6.** Vous dépendez d'un nombre restreint de fournisseurs, dont MTAR Technologies pour des composants critiques. **Quel est votre plan de double sourcing, et quel serait l'impact sur vos livraisons d'une défaillance de six mois de votre principal fournisseur ?**

### Le scandium

**7.** Vous affirmez avoir une visibilité sur 25 GW de production sans dépendance à la Chine. **Publiez le pourcentage d'oxyde de scandium provenant de fournisseurs dont vous avez audité l'origine de la matière première jusqu'à la mine**, et non seulement l'origine de l'expédition.

**8.** Hunterbrook allègue des flux transitant par la Thaïlande, le Japon, la Corée du Sud, l'Inde et Taïwan. **Auditez-vous l'origine amont de vos fournisseurs intermédiaires, et depuis quelle date ce processus est-il en place ?**

**9.** Si la Chine imposait demain un contrôle à l'exportation sur l'oxyde de scandium et ses dérivés, **combien de mois de production sécurisée avez-vous, et quel serait le surcoût matière d'un approvisionnement intégralement hors Chine ?**

### Allocation du capital et rentabilité

**10.** Vous disposez de 2,7 Mds$ de trésorerie et refusez de guider le free cash-flow. **Quelle est votre politique d'allocation du capital sur trois ans : capacité, intégration amont, acquisitions, ou retour aux actionnaires ?**

**11.** Vos notes convertibles à 0 % représentent ~19,55 M d'actions potentielles. **Quelle dilution totale, warrant Oracle et SBC compris, un actionnaire d'aujourd'hui doit-il anticiper d'ici 2030 ?**

**12.** La SBC atteint 56,4 M$ au seul T2 2026. **À quel horizon ce poste passe-t-il sous 3 % du chiffre d'affaires, et acceptez-vous d'être jugés sur le BPA GAAP plutôt que non-GAAP ?**

### Risques et gouvernance

**13.** Vous et vos dirigeants avez vendu pour ~68 M$ nets d'actions sur douze mois, avec zéro achat sur cinq ans de votre part. **Quel message pensez-vous que cela envoie à un actionnaire qui achète le titre à 75 fois les bénéfices anticipés ?**

**14.** Deux directeurs financiers en dix-huit mois, avec un départ abrupt en mai 2025. **Que s'est-il passé, et qu'avez-vous changé dans la gouvernance financière depuis ?**

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le carnet de 20 milliards est une métrique marketing, pas une obligation contractuelle

C'est l'attaque centrale, et elle est arithmétique. Bloom communique ~20 Mds$ de carnet. Ses **obligations de prestation restantes auditées** — la seule mesure normée par ASC 606 des revenus issus de contrats qui **engagent** effectivement le client — s'élevaient à **441,1 M$ pour le produit et l'installation, et 51,5 M$ pour le service au 31 mars 2026**. Soit **moins de 2,5 % du chiffre annoncé**.

Un accord-cadre « jusqu'à 2,8 GW » n'est pas une commande de 2,8 GW. Un cadre de financement Brookfield « jusqu'à 25 Mds$ » n'est pas 25 Mds$ de revenus. **Les haussiers valorisent des intentions au multiple de contrats fermes.** BMO, sans être hostile au dossier, l'a signalé explicitement.

### 2. La concentration des revenus est le vrai risque, et il est extrême

**~73 % du chiffre d'affaires du deuxième trimestre 2026 provient d'un seul client** — et la société ne le nomme pas. Au 30 juin 2026, trois clients concentrent 36 %, 34 % et 17 % des créances. Il n'existe aucun amortisseur : 90 % du CA aux États-Unis, pas de diversification sectorielle (le legacy hôpitaux/campus est devenu résiduel), pas de diversification technologique. Pire : le 10-Q précise que « client » peut désigner **un véhicule de financement de projet plutôt que l'utilisateur final** — l'investisseur ne sait donc même pas avec certitude à quel risque de contrepartie il est exposé.

Que se passe-t-il si Oracle — dont les engagements en centres de données font eux-mêmes l'objet d'un débat de financement — décale de deux trimestres ? La croissance ne ralentit pas : elle s'inverse. Et un retard sur Project Jupiter a **déjà** été rapporté publiquement.

### 3. L'avantage concurrentiel est une fenêtre, pas un fossé

Les haussiers parlent de moat. Il n'y en a pas au sens économique : pas d'effet de réseau, pas de coût de changement significatif d'un campus au suivant, pas de propriété intellectuelle bloquante. Il y a **une pénurie temporaire de puissance disponible** — et Bloom en est le principal bénéficiaire.

Or GE Vernova affiche 116 GW de carnet et réservations, cible 125 GW à fin 2026, et augmente ses capacités. Caterpillar réalise désormais presque autant de CA en production d'énergie qu'en construction. **Le jour où une turbine à gaz se livre en douze mois au lieu de quarante-huit, la prime de Bloom disparaît** — et le marché l'appliquera instantanément au multiple, sans attendre que la croissance décélère.

### 4. Le concurrent que les optimistes sous-estiment : ce n'est pas FuelCell, c'est le réseau lui-même

L'obsession du marché porte sur les piles à combustible concurrentes — un faux débat, elles sont sans échelle. Le vrai concurrent est **l'électricité de réseau au prix de gros**. Bloom vend de l'électricité produite à partir de gaz naturel, au niveau du site, sans les économies d'échelle d'une centrale. Structurellement, **son kWh coûte plus cher**. Les clients paient cette prime pour le temps. Dès que les utilities, les turbines et les réservations de créneaux comblent le déficit — et 60 Mds$ de capitaux s'y emploient — la proposition de valeur redevient un arbitrage de coût que Bloom perd.

### 5. La comptabilité n'est pas frauduleuse — elle est optiquement généreuse

Aucune fraude identifiée. Mais : **56,4 M$ de SBC en un trimestre** (~5,3 % du CA) creusant l'écart entre 0,62 $ de BPA GAAP et 0,78 $ non-GAAP ; un cash-flow d'exploitation trimestriel **soutenu à hauteur de 211,7 M$ par la hausse des revenus différés et acomptes** ; un **antécédent de retraitement 2016-2019** ; et un *contra-revenue* Oracle de 324,4 M$ qui viendra amputer le CA publié des prochains trimestres. Ajoutez le refus explicite de guider le free cash-flow malgré 2,7 Mds$ de trésorerie.

### 6. Le scandium : le risque que personne ne peut vérifier

Bloom affirme ne pas dépendre de la Chine. Hunterbrook affirme avoir tracé quatre routes liées à la Chine, dont des expéditions directes vers l'usine du Delaware, et cite un producteur chinois se présentant comme le premier fournisseur de Bloom. La société a catégoriquement rejeté ces conclusions.

**Le problème pour l'investisseur n'est pas de trancher — c'est que c'est invérifiable de l'extérieur**, tandis que le reste de la chaîne est déclaré « propriétaire ». Un recours collectif fédéral est en cours contre la société **et ses dirigeants**, avec une période de classe de dix-sept mois. Sur un titre valorisé pour la perfection, un risque binaire non vérifiable devrait se traduire par une décote, pas par une prime.

### 7. Ce que le cours actuel exige

À ~201 $, ~59 Mds$ de capitalisation, **~75x le BPA 2026 attendu et ~14x le chiffre d'affaires 2026**, les hypothèses implicites sont : croissance à plus de 40 % maintenue jusqu'en 2029, marge opérationnelle vers 26 %, 4 à 5 GW livrés en 2028, aucune rupture d'approvisionnement, aucune sanction juridique matérielle, et aucun retour à la normale des turbines à gaz avant 2030. **Six conditions cumulatives.**

### Que se passe-t-il si la croissance déçoit de 20 à 30 % ?
Un CA 2028 à 6,5 Mds$ au lieu de 9 Mds$, avec une base de coûts fixes calibrée pour 5 GW, fait chuter le BPA vers 3,00-3,50 $. Mais le vrai dommage est le multiple : un titre de croissance à 75x ne se réévalue pas à 60x lorsqu'il déçoit, il se réévalue à **20-25x**. Soit un cours de **70 à 90 $ — une baisse de 55 à 65 %**. Le bêta de 3,82 et l'historique récent (351 $ → 163 $ en cinq semaines) démontrent que ce mouvement est parfaitement réalisable.

### Le scénario catastrophe unique
**Contrôle chinois à l'exportation sur l'oxyde de scandium et ses dérivés céramiques, en pleine montée en cadence.** Bloom ne pourrait pas livrer son carnet, les clauses de pénalité et de résiliation se déclencheraient, le recours collectif deviendrait une bombe à retardement — et surtout, la démonstration serait faite que la souveraineté industrielle revendiquée était un argument commercial. Plausibilité : **15 à 25 %** compte tenu du contexte géopolitique et du précédent des terres rares.

### Conclusion short
Bloom Energy est une **vraie entreprise industrielle, avec un vrai produit, une vraie technologie et — pour la première fois en vingt-cinq ans — de vrais bénéfices**. Ce n'est ni FuelCell ni Plug Power, et le nier serait malhonnête. Mais le titre n'est pas valorisé comme un équipementier en forte croissance : il est valorisé comme une plateforme monopolistique adossée à un carnet contractuel qui **n'existe pas sous cette forme dans ses états financiers**. À 75x les bénéfices anticipés, avec 73 % du CA sur un client et une chaîne d'approvisionnement critique contestée en justice, ce n'est pas un investissement de qualité — c'est **un pari à levier sur la durée du cycle d'investissement en IA**, vendu au prix d'une certitude.`,
  },
];

export default { ...meta, modules };
