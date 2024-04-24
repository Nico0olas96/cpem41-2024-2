import React, { useState } from 'react';

import Admmesas from './Admmesas';
import Admmesastv from './Admmesastv';


const Panel = () => {

    const  [seccion, setSeccion] = useState('')

    const cargarSeccionPublicaciones = () =>{
        setSeccion ('publicaciones')
    }

    const cargarSeccionHorarios = () =>{
        setSeccion ('horarios')
    }



    return (
        <div className='seccion'>

                <div className='btn' onClick={cargarSeccionPublicaciones}>
                    MESAS TD
                </div>
                
                <div className='btn' onClick={cargarSeccionHorarios}>
                    MESAS TV
                </div>
                         

            {seccion === 'publicaciones' && <Admmesas/>}

            {seccion === 'horarios' && <Admmesastv/>}



        </div>
    );
}

export default Panel;
