//Usa el mismo Localstorage de la parte B de sofi
 
export function obtenerCoartadas() {
    const datos = localStorage.getItem("coartadas");
    if (datos === null) {
        return [];
    }
    return JSON.parse(datos);
}
 
export function guardarCoartadas(coartadas) {
    localStorage.setItem("coartadas", JSON.stringify(coartadas));
}

//Calculamos el indice de credibilidad de una coartada
 export function calcularComplejidad(coartada) {
    const cantidadDetalles = coartada.detalles.length;
 
    if (cantidadDetalles >= 10) {
        return 20;
    } else if (cantidadDetalles >= 5) {
        return 10;
    } else if (cantidadDetalles >= 3) {
        return 5;
    } else {
        return 0;
    }
}
 
export function calcularPromedioVotos(coartada) {
    if (coartada.votos.length === 0) {
        return 0;
    }
 
    let sumaPromedios = 0;
 
    coartada.votos.forEach(function (voto) {
        const promedioDeEsteVoto = (voto.credibilidad + voto.creatividad + voto.consistencia) / 3;
        sumaPromedios = sumaPromedios + promedioDeEsteVoto;
    });
 
    return sumaPromedios / coartada.votos.length;
}
 
export function calcularIndiceCredibilidad(coartada) {
    const promedio = calcularPromedioVotos(coartada);
    const puntosPorTestigos = coartada.testigos.length * 2;
    const complejidad = calcularComplejidad(coartada);
 
    const indice = (promedio * 10) + puntosPorTestigos + complejidad;
 
    return Math.round(indice * 10) / 10;
}