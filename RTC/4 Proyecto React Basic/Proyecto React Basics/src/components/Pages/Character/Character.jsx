import { useEffect, useState } from "react"
import "./Character.css"

import { useParams } from "react-router-dom"
import Loading from "../../Loading/Loading"


const Character = () => {

  const { id } = useParams()
  const [character, setCharacter] = useState(null)


  useEffect(() => {
    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters/${id}`)
      .then((res) => res.json())
      .then((res) => setCharacter(res))
  }, [])



  if (!character) {
    return <Loading />
  }


  return (
    <div className="character-profile" >
      <div className="div-character-image">
        <img src={character.image} alt="character-image" />
      </div>
      <div className="div-info">
        <h2>{character.name}</h2>
        <p>{character.description}</p>

      </div>

    </div>
  )
}

export default Character