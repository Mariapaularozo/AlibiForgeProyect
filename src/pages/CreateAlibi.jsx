import { useState } from "react";


function CreateAlibi() {

    //Estados

    const [titulo, setTitulo] = useState("");
    const [situacion, setSituacion] = useState("");
    const [historia, setHistoria] = useState("");

    const [detalles, setDetalles] = useState([
        "",
        "",
        ""
    ]);

    const [testigos, setTestigos] = useState([]);

    const [estado, setEstado] = useState("");

    const [mensaje, setMensaje] = useState({
        texto: "",
        tipo: ""
    });


    //Mockdata para usuario

    const usuarios = [
        { id: 1, alias: "ShadowHuntress" },
        { id: 2, alias: "TomatoSoup" },
        { id: 3, alias: "Urfear" },
        { id: 4, alias: "Cowfarm" },
        { id: 5, alias: "404error" }
    ];


    //Detalles

    function agregarDetalle() {

        setDetalles([
            ...detalles,
            ""
        ]);
    }

    function cambiarDetalle(index, valor) {

        const nuevosDetalles = [...detalles];

        nuevosDetalles[index] = valor;

        setDetalles(nuevosDetalles);
    }


    //Crear Alibi

    function crearAlibi(nuevoEstado) {

        const detallesLlenos = detalles
            .map((detalle) => detalle.trim())
            .filter((detalle) => detalle !== "");


        // VALIDACIONES

        if (!titulo || !situacion || !historia) {

            mostrarMensaje(
                "Por favor, completar todos los campos requeridos.",
                "error"
            );

            return;
        }


        if (detallesLlenos.length < 3) {

            mostrarMensaje(
                "La coartada debe tener al menos 3 detalles.",
                "error"
            );

            return;
        }


        // ESTADO

        setEstado(nuevoEstado);


        console.log({
            titulo,
            situacion,
            historia,
            detalles: detallesLlenos,
            testigos,
            estado: nuevoEstado
        });


        if (nuevoEstado === "Draft") {

            mostrarMensaje(
                "Alibi guardado como borrador.",
                "exito"
            );

        }

        if (nuevoEstado === "Submitted") {

            mostrarMensaje(
                "Alibi enviado a revisión.",
                "exito"
            );


            setTimeout(() => {

                setEstado("UnderReview");

                mostrarMensaje(
                    "🔍 Tu Alibi ahora está en revisión.",
                    "revision"
                );

            }, 1500);
        }
    }


    //Testigo

    function agregarTestigo(idUsuario) {

        if (!testigos.includes(idUsuario)) {

            setTestigos([
                ...testigos,
                idUsuario
            ]);


            const usuario = usuarios.find(
                (usuario) => usuario.id === idUsuario
            );


            mostrarMensaje(
                `${usuario.alias} ahora apoya tu Alibi.`,
                "exito"
            );

        } else {

            const usuario = usuarios.find(
                (usuario) => usuario.id === idUsuario
            );

            mostrarMensaje(
                `${usuario.alias} ya es testigo de esta coartada.`,
                "error"
            );
        }
    }


    //Mensajes

    function mostrarMensaje(texto, tipo) {

        setMensaje({
            texto,
            tipo
        });

        setTimeout(() => {

            setMensaje({
                texto: "",
                tipo: ""
            });

        }, 3000);
    }

    //Render 
    return ( 
    <main className="min-h-screen bg-[#ac97ff] px-5 py-10 font-sans text-[#21175c]"> 
    <div className="mx-auto max-w-3xl rounded-2xl bg-[#f5f2ff] p-6 shadow-xl sm:p-9"> 
        <h1 className="mb-10 text-center text-3xl font-bold text-[#0d0074] sm:text-4xl"> Crea tu Alibi </h1> 
        
        {/* TÍTULO */} 
        <h2 className="mb-2 mt-6 text-xl font-semibold text-[#37288a]"> Título </h2>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título de tu Alibi" className="w-full rounded-lg border-2 border-[#8e7bdc] 
          bg-white p-3 text-[#21175c] outline-none transition focus:border-[#0d0074] focus:ring-2 focus:ring-[#c9c0ff]" /> 
        
        {/* SITUACIÓN */}
        <h2 className="mb-2 mt-6 text-xl font-semibold text-[#37288a]"> Situación objetivo </h2> 
        <input type="text" value={situacion} onChange={(e) => setSituacion(e.target.value)}
            placeholder="¿Para qué situación necesitas tu Alibi?" className="w-full rounded-lg border-2 border-[#8e7bdc]
             bg-white p-3 text-[#21175c] outline-none transition focus:border-[#0d0074] focus:ring-2 focus:ring-[#c9c0ff]" /> 
        
        {/* HISTORIA */} 
        <h2 className="mb-2 mt-6 text-xl font-semibold text-[#37288a]"> Historia </h2> 
        <textarea maxLength={500} value={historia} onChange={(e) => setHistoria(e.target.value)}
            placeholder="Historia de tu Alibi. Máximo 500 caracteres" className="min-h-32 w-full resize-y rounded-lg border-2 border-[#8e7bdc] 
            bg-white p-3 text-[#21175c] outline-none transition focus:border-[#0d0074] focus:ring-2 focus:ring-[#c9c0ff]" />
        <p className="mt-1 text-right text-sm text-gray-500"> {historia.length} / 500 caracteres </p> 
        
        {/* DETALLES */} 
        <h2 className="mb-2 mt-6 text-xl font-semibold text-[#37288a]"> Detalles clave </h2> 
        <div className="flex flex-col gap-3"> {detalles.map((detalle, index) => ( <input key={index} type="text" 
            value={detalle} onChange={(e) => cambiarDetalle(index, e.target.value) }
            placeholder={ index < 3 ? `Detalle ${index + 1}` : "Ingrese un detalle" } 
            className="w-full rounded-lg border-2 border-[#8e7bdc] bg-white p-3 text-[#21175c] outline-none transition focus:border-[#0d0074] 
            focus:ring-2 focus:ring-[#c9c0ff]" /> ))} </div>
        <button type="button" onClick={agregarDetalle} className="mt-4 rounded-lg bg-[#ded6ff] px-5 py-3 font-bold text-[#21175c] transition 
            hover:-translate-y-0.5 hover:bg-[#ccc1ff] active:translate-y-0" > + Agregar detalle </button> 
        
        {/* TESTIGOS */} 
        <h2 className="mb-3 mt-8 text-xl font-semibold text-[#37288a]"> Testigos </h2> 
        <div className="flex flex-wrap gap-2"> {usuarios.map((usuario) => ( <button type="button" key={usuario.id} onClick={() => agregarTestigo(usuario.id) } 
            className="rounded-lg border-2 border-[#8e7bdc] bg-white px-4 py-2 font-semibold text-[#37288a] 
            transition hover:-translate-y-0.5 hover:bg-[#ece8ff] active:translate-y-0" > Apoyar como {usuario.alias} </button> ))} </div> 
                 
        {/* ALIBI CHAIN */}
        <h3 className="mb-2 mt-8 text-lg font-semibold text-[#5c4bb7]"> Alibi Chain </h3> <p className="rounded-lg bg-[#e8e2ff] p-3"> 
            {testigos.length === 0 ? "Todavía no hay testigos que apoyen tu Alibi." : `Esta Alibi Chain tiene ${testigos.length} miembro(s).` } </p>
                    
        {/* TESTIGOS ACTUALES */} 
        {testigos.length > 0 && ( <div className="mt-3 rounded-lg bg-white p-4 shadow-sm">
        <p className="mb-2 font-semibold text-[#37288a]"> Testigos actuales: </p> 
        <ul className="list-disc pl-5 text-[#21175c]"> {testigos.map((id) => { const usuario = usuarios.find( 
            (usuario) => usuario.id === id ); return ( <li key={id}> {usuario.alias} </li> ); })} </ul> </div> )} 
                            
        {/* BOTONES */} 
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"> 
        <button type="button" onClick={() => crearAlibi("Draft")}
        className="rounded-lg bg-[#0d0074] px-[18px] py-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1600a0] active:translate-y-0" >
        Guardar borrador </button> <button type="button" onClick={() => crearAlibi("Submitted")} className="rounded-lg bg-[#0d0074] px-[18px] py-[11px] font-bold 
        text-white transition hover:-translate-y-0.5 hover:bg-[#1600a0] active:translate-y-0" > Enviar Alibi </button> </div> 
                                      
        {/* MENSAJES */} 
        {mensaje.texto && ( <div className={`mt-5 rounded-lg p-3 font-bold ${ estilosMensaje[mensaje.tipo] }`} >
             {mensaje.texto} </div> )} 
        {/* ESTADO */} 
        {estado && ( <div className="mt-5 rounded-lg bg-white p-3 shadow-sm"> Estado actual: {" "}
        <strong className="text-[#0d0074]"> {estado} </strong> </div> )} </div> </main> ); 
        }
    
    export default CreateAlibi;
