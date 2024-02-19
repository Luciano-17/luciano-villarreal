import { useState } from 'react';
import '../styles/navegacion.css';
import cv from '../assets/cv.pdf';

const Navegacion = ({width, height}) => {
    const [sidebar, setSidebar] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const modoOscuro = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
        const body = document.querySelector('#body');
        body.classList.toggle('dark-mode');
    };
    const abrirSidebar = () => {
        setSidebar(prevSidebar => !prevSidebar);
    };

    return (
        <>
            <div className={`${width <= 998 ? 'navegacion-mobile' : 'navegacion-container'}`}>   
                {width <= 998 ? (
                    <>
                        <button 
                            type="button"
                            className={`menu-sidebar ${sidebar ? 'clicked' : ''}`}
                            onClick={() => abrirSidebar()}
                        >
                            <span></span>
                            <span></span>
                        </button>

                        <div className={`sidebar ${sidebar ? 'active' : ''}`}>
                            <div className='container-inicio'>

                            </div>

                            <div className='container-nav'>

                            </div>

                            <div className='container-buttons'>

                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <a href="#inicio" className="logo">
                            Villarreal
                        </a>

                        <nav className='navegacion'>
                            <a href="#sobreMi" className='nav'>Sobre Mi</a>
                            <a href="#habilidades" className='nav'>Habilidades</a>
                            <a href="#proyectos" className='nav'>Proyectos</a>
                            <a href="#contacto" className='nav'>Contactame</a>
                        </nav>

                        <div className='navegacion-buttons'>
                            <a href={cv} download="CV - Luciano Villarreal" className='content-tooltip cv'>
                                <i className="fa-solid fa-file-arrow-down icon-tooltip"></i>
                                <span className='tooltip-text cv'>Mi currículum vitae</span>
                            </a>

                            <button 
                                type="button" 
                                className='content-tooltip dark-mode-btn'
                                onClick={() => modoOscuro()}
                            >
                                <i className='fa-solid fa-cloud-moon icon-tooltip luna' style={{display: darkMode ? 'none' : 'block'}}></i>
                                <i className='fa-solid fa-sun icon-tooltip sol' style={{display: darkMode ? 'block' : 'none'}}></i>
                                <span className='tooltip-text dark-mode-tooltip'>Modo oscuro</span>
                            </button>
                        </div>
                    </>
                )}
                
            </div>
        </>
    );
};

export default Navegacion;