import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const baseURL = 'http://localhost/cpem41/backend.php/mesastv.php'; 
const baseModificar = 'http://localhost/cpem41/backend.php/modificarmesastv.php'; 

const AdministrarMesas = () => {

    const [mesas, setMesas] = useState ([])
    const [seccion, setSeccion] = useState('')
    const [registro, setRegistro] = useState(null)

    useEffect (() => {
        getMesas ()
    },[])

    const getMesas = async () => {
        try{
            const response = await axios.get(baseURL)
            setMesas (response.data)
        }catch (error){
            console.error('error al obetener las mesas', error)
        }
    }

    const modificaciones = (registro) => {
        setSeccion('modificaciones')
        setRegistro(registro)
    }

    const guardarModificacion = async (e) => {
        e.preventDefault(e)
        console.log(registro.Id)
        try{
            await axios.put(`${baseModificar}?id=${registro.Id}`, registro)
            getMesas()
            setSeccion ('')
            setRegistro('')
            Swal.fire({
                title: '¡Éxito!',
                text: 'Los datos se han modificado correctamente.',
                icon: 'success',
            })

        }catch (error){
            console.error('Error al guardar las modificaciones', error)
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al intentar modificar los datos.',
                icon: 'error',
            })
        }
    }

    

    return (
        <div >
            {seccion === '' &&(
                <div>
                    <h1>Administracion de Mesas - TD</h1>
                    <div className='contenedor-tablas'>

                    <table className='modificarPost'>
                        <thead>
                            <tr>
                                <th>ASIGNATURA</th>
                                <th>CURSO</th>
                                <th>JULIO 2023</th>
                                <th>DICIEMBRE 2023</th>
                                <th>FEBRERO 2024</th>
                                <th>HORARIOS</th>
                                <th>INTEGRANTES TRIBUNAL</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>                         
                            {mesas.map ((item) => (
                                    <tr key={item.Id}> 
                                        <td>{item.ASIGNATURA}</td>
                                        <td>{item.CURSO}</td>
                                        <td>{item.JULIO2023}</td>
                                        <td>{item.DICIEMBRE2023}</td>
                                        <td>{item.FEBRERO2024}</td>
                                        <td>{item.HORARIOS}</td>
                                        <td>{item.INTEGRANTESTRIBUNAL}</td>
                                        <td> {
                                            <button onClick={ () => modificaciones (item)}>Modificar</button>
                                        } </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            )}

            {seccion === 'modificaciones' && (
                <div className='bodylogin2'>
                    <div className='centrado'>
                        <h1>Modificacion de Mesas</h1>
                        <form>
                            <label>ASIGNATURA</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.ASIGNATURA}
                                onChange={(e) => {
                                    setRegistro({...registro, ASIGNATURA:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>CURSO</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.CURSO}
                                onChange={(e) => {
                                    setRegistro({...registro, CURSO:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>JULIO 2023</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.JULIO2023}
                                onChange={(e) => {
                                    setRegistro({...registro, JULIO2023:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>DICIEMBRE 2023</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.DICIEMBRE2023}
                                onChange={(e) => {
                                    setRegistro({...registro, DICIEMBRE2023:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>FEBRERO 2024</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.FEBRERO2024}
                                onChange={(e) => {
                                    setRegistro({...registro, FEBRERO2024:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>HORARIOS</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.HORARIOS}
                                onChange={(e) => {
                                    setRegistro({...registro, HORARIOS:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>INTEGRANTES TRIBUNAL</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.INTEGRANTESTRIBUNAL}
                                onChange={(e) => {
                                    setRegistro({...registro, INTEGRANTESTRIBUNAL:e.target.value})
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

                    </div>
                </div>
            )}



            
        </div>
    );
}

export default AdministrarMesas;
