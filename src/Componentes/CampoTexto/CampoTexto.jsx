import "./CampoTexto.css";


// Componente del formulario para ingreso de video nuevo

const CampoTexto = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="formulario">

        <label htmlFor={props.titulo} className="formulario__label">{props.titulo}</label>
        <input type="text"
            id={props.titulo}
            className="formulario__input"
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />


    </div>
}

export default CampoTexto




