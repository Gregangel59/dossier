// ============================================================
//  DOSSIER : CAVA Group, Inc. (CAVA)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "cava",                     // identifiant d'URL : /dossier/cava
  ticker: "CAVA",
  name: "CAVA Group, Inc.",
  exchange: "NYSE",
  sector: "Restauration rapide décontractée — méditerranéen",
  initials: "CAVA",                 // affiché dans la pastille
  tagline: "Le Chipotle du méditerranéen : 476 restaurants détenus en propre, un objectif de 1 000 unités en 2032, et une valorisation qui ne laisse aucune place à l'erreur.",
  riskScore: 57,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "cava.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

CAVA Group est une chaîne américaine de **restauration rapide décontractée (fast-casual) d'inspiration méditerranéenne**, cotée au NYSE depuis juin 2023. Née à Washington D.C. en 2010 autour d'un restaurant familial fondé par **Ted Xenohristos, Ike Grigoropoulos et Dimitri Katsanis**, rejoints par **Brett Schulman**, l'enseigne compte **476 restaurants** dans **29 États et le District de Columbia** à la clôture du deuxième trimestre 2026.

Le modèle est d'une simplicité redoutable — et c'est précisément là sa force :

- **100 % de restaurants détenus et exploités en propre.** Aucune franchise. CAVA capte l'intégralité de l'économie de chaque unité, contrôle l'exécution et la donnée client, mais **finance chaque ouverture sur son propre bilan**.
- **Format « walk the line »** : le client compose son bowl ou sa pita en avançant devant le comptoir (bases, protéines, garnitures, dips). Débit élevé, personnalisation totale, coût de main-d'œuvre maîtrisé.
- **Intégration verticale amont** : le segment CAVA Foods produit en interne les dips, tartinades et bases de sauces (tzatziki, harissa, Crazy Feta) dans deux usines, à Laurel (Maryland) et Verona (Virginie).
- **Économie unitaire** : chiffre d'affaires moyen par restaurant (AUV) de **3,1 M$**, marge au niveau restaurant de **25,7 %** au T2 2026, productivité des nouvelles unités **supérieure à 100 %** des attentes internes.

Chiffre d'affaires 2025 : **1,18 Md$** (+22,5 %). Sur les douze derniers mois, le groupe approche **1,3 Md$**. Objectif affiché par la direction : **au moins 1 000 restaurants d'ici 2032**.

## Principaux produits et services

**Segment CAVA (~99 % du chiffre d'affaires)** — restauration sur place, à emporter, livraison et traiteur :
- **Bowls et pitas** personnalisables : bases (riz au safran, salade, lentilles), protéines (poulet grillé, chicken shawarma, agneau, falafel, steak, et depuis avril 2026 le **saumon glacé à la grenade**, première protéine marine de l'enseigne), garnitures fraîches, dips signature
- **Canal digital** : application propriétaire, commande web, agrégateurs tiers — **39,0 % du chiffre d'affaires** au T2 2026
- **Programme de fidélité** relancé en 2024, dont la croissance dépasse celle du parc

**Segment CAVA Foods (~1 % du chiffre d'affaires externe)** — production centralisée des dips et tartinades pour les restaurants **et** commercialisation en grande distribution (Whole Foods Market, Giant). C'est à la fois un centre de coûts internalisé et une vitrine de marque.

## Clients, fournisseurs, concurrents

**Clients** : consommateurs américains urbains et périurbains. Point notable et contre-intuitif du T2 2026 : ce sont les **restaurants situés sur les marchés à revenus les plus modestes qui affichent les meilleures ventes comparables**, signe que le positionnement prix reste accessible.

**Fournisseurs** : une chaîne d'approvisionnement **directe avec plus de 50 producteurs, éleveurs et transformateurs**. Parmi les partenaires identifiés, **Taylor Farms** pour certains produits frais découpés — un nom qui a compté à l'été 2026 (voir Red Flags et Avocat du Diable). Distribution logistique confiée à des grossistes de gamme large.

**Concurrents** : **Chipotle Mexican Grill** (référence absolue du format et de l'économie unitaire), **Sweetgreen**, **Panera**, **Just Salad**, **Chopt**, et une constellation d'enseignes méditerranéennes régionales (Naf Naf, Roti, The Hummus & Pita Co.). Plus largement, CAVA se bat pour la part de portefeuille du déjeuner contre l'ensemble de la restauration limitée.

## Modalités contractuelles et paiement

Business **strictement transactionnel** : le client paie au moment de la commande, en caisse ou par voie digitale. Il n'existe ni contrat pluriannuel, ni carnet de commandes, ni take-or-pay.

Trois conséquences majeures :
1. **Besoin en fonds de roulement structurellement négatif** — les encaissements sont immédiats, les fournisseurs sont payés à 30 jours. Le parc s'autofinance partiellement en croissance.
2. **Aucune créance client significative** — le risque de crédit est quasi nul.
3. **L'engagement long terme du groupe est immobilier** : baux commerciaux de 10 à 15 ans, généralement avec options de renouvellement. C'est la principale obligation contractuelle du bilan, et l'essentiel du ratio dette/capitaux propres apparent.

> **Note de lecture** : l'exercice fiscal de CAVA est découpé en trimestres de **longueurs inégales** — 16 semaines au T1, puis 12 semaines aux T2, T3 et T4. Toute comparaison séquentielle de chiffre d'affaires brut est trompeuse. Seules les ventes comparables (same restaurant sales) et les marges en pourcentage sont directement lisibles d'un trimestre à l'autre.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de CAVA dans la chaîne de valeur

CAVA occupe une position **d'intégrateur partiel** : le groupe ne cultive rien, mais il **transforme lui-même sa signature produit** (dips et tartinades) et distribue en direct auprès du consommateur final. Entre les deux, il s'appuie sur des tiers pour l'agriculture, la transformation des protéines et la logistique.

### Amont — Producteurs et transformateurs

CAVA revendique une **chaîne d'approvisionnement directe auprès de plus de 50 producteurs, éleveurs et transformateurs**, sans passer systématiquement par des centrales d'achat.

- **Légumes et herbes fraîches** : producteurs nord-américains sous contrat direct. La direction a précisé publiquement en août 2026 ne **pas servir de laitue iceberg** et ne **pas s'approvisionner en feuilles vertes au Mexique**
- **Produits frais découpés** : **Taylor Farms** pour certaines références — mais, selon la direction, **aucun approvisionnement depuis les sites Taylor Farms Mexico** ni depuis les fermes visées par les rappels de l'été 2026
- **Protéines** : poulet, agneau, bœuf, falafel, et depuis 2026 le saumon — fournisseurs spécialisés multiples
- **Céréales et légumineuses** : riz, lentilles, pois chiches
- **Emballages** : bols, couvercles, contenants de livraison — poste exposé aux droits de douane

---

### CAVA Foods — La brique d'intégration verticale

Deux usines produisent en central les dips, tartinades et bases de sauces :

- **Laurel (Maryland)** — site historique, orienté grande distribution
- **Verona (Virginie)** — 5 100 m² (55 000 sq ft), **35 M$ investis**, capacité de plus de **45 tonnes par jour** (100 000 livres), technologie de **haute pression à froid (HPP)** permettant une pasteurisation sans conservateur

Ensemble, ces deux sites peuvent alimenter **au moins 750 restaurants** — c'est-à-dire l'horizon de croissance jusqu'à environ 2029. Au-delà, une troisième usine sera nécessaire : c'est un **jalon capex identifiable** que l'investisseur doit anticiper.

L'intérêt du dispositif est triple : **réduire la complexité en cuisine** (les équipes n'ont plus à préparer les dips), **maîtriser le coût matière**, et **garantir la constance du goût** sur tout le parc.

---

### Logistique et distribution

Les dips produits en usine sont acheminés vers des **centres de distribution régionaux** opérés par des grossistes de gamme large, qui livrent ensuite chaque restaurant avec l'ensemble des références fraîches et sèches. CAVA n'exploite pas sa propre flotte nationale.

---

### Aval — Canaux de vente

- **Restaurants** : 476 unités, format « Project Soul » pour toutes les nouvelles ouvertures, écrans de production en cuisine (KDS) déployés sur une large partie du parc
- **Canal digital propriétaire** : application et site — marge supérieure, données clients captées
- **Agrégateurs de livraison tiers** : contribution au chiffre d'affaires en hausse, mais **dilutifs en taux de marge** (la direction le reconnaît explicitement dans ses commentaires trimestriels)
- **Grande distribution** : dips et tartinades CAVA en linéaire chez Whole Foods Market, Giant et d'autres enseignes

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                    CAVA                        AVAL
50+ producteurs      →   CAVA Foods              →   476 restaurants
directs                  Laurel (MD)                 (100 % en propre)
Taylor Farms             Verona (VA) 35 M$           Digital 39 % du CA
(hors sites Mexico)      HPP, 45 t/jour              App + agrégateurs
Protéines, céréales      capacité 750 restos         CPG : Whole Foods,
Emballages           →   Grossistes / CDR        →   Giant
\`\`\`

**Le point de fragilité** : CAVA contrôle ses dips mais **pas ses légumes**. L'épisode cyclospora de juillet 2026 l'a démontré cruellement — l'enseigne a subi un contrecoup commercial alors même qu'elle **n'était pas contaminée** et ne s'approvisionnait pas auprès des sources incriminées. Dans le frais, la réputation d'une catégorie entière peut être touchée sans qu'aucune faute ne soit imputable à l'entreprise.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

CAVA publie **deux segments opérationnels** :

| Segment | Contenu | Poids du CA |
|---|---|---|
| **CAVA** | Exploitation de l'ensemble des restaurants détenus en propre | ~99 % |
| **CAVA Foods** | Production des dips, tartinades et bases de sauces + ventes en grande distribution | ~1 % (externe) |

Cette granularité est **volontairement pauvre** : il n'existe aucune ventilation publique du résultat par région, par cohorte d'ouverture ou par canal. L'investisseur doit reconstruire l'analyse à partir des indicateurs opérationnels communiqués (ventes comparables, trafic, prix/mix, marge restaurant, mix digital).

---

### Décomposition de la croissance — T2 2026

| Composante | Contribution |
|---|---|
| Ouvertures nettes sur 12 mois | **94 restaurants** (+19,6 % du parc) |
| Ventes comparables | **+9,0 %** |
| — dont trafic clients | **+5,3 %** |
| — dont prix et mix produits | **+3,7 %** |
| **Croissance totale du CA** | **+31,3 %** (365,4 M$) |

**Lecture clé** : la croissance est **majoritairement volumique**. Le trafic contribue à hauteur de 5,3 points sur 9 points de ventes comparables — c'est la signature d'une marque qui gagne des clients, et non d'une enseigne qui masque une érosion de fréquentation par des hausses de prix. La direction souligne d'ailleurs avoir **contenu ses hausses tarifaires** pour préserver l'accessibilité.

---

### Répartition par canal

| Canal | Poids | Dynamique |
|---|---|---|
| Restaurant physique | ~61 % | Cœur du modèle, meilleure marge |
| Digital (app, web, agrégateurs) | **39,0 %** | Stable à un niveau élevé ; la part agrégateurs progresse et **dilue le taux de marge** |

Le mix digital est un actif stratégique — il alimente le programme de fidélité et la donnée client — mais sa composition compte : une commande passée sur l'application CAVA est nettement plus rentable qu'une commande captée par un agrégateur tiers.

---

### Répartition géographique

Présence dans **29 États et Washington D.C.** Le socle historique est le Mid-Atlantic, avec des positions fortes au Texas, en Californie, en Floride et dans le Sud-Est.

**Ouvertures de marchés récentes et annoncées** :
- T2 2026 : **Indiana** et **Ohio**
- Second semestre 2026 : **Las Vegas**
- 2026 : poursuite du Midwest (Cincinnati, St. Louis)
- **2027 : Bay Area** (San Francisco)

La direction a insisté sur le fait que la performance des nouvelles unités est **homogène entre géographies et entre formats** — un point critique pour la thèse d'expansion nationale.

---

### Profil de marge et rentabilité

| Indicateur | T3 2025 | T4 2025 | T1 2026 | T2 2026 |
|---|---|---|---|---|
| Ventes comparables | +1,9 % | +0,5 % | **+9,7 %** | **+9,0 %** |
| Marge au niveau restaurant | 24,6 % | 21,4 % | 25,1 % | **25,7 %** |
| EBITDA ajusté | 40,0 M$ | — | 61,7 M$ | 54,7 M$ |
| Résultat net | 14,7 M$ | 4,9 M$ | 23,6 M$ | 23,0 M$ |

**L'inflexion est spectaculaire.** Le T4 2025 marquait le point bas du cycle (ventes comparables à +0,5 %, marge restaurant à 21,4 %). Deux trimestres plus tard, les comparables sont à +9 % et la marge restaurant à 25,7 %. L'effet de base joue, mais le trafic en hausse de 5,3 % est un signal réel.

**Attention au piège de la « marge restaurant »** : ce taux de 25,7 % est une mesure **non-GAAP** qui exclut les frais généraux, les amortissements et les coûts de pré-ouverture. La marge opérationnelle consolidée réelle ressort autour de **5,5 %**. L'écart n'est pas une anomalie comptable — c'est la structure d'un modèle qui finance sa croissance — mais il doit être conscientisé (voir Red Flags).

**Cohortes** : la direction a indiqué que la **cohorte d'ouvertures 2024 est le millésime le plus performant** de l'histoire de l'enseigne, avec des ventes comparables à deux chiffres. C'est l'argument le plus fort de la thèse haussière sur la durabilité de l'expansion.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. La catégorie elle-même — Moat de positionnement
CAVA se définit comme **« category-defining »**, et ce n'est pas qu'un élément de langage. Il n'existe **aucune autre enseigne méditerranéenne fast-casual à échelle nationale** aux États-Unis. Là où le mexicain (Chipotle), l'italien, l'asiatique ou le burger comptent chacun plusieurs acteurs installés, CAVA occupe seul un espace culinaire tendance, aligné sur les préférences santé et sur le régime méditerranéen.

C'est un fossé **réel mais temporel** : il protège tant que personne n'a la capacité ou l'envie de répliquer le format à l'échelle. Ce n'est pas un brevet.

### 2. L'économie unitaire — Le fossé le plus tangible
- **AUV de 3,1 M$** par restaurant, un niveau comparable à celui de Chipotle
- **Marge au niveau restaurant de 25,7 %** (T2 2026)
- **Productivité des nouvelles unités supérieure à 100 %** des attentes — les restaurants ouverts atteignent immédiatement leur régime cible
- **Cohorte 2024 en ventes comparables à deux chiffres**, meilleure de l'histoire du groupe

Une économie unitaire de ce niveau permet de **s'autofinancer en croissance** et rend chaque ouverture créatrice de valeur. C'est ce qui distingue CAVA de Sweetgreen, dont le modèle n'a jamais atteint la rentabilité consolidée.

### 3. L'intégration verticale CAVA Foods — Moat de coût et de constance
Produire en interne les dips signature dans deux usines (Laurel, Verona) permet de **retirer de la complexité des cuisines**, de **contrôler le coût matière** et de **garantir l'identité gustative**. Cela crée en outre une activité de grande distribution qui fait vivre la marque hors du restaurant. Peu d'enseignes de cette taille disposent d'un tel dispositif.

### 4. La détention à 100 % — Un choix structurant
CAVA n'a pas franchisé. Conséquences :
- **Positif** : capture intégrale de l'économie unitaire, contrôle total de l'exécution et de l'expérience, donnée client propriétaire, cohérence de marque
- **Négatif** : chaque ouverture consomme du capital ; le rythme de croissance est plafonné par la capacité de financement et par la capacité de recrutement de managers

C'est le modèle Chipotle, pas le modèle Wingstop. Il produit de la qualité au prix d'une **intensité capitalistique élevée** — c'est pourquoi le ROIC ressort à ~6 % malgré une marge restaurant de 25 %.

### 5. Le digital et la fidélité — Moat en construction
**39 % du chiffre d'affaires** passe par les canaux digitaux, la base de fidélité croît plus vite que le parc, et le déploiement des écrans de cuisine (KDS) structure l'exécution. C'est un avantage de données et de fréquence — mais Chipotle en dispose aussi, à une échelle dix fois supérieure.

### 6. L'espace de croissance (whitespace)
476 restaurants aujourd'hui, **objectif d'au moins 1 000 en 2032**. C'est mathématiquement le levier de valeur dominant : à économie unitaire constante, doubler le parc double le résultat. Ce n'est pas un fossé au sens strict, mais c'est la raison d'être de la valorisation.

---

## Ce que CAVA n'a pas

Il faut le dire clairement : **les coûts de changement sont nuls**. Un client peut aller déjeuner ailleurs demain sans le moindre frottement. Le fossé de CAVA n'est ni contractuel, ni technologique, ni réglementaire — il est **de marque et d'exécution**, donc **à regagner tous les jours**.

## Positionnement vs concurrence

| Critère | CAVA | Chipotle | Sweetgreen |
|---|---|---|---|
| Parc (ordre de grandeur) | ~476 | ~3 800 | ~250 |
| AUV | ~3,1 M$ | ~3,2 M$ | ~2,9 M$ |
| Marge restaurant | ~25,7 % | ~25-27 % | ~18-20 % |
| Rentabilité nette | Positive, faible | Élevée et stable | **Négative** |
| Croissance du parc | **+19,6 %** | ~+8 % | ~+10 % |
| Modèle | 100 % en propre | 100 % en propre | 100 % en propre |
| Valorisation | Très élevée | Modérée | Décotée |

## Pouvoir de négociation

- **Vis-à-vis des fournisseurs** : **modéré et croissant** — l'approvisionnement direct auprès de 50+ producteurs donne du contrôle, mais avec 476 restaurants CAVA reste un acheteur de taille moyenne face à Chipotle ou aux géants du QSR
- **Vis-à-vis des clients** : **limité** — aucun verrouillage, forte sensibilité au prix dans un contexte de pression sur le pouvoir d'achat ; la direction contient volontairement ses hausses tarifaires
- **Vis-à-vis des bailleurs** : **bon et en amélioration** — une enseigne qui génère 3,1 M$ par site est un locomotive de trafic recherchée par les centres commerciaux, ce qui améliore les conditions locatives
- **Vis-à-vis des agrégateurs de livraison** : **faible** — la commission est subie, et la montée du canal dilue mécaniquement la marge`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Restauration rapide décontractée américaine (août 2026)

| Société | Code Bloomberg | Cap. boursière (Mds$) | EV/CA | EV/EBIT | P/E | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **CAVA Group** | **CAVA US** | **~7,9** | **~6,1x** | **~100x** | **~122x** | **0 %** | **~5 %** |
| Chipotle | CMG US | ~44 | ~3,5x | ~21x | ~30x | 0 % | ~40 % |
| Dutch Bros | BROS US | ~9 | ~4,0x | ~45x | ~75x | 0 % | ~12 % |
| Wingstop | WING US | ~3,4 | ~6,5x | ~27x | ~40x | ~0,7 % | n.s. (capitaux propres négatifs) |
| Shake Shack | SHAK US | ~2,6 | ~1,7x | ~45x | ~60x | 0 % | ~3 % |
| Sweetgreen | SG US | ~1,0 | ~1,5x | n.s. | n.s. | 0 % | négatif |

*Données estimatives sur la base des cours et publications disponibles à fin août 2026. À affiner sur les filings SEC directs — plusieurs multiples sont des ordres de grandeur.*

---

### Analyse comparative

**Chipotle (CMG) — Le miroir et le juge de paix**
C'est la comparaison qui compte, parce que c'est **le même modèle** : fast-casual, 100 % en propre, format « walk the line », AUV supérieur à 3 M$, marge restaurant d'environ 25 %. Chipotle a fait le chemin que CAVA prétend faire, avec 3 800 restaurants.

Mais 2025 et 2026 ont été rudes pour CMG : ventes comparables **négatives en 2025 (-1,7 %)**, retour timide à +0,5 % puis +2,2 % en 2026, cours divisé par deux depuis les sommets. Le titre se paie désormais autour de **30x les bénéfices** — soit **un quart du multiple de CAVA**.

**C'est le fait le plus dérangeant du dossier** : le marché paie 122x les bénéfices pour la promesse de devenir Chipotle, alors qu'il paie 30x pour Chipotle lui-même. Toute la question est de savoir si la prime rémunère la croissance (+31 % de CA vs +7 %) ou si elle relève de l'excès.

**Sweetgreen (SG) — Le contre-exemple sanglant**
Sweetgreen est le rappel de ce qui arrive quand un concept santé premium ne parvient pas à convertir son récit en rentabilité : titre en chute de plus de 78 % en 2025, capitalisation ramenée autour de 1 Md$, résultat net négatif, EBITDA négatif. En août 2026, l'entreprise a **abaissé ses prévisions annuelles** sous l'effet de la crise du cyclospora, tandis que CAVA maintenait les siennes. La divergence des deux dossiers sur le même choc externe est le meilleur test grandeur nature de la solidité relative de CAVA.

**Dutch Bros (BROS) — Le comparateur de croissance**
Même profil de compounder à forte croissance de parc (+32,5 % de CA au T2 2026, ventes comparables à +8,3 % en propre), mais sur la boisson et avec une composante franchisée. C'est le pair le plus pertinent pour juger le multiple accordé à une histoire d'ouvertures — et il se paie nettement moins cher que CAVA.

**Wingstop (WING) — Le modèle inverse**
Franchisé à 98 %, donc peu capitalistique, à ROIC très élevé et à capitaux propres négatifs (rachats d'actions financés par dette). Wingstop montre ce qu'un modèle asset-light permet en termes de multiple soutenable. CAVA a délibérément choisi la voie opposée : plus de contrôle, plus de capital immobilisé, moins de levier.

---

### Le ratio qui compte : EV/EBITDA rapporté à la croissance du parc

CAVA se paie environ **53x l'EBITDA** contre une médiane fast-casual autour de **20x**. Pour justifier cet écart, il faut croire simultanément à trois choses : le parc double d'ici 2032, l'économie unitaire ne se dégrade pas en s'éloignant des marchés cœur, et aucun accident de marque ne survient. La comparaison sectorielle ne tranche pas ce débat — elle en fixe le prix.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (exercice clos le 12 juillet 2026) — publiés le 11 août 2026

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires CAVA | **365,4 M$** | 278,2 M$ | 360,1 M$ | **Dépassé (+1,5 %)** |
| Croissance publiée | **+31,3 %** | +20,3 % | — | — |
| Ventes comparables | **+9,0 %** | +2,1 % | ~+7 % | **Dépassé** |
| Résultat net | **23,0 M$** | 18,4 M$ | — | +25,3 % |
| BPA dilué | **0,19 $** | 0,16 $ | 0,18 $ | **Dépassé (+3 %)** |
| EBITDA ajusté | **54,7 M$** | 42,1 M$ | — | +30,0 % |
| Marge au niveau restaurant | **25,7 %** | 26,3 % | — | **-60 bps** |

**CAVA a dépassé le consensus sur les trois lignes qui comptent** : chiffre d'affaires, ventes comparables et bénéfice par action. Ce n'est pas un dépassement spectaculaire en pourcentage, mais il intervient dans un trimestre marqué par un choc sanitaire sectoriel — ce qui en accroît la valeur informative.

---

### Facteurs clés

**Ce qui a tiré les résultats** :
- **94 ouvertures nettes sur douze mois** (+19,6 % du parc), portant le total à **476 restaurants** dans 29 États et D.C.
- **Trafic clients en hausse de 5,3 %** — la composante la plus qualitative de la croissance
- **Productivité des nouvelles unités supérieure à 100 %**, homogène entre géographies et formats
- **Cohorte 2024** identifiée comme le meilleur millésime historique, en ventes comparables à deux chiffres

**Ce qui a freiné** :
- L'épidémie de **cyclospora** liée à de la laitue iceberg importée du Mexique (FDA, 17 juillet 2026) a fait chuter les ventes comparables **à un niveau plat à légèrement positif** en fin de trimestre — alors même que CAVA **ne sert pas de laitue iceberg** et **ne s'approvisionne pas au Mexique**
- La direction a indiqué un redressement **hebdomadaire séquentiel**, avec un retour à une croissance de l'ordre de +5 % fin juillet
- Aucun impact constaté de l'épidémie de salmonelle liée aux jalapeños

---

### Évolution des marges

- **Marge au niveau restaurant : 25,7 %**, en recul de 60 points de base sur un an. Trois causes citées : le **coût matière du saumon glacé à la grenade** lancé le 20 avril 2026, la **montée du mix livraison tiers** (dilutif en taux mais relutif en euros de marge), et des **investissements salariaux**. Effet compensateur : le levier opérationnel du chiffre d'affaires
- **Marge d'EBITDA ajusté : 14,9 %**, en progression — le levier sur les frais généraux fonctionne (G&A à 11,8 % du CA au T1 2026 contre 12,5 % un an plus tôt)
- **Marge opérationnelle consolidée : ~5,5 %** — l'écart avec la marge restaurant mesure le coût de la structure et de la croissance

---

### Prévisions et perspectives

La direction a **confirmé sans modification** ses prévisions 2026 :

| Indicateur | Objectif 2026 |
|---|---|
| Ouvertures nettes | **75 à 77** |
| Ventes comparables | **+4,5 % à +6,5 %** |
| Marge au niveau restaurant | ~23,7 % à 24,3 % |
| EBITDA ajusté | **181 à 191 M$** |

**Le changement de ton est le vrai sujet.** La directrice financière a reconnu que **le bas de la fourchette impliquerait des ventes comparables légèrement négatives au second semestre**, tout en précisant qu'aucune tendance actuelle ne pointe vers ce scénario. Le mot **« prudent » a été employé six fois** pendant la conférence. Le maintien inchangé d'un objectif après un trimestre à +9 % est, arithmétiquement, une **révision implicite à la baisse du second semestre**.

---

### Bilan — points de vigilance et points forts

- **Aucune dette financière** — seules des obligations locatives figurent au passif long terme
- **393 M$ de trésorerie et placements** à la clôture de l'exercice 2025
- **Ratio courant de 2,65** — liquidité confortable
- **Trésorerie d'exploitation de 134,5 M$** sur le premier semestre 2026, pour un **free cash-flow de 44,8 M$** : l'écart est absorbé par le capex d'ouverture
- **Free cash-flow sur douze mois glissants : ~39 M$** seulement, pour une capitalisation de ~7,9 Mds$ — c'est le chiffre le plus inconfortable du dossier
- **Aucune créance client, aucun stock significatif** — la mécanique du bilan est saine par nature

---

### Réaction du marché

Le titre avait déjà perdu **16 % au cours du mois précédant la publication**, sous l'effet des craintes sanitaires. Après des résultats meilleurs qu'attendu, la réaction a été **partagée** : les objectifs de cours ont divergé fortement — RBC de 90 à 95 $, Wolfe de 79 à 82 $, mais TD Cowen de 100 à 85 $, KeyBanc de 110 à 95 $, Mizuho de 85 à 70 $, BofA de 110 à 107 $, Guggenheim de 100 à 95 $. Northcoast a relevé sa recommandation de Vendre à Neutre.

Le titre cotait **67,59 $ le 25 août 2026**, soit environ **23 % sous l'objectif moyen des analystes (~88 $)** et **61 % sous son plus haut historique** de 172,43 $ (novembre 2024).

**Ce que cela indique** : le marché ne conteste plus l'exécution opérationnelle. Il conteste le prix. Un trimestre à +31 % de croissance et +9 % de comparables qui ne fait pas remonter durablement le titre est le signe que **la valorisation, et non la performance, est devenue le facteur limitant**.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Évolution du ton — 2024 à 2026

**2024 — Euphorie assumée.** Croissance du chiffre d'affaires de 33 %, ventes comparables de +13 % sur l'année et +21 % au T4. Le discours est celui d'une marque qui découvre son propre potentiel : « category-defining », objectif de 1 000 restaurants martelé, relèvement de prévisions à chaque trimestre. Le titre atteint 172,43 $ en novembre 2024.

**2025 — Le brouillard.** Le retournement est brutal. Au T2 2025, les ventes comparables tombent à **+2,1 %** contre un consensus de 6,2 %, et Brett Schulman emploie l'expression restée célèbre de **« consumer fog »** pour décrire l'incertitude des dépenses discrétionnaires. Le titre perd 15 à 20 % en séance. En novembre 2025, la direction **abaisse ses prévisions** de ventes comparables de 4,0-6,0 % à **3,0-4,0 %** et sa marge restaurant de 24,8-25,2 % à 24,4-24,8 %. Le T4 2025 clôt l'année à **+0,5 %** de comparables et 21,4 % de marge restaurant.

Le mérite du management, sur cette séquence, est de **ne pas avoir nié la difficulté** ni changé de stratégie : le rythme d'ouvertures a été maintenu, l'objectif 2032 réaffirmé.

**2026 — Le redressement, sur un ton volontairement bridé.** T1 à +9,7 % de comparables, T2 à +9,0 % avec un trafic à +5,3 %. Le discours pourrait être triomphal. Il ne l'est pas. Le mot **« prudent » revient six fois** pendant la conférence du 11 août 2026, et les prévisions annuelles sont maintenues telles quelles malgré deux trimestres largement au-dessus.

---

### Priorités répétées du management

**1. L'objectif de 1 000 restaurants en 2032** — invariant depuis l'introduction en bourse. C'est l'ancre de toute la communication et le socle implicite de la valorisation.

**2. La qualité des ouvertures avant le nombre** — la direction communique systématiquement sur la **productivité des nouvelles unités (supérieure à 100 %)** et sur la performance des cohortes, plutôt que sur le seul décompte d'ouvertures. La mise en avant de la **cohorte 2024 comme meilleur millésime** est un choix argumentatif habile et vérifiable.

**3. L'accessibilité prix** — thème montant en 2026. La direction insiste sur des **hausses tarifaires contenues** et met en avant le fait que **les marchés à revenus modestes affichent les meilleures ventes comparables**. C'est une réponse directe aux critiques sur le prix moyen du fast-casual.

**4. La sécurité alimentaire** — devenue centrale à l'été 2026. Le discours est factuel et vérifiable : pas de laitue iceberg, pas de feuilles vertes mexicaines, pas d'approvisionnement auprès des sites Taylor Farms incriminés, audits fournisseurs « constants ». Schulman a explicitement laissé ouverte la question de la poursuite de la relation avec Taylor Farms.

**5. Le digital et la fidélité** — mix digital à 39 %, croissance de la base de fidélité supérieure à celle du parc, déploiement des écrans de cuisine.

---

### Analyse du sentiment

- **Confiance opérationnelle : élevée.** Le management parle de son parc et de ses cohortes avec des chiffres précis et vérifiables. Il ne fuit pas les questions difficiles.
- **Prudence prévisionnelle : très marquée, et probablement délibérée.** Maintenir une fourchette de +4,5 à +6,5 % après deux trimestres à +9 % construit mécaniquement une marge de sécurité. C'est de la bonne gestion des attentes — mais cela **prive aussi le titre d'un catalyseur de révision à la hausse**.
- **Transparence : bonne.** L'admission explicite que le bas de fourchette implique des comparables négatifs au second semestre est un exercice de franchise rare.
- **Absence de comportement promotionnel excessif** — contrairement à d'autres dossiers de forte croissance, la direction ne survend pas. Le contraste avec l'euphorie de 2024 est net et plutôt rassurant.

> **À lire entre les lignes** : le management a appris de 2025. Il a cessé de vendre du rêve trimestriel et vend désormais un plan décennal. C'est plus sain — mais cela signifie aussi que **le titre ne remontera pas sur le discours ; il remontera sur les chiffres, ou pas du tout**.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Brett Schulman — Cofondateur, Président-Directeur Général

**Bilan chiffrable** :
- Dirige CAVA depuis **2010**, soit seize ans — une longévité rare dans la restauration cotée
- A conduit l'enseigne d'un restaurant unique à **476 unités** et à **plus de 1,18 Md$ de chiffre d'affaires** (2025), avec un franchissement du milliard atteint pour la première fois cet exercice
- A piloté l'acquisition et la **conversion de Zoe's Kitchen (2018, ~300 M$)** — opération qui a fourni à CAVA son socle immobilier national et son accélérateur de croissance. C'est l'unique acquisition majeure du groupe, et elle a été **digérée sans dérailler le modèle**
- A mené l'**introduction en bourse de juin 2023** à 22 $, valorisation qui a doublé dès le premier jour
- A traversé le trou d'air de 2025 sans modifier la stratégie ni ralentir le rythme d'ouvertures — décision aujourd'hui validée par le rebond de 2026

**Parcours** : finance avant la restauration — postes de direction chez **Deutsche Bank Alex. Brown**, puis directeur des opérations de Snikiddy Snacks. Profil d'opérateur-financier plutôt que de restaurateur de métier.

**Participation financière** : détenteur direct de plusieurs centaines de milliers d'actions, pour une valeur de l'ordre de plusieurs dizaines de millions de dollars. L'alignement est réel mais **il s'érode** (voir signaux d'alerte).

---

### Tricia Tolivar — Directrice Financière (depuis novembre 2020)

**Bilan** : a structuré la fonction finance pour l'introduction en bourse, professionnalisé la communication financière et instauré une discipline de prévisions qui, après l'accident de 2025, s'est traduite par une **prudence assumée** en 2026.

**Point à connaître, et à ne pas dissimuler** : Tricia Tolivar était **directrice financière de GNC Holdings de mars 2015 à novembre 2020**, période au cours de laquelle **GNC a déposé son bilan (Chapter 11) en juin 2020**. Ce n'est pas une disqualification — GNC était un dossier de distribution physique structurellement condamné, et elle a rejoint CAVA quelques mois plus tard — mais c'est un élément factuel qui figure dans les documents d'introduction en bourse et qu'un analyste rigoureux ne peut ignorer. Auparavant : postes de direction chez **Ernst & Young** et **AutoZone**.

---

### Le reste de l'équipe

- **Ted Xenohristos**, cofondateur, reste garant du concept et de l'identité culinaire
- **Jennifer Somers**, directrice des opérations
- **Doug Thompson**, directeur du développement (nommé en 2026) — poste stratégique compte tenu du rythme d'ouvertures
- **Chris Penny**, directeur industriel, pilote CAVA Foods

L'équipe est **construite pour l'exécution et l'expansion**, avec une continuité fondateur au sommet.

---

### Allocation du capital — l'enjeu central

| Décision | Nature | Lecture |
|---|---|---|
| Aucun dividende | Depuis l'origine | Cohérent avec la phase de croissance |
| Aucun rachat d'actions | Depuis l'introduction | Cohérent : le capital va aux ouvertures |
| Aucune dette financière | Structurel | **Discipline remarquable** pour une croissance de ce rythme |
| Zoe's Kitchen (2018, ~300 M$) | Unique acquisition majeure | Intégrée et convertie avec succès |
| ~171 M$ de capex sur 12 mois | Ouvertures + usines | Absorbe l'essentiel de la trésorerie d'exploitation |

**Évolution de la rentabilité** : **ROE à ~8,0 %**, **ROIC à ~6,2 %**. Ce sont des niveaux **modestes**, très inférieurs à ceux de Chipotle. Deux explications s'additionnent : le modèle 100 % en propre immobilise beaucoup de capital, et une part croissante de ce capital est investie dans des restaurants qui ne sont pas encore à maturité. Le ROIC est donc **structurellement pénalisé par la croissance elle-même** — mais il devra remonter à mesure que le parc mûrit, faute de quoi la thèse s'effondre.

**Point fort majeur** : financer une croissance de parc de près de 20 % par an **sans dette** et en restant bénéficiaire est un exploit d'allocation. Peu d'entreprises de croissance y parviennent.

---

### Signaux d'alerte

- **Ventes d'initiés massives** : environ **17,3 millions d'actions cédées par les initiés sur dix-huit mois**, dont environ 598 000 par Brett Schulman et des cessions régulières de Ted Xenohristos, Tricia Tolivar et Adam Phillips. Une partie relève de couvertures fiscales sur acquisition de droits et de sorties de porteurs pré-introduction, mais l'ampleur cumulée est un fait objectif. **Achats d'initiés sur la période : 150 actions.** L'asymétrie est totale
- **Rentabilité du capital faible** (ROIC ~6,2 %) — l'allocation ne sera jugée qu'a posteriori, à la maturité du parc
- **Aucun retour aux actionnaires** — défendable aujourd'hui, à réévaluer si la croissance ralentit
- **Concentration sur un seul concept** — pas de portefeuille de marques, pas de diversification géographique internationale
- **Type de dirigeant** : **cofondateur-opérateur de long terme**. À ce stade (expansion nationale d'un concept unique), c'est l'archétype recherché. Le risque symétrique est l'attachement au modèle existant et la difficulté à reconnaître un plafond de croissance s'il apparaissait`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours

### Contexte
CAVA est cotée depuis **juin 2023** — l'historique est donc court mais extraordinairement volatil. Le titre a été introduit à **22 $**, a atteint **172,43 $ le 13 novembre 2024**, est retombé à **43,41 $** dans les douze derniers mois, et cotait **67,59 $ le 25 août 2026**. Un investisseur entré à l'introduction reste largement gagnant ; un investisseur entré au sommet a perdu plus de 60 %.

---

### Hausses significatives

**Juin 2023 — Introduction en bourse.** Prix d'introduction à 22 $, **cours doublé dès la première séance**. L'appétit du marché pour un concept de croissance dans la restauration était intact.

**2023-2024 — La phase d'accélération.** Croissance du chiffre d'affaires de +33 % en 2024, ventes comparables de +13 % sur l'année et **+21 % au T4 2024**, passage à la rentabilité dès le premier trimestre public. Le titre est passé d'environ 30 $ (plus bas d'octobre 2023) à **172,43 $ en novembre 2024** — une multiplication par près de six en treize mois. À ce sommet, le titre se payait environ **320x les bénéfices et 19x le chiffre d'affaires**.

**Février-avril 2026 — Le rebond du redressement.** Publication d'un T4 2025 faible mais accompagné d'objectifs 2026 crédibles, puis d'un **T1 2026 spectaculaire (+32,2 % de CA, +9,7 % de comparables)** avec relèvement des prévisions. Le titre est remonté jusqu'à **98,79 $** en avril-mai 2026.

---

### Baisses significatives

**Fin 2024 — Le dégonflement du multiple.** Après le sommet de novembre, correction de près de 40 % en quelques mois, sans mauvaise nouvelle opérationnelle. Motif unique : **la valorisation**. Des ventes d'initiés et de porteurs pré-introduction ont amplifié le mouvement.

**7 août 2025 — Le choc du « consumer fog ».** Ventes comparables du T2 2025 à **+2,1 %** contre un consensus de 6,2 %, prévisions abaissées, expression de « brouillard consommateur » employée par le PDG. **Chute de 15 à 20 % en séance**, vague de révisions à la baisse d'objectifs (BofA, Piper Sandler, Bernstein, CFRA, TD Cowen). C'est la fin de la lune de miel post-introduction.

**Fin 2025 — Le point bas.** Nouvel abaissement de prévisions en novembre 2025 (comparables ramenées à 3-4 %), T4 à **+0,5 %** de comparables et marge restaurant à 21,4 %. Le titre a touché **43,41 $**.

**Juillet-août 2026 — La crise sanitaire sectorielle.** L'épidémie de **cyclospora** liée à de la laitue iceberg Taylor Farms Mexico (FDA, 17 juillet 2026), qui a touché plusieurs milliers de personnes, a frappé l'ensemble des enseignes à forte composante végétale. Les données de fréquentation ont montré un **recul de 4,2 % des visites** chez CAVA, un effondrement de 24 % chez Chopt, plus de 30 % chez Taco Bell, un impact de 6 points de ventes comparables chez Sweetgreen — et une mise en faillite pour Salad and Go. **Le titre CAVA a perdu 16 % en un mois**, clôturant à 62 $ le 7 août, avant de se redresser partiellement après une publication rassurante.

---

### Facteurs structurels

- **Compression et expansion du multiple** : c'est le moteur dominant. Le titre est passé de 320x à ~122x les bénéfices sans que la trajectoire opérationnelle change fondamentalement. **La valorisation, pas les résultats, explique l'essentiel de la volatilité**
- **Bêta élevé (~1,7)** et **11,5 % du flottant vendu à découvert** — le titre amplifie les mouvements de marché et réagit violemment aux nouvelles
- **Sensibilité au récit sectoriel** : CAVA est corrélée au sentiment sur le fast-casual dans son ensemble ; la crise cyclospora l'a démontré, l'enseigne ayant subi la baisse alors qu'elle n'était pas impliquée
- **Écart persistant avec les objectifs d'analystes** : cours à 67,59 $ contre un objectif moyen d'environ **88 $** (fourchette 70-107 $) sur 27 analystes. Cet écart de 30 % mesure moins un potentiel qu'un **désaccord non résolu sur le multiple soutenable**`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du bénéfice par action 2026-2028

### Avertissement méthodologique
CAVA est une entreprise de croissance dont le résultat net est **structurellement écrasé par le rythme d'ouvertures** : coûts de pré-ouverture, amortissements de restaurants jeunes, frais généraux dimensionnés pour un parc futur. Le bénéfice par action est donc un **indicateur retardé** de la valeur créée. Les fourchettes ci-dessous sont des scénarios de modélisation, pas des prévisions de précision.

### Hypothèses de modélisation

**Croissance du chiffre d'affaires** :
- **Croissance du parc** : 75-77 ouvertures nettes en 2026 (base 439 fin 2025), puis un rythme de 80 à 95 par an pour tenir la trajectoire de 1 000 unités en 2032 — soit **+15 à +18 % de parc par an**
- **Ventes comparables** : +4,5 à +6,5 % en 2026 (objectif confirmé), normalisation vers **+3 à +5 %** en 2027-2028 à mesure que la base de comparaison durcit
- **Effet prix** : contenu volontairement (+2 à +3 %), l'accessibilité étant devenue un axe de communication
- **Croissance publiée estimée : +25 à +28 % en 2026, puis +17 à +20 % par an**

**Levier opérationnel** :
- **Marge au niveau restaurant** : 23,7-24,3 % attendus en 2026 (le saumon pèse ~100 bps), avec une stabilisation autour de 24-25 % ensuite
- **Frais généraux** : c'est le vrai gisement. G&A passés de 12,5 % à 11,8 % du chiffre d'affaires en un an. Chaque point gagné vaut ~15 M$ de résultat opérationnel à l'horizon 2028
- **Coûts de pré-ouverture** : ~19,5-20 M$ en 2026, croissants avec le rythme d'ouvertures

**Coûts de financement** : **négligeables** — pas de dette financière. Les produits financiers sur la trésorerie compensent partiellement les charges d'intérêts locatifs.

**Dilution** : rémunération en actions d'environ **+1 à +1,5 % du nombre d'actions par an**. Aucune émission de capital anticipée : la croissance est autofinancée.

---

### Estimations de BPA

| Exercice | BPA estimé | Croissance | P/E au cours de 67,59 $ |
|---|---|---|---|
| 2025 (réalisé) | **0,54 $** | -51 % (base 2024 gonflée par un produit d'impôt) | — |
| S1 2026 (réalisé) | **0,39 $** | — | — |
| **2026E** | **0,66 à 0,72 $** | **+22 à +33 %** | **~94x à 102x** |
| **2027E** | **0,88 à 1,00 $** | **+30 à +38 %** | **~68x à 77x** |
| **2028E** | **1,10 à 1,28 $** | **+25 à +28 %** | **~53x à 61x** |

*Point d'ancrage externe : les modèles de place convergent vers un chiffre d'affaires d'environ 2,4 Mds$ et un résultat net d'environ 145 M$ à l'horizon 2029, soit une croissance annuelle de revenus d'environ 20 %. Nos estimations 2028 sont cohérentes avec cette trajectoire.*

---

### Sensibilité

- **Scénario haussier** (comparables à +6 %, marge restaurant à 25 %, levier G&A soutenu) : BPA 2028 vers **1,35 $** → P/E 2028 de ~50x. Le multiple reste élevé, mais devient discutable plutôt qu'indéfendable
- **Scénario de base** : BPA 2028 autour de **1,20 $** → P/E 2028 de ~56x. Le titre a besoin d'une croissance de 20 % au-delà de 2028 pour justifier ce niveau
- **Scénario baissier** (comparables à +2 %, marge restaurant à 23 %, ralentissement des ouvertures) : BPA 2028 vers **0,85 $** → P/E 2028 de ~80x, avec un multiple qui se comprimerait mécaniquement. **Le risque n'est pas le bénéfice, c'est le double effet ciseau bénéfice-multiple**

---

### Le calcul qui met la valorisation en perspective

À l'horizon 2032, avec **1 000 restaurants**, un AUV de 3,3 M$ et une marge nette de 8 %, CAVA générerait environ **3,3 Mds$ de chiffre d'affaires et 264 M$ de résultat net**, soit un BPA d'environ **2,10 $**. Au cours actuel, cela représente **32x les bénéfices de 2032** — six ans à l'avance, en supposant une exécution sans faute.

**Conclusion** : la thèse n'est pas absurde, mais elle exige de payer aujourd'hui un multiple normal pour des résultats situés à six ans, sans marge de sécurité pour les accidents de parcours. C'est la définition même d'une valorisation de croissance tendue.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Avantages concurrentiels et pérennité des barrières

**1. Une catégorie sans concurrent d'échelle.** CAVA est la seule enseigne méditerranéenne fast-casual d'envergure nationale aux États-Unis. Le régime méditerranéen bénéficie d'un alignement culturel durable avec les préférences santé. Tant que personne n'a répliqué le format à l'échelle, CAVA capte seule la croissance de la catégorie.

**2. Une économie unitaire qui ne se dégrade pas en s'étendant.** C'est le point le plus fort du dossier et le plus vérifiable : **AUV de 3,1 M$**, **marge restaurant de 25,7 %**, **productivité des nouvelles unités supérieure à 100 %**, performance **homogène entre géographies et formats**, et une **cohorte 2024 en ventes comparables à deux chiffres** identifiée comme le meilleur millésime historique. L'expansion ne se paie pas par une dilution de la qualité.

### Leviers de croissance

**3. L'espace de croissance est arithmétique.** 476 restaurants aujourd'hui, **au moins 1 000 visés en 2032**. À économie unitaire constante, doubler le parc double le résultat opérationnel. C'est un moteur mécanique, visible, et déjà en cours d'exécution à un rythme de +19,6 % par an.

**4. Le trafic, pas le prix.** Les +9 % de ventes comparables du T2 2026 sont portés à **5,3 points par le trafic clients**. Dans un secteur où la quasi-totalité des acteurs compense une érosion de fréquentation par des hausses tarifaires, CAVA gagne des clients tout en **contenant volontairement ses prix**. Les marchés à revenus modestes affichent d'ailleurs les meilleures comparables — le concept n'est pas un luxe urbain.

**5. Le levier sur les frais généraux.** G&A ramenés de 12,5 % à 11,8 % du chiffre d'affaires en un an. À mesure que le parc grossit, ce poste se dilue mécaniquement — c'est le principal gisement de marge des trois prochaines années.

**6. Un bilan de forteresse.** **Aucune dette financière**, 393 M$ de trésorerie et placements, ratio courant de 2,65, besoin en fonds de roulement négatif. CAVA finance une croissance de parc de 20 % par an **sans emprunter et sans diluer**. Dans un secteur qui traverse une phase de faillites (Salad and Go), c'est une différence de nature, pas de degré.

**7. Une décote face aux analystes.** Cours à 67,59 $ contre un objectif moyen d'environ 88 $ sur 27 analystes, soit un potentiel théorique de ~30 %. Le titre a perdu 61 % depuis son sommet alors que le chiffre d'affaires a plus que doublé sur la même période.

### Surprise potentielle sur les bénéfices
Les prévisions 2026 ont été **maintenues inchangées après deux trimestres à +9 %** de comparables. Si le second semestre se tient simplement au-dessus du milieu de fourchette, un dépassement est arithmétiquement probable — et la direction a elle-même indiqué qu'aucune tendance ne pointait vers le bas de la fourchette.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Trois risques susceptibles de nuire durablement

**1. Le risque sanitaire est structurel, pas accidentel.** L'été 2026 a livré la démonstration la plus coûteuse possible : CAVA a perdu 16 % de sa valeur et vu ses ventes comparables tomber à zéro **alors qu'elle n'était pas contaminée**, ne servait pas de laitue iceberg et ne s'approvisionnait pas auprès des sources incriminées. Un concept construit sur le frais et le végétal **hérite du risque réputationnel de toute sa catégorie**. Et le jour où l'incident sera imputable à CAVA elle-même, le précédent Chipotle (2015-2018) montre que la reconstruction prend des années.

**2. La fragilité démontrée des ventes comparables.** Le rebond de 2026 est réel, mais il repose sur une base 2025 effondrée (+2,1 % au T2, +1,9 % au T3, **+0,5 % au T4**). Ces chiffres ne sont pas anciens — ils datent d'il y a douze mois. Ils prouvent que le concept **peut caler**, et vite, dès que le consommateur se rétracte. Les prévisions 2026 elles-mêmes admettent qu'un second semestre à comparables légèrement négatives est dans la fourchette.

**3. Le modèle 100 % en propre plafonne le rendement du capital.** ROE à 8 %, **ROIC à 6,2 %** — soit un niveau à peine supérieur au coût du capital. Chaque ouverture consomme de la trésorerie : le free cash-flow sur douze mois ressort à **~39 M$** pour 210 M$ de trésorerie d'exploitation et 171 M$ de capex. Une entreprise valorisée 7,9 Mds$ qui génère 39 M$ de liquidités libres se paie **~197x son free cash-flow**. Le modèle est vertueux à terme, mais il **n'engendre pas de cash aujourd'hui**.

### Compression de marge et ralentissement
La marge restaurant est **guidée en baisse** pour 2026 (23,7-24,3 % contre 25,7 % au T2), sous l'effet du saumon, de la montée des agrégateurs de livraison et des investissements salariaux. Les droits de douane ont déjà pesé sur les coûts d'emballage et de matière en 2025. À l'inverse du levier G&A, ces vents contraires sont récurrents.

### Analyse pré-mortem
**Que se passe-t-il si CAVA cote 35 $ dans deux ans ?** Enchaînement plausible : le second semestre 2026 déçoit, les comparables retombent vers 2 % en 2027 sous l'effet d'une base durcie et d'un consommateur fatigué, la marge restaurant s'installe à 23 %, le BPA 2028 plafonne à 0,85 $ — et surtout le marché cesse d'accorder 100x les bénéfices à une chaîne de restaurants dont la croissance ralentit, appliquant le multiple de Chipotle (30-40x). Résultat : **0,85 $ × 40 = 34 $**. Aucun de ces éléments n'exige une catastrophe : il suffit d'une normalisation.

### Les multiples actuels sont-ils trop élevés ?
**Oui, sans ambiguïté, sur toutes les mesures** : ~122x les bénéfices, ~53x l'EBITDA, ~6,1x le chiffre d'affaires, ~197x le free cash-flow, PEG de 4,0. Et pour Chipotle — même modèle, même format, économie unitaire équivalente, exécution prouvée sur 3 800 restaurants — le marché paie **30x**. Payer quatre fois le multiple de son propre modèle de référence exige que CAVA fasse le chemin de Chipotle **sans jamais trébucher**.

### Point de vue à contre-courant
**Ce que le marché refuse de voir, dans les deux camps.** Les haussiers refusent de voir qu'un excellent business et une excellente action sont deux choses différentes : à 122x les bénéfices, l'exécution parfaite est déjà payée. Les baissiers refusent de voir qu'un bilan sans dette, un besoin en fonds de roulement négatif et une économie unitaire qui tient à l'expansion rendent le **risque de destruction permanente de valeur très faible** — CAVA ne peut pas faire faillite, elle peut seulement être trop chère.

La position juste n'est donc pas « acheter » ou « vendre » mais **« excellente entreprise, prix qui n'offre aucune marge de sécurité »**. C'est un dossier où le point d'entrée fait la totalité du rendement.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE FAIBLE
Le chiffre d'affaires est **encaissé au point de vente**, simultanément à la livraison du service. Il n'y a ni contrat pluriannuel, ni obligation de performance étalée, ni créance client significative. C'est l'un des modèles de reconnaissance de revenus les plus simples qui soient.

**Seul point de vigilance** : les **produits différés liés au programme de fidélité** et aux cartes cadeaux, dont l'évaluation repose sur des hypothèses de taux d'utilisation (breakage). Poste peu matériel aujourd'hui, à surveiller à mesure que la base de fidélité croît.

### L'information sectorielle — RISQUE MODÉRÉ
CAVA ne publie que **deux segments** : CAVA et CAVA Foods, ce dernier pesant environ 1 % du chiffre d'affaires externe. Il n'existe **aucune ventilation publique par région, par cohorte d'ouverture ou par canal de distribution**.

**Conséquence concrète** : il est impossible pour un investisseur externe de vérifier si les nouveaux marchés (Midwest, Las Vegas, Bay Area) performent aussi bien que le socle Mid-Atlantic. On dispose uniquement de l'**affirmation de la direction** selon laquelle la performance est « homogène entre géographies et formats ». Cette affirmation est plausible et cohérente avec les chiffres agrégés — mais elle n'est pas auditable de l'extérieur.

### Les mesures non-GAAP — RISQUE MODÉRÉ À ÉLEVÉ (le point central)
C'est **le signal le plus important du dossier**, et il n'est pas frauduleux : il est structurel et parfaitement divulgué. Mais il est massivement mal lu.

| Mesure | Niveau T2 2026 | Ce qu'elle exclut |
|---|---|---|
| **Marge au niveau restaurant** (non-GAAP) | **25,7 %** | Frais généraux, amortissements, coûts de pré-ouverture, rémunération en actions |
| **Marge d'EBITDA ajusté** (non-GAAP) | **14,9 %** | Amortissements, impôts, intérêts, éléments non récurrents |
| **Marge opérationnelle** (GAAP) | **~5,5 %** | Rien |

L'écart entre 25,7 % et 5,5 % **n'est pas un artifice** : c'est le coût réel de la structure et de la croissance. Mais un investisseur qui retient « CAVA fait 25 % de marge » se trompe d'un facteur cinq sur la rentabilité économique de l'entreprise. **Toute valorisation doit se construire sur la marge GAAP.**

### Contrats de location (ASC 842) — RISQUE MODÉRÉ
CAVA n'a **aucune dette financière**, mais le ratio dette/capitaux propres apparent (~0,62) est presque entièrement constitué d'**obligations locatives**. Chaque restaurant est un bail de 10 à 15 ans.

**Ce que cela signifie** : les 476 baux constituent un engagement fixe de plusieurs centaines de millions de dollars, **non résiliable en cas de retournement**. En croissance, c'est invisible. En récession, c'est le poste qui transforme un levier opérationnel positif en levier négatif. À surveiller : la durée résiduelle moyenne, le taux d'actualisation retenu, et la charge locative rapportée au chiffre d'affaires.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE À MODÉRÉ
Le goodwill provient essentiellement de l'**acquisition de Zoe's Kitchen (2018)**. Il n'a pas fait l'objet de dépréciation, ce qui est cohérent avec la performance des sites convertis. **À surveiller** : la sensibilité du test de dépréciation aux hypothèses de croissance long terme — dans un scénario de ralentissement durable des comparables, ce poste redeviendrait un sujet.

### Rémunération en actions — RISQUE MODÉRÉ
La rémunération en actions est **significative rapportée au résultat net** (23 M$ au T2 2026), et elle est exclue de l'EBITDA ajusté. Elle génère une dilution d'environ **1 à 1,5 % par an**. Ce n'est pas hors norme pour une entreprise de croissance récemment introduite, mais l'effet est réel sur le BPA.

### Parties liées — RISQUE FAIBLE
Aucune transaction avec parties liées significative identifiée. Structure actionnariale dispersée, **73 % du capital détenu par des institutionnels**. Pas d'actions à droit de vote double, pas de société contrôlée.

### Ventes d'initiés — RISQUE MODÉRÉ (signal de gouvernance, pas comptable)
**~17,3 millions d'actions cédées par les initiés sur dix-huit mois, contre 150 actions achetées.** Une part importante relève de couvertures fiscales automatiques et de sorties de porteurs pré-introduction, mais **l'asymétrie totale entre ventes et achats est un fait**. À suivre trimestre après trimestre via les formulaires 4.

### Engagements conditionnels — RISQUE MODÉRÉ, EN HAUSSE
Le risque de litige lié à la **sécurité alimentaire** est le principal engagement conditionnel d'une chaîne de restauration. L'épisode cyclospora de 2026 n'a pas visé CAVA directement, mais la judiciarisation du secteur est croissante. À examiner à chaque publication : les provisions pour litiges et la couverture d'assurance.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ
Trésorerie d'exploitation de **210 M$** sur douze mois, capex de **171 M$**, free cash-flow de **~39 M$**. La conversion est faible **par construction** (chaque ouverture consomme du capital), et non par manipulation. Mais elle signifie que **le résultat net comptable ne se transforme pas en liquidités disponibles** tant que la croissance dure.

**Le calendrier fiscal est un piège de lecture** : les trimestres font 16, 12, 12 et 12 semaines. Toute comparaison séquentielle de chiffre d'affaires brut est mécaniquement fausse.

---

### Verdict global
**Risque comptable : FAIBLE.** CAVA présente l'un des profils comptables les plus propres qu'un analyste puisse rencontrer dans une entreprise de forte croissance : revenus encaissés au comptant, pas de créances, pas de stocks matériels, pas de dette, pas de parties liées, pas d'acquisitions récentes à intégrer.

**Le vrai risque n'est pas comptable, il est interprétatif** : l'omniprésence de la « marge au niveau restaurant » à 25,7 % dans la communication, alors que la marge opérationnelle réelle est de 5,5 %, conduit une large partie du marché à surestimer la rentabilité économique du modèle. Ce n'est pas un mensonge — c'est un cadrage. Et c'est en partie ce cadrage qui soutient un multiple de 122x les bénéfices.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Brett Schulman et l'équipe CAVA

### Stratégie long terme et avantage concurrentiel

**1.** Vous visez au moins 1 000 restaurants en 2032, soit un doublement du parc actuel. **Quelle proportion de ces 524 ouvertures restantes se situera dans des marchés où vous n'avez aujourd'hui aucune présence ?** Et quel écart d'AUV et de marge acceptez-vous entre un restaurant de nouveau marché et votre socle Mid-Atlantic avant de ralentir ?

**2.** Vous affirmez que la productivité des nouvelles unités dépasse 100 % et que la performance est homogène entre géographies. **Pouvez-vous publier une courbe de maturation par cohorte** — AUV à 12, 24 et 36 mois pour les millésimes 2022 à 2025 ? Sans cette donnée, l'investisseur externe ne peut pas vérifier votre affirmation centrale.

**3.** Vous êtes seul à l'échelle nationale sur le méditerranéen. **Qu'est-ce qui empêche concrètement Chipotle, Panera ou un acteur du capital-investissement de lancer un concept équivalent en trois ans ?** Quelle est la véritable barrière : le sourcing, la recette, l'immobilier, ou simplement le fait que personne ne s'y est encore attelé ?

### Économie unitaire et rentabilité du capital

**4.** Votre ROIC ressort à environ 6,2 %, votre ROE à 8 %. **À quel niveau de parc et à quelle échéance estimez-vous franchir durablement votre coût du capital ?** Quel est votre coût du capital de référence en interne ?

**5.** La marge au niveau restaurant est de 25,7 % ; la marge opérationnelle consolidée est d'environ 5,5 %. **Quel est votre objectif de marge opérationnelle GAAP à parc mature**, et quelle part de l'écart actuel considérez-vous comme structurelle plutôt que liée à la croissance ?

**6.** Votre free cash-flow sur douze mois est d'environ 39 M$ pour 210 M$ de trésorerie d'exploitation. **À partir de quel rythme d'ouvertures le free cash-flow devient-il significativement positif** — et est-ce un objectif, ou une conséquence non recherchée d'un ralentissement futur ?

### Allocation du capital

**7.** Vous n'avez ni dette, ni dividende, ni rachat d'actions. **À quelles conditions envisageriez-vous de recourir à l'endettement pour accélérer les ouvertures ?** Et à l'inverse, à quel moment un retour aux actionnaires deviendrait-il le meilleur usage du capital ?

**8.** Vos deux usines peuvent servir environ 750 restaurants. **Quand engagerez-vous la troisième**, pour quel montant, et cette décision est-elle conditionnée à un seuil de parc ou à un calendrier ?

**9.** Zoe's Kitchen reste votre unique acquisition majeure. **Referiez-vous une opération de ce type ?** Existe-t-il aujourd'hui des actifs de restauration dont la conversion créerait plus de valeur qu'une ouverture ex nihilo ?

### Risques

**10.** L'épisode cyclospora vous a coûté environ 4 % de fréquentation et 16 % de capitalisation **sans que vous soyez impliqués**. **Qu'avez-vous changé depuis** dans votre sourcing, votre traçabilité et votre communication de crise — et quel budget y consacrez-vous désormais ?

**11.** Vous vous fournissez chez Taylor Farms pour certaines références, hors sites incriminés. **Maintenez-vous cette relation, et si oui, sur quels critères objectifs ?** Quel pourcentage de vos volumes de frais dépend de vos trois premiers fournisseurs ?

**12.** Vos ventes comparables sont passées de +21 % au T4 2024 à +0,5 % au T4 2025, puis à +9 % au T2 2026. **Quelle part de cette volatilité attribuez-vous au consommateur, quelle part à vos propres décisions** (menu, prix, marketing) ? Autrement dit : que contrôlez-vous réellement ?

**13.** Vos prévisions 2026 impliquent, au bas de la fourchette, des comparables légèrement négatives au second semestre. **Quel scénario précis produirait ce résultat**, et quel serait alors l'impact sur votre rythme d'ouvertures 2027 ?

### Gouvernance et vision

**14.** Les initiés ont cédé environ 17,3 millions d'actions en dix-huit mois et en ont acheté 150. **Comment expliquez-vous cette asymétrie**, et que répondez-vous à un actionnaire qui y voit un signal ?

**15.** **Quel est le risque que vous sous-estimez le plus aujourd'hui, et que le marché ne voit pas encore ?**`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Vous ne payez pas une entreprise, vous payez une extrapolation

Le fait central du dossier tient en une ligne : **CAVA se paie ~122x les bénéfices ; Chipotle, qui est exactement le même modèle en dix fois plus grand et prouvé, se paie ~30x.**

Les haussiers répondent : « CAVA croît de 31 %, Chipotle de 7 % ». C'est vrai. Mais Chipotle croissait aussi de 30 % il y a quinze ans, et le marché ne lui a jamais accordé 122x durablement. Ce que vous achetez à ce prix, ce n'est pas la croissance actuelle — c'est **l'hypothèse que CAVA parcourra les vingt prochaines années sans le moindre faux pas**, dans un secteur où le taux d'échec des concepts à l'échelle nationale est historiquement écrasant.

Et il y a plus gênant : **CAVA a déjà trébuché**. Au T4 2025, il y a douze mois, les ventes comparables étaient à **+0,5 %** et la marge restaurant à 21,4 %. Ce n'est pas de l'histoire ancienne. C'est la preuve que le concept peut caler, dans un cycle qui n'était même pas une récession.

### 2. Le fossé est en papier

Les haussiers parlent de « catégorie définie ». Traduisons : **CAVA vend des bowls avec des légumes et des dips**. Il n'y a ni brevet, ni contrat, ni coût de changement, ni effet de réseau, ni barrière réglementaire. Un client peut aller déjeuner ailleurs demain sans le moindre frottement.

La seule barrière réelle est que **personne n'a encore décidé de le copier à l'échelle**. Ce n'est pas un fossé, c'est un délai. Le jour où Chipotle décide de lancer un format méditerranéen — il a la logistique, l'immobilier, la trésorerie et le savoir-faire du format « walk the line » — la « catégorie définie » devient un segment disputé.

### 3. Le risque est concentré là où vous ne pouvez pas le contrôler

**L'été 2026 est la démonstration la plus coûteuse et la plus instructive du dossier.** CAVA n'a rien fait de mal. Elle ne sert pas de laitue iceberg. Elle ne s'approvisionne pas au Mexique. Elle n'était liée à aucun des rappels. Résultat : **-4,2 % de fréquentation, ventes comparables ramenées à zéro, -16 % de capitalisation en un mois.**

Autrement dit : un concept construit sur le frais et le végétal **hérite mécaniquement du risque réputationnel de toute sa catégorie**, sans avoir aucun moyen de s'en protéger. Et ce n'était que le scénario favorable — celui où CAVA est innocente.

Le scénario défavorable a un précédent documenté : **Chipotle en 2015**. Une contamination imputable à l'enseigne, et le titre a mis **trois ans** à retrouver son niveau, avec des ventes comparables négatives pendant huit trimestres. Appliquez ce scénario à un titre valorisé 122x les bénéfices : la baisse ne serait pas de 30 %, elle serait de 70 %.

### 4. Le modèle ne produit pas de liquidités

Chiffres bruts sur douze mois : **210 M$ de trésorerie d'exploitation, 171 M$ de capex, 39 M$ de free cash-flow.** Capitalisation : **7,9 Mds$**. Vous payez **~197x le free cash-flow**.

Les haussiers répliquent que le capex est de croissance et non de maintenance. C'est exact — et c'est précisément le piège. **Le free cash-flow ne devient significatif que lorsque la croissance s'arrête.** Or le jour où la croissance s'arrête, le multiple de 122x s'effondre. **Vous ne pouvez pas encaisser le free cash-flow et conserver le multiple.** Les deux s'excluent.

Ajoutez le ROIC : **6,2 %**. Pour une entreprise censée être un composeur de valeur exceptionnel, c'est un rendement du capital à peine supérieur à son coût.

### 5. Le concurrent que les haussiers sous-estiment : Chipotle, mais pas pour la raison qu'ils croient

Les haussiers regardent Chipotle comme le modèle à imiter. Le vrai danger, c'est **Chipotle comme comparable de valorisation**.

Chipotle affiche des ventes comparables **négatives en 2025 (-1,7 %)**, un titre divisé par deux, et se paie 30x. C'est le fast-casual haut de gamme dans sa version mature. Tôt ou tard, le marché appliquera à CAVA la grille de lecture qu'il applique à Chipotle. Il n'a pas besoin d'attendre 2032 : il lui suffit d'un trimestre décevant pour commencer.

Et le cimetière du secteur s'est rempli en 2025-2026 : **Sweetgreen -78,5 % et prévisions abaissées**, **Salad and Go en faillite (Chapter 11)**, **Shake Shack en net recul**. Le fast-casual premium n'est pas une catégorie protégée. C'est une catégorie cyclique déguisée en catégorie de croissance.

### 6. Les signaux de gouvernance

**17,3 millions d'actions vendues par les initiés en dix-huit mois. 150 actions achetées.** Le PDG a cédé environ 598 000 actions. La directrice financière, le directeur comptable et un cofondateur vendent régulièrement.

On répondra — à juste titre en partie — qu'il s'agit de couvertures fiscales et de sorties post-introduction. Mais l'asymétrie est totale : **aucune conviction acheteuse ne s'exprime en interne à ces niveaux de cours**, même après une chute de 61 % depuis les sommets.

Second point : la **directrice financière était en poste chez GNC lorsque l'entreprise a déposé son bilan en 2020**. Ce n'est pas disqualifiant, mais c'est un élément que la communication du dossier n'évoque jamais.

### 7. Quelles hypothèses doivent se vérifier pour justifier le cours actuel ?

Toutes celles-ci, **simultanément** :
- Le parc double d'ici 2032 sans dégradation de l'AUV ni de la marge unitaire
- Les ventes comparables tiennent +4 à +6 % par an pendant six ans, alors qu'elles étaient à +0,5 % il y a douze mois
- La marge opérationnelle GAAP passe de 5,5 % à 10-12 %
- Aucun incident sanitaire imputable à CAVA
- Aucun concurrent d'échelle n'entre dans la catégorie
- Et le marché continue d'accorder plus de 40x les bénéfices en 2032

**Que se passe-t-il si la croissance déçoit de 20 à 30 % ?** Ventes comparables à +2 % au lieu de +5 %, ouvertures ramenées à 60 par an, BPA 2028 à 0,85 $ au lieu de 1,20 $. Et surtout : le multiple ne reste pas à 100x pour une croissance de 12 %. Appliquez 40x — le multiple de Chipotle en meilleure forme — et vous obtenez **34 $**, soit **-50 % depuis le cours actuel**. Il n'a fallu supposer ni fraude, ni crise, ni faillite. Seulement une normalisation.

### Le scénario unique qui nuirait durablement

**Une contamination alimentaire majeure imputable à CAVA elle-même.** C'est le seul événement capable de détruire simultanément la marque, le trafic, la marge et le multiple — et il frapperait une entreprise dont l'avantage concurrentiel est **exclusivement réputationnel**. Le précédent Chipotle 2015-2018 chiffre l'ampleur : huit trimestres de comparables négatives, trois ans de reconstruction.

Probabilité sur cinq ans pour une chaîne de 500 à 800 restaurants servant du frais non cuit ? **Non négligeable — de l'ordre de 15 à 25 %.** Le secteur en a produit trois épisodes majeurs sur la seule année 2026.

### Conclusion short

CAVA est une **excellente entreprise** : bilan sans dette, économie unitaire solide, croissance authentiquement volumique, management honnête. Rien de tout cela n'est contesté ici.

Mais **une excellente entreprise à 122x les bénéfices, 53x l'EBITDA et 197x le free cash-flow n'est pas un investissement — c'est un pari sur la permanence d'un multiple**. Le cours a déjà chuté de 61 % depuis novembre 2024 **sans qu'aucune mauvaise nouvelle fondamentale ne survienne** : c'est le multiple, seul, qui s'est dégonflé. Rien n'indique que ce processus soit terminé, car il reste 122x à comprimer vers 30x.

**La thèse short n'est pas « CAVA va échouer ». Elle est : « CAVA va réussir, et l'action va quand même baisser. »**`,
  },
];

export default { ...meta, modules };
