import React from 'react'
import ImageToggleOnScroll from './ImageToggleOnMouseOver';
const ImageChangeOnScroll = () => {
  return (
    <div>
    {
        [1124, 187, 823, 1269, 1530].map(speakId => {
          return (
            <div key={speakId}>
              <ImageToggleOnScroll primaryImg={`${speakId}.jpg`} secondaryImg={`${speakId}.jpg`} alt="" width="200" height="200" />
            </div>
          );
        })
      }
    </div>
  )
}

export default ImageChangeOnScroll;