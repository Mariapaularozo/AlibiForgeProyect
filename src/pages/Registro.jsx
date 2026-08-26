// ===== src/pages/Registro.jsx =====

// 1. Importamos herramientas de React y las que ya escribimos nosotros
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { obtenerUsuarios, guardarUsuarios } from "../utils/usuarios";

// 2. Un componente de React es simplemente una función que devuelve HTML
//    (en realidad se llama JSX, pero se ve casi igual a HTML normal)
function Registro() {

    // 3. useState reemplaza a "leer el value del input con document.getElementById"
    //    Cada línea crea: una variable (el valor actual) y una función para cambiarlo.
    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");
    const [especialidad, setEspecialidad] = useState("Excusa Creativa");
    const [mensaje, setMensaje] = useState("");

    // 4. useNavigate reemplaza a "window.location.href"
    const navegar = useNavigate();

    // 5. La función que se ejecuta al enviar el formulario
    //    (evento.preventDefault() sigue siendo igual de necesario que antes)
    function manejarSubmit(evento) {
        evento.preventDefault();

        const usuarios = obtenerUsuarios();

        const yaExiste = usuarios.some(function (usuario) {
            return usuario.alias === alias;
        });

        if (yaExiste) {
            setMensaje("Ese alias ya está en uso, elige otro.");
            return;
        }

        const nuevoUsuario = {
            alias: alias,
            password: password,
            especialidad: especialidad,
            credibilidad: 0
        };

        usuarios.push(nuevoUsuario);
        guardarUsuarios(usuarios);

        setMensaje("¡Cuenta creada! Ya puedes iniciar sesión.");

        // Después de 1 segundo, lo mandamos al login
        setTimeout(function () {
            navegar("/");
        }, 1000);
    }

    // 6. Esto es lo que se dibuja en pantalla.
    //    Fíjate: en vez de "value" fijo, el input SIEMPRE refleja lo que
    //    hay guardado en el estado (alias, password, etc.) — esto se
    //    llama "input controlado", es el patrón más común en React.
    return (
        <main>
            <h2>Crear cuenta</h2>
            <form onSubmit={manejarSubmit}>
                <p>
                    <label>Alias:</label><br />
                    <input
                        type="text"
                        value={alias}
                        onChange={(evento) => setAlias(evento.target.value)}
                        required
                    />
                </p>
                <p>
                    <label>Contraseña:</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(evento) => setPassword(evento.target.value)}
                        required
                    />
                </p>
                <p>
                    <label>Especialidad:</label><br />
                    <select
                        value={especialidad}
                        onChange={(evento) => setEspecialidad(evento.target.value)}
                    >
                        <option value="Excusa Creativa">Excusa Creativa</option>
                        <option value="Detallista">Detallista</option>
                        <option value="Improvisador">Improvisador</option>
                        <option value="Conspirador">Conspirador</option>
                    </select>
                </p>
                <button type="submit">Registrarme</button>
            </form>

            <p>{mensaje}</p>

            <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link></p>
        </main>
    );
}

export default Registro;
