import "./NuevoVideo.css"
import Navbar from "../../Componentes/Navbar/Navbar"
import Banner from "../../Componentes/Banner/Banner"
import Footer from "../../Componentes/Footer/Footer"
import Formulario from "../../Componentes/Formulario/Formulario"
import { useContext } from "react"
import { VideoContext } from "../../VideoContext"




const NuevoVideo = () => {

    const { addVideo } = useContext(VideoContext)
   

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
        <Formulario expansiones={expansiones} addVideo={addVideo} />
        <Footer />
    </>
}

export default NuevoVideo