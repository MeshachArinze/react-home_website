import React from 'react';
import "./ImageChangeOnMouseOver.css";
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div className='ImageChange'>
      <ImageToggleOnMouseOver primaryImg="../img/room1.jpg" secondaryImg="../img/room2.jpg" alt=""/>
      <ImageToggleOnMouseOver  primaryImg="../img/room1.jpg" secondaryImg="../img/room2.jpg" alt=""/>
      <ImageToggleOnMouseOver primaryImg="../img/room1.jpg" secondaryImg="../img/room2.jpg" alt=""/>
      <ImageToggleOnMouseOver  primaryImg="../img/room1.jpg" secondaryImg="../img/room2.jpg" alt=""/>
    </div>
  )
}

export default ImageChangeOnMouseOver;