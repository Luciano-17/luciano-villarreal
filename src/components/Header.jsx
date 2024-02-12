import Navegacion from "./Navegacion";
import '../styles/header.css';

const Header = () => {
    return (
        <header id="inicio">
            <Navegacion />

            <div className="contenedor-presentacion">
                <div className="presentacion">
                    <div className="presentacion-texto">
                        <h1>
                            ¡Hola! soy, {''}
                            <span>Luciano Villarreal</span>
                        </h1>

                        <span className="dev">Desarrollador</span>
                    </div>

                    <div>
                        <a
                            className="btn"
                            href='#sobreMi'
                        >
                            Conóceme
                        </a>
                    </div>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;