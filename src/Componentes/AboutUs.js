import React from 'react';
import Hojas from '../Hojas.jpg'

const AboutUs = () => {
    return ( 

        <div id="aboutUs" className="container jumbotron SobreNosotros">

            <div className="row">
                <div className="col">
                    <img className="" id="imgHojas" src={Hojas} alt="Hojas"></img>
                </div>

                <div className="col">
                    <h1>Sobre Nosotros</h1>
                    <p>En esta area se desarrolla todo el contenido con respecto a labores de la empresa, deberes, desarrollos.</p>
                    <div className="btnCompartir">
                        <div className="share-button">
                            <span className="fas fa-share-alt">Siguenos</span>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;