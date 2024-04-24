import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Importa tus componentes
import Menu from './Menus/Menu';
import Inicio from './Menus/Inicio';
import Alumnos from './Menus/Alumnos';
import AcuerdosEscolares from './Menus/Acuerdos Escolares';
import Docentes from './Menus/Docentes';

import Cpem41 from './Cpem41';
import Footerr from './Footerr';

import TurnoDiurno from './Alumno/TD/TurnoDiurno';
import TurnoVespertino from './Alumno/TV/TurnoVespertino';

import Iniciarsession from './Usuariosphp/session/Iniciarsession';
import Panel from './Usuariosphp/Panel';

const IndexPrincipal = () => {
  
    return (
        <div>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path="/" element={<Cpem41 />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/alumno" element={<Alumnos />} />
                    <Route path="/acuerdos-escolares" element={<AcuerdosEscolares />} />
                    <Route path="/docentes" element={<Docentes />} />

                    <Route path="/Alumno/TD/TurnoDiurno" element={<TurnoDiurno />} />
                    <Route path="/Alumno/TV/TurnoVespertino" element={<TurnoVespertino />} />

                    <Route path="/usuariosphp/Inicio" element={<Iniciarsession />} />
                    
                    <Route path='/usuariosphp/Panel' element={<Panel/>} />
                    


                </Routes>

                <Footerr />
            </BrowserRouter>
        </div>
    );
};

export default IndexPrincipal;
