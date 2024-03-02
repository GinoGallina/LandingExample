import './App.css'
import Navbar from './components/Views/Shared/Navbar'

import { InicioComponent } from './components/Views/Inicio/InicioComponent'
import { ReparacionesComponent } from './components/Views/Reparaciones/ReparacionesComponent'
import { AccesoriosComponent } from './components/Views/Accesorios/AccesoriosComponent'
import { NosotrosComponent } from './components/Views/Nosotros/NosotrosComponent'

function App() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="row mt-3 mx-0 justify-content-center">
                <InicioComponent></InicioComponent>
                <ReparacionesComponent></ReparacionesComponent>
                <NosotrosComponent></NosotrosComponent>
                <AccesoriosComponent></AccesoriosComponent>
                <div style={{ height: '100vh' }}></div>
            </main>
        </>
    )
}

export default App