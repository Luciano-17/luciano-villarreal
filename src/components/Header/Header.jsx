import './Header.css';

const Header = () => {
    return (
        <>
            <nav id="header" className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">Luciano Villarreal</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#sobre-mi">Sobre mi</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#habilidades">Habilidades</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#proyectos">Proyectos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header