import './Proyectos.css';
import blogdecafe from '../../assets/projects/blogdecafe.png';
import festivalrock from '../../assets/projects/festivalrock.png';
import appsalonCliente from '../../assets/projects/appsalon-cliente.png';
import appsalonAdmin from '../../assets/projects/appsalon-admin.png';
import bienesraices from '../../assets/projects/bienesraices.png';
import admgim from '../../assets/projects/admgim.png';
import apv from '../../assets/projects/apv.png';
import todo from '../../assets/projects/todo.png';
import uptask from '../../assets/projects/uptask.png';

import blogdecafewebp from '../../assets/projects/blogdecafe.webp';
import festivalrockwebp from '../../assets/projects/festivalrock.webp';
import appsalonClientewebp from '../../assets/projects/appsalon-cliente.webp';
import appsalonAdminwebp from '../../assets/projects/appsalon-admin.webp';
import bienesraiceswebp from '../../assets/projects/bienesraices.webp';
import admgimwebp from '../../assets/projects/admgim.webp';
import apvwebp from '../../assets/projects/apv.webp';
import todowebp from '../../assets/projects/todo.webp';
import uptaskwebp from '../../assets/projects/uptask.webp';

import Proyecto from './Proyecto';

const Proyectos = () => {
    return (
        <>
            <section id='proyectos'>
                <div className="container">
                    <h2 className='text-center m-4'>Mis proyectos</h2>

                    <div className="row">
                        <Proyecto 
                            imagen={blogdecafe} imagenwebp={blogdecafewebp} alt="blog de café" cardTitle="Blog de café" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-danger">HTML</span>
                                    <span className="badge rounded-pill bg-primary ms-1">CSS</span>
                                </>
                            }
                            cardText="Blog de los distintos tipos de café." 
                            github="https://github.com/Luciano-17/blog-cafe"
                            link="https://blogdecafeweb.netlify.app/"
                        />

                        <Proyecto 
                            imagen={festivalrock} imagenwebp={festivalrockwebp} alt="festival de rock" cardTitle="Festival de Rock" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-danger">HTML</span>
                                    <span className="badge rounded-pill bg-primary ms-1">CSS</span>
                                    <span className="badge rounded-pill bg-warning ms-1">JavaScript</span>
                                </>
                            }
                            cardText="Sitio web sobre un festival de rock." 
                            github="https://github.com/Luciano-17/festival-rock"
                            link="https://rockyedmfestival.netlify.app/"
                        />

                        <Proyecto 
                            imagen={appsalonCliente} imagenwebp={appsalonClientewebp} alt="aplicación de peluqueria" cardTitle="Aplicación de barbería" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-primary">React</span>
                                    <span className="badge rounded-pill bg-info ms-1">Tailwind</span>
                                    <span className="badge rounded-pill bg-success ms-1">Node</span>
                                </>
                            }
                            cardText="Aplicación de turnos en un barbería." 
                            github="https://github.com/Luciano-17/Appsalon_frontend-cliente"
                            link="https://frontend-appsalon-cliente.netlify.app/"
                        />

                        <Proyecto 
                            imagen={appsalonAdmin} imagenwebp={appsalonAdminwebp} alt="administrador de peluqueria" cardTitle="Admin de barbería" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-primary">React</span>
                                    <span className="badge rounded-pill bg-info ms-1">Tailwind</span>
                                    <span className="badge rounded-pill bg-success ms-1">Node</span>
                                </>
                            }
                            cardText="Administrador de una barbería." 
                            github="https://github.com/Luciano-17/Appsalon_frontend-appsalon"
                            link="https://frontend-appsalon.netlify.app/"
                        />

                        <Proyecto 
                            imagen={bienesraices} imagenwebp={bienesraiceswebp} alt="Aplicacion de bienes raices" cardTitle="Bienes raices" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-primary">PHP</span>
                                    <span className="badge rounded-pill bg-warning ms-1">JavaScript</span>
                                    <span className="badge rounded-pill bg-danger ms-1">Sass</span>
                                    <span className="badge rounded-pill bg-warning ms-1">MySQL</span>
                                </>
                            }
                            cardText="Empresa de bienes raíces." 
                            github="https://github.com/Luciano-17/bienes-raices"
                            link="https://bienesraicesluciano.netlify.app/"
                        />

                        <Proyecto 
                            imagen={todo} imagenwebp={admgimwebp} alt="Administrador de tareas" cardTitle="Admin de tareas" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-primary">React</span>
                                    <span className="badge rounded-pill bg-secondary ms-1">LocalStorage</span>
                                </>
                            }
                            cardText="Administrador de tareas diarias." 
                            github="https://github.com/Luciano-17/todo-app"
                            link="https://todo-villarreal.netlify.app/"
                        />

                        <Proyecto 
                            imagen={uptask} imagenwebp={apvwebp} alt="Admin de tareas uptask" cardTitle="UpTask" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-primary">PHP</span>
                                    <span className="badge rounded-pill bg-warning ms-1">JavaScript</span>
                                    <span className="badge rounded-pill bg-danger ms-1">Sass</span>
                                    <span className="badge rounded-pill bg-warning ms-1">MySQL</span>
                                </>
                            }
                            cardText="Administrador completo de tareas." 
                            github="https://github.com/Luciano-17/UpTask_MVC"
                            link="#"
                        />

                        <Proyecto 
                            imagen={admgim} imagenwebp={todowebp} alt="Admin de gimnasio" cardTitle="AdmGim" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-primary">React</span>
                                    <span className="badge rounded-pill bg-info ms-1">Tailwind</span>
                                    <span className="badge rounded-pill bg-success ms-1">Node</span>
                                </>
                            }
                            cardText="Admin de clientes para un gimnasio." 
                            github="https://github.com/Luciano-17/AdmGim_frontend"
                            link="#"
                        />

                        <Proyecto 
                            imagen={apv} imagenwebp={uptaskwebp} alt="Admin de veterinaria" cardTitle="APV" 
                            badges={
                                <>
                                    <span className="badge rounded-pill bg-primary">React</span>
                                    <span className="badge rounded-pill bg-info ms-1">Tailwind</span>
                                    <span className="badge rounded-pill bg-success ms-1">Node</span>
                                </>
                            }
                            cardText="Admin de pacientes de veterinaria." 
                            github="https://github.com/Luciano-17/APV_MERN_frontend"
                            link="https://apv-villarreal.netlify.app/"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Proyectos