import React, { useState, useEffect } from "react"


export const ThemeContext = React.createContext()



const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "false" ? false : true
    //! Los valores en localStorage siempre se almacenan como cadenas, así que "false" es una 
    //! cadena y no un booleano. Por eso, es importante hacer la comparación con "false" (entre comillas) 
    //! para interpretarlo correctamente.
  )



  useEffect(() => { //! de esta manera guardamos en el localStorage el valor, por lo que antes de pasarlo por el provider,
    //! este verifica si hay ya un valor guardado prevamente

    localStorage.setItem("theme", theme)
  }, [theme])



  return (
    <ThemeContext.Provider value={{
      theme: theme,
      setTheme: setTheme
    }}>
      {children}
    </ThemeContext.Provider>

  )

}

export default AppThemeProvider