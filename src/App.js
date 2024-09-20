import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail";
import Mascotas from "./components/mascotas";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Colocado fuera de las rutas */}
      <Routes>
        <Route path="/" element={<Mascotas />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/mascotas/:mascotaId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;