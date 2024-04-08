import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const baseURL = 'http://localhost:8000/horariosconsultatv'


const AdministrarHorariostv = () => {

    const [horario, setHorario] = useState ([])
    const [seccion, setSeccion] = useState ('')
    const [registro, setRegistro] = useState('');

    useEffect(() => {
        gethorario ()
    }, [])

    const gethorario = async () => {
        try{
            const response = await axios.get(baseURL)
            setHorario(response.data)
        }catch (error){
            console.error('error al obtener los horarios', error)
        }
    }


    const modificaciones = (registro) =>{
        setSeccion ('modificaciones')
        setRegistro(registro)
    }


    const guardarModificacion = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${baseURL}/${registro.id}`, registro);
            gethorario()
            Swal.fire({
                title: '¡Éxito!',
                text: 'Los datos se han modificado correctamente.',
                icon: 'success',
            })
            setSeccion('')
            setRegistro('')
        } catch (error) {
          alert('Error al guardar la modificación:', error)
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al intentar modificar los datos.',
            icon: 'error',
          })
        }
    };






    return (
        <div>
            {seccion === '' && (
                <div>
                    <h1>Administracion de Horarios - TV </h1>
                    <div className='contenedor-tablas'>

                    <table className='modificarPost'>
                        <thead>
                            <tr>
                                <th>DEPARTAMENTO</th>
                                <th>DIA DE ENCUENTRO 1</th>
                                <th>HORARIO 1</th>
                                <th>DIA DE ENCUENTRO 2</th>
                                <th>HORARIO 2</th>
                                <th>PROFESOR</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {horario.map ( (item) => (
                                <tr key={item.id}>
                                    <td>{item.departamento} </td>
                                    <td>{item.encuentro1} </td>
                                    <td>{item.horario1} </td>
                                    <td>{item.encuentro2} </td>
                                    <td>{item.horario2} </td>
                                    <td>{item.profesor} </td>
                                    <td> {
                                        <button onClick={ () => modificaciones (item)} >Modificar</button>
                                    }
                                    </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
            </div>)}

            {seccion === 'modificaciones' && (
                <div className='bodylogin2'>
                    <div className='centrado'>
                        <h1>Modificacion de Horarios</h1>
                        <form>
                            <label>DEPARTAMENTO</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.departamento}
                                onChange={(e) => {
                                    setRegistro({...registro, departamento:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>DIA DE ENCUENTRO 1</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.encuentro1}
                                onChange={(e) => {
                                    setRegistro({...registro, encuentro1:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>HORARIO 1</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.horario1}
                                onChange={(e) => {
                                    setRegistro({...registro, horario1:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>DIA DE ENCUENTRO 2</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.encuentro2}
                                onChange={(e) => {
                                    setRegistro({...registro, encuentro2:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>HORARIO 2</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.horario2}
                                onChange={(e) => {
                                    setRegistro({...registro, horario2:e.target.value})
                                }}
                                />
                            </div>
                            
                            <label>PROFESOR</label>
                            <div className='boxinput'>
                                <input 
                                type='text'
                                className='constrols'
                                value={registro.profesor}
                                onChange={(e) => {
                                    setRegistro({...registro, profesor:e.target.value})
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

export default AdministrarHorariostv;
