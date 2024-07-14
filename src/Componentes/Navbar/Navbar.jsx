import "./Navbar.css";


const Navbar = () => {
    return <nav className="navbar">
        <img src="https://aluraflix-jade.vercel.app/static/media/Logo.5e7b3578.png" alt="Logo"></img>

        <div className="navbar__botones">
         <a href="/"><button className="boton">HOME</button></a> 
         <a href="/NuevoVideo"><button className="boton">NUEVO VIDEO</button></a>   
            {/* <button className="boton">FAVORITOS</button> */}
        </div>
    </nav>
}

export default Navbar