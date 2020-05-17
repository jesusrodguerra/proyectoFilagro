import React from 'react';
import ImagenPoducto from '../ImagenPoducto.png'

const Cards = () => {
    return ( 

        <div id="tarjetas">
            <div className="row">
                {/* Producto 1 */}
                <div className="col-sm-4">
                    <div className="card" style={{width: 300 + 'px'}}>
                        <img className="card-img-top" src={ImagenPoducto} alt="Producto1"></img>
                            <div className="card-body">
                                <h4 className="card-title">Producto 1</h4>
                                <p className="card-text">Este producto tiene las caracteristicas descritas en este texto</p>
                                <a href="#home" className="btn btn-primary">Saber mas</a>
                            </div>
                    </div>
                </div>
                {/* Producto 2 */}
                <div className="col-sm-4">
                    <div className="card" style={{width: 300 + 'px'}}>
                        <img className="card-img-top" src={ImagenPoducto} alt="Producto2"></img>
                        <div className="card-body">
                            <h4 className="card-title">Producto 2</h4>
                            <p className="card-text">Este producto tiene las caracteristicas descritas en este texto</p>
                            <a href="#home" className="btn btn-primary">Saber mas</a>
                        </div>
                    </div>
                </div>
                {/* Producto 3 */}
                <div className="col-sm-4">
                    <div className="card" style={{width: 300 + 'px'}}>
                        <img className="card-img-top" src={ImagenPoducto} alt="Producto3"></img>
                            <div className="card-body">
                                <h4 className="card-title">Producto 3</h4>
                                <p className="card-text">Este producto tiene las caracteristicas descritas en este texto</p>
                                <a href="#home" className="btn btn-primary">Saber mas</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Cards;