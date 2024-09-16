import React from 'react'

import { useParams } from "react-router-dom"



const useParamsEnComponenteHijo = () => {

  const { id } = useParams()  //! con useParams (método propio de react-router-dom)
  //! somos capaces de recoger información enviada en to=" " del link del componente

  return (
    <div>useParamsEnComponenteHijo</div>
  )
}

export default useParamsEnComponenteHijo