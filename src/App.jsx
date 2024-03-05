import './App.css'
import Navbar from './components/Views/Shared/Navbar'

import { InicioComponent } from './components/Views/Inicio/InicioComponent'
import { ReparacionesComponent } from './components/Views/Reparaciones/ReparacionesComponent'
import { AccesoriosComponent } from './components/Views/Accesorios/AccesoriosComponent'
import { NosotrosComponent } from './components/Views/Nosotros/NosotrosComponent'
import { ContactoComponent } from './components/Views/Contacto/ContactoComponent'
import { FooterComponent } from './components/Views/Footer/FooterComponent'
// import { Test } from './components/test'

function App() {
    return (
        <>
            {/* <Test></Test> */}
            <Navbar></Navbar>
            <main className="row mt-3 mx-0 justify-content-center">
                <InicioComponent></InicioComponent>
                <ReparacionesComponent></ReparacionesComponent>
                <NosotrosComponent></NosotrosComponent>
                <AccesoriosComponent></AccesoriosComponent>
                <ContactoComponent></ContactoComponent>
                <FooterComponent></FooterComponent>
            </main>
        </>
    )
}

export default App
