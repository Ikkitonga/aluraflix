import "./Card.css"
import { useContext } from "react"
import { VideoContext } from "../../VideoContext"



const Card = ({ imagen, descripcion, expansion, id, link }) => {

// funcion deleteVideo traida del videoContext
    const { deleteVideo } = useContext(VideoContext)


// funcion para manejar el borrado del video
    const handleDelete = () => {
        console.log("el video se borro") 
        deleteVideo(id)
    }

    return <div className="contenedor__card">
        <a href={link} target="_blank">
            <img src={imagen} alt={expansion} className="imagen__card" />
            <h3>{descripcion}</h3>
        </a>
        <div className="contenedor__button">
            <button className="card__btn" onClick={handleDelete}>Borrar</button>
            {/* <button className="card__btn">Editar</button> */}
        </div>
        {/* <div className="contenedor__favorito">

        </div> */}
    </div>
}

export default Card 