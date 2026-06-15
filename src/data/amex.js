// ============================================================
//  DOSSIER : American Express (AXP)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "amex",                    // identifiant d'URL : /dossier/amex
  ticker: "AXP",
  name: "American Express Company",
  exchange: "NYSE",
  sector: "Services de paiement / Finance",
  initials: "AXP",                  // affiché dans la pastille
  tagline: "Réseau de paiement « closed-loop » premium — cartes, prêts et services aux membres.",
  riskScore: 68,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "amex.html",
  updated: "2026-06",              // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

American Express (AXP) est une **société de paiement intégrée et une marque premium**, fondée en 1850, basée à New York, ~76 800 employés. Le chiffre d'affaires 2025 (revenus nets des intérêts) atteint un record de **72,2 milliards $** (+10% vs 2024), pour un bénéfice net de **10,7 milliards $** et un BPA dilué de **15,38 $**.

La singularité d'Amex est son **modèle « closed-loop »** (boucle fermée) : contrairement à Visa et Mastercard qui se contentent d'opérer un réseau, Amex est à la fois **émetteur de cartes** (il prête aux titulaires), **acquéreur commerçant** (il contracte directement avec les marchands) et **opérateur de réseau**. Cette intégration verticale lui donne une vision unique des deux côtés de chaque transaction — données, sécurité et capacité à cibler les offres.

Le modèle repose sur trois flux de revenus :

- **Discount revenue** (~50% du CA) : commission prélevée sur les commerçants à chaque transaction (le « taux d'escompte »), proportionnelle au volume dépensé
- **Net card fees** (~13% du CA) : cotisations annuelles des cartes premium (Platinum, Gold, Centurion) — flux récurrent en forte croissance
- **Net interest income** (~18% du CA) : intérêts sur les soldes de cartes de crédit (segment prêt)

## Principaux produits et services

- **Cartes consommateurs** : Green, Gold, Platinum, Centurion (« Black ») — modèle premium à cotisation
- **Cartes commerciales** : programmes corporate, PME, gestion de dépenses, nouvelles cartes Graphite Business
- **Réseau & services marchands** : acquisition, traitement des paiements, plus de **170 millions de points d'acceptation** dans le monde
- **Prêts & dépôts** : soldes de cartes de crédit, comptes d'épargne, CD (157,9 Md$ de dépôts clients)

## Clients, fournisseurs, concurrents

**Clients** : titulaires de cartes premium (consommateurs aisés, Millennials et Gen Z en forte croissance), entreprises (PME et grands comptes), commerçants haut de gamme.

**Fournisseurs / partenaires** : banques émettrices partenaires, réseaux de récompenses (compagnies aériennes, hôtels), partenaires d'expérience (NFL, NBA, Fanatics, Resy, lounges Centurion).

**Concurrents** : **Visa** et **Mastercard** (réseaux « open-loop », volumes bien supérieurs mais sans prêt) ; **Capital One** (post-acquisition Discover, désormais 4ᵉ réseau intégré) ; **JPMorgan Chase** (Sapphire, concurrent direct sur le premium) ; **Discover**.

## Modalités contractuelles

Amex prélève un **taux d'escompte** (discount rate) auprès des commerçants — historiquement plus élevé que Visa/MA, justifié par le pouvoir d'achat supérieur de ses membres. Les **cotisations annuelles** (jusqu'à 695 $ pour la Platinum US après refresh) sont reconnues de façon lissée sur l'année. Le segment prêt génère des **intérêts** soumis au risque de crédit, qu'Amex maîtrise grâce à une base de clientèle premium (taux de défaut « best-in-class », sous les niveaux de 2019).`,
  },

  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'American Express dans la chaîne de valeur

Amex occupe une position **centrale et unique** dans l'écosystème des paiements : grâce à son modèle « closed-loop », il est simultanément présent sur plusieurs maillons que Visa/Mastercard laissent à des banques tierces.

### Amont — Intrants & partenaires

**Capital & financement** :
- Dépôts clients (157,9 Md$) — comptes d'épargne et CD à coût maîtrisé
- Marchés de la dette (long-term debt) pour financer le portefeuille de prêts
- Fonds propres (CET1 ~10,5%)

**Technologie & infrastructure** :
- Plateformes de traitement propriétaires (réseau closed-loop)
- ACE Developer Kit — intégration des cartes dans les transactions IA-pilotées
- Partenaires cloud et cybersécurité

**Partenaires d'avantages (rewards)** :
- Compagnies aériennes, chaînes hôtelières (programmes de points)
- Resy (réservation restaurants), lounges Centurion
- Ligues sportives : NFL (partenaire paiement officiel dès 2026), NBA, Fanatics

---

### American Express — Cœur intégré

**Émission** : conception et distribution des cartes (consommateurs, commerciales, premium)
**Réseau** : traitement des transactions sur sa propre boucle fermée
**Acquisition** : contractualisation directe avec >170M de points d'acceptation
**Prêt & dépôt** : gestion du risque de crédit et de la liquidité

---

### Aval — Clients finaux

**Titulaires de cartes** : consommateurs premium, Millennials & Gen Z, entreprises (PME et grands comptes)

**Commerçants** : du luxe au quotidien, restaurants (via Resy), voyages, retail — qui paient le taux d'escompte

**Entreprises clientes** : programmes corporate, gestion de dépenses, logiciels (ex-acquisition de capacités fintech : Kabbage, Resy, Accertify)

**Partenaires co-branded** : Delta (carte co-brandée majeure), Hilton, Marriott, et autres émetteurs de cartes co-marquées`,
  },

  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — Exercice 2025 (CA total : 72,2 Md$)

### Par segment opérationnel

| Segment | CA 2025 (est.) | Part | Tendance |
|---|---|---|---|
| Global Consumer Services (USCS + intl conso) | ~34,8 Md$ | ~48% | Forte, tirée par le premium et les jeunes |
| Global Commercial Services | ~16,9 Md$ | ~23% | Modérée (PME +2-4%, grands comptes +4%) |
| International Card Services | ~13,0 Md$ | ~18% | La plus dynamique (+12% billed business) |
| Global Merchant & Network Services | ~7,8 Md$ | ~11% | Stable, lié au volume réseau |

---

### Par flux de revenus (2025)

| Flux | Montant | Croissance | Dynamique |
|---|---|---|---|
| Discount revenue | ~36 Md$ | ~+6% | Cœur du modèle, lié au volume dépensé |
| Net card fees | ~7,4 Md$ | **+19%** | Le plus rapide — cotisations premium |
| Net interest income | ~12,8 Md$ | **+12%** | Segment prêt, sensible aux taux et au crédit |
| Service fees & other | ~5,5 Md$ | ~+10% | Services divers |

**Point clé** : la croissance des **net card fees (+19%)** et du **net interest income (+12%)** dépasse celle du discount revenue — signe que la stratégie premium (cotisations) et le crédit deviennent des moteurs de plus en plus importants.

---

### Dynamiques par segment

**Global Consumer Services** : le plus gros segment. Dépense US Consumer en hausse, portée par les jeunes (Gen Z +38%, Millennials +12%) et le refresh Platinum. Cœur de la machine premium.

**International Card Services** : la croissance la plus forte (+12% billed business), surpassant le domestique. L'expansion de l'acceptation hors US (doublée en 4 ans) ouvre un long runway de croissance.

**Global Commercial Services** : croissance plus modeste. Les PME (SME) ne progressent que ~+2-4%. Le management anticipe un léger frein en 2026 lié à la sortie programmée de certaines petites relations. Nouveaux produits Graphite pour relancer.

**Global Merchant & Network Services** : segment « réseau pur », stable, qui suit le volume global. Le plus petit (~11%) mais structurellement rentable.`,
  },

  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Modèle « closed-loop » — Donnée et intégration verticale
Amex est le seul grand acteur à voir **les deux côtés de chaque transaction** (titulaire et commerçant). Cette intégration verticale produit des données propriétaires inégalées pour le ciblage des offres, la détection de fraude et la gestion du risque de crédit. Visa et Mastercard, en boucle ouverte, ne voient que le flux réseau.

### 2. Marque premium et effet de réseau de prestige
La marque American Express évoque le statut, le service et la fiabilité depuis 1850. Les cartes Platinum et Centurion sont des **symboles d'appartenance** difficiles à répliquer. Cette image attire une clientèle aisée qui dépense davantage — ce qui justifie un taux d'escompte supérieur auprès des commerçants.

### 3. Boucle vertueuse spend-fee
Plus les membres dépensent, plus Amex peut financer des récompenses et des avantages riches (lounges, crédits voyage), ce qui attire des membres encore plus dépensiers. La hausse des cotisations (refresh Platinum US) est **acceptée** sans érosion de la rétention — preuve d'un fort pricing power.

### 4. Acquisition premium — Millennials & Gen Z
**73% des nouveaux comptes mondiaux** sont acquis sur des produits à cotisation. La dépense Gen Z a bondi de **+38%** en 2025 (US Consumer). Amex capture les jeunes professionnels aisés tôt, avec une valeur vie client (LTV) croissante à mesure que leurs revenus augmentent.

### 5. Qualité de crédit structurelle
Parce qu'Amex sélectionne une clientèle premium, ses taux de défaut et de délinquance restent **sous les niveaux de 2019**, malgré un environnement macro incertain — un avantage de coût du risque considérable face aux émetteurs grand public.

## Positionnement vs concurrence

| Critère | American Express | Visa | Mastercard |
|---|---|---|---|
| Modèle | Closed-loop (émetteur + réseau) | Open-loop (réseau seul) | Open-loop (réseau seul) |
| Risque de crédit | Oui (porte les prêts) | Non | Non |
| Marge nette | ~15% | ~54% | ~46% |
| Pricing power | Élevé (premium) | Élevé | Élevé |
| Exposition cyclique | Plus élevée (crédit) | Faible | Faible |

## Pouvoir de négociation

- **Vis-à-vis des commerçants** : **Modéré à élevé** — Amex impose un taux d'escompte supérieur grâce au pouvoir d'achat de ses membres, mais doit composer avec la résistance de certains marchands (acceptation historiquement plus faible, désormais à quasi-parité aux US)
- **Vis-à-vis des titulaires** : **Élevé** — la hausse des cotisations est absorbée sans perte de rétention
- **Vis-à-vis des partenaires (compagnies, hôtels)** : **Élevé** — Amex apporte une clientèle dépensière que les partenaires veulent capter`,
  },

  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Paiements & cartes (2026)

| Société | Code Bloomberg | Capitalisation (Md$) | EV/CA | P/E | Rendement div. | ROE |
|---|---|---|---|---|---|---|
| **American Express** | **AXP US** | **~213** | **~3,0x** | **~18,7x** | **~1,0%** | **~35%** |
| Visa | V US | ~600+ | ~très élevé | ~24-25x | ~0,8% | ~50%+ |
| Mastercard | MA US | ~450 | ~très élevé | ~28-30x | ~0,6% | très élevé* |
| Capital One | COF US | ~grande | n/a (banque) | modéré | ~modéré | variable |
| Discover | (intégré COF) | — | — | — | — | — |

*ROE Mastercard très élevé en raison de fonds propres faibles (rachats massifs). *Données estimatives sur la base des cours et publications disponibles à juin 2026 — ordres de grandeur à vérifier.*

---

### Analyse comparative

**Visa (V) — Le réseau pur dominant**
- Modèle « open-loop » : opère le réseau sans porter le risque de crédit
- Marge nette ~54%, P/E forward ~24x — valorisation premium justifiée par la légèreté du modèle
- Croissance +15-17% (volumes paiement, cross-border)
- **Verdict** : plus rentable et moins cyclique qu'Amex, d'où la prime de P/E

**Mastercard (MA) — Le second réseau pur**
- Modèle similaire à Visa, marge nette ~46%, P/E ~28-30x — le plus cher du groupe
- Croissance soutenue, forte exposition cross-border
- **Verdict** : prime maximale, reflet de la qualité du modèle réseau pur

**American Express vs Visa/MA — La décote du closed-loop**
Amex se paie ~18,7x les bénéfices, soit une **décote de 25-35%** face à Visa/MA. Cette décote est **structurelle et justifiée** : Amex porte le risque de crédit (cyclicité, provisions) et affiche une marge nette bien inférieure (~15% vs 46-54%). En contrepartie, Amex capte trois flux de revenus (escompte + cotisations + intérêts) et un ROE de 35%. Le pari bull est que la qualité premium de sa clientèle réduit la prime de risque que le marché lui applique.`,
  },

  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T1 2026 — Analyse complète

### Chiffre d'affaires vs consensus

| Indicateur | T1 2026 | Consensus | Écart |
|---|---|---|---|
| CA (net d'intérêts) | 18 907 M$ | ~18 610 M$ | **+1,6% ✓** |
| Croissance YoY | +11% (+10% FX-aj.) | — | Forte |
| BPA dilué | 4,28 $ | ~4,00 $ | **+7% (battu)** |
| Net income | 2 971 M$ | — | +15% YoY |
| Billed business | 428,0 Md$ | — | +10% (+9% FX-aj.) |

**Amex a dépassé le consensus** sur le CA comme sur le BPA. La dépense des membres a accéléré à +10%, **la plus forte croissance trimestrielle en 3 ans**.

---

### Facteurs clés par flux

- **Net card fees** : +16% — moteur premium toujours en tête
- **Net interest income** : +12% (FX-aj.) — segment prêt solide
- **Discount revenue** : tiré par la dépense biens & services et voyages/loisirs
- **International** : surperformance continue vs domestique

---

### Évolution des marges & rentabilité

- **ROE de 35,2%** — efficacité du capital remarquable
- **CET1 à 10,5%** — bilan solide
- Crédit **« best-in-class »** : taux de défaut (write-off) à 2,3%, délinquance 30+ jours à 1,3% — sous les niveaux de 2019

---

### Perspectives et guidance

- **Guidance FY2026 réaffirmée** : CA +9-10%, BPA **17,30-17,90 $**
- Le management a **augmenté ses investissements** marketing et technologie — priorité au momentum long terme sur la marge court terme
- Stephen Squeri : *"un très bon début d'année"* ; modèle bien positionné sur les clients premium
- Léger frein attendu sur la dépense PME dès le T2 (sortie de petites relations)

---

### Signaux d'alerte bilan

- **Coûts d'engagement en hausse** : Card Member rewards +9-13% — surveiller le ratio coûts/dépense
- **Risque de crédit** : provisions à suivre dans un contexte macro incertain (Amex porte le risque, contrairement à Visa/MA)
- **Dépôts clients** : 157,9 Md$ — base de financement à coût maîtrisé, à surveiller en cas de fuite vers des taux plus élevés

---

### Réaction du marché

Malgré le double dépassement (CA + BPA), le titre a **reculé de ~1% en pré-marché** (à ~329 $). Cela indique que le marché avait déjà intégré une bonne partie de la performance, et reste prudent face à l'incertitude macro et géopolitique. Le titre évolue dans une fourchette 52 semaines de **286-387 $**.`,
  },

  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2024-2026

**2024** : Ton confiant. Squeri insiste sur le modèle premium résilient et la conquête des jeunes générations. Première mise en avant de la croissance Gen Z.

**2025** : Ton offensif et constant. Année record (CA 72,2 Md$). Le management relève sa guidance en cours d'année, met en avant le refresh Platinum US et la forte rétention malgré la hausse des cotisations.

**T1 2026** : Ton affirmé mais prudent sur la macro. Squeri parle d'un *"très bon début d'année"*, réaffirme la guidance, et annonce **l'augmentation des investissements** (marketing + tech) en profitant de la surperformance — un choix de long terme assumé.

---

### Priorités répétées du management

**1. Clientèle premium & jeunes générations** — Thème dominant. Le management martèle que 73% des nouveaux comptes sont sur produits à cotisation et que Gen Z (+38%) / Millennials (+12%) sont les moteurs. La stratégie « premium spend-and-fee » est le cœur du discours.

**2. Commerce agentique (Agentic Commerce)** : nouveau thème stratégique. Amex positionne son **modèle closed-loop comme un avantage de sécurité** pour l'ère des agents IA qui effectueront des achats autonomes (ACE Developer Kit, Amex Agent purchase protection). Anticipation d'une rupture technologique.

**3. Qualité du crédit « best-in-class »** : Squeri répète que les taux de défaut et de délinquance restent **sous les niveaux de 2019**, présentant cela comme un différenciateur clé face aux émetteurs grand public.

**4. Investissement contracyclique** : le management utilise la surperformance pour **abaisser les seuils de ROI** sur les investissements marketing/tech — priorité au momentum durable.

**5. Expansion internationale & partenariats** : NFL (partenaire paiement officiel), NBA, Fanatics, >50 ligues/équipes/événements — l'engagement par l'expérience.

---

### Analyse du sentiment

- **Confiance** : élevée et stable. Le management « livre, dépasse et réaffirme » plutôt que de surpromettre.
- **Prudence macro** : Squeri mentionne systématiquement l'incertitude macro et géopolitique, sans catastrophisme.
- **Questions analystes clés** : soutenabilité de la croissance premium, impact de la concurrence (JPMorgan, Capital One/Discover), évolution des coûts d'engagement et du coût du risque.`,
  },

  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Stephen J. Squeri — Président-Directeur Général (CEO depuis février 2018)

**Parcours** : Diplômé de Manhattan College (MBA). Chez Amex depuis 1985 (~40 ans) — connaissance intime du groupe. A dirigé la technologie et les services commerciaux avant de prendre la tête de l'entreprise.

**Bilan** :
- CA passé de ~40 Md$ (2018) à **72,2 Md$ (2025)** — quasi-doublement
- Pilotage réussi de la crise COVID (rebond rapide de la dépense premium dès 2021)
- Repositionnement vers les **jeunes générations** (Gen Z/Millennials) — pari de long terme aujourd'hui validé
- Refresh réussi de la Platinum US (hausse de cotisation absorbée sans perte de rétention)
- Croissance moyenne du CA de **+11%/an** et du BPA « mid-teens » sur 2022-2025 ; TSR cumulé de **160%**

**Ancienneté & participation** : ~8 ans comme CEO, 40 ans dans le groupe. Rémunération largement indexée sur la performance ; détient une participation significative. Alignement jugé bon.

---

### Berkshire Hathaway — Actionnaire de référence
Warren Buffett détient ~20% d'American Express depuis des décennies — un signal de confiance de long terme et un stabilisateur de l'actionnariat. Buffett a publiquement salué le moat de marque et le modèle premium d'Amex.

---

### Allocation du capital — Historique

| Indicateur | 2023 | 2024 | 2025 | T1 2026 |
|---|---|---|---|---|
| ROE | ~32% | ~33% | ~35% | 35,2% |
| BPA dilué | 11,21 $ | 15,38 $* | 15,38 $ | (TTM 16,02 $) |
| Dividende/action (trim.) | 0,60 $ | 0,70 $ | 0,82 $ | 0,82 $ |
| Capital rendu | — | — | 7,6 Md$ | 2,32 Md$ |

*Note : BPA 2024 publié 14,01 $ ; 15,38 $ correspond à 2025. ROE soutenu >30% — allocation très disciplinée.

**Tendance** : ROE structurellement élevé (>30%), rachats d'actions réguliers (réduisant le nombre d'actions de ~2-3%/an), dividende en hausse continue (+16-17%/an récemment). Allocation jugée exemplaire.

---

### Signaux d'alerte

- **Pas de transaction avec parties liées significative** identifiée
- **Acquisition TheFork** (700 M$, juin 2026) : petite opération bolt-on, à intégrer dans l'écosystème Resy/restauration — taille modeste, risque faible
- **Rémunération** : alignée sur la performance, transparente
- **Type** : gestionnaire professionnel issu du rang (40 ans dans le groupe) — légitimité et connaissance métier profondes, mais possible biais de continuité face aux ruptures (fintechs, paiements agentiques)`,
  },

  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Hausses significatives (+5%)

**2021 — Rebond post-COVID** : forte reprise de la dépense premium (voyages, restauration) à mesure que l'économie rouvrait. Le modèle s'est révélé plus résilient que craint, le titre a fortement rebondi.

**2023-2024 — Validation de la stratégie jeunes générations** : les résultats trimestriels successifs montrant l'accélération de la dépense Gen Z/Millennials ont régulièrement soutenu le titre, qui a atteint des records.

**Janvier 2026 — CA record FY2025 + dividende +16%** : malgré un léger manque sur le BPA T4 (3,53 $ vs 3,54 $ attendu), le CA record de 72,2 Md$, la guidance 2026 ambitieuse et la hausse du dividende ont structurellement soutenu le récit.

---

### Baisses significatives (-5%)

**Mars 2020 — COVID-19** : chute brutale avec l'effondrement des dépenses voyages/loisirs (cœur de la clientèle premium). Rapidement récupérée.

**2022 — Crise / hausse des taux** : correction des valeurs financières et craintes de récession ; le risque de crédit porté par Amex a inquiété davantage que Visa/MA.

**Janvier 2026 — Léger manque BPA T4** : le titre a reculé de ~3% en pré-marché malgré un CA record, sur un BPA T4 manquant le consensus d'un cent — illustrant la sensibilité aux attentes élevées.

**Avril 2026 — Réaction tiède post-T1** : malgré un double dépassement (CA + BPA), le titre a reculé de ~1% — le marché avait déjà intégré la performance, et restait prudent sur la macro.

---

### Facteurs structurels

- **Bêta ~1,37** : titre cyclique, plus volatil que le marché, sensible au sentiment macro et au crédit
- **Soutien Berkshire (~20%)** : actionnaire stable de long terme, réducteur de volatilité
- **Sensibilité au crédit** : contrairement à Visa/MA, le cours réagit aux signaux sur le chômage, les provisions et le cycle de consommation
- **Cible analystes moyenne** ~361 $ (range 285-450 $) — soit un **upside d'environ +15%** sur le cours spot ~313-330 $, consensus « Achat » modéré`,
  },

  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du CA** :
- Guidance management 2026 : **+9-10%**, aspiration long terme **10%+**
- Discount revenue : +5-7%/an (lié à la dépense)
- Net card fees : +14-18%/an (moteur premium, le plus rapide)
- Net interest income : +8-12%/an (selon taux et croissance des prêts)
- International : surcroissance (+12%)
- **Croissance CA totale estimée : +9-11%/an**

**Levier opérationnel** :
- Investissements marketing/tech relevés en 2026 — pèsent légèrement sur la marge court terme
- Croissance BPA « mid-teens » visée au-delà de 2026 (effet rachats d'actions)

**Coût du risque** : variable selon le cycle — hypothèse de provisions stables à légèrement croissantes (clientèle premium résiliente)

**Dilution / rachats** : Amex **rachète ses actions** (~2-3%/an), ce qui amplifie la croissance du BPA au-delà de celle du net income

---

### Estimations BPA

| Exercice | BPA estimé | Croissance | P/E au cours actuel (~315 $) |
|---|---|---|---|
| 2024 (réalisé) | **14,01 $** | — | — |
| 2025 (réalisé) | **15,38 $** | **+10%** | — |
| **2026E** | **17,30-17,90 $** | **+13-16%** | **~18x** |
| **2027E** | **19,50-20,50 $** | **+12-15%** | **~16x** |
| **2028E** | **22,00-23,50 $** | **+12-15%** | **~14x** |

*Fourchette 2026 = guidance officielle du management. 2027-2028 extrapolées sur l'aspiration « mid-teens ».*

---

### Sensibilité

- **Scénario optimiste** (dépense premium soutenue + crédit stable) : BPA 2028 ~23,5 $ → P/E 2028 ~13x — titre attractif
- **Scénario de base** : BPA 2028 ~22 $ → P/E 2028 ~14x — valorisation raisonnable pour un ROE de 35%
- **Scénario pessimiste** (récession + hausse des provisions) : BPA 2028 ~18-19 $ → P/E déprimé, mais le titre se contracterait fortement avant

**Conclusion** : à ~315-330 $, Amex se paie ~18x les bénéfices 2026, en ligne avec sa moyenne historique 10 ans (~18,5x) et en décote face à Visa/MA. Le profil risque/rendement est favorable pour un investisseur tolérant à la cyclicité du crédit, avec un upside porté par la croissance premium et les rachats d'actions. Le principal risque reste **macroéconomique** (cycle du crédit).`,
  },

  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels
**1. Modèle spend-and-fee résilient** : Amex vise une croissance du CA de **10%+** et une croissance du BPA « mid-teens » au-delà de 2026. Le couple discount revenue + cotisations + intérêts est diversifié et largement récurrent. Le management a réaffirmé une guidance 2026 de +9-10% de CA et un BPA de **17,30-17,90 $**.

**2. Conquête des jeunes générations** : Gen Z +38% et Millennials +12% de dépense en 2025. Amex capture tôt une clientèle aisée à forte LTV, avec 73% des nouveaux comptes sur produits à cotisation — un moteur de croissance durable des net card fees (+16-20% par trimestre).

**3. Croissance internationale** : International Card Services croît à ~+12% de billed business, surpassant le marché domestique. L'expansion de l'acceptation (>170M de points de vente) ouvre une part de portefeuille croissante hors US.

**4. Pricing power démontré** : le refresh de la Platinum US (cotisation portée à 695 $) a accéléré la dépense tout en maintenant une forte rétention — preuve que la valeur perçue justifie le prix.

**5. Allocation du capital disciplinée** : ROE de **35,2%** (T1 2026), 7,6 Md$ rendus aux actionnaires en 2025, dividende relevé de +16% en 2026. Berkshire Hathaway reste un actionnaire de référence de long terme (~20% du capital).

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents au business

**1. Sensibilité cyclique au crédit** : contrairement à Visa/MA, Amex **porte le risque de crédit**. En récession, les provisions pour pertes augmentent mécaniquement et compriment les bénéfices. Une remontée du chômage frapperait même la clientèle premium d'Amex.

**2. Concurrence intensifiée sur le premium** : JPMorgan (Sapphire Reserve), Capital One (post-Discover, désormais réseau intégré) et les fintechs attaquent le segment haut de gamme. La « guerre des récompenses » pourrait éroder les marges via des coûts d'engagement plus élevés.

**3. Hausse des coûts d'engagement** : les Card Member rewards et services ont progressé de +9-13%. Maintenir l'attrait des cartes premium coûte de plus en plus cher ; si la dépense ralentit sans que les coûts baissent, les marges se compriment.

### Analyse pré-mortem
Que se passerait-il si AXP retombait à 230 $ dans 2 ans ? Scénario : récession US, hausse des provisions de crédit, ralentissement de la dépense premium, et compression du P/E de ~19x à ~13x. Combiné à une stagnation du BPA, la valorisation reculerait de 25-30%.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : à ~19x les bénéfices, Amex se paie une décote face à Visa (~24x) et Mastercard (~28x) — mais cette décote est **justifiée** par le risque de crédit qu'il porte et sa cyclicité supérieure. Le marché traite parfois Amex comme un « réseau » alors que c'est aussi une **banque** exposée au cycle du crédit. En cas de retournement macro, la double nature d'Amex (réseau + prêteur) amplifierait la baisse plutôt que de l'amortir.`,
  },

  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus

**Risque modéré** : le discount revenue est reconnu à la transaction (standard). Le point sensible est la **comptabilisation des net card fees** : les cotisations annuelles sont reconnues de façon lissée sur la période de la carte. Un changement de méthode de lissage ou d'hypothèses pourrait gonfler ponctuellement le CA. À surveiller dans les notes.

### Provisions pour pertes de crédit (le vrai sujet)

**Signal d'alerte clé** : contrairement à Visa/MA, Amex **porte le risque de crédit** et constitue des **provisions pour pertes** (CECL aux US). Ces provisions reposent sur des modèles et des hypothèses macroéconomiques. **Une sous-provision** en période favorable gonflerait artificiellement les bénéfices, et inversement. C'est le poste le plus discrétionnaire du compte de résultat — à examiner chaque trimestre (taux de write-off 2,3%, délinquance 1,3%, jugés sains).

### Coûts d'engagement (Card Member rewards)

**Point de vigilance** : les provisions pour récompenses (Membership Rewards) reposent sur des estimations du taux d'utilisation futur des points (« breakage »). Une modification des hypothèses de breakage impacte directement le résultat. Poste significatif et croissant (+9-13%).

### Goodwill et immobilisations incorporelles

**Risque faible** : Amex a réalisé des acquisitions modestes (Kabbage, Resy, Accertify, TheFork à venir). Le goodwill est limité par rapport au bilan. Pas de méga-acquisition génératrice de goodwill massif comme chez certains pairs. Risque de dépréciation faible.

### Information sectorielle

**Observation** : la structure de reporting (USCS, CS, ICS, GMNS) a évolué dans le temps. Vérifier la cohérence des comparaisons historiques après tout changement de périmètre segmentaire.

### Rémunération en actions

**Risque faible** : SBC présente mais maîtrisée pour une grande financière. Les rachats d'actions dépassent largement la dilution liée à la SBC — la base d'actions diminue nettement.

### Flux de trésorerie vs résultat net

**Point de vigilance spécifique aux banques** : pour un prêteur, le free cash-flow classique est peu pertinent (la croissance des prêts consomme du cash). Il faut juger via le **résultat, le ROE et l'adéquation des fonds propres (CET1 10,5%)** plutôt que le FCF. Pas d'anomalie identifiée.

### Verdict global

**Risque comptable : FAIBLE À MODÉRÉ** — Amex est une institution financière régulée (Fed), auditée, au reporting standard. Le risque principal n'est pas la fraude mais la **nature discrétionnaire des provisions de crédit et des provisions rewards**, qui peuvent lisser ou amplifier les bénéfices selon les hypothèses. À surveiller en priorité : l'évolution du coût du risque sur un cycle complet.`,
  },

  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour le PDG d'American Express

### Stratégie et avantage concurrentiel

**1.** Capital One a racheté Discover et dispose désormais d'un **réseau intégré closed-loop** comme le vôtre, mais avec une clientèle plus large. En quoi votre moat de marque premium reste-t-il défendable face à un concurrent qui peut désormais répliquer votre modèle d'intégration verticale ?

**2.** Le refresh de la Platinum US (cotisation à 695 $) a maintenu la rétention. Jusqu'où pouvez-vous pousser les cotisations avant d'atteindre un point de rupture, et quel indicateur surveillez-vous pour le détecter ?

**3.** Vous présentez le commerce agentique (IA) comme une opportunité grâce à votre closed-loop. Concrètement, qu'est-ce qui empêche Visa, Mastercard ou un acteur tech de sécuriser aussi bien les transactions d'agents IA, et quel est votre calendrier de déploiement ?

### Allocation du capital

**4.** Votre ROE est de 35% — exceptionnel. Est-il soutenable, ou reflète-t-il en partie un coût du risque anormalement bas en haut de cycle ? Quel ROE normalisé visez-vous à travers un cycle complet ?

**5.** Vous avez rendu 7,6 Md$ aux actionnaires en 2025. Comment arbitrez-vous entre rachats d'actions, dividende et investissement dans la croissance (marketing/tech), surtout maintenant que vous avez abaissé vos seuils de ROI ?

**6.** L'acquisition de TheFork (700 M$) s'ajoute à Resy. Quelle est votre doctrine d'acquisition, et qu'avez-vous appris des intégrations passées (Kabbage, Accertify) sur la création réelle de valeur ?

### Risques

**7.** Vous portez le risque de crédit, contrairement à Visa/MA. Sur quelles hypothèses macroéconomiques reposent vos provisions actuelles, et qu'adviendrait-il de vos bénéfices si le chômage US remontait de 2 points ?

**8.** Les coûts d'engagement (rewards, services) progressent de +9-13%. À quel rythme de dépense des membres ces coûts deviennent-ils dilutifs pour la marge, et avez-vous un plan si la dépense ralentit sans que les coûts baissent ?

**9.** Vous prévoyez un frein sur la dépense PME en 2026 (sortie de petites relations). Est-ce un signal de faiblesse structurelle du segment commercial, ou un nettoyage ponctuel du portefeuille ?

### Vision long terme

**10.** L'international croît à +12%, plus vite que le domestique. Dans 5 ans, quelle part de votre CA proviendra de l'international, et quels marchés priorisez-vous ?

**11.** La clientèle Gen Z (+38%) est votre pari de long terme. Quelle est sa valeur vie client (LTV) projetée vs son coût d'acquisition, et comment vous assurez-vous de la fidéliser à mesure que les fintechs courtisent les jeunes ?

**12.** Quel est le risque que les stablecoins et les paiements alternatifs désintermédient progressivement votre réseau et votre taux d'escompte ?

### Gouvernance et culture

**13.** Vous êtes chez Amex depuis 40 ans. Comment évitez-vous le biais de continuité et vous assurez-vous de remettre en cause les fondamentaux du modèle face aux ruptures (paiements agentiques, fintechs) ?

**14.** Berkshire Hathaway détient ~20% du capital depuis des décennies. Cette stabilité actionnariale influence-t-elle vos décisions d'allocation du capital, et que se passerait-il si Berkshire réduisait sa position ?

**15.** Quel est le risque que vous sous-estimez le plus aujourd'hui et que le marché ne voit pas encore dans la valorisation ?`,
  },

  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le « moat » closed-loop n'est plus unique

Les haussiers vantent l'intégration verticale d'Amex. Mais **Capital One vient de racheter Discover** et dispose désormais d'un réseau closed-loop comparable — avec une clientèle plus large et une capacité à concurrencer Amex sur les données et le ciblage. Le moat « j'ai les deux côtés de la transaction » devient partageable. Si l'avantage data se banalise, le taux d'escompte premium d'Amex devient plus difficile à défendre.

### 2. Concentration sur la dépense discrétionnaire premium

Le modèle repose sur une **dépense premium discrétionnaire** (voyages, restauration, luxe) — précisément ce qui se contracte le plus vite en récession. La clientèle aisée est plus résiliente, mais pas immunisée. Une récession qui frappe les revenus élevés (krach boursier, chute de l'immobilier haut de gamme) toucherait Amex au cœur, là où Visa/MA, plus diversifiés sur toute la dépense, amortiraient mieux.

### 3. Le risque de crédit — Un amplificateur de cycle ignoré

Contrairement à Visa/MA, Amex **est une banque**. En haut de cycle, le coût du risque est anormalement bas (provisions faibles → bénéfices gonflés → ROE de 35%). **Ce ROE est en partie un artefact de cycle.** Quand le cycle se retourne, les provisions explosent et le ROE chute. Le marché valorise Amex sur des bénéfices de pic — c'est le piège classique des financières en fin de cycle.

### 4. Valorisation — La décote est un avertissement, pas une opportunité

Les haussiers présentent la décote (~18,7x vs Visa 24x, MA 28x) comme une opportunité. **C'est l'inverse** : le marché applique sciemment une décote parce qu'Amex porte le risque de crédit et la cyclicité. Si une récession survient et que le BPA recule de 20-30%, le P/E ne « protège » pas — il se compresse aussi (de 18x vers 12-13x), produisant une **double peine** : -30% de BPA × compression de multiple = chute potentielle de 35-45%.

### 5. Hausse structurelle des coûts d'engagement

La « guerre des récompenses » avec JPMorgan (Sapphire Reserve) et les fintechs oblige Amex à enrichir continuellement ses avantages (lounges, crédits voyage). Ces **Card Member rewards et services (+9-13%)** progressent plus vite que certains revenus. À terme, maintenir l'attrait premium devient un tapis roulant coûteux : si la dépense ralentit, ces coûts fixes deviennent un poids mort sur la marge.

### 6. Le scénario catastrophe unique

**Récession frappant les hauts revenus + désintermédiation technologique** : imaginez une récession qui touche spécifiquement la clientèle aisée (correction des actifs financiers), combinée à une montée des paiements alternatifs (stablecoins, wallets) qui érode le taux d'escompte. Amex subirait simultanément une hausse des provisions, une baisse de la dépense premium et une compression des marges réseau. Probabilité d'un tel scénario combiné sur 3-5 ans ? 20-30% selon les hypothèses pessimistes.

### Conclusion short

American Express est une **entreprise de grande qualité** avec une marque iconique et un actionnaire de référence prestigieux (Berkshire). Mais à ~315-330 $, le titre price une continuation du haut de cycle du crédit ET une défense durable de son moat premium face à un Capital One/Discover désormais armé. Le risque/rendement n'est pas catastrophique — mais la **double nature d'Amex (réseau + banque) en fait une valeur bien plus cyclique** que sa décote de valorisation ne le suggère. En cas de retournement macro, la baisse pourrait surprendre par son ampleur.`,
  },
];

export default { ...meta, modules };
