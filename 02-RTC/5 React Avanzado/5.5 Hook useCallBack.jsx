


//! Hook useCallback
// useCallback es un hook de React que se utiliza para memoizar funciones, evitando que estas se vuelvan a crear
// en cada renderizado del componente. Este hook es útil cuando pasas funciones como propiedades a componentes hijos,
// ya que ayuda a evitar que estos componentes hijos se vuelvan a renderizar innecesariamente.



//! Concepto de useCallback
// Podemos reutilizar el concepto del useMemo ya que serán bastante parecidos.

// La sintaxis será la misma que la del useEffect o el useMemo, sin embargo, useCallback se utiliza para englobar
// declaraciones de funciones para que estas no vuelvan a declararse innecesariamente.


//? https://images.thepowermba.com/production/0bbba53c-efa2-402f-bd7c-ae120407a420.jpg


//! Ejemplo de useCallback
// Puede ser cualquier tipo de función, por eso mismo no ponemos un ejemplo en específico.

// El uso de useCallback aquí nos está permitiendo ahorrar recursos ya que la función que contiene no se vuelve a
// declarar nunca y por lo tanto no vuelve a realizar todo el proceso de guardado de la función en memoria.



import { memo, useCallback, useState } from 'react';
import './UseCallback.css';

const UseCallback = () => {

  const [numero, setNumero] = useState(0);

  const fnc = useCallback(() => {
    // el código de nuestra función que no queremos que se vuelva a declarar
  }, []);

  return (
    <div className="usestate">
      <button onClick={() => setNumero(numero - 1)}>-</button>
      <h1 onClick={fnc}>{numero}</h1>
      <button onClick={() => setNumero(numero + 1)}>+</button>
    </div>
  );
};

export default UseCallback;

//! timing contenido
// 00.02 crea proyecto, limpia y crea compoennete
// 00.03 usa useCallback
// 00.04 pasa funcion a componente hijo
//

import React, { useCallback } from 'react'

const MyComponent = ({ props }) => {    //! esto es una estructura clásica

  const callback = () => {
    return "result"
  }

  const memoizedCallback = useCallback(callback, [props]) //! la función está memoizada, y nunca va a cambiar a menos que entre algo por props
  //* es decir, [props] es el array de dependencia , es decir que por más que se rerenderice el componete no se creara una nueva función

  return (
    <ChildComponent callback={memoizedCallback} />
  )
}

// export default MyComponent



// 05.00 verificación de igualdad de funciones
//* 10.00 cuando nos conviene usarCallback
// 11.30 ejemplo básico de cuando utilizar useCalback


import React, { useCallback, useState } from 'react'


const Counter = () => {

  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memoizedCountOne = useCallback(() => setCountOne(countOne), [countOne])
  const memoizedCountTwo = useCallback(() => setCountTwo(countTwo), [countTwo])

  //! memorizando la función de esta forma, evitamos que cuando el usuario 
  //! haga click en un botón, se rerenderice de nuevo todas las funciones,
  //! ya que estas tienen array de dependencias
  //* es decir, [props] es el array de dependencia , es decir que por más que se rerenderice el componete no se creara una nueva función


  return (
    <>
      <div>
        <h3>{countOne} || {countTwo}</h3>
        <Button HandleClick={memoizedCountOne} name="button+1" />
        <Button HandleClick={memoizedCountTwo} name="button+2" />
      </div>

    </>

  )


}



//! TIMING CONTENIDO - HOOK USECALLBACK AVANZADO
// 01.00 crea componente DeleteUser con memo, return un botón con unenvetno Onclick de una función callback
// 03.00 crea la función callback













