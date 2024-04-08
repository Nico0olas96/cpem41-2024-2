import React, { Component } from 'react';

import PrimeroSegundo from './Programas/Primero-Segundo';
import Tercero from './Programas/Tercero';

class Programas extends Component {

    constructor (props) {
        super(props)
        this.state = {
            seccion2 : ''
        }
    }

    cargar1ro2do = () => {
        this.setState ({
            seccion2 : '1ro2do'
        })
    }
    
    cargar3ro = () => {
        this.setState({
            seccion2 :'3ro'
        })
    }


    render() {

        const {seccion2} = this.state;

        return (
            <div>
                <div className='seccion'>
                <h1>PROGRAMAS</h1>

                    <h4>¿De Que Año Necesitas Los Programas?</h4>

                    <div className='btn' onClick={this.cargar1ro2do}>1ro y 2do</div>
                        <div className='btn' onClick={this.cargar3ro}>3ro y 4to</div>

                    </div>

                        {seccion2 === '1ro2do' && (
                        <PrimeroSegundo/>
                        )}
                        {seccion2 === '3ro' && (
                        <Tercero/>
                        )}

            </div>

        );
    }
}

export default Programas;
