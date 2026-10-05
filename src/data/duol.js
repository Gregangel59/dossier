// ============================================================
//  DOSSIER : Duolingo, Inc. (DUOL)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Données publiées jusqu'au 2 octobre 2026
//  (cours de référence : clôture du 2 octobre 2026, 144,27 $).
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "duol",                     // identifiant d'URL : /dossier/duol
  ticker: "DUOL",
  name: "Duolingo, Inc.",
  exchange: "NASDAQ",
  sector: "Éducation numérique grand public (applications d'apprentissage)",
  initials: "DUOL",                 // affiché dans la pastille (= ticker)
  tagline: "L'application éducative la plus utilisée au monde, qui sacrifie une année de monétisation pour viser 100 millions d'utilisateurs quotidiens.",
  riskScore: 55,                    // score du rapport de risque (grille v1)
  riskLabel: "Risque modéré",       // indicatif : la couleur se dérive toujours de riskScore
  // Nom du fichier HTML déposé dans public/rapports/ :
  riskReport: "duol.html",
  updated: "2026-10",               // période des données
  published: "2026-10-05",         // date exacte de publication (tri « À la une » du portail)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Duolingo édite **l'application d'apprentissage la plus utilisée au monde** : des leçons courtes, ludiques et gratuites, principalement de langues, complétées depuis 2023 par les mathématiques, la musique et, depuis 2025, les échecs. Fondée à Pittsburgh en 2011 par **Luis von Ahn** et **Severin Hacker**, l'entreprise est cotée au Nasdaq depuis juillet 2021 (introduction à 102 $). Elle compte environ 900 salariés.

Le modèle est un **freemium à très grande échelle** :
- **L'immense majorité des utilisateurs ne paie rien** : 58,7 M d'utilisateurs actifs quotidiens (DAU) et 140,6 M d'utilisateurs mensuels (MAU) au T2 2026.
- **Une minorité s'abonne** : 12,7 M d'abonnés payants fin juin 2026 (+17 % sur un an), soit environ 9 % des MAU.
- **La gratuité est le moteur d'acquisition** : la croissance est très majoritairement organique, portée par le bouche-à-oreille, la mascotte (la chouette « Duo ») et plus d'un milliard d'impressions organiques par trimestre sur les réseaux sociaux.

Le cœur de la valeur est la **mécanique d'habitude** : séries de jours consécutifs (« streaks »), ligues, notifications, et un moteur d'expérimentation interne (« Green Machine ») qui teste des centaines de changements de produit et ne garde que ceux qui améliorent la rétention, l'apprentissage ou la monétisation.

**Ordres de grandeur** : CA 2025 de **1 037,6 M$ (+39 %)**, bookings de 1 158,4 M$, free cash-flow de 360,4 M$ (34,7 % du CA). Prévision 2026 : CA d'environ **1 207 M$ (+16 %)**, bookings ~1 285 M$ (+11 %), EBITDA ajusté ~320 M$ (26,5 %).

## Principaux produits et services

**Abonnements (86 % du CA du T2 2026, 258,0 M$, +22 %)** :
- **Super Duolingo** : sans publicité, énergie illimitée, leçons de rattrapage personnalisées ; offre familiale jusqu'à six comptes.
- **Fonctions IA** : l'ancien palier Max (« Explain My Answer », jeux de rôle, **Video Call** avec le personnage Lily) est en cours d'intégration dans Super depuis septembre 2026 ; la plupart des nouveaux abonnés ont déjà accès à Video Call.

**Publicité (7 %, 21,1 M$, +2 %)** : affichée aux utilisateurs gratuits.

**Duolingo English Test (3 %, 10,1 M$, stable)** : test d'anglais en ligne, accepté par des milliers d'universités et d'organismes d'admission.

**Achats intégrés (3 %, 8,0 M$, −23 %)** : monnaie virtuelle (gemmes) ; en recul, l'entreprise privilégiant l'abonnement et la gratuité sans friction.

## Clients, fournisseurs, concurrents

**Clients** : des particuliers dans presque tous les pays. **Plus de la moitié des bookings provient de l'extérieur des États-Unis** ; la Chine, l'Inde et l'Indonésie font partie des marchés de croissance mis en avant par la direction.

**Fournisseurs** : **Apple** et **Google**, qui distribuent l'application et prélèvent une commission sur les abonnements souscrits dans leurs magasins ; fournisseurs de modèles d'IA et d'hébergement en nuage ; régies publicitaires ; créateurs de contenu et influenceurs.

**Concurrents** : **Babbel**, **Busuu** (Chegg), **Rosetta Stone** (IXL Learning), **Memrise**, **Speak** (application de conversation par IA soutenue par OpenAI), plateformes de tutorat (**Preply**, **italki**) et, surtout, les **assistants d'IA généralistes** (ChatGPT en mode vocal, Gemini, outils de pratique de Google Traduction). Sur les nouvelles matières : **Chess.com** (échecs), **Khan Academy** et **Photomath** (mathématiques), **Simply** et **Yousician** (musique).

## Modalités contractuelles et de paiement

- **Abonnements majoritairement annuels, payés d'avance** : l'encaissement intervient à la souscription, le chiffre d'affaires est reconnu sur douze mois. D'où l'écart entre **bookings** (encaissements) et **chiffre d'affaires**, et des produits constatés d'avance de **505 M$** au bilan fin juin 2026.
- **Paiement via les magasins d'applications** pour une large part des abonnements mobiles, avec commission prélevée à la source ; paiement direct sur le web pour une partie croissante.
- **Essais gratuits** : allongés en 2026, ce qui retarde mécaniquement les bookings mais augmente la conversion et les DAU selon la direction.
- **Aucune contrainte de durée** : l'abonné peut résilier à l'échéance ; le renouvellement repose entièrement sur l'habitude et la valeur perçue.

**Lecture** : Duolingo est une **machine à engagement rentable** — 72 % de marge brute, trésorerie nette de 1,4 Md$, aucune dette. En 2026, la direction a délibérément ralenti la monétisation (environ 50 M$ de bookings auxquels elle renonce) pour élargir la base d'utilisateurs. Toute la question d'investissement porte sur la **conversion future de ces utilisateurs en revenus**.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Duolingo dans la chaîne de valeur

Duolingo est un **éditeur de logiciel grand public** : il n'a ni usine ni stock. Sa « chaîne d'approvisionnement » est faite de **contenus pédagogiques**, de **capacité de calcul** et de **canaux de distribution**. Il occupe la place d'**agrégateur d'attention** entre des fournisseurs technologiques puissants en amont et des centaines de millions d'apprenants en aval.

### Amont — Intrants

**Contenus pédagogiques** :
- Équipes internes de spécialistes de l'apprentissage et de concepteurs de cours
- **IA générative** pour produire et traduire les cours : 148 nouveaux cours de langues lancés en 2025, créés en une fraction du temps historique
- Recours décroissant aux prestataires externes depuis le mémo « AI-first » d'avril 2025

**Technologie et calcul** :
- Fournisseurs de grands modèles de langage (dont OpenAI, partenaire historique des fonctions Max)
- Hébergement en nuage (principalement Amazon Web Services)
- Synthèse et reconnaissance vocales pour la pratique orale et Video Call

**Création et marque** :
- Studio d'animation interne (racheté en 2022) pour l'univers des personnages
- Réseau de **centaines de créateurs et influenceurs** dans le monde ; en Chine, en Indonésie et en Inde, environ deux tiers des impressions sociales viennent de contenus d'influenceurs

---

### Duolingo — Conception et exploitation

**Produit** : application iOS et Android, site web, moteur d'expérimentation « Green Machine » (centaines de tests A/B en continu), modèle de personnalisation « Birdbrain » qui ajuste la difficulté de chaque exercice.

**Monétisation** : abonnements (Super, offre familiale), publicité, Duolingo English Test, achats intégrés.

**Marketing** : réseaux sociaux organiques (plus d'un milliard d'impressions par trimestre), créateurs, et depuis 2025 un **marketing à la performance** structuré (canaux et créations publicitaires multipliés par trois).

---

### Distribution et encaissement

- **Apple App Store** et **Google Play** : principaux points d'accès, perception d'une commission sur les abonnements souscrits dans l'application
- **Paiement web direct** : plus de marge, mais moins de conversion
- **Régies publicitaires** (réseaux de publicité mobile) pour la monétisation des utilisateurs gratuits

---

### Aval — Utilisateurs et clients

**Apprenants individuels** : 140,6 M de MAU, dont 58,7 M actifs chaque jour ; profils très variés, des élèves aux retraités.

**Abonnés payants** : 12,7 M fin juin 2026.

**Institutions** : universités et organismes qui acceptent le **Duolingo English Test** pour les admissions ; écoles via **Duolingo for Schools** (outil gratuit pour les enseignants).

**Annonceurs** : marques qui achètent l'inventaire publicitaire via les régies.

---

### Cartographie du flux

| Étape | Acteurs | Rôle |
|---|---|---|
| Savoir et contenu | Experts internes, IA générative, anciens prestataires | Création des cours |
| Calcul et IA | Fournisseurs de modèles (dont OpenAI), AWS | Fonctions conversationnelles, hébergement |
| Produit | **Duolingo** (Pittsburgh) | Application, tests A/B, personnalisation |
| Notoriété | Réseaux sociaux, créateurs, marketing à la performance | Acquisition d'utilisateurs |
| Distribution | Apple App Store, Google Play, web | Téléchargement et encaissement |
| Monétisation | Abonnés, annonceurs, candidats au test d'anglais | Revenus |

---

### Le point de friction : les gardiens de la distribution

Duolingo ne contrôle ni le téléphone ni le magasin d'applications. **Apple et Google** fixent les règles de paiement et prélèvent leur commission ; ce sont aussi, avec OpenAI, des **concurrents potentiels** sur l'apprentissage assisté par IA. La baisse des coûts unitaires d'IA a soutenu la marge brute en 2026 (72,6 % au T2), mais la dépendance à ces quelques plateformes reste la principale vulnérabilité structurelle de la chaîne.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Duolingo ne publie **qu'un seul secteur opérationnel**. Il n'existe donc ni EBITDA ni résultat net par segment. Les ventilations disponibles portent sur les **types de revenus** (abonnements, publicité, test d'anglais, achats intégrés) et sur une répartition géographique sommaire ; les marges sont consolidées.

### Par type de revenus

| Ligne | T2 2025 | T2 2026 | Variation | Tendance |
|---|---|---|---|---|
| Abonnements | 210,7 M$ | **258,0 M$** | +22 % | Moteur quasi exclusif |
| Publicité | 20,6 M$ | 21,1 M$ | +2 % | Comparaison difficile (2025 exceptionnel) |
| Duolingo English Test | 10,1 M$ | 10,1 M$ | 0 % | Stagnation |
| Achats intégrés | 10,4 M$ | 8,0 M$ | −23 % | Recul assumé |
| Autres | 0,5 M$ | 1,3 M$ | +148 % | Marginal |
| **Total** | **252,3 M$** | **298,5 M$** | **+18 %** | |

**Lecture** : l'abonnement pèse désormais **86 % du CA**, contre 84 % un an plus tôt. Le chiffre d'affaires croît plus vite que les bookings (+8 %) parce qu'il reconnaît, sur douze mois, des abonnements encaissés au cours de 2025, année de très forte croissance.

### Trajectoire trimestrielle consolidée

| Trimestre | CA | Croiss. a/a | Bookings | DAU (croiss.) | Abonnés payants | Marge EBITDA aj. | Résultat net |
|---|---|---|---|---|---|---|---|
| T1 2025 | 230,7 M$ | +38 % | 271,6 M$ | 46,6 M (+49 %) | 10,3 M | 27,2 % | 35,1 M$ |
| T2 2025 | 252,3 M$ | +41 % | 268,0 M$ | 47,7 M (+40 %) | 10,9 M | 31,2 % | 44,8 M$ |
| T3 2025 | 271,7 M$ | +41 % | ~281,9 M$ | 50,5 M (+36 %) | 11,5 M | 29,4 % | 292,2 M$ (1) |
| T4 2025 | 282,9 M$ | +35 % | 336,8 M$ | 52,7 M (+30 %) | 12,2 M | 29,8 % | 42,0 M$ |
| T1 2026 | 292,0 M$ | +27 % | 308,5 M$ | 56,5 M (+21 %) | 12,5 M | 28,6 % | 43,5 M$ |
| T2 2026 | **298,5 M$** | **+18 %** | **289,1 M$** | **58,7 M (+23 %)** | **12,7 M** | **25,9 %** | **33,2 M$** |

*(1) Le T3 2025 inclut un crédit d'impôt exceptionnel de 222,7 M$ (reprise de la dépréciation des actifs d'impôts différés).*

### Pourquoi ces chiffres ont bougé

- **2025, année de monétisation maximale** : lancement de l'« énergie » (qui remplace les cœurs et limite l'usage gratuit), hausse de prix, publicité très dynamique. Les bookings progressent fortement… mais la croissance des DAU ralentit de +49 % à +30 %.
- **Novembre 2025, pivot stratégique** : la direction donne la priorité à la croissance des utilisateurs et à la qualité pédagogique. Elle estime renoncer à **plus de 50 M$ de bookings** en 2026 pour rendre l'expérience gratuite plus généreuse.
- **2026, année d'investissement** : bookings ramenés à +8–14 %, marge EBITDA ajustée en baisse (31,2 % → 25,9 % au T2), mais **réaccélération des DAU** au T2 (+23 %) et rétention record (84 %).
- **Marge brute stable à ~72–73 %** : la hausse des usages d'IA est compensée par la baisse rapide de leur coût unitaire.

---

### Répartition géographique

| Zone | Poids | Lecture |
|---|---|---|
| États-Unis | Moins de la moitié des bookings | Marché le plus monétisé, cœur de l'abonnement |
| Reste du monde | Plus de la moitié des bookings | Europe, Asie, Amérique latine ; forte croissance des utilisateurs en Chine, Inde, Indonésie |

**Point clé** : l'exposition internationale crée un **risque de change** significatif. La direction estime qu'une variation de 1 % du dollar contre son panier de devises représente environ **4 M$ de bookings** au second semestre 2026.

---

### Perspectives 2026 (prévision du 5 août)

- Bookings **~1 285 M$ (+10,9 %)**, CA **~1 207 M$ (+16,3 %)**, EBITDA ajusté **~320 M$ (26,5 %)**, relevé de près d'un point
- T3 2026 : bookings ~307 M$ (+8,9 %), CA ~302 M$ (+11,1 %), EBITDA ajusté ~76 M$ (25,2 %)
- Marge brute ~71,6 % sur l'année ; rémunération en actions ~15 % du CA ; taux d'imposition effectif de 23 à 25 %`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. La marque et la culture — moat FORT
Duolingo est l'une des rares applications éducatives devenues un **phénomène culturel** : mascotte reconnue mondialement, mèmes, campagnes virales (la « mort » de Duo en 2025, la réanimation des séries en juin 2026 avec 15,4 M de participants). Le coût d'acquisition d'un utilisateur est **quasi nul** pour l'essentiel de la croissance, là où les concurrents paient la publicité. Aucun rival du secteur ne dispose de cette notoriété spontanée.

### 2. L'habitude et la rétention — moat FORT
Les séries quotidiennes, les ligues et les notifications créent un **coût de changement psychologique** : abandonner sa série de 500 jours a un prix émotionnel. Le **taux de rétention des utilisateurs actuels (CURR) atteint 84 %**, un record. Cette mécanique d'habitude, affinée par des milliers de tests, est difficile à copier même par un concurrent techniquement supérieur.

### 3. Données et moteur d'expérimentation — moat RÉEL
Des centaines de millions d'exercices réalisés chaque jour alimentent le modèle de personnalisation « Birdbrain » et la « Green Machine » de tests A/B. Plus la base est large, plus les tests sont rapides et précis : un **effet d'échelle sur l'amélioration du produit**. Limite : les grands modèles de langage réduisent l'avantage informationnel sur la qualité pédagogique pure.

### 4. Échelle et coût unitaire de l'IA — moat RÉEL
Avec 58,7 M d'utilisateurs quotidiens, Duolingo négocie ses coûts de calcul et amortit ses développements d'IA sur une base incomparable à celle de Babbel ou Speak. La marge brute de 72,6 % malgré le déploiement de Video Call en est la preuve.

### 5. Le contenu multi-matières — moat en construction
Langues, mathématiques, musique, échecs : chaque matière ajoutée augmente le temps passé et la valeur de l'abonnement, à coût marginal faible. Les échecs ont été la matière lancée la plus rapidement de l'histoire de l'entreprise. Encore peu monétisé.

### Ce qui n'est PAS un moat
- **La technologie d'IA elle-même** : les modèles sont fournis par des tiers et accessibles à tous.
- **Les contrats** : aucun engagement de durée, résiliation libre à l'échéance.

## Positionnement vs concurrence

| Critère | Duolingo | Babbel | Speak | Assistants IA (ChatGPT, Gemini) | Tutorat (Preply) |
|---|---|---|---|---|---|
| Prix pour l'utilisateur | Gratuit / abonnement modéré | Abonnement | Abonnement | Gratuit / abonnement généraliste | Payé à l'heure |
| Notoriété | Très forte | Moyenne (Europe) | Faible | Très forte | Moyenne |
| Gamification et habitude | Très forte | Faible | Moyenne | Nulle | Faible |
| Conversation libre | En progrès (Video Call) | Limitée | Forte | Très forte | Très forte (humain) |
| Parcours structuré | Très fort | Fort | Moyen | Faible | Variable |
| Matières hors langues | Oui | Non | Non | Toutes | Oui |

**Valeur perçue et image** : Duolingo est perçu comme **ludique, accessible et gratuit**, ce qui est sa force d'acquisition… et sa faiblesse sur la crédibilité pédagogique aux niveaux avancés. Le chantier « enseigner mieux » de 2026 (parcours jusqu'au niveau B2, place centrale de l'oral) vise précisément cette faiblesse. Le mémo « AI-first » d'avril 2025 a abîmé l'image auprès d'une partie de la communauté, sans effet mesurable sur l'usage depuis.

## Pouvoir de négociation

- **Vis-à-vis des utilisateurs** : **modéré** — le prix d'abonnement est contraint par l'alternative gratuite (la sienne et celle des assistants IA) ; la hausse de prix de 2025 est passée, mais la direction privilégie désormais la conversion à l'extraction.
- **Vis-à-vis d'Apple et Google** : **faible** — commissions imposées, règles de paiement non négociables, visibilité dans les classements dépendante des algorithmes des magasins.
- **Vis-à-vis des fournisseurs d'IA** : **croissant** — volume d'appels considérable, possibilité de mettre en concurrence plusieurs modèles ; les coûts unitaires baissent chaque trimestre.
- **Vis-à-vis des annonceurs** : **modéré** — audience très engagée, mais inventaire vendu via des régies tierces.
- **Vis-à-vis des institutions (test d'anglais)** : **modéré** — alternative moins chère au TOEFL et à l'IELTS, mais croissance à l'arrêt en 2026.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Éducation numérique et abonnements grand public (octobre 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E | Rdt div. | ROE moy. 5 ans |
|---|---|---|---|---|---|---|---|
| **Duolingo** | **DUOL US** | **~6,8 Md$** | **~4,7× (TTM)** | **~35–40×** | **~46× TTM · ~52× 2026e** | **0 %** | **faible (pertes 2021-2022)** |
| Spotify | SPOT US | ~130 Md$ | ~6× | ~45× | ~60× TTM | 0 % | négatif puis positif |
| Pearson | PSON LN | ~11 Md$ | ~2,5× | ~15× | ~17× | ~2,3 % | ~8 % |
| Match Group | MTCH US | ~8 Md$ | ~3× | ~12× | ~11× | ~2,3 % | n.s. (fonds propres négatifs) |
| Coursera (fusion Udemy) | COUR US | ~2,5 Md$ | ~1,5× | n.s. | n.s. (GAAP) | 0 % | négatif |
| Chegg | CHGG US | < 0,5 Md$ | < 1× | n.s. | n.s. | 0 % | négatif |

*Duolingo : cours de 144,27 $ au 2 octobre 2026, capitalisation ~6,75 Md$, trésorerie et placements ~1,4 Md$, CA TTM ~1,15 Md$, BPA GAAP 2026 estimé ~2,80 $. Concurrents directs non cotés : Babbel, Busuu (filiale de Chegg), Rosetta Stone (IXL Learning), Speak, Preply. Multiples des pairs : ordres de grandeur à confirmer sur Bloomberg avant toute utilisation chiffrée.*

---

### Analyse comparative

**Pas de pair coté direct**
Aucun spécialiste de l'apprentissage des langues de taille comparable n'est coté. Les concurrents directs (Babbel, Busuu, Rosetta Stone, Speak) sont privés ou intégrés dans des groupes plus larges, et beaucoup plus petits. Le benchmark se fait donc avec deux familles : l'**éducation numérique cotée** (Coursera, Pearson, Chegg) et les **abonnements grand public en freemium** (Spotify, Match Group).

**Éducation numérique — la démonstration de la supériorité du modèle**
Coursera (qui fusionne avec Udemy) et Chegg ont vu leur modèle bousculé par l'IA générative ; Chegg en particulier a perdu l'essentiel de sa valeur depuis 2023. Pearson, rentable et distributeur, se paie modestement. Duolingo est **le seul acteur grand public de l'éducation à combiner croissance à deux chiffres, marge brute supérieure à 70 % et free cash-flow supérieur à 30 % du CA**.

**Spotify — le miroir le plus instructif**
Même modèle freemium, même conversion progressive de gratuits en abonnés, même phase où le marché a douté de la capacité à monétiser (2022-2023) avant un fort rerating. Spotify se paie aujourd'hui plus cher que Duolingo sur le CA. C'est la **référence implicite** des analystes haussiers.

**Match Group — le contre-exemple**
Applications grand public matures, croissance des utilisateurs en berne, multiples comprimés vers 11× les bénéfices. C'est le scénario que redoutent les baissiers si l'engagement de Duolingo s'érode face à l'IA.

---

### Lecture de la valorisation

À ~4,7× le CA et ~16× l'EBITDA ajusté, Duolingo se paie **au plus bas de son histoire boursière** (son multiple de CA a dépassé 30× en mai 2025). Le P/E GAAP reste élevé (~42× les bénéfices des douze prochains mois) parce que le bénéfice comptable est déprimé par la rémunération en actions (~15 % du CA) et par le retour à un taux d'imposition normal. **Sur le free cash-flow, le rendement atteint ~6 % de la capitalisation** (~7,5 % de la valeur d'entreprise) — un niveau de valeur de rendement plus que de valeur de croissance. Le ROE moyen sur cinq ans, faible, reflète des pertes jusqu'en 2022 et un résultat 2025 gonflé par un crédit d'impôt : il est peu informatif.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 5 août 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus / prévision | Écart | T2 2025 |
|---|---|---|---|---|
| Chiffre d'affaires | **298,5 M$** | ~295,5 M$ | **+1 %** | 252,3 M$ |
| BPA GAAP dilué | **0,66 $** | ~0,58–0,61 $ | **+8 à +14 %** | 0,91 $ |
| Bookings | 289,1 M$ | 283,5 M$ (prévision) | +2 % | 268,0 M$ |
| DAU | **58,7 M (+23 %)** | ~+21 % attendu | Au-dessus | 47,7 M |
| Abonnés payants | 12,7 M (+17 %) | — | Léger manque | 10,9 M |
| Marge brute | 72,6 % | ~71,0 % (prévision) | +160 pb | 72,4 % |
| EBITDA ajusté | 77,3 M$ (25,9 %) | ~71 M$ (prévision) | +9 % | 78,7 M$ (31,2 %) |
| Résultat net | 33,2 M$ | — | — | 44,8 M$ |
| Free cash-flow | 78,6 M$ (26,3 %) | — | — | 86,3 M$ (34,2 %) |

**Verdict** : dépassement sur le CA, le BPA, l'EBITDA et les utilisateurs ; **léger manque sur les abonnés payants** et une prévision de CA du T3 (302 M$) très légèrement inférieure au consensus (~304 M$). Le titre a baissé après quatre des cinq dernières publications, presque toujours supérieures aux attentes.

---

### Facteurs clés

- **Utilisateurs** : DAU +23 %, en **accélération de deux points** par rapport au T1 ; MAU +10 %, +4 points. Trois causes selon la direction : améliorations du produit, marketing (créateurs et marketing à la performance), et l'opération ponctuelle de réanimation des séries (15,4 M de participants).
- **Abonnements** : CA abonnements +22 % ; bookings d'abonnements +10 % seulement, freinés par une **base de comparaison exigeante** (lancement de l'énergie, hausse de prix et publicité exceptionnelle au T2 2025).
- **Abonnés payants** : +0,2 M seulement sur le trimestre — la conversion reste le point faible du pivot.
- **Décélération du CA** : +27 % au T1, +18 % au T2, ~+11 % attendu au T3. C'est la conséquence mécanique du ralentissement des bookings depuis fin 2025.

---

### Évolution des marges

- **Marge brute** : 72,6 %, en légère hausse sur un an, grâce à un déploiement mesuré des fonctions IA coûteuses (Video Call) et à la baisse des coûts unitaires d'IA.
- **Marge d'exploitation GAAP** : 11,4 % (33,9 M$), contre 13,2 % un an plus tôt ; les charges d'exploitation progressent de 23 % (R&D +25 %, marketing +35 %).
- **EBITDA ajusté** : 25,9 % contre 31,2 % — une baisse **voulue** et annoncée en février ; la prévision annuelle est relevée à 26,5 %.

---

### Prévisions et perspectives

| Indicateur 2026 | Février | Mai | Août |
|---|---|---|---|
| Bookings | 1 274–1 298 M$ | ~1 280 M$ | **~1 285 M$** |
| Chiffre d'affaires | 1 197–1 221 M$ | ~1 205 M$ | **~1 207 M$** |
| EBITDA ajusté | 299–305 M$ | ~310 M$ | **~320 M$** |

**Changement de ton** : plus affirmé. En mai, la direction jugeait « trop tôt » pour savoir si la stratégie fonctionnait ; en août, elle affirme que les résultats **renforcent sa confiance** et prévoit une croissance des DAU **supérieure à 20 %** jusqu'à la fin de l'année. Les objectifs de bookings et de CA sont tenus, sans relèvement.

---

### Signaux d'alerte du bilan

- **Trésorerie** : 1,18 Md$ de liquidités, 133 M$ de placements à court terme et 103 M$ à long terme ; **aucune dette financière**.
- **Produits constatés d'avance** : 505 M$, stables depuis fin 2025 (496 M$) — cohérent avec le ralentissement des bookings ; à surveiller comme indicateur avancé du CA.
- **Créances clients** : 131 M$ contre 163 M$ fin 2025 (effet saisonnier des encaissements de fin d'année via les magasins d'applications).
- **Impôts différés actifs** : 206 M$, issus de la reprise de dépréciation de 2025 ; leur utilisation explique un taux d'imposition comptable désormais normal (~27 % au T2) sans décaissement équivalent.
- **Rachats d'actions** : 71,9 M$ (708 000 actions) au 1ᵉʳ août sur un programme de 400 M$, à un prix moyen d'environ 101 $ au premier semestre.

---

### Réaction du marché

Le titre a perdu **environ 10 à 15 %** le 6 août (clôture la veille à 135,32 $, échanges autour de 113–122 $ en séance). Le marché a sanctionné la décélération du CA et la conversion lente, pas les chiffres du trimestre. Puis le récit s'est retourné : relèvements d'objectifs en août (Wedbush, JPMorgan), **relèvement d'Evercore ISI à « Surperformance » le 1ᵉʳ septembre** (objectif porté de 105 $ à 210 $), commentaires positifs à la conférence Citi du 9 septembre. Le titre cote **144,27 $** au 2 octobre, au-dessus de l'objectif moyen des analystes (~133 $) : le marché a recommencé à payer pour la croissance des utilisateurs.

**Prochain rendez-vous** : résultats du T3 2026 attendus le 3 novembre. Le consensus vise ~309 M$ de CA et ~0,58 $ de BPA.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences de résultats — Priorités de la direction

### Évolution du ton

**T2 2025 (6 août 2025) — Euphorie** : croissance du CA de 41 %, prévision annuelle relevée, envolée du titre de plus de 30 % en une séance. Le discours célèbre l'IA comme accélérateur de contenu et de monétisation (Max, Video Call).

**T3 2025 (5 novembre 2025) — Le pivot** : malgré un trimestre supérieur aux attentes, Luis von Ahn annonce que l'entreprise va **privilégier l'enseignement et la croissance des utilisateurs** au détriment de la monétisation de court terme. Prévision de bookings du T4 sous le consensus : **−25 %, la pire séance de l'histoire du titre**.

**T4 2025 (26 février 2026) — L'année d'investissement assumée** : la direction chiffre son choix — environ 11 % de croissance des bookings en 2026 contre près de 20 % possibles avec l'ancienne stratégie, plus de 50 M$ de bookings sacrifiés, marge EBITDA ramenée vers 25 %. Objectif affiché : **100 M de DAU à moyen terme**. Annonce d'un rachat d'actions de 400 M$ et première conférence de la nouvelle directrice financière, **Gillian Munson**. Le titre perd plus de 20 %.

**T1 2026 (4 mai 2026) — Prudence** : DAU +21 %, « conforme aux attentes ». Le ton est volontairement mesuré : il est **« trop tôt »** pour juger la stratégie. La direction prévient que le T2 sera le trimestre le plus faible en bookings.

**T2 2026 (5 août 2026) — Confiance retrouvée** : DAU +23 %, rétention record. La direction affirme que les résultats **confortent la stratégie** et relève sa marge d'EBITDA. Sur la monétisation, elle reconnaît que la traduction des DAU en revenus « prendra du temps ».

---

### Priorités répétées de la direction

**1. Croissance des utilisateurs avant la monétisation** — Le fil rouge depuis novembre 2025. Les leviers : expérience gratuite plus généreuse, marketing élargi, nouvelles matières comme futurs moteurs de croissance.

**2. « Enseigner mieux »** — L'oral au centre de l'expérience, parcours étendus jusqu'au niveau B2, Video Call élargi aux abonnés existants. Luis von Ahn y voit l'une des plus grandes opportunités de croissance de long terme, via le bouche-à-oreille.

**3. Une monétisation sans friction** — Allongement des essais gratuits, intégration des fonctions IA de Max dans Super, recherche de revenus qui ne pénalisent pas les utilisateurs gratuits.

**4. La discipline financière** — Objectifs annuels tenus au trimestre près, marge brute protégée par la baisse des coûts d'IA, rachats d'actions qui compensent la dilution de 2024-2025.

**5. L'IA comme outil, pas comme menace** — La direction présente l'IA comme le moyen d'enseigner mieux à grande échelle, et souligne que l'usage de Duolingo coexiste avec celui des assistants conversationnels.

---

### Analyse du sentiment

| Appel | Ton | Confiance | Sujets défensifs |
|---|---|---|---|
| T2 2025 | Euphorique | Très élevée | Peu |
| T3 2025 | Visionnaire, en rupture | Élevée sur le long terme | Bookings, menace de l'IA |
| T4 2025 | Assumé, pédagogique | Élevée, prudente sur 2026 | Marges, rentabilité 2026 |
| T1 2026 | Mesuré | Moyenne (« trop tôt ») | Conversion, abonnés |
| T2 2026 | Confiant | En hausse | Monétisation, rémunération en actions |

- **Crédibilité** : la direction a tenu chacune de ses prévisions depuis le pivot ; la réaccélération des DAU au T2 est la **première preuve tangible** que la stratégie fonctionne.
- **Transparence** : bonne sur les utilisateurs, la rétention et les arbitrages assumés ; **plus floue sur la date et l'ampleur de la reprise des bookings** — aucun objectif 2027 n'a été donné.
- **Signal à surveiller** : la formule « cela prendra du temps », répétée en août, laisse ouverte la possibilité d'une deuxième année d'investissement en 2027.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### Luis von Ahn — Cofondateur, président-directeur général

**Parcours** : informaticien d'origine guatémaltèque, professeur à l'université Carnegie Mellon, lauréat d'une bourse MacArthur. Coinventeur du **CAPTCHA** puis fondateur de **reCAPTCHA**, revendu à Google en 2009 — une technologie qui transformait un geste anodin de millions d'internautes en travail utile (la numérisation de livres). Duolingo reprend la même intuition : rendre gratuit et massif ce qui était rare et payant.

**Bilan chiffré** :
- **De zéro à plus d'un milliard de dollars de CA** : 1 037,6 M$ en 2025, après 15 trimestres consécutifs de croissance supérieure à 30 % jusqu'à fin 2025.
- **Rentabilité construite sans dette** : free cash-flow de 360 M$ en 2025, trésorerie nette de 1,4 Md$.
- **Décisions contestées** : le mémo « AI-first » d'avril 2025, mal reçu par la communauté (il l'a reconnu publiquement en mai 2025) ; le pivot de novembre 2025, qui a coûté plus de la moitié de la capitalisation en quelques mois.

**Ancienneté et participation** : 15 ans à la tête de l'entreprise. Les deux fondateurs détiennent la quasi-totalité des **actions de classe B (20 voix par action)** — environ 6,4 M d'actions, soit près de **trois quarts des droits de vote** pour environ 13 % du capital. Luis von Ahn cède régulièrement des titres dans le cadre de plans programmés (règle 10b5-1), par exemple environ 41 000 actions vers 150 $ les 21 et 22 septembre 2026.

---

### Severin Hacker — Cofondateur, directeur technique
Ancien doctorant de Luis von Ahn à Carnegie Mellon, architecte de la plateforme et du moteur d'expérimentation. Détient environ 3 M d'actions de classe B via un trust familial.

### Gillian Munson — Directrice financière (depuis début 2026)
Ancienne directrice financière de la plateforme vidéo Vimeo, expérience de la banque d'investissement et du capital-risque. Premier bilan : trois trimestres de prévisions tenues, lancement du rachat d'actions, relèvement de la marge d'EBITDA en août. Elle a succédé à Matt Skaruppa.

---

### Allocation du capital — Historique

| Décision | Montant | Lecture |
|---|---|---|
| Introduction en bourse (2021) | 102 $ par action | Constitution de la trésorerie |
| Petites acquisitions (studio d'animation, technologies) | Goodwill total de 35 M$ | Disciplinées, sans effet sur le bilan |
| Investissement dans l'IA et les nouvelles matières | Intégré aux charges de R&D | Capitalisation logicielle minime |
| Sacrifice de bookings en 2026 | > 50 M$ | Pari sur la croissance des utilisateurs |
| Programme de rachat | 400 M$ (fév. 2026) | 71,9 M$ exécutés au 1ᵉʳ août, à ~101 $ en moyenne |
| Dividende | Aucun | Réinvestissement et rachats |

**ROE / ROIC** : le capital investi d'exploitation est **négatif** (les clients paient d'avance, le modèle ne demande ni stocks ni usines) ; le ROIC est donc mathématiquement très élevé et peu informatif. Le **ROE normalisé** (hors crédit d'impôt exceptionnel) avoisine **13 %**, pénalisé par une trésorerie abondante. La qualité de l'allocation se juge surtout à l'**absence d'erreurs coûteuses** : ni acquisition surpayée, ni dette, ni dépréciation significative.

---

### Signaux d'alerte

- **Rémunération en actions** : ~15 % du CA en 2026, dilution brute de 3,5 à 4 % par an avant rachats ; le PDG a reçu en 2022 une attribution d'actions de performance de fondateur de très grande taille.
- **Gouvernance à deux classes d'actions** : les fondateurs contrôlent l'entreprise sans en détenir la majorité économique ; l'actionnaire minoritaire ne peut pas imposer un changement de stratégie.
- **Ventes d'initiés** : régulières, programmées, de montants modestes rapportés à la participation des fondateurs.
- **Communication** : un style direct et parfois provocateur (mémo « AI-first ») qui a coûté en image ; pas de comportement promotionnel sur les chiffres — la direction a plutôt tendance à **sous-promettre**.
- **Changements de stratégie** : un pivot majeur en novembre 2025, assumé et cohérent depuis.

---

### Fondateur ou gestionnaire professionnel ?

**Fondateur-ingénieur**, au contrôle juridique total. À ce stade, c'est un **atout** : seul un fondateur contrôlant peut sacrifier une année de croissance des bookings et une large part de la valeur boursière pour viser 100 M de DAU, sans craindre d'être remplacé. C'est aussi le **principal risque de gouvernance** : si le pari se révèle faux, aucun contre-pouvoir actionnarial ne peut forcer un retour en arrière.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques du cours (2021-2026)

### Contexte
Duolingo est un titre **très volatil**. Introduit à 102 $ en juillet 2021, il est tombé sous 70 $ en 2022, a culminé à **540,68 $ en clôture le 14 mai 2025**, puis a perdu plus de 80 % jusqu'à un plus bas de **87,89 $ en avril 2026**, avant de remonter à **144,27 $** le 2 octobre 2026. La position vendeuse représentait environ 18 % du flottant à l'été 2026.

### Hausses significatives

**Juillet 2021 — Introduction en bourse** : prix fixé à 102 $, hausse d'environ 35 % le premier jour.

**2023 — Le premier « moment IA »** : lancement de Duolingo Max (avec OpenAI), croissance des DAU supérieure à 50 % ; le titre est multiplié par trois sur l'année.

**Printemps 2025 — Le pic** : résultats du T1 2025 supérieurs aux attentes, campagne virale de la « mort » de Duo et enthousiasme pour l'IA portent le titre à son record de mai 2025 (+66 % depuis janvier), à plus de 30 fois le CA.

**6-7 août 2025 — Résultats du T2 2025** : **hausse de plus de 30 % en séance** après un CA en croissance de 41 % et une prévision relevée.

**Septembre 2026 — Le retournement des analystes** : relèvement d'**Evercore ISI** à « Surperformance » (objectif de 105 $ à 210 $) le 1ᵉʳ septembre, relèvements de DA Davidson et JPMorgan ; le titre atteint ~158 $. Nouvelle hausse de plus de 6 % fin septembre.

---

### Baisses significatives

**Fin 2021-2022 — Remontée des taux** : les valeurs de croissance de la pandémie sont délaissées ; le titre perd plus de la moitié de sa valeur.

**Avril-mai 2025 — Mémo « AI-first »** : critiques massives sur les réseaux sociaux, sans effet immédiat sur le cours mais début d'une inquiétude sur l'image de marque.

**Été 2025 — Données d'usage tierces** : des signes de ralentissement des téléchargements et des DAU font reculer le titre après le pic.

**6 novembre 2025 — Le pivot** : **−25 %, la pire séance de l'histoire du titre**, sur une prévision de bookings du T4 inférieure au consensus et l'annonce de la priorité donnée aux utilisateurs.

**Janvier 2026** : **−24 % sur le mois**, malgré une mise à jour préliminaire montrant des DAU en hausse d'environ 30 % au T4.

**27 février 2026 — Résultats du T4 2025** : **plus de −20 %** sur une prévision 2026 de bookings (+10 à 12 %) très inférieure aux attentes (~1,39 Md$).

**Avril 2026 — Le plancher** : plus bas de 87,89 $, dans un climat de crainte de substitution par les assistants IA et de rotation hors des logiciels.

**Mai 2026 — Résultats du T1 2026** : environ −8 % dans les séances suivantes, malgré des chiffres supérieurs aux attentes.

**Fin juillet 2026** : environ −10 % sur une semaine avant les résultats.

**6 août 2026 — Résultats du T2 2026** : **−10 à −15 %** en séance sur une prévision de CA du T3 légèrement inférieure au consensus.

---

### Facteurs structurels

- **Le récit de l'IA, dans les deux sens** : en 2023-2025, l'IA était perçue comme un accélérateur ; depuis fin 2025, comme une menace de substitution. Le cours suit ce balancier autant que les résultats.
- **Les bookings comme indicateur roi** : le marché réagit à la prévision de bookings bien plus qu'au trimestre publié — d'où des baisses après quatre des cinq dernières publications, malgré des chiffres supérieurs aux attentes.
- **Données d'usage tierces** : téléchargements et DAU estimés par des cabinets spécialisés font bouger le titre entre deux publications.
- **Base actionnariale de croissance** : une partie des détenteurs de 2025 a été remplacée par des investisseurs « valeur » attirés par le rendement du free cash-flow ; la forte position vendeuse amplifie les rebonds.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Avertissement
Les estimations portent sur le **BPA GAAP dilué** (référence du consensus pour Duolingo). Le BPA publié de 2025 (~8,5 $) est faussé par un **crédit d'impôt exceptionnel de 256,7 M$** ; hors cet élément, il ressort à environ **3,2 $**, avec un taux d'imposition encore très faible. Le retour à un taux normal (~24 %) en 2026 fait mécaniquement baisser le BPA cette année, indépendamment de l'activité.

### Hypothèses de modélisation

**Croissance du secteur** : l'apprentissage numérique des langues reste un marché en expansion, mais le segment grand public payant est exposé à la concurrence gratuite des assistants IA. Hypothèse : croissance du marché adressable de l'ordre de 10 % par an.

**Gains de parts de marché** : Duolingo continue de capter l'essentiel des nouveaux apprenants grand public ; DAU en hausse de ~20 % en 2026, ~16 % en 2027, ~13 % en 2028 (vers ~85 M de DAU fin 2028, sous l'objectif de 100 M).

**Hausses de prix** : aucune hausse supposée en 2026-2027 ; la monétisation progresse par la conversion (essais longs, fonctions IA dans Super) et par l'offre familiale.

**Pressions sur les coûts** : coûts d'IA en hausse en volume mais en baisse par unité ; marketing en hausse ; commissions des magasins d'applications stables.

**Effet de levier opérationnel** : marge EBITDA ajustée de 26,5 % en 2026, ~29 % en 2027, ~31 % en 2028, à mesure que les bookings réaccélèrent et que l'investissement de 2026 n'a pas à être répété.

**Coûts de financement** : aucune dette ; produits financiers d'environ 45 M$ par an sur la trésorerie (sensibles à la baisse des taux).

**Dilution** : dilution brute de 3,5 à 4 % par an liée aux attributions d'actions, compensée en grande partie par les rachats (400 M$ autorisés) ; nombre d'actions diluées stable autour de 50 M.

| Hypothèse | 2026E | 2027E | 2028E |
|---|---|---|---|
| Bookings | ~1 285 M$ (+11 %) | ~1 450 M$ (+13 %) | ~1 650 M$ (+14 %) |
| Chiffre d'affaires | ~1 207 M$ (+16 %) | ~1 365 M$ (+13 %) | ~1 555 M$ (+14 %) |
| Marge EBITDA ajustée | ~26,5 % | ~29 % | ~31 % |
| Rémunération en actions | ~15 % du CA | ~13,5 % | ~12,5 % |
| Taux d'imposition | ~24 % | ~24 % | ~24 % |
| Actions diluées | ~50 M | ~50 M | ~50 M |

---

### Estimations du BPA

| Exercice | BPA estimé | Croissance | PER au cours actuel (144,27 $) |
|---|---|---|---|
| 2025 (publié) | ~8,5 $ (~3,2 $ hors crédit d'impôt) | — | — |
| **2026E** | **2,70–2,95 $ (base 2,80 $)** | **−13 % vs 2025 normalisé** | **~52×** |
| **2027E** | **3,20–4,10 $ (base 3,60 $)** | **+29 %** | **~40×** |
| **2028E** | **4,10–5,60 $ (base 4,75 $)** | **+32 %** | **~30×** |

**Repères de consensus** : ~2,96 $ pour 2026, ~3,3 $ pour 2027 et ~4,5 $ pour 2028, avec une dispersion très large (≈ 1,8 à 8,9 $ en 2028). Evercore ISI place ses estimations 2027 et 2028 respectivement 10 % et 25 % au-dessus du consensus. Notre scénario de base se situe entre les deux.

---

### Sensibilité

- **Scénario haussier** (bookings +16 % dès 2027, marge EBITDA de 33 % en 2028, DAU vers 95 M) : BPA 2028 ~5,60 $ → PER 2028 ~26×, soit un titre attractif pour une croissance de plus de 20 % par an du bénéfice.
- **Scénario de base** : BPA 2028 ~4,75 $ → PER 2028 ~30× ; en appliquant 35× à ce BPA, le titre vaudrait ~165 $ fin 2027.
- **Scénario baissier** (bookings bloqués autour de +8 %, marge plafonnée à 26 %, substitution partielle par l'IA) : BPA 2028 ~3,50 $ → PER 2028 ~41×, ce qui ne laisse aucune marge de sécurité.

**Conclusion** : le BPA GAAP sous-estime la capacité bénéficiaire de Duolingo, plombé par la rémunération en actions et la normalisation fiscale. Le free cash-flow (~400 M$ sur douze mois glissants) est un meilleur juge de paix. **La thèse ne dépend pas d'une hausse de prix mais d'une seule variable : la réaccélération des bookings en 2027.**`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (bull case)

### Leviers de croissance structurels

**1. Le pari sur les utilisateurs commence à payer** : DAU +23 % au T2 2026 en accélération, MAU +10 %, rétention record de 84 %. Dans un modèle freemium, la base d'utilisateurs engagés est l'actif qui se monétise ensuite : chaque point de rétention se compose en millions de DAU, et chaque million de DAU supplémentaire finit par produire des abonnés.

**2. Des barrières à l'entrée réelles et durables** : une marque culturelle mondiale, un coût d'acquisition quasi nul, une mécanique d'habitude affinée par des milliers de tests et des données d'apprentissage à une échelle qu'aucun concurrent spécialisé n'approche. Les assistants IA enseignent la conversation ; ils ne créent pas l'habitude quotidienne.

**3. Une surprise bénéficiaire possible en 2027** : 2026 est une année d'investissement volontaire. Si les bookings réaccélèrent sans répéter cet investissement, le levier opérationnel sera fort — c'est l'analyse d'Evercore ISI (BPA 2028 25 % au-dessus du consensus). La direction a jusqu'ici systématiquement **sous-promis puis dépassé**.

**4. Des vents porteurs structurels** : baisse continue du coût unitaire de l'IA (qui permet d'offrir Video Call à grande échelle), demande mondiale d'apprentissage de l'anglais, nouvelles matières (échecs, maths, musique) qui élargissent le marché adressable, essor du marketing à la performance.

**5. Une allocation du capital exemplaire** : aucune dette, 1,4 Md$ de trésorerie nette, ~400 M$ de free cash-flow annuel, un rachat de 400 M$ exécuté à ~101 $ en moyenne, aucune acquisition coûteuse.

---

## 🐻 Scénario pessimiste (bear case)

### Risques susceptibles d'affecter durablement l'activité

**1. La substitution par l'IA générative** : si ChatGPT, Gemini ou les fonctions intégrées aux téléphones offrent une pratique conversationnelle gratuite et suffisante, la valeur de l'abonnement Super s'érode. Les utilisateurs resteraient peut-être pour le jeu, mais paieraient moins.

**2. La monétisation qui ne revient pas** : bookings +8 % au T2, abonnés payants +0,2 M seulement sur le trimestre. Si la croissance des utilisateurs se fait surtout chez des profils peu solvables (Chine, Inde, Indonésie), l'effet sur les revenus restera faible — un « Match Group » de l'éducation, très utilisé mais en croissance lente.

**3. La dépendance aux plateformes** : Apple et Google contrôlent la distribution, prélèvent leur commission et développent leurs propres outils d'apprentissage assisté.

### Analyse pré-mortem
Que se serait-il passé si Duolingo cotait 80 $ en octobre 2028 ? Scénario : les DAU plafonnent autour de 65 M dès 2027, la conversion recule, les bookings croissent de 5 à 7 % par an, la direction prolonge l'investissement une deuxième année pour relancer l'usage, la marge EBITDA reste vers 25 %. Le BPA 2028 atteint ~3,0 $ et le marché le valorise ~25×, comme une application grand public mature. **Aucune faillite du modèle n'est nécessaire** : il suffit que la croissance des utilisateurs ne se transforme pas en revenus.

### Les multiples sont-ils trop élevés ?
**Non au regard de l'histoire et du free cash-flow** : ~4,7× le CA (plus de 30× au pic de 2025), ~16× l'EBITDA ajusté, rendement du free cash-flow de ~6 %. **Oui au regard du BPA GAAP** : ~52× 2026 et ~40× 2027, un niveau qui suppose la réaccélération. Les deux lectures divergent à cause de la rémunération en actions (~15 % du CA), qui n'apparaît pas dans le free cash-flow mais dilue l'actionnaire.

---

### Point de vue à contre-courant

**Ce que le marché refuse de voir** : en 2025, le marché payait Duolingo comme une machine à monétiser l'IA ; en avril 2026, il le vendait comme une victime de l'IA. Les deux lectures se trompaient sur la nature de l'entreprise. Duolingo ne vend pas de la technologie ; il vend **de l'habitude**. Or l'habitude est précisément ce que les assistants IA ne fournissent pas : la rétention record de 2026 l'indique, et l'étude d'Evercore montre que la plupart des apprenants qui utilisent ChatGPT utilisent aussi Duolingo, aussi intensément que les autres. Le vrai risque n'est pas la disparition des utilisateurs, mais **le pouvoir de prix** : la question décisive n'est pas « combien d'utilisateurs ? », mais **« combien paieront, et à quel prix, quand la conversation par IA sera gratuite partout ? »**.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE FAIBLE
Les abonnements sont encaissés d'avance et reconnus **linéairement sur leur durée** (douze mois pour la majorité). Le traitement est simple et prudent : il **retarde** la reconnaissance plutôt que de l'anticiper. Points d'attention :
- **Bookings, indicateur non audité** : la direction pilote et communique sur les bookings, un agrégat non GAAP. Leur réconciliation avec la variation des produits constatés d'avance (496 M$ fin 2025, 505 M$ fin juin 2026) permet de le contrôler.
- **Commissions des magasins d'applications** : CA comptabilisé en brut, commissions en coût des ventes — conforme et cohérent dans le temps.
- **Essais gratuits allongés** : ils décalent les encaissements ; effet de calendrier à surveiller lors des comparaisons trimestrielles.

### Information sectorielle — RISQUE MODÉRÉ
**Un seul secteur publié.** Pas de rentabilité par produit (Super, test d'anglais, publicité) ni par zone géographique détaillée. Impossible de mesurer de l'extérieur la rentabilité des nouvelles matières ou du marché chinois.

### Indicateurs d'usage — RISQUE MODÉRÉ
Les DAU, MAU et abonnés payants proviennent d'une **plateforme d'analyse interne non validée par un tiers**, dont la méthodologie peut évoluer (l'entreprise le précise elle-même). L'opération ponctuelle de réanimation des séries (juin 2026) a gonflé une partie des DAU du T2. Ces indicateurs pilotent pourtant le récit boursier.

### Contrats de location — RISQUE FAIBLE
Droits d'utilisation de 75 M$ et dette locative d'environ 95 M$ (bureaux de Pittsburgh notamment). Montants modestes, correctement présentés.

### Parties liées — RISQUE FAIBLE
Pas de transaction significative avec les dirigeants identifiée. Le **contrôle par les fondateurs** (actions B à 20 voix) n'est pas une transaction, mais limite le pouvoir des minoritaires.

### Engagements conditionnels — RISQUE FAIBLE À MODÉRÉ
Réserves juridiques, fiscales et réglementaires mentionnées par la direction (exclues de l'EBITDA prévisionnel) ; exposition aux réglementations sur la protection des données et des mineurs, et à l'environnement réglementaire chinois.

### Rémunération en actions — RISQUE ÉLEVÉ
C'est le principal point de vigilance du dossier. **~15 % du CA en 2026** (38,2 M$ au T2, 72,9 M$ au premier semestre), **exclue de l'EBITDA ajusté**, dilution brute de **3,5 à 4 % par an** avant rachats. Le free cash-flow (~400 M$ sur douze mois) n'en supporte pas le coût : **le free cash-flow diminué de la rémunération en actions est inférieur d'environ 40 %**. L'attribution d'actions de performance de fondateur de 2022 reste partiellement en cours (0,6 M d'unités).

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Goodwill de 35,3 M$ et incorporels de 27,6 M$ : moins de 3 % de l'actif. Une dépréciation mineure de logiciels capitalisés (0,6 M$) au T2 2026. Croissance essentiellement organique.

### Impôts différés — RISQUE MODÉRÉ
La reprise de la dépréciation des impôts différés actifs (256,7 M$ en 2025) a **gonflé le résultat net 2025** (414 M$ publiés, environ 157 M$ hors cet élément). Elle crée en 2026 une charge d'impôt comptable sans décaissement équivalent. Toute comparaison de BPA 2025-2026 doit neutraliser cet effet ; un retour à la dépréciation serait un signal de doute de la direction sur la rentabilité future.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ
Le free cash-flow (~398 M$ sur douze mois) représente environ **deux fois** le résultat net normalisé. Explications légitimes : rémunération en actions non décaissée, encaissement d'avance des abonnements, faibles investissements. Mais cet écart est **réversible** : si les bookings ralentissent durablement, l'avance de trésorerie fournie par les produits constatés d'avance cesse de croître, et le free cash-flow converge vers le résultat.

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** Comptes simples, prudents sur la reconnaissance du CA, bilan sans dette, acquisitions négligeables. Les vraies zones d'ombre sont ailleurs : une **rémunération en actions très élevée**, masquée par l'EBITDA ajusté et le free cash-flow, des **indicateurs d'usage non audités** qui portent le récit, et un **résultat 2025 rendu flatteur par un effet fiscal**. Raisonner sur le free cash-flow diminué de la rémunération en actions et sur le BPA GAAP plutôt que sur l'EBITDA ajusté.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Luis von Ahn, classées par importance

### Stratégie et avantage concurrentiel

**1.** Vous avez renoncé à plus de 50 M$ de bookings en 2026 pour la croissance des utilisateurs. **Quel indicateur précis, à quelle date, vous ferait conclure que ce pari ne fonctionne pas** — et quelle croissance des bookings visez-vous pour 2027 ?

**2.** Les assistants IA offrent désormais une conversation gratuite dans toutes les langues. **Qu'est-ce qu'un abonné Super obtient chez vous qu'il ne peut pas obtenir gratuitement de ChatGPT ou de Gemini**, et comment le mesurez-vous dans vos tests de conversion ?

**3.** Les abonnés payants n'ont progressé que de 0,2 M au T2. **Quelle part de la croissance des DAU vient de pays à faible pouvoir d'achat**, et quel est le revenu moyen par DAU dans ces marchés par rapport aux États-Unis ?

**4.** Combien de vos DAU du T2 sont attribuables à l'opération ponctuelle de réanimation des séries, et **quelle proportion de ces utilisateurs était encore active huit semaines plus tard** ?

### Monétisation

**5.** L'intégration des fonctions Max dans Super : **s'agit-il d'une baisse de prix déguisée** pour les anciens abonnés Max, ou d'un levier de conversion ? Quel effet attendez-vous sur le revenu moyen par abonné ?

**6.** Les achats intégrés reculent de 23 % et le test d'anglais stagne. **Ces activités sont-elles encore stratégiques**, ou seront-elles progressivement abandonnées au profit du seul abonnement ?

### Allocation du capital

**7.** La rémunération en actions représente ~15 % du CA. **Quel niveau visez-vous à trois ans**, et vous engagez-vous à ce que les rachats neutralisent au minimum 100 % de la dilution brute chaque année ?

**8.** Avec 1,4 Md$ de trésorerie nette et ~400 M$ de free cash-flow, **pourquoi ne pas accélérer les rachats** pendant que le titre se paie ~4,7 fois le CA ? Quelles acquisitions pourraient justifier de conserver cette trésorerie ?

**9.** Quel est le **retour sur investissement mesuré du marketing à la performance**, et à quel coût d'acquisition par utilisateur cesseriez-vous d'investir ?

### Risques

**10.** Apple et Google contrôlent votre distribution et développent leurs propres outils. **Quelle part de vos bookings passe par le web en paiement direct**, et quel objectif fixez-vous pour réduire cette dépendance ?

**11.** La Chine fait partie de vos principaux marchés de croissance. **Quelle est votre exposition au risque réglementaire chinois** sur l'éducation et sur les données des utilisateurs ?

**12.** Le récit boursier repose sur des indicateurs d'usage non audités. **Seriez-vous prêt à faire valider votre méthodologie des DAU par un tiers indépendant ?**

### Gouvernance et vision

**13.** Avec près de trois quarts des droits de vote, vous et Severin Hacker contrôlez l'entreprise. **Existe-t-il une clause d'extinction des actions de classe B**, et comment les actionnaires minoritaires peuvent-ils peser sur une stratégie qui leur a coûté plus de 70 % depuis mai 2025 ?

**14.** Dans dix ans, **quelle part du CA viendra des matières hors langues** (échecs, maths, musique), et quel est votre critère pour lancer ou arrêter une nouvelle matière ?

**15.** Quel est le risque que vous estimez **le plus sous-évalué par le marché aujourd'hui** — et celui que vous suivez le plus attentivement en conseil d'administration ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse vendeuse — Démontage de l'argumentaire haussier

### 1. Ce qui peut compromettre structurellement le modèle

Duolingo vend un **accès payant à une version améliorée d'un produit gratuit**. Ce modèle tient tant que la version payante apporte quelque chose de rare. Or la fonction la plus valorisée de l'abonnement — la conversation avec une IA — devient **une commodité gratuite**, intégrée aux assistants, aux téléphones et aux traducteurs. Duolingo peut garder ses utilisateurs pour le jeu et l'habitude, mais perdre sa **capacité à les faire payer**. La réaccélération des DAU et le ralentissement simultané des bookings sont exactement ce que ce scénario prédit.

### 2. Où se concentrent les revenus — et que se passe-t-il si cela change

**86 % du CA vient des abonnements**, et une large part de ces abonnements est encaissée via **deux plateformes**, Apple et Google. Les États-Unis restent le marché le plus monétisé alors que la croissance des utilisateurs vient de pays à faible revenu. Si Apple ou Google modifient leurs commissions, leurs règles de paiement ou leur classement des applications, ou intègrent un tuteur de langues natif dans leur système, la base d'abonnés payants est directement menacée.

### 3. Pourquoi l'avantage concurrentiel est plus fragile qu'il n'y paraît

La marque et la gamification sont réelles, mais **ce ne sont pas des barrières technologiques**. Les séries quotidiennes et les ligues se copient. La notoriété a été construite sur un ton viral qui s'use (le mémo « AI-first » a montré qu'elle peut se retourner). Et la qualité pédagogique, critiquée pour les niveaux avancés, est exactement le terrain où les modèles d'IA progressent le plus vite.

### 4. Le concurrent le plus dangereux : OpenAI (et non Babbel)

Les haussiers comparent Duolingo à Babbel ou Busuu et concluent à une domination écrasante. C'est le mauvais référentiel. **OpenAI** — partenaire historique des fonctions Max, investisseur dans Speak — dispose de centaines de millions d'utilisateurs hebdomadaires, d'un mode vocal naturel et de la capacité à lancer un parcours d'apprentissage structuré en quelques mois. Google, propriétaire d'Android, l'a déjà amorcé dans Traduction. Duolingo dépend en partie de la technologie de ceux qui peuvent le remplacer.

### 5. Les pires décisions d'allocation du capital

- **La rémunération en actions** : ~15 % du CA, une dilution brute de 3,5 à 4 % par an, et une attribution de fondateur de 2022 de très grande taille. Les rachats de 2026 ne font que compenser la dilution passée.
- **Le pivot de novembre 2025** : peut-être juste sur le fond, mais annoncé de façon à détruire plus de la moitié de la capitalisation en quelques mois, au détriment d'actionnaires qui n'ont aucun droit de vote significatif.
- **Une trésorerie de 1,4 Md$ peu productive**, alors que le titre a longtemps coté à des multiples élevés qui auraient permis de racheter au meilleur moment… dans l'autre sens.

### 6. Comptabilité et incitations

Un EBITDA ajusté qui exclut ~15 % du CA de charges réelles. Un résultat 2025 gonflé de 256,7 M$ par un effet fiscal. Des indicateurs d'usage non audités qui pilotent la valorisation, et une opération ponctuelle qui a soutenu les DAU du trimestre de référence. Des fondateurs qui contrôlent ~75 % des votes et vendent régulièrement des titres. Rien d'illégal ni d'agressif au sens comptable — mais **un écart important entre les métriques mises en avant et le coût réel pour l'actionnaire**.

### 7. Les hypothèses nécessaires pour justifier le cours

À 144 $ (~6,8 Md$, ~52× le BPA 2026), il faut : (a) des bookings qui réaccélèrent au-delà de 12 % en 2027 et s'y maintiennent ; (b) une marge EBITDA qui remonte vers 30 % ; (c) une croissance des DAU supérieure à 15 % pendant trois ans ; (d) un prix de l'abonnement préservé face à l'IA gratuite ; (e) une rémunération en actions en baisse en pourcentage du CA.

### 8. Et si la croissance déçoit de 20 à 30 %

Avec un CA 2028 de 1,25 à 1,35 Md$ au lieu de 1,55 Md$ et une marge EBITDA bloquée à 26 %, le BPA 2028 tombe entre **3,0 et 3,5 $**. À 25× — le multiple d'une application grand public à croissance lente —, le titre vaudrait **75 à 90 $**, soit **−40 à −50 %**, et retrouverait son plancher d'avril 2026.

### Le scénario catastrophe unique

**Le lancement par OpenAI, Google ou Apple d'un tuteur de langues gratuit, structuré et gamifié, intégré par défaut à des centaines de millions d'appareils.** Les utilisateurs occasionnels basculeraient, la conversion s'effondrerait, et Duolingo deviendrait une application de jeu éducatif financée par la publicité. **Plausibilité : 20 à 25 %** sur trois ans — les géants ont les moyens et la distribution, mais l'apprentissage reste un marché de niche pour eux, et l'habitude Duolingo a résisté à trois ans de ChatGPT.

### Conclusion vendeuse
Duolingo est **une excellente entreprise** — rentable, sans dette, aimée de dizaines de millions d'utilisateurs. Mais son produit payant est en concurrence directe avec la technologie la plus puissante et la plus gratuite du moment, distribuée par ceux qui contrôlent ses propres canaux. **L'habitude est son meilleur atout ; le pouvoir de prix, son point le plus exposé.**`,
  },
];

export default { ...meta, modules };
