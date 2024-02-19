import {useState, useEffect} from 'react';

const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [items, setItems] = useState(3);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        if(resize.width >= 993) {
            setItems(3);
        } else {
            setItems(1);
        }
    };
    
    return {width, height, items};
};

export default useScreenSize;