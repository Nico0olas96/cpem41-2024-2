import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menuIcono from '../Imagenes/menu.png';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false, 
        };
    }

    verMenu = () => {
        this.setState((prevState) => ({
            menuOpen: !prevState.menuOpen,
        }));
    };

    closeMenu = () => {
        this.setState({ menuOpen: false });
    };

    render() {

        const { menuOpen } = this.state;


        return (

            
            <div>
                <div className='menu container'>

                    <Link to="/" className="logo" alt="Logo-Cpem41">
                        Cpem41
                    </Link>

                    <input type='checkbox' id='menu' checked={menuOpen} onChange={this.verMenu} />

                    <label htmlFor='menu'>
                        <img src={menuIcono} className='menu_icono' alt='' />
                    </label> 
                    
                    <label htmlFor='menu'>
                        <Link to="/" className="menu_icono" alt="Logo-Cpem41" onClick={this.closeMenu}>
                            Cpem41
                        </Link>
                    </label>

                    <nav className={`nav_menu ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <Link to="/inicio" onClick={this.closeMenu}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100063963467679"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    onClick={this.closeMenu}>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <Link to="/alumno" onClick={this.closeMenu}>
                                    Alumno
                                </Link>
                            </li>
                            <li>
                                <Link to="/acuerdos-escolares" onClick={this.closeMenu}>
                                    Acuerdos Escolares
                                </Link>
                            </li>
                            <li>
                                <Link to="/docentes" onClick={this.closeMenu}>
                                    Docentes
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Menu;