// ============================================================
//  DOSSIER : Clear Secure, Inc. (YOU)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "you",                      // identifiant d'URL : /dossier/you
  ticker: "YOU",
  name: "Clear Secure, Inc.",
  exchange: "NYSE",
  sector: "Identité biométrique et vérification d'identité",
  initials: "YOU",                  // affiché dans la pastille
  tagline: "Le réseau d'identité biométrique qui fait passer 8,3 millions d'abonnés plus vite à l'aéroport, et veut devenir la couche d'identité de l'économie numérique.",
  riskScore: 67,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "you.html",
  updated: "2026-10",               // période des données
  published: "2026-10-16",          // date exacte de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Clear Secure (marque **CLEAR**, NYSE : YOU) exploite un **réseau privé de vérification d'identité biométrique**. Son produit phare, **CLEAR+**, est un abonnement annuel qui permet de faire vérifier son identité par l'iris, le visage ou l'empreinte à un poste CLEAR, puis d'être escorté directement vers le contrôle de sûreté de la TSA, sans faire la file du contrôle des pièces d'identité.

L'histoire est celle d'une **renaissance** : la société d'origine (Verified Identity Pass, 2003) a fait faillite en 2009. **Caryn Seidman Becker** et **Ken Cornick** en ont racheté les actifs en 2010, l'ont relancée, puis introduite en bourse le 30 juin 2021 à **31 $**.

En 2025, CLEAR a réalisé **900,8 M$ de chiffre d'affaires (+16,9 %)** et **343,1 M$ de free cash-flow**. Sur 12 mois glissants (fin juin 2026), le CA atteint **~1,0 Md$** et le FCF **~508 M$**.

Le modèle repose sur trois mécanismes simples :
- **L'abonné paie d'avance**, une fois par an, par carte bancaire avec renouvellement automatique : l'argent rentre avant d'être reconnu en chiffre d'affaires (produits constatés d'avance : **573 M$** au 30 juin 2026)
- **Les aéroports sont rémunérés** par un partage de revenus sur les recettes générées sur leur site (39,3 M$ au T2 2026, ~14 % du CA)
- **Les partenaires distribuent** l'abonnement : American Express (avantage intégré aux cartes Platinum), programmes de fidélité aérienne (Delta, United) avec tarifs réduits

## Principaux produits et services

**CLEAR Travel (l'essentiel du chiffre d'affaires)**
- **CLEAR+** : 219 $/an depuis le 1er juillet 2026 (209 $ auparavant), 125 $ par membre de la famille ajouté ; **8,3 millions d'abonnés actifs** (+15,2 %) dans **62 aéroports** américains
- **eGates** : portiques biométriques qui vérifient l'identité en moins de cinq secondes, déployés dans 50 aéroports (plus de 70 % du réseau)
- **CLEAR Concierge** : service payant d'accompagnement (à partir de 99 $), disponible dans 39 aéroports
- **Inscription TSA PreCheck fournie par CLEAR** : 280 points de vente en commerce de détail
- **Application « Home-to-Gate »** : ~1 million d'utilisateurs mensuels (calendrier de voyage, guidage, précommande en zone aéroportuaire)

**CLEAR1 (identité pour les entreprises et les administrations)**
- Vérification d'identité en ligne pour des plateformes grand public, la santé, le travail et l'administration ; gamme relancée en 2026 autour de trois produits (Vertex, Apex, Helix) contre les identités synthétiques et les deepfakes
- **43,5 millions d'identités** inscrites au total (+30 %), dont une large part gratuite, qui servent de réseau d'amorçage

## Clients, fournisseurs, concurrents

**Clients** : voyageurs fréquents à pouvoir d'achat élevé (souvent via leur carte Amex ou leur statut aérien) ; entreprises et organismes pour CLEAR1 (santé, plateformes numériques, administrations comme les Centers for Medicare & Medicaid Services).

**Fournisseurs et partenaires clés** : les **aéroports** (bailleurs des emplacements, payés en partage de revenus), la **TSA** (régulateur et partenaire pour l'inscription PreCheck), **American Express**, **Delta** et **United** (canaux d'acquisition), les fournisseurs de matériel biométrique et d'hébergement informatique.

**Concurrents** : la **TSA elle-même** (PreCheck et PreCheck Touchless ID, reconnaissance faciale gratuite pour les membres PreCheck, étendue à ~65 aéroports en 2026), les identités numériques des compagnies aériennes et les permis de conduire mobiles ; sur l'identité en ligne, **ID.me, Persona, Socure, Jumio**, ainsi que les bureaux de crédit et éditeurs de vérification (Equifax, TransUnion, Okta, Mitek).

## Modalités contractuelles et de paiement

- **Abonnés** : paiement annuel d'avance, renouvellement automatique ; rétention brute en dollars de **86,4 % en 2025** (88,5 % en 2024)
- **Partenaires de cartes** : un versement annuel important au partenaire de cartes de crédit (~229 M$ au T3 2025, ~315 M$ attendus au T3 2026), comptabilisé en charges à payer au fil de l'année, qui rend le FCF du troisième trimestre négatif
- **Aéroports** : contrats de concession pluriannuels avec partage de revenus (de l'ordre de 10 à 15 % des recettes du site selon les aéroports) ; aucun aéroport ne dépasse 10 % des revenus d'abonnement
- **CLEAR1** : contrats B2B à l'usage ou au volume, plus irréguliers à mesure que les contrats grossissent

> **Note de prudence** : CLEAR vend une **commodité** (gagner du temps) dont l'intensité dépend de l'attente aux contrôles de la TSA, donc de facteurs qu'elle ne maîtrise pas : trafic aérien, effectifs de la TSA, technologie gouvernementale gratuite. C'est le fil rouge des risques de ce dossier.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de CLEAR dans la chaîne de valeur

CLEAR n'est pas un industriel : c'est un **opérateur de réseau** qui loue des emplacements aux aéroports, y installe ses postes biométriques et ses agents, et revend un service d'identité à des abonnés. Sa position est celle d'un **intermédiaire de confiance** entre le voyageur, l'aéroport et l'État (TSA).

### Amont — Ce dont CLEAR a besoin

**Accès physique au point de contrôle**
- **Les aéroports** (autorités aéroportuaires) : 62 sites CLEAR+ au 30 juin 2026, dont Indianapolis et Northwest Arkansas (Bentonville) ajoutés au T2 ; contrats de concession avec partage de revenus (39,3 M$ au T2 2026, +26 %)
- **La TSA (Department of Homeland Security)** : autorise le dispositif, fixe les règles de contrôle des pièces d'identité, agrée CLEAR comme prestataire d'inscription PreCheck ; certification SAFETY Act depuis 2012

**Technologie**
- Capteurs biométriques (iris, visage, empreinte), kiosques et **eGates** conçus avec des fournisseurs de matériel
- Hébergement informatique, cybersécurité, certifications publiques (FedRAMP, niveau « FISMA High » mis en avant pour la vertical administration)

**Main-d'œuvre**
- Les « ambassadeurs » CLEAR au point de contrôle : salaires directs de 48,0 M$ au T2 2026, soit **17,3 % du CA** (−450 points de base en un an grâce aux eGates)

---

### CLEAR — Le réseau

- **Inscription** : en aéroport, en ligne ou dans l'application ; 43,5 M d'identités inscrites au total
- **Vérification** : postes biométriques et eGates, puis escorte jusqu'au contrôle TSA
- **Services ajoutés** : Concierge (39 aéroports), précommande en zone aéroportuaire (pilote avec Starbucks à LaGuardia, partenariat concessions à Newark), inscription PreCheck (280 points de vente)
- **CLEAR1** : réutilisation de l'identité vérifiée en ligne (santé, travail, administration, plateformes)

---

### Aval — Qui paie

**Canaux de distribution**
- **American Express** : CLEAR+ est un avantage intégré aux cartes Platinum et à d'autres produits ; partenariat renouvelé pour plusieurs années en février 2026
- **Delta Air Lines et United Airlines** : tarifs réduits pour les membres des programmes de fidélité
- Partenariats ponctuels (sport, mobilité) et vente directe via l'application

**Clients finaux**
- **8,3 M d'abonnés CLEAR+ actifs** : voyageurs d'affaires et de loisirs à revenus élevés
- **Entreprises et organismes CLEAR1** : hôpitaux (collaboration avec Mount Sinai annoncée en février 2026), plateformes numériques, programmes publics (Medicare et Medicaid via CMS), employeurs

---

### Cartographie simplifiée du flux

\`\`\`
AMONT                    CLEAR (RÉSEAU)              AVAL
Aéroports (62)       →   Inscription biométrique  →  Abonnés CLEAR+ (8,3 M)
 partage de revenus      43,5 M d'identités           voyageurs fréquents
TSA / DHS            →   eGates + agents          →  Canaux : Amex, Delta,
 agrément, PreCheck      Concierge, appli             United, vente directe
Matériel biométrique →   CLEAR1 (identité en      →  Entreprises, santé,
 et informatique          ligne réutilisable)          administrations (CMS)
\`\`\`

**Le pari central** : transformer un « coupe-file » aéroportuaire en **identité vérifiée réutilisable partout**. L'aéroport recrute l'abonné et finance le réseau ; CLEAR1 doit monétiser cette identité au-delà du voyage.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : CLEAR ne publie **qu'un seul secteur opérationnel**. Le chiffre d'affaires provient « pour l'essentiel » des abonnements CLEAR+ ; CLEAR1, l'inscription PreCheck et Concierge ne sont pas chiffrés séparément. L'EBITDA et le résultat net ne sont disponibles qu'au niveau du groupe. La ventilation ci-dessous combine les chiffres publiés et nos estimations, signalées comme telles.

### Trajectoire du groupe

| Exercice | CA (M$) | Croissance | Résultat opér. (M$) | EBITDA ajusté | Free cash-flow (M$) |
|---|---|---|---|---|---|
| 2021 | 254 | +10 % | −115 | négatif | 42 |
| 2022 | 437 | +72 % | −128 | négatif | 137 |
| 2023 | 614 | +40 % | 22 | ~15 % (est.) | 199 |
| 2024 | 770 | +26 % | 121 | 24,3 % | 284 |
| 2025 | 901 | +17 % | 186 | 29,1 % | 343 |
| 12 mois à fin juin 2026 | 1 001 | +20 % | 251 | ~33 % | 508 |

**Lecture** : un passage spectaculaire d'une perte opérationnelle de 128 M$ (2022) à un bénéfice opérationnel de 251 M$ en trois ans et demi. L'EBITDA ajusté a atteint **36,4 % du CA au T2 2026**, au-delà de l'objectif de 35 % fixé lors de l'introduction en bourse.

### Résultat net

- **2023** : 28 M$ attribuables (premier exercice bénéficiaire)
- **2024** : 170 M$ attribuables, gonflés par un produit d'impôt non récurrent
- **2025** : 168,1 M$ de résultat net total (18,7 % du CA), 109 M$ attribuables aux actionnaires de classe A, le solde revenant aux porteurs d'unités de la structure « Up-C »
- **T2 2026** : 72,3 M$ (26,0 % du CA), dont 50,1 M$ attribuables ; BPA dilué de 0,49 $ (0,26 $ un an plus tôt)

---

### Segments « produits » (estimation 221 Bourse)

| Activité | Poids estimé du CA | Dynamique |
|---|---|---|
| CLEAR+ (abonnements aéroport) | ~90 % | Abonnés +15 %, hausse de prix de 10 $ au 1er juillet 2026 |
| Inscription TSA PreCheck | quelques % | Points de vente ramenés de 340 à 280 (rationalisation) |
| CLEAR1 (identité B2B et administrations) | faible, en forte croissance | Réservations ×5 au T1 2026, signatures +50 % au T2 |
| Concierge, sport, autres | marginal | Concierge passé de 23 à 39 aéroports en neuf mois |

**Moteurs du CA** : abonnés actifs (7,2 M → 8,3 M en un an) × revenu moyen par abonné (~125 $ par an, en hausse avec les prix, mais tiré vers le bas par les tarifs famille et partenaires).

### Répartition géographique

**Quasi 100 % États-Unis.** Le réseau CLEAR+ est exclusivement américain. L'international est une option de long terme : la TSA a autorisé CLEAR à inscrire au PreCheck les voyageurs de 42 pays du programme d'exemption de visa ; le Canada et le Mexique sont cités comme premières pistes, l'Europe de l'Ouest et l'Amérique du Sud plus tard.

---

### Profil de marge

- **Marge brute** publiée : ~67 % sur 12 mois (le coût des ventes n'intègre pas les salaires des agents, présentés à part)
- **Salaires directs** : 17,3 % du CA au T2 2026 (21,8 % un an plus tôt), le principal levier de marge grâce aux eGates
- **Partage de revenus aéroportuaire** : ~14 % du CA, une charge qui croît au rythme des recettes
- **Frais généraux** : 65,9 M$ au T2 (+12,6 %), moins vite que le CA

**Lecture** : la croissance est désormais **rentable et autofinancée**. Le vrai angle mort reste la contribution de CLEAR1, que la direction refuse de chiffrer : impossible de vérifier si la diversification hors aéroport pèse déjà.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. Les emplacements au point de contrôle — un moat physique et contractuel
CLEAR occupe un espace rare : la file d'accès au contrôle de sûreté dans **62 aéroports américains**, sous contrats de concession avec les autorités aéroportuaires. Un concurrent privé devrait négocier aéroport par aéroport, obtenir l'agrément de la TSA et financer des années de déploiement. Aucun acteur privé comparable n'existe aujourd'hui à cette échelle aux États-Unis. **Limite** : ce moat est **loué**, pas possédé. Il dépend du renouvellement des concessions et de la tolérance politique au « coupe-file ».

### 2. Le réseau d'identités vérifiées — un actif qui s'accumule
**43,5 millions d'identités** inscrites (+30 % en un an), dont **8,3 millions d'abonnés payants**. Chaque inscription biométrique est un actif réutilisable : c'est la matière première de CLEAR1 (santé, travail, administration). Plus le réseau grossit, plus il est facile de signer des partenaires qui veulent vérifier leurs utilisateurs sans friction. C'est l'avantage le plus prometteur, mais aussi le moins prouvé financièrement.

### 3. La marque et l'habitude — un moat d'expérience
Pour le voyageur fréquent, CLEAR est devenu un **réflexe** : le logo, l'agent, le passage en quelques secondes. L'application a été un temps n°4 de la catégorie voyage de l'App Store, et l'usage moyen atteint **7 passages par an et par abonné**. La direction reconnaît toutefois que l'expérience s'était **dégradée en 2023-2024** (files CLEAR elles-mêmes saturées) : la marque n'est pas à l'abri d'un service décevant.

### 4. Certifications et confiance publique
SAFETY Act depuis 2012, agrément TSA pour l'inscription PreCheck, certifications fédérales (FedRAMP) pour la vertical administration. Ces agréments prennent des années à obtenir et créent une **barrière réglementaire**.

### 5. Les coûts de changement — FAIBLES pour l'abonné
C'est la faiblesse du modèle. Un abonné peut ne pas renouveler du jour au lendemain, et la rétention brute en dollars a reculé de **89 % (2024) à 86,4 % (2025)**. L'abonnement est souvent « offert » par la carte Amex : la fidélité est partiellement celle du canal, pas de la marque.

## Positionnement face aux alternatives

| Critère | CLEAR+ | TSA PreCheck | PreCheck Touchless ID | File standard |
|---|---|---|---|---|
| Prix annuel | 219 $ | ~78 $ pour 5 ans | Gratuit (membres PreCheck) | Gratuit |
| Étape évitée | Contrôle d'identité | Déchaussage, ordinateur | Contrôle d'identité | Aucune |
| Couverture | 62 aéroports | Quasi tous | ~65 aéroports (2026) | Tous |
| Combinable | Oui, avec PreCheck | Oui | Partiellement redondant avec CLEAR | — |

**Lecture** : CLEAR et PreCheck sont **complémentaires** (l'un raccourcit l'identification, l'autre la fouille). Touchless ID, en revanche, attaque **exactement la même étape** que CLEAR, gratuitement : c'est le concurrent qui définit la durabilité du moat.

## Pouvoir de négociation

- **Vis-à-vis des abonnés** : **Réel** — une hausse de 10 $ (+4,8 %) au 1er juillet 2026 sans impact visible sur la rétention selon la direction ; le tarif standard est passé de 179 $ à 219 $ en quelques années
- **Vis-à-vis des aéroports** : **Équilibré** — CLEAR leur apporte une recette sans investissement, mais ils fixent le partage de revenus et peuvent remettre en concurrence au renouvellement
- **Vis-à-vis d'American Express et des compagnies aériennes** : **Limité** — ces partenaires apportent une part majeure des abonnés ; le versement annuel au partenaire de cartes (~315 M$ en 2026) en mesure le prix
- **Vis-à-vis de la TSA** : **Faible** — l'État fixe les règles, peut imposer des contrôles supplémentaires (comme en 2023) et développe sa propre technologie gratuite`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Identité et vérification d'identité (cours du 15 octobre 2026)

| Société | Code Bloomberg | Cap. boursière | VE/CA | VE/EBIT | P/E publié | P/E futur | Rdt dividende | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|---|
| **Clear Secure** | **YOU US** | **6,1 Md$** | **5,1x** | **20,5x** | **30,3x** | **19,8x** | **1,3 % (+ spéciaux)** | **~35 % (2022-2025)** |
| Okta | OKTA US | 36,5 Md$ | 11,1x | 145x | 127x | 51x | — | ~−5 % (est.) |
| Equifax | EFX US | 18,4 Md$ | 3,6x | 19,5x | 26,4x | 16,6x | 1,5 % | ~13 % (est.) |
| TransUnion | TRU US | 14,0 Md$ | 3,8x | 20,2x | 19,3x | 14,2x | 0,7 % | ~8 % (est.) |
| Mitek Systems | MITK US | 0,7 Md$ | 3,4x | 18,7x | 33,5x | 14,3x | — | ~5 % (est.) |
| **Médiane des pairs cotés** | — | — | **3,7x** | **19,8x** | **29,9x** | **15,5x** | — | — |

*Multiples : S&P Global Market Intelligence via StockAnalysis, cours du 15 octobre 2026. ROE moyens sur cinq ans des pairs : estimations 221 Bourse à affiner sur les rapports annuels. Le ROE de Clear Secure est artificiellement élevé (119 % sur 12 mois) car ses capitaux propres comptables sont très faibles après les distributions et rachats ; l'exercice 2021 (−438 %) est exclu de la moyenne.*

**Concurrents non cotés à suivre** : **ID.me** (identité numérique pour les administrations américaines), **Persona**, **Socure**, **Jumio**, **IDEMIA** (biométrie, cartes d'identité). Et surtout un concurrent qui n'a pas de cours de bourse : **la TSA**, avec PreCheck Touchless ID.

---

### Analyse comparative

**Clear Secure — Un profil hybride mal classé par le marché**
Avec une **croissance de 25 %**, une **marge EBITDA ajustée de 36 %** et un **FCF de 50 % du CA**, CLEAR ressemble à un éditeur de logiciels par abonnement de qualité. Pourtant il se paie **19,8 fois les bénéfices futurs**, à peine plus que les bureaux de crédit qui croissent de 5 à 10 %. La raison est connue : le marché le classe comme une **activité aéroportuaire menacée par l'État**, pas comme une plateforme d'identité.

**Okta — Ce que vaut « l'identité » quand elle est perçue comme une plateforme**
Okta se paie 11 fois son CA avec une rentabilité bien inférieure. L'écart illustre le **potentiel de revalorisation** si CLEAR1 démontre que l'identité CLEAR se monétise hors des aéroports, et la **sévérité de la décote** appliquée aujourd'hui.

**Equifax et TransUnion — Les comparables de la donnée d'identité**
Ces acteurs vendent déjà de la vérification d'identité et de la prévention de la fraude aux entreprises, avec des bilans endettés et une croissance plus lente. Ils sont aussi des **concurrents directs de CLEAR1** auprès des mêmes clients.

**Mitek — Le spécialiste de la vérification de documents**
Petit acteur, multiples proches de la médiane : il rappelle que la vérification d'identité « pure » n'est pas, en soi, une activité qui justifie des primes élevées.

---

### Le ratio qui compte : VE / free cash-flow
CLEAR affiche **~11,8 fois son FCF** des douze derniers mois et ~10,9 fois l'objectif 2026 (au moins 480 M$), soit un **rendement FCF de ~8 %**, avec **~850 M$ de trésorerie nette**. Rares sont les sociétés à 25 % de croissance qui se paient ce prix. **Mais** une partie de ce FCF vient du paiement d'avance des abonnements (produits constatés d'avance en hausse) : il faut le suivre sur l'année entière, après le versement annuel au partenaire de cartes du T3.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 5 août 2026)

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | T2 2025 | Variation | Consensus / guidance |
|---|---|---|---|---|
| Chiffre d'affaires | 277,8 M$ | 219,5 M$ | **+26,6 %** | 269,7 M$ consensus (+3,0 %) ; guidance 268-271 M$ |
| Réservations (bookings) | 295,9 M$ | 222,9 M$ | **+32,8 %** | guidance 280-285 M$ |
| Résultat opérationnel | 83,0 M$ | 42,6 M$ | +95 % | marge 29,9 % |
| EBITDA ajusté | 101,1 M$ | 60,1 M$ | +68 % | marge **36,4 %** (+900 pb) |
| BPA dilué | 0,49 $ | 0,26 $ | +88 % | 0,40 $ consensus (+22 %) |
| Free cash-flow | 189,0 M$ | 117,9 M$ | +60 % | record trimestriel |

**Lecture** : **dépassement net** sur toutes les lignes. Le CA dépasse le haut de la fourchette de la direction de près de 7 M$, et la marge franchit pour la première fois l'objectif de long terme de 35 % fixé à l'introduction en bourse.

---

### Facteurs clés

- **Abonnés** : 8,3 M d'actifs (+15,2 %), après 8,2 M au T1 ; le trimestre précédent avait profité du shutdown du DHS (files TSA allongées en mars)
- **Prix** : hausse de 10 $ du tarif standard au 1er juillet (209 → 219 $) et ajustement des tarifs aériens ; tarif famille inchangé à 125 $
- **CLEAR1** : nouvelles signatures +50 % d'un trimestre sur l'autre, pipeline +50 % ; contribution non chiffrée
- **Réseau** : 62 aéroports (Indianapolis et Northwest Arkansas ajoutés), eGates dans 50 aéroports, Concierge dans 39

---

### Évolution des marges

- **Salaires directs** : 17,3 % du CA (−450 pb), effet direct des eGates qui réduisent le besoin d'agents
- **Partage de revenus aéroportuaire** : 39,3 M$ (+26 %), stable autour de 14 % du CA
- **Frais généraux** : 65,9 M$ (+12,6 %), croissance deux fois plus lente que le CA
- **Impôt** : 19,0 M$ (6,4 M$ un an plus tôt), la société étant désormais pleinement imposable

---

### Prévisions et perspectives

| Élément | T3 2026 (guidance) | Croissance implicite |
|---|---|---|
| Chiffre d'affaires | 284-287 M$ | ~+24,6 % |
| Réservations | 311-316 M$ | ~+20,5 % |
| FCF 2026 (année) | au moins 480 M$ (relevé de 465 M$) | au moins +39,9 % |
| Marge EBITDA 2026 | « expansion significative » | pas d'objectif chiffré |

**Changement de ton** : plus offensif. La direction présente l'identité comme une « infrastructure critique », parle d'IA agentique, d'administration (GovTech) et d'international. Le seul signal de prudence est le **ralentissement guidé des réservations** (+20,5 % après +32,8 %).

---

### Signaux d'alerte dans le bilan

- **Trésorerie** : 959,3 M$ (128,2 M$ de liquidités + 831,0 M$ de titres), **aucune dette financière**
- **Charges à payer** : 404,7 M$ (236,5 M$ fin 2025), dont **~315 M$ à verser au T3** au partenaire de cartes de crédit : le FCF du T3 sera négatif, ce qui est intégré dans l'objectif annuel
- **Produits constatés d'avance** : 573,0 M$ (+11 % sur six mois), le coussin de chiffre d'affaires futur
- **Rachats d'actions** : quasi nuls au premier semestre (1,2 M$ contre 126,3 M$ un an plus tôt), puis ~22 M$ au T3 à 52,73 $ en moyenne
- **Dilution** : les actions de classe A diluées passent de 94,4 M à 102,8 M, surtout par échange d'unités C et D en actions A ; le total toutes classes progresse d'environ 1 % sur six mois (dont 1,4 M d'unités de performance du fondateur acquises en juin)

---

### Réaction du marché

Le jour de la publication, le titre a bondi jusqu'à **69,07 $ en séance (plus haut historique)**, puis a **tout rendu** pour clôturer à 56,46 $ (+1,3 %). Il a ensuite perdu **20 % sur le mois d'août**, puis 5 % en septembre, jusqu'à ~38 $ au plus bas.

**Ce que cela dit** : les bons chiffres étaient **déjà dans le cours** après +66 % depuis janvier. Le marché s'est focalisé sur trois inquiétudes : le **ralentissement des réservations** guidé pour le T3, la **baisse du trafic aux points de contrôle TSA** (−2,1 % en juillet, −4,4 % en août) et la menace de **Touchless ID**. **Élément inhabituel** : un retournement de près de 18 % entre le plus haut et la clôture d'une même séance de publication.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours de la direction

### L'évolution du ton, de la défensive à l'offensive

**2023-2024 : la défensive.** Incidents de sécurité médiatisés, consigne de la TSA (août 2023) d'augmenter les contrôles manuels des pièces d'identité, files CLEAR saturées. La direction défend le modèle et la sécurité. Le 7 novembre 2024, le titre perd jusqu'à 21,9 % en séance sur un BPA décevant et un ralentissement des abonnés.

**2025 : la reconstruction.** Départ du cofondateur Ken Cornick (mars 2025), arrivée de Michael Barkin (président) et Jen Hsu (directrice financière). Rapport de vente à découvert de Spruce Point (avril 2025). Le discours se recentre sur l'**exécution** : eGates, efficacité des coûts, amélioration de l'expérience. La rétention recule (86,4 % en 2025) mais la marge progresse (+480 pb).

**T4 2025 (25 février 2026) : le déclic.** Record de réservations, **dividende relevé de 20 %**, dividende spécial de 0,20 $, autorisation de rachat augmentée de 125 M$, partenariat Amex renouvelé. Le titre gagne **39 % en une séance**.

**T1 2026 (6 mai 2026) : l'enthousiasme mesuré.** Réservations +40,8 % dopées par le shutdown du DHS ; la direction précise honnêtement que l'effet n'a duré qu'**environ trois semaines**. CLEAR1 : réservations multipliées par cinq, étape FedRAMP franchie. Prix : hausses « mesurées ».

**T2 2026 (5 août 2026) : l'expansion assumée.** « L'identité est devenue une infrastructure critique. » Objectif de marge de 35 % dépassé, hausse de prix, stratégie « Home-to-Gate », IA agentique, administrations, international.

---

### Priorités répétées de la direction

**1. Le réseau d'abord** — Couvrir tous les grands aéroports américains (y compris New York et Los Angeles pour Concierge) **avant** d'investir massivement en marketing.

**2. Les eGates comme levier de marge** — Plus de 70 % du réseau équipé, vérification en moins de cinq secondes, salaires directs ramenés à 17,3 % du CA.

**3. Le revenu par abonné** — Hausses de prix régulières, offres packagées autour de Concierge, nouveau partenariat de cartes, reconquête des anciens abonnés partis en 2023-2024.

**4. CLEAR1 et les nouvelles verticales** — Santé, travail, administrations (CMS), lutte contre les deepfakes et les identités synthétiques, vérification de « l'humain derrière l'agent IA ».

**5. Le retour aux actionnaires** — Dividende régulier, dividendes spéciaux, rachats opportunistes (52,73 $ en moyenne au T3).

---

### Analyse du sentiment

| Période | Sentiment | Mots-clés dominants |
|---|---|---|
| 2023-2024 | Défensif | sécurité, conformité, expérience à améliorer |
| 2025 | Prudent, centré sur l'exécution | eGates, efficacité, rétention |
| T4 2025 - T1 2026 | Confiant | record, rendement aux actionnaires, CLEAR1 |
| T2 2026 | Très confiant, parfois promotionnel | « infrastructure critique », « magique », IA agentique |

- **Confiance** : très élevée, et appuyée sur des chiffres réels (marge, FCF). Le vocabulaire devient toutefois **promotionnel** (« magique »), un signal à garder en tête.
- **Transparence** : bonne sur les marges et le FCF ; **en recul** sur deux points clés : la **rétention brute** n'est plus chiffrée (seulement « saine ») et **CLEAR1** n'est jamais dimensionné.
- **Silences notables** : **Touchless ID** n'est pas évoqué lors de la conférence du T2, alors que c'est la principale inquiétude du marché ; le partenariat Delta/United n'est pas commenté.

> **À lire entre les lignes** : la direction vend désormais une **plateforme d'identité**, plus seulement un coupe-file. Le récit est crédible car financé par un FCF réel, mais la preuve chiffrée de CLEAR1 manque encore. Tant que la rétention et CLEAR1 ne seront pas publiés, le marché jugera CLEAR sur ses deux variables les plus visibles : le trafic TSA et les réservations.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation de la direction

### Caryn Seidman Becker — Fondatrice, présidente du conseil et directrice générale

**Bilan** : ancienne gérante de fonds (Arience Capital), elle rachète en 2010, avec Ken Cornick, les actifs d'une société en faillite. Seize ans plus tard, le résultat est chiffrable :
- De zéro à **8,3 M d'abonnés payants** et **43,5 M d'identités**
- **~1,0 Md$ de CA** sur 12 mois, **36,4 % de marge EBITDA ajustée** au T2 2026
- Passage d'une **perte opérationnelle de 128 M$ (2022)** à un **bénéfice opérationnel de 251 M$** (12 mois à fin juin 2026)
- Un réseau dans 62 aéroports, avec agrément TSA et certifications fédérales

**Ancienneté et alignement** : à la tête de l'entreprise depuis 2010. Les fondateurs restent les principaux actionnaires individuels via Alclear Investments. **Changement majeur** : la structure à double classe (classes B et D à 20 voix) a **pris fin le 2 juillet 2026** ; les fondateurs, qui détenaient environ trois quarts des droits de vote, n'ont plus de contrôle statutaire.

---

### Équipe dirigeante

| Dirigeant | Fonction | Depuis | Parcours |
|---|---|---|---|
| Caryn Seidman Becker | PDG, présidente du conseil | 2010 | Fondatrice, ex-gérante de fonds |
| Michael Barkin | Président | mars 2025 | Ex-directeur financier de Vail Resorts, administrateur de CLEAR depuis 2019 |
| Jen Hsu | Directrice financière | mars 2025 | Ex-Chewy (développement et relations investisseurs), JPMorgan, Goldman Sachs |
| Ken Cornick | Cofondateur (conseiller) | 2010-2025 | Ex-président et directeur financier, parti en mars 2025 |

L'équipe actuelle est **récente** (18 mois) et a été construite pour **industrialiser** : discipline financière, opérations, rendement aux actionnaires.

---

### Allocation du capital

| Indicateur | 2022 | 2023 | 2024 | 2025 | 12 mois à fin juin 2026 |
|---|---|---|---|---|---|
| ROE | −22 % | 11 % | 74 % | 76 % | 119 % |
| Free cash-flow | 137 M$ | 199 M$ | 284 M$ | 343 M$ | 508 M$ |
| Rachats d'actions | — | — | — | 126 M$ | ~23 M$ (S1 + T3) |
| Dividendes (réguliers + spéciaux) | — | — | — | 73 M$ | 0,15 $ par trimestre + 0,20 $ spécial |

**Lecture** :
- **Réinvestissement** : sobre ; les acquisitions sont restées modestes (goodwill de seulement 62,7 M$), l'argent est allé au réseau et aux eGates. Bon point.
- **Retour aux actionnaires** : rachats importants en 2025 à bas prix (le titre valait 25 à 35 $), presque arrêtés au S1 2026 quand le cours dépassait 50 $, puis repris à 52,73 $ au T3 : **calendrier discutable**.
- **Trésorerie dormante** : 959 M$ (~15 % de la capitalisation) rapportent des intérêts, mais pèsent sur le rendement des capitaux employés.
- **ROE** : spectaculaire mais **trompeur** : les capitaux propres comptables sont minimes après les distributions. Le ROIC (~53 %) reste excellent.

---

### Signaux d'alerte

- **Ventes d'initiés** : la PDG a cédé ~6,4 M$ d'actions en juillet 2026 ; le président a vendu environ la moitié de sa ligne directe à 45 $ le 3 septembre ; des administrateurs et Alclear Investments vendent régulièrement. Tout se fait via des plans programmés (10b5-1), mais le flux est **uniquement vendeur**.
- **Rémunération** : dominée par des **unités de performance du fondateur** liées au cours ; 1,4 M d'unités acquises en juin 2026 (juste valeur ~77 M$).
- **Parties liées** : structure « Up-C » avec **contrat de partage d'économies d'impôt (TRA) d'environ 257 M$** dû aux membres d'Alclear Holdings, plus des distributions et distributions fiscales aux porteurs d'unités (27 M$ au S1 2026).
- **Rotation** : départ du cofondateur et de plusieurs cadres en 2025 ; le directeur comptable est l'une des cibles du rapport Spruce Point.
- **Ton promotionnel** : vocabulaire de plus en plus emphatique depuis 2026.

### Fondatrice ou gestionnaire professionnelle ?
**Fondatrice-opératrice**, entourée depuis 2025 de gestionnaires professionnels. À ce stade (réseau en place, cash abondant, nouveau relais CLEAR1 à construire), c'est une combinaison pertinente : la vision de long terme de la fondatrice, l'exécution financière de profils venus de grands groupes. Le principal risque est la **dépendance au récit de la fondatrice** et l'absence de plan de succession public.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours depuis l'introduction en bourse

### Contexte
Introduit le 30 juin 2021 à **31 $**, le titre cote **44,96 $** au 15 octobre 2026, soit **+45 % en un peu plus de cinq ans** (hors dividendes), avec des écarts violents : un creux sous les 20 $ en 2022-2023, un plus haut historique de **69,07 $** le 5 août 2026. Sur douze mois, la fourchette va de **30,23 $ à 69,07 $**. Le titre a connu **19 séances à plus de 5 %** sur un an.

### Hausses significatives (plus de 5 %)

**30 juin 2021 — Introduction en bourse** : prix fixé à 31 $, forte hausse dès la première séance (de l'ordre de +30 %), portée par l'engouement pour les valeurs de croissance.

**2025 — L'année du redressement** : malgré le rapport vendeur d'avril, l'amélioration des marges et du cash porte le titre ; l'année se termine en hausse de **29,7 %** (35,08 $), avec +16,5 % sur le seul mois de novembre après les résultats du T3.

**25 février 2026 — Le déclic (+39 % en une séance)** : résultats du T4 2025 au-dessus des attentes, marge EBITDA ajustée de 33,2 %, **dividende relevé de 20 %**, dividende spécial, rachat d'actions augmenté, partenariat Amex renouvelé, collaboration CLEAR1 avec Mount Sinai. Le mois de février finit à **+49 %**.

**Mars 2026 — Le shutdown du DHS** : files TSA interminables, téléchargements de l'application multipliés par trois ; +3,9 % sur une séance et nouveau plus haut à 54,48 $.

**6 mai 2026 — T1 2026 (+9 %)** : réservations +40,8 %, FCF doublé, objectif annuel relevé.

**5 août 2026 — Plus haut historique en séance** : jusqu'à **69,07 $** (+24 % en séance) sur les résultats du T2, avant un retournement complet (clôture +1,3 %).

**28 septembre et octobre 2026 — Rebond** : +3,6 % puis +7 % sur la première quinzaine d'octobre, avec un retour des achats d'options d'achat.

---

### Baisses significatives (plus de 5 %)

**2022-2023 — Krach des valeurs de croissance** : le titre est plus que divisé par deux depuis ses sommets de 2021 et passe sous les 20 $, malgré une croissance de 72 % du CA en 2022.

**Été 2023 — Incidents de sécurité** : la TSA demande d'augmenter les contrôles manuels des pièces d'identité chez CLEAR ; pression sur le titre et sur l'expérience client.

**7 novembre 2024 — −21,9 % en séance** : BPA du T3 2024 à 0,30 $ contre 0,33 $ attendu, inquiétude sur le ralentissement des abonnés.

**30 avril 2025 — Rapport Spruce Point** : le vendeur à découvert estime une baisse potentielle de 30 à 50 % (concurrence de Touchless ID, rétention, présentation comptable) ; ce rapport nourrit depuis la thèse vendeuse.

**10 avril 2026 — −6,8 %** : rotation hors des valeurs logicielles (craintes liées à l'IA), sans nouvelle propre à CLEAR.

**7 mai 2026 — −6,8 %** : dégradation par DA Davidson (Achat → Neutre), le lendemain d'excellents résultats.

**27 mai 2026 — −6,4 %** : prises de bénéfices près des plus hauts.

**Août 2026 — −20 % sur le mois** : retournement du 5 août, −6,2 % le 11 août, données TSA en baisse (−4,4 % en août), réservations guidées en ralentissement, débat sur Touchless ID, ventes d'initiés.

**11 septembre 2026 — Objectif abaissé à 45 $** (DA Davidson) sur la faiblesse du trafic TSA et des temps d'attente « modérés », moins propices à la vente de CLEAR+. Plus bas de septembre : **37,38 $**.

---

### Facteurs structurels

- **Le trafic TSA mensuel** est devenu le premier indicateur suivi par le marché, alors qu'il prédit mal les réservations (+32,8 % au T2 avec un trafic en léger recul)
- **Les temps d'attente** : paradoxalement, une TSA plus efficace est une mauvaise nouvelle pour CLEAR
- **Les décisions politiques** (TSA, DHS, shutdowns, lois des États) provoquent des mouvements brusques
- **La position vendeuse** : ~14 % du flottant vendu à découvert, ce qui amplifie les mouvements dans les deux sens
- **Le rendement aux actionnaires** : chaque hausse de dividende ou rachat a été un catalyseur positif`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations du BPA 2026-2028

### Avertissement
Les estimations ci-dessous sont celles de **221 Bourse**, construites à partir des publications de la société et des données de marché au 15 octobre 2026. Le BPA est le **BPA dilué publié (GAAP)** attribuable aux actionnaires de classe A ; le consensus des analystes, exprimé en BPA ajusté, ressort à **2,10 $ pour 2026** et **2,61 $ pour 2027**.

### Hypothèses de modélisation

**Croissance du secteur** : le trafic aux points de contrôle TSA est **stable à légèrement négatif** en 2026 (−0,7 % au T2, −2,8 % depuis le début du T3). Le marché sous-jacent n'aide pas : la croissance doit venir de la pénétration.

**Gains de parts de marché** : abonnés actifs +15 % en 2026, puis **+8 à +10 %** par an (nouveaux aéroports, reconquête des anciens abonnés, nouveau partenariat de cartes, visiteurs étrangers via le PreCheck), freinés par Touchless ID.

**Hausses de prix** : +4,8 % au 1er juillet 2026 (effet plein en 2027), puis **+3 à +4 %** par an, plus la montée en gamme (Concierge).

**Pressions sur les coûts** : partage de revenus aéroportuaire proportionnel au CA (~14 %), marketing en hausse (campagne de marque), frais généraux en croissance de 10 à 13 %.

**Levier opérationnel** : salaires directs en baisse relative grâce aux eGates ; marge opérationnelle de **28 % en 2026, 31 % en 2027, 33 % en 2028**.

**Coûts de financement** : **aucun** ; la société perçoit au contraire ~30 M$ d'intérêts par an sur sa trésorerie (moins en 2026 après le versement de 315 M$ du T3).

**Dilution** : rémunération en actions de ~45 M$ par an, compensée en partie par les rachats ; nombre total d'actions toutes classes en hausse d'environ **+1 % par an**. Taux d'imposition effectif de 20 à 24 %.

---

### Estimations de BPA

| Exercice | CA (M$) | Marge opér. | BPA dilué estimé | Croissance | PER au cours de 44,96 $ |
|---|---|---|---|---|---|
| 2024 (réalisé) | 770 | 15,7 % | 1,56 $ | — | — |
| 2025 (réalisé) | 901 | 20,7 % | 1,12 $ | (effet fiscal 2024) | — |
| **2026E** | **~1 105** | **~28 %** | **1,90-2,00 $** | **+70 à +79 %** | **~23x** |
| **2027E** | **~1 265** | **~31 %** | **2,30-2,50 $** | **+21 à +25 %** | **~19x** |
| **2028E** | **~1 415** | **~33 %** | **2,65-2,95 $** | **+15 à +18 %** | **~16x** |

*2026E = 0,38 $ (T1 publié) + 0,49 $ (T2 publié) + ~0,53 $ (T3E) + ~0,52 $ (T4E).*

### Sensibilité

- **Scénario haussier** (abonnés +12 %/an, CLEAR1 qui décolle, marge de 36 % en 2028) : CA 2028 ~1,5 Md$, **BPA 2028 ~3,20 $** ; à 18 fois, le titre vaudrait ~58 $, l'objectif moyen des analystes
- **Scénario de base** : BPA 2028 ~2,80 $ ; à 16-18 fois, **45 à 50 $** plus ~1,8 $ de dividendes cumulés et ~6 $ de trésorerie nette par action
- **Scénario baissier** (Touchless ID généralisé, abonnés stables, croissance du CA de ~6 %/an) : CA 2028 ~1,24 Md$, marge de 27 %, **BPA 2028 ~2,00 $** ; à 13 fois, ~26 $

**Conclusion** : la trajectoire de BPA est **solide et peu dépendante de l'effet de levier financier**, puisqu'il n'y a pas de dette. La valeur dépend moins du BPA 2026 que de deux variables : le **nombre d'abonnés actifs** (la preuve que Touchless ID ne mord pas) et la **monétisation de CLEAR1**. Le FCF par action (~3,55 $ en 2026) reste le meilleur juge de paix, supérieur au BPA grâce aux encaissements d'avance.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (bull case)

### Leviers de création de valeur

**1. Un réseau unique, en position quasi monopolistique** : CLEAR est le **seul opérateur privé** de vérification biométrique au contrôle de sûreté dans 62 aéroports américains, avec agrément TSA et certification SAFETY Act. Reconstruire ce réseau prendrait des années et l'accord de dizaines d'autorités aéroportuaires.

**2. Le levier des eGates** : les salaires directs sont passés de 21,8 % à 17,3 % du CA en un an. Plus le réseau s'automatise, plus chaque nouvel abonné est rentable. La marge EBITDA ajustée (36,4 %) a déjà dépassé l'objectif de long terme, et la directrice financière évoque une **« marge de progression significative »**.

**3. Le pouvoir de prix** : le tarif standard est passé de 179 $ à 219 $ en quelques années, sans effondrement de la rétention. La clientèle (voyageurs fréquents aisés) est peu sensible au prix, et l'économie « en K » la favorise.

**4. CLEAR1, l'option sur l'identité numérique** : 43,5 M d'identités vérifiées, réutilisables pour la santé, le travail, les administrations (CMS) et demain la vérification de l'humain derrière un agent IA. Réservations CLEAR1 ×5 au T1 2026, signatures +50 % au T2. Si CLEAR1 atteint 10 % du CA à forte marge, le marché pourrait revaloriser CLEAR comme une plateforme d'identité.

**5. Une machine à cash sans dette** : FCF d'au moins 480 M$ en 2026 (~8 % de la capitalisation), trésorerie nette de ~850 M$ (~6,3 $ par action), dividende relevé de 20 %, dividendes spéciaux, rachats. Le cours actuel ne demande **aucune croissance héroïque**.

**6. Une gouvernance qui se normalise** : fin de la double classe d'actions le 2 juillet 2026, équipe financière issue de grands groupes.

---

## 🐻 Scénario pessimiste (bear case)

### Risques susceptibles de nuire durablement

**1. L'État rend gratuit ce que CLEAR fait payer** : **PreCheck Touchless ID** vérifie l'identité par reconnaissance faciale, gratuitement, pour les membres PreCheck, dans ~65 aéroports avec Delta, United, American, Alaska et Southwest. Si les files PreCheck deviennent fluides, l'argument « gagner du temps » s'érode. C'est un risque **permanent et hors du contrôle** de CLEAR.

**2. Le risque politique du « coupe-file »** : critiques récurrentes au Congrès et dans les États (proposition de loi en Californie en 2024), exigences de contrôles supplémentaires (2023), renouvellement des concessions aéroportuaires avec un partage de revenus potentiellement plus élevé. Un seul changement de règle peut réduire la valeur du produit.

**3. La dépendance aux canaux et au cycle** : une grande partie des abonnés vient d'American Express et des compagnies aériennes ; le versement annuel au partenaire de cartes atteint ~315 M$. Le trafic aérien recule (−4,4 % en août 2026) et la rétention brute s'est dégradée (89 % → 86,4 %). Les réservations ralentissent (+20,5 % guidé au T3 contre +32,8 % au T2).

### Analyse pré-mortem
**Nous sommes en octobre 2028, le titre vaut 25 $. Que s'est-il passé ?** Touchless ID s'est étendu à plus de 100 aéroports avec des voies dédiées ; la TSA a réduit ses temps d'attente ; la rétention est tombée à 80 % ; les hausses de prix ont cessé ; Amex a renégocié l'avantage Platinum à la baisse ; CLEAR1 n'a jamais dépassé quelques pourcents du CA. La croissance du CA a ralenti à 5 %, le multiple s'est comprimé à 12 fois le FCF.

### Les multiples sont-ils trop élevés ?
**Non, pas au regard des chiffres actuels** : 19,8 fois les bénéfices futurs et ~11 fois le FCF pour une société qui croît de 25 % sans dette. Mais ce FCF est **flatté par les encaissements d'avance** et doit absorber le versement annuel au partenaire de cartes. La vraie question n'est pas le multiple, c'est la **durée de vie du modèle** face à une technologie publique gratuite.

---

## 🔄 Point de vue à contre-courant

**Ce que le marché refuse de voir** : le marché juge CLEAR chaque mois sur les **chiffres de trafic de la TSA**, comme une compagnie aérienne. C'est une erreur de mesure : au T2, le trafic reculait légèrement pendant que les **réservations bondissaient de 32,8 %** et que la marge gagnait 900 points de base. Et Touchless ID, présenté comme un tueur, valide en réalité le principe que CLEAR vend : **l'identité biométrique devient la norme**. Dans un monde de deepfakes et d'agents IA, l'actif rare n'est pas la file d'attente, c'est le **stock de 43,5 millions d'identités vérifiées en personne**. À 11 fois le FCF, le marché paie pour le coupe-file et **reçoit gratuitement l'option sur l'identité numérique**.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des produits — RISQUE MODÉRÉ
Les abonnements sont **encaissés d'avance** et reconnus de façon étalée sur la période (produits constatés d'avance : 573,0 M$ au 30 juin 2026). Le traitement est standard, mais trois points méritent l'attention :
- **Réservations vs CA** : la direction met en avant les réservations (indicateur non comptable) ; leur définition et leur rapprochement avec le CA doivent rester stables
- **Remises partenaires** : les tarifs réduits (famille, compagnies aériennes, Amex) et le **versement annuel au partenaire de cartes** (~229 M$ en 2025, ~315 M$ en 2026) posent une question de présentation : charge commerciale ou réduction du chiffre d'affaires ? Le choix change la marge brute affichée
- **Changements d'indicateurs** : les abonnés actifs ont été **retraités** (suppression de comptes expirés) et la rétention brute n'est plus chiffrée dans les publications 2026

### Information sectorielle — RISQUE MODÉRÉ
Un seul secteur publié. **CLEAR1, Concierge et l'inscription PreCheck ne sont pas isolés**, alors que la direction en fait le cœur de son récit de croissance. Impossible de vérifier la rentabilité ou le poids réel de la diversification.

### Marge brute et coûts de main-d'œuvre — RISQUE MODÉRÉ
La marge brute publiée (~67 % sur 12 mois) **exclut les salaires des agents**, présentés sur une ligne séparée. Le rapport Spruce Point (avril 2025) estimait qu'en les réintégrant, la marge brute « économique » était bien plus basse. Le point est désormais atténué par la baisse des salaires directs (17,3 % du CA), mais la comparaison avec des éditeurs de logiciels reste trompeuse.

### Free cash-flow — RISQUE MODÉRÉ
Le FCF (~50 % du CA sur 12 mois) dépasse largement le résultat opérationnel (~25 % du CA), grâce :
- aux **encaissements d'avance** en croissance (la croissance des abonnés finance la trésorerie)
- au **décalage du versement au partenaire de cartes**, provisionné toute l'année et payé au T3 (charges à payer : 404,7 M$)

**À surveiller** : le FCF doit être analysé **sur une année glissante complète**. Un ralentissement des réservations réduirait mécaniquement le FCF avant le résultat.

### Contrats de location — RISQUE FAIBLE
Droits d'utilisation de 97,2 M$ (emplacements, bureaux). Les concessions aéroportuaires fonctionnent surtout en **partage de revenus variable**, ce qui limite les engagements fixes, mais crée une **dépendance au renouvellement** des contrats.

### Parties liées — RISQUE MODÉRÉ À ÉLEVÉ
- **Contrat de partage d'économies d'impôt (TRA)** : ~257 M$ dus aux membres d'Alclear Holdings (dont les fondateurs) ; 14,3 M$ versés au S1 2026
- **Distributions aux porteurs d'unités** : 9,9 M$ de distributions et 17,2 M$ de distributions fiscales au S1 2026
- Spruce Point soulignait que les sommes versées aux parties liées avaient dépassé, sur trois ans, l'investissement interne et les acquisitions

### Engagements conditionnels — RISQUE MODÉRÉ
Litiges potentiels liés aux **données biométriques** (lois des États sur la biométrie), aux incidents de sécurité, à la confidentialité ; risque réglementaire (TSA, DHS). À vérifier dans les notes « engagements et éventualités » du 10-K.

### Rémunération en actions — RISQUE MODÉRÉ
22,4 M$ au S1 2026 (+24 %), soit ~4 % du CA, plus les **unités de performance du fondateur** (1,4 M acquises en juin 2026, juste valeur ~77 M$). La hausse des actions de classe A diluées (94,4 M → 102,8 M) vient surtout d'échanges d'unités, mais la dilution économique réelle (~1 % par an) doit être suivie.

### Goodwill et incorporels — RISQUE FAIBLE
Goodwill de 62,7 M$ et incorporels de 2,5 M$ seulement : la croissance est **organique**, pas achetée. Aucun risque de dépréciation significatif.

---

### Verdict global
**Risque comptable : MODÉRÉ.** Pas de fraude identifiée, un bilan sans dette et sans goodwill significatif, une croissance organique. Les vigilances portent sur la **qualité de l'information** (un seul secteur, rétention non chiffrée, indicateurs retraités), sur le **FCF flatté par les encaissements d'avance** et sur la **structure Up-C** qui fait remonter de la valeur aux fondateurs (TRA, distributions). Un investisseur doit suivre le 10-K plutôt que les communiqués.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions à Caryn Seidman Becker, classées par ordre d'importance

### Concurrence et durabilité de l'avantage

**1.** PreCheck Touchless ID vérifie gratuitement l'identité des membres PreCheck dans environ 65 aéroports. **Quelle est la croissance des abonnés actifs dans les aéroports où Touchless ID est déployé, comparée à ceux où il ne l'est pas ?** Pouvez-vous publier ce chiffre ?

**2.** Vous ne publiez plus la rétention brute en dollars depuis 2026. **Quel est le taux sur les 12 derniers mois, et quelle a été la rétention des abonnés touchés par la hausse de prix du 1er juillet ?**

**3.** Combien de vos concessions aéroportuaires arrivent à échéance d'ici 2028, et **quelle a été l'évolution moyenne du taux de partage de revenus lors des derniers renouvellements ?**

### Canaux et dépendances

**4.** Quelle part des abonnés actifs provient d'American Express et des programmes aériens ? **Comment se calcule le versement annuel de ~315 M$** au partenaire de cartes, et pourquoi n'est-il pas présenté en réduction du chiffre d'affaires ?

**5.** Quelles hypothèses de trafic TSA sont intégrées dans votre objectif de FCF 2026, et **à partir de quel recul du trafic la croissance des réservations deviendrait-elle négative ?**

### CLEAR1 et diversification

**6.** CLEAR1 est au cœur de votre récit de croissance. **Quel est son chiffre d'affaires, sa croissance et sa marge ?** À partir de quel seuil le publierez-vous séparément ?

**7.** Sur les 43,5 M d'identités inscrites, **combien sont réellement réutilisées** au moins une fois par an hors aéroport ?

**8.** Face à ID.me, Persona, Socure et aux bureaux de crédit, **quel est votre taux de succès** dans les appels d'offres de l'administration et de la santé ?

### Allocation du capital

**9.** Vous détenez 959 M$ de trésorerie sans dette. **Quel est le niveau de trésorerie cible**, et pourquoi avoir presque arrêté les rachats au premier semestre 2026 pour les reprendre à 52,73 $ ?

**10.** Envisagez-vous des **acquisitions dans l'identité numérique** pour accélérer CLEAR1, et quelle serait votre discipline de prix ?

**11.** Le TRA de ~257 M$ et les distributions aux porteurs d'unités pèsent sur le cash des actionnaires de classe A. **Accepteriez-vous de racheter ou de simplifier la structure Up-C ?**

### Risques à l'horizon

**12.** Quel est votre **plan si une loi fédérale ou une règle de la TSA** interdisait l'accès prioritaire au contrôle pour les abonnés d'un service payant ?

**13.** Quelles sont vos **protections en cas de fuite de données biométriques**, et quelle est votre exposition aux lois des États sur la biométrie ?

### Gouvernance et vision

**14.** Les dirigeants et les fondateurs vendent régulièrement des actions et personne n'achète. **Que doit en conclure un actionnaire de long terme ?**

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et quel est votre plan de succession ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. CLEAR vend une inefficacité de l'État, et l'État est en train de la corriger

Le produit CLEAR+ n'existe que parce que le contrôle des pièces d'identité de la TSA est lent. **PreCheck Touchless ID** fait la même chose, gratuitement, avec la reconnaissance faciale, dans ~65 aéroports et avec les cinq grandes compagnies aériennes. Les permis de conduire mobiles et les identités numériques des compagnies vont dans le même sens. **Le jour où la file PreCheck est aussi rapide que la file CLEAR, l'abonnement à 219 $ perd sa raison d'être.** Le risque n'est pas cyclique, il est **structurel**.

### 2. Les revenus sont concentrés sur un seul usage, un seul pays, quelques canaux

**~100 % du CA** dépend du voyage aérien aux États-Unis, dans 62 aéroports. Une large part des abonnés arrive via **American Express** et les compagnies aériennes, au point que CLEAR verse ~315 M$ par an à son partenaire de cartes. **Si Amex retirait CLEAR des avantages Platinum**, une partie importante de la base pourrait ne pas renouveler. Le trafic recule déjà (−4,4 % en août 2026) et la rétention aussi (89 % → 86,4 %).

### 3. Le moat est loué, pas possédé

Les emplacements appartiennent aux aéroports, les règles appartiennent à la TSA. Les concessions sont **renouvelables et renégociables** ; le partage de revenus peut augmenter. Le moat de CLEAR est une **autorisation administrative**, révocable par une décision politique : le « coupe-file payant » est une cible facile au Congrès et dans les États.

### 4. Le concurrent le plus dangereux que les optimistes sous-estiment : la TSA

Les optimistes regardent ID.me ou Okta. **Le vrai concurrent est un service public gratuit**, financé par le contribuable, qui n'a aucune contrainte de rentabilité et contrôle l'accès physique au point de contrôle. On ne bat pas un concurrent qui fixe les règles du jeu.

### 5. Les pires décisions d'allocation du capital et les incitations

- **Sous-investissement en 2023-2024** : la direction reconnaît que l'expérience client s'est dégradée, avec pour conséquence une rétention en baisse
- **Rachats à contretemps** : quasi nuls au S1 2026 avec 959 M$ en caisse, repris à 52,73 $ au T3
- **Structure Up-C** : ~257 M$ de TRA dus aux fondateurs, distributions aux porteurs d'unités
- **Initiés uniquement vendeurs** : la PDG (~6,4 M$ en juillet 2026), le président (la moitié de sa ligne directe en septembre), des administrateurs, Alclear Investments
- **Indicateurs moins transparents** : abonnés retraités, rétention non publiée en 2026, CLEAR1 jamais chiffré

### 6. Les hypothèses nécessaires pour justifier le cours

À 44,96 $ (6,1 Md$ de capitalisation, ~5,2 Md$ de valeur d'entreprise), il faut que :
- le FCF progresse d'au moins 10 % par an pendant cinq ans
- la rétention reste au-dessus de 85 % malgré Touchless ID
- les concessions aéroportuaires soient renouvelées à conditions comparables
- American Express maintienne l'avantage Platinum

### 7. Et si la croissance déçoit de 20 à 30 % ?

Avec une croissance du CA ramenée de ~15 % à ~10-12 % par an, le BPA 2028 tomberait de ~2,80 $ à **~2,20 $**. Le marché ne paierait plus 16-18 fois mais **13 à 15 fois** un modèle perçu comme en déclin : **29 à 33 $**, soit **−27 à −35 %** hors dividendes et trésorerie.

### Le scénario catastrophe unique
**Une décision fédérale (TSA ou Congrès) qui supprime l'accès prioritaire au contrôle pour un service payant privé**, ou qui impose que toute vérification d'identité passe par la technologie publique. CLEAR+ perdrait alors l'essentiel de sa valeur en quelques trimestres. **Plausibilité : 10 à 20 % sur cinq ans** ; plus probable est une **érosion lente** via Touchless ID (30 à 40 %).

### Conclusion short
CLEAR est une excellente machine à cash **aujourd'hui**, mais son produit principal dépend d'une **défaillance publique** que l'État s'emploie à corriger. Le multiple bas (~11 fois le FCF) n'est pas une anomalie : c'est le prix d'un **risque de disparition progressive de la proposition de valeur**. Les optimistes paient pour CLEAR1, qui n'a jamais été chiffré.`,
  },
];

export default { ...meta, modules };
