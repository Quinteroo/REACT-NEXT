import "./Character.css"
import React, { useEffect, useState } from "react"

const Character = () => {
  const [character, setCharacter] = useState([])
  const [rotated, setRotated] = useState(false)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res.results)
      })

  }, [])

  function rotateImage(id) {
    const updatedRotation = { ...rotated }; // Crear una copia del estado actual
    updatedRotation[id] = !updatedRotation[id]; // Alternar la rotación para el ID dado
    setRotated(updatedRotation); // Actualizar el estado con la nueva rotación
  }

  return (
    <div>
      {character.map((e) => (
        <img
          key={e.id}
          src={e.image}
          onClick={() => rotateImage(e.id)}
          className={rotated[e.id] ? "rotated" : ""}

        />
      ))}
    </div>
  )


}

export default Character