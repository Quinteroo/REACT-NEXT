import React from "react";


let count = 0

const ButtonSumar = () => {

  function Sumar(number) {
    count = number + 1

    return console.log(count);
    ;

  }

  return (
    <button onClick={() => Sumar(count)}>
      SUMAR
    </button>
  )


}

export default ButtonSumar