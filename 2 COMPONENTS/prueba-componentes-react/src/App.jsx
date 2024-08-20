// import { useState } from 'react'


import './App.css'
import Greetings from './components/Greetings'
import Button from './components/button/Button'

function App() {
  const name = 'Miguel'
  const wheelCar = 4
  const x = 10


  return (

    <div>
      <h1>Hola {name}</h1>
      <p>¿cuantas ruedas tiene mi coche si ya tengo 1? = {wheelCar + 1} </p>
      <p>{x < 12 ? "buenos días" : "buenas noches"}</p>
      <Greetings name="Miguel" surname="Quintero" />
      <Button />
    </div>
  )
}

export default App
