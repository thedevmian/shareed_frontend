import {useState, useEffect} from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.screenY);
        }
        window.addEventListener('scroll', handleScroll);

        handleScroll();        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return scrollPosition;
}

export default useScrollPosition;


