import React, { Component } from 'react';

import Publicaciones from '../informacionphp/publicaciones'


class Inicio extends Component {

    //saque el <Noticias/> para que no aparesca solo la informacion (implementamos las noticias mas adelante)
      //          <Noticias/>
      // <NewInformacionDb/> 


    render() {
        return (
            <div>

                <Publicaciones/>


            </div>
        );
    }
}

export default Inicio;
