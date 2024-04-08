import React, { useState } from 'react';
import AdministrarHorarios from '../sessionIniciada/AdministrarHorarios';
import AdministrarHorariostv from '../sessionIniciada/AdministrarHorariostv';

const Horarios = () => {
    const [seccion, setSeccion] = useState ('')

    const cargarTd = () =>{
        setSeccion ('td')
    }

    const cargarTv = () =>{
        setSeccion('tv')
    }

    return (
        <div className='seccion'>
            <h1>HORARIOS</h1>

            <div className='btn' onClick={cargarTd}>
                Horarios TD
            </div>
            
            <div className='btn' onClick={cargarTv}>
                Horarios TV
            </div>

            
            {seccion === 'td' && <AdministrarHorarios/>}
            {seccion === 'tv' && <AdministrarHorariostv/>}

        </div>
    );
}

export default Horarios;
