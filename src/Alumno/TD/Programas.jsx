import React, { Component } from 'react';

import PrimeroSegundo from './Programas/Primero-Segundo'
import Tercero from './Programas/Tercero'
import Cuarto from './Programas/Cuarto'
import Quinto from './Programas/Quinto'

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

    cargar4to = () => {
        this.setState({
            seccion2 :'4to'
        })
    }

    cargar5to = () => {
        this.setState({
            seccion2 :'5to'
        })
    }




    render() {

        const {seccion2} = this.state

        return (
            <div>
                <div className='seccion'>

                    <h1>Seccion de PROGRAMAS</h1>

                    <h4>¿De Que Año Necesitas Los Programas?</h4>

                    <div className='btn' onClick={this.cargar1ro2do}>1ro y 2do</div>
                    <div className='btn' onClick={this.cargar3ro}>3ro</div>
                    <div className='btn' onClick={this.cargar4to}>4to</div>
                    <div className='btn' onClick={this.cargar5to}>5to</div>
                    
                </div>

                {seccion2 === '1ro2do' && (
                    <PrimeroSegundo/>
                )}
                {seccion2 === '3ro' && (
                    <Tercero/>
                )}
                {seccion2 === '4to' && (
                    <Cuarto/>
                )}
                {seccion2 === '5to' && (
                    <Quinto/>
                )}




            </div>
        );
    }
}

export default Programas;
