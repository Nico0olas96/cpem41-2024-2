import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Alumnos extends Component {
    render() {
        return (
            <div className='seccion_menu'>
                <div className='seccion'>
                    <h2>Seccion de ALUMNOS</h2>

                    <h4>¿A Que Turno Asistis?</h4>


                    <Link to='/Alumno/TD/TurnoDiurno' className='btn'> Turno Diurno </Link>
                    <Link to='/Alumno/TV/TurnoVespertino' className='btn'> Turno Vespertino </Link>


                </div>

                
            </div>
        );
    }
}

export default Alumnos;
