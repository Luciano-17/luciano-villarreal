import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

import useScreenSize from './hooks/useScreenSize';

const App = () => {
    const resize = useScreenSize();

    return (
        <>
            <Header width={resize.width} height={resize.height} />
            
            <div className='contenedor'>
                <SobreMi width={resize.width} height={resize.height} />
                <Habilidades width={resize.width} height={resize.height} />
                <Proyectos width={resize.width} height={resize.height} />
                <Contacto width={resize.width} height={resize.height} />
            </div>

            <Footer width={resize.width} height={resize.height} />
        </>
    );
};

export default App;