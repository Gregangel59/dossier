// ============================================================
//  DOSSIER : Meta Platforms, Inc. (META)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "meta",                     // identifiant d'URL : /dossier/meta
  ticker: "META",
  name: "Meta Platforms, Inc.",
  exchange: "Nasdaq",
  sector: "Publicité numérique et intelligence artificielle",
  initials: "META",                 // affiché dans la pastille
  tagline: "La plus grande machine publicitaire du monde (3,64 milliards d'utilisateurs par jour, +26 % de croissance) se transforme en pari géant sur l'IA : 135 à 145 Md$ d'investissements en 2026, un flux de trésorerie devenu négatif et un front judiciaire ouvert.",
  riskScore: 56,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "meta.html",
  // « Les points clés de l'investisseur patient » (HTML déposé dans public/rapports/, ou null si absent) :
  bhReport: "meta-buy-and-hold.html",
  updated: "2026-10",               // période des données
  published: "2026-10-23",          // date exacte de publication
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Meta est le **premier propriétaire mondial de réseaux sociaux et de messageries** : Facebook, Instagram, WhatsApp, Messenger et Threads réunissent **3,64 milliards de personnes chaque jour** (septembre 2026, +3 % sur un an). En 2025, le groupe a réalisé **201,0 Md$ de chiffre d'affaires (+22 %)** pour un résultat opérationnel de **83,3 Md$** (marge de 41 %). Sur les neuf premiers mois de 2026, le chiffre d'affaires atteint **181,7 Md$ (+29 %)** et la direction vise **73 à 76 Md$** au quatrième trimestre, soit environ **256 Md$ sur l'année**.

Le modèle tient en une phrase : **offrir gratuitement des services de communication et de divertissement à des milliards d'utilisateurs, puis vendre leur attention à des annonceurs grâce à un ciblage et une mesure de performance inégalés.**
- **Capter du temps d'écran** : fils d'actualité, vidéos courtes (Reels), messageries ; le temps passé par utilisateur sur Instagram et sur les Reels de Facebook progresse encore de plus de 10 % par an
- **Monétiser par la publicité** : 97,7 % du chiffre d'affaires en 2026 ; la croissance vient à la fois du volume (impressions +10 % au T3 2026) et du prix (+14 %)
- **Réinvestir massivement dans l'IA** : les modèles de recommandation et de ciblage (Andromeda, GEM, Meta Generative Recommender) augmentent l'engagement et le rendement des campagnes ; depuis 2025, Meta construit aussi ses propres modèles d'IA de pointe (gamme **Muse**) et un **agent personnel**, Muse, lancé le 8 septembre 2026

Meta ne vend donc pas un réseau social : il vend **des conversions** (achats, téléchargements, prospects) à plus de 10 millions d'annonceurs, et son véritable actif est la combinaison **audience mondiale + données + algorithmes**.

## Principaux produits et services

**Famille d'applications (Family of Apps, 99,3 % du chiffre d'affaires)**
- **Facebook** (fil, Reels, Groupes, Marketplace) et **Instagram** (fil, Reels, Stories ; environ 2 milliards d'utilisateurs quotidiens) : le cœur de la monétisation publicitaire
- **WhatsApp** et **Messenger** : messageries ; monétisation par la messagerie professionnelle payante, les publicités « clic vers WhatsApp » et désormais la publicité dans l'onglet Actualités
- **Threads** : a dépassé X en utilisateurs mensuels selon Mark Zuckerberg (octobre 2026)
- **Autres revenus** (1,1 Md$ au T3 2026, +59 %) : messagerie WhatsApp payante, abonnements **Meta One** (plus de 15 millions d'abonnements et d'essais), offre Meta Verified

**IA (rattachée à la famille d'applications)**
- **Meta AI** et l'agent **Muse** : plus de 10 millions d'utilisateurs aux États-Unis et au Canada en six semaines ; formule gratuite et abonnements payants
- **Meta Enterprise** : interface de programmation (API) des modèles, **Muse Code**, agents pour les entreprises (Meta Business Agent)

**Reality Labs (0,7 % du chiffre d'affaires, 18 à 19 Md$ de pertes attendues en 2026)**
- Lunettes connectées Ray-Ban Meta, Oakley Meta et Ray-Ban Display (avec EssilorLuxottica), casques Quest, logiciels de réalité virtuelle et mixte

## Clients, fournisseurs, concurrents

**Clients** : les **annonceurs** — des millions de PME (Meta estime à 500 millions le nombre de petites entreprises présentes sur ses applications), des marques mondiales, des plateformes de commerce en ligne et d'applications (notamment chinoises), des agences (WPP, Publicis, Omnicom). Les **utilisateurs** ne paient rien dans l'immense majorité des cas.

**Fournisseurs** : fabricants de puces et de serveurs (**Nvidia**, **AMD** — contrat de 6 GW signé en février 2026 —, **Broadcom** pour les puces maison MTIA, **TSMC** en fonderie), fournisseurs de capacité de calcul (**CoreWeave** pour 35 Md$ de contrats, **Google Cloud**, Oracle), constructeurs et financeurs de centres de données (**Blue Owl** pour Hyperion en Louisiane, **BlackRock** pour El Paso au Texas), électriciens, **EssilorLuxottica** pour les lunettes.

**Concurrents** : **Alphabet** (Google et YouTube) pour les budgets publicitaires et l'IA ; **TikTok** (ByteDance) pour le temps d'écran des jeunes ; **Amazon** (publicité sur les sites marchands) ; **OpenAI** (ChatGPT, agent Dots lancé le 29 septembre 2026) dans la course aux assistants ; Snap, Pinterest, Reddit, X, AppLovin sur des niches ; **Apple** et **Google** comme propriétaires des systèmes d'exploitation mobiles.

## Modalités contractuelles et de paiement

- **Côté annonceurs** : achat principalement **en libre-service et aux enchères** via le Gestionnaire de publicités ; facturation au coût par mille impressions, au clic ou à l'objectif ; paiement par carte bancaire ou prélèvement pour les PME, **crédit à 30-60 jours** pour les grands comptes et les agences. Les créances clients s'élèvent à **22,7 Md$** (30 septembre 2026), soit environ un mois de chiffre d'affaires
- **Pas d'engagement de long terme** : les budgets publicitaires sont ajustables chaque jour, ce qui rend le chiffre d'affaires **sensible au cycle économique** (2022 l'a montré) mais extrêmement réactif aux gains de performance
- **Côté fournisseurs** : contrats pluriannuels de plus en plus lourds — **349 Md$ d'engagements non résiliables** (cloud, matériel) et environ **347 Md$ de baux de centres de données non encore démarrés**, sur des durées allant jusqu'à 30 ans

> **Note de lecture** : Meta est aujourd'hui deux entreprises en une. La première, la publicité, est l'une des plus rentables du monde (marge opérationnelle de la famille d'applications proche de 45 % hors charges juridiques). La seconde, l'IA de pointe et les lunettes, consomme désormais **plus de trésorerie que la première n'en produit** : au T3 2026, les investissements (34,9 Md$) ont dépassé les flux d'exploitation (32,8 Md$) pour la première fois depuis l'introduction en Bourse de 2012.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## La place de Meta dans la chaîne de valeur

Meta occupe la position la plus rentable de la chaîne de la publicité numérique : **le propriétaire de l'audience et des données**. Il n'achète pas de contenus (ce sont les utilisateurs et les créateurs qui les produisent gratuitement), il ne dépend d'aucun intermédiaire pour vendre ses espaces, et il contrôle de plus en plus l'infrastructure technique qui fait tourner ses algorithmes. Sa dépendance majeure se déplace : hier les systèmes d'exploitation d'Apple et de Google, aujourd'hui **la puissance de calcul**.

### Amont — Le calcul, l'énergie et les contenus

**Puces et serveurs** : **Nvidia** (processeurs graphiques Blackwell puis Rubin, accord pluriannuel conclu en février 2026), **AMD** (jusqu'à 6 GW de processeurs Instinct sur cinq ans à partir du second semestre 2026, avec un accélérateur sur mesure), **Broadcom** (conception des puces maison MTIA), **TSMC** (fabrication), **Arista** et **Broadcom** pour le réseau, fabricants de mémoire HBM (**SK Hynix**, **Samsung**, **Micron**), assembleurs de serveurs.

**Capacité de calcul louée** : **CoreWeave** (35 Md$ de contrats jusqu'en 2032), **Google Cloud** (contrat de plus de 10 Md$ sur six ans signé en 2025), **Oracle**, **Nebius** et d'autres fournisseurs spécialisés. Ces achats expliquent la ligne « coûts de jetons d'IA tiers » qui pèse désormais sur les charges.

**Centres de données** : campus **Hyperion** (Louisiane, coentreprise avec **Blue Owl**, environ 27 Md$ de financement obligataire, Meta à 20 %), **Prometheus** (Ohio), **El Paso** (Texas, coentreprise avec **BlackRock**), Alberta au Canada ; énergéticiens et producteurs d'électricité (dont du nucléaire et du gaz naturel) ; promoteurs et entreprises de construction (plus de 20 Md$ versés à des sous-traitants aux États-Unis).

**Talents et modèles** : Meta Superintelligence Labs (dirigé par **Alexandr Wang**, ancien fondateur de **Scale AI**, dont Meta détient 49 % depuis 2025) ; données d'entraînement ; créateurs de contenus (plus de 10 millions référencés dans le Creator Marketing Hub).

**Matériel grand public** : **EssilorLuxottica** (Ray-Ban, Oakley ; Meta en est actionnaire minoritaire), sous-traitants asiatiques pour les casques Quest.

---

### Meta — Le cœur technologique

**Applications** : Facebook, Instagram, WhatsApp, Messenger, Threads, Edits (plus de 50 millions d'utilisateurs actifs), Muse.

**Moteur d'IA** : systèmes de recommandation (classement des Reels, recherche générative), systèmes publicitaires (Andromeda pour la sélection, GEM pour le classement, Meta Generative Recommender), modèles de langage maison (Muse Spark, Muse Wonder), suite d'outils créatifs Advantage+.

**Infrastructure** : plus de 250 Md$ d'immobilisations corporelles nettes, réseaux sous-marins, puces maison MTIA.

---

### Aval — L'accès à l'utilisateur et à l'annonceur

**Distribution des applications** : **Apple** (App Store, iOS) et **Google** (Play Store, Android) — une dépendance qui a coûté environ 10 Md$ de chiffre d'affaires en 2022 lors du changement de règles de suivi publicitaire d'Apple ; opérateurs télécoms ; fabricants de smartphones.

**Annonceurs** : PME du monde entier, grandes marques (biens de consommation, distribution, automobile), commerçants en ligne et éditeurs d'applications (dont des plateformes chinoises comme **Temu** et **Shein**), agences (**WPP**, **Publicis**, **Omnicom**), partenaires de mesure et de commerce (**Shopify**, **Stripe**, **Walmart**, **Plaid** pour Muse ; protocole d'agents personnels avec **Sierra**).

**Paiement** : **Visa**, **Mastercard**, **PayPal**, **Stripe** ; WhatsApp Pay en Inde et au Brésil.

**Utilisateurs** : 3,64 milliards de personnes par jour, dont environ 43 % du chiffre d'affaires réalisé avec les utilisateurs des États-Unis et du Canada.

---

### Schéma de la chaîne de valeur

\`\`\`
AMONT (CALCUL)              META (PLATEFORME)            AVAL (AUDIENCE ET REVENUS)
Nvidia, AMD, Broadcom   →   Centres de données       →   iOS (Apple) / Android (Google)
TSMC, SK Hynix, Micron      (Hyperion, Prometheus,        Opérateurs, smartphones
CoreWeave, Google Cloud,    El Paso) ~140 Md$ en 2026     3,64 Md d'utilisateurs/jour
Oracle, Nebius              Modèles Muse (MSL)            10 M+ annonceurs, 500 M PME
Blue Owl, BlackRock         Recommandation + pub IA  →   Agences (WPP, Publicis…)
(financement)               Facebook, Instagram,          Commerce : Shopify, Stripe,
EssilorLuxottica            WhatsApp, Threads, Muse       Walmart, Plaid (agents)
(lunettes)                  Reality Labs (lunettes)       Paiement : Visa, Mastercard
Créateurs (contenu gratuit)                               Abonnés Meta One / Muse
\`\`\`

**Le pari central** : en possédant l'audience, les données et désormais les modèles d'IA, Meta capte presque toute la valeur publicitaire qu'il crée. Mais il devient, pour la première fois de son histoire, **une entreprise à forte intensité capitalistique** : ses investissements 2026 représentent plus de la moitié de son chiffre d'affaires, et sa dépendance la plus sensible est désormais l'**accès au calcul et à l'électricité**, dans un marché où Alphabet, Microsoft, Amazon et OpenAI se disputent les mêmes puces.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires et de la rentabilité

**Avertissement méthodologique** : Meta publie **deux segments** — la famille d'applications (Family of Apps, FoA) et Reality Labs (RL) — avec leur chiffre d'affaires et leur résultat opérationnel. Il **ne publie ni EBITDA ni résultat net par segment** ; l'EBITDA ci-dessous est approché en ajoutant au résultat opérationnel les dotations aux amortissements, majoritairement portées par la famille d'applications. La ventilation géographique ne porte que sur le chiffre d'affaires (selon la localisation des utilisateurs).

### Par segment — exercices annuels (Md$)

| Segment | 2023 | 2024 | 2025 | 9 mois 2026 | Tendance |
|---|---|---|---|---|---|
| Famille d'applications — CA | 133,0 | 162,4 | 198,8 | 180,4 | +29 % sur 9 mois |
| dont publicité | 131,9 | 160,6 | ~196,2 | 177,4 | +29 % (+27 % hors change) |
| dont autres revenus | ~1,1 | ~1,7 | ~2,6 | 3,0 | +67 %, WhatsApp et abonnements |
| Famille d'applications — résultat opé. | 62,9 | 87,1 | 102,5 | 67,4¹ | ~45 % de marge sur 9 mois hors charges juridiques |
| Reality Labs — CA | 1,9 | 2,1 | 2,2 | 1,3 | Stable : Quest en baisse, lunettes en forte hausse |
| Reality Labs — résultat opé. | −16,1 | −17,7 | −19,2 | −12,8 | 18 à 19 Md$ de pertes en 2026, ~15 Md$ en 2027 |
| **Groupe — résultat opé.** | **46,8** | **69,4** | **83,3** | **54,6¹** | |
| **Groupe — EBITDA approché** | **~57,9** | **~84,9** | **~101,8** | **~74,1** | |
| **Groupe — résultat net** | **39,1** | **62,4** | **60,5²** | **52,5³** | |

*¹ Après 12,3 Md$ de charges juridiques (2,4 Md$ au T2, 9,89 Md$ au T3) et 1,2 Md$ d'indemnités de licenciement. Hors ces éléments, le résultat opérationnel de la famille d'applications serait d'environ 80,9 Md$ sur neuf mois. ² Après une charge fiscale non monétaire de 15,93 Md$ liée à la loi fiscale américaine de 2025 (One Big Beautiful Bill Act). ³ Après un produit fiscal de 8,03 Md$ au T1 2026 qui compense en partie la charge de 2025.*

### Par segment — trimestres récents (M$)

| Trimestre | CA FoA | Résultat FoA | Marge FoA | CA RL | Perte RL |
|---|---|---|---|---|---|
| T3 2025 | 50 772 | 24 967 | 49 % | 470 | −4 432 |
| T4 2025 | 58 938 | 30 766 | 52 % | 955 | −6 021 |
| T1 2026 | 55 909 | 26 904 | 48 % | 402 | −4 030 |
| T2 2026 | 60 370 | 23 390 | 39 %⁴ | 431 | −4 620 |
| T3 2026 | 64 158 | 17 117 | 27 %⁴ | 443 | −4 129 |

*⁴ T2 : 2,4 Md$ de charges juridiques et 1,2 Md$ d'indemnités ; T3 : 9,89 Md$ de charge liée à l'accord avec 52 procureurs généraux. Hors ces éléments, la marge de la famille d'applications serait d'environ 45 % au T2 et 42 % au T3.*

---

### Par zone géographique (part approximative du chiffre d'affaires)

| Zone | Part du CA 2025 | Revenu moyen par utilisateur | Dynamique |
|---|---|---|---|
| États-Unis et Canada | ~43 % | Le plus élevé (plusieurs centaines de dollars par an) | Croissance soutenue par les prix ; marché le plus exposé aux litiges sur les mineurs |
| Europe | ~23 % | Intermédiaire | Régulation (DMA, offre « publicités moins personnalisées ») ; croissance correcte |
| Asie-Pacifique | ~19 % | Faible | Forte croissance des impressions ; annonceurs chinois exportateurs |
| Reste du monde | ~15 % | Très faible | Volume d'utilisateurs ; monétisation de WhatsApp (Inde, Brésil) |

**Lecture** : l'Amérique du Nord, avec environ 10 % des utilisateurs, génère plus de 40 % du chiffre d'affaires. La croissance des impressions vient surtout d'Asie et du reste du monde (zones moins monétisées), ce qui pèse mécaniquement sur le prix moyen par publicité ; à l'inverse, les gains de performance de l'IA font monter les prix dans les zones riches.

---

### Pourquoi les marges ont baissé en 2026

- **L'IA coûte plus cher qu'elle ne rapporte… pour l'instant** : amortissements (19,5 Md$ sur neuf mois, +48 %), achats de capacité cloud et de « jetons d'IA » à des tiers, salaires des chercheurs de Meta Superintelligence Labs. Les coûts et charges hors éléments juridiques ont progressé d'environ 36 % au T3 pour un chiffre d'affaires en hausse de 26 %
- **Les litiges** : 12,3 Md$ de charges juridiques en 2026, sans compter les 25 Md$ de pénalité prononcés au Nouveau-Mexique le 21 octobre (frappés d'appel)
- **Contrepoids** : réduction des effectifs (66 775 salariés fin septembre, −15 % sur un an) et baisse attendue des pertes de Reality Labs, réorientées vers l'IA

**Conclusion** : la famille d'applications reste une machine à cash exceptionnelle (plus de 100 Md$ de résultat opérationnel annuel), mais le groupe a délibérément choisi de sacrifier une partie de sa marge et la totalité de son flux de trésorerie disponible pour financer le calcul de l'IA. Le chiffre clé à suivre devient la **marge de la famille d'applications hors éléments exceptionnels** : 49 % au T3 2025, environ 42 % au T3 2026.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. Effets de réseau à l'échelle de la planète — le fossé principal
3,64 milliards de personnes utilisent chaque jour au moins une application du groupe. WhatsApp est l'infrastructure de communication par défaut de l'Inde, du Brésil, de l'Europe du Sud ou de l'Afrique ; Instagram est le lieu où les marques et les créateurs construisent leur audience. Chaque nouvel utilisateur rend le service plus utile aux autres, et chaque annonceur supplémentaire enrichit le système d'enchères. **Aucun concurrent occidental ne peut reconstruire ce graphe social**, et même TikTok, qui a gagné la bataille du divertissement chez les jeunes, n'a pas de messagerie de masse.

### 2. Données et machine publicitaire — l'avantage le plus rentable
Vingt ans de signaux d'intérêt, d'engagement et de conversion alimentent des systèmes de ciblage et de mesure que les annonceurs jugent parmi les plus rentables du marché. L'IA renforce ce fossé : au T3 2026, le modèle GEM a augmenté de 9,6 % les conversions des publicités d'applications, Andromeda de 1,4 % les conversions sur Facebook, et les annonceurs qui suivent les recommandations de l'assistant Meta AI obtiennent près de 5 % de conversions en plus au même coût. **Le prix moyen par publicité progresse de 14 %** alors que les impressions augmentent de 10 % : la demande des annonceurs dépasse l'offre.

### 3. Échelle financière et capacité d'investissement
Avec plus de 100 Md$ de résultat opérationnel annuel dans la famille d'applications, Meta peut investir 135 à 145 Md$ en 2026 sans vendre d'actions… jusqu'ici. Seule une poignée d'entreprises (Alphabet, Microsoft, Amazon) peuvent suivre ce rythme. C'est un **fossé par l'argent** : les acteurs de taille moyenne (Snap, Pinterest, Reddit) ne peuvent pas financer leurs propres modèles d'IA de pointe.

### 4. Contrôle du fondateur et vitesse d'exécution
La structure à deux classes d'actions donne à Mark Zuckerberg la majorité des droits de vote. C'est un risque de gouvernance, mais aussi un avantage : Meta peut **pivoter vite et investir à contre-courant** (Reels face à TikTok en 2020-2022, « année de l'efficacité » en 2023, Muse passé de l'idée au produit en huit mois en 2026). La création des actions sans droit de vote de catégorie C (janvier 2027) prolonge ce contrôle.

### 5. Coûts de changement — MOYENS
Côté utilisateurs, quitter WhatsApp ou Instagram signifie perdre ses contacts et son audience : le coût est élevé. Côté annonceurs, il est faible en théorie (les budgets se déplacent en un clic) mais élevé en pratique, car **aucun autre canal n'offre le même volume de conversions mesurables**. La faiblesse : les **jeunes générations**, qui partagent leur temps avec TikTok, YouTube et désormais les assistants d'IA.

## Positionnement face à la concurrence

| Critère | Meta | Alphabet (Google, YouTube) | TikTok | Amazon | OpenAI |
|---|---|---|---|---|---|
| Utilisateurs quotidiens | 3,64 Md (famille d'applications) | ~2 Md+ (YouTube, Search) | ~1 Md+ (mensuels, hors Chine) | — | Plusieurs centaines de millions (hebdomadaires) |
| Part de la publicité dans le CA | ~98 % | ~75 % | ~100 % | ~10 % | Marginale |
| Marge opérationnelle | ~33 % publiée (~39 % hors charges juridiques) | ~33 % | Non publiée | ~12 % | Négative |
| Modèles d'IA maison | Oui (Muse Wonder, frontière depuis oct. 2026) | Oui (Gemini) | Oui (ByteDance) | Partiels | Oui (référence du secteur) |
| Agent personnel | Muse (10 M+ utilisateurs) | Agents Gemini | — | Alexa+ | Dots (lancé le 29 sept. 2026) |
| Messagerie de masse | Oui (WhatsApp, Messenger) | Non | Non | Non | Non |

## Pouvoir de négociation

- **Vis-à-vis des annonceurs** : **élevé**. Système d'enchères où la demande dépasse l'offre ; les prix montent de 12 à 14 % par an sans perte de clients
- **Vis-à-vis des utilisateurs** : **élevé mais sous contrainte réglementaire** : l'accord de 2026 avec les procureurs généraux impose aux adolescents une limite par défaut de deux heures par jour et un blocage de minuit à 6 h ; l'Europe impose une offre « publicités moins personnalisées »
- **Vis-à-vis des fournisseurs de puces et de cloud** : **faible à moyen**. Meta est l'un des trois ou quatre plus gros acheteurs de calcul au monde, mais Nvidia garde le pouvoir de prix ; la diversification (AMD, puces maison MTIA, location chez CoreWeave et Google) vise précisément à rééquilibrer ce rapport de force
- **Vis-à-vis d'Apple et de Google** : **faible**. Ils contrôlent les systèmes d'exploitation, les magasins d'applications et une partie des signaux publicitaires. Les lunettes connectées sont la tentative de Meta de posséder sa propre plateforme
- **Vis-à-vis des régulateurs et des tribunaux** : **faible**, et c'est le point noir : 18,6 Md$ d'accord avec 52 procureurs généraux, 25 Md$ de pénalité au Nouveau-Mexique, procès en série sur la santé mentale des mineurs

> **En résumé** : le fossé de Meta est l'un des plus larges de la tech mondiale — effets de réseau, données, échelle financière. Il protège très bien la publicité. La question de 2026-2028 est différente : ce fossé suffit-il à transformer **150 à 250 Md$ d'investissements annuels dans l'IA** en nouveaux revenus (agents, abonnements, entreprises) avant que les concurrents ne s'emparent de la nouvelle interface ?`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Publicité numérique et plateformes (octobre 2026)

| Société | Code Bloomberg | Cap. boursière | VE / CA | VE / EBIT | P/E | Rdt div. | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|
| **Meta Platforms** | **META US** | **~1 780 Md$** | **~7,5x** | **~22,8x** | **~23,8x publié · ~21,0x futur** | **0,30 %** | **~29 %** |
| Alphabet | GOOGL US | ~4 090 Md$ | ~8,9x | ~26,9x | ~16,8x publié¹ · ~25,0x futur | 0,26 % | ~30 % |
| Amazon | AMZN US | ~2 830 Md$ | ~3,8x | ~31,6x | ~21,1x publié¹ · ~27,9x futur | 0 % | ~17 % |
| AppLovin | APP US | ~90 Md$ | ~13,2x | ~17,0x | ~20,6x publié · ~14,9x futur | 0 % | n.s.² |
| Reddit | RDDT US | ~29 Md$ | ~9,6x | ~34,0x | ~35,7x publié · ~25,3x futur | 0 % | n.s. (pertes avant 2025) |
| Pinterest | PINS US | ~13 Md$ | ~2,8x | ~45,4x | ~58,7x publié · ~10,5x futur | 0 % | ~10 % |
| Snap | SNAP US | ~11 Md$ | ~2,0x | n.s. (perte) | n.s. · ~8,8x futur | 0 % | négatif |

*Cours de clôture du 21 octobre 2026 ; ratios S&P Global Market Intelligence via StockAnalysis. Meta est valorisé à 697,52 $ (clôture précédant la réaction aux résultats ; −2,4 % en préouverture le 22 octobre). ¹ Les résultats publiés d'Alphabet et d'Amazon sont gonflés par des plus-values sur participations (notamment dans des laboratoires d'IA), d'où un P/E publié inférieur au P/E futur. ² ROE de plusieurs centaines de pour cent dû à des fonds propres très faibles. n.s. = non significatif. TikTok (ByteDance) et OpenAI ne sont pas cotés. À affiner avec un terminal de données avant toute décision.*

---

### Analyse comparative

**Meta — La qualité au prix du marché**
Meta combine la **croissance la plus rapide des très grandes capitalisations** (+26 % au T3 2026, +24 % attendus au T4) avec une marge opérationnelle de 33 % publiée (environ 39 % hors charges juridiques). Pourtant, à environ 21 fois les bénéfices des douze prochains mois, il se paie **moins cher qu'Alphabet (25x) et Amazon (28x)** et au niveau de la médiane du panel (~20x). Son rendement des capitaux propres sur cinq ans (~29 %) est au niveau d'Alphabet, malgré l'accident de 2022 (18,5 %). La faiblesse est ailleurs : **un rendement du flux de trésorerie disponible de 1,6 %**, devenu négatif au T3, contre 1,3 % pour Alphabet et une valeur négative pour Amazon — les trois géants financent la même course au calcul.

**Alphabet — Le rival le plus complet**
Search, YouTube, Google Cloud, puces TPU et modèles Gemini : Alphabet a ce que Meta n'a pas, **un métier de cloud** qui revend son calcul à des tiers et amortit ses investissements. C'est la raison pour laquelle le marché lui accorde une prime de valorisation alors que sa croissance est comparable. Meta tente de combler l'écart avec sa plateforme Meta Enterprise (API, Muse Code).

**Amazon — Le concurrent publicitaire discret**
La publicité d'Amazon (environ 10 % de son chiffre d'affaires) capte les budgets de « bas de tunnel » (au moment de l'achat). Le blocage de l'agent Muse sur le site d'Amazon dès le 20 septembre 2026 montre que la bataille des agents de commerce a commencé.

**AppLovin — La référence en efficacité publicitaire**
Marge opérationnelle de 77 %, croissance supérieure à 30 % : AppLovin prouve qu'un moteur publicitaire piloté par l'IA peut être extraordinairement rentable. Mais il dépend des jeux mobiles et de l'e-commerce, et son titre a perdu 53 % en un an, rappel de la volatilité des valeurs publicitaires.

**Reddit, Pinterest, Snap — Les acteurs de niche**
Trois plateformes dont la capitalisation cumulée (~53 Md$) représente **3 % de celle de Meta**. Aucune ne peut financer de modèle d'IA de pointe ; leurs multiples bas (Pinterest, Snap) ou élevés (Reddit) reflètent leur dépendance au moteur de recherche de Google et aux budgets résiduels des annonceurs.

**TikTok et OpenAI — Les deux menaces non cotées**
TikTok reste le principal concurrent pour le temps d'écran des moins de 25 ans aux États-Unis et en Europe. OpenAI est le concurrent le plus direct sur la nouvelle interface (assistants et agents) : Dots, son agent lancé fin septembre, a fait reculer l'action Meta de près de 5 % le 28 septembre.

---

### Le ratio qui compte : intensité capitalistique

| Société | Investissements / CA (12 mois) | Rendement FCF |
|---|---|---|
| Meta | ~45 % (55 % attendus sur 2026) | ~1,6 % |
| Alphabet | ~30 % | ~1,3 % |
| Amazon | ~22 % | négatif |

En 2023, Meta investissait 21 % de son chiffre d'affaires. Il est passé du statut de société « légère en capital » à celui de **constructeur d'infrastructures** : c'est ce changement, plus que le niveau des multiples, qui explique pourquoi le marché refuse de lui accorder une prime.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T3 2026 (publiés le 21 octobre 2026)

### Chiffre d'affaires et bénéfices face aux attentes

| Indicateur | T3 2026 | Prévision Meta | Consensus | T3 2025 | Écart |
|---|---|---|---|---|---|
| Chiffre d'affaires | 64 601 M$ | 61 000 – 64 000 M$ | 63 340 M$ | 51 242 M$ | **+2,0 % vs consensus**, au-dessus de la fourchette (+26 % a/a) |
| Publicité | 63 061 M$ | — | ~61 870 M$ | 50 082 M$ | +26 % a/a |
| Résultat opérationnel | 12 988 M$ | — | — | 20 535 M$ | −37 % a/a (+11 % hors charge juridique) |
| Marge opérationnelle | 20 % (35 % hors charge) | — | — | 40 % | −5 pts hors charge |
| Résultat net | 9 860 M$ | — | — | 2 709 M$¹ | +264 % (base 2025 écrasée par la fiscalité) |
| BPA dilué publié | 3,83 $ | — | 3,57 $ | 1,05 $¹ | **+7,3 % vs consensus** |
| BPA hors charge juridique | 7,40 $ | — | — | 7,25 $¹ | **+2 % a/a seulement** |
| Flux de trésorerie disponible | −2 120 M$ | — | — | 10 625 M$ | **Premier FCF négatif depuis 2012** |

*¹ Le T3 2025 supportait une charge fiscale non monétaire de 15,93 Md$ ; hors cet élément, le BPA était de 7,25 $.*

**Lecture** : un trimestre **excellent sur le chiffre d'affaires** (sept fois sur les dix derniers trimestres, Meta a dépassé le haut de sa propre fourchette) mais **décevant sur la conversion en bénéfice** : hors éléments exceptionnels des deux années, le BPA ne progresse que de 2 % quand les ventes gagnent 26 %. Les coûts hors charge juridique ont augmenté d'environ 36 %.

---

### Facteurs clés

- **Publicité** : 63,1 Md$ (+26 %), impressions **+10 %** (croissance saine dans toutes les régions, optimisation de la charge publicitaire), prix moyen **+14 %** (gains de performance de l'IA et meilleure conjoncture qu'au T3 2025)
- **Engagement** : temps passé par utilisateur sur Instagram au plus haut historique (+10 % et plus), temps passé sur les Reels de Facebook en hausse à deux chiffres, temps passé sur Threads +20 % ; **3,64 milliards** d'utilisateurs quotidiens (+3 %, légèrement sous les 3,65 milliards attendus)
- **Autres revenus** : 1,1 Md$ (+59 %), portés par la messagerie WhatsApp payante et les abonnements
- **Publicités en partenariat avec des créateurs** : plus de 15 Md$ de revenus annualisés (+97 %)
- **Reality Labs** : 443 M$ de chiffre d'affaires (−6 %, baisse des casques Quest, forte hausse des lunettes) et 4,13 Md$ de perte, mieux qu'attendu (4,54 Md$)

**Accélération ou ralentissement ?** La croissance a culminé au T1 2026 (+33 %, aidée par le change) puis s'est normalisée (+28 %, +26 %) ; la prévision du T4 (+24 % au milieu de la fourchette) reste **la plus forte des très grandes capitalisations**.

---

### Évolution des marges

- **Marge brute** : 79,3 % au T3 2026 contre 82,0 % un an plus tôt — l'infrastructure (amortissements, cloud tiers, jetons d'IA) pèse sur le coût des revenus (+45 %)
- **Recherche et développement** : 20,1 Md$ (+32 %), soit 31 % du chiffre d'affaires
- **Frais généraux** : 14,9 Md$, dont 9,89 Md$ de charge liée à l'accord avec 52 procureurs généraux sur la santé mentale des adolescents
- **Taux d'imposition** : 24 % (part non déductible des charges juridiques), 17 % hors charge
- **Effectifs** : 66 775 salariés (−15 % sur un an, −12 % sur un trimestre après le plan de mai 2026)

---

### Prévisions et perspectives

| Élément | Nouvelle prévision | Prévision précédente | Commentaire |
|---|---|---|---|
| CA du T4 2026 | 73 – 76 Md$ (+22 à +27 %) | — | Consensus ~72-74 Md$ : **au-dessus** |
| Charges totales 2026 | 175 – 179 Md$ | 165 – 169 Md$ | Relevées du seul montant de la charge juridique |
| Résultat opé. 2026 | Supérieur à 2025 hors charge du T3 | Supérieur à 2025 | Maintenu |
| Investissements 2026 | 135 – 145 Md$ | 130 – 145 Md$ | Plancher relevé ; 85,8 Md$ dépensés sur neuf mois |
| Pertes Reality Labs | 18 – 19 Md$ en 2026, ~15 Md$ en 2027 | — | En baisse vs 19,2 Md$ en 2025 |
| 2027 | « Forte croissance du chiffre d'affaires » et investissements « agressifs » | — | **Aucun chiffre** ; prévisions en janvier |

**Changement de ton** : pour la première fois, la direction parle de **monétiser plus vite que d'habitude** (Muse) et crée un outil de financement par actions (catégorie C) — un signal que l'autofinancement ne suffit plus.

---

### Bilan et flux de trésorerie

- **Flux d'exploitation** : 32,8 Md$ (+9 %) ; **investissements** : 34,9 Md$ (+80 %) ; **FCF** : −2,1 Md$
- **Trésorerie et placements** : 82,4 Md$ (90,3 Md$ fin juin) ; **dette à long terme** : 80,9 Md$ (58,7 Md$ fin 2025, après une émission obligataire de 24,9 Md$ en mai) ; trésorerie nette proche de zéro
- **Rachats d'actions** : **aucun en 2026** (26,2 Md$ sur les neuf premiers mois de 2025) ; dividende maintenu (1,36 Md$ par trimestre)
- **Créances clients** : 22,7 Md$ (+15 % depuis décembre, en ligne avec l'activité) ; **dettes fournisseurs** : 19,1 Md$ (multipliées par 2,1 depuis décembre, reflet des achats d'équipements)
- **Hors bilan** : environ 349 Md$ d'engagements non résiliables et 347 Md$ de baux de centres de données non démarrés (au 30 juin et en juillet)

---

### Réaction du marché

Le titre a clôturé à **697,52 $** le 21 octobre, puis a gagné jusqu'à **3,8 %** après Bourse (723,93 $) avant de **reculer d'environ 2,4 à 3 % en préouverture le 22 octobre** (vers 680 $). Au moins 13 courtiers ont relevé leur objectif de cours (consensus : environ 815 $).

**Ce que cela indique** : le marché avait déjà intégré une forte croissance publicitaire et le succès de Muse (+27 % en septembre). Il juge désormais Meta sur **trois questions** : le montant des investissements 2027, le retour du flux de trésorerie en territoire positif et l'addition judiciaire — alourdie le jour même par la **pénalité de 25 Md$** prononcée au Nouveau-Mexique.

**Éléments inhabituels** : premier FCF négatif depuis 2012, création d'une catégorie d'actions sans droit de vote, accord de « fidélisation » avec le fondateur lié à un projet d'impôt sur la fortune en Californie, aucun rachat d'actions depuis dix mois, 12,5 Md$ de trésorerie soumise à restriction (probablement liée aux paiements de l'accord avec les États).`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours de la direction

Les conférences réunissent **Mark Zuckerberg** (fondateur, PDG) et **Susan Li** (directrice financière). Le premier fixe la vision (la « superintelligence personnelle »), la seconde traduit en chiffres et défend la discipline financière.

### Évolution du ton sur cinq publications

**Octobre 2025 (T3 2025) — L'avertissement** : charge fiscale de 15,9 Md$ et annonce que les charges de 2026 croîtront « nettement plus vite » qu'en 2025. Le titre perd **environ 11 %**. Le marché découvre l'ampleur du pari.

**Janvier 2026 (T4 2025) — L'offensive assumée** : Zuckerberg prédit une « accélération majeure de l'IA » en 2026 ; investissements prévus de **115 à 135 Md$**, mais promesse d'un **résultat opérationnel 2026 supérieur à celui de 2025**. Prévision du T1 au-dessus des attentes : **+10 %**.

**Avril 2026 (T1 2026) — La facture monte** : premier modèle de Meta Superintelligence Labs (Muse Spark), croissance de 33 %, mais relèvement des investissements à **125-145 Md$** (prix des composants, Nvidia en tête). JPMorgan dégrade le titre : **−10 %**.

**Juillet 2026 (T2 2026) — Le trou d'air** : 2,4 Md$ de charges juridiques, 1,2 Md$ d'indemnités (environ 8 000 départs annoncés en mai), BPA sous le consensus, FCF quasi nul (0,8 Md$). La direction lance Meta One et l'API des modèles, et évoque la vente de calcul à de grandes entreprises tout en jugeant que « vendre de l'intelligence » rapportera bien plus. **Environ −9 %**.

**Octobre 2026 (T3 2026) — L'euphorie maîtrisée** : Zuckerberg parle d'un des **lancements les plus réussis de l'histoire** du groupe (Muse : plus de 10 millions d'utilisateurs en six semaines, 25 % d'utilisation quotidienne, numéro un de l'App Store) et de « vélocité » partout. Susan Li annonce les actions de catégorie C « par prudence », sans plan de financement. **+3,8 % après Bourse, puis −2 à −3 % le lendemain.**

---

### Priorités répétées de la direction

**1. La superintelligence personnelle** — Un agent capable pour chaque personne (Muse), servi à des milliards d'utilisateurs ; capacité de calcul dimensionnée pour **plus d'un milliard de personnes** d'ici quelques années.

**2. La monétisation de l'IA** — Commissions sur les transactions facilitées par Muse (le shopping est l'usage numéro un, panier moyen supérieur à 200 $), abonnements pour les modèles avancés, offre pour les PME et les entreprises (API, Muse Code, agents commerciaux). Objectif : un revenu par utilisateur de Muse **supérieur** aux « plusieurs centaines de dollars par an » déjà générés par un utilisateur américain de la famille d'applications.

**3. L'efficacité du calcul** — Diviser par **plus de dix** le coût de service de Muse en un an (capacité creuse, modèles plus petits, optimisation de l'inférence).

**4. Le moteur publicitaire** — Gains continus de classement, de recherche générative et d'outils créatifs ; la direction insiste sur la « longue piste » de croissance du cœur de métier en 2027.

**5. La rentabilité de Reality Labs** — Pertes ramenées vers 15 Md$ en 2027, nouveaux casques uniquement en cas de rupture technologique, priorité aux lunettes avec Muse.

---

### Analyse du sentiment

| Publication | Ton | Thème dominant | Réaction du titre |
|---|---|---|---|
| T3 2025 | Prudent | Charge fiscale, charges 2026 en forte hausse | ≈ −11 % |
| T4 2025 | Offensif | « Accélération majeure de l'IA » | ≈ +10 % |
| T1 2026 | Confiant mais coûteux | Investissements relevés | ≈ −10 % |
| T2 2026 | Défensif | Litiges, licenciements, FCF quasi nul | ≈ −9 % |
| T3 2026 | Enthousiaste | Muse, actions de catégorie C | +3,8 % après Bourse, ≈ −2,5 % le lendemain |

- **Confiance** : très élevée, voire militante (Zuckerberg affirme qu'il « doit exister une entreprise » qui porte la vision d'une IA au service de l'individu)
- **Transparence** : **mitigée** — premiers indicateurs chiffrés sur Muse, mais **aucune prévision d'investissement ni de charges pour 2027**, aucun chiffre de coût unitaire de Muse
- **Cohérence** : forte sur la stratégie (l'IA d'abord depuis 2023), plus faible sur l'enveloppe financière (le plan d'investissement 2026 a été relevé trois fois, de 115 à 135-145 Md$)

> **À lire entre les lignes** : en quatre trimestres, le vocabulaire est passé de « discipline » à « vélocité », et du financement par les flux d'exploitation (« le pilier principal », disait Susan Li en juillet) à la préparation d'un financement par actions. La direction ne dit pas que Meta va émettre des actions ; elle s'est donné les moyens de le faire sans diluer le contrôle du fondateur.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### Mark Zuckerberg — Fondateur, président et directeur général (depuis 2004)
**Bilan** : a créé Facebook en 2004 et en a fait un groupe de **1 780 Md$ de capitalisation**. Ses grandes décisions de capital ont été, pour la plupart, remarquables : **Instagram** (1 Md$ en 2012, aujourd'hui environ la moitié du chiffre d'affaires publicitaire américain selon des estimations de marché), **WhatsApp** (19 Md$ en 2014, 3 milliards d'utilisateurs), virage du mobile (2012-2013), riposte de **Reels** face à TikTok, « **année de l'efficacité** » de 2023 qui a fait passer la marge opérationnelle de 25 % à 41 %. Le contrepoint est massif : **plus de 80 Md$ de pertes cumulées dans Reality Labs** depuis 2020 pour un métavers qui n'a pas pris, et un pari sur l'IA de pointe dont le rendement reste à démontrer.

**Rémunération et participation** : salaire de 1 $ depuis 2013 ; sa rémunération déclarée correspond essentiellement à des frais de sécurité. Il détient environ 13 % du capital mais **la majorité des droits de vote** grâce aux actions de catégorie B (dix voix par action). Ventes régulières dans le cadre de plans programmés (10b5-1), dont 21,4 M$ le 24 septembre 2026.

### Susan Li — Directrice financière (depuis novembre 2022, dans le groupe depuis 2008)
**Bilan** : a piloté l'« année de l'efficacité », l'introduction du premier dividende (2024), les rachats d'actions de 2023-2025, puis le financement de la vague d'investissements (émission obligataire de 24,9 Md$ en mai 2026, coentreprises de centres de données avec Blue Owl et BlackRock, notation Aa3/AA−).

### Dina Powell McCormick — Présidente et vice-présidente du conseil (depuis janvier 2026)
Ancienne associée de Goldman Sachs (16 ans), ancienne conseillère à la Maison-Blanche. Rôle créé pour **nouer des partenariats de financement avec des investisseurs et des États souverains** autour des centres de données. Son arrivée signale que le financement de l'IA est devenu un enjeu de direction générale.

### Alexandr Wang — Directeur de l'IA (depuis juin 2025)
Fondateur de **Scale AI**, recruté avec l'achat de 49 % de sa société (environ 14,3 Md$). Dirige Meta Superintelligence Labs, qui a livré en dix-huit mois les modèles Muse Spark puis **Muse Wonder** (premier modèle de « frontière » du groupe, octobre 2026). Profil jeune, coûteux, à fort enjeu de rétention des talents (départs ponctuels de chercheurs).

### Les piliers historiques
**Javier Olivan** (directeur des opérations depuis 2022, arrivé en 2007), **Chris Cox** (directeur des produits, 13e salarié, 2005), **Andrew Bosworth** (directeur technique, 2006), **C.J. Mahoney** (directeur juridique, ancien représentant adjoint au Commerce des États-Unis), **CJ Desai** (plateforme Meta Enterprise).

---

### Ancienneté et alignement

| Dirigeant | Dans le groupe depuis | Dans la fonction depuis | Alignement |
|---|---|---|---|
| Mark Zuckerberg | 2004 | 2004 | ~13 % du capital, majorité des voix |
| Susan Li | 2008 | 2022 | Rémunération en actions |
| Javier Olivan | 2007 | 2022 | Ventes hebdomadaires régulières depuis janvier 2026 |
| Chris Cox | 2005 | 2020 | 40 000 actions vendues le 21 septembre 2026 |
| Alexandr Wang | 2025 | 2025 | Actions Meta + participation Scale AI |
| Dina Powell McCormick | 2026 | 2026 | Rémunération en actions |

---

### Historique de l'allocation du capital

| Indicateur | 2021 | 2022 | 2023 | 2024 | 2025 | 9 mois 2026 |
|---|---|---|---|---|---|---|
| ROE | 31 % | 18,5 % | 28 % | 37 % | 30 % | ~32 % (12 mois) |
| ROIC (12 mois, S&P) | — | — | — | — | — | ~26 % |
| Investissements / CA | 16 % | 27 % | 21 % | 24 % | 36 % | 47 % |
| Rachats d'actions (Md$) | 44,5 | 27,9 | 19,8 | 29,8 | ≥ 26 | 0 |
| Actions diluées (Md) | 2,86 | 2,70 | 2,63 | 2,61 | ~2,58 | 2,57 |

**Lecture** : entre 2021 et 2025, Meta a racheté environ **150 Md$ d'actions** (−10 % du nombre de titres) tout en doublant son chiffre d'affaires ; le rendement des capitaux propres est revenu au-dessus de 30 %. 2026 marque une rupture : **priorité absolue au calcul**, plus aucun rachat, endettement en hausse. Le jugement final sur cette équipe dépendra du rendement de ces 135 à 145 Md$.

---

### Signaux d'alerte

- **Gouvernance verrouillée** : structure à deux classes, création d'une troisième classe sans droit de vote (janvier 2027) approuvée par **consentement écrit** du fondateur, sans assemblée
- **Accord de fidélisation du fondateur** : en contrepartie d'un engagement de résidence en Californie pendant huit ans (lié au projet d'impôt sur la fortune soumis au vote le 3 novembre 2026), Zuckerberg pourra vendre librement 20 % de ses nouvelles actions C ; de nouveaux dividendes en actions C sont prévus à chaque **doublement du cours** (à partir de 580,60 $) si le rendement annuel dépasse 10 %. Ces dividendes bénéficient à tous les actionnaires, mais l'ensemble ressemble à un dispositif de rémunération indirecte
- **Litiges à répétition** : santé mentale des mineurs, données personnelles (affaire Cambridge Analytica), publicités frauduleuses — une culture longtemps tournée vers la croissance plutôt que vers la sécurité
- **Changements de cap coûteux** : métavers (2021), puis IA de pointe (2025) avec une rotation importante des équipes d'IA
- **Pas de transactions significatives avec des parties liées** identifiées, hormis la participation dans Scale AI, société d'origine du directeur de l'IA

### Fondateur ou gestionnaire professionnel ?
**Fondateur, sans contre-pouvoir réel.** C'est la force qui a permis à Meta de réussir des virages que peu de groupes de cette taille auraient tentés, et le risque qui l'expose à des paris de plusieurs centaines de milliards de dollars décidés par un seul homme. À ce stade du cycle — transition de la publicité vers les agents d'IA —, un fondateur offensif est probablement un atout ; la discipline viendra de la directrice financière et… du cours de Bourse.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Les facteurs qui ont fait bouger le titre (2021-2026)

*Variations approximatives sur la séance suivant l'événement. Cours non ajustés de la future distribution d'actions de catégorie C (effet équivalent à une division par deux en janvier 2027).*

### Hausses significatives (plus de 5 %)

**2 février 2023 — +23 %** : lancement de « l'année de l'efficacité », plan de rachat de 40 Md$, prévisions supérieures aux attentes. Début d'un rebond de **+194 % sur l'année 2023**.

**2 février 2024 — +20 %** : premier dividende de l'histoire, nouveau plan de rachat de 50 Md$ ; gain de capitalisation de près de 200 Md$ en une séance, un record à l'époque.

**31 juillet 2025 — environ +11 %** : chiffre d'affaires du T2 2025 très au-dessus des attentes grâce aux gains de l'IA publicitaire ; le titre atteint son **plus haut historique (environ 796 $) en août 2025**.

**29 janvier 2026 — environ +10 %** : résultats du T4 2025 et prévision du T1 au-dessus du consensus ; promesse d'un résultat opérationnel 2026 supérieur à 2025 malgré 115 à 135 Md$ d'investissements.

**Mi-avril 2026 — rebond d'environ 30 % en deux semaines** : depuis le plus bas annuel du 27 mars (520,26 $), sur une valorisation jugée attractive et l'apaisement des marchés.

**9 septembre 2026 — +6,6 %** et **21 septembre 2026 — +11,4 %** : lancement de l'agent Muse (8 septembre), puis Muse en tête de l'App Store américain. **Septembre 2026 : +27 %**, meilleur mois depuis novembre 2022 ; plus haut annuel de 779,82 $ le 24 septembre.

---

### Baisses significatives (plus de 5 %)

**3 février 2022 — −26 %** : première baisse du nombre d'utilisateurs quotidiens de Facebook, impact des règles de confidentialité d'Apple ; environ 230 Md$ de capitalisation effacés en une séance.

**27 octobre 2022 — −25 %** : investissements dans le métavers jugés incontrôlés ; le titre touche environ 90 $ début novembre (−77 % depuis son sommet de 2021). **2022 : −64 %.**

**25 avril 2024 — −10,5 %** : relèvement des investissements et prévisions jugées prudentes.

**30 octobre 2025 — environ −11 %** : charge fiscale de 15,9 Md$ et annonce d'une forte hausse des charges en 2026. Début d'une baisse de **30 %** jusqu'au 27 mars 2026.

**Février-mars 2026 — environ −28 % depuis le sommet de janvier** : doutes sur le retour sur investissement de l'IA, hausse des taux d'intérêt, incertitudes géopolitiques ; plus bas de 520,26 $ le 27 mars.

**30 avril 2026 — environ −10 %** : investissements relevés à 125-145 Md$, dégradation par JPMorgan (objectif ramené de 825 à 725 $).

**30 juillet 2026 — environ −9 %** : BPA sous le consensus (charges juridiques et licenciements), FCF quasi nul, prévision du T3 légèrement inférieure aux attentes.

**28 septembre 2026 — −4,8 %** : informations sur l'agent concurrent d'OpenAI (Dots), lancé le lendemain.

**14 et 16 octobre 2026 — −3,3 % et −3,7 %** : repli des valeurs de l'IA sur fond d'inquiétudes sur la dette et la conjoncture ; environ −11 % depuis le plus haut de septembre.

**22 octobre 2026 — environ −2,5 à −3 % en préouverture** : malgré des résultats supérieurs aux attentes, FCF négatif, absence de chiffre d'investissement pour 2027 et pénalité de 25 Md$ au Nouveau-Mexique.

---

### Performance annuelle

| Année | Variation du cours | Moteur principal |
|---|---|---|
| 2021 | +23 % | Pandémie, publicité en ligne |
| 2022 | −64 % | Apple, TikTok, métavers, récession publicitaire |
| 2023 | +194 % | Efficacité, rachats, retour de la croissance |
| 2024 | +65 % | Dividende, IA publicitaire |
| 2025 | ≈ +12 % | Croissance de 22 %, puis choc des investissements |
| 2026 (au 21 oct.) | ≈ +6 % | Montagnes russes : −28 % jusqu'en mars, puis +34 % (jusqu'à +50 %) depuis le plus bas |

---

### Facteurs structurels

- **L'arbitrage croissance contre investissements** : depuis 2022, le titre monte quand la croissance publicitaire surprend et baisse quand les investissements sont relevés. Les quatre dernières publications ont provoqué des mouvements de 9 à 11 % sur deux séances, dont trois à la baisse
- **Le multiple plutôt que les bénéfices** : le BPA hors éléments exceptionnels est passé d'environ 15 $ en 2023 à environ 30 $ en 2026 ; le cours, lui, n'a progressé que de 6 % depuis le début de l'année. Le titre se paie environ 21 fois les bénéfices futurs, sous sa moyenne de cinq ans (~26x)
- **Les catalyseurs produits** : Reels (2022-2023), Muse (2026) — le marché récompense les preuves d'usage massif
- **Le risque juridique** : l'accord de 18,6 Md$ (26 août) a été bien accueilli car il réduisait l'incertitude ; la pénalité de 25 Md$ du 21 octobre la ravive
- **Repères techniques** : support vers 680-686 $ (écart non comblé du 21 septembre), puis 620-630 $ (moyennes mobiles à 50 et 200 jours, 661 et 633 $) ; résistances à 722 $ puis 778-780 $`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

*Tous les montants sont exprimés **avant** la distribution d'une action de catégorie C pour chaque action détenue (prévue fin janvier 2027), qui équivaut à une division par deux : il faudra alors diviser les BPA et les cours par deux pour comparer.*

### Point de départ
- **2025 (réalisé)** : BPA dilué publié de **23,50 $**, environ **29,70 $** hors charge fiscale de 15,9 Md$
- **9 mois 2026 (réalisé)** : BPA publié de **20,44 $** ; hors produit fiscal du T1 (−3,13 $), charges juridiques et indemnités (environ +4,72 $) : environ **22,05 $**
- **T4 2026** : chiffre d'affaires de 73 à 76 Md$ et charges annuelles de 175 à 179 Md$ impliquent un résultat opérationnel d'environ 24,5 Md$ et un BPA d'environ **7,90 $**

### Hypothèses de modélisation

**Croissance du secteur** : le marché mondial de la publicité numérique progresse d'environ 10 à 12 % par an ; la part captée par les plateformes dotées d'IA de ciblage (Meta, Google, Amazon, AppLovin) augmente.

**Gains de parts de marché** : la croissance de Meta (+26 %) est plus de deux fois supérieure à celle du marché ; hypothèse d'un écart qui se réduit progressivement (+21 % en 2027, +17 % en 2028).

**Hausses de prix** : le prix moyen par publicité progresse de 12 à 14 % grâce aux gains de conversion ; hypothèse de +8 à +10 % par an, complétée par +8 à +10 % d'impressions.

**Nouveaux revenus** : abonnements (Meta One, Muse), commissions sur les transactions, API et Muse Code, messagerie WhatsApp payante : quelques milliards de dollars en 2027, 10 à 15 Md$ en 2028 dans le scénario central.

**Pressions sur les coûts** : amortissements en très forte hausse (les 135 à 145 Md$ investis en 2026 s'amortissent sur cinq à cinq ans et demi pour les serveurs), coût du calcul de Muse, rémunération des chercheurs ; charges en hausse de 27 % en 2027 puis de 17 % en 2028.

**Levier opérationnel** : marge opérationnelle d'environ 31 % en 2026 publiée (35 % hors charges juridiques), 33 % en 2027 et 2028 dans le scénario central.

**Coûts de financement** : dette d'environ 81 Md$ à taux fixe (coupons récents de 4,55 à 6,45 %) ; charge nette d'environ 3 à 4 Md$ par an à partir de 2027. Taux d'imposition d'environ 17 %.

**Dilution** : rachats suspendus ; rémunération en actions d'environ 28 Md$ par an ; hypothèse d'une légère hausse du nombre d'actions (+0,5 % par an), sans émission massive d'actions C.

---

### Scénario central

| Exercice | CA (Md$) | Croissance | Marge opé. | Résultat net (Md$) | Actions diluées (Md) | BPA | P/E à 697,52 $ |
|---|---|---|---|---|---|---|---|
| 2025 (réalisé) | 201,0 | +22 % | 41 % | 60,5 (76,4 hors fiscalité) | 2,58 | 23,50 $ (29,70 $ ajusté) | — |
| **2026E** | **~256** | **+27 %** | **~31 % (35 % ajusté)** | **~73 (~77 ajusté)** | **~2,57** | **~28,3 $ (~30,0 $ ajusté)** | **~23,3x ajusté** |
| **2027E** | **~310** | **~+21 %** | **~33 %** | **~82** | **~2,58** | **~31,9 $** | **~21,9x** |
| **2028E** | **~363** | **~+17 %** | **~33 %** | **~96** | **~2,60** | **~37,0 $** | **~18,9x** |

**Croissance annuelle moyenne du BPA ajusté 2026-2028 : environ +11 %** — deux fois moins que celle du chiffre d'affaires, car les amortissements de l'IA absorbent le levier opérationnel. Après la distribution des actions C, le BPA 2027 équivaudrait à environ **16 $** et le BPA 2028 à environ **18,50 $**.

### Sensibilité

| Scénario | Hypothèses 2027-2028 | BPA 2027E | BPA 2028E |
|---|---|---|---|
| **Pessimiste** | Croissance 16 % puis 12 %, marge 29 % puis 30 % (calcul, litiges) | ~26,7 $ | ~30,6 $ |
| **Central** | Croissance 21 % puis 17 %, marge 33 % | ~31,9 $ | ~37,0 $ |
| **Optimiste** | Croissance 25 % puis 20 % (Muse, entreprises), marge 35 % puis 37 % | ~35,0 $ | ~44,1 $ |

**Les juges de paix** : la prévision d'investissements et de charges pour 2027 (publication de fin janvier 2027), la croissance du chiffre d'affaires du T4 2026 et le premier chiffre de revenus de Muse. Un point de marge opérationnelle en 2027 représente environ 1,00 $ de BPA ; 10 Md$ de pénalités supplémentaires non déductibles représentent environ 3,90 $.

**Conclusion** : à 697,52 $, Meta se paie environ **22 fois le BPA 2027** et **19 fois le BPA 2028** du scénario central — un multiple raisonnable pour une croissance du chiffre d'affaires supérieure à 15 %, mais pas une aubaine compte tenu d'une croissance du BPA ramenée à environ 11 % par an et d'un flux de trésorerie disponible proche de zéro. Le potentiel vient du scénario optimiste : si l'IA crée de nouveaux revenus, le BPA 2028 pourrait dépasser 44 $.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Leviers de création de valeur

**1. La meilleure machine publicitaire du monde accélère grâce à l'IA** : +26 % de croissance à plus de 240 Md$ de chiffre d'affaires annuel, prix moyen par publicité +14 %, conversions en hausse à chaque nouveau modèle (GEM, Andromeda, Generative Recommender). Aucune entreprise de cette taille ne croît aussi vite. Et la direction promet une « forte croissance » en 2027.

**2. Muse, la nouvelle interface** : plus de 10 millions d'utilisateurs en six semaines dans deux pays seulement, 25 % d'utilisation quotidienne, numéro un de l'App Store, un usage dominé par le **shopping** (panier moyen supérieur à 200 $). Si Muse devient l'agent par défaut de 3,6 milliards de personnes, Meta passera du statut de vendeur d'attention à celui de **commissionnaire du commerce mondial**. La distribution (WhatsApp, Instagram, lunettes) est un avantage qu'OpenAI n'a pas.

**3. L'IA rend les coûts plus légers qu'ils n'en ont l'air** : les modèles Muse réduisent déjà de plus de 80 % le coût de compréhension des contenus ; la direction vise une division par dix du coût de service de Muse en un an. Les effectifs ont baissé de 15 % pendant que la croissance restait supérieure à 25 %.

**4. De nouveaux relais de revenus** : WhatsApp (messagerie payante, publicités), abonnements Meta One (15 millions), plateforme pour les entreprises (API, Muse Code, agents commerciaux), publicités avec les créateurs (15 Md$ de revenus annualisés). Les « autres revenus » progressent de 59 %.

**5. Reality Labs devient un problème en voie de règlement** : pertes de 19 Md$ en 2025, 18-19 Md$ en 2026, ~15 Md$ en 2027. Chaque milliard de pertes en moins ajoute environ 0,32 $ au BPA.

**6. Une valorisation qui ne paie pas l'IA** : à 21 fois les bénéfices futurs, Meta est la moins chère des « Sept Magnifiques » rapportée à sa croissance. Le marché valorise le cœur publicitaire et accorde une valeur quasi nulle à Muse.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques susceptibles de nuire durablement à l'activité

**1. Le gouffre des investissements** : 72 Md$ en 2025, 135-145 Md$ en 2026, peut-être 185 à 250 Md$ en 2027 selon les estimations de marché ; près de 700 Md$ d'engagements contractuels et de baux. Le FCF est devenu négatif. Si l'IA ne génère pas de revenus supplémentaires proportionnels, Meta aura transformé une entreprise légère en capital, avec un ROIC de 26 %, en constructeur de centres de données au rendement médiocre. Le précédent du métavers (plus de 80 Md$ de pertes) est dans tous les esprits.

**2. L'étau juridique et réglementaire sur les mineurs et les données** : 18,6 Md$ d'accord avec les États, 25 Md$ de pénalité au Nouveau-Mexique, 942 M$ dans une autre affaire du même État, procès en série à partir du 28 octobre 2026, procès des districts scolaires en février 2027, limites de temps imposées aux adolescents. Le risque n'est pas seulement financier : il touche au **produit** (moins de temps, moins de ciblage, moins d'impressions chez les jeunes).

**3. La bataille des agents peut être perdue** : OpenAI (Dots), Google (agents Gemini), Amazon (qui bloque Muse sur son site) et Apple contrôlent chacun une partie de l'accès au commerce et aux systèmes d'exploitation. Muse n'est disponible qu'aux États-Unis et au Canada, coûte très cher à servir, et des failles de sécurité ont déjà été signalées.

### Analyse pré-mortem
**Hypothèse : Meta vaut 450 $ dans deux ans.** Scénario : les investissements 2027 atteignent 230 Md$ sans revenus significatifs de Muse ; la croissance publicitaire ralentit à 12 % en 2027 (récession, effet de base, limites sur les adolescents) ; les pénalités dépassent 40 Md$ en cumul ; Meta émet des actions C pour financer ses centres de données. Le BPA 2027 plafonne vers 26 $ et le marché applique un multiple de 17x, celui d'un groupe capitalistique à faible flux de trésorerie : 17 × 26 $ ≈ 450 $ (−35 %).

### Les multiples actuels sont-ils trop élevés ?
**Non sur les bénéfices, oui sur le cash.** À ~21-22 fois les bénéfices futurs et ~17 fois l'EBITDA, Meta n'est pas cher pour sa croissance. Mais à **62 fois le flux de trésorerie disponible** des douze derniers mois (rendement de 1,6 %) et avec un FCF négatif au T3, l'investisseur paie aujourd'hui des bénéfices comptables qui ne se transforment pas en trésorerie distribuable. Tout dépend du rendement futur des investissements.

---

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat se concentre sur le montant des investissements, alors que l'indicateur décisif est **la monétisation de l'engagement supplémentaire créé par l'IA**. Meta est la seule entreprise au monde qui peut déployer un agent d'IA auprès de 3,6 milliards de personnes **à l'intérieur de messageries qu'elles utilisent déjà**, et la seule dont le cœur de métier — la publicité de performance — bénéficie mécaniquement de chaque progrès des modèles. Le marché traite les dépenses d'IA de Meta comme un coût, à la manière du métavers ; il s'agit pour une large part d'un **investissement dans le cœur publicitaire lui-même**, déjà rentabilisé par la hausse de 14 % du prix des publicités. Si 2027 confirme une croissance supérieure à 20 % avec une marge stable, la décote actuelle face à Alphabet et Amazon n'aura plus de justification.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Engagements hors bilan et coentreprises — RISQUE ÉLEVÉ (le point clé)
Au 30 juin 2026, Meta déclarait **349 Md$ d'engagements contractuels non résiliables** (capacité cloud de tiers, infrastructure technique), dont 53,5 Md$ dus en 2026 et 81,7 Md$ en 2027, et **279 Md$ de baux non encore démarrés** (centres de données, hébergement, réseau), auxquels se sont ajoutés environ **68 Md$ en juillet**. Soit près de **700 Md$**, contre 80,9 Md$ de dette financière au bilan. S'y ajoutent les **coentreprises** Hyperion (Louisiane, avec Blue Owl, environ 27 Md$ de dette) et El Paso (avec BlackRock, environ 12,5 Md$ de dette), dans lesquelles Meta détient 20 % mais accorde des **garanties de valeur résiduelle** : la dette n'apparaît pas au bilan consolidé, le risque si. Au T3, Meta a encaissé 1,04 Md$ de « distribution d'une coentreprise de centres de données ».

**À surveiller** : la note sur les engagements du 10-Q du T3, le traitement comptable des garanties de valeur résiduelle, la part des baux qui démarreront en 2027-2028.

### Durée d'amortissement des serveurs — RISQUE MODÉRÉ
Meta a porté en janvier 2025 la durée d'utilité de ses serveurs et équipements réseau à **cinq ans et demi**, ce qui réduit la charge d'amortissement annuelle de plusieurs milliards de dollars. Avec plus de 250 Md$ d'immobilisations corporelles et un rythme d'obsolescence des puces d'IA d'environ un an par génération (Blackwell, Rubin…), cette hypothèse est **favorable au résultat publié**. Une révision à la baisse ferait mécaniquement chuter la marge.

### Provisions juridiques et passifs éventuels — RISQUE ÉLEVÉ
- **Accord avec 52 procureurs généraux** (août 2026) : jusqu'à **18,59 Md$**, dont 9,89 Md$ passés en charge au T3 ; le solde est en partie conditionnel (selon que YouTube et TikTok adoptent des protections similaires). Environ 12,5 Md$ de trésorerie soumise à restriction figurent dans les autres actifs
- **Nouveau-Mexique** : **25 Md$** de pénalité prononcés le 21 octobre (données personnelles, affaire Cambridge Analytica), frappés d'appel ; 942 M$ dans l'affaire sur la protection des mineurs. Une provision n'est requise que si la perte est probable et estimable : **le traitement retenu dans le 10-Q du T3 sera décisif**
- **Autres procédures** : procès individuels et des districts scolaires, procédure antitrust de la FTC (gagnée en première instance en novembre 2025, en appel), régulation européenne (DMA)

### Information sectorielle — RISQUE MODÉRÉ
Les coûts de Meta Superintelligence Labs, de Muse et des modèles d'IA sont rattachés à la **famille d'applications**, alors que Reality Labs ne porte que le matériel et la réalité virtuelle. Il est impossible de mesurer séparément la rentabilité du cœur publicitaire et celle des nouveaux projets d'IA. Meta ne publie plus non plus le nombre d'utilisateurs mensuels de Facebook seul.

### Comptabilisation des produits — RISQUE MODÉRÉ
La publicité est reconnue à l'affichage ou à l'action, un modèle simple. Le point de vigilance est **qualitatif** : en novembre 2025, une enquête de Reuters fondée sur des documents internes indiquait que Meta estimait qu'environ 10 % de son chiffre d'affaires 2024 (environ 16 Md$) provenait de publicités pour des escroqueries ou des produits interdits. Un durcissement de la modération ou de la réglementation pourrait retirer une partie de ce chiffre d'affaires.

### Fiscalité — RISQUE MODÉRÉ
Charge non monétaire de 15,93 Md$ au T3 2025 (loi fiscale américaine), produit de 8,03 Md$ au T1 2026 (avis du Trésor sur l'impôt minimum des sociétés), 20,5 Md$ d'impôts à long terme au passif, taux effectif de 24 % au T3 2026. Ces éléments rendent le BPA publié **difficile à comparer** d'un trimestre à l'autre : il faut systématiquement utiliser les montants retraités.

### Rémunération en actions — RISQUE MODÉRÉ
**21,1 Md$ sur neuf mois** (11,6 % du chiffre d'affaires), en hausse de 45 % avec le recrutement de chercheurs en IA. Meta paie en outre 12,8 Md$ d'impôts pour le compte de ses salariés lors du règlement net des actions. Sans rachats d'actions, la dilution n'est plus compensée ; la future classe C pourra servir à rémunérer les salariés.

### Goodwill, incorporels et participations — RISQUE FAIBLE À MODÉRÉ
Goodwill limité (23,4 Md$, 9 % des fonds propres). En revanche, **32,6 Md$ de participations non cotées**, dont la participation de 49 % dans Scale AI (environ 14,3 Md$ en 2025), sont valorisées selon des méthodes qui laissent une part de jugement ; des pertes latentes de 1,2 Md$ ont été constatées sur neuf mois.

### Contrats de location — RISQUE MODÉRÉ
31,2 Md$ de dettes locatives au bilan, en hausse de 24 % depuis décembre, et un volume de baux à démarrer **onze fois supérieur**. Leur entrée progressive au bilan à partir de 2027 alourdira la dette économique.

### Parties liées — RISQUE FAIBLE
Pas de transaction significative identifiée. Points d'attention : Scale AI (dirigée jusqu'en 2025 par l'actuel directeur de l'IA) et l'accord de fidélisation du fondateur.

### Flux de trésorerie vs résultat
- 9 mois 2026 : flux d'exploitation de 96,9 Md$ pour un résultat net de 52,5 Md$ (amortissements de 19,5 Md$ et rémunération en actions de 21,1 Md$ réintégrés)
- **FCF de 11,0 Md$ sur neuf mois** (29,5 Md$ un an plus tôt), **négatif au T3** ; les dettes fournisseurs ont doublé depuis décembre, ce qui soutient temporairement les flux d'exploitation

---

### Verdict global
**Risque comptable : MODÉRÉ, risque de bilan ÉLEVÉ.** Les comptes sont audités par Ernst & Young sans réserve et la publicité se comptabilise simplement. Les vrais sujets sont **hors du compte de résultat** : près de 700 Md$ d'engagements, des coentreprises garanties, une durée d'amortissement favorable et des passifs juridiques encore mal chiffrés. Pour lire Meta en 2026, il faut retraiter la fiscalité, les charges juridiques et les indemnités, puis regarder le FCF plutôt que le BPA.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Mark Zuckerberg

*Classées par ordre d'importance décroissante.*

### Allocation des capitaux

**1.** Vos investissements sont passés de 39 Md$ en 2024 à 135-145 Md$ en 2026, et le flux de trésorerie disponible est devenu négatif au T3. **Quel rendement minimal sur le capital investi** exigez-vous d'un nouveau gigawatt de calcul, et à quelle date vous engagez-vous à revenir à un FCF positif chaque trimestre ?

**2.** Vous avez créé une classe d'actions sans droit de vote « pour lever des capitaux ». **À partir de quel niveau d'investissement ou de dette** émettriez-vous des actions C, et quel plafond de dilution annuelle vous fixez-vous ?

**3.** Près de 700 Md$ d'engagements contractuels et de baux s'ajoutent à 81 Md$ de dette. **Quelle part de ces engagements est réellement modulable** si la demande de calcul déçoit, et quelles garanties de valeur résiduelle avez-vous accordées dans les coentreprises Hyperion et El Paso ?

**4.** Vous n'avez racheté aucune action depuis janvier. **Dans quelles conditions** les rachats reprendront-ils, et préférez-vous à l'avenir les rachats, le dividende ou le désendettement ?

### Stratégie et avantage concurrentiel

**5.** Muse compte plus de 10 millions d'utilisateurs. **Quel est son coût de service par utilisateur actif aujourd'hui**, et quel revenu par utilisateur faut-il atteindre pour que Muse soit rentable après la division par dix de ce coût que vous visez ?

**6.** Amazon a bloqué Muse sur son site dès le 20 septembre. **Que se passe-t-il si les grandes plateformes marchandes, Apple et Google refusent l'accès à vos agents** ? Le protocole d'agents personnels suffit-il face à ces portiers ?

**7.** OpenAI a lancé Dots, Google déploie ses agents Gemini. **Pourquoi un utilisateur choisirait-il Muse** plutôt que l'agent intégré à son téléphone ou à son moteur de recherche ?

**8.** Quelle part de la hausse de 14 % du prix moyen des publicités provient **des gains de performance de l'IA**, et quelle part de la conjoncture ou de la composition géographique ?

### Risques

**9.** Entre l'accord de 18,6 Md$, la pénalité de 25 Md$ au Nouveau-Mexique et les procès à venir, **quelle enveloppe totale de risque juridique** jugez-vous raisonnable pour 2026-2028, et pourquoi la pénalité du Nouveau-Mexique n'a-t-elle pas été intégrée à l'accord d'août ?

**10.** La limite par défaut de deux heures par jour pour les adolescents et le blocage nocturne sont en cours d'application. **Quel impact estimez-vous sur les impressions et le chiffre d'affaires** aux États-Unis ?

**11.** Vos serveurs sont amortis sur cinq ans et demi alors que chaque génération de puces d'IA rend la précédente moins compétitive en un à deux ans. **Cette durée reste-t-elle réaliste**, et quel serait l'impact d'un retour à quatre ans ?

**12.** Une enquête de presse a estimé à environ 10 % la part du chiffre d'affaires 2024 liée à des publicités frauduleuses ou interdites. **Quelle est la part réelle aujourd'hui**, et combien coûterait son élimination ?

### Gouvernance et vision

**13.** L'accord de fidélisation vous lie à la Californie pendant huit ans et prévoit de nouveaux dividendes en actions à chaque doublement du cours. **Pourquoi ce dispositif ne passe-t-il pas par un vote des actionnaires minoritaires**, et que se passera-t-il si l'impôt sur la fortune est adopté le 3 novembre ?

**14.** Reality Labs aura perdu plus de 80 Md$ depuis 2020. **À quelle date et à quel niveau de chiffre d'affaires** les lunettes deviendront-elles rentables, et quels critères vous feraient arrêter la réalité virtuelle ?

**15.** Quel est **le risque que vous sous-estimez le plus** aujourd'hui, et qui, au sein de la direction ou du conseil, a le pouvoir de vous dire non ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse vendeuse — Démontage de l'argumentaire haussier

### 1. Le modèle économique change de nature
Les optimistes décrivent Meta comme la meilleure machine publicitaire du monde. **C'était vrai jusqu'en 2025.** En 2026, Meta est devenu un constructeur d'infrastructures qui consacre plus de la moitié de son chiffre d'affaires aux investissements et dont le flux de trésorerie disponible est négatif. Une entreprise qui rachetait 30 Md$ d'actions par an s'endette, ne rachète plus rien et prépare une classe d'actions destinée à lever des capitaux. **Le marché paie 21 fois des bénéfices comptables qui ne produisent plus de trésorerie.**

### 2. La concentration des revenus
**97,7 % du chiffre d'affaires vient de la publicité**, environ 43 % des utilisateurs nord-américains, et une part significative d'annonceurs chinois exportateurs (Temu, Shein) exposés aux droits de douane. La publicité est le poste que les entreprises coupent en premier en récession : en 2022, la croissance est tombée à −1 % et le titre a perdu 64 %. Les taux d'intérêt américains à dix ans dépassent 5 % : une récession publicitaire en 2027, au moment où les amortissements explosent, serait dévastatrice pour la marge.

### 3. L'avantage concurrentiel est plus fragile que ne le pensent les optimistes
Les effets de réseau protègent la **messagerie**, pas l'**interface d'accès à l'information et au commerce**. Si demain les consommateurs passent par un agent d'IA pour acheter, s'informer et se divertir, le fil d'actualité perd son rôle de vitrine. Meta le sait, d'où Muse. Mais dans cette nouvelle bataille, Meta part **sans système d'exploitation, sans moteur de recherche, sans cloud et sans site marchand** — et ses concurrents viennent de lui fermer leurs portes (Amazon).

### 4. Le concurrent le plus dangereux : OpenAI (et non TikTok)
Les optimistes surveillent TikTok. **Erreur de cible.** OpenAI compte plusieurs centaines de millions d'utilisateurs hebdomadaires, lance des agents (Dots), de la publicité et du commerce dans ses produits, et attire les meilleurs chercheurs. Chaque minute passée à converser avec un assistant est une minute retirée au fil d'Instagram, et chaque achat délégué à un agent tiers est une conversion que Meta ne facturera pas.

### 5. Les pires allocations de capital
**Le métavers** : plus de 80 Md$ de pertes cumulées depuis 2020 pour des casques dont les ventes baissent. **La stratégie « open source » (Llama)**, largement mise de côté en 2025-2026 au profit de modèles propriétaires après l'accueil décevant de Llama 4. **Scale AI** : 14,3 Md$ pour 49 % d'une société et le recrutement de son fondateur. **2026** : plan d'investissement relevé trois fois en neuf mois. La même direction demande aujourd'hui un chèque en blanc de plusieurs centaines de milliards de dollars.

### 6. Comptabilité, incitations et gouvernance
Amortissement des serveurs allongé à cinq ans et demi, coentreprises garanties hors bilan, près de 700 Md$ d'engagements, passifs juridiques encore mal chiffrés. Côté incitations : un fondateur qui contrôle les votes, crée par simple consentement écrit une classe d'actions sans droit de vote, obtient la liberté de vendre 20 % de ses nouvelles actions et des dividendes en actions à chaque doublement du cours. **Les actionnaires minoritaires financent ; ils ne décident de rien.**

### 7. Les hypothèses que le cours actuel exige
À 697,52 $, soit environ 22 fois le BPA 2027 estimé, le marché suppose : une croissance du chiffre d'affaires supérieure à 20 % en 2027 et à 15 % en 2028, une marge opérationnelle stabilisée autour de 33 % malgré l'explosion des amortissements, un FCF redevenu positif en 2027, **des pénalités juridiques contenues sous 20 Md$ supplémentaires** et aucune émission significative d'actions C.

### 8. Et si la croissance déçoit de 20 à 30 % ?
Si la croissance du chiffre d'affaires 2027-2028 est inférieure de 25 % au scénario central (environ 16 % puis 13 %) avec des charges à peine ajustées, la marge tombe vers 28-30 % et le BPA 2028 vers **28 à 30 $** au lieu de 37 $. Avec un multiple ramené à 17 fois (celui d'un groupe capitalistique à faible FCF), le titre vaudrait **environ 480 à 510 $ (−27 à −31 %)**. En ajoutant 25 Md$ de pénalité confirmée en appel et une dilution de 3 % par les actions C, on s'approche de **450 $ (−35 %)**.

### Le scénario catastrophe unique
**Un « moment 2022 » de l'IA** : une récession publicitaire en 2027 coïncide avec le pic des investissements et l'entrée au bilan de centaines de milliards de baux. Meta doit choisir entre couper ses investissements (et perdre la course à l'IA) ou émettre massivement des actions C (et diluer ses actionnaires). Le marché revalorise Meta comme un opérateur d'infrastructures, et le titre perd 40 à 50 %. **Plausibilité : 15 à 20 %** à l'horizon de deux ans — minoritaire tant que la publicité croît de plus de 20 %, mais nettement plus élevée qu'il y a deux ans.

### Conclusion vendeuse
Meta reste une entreprise exceptionnelle, et le titre n'est pas cher sur les bénéfices. Mais **l'argument « 21 fois les bénéfices, c'est donné » ignore que ces bénéfices ne se transforment plus en trésorerie** et que la direction a déjà préparé les outils pour faire financer la suite par les actionnaires. La thèse vendeuse ne repose pas sur un effondrement de la publicité ; elle repose sur un **rendement décevant des investissements d'IA**, une hypothèse que personne, pas même Meta, ne peut encore réfuter.`,
  },
];

export default { ...meta, modules };
