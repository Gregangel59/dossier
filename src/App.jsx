import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dossier from "./pages/Dossier.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dossier/:slug" element={<Dossier />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
