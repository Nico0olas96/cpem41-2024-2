import React, { Component } from 'react';

import imgFooter from './Imagenes/Escuela/Escuela de frente.png'

class Footerr extends Component {
    render() {
        return (
            <div>
                <div className='pie-pagina'>

                    <div className='boxC'>
                        <h2>CONTACTO</h2>

                        <div className="contacto-info">
                            <div>
                                <p>Email:</p>
                                <p>Teléfono:</p>
                                <p>Direecion:</p>
                            </div>
                            <div>
                                <p><a href="mailto:cpem41secretaria@gmail.com">cpem41secretaria@gmail.com</a></p>
                                <p><a href="tel:+542994401509">0299 - 4401509</a></p>
                                <p><a href='https://maps.app.goo.gl/SJCuYfYwXeTjiYCFA' target='_blank'>Int. Pedro Linares 760</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='grupo-1'>
                        <div className='box'>
                            
                            <h2>MAPA</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4023.1524968449567!2d-68.05001268616438!3d-38.96339291462443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a31871bea0437%3A0x3c40f001c1888e7f!2sCPEM%20N%2041!5e0!3m2!1ses-419!2sar!4v1694617389305!5m2!1ses-419!2sar" 
                            width="400" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            
                        </div> 
                        <div className='box'>
                            <h2>CONTACTO</h2>

                            <div className="contacto-info">
                                <div>
                                    <p>Email:</p>
                                    <p>Teléfono:</p>
                                    <p>Direecion:</p>
                                </div>
                                <div>
                                    <p><a href="mailto:cpem41secretaria@gmail.com">cpem41secretaria@gmail.com</a></p>
                                    <p><a href="tel:+542994401509">0299 - 4401509</a></p>
                                    <p><a href='https://maps.app.goo.gl/SJCuYfYwXeTjiYCFA' target='_blank'>Int. Pedro Linares 760</a></p>
                                </div>
                             </div>

                        </div> 
                        <div className='box'>
                            <h2>LA ESCUELA</h2>
                            <img src={imgFooter} alt='Escuela de frente' ></img>
                        </div>    
                    </div>

                    <div className='grupo-2'>
                        
                        <h3>© 2023  C.P.E.M. N°41.</h3>
                        <h5 className="firmas"> Hermosilla Nicolás © 2023 | Todos los derechos reservados. </h5>

                    </div>

                </div>


            </div>
        );
    }
}

export default Footerr;
