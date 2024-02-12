import '../styles/habilidades.css';
import {useState} from 'react';
import ModalHabilidad from './ModalHabilidad';
// Front
import html from '../img/habilidades/html.svg';
import css from '../img/habilidades/css.svg';
import sass from '../img/habilidades/sass.svg';
import bootstrap from '../img/habilidades/bootstrap.svg';
import tailwind from '../img/habilidades/tailwind.svg';
import js from '../img/habilidades/js.svg';
import react from '../img/habilidades/react.svg';
// Back
import php from '../img/habilidades/php.svg';
import sql from '../img/habilidades/sql.svg';
import mysql from '../img/habilidades/mysql.svg';
import nodejs from '../img/habilidades/nodejs.svg';
import mongodb from '../img/habilidades/mongodb.svg';

const Habilidades = () => {
    const [modal, setModal] = useState(false);
    const [nombre, setNombre] = useState('');
    const [nivel, setNivel] = useState('');

    const valoresModal = (modal, nombre, nivel) => {
        setModal(modal);
        setNombre(nombre);
        setNivel(nivel);
    };

    return (
        <section className="seccion" id="habilidades">
            <h2 className='titulo-section'>Mis Habilidades</h2>

            <div className="contenedor-habilidades">
                <div>
                    <h3>Front-end</h3>

                    <div className="container-habilidades">
                        <div className="hab-card">
                            <div 
                                className='card-imagen' 
                                onClick={() => valoresModal(true, 'HTML', 'Experto')}
                            >
                                <img src={html} alt="logo html" className='img-padre' />
                            </div>
                        </div>

                        <div className="hab-card">
                            <div 
                                className='card-imagen' 
                                onClick={() => valoresModal(true, 'CSS', 'Experto')}
                            >
                                <img src={css} alt="logo css" className='img-padre' />
                            </div>
                            
                            <div className='card-desglose css'>
                                <img 
                                    src={sass} alt="logo sass" 
                                    className='img-hijo' 
                                    onClick={() => valoresModal(true, 'SASS', 'Intermedio')} 
                                />
                                <img 
                                    src={bootstrap} alt="logo botstrap" 
                                    className='img-hijo' 
                                    onClick={() => valoresModal(true, 'Bootstrap', 'Intermedio')} 
                                />
                                <img 
                                    src={tailwind} alt="logo tailwind" 
                                    className='img-hijo' 
                                    onClick={() => valoresModal(true, 'Tailwind', 'Intermedio')} 
                                />
                            </div>
                        </div>

                        <div className="hab-card">
                            <div 
                                className='card-imagen' 
                                onClick={() => valoresModal(true, 'JsvaScript', 'Intermedio')}
                            >
                                <img src={js} alt="logo javascript" className='img-padre' />
                            </div>
                            
                            <div className='card-desglose js'>
                                <img 
                                    src={react} alt="logo react" 
                                    className='img-hijo' 
                                    onClick={() => valoresModal(true, 'React.js', 'Básico')} 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Back-end</h3>

                    <div className="container-habilidades">
                        <div className="hab-card">
                            <div 
                                className='card-imagen' 
                                onClick={() => valoresModal(true, 'PHP', 'Básico')}
                            >
                                <img src={php} alt="logo css" className='img-padre' />
                            </div>
                            
                            <div className='card-desglose js'>
                                <img 
                                    src={sql} alt="logo sql db" 
                                    className='img-hijo' 
                                    onClick={() => valoresModal(true, 'SQL', 'Intermedio')} 
                                />
                                <img
                                    src={mysql} alt="logo mysql" 
                                    className='img-hijo' 
                                    onClick={() => valoresModal(true, 'MySQL', 'Intermedio')} 
                                />
                            </div>
                        </div>

                        <div className="hab-card">
                            <div 
                                className='card-imagen' 
                                onClick={() => valoresModal(true, 'Node.js', 'Básico')}
                            >
                                <img src={nodejs} alt="logo node js" className='img-padre' />
                            </div>
                            
                            <div className='card-desglose js'>
                                <img 
                                    src={mongodb} alt="logo mongodb" 
                                    className='img-hijo' 
                                    onClick={() => valoresModal(true, 'MongoDB', 'Básico')} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <ModalHabilidad modal={modal} setModal={setModal} nombre={nombre} nivel={nivel} />
            )}
        </section>
    );
};

export default Habilidades;