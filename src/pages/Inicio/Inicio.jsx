
import Navbar from "../../Componentes/Navbar/Navbar"
import Banner from "../../Componentes/Banner/Banner"
import Seccionvideos from "../../Componentes/SeccionVideos/Seccionvideos"
import Footer from "../../Componentes/Footer/Footer"
import "./Inicio.css"
import { useContext } from "react"
import { VideoContext } from "../../VideoContext"



function Inicio() {

  const { addVideo } = useContext(VideoContext)

  

  return (
    <>
      <Navbar />
      <Banner />
      <Seccionvideos />
      <Footer />
    </>
  )
}

export default Inicio
