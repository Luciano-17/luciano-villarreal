import './Contacto.css';

const Contacto = () => {
    return (
        <>
            <section id='contacto'>
                <div className="row container-contacto">
                    <div className="col-12 text-center mb-4">
                        <h2 className='text-center m-4'>Mis redes para cualquier contacto</h2>
                        <p className='text-center'>Muchas gracias por visitar mi portafolio, puedes mandarme un correo.</p>
                        <a href="mailto:lucianovillarreal.cba@gmail.com?Subject=Vengo%20de%20tu%20portafolio" className='btn btn-main'>
                            Enviar correo
                        </a>
                    </div>

                    <div className="col-12 text-center mt-4">
                        <ul className='wrapper'>
                            <a href='https://www.facebook.com/luchoo.villarreal' target="_blank" rel="noreferrer">
                                <li className='icon facebook'>
                                    <span className='tooltip'>Facebook</span>
                                    <span><i className='fab fa-facebook-f'></i></span>
                                </li>
                            </a>

                            <a href='https://wa.me/5493515282167?text=Hola,%20me%20gustaría%20hablar%20de%20un%20proyecto%20contigo' target="_blank" rel="noreferrer">
                                <li className='icon whatsapp'>
                                    <span className='tooltip'>WhatsApp</span>
                                    <span><i className='fab fa-whatsapp'></i></span>
                                </li>
                            </a>

                            <a href='https://www.instagram.com/_lucianovi/' target="_blank" rel="noreferrer">
                                <li className='icon instagram'>
                                    <span className='tooltip'>Instagram</span>
                                    <span><i className='fab fa-instagram'></i></span>
                                </li>
                            </a>

                            <a href='https://github.com/Luciano-17' target="_blank" rel="noreferrer">
                                <li className='icon github'>
                                    <span className='tooltip'>GitHub</span>
                                    <span><i className='fab fa-github'></i></span>
                                </li>
                            </a>

                            <a href='https://www.linkedin.com/in/luciano-martin-villarreal-b69a93165/' target="_blank" rel="noreferrer">
                                <li className='icon linkedin'>
                                    <span className='tooltip'>LinkedIn</span>
                                    <span><i className='fab fa-linkedin'></i></span>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacto