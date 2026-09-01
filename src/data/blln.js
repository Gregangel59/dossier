// ============================================================
//  DOSSIER : BillionToOne, Inc. (BLLN)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "blln",                     // identifiant d'URL : /dossier/blln
  ticker: "BLLN",
  name: "BillionToOne, Inc.",
  exchange: "Nasdaq",
  sector: "Diagnostic moléculaire de précision",
  initials: "BLLN",                 // affiché dans la pastille
  tagline: "Diagnostic moléculaire à comptage de molécules unique — prénatal (UNITY) et oncologie (Northstar), rentable et en hypercroissance.",
  riskScore: 66,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "blln.html",
  updated: "2026-08",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

BillionToOne est une **société de diagnostic moléculaire** cotée au Nasdaq (IPO le 6 novembre 2025 à 60 $), fondée en 2016 à Menlo Park (Californie) par **Oguzhan Atay, Sukrit Silas et David Tsao**. Sa mission : rendre des tests génétiques puissants et précis **accessibles à tous**. Le cœur technologique est une plateforme propriétaire de **comptage moléculaire à la molécule unique** — les *Quantitative Counting Templates (QCT)* et le *single-molecule NGS (smNGS)* — capable de détecter et quantifier l'ADN au niveau du **comptage individuel**.

Le modèle est celui d'un **laboratoire de tests cliniques** : BillionToOne développe des tests propriétaires, les réalise sur des échantillons sanguins envoyés par les prescripteurs, et facture principalement via le **remboursement par des tiers** (assureurs privés, Medicaid, Medicare). La valeur naît de la combinaison **technologie différenciée × couverture payeurs × volume de tests**.

## Principaux produits et services

**1. Prénatal (UNITY) — cœur historique et majoritaire du CA :**
- **UNITY Fetal Risk Screen** : premier test prénatal non invasif à partir d'ADN libre circulant (cfDNA) évaluant le risque fœtal de maladies récessives (drépanocytose, mucoviscidose) **sans échantillon paternel ni geste invasif** (amniocentèse)
- **UNITY Complete / Confirm** : dépistage des aneuploïdies, conditions récessives et antigènes fœtaux ; Unity Confirm apporte une information diagnostique « type CVS » sans procédure invasive

**2. Oncologie (Northstar) — relais de croissance :**
- **Northstar Select** : biopsie liquide identifiant les mutations tumorales
- **Northstar Response** : dosage par méthylation quantifiant la charge tumorale à la molécule unique, pour le suivi en temps réel de la réponse au traitement
- **Northstar Origin** : lancement 2026, extension du menu oncologique

## Clients, fournisseurs, concurrents

**Clients / prescripteurs** : obstétriciens-gynécologues, spécialistes en médecine materno-fœtale, oncologues ; les **payeurs** (assureurs, Medicaid) sont la source de revenus effective (>90 % du CA).

**Fournisseurs** : fabricants de séquenceurs et réactifs (Illumina et équivalents), consommables de laboratoire, infrastructure cloud pour la bio-informatique.

**Concurrents** : **Natera** (prénatal Panorama, oncologie Signatera), **Guardant Health** (oncologie), **Myriad Genetics**, **GeneDx**, **Labcorp** et **Quest Diagnostics** sur le dépistage.

## Modalités contractuelles

Contrairement à un modèle à contrats long terme, l'activité est **transactionnelle par test** : chaque test livré génère une facturation dont le **prix moyen réalisé (ASP)** dépend du statut de remboursement. La dynamique clé : quand un test **décroche une couverture payeur**, l'ASP grimpe, ce qui améliore volume ET marge simultanément. À l'inverse, une décision de tarification défavorable comprime directement les revenus.

> **Note de contexte** : BillionToOne a **basculé en rentabilité GAAP** en 2025 (résultat net positif) — un profil rare pour un diagnostic en hypercroissance, la plupart des pairs restant déficitaires. Mais le titre se paie très cher (~150× les bénéfices naissants), et toute décélération est sévèrement sanctionnée.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de BillionToOne dans la chaîne de valeur

BillionToOne occupe la position de **laboratoire de diagnostic intégré** : il transforme des échantillons biologiques en information clinique actionnable, entre les fournisseurs de technologie de séquençage en amont et le système de soins (prescripteurs, patients, payeurs) en aval.

### Amont — Intrants technologiques et matériels

- **Séquenceurs & réactifs de séquençage** : Illumina (et équivalents) — plateforme NGS sur laquelle repose la technologie smNGS
- **Consommables de laboratoire** : kits d'extraction cfDNA, tubes de prélèvement, enzymes, oligonucléotides (QCT propriétaires)
- **Infrastructure informatique** : cloud computing et stockage pour la bio-informatique (les algorithmes de comptage moléculaire sont au cœur de la valeur)
- **Propriété intellectuelle** : brevets sur les Quantitative Counting Templates — l'actif immatériel central

---

### BillionToOne — Laboratoire et traitement

**Laboratoire clinique certifié** (CLIA/CAP) réalisant l'ensemble du flux : réception de l'échantillon → extraction cfDNA → préparation de librairie → séquençage → analyse bio-informatique propriétaire → rapport clinique au prescripteur.

**Intégration EMR** : intégration aux dossiers médicaux électroniques (Electronic Medical Records) pour fluidifier la commande et le rendu de résultats — un levier de croissance de volume mis en avant par la direction.

---

### Aval — Système de soins et payeurs

**Prescripteurs** : OB/GYN, spécialistes materno-fœtaux (prénatal) ; oncologues (Northstar).

**Patients** : femmes enceintes (dépistage prénatal), patients atteints de cancer (profilage tumoral et suivi de réponse).

**Payeurs (le vrai « client » économique)** : assureurs privés, Medicaid, Medicare. **Plus de 90 % du chiffre d'affaires** transite par ce canal de remboursement — c'est le maillon qui détermine l'ASP et donc la rentabilité.

---

### Cartographie simplifiée du flux

\`\`\`
INTRANTS            →   BILLIONTOONE (LABO)        →   SYSTÈME DE SOINS
Illumina (NGS)          Extraction cfDNA               Prescripteurs (OB/GYN,
Réactifs, consommables  Séquençage smNGS/QCT           oncologues)
Cloud / bio-info        Analyse propriétaire           Patients
Brevets QCT             Rapport clinique               PAYEURS (>90 % du CA :
(techno = cœur)         (intégration EMR)              assureurs, Medicaid)
\`\`\`

**Le pari central** : BillionToOne parie que sa précision de comptage moléculaire (sensibilité, absence d'échantillon paternel, suivi à la molécule unique) crée un avantage produit suffisamment net pour **décrocher la couverture payeurs plus vite et à meilleur ASP** que la concurrence — transformant l'avantage technique en avantage économique.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

BillionToOne publie principalement selon deux lignes cliniques : **prénatal** (historique, majoritaire) et **oncologie** (relais émergent), auxquelles s'ajoutent des revenus mineurs (pharma/autres).

### Structure par ligne de produits — Exercice 2025

| Ligne | CA 2025 | Croissance a/a | Dynamique |
|---|---|---|---|
| Prénatal clinique (UNITY) | 277,1 M$ | +90 % | Cœur du modèle, base installée large |
| Oncologie clinique (Northstar) | ~24 M$ (est.) | ×8 environ | Relais à forte pente, encore petit |
| Autres / pharma | Résiduel | — | Complément |
| **Total** | **305,1 M$** | **+100 %** | **Doublement en un an** |

Au **T4 2025**, le prénatal atteint 86,1 M$ (+99 %) et l'oncologie 9,1 M$ (**×8** vs 1,1 M$ un an plus tôt) — l'oncologie reste modeste en absolu mais croît beaucoup plus vite, ce qui en fait le **relais de diversification** clé.

---

### Moteurs de la croissance

La hausse du CA 2025 (+100 %) provient de deux effets combinés :
- **Volume** : +51 % de tests livrés sur l'année
- **ASP (prix moyen réalisé)** : +35 % — porté par l'expansion de la couverture payeurs et la montée en gamme des tests

Cette **double détente volume × prix** est la signature du modèle : chaque avancée de remboursement agit simultanément sur les deux leviers.

---

### Répartition géographique

Activité **quasi exclusivement américaine** à ce stade — le remboursement étant intrinsèquement lié au système de santé US. Pas d'exposition internationale significative, ce qui **réduit le risque de change** mais **concentre le risque réglementaire/payeurs** sur une seule juridiction.

---

### Profil de marge et rentabilité

- **Marge brute** : **68 % en 2025** (vs 53 % en 2024), **70–71 % au T1–T2 2026** — amélioration continue tirée par la hausse de l'ASP et la baisse du coût par test
- **Résultat opérationnel** : **+16,0 M$ en 2025** (marge ~5 %) vs perte de −47,1 M$ en 2024 — inflexion majeure
- **Résultat net** : **+2,9 M$ en 2025** (BPA dilué ~0,14–0,18 $) vs perte de −41,6 M$ en 2024
- **Trésorerie** : ~496 M$ fin 2025, ~549 M$ mi-2026

**Lecture** : BillionToOne est l'un des rares diagnostics en hypercroissance **déjà rentable au niveau GAAP**. Le marché ne le valorise pas sur ses bénéfices actuels (minces) mais sur la **trajectoire de marge et l'ampleur des profits 2027-2028**.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Technologie propriétaire — le moat le plus tangible
La plateforme de **comptage moléculaire à la molécule unique** (QCT / smNGS) est protégée par brevets et permet des performances difficiles à répliquer : le **UNITY Fetal Risk Screen** a été le premier test cfDNA à évaluer le risque de maladies récessives **sans échantillon paternel ni geste invasif**. En oncologie, **Northstar Response** quantifie la charge tumorale **sans biopsie tissulaire**. Cette avance technique se traduit par une sensibilité et une différenciation cliniques réelles.

### 2. Couverture payeurs — un moat qui se construit et s'auto-renforce
Chaque **contrat de remboursement** décroché est un actif durable : il relève l'ASP, augmente les volumes (les prescripteurs adoptent plus volontiers un test remboursé) et crée une **barrière à l'entrée** pour les concurrents qui doivent refaire le même parcours réglementaire et de validation clinique. Plus la base installée grandit, plus les données cliniques s'accumulent, renforçant le dossier de remboursement — un cercle vertueux.

### 3. Données cliniques et guidelines — effet de réseau scientifique
BillionToOne revendique avoir **modifié des recommandations médicales** et des paradigmes de traitement (études publiées sur le cfDNA, le suivi ctDNA). L'inclusion dans les *guidelines* professionnelles est un fossé puissant : elle oriente la prescription et est très lente à déloger.

### 4. Rentabilité comme arme concurrentielle
Fait rare dans le secteur : BillionToOne est **rentable GAAP** tout en croissant à +64 %. Là où Natera et Guardant brûlent du capital, BillionToOne s'autofinance en partie — un avantage de **discipline et de coût par test** qui lui donne une marge de manœuvre stratégique.

### 5. Coûts de changement — MODÉRÉS
Une fois qu'un cabinet OB/GYN ou un centre d'oncologie a intégré UNITY/Northstar à son flux (EMR, protocoles, habitudes), le changement a un coût. Mais ce verrou est **moins fort** qu'un contrat industriel long terme : la fidélité repose sur la performance clinique, le service et le statut de remboursement, qui doivent être **maintenus en continu**.

## Positionnement vs concurrence

| Critère | BillionToOne | Natera | Guardant Health |
|---|---|---|---|
| Cœur | Prénatal + oncologie | Prénatal + MRD (Signatera) | Oncologie |
| Rentabilité GAAP | **Positive** | Négative | Négative |
| Croissance CA | ~+50–64 % | ~+30 % | Variable |
| Échelle (CA) | ~397 M$ (TTM) | ~2,5 Md$ | Milliards $ |
| Techno différenciante | QCT / smNGS | cfDNA établi | ctDNA établi |

## Pouvoir de négociation

- **Vis-à-vis des payeurs** : **Croissant mais asymétrique** — un test cliniquement supérieur et inclus aux guidelines gagne en pouvoir de tarification, mais les payeurs restent l'arbitre final de l'ASP
- **Vis-à-vis des prescripteurs** : **Modéré** — l'adoption dépend de la performance et du remboursement ; les switching costs existent mais ne verrouillent pas
- **Vis-à-vis des fournisseurs (séquençage)** : **Modéré** — dépendance à l'écosystème NGS (Illumina), mais intrants relativement standardisés`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Diagnostic moléculaire / biopsie liquide (août 2026)

| Société | Code | Cap. boursière | Profil | Rentabilité | Valorisation |
|---|---|---|---|---|---|
| **BillionToOne** | **BLLN US** | **~4,5 Md$** | **Prénatal + oncologie, hypercroissance** | **Rentable GAAP** | **PER ~150× · EV/CA ~8,5×** |
| Natera | NTRA US | ~38–39 Md$ | Prénatal (Panorama) + MRD (Signatera) | Déficitaire (EPS ~−1,6 $) | EV/CA ~15× |
| Guardant Health | GH US | Plusieurs Md$ | Oncologie (Guardant360, Shield) | Déficitaire | EV/CA élevé |
| Myriad Genetics | MYGN US | ~1–2 Md$ | Génétique / oncologie héréditaire | Marginale | Modérée |
| GeneDx | WGS US | Quelques Md$ | Séquençage exome/génome | En amélioration | Variable |

*Données estimatives sur la base des cours et publications disponibles à août 2026. À affiner sur filings SEC directs.*

---

### Analyse comparative

**Natera (NTRA) — le géant du secteur**
Avec ~2,5 Md$ de CA et une capitalisation de ~38 Md$, Natera est le **leader établi** du prénatal (Panorama) et de la MRD oncologique (Signatera). Il se paie **plus cher** que BillionToOne en EV/CA (~15× vs ~8,5×) — preuve que **BLLN n'est pas l'extrême de valorisation du secteur**. Mais Natera reste **déficitaire**, là où BillionToOne est déjà rentable : c'est l'argument différenciant central de la thèse BLLN.

**Guardant Health (GH) — le spécialiste oncologie**
Positionné sur la biopsie liquide oncologique et le dépistage (Shield, colorectal). Concurrent direct de Northstar sur le terrain oncologique, mieux capitalisé et plus avancé sur certains segments — mais également non rentable et sur des multiples exigeants.

**Myriad / GeneDx — les comparateurs de rentabilité et d'échelle**
Ils rappellent que le diagnostic génétique « mature » se paie modestement et que la rentabilité durable n'est pas acquise dans ce secteur. BillionToOne devra **prouver que sa rentabilité GAAP naissante est structurelle**, pas un pic ponctuel.

---

### Le ratio qui compte : croissance rentable et ASP
BillionToOne se distingue par un **couple rare** : croissance ~50–64 % **et** rentabilité GAAP. Le débat de valorisation ne porte pas sur la qualité de l'entreprise (reconnue) mais sur le **prix** : à ~150× les bénéfices, la moindre décélération — comme au T2 2026 — comprime brutalement le multiple. Le suivi de l'**ASP**, du **rythme de couverture payeurs** et de la **contribution de l'oncologie** sont les vrais juges de paix face aux pairs.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 2026 — Analyse

### Chiffre d'affaires vs consensus

| Indicateur | T2 2026 | T2 2025 | Commentaire |
|---|---|---|---|
| Chiffre d'affaires | 109,4 M$ | 66,6 M$ | **+64 %** — en ligne avec le consensus (~109 M$) |
| BPA dilué (GAAP) | 0,15 $ | −0,02 $ | Bénéfice, mais **sous** le consensus non-GAAP (~0,18–0,19 $) |
| Résultat net | 8,1 M$ | −0,2 M$ | Bascule confirmée en territoire positif |
| Marge brute | 70 % | 65 % | +5 pts a/a — amélioration continue |
| Tests livrés | 196 000 | ~145 000 | **+35 %** a/a |

**Lecture** : le CA est **conforme** aux attentes et la croissance reste forte (+64 %), mais le **BPA non-GAAP a manqué le consensus** (~0,15 $ vs ~0,19 $) et, surtout, la direction a **réitéré** — sans la relever — sa guidance annuelle. C'est ce dernier point qui a déclenché la sanction boursière.

---

### Facteurs clés par segment

- **Prénatal (UNITY)** : socle solide, volumes et ASP en hausse continue
- **Oncologie (Northstar)** : croissance la plus rapide (×8 en a/a au T4 2025), montée en puissance de la biopsie liquide et du suivi de réponse
- **Nouveaux lancements 2026** : Unity Confirm (T1), Unity Fetal Risk Screen élargi (17 août), Northstar Origin (1er sept.) — élargissement du menu

---

### Évolution des marges

- Marge brute **70 %** au T2 2026, dans la continuité des 68 % (2025) et 53 % (2024) — trajectoire remarquable
- **Résultat opérationnel positif** maintenu ; l'entreprise dit continuer à générer du profit **tout en investissant** dans la croissance (R&D, commercial, nouveaux tests)

---

### Perspectives et guidance

- **Guidance 2026 réitérée** : total revenue de **450 à 465 M$** (+48 à +52 % vs 2025)
- **Implication** : après un premier semestre à **+74 %**, maintenir la fourchette annuelle suppose une croissance H2 de « seulement » **~29–38 %** — d'où la lecture d'une décélération
- **Résultat opérationnel GAAP positif** attendu sur l'ensemble de 2026

---

### Signaux d'alerte bilan

- **Dépendance aux payeurs** : >90 % du CA via remboursement tiers — variable exogène majeure
- **Trésorerie** : ~549 M$, dette ~91 M$ — position nette très confortable, **pas de risque de liquidité**
- **Élément non récurrent** : une perte ponctuelle (~9,7 M$) a pesé sur les 12 mois glissants à fin mars 2026 — à isoler dans l'analyse

---

### Réaction du marché

Le titre a **chuté de ~39 %** le 6 août 2026 (de ~150 $ vers ~92 $), effaçant ~2,75 Md$ de capitalisation, **malgré** une croissance de 64 %. Le marché n'a pas rejeté les résultats mais **recalibré le rythme de sortie 2026**. Un analyste a qualifié l'entreprise de « victime de son propre succès ». Plusieurs bureaux ont **maintenu leur note d'achat en abaissant l'objectif** (ex. 145 $ → 130 $ chez JPMorgan). Au 28 août, le titre se stabilise autour de **94 $**, sous la cible consensus (~120 $) — un écart qui résume le débat sur la valeur.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — depuis l'IPO (nov. 2025)

BillionToOne étant coté depuis peu, l'historique de conférences est court mais le **ton est constant, confiant et méthodique**, porté par le CEO co-fondateur **Dr Oguzhan Atay**.

**T3 2025 (avant/juste après IPO)** : Discours de **preuve du modèle** — « une technologie unique et innovante combinée à une exécution disciplinée peut créer un profil financier différencié ». Premier trimestre de bascule en rentabilité mis en avant.

**T4 / FY 2025 (mars 2026)** : Ton **triomphant maîtrisé** — « 2025 a démontré la puissance de composition d'une plateforme technologique différenciée ». Relèvement de la guidance 2026. Insistance sur le fait d'être « aux tout premiers chapitres » du potentiel.

**T1 2026 (mai)** : Confiance renforcée — **relèvement** de la guidance (415-430 → 430-445 M$ puis 450-465 M$), BPA record (0,34 $), lancement d'Unity Confirm.

**T2 2026 (août)** : Même ton positif (« 4 piliers de différenciation » : technologie révolutionnaire, croissance rapide scalable, marges brutes supérieures, rentabilité GAAP) — **mais** la simple réitération de la guidance a été perçue comme prudente par un marché habitué aux relèvements.

---

### Priorités répétées du management

**1. La technologie d'abord** — Le comptage moléculaire (smNGS/QCT) est présenté comme le socle de tout : précision, coût par test, différenciation clinique.

**2. La rentabilité comme signature** — Contrairement aux pairs, BillionToOne martèle sa **profitabilité GAAP** comme preuve de discipline et de qualité du modèle.

**3. L'expansion du menu et de la couverture** — Nouveaux tests (Unity Confirm, Northstar Origin) et progrès de remboursement (payer contracts) sont les leviers explicites de croissance.

**4. La mission d'accessibilité** — « Résoudre les problèmes les plus difficiles de la santé », « une molécule à la fois » — un récit de mission qui structure la communication.

---

### Analyse du sentiment

- **Confiance** : Élevée et stable. Le management « livre et dépasse » régulièrement (beats successifs), ce qui a nourri la prime jusqu'au pic de 150 $.
- **Prudence naissante** : La réitération (non le relèvement) de la guidance au T2 signale peut-être une **gestion des attentes** après un premier semestre exceptionnel — lecture prudente d'une direction qui ne veut pas surpromettre sur un H2 plus difficile en base de comparaison.
- **Cohérence** : Remarquable sur la thèse (technologie + rentabilité), mais le marché a montré qu'à ce niveau de valorisation, **le ton doit rester en accélération** pour soutenir le cours.

> **À lire entre les lignes** : le T2 2026 illustre que pour une valeur à ~150× les bénéfices, **égaler les attentes ne suffit pas** — il faut les dépasser à chaque trimestre. La direction vend une exécution durable ; le moindre signal de normalisation du rythme est brutalement tarifé.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Dr Oguzhan Atay — Co-fondateur, Président-Directeur Général

**Profil** : Co-fondateur de BillionToOne en 2016 avec Sukrit Silas et David Tsao. Docteur (PhD), profil scientifique-entrepreneur ayant conçu la plateforme de comptage moléculaire au cœur de l'entreprise.

**Bilan chiffrable** :
- A mené l'entreprise de la R&D au **lancement commercial d'UNITY (2019)**, premier test cfDNA pour maladies récessives sans échantillon paternel
- Extension réussie à l'**oncologie (Northstar, 2023)** — un second marché
- **Bascule en rentabilité GAAP en 2025** avec un CA porté à 305 M$ (+100 %) — exécution rare dans le diagnostic
- **IPO réussie** (nov. 2025, ~314 M$ levés bruts, ~286 M$ nets) à 60 $, ouverture à ~100 $

**Ancienneté et alignement** : Fondateur présent depuis l'origine (2016), soit ~10 ans à la tête de l'entreprise. Détient une **participation significative** au capital (structure fondateur). Sa rémunération 2024 était composée à ~98 % de « autres rémunérations » (essentiellement equity) et ~2 % de salaire — **alignement fort** sur la valeur actionnariale. Note : il a **vendu des actions** post-IPO (ex. exercice/vente en juin et août 2026) — pratique courante de diversification à surveiller sans surinterpréter.

---

### Équipe dirigeante

Équipe renforcée pour la phase de scale : nomination récente d'un **Chief Medical Officer Oncologie** (Dr Ethan Dmitrovsky, ancien directeur du Frederick National Laboratory, figure reconnue de l'oncologie, juillet 2026) — signal de crédibilisation du pilier Northstar. Direction scientifique et commerciale structurée autour des deux lignes (prénatal, oncologie).

---

### Allocation du capital — l'enjeu

| Décision | Nature | Lecture |
|---|---|---|
| R&D plateforme | Investissement continu | Cœur du moat technologique |
| Extension oncologie | Développement organique | Second marché, forte pente |
| IPO 2025 (~286 M$ nets) | Renforcement bilan | Coussin de trésorerie, financement de la croissance |
| Nouveaux tests 2026 | Lancement produit | Élargissement du menu adressable |

**Tendance** : allocation **organique et disciplinée** — pas de méga-acquisition risquée, croissance financée par le cash-flow et le produit de l'IPO. Le **ROE/ROIC** devient positif avec la bascule en rentabilité, mais reste à consolider. La qualité de l'allocation se jugera sur la capacité à **transformer la R&D et les nouveaux tests en marge durable**.

---

### Signaux d'alerte

- **Comportement promotionnel modéré** : discours ambitieux (« category-defining generational company », « 4 piliers ») typique d'une valeur de croissance — à pondérer, sans excès manifeste.
- **Ventes d'actions du fondateur** : post-IPO, à surveiller dans la durée (montant vs participation totale).
- **Dépendance au fondateur** : profil scientifique-clé ; le risque « homme-clé » existe, atténué par une équipe qui s'étoffe.
- **Type de dirigeant** : **fondateur-scientifique**, archétype adapté à ce stade (innovation + scale). L'exécution opérationnelle et financière est **prouvée** (rentabilité atteinte), ce qui distingue favorablement ce profil de beaucoup de fondateurs déficitaires du secteur.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours

### Contexte
BillionToOne est coté depuis le **6 novembre 2025** : l'historique boursier est **court et très volatil**, dominé par le flux de résultats trimestriels et le sentiment sur les valeurs de croissance santé.

### Hausses significatives

**6 novembre 2025 — IPO explosive** : introduite à **60 $** (au-dessus de la fourchette 49-55 $), l'action ouvre à **100 $** et clôture son premier jour à **108,94 $ (+81,6 %)**. Signal d'un appétit fort pour le dossier — techno différenciée + rentabilité + croissance.

**Mars → août 2026 — Montée vers le pic** : après un creux hivernal, le titre progresse fortement, porté par des **beats successifs** (T4 2025, T1 2026 avec BPA record de 0,34 $ et relèvements de guidance). Il atteint un **plus haut historique de 150,44 $ le 5 août 2026**, juste avant les résultats du T2.

**Retours analystes positifs** : objectifs relevés (Guggenheim 120 → 125 $), notes d'achat réitérées — soutien du consensus jusqu'au T2.

---

### Baisses significatives

**12 mars 2026 — Plus bas historique (61,96 $)** : phase de digestion post-IPO et volatilité des valeurs de croissance ; le titre revient près de son prix d'introduction.

**6 août 2026 — Chute de ~39 %** : l'événement majeur. Malgré un CA T2 +64 %, la **réitération (non le relèvement) de la guidance** annuelle signale une décélération H2 (~29-38 % implicite). ~2,75 Md$ de capitalisation effacés en une séance. BPA non-GAAP sous consensus. Plusieurs objectifs abaissés (JPMorgan 145 → 130 $) tout en gardant l'achat.

**Août 2026 (post-chute)** : stabilisation autour de **92-97 $**, sous la cible consensus (~120 $).

---

### Facteurs structurels

- **Prime de croissance élevée** : le titre se paie sur la trajectoire (~150× les bénéfices), donc **hypersensible aux attentes** — égaler ne suffit pas, il faut dépasser
- **Momentum des beats** : tant que l'entreprise relève sa guidance, le cours monte ; la simple confirmation le fait chuter
- **Historique court & lock-ups** : peu de recul, forte volatilité, expiration des lock-ups post-IPO = pression vendeuse potentielle à surveiller
- **Sentiment sectoriel** : corrélation au sentiment sur les valeurs de diagnostic/biotech de croissance (cf. XBI)`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement
BillionToOne vient de basculer en rentabilité : le BPA est **encore mince et volatil** (base faible, éléments non récurrents, dilution post-IPO). Les estimations ci-dessous sont des **scénarios indicatifs** appuyés sur le consensus analyste disponible, pas des prévisions de précision.

### Hypothèses de modélisation

**Chiffre d'affaires** :
- Guidance 2026 : **450-465 M$** (+48-52 %), consensus ~455-456 M$
- Consensus 2027 : ~**578 M$** (croissance ~27 %) — décélération naturelle en base plus élevée
- Croissance secteur ~20 %/an ; BillionToOne conserve une prime de croissance grâce à l'oncologie et à l'expansion payeurs

**Marges** :
- Marge brute ~70 % (structurelle, en légère amélioration possible)
- Levier opérationnel : la croissance du CA dépasse celle des coûts fixes → **expansion de la marge opérationnelle** attendue à mesure que l'échelle progresse

**Coûts de financement** :
- Position de trésorerie nette positive (~549 M$ cash, ~91 M$ dette) → **charge financière faible**, voire produits financiers nets

**Dilution** :
- Actions émises à l'IPO + SBC (stock-based compensation) → **dilution continue** du nombre d'actions à intégrer

---

### Scénarios de BPA

| Exercice | Scénario | BPA estimé | Commentaire |
|---|---|---|---|
| 2025 (réalisé) | — | ~0,14-0,18 $ | Première année de rentabilité GAAP |
| 2026E | Consensus | **~0,80-1,00 $** | Forte progression ; T1 déjà à 0,34 $ |
| 2027E | Base | **~1,10-1,30 $** | Levier opérationnel + oncologie |
| 2028E | Base | **~1,50-2,00 $** | Si marge et croissance tiennent |

*Le consensus 2026 a nettement monté sur 90 jours (~0,44 $ → ~0,98 $), et 2027 vers ~1,26 $ — à confirmer après la décélération du T2.*

---

### Sensibilité

- **Scénario haussier** (couverture payeurs rapide, oncologie qui décolle, marge >70 %) : BPA 2028 vers le haut de la fourchette → justifierait un cours nettement au-dessus de la cible actuelle
- **Scénario de base** : croissance qui se normalise vers ~25-30 %, marge stable → valorisation soutenable si le multiple se dégonfle progressivement vers un niveau « croissance rentable » raisonnable
- **Scénario baissier** (décision payeurs défavorable, concurrence sur l'ASP, décélération plus marquée) : compression du BPA et du multiple simultanément — le titre reste **hypersensible** à toute déception

**Conclusion** : à ~150× les bénéfices naissants, la thèse repose sur la **durée de l'hypercroissance rentable**. Le vrai juge de paix n'est pas le BPA d'une année isolée mais la **trajectoire d'ASP, de couverture payeurs et de contribution oncologie** sur 3 ans. Le T2 2026 rappelle que la marge de sécurité est mince : le prix intègre déjà beaucoup de bonnes nouvelles.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Un profil rare : hypercroissance ET rentabilité** : BillionToOne croît de +64 % (T2) / +100 % (2025) **tout en étant rentable GAAP** — une combinaison quasi unique dans le diagnostic moléculaire, où Natera et Guardant restent déficitaires. Cette discipline financière est un différenciateur durable.

**2. Technologie propriétaire différenciante** : Le comptage moléculaire à la molécule unique (QCT/smNGS) permet des tests que les concurrents ne réalisent pas aussi bien : risque récessif sans échantillon paternel (UNITY), suivi de charge tumorale sans biopsie tissulaire (Northstar Response). Un vrai avantage clinique.

**3. Double moteur de croissance** : Le **prénatal** (base large, ASP en hausse) finance et stabilise, tandis que l'**oncologie** (×8 en a/a) offre un relais à forte pente sur un marché immense. La diversification réduit la dépendance à une seule ligne.

**4. Cercle vertueux de la couverture payeurs** : Chaque contrat de remboursement décroché relève simultanément volume ET ASP (+51 % volume, +35 % ASP en 2025), et renforce la barrière à l'entrée. Le levier a encore de la marge.

**5. Marge brute en expansion structurelle** : 53 % (2024) → 68 % (2025) → 70 % (T2 2026). Le levier opérationnel à mesure que l'échelle progresse peut faire décoller la marge nette.

**6. Bilan solide et correction récente** : ~549 M$ de trésorerie, dette faible, pas de risque de liquidité. La chute de −39 % post-T2 **améliore le rapport risque/rendement** vs le pic de 150 $, avec une cible consensus (~120 $) au-dessus du cours.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents

**1. Une valorisation qui ne pardonne pas** : À ~150× les bénéfices et ~8,5× le CA, le titre intègre une exécution durablement parfaite. La chute de −39 % après un T2 pourtant en croissance de 64 % en est la démonstration : **égaler les attentes ne suffit pas**, il faut les dépasser à chaque trimestre.

**2. Dépendance structurelle aux payeurs (>90 %)** : Le CA repose quasi entièrement sur le remboursement par des tiers. Une décision de tarification défavorable, un changement de politique Medicaid/Medicare ou une révision de code peut **comprimer l'ASP sans préavis** — frappant directement le cœur de la thèse.

**3. Concurrence de géants mieux capitalisés** : Natera (~39 Md$), Guardant Health, Myriad disposent de moyens supérieurs, de bases installées larges et peuvent **pression sur les prix** ou accélérer sur l'oncologie/prénatal. BillionToOne est le plus petit du groupe.

### Analyse pré-mortem
Que se passe-t-il si le titre vaut 50 $ dans 18 mois ? Scénario : la croissance décélère plus vite que prévu (base élevée + concurrence), un payeur majeur revoit l'ASP à la baisse, la marge plafonne, et le multiple se dégonfle de 150× vers ~40×. Même avec un BPA en hausse, la **compression du multiple** ferait chuter le cours. L'expiration des lock-ups ajouterait une pression vendeuse au pire moment.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat n'est pas « bonne ou mauvaise entreprise » (elle est bonne) mais « à quel prix ». La chute post-T2 a **rapproché le cours de la réalité fondamentale**, mais le titre reste cher et hypersensible. Bulls et bears surestiment tous deux leur capacité à prévoir le rythme exact d'une jeune valeur cotée depuis 9 mois. Le risque/rendement est **asymétrique et incertain** : la qualité justifie une position, mais la valorisation impose de la **dimensionner avec prudence** et d'accepter une volatilité extrême.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus & ASP — RISQUE MODÉRÉ À ÉLEVÉ
C'est le point le plus sensible d'un laboratoire dépendant du remboursement. Le CA dépend du **prix moyen réalisé (ASP)**, lui-même fonction des contrats payeurs et des estimations de recouvrement. 

**À surveiller** :
- Les **ajustements d'estimation** de revenus (variable consideration sous ASC 606) : un ASP estimé trop optimiste puis révisé créerait de la volatilité
- L'écart entre **revenus comptabilisés** et **encaissements effectifs** (créances, taux de recouvrement)
- La **concentration >90 %** sur le remboursement tiers — dépendance structurelle

### Créances clients & recouvrement — RISQUE MODÉRÉ
Dans un modèle payeurs, le **délai et le taux de recouvrement** sont clés. Une hausse des créances plus rapide que le CA, ou des provisions pour créances douteuses en hausse, signaleraient un durcissement des payeurs. À suivre trimestre après trimestre.

### Éléments non récurrents & mesures ajustées — RISQUE MODÉRÉ
Une **perte ponctuelle (~9,7 M$)** a impacté les 12 mois glissants à fin mars 2026. L'entreprise communique aussi en **non-GAAP** (le T2 a manqué le consensus non-GAAP). 

**À surveiller** : l'écart entre résultat GAAP et non-GAAP, et la récurrence des éléments qualifiés d'« exceptionnels ». Un empilement de « one-offs » masquerait la rentabilité réelle.

### Rémunération en actions (SBC) & dilution — RISQUE MODÉRÉ
Post-IPO, la **stock-based compensation** et les exercices d'options (le CEO a exercé/vendu des actions) diluent le nombre d'actions. 

**À surveiller** : le poids de la SBC dans les charges, son exclusion des mesures ajustées, et l'évolution du nombre d'actions dilué (impact direct sur le BPA).

### Goodwill & incorporels — RISQUE FAIBLE
Croissance **organique** (pas de méga-acquisition), donc peu de goodwill — un point favorable vs les modèles de roll-up. La valeur repose sur des **brevets** et de la R&D capitalisée, à examiner (durée d'amortissement, tests éventuels).

### Parties liées & gouvernance — RISQUE MODÉRÉ
Structure **fondateur** (Atay & co-fondateurs) avec participation significative et, comme beaucoup d'IPO tech/santé récentes, potentielle **structure de vote à plusieurs classes** — à documenter dans les annexes (droits de vote vs capital économique).

### Flux de trésorerie vs résultat — RISQUE FAIBLE
Cash-flow opérationnel positif dès 2025, trésorerie abondante (~549 M$). 

**À surveiller** : la **conversion du résultat en cash** une fois la croissance du BFR (créances) prise en compte — dans un modèle payeurs, le BFR peut consommer du cash en phase d'accélération.

---

### Verdict global
**Risque comptable : MODÉRÉ.** BillionToOne présente un profil **plus sain** que la moyenne des diagnostics en hypercroissance : rentabilité GAAP réelle, croissance organique (peu de goodwill), bilan solide. Les zones de vigilance sont **inhérentes au modèle payeurs** — estimation de l'ASP, recouvrement des créances, éléments non récurrents et SBC. Pas de signal de fraude identifié, mais la jeunesse de la cotation impose de **suivre de près les 10-Q/10-K** et de se méfier des écarts GAAP / non-GAAP.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour le Dr Atay et l'équipe BillionToOne

### Stratégie et avantage concurrentiel

**1.** La réitération (non le relèvement) de la guidance au T2 2026 a été lue comme une décélération H2. **Est-ce une prudence de gestion des attentes** ou le signe d'un ralentissement structurel de la demande ? Quels indicateurs avancés (volumes, nouveaux contrats payeurs) devons-nous suivre ?

**2.** Votre technologie de comptage moléculaire (QCT/smNGS) est le cœur du moat. **Quelle est la durée de protection** de vos brevets clés, et qu'est-ce qui empêche Natera ou Guardant de répliquer vos performances sur le prénatal récessif et le suivi ctDNA ?

**3.** L'oncologie (Northstar) croît beaucoup plus vite que le prénatal mais part de petit. **Quand pèsera-t-elle une part significative du CA**, et quelle est votre trajectoire de couverture payeurs sur cette ligne ?

### Dépendance aux payeurs et ASP

**4.** Plus de 90 % de votre CA dépend du remboursement par des tiers. **Quelle est votre exposition aux trois plus gros payeurs**, et qu'advient-il de l'ASP si l'un d'eux révise sa tarification à la baisse ?

**5.** L'ASP a progressé de +35 % en 2025. **Quelle part de cette hausse est durable** (mix, nouveaux tests) vs conjoncturelle (rattrapage de couverture) ? Où voyez-vous l'ASP se stabiliser ?

**6.** Comment gérez-vous le **risque d'estimation des revenus** (variable consideration) ? Quel est votre taux de recouvrement effectif vs comptabilisé, et son évolution ?

### Croissance et marges

**7.** Après un H1 à +74 %, quelle **croissance organique normalisée** visez-vous à moyen terme une fois la base de comparaison élevée ?

**8.** Votre marge brute est passée de 53 % à 70 %. **Quel est le plafond structurel** de cette marge, et quels leviers (coût par test, automatisation) restent à activer ?

**9.** Vous êtes rentable GAAP tout en investissant. **Quel arbitrage** faites-vous entre expansion de marge et réinvestissement dans la R&D / le commercial / les nouveaux tests ?

### Concurrence et risques

**10.** Natera (~39 Md$) et Guardant sont bien mieux capitalisés. **Que se passe-t-il si l'un d'eux lance une guerre de prix** sur le prénatal ou l'oncologie ? Quelle est votre résilience de marge ?

**11.** Quel est le **risque réglementaire** (LDT, FDA, politiques Medicaid/Medicare) le plus susceptible d'affecter votre modèle dans les 24 mois ?

**12.** L'expiration des **lock-ups** post-IPO approche. Comment gérez-vous la communication et le risque de pression vendeuse sur un titre déjà volatil ?

### Gouvernance et vision

**13.** Vous avez vendu des actions post-IPO. **Pouvez-vous préciser** la logique (diversification vs signal) et votre engagement de détention à long terme ?

**14.** BillionToOne repose beaucoup sur vous, fondateur-scientifique. **Quel est le plan de succession** et de continuité si vous deviez vous retirer ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. La valorisation intègre une perfection improbable

À **~150× les bénéfices** et **~8,5× le CA**, BillionToOne est tarifé pour une exécution parfaite et durable. La démonstration a eu lieu le 6 août 2026 : malgré un CA en hausse de **64 %**, le titre a **chuté de 39 %** — simplement parce que la guidance a été confirmée plutôt que relevée. **Un business où égaler les attentes fait perdre 2,75 Md$ de capitalisation en une séance est un business dont le prix, pas la qualité, est le problème.** À ce multiple, la marge de sécurité est quasi nulle.

### 2. La dépendance aux payeurs est le talon d'Achille

**Plus de 90 % du chiffre d'affaires** dépend du remboursement par des tiers. C'est une variable **exogène et incontrôlable** : une décision de tarification défavorable d'un grand assureur, un changement de politique Medicaid/Medicare, ou une révision de code de facturation peut comprimer l'ASP du jour au lendemain. Or l'ASP (+35 % en 2025) a porté la moitié de la croissance et l'essentiel de l'expansion de marge. **Si l'ASP se retourne, la thèse entière vacille** — et le management ne maîtrise pas ce levier.

### 3. La décélération est déjà là, masquée par les grands chiffres

Les bulls citent +64 % au T2. Mais la séquence est claire : **+113 % (T4 25) → +84 % (T1 26) → +64 % (T2 26)**. Et la guidance annuelle maintenue implique un H2 à **~29-38 %** après un H1 à +74 %. La loi des grands nombres frappe : la croissance ralentit structurellement, et à ~150× les bénéfices, **chaque point de décélération se paie cher**.

### 4. Un petit poucet face à des géants mieux armés

BillionToOne (~4,5 Md$) affronte **Natera (~39 Md$)**, **Guardant Health**, **Myriad**, **GeneDx** — tous mieux capitalisés, avec des bases installées larges et des équipes commerciales étendues. Sur le prénatal, Natera domine avec Panorama ; sur l'oncologie, Guardant et Natera (Signatera) sont en avance sur la MRD. **Rien n'empêche un géant de comprimer les prix** ou d'accélérer sur les niches de BillionToOne. Les bulls extrapolent une avance technologique sans intégrer la puissance de feu adverse.

### 5. Rentabilité mince et mesures ajustées à surveiller

La rentabilité GAAP est **réelle mais mince** (RN 2025 de 2,9 M$, marge nette ~1 %). Une perte non récurrente de ~9,7 M$ a pesé sur les 12 mois glissants, et le T2 a **manqué le consensus non-GAAP**. Un business valorisé sur ses profits futurs, mais dont les profits actuels sont si étroits qu'un seul élément exceptionnel les efface, laisse peu de place à l'erreur. Méfiance sur l'écart GAAP / non-GAAP et la récurrence des « one-offs ».

### 6. Titre jeune, volatil, avec des lock-ups devant lui

Coté depuis novembre 2025 seulement, BLLN a un **historique de 9 mois**, une volatilité extrême (60 $ → 150 $ → 94 $) et des **lock-ups post-IPO** dont l'expiration créera une pression vendeuse mécanique. Les investisseurs pré-IPO et les insiders (le CEO a déjà vendu) peuvent alléger sur un titre encore cher.

### Le scénario catastrophe unique
**Une révision défavorable de l'ASP par un payeur majeur, simultanée à une décélération de croissance plus marquée que prévu.** Dans ce cas : le CA ralentit, la marge se comprime, le multiple se dégonfle de 150× vers 40×, et l'expiration des lock-ups ajoute de l'offre. Le titre pourrait être divisé par deux **même si l'entreprise reste rentable**. Probabilité ? Non négligeable (~25-35 %) sur 18 mois, vu la sensibilité démontrée au T2.

### Conclusion short
BillionToOne est **une excellente entreprise à un prix exigeant**. La technologie est réelle, la rentabilité aussi — mais le titre intègre une hypercroissance rentable qui doit se prolonger sans accroc, dans un secteur concurrentiel et sous la dépendance d'un système de remboursement qu'elle ne contrôle pas. La chute de −39 % post-T2 n'est pas une aberration : c'est **le marché qui apprend à tarifer la décélération**. À ~94 $, le débat n'est pas la qualité — c'est de savoir combien de perfection est déjà dans le cours.`,
  },
];

export default { ...meta, modules };
