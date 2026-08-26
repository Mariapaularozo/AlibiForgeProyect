// ===== src/App.jsx =====
// Este archivo reemplaza la idea de "varios archivos .html separados".
// En React (con react-router-dom), todo vive en UNA sola página,
// y las "rutas" deciden qué componente mostrar según la URL.

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";

function App() {
    return (
        <BrowserRouter>
            <header>
                <h1>AlibiForge</h1>
                <nav>
                    <Link to="/">Login</Link>
                    <Link to="/registro">Registro</Link>
                    <Link to="/perfil">Mi perfil</Link>
                </nav>
            </header>

            {/* Routes decide QUÉ componente mostrar según la URL actual */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/perfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
