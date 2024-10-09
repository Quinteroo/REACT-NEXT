const INITIAL_STATE = {
  firstValue: 0,
  secondValue: 0,
  operator: "",
  Result: 0,
  historicResults: []
}

export const calculatorReducer = (state, action) => {

  /*const action = {
   type: "lo que sea"  //! action es un objeto
  } */

  switch (action.type) {
    case "SUMAR":
      return {
        ...state,
        points: state.points + 1
      };
    case "RESTAR":
      return { ...state, points: state.points - 1 };
    case "SIGUIENTE_NIVEL":
      return { ...state, levels: state.levels + 1 };
    case "RELLENAR_COUNTRIES":
      return { ...state, countries: ["country1", "country2"] };
    default:
      return state;
  }
}