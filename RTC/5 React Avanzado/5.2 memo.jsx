//! Memoización
// Antes de empezar con estas herramientas vamos a familiarizarnos con 
// el concepto de memoización tal cual como lo vamos a ver en React.

// La memorización (o memoización) es una técnica de optimización que 
// se utiliza para almacenar en caché el resultado de una función 
// basándose en los argumentos de entrada. Cuando una función es 
// llamada con los mismos argumentos, en lugar de volver a ejecutar la 
// función, se devuelve el resultado almacenado en la caché. 
// Esto puede ser útil para evitar el costo computacional de ejecutar 
// una función múltiples veces con los mismos argumentos.


//! Memo
// Memo es una función de orden superior (HOC) que se utiliza para 
// memorizar (o memoizar) un componente de función. Su propósito 
// principal es evitar el renderizado innecesario de un componente 
// funcional cuando sus propiedades no han cambiado.

// Como bien sabemos, la idea de tener componentes y que estos a su 
// vez tengan estados, es realizar cambios que permitan re-renderizar 
// el componente, sin embargo, en ocasiones, esta re-renderización 
// provocada por los estados de nuestros componentes no siempre 
// queremos que re-rendericen todo el código de nuestro componente.

//! Concepto de Memo
// Imaginémonos que estamos renderizando dos componentes en nuestro 
// componente App.

// El componente App tiene un estado que se actualiza cada segundo, 
// ya que Hijo1 necesita pintar la hora actual con minutos y segundos.

// El componente Hijo2 está pintando cientos de datos.

// Que el estado de App cambie cada segundo provoca que tanto el 
// componente Hijo1 como el Hijo2, se re-rendericen cada segundo.

// Sin embargo Hijo2 no está cambiando, así que estamos malgastando 
// los recursos de nuestra página.

//? https://images.thepowermba.com/production/b461dccb-206a-43b5-8f2e-c8db66bf6b10.jpg


//! Ejemplo Memo
// Para evitar que el componente Hijo2 se re-renderice cuando App se 
// actualiza por su estado cada segundo, podemos utilizar React.memo o 
// memo directamente si lo importamos separado, envolviendo nuestro 
// componente.

// Esto provocará una memoización del componente, lo que recordará las 
// props del primer renderizado y si este componente se ve obligado a 
// re-renderizarse de nuevo por el cambio de App, comparará las props 
// que se había guardado con las "nuevas".

// Si son las mismas, el componente decidirá no re-renderizarse, es 
// decir, si no debe cambiar no se repinta y por lo tanto no 
// malgastaremos recursos.

// El componente Hijo1 se seguiría re-renderizando sin problema.

import React from 'react';

const Hijo2 = React.memo((props) => {
  // Renderizado del componente con cientos de datos pintados
});

