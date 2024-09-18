import React from 'react'
import "./CharacterCard.css"

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card" >
      <div className="div-character-name">
        <h2>{character.name}</h2>
      </div>
      <div className="img-wrp">
        <img
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  )
}

export default CharacterCard