// ============================================================
//  DOSSIER : Amazon.com, Inc. (AMZN)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "amazon",                   // identifiant d'URL : /dossier/amazon
  ticker: "AMZN",
  name: "Amazon.com, Inc.",
  exchange: "Nasdaq",
  sector: "E-commerce, cloud et publicité numérique",
  initials: "AMZN",                 // affiché dans la pastille
  tagline: "Machine à trois moteurs — commerce, AWS et publicité — engagée dans le plus grand cycle d'investissement IA de l'histoire cotée.",
  riskScore: 62,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "amazon.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Amazon n'est plus une entreprise de commerce en ligne : c'est un **conglomérat d'infrastructures** dont trois moteurs cohabitent sous une même enveloppe comptable. Au T2 2026, le groupe a franchi pour la première fois **200 Mds$ de chiffre d'affaires trimestriel** (200,6 Mds$, +20 % sur un an) pour un résultat opérationnel de **27,5 Mds$** (+43 %), soit une marge opérationnelle de **13,7 %** — un niveau inédit dans l'histoire du groupe.

La mécanique repose sur une **subvention croisée assumée et inversée** par rapport à la décennie précédente :

- **Le commerce** (Amérique du Nord + International) génère le volume, la trésorerie d'exploitation et la relation client, à marge faible (7,9 % en Amérique du Nord, 4,1 % à l'international)
- **AWS** génère la rentabilité : 42,2 Mds$ de CA au T2 2026 pour **16,6 Mds$ de résultat opérationnel**, soit **60 % du profit du groupe avec 21 % du chiffre d'affaires**
- **La publicité** (19,8 Mds$ au T2, +26 %) est le troisième moteur — un revenu quasi-intégralement marginal, adossé à l'audience du commerce

## Principaux produits et services

**Commerce** : place de marché (les vendeurs tiers représentent la majorité des unités vendues), vente en propre, **Prime** (abonnement liant livraison, vidéo, musique, jeux), logistique FBA louée aux vendeurs tiers, épicerie (Whole Foods, Amazon Fresh), pharmacie.

**AWS** : plus de 200 services d'infrastructure et de plateforme. Le cœur de la thèse 2026 est le **silicium propriétaire** — **Graviton** (processeurs généralistes, utilisés par 98 % des 1 000 plus gros clients EC2) et **Trainium** (accélérateurs IA). **Amazon Bedrock** distribue les modèles de fondation tiers.

**Publicité** : annonces sponsorisées sur le site, Prime Video Ads, sport en direct, DSP programmatique.

**Autres** : appareils (Kindle, Echo, Fire, Ring), studios de contenu, **Amazon Leo** (constellation de connectivité satellitaire, service commercial visé au T3 2026), Zoox (robotaxi).

## Clients, fournisseurs, concurrents

**Clients** : des centaines de millions de consommateurs, dont une base Prime estimée à plus de 200 millions de foyers ; des millions de vendeurs tiers ; côté AWS, des entreprises et administrations, mais surtout — et c'est la nouveauté structurelle de 2026 — les **laboratoires d'IA de frontière** : **Anthropic** (engagement de plus de 100 Mds$ de dépenses AWS sur 10 ans, jusqu'à 5 GW de Trainium) et **OpenAI** (environ 2 GW de Trainium à partir de 2027, accord d'infrastructure pouvant atteindre 100 Mds$ sur 8 ans).

**Fournisseurs** : marques de grande consommation, vendeurs tiers, transporteurs, et surtout la chaîne d'approvisionnement des centres de données — **NVIDIA**, **Marvell** et **Alchip** (co-conception Trainium), **TSMC** (gravure), fabricants de mémoire HBM et DRAM, producteurs d'électricité.

**Concurrents** : **Microsoft Azure** et **Google Cloud** sur le cloud ; **Walmart**, **Costco**, **Alibaba**, **Temu**, **Shein**, **MercadoLibre**, **Coupang** sur le commerce ; **Meta**, **Alphabet** et **TikTok** sur la publicité.

## Modalités contractuelles

Trois régimes contractuels très différents cohabitent :

- **Commerce** : transactionnel, encaissement immédiat, paiement des fournisseurs différé — d'où un **besoin en fonds de roulement structurellement négatif** qui finance la croissance
- **Prime** : abonnement récurrent, prépayé, à très forte rétention
- **AWS** : contrats pluriannuels avec engagements de dépense. Le **carnet de commandes atteint 496 Mds$** au T2 2026, en très forte progression — c'est la donnée la plus importante du dossier, car elle transforme un capex spéculatif en capacité pré-vendue

> **Note de prudence** : le résultat net publié est aujourd'hui **profondément déformé** par la réévaluation des participations dans Anthropic et OpenAI. Le T2 2026 affiche 62,6 Mds$ de résultat net, dont **53,4 Mds$ de plus-values non opérationnelles avant impôt**. Toute lecture du BPA publié sans retraitement est trompeuse.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Amazon dans la chaîne de valeur

Amazon occupe une position rare : celle d'un acteur **simultanément intermédiaire et propriétaire de l'infrastructure**. Il achète, revend, héberge les vendeurs concurrents, transporte, et loue en aval sa propre capacité de calcul. Deux chaînes d'approvisionnement distinctes coexistent — et en 2026, c'est la seconde qui pilote la valorisation.

---

### Chaîne A — Commerce physique

**Amont**
- **Marques de grande consommation** : Procter & Gamble, Unilever, Nestlé, PepsiCo, L'Oréal
- **Vendeurs tiers** : plusieurs millions de marchands, majoritairement asiatiques, qui fournissent la majorité des unités vendues
- **Transporteurs** : compagnies aériennes cargo, transporteurs routiers, La Poste, UPS et l'USPS en complément du réseau propre

**Amazon — transformation et distribution**
- Centres de traitement, centres de tri, stations de livraison, réseau de partenaires de livraison
- Livraison le jour même étendue à environ **2 300 villes**, montée en puissance du frais et de l'épicerie (clientèle de produits périssables en hausse d'environ **50 %** depuis le début de 2026)
- **Robotique** : systèmes de préhension et de tri développés en interne, levier central de la baisse du coût par unité expédiée

**Aval**
- Consommateurs finaux ; abonnés Prime ; entreprises via Amazon Business

---

### Chaîne B — Infrastructure de calcul (la chaîne qui compte désormais)

**Amont**
- **NVIDIA** : GPU pour les charges de travail nécessitant l'écosystème CUDA
- **Marvell** et **Alchip** : co-conception des puces **Trainium**
- **TSMC** : fabrication des puces propriétaires (Graviton, Trainium, Inferentia)
- **Mémoire HBM et DRAM** : SK Hynix, Samsung, Micron — poste de coût en forte inflation, cité par la direction comme la cause du relèvement du capex 2026
- **Énergie** : producteurs d'électricité, accords d'achat de long terme, nucléaire modulaire, foncier des centres de données

**Amazon — transformation**
- Conception des puces (Annapurna Labs), construction des centres de données, réseau et refroidissement
- **220 Mds$ de dépenses d'investissement prévues pour 2026**, relevées depuis les 200 Mds$ annoncés en février

**Aval**
- **Laboratoires d'IA** : Anthropic, OpenAI — clients dont Amazon est aussi actionnaire
- **Entreprises et administrations** : charges de travail classiques et inférence
- **Éditeurs de logiciels** : place de marché AWS

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                    AMAZON                     AVAL
--------------------     ----------------------     ---------------------
Marques & vendeurs   →   Traitement, tri,       →   Consommateurs, Prime
tiers, transporteurs     livraison, robotique       Amazon Business

TSMC, Marvell,       →   Annapurna Labs,        →   Anthropic, OpenAI
NVIDIA, HBM/DRAM,        centres de données,        Entreprises, éditeurs
énergie                  Trainium / Graviton        (carnet 496 Mds$)
\`\`\`

**Le point de tension** : Amazon **investit dans ses propres clients** (50 Mds$ dans OpenAI, jusqu'à 33 Mds$ engagés dans Anthropic) qui, en retour, s'engagent à consommer de la capacité AWS. Cette circularité amplifie la croissance affichée — et concentre le risque sur la solvabilité future de deux entreprises privées non rentables.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — T2 2026

| Segment | CA T2 2026 | Croissance | Résultat opér. | Marge |
|---|---|---|---|---|
| **Amérique du Nord** | **116,2 Mds$** | **+16 %** | **9,1 Mds$** | **7,9 %** |
| **International** | **42,2 Mds$** | **+15 %** | **1,7 Mds$** | **4,1 %** |
| **AWS** | **42,2 Mds$** | **+37 %** | **16,6 Mds$** | **39,4 %** |
| **Total** | **200,6 Mds$** | **+20 %** | **27,5 Mds$** | **13,7 %** |

**Lecture immédiate** : AWS pèse **21 % du chiffre d'affaires et 60 % du résultat opérationnel**. Amérique du Nord et International, réunis, pèsent 79 % du CA pour 40 % du profit. Amazon est, du point de vue de la valeur créée, **une entreprise d'infrastructure avec une activité de commerce attachée**.

---

### Ventilation transverse par ligne de revenus

| Ligne | CA T2 2026 | Croissance | Commentaire |
|---|---|---|---|
| Services aux vendeurs tiers | En hausse | Soutenue | Marge supérieure à la vente en propre |
| **Publicité** | **19,8 Mds$** | **+26 %** | Prime Video Ads, sport en direct, outils IA |
| Abonnements (Prime) | Récurrent | Régulière | Rétention élevée, effet de verrouillage |
| Vente en propre | Volume | Modérée | Faible marge, rôle d'appel |

La publicité est la ligne la plus sous-estimée du dossier : elle croît plus vite que le commerce, à une marge incrémentale très élevée, et bénéficie désormais du sport en direct et des outils d'enchères assistés par IA.

---

### Dynamique séquentielle d'AWS

| Trimestre | CA AWS | Croissance | Marge opér. |
|---|---|---|---|
| T4 2025 | ~33 Mds$ | ~24 % | ~35,0 % |
| T1 2026 | 37,6 Mds$ | +28 % | 37,7 % |
| **T2 2026** | **42,2 Mds$** | **+37 %** | **39,4 %** |

**Cinquième trimestre consécutif d'accélération**, et le rythme le plus rapide depuis 2021. Le taux de revenu annualisé atteint **169 Mds$**. La marge a gagné environ **650 points de base** sur un an, grâce à l'efficacité opérationnelle et à l'optimisation des capacités — malgré une base d'actifs qui explose.

---

### Répartition géographique

Le segment Amérique du Nord reste le socle de volume. L'international a bénéficié d'effets de change favorables en début d'année (+2,9 Mds$ d'effet positif au T1) et progresse à deux chiffres, avec une marge encore quatre fois inférieure à celle de l'Amérique du Nord — c'est le principal **gisement d'amélioration structurelle** non encore reflété dans les projections.

---

### Ce que la ventilation ne montre pas

Amazon ne publie pas séparément la rentabilité de **Leo** (connectivité satellitaire), des **appareils**, ni de **Zoox**. Ces activités sont diluées dans les segments géographiques et pèsent négativement sur leur marge. La montée en puissance commerciale de Leo au T3 2026 constituera un poste de coût supplémentaire non isolé.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Effet de réseau à double face — commerce
La place de marché est un moat classique et robuste : plus de vendeurs attirent plus d'acheteurs, qui attirent plus de vendeurs. Amazon monétise cette boucle trois fois — commission, logistique FBA, publicité sponsorisée. C'est cette **triple monétisation d'un même flux** qui explique que le commerce reste rentable malgré une marge brute modeste.

### 2. Coûts de changement — Prime et AWS
**Prime** verrouille par le regroupement : annuler l'abonnement fait perdre simultanément la livraison, la vidéo, la musique et les avantages épicerie. **AWS** verrouille par l'architecture : migrer des charges de travail critiques coûte des années-homme. Le **carnet de commandes de 496 Mds$** est la traduction comptable de ce verrouillage.

### 3. Intégration verticale du silicium — le moat de 2026
C'est l'avantage le plus difficile à répliquer. Amazon conçoit ses propres puces via Annapurna Labs : **Graviton** (adopté par 98 % des 1 000 premiers clients EC2, engagements de revenus multipliés par près de trois d'un trimestre à l'autre, Graviton5 progressant près de deux fois plus vite que Graviton4) et **Trainium** pour l'IA. Les activités IA et puces dépassent chacune **25 Mds$ de revenus annualisés**, en croissance à trois chiffres.

Concrètement, cela permet à AWS de **découpler partiellement sa structure de coûts de NVIDIA** — un levier de marge que ni Azure ni Google Cloud ne possèdent au même degré, et qui explique mécaniquement les 650 points de base de marge gagnés en un an.

### 4. Échelle logistique
Le réseau de traitement et de livraison, construit sur vingt ans, produit un coût par unité expédiée que personne ne peut atteindre en Amérique du Nord. La livraison le jour même dans environ 2 300 villes est un actif d'exploitation, pas une promesse marketing.

### 5. Capacité d'investissement — moat de bilan
220 Mds$ de capex en une année : moins de cinq entreprises au monde peuvent financer cela. Dans un cycle où **la capacité est la contrainte**, la capacité à dépenser devient elle-même une barrière à l'entrée.

## Positionnement vs concurrence

| Critère | Amazon (AWS) | Microsoft (Azure) | Alphabet (Google Cloud) |
|---|---|---|---|
| Part de marché cloud | N° 1 | N° 2 | N° 3 |
| Croissance dernier trimestre | +37 % | +43 % | +82 % |
| Silicium propriétaire | Le plus avancé | En rattrapage | TPU, mature |
| Distribution entreprise | Forte | La plus forte | En rattrapage |
| Diversification hors cloud | Commerce + publicité | Logiciels | Publicité |

**Lecture honnête** : AWS accélère, mais **croît moins vite que ses deux concurrents directs**. Le fossé n'est pas la croissance relative — c'est la marge et le silicium.

## Pouvoir de négociation

- **Vis-à-vis des vendeurs tiers** : **très élevé** — Amazon fixe les commissions, les règles de mise en avant et les tarifs logistiques. Ce pouvoir est précisément l'objet des poursuites antitrust en cours.
- **Vis-à-vis des clients AWS** : **élevé mais en érosion** — la présence de trois hyperscalers crédibles et les architectures multi-cloud renforcent l'acheteur.
- **Vis-à-vis des fournisseurs de mémoire et de puces** : **en dégradation** — l'inflation des prix de la mémoire a directement causé le relèvement du capex 2026 de 200 à 220 Mds$. Ici, Amazon subit.
- **Vis-à-vis des laboratoires d'IA** : **ambigu** — Amazon est à la fois actionnaire, fournisseur et créancier commercial d'Anthropic et d'OpenAI. Le rapport de force y est contractuel, pas structurel.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Hyperscalers et commerce mondial (août 2026)

| Société | Code Bloomberg | Capitalisation | EV/CA | P/E | Rendement div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|
| **Amazon** | **AMZN US** | **~3,06 T$** | **~4,0x** | **~40x norm.** | **0 %** | **~19 %** |
| Alphabet | GOOGL US | ~4,3 T$ | ~9x | ~32x | ~0,3 % | ~28 % |
| Microsoft | MSFT US | ~3,6 T$ | ~11x | ~35x | ~0,6 % | ~38 % |
| Walmart | WMT US | ~0,9 T$ | ~1,2x | ~38x | ~0,8 % | ~19 % |
| Alibaba | BABA US | ~0,29 T$ | ~2,2x | ~19x | ~1,0 % | ~11 % |
| Coupang | CPNG US | ~0,06 T$ | ~1,5x | ~40x | 0 % | ~14 % |

*Données estimatives sur la base des cours et publications disponibles au 3 août 2026. À affiner sur les documents déposés auprès de la SEC.*

---

### Analyse comparative

**Microsoft — le concurrent le mieux armé sur l'entreprise**
Azure a progressé de **43 %** sur son dernier trimestre fiscal, plus vite qu'AWS. Microsoft dispose de la meilleure distribution entreprise du secteur (Office, Windows Server, licences groupées) et d'une marge consolidée supérieure. Sa faiblesse relative : une dépendance plus forte au silicium de NVIDIA et un partenariat avec OpenAI devenu moins exclusif.

**Alphabet — la croissance la plus spectaculaire, le moat le plus étroit**
Google Cloud a progressé de **82 %** sur le dernier trimestre. Alphabet dispose du TPU, silicium mature et éprouvé, et d'un modèle de fondation de premier plan développé en interne. Mais la base est plus faible et la distribution entreprise reste inférieure à celle d'AWS et d'Azure.

**Walmart — le concurrent que le marché du commerce sous-estime**
Sur le commerce nord-américain, Walmart a construit un actif de livraison rapide adossé à son parc de magasins et développe sa propre régie publicitaire. C'est le seul acteur capable d'attaquer Amazon sur l'épicerie, catégorie où Amazon investit fortement en 2026.

**Alibaba et Coupang — les points de comparaison de valorisation**
Alibaba se paie environ 19x les bénéfices avec une décote de gouvernance et de géopolitique. Coupang illustre ce que vaut un pur acteur logistique du commerce en croissance. L'écart entre ces multiples et celui d'Amazon mesure exactement **la prime attribuée à AWS et à la publicité**.

---

### Le ratio qui compte : le rendement du capital investi dans l'IA
En 2026, aucun de ces multiples n'est décisif. Le seul ratio qui tranchera la thèse est le **rendement du capital investi dans les centres de données**. La direction avance un **délai de retour sur les équipements inférieur à trois ans face à des contrats de cinq ans** — si ce chiffre tient, la valorisation actuelle est justifiée ; s'il glisse à cinq ou six ans, l'ensemble du secteur se re-note à la baisse.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (clos le 30 juin 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart |
|---|---|---|---|
| Chiffre d'affaires | **200,6 Mds$** | 196,5 Mds$ | **+4,1 Mds$ ✓** |
| Croissance publiée | **+20 %** | ~+17 % | **Dépassé** |
| Résultat opérationnel | **27,5 Mds$** | ~24 Mds$ | **Dépassé (+43 % a/a)** |
| BPA ajusté | **1,97 $** | 1,82 $ | **+8 % ✓** |
| BPA publié (GAAP) | **5,75 $** | — | **Non significatif** |
| CA AWS | **42,2 Mds$** | 40,5 Mds$ | **+37 % vs +31 % attendu** |

**Amazon a dépassé le consensus sur tous les postes opérationnels.** Mais le BPA publié de 5,75 $ inclut **53,4 Mds$ de produits non opérationnels avant impôt**, provenant principalement de la réévaluation de la participation dans Anthropic. Retraité, le résultat net progresse d'environ **17 %**, contre plus de 240 % en publié.

---

### Facteurs clés par segment

- **AWS** : +37 %, cinquième trimestre consécutif d'accélération, rythme le plus rapide en 18 trimestres. Marge portée à **39,4 %**, en hausse d'environ 650 points de base. Carnet de commandes de **496 Mds$**.
- **Amérique du Nord** : +16 %, marge 7,9 % — l'épicerie et les produits du quotidien accélèrent
- **International** : +15 %, marge 4,1 % — progression continue mais toujours quatre fois moins rentable que l'Amérique du Nord
- **Publicité** : 19,8 Mds$, +26 % — accélération portée par Prime Video et le sport en direct

---

### Évolution des marges

La marge opérationnelle consolidée atteint **13,7 %**, contre 11,4 % un an plus tôt. C'est le point le plus solide de la publication : **le levier opérationnel fonctionne malgré un cycle d'investissement historique**. La contribution est double — mix AWS croissant et discipline de coûts dans la logistique.

---

### Perspectives et guidance

- **T3 2026** : chiffre d'affaires attendu entre **197 et 202 Mds$**, résultat opérationnel entre **22,5 et 26,5 Mds$** — soit une décélération séquentielle assumée de la rentabilité, liée à la montée des amortissements
- **Capex 2026 relevé à 220 Mds$** (contre 200 Mds$ annoncés en février), en raison de l'inflation des prix de la mémoire
- Andy Jassy : la demande dépasse toujours l'offre en 2026, et il anticipe que ce sera encore le cas en 2027 ; la demande déjà contractée pour 2028 est décrite comme frappante
- Prochaine publication estimée le **28 octobre 2026**

---

### Signaux d'alerte au bilan

- **Flux de trésorerie disponible négatif** : **-7,6 Mds$** sur douze mois glissants, contre +18,2 Mds$ un an plus tôt. Au T1 2026, ce même indicateur était encore positif à 1,2 Mds$ — la dégradation s'accélère.
- **Achats d'immobilisations sur douze mois : 169 Mds$**, en hausse de 64 %
- **Flux de trésorerie d'exploitation** en hausse de 30 % sur douze mois glissants à environ 148,5 Mds$ au T1 — la génération de trésorerie opérationnelle est saine ; c'est l'investissement qui la consomme intégralement
- **Dette long terme** d'environ 119 Mds$ — soutenable, mais en hausse
- **Qualité du résultat** : la dépendance aux plus-values latentes sur Anthropic et OpenAI est désormais un poste majeur du compte de résultat

---

### Réaction du marché

Le titre a bondi de **15,3 % le 31 juillet**, puis de **4,6 % supplémentaires le 3 août** à **284,02 $**, franchissant pour la première fois **3 000 Mds$ de capitalisation** — cinquième entreprise de l'histoire à atteindre ce seuil. En trois séances, la progression a atteint environ 26 %, la meilleure séquence depuis octobre 2009.

**Ce que cela révèle** : le marché ne payait plus l'accélération d'AWS. La publication a levé le doute central de la thèse — celui de savoir si les 220 Mds$ de capex généraient une demande réelle. La réponse apportée par le carnet de commandes de 496 Mds$ a suffi à re-noter le titre de 26 % en trois jours. Cela signifie aussi que **la barre est désormais nettement plus haute** pour le trimestre suivant.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — évolution 2024-2026

**2024** : Ton de **discipline**. Le thème dominant est la réduction du coût de service, la régionalisation du réseau logistique et le retour à la rentabilité du commerce international. AWS est présenté comme stabilisé après la phase d'optimisation des coûts par les clients.

**2025** : Ton de **transition**. Le discours bascule vers l'IA. Jassy parle d'opportunité générationnelle et commence à préparer les investisseurs à une hausse structurelle du capex. Le vocabulaire de la contrainte de capacité apparaît.

**2026** : Ton **offensif et assumé**. Jassy qualifie AWS de florissant, revendique les taux de revenus annualisés supérieurs à 25 Mds$ pour les activités IA et puces, et — point le plus notable — **relève le capex en cours d'exercice** de 200 à 220 Mds$ tout en affirmant que cela restera insuffisant pour couvrir la demande de 2026 et probablement de 2027.

---

### Priorités répétées du management

**1. La contrainte est l'offre, pas la demande** — C'est le message central de 2026, martelé à chaque trimestre. Le directeur général d'AWS, Matt Garman, l'a formulé explicitement : la demande dépasse largement l'offre et l'entreprise construit pour rattraper. C'est aussi la justification implicite du capex.

**2. Le silicium propriétaire comme différenciateur** — Graviton et Trainium sont désormais présentés comme des actifs stratégiques autonomes, plus seulement comme un levier de coût. Le chiffrage est fourni : plus de 25 Mds$ de revenus annualisés pour chacune des activités IA et puces.

**3. Le délai de retour sur investissement** — La direction avance systématiquement un délai de retour sur les équipements **inférieur à trois ans** face à des contrats clients de cinq ans. C'est la réponse préparée à l'objection principale des sceptiques.

**4. Le carnet de commandes comme preuve** — Le passage à une communication centrée sur le carnet (496 Mds$) est un choix délibéré : il déplace le débat du capex vers la demande contractée.

**5. Le commerce n'est pas oublié** — Livraison le jour même dans environ 2 300 villes, croissance de 50 % de la clientèle de produits périssables, robotique. Le management tient à rappeler que le moteur historique s'améliore aussi.

---

### Analyse du sentiment

- **Confiance** : très élevée et croissante. Le passage de la justification défensive du capex à une posture d'affirmation offensive s'est produit entre le T1 et le T2 2026.
- **Transparence** : bonne sur l'opérationnel, **nettement plus faible sur deux sujets** — le calendrier de retour à un flux de trésorerie disponible positif, et la part de la croissance d'AWS provenant de clients dans lesquels Amazon est lui-même actionnaire.
- **Ce qui n'est pas dit** : la direction n'a jamais fourni de seuil chiffré au-delà duquel elle ralentirait l'investissement. Aucun garde-fou financier explicite n'a été communiqué.

> **À lire entre les lignes** : le management a changé de contrat implicite avec les actionnaires. Jusqu'en 2024, il vendait de la discipline et du flux de trésorerie. Depuis 2026, il vend une **course à la capacité** et demande de suspendre le jugement sur la trésorerie disponible. Le marché a accepté ce contrat le 3 août. Il peut le refuser au premier trimestre où la croissance d'AWS décélérera.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Andy Jassy — Directeur Général (depuis juillet 2021)

**Bilan chiffrable** : Jassy a **fondé et construit AWS** à partir de 2003, d'une idée interne jusqu'à un taux de revenu annualisé de **169 Mds$** avec 39,4 % de marge opérationnelle. C'est, en valeur créée, l'un des bilans opérationnels les plus solides du secteur — et il est vérifiable, pas narratif.

Depuis sa nomination à la direction générale :
- **2022-2023** : redressement d'un groupe qui perdait de l'argent — suppressions de postes massives, régionalisation du réseau logistique, arrêt de projets non rentables
- **2024-2025** : retour de la marge opérationnelle consolidée à deux chiffres
- **2026** : marge portée à **13,7 %** au T2, et pilotage du plus grand programme d'investissement de l'histoire d'une entreprise cotée

**Ancienneté** : dans le groupe depuis 1997 (près de 30 ans). Directeur général depuis juillet 2021.

**Alignement financier** : rémunération très majoritairement en actions, avec acquisition différée sur plusieurs années. Alignement **réel mais indirect** — Jassy n'est pas fondateur du groupe et sa participation, bien que substantielle en valeur absolue, reste marginale au capital.

---

### Autres dirigeants clés

**Matt Garman — Directeur Général d'AWS (depuis juin 2024)** : issu du rang, il a dirigé les ventes et le produit d'AWS. Sa nomination a coïncidé avec l'inflexion à la hausse de la croissance du segment. C'est aujourd'hui le dirigeant le plus exposé sur la thèse.

**Brian Olsavsky — Directeur Financier** : en poste depuis 2015. Continuité et prudence de communication. C'est lui qui a préparé le marché à la dégradation du flux de trésorerie disponible.

**Jeff Bezos — Président exécutif du conseil** : fondateur, il conserve la présidence et une participation majeure. Il a annoncé en 2026 un **programme de cession d'actions d'environ 4,1 Mds$** — pratique récurrente et planifiée, mais qui alimente régulièrement le débat sur le signal envoyé.

---

### Allocation du capital — historique et inflexion

| Décision | Montant | Lecture |
|---|---|---|
| Capex 2024 | ~78 Mds$ | Normalisation post-COVID |
| Capex 2025 | ~118 Mds$ | Bascule vers l'IA |
| **Capex 2026 (guidance)** | **~220 Mds$** | **Relevé de 200 Mds$ en cours d'exercice** |
| Investissement OpenAI | **50 Mds$** | Bouclé, environ 5 % du capital |
| Investissement Anthropic | **jusqu'à 33 Mds$** | 13 Mds$ déployés, jusqu'à 20 Mds$ conditionnels |
| Dividende / rachats | **0** | Aucun retour aux actionnaires |

**Tendance** : allocation **extrêmement agressive et concentrée sur un seul pari**. Le rendement du capital investi historique du groupe est solide, mais il a été bâti sur un modèle de capex léger relatif — le modèle actuel est **capitalistique**, avec des amortissements qui pèseront sur les marges de 2027 et 2028.

**Le point délicat** : les 83 Mds$ engagés dans OpenAI et Anthropic sont des **investissements financiers dans des clients**. Ils ont produit 70,2 Mds$ de plus-values latentes avant impôt sur le seul premier semestre 2026 (16,8 Mds$ au T1, 53,4 Mds$ au T2). Ces gains sont **non réalisés, non monétaires et fondés sur des valorisations de marchés privés** — ils peuvent s'inverser aussi vite qu'ils sont apparus.

---

### Signaux d'alerte

- **Aucun garde-fou communiqué** sur le niveau d'investissement — la direction n'a jamais énoncé de seuil de ralentissement
- **Absence totale de retour aux actionnaires** — ni dividende, ni programme de rachat significatif, dans un contexte de flux de trésorerie disponible négatif
- **Circularité actionnaire-client** avec Anthropic et OpenAI, non isolée dans la communication financière
- **Cessions d'initiés** : tendance nette à la vente sur les trois derniers mois, y compris le programme de Bezos
- **Type de dirigeant** : **exploitant-bâtisseur professionnel**, pas fondateur du groupe. C'est l'archétype adapté à une phase d'exécution industrielle massive — mais un profil moins susceptible qu'un fondateur d'arrêter unilatéralement un investissement qui déraperait.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours

### Contexte de valorisation
Au **3 août 2026**, le titre clôture à **284,02 $** (+4,58 % sur la séance), portant la capitalisation au-dessus de **3 000 Mds$** pour la première fois. La fourchette sur 52 semaines est de **196,00 $ à 287,16 $**, et la performance sur un an atteint environ **+34,5 %**, dont environ **+23 % depuis le 1er janvier**.

---

### Hausses significatives

**31 juillet 2026 — Publication du T2 : +15,3 %** : le plus fort mouvement de la période. L'accélération d'AWS à 37 % contre 31 % attendus, la marge à 39,4 % et le carnet de commandes de 496 Mds$ ont levé d'un coup le doute sur le retour sur investissement du capex.

**3 août 2026 — Franchissement des 3 000 Mds$ : +4,6 %** : prolongation du mouvement, alimentée par le bouclage anticipé de l'investissement de 50 Mds$ dans OpenAI et par une vague de relèvements d'objectifs de cours (Roth Capital à 325 $, relèvements également chez BofA, UBS, Goldman Sachs, Morgan Stanley, JPMorgan, KeyBanc et Truist).

**Avril 2026 — Publication du T1** : AWS accélérant à 28 %, marge de 37,7 %, et un BPA publié de 2,78 $ contre 1,73 $ attendu — mais dopé par 16,8 Mds$ de plus-values Anthropic.

---

### Baisses significatives

**Février-avril 2026 — Correction jusqu'à 196 $** : phase de doute généralisé sur les dépenses d'investissement dans l'IA à l'échelle du secteur. L'annonce en février d'un capex 2026 de 200 Mds$ a été mal reçue ; la chute du flux de trésorerie disponible sur douze mois glissants de 25,9 à 1,2 Mds$ a cristallisé l'inquiétude. Le titre a perdu environ 20 % depuis ses plus hauts.

**2025 — Épisodes de tension sur les tarifs douaniers** : l'exposition du commerce aux droits de douane et aux chaînes d'approvisionnement asiatiques a pesé par intermittence. Amazon a depuis obtenu environ 600 M$ de remboursements tarifaires.

**Historique 2022** : chute de plus de 50 % sur l'année, dans un contexte de sur-capacité logistique post-COVID, de pertes opérationnelles et de resserrement monétaire. C'est le précédent que les sceptiques invoquent aujourd'hui : Amazon a déjà, une fois, sur-investi dans une capacité physique en anticipant une demande qui ne s'est pas matérialisée au rythme prévu.

---

### Facteurs structurels

- **Le titre est devenu une position sur l'IA d'infrastructure** — sa corrélation avec Microsoft, Alphabet et NVIDIA s'est nettement renforcée depuis 2025
- **Aucun rendement du dividende** : la valorisation repose intégralement sur la croissance et la trésorerie future
- **Poids indiciel massif** : flux passifs structurels, cinquième capitalisation mondiale
- **Sensibilité aux taux longs** : un actif dont la valeur est concentrée dans les flux lointains est mécaniquement sensible au taux d'actualisation
- **Indicateur de force relative en zone de surachat** (environ 72,5 sur 14 jours au 3 août) — le mouvement récent est violent et le point d'entrée actuel est, techniquement, tendu`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement méthodologique
Le BPA publié d'Amazon est **structurellement déformé** par la réévaluation des participations dans Anthropic et OpenAI : 16,8 Mds$ de plus-values avant impôt au T1 2026, 53,4 Mds$ au T2. Les estimations ci-dessous portent sur un **BPA ajusté, hors plus-values de participations**, seul agrégat comparable dans le temps. Elles sont indicatives et non des prévisions de précision.

### Hypothèses de modélisation

**Chiffre d'affaires** :
- AWS : +30 à +34 % en 2026, puis normalisation vers +25 % en 2027-2028 à mesure que la base grossit — soutenu par un carnet de 496 Mds$
- Commerce Amérique du Nord : +10 à +13 %/an, tiré par l'épicerie et la livraison le jour même
- International : +11 à +14 %/an
- Publicité : +20 à +24 %/an — la ligne à plus forte marge incrémentale
- **Croissance consolidée estimée : +16 à +19 %/an**

**Levier opérationnel** :
- Marge AWS : environ 39 % en 2026, sous pression en 2027-2028 sous l'effet des amortissements du capex
- Marge Amérique du Nord : progression vers 8,5-9 %
- Marge International : principal gisement, progression vers 5-6 %
- **Effet contraire majeur** : 220 Mds$ de capex en 2026 génèrent une charge d'amortissement croissante à partir de 2027

**Coûts financiers** : dette long terme d'environ 119 Mds$, en hausse probable pour financer le cycle d'investissement. Charge d'intérêts nette croissante.

**Dilution** : rémunération en actions significative, partiellement compensée. Dilution nette estimée à environ 0,5-1 %/an.

---

### Estimations BPA ajusté

| Exercice | BPA ajusté estimé | Croissance | P/E au cours de 284,02 $ |
|---|---|---|---|
| 2025 (réalisé, est.) | **~6,40 $** | — | — |
| **2026E** | **7,90-8,30 $** | **+24-30 %** | **~35x** |
| **2027E** | **9,20-9,90 $** | **+16-20 %** | **~30x** |
| **2028E** | **10,80-11,80 $** | **+17-19 %** | **~25x** |

---

### Sensibilité

- **Scénario optimiste** (AWS maintient plus de 30 % en 2027, marge internationale à 6 %, amortissements absorbés) : BPA 2028 vers 12,50 $ → P/E 2028 d'environ 23x — la valorisation actuelle serait alors modeste
- **Scénario de base** : BPA 2028 vers 11,30 $ → P/E 2028 d'environ 25x — valorisation juste pour une croissance de cette qualité
- **Scénario pessimiste** (AWS décélère vers 20 % en 2027, surcapacité, amortissements non couverts) : BPA 2028 vers 8,50 $ → P/E 2028 d'environ 33x — le multiple se comprimerait violemment, avec un potentiel de baisse de 30 à 40 % sur le titre

**Conclusion** : à 284 $, le titre se paie environ **35 fois les bénéfices ajustés 2026** pour une croissance de bénéfices attendue de 17 à 20 % par an. Ce n'est pas excessif **si et seulement si** les 220 Mds$ investis en 2026 génèrent le rendement avancé par la direction. L'objectif de cours consensuel s'établit autour de **323 $** (62 analystes, opinion majoritairement à l'achat), soit environ 14 % de potentiel — un potentiel modeste qui reflète le fait que **la re-notation vient de se produire**.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. AWS accélère au lieu de décélérer** : cinquième trimestre consécutif d'accélération, à 37 %, le rythme le plus rapide depuis 2021 — et ce sur une base de 169 Mds$ annualisés. C'est un phénomène rare : une activité de cette taille qui accélère. Le **carnet de commandes de 496 Mds$** transforme la thèse de spéculative en contractée.

**2. Le silicium propriétaire est un avantage de coût structurel** : Graviton adopté par 98 % des 1 000 premiers clients EC2, engagements de revenus multipliés par près de trois d'un trimestre à l'autre. Trainium et l'IA dépassent chacun 25 Mds$ de revenus annualisés en croissance à trois chiffres. **Aucun concurrent ne dispose d'un découplage aussi avancé vis-à-vis de NVIDIA** — et cela se lit directement dans les 650 points de base de marge gagnés en un an.

**3. La publicité est le moteur silencieux** : 19,8 Mds$ au T2, +26 %, à marge incrémentale très élevée. Prime Video Ads et le sport en direct ouvrent un inventaire encore largement non monétisé.

**4. Le levier opérationnel du commerce n'est pas fini** : marge internationale à 4,1 % contre 7,9 % en Amérique du Nord. Combler cet écart représente plusieurs milliards de dollars de résultat opérationnel additionnel, sans croissance de chiffre d'affaires supplémentaire.

**5. Le délai de retour inférieur à trois ans** : si le chiffre avancé par la direction est exact face à des contrats de cinq ans, chaque dollar de capex crée mécaniquement de la valeur. Le capex n'est alors pas un risque mais un **plan d'épargne forcée à haut rendement**.

**6. Les participations dans les laboratoires d'IA** : environ 5 % d'OpenAI (valorisée 852 Mds$) et une participation dans Anthropic (valorisée 965 Mds$ après sa série H, avec un dépôt confidentiel en vue d'une introduction en bourse). Ces actifs représentent potentiellement plusieurs centaines de milliards de dollars de valeur **non reflétée dans les multiples opérationnels**.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents

**1. Le flux de trésorerie disponible est négatif — et se dégrade** : **-7,6 Mds$** sur douze mois glissants, contre +18,2 Mds$ un an plus tôt et encore +1,2 Mds$ au trimestre précédent. La trajectoire va dans le mauvais sens et s'accélère. Une entreprise valorisée 3 000 Mds$ qui ne génère plus de trésorerie libre repose entièrement sur la promesse du retour futur.

**2. Le mur d'amortissements de 2027-2028** : 220 Mds$ investis en 2026, après environ 118 Mds$ en 2025. Ces actifs s'amortissent. Si la monétisation de l'IA prend du retard sur l'amortissement de l'infrastructure, **la marge se comprime mécaniquement** sans qu'aucune erreur de gestion n'ait été commise.

**3. La qualité du résultat s'est dégradée** : sur le seul premier semestre 2026, **70,2 Mds$ de plus-values avant impôt** sur des participations privées non cotées. Sans elles, la croissance du résultat net tombe de plus de 240 % à environ 17 %. Ces valorisations dépendent de tours de financement privés — elles peuvent se retourner brutalement.

**4. La circularité** : Amazon investit 50 Mds$ dans OpenAI et jusqu'à 33 Mds$ dans Anthropic ; ces deux clients s'engagent en retour sur plus de 200 Mds$ de dépenses AWS cumulées. Une part de la croissance d'AWS est donc **financée par Amazon lui-même**. Le groupe ne publie pas la part de revenus AWS provenant d'entités dont il est actionnaire.

### Analyse pré-mortem
Que se passe-t-il si le titre vaut 190 $ dans deux ans ? Scénario : la croissance d'AWS décélère vers 20 % en 2027 à mesure que la capacité livrée rattrape la demande ; les amortissements du capex 2026 frappent le compte de résultat à plein ; la valorisation privée d'Anthropic ou d'OpenAI se contracte, imposant une dépréciation de plusieurs dizaines de milliards ; le flux de trésorerie disponible reste négatif un troisième exercice consécutif. Le multiple se comprime de 35x à 22x. **Baisse potentielle : 35 à 40 %.**

### Point de vue à contre-courant
**Ce que le marché refuse actuellement de voir** : le marché vient de récompenser d'environ 26 % en trois séances un trimestre où le **flux de trésorerie disponible est passé de +18,2 à -7,6 Mds$**. Il a choisi de valoriser le carnet de commandes plutôt que la trésorerie. Ce choix est peut-être justifié — mais il constitue un **changement de régime d'évaluation**, pas une simple bonne nouvelle. Amazon est désormais valorisé selon les critères d'une entreprise d'infrastructure en phase de construction, et non selon ceux d'une machine à cash. Le jour où le marché reviendra à ses anciens critères, il n'aura pas besoin de mauvaise nouvelle pour le faire.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Réévaluation des participations non cotées — RISQUE ÉLEVÉ
**C'est le signal le plus important du dossier.** Amazon a comptabilisé **16,8 Mds$ au T1 2026** puis **53,4 Mds$ au T2 2026** de produits non opérationnels avant impôt, provenant principalement de la participation dans Anthropic. Ces montants sont **non monétaires, non réalisés**, et découlent de valorisations établies lors de tours de financement privés (Anthropic à 965 Mds$ après sa série H ; OpenAI à 852 Mds$).

**À surveiller** :
- La méthode de valorisation retenue et sa sensibilité : Amazon retient-il le dernier prix de transaction observable, ou un modèle interne ?
- La **symétrie** du traitement : ces gains seront-ils repris avec la même diligence si les valorisations privées se contractent ?
- La part de ces gains dans le résultat avant impôt — au T1, elle dépassait 40 %

### Durée d'amortissement des serveurs — RISQUE ÉLEVÉ
Le poste le plus manipulable du secteur. Un allongement de la durée d'utilité des serveurs et équipements réseau **augmente mécaniquement le résultat opérationnel** sans aucune amélioration économique. Amazon a déjà procédé à des révisions de durée d'utilité par le passé, dans les deux sens.

**À surveiller** : toute modification de la durée d'utilité estimée dans les annexes des documents 10-Q et 10-K, et le montant de l'effet chiffré communiqué. Avec 169 Mds$ d'achats d'immobilisations sur douze mois, un an de durée supplémentaire représente plusieurs milliards de dollars de résultat.

### Transactions avec parties liées — RISQUE ÉLEVÉ ET CROISSANT
Amazon est **simultanément actionnaire et fournisseur** d'Anthropic et d'OpenAI. Ces entités se sont engagées sur plus de 200 Mds$ de dépenses AWS cumulées. Une partie de l'argent investi revient donc en chiffre d'affaires.

**À surveiller** : Amazon ne publie pas la part du chiffre d'affaires d'AWS provenant d'entités dans lesquelles il détient une participation. **C'est l'information manquante la plus significative du dossier.** Toute divulgation future sur ce point est susceptible de faire bouger le titre.

### Information sectorielle — RISQUE MODÉRÉ
Trois segments seulement (Amérique du Nord, International, AWS). La publicité, Leo, Zoox et les appareils sont **dilués dans les segments géographiques** sans rentabilité isolée. La marge de 7,9 % de l'Amérique du Nord agrège donc une activité publicitaire très rentable et des paris déficitaires. **La rentabilité réelle du commerce nu est inconnue du lecteur.**

### Flux de trésorerie vs résultat — RISQUE ÉLEVÉ
Un résultat net de 62,6 Mds$ sur un trimestre face à un flux de trésorerie disponible de **-7,6 Mds$** sur douze mois glissants. L'écart s'explique intégralement — plus-values non monétaires d'un côté, capex de l'autre — mais il illustre à quel point le résultat publié a cessé d'être un indicateur de génération de trésorerie.

### Contrats de location — RISQUE MODÉRÉ
Amazon dispose d'engagements de location considérables sur l'immobilier logistique et les centres de données, dont une partie contractée avant la clôture. **À surveiller** : les engagements de location non encore commencés, mentionnés en annexe, qui n'apparaissent pas encore au bilan.

### Rémunération en actions — RISQUE MODÉRÉ
Charge significative, historiquement l'un des postes les plus élevés du secteur en valeur absolue. **À surveiller** : la charge en pourcentage du chiffre d'affaires et la dilution nette après rachats — Amazon ne procédant pas à des rachats massifs, la dilution n'est pas compensée.

### Goodwill — RISQUE FAIBLE
Peu d'acquisitions majeures récentes. Le goodwill est modeste rapporté à la taille du bilan. Pas de signal identifié.

---

### Verdict global
**Risque comptable : MODÉRÉ À ÉLEVÉ.** Amazon est audité par **Ernst & Young** et sa communication financière est de bonne qualité formelle. Aucune irrégularité n'est identifiée. Mais le compte de résultat 2026 est **structurellement moins lisible qu'en 2024** : deux postes — plus-values sur participations privées et amortissement d'une base d'actifs qui a doublé en deux ans — suffisent à faire varier le résultat de plusieurs dizaines de milliards de dollars sans qu'aucun événement économique réel ne se produise. L'investisseur doit lire le tableau des flux de trésorerie **avant** le compte de résultat.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Andy Jassy et l'équipe dirigeante

### Allocation du capital et trésorerie

**1.** Le flux de trésorerie disponible sur douze mois glissants est passé de +18,2 Mds$ à **-7,6 Mds$**, et de +1,2 Mds$ au trimestre précédent à négatif aujourd'hui. **À quelle date précise** anticipez-vous un retour à un flux positif, et quels jalons trimestriels devons-nous surveiller pour vérifier cette trajectoire ?

**2.** Vous avez relevé le capex 2026 de 200 à 220 Mds$ en cours d'exercice. **Existe-t-il un seuil chiffré** — de croissance d'AWS, de taux d'utilisation, de rendement du capital investi — en dessous duquel vous ralentiriez ? Si oui, lequel ? Si non, pourquoi l'actionnaire devrait-il accepter un investissement sans garde-fou communiqué ?

**3.** Vous avancez un délai de retour sur les équipements inférieur à trois ans face à des contrats de cinq ans. **Sur quel périmètre exact** ce calcul est-il établi — inclut-il le foncier, l'énergie, le réseau et le refroidissement, ou uniquement les serveurs ?

### AWS, capacité et carnet de commandes

**4.** Le carnet de commandes atteint 496 Mds$. **Quelle est sa duration moyenne**, quelle part est ferme et non résiliable, et quelle part provient d'entités dans lesquelles Amazon détient une participation ?

**5.** C'est la question la plus directe : **quelle part du chiffre d'affaires d'AWS provient d'Anthropic et d'OpenAI**, deux entreprises dans lesquelles vous avez investi 83 Mds$ ? Pourquoi cette information n'est-elle pas publiée séparément ?

**6.** Vous dites que la demande dépassera l'offre en 2026 et probablement en 2027. **Que se passe-t-il en 2028**, lorsque la capacité livrée par l'ensemble du secteur rattrapera la demande ? Avez-vous modélisé un scénario de surcapacité sectorielle ?

**7.** Azure a progressé de 43 % et Google Cloud de 82 % sur le dernier trimestre, contre 37 % pour AWS. **Perdez-vous de la part de marché sur les charges de travail IA de nouvelle génération**, et si oui, pourquoi ?

### Comptabilité et qualité du résultat

**8.** Vous avez comptabilisé 70,2 Mds$ de plus-values avant impôt sur des participations privées au premier semestre 2026. **Quelle méthode de valorisation** retenez-vous, et vous engagez-vous à appliquer la même symétrie en cas de baisse des valorisations privées ?

**9.** Avez-vous modifié, ou envisagez-vous de modifier, **la durée d'utilité estimée** de vos serveurs et équipements réseau ? Quel serait l'effet chiffré sur le résultat opérationnel de 2027 ?

**10.** La marge de 7,9 % en Amérique du Nord agrège une activité publicitaire à très forte marge et des paris déficitaires comme Leo et Zoox. **Quelle est la marge du commerce seul**, hors publicité et hors projets d'investissement ?

### Structure et concurrence

**11.** La marge internationale est de 4,1 % contre 7,9 % en Amérique du Nord. **Quel niveau visez-vous à horizon trois ans**, et quels leviers spécifiques y conduisent ?

**12.** L'inflation des prix de la mémoire a causé le relèvement du capex de 20 Mds$. **Quelle est votre exposition contractuelle** aux fournisseurs de HBM et de DRAM pour 2027, et quelle part de vos volumes est sécurisée par des contrats à prix fixe ?

**13.** Walmart construit un actif de livraison rapide et une régie publicitaire. **En quoi votre avantage sur l'épicerie et sur la publicité au point de vente est-il durable** face à un concurrent disposant de 4 700 magasins de proximité ?

### Gouvernance et vision

**14.** Vous ne versez aucun dividende et ne procédez à aucun rachat significatif, alors que le flux de trésorerie disponible est négatif. **À partir de quel niveau de génération de trésorerie** envisageriez-vous un retour aux actionnaires — et cette question fait-elle seulement partie de l'agenda du conseil ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui dans ce cycle d'investissement, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le marché vient de récompenser un trimestre où la trésorerie a disparu

Le fait brut : le titre a gagné environ **26 % en trois séances** sur un trimestre où le **flux de trésorerie disponible sur douze mois glissants est passé de +18,2 Mds$ à -7,6 Mds$**. Il y a un an, le même marché aurait sanctionné ce chiffre. Ce qui a changé n'est pas l'entreprise — c'est **le critère d'évaluation**. Amazon est aujourd'hui valorisé comme un projet d'infrastructure en construction. Or les régimes d'évaluation ne sont pas des acquis : ils se retournent, souvent sans préavis et sans mauvaise nouvelle déclenchante.

### 2. Le résultat publié n'est plus un résultat

Sur le premier semestre 2026, **70,2 Mds$ de plus-values avant impôt** sur des participations privées non cotées. Sans elles, la croissance du résultat net tombe de plus de 240 % à environ 17 %. Ces gains reposent sur des valorisations issues de tours de financement privés — Anthropic à 965 Mds$, OpenAI à 852 Mds$ — c'est-à-dire sur **le prix payé par d'autres investisseurs dans un marché privé illiquide en phase d'euphorie**. Si l'une de ces valorisations se contracte de 30 %, Amazon devra passer une charge de plusieurs dizaines de milliards de dollars. Le marché traite aujourd'hui ces gains comme du bruit à la hausse, mais les traiterait comme un signal à la baisse.

### 3. La circularité est le point aveugle du dossier

Amazon investit **50 Mds$ dans OpenAI** et **jusqu'à 33 Mds$ dans Anthropic**. En retour, ces deux clients s'engagent sur **plus de 200 Mds$ de dépenses AWS cumulées**. Amazon finance donc partiellement ses propres revenus. Ce n'est pas illégal, ce n'est pas dissimulé — mais **Amazon ne publie pas la part du chiffre d'affaires d'AWS provenant d'entités dont il est actionnaire**. Le carnet de 496 Mds$, argument central de la thèse haussière, n'est donc pas décomposable par le lecteur. On demande à l'investisseur de croire à un chiffre dont la qualité est invérifiable.

### 4. Le mur d'amortissements arrive, et il est arithmétique

118 Mds$ de capex en 2025, **220 Mds$ en 2026**. Ces actifs s'amortissent sur trois à six ans. À partir de 2027, la charge d'amortissement croît violemment. Pour que la marge tienne, il faut que les revenus IA croissent **au moins aussi vite que l'amortissement de l'infrastructure qui les produit**. Aucune loi économique ne garantit cette synchronisation. Le précédent existe : en 2021-2022, Amazon avait construit une capacité logistique en anticipant une demande post-COVID qui ne s'est pas matérialisée au rythme prévu — le titre avait perdu plus de 50 %.

### 5. AWS croît moins vite que ses deux concurrents directs

Le récit dominant est celui de l'accélération d'AWS à 37 %. Le fait négligé : **Azure a progressé de 43 % et Google Cloud de 82 %** sur la même période. AWS accélère depuis une position de leader, mais **perd de la part relative sur le segment le plus stratégique**. Les optimistes lisent 37 % comme une victoire ; c'est aussi le chiffre le plus faible des trois.

### 6. Le concurrent que les optimistes sous-estiment : Alphabet

L'attention se porte sur Microsoft. Le vrai danger est **Alphabet** : TPU mature développé depuis dix ans, modèle de fondation de premier plan en interne, et une croissance cloud de 82 %. Contrairement à Amazon, Alphabet **ne dépend d'aucun laboratoire tiers** pour son offre d'IA de frontière. Si le modèle économique dominant devient l'intégration verticale complète — silicium, modèle et cloud sous un même toit — Amazon se retrouve dans la position de l'infrastructure louée, et son avantage se réduit à une question de prix.

### 7. Quelles hypothèses doivent se vérifier pour justifier 284 $ ?

Trois, simultanément : (a) AWS reste au-dessus de 28-30 % de croissance en 2027 ; (b) le délai de retour inférieur à trois ans est exact **toutes charges comprises** ; (c) les valorisations privées d'Anthropic et d'OpenAI tiennent ou progressent. **Si la croissance déçoit de 20 à 30 %** — AWS à 25 % au lieu de 33 % — le BPA 2028 tombe vers 8,50 $ et le multiple se comprime de 35x à 22-24x. **Cours implicite : 190-205 $, soit une baisse de 30 à 35 %.**

### Le scénario catastrophe unique
**Un hiver de l'IA décalé de dix-huit mois.** La demande de calcul ne s'effondre pas : elle cesse simplement de croître au rythme anticipé, au moment précis où la capacité commandée par l'ensemble du secteur est livrée. Les prix de l'inférence s'effondrent, les valorisations privées se contractent, Amazon déprécie ses participations et se retrouve avec 340 Mds$ d'actifs à amortir face à des revenus qui progressent de 15 % au lieu de 35 %. **Probabilité : 20 à 30 %** sur un horizon de trois ans — ni marginale, ni dominante, mais suffisante pour qu'un titre valorisé 3 000 Mds$ ne l'intègre visiblement pas.

### Conclusion short
Amazon est une entreprise exceptionnelle et son avantage sur le silicium est réel. **Mais à 284 $, après une hausse de 26 % en trois séances, le titre n'intègre plus aucune des trois façons dont ce pari peut mal tourner** : décalage entre monétisation et amortissement, retournement des valorisations privées, ou simple retour du marché à une exigence de flux de trésorerie disponible. Ce n'est pas une thèse contre l'entreprise. C'est une thèse contre **le prix payé pour une exécution parfaite dont on a déjà été payé d'avance**.`,
  },
];

export default { ...meta, modules };
