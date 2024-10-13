import { useRef, memo, useReducer, useCallback } from "react";
import "./Calculator.css";

const INITIAL_CALCULATOR_STATE = {
  n1: 0,
  operation: "",
  n2: 0,
  result: 0,
  historicResults: [],
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPERATION":
      return {
        ...state,
        n1: parseFloat(action.payload.inputValue), // convierte a número
        operation: "+",
      };
    case "RESULT":
      const result = state.operation === "+"
        ? state.n1 + parseFloat(action.payload.inputValue)
        : state.result;

      return {
        ...state,
        n2: parseFloat(action.payload.inputValue),
        result,
        historicResults: [...state.historicResults, result],
      };
    default:
      return state;
  }
};



const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_CALCULATOR_STATE);
  const input = useRef();

  const { result, operation, n1, n2, historicResults } = state;

  const setOperation = useCallback(
    (operation) => {
      dispatch({
        type: "SET_OPERATION",
        payload: { inputValue: input.current.value, operation: operation },
      });
      input.current.value = "";
    },
    [operation]
  );

  //! En React, los componentes despachan las acciones, y cuando lo hacen, proporcionan los datos 
  //! necesarios en action.payload. El reducer simplemente recibe estos datos y actualiza 
  //! el estado basándose en ellos.

  return (
    <div className="calc">
      <input type="number" ref={input} />
      <div className="operations">
        <button onClick={setOperation("+")}>+</button>
        <button onClick={() => {/* Otras funciones */ }}>-</button>
        <button onClick={() => {/* Otras funciones */ }}>X</button>
        <button onClick={() => {/* Otras funciones */ }}>/</button>
        <button onClick={() => {/* Otras funciones */ }}>%</button>
        <button onClick={handleResult}>=</button>
      </div>
      <h2>Último resultado: {result}</h2>
      <div className="historic">
        <h2>Resultados históricos</h2>
        {historicResults.length > 0 && (
          historicResults
            .slice() // Clonamos el array para evitar mutaciones
            .sort((a, b) => a - b) // Ordenamos los resultados de menor a mayor
            .map((res, index) => (
              <p key={index}>{res}</p>
            ))
        )}
      </div>
    </div>
  );
};

export default memo(Calculator);

