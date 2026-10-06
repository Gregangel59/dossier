// ============================================================
//  DOSSIER : FIGS, Inc. (FIGS)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "figs",                     // identifiant d'URL : /dossier/figs
  ticker: "FIGS",
  name: "FIGS, Inc.",
  exchange: "NYSE",
  sector: "Habillement médical (vente directe)",
  initials: "FIGS",                 // affiché dans la pastille
  tagline: "Marque premium de tenues médicales vendues en direct aux soignants, sans dette et de nouveau en forte croissance.",
  riskScore: 70,                    // score du rapport de risque (ou null)
  riskLabel: "Risque faible",
  // Détail selon la grille de notation v1 (risk-grid.js)
  riskGrid: { version: 1, valorisation: 45, sante: 81, croissance: 87 },
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "figs.html",
  updated: "2026-10",               // période des données
  published: "2026-10-06",          // date exacte de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

FIGS est une **marque américaine de tenues médicales** (les « scrubs » portés à l'hôpital) fondée en 2013 à Santa Monica par **Heather Hasson** et **Trina Spear**, et cotée au NYSE depuis mai 2021. Son idée de départ tient en une phrase : les soignants portent la même tenue douze heures par jour, et personne ne leur proposait un vêtement aussi technique, confortable et soigné qu'une tenue de sport haut de gamme.

Le modèle est celui d'une **marque en vente directe (DTC)** :
- **Conception interne** des produits, fabrication confiée à des **usines sous contrat** en Asie
- **Vente en ligne** (site et application) pour l'essentiel, sans passer par les distributeurs d'uniformes
- **Prix premium** (environ deux fois le prix d'une tenue classique) et **marge brute très élevée**, autour de 67-70 % hors éléments exceptionnels
- **Communauté** : marketing centré sur les soignants, ambassadeurs, événements, présence forte sur les réseaux sociaux

En 2025, FIGS a réalisé **631,1 M$ de chiffre d'affaires** (+13,6 %) et **34,3 M$ de résultat net**. Au premier semestre 2026, la croissance a accéléré à **+28,5 %**, et la direction vise désormais **environ +20 % sur l'année**, soit près de 757 M$.

## Principaux produits et services

- **Scrubwear (82 % du CA au T2 2026)** : hauts et pantalons de soin en tissus techniques propriétaires (gamme FIONx), déclinés en nombreuses coupes et couleurs, avec des **éditions limitées** qui alimentent le réachat
- **Hors scrubwear (18 %, +40 % au T2 2026)** : sous-couches, vestes et blouses, chaussures, chaussettes de compression, vêtements de détente
- **TEAMS** : plateforme pour habiller des **établissements de santé** entiers (hôpitaux, cliniques, réseaux dentaires)
- **Community Hubs** : boutiques physiques de marque (cinq en service, quatre ouvertures prévues au second semestre 2026)

## Clients, fournisseurs, concurrents

**Clients** : plus de **3,1 millions de clients actifs** (+13,2 % sur un an au 30 juin 2026) — infirmières, médecins, dentistes, vétérinaires, étudiants en santé. Chaque client actif a dépensé **229 $** sur douze mois, un record. Côté institutions, TEAMS a signé par exemple **Bupa Dental Care**.

**Fournisseurs** : fabricants textiles et ateliers de confection sous contrat, surtout en Asie. FIGS ne possède aucune usine.

**Concurrents** : les marques historiques vendues par les distributeurs d'uniformes (**Careismatic Brands** avec Cherokee et Dickies Medical, **Barco Uniforms**, **Landau**), les marques en ligne (**Jaanuu**, **Mandala**, **Medelita**) et, de plus en plus, les **marques de sport** qui visent les soignants.

## Modalités contractuelles et de paiement

L'activité est **transactionnelle** : le client paie par carte au moment de la commande, sans engagement. Il n'y a donc presque pas de créances clients, sauf pour TEAMS où les institutions paient à terme (les créances sont passées de 6 M$ à 23 M$ au premier semestre 2026). FIGS fonctionne avec un **besoin en fonds de roulement réduit**, hors stocks.

La valeur ne vient pas de contrats mais de la **force de la marque**, de la **fréquence de réachat** et de la **marge brute**. C'est un modèle **peu gourmand en capital** : 5 M$ d'investissements au premier semestre 2026 pour près de 357 M$ de CA.

> **Note de prudence** : FIGS sort de trois années difficiles (2022-2024) après la bulle des achats liés au COVID. Le redressement de 2025-2026 est net, mais le titre reste environ 60 % sous son cours d'introduction en Bourse.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de FIGS dans la chaîne de valeur

FIGS est une **marque-conceptrice qui vend en direct**. Elle ne fabrique rien, mais contrôle les trois maillons qui créent la marge : le **design**, la **marque** et la **relation client**. En contrepartie, elle dépend entièrement de sous-traitants pour la production et reste exposée aux **droits de douane** américains.

### Amont — Matières et fabrication

- **Tissus techniques** : fils et tissus achetés auprès de producteurs spécialisés, puis développés en exclusivité (FIONx : extensible, anti-humidité, traitement antimicrobien)
- **Confection** : ateliers sous contrat, majoritairement en **Asie** (Chine historiquement, avec une diversification vers d'autres pays du Sud-Est asiatique)
- **Transport international** : fret maritime et aérien, sensible au prix du pétrole (la direction l'a cité dans ses hypothèses du T1 2026)
- **Point d'actualité** : FIGS **change de fournisseurs** en 2026. Les stocks resteront en baisse à deux chiffres au T3, et la direction affirme pouvoir tenir ses objectifs de ventes malgré tout

---

### FIGS — Conception, marque et distribution

**Conception** : équipes produit internes à Santa Monica, cadence soutenue de nouveautés (couleurs, éditions limitées, nouvelles catégories). Rachat en 2026 de **V Coterie**, marque de tenues pour le dentaire, dont la fondatrice a rejoint FIGS.

**Logistique** : centre de distribution en Californie du Sud, expédition par transporteurs colis aux États-Unis et à l'international.

**Canaux de vente** :
- **Site web et application** : canal principal
- **TEAMS** : ventes aux établissements de santé
- **Community Hubs** : boutiques de marque (Los Angeles, Philadelphie, etc.)
- **International** : 37,9 M$ au T2 2026 (+67 %), avec des ouvertures récentes en Chine et en Corée du Sud

**Marketing** : réseaux sociaux, programme d'**ambassadeurs** soignants, événements communautaires, partenariats média.

---

### Aval — Clients finaux

**Soignants individuels** : le cœur du modèle. Ils entrent par les tenues de base, puis élargissent leurs achats (sous-couches, vestes, éditions limitées). Le panier moyen atteint **127 $** au T2 2026.

**Établissements de santé (TEAMS)** : hôpitaux, cliniques, groupes dentaires. Volumes plus importants, relation plus stable, mais paiement à terme.

**Étudiants en santé** : canal d'acquisition précoce, avec l'espoir d'une fidélité sur toute la carrière.

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                      FIGS (MARQUE + DTC)            AVAL
Tissus techniques     →    Design à Santa Monica    →     Soignants (3,1 M actifs)
Ateliers en Asie      →    Centre de distribution   →     Établissements (TEAMS)
Fret mer / air        →    Site, appli, boutiques   →     International (+67 %)
(droits de douane)         (marge brute ~70 %)            (panier moyen 127 $)
\`\`\`

**Le point clé** : la marge se joue à deux endroits. En amont, sur le **coût d'achat** (fournisseurs, droits de douane, fret). En aval, sur la **capacité à vendre au prix fort** sans promotions. FIGS a amélioré les deux en 2026 : hausses de prix bien acceptées, moins de retours, et un remboursement exceptionnel de droits de douane.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

FIGS ne publie qu'**un seul segment comptable** : le résultat d'exploitation, l'EBITDA et le résultat net ne sont donc pas ventilés. L'entreprise détaille en revanche son chiffre d'affaires par **produit** et par **zone géographique**.

### Par produit

| Catégorie | 2025 | T2 2026 | Croissance T2 | Poids T2 |
|---|---|---|---|---|
| Scrubwear | 508,9 M$ (+14,3 %) | 161,2 M$ | **+26,5 %** | 82 % |
| Hors scrubwear | 122,2 M$ | 35,4 M$ | **+40,3 %** | 18 % |
| **Total** | **631,1 M$ (+13,6 %)** | **196,6 M$** | **+28,8 %** | 100 % |

**Lecture** : la catégorie historique accélère fortement (record de ventes de scrubs au T2), et les produits complémentaires progressent encore plus vite. Ils représentent un relais de croissance réel, mais encore minoritaire.

### Par zone géographique

| Zone | 2025 | T2 2026 | Croissance T2 | Poids T2 |
|---|---|---|---|---|
| États-Unis | 527,5 M$ (+11,2 %) | 158,7 M$ | +22,2 % | 81 % |
| Reste du monde | 103,6 M$ (+27,5 %) | 37,9 M$ | **+67,0 %** | 19 % |

**Lecture** : l'international devient le moteur le plus dynamique (+55 % au T4 2025, +50 % au T1 2026, +67 % au T2 2026). Selon la direction, l'essentiel vient des **marchés existants** (Canada de nouveau en croissance, Mexique en très forte hausse, Moyen-Orient, Amérique latine, Europe), et non des seuls nouveaux pays.

---

### Évolution dans le temps

| Exercice | CA | Croissance | Résultat net | Marge EBITDA aj. |
|---|---|---|---|---|
| 2021 | 419,6 M$ | ~+59 % (COVID) | légère perte (options de l'IPO) | élevée |
| 2023 | 545,6 M$ | ~+7 % | ~22 M$ | en baisse |
| 2024 | 555,6 M$ | +1,8 % | 2,7 M$ | point bas |
| 2025 | 631,1 M$ | +13,6 % | 34,3 M$ | 11,8 % |
| 2026E (objectif) | ~757 M$ | ~+20 % | — | 14,8-15,0 % |

**Pourquoi ce profil ?** Après l'euphorie de 2020-2021, la demande s'est normalisée, les stocks étaient trop élevés et les promotions ont pesé sur les marges. En 2024, la croissance était quasi nulle. Le redémarrage de 2025 vient d'une **politique produit plus disciplinée** (plus de nouveautés, moins de remises), d'un **marketing plus efficace** et de l'**ouverture de nouveaux canaux** (international, TEAMS, boutiques).

---

### Indicateurs clients

| Indicateur | T2 2025 | T2 2026 | Variation |
|---|---|---|---|
| Clients actifs | 2,74 M | 3,10 M | +13,2 % |
| CA par client actif (12 mois) | 208 $ | 229 $ | +10,1 % |
| Panier moyen | 117 $ | 127 $ | +8,5 % |

**Ce qui compte** : la croissance vient **à la fois** de nouveaux clients et de clients qui dépensent davantage. Le CA par client a dépassé son record de l'époque du COVID. C'est le signe le plus solide que la marque n'est pas seulement en phase de rattrapage.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. La marque et la communauté — moat principal
FIGS a fait d'un vêtement de travail banal un **produit de marque**. Les soignants le portent, le montrent et le recommandent. Cette communauté (ambassadeurs, événements, réseaux sociaux) réduit le coût d'acquisition et rend le réachat naturel. **Preuve chiffrée** : 3,1 millions de clients actifs, un CA par client record de 229 $, et des hausses de prix passées en 2026 sans freiner les volumes.

### 2. Le pouvoir de prix — réel, prouvé en 2026
Vendre une tenue environ deux fois plus cher que la concurrence, avec une **marge brute proche de 70 %**, est rare dans l'habillement. En 2026, FIGS a relevé ses prix pour absorber les droits de douane : le panier moyen a progressé de 8,5 % et les volumes ont continué de croître. Le pouvoir de prix est donc démontré, pas seulement revendiqué.

### 3. La vente directe et les données clients — avantage de structure
En vendant en direct, FIGS garde la marge du distributeur et **connaît chacun de ses clients** : ce qu'ils achètent, quand, à quelle fréquence. Elle peut lancer une couleur en édition limitée, mesurer la réaction en quelques jours et ajuster ses commandes. Les marques historiques, vendues par des distributeurs, n'ont pas cette boucle de retour.

### 4. L'innovation produit — avantage copiable
Les tissus techniques (FIONx) et les coupes sont appréciés, mais **un tissu se copie**. Jaanuu, Mandala et les marques de sport proposent des matières comparables. L'avantage tient davantage au **rythme de nouveautés** qu'à une technologie protégée.

### 5. Les coûts de changement — faibles
Un soignant peut changer de marque à chaque achat. Seul le canal TEAMS crée une relation plus contractuelle. La fidélité doit donc être **gagnée à chaque saison**.

## Positionnement face à la concurrence

| Critère | FIGS | Marques historiques (Cherokee, Barco) | Challengers en ligne (Jaanuu, Mandala) |
|---|---|---|---|
| Prix | Premium | Entrée et milieu de gamme | Premium à intermédiaire |
| Distribution | Directe | Distributeurs, magasins d'uniformes | Directe |
| Image de marque | Très forte | Fonctionnelle | En construction |
| Marketing | Communautaire, réseaux sociaux | Classique | Réseaux sociaux |
| Échelle | 3,1 M de clients actifs | Volume élevé | Nettement plus petite |

## Pouvoir de négociation

- **Vis-à-vis des clients individuels** : **élevé** sur le prix (hausses acceptées), **faible** sur la fidélité (aucun engagement)
- **Vis-à-vis des établissements (TEAMS)** : **modéré** — les acheteurs hospitaliers négocient les prix et paient à terme
- **Vis-à-vis des fournisseurs** : **croissant** — le volume augmente et FIGS a pu changer de fournisseurs en 2026, mais elle reste dépendante d'ateliers asiatiques
- **Vis-à-vis des plateformes publicitaires** : **faible** — le coût d'acquisition dépend des réseaux sociaux et des moteurs de recherche, dont FIGS ne contrôle pas les tarifs`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — habillement de marque et uniformes (octobre 2026)

| Société | Code Bloomberg | Capitalisation (Md$) | EV/CA | EV/EBIT | P/E | Rendement div. | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|
| **FIGS** | **FIGS US** | **~2,25** | **~2,7x** | **~33x** | **~41x (TTM)** | **0 %** | **~6 %** |
| Lululemon | LULU US | ~11-12 | ~1,0x | ~6x | ~8-9x | 0 % | ~35 % |
| On Holding | ONON US | ~13-15 | ~3x | ~25x | ~30x | 0 % | ~15 % |
| Levi Strauss | LEVI US | ~8 | ~1,3x | ~11x | ~12x | ~2,5 % | ~17 % |
| Cintas (uniformes) | CTAS US | ~80 | ~7x | ~30x | ~42x | ~0,9 % | ~37 % |
| Careismatic Brands | Non coté | — | — | — | — | — | — |
| Jaanuu / Mandala | Non cotés | — | — | — | — | — | — |

*Ordres de grandeur établis à partir des cours et publications disponibles début octobre 2026, à vérifier sur Bloomberg avant toute décision. Le ROE moyen de FIGS est pénalisé par les années 2022-2024 de faible rentabilité.*

---

### Analyse comparative

**FIGS — une prime de croissance dans un secteur déprimé**
FIGS se paie **~41 fois ses bénéfices des douze derniers mois** (et ~50 fois hors remboursement exceptionnel de droits de douane), quand les grandes marques d'habillement cotent souvent entre 8 et 15 fois. Cette prime reflète une croissance de près de 30 % qu'aucun de ces pairs n'affiche aujourd'hui. Le consensus des analystes est à l'achat modéré, avec un objectif moyen d'environ **18,6 $** contre 13,52 $ le 2 octobre, mais des voix discordantes jugent le titre surévalué.

**Lululemon — l'avertissement**
Lululemon montre ce qui arrive à une marque premium quand la croissance cale : le titre a perdu environ 40 % en 2026, change de directeur général et cote moins de 10 fois ses bénéfices. Pour FIGS, c'est un rappel que **le marché ne paie la prime qu'aussi longtemps que la croissance dure**.

**Cintas — l'autre façon de vendre des uniformes**
Cintas loue et entretient des uniformes pour les entreprises, dont des établissements de santé. Son modèle à contrats récurrents justifie une valorisation élevée. FIGS ne lui ressemble que sur le canal TEAMS.

**Careismatic Brands — le géant du volume, fragilisé**
Propriétaire de Cherokee et Dickies Medical, Careismatic domine en volume via les distributeurs. Le groupe a traversé une restructuration en 2024. Il fixe un **plafond de prix** pour une large partie du marché.

**Jaanuu, Mandala, Medelita — les challengers directs**
Ils copient le modèle de FIGS : vente en ligne, design soigné, réseaux sociaux. Mandala se positionne sur un prix plus bas, Jaanuu sur le style. Ils ne menacent pas l'échelle de FIGS, mais **limitent sa liberté sur les prix**.

---

### Le ratio qui compte : la prime est-elle méritée ?
À croissance égale, FIGS mérite une prime sur des marques qui stagnent. La vraie question est la **durée** : si la croissance retombe vers +10 % en 2027 (le rythme implicite du T4 2026), un P/E de 35 à 40 fois devient difficile à défendre face à des pairs à 10-15 fois.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 6 août 2026)

### Chiffre d'affaires et bénéfices par rapport au consensus

| Indicateur | T2 2026 | T2 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | **196,6 M$** | 152,6 M$ | 186,1 M$ | **+5,6 %** |
| Croissance a/a | **+28,8 %** | +5,8 % | ~+22 % | Dépassé |
| BPA dilué (GAAP) | **0,15 $** | 0,04 $ | 0,07 $ | **Plus du double** |
| Résultat net | 28,4 M$ | 7,1 M$ | — | x4 |
| Marge EBITDA ajustée | **18,6 %** | 12,9 % | — | +570 pb |

**Lecture** : un trimestre **nettement supérieur aux attentes**, le troisième d'affilée au-dessus de +25 %. Il faut cependant isoler un élément exceptionnel : **15,4 M$ de remboursements de droits de douane** (taxes « IEEPA » annulées), qui gonflent la marge brute de 780 pb. Hors cet élément, le BPA ajusté ressort autour de 0,10-0,11 $, toujours bien au-dessus du consensus.

---

### Moteurs par segment

- **Scrubwear** : +26,5 %, meilleur trimestre de son histoire en volume
- **Hors scrubwear** : +40,3 %, porté par les sous-couches, vestes et éditions limitées
- **États-Unis** : +22,2 % ; **international** : +67,0 %
- **TEAMS** et **Community Hubs** : records, avec de nouveaux clients institutionnels et des ventes en hausse dans les boutiques existantes
- **Accélération** : la croissance passe de +28,0 % au T1 à +28,8 % au T2, mais la prévision implique **+20 % au T3 et +10 % au T4**

---

### Évolution des marges

- **Marge brute** : 75,2 % (+820 pb), dont +780 pb liés aux remboursements de droits de douane. Le reste vient des **hausses de prix**, de la baisse des retours et des gains d'efficacité, compensés en partie par les nouveaux droits de douane
- **Charges d'exploitation** : 57,3 % du CA contre 60,5 % un an plus tôt, grâce à l'effet d'échelle et à une **rémunération en actions en baisse**
- **Marge d'exploitation** : 17,9 % contre 6,5 %

---

### Prévisions et ton de la direction

| Objectif 2026 | Février | Mai | Août |
|---|---|---|---|
| Croissance du CA | +10 à 12 % | +14 à 16 % | **~+20 %** |
| Marge EBITDA ajustée | 12,7 à 12,9 % | — | **14,8 à 15,0 %** |

Le ton est **offensif** : la directrice financière indique que la prévision intègre la surperformance du T2 **et** relève les attentes du second semestre. Le conseil a ajouté **100 M$** au programme de rachat d'actions.

---

### Signaux d'alerte dans le bilan

- **Trésorerie** : 108,5 M$ de liquidités + 187,8 M$ de placements à court terme, **aucune dette**
- **Flux de trésorerie libre** : +38,6 M$ au premier semestre, contre −5,6 M$ un an plus tôt. Attention : il a été aidé par la **baisse des stocks** (+8,4 M$) et la hausse des charges à payer (+19 M$)
- **Stocks** : 119,6 M$, en baisse. La direction prévient qu'ils resteront **en recul à deux chiffres au T3** à cause des changements de fournisseurs, ce qui crée un risque de ruptures
- **Créances clients** : de 6,3 M$ à 23,3 M$, à surveiller (croissance de TEAMS, remboursement de droits de douane à recevoir)
- **Rachats d'actions** : 32,8 M$ au premier semestre, mais le nombre d'actions diluées (195 M) reste nettement supérieur au nombre d'actions de base (166 M)

---

### Réaction du marché

Le titre a bondi de **+27 % le 7 août** (clôture à 14,26 $). Il avait chuté de 26 % en mai malgré un T1 au-dessus des attentes : le marché avait alors jugé la prévision trop prudente. Cette fois, la **révision à la hausse** a fait la différence. Le titre est depuis redescendu vers 13,5 $ : le marché attend la confirmation au T3 (publication le **5 novembre 2026**) et se méfie du ralentissement annoncé au T4.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques

### Ton général — évolution 2024-2026

**2024 (année de transition)** : ton **défensif**. Croissance quasi nulle, promotions à réduire, stocks à assainir. La direction parlait de « discipline » et de « base saine pour l'avenir », sans promettre de chiffres ambitieux.

**Mi-2025 (droits de douane)** : ton **prudent mais combatif**. Face aux nouveaux droits de douane, Trina Spear présentait les hausses de prix comme un « dernier recours », après les négociations avec les fournisseurs et les économies de coûts. La directrice financière chiffrait l'impact à 150 pb en année pleine.

**Fin 2025 (retour de la croissance)** : ton **enthousiaste**. Le T4 est qualifié de « remarquable » : plus de 200 M$ de CA en un trimestre pour la première fois, la croissance la plus forte depuis plus de quatre ans.

**2026 (accélération)** : ton **confiant, voire triomphant**. Au T2, la direction souligne « trois trimestres d'affilée au-dessus de +25 % » et affirme que FIGS ne sert encore qu'« un tout petit pourcentage » des soignants dans le monde.

---

### Priorités répétées de la direction

**1. Le produit d'abord** — Le discours revient sans cesse à l'« innovation produit » : nouvelles couleurs, éditions limitées, catégories adjacentes. C'est présenté comme la source du réachat.

**2. Les trois relais de croissance** — **International**, **TEAMS** et **Community Hubs** sont cités à chaque conférence comme les « opportunités d'expansion de marché ». Les trois ont atteint des records au T2 2026.

**3. La communauté** — Événements pour les soignants, défense de leurs intérêts, partenariats : la direction insiste sur le lien émotionnel avec ses clients.

**4. Croissance et rentabilité ensemble** — Nouveauté de 2026 : la directrice financière insiste sur la capacité à « combiner croissance et rentabilité », chiffres de marge à l'appui.

**5. Le retour aux actionnaires** — Le rachat d'actions est présenté comme un moyen de **compenser la dilution** liée à la rémunération en actions.

---

### Analyse du sentiment

- **Confiance** : très élevée et en hausse depuis fin 2025. Elle s'appuie sur des chiffres réels : prévision relevée deux fois en 2026 (mai et août), objectifs dépassés à chaque trimestre.
- **Transparence** : bonne sur les éléments exceptionnels. Les remboursements de droits de douane sont isolés et exclus de l'EBITDA ajusté pour la part qui concerne 2025.
- **Prudence sur les stocks** : la direction reconnaît des **changements de fournisseurs** et des stocks en baisse au T3. C'est le point de vigilance qu'elle a elle-même soulevé.
- **Ce qui n'est pas dit** : peu de précisions sur le ralentissement attendu au T4 (+10 % environ), qui s'explique en partie par une base de comparaison très élevée (T4 2025 à +33 %).

> **À lire entre les lignes** : la direction a pris l'habitude de prévoir prudemment puis de dépasser. Le marché l'a compris : en mai, une prévision jugée trop basse a fait chuter le titre malgré de bons chiffres. La crédibilité est forte, mais **les attentes montent à chaque trimestre**.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation des dirigeants

### Trina Spear — cofondatrice et directrice générale

**Parcours** : passée par la banque d'affaires (Citigroup) et le capital-investissement (Blackstone), diplômée de Harvard Business School. Cofondatrice de FIGS en 2013, codirectrice générale puis seule directrice générale.

**Bilan chiffré** :
- A construit FIGS de zéro jusqu'à **631 M$ de CA** en 2025 et 3,1 millions de clients actifs
- A mené l'**introduction en Bourse** de 2021 (22 $ par action), puis subi la chute de 2022-2024
- A piloté le **redressement** : croissance revenue de +1,8 % (2024) à +28,8 % (T2 2026), résultat net de 2,7 M$ à 34,3 M$ en 2025
- A traversé le choc des droits de douane de 2025 en préservant une marge brute proche de 70 %

### Heather Hasson — cofondatrice, présidente exécutive

À l'origine de l'idée (une tenue médicale aussi soignée qu'un vêtement de sport). Elle a laissé la direction opérationnelle à Trina Spear et se concentre sur la marque, le produit et la stratégie au sein du conseil.

### Sarah Oughtred — directrice financière

Chargée du pilotage des marges, des prévisions et de l'allocation du capital. Elle a vendu environ 100 000 actions en août 2025 à 6,19 $, juste avant le rebond. Cette vente modeste relève de la gestion personnelle, mais le calendrier est notable.

---

### Ancienneté et intérêts financiers

- **Ancienneté** : les deux cofondatrices dirigent l'entreprise depuis **treize ans**. Stabilité rare à ce stade de développement.
- **Participation** : les initiés détiennent environ **29 % du capital**. Les fondatrices contrôlent les **actions de classe B à 20 voix**, qui représentent environ **51 % des droits de vote** pour environ 5 % du capital.
- **Rémunération** : des attributions d'options très importantes ont été accordées aux fondatrices lors de l'introduction en Bourse. Elles expliquent en partie l'écart entre actions de base (166 M) et actions diluées (195 M).

---

### Historique de l'allocation du capital

| Indicateur | 2022 | 2023 | 2024 | 2025 | 12 mois à juin 2026 |
|---|---|---|---|---|---|
| CA (M$) | ~506 | 546 | 556 | 631 | ~710 |
| Résultat net (M$) | ~21 | ~22 | 2,7 | 34,3 | ~62 |
| ROE | ~5 % | ~5 % | <1 % | ~8 % | ~14 % |
| Dette | 0 | 0 | 0 | 0 | 0 |

**Lecture** : allocation **prudente** — pas de dette, pas d'acquisition coûteuse (seulement V Coterie, de petite taille), investissements faibles. Le capital a surtout servi au fonds de roulement et aux **rachats d'actions** (programme relevé de 100 M$ en août 2026). Le ROIC, très élevé une fois la trésorerie exclue, est **remonté avec la rentabilité**. Le principal point faible reste le coût de la **rémunération en actions**, qui a longtemps pesé sur le résultat.

---

### Signaux d'alerte

- **Contrôle des fondatrices** : avec les actions à 20 voix, les actionnaires minoritaires ne peuvent pas peser sur les grandes décisions. FIGS a d'ailleurs rejeté début 2025 une offre de rachat non sollicitée.
- **Dilution** : environ 29 millions d'actions potentielles en plus des actions existantes.
- **Comportement promotionnel** : discours très enthousiaste, mais adossé à des prévisions relevées puis dépassées. Pas de signal inquiétant à ce jour.
- **Parties liées** : aucune transaction significative identifiée.

### Fondatrices ou gestionnaires ?

FIGS est une **entreprise dirigée par ses fondatrices**. À ce stade (marque en expansion internationale, nouveaux canaux), c'est un atout : vision de long terme, connaissance intime du client, cohérence de la marque. Le revers est une **gouvernance verrouillée** et une dépendance à deux personnes.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant fait bouger le cours

### Contexte
Introduit en Bourse à **22 $** en mai 2021, le titre a culminé autour de **50 $** la même année, puis est tombé sous **5 $** en 2024. Il cote **13,52 $** le 2 octobre 2026. Un investisseur entré à l'introduction a perdu environ 63 %. Le titre est **très volatil** : plus de 30 séances à plus de 5 % de variation sur les douze derniers mois.

### Hausses significatives (plus de 5 %)

**Mai à novembre 2021 — l'euphorie de l'introduction** : premier jour en forte hausse, puis envolée vers 50 $ portée par la croissance de l'époque COVID et l'enthousiasme pour les marques en vente directe.

**Fin 2025 — le retour de la croissance** : le T3 2025 (+8,2 %, meilleure croissance en deux ans, prévision relevée) relance le titre, qui passe d'environ 7 $ en octobre à plus de 11 $ en fin d'année.

**27 février 2026 — un T4 exceptionnel** : CA de 201,9 M$ (+33 %), prévision 2026 supérieure aux attentes, relèvements de recommandations. Le titre gagne jusqu'à **21,5 %** en séance et atteint son plus haut sur un an en mars (17,48 $).

**7 août 2026 — le T2 et la prévision relevée** : **+27 %** en une séance (clôture à 14,26 $) après un T2 nettement au-dessus du consensus, une prévision portée à ~+20 % et 100 M$ de rachats supplémentaires.

---

### Baisses significatives (plus de 5 %)

**2022 — la fin de l'effet COVID** : ralentissement de la croissance, stocks trop élevés, révisions à la baisse. Le titre perd l'essentiel de sa valeur au fil de l'année.

**2024 — l'année blanche** : croissance quasi nulle, marges en recul, abaissements des prévisions. Le titre touche environ 4,30 $.

**Avril 2025 — le choc des droits de douane** : FIGS fabrique en Asie. L'annonce des droits de douane américains fait chuter le titre d'environ un tiers.

**4 mai 2026 — tensions géopolitiques** : −8,1 % sur la flambée du pétrole, qui renchérit le fret et menace le pouvoir d'achat des consommateurs.

**8 mai 2026 — un bon T1 mal reçu** : **−26 %** malgré une croissance de 28 % et un bénéfice au-dessus du consensus. Le marché a sanctionné une prévision annuelle jugée prudente (+14 à 16 %), un flux de trésorerie négatif au trimestre et un P/E alors supérieur à 70 fois.

**Septembre 2026 — consolidation** : le titre reflue vers 12-13 $ après le pic d'août, dans un marché inquiet pour la consommation.

---

### Facteurs structurels

- **Sensibilité aux attentes** : le titre réagit surtout à l'**écart entre la prévision et ce que le marché espérait**, plus qu'aux résultats eux-mêmes
- **Droits de douane et fret** : toute annonce commerciale ou hausse du pétrole pèse sur le titre
- **Consommation américaine** : même si les soignants doivent s'habiller, un achat premium reste reportable
- **Rachats d'actions** : programme relevé, soutien potentiel du cours
- **Faible flottant contrôlé** : les fondatrices et les initiés détiennent une part importante du capital, ce qui amplifie les mouvements`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Hypothèses de modélisation

**Croissance du secteur** : le marché des tenues médicales croît modestement, au rythme des effectifs de soignants (+3 à 5 % par an). La croissance de FIGS vient donc surtout de **gains de parts de marché**.

**Parts de marché** : poursuite des gains sur les marques historiques, portée par l'international (+40 à 60 % par an sur une base encore petite), TEAMS et les boutiques.

**Hausses de prix** : environ +3 à 5 % par an, après les hausses de 2026 (le panier moyen a progressé de 8,5 % au T2).

**Pressions sur les coûts** : droits de douane toujours en vigueur (hors ceux qui ont été annulés), fret, changements de fournisseurs. La marge brute normalisée est supposée autour de **68-69 %**, hors remboursements exceptionnels.

**Levier opérationnel** : les charges fixes croissent moins vite que le CA. Objectif de marge EBITDA ajustée de 14,8 à 15,0 % en 2026, supposée progresser vers 15,5 % en 2027 et 16 % en 2028.

**Coûts de financement** : aucun. La trésorerie (~296 M$) **rapporte des intérêts** (environ 8 M$ par an).

**Dilution** : rémunération en actions d'environ 25 M$ par an, compensée en partie par les rachats. Hypothèse : environ 190 à 195 M d'actions diluées.

---

### Trajectoire du chiffre d'affaires

| Exercice | CA | Croissance |
|---|---|---|
| 2025 (réalisé) | 631,1 M$ | +13,6 % |
| 2026E | ~757 M$ | ~+20 % |
| 2027E | ~830-850 M$ | +10 à 12 % |
| 2028E | ~910-940 M$ | +9 à 11 % |

---

### Estimations du BPA

| Exercice | BPA dilué estimé | Croissance | P/E au cours de 13,52 $ |
|---|---|---|---|
| 2024 (réalisé) | 0,02 $ | — | — |
| 2025 (réalisé) | **0,19 $** | x10 | — |
| **2026E** | **0,34-0,38 $** | **~+90 %** | **~38x** |
| **2027E** | **0,38-0,44 $** | **~+12 %** | **~33x** |
| **2028E** | **0,44-0,52 $** | **~+18 %** | **~28x** |

*Le BPA 2026 comprend environ 0,06 $ de remboursements exceptionnels de droits de douane. Hors cet élément, il se situerait autour de 0,30 $. La croissance 2027 paraît faible pour cette raison.*

---

### Sensibilité

- **Scénario haussier** (croissance durable à +15 %, marge EBITDA vers 17 %) : BPA 2028 vers **0,60 $**, soit ~23 fois le cours actuel — le titre paraîtrait alors raisonnablement valorisé
- **Scénario de base** (croissance qui revient vers +10 %, marge vers 16 %) : BPA 2028 vers **0,48 $**, ~28 fois — valorisation exigeante mais cohérente avec une marque de qualité
- **Scénario pessimiste** (croissance de 3 à 5 %, retour des promotions, droits de douane en hausse) : BPA 2028 vers **0,30 $**, ~45 fois — le titre serait nettement trop cher

**Conclusion** : la thèse repose sur la **durée de la croissance** après 2026. Le juge de paix sera la prévision 2027, attendue en février : un objectif de croissance à deux chiffres et une marge en progression valideraient la trajectoire centrale.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (bull case)

### Leviers de création de valeur

**1. Une marque qui a prouvé son pouvoir de prix** : FIGS a augmenté ses prix en 2026 et vendu davantage. Le CA par client (229 $) dépasse le record de l'époque COVID. Dans l'habillement, cette combinaison est rare et signale une **marque forte**, pas une mode passagère.

**2. Un marché immense encore peu pénétré** : avec 3,1 millions de clients actifs, FIGS ne touche qu'une petite partie des dizaines de millions de soignants dans le monde. L'**international** (+67 %) n'en est qu'au début, et le canal **TEAMS** ouvre l'accès aux grands employeurs de santé.

**3. Un levier opérationnel visible** : la marge EBITDA ajustée passe de 11,8 % (2025) à près de 15 % (2026), avec 18,6 % au T2. Chaque point de croissance supplémentaire se transforme en bénéfice, car les coûts fixes sont déjà en place.

**4. Un bilan de forteresse** : près de **300 M$ de trésorerie**, aucune dette, un flux de trésorerie positif. FIGS peut investir, racheter ses actions et traverser un ralentissement sans dépendre des marchés financiers.

**5. Des surprises de bénéfices répétées** : quatre trimestres consécutifs au-dessus du consensus, prévision relevée deux fois en 2026. La direction prévoit prudemment et livre davantage.

**6. Une demande peu cyclique** : les soignants doivent porter une tenue de travail. Les effectifs de santé progressent avec le vieillissement de la population, quelle que soit la conjoncture.

---

## 🐻 Scénario pessimiste (bear case)

### Risques susceptibles de nuire durablement

**1. La normalisation de la croissance** : la prévision implique **+10 % au T4 2026**. Si 2027 revient à un rythme de 5 à 10 %, le marché pourrait de nouveau traiter FIGS comme une marque mature, comme Lululemon aujourd'hui.

**2. La compression des marges** : la marge du T2 est flattée par un remboursement exceptionnel. Les droits de douane restants, le fret, les changements de fournisseurs et la concurrence peuvent ramener la marge brute vers 65 %.

**3. Des attentes trop élevées** : à ~37 fois les bénéfices des douze prochains mois, le titre intègre une croissance soutenue sur plusieurs années. En mai 2026, une prévision jugée « seulement » bonne a fait chuter le titre de 26 % en une séance.

### Analyse pré-mortem
Que se serait-il passé si FIGS valait 7 $ dans deux ans ? Scénario : la croissance retombe à +5 % en 2027 une fois l'effet des nouveautés et de l'international dilué, les ruptures de stock liées aux changements de fournisseurs font perdre des ventes, les promotions reviennent pour écouler la marchandise, la marge EBITDA recule vers 10 %, et le P/E se comprime vers 25 fois un BPA de 0,28 $.

### Les multiples sont-ils trop élevés ?
Oui au regard des pairs (8 à 15 fois pour les grandes marques d'habillement), non au regard de la croissance actuelle. Le PEG (P/E futur rapporté à la croissance attendue du BPA) proche de 1 n'est acceptable que si la croissance tient **au-delà de 2026**.

### Point de vue à contre-courant
**Ce que le marché ne voit pas** : on regarde FIGS comme un titre de consommation volatil, alors que c'est de plus en plus une **entreprise d'équipement professionnel** à forte récurrence. Un soignant renouvelle ses tenues chaque année, comme un artisan ses outils. Si le marché finit par valoriser cette récurrence plutôt que le bruit trimestriel, la prime actuelle paraîtra modeste. À l'inverse, si les clients achètent surtout pour la nouveauté et la mode, la récurrence est plus fragile qu'elle n'en a l'air.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — signaux d'alerte comptables

### Comptabilisation des produits — RISQUE FAIBLE À MODÉRÉ
Les ventes en ligne sont comptabilisées à l'expédition, nettes d'une **provision pour retours** (4,1 M$ au 30 juin 2026). Le risque est limité. Deux points méritent l'attention : la **provision pour retours** (une sous-estimation flatterait le CA) et les **cartes cadeaux** (12,5 M$ de passif), comptabilisées en chiffre d'affaires à leur utilisation.

### Éléments exceptionnels — RISQUE MODÉRÉ
Au T2 2026, FIGS a comptabilisé **15,4 M$ de remboursements de droits de douane**, alors qu'elle n'en avait encaissé que 4,5 M$. La direction a jugé le recouvrement du solde « probable ». C'est un **jugement comptable** : si les remboursements tardent ou sont contestés, une correction serait possible. Par ailleurs, la part de ces remboursements liée à 2026 (7,5 M$) **reste incluse dans l'EBITDA ajusté**, ce qui le flatte légèrement.

**À surveiller** : l'encaissement effectif des remboursements au T3 et au T4, et la baisse de 5,1 M$ de la valeur des stocks liée aux droits de douane capitalisés.

### Information sectorielle — RISQUE FAIBLE
Un seul segment est publié. C'est cohérent avec le modèle, mais cela empêche de mesurer la **rentabilité de l'international, de TEAMS et des boutiques**, qui pourraient être moins rentables que le cœur de métier.

### Contrats de location — RISQUE FAIBLE
57,7 M$ de dettes locatives (siège, centre logistique, boutiques), correctement inscrites au bilan. Elles augmenteront avec les ouvertures de Community Hubs.

### Parties liées — RISQUE FAIBLE
Aucune transaction significative identifiée. La gouvernance est néanmoins **concentrée** : les fondatrices détiennent environ 51 % des votes grâce aux actions à 20 voix.

### Engagements conditionnels — RISQUE MODÉRÉ
L'EBITDA ajusté exclut des « frais liés à des litiges hors du cours normal des affaires ». FIGS a connu des contentieux (publicité comparative avec un concurrent, action d'investisseurs après l'introduction en Bourse). Les montants récents semblent limités, mais la catégorie existe.

### Rémunération en actions — RISQUE MODÉRÉ À ÉLEVÉ
C'est le principal point de vigilance :
- **Dilution potentielle** : 195,1 M d'actions diluées contre 166,5 M d'actions de base au T2 2026, soit environ **17 % de dilution potentielle**, liée notamment aux options accordées aux fondatrices
- **Coût** : 12,2 M$ au premier semestre 2026, en baisse, mais longtemps supérieur au résultat net
- Les **rachats d'actions** (32,8 M$ au premier semestre) servent largement à compenser cette dilution plutôt qu'à réduire le nombre d'actions

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Bilan quasi vierge d'écarts d'acquisition. L'acquisition de V Coterie est de petite taille. Une **participation de 27,7 M$** dans des titres non cotés figure au bilan, sans variation de valeur : à surveiller.

### Flux de trésorerie et résultat — RISQUE MODÉRÉ
Le flux de trésorerie libre est solide (+38,6 M$ au premier semestre 2026), mais il bénéficie de la **baisse des stocks** et de la **hausse des charges à payer**. Ces effets de fonds de roulement s'inverseront quand les stocks seront reconstitués. Au T1 2026, le flux de trésorerie libre était négatif.

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** FIGS n'a pas de dette, peu d'actifs incorporels et un modèle simple. Les points à suivre sont la **dilution liée à la rémunération en actions**, le **traitement des remboursements de droits de douane** et le **caractère temporaire** d'une partie du flux de trésorerie.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Trina Spear, classées par importance

### Stratégie et durabilité de la croissance

**1.** Votre prévision implique un ralentissement à environ +10 % au T4. **Quelle part de la croissance 2026 est durable**, et quelle part vient d'effets ponctuels (nouveautés exceptionnelles, base faible, rattrapage international) ? Quelle croissance considérez-vous comme normale à partir de 2027 ?

**2.** Le CA par client actif a dépassé son record de l'époque COVID. **Qu'est-ce qui vous garantit que ce niveau ne retombera pas** comme en 2022, lorsque la demande s'est normalisée ?

**3.** Vous êtes en train de changer de fournisseurs. **Combien de ventes estimez-vous avoir perdues** à cause des ruptures de stock au T3, et quand les stocks redeviendront-ils normaux ?

### Avantages concurrentiels

**4.** Les marques de sport et les challengers en ligne copient vos tissus et votre marketing. **Quel élément de votre avantage est réellement impossible à copier** dans cinq ans ?

**5.** Quelle est la **rentabilité de TEAMS**, de l'international et des Community Hubs comparée à votre activité en ligne aux États-Unis ? Pourquoi ne pas la publier ?

**6.** Combien de vos clients achètent **plus de deux fois par an**, et comment évolue la fidélité des clients recrutés en 2025 par rapport aux cohortes précédentes ?

### Allocation du capital

**7.** Vous détenez près de 300 M$ de trésorerie sans dette. **Quel niveau de trésorerie jugez-vous nécessaire**, et pourquoi ne pas racheter davantage d'actions ou faire des acquisitions plus ambitieuses ?

**8.** Les rachats compensent surtout la dilution. **Quel objectif de réduction nette du nombre d'actions** visez-vous, et quand la rémunération en actions passera-t-elle sous 3 % du CA ?

**9.** Quel **retour sur investissement** attendez-vous d'une Community Hub, et combien de boutiques le réseau pourrait-il compter à terme ?

### Risques

**10.** Si les remboursements de droits de douane comptabilisés au T2 n'étaient pas tous encaissés, **quel serait l'impact** sur vos résultats, et quel calendrier d'encaissement prévoyez-vous ?

**11.** Quelle part de votre production vient encore de **Chine**, et quel est votre plan si de nouveaux droits de douane frappaient vos autres pays d'approvisionnement ?

**12.** Comment réagiriez-vous à un **concurrent qui casserait les prix** pour gagner des parts de marché ? Jusqu'où êtes-vous prête à défendre vos prix ?

### Vision et gouvernance

**13.** Les actions à 20 voix vous donnent, avec Heather Hasson, la majorité des votes. **Envisagez-vous une clause d'extinction** de cette structure, et comment protégez-vous les actionnaires minoritaires ?

**14.** Dans dix ans, **quelle part de votre CA viendra de l'international** et des produits hors scrubwear ?

**15.** Quel est **le risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — démontage de l'argumentaire haussier

### 1. Une croissance qui ressemble à un pic, pas à un plateau

Les haussiers extrapolent trois trimestres à plus de 25 %. Mais la direction elle-même prévoit **+10 % au T4**. Le T4 2025 avait bondi de 33 % grâce à un Black Friday exceptionnel : la base de comparaison devient redoutable. FIGS a déjà connu ce scénario : **+40 % pendant le COVID, puis quasiment zéro en 2024**. Rien ne prouve que le cycle ne se répétera pas.

### 2. Une concentration sur une seule catégorie et un seul pays

**82 % du CA vient des tenues médicales** et **81 % des États-Unis**. Le marché américain des soignants est vaste, mais fini. Si la pénétration atteint un plafond, les relais (international, sous-couches, boutiques) sont encore trop petits pour prendre le relais. Une baisse du réachat aux États-Unis toucherait directement le cœur du modèle.

### 3. Un avantage concurrentiel plus fragile qu'il n'y paraît

La marque est forte, mais **le produit se copie** : un tissu extensible et une coupe ajustée ne sont pas protégés. Les coûts de changement sont nuls. Mandala vend moins cher, Jaanuu mise sur le style, et les grandes marques de sport ont les moyens de cibler les soignants. **Le concurrent le plus dangereux est celui que les haussiers ne regardent pas** : une grande marque de sport qui lancerait une gamme médicale, avec un budget marketing dix fois supérieur et un réseau de magasins mondial.

### 4. Des marges flattées et une rentabilité réelle plus modeste

La marge brute record de 75,2 % inclut 780 pb de **remboursements exceptionnels**. La part de ces remboursements liée à 2026 reste dans l'EBITDA ajusté. Hors éléments exceptionnels, le P/E dépasse **50 fois**. Le flux de trésorerie du premier semestre est aidé par une baisse des stocks qui va s'inverser.

### 5. L'allocation du capital et les incitations

FIGS n'a pas détruit de valeur par des acquisitions, mais elle a **dilué massivement** ses actionnaires : 195 M d'actions diluées pour 166 M d'actions de base. Les rachats servent surtout à compenser cette dilution. Les fondatrices contrôlent la majorité des votes avec environ 5 % du capital : **leurs intérêts et ceux des actionnaires minoritaires ne sont pas parfaitement alignés**. Une offre de rachat a d'ailleurs été rejetée début 2025.

### 6. Ce qui doit être vrai pour justifier le cours

À 13,52 $, il faut croire simultanément à :
- une croissance du CA à deux chiffres **jusqu'en 2028** au moins
- une marge brute maintenue au-dessus de 68 % malgré les droits de douane
- une marge EBITDA qui continue de progresser vers 16 % et au-delà
- une dilution maîtrisée

**Si la croissance déçoit de 20 à 30 %** (par exemple +7 % par an au lieu de +10 %), le BPA 2028 tomberait vers 0,35-0,38 $. Avec un P/E ramené à 25 fois, le titre vaudrait **9 à 10 $, soit 25 à 30 % de baisse**.

### Le scénario catastrophe unique
**Une rupture d'approvisionnement prolongée pendant la saison clé.** Les stocks sont déjà en baisse à deux chiffres à cause des changements de fournisseurs. Une rupture au T4 (saison du Black Friday) ferait perdre des ventes, pousserait les clients vers la concurrence et briserait la dynamique de réachat. Probabilité : **faible à modérée (10 à 20 %)**, mais l'impact sur la confiance serait sévère pour un titre aussi sensible aux attentes.

### Conclusion short
FIGS est une **bonne entreprise** : marque forte, sans dette, rentable. Mais **le titre suppose que la croissance actuelle est la nouvelle norme**, alors que l'historique de FIGS montre des cycles violents et que la direction annonce elle-même un ralentissement. La vraie question n'est pas « FIGS est-elle de qualité ? », mais « **combien de temps** durera la croissance à plus de 10 % ? ».`,
  },
];

export default { ...meta, modules };
