import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dossier from "./pages/Dossier.jsx";
import Cours from "./pages/Cours.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dossier/:slug" element={<Dossier />} />
      <Route path="/cours" element={<Cours />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
