import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import Admpost from './Admpost';

const baseURL = 'http://localhost/cpem41/backend.php/subirpost.php';

const Publicacionesphp = () => {

    const  [seccion, setSeccion] = useState('')
    
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [link, setLink] = useState("")
    const [finalI, setFinalI] = useState("")
    const [imagen, setImagen] = useState(null);

    const subirpost = () =>{
        setSeccion ('subirpost')
    }

    const admpost = () => {
        setSeccion ('admpost')
    }

    const handleChangeImagen = (event) => {
        // Actualizar el estado con la imagen seleccionada
        setImagen(event.target.files[0]);
    };

    const guardadoI = async (e) => {
        e.preventDefault();

        if(!titulo){
            Swal.fire({
                title: 'Error',
                text: 'El titulo es #Obligatorio',
                icon: 'error',
            });
            return;
        }

        if(!finalI){
            Swal.fire({
                title: 'Error',
                text: 'La Firma es #Obligatoria',
                icon: 'error',
            });
            return;
        }

        try {
            const formData = new FormData();
            formData.append('titulo', titulo);
            formData.append('descripcion', descripcion);
            formData.append('link', link);
            formData.append('finalI', finalI);
            formData.append('imagen', imagen); // Agregar la imagen al FormData

            const response = await axios.post(baseURL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Limpiar los campos del formulario si la solicitud es exitosa
            setTitulo('');
            setDescripcion('');
            setLink('');
            setFinalI('');
            setImagen(null);

            Swal.fire({
                title: '¡Éxito!',
                text: 'El registro se ha añadido correctamente.',
                icon: 'success',
            });
        } catch (error) {
            console.error('Error al agregar el post:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al intentar eliminar el registro.',
                icon: 'error',
            });
        }
    }

    return (
        <div className='seccion'>
            <div className='btn' onClick={subirpost}>
                Subir
            </div>
            <div className='btn' onClick={admpost}>
                Administrar
            </div>

            {seccion === 'subirpost' && (
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
                                    type="text"
                                    id="link"
                                    className="controls"
                                    placeholder="Link / opcional"
                                    name="link"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </div>

                            <label htmlFor='imagen'>Imagen</label>
                            <div className='boxinput'>
                                <input type="file" onChange={handleChangeImagen} accept="image/*" />
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
                    </div>
                </div>
            )}

            {seccion === 'admpost' && <Admpost/>}
        </div>
    );
}

export default Publicacionesphp;