"use client"

import React from 'react'

import { useRouter } from 'next/navigation'

function NavegationImperativa() {

  const router = useRouter()

  function handlerClick(){
    router.push("/users")
  }


  return (
    <div>
      <button onClick={handlerClick}>
        GO to UserPage
      </button>
      <button onClick={()=>router.push("/users/posts")}>
        GO to PostPage
      </button>
    </div>
  )
}

export default NavegationImperativa

//! button - navegación imperativa
// aveces vamos a querer viajar entre rrutas no por medio de links si no por la acción del click en un botón

//! useRouter
// es un hook de Next que nos permite navegar de esta manera
// al ser un hook hay que declarar el "use client" arriba del archivo

//! HanderClick
// podemos manejar el click si necesita unas funciones especiales por medio de un handlerClick
// o declarando directamente la función en el onClick
