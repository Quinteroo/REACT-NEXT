


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



import { useCallback, useState } from 'react';
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


