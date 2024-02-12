import '../styles/footer.css';

const Footer = () => {
    const fecha = new Date();
    const year = fecha.getFullYear();

    return (
        <footer className='seccion' id="footer">
            <div className="contenido-footer">
                <p className="copyright">
                    Todos los derechos reservados &copy; {year}
                </p>

                <div className='redes'>
                    <a 
                        className="content-tooltip social wp"
                        href="https://wa.me/543515282167?text=Hola,%20Luciano.%0AHe%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20un%20proyecto%20o%20idea."
                        target="_blank"
                    >
                        <i className="fa-brands fa-whatsapp icon-tooltip"></i>
                        <span className='tooltip-text social'>WhatsApp</span>
                    </a>
                    
                    <a 
                        className="content-tooltip social ig"
                        href="https://www.instagram.com/_lucianovi/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-instagram icon-tooltip"></i>
                        <span className='tooltip-text social'>Instagram</span>
                    </a>

                    <a 
                        className="content-tooltip social git"
                        href="https://github.com/Luciano-17"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github icon-tooltip"></i>
                        <span className='tooltip-text social'>GitHub</span>
                    </a>

                    <a 
                        className="content-tooltip social li"
                        href="https://www.linkedin.com/in/luciano-martin-villarreal-b69a93165/"
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin icon-tooltip"></i>
                        <span className='tooltip-text social'>LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;