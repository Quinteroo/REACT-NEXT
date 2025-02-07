import React from 'react'


export default function Loading() {
  
  return (
    <main>
      <h1>Loading...</h1>
    </main>
  )
}


//! Loading
// durante el proceso de carga del componente se estaría renderizando este loading

// El archivo especial loading.jste ayuda a crear una interfaz de usuario de carga significativa con React Suspense
// De esta manera, puede mostrar un estado de carga instantáneo desde el servidor mientras se carga el contenido de un segmento de ruta