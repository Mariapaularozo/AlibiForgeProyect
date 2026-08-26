// ===== src/pages/Perfil.jsx =====

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsuarios } from "../utils/usuarios";

function Perfil() {
    // Empezamos con "null" porque todavía no sabemos quién es el usuario
    const [usuario, setUsuario] = useState(null);
    const navegar = useNavigate();

    // useEffect ejecuta código automáticamente cuando el componente aparece
    // en pantalla (algo que antes hacíamos con "el script se lee de arriba
    // a abajo apenas carga la página"). El arreglo vacío [] al final significa
    // "ejecútate solo UNA vez, cuando la página carga".
    useEffect(function () {
        const aliasActual = localStorage.getItem("usuarioActual");

        if (!aliasActual) {
            navegar("/"); // no hay sesión, mandamos al login
            return;
        }

        const usuarios = obtenerUsuarios();
        const encontrado = usuarios.find(function (u) {
            return u.alias === aliasActual;
        });

        setUsuario(encontrado); // guardamos el usuario en el estado
    }, []);

    function cerrarSesion() {
        localStorage.removeItem("usuarioActual");
        navegar("/");
    }

    // Mientras no sepamos quién es el usuario, no mostramos nada todavía
    // (esto evita errores de "usuario.alias" cuando usuario es null)
    if (!usuario) {
        return null;
    }

    const estaBloqueado = usuario.bloqueadoHasta && Date.now() < usuario.bloqueadoHasta;

    return (
        <main>
            <h2>Mi perfil</h2>
            <section>
                <p><strong>Alias:</strong> {usuario.alias}</p>
                <p><strong>Especialidad:</strong> {usuario.especialidad}</p>
                <p><strong>Credibilidad:</strong> {usuario.credibilidad} puntos</p>

                {/* Esto es un "if" dentro del JSX: solo se muestra si estaBloqueado es true */}
                {estaBloqueado && (
                    <p className="bloqueado">
                        🚫 No puedes crear coartadas hasta el{" "}
                        {new Date(usuario.bloqueadoHasta).toLocaleDateString()}
                    </p>
                )}
            </section>

            <button onClick={cerrarSesion}>Cerrar sesión</button>
        </main>
    );
}

export default Perfil;
