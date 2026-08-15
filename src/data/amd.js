// ============================================================
//  DOSSIER : Advanced Micro Devices, Inc. (AMD)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "amd",                      // identifiant d'URL : /dossier/amd
  ticker: "AMD",
  name: "Advanced Micro Devices, Inc.",
  exchange: "Nasdaq",
  sector: "Semi-conducteurs — CPU, GPU et accélérateurs IA",
  initials: "AMD",                  // affiché dans la pastille
  tagline: "Challenger n°2 du calcul accéléré, propulsé par les engagements gigawatt d'OpenAI, Meta et Anthropic.",
  riskScore: 57,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "amd.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

AMD est un concepteur de semi-conducteurs **fabless** : l'entreprise dessine les puces, mais ne possède aucune usine. La fabrication est confiée à des fondeurs tiers, au premier rang desquels **TSMC**. Fondée en 1969, cotée au Nasdaq, dirigée depuis 2014 par **Lisa Su**, la société a réalisé un chiffre d'affaires de **34,6 Mds$ en 2025** (+34 %) et affiche un rythme annualisé supérieur à **50 Mds$ en 2026**.

Le modèle repose sur trois mécaniques distinctes :

- **Vente de composants à marge élevée** : processeurs et accélérateurs vendus à l'unité aux constructeurs (OEM/ODM), aux hyperscalers et aux distributeurs. C'est le cœur historique.
- **Vente de systèmes complets (rack-scale)** : depuis l'acquisition de **ZT Systems** (mars 2025), AMD ne vend plus seulement des puces mais des racks IA intégrés — la plateforme **Helios**, qui combine GPU Instinct, CPU EPYC, réseau Pensando et logiciel ROCm. Le ticket moyen passe de quelques milliers à plusieurs millions de dollars.
- **Contrats semi-custom** : conception de SoC sur mesure pour les consoles de jeu (Sony, Microsoft) et, désormais, d'accélérateurs personnalisés pour un hyperscaler unique (Meta).

## Principaux produits et services

**Data Center (58 % du CA au T2 2026)**
- **EPYC** : processeurs serveurs x86. La 6ᵉ génération « Venice » (architecture Zen 6, gravure TSMC N2) a été lancée à l'événement Advancing AI de juillet 2026.
- **Instinct** : accélérateurs GPU pour l'IA. Le **MI355X** est en production ; le **MI455X** (série MI450) apporte 432 Go de mémoire HBM4, 19,6 To/s de bande passante et environ 40 pétaflops en FP4.
- **Helios** : rack IA complet, jusqu'à 3 exaflops IA par armoire, premières livraisons au T3 2026.
- **Pensando** : cartes réseau et DPU pour l'infrastructure de centre de données.

**Client** : processeurs **Ryzen** pour PC portables et de bureau, où AMD a repris des parts de marché massives à Intel.

**Gaming** : GPU **Radeon** et SoC semi-custom pour PlayStation et Xbox.

**Embedded** : héritage **Xilinx** — FPGA (Versal, Zynq, Artix) et SoC adaptatifs pour l'industrie, l'automobile, l'aérospatial, les télécoms et le médical. Segment à cycles longs et marges élevées.

## Clients, fournisseurs, concurrents

**Clients** : les hyperscalers et laboratoires d'IA sont devenus le centre de gravité — **OpenAI**, **Meta**, **Microsoft Azure**, **Oracle**, **Anthropic**, **Amazon Web Services**, **Google Cloud**. S'y ajoutent les constructeurs de serveurs (**Dell**, **HPE**, **Supermicro**, **Lenovo**), les fabricants de PC (**Dell**, **HP**, **Lenovo**, **Asus**, **Acer**) et les industriels de l'embarqué.

**Fournisseurs** : **TSMC** (gravure N3, N2 ; dépendance quasi totale), **SK Hynix**, **Samsung** et **Micron** pour la mémoire HBM4, **ASE** et **Amkor** pour l'assemblage et le packaging avancé (CoWoS chez TSMC), **Synopsys** et **Cadence** pour les outils de conception, **Arm** pour certaines licences périphériques.

**Concurrents** : **NVIDIA** (dominant, 80-90 % du marché des accélérateurs IA), **Intel** (rival historique sur le x86, en redressement), **Broadcom** et **Marvell** (ASIC personnalisés pour hyperscalers), et les puces internes des géants du cloud (Google TPU, AWS Trainium, Microsoft Maia).

## Modalités contractuelles

Historiquement, AMD vend au coup par coup, sur bons de commande, sans engagement pluriannuel — un modèle transactionnel classique du semi-conducteur. **C'est précisément ce qui a changé en 2025-2026.**

Les accords gigawatt introduisent une architecture contractuelle inédite : engagements pluriannuels et multi-générations de la part du client, adossés à des **bons de souscription d'actions AMD** accordés au client. **OpenAI** (octobre 2025) et **Meta** (février 2026) ont chacun reçu un warrant portant sur **jusqu'à 160 millions d'actions AMD**, soit environ 10 % du capital chacun, dont l'acquisition des droits est conditionnée à des jalons de déploiement (1 GW, puis jusqu'à 6 GW) **et** à l'atteinte de seuils de cours de l'action. Pour **Anthropic** (juillet 2026, 2 GW), AMD a plutôt engagé un **investissement en fonds propres pouvant atteindre 5 Mds$** dans le client lui-même.

> **Note de lecture** : ces structures alignent l'intérêt du client et de l'actionnaire, mais elles brouillent la frontière entre revenu commercial et rémunération en capital. Toute analyse du dossier AMD doit intégrer ce paramètre de dilution potentielle — il est traité en détail dans les modules Red Flags et Avocat du Diable.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'AMD dans la chaîne de valeur

AMD occupe la position de **concepteur sans usine (fabless)**. Elle capte la valeur de la propriété intellectuelle et de l'architecture, mais externalise intégralement les étapes capitalistiques : gravure, packaging, test. Cette position explique à la fois ses marges brutes (56 % en non-GAAP au T2 2026) et sa **vulnérabilité structurelle** — elle ne contrôle ni sa capacité de production, ni son approvisionnement en mémoire.

### Amont — Propriété intellectuelle et outils

- **Synopsys**, **Cadence**, **Siemens EDA** : outils de conception électronique
- **Arm Holdings** : licences d'architecture pour certains blocs périphériques
- Recherche interne : architectures **Zen** (CPU), **CDNA** (GPU calcul), **RDNA** (GPU graphique), pile logicielle **ROCm**

### Amont — Fabrication et matériaux

- **TSMC** : fondeur quasi exclusif. Nœuds N5, N4, N3 et **N2** pour Zen 6. AMD est client de référence sur N2 et utilise également la fab d'Arizona pour une partie des dies de calcul serveur.
- **Mémoire HBM** : **SK Hynix** (leader HBM4), **Samsung Electronics**, **Micron**. C'est le goulot d'étranglement n°1 de tout le secteur des accélérateurs IA.
- **Packaging avancé** : **CoWoS** chez TSMC, complété par **ASE Technology** et **Amkor**. Capacité rare et allouée par le fondeur.
- **Substrats et wafers** : **Ibiden**, **Shinko**, **Sumco**, **Shin-Etsu**
- **GlobalFoundries** : accord d'approvisionnement résiduel sur nœuds matures

### AMD — Conception, intégration et systèmes

**Conception** : ~28 000 employés, centres d'ingénierie à Santa Clara, Austin, Markham, Bangalore, Shanghai, Dresde.

**Intégration système** : depuis l'acquisition de **ZT Systems** (mars 2025), AMD conçoit les racks Helios en interne. L'activité industrielle de ZT a été **cédée en octobre 2025** — AMD a conservé l'ingénierie, pas l'usine, restant fidèle au modèle fabless.

**Logiciel** : **ROCm**, l'alternative ouverte à CUDA. C'est le maillon le plus critique et le plus contesté de la chaîne. AMD a lancé en juillet 2026 une collaboration pluriannuelle avec **Anthropic** pour utiliser Claude afin d'accélérer le développement de ROCm.

### Aval — Assembleurs et intégrateurs

**Dell**, **Hewlett Packard Enterprise**, **Supermicro**, **Lenovo**, **Wistron**, **Quanta**, **Foxconn/Hon Hai** : assemblage et livraison des serveurs et racks aux clients finaux.

### Aval — Clients finaux

- **Laboratoires d'IA** : OpenAI (6 GW), Anthropic (2 GW), xAI
- **Hyperscalers** : Meta (6 GW), Microsoft Azure, Oracle (grappe de 50 000 MI450), AWS, Google Cloud
- **Neoclouds** : CoreWeave, Crusoe, Riot Platforms (reconversion de sites miniers en centres IA)
- **Entreprises et secteur public** : centres de calcul nationaux, laboratoires de recherche
- **Grand public** : PC Ryzen, cartes Radeon, consoles PlayStation et Xbox
- **Industriels** : automobile, aéronautique, télécoms, imagerie médicale (héritage Xilinx)

### Cartographie simplifiée du flux

\`\`\`
AMONT                    AMD                      AVAL
TSMC (N3 / N2)      →    Conception CPU/GPU   →   Dell, HPE, Supermicro
SK Hynix (HBM4)          Architecture Zen/CDNA     Quanta, Foxconn
Samsung, Micron          Intégration Helios            ↓
ASE, Amkor          →    Logiciel ROCm        →   OpenAI, Meta, Anthropic
Synopsys, Cadence        (~28 000 employés)        Microsoft, Oracle
(capacité rare,          (aucune usine)            PC, consoles, industrie
 allouée)
\`\`\`

### Le point de rupture

Le maillon faible n'est pas la conception — AMD a démontré qu'elle savait rattraper NVIDIA sur le silicium. Le maillon faible est **l'allocation de capacité chez TSMC et de HBM4 chez SK Hynix**. Ces deux ressources sont contraintes, prioritairement attribuées au plus gros client historique (NVIDIA), et négociées année par année. Un accord de 6 GW ne vaut que si les wafers et la mémoire suivent. La direction a d'ailleurs reconnu au T2 2026 une **tension d'approvisionnement sur les CPU serveur** — un signal à surveiller de près.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

### Exercice 2025 (clos le 27 décembre 2025) — 34,6 Mds$

| Segment | CA 2025 | Croissance a/a | Résultat opérationnel |
|---|---|---|---|
| **Data Center** | **16,6 Mds$** | **+32 %** | 3,6 Mds$ |
| Client & Gaming | 14,6 Mds$ | +51 % | ~2,7 Mds$ |
| Embedded | 3,5 Mds$ | -3 % | ~1,3 Md$ |
| **Total** | **34,6 Mds$** | **+34 %** | 3,7 Mds$ (GAAP) |

Le résultat opérationnel Data Center 2025 a été amputé d'environ **440 M$ de charges nettes de stocks** liées au contrôle américain à l'export sur les GPU **Instinct MI308** destinés à la Chine.

---

### Deuxième trimestre 2026 (clos le 27 juin 2026) — la bascule

| Segment | CA T2 2026 | Croissance a/a | Poids |
|---|---|---|---|
| **Data Center** | **6,7 Mds$** | **+107 %** | **58 %** |
| Client | 3,1 Mds$ | +23 % | 27 % |
| Gaming | 779 M$ | -31 % | 7 % |
| Embedded | 977 M$ | +19 % | 8 % |
| **Total** | **11,5 Mds$** | **+50 %** | 100 % |

**C'est le trimestre où AMD est devenue une entreprise d'infrastructure IA.** Le Data Center franchit pour la première fois la barre des 50 % du chiffre d'affaires et double en un an. Le segment a également dépassé, en 2026, l'activité centre de données d'Intel — un basculement historique.

---

### Lecture par dynamique

**Data Center — le moteur unique.** Double croissance : les CPU **EPYC** gagnent des parts sur un marché serveur en expansion (AMD anticipe +80 % de CA CPU serveur au second semestre 2026 et +70 % en 2027), et les GPU **Instinct** montent en puissance avant le déploiement des racks Helios. La direction vise un **doublement du segment en 2027**, avec une activité IA en croissance de « bien plus de 100 % ».

**Client — solide mais fragilisé.** +23 % grâce aux gains de parts Ryzen et à un mix premium. Mais la direction a explicitement averti d'un **possible affaiblissement du marché PC au second semestre 2026**, dans un contexte de hausse du coût des composants mémoire.

**Gaming — le segment en retrait.** -31 %, pénalisé par la fin de cycle des consoles (revenus semi-custom en baisse structurelle) et par le renchérissement des composants qui pèse sur la demande de cartes graphiques. Ce segment ne pilote plus la thèse.

**Embedded — le retour discret.** +19 % après deux années de déstockage client. AMD revendique plus de **18 Mds$ de nouveaux design wins** cumulés, et le segment s'oriente vers une année record. C'est le contrepoids cyclique le plus utile du portefeuille : marges élevées, visibilité longue, décorrélation de l'IA.

---

### Répartition géographique et concentration

AMD ne publie pas de ventilation géographique granulaire par segment, mais deux points structurent le risque :

- **La Chine** reste un marché contraint. Les contrôles à l'export sur les MI308 ont coûté ~440 M$ de charges en 2025, partiellement compensés par une reprise de provision de ~360 M$ et ~390 M$ de ventes au T4 2025 après assouplissement. Le régime réglementaire reste volatil.
- **La concentration client explose.** Avec OpenAI, Meta, Microsoft, Oracle et Anthropic comme piliers du carnet Data Center, une poignée de contreparties représentera bientôt la majorité de la croissance. C'est l'inverse exact du profil diversifié qui caractérisait AMD il y a trois ans.

---

### Profil de marge

- **Marge brute** : 54 % GAAP / **56 % non-GAAP** au T2 2026, en hausse de plus de 200 points de base sur un an, tirée par le mix Data Center
- **Charges opérationnelles** : **3,4 Mds$ au T2 2026, +40 % a/a** — l'investissement en R&D et en mise sur le marché absorbe une part croissante du levier
- **Résultat opérationnel non-GAAP** : 3,1 Mds$ au T2 2026, soit ~27 % du CA
- **Écart GAAP / non-GAAP** : structurellement large (BPA 1,38 $ contre 1,66 $ au T2 2026), du fait de l'amortissement des incorporels Xilinx et de la rémunération en actions`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats) — réels, en construction, revendiqués

### 1. Le monopole du second — moat réel et rare
Le marché des accélérateurs IA est un duopole asymétrique où NVIDIA détient 80-90 % des volumes. Or **tout acheteur de compute à l'échelle du gigawatt a un besoin stratégique d'un second fournisseur crédible** : pour négocier les prix, pour sécuriser l'approvisionnement, pour éviter le verrouillage. AMD est aujourd'hui **la seule alternative x86+GPU intégrée et déployable à cette échelle**. Ce n'est pas un moat technologique, c'est un moat de position — et il est puissant tant qu'aucun troisième acteur généraliste n'émerge.

### 2. L'architecture x86 serveur — duopole de fait
Sur les CPU serveur, il n'existe que deux fournisseurs x86 : AMD et Intel. Les logiciels d'entreprise, les hyperviseurs et des décennies de code sont compilés pour cette architecture. Les migrations vers Arm progressent (Graviton, Grace) mais restent lentes et partielles. AMD y a converti sa supériorité technique en **parts de marché durables**, avec une prime de prix significative face à Intel.

### 3. L'héritage Xilinx — un moat authentique, souvent oublié
Le segment Embedded est le seul du portefeuille à disposer d'un fossé classique et éprouvé : les FPGA et SoC adaptatifs sont intégrés dans des équipements industriels, médicaux, aéronautiques et de défense certifiés, avec des cycles de vie de 10 à 20 ans. **Les coûts de changement y sont prohibitifs.** Ce segment ne fait pas les gros titres, mais c'est lui qui protège le bas de cycle.

### 4. ROCm — le moat que le marché attend, pas encore acquis
C'est la ligne de fracture du dossier. **CUDA** est la véritable douve de NVIDIA : quinze ans d'écosystème, de bibliothèques, de développeurs formés. **ROCm 7** a considérablement réduit l'écart sur les charges PyTorch et l'inférence, au point que Meta et OpenAI acceptent d'entraîner sur du silicium AMD — une bascule de crédibilité majeure. Mais ROCm reste **une alternative crédible, pas encore un standard**. Tant que l'écosystème ne s'auto-alimente pas, ce moat est loué, pas possédé.

### 5. Le rack-scale — moat en construction
Avec Helios, AMD passe du composant au système. Cela relève la barrière technique (réseau, refroidissement, logiciel d'orchestration), augmente le ticket moyen et rend le remplacement plus coûteux. **Mais NVIDIA a plusieurs générations d'avance sur ce terrain** (NVLink, InfiniBand, racks GB300). Helios doit encore prouver sa fiabilité en production à grande échelle.

### 6. Le verrouillage par les warrants — un moat contractuel inédit
En offrant à OpenAI et Meta jusqu'à 160 millions d'actions chacun, AMD a transformé ses deux plus gros clients en actionnaires potentiels. Ils ont désormais **un intérêt financier direct à ce que le déploiement réussisse et à ce que le cours monte**. C'est un mécanisme d'alignement sans équivalent dans le secteur. C'est aussi, pour les actionnaires existants, une dilution.

## Positionnement vs concurrence

| Critère | AMD | NVIDIA | Intel |
|---|---|---|---|
| Part du marché accélérateurs IA | ~10 % (en hausse) | 80-90 % | Marginale |
| Marge brute | ~56 % | ~75 % | ~35-40 % |
| Écosystème logiciel | ROCm (ouvert, en rattrapage) | CUDA (standard de facto) | oneAPI (faible traction) |
| CPU serveur x86 | Leader technique | Absent | En redressement |
| Modèle industriel | Fabless (TSMC) | Fabless (TSMC) | Fabs intégrées (déficitaires) |
| Offre rack complète | Helios (T3 2026) | Mature (GB300) | Absente |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Asymétrique.** Fort en apparence — la demande dépasse l'offre et les carnets sont pleins. Faible en réalité — quand cinq clients représentent l'essentiel de la croissance et qu'il a fallu concéder 10 % du capital à deux d'entre eux pour emporter la décision, ce n'est pas un signe de pouvoir de prix. **AMD a payé pour entrer.**
- **Vis-à-vis des fournisseurs** : **Faible.** TSMC et SK Hynix arbitrent l'allocation de capacité entre AMD et NVIDIA, dont les volumes et les marges sont très supérieurs. AMD est preneur de conditions, pas donneur d'ordre.
- **Vis-à-vis d'Intel** : **Fort.** Prime de prix significative sur les serveurs et les PC, et un rival dont la trésorerie est mobilisée par une activité de fonderie encore lourdement déficitaire.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Semi-conducteurs de calcul (août 2026)

| Société | Code Bloomberg | Cap. boursière | EV/CA | EV/EBIT | P/E (TTM) | Rdt div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **AMD** | **AMD US** | **~838 Mds$** | **~20x** | **~130x** | **~131x** | **0 %** | **~6 %** |
| NVIDIA | NVDA US | ~5 440 Mds$ | ~23x | ~33x | ~40x | ~0,02 % | ~55 % |
| Broadcom | AVGO US | ~1 860 Mds$ | ~24x | ~45x | ~75x | ~0,6 % | ~25 % |
| TSMC | TSM US / 2330 TT | ~2 200 Mds$ | ~14x | ~22x | ~28x | ~1,2 % | ~28 % |
| Intel | INTC US | ~490 Mds$ | ~9x | n.s. | n.s. | 0 % | ~2 % |
| Marvell | MRVL US | ~190 Mds$ | ~23x | ~90x | n.s. | ~0,1 % | ~-3 % |
| Qualcomm | QCOM US | ~175 Mds$ | ~4x | ~13x | ~16x | ~2,3 % | ~40 % |

*Ordres de grandeur au 14 août 2026, calculés sur cours de clôture et données publiées les plus récentes. Les multiples de résultat sont volatils sur ce secteur et doivent être recalculés sur filings SEC directs avant toute décision.*

---

### Analyse comparative

**NVIDIA — le benchmark écrasant**
Le T1 de son exercice 2027 (publié fin mai 2026) affiche **81,6 Mds$ de chiffre d'affaires trimestriel**, dont **75,2 Mds$ pour le seul Data Center (+92 %)**, avec une marge brute de ~75 %. À titre de comparaison, le trimestre Data Center d'AMD pèse 6,7 Mds$. **NVIDIA facture plus en un trimestre qu'AMD n'en réalise en deux ans.** Et pourtant NVIDIA se paie environ 40x les bénéfices, contre ~131x pour AMD. Le paradoxe est central : l'action la plus chère du secteur n'est pas celle du leader.

**Broadcom — le concurrent que la thèse AMD sous-estime**
Broadcom a réalisé 22,19 Mds$ au T2 de son exercice 2026 (+48 %), dont **10,8 Mds$ d'IA (+143 %)**, avec une guidance de 16 Mds$ d'IA au trimestre suivant et une cible de **100 Mds$ de CA IA en 2027**. Broadcom ne vend pas de GPU : il conçoit les **ASIC personnalisés** des hyperscalers (Google TPU, et d'autres). Or ces ASIC attaquent exactement le même budget que les Instinct d'AMD — et avec un coût par inférence souvent meilleur sur des charges spécialisées. **C'est le rival structurel le plus dangereux, et le moins discuté.**

**Intel — le rival historique qui n'est plus le sujet**
Intel a publié 16,1 Mds$ au T2 2026 (+25 %), avec un segment Data Center & IA à 6,26 Mds$ (+59 %) — désormais dépassé par AMD malgré une base installée bien supérieure. Mais Intel Foundry a perdu 2,1 Mds$ sur le trimestre. Intel reste un concurrent sur le CPU serveur et le PC ; il n'est plus un concurrent crédible sur l'accélération IA. **AMD a gagné cette guerre-là.**

**TSMC — le fournisseur qui capte la rente**
Ni concurrent ni simple sous-traitant : TSMC est l'arbitre. Avec ~14x le chiffre d'affaires et une position de quasi-monopole sur les nœuds avancés, il extrait une part croissante de la valeur créée par ses clients. **Toute analyse d'AMD est incomplète si elle ignore que TSMC fixe unilatéralement le plafond de production d'AMD.**

---

### Le ratio qui compte : capitalisation par dollar de bénéfice IA

À ~838 Mds$ pour ~41 Mds$ de CA TTM et environ 4 $ de BPA non-GAAP en 2025, **AMD se paie déjà comme si elle avait gagné la bataille du second fournisseur.** NVIDIA à 40x les bénéfices et Broadcom à ~75x offrent une exposition à la même vague avec des bénéfices présents, pas futurs. La prime AMD ne se justifie que si la croissance de 2027 se matérialise intégralement — le consensus attend **87,5 Mds$ de CA en 2027 contre 50,8 Mds$ en 2026**, soit +72 %. C'est l'hypothèse la plus chargée du dossier.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du deuxième trimestre 2026 (publiés le 4 août 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart |
|---|---|---|---|
| Chiffre d'affaires | **11,54 Mds$** | 11,28-11,31 Mds$ | **Dépassé de ~2 %** |
| BPA non-GAAP | **1,66 $** | 1,61-1,62 $ | **Dépassé de ~3 %** |
| BPA GAAP | 1,38 $ | — | vs 0,54 $ un an plus tôt |
| Marge brute non-GAAP | 56 % | ~55 % | **Dépassée** |
| Guidance T3 2026 | ~13,0 Mds$ ±0,3 | 12,5 Mds$ | **Nettement supérieure** |

**AMD a dépassé le consensus sur toutes les lignes — et l'action a reculé de près de 9 % en séance après clôture.** C'est le fait le plus instructif du trimestre.

---

### Facteurs clés par segment

- **Data Center** : 6,7 Mds$, **+107 %**, 58 % du chiffre d'affaires. Moteur unique, tiré par les EPYC et les Instinct.
- **Client** : 3,1 Mds$, +23 %, porté par les gains de parts Ryzen
- **Gaming** : 779 M$, **-31 %**, fin de cycle console et coûts composants
- **Embedded** : 977 M$, +19 %, sortie de déstockage confirmée

Accélération nette et non ambiguë : +50 % en rythme annuel, +13 % séquentiel, et une guidance à +41 % pour le T3. La comparaison annuelle est flattée par la base 2025 (qui incluait 800 M$ de charges liées à l'export MI308), mais **la progression séquentielle prouve que l'effet n'est pas qu'un artefact de base**.

---

### Évolution des marges

- Marge brute non-GAAP à **56 %**, en hausse de plus de 200 points de base sur un an, grâce au mix Data Center
- Marge brute GAAP à 54 %, l'écart reflétant l'amortissement des incorporels Xilinx et la rémunération en actions
- **Point de friction** : les charges opérationnelles atteignent **3,4 Mds$, en hausse de 40 % sur un an**. Le levier opérationnel existe, mais il est partiellement consommé par l'investissement R&D et commercial nécessaire pour tenir la feuille de route MI450/Helios.

---

### Perspectives et guidance

- **T3 2026** : ~13 Mds$ ±0,3 Md$, soit +41 % a/a et +13 % séquentiel — supérieur au consensus
- **Second semestre 2026** : CA CPU serveur attendu en hausse de **plus de 80 %**
- **2027** : Data Center attendu en **plus que doublement**, CPU serveur **+70 %**, activité IA **« bien plus de 100 % »**
- **TAM revendiqué** : marché des accélérateurs IA estimé à **1 400 Mds$ à horizon 2030** ; TAM CPU serveur au-delà de 120 Mds$ en 2030
- Changement de ton : plus affirmatif que jamais, avec des engagements chiffrés à deux ans — ce qui est inhabituel dans ce secteur

---

### Signaux d'alerte au bilan

C'est ici que le trimestre se complique.

- **Trésorerie et placements court terme** : 13,1 Mds$ contre **3,2 Mds$ de dette totale** — position nette de trésorerie confortable
- **Capex** : **808 M$, contre 282 M$ un an plus tôt et ~298 M$ attendus par le consensus**. Pour une entreprise fabless, un capex approchant le milliard par trimestre est une anomalie qui mérite explication.
- **Flux de trésorerie disponible** : 1,558 Md$, soit une **marge de FCF en repli à 14 % contre 15 %**, alors même que le chiffre d'affaires bondit de 50 %
- **Dettes fournisseurs** : de 2,99 Mds$ au T1 à **5,35 Mds$ au T2, soit +78 %** — une progression très supérieure à celle du chiffre d'affaires (+13 % séquentiel). Certains analystes y lisent un allongement des délais de paiement fournisseurs venant soutenir la trésorerie.
- **Stocks** : 8,47 Mds$ contre 7,92 Mds$ en fin d'exercice 2025
- **Créances clients** : 7,28 Mds$ contre 6,32 Mds$ — croissance rapide, cohérente avec l'activité mais à surveiller sur la qualité de crédit des neoclouds

---

### Réaction du marché

Le titre a d'abord progressé d'environ 7 % après la publication, avant de **basculer à -8,9 % en séance étendue**. Le cours est ensuite retombé à 483 $ le 13 août, puis a rebondi à **514,39 $ le 14 août (+6,5 %)** dans un mouvement sectoriel favorable.

**Ce que cela révèle** : le marché n'attendait pas un dépassement du consensus — il attendait un dépassement des attentes déjà relevées par les accords gigawatt. À plus de 120 fois les bénéfices, un trimestre excellent ne suffit plus ; il faut un trimestre stupéfiant. Le décrochage n'a pas sanctionné les résultats, il a sanctionné **le capex, la conversion en trésorerie et la mise en garde sur le marché PC**. Les fondamentaux étaient meilleurs que prévu ; la qualité des flux, moins bonne.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Évolution du ton — 2023 à 2026

**2023 — la promesse.** Lisa Su installe le récit du MI300X comme alternative crédible à NVIDIA. Le discours est prudent sur les volumes, ambitieux sur la trajectoire. Le mot-clé est « opportunité ».

**2024 — la validation partielle.** Les premiers revenus Instinct arrivent, mais restent d'un ordre de grandeur inférieur à NVIDIA. Le management insiste sur la qualité de la feuille de route et sur ROCm. Le ton reste défensif sur l'écosystème logiciel.

**2025 — le pivot.** L'année s'ouvre par les contrôles à l'export sur les MI308 (charges de ~440 M$ nettes) et se termine par l'annonce OpenAI en octobre. Le discours change de nature : AMD ne parle plus de rattraper NVIDIA, mais de **devenir le partenaire de calcul de référence des plus grands constructeurs d'infrastructure IA**.

**2026 — l'affirmation chiffrée.** Le ton est celui d'une entreprise qui a gagné le droit de s'engager. Au T2 2026, Lisa Su déclare : *« Nous avons livré un excellent trimestre, avec un chiffre d'affaires et une rentabilité record »*. Le management sort de la prudence sectorielle habituelle en donnant des objectifs à deux ans : doublement du Data Center en 2027, CPU serveur +70 %, IA « bien plus de 100 % ».

---

### Priorités répétées du management

**1. Le Data Center est le seul sujet.** Chaque conférence est structurée autour de ce segment. Client, Gaming et Embedded sont traités en fin de propos. La direction assume ce déséquilibre narratif.

**2. La conversion des engagements gigawatt en revenus.** C'est le point sur lequel les analystes reviennent systématiquement, et sur lequel le management reste volontairement imprécis quant au calendrier trimestriel exact. Su a indiqué que le rythme de déploiement dépend **de l'accès à l'électricité** autant que de la production de puces — une nuance importante et rarement relayée.

**3. Helios comme changement de nature.** Le passage du composant au rack est présenté comme la transformation stratégique du groupe. Premières livraisons au T3 2026, montée en puissance au T4.

**4. ROCm et l'écosystème ouvert.** Argument systématique face au verrouillage CUDA. La collaboration annoncée avec Anthropic (utiliser Claude pour accélérer le développement de ROCm) est présentée comme un accélérateur structurel.

**5. La discipline sur le CPU serveur.** Su répète que le TAM CPU serveur croîtra de plus de 35 % par an jusqu'à dépasser 120 Mds$ en 2030 — une manière de rappeler que la thèse ne repose pas uniquement sur les GPU.

---

### Analyse du sentiment

- **Confiance** : très élevée, et croissante. Le management a franchi le seuil au-delà duquel un dirigeant de semi-conducteurs engage publiquement des chiffres à deux ans. C'est un atout de lisibilité **et** une prise de risque : le moindre trimestre en dessous de la trajectoire annoncée sera lu comme un démenti.
- **Transparence** : bonne sur les segments et les marges ; **plus floue sur la conversion en trésorerie**. Le capex de 808 M$ au T2 2026, très supérieur aux attentes, n'a pas fait l'objet d'une décomposition détaillée en conférence.
- **Prudence sélective** : la direction a spontanément signalé un possible affaiblissement du marché PC au second semestre et une tension d'approvisionnement sur les CPU serveur. Cette honnêteté sur les points faibles renforce la crédibilité du reste.
- **Réponse aux attaques** : interrogée sur l'engagement d'Elon Musk envers NVIDIA au lendemain des résultats, Lisa Su a écarté le sujet sans polémique — signe d'une communication maîtrisée, non défensive.

> **À lire entre les lignes** : le management vend désormais **2027**, pas 2026. Toutes les métriques marquantes citées en conférence concernent l'exercice suivant. C'est cohérent avec le calendrier de déploiement Helios, mais cela signifie que **le cours actuel ne s'appuie sur aucun résultat encore publié**. L'exercice 2026 est un exercice de transition dont le marché a déjà pris acte ; le verdict tombera sur 2027.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Lisa Su — Présidente du conseil et Directrice générale

**Bilan chiffrable.** C'est l'un des redressements industriels les mieux documentés de la tech contemporaine. À sa prise de fonction en octobre 2014, AMD valait environ 2 Mds$ en bourse, perdait de l'argent, et sa survie était ouvertement discutée. En août 2026, la capitalisation approche **838 Mds$**. Le chiffre d'affaires est passé d'environ 4 Mds$ (2015) à **34,6 Mds$ (2025)**, avec une marge brute passée d'environ 27 % à plus de 50 %.

Les décisions structurantes lui sont directement attribuables :
- **Le pari Zen** (2017) : refonte complète de l'architecture CPU, financée alors que la trésorerie était tendue. C'est ce pari qui a repris à Intel l'essentiel de ses parts serveur et PC.
- **Le basculement fabless intégral vers TSMC**, au moment où Intel s'enlisait dans ses propres nœuds
- **L'acquisition de Xilinx** (2022, ~49 Mds$ en actions), qui a apporté le segment Embedded et un moat authentique
- **L'acquisition de ZT Systems** (mars 2025), suivie de la cession de l'activité industrielle en octobre 2025 — permettant d'acquérir la compétence rack sans alourdir le bilan industriel
- **Les accords gigawatt** avec OpenAI (2025), Meta (2026) et Anthropic (2026), qui ont fait basculer AMD du statut de challenger à celui de second fournisseur structurel

**Ancienneté** : Directrice générale depuis octobre 2014, présidente du conseil depuis 2022. Docteure en génie électrique du MIT, passée par IBM et Freescale. Plus de dix ans à la tête du groupe — une longévité rare et un alignement de long terme réel.

**Participation financière** : détention personnelle significative, essentiellement constituée d'actions de performance acquises au fil des exercices. La rémunération est majoritairement variable et indexée sur la performance boursière et opérationnelle. Structure conforme aux standards du secteur, sans excès signalé par les agences de vote.

---

### Équipe dirigeante

- **Jean Hu**, directrice financière depuis 2023, ancienne CFO de Marvell — profil rompu à la gestion de cycles semi-conducteurs violents. C'est elle qui pilote la communication sur les marges et la trésorerie.
- **Mark Papermaster**, directeur technique, en poste depuis 2011 — architecte de la continuité technologique Zen/CDNA. Ses cessions d'actions font l'objet d'un suivi régulier par le marché, sans anomalie relevée à ce stade.
- **Forrest Norrod**, responsable de l'activité Data Center — l'exécutant du basculement vers l'IA.
- **Vamsi Boppana**, responsable IA, issu de Xilinx — pilote de la pile ROCm.

Équipe stable, technique, peu renouvelée. C'est un atout d'exécution ; c'est aussi un risque de vision homogène.

---

### Allocation du capital — historique

| Décision | Montant | Lecture |
|---|---|---|
| Acquisition Xilinx (2022) | ~49 Mds$ en actions | Diversification réussie ; goodwill et incorporels massifs au bilan |
| Acquisition Pensando (2022) | ~1,9 Md$ | Brique réseau, aujourd'hui intégrée à Helios |
| Acquisition ZT Systems (2025) | ~4,9 Mds$ | Compétence rack acquise, usine revendue — bien exécuté |
| Acquisition Taalas (août 2026) | non divulgué | Silicium d'inférence — pari précoce |
| Warrants OpenAI + Meta | jusqu'à 320 M d'actions | **Dilution potentielle d'environ 20 % du capital** |
| Investissement Anthropic (2026) | jusqu'à 5 Mds$ | Prise de participation chez un client |
| Rachats d'actions | plusieurs milliards cumulés | Largement neutralisés par la dilution SBC et les warrants |

**Tendance ROE/ROIC** : le ROE ressort à environ **10 % sur les douze derniers mois**, en nette amélioration mais toujours modeste au regard du multiple de valorisation. La raison est structurelle : les capitaux propres sont gonflés par le goodwill Xilinx. **Le ROE ajusté du goodwill serait bien plus flatteur — et bien moins pertinent, puisque ce goodwill a été payé en actions par les actionnaires actuels.**

---

### Signaux d'alerte

- **Dilution par warrants** : jusqu'à 320 millions d'actions promises à deux clients, soit ~20 % du capital. C'est la décision d'allocation la plus contestable du mandat — mais aussi celle qui a permis d'emporter les contrats. Le jugement dépendra du revenu effectivement encaissé.
- **Prise de participation chez un client** (jusqu'à 5 Mds$ dans Anthropic) : mécanisme de plus en plus fréquent dans l'IA, qui crée un **risque de circularité** entre revenus et investissements. À documenter précisément dans les annexes.
- **Rémunération** : structure conventionnelle, fortement indexée sur la performance. Pas de signal d'excès.
- **Comportement promotionnel** : modéré mais réel — les chiffres de TAM annoncés (1 400 Mds$ d'ici 2030) relèvent du récit sectoriel autant que de l'analyse.
- **Type de dirigeant** : **gestionnaire professionnel de très haut niveau, à mentalité de fondatrice.** Ingénieure d'origine, elle a reconstruit l'entreprise sur des choix techniques et non financiers. À ce stade — passage à l'échelle industrielle et gestion d'une concentration client extrême —, c'est exactement le profil requis. Le risque clé homme est réel : le récit AMD est indissociable de Lisa Su.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours (2021-2026)

### Contexte
AMD est un titre à **beta ~2,46** : il amplifie les mouvements du marché dans les deux sens. Sur douze mois glissants, la fourchette va de **149,22 $ (8 septembre 2025)** à **584,73 $ (30 juin 2026)** — un écart de 1 à 3,9 en un an. Le cours du **14 août 2026 est de 514,39 $**, soit +6,5 % sur la séance et environ -12 % sous le plus haut historique.

---

### Hausses significatives (+5 %)

**Octobre 2025 — l'annonce OpenAI : +34 % en une séance.** Le choc fondateur du réétalonnage. L'accord de 6 GW, assorti d'un warrant de 160 millions d'actions, a transformé du jour au lendemain la perception du dossier : d'un challenger espérant grappiller des parts, AMD est devenue le second fournisseur désigné du plus gros acheteur de calcul au monde. Oracle a enchaîné avec l'annonce d'une grappe publique de 50 000 MI450.

**Février 2026 — l'accord Meta.** Second engagement de 6 GW, structure de warrant quasi identique, avec un accélérateur personnalisé fondé sur l'architecture MI450. Le marché y a lu une **confirmation de schéma** plutôt qu'un coup isolé : plusieurs dizaines de milliards de capitalisation ajoutés en une séance.

**Mai 2026 — résultats du T1 2026 : +21 % en moins de 24 heures.** CA de 10,3 Mds$ (+38 %), Data Center à 5,8 Mds$ (+57 %), dépassant pour la première fois l'activité centre de données d'Intel. Le titre est passé de 355 $ à plus de 430 $.

**Juillet 2026 — Advancing AI, Microsoft et Anthropic.** Lancement d'EPYC « Venice » (Zen 6), annonce du déploiement de Helios sur Azure (20 juillet), puis partenariat Anthropic de 2 GW assorti d'un investissement pouvant atteindre 5 Mds$ (22 juillet). Le titre culmine à 584,73 $ le 30 juin puis évolue en zone haute.

**14 août 2026 — rebond sectoriel : +6,5 %.** Retour de l'appétit pour les valeurs IA après la correction post-résultats, dans un contexte de records sur les indices américains.

---

### Baisses significatives (-5 %)

**2022 — la purge du cycle.** Effondrement de la demande PC post-COVID, resserrement monétaire, compression des multiples technologiques. Le titre a perdu plus de la moitié de sa valeur.

**Avril 2025 — contrôles à l'export sur la Chine.** L'interdiction de vendre les Instinct MI308 en Chine a entraîné environ **440 M$ de charges nettes de stocks** sur l'exercice 2025 et un plus bas à 149,22 $ en septembre 2025.

**1ᵉʳ juillet 2026 — repli sectoriel : -6,9 %.** Correction généralisée sur les semi-conducteurs, sans nouvelle spécifique à AMD. Rappel de la sensibilité du titre au sentiment de marché.

**Fin juillet 2026 — prise de bénéfices avant résultats.** Repli d'environ 9 % sur une semaine et 12 % sur un mois, les investisseurs réduisant leur exposition avant une publication à fort enjeu.

**5 août 2026 — après les résultats du T2 : -8,9 %.** Malgré un dépassement du consensus sur le chiffre d'affaires, le BPA, la marge brute et la guidance. Le marché a sanctionné le **capex de 808 M$** (contre ~298 M$ attendus), la **compression de la marge de flux de trésorerie disponible à 14 %**, la hausse de 40 % des charges opérationnelles et l'avertissement sur le marché PC au second semestre.

---

### Facteurs structurels

- **Le titre se négocie sur 2027, pas sur 2026.** Les résultats publiés ne sont plus le moteur principal ; le moteur est la crédibilité du calendrier de déploiement MI450/Helios.
- **Sensibilité aux annonces clients** : chaque nouvel engagement gigawatt provoque un mouvement à deux chiffres. Cette mécanique fonctionne aussi à l'envers — l'absence d'un nouveau contrat majeur sur un trimestre serait lue comme un signal négatif.
- **Corrélation forte au complexe IA** : NVIDIA, Broadcom, TSMC, Micron. AMD ne se découple pas d'un mouvement de défiance sectoriel.
- **Exposition réglementaire** : le régime américain de contrôle à l'export sur la Chine reste le principal aléa exogène.
- **Absence de dividende** : aucun rendement de soutien. L'intégralité du rendement attendu provient de l'appréciation du cours, ce qui accentue la volatilité.
- **Flux passifs** : appartenance aux principaux indices américains et sectoriels — flux acheteurs mécaniques réguliers, mais qui amplifient aussi les sorties en phase de dérisquage.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement méthodologique
AMD traverse une transformation de périmètre économique : passage du composant au système, concentration client extrême, et dilution potentielle de ~20 % liée aux warrants. Les projections ci-dessous sont des **scénarios structurés**, pas des prévisions de précision. Le BPA non-GAAP est retenu comme référence (usage sectoriel) ; l'écart avec le GAAP reste large du fait de l'amortissement des incorporels Xilinx et de la rémunération en actions.

### Hypothèses de modélisation

**Croissance du chiffre d'affaires**
- Consensus 2026 : **50,8 Mds$** (+47 % vs 34,6 Mds$ en 2025)
- Consensus 2027 : **87,5 Mds$** (+72 %) — hypothèse portée par le déploiement du premier gigawatt OpenAI, des premiers racks Meta et de la montée en puissance de Helios
- 2028 : croissance en décélération naturelle vers +30-40 %, sous l'effet de la base et de la saturation des allocations de capacité
- Marché des accélérateurs IA estimé par AMD à 1 400 Mds$ à horizon 2030 ; TAM CPU serveur au-delà de 120 Mds$

**Gains de parts de marché**
- Accélérateurs IA : d'environ 10 % vers 15-20 % si la feuille de route MI450/MI500 tient. C'est l'hypothèse la plus sensible du modèle.
- CPU serveur : poursuite des gains face à Intel, avec un CA attendu en hausse de plus de 80 % au second semestre 2026 et de plus de 70 % en 2027

**Effet prix et pressions sur les coûts**
- Prix de vente moyen en forte hausse avec le passage au rack (ticket de plusieurs millions de dollars)
- **Pression opposée** : renchérissement de la HBM4 et des wafers avancés, allocation contrainte chez TSMC et SK Hynix. La marge brute non-GAAP devrait plafonner autour de 55-58 %, loin des ~75 % de NVIDIA.
- Coûts composants mémoire pesant sur les segments Client et Gaming

**Levier opérationnel**
- Charges opérationnelles en hausse de 40 % a/a au T2 2026 — le levier est réel mais partiellement absorbé par la R&D
- Hypothèse retenue : opex croissant de 30-35 % par an sur 2026-2027, puis décélération

**Coûts de financement**
- Dette totale limitée à 3,2 Mds$ contre 13,1 Mds$ de trésorerie et placements. Charge financière nette négligeable, sauf recours accru à l'emprunt pour financer les prises de participation.

**Dilution du nombre d'actions**
- ~1,63 Md d'actions en circulation
- **Warrants OpenAI + Meta : jusqu'à 320 millions d'actions supplémentaires, soit ~20 %**, dont l'acquisition des droits s'échelonne avec les déploiements de 1 GW à 6 GW et avec des seuils de cours
- Rémunération en actions : ~1,5-2 % de dilution annuelle, partiellement compensée par les rachats
- **Hypothèse de modélisation** : dilution effective de 4-6 % par an sur 2026-2028, s'accélérant avec les jalons de déploiement

---

### Estimations BPA (non-GAAP)

| Exercice | BPA estimé | Croissance | P/E au cours de 514,39 $ |
|---|---|---|---|
| 2024 (réalisé) | ~3,31 $ | — | — |
| 2025 (réalisé) | **~4,15 $** | +25 % | — |
| **2026E** | **7,00-7,30 $** | **+70-76 %** | **~70-73x** |
| **2027E** | **11,50-12,50 $** | **+62-71 %** | **~41-45x** |
| **2028E** | **16,00-18,00 $** | **+35-44 %** | **~29-32x** |

*Pour mémoire, le BPA GAAP 2025 ressort à 2,65 $. L'écart avec le non-GAAP est d'environ 1,50 $ par action et devrait se resserrer progressivement à mesure que les incorporels Xilinx s'amortissent.*

---

### Sensibilité

- **Scénario optimiste** — déploiement OpenAI et Meta conforme au calendrier, MI500 livré à l'heure, marge brute maintenue à 57 % : BPA 2028 vers 20 $ et au-delà, ce qui rejoindrait l'objectif de long terme évoqué par la direction. Le titre serait alors à ~25x les bénéfices 2028 — raisonnable.
- **Scénario de base** — déploiements décalés de un à deux trimestres, marge brute à 55 %, dilution effective de 5 %/an : BPA 2028 vers 16-17 $, P/E 2028 à ~31x. Valorisation tendue mais soutenable pour un actif en hypercroissance.
- **Scénario pessimiste** — retard sur Helios, allocation HBM4 insuffisante, un des deux grands clients réduisant son engagement, ralentissement du capex IA : croissance 2027 ramenée à +35 % au lieu de +72 %, BPA 2028 vers 10-11 $, P/E 2028 à ~48x. **Dans ce cas, la compression du multiple ferait bien plus mal que la baisse du BPA elle-même.**

**Conclusion** : à 514,39 $, l'action intègre déjà le scénario de base **et** une partie du scénario optimiste. Le consensus des 52 analystes suivis par S&P Global ressort à **612,84 $** (+27 % de potentiel), avec une dispersion extrême de **365 $ à 1 250 $** — un écart de 1 à 3,4 qui traduit moins un désaccord de valorisation qu'un désaccord sur la nature même de l'actif. La question n'est pas « AMD va-t-elle croître ? » — la réponse est oui, massivement. La question est : **cette croissance est-elle déjà payée ?**`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Le carnet gigawatt est réel et contractualisé.** OpenAI 6 GW, Meta 6 GW, Anthropic 2 GW, plus Microsoft Azure et une grappe Oracle de 50 000 MI450. Ce ne sont pas des lettres d'intention : ce sont des accords définitifs, adossés à des warrants qui n'ont de valeur qu'en cas de livraison effective. **La visibilité de revenus d'AMD sur 2027-2030 n'a aucun précédent dans son histoire.**

**2. Le duopole nécessaire.** Aucun acheteur rationnel de compute à l'échelle du gigawatt ne peut se permettre un fournisseur unique. Le marché *a besoin* qu'AMD réussisse. C'est une position structurelle, pas conjoncturelle, et elle vaut une prime durable.

**3. La bascule technique est acquise.** Le MI455X (432 Go de HBM4, 19,6 To/s, ~40 pétaflops FP4) et le rack Helios (jusqu'à 3 exaflops IA) placent AMD dans le même ordre de grandeur que NVIDIA sur les charges d'inférence et de plus en plus sur l'entraînement. ROCm 7 a comblé l'essentiel de l'écart PyTorch. **Meta et OpenAI ne s'engageraient pas à 6 GW sur du silicium non compétitif.**

**4. Le CPU serveur est une rente sous-estimée.** Data Center CPU en hausse attendue de plus de 80 % au second semestre 2026 et de plus de 70 % en 2027, sur un TAM appelé à dépasser 120 Mds$ en 2030. C'est une activité à marges élevées, à cycles longs, et où le seul concurrent est un Intel affaibli. **Cette partie de la thèse est presque de la certitude arithmétique.**

**5. Le bilan est un actif.** 13,1 Mds$ de trésorerie et placements contre 3,2 Mds$ de dette. AMD finance sa montée en puissance sans levier, ce qui la distingue radicalement des acteurs IA endettés.

**6. Embedded se réveille.** +19 % au T2 2026, plus de 18 Mds$ de nouveaux design wins, année record en vue. Un amortisseur cyclique authentique, à marges élevées, que le marché ne valorise quasiment pas.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques susceptibles de nuire durablement

**1. La concentration client devient une dépendance existentielle.** Trois contreparties — OpenAI, Meta, Anthropic — porteront l'essentiel de la croissance Data Center 2027-2029. Deux d'entre elles sont des laboratoires d'IA dont **le financement dépend de levées de fonds continues, pas de flux de trésorerie d'exploitation**. Si le cycle de financement de l'IA se referme, ces engagements peuvent être réduits, décalés ou renégociés. AMD n'a aucun recours pratique contre un client qui ralentit.

**2. La contrainte d'approvisionnement plafonne la thèse.** AMD ne contrôle ni ses wafers (TSMC) ni sa mémoire (SK Hynix, Samsung, Micron), et les deux sont alloués prioritairement à NVIDIA, dont les volumes sont dix fois supérieurs. La direction a elle-même signalé une tension sur les CPU serveur au T2 2026. **Un contrat de 6 GW sans allocation garantie est une promesse, pas un revenu.**

**3. La dilution est massive et sous-estimée.** Jusqu'à 320 millions d'actions promises à OpenAI et Meta, soit environ 20 % du capital, auxquelles s'ajoute la rémunération en actions. Le BPA à venir doit être calculé sur une base d'actions significativement élargie. **Autrement dit : une partie de la croissance annoncée ne reviendra pas aux actionnaires actuels.**

### Analyse pré-mortem

*Nous sommes en août 2028. AMD cote 260 $, en baisse de près de 50 %. Que s'est-il passé ?*

Le déploiement du premier gigawatt OpenAI a glissé de deux trimestres — non pas pour des raisons de silicium, mais faute de raccordement électrique disponible, un risque que Lisa Su avait pourtant signalé dès 2025. Meta a réorienté une partie de son budget d'inférence vers ses propres ASIC conçus avec Broadcom, jugés moins coûteux par unité de calcul sur ses charges spécifiques. La croissance 2027 est ressortie à +40 % au lieu de +72 %. Le BPA 2028 atteint 11 $ au lieu de 17 $. Le multiple, lui, s'est comprimé de 45x à 24x — parce qu'une entreprise en croissance de 25 % ne se paie pas comme une entreprise en croissance de 70 %. **La baisse du titre est venue à 70 % de la compression du multiple, pas de la baisse des bénéfices.** C'est le mécanisme classique de dégonflement d'une valeur de croissance : les résultats déçoivent modérément, la valorisation s'effondre violemment.

### Les multiples actuels sont-ils trop élevés ?

À 514,39 $, AMD se paie **~131x les bénéfices des douze derniers mois**, ~70x les bénéfices 2026 estimés et **~20x son chiffre d'affaires**. NVIDIA, qui domine le marché avec 75 Mds$ de revenus Data Center trimestriels et 75 % de marge brute, se paie environ 40x. **AMD, le challenger, est valorisée trois fois plus cher que le leader en multiple de bénéfices.** Cela ne peut se justifier que par un différentiel de croissance appelé à durer plusieurs années — hypothèse défendable, mais qui n'offre aucune marge de sécurité.

### Point de vue à contre-courant

**Ce que le marché refuse de voir : AMD est en train de payer pour acheter ses revenus.**

Concéder jusqu'à 10 % du capital à OpenAI, puis 10 % à Meta, puis investir jusqu'à 5 Mds$ dans Anthropic, ce n'est pas un signe de pouvoir de négociation — c'est le prix d'entrée exigé pour être considéré. Le marché a interprété ces warrants comme des marques de confiance des clients ; on peut tout aussi bien les lire comme **la démonstration qu'AMD n'avait pas d'autre moyen de gagner ces contrats face à CUDA**.

L'autre angle mort concerne les flux : au trimestre le plus profitable de son histoire, AMD a généré 1,56 Md$ de flux de trésorerie disponible sur 11,5 Mds$ de chiffre d'affaires, avec un capex multiplié par près de trois et des dettes fournisseurs en hausse de 78 %. **La croissance des bénéfices comptables devance nettement la croissance de la trésorerie.** Sur un titre à 131x les bénéfices, cet écart mérite bien plus d'attention qu'il n'en reçoit.

Le contre-argument honnête au bear case : rien de tout cela n'invalide la trajectoire. AMD est bien devenue le second fournisseur mondial de calcul IA, avec des contrats réels et un bilan sain. **Le débat ne porte pas sur la qualité de l'entreprise — il porte uniquement sur le prix payé pour y accéder.**`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Goodwill et immobilisations incorporelles — RISQUE ÉLEVÉ
C'est le poste le plus lourd du bilan. L'acquisition de **Xilinx** (2022, ~49 Mds$ payés intégralement en actions) et celle de **Pensando** ont généré un ensemble goodwill + incorporels d'acquisition évalué à environ **50,4 Mds$ au moment de la comptabilisation**, auquel s'ajoute le goodwill de **ZT Systems** affecté à l'unité génératrice de trésorerie Data Center.

**À surveiller** :
- Le rapport goodwill + incorporels / capitaux propres, qui reste très élevé et **écrase mécaniquement le ROE affiché (~10 %)**
- L'amortissement récurrent des incorporels, principal contributeur de l'écart GAAP / non-GAAP (BPA 1,38 $ contre 1,66 $ au T2 2026)
- Les tests de dépréciation annuels : aucune dépréciation n'a été constatée depuis 2022. C'est cohérent avec la trajectoire, mais l'unité Embedded a connu deux exercices de contraction (-3 % en 2025) — les hypothèses de taux d'actualisation et de croissance long terme méritent lecture attentive.

### Comptabilisation des warrants clients — RISQUE ÉLEVÉ ET NOUVEAU
C'est le point comptable le plus délicat et le plus spécifique à AMD. Les warrants accordés à **OpenAI** et **Meta** (jusqu'à 160 millions d'actions chacun) relèvent de la norme relative à la rémunération de non-salariés : leur juste valeur constitue en principe **une réduction du chiffre d'affaires** ou une charge, comptabilisée au fur et à mesure de l'acquisition des droits.

**Questions ouvertes** :
- Quelle juste valeur a été retenue, et selon quel modèle d'évaluation ?
- Le rythme de reconnaissance suit-il les jalons de déploiement ou une estimation de probabilité ?
- **Quel est l'effet net sur le chiffre d'affaires et la marge brute publiés ?** Une part des revenus de ces contrats pourrait être neutralisée comptablement par la charge de warrant.
- Les seuils de cours conditionnant l'acquisition des droits créent une **volatilité comptable indexée sur le titre lui-même** — mécanique inhabituelle et peu commentée.

### Parties liées et circularité — RISQUE MODÉRÉ À ÉLEVÉ
AMD s'est engagée à investir **jusqu'à 5 Mds$ dans Anthropic**, qui est simultanément un **client de 2 GW**. Le 10-Q du T2 2026 mentionne par ailleurs des investissements comptabilisés par mise en équivalence considérés comme parties liées.

**Risque de circularité** : lorsqu'un fournisseur finance son client qui lui achète ensuite des produits, une partie du chiffre d'affaires peut, économiquement, provenir de la trésorerie du fournisseur lui-même. Ce schéma est répandu dans l'IA en 2026 ; **il n'en est pas moins un signal d'alerte classique**. À suivre trimestre après trimestre dans les annexes.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ, EN DÉGRADATION
Le signal le plus tangible du T2 2026 :
- Flux de trésorerie disponible de **1,558 Md$** pour 11,5 Mds$ de chiffre d'affaires — marge de FCF en **repli à 14 % contre 15 %** malgré une croissance de 50 %
- **Capex de 808 M$ contre 282 M$ un an plus tôt**, soit près du triple, et bien au-delà des ~298 M$ attendus. Pour une société fabless, il faut une explication précise : investissements en capacité de test, en systèmes de conception, en infrastructure interne ?
- **Dettes fournisseurs en hausse de 78 %**, de 2,99 Mds$ à 5,35 Mds$, alors que le chiffre d'affaires ne progresse que de 13 % en séquentiel. Un allongement des délais de règlement fournisseurs soutient mécaniquement la trésorerie d'exploitation.

**Conclusion sur ce point** : le résultat net comptable croît plus vite que la trésorerie réellement générée. Ce n'est pas frauduleux, c'est une caractéristique classique d'une phase de montée en puissance — mais sur un titre à plus de 130x les bénéfices, **la qualité des flux devrait faire l'objet d'une attention au moins égale à celle portée au chiffre d'affaires**.

### Stocks et créances — RISQUE MODÉRÉ
- Stocks à **8,47 Mds$** contre 7,92 Mds$ en fin d'exercice 2025
- Créances clients à **7,28 Mds$** contre 6,32 Mds$

La progression est cohérente avec l'activité, mais deux vigilances : le **précédent MI308** a montré qu'un changement réglementaire pouvait provoquer instantanément ~440 M$ de charges de stocks ; et la montée en puissance des **neoclouds** comme clients introduit un risque de crédit sur des contreparties récemment financées.

### Rémunération en actions — RISQUE MODÉRÉ
La SBC est structurellement élevée dans les semi-conducteurs et constitue, avec l'amortissement Xilinx, le second contributeur de l'écart GAAP / non-GAAP. **Combinée aux warrants clients, la dilution potentielle cumulée dépasse 20 % du capital.** Les rachats d'actions ne compensent que partiellement.

### Information sectorielle — RISQUE MODÉRÉ
AMD a modifié sa présentation sectorielle en 2025 en regroupant Client et Gaming, puis a communiqué à nouveau ces activités séparément au T2 2026. Les changements de périmètre sectoriel **compliquent les comparaisons historiques** et méritent une réconciliation systématique. La granularité reste par ailleurs faible : AMD ne publie pas la décomposition CPU / GPU au sein du Data Center, alors que c'est précisément l'information la plus déterminante pour la thèse.

### Contrats de location et engagements — RISQUE FAIBLE
Modèle fabless, droits d'utilisation limités. Les engagements les plus significatifs sont les **engagements d'achat de capacité auprès de TSMC et des fabricants de HBM**, à documenter dans les annexes — ils constituent une exposition ferme en cas de ralentissement de la demande.

### Comptabilisation des revenus — RISQUE FAIBLE À MODÉRÉ
Ventes de composants classiques, transfert de contrôle à la livraison. **Point nouveau** : avec Helios, AMD vend des systèmes rack complets, ce qui peut impliquer des obligations de prestation multiples (matériel, logiciel, support) et des choix d'allocation du prix de transaction. À surveiller à partir du T3 2026, premier trimestre de livraison.

---

### Verdict global
**Risque comptable : MODÉRÉ à ÉLEVÉ.** AMD est auditée par **Ernst & Young**, sa communication financière est de bonne qualité et aucune irrégularité n'est identifiée. Mais trois zones exigent une vigilance active : le **traitement comptable des warrants clients** (mécanisme inédit, effet net sur le chiffre d'affaires peu documenté), la **circularité potentielle** entre investissement et revenus chez Anthropic, et la **divergence croissante entre résultat comptable et flux de trésorerie**. Aucune de ces trois zones ne relève de la fraude ; toutes relèvent de la vérification systématique dans les 10-Q et 10-K.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Lisa Su et l'équipe de direction

### Stratégie et avantage concurrentiel

**1.** Vous avez concédé jusqu'à 160 millions d'actions à OpenAI, puis autant à Meta, soit environ 20 % du capital. **Auriez-vous emporté ces contrats sans les warrants ?** Si la réponse est non, que cela dit-il du pouvoir de négociation réel d'AMD face à l'écosystème CUDA ?

**2.** ROCm 7 a comblé une large part de l'écart sur PyTorch. **Quelle mesure objective utilisez-vous en interne** pour suivre la réduction de l'écart avec CUDA — nombre de développeurs actifs, part des charges de production portées sans effort d'ingénierie dédié, temps de portage moyen ?

**3.** Broadcom guide à 16 Mds$ de chiffre d'affaires IA trimestriel et vise 100 Mds$ en 2027 sur des ASIC personnalisés. **En quoi votre offre est-elle structurellement préférable** à un ASIC dédié pour une charge d'inférence stable et à grand volume, où le coût par jeton est le seul critère ?

### Approvisionnement et exécution

**4.** Vous avez signalé une tension sur l'approvisionnement en CPU serveur au T2 2026. **Quelle part de vos engagements gigawatt 2027 est aujourd'hui couverte par des allocations fermes de wafers chez TSMC et de HBM4 chez vos fournisseurs mémoire ?**

**5.** Vous avez indiqué que le rythme de déploiement dépend de l'accès à l'électricité autant que de la production de puces. **Combien de gigawatts, sur les 14 GW annoncés, disposent aujourd'hui d'un raccordement électrique confirmé ?**

**6.** Helios livre au T3 2026. **Quels sont vos indicateurs de qualité de mise en service** — taux de défaillance en production, délai moyen entre livraison et pleine charge — et comment se comparent-ils à ceux de votre principal concurrent sur ses racks de génération équivalente ?

### Résultats et qualité des flux

**7.** Le capex du T2 2026 s'établit à 808 M$ contre 282 M$ un an plus tôt et environ 298 M$ attendus. **Pouvez-vous en donner la décomposition**, et s'agit-il d'un nouveau niveau structurel pour une société fabless ?

**8.** Les dettes fournisseurs sont passées de 2,99 à 5,35 Mds$ en un trimestre, soit +78 %, pour une croissance séquentielle du chiffre d'affaires de 13 %. **S'agit-il d'un allongement délibéré des délais de paiement**, et quel serait le flux de trésorerie disponible du trimestre à conditions de paiement inchangées ?

**9.** La marge de flux de trésorerie disponible recule à 14 % alors que le chiffre d'affaires progresse de 50 %. **À partir de quel trimestre attendez-vous une conversion du résultat en trésorerie supérieure à 20 %** ?

**10.** Quel est l'**effet net des warrants OpenAI et Meta sur le chiffre d'affaires et la marge brute publiés** de l'exercice 2026, et quelle méthode d'évaluation retenez-vous ?

### Concentration et risques

**11.** OpenAI et Anthropic financent leurs achats de calcul par des levées de fonds, pas par des flux d'exploitation. **Quelle protection contractuelle avez-vous** — engagements fermes, acomptes, pénalités — si l'un d'eux réduit ou décale son programme de déploiement ?

**12.** Vous investissez jusqu'à 5 Mds$ dans Anthropic, qui est simultanément client. **Comment prévenez-vous le risque de circularité**, et cette structure sera-t-elle reproduite avec d'autres clients ?

**13.** Vous avez averti d'un possible affaiblissement du marché PC au second semestre 2026 dans un contexte de renchérissement de la mémoire. **Quel est l'impact sur la marge brute groupe** d'une hausse de 20 % du coût de la HBM et de la DRAM ?

### Vision et gouvernance

**14.** Vous visez un doublement du Data Center en 2027. **Quel est le jalon trimestriel précis** que les investisseurs doivent surveiller pour savoir, dès le T4 2026, si cette trajectoire est tenue ou compromise ?

**15.** Le récit d'AMD est indissociable de votre personne depuis 2014. **Quel est le plan de succession**, et quel est le risque que vous sous-estimez le plus aujourd'hui — celui que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. AMD n'a pas gagné ses contrats, elle les a achetés

C'est le point central et le plus soigneusement évité par les optimistes. Pour obtenir OpenAI, AMD a cédé un warrant de **160 millions d'actions**. Pour obtenir Meta, **160 millions d'actions supplémentaires**. Pour obtenir Anthropic, un **engagement d'investissement pouvant atteindre 5 Mds$** dans le client lui-même. Au total, **environ 20 % du capital et plusieurs milliards de dollars concédés pour remporter des commandes**.

Les bulls appellent cela « alignement d'intérêts ». Un sceptique appelle cela **un rabais commercial déguisé en instrument de capital**. Un fournisseur disposant d'un véritable avantage produit n'a pas besoin de céder un cinquième de son entreprise pour être retenu. Si le silicium AMD était incontestablement supérieur en rapport performance/prix, les acheteurs viendraient sans warrant. **Le prix payé mesure exactement la faiblesse du moat.**

### 2. Le moat logiciel appartient toujours à quelqu'un d'autre

ROCm 7 a réduit l'écart — personne ne le conteste. Mais réduire l'écart et posséder le standard sont deux choses différentes. **CUDA compte quinze ans d'accumulation** : bibliothèques, outils, générations de développeurs formés, code hérité. Chaque nouvelle architecture de modèle est d'abord optimisée pour NVIDIA, puis portée sur AMD — jamais l'inverse. AMD vit dans un régime de **rattrapage permanent**, où chaque année de retard doit être rachetée par de la co-ingénierie et des concessions commerciales. Ce n'est pas un fossé : c'est un tapis roulant.

### 3. La concentration des revenus est le vrai risque, et il est extrême

Il y a trois ans, AMD servait des milliers de clients dans le PC, le serveur, la console et l'industrie. Aujourd'hui, **la totalité de la thèse repose sur cinq contreparties** : OpenAI, Meta, Microsoft, Oracle, Anthropic.

Deux d'entre elles — OpenAI et Anthropic — sont des laboratoires d'IA dont les achats de calcul sont financés par des levées de fonds, non par des flux d'exploitation. Elles n'ont aucune contrainte de rentabilité tant que le capital afflue, et **aucune capacité à honorer leurs engagements si le capital cesse d'affluer**. Une seule des cinq qui décale son programme de six mois, et la trajectoire 2027 s'effondre. Il n'existe pas de longue traîne pour compenser.

### 4. Le concurrent que les optimistes sous-estiment : ce n'est pas NVIDIA, c'est Broadcom

Toute la discussion oppose AMD à NVIDIA. C'est le mauvais duel. **Broadcom conçoit les ASIC personnalisés des hyperscalers** — 10,8 Mds$ de chiffre d'affaires IA au dernier trimestre publié, guidance de 16 Mds$ au suivant, cible de 100 Mds$ en 2027. Ces puces attaquent exactement le budget que vise AMD, avec un avantage décisif : sur une charge d'inférence stable et massive, **un ASIC dédié bat presque toujours un GPU généraliste sur le coût par jeton**.

Et Meta, qui vient de s'engager sur 6 GW auprès d'AMD, est simultanément l'un des plus gros commanditaires de silicium personnalisé au monde. **Rien n'empêche Meta de basculer progressivement son inférence vers ses propres ASIC** en ne conservant AMD que comme levier de négociation. Le warrant l'y encourage même : Meta gagne sur la hausse du titre AMD sans être tenue d'acheter au-delà des jalons.

### 5. Les pires décisions d'allocation du capital

- **Les warrants** : jusqu'à 20 % du capital cédés, sur une base d'actions qui servira à calculer le BPA que les investisseurs paient aujourd'hui 131 fois
- **L'investissement chez un client** : jusqu'à 5 Mds$ dans Anthropic — un fournisseur qui finance son acheteur crée une **circularité économique** dont l'histoire des cycles technologiques a montré la fin
- **Le goodwill Xilinx** : environ 50 Mds$ de goodwill et incorporels d'acquisition, jamais dépréciés, sur un segment Embedded qui a reculé de 3 % en 2025. L'acquisition était stratégiquement judicieuse ; elle **écrase durablement le ROE affiché (~10 %)**.

### 6. Comptabilité et qualité des flux — les signaux discrets

Au trimestre le plus profitable de son histoire, AMD affiche :
- un **capex multiplié par près de trois** (808 M$ contre 282 M$) pour une entreprise sans usine
- une **marge de flux de trésorerie disponible en recul** (14 % contre 15 %) alors que le chiffre d'affaires bondit de 50 %
- des **dettes fournisseurs en hausse de 78 %** contre +13 % de chiffre d'affaires séquentiel

Aucun de ces éléments n'est irrégulier. Ensemble, ils décrivent une entreprise dont **les bénéfices comptables progressent plus vite que la trésorerie encaissée**. Sur un multiple de 131x, cet écart devrait être le premier sujet de chaque conférence — il n'est le sujet d'aucune.

### 7. Les hypothèses nécessaires pour justifier le cours actuel

À 514,39 $, il faut que **toutes** les conditions suivantes se vérifient simultanément :
1. Le chiffre d'affaires passe de 50,8 Mds$ (2026E) à 87,5 Mds$ (2027E), soit +72 %
2. TSMC et les fabricants de HBM4 allouent la capacité nécessaire, au détriment de NVIDIA
3. Les raccordements électriques suivent le calendrier de déploiement
4. Aucun des cinq grands clients ne réduit ni ne décale son engagement
5. La marge brute se maintient au-dessus de 55 % malgré le renchérissement de la mémoire
6. Helios fonctionne en production dès la première génération, sans incident majeur
7. La dilution reste absorbable par la croissance du bénéfice

**Sept conditions. Aucune n'est absurde. La probabilité qu'elles se réalisent toutes est faible.**

### Que se passe-t-il si la croissance déçoit de 20 à 30 % ?

Croissance 2027 ramenée de +72 % à +45 %, soit 74 Mds$ au lieu de 87,5 Mds$. Le BPA 2028 tombe vers 11-12 $ au lieu de 16-18 $. **Mais l'essentiel du dommage ne vient pas de là.** Une entreprise qui croît de 45 % ne se paie pas 45x ses bénéfices ; elle se paie 25 à 30x. En combinant BPA à 11,50 $ et multiple à 27x, on obtient un cours de **~310 $, soit -40 % depuis les niveaux actuels** — pour une simple déception de 25 % sur la croissance, sans catastrophe ni erreur de gestion. **C'est l'asymétrie centrale du dossier.**

### Le scénario unique de dommage permanent

**Un ralentissement du capex IA au moment précis où le carnet gigawatt devait se convertir en revenus.** Si, entre 2027 et 2028, les hyperscalers et laboratoires révisent leurs plans de déploiement — parce que la monétisation de l'IA tarde, parce que le financement se resserre, ou parce que les ASIC personnalisés absorbent la charge d'inférence —, AMD se retrouve avec une base de coûts dimensionnée pour 87 Mds$ de chiffre d'affaires, des engagements d'achat de capacité fermes, une base d'actions élargie de 20 %, et un carnet contractuel devenu non exécutoire dans les faits. **Probabilité estimée : 25 à 35 %** sur un horizon de trois ans, au vu de l'historique des cycles d'investissement en semi-conducteurs.

### Conclusion short

AMD est une entreprise remarquable, remarquablement dirigée, qui a accompli l'un des redressements industriels majeurs de la décennie. **Rien de ce qui précède ne le conteste.**

Mais à 514,39 $, on n'achète pas AMD : **on achète l'exécution parfaite, simultanée et sans retard, de sept hypothèses interdépendantes, sur un titre qui se paie trois fois le multiple de bénéfices du leader incontesté de son marché.** NVIDIA offre une exposition à la même vague, avec dix fois les revenus IA, 75 % de marge brute et 40x les bénéfices. La question n'est pas de savoir si AMD réussira. C'est de savoir **ce qu'il reste à gagner si elle réussit — et ce qu'on perd si elle réussit un peu moins bien que prévu.**`,
  },
];

export default { ...meta, modules };
