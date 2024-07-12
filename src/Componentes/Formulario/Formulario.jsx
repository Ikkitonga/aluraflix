import { useContext, useState } from "react"
import BotonesFormulario from "../BotonesFormulario/BotonesFormulario"
import CampoTexto from "../CampoTexto/CampoTexto"
import "./Formulario.css"
import ListaOpciones from "../ListaOpciones/listaOpciones"
import { VideoContext } from "../../VideoContext"
import { useNavigate } from "react-router-dom"


const Formulario = (props) => {

    const [descripcion, setDescripcion] = useState("")
    const [imagen, setImagen] = useState("")
    const [link, setLink] = useState("")
    const [expansion, setExpansion] = useState("")
    const [id, setId] = useState("")

    const { addVideo } = useContext(VideoContext)
    const navigate = useNavigate()

    // funcion para manejar el envio

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar = {
            descripcion,
            imagen,
            link,
            expansion,
            id
        }
        addVideo(datosAEnviar)
        alert("Video Creado")
        navigate("/")
        

        console.log(datosAEnviar)

        limpiarFormulario();
    }

    // limpia el formulario
    const limpiarFormulario = () => {
        setDescripcion("");
        setImagen("");
        setLink("");
        setExpansion("");
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
                titulo="descripcion"
                required
                valor={descripcion}
                actualizarValor={setDescripcion}
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


