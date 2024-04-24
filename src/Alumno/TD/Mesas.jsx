import axios from 'axios';
import React, { useEffect, useState } from 'react';

const baseURL = 'http://localhost/cpem41/backend.php/mesastd.php'; 

const Mesas = () => {

    const [mesas, setMesas] = useState ([])

    useEffect (() => {
        getMesas () 
    }, [])

    const getMesas = async () => {
        try {
            const response = await axios.get(baseURL); 
            console.log(response.data); // Imprime los datos recibidos en la consola

            setMesas(response.data.slice()); 
        } catch (error) {
            console.error('Error al obtener la información:', error);
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
                        <th>JULIO 2024</th>
                        <th>DICIEMBRE 2024</th>
                        <th>FEBRERO 2025</th>
                        <th>HORARIOS</th>
                        <th>INTEGRANTES TRIBUNAL</th>
                    </tr>
                </thead>
                <tbody>
                    {mesas.length > 0 ? (
                        mesas.map((item) => (
                            <tr key={item.id}>
                                <td>{item.ASIGNATURA}</td>
                                <td>{item.CURSO}</td>
                                <td>{item.JULIO2023}</td>
                                <td>{item.DICIEMBRE2023}</td>
                                <td>{item.FEBRERO2024}</td>
                                <td>{item.HORARIOS}</td>
                                <td>{item.INTEGRANTESTRIBUNAL}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">Cargando datos...</td>
                        </tr>
                    )}
                </tbody>

                </table>

            </div>

            
        </div>
    );
}

export default Mesas;
