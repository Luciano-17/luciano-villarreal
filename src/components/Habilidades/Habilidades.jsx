import './Habilidades.css';

const Habilidades = () => {
    return (
        <>
            <section id='habilidades'>
                <div className="container">
                    <h2 className='text-center mb-4'>Mis habilidades</h2>
                    
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <h3 className='text-center m-4'>Fronted</h3>

                            <div className="row">
                                <div className="container-skill col-6 col-md-4 text-center html">
                                    <i className="fa-brands fa-html5"></i>
                                    <p>HTML</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center css">
                                    <i className="fa-brands fa-css3-alt"></i>
                                    <p>CSS</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center sass">
                                    <i className="fa-brands fa-sass"></i>
                                    <p>Sass</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center tailwind">
                                    <i className="fa-solid fa-wind"></i>
                                    <p>Tailwind</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center bootstrap">
                                    <i className="fa-brands fa-bootstrap"></i>
                                    <p>Bootstrap</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center js">
                                    <i className="fa-brands fa-square-js"></i>
                                    <p>JavaScript</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center react">
                                    <i className="fa-brands fa-react"></i>
                                    <p>React.js</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-5 offset-md-2">
                            <h3 className='text-center m-4'>Backend</h3>

                            <div className="row">
                                <div className="container-skill col-6 col-md-4 text-center node">
                                    <i className="fa-brands fa-node"></i>
                                    <p>Node.js</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center mongo">
                                    <i className="fa-solid fa-server"></i>
                                    <p>Mongo DB</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center c">
                                    <i className="fa-solid fa-c"></i>
                                    <p>C#</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center net">
                                    <i className="fa-solid fa-robot"></i>
                                    <p>.NET</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center server">
                                    <i className="fa-solid fa-database"></i>
                                    <p>SQL Server</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center php">
                                    <i className="fa-brands fa-php"></i>
                                    <p>PHP</p>
                                </div>

                                <div className="container-skill col-6 col-md-4 text-center mysql">
                                    <i className="fa-solid fa-database"></i>
                                    <p>MySQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Habilidades