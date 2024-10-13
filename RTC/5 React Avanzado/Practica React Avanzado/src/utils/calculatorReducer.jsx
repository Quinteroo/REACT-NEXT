

const INITIAL_STATE = {
  firstValue: 0,
  secondValue: 0,
  result: 0,
  historicResult: []
}

const calculatorReducer = (state, action) => {

  switch (action.type) {
    case "SUMAR":

      return {
        ...state,
        result: firstValue + secondValue
      }

    default:
      break;
  }


}