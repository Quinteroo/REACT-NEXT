

//! Hook useReducer
// useReducer es un hook de React que se utiliza para gestionar el estado de un componente de una manera más compleja
// y estructurada, especialmente cuando el estado tiene una lógica más avanzada o cuando hay dependencias entre diferentes
// partes del estado. En lugar de manejar múltiples estados individuales con useState, useReducer te permite manejar el
// estado mediante una función reductora.

// Este hook cuanto mayor es nuestro proyecto y más código tiene será mejor utilizarlo, ya que básicamente mejora la
// escalabilidad de nuestro proyecto permitiéndonos agrupar estados.




//! TIMING
// 02.00 explica que es un estado cocplejo
// 03.00 como funciona useReducer
// 05.30 compara cn REdux
// 06.30 escribe una función reducer
// 10.00 empieza un proyecto para explicar bien su uso
// un TO-DO list
// 11.00 modifica fucntion App()
// 12.30 explica librería uiid para generar uid
// 32.00 termina de probar funcionalidad app
// 32.40 empieza con el estilado


//! Concepto de useReducer
// Fijándonos en el ejemplo anterior o en cualquier ejemplo que pudiéramos poner sobre useReducer, podremos dividir lo que
//  hemos visto en 3 apartados.

// Por un lado tenemos el Componente, donde se siguen pintando elementos de HTML y que principalmente se encarga de mostrar
// información.

// Por otro lado tenemos las acciones, que serán funciones que tenemos que llevar a cabo para cambiar la información del
// componente, como las funciones handleChange, click y toggle que tenemos en el ejemplo.

// Y por último el Reducer, que será una función reductora que nos permitirá realizar cambios a nuestros estados de manera
// más agrupada y sencilla con el uso del dispatch

//? https://images.thepowermba.com/production/28e2ba41-fc06-41bb-b3a6-fffabd4f8aa8.jpg




//! Otro ejemplo de useReducer
// Este suele ser el ejemplo más sencillo con el que se suele explicar useReducer, sin embargo, no significa que tengáis
//  que utilizar useReducer en todos vuestros componentes por muy poca funcionalidad que tengáis.

// Lo mejor será utilizarlo en momentos adecuados, normalmente, cuando tenemos varios estados pertenecientes a un mismo
//  componente que podemos agrupar para crear nuestro reducer y su funcionalidad.

// También nuestro reducer nos lo podemos llevar a otro archivo, exportarlo y usarlo para tener una mayor legibilidad
//  en nuestros archivos


import React, { useReducer } from 'react';

// Definición del reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // Uso de useReducer con el reducer y el estado inicial
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementar</button>
    </div>
  );
};

export default Counter;



