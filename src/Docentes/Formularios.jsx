import React, { Component } from 'react';
import DeclaracionesJuradas from './Declaraciones Juradas';
import AltaDocentes from './AltaDocentes';

class Formularios extends Component {



    render() {
        return (
            <div className='seccion'>

                <DeclaracionesJuradas/>

                <AltaDocentes/>
                
            </div>
        );
    }
}

export default Formularios;
