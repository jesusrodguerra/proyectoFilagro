import React, {Fragment, useState} from 'react';
import Header from './Componentes/Header';
import Contenido from './Componentes/Contenido'
import Cards from './Componentes/Cards'
import Simulador from './Componentes/Simulador'
import Resultados from './Componentes/Resultados'
import Spinner from './Componentes/Spinner'
import Mensaje from './Componentes/Mensaje'
import AboutUs from './Componentes/AboutUs'
import Footer from './Componentes/Footer'

function App() {

  const [valor1, guardarValor1] = useState("");
  const [valor2, guardarValor2] = useState("");
  const [litros, guardarLitros] = useState("");
  const [resultados, guardarResultados] = useState("");
  const [cargando, guardarCargando] = useState(false);

  let componente;
  if(cargando){
    componente = <Spinner/>
  } else if(resultados === "") {
    componente = <Mensaje/>
  } else {
    componente = <Resultados 
                  resultados = {resultados}
                  guardarResultados = {guardarResultados}
                  />
  }



  return (
    <Fragment>
      <Header/>
      <Contenido/>
      <div id="tarjetas" className="container jumbotron">
        <Cards/>
      </div>

      <div className="container jumbotron">
        <h2 className="result" style={{marginBottom: 20 + 'px'}}>Calculador de pH</h2>
        <div className="row">
          <div className="col-sm">
            <Simulador
              valor1 = {valor1}
              guardarValor1 = {guardarValor1}

              valor2 = {valor2}
              guardarValor2 = {guardarValor2}

              litros = {litros}
              guardarLitros = {guardarLitros}

              resultados = {resultados}
              guardarResultados = {guardarResultados}

              guardarCargando = {guardarCargando}

            />
          </div>
          <div className="col-sm result">
            <h3>Resultado</h3>

                {componente}
          </div>

        </div>
      </div>
      <AboutUs/>
      <Footer/>
    </Fragment>
      

  );
}

export default App;
