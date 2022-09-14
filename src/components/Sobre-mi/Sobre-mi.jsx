import './Sobre-mi.css';
import wallpaper1 from '../../assets/global/wallpaper1.jpg';
import wallpaper2 from '../../assets/global/wallpaper2.jpg';
import wallpaper3 from '../../assets/global/wallpaper3.jpg';
import cv from '../../assets/cv/CV-LucianoVillarreal.pdf';

const SobreMi = () => {
    return (
        <>
            <section id='sobre-mi'>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={wallpaper1} className="d-block w-100" alt="walppaper de programación 1" />
                        </div>

                        <div className="carousel-item">
                            <img src={wallpaper2} className="d-block w-100" alt="walppaper de programación 2" />
                        </div>

                        <div className="carousel-item">
                            <img src={wallpaper3} className="d-block w-100" alt="walppaper de programación 4" />
                        </div>
                    </div>

                    <div className="overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col col-md-6 col-lg-4 text-center text-md-start">
                                    <h1 className='mb-4'>Hola, soy <span>Luciano Villarreal</span></h1>

                                    <p>
                                        Soy un desarrollador en plenos estudios, con tres años de haber iniciado, realizando clases de inglés y la carrera Analista en Sistemas de Computación.
                                    </p>

                                    <p>
                                        Cuento con varios cursos realizados en Udemy y Platzi. Les presento varios proyectos que les pueden interesar.
                                    </p>

                                    <p>
                                        Sigo ampliando mis conociminetos para desenvolverme cada vez mejor.
                                    </p>

                                    <a href={cv} className='btn btn-main' download="CV - Luciano Villarreal">
                                        Descargar CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SobreMi