import React, { ReactNode, Suspense } from 'react'
import Loading from './loading';



function LoadingUIandStreamingLayout({children,}: Readonly<{children: ReactNode;}>) {
  return (
    <div>
      <h1>Loading Layout</h1>
      <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
    </div>
  )
}

export default LoadingUIandStreamingLayout

//! Suspense
// En la misma carpeta, loading.jsse anidará dentro de layout.js. Envolverá automáticamente el page.jsarchivo 
// y cualquier elemento secundario que se encuentre debajo en un <Suspense>límite.

