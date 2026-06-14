import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT — base d'URL :
// • Vercel / Netlify / domaine racine  ->  base: "/"   (laisse tel quel)
// • GitHub Pages sur tonnom.github.io/NOM-DU-DEPOT  ->  base: "/NOM-DU-DEPOT/"
//   ex : base: "/dossiers/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
