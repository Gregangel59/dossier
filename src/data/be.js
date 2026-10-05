// ============================================================
//  DOSSIER : Bloom Energy Corporation (BE)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Données publiées jusqu'au 30 septembre 2026
//  (cours de référence : clôture du 29 septembre 2026).
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "be",                       // identifiant d'URL : /dossier/be
  ticker: "BE",
  name: "Bloom Energy Corporation",
  exchange: "NYSE",
  sector: "Production d'électricité sur site (piles à combustible SOFC)",
  initials: "BE",                   // affiché dans la pastille
  tagline: "Des piles à combustible à oxyde solide qui livrent l'électricité des data centers IA en mois, pas en années.",
  riskScore: 66,                    // score du rapport de risque (grille v1)
  riskLabel: "Risque modéré",       // indicatif : la couleur se dérive toujours de riskScore
  // Nom du fichier HTML déposé dans public/rapports/ :
  riskReport: "be.html",
  updated: "2026-09",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Bloom Energy conçoit, fabrique, installe et entretient des **piles à combustible à oxyde solide (SOFC)** qui produisent de l'électricité **directement sur le site du client**, sans combustion, à partir de gaz naturel, de biogaz ou d'hydrogène. Fondée en 2001 sous le nom d'Ion America par **KR Sridhar**, toujours PDG, l'entreprise est cotée au NYSE depuis juillet 2018. Son siège est à San Jose et sa principale usine à Fremont, en Californie.

En termes simples : Bloom vend **du temps**. Là où un raccordement au réseau électrique peut prendre plusieurs années pour un grand data center, Bloom livre des blocs de production modulaires en quelques semaines ou quelques mois — un déploiement pour Oracle a été mis en service en 55 jours au lieu des 90 prévus. L'électricité produite coûte souvent plus cher que celle du réseau ; le client paie pour l'accès immédiat et la fiabilité.

Le chiffre d'affaires se décompose en quatre lignes :
- **Produit** : vente des Energy Servers — **935,4 M$ au T2 2026, soit ~88 % du CA** (+215 % sur un an)
- **Installation** : pose et mise en service des systèmes sur site
- **Service** : contrats de maintenance pluriannuels et remplacement périodique des piles — marge brute non-GAAP de 22 % au T2 2026, positive depuis plus de deux ans
- **Électricité** : ventes d'électricité via des structures de financement (contrats d'achat d'électricité de long terme)

**Ordres de grandeur** : CA 2025 de 2,02 Md$ (+37,3 %), T2 2026 de **1 065,4 M$ (+165,5 %)**, premier trimestre au-dessus du milliard de l'histoire du groupe. Prévision 2026 relevée à **3,9–4,2 Md$**, soit ~100 % de croissance au point médian. Base installée d'environ 1,4 GW sur plus de 1 000 sites dans neuf pays à fin 2025.

## Principaux produits et services

- **Bloom Energy Server (SOFC)** : modules de quelques centaines de kW, empilables jusqu'à plusieurs centaines de MW. Toutes les livraisons sont compatibles avec le **courant continu 800 V** depuis fin 2025, le standard vers lequel migrent les baies de calcul IA de nouvelle génération.
- **Étude 800 V du 16 septembre 2026** : pour un data center d'1 GW, Bloom modélise une baisse de 27 % des investissements hors calcul (~3,6 Md$) et de 9 % du coût total de possession sur cinq ans (~5,5 Md$). Il s'agit d'une modélisation interne, dépendante des hypothèses de site.
- **Électrolyseurs à oxyde solide et captage de carbone** : options technologiques, marginales dans le CA actuel.
- **Services** : maintenance, garanties de disponibilité et de rendement, renouvellement des empilements de cellules.
- **Écosystème de financement** : Bloom ne porte pas les actifs à son bilan. Le client achète directement ou passe par un tiers financeur — **Brookfield** a porté son cadre de financement de 5 Md$ (octobre 2025) à **25 Md$ (30 juin 2026)**.

## Clients, fournisseurs, concurrents

**Clients** : le moteur est désormais l'IA. **Oracle** (accord-cadre jusqu'à 2,8 GW, dont 1,2 GW contractés et en cours de déploiement) ; **AEP** (accord d'environ 2,65 Md$ portant sur jusqu'à 1 GW) ; **Nebius** (328 MW) ; **Aligned Data Centers** (projet Phoenix de 2 GW, cité par RBC). Base historique en commercial et industriel : distribution, santé, éducation, télécoms, industrie ; partenariat coréen de longue date avec SK ecoplant.

**Concentration** : selon le 10-Q/A du 29 juillet 2026, **un seul client a représenté 73 % du CA du T2 2026** (non nommé ; il peut s'agir d'une structure de financement plutôt que de l'utilisateur final). Les États-Unis pèsent ~90 % du CA contre 59 % un an plus tôt.

**Fournisseurs** : céramiques et zircone stabilisée (dont le **scandium**, au cœur d'une controverse), métaux spéciaux, électronique de puissance, sous-traitance de précision (MTAR Technologies en Inde) ; le gaz est acheminé par des opérateurs de pipelines (Energy Transfer pour le projet Jupiter).

**Concurrents** : turbines à gaz (**GE Vernova**, Siemens Energy, Mitsubishi Heavy), moteurs alternatifs (**Caterpillar**, Cummins, Wärtsilä), autres piles à combustible (FuelCell Energy, Doosan Fuel Cell, Ceres Power sous licence), et à plus long terme le réseau lui-même et les petits réacteurs nucléaires.

## Modalités contractuelles

- **Ventes de produits** : CA reconnu à la livraison ou à l'acceptation ; acomptes et produits constatés d'avance en hausse (233 M$ à fin mars 2026 contre 144 M$ fin 2025).
- **Financement par des tiers** : le financeur achète les systèmes et vend l'électricité au client final sur 10 à 20 ans ; Bloom conserve des **garanties de performance et de disponibilité**.
- **Accords-cadres (MSA)** : formulés en « jusqu'à » — seule la tranche contractée est ferme. Sur les 2,8 GW d'Oracle, **1,2 GW** sont engagés.
- **Incitations aux clients** : Oracle a reçu un bon de souscription (3,53 M d'actions à 113,28 $), comptabilisé en **réduction du chiffre d'affaires** au fil des livraisons.

**Lecture** : Bloom est passée en 18 mois d'un fournisseur de niche du commercial et industriel à une **infrastructure critique de l'IA**, avec des résultats désormais bénéficiaires en normes GAAP. Le revers : un portefeuille de clients très concentré et un modèle dont la valeur repose sur la rareté de l'électricité réseau.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Bloom Energy dans la chaîne de valeur

Bloom occupe une position de **fabricant-intégrateur** : elle transforme des matériaux céramiques et métalliques en systèmes de production électrique, les installe, puis les entretient pendant toute leur durée de vie. Elle ne produit pas le combustible, ne porte pas les actifs et ne revend pas l'électricité en direct à grande échelle — ce sont respectivement le rôle des gaziers, des financeurs et des exploitants de data centers.

### Amont — Matières, composants et combustible

**Matériaux de la pile** :
- **Zircone stabilisée au scandium** (électrolyte) — le scandium est un métal rare, produit en faible volume dans le monde, majoritairement en Chine
- Nickel, aciers inoxydables et alliages chromés (interconnecteurs), céramiques techniques
- Électronique de puissance et onduleurs — la pénurie mondiale de composants électroniques de 2026 n'a pas, selon le 10-Q, affecté la production

**Sous-traitance** : usinage et assemblages de précision, notamment **MTAR Technologies** (Inde, commande d'environ 44 M$ en 2025).

**Combustible** : gaz naturel acheminé par pipeline. Pour le projet Jupiter au Nouveau-Mexique, le gazoduc de 17,8 miles d'**Energy Transfer** a été repoussé au 1ᵉʳ février 2027 après deux refus de tracé par le New Mexico State Land Office.

---

### Bloom Energy — Fabrication et déploiement

**Usine de Fremont** : capacité portée de 1 GW à **2 GW par an d'ici fin 2026**, extensible à ~5 GW sur le même site. Chaque gigawatt supplémentaire demande **6 à 9 mois et 100 à 150 M$** d'investissement — un capex remarquablement faible pour de la production électrique.

**Installation et mise en service** : équipes Bloom et partenaires d'ingénierie ; délais de quelques semaines à quelques mois selon la taille du site.

**Maintenance** : parc de 1,4 GW installé suivi à distance, remplacement périodique des empilements de cellules.

---

### Financement — Le maillon qui débloque la demande

- **Brookfield** : cadre porté à **25 Md$** (juin 2026), adossé à son fonds d'infrastructure IA de 100 Md$
- **Blue Owl Capital** : développeur et financeur du campus Jupiter (via une filiale)
- Banques et fonds d'infrastructure pour les contrats d'achat d'électricité du segment commercial

---

### Aval — Clients finaux

**Hyperscalers et clouds IA** : **Oracle** (et, derrière lui, le programme Stargate d'**OpenAI** pour Jupiter), **Nebius**, **Aligned Data Centers**, **Equinix** (client historique).

**Utilities** : **AEP**, qui revend la capacité à ses propres grands clients industriels et numériques.

**Commercial et industriel** : sites de distribution, hôpitaux, universités, usines, opérateurs télécoms ; à l'international, **SK ecoplant** en Corée du Sud.

---

### Cartographie du flux

| Étape | Acteurs | Rôle |
|---|---|---|
| Matières | Producteurs de scandium, zircone, nickel, aciers | Électrolyte et structure de la pile |
| Composants | MTAR Technologies, fournisseurs d'électronique | Pièces de précision, conversion de puissance |
| Fabrication | **Bloom Energy (Fremont)** | Cellules, empilements, Energy Servers |
| Financement | Brookfield, Blue Owl, banques | Achat des systèmes, contrats de long terme |
| Combustible | Energy Transfer et opérateurs gaziers | Acheminement du gaz naturel |
| Utilisateurs | Oracle, OpenAI (Stargate), AEP, Nebius, Aligned, Equinix, SK ecoplant | Consommation de l'électricité sur site |

---

### Le point de friction : le scandium

Le 8 juillet 2026, le média d'investigation **Hunterbrook** a affirmé avoir identifié quatre routes d'approvisionnement en scandium d'origine chinoise transitant par la Thaïlande, le Japon et la Corée du Sud, citant un représentant de **Hunan Oriental Scandium**. Bloom rejette ces conclusions, affirme ne pas dépendre de la Chine et disposer d'une visibilité sur du scandium suffisant pour **25 GW par an**. Une action collective en valeurs mobilières a été déposée sur la base de ces allégations. L'enjeu n'est pas seulement juridique : dans un contexte de droits de douane et de restrictions d'exportation, la **sécurité d'approvisionnement en scandium** est la seule vraie contrainte physique du modèle, au-delà de la capacité d'usine.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Bloom Energy ne publie qu'**un seul secteur opérationnel**. Il n'existe donc pas d'EBITDA ni de résultat net par segment dans les comptes. La ventilation disponible porte sur les **lignes de revenus** (produit, installation, service, électricité), sur les **marges brutes par ligne** et sur la **géographie**. Les chiffres ci-dessous sont consolidés.

### Par nature de revenus

| Ligne | T2 2025 | T2 2026 | Tendance |
|---|---|---|---|
| Produit | 296,6 M$ | **935,4 M$** | +215 %, moteur quasi exclusif |
| Installation, service, électricité | 104,6 M$ | 130,0 M$ | +24 %, part en recul |
| **Total** | **401,2 M$** | **1 065,4 M$** | **+165,5 %** |

**Marges brutes non-GAAP par ligne** : produit **37,2 %** au T2 2026 (35,3 % au T1) ; service **22 %** au T2 (18 % au T1, 4,8 % au T1 2025). Le service, longtemps déficitaire, contribue désormais positivement.

### Trajectoire trimestrielle consolidée

| Trimestre | CA | Croissance a/a | Marge brute non-GAAP | Rés. opérationnel non-GAAP | EBITDA ajusté |
|---|---|---|---|---|---|
| T1 2025 | 326,0 M$ | +38,6 % | 28,7 % | 13,2 M$ | 25,2 M$ |
| T2 2025 | 401,2 M$ | +19,5 % | 28,2 % | 28,6 M$ | 41,2 M$ |
| T3 2025 | 519,0 M$ | +57 % | 30,4 % | 46,2 M$ | n.c. |
| T4 2025 | 777,7 M$ | +35,9 % | 31,9 % | 133,0 M$ | 146,1 M$ |
| T1 2026 | 751,1 M$ | +130,4 % | 31,5 % | 129,7 M$ | 143,0 M$ |
| T2 2026 | **1 065,4 M$** | **+165,5 %** | **34,3 %** | **239,6 M$** | **253,4 M$** |

**Résultat net attribuable (GAAP)** : perte au T2 2025 (BPA de −0,18 $), puis **70,7 M$ au T1 2026 et 196,3 M$ au T2 2026**. L'exercice 2025 est le premier à dégager un résultat opérationnel GAAP positif sur l'année (72,8 M$).

### Pourquoi ces chiffres ont bougé

- **Mix data centers** : les commandes IA sont des blocs de plusieurs dizaines à centaines de MW, livrés en série — d'où l'explosion des ventes de produits.
- **Effet d'échelle** : l'usine absorbe des volumes deux à trois fois supérieurs avec une structure de coûts fixes modestement plus lourde ; le levier opérationnel porte la marge opérationnelle non-GAAP de 7,1 % à 22,5 % en un an.
- **Réduction des coûts unitaires** : programmes de productivité et hausse des prix de vente sur les commandes récentes (Mizuho évoque un « pricing » plus ferme).
- **Service** : fin des contrats historiques déficitaires et meilleure fiabilité des piles.

---

### Répartition géographique

| Zone | Il y a un an | 10-Q du T2 2026 | Lecture |
|---|---|---|---|
| États-Unis | ~59 % | **~90 %** | Hyperscalers et utilities américains |
| Corée du Sud et reste du monde | ~41 % | ~10 % | Recul relatif, pas forcément absolu |

**Point clé** : la croissance est devenue **quasi exclusivement américaine et concentrée sur quelques clients**. La diversification internationale (Corée, Inde, Japon, Europe) existe commercialement mais pèse peu aujourd'hui.

---

### Perspectives 2026 (prévision du 28 juillet)

- CA **3,9–4,2 Md$** ; marge brute non-GAAP **~34 %** ; résultat opérationnel non-GAAP **800–900 M$** (~21 % de marge) ; BPA non-GAAP **2,55–2,85 $**
- Le premier semestre (1,82 Md$ de CA, 369 M$ de résultat opérationnel non-GAAP) implique un second semestre d'environ **2,2 Md$** de CA : la trajectoire suppose une stabilisation autour d'1,1 Md$ par trimestre.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. Le délai de mise sous tension — moat FORT, mais conjoncturel
C'est l'avantage décisif. Le réseau américain est saturé : les files d'attente de raccordement se comptent en années et les turbines à gaz de grande taille sont réservées jusqu'à la fin de la décennie. Bloom livre en **semaines ou mois**, par blocs modulaires, sans permis de combustion lourde. Pour un hyperscaler qui immobilise des milliards de dollars de GPU, chaque mois de retard coûte plus cher que le surcoût de l'électricité. **Limite** : cet avantage dépend de la rareté de l'électricité réseau. Si les goulets d'étranglement se résorbent (nouvelles lignes, turbines disponibles, nucléaire), la prime de vitesse s'érode.

### 2. Technologie et courbe d'apprentissage — moat RÉEL
Plus de 20 ans de R&D, plus de 1 000 brevets, un rendement électrique élevé sans combustion (émissions locales de NOx et de particules quasi nulles, ce qui facilite les autorisations en zone urbaine) et une architecture **800 V DC native** alignée sur les baies IA de nouvelle génération. La fiabilité des empilements de cellules — longtemps le point faible — s'est nettement améliorée, comme le montre la marge de service passée de ~5 % à 22 % en cinq trimestres.

### 3. Capacité industrielle modulaire — moat RÉEL mais copiable à terme
2 GW par an fin 2026, extensibles à ~5 GW sur le même site pour **100 à 150 M$ par gigawatt**. Aucun autre fabricant de piles SOFC n'opère à cette échelle aux États-Unis. Un concurrent bien capitalisé pourrait toutefois construire une usine comparable en deux à trois ans.

### 4. Écosystème de financement — moat RÉEL
Le cadre **Brookfield à 25 Md$** transforme un achat d'équipement en service d'électricité clés en main pour le client. C'est une barrière commerciale : peu de concurrents de la pile à combustible disposent d'un partenaire financier de cette taille.

### 5. Base installée et service — moat en construction
1,4 GW installés génèrent des revenus de service récurrents et une connaissance opérationnelle difficile à répliquer. Le contrat de service long terme verrouille partiellement le client.

## Positionnement vs concurrence

| Critère | Bloom (SOFC) | Turbines à gaz | Moteurs alternatifs | Réseau électrique |
|---|---|---|---|---|
| Délai de déploiement | Semaines à mois | 3 à 6 ans (grandes unités) | Mois | Plusieurs années |
| Émissions locales | Très faibles | Élevées | Élevées | Nulles sur site |
| Rendement électrique | Élevé | Moyen à élevé (cycle combiné) | Moyen | n.a. |
| Coût du kWh | Élevé | Plus faible à grande échelle | Moyen | Le plus faible |
| Modularité | Très forte | Faible | Forte | Nulle |
| Dépendance au gaz | Oui | Oui | Oui | Non |

**Valeur perçue et image de marque** : Bloom est devenue, pour les acheteurs d'infrastructure IA, synonyme d'« électricité rapide ». Le marketing est porté par des références prestigieuses (Oracle, AEP, Brookfield) plus que par la publicité. Le récit « énergie propre » de 2018-2021 s'est effacé au profit d'un récit de disponibilité.

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Modéré à élevé tant que l'électricité est rare** — les hausses de prix récentes le prouvent. Mais les clients sont peu nombreux et puissants (Oracle a obtenu un bon de souscription d'actions en échange de son engagement), ce qui plafonne ce pouvoir.
- **Vis-à-vis des fournisseurs** : **Élevé** pour les composants standard, **faible** pour le scandium, dont l'offre mondiale est étroite et géographiquement concentrée.
- **Vis-à-vis des financeurs** : **Interdépendance** — Brookfield a besoin des actifs de Bloom pour déployer son fonds IA, Bloom a besoin du capital de Brookfield pour convertir ses commandes.
- **Vis-à-vis des gaziers** : **Faible** — le projet Jupiter montre qu'un gazoduc retardé bloque un déploiement entier.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Production d'électricité pour data centers (septembre 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E | Rdt div. | ROE moy. 5 ans |
|---|---|---|---|---|---|---|---|
| **Bloom Energy** | **BE US** | **~86 Md$** | **~27× (TTM)** | **~240× (GAAP TTM)** | **~320× TTM · ~106× 2026e** | **0 %** | **négatif** |
| GE Vernova | GEV US | ~255 Md$ | ~6× | ~70× | ~28× TTM · ~46× fwd | ~0,2 % | n.s. (cotée depuis 2024) |
| Caterpillar | CAT US | ~390 Md$ | ~5,5× | ~33× | ~35–40× | ~0,8 % | ~45 % |
| Siemens Energy | ENR GY | ~120 Md$ | ~3× | ~45× | ~40× fwd | ~0,3 % | faible (pertes 2023) |
| Cummins | CMI US | ~65 Md$ | ~2× | ~18× | ~22× | ~1,5 % | ~25 % |
| FuelCell Energy | FCEL US | < 1 Md$ | n.s. | n.s. (pertes) | n.s. | 0 % | très négatif |
| Doosan Fuel Cell | 336260 KS | ~2 Md$ | ~3× | n.s. | n.s. | 0 % | faible |

*Bloom : cours de 291,25 $ au 29 septembre 2026, CA TTM ~3,1 Md$, BPA non-GAAP 2026 attendu ~2,71 $ (consensus). GE Vernova et Caterpillar : capitalisation, P/E et rendement de septembre 2026 ; EV/CA et EV/EBIT en ordres de grandeur. Siemens Energy, Cummins, FuelCell et Doosan : ordres de grandeur à confirmer sur Bloomberg avant toute utilisation chiffrée.*

---

### Analyse comparative

**GE Vernova — Le rival le plus crédible**
Numéro un mondial des turbines à gaz, carnet de commandes record, génération de trésorerie massive. Ses grandes turbines sont réservées pour des années, ce qui a **ouvert la fenêtre** dont profite Bloom. Mais GE Vernova augmente ses capacités et développe des turbines aérodérivées plus petites, plus rapides à livrer — l'offensive la plus directe contre l'argument de vitesse.

**Caterpillar — Le vétéran des moteurs**
Groupes électrogènes à gaz et diesel, réseau de concessionnaires mondial, solution rapide et éprouvée. Moins propre et moins efficace que la pile SOFC, mais **moins chère au kW installé**. Caterpillar a profité du même boom et se paie ~35–40× les bénéfices, loin des multiples de Bloom.

**Les « purs » de la pile à combustible**
FuelCell Energy, Plug Power (technologie PEM, orientée hydrogène), Doosan Fuel Cell et Ceres Power (licences) restent sous-dimensionnés, déficitaires ou positionnés sur d'autres usages. **Aucun n'a l'échelle industrielle ni l'écosystème de financement de Bloom** — c'est la preuve empirique de son avance.

---

### Lecture de la valorisation

Bloom se paie **environ trois fois plus cher** que les meilleurs industriels de l'électrification sur les bénéfices attendus à douze mois (PER ~70× contre une médiane des pairs rentables autour de 33×) et **quatre à cinq fois plus** sur le chiffre d'affaires. Cette prime n'est défendable que si la croissance reste supérieure à 50 % par an jusqu'en 2028 : le consensus attend un BPA non-GAAP 2027 d'environ 4,9 $ (+80 %), avec une fourchette extrêmement large (≈ 3 à 7 $). Le ROE moyen sur cinq ans, négatif, rappelle que la rentabilité de Bloom est **récente** — elle n'a pas encore été testée sur un cycle complet.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 28 juillet 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart | T2 2025 |
|---|---|---|---|---|
| Chiffre d'affaires | **1 065,4 M$** | ~826 M$ | **+29 %** | 401,2 M$ |
| BPA non-GAAP dilué | **0,78 $** | 0,39 $ | **×2** | 0,10 $ |
| BPA GAAP dilué | 0,62 $ | — | — | −0,18 $ |
| Marge brute non-GAAP | 34,3 % | — | — | 28,2 % |
| Rés. opérationnel GAAP | 182,2 M$ | — | — | −3,5 M$ |
| Rés. opérationnel non-GAAP | 239,6 M$ (22,5 %) | — | — | 28,6 M$ (7,1 %) |
| Flux de trésorerie d'exploitation | 226,4 M$ | — | — | −213,1 M$ |
| Free cash-flow | ~175 M$ | — | — | négatif |

**Verdict** : dépassement massif sur toutes les lignes. Le CA dépasse le consensus de près d'un tiers et le BPA double les attentes. C'est le **troisième trimestre consécutif** de dépassement large.

---

### Facteurs clés

- **Produit** : 935,4 M$ (+215 %), tiré par les livraisons aux data centers IA — l'accélération est nette (+208 % au T1, +215 % au T2).
- **Service** : marge brute non-GAAP de 22 %, cinquième trimestre consécutif à deux chiffres.
- **Accélération** : la croissance du CA passe de +130 % au T1 à +166 % au T2 ; la marge opérationnelle non-GAAP de 17,3 % à 22,5 %.

---

### Évolution des marges

- **Marge brute** : 33,4 % en GAAP, 34,3 % en non-GAAP (+604 points de base) — effet volume, réduction des coûts unitaires, prix plus fermes.
- **Marge opérationnelle** : les charges d'exploitation GAAP passent de 111 M$ à 173 M$ (+57 %), bien moins vite que la marge brute (×3,3) ; **l'effet de levier est spectaculaire**.
- **Écart GAAP / non-GAAP** : ~57 M$ au niveau opérationnel ce trimestre, essentiellement rémunération en actions — un écart à surveiller.

---

### Prévisions — Troisième relèvement de l'année

| Indicateur 2026 | Février | Avril | Juillet |
|---|---|---|---|
| Chiffre d'affaires | 3,1–3,3 Md$ | 3,4–3,8 Md$ | **3,9–4,2 Md$** |
| Marge brute non-GAAP | ~32 % | ~34 % | ~34 % |
| Rés. opérationnel non-GAAP | 425–475 M$ | 600–750 M$ | **800–900 M$** |
| BPA non-GAAP | 1,33–1,48 $ | 1,85–2,25 $ | **2,55–2,85 $** |

**Changement de ton** : plus assuré encore qu'en avril. Le directeur financier Simon Edwards décrit le trimestre comme le plus solide de l'histoire du groupe. **Mais la prévision de free cash-flow annuelle a été retirée**, ce que plusieurs analystes ont relevé.

---

### Signaux d'alerte du bilan

- **Trésorerie** : 2,69 Md$ (y compris trésorerie soumise à restrictions) ; ligne de crédit renouvelable de 600 M$ non tirée.
- **Dette** : ~2,6 Md$ de dette avec recours, essentiellement des **obligations convertibles** (2,2 Md$ à 0 % échéance 2030, prix de conversion ~194,97 $ — **dans la monnaie** au cours actuel). Dette nette proche de zéro, mais risque de dilution.
- **Concentration** : un client = **73 % du CA du trimestre**. Le 10-Q/A déposé le 29 juillet corrige une inversion « trois mois / six mois » dans la note de concentration — erreur de forme, mais signal de rigueur perfectible.
- **Bon de souscription Oracle** : juste valeur de 251,6 M$ + 72,3 M$ d'actions d'incitation, imputées en **réduction du CA** au fil des livraisons à Oracle.

---

### Réaction du marché

Le titre avait perdu près d'un tiers de sa valeur en juillet (rapport Hunterbrook le 8, puis séances de −15 % le 24 et −11 % le 28). Il a rebondi de **+26,5 % en une séance** (clôture à 207,12 $ le 30 juillet) dans la foulée de la publication. Lecture : le marché avait intégré une **déception** liée à la controverse sur le scandium ; les chiffres ont rappelé que l'exécution industrielle était intacte. Depuis, l'inclusion dans le S&P 500 (21 septembre) a porté le titre à **291,25 $** (29 septembre), encore ~17 % sous son plus haut de juin.

**Prochain rendez-vous** : résultats du T3 2026 attendus fin octobre. Le consensus vise ~1,07 Md$ de CA et ~0,72 $ de BPA — une **stabilisation séquentielle**, pas une nouvelle accélération.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences de résultats — Priorités de la direction

### Évolution du ton

**T4 2025 (5 février 2026) — Confiance retrouvée** : record annuel de 2,02 Md$, carnet total annoncé d'environ 20 Md$ (dont ~6 Md$ de carnet produits, ×2,5 sur un an), toutes les livraisons « prêtes pour le 800 V DC ». Prévision 2026 prudente (3,1–3,3 Md$). Ton assuré mais encore mesuré.

**T1 2026 (28 avril 2026) — Accélération et nouvelle équipe** : premier appel du nouveau directeur financier Simon Edwards, ex-dirigeant de Groq. CA +130 %, prévision relevée à ~80 % de croissance. KR Sridhar martèle que la rapidité d'accès à l'électricité est passée de critère d'achat à **condition de survie** pour les acteurs de l'IA. Annonce de l'extension Oracle à 2,8 GW deux semaines plus tôt.

**T2 2026 (28 juillet 2026) — Triomphe maîtrisé, sous pression** : premier trimestre au-dessus du milliard, prévision relevée pour la troisième fois. La direction présente Bloom comme **un standard de l'alimentation sur site pour l'IA**. Le contexte est pourtant tendu : l'appel intervient trois semaines après le rapport Hunterbrook, et une partie significative des questions porte sur le scandium et sur le retrait de la prévision de free cash-flow.

---

### Priorités répétées de la direction

**1. La vitesse comme proposition de valeur** — Omniprésente. Chaque appel revient sur les délais de déploiement (55 jours pour Oracle) et sur l'insuffisance structurelle du réseau.

**2. La capacité industrielle** — Passage à 2 GW fin 2026 « dans les temps et dans le budget », extension possible à 5 GW. La direction présente la capacité comme l'unique contrainte, pas la demande.

**3. La marge et le levier opérationnel** — Edwards insiste sur la « transmission » des volumes au résultat : marge opérationnelle non-GAAP visée à ~21 % en 2026 contre 14 % dans la prévision initiale.

**4. La trésorerie** — Un flux d'exploitation supérieur à 375 M$ est présenté comme un nouveau socle, avec une forte conversion du résultat en cash. Pourtant, la prévision annuelle de free cash-flow n'est plus donnée, et aucune nouvelle cible chiffrée ne l'a remplacée.

**5. La défense de la chaîne d'approvisionnement** — Réponse ferme : pas de dépendance à la Chine, visibilité sur du scandium pour 25 GW par an, diversification des sources.

---

### Analyse du sentiment

| Appel | Ton | Confiance | Sujets défensifs |
|---|---|---|---|
| T4 2025 | Positif, prudent sur les chiffres | Élevée | Peu |
| T1 2026 | Très positif | Très élevée | Transition de CFO |
| T2 2026 | Très positif, combatif | Très élevée | Scandium, FCF, concentration |

- **Confiance** : en hausse continue et **justifiée par les chiffres** — la direction a relevé ses prévisions à chaque trimestre et les a dépassées.
- **Transparence** : bonne sur les volumes et les marges ; **plus faible** sur l'identité des clients, la conversion du carnet en CA et le calendrier de trésorerie.
- **Signal à surveiller** : le passage d'un discours « nous livrons ce que nous annonçons » à un discours de **standard de marché** est typique des phases euphoriques ; il rend chaque déception plus coûteuse.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### KR Sridhar — Fondateur, président et directeur général

**Parcours** : ingénieur, ancien directeur d'un laboratoire de technologies spatiales à l'université de l'Arizona où il travaillait, pour la NASA, sur la production d'oxygène sur Mars — technologie inversée pour donner la pile SOFC. Fondateur de Bloom en 2001.

**Bilan chiffré** :
- **25 ans de persévérance** : l'entreprise a perdu de l'argent pendant plus de deux décennies avant un résultat opérationnel GAAP positif sur l'exercice 2025 (72,8 M$) et un bénéfice net GAAP de 196,3 M$ au seul T2 2026.
- **Repositionnement réussi** : de l'énergie « propre » pour le commercial et industriel vers l'**infrastructure électrique de l'IA** — CA de 1,47 Md$ en 2024 à ~4 Md$ attendus en 2026.
- **Épisodes difficiles** : introduction en bourse à 15 $ en 2018, rapport de vendeur à découvert en 2019 suivi d'un **retraitement comptable** des exercices antérieurs (contrats de services gérés), longue traversée du désert boursier jusqu'en 2024.

**Ancienneté et participation** : 25 ans à la tête du groupe. Les dirigeants et administrateurs détiennent quelques pourcents du capital ; **les ventes d'initiés ont été soutenues** tout au long de 2025-2026, à des cours très supérieurs aux niveaux historiques.

---

### Simon Edwards — Directeur financier (depuis le 13 avril 2026)

39 ans. Précédemment directeur général puis directeur financier de **Groq** (inférence IA), directeur financier de Conga et ServiceMax (logiciels), et **directeur financier de GE Digital**. Profil de croissance rapide et de culture « tech », moins d'expérience industrielle lourde. La fonction avait déjà changé de titulaire en 2025. Premier bilan : trois relèvements de prévision, mais retrait de la prévision de free cash-flow.

**Aman Joshi — Directeur commercial** : porte-parole de Bloom pour l'extension du partenariat Brookfield.

---

### Allocation du capital — Historique

| Décision | Montant | Lecture |
|---|---|---|
| Obligations convertibles 0 % 2030 | 2,2 Md$ (oct. 2025) | Financement très bon marché, **dilution potentielle** ~11 M d'actions |
| Échange des convertibles 2028/2029 | ~976 M$ de nominal | Payé ~988 M$ en cash + **~42 M d'actions** |
| Bon de souscription Oracle | 3,53 M d'actions à 113,28 $ | Incitation commerciale ; ~2,15 M d'actions émises en mai 2026 |
| Extension de capacité 2 GW | 100–150 M$ par GW | **Capex très efficace** |
| Dividendes / rachats | Aucun | Réinvestissement total |

**ROE / ROIC** : négatifs pendant la majeure partie de la décennie, le ROIC passe à **~20 % sur douze mois glissants** (estimation : résultat opérationnel GAAP TTM de ~350 M$ après impôt, rapporté à un capital investi d'environ 1,6 Md$). C'est l'amélioration la plus spectaculaire du dossier, mais elle n'a que quelques trimestres d'historique.

---

### Signaux d'alerte

- **Ventes d'initiés** : régulières et significatives (plusieurs dizaines de millions de dollars par trimestre en 2026).
- **Parties liées et incitations** : bon de souscription accordé au premier client ; relations historiques étroites avec SK ecoplant (partenaire et ancien actionnaire).
- **Comportement promotionnel** : communication de carnets de commandes « totaux » (~20 Md$) difficilement réconciliables avec les obligations de prestation comptables ; accords-cadres « jusqu'à ».
- **Litiges** : action collective en cours (période du 27 février 2025 au 8 juillet 2026) sur les déclarations relatives à la Chine.
- **Rotation à la direction financière** : nouveau CFO en avril 2026, après un premier changement de titulaire en 2025.

---

### Fondateur ou gestionnaire professionnel ?

**Fondateur-ingénieur**, détenteur de la vision technologique et de la mémoire de l'entreprise. À ce stade — hypercroissance, pari industriel sur plusieurs gigawatts — c'est un **atout** : conviction, relations clients au plus haut niveau, capacité à prendre des risques de capacité. Le complément indispensable est une équipe financière rigoureuse ; l'arrivée d'Edwards va dans ce sens, mais son profil de croissance plutôt que de contrôle et la controverse sur la communication financière justifient une vigilance particulière.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques du cours (2021-2026)

### Contexte
Bloom est un titre à **très forte volatilité** (bêta ~3,8). Il est passé d'environ 87 $ fin 2025 à **351,28 $ le 25 juin 2026**, puis à ~164 $ fin juillet, avant de remonter à **291,25 $** le 29 septembre. Les mouvements de plus de 5 % en une séance sont fréquents : la liste ci-dessous retient ceux qui ont une cause identifiable.

### Hausses significatives

**2021 — Bulle de l'hydrogène et des énergies propres** : le titre culmine au début de 2021 dans l'euphorie des valeurs de transition énergétique, avant une longue baisse avec la remontée des taux (2022-2023).

**Fin 2024 — Accord AEP** : l'accord avec AEP portant sur jusqu'à 1 GW de piles est la première validation de Bloom comme fournisseur d'électricité pour data centers à grande échelle ; le titre quitte la zone des 10–15 $ où il stagnait depuis 2023.

**Juillet-septembre 2025 — Oracle et RBC** : contrat de mise sous tension en 90 jours pour Oracle, puis doublement de l'objectif de cours de RBC (35 $ → 75 $) ; plus haut historique à 68,74 $ mi-septembre 2025.

**Octobre 2025 — Brookfield 5 Md$** : partenariat de financement, puis annonce du bon de souscription Oracle et émission de 2,2 Md$ de convertibles à 0 %.

**13-14 avril 2026 — Oracle 2,8 GW** : +12,6 % après séance, jusqu'à +20 % en séance le lendemain.

**28 avril 2026 — T1 2026** : CA +130 %, prévision relevée de ~60 % à ~80 % de croissance.

**30 juin 2026 — Brookfield 25 Md$** : +12 % après séance ; le premier semestre s'achève sur une hausse de **+248 %**.

**30 juillet 2026 — T2 2026** : **+26,5 %** en une séance après le premier trimestre milliardaire.

**Septembre 2026 — S&P 500** : annonce de l'inclusion (effective le 21 septembre, en remplacement de Molson Coors), relèvement de l'objectif de Mizuho de 242 $ à 351 $ ; **+8,3 % le 25 septembre** quand Oracle réaffirme son engagement de 2,4 GW ; **+10,8 % le 29 septembre**.

---

### Baisses significatives

**2022-2023 — Remontée des taux** : les valeurs de croissance non rentables de la transition énergétique sont délaissées ; Bloom perd l'essentiel de ses gains de 2021.

**Novembre-décembre 2025 — Consolidation** : après le pic d'octobre, retour vers 75-90 $, dans un contexte de doutes sur la valorisation des valeurs « IA physique ».

**Mars 2026 — Correction** : forte baisse après l'emballement post-résultats annuels, sur fond de valorisation jugée excessive.

**8 juillet 2026 — Rapport Hunterbrook** : **−5,7 %** (clôture 254,29 $) sur les allégations d'approvisionnement chinois en scandium ; le mois de juillet se solde par **−32 %**, avec des séances à −15 % (24 juillet) et −11 % (28 juillet).

**24 septembre 2026 — Force majeure d'Oracle** : **−6,1 %** (258,50 $) lorsqu'Oracle adresse un avis de force majeure au développeur du campus Jupiter (retard du gazoduc).

**28 septembre 2026** : **−8,7 %**, dans un repli général des valeurs de piles à combustible, effacé dès le lendemain (+10,8 %).

---

### Facteurs structurels

- **Levier sur le récit IA** : le titre réagit aux annonces des hyperscalers (Oracle, OpenAI) presque autant qu'à ses propres résultats.
- **Flux indiciels** : l'inclusion dans le S&P 500 élargit la base d'actionnaires institutionnels et passifs.
- **Vendeurs à découvert et avocats** : rapports d'investigation et actions collectives provoquent des chocs ponctuels violents.
- **Momentum** : une partie de l'actionnariat est spéculative ; les retournements de tendance amplifient les mouvements dans les deux sens.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Avertissement
Le BPA de Bloom part d'une base très faible (0,76 $ non-GAAP en 2025) : les taux de croissance en pourcentage sont donc spectaculaires et peu informatifs. Les estimations ci-dessous portent sur le **BPA non-GAAP dilué** (référence de la direction et du consensus). Le BPA GAAP est inférieur d'environ 15 à 25 % du fait de la rémunération en actions.

### Hypothèses de modélisation

**Croissance du secteur** : la demande électrique des data centers américains devrait continuer de croître fortement jusqu'en 2030 ; la part servie par la production sur site progresse tant que les raccordements restent saturés.

**Gains de parts de marché** : Bloom capte une part croissante de la production sur site face aux turbines (délais) et aux moteurs (émissions). Hypothèse : maintien de la position, sans conquête supplémentaire.

**Hausses de prix** : prix plus fermes en 2026 ; hypothèse de stabilité en 2027-2028, puis pression à mesure que la concurrence rattrape les délais.

**Pressions sur les coûts** : scandium et droits de douane (≈ 1 point de marge brute évoqué en 2025), main-d'œuvre, montée en cadence ; compensées par l'effet d'échelle.

**Effet de levier opérationnel** : marge opérationnelle non-GAAP de ~21 % en 2026, ~24 % en 2027, ~26 % en 2028.

**Coûts de financement** : dette à 0 % ; produits financiers sur la trésorerie ; taux d'imposition effectif en hausse progressive à mesure que les reports déficitaires s'épuisent (~8 % → ~13 %).

**Dilution** : conversion probable des obligations 2030 (dans la monnaie), rémunération en actions — nombre d'actions dilué passant d'environ 325 M à 340 M.

| Hypothèse | 2026E | 2027E | 2028E |
|---|---|---|---|
| Chiffre d'affaires | ~4,1 Md$ (+100 %) | ~6,6 Md$ (+60 %) | ~9,0 Md$ (+36 %) |
| Marge opérationnelle non-GAAP | ~21 % | ~24 % | ~26 % |
| Actions diluées | ~325 M | ~333 M | ~340 M |

---

### Estimations du BPA

| Exercice | BPA estimé | Croissance | PER au cours actuel (291,25 $) |
|---|---|---|---|
| 2024 (réalisé) | 0,28 $ | — | — |
| 2025 (réalisé) | 0,76 $ | ×2,7 | ~383× |
| **2026E** | **2,60–2,90 $ (base 2,75 $)** | **×3,6** | **~106×** |
| **2027E** | **4,10–5,20 $ (base 4,60 $)** | **+67 %** | **~63×** |
| **2028E** | **5,40–7,40 $ (base 6,30 $)** | **+37 %** | **~46×** |

**Repères de consensus** : ~2,71 $ pour 2026 et ~4,9 $ pour 2027 (fourchette des analystes ≈ 3 à 7 $). Notre base 2027 est légèrement plus prudente, par prudence sur la conversion du carnet Oracle/Jupiter.

---

### Sensibilité

- **Scénario haussier** (capacité portée à 4-5 GW, nouveaux hyperscalers, prix fermes) : BPA 2028 ~8,50 $ → PER 2028 ~34× — le cours actuel serait alors raisonnable.
- **Scénario de base** : BPA 2028 ~6,30 $ → PER 2028 ~46× — le titre intègre déjà deux années d'exécution sans faute.
- **Scénario baissier** (retards Jupiter, concurrence des turbines, baisse des prix) : BPA 2028 ~3,50 $ → PER 2028 ~83× — forte vulnérabilité.

**Conclusion** : la trajectoire bénéficiaire est réelle et parmi les plus fortes du marché américain. Mais à 291 $, le cours intègre déjà l'essentiel du scénario de base à horizon 2028. **Le potentiel dépend de la capacité à dépasser encore les attentes**, ce que Bloom a fait à chaque trimestre depuis un an.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (bull case)

### Leviers de croissance structurels

**1. La pénurie d'électricité est l'étranglement de l'IA** : les hyperscalers ont les puces, les capitaux et les terrains, pas les électrons. Tant que le réseau reste saturé, la production sur site rapide est la seule solution à l'échelle du besoin — et Bloom est le seul acteur SOFC industrialisé à plusieurs gigawatts.

**2. Des barrières à l'entrée qui tiennent à moyen terme** : 20 ans de courbe d'apprentissage, une usine de 2 GW extensible à 5 GW pour quelques centaines de millions de dollars, un écosystème de financement de 25 Md$ et des références de premier rang (Oracle, AEP, Nebius). Un nouvel entrant mettrait des années à réunir ces éléments.

**3. Des surprises bénéficiaires répétées** : trois relèvements de prévision en 2026, un BPA du T2 deux fois supérieur au consensus, une marge opérationnelle passée de 7 % à 22,5 % en un an. Le consensus a constamment sous-estimé le levier opérationnel.

**4. Des vents porteurs structurels** : standard 800 V DC dans les data centers (avantage natif de Bloom), exigences d'émissions locales qui défavorisent les moteurs, électrification de l'industrie, demande internationale (Corée, Inde, Japon, Europe).

**5. Une allocation du capital devenue efficace** : 100 à 150 M$ par gigawatt de capacité, dette convertible à 0 %, trésorerie de 2,7 Md$, ROIC passé à ~20 %.

---

## 🐻 Scénario pessimiste (bear case)

### Risques susceptibles d'affecter durablement l'activité

**1. La concentration** : un client a représenté 73 % du CA du T2 2026. Le projet Jupiter (jusqu'à 2,45 GW) fait déjà l'objet d'un avis de force majeure d'Oracle, faute de gazoduc avant février 2027. Un retard ou une renégociation d'un seul programme peut créer un trou de plusieurs trimestres.

**2. La fenêtre de rareté se referme** : GE Vernova, Siemens Energy et Mitsubishi augmentent leurs capacités de turbines, les petites turbines aérodérivées et les moteurs se déploient vite, les raccordements finiront par se débloquer. La prime de vitesse — donc les prix et les marges de Bloom — se comprimerait.

**3. Le scandium et la géopolitique** : si les allégations d'approvisionnement chinois se confirmaient, des droits de douane ou des restrictions pourraient toucher le coût ou la disponibilité de la matière clé de la pile.

### Analyse pré-mortem
Que se serait-il passé si Bloom cotait 120 $ en septembre 2028 ? Scénario : Jupiter décalé de 12 à 18 mois, un deuxième hyperscaler choisit des turbines aérodérivées, les prix baissent de 15 %, la marge opérationnelle plafonne à 18 %, le BPA 2028 atteint 3,50 $ et le multiple se normalise à ~35×. Le cours reculerait de ~60 % — un scénario qui ne nécessite **aucune faillite du modèle**, seulement une normalisation.

### Les multiples sont-ils trop élevés ?
**Oui au regard des pairs** : ~106× le BPA 2026 attendu, ~63× celui de 2027, ~27× le CA — deux à trois fois les multiples de GE Vernova ou Caterpillar, qui profitent de la même demande. **Défendables seulement** si la croissance reste supérieure à 50 % par an jusqu'en 2028.

---

### Point de vue à contre-courant

**Ce que le marché refuse de voir** — dans les deux sens. Les baissiers voient Bloom comme une bulle du récit IA ; ils négligent que la société génère désormais du cash, que sa capacité coûte peu à étendre et que ses clients sont les acheteurs les plus solvables du monde. Les haussiers voient un monopole de la vitesse ; ils négligent que **la vitesse est un avantage temporaire par nature** et que le vrai test viendra en 2028-2029, quand l'offre de turbines et de raccordements aura rattrapé la demande. La question décisive n'est pas « Bloom croîtra-t-elle ? » mais **« quelle marge conservera-t-elle quand elle ne sera plus la seule option rapide ? »**.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE MODÉRÉ À ÉLEVÉ
Le CA produit est reconnu à la livraison ou à l'acceptation, souvent vis-à-vis d'une **structure de financement** plutôt que de l'utilisateur final. Deux points d'attention :
- **Accélération de fin de période** : des livraisons concentrées sur quelques gros projets rendent le CA trimestriel sensible au calendrier d'acceptation.
- **Contrepartie versée au client** : le bon de souscription Oracle (juste valeur de 251,6 M$, plus 72,3 M$ d'actions d'incitation lors de l'exercice sans décaissement du 1ᵉʳ mai 2026) est imputé en **réduction du CA** au fil des livraisons. Traitement conforme (ASC 606 et 718), mais qui rend la marge sur ce client plus faible qu'en apparence.

**Historique** : Bloom a **retraité ses comptes antérieurs en 2019-2020** au titre des contrats de services gérés, après un rapport de vendeur à découvert. Le précédent justifie une vigilance renforcée sur les montages de financement.

### Information sectorielle et concentration — RISQUE ÉLEVÉ
Un seul secteur publié, pas de résultat par type de client. La note de concentration du 10-Q du T2 2026 a dû être **corrigée par un 10-Q/A** le lendemain (inversion entre les périodes de trois et six mois). La bonne lecture : **73 % du CA du T2** avec un client, ~44 % et ~21 % pour deux clients sur le semestre. Le « client » peut être un véhicule de financement : la concentration économique réelle peut donc être encore plus forte, ou différente.

### Carnet de commandes — RISQUE MODÉRÉ
La direction communique un carnet total d'environ 20 Md$ (dont ~6 Md$ de produits fin 2025), une notion **non normée** qui intègre des services et de l'électricité sur de longues durées et des accords-cadres « jusqu'à ». Les **obligations de prestation restantes** publiées au sens d'ASC 606 sont d'un tout autre ordre de grandeur. Méthode : ne retenir que les tranches contractées (1,2 GW Oracle) et les obligations comptables.

### Contrats de location et financements structurés — RISQUE MODÉRÉ
Les anciens contrats de vente avec reprise de l'électricité (PPA) et les services gérés ont généré des passifs financiers et des engagements de performance. Surveiller les garanties de disponibilité et de rendement, susceptibles de créer des **provisions** si la fiabilité se dégrade.

### Parties liées — RISQUE FAIBLE À MODÉRÉ
Pas de transaction significative avec des dirigeants identifiée. Relations historiques étroites avec SK ecoplant (client, distributeur et ancien actionnaire) ; bon de souscription au premier client.

### Engagements conditionnels et litiges — RISQUE MODÉRÉ
Action collective en valeurs mobilières (période du 27 février 2025 au 8 juillet 2026) sur les déclarations relatives à l'approvisionnement en scandium ; issue et coût inconnus. Garanties produit et de performance.

### Rémunération en actions — RISQUE MODÉRÉ
Écart d'environ 57 M$ entre résultat opérationnel GAAP et non-GAAP au T2 2026, principalement la rémunération en actions. À ~20 % de marge non-GAAP, cet écart pèse environ un quart du résultat : **le BPA non-GAAP flatte la rentabilité réelle**.

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Croissance organique, pas d'acquisition significative : peu de goodwill. Point positif du dossier.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ
Le flux d'exploitation (226 M$ au T2) dépasse le résultat net grâce aux **acomptes clients et au fonds de roulement** — favorable aujourd'hui, réversible si les commandes ralentissent. Le **retrait de la prévision de free cash-flow** en juillet est un signal à suivre.

### Dilution — RISQUE MODÉRÉ
Obligations 2030 convertibles à ~194,97 $ (dans la monnaie), échange de 2025 réglé en partie par ~42 M d'actions nouvelles, bon de souscription Oracle.

---

### Verdict global
**Risque comptable : MODÉRÉ.** Aucune fraude identifiée, comptes audités, trésorerie réelle et croissante. Mais un **historique de retraitement**, une concentration extrême mal documentée, une communication centrée sur des indicateurs non normés (carnet, non-GAAP) et une controverse ouverte sur la chaîne d'approvisionnement imposent de **raisonner sur les chiffres GAAP et sur la trésorerie**, pas sur les agrégats de présentation.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour KR Sridhar, classées par importance

### Stratégie et avantage concurrentiel

**1.** Votre avantage repose sur la rapidité d'accès à l'électricité. Quand les turbines aérodérivées et les raccordements réseau se seront débloqués, vers 2028-2029, **quel sera votre avantage de coût complet par MWh** face à une turbine à gaz, et quelle marge brute jugez-vous alors soutenable ?

**2.** Un client a représenté 73 % du CA du T2 2026. **Qui est l'utilisateur final derrière ce client**, et quel pourcentage du CA 2027 attendez-vous de vos trois premiers clients ?

**3.** L'avis de force majeure d'Oracle sur Jupiter : **que se passe-t-il pour votre CA 2027** si le gazoduc est encore retardé de six mois, et avez-vous des engagements fermes de réallocation de ces systèmes vers d'autres sites ?

### Chaîne d'approvisionnement

**4.** Vous affirmez disposer d'une visibilité sur du scandium pour 25 GW par an. **Quelle part de votre scandium est aujourd'hui d'origine chinoise, directement ou via des intermédiaires**, et quel serait l'impact sur la marge brute de droits de douane de 50 % sur cette matière ?

**5.** Combien de temps et quel investissement faudrait-il pour **qualifier une chimie d'électrolyte réduisant la teneur en scandium** ?

### Allocation du capital et trésorerie

**6.** Pourquoi avoir **retiré la prévision de free cash-flow** en juillet ? Quelle part du flux d'exploitation 2026 provient des acomptes clients, et que devient-elle si les commandes se normalisent ?

**7.** Quelle est votre politique face à la **dilution** : conversion des obligations 2030, rémunération en actions, incitations aux clients sous forme de bons de souscription ? Envisagez-vous des rachats d'actions pour la neutraliser ?

**8.** Au-delà de 2 GW, **à quel niveau de commandes fermes déclenchez-vous chaque gigawatt supplémentaire**, et quel ROIC attendez-vous sur ces extensions ?

### Visibilité commerciale

**9.** Vous communiquez un carnet total d'environ 20 Md$. **Quelle part est ferme, sans condition suspensive, et livrable dans les 24 mois** ? Comment le réconciliez-vous avec les obligations de prestation publiées dans le 10-Q ?

**10.** Quel pourcentage de vos livraisons 2026-2027 passe par le **cadre Brookfield** ? Brookfield dispose-t-il de droits d'exclusivité ou de conditions de prix préférentielles ?

### Risques

**11.** Quels sont les principaux enseignements de l'**action collective** en cours, et quels contrôles avez-vous ajoutés pour éviter une nouvelle correction de 10-Q comme celle du 29 juillet ?

**12.** Si les prix du gaz naturel américain doublaient, **combien de vos contrats répercutent automatiquement ce coût** au client final, et quel serait l'effet sur la demande nouvelle ?

**13.** Les **ventes d'initiés** ont été soutenues en 2025-2026. Comment les justifiez-vous auprès des actionnaires, et la direction s'engagerait-elle sur des plans de détention minimale ?

### Vision long terme

**14.** Dans dix ans, **quelle part de votre CA viendra de l'hydrogène**, des électrolyseurs et de l'international, au-delà des data centers américains alimentés au gaz ?

**15.** Quel est le risque que vous estimez **le plus sous-évalué par le marché aujourd'hui** — et celui que vous surveillez le plus en conseil d'administration ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse vendeuse — Démontage de l'argumentaire haussier

### 1. Ce qui peut compromettre structurellement le modèle

Bloom vend de l'électricité **plus chère que le réseau**. Son modèle n'existe que parce que l'électricité réseau est indisponible à court terme. C'est un avantage de **pénurie**, pas de coût. Toute pénurie finit par se résorber : quand les grandes turbines, les turbines aérodérivées et les raccordements rattraperont la demande, les hyperscalers compareront des coûts par MWh, et la pile SOFC — combustible gazier, remplacement périodique des empilements — ne gagnera pas sur ce terrain.

### 2. Où se concentrent les revenus — et que se passe-t-il si cela change

**73 % du CA du T2 2026 avec un seul client**, 90 % aux États-Unis, une exposition dominante au programme Oracle/OpenAI. Le projet Jupiter (jusqu'à 2,45 GW) dépend d'un gazoduc refusé deux fois, désormais attendu en février 2027, et fait l'objet d'un **avis de force majeure**. Si Oracle ralentit ses dépenses d'infrastructure — ou si OpenAI révise ses ambitions —, Bloom perd l'essentiel de sa croissance en un trimestre. La diversification annoncée (AEP, Nebius, Aligned) ne pèse pas encore assez pour amortir un tel choc.

### 3. Pourquoi l'avantage concurrentiel est plus fragile qu'il n'y paraît

La vitesse de déploiement est **copiable** : Caterpillar livre des groupes électrogènes en mois, GE Vernova industrialise ses turbines aérodérivées, et la pile SOFC n'est pas un monopole technologique. La capacité industrielle, elle, coûte 100 à 150 M$ par gigawatt — **ce qui est bon marché pour Bloom l'est aussi pour un concurrent**.

### 4. Le concurrent le plus dangereux : GE Vernova

Les haussiers le traitent comme saturé. C'est une erreur : GE Vernova dispose d'un bilan bien plus puissant, de relations avec toutes les utilities américaines, d'une offre allant de la turbine au réseau et au stockage, et d'une capacité à proposer une solution **« pont » sur site puis raccordée**. Quand ses carnets se détendront, il pourra casser les prix sur les projets de plusieurs centaines de MW.

### 5. Les pires décisions d'allocation du capital

- Un **bon de souscription accordé au premier client**, revendu par celui-ci, qui réduit le CA reconnu et signale un rapport de force défavorable.
- L'échange des convertibles 2028/2029 réglé en partie par **~42 M d'actions nouvelles** ; des obligations 2030 déjà dans la monnaie.
- Des **ventes d'initiés soutenues** à des cours historiquement élevés : les dirigeants encaissent la valorisation qu'ils demandent aux investisseurs de payer.

### 6. Comptabilité et incitations

Historique de **retraitement** (2019-2020). Un 10-Q corrigé dès le lendemain de sa publication. Un « carnet de commandes » non normé de 20 Md$ très supérieur aux obligations comptables. Un BPA non-GAAP qui exclut ~57 M$ de charges par trimestre. Une controverse ouverte sur l'origine du scandium, avec action collective. Aucun de ces éléments n'est rédhibitoire seul ; **ensemble, ils dessinent une culture de présentation optimiste**.

### 7. Les hypothèses nécessaires pour justifier le cours

À 291 $ (~86 Md$), il faut : (a) une croissance du CA supérieure à 50 % par an jusqu'en 2028 ; (b) une marge opérationnelle non-GAAP qui continue de progresser vers 26 % ; (c) la conversion effective du programme Oracle, Jupiter compris ; (d) aucun choc sur le scandium ; (e) le maintien d'un multiple d'environ 45× les bénéfices de 2028.

### 8. Et si la croissance déçoit de 20 à 30 %

Avec un CA 2028 de 6,3 à 7,2 Md$ au lieu de 9 Md$ et une marge ramenée à 22 %, le BPA 2028 tombe entre **3,8 et 4,3 $**. À 35× — déjà une prime sur les industriels de l'électrification —, le titre vaudrait **~135 à 150 $**, soit **−48 % à −54 %**. La valorisation actuelle ne laisse aucune marge d'erreur d'exécution.

### Le scénario catastrophe unique

**Un retournement du cycle d'investissement des hyperscalers en 2027**, combiné à la résorption des goulets d'étranglement du réseau. Bloom se retrouverait avec une usine dimensionnée pour 4-5 GW, des clients qui rationnent leurs dépenses et un produit plus cher que l'alternative. **Plausibilité : 20 à 30 %** sur trois ans — l'histoire des cycles d'infrastructure technologique (télécoms 2000, solaire 2011) montre que les pénuries se transforment souvent en surcapacités.

### Conclusion vendeuse
Bloom est devenue une **excellente entreprise industrielle** — trésorerie positive, levier opérationnel spectaculaire, technologie éprouvée. Mais le titre intègre une pénurie d'électricité **permanente** et une exécution sans faute sur un portefeuille de clients extrêmement concentré. **L'avantage le plus puissant de Bloom est aussi le plus périssable.**`,
  },
];

export default { ...meta, modules };
