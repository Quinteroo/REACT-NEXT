import React from 'react'

//! el abuso de uso de memos, puede que haya un abuso de comprobaciones para no re-renderizar y relentizamos nuestra app

const Movies = React.memo(({ title, poster }) => { //! tenemos que envolver TODO el componente para que no se renderice otroa vez

  console.log("renderizando Movies");


  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} />
    </div>
  )
})

export default Movies