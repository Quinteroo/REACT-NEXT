import "./Calculator.css"
import React from "react"


const Calculator = () => {
  console.log("renderizado CALCULATOR");



  return (
    <div className="calc">
      <input type="number" />
      <div className="operations">
        <button onClick={() => {/*Función al hacer click*/ }}>+</button>
        <button onClick={() => {/*Función al hacer click*/ }}>-</button>
        <button onClick={() => {/*Función al hacer click*/ }}>X</button>
        <button onClick={() => {/*Función al hacer click*/ }}>/</button>
        <button onClick={() => {/*Función al hacer click*/ }}>%</button>
        <button onClick={() => {/*Función al hacer click*/ }}>=</button>
      </div>
      <h2>Último resultado: {/*Aquí irá el resultado*/}</h2>
      <div className="historic">
        <h2>Resultados históricos</h2>
        {/*aquí mapearemos nuestros resultados históricos ordenados para pintarlos*/}
      </div>
    </div>
  );
}

export default Calculator