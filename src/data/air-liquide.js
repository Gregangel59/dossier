// ============================================================
//  DOSSIER : Air Liquide S.A. (AI)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "air-liquide",              // identifiant d'URL : /dossier/air-liquide
  ticker: "AI",
  name: "Air Liquide S.A.",
  exchange: "Euronext Paris",
  sector: "Gaz industriels et médicaux",
  initials: "AI",                   // affiché dans la pastille
  tagline: "N\u00B02 mondial des gaz industriels et médicaux, modèle à contrats long terme et aristocrate du dividende.",
  riskScore: 69,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "air-liquide.html",
  updated: "2026-06",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Air Liquide est le **n\u00B02 mondial des gaz industriels et médicaux**, fondé en 1902, coté sur Euronext Paris (membre du CAC\u00A040, de l'Euro Stoxx\u00A050 et du STOXX Europe\u00A0600). Le groupe est présent dans ~60\u00A0pays avec ~66\u00A0000 employés. Le chiffre d'affaires 2025 atteint **26,94\u00A0Mds€**, pour un résultat net part du groupe record de **3,52\u00A0Mds€**.

Le groupe produit, distribue et commercialise des gaz essentiels — **oxygène, azote, hydrogène, argon, hélium** et gaz spéciaux pour l'électronique. Le modèle repose sur trois canaux de distribution :

- **On-site** : unités de production construites directement chez le client (sidérurgie, chimie, raffinage) — contrats 15-20\u00A0ans, revenus quasi-fixes
- **Bulk / Merchant** : livraison par camion-citerne de gaz liquéfiés — contrats 3-7\u00A0ans
- **Bouteilles / Cylinders** : distribution en petits conditionnements — contrats courts, marges élevées

## Principaux produits et services

**Gaz & Services (~95\u00A0% du CA)**, ventilé par marché en industries (~74\u00A0%), santé (~17\u00A0%) et électronique (~10\u00A0%) :
- **Grande Industrie** : gaz industriels pour sidérurgie, chimie, raffinage (O₂, N₂, H₂, gaz de synthèse)
- **Industriel Marchand** : distribution en vrac aux PMI, agroalimentaire, métallurgie
- **Santé** : gaz médicaux, soins à domicile (oxygénothérapie, perfusion), ingrédients de spécialité
- **Électronique** : gaz ultra-purs et matériaux avancés pour semi-conducteurs

**Ingénierie & Construction (~5\u00A0%)** : conception et construction d'unités de séparation d'air, pour le groupe et pour des tiers.

## Clients, fournisseurs, concurrents

**Clients** : sidérurgistes, raffineurs et chimistes (Grande Industrie) ; hôpitaux, cliniques, patients à domicile (Santé) ; grands fondeurs de semi-conducteurs (Électronique).

**Fournisseurs** : producteurs d'électricité (l'électricité est le principal intrant) ; équipementiers industriels (compresseurs, turbines, échangeurs cryogéniques) ; fournisseurs de précurseurs chimiques pour l'Électronique.

**Concurrents** : **Linde** (n\u00B01 mondial, marge opérationnelle ~30\u00A0% vs ~21\u00A0% pour AL) ; **Air Products** (n\u00B03, spécialiste hydrogène) ; **Nippon Sanso** (Asie) ; **Messer** (privé, Europe).

## Modalités contractuelles

Les contrats **on-site** incluent des clauses **take-or-pay** (le client paie même s'il ne consomme pas), des **indexations énergie** automatiques (protection contre la hausse du coût électrique) et des **indexations inflation**. Cette architecture contractuelle explique la grande visibilité des revenus et la résilience des marges en toutes conditions de marché — c'est le cœur du moat d'Air Liquide.`,
  },
  {
    id: 2,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Infrastructure pipeline — moat géographique quasi-irréplicable
Air Liquide opère des **réseaux de pipelines** reliant ses unités de production aux sites clients en Europe (Benelux, Allemagne, France) et sur le Gulf Coast américain. Une fois le pipeline posé, le coût de changement de fournisseur devient **structurellement prohibitif** : reconstruire une connexion représente des années et des centaines de millions d'euros.

### 2. Contrats long terme — visibilité des revenus
Une large part du CA Gaz & Services est sous contrats on-site à 15-20\u00A0ans avec clauses take-or-pay et indexation automatique. Cette récurrence structurelle explique la stabilité des marges même en récession.

### 3. Barrières réglementaires et de certification
Dans la **Santé**, les gaz médicaux sont des médicaments soumis à autorisation de mise sur le marché. Obtenir les certifications (FDA, EMA) prend des années et constitue une barrière à l'entrée considérable.

### 4. Expertise technologique — Électronique
Air Liquide est un **leader mondial des gaz pour semi-conducteurs**, fournissant des gaz ultra-purs critiques dont la pureté à 99,9999\u00A0% exige un savoir-faire industriel accumulé sur des décennies. Les fondeurs ne tolèrent aucune contamination.

### 5. Effet d'échelle et optimisation logistique
Avec plusieurs centaines d'unités de séparation d'air dans le monde, Air Liquide optimise sa production en bassin industriel : un excédent d'O₂ d'une unité alimente un client voisin via pipeline. Cette **densité de réseau** crée des économies inaccessibles aux acteurs régionaux.

## Positionnement vs concurrence

| Critère | Air Liquide | Linde | Air Products |
|---|---|---|---|
| Part de marché mondiale | ~24\u00A0% | ~31\u00A0% | ~11\u00A0% |
| Marge opérationnelle | ~21\u00A0% | ~30\u00A0% | ~24\u00A0% |
| Diversification | Forte | Forte | Concentrée H₂ |
| Exposition Santé | Élevée | Modérée | Faible |
| Valorisation (P/E) | ~26x | ~29-34x | ~22x |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Élevé** — les clients industriels ne peuvent pas arrêter leur production en attendant un nouveau fournisseur ; les switching costs sont considérables
- **Vis-à-vis des fournisseurs d'énergie** : **Modéré** — Air Liquide est un acheteur d'électricité majeur et négocie des contrats long terme et des PPA d'énergie renouvelable (3\u00A0TWh en démarrage)
- **Vis-à-vis des équipementiers** : **Élevé** — Air Liquide conçoit ses propres unités via sa filiale Ingénierie & Construction`,
  },
  {
    id: 3,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels
**1. Transition énergétique — Hydrogène bas-carbone** : Air Liquide investit massivement dans l'hydrogène vert et bas-carbone, avec un backlog d'investissements de ~4,9\u00A0Mds€. En tant qu'opérateur d'électrolyseurs et producteur d'H₂, le groupe est idéalement positionné sur une mégatendance de décarbonation.

**2. Électronique — supercycle IA** : La montée en puissance des data centers, de l'IA et des puces avancées (3nm, 2nm) tire la demande en gaz ultra-purs. L'Électronique a progressé de +3,7\u00A0% au T4 2025, avec des gains organiques solides hors Equipment & Installation.

**3. Santé — croissance démographique** : Le vieillissement des populations et le développement des soins à domicile assurent une croissance organique régulière (+5,0\u00A0% au T4 2025), décorrélée du cycle industriel.

**4. Amélioration des marges** : Hors effet énergie, la marge opérationnelle s'est améliorée de **+100\u00A0bps en 2025** (+360\u00A0bps cumulés depuis 2022). La direction vise **+100\u00A0bps supplémentaires en 2026 ET 2027** — objectif relevé et étendu, signal fort.

**5. Allocation du capital disciplinée** : Efficacités opérationnelles record de 631\u00A0M€ (+27\u00A0%). Dividende en hausse de **+12,1\u00A0%** (3,70€/action pré-attribution) + attribution d'une action gratuite (1 pour 10, juin 2026). ~900\u00A0000 actionnaires individuels fidélisés (~1/3 du capital).

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents
**1. Retard/déception sur l'hydrogène** : Les projets H₂ dépendent largement de subventions publiques (IRA américain, politiques européennes). Un changement de cap politique ou une rentabilité insuffisante des électrolyseurs pourrait remettre en cause les investissements annoncés.

**2. Écart de marge persistant avec Linde** : Linde affiche ~30\u00A0% de marge opérationnelle vs ~21\u00A0% pour Air Liquide. Si cet écart ne se résorbe pas, le re-rating espéré du multiple ne se matérialisera pas.

**3. Risque de change** : ~70\u00A0% du CA est généré hors zone euro. En 2025, l'effet devises négatif de **-3,2\u00A0%** a transformé une croissance comparable de +2\u00A0% en recul publié de -0,4\u00A0%.

### Analyse pré-mortem
Que se passerait-il si Air Liquide perdait 30\u00A0% dans 3\u00A0ans\u00A0? Scénario : ralentissement de l'Électronique (fin du supercycle), déception sur les marges, compression du multiple de P/E de ~26x à ~21x, et stagnation du BPA. La valorisation chuterait mécaniquement.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : Air Liquide se paie comme une croissance de qualité alors qu'il sous-performe Linde sur la rentabilité depuis 15\u00A0ans. Le re-rating (réduction de l'écart de marge) est partiellement dans les cours depuis février 2025. Mais à l'inverse, **sa décote relative vs Linde sur tous les multiples** offre une marge de sécurité que le leader n'a pas — l'argument bull et bear cohabitent sur le même fait.`,
  },
  {
    id: 4,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position d'Air Liquide dans la chaîne de valeur

Air Liquide occupe une position de **transformateur-distributeur central**, entre les fournisseurs d'énergie et de matières premières en amont et les industries utilisatrices en aval.

### Amont — Intrants

**Énergie électrique** (principal coût variable, ~30-40\u00A0% des coûts de production) :
- Grands électriciens européens — contrats long terme négociés et PPA renouvelables (3\u00A0TWh en démarrage)

**Équipements industriels** :
- Compresseurs, turbines, échangeurs thermiques cryogéniques, brûleurs industriels

**Matières premières** :
- Air atmosphérique (gratuit, capté par compression)
- Gaz naturel (pour production d'H₂ par reformage SMR)
- Précurseurs chimiques pour l'Électronique (fournisseurs spécialisés)

---

### Air Liquide — Transformation et distribution

**Production** : unités de séparation d'air (ASU), reformeurs d'hydrogène (SMR), électrolyseurs (H₂ vert), unités de purification.

**Distribution** :
- Pipelines (Grande Industrie — Europe & Gulf Coast US)
- Camions-citernes cryogéniques (Bulk / Merchant)
- Remplissage de bouteilles / cylinders
- Gaz conditionnés (Santé, Électronique)

---

### Aval — Clients finaux

**Industrie lourde** : sidérurgie, raffinage, chimie de base.

**Électronique** : grands fondeurs de semi-conducteurs (mémoire, logique, puces avancées).

**Santé** : hôpitaux, cliniques, patients à domicile (oxygénothérapie, perfusion).

**Agroalimentaire** : surgélation, conditionnement sous atmosphère modifiée.

**Mobilité** : stations H₂ pour bus, poids lourds et trains — partenariats avec constructeurs et exploitants de transport.

### Schéma simplifié du flux

\`\`\`
AMONT                 →   AIR LIQUIDE              →   AVAL
Électricité / PPA         ASU, SMR, électrolyseurs     Industrie lourde
Gaz naturel               Pipelines + camions          Électronique
Équipementiers            Bouteilles / conditionnés    Santé (hôpitaux, domicile)
Précurseurs chimiques     Ingénierie & Construction    Agroalimentaire, Mobilité
\`\`\``,
  },
  {
    id: 5,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par marché — Exercice 2025

### Gaz & Services (~95\u00A0% du CA — 26,09\u00A0Mds€)

| Marché | Poids du CA | Croissance comparable T4 2025 | Tendance |
|---|---|---|---|
| Industries (Grande Industrie + Marchand) | ~74\u00A0% | +2,7\u00A0% | Accélération |
| Santé | ~17\u00A0% | +5,0\u00A0% | Forte, structurelle |
| Électronique | ~10\u00A0% | +3,7\u00A0% | Dynamique hors E&I |

**Ingénierie & Construction et autres** : ~5\u00A0% du CA — cyclique.

---

### Répartition géographique (2025)

| Région | Poids du CA |
|---|---|
| États-Unis | ~33\u00A0% |
| Europe-Moyen-Orient-Afrique | ~29\u00A0% |
| Asie-Pacifique | ~20\u00A0% |
| France | ~12\u00A0% |
| Autres Amériques | ~6\u00A0% |

**Point clé** : Les Amériques et l'Asie tirent la croissance, portées par les démarrages de nouvelles unités et la forte progression de la Santé. L'Europe reste plus contrastée (gaz industriels, cogénération Benelux).

---

### Évolution des marges et de la rentabilité

- **Marge opérationnelle courante** : >20\u00A0%, en amélioration de **+100\u00A0bps hors énergie en 2025** (+360\u00A0bps cumulés depuis 2022)
- **Résultat opérationnel courant** : 5,58\u00A0Mds€, **+7,6\u00A0% à données comparables** — fort effet de levier vs la croissance des ventes
- **Efficacités opérationnelles** : record de **631\u00A0M€** (+27\u00A0% vs 2024), au-delà de l'objectif annuel de 400\u00A0M€
- **Bénéfice net récurrent** : **3,68\u00A0Mds€** (+6,2\u00A0% ; +9,7\u00A0% hors effet devises)
- **Résultat net part du groupe** : **3,52\u00A0Mds€** (+6,4\u00A0% ; +10,1\u00A0% hors change)
- **BPA publié** : **6,10€** (vs 5,74€ en 2024), soit ~5,55€ une fois normalisé de l'attribution d'actions gratuites de juin 2026

---

### Dynamiques par marché

**Santé** : marché le plus résilient. Croissance structurelle tirée par le vieillissement, les soins à domicile et les ingrédients de spécialité. Déconnecté du cycle industriel.

**Électronique** : fort potentiel long terme (IA, data centers, puces avancées). La composante Equipment & Installation reste cyclique, mais le fond des gaz est solide.

**Industries** : accélération au T4 2025 (+2,7\u00A0%), soutenue par les démarrages de nouvelles unités et un effet prix robuste sur l'Industriel Marchand.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats annuels 2025 — Analyse complète

### Chiffre d'affaires vs consensus

| Indicateur | Résultat 2025 | Consensus | Écart |
|---|---|---|---|
| CA publié | 26\u00A0940\u00A0M€ | 26\u00A0920\u00A0M€ | **+20\u00A0M€ ✓** |
| Croissance comparable | +2,0\u00A0% | ~+2\u00A0% | Conforme |
| Croissance publiée | -0,4\u00A0% | — | Effet devises -3,2\u00A0% |
| Résultat opérationnel courant | 5\u00A0580\u00A0M€ | — | **+7,6\u00A0% comparable** |
| Bénéfice net récurrent | 3\u00A0680\u00A0M€ | ~3\u00A0600\u00A0M€ | **Supérieur** |
| BPA publié | 6,10€ | 5,74€ (2024) | **+6,3\u00A0%** |

**Air Liquide a légèrement dépassé le consensus** sur les revenus et significativement sur la rentabilité.

---

### Facteurs clés par marché (T4 2025)

- **Santé** : +5,0\u00A0% — moteur de croissance principal
- **Électronique** : +3,7\u00A0%, dynamique sur les gaz hors E&I
- **Industries** : +2,7\u00A0%, accélération notable
- **Croissance comparable T4** : +2,5\u00A0%, en accélération vs +2,0\u00A0% sur l'année

---

### Évolution des marges

- Marge opérationnelle courante **>20\u00A0%**, en progression de **+100\u00A0bps hors énergie en 2025**
- Amélioration cumulée de **+360\u00A0bps depuis 2022**
- Effet de levier opérationnel marqué : résultat opérationnel +7,6\u00A0% comparable vs CA +2,0\u00A0%

---

### Perspectives et guidance

- **Objectif de marge relevé et étendu** : +100\u00A0bps en 2026 ET 2027 (hors énergie) — annonce qui a galvanisé le titre
- François Jackow a salué l'**"excellence opérationnelle"** dans "un environnement difficile" et affiche sa confiance pour 2026
- Dividende **3,70€ (+12,1\u00A0%)** + attribution d'une action gratuite (1 pour 10, 10 juin 2026)
- Réduction de **13\u00A0%** des émissions CO₂ depuis 2020, intensité carbone -46\u00A0% depuis 2015

---

### Signaux d'alerte bilan

- **Effet devises négatif** : -3,2\u00A0% sur le CA publié — exposition structurelle à l'USD notamment
- **Capex élevé** : backlog d'investissements de ~4,9\u00A0Mds€ (hydrogène, Électronique) — surveiller la génération de free cash-flow
- **Dette** : maîtrisée, mais à suivre compte tenu du programme d'investissement

---

### Réaction du marché

Le titre a salué la publication, soutenu par l'extension de l'objectif de marge à 2027. Le consensus des analystes vise ~195-200€ (avant ajustement de l'attribution d'actions gratuites). Cela indique que le marché continue d'accorder une prime de qualité à l'exécution du management, tout en restant attentif à la valorisation déjà élevée.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — évolution 2023-2025

**2023** : Ton prudent, focalisation sur la résilience face à l'inflation énergétique et la normalisation post-COVID. Insistance sur la capacité d'indexation des contrats.

**2024** : Ton plus offensif. Accélération sur l'Électronique, "record" de décisions d'investissement, langage plus confiant sur l'hydrogène.

**2025** : Ton confiant et maîtrisé. "Excellence opérationnelle", "très confiants pour 2026". L'extension des objectifs de marge à 2027 marque un point d'inflexion dans la communication.

---

### Priorités répétées du management

**1. Amélioration des marges** — Thème dominant depuis le lancement du plan ADVANCE (2022). L'objectif de réduire l'écart avec Linde est martelé. L'extension de l'objectif de marge à 2027 est le message fort de 2025.

**2. Plan ADVANCE — bilan revendiqué** : efficacités opérationnelles record (631\u00A0M€), réduction CO₂ de -13\u00A0%, discipline d'exécution. Le management présente le bilan comme tenu, voire dépassé.

**3. Électronique — positionnement de leader** : contrats majeurs en Asie, Europe et États-Unis. Distinction soulignée entre croissance organique des gaz et normalisation cyclique de l'Equipment & Installation.

**4. Hydrogène — patience stratégique** : discours mesuré — investissements de long terme, dépendance aux subventions reconnue implicitement, mais conviction sur le potentiel de marché.

**5. Dividende et fidélisation des actionnaires** : fierté affichée des ~900\u00A0000 actionnaires individuels (~1/3 du capital — record). La politique d'actions gratuites (33ᵉ attribution en juin 2026) fidélise cette base.

---

### Analyse du sentiment

- **Confiance** : élevée et croissante depuis 2024. Le management livre et dépasse plutôt que de surpromettre.
- **Prudence sur les devises** : l'effet de change négatif est systématiquement mentionné comme facteur structurel, sans catastrophisme.
- **Cohérence** : remarquable sur 3\u00A0ans — aucune révision à la baisse de guidance, aucun changement de stratégie majeur.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### François Jackow — Directeur Général (depuis juin 2022)

**Profil** : formation alliant rigueur scientifique et sens business. Dans le groupe depuis le début des années 1990, membre du Comité Exécutif de longue date — connaissance intime des marchés et des opérations.

**Bilan** :
- Architecte du **plan ADVANCE** (2022-2025) : efficacités opérationnelles record, +360\u00A0bps de marge cumulés, -13\u00A0% de CO₂
- Extension de l'objectif de marge à 2027 — preuve de visibilité et de confiance
- Démarrage de nouvelles grandes unités (ASU) en Amériques et Asie
- A su faire **dépasser le consensus** sur la rentabilité dans un environnement industriel atone

**Participation et alignement** : rémunération en ligne avec les pratiques sectorielles, composante actions de performance (LTI) significative, alignée sur la création de valeur long terme.

---

### Benoît Potier — Président du Conseil d'Administration

PDG de 2006 à 2022. Architecte de la transformation d'Air Liquide en leader mondial (internationalisation, plan NEOS). Garant de la continuité stratégique et de la culture actionnariale du groupe.

---

### Allocation du capital — historique

| Indicateur | Tendance |
|---|---|
| ROCE | ~11\u00A0% en 2025, en progression constante |
| Dividende/action | 3,70€ (+12,1\u00A0%), 11 hausses consécutives, 71\u00A0ans sans baisse |
| Croissance comparable CA | +2,0\u00A0% (2025), portée par la marge plus que le volume |
| Efficacités opérationnelles | Record 631\u00A0M€ (+27\u00A0%) |

**Tendance** : allocation **disciplinée** — ROCE en hausse malgré un capex élevé, retour actionnarial régulier (dividende aristocrate + actions gratuites tous les ~2\u00A0ans).

---

### Signaux d'alerte

- **Pas de transactions avec parties liées significatives** identifiées ; structure actionnariale dispersée (pas d'actionnaire dominant)
- **Rémunération** : transparente, détaillée en AG, en ligne avec le secteur
- **Risque** : Jackow est un "insider" de longue date — sa vision pourrait être trop ancrée dans le modèle existant face à des ruptures rapides (nouveaux entrants H₂, dynamique de l'électronique)
- **Type** : gestionnaire professionnel issu du rang — légitimité interne forte et connaissance métier profonde`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2020-2026)

### Hausses significatives (+5\u00A0%)

**2021 — rebond post-COVID et plan ADVANCE** : forte appréciation du titre. La normalisation industrielle mondiale et l'annonce d'objectifs ambitieux de marge et de croissance ont catalysé le mouvement.

**Février 2025 — résultats FY2024 + objectif de marge** : annonce d'un objectif de marge opérationnelle relevé. Réaction forte à une surprise positive rare sur une valeur défensive bien suivie.

**Février 2026 — résultats FY2025 + extension à 2027** : objectif de marge **étendu à 2027** (+100\u00A0bps), bénéfice net record, dividende +12,1\u00A0%. Le marché salue la visibilité.

---

### Baisses significatives (-5\u00A0%)

**Mars 2020 — COVID-19** : chute initiale avec les marchés, rapidement récupérée car la résilience du modèle (take-or-pay, Santé) est apparue clairement dès le T2 2020.

**2022 — crise énergétique** : malgré les indexations contractuelles, l'incertitude sur la répercussion des coûts énergétiques a pesé temporairement.

**Juin 2026 — détachement des actions gratuites** : le 10 juin 2026, le cours s'est **mécaniquement ajusté à la baisse (÷1,1)** pour intégrer l'attribution d'1 action gratuite pour 10 — un ajustement technique neutre, sans destruction de valeur.

---

### Facteurs structurels de soutien au cours

- **Dividende croissant** : aristocrate du dividende — 71\u00A0ans sans baisse, 11 hausses consécutives. Dividende 2025 : 3,70€ (+12,1\u00A0%) + action gratuite
- **~900\u00A0000 actionnaires individuels** : base fidèle et peu volatile (~1/3 du capital)
- **Inclusion CAC\u00A040 / Euro Stoxx\u00A050** : valeur de référence institutionnelle, flux d'achat réguliers des ETF et fonds indiciels
- **Risque ESG faible** : noté faible par les agences, soutien des fonds ISR`,
  },
  {
    id: 10,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Gaz industriels mondiaux (juin 2026)

| Société | Code Bloomberg | Capitalisation | EV/CA | EV/EBIT | P/E | Rendement div. | Marge opér. |
|---|---|---|---|---|---|---|---|
| **Air Liquide** | **AI FP** | **~100\u00A0Mds€** | **~3,5x** | **~18x** | **~26x** | **~2,2\u00A0%** | **~21\u00A0%** |
| Linde | LIN US | ~210-230\u00A0Mds$ | ~5,5x | ~24x | ~29-34x | ~1,3\u00A0% | ~30\u00A0% |
| Air Products | APD US | ~60\u00A0Mds$ | ~4,5x | ~16x | ~22x | ~2,8\u00A0% | ~24\u00A0% |
| Nippon Sanso | 4091 JP | ~13\u00A0Mds$ | ~1,3x | ~12x | ~17x | ~1,5\u00A0% | ~12\u00A0% |
| Messer | Non coté | N/A | N/A | N/A | N/A | N/A | N/A |

*Données estimatives sur la base des cours et publications disponibles à juin 2026.*

---

### Analyse comparative

**Linde (LIN) — le benchmark absolu**
- Capitalisation ~2x Air Liquide pour un CA seulement ~30\u00A0% supérieur
- Marge opérationnelle ~30\u00A0% vs ~21\u00A0% pour AL — l'écart de rentabilité explique l'essentiel de la prime de valorisation
- Meilleure conversion de cash, rachats d'actions disciplinés (-2\u00A0%/an de titres)
- **Verdict** : prime justifiée par la supériorité opérationnelle, mais valorisation plus tendue (P/E ~29-34x)

**Air Products (APD) — le parieur H₂**
- Stratégie concentrée sur les méga-projets hydrogène
- Rentabilité en redressement (marge opér. en hausse), mais exécution des projets H₂ risquée
- Rendement dividende plus élevé (~2,8\u00A0%) — signe d'une valorisation plus basse

**Air Liquide vs Linde — l'écart qui compte**
Air Liquide se négocie **moins cher que Linde sur tous les multiples**, avec une décote relative partiellement justifiée par la taille et la moindre rentabilité. Si Air Liquide atteint ses objectifs de marge (+100\u00A0bps en 2026 et 2027), le re-rating du multiple représenterait un upside — c'est la thèse bull centrale sur le titre.`,
  },
  {
    id: 11,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

> **Note** : toutes les valeurs ci-dessous sont **normalisées de l'attribution d'actions gratuites de juin 2026** (1 pour 10). Le BPA 2025 publié de 6,10€ correspond à ~5,55€ post-attribution.

### Hypothèses de modélisation

**Croissance du CA** :
- Secteur gaz industriels : +2-3\u00A0%/an en comparable (cycle stable, Électronique porteur)
- Effet prix/indexation : +2-3\u00A0%/an (clauses contractuelles)
- Effet volume : +0,5-1\u00A0%/an
- Effet devises : -1 à -3\u00A0%/an (structurel, USD/EUR défavorable)
- **Croissance CA publiée estimée : +1-3\u00A0%/an**

**Levier opérationnel** :
- Objectif management : +100\u00A0bps de marge opérationnelle (hors énergie) en 2026 ET 2027
- Effet de levier : croissance du résultat opérationnel supérieure à celle du CA (déjà +7,6\u00A0% comparable en 2025)

**Coûts financiers** : charge financière nette stable à légèrement croissante avec le capex (~4,9\u00A0Mds€ de backlog)

**Dilution** : attribution d'actions gratuites (1 pour 10) déjà intégrée dans la normalisation

---

### Estimations BPA (normalisées post-attribution)

| Exercice | BPA estimé | Croissance | P/E au cours actuel (~170€) |
|---|---|---|---|
| 2025 (réalisé, normalisé) | **~5,55€** | — | ~30x (avant baisse de cours) |
| **2026E** | **~6,40-6,55€** | **+8-10\u00A0%** | **~26x** |
| **2027E** | **~6,95-7,20€** | **+8-10\u00A0%** | **~24x** |
| **2028E** | **~7,45-7,75€** | **+6-8\u00A0%** | **~22x** |

*PER estimé 2026 confirmé autour de 26x par le consensus de marché.*

---

### Sensibilité

- **Scénario optimiste** (marge +100\u00A0bps livrée 2026-2027 + Électronique fort) : BPA 2028 vers le haut de fourchette → re-rating possible
- **Scénario de base** : BPA 2028 ~7,55€ → valorisation juste pour un actif de qualité
- **Scénario pessimiste** (déception marge + devises adverses) : BPA 2028 ~7,20€ → peu de marge de progression du multiple

**Conclusion** : la thèse repose sur l'exécution de l'objectif de marge. Le profil risque/rendement est favorable sur 3-5\u00A0ans pour un investisseur patient, avec un rendement actionnarial total (dividende croissant + actions gratuites + appréciation) historiquement de l'ordre de 9-11\u00A0%/an.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus — RISQUE MODÉRÉ
Les contrats on-site avec clauses take-or-pay créent une **comptabilisation de revenus lissée** indépendante de la consommation réelle. IFRS 15 encadre ce traitement, mais la complexité des contrats long terme (15-20\u00A0ans) avec indexations multiples laisse une marge d'interprétation.

**À surveiller** : l'évolution du ratio revenus contractuels / revenus effectivement facturés.

### Goodwill et immobilisations incorporelles — RISQUE MODÉRÉ
Les acquisitions historiques (dont la grande acquisition nord-américaine de 2016) ont généré un **goodwill significatif**, testé annuellement et non déprécié à ce jour.

**Question à poser** : les hypothèses de taux d'actualisation et de croissance long terme des tests de dépréciation sont-elles conservatrices\u00A0?

### Contrats de location (IFRS 16) — RISQUE FAIBLE
Droits d'utilisation activés sur les locations d'équipements et terrains industriels. Impact visible et correctement présenté. Pas d'anomalie identifiée.

### Rémunération en actions — RISQUE FAIBLE
Les actions de performance (LTI) sont à un niveau raisonnable. La dilution structurelle vient surtout des **attributions d'actions gratuites** (1 pour 10 tous les ~2\u00A0ans), transparentes et bien communiquées.

### Parties liées — RISQUE FAIBLE
Pas de transaction avec parties liées significative identifiée. Structure actionnariale dispersée (pas d'actionnaire de référence dominant).

### Flux de trésorerie vs résultat net — RISQUE MODÉRÉ
**Point de vigilance** : surveiller l'écart entre résultat net récurrent (3,68\u00A0Mds€) et free cash-flow, dans un contexte de capex record (hydrogène, Électronique). Un écart croissant signalerait une capitalisation agressive de charges.

### Engagements hors bilan — RISQUE MODÉRÉ
Les contrats d'achat d'électricité long terme et les PPA renouvelables (3\u00A0TWh) constituent des engagements fermes potentiellement significatifs. Mentionnés en annexes, mais leur valorisation mark-to-market n'est pas toujours explicitée.

### Effet devises — RISQUE MODÉRÉ
L'exposition structurelle (~70\u00A0% du CA hors euro) crée une **volatilité du CA publié** (-3,2\u00A0% en 2025). Ce n'est pas une anomalie comptable mais un facteur à intégrer dans toute lecture des tendances publiées vs comparables.

---

### Verdict global
**Risque comptable : FAIBLE.** Air Liquide est parmi les communications financières les plus transparentes du CAC\u00A040, avec un double commissariat aux comptes. Pas de signal d'alerte majeur. La complexité des contrats long terme, le goodwill historique et l'effet devises méritent une vigilance annuelle, mais relèvent de la nature du business plus que d'une comptabilité agressive.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour le DG d'Air Liquide

### Stratégie et avantage concurrentiel

**1.** L'écart de marge opérationnelle avec Linde (~9\u00A0points) persiste depuis plus de 10\u00A0ans. Quels leviers **structurels** — et non conjoncturels — garantissent que l'objectif de +100\u00A0bps en 2026 et 2027 réduira durablement cet écart\u00A0?

**2.** Sur l'hydrogène, quelle est votre hypothèse de rentabilité minimale (TRI) pour décider d'investir\u00A0? À quel prix de l'électricité vos projets d'H₂ électrolytique deviennent-ils non viables sans subventions\u00A0?

**3.** Quelle est votre exposition aux 3 plus gros clients de l'Électronique, et quelles clauses vous protègent en cas de ralentissement du capex semi-conducteurs\u00A0?

### Allocation du capital

**4.** Le ROCE est à ~11\u00A0% — encore inférieur à celui de Linde. Quel est votre WACC actuel, et à quelle échéance visez-vous un ROCE structurellement supérieur au coût du capital\u00A0?

**5.** Avec un backlog d'investissements de ~4,9\u00A0Mds€, comment arbitrez-vous entre retour actionnarial (dividende, actions gratuites) et capex de croissance\u00A0? Quel niveau de dette nette/EBITDA jugez-vous optimal\u00A0?

**6.** Quelles seraient vos cibles d'acquisition prioritaires si une opportunité se présentait en Asie ou en Amérique du Nord\u00A0?

### Risques

**7.** L'effet de change vous a coûté -3,2\u00A0% de croissance publiée en 2025. Quelle est votre politique de couverture, et pourquoi ne couvrez-vous pas davantage cette exposition structurelle\u00A0?

**8.** Qu'est-ce qui change dans votre plan hydrogène si les subventions (IRA, politiques européennes) sont réduites de 30\u00A0%\u00A0?

**9.** Quel est votre scénario de risque principal sur l'Électronique en cas de ralentissement prolongé du cycle semi-conducteurs\u00A0? Quelle est la part fixe vs variable de vos coûts dans ce marché\u00A0?

### Vision long terme

**10.** Dans 10\u00A0ans, quelle sera la part de l'hydrogène bas-carbone dans le CA du groupe, et comment financez-vous la transition sans diluer excessivement les actionnaires\u00A0?

**11.** La menace des "gaz comme service" ou de nouveaux entrants sur l'électrolyse peut-elle remettre en cause le modèle on-site traditionnel\u00A0?

**12.** L'IA va-t-elle transformer votre chaîne opérationnelle (optimisation des unités, maintenance prédictive, logistique)\u00A0? Quel gain de productivité estimez-vous d'ici 2028\u00A0?

### Gouvernance et culture

**13.** Vous avez passé l'essentiel de votre carrière dans le groupe. Comment évitez-vous le biais de confirmation et remettez-vous en question les fondamentaux du modèle avec un regard neuf\u00A0?

**14.** Comment la diversité de l'encadrement se traduit-elle concrètement dans les décisions stratégiques et les performances opérationnelles\u00A0?

**15.** Quel est le risque que vous **sous-estimez le plus** aujourd'hui et que le marché ne voit pas encore\u00A0?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le "moat" protège les revenus, pas les marges
Les haussiers vantent les pipelines et les switching costs. Mais **Linde a les mêmes** — et fait mieux sur tous les indicateurs de rentabilité depuis 15\u00A0ans. Si le moat était si solide, pourquoi Air Liquide ne convertit-il pas cet avantage en marges supérieures\u00A0? La réponse inconfortable : le moat protège le chiffre d'affaires, mais la marge dépend de l'exécution opérationnelle — précisément le talon d'Achille historique d'Air Liquide vs Linde.

### 2. Concentration et cyclicité — Électronique
L'Électronique (~10\u00A0% du CA) est dominée par quelques grands fondeurs. Une pause dans le cycle capex semi-conducteurs compresse immédiatement la croissance du segment, et la composante Equipment & Installation est très cyclique. Les haussiers présentent cette cyclicité comme "temporaire et normalisée" — c'est peut-être simplement la nature structurelle du business.

### 3. L'hydrogène — un pari subventionné
Les investissements H₂ dépendent largement de subventions publiques. L'IRA américain est sous pression politique ; en Europe, plusieurs objectifs H₂ de 2030 ont été revus à la baisse. **Si les subventions se réduisent, une part du backlog d'investissement risque de générer un ROCE inférieur au WACC pendant une décennie.**

### 4. Valorisation — une prime qui ne pardonne pas
À **P/E ~26x**, Air Liquide se paie une prime nette vs le marché européen. Pour justifier ce multiple, le BPA doit croître de +8-10\u00A0%/an en régime de croisière. C'est possible — mais **toute déception de 2-3\u00A0% sur la croissance fait s'effondrer le multiple**. Un ralentissement comparable de +2\u00A0% à 0\u00A0% (récession industrielle légère) avec compression du P/E de 26x à 21x représenterait une baisse potentielle de 20-25\u00A0%.

### 5. L'effet devises masque la croissance réelle
En 2025, l'effet de change négatif de -3,2\u00A0% a transformé une croissance comparable de +2\u00A0% en **recul publié de -0,4\u00A0%**. Un investisseur en euros subit cette exposition structurelle (~70\u00A0% du CA hors zone euro) sans couverture complète. La "croissance comparable" flatte une réalité publiée plus terne.

### 6. Le re-rating est déjà partiellement dans les cours
Le "re-rating" espéré (réduction de l'écart de marge avec Linde) est dans le discours du management depuis février 2025 et a déjà soutenu le titre. Si l'exécution déçoit ne serait-ce que marginalement sur l'objectif 2026-2027, la déception boursière pourrait être sévère sur un titre à ~26x les bénéfices.

### Conclusion short
Air Liquide est une **excellente entreprise** — mais pas nécessairement une excellente action à ce prix. À ~26x les bénéfices, le titre intègre une exécution quasi parfaite de l'objectif de marge ET une transition réussie vers l'hydrogène. Si l'un de ces deux paris déçoit, la valorisation comprime. Le risque n'est pas la qualité du business — il est dans le **prix payé pour cette qualité**.`,
  },
];

export default { ...meta, modules };
