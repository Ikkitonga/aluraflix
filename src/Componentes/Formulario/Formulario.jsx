import { useContext, useState } from "react"
import BotonesFormulario from "../BotonesFormulario/BotonesFormulario"
import CampoTexto from "../CampoTexto/CampoTexto"
import "./Formulario.css"
import ListaOpciones from "../ListaOpciones/listaOpciones"
import { VideoContext } from "../../VideoContext"


const Formulario = (props) => {

    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [link, setLink] = useState("")
    const [expansion, setExpansion] = useState("")


    const { crearVideo } = props

    // funcion para manejar el envio

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar = {
            titulo,
            imagen,
            link,
            expansion
        }
        crearVideo(datosAEnviar)
        console.log(datosAEnviar)
        limpiarFormulario();
    }

// limpia el formulario
    const limpiarFormulario = () => {
        setTitulo("");
        setImagen("");
        setLink("");
    };

    return <section className="seccion__formulario">
        <div className="formulario__titulo">
            <h2>NUEVO VIDEO</h2>
            <p>Complete el Formulario para crear una nueva tarjeta de video</p>
        </div>
        <form action="" className="formulario__form" onSubmit={manejarEnvio}>

            <CampoTexto
                titulo="imagen"
                required
                valor={imagen}
                actualizarValor={setImagen}
            />
            <CampoTexto
                titulo="link"
                required
                valor={link}
                actualizarValor={setLink}
            />
            <CampoTexto
                titulo="titulo"
                required
                valor={titulo}
                actualizarValor={setTitulo}
            />
            <ListaOpciones
                valor={expansion}
                actualizarExpansion={setExpansion}
                expansiones={props.expansiones}
            />
            <div className="formulario__botones">
                <BotonesFormulario texto="Guardar" type="submit" />

            </div>
        </form>
    </section>
}


export default Formulario


