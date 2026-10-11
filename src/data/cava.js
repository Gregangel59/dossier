// ============================================================
//  DOSSIER : CAVA Group, Inc. (CAVA)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "cava",                     // identifiant d'URL : /dossier/cava
  ticker: "CAVA",
  name: "CAVA Group, Inc.",
  exchange: "NYSE",
  sector: "Restauration rapide premium (fast casual méditerranéen)",
  initials: "CAVA",                 // affiché dans la pastille
  tagline: "La chaîne qui veut faire de la cuisine méditerranéenne la prochaine grande catégorie de la restauration américaine — 476 restaurants, zéro franchise, zéro dette.",
  riskScore: 55,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "cava.html",
  updated: "2026-10",               // période des données
  published: "2026-10-11",          // date exacte de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

CAVA est une chaîne américaine de **restauration rapide premium (« fast casual ») à la méditerranéenne**, basée à Washington D.C. L'histoire commence en 2006 avec un restaurant de mezze à Rockville (Maryland), ouvert par trois amis d'enfance d'origine grecque — **Ted Xenohristos, Ike Grigoropoulos et Dimitri Moshovitis**. **Brett Schulman** les rejoint et prend la direction générale en 2010 ; le format de bols à composer est lancé en 2011. L'entreprise est cotée au NYSE depuis **juin 2023** (introduction à 22 $).

Le principe est celui d'une **chaîne d'assemblage visible** : le client compose son bol, sa salade ou sa pita en choisissant une base, une protéine, des dips et des garnitures. Le modèle repose sur trois piliers :

- **100 % de restaurants exploités en propre** — aucune franchise : CAVA capte toute la marge restaurant, mais finance aussi toutes les ouvertures
- **Une économie unitaire de premier plan** : chiffre d'affaires moyen par restaurant (AUV) de **3,09 M$**, marge au niveau du restaurant de **~25 %**, nouveaux restaurants à plus de 100 % de la productivité du parc
- **Une croissance par ouvertures** : **476 restaurants** dans 29 États et D.C. à mi-juillet 2026 (+19,6 % sur un an), **75 à 77 ouvertures nettes** prévues en 2026 et l'ambition affichée de **dépasser 1 000 restaurants d'ici 2032**

Chiffres clés : CA 2025 de **1,18 Md$** (+22 %), CA sur 12 mois glissants de **~1,37 Md$**, résultat net 2025 de **63,7 M$**, environ **15 000 collaborateurs**.

## Principaux produits et services

- **Bols et salades à composer** : céréales ou verdure, protéines (poulet grillé, steak lancé en 2024, falafels, boulettes épicées, **saumon glacé à la grenade** lancé en 2026), garnitures et vinaigrettes
- **Pitas** garnies et accompagnements (chips de pita, boissons maison)
- **Dips et spreads signature** (houmous, tzatziki, feta pimentée, harissa) fabriqués dans les ateliers du groupe
- **Grande distribution (CPG)** : ces mêmes dips et vinaigrettes sont vendus en supermarché — activité marginale (moins de 1 % du CA) mais vitrine de la marque
- **Canaux digitaux** : application, site, retrait en restaurant, voie de retrait au volant (~75 sites) et livraison — **39 % du CA** au T2 2026
- **Programme de fidélité** à points relancé en 2024, enrichi de paliers en 2025 et d'un « Flavor Passport » en 2026 ; traiteur en test (Houston, puis un second marché à l'automne 2026)

## Clients, fournisseurs, concurrents

**Clients** : grand public, avec un cœur de clientèle urbaine et périurbaine jeune (milléniaux, génération Z). La direction souligne que certains de ses meilleurs restaurants sont situés dans des **marchés à revenus modestes** — un argument clé dans une économie « en K ».

**Fournisseurs** : plus de 50 producteurs et éleveurs partenaires ; un nombre limité de **distributeurs nationaux** (non nommés dans le rapport annuel), certains intrants étant en **source unique** ; trois sites propres (production à **Laurel, Maryland** et **Verona, Virginie** ; distribution CPG à **Edison, New Jersey**).

**Concurrents** : **Chipotle** (le modèle de référence du fast casual), **Sweetgreen** (salades premium), **Wingstop**, **Shake Shack**, **Panera** (non coté) et une myriade de concepts méditerranéens régionaux (Naf Naf Grill, Roti, Garbanzo…). Plus largement : toute la restauration rapide, les supermarchés et la livraison de repas.

## Modalités contractuelles et de paiement

- **Côté clients** : paiement immédiat à la commande (carte, application) → **aucune créance client**, besoin en fonds de roulement structurellement favorable
- **Côté fournisseurs** : achats payés à terme auprès des distributeurs ; pas de contrat de prix à très long terme connu, d'où une exposition directe aux coûts des protéines (poulet, bœuf, saumon) et des transports
- **Côté bailleurs** : baux commerciaux de long terme, le plus souvent sans clause de sortie anticipée — la charge d'occupation représente **6 à 7 % du CA**
- **Côté plateformes de livraison** : commission prélevée sur chaque commande livrée, qui pèse sur les « autres charges d'exploitation »
- **Cartes cadeaux et points de fidélité** : encaissés d'avance et comptabilisés en revenus différés

**Note de prudence** : CAVA est une valeur de croissance en pleine expansion. La rentabilité nette reste mince (~5 % du CA), la valorisation repose sur la poursuite des ouvertures, et le titre a perdu près de la moitié de sa valeur depuis son plus haut d'avril 2026.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de CAVA dans la chaîne de valeur

CAVA occupe une position **d'intégrateur aval** : elle ne cultive ni n'élève rien, mais elle **transforme elle-même une partie de ses intrants** (dips, sauces, vinaigrettes, marinades) avant de les assembler dans ses propres restaurants. Cette intégration partielle est rare à cette taille dans le fast casual.

### Amont — Matières premières

**Protéines** : poulet (protéine principale), bœuf (steak), agneau et bœuf (boulettes), saumon (nouveauté 2026, à l'origine d'une hausse du coût matière au T2), crevettes à l'ail en test

**Végétaux** : pois chiches (houmous, falafels), légumes et salades fraîches, tomates, concombres, herbes, riz et céréales

**Épicerie** : huile d'olive, feta, épices, pitas

**Fournisseurs** : plus de **50 producteurs et éleveurs partenaires** ; le rapport annuel reconnaît une dépendance à un **nombre limité de fournisseurs**, parfois uniques, et à un **petit nombre de distributeurs** pour l'essentiel de la logistique nationale (aucun nom n'est publié)

---

### CAVA — Transformation centrale

| Site | Surface | Rôle |
|---|---|---|
| Laurel (Maryland) | ~30 000 pieds² (+20 000 en extension) | Production de dips, spreads et sauces |
| Verona (Virginie) | ~55 000 pieds² | Production, ouvert en 2024 |
| Edison (New Jersey) | ~4 000 pieds² | Distribution des produits de grande distribution |

**Chantier 2026-2027** : déploiement du **poulet pré-mariné** dans tout le parc, pour réduire la préparation en cuisine et uniformiser la qualité.

---

### Distribution — Du centre de production au restaurant

Les distributeurs nationaux livrent les **476 restaurants** (matières premières + produits transformés par CAVA). Les **surcoûts de carburant** facturés par les distributeurs sont cités par la direction comme un facteur de hausse du coût matière au second semestre 2026.

---

### Aval — Canaux de vente et client final

| Canal | Poids | Acteurs |
|---|---|---|
| Sur place et à emporter | ~61 % du CA | Restaurants CAVA (29 États + D.C.) |
| Digital (app, site, retrait, livraison) | ~39 % du CA | Application CAVA ; plateformes tierces de livraison (type DoorDash, Uber Eats) |
| Traiteur | En test | Houston, puis un second marché à l'automne 2026 |
| Grande distribution | Moins de 1 % | Supermarchés (dont Whole Foods) |

**Bailleurs** : foncières de centres commerciaux et propriétaires de pieds d'immeubles — CAVA est désormais un locataire recherché, ce qui améliore ses conditions de bail.

---

### Cartographie simplifiée du flux

| Amont | Transformation | Logistique | Restaurant | Client final |
|---|---|---|---|---|
| 50+ producteurs et éleveurs | Laurel, Verona (dips, sauces, marinades) | Distributeurs nationaux (peu nombreux) | 476 restaurants en propre | Sur place, app, livraison, traiteur |

**Le point de fragilité** : la **sécurité alimentaire des produits frais**. En juillet 2026, une épidémie de cyclosporose liée à de la salade d'un fournisseur tiers du secteur — CAVA n'utilisait pas les produits incriminés — a pourtant fait chuter la fréquentation, preuve que la chaîne est exposée à la **perception** du risque, et pas seulement au risque réel.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

CAVA publie **deux segments** : **CAVA** (les restaurants, plus de 99 % du CA) et **Autres** (grande distribution des dips et spreads). La société ne publie **ni EBITDA ni résultat net par segment** : l'indicateur de rentabilité par segment est le **résultat au niveau du restaurant** (« restaurant-level profit », avant frais de siège, amortissements et frais d'ouverture).

### Par segment — Exercices annuels

| Indicateur | 2023 | 2024 | 2025 |
|---|---|---|---|
| CA total | 728,7 M$ | 963,7 M$ | 1 179,7 M$ |
| dont segment CAVA | — | 954,3 M$ | 1 169,3 M$ |
| dont Autres (CPG) | — | ~9 M$ | ~10 M$ |
| Résultat restaurant (CAVA) | — | 238,1 M$ | 285,0 M$ |
| Marge restaurant | — | 25,0 % | 24,4 % |
| EBITDA ajusté (groupe) | — | 126,2 M$ | 152,8 M$ |
| Résultat net (groupe) | 13,3 M$ | 130,3 M$ | 63,7 M$ |

**Attention** : le résultat net 2024 est gonflé par un **produit fiscal non récurrent de 80,1 M$** (reprise de provision sur impôts différés). Hors cet effet, le résultat net ajusté passe de **50,2 M$ (2024) à 63,7 M$ (2025)**, soit **+27 %**.

---

### Par trimestre — La dynamique récente

| Trimestre | CA | Ventes comparables | Marge restaurant | EBITDA ajusté |
|---|---|---|---|---|
| T2 2025 | 280,6 M$ | +2,1 % | 26,3 % | 42,1 M$ |
| T3 2025 | 292,3 M$ | +1,9 % | 24,6 % | 40,1 M$ |
| T4 2025 | 275,0 M$ | +0,5 % | 21,4 % | 25,8 M$ |
| T1 2026 (16 sem.) | 438,3 M$ | +9,7 % | 25,1 % | 61,7 M$ |
| T2 2026 | 368,4 M$ | +9,0 % | 25,7 % | 54,7 M$ |

**Lecture** : 2025 a été une année de **digestion** (comparables à peine positifs après les +14 à +21 % de 2024), puis 2026 marque une **réaccélération nette**, tirée par le trafic (+6,8 % au T1, +5,3 % au T2) plutôt que par les prix. Attention au calendrier : le T1 compte 16 semaines, les autres trimestres 12.

---

### Structure de coûts du segment CAVA (T2 2026 vs T2 2025)

| Poste (% du CA restaurants) | T2 2025 | T2 2026 | Explication |
|---|---|---|---|
| Matières et emballages | 29,5 % | 30,0 % | Coût du saumon |
| Personnel | 25,0 % | 25,3 % | Hausse salariale de 3 % |
| Occupation | 6,8 % | 6,3 % | Effet de levier des ventes |
| Autres charges | 12,4 % | 12,8 % | Plus de livraison tierce |
| **Marge restaurant** | **26,3 %** | **25,7 %** | -60 pb |

---

### Répartition géographique

**100 % États-Unis.** Le berceau historique est la région de Washington (D.C., Maryland, Virginie). Le réseau s'étend aujourd'hui sur **29 États + D.C.**, avec l'entrée dans l'**Indiana et l'Ohio** au T2 2026, **Las Vegas** au second semestre 2026 et la **baie de San Francisco** prévue en 2027. Aucune ambition internationale n'a été annoncée.

### Répartition par canal

Le **digital** pèse **39 % du CA** au T2 2026 (37,9 % sur 2025, 36,4 % en 2024). La hausse de la part de la **livraison tierce** coûte environ 40 pb de marge restaurant au T2 2026.

**Conclusion** : un modèle **mono-segment, mono-pays et mono-marque** — simple à lire, mais sans aucun amortisseur si le concept s'essouffle.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats) — réels et en construction

### 1. Le leader d'une catégorie sans leader national — moat de marque
CAVA est la **seule chaîne nationale de taille significative** dans la cuisine méditerranéenne en libre composition. Chipotle a fait du mexicain une catégorie de masse ; CAVA tente la même chose avec le méditerranéen, perçu comme **sain, savoureux et généreux**. La direction parle de « marque qui définit sa catégorie ». C'est le moat le plus précieux — mais il dure tant que personne d'autre n'atteint l'échelle nationale.

### 2. Une économie unitaire supérieure — moat d'exécution
- **AUV de 3,09 M$** et en hausse (2,94 M$ un an plus tôt)
- **Marge restaurant de ~25 %**, comparable aux meilleurs du secteur
- **Nouveaux restaurants à plus de 100 % de la productivité moyenne** du parc, la cohorte 2024 étant la meilleure de l'histoire du groupe
Une telle économie unitaire **autofinance** l'expansion sans dette : c'est l'argument central des investisseurs de long terme.

### 3. L'intégration verticale des recettes signature
Les dips, sauces et vinaigrettes sont **fabriqués dans les ateliers de CAVA** (Maryland, Virginie). Cela garantit un goût difficile à copier à l'identique, une qualité constante et un savoir-faire qui alimente aussi l'activité de grande distribution.

### 4. La valeur perçue — le prix comme arme
Pendant que le secteur augmentait ses prix, CAVA les a **contenus** (+1,4 % début 2026, bol de base inchangé). Résultat : **trafic +6,8 % au T1 2026** quand Chipotle affichait **+0,6 %** et Sweetgreen **-11 %**. Dans une économie où le consommateur arbitre, CAVA gagne des parts de marché par le volume.

### 5. Un bilan de forteresse
**Zéro dette financière**, 436 M$ de trésorerie et placements, une ligne de crédit de 150 M$ non tirée. CAVA peut continuer d'ouvrir des restaurants même si les marchés financiers se ferment.

### 6. Les limites — ce qui n'est PAS un moat
- **Aucun coût de changement** : un client peut aller manger ailleurs dès demain
- **Recettes et format copiables** : la chaîne d'assemblage est un standard du secteur
- **Pas d'effet de réseau** : le moat repose sur la marque et l'exécution, deux actifs qui s'entretiennent en continu

## Positionnement vs concurrence

| Critère | CAVA | Chipotle | Sweetgreen |
|---|---|---|---|
| Restaurants | 476 | 3 900+ | ~250 |
| Ventes comparables (T1 2026) | +9,7 % | +0,5 % | ~-13 % |
| Trafic (T1 2026) | +6,8 % | +0,6 % | -11 % |
| Modèle | 100 % en propre | 100 % en propre | 100 % en propre |
| Dette financière | Aucune | Aucune | Faible |
| Marge nette | ~5 % | ~11 % | Proche de zéro |
| Potentiel d'ouvertures | Très élevé | Élevé | Ralenti |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **faible à modéré** — la marque permet de ne pas brader, mais la stratégie consiste justement à **ne pas** exploiter ce pouvoir de prix pour gagner du trafic
- **Vis-à-vis des fournisseurs** : **croissant** — l'échelle augmente chaque année, mais la dépendance à quelques fournisseurs et distributeurs reste un point de vulnérabilité
- **Vis-à-vis des bailleurs** : **en nette amélioration** — CAVA est devenue un locataire « vedette » qui attire du flux, ce qui ouvre de meilleurs emplacements et conditions
- **Vis-à-vis des plateformes de livraison** : **faible** — leurs commissions grignotent la marge à mesure que la livraison progresse
- **Vis-à-vis des salariés** : **sous tension** — hausse salariale de 3 % en 2026, déploiement des adjoints de direction sur 70 % du parc pour stabiliser les équipes`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Restauration rapide premium cotée (octobre 2026)

| Société | Code Bloomberg | Capitalisation (Md$) | EV/CA | EV/EBIT | P/E | Rendement div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **CAVA** | **CAVA US** | **~6,2** | **~4,2x** | **~74x** | **~96x** | **0 %** | **n.s. (pertes avant 2023 ; ~8 % sur 12 mois)** |
| Chipotle | CMG US | ~40 | ~3,1x | ~20x | ~28x | 0 % | ~40 % |
| Wingstop | WING US | ~3,3 | ~6x | ~25x | ~29x | ~1,1 % | n.s. (fonds propres négatifs) |
| Shake Shack | SHAK US | ~2,9 | ~1,9x | ~50x | ~68x | 0 % | ~3 % |
| Sweetgreen | SG US | ~0,7 | ~0,9x | n.s. | n.s. | 0 % | Négatif |

*Ordres de grandeur arrondis, établis à partir des cours du 9 octobre 2026 et des derniers comptes publiés. À affiner sur les dépôts SEC avant toute décision.*

---

### Analyse comparative

**Chipotle — Le modèle et la menace**
Chipotle est ce que CAVA rêve de devenir : 3 900+ restaurants, ~12 Md$ de CA, une marge nette de ~11 % et un ROE parmi les plus élevés du secteur. Mais Chipotle traverse un trou d'air (comparables quasi nuls début 2026, titre en baisse de ~20 % sur un an) et se paie désormais **~28 fois ses bénéfices**. Pour CAVA, c'est à la fois une **référence de valorisation** qui tire les multiples vers le bas et un **concurrent direct** sur le même format.

**Sweetgreen — Le contre-exemple**
Concept premium « sain » coté en 2021 comme CAVA, Sweetgreen illustre le **scénario du pire** : comparables en recul (guidance 2026 de -4 % à -2 %), pertes, cession de sa filiale robotique, capitalisation tombée sous 1 Md$. Il rappelle que **marque tendance ≠ moat durable**.

**Wingstop et Shake Shack — Les autres croissances du secteur**
Wingstop (modèle franchisé, très rentable mais très endetté) se paie ~29 fois ses bénéfices après une forte baisse ; Shake Shack ~68 fois, avec une rentabilité qui reste modeste.

---

### Le ratio qui compte
CAVA cote **~96 fois ses bénéfices des 12 derniers mois** et ~74 fois ceux attendus en 2027, contre ~28 fois pour Chipotle. Cette prime ne se justifie que par l'écart de croissance : **CA +31 % au T2 2026 et ~20 % d'ouvertures par an**, contre une croissance à un chiffre pour les pairs matures. Le bon indicateur de suivi est l'**EV/EBITDA ajusté (~32x sur 12 mois)**, qui baisse vite si l'EBITDA continue de croître de 25 à 30 % par an. À noter : sur ce critère, CAVA n'a **jamais été aussi bon marché depuis son introduction** (EV/CA ~4x contre ~18x au pic de fin 2024).`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 11 août 2026)

Trimestre de 12 semaines clos le 12 juillet 2026.

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Variation | Vs consensus |
|---|---|---|---|---|
| Chiffre d'affaires | 368,4 M$ | 280,6 M$ | +31,3 % | **Battu** (~360 M$ attendus, +1 à +2 %) |
| Ventes comparables | +9,0 % | +2,1 % | — | Supérieur |
| dont trafic | +5,3 % | — | — | — |
| dont prix et mix | +3,7 % | — | — | — |
| BPA dilué | 0,19 $ | 0,16 $ | +18,8 % | **Légèrement battu** (0,18 $ attendu) |
| Résultat net | 23,0 M$ | 18,4 M$ | +25,3 % | — |
| EBITDA ajusté | 54,7 M$ | 42,1 M$ | +30,0 % | — |
| Marge restaurant | 25,7 % | 26,3 % | -60 pb | — |

**Verdict** : un trimestre **solide en volume**, **un peu décevant en marge**.

---

### Facteurs clés

- **Croissance par le trafic** : +5,3 % de fréquentation, alors que la plupart des pairs perdent des clients
- **Saumon** : lancement national réussi, il attire de nouveaux clients et accroît la fréquence des membres fidèles, mais coûte ~50 pb de marge matière
- **Ouvertures** : 17 restaurants nets, 476 au total (+19,6 % sur un an), entrée dans l'Indiana et l'Ohio
- **Productivité des nouveaux restaurants** : supérieure à 100 % de la moyenne du parc ; AUV porté à 3,09 M$
- **Digital** : 39 % du CA

---

### Évolution des marges

- **Marge restaurant** : 25,7 % (-60 pb) sous l'effet du saumon (matières +50 pb), de la hausse salariale (+30 pb) et de la livraison tierce (+40 pb), partiellement compensés par l'occupation (-50 pb)
- **Frais de siège hors rémunérations en actions** : 9,3 % du CA contre 9,8 % — **levier opérationnel visible**
- **Résultat d'exploitation** : 26,8 M$ (+36,6 %), marge de 7,3 %
- **Résultat net** : progression limitée à +25 % par la **normalisation du taux d'impôt** (voir Red Flags)

---

### Perspectives et guidance 2026 (réaffirmée, non relevée)

| Indicateur | Février 2026 | Mai 2026 | Août 2026 |
|---|---|---|---|
| Ouvertures nettes | 74–76 | 75–77 | 75–77 |
| Ventes comparables | 3,0–5,0 % | 4,5–6,5 % | 4,5–6,5 % |
| Marge restaurant | 23,7–24,2 % | — | 23,7–24,3 % |
| EBITDA ajusté | 176–184 M$ | 181–191 M$ | 181–191 M$ |

**Changement de ton** : après le relèvement de mai, la direction a **maintenu** sa guidance en évoquant l'épidémie de cyclosporose de juillet (ventes comparables tombées près de zéro début juillet, revenues à un rythme de milieu de fourchette à un chiffre ensuite) et l'incertitude macroéconomique et géopolitique. Avec +9,4 % de comparables au premier semestre, la fourchette annuelle implique un **second semestre entre légèrement négatif et ~+3 à +5 %** selon la pondération retenue.

---

### Signaux du bilan et des flux

- **Trésorerie et placements** : 435,6 M$, **aucune dette**, ligne de crédit de 150 M$ non utilisée
- **Flux d'exploitation** (28 semaines) : 134,5 M$ (+36 %)
- **Investissements** : 89,7 M$ → **free cash-flow de 44,8 M$** (+104 %), qui sera moins favorable au second semestre avec l'accélération des chantiers
- **Pas de stocks ni de créances significatifs** : modèle encaissé comptant
- **Dépréciations d'actifs et cessions** : 3,9 M$ sur 28 semaines contre 2,7 M$ — à surveiller

---

### Réaction du marché

Le titre a bondi de **10 à 12 %** dans les échanges hors séance, avant que le gain **ne s'efface** dans les semaines suivantes : de ~66 $ fin août à **~53 $ début octobre**. Le marché a acheté le trafic mais a ensuite sanctionné l'absence de relèvement de guidance, la marge en léger recul et le ralentissement attendu au second semestre. Le consensus reste haussier (objectif moyen ~84 $), signe d'un écart inhabituel entre le **cours** et les **fondamentaux publiés**.

**Élément inhabituel** : CAVA a publié le **meilleur trafic du secteur** et a pourtant vu son cours baisser de ~20 % dans les deux mois suivants — un décalage qui traduit davantage une **compression de multiple** qu'une dégradation opérationnelle.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Évolution du ton — 2024 à 2026

**2024 — L'euphorie** : ventes comparables de +14 % au T2 puis +18 % au T3 et +21 % au T4, portées par le lancement du steak. Discours conquérant : « la catégorie méditerranéenne est en train de naître ».

**2025 — La gueule de bois** : comparables retombés à +2 % au T2, +1,9 % au T3 et +0,5 % au T4. La direction explique le ralentissement par des **bases de comparaison très élevées**, un **« effet lune de miel »** des ouvertures 2024 et la **prudence des jeunes consommateurs**. La guidance de comparables est abaissée deux fois. Le ton devient défensif mais reste ferme sur le plan d'ouvertures.

**Février 2026 — La reconquête** : la directrice financière Tricia Tolivar décrit CAVA comme un pont entre les deux branches d'une **économie « en K »**, rappelle le gel du prix du bol de base et annonce le saumon. Objectif réaffirmé : **1 000 restaurants d'ici 2032**.

**Mai 2026 — La confiance retrouvée** : comparables +9,7 %, trafic +6,8 %. Brett Schulman revendique une position de **« leader clair du secteur »** et relève la guidance.

**Août 2026 — Confiance prudente** : ton toujours assuré sur la marque et l'économie unitaire, mais guidance maintenue et vocabulaire plus mesuré (perturbations sanitaires, incertitudes macroéconomiques et géopolitiques).

---

### Priorités répétées du management

**1. Le trafic avant le prix** — Le message le plus constant : hausses de prix minimales pour **gagner des clients**, la marge suivant par le volume. Aucun changement de prix envisagé à court terme.

**2. L'innovation menu** — Steak (2024), saumon (2026), crevettes à l'ail en test, nouvelles vinaigrettes et chips de pita saisonnières : CAVA veut créer des **raisons de revenir** sans brader.

**3. La fidélité et le digital** — Le nombre de membres du programme progresse plus vite que le parc ; lancement du « Flavor Passport ».

**4. L'excellence opérationnelle** — Arrivée d'un nouveau directeur des opérations (ex-Texas Roadhouse) en mars 2026, adjoints de direction dans 70 % des restaurants, poulet pré-mariné, rénovations « Project Soul ».

**5. Les ouvertures** — 75 à 77 en 2026, nouveaux marchés (Ohio, Indiana, Las Vegas, baie de San Francisco), productivité supérieure à 100 %.

---

### Analyse du sentiment

- **Confiance** : élevée et constante sur la marque et l'économie unitaire — le management n'a jamais remis en cause le plan d'ouvertures, même au creux de 2025
- **Prudence** : nette sur les comparables du second semestre 2026 ; la direction préfère **sous-promettre** après les déceptions de 2025
- **Transparence** : bonne — les causes de l'érosion de marge (saumon, salaires, livraison) sont chiffrées poste par poste
- **Signal à surveiller** : aucune mention de rachat d'actions ni de dividende — tout le cash est réinvesti, ce qui est cohérent avec la phase de croissance

**À lire entre les lignes** : en ne relevant pas sa guidance malgré un T2 à +9 %, le management a **acheté de la marge de sécurité** pour le second semestre. Un T3 meilleur qu'attendu (publication le 2 novembre 2026) remettrait le discours en mode offensif.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Brett Schulman — Cofondateur, président et directeur général (depuis 2010)

**Bilan** : il a transformé un restaurant familial de mezze en **chaîne nationale de 476 restaurants**, avec à son actif :
- Le lancement du format de bols à composer (2011) et sa montée en puissance jusqu'à **1,18 Md$ de CA en 2025**
- L'**acquisition de Zoës Kitchen** (2018, ~300 M$), dont les restaurants ont été convertis en CAVA (conversion achevée en 2023) — un raccourci d'expansion qui a **accéléré de plusieurs années** la couverture du Sud-Est et du Texas
- L'**introduction en Bourse** de juin 2023 et le passage à la **rentabilité nette** dès 2023
- Une économie unitaire en amélioration constante (AUV de 2,9 M$ à 3,1 M$ en un an)

**Participation** : ~2,1 millions d'actions (1,8 % du capital, options comprises) — alignement **réel mais modeste** pour un cofondateur.

**Rémunération 2025** : salaire de 900 000 $, bonus de ~982 000 $ (pour une cible de 1,08 M$), plus des attributions en actions et options — dans la norme des sociétés de croissance de cette taille.

---

### Équipe dirigeante

| Dirigeant | Fonction | Depuis | Profil |
|---|---|---|---|
| Tricia Tolivar | Directrice financière | Nov. 2020 | A piloté l'introduction en Bourse |
| Ted Xenohristos | Directeur du concept (cofondateur) | Nov. 2020 | Chef, gardien de l'ADN culinaire |
| Doug Thompson | Directeur des opérations | Mars 2026 | Ex-directeur des opérations de Texas Roadhouse (2018-2021) |
| Kelly Costanza | Directrice des ressources humaines | Mai 2020 | — |

**Conseil d'administration** : présidé depuis 2018 par **Ronald Shaich**, fondateur de Panera Bread — une caution rare de savoir-faire dans la restauration de chaîne.

---

### Allocation du capital — Historique

| Indicateur | 2023 | 2024 | 2025 | 12 mois (juil. 2026) |
|---|---|---|---|---|
| Restaurants (fin de période) | ~309 | 367 | 439 | 476 |
| Résultat net ajusté | ~13 M$ | 50,2 M$ | 63,7 M$ | ~66 M$ |
| ROE (approx.) | ~2 % | ~7 % (ajusté) | ~8 % | ~8 % |
| Investissements | — | 108 M$ | 159 M$ | ~172 M$ |
| Free cash-flow | — | 52,9 M$ | 26,1 M$ | ~49 M$ |

**Lecture** : le capital est réinvesti **à 100 % dans les ouvertures**, sans dette, sans rachat d'actions ni dividende. Le ROE reste faible (~8 %) car la base de fonds propres est gonflée par l'introduction en Bourse et les restaurants récents n'ont pas atteint leur maturité. Le vrai juge de paix sera le **rendement par restaurant** (marge restaurant ~25 % sur un investissement initial élevé).

---

### Signaux d'alerte

- **Rotation à la direction** : départ de la directrice des opérations (septembre 2025) et du directeur juridique (avril 2026) — deux postes clés renouvelés en sept mois
- **Ventes d'initiés et de l'actionnaire historique** : Artal a cédé 3 millions d'actions à 90,30 $ en juin 2026 (participation ramenée à ~6,5 millions) ; une administratrice a vendu à 90 $. En sens inverse, le nouveau directeur des opérations a **acheté** 6 500 actions à 66,52 $ en septembre 2026
- **Conseil à renouvellement échelonné** (trois classes d'administrateurs) : protège la direction mais réduit le pouvoir des actionnaires
- **Parties liées** : aucune transaction significative identifiée dans la documentation consultée
- **Comportement promotionnel** : modéré — l'objectif de 1 000 restaurants est ambitieux, mais la guidance de court terme est désormais **prudente**

---

### Fondateur ou gestionnaire professionnel ?

**Profil fondateur.** Schulman et Xenohristos sont cofondateurs, et le conseil est présidé par un fondateur emblématique du secteur. À ce stade d'expansion, c'est un **atout** : vision de long terme, culture produit forte, refus de sacrifier la marque au trimestre. Le défi sera de **professionnaliser l'exploitation** d'un réseau qui double tous les trois à quatre ans — d'où l'importance de l'arrivée de Doug Thompson.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours depuis l'introduction en Bourse

### Contexte
Cotée depuis **juin 2023** seulement, l'action CAVA est **extrêmement volatile** : elle a été multipliée par près de huit entre son introduction et son plus haut de fin 2024 (~173 $), puis a perdu plus de 70 % en un an. Les mouvements sont dictés par les **ventes comparables trimestrielles** et par l'appétit du marché pour les valeurs de croissance.

### Hausses significatives (plus de 5 %)

**15 juin 2023 — Introduction en Bourse** : prix fixé à 22 $, le titre **double** dès la première séance (~44 $ en clôture), l'une des introductions les plus réussies de l'année.

**Août et novembre 2024 — L'effet steak** : ventes comparables de +14 % puis +18 %, trafic en forte hausse et relèvements successifs de guidance ; le titre atteint **~173 $** fin 2024, pour une valorisation proche de **18 fois le CA**.

**25 février 2026 — Le grand rebond (+24 %)** : comparables du T4 2025 positifs (+0,5 % contre un recul attendu), guidance 2026 rassurante, annonce du saumon et objectif de 1 000 restaurants.

**Avril 2026 — Plus haut annuel** : ~95 $ en clôture le 19 avril (98,79 $ en séance), dans l'anticipation d'un T1 très fort.

**20 mai 2026 — Relèvement de guidance (+6 à +7 %)** : comparables +9,7 %, trafic +6,8 %.

**12 août 2026 — Publication du T2 (+10 à +12 % hors séance)** : trafic +5,3 %, CA meilleur que prévu — un gain toutefois effacé en quelques jours.

**8 octobre 2026 — Relèvement de recommandation (+4,3 %)** : un bureau d'études passe à l'achat avec un objectif de 95 $, jugeant excessive la réaction du marché aux craintes sanitaires.

---

### Baisses significatives (plus de 5 %)

**Début 2025 — Dégonflement de la bulle** : malgré des comparables de +21 % au T4 2024, une guidance 2025 jugée prudente (+6 à +8 %) et la rotation hors des valeurs de croissance chères font chuter le titre sous les 100 $.

**13 août 2025 — Le choc (-22 %)** : comparables du T2 2025 à +2,1 % contre +6,1 % attendus et guidance annuelle abaissée de 6–8 % à 4–6 %.

**Novembre 2025 — Le point bas** : comparables du T3 à +1,9 %, nouvelle révision de guidance et vague de baisses d'objectifs des analystes ; plus bas sur 52 semaines à **~43 $**.

**Juin 2026 — Sorties d'actionnaires** : cession d'un bloc de 3 millions d'actions par Artal à 90,30 $ et vente d'une administratrice ; le titre décroche de ses sommets.

**Juillet 2026 — Le choc sanitaire** : une épidémie de cyclosporose liée à de la salade dans la chaîne d'approvisionnement d'**un autre restaurateur** effraie les consommateurs de produits frais ; CAVA n'est pas concernée mais son trafic recule. Le titre perd ~17 % sur le mois.

**Septembre 2026 — Le creux** : repli maximal de près de **49 %** depuis le plus haut (16 septembre), dans le sillage d'une guidance non relevée et de la baisse des valeurs de restauration (Chipotle, Wingstop).

---

### Facteurs structurels

- **Les ventes comparables comme seul juge** : chaque publication peut faire varier le titre de 10 à 25 %
- **Une valorisation élastique** : de 18 fois le CA (fin 2024) à ~4 fois (octobre 2026) — le multiple bouge bien plus que les fondamentaux
- **La contagion sectorielle** : le titre réagit aux difficultés de Chipotle, Sweetgreen et aux crises sanitaires de l'ensemble du secteur
- **L'actionnariat** : un flottant dominé par les institutionnels (Vanguard, BlackRock, Capital Research, AllianceBernstein, Artal ~8 % chacun avant la cession de juin) qui amplifie les mouvements de rotation`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du secteur** :
- Restauration rapide premium américaine : croissance faible à un chiffre en 2026, avec un trafic en recul chez la plupart des acteurs
- CAVA surperforme nettement : trafic +5 à +7 % en 2026

**Gains de parts de marché (ouvertures)** :
- ~76 ouvertures nettes en 2026 (parc ~515 fin 2026), puis ~85 en 2027 et ~95 en 2028
- Croissance du parc de **~17 à 18 % par an**, nouveaux restaurants à ~100 % de productivité

**Hausses de prix** :
- Politique de prix volontairement limitée : **+1 à +2 % par an**, l'essentiel de la croissance comparable venant du trafic et du mix
- Ventes comparables retenues : **+5,5 % en 2026, +3 à +4 % en 2027 et 2028**

**Pressions sur les coûts** :
- Protéines (saumon, bœuf), salaires (+3 %), surcoûts carburant, livraison tierce
- Marge restaurant maintenue **autour de 24 %** (guidance 2026 : 23,7–24,3 %)

**Levier opérationnel** :
- Frais de siège en baisse relative (9,3 % du CA au T2 2026 contre 9,8 %)
- Marge d'EBITDA ajusté : ~12,7 % en 2026, ~13,8 % en 2027, ~14,5 % en 2028

**Coûts de financement** :
- Aucune dette : **produits financiers** de 10 à 15 M$ par an sur la trésorerie, en légère baisse si les taux reculent

**Fiscalité** :
- Taux d'impôt normalisé de **~24 à 26 %** (contre un taux quasi nul en 2025) — un frein mécanique au BPA 2026

**Dilution** :
- Rémunérations en actions et options : **~1 % par an** de dilution (118,4 millions d'actions diluées au T2 2026)

---

### Estimations BPA

| Exercice | CA estimé | BPA estimé | Croissance | P/E au cours actuel (~53,5 $) |
|---|---|---|---|---|
| 2024 (réalisé, ajusté) | 963,7 M$ | **0,42 $** | — | — |
| 2025 (réalisé) | 1 179,7 M$ | **0,54 $** | **+29 %** | — |
| **2026E** | ~1,46 Md$ | **0,53-0,56 $** | **~0 à +4 %** | **~96-100x** |
| **2027E** | ~1,75 Md$ | **0,70-0,78 $** | **+33-40 %** | **~69-76x** |
| **2028E** | ~2,10 Md$ | **0,95-1,10 $** | **+36-41 %** | **~49-56x** |

**Consensus de marché** (octobre 2026) : 0,52 $ (2026), 0,72 $ (2027), 1,05 $ (2028). Nos estimations sont en ligne, légèrement au-dessus pour 2026.

**Pourquoi 2026 stagne** : la croissance du résultat avant impôt reste forte (+37 % au premier semestre), mais le passage d'un taux d'impôt quasi nul à ~23 % absorbe presque tout le gain. C'est un **effet comptable**, pas une dégradation opérationnelle.

---

### Sensibilité

- **Scénario optimiste** (comparables +6 %, marge restaurant 25 %, ouvertures accélérées) : BPA 2028 ~1,25 $ → P/E 2028 ~43x — la valorisation devient défendable pour une croissance de 25 % par an
- **Scénario de base** : BPA 2028 ~1,02 $ → P/E 2028 ~52x — prime élevée mais cohérente avec la trajectoire
- **Scénario pessimiste** (comparables nuls, marge restaurant 22 %, ouvertures ralenties) : BPA 2028 ~0,70 $ → P/E 2028 ~76x — aucune marge de sécurité

**Conclusion** : le BPA de CAVA devrait **doubler entre 2026 et 2028** si le plan d'ouvertures est tenu. Au cours actuel, l'investisseur paie ~50 fois les bénéfices 2028 : la thèse repose entièrement sur la **durée** de la croissance (1 000 restaurants et au-delà), pas sur les bénéfices des deux prochaines années.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Avantages concurrentiels et barrières à l'entrée
**1. Le « Chipotle du méditerranéen »** : CAVA est la seule marque nationale d'une catégorie en plein essor, perçue comme saine et généreuse. Atteindre 500 restaurants, des sauces fabriquées en propre et une marque reconnue demande **une décennie et des centaines de millions de dollars** : la barrière, c'est le temps.

**2. Une économie unitaire qui finance la croissance** : AUV de 3,1 M$, marge restaurant de ~25 %, nouveaux restaurants à plus de 100 % de productivité. Chaque ouverture crée de la valeur — et **aucune dette** n'est nécessaire.

### Leviers de croissance
**3. Une piste d'ouvertures immense** : de 476 restaurants à **1 000+ d'ici 2032**, soit plus qu'un doublement, avec des marchés entiers encore vierges (Midwest, Nevada, Californie du Nord). Chipotle compte ~3 900 restaurants : la catégorie méditerranéenne peut viser bien plus que 1 000.

**4. Un trafic qui défie le secteur** : +5,3 % au T2 2026 quand les concurrents perdent des clients. La stratégie « valeur » (prix contenus) gagne des parts de marché durables dans une économie en K.

**5. Des surprises possibles sur les bénéfices** : levier sur les frais de siège, poulet pré-mariné (productivité en cuisine), saturation progressive du coût du saumon, normalisation de la livraison. Chaque point de marge restaurant ajoute ~17 M$ d'EBITDA en 2027.

### Allocation du capital
**6. Discipline** : 100 % du cash réinvesti dans des restaurants à forte rentabilité, zéro dette, 436 M$ de trésorerie. Un fondateur aux commandes et un président de conseil bâtisseur de Panera.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques susceptibles de nuire durablement à l'activité

**1. Une crise sanitaire propre à CAVA** : le modèle repose sur des **produits frais** préparés en restaurant. L'exemple de Chipotle en 2015-2016 (comparables à -20 % et plus pendant des trimestres, des années pour reconquérir la confiance) montre qu'une seule crise peut **casser une marque de croissance**. L'épisode de juillet 2026 — sans même que CAVA soit en cause — a prouvé la sensibilité de son trafic.

**2. Le plafond du concept** : le méditerranéen pourrait rester une **niche urbaine** plutôt qu'une catégorie de masse. Les nouveaux marchés (Ohio, Indiana, Las Vegas) pourraient décevoir, et l'« effet lune de miel » observé sur les ouvertures 2024 pourrait se répéter, faisant baisser l'AUV.

**3. La compression des marges** : saumon, salaires, carburant et livraison tierce ont déjà coûté 60 pb de marge restaurant au T2. Si CAVA refuse d'augmenter ses prix pour défendre son trafic, la marge pourrait glisser durablement sous 23 %.

### Des attentes trop élevées ?
La guidance implique un second semestre 2026 entre légèrement négatif et ~+3 à +5 % de comparables. Le consensus attend un BPA en hausse de ~40 % en 2027 : toute rechute des comparables à 0-2 %, comme en 2025, invaliderait ce scénario.

### Analyse pré-mortem
Que s'est-il passé si CAVA cote **25 $ en 2029** ? Scénario : comparables négatifs deux années de suite, AUV en recul à 2,7 M$ dans les nouveaux marchés, marge restaurant à 21-22 %, ouvertures ramenées à 50 par an pour préserver le cash. Le BPA 2028 plafonne à ~0,60 $ et le marché, qui ne voit plus une valeur de croissance, applique un multiple de 40x.

### Les multiples sont-ils trop élevés ?
**Oui sur les bénéfices, non sur la trajectoire.** ~96x les bénéfices des 12 derniers mois et ~74x ceux de 2027 laissent peu de place à l'erreur, quand Chipotle cote ~28x. Mais en EV/CA (~4x contre ~18x fin 2024) et en EV/EBITDA (~32x sur 12 mois, ~19x 2028 en scénario de base), CAVA n'a jamais été aussi bon marché depuis son introduction.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le titre a perdu ~45 % depuis avril alors que CAVA publiait **le meilleur trafic du secteur** et que son EBITDA progressait de 30 %. Le marché traite CAVA comme une valeur « momentum » fragile, à la merci de la prochaine alerte sanitaire. Or l'épisode de juillet a surtout montré que CAVA **récupère en quelques semaines** (comparables revenus à un rythme de milieu de fourchette à un chiffre). Le vrai risque aujourd'hui n'est plus la valorisation — fortement dégonflée — mais l'exécution du plan d'ouvertures. Pour un investisseur de long terme, **la décote crée une fenêtre** que la publication du T3 (2 novembre 2026) pourrait refermer.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE FAIBLE
Ventes de restaurant encaissées au comptant et reconnues à la remise du repas. Seules zones de jugement : les **cartes cadeaux** (taux de non-utilisation) et les **points de fidélité** (valeur différée). Montants modestes au regard du CA.

**À surveiller** : la définition des **ventes comparables** (restaurants ouverts depuis une durée minimale) et le **calendrier inhabituel** (T1 de 16 semaines, puis trois trimestres de 12 semaines) qui complique les comparaisons d'un trimestre à l'autre.

### Information sectorielle — RISQUE MODÉRÉ
Un seul segment réellement significatif. L'indicateur phare, la **marge au niveau du restaurant** (~25 %), est un indicateur **non normé** qui exclut frais de siège, amortissements, frais d'ouverture et dépréciations. Le résultat d'exploitation réel n'est que de **~7 % du CA** au T2 2026. L'écart entre les deux est normal dans le secteur mais doit être gardé en tête.

### Contrats de location — RISQUE MODÉRÉ
Tous les restaurants sont **loués**, sur des baux longs généralement sans clause de sortie anticipée. Les passifs locatifs constituent **l'essentiel des 658 M$ de passif total** : CAVA est sans dette financière, mais **pas sans engagements**. Une fermeture de restaurant non rentable laisse un loyer à payer jusqu'au terme du bail.

**À surveiller** : la progression des **dépréciations d'actifs et cessions** (4,9 M$ en 2025 ; 3,9 M$ sur 28 semaines en 2026 contre 2,7 M$), premier signe de restaurants sous-performants.

### Parties liées — RISQUE FAIBLE
Aucune transaction significative avec des parties liées n'est ressortie de la documentation consultée. Le président du conseil (fondateur de Panera) et l'actionnaire historique Artal ne font pas l'objet de flux d'affaires notables identifiés. À vérifier chaque année dans le document de procuration.

### Engagements conditionnels — RISQUE MODÉRÉ
- **Litiges sociaux** : le rapport annuel mentionne des procédures passées en droit du travail — un risque classique de la restauration
- **Sécurité alimentaire** : risque de responsabilité et de réputation non provisionné par nature
- **Dépendance fournisseurs** : sources uniques sur certains intrants

### Rémunération en actions — RISQUE MODÉRÉ
Environ **23 M$ sur 12 mois** (~1,7 % du CA), soit **plus d'un tiers du résultat net**. L'EBITDA ajusté la réintègre : c'est pourquoi l'écart entre EBITDA ajusté (~182 M$) et résultat net (~66 M$) est si large. Dilution limitée (~1 % par an), mais à suivre.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
L'acquisition de Zoës Kitchen (2018) est ancienne et les restaurants ont été convertis. Le goodwill résiduel est **modeste** au regard du bilan ; pas de risque de dépréciation massive comparable à celui d'un groupe consolidateur.

### Fiscalité — POINT D'ATTENTION
- **2024** : résultat net gonflé par une **reprise de provision fiscale de 80,1 M$** (non récurrente)
- **2025** : taux d'impôt **quasi nul**, grâce notamment aux déductions liées aux levées d'options
- **2026** : retour à un taux normal (~23 % au premier semestre) → le résultat avant impôt progresse de **~37 %** quand le résultat net ne progresse que de **~6 %**
Les comparaisons de BPA d'une année sur l'autre sont donc **trompeuses** sans retraitement.

### Flux de trésorerie vs résultat — RISQUE FAIBLE À MODÉRÉ
Le flux d'exploitation (~220 M$ sur 12 mois) dépasse largement le résultat net grâce aux amortissements et au modèle encaissé comptant — c'est sain. Mais le **free cash-flow reste mince** (~49 M$ sur 12 mois, ~3,6 % du CA) car presque tout est réinvesti dans les ouvertures. Les **placements à la juste valeur** (112,8 M$) sont à suivre dans leur composition.

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** CAVA est auditée par **Deloitte**, sans dette ni goodwill problématique, avec un modèle encaissé comptant. Les vigilances portent sur **la lecture** des chiffres plutôt que sur leur sincérité : indicateurs ajustés (marge restaurant, EBITDA ajusté hors rémunérations en actions), **distorsions fiscales** d'une année sur l'autre, **engagements locatifs** hors dette financière et progression des **dépréciations de restaurants**.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Brett Schulman, classées par ordre d'importance

### Les questions qui conditionnent la thèse

**1.** Votre objectif de 1 000 restaurants d'ici 2032 suppose de presque doubler le parc en six ans. **Quelle est la performance des restaurants ouverts hors de vos marchés historiques** (Midwest, Ohio, Indiana) par rapport à la moyenne du parc, et à partir de quel niveau d'AUV ralentiriez-vous les ouvertures ?

**2.** La cohorte 2024 a connu un « effet lune de miel » suivi d'un tassement en 2025. **Comment vous assurez-vous que la productivité supérieure à 100 % des ouvertures 2025-2026 est durable**, et non un pic d'ouverture qui s'érode en deuxième année ?

**3.** Votre guidance implique des ventes comparables entre légèrement négatives et ~+3 à +5 % au second semestre 2026. **Quelle part de ce ralentissement vient des bases de comparaison, et quelle part d'un vrai ralentissement de la demande ?**

### Avantage concurrentiel

**4.** Vous refusez d'augmenter vos prix pour gagner du trafic. **Jusqu'à quel niveau de marge restaurant êtes-vous prêt à descendre** pour défendre cette stratégie, et à quel moment la répercussion des coûts deviendrait-elle inévitable ?

**5.** Qu'est-ce qui empêche Chipotle, ou un concurrent financé par le capital-investissement, de **lancer une offre méditerranéenne** à grande échelle ? Quel est, selon vous, le délai d'avance de CAVA ?

**6.** Le saumon a coûté ~50 pb de marge matière. **Quels sont les résultats chiffrés** des nouveautés (fréquence, panier, nouveaux clients) qui justifient ce coût, et le saumon restera-t-il au menu après 2026 ?

### Risques

**7.** L'épisode de cyclosporose de juillet a fait plonger le trafic sans que CAVA soit en cause. **Quels investissements concrets en sécurité alimentaire** (traçabilité, tests, plan de crise) avez-vous engagés, et quel serait l'impact d'une crise touchant directement vos restaurants ?

**8.** La part de la livraison tierce augmente et coûte déjà ~40 pb de marge. **Comment comptez-vous ramener ces commandes vers votre propre application** et votre programme de fidélité ?

**9.** Certains intrants proviennent de fournisseurs uniques et votre logistique repose sur peu de distributeurs. **Quel est votre plan de continuité** en cas de défaillance de l'un d'eux ?

### Allocation du capital

**10.** Avec 436 M$ de trésorerie, zéro dette et un titre en baisse de près de 45 % depuis avril, **avez-vous envisagé un programme de rachat d'actions**, ou chaque dollar restera-t-il affecté aux ouvertures ?

**11.** Quel est aujourd'hui le **coût d'investissement moyen d'un nouveau restaurant** et le délai de retour sur investissement que vous visez ? Comment ces chiffres évoluent-ils dans les nouveaux marchés plus chers comme la baie de San Francisco ?

**12.** Les dépréciations d'actifs augmentent (3,9 M$ sur 28 semaines). **Combien de restaurants sont aujourd'hui sous le seuil de rentabilité** et quelle est votre politique de fermeture ?

### Vision long terme et gouvernance

**13.** Deux postes clés (opérations, juridique) ont changé de titulaire en sept mois. **Qu'est-ce qui a motivé ces départs** et comment l'arrivée de Doug Thompson modifie-t-elle l'exploitation ?

**14.** Le traiteur, la grande distribution et l'international sont-ils des **relais de croissance réels** à l'horizon 2030, ou restent-ils des options marginales ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Ce qui peut casser le modèle : une marque de produits frais à la merci d'une crise
Tout le modèle repose sur la **confiance** : légumes frais, viandes marinées, sauces préparées. Chipotle a mis des années à se remettre des crises de 2015-2016. En juillet 2026, une épidémie **chez un concurrent** a suffi à faire tomber les comparables de CAVA près de zéro. Imaginez une crise **chez CAVA**. Les haussiers présentent la sécurité alimentaire comme un risque de queue ; c'est en réalité le **risque central** d'un concept de produits frais en croissance rapide, où chaque nouvelle équipe est une nouvelle source d'erreur.

### 2. La concentration totale des revenus
**Un seul pays, une seule marque, une seule cuisine, un seul format.** Aucun segment amortisseur, aucune franchise, aucune activité internationale. Le cœur du chiffre d'affaires reste concentré dans les marchés historiques (région de Washington, Sud-Est, Texas). Si la mode méditerranéenne passe — comme les salades premium chez Sweetgreen — il n'y a **rien d'autre**.

### 3. Un avantage concurrentiel plus fragile qu'il n'y paraît
- **Aucun coût de changement** : le client paie à chaque repas et peut partir le lendemain
- **Format copiable** : la chaîne d'assemblage est le standard du secteur
- **Une stratégie de prix qui sacrifie la marge** : CAVA achète son trafic en refusant d'augmenter ses prix ; dès qu'elle devra répercuter ses coûts, l'écart de trafic avec les pairs pourrait se refermer
- **Le précédent Sweetgreen** : même profil (marque « saine », introduction en Bourse euphorique), et un effondrement des comparables en 2026

### 4. Le concurrent le plus dangereux : Chipotle
Les haussiers voient Chipotle comme un modèle ; c'est surtout une **menace**. Même format, même clientèle, 3 900 restaurants, un budget marketing sans commune mesure et un bilan sans dette. Chipotle cherche désespérément à relancer son trafic : une offensive promotionnelle, un menu méditerranéen ou une baisse de prix ciblée sur les marchés de CAVA suffirait à **comprimer sa croissance**.

### 5. L'allocation du capital — les angles morts
- **100 % du cash dans les ouvertures** : la stratégie est cohérente, mais elle rend CAVA **dépendante de la réussite de chaque nouveau marché**. Des ouvertures dans des zones à coût élevé (baie de San Francisco) pourraient détruire du rendement
- **Pas de rachat** malgré 436 M$ de trésorerie et un titre divisé par trois depuis 2024
- **Dépréciations en hausse** : les premiers restaurants sous-performants apparaissent dans les comptes

### 6. Gouvernance et incitations
- **Conseil échelonné** qui protège la direction
- **Départs de dirigeants clés** (opérations en 2025, juridique en 2026)
- **L'actionnaire historique vend** : Artal a cédé 3 millions d'actions à 90 $ en juin 2026
- **Rémunérations en actions** équivalentes à plus d'un tiers du résultat net, réintégrées dans l'EBITDA ajusté mis en avant
Aucune transaction avec parties liées ni comptabilité agressive identifiées — le risque est d'**incitation** (croissance des ouvertures plutôt que rendement), pas de fraude.

### 7. Ce qu'il faut croire pour justifier 53 $
- **1 000 restaurants en 2032** avec un AUV maintenu à 3 M$ ou plus
- **Marge restaurant ≥ 24 %** malgré les hausses de coûts
- **Marge d'EBITDA ajusté vers 17-18 %** à maturité
- **BPA 2030 de ~1,8 à 2 $** et un multiple de 35 à 40x à cet horizon
Chacune de ces hypothèses est plausible ; leur **conjonction** l'est beaucoup moins.

### 8. Si la croissance déçoit de 20 à 30 %
Avec des ouvertures et des comparables inférieurs de 20 à 30 % aux attentes, le BPA 2028 tombe à **~0,75-0,80 $** au lieu de ~1,05 $. Un marché qui ne voit plus une histoire de croissance appliquerait **~40x**, soit un cours de **~30-32 $** : **-40 % environ** par rapport au cours actuel.

### 9. Le scénario catastrophe unique
**Une crise sanitaire grave et médiatisée dans des restaurants CAVA**, au moment où le réseau s'étend dans des marchés où la marque est encore inconnue. Conséquences : comparables à -15 % ou pire pendant plusieurs trimestres, gel des ouvertures, marge restaurant sous 20 %, perte du statut de valeur de croissance. **Probabilité** : faible mais non négligeable (~10 % à cinq ans) pour un réseau de produits frais qui ouvre ~80 restaurants par an.

### Conclusion short
CAVA est un **excellent concept** et une entreprise saine — sans dette, rentable, en croissance de 30 %. Mais l'action se paie encore **~96 fois les bénéfices** pour un modèle mono-marque, mono-pays, vulnérable à une crise sanitaire et confronté à un géant qui cherche à relancer son trafic. La baisse de 45 % depuis avril n'a pas supprimé le risque : elle a seulement **réduit la prime d'optimisme**.`,
  },
];

export default { ...meta, modules };
