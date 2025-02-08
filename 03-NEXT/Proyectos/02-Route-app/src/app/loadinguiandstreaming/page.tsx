import ComponentA from '@/components/componentA/page'
import ComponentB from '@/components/componentB/page'
import React, { Suspense } from 'react'



// ruta
// /loadinguiandstreaming


function LoadingUIandStreaming() {
  return (
    <div>
      <h2>LoadingUIandStreaming Page</h2>

      <Suspense fallback={<p>Loading feed...</p>}>
        <ComponentA />
      </Suspense>

      <Suspense fallback={<p>Loading weather...</p>}>
        <ComponentB />
      </Suspense>

    </div>
  )
}

export default LoadingUIandStreaming

//! ¿Qué es el Streaming?
// Para aprender cómo funciona el streaming en React y Next.js, es útil //* comprender la representación del lado del servidor (SSR) 
// y sus limitaciones.

// Con SSR, hay una serie de pasos que deben completarse antes de que un usuario pueda ver e interactuar con una página:

// 1. En primer lugar, todos los datos de una página determinada se obtienen en el servidor.
// 2. Luego, el servidor procesa el HTML de la página.
// 3. El HTML, CSS y JavaScript de la página se envían al cliente.
// 4. Se muestra una interfaz de usuario no interactiva utilizando el HTML y CSS generados.
// 5. Finalmente, React hidrata la interfaz de usuario para hacerla interactiva.

// Estos pasos son secuenciales y bloqueantes, lo que significa que el servidor solo puede renderizar el
//  HTML de una página una vez que se han obtenido todos los datos. Y, en el cliente, React solo puede 
//  hidratar la interfaz de usuario una vez que se ha descargado el código de todos los componentes de la página.



//! Streaming with Suspense
// Además de loading.js, también puedes crear manualmente límites de Suspense para tus propios componentes de UI

// esto sucede cuando tienes que renderizar componentes con distintos estados de carga,
// para evitar que el componente más pesado arraste la renderización del resto de compoenntes, podemos incluir "loadings"
// independientes entre ellos para que se vayan rendereizando de manera independiente, evitando los bloqueos

//! conclusión
// le permite dividir el HTML de la página en fragmentos más pequeños y enviar progresivamente esos 
// fragmentos desde el servidor al cliente.