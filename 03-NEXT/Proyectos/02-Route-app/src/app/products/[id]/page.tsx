
import React from 'react'

function ProductPage({params}:{params:{slug:string}}) { //!


  return (
    <div>ProductPage {params.id}</div>
  )
}

export default ProductPage


// export async function generateStaticParams() {
//   const response = await fetch("llamada a una api") //* <<
//   const data = await response.json()
//   return data.map((item) => ({id: item.id}))
  
// }



//! [id] rutas dinámicas
// de esta forma le decimos a Next que los datos del componente que renderiza con [id]/page.tsx depende del parámetro que se le pase

//! {params}:{params:{slug:string}}
// de esta forma le decimos a Next que puede extraer los  


//! generateStaticParams()
// con esta función declarada dentro de la misma page.tsx ayudamos aNext a decirle cuales son los datos que va a recibir
// es decir, le damos la posibilidad a Next de tener las rutas ya cacheadas de antemano


//* << comento el código porque si no no funciona (dado que no hay ninguna api en el ejemplo)