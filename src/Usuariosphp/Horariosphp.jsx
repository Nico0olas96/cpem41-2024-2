import React, { useState } from 'react';

import Admhorariostd from './Admhorariostd';
import Admhorariostv from './Admhorariostv';


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
                    HORARIOS TD
                </div>
                
                <div className='btn' onClick={cargarSeccionHorarios}>
                    HORARIOS TV
                </div>
                         

            {seccion === 'publicaciones' && <Admhorariostd/>}

            {seccion === 'horarios' && <Admhorariostv/>}



        </div>
    );
}

export default Panel;
