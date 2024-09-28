//! Hook useCallback
// useCallback es un hook de React que se utiliza para memoizar funciones, evitando que estas se vuelvan a crear
// en cada renderizado del componente. Este hook es útil cuando pasas funciones como propiedades a componentes hijos,
// ya que ayuda a evitar que estos componentes hijos se vuelvan a renderizar innecesariamente.


//! timing contenido
// 00.02 crea proyecto, limpia y crea compoennete
// 00.03 usa useCallback
// 00.04 pasa funcion a componente hijo
//

import React, { useCallback } from 'react'

const MyComponent = ({ props }) => {    //! esto es una estructura clásica

  const callback = () => {
    return "result"
  }

  const memoizedCallback = useCallback(callback, [props]) //! la función está memoizada, y nunca va a cambiar a menos que entre algo por props
  //* es decir, [props] es el array de dependencia , es decir que por más que se rerenderice el componete no se creara una nueva función

  return (
    <ChildComponent callback={memoizedCallback} />
  )
}

export default MyComponent



// 05.00 verificación de igualdad de funciones