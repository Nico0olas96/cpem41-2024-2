import React, { Component } from 'react';

import SecccionInformacion from './SeccionInformacion'
import InformacionJson from './InformacionJson';

class Informacion extends Component {

    constructor (props){
        super(props);
        this.state = {
            informacion : InformacionJson,

            informacionVisible : 4

        }
    }

    cargarI = () => {
        this.setState(prevState => ({
            informacionVisible : prevState.informacionVisible + 4
        }))
    }



    render() {
        
        const {informacion, informacionVisible } = this.state


        return (
            <div>
                <div className='informacion container'>

                    <h2> INFORMACION IMPORTANTE </h2>

                    <div className='informacion_container'>

                        {informacion.slice(0, informacionVisible).map((item, index) => (
                            <SecccionInformacion 
                                key = {index}
                                tituloI = {item.titulo}
                                descriipcionI = {item.descripcion}
                                descripcion2 = {item.descripcion2}
                                imgI = {item.img}
                                linkI = {item.link}
                                finalI = {item.finalI}

                            />
                        ))}

                    </div>

                    {informacionVisible < informacion.length && 
                        ( <div className='btn_3' onClick={this.cargarI}> Cargar Mas </div> )
                    }

                </div>
                
            </div>
        );
    }
}

export default Informacion;
