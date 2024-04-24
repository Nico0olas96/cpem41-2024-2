import React from 'react';

const NewSeccionInformacion = ({ id, titulo, descripcion, img, link, finalI, createdAt }) => {
    // Dominio donde se encuentra tu servidor backend
    const backendDomain = "http://localhost/cpem41/backend.php/";
    
    return (
        <div className="informacion_container_2">
            <div key={id} className="Informacion_2">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                {/* Verificar si img existe y no es igual a '\/' antes de renderizar el elemento img */}
                {img && img !== '\/' && <img src={backendDomain + img} alt="Imagen" width="60%"/>}
                <br/>
                {link ? (
                    <a href={link} className="btn_info" target="_blank" rel="noopener noreferrer">
                        Click Aquí
                    </a>
                ) : null}
                <p>{finalI} 🖋️ - {createdAt} </p>
            </div>
        </div>
    );
};

export default NewSeccionInformacion;
