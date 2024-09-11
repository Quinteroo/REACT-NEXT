// eslint-disable-next-line no-unused-vars
import React from "react"
import "./Characters.css"
import { useState, useEffect } from "react"





const Characters = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=20")
      .then((res) => res.json())
      .then((res) => { setCharacters(res.data) });
  }, [])



  return (
    <div className="image-character-container">
      {characters.map((e) => (
        <img className="image-character"
          key={e._id}
          src={e.image}
        />
      ))}
    </div>



  )

}



export default Characters