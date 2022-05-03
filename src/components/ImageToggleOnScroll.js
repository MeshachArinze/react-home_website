/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const [inView, setInView] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const imageRef = useRef(null);
    
    useEffect(() => {
        window.addEventListener('scroll', ScrollHandler);
        setInView(isInView());
        setIsLoading(false);
        return ( () => {
            window.removeEventListener('scroll', ScrollHandler);
        }, [isLoading]);
    });

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    }

    const ScrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    }

  return isLoading ? null : (
    <img 
        src={inView ? secondaryImg : primaryImg} 
        alt="" ref={imageRef}
        width="200" height="200"
    />
  );
};

export default ImageToggleOnScroll;