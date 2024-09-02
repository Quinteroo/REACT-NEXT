import React from "react";
import "./Button.css"
import { saludar } from "../SayHello/SayHello";


const Button = () => {

  return (
    <button onClick={saludar}>
      <p>Haz click aquí</p>
    </button>
  )
}

export default Button