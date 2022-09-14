import './Sobre-mi.css';
import wallpaper1 from '../../assets/global/wallpaper1.jpg';
import wallpaper1webp from '../../assets/global/wallpaper1.webp';
import wallpaper2 from '../../assets/global/wallpaper2.jpg';
import wallpaper2webp from '../../assets/global/wallpaper2.webp';
import wallpaper3 from '../../assets/global/wallpaper3.jpg';
import wallpaper3webp from '../../assets/global/wallpaper3.webp';
import cv from '../../assets/cv/CV-LucianoVillarreal.pdf';

const SobreMi = () => {
    return (
        <>
            <section id='sobre-mi'>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <picture>
                                <source srcSet={wallpaper1webp} type="type/webp" />
                                <source srcSet={wallpaper1} type="type/jpeg" />
                                <img src={wallpaper1} className="d-block w-100" alt="walppaper de programación 1" loading='lazy' />
                            </picture>
                        </div>

                        <div className="carousel-item">
                            <picture>
                                <source srcSet={wallpaper2webp} type="type/webp" />
                                <source srcSet={wallpaper2} type="type/jpeg" />
                                <img src={wallpaper2} className="d-block w-100" alt="walppaper de programación 2" loading='lazy' />
                            </picture>
                        </div>

                        <div className="carousel-item">
                            <picture>
                                <source srcSet={wallpaper3webp} type="type/webp" />
                                <source srcSet={wallpaper3} type="type/jpeg" />
                                <img src={wallpaper3} className="d-block w-100" alt="walppaper de programación 3" loading='lazy' />
                            </picture>
                        </div>
                    </div>

                    <div className="overlay">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col col-md-6 col-lg-4 text-center text-md-start">
                                    <h1 className='mb-2 mt-4 mt-md-0'>Hola, soy <span>Luciano Villarreal</span></h1>

                                    <p className='mb-2'>
                                        Soy un desarrollador en plenos estudios, con tres años de haber iniciado, realizando clases de inglés y la carrera Analista en Sistemas de Computación.
                                    </p>

                                    <p className='mb-2'>
                                        Cuento con varios cursos realizados en Udemy y Platzi. Les presento los proyectos que pueden ser de interes.
                                    </p>

                                    <p className='mb-2 d-none d-md-block'>
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