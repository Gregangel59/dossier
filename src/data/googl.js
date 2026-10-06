// ============================================================
//  DOSSIER : Alphabet Inc. (GOOGL)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "googl",                    // identifiant d'URL : /dossier/googl
  ticker: "GOOGL",
  name: "Alphabet Inc.",
  exchange: "Nasdaq",
  sector: "Internet, publicité numérique & cloud",
  initials: "GOOGL",                // affiché dans la pastille
  tagline: "Le moteur de recherche devenu usine à IA : publicité, YouTube, Google Cloud et puces TPU maison.",
  riskScore: 61,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "googl.html",
  updated: "2026-10",               // période des données
  published: "2026-10-07",          // date exacte de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Alphabet est la société holding de **Google**, créée en 2015 pour séparer le cœur rentable du groupe de ses paris de long terme. En 2025, le groupe a franchi pour la première fois les **400 Md$ de chiffre d'affaires (402,8 Md$, +15 %)** pour un bénéfice net de **132,2 Md$**. Début octobre 2026, sa capitalisation atteint **~4 200 Md$**, la troisième au monde.

Le modèle repose sur **deux boucles économiques** :
- **La boucle « attention → publicité »** : des services gratuits utilisés par des milliards de personnes (Search, YouTube, Android, Chrome, Gmail, Maps, Play) captent des intentions d'achat, monétisées par enchères publicitaires. Alphabet revendique 14 produits à plus d'un milliard d'utilisateurs, dont 5 à plus de 3 milliards.
- **La boucle « infrastructure IA → cloud »** : depuis 2023, le groupe vend aux entreprises sa pile technologique complète — puces **TPU** conçues en interne, data centers, modèles **Gemini**, outils de données et de sécurité — via **Google Cloud**.

Ce qui rend Alphabet singulier, c'est l'approche dite **« full stack »** : il est l'un des très rares acteurs à maîtriser à la fois les puces, l'infrastructure, les modèles de pointe (Google DeepMind) et la distribution grand public. C'est la thèse centrale du titre en 2026.

## Principaux produits et services

**Google Services (~79 % du CA au T2 2026 — 94,5 Md$, +15 %)** :
- **Search & autres** : 63,3 Md$ au T2 2026 (+17 %). Recherche, AI Overviews (plus de 2,5 Md d'utilisateurs mensuels), AI Mode (plus d'1 Md d'utilisateurs mensuels), Maps, Shopping
- **YouTube publicité** : ~11,0 Md$ au T2 2026 (+13 %). YouTube a dépassé 60 Md$ de revenus annuels (publicité + abonnements) en 2025
- **Abonnements, plateformes et appareils** : 12,9 Md$ (+15 %). YouTube Premium/Music, YouTube TV, Google One, offres Google AI Pro/Ultra, Play Store, Pixel — 350 millions d'abonnements payants au T1 2026
- **Google Network** : 7,3 Md$ (−0,7 %). Publicité sur les sites et applis tiers (AdSense, AdMob, Ad Manager) — activité en déclin structurel

**Google Cloud (~21 % du CA — 24,8 Md$, +82 %)** : Google Cloud Platform (calcul, stockage, capacité TPU/GPU), Vertex AI, Gemini Enterprise (utilisé par près de 90 % du Fortune 100), Workspace, et la cybersécurité de **Wiz** (rachat finalisé en 2026 pour ~32 Md$, le plus important de l'histoire du groupe).

**Other Bets (<1 % du CA)** : **Waymo** (robotaxis, valorisé 126 Md$ lors de sa levée de février 2026), Verily (santé), Wing (drones), Calico, ainsi que la biotech Isomorphic Labs.

L'application **Gemini** a dépassé **1 milliard d'utilisateurs mensuels** en août 2026, devenant le 14e produit milliardaire du groupe.

## Clients, fournisseurs, concurrents

**Clients** : des millions d'annonceurs (des PME aux grandes marques, en passant par les e-commerçants chinois comme Temu ou Shein) et leurs agences (WPP, Publicis, Omnicom) ; des entreprises clientes du cloud (Anthropic, Apple via le partenariat Gemini annoncé en janvier 2026, Meta, près de 90 % du Fortune 100) ; les utilisateurs payants d'abonnements.

**Fournisseurs** : **Broadcom** (co-conception des TPU) et MediaTek ; **Nvidia** (GPU) ; fournisseurs d'énergie (Constellation Energy, NextEra, Kairos Power, Brookfield) ; distributeurs de trafic rémunérés (**Apple**, fabricants Android, opérateurs télécoms, Mozilla) ; créateurs YouTube et ayants droit (labels musicaux, ligues sportives).

**Concurrents** : **OpenAI** (ChatGPT, au-delà d'1 Md d'utilisateurs mensuels) et **Microsoft** (Bing, Copilot, Azure) sur la recherche et l'IA ; **Meta** (Facebook, Instagram, Meta AI) et **Amazon Ads** sur la publicité ; **AWS** et **Azure** sur le cloud ; **TikTok** sur la vidéo ; **Apple** sur le mobile.

## Modalités contractuelles et de paiement

- **Publicité** : vente par enchères automatisées en temps réel (coût par clic, par mille impressions ou par conversion), en libre-service. Les petits annonceurs paient par carte ou prépaiement ; les grands comptes sont facturés mensuellement, avec des engagements annuels de dépenses négociés via les agences.
- **Coûts d'acquisition de trafic (TAC)** : Alphabet reverse une part de ses revenus à ceux qui lui apportent des requêtes — Apple pour la place de moteur par défaut dans Safari (paiement estimé autour de 20 Md$ par an), les fabricants Android, les opérateurs — et aux éditeurs du réseau publicitaire. Depuis le jugement Mehta (septembre 2025), ces accords ne peuvent plus être **exclusifs**.
- **Cloud** : facturation à la consommation, combinée à des **engagements pluriannuels** de dépenses avec remise. Ces engagements forment le **carnet de commandes (backlog) de 514 Md$** au 30 juin 2026, dont un peu plus de la moitié doit être reconnue en chiffre d'affaires sous 24 mois. S'y ajoutent des contrats de capacité TPU de plusieurs gigawatts (Anthropic : environ 5 GW à partir de 2027).
- **Abonnements** : prélèvements mensuels ou annuels, revenus récurrents et prévisibles.
- **Play Store** : commission sur les ventes d'applications, réduite ces dernières années sous la pression judiciaire et réglementaire.

> **Note de lecture** : en 2026, le bénéfice par action publié est massivement gonflé par des **plus-values latentes non monétaires** sur des participations (37,7 Md$ au T1, ~98 Md$ au T2, principalement Anthropic). Toute l'analyse de ce dossier raisonne donc aussi en **BPA normalisé**, hors ces gains comptables.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Alphabet dans la chaîne de valeur

Alphabet occupe une position rare : il est à la fois **fabricant d'infrastructure** (puces, data centers), **éditeur de modèles d'IA**, **plateforme grand public** et **régie publicitaire**. Historiquement simple (des serveurs, du logiciel, de la publicité), sa chaîne d'approvisionnement est devenue en 2026 l'une des plus capitalistiques du monde, avec **195 à 205 Md$ d'investissements prévus cette année**.

### Amont — Les intrants physiques

**Puces et calcul** :
- **Broadcom** — partenaire historique de conception des TPU ; fournit aussi de la capacité TPU à Anthropic dans le cadre de l'accord tripartite d'avril 2026
- **MediaTek** — second partenaire de conception sur certaines générations de TPU
- **Nvidia** — GPU proposés dans Google Cloud aux clients qui en ont besoin
- Fonderies et fournisseurs de mémoire HBM en Asie — goulot d'étranglement mondial de capacité
- **Lumentum**, **Coherent** — composants optiques des réseaux de data centers
- Assembleurs de serveurs (ODM) comme **Celestica**

**Énergie** (le nouvel intrant critique) :
- **Constellation Energy** — contrat nucléaire de 20 ans annoncé le 6 octobre 2026
- **Kairos Power** — petits réacteurs modulaires (SMR)
- **NextEra Energy**, **Brookfield** (hydroélectricité) — contrats d'achat d'électricité renouvelable
- **Intersect** — développeur de projets énergétiques dont Alphabet a annoncé le rachat fin 2025, pour sécuriser sa propre production

**Capacité tierce** : face à la pénurie, Google loue de la capacité de calcul à des opérateurs extérieurs au T3 2026 pour faire la jonction — ce qui pèse temporairement sur la marge du Cloud.

**Contenus et trafic** :
- Créateurs YouTube (55 % des revenus publicitaires des vidéos longues leur sont reversés), labels musicaux, ligues sportives (NFL Sunday Ticket sur YouTube TV)
- **Apple**, fabricants Android, opérateurs télécoms, **Mozilla** — rémunérés via les TAC pour distribuer Google Search

---

### Alphabet — Transformation

**Google DeepMind** : recherche et entraînement des modèles Gemini (Gemini 4 en cours, « le pré-entraînement le plus ambitieux » du groupe).

**Infrastructure technique** : conception des TPU, data centers mondiaux, réseau sous-marin de câbles.

**Produits** : Search, YouTube, Android, Chrome, Gmail, Maps, Workspace, Gemini.

**Google Cloud** : revente de la pile complète (TPU, modèles, données, sécurité Wiz) aux entreprises — et depuis 2026, **vente directe de TPU installés dans les data centers des clients**.

---

### Aval — Clients finaux

**Annonceurs** : PME, marques mondiales, e-commerçants (Temu, Shein), via les agences **WPP**, **Publicis**, **Omnicom** — ainsi que des concurrents qui sont aussi de gros acheteurs de publicité Google.

**Entreprises clientes du cloud** : **Anthropic** (client, mais aussi société dans laquelle Alphabet s'est engagé à investir jusqu'à 40 Md$), **Apple** (Gemini au cœur des futurs modèles de Siri), **Meta** (contrat cloud pluriannuel), banques, industriels, administrations.

**Éditeurs et développeurs** : sites et applis du réseau AdSense/AdMob, développeurs Android du Play Store.

**Grand public** : plusieurs milliards d'utilisateurs, dont 350 millions d'abonnés payants.

**Mobilité** : passagers Waymo (environ 500 000 trajets payants par semaine à la mi-2026, partenariats de distribution avec **Uber**).

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                     ALPHABET                      AVAL
Broadcom, MediaTek  →  Conception TPU          →  Google Cloud
Nvidia (GPU)           Data centers            →  (Anthropic, Apple,
Lumentum, Coherent     Google DeepMind              Meta, Fortune 100)
Constellation, Kairos  (modèles Gemini)
NextEra, Brookfield                             →  Annonceurs
                       Search, YouTube,             (via WPP, Publicis,
Apple, Android,    →   Android, Chrome,             Omnicom)
opérateurs (TAC)       Gemini app
Créateurs YouTube  →                            →  Utilisateurs
                                                   (abonnés payants)
\`\`\`

**Le point clé** : le goulot d'étranglement d'Alphabet n'est plus la demande mais **l'offre physique** — puces, mémoire, électricité, bâtiments. La direction répète que la demande en IA dépasse ses capacités disponibles. Cela explique le niveau d'investissement record, la dette nouvelle et la levée de fonds propres de juin 2026.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — T2 2026

| Segment | CA T2 2026 | Croissance | Résultat opérationnel | Marge opé. |
|---|---|---|---|---|
| Google Services | 94,5 Md$ | +15 % | 39,5 Md$ | 41,8 % |
| Google Cloud | 24,8 Md$ | +82 % | 8,8 Md$ | 35,6 % |
| Other Bets | <0,5 Md$ | n.s. | Perte | — |
| Coûts centraux Alphabet | — | — | Charges IA et juridiques | — |
| **Total Alphabet** | **119,8 Md$** | **+24 %** | **40,8 Md$** | **34,0 %** |

**Précision méthodologique** : Alphabet publie le chiffre d'affaires et le résultat opérationnel par segment, mais **pas l'EBITDA ni le résultat net par segment**. Une partie croissante des coûts de développement des modèles (Google DeepMind) est logée dans les **coûts centraux non alloués** — ce qui flatte mécaniquement les marges affichées des segments (voir Red Flags).

### Détail de Google Services (T2 2026)

| Ligne | CA | Croissance | Lecture |
|---|---|---|---|
| Search & autres | 63,3 Md$ | +17 % | Accélération malgré la concurrence des chatbots |
| YouTube publicité | ~11,0 Md$ | +13 % | Solide, porté par les Shorts et la TV connectée |
| Abonnements, plateformes, appareils | 12,9 Md$ | +15 % | 350 M d'abonnés payants |
| Google Network | 7,3 Md$ | −0,7 % | Déclin structurel du web ouvert |

---

## Évolution annuelle 2022-2025

| Indicateur | 2022 | 2023 | 2024 | 2025 |
|---|---|---|---|---|
| CA total | 282,8 Md$ | 307,4 Md$ | 350,0 Md$ | 402,8 Md$ |
| CA Google Services | 253,5 Md$ | 272,5 Md$ | 304,9 Md$ | ~343 Md$ |
| CA Google Cloud | 26,3 Md$ | 33,1 Md$ | 43,2 Md$ | ~58,7 Md$ |
| Rés. opé. Cloud | −3,0 Md$ | +1,7 Md$ | +6,1 Md$ | ~+13,9 Md$ |
| Résultat opérationnel total | 74,8 Md$ | 84,3 Md$ | 112,4 Md$ | 129,0 Md$ |
| Marge opérationnelle | 26 % | 27 % | 32 % | 32 % |
| Résultat net | 60,0 Md$ | 73,8 Md$ | 100,1 Md$ | 132,2 Md$ |
| EBITDA (estimé) | ~90 Md$ | ~96 Md$ | ~128 Md$ | ~150 Md$ |

*EBITDA estimé = résultat opérationnel + dotations aux amortissements publiées dans le tableau de flux. Chiffres 2025 par segment reconstitués à partir des publications trimestrielles.*

---

### Les trois dynamiques à retenir

**1. Google Cloud est devenu le moteur.** De −3 Md$ de perte opérationnelle en 2022 à **8,8 Md$ de profit sur le seul T2 2026**. La croissance a accéléré trimestre après trimestre : +32 % (T2 2025), +34 % (T3), +48 % (T4), +63 % (T1 2026), **+82 % (T2 2026)**. Le carnet de commandes est passé de ~155 Md$ (T3 2025) à **514 Md$**. La marge est montée de ~21 % à **35,6 %** en un an, désormais comparable aux leaders du secteur.

**2. Search résiste — et accélère.** Contrairement au scénario redouté d'une cannibalisation par ChatGPT, la croissance de Search est passée de ~12 % (T2 2025) à **19 % (T1 2026)** puis **17 % (T2 2026)**. Les AI Overviews et l'AI Mode génèrent davantage de requêtes, et le coût de service des réponses IA a baissé de plus de 30 % depuis le lancement de Gemini 3.

**3. Le web ouvert décline.** Google Network recule : les éditeurs tiers perdent du trafic au profit des réponses générées directement dans Google. C'est une ligne marginale (~6 % du CA) mais un indicateur des tensions avec l'écosystème des éditeurs.

---

### Répartition géographique (exercice 2025, ordres de grandeur)

| Région | Poids dans le CA | Commentaire |
|---|---|---|
| États-Unis | ~49 % | Marché le plus mature, cœur de la publicité et du cloud |
| EMEA | ~29 % | Exposé à la régulation européenne (DMA, amendes antitrust) |
| Asie-Pacifique | ~16 % | Croissance soutenue, Inde en tête |
| Autres Amériques | ~6 % | Brésil, Canada, Mexique |

**Effet de change** : favorable d'environ 1 point au T2 2026, la direction anticipe un léger effet défavorable au T3.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. La distribution — un moat d'habitude et de contrats
Google Search est la porte d'entrée par défaut d'internet : environ 90 % des recherches mondiales, moteur par défaut de Safari, de Chrome (navigateur majoritaire) et d'Android (système mobile majoritaire). La justice américaine a confirmé que cette position constitue un **monopole** — mais les remèdes prononcés (septembre 2025) n'imposent ni la cession de Chrome, ni l'arrêt des paiements à Apple, seulement la fin des exclusivités et un partage de données avec les concurrents. Le moat est entamé juridiquement, pas démantelé.

### 2. L'intégration « full stack » de l'IA — le moat de coût
Alphabet est le seul acteur à maîtriser **simultanément** les puces (TPU, développées en interne depuis 2015), l'infrastructure, les modèles (Google DeepMind) et des milliards d'utilisateurs pour les distribuer. Conséquence : un **coût par requête IA structurellement plus bas** que les concurrents qui achètent leurs GPU au prix fort. Le fait qu'Anthropic, Meta ou Apple choisissent les TPU ou les modèles Gemini valide cet avantage.

### 3. YouTube — effets de réseau à double face
Plus de créateurs attirent plus de spectateurs, qui attirent plus d'annonceurs, qui financent plus de créateurs (55 % des revenus reversés). YouTube est le premier service de streaming en temps d'écran télé aux États-Unis. Ce moat est solide et peu copiable.

### 4. Les données et l'échelle
Des décennies de requêtes, de vidéos, de cartes et d'e-mails : un capital de données d'entraînement et de signal publicitaire sans équivalent. L'obligation de partage de certaines données de recherche (jugement Mehta) l'érode à la marge.

### 5. La puissance financière
~243 Md$ de trésorerie, notation AA+, accès à la dette sur 100 ans (obligation centenaire en livres sterling, février 2026) et à des fonds propres en quelques jours (près de 50 Md$ levés en une semaine en juin 2026). Peu d'acteurs peuvent soutenir 200 Md$ d'investissements annuels.

### 6. Les coûts de changement dans le Cloud
Un client qui a migré ses données, ses applications et ses modèles sur Google Cloud et signé des engagements pluriannuels (carnet de 514 Md$) ne repart pas facilement. Moat récent, encore en construction.

## Positionnement face à la concurrence

| Critère | Alphabet | Microsoft | Meta | Amazon | OpenAI |
|---|---|---|---|---|---|
| Puces IA maison | TPU — maturité élevée | Maia — en rodage | MTIA — en rodage | Trainium — avancé | Non (dépendant) |
| Modèles de pointe | Gemini (3.5 Pro retardé) | Via OpenAI + interne | Llama, Muse | Nova + Anthropic | GPT — référence |
| Distribution grand public | Très forte | Forte (Windows, Office) | Très forte | Moyenne | Forte (ChatGPT) |
| Croissance cloud (dernier trim.) | +82 % | ~+35-40 % (Azure) | — | ~+20 % (AWS) | — |
| Image de marque | Top 3 mondial | Top 3 mondial | Contrastée | Top 5 mondial | Forte, récente |

## Valeur perçue et image de marque

Google figure parmi les trois marques les plus valorisées au monde dans les classements de référence. La marque est associée à la **fiabilité de l'information** — un actif précieux à l'heure où les réponses générées par IA posent la question de la confiance. Revers de la médaille : les controverses (images générées par Gemini en 2024, retards de Gemini 3.5 Pro en 2026) touchent une marque très exposée.

## Pouvoir de négociation

- **Vis-à-vis des annonceurs** : **très élevé** — Google capte l'intention d'achat au moment où elle s'exprime ; aucune alternative n'offre un volume comparable sur la recherche.
- **Vis-à-vis d'Apple** : **équilibré** — Apple perçoit environ 20 Md$ par an et a choisi Gemini pour Siri ; Google a besoin de Safari. Dépendance mutuelle.
- **Vis-à-vis de Nvidia** : **élevé** — les TPU réduisent la dépendance aux GPU et donnent un levier de prix rare.
- **Vis-à-vis des fournisseurs d'énergie et de capacité** : **faible à court terme** — pénurie mondiale, contrats de 20 ans à prix élevés, recours à de la capacité tierce coûteuse.
- **Vis-à-vis des talents** : **en dégradation** — départs de Jeff Dean, Noam Shazeer, John Jumper en 2026 ; les laboratoires concurrents offrent des rémunérations et une liberté que Google peine à égaler.
- **Vis-à-vis des régulateurs** : **faible** — condamné pour monopole aux États-Unis (Search et publicité en ligne) et sanctionné à répétition par Bruxelles.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Géants mondiaux de l'internet et du cloud (octobre 2026)

| Société | Code Bloomberg | Cap. boursière (Md$) | EV/CA | EV/EBIT | P/E | Rdt div. | ROE moy. 5 ans |
|---|---|---|---|---|---|---|---|
| **Alphabet** | **GOOGL US** | **~4 200** | **~9,1x** | **~27x** | **~29x norm. / 17x publié** | **0,25 %** | **~30 %** |
| Microsoft | MSFT US | ~2 800 | ~9x | ~20x | ~26x (prosp.) | ~0,9 % | ~36 % |
| Meta Platforms | META US | ~1 700 | ~7,5x | ~17x | ~23x (prosp.) | ~0,3 % | ~28 % |
| Amazon | AMZN US | ~2 600 | ~3,5x | ~31x | ~28x (prosp.) | 0 % | ~19 % |
| Apple | AAPL US | ~4 600 | ~10x | ~30x | ~34x (prosp.) | ~0,4 % | >140 % |
| Tencent | 700 HK | ~700 | ~6x | ~18x | ~19x (prosp.) | ~0,9 % | ~20 % |

*Données estimatives, ordres de grandeur au 6 octobre 2026, à partir des cours et publications disponibles. Le ROE d'Apple est artificiellement gonflé par ses rachats massifs (fonds propres réduits). À affiner sur Bloomberg avant toute décision.*

**Calculs Alphabet** : valeur d'entreprise ≈ 4 200 Md$ de capitalisation + 98 Md$ de dette long terme + 17 Md$ d'actions de préférence convertibles − 243 Md$ de trésorerie ≈ **4 070 Md$**. CA des 12 derniers mois : 445,8 Md$ ; résultat opérationnel : ~148 Md$.

---

### Le piège du P/E publié

Le P/E de **17x** affiché par les sites boursiers est **trompeur** : il intègre ~136 Md$ de plus-values latentes non monétaires enregistrées au S1 2026 sur des participations (Anthropic surtout). Sur un BPA normalisé d'environ 11,4 $ sur 12 mois glissants, le P/E réel est proche de **30x**, et d'environ **24x** sur les bénéfices attendus en 2027.

---

### Analyse comparative

**Microsoft — Le rival le plus direct**
Même profil (cloud + IA + logiciels grand public) mais une rentabilité des fonds propres plus élevée et un rendement du dividende supérieur. Azure croît moins vite que Google Cloud depuis deux trimestres. Microsoft dépend toutefois davantage de partenaires externes pour ses modèles et ses puces. **Verdict** : Alphabet affiche aujourd'hui la meilleure dynamique, Microsoft le profil le plus régulier.

**Meta — Le concurrent publicitaire et IA**
Meta est le principal rival pour les budgets publicitaires et lance ses propres produits d'IA grand public (l'application Muse, en tête des téléchargements en septembre 2026). Il se paie moins cher (~23x) mais n'a pas d'activité cloud pour monétiser son infrastructure auprès de tiers.

**Amazon — Le rival cloud**
AWS reste le premier cloud mondial en taille, mais croît beaucoup moins vite. Amazon Ads est aussi un concurrent publicitaire croissant sur le e-commerce. Multiple d'EV/CA bas (marges de distribution), d'EV/EBIT élevé.

**Apple — Le partenaire-concurrent**
Apple ne concurrence pas directement Google dans la recherche, mais contrôle l'accès à plus d'un milliard d'iPhone. Apple est le titre le plus cher du groupe (~34x) pour la croissance la plus lente.

**Tencent — La référence asiatique**
Écosystème comparable (publicité, jeux, cloud, paiements) à une valorisation bien plus faible, reflet du risque chinois.

---

### Le ratio qui compte en 2026 : le rendement du capital investi

Tous ces groupes investissent des montants inédits (Alphabet 195-205 Md$, Amazon ~220 Md$, Microsoft ~175 Md$, Meta 130-145 Md$ en 2026). La question n'est plus le multiple de bénéfices actuel, mais **le retour sur ces investissements**. Sur ce critère, Alphabet a l'avantage le plus visible : un carnet cloud de 514 Md$ et une marge cloud de 35,6 % qui prouvent que les dépenses se convertissent déjà en revenus rentables.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 22 juillet 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | 119,8 Md$ | 96,4 Md$ | ~117,0 Md$ | **+2,4 % ✓** |
| CA Google Cloud | 24,8 Md$ | 13,6 Md$ | ~22,5 Md$ | **+10 % ✓** |
| CA Google Services | 94,5 Md$ | 82,5 Md$ | ~94,3 Md$ | Conforme |
| Résultat opérationnel | 40,8 Md$ | 31,3 Md$ | ~40,5 Md$ | Conforme |
| BPA publié | 9,11 $ | 2,31 $ | ~2,87 $ | Non comparable |
| BPA normalisé (hors plus-values) | ~2,85 $ | ~2,31 $ | ~2,87 $ | **Légèrement inférieur** |
| Investissements (capex) | 44,9 Md$ | 22,4 Md$ | ~45 Md$ | Conforme |

**Lecture** : le chiffre d'affaires a nettement **dépassé** les attentes, porté par un Cloud exceptionnel. Le BPA publié de 9,11 $ est sans signification économique : il inclut ~98 Md$ de **plus-values latentes** sur des participations. Hors cet effet, le BPA est **en ligne, voire très légèrement inférieur** au consensus, à cause de frais généraux et administratifs plus élevés que prévu (6,5 Md$ contre ~5,1 Md$ attendus).

---

### Facteurs clés par segment

- **Google Cloud (+82 %)** : accélération spectaculaire (+63 % au T1). Résultat opérationnel triplé à 8,8 Md$, marge de 35,6 % contre 20,7 % un an plus tôt. Carnet de commandes à **514 Md$** (+52 Md$ en un trimestre).
- **Search (+17 %)** : croissance à deux chiffres maintenue, requêtes à un niveau record grâce aux expériences IA.
- **YouTube publicité (+13 %)** : en accélération par rapport à 2025 (+9 % au T4 2025).
- **Abonnements (+15 %)** : portés par YouTube et les offres IA (Google AI Pro/Ultra).
- **Network (−0,7 %)** : seul point faible, en déclin structurel.

---

### Évolution des marges

- **Marge opérationnelle groupe** : **34,0 %**, en hausse de 1,6 point sur un an — mais en baisse par rapport aux 36,1 % du T1 2026, et sous les attentes.
- **Marge Google Services** : 41,8 % (contre 40,1 %) — le coût de service des réponses IA a baissé.
- **Marge Cloud** : 35,6 % — au niveau des meilleurs du secteur. La direction prévient d'une **pression modérée** au T3, liée au recours à de la capacité tierce.
- **À venir** : forte hausse des amortissements (capex doublé), des coûts d'énergie et d'exploitation des data centers.

---

### Prévisions et perspectives

- **Capex 2026 relevé à 195-205 Md$** (contre 180-190 Md$ en avril et 175-185 Md$ en février) — **deuxième relèvement consécutif**.
- **Capex 2027 en « hausse significative »** — le consensus anticipe ~260 Md$.
- **Carnet Cloud** : un peu plus de 50 % des 514 Md$ reconnus sous 24 mois.
- **Change** : léger vent contraire attendu au T3.
- **Changement de ton** : pour la première fois, Sundar Pichai a reconnu des **retards en codage et en IA agentique** face aux concurrents, et annoncé Gemini 4 comme réponse.

---

### Signaux d'alerte dans le bilan

- **Flux de trésorerie libre négatif : −5,9 Md$** au T2 (39,1 Md$ de flux opérationnel contre 44,9 Md$ de capex). Un fait rarissime pour le groupe.
- **Rachats d'actions : zéro** au S1 2026, après 33 trimestres consécutifs de rachats (13,2 Md$ au T2 2025).
- **Levée de fonds propres** : ~49,6 Md$ collectés début juin (actions ordinaires, placement privé de 10 Md$ auprès de Berkshire Hathaway, actions de préférence convertibles à 6,25 %), plus un programme de 40 Md$ d'émissions au fil de l'eau à partir du T3.
- **Dette long terme** : **98,2 Md$** au 30 juin 2026, contre 46,5 Md$ fin 2025 et moins de 11 Md$ début 2025.
- **Trésorerie** : 242,5 Md$ (gonflée par les levées) — la position nette reste largement positive.

---

### Réaction du marché

Le titre a chuté de **−7,1 %** le 23 juillet (clôture à 317,69 $), sur des volumes doubles de la moyenne, malgré un trimestre record. Le marché a ignoré le Cloud et sanctionné le **relèvement du capex** et le **flux de trésorerie négatif**. Le titre est ensuite remonté à ~376 $ dès le 4 août : signe que le marché **hésite** entre la crainte d'un surinvestissement et la conviction que la demande est réelle. Ce qui était intégré dans le cours : une croissance forte. Ce qui ne l'était pas : l'ampleur de l'effort financier nécessaire pour la servir.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences de résultats — juillet 2025 à juillet 2026

### Évolution du ton, trimestre par trimestre

**T2 2025 (juillet 2025)** — *Confiance retrouvée.* Le capex 2025 est relevé à 85 Md$, le Cloud croît de 32 %. Pichai insiste sur les 2 milliards d'utilisateurs des AI Overviews pour contrer le récit « ChatGPT tue Google ».

**T3 2025 (octobre 2025)** — *Euphorie maîtrisée.* Premier trimestre à plus de 100 Md$ de CA. Le carnet Cloud atteint ~155 Md$. Gemini compte 650 millions d'utilisateurs mensuels. Le discours devient offensif.

**T4 2025 (février 2026)** — *Ambition assumée.* « Plus de 400 Md$ de CA annuel ». Capex 2026 annoncé à 175-185 Md$, soit le double de 2025. Premier usage récurrent de l'expression **« contraints par l'offre »**. Le titre recule de 5 % en séance.

**T1 2026 (avril 2026)** — *Triomphe.* Cloud à +63 %, carnet quasi doublé à 462 Md$, annonce de la vente directe de TPU. « 2026 démarre de façon formidable. » Le titre bondit de près de 10 %.

**Conférence spéciale du 3 juin 2026** — *Justification.* Pour défendre la levée de fonds propres, Pichai affirme que la demande en IA dépasse « nettement » l'offre disponible.

**T2 2026 (juillet 2026)** — *Confiance mêlée de défense.* Le ton reste enthousiaste sur le Cloud, mais Pichai concède pour la première fois des **lacunes en codage et en IA agentique**, annonce que les TPU seront prioritairement réservés à la recherche de pointe interne et que Google visera un rythme de sortie de modèles quasi mensuel.

---

### Les priorités répétées de la direction

**1. L'approche « full stack »** — Expression martelée à chaque conférence : puces + infrastructure + modèles + distribution. C'est le fil conducteur stratégique.

**2. La capacité avant tout** — « Nous sommes contraints par l'offre. » Le discours justifie chaque relèvement du capex par la demande non servie et le carnet de commandes.

**3. La monétisation de l'IA dans Search** — AI Overviews, AI Mode, nouveaux formats publicitaires : la direction démontre trimestre après trimestre que l'IA **augmente** les requêtes et les revenus plutôt qu'elle ne les cannibalise.

**4. La discipline sur les coûts** — La directrice financière Anat Ashkenazi insiste sur la productivité (baisse de plus de 30 % du coût des réponses IA, gestion des effectifs) pour compenser la hausse des amortissements.

**5. Le rattrapage sur les modèles** — Depuis juillet 2026, Gemini 4 est présenté comme « le pré-entraînement le plus ambitieux » du groupe : un aveu implicite que Gemini 3.x ne suffit plus face à la concurrence.

---

### Analyse du sentiment

| Trimestre | Sentiment | Thème dominant | Signal |
|---|---|---|---|
| T2 2025 | Positif | Résilience de Search | Rassurant |
| T3 2025 | Très positif | Cap des 100 Md$, Cloud | Accélération |
| T4 2025 | Très positif | Capex ×2 | Premier doute du marché |
| T1 2026 | Euphorique | Carnet 462 Md$, TPU | Apogée |
| T2 2026 | Positif mais défensif | Capex 200 Md$, Gemini 4 | Fissures sur l'IA de pointe |

**Ce qu'il faut lire entre les lignes** :
- **Confiance** : toujours élevée sur la demande et le Cloud — et étayée par les chiffres.
- **Transparence** : bonne sur le carnet et le capex ; plus floue sur le **retour sur investissement** attendu et sur la rentabilité des contrats TPU de très grande taille.
- **Évolution notable** : on est passé d'un discours « nous sommes en tête de l'IA » (T1 2026) à « nous comblons nos lacunes » (T2 2026). Le retard de Gemini 3.5 Pro, puis le départ de Jeff Dean en août, ont donné du poids à cette inflexion.
- **Aucune révision à la baisse** des objectifs opérationnels — mais une révision à la hausse permanente des dépenses.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### Sundar Pichai — Directeur général de Google (depuis 2015) et d'Alphabet (depuis décembre 2019)

**Bilan chiffré** :
- Entré chez Google en 2004, il a piloté le lancement de **Chrome** (2008, devenu le premier navigateur mondial) puis dirigé **Android**.
- Depuis qu'il dirige Alphabet (fin 2019) : CA passé de **162 Md$ (2019) à 446 Md$** sur 12 mois glissants, capitalisation de ~900 Md$ à **~4 200 Md$**.
- A transformé Google Cloud d'une activité déficitaire en un moteur rentable (marge 35,6 %) en recrutant Thomas Kurian en 2019.
- A fusionné Google Brain et DeepMind (2023) pour créer Google DeepMind, à l'origine de Gemini.

**Points faibles** : Google a été **pris de court par ChatGPT** fin 2022, malgré l'invention du transformer en interne ; lancement raté de Bard (2023), controverse sur les images de Gemini (2024), retard prolongé de **Gemini 3.5 Pro** en 2026 et exode de chercheurs de premier plan.

**Ancienneté et participation** : 22 ans dans le groupe. Sa participation au capital est faible (bien inférieure à 1 %) ; sa rémunération repose sur des attributions d'actions triennales liées en partie à la performance boursière relative.

---

### Équipe dirigeante clé

- **Anat Ashkenazi — Directrice financière (depuis juillet 2024)** : ex-directrice financière d'Eli Lilly, réputée pour sa rigueur. Paradoxe : son mandat coïncide avec le doublement du capex, l'arrêt des rachats d'actions et la première levée de fonds propres d'ampleur.
- **Thomas Kurian — Directeur de Google Cloud (depuis 2019)** : ex-numéro 2 d'Oracle. A multiplié le CA du Cloud par plus de 5 et l'a rendu durablement rentable. Le meilleur bilan opérationnel de l'équipe.
- **Philipp Schindler — Directeur commercial** : architecte de la monétisation publicitaire depuis plus de 20 ans.
- **Ruth Porat — Présidente et directrice des investissements** : ancienne directrice financière, garante historique de la discipline de coûts.
- **Koray Kavukcuoglu — Vice-président senior de Google DeepMind (depuis août 2026)** : prend les commandes opérationnelles de l'IA, rapporte directement à Pichai.
- **Demis Hassabis — Président de Google DeepMind et directeur scientifique d'Alphabet (depuis août 2026)** : prix Nobel de chimie 2024 (AlphaFold), il quitte la direction opérationnelle pour un rôle stratégique.

**Départs majeurs de 2026** : Noam Shazeer (vers OpenAI, juin), John Jumper (vers Anthropic), puis **Jeff Dean** (5 août, employé n° 30, co-responsable de Gemini) avec Oriol Vinyals, Quoc Le et Sanjay Ghemawat pour fonder Discovery Loop — start-up dont Google est investisseur fondateur.

---

### Le contrôle des fondateurs

Larry Page et Sergey Brin détiennent les actions de **classe B à 10 voix**, ce qui leur confère environ **la moitié des droits de vote** pour une part minoritaire du capital. Les actions GOOGL (classe A) ont une voix, les actions GOOG (classe C) aucune. Sergey Brin s'est réinvesti personnellement dans les travaux sur Gemini depuis 2023.

---

### Historique de l'allocation du capital

| Indicateur | 2022 | 2023 | 2024 | 2025 | S1 2026 |
|---|---|---|---|---|---|
| ROE | ~23 % | ~27 % | ~33 % | ~36 % | n.s. (plus-values) |
| Capex | 31,5 Md$ | 32,3 Md$ | 52,5 Md$ | 91,4 Md$ | 80,6 Md$ |
| Rachats d'actions | 59,3 Md$ | 61,5 Md$ | 62,2 Md$ | 45,7 Md$ | 0 |
| Dividende/action annualisé | — | — | 0,80 $ | 0,84 $ | 0,88 $ |
| Grandes opérations | — | — | — | Wiz (annonce) | Wiz (clôture), Anthropic (jusqu'à 40 Md$) |

**Lecture** : jusqu'en 2025, une allocation exemplaire — rachats massifs, ROE en hausse, peu d'acquisitions coûteuses. **2026 marque une rupture** : tout le flux de trésorerie (et au-delà) part dans l'infrastructure IA, financée par de la dette nouvelle (~85 Md$ en un an) et des fonds propres. Le ROIC futur dira si ce virage crée de la valeur. L'entrée de **Berkshire Hathaway** au capital (10 Md$ en juin 2026) est un signal de confiance externe fort.

---

### Signaux d'alerte

- **Transactions avec parties liées** : Anthropic est à la fois une **participation** (engagement jusqu'à 40 Md$) et l'un des **plus gros clients** du Cloud. Discovery Loop est financée par Google. À documenter.
- **Rémunération** : élevée (attribution de 226 M$ à Pichai en 2022), mais majoritairement en actions.
- **Changements de stratégie** : réorganisation profonde de l'IA en août 2026 ; pas de pivot stratégique global.
- **Comportement promotionnel** : modéré — la communication est factuelle, mais le discours « contraints par l'offre » sert à justifier des dépenses sans fin visible.
- **Litiges d'actionnaires** : plusieurs cabinets enquêtent sur la communication autour du retard de Gemini 3.5 Pro (juillet 2026).

---

### Fondateur ou gestionnaire ?

Alphabet est dirigé par un **gestionnaire professionnel** (Pichai) **sous contrôle des fondateurs** (Page et Brin). À ce stade de l'entreprise — une course technologique qui exige des décisions de plusieurs centaines de milliards — ce modèle a un avantage : la capacité à investir à très long terme sans pression des actionnaires minoritaires. Son inconvénient : **aucun contre-pouvoir actionnarial** si l'effort d'investissement s'avère excessif.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Les événements qui ont fait bouger le titre de plus de 5 % (2021-2026)

*Variations en séance ou à la clôture, arrondies. Le titre a été divisé par 20 en juillet 2022 ; les cours cités sont ajustés.*

### Hausses significatives

**Février 2021 — Résultats du T4 2020** (≈ +7 %) : rebond spectaculaire de la publicité post-Covid, premiers profits annoncés pour le Cloud.

**Février 2022 — Division du titre par 20 annoncée** (≈ +7,5 %) : avec des résultats record, l'opération ouvre le titre aux particuliers.

**Avril 2024 — Premier dividende de l'histoire et 70 Md$ de rachats** (≈ +10 %) : Alphabet rejoint les valeurs de rendement et dépasse 2 000 Md$ de capitalisation.

**Décembre 2024 — Puce quantique Willow** (≈ +5 % deux séances de suite) : démonstration de l'avance de recherche du groupe.

**3 septembre 2025 — Jugement Mehta sur les remèdes** (≈ +9 %) : pas de cession de Chrome ni d'Android, paiements à Apple autorisés. Le principal risque juridique se dégonfle.

**Novembre 2025 — Lancement de Gemini 3 et intérêt pour les TPU** (plusieurs séances à +3 à +6 %) : Gemini 3 est salué comme un modèle de pointe ; des informations sur l'intérêt de Meta pour les TPU propulsent le titre. Berkshire Hathaway dévoile une participation.

**30 avril 2026 — Résultats du T1 2026** (≈ +10 %) : Cloud à +63 %, carnet à 462 Md$. Le titre s'envole vers son record historique de clôture (402 $, 13 mai 2026), après une hausse de plus de 150 % en 12 mois.

---

### Baisses significatives

**Octobre 2022 — Résultats du T3 2022** (≈ −9 %) : ralentissement de YouTube, ralentissement publicitaire. L'année 2022 se termine à −39 %.

**8 février 2023 — Démonstration ratée de Bard** (≈ −8 %) : une erreur factuelle dans la publicité de lancement cristallise la peur d'un Google dépassé par ChatGPT.

**Octobre 2023 — Résultats du T3 2023** (≈ −9,5 %) : croissance du Cloud décevante.

**Février 2025 — Résultats du T4 2024** (≈ −7 %) : Cloud sous les attentes et capex 2025 à 75 Md$ jugé excessif.

**Avril 2025 — Choc des droits de douane** : le titre touche ~142 $ dans la tempête des marchés.

**Mai 2025 — Témoignage d'un dirigeant d'Apple** (≈ −7 %) : il indique au tribunal que les recherches sur Safari ont baissé pour la première fois, au profit des outils d'IA.

**Fin mars 2026 — Correction macroéconomique** (−20 % depuis le sommet de février, plus bas à ~273 $) : incertitudes douanières et inquiétudes sur le capex de 175-185 Md$.

**16 juillet 2026 — Retard de Gemini 3.5 Pro révélé** (−4,4 %, à 353,81 $) : le modèle phare accuse plusieurs mois de retard.

**23 juillet 2026 — Résultats du T2 2026** (−7,1 %, à 317,69 $) : relèvement du capex à 195-205 Md$ et flux de trésorerie libre négatif.

**5 août 2026 — Départ de Jeff Dean et réorganisation de DeepMind** (jusqu'à −5,4 % en séance) : la peur d'une fuite des cerveaux s'installe.

**Septembre 2026** : le titre teste sa moyenne mobile à 200 jours (~330 $), à −20 % de son record, sur fond de prises de bénéfices et de concurrence accrue dans l'IA grand public.

---

### Événements notables de moindre ampleur

- **1er juin 2026 — Levée de 80 Md$ de fonds propres** (−2 à −3 %) : la dilution est absorbée grâce à la caution de Berkshire Hathaway.
- **2 septembre 2026 — Pas de démantèlement de l'activité ad tech** (+0,6 %) : le risque était déjà intégré dans les cours.

---

### Facteurs structurels du cours

- **Le récit IA** : de « perdant de l'IA » (2023) à « gagnant de l'IA » (fin 2025-mai 2026), puis « champion qui doute » (été 2026). C'est le premier moteur de la valorisation.
- **Le cycle d'investissement** : chaque relèvement du capex provoque une baisse à court terme ; chaque preuve de retour sur investissement (Cloud) une hausse.
- **Le risque juridique** : il a pesé de 2023 à 2025, et s'est largement dissipé avec les jugements de septembre 2025 et septembre 2026.
- **Le soutien des rachats** : disparu en 2026 — une source d'achat régulière en moins.
- **Performance** : +42 % sur un an au 2 octobre 2026, malgré un repli d'environ 15 % depuis le record de mai.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Avertissement préalable : deux BPA à ne pas confondre

- **BPA publié** : inclut les variations de valeur des participations (Anthropic en tête). En 2026, il sera artificiellement proche de **20 $**, dont plus de 8 $ de plus-values latentes au seul S1. Il n'a pas de valeur prédictive.
- **BPA normalisé** : exclut ces gains et pertes latents. C'est la mesure retenue ci-dessous, et celle qui permet de comparer Alphabet à ses pairs.

### Hypothèses de modélisation

**Croissance du secteur** :
- Publicité numérique mondiale : +8 à +10 % par an, vers ~600 Md$ annuels
- Cloud public : +25 à +30 % par an, tiré par l'IA

**Parts de marché** :
- Search : stabilité de la part de recherche, mais part croissante de l'IA conversationnelle captée par ChatGPT et Meta → croissance de Search ramenée de +17 % à +10-12 % d'ici 2028
- Cloud : gains de parts nets, soutenus par le carnet (un peu plus de 260 Md$ à reconnaître sous 24 mois)

**Hausses de prix** : nouveaux formats publicitaires dans l'AI Mode ; montée en gamme des abonnements IA (Google AI Pro/Ultra) ; prix de la capacité TPU soutenus par la pénurie.

**Pressions sur les coûts** :
- **Amortissements** : le capex de ~200 Md$ en 2026 puis ~260 Md$ en 2027 va faire bondir les dotations (serveurs amortis sur 6 ans). C'est la principale menace sur la marge 2027-2028.
- Énergie, capacité tierce, rémunération des talents IA (marché très tendu)

**Levier opérationnel** : marge opérationnelle groupe de ~34 % en 2026, sous pression vers 32-33 % en 2027, puis stabilisation grâce au Cloud.

**Coûts de financement** :
- ~100 Md$ de dette à ~4,5-5 % de coupon moyen → ~4,5 à 5 Md$ d'intérêts annuels, en partie compensés par les produits de 243 Md$ de trésorerie
- Dividende de **6,25 %** sur 16,75 Md$ d'actions de préférence (~1 Md$ par an), prioritaire sur les actionnaires ordinaires

**Dilution** :
- Émissions de juin 2026 (~1,2 % du capital) + programme de 40 Md$ au fil de l'eau (~1 %) + rémunération en actions (~28 Md$ par an) + conversion des actions de préférence en 2029
- Rachats suspendus → **nombre d'actions en hausse de ~1 à 1,5 % par an** jusqu'en 2028, à l'inverse de la décennie précédente

---

### Estimations du BPA normalisé

| Exercice | CA estimé | BPA normalisé | Croissance | P/E au cours actuel (~347 $) |
|---|---|---|---|---|
| 2024 (réalisé) | 350,0 Md$ | ~7,7 $ | — | — |
| 2025 (réalisé) | 402,8 Md$ | ~9,5 $ | +23 % | — |
| **2026E** | **~490 Md$** | **11,8 à 12,3 $** | **+25 à +29 %** | **~28-29x** |
| **2027E** | **575 à 590 Md$** | **13,8 à 15,2 $** | **+17 à +23 %** | **~23-25x** |
| **2028E** | **660 à 690 Md$** | **15,8 à 17,9 $** | **+12 à +17 %** | **~19-22x** |

*Le consensus publié (~19,8 à 20,5 $ pour 2026) inclut les plus-values du S1. Les estimations 2027 du consensus se situent entre ~14,7 et 15,2 $, et un courtier de référence vise 17,9 $ pour 2028.*

---

### Sensibilité

- **Scénario favorable** (Cloud à +50 % en 2027, marge Cloud > 35 %, Gemini 4 au niveau des meilleurs) : BPA 2028 ~19 $ → P/E 2028 ~18x au cours actuel. Le titre serait clairement sous-évalué.
- **Scénario central** : BPA 2028 ~16,8 $ → P/E 2028 ~21x. Valorisation raisonnable pour un leader à 15-20 % de croissance.
- **Scénario défavorable** (Search ralentit à +5 %, amortissements écrasent la marge, dilution accrue) : BPA 2028 ~13,5 $ → P/E 2028 ~26x. Peu de marge de sécurité.

**Conclusion** : à ~347 $, le titre se paie ~24x les bénéfices normalisés de 2027 — **un niveau comparable à ses pairs pour une croissance supérieure**. Les deux juges de paix d'ici 2028 sont la **conversion du carnet Cloud** et la **trajectoire des amortissements**. Le BPA normalisé est l'indicateur à suivre ; le BPA publié, à ignorer tant que les participations seront réévaluées.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Avantages concurrentiels et barrières à l'entrée

**1. Le seul acteur « full stack » de l'IA** : puces TPU, infrastructure, modèles et milliards d'utilisateurs sous un même toit. Résultat : un coût par requête IA plus bas que tous les concurrents qui louent des GPU. Les choix d'Anthropic (environ 5 GW de TPU), d'Apple (Gemini pour Siri) et de Meta valident cet avantage.

**2. La recherche ne meurt pas, elle se transforme** : malgré ChatGPT, Search croît plus vite en 2026 (+17 à +19 %) qu'en 2024. Les AI Overviews et l'AI Mode augmentent l'engagement, et Google contrôle toujours le moment où l'intention d'achat se forme.

### Leviers de croissance

**3. Google Cloud, nouveau moteur de profits** : +82 % de croissance, 35,6 % de marge, **514 Md$ de carnet** — plus de quatre fois le CA trimestriel du groupe. Si un peu plus de la moitié se convertit sous 24 mois, le Cloud pourrait approcher 130 à 150 Md$ de CA annuel dès 2028.

**4. Les TPU deviennent un produit** : vente directe de TPU dans les data centers des clients depuis 2026. Une ligne de revenus de type « fabricant de puces », à forte valeur, qui n'existait pas il y a deux ans.

**5. Des options gratuites** : **Waymo** (valorisé 126 Md$, ~500 000 trajets payants par semaine, objectif 1 million fin 2026), Isomorphic Labs, l'informatique quantique (Willow). Rien de tout cela n'est valorisé par le marché à 24x les bénéfices 2027.

### Surprises potentielles sur les bénéfices

**6. La baisse du coût de l'IA** : le coût des réponses IA a baissé de plus de 30 % depuis Gemini 3. Si la tendance se poursuit, la marge de Google Services peut continuer à monter malgré l'IA générative.

### Allocation du capital

**7. Des investisseurs de long terme valident le plan** : Berkshire Hathaway a injecté 10 Md$ au prix de 351,81 $ par action A en juin 2026 ; la dette centenaire a été souscrite près de 10 fois. Les marchés financiers les plus exigeants parient sur le retour sur investissement.

---

## 🐻 Scénario pessimiste (Bear Case)

### Les risques susceptibles de nuire durablement

**1. Le surinvestissement** : 200 Md$ en 2026, ~260 Md$ attendus en 2027. Le flux de trésorerie libre est devenu négatif au T2 2026, les rachats sont arrêtés, l'actionnaire est dilué. Si la demande IA ralentit ou si les prix de la capacité s'effondrent (surcapacité de l'industrie en 2028-2029), ces actifs à 6 ans de durée de vie seront sous-utilisés et les amortissements écraseront les marges.

**2. La perte de la frontière de l'IA** : Gemini 3.5 Pro n'est jamais sorti à la date promise ; Pichai a reconnu des retards en codage ; les trois co-responsables de Gemini ont quitté le groupe en 2026. Si Gemini 4 déçoit, Google deviendra un **distributeur de modèles moyens** sur une infrastructure excellente — et le Cloud servira surtout à héberger les modèles de ses concurrents.

**3. L'érosion lente de Search** : ChatGPT dépasse le milliard d'utilisateurs, Meta lance Muse, les recherches sur Safari ont baissé pour la première fois en 2025. Le partage de données imposé par le jugement Mehta aide les concurrents. Une recherche qui passe de +17 % à 0 % de croissance ferait chuter le moteur de cash du groupe.

### Compression des marges et attentes

**4. La pression sur les marges est déjà annoncée** : capacité tierce au T3, amortissements en forte hausse, énergie, talents. Le consensus a déjà abaissé ses attentes de marge Cloud pour 2027 (de ~36 % à ~33 %).

---

### Analyse pré-mortem

*Nous sommes en octobre 2029, Alphabet cote 220 $. Que s'est-il passé ?*

Gemini 4 est sorti en 2027 un cran en dessous des modèles concurrents. Les entreprises ont continué d'utiliser Google Cloud — mais pour exécuter des modèles tiers, à faible marge. En 2028, l'industrie s'est retrouvée en surcapacité : les prix de location de calcul ont chuté de moitié, et les amortissements des 450 Md$ investis en 2026-2027 ont ramené la marge opérationnelle sous 28 %. Search a ralenti à +3 % par an. Le BPA 2029 plafonne à ~13 $ et le marché, qui ne croit plus à la croissance, applique un multiple de 17x. Bilan : −37 % en trois ans.

### Les multiples actuels sont-ils trop élevés ?

À ~29x le BPA normalisé 2026 et ~24x 2027, **non** — à condition de croire à la croissance de 15-20 % par an. Le P/E publié de 17x est un trompe-l'œil (plus-values latentes) ; le rendement du flux de trésorerie libre (~1,3 % sur 12 mois, proche de zéro en 2026) est en revanche **très faible**. Le titre est raisonnablement valorisé sur les bénéfices, **cher sur le cash**.

---

### Point de vue à contre-courant

**Ce que le marché refuse de voir** : le débat se focalise sur « Google gagnera-t-il la course aux modèles ? ». C'est peut-être la mauvaise question. Avec ses TPU et son Cloud, Alphabet est en train de devenir **le fournisseur d'infrastructure des laboratoires d'IA eux-mêmes** — y compris de ses concurrents. Comme les vendeurs de pelles pendant la ruée vers l'or, Alphabet peut gagner **même s'il ne possède pas le meilleur modèle**. Le carnet de 514 Md$ le prouve déjà. Le revers de ce raisonnement : une part importante de ce carnet repose sur quelques clients d'IA eux-mêmes déficitaires et financés par le capital-risque — dont Anthropic, dans lequel Alphabet investit lui-même.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### 1. Plus-values latentes sur participations — RISQUE ÉLEVÉ (qualité des bénéfices)

Alphabet a enregistré **37,7 Md$** (T1 2026) puis **~98 Md$** (T2 2026) de gains latents sur des titres non cotés ou récemment cotés, principalement Anthropic. Ces gains sont **non monétaires** : au T2, le résultat net de 112 Md$ ne s'est traduit que par 39 Md$ de flux de trésorerie opérationnel.

**Problèmes** : les valorisations de titres non cotés reposent sur des **données de niveau 3** (dernières levées de fonds, modèles internes) ; les gains peuvent s'inverser brutalement en cas de correction des valorisations de l'IA ; ils gonflent le ROE et font paraître le titre bon marché (P/E publié de 17x).

**À surveiller** : la ventilation des gains par participation dans le 10-Q, et la sensibilité aux prochaines levées d'Anthropic.

### 2. Comptabilisation des produits et circularité — RISQUE MODÉRÉ À ÉLEVÉ

Anthropic est simultanément une **participation** (engagement d'investir jusqu'à 40 Md$) et un **client majeur** du Cloud (capacité TPU de plusieurs gigawatts). Une partie de l'argent investi par Alphabet peut revenir sous forme de chiffre d'affaires Cloud. Le même schéma existe à plus petite échelle avec Discovery Loop (financée par Google, cliente du Cloud).

**À surveiller** : la part du carnet de 514 Md$ concentrée sur quelques clients d'IA, et la solidité financière de ces clients. Un carnet n'est pas un revenu : les contrats peuvent être renégociés.

### 3. Information sectorielle — RISQUE MODÉRÉ

Une partie croissante des coûts de Google DeepMind (entraînement des modèles) est logée dans les **coûts centraux non alloués**. Les marges affichées de Google Services (41,8 %) et du Cloud (35,6 %) **ne supportent donc pas l'intégralité du coût des modèles** qu'elles utilisent. La marge réelle du Cloud est vraisemblablement inférieure à celle publiée.

### 4. Durée d'amortissement des serveurs — RISQUE MODÉRÉ

En 2023, Alphabet a allongé la durée de vie comptable de ses serveurs et équipements réseau de 4 à **6 ans**, réduisant les amortissements annuels. Avec ~200 Md$ de capex en 2026, ce choix pèse lourd : si les puces IA deviennent obsolètes en 3-4 ans (cycles annuels de nouvelles générations), les bénéfices actuels sont **surestimés** et des dépréciations seront nécessaires plus tard.

### 5. Contrats de location et engagements — RISQUE MODÉRÉ

Les data centers et la capacité tierce reposent sur des contrats de location et des **engagements d'achat non résiliables en forte hausse** (énergie sur 20 ans, capacité de calcul, puces), dont une partie significative concerne des baux non encore démarrés, donc absents du bilan.

**À surveiller** : la note sur les engagements contractuels du 10-K 2026.

### 6. Rémunération en actions et dilution — RISQUE MODÉRÉ À ÉLEVÉ

La rémunération en actions atteint **28,1 Md$** sur 12 mois (~6 % du CA). Pendant dix ans, les rachats l'ont neutralisée ; en 2026, **ils sont à zéro** et le groupe **émet** des actions (~49,6 Md$ en juin + 40 Md$ au fil de l'eau). Les actions de préférence convertibles (6,25 %) ajouteront des actions ordinaires en 2029 et leur dividende passe avant celui des actionnaires ordinaires.

### 7. Goodwill et incorporels — RISQUE FAIBLE À MODÉRÉ

La clôture de **Wiz (~32 Md$)** a fortement augmenté le goodwill, jusqu'ici modeste pour un groupe de cette taille. Le prix payé (plus de 30 fois le CA de Wiz) devra être justifié par la croissance de la sécurité cloud ; un test de dépréciation défavorable n'est pas exclu en cas de déception.

### 8. Passifs éventuels et litiges — RISQUE MODÉRÉ

- **Antitrust États-Unis** : appel en cours dans l'affaire Search (le ministère de la Justice réclame l'interdiction des paiements de distribution) ; remèdes comportementaux sur l'ad tech (septembre 2026), avec appel de Google
- **Union européenne** : amende de 2,95 Md€ (ad tech, 2025) en appel, après 4,1 Md€ (Android) et 2,4 Md€ (Shopping)
- **Actions collectives** d'actionnaires (communication sur l'IA, enchères publicitaires) et de consommateurs (vie privée)

Les provisions sont généralement constituées au moment des décisions, pas en amont.

### 9. Flux de trésorerie vs résultat — RISQUE ÉLEVÉ (lecture)

L'écart entre résultat net (gonflé par les plus-values) et flux de trésorerie libre (**−5,9 Md$** au T2) est **le plus important de l'histoire du groupe**. Il ne traduit pas une fraude mais un changement de nature : Alphabet passe d'un modèle « logiciel » léger en capital à un modèle « industriel » lourd en capital.

---

### Verdict global

**Risque comptable : MODÉRÉ.** Aucun signe de manipulation : Alphabet est audité par **Ernst & Young**, ses publications sont détaillées et les gains latents sont clairement isolés. Mais **la qualité des bénéfices publiés s'est dégradée en 2026** : plus-values latentes, circularité avec Anthropic, coûts IA non alloués, durée d'amortissement favorable. L'investisseur doit raisonner en **BPA normalisé** et en **flux de trésorerie**, jamais en BPA publié.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Sundar Pichai, classées par ordre d'importance

### Allocation du capital — le cœur du sujet

**1.** Vous investirez ~200 Md$ en 2026 et « nettement plus » en 2027. **Quel retour sur capital investi minimum** exigez-vous de ces investissements, et à quelle échéance le flux de trésorerie libre redeviendra-t-il durablement supérieur au niveau de 2025 (~73 Md$) ?

**2.** Après 33 trimestres de rachats d'actions, vous émettez désormais des actions. **Dans quelles conditions précises** reprendrez-vous les rachats ? Quelle dilution totale un actionnaire d'aujourd'hui doit-il anticiper d'ici 2029, conversion des actions de préférence comprise ?

**3.** Quelle part du carnet Cloud de 514 Md$ est concentrée sur vos **cinq premiers clients**, et quelle part provient de laboratoires d'IA eux-mêmes déficitaires ? Comment protégez-vous Alphabet en cas de défaillance ou de renégociation d'un de ces contrats ?

### Avantage concurrentiel et stratégie

**4.** Gemini 3.5 Pro n'est jamais sorti à la date annoncée et vous avez reconnu des lacunes en codage et en IA agentique. **Qu'est-ce qui n'a pas fonctionné**, et quelle garantie avez-vous que Gemini 4 sera au niveau des meilleurs modèles du marché ?

**5.** Anthropic est à la fois votre investissement, votre client et votre concurrent direct. **Comment gérez-vous ce conflit d'intérêts** — notamment dans l'allocation de capacité TPU entre Google DeepMind et Anthropic en période de pénurie ?

**6.** Vous vendez désormais des TPU directement dans les data centers de vos clients. **Ne risquez-vous pas d'armer vos concurrents** avec votre principal avantage de coût ?

**7.** Comment évoluent **le nombre de requêtes et le revenu par requête** dans Search depuis le lancement de l'AI Mode ? Quelle part des requêtes commerciales migre vers des assistants concurrents ?

### Risques

**8.** Jeff Dean, Noam Shazeer, John Jumper : les meilleurs chercheurs quittent Google. **Quel est le problème de fond** — rémunération, culture, accès au calcul ? Et pourquoi financer la start-up de Jeff Dean plutôt que de la garder en interne ?

**9.** Vos serveurs sont amortis sur 6 ans alors que les générations de puces IA se succèdent chaque année. **Envisagez-vous de raccourcir cette durée**, et quel serait l'impact sur le résultat opérationnel ?

**10.** En cas de **surcapacité de calcul** à l'échelle de l'industrie en 2028-2029, quelle part de vos coûts d'infrastructure est fixe ? Quelle baisse des prix de location de calcul votre modèle supporte-t-il ?

**11.** Si la cour d'appel impose une **interdiction des paiements de distribution** à Apple et aux fabricants Android, quelle part du trafic Search estimez-vous à risque ?

**12.** L'électricité est devenue votre principal goulot d'étranglement. **Combien de gigawatts** avez-vous sécurisés pour 2027-2028, et à quel coût moyen par rapport à vos hypothèses initiales ?

### Vision long terme et gouvernance

**13.** Waymo est valorisé 126 Md$ par des investisseurs privés. **Envisagez-vous de cristalliser cette valeur** (introduction en Bourse, scission) pour réduire l'effort de financement d'Alphabet ?

**14.** Les fondateurs détiennent environ la moitié des droits de vote. **Quel contre-pouvoir** existe-t-il si l'effort d'investissement s'avère excessif ? Envisagez-vous une clause d'extinction des actions à vote multiple ?

**15.** **Quel est le risque que vous sous-estimez le plus aujourd'hui** — et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Ce qui peut compromettre structurellement le modèle

Le modèle d'Alphabet a reposé pendant vingt ans sur une asymétrie unique : **un coût marginal quasi nul** (un lien bleu ne coûte rien à servir) et **un prix fixé par enchère**. L'IA générative casse les deux : chaque réponse coûte du calcul, et l'utilisateur obtient sa réponse **sans cliquer sur une publicité**. Alphabet est en train de transformer une rente logicielle à 40 % de marge en une **industrie lourde** à 200 Md$ de capex annuel. Les actionnaires qui ont acheté le premier modèle ne détiennent plus le même actif.

### 2. Où se concentrent les revenus — et le danger

- **Search** reste ~53 % du CA et l'essentiel des profits. Tout ralentissement durable affecte directement le financement de l'IA.
- **Le carnet Cloud** de 514 Md$ est concentré sur une poignée de laboratoires d'IA — dont Anthropic, pour un montant évoqué autour de 200 Md$ (non confirmé), soit potentiellement **près de 40 % du carnet**. Ces clients sont **déficitaires** et dépendent de levées de fonds successives. Si le capital-risque se ferme, le carnet se dégonfle — et Alphabet se retrouve avec des data centers construits pour des clients qui ne paient plus.
- **La circularité** : Alphabet investit jusqu'à 40 Md$ dans Anthropic, qui achète de la capacité à Google Cloud, ce qui fait monter la valorisation d'Anthropic, ce qui génère ~136 Md$ de plus-values latentes chez Alphabet au S1 2026. **Ce cercle peut tourner dans les deux sens.**

### 3. Pourquoi l'avantage concurrentiel est plus fragile qu'on ne le pense

- **Le moat de distribution est attaqué en justice** : les accords exclusifs sont interdits, le partage de données avec les concurrents est imposé, et le ministère de la Justice demande en appel l'interdiction pure et simple des paiements à Apple.
- **Le moat technologique fuit** : les trois co-responsables de Gemini sont partis en 2026, le modèle phare a raté trois dates de sortie, et Pichai admet un retard en codage — **le cas d'usage le plus monétisable de l'IA d'entreprise**.
- **Le moat des TPU se banalise** : en vendant ses TPU à des tiers, Google partage son avantage de coût. Amazon (Trainium) et Microsoft (Maia) développent les leurs.

### 4. Le concurrent le plus dangereux que les optimistes sous-estiment : OpenAI

Pas Microsoft, pas Meta : **OpenAI**. ChatGPT a atteint le milliard d'utilisateurs mensuels avant Gemini, il capte les requêtes à plus forte intention (recherche de produits, comparaisons, conseils), développe sa propre publicité et son commerce intégré, et n'a **aucune rente à protéger**. C'est exactement le profil de l'attaquant qui renverse un monopole : il n'a rien à perdre en cannibalisant le modèle publicitaire.

### 5. Les pires décisions d'allocation du capital

- **Avoir inventé le transformer (2017) et laissé OpenAI en tirer le premier profit** — l'erreur stratégique originelle.
- **Wiz à ~32 Md$**, soit plus de 30 fois son chiffre d'affaires, en pleine bulle de valorisation.
- **Avoir sous-dimensionné ses capacités jusqu'en 2024**, puis devoir rattraper dans l'urgence et au prix fort : électricité contractée sur 20 ans, capacité louée à des tiers, dette à 100 ans, et **réémission d'actions** à peine un an après avoir racheté près de 230 Md$ de titres entre 2022 et 2025. Une planification des capacités prise de court.

### 6. Parties liées, comptabilité, incitations

- Circularité Anthropic (participation + client + concurrent).
- Coûts de DeepMind non alloués aux segments → marges sectorielles flatteuses.
- Serveurs amortis sur 6 ans pour des puces qui se démodent en 2-3 ans.
- Fondateurs disposant d'environ la moitié des droits de vote : **aucune sanction possible** de l'actionnaire minoritaire.

### 7. Ce qui doit se vérifier pour justifier le cours actuel (~347 $)

1. Search continue de croître d'au moins 10 % par an malgré ChatGPT et Meta
2. Le carnet Cloud se convertit en revenus sans renégociation majeure
3. La marge opérationnelle reste au-dessus de 32 % malgré le doublement des amortissements
4. Gemini 4 revient au niveau des meilleurs modèles
5. La demande de calcul IA ne connaît pas de surcapacité avant 2029

**Cinq paris simultanés.** Chacun est plausible ; leur conjonction l'est beaucoup moins.

### 8. Et si la croissance déçoit de 20 à 30 % ?

Hypothèse centrale du marché : BPA 2028 ~16,8 $. Avec une croissance inférieure de 25 %, le BPA 2028 tombe vers **~14 $**. Un titre qui ne croît plus qu'à 10 % par an ne vaut plus 24x mais **18 à 20x**. Valeur implicite : **250 à 280 $**, soit **−20 à −28 %** par rapport au cours actuel — sans même envisager de scénario catastrophe.

### 9. Le scénario unique qui pourrait nuire durablement

**La « double peine » de 2028** : une surcapacité de calcul fait chuter les prix du cloud IA au moment précis où les assistants conversationnels font basculer les requêtes commerciales hors de Google. Alphabet se retrouve avec ~450 Md$ d'actifs à amortir et un moteur de cash (Search) qui ralentit. **Probabilité : 15 à 25 %** — faible mais non négligeable, car les deux risques sont **corrélés** : une IA conversationnelle très performante et bon marché est précisément ce qui produit les deux effets.

### Conclusion short

Alphabet est l'une des meilleures entreprises du monde, et ses chiffres de 2026 sont exceptionnels. Mais l'actionnaire achète aujourd'hui **une entreprise différente** de celle qu'il connaissait : plus endettée, plus diluante, dépendante de quelques clients d'IA financés par le capital-risque, et engagée dans une course aux modèles où elle a perdu ses meilleurs talents. Le P/E de 17x est un mirage comptable ; le rendement du flux de trésorerie, proche de zéro, est la réalité.`,
  },
];

export default { ...meta, modules };
