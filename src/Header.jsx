import React, { Component } from 'react';

import logoEsc from './Imagenes/Escuela/logo Cpem41.jpg'



class Header extends Component {
    
    
    
    render() {





        return (
            <div>
                <div className='conteiner_header container'>

                    <div className='txt_header'>
                    
                        <h1> <span> BIENVENIDO </span> </h1> 
                        <h2>Sitio oficial del Cpem41</h2>
                        <p>
                            Somos una institución educativa de gestión pública en el departamento de Confluencia, en la provincia de Neuquén.
                            Ofrecemos educación secundaria para jóvenes y adultos. 
                            Ofrecemos una orientación educativa basada en los principios humanísticos y ecológicos para jóvenes, y la opción de Perito Mercantil para adultos. 
                            Nuestra misión es ofrecer una educación de calidad que promueva el crecimiento personal y la formación de valores a los estudiantes.
                        </p>
                        
                    
                    </div>
                    <div className='img_header'>

                        <img src={logoEsc} alt='imagen de la escuela'/>

                    </div>

                </div>
            </div>
        );
    }
}

export default Header;
