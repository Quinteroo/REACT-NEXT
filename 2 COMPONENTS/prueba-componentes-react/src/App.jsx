// import { useState } from 'react'

import './App.css'

function App() {
  const name = 'Miguel'
  const wheelCar = 4
  const x = 10


  return (

    <div>
      <h1>Hola {name}</h1>
      <p>¿cuantas ruedas tiene mi coche si ya tengo 1? = {wheelCar + 1} </p>
      <p>{x < 12 ? "buenos días" : "buenas noches"}</p>
    </div>
  )
}

export default App
