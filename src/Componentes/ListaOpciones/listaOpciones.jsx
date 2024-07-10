import "./listaOpciones.css"

const ListaOpciones = (props) => {


    const manejarCambio = (e) => {
        props.actualizarExpansion(e.target.value)
    }

    return <div className="listaOpciones">
        <label htmlFor="expansiones">Expansiones</label>
        <select name="expansiones" id="expansiones" value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Expancion</option>
            {props.expansiones.map((expansion, index) => <option value={expansion} key={index}>{expansion}</option>)}
        </select>
    </div>
}

export default ListaOpciones