import '../styles/proyectos.css';

const Proyecto = ({proyecto}) => {
    const {nombre, tecnologias, descripcion, img, link, git} = proyecto;

    return (
        <div className="card-proyecto">
            <div className='card-info'>
                <a href={link} target="_blank">
                    <img src={img} alt={nombre} />
                </a>

                <h3 className='titulo'>{nombre}</h3>

                <div className='notes'>
                    {tecnologias.map(tec => (
                        <p 
                            key={tec} 
                            className={`
                                ${tec === 'HTML' ? 'html' : ''}
                                ${tec === 'CSS' ? 'css' : ''}
                                ${tec === 'Sass' ? 'sass' : ''}
                                ${tec === 'Tailwind' ? 'tailwind' : ''}
                                ${tec === 'Bootstrap' ? 'bootstrap' : ''}
                                ${tec === 'JavaScript' ? 'js' : ''}
                                ${tec === 'React' ? 'react' : ''}
                                ${tec === 'PHP' ? 'php' : ''}
                                ${tec === 'MySQL' ? 'mysql' : ''}
                                ${tec === 'Node' ? 'node' : ''}
                                ${tec === 'MongoDB' ? 'mongodb' : ''}
                                note
                            `}
                        >
                            {tec}
                        </p>
                    ))}
                </div>

                <div className='proyecto-texto'>
                    <p className='descripcion'>{descripcion}</p>
                </div>
            </div>

            <div className='enlaces'>
                <div>
                    <a href={link} target="_blank">
                        <i className="fa-solid fa-link"></i>
                    </a>

                    <a href={git} target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Proyecto;