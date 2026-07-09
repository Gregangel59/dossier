// ============================================================
//  DOSSIER : LVMH Moët Hennessy Louis Vuitton SE (MC)
//  Fichier de DONNÉES uniquement — aucun rendu ici.
//  Pour créer un nouveau dossier, copie ce fichier, change le
//  bloc "meta" et remplace les "modules".
// ============================================================

// --- Métadonnées de l'entreprise (carte d'accueil + en-tête) ---
const meta = {
  slug: "lvmh",                     // identifiant d'URL : /dossier/lvmh
  ticker: "MC",
  name: "LVMH Moët Hennessy Louis Vuitton SE",
  exchange: "Euronext Paris",
  sector: "Luxe — Biens de consommation haut de gamme",
  initials: "MC",                   // affiché dans la pastille
  tagline: "Le n°1 mondial du luxe, conglomérat de 75+ Maisons piloté par Bernard Arnault.",
  riskScore: 61,                    // score du rapport de risque (ou null)
  riskLabel: "Risque modéré",
  // Nom du fichier HTML déposé dans public/rapports/ (ou null si absent) :
  riskReport: "lvmh.html",
  updated: "2026-07",               // période des données
};

const modules = [
  {
    id: 1,
    title: "Présentation de l'entreprise",
    category: "Compréhension du business",
    icon: "🏢",
    content: `## Modèle économique

LVMH est le **n°1 mondial du luxe**, un conglomérat coté à Euronext Paris regroupant **plus de 75 Maisons** organisées autour de marques de prestige. Né en 1987 de la fusion de Louis Vuitton et Moët Hennessy, le groupe est piloté depuis par **Bernard Arnault**, qui en a fait le plus grand empire du luxe au monde. Le chiffre d'affaires 2025 atteint **80,8 milliards €**, pour un bénéfice net part du Groupe de **10,9 milliards €**.

Le modèle repose sur une **architecture de marques (« house of brands »)** : chaque Maison conserve son identité créative, son directeur artistique et son histoire, tout en bénéficiant de la puissance financière, logistique et immobilière du groupe. La valeur naît de la **désirabilité de la marque**, du **contrôle de la distribution** (boutiques en propre) et de la **rareté organisée**.

Le groupe opère sur **cinq activités** :
- **Mode & Maroquinerie** (~47% du CA) : cœur de rentabilité — Louis Vuitton, Dior, Celine, Loewe, Fendi, Loro Piana
- **Vins & Spiritueux** : champagnes et cognacs — Moët & Chandon, Dom Pérignon, Hennessy
- **Parfums & Cosmétiques** : Parfums Christian Dior, Guerlain, Givenchy
- **Montres & Joaillerie** : Tiffany & Co., Bulgari, TAG Heuer, Hublot
- **Distribution sélective** : Sephora, Le Bon Marché, DFS

## Principaux produits et services

**Mode & Maroquinerie** : sacs, prêt-à-porter, souliers, accessoires de cuir — la maroquinerie iconique (Louis Vuitton, Dior) est la principale machine à profit du groupe, avec une marge opérationnelle proche de **35%**.

**Vins & Spiritueux** : champagnes premium, cognac Hennessy (leader mondial), whiskies et spiritueux d'exception.

**Parfums & Cosmétiques** : Sauvage (Dior) est le premier parfum masculin vendu au monde ; portefeuille de fragrances et maquillage haut de gamme.

**Montres & Joaillerie** : Tiffany (acquise pour ~15,8 Mds$ en 2021), Bulgari, et les Maisons horlogères suisses.

**Distribution sélective** : Sephora (croissance solide), Le Bon Marché, DFS (travel retail).

## Clients, fournisseurs, concurrents

**Clients** : clientèle aisée mondiale (HNWI), classe moyenne supérieure aspirationnelle, touristes du luxe (Asie, Moyen-Orient). Distribution majoritairement en **boutiques exclusives détenues en propre**.

**Fournisseurs** : ateliers et tanneries (souvent intégrés ou sous contrôle du groupe), fournisseurs de cuir, de métaux précieux, verriers, viticulteurs. LVMH internalise de plus en plus sa chaîne (rachat de tanneries, de manufactures).

**Concurrents** : **Hermès** (rival premium le plus rentable), **Kering** (Gucci, Saint Laurent, Bottega Veneta), **Richemont** (Cartier, Van Cleef), **Chanel** (privé), **L'Oréal** (cosmétiques), **Estée Lauder**.

## Modalités contractuelles

Contrairement aux modèles à contrats long terme, le luxe est un business **transactionnel à très forte marge**. La valeur repose sur : le **pricing power** (capacité à augmenter les prix sans perdre la clientèle cœur), le **contrôle de la distribution** (peu de wholesale, majorité de boutiques en propre), et la **désirabilité entretenue** par le marketing, les défilés et l'exclusivité. La rentabilité est protégée par des marges brutes très élevées et un patrimoine immobilier de premier ordre.`,
  },
  {
    id: 2,
    title: "Chaîne d'approvisionnement",
    category: "Compréhension du business",
    icon: "🔗",
    content: `## Position de LVMH dans la chaîne de valeur

LVMH occupe une position de **maison de luxe intégrée verticalement**, contrôlant une part croissante de sa chaîne — de la matière première à la boutique finale. Cette intégration est un levier de qualité, de marge et de rareté.

### Amont — Intrants et matières premières

**Cuirs et peausserie** : LVMH rachète des **tanneries** (Riba Guixà, Heng Long, tannerie de Roux) et sécurise des filières de cuir d'exception (veau, agneau, cuirs exotiques via des élevages contrôlés).

**Métaux précieux et pierres** : pour la joaillerie (Tiffany, Bulgari, Chaumet) — approvisionnement en or, platine, diamants (avec exigences de traçabilité RJC).

**Textiles et cachemire** : Loro Piana contrôle des filières de laines et cachemire haut de gamme (vigogne, baby cashmere).

**Viticulture** : vignobles en propriété (Champagne, Cognac, Bordeaux) — Moët & Chandon, Dom Pérignon, Hennessy, Château d'Yquem, Cheval Blanc.

**Verre et packaging** : fournisseurs de flaconnage de luxe pour parfums et spiritueux.

---

### LVMH — Fabrication et distribution

**Manufactures** : ateliers de maroquinerie (France, Italie, Espagne), manufactures horlogères suisses, laboratoires de cosmétiques, chais de vieillissement.

**Distribution** :
- **Boutiques en propre** (retail direct) — cœur du modèle, contrôle total de l'expérience client
- **Sephora** — distribution sélective beauté (multi-marques)
- **DFS / travel retail** — aéroports, croisières
- **E-commerce** — plateformes propres par Maison

---

### Aval — Clients finaux

**Clientèle patrimoniale (HNWI/UHNWI)** : cœur de la haute joaillerie, du sur-mesure et des éditions limitées — décorrélée du cycle économique.

**Clientèle aspirationnelle** : classe moyenne supérieure, achat « d'entrée de gamme » (petite maroquinerie, parfums, cosmétiques) — la plus exposée au ralentissement (~80 M de clients perdus dans le luxe en 3 ans selon le secteur).

**Marchés géographiques clés** : États-Unis (~26%), Europe (~26%), Asie hors Japon (~26%), Japon (~8%), reste du monde (~14%).

**Tourisme du luxe** : flux touristiques (Chinois, Américains, Moyen-Orient) — sensibles aux devises (yen, dollar) et à la géopolitique.`,
  },
  {
    id: 3,
    title: "Segments",
    category: "Compréhension du business",
    icon: "📊",
    content: `## Ventilation par activité — Exercice 2025

### Chiffre d'affaires 2025 : 80,8 Mds€ (-1% organique, -5% publié)

| Activité | Poids CA | Croissance organique 2025 | Marge opér. |
|---|---|---|---|
| Mode & Maroquinerie | ~47% (37,8 Mds€) | -5% | ~35% |
| Distribution sélective | ~18% | +4% | 9,7% |
| Parfums & Cosmétiques | ~10% | ~stable | 8,9% |
| Montres & Joaillerie | ~13% | modérée | élevée |
| Vins & Spiritueux | ~7% | -5% (publié -9%) | sous pression |

**Point clé** : la **Mode & Maroquinerie** concentre l'essentiel du profit (marge ~35%) mais a reculé de -5% en organique en 2025 — le cœur du groupe a souffert d'une base de comparaison élevée (tourisme japonais 2024) et d'un ralentissement de la clientèle aspirationnelle.

---

### Répartition géographique (2025)

| Région | Part du CA | Tendance 2025 |
|---|---|---|
| États-Unis | ~26% | En hausse (+1 pt), demande locale solide |
| Europe | ~26% | En hausse (+1 pt), baisse au S2 |
| Asie (hors Japon) | ~26% | Amélioration : de -6% (T1) à +2% (T3/T4) |
| Japon | ~8% | En recul (base 2024 élevée, yen) |
| Reste du monde | ~14% | Contribution stable |

**Point d'inflexion** : l'Asie hors Japon, principal moteur historique, est revenue en croissance au second semestre — signal de stabilisation après un cycle de déstockage et d'attentisme du consommateur chinois.

---

### Dynamiques par activité

**Distribution sélective (+4%)** : le point fort de 2025. **Sephora** affiche une croissance solide, avec un résultat opérationnel en hausse de +28% et une marge en progression de 2 points à 9,7%. DFS se stabilise.

**Parfums & Cosmétiques (stable)** : résilience remarquable — CA quasi stable mais résultat opérationnel **+8%**, marge portée à 8,9%. Sauvage reste le n°1 mondial des parfums masculins.

**Mode & Maroquinerie (-5%)** : le cœur du groupe résiste sur les clientèles locales mais pâtit de l'effet devises et de la normalisation post-tourisme. Amélioration séquentielle au S2.

**Vins & Spiritueux (-5% à -9%)** : segment le plus touché — effet change, tensions douanières (tarifs US), et impossibilité d'augmenter des prix déjà élevés. Point noir de l'exercice.`,
  },
  {
    id: 4,
    title: "Avantages compétitifs",
    category: "Compréhension du business",
    icon: "🏆",
    content: `## Les fossés économiques (Moats)

### 1. Le capital de marque — le moat suprême du luxe
LVMH détient certaines des **marques les plus désirables et anciennes au monde** : Louis Vuitton (1854), Dior, Moët & Chandon, Tiffany, Bulgari. La désirabilité d'une marque de luxe est **quasi impossible à répliquer** : elle exige des décennies d'héritage, de savoir-faire et d'imaginaire. C'est un actif immatériel qui protège des marges exceptionnelles et confère un **pricing power** durable.

### 2. Pricing power — hausse des prix sans perte de clientèle cœur
Les Maisons phares peuvent augmenter leurs prix régulièrement sans éroder la demande de la clientèle patrimoniale. Ce pouvoir de prix est le principal rempart contre l'inflation des coûts et le socle de la marge à ~35% de la Mode & Maroquinerie.

### 3. Contrôle de la distribution
LVMH vend majoritairement via ses **boutiques en propre**, contrôlant l'expérience, l'image et les prix. Ce **retail direct** évite la banalisation (déstockage, discount) et capte l'intégralité de la marge de détail — un avantage structurel sur les marques dépendantes du wholesale.

### 4. Effet de portefeuille et puissance financière
Avec 75+ Maisons et 5 activités, LVMH **diversifie le risque** (géographie, catégorie, cycle) et déploie une **puissance d'acquisition** inégalée (Tiffany 15,8 Mds$, Loro Piana). Le groupe peut financer des campagnes marketing, du foncier prime et des rachats que peu de rivaux peuvent égaler.

### 5. Patrimoine immobilier et emplacements
LVMH possède ou contrôle des **emplacements retail d'exception** (Champs-Élysées, 5th Avenue, Ginza) — un actif rare, défensif et créateur de barrière à l'entrée pour les concurrents.

### 6. Savoir-faire et intégration verticale
Ateliers, tanneries, vignobles et manufactures internalisés garantissent qualité, exclusivité et contrôle des coûts — un fossé difficile à franchir pour un nouvel entrant.

## Positionnement vs concurrence

| Critère | LVMH | Hermès | Kering |
|---|---|---|---|
| Modèle | Conglomérat multi-Maisons | Mono-marque premium | Portefeuille en repositionnement |
| Marge opérationnelle | ~22% (groupe) | ~40% | sous pression |
| Pricing power | Très élevé | Extrême | Variable |
| Diversification | Maximale (5 activités) | Faible (volontaire) | Concentrée mode |
| Prime de valorisation | Élevée | La plus élevée | Décote |

## Pouvoir de négociation

- **Vis-à-vis des clients** : **Très élevé** — la rareté et la désirabilité donnent le pouvoir de prix ; la clientèle cœur est peu sensible au prix
- **Vis-à-vis des fournisseurs** : **Élevé et croissant** — l'intégration verticale (tanneries, vignobles) réduit la dépendance et sécurise les filières
- **Vis-à-vis des distributeurs** : **Total** sur le retail en propre ; **fort** via Sephora et DFS`,
  },
  {
    id: 5,
    title: "Compétition",
    category: "Comparaison sectorielle",
    icon: "🌍",
    content: `## Tableau comparatif — Luxe mondial (2025/2026)

| Société | Code Bloomberg | Capitalisation (Mds$) | EV/CA | EV/EBIT | P/E | Rendement div. | ROE 5 ans moy. |
|---|---|---|---|---|---|---|---|
| **LVMH** | **MC FP** | **~285** | **~3,4x** | **~15x** | **~23x** | **~2,7%** | **~22%** |
| Hermès | RMS FP | ~280 | ~13x | ~30x | ~48x | ~0,7% | ~30% |
| Richemont | CFR SW | ~110 | ~4x | ~18x | ~26x | ~1,8% | ~14% |
| Kering | KER FP | ~35 | ~2x | ~13x | ~18x | ~3,5% | ~15% |
| L'Oréal | OR FP | ~230 | ~5x | ~22x | ~30x | ~1,8% | ~18% |

*Données estimatives sur la base des cours et publications disponibles à juillet 2026. À affiner sur filings directs.*

---

### Analyse comparative

**Hermès (RMS) — Le benchmark de rentabilité absolue**
- Marge opérationnelle ~40% vs ~22% pour LVMH — la référence du secteur
- Se paie à un P/E ~48x, prime massive justifiée par une désirabilité extrême et une rareté organisée (offre volontairement contrainte)
- Modèle mono-marque, ultra-premium, quasi immunisé au cycle aspirationnel
- **Verdict** : le rival que LVMH ne peut égaler sur la marge, mais que LVMH surpasse en échelle et diversification

**Richemont (CFR) — Le pure player joaillerie**
- Cartier et Van Cleef & Arpels dominent la haute joaillerie, segment le plus résilient du luxe
- Rentabilité et croissance solides, valorisation intermédiaire
- Concurrent direct de LVMH sur Montres & Joaillerie (Tiffany, Bulgari)

**Kering (KER) — Le comparateur en difficulté**
- Gucci, sa locomotive, traverse un repositionnement délicat — CA et marges sous pression
- Valorisation en forte décote (P/E ~18x), reflet des doutes sur l'exécution
- Montre le risque d'un portefeuille trop concentré sur une marque en perte de vitesse

**LVMH — L'équilibre échelle/diversification**
LVMH n'atteint pas la marge d'Hermès mais offre la **diversification la plus complète** du secteur (5 activités, 75+ Maisons, présence géographique équilibrée). Sa valorisation (~23x) est plus raisonnable qu'Hermès et L'Oréal, ce qui en fait le véhicule « cœur » d'exposition au luxe pour un investisseur institutionnel.

---

### Le ratio qui compte : marge et pricing power
Le luxe se juge sur la **marge opérationnelle** et le **pricing power**. LVMH reste très rentable (~22% groupe, ~35% sur son cœur Mode & Maroquinerie), mais l'écart avec Hermès (~40%) rappelle qu'échelle et diversification ont un coût en pureté de marge. La question 2026-2027 est le **retour de la croissance organique** de la Mode & Maroquinerie.`,
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
| CA publié | 80,81 Mds€ | 80,71 Mds€ | **+0,1 Md€ ✓** |
| Croissance organique | -1% | ~-1% | Conforme |
| Croissance publiée | -5% | — | Effet devises -3% |
| Résultat opér. courant (ROC) | 17,76 Mds€ | 17,15 Mds€ | **Supérieur** |
| Résultat net part du Groupe | 10,9 Mds€ | — | **-13% a/a** |
| BPA | ~21,85€ | — | En baisse |

**LVMH a légèrement dépassé le consensus** sur le CA et significativement sur le résultat opérationnel courant, malgré un exercice de repli.

---

### Facteurs clés par activité

- **Distribution sélective (+4%)** : moteur de l'exercice — Sephora en forte croissance, ROC +28%
- **Parfums & Cosmétiques (stable)** : résilience, ROC +8%, marge à 8,9%
- **Mode & Maroquinerie (-5%)** : cœur sous pression, amélioration séquentielle au S2, marge maintenue à 35%
- **Vins & Spiritueux (-9% publié)** : point faible — change, tarifs douaniers US, prix plafonnés

---

### Évolution des marges

- **Marge opérationnelle courante** : 22% en 2025, en repli de ~110 bps vs 23,1% en 2024 — impact devises
- **ROC** : 17,76 Mds€, en baisse de -9%
- **Bénéfice net** : pénalisé par la **surtaxe exceptionnelle française** (+4 points de taux d'imposition) — un facteur non récurrent qui explique une partie de la baisse de -13%

---

### Perspectives et guidance

- **Point d'inflexion S2** : croissance organique redevenue **positive (+1%)** aux T3 et T4 — signal de stabilisation
- Bernard Arnault : *« Nous sommes un groupe familial »* — orientation long terme réaffirmée
- Dividende maintenu à **13€/action** — signal de confiance dans la génération de trésorerie
- Rachat de **50% des parts restantes de Loro Piana** (participation portée de 85% à 94%)

---

### Signaux d'alerte / points de vigilance bilan

- **Effet devises négatif** : -3% sur le CA publié — forte exposition USD, yen, yuan
- **Surtaxe fiscale française** : +4 pts d'impôt, pèse sur le net (partiellement non récurrent)
- **Dette nette** : 6,9 Mds€, **inférieure à 10% du CA** — bilan très solide
- **Free cash-flow opérationnel** : 11,3 Mds€, **+8%** — génération de trésorerie robuste malgré le repli du CA
- **Tarifs douaniers US** : risque persistant sur Vins & Spiritueux et exports

---

### Réaction du marché

Le titre a clôturé quasi stable (~+0,2%) le jour de la publication — les investisseurs sont restés **largement neutres** face à des résultats mitigés mais sans mauvaise surprise. Le marché avait déjà intégré le ralentissement ; l'attention se porte désormais sur la **vitesse du rebond** en 2026, avec les résultats du S1 attendus le **28 juillet 2026** comme prochain catalyseur.`,
  },
  {
    id: 7,
    title: "Earnings Calls",
    category: "Analyse financière",
    icon: "📞",
    content: `## Analyse des conférences téléphoniques — Priorités du management

### Ton général — Évolution 2023-2025

**2023** : Ton confiant, sortie du rebond post-COVID. Croissance encore soutenue, discours sur la « normalisation » après des années exceptionnelles.

**2024** : Ton plus prudent. Premiers signes de ralentissement de la clientèle aspirationnelle, attentisme du consommateur chinois, effet de base élevé au Japon. Le management insiste sur la **résilience du modèle** et la solidité des Maisons phares.

**2025** : Ton **mesuré mais confiant sur le long terme**. « Bonne résistance dans un contexte perturbé », reconnaissance des vents contraires (devises, géopolitique, tarifs), mais soulignement du **point d'inflexion du S2** (retour de la croissance organique à +1%). Bernard Arnault martèle l'**horizon familial et long terme**.

---

### Priorités répétées du management

**1. Désirabilité et qualité produit** — Thème central et intemporel. LVMH réinvestit massivement dans la création (défilés Ghesquière, Pharrell Williams chez LV), l'innovation produit et l'expérience boutique (The Louis à Shanghai). La désirabilité prime sur le volume.

**2. Contrôle et sélectivité de la distribution** — Le management défend une distribution maîtrisée, évitant la sur-diffusion qui banaliserait les marques. Sephora est cité comme succès de distribution sélective.

**3. Discipline d'allocation du capital** — Rachat de minoritaires (Loro Piana à 94%), acquisitions ciblées, et maintien d'un **bilan très solide** (dette nette <10% du CA). Le dividende maintenu à 13€ signale la confiance.

**4. Long-termisme familial** — Arnault répète l'**orientation multi-décennale** : « nous sommes un groupe familial ». La transmission (les enfants Arnault occupent des postes clés) est un axe implicite de la communication.

**5. Gestion des vents contraires** — Devises, tarifs douaniers US, surtaxe fiscale française : le management les nomme systématiquement comme facteurs exogènes, sans catastrophisme.

---

### Analyse du sentiment

- **Confiance** : Solide sur le long terme, prudente sur le court terme. Le management ne surpromet pas et souligne les points d'inflexion factuels (S2 positif).
- **Transparence** : Bonne sur les tendances par activité et géographie. Plus discret sur la guidance chiffrée précise (LVMH ne donne traditionnellement pas d'objectifs quantifiés).
- **Cohérence** : Remarquable sur la stratégie (désirabilité, sélectivité, long terme). Le fil directeur ne dévie pas malgré la conjoncture.

> **À lire entre les lignes** : LVMH vend la **résilience d'un modèle éprouvé** et la patience du capital familial. Tant que la désirabilité des Maisons phares tient et que le S2 confirme l'inflexion, le récit reste crédible. Le risque serait un affaiblissement durable de Louis Vuitton ou Dior — le cœur du réacteur.`,
  },
  {
    id: 8,
    title: "Management",
    category: "Gouvernance",
    icon: "👔",
    content: `## Évaluation du management

### Bernard Arnault — Président-Directeur Général

**Track record** : C'est l'un des **plus grands bâtisseurs d'empire du capitalisme moderne**. Entré chez Boussac en 1984, il prend le contrôle de LVMH en 1989 et en fait, en trois décennies, le **n°1 mondial du luxe** — d'un groupe de quelques Maisons à un conglomérat de 75+ marques et ~80 Mds€ de CA. Chiffrable et vérifiable : LVMH a **doublé son CA en 10 ans** et créé une valeur actionnariale colossale.

Son playbook : **acquérir des Maisons patrimoniales** (Tiffany, Bulgari, Loro Piana, Fendi), leur donner des moyens tout en préservant leur identité créative, et **investir dans la désirabilité** sur le très long terme. Discipline d'acquisition reconnue (mais parfois agressive, cf. bataille Hermès, rachat hostile Gucci historique).

**Ancienneté et alignement** : Arnault dirige LVMH depuis **1989 (35+ ans)**. La famille Arnault contrôle le groupe via **Christian Dior SE / Financière Agache**, détenant une part majoritaire du capital et des droits de vote. **Alignement financier maximal** — c'est un actionnaire de contrôle, pas un dirigeant salarié.

---

### Gouvernance familiale et succession

Les **cinq enfants Arnault** occupent des postes clés :
- **Delphine Arnault** — DG de Christian Dior Couture
- **Antoine Arnault** — Image, communication, environnement (et Christian Dior SE)
- **Alexandre, Frédéric, Jean Arnault** — postes de direction dans diverses Maisons (Tiffany, TAG Heuer, Louis Vuitton horlogerie)

La **succession organisée** est un axe explicite : Arnault a fait évoluer les statuts et les structures de contrôle pour **pérenniser le contrôle familial** au-delà de son mandat. C'est à la fois un gage de stabilité long terme et un point de vigilance de gouvernance (concentration du pouvoir).

---

### Allocation du capital — Historique

| Décision | Montant | Lecture |
|---|---|---|
| Acquisition Tiffany | ~15,8 Mds$ (2021) | Renforcement Montres & Joaillerie |
| Acquisition Loro Piana | ~2 Mds€ (2013) → valorisée ~11 Mds€ | Création de valeur majeure |
| Rachat minoritaires Loro Piana | 85% → 94% (2025) | Confiance dans l'actif |
| Dividende maintenu 13€ | 2025 | Signal de solidité |

**Tendance** : allocation **disciplinée et créatrice de valeur** sur le long terme, financée par une génération de trésorerie robuste (FCF 11,3 Mds€) et un bilan solide (dette nette <10% du CA). ROE historiquement élevé (~20%+).

---

### Signaux d'alerte

- **Contrôle familial concentré** : structure de holding en cascade (Agache → Dior → LVMH) — le flottant a peu de poids dans les décisions
- **Risque de succession / clé homme** : la stature de Bernard Arnault est un actif unique ; la transition, bien que préparée, reste un test
- **Rémunération** : encadrée, mais l'essentiel de l'alignement passe par la détention capitalistique
- **Type de dirigeant** : **fondateur-bâtisseur / actionnaire de contrôle** — l'archétype recherché dans le luxe, où la vision long terme et la préservation des marques priment sur la gestion trimestrielle`,
  },
  {
    id: 9,
    title: "Analyse du cours",
    category: "Marché",
    icon: "📉",
    content: `## Facteurs historiques ayant influencé le cours (2021-2026)

### Hausses significatives (+5%)

**2021-2023 — Super-cycle du luxe post-COVID** : Le titre a atteint des sommets historiques (>900€ en 2023), porté par le rebond de la consommation, la réouverture chinoise et le pricing power. LVMH est brièvement devenue la **première capitalisation européenne**.

**Rebonds sur signaux chinois** : Chaque signe de reprise de la consommation chinoise (réouverture, stimulus, données de trafic) a historiquement propulsé le titre, l'Asie étant le principal moteur du luxe.

**T3 2025 — Retour de la croissance** : L'annonce de la première croissance organique positive de 2025 (+1% au T3, rebond Chine) a fait rebondir le titre — signal que le creux du cycle était peut-être passé.

**2026 (YTD) — Reprise progressive** : Le titre remonte (~14% sur un an à mi-2026), soutenu par la stabilisation du S2 2025 et l'espoir d'un rebond de la Mode & Maroquinerie.

---

### Baisses significatives (-5%)

**2024-début 2025 — Correction du luxe** : Le titre a perdu **plus de 30% entre janvier et juin 2025**, victime du ralentissement de la clientèle aspirationnelle, de l'attentisme chinois et de la contraction du marché du luxe. La valorisation « de croissance » a été remise en cause.

**Publications trimestrielles décevantes** : Plusieurs trimestres 2024-2025 de croissance organique négative ou faible ont sanctionné le titre, le marché s'inquiétant de la durée du ralentissement.

**Tensions géopolitiques et tarifs** : Les menaces de **tarifs douaniers US** (Vins & Spiritueux, exports) et les tensions commerciales ont pesé ponctuellement.

**Surtaxe fiscale française (2025)** : L'annonce de la surtaxe sur les grandes entreprises (+4 pts d'impôt) a pesé sur les perspectives de bénéfice net.

---

### Facteurs structurels de soutien au cours

- **Statut de « blue chip » du CAC 40** : valeur de référence, flux réguliers des ETF et fonds indiciels européens
- **Contrôle familial** : stabilité actionnariale, peu de risque d'OPA, vision long terme
- **Génération de trésorerie** : FCF robuste (11,3 Mds€) et dividende croissant historiquement — plancher de valorisation
- **Beta modéré** : moins volatil qu'une valeur cyclique classique, mais sensible au sentiment sur la Chine et au luxe aspirationnel
- **Fourchette 52 semaines** : ~440€ (bas) à ~655€ (haut) — reflet de la volatilité du cycle luxe`,
  },
  {
    id: 10,
    title: "Projections BPA",
    category: "Valorisation prospective",
    icon: "🔮",
    content: `## Estimations BPA 2026-2028

### Hypothèses de modélisation

**Croissance du CA** :
- Secteur luxe : rebond progressif attendu (+3-6%/an) après le creux 2024-2025
- Mode & Maroquinerie : retour à une croissance organique positive, moteur du rebond
- Distribution sélective (Sephora) : croissance soutenue maintenue
- Effet prix/pricing power : +2-4%/an (clauses implicites du luxe)
- Effet devises : variable — le vent contraire USD/yen pourrait s'atténuer
- **Croissance CA publiée estimée : +4-7%/an**

**Levier opérationnel** :
- Rebond de la Mode & Maroquinerie → redressement de la marge groupe vers 23-24%
- Amélioration continue de la marge Distribution sélective (Sephora)
- Effet de mix favorable si la joaillerie et la Mode accélèrent

**Coûts** :
- Normalisation possible de la surtaxe fiscale française (partiellement non récurrente)
- Investissements soutenus en marketing et retail (défensifs pour la désirabilité)

**Dilution** : quasi nulle — LVMH pratique peu de dilution, structure actionnariale stable

---

### Estimations BPA

| Exercice | BPA estimé | Croissance | P/E au cours de clôture (484,90€ · 8 juil. 2026) |
|---|---|---|---|
| 2024 (réalisé) | ~25,0€ | — | — |
| 2025 (réalisé) | **~21,85€** | **-13%** | ~22x |
| **2026E** | **~21,3-22,5€** | **~stable à +3%** | **~22-23x** |
| **2027E** | **~24,0-25,5€** | **+10-13%** | **~19-20x** |
| **2028E** | **~26,5-28,5€** | **+8-11%** | **~17-18x** |

*PER consensus 2026 ~23x, 2027 ~20x — cohérent avec un scénario de rebond graduel.*

---

### Sensibilité

- **Scénario optimiste** (rebond Chine fort + Mode & Maroquinerie +HSD) : BPA 2028 vers ~28,5€ → P/E ~17x — titre attractif vs son historique
- **Scénario de base** : rebond graduel, BPA 2028 ~27€ → P/E ~18x — valorisation raisonnable pour un actif de qualité
- **Scénario pessimiste** (rechute Chine + devises défavorables + tarifs) : BPA 2026-2027 stagnant → P/E maintenu élevé, peu d'upside

**Conclusion** : La thèse repose sur le **timing et la vigueur du rebond** de la Mode & Maroquinerie et de la consommation chinoise. À 484,90€ (clôture du 8 juillet 2026), le titre se paie ~22-23x les bénéfices 2026 — une valorisation ni tendue ni décotée, offrant un profil risque/rendement **favorable sur 3 ans** pour un investisseur patient misant sur la résilience du n°1 mondial du luxe. Objectif consensus médian ~577-585€ (upside ~19-20%).`,
  },
  {
    id: 11,
    title: "Bull & Bear",
    category: "Valorisation & thèses",
    icon: "⚖️",
    content: `## 🐂 Scénario Optimiste (Bull Case)

### Leviers de croissance structurels

**1. Le n°1 mondial d'un marché structurellement porteur** : Le luxe bénéficie d'une croissance long terme de la richesse mondiale (HNWI en hausse), de la montée des classes moyennes émergentes et d'un pricing power quasi unique. LVMH est le **véhicule d'exposition le plus complet** au secteur.

**2. Point d'inflexion confirmé au S2 2025** : Après un creux, la croissance organique est redevenue positive (+1% aux T3/T4), avec l'Asie hors Japon repassée en territoire positif. Le rebond de la Mode & Maroquinerie (marge ~35%) serait un puissant levier de résultat.

**3. Portefeuille de marques irremplaçable** : Louis Vuitton, Dior, Tiffany, Bulgari, Moët — un capital de marque impossible à répliquer, protégeant des marges exceptionnelles sur des décennies.

**4. Distribution sélective en forte croissance** : Sephora (+28% de ROC, +4% de ventes) est un moteur de diversification et de croissance décorrélé partiellement du cycle du luxe dur.

**5. Bilan et trésorerie en forteresse** : FCF 11,3 Mds€ (+8%), dette nette <10% du CA — LVMH peut investir, acquérir et verser un dividende croissant dans toutes les conditions de marché.

**6. Valorisation raisonnable vs pairs** : ~23x les bénéfices, une décote nette vs Hermès (~48x) et L'Oréal (~30x) — pour un actif de qualité comparable, avec un upside consensus de ~20%.

---

## 🐻 Scénario Pessimiste (Bear Case)

### Risques permanents au business

**1. Ralentissement durable de la clientèle aspirationnelle** : Le luxe a perdu ~80 M de clients en 3 ans. Si la classe moyenne supérieure se détourne durablement (entrée de gamme maroquinerie, parfums), le volume et la croissance de LVMH souffrent structurellement.

**2. Dépendance à la Chine et au consommateur asiatique** : Une part majeure de la demande vient d'Asie. Un ralentissement prolongé de la consommation chinoise (immobilier, confiance, géopolitique) frapperait directement le cœur du groupe.

**3. Vents contraires exogènes cumulés** : Effet devises (-3% sur le CA 2025), tarifs douaniers US (Vins & Spiritueux), surtaxe fiscale française (+4 pts d'impôt) — un empilement de facteurs qui comprime le bénéfice net.

### Analyse pré-mortem
Que se passerait-il si LVMH cotait 350€ dans 2 ans ? Scénario : rechute de la consommation chinoise, affaiblissement durable de Louis Vuitton/Dior, compression de la marge Mode & Maroquinerie sous 33%, et dérating du multiple de 23x à 17x sur un BPA stagnant. La valorisation chuterait de 25-30%.

### Point de vue à contre-courant
**Ce que le marché refuse de voir** : LVMH est valorisé comme une croissance défensive de qualité, mais son cœur (Mode & Maroquinerie) a **reculé de -5% en 2025** et la clientèle aspirationnelle s'érode. Le rebond du S2 (+1%) est fragile et pourrait n'être qu'un rebond technique post-déstockage. Si la Chine déçoit et que la désirabilité des Maisons phares s'émousse, la « prime de qualité » du titre pourrait se comprimer plus fortement que le consensus optimiste (17 achats / 26) ne l'anticipe. À l'inverse, les bears sous-estiment la capacité de LVMH à traverser les cycles : le vrai débat est **la durée**, pas la survie.`,
  },
  {
    id: 12,
    title: "Red Flags",
    category: "Risques comptables",
    icon: "🚩",
    content: `## Audit forensique — Signaux d'alerte comptables

### Goodwill et immobilisations incorporelles — RISQUE MODÉRÉ
LVMH porte un **goodwill et des marques considérables** au bilan, issus d'acquisitions majeures (Tiffany ~15,8 Mds$, Bulgari, Loro Piana). Les marques de luxe sont souvent classées en **immobilisations incorporelles à durée de vie indéfinie**, testées annuellement mais rarement dépréciées.

**À surveiller** : les **tests de dépréciation** sur Tiffany et les Maisons acquises à prix élevé. Un ralentissement durable du luxe pourrait, en théorie, nécessiter une dépréciation — un risque non-cash mais révélateur des hypothèses de croissance retenues.

### Comptabilisation des revenus — RISQUE FAIBLE
Le luxe = ventes transactionnelles (boutiques, e-commerce), reconnaissance standard IFRS 15. Peu de complexité contractuelle. Surveiller néanmoins les **ventes en travel retail (DFS)** et la reconnaissance des ventes concessionnaires.

### Information sectorielle — RISQUE FAIBLE À MODÉRÉ
LVMH publie par activité mais **ne détaille pas le CA par Maison** (Louis Vuitton, Dior ne sont pas isolés). Cette opacité volontaire complique l'analyse de la santé réelle du cœur du groupe — un point de vigilance pour l'analyste, pas une irrégularité.

### Contrats de location (IFRS 16) — RISQUE MODÉRÉ
Le réseau de **boutiques en propre** génère des engagements de location significatifs (emplacements prime). L'impact sur la dette (droits d'utilisation) est visible et correctement présenté. Surveiller l'évolution en cas de contraction du retail.

### Parties liées — RISQUE MODÉRÉ
Structure de contrôle en cascade (**Financière Agache → Christian Dior SE → LVMH**) avec la famille Arnault. Les transactions inter-holdings et le rachat de minoritaires (Loro Piana) méritent lecture attentive des annexes. Concentration du pouvoir familial à documenter.

### Rémunération en actions — RISQUE FAIBLE
Programmes d'actions de performance encadrés, dilution minime. L'alignement des dirigeants passe surtout par la détention capitalistique familiale.

### Engagements hors bilan et devises — RISQUE MODÉRÉ
Forte exposition aux **devises** (USD, yen, yuan) — couvertures de change et engagements associés à examiner. Les **tarifs douaniers** constituent un risque conditionnel (Vins & Spiritueux).

### Flux de trésorerie vs résultat — RISQUE FAIBLE
FCF opérationnel robuste (11,3 Mds€, +8%) malgré la baisse du résultat net — signe de **qualité des bénéfices**. Peu d'écart suspect entre résultat et cash. Point positif net.

---

### Verdict global
**Risque comptable : FAIBLE À MODÉRÉ.** LVMH est audité par des cabinets de premier plan et sa communication est jugée solide. Pas de signal d'alerte majeur. Les principaux points de vigilance sont **structurels et non frauduleux** : goodwill/marques élevés à tester en cas de ralentissement durable, opacité volontaire sur le CA par Maison, et concentration du contrôle familial via holdings en cascade. La forte génération de trésorerie et le bilan solide sont des gages de qualité.`,
  },
  {
    id: 13,
    title: "Questions au Management",
    category: "Préparation d'entretien",
    icon: "❓",
    content: `## 15 questions prioritaires pour Bernard Arnault et la direction

### Stratégie et avantage concurrentiel

**1.** La Mode & Maroquinerie, votre cœur de rentabilité (~35% de marge), a reculé de -5% en organique en 2025. Quels sont les **leviers concrets et mesurables** — au-delà des défilés et de la création — qui vous font croire à un retour durable à la croissance de Louis Vuitton et Dior ?

**2.** Le luxe a perdu ~80 M de clients aspirationnels en 3 ans. Comment **réconciliez-vous** la défense de l'exclusivité (hausses de prix) avec la nécessité de ne pas perdre définitivement cette clientèle d'entrée de gamme ?

**3.** Hermès affiche ~40% de marge opérationnelle contre ~22% pour LVMH au niveau groupe. Cet écart est-il structurel (modèle conglomérat vs mono-marque) ou existe-t-il un **plan pour le réduire** ?

### Allocation du capital

**4.** Après Tiffany (15,8 Mds$) et la montée à 94% dans Loro Piana, quelle est votre **discipline d'acquisition** aujourd'hui ? À quel multiple cessez-vous d'acheter ?

**5.** Le dividende est maintenu à 13€ malgré un bénéfice en baisse de -13%. Quel est votre **arbitrage** entre retour aux actionnaires, acquisitions et investissement dans les Maisons ?

**6.** Avec une dette nette <10% du CA et un FCF de 11,3 Mds€, disposez-vous d'une **capacité d'acquisition transformante** que vous envisageriez d'utiliser dans le cycle bas actuel ?

### Risques

**7.** Votre exposition à la Chine et à l'Asie est majeure. Quel est votre **scénario de risque** si la consommation chinoise ne rebondit pas durablement, et comment diversifiez-vous géographiquement ?

**8.** L'effet devises a coûté -3% de CA en 2025 et la surtaxe française +4 pts d'impôt. Quelle est votre **politique de couverture** et comment gérez-vous ces facteurs exogènes cumulés ?

**9.** Les tarifs douaniers US menacent particulièrement les Vins & Spiritueux (-9%). Quelle est votre **stratégie d'atténuation** (relocalisation, prix, mix) ?

### Vision long terme

**10.** Le rebond du S2 2025 (+1%) est-il un **point d'inflexion durable** ou un rebond technique post-déstockage ? Quels indicateurs avancés surveillez-vous ?

**11.** Comment le **digital et l'IA** transforment-ils votre relation client, votre gestion des stocks et votre désirabilité, sans dénaturer l'expérience du luxe ?

**12.** La joaillerie (Tiffany, Bulgari) est le segment le plus résilient du luxe. Quelle est votre **ambition** pour en faire un second pilier de marge aux côtés de la Mode & Maroquinerie ?

### Gouvernance et succession

**13.** La **succession** est un enjeu clé. Comment la structure de contrôle (Agache → Dior → LVMH) et la place de vos cinq enfants garantissent-elles la continuité de la vision au-delà de votre mandat ?

**14.** La concentration du contrôle familial limite le poids du flottant. Comment **protégez-vous les intérêts** des actionnaires minoritaires dans les décisions stratégiques et les transactions inter-holdings ?

**15.** Quel est le **risque que vous sous-estimez le plus** aujourd'hui pour LVMH, et que le marché ne voit pas encore ?`,
  },
  {
    id: 14,
    title: "Avocat du Diable",
    category: "Analyse critique / Short",
    icon: "😈",
    content: `## Thèse short — Démontage de l'argumentaire haussier

### 1. Le cœur du réacteur ralentit — et on ne le voit pas en détail

Les bulls vantent la puissance de Louis Vuitton et Dior. **Problème** : LVMH **ne publie pas le CA par Maison**. On sait seulement que la Mode & Maroquinerie a reculé de **-5% en organique en 2025**. Cette opacité volontaire masque peut-être un affaiblissement de la marque phare. Si Louis Vuitton — la principale machine à profit — s'essouffle structurellement, toute la thèse de « qualité défensive » vacille, et on ne le découvrira que trop tard.

### 2. La dépendance à un consommateur aspirationnel qui s'érode

Le luxe a perdu **~80 millions de clients en 3 ans**. LVMH, plus exposé que Hermès à l'entrée de gamme (petite maroquinerie, parfums, cosmétiques), est **structurellement vulnérable** à cette érosion. Les hausses de prix répétées, censées défendre la marge, **accélèrent** peut-être la fuite de cette clientèle. Le modèle « premiumisation infinie » a une limite que le marché refuse de voir.

### 3. La concentration géographique sur l'Asie est un talon d'Achille

Une part majeure de la demande dépend du **consommateur chinois et asiatique**. La Chine traverse une crise immobilière, une baisse de confiance et un virage politique (« prospérité commune ») défavorable à l'ostentation. Le rebond du S2 2025 (+1%) est **fragile** et pourrait n'être qu'un rebond de restockage. Une rechute chinoise frapperait le cœur du groupe sans amortisseur.

### 4. Le rebond du S2 est peut-être un mirage

Passer de -1% à +1% de croissance organique sur un an, c'est **quasi-stagnation**. Les bulls extrapolent un « point d'inflexion » à partir d'un chiffre marginal, sur des **bases de comparaison affaiblies**. Rien ne garantit une accélération réelle : le luxe pourrait rester atone plusieurs années, comme après 2015.

### 5. L'empilement des vents contraires exogènes

Effet devises (-3% de CA), **tarifs douaniers US** (Vins & Spiritueux -9%), **surtaxe fiscale française** (+4 pts d'impôt), tensions géopolitiques : ces facteurs ne sont pas tous transitoires. Le bénéfice net a chuté de **-13%** en 2025. Si ces vents persistent, la « génération de trésorerie en forteresse » se dégrade plus vite que prévu.

### 6. La valorisation intègre un rebond qui n'est pas acquis

À **~23x les bénéfices**, LVMH n'est pas donné pour une entreprise dont le cœur recule et dont le bénéfice baisse. Le consensus (objectif ~577€, upside ~20%) **présuppose un rebond franc** de la Mode & Maroquinerie et de la Chine. Si ce rebond déçoit de 20-30%, le dérating est mécanique : un P/E qui passe de 23x à 18x sur un BPA stagnant, c'est **-20% sur le titre**.

### 7. Le risque de gouvernance et de succession

LVMH **est** Bernard Arnault. Le contrôle familial en cascade (Agache → Dior → LVMH) concentre le pouvoir et **marginalise le flottant**. La succession, bien que préparée, est un test réel : aucun des héritiers n'a démontré la stature du fondateur. Une transition ratée ou un conflit familial serait un risque idiosyncratique majeur, difficile à couvrir.

### Le scénario catastrophe unique
**Rechute chinoise durable + affaiblissement structurel de Louis Vuitton + persistance des vents contraires exogènes, simultanément.** Dans ce cas : la Mode & Maroquinerie enchaîne les trimestres négatifs, la marge groupe glisse sous 20%, le bénéfice net stagne, et la « prime de qualité » du titre se comprime. Probabilité ? Non négligeable (25-35%) dans un scénario de luxe atone prolongé.

### Conclusion short
LVMH est une **entreprise exceptionnelle** — mais **pas nécessairement une action exceptionnelle à ce prix, à ce moment du cycle**. À ~23x les bénéfices, le titre intègre un rebond de la consommation du luxe et de la Chine qui reste à prouver, alors même que son cœur recule et que le bénéfice baisse. C'est moins une thèse short à conviction qu'un **rappel** que la qualité ne protège pas d'un prix d'entrée trop généreux dans un cycle incertain.`,
  },
];

export default { ...meta, modules };
