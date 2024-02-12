import '../styles/sobreMi.css';

const SobreMi = () => {
    return (
        <main className="seccion" id="sobreMi">
            <div className="cards-sobreMi">
                <div className="card">
                    <div className="icono-card">
                        <i className="fa-solid fa-user-tie"></i>
                    </div>

                    <p>
                        Soy un apasionado por la programación web, con el sueño de convertirme en un completo experto en esta materia. Me gusta tener planificado mis objetivos semanales y mensuales, en pos de lograr mis metas.
                    </p>
                </div>
                <div className="card">
                    <div className="icono-card">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>

                    <p>
                        Actualmente estoy cursando la carrera Analista en Sistemas de Computación, he realizado cursos en la plataforma Udemy, como tambien, voy por mi segundo año de subscripción en Platzi.
                    </p>
                </div>
                <div className="card">
                    <div className="icono-card">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>

                    <p>
                        Hoy en día me desempeño como un Agente de Soporte eCommerce, ofreciendo asistencia a más de 50 tiendas online, en la empresa Wuala de Córdoba Capital. Tambien planifico un empredimiento individual en desarrollo web.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SobreMi;