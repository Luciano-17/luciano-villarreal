import Proyecto from './Proyecto';
import data from '../data/proyectos.json';
import '../styles/proyectos.css';

const Proyectos = () => {
    const basicos = [];
    const intermedios = [];
    const expertos = [];

    data.map(proyecto => {
        if(proyecto.categoria === 'Basico') {
            basicos.push(proyecto);
        } else if (proyecto.categoria === 'Intermedio') {
            intermedios.push(proyecto);
        } else {
            expertos.push(proyecto);
        }
    });

    return (
        <section className="seccion" id="proyectos">
            <h2 className="titulo-section">Mis Proyectos</h2>
            
            <div className="listado basico">
                <h3>Básicos</h3>

                <div className='container-listado'>
                    {basicos.map(item => (
                        <Proyecto key={item.id} proyecto={item}/>
                    ))}
                </div>
            </div>

            <div className="listado intermedio">
                <h3>Intermedios</h3>

                <div className='container-listado'>
                    {intermedios.map(item => (
                        <Proyecto key={item.id} proyecto={item}/>
                    ))}
                </div>
            </div>

            <div className="listado experto">
                <h3>Expertos</h3>

                <div className='container-listado'>
                    {expertos.map(item => (
                        <Proyecto key={item.id} proyecto={item}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;