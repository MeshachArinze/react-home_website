import React, {useRef} from 'react';
import "./ImageChangeOnMouseOver.css";

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null);
  return (
    <img className='img' onMouseOver={() => {
        imageRef.current.src= secondaryImg;
    }} onMouseOut={() => {
        imageRef.current.src = primaryImg;
    }}
       src={primaryImg} alt="" ref={imageRef}  width="200" height="200"
       />
  );
};

export default ImageToggleOnMouseOver;