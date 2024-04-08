import React, { useState } from 'react';
import AdministrarMesas from '../sessionIniciada/AdministrarMesas';
import AdministrarMesastv from '../sessionIniciada/AdministrarMesastv';

const Mesas = () => {
    
    const [seccion, setSeccion] = useState ('')

    const cargarTd = () =>{
        setSeccion ('td')
    }

    const cargarTv = () =>{
        setSeccion('tv')
    }

    return (
        <div className='seccion'>
            <h1>MESAS</h1>

            <div className='btn' onClick={cargarTd}>
                Mesas TD
            </div>
            
            <div className='btn' onClick={cargarTv}>
                Mesas TV
            </div>
            
            {seccion === 'td' && <AdministrarMesas/>}
            {seccion === 'tv' && <AdministrarMesastv/>}
        </div>
    );
}

export default Mesas;
