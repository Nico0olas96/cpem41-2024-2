import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const baseURL = 'http://localhost:8000/mesasexamenestv'

const AdministrarMesastv = () => {

    const [mesas, setMesas] = useState ([])
    const [seccion, setSeccion] = useState('')
    const [registro, setRegistro] = useState('')

    useEffect (() => {
        getMesas ()
    }, [])

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
        e.preventDefault()
        try{
            await axios.put(`${baseURL}/${registro.id}`, registro)
            getMesas()
            setSeccion ('')
            setRegistro(null)
            
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
        <div>
            {seccion === '' &&(
                <div>
                    <h1>Administracion de Mesas - TV</h1>
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
                                    <tr key={item.id}>
                                        <td>{item.asignatura}</td>
                                        <td>{item.curso}</td>
                                        <td>{item.julio2023}</td>
                                        <td>{item.diciembre2023}</td>
                                        <td>{item.febrero2024}</td>
                                        <td>{item.horarios}</td>
                                        <td>{item.integrantestribunal}</td>
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
                                value={registro.asignatura}
                                onChange={(e) => {
                                    setRegistro({...registro, asignatura:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>CURSO</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.curso}
                                onChange={(e) => {
                                    setRegistro({...registro, curso:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>JULIO 2023</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.julio2023}
                                onChange={(e) => {
                                    setRegistro({...registro, julio2023:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>DICIEMBRE 2023</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.diciembre2023}
                                onChange={(e) => {
                                    setRegistro({...registro, diciembre2023:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>FEBRERO 2024</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.febrero2024}
                                onChange={(e) => {
                                    setRegistro({...registro, febrero2024:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>HORARIOS</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.horarios}
                                onChange={(e) => {
                                    setRegistro({...registro, horarios:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>INTEGRANTES TRIBUNAL</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.integrantestribunal}
                                onChange={(e) => {
                                    setRegistro({...registro, integrantestribunal:e.target.value})
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

export default AdministrarMesastv;
