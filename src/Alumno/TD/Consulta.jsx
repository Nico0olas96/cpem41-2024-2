import axios from 'axios';
import React, { useEffect, useState } from 'react';


const baseURL = 'http://localhost:8000/horariosconsulta'


const Consulta = () => {

	const [horario, sethorario] = useState([])
	
	useEffect (() => {
		gethorario ()
	}, [])

	const gethorario = async () => {

		try {
			const response = await axios.get (baseURL)
            sethorario(response.data);

		} catch (error) {
			console.error('error al obtener la horario', error)
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
					{Array.isArray(horario) ? (
						horario.map ( (item) => (
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
