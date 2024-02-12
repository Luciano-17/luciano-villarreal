import {Component as Carruseles} from './Carrusel';
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
            
            <div className="carrusel basico">
                <h3>Básicos</h3>

                <div className="cards-proyectos">
                    <Carruseles proyectos={basicos} />
                </div>
            </div>

            <div className="carrusel intermedio">
                <h3>Intermedios</h3>

                <div className="cards-proyectos">
                    <Carruseles proyectos={intermedios} />
                </div>
            </div>

            <div className="carrusel experto">
                <h3>Expertos</h3>

                <div className="cards-proyectos">
                    <Carruseles proyectos={expertos} />
                </div>
            </div>
        </section>
    );
};

export default Proyectos;