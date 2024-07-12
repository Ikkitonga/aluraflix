import './App.css'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Inicio from '../src/pages/Inicio/Inicio'
import NuevoVideo from './pages/NuevoVideo/NuevoVideo'
// import AbrirVideo from './pages/AbrirVideo/AbrirVideo'




function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/NuevoVideo' element={<NuevoVideo />}></Route>
                {/* <Route path='/AbrirVideo/{id}' element={<AbrirVideo />}></Route> */}
            </Routes>
        </BrowserRouter>

    )
}

export default App




