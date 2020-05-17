import React from 'react';
import farm from '../farm.svg'

const Footer = () => {
    return ( 

        <footer>
            <p>Filagro, Todos los derechos Reservados</p>
            <img src={farm} style={{height: 50 + 'px'}}></img>
        </footer>
    
     );
}
 
export default Footer;