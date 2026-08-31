// ============================================================
//  DOSSIER : Dutch Bros Inc. (BROS)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "bros",                     // identifiant d'URL : /dossier/bros
  ticker: "BROS",
  name: "Dutch Bros Inc.",
  exchange: "NYSE",
  sector: "Restauration rapide — boissons drive-thru",
  initials: "BROS",                 // affiché dans la pastille
  tagline: "Machine à ouvrir des kiosques à café : croissance record, valorisation record, marges sous pression.",
  riskScore: 51,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "bros.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Dutch Bros exploite une chaîne de **kiosques à boissons en drive-thru** aux États-Unis. Fondée en 1992 à Grants Pass (Oregon) par les frères **Dane et Travis Boersma** — deux éleveurs laitiers d'origine néerlandaise reconvertis dans le café —, l'entreprise est cotée au NYSE depuis septembre 2021 et pilotée depuis Tempe (Arizona).

Le modèle est d'une simplicité redoutable et tient en quatre paramètres :

- **Un format minuscule** : ~800 à 1 000 pieds carrés, deux files de drive-thru, une fenêtre piétonne, **pas de salle**. Coût de construction bien inférieur à un café traditionnel.
- **Un volume par unité élevé** : AUV systémique record d'environ **2,1 à 2,2 M$** en 2025-2026. Un kiosque de la taille d'un garage produit le chiffre d'affaires d'un restaurant complet.
- **Un débit, pas un lieu** : la vitesse de service et le rituel quotidien remplacent l'expérience « troisième lieu » de Starbucks.
- **Une culture de service** comme actif : les employés (« broistas ») sont la promesse de marque. Dutch Bros ne vend pas du café — il vend une interaction de 90 secondes qui met de bonne humeur.

Le mix boisson est atypique : le café expresso ne représente qu'une partie des ventes. **Blue Rebel** (l'énergisant maison), les smoothies, les thés, les limonades et les boissons givrées sucrées et hautement personnalisables constituent l'essentiel du panier — ce qui rend l'enseigne **structurellement moins exposée au cours de l'arabica** qu'un torréfacteur pur, mais plus exposée aux modes de consommation des 18-34 ans.

## Principaux produits et services

- **Boissons expresso** chaudes, glacées et givrées (le cœur historique)
- **Blue Rebel** : marque d'énergisant propriétaire, mélangée à des sirops et fruits — moteur de différenciation et de marge
- **Thés, limonades, smoothies, sodas aromatisés** — la vague « dirty soda » profite directement au format
- **Programme alimentaire** : lancé en 2025, déployé dans plus de 750 boutiques en avance sur le calendrier, destiné à faire monter le ticket et à ouvrir le créneau du petit-déjeuner
- **Café conditionné (CPG)** et merchandising — levier annexe présenté à l'Investor Day 2025

## Clients, fournisseurs, concurrents

**Clients** : consommateurs individuels, très majoritairement des habitués. **Dutch Rewards** capte plus de **73 %** des transactions — un taux de pénétration de fidélité supérieur à celui de Starbucks (~60 %). L'« Order Ahead » représente environ 16 % des commandes.

**Fournisseurs** : importateurs de café vert d'Amérique latine (Brésil, Colombie, Guatemala, Pérou, Mexique) — torréfaction internalisée dans l'Oregon ; produits laitiers ; sirops et arômes ; emballages ; distributeurs logistiques tiers ; bailleurs et promoteurs immobiliers (poste devenu critique).

**Concurrents** : **Starbucks** (~16 000 unités aux États-Unis), **7 Brew** (adossé à Blackstone, 700+ unités dont ~340 en pipeline), **Scooter's Coffee** (932 unités fin 2025), **Black Rock Coffee**, **Swig**, **Dunkin'**, et l'offensive boissons de **McDonald's, Chick-fil-A et Taco Bell**.

## Modalités contractuelles

Il n'y a **ni contrat client, ni abonnement, ni take-or-pay**. Chaque transaction se rejoue chaque matin. Le revenu est encaissé au comptant ou par carte, immédiatement — d'où un **besoin en fonds de roulement négatif** et une conversion de trésorerie d'exploitation excellente.

Deux segments de revenus :
- **Boutiques exploitées en propre** — ~93 % du chiffre d'affaires (510 M$ sur 550,9 M$ au T2 2026)
- **Franchise et autres** — redevances et ventes de produits aux franchisés, une part résiduelle et **décroissante** puisque Dutch Bros rachète progressivement ses franchisés (Phoenix en 2026)

Le vrai contrat structurant n'est pas commercial mais **immobilier** : le passage à des baux **build-to-suit** (bâtiment construit sur mesure pour l'enseigne) allonge les engagements locatifs et pousse mécaniquement les charges d'occupation à la hausse. C'est le prix payé pour sécuriser 185 ouvertures par an.

> **Note de lecture** : Dutch Bros est une **histoire d'unités**, pas une histoire de marge. Le chiffre d'affaires suit le nombre de kiosques ; la question d'investissement porte entièrement sur la durabilité du rythme d'ouverture et sur ce qu'il coûte en capital et en marge.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Dutch Bros dans la chaîne de valeur

Dutch Bros est un **transformateur-détaillant intégré verticalement sur l'amont café** : l'entreprise achète du café vert, le **torréfie elle-même**, le distribue à son propre réseau et le vend directement au consommateur final. Cette intégration est inhabituelle pour une chaîne de cette taille et constitue un levier réel de contrôle des coûts et de la qualité.

### Amont — Intrants

**Café vert** (l'intrant symbolique, pas le plus lourd budgétairement) :
- Origines d'Amérique latine : **Brésil, Colombie, Guatemala, Pérou, Mexique**, via des importateurs et négociants spécialisés
- Achats couverts par contrats à terme et engagements d'achat pluri-mois — d'où un **décalage de 6 à 12 mois** entre le cours de l'arabica et le coût réellement comptabilisé

**Produits laitiers** : lait, crème, alternatives végétales — fournisseurs régionaux ; poste de coût au moins aussi important que le café dans une boisson givrée

**Sirops, arômes, concentrés** : formulations propriétaires et fournisseurs d'arômes ; **Blue Rebel** est produit en marque propre

**Emballages** : gobelets, couvercles, pailles, dômes — exposés au coût des résines et au fret

**Équipement de boutique** : machines expresso, blenders, systèmes de point de vente et de commande vocale

**Immobilier et construction** : promoteurs, entreprises générales, bailleurs institutionnels. Avec **185 ouvertures visées en 2026** et un capex de **350 à 370 M$**, c'est devenu la chaîne d'approvisionnement la plus critique du groupe.

---

### Dutch Bros — Torréfaction, distribution, exploitation

**Torréfaction** : usine détenue en propre dans l'Oregon (Grants Pass, berceau historique de l'enseigne). Le contrôle du profil de torréfaction est un actif de marque autant qu'un actif industriel.

**Distribution** : centres de distribution et transporteurs tiers desservant 26 États. La densité régionale — « fill in the map » plutôt que planter des drapeaux — réduit le coût logistique par boutique.

**Exploitation** : ~1 225 boutiques fin juin 2026, ~32 000 employés. Le goulot d'étranglement n'est pas le café, c'est le **vivier de managers** : Dutch Bros revendique 525 candidats « operator » avec une ancienneté moyenne de huit ans, formés en interne avant toute ouverture.

---

### Aval — Client final

Vente directe au consommateur, sans intermédiaire. Trois canaux :
- **Drive-thru** (le cœur : plus de 60 % du chiffre d'affaires de la catégorie café aux États-Unis passe désormais par ce canal)
- **Fenêtre piétonne**
- **Order Ahead** via l'application Dutch Rewards (~16 % des commandes)

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                    DUTCH BROS                    AVAL
Café vert LatAm     →    Torréfaction Oregon      →    Drive-thru
Produits laitiers        Centres de distribution       Fenêtre piétonne
Sirops / Blue Rebel      ~1 225 kiosques               Order Ahead (app)
Emballages               ~32 000 broistas              
Promoteurs / bailleurs   Vivier d'operators            Consommateur final
(build-to-suit)          (525 candidats)               (73 % en Dutch Rewards)
\`\`\`

**Le point de fragilité** : l'entreprise a solidement verrouillé l'amont café, mais la contrainte qui décide de la trajectoire 2026-2029 est **immobilière et humaine**, pas agricole. Trouver 185 emplacements par an, les construire, et y placer un manager déjà formé — voilà la vraie chaîne d'approvisionnement de Dutch Bros. Le rachat de **65 sites Salad and Go pour 105 M$** en août 2026 est la traduction directe de cette contrainte : quand le pipeline immobilier devient rare, on achète les carcasses d'un concurrent en faillite.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

Dutch Bros publie **deux segments seulement**, ce qui simplifie la lecture mais limite la granularité offerte à l'analyste.

### Structure au T2 2026

| Segment | CA T2 2026 | Poids | Dynamique |
|---|---|---|---|
| Boutiques en propre | ~510 M$ | ~93 % | Moteur unique ; marge de contribution ~30,6 % |
| Franchise et autres | ~41 M$ | ~7 % | En **décroissance structurelle** (rachat des franchisés) |
| **Total** | **550,9 M$** | **100 %** | **+32,5 % a/a** |

Le rachat de la franchise de Phoenix en 2026 illustre la trajectoire : Dutch Bros **internalise** progressivement son parc. Cela gonfle le chiffre d'affaires (on consolide 100 % des ventes au lieu d'une redevance) mais **dilue la marge** (une redevance est de la marge pure ; exploiter un kiosque ne l'est pas) et **consomme du capital**.

---

### Décomposition de la croissance du chiffre d'affaires

C'est l'exercice le plus révélateur du dossier. Sur le T2 2026, la croissance de +32,5 % se décompose ainsi :

| Source | Contribution approximative | Nature |
|---|---|---|
| Nouvelles boutiques (182 nettes sur 12 mois) | ~20-24 points | **Achetée** par le capex |
| Ventes à périmètre comparable (système) | +5,8 points | **Organique** |
| Rachat de franchisés / conversions | Quelques points | **Achetée** par acquisition |

**Lecture** : environ **quatre cinquièmes de la croissance sont financés par l'investissement**, pas par la demande à parc constant. Ce n'est ni anormal ni condamnable pour une enseigne en expansion — mais cela signifie que le multiple de valorisation rémunère une croissance **capitalistique**, pas une croissance gratuite.

---

### Ventes à périmètre comparable — l'écart qui compte

| Trimestre | SSS système | Transactions système | SSS boutiques propres | Transactions propres |
|---|---|---|---|---|
| T4 2025 | +7,7 % | +5,4 % | +9,7 % | +7,6 % |
| T1 2026 | +8,3 % | +5,1 % | +10,6 % | +6,9 % |
| T2 2026 | **+5,8 %** | **+1,7 %** | **+8,3 %** | **+3,4 %** |
| T3 2026 (guidance) | **+4 à +5 %** | — | — | — |

L'écart persistant entre boutiques en propre (+8,3 %) et système (+5,8 %) indique que **les franchisés sous-performent** le parc intégré — argument implicite en faveur des rachats, mais aussi signal que la performance dépend fortement de l'exécution opérationnelle interne.

Plus important : la **décélération du trafic système de +5,1 % à +1,7 %** en un trimestre. Le management l'attribue à des bases de comparaison plus exigeantes, à l'extinction de la hausse tarifaire prise en début d'année et à l'anniversaire du lancement alimentaire. C'est plausible. C'est aussi exactement ce que dirait une direction confrontée à un début de saturation.

---

### Répartition géographique

Présence dans **26 États** (le Mississippi est devenu le 26ᵉ en juillet 2026). Cœur historique : Oregon, Californie, Arizona, Idaho, Washington. Marchés d'expansion : **Texas** (performance citée comme exceptionnelle), Sud-Est, Midwest, et désormais **Chicago** — où la deuxième boutique tourne à un rythme d'environ 7 M$ de volume annuel et a établi un record d'ouverture, ce que la direction présente comme la preuve de la portabilité de la marque.

Aucune exposition internationale. Aucune couverture de change. C'est un pur actif domestique américain.

---

### Profil de marge

- **Marge brute** : ~25,1 % (TTM)
- **Marge de contribution boutique** : ~30,6 % au T2 2026, quasi stable
- **COGS boutiques** : **26,1 %** du CA, en hausse (déploiement alimentaire + café)
- **Charges d'occupation** : **16,3 %**, en hausse (transition vers les baux build-to-suit)
- **Marge d'EBITDA ajusté** : 20,6 % au T2 2026, **en repli de 80 pb**
- **Marge opérationnelle** : ~9,96 % (TTM) — **Marge nette** : ~4,91 %

**Le nœud du dossier** : la marge de contribution par boutique tient, mais la marge d'EBITDA se contracte parce que la croissance elle-même coûte cher (pré-ouverture, occupation, structure). Dutch Bros paie pour grandir, et le compte de résultat le montre.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats) — réels, revendiqués, absents

### 1. Le format et l'économie unitaire — le moat le plus tangible
Un kiosque Dutch Bros génère environ **2,1-2,2 M$ d'AUV** sur ~900 pieds carrés sans salle. Le coût de construction (~1,4 M$ de capex moyen par boutique au T2 2026) est amorti rapidement. Comparé à un café assis, le ratio ventes/mètre carré est difficile à égaler. **Mais** : c'est un avantage de **format**, pas de propriété intellectuelle. 7 Brew, Scooter's et Black Rock exploitent exactement le même modèle. Le format se copie ; il ne se protège pas.

### 2. La densité régionale et l'immobilier — un moat qui se construit
Dutch Bros pratique le remplissage de marché plutôt que la dispersion. La densité crée de la notoriété locale, un coût logistique plus faible et un effet de rappel quotidien. L'acquisition des **65 sites Salad and Go** (105 M$, Arizona, Nevada, Oklahoma, Texas) et des **20 unités Clutch Coffee Bar** (~20 M$, Carolines) montre que l'enseigne traite les emplacements drive-thru comme une ressource rare à sécuriser avant les concurrents. **C'est un moat par préemption** — réel tant qu'il reste des emplacements, mais consommable.

### 3. La culture et le vivier de managers — le moat le plus sous-estimé
Ouvrir 185 boutiques par an suppose 185 managers déjà formés. Dutch Bros revendique **525 candidats operator avec une ancienneté moyenne de huit ans**, formés exclusivement en interne, jamais recrutés à l'extérieur. C'est une barrière de **temps** : un concurrent avec du capital peut construire des kiosques en 12 mois, mais pas fabriquer huit ans d'ancienneté. Dans un secteur où le service *est* le produit, c'est probablement le vrai fossé.

### 4. Dutch Rewards — un moat de données, à moitié exploité
Plus de **73 %** des transactions passent par le programme de fidélité, contre ~60 % chez Starbucks. Cela donne une visibilité sur les habitudes individuelles et permet une segmentation client fine, que la direction cite comme la plus forte contribution aux comparables depuis le lancement du programme. La donnée est là. La monétisation systématique reste à démontrer.

### 5. Pouvoir de fixation des prix — LIMITÉ
C'est la faiblesse structurelle. Le client Dutch Bros vient en partie **pour le prix** relatif à Starbucks. Les coûts de changement sont nuls : le kiosque 7 Brew d'en face vend la même boisson 2 à 4 dollars moins cher qu'un Starbucks équivalent. Le décrochage du trafic système à **+1,7 %** au T2 2026, après l'extinction de la hausse tarifaire, suggère que **l'élasticité-prix est réelle**. Dutch Bros n'a pas le pouvoir de prix d'une marque de luxe ; il a celui d'une habitude quotidienne — ce qui n'est pas la même chose.

## Positionnement vs concurrence

| Critère | Dutch Bros | Starbucks | 7 Brew | Scooter's |
|---|---|---|---|---|
| Unités (US) | ~1 225 | ~16 000 | ~700-780 | ~932 |
| AUV | ~2,1-2,2 M$ | Élevé, format mixte | ~2 M$ | ~0,88 M$ |
| Format | Drive-thru pur | Café + drive | Drive-thru pur | Kiosque drive |
| Modèle capital | Intégré (capex lourd) | Mixte | Franchise (Blackstone) | Franchise |
| Croissance unités | ~16-20 %/an | Faible | Très forte | ~10 %/an |
| Marge nette | ~4,9 % | ~5 % | n.d. (privé) | n.d. (privé) |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Faible à modéré** — aucun coût de changement, forte substituabilité, sensibilité prix démontrée
- **Vis-à-vis des fournisseurs de café** : **Modéré et croissant** — la torréfaction intégrée et l'échelle donnent un accès direct aux négociants, mais le prix de l'arabica reste subi
- **Vis-à-vis des bailleurs et promoteurs** : **En dégradation** — la transition vers le build-to-suit signifie que Dutch Bros paie une prime pour obtenir l'emplacement qu'il veut, quand il le veut. Les charges d'occupation à 16,3 % du CA en sont la preuve comptable
- **Vis-à-vis des employés** : **Fort par la culture, pas par le marché** — le vivier interne réduit la dépendance au recrutement externe`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Restauration rapide et boissons (août 2026)

| Société | Code Bloomberg | Capitalisation (Mds$) | EV/CA | EV/EBIT | P/E | Rendement div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Dutch Bros** | **BROS US** | **~9,4** | **~5,5x** | **~55x** | **~70x** | **0 %** | **~8-10 %** |
| Starbucks | SBUX US | ~122 | ~3,8x | ~38x | ~62x | ~2,3 % | n.s. (fonds propres négatifs) |
| Chipotle | CMG US | ~48 | ~3,3x | ~22x | ~28x | 0 % | ~40 % |
| CAVA Group | CAVA US | ~9,8 | ~7,5x | ~75x | ~125x | 0 % | ~8 % |
| Wingstop | WING US | ~3,6 | ~6,7x | ~24x | ~31x | ~0,7 % | n.s. (fonds propres négatifs) |
| 7 Brew | Non coté | n/a | n/a | n/a | n/a | n/a | n/a |
| Scooter's Coffee | Non coté | n/a | n/a | n/a | n/a | n/a | n/a |

*Données estimatives au 28 août 2026, agrégées de plusieurs fournisseurs et à des dates légèrement décalées. À reconstruire sur filings SEC directs pour un usage décisionnel.*

---

### Analyse comparative

**Dutch Bros vs Starbucks — la comparaison que les haussiers aiment**
À un P/CA prospectif d'environ **3,9x**, Dutch Bros se paie à peu près comme Starbucks — un groupe dix fois plus gros, en croissance faible, engagé dans un lourd redressement opérationnel. L'argument haussier est imparable dans sa forme : à multiple de ventes égal, on préfère l'actif qui croît de 30 % à celui qui croît de 3 %.

L'argument a toutefois deux failles. D'abord, Starbucks convertit ses ventes en trésorerie ; Dutch Bros réinvestit tout (**FCF 75 M$ pour 1,88 Md$ de CA**). Ensuite, Starbucks détient un **pouvoir de prix** que Dutch Bros n'a pas démontré. Le multiple de ventes est le seul terrain où la comparaison flatte Dutch Bros ; sur le P/E (70x contre 62x) et sur l'EV/EBITDA (32x contre 27x), la prime réapparaît.

**Dutch Bros vs Chipotle — le miroir désagréable**
Chipotle est l'archétype de ce que Dutch Bros veut devenir : une enseigne à croissance d'unités devenue machine à cash, avec un **ROE de ~40 %**, un ROIC de ~21 % et un P/E de 28x. Chipotle se paie **deux fois et demie moins cher** que Dutch Bros pour une rentabilité quatre fois supérieure. La différence n'est pas de la croissance — Chipotle croît encore — c'est la **conversion de la croissance en rentabilité du capital**. Le ROIC de Dutch Bros à **8,4 %** contre un WACC estimé à **15,3 %** est le chiffre le plus dérangeant de tout le dossier : à ces niveaux, chaque dollar investi dans une nouvelle boutique détruit théoriquement de la valeur au coût du capital actuel.

**Dutch Bros vs CAVA — la comparaison qui rassure**
CAVA se paie **125x les bénéfices** et 53x l'EBITDA pour une croissance comparable et un ROE de 8 %. Sur cette base, Dutch Bros n'est pas la valeur la plus chère de son univers. C'est un réconfort relatif, pas une thèse : deux actifs surévalués ne se valident pas mutuellement.

**7 Brew et Scooter's — les concurrents invisibles dans le tableau**
Ils ne figurent dans aucune comparaison de multiples parce qu'ils ne sont pas cotés. C'est précisément pourquoi ils sont dangereux. **7 Brew**, adossé à **Blackstone**, exploite un modèle franchisé — donc **capital-light** — a dépassé sa 777ᵉ unité et dispose d'environ 340 ouvertures en pipeline. Il croît plus vite que Dutch Bros **sans consommer son propre bilan**. En janvier 2026, Technomic a classé pour la première fois **trois enseignes de café** (7 Brew, Scooter's, Dutch Bros) dans le top 10 des chaînes préférées des Américains : validation de la catégorie, et avertissement sur son encombrement.

---

### Le ratio qui compte : ROIC vs WACC
Pour une enseigne dont la thèse repose sur le déploiement de capital, la seule question qui compte est : **le rendement du capital investi dépasse-t-il son coût ?** Aujourd'hui, non (8,4 % contre ~15,3 %). Le pari haussier consiste à croire que le ROIC monte à mesure que les cohortes de boutiques mûrissent et que la structure se dilue. Le pari baissier consiste à croire que la hausse des coûts d'occupation et la cannibalisation l'en empêchent.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 2026 (publiés le 5 août 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart |
|---|---|---|---|
| Chiffre d'affaires | **550,9 M$** | ~525,4 M$ | **+4,9 % ✓** |
| BPA ajusté | **0,33 $** | ~0,30 $ | **+11 % ✓** |
| BPA dilué (GAAP) | 0,28 $ | — | vs 0,20 $ au T2 2025 |
| Résultat net | **51,6 M$** | — | **+34,5 %** a/a |
| EBITDA ajusté | **113,7 M$** | — | **+27,8 %** a/a |
| SSS système | +5,8 % | — | Transactions +1,7 % |
| SSS boutiques propres | +8,3 % | — | Ticket +4,9 %, trafic +3,4 % |

**Dutch Bros a dépassé le consensus sur les deux lignes** — cinquième trimestre consécutif de dépassement du BPA — et a **relevé sa guidance annuelle**. Et le titre s'est effondré de **~19 % en une séance**.

---

### Facteurs clés

- **48 boutiques ouvertes** au trimestre, parc porté à **1 225 unités** contre 1 043 un an plus tôt (+182 nettes)
- **13ᵉ trimestre consécutif** de comparables positives, **8ᵉ** de croissance du trafic
- **Dutch Rewards** au-dessus de 73 % des transactions — plus forte contribution aux comparables depuis le lancement de la segmentation client
- **SG&A ajusté en baisse de 90 pb** en pourcentage du CA : le levier de structure fonctionne
- **Deuxième boutique de Chicago** en rythme de ~7 M$ de volume annuel, record d'ouverture — validation de la portabilité de la marque hors Ouest américain

---

### Évolution des marges

- **Marge d'EBITDA ajusté : 20,6 %, en repli de 80 pb** — la croissance du CA (+32,5 %) dépasse celle de l'EBITDA (+27,8 %)
- **COGS boutiques à 26,1 %** du CA, en hausse — déploiement du programme alimentaire et coût du café
- **Charges d'occupation à 16,3 %**, en hausse — transition vers les baux build-to-suit
- **Marge de contribution boutique maintenue à ~30,6 %** — l'économie unitaire tient
- Guidance : **~60 pb de pression COGS** et **~20 pb de pression sur la marge d'EBITDA ajusté** sur l'ensemble de 2026

---

### Perspectives et guidance relevée

| Métrique | Guidance T1 2026 | Guidance T2 2026 |
|---|---|---|
| Chiffre d'affaires | 2,05-2,08 Mds$ | **2,10-2,13 Mds$** |
| SSS système | +4 à +6 % | **+5 à +6 %** |
| EBITDA ajusté | 370-380 M$ | **385-390 M$** |
| Capex | 270-290 M$ | **350-370 M$** |
| Ouvertures | ≥ 185 | ≥ 185 |

Deux mouvements à ne pas confondre. Le relèvement du chiffre d'affaires et de l'EBITDA est une bonne nouvelle. **Le relèvement du capex de 270-290 M$ à 350-370 M$ — soit +80 M$, environ +29 % — n'en est pas une** : c'est le coût d'acquisition de la croissance qui monte en même temps que la croissance. La guidance exclut par ailleurs l'opération Salad and Go.

L'élément qui a fait basculer le marché n'est pas dans le communiqué mais dans la conférence : le management attend **+4 à +5 % de comparables système au T3**, contre +5,8 % au T2 et +8,3 % au T1. Motifs invoqués : bases de comparaison, extinction de la hausse tarifaire du début d'année, anniversaire du programme alimentaire.

---

### Signaux d'alerte bilan

- **Free cash-flow de 75,2 M$ sur 12 mois glissants** pour 365,7 M$ de trésorerie d'exploitation : **290,5 M$ absorbés par le capex**. Le P/FCF ressort à **125x**
- **Dette totale 1,21 Md$**, trésorerie 269 M$, **dette nette ~938 M$** — dette/EBITDA à 3,12x, couverture des intérêts 6,6x
- **Nombre d'actions +8,03 % sur un an** (+5,79 % sur le seul trimestre) : la dilution est un poste permanent
- **Altman Z-Score à 2,7** — sous le seuil de 3,0, à surveiller compte tenu de l'intensité capitalistique
- Liquidité de **699 M$** au 30 juin 2026 : le financement des 185 ouvertures est sécurisé à court terme

---

### Réaction du marché

Le titre a clôturé à **65,67 $** le 5 août, perdu **12,2 %** hors séance, puis **~19 % le lendemain** pour terminer à **53,32 $**, portant le recul hebdomadaire à plus de 18 %. Il cote **49,91 $** au 28 août 2026, en baisse de **31,8 % sur douze mois**.

Ce qu'il faut en retenir : le marché **ne conteste pas les résultats — il reprice l'hypothèse implicite**. À 70x les bénéfices, aucun titre ne survit à une décélération annoncée de la croissance comparable, même quand tout le reste dépasse les attentes. Le mouvement est un ajustement de multiple, pas un verdict sur l'entreprise. C'est aussi le signal que la marge de sécurité était nulle avant la publication.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — évolution 2024-2026

**2024 — Transition et reconstruction.** Christine Barone prend la direction générale en janvier 2024, Travis Boersma passe président exécutif. Le discours est celui d'une professionnalisation : structuration du programme de fidélité, discipline immobilière, refonte de la stratégie de sélection des sites. Le trafic à périmètre comparable est alors **négatif** (-2,0 % au T2 2024) et la direction ne le masque pas.

**2025 — Reprise en main assumée.** Le ton devient nettement plus confiant à mesure que les comparables redeviennent positives et que le trafic repart. L'Investor Day 2025 relève l'ambition à **7 000 boutiques** à terme, avec l'objectif intermédiaire de **2 029 unités en 2029** — un chiffre choisi pour son effet mnémotechnique, ce qui en dit long sur la dimension narrative de la communication.

**2026 — Confiance opérationnelle, prudence chiffrée.** Barone parle de « culture people-led », de « proposition de valeur convaincante », de résultats « au-dessus de nos attentes ». Mais la direction ne publie **pas de guidance trimestrielle formelle** et livre les chiffres qui fâchent oralement, en réponse aux questions. La décélération des comparables du T3 à **+4-5 %** est apparue de cette façon.

---

### Priorités répétées du management

**1. Le nombre d'unités avant tout.** « Nous restons très confiants dans l'ouverture d'au moins 185 boutiques système en 2026. » L'objectif 2 029 en 2029 est réaffirmé à chaque appel, avec la précision que **90 % du pipeline nécessaire** est déjà sécurisé.

**2. La productivité des nouvelles boutiques.** Les AUV systémiques sont présentés comme atteignant des records. Le cas de Chicago (~7 M$ annualisés sur la deuxième unité) est répété comme preuve que la marque fonctionne hors de son berceau.

**3. Dutch Rewards et la segmentation client.** Plus de 73 % de pénétration, Order Ahead à ~16 %. Le management insiste sur le fait que la segmentation produit sa plus forte contribution aux comparables à ce jour.

**4. Les vents contraires sur les coûts — reconnus sans détour.** Café (~60 pb de pression COGS en 2026), occupation (transition build-to-suit), main-d'œuvre. Josh Guenser chiffre les impacts plutôt que de les diluer dans la rhétorique. **C'est à porter au crédit de la direction.**

**5. Le vivier de talents.** 525 candidats operator, huit ans d'ancienneté moyenne. Ce point revient systématiquement quand la question de la faisabilité du rythme d'ouverture est posée — c'est la réponse standard, et elle est solide.

---

### Analyse du sentiment

- **Confiance** : élevée et stable. Pas de rupture de discours entre 2025 et 2026, pas de révision à la baisse de la trajectoire d'unités.
- **Transparence sur les coûts** : bonne. La direction chiffre les pressions au point de base plutôt que de les qualifier.
- **Transparence sur la demande** : **plus faible**. La décélération du trafic système de +5,1 % à +1,7 % en un trimestre est expliquée par trois facteurs techniques (base, prix, anniversaire alimentaire) sans discussion de l'hypothèse alternative : **la cannibalisation entre boutiques**. C'est l'angle mort de la communication.
- **Structure de la communication** : absence de guidance trimestrielle publiée. Ce choix maximise la flexibilité de la direction et **minimise l'information préalable de l'actionnaire** — il explique une partie de la violence de la réaction du 6 août.

> **À lire entre les lignes** : le management vend un **compteur d'unités** et un **discours de culture**. Ce sont ses deux points forts et ils sont authentiques. Ce qu'il évite systématiquement de discuter, c'est le rendement du capital investi dans la 1 226ᵉ boutique par rapport à la 500ᵉ. Tant que la question n'est pas posée frontalement en conférence, l'investisseur doit la poser lui-même.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Christine Barone — Directrice Générale et Présidente (depuis janvier 2024)

**Parcours** : Bain & Company, puis Raymond James, puis **plus de cinq ans chez Starbucks** à des postes de vice-présidente, puis **directrice générale de True Food Kitchen** (2016-2023), enseigne de restauration en forte croissance. Arrivée chez Dutch Bros comme présidente en février 2023, promue directrice générale en janvier 2024, également administratrice.

**Bilan chiffré depuis sa prise de fonction** :
- Chiffre d'affaires passé de **1,28 Md$ (2024)** à **~1,60 Md$ (2025)** puis une guidance de **2,10-2,13 Mds$ (2026)**
- Résultat net de **66,5 M$ (2024)** à **117,3 M$ (2025)** — BPA de 0,34 $ à 0,64 $
- Retournement du trafic : d'un trafic comparable **négatif** au T2 2024 à **huit trimestres consécutifs** de croissance
- Parc de ~950 à **1 225 boutiques**, extension à 26 États
- Déploiement du programme alimentaire à plus de 750 boutiques, en avance sur le calendrier

C'est un bilan opérationnel **solide et vérifiable**. Le profil — Starbucks pour le métier, True Food Kitchen pour la croissance, Bain pour la rigueur analytique — est bien calibré au problème posé.

**La réserve** : Barone n'a pas encore été testée sur un **cycle défavorable**. Toute sa direction générale s'est déroulée dans une phase d'accélération. La question du T3 2026 — que fait-on quand le trafic ralentit et que le capex a déjà été engagé ? — sera son premier vrai examen.

---

### Travis Boersma — Cofondateur et Président exécutif

Cofondateur avec son frère **Dane Boersma** (décédé en 2009) de la première charrette à café en 1992. Directeur général de l'entité opérationnelle jusqu'en 2021, président exécutif depuis. Il **fixe l'orientation stratégique et préside le conseil**, tandis que Barone dirige l'exploitation.

**Le point de gouvernance central** : Boersma détient environ **73 % des droits de vote pour ~38,8 % du capital économique** (~83,4 millions de titres toutes classes confondues en mars 2026), via une structure **Up-C multi-classes** — les actions de classe B lui confèrent **dix voix chacune sans droit économique**. Dutch Bros est de ce fait une **« controlled company »** au sens du NYSE : Boersma peut, seul, l'emporter sur l'ensemble des autres actionnaires réunis pour l'élection des administrateurs et les décisions majeures.

**Cessions de titres** : les 24 et 25 novembre 2025, Boersma a vendu **2,5 millions d'actions pour ~136,9 M$** (prix moyen pondéré 54,77 $), soit la quasi-totalité de sa détention **directe**. L'opération s'est faite sous plans **Rule 10b5-1** adoptés un an plus tôt — cadre qui neutralise l'accusation d'opportunisme. Ses intérêts **indirects** (via DM Trust Aggregator et DM Individual Aggregator) restent massifs et le contrôle en votes est intact. Sur douze mois, les initiés ont été **vendeurs nets d'environ 103 M$**.

---

### Allocation du capital — l'enjeu réel

| Décision | Montant | Lecture |
|---|---|---|
| Capex organique 2026 | **350-370 M$** | Relevé de +80 M$ en un trimestre |
| Clutch Coffee Bar (janv. 2026) | ~20 M$ / 20 unités | Conversion, Carolines |
| Sites Salad and Go (août 2026) | **105 M$ / jusqu'à 65 sites** | Préemption immobilière opportuniste |
| Rachat franchise Phoenix (2026) | n.d. | Internalisation, relutif selon la direction |
| Dividendes / rachats d'actions | **0 $** | Réinvestissement intégral |

| Indicateur | 2024 | 2025 | TTM 2026 |
|---|---|---|---|
| ROE | ~9 % | ~13 % | **14,56 %** |
| ROIC | ~6 % | ~7 % | **8,42 %** |
| ROCE | — | — | **6,02 %** |
| WACC estimé | — | — | **~15,3 %** |

**Le verdict est double.** Le ROE et le ROIC **progressent régulièrement** sous la direction Barone — c'est incontestable et positif. Mais le **ROIC reste très inférieur au coût du capital**. Sur la base des chiffres de marché actuels, l'entreprise investit 350 M$ par an à un rendement inférieur à ce que les apporteurs de capitaux exigent. Le pari implicite est que la maturation des cohortes récentes de boutiques comble l'écart. C'est plausible ; ce n'est pas démontré.

---

### Signaux d'alerte

- **Structure Up-C et double classe** : contrôle actionnarial verrouillé, actionnaire minoritaire sans recours effectif. Le principal risque de gouvernance du dossier.
- **Accords de restitution d'impôt (TRA)** : Dutch Bros Inc. s'engage à reverser **85 %** de certains avantages fiscaux aux détenteurs pré-IPO. Un transfert de valeur structurel, contractuel et permanent, du flottant vers les initiés.
- **Partie liée sur l'opération Salad and Go** : les documents déposés au tribunal des faillites mentionnent **Boersma Bros, LLC**, holding liée aux fondateurs, comme partie à l'accord de rachat des actifs à 105 M$. Point à documenter précisément dans les annexes du prochain 10-Q avant toute conclusion.
- **Dilution** : +8,03 % d'actions sur douze mois. La rémunération en actions et les échanges d'unités OpCo diluent en continu.
- **Type de dirigeants** : **fondateur-contrôlant + gestionnaire professionnelle recrutée**. C'est la bonne configuration à ce stade — le fondateur protège la culture, la professionnelle industrialise l'exécution — à condition que la répartition des rôles tienne. Elle tient pour l'instant.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Contexte
Introduction en bourse en **septembre 2021** à 23 $, avec un bond spectaculaire dès le premier jour. Le titre est **extrêmement volatil** : **bêta de 2,33**, intérêt vendeur de **7,57 % du capital** (10,96 % du flottant), volume moyen de 4,6 millions de titres par jour. Le plus haut historique en clôture reste **85,37 $, atteint le 18 février 2025**.

---

### Hausses significatives (> +5 %)

**Septembre 2021 — Introduction en bourse.** Envolée dès la première séance. L'histoire « le Starbucks de l'Ouest en drive-thru » séduit immédiatement un marché encore en régime de multiples élevés.

**2024 — Le retournement du trafic.** Après deux années difficiles, l'arrivée de Christine Barone et le retour à une croissance du trafic comparable relancent le titre. Chaque trimestre de dépassement du consensus est récompensé.

**Février 2025 — Le sommet.** Publication des résultats 2024 (chiffre d'affaires +33 %, 151 ouvertures) et franchissement du cap des 1 000 boutiques. Le titre atteint **85,37 $** en clôture le 18 février. À ce niveau, le P/E dépasse 150x.

**Mars-août 2026 — Rebond de ~41 %.** Depuis le plus bas annuel du 27 mars jusqu'à la clôture du 5 août, le titre progresse d'environ 41 %, porté par la publication du T1 (comparables système à +8,3 %, plus haut depuis le T1 2024) et le relèvement de la guidance.

---

### Baisses significatives (> -5 %)

**Mai 2022 — Le choc d'inflation.** Le titre chute d'environ **41 % à l'ouverture** après une perte trimestrielle ajustée et l'aveu que l'inflation a dépassé les prévisions internes. Première démonstration que le modèle, à ce niveau de valorisation, ne tolère aucune compression de marge.

**2022 dans son ensemble — Compression de multiple.** La remontée des taux réels frappe frontalement les actifs de croissance non générateurs de trésorerie. Dutch Bros en fait partie par construction.

**Novembre 2025 — Cession du président exécutif.** Boersma vend 2,5 millions d'actions pour 136,9 M$. Opération pré-planifiée sous 10b5-1, mais le signal pèse mécaniquement sur le sentiment.

**6 août 2026 — La séance qui définit le dossier.** Malgré un dépassement du consensus sur le chiffre d'affaires **et** le bénéfice, un cinquième trimestre consécutif de surprise positive et une guidance relevée, le titre perd **~19 % en une séance** pour clôturer à 53,32 $. Le déclencheur : une guidance orale de comparables T3 à **+4-5 %**, contre +5,8 % au T2, et la confirmation des pressions sur les coûts du café et de l'occupation. Le repli hebdomadaire dépasse 18 %.

---

### Où en est le titre aujourd'hui

| Indicateur | Valeur |
|---|---|
| Cours (28 août 2026) | **49,91 $** |
| Performance 52 semaines | **-31,8 %** |
| Plus haut / plus bas 52 sem. | ~74,65 $ / ~44,58 $ |
| Moyenne mobile 50 j / 200 j | 61,43 $ / 57,39 $ |
| RSI | 35,7 |
| Objectif consensus (26 analystes) | **77,76 $ (+59,9 %)** — « Strong Buy » |

Le titre cote **sous ses deux moyennes mobiles**, dans un RSI proche de la zone de survente, avec un écart de près de 60 % vis-à-vis de l'objectif consensus.

---

### Facteurs structurels de volatilité

- **Bêta 2,33** : le titre amplifie systématiquement les mouvements de marché
- **Valorisation à effet de levier sur la croissance** : à 70x les bénéfices, chaque point de comparable vaut plusieurs points de cours
- **Intérêt vendeur élevé** (10,96 % du flottant) : rallyes brutaux possibles sur bonne nouvelle
- **Flottant restreint** : 130 millions de titres sur 188 millions, contrôle verrouillé — l'offre disponible est limitée
- **Absence de guidance trimestrielle** : l'information arrive par blocs, tous les 90 jours, ce qui concentre la volatilité sur les jours de publication`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du chiffre d'affaires** :
- **Nouvelles unités** : ≥ 185 ouvertures en 2026 ; l'acquisition des 65 sites Salad and Go pourrait porter le rythme d'expansion à ~20 % en 2027 contre ~16,5 % en 2026 (estimation William Blair). Contribution : **+18 à +22 points/an**
- **Comparables** : +5 à +6 % en 2026 (guidance), puis normalisation attendue vers **+3 à +5 %** — bases plus exigeantes, cannibalisation croissante, élasticité-prix démontrée
- **Effet prix** : +2 à +3 %/an ; la sensibilité du trafic au T2 2026 limite la marge de manœuvre
- **Croissance totale du CA** : **~28-30 % en 2026**, puis **~20-24 %** en 2027-2028 (consensus 3 ans : ~25 %/an)

**Levier opérationnel** :
- **SG&A ajusté** en repli de 90 pb au T2 2026 : le levier de structure est réel et devrait se poursuivre
- **Contrepoids** : ~60 pb de pression COGS (café + alimentaire) et hausse continue des charges d'occupation avec les baux build-to-suit
- **Net** : marge d'EBITDA ajusté attendue autour de **18,3-18,5 %** en 2026 (385-390 M$ sur 2,10-2,13 Mds$), soit **en léger repli** ; retour à l'expansion possible en 2027-2028 si le café se détend

**Coûts financiers** : dette totale 1,21 Md$, couverture des intérêts 6,6x. Le capex relevé à 350-370 M$ dépasse le FCF — un recours accru à la dette ou aux capitaux propres est probable si le rythme d'ouverture accélère en 2027.

**Dilution** : **+8,03 % d'actions sur douze mois**. C'est l'hypothèse la plus sous-estimée du modèle. Rémunération en actions, échanges d'unités OpCo et financement de la croissance érodent le BPA d'environ **3 à 5 points par an** même quand le résultat net progresse.

---

### Estimations BPA

| Exercice | BPA (dilué, GAAP) | Croissance | P/E au cours actuel (~49,91 $) |
|---|---|---|---|
| 2024 (réalisé) | **0,34 $** | — | — |
| 2025 (réalisé) | **0,64 $** | +88 % | — |
| TTM (juin 2026) | **0,71 $** | — | **~70x** |
| **2026E** | **0,78-0,85 $** | **+22-33 %** | **~59-64x** |
| **2027E** | **1,00-1,15 $** | **+25-35 %** | **~43-50x** |
| **2028E** | **1,25-1,50 $** | **+22-30 %** | **~33-40x** |

*Le consensus de marché anticipe une croissance du BPA d'environ **28 %/an sur trois ans** et un P/E prospectif 2026 de **~43x** sur la base du bénéfice ajusté (supérieur au BPA GAAP retenu ci-dessus).*

---

### Sensibilité

- **Scénario haussier** (comparables ≥ 6 %, café détendu par la récolte brésilienne record 2026/27, occupation maîtrisée, 200+ ouvertures) : BPA 2028 vers **1,60 $** → P/E 2028 ~31x au cours actuel. Cohérent avec l'objectif consensus de 77,76 $.
- **Scénario de base** : BPA 2028 ~**1,35 $** → P/E 2028 ~37x. Correct pour une croissance de 20 %+, mais sans marge de sécurité.
- **Scénario baissier** (comparables à +2 %, cannibalisation, occupation qui dérape, dilution à 8 %/an) : BPA 2028 ~**1,00 $** → P/E 2028 ~50x. À ce niveau, le multiple se comprime brutalement.

**Conclusion** : le BPA de Dutch Bros n'est pas le bon indicateur de suivi à court terme — il est écrasé par l'amortissement des ouvertures et la dilution. Les deux juges de paix réels sont **la croissance du trafic à périmètre comparable** et le **capex par boutique**. Si le trafic tient au-dessus de +3 % et que le capex par unité reste sous 1,5 M$, le BPA suit mécaniquement. Sinon, aucune projection ne tient.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Avantages concurrentiels et pérennité des barrières

**1. Une piste d'expansion exceptionnellement longue et documentée.** 1 225 boutiques aujourd'hui, **2 029 visées en 2029**, **7 000 en cible de long terme**. Le management affirme détenir **90 % du pipeline immobilier** nécessaire pour atteindre le jalon 2029. Dans un secteur où l'incertitude porte habituellement sur la demande, elle porte ici sur l'exécution — un problème beaucoup plus maîtrisable.

**2. Une économie unitaire qui reste intacte.** AUV d'environ 2,1-2,2 M$ sur un format sans salle, marge de contribution boutique maintenue à **~30,6 %** malgré l'inflation du café et de l'occupation. Le modèle n'est pas cassé par la croissance — il est simplement plus cher à répliquer.

**3. Un moteur organique authentique.** **Treize trimestres consécutifs** de comparables positives, **huit** de croissance du trafic. Les boutiques en propre affichent +8,3 % au T2 2026. Ce n'est pas de la croissance achetée : c'est de la demande.

**4. Un actif de fidélité de premier ordre.** **73 % des transactions** passent par Dutch Rewards, contre ~60 % chez Starbucks. La segmentation client produit sa plus forte contribution aux comparables à ce jour. La monétisation systématique de cette base est un levier **encore largement non exploité**.

**5. Une portabilité de marque désormais prouvée.** La deuxième boutique de Chicago tourne à ~7 M$ annualisés avec un record d'ouverture. L'objection historique — « ça ne marche qu'à l'ouest des Rocheuses » — vient d'être invalidée sur le marché urbain le plus exigeant.

**6. Une préemption immobilière opportuniste.** L'achat de **65 sites Salad and Go pour 105 M$** dans quatre États où la notoriété est déjà installée transforme la faillite d'un concurrent en accélérateur de pipeline. William Blair estime que cela pourrait porter la croissance d'unités à **~20 % en 2027**.

**7. Une valorisation qui vient de se dégonfler de 32 %.** Le titre a perdu près d'un tiers de sa valeur sur douze mois et cote sous ses moyennes mobiles 50 et 200 jours, avec un objectif consensus à **77,76 $** (26 analystes, « Strong Buy »). À P/CA prospectif de 3,9x, Dutch Bros se paie comme Starbucks tout en croissant dix fois plus vite.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques susceptibles de nuire durablement

**1. Le rendement du capital est inférieur à son coût.** **ROIC 8,42 % contre un WACC estimé à 15,34 %.** Pour une entreprise dont la thèse consiste à déployer 350-370 M$ par an, c'est le chiffre qui condamne ou sauve le dossier. Tant que cet écart ne se referme pas, chaque nouvelle boutique **détruit théoriquement de la valeur** au coût du capital actuel. Le pari haussier suppose que la maturation des cohortes le comble ; rien ne le garantit.

**2. Le trafic système s'effondre de +5,1 % à +1,7 % en un trimestre.** Le management invoque bases de comparaison, extinction de la hausse tarifaire et anniversaire alimentaire. L'hypothèse alternative — que **les nouvelles boutiques cannibalisent les anciennes** dans une stratégie de densification assumée — n'est jamais discutée en conférence. C'est mathématiquement le risque numéro un d'un modèle qui ouvre 185 unités par an dans ses propres marchés.

**3. La croissance ne se convertit pas en trésorerie.** 365,7 M$ de flux d'exploitation, **290,5 M$ absorbés par le capex**, **75,2 M$ de FCF** pour 1,88 Md$ de chiffre d'affaires. Un P/FCF de **125x**. Ajoutez une dilution de **8 %/an** et une dette nette de 938 M$ : l'actionnaire finance une croissance dont il ne perçoit encore rien.

**4. Une concurrence capital-light qui court plus vite.** **7 Brew**, adossé à Blackstone, franchisé donc sans consommation de bilan propre, a dépassé 777 unités avec ~340 en pipeline. **Scooter's** compte 932 unités. Starbucks contre-attaque avec 1 500 rénovations de format. Dutch Bros paie chaque boutique cash pendant que ses concurrents les font financer par des franchisés.

### Analyse pré-mortem
**Que s'est-il passé si le titre vaut 30 $ dans deux ans ?** Séquence probable : les comparables système passent sous +2 % à mesure que la densification cannibalise ; les charges d'occupation continuent de monter avec les baux build-to-suit ; le capex reste engagé sur des ouvertures décidées 18 mois plus tôt ; la marge d'EBITDA se contracte de 100 à 150 pb ; le marché cesse de valoriser le compteur d'unités et exige du FCF. Le multiple passe de 70x à 30x les bénéfices. Aucune de ces étapes ne suppose un échec — seulement une normalisation.

### Les multiples actuels sont-ils trop élevés ?
**Oui, à peu près sur tous les axes sauf un.** P/E 70x, EV/EBITDA 32x, EV/EBIT 55x, P/FCF 125x, P/B 8,6x. Le seul ratio défendable est le P/CA prospectif à 3,9x — et il ne l'est que parce qu'on le compare à Starbucks, qui convertit ses ventes en trésorerie alors que Dutch Bros ne le fait pas encore. **Un PEG de 1,34 empêche toutefois de qualifier la valorisation d'absurde** : elle est tendue, pas délirante.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : les deux camps se trompent d'indicateur. Les haussiers comptent les boutiques ; les baissiers comptent les multiples. Le seul chiffre qui décide de l'issue est l'**écart ROIC-WACC**, et il n'apparaît dans aucun communiqué de presse ni aucune question d'analyste.

Il y a plus dérangeant. Dutch Bros est une **enseigne de restauration valorisée comme une plateforme technologique** alors qu'elle possède les caractéristiques économiques inverses : intensité capitalistique élevée, coûts de changement nuls, pouvoir de prix limité, aucun effet de réseau. La croissance est réelle et l'exécution est bonne — mais elle s'achète, boutique par boutique, à 1,4 M$ pièce. **Le marché paie un multiple de logiciel pour un modèle de béton.** Ce décalage se résout de deux façons : soit le ROIC monte vers 15 %, soit le multiple descend vers 30x. La deuxième option est plus courante que la première.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Structure Up-C, double classe et TRA — RISQUE ÉLEVÉ
C'est le signal structurel dominant du dossier. Dutch Bros Inc. est la société cotée ; l'activité réside dans **Dutch Bros OpCo**, dont elle est membre gérant. Les détenteurs pré-IPO conservent des unités OpCo échangeables contre des actions de classe A.

Trois conséquences comptables directes :
- Un **intérêt minoritaire (non-controlling interest) important** : le résultat net consolidé et le résultat attribuable à Dutch Bros Inc. divergent significativement. Au T2 2026, le résultat net progresse de 34,5 % tandis que le résultat attribuable à Dutch Bros progresse de 46,0 % — l'écart provient entièrement de l'allocation aux intérêts minoritaires. **Toute comparaison de BPA doit préciser quel numérateur est utilisé.**
- Deux **accords de restitution d'impôt (TRA)** — Exchange TRA et Reorganization TRA — engageant la société à reverser **85 % de certains avantages fiscaux** aux membres continuants et aux détenteurs pré-IPO. Il s'agit d'un **passif à long terme réel** dont le montant dépend d'hypothèses de taux et de résultats futurs, révisé à chaque échange d'unités.
- Des **classes B, C et D** sans droits économiques équivalents, dont la classe B à **dix voix par action** détenue par le président exécutif.

**À surveiller** : l'évolution du passif TRA d'un trimestre à l'autre, et les révisions d'estimation qui le concernent — elles transitent par le compte de résultat.

### Contrats de location (IFRS 16 / ASC 842) — RISQUE ÉLEVÉ ET CROISSANT
C'est le poste que la croissance rend le plus opaque. La transition vers des **baux build-to-suit** allonge la durée et le montant des engagements. Les charges d'occupation atteignent **16,3 % du chiffre d'affaires**, en hausse.

**À surveiller** :
- Le **droit d'utilisation et le passif locatif** rapportés aux capitaux propres (975 M$) et à l'EBITDA
- La **durée moyenne résiduelle** des baux et le **taux d'actualisation** retenu — un taux optimiste minore le passif
- Les **engagements sur baux signés mais non commencés** : avec 185 ouvertures par an, ce hors-bilan est significatif et ne figure pas dans la dette de 1,21 Md$
- Le traitement comptable des opérations **build-to-suit** : la qualification en bail simple plutôt qu'en actif financé déplace des centaines de millions hors du bilan

### Métrique ajustée — RISQUE MODÉRÉ À ÉLEVÉ
L'EBITDA ajusté (**113,7 M$** au T2 2026) est la métrique mise en avant par le management et sert de base à la guidance. Il exclut l'amortissement, la rémunération en actions et divers éléments. Le résultat net GAAP du trimestre est de **51,6 M$**, soit **moins de la moitié**.

**À surveiller** : l'écart entre EBITDA ajusté et EBITDA standardisé (**322 M$ TTM**), et la récurrence des éléments exclus. Des retraitements qui se répètent chaque trimestre ne sont pas exceptionnels — ce sont des coûts.

### Rémunération en actions et dilution — RISQUE MODÉRÉ À ÉLEVÉ
Nombre d'actions en hausse de **+8,03 % sur douze mois** et **+5,79 % sur le seul trimestre**. Le rendement de rachat est de **-8,03 %** : l'actionnaire est dilué, pas rémunéré.

**À surveiller** : la part de la SBC dans le retraitement de l'EBITDA ajusté, et le rythme d'échange des unités OpCo — chaque échange dilue et déclenche simultanément une obligation TRA.

### Parties liées — RISQUE MODÉRÉ, À DOCUMENTER
Les documents déposés au tribunal des faillites du Texas dans l'affaire Salad and Go mentionnent **Boersma Bros, LLC**, holding de l'Oregon liée aux fondateurs, comme partie à l'accord d'acquisition d'actifs à **105 M$**. La transaction est présentée par ailleurs comme une acquisition de Dutch Bros Inc.

**À vérifier impérativement** dans le prochain 10-Q : l'entité acquéreuse effective, le traitement comptable de l'opération, et l'existence éventuelle de baux ou de transferts entre l'entité liée et la société cotée. Ce n'est pas un signal de fraude ; c'est un point qui exige un éclaircissement explicite dans les annexes.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE À MODÉRÉ
Les acquisitions (Clutch Coffee Bar ~20 M$, franchise Phoenix, sites Salad and Go 105 M$) génèrent du goodwill, mais les montants restent modestes rapportés à un actif total de plusieurs milliards. Le bilan est dominé par des actifs corporels et des droits d'utilisation, pas par de l'incorporel. **C'est le seul poste où le profil est plus sain que la moyenne du secteur.**

### Comptabilisation des revenus — RISQUE FAIBLE
Ventes au comptant au consommateur final, reconnaissance immédiate. Aucune complexité de délimitation. Deux points mineurs : les **passifs de fidélité Dutch Rewards** (revenus différés liés aux points non consommés) et les **cartes cadeaux non utilisées** (breakage). À taille croissante, ces estimations méritent un suivi.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ
Flux d'exploitation de 365,7 M$ pour un résultat net de 92,4 M$ : l'écart s'explique normalement par 134,6 M$ d'amortissements et la SBC. **Rien d'anormal ici.** Le problème n'est pas la qualité du résultat, c'est sa destination : **290,5 M$ partent en capex**, laissant 75,2 M$ de FCF.

---

### Verdict global
**Risque comptable : MODÉRÉ — structurel plutôt que discrétionnaire.** Aucun signal de comptabilité agressive n'apparaît sur les postes classiques (revenus, goodwill, créances). L'entreprise est auditée, la communication chiffrée est précise et les pressions de coûts sont quantifiées au point de base — ce qui est à porter au crédit de la direction.

Les zones de vigilance sont **architecturales** : la structure Up-C et les TRA transfèrent de la valeur du flottant vers les initiés de façon contractuelle et permanente ; les engagements locatifs build-to-suit constituent un levier hors bilan croissant ; et l'Altman Z-Score à **2,7**, sous le seuil de 3,0, rappelle que l'intensité capitalistique laisse peu de marge d'erreur. Ce ne sont pas des dissimulations — ce sont des choix de structure que l'investisseur doit accepter en connaissance de cause.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Christine Barone et l'équipe Dutch Bros

### Allocation du capital et rendement

**1.** Votre ROIC ressort à **8,4 %** pour un coût moyen pondéré du capital estimé autour de **15 %**. Vous investissez 350 à 370 M$ par an. **À quelle échéance précise le ROIC dépasse-t-il le WACC**, et quels jalons trimestriels devons-nous suivre pour vérifier votre trajectoire ?

**2.** Vous avez relevé le capex de 270-290 M$ à **350-370 M$ en un seul trimestre**, soit près de +29 %, pour un nombre d'ouvertures inchangé. **Qu'est-ce qui a changé** : le coût par boutique, le mix build-to-suit, ou l'anticipation d'ouvertures 2027 ?

**3.** Quel est aujourd'hui le **capex moyen par boutique** et la **période de retour sur investissement** pour la cohorte 2026, comparée à la cohorte 2022 ? Si l'écart se creuse, comment le justifiez-vous ?

**4.** À quel niveau de dette nette sur EBITDA ajusté ralentiriez-vous le rythme d'ouverture ? Vous êtes à **3,12x** avec un FCF de 75 M$ inférieur au capex.

### Trafic et cannibalisation — le point aveugle

**5.** Le trafic système est passé de **+5,1 % au T1 à +1,7 % au T2**. Vous invoquez les bases de comparaison, le prix et l'anniversaire alimentaire. **Quelle part attribuez-vous à la cannibalisation** entre boutiques dans vos marchés densifiés ? Publiez-vous cette mesure en interne ?

**6.** Quel est l'**impact moyen sur les ventes d'une boutique existante** lorsqu'une nouvelle ouvre dans un rayon de trois kilomètres ? Combien de temps met-elle à récupérer ?

**7.** L'écart entre comparables des boutiques en propre (+8,3 %) et du système (+5,8 %) persiste depuis plusieurs trimestres. **Pourquoi vos franchisés sous-performent-ils**, et cela justifie-t-il d'accélérer les rachats ?

### Prix, coûts et marge

**8.** La décélération du trafic coïncide avec l'extinction de la hausse tarifaire de début d'année. **Quelle élasticité-prix mesurez-vous** réellement, et cela limite-t-il votre capacité à répercuter la hausse du café en 2027 ?

**9.** Vous chiffrez la pression café à ~60 pb de COGS en 2026. La récolte brésilienne 2026/27 est annoncée record. **Quelle part de vos besoins 2027 est déjà couverte, et à quel prix moyen** par rapport au spot actuel ?

**10.** Les charges d'occupation atteignent **16,3 % du chiffre d'affaires** et vous anticipez une hausse supplémentaire. **Où est le plafond ?** Quelle marge de contribution boutique cible visez-vous à horizon 2028 ?

### Concurrence

**11.** **7 Brew** croît plus vite que vous **sans consommer son propre bilan**, grâce à un modèle franchisé adossé à Blackstone. Vous avez au contraire choisi d'internaliser vos franchisés. **Pourquoi le modèle intégré est-il supérieur** quand le capital est cher ?

**12.** Trois enseignes de café figuraient pour la première fois dans le top 10 Technomic en janvier 2026. **Combien de vos marchés sont désormais en concurrence directe avec 7 Brew ou Scooter's**, et quel effet mesurez-vous sur les comparables de ces zones ?

### Gouvernance et structure

**13.** La structure Up-C avec double classe donne à Travis Boersma **~73 % des droits de vote pour ~38,8 % du capital**, et les TRA transfèrent **85 % de certains avantages fiscaux** aux détenteurs pré-IPO. **Existe-t-il un calendrier de simplification** de cette structure, ou l'actionnaire minoritaire doit-il la considérer comme permanente ?

**14.** Les documents de faillite de Salad and Go mentionnent **Boersma Bros, LLC** comme partie à l'acquisition des 105 M$ d'actifs. **Quelle est l'entité acquéreuse effective**, et quelles relations contractuelles lieront cette entité à Dutch Bros Inc. après la clôture ?

### Vision

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui — et que le marché n'a pas encore identifié ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le moat n'existe pas — il y a un format, et un format se copie

Les haussiers parlent de « marque », de « culture », de « fidélité ». Regardons ce qui protège réellement les marges. Coûts de changement : **nuls**. Effet de réseau : **aucun**. Brevet, licence, actif rare : **aucun**. Pouvoir de prix : **démontré comme limité** — le trafic système s'effondre à +1,7 % dès l'extinction de la hausse tarifaire.

Ce que possède Dutch Bros, c'est un **format de kiosque à double drive-thru** et un savoir-faire de service. Le format est reproduit à l'identique par **7 Brew**, **Scooter's**, **Black Rock** et **Swig**. Le savoir-faire est réel mais s'érode statistiquement à mesure qu'on embauche des milliers de personnes par an pour ouvrir 185 boutiques. Un moat qui exige une exécution parfaite et permanente pour subsister n'est pas un moat : **c'est une contrainte d'exploitation**.

### 2. La croissance est achetée, pas gagnée

Sur les +32,5 % de croissance du T2 2026, environ **quatre cinquièmes proviennent des nouvelles unités et des rachats de franchisés** — c'est-à-dire du capital déployé. La demande organique, à parc constant, contribue pour **+5,8 %**, et **+1,7 % en volume**.

Or ce capital coûte cher : **350-370 M$ par an**, en hausse de +29 % en un trimestre, pour un ROIC de **8,4 %** contre un coût du capital de **~15 %**. Autrement dit : **Dutch Bros achète du chiffre d'affaires à un prix supérieur à sa valeur actualisée.** Tant que le marché valorise le compteur d'unités, ça fonctionne. Le jour où il valorise le rendement, ça s'arrête.

### 3. Concentration du risque : tout repose sur un seul chiffre

Il n'y a pas de concentration client (aucun client ne pèse plus qu'un gobelet) ni de concentration géographique catastrophique. **La concentration est ailleurs, et elle est totale : sur le rythme d'ouverture.** Retirez les 185 ouvertures annuelles et le chiffre d'affaires croît de 5 %, l'EBITDA de moins, et le titre ne vaut plus 70x les bénéfices.

Ce rythme dépend de trois ressources rares et non contrôlées : des **emplacements drive-thru** (raison pour laquelle il a fallu acheter les carcasses d'un concurrent en faillite pour 105 M$), des **managers formés** (525 candidats, contrainte revendiquée par la direction elle-même), et du **capital** (FCF de 75 M$ pour un capex de 290 M$). **Les trois se resserrent simultanément.**

### 4. La cannibalisation est le sujet que personne ne veut nommer

La stratégie assumée est la **densification** : remplir la carte plutôt que planter des drapeaux. Mécaniquement, ouvrir 185 boutiques par an dans ses propres marchés déplace des clients existants. La chute du trafic système de **+5,1 % à +1,7 % en un trimestre** est exactement la signature statistique d'une cannibalisation qui commence à mordre.

Le management propose trois explications techniques — base, prix, anniversaire alimentaire — et **ne mentionne jamais la cannibalisation**. Aucun analyste ne pose la question. **Aucune métrique de transfert de ventes n'est publiée.** Quand une entreprise ne communique pas un chiffre que son modèle rend inévitable, l'investisseur doit supposer qu'il n'est pas flatteur.

### 5. Le concurrent que les haussiers sous-estiment : 7 Brew

Tout le monde compare Dutch Bros à Starbucks. C'est confortable : Starbucks est gros, lent et en redressement. **Le vrai danger est 7 Brew.**

Fondé en 2017, adossé à **Blackstone**, il a dépassé sa **777ᵉ unité** dans 38 États avec ~340 ouvertures en pipeline. Il vend des boissons **2 à 4 dollars moins cher** que Starbucks, sur exactement le même format double drive-thru, en visant des zones sous-desservies. Et surtout : **il est franchisé.** Sa croissance est financée par le bilan de ses franchisés, pas par le sien.

Comparons les modèles. Dutch Bros paie 1,4 M$ par boutique, porte le bail, l'exploitation et le risque. 7 Brew encaisse une redevance et n'immobilise rien. **À croissance égale, 7 Brew est structurellement plus rentable en capital.** Dutch Bros a choisi la voie inverse — internaliser ses franchisés — précisément au moment où le capital est devenu cher. Ajoutez **Scooter's** (932 unités), **Black Rock**, **Swig** et l'offensive boissons de McDonald's, Chick-fil-A et Taco Bell : la catégorie que Dutch Bros a contribué à créer est en train d'être **surconstruite par cinq acteurs simultanément**.

### 6. La structure de gouvernance et les transferts de valeur

**Travis Boersma détient ~73 % des droits de vote pour ~38,8 % du capital.** Dutch Bros est une « controlled company » : l'actionnaire minoritaire n'a **aucun recours** sur l'élection du conseil ou une décision majeure. Il a par ailleurs vendu **2,5 millions d'actions pour 136,9 M$** en novembre 2025, soit la quasi-totalité de sa détention directe — sous plan 10b5-1, donc irréprochable sur la forme, mais les initiés ont été vendeurs nets d'environ **103 M$** sur douze mois.

Plus structurel : les **accords de restitution d'impôt** engagent la société à reverser **85 % de certains avantages fiscaux** aux détenteurs pré-IPO. C'est un transfert permanent et contractuel du flottant vers les initiés, dont le montant croît avec les échanges d'unités OpCo — lesquels **diluent simultanément** l'actionnaire de classe A. La dilution atteint **+8,03 % sur douze mois**. Enfin, l'entité mentionnée dans les documents de faillite de Salad and Go, **Boersma Bros, LLC**, appelle une clarification explicite.

### 7. Quelles hypothèses doivent se vérifier pour justifier le cours actuel ?

À 49,91 $ pour un BPA TTM de 0,71 $, il faut simultanément :
- une croissance du BPA de **~28 %/an sur trois ans** (hypothèse consensus)
- un maintien des comparables **au-dessus de +4 %** malgré la densification
- un **arrêt de la contraction de la marge d'EBITDA**, alors que le café et l'occupation poussent en sens inverse
- une **dilution qui ralentit** sous 5 %/an
- 185+ ouvertures par an **sans dégradation du capex par unité**

**Cinq conditions, toutes nécessaires.** Le titre est déjà passé de 85,37 $ à 49,91 $ précisément parce que le marché commence à douter de la deuxième.

### Que se passe-t-il si la croissance déçoit de 20 à 30 % ?
Croissance du BPA ramenée de 28 % à 20 %/an : BPA 2028 vers **1,05 $** au lieu de 1,35 $. À ce moment-là, le marché ne paie plus 40x mais 25-30x une enseigne de restauration à croissance de 15 %. **Cours implicite : 26 à 31 $, soit -38 % à -48 %.** Ce n'est pas un scénario catastrophe — c'est simplement le multiple d'un Chipotle appliqué à une entreprise moins rentable.

### Le scénario unique de dommage permanent
**La surconstruction de la catégorie drive-thru café.** Dutch Bros, 7 Brew, Scooter's, Black Rock et Swig ouvrent simultanément des milliers de kiosques sur le même bassin de consommateurs, tandis que Starbucks, McDonald's, Chick-fil-A et Taco Bell défendent leur créneau boissons. Le résultat mécanique d'une saturation : **AUV en baisse, guerre des prix, marges de contribution qui se compriment**. Dans ce scénario, les 185 ouvertures annuelles cessent d'être un actif pour devenir **un passif de baux longue durée sur des emplacements devenus marginaux**.

Probabilité ? **25 à 35 %** à horizon 2029. Ce n'est pas le scénario le plus probable, mais c'est celui qui rend les 350 M$ de capex annuel irrécupérables.

### Conclusion short
Dutch Bros est une **bonne entreprise dirigée avec compétence** — les comparables sont réelles, le trafic est réel, le programme de fidélité est de première qualité, et Christine Barone a redressé une trajectoire dégradée. **Ce n'est pas la thèse qui est contestée : c'est le prix.**

Le marché applique un multiple de plateforme technologique à un modèle de **béton, de baux et de main-d'œuvre** : intensité capitalistique élevée, ROIC sous le WACC, coûts de changement nuls, pouvoir de prix limité, dilution permanente, contrôle actionnarial verrouillé. Les 32 % de baisse sur douze mois n'ont pas corrigé cette anomalie — ils l'ont seulement rendue moins extrême. Tant que le ROIC ne rejoint pas le coût du capital, **chaque nouvelle boutique est une décision d'investissement dont l'actionnaire minoritaire supporte le coût sans en percevoir le rendement.**`,
  },
];

export default { ...meta, modules };
