

//! Hook useMemo (no Memo)
// useMemo es un hook de React que se utiliza para memoizar valores calculados en componentes funcionales.
//* En diferencia con React.memo que memoiza componentes para evitar su renderizado innecesario, useMemo memoiza
//* valores computados para evitar recalcularlos en cada renderizado del componente.




//! Concepto de useMemo
// Imaginémonos de nuevo nuestro componente App, en este caso, no tiene componentes hijos, sin embargo, seguimos teniendo
// el estado timer que actualiza el componente App por cada segundo.

// Y esto provoca que un cálculo costoso como una ordenación de cientos de datos se ejecute una y otra vez y se estén
// recalculando los datos continuamente.

//? https://images.thepowermba.com/production/f1a605e1-9de0-4cfd-a1e3-1c994df02f31.jpg



//! Ejemplo de useMemo
// Para evitar que este cálculo se realizase repetidas veces y por lo tanto nuestro equipo "sufra" realizando estos
// cálculos una y otra vez podemos envolver la funcionalidad de filtrado en este caso con el hook useMemo de React,
// que si le indicamos en el array de dependencias que depende de data, únicamente se volverá a ejecutar la función
// de filtrado cuando data cambie.

// En cualquier otro caso no volverá a calcularse.

// El array de dependencias y la sintaxis funcionaría igual que en el useEffect que vimos con anterioridad, pero se
// utilizan con fines diferentes.

import { useMemo } from 'react';

function App({ data }) {

  // imaginar aquí: estado timer... y re-renderización de componente provocada por el mismo 

  const filteredList = useMemo(() => {
    // Realizar un cálculo costoso para filtrar la lista
    return data.filter(item => item > 10);
  }, [data]);

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
