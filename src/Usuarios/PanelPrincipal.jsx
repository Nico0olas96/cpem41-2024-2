import React, { useState } from 'react';

import Publicaciones from './panel/Publicaciones';
import Horarios from './panel/Horarios';
import Mesas from './panel/Mesas';
import Swal from 'sweetalert2';



const PanelPrincipal = () => {

    const  [seccion, setSeccion] = useState('')

    const cargarSeccionPublicaciones = () =>{
        setSeccion ('publicaciones')
    }

    const cargarSeccionHorarios = () =>{
        setSeccion ('horarios')
    }

    const cargarSeccionMesas = () => {
        setSeccion('mesas')
    }

    const verificarSession = () => {
        const tiempoSession = Date.now()

        const finTiempoSession = localStorage.getItem('finTiempoSession');
    
        if (finTiempoSession) {
          if (tiempoSession > finTiempoSession) {
            localStorage.removeItem('token')
            localStorage.removeItem('finTiempoSession')
            
            window.location.href = './UsuariosPrincipal'
            
          }
        }


      }
    
    //borrar comentario para el tiempo -->  verificarSession()
    verificarSession()
    

    const cierreSession = () => {
        Swal.fire({
            title: 'Cerrar Sesión',
            text: '¿Estás seguro de que deseas cerrar sesión?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar Sesión',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token');
                window.location.href = './UsuariosPrincipal';
            }
        });
    };

    return (
        <div className='seccion_menu'>
            <div className='seccion'>

                <h1> Panel Administrador </h1>

                <div className='btn' onClick={cargarSeccionPublicaciones}>
                    Publicaciones
                </div>
                
                <div className='btn' onClick={cargarSeccionHorarios}>
                    Horarios
                </div>
                <div className='btn' onClick={cargarSeccionMesas}>
                    Mesas
                </div>

                <div className='btn' onClick={cierreSession}>
                    Cerrar sesión
                </div>
                                
            </div>


            {seccion === 'publicaciones' && <Publicaciones/>}

            {seccion === 'horarios' && <Horarios/>}

            {seccion === 'mesas' && <Mesas/>}



        </div>
    );
}

export default PanelPrincipal;
