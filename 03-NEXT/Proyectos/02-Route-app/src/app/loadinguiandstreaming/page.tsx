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



//! Streaming with Suspense
// Además de loading.js, también puedes crear manualmente límites de Suspense para tus propios componentes de UI

// esto sucede cuando tienes que renderizar componentes con distintos estados de carga,
// para evitar que el componente más pesado arraste la renderización del resto de compoenntes, podemos incluir "loadings"
// independientes entre ellos para que se vayan rendereizando de manera independiente, evitando los bloqueos

//! conclusión
// le permite dividir el HTML de la página en fragmentos más pequeños y enviar progresivamente esos 
// fragmentos desde el servidor al cliente.