import React from 'react';
import HorasTomadas from './HorasTomadas';

const NoticiasDocentes = () => {


    return (
        <div className='seccion'>
            
            <h1>¿Tomas Horas o un cargo?</h1>

            <h4>
                Comunicate dentro de las 24hs con la escuela a travez del mail oficial. 
                <br/>
                <a href="mailto:cpem41secretaria@gmail.com"> cpem41secretaria@gmail.com </a>
            </h4>

            <br/>

            <HorasTomadas/>

        </div>
    );
}

export default NoticiasDocentes;
