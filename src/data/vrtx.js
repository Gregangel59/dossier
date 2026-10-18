// ============================================================
//  DOSSIER : Vertex Pharmaceuticals Incorporated (VRTX)
//  Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "vrtx",                     // identifiant d'URL : /dossier/vrtx
  ticker: "VRTX",
  name: "Vertex Pharmaceuticals Incorporated",
  exchange: "Nasdaq",
  sector: "Biotechnologie — maladies graves et rares",
  initials: "VRTX",                 // affiché dans la pastille
  tagline: "Monopole de fait sur la mucoviscidose, en train de bâtir quatre autres piliers : hématologie, douleur, néphrologie et endocrinologie.",
  riskScore: 62,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "vrtx.html",
  updated: "2026-10-19",            // date des données (19 octobre 2026)
  published: "2026-10-19",          // date exacte de publication
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Modèle économique

Vertex Pharmaceuticals est une **biotech de Boston fondée en 1989** qui découvre, développe et commercialise elle-même des médicaments contre des **maladies graves dont on comprend la cause biologique**. Son modèle tient en une phrase : viser des maladies où l'on connaît le gène ou la protéine fautive, concevoir une molécule qui corrige ce défaut, puis la vendre à un prix élevé, justifié par un bénéfice clinique transformateur et une population de patients identifiable.

Ce modèle a produit une **machine à cash exceptionnelle** : 12,0 Md$ de chiffre d'affaires en 2025 (+9 %), 12,6 Md$ sur les 12 derniers mois, une marge brute d'environ 86 % et une marge opérationnelle ajustée supérieure à 40 %. Environ **96 % des ventes proviennent encore de la mucoviscidose** (fibrose kystique), où Vertex détient un quasi-monopole.

La stratégie actuelle : utiliser cette rente pour bâtir **cinq piliers** de croissance — mucoviscidose, hématologie (drépanocytose et bêta-thalassémie), douleur, néphrologie et, depuis le rachat de Crinetics (septembre 2026), endocrinologie des maladies rares.

## Principaux produits et services

**Mucoviscidose (modulateurs CFTR, comprimés oraux)** — 3,21 Md$ au T2 2026 :
- **TRIKAFTA / KAFTRIO** : trithérapie de référence depuis 2019 (2,50 Md$ au T2 2026, en légère baisse car les patients basculent vers ALYFTREK)
- **ALYFTREK** : trithérapie en une prise par jour, lancée en 2025 ; 574 M$ au T2 2026, déjà remboursée dans 25 pays
- **KALYDECO, ORKAMBI, SYMDEKO** : anciennes générations (137 M$ au T2)

Vertex estime que ses modulateurs peuvent traiter **environ 95 % des patients** atteints de mucoviscidose dans ses marchés clés, dès l'âge d'un mois.

**Hématologie** — **CASGEVY** : première thérapie génique par édition CRISPR/Cas9 au monde (avec CRISPR Therapeutics), traitement unique de la drépanocytose et de la bêta-thalassémie dépendante des transfusions. 76 M$ au T2 2026 (+151 %), autorisée dans 39 pays, désormais dès l'âge de 2 ans aux États-Unis.

**Douleur** — **JOURNAVX (suzetrigine)** : premier antalgique non opioïde d'une nouvelle classe (inhibiteur sélectif du canal NaV1.8) pour la douleur aiguë modérée à sévère. 50 M$ au T2 2026, soit plus du quadruple d'un an plus tôt ; environ 900 000 ordonnances au premier semestre.

**Endocrinologie (Crinetics, depuis le 1er septembre 2026)** — **PALSONIFY (paltusotine)** : premier traitement oral en une prise par jour de l'acromégalie ; **atumelnant** en phase 3 dans l'hyperplasie congénitale des surrénales.

**Pipeline** : povetacicept (néphropathie à IgA, décision FDA le 30 novembre 2026), inaxaplin (maladie rénale liée à APOL1), zimislecel (cellules d'îlots pour le diabète de type 1), correcteurs CFTR de 3e génération, VX-407 (polykystose rénale), VX-670 (dystrophie myotonique).

## Clients, fournisseurs, concurrents

**Clients directs** : grossistes et pharmacies spécialisées américaines (McKesson, Cencora, Cardinal Health, Accredo, CVS Specialty), qui revendent aux patients ; en Europe, les systèmes de santé nationaux. **Payeurs finaux** : assureurs privés et gestionnaires de prestations pharmaceutiques (CVS Caremark, Express Scripts, Optum Rx), Medicaid et Medicare, caisses publiques européennes. Pour CASGEVY, des **centres de traitement agréés** (hôpitaux spécialisés en greffe) ; pour JOURNAVX, les hôpitaux et centres chirurgicaux.

**Fournisseurs** : fabricants sous contrat pour les principes actifs et les comprimés, Lonza et d'autres prestataires pour la fabrication cellulaire, CRISPR Therapeutics (partenaire de CASGEVY, partage des profits 60/40 en faveur de Vertex), la Cystic Fibrosis Foundation (redevances historiques sur les modulateurs).

**Concurrents** : en mucoviscidose, quasi aucun produit commercialisé ; des challengers en développement (Sionna Therapeutics, dont le candidat SION-719 a échoué en août 2026). En néphropathie à IgA : Otsuka (VOYXACT), Vera Therapeutics (TRUTAKNA, approuvé le 7 juillet 2026), Novartis, Travere. En douleur : les opioïdes génériques et AINS bon marché. En drépanocytose : Lyfgenia (ex-bluebird bio).

## Modalités contractuelles et de paiement

- **Prix catalogue élevés** : environ 370 000 $ par an pour une trithérapie de mucoviscidose aux États-Unis, 2,2 M$ pour une cure de CASGEVY, autour de 15 $ le comprimé de JOURNAVX.
- **Remises obligatoires et négociées** (Medicaid, 340B, assureurs) : Vertex comptabilise un chiffre d'affaires net après provisions de remises, ce qui exige des estimations.
- **Accords d'accès en Europe** : contrats pluriannuels avec les payeurs (NHS England, Allemagne, Italie, Espagne), parfois avec plafonds de volume ou clauses de résultats pour CASGEVY.
- **Délais de paiement** : de l'ordre de 30 à 60 jours pour les grossistes américains, plus longs pour certains payeurs publics européens. Les créances clients atteignaient 2,13 Md$ au 30 juin 2026, soit environ deux mois de ventes.

> **À retenir** : Vertex vend des traitements chroniques quasi irremplaçables à une population de patients fidèle. C'est l'un des modèles les plus rentables de la pharmacie mondiale, mais il repose encore presque entièrement sur une seule maladie.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Position de Vertex dans la chaîne de valeur

Vertex se situe au **cœur de la chaîne** : il conçoit les molécules, détient les brevets, pilote les essais cliniques et la commercialisation, mais **sous-traite une large part de la fabrication** et passe par les grossistes pour la distribution. C'est une entreprise de propriété intellectuelle et de science plus qu'un industriel.

### Amont — Recherche et intrants scientifiques

**Partenaires de découverte et de technologie** :
- **CRISPR Therapeutics** : codéveloppeur de CASGEVY (Vertex mène la commercialisation et touche 60 % des profits)
- **Moderna** : collaboration sur l'ARN messager en mucoviscidose (VX-522)
- **Alpine Immune Sciences** (rachetée 4,9 Md$ en 2024) : origine du povetacicept
- **Semma Therapeutics** (2019) et **ViaCyte** (2022) : origine des programmes de cellules d'îlots (zimislecel)
- **Crinetics Pharmaceuticals** (rachetée environ 10 Md$, close le 1er septembre 2026) : PALSONIFY et atumelnant
- **Cystic Fibrosis Foundation** : a financé les débuts du programme mucoviscidose en échange de redevances

**Fabrication sous contrat** : principes actifs et comprimés produits par des sous-traitants pharmaceutiques ; pour les thérapies cellulaires, des sites spécialisés (dont Lonza à Portsmouth, New Hampshire). Vertex indique que l'essentiel de sa production de médicaments de mucoviscidose et de sa propriété intellectuelle est concentré aux États-Unis, ce qui limite l'exposition aux droits de douane.

---

### Vertex — Développement, réglementation, marque

- Recherche interne (Boston, San Diego, Oxford), essais cliniques mondiaux
- Dossiers réglementaires (FDA, EMA, MHRA, Arabie saoudite pour une partie des premières autorisations)
- Équipes commerciales spécialisées : mucoviscidose, hématologie, douleur hospitalière, néphrologie, endocrinologie
- Programmes d'accès et d'accompagnement des patients

---

### Aval — Distribution et payeurs

**Distribution aux États-Unis** : McKesson, Cencora (ex-AmerisourceBergen), Cardinal Health, et pharmacies spécialisées (Accredo, CVS Specialty, Optum Specialty). Une poignée de ces acteurs concentre l'essentiel des ventes américaines.

**Payeurs** : CVS Caremark, Express Scripts, Optum Rx, Medicaid (23 États remboursent JOURNAVX), Medicare Part D ; en Europe, NHS England, caisses allemandes (GKV), agences italienne et espagnole. CASGEVY est aussi inclus dans le modèle d'accès aux thérapies géniques des autorités américaines (CMS) pour la drépanocytose.

**Lieux de soins** : centres de mucoviscidose, centres de traitement agréés pour CASGEVY, hôpitaux et centres de chirurgie ambulatoire pour JOURNAVX (achats via des centrales comme Vizient et Premier), néphrologues pour le povetacicept.

**Patients** : environ 95 % des patients atteints de mucoviscidose dans les marchés clés sont éligibles à un modulateur Vertex ; environ 5 500 enfants supplémentaires éligibles à CASGEVY après l'extension dès 2 ans ; 260 millions d'Américains ont un accès remboursé à JOURNAVX.

---

### Cartographie simplifiée du flux

| Étape | Acteurs | Rôle de Vertex |
|---|---|---|
| Science et licences | CRISPR Therapeutics, Moderna, Alpine, Crinetics, Semma, ViaCyte | Achète ou co-développe les briques technologiques |
| Fabrication | Sous-traitants pharmaceutiques, Lonza (cellules) | Pilote la qualité, garde les procédés |
| Réglementation | FDA, EMA, MHRA, SFDA | Dépose et défend les dossiers |
| Distribution | McKesson, Cencora, Cardinal Health, pharmacies spécialisées | Vend en gros, gère les remises |
| Paiement | Assureurs, PBM, Medicaid, systèmes publics européens | Négocie l'accès et le prix net |
| Soin | Centres de mucoviscidose, centres de greffe, hôpitaux | Forme les équipes, accompagne les patients |

**Le point clé** : la valeur se crée en amont, dans la science et les brevets ; la marge se défend en aval, dans la négociation avec les payeurs. Vertex contrôle les deux bouts et laisse le milieu (fabrication, logistique) à des prestataires.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Vertex ne publie **qu'un seul segment comptable** (« développement et commercialisation de médicaments »). Il n'existe donc **ni EBITDA ni résultat net par segment** publiés. La lecture se fait par produit et par zone géographique ; la rentabilité ne peut être estimée qu'au niveau du groupe.

### Par produit (en M$)

| Produit | T2 2025 | T4 2025 | T1 2026 | T2 2026 | Tendance |
|---|---|---|---|---|---|
| TRIKAFTA / KAFTRIO | 2 551 | 2 573 | 2 355 | 2 497 | Recul lent, bascule vers ALYFTREK |
| ALYFTREK | 157 | 380 | 424 | 574 | ×3,7 en un an |
| Autres mucoviscidose | 194 | 156 | 136 | 137 | Anciennes générations en déclin |
| **Total mucoviscidose** | **2 902** | **3 109** | **2 915** | **3 208** | **+11 % a/a** |
| CASGEVY | 30 | 54 | 43 | 76 | +151 % a/a |
| JOURNAVX | 12 | 27 | 29 | 50 | ×4 a/a |
| **Total** | **2 965** | **3 190** | **2 987** | **3 334** | **+12 % a/a** |

**Lecture** : la mucoviscidose pèse encore **96 %** des ventes. ALYFTREK cannibalise volontairement TRIKAFTA : la molécule est plus efficace, se prend une fois par jour et porte une **redevance plus faible** envers la Cystic Fibrosis Foundation, ce qui améliore la marge. Le nouveau relais (CASGEVY + JOURNAVX) représente 126 M$ par trimestre, en forte accélération, et la direction vise **au moins 500 M$ de ventes hors mucoviscidose en 2026**.

### Par zone géographique

| Zone | 2025 | Croissance 2025 | T2 2026 | Croissance T2 |
|---|---|---|---|---|
| États-Unis | 7,55 Md$ | +13 % | 2,06 Md$ | +11 % |
| Hors États-Unis | 4,45 Md$ | +3 % | 1,28 Md$ | +14 % |

Les États-Unis représentent environ **62 %** des ventes. La croissance américaine vient de la demande en mucoviscidose, des hausses de prix nets et des nouveaux lancements. Hors États-Unis, 2025 a été pénalisé par la pression sur les prix et des copies illégales dans certains pays ; 2026 bénéficie de l'adoption d'ALYFTREK en Europe et d'un effet de change favorable (environ +1,5 point sur l'année).

---

### Rentabilité au niveau du groupe

| Indicateur | 2024 | 2025 | 12 derniers mois |
|---|---|---|---|
| Chiffre d'affaires | 11,0 Md$ | 12,0 Md$ | 12,6 Md$ |
| Marge brute ajustée | ~86 % | ~86 % | ~86 % |
| EBITDA | négatif (charge Alpine) | ~5,0 Md$ | 5,1 Md$ |
| Résultat net publié | −0,5 Md$ | ~3,9 Md$ | 4,4 Md$ |

**Pourquoi 2024 est négatif** : le rachat d'Alpine (4,9 Md$) a été traité comme une acquisition d'actifs et la recherche acquise passée en charge immédiatement (environ 4,4 Md$ au T2 2024). C'est une perte comptable ponctuelle, sans sortie de trésorerie récurrente.

**Ce qui bouge en 2026** : la marge brute recule légèrement (85,6 % au T2 2026 contre 86,4 % un an plus tôt) à cause du mix (CASGEVY et JOURNAVX sont moins margés), compensé en partie par la redevance plus faible d'ALYFTREK. Les dépenses commerciales augmentent fortement (+45 % de frais commerciaux et administratifs ajustés au T2) pour préparer les lancements en néphrologie. Crinetics ajoutera des coûts sans gros revenus avant plusieurs années : la direction ne prévoit un effet positif sur le résultat opérationnel ajusté qu'**en 2029**.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Les fossés économiques (moats)

### 1. Monopole scientifique en mucoviscidose — moat très large
Vertex a passé plus de 20 ans à décrypter la protéine CFTR. Ses modulateurs traitent la cause de la maladie, pas seulement les symptômes, et ont transformé l'espérance de vie des patients. **Aucun concurrent n'a réussi à commercialiser une alternative**. L'échec de Sionna Therapeutics en août 2026 (gain de seulement 1 mmol/L de chlorure sudoral contre environ 10 attendus, titre Sionna en chute de 90 %) a renforcé cette conviction : BMO a parlé d'un fossé « profond et large ». Vertex se fait concurrence à lui-même, en remplaçant TRIKAFTA par ALYFTREK.

### 2. Propriété intellectuelle et renouvellement en série
Brevets jusqu'à la fin des années 2030 sur TRIKAFTA et au-delà pour ALYFTREK ; une 3e génération de correcteurs (VX-828, VX-581, VX-272) est déjà en essai. Cette stratégie d'**innovation en série** repousse la falaise des brevets à chaque génération.

### 3. Coûts de changement élevés pour les patients
Un patient stabilisé ne change pas de traitement sans raison médicale forte. Les modulateurs se prennent à vie : c'est une **rente récurrente** comparable à un abonnement.

### 4. Premier entrant sur des classes entièrement nouvelles
- **CASGEVY** : premier médicament issu de CRISPR approuvé au monde
- **JOURNAVX** : première nouvelle classe d'antalgiques depuis plus de 20 ans
- **Inaxaplin** : potentiellement premier traitement de la cause d'une maladie rénale génétique (APOL1)
- **Zimislecel** : potentielle guérison fonctionnelle du diabète de type 1 sévère

Être premier donne un avantage de relations avec les centres experts, les payeurs et les associations de patients.

### 5. Puissance financière
13,6 Md$ de trésorerie et placements au 30 juin 2026 et environ 4 Md$ de cash disponible généré par an permettent d'acheter des actifs (Alpine, Crinetics) sans dépendre des marchés.

## Positionnement face à la concurrence

| Critère | Vertex | Big biotechs (Amgen, Gilead, Regeneron) | Biotechs spécialisées (argenx, Alnylam) |
|---|---|---|---|
| Marge opérationnelle | ~38 % publiée, ~43 % ajustée | 27 à 39 % | 21 à 30 % |
| Concentration produit | Très forte (mucoviscidose) | Diversifiée | Forte |
| Dette | Quasi nulle | Élevée pour Amgen et Gilead | Faible |
| Image auprès des patients | Très forte (associations) | Bonne | Bonne |
| Pipeline en phase avancée | Large (5 piliers) | Large | Ciblé |

## Pouvoir de négociation

- **Vis-à-vis des payeurs** : **élevé en mucoviscidose** (absence d'alternative, forte mobilisation des associations), **plus faible dans les nouveaux marchés** : JOURNAVX doit convaincre face à des génériques à quelques centimes, CASGEVY affronte des budgets hospitaliers et des procédures lourdes.
- **Vis-à-vis des fournisseurs** : **élevé** — Vertex contrôle ses procédés et peut multiplier les sous-traitants ; seul CRISPR Therapeutics partage une partie de la valeur sur CASGEVY.
- **Vis-à-vis des cibles d'acquisition** : **élevé** grâce à sa trésorerie, mais Vertex a payé une prime d'environ 100 % pour Crinetics : la discipline de prix sera jugée sur la durée.
- **Vis-à-vis des régulateurs** : bonne crédibilité (désignations Breakthrough, examens prioritaires, approbation pédiatrique de CASGEVY obtenue en 53 jours).`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Tableau comparatif — Grandes biotechs mondiales (cours du 16 octobre 2026)

| Société | Code Bloomberg | Cap. (Md$) | VE/CA | VE/EBIT | PER publié | PER futur | Rdt div. | ROE moyen 5 ans (est.) |
|---|---|---|---|---|---|---|---|---|
| **Vertex** | **VRTX US** | **126,7** | **9,1x** | **23,4x** | **29,1x** | **~26x** | **0 %** | **~19 %** |
| Amgen | AMGN US | 233,8 | 7,3x | 21,8x | 26,9x | 18,4x | 2,3 % | >80 % (fonds propres réduits) |
| Gilead Sciences | GILD US | 193,7 | 7,1x | 18,2x | n.s. (perte) | 17,0x | 2,1 % | ~20 % |
| Regeneron | REGN US | 79,0 | 4,1x | 15,3x | 19,6x | 12,3x | 0,5 % | ~25 % |
| argenx | ARGX US | 51,2 | 8,7x | 28,8x | 29,9x | 28,6x | 0 % | n.s. (pertes avant 2024) |
| Biogen | BIIB US | 34,4 | 4,1x | 16,5x | 41,3x | 17,8x | 0 % | ~14 % |
| Alnylam | ALNY US | 31,0 | 6,4x | 30,7x | 41,3x | 29,9x | 0 % | n.s. (pertes avant 2025) |

*Sources : S&P Global Market Intelligence via StockAnalysis, cours du 16 octobre 2026 ; PER futur de Vertex sur 12 mois glissants (consensus). ROE moyen 5 ans : estimations 221 Bourse à partir des résultats annuels publiés 2021-2025, ordre de grandeur à affiner sur données Bloomberg.*

---

### Lecture comparative

**Médianes des pairs** : PER futur ~18x, VE/CA ~6,7x, ROIC ~27 %. Vertex se paie donc avec une **prime d'environ 45 %** sur le PER futur et de 35 % sur le VE/CA, pour un ROIC (28,8 %) à peine supérieur à la médiane.

**Ce qui justifie la prime** :
- La **qualité et la durée** du flux mucoviscidose (monopole, brevets longs, patients à vie)
- Un **bilan sans dette** (trésorerie nette de 11,7 Md$ au 30 juin, avant le paiement de Crinetics)
- Une croissance annuelle d'environ 10 % du chiffre d'affaires avec des relais visibles

**Ce qui la rend fragile** :
- La croissance du BPA est plus lente que celle du chiffre d'affaires en 2026-2027 (investissements commerciaux, coûts de Crinetics)
- Regeneron et Gilead affichent des rentabilités comparables pour des multiples bien plus bas
- argenx et Alnylam, qui se paient aussi autour de 29-30x, ont une croissance de leurs revenus de l'ordre de 30 %, trois fois supérieure à celle de Vertex

### Les concurrents directs, par maladie

| Domaine | Concurrents | Menace |
|---|---|---|
| Mucoviscidose | Sionna Therapeutics (avec actifs rachetés à AbbVie), thérapies géniques inhalées (4D Molecular) | Faible à court terme |
| Néphropathie à IgA | Vera (TRUTAKNA, approuvé juillet 2026), Otsuka (VOYXACT), Novartis (Fabhalta, Vanrafia), Travere (Filspari) | **Forte** : Vertex arrive troisième sur la classe APRIL/BAFF |
| Drépanocytose | Lyfgenia (ex-bluebird bio), traitements symptomatiques | Moyenne |
| Douleur aiguë | Opioïdes et anti-inflammatoires génériques, autres inhibiteurs NaV1.8 en développement | Moyenne (prix) |
| Acromégalie | Analogues injectables de la somatostatine (Novartis, Ipsen) | Faible (avantage de la forme orale) |

### Le ratio qui compte
Pour Vertex, le juge de paix n'est pas le PER mais le **rythme de diversification** : chaque point de part des ventes hors mucoviscidose réduit le risque de concentration et justifie le maintien de la prime. À 4 % aujourd'hui, l'objectif implicite des analystes est de dépasser 15 à 20 % d'ici 2030.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Résultats du T2 2026 (publiés le 3 août 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Variation | Consensus | Écart |
|---|---|---|---|---|---|
| Chiffre d'affaires | 3,33 Md$ | 2,96 Md$ | +12 % | 3,21 Md$ | **+3,7 %** |
| BPA ajusté (non-GAAP) | 4,73 $ | 4,52 $ | +4,6 % | 4,63 $ | **+2,2 %** |
| BPA publié (GAAP) | 4,31 $ | 3,99 $ | +8 % | — | — |
| Résultat opérationnel ajusté | 1,42 Md$ | 1,33 Md$ | +7 % | — | — |
| Marge opérationnelle ajustée | 42,7 % | 44,7 % | −2 pts | — | — |

**Verdict** : **dépassement net sur le chiffre d'affaires, plus modeste sur le bénéfice**. Vertex a battu le consensus de BPA pour le quatrième trimestre consécutif (T3 2025 : +10 % ; T4 2025 : +4 % ; T1 2026 : +7 % ; T2 2026 : +2 %).

---

### Facteurs clés par produit

- **Mucoviscidose : +11 %** à 3,21 Md$ — demande soutenue, hausses de prix nets aux États-Unis, bascule vers ALYFTREK (574 M$, ×3,7) remboursé dans 25 pays
- **CASGEVY : 76 M$** (+78 % sur un trimestre, +151 % sur un an) — les perfusions s'accélèrent enfin après une montée en charge lente en 2024-2025
- **JOURNAVX : 50 M$** (+71 % sur un trimestre) — environ 535 000 ordonnances au T2 ; accords avec trois des quatre grands gestionnaires Medicare Part D
- **Accélération notable** : la croissance repasse à +12 % après un T1 à +8 %

---

### Évolution des marges

- **Marge brute ajustée : 85,6 %** contre 86,4 % — léger repli lié au mix produit, partiellement compensé par la redevance plus faible d'ALYFTREK
- **Dépenses ajustées (R&D + commerciales) : 1,43 Md$, +15 %** — les frais commerciaux bondissent (520 M$ contre 359 M$) avec le lancement de JOURNAVX et la préparation du povetacicept
- **Taux d'impôt ajusté : 21,1 %** contre 19,4 % — un point qui pèse sur le BPA

---

### Prévisions et perspectives

- **Chiffre d'affaires 2026 relevé à 13,1-13,2 Md$** (contre 12,95-13,1 Md$), soit +9 à +10 %, dont au moins 500 M$ hors mucoviscidose
- Dépenses ajustées 2026 inchangées : 5,65 à 5,75 Md$ ; taux d'impôt 19,5 à 20,5 %
- **Hors Crinetics** : les prévisions seront mises à jour avec les résultats du T3, le 2 novembre 2026
- **Ton** : confiant et opérationnel — « année d'exécution » ; aucune inflexion négative

---

### Signaux du bilan

- **Trésorerie et placements : 13,6 Md$** (contre 12,3 Md$ fin 2025), après rachats d'actions
- **Pas de dette financière significative** au 30 juin (1,98 Md$ de dettes de location) ; un **prêt à terme de 4,5 Md$** a été signé le 30 juillet pour financer Crinetics
- **Stocks : 1,77 Md$** (+5 % en six mois) et **créances : 2,13 Md$** (+4 %) — progressions inférieures à celle des ventes, rien d'anormal
- **Flux de trésorerie disponible** : 1,01 Md$ au T2 et 3,8 Md$ sur 12 mois (marge de 30 %) ; le T4 2025 avait été faible (0,35 Md$), à surveiller

---

### Réaction du marché

La publication elle-même a peu fait bouger le titre ; c'est l'**échec de Sionna, le 10 août (+5,6 %)**, qui a déclenché la hausse vers le record historique de 558 $ le 3 septembre. Le marché avait déjà intégré une croissance d'environ 10 % ; il paie surtout la **disparition d'un risque concurrentiel** en mucoviscidose. Depuis, le titre a rendu environ 10 % : BofA anticipe des ventes de TRIKAFTA au T3 inférieures de 5 % au consensus (2,42 Md$ contre 2,54 Md$).

**Élément inhabituel** : le consensus de BPA du T3 est brouillé par la comptabilisation de Crinetics (certaines estimations intègrent des charges ponctuelles, d'autres non) ; la lecture du trimestre se fera sur le chiffre d'affaires et la nouvelle prévision annuelle.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Analyse du discours du management

### Évolution du ton sur deux ans

**2024 — « Année d'investissement »** : ton patient. Lancement de CASGEVY plus lent que prévu (procédure lourde, centres à agréer), rachat d'Alpine présenté comme la naissance d'un pilier rénal. Peu de chiffres de court terme, beaucoup de pédagogie scientifique.

**Début 2025 — « Année des lancements »** : enthousiasme sur l'approbation de JOURNAVX (janvier) et d'ALYFTREK. Mais deux trimestres difficiles : au T1 2025, ventes en dessous des attentes et pause de VX-522 ; au T2 2025, **échec de VX-993** dans la douleur aiguë et abandon de l'extension large de JOURNAVX à la douleur neuropathique (titre −20,6 % le 5 août 2025). Le management a assumé l'échec sans le maquiller.

**Fin 2025 — Retour de la confiance** : dépassement au T3, effet ALYFTREK visible, lancement du dossier povetacicept. Discours centré sur la **discipline** : « nous n'avancerons que les molécules supérieures à nos propres produits ».

**2026 — « Année d'exécution »** : ton le plus assuré depuis 2023. Q1 : « Vertex est bien parti en 2026 ». Q2 : « excellents résultats », relèvement des prévisions, annonce de Crinetics comme « cinquième pilier ». Les nouveaux produits ont représenté plus de 25 % de la croissance au T1.

---

### Priorités répétées de la direction

**1. Défendre et étendre la mucoviscidose** — ALYFTREK chez les 2-5 ans (65 % des enfants atteignent un niveau de chlorure de porteur sain), arrêt possible des enzymes pancréatiques chez certains enfants (données d'octobre 2026), correcteurs de 3e génération pour viser des patients « porteurs sains ».

**2. Faire décoller les lancements** — objectif d'au moins 500 M$ hors mucoviscidose en 2026 ; couverture remboursée de JOURNAVX pour 260 millions d'Américains ; CASGEVY dès 2 ans.

**3. Construire la néphrologie** — povetacicept (décision FDA le 30 novembre), inaxaplin (données intermédiaires début 2027), VX-407 ; 74 accords payeurs préparés avant même l'approbation.

**4. Diversifier par acquisitions ciblées** — Crinetics : « exactement le type d'opération qui nous correspond » (biologie causale, marchés spécialisés, potentiel de meilleur de sa classe).

**5. Marges « de premier plan dans l'industrie »** — engagement répété, même avec Crinetics, jugé dilutif jusqu'en 2029.

---

### Analyse du sentiment

| Période | Sentiment | Marqueurs |
|---|---|---|
| T1-T2 2025 | Prudent | Échecs douleur, pause VX-522, prix hors États-Unis |
| T3-T4 2025 | Constructif | Dépassements, ALYFTREK, dossier povetacicept |
| T1 2026 | Confiant | Résultats positifs RAINIER, prévisions confirmées |
| T2 2026 | Très confiant | Prévision relevée, Crinetics, calendrier dense |

- **Transparence** : bonne sur la science, plus discrète sur la **trajectoire de marge 2027-2028** avec Crinetics et sur les ventes détaillées de PALSONIFY.
- **Cohérence** : remarquable ; la stratégie « biologie causale, maladies graves, innovation en série » n'a pas changé depuis 2020.
- **Point de vigilance** : la multiplication des piliers (cinq) disperse l'attention et les dépenses ; la question d'un analyste en juillet sur « pourquoi un cinquième pilier maintenant » montre que le marché s'interroge.

> **À lire entre les lignes** : le management parle de plus en plus de « durée » et de « diversification », de moins en moins de croissance du BPA à court terme. C'est le signal qu'il accepte de sacrifier un peu de rentabilité 2026-2028 pour réduire la dépendance à la mucoviscidose.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Évaluation de l'équipe dirigeante

### Reshma Kewalramani — Directrice générale et présidente (depuis avril 2020)

**Parcours** : médecin néphrologue formée à Harvard, 12 ans chez Amgen (développement clinique, affaires médicales), entrée chez Vertex en 2017 comme directrice médicale, puis directrice générale en 2020 — première femme à diriger une grande biotech américaine.

**Bilan chiffré sous sa direction (2020 → 2025)** :
- Chiffre d'affaires : **6,2 Md$ → 12,0 Md$** (presque ×2)
- Approbation et lancement de **TRIKAFTA** élargi aux jeunes enfants, puis d'**ALYFTREK**
- Premières approbations mondiales de **CASGEVY** (2023) et **JOURNAVX** (2025)
- Acquisitions d'**Alpine** (povetacicept, résultat de phase 3 positif en mars 2026) et de **Crinetics**
- Échecs assumés : VX-814 et VX-864 (déficit en alpha-1 antitrypsine), VX-993 et extension neuropathique de JOURNAVX, VX-264 (cellules + dispositif)

**Ancienneté et participation** : 6,5 ans comme directrice générale, 9 ans dans le groupe. Détention directe modeste (quelques dizaines de milliers d'actions, de l'ordre de 0,03 % du capital) ; ventes régulières via des plans programmés (40 000 actions vendues en février 2026 entre 480 et 497 $). Rémunération d'environ **21,5 M$** (2024), à plus de 90 % variable et en actions.

### Jeffrey Leiden — Président exécutif du conseil
Directeur général de 2012 à 2020, artisan de la transformation (KALYDECO, ORKAMBI, TRIKAFTA). Sa présence assure la continuité stratégique.

### Charles « Charlie » Wagner — Directeur des opérations et financier
Directeur financier depuis 2019, élargi en 2026 au rôle de directeur des opérations chargé de l'intégration de Crinetics. **Jonathan Poole** lui succédera comme directeur financier au 1er janvier 2027. Arrivée de **Jasper van Grunsven** (venu d'Amgen) comme vice-président exécutif.

### Autres piliers
Carmen Bozic (directrice médicale, développement mondial), Nia Tatsis (réglementaire et qualité) : équipe stable, ancienneté moyenne d'environ 6 ans.

---

### Allocation du capital

| Décision | Montant | Lecture |
|---|---|---|
| Semma (2019) + ViaCyte (2022) | ~1,3 Md$ | Pari diabète de type 1, résultats cliniques prometteurs, calendrier repoussé |
| Alpine Immune Sciences (2024) | 4,9 Md$ | **Succès** : povetacicept en phase 3 positive, décision FDA nov. 2026 |
| Crinetics (2026) | ~10 Md$ (8,8 Md$ net) | Pari « cinquième pilier », prime ~100 %, rentable au niveau opérationnel en 2029 |
| Rachats d'actions | 1,2 Md$ (2024), 2,0 Md$ (2025), 0,34 Md$ (T1 2026) | Réduction de ~0,9 % du nombre d'actions par an ; 3 Md$ d'autorisation restante |
| Dividende | Aucun | Priorité au réinvestissement |

**Rentabilité du capital** : ROIC d'environ **29 %**, ROE de 23,5 % sur 12 mois — parmi les meilleurs de la biotech, malgré la charge comptable d'Alpine en 2024 qui a ponctuellement rendu l'exercice déficitaire. La R&D (environ 4 Md$ par an) reste le premier poste d'allocation.

---

### Signaux d'alerte

- **Parties liées** : aucune transaction significative identifiée.
- **Rémunération** : élevée en valeur absolue mais alignée sur les pratiques des grandes biotechs, largement en actions.
- **Ventes d'initiés** : régulières et programmées, aucun achat sur le marché depuis plusieurs années — classique pour un dirigeant non fondateur, mais pas un signal de conviction.
- **Stratégie** : cohérente depuis 2020 ; la multiplication des piliers (cinq en 2026) est le seul changement notable.

### Fondateur ou gestionnaire professionnel ?
**Gestionnaire professionnel, issue de la science clinique.** À ce stade (entreprise mature et très rentable qui doit se diversifier), c'est un profil adapté : rigueur médicale, capacité à arrêter un programme décevant, crédibilité auprès des régulateurs. La limite : pas d'alignement patrimonial de type fondateur, et une stratégie d'acquisitions plus coûteuse qu'une création interne.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Les mouvements de plus de 5 % sur cinq ans

### Contexte
Vertex est un titre **peu volatil** (bêta d'environ 0,3) : il n'a connu qu'une poignée de séances à plus de 5 % par an. Mais quand il bouge, c'est presque toujours sur une **nouvelle clinique ou concurrentielle**, rarement sur les résultats financiers eux-mêmes. Cours au 16 octobre 2026 : **499,74 $** ; plus haut historique **557,96 $** en clôture le 3 septembre 2026 ; plus bas sur 52 semaines **403,16 $** le 4 novembre 2025.

### Principales hausses

| Date | Variation | Événement |
|---|---|---|
| Janv. 2024 | hausse marquée | Phase 3 positive de la suzetrigine (future JOURNAVX) dans la douleur aiguë |
| 13 févr. 2026 | +6,8 % | Lendemain des résultats annuels, sur fond d'inflation américaine plus faible que prévu |
| 10 mars 2026 | +8 % | **Phase 3 RAINIER positive** du povetacicept (−49,8 % de protéinurie contre placebo) |
| 10 août 2026 | +5,6 % | **Échec de Sionna** (SION-719) : disparition d'un challenger en mucoviscidose |
| 19 août 2026 | +4,5 % | Ajout à la liste de conviction de BofA, records successifs jusqu'à 558 $ |

### Principales baisses

| Date | Variation | Événement |
|---|---|---|
| 19 déc. 2024 | −11 % | Phase 2 de la suzetrigine dans la sciatique : aucune séparation avec le placebo |
| 6 mai 2025 | ~−12 % | Ventes du T1 2025 sous les attentes, pause de VX-522 (ARN messager) |
| 5 août 2025 | **−20,6 %** | **Échec de VX-993** et abandon de l'extension neuropathique de JOURNAVX — pire séance depuis des années, plus bas à 375 $ |
| 4 nov. 2025 | plus bas annuel | Résultats du T3 solides mais déception sur CASGEVY ; plus bas de 403 $ |
| 13 oct. 2026 | −4,3 % | Baisse de l'objectif de BofA (TRIKAFTA attendu sous le consensus), taux longs élevés |

---

### Les grands moteurs du cours

- **Les nouvelles cliniques** dominent : un essai positif hors mucoviscidose fait gagner 5 à 8 %, un échec en coûte 10 à 20 %.
- **La perception du risque concurrentiel en mucoviscidose** : chaque essai d'un challenger est un événement binaire pour Vertex.
- **Les taux d'intérêt** : à 26 fois les bénéfices futurs, le titre réagit aux hausses des taux longs (10 ans américain au-dessus de 5 % en octobre 2026).
- **Les rachats d'actions** : environ 2 Md$ en 2025, soutien régulier du cours.

### Trajectoire récente (12 mois)
De ~408 $ mi-octobre 2025 à ~500 $ mi-octobre 2026 (**+22,5 %**) : creux à 403 $ en novembre 2025, rebond à 498 $ sur les données RAINIER en mars, rechute vers 424 $ en mai, puis envolée de 466 $ fin juillet à 558 $ début septembre (Sionna + Crinetics + BofA), avant une consolidation autour de 500 $.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Estimations du BPA ajusté 2026-2028

### Point de départ
- BPA ajusté 2025 : **18,41 $** (BPA publié : 15,33 $)
- Premier semestre 2026 : **9,21 $** ajusté (+7 %)
- 12 derniers mois : 19,03 $ ajusté ; 17,18 $ publié

### Hypothèses de modélisation

**Croissance du secteur et parts de marché** :
- Mucoviscidose : +6 à +8 % par an (nouveaux patients, enfants plus jeunes, pays nouveaux, bascule vers ALYFTREK) ; parts de marché déjà proches de 100 %
- Nouveaux produits : CASGEVY et JOURNAVX vers ~0,55 Md$ en 2026, ~1,0 Md$ en 2027, ~1,6 Md$ en 2028
- Povetacicept : lancement début 2027 si approbation le 30 novembre, ~0,2 Md$ en 2027 et ~0,5 Md$ en 2028 (troisième arrivé sur la classe)
- PALSONIFY : ~0,25 Md$ en 2027, ~0,45 Md$ en 2028

**Prix** : hausses modestes aux États-Unis (+2 à 3 %), pression en Europe ; risque politique sur les prix (alignement sur les prix internationaux) non intégré dans le scénario de base.

**Coûts et levier opérationnel** :
- Marge brute : 86 % → ~85 % (mix CASGEVY, JOURNAVX)
- Dépenses ajustées : 5,7 Md$ (2026, hors Crinetics) → ~6,6 Md$ (2027) → ~7,0 Md$ (2028) avec Crinetics en année pleine
- Le levier opérationnel revient en 2028, quand les lancements dépassent leurs coûts fixes

**Coûts de financement** : prêt de 4,5 Md$ (taux variable SOFR + marge) et baisse des produits financiers après le paiement de Crinetics : effet net d'environ −0,4 à −0,5 $ de BPA par an en 2027.

**Dilution** : rachats compensant les attributions d'actions ; nombre d'actions dilué stable à légèrement décroissant (255 → ~250 millions).

**Impôt** : ~20 % (fourchette 2026 : 19,5 à 20,5 %).

---

### Estimations

| Exercice | Chiffre d'affaires | BPA ajusté estimé | Croissance | PER au cours de 500 $ |
|---|---|---|---|---|
| 2025 (réalisé) | 12,0 Md$ | 18,41 $ | — | 27,2x |
| **2026E** | **13,2-13,3 Md$** | **18,0 à 18,6 $** | **~0 %** | **~27x** |
| **2027E** | **14,4-14,8 Md$** | **19,0 à 20,5 $** | **+6 à +10 %** | **~25x** |
| **2028E** | **16,0-16,6 Md$** | **21,5 à 23,5 $** | **+13 à +15 %** | **~22x** |

*Le BPA publié (GAAP) sera inférieur d'environ 2,5 à 4 $ par an : rémunération en actions (650-700 M$) et, à partir de 2026, amortissement des actifs incorporels de Crinetics.*

### Sensibilité

- **Scénario haussier** (povetacicept meilleur de sa classe malgré l'arrivée tardive, inaxaplin positif début 2027, JOURNAVX vers 1 Md$ dès 2028) : BPA 2028 de 24 à 25 $ → PER 2028 de 20x
- **Scénario de base** : BPA 2028 ~22,5 $ → PER 2028 ~22x, cohérent avec l'objectif moyen des analystes (571 $)
- **Scénario baissier** (érosion des prix américains de la mucoviscidose, échec d'inaxaplin, Crinetics décevant) : BPA 2028 ~19 $ → PER ~26x, aucun potentiel

**Conclusion** : 2026-2027 sont des **années de transition** où la croissance du bénéfice par action est faible malgré une croissance des ventes d'environ 10 %. La thèse repose sur le retour d'une croissance à deux chiffres du BPA en 2028, quand les nouveaux piliers deviennent rentables.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## 🐂 Scénario optimiste (bull case)

### 1. La rente mucoviscidose est plus durable que prévu
Aucun concurrent crédible après l'échec de Sionna ; ALYFTREK améliore la marge (redevance plus faible) et prolonge la protection par brevets ; les correcteurs de 3e génération visent des patients aux niveaux de porteurs sains. La mucoviscidose peut croître de 6 à 8 % par an jusqu'en 2030 et financer tout le reste.

### 2. Trois lancements en accélération simultanée
CASGEVY (+151 %), JOURNAVX (×4) et ALYFTREK (×3,7) montent ensemble. JOURNAVX s'attaque à un marché d'environ 80 millions de patients traités chaque année pour une douleur aiguë aux États-Unis, porté par la volonté politique de réduire les opioïdes.

### 3. La néphrologie, nouveau moteur
Povetacicept : −49,8 % de protéinurie contre placebo, 85 % de résolution de l'hématurie, injection mensuelle à domicile, potentiel « plusieurs maladies en une molécule » (néphropathie à IgA, néphropathie membraneuse, myasthénie). Inaxaplin : premier traitement de la cause d'une maladie rénale touchant de nombreux patients d'ascendance africaine, données intermédiaires début 2027.

### 4. Crinetics, un pilier rapide
PALSONIFY est déjà approuvé aux États-Unis et en Europe ; atumelnant en phase 3 ; plus de 5 Md$ de ventes potentielles cumulées au pic.

### 5. Bilan et allocation
13,6 Md$ de trésorerie avant Crinetics, rachats réguliers, ROIC de 29 % ; capacité à racheter d'autres actifs.

### 6. Surprises bénéficiaires possibles
Quatre trimestres consécutifs au-dessus du consensus ; prévision 2026 déjà relevée une fois.

---

## 🐻 Scénario pessimiste (bear case)

### Risques permanents

**1. Une concentration extrême.** 96 % des ventes viennent de la mucoviscidose. Toute pression politique sur les prix américains (alignement sur les prix internationaux, négociation Medicare élargie), une rupture d'approvisionnement ou un concurrent efficace toucherait presque tout le bénéfice.

**2. La diversification coûte plus qu'elle ne rapporte (pour l'instant).** Hors mucoviscidose, Vertex ne vend que ~500 M$ par an mais dépense des centaines de millions en lancements. Crinetics n'améliore le résultat opérationnel qu'en 2029. Le povetacicept arrive **troisième** après VOYXACT et TRUTAKNA.

**3. Un historique d'échecs hors mucoviscidose.** Alpha-1 antitrypsine, VX-993, extension neuropathique de JOURNAVX, VX-264 : la « biologie causale » ne garantit pas le succès. Zimislecel a connu une pause de fabrication et son calendrier a déjà glissé.

### Compression des marges
La marge opérationnelle ajustée est passée de 44,7 % à 42,7 % en un an ; avec Crinetics et les lancements, elle pourrait tomber vers 38-40 % en 2027.

### Analyse pré-mortem
*Vertex vaut 380 $ dans deux ans. Que s'est-il passé ?* Une réforme des prix américains a imposé une baisse de 15 % des prix nets de la mucoviscidose ; le povetacicept a pris moins de 15 % du marché face à TRUTAKNA ; AMPLITUDE a déçu en 2027 ; les coûts de Crinetics ont pesé. Le BPA stagne autour de 18-19 $ et le marché ramène le multiple vers 20x : 19 × 20 = 380 $.

### Le multiple est-il trop élevé ?
À ~26x les bénéfices des 12 prochains mois et un PEG de 2,75, le titre paie une croissance du BPA de 10 % par an qui n'arrivera vraiment qu'en 2028. Les pairs de qualité se paient 12 à 18x. **La prime n'est justifiée que si la diversification réussit.**

---

## Point de vue à contre-courant

**Ce que le marché refuse de voir** : le marché valorise Vertex comme une valeur défensive « mucoviscidose plus options ». Or c'est l'inverse qui pourrait se produire : la mucoviscidose est **un actif obligataire** à croissance lente et à risque politique, tandis que les options (néphrologie, endocrinologie, douleur) sont ce qui déterminera le cours en 2030. Les investisseurs qui achètent pour la stabilité achètent en réalité un **portefeuille de paris cliniques** financé par une rente — et ceux qui craignent la concentration sous-estiment peut-être la vitesse à laquelle elle se réduit (de 99 % à 96 % en 18 mois, possiblement 85 % en 2028).`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE MODÉRÉ
Le chiffre d'affaires est enregistré **net des remises, rabais et retours** : Medicaid, programme 340B, contrats avec les assureurs, accords de volume en Europe. Ces provisions reposent sur des **estimations** importantes (plusieurs milliards par an). Une révision favorable de provisions passées peut gonfler un trimestre.

**À surveiller** : les mentions de « prix nets réalisés plus élevés » (citées au T2 2026 aux États-Unis) et les ajustements de provisions d'années antérieures dans le 10-Q.

### Information sectorielle — RISQUE MODÉRÉ
Un **seul segment** publié : impossible de mesurer la rentabilité propre de CASGEVY, de JOURNAVX ou de Crinetics. Les dépenses de lancement sont noyées dans les frais commerciaux du groupe, ce qui masque d'éventuelles pertes sur les nouveaux produits.

### Contrats de location — RISQUE FAIBLE
1,98 Md$ de dettes locatives (sièges de Boston et Londres, laboratoires) pour 1,66 Md$ d'actifs. Montants stables, correctement présentés.

### Parties liées — RISQUE FAIBLE
Aucune transaction significative. Les relations contractuelles importantes (Cystic Fibrosis Foundation pour les redevances, CRISPR Therapeutics pour le partage 60/40 de CASGEVY) sont publiées et anciennes.

### Engagements conditionnels — RISQUE MODÉRÉ
- **Compléments de prix** (contingent consideration) issus d'acquisitions passées, réévalués chaque trimestre
- **Paiements d'étapes** à des partenaires en cas de succès réglementaire
- Litiges de brevets et enquêtes sur les prix habituels du secteur

### Rémunération en actions — RISQUE MODÉRÉ
650 à 700 M$ par an (environ 5 % du chiffre d'affaires), **exclus du BPA ajusté**. L'écart entre BPA publié et ajusté (2025 : 15,33 $ contre 18,41 $) vient en grande partie de là. Les rachats d'actions (2 Md$ en 2025) servent en partie à neutraliser cette dilution : une partie du cash « rendu » aux actionnaires ne fait que compenser les attributions.

### Goodwill et actifs incorporels — RISQUE EN HAUSSE
- Avant Crinetics : seulement **1,5 Md$** de goodwill et incorporels — bilan très « propre »
- **Changement de méthode** : Alpine (2024) a été traitée comme une acquisition d'actifs, avec 4,4 Md$ de recherche passée en charge d'un coup ; Crinetics (2026) est traitée comme un **regroupement d'entreprises** : les ~8,8 Md$ seront inscrits au bilan (incorporels, goodwill) puis amortis ou testés chaque année
- Une **dépréciation d'incorporel de 379 M$** a déjà été passée au T1 2025

**À surveiller** : l'allocation du prix d'acquisition de Crinetics (publication au T3) et le risque de dépréciation si PALSONIFY ou atumelnant déçoivent.

### Compte de résultat — éléments ponctuels
- **Taux d'impôt anormalement bas au T4 2025** (13,5 % ajusté contre ~20 % normalement) grâce à des crédits d'impôt : le BPA record de 5,03 $ en était gonflé d'environ 0,4 $
- Variations de juste valeur des participations stratégiques (+37 M$ au T2 2026), exclues du BPA ajusté

### Bilan et flux de trésorerie
- **Impôts différés actifs : 3,0 Md$** (capitalisation fiscale de la R&D aux États-Unis) — en hausse, à surveiller si la règle fiscale change
- **Flux de trésorerie disponible irrégulier** : 0,35 Md$ au T4 2025 contre 1,1 à 1,3 Md$ les autres trimestres (calendrier des paiements d'impôts et de remises)
- Conversion bénéfice → cash sur 12 mois : environ 86 % (3,8 Md$ de FCF pour 4,4 Md$ de résultat net), correcte

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** Aucune fraude ni pratique agressive identifiée ; auditeur Ernst & Young. Les points de vigilance sont structurels au secteur (remises, rémunération en actions) et **conjoncturels** avec l'arrivée de Crinetics, qui va alourdir le bilan en incorporels et le compte de résultat publié en amortissements. Préférer le **BPA publié** au BPA ajusté pour juger de la création de valeur réelle.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## 15 questions prioritaires pour Reshma Kewalramani (classées par importance)

### Stratégie et avantage concurrentiel

**1.** La mucoviscidose représente encore 96 % de vos ventes. **Quelle part du chiffre d'affaires hors mucoviscidose visez-vous en 2030**, et à partir de quel niveau considérerez-vous la dépendance comme réglée ?

**2.** Le povetacicept arrivera troisième, après VOYXACT et TRUTAKNA, sur la classe APRIL/BAFF. **Quels arguments concrets** (données à 104 semaines, injection mensuelle à domicile, indications multiples) vous permettront de prendre la première place, et **quelle part de marché** jugeriez-vous décevante ?

**3.** Si une politique d'alignement des prix américains sur les prix internationaux s'appliquait aux maladies rares, **quel serait l'impact sur le prix net de la mucoviscidose** aux États-Unis, et quels leviers avez-vous pour l'amortir ?

**4.** Les correcteurs de 3e génération visent des niveaux de chlorure de porteur sain. **Quand pourrez-vous dire si l'un d'eux est supérieur à ALYFTREK**, et que se passe-t-il si aucun ne l'est ?

### Allocation du capital

**5.** Crinetics a coûté environ 10 Md$, avec une prime de 100 %, pour un effet positif sur le résultat opérationnel en 2029 seulement. **Quel taux de rendement interne** avez-vous retenu, et sur quelles hypothèses de ventes de PALSONIFY ?

**6.** Après Crinetics, **quelle est votre capacité et votre appétit pour une nouvelle acquisition** de taille comparable, et comment arbitrez-vous avec les rachats d'actions (3 Md$ d'autorisation restante) ?

**7.** Quel **niveau de marge opérationnelle ajustée** visez-vous en 2027 et 2028 avec cinq piliers et deux lancements simultanés ?

### Exécution

**8.** JOURNAVX génère environ 50 M$ par trimestre pour 535 000 ordonnances. **Quel est le prix net réel** et quel chemin vers 1 Md$ de ventes annuelles ?

**9.** CASGEVY accélère enfin. **Combien de patients ont commencé le processus** (prélèvement de cellules) et quel est le délai moyen jusqu'à la perfusion ?

**10.** Zimislecel : après la pause de fabrication de 2026, **quand déposerez-vous le dossier** et le procédé est-il désormais reproductible à l'échelle commerciale ?

### Risques

**11.** BofA anticipe des ventes de TRIKAFTA sous le consensus au T3. **La baisse de TRIKAFTA est-elle entièrement compensée par ALYFTREK** ou observez-vous des arrêts de traitement ou des pressions de prix ?

**12.** Quel est votre **plan de secours si AMPLITUDE** (inaxaplin) ne permet pas une approbation accélérée début 2027 ?

**13.** Votre exposition aux **droits de douane et à la production étrangère** est-elle vraiment négligeable pour les nouveaux produits (thérapies cellulaires, Crinetics) ?

### Gouvernance et vision

**14.** La transition de directeur financier (Charlie Wagner vers Jonathan Poole au 1er janvier 2027) intervient en pleine intégration de Crinetics. **Comment est organisée la succession** de la direction générale à moyen terme ?

**15.** Quel est **le risque que vous sous-estimez le plus aujourd'hui**, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `*Données arrêtées au 19 octobre 2026 (dernier cours du 16 octobre 2026).*

## Thèse vendeuse — Démontage de l'argumentaire haussier

### 1. Un modèle structurellement exposé à un seul payeur politique
Vertex vend environ 370 000 $ par an un traitement à vie, majoritairement payé aux États-Unis. Le risque n'est pas un concurrent, c'est **le législateur**. Une politique d'alignement des prix sur les pays étrangers, l'élargissement des négociations Medicare ou une pression des assureurs sur les maladies rares pourrait amputer le prix net de 10 à 20 % — directement sur 96 % du chiffre d'affaires et une marge de plus de 40 %.

### 2. La concentration ne se réduit que lentement
Hors mucoviscidose : 126 M$ par trimestre, soit **4 % des ventes**. Même avec les meilleurs scénarios (CASGEVY, JOURNAVX, povetacicept, PALSONIFY), la mucoviscidose restera au-dessus de 80 % en 2028. Les optimistes parlent de « cinq piliers » ; quatre d'entre eux pèsent ensemble moins qu'un trimestre de croissance de TRIKAFTA.

### 3. L'avantage concurrentiel est réel… mais il ne protège que la mucoviscidose
Le moat repose sur 20 ans de science CFTR. **Il ne se transfère pas** : en douleur, Vertex vend un antalgique cher face à des génériques ; en néphrologie, il arrive après Otsuka et Vera ; en hématologie, CASGEVY bute sur une procédure lourde (conditionnement par chimiothérapie) qui limite le nombre de patients. Hors de son domaine, Vertex est une biotech comme les autres, avec un taux d'échec à l'avenant (VX-993, VX-864, VX-264).

### 4. Le concurrent le plus dangereux : Vera Therapeutics (et la classe APRIL/BAFF)
TRUTAKNA (atacicept) est approuvé depuis le 7 juillet 2026, premier inhibiteur double APRIL/BAFF, avec des données de confirmation à venir. Vera a cinq mois d'avance sur les néphrologues et les payeurs. Les optimistes supposent que le povetacicept sera « le meilleur de sa classe » ; en pratique, les médecins prescrivent souvent ce qu'ils connaissent déjà.

### 5. L'allocation du capital la plus discutable : Crinetics
Environ 10 Md$, une prime de 100 %, pour une entreprise qui réalisait **7,7 M$ de chiffre d'affaires en 2025** et perdait plus de 500 M$. Effet positif sur le résultat opérationnel en 2029 seulement. C'est le prix d'un **pilier acheté** plutôt que construit, financé en partie par un emprunt de 4,5 Md$ — une première pour un groupe historiquement sans dette.

### 6. Comptabilité et incitations
Pas de comptabilité agressive identifiée, mais : BPA ajusté excluant 650-700 M$ de rémunération en actions ; T4 2025 flatté par un taux d'impôt de 13,5 % ; dirigeants vendeurs nets réguliers, aucun achat. Les rachats servent d'abord à compenser la dilution.

---

### Quelles hypothèses le cours actuel exige-t-il ?
À 500 $ (~26x les bénéfices futurs), il faut simultanément : (1) une croissance de la mucoviscidose de 6 à 8 % par an sans baisse de prix, (2) l'approbation et le succès commercial du povetacicept, (3) un résultat positif d'AMPLITUDE début 2027, (4) au moins 1 Md$ de ventes de JOURNAVX d'ici 2028, (5) Crinetics conforme au plan.

### Et si la croissance déçoit de 20 à 30 % ?
Avec un BPA 2028 ramené de ~22,5 $ à 18-19 $ et un multiple comprimé à 20x (niveau des pairs de qualité), le titre vaudrait **360 à 380 $**, soit **−25 % environ**. Le plus bas des 12 derniers mois (403 $) montre que ce niveau n'est pas théorique.

### Le scénario catastrophe unique
**Une réforme des prix américains appliquée aux maladies rares**, combinée à un nouvel échec clinique majeur. Ce scénario frapperait le cœur du bénéfice, sans relais suffisant. Probabilité sur trois ans : **15 à 25 %**, selon l'orientation des politiques de santé américaines.

### Conclusion vendeuse
Vertex est une entreprise exceptionnelle, mais **le titre se paie comme si la diversification était acquise**. Elle ne l'est pas. Tant que plus de 80 % des profits dépendent d'une seule maladie et d'un seul système de prix, la prime de 45 % sur les pairs rémunère mal le risque.`,
  },
];

export default { ...meta, modules };
