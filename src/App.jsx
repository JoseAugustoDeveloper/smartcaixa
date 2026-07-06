import { Routes, Route, Navigate } from "react-router-dom";

import Caixa from "./pages/Caixa";
import Configuracoes from "./pages/Configuracoes";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/caixa" />}
      />

      <Route
        path="/caixa"
        element={<Caixa />}
      />

      <Route
        path="/configuracoes"
        element={<Configuracoes />}
      />

    </Routes>
  );
}

export default App;