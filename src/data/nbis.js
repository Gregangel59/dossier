// ============================================================
//  DOSSIER : Nebius Group N.V. (NBIS)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "nbis",                     // identifiant d'URL : /dossier/nbis
  ticker: "NBIS",
  name: "Nebius Group N.V.",
  exchange: "Nasdaq",
  sector: "Infrastructure cloud pour l'IA (néocloud)",
  initials: "NBIS",                 // affiché dans la pastille
  tagline: "Néocloud européen bâti pour l'IA : GPU NVIDIA, logiciel maison et 5 GW d'énergie contractée.",
  riskScore: 46,                    // score du rapport de risque (ou null)
  riskLabel: "Risque élevé",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "nbis.html",
  updated: "2026-10",               // période des données
  published: "2026-10-07",          // date exacte de publication
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Nebius Group est un **néocloud** : un fournisseur d'infrastructure cloud conçu exclusivement pour l'intelligence artificielle. Basé à Amsterdam et coté au Nasdaq (NBIS), le groupe est né en 2024 de la scission des activités internationales de l'ex-Yandex N.V., après la cession des activités russes. Il a repris sa cotation en octobre 2024 et a fait de l'IA son unique priorité.

Le principe est simple à énoncer, beaucoup plus dur à exécuter :
- **Sécuriser de l'énergie et des sites** (5 GW de puissance contractée visés fin 2026)
- **Acheter des GPU NVIDIA de dernière génération** (Blackwell, puis Vera Rubin) et construire ou louer des centres de données
- **Louer cette puissance de calcul** à des laboratoires d'IA, des start-up et des hyperscalers, enrichie d'une couche logicielle propriétaire (orchestration, stockage, inférence managée)

Nebius vend donc du **temps de calcul** facturé à l'heure-GPU ou par contrats de capacité réservée. Sa différence revendiquée face à un simple loueur de serveurs : un **logiciel cloud développé en interne** (héritage de 25 ans d'ingénierie Yandex) et du matériel conçu sur mesure (serveurs, racks), qui améliorent l'utilisation et le coût total.

## Principaux produits et services

- **Nebius AI Cloud (≈ 98 % du CA)** : clusters GPU pour l'entraînement et l'inférence, plateforme « Aether 3.6 », stockage objet et fichiers haute performance, agent d'exploitation en langage naturel (Nebius Echo)
- **Token Factory** : inférence managée de modèles ouverts (Kimi K3, GLM 5.2, Nemotron Ultra…) facturée au jeton — volumes d'inférence multipliés par plus de 3 au T2 2026
- **Tavily** (acquis) : recherche web en temps réel pour agents IA, plus de 2,5 millions de développeurs ; **Eigen AI** et **Clarifai** (acquis au T2 2026) renforcent l'optimisation de l'inférence
- **Modèle « asset-light »** (lancé au T2 2026) : des partenaires financent et possèdent les centres de données, Nebius apporte son logiciel, son architecture et ses clients

**Activités non cœur** : **Avride** (véhicules autonomes et robots de livraison — plus de 60 000 courses commerciales sur Uber à Dallas), **TripleTen** (formation tech). **Participations** : ClickHouse (base de données valorisée ≈ 15 Md$ en janvier 2026) et Toloka (données pour l'IA, adossée à Bezos Expeditions).

## Clients, fournisseurs, concurrents

**Clients** : Microsoft (contrat pluriannuel jusqu'à 19,4 Md$ signé en septembre 2025), Meta (3 Md$ en novembre 2025 puis un accord jusqu'à 27 Md$ sur cinq ans en mars 2026), et une clientèle de laboratoires d'IA : Reflection, Cohere, AMI (Yann LeCun), Black Forest Labs, Cognition, Higgsfield, Recraft, Cloudflare, Revolut, une grande société de trading quantitatif américaine.

**Fournisseurs** : NVIDIA (GPU, réseau — et actionnaire à ≈ 9 %), fabricants de serveurs et de composants, opérateurs de colocation (dont DataOne à Vineland, New Jersey), producteurs d'électricité, Bloom Energy (piles à combustible sur site).

**Concurrents** : **CoreWeave** (leader des néoclouds), **Oracle Cloud Infrastructure**, les hyperscalers (**AWS, Microsoft Azure, Google Cloud**), **IREN**, et des acteurs privés (Lambda, Crusoe, Nscale, Together AI). Nouveau venu redouté depuis juillet 2026 : **Meta Compute**, la revente par Meta de ses capacités excédentaires.

## Modalités contractuelles et de paiement

Nebius combine trois familles de contrats :
- **Courts (3 à 6 mois)** : besoins urgents, facturés avec une prime importante — un premier contrat signé au T3 2026, et un premier « enchère » de capacité Blackwell au prix le plus élevé jamais obtenu
- **Moyen terme (1 à 3 ans)** : le cœur de l'activité avec les laboratoires d'IA
- **Long terme (plusieurs années)** : clients « investment grade » (Microsoft, Meta), qui servent de garantie aux financements adossés

Le point clé est le **prépaiement** : environ **70 % des contrats signés au T2 2026 incluent une avance client**, couvrant **50 à 60 % du capex associé**. Nebius attend **plus de 9 Md$ de prépaiements en 2026** et revendique **plus de 40 Md$ d'engagements clients**. Ces avances expliquent un flux de trésorerie opérationnel très positif (≈ 2,25 Md$ au T2) malgré une perte comptable.

> **Note de prudence** : le chiffre d'affaires reconnu (582 M$ au T2 2026) reste très inférieur aux engagements signés ; tout le dossier repose sur la conversion de ces contrats en revenus au fil de la mise en service des capacités.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Nebius dans la chaîne de valeur

Nebius occupe une position d'**assembleur-opérateur** : il transforme de l'énergie, du foncier et des puces en heures de calcul prêtes à l'emploi pour les développeurs d'IA. Sa valeur ajoutée tient à la vitesse de mise en service, au taux d'utilisation et à la couche logicielle — pas à la fabrication.

### Amont — Les intrants critiques

**Puces et réseau (le poste le plus lourd du capex)** :
- **NVIDIA** — GPU Blackwell (GB200/GB300), premiers systèmes **Vera Rubin NVL72** reçus et en validation, CPU Vera, réseau InfiniBand/Ethernet. NVIDIA est aussi actionnaire (≈ 9 %, renforcé par un investissement stratégique de 2 Md$ en 2026)
- Mémoire HBM et stockage : chaîne SK Hynix / Samsung / Micron via les intégrateurs

**Serveurs et matériel** : conception propriétaire des serveurs et racks, assemblés par des sous-traitants (ODM taïwanais) — avantage de coût et d'efficacité énergétique revendiqué

**Énergie et sites** :
- Producteurs et réseaux électriques locaux (Finlande, Islande, États-Unis…)
- **Bloom Energy** — piles à combustible « derrière le compteur » (partenariat annoncé en mai 2026)
- Opérateurs de colocation, dont **DataOne** (Vineland, New Jersey, 300 MW pour le contrat Microsoft)

**Financement** (un intrant à part entière) : banques et investisseurs obligataires (≈ 10 Md$ de convertibles levés sur T1 et T3 2026), facilité adossée de 775 M$ (SOFR + 2,50 %), programme ATM, prépaiements clients.

---

### Nebius — Construction, exploitation, logiciel

**Sites détenus ou en construction** : Mäntsälä (Finlande, site historique), Kansas City (Missouri), Vineland (New Jersey), un projet de 1,2 GW en Pennsylvanie, et de nouveaux sites en Alabama, Oklahoma, Minnesota, Royaume-Uni, France, Espagne, Estonie, Israël, Islande.

**Trois modes de déploiement** : centres détenus (contrôle total), colocation (rapidité), et depuis le T2 2026 **partenariats asset-light** (le partenaire finance, Nebius exploite et commercialise).

**Couche logicielle** : plateforme AI Cloud, Token Factory (inférence), Tavily (recherche pour agents), outils d'observabilité et de gouvernance.

---

### Aval — Les clients finaux

**Hyperscalers et géants technologiques** : Microsoft, Meta — capacité dédiée, contrats longs

**Laboratoires d'IA et « neolabs »** : Reflection, Cohere, AMI, Black Forest Labs, Cognition, un neolab américain non nommé

**Start-up et entreprises** : Higgsfield (vidéo générative), Recraft, Basecamp Research et Prima Mente (biotech), Revolut, Cloudflare, une société de trading quantitatif

**Développeurs** : accès en libre-service à Token Factory et Tavily, programme « Builder »

---

### Cartographie du flux

| Amont | Nebius | Aval |
|---|---|---|
| NVIDIA (GPU, réseau, CPU) | Conception serveurs et racks | Microsoft, Meta (capacité dédiée) |
| ODM / intégrateurs | Centres détenus, colocation, asset-light | Labos IA : Reflection, Cohere, AMI |
| Électricité, Bloom Energy | Plateforme AI Cloud « Aether » | Start-up : Higgsfield, Recraft |
| DataOne et autres colocataires | Token Factory, Tavily (logiciel) | Développeurs et agents IA |
| Convertibles, ABS, prépaiements | Ingénierie (≈ héritage Yandex) | Finance, biotech, entreprises |

**Le maillon faible** : Nebius dépend d'un fournisseur quasi unique (NVIDIA) en amont et d'une poignée de très gros clients en aval. Sa marge se joue entre ces deux puissances — d'où l'importance de la couche logicielle et de la diversification de la clientèle.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — S1 2026

**Avertissement méthodologique** : Nebius change d'échelle chaque trimestre. Le CA est passé de 105 M$ au T2 2025 à 582 M$ au T2 2026. Les comparaisons annuelles (+454 %) décrivent une entreprise en construction, pas un régime de croisière.

### Segments opérationnels

| Segment | CA T2 2026 | Croissance a/a | EBITDA ajusté | Poids |
|---|---|---|---|---|
| Nebius AI Cloud | 574,9 M$ | +514 % | 285,7 M$ (49,7 %) | ≈ 98 % |
| Avride (autonomie) | Faible | n.c. | Négatif | < 2 % |
| TripleTen (edtech) | Faible | n.c. | En amélioration | < 2 % |
| **Groupe** | **582,3 M$** | **+454 %** | **236,2 M$ (41 %)** | 100 % |

Le cloud IA porte tout : sa marge d'EBITDA ajusté est passée de **24 % au T4 2025 à 45 % au T1 2026 puis 50 % au T2 2026**. Les activités annexes (Avride, TripleTen, frais centraux) coûtent environ 50 M$ d'EBITDA par trimestre.

### Évolution trimestrielle du groupe

| Trimestre | CA | Croissance a/a | EBITDA aj. | Marge | ARR fin de période |
|---|---|---|---|---|---|
| T2 2025 | 105,1 M$ | — | −21,0 M$ | −20 % | 0,43 Md$ |
| T3 2025 | 146,1 M$ | ≈ +355 % | ≈ −5 M$ | ≈ −4 % | — |
| T4 2025 | 227,7 M$ | +547 % | 15,0 M$ | 7 % | 1,2 Md$ |
| T1 2026 | 399,0 M$ | +684 % | 129,5 M$ | 32 % | 1,92 Md$ |
| T2 2026 | 582,3 M$ | +454 % | 236,2 M$ | 41 % | 3,0 Md$ |

### Du CA au résultat net

L'EBITDA ajusté est flatteur ; le résultat comptable l'est beaucoup moins :
- **Amortissements** : 259,7 M$ au T2 2026, soit **45 % du CA** — c'est le vrai plafond de la rentabilité GAAP
- **Rémunération en actions** : 102,5 M$ au T2 (dont des charges non récurrentes liées à l'acquisition d'Eigen AI)
- **Résultat opérationnel T2 2026** : ≈ −176 M$ (−30 % du CA)
- **Résultat net des activités poursuivies** : −190,4 M$ au T2, mais **+430,8 M$ sur le S1** grâce à une réévaluation de la participation ClickHouse (≈ 780 M$, non opérationnelle)

### Répartition géographique

Nebius ne publie pas de ventilation détaillée du CA par région. La géographie se lit dans la capacité : historiquement **européenne** (Finlande, Islande, Paris), elle bascule vers les **États-Unis** (New Jersey, Missouri, Pennsylvanie, Alabama, Oklahoma, Minnesota), où se trouvent les plus gros clients. L'Europe garde un rôle stratégique pour la **souveraineté des données**, un argument différenciant face aux acteurs américains.

---

**Lecture** : un seul moteur (le cloud IA), une marge d'exploitation de terrain déjà élevée, mais un compte de résultat écrasé par les amortissements d'un parc GPU qui grossit plus vite que les revenus qu'il génère — tant que les nouvelles capacités ne tournent pas à plein.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques — réels, naissants ou revendiqués

### 1. Une pile logicielle propriétaire — fossé réel
Nebius n'est pas un simple loueur de GPU. Sa plateforme cloud, son orchestration, son stockage et ses outils d'inférence ont été développés en interne par des équipes issues de 25 ans d'ingénierie Yandex (environ 400 ingénieurs cloud à l'origine). Résultat mesurable : des performances proches du « bare metal » dans des environnements virtualisés (benchmarks MLPerf), et une capacité à servir **tout le cycle de vie d'un modèle**, de l'entraînement à l'inférence, sur une même plateforme. C'est l'argument clé face aux néoclouds plus « immobiliers ».

### 2. L'accès privilégié à NVIDIA — fossé réel mais partagé
NVIDIA est actionnaire (≈ 9 %) et partenaire de référence ; Nebius a été parmi les premiers à recevoir des systèmes Vera Rubin NVL72. Dans un marché où **la capacité est la contrainte**, l'accès prioritaire aux puces est un avantage décisif. Limite : CoreWeave bénéficie du même parrainage.

### 3. L'énergie sécurisée — fossé en construction
Avec **5 GW de puissance contractée visés fin 2026** (contre plus de 2 GW en février), Nebius détient une ressource devenue rare : des terrains raccordés au réseau. Ce stock d'énergie est une barrière à l'entrée pour les nouveaux venus — mais il doit encore être transformé en capacité connectée (800 MW à 1 GW visés fin 2026).

### 4. Un bilan et un modèle de financement différenciants
Sans dette lourde à l'origine, avec des participations monétisables (ClickHouse, Toloka) et des **prépaiements clients couvrant 50 à 60 % du capex**, Nebius se finance à des coûts inférieurs à ceux de ses pairs : convertibles à 0,50 % (échéance 2030), facilité adossée à SOFR + 2,50 %. Face à un CoreWeave qui supporte plus de 35 Md$ de dette, c'est un avantage structurel.

### 5. La souveraineté européenne — avantage de niche
Seul néocloud d'envergure né en Europe, siège à Amsterdam : un argument pour les clients soumis au RGPD et aux exigences de localisation des données.

### Coûts de changement — MODÉRÉS
Les contrats de capacité dédiée (Microsoft, Meta) sont fermes et longs ; mais pour les laboratoires d'IA, la puissance de calcul reste **largement interchangeable**. La fidélité se gagne par la fiabilité, la disponibilité et le logiciel — elle n'est pas acquise.

## Positionnement vs concurrence

| Critère | Nebius | CoreWeave | Hyperscalers (AWS, Azure, GCP) |
|---|---|---|---|
| Échelle (CA 2026e) | 3,0–3,4 Md$ | 12–13 Md$ | > 100 Md$ chacun |
| Logiciel propriétaire IA | Fort | Fort | Très fort mais généraliste |
| Coût du financement | Bas (convertibles) | Élevé (dette ≈ 35 Md$) | Très bas (bilans géants) |
| Marge EBITDA ajustée | ≈ 41 % (cloud 50 %) | Supérieure, à plus grande échelle | Élevée |
| Dépendance clients | Microsoft, Meta | Microsoft, OpenAI, Meta | Diversifiés |
| Agilité / spécialisation IA | Très élevée | Très élevée | Moyenne |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **élevé en période de pénurie** — les contrats du T2 2026 se sont signés à plus de 20 M$ de revenu annuel par MW (contre une base de 12 M$), avec prépaiement, et Nebius affirme pouvoir vendre toute sa capacité 2027 à ces conditions. Ce pouvoir dépend toutefois d'un marché tendu : il s'éroderait vite en cas de surcapacité
- **Vis-à-vis de NVIDIA** : **faible** — fournisseur quasi monopolistique ; Nebius est un client important, pas incontournable
- **Vis-à-vis des financeurs** : **en nette amélioration** — premier financement adossé, convertibles sursouscrites et relevées (5,75 Md$ en août 2026)`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Infrastructure cloud IA (octobre 2026)

| Société | Code Bloomberg | Cap. (Md$) | EV/CA | EV/EBIT | P/E | Rdt div. | ROE moy. 5 ans |
|---|---|---|---|---|---|---|---|
| **Nebius** | **NBIS US** | **≈ 68** | **≈ 50x (TTM) · ≈ 21x (2026e)** | **n.s. (négatif)** | **n.s.** | **0 %** | **n.s.** |
| CoreWeave | CRWV US | ≈ 50 | ≈ 10x (TTM, dette incluse) | n.s. | n.s. | 0 % | n.s. |
| Oracle | ORCL US | ≈ 430–450 | ≈ 8x | ≈ 25x | ≈ 26x | ≈ 1,4 % | > 100 % (fonds propres réduits) |
| IREN | IREN US | ≈ 13–15 | ≈ 5x | n.s. | n.s. | 0 % | n.s. |
| Lambda, Crusoe, Nscale | Non cotées | N/A | N/A | N/A | N/A | N/A | N/A |

*Ordres de grandeur sur la base des cours et publications disponibles entre août et octobre 2026 ; les multiples des néoclouds bougent de plusieurs dizaines de pourcents en quelques semaines. À affiner sur Bloomberg avant toute utilisation. Le ROE n'est pas significatif pour des sociétés déficitaires ou dont les résultats historiques sont faussés par des cessions (cas de Nebius, issue de la scission Yandex).*

---

### Analyse comparative

**CoreWeave — Le leader en volume**
CoreWeave est environ **quatre fois plus gros** en chiffre d'affaires (12 à 13 Md$ attendus en 2026) avec un carnet de commandes supérieur à 100 Md$, mais il porte une dette d'environ 35 Md$ et des frais financiers de l'ordre de 640 M$ par trimestre. Sa capitalisation représente environ 6 fois son CA (≈ 10 fois en valeur d'entreprise, dette incluse), contre environ 50 fois pour Nebius. **L'écart reflète deux choses** : un bilan bien plus sain chez Nebius, et une croissance relative plus rapide (+454 % contre +112 % au T2).

**Oracle — L'hyperscaler qui s'est fait néocloud**
Oracle construit massivement pour OpenAI et d'autres, avec un capex qui a effrayé le marché. Profitable et versant un dividende, il se paie environ 26 fois ses bénéfices. C'est le repère de ce que vaudrait un acteur de l'infrastructure IA **une fois arrivé à maturité**.

**IREN — L'ancien mineur de bitcoin**
Converti au cloud IA (contrat Microsoft, cible ARR de 3,7 Md$ fin 2026), IREN se paie environ 5 fois ses ventes mais tire encore une large part de ses revenus du minage. Il illustre la **banalisation possible** de la capacité GPU : quiconque dispose d'électricité peut entrer sur le marché.

**Les hyperscalers — à la fois clients, références et menaces**
AWS, Azure et Google Cloud se paient 20 à 30 fois leurs bénéfices. Microsoft et Meta sont les plus gros clients de Nebius — mais Meta a annoncé en juillet 2026 vouloir revendre sa capacité excédentaire (« Meta Compute »), entrant directement sur le terrain des néoclouds.

---

### Le ratio qui compte : valeur d'entreprise rapportée à l'ARR futur
Sur le CA passé, Nebius paraît hors de prix. Sur l'**ARR visé fin 2026 (7 à 9 Md$)**, la valeur d'entreprise (≈ 70 Md$) ressort à **≈ 8 à 10 fois** ; sur le CA 2027 attendu par le consensus (≈ 11 Md$), à **≈ 6 à 7 fois** — un niveau comparable aux pairs. **Toute la prime de valorisation est un pari sur l'exécution 2026-2027.**`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 12 août 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart |
|---|---|---|---|
| CA groupe | 582,3 M$ | ≈ 573–575 M$ | **+1,5 à +2 % ✓** |
| CA cloud IA | 574,9 M$ (+514 % a/a) | — | Moteur unique |
| EBITDA ajusté | 236,2 M$ (41 %) | ≈ 173 M$ | **+37 % ✓** |
| BPA ajusté | −0,12 $ | ≈ −0,67 $ | **Nettement meilleur ✓** |
| BPA GAAP | −0,68 $ | ≈ −0,67 $ | En ligne |
| ARR fin juin | 3,0 Md$ (+598 %, +56 % t/t) | — | — |

**Battu sur toute la ligne**, surtout sur la rentabilité ajustée. La croissance séquentielle (+46 %) s'est faite **avant** l'arrivée de l'essentiel des capacités 2026, attendue au second semestre.

---

### Facteurs clés

- **Prix** : les contrats du trimestre se sont signés à **plus de 20 M$ de revenu annuel par MW** (base 2026 : ≈ 12 M$), avec des hausses de plus de 30 % sur les GPU d'ancienne génération par rapport au T1
- **Commercial** : quatre contrats « phares » d'une valeur moyenne supérieure à 1 Md$ chacun (Reflection, Cohere, un neolab américain, une société de trading quantitatif) ; valeur totale des contrats signés multipliée par près de 4 en un trimestre
- **Inférence** : volumes de Token Factory multipliés par plus de 3
- **Livraisons** : toutes les tranches du contrat Microsoft livrées ; capacité du second contrat Meta attendue début 2027

---

### Évolution des marges

- **Coût des revenus** : 23 % du CA (29 % un an plus tôt) — levier opérationnel
- **R&D** : 33 % du CA, dont ≈ 116 M$ de charges non récurrentes liées à l'acquisition d'Eigen AI
- **SG&A** : 30 % du CA (65 % un an plus tôt)
- **Amortissements** : 45 % du CA — **attention** : la durée de vie des serveurs est passée de 4 à 5 ans début 2026, ce qui allège la charge d'environ 65 M$ par trimestre selon des estimations indépendantes

---

### Perspectives et guidance 2026 (toutes réaffirmées, une relevée)

- CA : **3,0 à 3,4 Md$**
- ARR fin 2026 : **7 à 9 Md$**
- Marge d'EBITDA ajusté : **≈ 40 %**
- Capex : **20 à 25 Md$**
- Puissance connectée fin 2026 : **800 MW à 1 GW**
- Puissance contractée fin 2026 : **relevée à 5 GW** (contre plus de 4 GW)

Le ton est confiant : « nous pourrions vendre toute notre capacité 2027 à ces conditions aujourd'hui ».

---

### Signaux d'alerte bilan et flux

- **Trésorerie** : 8,04 Md$ fin juin (+1,1 Md$ de trésorerie restreinte), renforcée en juillet-août par 775 M$ de dette adossée et **5,75 Md$ de convertibles**
- **Flux opérationnel** : ≈ 2,25 Md$ au T2 — mais gonflé par les **prépaiements clients** (produits constatés d'avance ≈ 6 Md$ contre 4,8 Md$ fin mars). C'est de la trésorerie empruntée à l'avenir, pas du profit
- **Capex** : ≈ 5,7 Md$ au seul T2 ; le flux de trésorerie disponible reste lourdement négatif
- **Dilution** : 12,7 millions d'actions vendues via le programme ATM au T2 (≈ 2,8 Md$ à 223,6 $ en moyenne), puis échange de 800 M$ de convertibles contre ≈ 15,8 millions d'actions en août

---

### Réaction du marché

Le titre a gagné **≈ 39 % sur la semaine de publication** : la réaffirmation de la cible d'ARR de 7 à 9 Md$ a dissipé les doutes nés de la chute de juillet. Mais une semaine plus tard, l'annonce de l'émission de convertibles a fait reculer l'action de 14 % en séance. **Leçon** : le marché croit à la demande ; ce qu'il tarife désormais, c'est le **coût en dilution** de la croissance.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences de résultats — priorités du management

### Ton général — l'évolution depuis la renaissance de 2024

**Fin 2024 – début 2025 (relance)** : discours de **bâtisseur**. Arkady Volozh présente Nebius comme « une start-up avec un bilan de grande entreprise ». Priorité : construire la capacité, recruter (arrivée d'un directeur commercial venu de Twilio et Cloudflare), prouver que le logiciel tient la charge.

**Mi-2025 (accélération)** : la demande dépasse l'offre. Le management insiste sur la « capacité entièrement vendue » et relève sa cible d'ARR. Le contrat Microsoft (septembre 2025) change d'échelle le récit.

**Fin 2025 (premier accroc)** : au T3 2025, le CA manque légèrement le consensus et la guidance annuelle est abaissée à 500–550 M$ ; le ton devient plus pédagogique sur le **décalage entre contrats signés et capacités livrées**.

**2026 (exécution et repricing)** : ton **assuré, presque triomphal**. « La demande se matérialise dans des contrats signés », « ce trimestre, le marché a validé notre stratégie ». Le vocabulaire glisse de la croissance vers **l'économie unitaire** : revenu par MW, délai de remboursement, part du capex couverte par les clients.

---

### Priorités répétées du management

**1. La capacité, encore la capacité** — Gigawatts contractés (5 GW visés), puissance connectée (800 MW à 1 GW fin 2026), puis **plus de 1 GW par an à partir de 2027**. Chaque appel commence par l'état d'avancement des sites.

**2. Le prix et la durée des contrats** — Mise en avant systématique du revenu par MW (12 M$ en base, plus de 20 M$ au T2, plus de 40 M$ pour les contrats courts du T3) et du **délai de remboursement ramené à 1 an et 10 mois**.

**3. Le financement « intelligent »** — Prépaiements (plus de 9 Md$ attendus en 2026), dette adossée aux contrats des clients notés, modèle asset-light. Le message : « nous ne finançons pas notre croissance uniquement par l'émission d'actions ».

**4. Le logiciel et l'inférence** — Token Factory, Tavily, l'agent Echo, les acquisitions d'Eigen AI et Clarifai : Nebius veut être perçu comme un **cloud complet**, pas comme un hébergeur de GPU.

**5. La discipline commerciale** — Choix assumé de **ne pas vendre toute la capacité 2027** aujourd'hui pour garder de la marge de manœuvre sur des contrats plus rémunérateurs.

---

### Analyse du sentiment

| Période | Sentiment | Thème dominant | Signal |
|---|---|---|---|
| T3 2025 | Prudent | Retards de mise en service | Guidance abaissée |
| T4 2025 | Confiant | Inflexion de l'EBITDA, ARR 1,2 Md$ | Objectifs 2026 ambitieux |
| T1 2026 | Très confiant | Meta 27 Md$, NVIDIA 2 Md$ | Capex relevé à 20–25 Md$ |
| T2 2026 | Triomphal maîtrisé | Repricing, payback < 2 ans | Guidance réaffirmée, puissance relevée |

- **Confiance** : très élevée, étayée par les chiffres du T2.
- **Transparence** : bonne sur la demande et les prix ; **plus évasive sur le calendrier de rentabilité GAAP** et sur la trajectoire de dilution.
- **À lire entre les lignes** : le passage d'un discours sur la croissance à un discours sur le **retour sur capital** est un signe de maturité — mais aussi la réponse à un marché devenu sensible au coût du financement. Le prochain test est la publication de novembre (ARR fin septembre), qui dira si les capacités du second semestre arrivent à l'heure.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de l'équipe dirigeante

### Arkady Volozh — Fondateur et directeur général

**Bilan** : cofondateur de **Yandex** en 1997, il en a fait le premier moteur de recherche de Russie, coté au Nasdaq en 2011 lors de l'une des plus grosses introductions technologiques de l'époque. Après la scission de 2024, il a repris les actifs internationaux et les a transformés en **un acteur de l'infrastructure IA valorisé environ 68 Md$**, avec un CA multiplié par plus de cinq en un an.

**Ancienneté et alignement** : à la tête du projet depuis l'origine. Les actions de **classe B (10 voix chacune)**, détenues pour l'essentiel par Volozh et des fondateurs historiques, représentent environ **58 % des droits de vote pour environ 12 % du capital** (33,5 millions d'actions B contre 238,4 millions d'actions A lors de l'AG d'août 2026). Alignement économique fort, contrôle quasi total.

**Point sensible** : Volozh a été placé sous sanctions de l'UE en 2022, levées en mars 2024 après sa condamnation publique de la guerre en Ukraine. Ce passé reste un sujet de perception pour certains investisseurs, même si la rupture avec la Russie est juridiquement consommée.

---

### Équipe exécutive

| Dirigeant | Fonction | Profil |
|---|---|---|
| Arkady Volozh | Fondateur, CEO | Cofondateur de Yandex |
| Maria del Dado Alonso Sánchez | Directrice financière (depuis juin 2025) | 25 ans de finance internationale (Amazon, Booking) |
| Ophir Nave | Directeur des opérations | Juriste et opérationnel, pilier de la scission |
| Andrey Korolenko | Directeur produit et infrastructure | Architecte de la plateforme cloud |
| Roman Chernin | Cofondateur, directeur commercial historique | Développement client |
| Marc Boroditsky | Directeur du chiffre d'affaires (depuis mai 2025) | Ex-Twilio, ex-Cloudflare |
| Lindsey Irvine | Directrice marketing (depuis juillet 2026) | Ex-Square, Benchling, MuleSoft |

Une équipe **d'ingénieurs fondateurs** renforcée par des profils américains de la tech commerciale : le bon mélange pour passer de la construction à la vente à grande échelle.

---

### Allocation du capital — l'enjeu central

| Décision | Montant | Lecture |
|---|---|---|
| Capex 2026 | 20–25 Md$ (guidance) | Pari massif, adossé à plus de 40 Md$ d'engagements clients |
| Convertibles T1 et T3 2026 | 4,34 Md$ + 5,75 Md$ | Coupons bas (0,50 % à 4,50 %), conversion autour de 313–325 $ |
| Programme ATM | ≈ 2,8 Md$ (T2 2026) | Émission à ≈ 224 $, proche des plus hauts |
| Acquisitions logicielles | Tavily, Eigen AI, Clarifai | Montée en gamme vers l'inférence |
| Participations | ClickHouse, Toloka | Réserves de valeur, monétisables |

**Tendance** : allocation **offensive mais intelligente** — émission d'actions plutôt près des plus hauts, dette convertible à coupon faible, prépaiements clients. Le ROE et le ROIC ne sont pas encore significatifs (perte opérationnelle) ; le seul juge sera le **rendement des capacités 2026-2027**. Signal encourageant : le délai de remboursement des contrats du T2 est passé sous les deux ans.

---

### Signaux d'alerte

- **Ventes d'initiés** : le directeur des opérations Ophir Nave a vendu **500 000 actions le 5 octobre 2026 (≈ 118 M$)**, soit environ la moitié de sa participation, dans le cadre d'un plan programmé en mai ; ventes plus modestes d'Andrey Korolenko et de la directrice financière. Programmé ne veut pas dire neutre.
- **Double classe d'actions** : les actionnaires de classe A n'ont aucun pouvoir réel de contestation ; l'AG a renouvelé l'autorisation d'émettre jusqu'à 20 % du capital supplémentaire sans droit préférentiel.
- **Rémunération en actions** : 102,5 M$ au seul T2 2026 (17,6 % du CA au S1), en hausse.
- **Parties liées** : NVIDIA est à la fois fournisseur principal, actionnaire (≈ 9 %) et partenaire commercial — situation courante dans le secteur, mais à suivre.
- **Pas de comportement promotionnel excessif** : les objectifs sont ambitieux mais ont jusqu'ici été tenus ou dépassés (sauf au T3 2025).

### Fondateur ou gestionnaire ?

**Fondateur-ingénieur**, avec l'avantage de la vision longue et d'une culture technique profonde — exactement ce qu'exige une phase de construction à marche forcée. Le revers : une gouvernance verrouillée qui fait reposer toute la confiance sur un homme et sa garde rapprochée.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Les facteurs qui ont fait bouger le titre

### Contexte
Nebius n'a que deux ans d'historique boursier sous sa forme actuelle : la cotation a repris en **octobre 2024** autour de 20 $, après plus de deux ans de suspension liée à l'ex-Yandex. Le titre est extrêmement volatil — plage de 73,52 $ à 299,86 $ sur douze mois — et très sensible au sentiment sur l'IA. La position vendeuse à découvert a atteint **≈ 28 % du flottant** à l'été 2026.

### Hausses significatives (plus de 5 %)

**Décembre 2024 — Tour de table de 700 M$ avec NVIDIA et Accel** : validation du projet par le fournisseur clé.

**8–9 septembre 2025 — Contrat Microsoft (jusqu'à 19,4 Md$)** : **près de +50 % en une séance**. Le contrat transforme Nebius en fournisseur des hyperscalers.

**12 février 2026 — Résultats du T4 2025** : ARR de 1,2 Md$ au-dessus de la guidance, EBITDA ajusté positif ; **+12 %** au-dessus de 100 $, une semaine après le plus bas annuel (73,52 $ le 5 février).

**Mars 2026 — Meta (jusqu'à 27 Md$) et investissement de 2 Md$ de NVIDIA** : le titre change de catégorie et devient une grande capitalisation de l'infrastructure IA.

**13 mai 2026 — Résultats du T1** : CA +684 %, capex relevé, 1,2 GW sécurisé en Pennsylvanie ; **+15 à +20 %** en séance, nouveaux records.

**22 juin 2026 — Plus haut historique à 299,86 $.**

**12 août 2026 — Résultats du T2** : guidance d'ARR réaffirmée, puissance contractée relevée ; **≈ +39 % sur la semaine**.

**1er et 6 octobre 2026 — Hausses tarifaires et relèvements d'analystes** : hausse des prix GPU et CPU au 1er octobre, relèvement des estimations par Bank of America, relèvement à « surperformer » par BNP Paribas (objectif 399 $) ; **+9 % puis +7,4 %**, clôture à 249,87 $ le 6 octobre, cassure de la résistance des 250 $.

---

### Baisses significatives (plus de 5 %)

**Mi-octobre à décembre 2025 — Peur d'une bulle IA et résultats du T3** : CA légèrement inférieur aux attentes, guidance abaissée, lancement d'un programme de vente de 25 millions d'actions ; **≈ −9 % le jour de la publication**, ≈ −30 % depuis le pic d'octobre.

**Mars 2026 — Émission de convertibles** : **≈ −10 %** en une séance sur les craintes de dilution.

**Fin juin 2026 — Craintes de valorisation sur l'IA** : repli marqué depuis le plus haut historique.

**1er juillet 2026 — « Meta Compute »** : les informations sur la revente par Meta de sa capacité excédentaire font chuter le titre de **14 à 17 %** ; nouvelles baisses les 7 et 16 juillet. Plus bas le **29 juillet (≈ 149 $)**, soit **≈ −50 %** depuis le sommet.

**Début août 2026 — Audience publique houleuse sur le site de Vineland** : **≈ −10 %**.

**19 août 2026 — Convertibles de 4,5 Md$ portées à 5,75 Md$ et échange de dette contre actions** : jusqu'à **−14 %** en séance, **−21 % sur la semaine**.

---

### Facteurs structurels

- **Bêta « IA »** : le titre amplifie chaque mouvement du secteur (NVIDIA, CoreWeave, annonces des hyperscalers)
- **Dilution récurrente** : chaque levée de fonds a provoqué une baisse de 7 à 14 % en séance
- **Contrats géants** : les signatures avec Microsoft et Meta ont produit les plus fortes hausses
- **Position vendeuse élevée** : carburant de « short squeezes » violents dans les deux sens`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Avertissement
Nebius est **déficitaire au niveau opérationnel**, double sa capacité tous les quelques trimestres et lève des capitaux en permanence. Les projections ci-dessous sont des **scénarios indicatifs** construits à partir de la guidance, du consensus et d'une économie unitaire simplifiée — pas des prévisions de précision. Le BPA GAAP 2026 est en outre faussé par une plus-value comptable non récurrente (réévaluation de ClickHouse, ≈ 780 M$ au S1).

### Hypothèses de modélisation

**Croissance du secteur** : la demande de calcul IA reste supérieure à l'offre au moins jusqu'en 2027 ; les dépenses d'investissement des hyperscalers continuent de croître.

**Parts de marché** : Nebius gagne des parts parmi les néoclouds grâce à son bilan (accès au financement) et à son logiciel. Consensus : CA ≈ 3,4 Md$ en 2026, ≈ 11 Md$ en 2027, ≈ 21 Md$ en 2028. **Notre scénario central est plus prudent** : 3,2 Md$, 9 à 10 Md$, 15 à 18 Md$.

**Prix** : revenu annuel par MW de ≈ 12 M$ (base 2026) à plus de 20 M$ pour les contrats signés au T2, en vigueur à partir de fin 2026. Hypothèse centrale : moyenne du parc ≈ 16 à 18 M$/MW en 2027-2028.

**Pressions sur les coûts** : électricité, colocation, salaires d'ingénieurs ; le coût des revenus reste autour de 23 à 27 % du CA.

**Levier opérationnel** : marge d'EBITDA ajusté ≈ 40 % en 2026, 45 à 50 % en 2027-2028. Mais les **amortissements** (parc GPU amorti sur 5 ans) absorbent l'essentiel : la marge opérationnelle GAAP ne devient positive qu'avec un revenu par MW supérieur à ≈ 15 M$.

**Coûts de financement** : convertibles à coupon faible (0,50 % à 4,50 %), dette adossée à SOFR + 2,50 %. Charge financière nette estimée à 0,3 Md$ en 2026, 0,5 à 0,7 Md$ en 2027, 0,8 à 1,0 Md$ en 2028.

**Dilution** : ≈ 272 millions d'actions aujourd'hui ; émissions ATM, échanges de convertibles et rémunération en actions → **≈ 300 millions fin 2027, ≈ 330 à 350 millions fin 2028** (dilution annuelle de 6 à 10 %).

---

### Estimations

| Exercice | CA (scénario central) | BPA estimé | P/E au cours actuel (≈ 250 $) |
|---|---|---|---|
| 2025 (réalisé) | 0,53 Md$ | ≈ 0 $ (gains de cession) | n.s. |
| **2026E** | **≈ 3,2 Md$** | **ajusté ≈ −1,30 à −1,80 $ · GAAP ≈ 0 $** | **n.s.** |
| **2027E** | **≈ 9–10 Md$** | **≈ −0,50 à +1,00 $ (central ≈ +0,30 $)** | **n.s. à > 250x** |
| **2028E** | **≈ 15–18 Md$** | **≈ +3,00 à +6,00 $ (central ≈ +4,00 $)** | **≈ 40–85x (central ≈ 62x)** |

---

### Sensibilité

- **Scénario haussier** (ARR fin 2026 en haut de fourchette à 9 Md$, prix > 20 M$/MW tenus, 1 GW déployé par an) : CA 2028 au niveau du consensus (≈ 21 Md$), BPA 2028 ≈ 6 à 7 $ → P/E 2028 ≈ 35–40x, cohérent avec un objectif au-delà de 350 $
- **Scénario central** : BPA 2028 ≈ 4 $ → P/E 2028 ≈ 62x — la valorisation actuelle intègre déjà une bonne partie de la réussite
- **Scénario baissier** (retards de capacité, fin de la pénurie de GPU, prix ramenés vers 12 M$/MW) : pertes prolongées jusqu'en 2028, dilution accrue, BPA 2028 proche de zéro

**Conclusion** : comme pour toute infrastructure en construction, le BPA est un **indicateur retardé**. Les vrais juges de paix d'ici 2028 sont trois chiffres publiés chaque trimestre : **l'ARR**, **la puissance connectée** et **le revenu par MW des nouveaux contrats**. Le BPA suivra — ou pas.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Leviers de création de valeur

**1. Une pénurie qui se transforme en pouvoir de prix** : le revenu annuel par MW des nouveaux contrats a bondi de ≈ 12 M$ à plus de 20 M$, et jusqu'à plus de 40 M$ pour les contrats courts. Avec un délai de remboursement ramené à **1 an et 10 mois**, chaque GW mis en service devient une machine à cash. Nebius affirme pouvoir vendre toute sa capacité 2027 à ces conditions.

**2. Une visibilité rare pour une jeune entreprise** : plus de **40 Md$ d'engagements clients**, dont des contrats pluriannuels avec Microsoft et Meta, plus de 9 Md$ de prépaiements attendus en 2026. La croissance 2027 est en grande partie déjà signée.

**3. Le meilleur bilan des néoclouds** : convertibles à 0,50 %, dette adossée à SOFR + 2,50 %, clients qui financent 50 à 60 % du capex, participations ClickHouse et Toloka comme réserves de valeur. Là où ses pairs s'endettent lourdement, Nebius se finance à bas coût.

**4. La montée vers le logiciel** : Token Factory (inférence ×3 au T2), Tavily, Eigen AI, Clarifai. Si l'inférence devient le premier usage de l'IA, Nebius capte une marge logicielle au-dessus du simple loyer de GPU.

**5. Des surprises de bénéfices possibles** : la marge d'EBITDA du cloud IA est déjà à 50 % ; les contrats repricés n'entrent en revenus qu'à partir de fin 2026. Le consensus pourrait sous-estimer la marge 2027.

**6. Allocation du capital opportuniste** : émissions d'actions faites près des plus hauts (≈ 224 $), conversion des nouvelles obligations fixée à 313–325 $.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques susceptibles d'abîmer durablement l'activité

**1. La fin de la pénurie** : la capacité GPU mondiale explose (hyperscalers, Oracle, néoclouds, anciens mineurs, Meta Compute). Si l'offre rattrape la demande en 2027-2028, les prix par MW reviennent vers 12 M$ ou moins, et un parc amorti sur 5 ans devient un fardeau.

**2. L'obsolescence accélérée** : NVIDIA sort une génération par an (Blackwell, Vera Rubin, puis la suivante). Amortir sur 5 ans des puces dont la valeur économique dure peut-être 3 ans **surestime les bénéfices** et sous-estime le besoin de réinvestissement.

**3. Le risque d'exécution** : passer d'environ 170 MW connectés à 800 MW – 1 GW en six mois, puis à plus de 1 GW par an. Un retard de site (oppositions locales à Vineland, raccordement électrique, livraisons NVIDIA) décale tout — revenus, marges et confiance.

### Analyse pré-mortem
Nous sommes en octobre 2028, l'action vaut 90 $. Que s'est-il passé ? Les capacités du second semestre 2026 sont arrivées avec un trimestre de retard ; l'ARR fin 2026 est sorti à 6 Md$ au lieu de 7 à 9 Md$. En 2027, la mise en service massive de Vera Rubin chez tous les acteurs a fait chuter les prix des générations précédentes. Pour financer 30 Md$ de capex, Nebius a dû émettre des actions à des cours plus bas. Le marché, qui payait 9 fois l'ARR futur, n'en paie plus que 4 fois.

### Les multiples sont-ils trop élevés ?
Sur le passé, sans aucun doute (≈ 50 fois le CA des douze derniers mois). Sur l'ARR visé fin 2026 (≈ 9 fois) ou le CA 2027 du consensus (≈ 6 à 7 fois), **non — à condition que tout se passe comme prévu**. La valorisation n'est pas absurde ; elle est **conditionnelle**.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : les investisseurs débattent du prix par GPU et de la bulle IA, mais la vraie rareté n'est plus la puce — c'est **l'énergie raccordée**. Les 5 GW contractés de Nebius valent peut-être davantage que son parc GPU actuel, et le modèle asset-light pourrait faire de Nebius un **éditeur de logiciel d'infrastructure** prélevant sa marge sur des capacités financées par d'autres. À l'inverse, ce que les haussiers ne veulent pas voir : un flux opérationnel gonflé par des prépaiements est une **dette envers les clients** ; si la livraison dérape, ce cash devra être servi en capacité, coûte que coûte.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — signaux d'alerte comptables

### Amortissements et durée de vie des équipements — RISQUE ÉLEVÉ
Début 2026, Nebius a **allongé de 4 à 5 ans** la durée d'amortissement de ses serveurs et équipements réseau. Effet estimé : **≈ 65 M$ de charge en moins au seul T2 2026** (≈ 325 M$ d'amortissements au lieu de ≈ 260 M$), soit une perte opérationnelle de ≈ 176 M$ au lieu de ≈ 241 M$. Le choix est défendable (pratique répandue dans le secteur), mais il **embellit mécaniquement les résultats** au moment où NVIDIA accélère le rythme de ses générations.

**À surveiller** : toute dépréciation d'anciens GPU, la valeur de revente des générations Hopper, et l'alignement de la durée d'amortissement avec la durée réelle des contrats.

### Comptabilisation des revenus et prépaiements — RISQUE MODÉRÉ
Les prépaiements clients (plus de 9 Md$ attendus en 2026) sont comptabilisés en **produits constatés d'avance** (≈ 6 Md$ fin juin) et reconnus au fil de la fourniture du service. Correct en principe ; mais le **flux de trésorerie opérationnel en est gonflé** (≈ 4,5 Md$ au S1 2026) et ne reflète pas la rentabilité réelle.

**À surveiller** : les clauses de remboursement en cas de retard de livraison, et l'écart entre flux opérationnel et EBITDA ajusté.

### Définition de l'ARR — RISQUE MODÉRÉ
L'ARR correspond au **CA du dernier mois du trimestre multiplié par 12**. Indicateur utile mais flatteur en phase de forte croissance : il annualise un pic, inclut des contrats courts à prix élevé (3 à 6 mois) qui ne se renouvelleront pas forcément au même tarif.

### Information sectorielle et ajustements non-GAAP — RISQUE MODÉRÉ
L'EBITDA ajusté exclut la rémunération en actions (102,5 M$ au T2, en hausse de près de 600 % sur un an), les coûts d'acquisition et les gains sur participations. L'écart entre EBITDA ajusté (+236 M$) et résultat net (−190 M$) dépasse 420 M$ au T2.

**À surveiller** : la récurrence des charges dites « non récurrentes » liées aux acquisitions (Eigen AI : ≈ 116 M$ au T2).

### Gains sur participations — RISQUE MODÉRÉ
Le résultat net du S1 2026 (+430,8 M$) doit l'essentiel à une **réévaluation de ClickHouse (≈ 780 M$)**. Non monétaire, non récurrent, et dépendant de la valorisation d'une société non cotée. Le BPA GAAP 2026 en sera durablement trompeur.

### Contrats de location et engagements — RISQUE ÉLEVÉ
Colocation (DataOne et autres), baux de terrains et d'électricité, commandes fermes de GPU : les **engagements hors bilan ou de location** se chiffrent en dizaines de milliards de dollars et ne figurent qu'en annexe. Le modèle asset-light ajoute une couche de complexité (qui supporte le risque en cas de non-utilisation ?).

### Parties liées — RISQUE MODÉRÉ
**NVIDIA** est à la fois fournisseur quasi exclusif, actionnaire (≈ 9 %, avec bons de souscription) et partenaire commercial. Les conditions d'achat de GPU et d'éventuels accords de rachat de capacité doivent être documentés.

### Rémunération en actions et dilution — RISQUE ÉLEVÉ
Rémunération en actions à 17,6 % du CA au S1 2026 ; ventes ATM (12,7 millions d'actions au T2) ; échange de convertibles contre ≈ 15,8 millions d'actions en août ; nouvelles convertibles de 5,75 Md$ ; bons de souscription NVIDIA ; autorisation d'émettre jusqu'à 20 % du capital sans droit préférentiel.

### Goodwill et incorporels — RISQUE FAIBLE À MODÉRÉ
Les acquisitions (Tavily, Eigen AI, Clarifai) restent modestes à l'échelle du bilan, mais génèrent du goodwill et des charges post-acquisition récurrentes.

---

### Verdict global
**Risque comptable : MODÉRÉ À ÉLEVÉ.** Aucune irrégularité identifiée, comptes établis en normes US GAAP et audités. Mais trois choix flattent la lecture : **l'allongement des amortissements**, **le flux opérationnel gonflé par les prépaiements** et **un résultat net soutenu par des réévaluations**. L'investisseur doit raisonner sur l'EBITDA après loyers et sur le flux de trésorerie disponible, pas sur l'ARR ou le BPA GAAP.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Arkady Volozh — classées par importance

### Stratégie et avantage concurrentiel

**1.** Vous visez 800 MW à 1 GW de puissance connectée fin 2026. **Combien de MW étaient effectivement en service fin septembre**, et quelle part des capacités du quatrième trimestre dépend de sites encore en construction ou soumis à des autorisations locales ?

**2.** Les contrats du T2 se sont signés à plus de 20 M$ par MW. **À quel niveau de prix votre parc reste-t-il rentable une fois la pénurie de GPU résorbée**, et quelle part de vos revenus 2027 est contractuellement verrouillée à ces prix ?

**3.** Meta est votre client — et devient votre concurrent avec Meta Compute. **Comment vous protégez-vous** d'un client qui pourrait revendre demain la capacité que vous lui louez aujourd'hui ?

### Allocation du capital et bilan

**4.** Avec un capex de 20 à 25 Md$ en 2026 et plus de 1 GW par an à partir de 2027, **quel est le besoin de financement externe cumulé d'ici 2028**, hors prépaiements, et quelle part viendra encore des actions ou des convertibles ?

**5.** **Quelle dilution totale** un actionnaire d'aujourd'hui doit-il anticiper d'ici fin 2028, en intégrant l'ATM, les conversions, les bons de souscription de NVIDIA et la rémunération en actions ?

**6.** Vous avez allongé la durée d'amortissement des serveurs à 5 ans. **Quelle est la durée de vie économique réelle** de vos GPU Hopper, et à quel prix les relouez-vous aujourd'hui par rapport à leur prix d'origine ?

**7.** **À quelle date anticipez-vous un résultat opérationnel GAAP positif**, et un flux de trésorerie disponible positif hors prépaiements ?

### Risques

**8.** Les prépaiements clients atteignent plusieurs milliards. **Quelles pénalités ou obligations de remboursement** s'appliquent en cas de retard de livraison ?

**9.** **Quelle est la part de vos trois premiers clients** dans l'ARR et dans les 40 Md$ d'engagements ? Que se passe-t-il si l'un d'eux ne renouvelle pas ?

**10.** Votre dépendance à NVIDIA est quasi totale. **Testez-vous des alternatives** (AMD, puces maison des clients), et que se passerait-il si NVIDIA privilégiait d'autres néoclouds ?

**11.** Les oppositions locales (Vineland) et les tensions sur les réseaux électriques se multiplient. **Combien de vos 5 GW contractés disposent déjà de tous les permis** et d'un raccordement garanti ?

### Vision long terme

**12.** Dans cinq ans, **quelle part de votre CA viendra de l'inférence et du logiciel** (Token Factory, Tavily) plutôt que de la location de capacité brute ?

**13.** Le modèle asset-light peut-il devenir majoritaire ? **Quelle marge** espérez-vous sur une capacité financée et détenue par un partenaire ?

### Gouvernance

**14.** Votre directeur des opérations vient de vendre la moitié de sa participation. **Quel message adressez-vous aux actionnaires**, et envisagez-vous des engagements de conservation pour l'équipe dirigeante ?

**15.** La structure à double classe vous donne le contrôle des votes. **Quel contre-pouvoir** garantit aux actionnaires de classe A que leurs intérêts seront protégés lors des prochaines levées de fonds ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse vendeuse — démontage de l'argumentaire haussier

### 1. Un modèle structurellement fragile : louer un actif qui se déprécie à toute vitesse

Nebius achète des GPU au prix fort à un fournisseur quasi monopolistique, les amortit sur 5 ans, et les loue à des clients qui peuvent changer de fournisseur à l'échéance. **Le seul moment où ce modèle est très rentable, c'est pendant une pénurie.** Or chaque génération NVIDIA rend la précédente moins désirable en douze à dix-huit mois. Si les prix de location chutent plus vite que les amortissements, la rentabilité affichée s'évapore.

### 2. Où se concentrent les revenus — et que se passe-t-il si cela change ?

Microsoft (jusqu'à 19,4 Md$) et Meta (jusqu'à 27 Md$ + 3 Md$) pèsent l'essentiel des 40 Md$ d'engagements. Or **ces deux clients construisent eux-mêmes leurs centres de données** et n'achètent chez Nebius que pour combler un manque temporaire. Meta a même annoncé vouloir revendre sa capacité excédentaire. Le jour où ces géants ont rattrapé leur retard, ils deviennent au mieux des clients moins généreux, au pire des concurrents.

### 3. Pourquoi l'avantage concurrentiel est plus fragile qu'il n'y paraît

Le logiciel maison est réel — mais **les laboratoires d'IA achètent avant tout des GPU disponibles**, au meilleur prix. CoreWeave, Oracle, Lambda, Crusoe, IREN et les anciens mineurs de bitcoin offrent la même puce, avec la même pile CUDA. La pénurie masque la banalisation ; elle ne la supprime pas.

### 4. Le concurrent le plus dangereux : Meta Compute, et derrière lui les hyperscalers

Les haussiers surveillent CoreWeave. Le vrai danger, c'est un **hyperscaler qui revend ses excédents** à prix marginal : il n'a pas besoin de rentabiliser l'actif, déjà payé par son activité principale. La chute de 14 à 17 % du 1er juillet 2026 était un avertissement, pas un accident.

### 5. L'allocation du capital : une machine à diluer

Trois levées en 2026 (convertibles de 4,34 Md$ en mars, ATM de ≈ 2,8 Md$ au T2, convertibles de 5,75 Md$ en août), un échange de dette contre ≈ 15,8 millions d'actions, une autorisation d'émettre 20 % du capital sans droit préférentiel. **Le capex de 20 à 25 Md$ en 2026, puis plus de 1 GW par an, ne sera pas financé uniquement par les clients.** Chaque nouvelle tranche réduit la part de l'actionnaire actuel.

### 6. Comptabilité flatteuse et incitations mal alignées

- Allongement de 4 à 5 ans de la durée d'amortissement → ≈ 65 M$ de charges en moins par trimestre
- Flux opérationnel gonflé par les prépaiements : du cash qui est en réalité une **obligation de livraison**
- Résultat net du S1 soutenu par une réévaluation de ClickHouse (≈ 780 M$)
- Le directeur des opérations vend ≈ 118 M$ d'actions à 236 $ en pleine phase haussière ; double classe d'actions qui neutralise les minoritaires

### 7. Ce qui doit être vrai pour justifier ≈ 250 $

À ≈ 68 Md$ de capitalisation (≈ 70 Md$ de valeur d'entreprise), il faut : un ARR fin 2026 d'au moins 8 Md$, un CA 2027 proche de 10 à 11 Md$, une marge d'EBITDA durable au-dessus de 45 %, des prix de location qui tiennent au-dessus de 15 M$ par MW, et une dilution contenue sous 8 % par an. **Cinq conditions simultanées.**

### 8. Si la croissance déçoit de 20 à 30 %

Un ARR fin 2026 à 5,5–6,5 Md$ au lieu de 8 Md$ et un CA 2027 à 7–8 Md$ : le marché ne paierait plus 9 fois l'ARR mais 5 à 6 fois → valeur d'entreprise ≈ 30 à 40 Md$, **soit un cours de 100 à 140 $ (−45 % à −60 %)**, avant même de compter une dilution supplémentaire. Le précédent existe : −50 % entre le 22 juin et le 29 juillet 2026, sans dégradation des fondamentaux.

### Le scénario catastrophe unique
**Un retournement brutal des dépenses IA** (correction des valorisations des laboratoires, échec de monétisation de l'IA générative) qui ferait annuler ou renégocier des contrats courts et moyens, alors que Nebius s'est engagé sur des dizaines de milliards de GPU, de baux et d'électricité. Les coûts fixes resteraient, les revenus non. **Probabilité : faible à modérée (15 à 25 % d'ici 2028)** — mais l'impact serait existentiel pour un acteur sans activité de repli.

### Conclusion vendeuse
Nebius est probablement **le mieux géré et le mieux financé des néoclouds**. Mais l'action ne se paie pas sur ce qu'elle est — elle se paie sur une exécution parfaite dans un marché dont la rareté est par nature temporaire. **L'écart entre « excellente entreprise » et « excellent placement à ce prix » se mesure en milliards de dollars de capex et en points de dilution.**`,
  },
];

export default { ...meta, modules };
