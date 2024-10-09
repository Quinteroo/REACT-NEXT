import React from "react"
import { useReducer } from "react";
import "./Calculator.css"

import { INITIAL_STATE, calculatorReducer } from "./utils/reducer";




const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE)


}



export default Calculator