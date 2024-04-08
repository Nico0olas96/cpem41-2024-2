import axios from 'axios';
import React, { useEffect, useState } from 'react';

const baseURL = 'http://localhost:8000/mesasexamenes'

const Mesas = () => {

    const [mesas, setMesas] = useState ([])

    useEffect (() => {
        getMesas () 
    }, [])

    const getMesas = async () => {
        try {
            const response = await axios.get (baseURL)
            setMesas(response.data)
        }catch (error) {
            console.error('error al obetener mesas de examenes')
        }
    }


    return (
        <div className='seccion'>

            <h1>CRONOGRAMA DE MESAS DE EXAMENES</h1>
            <h4> PREVIOS, LIBRES Y EQUIVALENTES </h4>

            <div className="contenedor-tablas" >
                <table className="mi-tabla">
                <thead>
                    <tr>
                        <th>ASIGNATURA</th>
                        <th>CURSO</th>
                        <th>JULIO 2023</th>
                        <th>DICIEMBRE 2023</th>
                        <th>FEBRERO 2024</th>
                        <th>HORARIOS</th>
                        <th>INTEGRANTES TRIBUNAL</th>
                    </tr>
                </thead>
                <tbody>

                    {Array.isArray(mesas) ? (
                        mesas.map ((item) => (
                            <tr key={item.id}>
                                <td>{item.asignatura}</td>
                                <td>{item.curso}</td>
                                <td>{item.julio2023}</td>
                                <td>{item.diciembre2023}</td>
                                <td>{item.febrero2024}</td>
                                <td>{item.horarios}</td>
                                <td>{item.integrantestribunal}</td>
                            </tr>
                        ))
                    ) : (
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

export default Mesas;
