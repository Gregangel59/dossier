// ============================================================
//  DOSSIER : Figma, Inc. (FIG)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "fig",                      // identifiant d'URL : /dossier/fig
  ticker: "FIG",
  name: "Figma, Inc.",
  exchange: "NYSE",
  sector: "Logiciels de conception collaborative",
  initials: "FIG",                  // affiché dans la pastille
  tagline: "La plateforme de conception collaborative devenue l'atelier où les équipes produit dessinent, prototypent et livrent — désormais avec des agents d'IA.",
  riskScore: 58,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Détail selon la grille de notation v1 (risk-grid.js)
  riskGrid: { version: 1, valorisation: 39, sante: 55, croissance: 85 },
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "fig.html",
  updated: "2026-10",               // période des données
  published: "2026-10-08",          // date de publication (tri « À la une »)
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Figma est une **plateforme logicielle de conception et de développement de produits numériques**, accessible directement dans le navigateur. Fondée en 2012 par **Dylan Field** et **Evan Wallace**, deux étudiants de Brown University soutenus par une bourse Thiel, l'entreprise a imposé une idée simple : la conception d'interfaces doit être **collaborative et en temps réel**, comme un document partagé, plutôt qu'un fichier envoyé par courriel.

Introduite au NYSE le **31 juillet 2025** à 33 $ (clôture du premier jour à 115,50 $, soit +250 %), Figma a réalisé **1,056 Md$ de chiffre d'affaires en 2025 (+41 %)** et vise **1,463 à 1,467 Md$ en 2026 (+39 % au point médian)**. Le titre cote environ **22 $** début octobre 2026, soit une capitalisation d'environ **11,7 Md$**.

Le modèle repose sur trois mécanismes :
- **Abonnement par siège (SaaS)** : formules Professional, Organization et Enterprise, avec des sièges « Full », « Dev » ou « Collab » selon l'usage
- **Croissance par l'usage (product-led growth)** : un designer adopte l'outil gratuitement, invite ses collègues, puis l'entreprise signe un contrat Organization ou Enterprise
- **Monétisation de l'IA par crédits** : depuis le **18 mars 2026**, les clients qui dépassent l'enveloppe d'IA incluse dans leur abonnement achètent des crédits supplémentaires — un étage de revenus à l'usage qui vient s'ajouter aux sièges

## Principaux produits et services

Figma n'est plus un outil unique mais une **suite d'environ huit produits** partageant le même canevas :
- **Figma Design** : le cœur historique — conception d'interfaces, systèmes de design, prototypage
- **Dev Mode** : la passerelle vers les développeurs (inspection, export de code, intégrations)
- **FigJam** : tableau blanc collaboratif (ateliers, diagrammes)
- **Figma Slides**, **Figma Sites**, **Figma Buzz** (contenus marketing), **Figma Draw**
- **Figma Make** : génération d'applications et de prototypes fonctionnels à partir d'une description en langage naturel
- **Figma Weave** (ex-Weavy, racheté fin 2025) : génération et édition d'images et de vidéos par IA
- **Figma agent** et **Code Layers** (annoncés à Config, juin 2026) : un agent intégré au canevas et des calques adossés à du vrai code, éditables visuellement ou en code

## Clients, fournisseurs, concurrents

**Clients** : plus de 13 millions d'utilisateurs mensuels et environ **95 % des entreprises du Fortune 500** utilisent la plateforme ; environ deux tiers des utilisateurs ne sont pas designers (chefs de produit, développeurs, marketeurs). Au 30 juin 2026 : **15 964 clients à plus de 10 000 $ d'ARR** (+34 %) et **1 635 clients à plus de 100 000 $** (+46 %). L'Inde est le deuxième marché par nombre d'utilisateurs actifs.

**Fournisseurs** : hébergement cloud (AWS principalement), fournisseurs de modèles d'IA (Anthropic, OpenAI, Google), outils d'infrastructure.

**Concurrents** : **Adobe** (Express, Firefly — Adobe XD a été abandonné), **Canva** (non coté), des outils de génération par IA (**Claude Design** d'Anthropic, lancé en avril 2026 ; **Stitch** de Google ; Lovable, Bolt, v0), **Miro** sur le tableau blanc, et des alternatives de niche (Sketch, Framer, Penpot).

## Modalités contractuelles

- **Abonnements annuels ou mensuels**, facturés d'avance pour l'essentiel : les **revenus différés atteignent 626,8 M$** au 30 juin 2026, un coussin de trésorerie et de visibilité
- **Contrats Enterprise pluriannuels** avec engagements de sièges, renouvelés en moyenne avec expansion : le **taux de rétention nette en dollars (NDR) est de 136 %** chez les clients à plus de 10 000 $ d'ARR, avec une rétention brute « dans le haut des 90 % » selon la direction
- **Crédits d'IA** : vendus en complément, avec un modèle de tarification encore en rodage (prix des crédits Figma Make réduits d'environ moitié en septembre 2026 pour stimuler l'usage)

> **Note de prudence** : Figma est **rentable en données ajustées** (marge opérationnelle non-GAAP de 10 % au T2 2026) mais **déficitaire en normes GAAP** (perte nette de 112 M$ au T2 2026), en raison d'une rémunération en actions massive (148 M$ sur le trimestre, soit 40 % du chiffre d'affaires). Toute lecture des marges doit distinguer ces deux référentiels.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Figma dans la chaîne de valeur

Figma n'a pas de chaîne d'approvisionnement physique : sa « matière première » est la **puissance de calcul** (hébergement et inférence d'IA) et son « usine » est le **canevas multijoueur** qui tourne dans le navigateur. L'entreprise se situe au **point de passage entre l'idée et le code** : c'est là que les équipes produit décident de ce qui sera construit.

### Amont — Intrants technologiques

**Infrastructure cloud** :
- **Amazon Web Services** — hébergement principal ; le prospectus d'introduction mentionnait un engagement d'environ 545 M$ sur cinq ans
- Navigateurs et standards du web (WebAssembly, WebGL/WebGPU) sur lesquels repose le moteur de rendu maison

**Modèles d'IA** (le poste de coût qui monte le plus vite) :
- **Anthropic** (modèles Claude, utilisés notamment dans Figma Make et certains produits fédéraux)
- **OpenAI** et **Google** (Gemini) — Figma Make permet de choisir parmi plusieurs modèles
- **Modèle propriétaire** : l'agent Figma s'appuie « de plus en plus » sur un modèle maison, pour réduire le coût d'inférence

**Acquisitions technologiques** : Weavy (Israël, fin 2025, devenu Figma Weave) ; rachats ciblés d'équipes pour l'IA et le code.

**Impact visible** : le coût des revenus a bondi de **117 % au T2 2026** (60,5 M$ contre 27,9 M$), et la marge brute GAAP est passée de 89 % à 84 %.

---

### Figma — Le canevas partagé

**Création** : Figma Design, FigJam, Slides, Sites, Buzz, Draw, Weave
**Construction** : Dev Mode, Figma Make, Code Layers, serveur MCP (qui permet aux agents de code de lire et d'écrire dans Figma)
**Orchestration** : agent Figma, « Skills » (règles et standards propres à chaque équipe), plugins génératifs

---

### Écosystème d'intégrations — Partenaires et canaux

- **Agents de code et assistants** : application Figma dans **ChatGPT**, application MCP dans **Claude**, intégration **Codex** (OpenAI), fonction « Claude Code vers Figma »
- **Outils de développement et de gestion** : **GitHub**, **Atlassian** (Jira, Confluence), **Notion**, **Linear** (connecteurs Make)
- **Logiciels d'entreprise** : partenariat avec **ServiceNow** (novembre 2025)
- **Communauté** : des milliers de plugins et de fichiers publiés par les utilisateurs

---

### Aval — Clients finaux

**Équipes produit des grandes entreprises** : plus de 95 % du Fortune 500 ; 67 clients à plus de 1 M$ d'ARR fin 2025.
**PME et indépendants** : alimentés par la version gratuite et la formule Professional.
**Secteur public** : produits dédiés au gouvernement fédéral américain.
**International** : un peu plus de la moitié du chiffre d'affaires hors des États-Unis ; croissance internationale de **+50 % au T2 2026** ; ouverture d'un bureau à Bengaluru.

---

### Cartographie simplifiée du flux

\`\`\`
INTRANTS                 →   FIGMA (CANEVAS)               →   CLIENTS FINAUX
AWS (cloud)                  Design · FigJam · Slides          Designers
Anthropic, OpenAI,           Make · Code Layers · Weave        Chefs de produit
Google (modèles d'IA)        Dev Mode · serveur MCP            Développeurs + agents
Modèle propriétaire          Agent Figma · Skills              Marketing, secteur public
(coût d'inférence)           (sièges + crédits d'IA)           (95 % du Fortune 500)
\`\`\`

**Le point de tension** : Figma achète une partie de son « intelligence » à des fournisseurs de modèles qui sont **aussi devenus des concurrents** (Claude Design chez Anthropic, Stitch chez Google). Cette dépendance croisée est la grande nouveauté du risque depuis 2026.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation du chiffre d'affaires

**Avertissement méthodologique** : Figma déclare **un seul secteur opérationnel**. Il n'existe donc ni EBITDA ni résultat net publiés par produit. La décomposition ci-dessous s'appuie sur les indicateurs que la société communique (clients, rétention, international) et sur les tendances trimestrielles.

### Trajectoire trimestrielle

| Trimestre | Chiffre d'affaires | Croissance a/a | Marge op. non-GAAP | Résultat net GAAP |
|---|---|---|---|---|
| T2 2025 | 249,6 M$ | +41 % | 5 % | +28,2 M$ |
| T3 2025 | 274,2 M$ | +38 % | ~12 % | −1 097 M$ (charge unique liée à l'IPO) |
| T4 2025 | 303,8 M$ | +40 % | 14 % | −226,6 M$ |
| T1 2026 | 333,4 M$ | +46 % | 16 % | −142,4 M$ |
| T2 2026 | 370,1 M$ | +48 % | 10 % | −112,2 M$ |

**Lecture** : la croissance **accélère depuis trois trimestres consécutifs** (38 % → 40 % → 46 % → 48 %), un fait rare pour un logiciel de plus d'un milliard de dollars de chiffre d'affaires. La marge ajustée, elle, a reculé au T2 sous l'effet de la conférence Config et des coûts d'IA.

### Ventilation par type de revenu

| Source | Poids | Dynamique |
|---|---|---|
| Sièges (Full, Dev, Collab) | Très majoritaire | Expansion à chaque renouvellement : environ deux tiers des clients à plus de 10 000 $ ajoutent des sièges Full |
| Crédits d'IA (depuis mars 2026) | Encore marginal | Plus de 80 % des clients à plus de 10 000 $ en consomment chaque semaine |
| Produits en bêta (agent, Code Layers) | Non monétisés | Exclus des prévisions — option de hausse |

### Ventilation par taille de client

- **Clients à plus de 10 000 $ d'ARR** : 15 964 (+34 %), NDR de 136 %
- **Clients à plus de 100 000 $** : 1 635 (+46 %) — le segment qui croît le plus vite
- **Clients à plus de 1 M$** : 67 fin 2025

### Répartition géographique

| Zone | Poids approximatif | Dynamique |
|---|---|---|
| États-Unis | Un peu moins de la moitié | Croissance soutenue, cœur Enterprise |
| International | Un peu plus de la moitié | +45 % en 2025, **+50 % au T2 2026** |

L'Inde est le deuxième marché en utilisateurs actifs mensuels ; Figma y a ouvert un bureau et propose un hébergement local des données.

---

### Évolution des marges et de la rentabilité

- **Marge brute GAAP** : 92 % fin 2024 → 82 % sur 2025 → **84 % au T2 2026** (89 % un an plus tôt). La baisse vient de l'inférence d'IA et de l'amortissement d'actifs acquis.
- **Marge opérationnelle non-GAAP** : 17 % en 2024 → 12 % en 2025 → **objectif d'environ 9 % en 2026** (125 à 135 M$)
- **Marge opérationnelle GAAP** : −122 % en 2025 (charge unique de 975,7 M$ liée à l'introduction en Bourse), **−32 % au T2 2026**
- **Flux de trésorerie disponible** : 242,7 M$ en 2025 (23 % du CA), **141,8 M$ au premier semestre 2026** (20 %)

**Lecture** : Figma est un actif de **croissance qui accélère**, mais dont la rentabilité ajustée **recule volontairement** pour financer l'IA. Le marché attend la preuve que les crédits d'IA finiront par **remonter la marge brute**.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (moats)

### 1. Effet de réseau et standard de fait — le fossé principal
Figma est devenu le **format de travail commun** des équipes produit : la part de marché dans la conception d'interfaces est estimée entre 80 et 90 % (estimation de place). Un designer qui change d'entreprise retrouve Figma ; un développeur reçoit des maquettes Figma ; un prestataire livre des fichiers Figma. Ce standard se renforce à chaque nouvel utilisateur — et deux tiers des utilisateurs ne sont pas designers.

### 2. Coûts de changement élevés : le système de design
Les grandes entreprises encodent dans Figma leurs **bibliothèques de composants, couleurs, typographies et règles**. Migrer signifie reconstruire des années de travail et reformer des milliers de personnes. La **rétention brute dans le haut des 90 %** et le **NDR de 136 %** en sont la preuve chiffrée.

### 3. Le moteur technique multijoueur
Le canevas de Figma (rendu en WebAssembly et WebGL, synchronisation en temps réel) reste difficile à reproduire à ce niveau de performance sur des fichiers lourds. Dylan Field en fait son principal argument face aux nouveaux venus de l'IA.

### 4. Le « contexte produit » — un fossé qui gagne de la valeur avec l'IA
Les agents d'IA (internes ou externes) ont besoin de **contexte** : composants, historique, règles de marque. Figma détient ce contexte. Le serveur MCP, qui permet aux agents de code de lire et d'écrire dans Figma, a vu ses utilisateurs actifs **quintupler au T1 2026**, puis l'usage d'écriture progresser de **75 % au T2**. Les clients à plus de 100 000 $ qui utilisent le MCP ajoutent des sièges Full environ **70 % plus vite** que les autres.

### 5. Marque et communauté
Conférence Config (plus de 10 000 participants en 2026), communauté de plugins, « Figma » devenu un verbe chez les designers.

## Positionnement vs concurrence

| Critère | Figma | Adobe | Canva | IA « natives » (Claude Design, Stitch…) |
|---|---|---|---|---|
| Cœur de cible | Équipes produit | Créatifs professionnels | Grand public et marketing | Non-designers |
| Collaboration temps réel | Référence | Partielle | Forte | Conversationnelle |
| Système de design d'entreprise | Très fort | Moyen | Moyen | Importe celui des autres |
| Croissance du CA | ~+40-48 % | ~+10 % | Forte (non coté) | Nouvelle |
| Rentabilité GAAP | Négative | Très élevée | Rentable (déclaré) | Non pertinente |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **élevé** — un outil critique, peu coûteux par rapport à la masse salariale des équipes qui l'utilisent ; la hausse des prix et le passage aux crédits ont été absorbés (plus de 75 % des utilisateurs Org et Enterprise ont continué à consommer des crédits après la mise en place des limites)
- **Vis-à-vis des fournisseurs de modèles d'IA** : **faible à modéré** — Figma dépend de modèles tiers dont certains éditeurs sont devenus concurrents ; d'où l'effort sur un modèle propriétaire
- **Vis-à-vis des hébergeurs cloud** : **modéré** — engagements pluriannuels, mais coût d'hébergement historiquement faible au regard de la marge brute
- **Vis-à-vis des talents** : **dépendant de l'action** — la rémunération en actions (environ 27 % du CA attendus en 2026 selon les estimations citées par un actionnaire activiste) est le prix de l'attractivité dans la Silicon Valley

**Le débat central** : le fossé de Figma est-il un **fossé d'outil** (menacé si l'IA rend l'outil superflu) ou un **fossé de flux de travail et de contexte** (renforcé par l'IA) ? Les chiffres de 2026 — accélération du CA et NDR stable — penchent pour la seconde hypothèse, mais la preuve sur la marge brute reste à apporter.`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Logiciels de conception et de collaboration (octobre 2026)

| Société | Code Bloomberg | Capitalisation | EV/CA | EV/EBIT | P/E (12 mois) | Rendement div. | ROE moyen 5 ans |
|---|---|---|---|---|---|---|---|
| **Figma** | **FIG US** | **~11,7 Md$** | **~7,9× (TTM) · ~6,9× 2026E** | **n.s. (GAAP) · ~76× ajusté** | **~76× (BPA ajusté 2026E)** | **0 %** | **n.s. (pertes GAAP)** |
| Adobe | ADBE US | ~105-110 Md$ | ~4× | ~12× | ~11-15× | 0 % | ~33 % |
| Atlassian | TEAM US | ~48 Md$ | ~7,5× | n.s. (GAAP) | ~36× | 0 % | n.s. (pertes GAAP) |
| Autodesk | ADSK US | ~50-55 Md$ | ~7× | ~30× | ~25× | 0 % | ~45 % |
| Canva | Non coté | ~42 Md$ (valorisation privée 2025) | n.d. | n.d. | n.d. | n.d. | n.d. |

*Ordres de grandeur établis à partir des cours et publications disponibles début octobre 2026 — à recouper sur Bloomberg avant toute utilisation. Le P/E de Figma est calculé sur le BPA ajusté estimé ; en normes GAAP, il n'est pas significatif.*

---

### Analyse comparative

**Figma — la croissance la plus rapide du panel**
Avec **+48 % de croissance au T2 2026**, Figma croît **quatre à cinq fois plus vite** qu'Adobe. Pourtant, son multiple de chiffre d'affaires (~7,9×) n'est qu'en ligne avec Atlassian et Autodesk, qui croissent deux fois moins vite. Le marché applique donc une **décote de risque de disruption** — le même « procès de l'IA » qu'il fait à Adobe, dont le P/E est tombé autour de 11 à 15 fois.

**Adobe — le rival historique, devenu une valeur de rendement**
Adobe avait proposé **20 Md$** pour racheter Figma en 2022. L'opération a été abandonnée en décembre 2023 face aux régulateurs européen et britannique, avec une **indemnité de rupture d'1 Md$ versée à Figma**. Aujourd'hui, Figma vaut à peine plus de la moitié de ce prix, avec un chiffre d'affaires environ trois fois supérieur à celui de l'époque. Adobe reste rentable (marge brute d'environ 89 %), mais sa croissance plafonne autour de 10 %.

**Canva — le concurrent non coté**
Canva vise le grand public et le marketing ; il a racheté Affinity en 2024 pour monter vers les professionnels et s'est associé à Anthropic (les créations de Claude Design s'exportent vers Canva). C'est le rival le plus probable sur les **non-designers**, précisément le public que Figma conquiert avec Make, Buzz et Slides.

**Les nouveaux entrants de l'IA — hors tableau mais au centre du débat**
**Claude Design** (Anthropic, avril 2026), **Stitch** (Google, gratuit), et les générateurs d'applications (Lovable, Bolt, v0) ne sont pas cotés ou sont des lignes de produit de géants. Ils pèsent sur le **multiple** de Figma plus que sur ses chiffres, qui accélèrent toujours.

---

### Le ratio qui compte : croissance ajustée du multiple
Rapporté à sa croissance, Figma est l'actif **le moins cher du panel** : environ 0,2 fois le multiple de CA par point de croissance, contre environ 0,4 pour Adobe et Atlassian. Mais rapporté à ses **bénéfices GAAP**, il reste le plus cher, faute de bénéfices. Le juge de paix sera la **conversion de la croissance en marge** une fois la rémunération en actions normalisée.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats du T2 2026 (publiés le 5 août 2026) — Analyse

### Chiffre d'affaires et bénéfices vs consensus

| Indicateur | T2 2026 | Consensus | Écart | T2 2025 |
|---|---|---|---|---|
| Chiffre d'affaires | **370,1 M$** | ~351,5 M$ | **+5,3 % ✓** | 249,6 M$ |
| Croissance a/a | **+48 %** | ~+41 % | Accélération | +41 % |
| BPA ajusté (non-GAAP) | **0,08 $** | 0,04 $ | **×2 ✓** | 0,00 $ |
| Résultat op. non-GAAP | 36,1 M$ (10 %) | — | — | 11,5 M$ (5 %) |
| Résultat net GAAP | **−112,2 M$** | — | — | +28,2 M$ |
| BPA GAAP | −0,21 $ | — | — | 0,00 $ |
| Flux de trésorerie disponible | 53,2 M$ (14 %) | — | — | 60,6 M$ (24 %) |

**Lecture** : un **dépassement net** du consensus sur le chiffre d'affaires et le BPA ajusté, pour le **troisième trimestre consécutif d'accélération**. Mais le résultat GAAP reste nettement déficitaire et la trésorerie générée recule.

---

### Facteurs clés

- **Expansion des sièges** : environ deux tiers des clients à plus de 10 000 $ ont ajouté des sièges Full au renouvellement
- **Premier trimestre complet de monétisation de l'IA** : plus de 80 % des clients à plus de 10 000 $ consomment des crédits chaque semaine
- **NDR de 136 %** (139 % au T1), clients à plus de 100 000 $ en hausse de 46 %
- **International** : +50 %
- **Lancements de Config** : Code Layers, agent Figma (plus de 50 % des clients à plus de 10 000 $ l'utilisent chaque semaine dès fin juillet), Motion, Shaders, Weave Tools

---

### Évolution des marges — le point noir

- **Coût des revenus : +117 %** (inférence d'IA et hébergement) ; marge brute GAAP de **84 %** contre 89 %
- **R&D GAAP : +101 %** à 167,3 M$ ; frais commerciaux gonflés par Config
- **Marge opérationnelle non-GAAP : 10 %**, contre 16 % au T1
- **Rémunération en actions : 147,6 M$**, soit **40 % du CA** du trimestre

La direction prévient que la marge brute **variera d'un trimestre à l'autre** : elle finance l'usage de produits en bêta (agent, Code Layers) qui ne consomment pas encore de crédits payants.

---

### Prévisions

- **T3 2026** : 373 à 375 M$, soit **+36 %** au point médian — une décélération apparente, liée à une base de comparaison plus exigeante et à la prudence habituelle de la direction
- **Exercice 2026** : CA relevé de **40 M$** à **1,463-1,467 Md$ (+39 %)** ; résultat opérationnel non-GAAP maintenu à **125-135 M$ (~9 %)**
- Les produits en bêta **ne sont pas inclus** dans les prévisions

---

### Bilan — points de vigilance

- **Trésorerie et placements : 1,67 Md$, aucune dette** — un bilan de forteresse
- **Revenus différés : 626,8 M$** (+5 % sur six mois), signe de la visibilité des abonnements
- **Créances clients** en baisse à 190,9 M$ (saisonnalité de la facturation annuelle du T4)
- **Impôts payés pour le règlement net des actions gratuites : 161,6 M$ au premier semestre** — de la trésorerie consommée pour limiter la dilution
- **Avoirs en actifs numériques** (bitcoin) : environ 26 M$, marginaux mais volatils

---

### Réaction du marché

Malgré le dépassement, le titre a **chuté de 14,9 %** le 6 août. Trois raisons : la **hausse des coûts d'IA** (le marché craint une marge brute durablement plus basse), la **prévision de T3 à +36 %**, et le **départ annoncé du directeur produit et de la directrice marketing**. S'y ajoutait la levée du dernier verrou de cession des salariés (lock-up) en août. **Ce qui était dans les cours** : une croissance forte. **Ce qui ne l'était pas** : le prix à payer en marge pour l'obtenir.

> **Prochaine publication** : résultats du T3 2026 attendus début novembre 2026 (date à confirmer).`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse du discours du management

### Ton général — depuis l'introduction en Bourse

Figma n'est cotée que depuis juillet 2025 : l'historique compte **cinq conférences de résultats**. Le ton est constant sur le fond (« la conception gagne en valeur à l'ère de l'IA ») mais a évolué sur la forme.

**Septembre 2025 (T2 2025, première conférence)** : ton **pédagogique et prudent**. Dylan Field martèle que l'IA amplifiera le rôle des designers ; le directeur financier Praveer Melwani annonce de futurs crédits d'IA payants. Le marché sanctionne la valorisation (−20 %).

**Novembre 2025 (T3)** : ton **conquérant**. Dépassement, prévisions relevées, 540 000 clients payants. Figma Make est présenté comme le moteur de conversion.

**Février 2026 (T4)** : ton **ambitieux mais transparent sur les coûts**. « 2025 a été une année massive. » Prévision 2026 de +30 %, au-dessus du consensus, avec une marge ajustée ramenée vers 8 % pour financer l'IA. La direction prévient d'une **volatilité possible des revenus** pendant la transition vers le modèle sièges + crédits.

**Mai 2026 (T1)** : ton **combatif**. Un mois après le lancement de Claude Design, Field reconnaît : « en ce qui concerne Anthropic, nous ne pouvons évidemment pas les ignorer », avant de défendre la performance du canevas multijoueur et la profondeur du contexte produit. Prévision relevée de 55 M$.

**Août 2026 (T2)** : ton **visionnaire** (« à mesure que le code se banalise, la valeur remonte dans la chaîne ») mais **plus défensif sur les marges** et marqué par des **changements de direction**.

---

### Priorités répétées du management

**1. Le canevas comme interface durable** — Figma se positionne comme le « canevas de la création complète » : design, code et agents au même endroit. Code Layers et Make sur code local en sont l'incarnation.

**2. La monétisation de l'IA en deux temps** — d'abord l'usage (y compris gratuit en bêta), ensuite la facturation. D'où la **baisse d'environ 50 % du prix des crédits Make** annoncée en septembre 2026 : « la croissance de l'usage avant la marge de court terme ».

**3. Vitesse, coût, qualité** — les trois objectifs fixés pour l'agent. Le modèle propriétaire doit faire baisser le coût d'inférence sans dégrader la qualité ni la latence.

**4. L'expansion des sièges** — le message de la direction est que l'IA **élargit** le nombre de personnes qui ont besoin d'un siège payant : plus de 20 % des utilisateurs qui consomment des crédits le font uniquement via l'agent.

**5. Discipline financière affichée** — résultat opérationnel non-GAAP positif, trésorerie disponible positive, aucune dette.

---

### Analyse du sentiment

| Conférence | Confiance | Prudence sur les marges | Mots-clés dominants |
|---|---|---|---|
| T2 2025 | Moyenne | Faible | designers, IA, crédits futurs |
| T3 2025 | Élevée | Faible | Make, accélération |
| T4 2025 | Élevée | Moyenne | plateforme, investissement |
| T1 2026 | Élevée | Moyenne | rétention, Anthropic, MCP |
| T2 2026 | Élevée | **Élevée** | code, agents, coûts d'inférence |

- **Confiance** : élevée et stable — la direction relève ses prévisions de chiffre d'affaires à chaque trimestre depuis l'introduction en Bourse.
- **Prudence croissante** sur la marge brute : Field a reconnu en septembre une **incertitude sur les six mois suivants** et des problèmes de qualité persistants avec les modèles de pointe.
- **Signal à surveiller** : le recadrage des responsabilités (directeur technique devenu « architecte en chef », départ du directeur produit et de la directrice marketing) au moment où la feuille de route produit est la plus chargée.

> **À lire entre les lignes** : la direction assume de **sacrifier la marge à court terme** pour gagner la bataille de l'usage de l'IA. C'est cohérent avec une logique de fondateur — mais cela suppose que les crédits d'IA deviennent rentables avant que la patience du marché ne s'épuise.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Dylan Field — Cofondateur, président-directeur général et président du conseil

**Bilan** :
- **Cofondateur en 2012** (à 20 ans, après avoir quitté Brown University grâce à une bourse Thiel) ; directeur général depuis l'origine, soit **14 ans d'ancienneté**
- A imposé un **nouveau standard** : la conception collaborative dans le navigateur, alors que l'industrie reposait sur des logiciels installés
- A porté l'entreprise de zéro à **1,056 Md$ de CA en 2025**, avec une croissance qui **réaccélère** à +48 % à plus d'un milliard de dollars de revenus
- A conduit la négociation avec Adobe (**20 Md$** proposés en 2022) puis géré l'échec réglementaire, transformé en **1 Md$ d'indemnité** de rupture, avant de réussir l'introduction en Bourse de 2025
- A lancé le virage IA (Make, Weave, agent, Code Layers) en moins de deux ans

**Participation financière** : environ **79 millions d'actions** sous son contrôle (environ 15 % des actions de classe A sur base convertie), soit environ 1,7 Md$ au cours actuel. Grâce à des **actions de classe B à droits de vote multiples** et à une procuration irrévocable sur les titres du cofondateur Evan Wallace, il contrôlait environ **75 % des droits de vote** après l'introduction en Bourse.

**Evan Wallace**, cofondateur et ancien directeur technique, a quitté les fonctions opérationnelles en 2021 ; ses voix sont exercées par Dylan Field.

---

### Équipe dirigeante

| Fonction | Titulaire | Évolution récente |
|---|---|---|
| Directeur financier | Praveer Melwani (depuis mars 2022) | Stable |
| Directeur commercial | Shaunt Voskanian | Stable |
| Directeur technique | Kris Rasmussen | Devient « architecte en chef » (agent Figma) ; recherche d'un nouveau directeur technique |
| Directeur produit | Yuhki Yamashita | **Départ** après sept ans ; produit confié à Loredana Crisan (directrice du design) |
| Directrice marketing | Sheila Vashee | **Départ** fin août 2026 ; remplacée par Nairi Hourdajian |
| Sécurité | Dev Akhawe | Promu directeur de la sécurité |

---

### Allocation du capital

| Décision | Montant | Lecture |
|---|---|---|
| Rachat par Adobe (abandonné) | 20 Md$ proposés, 1 Md$ d'indemnité reçue | Issue favorable pour l'actionnaire |
| Introduction en Bourse | 393 M$ nets levés | Peu dilutive pour la société, surtout des cessions d'actionnaires |
| Acquisitions ciblées | Weavy (fin 2025) et petites équipes | Disciplinées ; goodwill limité à 101 M$ |
| Investissement IA | R&D GAAP +101 % au T2 2026 | Massif, rendement encore non prouvé |
| Règlement net des actions gratuites | 161,6 M$ d'impôts payés au S1 2026 | Limite la dilution mais consomme la trésorerie |
| Trésorerie en bitcoin | ~26 M$ | Marginal mais peu orthodoxe |

**ROE/ROIC** : négatifs en normes GAAP depuis 2024 (rémunération en actions). En données ajustées, la rentabilité est positive mais faible (marge opérationnelle de 9 à 16 %). La qualité de l'allocation du capital se jugera sur la **rentabilité des investissements d'IA**.

---

### Signaux d'alerte

- **Rémunération en actions excessive** : 1,36 Md$ en 2025 (dont 975,7 M$ ponctuels liés à l'introduction en Bourse) et 316,6 M$ au premier semestre 2026, soit **45 % du CA**. Un actionnaire activiste (Findell Capital) a demandé en mai 2026 un alignement sur les normes du secteur.
- **Contrôle verrouillé** : environ 75 % des voix pour le fondateur — les actionnaires minoritaires n'ont pas de levier sur la stratégie.
- **Conflit d'intérêts potentiel** : Mike Krieger, directeur produit d'Anthropic, a quitté le conseil le 14 avril 2026, trois jours avant le lancement de Claude Design. Deux administrateurs (issus de Kleiner Perkins et Sequoia) représentent des fonds exposés à Anthropic. **Il s'agit d'allégations d'un actionnaire, pas de constats.**
- **Ventes d'initiés régulières** (programmes 10b5-1), dont environ 8,2 M$ pour le directeur technique.
- **Instabilité de l'équipe de direction** au T2 2026.

---

### Type de dirigeant

**Fondateur-visionnaire**, profil produit et design. À ce stade (plateforme en pleine reconversion vers l'IA), c'est un **atout** : la capacité à cannibaliser son propre produit et à prendre des décisions de long terme impopulaires (baisse des prix des crédits) est typique des fondateurs. Le **revers** : une gouvernance où le fondateur est juge et partie, et une discipline de coûts qui doit encore être démontrée.`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs ayant influencé le cours

### Contexte
Figma n'est cotée que depuis le **31 juillet 2025**. En quatorze mois, le titre est passé de **33 $** (prix d'introduction) à un plus haut de **142,92 $** (1er août 2025), puis à un plus bas de **16,60 $** (juin 2026), avant de se stabiliser autour de **22 $** début octobre 2026. Les variations de plus de 5 % ont été fréquentes : le titre est piloté par le **récit sur l'IA** davantage que par ses résultats, qui ont dépassé le consensus à chaque trimestre.

### Hausses significatives

**31 juillet 2025 — Introduction en Bourse historique** : prix fixé à 33 $, ouverture à 85 $, clôture à 115,50 $ (**+250 %**), l'un des plus forts premiers jours d'une grande introduction américaine depuis des années.

**Novembre 2025 — Résultats du T3** : +4,5 % avant-Bourse après un dépassement de 10 M$ et des prévisions relevées.

**Février 2026 — Résultats du T4** : rebond (le titre gagne environ 22 % sur le mois) grâce à une prévision de CA 2026 supérieure au consensus (1,37 Md$ contre 1,29 Md$).

**15 mai 2026 — Résultats du T1** : **+10 %** après la clôture. Croissance de 46 %, BPA ajusté de 0,10 $ contre 0,06 $ attendus, prévision relevée de 55 M$, et preuve que les clients paient les crédits d'IA.

**28 mai 2026 — Lettre de Findell Capital** : l'actionnaire activiste juge le titre « significativement sous-évalué » (objectif de 40 $) ; +5 %.

**Juillet 2026** : rebond de plus de 20 % après l'initiation de Citigroup à l'achat (objectif de 36 $) et les annonces de Config.

---

### Baisses significatives

**4 septembre 2025 — Première publication** : **−20 %** malgré des résultats solides ; valorisation jugée excessive (plus de 200 fois les bénéfices ajustés attendus) et levée imminente d'un quart des verrous de cession des salariés.

**Novembre 2025** : **−28 %** sur le mois, sur fond de craintes de bulle de l'IA et de rotation hors des introductions récentes.

**Janvier 2026** : **environ −31 %** sur le mois, dans la vague de ventes sur le logiciel (« SaaSpocalypse ») déclenchée par la crainte que les agents d'IA ne remplacent les logiciels par siège.

**Mars-avril 2026** : nouvelle baisse. Le **17 avril**, le lancement de **Claude Design** par Anthropic fait chuter le titre de **6,8 %** à 19,03 $ — trois jours après la démission de Mike Krieger du conseil. Le titre perd 16 % en avril.

**Juin 2026** : **−29 %** sur le mois, plus bas historique à 16,60 $. La capitalisation passe d'environ 59 Md$ au sommet à environ 9 Md$.

**6 août 2026 — Résultats du T2** : **−14,9 %** malgré un dépassement : coûts d'IA en forte hausse, prévision de T3 à +36 %, départs de dirigeants, levée du dernier verrou de cession.

**8 septembre 2026 — Conférence Goldman Sachs** : **−5,7 %** à 22,75 $ après l'annonce d'une baisse d'environ 50 % du prix des crédits Make.

---

### Facteurs structurels

- **Le récit « l'IA va-t-elle remplacer l'outil ? »** : chaque lancement d'un outil de conception par un laboratoire d'IA fait baisser le titre, chaque publication trimestrielle le fait (temporairement) remonter
- **L'offre de titres** : levées successives des verrous de cession (septembre 2025, août 2026) et ventes régulières d'initiés
- **La valorisation de départ** : une introduction à plus de 50 fois le CA laissait peu de marge à la déception
- **Le consensus** : l'objectif moyen des analystes est tombé de 71 $ (été 2025) à environ **31-32 $**, avec une majorité de recommandations « conserver »
- **Volatilité élevée** : des variations mensuelles de ±20 à 35 % sont la norme depuis l'introduction`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Avertissement
Figma publie deux bénéfices très différents : le **BPA ajusté** (hors rémunération en actions) est positif, le **BPA GAAP** est négatif. L'écart — environ 600 M$ par an de rémunération en actions — est le cœur du débat. Les estimations ci-dessous présentent les deux. Elles reposent sur les prévisions de la direction et sur nos hypothèses ; des chiffres plus précis exigeraient un modèle complet bâti sur les dépôts 10-Q et 10-K.

### Hypothèses de modélisation

**Chiffre d'affaires** :
- **Croissance du marché** : la conception de produits numériques s'élargit aux non-designers et aux agents ; le marché adressable revendiqué dépasse largement le cœur historique des designers
- **Gains de parts de marché** : modestes dans la conception d'interfaces (déjà dominante) ; significatifs dans le prototypage par IA et la passerelle vers le code
- **Hausses de prix et crédits d'IA** : contribution croissante à partir de 2027, une fois les produits en bêta (agent, Code Layers) monétisés
- **Trajectoire retenue** : 1,47 Md$ en 2026 (+39 %), **1,78 Md$ en 2027 (+21 %)**, **2,12 Md$ en 2028 (+19 %)**

**Pressions sur les coûts** :
- Inférence d'IA : marge brute non-GAAP maintenue entre 84 et 86 %, sans retour aux 90 % d'avant l'IA
- R&D : forte en 2026, puis progression inférieure à celle du CA

**Levier opérationnel** :
- Marge opérationnelle non-GAAP : **~9 % en 2026**, ~11 % en 2027, ~14 % en 2028

**Coûts de financement** : aucun — Figma n'a pas de dette ; les revenus d'intérêts sur 1,7 Md$ de trésorerie (environ 55 M$ par an) soutiennent le résultat.

**Fiscalité** : taux normatif de 14,5 % retenu par la société pour ses chiffres ajustés.

**Dilution** : environ **3 % par an** (actions gratuites des salariés, partiellement compensées par le règlement net), soit environ 548 M d'actions diluées en 2026, 565 M en 2027 et 580 M en 2028.

---

### Estimations de BPA

| Exercice | CA | BPA ajusté | Croissance | BPA GAAP (estimé) | P/E ajusté au cours de ~22 $ |
|---|---|---|---|---|---|
| 2025 (réalisé) | 1,056 Md$ | **0,30 $** | — | −3,71 $ (charge unique IPO) | — |
| **2026E** | 1,47 Md$ | **~0,29 $** | ~stable | ~−0,85 $ | **~76×** |
| **2027E** | 1,78 Md$ | **~0,38 $** | ~+31 % | ~−0,65 $ | **~58×** |
| **2028E** | 2,12 Md$ | **~0,52 $** | ~+37 % | ~−0,50 $ | **~42×** |

*Consensus indicatif : BPA ajusté 2027 compris entre environ 0,29 et 0,44 $ selon les sources, avant les relèvements de prévisions de l'été.*

---

### Sensibilité

- **Scénario haussier** (crédits d'IA rentables dès 2027, marge brute qui remonte vers 88 %, croissance supérieure à 25 %) : BPA ajusté 2028 d'environ **0,70 $**, et un premier exercice proche de l'équilibre GAAP — le titre se paierait environ 31 fois les bénéfices ajustés 2028
- **Scénario de base** : BPA ajusté 2028 d'environ **0,52 $** (~42×)
- **Scénario baissier** (pression des outils d'IA natifs sur les nouveaux sièges, croissance ramenée vers 12-15 %, marge ajustée bloquée vers 9 %) : BPA ajusté 2028 d'environ **0,30 $** (~73×)

**Conclusion** : à 22 $, le titre n'est pas bon marché sur les bénéfices, même ajustés. La thèse d'investissement ne repose pas sur le BPA de 2026, mais sur deux variables : la **durabilité d'une croissance supérieure à 20 %** et la **remontée de la marge** une fois l'IA monétisée. Les deux juges de paix à suivre : la **marge brute non-GAAP** et la **rémunération en actions rapportée au CA**.`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario optimiste (Bull Case)

### Leviers de création de valeur

**1. Une croissance qui accélère à plus d'un milliard de dollars** : +38 %, +40 %, +46 %, +48 % sur quatre trimestres. Très peu de logiciels de cette taille réaccélèrent. C'est la preuve que l'IA **élargit** le marché de Figma au lieu de le réduire : plus de personnes conçoivent, donc plus de sièges.

**2. Le contexte, nouvel or noir des agents** : un agent d'IA (le sien ou celui d'un tiers) a besoin des composants, des règles et de l'historique d'une marque. Figma les détient. Le MCP (×5 au T1, +75 % d'usage en écriture au T2) fait de Figma l'**interface obligée entre les agents de code et le design** — un fossé qui se creuse avec l'IA.

**3. Une rétention de très haut niveau** : NDR de 136 à 139 %, rétention brute dans le haut des 90 %, clients à plus de 100 000 $ en hausse de 46 %. L'expansion se fait d'elle-même.

**4. Une option gratuite sur la monétisation de l'IA** : l'agent, Code Layers et Make sur code local **ne sont pas facturés** et **pas inclus** dans les prévisions. Leur monétisation en 2027 constituerait une surprise positive sur le chiffre d'affaires.

**5. Un bilan de forteresse** : 1,67 Md$ de trésorerie, aucune dette, une trésorerie disponible positive. Figma peut financer seule sa transition, racheter des actions ou des équipes.

**6. Une valorisation revenue sur terre** : environ 7,9 fois le CA, soit la moitié du prix proposé par Adobe en 2022 pour une entreprise trois fois plus grande. L'actionnaire activiste Findell vise 40 $, Citigroup 36 $, JPMorgan 42 $.

---

## 🐻 Scénario pessimiste (Bear Case)

### Risques permanents

**1. La disruption par les laboratoires d'IA** : Claude Design (Anthropic) et Stitch (Google) s'adressent à ceux qui **ne savent pas** se servir de Figma — précisément le public de croissance (deux tiers des utilisateurs ne sont pas designers). Si la conception devient une conversation, le siège Figma perd sa raison d'être pour une partie des utilisateurs.

**2. Une marge brute structurellement plus basse** : le coût des revenus a augmenté de 117 % au T2 ; la direction a **baissé les prix** des crédits Make d'environ 50 %. Si l'IA devient une course aux prix bas, Figma passe d'une marge brute de 90 % à une marge de 80 % ou moins, avec des fournisseurs de modèles qui sont aussi ses concurrents.

**3. La rémunération en actions** : environ 600 M$ par an, soit 40 à 45 % du CA. Corrigé de ce coût, Figma **détruit de la valeur** chaque année. Tant que ce ratio ne baisse pas nettement, le BPA GAAP reste négatif et la dilution continue.

### Analyse pré-mortem
Que se passe-t-il si Figma vaut **10 $ dans deux ans** ? Scénario : les outils de conception « natifs » de l'IA deviennent assez bons pour les non-designers ; les nouveaux sièges ralentissent ; la croissance retombe vers 12-15 % ; la marge brute plafonne à 80 % à cause de l'inférence ; le marché valorise alors Figma comme Adobe (4 fois le CA). Avec un CA 2028 d'environ 1,9 Md$, cela donne une valeur d'entreprise de 7,6 Md$ — soit environ 16 $ par action après trésorerie, et moins si la dilution se poursuit.

### Les multiples sont-ils trop élevés ?
**Sur le CA, non** : ~7,9 fois pour +48 % de croissance, c'est le bas de la fourchette historique des logiciels à forte croissance. **Sur les bénéfices, oui** : ~76 fois le BPA ajusté 2026 et des pertes GAAP. Le cours actuel suppose que la croissance reste supérieure à 20 % jusqu'en 2028.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : il traite Figma comme une **victime** de l'IA alors que ses chiffres en font, pour l'instant, un **bénéficiaire**. Chaque outil d'IA qui génère des interfaces produit du travail qui doit ensuite être **revu, aligné sur le système de design et livré** — et cela se passe dans Figma (fonction « Claude Code vers Figma », import de Claude Design vers d'autres outils, MCP). Le vrai risque n'est pas la disparition de Figma, mais un **écrasement de sa marge** : c'est sur la marge brute, pas sur la croissance, que la thèse se jouera.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Rémunération en actions et dilution — RISQUE ÉLEVÉ
C'est le principal signal. **1,364 Md$** de rémunération en actions en 2025, dont **975,7 M$ ponctuels** reconnus au T3 lors de l'introduction en Bourse (actions gratuites dont l'acquisition dépendait de la cotation). En 2026, le rythme reste de **147,6 à 169 M$ par trimestre**, soit **40 à 50 % du CA**.

**À surveiller** :
- Le ratio **rémunération en actions / CA**, à comparer à environ 8 % chez Adobe
- La **dilution nette** : 511 M d'actions en moyenne au T4 2025, 527 M au T2 2026 (+3 % en six mois)
- Les **impôts payés pour le règlement net** (161,6 M$ au S1 2026), qui transforment une charge non monétaire en sortie de trésorerie réelle

### Écart GAAP / non-GAAP — RISQUE ÉLEVÉ
Résultat opérationnel non-GAAP de **+36,1 M$** au T2 2026 contre **−117,3 M$** en GAAP : un écart de 153 M$ dû presque entièrement à la rémunération en actions et aux charges sociales associées. Les ajustements sont **récurrents**, pas exceptionnels. La société exclut aussi les pertes sur participations et sur actifs numériques.

### Comptabilisation des produits — RISQUE FAIBLE À MODÉRÉ
Abonnements reconnus de façon linéaire sur la durée du contrat (norme ASC 606) : modèle simple. **Point nouveau** : les **crédits d'IA** (achetés d'avance, consommés à l'usage) introduisent une part de reconnaissance à la consommation. À surveiller : les règles appliquées aux crédits non utilisés (« breakage ») et la cohérence entre crédits vendus et revenus reconnus.

### Information sectorielle — RISQUE MODÉRÉ
**Un seul secteur** déclaré pour une suite d'environ huit produits. Impossible de connaître la rentabilité de Make, Slides ou de l'IA. Les indicateurs de 2026 (pourcentage de clients consommant des crédits chaque semaine) mesurent l'usage, pas les revenus.

### Coût des revenus et marge brute — RISQUE MODÉRÉ
Marge brute GAAP de 92 % (T4 2024) à **84 %** (T2 2026). Une partie de la baisse vient de l'**amortissement d'incorporels acquis** (Weavy) et de la rémunération en actions incluse dans le coût des revenus ; l'essentiel vient de l'inférence d'IA. À suivre trimestre par trimestre.

### Contrats de location — RISQUE FAIBLE
Droits d'utilisation de 62,3 M$, dettes locatives de 67,8 M$ : peu significatif à l'échelle du bilan.

### Goodwill et incorporels — RISQUE FAIBLE
Goodwill de **101,4 M$** et incorporels de 13,4 M$ (Weavy et petites acquisitions), soit moins de 5 % de l'actif. Une dépréciation de 2,4 M$ d'actifs à long terme au T1 2026. Pas de risque de goodwill gonflé.

### Parties liées et gouvernance — RISQUE MODÉRÉ
- **Contrôle** : environ 75 % des voix pour le fondateur via les actions de classe B et la procuration du cofondateur
- **Anthropic** : à la fois **fournisseur** de modèles (Claude dans Make et dans des produits fédéraux), ancien représentant au conseil (Mike Krieger, démission le 14 avril 2026) et **concurrent** (Claude Design). Deux administrateurs représentent des fonds investis dans Anthropic. Findell Capital a réclamé une enquête indépendante — **il s'agit d'une allégation, pas d'un constat**
- Figma signale dans ses dépôts qu'un **litige entre Anthropic et l'administration américaine** pourrait affecter ses ventes au secteur fédéral

### Engagements conditionnels — RISQUE FAIBLE À MODÉRÉ
Engagements d'achat pluriannuels auprès des hébergeurs cloud (environ 545 M$ sur cinq ans auprès d'AWS selon le prospectus) et, désormais, auprès de fournisseurs d'inférence. Pas de dette financière ; une ligne de crédit renouvelable a été tirée puis remboursée en 2025.

### Trésorerie vs résultat — RISQUE MODÉRÉ
Trésorerie disponible positive (141,8 M$ au S1 2026) malgré une perte GAAP de 254,6 M$ : l'écart s'explique par la rémunération en actions, non monétaire. **Mais** la trésorerie disponible **corrigée de la rémunération en actions** est fortement négative, et les revenus différés (qui alimentent la trésorerie) ne progressent plus que de 5 % sur six mois.

### Actifs numériques — RISQUE FAIBLE
Environ 26 M$ de bitcoin et assimilés au bilan, avec pertes de réévaluation de 5 M$ au S1 2026. Marginal, mais révélateur d'une gestion de trésorerie peu conventionnelle.

---

### Verdict global
**Risque comptable : MODÉRÉ.** Aucune irrégularité comptable identifiée ; la comptabilité de Figma est simple et transparente. Mais la **rémunération en actions** (40 à 50 % du CA) et l'**écart GAAP/non-GAAP** qui en découle faussent la lecture de la rentabilité. Le risque est moins comptable que **économique** : un modèle qui ne crée de la valeur pour l'actionnaire que si ce ratio baisse fortement.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Dylan Field (classées par ordre d'importance)

### Stratégie et avantage concurrentiel

**1.** Plus de 20 % des utilisateurs qui consomment des crédits le font uniquement via l'agent. **Quelle part de vos nouveaux sièges payants en 2026 vient de non-designers**, et comment évolue leur conversion depuis le lancement de Claude Design et de Stitch ?

**2.** Vous avez baissé d'environ 50 % le prix des crédits Make. **À quel niveau de marge brute non-GAAP visez-vous de stabiliser l'activité IA à l'horizon 2028**, et quelle part du coût d'inférence votre modèle propriétaire a-t-il déjà absorbée ?

**3.** Anthropic est à la fois votre fournisseur, votre partenaire d'intégration et votre concurrent. **Quel pourcentage de votre coût d'inférence dépend d'Anthropic**, et quel est votre plan si les conditions d'accès à ses modèles se durcissent ?

**4.** Le MCP fait de Figma une source de contexte pour des agents tiers. **Comment monétisez-vous cet usage** quand un agent extérieur lit et écrit dans Figma sans que l'utilisateur ouvre le canevas ?

### Allocation du capital

**5.** La rémunération en actions représente 40 à 45 % du CA. **Quel ratio visez-vous en 2028**, et à quelle date anticipez-vous un résultat net GAAP positif ?

**6.** Vous avez payé 161,6 M$ d'impôts pour le règlement net des actions au premier semestre. **Envisagez-vous un programme de rachat d'actions** pour compenser la dilution, et à quelle condition ?

**7.** Findell Capital propose de passer de huit à quatre produits. **Quels produits n'atteindront pas une taille critique**, et sur quels critères décideriez-vous d'en arrêter un ?

**8.** Avec 1,67 Md$ de trésorerie et aucune dette, **quelle est votre doctrine en matière d'acquisitions** : des équipes d'IA, une technologie de modèles, ou un actif de taille dans la passerelle design-code ?

### Risques

**9.** La prévision de T3 implique +36 % après +48 %. **Quelle part de la décélération vient de la base de comparaison**, et quelle part d'une prudence volontaire ?

**10.** Le conseil a-t-il mené **une revue indépendante** sur la circulation d'informations confidentielles au moment de la démission de Mike Krieger, et **quelles règles de gestion des conflits** s'appliquent aux administrateurs liés à Anthropic ?

**11.** Les départs du directeur produit et de la directrice marketing, puis la recherche d'un directeur technique, interviennent au moment le plus chargé de votre feuille de route. **Comment garantissez-vous la continuité d'exécution** ?

**12.** Quel est l'**impact potentiel du litige entre Anthropic et l'administration américaine** sur votre activité fédérale, et disposez-vous d'un modèle de substitution certifié ?

### Vision long terme

**13.** Dans cinq ans, **quelle part de votre CA viendra de la consommation (crédits) plutôt que des sièges**, et comment protégerez-vous la prévisibilité de vos revenus ?

**14.** Si les agents produisent directement du code de production, **pourquoi une équipe aurait-elle encore besoin d'un canevas** ? Quelle preuve client pouvez-vous citer ?

### Gouvernance

**15.** Vous contrôlez environ 75 % des voix. **Seriez-vous prêt à introduire une clause d'extinction (« sunset ») des actions à droits de vote multiples**, et comment le conseil vous évalue-t-il sur la création de valeur par action ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le modèle par siège est structurellement menacé

Figma vend des **sièges**. Or l'IA promet de faire le même travail avec **moins de personnes**, et les laboratoires d'IA proposent des outils de conception **inclus dans un abonnement qu'ils paient déjà**. Les optimistes répondent que l'IA élargit le marché aux non-designers — mais ce sont précisément les utilisateurs **les moins attachés** au canevas et **les plus faciles à capter** par une interface conversationnelle. L'accélération actuelle peut être celle d'un **dernier cycle d'équipement** : les entreprises achètent des sièges pour expérimenter l'IA dans Figma avant de décider si elles en ont encore besoin.

### 2. Où se concentrent les revenus

Le cœur du CA reste **Figma Design** et les **sièges Full** des grandes entreprises (clients à plus de 100 000 $, en hausse de 46 %). Si ces clients rationalisent leurs effectifs de designers et de chefs de produit grâce à l'IA, l'effet sur le NDR (136 %) sera **amplifié** : la rétention par expansion peut s'inverser aussi vite qu'elle a monté. Un NDR qui passerait de 136 % à 115 % ramènerait mécaniquement la croissance vers 15 à 20 %.

### 3. Le fossé est plus fragile qu'il n'y paraît

L'effet de réseau de Figma repose sur le **format de fichier** et le **système de design**. Mais les agents savent désormais **lire** un système de design (Claude Design importe les couleurs, typographies et composants d'une entreprise) et **produire du code** directement. Si le livrable final est le code et non la maquette, le canevas devient une **étape facultative**. Figma l'a compris (Code Layers, Make sur code local) — mais en allant sur le terrain du code, il affronte des acteurs bien plus puissants.

### 4. Le concurrent le plus dangereux : Anthropic, pas Adobe

Les optimistes surveillent Adobe et Canva. Le danger est **Anthropic** : il fournit une partie de l'intelligence de Figma, il a siégé à son conseil jusqu'en avril 2026, il maîtrise le modèle qui fait le travail, et il a lancé Claude Design avec une intégration vers Canva. **Il contrôle à la fois le coût d'inférence de Figma et l'outil qui peut le contourner.** Google (Stitch, gratuit) suit la même logique. Figma est un client de ses concurrents.

### 5. La pire allocation du capital : la rémunération en actions

Environ **600 M$ par an** versés en actions pour un CA de 1,47 Md$. En 2025, la charge totale a atteint **1,36 Md$**, plus que le chiffre d'affaires. Corrigée de ce coût, la trésorerie disponible est **fortement négative**. S'y ajoutent 161,6 M$ d'impôts payés en six mois pour limiter la dilution, et un placement de trésorerie en bitcoin. Les actionnaires paient la fidélité des salariés **sans pouvoir voter** contre (environ 75 % des voix au fondateur).

### 6. Parties liées et incitations

Un administrateur issu d'Anthropic a démissionné **trois jours** avant le lancement d'un produit concurrent ; deux autres administrateurs représentent des fonds investis dans Anthropic. Aucune malversation n'est établie, mais la **gouvernance n'offre aucun contre-pouvoir** à l'actionnaire minoritaire, et les ventes d'initiés sont continues.

### 7. Ce qui doit se vérifier pour justifier 22 $

- Une croissance supérieure à **20 % par an** jusqu'en 2028
- Une marge brute non-GAAP stabilisée **au-dessus de 84 %** malgré l'IA
- Une rémunération en actions ramenée sous **20 % du CA** d'ici 2028
- **Aucune** perte nette significative de sièges au profit des outils d'IA natifs

### 8. Si la croissance déçoit de 20 à 30 %

Une croissance 2027-2028 de 15 % au lieu de 20 % ramène le CA 2028 vers 1,95 Md$ et le BPA ajusté vers 0,35 $. Avec un multiple de chiffre d'affaires ramené au niveau d'Adobe (~4 fois), la valeur d'entreprise tombe à environ 7,8 Md$, soit **~17 $ par action** (−25 %), et **~13 $** si le marché applique 3 fois le CA à une croissance jugée « en déclin ».

### Le scénario catastrophe unique
**Un fournisseur de modèles d'IA intègre un éditeur collaboratif complet dans son assistant**, gratuit pour les abonnés, avec import des systèmes de design et export en code de production. Les nouveaux sièges s'effondrent, la marge brute est comprimée par la guerre des prix des crédits, et la dilution continue. Plausibilité : **non négligeable (20 à 30 %) à horizon trois ans**, au vu du rythme de lancement des laboratoires en 2026.

### Conclusion short
Figma est une **excellente entreprise dans une position fragile** : un leader incontesté dont l'outil pourrait devenir une couche facultative, dont la marge dépend de ses concurrents et dont la rémunération en actions absorbe l'essentiel de la valeur créée. Le titre a déjà perdu environ 85 % depuis son sommet — mais un titre qui a baissé n'est pas un titre bon marché tant que le **BPA GAAP reste négatif**.`,
  },
];

export default { ...meta, modules };
