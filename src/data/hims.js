// ============================================================
//  DOSSIER : Hims & Hers Health, Inc. (HIMS)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "hims",                     // identifiant d'URL : /dossier/hims
  ticker: "HIMS",
  name: "Hims & Hers Health, Inc.",
  exchange: "NYSE",
  sector: "Santé numérique grand public (télésanté)",
  initials: "HIMS",                 // affiché dans la pastille
  tagline: "Plateforme de télésanté par abonnement : consultation en ligne, ordonnance et traitement livré à domicile, de la perte de poids à la dermatologie.",
  riskScore: 40,                    // score du rapport de risque (ou null)
  riskLabel: "Risque élevé",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "hims.html",
  updated: "2026-10",               // période des données
  published: "2026-10-09",          // date exacte de publication
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Hims & Hers est une **plateforme de santé numérique grand public** cotée au NYSE depuis janvier 2021 (fusion avec un SPAC). Fondée en 2017 par **Andrew Dudum**, elle vend aux particuliers un parcours de soin **100 % en ligne** : questionnaire médical, consultation (souvent asynchrone) avec un praticien indépendant, ordonnance, puis **traitement livré à domicile** — le tout facturé sous forme d'**abonnement mensuel**.

En termes simples : Hims & Hers est une **marque de consommation** (comme une marque de cosmétiques ou de streaming) qui s'est greffée sur la **médecine de prescription**. Elle ne découvre pas de médicaments ; elle capte le patient, organise la consultation, fabrique ou achète le traitement et le livre.

**Chiffres clés** :
- **CA 2025 : 2,35 Md$ (+59 %)** ; CA T2 2026 : **753 M$ (+38 %)**
- **~2,9 millions d'abonnés** à fin juin 2026 (+19 %), revenu mensuel moyen par abonné de **92 $**
- Objectifs 2030 de la direction : **≥ 6,5 Md$ de CA et 1,3 Md$ d'EBITDA ajusté**

## Principaux produits et services

Le catalogue est organisé en **« spécialités »**, sous deux marques (**Hims** pour les hommes, **Hers** pour les femmes) :
- **Perte de poids** : traitements GLP-1 de marque (Wegovy injectable et en comprimé, Ozempic via le partenariat Novo Nordisk depuis mars 2026), formulations personnalisées résiduelles, metformine et autres options orales
- **Santé sexuelle** : traitements de la dysfonction érectile et de l'éjaculation précoce (génériques, formulations combinées)
- **Dermatologie** : chute de cheveux (finastéride, minoxidil, sprays combinés), acné, anti-âge — hommes et femmes
- **Santé mentale** : anxiété, dépression (consultations et traitements)
- **Hormones** : testostérone (spécialité qui croît le plus vite hors perte de poids), ménopause et périménopause
- **Labs** : bilans sanguins (partenariat Quest Diagnostics, prélèvement à domicile via YourBio)

Quatre spécialités dépassaient chacune **100 M$ de CA annuel** fin 2025 : perte de poids, dermatologie homme, santé sexuelle, dermatologie femme. **64 % des abonnés** utilisent une **solution personnalisée** (dosage ou combinaison propre à la plateforme).

## Clients, fournisseurs, concurrents

**Clients** : des **particuliers** qui paient de leur poche (ou via HSA/FSA), majoritairement millennials et génération Z, en quête de discrétion et de simplicité. Pas de dépendance à l'assurance maladie — c'est un choix stratégique (prix transparents, pas de friction avec les assureurs).

**Fournisseurs** : laboratoires pharmaceutiques (**Novo Nordisk** pour Wegovy/Ozempic ; fabricants de génériques), fournisseurs de principes actifs pour la préparation magistrale, **pharmacies du groupe** (préparation et expédition), transporteurs (livraison), **plateformes publicitaires** (Meta, Snap, Google, TV).

**Concurrents** : **Ro** (non coté, rival direct le plus proche), **LifeMD** (LFMD), **Teladoc** (TDOC) ; les **laboratoires eux-mêmes** via leurs canaux directs (**LillyDirect** d'Eli Lilly, **NovoCare** de Novo Nordisk) ; **Amazon One Medical** ; une myriade de cliniques en ligne et de pharmacies magistrales sur le GLP-1. À l'international : **Zava** et **Eucalyptus** ont été absorbés par Hims & Hers, qui affronte désormais les acteurs locaux en Europe, au Canada, en Australie et au Japon.

## Modalités contractuelles et de paiement

- **Abonnement mensuel ou multi-mois**, prélevé par carte bancaire, **paiement d'avance** : le client paie avant d'être livré — le besoin en fonds de roulement est donc **favorable** (peu de créances).
- **Perte de poids de marque** : adhésion à **39 $ le premier mois puis 149 $/mois**, **médicament facturé en sus** (à partir de 149 $/mois). Ce passage d'un produit tout compris à 49 $/mois (préparation magistrale) vers une offre de marque plus chère est au cœur de la transformation de 2026.
- **Pas de contrat long terme** : le client peut résilier à tout moment, ce qui fait du **taux de désabonnement** la variable critique. Les modalités d'abonnement et de résiliation sont précisément l'objet de la **plainte de la FTC** déposée en juillet 2026.

> **Note de prudence** : 2026 est une **année de transition forcée**. L'activité phare de 2024-2025 (sémaglutide préparé en pharmacie à bas prix) s'est effondrée en février 2026 sous la pression de la FDA et de Novo Nordisk. Les chiffres 2026 mêlent l'extinction de cet ancien modèle, la montée du GLP-1 de marque et l'intégration d'Eucalyptus — toute comparaison historique doit être lue avec ce prisme.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Hims & Hers dans la chaîne de valeur

Hims & Hers occupe une position d'**intégrateur verticalisé** entre l'industrie pharmaceutique en amont et le patient en aval. Sa singularité : posséder à la fois **la marque, le parcours numérique, la relation patient et une partie de l'outil de fabrication et de dispensation**. C'est ce qui la distingue d'une simple place de marché de téléconsultation.

### Amont — Intrants

**Médicaments de marque** :
- **Novo Nordisk** — Wegovy (injectable et comprimé), Ozempic, depuis le partenariat du **9 mars 2026** (fin du litige)
- Le partenariat avec **Eli Lilly** n'existe pas : Lilly vend Zepbound en direct (LillyDirect) et via d'autres plateformes

**Génériques et principes actifs** :
- Fabricants de génériques (sildénafil, tadalafil, finastéride, minoxidil, etc.)
- Fournisseurs de **principes actifs (API)** pour la préparation magistrale — dont les API GLP-1, désormais fortement restreints par la FDA depuis février 2026

**Infrastructure médicale et diagnostique** :
- **Praticiens indépendants** affiliés (médecins, infirmiers praticiens) — juridiquement distincts de la société
- **Quest Diagnostics** (plus de 2 000 centres de prélèvement) et **YourBio** (racheté, prélèvement sanguin à domicile) pour l'offre Labs

**Technologie et acquisition client** :
- Hébergement, IA et données (plateforme propriétaire)
- **Meta, Snap, Google, YouTube, TV** (campagnes massives, dont le Super Bowl 2025) — les données partagées avec ces plateformes sont au cœur des griefs de la FTC

---

### Hims & Hers — Fabrication, dispensation, distribution

**Pharmacies et sites détenus** : première pharmacie magistrale acquise en 2021 ; plus de **300 M$ investis en trois ans**, portant les installations américaines à **plus de 1 million de pieds carrés** (~93 000 m²). Acquisition en 2025 d'une **usine de peptides en Californie**.

**Parcours numérique** : application, questionnaire, consultation asynchrone, messagerie, suivi, renouvellement automatique.

**International** : **Zava** (Europe, 2025), une acquisition au **Canada** (2025), **Eucalyptus** (Australie, Japon, Allemagne, Canada — clôturée en juin 2026).

---

### Aval — Clients finaux

**Particuliers** : ~2,9 millions d'abonnés, paiement direct, livraison à domicile sous emballage discret.

**Payeurs indirects** : comptes santé **HSA/FSA** (éligibles), pas d'assurance maladie classique.

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                      HIMS & HERS                  AVAL
Novo Nordisk (Wegovy,  →   Marque + appli + IA     →   ~2,9 M abonnés
 Ozempic)                  Praticiens affiliés          (paiement direct,
Génériqueurs, API          Pharmacies détenues           HSA/FSA)
Quest, YourBio (labs)      Usine peptides (CA)          US ~83 %, Intl ~17 %
Meta, Snap, Google (pub)   Zava, Eucalyptus (Intl)      Livraison à domicile
\`\`\`

**Le pari central** : en possédant le client, les données et une partie de la production, Hims & Hers peut **personnaliser les traitements**, **comprimer les coûts** et **ajouter des spécialités** à faible coût marginal. La faiblesse symétrique : la société dépend de **régulateurs (FDA, FTC)** et de **laboratoires (Novo Nordisk)** qu'elle ne contrôle pas, et qui ont démontré en 2025-2026 qu'ils pouvaient redessiner son modèle en quelques semaines.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Hims & Hers ne publie **qu'un seul secteur opérationnel** au sens comptable. La société ne communique ni EBITDA ni résultat net par spécialité ; elle publie le CA par **zone géographique** (États-Unis / Reste du monde), le nombre d'abonnés et le revenu mensuel par abonné. La ventilation par spécialité ci-dessous repose sur les **indications qualitatives** de la direction.

### Évolution du groupe

| Exercice | CA | Croissance | Marge brute | Résultat net | EBITDA ajusté |
|---|---|---|---|---|---|
| 2023 | ~0,87 Md$ | +65 % | ~82 % | -24 M$ | ~0,07 Md$ |
| 2024 | 1,48 Md$ | +69 % | 79 % | +126 M$ | 177 M$ (12 %) |
| 2025 | 2,35 Md$ | +59 % | 74 % | +128 M$ | 318 M$ (14 %) |
| S1 2026 | 1,36 Md$ | +20 % | ~64-65 % | -178 M$ | 105 M$ (8 %) |
| 2026E (guidance) | 3,1-3,3 Md$ | +32-41 % | En repli | Perte | 275-325 M$ |

### Répartition géographique

| Zone | 2025 | T1 2026 | T2 2026 | Tendance |
|---|---|---|---|---|
| États-Unis | 2 214 M$ (+53 %) | 530 M$ (-8 %) | 622 M$ (+16 %) | Rechute puis réaccélération |
| Reste du monde | 134 M$ (+399 %) | 78 M$ (×10) | 131 M$ (×17) | Croissance par acquisitions |
| **Total** | **2 348 M$** | **608 M$** | **753 M$** | |

**Point clé** : le **T1 2026** marque le point bas — le CA américain recule de 8 % avec l'arrêt brutal du sémaglutide magistral. Le **T2 2026** montre la réaccélération (+16 % aux États-Unis) grâce au GLP-1 de marque, et l'international pèse déjà **~17 % du CA** (dont ~40 M$ d'Eucalyptus sur un mois).

### Spécialités (estimation qualitative)

| Spécialité | Poids / statut | Dynamique |
|---|---|---|
| Perte de poids | Plus grosse spécialité depuis 2025 | Bascule du magistral vers la marque (Novo) |
| Dermatologie homme (cheveux) | > 100 M$/an | Cœur historique, mature, rentable |
| Santé sexuelle | > 100 M$/an | Mature, concurrence des génériques |
| Dermatologie femme (Hers) | > 100 M$/an | Hers proche de 1 Md$ de CA en 2025 (+100 %) |
| Hormones (testostérone, ménopause) | En route vers 100 M$/an | Croissance la plus rapide hors poids |
| Santé mentale, Labs, peptides | Émergents | Options de croissance |

---

### Profil de marge et rentabilité

- **Marge brute** : de **~82 % (2023)** à **74 % (2025)** puis **64 % au T2 2026**. Deux causes : le GLP-1 de marque est un produit **acheté**, pas fabriqué, et il est expédié **mensuellement** (et non par lots de plusieurs mois) ; l'international (Eucalyptus) a des marges plus faibles.
- **Marketing** : **~34-35 % du CA** au T2 2026, en amélioration de 5 points sur un an — c'est le principal levier opérationnel.
- **EBITDA ajusté** : de 16 % de marge au T1 2025 à **7-8 %** au S1 2026. Cible 2030 implicite : **20 %**.
- **Résultat net** : **perte de 178 M$ au S1 2026**, alourdie par des charges non récurrentes (restructuration GLP-1, litiges, acquisitions — environ 81 M$ au T2).

**Lecture** : Hims & Hers a **échangé de la marge contre de la légitimité**. Le modèle magistral à 49 $/mois était très rentable mais juridiquement fragile ; le modèle de marque est légal et soutenu par Novo Nordisk, mais structurellement moins margé. Toute la thèse 2027-2030 repose sur la capacité à **reconstruire la marge** par l'échelle, le mix (hormones, labs, peptides) et la baisse du coût d'acquisition.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats) — réels et revendiqués

### 1. La marque grand public — le moat le plus tangible
Hims & Hers a bâti en moins de dix ans **la marque de télésanté la plus connue des États-Unis**, notamment auprès des 25-45 ans. Elle a **dédramatisé** des sujets intimes (calvitie, dysfonction érectile, poids) avec un marketing de marque de mode plutôt que de laboratoire. Cette notoriété réduit le coût d'acquisition et crée un **réflexe de première destination** : c'est l'actif le plus difficile à copier pour un nouvel entrant.

### 2. Échelle et intégration verticale
Avec ~2,9 millions d'abonnés, des **pharmacies détenues**, une usine de peptides et des praticiens affiliés, Hims & Hers maîtrise l'essentiel de la chaîne. L'échelle permet d'**amortir le marketing** (34 % du CA contre plus de 40 % il y a deux ans), de négocier avec les fournisseurs et de lancer une **nouvelle spécialité à coût marginal faible** sur une base clients existante. Plus de **20 % des abonnés** traitent déjà plusieurs pathologies sur la plateforme.

### 3. Données et personnalisation
La plateforme accumule des données cliniques et comportementales sur des millions de patients. Elle les utilise pour **personnaliser** les traitements (64 % des abonnés) et pour l'IA (recommandation, triage, rétention). C'est un avantage **réel mais encore peu démontré** financièrement — et désormais **juridiquement exposé** (la FTC conteste le partage de données de santé avec des plateformes publicitaires).

### 4. Partenariat avec Novo Nordisk — un actif récent
Novo Nordisk a qualifié Hims & Hers de l'un de ses partenaires de télésanté les **plus volumineux**. Ce partenariat donne accès aux GLP-1 de marque, y compris le **comprimé Wegovy**. **Mais** ce n'est pas un moat : Novo distribue aussi via d'autres plateformes, a déjà rompu une première collaboration en juin 2025, et fixe seul le prix.

### 5. Coûts de changement — FAIBLES
C'est la **faiblesse structurelle** du modèle. Un abonné peut passer chez Ro, LillyDirect ou une clinique locale en quelques clics ; le médicament de marque est **strictement identique** partout. La fidélité tient à l'expérience, au prix et à la commodité — le moat doit être **regagné chaque mois**.

## Positionnement vs concurrence

| Critère | Hims & Hers | Ro (non coté) | LillyDirect / NovoCare | Teladoc |
|---|---|---|---|---|
| Notoriété grand public | Très élevée | Élevée | Moyenne (marques produit) | Élevée (B2B) |
| Étendue du catalogue | Très large (6+ spécialités) | Large | Mono-labo | Large mais B2B |
| Intégration (pharmacie) | Forte | Moyenne | Pharmacies partenaires | Faible |
| Accès GLP-1 de marque | Novo | Novo + Lilly | Propre labo | Limité |
| International | En forte croissance | Faible | Mondial (labo) | Présent |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Moyen** — la marque autorise une prime de prix sur les traitements génériques et personnalisés, mais **pas sur le GLP-1 de marque**, vendu au même prix que chez les autres distributeurs.
- **Vis-à-vis des laboratoires** : **Faible** — face à Novo Nordisk, Hims & Hers est un canal parmi d'autres ; l'épisode de 2025-2026 a montré qui détenait le pouvoir.
- **Vis-à-vis des génériqueurs et fournisseurs d'API** : **Élevé** — gros volumes, alternatives nombreuses.
- **Vis-à-vis des plateformes publicitaires** : **Faible à moyen** — dépendance forte à Meta et Google pour l'acquisition.
- **Vis-à-vis des régulateurs** : **Nul** — la FDA (préparations magistrales, peptides), la FTC (abonnements, données) et les États (pratique médicale) peuvent modifier les règles du jeu unilatéralement.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Santé numérique et écosystème GLP-1 (octobre 2026)

| Société | Code Bloomberg | Capitalisation (Md$) | EV/CA | EV/EBIT | P/E | Rendement div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **Hims & Hers** | **HIMS US** | **~6,9** | **~2,4x (2026E)** | **n.s. (perte)** | **n.s. (~86x fwd)** | **0 %** | **~0 % (de -20 % à +28 %)** |
| Doximity | DOCS US | ~4,9 | ~6,5x | ~21x | ~33x | 0 % | ~18 % |
| Teladoc Health | TDOC US | ~1,0 | ~0,5x | n.s. | n.s. | 0 % | Très négatif |
| LifeMD | LFMD US | ~0,13 | ~0,8x | n.s. | n.s. | 0 % | Négatif |
| Novo Nordisk | NVO US | ~168 | ~3,6x | ~7x | ~9,5x | ~3,4 % | > 60 % |
| Eli Lilly | LLY US | ~1 060 | ~13,9x | ~28x | ~40x | ~0,6 % | > 60 % |
| Ro | Non coté | N/A | N/A | N/A | N/A | N/A | N/A |

*Données estimatives sur la base des cours au 7 octobre 2026 (StockAnalysis, publications des sociétés). Les multiples de Hims & Hers sont calculés sur une valeur d'entreprise de ~7,6 Md$ et le point médian de la guidance 2026. À affiner sur les dépôts SEC directs.*

---

### Analyse comparative

**Hims & Hers — Entre deux mondes**
Le titre ne se valorise ni comme une plateforme logicielle (Doximity, ~6,5x le CA, très rentable), ni comme une télésanté en déclin (Teladoc, ~0,5x). À **~2,4x le CA 2026E** et **~25x l'EBITDA ajusté 2026E**, le marché paie une croissance de 30 % et plus, mais **décote** l'absence de bénéfice GAAP, le risque réglementaire et la dépendance à Novo Nordisk. Le consensus est **« Conserver »** (objectif moyen ~31 $, soit ~5 % de potentiel).

**Les laboratoires — Partenaires et concurrents à la fois**
**Eli Lilly** (LillyDirect) et **Novo Nordisk** (NovoCare) vendent désormais **en direct** aux patients. Ils sont à la fois les fournisseurs, les concurrents et les arbitres de Hims & Hers sur le GLP-1. Novo, en difficulté (P/E ~9,5x), a besoin des volumes de Hims & Hers ; Lilly, dominant, n'en a pas besoin. C'est l'asymétrie clé du secteur.

**Teladoc et LifeMD — Le miroir de l'échec**
Teladoc (CA ~2,5 Md$, capitalisation ~1 Md$) montre ce qu'il advient d'une télésanté **sans marque grand public ni pouvoir de prix** : dépréciations massives, croissance nulle. LifeMD (~0,13 Md$) illustre la difficulté d'un acteur sous-dimensionné face à Hims & Hers. Ces deux cas valident la **thèse d'échelle** de Hims & Hers.

**Ro — Le rival le plus dangereux**
Non coté, Ro distribue **à la fois Novo et Lilly**, a une marque forte et des investisseurs patients. Sur le GLP-1 de marque, Ro propose la même molécule, au même prix, avec un catalogue labo plus large.

---

### Le ratio qui compte : EV/EBITDA ajusté vs croissance
À ~25x l'EBITDA 2026E et ~5,8x l'objectif 2030 (1,3 Md$), Hims & Hers est **bon marché si la cible 2030 est atteinte**, et **cher si la marge reste bloquée sous 10 %**. La comparaison de P/E classiques est peu informative tant que le résultat GAAP reste négatif.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats T2 2026 (publiés le 10 août 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Consensus / guidance | Écart |
|---|---|---|---|---|
| Chiffre d'affaires | **753,2 M$** (+38 %) | 544,8 M$ | Guidance 680-700 M$ | **Battu de ~9 %** |
| Abonnés | **2,89 M** (+19 %) | 2,44 M | — | Solide |
| Revenu mensuel par abonné | **92 $** (+21 %) | 76 $ | — | Effet prix GLP-1 de marque |
| Marge brute | **64 %** | 76 % | — | **-12 points** |
| EBITDA ajusté | **60,3 M$** (8 %) | 82,2 M$ (15 %) | Guidance 35-55 M$ | **Au-dessus** |
| Résultat net | **-86,3 M$** | +42,5 M$ | — | Perte |
| BPA GAAP | **~-0,37 $** | ~+0,17 $ | ~-0,05 $ | **Manqué largement** |
| Free cash-flow | **-68,2 M$** | -69,4 M$ | — | Négatif |

**Lecture** : un trimestre **à deux visages**. Le **CA bat nettement** les attentes et la guidance annuelle est relevée ; mais la **rentabilité GAAP déçoit fortement**, plombée par la marge brute et ~81 M$ de charges non récurrentes.

---

### Facteurs clés

- **Perte de poids de marque** : l'élargissement de l'offre Novo Nordisk (mars 2026) a relancé le recrutement — **+300 000 abonnés nets** sur le trimestre.
- **États-Unis** : CA de **622 M$ (+16 %)**, après **-8 %** au T1 — c'est la vraie réaccélération organique.
- **International** : **131 M$**, multiplié par 17, dont **~40 M$ d'Eucalyptus** (un mois de consolidation). Trois marchés internationaux dépassent un rythme annuel de 100 M$.
- **Testostérone** : spécialité la plus dynamique hors perte de poids, en route vers 100 M$ de CA annuel.

---

### Évolution des marges

- **Marge brute** : de 76 % à **64 %** (-6 points sur le seul trimestre précédent). Causes : produit de marque **acheté** à Novo, expédition **mensuelle** (et non trimestrielle), poids croissant de l'international. La direction **prévient que la pression continuera au S2**.
- **Marketing** : **~34 % du CA** (-5 points sur un an) — levier qui compense en partie.
- **EBITDA ajusté** : 8 % de marge, +1 point vs T1.

---

### Prévisions et perspectives

- **T3 2026** : CA de **880-900 M$** (~+48 % sur un an) ; EBITDA ajusté de **75-95 M$**
- **2026** : CA relevé à **3,1-3,3 Md$** (contre 2,8-3,0 Md$) ; EBITDA ajusté **ramené à 275-325 M$** (contre 275-350 M$) — **plus de croissance, moins de marge**
- Retour à un **free cash-flow positif au S2 2026** attendu ; **rentabilité GAAP visée en 2027** selon le directeur financier
- Objectifs 2030 réaffirmés : **≥ 6,5 Md$ de CA et 1,3 Md$ d'EBITDA ajusté**
- **Changement de ton** : plus offensif qu'au T1 (« réaccélération significative »), mais avec un aveu explicite sur la marge

---

### Signaux d'alerte dans le bilan

- **Trésorerie et placements CT** : **841 M$** (après Eucalyptus), soutenus par l'émission convertible de mai
- **Dette** : ~**1,55 Md$** au total — obligations convertibles à **0 %** (1 Md$ échéance 2030 + 350 M$ échéance 2032, conversion à ~29,53 $) ; dette nette ~**0,7 Md$**
- **Flux de trésorerie opérationnel négatif** (-35,9 M$) au T2 — inhabituel pour une société historiquement génératrice de cash
- **Goodwill et incorporels** en forte hausse avec Eucalyptus (~1,15 Md$)
- **Contentieux** : plainte FTC (juillet 2026), enquête SEC en cours, renvoi HHS vers le DOJ (pas de procédure formelle à ce stade)

---

### Réaction du marché

Le titre a reculé d'**environ 6 %** après la publication (de ~32 $), avant de rebondir jusqu'à **34,46 $** le 21 août, puis de se stabiliser autour de **27-31 $**. Le marché avait déjà intégré une forte reprise du CA ; il a **sanctionné la marge** et récompensé ensuite la **visibilité sur la croissance**. Élément inhabituel par rapport à l'historique : une société qui affichait **15 % de marge d'EBITDA et du cash-flow positif** en 2025 publie désormais des **pertes GAAP et un FCF négatif**.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2024-2026

**2024 (euphorie GLP-1)** : Ton **conquérant**. Le sémaglutide préparé en pharmacie à bas prix devient le moteur de l'hypercroissance (+69 %). Andrew Dudum présente la personnalisation comme une **révolution de l'accès au soin**.

**2025 (confrontation)** : Ton **combatif**. Après la fin de la pénurie de sémaglutide (février 2025) et la rupture de la première collaboration avec Novo Nordisk (juin 2025), la direction défend publiquement la préparation « personnalisée » et attaque les pratiques de Novo. La direction vise alors plus de 725 M$ de CA en perte de poids pour 2025, et lance les **objectifs 2030** (6,5 Md$ / 1,3 Md$) comme une démonstration de confiance.

**Février 2026 (crise)** : Ton **défensif**. Le lancement d'un comprimé copiant le Wegovy oral provoque la riposte de la FDA, un procès de Novo et un renvoi HHS vers le DOJ. La guidance 2026 (2,7-2,9 Md$) déçoit ; la direction recadre vers l'**international** et les **nouvelles spécialités**.

**Mai 2026 (pivot assumé)** : Ton **de reconstruction**. Le T1 est présenté comme un « **pivot stratégique** » vers le GLP-1 de marque ; restructuration de 33,5 M$ ; passage à une **lettre aux actionnaires annuelle**.

**Août 2026 (réaccélération)** : Ton **de nouveau offensif mais lucide**. « Réaccélération significative », guidance relevée, mais **aveu explicite** sur la pression durable de la marge brute.

---

### Priorités répétées du management

**1. Devenir la plateforme de santé « par défaut »** — Dudum répète l'ambition d'être le premier réflexe santé des consommateurs, au-delà de la perte de poids.

**2. L'international comme second moteur** — Zava, Canada, Eucalyptus : objectif de **plus de 1 Md$ de CA international d'ici trois ans**.

**3. Diversification des spécialités** — hormones (testostérone, ménopause), Labs, santé mentale, **peptides** (dès que la FDA élargira la préparation magistrale), et une **piste d'objet connecté** évoquée.

**4. IA et efficacité** — recrutement d'un CTO venu de Cruise, d'une directrice produit venue de Robinhood ; l'IA est présentée comme le levier de baisse du coût de service et d'acquisition.

**5. Relation apaisée avec les laboratoires** — Novo Nordisk est désormais présenté comme un partenaire stratégique ; la préparation magistrale de GLP-1 est réduite à des cas « cliniquement nécessaires ».

---

### Analyse du sentiment

- **Confiance** : **Très élevée et constante**, quelle que soit la conjoncture — y compris au pire de la crise de février 2026. C'est une force (vision tenace) **et** un signal d'alerte : le discours a peu varié alors que le modèle a changé radicalement.
- **Transparence** : **Moyenne et en recul** — abandon de certains indicateurs (revenu en ligne par abonné remplacé par un nouvel indicateur en 2026), passage à une lettre annuelle, aucune ventilation de la rentabilité par spécialité.
- **Cohérence stratégique** : **Faible sur le GLP-1** (magistral → collaboration Novo → conflit → copie du comprimé → partenariat Novo en dix-huit mois), **forte sur la vision plateforme**.

> **À lire entre les lignes** : la direction vend une **trajectoire de plateforme** et détourne l'attention de la **marge brute**, qui est pourtant l'indicateur décisif. Tant que le CA réaccélère, le discours tient ; si la croissance retombe sans redressement de marge, il n'aura plus d'appui.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Andrew Dudum — Cofondateur, Directeur Général et Président du conseil

**Bilan** : Dudum a cofondé **Atomic Labs** (studio de création de start-up) puis lancé Hims en 2017 au sein de ce studio. En moins de dix ans :
- CA porté de **0 à 2,35 Md$** (2025), avec trois années consécutives de croissance supérieure à 55 %
- Rentabilité GAAP atteinte en **2024** (+126 M$) et maintenue en 2025 (+128 M$)
- Création de **Hers**, proche de **1 Md$ de CA** en 2025
- Entrée réussie sur le **GLP-1** (2024) — mais au prix d'un affrontement réglementaire qui a coûté au titre **~78 % de baisse** entre son sommet (~70 $) et février 2026

**Ancienneté** : directeur général depuis **2016**, soit dix ans. Profil de **fondateur-marketeur** (Wharton), sans formation médicale.

**Participation** : **~8 % du capital économique**, mais **~88 % des droits de vote** grâce aux actions de **catégorie V à 175 voix**. Hims & Hers est une **« controlled company »** au sens du NYSE. Dudum a **vendu des volumes significatifs** d'actions en 2025 (dont 660 000 titres en août 2025).

---

### Équipe dirigeante

- **Yemi Okupe — Directeur financier** (depuis 2022) : ex-directeur financier de divisions d'**Uber** (Uber Eats, mobilité), passé par PayPal/Braintree et Google. Crédible auprès du marché ; a vendu 85 000 actions en septembre 2025.
- **Mike Chi — Directeur des opérations** (2021) : ex-directeur marketing de Zola.
- **Mo Elshenawy — Directeur technique** (mai 2025) : ex-président et CTO de **Cruise** (GM), ex-Amazon.
- **Dr Pat Carroll — Directeur médical** : ex-directeur médical de **Walgreens**.
- **Deb Autor — Directrice des affaires publiques** (nov. 2025) : ancienne haute responsable de la **FDA** (2001-2013), ex-AstraZeneca — recrutement clairement **défensif**.
- **Kathy Beiser — Directrice de la communication** (févr. 2026) : ex-Eli Lilly, Kaiser Permanente.

Équipe **renforcée en réglementaire et en technologie** depuis 2025 — un signal que les leçons de la crise ont été en partie tirées.

---

### Allocation du capital

| Décision | Montant | Lecture |
|---|---|---|
| Capex (sites, pharmacies, usine peptides) | > 300 M$ sur 3 ans | Intégration verticale cohérente |
| Zava, acquisition au Canada | 2025 | Entrée européenne et canadienne |
| Eucalyptus | ~1,15 Md$ (dont 240 M$ en cash) | Pari international majeur |
| Rachats d'actions | 90 M$ en 2025 ; 225 M$ restants | Modestes vs SBC (135 M$ en 2025) |
| Convertibles 0 % | 1 Md$ (2025) + 350 M$ (2026) | Financement bon marché mais dilutif à terme |
| Stocks de GLP-1 magistral | Dépréciés en 2026 | **Destruction de valeur** liée au pivot |

| Indicateur | 2023 | 2024 | 2025 | TTM 2026 |
|---|---|---|---|---|
| ROE | ~-5 % | ~+28 % | ~+25 % | **~-32 %** |
| ROIC | Négatif | Positif | Positif | **~-10 %** |

**Tendance** : une allocation **audacieuse**, longtemps payante (2023-2025), puis **fortement pénalisée** par la stratégie GLP-1 magistrale de 2026. Le pari Eucalyptus sera le juge de paix de la discipline d'acquisition.

---

### Signaux d'alerte

- **Gouvernance verrouillée** : 88 % des votes pour 8 % du capital ; Dudum cumule PDG et président.
- **Comportement promotionnel** : objectifs 2030 spectaculaires, publicité au Super Bowl, communication agressive contre Novo Nordisk en 2025, lancement d'une copie de comprimé en 2026 retirée en quelques jours.
- **Changements stratégiques fréquents** sur le GLP-1 (cf. Earnings Calls).
- **Ventes d'initiés** significatives en 2025 ; à l'inverse, **achat** d'un administrateur (David Wells, 48 400 actions à 24,24 $ en mai 2026).
- **Exposition juridique** : FTC, SEC, renvoi DOJ — tous liés à des **décisions de la direction**.

**Type de dirigeant** : **fondateur-visionnaire** de très forte conviction. À ce stade (plateforme qui doit prouver sa rentabilité durable), c'est à la fois l'atout (vitesse, marque) et le risque principal (prise de risque réglementaire, absence de contre-pouvoir).`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Contexte
Coté depuis **janvier 2021** (fusion avec le SPAC Oaktree Acquisition Corp.), le titre est **extrêmement volatil** (bêta ~2,4) et **piloté par l'actualité GLP-1 et réglementaire**. L'intérêt vendeur est massif (~25 % du flottant), ce qui amplifie chaque mouvement.

### Hausses significatives (+5 % et plus)

**Mai 2024 — Lancement du sémaglutide magistral** : entrée sur le marché du GLP-1 à bas prix. Forte hausse en séance ; début de l'hypercroissance.

**Fin 2024 - février 2025 — Euphorie GLP-1** : le titre multiplie sa valeur, porté par des résultats records et une campagne au **Super Bowl**, jusqu'à ~70 $.

**29 avril 2025 — Première collaboration Novo Nordisk** : accès au Wegovy via NovoCare. **+23 %** en séance.

**Juillet 2025 — Rebond de défi** : le PDG affirme ne pas reculer face à Novo Nordisk. **+12 %** en séance.

**17 février 2026 — Annonce d'Eucalyptus** (1,15 Md$) : **+7 %** avant-Bourse, signe de l'appétit pour le relais international.

**9 mars 2026 — Partenariat Novo Nordisk et fin du litige** : **~+40 %** en séance. Le risque juridique majeur est levé.

**Juin 2026 — Clôture d'Eucalyptus** et espoirs sur les peptides : le titre remonte jusqu'à **~35 $** en fin de mois.

**Août 2026 — Rebond post-T2** : après une baisse initiale, remontée jusqu'à **34,46 $** (21 août) sur la réaccélération du CA.

---

### Baisses significatives (-5 % et plus)

**2021-2022 — Dégonflement des valeurs SPAC** : chute jusqu'à ~3-4 $ dans la correction des valeurs de croissance non rentables.

**Février 2025 — Fin de la pénurie de sémaglutide** : la FDA retire le sémaglutide de la liste des pénuries ; forte correction depuis les sommets.

**23 juin 2025 — Novo Nordisk rompt la collaboration** : **-35 %** en une séance, Novo accusant Hims & Hers de pratiques commerciales trompeuses.

**Août 2025 — Résultats T2 2025 et ventes d'initiés** : décrochage du titre.

**Février 2026 — Le krach** : copie du comprimé Wegovy (5 février), qualifiée de copie illégale par la FDA (7 février), procès de Novo (9 février), renvoi HHS vers le DOJ, restrictions sur les API GLP-1 (18 février). Le titre perd **plus de 50 %** et touche **13,74 $** le 27 février.

**12 mai 2026 — Résultats T1 manqués** : CA de 608 M$ sous le consensus (617 M$), perte de 92 M$. **-12 à -14 %**.

**Fin juillet 2026 — Plainte de la FTC** (29 juillet) : le titre retombe à **24,24 $** le 30 juillet.

**11 août 2026 — Marge du T2** : **~-6 %** malgré le CA record.

---

### Facteurs structurels

- **Sensibilité réglementaire** : FDA (préparations magistrales, peptides), FTC, HHS — chaque communiqué fait bouger le titre de 5 à 40 %.
- **Dépendance à Novo Nordisk** : la relation avec le laboratoire a provoqué les deux plus fortes variations de l'histoire du titre (-35 % et +40 %).
- **Short squeeze potentiel** : ~25 % du flottant vendu à découvert ; toute bonne nouvelle déclenche des rachats de positions.
- **Base d'actionnaires particuliers** : très présente et réactive aux réseaux sociaux.

**Bilan 12 mois** : de ~55 $ début octobre 2025 à **29,54 $** le 7 octobre 2026, soit **~-46 %**, mais **plus du double** de son point bas de février.`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement
Hims & Hers est **en perte GAAP** en 2026 et son modèle a changé en cours d'année. Les estimations ci-dessous sont des **scénarios indicatifs** construits à partir de la guidance, du consensus (CA 2026 ~3,21 Md$ ; 2027 ~3,99 Md$) et d'hypothèses explicites — pas des prévisions de précision.

### Hypothèses de modélisation

**Croissance du secteur** : télésanté grand public et obésité en forte croissance (adoption des GLP-1 oraux, élargissement aux hormones et à la longévité). Hypothèse : marché adressable en croissance de 15-20 %/an.

**Gains de parts de marché** : modérés aux États-Unis (concurrence de Ro, LillyDirect, NovoCare), **forts à l'international** (Eucalyptus, Zava). Croissance du CA retenue : **~+37 % en 2026** (dont ~10 points d'acquisitions), **+22-25 % en 2027**, **+15-18 % en 2028**.

**Hausses de prix** : le revenu mensuel par abonné progresse (+21 % au T2) par l'effet mix du GLP-1 de marque ; pas de hausse de prix « pure » attendue au-delà de l'inflation.

**Pressions sur les coûts** : marge brute en baisse jusqu'à ~60-62 % au S2 2026, puis stabilisation ; reconstruction partielle à 64-66 % en 2028 via les hormones, Labs et peptides.

**Levier opérationnel** : marketing ramené de ~34 % à ~28-30 % du CA d'ici 2028 ; marge d'EBITDA ajusté de ~9 % (2026) à ~12 % (2027) et ~14-15 % (2028).

**Coûts de financement** : convertibles à **0 %** — charge d'intérêt quasi nulle ; baisse des produits financiers avec la trésorerie consommée.

**Dilution** : rémunération en actions (~135 M$ en 2025, en hausse) et composante actions d'Eucalyptus ; conversion potentielle des obligations 2032 au-dessus de ~29,53 $ (atténuée par le capped call jusqu'à ~50 $). Nombre d'actions dilué : **~245 M (2026) → ~255 M (2028)**.

---

### Estimations BPA

| Exercice | CA | BPA GAAP estimé | BPA ajusté estimé | P/E GAAP au cours (~29,5 $) |
|---|---|---|---|---|
| 2025 (réalisé) | 2,35 Md$ | **~+0,55 $** | — | — |
| **2026E** | **~3,2 Md$** | **-0,70 à -0,80 $** | **~-0,15 à 0 $** | **n.s.** |
| **2027E** | **~3,9-4,0 Md$** | **+0,25 à +0,55 $** | **+0,60 à +0,90 $** | **~55-120x** |
| **2028E** | **~4,6-4,8 Md$** | **+0,95 à +1,40 $** | **+1,30 à +1,75 $** | **~21-31x** |

---

### Sensibilité (BPA GAAP 2028)

- **Scénario haussier** (marge brute reconstruite à 68 %, peptides autorisés, international > 1 Md$) : **~1,75 $** → P/E 2028 ~17x — titre sous-valorisé
- **Scénario de base** : **~1,20 $** → P/E 2028 ~25x — valorisation raisonnable pour une croissance de 15-20 %
- **Scénario baissier** (marge brute bloquée à 60 %, churn élevé du GLP-1 de marque, amende FTC) : **~0,30 $** → P/E 2028 ~100x — aucune marge de sécurité

**Conclusion** : le BPA 2026 est sacrifié par la transition ; la thèse repose sur **2027-2028**. Le **vrai juge de paix** est la **marge brute** : chaque point de marge brute récupéré vaut ~45 M$ de résultat opérationnel en 2028, soit ~0,15 $ de BPA. Le second indicateur clé est le **free cash-flow**, censé redevenir positif dès le S2 2026.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. Une marque grand public dans un marché immense** : l'obésité concerne plus de 100 millions d'adultes américains ; la santé masculine, féminine et hormonale reste mal servie par le système traditionnel. Hims & Hers possède **la marque de référence** et ~2,9 millions d'abonnés payants — un actif rare que ni Teladoc ni LifeMD n'ont su construire.

**2. Le risque juridique majeur est derrière** : le partenariat avec **Novo Nordisk** (mars 2026) a mis fin au procès et légalisé l'offre GLP-1. Le **comprimé Wegovy**, plus simple à prescrire et expédier, est un produit idéal pour la télésanté. La réaccélération du T2 (+16 % aux États-Unis) en est la première preuve.

**3. L'international, second moteur** : avec Zava et Eucalyptus, l'international pèse déjà ~17 % du CA et vise **plus de 1 Md$ d'ici trois ans**. Hims & Hers devient un acteur **mondial** de la santé grand public, ce qu'aucun rival américain n'est.

**4. Les peptides et les nouvelles spécialités — surprises positives possibles** : le comité consultatif de la FDA a recommandé en juillet 2026 l'ajout de **6 peptides sur 7** (dont BPC-157, TB-500) à la liste de préparation magistrale. Hims & Hers détient déjà une **usine de peptides**. Canaccord estime ce marché à **~20 Md$** à trois-cinq ans. La testostérone, la ménopause et les Labs ajoutent des relais à forte marge.

**5. Levier opérationnel latent** : marketing en baisse de 5 points sur un an ; si la marge brute se stabilise, l'objectif 2030 (**1,3 Md$ d'EBITDA**) implique une valorisation actuelle de **~5,8x l'EBITDA 2030**.

**6. Allocation du capital opportuniste** : convertibles à **0 %**, 225 M$ de rachats autorisés, un administrateur acheteur à 24 $. Avec **~25 % du flottant vendu à découvert**, toute bonne surprise peut provoquer un rachat forcé de positions.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents

**1. Le distributeur sans pouvoir de prix** : sur le GLP-1 de marque, Hims & Hers vend **le même produit, au même prix**, que Ro, LillyDirect et NovoCare. La marge brute est passée de **82 % (2023) à 64 %** — et ce n'est peut-être pas un creux, mais le **nouveau régime**.

**2. Le risque réglementaire et juridique n'est pas éteint** : plainte **FTC** (abonnements difficiles à résilier, partage de données de santé avec Meta et Snap), **enquête SEC**, renvoi HHS vers le **DOJ**. Une condamnation sous le ROSCA peut entraîner des **amendes civiles** et surtout imposer des **changements de parcours** qui feraient monter le taux de résiliation.

**3. La dépendance à Novo Nordisk** : Novo a déjà rompu une fois (juin 2025). Le partenariat n'a pas de conditions publiées ; Novo peut modifier ses prix, ses canaux ou ses quotas à tout moment.

### Analyse pré-mortem
Que se passe-t-il si HIMS vaut **12 $** dans deux ans ? Scénario : la vague de recrutement GLP-1 de marque s'essouffle (désabonnement élevé à 149 $ + 149 $/mois), la marge brute reste bloquée à ~60 %, la FTC obtient une amende et une refonte du tunnel d'abonnement, la FDA ne finalise pas l'ouverture des peptides, et Eucalyptus déçoit. Le CA 2027 croît de 10 % au lieu de 25 %, l'EBITDA stagne autour de 300 M$, et le marché revalorise le titre à **1x le CA** comme une télésanté banale.

### Les multiples sont-ils trop élevés ?
À ~2,4x le CA et ~25x l'EBITDA 2026E, **non, si** la croissance de 20 %+ et la marge de 15 % en 2028 se matérialisent. **Oui**, si l'on retient le scénario d'un distributeur à marge comprimée : Teladoc se paie 0,5x le CA. Le P/E prospectif ~86x montre que le marché paie **2028, pas 2026**.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : le débat se focalise sur le GLP-1, alors que **la majorité du CA 2025 provenait d'offres hors GLP-1** (cheveux, sexualité, dermatologie, Hers). Ce socle, rentable et récurrent, vaut à lui seul une part importante de la capitalisation. Le GLP-1 de marque n'a pas besoin d'être très rentable : il est un **outil d'acquisition** qui alimente la vente croisée vers des spécialités à forte marge. Si la proportion d'abonnés multi-pathologies (déjà > 20 %) progresse, la marge se reconstruira **par le mix**, ce que les modèles linéaires des analystes ne capturent pas.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE MODÉRÉ
Le CA est reconnu à l'expédition des traitements, net des remboursements et remises. Deux points d'attention :
- **Abonnements multi-mois** : le passage à l'expédition **mensuelle** (GLP-1 de marque) modifie le rythme de reconnaissance et rend les comparaisons trimestrielles moins lisibles.
- **Produits constatés d'avance et remboursements** : la plainte FTC allègue des facturations **avant toute consultation** ; une hausse des remboursements ou litiges cartes bancaires serait un signal à suivre dans les annexes.

### Information sectorielle — RISQUE ÉLEVÉ
Un **seul secteur opérationnel** publié, aucune rentabilité par spécialité, et **changement d'indicateur clé** en 2026 (abandon du revenu en ligne par abonné au profit d'un nouvel indicateur). Couplé au passage à une **lettre aux actionnaires annuelle**, cela réduit la capacité à vérifier la rentabilité du GLP-1 de marque — précisément le sujet décisif.

### Indicateurs ajustés — RISQUE ÉLEVÉ
L'**EBITDA ajusté** (60 M$ au T2) contraste avec une **perte opérationnelle de 97 M$**. Les retraitements incluent la rémunération en actions, les restructurations (33,5 M$ au T1), les règlements de litiges (15 M$ au T1), les frais d'acquisition (13,4 M$ au T1) et ~81 M$ de charges non récurrentes au T2. **Question** : combien de ces charges « exceptionnelles » se répéteront en 2027 ?

### Rémunération en actions — RISQUE ÉLEVÉ
**135 M$ en 2025** (contre 92 M$ en 2024), soit ~6 % du CA et **plus que le résultat net** de 2025. Les rachats (90 M$) ne compensent pas la dilution. Les actions de **catégorie V** à droit de vote multiple renforcent le contrôle du fondateur indépendamment de sa participation économique.

### Goodwill et incorporels — RISQUE MODÉRÉ À ÉLEVÉ
Eucalyptus (**~1,15 Md$**, dont seulement 240 M$ en cash à la clôture), Zava, l'acquisition canadienne, YourBio et l'usine de peptides font bondir le goodwill et les incorporels. Les **compléments de prix éventuels** (earn-outs) et leur réévaluation passent par le compte de résultat. Un test de dépréciation négatif sur Eucalyptus serait le premier signal d'un surpaiement.

### Stocks et dépréciations — RISQUE MODÉRÉ
Le pivot de mars 2026 a entraîné des **dépréciations de stocks et d'actifs de la chaîne GLP-1 magistrale**. À surveiller : de nouvelles dépréciations si la FDA restreint davantage la préparation magistrale ou si l'usine de peptides reste sous-utilisée.

### Engagements conditionnels — RISQUE ÉLEVÉ
- **FTC + Utah + comté de Los Angeles** (29 juillet 2026) : ROSCA, FTC Act, droit californien — amendes civiles possibles
- **Enquête SEC** sur les pratiques de préparation magistrale (en cours)
- **Renvoi HHS vers le DOJ** (pas de procédure formelle à ce stade)
- Le niveau des **provisions** est faible au regard de l'enjeu ; un règlement significatif serait un choc non anticipé par le consensus.

### Contrats de location — RISQUE FAIBLE
Baux de sites de production et de bureaux (IFRS 16 / ASC 842) ; montants modestes au regard de la dette convertible. Pas d'anomalie identifiée.

### Parties liées — RISQUE MODÉRÉ
Hims est né au sein d'**Atomic Labs**, cofondé par Dudum ; d'anciens liens d'affaires avec l'écosystème Atomic figurent dans les dépôts historiques. Pas de transaction significative identifiée récemment, mais la structure de **controlled company** affaiblit le contrôle des conflits d'intérêts — à documenter dans le DEF 14A.

### Flux de trésorerie vs résultat — RISQUE MODÉRÉ
Historiquement, le cash-flow opérationnel dépassait le résultat net (paiement d'avance, SBC non monétaire). En 2026, **le FCF du T2 est négatif (-68 M$)** et le capex reste élevé (~240 M$ en 2025). La direction promet un FCF positif au S2 : c'est **la promesse vérifiable à court terme**.

---

### Verdict global
**Risque comptable : ÉLEVÉ.** Pas de fraude identifiée, mais une combinaison défavorable : **opacité sectorielle croissante**, **recours massif aux indicateurs ajustés**, **SBC élevée**, **goodwill en hausse** et **contentieux réglementaires non provisionnés**. L'investisseur doit lire les **10-Q** (et non la seule lettre annuelle) et suivre la réconciliation EBITDA ajusté → résultat net trimestre après trimestre.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Andrew Dudum (classées par importance)

### Rentabilité et modèle économique

**1.** Votre marge brute est passée de 76 % à 64 % en un an. **Quel est le plancher**, et quelle marge brute cible visez-vous en 2028 pour atteindre l'objectif de 1,3 Md$ d'EBITDA en 2030 ? Pouvez-vous publier la marge brute **hors GLP-1 de marque** ?

**2.** Le GLP-1 de marque est-il **rentable en lui-même** après coût d'acquisition et d'expédition mensuelle, ou est-ce un produit d'appel ? Quel est le **taux de vente croisée** de ces abonnés vers d'autres spécialités au bout de six mois ?

**3.** Quel est le **taux de rétention à 12 mois** des abonnés recrutés depuis mars 2026 au prix de 149 $ + 149 $/mois, comparé à celui des anciens abonnés au sémaglutide magistral à 49 $ ?

### Risques réglementaires et juridiques

**4.** La plainte de la FTC vise vos parcours d'abonnement et le partage de données de santé avec Meta et Snap. **Quelles modifications** avez-vous déjà apportées, et quel impact chiffré sur la conversion et la résiliation ? Envisagez-vous un règlement amiable ?

**5.** Où en sont l'**enquête de la SEC** et le **renvoi HHS vers le DOJ** ? Pourquoi aucune provision significative n'apparaît-elle au bilan ?

**6.** Après l'épisode de la copie du comprimé Wegovy en février 2026, **quel processus de gouvernance** encadre désormais le lancement de produits à risque réglementaire ? Le conseil peut-il s'opposer au fondateur qui détient 88 % des votes ?

### Partenaires et concurrence

**7.** Le partenariat avec Novo Nordisk a-t-il une **durée, des volumes ou des conditions de prix** garantis ? Que se passe-t-il si Novo privilégie son propre canal NovoCare ?

**8.** Pourquoi n'avez-vous pas d'accord avec **Eli Lilly** ? Ro propose à la fois Wegovy et Zepbound : comment conservez-vous les patients qui veulent changer de molécule ?

### Allocation du capital

**9.** Eucalyptus a coûté ~1,15 Md$. **Quel rendement sur capital investi** visez-vous, et à quel horizon ? Quels compléments de prix restent à verser ?

**10.** Votre rémunération en actions (135 M$ en 2025) dépasse vos rachats d'actions. **Quelle cible de dilution nette annuelle** vous fixez-vous ?

**11.** Les convertibles à 0 % totalisent ~1,35 Md$. À quel cours la conversion devient-elle significative, et **comment comptez-vous gérer l'échéance 2030** ?

### Croissance future

**12.** Si la FDA confirme l'ouverture des peptides, **quelle part de CA** en attendez-vous en 2028, et quelles garanties de sécurité clinique mettez-vous en place sur des produits peu étudiés ?

**13.** L'objectif de **plus de 1 Md$ de CA international** d'ici trois ans repose-t-il sur de nouvelles acquisitions ? Quelle est la **rentabilité actuelle** de l'international ?

### Vision long terme

**14.** Dans dix ans, Hims & Hers sera-t-il un **distributeur de médicaments de marque**, un **fabricant de traitements personnalisés** ou une **plateforme de soins primaires** ? Ces trois modèles n'ont ni les mêmes marges ni les mêmes risques.

**15.** Quel est **le risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le modèle a été construit sur une zone grise — et elle se referme

L'hypercroissance de 2024-2025 reposait sur le **sémaglutide préparé en pharmacie à 49 $/mois**, toléré pendant la pénurie puis maintenu sous l'étiquette « personnalisé ». La FDA, Novo Nordisk et le HHS ont fermé cette porte en février 2026. **Structurellement**, la question est : quelle sera la prochaine zone grise (peptides ? hormones ?) et combien de temps durera-t-elle ? Un modèle dont la marge dépend de la **tolérance réglementaire** n'est pas un modèle de qualité.

### 2. La concentration des revenus s'est déplacée, pas dissoute

La perte de poids est la première spécialité, et elle dépend désormais d'**un seul laboratoire** (Novo Nordisk) pour ses produits phares. Si Novo réduit ses remises, privilégie NovoCare ou rompt à nouveau (comme en juin 2025), la principale source de recrutement s'arrête. Autre concentration, côté acquisition : **Meta et Google** — dont l'accès aux données de santé est précisément visé par la FTC.

### 3. L'avantage concurrentiel est plus fragile qu'il n'y paraît

Une marque forte **ne crée pas de coût de changement**. Le Wegovy vendu par Hims & Hers est **identique** à celui de Ro, de NovoCare ou d'une pharmacie de quartier, au **même prix**. La personnalisation, l'avantage revendiqué, était la vente de préparations magistrales — désormais réduite à des cas marginaux. Il reste un **excellent marketeur**, ce qui n'est pas un moat durable dans la santé.

### 4. Le concurrent le plus dangereux : Eli Lilly, pas Ro

Les haussiers regardent Ro. Le vrai danger est **Eli Lilly** (~1 060 Md$ de capitalisation) : avec **LillyDirect**, le laboratoire dominant de l'obésité vend en direct, contrôle le prix, la prescription via des partenaires choisis, et n'a **aucun besoin** de Hims & Hers. Si le comprimé oral de Lilly (orforglipron) s'impose, Hims & Hers se retrouve à distribuer la **molécule numéro deux**.

### 5. Les pires décisions d'allocation du capital

- **La copie du comprimé Wegovy** (février 2026) : retirée en deux jours, elle a déclenché un procès, une enquête SEC et un renvoi au DOJ — une destruction de valeur de plusieurs milliards de capitalisation.
- **L'investissement dans la chaîne magistrale GLP-1**, déprécié quelques mois plus tard.
- **Eucalyptus à ~1,15 Md$** au pire moment du cycle de cours, en partie payé en actions dévalorisées.
- **SBC de 135 M$** en 2025 contre 90 M$ de rachats : les actionnaires financent la rémunération.

### 6. Incitations mal alignées et gouvernance

Le fondateur détient **8 % de l'économie mais 88 % des votes**, a **vendu massivement en 2025** au plus haut, et cumule PDG et président. Les décisions les plus risquées de l'histoire de la société ont été prises **sans contre-pouvoir**. La plainte de la FTC sur des abonnements difficiles à résilier suggère une culture qui a privilégié la croissance sur la conformité.

### 7. Ce qu'il faut croire pour justifier ~29,5 $

- Une croissance du CA de **+20 % par an jusqu'en 2028** malgré la normalisation du GLP-1
- Une **marge brute qui se stabilise** au-dessus de 62 % puis remonte
- Une **issue clémente** des procédures FTC, SEC et DOJ
- Le **maintien** du partenariat Novo Nordisk à des conditions inchangées
- Une **intégration réussie** d'Eucalyptus

### 8. Si la croissance déçoit de 20 à 30 %

Avec un CA 2027 à ~3,4 Md$ au lieu de ~4,0 Md$ et une marge d'EBITDA de 9 % au lieu de 12 %, l'EBITDA 2027 tombe à **~300 M$** au lieu de ~480 M$. À 15x l'EBITDA (multiple de télésanté mature), la valeur d'entreprise ressort à **~4,5 Md$**, soit après dette nette **~16 $ par action — environ -45 %**.

### 9. Le scénario catastrophe unique

**Une condamnation FTC imposant la refonte du tunnel d'abonnement, cumulée à une rupture avec Novo Nordisk.** Le recrutement s'effondre, le taux de résiliation bondit, la marge s'écrase, et la société doit lever des capitaux en émettant des actions au plus bas. **Plausibilité** : faible à moyenne (**~15-20 %**) — chaque élément pris isolément est plausible ; leur conjonction l'est moins, mais 2025-2026 a montré que les chocs arrivent groupés.

### Conclusion short
Hims & Hers est **un marketeur exceptionnel qui cherche encore son modèle économique légal et rentable**. Le titre ne mesure pas un upside de plateforme : il mesure l'**incertitude** sur la marge, la régulation et le bon vouloir de Novo Nordisk.`,
  },
];

export default { ...meta, modules };
