// ============================================================
//  DOSSIER : Intuitive Surgical, Inc. (ISRG)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "isrg",                     // identifiant d'URL : /dossier/isrg
  ticker: "ISRG",
  name: "Intuitive Surgical, Inc.",
  exchange: "Nasdaq",
  sector: "Technologies médicales — chirurgie robotique",
  initials: "ISRG",                 // affiché dans la pastille
  tagline: "Le pionnier et leader mondial de la chirurgie robotique : 12 094 robots da Vinci installés, 84 % de revenus récurrents.",
  riskScore: 59,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "isrg.html",
  updated: "2026-10",               // période des données
  published: "2026-10-22",          // date de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Intuitive Surgical est le **pionnier et le leader mondial de la chirurgie assistée par robot**. Fondée en 1995 à Sunnyvale (Californie), l'entreprise a obtenu en 2000 la première autorisation de la FDA pour son robot **da Vinci** et a depuis construit l'écosystème de référence de la chirurgie mini-invasive robotisée. En 2025, le chiffre d'affaires a atteint **10,06 Md$** et plus de **3,15 millions d'interventions** ont été réalisées sur ses plateformes. Sur les douze derniers mois, le chiffre d'affaires s'élève à **11,6 Md$**.

Le modèle est celui du **« rasoir et des lames »**, appliqué au bloc opératoire :
- **Le robot (le « rasoir »)** : vendu entre ~1 et 2,5 M$ selon le modèle, ou de plus en plus mis à disposition en **location**, y compris en location **à l'usage** (paiement par intervention)
- **Les instruments et accessoires (les « lames »)** : chaque intervention consomme des instruments EndoWrist à durée de vie limitée, des agrafeuses, des énergies, des drapés stériles — environ **1 860 $ par intervention** au T3 2026
- **Les services** : contrats de maintenance pluriannuels, formation, logiciels et outils numériques (analyse des performances chirurgicales, simulation)

Résultat : **84 % du chiffre d'affaires est récurrent** (instruments, services, loyers), lié au nombre d'interventions et non aux ventes de robots. Chaque robot installé génère des revenus pendant 7 à 10 ans.

## Principaux produits et services

**Plateformes multiports da Vinci** :
- **da Vinci 5** (lancé en 2024 aux États-Unis) : retour de force, puissance de calcul multipliée, plus de 2 000 unités installées fin septembre 2026, 18 000 chirurgiens formés
- **da Vinci Xi** et **XiR** (version reconditionnée moins chère pour les marchés sensibles au prix et les centres de chirurgie ambulatoire)
- **da Vinci X** (entrée de gamme)

**da Vinci SP (single port)** : un seul point d'entrée, 487 unités installées dans 27 pays, interventions en hausse de 55 % au T3 2026.

**Ion** : plateforme robotique de **biopsie pulmonaire** par voie bronchique (diagnostic précoce du cancer du poumon), 1 152 unités installées, interventions en hausse de 31 %.

**Écosystème numérique** : My Intuitive, Case Insights, simulateurs SimNow, intégration de l'IA (contrôle vocal, quatrième bras automatisé).

## Clients, fournisseurs, concurrents

**Clients** : près de **7 000 hôpitaux et établissements** dans plus de 70 pays — grands centres hospitalo-universitaires, réseaux privés américains (HCA, Tenet, CommonSpirit…), hôpitaux publics européens et asiatiques, et désormais **centres de chirurgie ambulatoire (ASC)**. Les chirurgiens sont les véritables prescripteurs : plus de **10 000 interventions par jour** sont réalisées sur da Vinci.

**Fournisseurs** : composants électroniques et mécaniques de précision, optiques (endoscopes produits principalement en **Allemagne**), sous-traitants de fabrication. Production propre à Sunnyvale, Mexicali (Mexique), Shanghai (coentreprise) et bientôt Penang (Malaisie, 2028).

**Concurrents** : **Medtronic** (Hugo, autorisé par la FDA en urologie fin 2025), **Johnson & Johnson** (Ottava, autorisation de novo en juillet 2026 ; Monarch face à Ion), **CMR Surgical** (Versius), acteurs chinois soutenus par les appels d'offres locaux (MicroPort MedBot, Edge Medical), indien (SS Innovations) — et surtout la **laparoscopie classique**, encore majoritaire dans le monde.

## Modalités contractuelles

- **Vente directe** du robot (paiement à la livraison ou financement), avec **contrat de service** pluriannuel facturé chaque année
- **Location simple** (operating lease) : environ la moitié des placements récents, dont une part croissante **à l'usage** — le loyer varie avec le nombre d'interventions, ce qui abaisse la barrière d'entrée pour l'hôpital
- **Instruments** facturés à l'unité, avec un nombre d'utilisations limité par instrument : c'est la clé du modèle — et la cible des actions antitrust (cf. Red Flags)
- **Paiements** : conditions standard 30-60 jours pour les hôpitaux américains, plus longues dans certains pays (Europe du Sud, Asie)

> **Point d'attention** : à partir du S1 2027, Intuitive va **allonger la durée de vie** d'une partie des instruments et introduire une **tarification par volume**. Effet attendu : **-3 à -5 % de revenu d'instruments par intervention** une fois pleinement déployé, en échange d'une adoption plus large. C'est un changement majeur du modèle de « lames ».`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Intuitive dans la chaîne de valeur

Intuitive occupe une position **intégrée verticalement** : elle conçoit, fabrique, distribue (en direct dans la plupart des pays), installe, forme et entretient ses robots. Elle contrôle aussi le consommable. C'est ce contrôle de bout en bout — du composant au geste du chirurgien — qui fait la force du modèle.

### Amont — Composants et intrants

- **Optique et imagerie** : endoscopes 3D haute définition, principalement fabriqués en **Allemagne** (exposés aux droits de douane américains)
- **Électronique et calcul** : processeurs et cartes pour da Vinci 5 (puissance de calcul multipliée par ~10 000 par rapport au Xi), capteurs de force
- **Mécanique de précision** : câbles, moteurs, poignets articulés EndoWrist
- **Énergie chirurgicale et agrafage** : générateurs, agrafeuses SureForm (fabrication propre)
- **Matériaux stériles** : drapés, gaines, emballages

**Sites de production** : Sunnyvale (Californie), Mexicali (Mexique, en grande partie conforme à l'accord ACEUM), Shanghai (coentreprise avec Fosun Pharma pour le marché chinois), futur site Ion à **Penang (Malaisie)** en 2028.

---

### Intuitive — Conception, fabrication, distribution

**R&D** : 408 M$ au T3 2026, en croissance plus rapide que les frais commerciaux — environ 13 % du chiffre d'affaires.

**Distribution** : **directe** aux États-Unis, en Europe du Nord, au Japon, en Corée, en Inde… Depuis le **1er mars 2026**, Intuitive a repris en direct l'**Italie, l'Espagne et le Portugal** en rachetant les activités de ses distributeurs **ab medica, Abex et Excelencia Robótica** (plus de 470 robots installés, ~250 salariés).

**Formation** : centres de formation, simulateurs, programmes de compagnonnage — des dizaines de milliers de chirurgiens formés depuis l'origine.

---

### Aval — Clients et payeurs

- **Hôpitaux** : HCA Healthcare, CommonSpirit, Tenet, Mayo Clinic, Cleveland Clinic, AP-HP, NHS, hôpitaux universitaires coréens, japonais, indiens
- **Centres de chirurgie ambulatoire (ASC)** : moins de 10 % des volumes de chirurgie des tissus mous aux États-Unis, mais en forte croissance — 18 robots installés en ASC au T3 2026, dont 15 XiR
- **Chirurgiens** : urologues, gynécologues, chirurgiens généraux (hernie, cholécystectomie, colorectal), thoraciques, cardiaques
- **Payeurs** : Medicare/Medicaid, assureurs privés (UnitedHealth, Elevance, Cigna), marchés ACA ; à l'étranger, systèmes publics avec codes de remboursement (Japon : 7 nouvelles interventions remboursées depuis juin 2026 ; Corée : remboursement Ion obtenu au T3 2026 ; Chine : réforme des codes de tarification à partir de novembre 2026)

---

### Cartographie simplifiée du flux

\`\`\`
INTRANTS                  INTUITIVE                       CLIENTS / PAYEURS
Optique (Allemagne)   →   Conception + fabrication    →   ~7 000 hôpitaux, 70+ pays
Électronique, moteurs     (Sunnyvale, Mexicali,           ASC (ambulatoire US)
Composants mécaniques      Shanghai, Penang 2028)          Chirurgiens (prescripteurs)
                          Distribution directe             Payeurs : Medicare, assureurs,
                          Formation + service              systèmes publics étrangers
                          Instruments (récurrent)
\`\`\`

**Le point clé** : Intuitive ne dépend pas d'un fournisseur unique critique, mais elle est **exposée aux droits de douane** (endoscopes allemands, une partie de la production mexicaine non conforme à l'ACEUM, composants chinois). L'impact est estimé à ~1 % du chiffre d'affaires dans la marge brute 2026, partiellement compensé par des remboursements de droits IEEPA (36 M$ au T2, 28 M$ au T3).`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Intuitive ne publie **qu'un seul segment opérationnel**. Il n'existe donc pas d'EBITDA ni de résultat net par segment publié : la rentabilité est approchée par la **marge brute produits vs services** et par l'analyse des lignes de revenus.

### Par type de revenu (T3 2026)

| Ligne de revenu | T3 2026 | T3 2025 | Croissance | Poids |
|---|---|---|---|---|
| Instruments et accessoires | 1,80 Md$ | 1,52 Md$ | +18 % | 59 % |
| Systèmes (ventes + loyers) | 0,77 Md$ | 0,59 Md$ | +30 % | 25 % |
| Services | ~0,48 Md$ | ~0,40 Md$ | ~+21 % | 16 % |
| **Total** | **3,05 Md$** | **2,51 Md$** | **+22 %** | **100 %** |

**Revenus récurrents** (instruments + services + loyers) : **84 %** du total au T3 2026 (85 % au T2).

### Évolution annuelle

| Exercice | Chiffre d'affaires | Croissance | Interventions da Vinci | Robots placés |
|---|---|---|---|---|
| 2023 | 7,12 Md$ | +14 % | +22 % | 1 370 |
| 2024 | 8,35 Md$ | +17 % | +17 % | 1 526 |
| 2025 | 10,06 Md$ | +21 % | +18 % (3,15 M) | 1 721 (dont 870 da Vinci 5) |
| 9 mois 2026 | 8,71 Md$ | +21 % | +15 % | 1 445 |

**Lecture** : la croissance du chiffre d'affaires (+21-22 %) dépasse celle des interventions (+14-15 %) grâce à trois effets — le **cycle de renouvellement da Vinci 5** (ventes de systèmes et instruments spécifiques plus chers), la **montée du SP et d'Ion**, et l'**effet de base installée** sur les loyers.

---

### Par plateforme

- **da Vinci multiport** : cœur de l'activité, ~12 000 robots ; da Vinci 5 représente plus de la moitié des placements (315 sur 546 au T3)
- **da Vinci SP** : petit mais en forte accélération (+55 % d'interventions au T3, record de 42 placements, dont 21 aux États-Unis et 12 en Corée)
- **Ion** : ~1 150 robots, +31 % d'interventions — un moteur de croissance distinct (diagnostic du cancer du poumon)

### Par zone géographique

| Zone | Poids estimé du CA | Dynamique T3 2026 |
|---|---|---|
| États-Unis | ~65-67 % | Interventions da Vinci +10 % (plus bas depuis la COVID) ; placements +27 % |
| Hors États-Unis | ~33-35 % | Interventions +20 % ; placements +29 % |
| — dont Europe | | 115 placements (+83 %), reprise directe Italie/Espagne/Portugal |
| — dont Asie | | 78 placements (+30 %) ; Inde +42 % d'interventions, Japon en amélioration, Chine en ligne avec la moyenne |

Les interventions hors États-Unis représentent désormais **~38 % des volumes da Vinci**.

---

### Profil de marge

- **Marge brute non-GAAP** : 69,9 % au T3 2026 (68,9 % hors remboursement de droits de douane), contre 68 % un an plus tôt ; objectif 2026 relevé à **68,7-69,3 %**
- **Marge produits** (GAAP) : 67,9 % au T2 2026 — le service est structurellement plus margé
- **Marge opérationnelle non-GAAP** : **42 %** (41 % hors élément exceptionnel), contre 39 % un an plus tôt
- **Marge opérationnelle GAAP** : 19 % au T3 (pénalisée par la charge de règlement de 450 M$) ; 34 % au T2
- **Marge nette non-GAAP** : ~35 %

**Évolution des marges** : creusées en 2022-2023 (inflation, investissements massifs dans les campus et da Vinci 5), elles sont remontées depuis grâce aux gains de productivité et au mix. Le prochain test est 2027 : la **baisse de 3 à 5 % du revenu par intervention** pèsera sur la marge brute si l'élasticité des volumes ne compense pas.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Base installée et coûts de changement — moat très fort
Avec **12 094 robots da Vinci** et 1 152 Ion installés, Intuitive dispose d'une avance de plus de 20 ans. Pour un hôpital, changer de plateforme signifie : un nouvel investissement de plusieurs millions de dollars, **reformer toutes les équipes** (chirurgiens, infirmiers, techniciens), refaire les protocoles et perdre la comparabilité des données. Les robots d'un même hôpital sont généralement d'une seule marque.

### 2. Capital humain : la courbe d'apprentissage des chirurgiens — moat très fort
La plupart des chirurgiens robotiques américains ont été **formés sur da Vinci**, souvent dès l'internat. Un chirurgien qui a réalisé des centaines d'interventions sur une console n'en change pas volontiers. Avec des dizaines de milliers de chirurgiens formés et **18 000 sur da Vinci 5** en deux ans, c'est un verrou culturel autant que technique.

### 3. Preuves cliniques accumulées — moat fort
Des dizaines de milliers de publications. La méta-analyse **Benign COMPARE** (366 études, 32 pays, 1,5 million de patients da Vinci) montre **54 % de risque en moins de conversion en chirurgie ouverte** par rapport à la laparoscopie, moins de transfusions et des séjours plus courts. Aucun concurrent ne dispose d'un tel corpus.

### 4. Étendue des indications et réglementation — moat fort
da Vinci est autorisé dans l'urologie, la gynécologie, la chirurgie générale, thoracique, et désormais **cardiaque** (FDA fin 2025, marquage CE au T3 2026). Les concurrents arrivent avec une ou quelques indications : **Hugo** de Medtronic n'est autorisé qu'en **urologie** aux États-Unis ; **Ottava** de J&J sur une dizaine d'interventions de chirurgie générale.

### 5. Écosystème intégré et données — moat en construction
Robot + instruments + simulateurs + logiciels + données de millions d'interventions (Case Insights). Le da Vinci 5 recevra plus de 100 mises à jour logicielles en 2027. L'IA (quatrième bras automatisé, commande vocale) s'appuie sur une base de données qu'aucun rival ne possède.

### 6. Échelle industrielle et coûts — moat réel
Les volumes permettent des coûts unitaires inaccessibles aux nouveaux entrants, ce qui autorise Intuitive à **baisser ses prix** (XiR, programme d'usage prolongé) pour défendre ses positions sans sacrifier sa marge opérationnelle de ~40 %.

## Positionnement vs concurrence

| Critère | Intuitive (da Vinci) | Medtronic (Hugo) | J&J (Ottava) | Acteurs chinois |
|---|---|---|---|---|
| Base installée mondiale | ~12 100 + 1 150 Ion | Non publiée (>30 pays) | Lancement limité | Croissante en Chine |
| Indications FDA | Très larges | Urologie | ~10 gestes de chirurgie générale | — |
| Preuves cliniques | Massives | En construction | En construction | Faibles hors Chine |
| Architecture | Chariot/boom, SP, endoluminal | Modulaire (bras séparés) | Intégrée à la table | Copies Xi, moins chères |
| Prix | Premium, en baisse ciblée | Agressif attendu | Inconnu | Très agressif |

## Valeur perçue, marque et marketing

« da Vinci » est devenu un **nom commun** à l'hôpital. Les patients le demandent, les hôpitaux l'affichent comme argument de recrutement de chirurgiens et de patients. Intuitive communique peu vers le grand public et investit dans la preuve clinique et la formation : un marketing de **prescripteurs**, non de masse.

## Pouvoir de négociation

- **Vis-à-vis des hôpitaux** : **Élevé mais contesté** — les coûts des instruments sont la principale critique, d'où un règlement de **450 M$** avec des hôpitaux (recours collectif sur la réparation par des tiers) et un procès relancé en appel (SIS). Intuitive choisit désormais de **baisser le coût par intervention** pour élargir l'adoption.
- **Vis-à-vis des fournisseurs** : **Élevé** — client de premier rang, fabrication en propre des éléments critiques.
- **Vis-à-vis des payeurs** : **Modéré** — pas de surprime de remboursement pour la robotique dans la plupart des pays ; la valeur doit se démontrer par le coût total de prise en charge (moins de complications, séjours plus courts).
- **Vis-à-vis des gouvernements** : **Faible en Chine** (quotas d'importation, appels d'offres provinciaux favorisant les fabricants locaux, baisse des prix des instruments imposée à partir de novembre 2026).`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Grandes medtechs mondiales (octobre 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E (publié / futur) | Rdt dividende | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|
| **Intuitive Surgical** | **ISRG US** | **~151 Md$** | **~12,5x** | **~44x (~39x hors règlement)** | **~52x / ~36x** | **0 %** | **~14 %** |
| Medtronic | MDT US | ~116 Md$ | ~3,6x | ~17,9x | ~23x / ~16x | ~3,0 % | ~8-9 % |
| Stryker | SYK US | ~117 Md$ | ~5,0x | ~20,9x | ~32x / ~19x | ~1,2 % | ~14-15 % |
| Johnson & Johnson | JNJ US | ~625 Md$ | ~6,6x | ~24,9x | ~39x / ~23x | ~2,1 % | ~23-25 % |
| Boston Scientific | BSX US | ~66 Md$ | ~3,7x | ~18,2x | ~18x / ~14x | 0 % | ~8-9 % |
| CMR Surgical | Non coté | — | — | — | — | — | Déficitaire |
| MicroPort MedBot | 2252 HK | Petite cap. | n.s. | n.s. | n.s. | 0 % | Négatif |

*Cours de clôture du 20 octobre 2026 pour les pairs ; Intuitive valorisée sur la base de sa clôture du 21 octobre (428,12 $), au lendemain de la publication du T3. Multiples S&P Global Market Intelligence via StockAnalysis ; ROE moyens sur 5 ans estimés par 221 Bourse (ordres de grandeur). n.s. = non significatif.*

---

### Analyse comparative

**Intuitive — la prime de qualité et de croissance**
Intuitive se paie **environ deux fois plus cher** que la médiane des grandes medtechs (P/E futur ~36x contre ~17x ; EV/CA ~12,5x contre ~4,3x). Cette prime s'appuie sur trois écarts objectifs : une croissance du chiffre d'affaires de **~20 %** contre 5-8 % pour les pairs, une **trésorerie nette de 6,8 Md$ sans dette** (les pairs sont endettés), et un **ROIC de ~24 %** contre ~12 % en médiane. À noter : le multiple d'Intuitive est **au plus bas depuis près de dix ans** (le P/E publié dépassait 70x fin 2025).

**Medtronic — le challenger le plus crédible**
Hugo est enfin autorisé aux États-Unis (urologie, décembre 2025 ; premier cas à la Cleveland Clinic le 17 février 2026). Medtronic dispose de la force commerciale, des relations hospitalières et des énergies (LigaSure, désormais compatible avec Hugo). Mais la robotique reste marginale dans ses comptes et l'indication unique limite la menace à court terme.

**Johnson & Johnson — la rupture d'architecture**
Ottava, autorisé en **de novo** le 22 juillet 2026, intègre les bras dans la **table d'opération** (30 à 50 % d'encombrement en moins selon J&J). Lancement prudent auprès d'un petit nombre de clients américains. J&J possède aussi **Monarch**, concurrent direct d'Ion en bronchoscopie robotique. C'est l'acteur au bilan le plus puissant.

**Stryker — le roi de l'orthopédie robotique**
Avec Mako, Stryker domine la robotique orthopédique, un marché **distinct** (prothèses) où Intuitive n'est pas présent. Comparable de valorisation pertinent, pas un concurrent direct.

**Les acteurs chinois — la menace sur les prix**
En Chine, les appels d'offres provinciaux favorisent les fabricants locaux et des prix plus bas : c'est là que la concurrence frappe déjà les placements d'Intuitive.

---

### Le ratio qui compte : la croissance des interventions
Pour Intuitive, le P/E n'est qu'une conséquence. Le vrai juge de paix est la **croissance des interventions da Vinci** (14-15 % visés en 2026) combinée au **revenu par intervention**. Tant que les volumes croissent de 12-15 % par an avec une marge opérationnelle de ~40 %, la prime se résorbe d'elle-même en 4 à 5 ans.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T3 2026 (publiés le 20 octobre 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T3 2026 | Consensus | Écart | T3 2025 |
|---|---|---|---|---|
| Chiffre d'affaires | **3,05 Md$** | ~2,91 Md$ | **+4,9 %** | 2,51 Md$ (+22 %) |
| BPA non-GAAP | **3,00 $** | ~2,64 $ | **+13,6 %** | 2,40 $ (+25 %) |
| BPA GAAP | 1,49 $ | — | — | 1,95 $ (-24 %) |
| Interventions totales | +15 % | — | — | +20 % |
| Interventions da Vinci | +14 % (US +10 %, hors US +20 %) | — | — | +19 % |
| Robots da Vinci placés | **546** (record trimestriel) | — | — | 427 (+28 %) |

**Lecture** : **sixième trimestre consécutif** de dépassement du consensus. Le chiffre d'affaires dépasse les attentes de 140 M$, le BPA ajusté de 0,36 $. Le BPA GAAP s'effondre à cause d'une **charge de règlement de 450 M$** (0,99 $ par action après impôt).

---

### Facteurs clés par activité

- **Systèmes** : 769 M$ (+30 %) — placements record, dont 315 da Vinci 5, 87 Xi, 65 XiR, 42 SP, 37 X. Europe +83 % (115 robots), Asie +30 %.
- **Instruments et accessoires** : 1,80 Md$ (+18 %) ; revenu par intervention ~1 860 $ contre ~1 800 $ (mix SP et da Vinci 5)
- **Ion** : interventions +31 %, 56 systèmes placés
- **SP** : interventions +55 %, accélération aux États-Unis (+50 %) et en Corée (+40 %)
- **Cardiaque** : +40 % ; marquage CE pour da Vinci 5 en cardiaque en Europe

**Le point noir** : **interventions da Vinci américaines +10 %**, le rythme le plus faible depuis la COVID (contre +12 % au T2 et ~+14 % au T1). Le directeur financier invoque une base de comparaison exigeante (+16 % un an plus tôt) ; le chirurgie bariatrique recule toujours (GLP-1) et la fin des subventions ACA pèse sur les interventions reportables.

---

### Évolution des marges

- **Marge brute non-GAAP** : 69,9 % (68,9 % hors remboursement de droits de douane de 28 M$), contre 68 % — productivité, volumes, mix
- **Marge opérationnelle non-GAAP** : 42 % (41 % hors élément exceptionnel), contre 39 %
- **Marge opérationnelle GAAP** : 19 % contre 30 % — la charge de 450 M$ est passée en frais commerciaux et administratifs (1,08 Md$ contre 0,57 Md$)
- **R&D** : 408 M$ (+24 %), en croissance plus rapide que les frais commerciaux hors règlement

---

### Prévisions 2026

| Indicateur | Avant (juillet) | Après (octobre) |
|---|---|---|
| Croissance des interventions da Vinci | 13,5-15,5 % | **14-15 %** (resserrée, milieu de fourchette inchangé) |
| Marge brute non-GAAP | 68-69 % | **68,7-69,3 %** (relevée) |
| Croissance des charges opérationnelles non-GAAP | 11-13 % | 11-13 % |

**Changement de ton** : les prévisions restent prudentes ; le T4 implicite (~13-14 % d'interventions) confirme une **décélération graduelle**. Surtout, la direction a annoncé une **baisse de 3 à 5 % du revenu d'instruments par intervention** à horizon fin 2027 (programme d'usage prolongé + Chine), une première dans son histoire.

---

### Bilan — points de vigilance

- **Trésorerie et placements** : **6,8 Md$**, contre 8,6 Md$ fin juin — baisse due aux **rachats d'actions de 2,9 Md$** au prix moyen de 377 $ (le plus gros trimestre de rachats de l'histoire du groupe). **Aucune dette financière.**
- **Investissements** : 113 M$ au T3 — la phase de gros investissements immobiliers (2022-2024) est terminée
- **Règlement de 450 M$** : sans reconnaissance de faute, soumis à l'approbation du tribunal (décision attendue en 2027) ; la sortie de trésorerie interviendra à l'approbation
- **Stocks et créances** : rien d'anormal signalé ; à surveiller avec la montée des locations (actifs au bilan)

---

### Réaction du marché

Le titre, en hausse de 1,1 % à **438 $** à la clôture du 20 octobre, a ouvert en baisse de **~8 % le 21 octobre (402,50 $, plus bas à 399 $)**, avant de remonter en séance pour clôturer à **428,12 $ (-2,3 %)**. Le marché a ignoré le double dépassement pour se concentrer sur trois sujets : la **décélération américaine**, la **baisse de prix des instruments** annoncée pour 2027 et la charge de 450 M$. Ce qui était « dans les cours », c'était un relèvement des prévisions d'interventions, qui n'est pas venu. Le rebond de séance montre toutefois que les acheteurs reviennent rapidement vers 400 $, le niveau de fin septembre.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — priorités et sentiment

### Évolution du ton (fin 2024 → T3 2026)

**T3 2025 (octobre 2025) — euphorie maîtrisée** : interventions +20 %, placements record, da Vinci 5 lancé à l'international. Le titre bondit de ~13-14 % le lendemain. Dave Rosa, CEO depuis juillet 2025, insiste sur l'« adoption large » de l'écosystème.

**T4 2025 (janvier 2026) — prudence assumée** : prévision 2026 de **13 à 15 %** d'interventions (contre 18 % réalisés en 2025), avec mention explicite des **coupes Medicaid**, des **droits de douane** et de la **concurrence en Chine**. Ton « sous-promettre pour surlivrer », fidèle à la culture maison.

**T1 2026 (avril 2026) — confiance** : interventions +17 %, prévision relevée à 13,5-15,5 %, marge brute relevée. Le titre gagne ~8 %. Premier aveu sur la Chine : les appels d'offres provinciaux montrent une **préférence pour les fournisseurs locaux** et des prix plus bas.

**T2 2026 (juillet 2026) — inquiétude** : interventions américaines ralenties à ~12 %. Rosa : certains clients estiment que les **changements de couverture santé** (fin des subventions ACA) **décalent le moment où les patients se font opérer**. Bariatrique en recul « high single digit ». Prévision maintenue, non relevée → **-13 % sur la séance du 17 juillet**.

**T3 2026 (octobre 2026) — offensive sur les prix** : discours le plus stratégique de la période. Le directeur financier Jamie Samath assume la baisse du revenu par intervention : « nous pensons qu'une adoption plus large crée plus de valeur à long terme que le revenu par intervention à court terme ». Le règlement antitrust est présenté comme une **levée d'incertitude** pour les clients.

---

### Priorités répétées de la direction

**1. L'adoption élargie** — Le mot revient à chaque appel. Intuitive veut convertir les interventions **bénignes à fort volume** (hernie, cholécystectomie, gynécologie bénigne) où le coût freine la robotique : XiR, ASC, programme d'usage prolongé, tarification par volume.

**2. Le cycle da Vinci 5** — Plus de 2 000 unités, utilisation ~11 % supérieure au Xi, retour de force, plus de 100 mises à jour logicielles prévues en 2027. C'est le moteur des ventes de systèmes et du revenu par intervention.

**3. L'international** — Reprise en direct de l'Italie, de l'Espagne et du Portugal ; Japon (nouveaux remboursements), Inde (+42 %), Corée. Les volumes hors États-Unis croissent deux fois plus vite.

**4. Les nouvelles plateformes et indications** — SP (+55 %), Ion (+31 %, usine à Penang en 2028), cardiaque (+40 %), endoscopie flexible gastro-intestinale (autorisation FDA d'un système de nouvelle génération non commercial).

**5. La preuve clinique** — Benign COMPARE et les études de coût total de prise en charge sont mises en avant à chaque trimestre.

**6. La discipline opérationnelle** — R&D qui croît plus vite que les frais commerciaux, charges opérationnelles +11-13 % pour un chiffre d'affaires à ~+20 % : le levier opérationnel est explicitement recherché.

---

### Analyse du sentiment

| Trimestre | Ton | Signal principal |
|---|---|---|
| T3 2025 | Très positif | Accélération, euphorie boursière |
| T4 2025 | Prudent | Prévision 13-15 %, risques Medicaid/douane |
| T1 2026 | Confiant | Prévision relevée |
| T2 2026 | Préoccupé | Ralentissement américain, ACA, GLP-1 |
| T3 2026 | Stratégique, offensif | Baisse de prix volontaire, règlement, décélération assumée |

- **Confiance** : intacte sur le long terme, mais la direction ne se risque plus à relever ses prévisions d'interventions.
- **Transparence** : élevée — Intuitive détaille interventions, placements, utilisation, revenu par intervention, ce que peu de medtechs font.
- **Cohérence** : forte. Le message « adoption avant prix » n'est pas nouveau (XiR, location à l'usage) ; il est désormais chiffré.

> **À lire entre les lignes** : en baissant volontairement le coût par intervention **avant** que Hugo et Ottava ne montent en puissance, la direction joue la défense préventive : rendre la bascule vers un concurrent économiquement inutile. C'est rationnel, mais c'est aussi l'aveu que le pouvoir de prix d'hier ne reviendra pas.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### Dave Rosa — Directeur général (depuis le 1er juillet 2025)

**Parcours** : **neuvième salarié** de l'entreprise, entré en mars 1996, avant même la première autorisation FDA. Il a occupé des fonctions en ingénierie, affaires cliniques et développement produit, puis est devenu vice-président exécutif et directeur commercial (2019), directeur de la stratégie et de la croissance (2022), puis président, avant de succéder à Gary Guthart.

**Bilan chiffrable** :
- Architecte de l'**expansion internationale** et du programme **da Vinci 5** (lancé en 2024, plus de 2 000 unités en deux ans)
- Depuis sa prise de fonctions : chiffre d'affaires trimestriel passé de 2,44 Md$ (T2 2025) à **3,05 Md$** (T3 2026), marge opérationnelle non-GAAP de 39 % à **42 %**, BPA non-GAAP de 2,19 $ à **3,00 $**
- A mené l'**intégration de la distribution en Italie, en Espagne et au Portugal** (mars 2026) et le **règlement** du recours collectif antitrust (450 M$)
- Mais : le titre a perdu **~20 %** depuis sa prise de fonctions (environ 540 $ à l'été 2025, ~428 $ aujourd'hui), sous l'effet de la compression des multiples

**Rémunération et participation** : salaire de base de 925 000 $ ; rémunération totale de ~13,8 M$ (à ~95 % variable, en actions). Il détient ~0,065 % du capital (~100 M$ au cours actuel) : un alignement réel, sans être celui d'un fondateur.

---

### Gary Guthart — Président exécutif du conseil

Directeur général de **2010 à 2025** (15 ans), il a transformé une entreprise de ~1,4 Md$ de chiffre d'affaires en un groupe de 10 Md$, avec une marge opérationnelle de ~35-40 % maintenue sur toute la période. Détient ~0,35 % du capital. A vendu 10 000 actions (~4 M$) en septembre 2026, dans le cadre de cessions régulières.

### Jamie Samath — Directeur financier

Directeur financier depuis plusieurs années, il incarne la **prudence des prévisions** (sous-promettre, surlivrer) et la transparence des indicateurs. C'est lui qui a porté le message de la baisse du revenu par intervention.

### Gouvernance

Craig Barratt, **administrateur référent indépendant**. Un conseil majoritairement indépendant. Rotation récente des fonctions de direction médicale et R&D.

---

### Allocation du capital

| Indicateur | 2022 | 2023 | 2024 | 2025 | 12 mois à fin sept. 2026 |
|---|---|---|---|---|---|
| ROE | ~12 % | ~13 % | ~15 % | ~17 % | ~18 % |
| ROIC (S&P Global) | — | — | — | — | ~24 % |
| Investissements | ~0,4 Md$ | ~1,1 Md$ | ~1,1 Md$ | ~0,6 Md$ | ~0,5 Md$ |

**Rachats d'actions 2026** : 1,1 Md$ au T1, ~0,4 Md$ au T2, **2,9 Md$ au T3** — soit ~4,4 Md$ sur neuf mois et un nombre d'actions en baisse de 1,75 % sur un an.

*Ordres de grandeur ; à affiner sur les 10-K.*

**Lecture** :
- **Réinvestissement judicieux** : R&D soutenue (~13 % du CA), campus et usines financés par fonds propres, aucune dette — une discipline rare.
- **Acquisitions rares et ciblées** : reprises de distributeurs (Italie/Espagne/Portugal en 2026), petites acquisitions technologiques ponctuelles. Pas d'acquisition de prestige destructrice.
- **Rachats contracycliques** : 2,9 Md$ rachetés au T3 2026 à **377 $ en moyenne**, près des plus bas de l'année. C'est une bonne allocation — mais elle intervient après des années de rachats modestes à des multiples bien plus élevés.

---

### Signaux d'alerte

- **Pas de transactions significatives avec des parties liées** identifiées.
- **Rémunération en actions élevée** : ~880-900 M$ par an, soit ~7,5 % du chiffre d'affaires — la dilution est compensée par les rachats (-1,75 % d'actions sur un an).
- **Litiges** : le règlement de 450 M$ et le procès SIS relancé en appel (août 2026) montrent que les pratiques commerciales sur les instruments ont un coût.
- **Pas de comportement promotionnel** : au contraire, la culture est celle de la prudence. Pas de changement brutal de stratégie.

### Fondateur ou gestionnaire professionnel ?

**Ni l'un ni l'autre au sens strict** : les fondateurs (Frederic Moll, John Freund, Robert Younge) sont partis depuis longtemps, mais la direction est composée de **« bâtisseurs historiques »** issus de la maison (Rosa : 30 ans, Guthart : plus de 25 ans). C'est l'archétype adapté à une entreprise mature mais encore en croissance : continuité culturelle, ingénierie au centre. Le risque est l'**angle mort** face à des ruptures (architecture d'Ottava, IA autonome) venant d'acteurs qui pensent différemment.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours (2021-2026)

### Contexte
Le titre (division par 3 en octobre 2021) est historiquement l'un des meilleurs de la medtech américaine, mais il est **volatil** (bêta ~1,46) et extrêmement **sensible à la croissance des interventions**. Il est passé d'un plus haut de **~604 $** (janvier 2026) à un plus bas de **~329 $** (juillet 2026), soit **-46 %**, avant de remonter vers 438 $, de toucher 399 $ en séance le 21 octobre et de clôturer à 428 $.

---

### Hausses significatives (plus de 5 %)

**2021 — Rebond post-COVID** : rattrapage des interventions reportées, fort enthousiasme, division du titre par trois en octobre.

**Octobre 2024 (+~6 % à l'ouverture)** : résultats du T3 2024 supérieurs aux attentes (interventions +18 %), premiers déploiements de da Vinci 5.

**22 octobre 2025 (+~13-14 %)** : T3 2025 spectaculaire (CA +23 %, BPA 2,40 $ contre ~1,99 $ attendu). Plus forte hausse post-résultats depuis des années ; le titre gagne 19,5 % sur le mois d'octobre 2025.

**22 avril 2026 (+~8 %)** : T1 2026 (CA +23 %, interventions +17 %) et prévisions relevées.

**Septembre 2026 (+16 % du 8 au 30 septembre)** : rebond de 350 $ à 407 $, sans catalyseur majeur, porté par la perception d'un excès de pessimisme et des rachats d'actions massifs (2,9 Md$ au T3, au prix moyen de 377 $).

---

### Baisses significatives (plus de 5 %)

**Avril et juillet 2022** : confinements en Chine, pénurie de personnel hospitalier et premier raté sur les placements. **-12 % après la publication du T2 2022** (21-22 juillet), le titre chute sous 200 $.

**2023 — La peur des GLP-1** : les médicaments de l'obésité font craindre une chute de la chirurgie bariatrique ; pression durable sur le titre à l'automne 2023.

**Avril 2025 (-~6 % après la clôture)** : avertissement sur les droits de douane (impact de 1,7 % du CA sur la marge brute 2025).

**Janvier 2026** : prévisions 2026 jugées prudentes (13-15 %), mention des coupes Medicaid ; le titre termine janvier ~16 % sous son record du mois (603,88 $).

**Printemps 2026 (-6,6 % sur une séance)** : rappel de **classe I** de la FDA sur des recharges d'agrafeuses SureForm (blessures et un décès signalés), conjugué aux inquiétudes douanières.

**17 juillet 2026 (-~13 %)** : T2 supérieur aux attentes, mais prévision non relevée et **avertissement sur l'effet de la fin des subventions ACA**. Plus bas depuis plus de deux ans ; une douzaine de courtiers abaissent leur objectif.

**20 août 2026 (-5,8 %)** : rechute sans annonce propre à l'entreprise, dans un climat de dégradations (HSBC passé à « conserver » après l'autorisation d'Ottava en juillet).

**21 octobre 2026 (-8 % à l'ouverture, -2,3 % à la clôture)** : T3 supérieur aux attentes, mais décélération américaine (+10 %), annonce de la baisse de 3 à 5 % du revenu par intervention et charge de règlement de 450 M$.

---

### Facteurs structurels

- **Croissance des interventions** : la variable n° 1. Chaque point de croissance gagné ou perdu fait bouger le titre bien plus que le BPA trimestriel.
- **Multiple de valorisation** : le titre s'est longtemps payé 60 à 80 fois les bénéfices ; la compression vers ~36x explique l'essentiel de la baisse de 2026, alors que les bénéfices ont progressé de ~25 %.
- **Politique de santé américaine** : Medicaid, subventions ACA, droits de douane — le titre est devenu sensible à Washington.
- **Concurrence** : chaque étape réglementaire de Medtronic ou de J&J pèse sur le sentiment, même sans impact visible sur les volumes à ce stade.
- **Rachats d'actions** : un soutien nouveau et massif (2,9 Md$ au T3 2026).`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028 (non-GAAP)

### Hypothèses de modélisation

**Croissance du marché** :
- La chirurgie des tissus mous représente des dizaines de millions d'interventions par an dans le monde ; la robotique n'en capte qu'une fraction (forte pénétration en urologie, encore faible en chirurgie générale, cardiaque, hors États-Unis)
- Interventions da Vinci : **14-15 % en 2026**, puis **12-13 % en 2027 et 2028** (décélération américaine compensée par l'international et l'élasticité-prix)

**Parts de marché** :
- Hypothèse de **pertes limitées** : Hugo et Ottava prennent quelques points dans les nouveaux programmes robotiques à partir de 2027-2028, sans affecter la base installée
- Pertes plus nettes en **Chine** (appels d'offres locaux)

**Prix** :
- **Revenu d'instruments par intervention -3 à -5 %** à mix constant une fois pleinement déployé (fin 2027), partiellement compensé par le mix (da Vinci 5, SP) : hypothèse d'un effet net de **-2 % en 2027** et de **-1 % en 2028**
- Ventes de systèmes soutenues par le cycle da Vinci 5

**Pressions sur les coûts** :
- Droits de douane : ~1 % du CA ; hypothèse de stabilité
- Marge brute non-GAAP : ~69 % en 2026, **~68 % en 2027** (effet prix), ~68,5 % en 2028

**Levier opérationnel** :
- Charges opérationnelles +11-13 % par an pour un CA à +13-14 % : marge opérationnelle non-GAAP de **~41 % en 2026**, ~40,5 % en 2027, ~41 % en 2028

**Coûts de financement** :
- **Aucune dette** : pas de charge d'intérêts ; les produits financiers baissent avec la trésorerie (rachats) — de ~320 M$ en 2026 à ~250 M$ en 2027

**Dilution** :
- Rémunération en actions ~900 M$/an, plus que compensée par les rachats : **-1 % d'actions diluées par an** (~356 M en 2026, ~352 M en 2027, ~348 M en 2028)
- Taux d'impôt non-GAAP : 22,5 %

---

### Estimations

| Exercice | Chiffre d'affaires | Marge opér. NG | BPA non-GAAP | Croissance | P/E au cours de ~428 $ |
|---|---|---|---|---|---|
| 2024 (réalisé) | 8,35 Md$ | ~38 % | **7,33 $** | — | — |
| 2025 (réalisé) | 10,06 Md$ | ~38 % | **8,93 $** | +22 % | — |
| **2026E** | **~12,0 Md$** | **~41 %** | **11,2-11,5 $ (base 11,35 $)** | **+27 %** | **~38x** |
| **2027E** | **~13,6 Md$** | **~40,5 %** | **12,2-13,0 $ (base 12,7 $)** | **+12 %** | **~34x** |
| **2028E** | **~15,5 Md$** | **~41 %** | **13,6-15,4 $ (base 14,5 $)** | **+14 %** | **~30x** |

*2026 : 8,30 $ déjà réalisés sur neuf mois (2,50 + 2,80 + 3,00 $), T4 estimé à ~3,05 $. Le BPA GAAP 2026 sera nettement inférieur (~8,9 $), amputé du règlement de 450 M$ et de ~900 M$ de rémunération en actions.*

---

### Sensibilité

- **Scénario haussier** (interventions +15 %/an, élasticité forte au programme d'usage prolongé, Hugo/Ottava marginaux) : BPA 2028 ~15,5 $ → à 32x, cours de ~500 $ (+17 %)
- **Scénario de base** : BPA 2028 ~14,5 $ → à 30x, ~435 $ (+2 % en deux ans, hors rachats) ; à 33x, ~480 $ (objectif moyen des analystes, +12 %)
- **Scénario baissier** (interventions +9-10 %, baisse de prix sans élasticité, marge opérationnelle ramenée à 37 %) : BPA 2028 ~12 $ → à 24x, ~290 $ (-32 %)

**Conclusion** : le BPA d'Intuitive peut croître de **~13-15 % par an** sur 2026-2028 même avec une baisse de prix. Au cours actuel, le titre se paie ~30 fois le BPA 2028 estimé : une valorisation **exigeante mais plus extravagante**. L'essentiel du potentiel dépend d'une seule variable : l'élasticité des volumes à la baisse des prix.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Avantages concurrentiels et barrières à l'entrée
**1. Un écosystème verrouillé par l'humain** : 12 094 robots, des dizaines de milliers de chirurgiens formés, des millions d'interventions documentées. Les concurrents ne doivent pas seulement construire un robot : ils doivent former des générations de chirurgiens et produire dix ans de preuves cliniques. Hugo et Ottava arrivent avec **une indication** chacun ou presque.

**2. Une baisse de prix préventive qui ferme la porte** : en abaissant le coût par intervention de 3 à 5 % **avant** l'arrivée réelle des concurrents, Intuitive retire leur principal argument (le prix) tout en conservant une marge opérationnelle de ~40 %, qu'aucun rival ne peut égaler.

### Leviers de croissance
**3. Une pénétration encore faible** : la robotique reste minoritaire en chirurgie générale, en cardiaque, en ambulatoire (ASC < 10 % des volumes américains, en forte croissance) et hors des États-Unis (Europe +83 % de placements, Inde +42 % d'interventions, Japon réformé).

**4. Trois moteurs au-delà du multiport** : SP (+55 %), Ion (+31 %, diagnostic précoce du cancer du poumon), endoscopie flexible (pipeline). Chacun peut devenir une activité de plusieurs milliards.

**5. Le cycle da Vinci 5** : à peine 2 000 unités sur 12 000 robots installés — le renouvellement de la base va soutenir les ventes de systèmes pendant des années, avec une utilisation ~11 % supérieure.

### Facteurs structurels et surprises potentielles
**6. Vieillissement de la population, pénurie de chirurgiens, IA** : la robotique standardise le geste, réduit les complications et, demain, automatisera des sous-tâches (quatrième bras, commande vocale). Intuitive possède les données pour entraîner ces modèles.

### Allocation du capital
**7. Un bilan de forteresse** : 6,8 Md$ de trésorerie, zéro dette, ~3,2 Md$ de FCF annuel. Les rachats de 2,9 Md$ à 377 $ au T3 montrent une direction qui achète ses propres actions quand elles baissent.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques susceptibles de nuire durablement
**1. Le plafond américain** : les interventions da Vinci aux États-Unis ont ralenti de ~16-17 % à **10 %** en un an. Si c'est le signe d'une **maturité** (les grands hôpitaux sont équipés, les indications historiques saturées) plutôt qu'un effet ACA temporaire, le marché le plus rentable du groupe devient une activité à un chiffre de croissance.

**2. La fin du pouvoir de prix** : la baisse de 3 à 5 % du revenu par intervention, le règlement de 450 M$, la réforme chinoise et le procès SIS relancé dessinent la même tendance : le modèle de « lames » chères est contesté. Une baisse de prix sans élasticité suffisante comprime la marge brute de plusieurs points.

**3. Une concurrence enfin crédible** : Medtronic et J&J ont désormais des robots autorisés aux États-Unis, des forces commerciales immenses et la capacité de vendre des **offres groupées** (énergies, agrafeuses, implants) avec rabais. En Chine, les fabricants locaux gagnent déjà les appels d'offres.

### Compression des marges ou ralentissement
- Marge brute non-GAAP de ~70 % menacée par le prix, les droits de douane et la part croissante des locations
- Le rachat d'actions massif réduit la trésorerie et donc les produits financiers

### Attentes trop élevées ?
À ~36 fois les bénéfices futurs, le titre reste **deux fois plus cher** que les grandes medtechs. Il intègre une croissance de 13-15 % par an pendant au moins cinq ans.

---

### Analyse pré-mortem
*Nous sommes en octobre 2028 et le titre vaut 280 $. Que s'est-il passé ?* Les interventions américaines se sont stabilisées autour de 8 %, l'élasticité au programme d'usage prolongé a été décevante, Ottava a remporté quelques grands réseaux hospitaliers avec des offres groupées, et la Chine a basculé vers les robots locaux. La marge brute est tombée à 65 %, la croissance du BPA à un chiffre, et le marché a ramené le multiple vers 22-24x, celui d'une medtech de qualité ordinaire.

### Les multiples actuels sont-ils trop élevés ?
**Moins qu'ils ne l'ont été.** Le P/E futur de ~36x est le plus bas depuis près de dix ans (plus de 70x publié fin 2025). Avec une croissance du BPA de ~13-15 %, le PEG (~2,3) reste élevé, mais la qualité du bilan et le ROIC (~24 %) justifient une prime. La question n'est plus « est-ce une bulle ? » mais « la croissance tiendra-t-elle à 12 % ou plus ? ».

---

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : il interprète la baisse de prix comme un **aveu de faiblesse**. Elle peut être lue à l'inverse comme le geste d'un monopole qui **choisit de transformer sa marge en volume**, au moment exact où ses concurrents ont besoin d'un argument prix pour exister. Si l'élasticité joue (chirurgie bénigne, ASC, international), 2027 pourrait être l'année du **retour à l'accélération des interventions** — et le titre, aujourd'hui sanctionné pour sa décélération, retrouverait sa prime. Le marché paie aujourd'hui Intuitive comme une medtech « normale en devenir » ; c'est peut-être précisément le moment où elle cesse de l'être.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE MODÉRÉ
Intuitive vend des **contrats à éléments multiples** : robot + service + formation, parfois en location. La répartition du prix entre ces éléments (ASC 606) et le classement des locations (vente ou location simple) influencent le rythme de reconnaissance.

**À surveiller** :
- La part croissante des **locations à l'usage** : le revenu y dépend du nombre d'interventions déclaré, ce qui rend le chiffre d'affaires « systèmes » moins lisible
- Les **conversions location → vente** et les reprises de systèmes (trade-ins) lors du passage à da Vinci 5, qui peuvent gonfler ponctuellement le revenu systèmes

### Information sectorielle — RISQUE MODÉRÉ
**Un seul segment publié** pour une activité qui en comporte de fait plusieurs (da Vinci multiport, SP, Ion, numérique). La rentabilité d'Ion et du SP n'est pas isolée. L'investisseur ne peut pas vérifier si les nouveaux relais sont rentables ou subventionnés par le multiport.

### Contrats de location — RISQUE FAIBLE À MODÉRÉ
- **En tant que bailleur** : les robots loués restent au bilan (immobilisations) et sont amortis ; leur valeur résiduelle et leur durée d'amortissement sont des hypothèses de la direction. Une révision défavorable (obsolescence accélérée par da Vinci 5) entraînerait des dépréciations.
- **En tant que preneur** : contrats immobiliers limités, correctement présentés.

### Parties liées — RISQUE FAIBLE
Aucune transaction significative identifiée. La coentreprise chinoise avec **Fosun Pharma** génère une participation minoritaire (1,6 M$ de résultat attribuable au T3) : à suivre dans un contexte de tension sino-américaine.

### Engagements conditionnels et litiges — RISQUE ÉLEVÉ
C'est le principal point de vigilance de 2026 :
- **Règlement de 450 M$** du recours collectif « In re: da Vinci Surgical Robot Antitrust Litigation » (réparation et maintenance par des tiers), comptabilisé au T3 2026, **sans reconnaissance de faute**, soumis à l'approbation du tribunal (décision en 2027)
- **Procès SIS** (Surgical Instrument Service) : la cour d'appel du 9e circuit a **annulé le jugement favorable à Intuitive** le 13 août 2026 et renvoyé l'affaire devant le tribunal — un nouveau procès antitrust est possible
- **Responsabilité produits** : rappel de **classe I** de recharges d'agrafeuses SureForm en 2026 ; contentieux individuels historiques sur da Vinci
- **Droits de douane** : remboursements de droits IEEPA (36 M$ au T2, 28 M$ au T3) qui améliorent la marge brute de façon non récurrente

**Le point délicat** : la charge de 450 M$ est **exclue du BPA non-GAAP**. Les litiges sont récurrents dans l'histoire d'Intuitive ; les traiter comme « exceptionnels » flatte la mesure ajustée.

### Rémunération en actions — RISQUE MODÉRÉ
- **~880-900 M$ par an** (216 M$ au T3), soit ~7,5 % du chiffre d'affaires et ~20 % du résultat opérationnel non-GAAP — **exclue du BPA non-GAAP**
- L'écart entre BPA GAAP (~8,3 $ sur douze mois) et non-GAAP (~10,8 $) est d'environ **30 %**
- La dilution est neutralisée par les rachats, mais ces rachats consomment de la trésorerie : la rémunération en actions est un **coût économique réel**

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Goodwill limité, en légère hausse avec la reprise des distributeurs européens (mars 2026) ; amortissement des incorporels en hausse en 2026. Aucune acquisition majeure susceptible de dépréciation.

### Flux de trésorerie vs résultat — RISQUE FAIBLE
- FCF sur douze mois **~3,2 Md$** pour un résultat net GAAP de ~3,0 Md$ : conversion supérieure à 100 %, saine
- **Attention** : la baisse de trésorerie de 1,8 Md$ au T3 vient des rachats, pas de l'exploitation ; et la sortie du règlement (450 M$) n'a pas encore eu lieu

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** Les comptes sont simples, sans dette, avec une forte conversion en trésorerie. Les points d'attention sont **juridiques** (litiges antitrust récurrents) et **de présentation** (BPA non-GAAP excluant rémunération en actions et litiges, segment unique). Rien ne suggère une comptabilité agressive, mais l'investisseur doit raisonner sur le **BPA GAAP ajusté de la seule charge de règlement**, et non sur le BPA non-GAAP brut.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Dave Rosa (classées par importance)

### Stratégie et croissance

**1.** Les interventions da Vinci américaines sont passées de ~16 % à **10 %** en un an. Quelle part de ce ralentissement attribuez-vous à des effets temporaires (subventions ACA, base de comparaison) et quelle part à une **maturité structurelle** des indications historiques ? À quel rythme de croissance américaine raisonnez-vous pour 2027-2030 ?

**2.** Vous allez réduire le revenu d'instruments par intervention de 3 à 5 %. **Quelle élasticité** des volumes avez-vous modélisée pour décider ce mouvement, sur quelles interventions, et à partir de quand pourrons-nous la mesurer ?

**3.** Le programme d'usage prolongé nécessite une autorisation 510(k). **Que se passe-t-il si la FDA la refuse ou la retarde** au-delà du S1 2027 ? La baisse de prix serait-elle maintenue sans le gain de coût associé ?

### Avantage concurrentiel

**4.** Ottava intègre les bras dans la table d'opération. Considérez-vous cette architecture comme une **rupture** ou comme une niche ? Quels projets de R&D répondent à cette approche ?

**5.** Avez-vous perdu des **appels d'offres** face à Hugo ou Ottava aux États-Unis depuis leur autorisation ? Comment répondez-vous aux offres groupées (énergies, agrafeuses, implants) que peuvent proposer Medtronic et J&J ?

**6.** En Chine, combien de placements avez-vous perdus au profit des fabricants locaux en 2026, et l'activité chinoise est-elle encore **rentable** après la réforme des codes de tarification de novembre ?

### Allocation du capital

**7.** Vous avez racheté pour **2,9 Md$** d'actions au T3, ramenant la trésorerie à 6,8 Md$. Quel est le **niveau de trésorerie minimal** que vous jugez nécessaire, et quel rythme de rachats envisagez-vous pour 2027 ?

**8.** Une **première distribution de dividende** ou un endettement modéré pour accélérer les rachats sont-ils envisageables ?

**9.** Quelles **acquisitions** jugez-vous pertinentes : technologies (IA, imagerie, endoscopie flexible), reprises de distributeurs, ou plateformes adjacentes ?

### Risques

**10.** Le procès SIS a été relancé en appel en août 2026. Quel est le **risque financier maximal** et ce dossier pourrait-il imposer des changements aux contrats d'instruments au-delà du règlement de 450 M$ ?

**11.** Les droits de douane pèsent ~1 % du CA sur la marge brute. Quel est votre plan de **relocalisation** (Allemagne pour les endoscopes, part non conforme à l'ACEUM au Mexique) et son calendrier ?

**12.** Au-delà du bariatrique, quelles **autres indications** pourraient être affectées par les GLP-1 (orthopédie, cardiaque, colorectal) ?

### Vision long terme

**13.** Quand une intervention **partiellement autonome** sur da Vinci sera-t-elle autorisée, et comment comptez-vous monétiser l'IA : abonnement logiciel, prix des instruments, ou fidélisation ?

**14.** Quelle part du chiffre d'affaires **Ion, SP et l'endoscopie flexible** représenteront-ils en 2030 ? Ces activités sont-elles rentables aujourd'hui ? Publierez-vous un jour une information sectorielle plus détaillée ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — démontage de l'argumentaire haussier

### 1. Ce qui peut compromettre structurellement le modèle
Le modèle d'Intuitive repose sur une équation : **base installée × interventions × revenu par intervention**. Les trois termes sont attaqués en même temps. La base installée croît de 12 % mais l'**utilisation** américaine ralentit ; les interventions américaines tombent à 10 % ; et la direction annonce elle-même **-3 à -5 % de revenu par intervention**. Un monopole qui baisse ses prix de sa propre initiative ne le fait pas par générosité : il le fait parce qu'il sait que la pression arrive.

### 2. Où se concentrent les revenus — et si cela changeait
- **59 % du chiffre d'affaires** provient des instruments et accessoires, c'est-à-dire du consommable à forte marge
- **~65 % du chiffre d'affaires** est réalisé aux **États-Unis**, où la croissance ralentit le plus
- Quelques indications (prostatectomie, hystérectomie, hernie, cholécystectomie) pèsent lourd dans les volumes

Si le consommable devient **réutilisable plus longtemps** (programme d'usage prolongé), **réparable par des tiers** (litiges antitrust) ou **moins cher par décision publique** (Chine), c'est le cœur de la rentabilité qui se contracte. Le règlement de 450 M$ et le procès SIS relancé visent précisément ce verrou.

### 3. Pourquoi l'avantage est plus fragile que ne le pensent les optimistes
Les haussiers invoquent la courbe d'apprentissage des chirurgiens. Mais les **jeunes chirurgiens** formés en 2027-2030 auront accès à plusieurs plateformes, et les hôpitaux qui ouvrent un **deuxième ou troisième programme robotique** feront jouer la concurrence. Hugo et Ottava n'ont pas besoin de déloger un seul robot da Vinci : il leur suffit de gagner **les nouveaux sites et les ASC**, là où se joue la croissance.

### 4. Le concurrent le plus dangereux : Johnson & Johnson
Les haussiers regardent Medtronic. Le vrai danger est **J&J** : premier vendeur mondial d'agrafeuses et d'énergies (Ethicon), présent dans chaque bloc opératoire, capable de **groupé** robot + consommables + implants avec des rabais que les acheteurs hospitaliers adorent. Ottava propose une architecture **différente** (intégrée à la table, gain de place de 30 à 50 %), autorisée en de novo, et J&J dispose aussi de Monarch contre Ion. En Chine, les fabricants locaux jouent déjà ce rôle.

### 5. Les pires allocations du capital
- Des années de **rachats modestes à 60-80 fois les bénéfices**, puis des rachats massifs maintenant que le titre a baissé — mieux vaut tard que jamais, mais la trésorerie fond (de 9,0 Md$ fin 2025 à 6,8 Md$)
- **~900 M$ par an de rémunération en actions** exclus du BPA ajusté, que les rachats ne font que neutraliser
- Un modèle commercial sur les instruments qui a généré **des années de litiges** et un règlement de 450 M$

### 6. Parties liées, comptabilité, incitations
Pas de parties liées problématiques. Mais le **BPA non-GAAP** exclut la rémunération en actions et les litiges, deux coûts récurrents : l'écart avec le GAAP atteint ~30 %. Les dirigeants détiennent une part faible du capital (0,065 % pour le CEO) et sont rémunérés à ~95 % en actions : leur intérêt est le **cours à court terme**, ce qui peut expliquer l'accélération des rachats.

### 7. Les hypothèses nécessaires pour justifier le cours actuel (~428 $)
- Interventions da Vinci **+12 % par an au moins jusqu'en 2030**
- **Élasticité** suffisante pour compenser la baisse de prix dès 2028
- Marge opérationnelle non-GAAP maintenue **au-dessus de 40 %**
- Part de marché préservée face à Hugo, Ottava et la Chine
- Multiple maintenu autour de **30x** les bénéfices

### 8. Si la croissance déçoit de 20 à 30 %
Avec une croissance du BPA de **~10 %** au lieu de 13-15 %, le BPA 2028 tomberait vers **~12,5-13 $**. Le marché ne paierait plus 30x mais ~22-25x : un cours de **~280-325 $**, soit **-24 à -35 %**. Le précédent de juillet 2026 (329 $) montre que ce niveau n'est pas théorique.

### 9. Le scénario unique qui nuirait durablement
**Une décision antitrust imposant l'ouverture du marché des instruments** (réparation, retraitement et réutilisation par des tiers sans limitation). Le procès SIS relancé, le règlement de 450 M$ et la pression des hôpitaux vont dans ce sens. Le revenu par intervention chuterait bien au-delà de -5 %, et le modèle « rasoir et lames » perdrait sa clé. **Plausibilité : 15-25 % d'ici 2030**, non pas sous une forme brutale, mais sous la forme d'une érosion progressive par jurisprudence et négociation.

### Conclusion short
Intuitive est une **entreprise exceptionnelle**, sans dette, avec un écosystème unique. Mais l'action se paie encore deux fois le multiple des grandes medtechs au moment précis où **ses trois moteurs ralentissent ou sont contestés** : volumes américains, pouvoir de prix sur les instruments, monopole réglementaire. La baisse de 46 % du plus haut au plus bas de 2026 n'est peut-être pas une anomalie à racheter, mais le **début d'une normalisation** : celle d'un leader qui devient une medtech de qualité, croissant de 10 à 12 % par an, et valorisée comme telle.`,
  },
];

export default { ...meta, modules };
