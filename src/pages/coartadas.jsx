import { useState, useEffect } from "react";
import { obtenerCoartadas, guardarCoartadas } from "../utils/coartadas";
import TarjetaCoartada from "../components/TarjetaCoartada";
 
function Coartadas() {
    const [coartadas, setCoartadas] = useState([]);
 
    // Buscamos el usuario para cumplir la regla de solo 1 vez por coartada
    const [aliasActual, setAliasActual] = useState(null);
 
    useEffect(function () {
        setCoartadas(obtenerCoartadas());
        setAliasActual(localStorage.getItem("usuarioActual"));
    }, []);
 

    function manejarVoto(idCoartada, voto) {
        const listaActual = obtenerCoartadas();
 
        const coartada = listaActual.find(function (c) {
            return c.id === idCoartada;
        });
 
        if (!coartada) {
            return;
        }
 
        const yaVoto = coartada.votos.some(function (v) {
            return v.usuario === aliasActual;
        });
 
        if (yaVoto) {
            alert("Ya votaste esta coartada.");
            return;
        }
 
        coartada.votos.push({
            usuario: aliasActual,
            credibilidad: voto.credibilidad,
            creatividad: voto.creatividad,
            consistencia: voto.consistencia
        });
 
        guardarCoartadas(listaActual);
 
        // actualizar el estado de la lista
        setCoartadas(listaActual);
    }
 
    return (
        <main>
            <h2>Coartadas de la comunidad</h2>
 
            {coartadas.map(function (coartada) {
                return (
                    <TarjetaCoartada
                        key={coartada.id}
                        coartada={coartada}
                        onVotar={manejarVoto}
                    />
                );
            })}
        </main>
    );
}
 
export default Coartadas;