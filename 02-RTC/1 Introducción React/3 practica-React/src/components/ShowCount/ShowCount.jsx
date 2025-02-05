import React from "react";
import "./ShowCount.css"

export function ShowCount() {

  const [count, setCount] = React.useState(0)


  return (
    <div>
      <p>you clicked here <strong>{count}</strong> time</p>
      <button onClick={() => setCount((count) => count - 1)}>
        RESTAR
      </button>
      <button onClick={() => setCount((count) => count + 1)}>
        SUMAR
      </button>
    </div>

  )
}

