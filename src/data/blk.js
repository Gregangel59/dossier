// ============================================================
//  DOSSIER : BlackRock, Inc. (BLK)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "blk",                      // identifiant d'URL : /dossier/blk
  ticker: "BLK",
  name: "BlackRock, Inc.",
  exchange: "NYSE",
  sector: "Gestion d'actifs et technologie financière",
  initials: "BLK",                  // affiché dans la pastille
  tagline: "Premier gestionnaire d'actifs mondial — 15,3\u00A0T$ d'encours, plateforme Aladdin et bascule accélérée vers les marchés privés.",
  riskScore: 72,                    // score du rapport de risque (ou null)
  riskLabel: "Risque faible",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "blk.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

BlackRock est le **premier gestionnaire d'actifs mondial**, coté au NYSE, fondé en 1988 par huit associés dont Laurence Fink. Au 30 juin 2026, le groupe gère **15,3 trillions $ d'encours (AUM)** — davantage que le PIB de la zone euro — pour des clients répartis dans plus de 100 pays.

Le modèle est d'une simplicité redoutable : **prélever une commission en points de base sur des encours qui ne lui appartiennent pas**. BlackRock n'immobilise quasiment aucun capital, ne porte pas le risque de marché de ses clients, et encaisse des revenus récurrents proportionnels à la valeur des actifs qu'il administre. C'est un modèle à très fort levier opérationnel : la marge opérationnelle ajustée a atteint **45,9% au T2 2026**, son plus haut niveau en près de cinq ans.

Les revenus se décomposent en cinq flux :
- **Commissions de gestion (base fees)** : le cœur du réacteur — 5,7 milliards $ au T2 2026, prélevées quotidiennement sur la valeur liquidative des fonds
- **Commissions de surperformance** : 305 M$ au T2 2026, volatiles par nature, concentrées sur l'actif et les marchés privés
- **Services technologiques (Aladdin)** : abonnements pluriannuels, valeur contractuelle annuelle en hausse de 15%
- **Commissions de distribution** : rétrocessions liées aux réseaux de placement
- **Conseil et autres** : mandats de conseil, notamment auprès d'États et de banques centrales

## Principaux produits et services

**Gestion indicielle et ETF (iShares)** — le socle. La franchise iShares a franchi les **6 trillions $ d'encours** au T2 2026, soit un doublement en trois ans. C'est la plus grande plateforme d'ETF au monde, leader aux États-Unis comme à l'international.

**Gestion active** — actions et obligations fondamentales, et surtout la **gestion systématique**, dont l'encours a doublé à ~400 milliards $ en deux ans grâce aux moteurs de recherche propriétaires et à l'IA.

**Marchés privés** — le pivot stratégique. Après l'absorption de GIP (infrastructures), HPS (dette privée) et Preqin (données), BlackRock gérait **423,6 milliards $ d'alternatifs** fin 2025, dont ~220 milliards $ de crédit privé (~290 milliards $ en incluant la dette d'infrastructure et les CLO).

**Aladdin** — la plateforme de gestion des risques et du portefeuille, vendue en logiciel-service à plus d'un millier d'institutions financières, y compris à des concurrents directs.

**Trésorerie et actifs numériques** — fonds monétaires, et une position de tête sur les ETF crypto ainsi que le fonds tokenisé BUIDL (78,4 milliards $ d'actifs numériques fin 2025).

## Clients, fournisseurs, concurrents

**Clients** : fonds de pension, fonds souverains, assureurs (~800 milliards $ d'actifs d'assurance sur la plateforme), banques centrales, family offices, et des dizaines de millions de particuliers via les ETF. Les institutionnels représentent environ 80% des encours ; plus d'un tiers des actifs proviennent de clients domiciliés hors États-Unis et Canada.

**Fournisseurs** : fournisseurs d'indices (S&P Dow Jones, MSCI, FTSE Russell, Bloomberg) auxquels BlackRock verse des licences ; dépositaires (BNY, State Street, JPMorgan, Citi) ; teneurs de marché et participants autorisés (Jane Street, Citadel Securities, Flow Traders, Optiver) ; infrastructure technologique (Microsoft Azure pour Aladdin).

**Concurrents** : **Vanguard** et **State Street** sur l'indiciel et les ETF ; **Fidelity**, **Amundi**, **Capital Group**, **T.\u00A0Rowe Price** sur la gestion traditionnelle ; **Blackstone**, **Apollo**, **KKR**, **Ares** et **Brookfield** sur les marchés privés — un terrain où BlackRock est challenger, pas leader.

## Modalités contractuelles

Les commissions de gestion sont **prélevées à la source**, quotidiennement, sur l'actif net des fonds : aucun risque de créance, aucun délai de paiement, aucune facturation. C'est l'une des mécaniques d'encaissement les plus propres de la cote.

Les contrats **Aladdin** sont pluriannuels, avec revenus reconnus linéairement et coûts de migration élevés côté client. Les fonds de **marchés privés** immobilisent le capital des investisseurs sur 8 à 12 ans avec des commissions sur capital engagé — une visibilité bien supérieure à celle de l'indiciel, et la raison stratégique du virage engagé depuis 2024.

> **Point de vigilance structurel** : la contrepartie de ce modèle est que le chiffre d'affaires est **mécaniquement indexé sur le niveau des marchés**. Avec 55% des encours en actions, un marché baissier de 20% ampute directement la base de commissions, sans qu'aucune action du management ne puisse l'empêcher.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de BlackRock dans la chaîne de valeur

BlackRock n'a pas de chaîne d'approvisionnement physique : sa matière première est le **capital des clients**, ses intrants sont la **donnée**, l'**indice** et la **liquidité**, et son produit fini est un **véhicule d'investissement**. La position occupée est celle d'un **manufacturier et plateforme centrale** entre les détenteurs d'épargne et les marchés de capitaux.

### Amont — Intrants critiques

**Fournisseurs d'indices** (coût récurrent significatif, et point de dépendance) :
- S&P Dow Jones Indices, MSCI, FTSE Russell, Bloomberg, Nasdaq — licences payées en points de base sur les encours indexés

**Données et analytique** :
- Preqin (racheté 3,2 milliards $ en 2025, désormais internalisé), LSEG, ICE, MSCI ESG

**Dépositaires et administrateurs de fonds** :
- BNY, State Street, JPMorgan, Citi, Northern Trust — conservation des titres, calcul des valeurs liquidatives

**Infrastructure technologique** :
- Microsoft Azure (hébergement d'Aladdin), Snowflake, fournisseurs de calcul pour les moteurs systématiques et l'IA

**Liquidité et exécution** :
- Teneurs de marché et participants autorisés : Jane Street, Citadel Securities, Flow Traders, Optiver, Virtu — ce sont eux qui font vivre l'arbitrage entre le prix de l'ETF et sa valeur liquidative

---

### BlackRock — Fabrication et plateforme

**Fabrication de produits** : création et gestion de fonds indiciels, ETF, mandats institutionnels, fonds de crédit privé, véhicules d'infrastructure

**Origination de marchés privés** : GIP (infrastructures) et HPS (crédit privé) opèrent désormais une **origination conjointe**, notamment sur l'infrastructure numérique — un flux d'affaires inaccessible aux plateformes mono-stratégie

**Technologie** : Aladdin, eFront, Aladdin Wealth, Preqin — la couche logicielle qui sert à la fois le groupe et ses clients

---

### Aval — Distribution et clients finaux

**Distributeurs et prescripteurs** : Merrill Lynch, Morgan Stanley Wealth, UBS, Charles Schwab, Fidelity, Edward Jones, banques privées européennes et asiatiques, plateformes numériques et néo-courtiers

**Clients institutionnels finaux** : fonds de pension publics et d'entreprise, fonds souverains, assureurs, fondations universitaires, banques centrales

**Clients particuliers** : détenteurs d'ETF iShares, épargnants en gestion pilotée, comptes gérés séparés (SMA) via Aperio (~200 milliards $, encours quadruplé depuis le rachat) et SpiderRock

**Nouvelle branche — finance tokenisée** : BlackRock agit comme gestionnaire de réserve pour le stablecoin USDC de Circle et a déposé des dossiers pour des fonds monétaires tokenisés sur Ethereum, visant l'univers des portefeuilles numériques.

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                   BLACKROCK                    AVAL
Indices (MSCI,          Fabrication de fonds         Réseaux de distribution
S&P, FTSE)              iShares / actif / privé      (Merrill, UBS, Schwab)
Données (Preqin,        Origination GIP + HPS
LSEG, ICE)              Aladdin / eFront             Institutionnels
Dépositaires (BNY,      Gestion du risque            (pensions, assureurs,
State Street, JPM)      Trésorerie et tokenisation    fonds souverains)
Cloud (Azure)
Teneurs de marché       Commission en points          Particuliers via ETF
(Jane Street, Citadel)  de base sur les encours       et gestion pilotée
\`\`\`

**Le point névralgique** : BlackRock est simultanément **client** des fournisseurs d'indices et **concurrent potentiel** de ces derniers via l'auto-indiciation, et simultanément **fournisseur logiciel** (Aladdin) de gérants qui sont ses **concurrents commerciaux**. Cette position ambivalente est une source de pouvoir — et une cible naturelle pour les régulateurs et les procureurs.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation des encours et des revenus

### Par classe d'actifs (données T1 2026)

| Classe d'actifs | Encours | Part des encours | Part des commissions de base |
|---|---|---|---|
| Actions | 7 661 milliards $ | 55% | 48% |
| Obligataire | 3 271 milliards $ | 24% | 19% |
| Multi-actifs | ~1 250 milliards $ | ~9% | ~10% |
| Trésorerie / monétaire | ~840 milliards $ | ~6% | ~8% |
| Alternatifs et marchés privés | ~700 milliards $ | ~5% | ~15% |

**Lecture essentielle** : les actions représentent 55% des encours mais seulement 48% des commissions, tandis que les alternatifs pèsent ~5% des encours pour ~15% des commissions. **Le mix de revenus se déplace beaucoup plus vite que le mix d'encours** — c'est exactement l'objectif du plan 2030.

---

### Par ligne de revenus — croissance T2 2026 sur un an

| Ligne de revenus | Variation a/a | Commentaire |
|---|---|---|
| Commissions de gestion | +28% | Dont ~230 M$ apportés par HPS |
| Prêt de titres | +40% | Effet volumes et demande de collatéral |
| Commissions de surperformance | +224% | 305 M$ — base de comparaison faible |
| Services technologiques | +13% | Valeur contractuelle annuelle +15% |
| Commissions de distribution | +23% | Encours moyens plus élevés |
| Conseil et autres | +64% | Mandats ponctuels |
| **Total** | **+31%** | **7,084 milliards $ au T2 2026** |

---

### Par canal de collecte

Les flux nets sont le véritable indicateur de santé du modèle. Sur les douze derniers mois : **868 milliards $ de collecte nette**, dont **192 milliards $ au seul T2 2026** et **321 milliards $ sur le premier semestre** — un record absolu, plus du double du premier semestre 2025.

La croissance organique des commissions de base ressort à **10%**, soit le double de l'objectif de long terme fixé à 5% et plus. La collecte est large : ETF, marchés privés, gestion systématique, externalisation de gestion et trésorerie contribuent tous positivement.

---

### Par géographie

Plus d'un tiers des encours proviennent de clients domiciliés hors Amérique du Nord. Les États-Unis et la région EMEA ont porté la collecte en 2025 et 2026 ; l'Asie-Pacifique a connu une décollecte modeste en 2025, principalement liée au retrait d'un unique grand client institutionnel indiciel — un rappel utile de la **concentration des mandats indiciels institutionnels**.

---

### Dynamiques par segment

**iShares / ETF** : moteur principal, plus de 6 trillions $ d'encours. Croissance structurelle, mais commissions unitaires les plus faibles du groupe et sous pression permanente.

**Marchés privés** : segment prioritaire. 15 milliards $ de collecte nette au T2 2026, dont 6 milliards $ déployés en crédit privé et 5 milliards $ en infrastructures. Objectif de 400 milliards $ de levées d'ici 2030.

**Technologie** : la ligne la plus qualitative — revenus récurrents, marge élevée, décorrélés du niveau des marchés. C'est le contrepoids naturel à la sensibilité au bêta.

**Trésorerie** : très sensible aux taux et aux mouvements de trésorerie institutionnels ; contribution en points de base faible mais volumes considérables.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. L'échelle absolue — un avantage de coût structurel
À 15,3 trillions $ d'encours, le **coût marginal de gestion d'un dollar supplémentaire est proche de zéro**. Cette asymétrie permet à BlackRock de soutenir une guerre des prix sur l'indiciel que la quasi-totalité de ses concurrents ne peut pas financer. C'est le moat le plus fondamental et le plus difficile à contester — mais il est **partagé** avec Vanguard, dont la structure mutualiste est encore plus agressive sur les frais.

### 2. La liquidité d'iShares — un effet de réseau auto-renforçant
Un ETF liquide attire les volumes, les volumes resserrent les écarts achat-vente, et des écarts serrés attirent de nouveaux volumes. Pour les grands investisseurs institutionnels, le **coût total de détention** dépend davantage du spread que des frais de gestion. C'est pourquoi un ETF iShares de référence peut conserver son leadership face à un concurrent moins cher : **la liquidité est un moat que le prix seul ne casse pas**.

### 3. Aladdin — coûts de changement et cheval de Troie
Plus d'un millier d'institutions financières font tourner leur gestion des risques sur Aladdin. Migrer représente des années de travail, une refonte des processus de contrôle et un risque opérationnel majeur. Résultat : des revenus récurrents dont la **valeur contractuelle annuelle progresse de 15%**, une visibilité rare dans la gestion d'actifs, et une position d'observation privilégiée sur les flux de l'industrie.

### 4. L'origination conjointe sur les marchés privés
La combinaison GIP (infrastructures), HPS (crédit privé) et Preqin (données) crée une **capacité d'origination croisée** que les plateformes mono-stratégie ne peuvent pas répliquer. Les grands acteurs du cloud et de l'IA, qui basculent vers des modèles très capitalistiques, ont besoin simultanément de partenaires en fonds propres et en dette — précisément la combinaison désormais offerte.

### 5. La conversion des actifs d'assurance
BlackRock administre ~800 milliards $ d'actifs d'assurance. Convertir 5 à 10% de cette base en crédit privé et dette d'infrastructure fait mécaniquement monter la commission moyenne, **sans avoir à gagner un seul nouveau client**. Environ 10 milliards $ de mandats de dette d'infrastructure et de dette de qualité ont été signés au premier semestre 2026, avec des rendements visés de 150 à 350 points de base au-dessus des emprunts d'État.

### 6. Le capital de marque et l'accès institutionnel
Être le gestionnaire consulté par les banques centrales et les États en période de crise confère une légitimité que le marketing n'achète pas. Ce capital est réel — mais il est aussi ce qui expose le groupe au **risque politique**.

## Positionnement vs concurrence

| Critère | BlackRock | Vanguard | State Street | Blackstone |
|---|---|---|---|---|
| Encours | ~15,3 T$ | ~11 T$ (est.) | ~5 T$ (est.) | ~1,3 T$ |
| Structure | Cotée | Mutualiste | Cotée | Cotée |
| Agressivité tarifaire | Élevée | Extrême | Élevée | Sans objet |
| Plateforme technologique | Aladdin (leader) | Interne | Charles River | Interne |
| Marchés privés | Challenger crédible | Absente | Absente | Leader |
| Commission moyenne | Faible mais en hausse | Très faible | Faible | Très élevée |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Modéré** — sur l'indiciel, le client dicte le prix ; sur les marchés privés, la technologie et les solutions de portefeuille complètes, le rapport de force s'inverse nettement en faveur de BlackRock
- **Vis-à-vis des fournisseurs d'indices** : **Croissant** — le volume donne du poids dans la renégociation des licences, et la menace crédible de l'auto-indiciation constitue un levier permanent
- **Vis-à-vis des distributeurs** : **Élevé** — aucun réseau de distribution mondial ne peut se permettre de ne pas référencer iShares
- **Vis-à-vis des régulateurs** : **Faible** — c'est la véritable asymétrie du dossier. La taille qui fait la force commerciale fait aussi la cible réglementaire.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Gestion d'actifs mondiale (août 2026)

| Société | Code Bloomberg | Capitalisation (Mds$) | EV/CA | EV/EBIT | P/E | Rendement div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **BlackRock** | **BLK US** | **~188** | **~7x** | **~19x** | **~29x (PCGR)** | **~2,0%** | **~13%** |
| Blackstone | BX US | ~165 | ~15x | ~24x | ~35x | ~2,5% | ~25% |
| KKR | KKR US | ~105 | ~6x | ~18x | ~24x | ~0,7% | ~15% |
| Apollo | APO US | ~85 | ~3x | ~12x | ~16x | ~1,5% | ~20% |
| T.\u00A0Rowe Price | TROW US | ~25 | ~2,5x | ~8x | ~11x | ~5,0% | ~20% |
| Amundi | AMUN FP | ~15 | ~3x | ~9x | ~10x | ~6,5% | ~11% |
| Vanguard | Non coté | N/A | N/A | N/A | N/A | N/A | N/A |

*Données estimatives établies à partir des cours et publications disponibles en août 2026. Les multiples des gérants alternatifs sont fortement dépendants du traitement des commissions de surperformance et doivent être lus avec prudence. À affiner sur les dépôts réglementaires.*

---

### Analyse comparative

**BlackRock — la prime de la plateforme**
Sur le bénéfice publié en normes comptables américaines, BLK se paie ~29 fois. Mais l'écart entre résultat publié et résultat ajusté est considérable — 35,31 $ contre 48,09 $ par action en 2025 — de sorte que le multiple pertinent, sur bénéfice ajusté 2026 attendu autour de 55 $, ressort plutôt à **~21 fois**. C'est une prime nette sur les gérants traditionnels et une décote sur les gérants alternatifs. Le marché valorise BlackRock comme un **hybride** : ni pure commodité indicielle, ni pur acteur des marchés privés.

**Blackstone — le comparateur qui fait mal**
BX gère un dixième des encours de BLK mais capitalise presque autant. La raison est la **commission moyenne** : les marchés privés se facturent en centaines de points de base, l'indiciel en unités. Toute la stratégie 2030 de BlackRock consiste précisément à réduire cet écart de multiple en déplaçant son mix vers les marchés privés et la technologie.

**T.\u00A0Rowe Price et Amundi — le miroir de la commodité**
Les gérants traditionnels actifs se paient 10 à 11 fois les bénéfices avec des rendements de 5 à 6,5%. C'est le multiple que le marché accorde à un modèle **sans levier de croissance structurel**. Il rappelle brutalement ce que vaudrait BlackRock si le pivot vers les marchés privés et la technologie échouait.

**Vanguard — l'adversaire non coté**
Le concurrent le plus dangereux n'a pas d'actionnaires à rémunérer. Sa structure mutualiste lui permet de baisser les frais indéfiniment, sans jamais avoir à défendre une marge devant un marché boursier. Aucun tableau de multiples ne peut capturer cette asymétrie.

---

### Le ratio qui compte : la commission moyenne
Sur ce dossier, ni le P/E ni l'EV/EBIT ne sont les juges de paix. Le véritable indicateur est la **commission moyenne réalisée en points de base sur les encours** et sa trajectoire. Tant que la croissance organique des commissions de base (10% sur les douze derniers mois) dépasse la croissance des encours, le mix s'améliore et la prime de valorisation se justifie. Le jour où cet écart s'inverse, la thèse se dégrade — quel que soit le niveau des encours.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du deuxième trimestre 2026 — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart |
|---|---|---|---|
| Chiffre d'affaires | 7 084 M$ | 6 768 M$ | **+316 M$ ✓** |
| Croissance du CA | +31% a/a | +25,5% attendu | **Dépassement** |
| BPA ajusté | 13,91 $ | 12,55–12,70 $ | **+10,8% ✓** |
| Résultat opérationnel ajusté | 2 920 M$ | — | +~40% a/a (publié) |
| Marge opérationnelle ajustée | 45,9% | — | Plus haut en ~5 ans |
| Encours sous gestion | 15 300 Mds$ | — | **Record absolu** |

**BlackRock a dépassé le consensus sur tous les postes.** Le trimestre marque le quatrième dépassement consécutif du consensus de bénéfice par action.

---

### Facteurs clés

- **Collecte nette** : 192 milliards $ sur le trimestre, 321 milliards $ sur le semestre — un record. Sur douze mois glissants : **868 milliards $**, soit une croissance organique des commissions de base de **10%**, très au-dessus de l'objectif de 5%
- **Commissions de gestion et prêt de titres** : 5,7 milliards $, en hausse de 29%, dont environ 230 M$ apportés par HPS — donc une part significative de la croissance est **inorganique**
- **iShares** : franchissement des 6 trillions $ d'encours, doublement en trois ans
- **Gestion active** : 53 milliards $ de collecte, dont un record de 7 milliards $ sur les alternatifs liquides
- **Aladdin** : valeur contractuelle annuelle en hausse de 15%

---

### Évolution des marges

La marge opérationnelle ajustée à **45,9%** provient de deux moteurs : la hausse des commissions de gestion sur des encours moyens plus élevés, et un mix produit plus riche. Les charges ajustées progressent toutefois de **25% à 4,17 milliards $**, tirées par la rémunération des équipes et les frais généraux — la croissance des coûts reste soutenue, ce qui limite l'effet de levier futur si les revenus ralentissaient.

---

### Perspectives et guidance

- Taux d'imposition ajusté 2026 maintenu à **25%** (25,2% effectif au T2, contre 26,9% un an plus tôt)
- **Rachats d'actions relevés** : au moins 550 M$ par trimestre contre 450 M$ réalisés au T2, pour un objectif annuel de 2 milliards $
- **Retour total aux actionnaires supérieur à 5,7 milliards $ en 2026**, soit +16% sur un an, dividende trimestriel porté à 5,73 $ (+10%)
- Objectif 2030 réaffirmé : plus de 30% des revenus issus des marchés privés et de la technologie, afin d'**atténuer la sensibilité aux marchés**
- Le management revendique une conviction élevée sur la croissance des flux de trésorerie disponibles et une croissance du BPA à deux chiffres

---

### Signaux d'alerte bilan

- **Écart entre résultat publié et résultat ajusté** : 35,31 $ contre 48,09 $ par action sur 2025, soit 36% d'écart. Il provient de l'amortissement des incorporels d'acquisition (+139 M$ au T2 sur un an) et de la réévaluation des compléments de prix
- **Compléments de prix conditionnels** : 7,9 milliards $ au passif, dont la valeur suit **le cours de l'action BlackRock elle-même** — un mécanisme réflexif qui pénalise le résultat publié quand le titre monte (+560 M$ de variation au T2)
- **Écarts d'acquisition et incorporels** : 63,0 milliards $, soit **davantage que les capitaux propres du groupe** (56,7 milliards $)
- **Endettement** : 12,8 milliards $ d'emprunts obligataires long terme, aucun tirage sur la ligne de crédit, aucun papier commercial en circulation, ratio dette nette/EBITDA **inférieur à 1** contre un plafond contractuel de 3,5

---

### Réaction du marché

Le titre a progressé d'environ **4,8% en pré-ouverture** après la publication du 15 juillet 2026, prolongeant une séquence de records. Le cours évolue autour de **1 156 $ fin août 2026**, dans une fourchette de 917 à 1 220 $ sur douze mois, pour une capitalisation de ~188 milliards $. Les objectifs de cours ont été relevés (Evercore ISI à 1 260 $), la moyenne du consensus se situant vers 1 300 $. Le marché a validé le pivot vers les marchés privés — ce qui signifie aussi qu'il est désormais **dans les cours**.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — évolution 2023-2026

**2023** : Ton défensif. Le choc de taux de 2022 avait comprimé les encours et les marges de toute l'industrie. Le discours portait sur la résilience, la diversification et l'idée que BlackRock gagnerait des parts de portefeuille grâce à son offre complète.

**2024** : Bascule stratégique assumée. La clôture de GIP puis l'annonce du rachat de HPS transforment le récit : BlackRock cesse de se présenter comme un gérant indiciel diversifié pour se revendiquer **acteur majeur de l'infrastructure et du crédit privé**.

**2025** : Année de la démonstration. Collecte record de 698 milliards $ sur l'exercice, dévoilement d'un **plan 2030** chiffré — plus de 35 milliards $ de revenus, 15 milliards $ de résultat opérationnel ajusté, 280 milliards $ de capitalisation visée, 400 milliards $ de levées sur les marchés privés.

**2026** : Ton de conquête maîtrisée. Le vocabulaire employé est celui du positionnement « tout-temps », relié aux mégatendances : intelligence artificielle, infrastructure numérique, crédit privé. Le management affirme que l'intégration de GIP, HPS et Preqin **dépasse le plan initial**.

---

### Priorités répétées du management

**1. Le « volant d'inertie » des marchés privés** — L'idée centrale : origination disciplinée en infrastructures et crédit privé, alimentée par la donnée Preqin et distribuée via le réseau existant. GIP et HPS originent désormais conjointement.

**2. La conversion des actifs d'assurance** — 800 milliards $ d'actifs d'assurance sur la plateforme, avec l'objectif de convertir 5 à 10% vers les marchés privés. Environ 10 milliards $ de mandats signés au premier semestre 2026.

**3. La technologie comme amortisseur** — Aladdin est présenté non plus comme un revenu annexe mais comme le pilier qui **réduit la sensibilité du groupe au niveau des marchés**. Objectif : plus de 30% des revenus issus des marchés privés et de la technologie d'ici 2030.

**4. La gestion systématique et l'IA** — Encours systématiques doublés à ~400 milliards $ en deux ans. Le management insiste sur le fait que l'alpha produit par les moteurs propriétaires « voyage » entre plusieurs enveloppes produits.

**5. L'optimisation fiscale de portefeuille** — Aperio, dont les encours ont quadruplé à près de 200 milliards $, est érigé en moteur structurel applicable à l'ensemble des 800 milliards $ de comptes gérés et modèles.

**6. Les actifs numériques et la tokenisation** — Rôle de gestionnaire de réserve pour le stablecoin de Circle, dépôts pour des fonds monétaires tokenisés sur Ethereum. Le discours vise explicitement un univers de plusieurs milliards de portefeuilles numériques.

---

### Analyse du sentiment

- **Confiance** : Très élevée et croissante depuis 2024. Le management ne se contente plus d'annoncer, il **dépasse ses propres objectifs** — croissance organique des commissions à 10% contre 5% visés
- **Registre promotionnel** : C'est le point de vigilance. Les objectifs 2030 incluent une **cible de capitalisation boursière** (280 milliards $), ce qui est inhabituel et brouille la frontière entre pilotage opérationnel et animation du cours
- **Zones d'ombre** : le discours reste discret sur la compression des commissions unitaires sur l'indiciel, sur la dilution engendrée par les acquisitions payées en actions, et sur le contentieux antitrust en cours
- **Cohérence** : remarquable sur trois ans. Aucune révision à la baisse de guidance, aucun changement de cap

> **À lire entre les lignes** : le management vend une **transformation du mix**, pas une accélération de la collecte. C'est intellectuellement honnête — mais cela signifie que la thèse repose sur une hausse de la commission moyenne, indicateur bien plus difficile à suivre trimestre après trimestre que les encours.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Laurence Fink — Président-directeur général et cofondateur

**Bilan** : Fink dirige BlackRock depuis sa fondation en 1988. Le fait d'armes qui domine tous les autres est le rachat de **Barclays Global Investors en 2009 pour ~13,5 milliards $**, qui a apporté iShares. Cette opération, réalisée au creux de la crise financière, a transformé un gérant obligataire institutionnel en leader mondial de l'ETF. Elle reste l'une des acquisitions les mieux chronométrées de l'histoire de la finance.

Sous sa direction, les encours sont passés de quelques dizaines de milliards à **15,3 trillions $**. Le second acte est en cours : ~28 milliards $ engagés en 2024-2025 pour acquérir GIP, HPS et Preqin, et repositionner le groupe sur les marchés privés.

**Ancienneté** : 38 ans à la tête de l'entreprise. C'est un actif — connaissance intime du modèle, crédibilité auprès des clients institutionnels et des États — **et un risque** : Fink a dépassé 70 ans et la question de la succession reste ouverte, avec des départs notables au sein de la génération de dirigeants pressentie.

**Alignement** : rémunération largement en actions différées, participation personnelle significative mais minoritaire. L'alignement est réel sans être celui d'un actionnaire de contrôle.

---

### Équipe dirigeante

**Robert Kapito**, président et cofondateur, assure la continuité opérationnelle depuis l'origine. **Martin Small**, directeur financier depuis 2023, issu de la franchise iShares américaine, incarne la discipline financière du plan 2030. L'équipe a été renforcée par l'arrivée des dirigeants de GIP et HPS, qui apportent une culture de marchés privés étrangère à l'ADN historique du groupe — c'est à la fois l'intérêt et la difficulté de l'intégration.

---

### Allocation du capital — l'enjeu central

| Décision | Montant | Financement | Lecture |
|---|---|---|---|
| Barclays Global Investors (2009) | ~13,5 Mds$ | Mixte | Transformation du groupe — succès historique |
| Global Infrastructure Partners (2024) | ~12,5 Mds$ | Actions | Entrée en infrastructures, dilutive |
| HPS Investment Partners (2025) | ~12 Mds$ | Actions | Crédit privé, ~12-13x l'EBITDA de commissions |
| Preqin (2025) | ~3,2 Mds$ | Trésorerie | Données privées, complément d'Aladdin |
| Rachats d'actions 2026 | ~2 Mds$ | Trésorerie | Compense partiellement la dilution |

**Tendance** : allocation **offensive, largement payée en actions**. C'est un choix rationnel — utiliser un titre valorisé haut comme monnaie d'échange — mais il a un coût : le nombre d'actions augmente, les capitaux propres gonflent d'écarts d'acquisition, et le **rendement des capitaux propres se dilue mécaniquement**. Le ROE de BlackRock, historiquement autour de 13-14%, reste nettement inférieur à celui des gérants alternatifs.

---

### Signaux d'alerte

- **Écarts d'acquisition supérieurs aux capitaux propres** : 63,0 milliards $ contre 56,7 milliards $. Aucune dépréciation à ce jour ; la qualité des tests annuels est un point de vigilance permanent
- **Compléments de prix indexés sur le cours de l'action** : 7,9 milliards $ au passif, dont la réévaluation frappe le résultat publié quand le titre progresse
- **Cible de capitalisation boursière affichée** dans le plan 2030 — un objectif qui n'est pas du ressort du management et relève du registre promotionnel
- **Exposition politique** : la personnalisation de l'entreprise autour de son fondateur, et ses prises de position publiques successives, ont fait de BlackRock une cible dans le débat politique américain — avec des conséquences commerciales et judiciaires tangibles
- **Type de dirigeant** : **fondateur-bâtisseur** encore aux commandes après 38 ans. À ce stade de maturité du groupe, la question n'est plus la vision mais la **transmission**.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Hausses significatives (+5%)

**2021 — Euphorie post-pandémie** : marchés au plus haut, encours records, le titre atteint un sommet autour de 970 $ en novembre 2021. La mécanique est directe : quand les marchés montent, les encours montent, et les commissions avec eux.

**Janvier 2024 — Annonce du rachat de GIP** : le marché salue l'entrée en force dans l'infrastructure, une classe d'actifs à commissions élevées et capital immobilisé sur le long terme.

**Octobre 2025 — Nouveau sommet historique** : franchissement des 1 080 $, porté par la collecte et la validation progressive du pivot marchés privés.

**Janvier 2026 — Résultats annuels 2025 et plan 2030** : collecte record de 698 milliards $ sur l'exercice, dont 342 milliards $ au seul quatrième trimestre, croissance organique des commissions de base à 12% en rythme annualisé, dévoilement d'objectifs 2030 chiffrés. Catalyseur de revalorisation majeur.

**Avril 2026 — Résultats du premier trimestre** : dépassement du consensus, titre en hausse de 5,3% sur la séance, relèvements d'objectifs de cours chez Goldman Sachs et Barclays.

**15 juillet 2026 — Résultats du deuxième trimestre** : dépassement sur toute la ligne, marge à 45,9%, titre en hausse de ~4,8% en pré-ouverture, cours vers de nouveaux records.

---

### Baisses significatives (-5%)

**2022 — Le choc de taux** : la pire configuration possible pour un gérant d'actifs — actions et obligations baissent simultanément. Les encours passent sous les 8 trillions $, le titre perd plus d'un tiers de sa valeur et touche un creux autour de 500-560 $ à l'automne. **C'est le scénario de référence à garder en mémoire** : le modèle n'offre aucune protection en marché baissier généralisé.

**Mars 2023 — Crise bancaire régionale américaine** : mouvement de défiance sur l'ensemble du secteur financier, corrélation subie.

**Décembre 2024 — Annonce du rachat de HPS en actions** : réaction mitigée. Le marché apprécie la stratégie mais sanctionne la **dilution** d'une opération de 12 milliards $ entièrement payée en titres.

**Avril 2025 — Choc tarifaire** : correction généralisée des marchés actions, titre en repli d'environ 16% depuis le début de l'année, support technique testé vers 780 $.

---

### Facteurs structurels

- **Bêta aux marchés actions** : avec 55% des encours en actions, le cours est un **produit dérivé à effet de levier sur les indices mondiaux**. C'est le premier déterminant, avant toute considération d'exécution
- **Sensibilité aux taux** : les taux affectent les encours obligataires, les flux de trésorerie institutionnels et le coût du capital des opérations de marchés privés
- **Flux de collecte trimestriels** : c'est le seul indicateur véritablement propre à l'entreprise que le marché surveille chaque trimestre
- **Risque politique et judiciaire** : les procédures antitrust engagées par plusieurs procureurs généraux américains et les contentieux sur les frais constituent un facteur de volatilité spécifique
- **Retour aux actionnaires** : dividende en hausse régulière (5,73 $ par trimestre, +10%) et rachats relevés à au moins 550 M$ par trimestre — un plancher de soutien au cours`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement méthodologique
BlackRock publie deux jeux de résultats : un bénéfice **selon les normes comptables américaines (PCGR)** et un bénéfice **ajusté**, dont l'écart atteignait 36% en 2025 (35,31 $ contre 48,09 $). Les estimations ci-dessous portent sur le **bénéfice ajusté**, référence utilisée par le consensus et par le management. Elles sont indicatives et non des prévisions de précision.

### Hypothèses de modélisation

**Croissance des encours** :
- Effet marché : +5 à 7% par an en régime normal — hypothèse la plus lourde et la plus incertaine du modèle
- Croissance organique des commissions de base : objectif de 5% et plus, réalisé à 10% sur les douze derniers mois ; normalisation prudente à 6-8%
- Contribution inorganique : intégration pleine de HPS sur 2026, effet de base disparaissant en 2027

**Commission moyenne** :
- Compression structurelle de 1 à 2% par an sur l'indiciel
- Effet mix positif du basculement vers marchés privés et technologie, supérieur à la compression tant que le plan 2030 est tenu

**Levier opérationnel** :
- Marge opérationnelle ajustée de 45 à 46% — objectif de long terme fixé à 45% et plus
- Charges en hausse de ~25% sur un an au T2 2026 : la discipline de coûts sera le facteur discriminant si les revenus décélèrent

**Coûts de financement** : 12,8 milliards $ d'obligations, ~460 M$ d'intérêts annuels, dette nette/EBITDA inférieure à 1 — impact marginal sur le bénéfice

**Dilution et rachats** : émissions liées aux compléments de prix des acquisitions, partiellement compensées par 2 milliards $ de rachats annuels — effet net proche de la neutralité

---

### Estimations BPA ajusté

| Exercice | BPA ajusté | Croissance | P/E au cours actuel (~1 156 $) |
|---|---|---|---|
| 2024 (réalisé) | **~43,60 $** | — | — |
| 2025 (réalisé) | **48,09 $** | **+10%** | — |
| **2026E** | **54,00–56,00 $** | **+12-16%** | **~21x** |
| **2027E** | **60,50–64,00 $** | **+12-14%** | **~18-19x** |
| **2028E** | **67,00–72,00 $** | **+11-13%** | **~16-17x** |

---

### Sensibilité

- **Scénario optimiste** (marchés porteurs, marchés privés au-delà du plan, marge à 47%) : BPA 2028 vers 76 $ → P/E 2028 ~15x, l'objectif de capitalisation de 280 milliards $ devient atteignable
- **Scénario de base** : BPA 2028 vers 69 $ → P/E 2028 ~17x pour une croissance à deux chiffres, valorisation cohérente pour un actif de qualité
- **Scénario pessimiste** (marché actions en repli de 20% sur un exercice, décollecte, compression des commissions) : le BPA 2027 retomberait vers 48-50 $, soit un recul de ~10% par rapport à 2026 — et le multiple se comprimerait simultanément. C'est la mécanique du double effet ciseau propre aux gérants d'actifs

**Conclusion** : à ~21 fois le bénéfice ajusté 2026 pour une croissance attendue autour de 12-15% par an, la valorisation n'est ni excessive ni bon marché. Le rendement à trois ans dépend moins de l'exécution — solide et démontrée — que du **niveau des marchés actions**, variable sur laquelle ni l'analyste ni le management n'ont de prise.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels

**1. Le changement de mix, moteur de revalorisation** : L'objectif de porter à plus de 30% la part des revenus issus des marchés privés et de la technologie d'ici 2030 est la clé du dossier. Si BlackRock y parvient, la sensibilité du groupe au niveau des marchés diminue et le titre peut prétendre à un multiple plus proche de celui des gérants alternatifs.

**2. Une exécution qui dépasse ses propres objectifs** : 868 milliards $ de collecte sur douze mois, 10% de croissance organique des commissions de base contre 5% visés, marge à 45,9%. Le management a fixé des objectifs 2030 puis les a dépassés dès la première année.

**3. La conversion des actifs d'assurance** : 800 milliards $ d'actifs d'assurance déjà administrés, dont 5 à 10% peuvent basculer vers le crédit privé et la dette d'infrastructure. Une hausse de commission obtenue **sans conquête commerciale**.

**4. Aladdin, revenu non corrélé** : valeur contractuelle annuelle en hausse de 15%, coûts de changement prohibitifs, marge élevée. C'est le seul actif du groupe dont les revenus ne dépendent pas du niveau des indices.

**5. Le financement de l'infrastructure d'intelligence artificielle** : les besoins de capitaux des acteurs de l'IA et des centres de données sont colossaux, et BlackRock est l'un des rares acteurs capables d'apporter simultanément fonds propres et dette à cette échelle. Une rampe de croissance potentiellement pluri-décennale.

**6. Optionnalité sur la tokenisation** : position de gestionnaire de réserve de stablecoin, fonds monétaires tokenisés, leadership sur les ETF crypto. Faible contribution actuelle, forte valeur d'option.

**7. Retour aux actionnaires** : plus de 5,7 milliards $ prévus en 2026 (+16%), dividende +10%, rachats relevés à 550 M$ par trimestre.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents au business

**1. La dépendance au bêta est structurelle et irréductible** : 55% des encours sont en actions. Un marché baissier de 20-25% ampute mécaniquement la base de commissions, sans qu'aucune décision managériale ne puisse compenser. 2022 en a fourni la démonstration : encours sous les 8 trillions $, titre divisé par un tiers. Aucun plan stratégique n'immunise contre cela.

**2. La compression des commissions est permanente** : sur l'indiciel, la concurrence a atteint des frais nuls, voire négatifs. Vanguard, structure mutualiste sans actionnaires à rémunérer, peut baisser ses tarifs indéfiniment. Le pivot vers les marchés privés est moins une conquête qu'une **fuite en avant nécessaire**.

**3. Le risque d'intégration et le poids des écarts d'acquisition** : 63,0 milliards $ d'écarts d'acquisition et d'incorporels dépassent les 56,7 milliards $ de capitaux propres. Une déception sur GIP ou HPS déclencherait une dépréciation dont l'ampleur potentielle est considérable, même sans effet de trésorerie.

**4. Le risque juridique et politique** : treize procureurs généraux poursuivent BlackRock, State Street et Vanguard devant une juridiction fédérale texane pour entente présumée visant à réduire la production de charbon ; la requête en irrecevabilité a été **largement rejetée en 2025**. S'y ajoutent des contentieux sur les frais et les obligations fiduciaires, ainsi que le débat récurrent sur le pouvoir de vote concentré des trois grands gérants indiciels.

### Analyse pré-mortem
Que se passerait-il si BlackRock cotait 800 $ dans trois ans ? Scénario : un marché actions en repli durable ramène les encours vers 13 trillions $, la collecte se tarit, les marchés privés déçoivent sur les levées et le déploiement, une dépréciation d'écarts d'acquisition intervient sur l'une des acquisitions de 2024-2025, et le multiple se comprime de 21 à 15 fois un bénéfice lui-même en baisse. La combinaison est parfaitement plausible — elle s'est produite en 2022.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le récit dominant présente BlackRock comme une entreprise en cours de transformation vers les marchés privés. Or ceux-ci représentent encore **~5% des encours**, pour environ 15% des commissions. Autrement dit, l'essentiel du compte de résultat reste adossé à la collecte indicielle et au niveau des indices. Le marché paie aujourd'hui une prime pour une transformation dont l'ampleur reste, en valeur absolue, encore modeste. La question n'est pas de savoir si la direction prise est la bonne — elle l'est — mais si le calendrier de reconnaissance boursière n'a pas déjà pris trois ans d'avance sur la réalité comptable.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Écarts d'acquisition et immobilisations incorporelles — RISQUE ÉLEVÉ
C'est le poste le plus lourd du bilan : **63,0 milliards $ d'écarts d'acquisition et d'incorporels**, contre **56,7 milliards $ de capitaux propres**. Les acquisitions successives de GIP, HPS, Preqin et ElmTree ont massivement gonflé ce poste en deux ans.

**À surveiller** : l'absence de dépréciation malgré des multiples d'acquisition élevés (HPS payé ~12-13 fois l'EBITDA de commissions) ; les hypothèses de taux d'actualisation et de croissance long terme retenues dans les tests annuels ; toute révision du périmètre des unités génératrices de trésorerie.

### Compléments de prix conditionnels — RISQUE ÉLEVÉ ET SPÉCIFIQUE
Le passif de **compléments de prix s'élève à 7,9 milliards $**, et sa juste valeur est indexée sur **le cours de l'action BlackRock elle-même**. Mécanisme réflexif : quand le titre monte, la dette augmente et le résultat publié se dégrade. La variation a atteint +560 M$ sur un seul trimestre au T2 2026.

**À surveiller** : l'ampleur de ces réévaluations dans la réconciliation entre résultat publié et résultat ajusté, et le nombre d'actions qui sera effectivement émis au dénouement des compléments de prix.

### Dépendance aux mesures ajustées — RISQUE MODÉRÉ À ÉLEVÉ
L'écart entre le bénéfice par action publié (35,31 $ en 2025) et le bénéfice ajusté (48,09 $) atteint **36%**. Il est très largement explicable — amortissement d'incorporels, compléments de prix, don caritatif non récurrent — mais sa **persistance** est le vrai sujet : un ajustement qui revient chaque trimestre pendant plusieurs années n'est plus exceptionnel.

**À surveiller** : l'amortissement des incorporels, en hausse de 139 M$ sur un an au T2 2026, qui restera élevé pendant toute la durée d'amortissement des actifs HPS et GIP.

### Consolidation des véhicules d'investissement — RISQUE MODÉRÉ
BlackRock consolide certains fonds dans lesquels il investit du capital d'amorçage. Cela gonfle le total de bilan et fait apparaître des intérêts minoritaires importants. Ce traitement est correct et documenté, mais il **rend les ratios de bilan bruts peu lisibles** sans retraitement.

**À surveiller** : le rapprochement entre bilan publié et bilan ajusté, et la part des actifs de comptes séparés (~65 milliards $) qui gonfle simultanément l'actif et le passif sans risque économique.

### Comptabilisation des revenus — RISQUE FAIBLE
Les commissions de gestion sont prélevées quotidiennement sur l'actif net : reconnaissance simple, pas de créance, pas de risque de recouvrement. Les **commissions de surperformance** sont plus délicates — +224% sur un trimestre — et leur reconnaissance dépend de seuils dont le franchissement peut être concentré sur un exercice.

### Contrats de location — RISQUE FAIBLE
Droits d'utilisation de ~1,85 milliard $ pour des passifs locatifs de ~2,22 milliards $, essentiellement immobiliers. Traitement standard, aucune anomalie identifiée.

### Parties liées et conflits d'intérêts — RISQUE MODÉRÉ
BlackRock investit son capital dans ses propres fonds, vend Aladdin à des clients qui sont aussi souscripteurs de ses véhicules, et sélectionne des contreparties de marché sur des transactions concernant ses propres produits. Rien d'irrégulier, mais une **densité de conflits d'intérêts potentiels** qui exige des dispositifs de contrôle sans faille.

### Passifs éventuels — RISQUE MODÉRÉ
Contentieux antitrust engagé par treize procureurs généraux devant une juridiction fédérale texane, requête en irrecevabilité **largement rejetée en 2025** ; quatre États poursuivent également au titre de la protection des consommateurs sur des déclarations figurant sur les sites de fonds. S'y ajoutent des actions sur les frais et les obligations fiduciaires. L'exposition financière directe paraît maîtrisable, mais le risque **réputationnel et commercial** ne l'est pas nécessairement.

### Rémunération en actions et dilution — RISQUE MODÉRÉ
Acquisitions payées en titres (GIP, HPS), rémunération variable largement en actions, compléments de prix réglés en actions. Les rachats de 2 milliards $ par an ne compensent que partiellement.

---

### Verdict global
**Risque comptable : MODÉRÉ.** BlackRock présente une information financière détaillée, une structure d'endettement conservatrice (dette nette/EBITDA inférieure à 1) et aucun signal de fraude. Mais trois zones méritent une vigilance annuelle stricte : le poids des **écarts d'acquisition supérieurs aux capitaux propres**, la **réflexivité des compléments de prix indexés sur le cours**, et la **dépendance du récit financier aux mesures ajustées**. Ces trois points sont des conséquences directes de la stratégie d'acquisition — ils s'accroîtront tant qu'elle se poursuivra.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour la direction de BlackRock

### Stratégie et avantage concurrentiel

**1.** Les marchés privés représentent environ 5% de vos encours pour ~15% de vos commissions. **À quel niveau d'encours privés** la sensibilité du groupe au niveau des marchés actions deviendra-t-elle matériellement plus faible — et à quelle échéance ?

**2.** Vanguard n'a pas d'actionnaires à rémunérer et peut baisser ses frais indéfiniment. **Quel est votre plancher tarifaire** sur l'indiciel cœur, et à partir de quel niveau cessez-vous de défendre une part de marché ?

**3.** Vous vendez Aladdin à des concurrents directs. **Comment garantissez-vous** l'étanchéité entre les données de flux observées sur la plateforme et vos propres décisions de gestion, et quel dispositif de contrôle est auditable par un tiers ?

**4.** GIP et HPS originent désormais conjointement. **Quelle preuve chiffrée** pouvez-vous apporter de transactions qu'aucune des deux entités n'aurait pu réaliser seule ?

### Allocation du capital et bilan

**5.** Vos écarts d'acquisition et incorporels (63,0 milliards $) dépassent vos capitaux propres (56,7 milliards $). **Quelles hypothèses de croissance long terme** sous-tendent vos tests de dépréciation sur GIP et HPS, et quelle baisse de collecte les rendrait insuffisantes ?

**6.** Les compléments de prix conditionnels (7,9 milliards $) sont indexés sur votre propre cours de Bourse. **Combien d'actions** seront effectivement émises au dénouement dans un scénario où le titre atteint 1 400 $ ?

**7.** Vous avez payé GIP et HPS en actions, à un moment où votre titre était haut. **Quel est le seuil de valorisation** en dessous duquel vous cesseriez de financer des acquisitions en titres ?

**8.** Vous affichez un objectif de **capitalisation boursière** de 280 milliards $ en 2030. Pourquoi inscrire dans un plan stratégique une variable qui ne relève pas de votre exécution ?

### Exécution opérationnelle

**9.** La croissance organique des commissions de base est de 10%, contre 5% visés. **Quelle part** provient de l'effet mix et quelle part d'un effet volume qui pourrait ne pas se reproduire ?

**10.** Vos charges ajustées ont progressé de 25% sur un an au T2 2026. **Quel niveau de croissance de revenus** est nécessaire pour maintenir une marge de 45% et plus, et que se passe-t-il si les revenus stagnent un exercice ?

**11.** Sur les 800 milliards $ d'actifs d'assurance, vous visez une conversion de 5 à 10% vers les marchés privés. **Où en êtes-vous précisément**, et quel gain de commission moyenne cela représente-t-il en points de base ?

### Risques

**12.** Dans un scénario de repli de 25% des marchés actions maintenu douze mois, **quelle est votre estimation** de l'impact sur les commissions de base et sur la marge opérationnelle ajustée ?

**13.** Le contentieux antitrust engagé par treize procureurs généraux a franchi le stade de la requête en irrecevabilité. **Comment vos pratiques d'engagement actionnarial ont-elles été modifiées** depuis, et quel est le pire scénario que vous avez provisionné ?

### Vision et gouvernance

**14.** Vous dirigez cette entreprise depuis 38 ans. **Quel est l'état d'avancement du plan de succession**, et quels critères le conseil a-t-il retenus pour départager les candidats internes ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne perçoit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Vous n'achetez pas une entreprise, vous achetez les indices avec un effet de levier

C'est le point que les haussiers habillent mais n'éliminent jamais. **55% des encours sont en actions**, et les revenus sont une fonction quasi linéaire de la valeur de marché de ces actifs. Aucune stratégie, aucune acquisition, aucune plateforme technologique ne change cette équation à court terme. En 2022, les encours sont passés sous 8 trillions $ et le titre a perdu plus d'un tiers de sa valeur — non pas à cause d'une erreur de gestion, mais parce que les marchés ont baissé. **Payer 21 fois un bénéfice ajusté au sommet d'un cycle haussier revient à payer une prime sur des bénéfices eux-mêmes gonflés par ce cycle.**

### 2. La compression des commissions est une érosion permanente, pas un vent contraire passager

Sur l'indiciel cœur, la concurrence a franchi la barre des frais nuls. Le concurrent le plus dangereux — **Vanguard** — est une structure mutualiste qui n'a aucune marge à défendre devant un marché boursier. Il peut baisser ses tarifs jusqu'au coût de revient, indéfiniment. Les haussiers présentent le pivot vers les marchés privés comme une conquête stratégique ; on peut aussi le lire comme la **reconnaissance implicite que le métier historique se commoditise**.

### 3. La transformation vantée est, en valeur absolue, encore marginale

Les marchés privés pèsent environ **5% des encours**. Même en atteignant l'objectif de 400 milliards $ de levées d'ici 2030, la part reste minoritaire face à une base indicielle de plusieurs trillions. Le marché valorise pourtant BlackRock comme si la bascule était acquise. **L'écart entre le récit et la matérialité comptable est le principal risque de désillusion.**

### 4. Le bilan porte la facture de la stratégie

63,0 milliards $ d'écarts d'acquisition et d'incorporels **contre 56,7 milliards $ de capitaux propres**. Autrement dit, la totalité des fonds propres du groupe est adossée à des actifs immatériels issus d'acquisitions récentes, payées à des multiples élevés, en actions, au sommet du marché. Ajoutez-y **7,9 milliards $ de compléments de prix conditionnels indexés sur le cours de l'action** — un passif qui grossit précisément quand tout va bien, et qui devra être réglé en titres, donc en dilution. Le bilan n'est pas fragile au sens du risque de défaut ; il est fragile au sens de la **qualité des actifs qui le composent**.

### 5. Le résultat publié raconte une histoire moins flatteuse que le résultat ajusté

35,31 $ contre 48,09 $ par action en 2025 : **36% d'écart**. La direction communique sur le second, le consensus le suit, la valorisation s'y adosse. Les retraitements sont défendables un par un, mais leur récurrence pendant toute la durée d'amortissement des incorporels HPS et GIP signifie qu'une part durable du bénéfice affiché est une **construction de présentation**.

### 6. Le risque politique et judiciaire est sous-évalué parce qu'il est difficile à modéliser

Treize procureurs généraux poursuivent BlackRock devant une juridiction fédérale texane pour entente présumée sur la production de charbon, et la requête en irrecevabilité a été **largement rejetée**. S'y ajoutent des contentieux sur les frais et les obligations fiduciaires, le débat sur le pouvoir de vote concentré des trois grands gérants indiciels, et l'hypothèse récurrente d'une désignation comme institution systémique. Aucun de ces éléments ne détruit l'entreprise. Tous, cumulés, peuvent **entamer la relation commerciale avec des clients institutionnels sensibles au risque politique** — c'est déjà arrivé avec des fonds de pension d'États américains.

### 7. Le risque de succession n'est pas provisionné

L'entreprise est identifiée à son fondateur depuis 38 ans. Sa relation personnelle avec les grands allocataires institutionnels mondiaux est un actif réel, non transférable et non inscrit au bilan. Une transition mal exécutée ne casse pas le modèle, mais elle peut coûter plusieurs points de multiple.

### Le scénario catastrophe unique
**Un marché baissier prolongé combiné à une déception sur les marchés privés.** Les encours refluent vers 12-13 trillions $, la collecte se tarit, le déploiement en crédit privé ralentit au moment où les spreads se tendent, une dépréciation d'écarts d'acquisition intervient sur HPS ou GIP, et le multiple passe de 21 à 15 fois un bénéfice lui-même en repli de 15%. Résultat : un titre divisé par deux. Probabilité sur cinq ans ? Loin d'être négligeable — la configuration de 2022 en était une répétition générale, sans le poids des écarts d'acquisition actuels.

### Conclusion short
BlackRock est une entreprise remarquable, dominante, gérée avec compétence, et **le short n'est pas un pari sur son effondrement**. C'est un pari sur le fait que le marché confond aujourd'hui une **transformation réelle mais lente** avec une transformation déjà accomplie, et qu'il paie une prime de croissance pour un actif dont le déterminant premier reste le niveau des indices mondiaux. À 21 fois le bénéfice ajusté au sommet du cycle, le rapport risque-rendement récompense la patience, pas l'entrée immédiate.`,
  },
];

export default { ...meta, modules };
