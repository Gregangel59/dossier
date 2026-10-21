// ============================================================
//  DOSSIER : Netflix, Inc. (NFLX)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "nflx",                     // identifiant d'URL : /dossier/nflx
  ticker: "NFLX",
  name: "Netflix, Inc.",
  exchange: "Nasdaq",
  sector: "Streaming et divertissement",
  initials: "NFLX",                 // affiché dans la pastille
  tagline: "Leader mondial du streaming payant : 31 % de marge opérationnelle, un bilan sain, mais une croissance qui ralentit et un temps d'écran disputé par YouTube.",
  riskScore: 66,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "nflx.html",
  updated: "2026-10",               // période des données
  published: "2026-10-21",          // date exacte de publication
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Netflix est le **premier service mondial de vidéo à la demande par abonnement** : plus de **325 millions d'abonnements payants** fin 2025 (le groupe ne publie plus ce chiffre depuis 2025), une audience qui approche **le milliard de personnes** et une présence dans plus de 190 pays. En 2025, le chiffre d'affaires a atteint **45,2 Md$ (+16 %)** pour une marge opérationnelle de **29,5 %** et un résultat net de **11,0 Md$**. Pour 2026, la direction vise **51,1 Md$ (+13 %)** et **31,5 %** de marge.

Le modèle est simple et puissant :
- **Encaisser un abonnement mensuel** (de 1 $ à 38 $ par mois selon les pays et les formules), payé d'avance et sans engagement
- **Amortir un coût de contenu largement fixe** (environ 20 Md$ de dépenses en numéraire prévues en 2026) sur une base d'abonnés mondiale : plus la base grandit, plus la marge monte
- **Ajouter des couches de monétisation** : hausses de prix régulières, partage de compte payant (depuis 2023), offre avec publicité (depuis fin 2022), événements en direct

Netflix ne vend pas des programmes : il vend **un accès illimité à un catalogue**, et son vrai produit est la **valeur perçue par heure de visionnage**. Selon la direction, un abonné américain paie moins par heure regardée que sur la plupart des services concurrents.

## Principaux produits et services

- **Séries et films originaux** : cœur de l'offre (*Stranger Things*, *Wednesday*, *Squid Game*, *Bridgerton*, *Adolescence*, *KPop Demon Hunters*), produits dans plus de 50 pays. Les programmes non anglophones représentent désormais plus d'un tiers du visionnage, contre moins de 10 % il y a dix ans
- **Contenus sous licence** : catalogue de studios tiers (accord mondial « Pay-1 » avec Sony Pictures, nouvel accord de licence avec Disney), partenariats de diffusion (TF1 en France depuis l'été 2026)
- **Direct et sport** : matchs de NFL (Noël, veille de Thanksgiving, match d'ouverture à Melbourne), WWE *Raw* (contrat de 10 ans), boxe, Coupe du monde féminine de football 2027 aux États-Unis. Le direct pèse un peu plus de 5 % des dépenses de contenu pour environ 1 % des heures vues, mais six des dix plus fortes journées d'inscription des cinq dernières années
- **Publicité** : offre « Standard avec pub » (8,99 $ par mois aux États-Unis), plus de 60 % des inscriptions dans les pays où elle existe ; régie et technologie publicitaire internes (Netflix Ads Suite) ; ~2,7 Md$ de revenus attendus en 2026
- **Nouveaux formats** : podcasts vidéo (partenariats Spotify et iHeartMedia), jeux, expériences physiques (Netflix House), produits dérivés

## Clients, fournisseurs, concurrents

**Clients** : les **ménages** (B2C), qui paient directement ou via un **distributeur** (box d'opérateurs, offres groupées de télécoms comme Canal+, Orange, Free ou SFR en France, Comcast, Verizon ou T-Mobile aux États-Unis, Flipkart en Inde) ; les **annonceurs** (plus de 4 000, +70 % en un an), qui achètent l'audience de l'offre avec publicité.

**Fournisseurs** : créateurs et talents (scénaristes, réalisateurs, acteurs), sociétés de production, studios qui vendent des licences (Sony Pictures, Disney, NBCUniversal), ligues sportives (NFL, WWE, MLB), Amazon Web Services pour l'infrastructure cloud, fabricants de téléviseurs et d'appareils (Samsung, LG, Roku, Apple, Google, Amazon) qui intègrent l'application.

**Concurrents** : **YouTube** (Alphabet), premier concurrent pour le temps passé devant l'écran de télévision ; **Disney** (Disney+, Hulu, ESPN) ; **Amazon Prime Video** ; le futur ensemble **Paramount Skydance–Warner Bros. Discovery** (Paramount+, HBO Max) ; **Comcast** (Peacock) ; **Apple TV** ; plus largement TikTok, les jeux vidéo et les réseaux sociaux.

## Modalités contractuelles et de paiement

- **Côté abonnés** : abonnement **sans engagement**, résiliable à tout moment, **prélevé d'avance chaque mois** (carte bancaire, PayPal, facture d'opérateur, magasins d'applications). Le revenu est reconnu au fil du mois de service. Ce modèle génère un **besoin en fonds de roulement favorable** : le client paie avant d'être servi
- **Côté contenus** : les productions originales sont payées pendant le tournage, souvent **12 à 24 mois avant leur mise en ligne** ; les licences sont réglées selon un échéancier pluriannuel. Les **engagements de contenus** atteignaient **25,1 Md$** au 30 juin 2026, dont **19,6 Md$ hors bilan**
- **Côté publicité** : ventes en gré à gré lors des « upfronts » annuels et achats automatisés via des plateformes partenaires (The Trade Desk, Google DV360, Amazon DSP, Yahoo DSP, et depuis le T3 2026 MercadoLibre en Amérique latine et AdForm en Europe)

> **Note de lecture** : Netflix est à la fois une **entreprise technologique** (produit, recommandation, diffusion) et un **studio mondial**. Sa force est financière (marge, trésorerie, rachats d'actions) ; la question de 2026 est commerciale : **le temps passé sur Netflix progresse peu (+2 % au premier semestre)** alors que le chiffre d'affaires croît encore de 12 %.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## La place de Netflix dans la chaîne de valeur

Netflix occupe la position la plus rentable de la chaîne du divertissement : **l'agrégateur qui détient la relation directe avec l'abonné**. Il finance ou achète les programmes en amont, les diffuse lui-même grâce à son propre réseau technique, et encaisse en aval l'abonnement et la publicité, sans intermédiaire indispensable.

### Amont — La création et les droits

**Talents et production originale** : scénaristes, réalisateurs, acteurs et producteurs indépendants, représentés par les agences (CAA, WME, UTA). Netflix produit dans plus de 50 pays, avec de grands pôles de tournage : Albuquerque (Nouveau-Mexique), Fort Monmouth (New Jersey), Tres Cantos près de Madrid, Shepperton au Royaume-Uni, Toronto. Les conventions collectives des syndicats américains (WGA, SAG-AFTRA, DGA) arrivaient toutes à échéance en 2026 : leur renégociation fixe une partie du coût de production.

**Studios et diffuseurs partenaires (licences)** : Sony Pictures (accord mondial de première fenêtre « Pay-1 », annoncé en janvier 2026), Disney (nouvel accord de licence au T3 2026 : séries et films, dont la saga *L'Âge de glace*), NBCUniversal, TF1 (partenariat de diffusion en France depuis l'été 2026), producteurs locaux en Corée, en Inde, en Espagne ou au Japon.

**Sport et événements en direct** : NFL, WWE (*Raw*, contrat de dix ans), MLB, boxe (Tyson Fury contre Anthony Joshua au T4 2026), FIFA (Coupe du monde féminine 2027 et 2031 aux États-Unis).

**Audio et nouveaux formats** : Spotify (The Ringer) et iHeartMedia pour les podcasts vidéo, Take-Two (avant-première de *Grand Theft Auto VI* en août 2026).

---

### Netflix — Le cœur technologique

**Stockage et calcul** : Amazon Web Services (AWS) héberge l'essentiel des systèmes (catalogue, recommandation, facturation, encodage).

**Diffusion** : **Open Connect**, le réseau de distribution de contenus propre à Netflix, installe des serveurs directement chez les fournisseurs d'accès (Comcast, Verizon, AT&T, Orange, Free, Deutsche Telekom, Jio…). C'est un avantage de coût et de qualité d'image que peu de concurrents possèdent.

**Produit** : nouvelle interface TV, recherche en langage naturel et par la voix (modèles de langage), recommandation personnalisée ; IA générative utilisée en production sur environ 300 titres.

**Régie publicitaire** : Netflix Ads Suite, technologie interne déployée en 2025 ; achats automatisés via The Trade Desk, Google DV360, Amazon DSP, Yahoo DSP, MercadoLibre et AdForm ; mesure d'audience par des tiers.

---

### Aval — L'accès au client

**Appareils** : téléviseurs connectés (Samsung, LG, TCL, Hisense, Sony), boîtiers et clés (Roku, Apple TV, Google TV, Amazon Fire TV), consoles (PlayStation, Xbox), mobiles iOS et Android. La télévision représente la grande majorité du visionnage.

**Distribution groupée** : offres d'opérateurs et de télécoms (Comcast Xfinity, Verizon, T-Mobile aux États-Unis ; Canal+, Orange, Free, SFR, Bouygues Telecom en France ; Jio et Airtel en Inde ; programme de fidélité avec Flipkart depuis le T3 2026).

**Paiement** : Visa, Mastercard, PayPal, facturation opérateur, App Store (Apple) et Google Play.

**Clients finaux** : plus de 325 millions de foyers abonnés et plus de 4 000 annonceurs.

---

### Schéma de la chaîne de valeur

\`\`\`
AMONT (CONTENUS)          NETFLIX (PLATEFORME)          AVAL (ACCÈS ET REVENUS)
Talents, agences      →   Production originale     →   TV connectées, boîtiers
Producteurs locaux        (~20 Md$ en 2026)            (Samsung, LG, Roku, Apple,
Studios sous licence      Catalogue + licences          Google, Amazon)
(Sony, Disney, NBCU)      Recommandation, interface     Opérateurs et bundles
Partenaires (TF1)         Cloud AWS                     (Comcast, Verizon, Canal+,
Sport (NFL, WWE, MLB,     Open Connect (réseau propre)  Orange, Free, Jio, Flipkart)
FIFA)                     Régie Ads Suite          →   325 M+ abonnés (abonnement)
Podcasts (Spotify,                                      4 000+ annonceurs (pub)
iHeartMedia)                                            via Trade Desk, DV360,
                                                         Amazon DSP, Yahoo DSP
\`\`\`

**Le pari central** : en contrôlant à la fois la relation client, la technologie et une part croissante de ses propres programmes, Netflix capte l'essentiel de la valeur créée par la chaîne. Sa dépendance la plus sensible n'est ni technique ni logistique : c'est la **capacité à attirer les meilleurs créateurs**, dans un marché où ceux-ci ont désormais le choix entre Netflix, le futur ensemble Paramount–Warner Bros., Disney, Amazon, Apple… et YouTube, qui reverse environ 23 Md$ par an à ses créateurs.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Netflix ne publie **qu'un seul segment opérationnel**. Il ne donne **ni EBITDA ni résultat net par région ou par activité**. La ventilation disponible porte sur le chiffre d'affaires par zone géographique ; la rentabilité ne se lit qu'au niveau du groupe. Depuis 2025, le nombre d'abonnés et le revenu moyen par abonné (ARM) ne sont plus publiés.

### Par activité (estimations)

| Activité | 2025 | 2026E | Poids 2026E | Dynamique |
|---|---|---|---|---|
| Abonnements | ~43,7 Md$ | ~48,4 Md$ | ~95 % | Hausse des prix, partage payant, nouveaux membres |
| Publicité | >1,5 Md$ | ~2,7 Md$ | ~5 % | Croissance supérieure à 80 %, mais sous l'objectif de 3 Md$ |
| Autres (jeux, produits dérivés, Netflix House) | marginal | marginal | <1 % | Jugé non significatif par la société |

---

### Par zone géographique — trimestres récents (M$)

| Zone | T3 2025 | T4 2025 | T1 2026 | T2 2026 | T3 2026 | Croiss. T3 (hors change) |
|---|---|---|---|---|---|---|
| États-Unis et Canada | 5 072 | 5 339 | 5 245 | 5 432 | 5 628 | +11 % (+11 %) |
| Europe, Moyen-Orient, Afrique | 3 699 | 3 873 | 3 998 | 4 034 | 4 107 | +11 % (+9 %) |
| Amérique latine | 1 371 | 1 418 | 1 497 | 1 584 | 1 603 | +17 % (+12 %) |
| Asie-Pacifique | 1 369 | 1 421 | 1 509 | 1 510 | 1 537 | +12 % (+15 %) |
| **Total** | **11 510** | **12 051** | **12 250** | **12 560** | **12 874** | **+11,8 % (+11 %)** |

### Par zone géographique — sur cinq ans (Md$)

| Zone | 2021 | 2022 | 2023 | 2024 | 2025 | Poids 2025 |
|---|---|---|---|---|---|---|
| États-Unis et Canada | 13,0 | 14,1 | 14,9 | 17,4 | 20,0 | 44 % |
| Europe, Moyen-Orient, Afrique | 9,7 | 9,7 | 10,6 | 12,4 | 14,5 | 32 % |
| Amérique latine | 3,6 | 4,1 | 4,4 | 4,8 | 5,4 | 12 % |
| Asie-Pacifique | 3,3 | 3,6 | 3,8 | 4,4 | 5,4 | 12 % |

**Lecture** : les deux zones matures (États-Unis-Canada et Europe) pèsent **76 % du chiffre d'affaires** et ralentissent le plus nettement : **+18 % fin 2025, +11 % au T3 2026**. L'**Asie-Pacifique** reste la zone la plus dynamique hors effet de change (+15 %), portée par l'**Inde** (+18 % hors change au T3, meilleur trimestre de recrutement de son histoire dans le pays). L'Amérique latine bénéficie d'un effet de change favorable (+17 % publié, +12 % hors change).

---

### Rentabilité du groupe (seul niveau publié)

| Indicateur | 2021 | 2022 | 2023 | 2024 | 2025 | 12 mois au T3 2026 |
|---|---|---|---|---|---|---|
| Chiffre d'affaires (Md$) | 29,7 | 31,6 | 33,7 | 39,0 | 45,2 | 49,7 |
| Résultat opérationnel (Md$) | 6,2 | 5,6 | 7,0 | 10,4 | 13,3 | 15,6 |
| Marge opérationnelle | 20,9 % | 17,8 % | 20,6 % | 26,7 % | 29,5 % | 31,3 % |
| EBITDA approché (Md$) | ~6,4 | ~5,9 | ~7,3 | ~10,8 | ~13,7 | ~16,0 |
| Résultat net (Md$) | 5,1 | 4,5 | 5,4 | 8,7 | 11,0 | 14,8¹ |
| BPA dilué ($, après division par 10) | 1,12 | 0,99 | 1,20 | 1,98 | 2,53 | 3,46¹ |

*¹ Inclut l'indemnité de rupture de 2,8 Md$ versée par Paramount au T1 2026 (environ 2,26 Md$ après impôt, soit ~0,53 $ par action). Hors cet élément, le BPA sur 12 mois est d'environ 2,93 $. L'EBITDA approché ajoute au résultat opérationnel l'amortissement des immobilisations corporelles ; l'amortissement des contenus reste, à juste titre, une charge d'exploitation.*

---

### Pourquoi les marges montent

- **Discipline sur les contenus** : l'amortissement des contenus est passé de **44,4 % du chiffre d'affaires en 2022 à 35,8 %** sur les douze derniers mois. Les dépenses progressent d'environ 10 % par an quand le chiffre d'affaires en gagne 13 à 16 %
- **Levier sur une base fixe** : un programme coûte le même prix quel que soit le nombre de spectateurs ; chaque nouvel abonné ou chaque hausse de prix tombe en grande partie dans la marge
- **Publicité** : revenu additionnel sur une audience déjà payée
- **Effet de change** : 56 % du chiffre d'affaires 2025 était libellé hors dollar, contre seulement 31 % des charges ; un dollar faible gonfle la marge publiée, un dollar fort la comprime

**Conclusion** : la croissance se déplace des volumes (nouveaux abonnés) vers la **monétisation** (prix, publicité), surtout dans les pays matures ; les marchés émergents (Inde, Asie) restent le relais de croissance en volume.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. Économies d'échelle sur les contenus — le fossé principal
Netflix dépense environ **20 Md$ en contenus en 2026** et les amortit sur plus de 325 millions d'abonnements. Un concurrent qui voudrait offrir un catalogue comparable devrait engager des sommes équivalentes avec une base d'abonnés plus petite, donc un coût par abonné bien supérieur. C'est ce qui explique l'écart de rentabilité : **marge opérationnelle de 31 % pour Netflix**, contre environ 5 % pour l'activité streaming de Disney en 2025, 3 % pour Paramount+ et une perte pour Peacock. Netflix est le **seul acteur du streaming payant à gagner beaucoup d'argent**.

### 2. Distribution mondiale et contenus locaux
Netflix produit dans plus de 50 pays et fait voyager ses succès : *Squid Game* (Corée), *La Casa de Papel* (Espagne), *Lupin* (France), *Adolescence* (Royaume-Uni). Plus d'un tiers du visionnage concerne des programmes non anglophones. Aucun concurrent n'a une telle machine de production locale à vocation mondiale ; c'est aussi un argument décisif auprès des créateurs étrangers.

### 3. Données, produit et technologie
Vingt ans de données de visionnage alimentent la recommandation, la planification des investissements et désormais le ciblage publicitaire. Le réseau propre **Open Connect**, la nouvelle interface TV et la régie publicitaire interne (construite en un temps record selon la direction) renforcent l'expérience et réduisent les coûts.

### 4. Marque et pouvoir de prix
Netflix est la marque de référence du streaming. Les **hausses de prix de 2026** (États-Unis, Mexique, Espagne…) ont été absorbées comme les précédentes, et **le taux de résiliation s'est amélioré sur un an**, au niveau mondial comme aux États-Unis. C'est la meilleure preuve que la valeur perçue tient, même si le temps passé progresse peu.

### 5. Coûts de changement — FAIBLES
C'est la limite du modèle : un abonnement se résilie en deux clics. La fidélité doit être **regagnée chaque mois** par la qualité du catalogue. Netflix y parvient mieux que ses concurrents (taux de résiliation parmi les plus bas du secteur), mais rien n'est verrouillé.

## Positionnement face à la concurrence

| Critère | Netflix | YouTube | Disney+ / Hulu | Prime Video | Paramount+ / HBO Max |
|---|---|---|---|---|---|
| Modèle | Abonnement + pub | Pub + créateurs | Abonnement + pub | Inclus dans Prime | Abonnement + pub |
| Part du temps TV aux États-Unis (été 2026) | ~7,8 % | ~14,2 % | ~4-5 % | ~3-4 % | ~2-3 % |
| Rentabilité du streaming | ~31 % (groupe) | Non publiée | ~5 % (2025) | Non publiée | ~3 % (Paramount+) |
| Contenus originaux premium | Très élevés | Faibles (créateurs) | Très élevés (franchises) | Élevés | Élevés (HBO) |
| Portée internationale | 190+ pays | Mondiale | Large | Large | En construction |

## Pouvoir de négociation

- **Vis-à-vis des abonnés** : **élevé mais pas illimité**. Hausses de prix régulières acceptées ; en contrepartie, toute baisse de valeur perçue se traduit vite en résiliations
- **Vis-à-vis des studios et producteurs** : **élevé** — premier acheteur mondial de programmes, capable de signer des accords de première fenêtre (Sony) ou d'attirer Disney comme fournisseur de licences
- **Vis-à-vis des talents** : **en recul**. Les créateurs ont désormais le choix, et le départ de la directrice des contenus en octobre 2026 a été justifié par la nécessité de mieux gérer ces relations. YouTube rémunère ses créateurs à hauteur d'environ 23 Md$ par an, davantage que le budget de contenus de Netflix
- **Vis-à-vis des ligues sportives** : **faible** — les droits sportifs sont rares et inflationnistes ; Netflix choisit des événements ponctuels plutôt que des saisons complètes
- **Vis-à-vis des fabricants d'appareils et des opérateurs** : **équilibré à favorable** — Netflix est une application incontournable, souvent dotée d'un bouton dédié sur la télécommande

> **En résumé** : le fossé de Netflix est **financier et industriel** (échelle, production mondiale, technologie). Il protège très bien les marges contre les autres plateformes payantes. Il protège moins bien contre **YouTube**, qui ne se bat pas sur le même modèle : sa matière première est gratuite (vidéos de créateurs) et il gagne la bataille du temps passé.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Streaming, médias et plateformes vidéo (octobre 2026)

| Société | Code Bloomberg | Cap. boursière | VE / CA | VE / EBIT | P/E | Rdt div. | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|
| **Netflix** | **NFLX US** | **~270 Md$** | **~5,5x** | **~17,7x** | **~19x publié · ~18x futur** | **0 %** | **~33 %** |
| Walt Disney | DIS US | ~180 Md$ | ~2,2x | ~12x | ~22x publié · ~14x futur | ~1,5 % | ~5 % |
| Alphabet (YouTube) | GOOGL US | ~4 100 Md$ | ~9x | ~27x | ~17x publié | ~0,3 % | ~28 % |
| Comcast (Peacock) | CMCSA US | ~77 Md$ | ~1,4x | ~9x | ~7x publié | ~5-6 % | ~17 % |
| Spotify | SPOT US | ~100 Md$ | ~4,4x | ~30x | ~33x publié · ~29x futur | 0 % | ~8 % |
| Roku | ROKU US | ~23 Md$ | ~3,9x | n.s. | ~110x publié · ~39x futur | 0 % | négatif |
| Paramount Skydance | PSKY US | ~11 Md$ | ~1x | n.s. | n.s. (perte) | ~1-2 % | n.s. |

*Ordres de grandeur établis à partir des cours du 29 septembre au 20 octobre 2026 et des derniers comptes publiés. Netflix est valorisé au cours de ~65 $ (après la publication du 20 octobre). n.s. = non significatif (bénéfices négatifs ou quasi nuls). À affiner avec un terminal de données avant toute décision.*

---

### Analyse comparative

**Netflix — Une qualité de premier rang, désormais au prix du marché**
Netflix combine la **deuxième marge opérationnelle du panel** (31 %, derrière Alphabet à 33 %) avec la croissance la plus forte des groupes de médias (+12 à +16 %, quand Disney, Comcast ou Paramount croissent de 0 à 6 %). Pourtant, après une chute de 45 % depuis son plus haut, le titre ne se paie plus qu'**environ 18 fois les bénéfices attendus**, à peine plus que la médiane du panel et deux fois moins qu'à fin 2024 (45 fois les bénéfices). Son rendement des capitaux propres sur cinq ans (~33 %, 43 % en 2025) est le meilleur du groupe.

**YouTube (Alphabet) — Le concurrent que tout le monde regarde**
YouTube n'est pas un « pair » boursier (il pèse une fraction d'Alphabet), mais c'est le **concurrent n° 1 pour le temps d'écran** : 14,2 % du temps passé devant la télévision aux États-Unis en juillet 2026, contre environ 7,8 % pour Netflix. Les dégradations d'analystes de septembre 2026 (Wells Fargo, HSBC) reposent précisément sur cet écart.

**Disney — Le comparatif de valorisation**
Disney se paie environ 14 fois ses bénéfices futurs, mais avec une croissance de 5 à 6 % et une activité streaming dont la marge vient seulement de dépasser 10 %. La décote de Disney rappelle ce que le marché paie pour un groupe de médias diversifié et mature ; la prime résiduelle de Netflix rémunère sa supériorité opérationnelle.

**Paramount Skydance–Warner Bros. Discovery — Le futur rival consolidé**
Le rachat de Warner Bros. Discovery par Paramount Skydance (environ 110 Md$, dette comprise), après que Netflix s'est retiré des enchères en février 2026, va créer un concurrent doté de HBO, de Warner Bros., de CNN, de Paramount+ et de vastes catalogues, mais lourdement endetté (plus de 44 Md$ d'obligations levées pour l'opération) et faiblement rentable.

**Spotify et Roku — Les références « plateformes »**
Spotify (29 fois les bénéfices futurs, croissance comparable, marge deux fois plus faible) montre qu'un modèle d'abonnement mondial peut se payer bien plus cher que Netflix aujourd'hui. Roku, distributeur d'audience, reste valorisé sur ses espoirs publicitaires.

---

### Le ratio qui compte : marge opérationnelle et rendement des rachats
À ~270 Md$ de capitalisation et avec **22,3 Md$ d'autorisation de rachat** restante (environ 8 % du capital), Netflix est le seul acteur du secteur capable de **rendre 4 à 5 % de sa capitalisation par an** à ses actionnaires sans s'endetter, tout en investissant 20 Md$ dans ses programmes.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T3 2026 (publiés le 20 octobre 2026)

### Chiffre d'affaires et bénéfices face aux attentes

| Indicateur | T3 2026 | Prévision Netflix | Consensus | T3 2025 | Écart |
|---|---|---|---|---|---|
| Chiffre d'affaires | 12 874 M$ | 12 860 M$ | 12 870 M$ | 11 510 M$ | **En ligne** (+11,8 % a/a) |
| Résultat opérationnel | 4 459 M$ | 4 268 M$ | — | 3 248 M$ | **+4,5 % vs prévision** (+37 % a/a) |
| Marge opérationnelle | 34,6 % | 33,2 % | 33,2 % | 28,2 % | **+1,4 pt vs prévision** |
| Résultat net | 3 664 M$ | 3 452 M$ | — | 2 547 M$ | +44 % a/a |
| BPA dilué | 0,87 $ | 0,82 $ | 0,82 $ | 0,59 $ | **+6 % vs consensus** (+49 % a/a) |
| Flux de trésorerie disponible | 2 884 M$ | — | — | 2 660 M$ | +8 % a/a |

**Lecture** : un trimestre **conforme sur le chiffre d'affaires et meilleur que prévu sur les bénéfices**, mais la direction attribue elle-même l'avance de marge **au calendrier des dépenses** plutôt qu'à une surperformance durable. Attention à la base de comparaison : le T3 2025 supportait une charge fiscale exceptionnelle de 619 M$ au Brésil ; hors cet élément, la marge du T3 2025 aurait été d'environ 33,6 %, et la progression réelle est donc d'**environ +1 point**, non de +6,4 points.

---

### Facteurs par zone

- **États-Unis et Canada** : 5 628 M$ (+11 %), soutenus par les hausses de prix de 2026 ; la direction reconnaît toutefois que la zone **croît moins vite qu'elle le pourrait**
- **Europe, Moyen-Orient, Afrique** : 4 107 M$ (+11 %, +9 % hors change) — **nette décélération** (+18 % un an plus tôt)
- **Amérique latine** : 1 603 M$ (+17 %, +12 % hors change)
- **Asie-Pacifique** : 1 537 M$ (+12 %, **+15 % hors change**), meilleure dynamique du groupe ; Inde : +18 % hors change et heures de visionnage +24 %
- **Publicité** : croissance supérieure à 80 % sur 2026, mais **objectif annuel abaissé**

**Ralentissement notable** : la croissance du chiffre d'affaires recule pour le **quatrième trimestre consécutif** (17,6 % → 16,2 % → 13,4 % → 11,8 %), au plus bas depuis trois ans, et la prévision du T4 (+11,5 %) prolonge la tendance.

---

### Évolution des marges

- **Marge brute** : 52,8 %, contre 46,4 % au T3 2025 (environ 51,8 % hors charge brésilienne) — l'amortissement des contenus progresse moins vite que le chiffre d'affaires
- **Charges commerciales** : 837 M$ (+6 %), **technologie et développement** : 1 033 M$ (+21 %, investissements dans la publicité et le produit), **frais généraux** : 466 M$ (+2 %)
- **Marge opérationnelle** : 34,6 %, record trimestriel, mais **le T4 sera à 26,0 %** (dont environ 1,2 point lié à la suppression d'environ 1 000 postes, 6 % des effectifs)

---

### Prévisions et perspectives

| Élément | Nouvelle prévision | Prévision précédente | Commentaire |
|---|---|---|---|
| CA du T4 2026 | 13 442 M$ (+11,5 %) | — | Consensus à 13 510 M$ : **légèrement inférieur** |
| Marge opé. du T4 2026 | 26,0 % | — | Contre 24,5 % au T4 2025 |
| BPA du T4 2026 | 0,67 $ | — | Résultat net prévu de 2 787 M$ |
| CA 2026 | 51,1 Md$ (+13 %) | 51,0-51,4 Md$ | **0,2 % sous le milieu de la fourchette** |
| Marge opé. 2026 | 31,5 % | 31,5 % | Maintenue, malgré 0,3 point de coûts de restructuration |
| Publicité 2026 | ~2,7 Md$ | ~3,0 Md$ | **Abaissée** : retard de certains produits publicitaires |
| FCF 2026 | ~12,0 Md$ | ~12,5 Md$ | Abaissé à cause d'une **transaction immobilière** au T4 |

**Changement de ton** : pour la première fois, la direction admet un **besoin de « meilleure exécution » aux États-Unis** et un **retard sur ses objectifs publicitaires**. Le message reste toutefois que la stratégie ne change pas.

---

### Bilan et flux de trésorerie

- **Trésorerie** : 8,2 Md$ ; **dette brute** : 15,3 Md$ (+1 Md$ sur le trimestre : émission obligataire de 1 Md$ pour rembourser l'échéance de novembre) ; **dette nette** : ~7,1 Md$, soit **environ 0,4 fois l'EBITDA**
- **Rachats d'actions record** : **4,8 Md$** au T3 (63,9 millions d'actions, environ 75 $ en moyenne), après 4,7 Md$ au T2 ; **22,3 Md$** d'autorisation restante
- **Nombre d'actions dilué** : 4 195 millions, en baisse de **3,3 % sur un an**
- **Pas de stocks ni de créances significatifs** (modèle prépayé) ; le point à suivre est le **ratio dépenses de contenus en numéraire / amortissement** (~1,1x attendu en 2026)

---

### Réaction du marché

Le titre a clôturé à **68,69 $** le 20 octobre, puis a reculé d'environ **5,5 % après la publication**, vers **65 $**, sous son plus bas annuel de juillet (65,08 $). Il a perdu **plus de 25 % depuis janvier** et environ **45 % depuis son plus haut d'octobre 2025**.

**Ce que cela indique** : le marché avait intégré un bon trimestre ; il juge désormais Netflix sur sa **trajectoire de croissance** et sur l'**engagement** des abonnés, pas sur ses marges. C'est la **quatrième publication consécutive suivie d'une baisse** (octobre 2025, avril, juillet, octobre 2026), malgré des bénéfices supérieurs aux attentes à chaque fois.

**Éléments inhabituels** : plus grand plan de suppression d'emplois de l'histoire du groupe, remplacement de la directrice des contenus une semaine avant la publication, abaissement de l'objectif publicitaire, transaction immobilière non détaillée pesant sur le FCF, et absence de chiffre global d'heures de visionnage pour le trimestre.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours de la direction

Netflix ne tient pas de conférence téléphonique classique : la lettre aux actionnaires est suivie d'un **entretien vidéo** où les co-directeurs généraux **Ted Sarandos** et **Greg Peters**, le directeur financier **Spencer Neumann** et **Spencer Wang** (finance et marchés) répondent aux questions des analystes.

### Évolution du ton sur cinq publications

**Octobre 2025 (T3 2025) — Confiance, malgré un accident fiscal** : la charge brésilienne de 619 M$ est présentée comme ponctuelle ; la direction met en avant le meilleur trimestre publicitaire de son histoire et une division d'action par dix. Ton serein.

**Janvier 2026 (T4 2025) — Offensive** : Netflix défend son projet de rachat des studios Warner Bros. et de HBO Max (82,7 Md$ de valeur d'entreprise), passé en paiement 100 % numéraire. La direction affirme jouer « l'attaque, pas la défense ». Prévisions 2026 ambitieuses : chiffre d'affaires de +12 à +14 %, doublement de la publicité, 20 Md$ de contenus.

**Avril 2026 (T1 2026) — Discipline affichée** : retrait des enchères face à Paramount ; la direction explique que Warner Bros. aurait été un accélérateur, mais **seulement au bon prix**, et que le groupe repart avec **2,8 Md$ d'indemnité « en poche »**. Engagement record annoncé. Mais la prévision du T2, inférieure au consensus, et l'annonce du départ de Reed Hastings du conseil font chuter le titre d'environ 10 %. Nouveau programme de rachat de 25 Md$ quelques jours plus tard.

**Juillet 2026 (T2 2026) — Défensif sur l'engagement** : la direction insiste sur le fait que **toutes les heures ne se valent pas** (qualité, variété, quantité), annonce une publication **moins fréquente** de ses données détaillées de visionnage et resserre sa fourchette de chiffre d'affaires. Ted Sarandos affirme ne voir aucune dégradation de l'audience des deuxièmes saisons.

**Octobre 2026 (T3 2026) — L'aveu** : la semaine la plus mouvementée depuis 2022 (1 000 suppressions de postes, remplacement de Bela Bajaria par Peter Rice). Ted Sarandos juge que la stratégie n'a pas besoin d'être revue en profondeur, mais reconnaît qu'il faut **une meilleure exécution aux États-Unis**. Greg Peters admet que la publicité est **un peu en retard sur un objectif ambitieux**, tout en restant en croissance de plus de 80 %.

---

### Priorités répétées de la direction

**1. Plus de valeur pour les abonnés** — Programmes originaux d'abord, complétés par des licences (Sony, Disney, TF1), du direct (NFL, boxe) et de nouveaux formats (podcasts vidéo, jeux). Environ 95 % des dépenses restent consacrées au cœur de l'offre.

**2. La technologie au service du produit** — Nouvelle interface TV, recherche conversationnelle et vocale, IA générative en production (environ 300 titres), régie publicitaire interne.

**3. La monétisation** — Hausses de prix dans les marchés matures, extension de l'offre avec publicité à **15 nouveaux pays en 2027** (dès mars : neuf pays d'Europe, Colombie, Pérou, Nouvelle-Zélande), croissance en volume dans les marchés émergents.

**4. L'allocation du capital** — Réinvestir d'abord, garder un bilan solide, puis rendre l'excédent par des rachats d'actions (record de 4,8 Md$ au T3).

---

### Analyse du sentiment

| Publication | Ton | Thème dominant | Réaction du titre |
|---|---|---|---|
| T3 2025 | Serein | Charge fiscale ponctuelle | Environ −10 % |
| T4 2025 | Offensif | Rachat de Warner Bros. | Environ −7 % |
| T1 2026 | Discipliné | Retrait de l'opération, indemnité | Environ −10 % |
| T2 2026 | Défensif | « Toutes les heures ne se valent pas » | Environ −8 à −11 % |
| T3 2026 | Autocritique | Exécution aux États-Unis, publicité en retard | Environ −5,5 % après Bourse |

- **Confiance** : intacte sur le modèle économique, en recul sur l'exécution. Le passage du registre de la conquête (Warner Bros.) à celui de l'autocritique s'est fait en **neuf mois**
- **Transparence** : **en diminution** — fin de la publication des abonnés et de l'ARM (2025), données d'engagement moins fréquentes (2026), aucun chiffre global d'heures vues au T3 2026
- **Cohérence** : forte sur les objectifs financiers (marge de 31,5 % tenue toute l'année), plus faible sur la stratégie (rachat géant annoncé puis abandonné)

> **À lire entre les lignes** : la direction défend un indicateur (la valeur perçue, mesurée par l'acceptation des hausses de prix et la baisse des résiliations) quand le marché en regarde un autre (les heures de visionnage). Tant que les prix passent et que les marges montent, les deux lectures peuvent coexister. Si le taux de résiliation remonte après une hausse de prix, la thèse de la direction perdrait son principal argument.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### Ted Sarandos — Co-directeur général
**Bilan** : arrivé en **2000** pour gérer les achats de DVD, il est l'architecte de la stratégie de contenus de Netflix : premières séries originales (*House of Cards*, 2013), production locale dans plus de 50 pays, succès mondiaux (*Squid Game*, *Stranger Things*, *Wednesday*, *KPop Demon Hunters*). Co-directeur général depuis **juillet 2020**. Sous sa responsabilité, Netflix est passé d'un distributeur de catalogues à **premier studio mondial** par le volume de production.

### Greg Peters — Co-directeur général
**Bilan** : arrivé en **2008**, successivement responsable des partenariats appareils, directeur produit, directeur des opérations, puis co-directeur général depuis **janvier 2023**. Il a piloté les trois grands leviers de monétisation récents : **offre avec publicité** (fin 2022), **partage de compte payant** (2023, plusieurs dizaines de millions d'abonnés supplémentaires) et **régie publicitaire interne** (2025). C'est le profil « ingénieur-opérationnel » du binôme.

### Spencer Neumann — Directeur financier
**Bilan** : en poste depuis **2019** (ancien directeur financier d'Activision Blizzard, passé par Disney). Il a fait passer Netflix d'une consommation de trésorerie (FCF négatif en 2019) à **9,5 Md$ de FCF en 2025**, obtenu la notation « investment grade » et installé une politique de rachats d'actions massive.

### Peter Rice — Directeur des contenus (à partir du 26 octobre 2026)
Ancien président de Fox Searchlight (*Slumdog Millionaire*), puis des chaînes Fox et du pôle divertissement de Disney (jusqu'en 2022). Choisi pour sa capacité à **produire à grande échelle** et sa **réputation auprès des talents**. Il remplace **Bela Bajaria**, en poste depuis 2023 et arrivée en 2016. Le responsable du cinéma, Dan Lin, pourrait également partir selon la presse spécialisée.

### Conseil d'administration
**Jay Hoag** (fondateur du fonds TCV, administrateur depuis 1999) préside le conseil depuis juin 2026, après le **départ du fondateur Reed Hastings**. En 2025, M. Hoag n'avait recueilli que 21,6 % des voix (absences en 2024) ; il a été réélu avec 93,1 % en 2026.

---

### Ancienneté et alignement

| Dirigeant | Dans le groupe depuis | Dans la fonction depuis | Rémunération 2025 | Ventes d'actions (12 mois à sept. 2026) |
|---|---|---|---|---|
| Ted Sarandos | 2000 | 2020 | 53,9 M$ | 14,4 M$ |
| Greg Peters | 2008 | 2023 | 53,2 M$ | 17,7 M$ |
| Spencer Neumann | 2019 | 2019 | — | 17,0 M$ |
| Reed Hastings (ex-président) | 1997 | Parti en juin 2026 | — | 308,9 M$ |

Les dirigeants détiennent des participations significatives (options et actions accumulées depuis des décennies), mais **aucun achat d'actions sur le marché** n'a été déclaré sur les douze derniers mois, contre **402,5 M$ de ventes** d'initiés (95 % dans le cadre de plans programmés de type 10b5-1). La rémunération est très majoritairement en actions (41,4 M$ pour chaque co-directeur général), ce qui aligne leurs intérêts sur le cours.

---

### Historique de l'allocation du capital

| Indicateur | 2021 | 2022 | 2023 | 2024 | 2025 | 12 mois |
|---|---|---|---|---|---|---|
| ROE | 32,3 % | 24,5 % | 26,1 % | 38,4 % | 42,8 % | 49,5 %¹ |
| ROIC (après impôt) | 17,4 % | 13,7 % | 17,3 % | 22,6 % | 28,0 % | 26,7 % |
| Rachats / FCF | n.s. | 0 % | 87 % | 90 % | 96 % | 89 % |
| Actions en circulation (Md) | 4,44 | 4,45 | 4,33 | 4,28 | 4,22 | ~4,10 |

*¹ Gonflé par l'indemnité Warner Bros. de 2,8 Md$.*

**Lecture** : la rentabilité des capitaux investis a **plus que doublé en cinq ans**, la dette nette a fondu et le nombre d'actions baisse régulièrement. La tentative de rachat de Warner Bros. (82,7 Md$) a été le seul écart à la doctrine historique (« construire plutôt qu'acheter ») ; elle s'est conclue par un **retrait discipliné et un gain de 2,8 Md$**. Point de vigilance : les rachats du T2 2026 se sont faits à environ 88 $ par action, **35 % au-dessus du cours actuel**.

---

### Signaux d'alerte

- **Rémunérations élevées** : plus de 53 M$ par co-directeur général, ratio d'équité de 255 pour 1 ; le soutien au vote consultatif sur les rémunérations recule (83,7 % en 2026)
- **Instabilité de l'équipe des contenus** : départ de la directrice des contenus et plus important plan de suppression de postes de l'histoire du groupe en une même semaine
- **Changement de cap stratégique** : de « nous ne faisons pas d'acquisitions » au projet Warner Bros., puis retour en arrière en trois mois
- **Gouvernance** : président historiquement contesté pour son assiduité ; une résolution d'actionnaires sur le droit d'agir par consentement écrit a recueilli 44,6 % des voix
- **Pas de transactions significatives avec des parties liées** identifiées

### Fondateur ou gestionnaires professionnels ?
Depuis le départ de Reed Hastings du conseil en juin 2026, Netflix est dirigé par des **gestionnaires professionnels issus du sérail** (25 ans de maison pour Sarandos, 18 pour Peters). C'est un atout de continuité et de connaissance du métier, à ce stade de maturité où la priorité est la **monétisation** plutôt que l'invention. Le risque est inverse : une équipe trop attachée au modèle qui a réussi, au moment où la bataille se déplace vers le **temps d'écran** face à YouTube.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Les facteurs qui ont fait bouger le titre (2021-2026)

*Cours ajustés de la division par dix de novembre 2025. Variations approximatives sur la séance suivant l'événement.*

### Hausses significatives (plus de 5 %)

**Janvier 2021 — +17 %** : plus de 200 millions d'abonnés et annonce que le groupe n'aura plus besoin d'emprunter pour financer ses contenus.

**Octobre 2022 — +13 %** : retour à la croissance des abonnés après la crise du premier semestre ; lancement de l'offre avec publicité.

**Janvier 2023 — +8 %** : bon trimestre ; Reed Hastings cède la direction générale à Ted Sarandos et Greg Peters.

**Octobre 2023 — +16 %** : 8,8 millions de nouveaux abonnés, premiers effets du partage de compte payant, hausses de prix.

**Janvier 2024 — +11 %** : 13,1 millions de nouveaux abonnés ; accord à 5 Md$ sur dix ans avec la WWE.

**Octobre 2024 — +11 %** et **janvier 2025 — +10 %** : record de 19 millions d'abonnés supplémentaires au T4 2024, hausses de prix, marges en forte progression. Le titre atteint son **plus haut historique le 30 juin 2025 (environ 134 $)**.

**Fin février 2026 — rebond de plus de 10 % sur quelques séances** : Netflix renonce à Warner Bros. et encaisse 2,8 Md$ d'indemnité ; le marché salue l'abandon d'une acquisition jugée risquée.

**Août 2026 — +13 % sur le mois** : rebond depuis le plus bas de juillet, sur la valorisation redevenue raisonnable (environ 20 fois les bénéfices futurs).

---

### Baisses significatives (plus de 5 %)

**Janvier 2022 — −22 %** : prévision d'abonnés très inférieure aux attentes.

**Avril 2022 — −35 %** : **première perte d'abonnés en dix ans** ; le titre perd plus des deux tiers de sa valeur sur l'année 2022.

**Juillet 2023 — −8 %** : chiffre d'affaires inférieur aux attentes malgré le partage payant.

**Avril 2024 — −9 %** : annonce de l'arrêt de la publication du nombre d'abonnés à partir de 2025.

**Octobre 2025 — environ −10 %** : charge fiscale de 619 M$ au Brésil, BPA nettement sous le consensus.

**Décembre 2025 – janvier 2026** : l'annonce du rachat de Warner Bros. (5 décembre), la guerre d'enchères avec Paramount et le passage à une offre 100 % numéraire font glisser le titre d'environ 103 $ à 83 $.

**Avril 2026 — environ −10 %** : prévision du T2 inférieure au consensus, pas de relèvement annuel, départ annoncé de Reed Hastings.

**Juillet 2026 — environ −8 à −11 %** : chiffre d'affaires du T2 légèrement manqué, fourchette annuelle resserrée, données d'engagement moins fréquentes ; plus bas annuel à 65,08 $.

**Septembre 2026 — −14 % sur le mois** : dégradations de Wells Fargo (sous-pondérer, objectif 57 $) puis de HSBC (conserver, 76 $) sur la faiblesse de l'engagement et la concurrence de YouTube.

**20 octobre 2026 — environ −5,5 % après Bourse** : objectif publicitaire abaissé, prévision du T4 sous le consensus, réorganisation de l'équipe des contenus.

---

### Facteurs structurels

- **La croissance des abonnés, puis de l'engagement** : jusqu'en 2024, le titre suivait le nombre d'abonnés ; depuis qu'il n'est plus publié, le marché suit le **temps passé** (données Nielsen, rapports semestriels de visionnage) et la croissance du chiffre d'affaires
- **La prime de croissance** : le titre est passé de 45 fois les bénéfices fin 2024 à environ 18 fois aujourd'hui ; c'est la **compression du multiple**, non la baisse des bénéfices (en hausse de plus de 40 % sur deux ans), qui explique la chute
- **Les publications trimestrielles** : le titre bouge en moyenne de 8 à 10 % après chaque publication ; le marché sanctionne systématiquement les prévisions jugées prudentes
- **Les opérations stratégiques** : l'épisode Warner Bros. a montré que le marché ne veut pas d'un Netflix acquéreur endetté
- **La position technique** : le titre évolue sous son plus bas de juillet après la publication du 20 octobre ; il n'y a plus de support évident sur un an, le prochain repère étant la zone de 62-63 $`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Point de départ
- **2025 (réalisé)** : BPA dilué de **2,53 $** (2,67 $ hors charge fiscale brésilienne)
- **9 mois 2026 (réalisé)** : 2,90 $, dont environ **0,53 $ d'indemnité Warner Bros.** non récurrente
- **T4 2026 (prévision Netflix)** : 0,67 $

### Hypothèses de modélisation

**Croissance du secteur** : le streaming représente déjà 49 % du temps passé devant la télévision aux États-Unis ; la bascule depuis la télévision linéaire se poursuit, mais au profit de YouTube autant que des services payants. Hypothèse : marché du streaming payant en croissance de 6 à 8 % par an en valeur.

**Gains de parts de marché** : surtout dans les pays émergents (Inde, Asie du Sud-Est, Amérique latine), où Netflix croît encore en volume ; stabilité, voire légère érosion du temps d'écran aux États-Unis.

**Hausses de prix** : effet en année pleine des hausses de 2026, nouvelles hausses tous les 18 à 24 mois dans les pays matures ; contribution estimée de 4 à 5 points de croissance par an.

**Publicité** : de ~2,7 Md$ en 2026 à ~4,3 Md$ en 2027 et ~5,5 Md$ en 2028 (lancement dans 15 nouveaux pays en 2027).

**Pressions sur les coûts** : dépenses de contenus en hausse d'environ 10 % par an, droits sportifs inflationnistes, renégociation des conventions syndicales américaines ; partiellement compensées par les économies de la réorganisation d'octobre 2026.

**Levier opérationnel** : l'amortissement des contenus progresse moins vite que le chiffre d'affaires ; marge opérationnelle de 31,5 % (2026) à **33,5 % (2027)** et **35 % (2028)** dans le scénario central.

**Coûts de financement** : dette entièrement à taux fixe ; charge nette d'intérêts d'environ 0,6 Md$ par an ; refinancement de 1,5 Md$ en mai 2027. Taux d'imposition effectif d'environ 17 %.

**Dilution** : rémunération en actions d'environ 1 % du chiffre d'affaires, plus que compensée par les rachats ; baisse nette du nombre d'actions diluées d'environ 3 % par an.

---

### Scénario central

| Exercice | CA (Md$) | Croissance | Marge opé. | Résultat net (Md$) | Actions diluées (Md) | BPA | P/E à 65 $ |
|---|---|---|---|---|---|---|---|
| 2025 (réalisé) | 45,2 | +16 % | 29,5 % | 11,0 | 4,34 | 2,53 $ | — |
| **2026E** | **51,1** | **+13 %** | **31,5 %** | **~15,1** | **~4,23** | **3,57 $** (3,04 $ hors indemnité) | **~21x** hors indemnité |
| **2027E** | **~56,5** | **~+10,5 %** | **~33,5 %** | **~15,2** | **~4,07** | **~3,70 $** | **~17,6x** |
| **2028E** | **~61,9** | **~+9,5 %** | **~35,0 %** | **~17,5** | **~3,95** | **~4,43 $** | **~14,7x** |

**Croissance annuelle moyenne du BPA récurrent 2026-2028 : environ +21 %.**

### Sensibilité

| Scénario | Hypothèses 2027-2028 | BPA 2027E | BPA 2028E |
|---|---|---|---|
| **Pessimiste** | Croissance 8 % puis 7 %, marge plafonnée à 32-32,5 % (sport, contenus) | ~3,48 $ | ~3,88 $ |
| **Central** | Croissance 10,5 % puis 9,5 %, marge 33,5 % puis 35 % | ~3,70 $ | ~4,43 $ |
| **Optimiste** | Croissance 12 % puis 11,5 % (publicité, prix), marge 34,5 % puis 36,5 % | ~3,91 $ | ~4,79 $ |

**Les juges de paix** : la croissance du chiffre d'affaires guidée pour 2027 (publication de mi-janvier 2027), la marge opérationnelle visée pour 2027 et la trajectoire de la publicité. Un point de croissance en moins en 2027 à coûts inchangés retire environ 0,11 $ au BPA.

**Conclusion** : même le scénario pessimiste fait progresser le BPA récurrent d'environ 13 % par an d'ici 2028. À 65 $, le titre se paie **moins de 15 fois le BPA 2028 du scénario central** : le cours actuel intègre déjà une forte décélération. Le risque n'est donc plus tant une valorisation excessive qu'une **remise en cause durable de la croissance** si l'engagement continuait de s'éroder.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Leviers de création de valeur

**1. Le seul streamer vraiment rentable, et de loin** : 31 % de marge opérationnelle quand ses concurrents payants oscillent entre la perte et 10 %. L'échelle (325 millions d'abonnements, 20 Md$ de contenus) est un avantage qui se renforce avec le temps : chaque dollar de chiffre d'affaires supplémentaire coûte moins cher à produire.

**2. Le pouvoir de prix intact** : les hausses de 2026 sont passées comme les précédentes, et **le taux de résiliation s'améliore**. Aux États-Unis, l'abonné Netflix paie moins par heure regardée que chez la plupart des concurrents : la marge de manœuvre tarifaire reste réelle.

**3. La publicité, un deuxième moteur encore jeune** : ~2,7 Md$ en 2026 (+80 %), soit à peine 5 % du chiffre d'affaires. Avec une régie interne, l'extension à 15 nouveaux pays en 2027 et un revenu par abonné de l'offre avec publicité qui rattrape celui de l'offre standard, la publicité pourrait dépasser 10 % du chiffre d'affaires d'ici 2029.

**4. Les relais de croissance internationaux** : Asie-Pacifique +15 % hors change, Inde +18 % avec des heures de visionnage en hausse de 24 %. Netflix n'a pénétré que moins de 45 % de son marché adressable (foyers équipés du haut débit).

**5. Une machine à racheter ses actions** : 9,5 Md$ de FCF en 2025, ~12 Md$ attendus en 2026, 22,3 Md$ d'autorisation de rachat restante. Au cours actuel, Netflix peut retirer **4 à 5 % de ses actions chaque année**, ce qui amplifie la croissance du BPA.

**6. Un réveil créatif possible** : l'arrivée de Peter Rice, un dirigeant reconnu pour ses relations avec les talents, et une fin d'année chargée (*The Further Mis-Adventures of Cliff Booth* de David Fincher, NFL à Thanksgiving et à Noël, Fury contre Joshua, final d'*Emily in Paris*) peuvent relancer le visionnage américain.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques susceptibles de nuire durablement à l'activité

**1. La bataille du temps d'écran est en train d'être perdue face à YouTube** : 14,2 % du temps TV américain pour YouTube contre environ 7,8 % pour Netflix. Les heures vues ne progressent que de 2 % par an, et Wells Fargo anticipe une baisse de 21 % du visionnage des 100 principaux programmes originaux au second semestre. Si l'engagement continue de reculer, le pouvoir de prix finira par s'épuiser.

**2. La décélération de la croissance** : 17,6 % fin 2025, 11,5 % prévus au T4 2026. Dans les marchés matures (76 % du chiffre d'affaires), Netflix dépend désormais des prix et de la publicité, deux leviers plus fragiles que le recrutement d'abonnés.

**3. L'inflation des coûts de contenus et de sport** : un concurrent consolidé (Paramount–Warner Bros.), Amazon et Apple surenchérissent sur les talents et les droits sportifs ; YouTube reverse environ 23 Md$ par an à ses créateurs. La marge pourrait plafonner autour de 31-32 % au lieu de continuer à monter.

### Analyse pré-mortem
**Hypothèse : Netflix vaut 40 $ dans deux ans.** Scénario : la croissance tombe à 6-7 % dès 2027, la hausse de prix de 2027 provoque une remontée des résiliations, la publicité reste sous les objectifs, la nouvelle équipe des contenus tarde à produire des succès américains, et la marge stagne à 31 %. Le BPA 2027 plafonne vers 3,10 $ et le marché applique un multiple de média mature (13 fois les bénéfices) : 13 × 3,10 $ ≈ 40 $.

### Les multiples actuels sont-ils trop élevés ?
**Non, plus maintenant.** À environ 18 fois les bénéfices futurs, 17,7 fois l'EBIT et un rendement du FCF récurrent d'environ 3,2 %, Netflix se paie à peine plus cher que la médiane de son secteur et **deux fois moins cher qu'il y a deux ans**, pour une rentabilité deux fois supérieure. Le risque de valorisation existe surtout dans le scénario où la croissance tombe sous 7 %.

---

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le marché valorise Netflix comme un média dont l'audience s'érode, alors que **la monnaie de Netflix n'est pas l'heure de visionnage, c'est l'abonnement**. Un foyer peut passer plus de temps sur YouTube tout en continuant à payer Netflix chaque mois ; la preuve en est le taux de résiliation qui baisse malgré les hausses de prix. Tant que cet indicateur tient, la combinaison d'une croissance du chiffre d'affaires d'environ 10 %, d'une marge qui progresse d'un à deux points par an et de rachats d'actions de 4 à 5 % du capital produit une croissance du BPA proche de 20 % par an, pour un titre payé moins de 18 fois ses bénéfices. Le consensus confond un **ralentissement de la croissance** avec une **perte d'avantage concurrentiel**.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Amortissement des contenus — RISQUE MODÉRÉ (le point clé)
Les contenus (33,8 Md$ d'actifs nets au 30 juin 2026, soit **58 % du total du bilan**) sont amortis selon une **méthode accélérée fondée sur les schémas de visionnage estimés** par la direction. C'est l'**estimation comptable la plus importante** du groupe : un amortissement plus lent gonfle mécaniquement la marge.

**Ce qu'on observe** : l'amortissement est passé de 44,4 % du chiffre d'affaires en 2022 à 35,8 % sur douze mois, et la marge a gagné près de 12 points sur la même période. L'explication de la direction (discipline des dépenses, levier d'échelle) est cohérente avec la baisse du ratio « dépenses en numéraire / amortissement » de 1,45x en 2021 à 1,04x en 2025. **Mais** ce ratio remonte à **~1,1x en 2026** (1,13x sur douze mois) : les dépenses en numéraire dépassent de nouveau la charge comptable.

**À surveiller** : toute révision des durées ou des courbes d'amortissement dans les notes annexes du rapport annuel ; l'écart entre dépenses de contenus en numéraire et amortissement.

### Engagements hors bilan — RISQUE MODÉRÉ
Les **obligations de contenus** s'élèvent à **25,1 Md$**, dont **19,6 Md$ hors bilan** (programmes non encore livrés, licences futures, droits sportifs). Ces sommes sont contractuellement dues ; rapportées aux 15,3 Md$ de dette financière, elles **multiplient par plus de deux l'endettement économique** réel.

### Information sectorielle et transparence — RISQUE MODÉRÉ
Netflix publie **un seul segment** et a **cessé de publier** le nombre d'abonnés et le revenu moyen par abonné (2025), puis **réduit la fréquence** de ses rapports détaillés d'engagement (2026). Au T3 2026, aucun chiffre global d'heures vues n'a été donné. Une transparence qui diminue au moment où les indicateurs deviennent moins favorables est un **signal à surveiller**, même s'il est légal et justifié par la direction (focalisation sur le chiffre d'affaires et la marge).

### Comptabilisation des produits — RISQUE FAIBLE
Abonnements prépayés reconnus au fil du mois de service : modèle simple et peu sujet à interprétation. Points secondaires : traitement des **offres groupées avec les opérateurs** (prix d'allocation), comptabilisation **brute ou nette** de la publicité vendue via des plateformes tierces, et **gains ou pertes de couverture de change** intégrés au chiffre d'affaires (perte de 91 M$ en 2025).

### Éléments non récurrents — RISQUE MODÉRÉ
- **Indemnité Warner Bros. de 2,8 Md$** (T1 2026) comptabilisée en « autres produits » : elle gonfle le résultat net (+0,53 $ par action) et le FCF 2026 ; les comparaisons 2027 seront défavorables
- **Litige fiscal brésilien** : charge de 619 M$ au T3 2025 (couvrant 2022-2025), 729 M$ payés au premier semestre 2026
- **Transaction immobilière** au T4 2026, non détaillée, qui réduit le FCF de 0,5 Md$
- **Coûts de restructuration** (environ 1 000 postes) : environ 1,2 point de marge au T4 2026

### Rémunération en actions — RISQUE FAIBLE
Environ **1 % du chiffre d'affaires**, l'un des niveaux les plus bas des grandes valeurs technologiques. La dilution est plus que compensée par les rachats (nombre d'actions −3,3 % sur un an). Les rémunérations individuelles des co-directeurs généraux restent élevées (cf. module Management).

### Goodwill et incorporels — RISQUE FAIBLE
Peu d'acquisitions et un goodwill limité (studios de jeux, effets visuels, une acquisition de 587 M$ en mars 2026). L'abandon de Warner Bros. a évité l'inscription de plusieurs dizaines de milliards de goodwill.

### Contrats de location — RISQUE FAIBLE
Baux de bureaux et de studios de tournage (Los Gatos, Los Angeles, Albuquerque, New Jersey, Madrid, Shepperton). Montants modestes au regard de la taille du groupe, correctement présentés selon les normes américaines.

### Parties liées — RISQUE FAIBLE
Aucune transaction significative identifiée. Le président Jay Hoag est issu d'un fonds (TCV) historiquement actionnaire, sans flux commerciaux notables déclarés.

### Flux de trésorerie vs résultat
- FCF 2025 : 9,5 Md$ pour un résultat net de 11,0 Md$ (conversion d'environ 86 %)
- FCF sur douze mois **hors indemnité** : ~8,6 Md$ pour un résultat net récurrent d'environ 12,5 Md$ (conversion d'environ **70 %**), en baisse en raison de la reprise des dépenses de contenus et des paiements fiscaux au Brésil
- Le taux d'imposition effectif monte (12,6 % en 2024, 17,2 % sur douze mois)

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** Netflix est audité par Ernst & Young (opinion sans réserve, contrôles internes jugés efficaces), n'a pas de dette à taux variable ni de structure complexe. Les deux vrais sujets sont **l'estimation de l'amortissement des contenus**, qui pilote la marge publiée, et la **baisse de la transparence opérationnelle**. Pour 2026, il faut systématiquement **retraiter l'indemnité Warner Bros.** pour lire les bénéfices et le FCF récurrents.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Ted Sarandos et Greg Peters

*Classées par ordre d'importance décroissante.*

### Stratégie et avantage concurrentiel

**1.** YouTube capte près de deux fois plus de temps d'écran télévisuel que Netflix aux États-Unis. **Quel indicateur précis** (part du temps TV, heures par membre, taux de résiliation) devrons-nous voir progresser en 2027 pour conclure que l'écart cesse de se creuser ?

**2.** Vous dites que la stratégie n'a pas besoin de changer mais que l'exécution aux États-Unis doit s'améliorer. **Qu'est-ce qui n'a pas fonctionné**, concrètement, dans la programmation américaine de 2026, et quels engagements de résultat avez-vous fixés à Peter Rice ?

**3.** Vous ne publiez plus le nombre d'abonnés, ni l'ARM, et vous espacez vos rapports d'engagement. **Pourquoi réduire la transparence** au moment où les investisseurs doutent de l'engagement, et accepteriez-vous de publier un indicateur de résiliation ?

**4.** La hausse de prix est votre meilleur argument. **À partir de quel niveau de prix par heure** regardée estimez-vous que l'abonné américain commencera à résilier, et quelle est votre marge de manœuvre aujourd'hui ?

### Allocation du capital

**5.** Vous étiez prêts à payer 82,7 Md$ pour Warner Bros. **Quel prix ou quelle catégorie d'actif** vous ferait revenir sur une grande acquisition, et comment l'articulez-vous avec 22,3 Md$ de rachats d'actions autorisés ?

**6.** Les rachats du T2 2026 se sont faits autour de 88 $, ceux du T3 autour de 75 $ ; le titre est à 65 $. **Quelle règle de valorisation** encadre vos rachats, et envisagez-vous de les accélérer à ce prix ?

**7.** Le ratio « dépenses de contenus en numéraire / amortissement » remonte à 1,1x. **Quelle part de cette hausse** est liée au sport et au direct, et quel ratio visez-vous pour 2027-2028 ?

### Exécution opérationnelle

**8.** La publicité est en retard de 0,3 Md$ sur votre objectif 2026. **Quelles fonctionnalités** n'ont pas été livrées à temps, et quel objectif de revenus publicitaires fixez-vous pour 2027 ?

**9.** Le revenu par membre de l'offre avec publicité rattrape-t-il celui de l'offre standard ? **Dans quels pays** l'a-t-il déjà dépassé ?

**10.** Le direct représente environ 5 % des dépenses de contenus pour 1 % des heures vues. **Comment mesurez-vous son retour sur investissement**, au-delà des pics d'inscription ?

**11.** Après la suppression d'environ 1 000 postes, **quelles économies annuelles** attendez-vous, et seront-elles réinvesties ou laissées dans la marge ?

### Risques

**12.** Les conventions collectives américaines des scénaristes, acteurs et réalisateurs arrivaient à échéance en 2026. **Quel surcoût de production** avez-vous intégré dans vos prévisions de marge ?

**13.** Le futur ensemble Paramount–Warner Bros. va réunir HBO, Warner Bros. et Paramount+. **Quel impact anticipez-vous** sur le coût des talents, la disponibilité des licences et la concurrence pour les droits sportifs ?

**14.** Plus de la moitié de votre chiffre d'affaires est réalisée hors dollar. **Quel serait l'impact sur la marge 2027** d'un dollar plus fort de 10 %, après couverture ?

### Vision et gouvernance

**15.** Après le départ de Reed Hastings et de Bela Bajaria, **quel est le plan de succession** des deux co-directeurs généraux, et quel risque sous-estimez-vous le plus aujourd'hui ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse vendeuse — Démontage de l'argumentaire haussier

### 1. Le modèle économique est menacé par la guerre du temps d'écran

Les optimistes répètent que Netflix vend des abonnements, pas des heures. **C'est vrai à court terme, faux à long terme.** Un abonnement ne se justifie que par l'usage : un foyer qui regarde moins Netflix finit par le résilier ou par refuser la hausse de prix suivante. Or les heures vues progressent de 2 % par an, la part du temps TV américain recule (7,8 % contre 14,2 % pour YouTube) et Wells Fargo anticipe une baisse de 21 % du visionnage des grands programmes originaux. **Le pouvoir de prix est un stock qui se consomme**, et Netflix est en train de le consommer plus vite qu'il ne le reconstitue.

### 2. La concentration des revenus

**95 % du chiffre d'affaires vient des abonnements** et **76 % de deux zones matures** (États-Unis-Canada, Europe), précisément celles qui ralentissent le plus (+11 %). La croissance repose désormais sur les **hausses de prix** dans ces zones. Si une seule hausse de prix américaine provoquait une vague de résiliations, la croissance du premier marché (44 % du chiffre d'affaires) tomberait à un chiffre.

### 3. L'avantage concurrentiel est plus fragile qu'il n'y paraît

L'échelle protège contre Disney ou Paramount, pas contre **YouTube**, dont la matière première est gratuite et qui reverse environ 23 Md$ par an à ses créateurs, davantage que tout le budget de contenus de Netflix. Les créateurs ont le choix : le départ de la directrice des contenus a été justifié par la nécessité de mieux gérer les talents,. **Les coûts de changement sont nuls** : la fidélité dépend entièrement du prochain succès.

### 4. Le concurrent que les optimistes sous-estiment : YouTube

Les optimistes comparent Netflix à Disney+ ou à HBO Max et concluent à sa supériorité. **Mauvais adversaire.** YouTube est numéro un du streaming aux États-Unis depuis trois ans, capte l'audience jeune, entre dans le salon via la télévision connectée, et commence à attirer des formats longs et des créateurs premium. Netflix tente d'imiter ses forces (podcasts vidéo, débauchage de créateurs, formats courts), signe qu'il joue désormais sur le terrain de l'autre.

### 5. La pire allocation du capital : avoir voulu acheter Warner Bros.

Pendant trois mois, la direction a été prête à engager 82,7 Md$, à lever une dette de pont de 59 Md$ et à renoncer à sa doctrine historique. L'abandon s'est bien terminé (2,8 Md$ d'indemnité), mais il révèle une **direction tentée par une acquisition géante** dès que la croissance organique ralentit. Ajoutons des rachats d'actions effectués autour de 88 $ au T2 2026, **35 % au-dessus du cours actuel**.

### 6. Incitations et comptabilité

Pas de fraude identifiée, mais des incitations discutables : plus de **53 M$ de rémunération** par co-directeur général, **402 M$ de ventes d'initiés et zéro achat** en un an, une transparence en recul (abonnés, ARM, engagement), et une marge qui dépend largement d'**hypothèses d'amortissement des contenus** fixées par la direction.

### 7. Les hypothèses que le cours actuel exige

À 65 $, soit environ 18 fois les bénéfices futurs, le marché suppose : une croissance du chiffre d'affaires d'environ 10 % par an jusqu'en 2028, une marge qui monte vers 35 %, une publicité à plus de 5 Md$ en 2028 et **aucune remontée des résiliations** après les prochaines hausses de prix.

### 8. Et si la croissance déçoit de 20 à 30 % ?

Si la croissance du BPA récurrent tombe de ~21 % à 15 % par an, le BPA 2028 serait d'environ 4,00 $ au lieu de 4,43 $. **Avec un multiple compressé à 13-14 fois** (celui d'un média mature), le titre vaudrait **52 à 56 $**, soit 15 à 20 % de baisse. Dans le scénario d'une croissance du chiffre d'affaires ramenée à 5-6 %, le BPA 2028 plafonnerait vers 3,50 $ : à 12 fois, le titre vaudrait **42 $ (−35 %)**.

### Le scénario catastrophe unique
**Une hausse de prix américaine ratée en 2027.** Combinée à un engagement en baisse et à une offensive tarifaire du nouvel ensemble Paramount–Warner Bros., elle provoquerait une remontée durable du taux de résiliation dans le premier marché du groupe. Netflix perdrait alors son principal levier de croissance et devrait choisir entre baisser ses prix ou dépenser davantage en contenus : dans les deux cas, la marge cesserait de progresser. **Plausibilité : 15 à 20 %** à l'horizon de deux ans. Elle reste minoritaire tant que le taux de résiliation continue de baisser.

### Conclusion vendeuse
Netflix est une entreprise exceptionnelle **en train de devenir une entreprise mature**. Le cours a déjà beaucoup corrigé, ce qui limite le potentiel d'une thèse vendeuse agressive. Mais **l'argument d'un titre « bon marché » suppose que l'érosion de l'engagement n'atteindra jamais le pouvoir de prix**. C'est précisément l'hypothèse que personne ne peut encore vérifier, et que la direction rend plus difficile à vérifier en publiant moins d'indicateurs.`,
  },
];

export default { ...meta, modules };
