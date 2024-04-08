import React, { Component } from 'react';
import Programas from './Programas';
import Mesas from './Mesas';
import Consulta from './Consulta';



class TurnoDiurno extends Component {

    constructor (props){
        super(props)
        this.state = {
            seccion : ''
        }
    }


    cargarProgramas = () =>{
        this.setState  ({
            seccion : 'programas'   
        })
    }

    cargarMesas = () => {
        this.setState  ({
            seccion : 'mesas'
        })

    }

    cargarHorario = () => {
        this.setState  ({
            seccion : 'horarios'
        })
    }



    render() {

        const {seccion} = this.state

        return (
            <div className='seccion_menu'>
                <div className='seccion'>
                    <h1> BIENVENIDO AL TURNO DIURNO </h1>

                    <h4>¿Que Necesitas El Dia de Hoy?</h4>

                    <div className='btn' onClick={this.cargarProgramas}>Programas</div>
                    <div className='btn' onClick={this.cargarMesas}>Mesas de Examenes</div>
                    <div className='btn' onClick={this.cargarHorario}>Horarios de Consulta</div>
                    

                </div>

                {seccion === 'programas' && (
                    <Programas/>
                )}
                {seccion === 'mesas' && (
                    <Mesas/>
                )}
                {seccion === 'horarios' && (
                    <Consulta/>
                )}
             


            </div>
        );
    }
}

export default TurnoDiurno;
