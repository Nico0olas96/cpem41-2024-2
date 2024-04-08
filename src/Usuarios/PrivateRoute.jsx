import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import PanelPrincipal from './PanelPrincipal';

const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
    
    return isAuthenticated ? (

    <Route {...rest} element={<PanelPrincipal/>} />
    // <Route {...rest} element={</>} />

  ) : (
    <Navigate to="/Usuarios/UsuariosPrincipal" replace={true} />
  );
};

export default PrivateRoute;
