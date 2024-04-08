import React, { useState } from 'react';

import Publicaciones from './Publicacionesphp';
import Horarios from './Horariosphp';


const Panel = () => {

    const  [seccion, setSeccion] = useState('')

    const cargarSeccionPublicaciones = () =>{
        setSeccion ('publicaciones')
    }

    const cargarSeccionHorarios = () =>{
        setSeccion ('horarios')
    }



    return (
        <div className='seccion_menu'>
            <div className='seccion'>

                <h1> Panel Administrador </h1>

                <div className='btn' onClick={cargarSeccionPublicaciones}>
                    Publicaciones
                </div>
                
                <div className='btn' onClick={cargarSeccionHorarios}>
                    Horarios
                </div>
                                
            </div>


            {seccion === 'publicaciones' && <Publicaciones/>}

            {seccion === 'horarios' && <Horarios/>}



        </div>
    );
}

export default Panel;
