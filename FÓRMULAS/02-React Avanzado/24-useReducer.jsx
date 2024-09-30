//! usarlo cuando tenemos varios estados pertenecientes a un mismo componente que podemos agrupar para 
//! crear nuestro reducer y su funcionalidad.

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