import "./Banner.css"
import Titulo from "../Titulo/Titulo"


const Banner = () => {
    return <section className="banner">
        <div className="banner__imagen" style={{backgroundImage: `url(https://steamuserimages-a.akamaihd.net/ugc/871874599751199095/8FC99010EE0B683476A25F73EEA7A36281AD37F2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)`}}>
        
        </div>

        <Titulo />
    </section> 

}

export default Banner