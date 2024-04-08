import React, { useState } from 'react';
import CrearPost from '../sessionIniciada/CrearPost';
import AdministracionPost from '../sessionIniciada/AdministracionPost'

const Publicaciones = () => {

    const [seccion, setSeccion] = useState ('')

    const cargarPost = () =>{
        setSeccion ('crearPost')
    }

    const cargarModificar = () =>{
        setSeccion('modificarPost')
    }

    
    return (
        <div className='seccion'>
            <h1>PUBLICACIONES</h1>

            <div className='btn' onClick={cargarPost}>
                Crear Publicacion
            </div>
            
            <div className='btn' onClick={cargarModificar}>
                Modificar Publicacion
            </div>

            
            {seccion === 'crearPost' &&  <CrearPost/> }

            {seccion === 'modificarPost' && <AdministracionPost/> }


        </div>
    );
}

export default Publicaciones;
