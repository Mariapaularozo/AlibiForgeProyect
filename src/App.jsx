import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Coartadas from "./pages/Coartadas";
 
function App() {
    return (
        <BrowserRouter>
            <header>
                <h1>AlibiForge</h1>
                <nav>
                    <Link to="/">Login</Link>
                    <Link to="/registro">Registro</Link>
                    <Link to="/perfil">Mi perfil</Link>
                    <Link to="/coartadas">Coartadas</Link>
                </nav>
            </header>
 
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/coartadas" element={<Coartadas />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;