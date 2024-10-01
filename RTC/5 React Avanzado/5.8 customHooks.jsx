


//! Custom Hooks
// Por si no fuera suficiente, también podremos crear nuestros propios Hooks.

// Un custom Hook simplemente será una función, pero ya os hemos contado que los componentes son una función, las
// propias funciones son una función, el custom Hook es una función, entonces, ¿en que se diferencian estos?

// 1️⃣ Función: Podemos utilizar funciones normales en React, una función se considerará como tal cuando NO retorne
// contenido de JSX y NO tenga declaraciones de hooks de React en su interior

// 2️⃣ Componente: Un componente es una función que SI retorna contenido de JSX y que SI puede tener declaraciones de
// hooks de React en su interior

// 3️⃣ Custom Hook: Un custom hook es una función que NO retorna contenido de JSX pero que SI puede tener declaraciones
// de hooks de React en su interior.


//! Ejemplo de Custom Hooks
// Este contenido lo podemos dividir en diferentes archivos utilizando módulos de importación y exportación 
// como siempre hacemos.

// Con el uso de Custom Hooks podremos reutilizar ciertas funcionalidades de manera mucho más cómoda y sin 
// necesidad de repetir código.

// Por convención todo hook llevará la palabra "use" delante.

import { useState } from 'react';

// Custom hook: useInput
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

// Componente que utiliza el custom hook
const InputComponent = () => {
  const { value, onChange } = useInput('');

  return <input value={value} onChange={onChange} />
};


//! TIMEING CONTENIDO
// 02.00 crea proyecto
// 03.00 carpeta Hooks
//
//




//! Conclusión
// Los Hooks avanzados pueden darnos ese plus de escalabilidad o performance en nuestras páginas, sin embargo,
// intentaremos no utilizarlos a la ligera.

// Será mejor no utilizar ningún hook avanzado que usarlos mal, pero lo suyo es intentar pensar siempre en la
// escalabilidad de nuestro proyecto y en la performance de las re-renderizaciones provocadas por nuestros estados.






