import React, { createContext, useState } from "react"


export const AppContext = React.createContext()


const AppProvider = ({ children }) => {


  const [inputValue, setInputValue] = useState({
    first: "",
    operator: "",
    second: "",
    historic: []
  })

  return (
    <AppContext.Provider value={{ inputValue, setInputValue }}>
      {children}

    </AppContext.Provider>
  )


}


export default AppProvider