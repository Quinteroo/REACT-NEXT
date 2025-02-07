import React, { ReactNode } from 'react'

function UserLayout({children,}: Readonly<{children: ReactNode;}>) {


  return (
    <div>
      <h2>Ruta de Usurario</h2>
      {children}
    </div>
  )
}

export default UserLayout

//! UserLayout
// http://localhost:3000/users
// es una raíz anidada, por lo que va a volcar el archivo UI page en children


//! template
// los compoennte page.tsx solo se rendeizan una vez mientras se esté navegando dentro de la misma root
// es decir, que si estamos navegando por users/ solo se renderizan una vez los componentes a medidda que estemos navegando por las 
// subcarpetas de users/

// si necesitaramos de alguna manera forzar a que se desmonte algo
// podemos hacerlo con la declaración de un template

// es un compoentne especial que tiene el mismo aspecto que los componentes Layout, es decir, encapsulan a los {children}