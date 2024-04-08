import React from 'react';
import imgPreterminada from '../Imagenes/Escuela/logo Cpem41-2.png'

/** importacion de imagenes */
import imgUniversidad from '../Imagenes/Noticias/universidad del comahue.png'
import imgFacultadInformatica from '../Imagenes/Noticias/facultad de informatica.jpg'


/**Aca voy a ir armando los condicionales  */
function cargarImagen (imgNoticia) {

    if (imgNoticia === 'universidad' ) {
        imgNoticia = imgUniversidad
    }   
    
    if (imgNoticia === 'facultad_informatica') {
        imgNoticia = imgFacultadInformatica
    }


    



    return imgNoticia
}


const SeccionNoticias = ({tituloN, descripcionN, imgN, linkN}) => {

    const imgAMostrar = cargarImagen(imgN)    

    return (
        <div>
            <div className='noticias_2'>

                <div className='section_1'>

                    {imgN !== '' ? 
                        ( <img src={imgAMostrar} alt='imagen de la noticias'/> ) 
                        :
                        ( <img src={imgPreterminada} alt='imagen preterminada'/> ) 
                    }
                
                </div>
                
                <h3> {tituloN} </h3>
                
                <p>
                    {descripcionN}
                </p>

                <a href={linkN} target='_blank' className='btn_noticia' rel='noopener noreferrer'> Ir a Noticia</a>

            </div>
            
            

        </div>
    );
}

export default SeccionNoticias;
