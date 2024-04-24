import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const URI = 'http://localhost/cpem41/backend.php/session.php'; 

const Iniciarsession = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const borrartk = () => {
      localStorage.removeItem("token");
    }    

    const inicioSession = async () => {
      try {
          const formData = new URLSearchParams();
          formData.append('username', credentials.username);
          formData.append('password', credentials.password);
  
          const response = await axios.post(URI, formData, {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
  
          const token = response.data.token;
  
          // Verifica si el token está presente antes de redirigir
          if (token) {
              localStorage.setItem("token", token);
              // Redirecciona a la página de panel
              window.location.href = '/usuariosphp/Panel';
          } else {
              // Si no se obtiene un token, muestra un mensaje de error
              Swal.fire({
                  title: 'Error',
                  text: 'No se pudo iniciar sesión. Inténtalo de nuevo más tarde.',
                  icon: 'error',
              });
          }
  
      } catch (error) {
          console.error('Error en la solicitud:', error);
          Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde.',
              icon: 'error',
          });
      }
  };
  
  

    return (
        <div className='bodylogin'>
          
            <div className='centrado'>
                <h1>Iniciar sesión</h1>
                <div className='boxinput'>
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    />
                </div>
                <div className='boxinput'>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />
                </div>
                <div className='boxinput'>
                    <button onClick={inicioSession} type='submit'>Iniciar sesión</button>
                </div>
                <div className='boxinput'>
                    <button onClick={borrartk} type='submit'>borras</button>
                </div>
            </div>
        </div>
    );
};

export default Iniciarsession;
