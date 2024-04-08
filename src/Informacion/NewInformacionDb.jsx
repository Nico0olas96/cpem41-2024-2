  import React, { useEffect, useState } from 'react'
  import NewSeccionInformacion from './NewSeccionInformacion'
  import axios from 'axios'


  const baseURL = 'http://localhost:8000/informacion';



  const NewInformacionDb = () => {


    const [informacion, setInformacion] = useState([]);

    useEffect(() => {
      
      getInformacion()
      
    }, [])

    

    const getInformacion = async () => {
      try {
        const response = await axios.get(baseURL);
        const reversedData = response.data.slice().reverse();
        setInformacion(reversedData);
              
      } catch (error) {
        console.error('Error al obtener la información:', error)
      }
    }



    return (
      <div>
        <div className='informacion container'>

          <h2>INFORMACION INSTITUCIONAL</h2>

          <div className='informacion_container'>
          
              {informacion.map ( (item) => (

                <NewSeccionInformacion
                  key={item.id}
                  titulo={item.titulo}
                  descripcion={item.descripcion}
                  img={item.img}
                  link={item.link}
                  finalI={item.finalI}
                  createdAt={item.createdAt}
                  
                />


              ))}

          </div>
        </div>
      </div>
    );
  };

  export default NewInformacionDb;
