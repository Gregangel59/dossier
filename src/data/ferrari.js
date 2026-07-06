// ============================================================
//  DOSSIER : Ferrari N.V. (RACE)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "ferrari",                  // identifiant d'URL : /dossier/ferrari
  ticker: "RACE",
  name: "Ferrari N.V.",
  exchange: "NYSE / Euronext Milan",
  sector: "Automobile de luxe & performance",
  initials: "RACE",                 // affiché dans la pastille
  tagline: "Marque de luxe d'exception au capital-marque unique, entre voiture de sport, artisanat et ingénierie de course.",
  riskScore: 66,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "ferrari.html",
  updated: "2026-07",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

Ferrari est le **constructeur automobile de luxe le plus rentable au monde**, fondé en 1947 à Maranello (Italie) et coté au NYSE (RACE) depuis 2015 ainsi qu'à Euronext Milan. Le chiffre d'affaires 2025 atteint **7,146 milliards €** pour un bénéfice net record de **1,600 milliard €** — avec une marge d'EBITDA de **38,8%**, du jamais-vu dans l'industrie automobile.

Le cœur de la thèse tient en une phrase : Ferrari n'est **pas un constructeur automobile**, c'est une **maison de luxe** qui vend de la rareté. La direction pilote délibérément la **rareté de l'offre** — environ **13 640 véhicules livrés en 2025** (volume en léger recul volontaire) — pour préserver la désirabilité, le pouvoir de prix et des carnets de commandes qui s'étendent déjà jusqu'à fin 2027.

Le modèle repose sur trois piliers de revenus :

- **Voitures & pièces (cœur, ~85% du CA)** : vente de voitures de sport, GT, séries spéciales, hypercars (F80) et modèles Icona — prix moyen supérieur à 600 000 $, personnalisations à très forte marge
- **Sponsoring, commercial & marque** : Formule 1 (Scuderia Ferrari HP), licences, mode, lifestyle, flagship stores
- **Autres** : moteurs, financement (Ferrari Financial Services), parcs à thème (Abu Dhabi, PortAventura), musées

## Principaux produits et services

- **Gamme sportive & GT** : Amalfi, 296 GTB/GTS, Roma, SF90, Purosangue (le premier « FUV » — Ferrari Utility Vehicle)
- **Séries spéciales & hypercars** : F80 (successeur de LaFerrari), Daytona SP3 (Icona)
- **Luce (2026)** : **première Ferrari 100% électrique**, premier modèle 5 places, ~550 000 € (design confié à LoveFrom de Jony Ive), livraisons dès le T4 2026
- **Personnalisations (Tailor Made, Atelier)** : levier de marge central
- **Lifestyle** : mode, montres, licences, expérience de marque

## Clients, fournisseurs, concurrents

**Clients** : une **base ultra-fortunée et fidélisée** — collectionneurs, passionnés, clients répétés. L'accès aux modèles limités (F80, Icona) est réservé aux clients à l'historique d'achat qualifié — un mécanisme de fidélisation puissant.

**Fournisseurs** : réseau de sous-traitants italiens (Emilia-Romagna), plus des composants électroniques/batteries pour l'électrification. Ferrari internalise l'essentiel (moteurs, châssis) à Maranello.

**Concurrents** : **aucun rival direct parfait**. Comparables partiels : **Lamborghini** (Volkswagen/Audi), **McLaren**, **Aston Martin** (AML), **Bentley/Bugatti/Porsche** (groupe VW/Porsche AG), **Rolls-Royce** (BMW). Sur les multiples, Ferrari se compare davantage aux **maisons de luxe** (Hermès, LVMH) qu'aux constructeurs automobiles.

## Modalités contractuelles

Le modèle est **transactionnel mais avec une visibilité rare** : les carnets de commandes s'étendent sur 18-24 mois, offrant une visibilité proche de celle d'un modèle par abonnement. Les acomptes clients et la sélection par historique d'achat créent une **discipline de demande** que peu de marques peuvent égaler. Actionnariat de référence : **Exor** (holding de la famille Agnelli) et **Piero Ferrari** — accord d'actionnaires renouvelé de janvier 2026 à janvier 2029.`,
  },
  {
    id: 2,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Le capital-marque — un moat quasi irréplicable
Ferrari est l'une des **marques les plus puissantes au monde**, associée depuis près de 80 ans à la performance, à l'exclusivité et au mythe (Enzo Ferrari, la Scuderia, le rouge Rosso Corsa). Cette valeur de marque ne peut **pas être achetée ni reconstruite** : elle est le fruit d'un héritage cumulé sur des décennies. C'est le fossé le plus profond et le plus durable.

### 2. Rareté pilotée — Pouvoir de prix structurel
Ferrari **limite volontairement sa production** (~13 000-15 000 véhicules/an) pour maintenir la désirabilité. En vendant moins que la demande, l'entreprise s'octroie un **pouvoir de prix quasi absolu** : hausses de prix, personnalisations à marge élevée, séries limitées survendues. Ce mécanisme explique une marge d'EBITDA de ~39%, inaccessible à tout constructeur de volume.

### 3. Fidélité et sélection de la clientèle
L'accès aux modèles les plus désirables (Icona, hypercars) est **conditionné à l'historique d'achat**. Ce système crée une **boucle de fidélité** : pour espérer une F80, un client doit avoir acheté d'autres Ferrari. Il en résulte une base de clients captive et récurrente, et une valeur résiduelle élevée sur le marché secondaire.

### 4. Intégration verticale & artisanat de Maranello
Ferrari **conçoit et fabrique en interne** l'essentiel de ses véhicules (moteurs, châssis, et même les composants de la Luce). Cet artisanat concentré à Maranello garantit la qualité, protège le savoir-faire et nourrit le récit de marque « fatto a Maranello ».

### 5. La Formule 1 — Machine à marque
La Scuderia Ferrari est l'écurie la plus emblématique de l'histoire de la F1. Au-delà du sponsoring, elle constitue un **laboratoire technologique** et une **plateforme marketing mondiale** dont la valeur d'image est difficilement chiffrable mais réelle.

## Positionnement vs concurrence

| Critère | Ferrari | Lamborghini (VW) | Aston Martin |
|---|---|---|---|
| Force de marque | Exceptionnelle | Très forte | Forte (fragile) |
| Marge d'EBITDA | ~39% | ~25-28% (est.) | Faible / négative |
| Pouvoir de prix | Quasi absolu | Élevé | Modéré |
| Rareté pilotée | Structurelle | Partielle | Subie |
| Prime de valorisation | Extrême (~35x P/E) | N/A (dans VW) | Décote |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Extrême** — c'est Ferrari qui choisit ses clients pour les modèles rares, pas l'inverse. Pouvoir de prix quasi sans équivalent dans l'industrie
- **Vis-à-vis des fournisseurs** : **Élevé** — volumes faibles mais marque prestigieuse ; les fournisseurs italiens dépendent du contrat Ferrari
- **Vis-à-vis des nouveaux entrants** : **Barrière quasi infranchissable** — impossible de fabriquer 80 ans d'héritage. Le seul vrai risque vient d'une **auto-érosion** de la marque, pas d'un concurrent`,
  },
  {
    id: 3,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de création de valeur

**1. La marque de luxe la plus puissante, valorisée comme telle** : Ferrari se comporte comme Hermès sur roues — pouvoir de prix, rareté, désirabilité. Tant que la direction préserve la discipline de l'offre, la **marge d'EBITDA de ~39%** et le pouvoir de prix sont structurellement défendables.

**2. Visibilité rare** : Carnet de commandes s'étendant **jusqu'à fin 2027**. Peu d'entreprises industrielles offrent une telle prévisibilité de revenus, ce qui justifie une prime de qualité.

**3. Mix produit & personnalisations** : La stratégie « qualité des revenus plutôt que quantité » fonctionne — le CA croît (+7% en 2025) alors même que les volumes baissent légèrement. Les personnalisations (Tailor Made) et les séries spéciales (F80) tirent la marge vers le haut.

**4. Optionalité électrique** : Malgré la polémique sur le design, la Luce ouvre un **nouveau segment** (premier 5 places, nouveaux clients) et démontre la maîtrise technologique interne. Si elle réussit comme le Purosangue (initialement critiqué, devenu best-seller), c'est un relais de croissance.

**5. Allocation de capital exemplaire** : Programme de rachat d'actions de **3,5 Mds€ jusqu'en 2030**, dividende en hausse (+12% environ), buyback de 2 Mds€ bouclé un an en avance. FCF industriel de 1,538 Md€ (+50% en 2025).

**6. Guidance confirmée 2026** : ~7,5 Mds€ de CA, marge EBITDA ≥39%, BPA ajusté ≥9,45€, FCF ≥1,5 Md€. Consensus analyste **Achat/Achat Fort**, objectif médian ~448-475 $.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents à l'activité

**1. Valorisation extrême — la prime ne pardonne pas** : À **~35x les bénéfices** (et ~9x le CA), Ferrari se paie une prime de maison de luxe. Toute déception de croissance ou de marge se traduit par une contraction brutale du multiple. Le titre a perdu ~30% sur 12 mois glissants malgré des fondamentaux intacts — preuve que le multiple, pas les résultats, dicte le cours.

**2. Risque d'érosion de la marque (Luce)** : La polémique sur le design de la Luce (critiquée par l'ancien président Montezemolo, le ministre Salvini, et massivement moquée en ligne) illustre le **risque existentiel unique** de Ferrari : diluer son propre mythe. Un faux pas répété sur l'électrification pourrait entamer la valeur résiduelle et la désirabilité — le seul actif qui compte vraiment.

**3. Cyclicité du luxe & change** : 70%+ du CA hors zone euro. Les tarifs douaniers américains, la faiblesse de la Chine/Hong Kong (-221 unités en 2025) et l'effet devises (~200 M€ de vent contraire attendu en 2026) pèsent sur la croissance publiée.

### Analyse pré-mortem
Que se passerait-il si Ferrari cotait à 260 $ dans 3 ans ? Scénario : la Luce déçoit commercialement, l'électrification bouscule la valeur résiduelle du parc, le luxe entre en récession, et le marché re-note le titre de ~35x à ~22x les bénéfices. La valorisation chuterait de 30-35% même avec des bénéfices stables — car c'est une **histoire de multiple**, pas de fondamentaux.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : les deux camps se trompent peut-être de débat. Les bulls sur-extrapolent le « Ferrari = Hermès » sans intégrer que Ferrari, contrairement à Hermès, doit **réinventer son produit** face à l'électrification — un risque d'exécution que le luxe pur n'affronte pas. Les bears sur-extrapolent la polémique Luce en oubliant que le Purosangue, honni à sa présentation, est devenu un best-seller. La vérité : Ferrari est une **franchise exceptionnelle à un prix qui laisse peu de marge d'erreur** — la qualité n'est pas en cause, le prix d'entrée l'est.`,
  },
  {
    id: 4,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de Ferrari dans la chaîne de valeur

Ferrari occupe une position **d'intégrateur vertical premium** : contrairement aux constructeurs de volume qui assemblent des composants standardisés, Ferrari **conçoit, fabrique et assemble** l'essentiel de ses véhicules à Maranello, protégeant son savoir-faire et son récit de marque.

### Amont — Intrants et fournisseurs

**Composants mécaniques & matériaux** :
- Aluminium, fibre de carbone, matériaux avancés (Ferrari a récemment adopté le **câblage aluminium** en substitution du cuivre)
- Réseau de sous-traitants spécialisés d'Emilia-Romagna (la « Motor Valley » italienne)

**Électrification (Luce & hybrides)** :
- Cellules et modules de batteries (fournisseurs spécialisés)
- Électronique de puissance, semi-conducteurs
- Ferrari a fait le choix stratégique de **développer et fabriquer en interne à Maranello** les composants clés de la Luce (batterie, moteurs, électronique)

**Design & ingénierie externe** :
- **LoveFrom** (agence de Jony Ive, ex-Apple) pour le design de la Luce

---

### Ferrari — Conception, fabrication, assemblage

**Cœur industriel** : Usine de Maranello — moteurs (V6, V8, V12), châssis, assemblage, atelier de personnalisation (Tailor Made). Nouveau **e-building** dédié à l'électrification.

**Racing** : Scuderia Ferrari (Gestione Sportiva) — laboratoire technologique qui irrigue la gamme routière.

**Contrôle qualité & artisanat** : chaque véhicule reflète le label « fatto a Maranello », pilier du prix premium.

---

### Aval — Distribution et clients finaux

**Réseau de distribution** : ~168 concessionnaires agréés dans plus de 60 marchés (Amériques, Europe, Moyen-Orient, Inde, Afrique, Asie-Pacifique). Ferrari **contrôle étroitement** son réseau (allocation des modèles, formation, expérience de marque).

**Clients finaux** : collectionneurs et passionnés ultra-fortunés, sélectionnés pour les modèles rares.

**Écosystème de marque** : flagship stores (Londres, etc.), lifestyle/mode, licences, parcs à thème (Ferrari World Abu Dhabi, Ferrari Land PortAventura), musées (Maranello, Modène), Ferrari Financial Services (financement).

---

### Cartographie simplifiée du flux

\`\`\`
FOURNISSEURS        →   FERRARI (MARANELLO)       →   CLIENTS FINAUX
Motor Valley IT         Moteurs, châssis,             ~168 concessionnaires
Batteries/électronique  assemblage, Tailor Made       > 60 marchés
LoveFrom (design Luce)  Racing (Scuderia F1)          Collectionneurs
(intégration            (intégration verticale        ultra-fortunés
 verticale forte)        = protection du moat)         (sélectionnés)
\`\`\`

**Le pari central** : Ferrari internalise la chaîne de valeur pour **protéger la marge et le mythe**. Le principal risque amont est l'électrification — nouvelle chaîne d'approvisionnement (batteries) sur laquelle Ferrari a moins d'héritage que sur le moteur thermique.`,
  },
  {
    id: 5,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par segment — Exercice 2025

### Chiffre d'affaires 2025 : 7,146 Mds€ (+7% vs 2024)

| Segment | Poids approximatif | Dynamique |
|---|---|---|
| Voitures & pièces détachées | ~85% | Cœur — tiré par le mix et les personnalisations |
| Sponsoring, commercial & marque | ~11-12% | F1, licences, lifestyle — croissance solide (+14% au T1 2026) |
| Autres (moteurs, financier) | ~3-4% | Moteurs à des tiers, Ferrari Financial Services |

**Point méthodologique** : la vraie histoire de Ferrari n'est **pas le volume mais le mix**. En 2025, les volumes ont **légèrement baissé** (13 640 unités, -1%) tandis que le CA a **progressé de 7%** — pur effet de mix produit (F80, séries spéciales) et de personnalisations.

---

### Répartition géographique (2025)

| Région | Tendance 2025 |
|---|---|
| EMEA (Europe, Moyen-Orient, Afrique) | En croissance (+142 unités) |
| Amériques | Très dynamique — moteur du mix pays au T1 2026 |
| Chine continentale / Hong Kong / Taïwan | En recul (-221 unités) — point faible |
| Reste Asie-Pacifique | Stable à porteur |

**Point clé** : les **Amériques** tirent la performance (mix pays exceptionnellement favorable au T1 2026), tandis que la **Grande Chine** reste le point faible — un contraste avec beaucoup de marques de luxe qui dépendent davantage du consommateur chinois.

---

### Évolution des marges

- **Marge d'EBIT (opérationnelle)** : **29,5%** en 2025 (+120 bps vs 2024) — niveau extraordinaire pour l'automobile
- **Marge d'EBITDA** : **38,8%** en 2025, objectif ≥39% en 2026
- **Bénéfice net** : **1,600 Md€** ; **BPA dilué 8,96€**
- **FCF industriel** : **1,538 Md€** (+50%) — génération de trésorerie exceptionnelle
- **Conversion de trésorerie** : > 55%

---

### Dynamiques par segment

**Voitures & pièces** : Le mix prime sur le volume. Les séries spéciales (F80, hypercar à ~3,5 M€) et les personnalisations tirent le prix moyen et la marge. La stratégie « quality of revenues over quantity » est le cœur du modèle.

**Sponsoring, commercial & marque** : Segment à forte croissance (+14% au T1 2026), porté par la F1 (nouveaux partenariats), les licences et le lifestyle. C'est le relais « asset-light » à très forte marge.

**Électrification (Luce)** : Nouveau sous-segment à partir du T4 2026. Prix ~550 000 €, marge unitaire élevée revendiquée, mais volumes plafonnés et incertitude commerciale post-polémique.`,
  },
  {
    id: 6,
    title: "Résultats financiers",
    category: "Analyse financière",
    icon: "📈",
    content: `## Résultats — FY2025 & T1 2026

### FY2025 vs consensus (publié le 10 février 2026)

| Indicateur | 2025 | 2024 | Variation |
|---|---|---|---|
| CA net | 7 146 M€ | 6 677 M€ | **+7%** |
| EBIT (résultat opérationnel) | 2 110 M€ | ~1 890 M€ | **+12%** |
| Marge d'EBIT | 29,5% | 28,3% | +120 bps |
| EBITDA | 2 772 M€ | ~2 570 M€ | +8% |
| Marge d'EBITDA | 38,8% | — | — |
| Bénéfice net | 1 600 M€ | — | Record |
| BPA dilué | 8,96€ | — | — |
| FCF industriel | 1 538 M€ | ~1 025 M€ | **+50%** |
| Livraisons | 13 640 | 13 752 | **-1%** |

**Lecture** : Ferrari a **battu le consensus sur l'année** et **relevé sa guidance 2026**, tout en livrant *moins* de voitures — la démonstration parfaite du modèle « mix over volume ». Le Q4 a légèrement manqué les attentes trimestrielles, mais le titre a bondi de +5% sur la publication annuelle et la guidance.

---

### T1 2026 (publié le 5 mai 2026)

| Indicateur | T1 2026 | T1 2025 | Variation |
|---|---|---|---|
| CA net | 1 848 M€ | 1 791 M€ | +3% (**+6% à change constant**) |
| EBIT | 548 M€ | 542 M€ | +1% (+8% à change constant) |
| Marge d'EBIT | 29,7% | 30,3% | — |
| EBITDA | 722 M€ | 693 M€ | +4% (+9% à change constant) |
| Marge d'EBITDA | 39,1% | 38,7% | +40 bps |
| BPA dilué | 2,33€ | 2,30€ | +1% |
| FCF industriel | 653 M€ | 620 M€ | +5% |

**Lecture** : Croissance publiée modérée (+3%) mais **solide à change constant (+6%)** — l'effet devises (USD faible) masque la performance opérationnelle réelle. Mix pays exceptionnel (Amériques), personnalisations fortes, contribution F80 et séries spéciales.

---

### Guidance 2026 (confirmée)

- CA : **~7,50 Mds€**
- Marge d'EBITDA ajustée : **≥39,0%** (≥2,93 Mds€)
- Marge d'EBIT ajustée : **≥29,5%** (≥2,22 Mds€)
- BPA dilué ajusté : **≥9,45€**
- FCF industriel : **≥1,5 Md€**
- Répartition H1/H2 plus équilibrée qu'en 2025

---

### Signaux d'alerte bilan

- **Effet devises** : ~200 M€ de vent contraire attendu en 2026 (USD/EUR) — compensé par mix et prix
- **Tarifs douaniers US** : « pas d'impact significatif » revendiqué à ce stade, mais risque structurel sur les importations de voitures UE aux États-Unis
- **Bilan** : très sain — trésorerie ~1,8 Md$, dette/fonds propres modérée, position de trésorerie industrielle solide

---

### Réaction du marché

Le titre a **fortement corrigé sur 12 mois (~-30%)** malgré des fondamentaux intacts, tombant d'un plus haut ~519 $ à un plus bas 52 semaines de ~312 $, avant de **rebondir vers ~385 $** (clôture 384,60 $ le 6 juillet 2026). Cette déconnexion entre **prix et fondamentaux** traduit une **compression du multiple** (crainte sur l'électrification, valorisation extrême) plus qu'une détérioration opérationnelle — le cœur du débat sur la valeur.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2024-2026

**2024-2025** : Ton **serein et confiant**. Le message central est répété inlassablement : « **quality of revenues over quantity** » (qualité des revenus plutôt que quantité). Benedetto Vigna (CEO) insiste sur la discipline de volume, la visibilité du carnet de commandes et la maîtrise du mix.

**Capital Markets Day 2025** : Point d'inflexion de communication. Ferrari fixe une **trajectoire long terme vers 2030**, « pose le plancher » d'une croissance durable, et confirme la liberté de choix de motorisation (thermique / hybride / électrique) laissée au client.

**Début 2026** : Ton toujours confiant à la publication FY2025 (guidance relevée). Puis, avec la **présentation de la Luce (mai 2026)**, le discours devient **défensif** : Vigna martèle le « respect de la technologie » et insiste sur le fait que l'expérience de conduite « reste fidèle à la marque » — une posture de gestion de crise face à la polémique design.

---

### Priorités répétées du management

**1. Mix over volume** — Le mantra absolu. Chaque trimestre rappelle que Ferrari **choisit de vendre moins** pour préserver la marque et le prix.

**2. Personnalisations & séries spéciales** — Levier de marge central. La direction met en avant la demande « continue » de personnalisations et la contribution des modèles rares (F80, Icona).

**3. Discipline et flexibilité** — Face aux tarifs, au change et aux tensions géopolitiques (Moyen-Orient), le management insiste sur « l'agilité et la flexibilité » de gestion.

**4. Électrification comme choix, pas contrainte** — Vigna présente la Luce comme une **ouverture** (nouveaux clients, nouveau segment 5 places), tout en reconnaissant que « les bénéfices resteront tirés par les produits thermiques dans un avenir prévisible ».

**5. Retour aux actionnaires** — Rachats d'actions (3,5 Mds€ à horizon 2030), dividende croissant, mis en avant comme signal de confiance.

---

### Analyse du sentiment

- **Confiance** : Élevée et constante sur les fondamentaux ; **défensive** sur la Luce depuis mai 2026.
- **Cohérence** : Remarquable — la thèse « luxe rare » n'a jamais dévié depuis l'IPO 2015.
- **Point de vigilance** : Le discours autour de la Luce trahit une **conscience du risque de marque**. Le management doit désormais *prouver* commercialement, pas seulement raconter — l'écart entre le récit rassurant et la réaction du marché est le vrai signal à suivre.

> **À lire entre les lignes** : Ferrari vend une **discipline** (rareté, mix, marque). Tant que l'exécution suit, le discours est crédible. La Luce est le premier test sérieux de cette crédibilité depuis des années.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Benedetto Vigna — Directeur Général (depuis septembre 2021)

**Profil atypique** : Vigna n'est **pas un homme de l'automobile** mais un **physicien et technologue**, ancien de STMicroelectronics (où il a dirigé une division de semi-conducteurs de plusieurs milliards). Ce choix, surprenant à l'époque, visait explicitement à préparer Ferrari à l'**électrification et à la transformation numérique**.

**Bilan** :
- CA passé de ~4,3 Mds€ (2021) à **7,146 Mds€ (2025)** — croissance et expansion des marges continues
- Marge d'EBITDA portée à ~39% — niveau record de l'industrie
- Lancement du **Capital Markets Day 2025** fixant la trajectoire 2030
- Pilotage de la **première Ferrari électrique (Luce)** — le pari technologique de son mandat, dont l'accueil mitigé constitue le principal test de son leadership

**Participation & alignement** : rémunération alignée sur la performance (actions), dans le cadre de la gouvernance Exor.

---

### Actionnariat de référence & gouvernance

- **Exor N.V.** (holding de la **famille Agnelli**) : premier actionnaire, stake minoritaire significatif — vision long terme
- **Piero Ferrari** (fils d'Enzo) : actionnaire de référence historique
- **Accord d'actionnaires** renouvelé de **janvier 2026 à janvier 2029** — stabilité de contrôle
- **John Elkann** (président, famille Agnelli) : garant de la continuité stratégique

Cette structure assure une **stabilité de gouvernance rare** et une orientation long terme, protégée des pressions court-termistes — un atout pour une marque dont l'actif est le temps long.

---

### Changement récent

- **Massimiliano Di Silvestre** nommé **Chief Marketing & Commercial Officer** (effectif 1er juillet 2026), ex-CEO de BMW Group Italie — 20 ans d'expérience dans le luxe automobile. Il succède à Enrico Galliera (16 ans chez Ferrari). Un renfort marketing arrivant à point nommé après la polémique Luce.

---

### Allocation du capital — Historique

| Indicateur | Tendance |
|---|---|
| ROE | ~42-45% (exceptionnel) |
| FCF industriel | 1 538 M€ en 2025 (+50%) |
| Rachats d'actions | 2 Mds€ bouclés en avance + 3,5 Mds€ jusqu'en 2030 |
| Dividende | En hausse (~+12%) |

**Tendance** : allocation **exemplaire et disciplinée** — réinvestissement dans le produit et la course, retours massifs aux actionnaires, pas de M&A destructeur de valeur.

---

### Signaux d'alerte

- **Pas de transactions avec parties liées significatives** problématiques identifiées ; gouvernance Exor stable
- **Rémunération** : alignée sur la performance, dans les normes du luxe
- **Risque clé** : le pari électrique de Vigna (Luce). Un CEO « technologue » pilotant une marque « émotionnelle » — l'accueil de la Luce interroge l'équilibre entre innovation technologique et respect de l'ADN de marque
- **Type** : **gestionnaire professionnel de haut niveau**, adossé à un actionnariat familial stable — configuration idéale pour préserver le temps long de la marque`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours

### Contexte
Depuis son IPO en octobre 2015 à 55 $, Ferrari a livré une **performance exceptionnelle** (~+550% sur 10 ans, ~+20%/an annualisé). Le titre a longtemps été une machine à re-rating, se hissant progressivement des multiples automobiles vers des multiples de luxe. Beta modéré (~0,6-0,9) — un titre défensif de qualité.

### Hausses significatives (+5%)

**2015-2021 — Re-rating structurel** : De 55 $ à des sommets, le marché a progressivement reconnu Ferrari comme une **maison de luxe** et non un constructeur, expansion continue du multiple.

**Février 2026 — Résultats FY2025 + guidance relevée** : Le titre a bondi de **+5%** à la publication annuelle (CA +7%, EBIT +12%, FCF +50%, guidance 2026 relevée). Réaction forte malgré un Q4 légèrement en deçà des attentes trimestrielles.

**Juin-juillet 2026 — Rebond post-Luce** : Après le creux de ~312 $, le titre a **rebondi vers ~385 $** (+6% sur une semaine fin juin), à mesure que les analystes (Morgan Stanley, RBC, Bernstein) jugeaient la réaction Luce « excessive » et rappelaient le précédent Purosangue.

---

### Baisses significatives (-5%)

**Juillet 2025 → 2026 — Correction du multiple** : Le titre a perdu **~30-33% sur 12 mois** glissants, d'un plus haut ~519 $ à un plus bas ~312 $. Cause principale : **compression du multiple** (craintes sur l'électrification, valorisation extrême, ralentissement de la croissance du BPA à 5 ans), et non une détérioration des résultats.

**25-26 mai 2026 — Choc Luce** : À la présentation de la première Ferrari électrique, le titre a chuté de **~8% à Milan** (~-5% à New York) en une séance, effaçant plus de 4 Mds$ de capitalisation. Cause : **rejet du design** (critiques de Montezemolo, Salvini, moqueries virales) et crainte de **dilution de la marque**. Analogie « travel and arrive » — le titre avait monté avant l'événement.

**Mars 2026 — Point bas ~273,80 €** : Sur fond de sentiment de marché négatif sur le luxe et incertitude sur l'électrification.

---

### Facteurs structurels

- **Prime/décote de multiple** : le titre se paie sur un **multiple de luxe** (~35x P/E). C'est le principal driver — bien plus que les résultats trimestriels, remarquablement stables
- **Sensibilité à l'électrification** : chaque signal sur la stratégie EV (Luce) devient un catalyseur de volatilité inhabituelle pour un titre défensif
- **Change (USD/EUR)** : 70%+ du CA hors zone euro — l'effet devises pèse mécaniquement sur la croissance publiée
- **Actionnariat stable (Exor)** : base d'actionnaires long terme qui amortit la volatilité
- **Rachats d'actions** : le programme de buyback (3,5 Mds€) soutient structurellement le cours`,
  },
  {
    id: 10,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Luxe automobile & marques de prestige (juillet 2026)

| Société | Code | Cap. boursière | EV/CA | P/E | Rendement div. | Marge / Profil |
|---|---|---|---|---|---|---|
| **Ferrari** | **RACE US** | **~68 Mds$** | **~8-9x** | **~35x** | **~1,1%** | **Marge EBITDA ~39% — élite** |
| Porsche AG | P911 GY | ~40 Mds$ (est.) | ~1x | ~10-14x | ~4-5% | Volume premium, marge sous pression |
| Aston Martin | AML LN | ~2 Mds$ (est.) | ~1-2x | n.s. | 0% | Déficitaire, bilan fragile |
| Mercedes-Benz | MBG GY | ~60 Mds$ (est.) | ~0,4x | ~7x | ~7-8% | Volume, marge auto classique |
| Hermès (proxy luxe) | RMS FP | ~250 Mds$ (est.) | ~15x | ~50x | ~0,5% | Luxe pur, marge ~40% |

*Données estimatives sur la base des cours et publications disponibles à juillet 2026. À affiner sur filings directs.*

---

### Analyse comparative

**Ferrari — Ni tout à fait auto, ni tout à fait luxe**
Le débat de valorisation se résume à une question : Ferrari est-il un **constructeur** (multiple ~10-14x, comme Porsche) ou une **maison de luxe** (multiple ~40-50x, comme Hermès) ? Le marché tranche pour un **entre-deux à ~35x** — une prime automobile extrême mais une décote vs le luxe pur. C'est précisément cet écart qui crée l'opportunité (si re-rating vers le luxe) et le risque (si de-rating vers l'auto).

**Porsche AG — Le comparable auto le plus proche**
Porsche (introduite en 2022) illustre le sort d'une marque premium **valorisée comme un constructeur** : multiple modeste, marge sous pression, EV compliqué. C'est le **scénario baissier** pour Ferrari si le marché cessait de le voir comme du luxe.

**Aston Martin — Le contre-exemple**
AML montre ce qui arrive à une marque de prestige **sans discipline de rareté ni bilan solide** : dilution chronique, pertes, décote. C'est le rappel que le prestige seul ne suffit pas — la **discipline financière** de Ferrari est ce qui le distingue.

**Hermès — Le modèle aspirationnel**
Ferrari se compare volontiers à Hermès (rareté, pouvoir de prix, marge ~40%). Mais Hermès n'a **pas de risque d'exécution produit** comparable à l'électrification. La prime de Ferrari est plafonnée par ce risque technologique unique.

---

### Le ratio qui compte : le multiple de mix
Ferrari ne se juge pas sur l'EV/EBIT « auto » mais sur sa capacité à **maintenir une marge de luxe (~39%) tout en réinventant son produit**. Tant que le mix et le pouvoir de prix tiennent, la prime se défend. La Luce est le test de cette thèse.`,
  },
  {
    id: 11,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du CA** :
- Volumes quasi stables (~13 000-15 000 unités/an) — discipline de rareté maintenue
- Effet mix/personnalisations : **+4-6%/an** (levier principal)
- Effet prix : hausses régulières, pouvoir de prix intact
- Effet devises : **-1 à -2%/an** (USD/EUR défavorable, ~200 M€ de vent contraire en 2026)
- Contribution Luce à partir du T4 2026 (volumes plafonnés, prix ~550 k€)
- **Croissance CA publiée estimée : +5-7%/an**

**Levier opérationnel** :
- Marge d'EBITDA maintenue **≥39%** (guidance 2026) — plancher élevé
- Personnalisations et séries spéciales tirent la marge
- Coûts d'électrification (R&D Luce, e-building) pèsent modérément

**Coûts financiers** : bilan sain, charge financière faible — Ferrari est quasi net cash sur l'activité industrielle

**Dilution** : **relutif** — les rachats d'actions (3,5 Mds€ jusqu'en 2030) *réduisent* le nombre d'actions, soutenant le BPA

---

### Estimations BPA

| Exercice | BPA estimé | Croissance | P/E au cours (384,60 $) |
|---|---|---|---|
| 2024 (réalisé) | ~8,00€ | — | — |
| 2025 (réalisé) | **8,96€** | +12% | — |
| **2026E** | **~9,45-9,70€** | **+6-8%** | **~34-35x** |
| **2027E** | **~10,30-10,80€** | **+9-11%** | **~31-32x** |
| **2028E** | **~11,30-12,00€** | **+9-11%** | **~28-29x** |

*Note : BPA en euros ; le cours en USD implique un P/E sensible au taux EUR/USD. Guidance 2026 : BPA ajusté ≥9,45€.*

---

### Sensibilité

- **Scénario optimiste** (mix fort, Luce réussie, re-rating luxe) : BPA 2028 ~12€ + expansion du multiple → **fort potentiel de hausse** (objectif analyste jusqu'à ~570 $)
- **Scénario de base** : BPA 2028 ~11,5€, multiple stable ~30x → valorisation portée par la croissance du BPA, upside modéré (~20-25%, cohérent avec l'objectif médian ~448-475 $)
- **Scénario pessimiste** (Luce déçoit, luxe en récession, de-rating vers ~22x) : BPA 2028 ~10,5€ mais multiple comprimé → **baisse potentielle du titre malgré des bénéfices en hausse**

**Conclusion** : La croissance du BPA est **remarquablement prévisible** (~+8-10%/an) grâce au mix et aux rachats. Le vrai swing factor n'est **pas le BPA mais le multiple** : à ~35x, tout dépend de la capacité de Ferrari à rester perçu comme du luxe rare plutôt que comme un constructeur. Le risque/rendement est asymétriquement piloté par la perception de marque, pas par les chiffres.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Comptabilisation des revenus — RISQUE FAIBLE
Ferrari reconnaît le revenu à la livraison du véhicule — modèle **transactionnel simple et transparent**. Les personnalisations et acomptes sont clairement traités. Peu de complexité vs un modèle à contrats long terme. **Point de vigilance mineur** : la reconnaissance du revenu des séries limitées pluriannuelles (Icona, hypercars) étalées sur plusieurs exercices.

### Métriques ajustées vs GAAP — RISQUE FAIBLE
**Signal rassurant** : Ferrari précise explicitement que ses **métriques ajustées égalent les métriques reportées** (« Adjusted metrics equaled the reported ones, since there were no adjustments impacting EBITDA, EBIT, Net profit, EPS »). Autrement dit, **pas de maquillage par ajustements** — une transparence rare qui distingue Ferrari des entreprises multipliant les charges « non récurrentes ».

### Goodwill et immobilisations incorporelles — RISQUE FAIBLE
Ferrari étant une croissance **organique** (pas un roll-up), le goodwill est limité. Les incorporels concernent surtout la **R&D capitalisée** (développement produit, électrification). 

**À surveiller** : le rythme de **capitalisation de la R&D** liée à la Luce et à l'électrification — une capitalisation agressive pourrait flatter l'EBIT à court terme. Vérifier le ratio R&D capitalisée / R&D totale.

### Contrats de location (IFRS 16) — RISQUE FAIBLE
Droits d'utilisation liés aux concessions, flagship stores et équipements. Impact standard, correctement présenté. Pas d'anomalie identifiée.

### Rémunération en actions (SBC) — RISQUE FAIBLE
Plans d'actions de performance pour les dirigeants, dans les normes du secteur. Dilution largement **compensée par les rachats d'actions** (le nombre d'actions *baisse*). Transparence correcte.

### Parties liées — RISQUE MODÉRÉ
Structure actionnariale concentrée autour d'**Exor (famille Agnelli)** et de **Piero Ferrari**, avec un accord d'actionnaires. Relations avec l'écosystème Agnelli (Stellantis, Juventus, etc.) à documenter. 

**À surveiller** : les éventuelles transactions au sein de la galaxie Exor/Agnelli — historiquement bien encadrées, mais à suivre dans les annexes.

### Flux de trésorerie vs résultat — RISQUE FAIBLE
**Signal très positif** : FCF industriel de 1,538 Md€ (+50%), conversion de trésorerie > 55%. Le résultat net est **fortement adossé à du cash réel** — pas de divergence suspecte entre bénéfice comptable et génération de trésorerie.

### Engagements hors bilan — RISQUE FAIBLE
Ferrari Financial Services (financement client) crée des engagements de crédit à surveiller, mais de taille modeste et bien encadrée.

---

### Verdict global

**Risque comptable : FAIBLE** — Ferrari présente l'un des profils comptables **les plus propres** de son univers de couverture : métriques ajustées = reportées (pas de maquillage), FCF fortement corrélé au résultat, croissance organique limitant le goodwill, transparence élevée. Les seuls points de vigilance sont la **capitalisation de la R&D électrique** et les **transactions parties liées** au sein de la galaxie Exor — à surveiller par prudence, sans signal d'alerte à ce stade.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour le PDG de Ferrari

### Stratégie et avantage concurrentiel

**1.** La Luce a provoqué une polémique de design sans précédent (critiques de Montezemolo, du ministre Salvini, moqueries virales). Au-delà du récit rassurant, **quelles preuves mesurables** (précommandes, split clients existants/nouveaux) pouvez-vous montrer que la Luce protège — et n'érode pas — la valeur de marque ?

**2.** Vous répétez « quality of revenues over quantity ». **Jusqu'où** cette discipline de rareté peut-elle porter la croissance du CA sans augmenter les volumes ? Où est le plafond mathématique du mix et des prix ?

**3.** Ferrari se compare à Hermès mais doit, contrairement à lui, **réinventer son produit** face à l'électrification. Comment garantissez-vous que la transition EV n'entame pas la **valeur résiduelle** et la désirabilité qui fondent tout le modèle ?

### Allocation du capital

**4.** Avec un FCF industriel de 1,5 Md€ et un bilan quasi net cash, **pourquoi privilégier les rachats d'actions** (3,5 Mds€) plutôt qu'un réinvestissement plus agressif ou des dividendes exceptionnels ? Quel est votre cadre d'arbitrage ?

**5.** Le ROE dépasse 40%. À mesure que vous accumulez du capital, **comment évitez-vous la dilution du ROE** et maintenez-vous une allocation aussi performante ?

**6.** Envisageriez-vous un jour une **acquisition** (technologie, batteries, lifestyle) ? Ou la croissance restera-t-elle exclusivement organique pour préserver le mythe ?

### Risques

**7.** 70%+ de votre CA est hors zone euro et ~200 M€ de vent contraire devises sont attendus en 2026. **Pourquoi ne couvrez-vous pas davantage** cette exposition structurelle, et quelle est votre politique de change ?

**8.** Les tarifs douaniers américains sur les voitures UE : vous dites « pas d'impact significatif ». **Qu'est-ce qui change** si les tarifs augmentent durablement, et quelle est votre capacité à les répercuter sur des clients déjà à ~600 000 $ ?

**9.** La Grande Chine recule (-221 unités en 2025). **Est-ce structurel ou conjoncturel**, et quelle est votre stratégie pour ce marché clé du luxe ?

### Vision long terme

**10.** Dans 10 ans, quelle sera la **part de l'électrique** dans vos livraisons et votre CA ? Comment gérez-vous la coexistence thermique/hybride/électrique sans fragmenter la marque ?

**11.** La F1 est un actif de marque majeur mais coûteux et incertain sportivement. **Comment quantifiez-vous** son retour sur investissement en valeur de marque ?

**12.** Un CEO physicien-technologue pilotant une marque émotionnelle : **comment équilibrez-vous** l'innovation technologique et le respect de l'ADN Ferrari, après le signal d'alerte de la Luce ?

### Gouvernance et culture

**13.** L'actionnariat Exor/Agnelli assure la stabilité. **Comment garantissez-vous** que cette stabilité ne devienne pas de l'immobilisme face aux ruptures technologiques ?

**14.** Quel est le **profil de client** que vous cherchez à conquérir avec la Luce et le lifestyle, sans aliéner le collectionneur traditionnel qui fait votre valeur ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. La valorisation intègre une perfection qui ne pardonne rien

À **~35x les bénéfices** et **~9x le CA**, Ferrari se paie une prime de maison de luxe pour une entreprise qui reste, mécaniquement, un **constructeur automobile** confronté à une transition technologique. Le titre a déjà perdu ~30% sur 12 mois **sans aucune détérioration des résultats** — la démonstration que c'est le **multiple qui commande**, et qu'un multiple peut se comprimer bien plus vite qu'il ne s'est construit. À ce prix, toute croissance de BPA sous 8-10% déclenche un de-rating brutal.

### 2. Le risque existentiel unique : l'auto-érosion de la marque

Contrairement à un constructeur classique, le seul actif de Ferrari est **immatériel** : la désirabilité. La polémique Luce est un **avertissement** — quand l'ancien président (Montezemolo), un ministre (Salvini) et des millions d'internautes moquent votre produit phare, ce n'est pas un bruit passager, c'est un **risque de dilution du mythe**. Ferrari joue avec le feu : chaque écart de l'ADN (SUV Purosangue, EV Luce, 5 places) rapproche la marque du « premium » et l'éloigne du « sacré ». Une marque de luxe meurt lentement, puis d'un coup.

### 3. L'électrification est un piège structurel

Le pouvoir de prix de Ferrari repose sur l'**émotion mécanique** — le son du V12, la rareté du moteur. L'électrique **égalise** la performance et **supprime la signature sensorielle**. Pourquoi payer 550 000 € pour une Ferrari électrique quand la barrière technique s'effondre ? La Luce teste précisément cette question — et la valeur résiduelle des Ferrari thermiques pourrait *paradoxalement* monter tandis que celle des EV s'effondre, fragmentant la marque.

### 4. La concentration client et la cyclicité du luxe

La base de Ferrari, c'est **quelques milliers d'ultra-fortunés**. Une correction sévère des marchés d'actifs (actions, crypto, immobilier de prestige) frappe directement cette clientèle. Le luxe se croit décorrélé du cycle — jusqu'à ce qu'il ne le soit plus. La faiblesse de la Grande Chine (-221 unités) est peut-être le **premier signal** d'un plafond de demande que les bulls refusent de voir.

### 5. Le concurrent que les optimistes sous-estiment : le temps

Le vrai danger n'est pas Lamborghini ou McLaren — c'est le **changement générationnel**. Les nouveaux ultra-riches (tech, crypto) ont-ils le même rapport émotionnel à la voiture thermique que les collectionneurs historiques ? Si la prochaine génération de fortunes préfère le jet, le yacht ou l'expérience numérique à la supercar, la demande structurelle s'érode lentement — un risque invisible dans les carnets de commandes actuels.

### 6. La prime « exécution parfaite » du management

Vigna, physicien de formation, pilote une marque d'émotion. La Luce est **son** pari — et son accueil mitigé interroge. Le marché accorde à Ferrari une prime pour une exécution sans faute ; le moindre faux pas répété sur l'électrification (design, ventes, résiduels) briserait cette confiance et le multiple avec.

### Le scénario catastrophe unique
**Récession du luxe + échec commercial de la Luce + accélération EV imposée, simultanément.** Dans ce cas : les volumes EV plafonnent sans compenser, la valeur résiduelle se fragmente, le luxe se contracte, et le marché re-note Ferrari de ~35x à ~20x — un **de-rating de 40%+** même avec des bénéfices stables. Probabilité ? Non négligeable (20-30%) sur un horizon 3-5 ans, dans un monde qui pousse à l'électrification.

### Conclusion short
Ferrari est **la meilleure franchise de son univers** — mais **pas nécessairement la meilleure action à ~35x**. Le titre intègre le maintien parfait d'une prime de luxe pour une entreprise qui doit réinventer son produit sans trahir son mythe. C'est un **exercice d'équilibriste** à un prix qui ne laisse aucune marge d'erreur. La qualité n'est pas en cause ; le prix d'entrée, si.`,
  },
];

export default { ...meta, modules };
