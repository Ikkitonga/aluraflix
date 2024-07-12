import "./Banner.css"
import Titulo from "../Titulo/Titulo"


const Banner = () => {
    return <section className="banner">
        <div className="banner__imagen" style={{backgroundImage: `url(./public/Imagenes/banner.png)`}}>
        
        </div>

        <Titulo />
    </section> 

}

export default Banner