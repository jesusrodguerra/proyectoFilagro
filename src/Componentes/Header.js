import React from 'react';

const Header = () => {
    return ( 

    <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
      
            <a className="navbar-brand" href="#home">Filagro</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#home">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#tarjetas">Contenido</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#ingresaValores">Calculos</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>

     );
}
 
export default Header;