# Portail de dossiers d'analyse

Site public regroupant les dossiers d'analyse institutionnelle (14 modules par société)
et les rapports de score de risque. Construit avec Vite + React + React Router.

## Lancer en local

```bash
npm install
npm run dev      # ouvre http://localhost:5173
npm run build    # compile dans dist/
npm run preview  # prévisualise la version compilée
```

## Ajouter un nouveau dossier (3 étapes)

Le contenu est séparé du moteur de rendu : tu n'édites que des **données**.

**1. Crée le fichier de données.** Copie `src/data/american-express.js` vers
`src/data/<slug>.js`. Modifie le bloc `meta` (slug, ticker, nom, score de risque…)
et remplace le tableau `modules` par tes 14 modules. Chaque module a la forme :

```js
{ id: 1, title: "...", category: "...", icon: "🏢", content: `...markdown...` }
```

Les catégories reconnues (avec code couleur) sont définies dans
`src/components/MarkdownRenderer.jsx` (`CATEGORY_COLORS`). Tu peux en ajouter.

**2. Enregistre-le dans le registre.** Ouvre `src/data/index.js`, importe ton
fichier et ajoute-le au tableau `COMPANIES`. L'ordre du tableau = l'ordre
d'affichage sur l'accueil.

```js
import maSociete from "./ma-societe.js";
export const COMPANIES = [americanExpress, maSociete];
```

**3. (Optionnel) Ajoute le rapport de risque.** Dépose le fichier HTML autonome
dans `public/rapports/<slug>.html` et renseigne `riskReport: "<slug>.html"` dans
le `meta`. Un bouton « Rapport de risque » apparaîtra dans l'en-tête du dossier.

C'est tout. Pas de route à écrire : `/dossier/<slug>` est résolu automatiquement.

## Markdown supporté dans `content`

Titres `##` et `###`, gras `**texte**`, italique `*texte*`, code `` `inline` ``,
listes `- `, listes numérotées `1. `, séparateurs `---`, et tableaux Markdown
(`| col | col |` avec ligne `|---|---|`).

## Déploiement

### Vercel ou Netlify (recommandé, le plus simple)

Connecte le dépôt GitHub. Réglages détectés automatiquement :
build `npm run build`, dossier de sortie `dist`. Chaque push redéploie le site.
Laisse `base: "/"` dans `vite.config.js`.

### GitHub Pages

1. Dans `vite.config.js`, mets `base: "/NOM-DU-DEPOT/"` (le nom exact du repo).
2. Pousse le code sur la branche `main`.
3. Dans les réglages GitHub du dépôt : **Settings → Pages → Source : GitHub Actions**.

Le workflow `.github/workflows/deploy.yml` compile et publie automatiquement.
Le site sera servi sur `https://<utilisateur>.github.io/NOM-DU-DEPOT/`.

> Note : `import.meta.env.BASE_URL` et `basename` sont déjà câblés pour gérer
> le sous-chemin — tu n'as qu'à changer le `base`.

## Structure

```
src/
  data/
    index.js              ← registre central (le seul à éditer pour lister)
    american-express.js   ← données d'un dossier (modèle à copier)
  components/
    MarkdownRenderer.jsx   ← moteur de rendu mutualisé
  pages/
    Home.jsx               ← portail (grille des sociétés)
    Dossier.jsx            ← vue multi-modules (sidebar + navigation)
  App.jsx / main.jsx       ← routeur
public/
  rapports/                ← rapports de risque HTML autonomes
```
