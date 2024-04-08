import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const URI = 'http://localhost:8000/subirpost.php'

const CrearPost = () => {
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [link, setLink] = useState("")
    const [finalI, setFinalI] = useState("")
    const [img, setImg] = useState(null)


    const guardadoI = async (e) => {
        
        e.preventDefault() 

        if(!titulo){
            Swal.fire({
                title: 'Error',
                text: 'El titulo es #Obligatorio',
                icon: 'error',
            })
            return
        }

        if(!finalI){
            Swal.fire({
                title: 'Error',
                text: 'La Firma es #Obligatoria',
                icon: 'error',
            })
            return
        }

        try {
            const response = await axios.post(URI, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        
            if (response.status === 200) {
                // La publicación se ha agregado correctamente
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'El registro se ha añadido correctamente.',
                    icon: 'success',
                });
        
                // Limpiar los campos del formulario
                setTitulo('');
                setDescripcion('');
                setLink('');
                setFinalI('');
                setImg(null);
            } else {
                // Hubo un problema al agregar la publicación
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al intentar agregar el registro.',
                    icon: 'error',
                });
            }
        } catch (error) {
            // Error en la solicitud
            console.error('Error al agregar el post:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al intentar agregar el registro.',
                icon: 'error',
            });
        }


    return (
        <div>
        

            <div className="bodylogin2">
            <div className="centrado">

                <h1>Crear Publicación</h1>
                
                <form onSubmit={guardadoI}>
                    <label htmlFor="titulo">Título / obligatorio</label>
                    <div className='boxinput'>
                        <input
                            type="text"
                            id="titulo"
                            className="controls"
                            placeholder="Titulo / obligatorio"
                            name="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <label htmlFor="descripcion">Descripción</label>
                    <div className='boxinput'>
                        <textarea
                            type="text"
                            id="descripcion"
                            className="controls"
                            placeholder="Descripcion / opcional"
                            name="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>

                    <label htmlFor="link">Link</label>
                    <div className='boxinput'>
                        <input
                            type="textarea"
                            id="link"
                            className="controls"
                            placeholder="Link / opcional"
                            name="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <label htmlFor='Imagen'>Imagen</label>                    
                    <div className='boxinput'>
                        <input type="file" accept="image" onChange={(e) => setImg(e.target.files[0])}/>
                    </div>

                    <label htmlFor="finalI">Firma  / obligatoria </label>
                    <div className='boxinput'>
                        <input
                            type="text"
                            id="finalI"
                            className="controls"
                            placeholder="Firma / obligatoria"
                            name="finalI"
                            value={finalI}
                            onChange={(e) => setFinalI(e.target.value)}
                        />
                    </div>
                    <div className='boxinput'>
                        <button type='submit'>
                            Agregar Post
                        </button>
                    </div>
                    
                </form>
                <br/>
                <br/>

            
            </div>
        </div></div>
    )
}

export default CrearPost