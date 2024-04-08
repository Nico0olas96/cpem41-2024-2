import axios from 'axios';
import React, { useEffect, useState } from 'react';


const baseURL = 'http://localhost:8000/horariosconsultatv'

const Consulta = () => {

    const [horarios, setHorario] =  useState([])

    useEffect (() => {
        getHorarios ()
    }, [])

    const getHorarios = async () => {

        try {
            const response = await axios.get (baseURL)
            setHorario (response.data)
        }catch (error){
            console.error('error a  obtener los horarios ', error)
        }

    }



    return (
        <div className='seccion'>
            
            <h1>HORARIOS DE CONSULTA - 2023</h1>

            <div className="contenedor-tablas">
                <table className="mi-tabla">
                    <thead>
                        <tr>
                        <th>DEPARTAMENTO</th>
                        <th>DIA DE ENCUENTRO 1</th>
                        <th>HORARIO 1</th>
                        <th>DIA DE ENCUENTRO 2</th>
                        <th>HORARIO 2</th>
                        <th>PROFESOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(horarios) ? (
                            horarios.map ( (item) => (
                            <tr key={item.id}>
                                <td>{item.departamento} </td>
                                <td>{item.encuentro1} </td>
                                <td>{item.horario1} </td>
                                <td>{item.encuentro2} </td>
                                <td>{item.horario2} </td>
                                <td>{item.profesor} </td>
                        </tr>
                        ))
                        ):(
                            <tr>
                            <td colSpan="6">Cargando datos...</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>





        </div>
    );
}

export default Consulta;
