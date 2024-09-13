import "./componenteExtraído.css"

const componenteExtraído = ({ e }) => {

  <div className="character-card">
    <div className="div-character-name">
      <h2>{e.name}</h2>
    </div>
    <div className="img-wrp">
      <img
        src={e.image}
        alt={e.name}
      />
    </div>
  </div>



}

export default componenteExtraído