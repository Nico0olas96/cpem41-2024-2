import React, { useState, useEffect } from 'react';

import Publicaciones from './Publicacionesphp';
import Horarios from './Horariosphp';
import Mesas from './Mesasphp';

const Panel = () => {

    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const tokenGuardado = localStorage.getItem("token");
      
      if (tokenGuardado !== null) {
      
        setToken(tokenGuardado);
      
    } else {
        // Si no se encuentra ningún token, redirige a la página de inicio
        window.location.href = '/usuariosphp/Inicio';
      }
      setLoading(false); // Indica que la carga ha terminado
    }, []);
    

    
    const  [seccion, setSeccion] = useState('')

    const cargarSeccionPublicaciones = () =>{
        setSeccion ('publicaciones')
    }

    const cargarSeccionHorarios = () =>{
        setSeccion ('horarios')
    }

    const cargarSeccionMesas = () => {
        setSeccion ('mesas')
    }

    const borrartk = () => {
      localStorage.removeItem("token");
      window.location.href = '/usuariosphp/Inicio';

    }    

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className='seccion_menu'>
            <div className='seccion'>

                <h1> Panel Administrador </h1>

                <div className='btn' onClick={cargarSeccionPublicaciones}>
                    Publicaciones
                </div>
                
                <div className='btn' onClick={cargarSeccionMesas}>
                    Mesas
                </div>

                <div className='btn' onClick={cargarSeccionHorarios}>
                    Horarios
                </div>

                <div className='btn' onClick={borrartk}>
                    Cerrar Session
                </div>
                                
            </div>


            {seccion === 'publicaciones' && <Publicaciones/>}

            {seccion === 'mesas' && <Mesas/>}
            
            {seccion === 'horarios' && <Horarios/>}

            



        </div>
    );
}

export default Panel;
