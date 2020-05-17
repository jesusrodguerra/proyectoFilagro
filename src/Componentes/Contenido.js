import React, {Fragment} from 'react';
import ImagenHEader from '../ImagenHEader.jpg'

const Contenido = () => {
    return ( 

        <Fragment>
        
            <div id="home" className="container jumbotron content">
                <div className="row">
                    <div className="col-sm inicio">
                        <h4 className="eslogan">Aqui va <br/> el eslogan</h4>
                        <div><a href="#aboutUs" type="button" className="btn btn-primary" style={{marginBottom: 15 + 'px'}}>Sobre Filagro</a></div>
                    </div>
                    <div className="col-sm">
                        <img className="img-fluid imagenHeader" src={ImagenHEader} alt="ImagenDemostrative"></img>
                    </div>
                </div>
            </div>

        </Fragment>
 

     );
}
 
export default Contenido;