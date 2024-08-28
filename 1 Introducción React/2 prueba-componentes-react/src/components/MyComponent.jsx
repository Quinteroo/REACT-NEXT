import React from "react";



//1. Los componentes se definen en funciones que nacen y mueren en cada renderización
const MyComponent = () => {


  //2. memoria de datos: los hooks como useState nos permiten guardar datos transversales que vamos a usar en toda la app
  const [value,] = React.useState("Miguel")  //,setValue


  //3. mi componente retorna un elemento React, es decir, un JSX
  return (
    <div>
      <h1>hola {value}</h1>
    </div>
  )


}

export default MyComponent