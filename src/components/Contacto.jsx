import '../styles/contacto.css';

// Mejorar vista de boton

const Contacto = () => {
    return (
        <div className="seccion" id="contacto">
            <h2 className="titulo-section">Contáctame</h2>

            <div className="container-contacto">
                <p>
                    Puedes comunicarte conmigo medianto un correo electrónico para cualquier oferta o proyecto
                </p>
                
                <div className='btn-mail'>
                    <a
                        className="btn"
                        href="mailto:lucianovillarreal.cba@gmail.com?Subject=Me%20contacto%20desde%20tu%20portafolio"
                    >
                        Enviar correo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacto;