import React from 'react';
import {CalcularpH} from '../Helper'

const Simulador = ({valor1, guardarValor1, valor2, guardarValor2, litros, guardarLitros, guardarResultados, guardarCargando}) => {

    const funcionBoton = (e) => {
        e.preventDefault()

        if( valor1 === "" || valor2 === ""){
            console.log('vacio')
        } else {

            guardarCargando(true)

            setTimeout(() => {
                guardarCargando(false)
                const mostrar = CalcularpH(valor1, valor2, litros)
                guardarResultados(mostrar)
                
            }, 2000);

        }

    }

    return ( 

        <div id="ingresaValores">
            <form onSubmit={funcionBoton}>
                <label>Carbonato</label>
                <input type="float" className="form-control form-control" required onChange = {(e) => {guardarValor1(parseFloat(e.target.value))}}/>
                <label>Bicarbonato</label>
                <input type="float" className="form-control form-control" required onChange = {(e) => {guardarValor2(parseFloat(e.target.value))}}/>
                <label>Selecciona los litros a usar</label>
                <select name="litros" className="custom-select" onChange = {(e) => {guardarLitros(parseInt(e.target.value))}}>
                    <option value="">Litros</option>
                    <option value="600">600 lts</option>
                    <option value="400">400 lts</option>
                    <option value="200">200 lts</option>
                    <option value="20">20 lts</option>
                </select>
                <button type="submit" className="btn btn-dark btn-calcular">Calcular</button>
            </form>
        </div>

     );
}
 
export default Simulador;