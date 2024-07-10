import Videos from "../Videos/videos"
import "./Seccionvideos.css"

// lista de expansiones

const expansiones = [
    "Wrath of the Lich King",
    "Cataclysm",
    "Mists of Pandaria",
    "Shadowlands",
    "The War Within"
]


const Seccionvideos = () => {
    return <section className="seccion__videos">
        <Videos />
    </section>

}

export default Seccionvideos





