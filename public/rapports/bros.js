// ============================================================
//  DOSSIER : Dutch Bros Inc. (BROS)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Données publiées jusqu'au 2 octobre 2026
//  (cours de référence : 38,71 $ le 2 octobre 2026).
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "bros",                     // identifiant d'URL : /dossier/bros
  ticker: "BROS",
  name: "Dutch Bros Inc.",
  exchange: "NYSE",
  sector: "Restauration rapide — boissons en drive-thru",
  initials: "BROS",                 // affiché dans la pastille
  tagline: "Des kiosques drive-thru qui vendent 2,2 M$ par an chacun : 1 225 boutiques aujourd'hui, 2 029 visées en 2029.",
  riskScore: 65,                    // score du rapport de risque (grille v1)
  riskLabel: "Risque modéré",       // indicatif : la couleur se dérive toujours de riskScore
  // Nom du fichier HTML déposé dans public/rapports/ :
  riskReport: "bros.html",
  updated: "2026-10",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Dutch Bros exploite une chaîne de **boutiques de boissons en drive-thru** aux États-Unis. Fondée en 1992 à Grants Pass (Oregon) par les frères **Dane et Travis Boersma** autour d'un chariot à expresso, l'entreprise est cotée au NYSE depuis septembre 2021 (introduction à 23 $) et a transféré son siège à Tempe (Arizona) en 2025.

En termes simples : Dutch Bros vend **de la vitesse et de la bonne humeur dans un gobelet**. Le format est minuscule — un kiosque sans salle, souvent à double file, avec des équipiers qui prennent les commandes sur tablette le long de la file — mais il produit le chiffre d'affaires d'un restaurant complet : **AUV systémique record de 2,19 M$** sur douze mois glissants à fin juin 2026.

Le modèle tient en quatre paramètres :
- **Un coût d'ouverture faible** : environ **1,3 M$ par boutique** grâce au passage au « build-to-suit » (un promoteur construit, Dutch Bros loue), contre ~1,8 M$ en 2024.
- **Un volume élevé** : 2,19 M$ de ventes annuelles par boutique, soit un ratio ventes / investissement supérieur à 1,5.
- **Une marge de boutique solide** : contribution des boutiques en propre de **30,6 %** au T2 2026.
- **Une machine d'ouverture** : 154 boutiques ouvertes en 2025, au moins **185** prévues en 2026, objectif de **2 029 boutiques en 2029** et potentiel revendiqué de plus de 7 000 à long terme.

**Ordres de grandeur** : CA 2025 de **1,64 Md$ (+27,9 %)**, EBITDA ajusté de **303 M$ (+31 %)**, BPA ajusté de **0,76 $**. Au T2 2026 : CA de **550,9 M$ (+32,5 %)**, résultat net de 51,6 M$, EBITDA ajusté de 113,7 M$. Prévision 2026 relevée à **2,10–2,13 Md$**.

## Principaux produits et services

- **Boissons sur mesure** : cafés à base d'expresso, cold brew infusé à l'azote, thés, limonades, smoothies, boissons givrées — très personnalisables, souvent sucrées, orientées vers une clientèle jeune.
- **Dutch Bros Rebel** : boisson énergisante maison, devenue l'un des piliers du panier ; complétée par le **Myst Energy Refresher**. Une part importante des ventes ne dépend donc pas du café.
- **Offre alimentaire** : passée de quatre boutiques à Phoenix début 2025 à plus de 300 boutiques dans 11 États fin 2025 ; déploiement sur tout le réseau prévu **d'ici fin 2026**.
- **Application Dutch Rewards et commande mobile** : **73 % des transactions** passent par le programme de fidélité au T2 2026.

## Clients, fournisseurs, concurrents

**Clients** : le grand public, avec une forte surreprésentation des 18–34 ans ; visites fréquentes, souvent quotidiennes. Aucun client ne pèse individuellement.

**Fournisseurs** : café vert acheté auprès d'importateurs et torréfié en interne à Grants Pass ; produits laitiers, sirops, emballages et ingrédients de l'offre alimentaire achetés auprès de fournisseurs non publiés nominativement ; promoteurs et bailleurs immobiliers pour les terrains et les bâtiments.

**Concurrents** : **Starbucks** (le géant, en reprise avec des ventes comparables mondiales de +7,9 % au T3 de son exercice 2026), **7 Brew** (le rival direct du drive-thru, ~777 boutiques et ~2 M$ d'AUV), **Scooter's Coffee**, **McDonald's** (McCafé), **Black Rifle Coffee**, ainsi que les chaînes régionales de boissons et de sodas personnalisés.

## Modalités contractuelles et de paiement

- **Boutiques en propre (888 sur 1 225)** : paiement immédiat par carte, application ou espèces — **pas de créances clients** significatives (18,9 M$ au bilan). Les cartes cadeaux et les points de fidélité créent des **produits constatés d'avance** (53,7 M$).
- **Franchise (337 boutiques)** : Dutch Bros n'accorde plus de nouvelles franchises depuis 2017. Les franchisés historiques versent des **redevances et contributions marketing** sur leurs ventes et **achètent leurs produits** (café, Rebel, ingrédients) à Dutch Bros. L'entreprise **rachète progressivement** ces franchises (Phoenix East Valley, 31 boutiques, en juillet 2026).
- **Immobilier** : baux de long terme — **1,0 Md$ de dettes locatives** au 30 juin 2026 — plutôt que propriété des murs.

**Lecture** : Dutch Bros est un modèle d'**expansion d'unités** à forte marge de boutique, autofinancé mais très consommateur de capital. La valeur repose sur trois questions : les nouvelles boutiques atteignent-elles l'AUV des anciennes, le trafic par boutique continue-t-il de croître, et le rendement du capital investi finit-il par dépasser son coût ?`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Dutch Bros dans la chaîne de valeur

Dutch Bros est un **transformateur-distributeur verticalisé** : il achète des matières premières agricoles, torréfie son café, conçoit ses recettes, produit sa boisson énergisante sous sa marque, fournit ses franchisés et vend lui-même au consommateur final dans des boutiques qu'il exploite à 72 %.

### Amont — Matières premières et intrants

**Café vert** : arabica acheté auprès d'importateurs et de négociants. Le cours de l'arabica, à des niveaux historiquement élevés en 2025, se répercute dans les comptes avec **deux à trois trimestres de décalage** (rotation des stocks), selon la direction. Les coûts de boissons, nourriture et emballages sont passés de 25,3 % à **26,1 % du CA des boutiques** entre le T2 2025 et le T2 2026.

**Autres intrants** : produits laitiers et alternatives végétales, sirops et arômes, base de la boisson énergisante Rebel, gobelets et emballages, ingrédients de l'offre alimentaire. Les fournisseurs ne sont pas publiés nominativement : c'est un point de transparence limité, mais aussi le signe qu'aucun fournisseur n'est jugé critique.

**Droits de douane** : le café n'est pas produit aux États-Unis ; toute taxe à l'importation pèse sur le coût des boissons. La direction indique avoir sécurisé ses approvisionnements et limité son exposition en 2025.

---

### Dutch Bros — Transformation et distribution

**Torréfaction interne** à Grants Pass (Oregon) : maîtrise des recettes et de la qualité, approvisionnement des boutiques en propre et des franchisés.

**Logistique** : approvisionnement des boutiques en café, ingrédients et emballages (modalités non détaillées publiquement) ; les franchisés achètent leurs produits à Dutch Bros, ce qui alimente le segment « Franchise et autres ».

**Immobilier** : le modèle « build-to-suit » confie la construction à des **promoteurs**, Dutch Bros signant ensuite un bail de long terme. Les conversions de sites existants complètent le pipeline : **Clutch Coffee Bar** (20 boutiques dans les Carolines, ~20 M$, janvier 2026), rachat de la franchise **Phoenix East Valley** (31 boutiques, juillet 2026), offre de **105 M$** sur d'anciens sites **Salad and Go** (perdue face à 7 Brew en septembre 2026).

**Numérique** : application Dutch Rewards (73 % des transactions), commande mobile, publicité payante.

---

### Aval — Clients finaux

**Consommateurs** : clientèle jeune, achats fréquents, panier moyen modeste ; 25 États desservis fin 2025, avec une forte densité dans l'Ouest (Oregon, Californie, Arizona, Texas).

**Franchisés historiques** : clients de Dutch Bros pour les produits, partenaires pour les redevances ; leur base se réduit à mesure que l'entreprise rachète leurs boutiques.

---

### Cartographie du flux

| Étape | Acteurs | Rôle |
|---|---|---|
| Matières | Producteurs et importateurs d'arabica, laiteries, fabricants de sirops et d'emballages | Intrants des boissons |
| Production | **Dutch Bros (torréfaction à Grants Pass)** | Café torréfié, recettes, boisson Rebel sous marque propre |
| Immobilier | Promoteurs « build-to-suit », bailleurs, vendeurs de sites à convertir (Clutch Coffee, franchisés) | Terrains, bâtiments, baux |
| Distribution | Logistique d'approvisionnement (non détaillée publiquement) | Livraison des boutiques et des franchisés |
| Vente | **888 boutiques en propre**, **337 boutiques franchisées** | Préparation et service au drive-thru |
| Client final | Consommateurs (via file, fenêtre ou application) | Achat quotidien |

---

### Les deux points de friction

**1. Le coût du café** : c'est le seul intrant dont le prix peut varier de 50 % en un an. Le mix de Dutch Bros (énergisants, thés, limonades) l'amortit mieux qu'un pur torréfacteur, mais ne l'efface pas.

**2. Les sites** : la croissance dépend de la capacité à trouver des emplacements drive-thru de qualité. La concurrence de 7 Brew, Starbucks et des chaînes de restauration rapide pour ces mêmes parcelles renchérit l'accès — l'enchère perdue sur Salad and Go l'a montré : **7 Brew a offert ~36 % de plus** que Dutch Bros en montant total (pour 73 sites contre 65).`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

Dutch Bros publie **deux secteurs opérationnels** : les **boutiques en propre** (company-operated shops) et **Franchise et autres** (redevances, contributions marketing, ventes de produits aux franchisés). Il n'existe pas d'EBITDA ni de résultat net publiés par secteur : la mesure de rentabilité sectorielle est la **contribution des boutiques** (marge brute avant amortissements), le reste se lit au niveau consolidé.

### Par secteur

| Secteur | T2 2025 | T2 2026 | Croissance | Poids |
|---|---|---|---|---|
| Boutiques en propre | 380,5 M$ | **510,0 M$** | +34,0 % | 92,6 % |
| Franchise et autres | 35,3 M$ | 40,8 M$ | +15,6 % | 7,4 % |
| **Total** | **415,8 M$** | **550,9 M$** | **+32,5 %** | 100 % |

**Lecture** : le secteur en propre croît deux fois plus vite que la franchise, parce que **~90 % des ouvertures sont en propre** et que Dutch Bros rachète ses franchisés. Ces rachats gonflent mécaniquement la croissance du secteur en propre (et réduisent les redevances) sans créer de ventes nouvelles pour le système.

### Rentabilité des boutiques en propre (T2)

| % du CA des boutiques | T2 2025 | T2 2026 | Évolution |
|---|---|---|---|
| Boissons, nourriture, emballages | 25,3 % | 26,1 % | +0,8 pt — café et offre alimentaire |
| Main-d'œuvre | 26,6 % | 25,4 % | −1,2 pt — productivité |
| Loyers et autres | 15,8 % | 16,3 % | +0,5 pt — baux build-to-suit |
| Coûts de pré-ouverture | 1,2 % | 1,6 % | +0,4 pt — rythme d'ouvertures |
| **Contribution des boutiques** | **31,1 %** | **30,6 %** | **−0,5 pt** |

### Trajectoire consolidée

| Période | CA | Croissance | Comparables système | Transactions | EBITDA ajusté | Marge | BPA ajusté |
|---|---|---|---|---|---|---|---|
| T1 2025 | 355,2 M$ | +29,1 % | +4,7 % | +1,3 % | 62,9 M$ | 17,7 % | 0,14 $ |
| T2 2025 | 415,8 M$ | +28,0 % | +6,1 % | +3,7 % | 89,0 M$ | 21,4 % | 0,26 $ |
| T3 2025 | 423,6 M$ | +25 % | +5,7 % | positive | ~78 M$ | ~18,4 % | ~0,19 $ |
| T4 2025 | 443,6 M$ | +29,4 % | +7,7 % | +5,4 % | ~73 M$ | ~16,5 % | 0,17 $ |
| T1 2026 | 464,4 M$ | +30,8 % | +8,3 % | +5,1 % | 79,4 M$ | 17,1 % | 0,16 $ |
| T2 2026 | **550,9 M$** | **+32,5 %** | **+5,8 %** | **+1,7 %** | **113,7 M$** | **20,6 %** | **0,33 $** |

*T3 et T4 2025 : EBITDA et BPA ajustés reconstitués par différence à partir des totaux annuels publiés (303 M$ et 0,76 $).*

**Résultat net consolidé** : 51,6 M$ au T2 2026 contre 38,4 M$ (+34,5 %) ; 75,3 M$ au premier semestre contre 60,8 M$. Le résultat attribuable aux actionnaires de classe A (37,4 M$ au T2) est inférieur au résultat consolidé, une partie revenant aux porteurs de parts de la société opérationnelle (structure « Up-C », voir Red Flags).

### Annuel

| Exercice | CA | Croissance | EBITDA ajusté | Boutiques fin d'année |
|---|---|---|---|---|
| 2022 | 739,0 M$ | +48,4 % | — | — |
| 2023 | 965,8 M$ | +30,7 % | — | — |
| 2024 | 1 281,0 M$ | +32,6 % | ~231 M$ | 982 |
| 2025 | 1 638,2 M$ | +27,9 % | 303 M$ | 1 136 |
| 2026e (prévision) | 2 100–2 130 M$ | ~+29 % | 385–390 M$ | ≥ 1 321 |

---

### Répartition géographique

Dutch Bros ne publie pas de ventilation géographique : **100 % du CA est réalisé aux États-Unis**, dans 25 États fin 2025. Le cœur historique est le Nord-Ouest (Oregon, Washington), l'expansion se fait vers le Sud-Ouest et le Sud (Arizona, Texas, Oklahoma), puis le Sud-Est et le Midwest (entrée dans les Carolines via Clutch Coffee).

**Point clé** : les nouveaux marchés de l'Est sont moins familiers de la marque. La direction affirme que la productivité des nouvelles boutiques reste proche de la moyenne du système, mais c'est **l'hypothèse la plus importante du dossier** : si les boutiques ouvertes loin du berceau historique vendent moins, la croissance par ouverture perd de sa valeur.

---

### Évolution récente — Pourquoi les chiffres ont bougé

- **Accélération du CA** (+29 % → +32,5 %) : ouvertures en hausse (48 au T2 contre 31 un an plus tôt) et rachat de franchises.
- **Décélération du trafic** : transactions système passées de +5,1 % au T1 à +1,7 % au T2 ; la croissance des comparables repose davantage sur le **ticket moyen** (+4,1 %) — prix, offre alimentaire, personnalisation.
- **Marge** : EBITDA ajusté de 20,6 % au T2 contre 21,4 % un an plus tôt — café plus cher et coûts d'ouverture plus élevés, partiellement compensés par la productivité de la main-d'œuvre et le levier sur les frais généraux (13,2 % du CA contre 14,1 %).`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. Économie unitaire et vitesse de service — moat FORT
Un kiosque d'environ 1,3 M$ qui vend 2,19 M$ par an avec une contribution de ~30 % rembourse son investissement en quelques années. Le format double file, les équipiers qui prennent les commandes le long de la file et la commande mobile augmentent le **débit par heure de pointe**, qui est la vraie contrainte d'un drive-thru. C'est l'avantage le plus mesurable du dossier : l'AUV progresse alors même que le réseau s'étend.

### 2. Culture de service et marque émotionnelle — moat RÉEL, difficile à copier
Dutch Bros ne vend pas seulement une boisson : il vend une **interaction de quelques dizaines de secondes** avec des équipiers (les « broistas ») recrutés et promus en interne. Les responsables de boutique sont presque tous issus du réseau, ce qui transmet la culture d'une boutique à l'autre. Une culture ne se brevète pas, mais elle se reproduit mal : c'est ce que 7 Brew tente de copier avec un modèle très proche.

### 3. Fidélisation numérique — moat RÉEL
**73 % des transactions** passent par l'application Dutch Rewards. Les données de fréquence permettent des promotions ciblées et une publicité payante plus efficace. Ce taux est parmi les plus élevés de la restauration américaine.

### 4. Gamme propriétaire — moat RÉEL mais COPIABLE
La boisson énergisante **Rebel** et les boissons très personnalisées (dont beaucoup sans café) différencient l'offre de Starbucks et réduisent la dépendance à l'arabica. Mais une recette se copie : 7 Brew, Swig ou Sonic proposent des boissons comparables.

### 5. Pipeline immobilier et échelle — moat EN CONSTRUCTION
Avec plus de 1 200 boutiques, Dutch Bros dispose d'équipes de développement, de relations avec les promoteurs et d'une marque qui facilite l'accès aux meilleurs emplacements. La direction indique disposer de **~90 % du pipeline** nécessaire pour atteindre 2 029 boutiques. Limite : l'enchère perdue sur Salad and Go montre que cet avantage ne suffit pas face à un concurrent prêt à payer plus.

### 6. Coûts de changement — FAIBLES
Rien n'empêche un client d'aller au drive-thru d'en face. La fidélité repose sur l'habitude, la vitesse et l'expérience — elle doit être **regagnée chaque jour**.

## Positionnement vs concurrence

| Critère | Dutch Bros | Starbucks | 7 Brew | McDonald's (McCafé) |
|---|---|---|---|---|
| Format | Kiosque drive-thru, sans salle | Café avec salle + drive-thru | Kiosque drive-thru | Restaurant + drive-thru |
| Offre | Boissons personnalisées, énergisants | Café, gamme large, nourriture | Boissons personnalisées, énergisants | Café d'appoint, prix bas |
| Prix perçu | Moyen | Élevé | Moyen | Bas |
| Expérience | Service jovial, rapidité | « Troisième lieu », en reprise | Copie du modèle Dutch Bros | Fonctionnelle |
| Modèle | 72 % en propre | Majoritairement en propre aux États-Unis | Franchise | Franchise |
| Croissance du réseau | ~16 % par an | Faible aux États-Unis | Très rapide | Faible |

**Valeur perçue et image de marque** : Dutch Bros est perçu comme **plus jeune, plus chaleureux et moins cher** que Starbucks, avec une identité visuelle (moulin à vent bleu) et une culture d'entreprise très présentes sur les réseaux sociaux. Le marketing repose sur la fidélisation, la publicité payante (introduite récemment) et les nouveautés saisonnières plutôt que sur les promotions agressives.

## Pouvoir de négociation

- **Vis-à-vis des clients** : **modéré** — la marque permet des hausses de prix (ticket +4,1 % au T2), mais le ralentissement du trafic montre que cette marge de manœuvre a des limites dans une clientèle jeune et sensible au prix.
- **Vis-à-vis des fournisseurs** : **modéré** — Dutch Bros est un acheteur significatif de café et d'emballages, mais reste preneur du prix mondial de l'arabica.
- **Vis-à-vis des bailleurs et promoteurs** : **en hausse mais contesté** — la marque est un locataire recherché, mais 7 Brew, Starbucks et les chaînes de restauration rapide se disputent les mêmes parcelles drive-thru.
- **Vis-à-vis des salariés** : **bon** — culture, promotion interne et rémunération attractive pour le secteur réduisent la rotation ; la main-d'œuvre reste néanmoins le premier poste de coût avec le café.
- **Vis-à-vis des franchisés** : **élevé** — plus de nouvelles franchises depuis 2017 et des rachats au gré des opportunités.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Restauration et boissons à emporter (octobre 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E | Rdt div. | ROE moy. 5 ans |
|---|---|---|---|---|---|---|---|
| **Dutch Bros** | **BROS US** | **~6,8 Md$** | **~3,2× (2026e)** | **~34× (TTM)** | **~54× TTM · ~35× 12 mois** | **0 %** | **~4 % (faible)** |
| Starbucks | SBUX US | ~120 Md$ | ~3,6× | ~35× | ~61× TTM · ~36× fwd | ~2,4 % | n.s. (fonds propres négatifs) |
| McDonald's | MCD US | ~215 Md$ | ~10× | ~22× | ~25× | ~2,4 % | n.s. (fonds propres négatifs) |
| Chipotle | CMG US | ~55 Md$ | ~4,5× | ~25× | ~30× | 0 % | ~40 % |
| Wingstop | WING US | ~8 Md$ | ~12× | ~45× | ~55× | ~0,4 % | n.s. (fonds propres négatifs) |
| CAVA | CAVA US | ~8 Md$ | ~6× | n.s. | ~100× | 0 % | faible |
| Luckin Coffee | LKNCY US | ~10 Md$ | ~1,8× | ~15× | ~20× | 0 % | ~20 % |
| 7 Brew | Non coté | n.a. | n.a. | n.a. | n.a. | n.a. | n.a. |

*Dutch Bros : cours de 38,71 $ au 2 octobre 2026, ~178 M d'actions sur une base « entièrement échangée », BPA ajusté 2026e ~0,95 $. Starbucks : données de marché de septembre 2026 (forward P/E ~36×, rendement ~2,4 %). Autres pairs : ordres de grandeur à confirmer sur Bloomberg avant toute utilisation chiffrée.*

---

### Analyse comparative

**Starbucks — Le géant qui se réveille**
Après deux années difficiles, Starbucks a renoué avec la croissance : ventes comparables mondiales de **+7,9 %** au T3 de son exercice 2026 et prévision de BPA relevée. Pour Dutch Bros, c'est la menace la plus sous-estimée : un Starbucks qui retrouve son trafic aux États-Unis récupère une partie des clients que Dutch Bros avait conquis pendant ses difficultés. Starbucks se paie ~36× ses bénéfices attendus, soit à peu près le même multiple que Dutch Bros, pour une croissance bien plus lente mais un dividende de 2,4 %.

**7 Brew — Le clone qui accélère**
Fondé en 2017 en Arkansas, 7 Brew compte environ **777 boutiques** avec un AUV d'environ 2 M$, très proche de celui de Dutch Bros. Modèle franchisé, donc **peu consommateur de capital** et capable de croître très vite. En septembre 2026, 7 Brew a remporté les anciens sites Salad and Go en offrant ~143 M$ contre 105 M$ pour Dutch Bros (63 sites finalement cédés pour ~123,5 M$). C'est le concurrent direct le plus dangereux, mais non coté : aucune transparence sur sa rentabilité.

**McDonald's et Chipotle — Les références de qualité**
Deux modèles matures, très rentables, qui se paient 25 à 30× les bénéfices. Ils rappellent qu'une chaîne de restauration, même excellente, se valorise rarement au-delà de 30× une fois sa croissance normalisée.

**Wingstop et CAVA — Les autres valeurs de croissance**
Croissance d'unités comparable et multiples plus élevés. Ils montrent que le marché paie encore des primes importantes aux « histoires d'expansion », mais ces primes sont volatiles.

**Luckin Coffee — Le contre-modèle**
Petits points de vente à emporter, prix bas, forte digitalisation : Luckin a démontré en Chine qu'un format compact peut évincer Starbucks. Peu de recoupement géographique, mais un rappel que le format de Dutch Bros n'est pas unique.

---

### Lecture de la valorisation

À ~35× les bénéfices des douze prochains mois, Dutch Bros se paie **en ligne avec la médiane de ses pairs de croissance** (~33×) et deux fois la médiane du secteur de la restauration (~18× selon GuruFocus). C'est la première fois depuis son introduction en bourse que le titre n'affiche plus de prime massive : il se payait plus de 100× ses bénéfices en 2025. Le ROE moyen sur cinq ans, faible, rappelle que la rentabilité comptable est récente et que l'essentiel de la valeur repose sur l'expansion future du réseau.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 5 août 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart | T2 2025 |
|---|---|---|---|---|
| Chiffre d'affaires | **550,9 M$** | ~525 M$ | **+4,8 %** | 415,8 M$ |
| BPA ajusté | **0,33 $** | 0,29–0,30 $ | **+11 à +14 %** | 0,26 $ |
| BPA GAAP (classe A) | 0,28 $ | 0,28 $ | conforme | 0,20 $ |
| EBITDA ajusté | 113,7 M$ | ~106 M$ | +7 % | 89,0 M$ |
| Comparables système | +5,8 % | — | — | +6,1 % |
| Comparables boutiques en propre | +8,3 % | — | — | +7,8 % |
| Transactions système | +1,7 % | — | — | +3,7 % |
| Ouvertures | 48 (dont 44 en propre) | — | — | 31 |

**Verdict** : dépassement sur le CA et l'EBITDA, BPA ajusté au-dessus du consensus, BPA GAAP conforme. C'est le **cinquième trimestre consécutif** de dépassement du consensus sur le BPA. Treizième trimestre consécutif de comparables positifs, huitième de transactions positives.

---

### Facteurs clés

- **Ouvertures** : 48 boutiques au T2, 89 sur le semestre ; parc de **1 225 boutiques** au 30 juin.
- **Rachat de franchise** : Phoenix East Valley (31 boutiques) finalisé fin juillet — environ 25 M$ de CA et 5 M$ d'EBITDA ajusté supplémentaires sur le reste de l'année.
- **Ticket moyen** : +4,1 % au niveau système — prix, offre alimentaire et personnalisation.
- **Ralentissement notable** : les transactions système passent de +5,1 % au T1 à +1,7 % au T2, et la direction anticipe des comparables de **+4 à +5 % au T3**, en raison de bases de comparaison plus exigeantes et de l'effet prix qui s'estompe.

---

### Évolution des marges

- **Contribution des boutiques en propre** : 30,6 % contre 31,1 % — café plus cher (+0,8 pt) et coûts de pré-ouverture plus élevés (+0,4 pt), compensés en partie par la main-d'œuvre (−1,2 pt).
- **Frais généraux ajustés** : 13,2 % du CA contre 14,1 % — levier opérationnel au siège.
- **EBITDA ajusté** : 20,6 % contre 21,4 %. Sur l'année, la prévision (385–390 M$ pour ~2,12 Md$) implique ~18,3 %, quasi stable par rapport à 2025 (18,5 %).

---

### Prévisions — Deuxième relèvement de l'année

| Indicateur 2026 | Février | Mai | Août |
|---|---|---|---|
| Chiffre d'affaires | 2,00–2,03 Md$ | relevé (~2,07 Md$ au point médian) | **2,10–2,13 Md$** |
| Comparables système | +3 à +5 % | relevés | **+5 à +6 %** |
| EBITDA ajusté | 355–365 M$ | relevé | **385–390 M$** |
| Ouvertures | ≥ 181 | ≥ 185 | ≥ 185 |
| Investissements | — | — | **350–370 M$** |

**Changement de ton** : confiant sur l'année, plus prudent sur le trimestre en cours. La prévision exclut l'opération Salad and Go, finalement perdue face à 7 Brew.

---

### Signaux d'alerte du bilan

- **Trésorerie** : 268,6 M$ ; dette financière de 198,5 M$ — **trésorerie nette positive** hors loyers.
- **Loyers** : **1,01 Md$ de dettes locatives**, en hausse de 120 M$ en six mois avec le modèle build-to-suit.
- **Accord de partage d'économies fiscales (TRA)** : passif de **973 M$**, en hausse de 152 M$ depuis décembre — dû aux anciens propriétaires à mesure qu'ils échangent leurs parts (voir Red Flags).
- **Flux d'exploitation** : 196,9 M$ au premier semestre (+55 %), mais **investissements prévus à 350–370 M$** sur l'année, en forte hausse : le free cash-flow reste mince (~75 M$ sur douze mois glissants).
- **Stocks** : 41,3 M$ contre 48,9 M$ en décembre — pas d'accumulation anormale.

---

### Réaction du marché

Malgré des chiffres supérieurs aux attentes, le titre a perdu **~12 % après séance** et **~19,5 % sur la semaine**. Lecture : le marché ne payait plus la croissance du CA, mais celle du **trafic** — et la prévision de comparables de +4 à +5 % au T3, avec des transactions en net ralentissement, a remis en cause l'idée que la croissance par boutique pouvait rester forte. L'annonce simultanée d'une acquisition immobilière coûteuse a renforcé les doutes sur l'intensité capitalistique. En septembre, la perte de l'enchère Salad and Go et une série d'objectifs abaissés (JPMorgan, DA Davidson et Jefferies à 60 $) ont prolongé la baisse jusqu'à un plus bas de **37,40 $** le 28 septembre.

**Prochain rendez-vous** : résultats du T3 2026 attendus début novembre. Le juge de paix sera le **trafic** : des transactions positives avec des comparables dans la fourchette de +4 à +5 % rassureraient ; des transactions négatives confirmeraient le scénario de saturation.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences de résultats — Priorités de la direction

### Évolution du ton

**T4 2025 (12 février 2026) — Confiance structurée** : trimestre record en trafic (+5,4 % de transactions système), 19ᵉ année consécutive de comparables positifs, pipeline de sites « plus que doublé » en approbations. Prévision 2026 prudente (+22 à +24 % de CA, comparables de +3 à +5 %) avec ~60 points de base de pression sur la marge d'EBITDA (café, pré-ouvertures). Christine Barone insiste : la route vers 2 029 boutiques en 2029 est « très claire ».

**T1 2026 (6 mai 2026) — Accélération** : comparables système de +8,3 %, dont +5,1 % de transactions ; relèvement de toutes les prévisions. Ton enthousiaste sur l'offre alimentaire et la commande mobile, présentées comme des leviers pluriannuels. Le titre réagit positivement.

**T2 2026 (5 août 2026) — Confiance affichée, prudence chiffrée** : record d'AUV, relèvement des prévisions annuelles, mais comparables du T3 guidés à +4 à +5 %. Le directeur financier Josh Guenser explique le ralentissement par des bases de comparaison plus exigeantes et un effet prix qui s'estompe. Barone met en avant les opportunités de conversion de sites « auprès de concepts émergents et d'acteurs historiques des boissons et du drive-thru » et n'exclut pas d'autres acquisitions.

**31 août 2026 — Communiqué hors calendrier** : Dutch Bros annonce ne pas relever son offre sur Salad and Go et met en avant sa « discipline » d'allocation du capital.

---

### Priorités répétées de la direction

**1. Le trafic avant le prix** — Chaque appel revient sur les transactions : innovation de boissons, publicité payante, fidélisation, commande mobile, offre alimentaire. C'est le cœur du discours depuis 2024 — et c'est précisément l'indicateur qui a ralenti au T2.

**2. L'expansion du réseau** — 2 029 boutiques en 2029, ~90 % du pipeline identifié, coût d'ouverture ramené à ~1,3 M$, conversions de sites (Clutch, franchises, sites tiers).

**3. L'offre alimentaire** — De quatre boutiques à plus de 300 en un an, déploiement complet fin 2026 ; la direction y voit un relais pour les créneaux de l'après-midi et pour le ticket moyen.

**4. La productivité des nouvelles boutiques** — Réaffirmée à chaque appel : les ouvertures récentes vendraient autant que la moyenne du système.

**5. La discipline sur les marges** — Levier sur les frais généraux, productivité de la main-d'œuvre, gestion du coût du café avec un décalage de deux à trois trimestres.

---

### Analyse du sentiment

| Appel | Ton | Confiance | Sujets défensifs |
|---|---|---|---|
| T4 2025 | Positif, prudent sur les chiffres | Élevée | Coût du café, marges |
| T1 2026 | Très positif | Très élevée | Peu |
| T2 2026 | Positif mais mesuré | Élevée | Trafic du T3, Salad and Go, investissements |

- **Confiance** : élevée et crédible — la direction a relevé ses prévisions deux fois en 2026 et dépassé le consensus cinq trimestres de suite.
- **Transparence** : bonne sur les indicateurs de boutique (AUV, comparables, transactions, fidélisation) ; **plus faible** sur le rendement des nouvelles boutiques par cohorte et sur les marchés de l'Est.
- **Signal à surveiller** : le passage d'un discours « nous gagnons du trafic » à un discours « nous ouvrons des boutiques et convertissons des sites ». Si la croissance future vient surtout des ouvertures et des acquisitions plutôt que du trafic par boutique, la qualité de la croissance baisse.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### Christine Barone — Directrice générale (depuis janvier 2024) et présidente (depuis février 2023)

**Parcours** : diplômée en mathématiques appliquées et MBA de Harvard ; passée par Bain & Company et Raymond James ; plusieurs postes de direction chez **Starbucks** ; directrice générale de **True Food Kitchen** de 2016 à 2023, une chaîne de restauration en forte croissance. Administratrice de Yelp.

**Bilan chiffré** :
- CA de 965,8 M$ en 2023 à **1,64 Md$ en 2025**, puis ~2,12 Md$ attendus en 2026.
- EBITDA ajusté de ~231 M$ en 2024 à 303 M$ en 2025, puis 385–390 M$ en 2026.
- **Huit trimestres consécutifs de transactions positives**, alors que la majorité de la restauration américaine perdait du trafic.
- Programme de leviers de trafic (publicité payante, commande mobile, offre alimentaire) lancé et déployé.
- Coût d'ouverture abaissé de ~1,8 M$ à ~1,3 M$ ; première acquisition de marque (Clutch Coffee).

**Participation** : rémunération essentiellement en actions de performance ; participation personnelle modeste au regard de la capitalisation — c'est une dirigeante professionnelle, pas une propriétaire.

---

### Josh Guenser — Directeur financier (depuis mai 2024)

Ancien directeur financier de **MOD Pizza** (2020–2024), chaîne de pizzas en restauration rapide, diplômé en comptabilité de l'université de Washington. Profil de finance de la restauration multi-sites. Premier bilan : amélioration de la discipline de coûts (frais généraux de 14,6 % à 13,6 % du CA au premier semestre), relèvements de prévisions réguliers.

### Travis Boersma — Cofondateur et président exécutif du conseil

Fondateur en 1992 avec son frère Dane (décédé en 2009), président exécutif depuis 2021, très impliqué dans la culture. **Contrôle majoritaire des droits de vote** via des actions de classe B à dix voix (~74,6 % des droits de vote en mars 2025, plafond statutaire sous 80 %). **Ventes d'actions massives et régulières** : 1,25 M d'actions en août 2025, **136,9 M$** en novembre 2025, et d'autres cessions depuis.

---

### Allocation du capital — Historique

| Décision | Montant | Lecture |
|---|---|---|
| Ouvertures 2025–2026 | ~154 puis ≥ 185 boutiques | Moteur principal, ~1,3 M$ par boutique |
| Investissements 2026 | 350–370 M$ (~+49 % selon DA Davidson) | Hausse marquée de l'intensité capitalistique |
| Clutch Coffee (20 boutiques) | ~20 M$ | Conversion rapide et peu coûteuse |
| Franchise Phoenix East Valley (31 boutiques) | ~63 M$ (estimation de marché) | Rachat d'un flux de redevances existant |
| Offre Salad and Go | 105 M$ (perdue) | Discipline de prix revendiquée face à 7 Brew |
| Dividendes / rachats d'actions | Aucun | Réinvestissement total |

**ROE / ROIC** : le ROE est d'environ **10 %** sur douze mois glissants ; le ROIC (ordre de grandeur 221 Bourse, loyers inclus dans le capital investi) progresse d'environ 2–4 % en 2022–2023 à **~8–9 %** aujourd'hui. Il reste **inférieur au coût du capital** pour un titre aussi volatil (bêta supérieur à 2), ce qui signifie qu'à ce stade la croissance crée moins de valeur que ne le suggèrent les marges de boutique. La tendance est cependant clairement ascendante.

---

### Signaux d'alerte

- **Ventes d'initiés** du fondateur et des fonds historiques, à des cours très supérieurs au cours actuel.
- **Structure à plusieurs catégories d'actions** et contrôle du fondateur : l'actionnaire de classe A n'a pas de poids réel sur les décisions.
- **Accord de partage d'économies fiscales (TRA)** : 973 M$ à verser aux anciens propriétaires, dont le fondateur — un transfert de valeur légal mais significatif.
- **Rémunération** : sans excès apparent ; la rémunération en actions (~6,9 M$ au T2) reste modérée.
- **Stratégie** : cohérente depuis 2024, pas de comportement promotionnel marqué, hormis l'objectif symbolique « 2 029 en 2029 ».

---

### Fondateur ou gestionnaire professionnel ?

**Les deux.** La culture et le contrôle appartiennent au fondateur ; l'exécution est confiée à une directrice générale professionnelle, issue de Starbucks et rompue à la croissance d'une chaîne. À ce stade — passage de chaîne régionale à marque nationale —, ce partage est un **atout** : Barone apporte méthodes, données et discipline, Boersma garantit l'identité de la marque. Le risque tient à l'alignement : un fondateur qui vend massivement tout en conservant le contrôle des votes envoie un signal ambigu aux actionnaires minoritaires.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques du cours (2021-2026)

### Contexte
Dutch Bros est un titre **très volatil** (bêta de l'ordre de 2,3), qui a connu des dizaines de séances à plus de 5 % depuis son introduction. Il est passé de 23 $ à l'introduction à un plus haut historique de **85,37 $** en clôture (18 février 2025), puis à **74,02 $** le 2 juillet 2026 et à **37,40 $** le 28 septembre 2026. Il cote **38,71 $** le 2 octobre 2026, en baisse d'environ 37 % depuis le début de l'année.

### Hausses significatives

**15 septembre 2021 — Introduction en bourse** : prix fixé à 23 $, premier jour en hausse d'environ 55 % ; le titre dépasse 80 $ dans les semaines qui suivent, porté par l'engouement pour les valeurs de croissance.

**Novembre 2024 — Résultats du T3 2024** : forte hausse après des résultats supérieurs aux attentes et un relèvement des prévisions, qui marquent le retour du trafic positif sous la direction de Christine Barone.

**13 février 2025 — Résultats du T4 2024** : **jusqu'à +33 % en séance** (+25 % après la clôture la veille) après une croissance de 35 % du CA et un BPA ajusté de 0,07 $ contre 0,02 $ attendu. Le titre atteint son plus haut historique cinq jours plus tard.

**8 mai 2025 — Résultats du T1 2025** : **jusqu'à +10 %** après un BPA ajusté de 0,14 $ contre 0,11 $ attendu et des prévisions orientées vers le haut de fourchette.

**Mai 2026 — Résultats du T1 2026** : hausse après des comparables de +8,3 % et un relèvement de toutes les prévisions ; le titre remonte ensuite jusqu'à **74 $ début juillet**.

---

### Baisses significatives

**2022 — Rotation hors des valeurs de croissance** : la remontée des taux d'intérêt fait chuter le titre de plus de 50 % depuis ses plus hauts de fin 2021, avec plusieurs séances à −10 % ou plus lors des publications (marges de boutique sous pression, inflation des coûts).

**Fin 2023 — Changement de direction** : départ du directeur général Joth Ricci, remplacé par Christine Barone au 1ᵉʳ janvier 2024 ; incertitude temporaire.

**Août 2024 — Résultats du T2 2024** : forte chute (de l'ordre de −20 %) après des comparables en ralentissement et une prévision prudente.

**Mars–avril 2025 — Droits de douane et consommation** : repli marqué avec le marché, sur fond de craintes sur le café importé et le pouvoir d'achat des jeunes consommateurs.

**6 août 2026 — Résultats du T2 2026** : **−12 % après séance**, **~−19,5 % sur la semaine**, malgré des chiffres supérieurs aux attentes : ralentissement des transactions et prévision de comparables de +4 à +5 % au T3.

**Septembre 2026 — Enchère perdue et objectifs abaissés** : 7 Brew remporte les sites Salad and Go (1ᵉʳ septembre) ; série de baisses d'objectifs (Seaport à 50 $, Melius de 95 à 70 $, Oppenheimer de 82 à 66 $, DA Davidson de 85 à 60 $, JPMorgan de 75 à 60 $). Le titre perd ~24 % sur le mois et touche **37,40 $** le 28 septembre.

---

### Facteurs structurels

- **Le trafic comme indicateur roi** : le marché réagit davantage aux transactions qu'au chiffre d'affaires ; chaque inflexion du trafic provoque des mouvements de 10 à 30 %.
- **Sensibilité au multiple** : longtemps payé plus de 100× ses bénéfices, le titre subit une **compression de multiple** à mesure que la croissance se normalise.
- **Offre de titres** : les cessions des actionnaires historiques (fondateur, fonds TSG) ont pesé régulièrement sur le cours.
- **Consommation des jeunes** : le titre est sensible aux données de consommation discrétionnaire et à l'emploi des moins de 35 ans.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Avertissement
Les estimations portent sur le **BPA ajusté par action « entièrement échangée »** (référence de la direction et du consensus), qui suppose l'échange de toutes les parts de la société opérationnelle en actions de classe A et exclut la rémunération en actions et les réévaluations du TRA. Le BPA GAAP des actions de classe A est inférieur d'environ 15 %.

### Hypothèses de modélisation

**Croissance du secteur** : la restauration rapide de boissons croît de quelques pourcents par an en volume ; le segment drive-thru de boissons personnalisées croît plus vite, porté par les jeunes consommateurs.

**Gains de parts de marché** : ~16 % de croissance du réseau par an jusqu'en 2028 (de 1 136 boutiques fin 2025 vers ~1 900 fin 2028), un peu en dessous de la trajectoire de 2 029 en 2029, par prudence après l'enchère perdue.

**Hausses de prix et trafic** : comparables système de +5 à +6 % en 2026, puis **+3 à +4 %** par an — trafic légèrement positif, ticket soutenu par l'offre alimentaire.

**Pressions sur les coûts** : café (avec deux à trois trimestres de décalage), salaires minimum dans les États de l'Ouest, loyers des nouveaux sites, coûts de pré-ouverture.

**Effet de levier opérationnel** : marge d'EBITDA ajusté de ~18,3 % en 2026, ~18,8 % en 2027 et ~19,3 % en 2028, grâce aux frais généraux.

**Coûts de financement** : charge d'intérêts nette d'environ 28–32 M$ par an ; taux d'imposition sur base « entièrement échangée » d'environ 22–25 %.

**Dilution** : rémunération en actions, ~1 % par an — de ~178 M à ~182 M d'actions.

| Hypothèse | 2026E | 2027E | 2028E |
|---|---|---|---|
| Chiffre d'affaires | ~2,12 Md$ (+29 %) | ~2,55 Md$ (+20 %) | ~3,0 Md$ (+18 %) |
| EBITDA ajusté | ~388 M$ | ~480 M$ | ~580 M$ |
| Amortissements | ~155 M$ | ~185 M$ | ~220 M$ |
| Actions diluées | ~178 M | ~180 M | ~182 M |

---

### Estimations du BPA

| Exercice | BPA estimé | Croissance | PER au cours actuel (38,71 $) |
|---|---|---|---|
| 2024 (réalisé) | 0,49 $ | — | — |
| 2025 (réalisé) | 0,76 $ | +55 % | ~51× |
| **2026E** | **0,92–0,98 $ (base 0,95 $)** | **+25 %** | **~41×** |
| **2027E** | **1,05–1,25 $ (base 1,15 $)** | **+21 %** | **~34×** |
| **2028E** | **1,25–1,65 $ (base 1,42 $)** | **+23 %** | **~27×** |

**Repères de consensus** : environ 0,93–0,95 $ pour 2026 et 1,20–1,25 $ pour 2027. Notre base 2027 est légèrement inférieure au consensus, par prudence sur le trafic et sur les amortissements liés au programme d'investissement.

---

### Sensibilité

- **Scénario haussier** (trafic de +3 % par an, ouvertures au rythme de 2 029 en 2029, café en baisse) : BPA 2028 ~1,70 $ → PER 2028 ~23× — le titre serait alors bon marché pour une croissance de 20 % par an.
- **Scénario de base** : BPA 2028 ~1,42 $ → PER 2028 ~27× — valorisation raisonnable si la croissance se maintient.
- **Scénario baissier** (transactions négatives, cannibalisation, ouvertures ralenties) : BPA 2028 ~1,05 $ → PER 2028 ~37× — peu de marge de sécurité.

**Conclusion** : après une baisse de près de 50 % depuis juillet, le cours n'intègre plus une exécution parfaite. Le juge de paix n'est pas le BPA de 2026 mais le **trafic par boutique** et le **rendement des nouvelles ouvertures** : si les deux tiennent, le multiple actuel est l'un des plus bas jamais payés pour cette croissance.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (bull case)

### Leviers de croissance structurels

**1. Une économie unitaire parmi les meilleures de la restauration** : ~1,3 M$ d'investissement, 2,19 M$ de ventes, ~30 % de contribution. Chaque nouvelle boutique est rentable rapidement — et l'AUV continue de progresser alors que le réseau s'étend.

**2. Un réseau qui peut encore plus que doubler** : 1 225 boutiques aujourd'hui, 2 029 visées en 2029, plus de 7 000 à terme selon la direction. Avec ~90 % du pipeline identifié jusqu'en 2029, la croissance du CA de 15 à 20 % par an est visible pour plusieurs années.

**3. Des leviers de trafic encore jeunes** : offre alimentaire (déploiement complet fin 2026), commande mobile, publicité payante, fidélisation à 73 % des transactions. Ces leviers peuvent soutenir les comparables au-delà de 2026.

**4. Un levier sur les marges** : frais généraux en baisse en proportion du CA, productivité de la main-d'œuvre, et un **café qui pourrait devenir un vent porteur** si les cours de l'arabica reculent — avec deux à trois trimestres de décalage.

**5. Un bilan sain hors loyers** : trésorerie supérieure à la dette financière, flux d'exploitation en hausse de 55 % au premier semestre, aucune dépendance au marché pour financer les ouvertures.

**6. Une valorisation enfin raisonnable** : ~35× les bénéfices des douze prochains mois, ~27× ceux de 2028, moins de 14× l'EBITDA 2027 selon Oppenheimer — contre plus de 100× les bénéfices en 2025.

---

## 🐻 Scénario pessimiste (bear case)

### Risques susceptibles d'affecter durablement l'activité

**1. La saturation et la cannibalisation** : les transactions système passent de +5,1 % à +1,7 % en un trimestre. Si les nouvelles boutiques prennent des clients aux anciennes dans les marchés denses, les comparables deviennent négatifs et le modèle d'expansion perd sa valeur.

**2. La concurrence pour le client et pour les sites** : 7 Brew copie le modèle avec un réseau franchisé peu consommateur de capital, et Starbucks retrouve son trafic. Le coût des meilleurs emplacements augmente, comme l'a montré l'enchère Salad and Go.

**3. Un rendement du capital insuffisant** : ROIC de ~8–9 % pour un coût du capital supérieur, investissements en hausse de ~49 %, free cash-flow d'environ 75 M$ sur douze mois. Si le ROIC ne progresse pas, chaque boutique ouverte crée moins de valeur que prévu.

### Analyse pré-mortem
Que se serait-il passé si Dutch Bros cotait 22 $ en octobre 2028 ? Scénario : transactions négatives à partir de 2027, comparables proches de zéro, productivité des nouvelles boutiques à 80 % de la moyenne dans l'Est, ouvertures ramenées à 120 par an, marge d'EBITDA plafonnée à 17 %. Le BPA 2028 atteindrait ~1,00 $ et le marché le paierait comme une chaîne mature, ~22×. Aucun accident n'est nécessaire : seulement une **normalisation de la croissance par boutique**.

### Les multiples sont-ils trop élevés ?
**Plus vraiment.** À ~41× le BPA 2026, le titre reste deux fois plus cher que la médiane du secteur de la restauration, mais à peu près au niveau de Starbucks et des autres valeurs de croissance. La valorisation n'intègre plus une perfection d'exécution — elle intègre une **croissance de 20 % par an qui reste à confirmer en trafic**.

---

### Point de vue à contre-courant

**Ce que le marché refuse de voir** : le marché a sanctionné un trimestre de trafic faible comme s'il s'agissait d'un retournement, alors que le T2 2025 servait de base exigeante (+3,7 % de transactions) et que les boutiques en propre ont encore gagné 3,4 % de trafic. Dans le même temps, l'enchère perdue a été lue comme un échec, alors que refuser de surenchérir d'un tiers pour des sites est exactement la discipline que les baissiers réclamaient. Le vrai risque n'est pas là où le marché regarde : il est dans la **performance des boutiques ouvertes loin de l'Ouest** et dans le **coût réel du modèle locatif**, deux points peu discutés. Si ces deux indicateurs tiennent, le titre est aujourd'hui payé comme une chaîne en fin de croissance alors qu'il est au milieu de la sienne.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE FAIBLE
Ventes au comptant en boutique, reconnues au moment de l'achat. Seuls points de jugement : les **cartes cadeaux et points de fidélité** (produits constatés d'avance de 53,7 M$, dont une partie de « breakage » reconnue en CA lorsque les cartes ne sont jamais utilisées) et les redevances franchisées, calculées sur des ventes déclarées par les franchisés.

### Information sectorielle et indicateurs clés — RISQUE MODÉRÉ
- **Changement de définition en 2026** : les AUV sont désormais calculés sur douze mois glissants pour l'ensemble des boutiques, et la base des comparables a été redéfinie (boutiques ouvertes depuis au moins 15 mois complets au premier jour du trimestre). Les périodes antérieures **n'ont pas été retraitées**, la société jugeant l'effet non significatif. Un changement de définition au moment où l'AUV atteint des records mérite d'être vérifié.
- **Rachats de franchises** : ils gonflent la croissance du secteur en propre sans croissance du système ; il faut suivre les **ventes systémiques** (+23 % au T2) plutôt que le seul CA.
- **Pas de données par cohorte** : la productivité des nouvelles boutiques est affirmée mais non publiée par année d'ouverture ou par région.

### Contrats de location — RISQUE MODÉRÉ À ÉLEVÉ
**1,01 Md$ de dettes locatives** et 984 M$ de droits d'utilisation au 30 juin 2026, en hausse rapide avec le modèle build-to-suit. Les loyers sont en dehors de la « dette » et de l'EBITDA ajusté présentés : un ratio dette nette / EBITDA proche de zéro devient d'environ **2,7× en incluant les loyers** (sur l'EBITDA ajusté de douze mois glissants). Le coût d'ouverture réduit à ~1,3 M$ est en partie un **transfert de capital vers des loyers futurs**.

### Parties liées et accord fiscal (TRA) — RISQUE ÉLEVÉ
La structure « Up-C » héritée de l'introduction en bourse prévoit que Dutch Bros reverse **85 % des économies d'impôt** réalisées grâce aux échanges de parts aux anciens propriétaires — dont le fondateur et le fonds TSG Consumer Partners. Le passif atteint **973 M$** (+152 M$ en six mois, au rythme des échanges), face à un actif d'impôt différé de 1,11 Md$. Ce passif n'apparaît pas dans les ratios d'endettement usuels ; ses réévaluations sont **exclues de l'EBITDA et du BPA ajustés**. C'est un transfert de trésorerie futur vers des parties liées, qui réduit la valeur des économies fiscales pour l'actionnaire de classe A.

### Engagements conditionnels — RISQUE FAIBLE À MODÉRÉ
Une action collective en valeurs mobilières a été intentée en mars 2023 (mentionnée au 10-K) ; contentieux sociaux et de consommation habituels dans la restauration. Engagements d'achat de café et de loyers futurs non encore commencés.

### Rémunération en actions — RISQUE FAIBLE
6,9 M$ au T2 2026 (1,2 % du CA), exclue des mesures ajustées. Niveau raisonnable pour le secteur ; dilution d'environ 1 % par an.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Peu de goodwill historiquement ; les acquisitions récentes (Clutch, Phoenix East Valley) créent des actifs incorporels (droits de franchise rachetés) qui seront amortis. À surveiller si les acquisitions se multiplient.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ
Flux d'exploitation solide (196,9 M$ au premier semestre), mais **free cash-flow mince** une fois déduits des investissements prévus à 350–370 M$ en 2026 : ~75 M$ sur douze mois glissants pour un résultat net consolidé d'environ 140 M$. Les paiements du TRA, appelés à croître, réduiront encore la trésorerie disponible.

### Intérêts minoritaires — POINT DE LECTURE
Une partie du résultat (14,2 M$ sur 51,6 M$ au T2) revient aux porteurs de parts de la société opérationnelle. Le BPA ajusté « entièrement échangé » neutralise cet effet ; le BPA GAAP de classe A, lui, l'intègre.

---

### Verdict global
**Risque comptable : MODÉRÉ.** Pas de signe de manipulation des produits ni de fragilité financière : ventes au comptant, trésorerie nette positive hors loyers, rémunération en actions modérée. Mais trois éléments imposent de **retraiter les chiffres présentés** : le **TRA de 973 M$**, la **dette locative de 1,01 Md$** et les **changements de définition des indicateurs de boutique**. L'investisseur doit raisonner sur les ventes systémiques, l'EBITDA après loyers et le free cash-flow après paiements du TRA.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Christine Barone, classées par importance

### Stratégie et avantage concurrentiel

**1.** Les transactions système sont passées de +5,1 % au T1 à +1,7 % au T2. **Quelle part de ce ralentissement vient de la cannibalisation** des boutiques existantes par les nouvelles ouvertures dans les marchés denses, et comment la mesurez-vous ?

**2.** Vous affirmez que la productivité des nouvelles boutiques est proche de la moyenne. **Pouvez-vous publier l'AUV de la cohorte 2024–2025 dans les marchés de l'Est et du Midwest**, comparé à celui de l'Ouest historique ?

**3.** 7 Brew copie votre format avec un modèle franchisé et a offert ~36 % de plus que vous pour les sites Salad and Go. **Quel est votre avantage durable face à un concurrent qui croît plus vite avec moins de capital** ?

**4.** Starbucks a retrouvé des comparables positifs. **Avez-vous mesuré un effet sur vos marchés communs** depuis le début de 2026 ?

### Allocation du capital

**5.** Quel est le **rendement après impôt** (cash-on-cash et ROIC, loyers inclus) d'une boutique ouverte en 2025, et à partir de quel niveau d'AUV une ouverture détruit-elle de la valeur ?

**6.** Les investissements augmentent d'environ 49 % en 2026. **Quelle part est liée à des sites détenus en propre plutôt qu'en location**, et à quel horizon le free cash-flow dépassera-t-il durablement 200 M$ ?

**7.** Pourquoi avoir refusé de relever l'offre sur Salad and Go, et **quel prix par site jugez-vous rationnel** pour une conversion ? D'autres acquisitions de marques sont-elles à l'étude ?

**8.** Le passif du TRA atteint 973 M$. **Quel calendrier de paiements anticipez-vous** sur 2027–2030, et envisagez-vous de le racheter par anticipation ?

### Marges et coûts

**9.** Avec deux à trois trimestres de décalage, **quel effet aura l'évolution actuelle de l'arabica** sur la marge de contribution en 2027 ?

**10.** L'offre alimentaire est déployée sur tout le réseau d'ici fin 2026. **Quel effet a-t-elle sur le débit au drive-thru et sur la marge de boutique** dans les marchés où elle est installée depuis plus d'un an ?

**11.** Quelle part de la hausse de 4,1 % du ticket moyen au T2 vient des **prix**, et quelle part du **mix** (nourriture, personnalisation, tailles) ?

### Risques

**12.** Votre clientèle est jeune et sensible au prix. **Quels indicateurs suivez-vous pour détecter un recul de la fréquence** chez les 18–34 ans, et quel serait votre plan d'action ?

**13.** Les loyers représentent plus d'1 Md$ d'engagements. **Que se passe-t-il si une cohorte de boutiques sous-performe** : avez-vous des clauses de sortie ou de sous-location ?

### Gouvernance et vision long terme

**14.** Le fondateur a cédé une part importante de ses titres tout en conservant le contrôle des droits de vote. **Quel est le calendrier d'extinction de la structure à plusieurs catégories d'actions** ?

**15.** Quel est le **risque que vous estimez le plus sous-évalué par le marché aujourd'hui** — et celui que vous surveillez le plus en conseil d'administration ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse vendeuse — Démontage de l'argumentaire haussier

### 1. Ce qui peut compromettre structurellement le modèle

Dutch Bros est un **modèle d'expansion d'unités** : sa valeur repose sur l'hypothèse qu'une boutique ouverte demain vendra autant qu'une boutique ouverte hier. Or les boutiques historiques sont concentrées dans l'Ouest, où la marque est une institution locale. Plus le réseau s'étend vers l'Est — marchés moins familiers, concurrence installée —, plus cette hypothèse devient fragile. Une baisse de 15 % de l'AUV des nouvelles boutiques suffit à transformer une machine à créer de la valeur en machine à consommer du capital.

### 2. Où se concentrent les revenus — et que se passe-t-il si cela change

Les revenus ne sont pas concentrés sur des clients, mais sur **une démographie** : les 18–34 ans, grands consommateurs de boissons sucrées et énergisantes. C'est la tranche la plus exposée au chômage, au remboursement des prêts étudiants et aux modes. Un changement de goûts (moins de sucre, retour du café « classique ») ou un choc sur leur pouvoir d'achat frapperait directement la fréquence. Le ralentissement des transactions de +5,1 % à +1,7 % en un trimestre est peut-être le premier signe.

### 3. Pourquoi l'avantage concurrentiel est plus fragile qu'il n'y paraît

La « culture » est un argument séduisant mais **non mesurable**, et le format se copie : 7 Brew a reproduit le kiosque, l'énergisant maison et le service jovial, avec ~777 boutiques et un AUV proche. Les coûts de changement du client sont nuls. Ce qui reste — l'emplacement — se négocie aux enchères, et Dutch Bros vient de perdre la plus visible d'entre elles.

### 4. Le concurrent le plus dangereux : 7 Brew

Les haussiers regardent Starbucks. C'est une erreur : le vrai rival est **7 Brew**, franchisé donc peu consommateur de capital, financé par des fonds de capital-investissement, prêt à payer plus cher pour les mêmes parcelles et présent dans les marchés de croissance de Dutch Bros (Texas, Oklahoma, Sud-Est). Dans un même carrefour, deux kiosques identiques se partagent la clientèle — et c'est celui qui a le coût du capital le plus bas qui gagne.

### 5. Les pires décisions d'allocation du capital

- Une **offre de 105 M$ pour des sites d'une chaîne en faillite**, perdue, qui a surtout révélé la cherté des emplacements.
- Une **hausse d'environ 49 % des investissements** l'année même où le trafic ralentit.
- Un **modèle build-to-suit** qui réduit le coût apparent d'ouverture en le transformant en loyers : 1,01 Md$ de dettes locatives qui ne figurent pas dans les ratios mis en avant.

### 6. Comptabilité et incitations

- **Un TRA de 973 M$** qui transfère 85 % des économies d'impôt vers les anciens propriétaires — dont le fondateur qui contrôle les votes.
- **Des cessions massives du fondateur** (136,9 M$ en novembre 2025 seulement) pendant qu'il conserve le contrôle.
- **Des indicateurs de boutique redéfinis en 2026** sans retraitement des périodes antérieures.
- **Des mesures ajustées** qui excluent la rémunération en actions et les réévaluations du TRA.

Aucun de ces éléments n'est illégal ; ensemble, ils créent un **décalage d'intérêts** entre les initiés et l'actionnaire de classe A.

### 7. Les hypothèses nécessaires pour justifier le cours

À 38,71 $ (~6,8 Md$), il faut : (a) ~16 % de croissance du réseau par an jusqu'en 2028 ; (b) des comparables de +3 à +4 % par an, avec un trafic positif ; (c) une marge d'EBITDA en progression vers 19 % ; (d) un ROIC qui finit par dépasser le coût du capital ; (e) le maintien d'un multiple d'environ 27× les bénéfices de 2028.

### 8. Et si la croissance déçoit de 20 à 30 %

Avec un CA 2028 de 2,4 à 2,6 Md$ au lieu de 3,0 Md$ et une marge d'EBITDA ramenée à 17,5 %, le BPA 2028 tombe entre **1,00 et 1,15 $**. À 25× — un multiple encore généreux pour une chaîne qui ralentit —, le titre vaudrait **25 à 29 $**, soit **−25 % à −35 %** depuis le cours actuel, déjà divisé par deux depuis juillet.

### Le scénario catastrophe unique

**La saturation des marchés historiques combinée à une mode qui passe.** Si les boissons énergisantes et sucrées perdent la faveur des jeunes consommateurs au moment où 7 Brew et Starbucks densifient leurs réseaux, Dutch Bros se retrouverait avec un parc de plus de 1 500 boutiques louées sur le long terme, des comparables négatifs et un TRA à payer. **Plausibilité : 15 à 25 %** sur trois ans — l'histoire de la restauration américaine compte de nombreuses chaînes « tendance » dont la croissance s'est arrêtée brutalement après une expansion trop rapide.

### Conclusion vendeuse
Dutch Bros est une **excellente machine opérationnelle** — AUV record, marges de boutique solides, culture forte. Mais sa valeur dépend de la répétition de cette performance dans des marchés où la marque n'a pas d'histoire, face à un clone mieux financé et à un leader qui se réveille. **Le marché a cessé de payer pour la perfection ; il ne paie pas encore pour la saturation.** Tant que le trafic par boutique n'est pas redevenu solidement positif, la décote peut se creuser.`,
  },
];

export default { ...meta, modules };
