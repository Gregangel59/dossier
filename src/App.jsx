import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dossier from "./pages/Dossier.jsx";
import Cours from "./pages/Cours.jsx";
import Portefeuille from "./pages/Portefeuille.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dossier/:slug" element={<Dossier />} />
      <Route path="/cours" element={<Cours />} />
      <Route path="/portefeuille" element={<Navigate to="/portefeuille/historique" replace />} />
      <Route path="/portefeuille/:slug" element={<Portefeuille />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
