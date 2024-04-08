import React from 'react';

const CierreSesscion = () => {
    
  const cierreSession = () => {
    // Eliminar el token de localStorage u otro almacenamiento
    localStorage.removeItem('token');

    // Utiliza el componente Link para redirigir al usuario
    window.location.href = '/';
  };


    return (
        <div>

          <button onClick={cierreSession}>Cerrar sesión</button>
            
        </div>
    );
}

export default  CierreSesscion;
