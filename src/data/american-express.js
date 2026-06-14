// ============================================================
//  DOSSIER : American Express (AXP)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "american-express",        // identifiant d'URL : /dossier/american-express
  ticker: "AXP",
  name: "American Express Company",
  exchange: "NYSE",
  sector: "Services financiers",
  initials: "AXP",                  // affiché dans la pastille
  tagline: "Réseau de paiement premium en boucle fermée (closed-loop).",
  riskScore: 70,                    // score du rapport de risque (ou null)
  riskLabel: "Risque faible à modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "american-express.html",
  updated: "2026-06",              // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

American Express (NYSE : AXP) est un **réseau de paiement fermé (closed-loop)** et un émetteur de cartes premium, fondé en 1850. Contrairement à Visa et Mastercard, qui s'appuient sur des banques tierces pour émettre leurs cartes, Amex **émet ses propres cartes, recrute ses propres commerçants et opère son propre réseau** — à la fois émetteur, acquéreur et processeur. Le chiffre d'affaires 2025 atteint **72,2 milliards $** (record historique), pour un bénéfice net de **10,8 milliards $** et un BPA de **15,38$**.

Le modèle repose sur trois flux de revenus distincts :

- **Discount revenue (commissions marchands)** : ~50% du CA — commission prélevée sur chaque transaction, structurellement plus élevée que celle de Visa/MC grâce au pouvoir d'achat de la clientèle premium
- **Net card fees (cotisations cartes)** : ~14% du CA, **10 Mds$ en 2025 (+18%)** — 30 trimestres consécutifs de croissance à deux chiffres
- **Net interest income (revenus d'intérêts)** : le solde restant — Amex prête aussi (modèle « spend-and-lend »), avec des encours de prêts en croissance

## Principaux produits et services

- **Cartes Consumer premium** : Platinum, Gold, Green, Centurion (« Black ») — cartes à cotisation élevée ciblant le haut de gamme
- **Cartes Commercial / Business** : cartes corporate, PME, gestion de notes de frais, financement de trésorerie
- **Co-branded** : Delta, Marriott, Hilton, British Airways — partenariats fidélité
- **Network & Services** : traitement de transactions, services aux émetteurs partenaires (modèle GNS)
- **Membership Rewards** : programme de fidélité propriétaire, levier de rétention majeur

## Clients, fournisseurs, concurrents

**Clients** : consommateurs premium (Millennials et Gen Z en forte croissance), PME et grandes entreprises. Concentration sur le segment à pouvoir d'achat élevé.

**Fournisseurs / partenaires** : compagnies aériennes (Delta), hôtels (Marriott, Hilton), réseaux d'acceptation, prestataires technologiques cloud.

**Concurrents** : **Visa** et **Mastercard** (réseaux ouverts, volumes supérieurs mais sans relation client) ; **Capital One** (renforcé par l'acquisition de Discover en 2025) ; **JPMorgan Chase** (Chase Sapphire, principal rival sur le premium) ; **Discover** (désormais sous Capital One).

## Modalités contractuelles

Le modèle « spend-centric » repose sur la **commission marchand** (discount rate) prélevée à chaque transaction, et les **cotisations annuelles** facturées d'avance (revenus récurrents à forte visibilité). La relation directe avec le titulaire (closed-loop) génère une **donnée transactionnelle propriétaire** qui alimente la gestion du risque, le marketing ciblé et les programmes de récompense — un avantage que les réseaux ouverts ne possèdent pas.`,
  },
  {
    id: 2,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Le réseau fermé (closed-loop) — Moat de données
Amex voit **les deux côtés de chaque transaction** : le titulaire ET le commerçant. Cette donnée propriétaire alimente une gestion du risque crédit « best-in-class », un marketing ciblé et des récompenses personnalisées. Visa et Mastercard, en tant que réseaux ouverts, ne disposent jamais de cette vue complète — ils ne connaissent pas le titulaire final.

### 2. La marque premium — Pricing power
La marque Amex incarne le statut et le service haut de gamme. Cette **valeur perçue justifie des commissions marchands supérieures** et des cotisations annuelles élevées (la Platinum US dépasse 695$/an). Le refresh de la carte Platinum US en 2025 a fait **accélérer les dépenses tout en maintenant des taux de rétention élevés malgré les hausses de cotisation** — preuve d'un pouvoir de fixation des prix rare.

### 3. Effet de réseau premium et écosystème de récompenses
Le programme **Membership Rewards**, les accès aux salons (Centurion Lounges), les avantages voyage et le réseau de partenaires (Delta, Marriott, plus de 50 ligues et événements sportifs dont la NFL depuis 2026) créent un **écosystème difficile à répliquer** et un coût de sortie psychologique élevé pour le titulaire.

### 4. Clientèle premium résiliente
La concentration sur les dépensiers à haut pouvoir d'achat rend les volumes **moins sensibles aux cycles de consommation** que ceux des émetteurs de masse. Les métriques de crédit restent inférieures aux niveaux de 2019 (taux de défaut < 2,3%).

### 5. Barrière de l'intégration verticale
Reproduire un modèle closed-loop complet (émission + acquisition + réseau + récompenses + données) exige des décennies d'investissement et de relations marchands. Aucun nouvel entrant ne peut le construire rapidement.

## Positionnement vs concurrence

| Critère | American Express | Visa / Mastercard | Capital One |
|---|---|---|---|
| Modèle | Closed-loop (intégré) | Open-loop (réseau pur) | Émetteur + réseau (post-Discover) |
| Relation titulaire | Directe | Aucune (via banques) | Directe |
| Risque crédit porté | Oui (spend-and-lend) | Non | Oui |
| Positionnement | Premium | Universel | Mass / subprime à premium |
| Donnée transactionnelle | Complète | Partielle | Complète |

## Pouvoir de négociation

- **Vis-à-vis des commerçants** : **Modéré-élevé** — historiquement, certains commerçants refusaient Amex pour ses commissions plus élevées ; la clientèle premium incite désormais à l'acceptation (« couverture » en forte hausse)
- **Vis-à-vis des titulaires** : **Élevé** — la marque et l'écosystème permettent d'augmenter les cotisations sans perte de rétention
- **Vis-à-vis des partenaires co-branded** : **Modéré** — relations équilibrées (Delta, Marriott) où chacun apporte une base clients`,
  },
  {
    id: 3,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels
**1. Conquête Millennials et Gen Z** : Ces cohortes constituent désormais le moteur de croissance des dépenses. Elles adoptent les produits premium (Gold, Platinum) plus tôt que les générations précédentes, allongeant la durée de vie client et le potentiel de revenus récurrents.

**2. Machine à cotisations** : Les net card fees ont atteint **10 Mds$ en 2025 (+18%)**, avec **30 trimestres consécutifs de croissance à deux chiffres**. Cette croissance est largement décorrélée des volumes de dépense — un flux récurrent à très haute visibilité qui se compose dans le temps.

**3. Refresh Platinum réussi** : Le rafraîchissement de la Platinum US en 2025 a accéléré les dépenses tout en maintenant la rétention malgré des cotisations plus élevées. Le plein impact financier (nouvelles cotisations) se matérialise progressivement jusqu'au T4 2026.

**4. Levier opérationnel** : Le ratio frais d'exploitation / CA est passé de **26% à 22% en trois ans**, libérant des capacités de réinvestissement (marketing, technologie, IA générative) sans comprimer les marges.

**5. Allocation du capital exemplaire** : ROE de **34-35%**, 7,6 Mds$ retournés aux actionnaires en 2025, dividende porté à ~3,28-3,80$/action (CAGR 5 ans ~14-17%), payout ratio bas (~22%) laissant une marge de progression considérable. Berkshire Hathaway détient ~22% du capital — un vote de confiance de long terme.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents au business

**1. Sensibilité macro et crédit** : Bien que la clientèle soit premium, Amex **porte le risque crédit** (contrairement à Visa/MC). Une récession sévère ferait monter les provisions et les défauts, comprimant directement le bénéfice — le talon d'Achille du modèle spend-and-lend.

**2. Concurrence sur le premium** : JPMorgan (Chase Sapphire) et Capital One (renforcé par Discover en 2025) attaquent agressivement le segment haut de gamme avec des récompenses généreuses. La « guerre des récompenses » peut éroder l'économie unitaire des cartes.

**3. Réinvestissement qui pèse sur les marges court terme** : Le management a choisi d'**augmenter les investissements marketing et technologie** en utilisant la surperformance — un pari sur le long terme qui limite l'expansion de marge à court terme et a déçu certains investisseurs au T1 2026.

### Analyse pré-mortem
Que se passerait-il si AXP reculait fortement dans 2-3 ans ? Scénario : ralentissement de la consommation premium, montée des provisions crédit (+50-100 bps de taux de défaut), guerre des récompenses comprimant les marges, et compression du multiple de 19x à 14x. Le titre pourrait reculer de 25-30%.

### Point de vue à contre-courant
**Ce que le marché sous-estime** : Amex se négocie à ~19x les bénéfices, proche de sa moyenne décennale (18,5x) et **bien en dessous de Visa (~29x) et Mastercard (~29x)**. Le marché traite Amex comme une banque cyclique alors que la part fee/récurrente du modèle (cotisations à 30 trimestres de croissance double-digit) le rapproche d'un modèle d'abonnement premium. Si le marché « re-rate » Amex vers un multiple de réseau, l'upside est significatif. Inversement, si la récession frappe, le modèle de prêteur ressortira au premier plan.`,
  },
  {
    id: 4,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'American Express dans la chaîne de valeur

Amex est singulier : son modèle **closed-loop le place à plusieurs positions simultanément** dans la chaîne de paiement — émetteur, acquéreur, réseau et prêteur. Là où Visa/Mastercard n'occupent que le maillon « réseau », Amex contrôle quasiment toute la chaîne.

### Amont — Intrants

**Capital et financement** :
- Dépôts clients (157,9 Mds$ au T1 2026) — source de financement croissante et peu coûteuse
- Marchés de dette (titrisation de créances, obligations)

**Technologie et infrastructure** :
- Fournisseurs cloud, data centers, plateformes de traitement de transactions
- Prestataires de cybersécurité et de prévention de la fraude
- Outils d'IA générative (nouvelles expériences app, ACE Developer Kit)

**Partenaires de récompenses** :
- Compagnies aériennes (Delta), hôtels (Marriott, Hilton) — pourvoyeurs de points et avantages

---

### American Express — Cœur du closed-loop

**Émission** : cartes Consumer et Commercial émises directement
**Acquisition** : recrutement et gestion des commerçants acceptant Amex
**Réseau** : traitement, autorisation, compensation des transactions (sans intermédiaire bancaire)
**Prêt** : octroi de crédit et gestion du risque sur les encours

---

### Aval — Clients finaux et acceptation

**Titulaires** : consommateurs premium, PME, grandes entreprises

**Commerçants acceptant Amex** : grandes enseignes, restaurants, voyage, e-commerce — couverture en forte expansion

**Partenaires d'écosystème** : plus de 50 ligues, équipes, lieux et événements sportifs (NFL official payments partner depuis 2026, NBA, Fanatics) ; salons Centurion ; plateformes de réservation (Resy, dining)

**Émetteurs partenaires (GNS)** : banques tierces émettant des cartes sur le réseau Amex dans certains marchés

**Point clé** : la maîtrise de bout en bout signifie qu'Amex **capte une part de valeur supérieure par transaction** mais assume aussi le risque crédit — un arbitrage structurel absent chez les réseaux purs.`,
  },
  {
    id: 5,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par flux de revenus — Exercice 2025

Amex ne se décompose pas en « divisions produits » classiques mais en **flux de revenus** et **segments clients/géographiques**. CA total 2025 : **72,2 Mds$ (+10%)**.

| Flux de revenus | Part estimée | Dynamique |
|---|---|---|
| Discount revenue (commissions) | ~50% | Tirée par les volumes de dépense (+8% billed business) |
| Net interest income (intérêts) | ~22% | Croissance des encours de prêts revolving |
| Net card fees (cotisations) | ~14% | **+18%, 30e trimestre consécutif double-digit** |
| Autres (services, GNS) | ~14% | Stable |

---

### Segments clients

| Segment | Tendance | Commentaire |
|---|---|---|
| US Consumer Services | Forte | Moteur principal, refresh Platinum, Millennials/Gen Z |
| Commercial Services | Solide | PME et corporate ; sortie planifiée de petits comptes en 2026 |
| International Card Services | Accélération | Marchés internationaux clés, croissance supérieure à la moyenne |

---

### Répartition géographique

- **États-Unis** : cœur du business, majorité du billed business
- **International** : relais de croissance, dépenses en accélération, sous-pénétration des produits premium

**Billed business 2025** : **1 669,8 Mds$ (+8%, +7% FX-adjusted)**. Network volumes au T1 2026 : 486,3 Mds$ (+11%).

---

### Évolution des marges et rentabilité

- **ROE** : ~34-35% (parmi les plus élevés du secteur financier)
- **Ratio frais d'exploitation / CA** : 22% (vs 26% il y a 3 ans) — levier opérationnel net
- **Taux d'imposition effectif** : ~21,5%
- **Net income 2025** : 10,8 Mds$ (+7%)
- **BPA 2025** : 15,38$ (+10%, +15% hors gain Accertify 2024)
- **CET1 ratio** : 10,5% (capital solide)

---

### Dynamiques par segment

**Net card fees** : le segment le plus précieux — récurrent, à haute visibilité, décorrélé des volumes. La machine à cotisations est le cœur de la thèse premium.

**Net interest income** : porté par la croissance des encours revolving, mais expose Amex au risque crédit et au cycle des taux.

**International** : sous-pénétré, c'est le principal relais de croissance géographique pour la décennie.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T1 2026 — Analyse complète (publiés le 23 avril 2026)

### Chiffre d'affaires vs consensus

| Indicateur | Résultat T1 2026 | Consensus | Écart |
|---|---|---|---|
| CA net d'intérêts | 18 907 M$ | 18 610 M$ | **+297 M$ (+1,6%) ✓** |
| Croissance CA publiée | +11% | — | +10% FX-adjusted |
| BPA dilué | 4,28$ | 3,99$ | **+7,2% ✓** |
| Net income | 2 971 M$ | — | +15% YoY |
| Billed business | 428,0 Mds$ | — | **+10% (+9% FX), plus forte croissance en 3 ans** |

**American Express a battu le consensus** sur le CA et significativement sur le BPA. Pourtant, le titre a reculé (~-1% pré-marché) — le marché s'est focalisé sur la hausse des dépenses marketing/technologie et les craintes macro liées aux tarifs douaniers.

---

### Facteurs clés par segment

- **US Consumer** : dépenses en accélération, portées par le refresh Platinum et les Millennials/Gen Z
- **Goods & services + Travel & entertainment** : les deux catégories en forte croissance
- **Net card fees** : maintien de la dynamique double-digit
- **Crédit** : taux de défaut 2,3%, délinquances 30j+ à 1,3% — **sous les niveaux de 2019**, « best-in-class »

---

### Évolution des marges

- ROE à **35,2%** au T1 2026
- Ratio frais d'exploitation / CA en amélioration continue (~22%)
- Choix stratégique : **abaisser les seuils de ROI pour investir davantage** en marketing/tech, privilégiant le momentum long terme à l'expansion de marge court terme

---

### Perspectives et guidance

- **Guidance FY 2026 réaffirmée** : croissance CA de **9-10%**, BPA de **17,30$-17,90$**
- Impact « low single-digit » attendu sur les dépenses PME dès le T2 (sortie planifiée de petits comptes)
- Le management se dit confiant grâce au focus premium, au modèle « spend-and-fee » et à la qualité du portefeuille
- Capital return : 2,32 Mds$ au T1 2026 (dont 1,66 Md$ de rachats + 652 M$ de dividendes)

---

### Signaux d'alerte bilan

- **Risque crédit porté au bilan** : surveiller l'évolution des provisions si la macro se dégrade
- **Levier** : ratio dette/capitaux propres ~2,2 — normal pour un prêteur mais à suivre
- **Capex marketing/tech** : la hausse des investissements pèse sur la marge court terme — à surveiller pour vérifier le retour sur investissement

---

### Réaction du marché

Malgré un **beat sur toutes les lignes**, le titre a baissé à la publication — signe que les bonnes nouvelles étaient déjà dans les cours et que les investisseurs craignaient le réinvestissement et le contexte tarifaire. Le titre a depuis rebondi (juin 2026) sur des commentaires positifs du CFO concernant l'accélération du billing au T2.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2024-2026

**2024** : Ton confiant, focalisation sur la résilience de la clientèle premium et la croissance des cotisations. Premières évocations appuyées de la conquête Millennials/Gen Z.

**2025** : Ton très assuré. « 2025 a été une année très forte ». Le refresh Platinum US est présenté comme un succès majeur. Le management insiste sur le levier opérationnel et les 30 trimestres de croissance double-digit des cotisations.

**2026 (T1)** : Ton offensif et stratégique. Stephen Squeri parle d'un « très bon début d'année ». Message clé : utiliser la surperformance pour **réinvestir agressivement** plutôt que de maximiser la marge court terme. Positionnement marqué sur l'**« Agentic Commerce »** (commerce piloté par des agents IA), où le closed-loop est présenté comme un avantage sécurité décisif.

---

### Priorités répétées du management

**1. Clientèle premium et générationnelle** — Thème dominant. Squeri répète que Millennials et Gen Z sont le moteur de croissance et adoptent le premium plus tôt.

**2. Machine à cotisations (net card fees)** — Fierté affichée : 30 trimestres consécutifs de croissance double-digit, 10 Mds$ en 2025. Le CFO Christophe Le Caillec souligne un CAGR de 17% des card fees depuis 2018.

**3. Réinvestissement discipliné** — Le management assume le choix d'abaisser les seuils de ROI pour investir en marketing et technologie, en pariant sur le momentum long terme.

**4. Agentic Commerce et IA** — Nouveau thème 2026 : le closed-loop comme avantage de sécurité pour les transactions autonomes pilotées par IA (ACE Developer Kit, Amex Agent purchase protection).

**5. Partenariats premium** — NFL (partenaire paiement officiel dès la saison 2026), NBA, Fanatics, plus de 50 ligues/événements — levier d'engagement et de marque.

---

### Analyse du sentiment

- **Confiance** : Élevée et constante. Le management livre et dépasse régulièrement (historique de beats).
- **Prudence macro** : Squeri mentionne systématiquement l'incertitude macro et géopolitique (tarifs douaniers), sans alarmisme, en s'appuyant sur la qualité du portefeuille premium.
- **Crédit** : message récurrent « best-in-class », métriques sous les niveaux 2019 — un pilier de réassurance.
- **Cohérence** : guidance FY 2026 réaffirmée trimestre après trimestre — pas de révision à la baisse.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Stephen J. Squeri — Chairman & CEO (depuis février 2018)

**Bilan** :
- A piloté la transformation d'Amex vers le **modèle « Membership »** premium, avec un focus marqué sur la conquête Millennials/Gen Z
- A mené le CA de l'entreprise à un **record de 72,2 Mds$ en 2025** et le BPA à 15,38$
- Refresh réussi de la carte Platinum US en 2025 — accélération des dépenses + maintien de la rétention malgré hausse des cotisations
- A développé le levier opérationnel : ratio frais/CA de 26% à 22% en 3 ans
- Vétéran d'Amex : dans le groupe depuis **1985 (40 ans)** — connaissance intime de l'entreprise

**Ancienneté** : CEO depuis 2018, soit ~8 ans à la tête. Carrière entière chez Amex (technologie, commercial, puis direction générale).

---

### Christophe Le Caillec — Directeur Financier (CFO)

CFO depuis 2023. Met en avant le CAGR de 17% des card fees depuis 2018 et la discipline de coûts. Communication financière claire et orientée long terme.

---

### Allocation du capital — Historique

| Indicateur | 2023 | 2024 | 2025 | T1 2026 |
|---|---|---|---|---|
| ROE | ~32% | ~34% | ~34% | 35,2% |
| BPA | ~11,21$ | 14,01$ | 15,38$ | 4,28$ (T1) |
| Dividende/action | ~2,40$ | ~2,80$ | ~3,28$ | hausse continue |
| Capital retourné | — | — | 7,6 Mds$ | 2,32 Mds$ |

**Tendance** : ROE structurellement élevé (~34-35%), payout ratio bas (~22%) laissant une forte marge de croissance du dividende (CAGR 5 ans ~14-17%). Rachats d'actions réguliers réduisant le nombre d'actions (~-2%/an).

---

### Actionnaire de référence

**Berkshire Hathaway (Warren Buffett)** détient **~22% du capital** (151,6 M d'actions, ~45 Mds$), 3e position du portefeuille Berkshire. Détenu depuis 2009, jamais vendu — un signal de conviction long terme exceptionnel sur la qualité du modèle.

---

### Signaux d'alerte

- **Pas de transactions avec parties liées significatives** identifiées
- **Rémunération** : programme liant la rémunération à des objectifs financiers et stratégiques pluriannuels — gouvernance jugée saine
- **Risque** : Squeri est un « insider » de 40 ans — vision potentiellement ancrée dans le modèle existant face aux disruptions (fintech, BNPL, agentic commerce)
- **Type** : Gestionnaire professionnel issu du rang — légitimité interne forte, connaissance métier profonde`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Hausses significatives (+5%)

**2021 — Reprise post-COVID** : Forte appréciation avec la réouverture, le rebond du voyage et des dépenses (Travel & Entertainment), catégorie clé pour Amex.

**2023-2024 — Croissance record et résilience premium** : Le titre est passé d'environ 145$ (T3 2023) à ~295$ (fin 2024). Les beats trimestriels successifs, la croissance des cotisations et la résilience de la clientèle premium ont catalysé une forte revalorisation.

**Janvier 2026 — Résultats FY 2025** : CA record 72,2 Mds$, BPA 15,38$, guidance FY 2026 solide (BPA 17,30-17,90$). Le titre a atteint un plus haut 52 semaines proche de 387$.

**Juin 2026 — Commentaires positifs du CFO** : +1,9% le 9 juin sur des propos optimistes concernant l'accélération du billing au T2 et la demande de nouvelles cartes.

---

### Baisses significatives (-5%)

**Mars 2020 — COVID-19** : Chute brutale avec l'effondrement du voyage et des craintes sur le crédit. Récupérée par la suite.

**Avril 2026 — Réaction post-T1 malgré un beat** : Malgré un dépassement sur toutes les lignes, le titre a reculé (~-1% pré-marché, puis correction plus large). Les investisseurs se sont focalisés sur la **hausse des dépenses marketing/technologie** et les craintes liées aux tarifs douaniers. Le titre a perdu ~23% depuis son plus haut 52 semaines à un moment donné.

**Volatilité macro 2026** : Beta de ~1,1-1,3 — le titre amplifie les mouvements de marché liés aux craintes de récession et à la sensibilité au crédit.

---

### Facteurs structurels de soutien au cours

- **Berkshire Hathaway** : ~22% du capital détenu par Buffett — base actionnariale stable, signal de qualité
- **Dividende croissant** : CAGR 5 ans ~14-17%, payout bas (~22%) — marge de progression
- **Rachats d'actions** : réduction continue du nombre d'actions (~-2%/an), relutif sur le BPA
- **Membre du Dow Jones 30** : flux institutionnels et indiciels réguliers

**Fourchette 52 semaines** : ~286$ - ~387$. Cours juin 2026 : ~300-314$.`,
  },
  {
    id: 10,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Paiements & cartes (2026)

| Société | Code Bloomberg | Capitalisation (Mds$) | Modèle | P/E | Rendement div. | ROE |
|---|---|---|---|---|---|---|
| **American Express** | **AXP US** | **~205-250** | **Closed-loop** | **~19-20x** | **~1,1%** | **~34-35%** |
| Visa | V US | ~595 | Open-loop (réseau) | ~28-29x | ~0,8% | ~50%+ |
| Mastercard | MA US | ~428 | Open-loop (réseau) | ~29x | ~0,5% | ~150%+ |
| Capital One | COF US | ~135-139 | Émetteur + réseau (Discover) | ~12x | ~1,3% | ~10-12% |
| Synchrony | SYF US | ~28 | Émetteur (private label) | ~7-8x | ~2,0% | ~18% |

*Données estimatives sur la base des cours et publications disponibles à juin 2026*

---

### Analyse comparative

**Visa & Mastercard — Les réseaux purs**
- Capitalisations supérieures (595 et 428 Mds$) malgré des CA inférieurs à Amex — le marché valorise leur modèle « asset-light » sans risque crédit
- Marges et ROE exceptionnels (pas de bilan de prêt à porter)
- P/E ~28-29x — prime structurelle vs Amex (~19x)
- **Verdict** : modèle supérieur en pureté, mais sans relation client ni donnée complète

**Capital One — Le challenger renforcé**
- Acquisition de Discover finalisée en 2025 — devient un acteur intégré émetteur+réseau
- Valorisation très basse (P/E ~12x) reflétant un profil de risque crédit plus élevé (clientèle plus large, subprime inclus)
- Concurrent direct croissant sur le premium et le réseau

**American Express vs Visa/Mastercard — L'écart de multiple**
Amex se négocie à ~19x contre ~29x pour Visa/MC. La décote s'explique par le **risque crédit porté au bilan** et le profil plus cyclique. La thèse bull repose sur un « re-rating » si le marché valorise davantage la part récurrente (cotisations) du modèle. La thèse bear souligne que la décote est justifiée par l'exposition au cycle de crédit.`,
  },
  {
    id: 11,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du CA** :
- Guidance management FY 2026 : **+9-10%** de croissance du CA
- Moteurs : conquête Millennials/Gen Z, machine à cotisations (+18%/an récent), international sous-pénétré
- Effet prix : hausses de cotisations (Platinum refresh, plein impact au T4 2026)
- Effet FX : -1 à -2%/an (structurel, dollar fort défavorable)
- Sortie de petits comptes PME : impact « low single-digit » sur les dépenses dès le T2 2026
- **Croissance CA publiée estimée : +8-10%/an**

**Levier opérationnel** :
- Ratio frais/CA déjà optimisé (22%) — gains marginaux supplémentaires possibles
- Réinvestissement marketing/tech volontaire qui plafonne l'expansion de marge court terme

**Coûts financiers / crédit** : surveiller les provisions ; scénario de base = crédit « best-in-class » maintenu (taux de défaut < 2,5%)

**Dilution / rachats** : rachats d'actions réduisant le nombre d'actions ~-2%/an — relutif sur le BPA

---

### Estimations BPA

| Exercice | BPA estimé | Croissance | P/E au cours actuel (~305$) |
|---|---|---|---|
| 2024 (réalisé) | **14,01$** | — | — |
| 2025 (réalisé) | **15,38$** | **+10%** | — |
| **2026E** | **17,30-17,90$** (guidance) | **+13-16%** | **~17-18x** |
| **2027E** | **19,50-20,50$** | **+12-15%** | **~15-16x** |
| **2028E** | **22,00-23,50$** | **+12-15%** | **~13-14x** |

*La guidance FY 2026 du management (17,30-17,90$) est le point d'ancrage. Les estimations 2027-2028 supposent le maintien de la dynamique premium + rachats relutifs.*

---

### Sensibilité

- **Scénario optimiste** (crédit stable + international fort + rachats) : BPA 2028 ~23,50$ → P/E 2028 ~13x — titre attractif
- **Scénario de base** : BPA 2028 ~22$ → P/E 2028 ~14x — valorisation raisonnable pour la qualité
- **Scénario pessimiste** (récession + hausse provisions) : BPA 2028 ~18-19$ → marge de sécurité réduite

**Conclusion** : Avec un P/E proche de sa moyenne décennale et bien sous Visa/MC, AXP offre un profil risque/rendement favorable SI le crédit reste maîtrisé. La variable clé est le cycle de crédit, pas la croissance des revenus (largement visible via les cotisations).`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus

**Risque modéré** : Les **net card fees** (cotisations) sont comptabilisées de manière étalée (deferred revenue) sur la période de service. La hausse rapide des cotisations (Platinum refresh) nécessite de surveiller le rythme de reconnaissance vs encaissement. Les **Membership Rewards** impliquent des estimations de provision pour points non utilisés (breakage) — une zone d'hypothèses comptables.

**À surveiller** : évolution de la provision pour récompenses (Membership Rewards liability) et hypothèses de taux d'utilisation des points.

### Provisions pour pertes sur créances (CECL)

**Signal de vigilance principal** : En tant que prêteur, Amex constitue des **provisions pour pertes attendues (CECL)**. Ces provisions reposent sur des modèles et des hypothèses macroéconomiques. Un sous-provisionnement en haut de cycle masquerait un risque crédit latent.

**Question à poser** : Les hypothèses macro des modèles CECL sont-elles conservatrices ? Quelle sensibilité du résultat à une dégradation du scénario économique ?

### Goodwill et immobilisations incorporelles

**Risque faible** : Amex n'a pas fait d'acquisitions transformantes générant un goodwill massif (contrairement à Capital One/Discover). Le goodwill au bilan est limité. Pas d'anomalie majeure identifiée.

### Information sectorielle

**Observation** : Le reporting par flux de revenus (discount, fees, interest) et par segment client est transparent. La granularité géographique pourrait être plus fine, mais conforme aux normes.

### Rémunération en actions

**Risque faible** : SBC présente et communiquée, dilution compensée par les rachats. Programme de rémunération lié à des objectifs pluriannuels — alignement correct.

### Parties liées

**Risque faible** : Pas de transaction avec parties liées significative. Berkshire Hathaway (~22%) est un actionnaire passif de long terme, sans représentation opérationnelle problématique.

### Flux de trésorerie vs résultat net

**Point de vigilance** : Pour un prêteur, le résultat net peut diverger du cash-flow opérationnel selon les variations d'encours et de provisions. Surveiller la qualité des bénéfices vs la croissance des encours de prêts.

### Engagements hors bilan

**À examiner** : Lignes de crédit non utilisées accordées aux titulaires (engagements de financement conditionnels) — significatives mais normales pour un émetteur, à suivre en cas de tirage massif en stress.

### Verdict global

**Risque comptable : FAIBLE à MODÉRÉ** — La principale zone de vigilance est la **provision crédit (CECL)** et les hypothèses sous-jacentes, inhérentes au modèle de prêteur. La machine à cotisations (deferred revenue) et la provision Membership Rewards méritent un suivi. Pas de signal d'alerte majeur ; gouvernance et transparence jugées solides, avec la caution implicite de Berkshire depuis 2009.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour le CEO d'American Express

### Stratégie et avantage concurrentiel

**1.** Le closed-loop est votre moat de données. À l'ère de l'« Agentic Commerce » où des agents IA décident des achats, comment vous assurez-vous que cet avantage de données et de sécurité reste décisif face à des réseaux ouverts qui investissent massivement dans l'IA ?

**2.** Le refresh Platinum US a réussi. Mais à quel moment le cycle de hausse des cotisations atteint-il un plafond où la rétention commence à se dégrader ? Quel est votre indicateur d'alerte précoce ?

**3.** JPMorgan (Chase Sapphire) et Capital One (renforcé par Discover) attaquent le premium. Quel est le concurrent que vous prenez le plus au sérieux, et quelle est votre réponse structurelle à la « guerre des récompenses » ?

### Allocation du capital

**4.** Votre ROE est ~35% et votre payout ratio ~22%. Pourquoi ne pas retourner davantage de capital ? À quel niveau de CET1 vous sentez-vous à l'aise pour accélérer les rachats ?

**5.** Vous avez choisi d'abaisser les seuils de ROI pour réinvestir en marketing/tech. Quels KPI mesureront le succès de ce pari, et à quelle échéance attendez-vous le retour sur ces investissements ?

**6.** Feriez-vous une acquisition transformante ? Le modèle closed-loop se prête-t-il au M&A, ou la croissance organique reste-t-elle la seule voie ?

### Risques

**7.** Vous portez le risque crédit, contrairement à Visa/Mastercard. En cas de récession sévère, de combien vos provisions CECL pourraient-elles augmenter, et quelle serait la sensibilité du BPA ?

**8.** La clientèle premium est présentée comme résiliente. Mais qu'avez-vous observé lors des derniers chocs (2020, inflation 2022-2023) sur le comportement réel des dépensiers haut de gamme ?

**9.** L'effet de change vous coûte 1-2% de croissance. Quelle est votre politique de couverture et pourquoi ne couvrez-vous pas davantage cette exposition internationale croissante ?

### Vision long terme

**10.** Dans 10 ans, quelle sera la part de l'international dans votre billed business, et comment financez-vous cette expansion sans diluer l'économie premium ?

**11.** Le BNPL (Buy Now Pay Later) et les fintechs captent les jeunes consommateurs. Vous dites conquérir Millennials/Gen Z — mais comment évitez-vous que ces cohortes vous quittent pour des alternatives moins chères en vieillissant ?

**12.** Comment l'IA générative transforme-t-elle concrètement vos coûts opérationnels et la gestion du risque ? Quel gain de productivité chiffrez-vous d'ici 2028 ?

### Gouvernance et culture

**13.** Vous êtes chez Amex depuis 40 ans. Comment vous assurez-vous de remettre en question les fondamentaux du modèle avec un regard neuf face aux disruptions technologiques ?

**14.** Berkshire détient 22% depuis 2009. Quelle influence Buffett et son équipe ont-ils réellement sur votre stratégie de long terme et votre allocation du capital ?

**15.** Quel est le risque que vous sous-estimez le plus aujourd'hui et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le moat « premium » est plus fragile qu'il n'y paraît

Les haussiers vantent la marque et le closed-loop. Mais le segment premium est désormais **le champ de bataille le plus disputé du secteur**. Chase Sapphire a redéfini les attentes de récompenses, et Capital One (avec Discover) construit un réseau intégré concurrent. La marque Amex protège-t-elle vraiment les marges, ou Amex est-il contraint à une **surenchère permanente de récompenses** qui érode l'économie unitaire de chaque carte ? La hausse continue des dépenses marketing/tech au T1 2026 suggère que **maintenir la position coûte de plus en plus cher**.

### 2. Le risque crédit — Le vrai talon d'Achille

Contrairement à Visa et Mastercard, **Amex porte le risque crédit**. Aujourd'hui, les métriques sont « best-in-class » (défaut 2,3%, sous 2019). Mais c'est précisément en **haut de cycle** que le crédit paraît parfait. Une récession, une remontée du chômage, ou un choc tarifaire frappant la consommation feraient grimper les provisions CECL et **comprimeraient directement le bénéfice**. Le marché valorise Amex comme un réseau alors qu'il assume un risque de prêteur.

### 3. Concentration sur la consommation discrétionnaire premium

Le Travel & Entertainment et les biens/services haut de gamme sont des dépenses **discrétionnaires**. En cas de retournement, le premium n'est pas immunisé — il se contracte simplement plus tard. La thèse « clientèle résiliente » n'a pas été testée par une récession profonde depuis que le modèle actuel est en place.

### 4. Le réinvestissement masque-t-il un plafonnement de la croissance ?

Le management abaisse les seuils de ROI pour « investir dans le momentum ». Lecture alternative : la **croissance organique facile est derrière nous** et il faut désormais dépenser de plus en plus pour acquérir et retenir les clients. Le ratio frais/CA est déjà à 22% — les gains de levier sont largement consommés. Si la croissance ralentit ET que les marges ne progressent plus, le BPA décélère.

### 5. La valorisation : moins de marge qu'il n'y paraît

À ~19x, Amex semble « bon marché » vs Visa/MC. Mais cette décote est **structurelle et justifiée** par le risque crédit et la cyclicité. Comparé à son propre historique (moyenne décennale 18,5x), AXP est à sa juste valeur, pas en solde. Le pari du « re-rating » vers un multiple de réseau est précisément ce que le marché refuse — à raison, car Amex N'EST PAS un réseau pur.

### 6. Le scénario catastrophe unique

**Choc crédit en récession sévère** : Si le chômage US monte significativement et que la consommation premium se contracte, le double effet (baisse des volumes + hausse des provisions) frapperait Amex bien plus durement que Visa/MC. Le BPA pourrait reculer de 20-30%, et le multiple se comprimerait simultanément (de 19x à 13-14x) — une baisse potentielle du titre de 30-40%. Probabilité d'une récession significative sur 3 ans : non négligeable compte tenu du contexte tarifaire et géopolitique.

### Conclusion short

American Express est une excellente entreprise avec une caution Buffett — mais le titre **intègre un crédit parfait et une croissance premium ininterrompue**. C'est un pari sur le maintien du cycle. À la moindre fissure du crédit ou ralentissement de la consommation discrétionnaire, le marché se souviendra brutalement qu'Amex est aussi un prêteur, et la « décote justifiée » deviendra une décote méritée.`,
  },
];
export default { ...meta, modules };
