import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            
            <div className='contenedor'>
                <SobreMi />
                <Habilidades />
                <Proyectos />
                <Contacto />
            </div>

            <Footer />
        </>
    );
};

export default App;