import React, { Component } from 'react';
import NoticiasDocentes from '../Docentes/Noticias Docentes';
import Licencias from '../Docentes/Licencias';
import Formularios from '../Docentes/Formularios';

class Docentes extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            seccion: '',
            token: localStorage.getItem('token')

        };
    }

    cargarSeccionD = () => {
        this.setState({
            seccion: 'declaraciones',
        });
    };

    cargarSeccionN = () => {
        this.setState({
            seccion: 'noticias',
        });
    };

    cargarSeccionL = () => {
        this.setState({
            seccion: 'licencias',
        });
    };

    render() {

        const { seccion } = this.state;

        return (
            <div className="seccion_menu">
                <div className="seccion">
                    <h2>Docentes</h2>

                    <div className="btn" onClick={this.cargarSeccionN}>
                        Nuevos Docentes
                    </div>
                    <div className="btn" onClick={this.cargarSeccionD}>
                        Formularios
                    </div>
                    <div className="btn" onClick={this.cargarSeccionL}>
                        Licencias
                    </div>
                </div>

                {seccion === 'declaraciones' && <Formularios />}
                {seccion === 'noticias' && <NoticiasDocentes />}
                {seccion === 'licencias' && <Licencias />}
            </div>
        );
    }
}

export default Docentes;
