import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


const baseURL = 'http://localhost/cpem41/backend.php/admpost.php'; 

const Admpost = () => {

    const [informacion, setInformacion] = useState([])
    
    const [seccion, setSeccion] = useState ('')

    const [registro, setRegistro] = useState(null);

    const [guardarImg, setMostrarImg] = useState(null)

    useEffect (() => {

        getInformacion ()

    }, [])

    const getInformacion = async () => {
        try {
            const response = await axios.get(baseURL);
            if (response && response.data) {
                const reversedData = response.data.slice().reverse();
                setInformacion(reversedData);
            } else {
                console.error('La respuesta no contiene datos:', response);
            }
        } catch (error) {
            console.error('Error al obtener la información:', error);
        }
    };
    


    
    const eliminarRegistro = async (key) => {   
        const confirmacion = await Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Eliminar el registro de forma permanente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        })

        if(confirmacion.isConfirmed){
            try {
            await axios.delete(`${baseURL}/${key}`)
            Swal.fire({
                title: '¡Éxito!',
                text: 'El registro se ha eliminado correctamente.',
                icon: 'success',
            })

            getInformacion();
            } catch (error) {
                console.error('Error al eliminar el registro:', error)
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al intentar eliminar el registro.',
                    icon: 'error',
                })
            }
        }

    };

    const modificaciones = (registro) => {
        setSeccion ('modificaciones')
        setRegistro (registro)
    }

    const guardarModificacion = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${baseURL}/${registro.id}`, registro)
            getInformacion()
            setSeccion('')
            setRegistro(null)
            Swal.fire({
                title: '¡Éxito!',
                text: 'Los datos se han modificado correctamente.',
                icon: 'success',
              })
            
        } catch (error) {
          console.error('Error al guardar la modificación:', error)
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al intentar modificar los datos.',
            icon: 'error',
          })
        }
        

    };

    const mostrarImg = (img) =>{
        setMostrarImg (img)
        setSeccion('mostrarImg')

    }


    return (
        <div>
            
            {seccion === '' && (
            <div>
                <h1>Modificar Publicación</h1>
                <h4>(No se pueden modificar las Imágenes)</h4>

                <div className='contenedor-tablas'>
                    <table className='modificarPost'>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Link</th>
                                <th>Imagen</th>
                                <th>Firma</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {informacion && informacion.length > 0 && informacion.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.titulo}</td>
                                    <td>{item.descripcion}</td>
                                    <td>{item.link}</td>
                                    <td>
                                        {item.img && item.img.data && item.img.data.length > 0 && (
                                            <button onClick={() => mostrarImg(item.img)}>Ver Imagen</button>
                                        )}
                                    </td>
                                    <td>{item.finalI}</td>
                                    <td>
                                        {!item.img || !item.img.data || item.img.data.length === 0 && (
                                            <button onClick={() => modificaciones(item)}>Modificar</button>
                                        )}
                                        <button onClick={() => eliminarRegistro(item.id)}>Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}

            {seccion === 'modificaciones' && registro && (
                    <div className="bodylogin2">
                    <div className="centrado">
                        <h1>Modificación de Registro</h1>
                        <form>
                            <label>Título:</label>
                            <div className='boxinput'>    
                                <input
                                type='text'
                                className="controls"
                                value={registro.titulo}
                                onChange={(e) => {
                                    setRegistro({ ...registro, titulo: e.target.value });
                                }}
                                />
                            </div>
                                
                            <label>Descripción:</label>
                            <div className='boxinput'>    
                                <input
                                type='text'
                                className="controls"
                                value={registro.descripcion}
                                onChange={(e) => {
                                    setRegistro({ ...registro, descripcion: e.target.value });
                                }}
                                />
                            </div>
                                
                            <label>Link:</label>
                            <div className='boxinput'>
                                <input
                                type='text'
                                className="controls"
                                value={registro.link}
                                onChange={(e) => {
                                    setRegistro({ ...registro, link: e.target.value });
                                }}
                                />
                            </div>
                            <label>Firma:</label>
                            <div className='boxinput'>
                                <input
                                type='text'
                                className="controls"
                                value={registro.finalI}
                                onChange={(e) => {
                                    setRegistro({ ...registro, finalI: e.target.value });
                                }}
                                />
                            </div>

                            <div className='boxinput'>
                                <button type='submit' onClick={guardarModificacion}>
                                    Guardar Modificación
                                </button>
                            </div>

                            <div className='boxinput'>
                                <button type='submit' onClick={() => {setSeccion ('')}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div></div>
            )}

            {seccion === 'mostrarImg' && (
                <div className='frame'> 
                    
                    <img src={`data:image/png;base64,${guardarImg}`} alt="Imagen" />
                    
                    <div >
                        <button className='volverModificaciones' onClick={ () => {
                            setSeccion('');
                        }}>Volver</button>
                    </div>
                
                </div>
            )}

             


        </div>
    );
}

export default Admpost