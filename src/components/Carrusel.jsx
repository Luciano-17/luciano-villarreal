import {useSpringCarousel} from 'react-spring-carousel';
import Proyecto from './Proyecto';

export function Component({proyectos}) {
    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
    } = useSpringCarousel({
        initialStartingPosition: 'center',
        itemsPerSlide: 3,
        withLoop: true,
        items: proyectos.map((proyecto) => ({
            id: proyecto.id,
            renderItem: (
                <Proyecto key={proyecto.id} proyecto={proyecto} categoria={proyecto.categoria} />
            ),
        })),
    });

    return (
        <div>
            {carouselFragment}
            <div className="btns-carrusel">
                <button className='btn-carrusel' onClick={slideToPrevItem}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className='btn-carrusel' onClick={slideToNextItem}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}