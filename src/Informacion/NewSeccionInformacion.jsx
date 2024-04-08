import React from 'react';
import ImageDisplay from './ImageDisplay'

const NewSeccionInformacion = ({id, titulo, descripcion, img, link, finalI, createdAt}) => {
    
    return (

        <div className="informacion_container_2">


            <div key={id} className="Informacion_2">

            <h3>{titulo}</h3>

            <p>{descripcion}</p>

            {img && (
                <ImageDisplay imagen={img} />
            )}
            
            {link ? (

                <a href={link} className="btn_info" target="_blank" rel="noopener noreferrer">
                Click Aquí
                </a>

            ) : null}


            <p>{finalI} 🖋️ - {createdAt} </p>
            </div>






        </div>
    );
}

export default NewSeccionInformacion;
