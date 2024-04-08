import React, { useEffect, useState } from 'react';

const ImageDisplay = ({ imagen }) => {
  
  const [imageDataUrl, setImageDataUrl] = useState(null);

  useEffect(() => {
  
    if (imagen) {

      const arrayBufferView = new Uint8Array(imagen.data);

      const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });

      const imageUrl = URL.createObjectURL(blob);

      setImageDataUrl(imageUrl);
      
    }


  }, [imagen]);


  return (
    <div>

      <img src={imageDataUrl} className="contenedorDisplay" alt=""
          onError={(e) => {
            e.target.style.display = 'none'
            }} 
        />



    </div>
  );
};

export default ImageDisplay;
