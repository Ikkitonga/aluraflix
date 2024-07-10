import "./Navbar.css";


const Navbar = () => {
    return <nav className="navbar">
        <img src="../public/Logo/logo.png" alt="Logo"></img>

        <div className="navbar__botones">
         <a href="/"><button className="boton">HOME</button></a> 
         <a href="/NuevoVideo"><button className="boton">NUEVO VIDEO</button></a>   
            {/* <button className="boton">FAVORITOS</button> */}
        </div>
    </nav>
}

export default Navbar