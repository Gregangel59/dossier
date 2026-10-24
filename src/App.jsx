import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigationType } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dossier from "./pages/Dossier.jsx";
import Cours, { HORS_SERIE_VALORISATION } from "./pages/Cours.jsx";
import Portefeuille from "./pages/Portefeuille.jsx";

// À chaque navigation par lien : haut de la nouvelle page, ou section visée (/#formations…).
// Le bouton « retour » du navigateur garde, lui, la position de lecture.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const type = useNavigationType();
  useEffect(() => {
    if (type === "POP") return;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, type]);
  return null;
}

export default function App() {
  return (
    <>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dossier/:slug" element={<Dossier />} />
      <Route path="/cours" element={<Cours />} />
      <Route path="/cours/valorisation" element={<Cours key="valorisation" data={HORS_SERIE_VALORISATION} />} />
      <Route path="/portefeuille" element={<Navigate to="/portefeuille/historique" replace />} />
      <Route path="/portefeuille/:slug" element={<Portefeuille />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}
