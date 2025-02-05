


//! Hook useRef
// useRef es un hook de React que proporciona una forma de mantener una referencia mutable a un objeto a lo largo del
// ciclo de vida de un componente funcional. A diferencia del estado (useState), los cambios en un objeto ref no provocan
// que el componente se vuelva a renderizar. Por lo tanto, useRef es útil para mantener referencias a elementos del DOM,
// valores que no deben afectar el renderizado, o para persistir datos entre renderizados sin causar que el componente
// se actualice.





//! Concepto / Ejemplo de useRef
// En este ejemplo, queremos ver el valor de un input cuando hagamos click en el botón Enviar.
// Para conseguirlo hemos utilizado un estado que se actualiza cada vez que el input cambia de valor.
// Esto es un problema ya que si escribes una frase larga se re-renderizaría el componente por cada letra...


import { useState } from 'react';
import './UseRef.css';

const UseRef = () => {

  const [inputValue, setInputValue] = useState("");

  const getInputValue = () => {
    console.log(inputValue);
  }

  console.log("SOY USEREF Y ME RE-RENDERIZO");

  return (
    <div className='useref'>
      <input onInput={(e) => setInputValue(e.target.value)} />
      <button onClick={getInputValue}>Enviar</button>
    </div>
  );
};

export default UseRef;


// Entonces en lugar de utilizar un useState preferiremos en este caso el uso del hook useRef.

// Esto nos permitirá crear una referencia, esta referencia se la indicaremos al input, de esta manera, guardaremos
// la referencia de nuestro input del DOM.

// Gracias a esta referencia podremos acceder al valor del elemento en cualquier momento, por lo tanto, nuestro
// componente no se re-renderizará por cada cambio en el input pero seguiremos pudiendo ver perfectamente el valor
// del input al pulsar el botón en la consola.
