// ============================================================
//  DOSSIER : Amentum Holdings, Inc. (AMTM)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Données arrêtées au 14 août 2026 (clôture NYSE).
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "amtm",                     // identifiant d'URL : /dossier/amtm
  ticker: "AMTM",
  name: "Amentum Holdings, Inc.",
  exchange: "NYSE",
  sector: "Services d'ingénierie et de technologies pour l'État fédéral",
  initials: "AMTM",                 // affiché dans la pastille
  tagline: "Prestataire d'ingénierie avancée et de technologies critiques pour l'État fédéral américain et ses alliés, né de la fusion Amentum – Jacobs Critical Mission Solutions.",
  riskScore: 55,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "amtm.html",
  externalReport: true,             // active la 15e tuile (bordure or)
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Amentum est un **prestataire de services d'ingénierie et de technologies pour l'État fédéral américain**, coté au NYSE depuis le 30 septembre 2024. Le groupe emploie environ **50 000 personnes dans plus de 70 pays**, pour un chiffre d'affaires de **14,4 milliards $** sur l'exercice 2025 (clos le 3 octobre 2025). Siège : Chantilly, Virginie.

L'entreprise actuelle est née d'une opération de **Reverse Morris Trust** finalisée le 27 septembre 2024 : l'Amentum historique (issu de la scission des services de gestion d'AECOM en 2020, puis enrichi des acquisitions de DynCorp en 2020 et de PAE en 2022) a fusionné avec les divisions **Critical Mission Solutions** et **Cyber & Intelligence** de Jacobs Solutions. Les actionnaires de Jacobs ont reçu 51 % du capital, Jacobs conservant 7,5 % — depuis largement cédés.

Le modèle est celui d'un **intégrateur de services sous contrat public**, pas d'un industriel : Amentum ne fabrique quasiment rien et ne détient pratiquement pas de propriété intellectuelle valorisable. Il vend des **heures d'ingénieurs et de techniciens habilités**, encadrées par des contrats pluriannuels avec des agences fédérales. La création de valeur repose sur trois piliers :

- **L'habilitation de sécurité** : une part significative des effectifs dispose d'accréditations de sécurité, ressource rare et longue à constituer
- **Le passé de performance (past performance)** : les marchés publics fédéraux récompensent l'exécution passée, ce qui verrouille les titulaires sortants
- **L'échelle** : la capacité à porter en tant que maître d'œuvre des contrats-cadres géants de type IDIQ (Indefinite Delivery / Indefinite Quantity)

## Principaux produits et services

Le groupe s'organise en **deux segments** depuis la fusion :

**Global Engineering Solutions (GES)** — environ 58 % du chiffre d'affaires. C'est le lest du navire : remédiation environnementale de sites nucléaires hérités (Hanford, Savannah River), exploitation d'installations nucléaires, ingénierie de plateformes, soutien logistique et de chaîne d'approvisionnement, opérations de bases militaires, soutien aux essais et à l'entraînement.

**Digital Solutions (DS)** — environ 42 % du chiffre d'affaires. C'est le segment censé tirer le multiple : analyse du renseignement, cybersécurité, développement de systèmes spatiaux, informatique de nouvelle génération, analyse de données, infrastructure numérique critique (dont l'ingénierie de centres de données pour l'IA).

## Clients, fournisseurs, concurrents

**Clients** : environ **90 % du chiffre d'affaires provient directement d'agences fédérales américaines** — Department of Energy (DOE) et NNSA, Department of War (ex-DoD), communauté du renseignement (National Intelligence Program et Military Intelligence Program), NASA, Department of Homeland Security. À l'international : UK Ministry of Defence, UK Nuclear Decommissioning Authority, ministère australien de la Défense.

**Fournisseurs** : le principal intrant est la **main-d'œuvre qualifiée et habilitée**. Viennent ensuite les sous-traitants spécialisés, les équipementiers nucléaires (Westinghouse, BWXT) et les fournisseurs informatiques. La structure de coûts est majoritairement salariale.

**Concurrents** : **Leidos**, **Booz Allen Hamilton**, **CACI International**, **SAIC**, **Parsons**, **KBR**, **Jacobs Solutions**, **Peraton** (non coté, Veritas Capital), **General Dynamics IT**, **V2X**, **Fluor** et **BWXT** sur le nucléaire.

## Modalités contractuelles

Le mix contractuel est dominé par le **cost-plus (environ 62 % du chiffre d'affaires)** : l'État rembourse les coûts éligibles et verse une rémunération fixe ou incitative. Conséquence directe et fondamentale pour la lecture des comptes : **le risque d'exécution est faible, mais le plafond de marge l'est tout autant**. C'est ce qui explique une marge brute d'environ 10 % et une marge d'EBITDA ajusté autour de 8 % — soit la moitié ou le tiers de ce qu'un éditeur de logiciel ou un industriel de spécialité dégage.

Le solde se répartit entre contrats à prix fixe (firm-fixed-price) et à temps et matériel. Le carnet de commandes atteint **48,2 milliards $** au 3 juillet 2026, dont 6,2 milliards $ de carnet **financé** — c'est-à-dire réellement doté en crédits budgétaires.

> **Point clé de méthode** : la quasi-totalité des contrats fédéraux est **résiliable à la discrétion du client**, sans faute du prestataire. Le carnet de commandes est donc une visibilité, pas une garantie.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Amentum dans la chaîne de valeur

Amentum n'occupe pas une position industrielle classique. Il se situe entre un **budget public voté par le Congrès** en amont et une **mission opérationnelle** en aval. La « matière première » est le crédit budgétaire ; le « produit » est la disponibilité d'une capacité.

### Amont — Les intrants

**Le budget fédéral (intrant primaire)** : Congrès → agences (DOE, Department of War, NASA, DHS, communauté du renseignement) → bureaux d'acquisition → contrats. Toute rupture en amont (résolution continue, blocage budgétaire, séquestration, directive d'internalisation) se propage mécaniquement en aval.

**Le capital humain habilité** : le vrai goulet d'étranglement. Environ 50 000 employés, dont une proportion importante détient des habilitations de sécurité. Le recrutement se fait sur un vivier partagé avec Leidos, Booz Allen, CACI, SAIC, Peraton et General Dynamics IT — d'où une inflation salariale structurelle dans les métiers cyber et renseignement.

**Les partenaires technologiques et industriels** :
- **Westinghouse Electric** — accords de série signés en août 2026 pour soutenir le déploiement de la plateforme APX
- **BWXT** et **Fluor** — coentreprise H2C pour la gestion de déchets nucléaires
- **Fournisseurs informatiques et cloud** pour le segment Digital Solutions
- Un tissu dense de sous-traitants de niveau 2 et de petites entreprises (small business set-asides imposés par la réglementation fédérale)

---

### Amentum — La transformation

Le groupe agit comme **maître d'œuvre (prime contractor) et intégrateur de systèmes**. Sa valeur ajoutée consiste à assembler des équipes, des sous-traitants et des technologies tierces en une capacité opérationnelle conforme aux normes fédérales — dans des environnements où l'échec n'est pas une option : sites nucléaires contaminés, lancements spatiaux, installations classifiées.

**Structure de coûts type** : environ 90 % de coûts directs (salaires, sous-traitance, matériel refacturé), le reste en frais généraux et administratifs. C'est un modèle **capital-light** : les dépenses d'investissement représentaient seulement 27 M$ sur l'exercice 2025, pour 543 M$ de flux de trésorerie opérationnels.

---

### Aval — Les clients finaux et les missions

| Agence | Programmes emblématiques | Segment |
|---|---|---|
| DOE / NNSA | Hanford (traitement des cuves), Savannah River, projet IA & énergie | GES |
| NASA | Exploration Ground Systems / Artemis, KPLSS II, CMOE II, COSMOS | DS + GES |
| Department of War | Logistique Indo-Pacifique, soutien de flotte, entraînement | GES |
| Renseignement | Analytique, contre-ingérence, cyber-opérations | DS |
| UK MOD / NDA | Sites de la dissuasion nucléaire britannique, démantèlement | GES |
| Commercial | Infrastructure numérique critique, centres de données IA | DS |

---

### Cartographie simplifiée du flux

\`\`\`
CONGRÈS / BUDGET   →   AGENCES        →   AMENTUM              →   MISSION
Crédits votés          DOE, NASA          Maître d'œuvre           Site dépollué
Résolutions            DoW, DHS           ~50 000 employés         Lancement réussi
continues              Renseignement      Habilitations            Base opérationnelle
                       UK MOD             Intégration              Réacteur licencié
                                          Sous-traitants T2
\`\`\`

**La fragilité structurelle du schéma** : contrairement à un industriel qui peut diversifier ses débouchés, Amentum n'a **qu'un seul type de client**. Une décision administrative unique — comme la directive de la NASA de réinternaliser des travaux d'ingénierie confiés à des prestataires, annoncée en 2026 — retire environ **3 % du chiffre d'affaires du groupe pour l'exercice 2027**, sans qu'aucune performance commerciale ne puisse l'empêcher.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — Troisième trimestre de l'exercice 2026

Amentum publie deux segments depuis la fusion de 2024. Attention méthodologique : les comparaisons historiques restent perturbées par le périmètre (fusion Jacobs CMS de septembre 2024, cession de Rapid Solutions à Lockheed Martin en 2025, bascules de contrats vers des coentreprises non consolidées).

| Segment | CA T3 2026 | Variation a/a | EBITDA aj. | Marge |
|---|---|---|---|---|
| Global Engineering Solutions | 2 033 M$ | -5 % | 174 M$ | 8,6 % |
| Digital Solutions | 1 457 M$ | +3 % | 116 M$ | 8,0 % |
| **Total groupe** | **3 490 M$** | **-2 %** | **290 M$** | **8,3 %** |

**La lecture qui compte** : le segment censé être le moteur de croissance (Digital Solutions) progresse de seulement 3 %, tandis que le segment de lest (GES) recule de 5 %. Mais c'est **GES qui affiche la meilleure marge et la meilleure dynamique de marge (+110 points de base)**. L'histoire racontée par le management — le « numérique tire la valorisation » — n'est pour l'instant pas confirmée par les chiffres.

---

### Global Engineering Solutions — Le lest rentable

Périmètre : remédiation environnementale nucléaire, exploitation d'installations, ingénierie de plateformes, soutien et chaîne d'approvisionnement.

- Le recul de 5 % s'explique par des **bascules de contrats de consolidés vers des coentreprises non consolidées**, une cession de l'exercice 2025 et la fin programmée de programmes historiques
- L'expansion de marge de 110 points de base est le fait marquant : elle valide la thèse de synergies de coûts post-fusion
- C'est aussi le segment exposé au **renouveau nucléaire** : accords Westinghouse APX, bail de développement à Savannah River (DOE/NNSA), petits réacteurs modulaires au Royaume-Uni

### Digital Solutions — La promesse de re-notation

Périmètre : analyse du renseignement, cyber, systèmes spatiaux, informatique de nouvelle génération, infrastructure numérique critique.

- Croissance de 3 %, portée par la montée en puissance de contrats en infrastructure numérique critique et systèmes spatiaux
- Freinée par la cession de Rapid Solutions (activité produits, vendue à Lockheed Martin pour environ 325 M$ nets d'impôts)
- **C'est le segment qui portera l'impact de l'internalisation NASA** en 2027, selon le directeur financier

---

### Répartition géographique et par client

Environ **90 % du chiffre d'affaires est fédéral américain**. L'international (Royaume-Uni, Australie, Indo-Pacifique, Europe) reste minoritaire mais stratégiquement croissant : contrat de 406 M$ pour l'ingénierie de petits réacteurs modulaires au Royaume-Uni, contrat GSA de 77 M$ pour la logistique de la chaîne d'approvisionnement au Japon.

---

### Profil de marge et de rentabilité

- **Marge brute** : environ 10 % — l'une des plus faibles de tout l'univers coté suivi, conséquence directe du mix cost-plus
- **Marge d'EBITDA ajusté** : 8,3 % au T3 2026 (record trimestriel), contre 7,7 % un an plus tôt ; objectif d'environ 8,1 % en moyenne sur l'exercice
- **ROIC** : environ 4,6 % — inférieur au coût du capital, conséquence d'un bilan alourdi par le goodwill de fusion
- **ROE** : environ 2,9 % sur les douze derniers mois

**Ce qu'il faut retenir** : Amentum est un business à **faible marge, faible intensité capitalistique et forte conversion en trésorerie**. La totalité du débat d'investissement porte sur la capacité à faire passer la marge d'EBITDA de 8 % à 9-10 % sans croissance du chiffre d'affaires.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats) — réels, mais peu profonds

### 1. Les habilitations de sécurité — Le moat le plus tangible
Un ingénieur habilité au niveau Top Secret / SCI met **12 à 24 mois** à être accrédité et coûte cher à remplacer. Amentum dispose d'un vivier constitué sur des décennies, sur des sites classifiés où l'accès physique est lui-même une barrière. Aucun nouvel entrant ne peut répliquer cela rapidement. **Limite** : ce moat est partagé à l'identique par Leidos, Booz Allen, CACI, SAIC et Peraton. Ce n'est pas un avantage *relatif*.

### 2. Le passé de performance et l'incumbency — Un verrou réglementaire
Dans les marchés publics fédéraux, le titulaire sortant part avec un avantage substantiel : connaissance du site, personnel déjà en place, notation de performance passée. Les taux de reconduction sont élevés dans les métiers de soutien opérationnel. **Limite** : cet avantage s'érode par la pratique des *re-competes* et des protestations de marché, et il ne protège pas contre une décision politique d'internalisation — comme celle de la NASA.

### 3. La maîtrise nucléaire — Le vrai différenciateur de niche
C'est ici que le fossé est le plus profond. Amentum opère des sites parmi les plus contaminés au monde (Hanford, Savannah River) et intervient sur les sites de la dissuasion nucléaire britannique. Ce savoir-faire — sûreté nucléaire, autorisation réglementaire, gestion de déchets de haute activité — se compte en décennies d'accréditations. Les accords avec **Westinghouse** sur la plateforme APX et la sélection par le **DOE/NNSA** pour un bail progressif à Savannah River (projet couplant IA et production d'énergie) matérialisent ce positionnement. Le nombre d'acteurs crédibles au monde se compte sur les doigts d'une main : Fluor, BWXT, Jacobs, Bechtel.

### 4. L'échelle et le statut de maître d'œuvre
Avec 14 milliards $ de chiffre d'affaires, Amentum est entré au **Fortune 500** en juin 2026. Cette taille permet de porter seul des contrats-cadres IDIQ pluri-milliardaires que des acteurs de niche ne peuvent pas soumissionner. **Limite** : Leidos réalise 17 milliards $, et General Dynamics ou Lockheed Martin peuvent mobiliser des bilans dix fois supérieurs.

### 5. Coûts de changement — MODÉRÉS À FAIBLES
C'est la faiblesse structurelle du modèle. Sur les contrats de soutien banalisés, le client peut recompétitionner tous les 5 à 10 ans, et le personnel se transfère souvent au nouveau titulaire. Le pouvoir de fixation des prix est **nul par construction** : sur un contrat cost-plus, la marge est négociée avec l'acheteur, elle n'est pas conquise sur le marché.

## Positionnement vs concurrence

| Critère | Amentum | Leidos | Booz Allen | Parsons |
|---|---|---|---|---|
| Échelle (CA) | ~14 Mds$ | ~17 Mds$ | ~12 Mds$ | ~7 Mds$ |
| Marge d'EBITDA | ~8 % | ~12 % | ~11 % | ~9 % |
| Exposition nucléaire | **Forte** | Faible | Nulle | Modérée |
| Mix cost-plus | ~62 % | Modéré | Élevé | Modéré |
| Levier net | ~3,0x | ~2,5x | ~2,5x | ~2,0x |
| Prime de valorisation | **Décote** | Neutre | Décote | Prime |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Très faible**. Un acheteur unique (l'État fédéral), des règles de passation qui plafonnent la marge, des audits DCAA sur les coûts éligibles. Amentum ne fixe pas ses prix, il négocie une rémunération administrée.
- **Vis-à-vis des salariés** : **Faible à modéré**. Le vivier d'habilités est disputé ; l'inflation salariale dans le cyber et le renseignement se répercute avec retard sur les contrats à prix fixe.
- **Vis-à-vis des sous-traitants** : **Modéré**. Le statut de maître d'œuvre confère un pouvoir d'arbitrage réel, tempéré par les quotas réglementaires de sous-traitance aux petites entreprises.

> **Verdict** : Amentum dispose de barrières à l'entrée robustes mais d'**avantages concurrentiels relatifs faibles**. Le fossé protège le secteur, pas Amentum en particulier — sauf sur le nucléaire, où le positionnement est réellement différenciant.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Services fédéraux et ingénierie de mission (août 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBITDA | PER prosp. | Rdt div. | ROE |
|---|---|---|---|---|---|---|---|
| **Amentum** | **AMTM US** | **~5,3 Mds$** | **~0,6x** | **~7,7x** | **~8,7x** | **0 %** | **~2,9 %** |
| Leidos | LDOS US | ~24 Mds$ | ~1,6x | ~12x | ~16x | ~0,9 % | ~28 % |
| Booz Allen Hamilton | BAH US | ~11 Mds$ | ~1,2x | ~11x | ~15x | ~2,4 % | ~50 % |
| CACI International | CACI US | ~10 Mds$ | ~1,4x | ~13x | ~16x | 0 % | ~15 % |
| SAIC | SAIC US | ~5 Mds$ | ~0,9x | ~10x | ~12x | ~1,3 % | ~17 % |
| Parsons | PSN US | ~8 Mds$ | ~1,5x | ~15x | ~22x | 0 % | ~11 % |
| KBR | KBR US | ~6 Mds$ | ~0,9x | ~9x | ~11x | ~1,7 % | ~14 % |

*Données estimatives établies à partir des cours et publications disponibles au 14 août 2026. À affiner sur les dépôts SEC directs.*

---

### Analyse comparative

**Amentum — La décote la plus profonde du groupe**
À environ 8,7x les bénéfices ajustés prospectifs et 7,7x l'EBITDA ajusté, Amentum se paie **40 à 50 % moins cher que la médiane sectorielle**. Cette décote n'est pas gratuite : elle rémunère trois handicaps réels — une marge d'EBITDA de 8 % contre 11-12 % chez les meilleurs, un levier net de 3,0x contre 2,0-2,5x, et une croissance organique négative. La question d'investissement se résume à savoir si la décote est **excessive** ou simplement **justifiée**.

**Leidos — Le benchmark de rentabilité**
Leidos réalise 17 milliards $ de chiffre d'affaires avec 2,1 milliards $ de résultat opérationnel, soit une marge structurellement supérieure de 400 points de base. Sa capacité à faire migrer son mix vers des solutions à contenu technologique — jusqu'à des partenariats sur l'infrastructure IA — lui vaut un multiple presque double. **C'est le modèle que la direction d'Amentum tente de reproduire, avec dix ans de retard.**

**Booz Allen Hamilton — L'avertissement**
BAH a subi de plein fouet la contraction des dépenses civiles fédérales et affiche depuis plusieurs trimestres une croissance organique négative. Le titre s'est dé-noté malgré une rentabilité très supérieure à celle d'Amentum. **Leçon** : dans ce secteur, un multiple bas ne protège pas contre un multiple encore plus bas quand la croissance disparaît.

**Parsons — La prime de croissance**
Parsons se paie plus de 20x les bénéfices grâce à une exposition à la défense antimissile, à la sécurité des frontières et aux infrastructures critiques, avec une croissance organique à deux chiffres sur plusieurs exercices. C'est la démonstration que **le marché paie la croissance, pas la marge de sécurité**, dans cet univers.

---

### Le ratio qui compte : rendement du flux de trésorerie disponible
Avec une prévision de 525 à 575 M$ de flux de trésorerie disponible pour une capitalisation de 5,3 milliards $, Amentum affiche un **rendement de flux de trésorerie d'environ 10 %** — de loin le plus élevé du groupe de pairs. Tant que ce flux sert prioritairement à réduire la dette, la valeur créée revient mécaniquement aux actionnaires par transfert du créancier vers l'actionnaire. C'est le cœur mathématique de la thèse haussière.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Troisième trimestre de l'exercice 2026 (clos le 3 juillet 2026, publié le 10 août 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T3 2026 | T3 2025 | Consensus | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | 3 490 M$ | 3 561 M$ | 3 572 M$ | **manqué de 2,3 %** |
| Résultat opérationnel | 172 M$ | 103 M$ | — | **+67 %** |
| Résultat net | 66 M$ | 10 M$ | — | **x6,6** |
| BPA dilué (GAAP) | 0,27 $ | 0,04 $ | — | — |
| EBITDA ajusté | 290 M$ | 274 M$ | — | **+6 %** |
| Marge d'EBITDA ajusté | 8,3 % | 7,7 % | — | **+60 bps** |
| BPA ajusté | 0,67 $ | 0,56 $ | 0,61 $ | **dépassé de 9,8 %** |
| Flux de trésorerie disponible | 135 M$ | 100 M$ | — | **+35 %** |

**Le trimestre est une dissociation nette entre le haut et le bas du compte de résultat** : le chiffre d'affaires manque le consensus de 82 M$, tandis que le bénéfice ajusté le dépasse de 10 % et que la marge atteint un record trimestriel.

---

### Facteurs clés par segment

- **Global Engineering Solutions** : 2 033 M$, en recul de 5 % — bascules de contrats vers des coentreprises non consolidées, cession de 2025, extinction programmée de programmes historiques. Mais EBITDA ajusté de 174 M$ et marge de 8,6 %, **en progression de 110 points de base**.
- **Digital Solutions** : 1 457 M$, en hausse de 3 % — montée en puissance de l'infrastructure numérique critique et des systèmes spatiaux, freinée par la cession de Rapid Solutions. EBITDA ajusté de 116 M$, marge de 8,0 %.
- **Sur base normalisée** (hors périmètre), la direction revendique une croissance d'environ 1 %.

---

### Prises de commandes et carnet

- **Prises de commandes nettes** : 3,9 milliards $ sur le trimestre
- **Book-to-bill** : 1,1x sur le trimestre, **1,3x sur douze mois glissants**
- **Carnet total** : 48,2 milliards $, en hausse de 8 %
- **Carnet financé** : 6,2 milliards $, en hausse de 10 % — c'est le chiffre qui compte réellement, car il correspond à des crédits budgétaires effectivement dotés

**Attributions marquantes du trimestre** : NASA CMOE II (974 M$ sur dix ans, centre de recherche de Langley), NASA COSMOS (environ 500 M$ sur neuf ans, via la coentreprise ASCEND), plus de 400 M$ d'attributions nucléaires mondiales, environ 250 M$ en infrastructure numérique critique, plus de 1 milliard $ d'attributions de défense classifiées.

---

### Bilan et flux de trésorerie

- **Trésorerie** : 459 M$ au 3 juillet 2026
- **Dette brute** : 3 875 M$ — **levier net ramené à 3,0x**, soit un trimestre plus tôt que prévu
- **Remboursement volontaire** de 125 M$ sur le Term Loan B ; facilités de crédit sécurisées de 4 milliards $ remises en place fin avril 2026
- **Point de vigilance** : le flux de trésorerie opérationnel sur neuf mois s'établit à 235 M$ contre 273 M$ un an plus tôt. Le rattrapage doit intervenir au quatrième trimestre pour tenir la prévision annuelle de 525 à 575 M$ — l'exercice 2026 sera donc très déséquilibré sur le dernier trimestre.

---

### Perspectives et changement de ton

La direction a **abaissé la prévision de chiffre d'affaires et relevé celle de rentabilité** :

| Indicateur | Prévision précédente | Nouvelle prévision |
|---|---|---|
| Chiffre d'affaires | 13,95 – 14,30 Mds$ | **13,80 – 13,95 Mds$** |
| EBITDA ajusté | 1 100 – 1 140 M$ | **1 115 – 1 140 M$** |
| BPA ajusté | 2,25 – 2,45 $ | **2,40 – 2,50 $** |
| Flux de trésorerie disponible | 525 – 575 M$ | **525 – 575 M$** (inchangé) |

**Le signal négatif majeur** : la direction anticipe un **impact d'environ 3 % du chiffre d'affaires sur l'exercice 2027** lié à une directive de la NASA réinternalisant des travaux d'ingénierie et scientifiques aujourd'hui confiés à des prestataires. Le directeur des opérations a précisé que la NASA a « consolidé son plan » et l'a partagé contrat par contrat.

**Le signal positif** : environ **92 % du chiffre d'affaires prévisionnel 2027 provient déjà de contrats existants ou de reconductions attendues** — une visibilité exceptionnellement précoce. Par ailleurs, 32 milliards $ d'attributions sont en attente d'adjudication.

---

### Réaction du marché

Le titre a **chuté d'environ 8 % le lendemain de la publication**, passant de 24,44 $ à environ 22,40 $, puis a poursuivi son repli jusqu'à **21,47 $ au 14 août 2026** — près du plus bas de 52 semaines (19,80 $).

**Ce que cela révèle** : le marché ne rémunère pas l'expansion de marge. Il sanctionne l'absence de croissance du chiffre d'affaires et le report de la conversion du carnet. Morgan Stanley a abaissé son objectif de 30 $ à 24 $ dès le lendemain. Autrement dit, **le prix intègre désormais l'hypothèse que la marge seule ne suffit pas**.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours de la direction

### Ton général — Évolution depuis la cotation (septembre 2024)

**Exercice 2025 — Le récit de l'intégration.** Le message dominant est celui de la fusion réussie : capture de synergies, montée en régime du carnet, désendettement conforme au plan (objectif de moins de 3x en 24 mois après la clôture). Le ton est celui d'une équipe qui doit prouver qu'une opération de Reverse Morris Trust complexe ne détruit pas de valeur. Le vocabulaire est prudent, factuel, orienté sur l'exécution.

**Premier semestre de l'exercice 2026 — Le pivot vers les « marchés de croissance accélérée ».** Le discours se recentre sur trois thèmes : **énergie nucléaire**, **systèmes spatiaux**, **infrastructure numérique critique**. La direction chiffre un marché adressable combiné supérieur à 4 milliards $ par an sur ces niches. C'est un déplacement délibéré du récit, de « nous intégrons » vers « nous croissons là où ça compte ».

**Troisième trimestre de l'exercice 2026 — Le récit devient défensif.** Le titre du communiqué met en avant les marges records et la trésorerie ; le chiffre d'affaires passe au second plan. John Heller ouvre sur des « résultats solides avec une forte performance opérationnelle, une bonne rentabilité et un bon flux de trésorerie », en reconnaissant explicitement des « dynamiques de court terme affectant les perspectives de chiffre d'affaires ». **Le glissement sémantique est net** : on ne parle plus de croissance, on parle de qualité de la croissance.

---

### Priorités répétées de la direction

**1. L'expansion de marge avant tout.** C'est le thème le plus constant depuis la fusion. Chaque trimestre apporte son incrément (7,7 % → 7,9 % → 8,1 % → 8,3 %). Le directeur financier Travis Johnson en fait le principal indicateur de succès, y compris quand le chiffre d'affaires recule.

**2. Le désendettement.** Le levier net a été ramené à 3,0x « un trimestre plus tôt que prévu » — présenté à chaque publication comme une preuve de discipline. C'est aussi une manière de répondre à la principale critique du marché sur le bilan.

**3. La visibilité du carnet.** Le chiffre de **92 % du chiffre d'affaires 2027 déjà couvert** est un argument martelé, avancé très tôt dans le cycle. Il vise à rassurer sur la prévisibilité malgré la volatilité de la conversion.

**4. Les marchés de croissance accélérée.** Nucléaire, spatial, infrastructure numérique. Le lien avec la demande en centres de données pour l'IA est systématiquement souligné — c'est le seul angle « thématique » que la direction peut offrir au marché.

**5. La reconnaissance des vents contraires.** Contrairement à d'autres émetteurs, la direction ne dissimule pas : protestations de marchés, retards de passation, extinction de programmes historiques, internalisation NASA. Sur ce dernier point, Steve Arnette a indiqué que la NASA avait consolidé son plan et l'avait partagé contrat par contrat.

---

### Analyse du sentiment

- **Confiance** : Modérée et honnête. Le langage est celui d'exploitants, pas de vendeurs. Aucune promesse chiffrée à long terme n'est formulée sur la croissance — ce qui est **rassurant sur la gouvernance et inquiétant sur la thèse**.
- **Transparence** : Élevée. La direction quantifie ses mauvaises nouvelles (impact NASA de 3 %) avant qu'on ne les lui demande. Le directeur financier a refusé de donner une orientation par segment pour 2027, invoquant l'antériorité — refus prudent plutôt qu'évasif.
- **Cohérence** : Bonne. Le récit n'a pas changé de nature ; il s'est **restreint**. On est passé d'une histoire de croissance et de marge à une histoire de marge et de trésorerie.

> **À lire entre les lignes** : quand une direction cesse de parler de chiffre d'affaires pour ne plus parler que de marge et de désendettement, elle vend implicitement un **cas de valeur (value case)**, pas un cas de croissance. Le marché l'a compris — d'où la chute de 8 % malgré un dépassement du consensus de bénéfices.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### John Heller — Directeur général et administrateur

**Parcours** : diplômé de West Point, ancien officier de l'armée de terre américaine. Plus de 39 ans dans les services technologiques aux gouvernements, dont **plus de 14 ans en position de directeur général**. Postes précédents : directeur général de PAE et de ses prédécesseurs, fonctions de direction chez Engility Corporation et Harris Corporation. Directeur général d'Amentum depuis 2022, maintenu à la tête du groupe fusionné.

**Bilan chiffrable** :
- A intégré **deux acquisitions de plusieurs milliards de dollars** au sein de l'Amentum historique (DynCorp en 2020, PAE en 2022), transformant un carve-out d'AECOM en acteur de premier plan
- A piloté la **fusion Reverse Morris Trust avec Jacobs CMS** (septembre 2024) — l'une des opérations les plus complexes du secteur, sans incident d'intégration majeur publiquement identifié
- A tenu l'engagement de désendettement : levier net ramené de ~3,8x à la clôture à **3,0x en juillet 2026**, soit un trimestre d'avance sur le plan annoncé
- A fait progresser la marge d'EBITDA ajusté de 7,7 % à 8,3 % en quatre trimestres

**Reconnaissance externe** : Directeur général de l'année 2024 selon WashingtonExec et l'Association for Corporate Growth. Préside le conseil d'administration du Professional Services Council — la principale organisation professionnelle du secteur.

---

### L'équipe de direction

| Fonction | Nom | Provenance |
|---|---|---|
| Directeur des opérations | Dr. Steve Arnette | Amentum historique |
| Directeur financier | Travis Johnson | Amentum historique |
| Directrice technique | Jill Bruning | Amentum historique |
| Président exécutif du conseil | Steve Demetriou | Ancien PDG de Jacobs |

**Observation de gouvernance importante** : l'équipe exécutive est issue de l'**Amentum historique**, tandis que la présidence du conseil revient à l'ancien PDG de Jacobs, dont les actionnaires détenaient 51 % du capital à la clôture. Cette architecture est classique dans un Reverse Morris Trust, mais elle crée une **tension latente** entre la direction opérationnelle et un conseil dont l'origine est l'apporteur majoritaire. Le conseil compte par ailleurs des profils sécuritaires de haut niveau, dont le général (2s) Vincent K. Brooks.

---

### Historique d'allocation du capital

| Décision | Montant | Lecture |
|---|---|---|
| Acquisition DynCorp (2020) | ~1 Md$ | Logistique aérienne et soutien de contingence |
| Acquisition PAE (2022) | ~1,9 Md$ | Opérations de bases, formation, développement international |
| Fusion Jacobs CMS (2024) | Reverse Morris Trust | Doublement de taille sans sortie de cash |
| Cession Rapid Solutions (2025) | ~325 M$ nets | Recentrage sur les services, cession à Lockheed Martin |
| Désendettement (2025-2026) | ~500 M$/an | **Priorité déclarée d'affectation du flux de trésorerie** |

**Tendance** : allocation **disciplinée et conservatrice depuis la cotation**. Aucune acquisition depuis la fusion, aucun dividende, aucun rachat d'actions significatif — tout le flux de trésorerie disponible va au bilan. C'est le comportement rationnel d'une direction dont l'action se paie 8,7x les bénéfices avec 3,4 milliards $ de dette nette.

**Mais le ROIC reste à environ 4,6 % et le ROE à 2,9 %** — inférieurs au coût du capital. Ces chiffres sont mécaniquement écrasés par le goodwill et les incorporels issus de la fusion. Le jugement sur la qualité de l'allocation ne pourra être porté qu'après plusieurs exercices de conversion pleine.

---

### Signaux d'alerte

- **Pas de comportement promotionnel** : c'est un point fort notable. La direction ne martèle aucun objectif spectaculaire à long terme et quantifie ses mauvaises nouvelles à l'avance.
- **Pas de transaction significative avec des parties liées** identifiée à ce stade.
- **Rémunération** : structure classique pour un groupe de cette taille, à documenter sur le circulaire de procuration. Aucune anomalie signalée publiquement.
- **Risque de gouvernance réel** : la **dualité d'origine** direction Amentum / conseil Jacobs, et le fait que le groupe soit encore une entité jeune (moins de deux ans de cotation) dont la culture combinée reste à consolider.
- **Type de dirigeant** : **exploitant professionnel de carrière**, pas fondateur, pas allocateur de capital opportuniste. C'est l'archétype adapté à un intégrateur de services fédéraux — un secteur où l'exécution silencieuse prime sur la vision.

> **Synthèse** : une équipe crédible, sobre et qui tient ses engagements sur ce qu'elle contrôle (marge, trésorerie, dette). Son problème n'est pas la qualité de gestion — c'est qu'**elle ne contrôle pas la ligne du haut**.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours

### Contexte
Le titre n'a qu'un historique court : première cotation régulière au NYSE le **30 septembre 2024, autour de 32,25 $**. Depuis, l'action a perdu environ **33 %** et cote **21,47 $ au 14 août 2026**, contre une fourchette de 52 semaines de **19,80 – 38,11 $**. Le profil est celui d'un titre à forte amplitude, piloté par le sentiment budgétaire fédéral bien plus que par les fondamentaux propres.

---

### Baisses significatives (supérieures à 5 %)

**Février 2025 — La panique DOGE.** William Blair a dégradé simultanément Booz Allen, CACI, Leidos, Parsons et General Dynamics sur le risque de coupes budgétaires liées à l'initiative de réduction des dépenses fédérales. L'ensemble du secteur a plongé ; Amentum, plus endetté et plus jeune en Bourse, a surréagi. **Le titre est descendu jusqu'à environ 16 $ au printemps 2025** — un plus bas historique.

**Automne 2025 — Blocage budgétaire.** Les tensions autour du financement fédéral ont pesé sur l'ensemble du groupe de pairs. Le point bas de 19,80 $ sur douze mois glissants se situe dans cette fenêtre.

**Février 2026 — Publication du premier trimestre de l'exercice 2026.** Chiffre d'affaires de 3,24 milliards $, en recul d'environ 5 %, sous les attentes, et **flux de trésorerie disponible négatif de 142 M$**. Le titre entame une glissade qui le fera chuter d'environ 20 % au premier semestre calendaire 2026.

**11 août 2026 — Le trimestre le plus révélateur.** Malgré un dépassement du consensus de bénéfices de 10 %, le titre chute de **8,4 %** (de 24,44 $ à environ 22,40 $). Deux causes : le manque de 2,3 % sur le chiffre d'affaires, et surtout l'annonce d'un impact d'environ **3 % du chiffre d'affaires 2027 lié à l'internalisation NASA**. Morgan Stanley abaisse son objectif de 30 $ à 24 $ le jour suivant.

---

### Hausses significatives (supérieures à 5 %)

**24 novembre 2025 — Résultats annuels de l'exercice 2025.** Chiffre d'affaires de 14,4 milliards $ en croissance pro forma de 4 %, EBITDA ajusté de 1 104 M$, flux de trésorerie disponible de 516 M$, carnet de 47 milliards $ et **book-to-bill de 1,6x au quatrième trimestre**. Le marché a validé la thèse d'intégration réussie.

**Décembre 2025 – février 2026 — Le grand rallye.** Porté par la validation des résultats annuels, la détente sur le risque budgétaire fédéral et le thème de l'énergie nucléaire, le titre est passé d'environ 20 $ à un sommet de **38,11 $** — soit un quasi-doublement en quelques mois. Cette phase illustre à quel point le titre est un **actif à bêta budgétaire élevé** plutôt qu'un composé régulier.

**Juillet – août 2026 — Le récit nucléaire.** Sélection par le DOE/NNSA pour négocier un bail progressif à Savannah River en vue d'un projet intégré IA et production d'énergie (20 juillet), puis accords avec Westinghouse sur la plateforme APX (4 août). Ces annonces ont soutenu le titre avant la publication trimestrielle.

---

### Facteurs structurels

- **Bêta budgétaire fédéral** : le titre monte et descend avec la perception du risque de coupes, indépendamment de son propre carnet
- **Absence de dividende** : aucun soutien de rendement, aucune base d'actionnaires « revenu » pour amortir les baisses
- **Levier financier** : à 3,0x, l'action est un actif à levier sur l'EBITDA — chaque point de marge se démultiplie dans les deux sens
- **Écart cours / objectif consensus** : à 21,47 $ contre un objectif moyen de 30,25 $ (12 analystes, opinion « Achat »), l'écart de plus de 40 % traduit moins un potentiel identifié qu'un **désaccord profond sur la trajectoire du chiffre d'affaires**. La dispersion des objectifs — de 21 $ à 40 $ — le confirme.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations de bénéfice par action 2026-2028

### Avertissement méthodologique
L'exercice d'Amentum est décalé : il se clôture début octobre. Les estimations ci-dessous portent sur les **exercices fiscaux 2026 (clos octobre 2026), 2027 et 2028**. Il faut par ailleurs distinguer strictement le **BPA GAAP** (écrasé par l'amortissement des incorporels de fusion : environ 0,83 $ sur douze mois glissants) du **BPA ajusté** (référence de marché et de guidance : 2,40 – 2,50 $ pour 2026). Toutes les projections ci-dessous sont en **BPA ajusté**.

### Hypothèses de modélisation

**Chiffre d'affaires** :
- Croissance sectorielle : les services fédéraux progressent d'environ 2 à 4 % par an, avec une divergence marquée entre défense/renseignement (porteurs) et civil (sous pression)
- Gains de parts de marché : **négatifs à court terme** — extinction de programmes historiques, bascule de contrats vers des coentreprises non consolidées, protestations et retards de passation
- **Choc identifié** : environ -3 % de chiffre d'affaires en 2027 lié à l'internalisation NASA, concentré sur Digital Solutions
- Support : carnet de 48,2 Mds$ (+8 %), book-to-bill de 1,3x sur douze mois, 32 Mds$ d'attributions en attente d'adjudication, 92 % du chiffre d'affaires 2027 déjà couvert
- **Croissance publiée retenue : -3 % en 2026, -1 à 0 % en 2027, +2 à 3 % en 2028**

**Effet prix** : quasi nul par construction. Sur un contrat cost-plus, l'inflation des coûts est refacturée mais la marge est administrée. Il n'existe pas de levier prix au sens commercial du terme.

**Levier opérationnel et marge** :
- Marge d'EBITDA ajusté : 8,1 % en 2026 (milieu de fourchette), **objectif implicite de 8,4 – 8,7 % en 2027-2028** via synergies de fusion résiduelles, discipline sur les frais généraux et mix favorable au nucléaire
- Contrainte : au-delà de 9 %, l'expansion de marge se heurte au plafond structurel du cost-plus. Une note d'initiation a d'ailleurs fixé un objectif de 22 $ en retenant précisément l'hypothèse que la marge ne dépasserait guère 8 %

**Coûts de financement** : c'est ici que se trouve le principal moteur de croissance du BPA. Chaque tranche de dette remboursée (remboursement volontaire de 125 M$ sur le Term Loan B au T3 2026) libère mécaniquement du résultat. Avec ~3,4 Mds$ de dette nette et 500 M$ de flux disponible annuel, **la charge financière peut reculer de 15 à 25 M$ par an**.

**Dilution** : marginale. Environ 244,5 M d'actions, pas de programme d'émission en cours, pas de rachat significatif non plus. **Dilution retenue : environ +0,5 %/an** (rémunération en actions).

---

### Estimations de BPA ajusté

| Exercice | BPA ajusté estimé | Croissance | PER au cours de 21,47 $ |
|---|---|---|---|
| 2025 (réalisé) | **2,22 $** | — | — |
| **2026E** (guidance) | **2,40 – 2,50 $** | **+8 à +13 %** | **~8,8x** |
| **2027E** | **2,45 – 2,65 $** | **+2 à +6 %** | **~8,4x** |
| **2028E** | **2,70 – 3,00 $** | **+10 à +13 %** | **~7,5x** |

*Rappel : BPA GAAP correspondant nettement inférieur — environ 0,83 $ sur douze mois glissants, en convergence progressive à mesure que l'amortissement des incorporels de fusion s'éteint.*

### Sensibilité

- **Scénario haussier** (conversion du carnet, adjudication favorable des 32 Mds$ en attente, marge à 8,8 %, désendettement sous 2,5x) : BPA 2028 vers 3,10 $. À un multiple de 12x — encore inférieur à la médiane sectorielle — cela donnerait un cours de **37 $**, soit +72 %.
- **Scénario de base** : BPA 2028 d'environ 2,85 $. À 10x, le cours ressort à **28,50 $**, soit +33 % — cohérent avec l'objectif consensus de 30,25 $.
- **Scénario baissier** (impact NASA supérieur à 3 %, nouvelles coupes civiles, marge plafonnée à 8,1 %, taux durablement élevés) : BPA 2028 stagnant à 2,40 $. À 8x, le cours ressort à **19 $**, soit -12 %.

**Conclusion** : la structure du risque/rendement est **asymétriquement favorable en valeur absolue** — environ +33 % dans le cas de base contre -12 % dans le cas défavorable. Mais elle repose entièrement sur une **ré-expansion du multiple**, pas sur la croissance des bénéfices. Or un multiple ne se ré-expand que lorsque la croissance du chiffre d'affaires redevient visible. **Le BPA n'est pas le juge de paix ici : le taux de croissance organique publié l'est.**`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Une décote de valorisation difficile à justifier durablement.** À environ 8,7x les bénéfices ajustés prospectifs et 7,7x l'EBITDA ajusté, Amentum se paie 40 à 50 % moins cher que Leidos, CACI ou Booz Allen. Le rendement du flux de trésorerie disponible atteint **environ 10 %** — le plus élevé du groupe de pairs. Pour un actif dont 90 % du chiffre d'affaires vient de l'État fédéral américain avec 48 milliards $ de carnet, c'est un niveau de valorisation habituellement réservé aux actifs en déclin structurel.

**2. Le désendettement transfère mécaniquement de la valeur à l'actionnaire.** Le levier net est passé de ~3,8x à la clôture de la fusion à **3,0x en juillet 2026, un trimestre en avance**. Avec 525 à 575 M$ de flux disponible annuel affecté prioritairement à la dette, la valeur des capitaux propres croît même à valeur d'entreprise constante. C'est le moteur le plus fiable et le moins discuté de la thèse.

**3. L'expansion de marge est réelle et documentée.** 7,7 % → 8,3 % de marge d'EBITDA ajusté en quatre trimestres, avec 110 points de base gagnés sur le seul segment Global Engineering Solutions. La direction relève sa prévision de rentabilité à chaque publication depuis un an. Ce n'est pas une promesse, c'est un historique.

**4. Le positionnement nucléaire est un actif rare et à contre-cycle.** Sélection par le DOE/NNSA pour un bail progressif à Savannah River couplant IA et production d'énergie ; accords avec Westinghouse sur la plateforme APX ; contrat de 406 M$ pour l'ingénierie de petits réacteurs modulaires au Royaume-Uni. Le renouveau nucléaire, alimenté par la demande énergétique des centres de données IA, offre un débouché structurel où **le nombre de prestataires accrédités au monde se compte sur une main**.

**5. La visibilité est exceptionnelle.** 92 % du chiffre d'affaires prévisionnel 2027 provient déjà de contrats existants ou de reconductions attendues, avec un book-to-bill de 1,3x sur douze mois et 32 milliards $ d'attributions en attente d'adjudication. Peu d'entreprises cotées peuvent avancer un tel chiffre quinze mois à l'avance.

**6. La surprise possible de bénéfices.** Le consensus a été dépassé au T3 2026 de près de 10 % (0,67 $ contre 0,61 $). Si la conversion des 32 Mds$ en attente s'accélère au moment où la marge est déjà à un point haut, l'effet de levier opérationnel sur le BPA serait significatif.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques susceptibles de nuire durablement à l'activité

**1. Le client unique peut décider unilatéralement de vous retirer du travail.** L'internalisation par la NASA de travaux d'ingénierie confiés à des prestataires retire environ **3 % du chiffre d'affaires du groupe en 2027**. Aucune performance commerciale n'aurait pu l'éviter. Si cette logique — réinternaliser pour réduire la dépense — se diffuse à d'autres agences, c'est le **modèle économique lui-même qui est menacé**, et non un contrat particulier.

**2. La croissance organique est déjà négative, avant même le choc NASA.** Chiffre d'affaires de -2 % au T3 2026, prévision annuelle abaissée à 13,8-13,95 Mds$ contre 14,4 Mds$ réalisés en 2025. Un carnet de 48 milliards $ qui ne se convertit pas est un actif comptable, pas un moteur. Booz Allen a démontré que dans ce secteur, **un multiple bas ne protège pas contre un multiple encore plus bas** quand la croissance disparaît.

**3. Le plafond de marge est structurel, pas conjoncturel.** Avec environ 62 % de contrats en cost-plus, la marge est administrée par l'acheteur. Les 60 points de base gagnés cette année viennent de synergies de fusion et de discipline sur les frais généraux — deux réservoirs qui s'épuisent. Une initiation de couverture a explicitement fixé un objectif de 22 $ en retenant l'hypothèse que la marge ne dépasserait pas significativement 8 %.

### Compression de marge ou ralentissement du chiffre d'affaires
Les deux risques se combinent : si la marge plafonne à 8,1 % **et** que le chiffre d'affaires recule encore de 3 % en 2027, l'EBITDA ajusté tombe sous 1,1 milliard $. Avec 3,4 milliards $ de dette nette, le levier remonte au-dessus de 3,1x — et le désendettement, seul moteur fiable de la thèse haussière, s'arrête.

### Analyse pré-mortem
**Que s'est-il passé si l'action vaut 14 $ dans dix-huit mois ?** Scénario : la directive d'internalisation de la NASA s'étend à d'autres agences civiles ; deux grands contrats du portefeuille sont perdus en re-compétition ; le flux de trésorerie du quatrième trimestre 2026 ne rattrape pas le retard des neuf premiers mois et la prévision de 525-575 M$ est manquée ; le levier remonte à 3,3x ; les agences de notation placent la dette sous surveillance négative. Le titre se dé-note de 8,7x à 6,5x sur un BPA stagnant. **Rien dans ce scénario n'exige une catastrophe — seulement la poursuite des tendances actuelles.**

### Les multiples actuels sont-ils trop élevés ?
Non — c'est précisément le point le plus solide de la thèse. À 8,7x les bénéfices ajustés et 0,6x le chiffre d'affaires, Amentum n'a **aucune prime à défendre**. Le risque n'est pas une correction du multiple à partir d'un niveau tendu ; c'est une **dé-notation supplémentaire à partir d'un niveau déjà déprimé**, ce qui est un risque plus limité mais parfaitement réel.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : les deux camps se trompent d'indicateur. Les haussiers regardent la marge et le carnet ; les baissiers regardent la croissance publiée. Or Amentum n'est ni une histoire de marge ni une histoire de croissance — c'est une **structure de capital en cours de réparation**. Tant que 500 M$ par an transitent du créancier vers l'actionnaire, la valeur des capitaux propres progresse d'environ 9 à 10 % par an *sans qu'aucune amélioration opérationnelle ne soit nécessaire*. Le vrai risque n'est donc pas la croissance : c'est **tout ce qui interromprait le flux de trésorerie disponible**. Et ce risque-là — un blocage budgétaire prolongé, une perte de contrat majeure, un besoin en fonds de roulement qui dérape — est exactement celui que personne ne modélise.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Goodwill et immobilisations incorporelles — RISQUE ÉLEVÉ
C'est le premier poste à surveiller. La fusion de 2024 avec Jacobs CMS a généré un **goodwill et des incorporels considérables**, qui écrasent aujourd'hui le résultat GAAP : l'amortissement des incorporels explique l'essentiel de l'écart entre un BPA GAAP d'environ 0,83 $ et un BPA ajusté de 2,45 $.

**À surveiller** :
- Le montant du goodwill rapporté aux capitaux propres et à la capitalisation boursière — avec une capitalisation de 5,25 Mds$, un goodwill supérieur aux fonds propres constituerait un signal
- Les **tests de dépréciation annuels** : un recul durable du chiffre d'affaires (-3 % en 2026, choc NASA en 2027) pourrait fragiliser les hypothèses de flux futurs des unités génératrices de trésorerie. Une dépréciation serait non-cash mais **révélatrice d'une surévaluation de l'apport Jacobs**
- Les hypothèses de taux d'actualisation et de croissance terminale retenues

### Écart entre mesures ajustées et GAAP — RISQUE ÉLEVÉ
L'écart est **considérable** : 2,45 $ de BPA ajusté contre 0,83 $ de BPA GAAP, soit un facteur de trois. Toute la communication financière, la guidance et le consensus analystes portent sur la mesure ajustée.

**À surveiller** : la nature des retraitements. L'amortissement des incorporels d'acquisition est un ajustement légitime et universellement admis. En revanche, si des **coûts d'intégration, de restructuration ou de « transformation » se répètent trimestre après trimestre**, ils cessent d'être exceptionnels et deviennent des coûts d'exploitation dissimulés. Le test : reconstituer un EBITDA non ajusté sur huit trimestres glissants et le comparer à l'EBITDA ajusté publié.

### Comptabilisation des revenus — RISQUE MODÉRÉ
Les contrats fédéraux à long terme sont comptabilisés à l'avancement, avec des **estimations de coûts à terminaison (EAC)**. Toute révision d'EAC — favorable ou défavorable — se traduit immédiatement en résultat.

**Signal identifié** : le communiqué du deuxième trimestre 2026 mentionne explicitement des « reprises nettes favorables de programmes (net program write-ups) » plus élevées au trimestre comparable de l'exercice précédent. **Ces ajustements sont une source de résultat discrétionnaire au sens comptable.** Un trimestre où la marge progresse grâce à des reprises d'EAC plutôt qu'à une performance opérationnelle est de moindre qualité. Il faut en isoler la contribution.

### Coentreprises non consolidées — RISQUE MODÉRÉ À ÉLEVÉ
Le recul de 5 % du chiffre d'affaires du segment GES est explicitement attribué à des **bascules de contrats de consolidés vers des coentreprises non consolidées** (ASCEND, H2C avec BWXT et Fluor, etc.).

**Pourquoi c'est un point de vigilance** : cette mécanique **retire du chiffre d'affaires mais préserve, voire améliore, la marge affichée** — puisque la quote-part de résultat des coentreprises remonte sous la ligne d'exploitation sans porter de coûts directs. Une partie de l'expansion de marge tant vantée pourrait donc être un **artefact de périmètre plutôt qu'un gain d'efficacité**. C'est le signal le plus subtil et le plus important de ce module.

### Dette et engagements — RISQUE MODÉRÉ
3 875 M$ de dette brute, 459 M$ de trésorerie, levier net de 3,0x. Facilités sécurisées de 4 milliards $ remises en place fin avril 2026, remboursement volontaire de 125 M$ sur le Term Loan B.

**À surveiller** : les covenants du crédit amendé, l'échéancier de refinancement et le ratio dette nette/EBITDA **calculé sur EBITDA ajusté** — la définition contractuelle du levier repose sur une mesure non-GAAP, ce qui offre une marge de manœuvre.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ
Le flux de trésorerie opérationnel sur neuf mois de l'exercice 2026 s'établit à **235 M$ contre 273 M$ un an plus tôt**, alors que la prévision annuelle de flux disponible (525-575 M$) est maintenue. Cela implique un quatrième trimestre exceptionnellement chargé.

**À surveiller** : la nature du rattrapage. S'il provient d'un **encaissement de créances** ou d'un allongement des délais fournisseurs plutôt que de la génération opérationnelle, la qualité du flux 2026 sera médiocre et l'exercice 2027 démarrera avec un besoin en fonds de roulement défavorable. Le premier trimestre 2026 avait déjà affiché un flux disponible **négatif de 142 M$** — la saisonnalité de cette activité est extrême.

### Parties liées et engagements conditionnels — RISQUE FAIBLE
Aucune transaction significative avec des parties liées identifiée à ce stade. Structure actionnariale dispersée depuis la sortie de Jacobs de son bloc résiduel. À surveiller néanmoins : les engagements liés aux coentreprises et les litiges de marchés publics (protestations, réclamations).

### Contrats de location (IFRS 16 / ASC 842) — RISQUE FAIBLE
Modèle capital-light, dépenses d'investissement de 27 M$ sur l'exercice 2025. Les droits d'utilisation sont modestes au regard du bilan. Pas d'anomalie identifiée.

---

### Verdict global
**Risque comptable : MODÉRÉ.** Amentum ne présente aucun signal de fraude et sa communication est franche — la direction quantifie ses mauvaises nouvelles à l'avance, ce qui est un signal de gouvernance positif. Mais l'entité est **jeune, issue d'une fusion complexe et pilotée par des mesures ajustées** qui triplent le bénéfice GAAP. Les deux zones de vigilance réelles sont la **bascule vers les coentreprises non consolidées** (qui flatte la marge en réduisant le chiffre d'affaires) et les **révisions d'estimations à terminaison** (source de résultat discrétionnaire). L'investisseur doit lire les 10-Q et 10-K en isolant ces deux effets avant de valider l'expansion de marge.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour John Heller et l'équipe de direction

### Stratégie à long terme et avantage concurrentiel

**1.** L'internalisation par la NASA retire environ 3 % du chiffre d'affaires en 2027. **Quelle est votre évaluation du risque que cette logique se diffuse** au DOE, au DHS ou à d'autres agences civiles, et quelle part de votre chiffre d'affaires total serait théoriquement « internalisable » ?

**2.** Vous décrivez le nucléaire, le spatial et l'infrastructure numérique critique comme vos marchés de croissance accélérée. **Quel pourcentage exact du chiffre d'affaires** ces trois marchés représentent-ils aujourd'hui, et quel est votre objectif à trois ans ? Sans ce chiffre, la thèse reste narrative.

**3.** Sur le nucléaire, quelle est la **contribution réelle en chiffre d'affaires et en marge** attendue des accords Westinghouse APX et du bail de Savannah River, et à quel horizon ? S'agit-il de contrats fermes ou d'options de développement ?

**4.** Qu'est-ce qui vous distingue objectivement de Leidos, CACI ou Peraton lorsqu'un client fédéral vous compare sur un re-compete ? Autrement dit : **quel avantage relatif possédez-vous** que vos concurrents n'ont pas ?

### Allocation du capital et bilan

**5.** Le levier net est à 3,0x. **Quel est votre niveau cible structurel**, et à partir de quel seuil réaffecterez-vous le flux de trésorerie disponible vers les actionnaires (dividende, rachats) plutôt que vers la dette ?

**6.** Le ROIC est à environ 4,6 % et le ROE à 2,9 %, tous deux **inférieurs à votre coût du capital**. À quelle échéance précise anticipez-vous un ROIC structurellement supérieur au WACC, et quel jalon devons-nous suivre trimestre par trimestre ?

**7.** L'action se paie 8,7x les bénéfices ajustés prospectifs, soit 40 à 50 % de décote sur vos pairs. **Pourquoi ne rachetez-vous pas d'actions** à ce niveau, et qu'est-ce qui vous ferait changer d'avis ?

**8.** Envisagez-vous des acquisitions dans les marchés de croissance accélérée, ou le désendettement les exclut-il de fait jusqu'en 2028 ?

### Qualité des résultats

**9.** Une part de l'expansion de marge coïncide avec des **bascules de contrats vers des coentreprises non consolidées**. Pouvez-vous chiffrer, en points de base, la contribution de cet effet de périmètre à l'amélioration de 110 points de base du segment GES ?

**10.** Vos communiqués mentionnent des **reprises nettes favorables de programmes** (net program write-ups). Quelle a été leur contribution au résultat sur les huit derniers trimestres, et quel serait l'EBITDA « propre » hors ces effets ?

**11.** Le flux de trésorerie opérationnel sur neuf mois est de 235 M$ contre 273 M$ un an plus tôt, mais la prévision annuelle est maintenue à 525-575 M$. **Quelle est la nature exacte du rattrapage attendu au quatrième trimestre** — génération opérationnelle, encaissement de créances, ou délais fournisseurs ?

**12.** À quel horizon le BPA GAAP (environ 0,83 $) convergera-t-il vers le BPA ajusté (2,45 $), et quel est le calendrier d'extinction de l'amortissement des incorporels de fusion ?

### Risques

**13.** Le carnet atteint 48,2 Mds$ mais seuls 6,2 Mds$ sont **financés**. En cas de blocage budgétaire fédéral prolongé, quelle est votre exposition en chiffre d'affaires mensuel et quel est votre plan de trésorerie ?

**14.** Vous évoquez 32 Mds$ d'attributions en attente d'adjudication. **Quel taux de succès historique** appliquez-vous à ce pipeline, et combien de ces dossiers sont des re-competes où vous êtes titulaire sortant plutôt que des conquêtes ?

**15.** **Quel est le risque que vous sous-estimez le plus aujourd'hui**, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Ce n'est pas une entreprise décotée, c'est une entreprise sans pouvoir

Les haussiers répètent le même argument : 8,7x les bénéfices, 10 % de rendement de flux de trésorerie, décote de 45 % sur les pairs. Mais **une décote persistante est une information, pas une opportunité**. Amentum vend des heures d'ingénieurs à un acheteur unique, sur des contrats dont 62 % sont en cost-plus — c'est-à-dire des contrats où **la marge est fixée par le client, pas par le marché**. Une entreprise qui ne peut ni augmenter ses prix, ni choisir ses clients, ni protéger ses marges mérite structurellement un multiple bas. La question n'est pas « pourquoi est-ce si peu cher ? », mais « pourquoi cela devrait-il coûter davantage ? ».

### 2. La concentration des revenus est totale — et le client peut vous retirer le travail par décret

**Environ 90 % du chiffre d'affaires provient directement d'agences fédérales américaines.** Il n'y a pas de diversification, pas de segment commercial de repli, pas de marché international significatif. Et l'épisode NASA de 2026 est la démonstration en temps réel du risque : l'agence a décidé de **réinternaliser des travaux d'ingénierie confiés à des prestataires**, retirant environ 3 % du chiffre d'affaires du groupe en 2027. Amentum n'a rien mal fait. Elle n'aurait rien pu faire.

Si cette logique — la réinternalisation comme outil de réduction de la dépense — se propage au DOE, au DHS ou dans le civil, **il n'existe aucune parade commerciale**. C'est le seul secteur coté où le client détient simultanément le pouvoir de fixer votre prix, d'annuler votre contrat sans faute, et de décider qu'il fera le travail lui-même.

### 3. L'avantage concurrentiel est plus fragile que ne le croient les optimistes

Les haussiers vantent les habilitations de sécurité, le passé de performance et le carnet de 48 milliards $. **Ces trois éléments sont partagés à l'identique par Leidos, CACI, Booz Allen, SAIC, Parsons et Peraton.** Un fossé que sept concurrents franchissent tous n'est pas un fossé : c'est une barrière sectorielle, qui protège la rente collective mais n'attribue aucune part de cette rente à Amentum en particulier.

Quant au carnet, il faut le lire honnêtement : sur 48,2 milliards $, seuls **6,2 milliards $ sont financés**. Le reste dépend de crédits budgétaires futurs, et la quasi-totalité des contrats fédéraux est résiliable à la discrétion du client, sans faute du prestataire. Un carnet de 48 milliards $ qui produit une croissance de -2 % est un catalogue, pas un moteur.

### 4. Le concurrent le plus dangereux que les optimistes sous-estiment : le client lui-même

On cherche le danger chez Leidos ou Peraton. Il est ailleurs. Le concurrent structurel d'Amentum, c'est **l'agence fédérale qui décide d'internaliser**. Ce concurrent n'a pas de contrainte de rentabilité, pas de coût du capital, pas de processus de passation à respecter. Il gagne par décision administrative. Et son avantage grandit à mesure que la pression sur la dépense publique s'intensifie et que les outils d'IA réduisent le besoin de main-d'œuvre de soutien externalisée.

Le second danger sous-estimé est **Parsons** : croissance organique à deux chiffres, exposition à la défense antimissile et aux infrastructures critiques, multiple de plus de 20x. Parsons démontre qu'il est possible de croître dans ce secteur. Si un pair y parvient, l'absence de croissance d'Amentum cesse d'être une excuse sectorielle et devient un **échec spécifique**.

### 5. La qualité des résultats mérite un examen sérieux

Trois éléments doivent être isolés avant de valider l'histoire de l'expansion de marge :

- **La bascule vers les coentreprises non consolidées.** Le recul de 5 % du chiffre d'affaires GES est explicitement attribué à ce transfert. Or il retire du chiffre d'affaires tout en préservant le résultat — donc **il gonfle mécaniquement la marge affichée sans aucun gain d'efficacité**. Combien des 110 points de base gagnés sur GES viennent de là ? La direction ne l'a pas chiffré.
- **Les reprises d'estimations à terminaison.** Les communiqués mentionnent des reprises nettes favorables de programmes. C'est du résultat discrétionnaire au sens comptable, sensible aux hypothèses de la direction.
- **L'écart GAAP / ajusté d'un facteur trois.** 0,83 $ contre 2,45 $. Toute la guidance, tout le consensus et toute la thèse haussière reposent sur la mesure ajustée.

### 6. L'allocation du capital : ce que la direction n'a pas fait

Le désendettement est prudent et bien exécuté — c'est incontestable. Mais il faut nommer son revers : depuis la cotation, **aucun dividende, aucun rachat d'actions significatif, aucune acquisition**. Avec un titre à 8,7x les bénéfices, ne pas racheter d'actions est un choix qui révèle soit une confiance insuffisante dans la trajectoire, soit une contrainte de bilan que la direction préfère ne pas expliciter. Dans les deux cas, ce n'est pas un signal haussier.

### 7. Quelles hypothèses doivent se vérifier pour justifier le cours actuel ?

À 21,47 $, il faut croire simultanément que : la marge d'EBITDA dépasse 8,5 % malgré le plafond du cost-plus ; le chiffre d'affaires se stabilise après le choc NASA ; le flux disponible atteint 525-575 M$ malgré neuf mois à 235 M$ de flux opérationnel ; le levier descend sous 2,5x. **Chacune de ces hypothèses est plausible isolément ; leur conjonction l'est nettement moins.**

### Que se passe-t-il si la croissance déçoit de 20 à 30 % ?
Le chiffre d'affaires ne « déçoit » pas de 20 % dans ce secteur — il recule de 3 à 5 %, ce qui suffit. Un chiffre d'affaires 2027 à 13,3 milliards $ avec une marge plafonnée à 8,1 % donne un EBITDA ajusté de 1,08 milliard $ et un BPA ajusté d'environ 2,30 $. Le levier remonte au-dessus de 3,1x. À 7x — le multiple d'un actif sans croissance et endetté — le cours ressort à **16 $, soit -25 %**.

### Le scénario unique qui nuirait durablement
**Une réforme structurelle de l'externalisation fédérale.** Non pas une coupe budgétaire ponctuelle, mais une doctrine — internaliser les fonctions d'ingénierie et de soutien, appuyée par des outils d'IA qui réduisent le besoin de main-d'œuvre. La directive NASA de 2026 en est le prototype. Si elle devient la norme sur trois à cinq ans, Amentum ne perd pas un contrat : il perd sa raison d'être. **Probabilité estimée : 15 à 25 %** — faible, mais non négligeable, et absolument pas intégrée dans un multiple de 8,7x.

### Conclusion short
Amentum est une entreprise correctement gérée, honnêtement dirigée et raisonnablement valorisée. **Ce n'est pas le problème.** Le problème est qu'elle occupe la position la plus faible qu'une entreprise cotée puisse occuper dans une chaîne de valeur : un fournisseur de main-d'œuvre, à marge administrée, face à un acheteur unique qui peut le remplacer par lui-même. La décote n'est pas une anomalie à corriger — c'est le **prix correct d'une absence de pouvoir**. Et à 3,0x de levier, cette absence de pouvoir est financée par de la dette.`,
  },
];

export default { ...meta, modules };
