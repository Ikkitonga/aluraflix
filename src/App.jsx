import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from '../src/pages/Inicio/Inicio'
import NuevoVideo from './pages/NuevoVideo/NuevoVideo'



function App() {

    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />}></Route>
                    <Route path='/NuevoVideo' element={<NuevoVideo />}></Route>
                </Routes>
            </BrowserRouter>
        
    )
}

export default App




