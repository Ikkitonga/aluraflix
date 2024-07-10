import "./NuevoVideo.css"
import Navbar from "../../Componentes/Navbar/Navbar"
import Banner from "../../Componentes/Banner/Banner"
import Footer from "../../Componentes/Footer/Footer"
import Formulario from "../../Componentes/Formulario/Formulario"
import { useState, useContext } from "react"
import { VideoContext } from "../../VideoContext"



const NuevoVideo = (props) => {

    const [videos, setVideos] = useState([])
    

    // funcion crear video

    const crearVideo = (video) => {
        console.log("nuevo video", video)
        setVideos([...videos, video])
    }

    const expansiones = [
        "Wrath of the Lich King",
        "Cataclysm",
        "Mists of Pandaria",
        "Shadowlands",
        "The War Within"
    ]

    return <>
        <Navbar />
        <Banner />
        <Formulario
            expansiones={expansiones.map((expansion) => expansion)}
            crearVideo={crearVideo}
        />
        <Footer />
    </>
}

export default NuevoVideo