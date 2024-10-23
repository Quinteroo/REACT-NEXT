import { Image } from "@chakra-ui/react"
import { ThemeContext } from "../../provider/ThemeProvider.jsx"
import React, { useState, useContext } from "react"



const ChangeTheme = () => {

  const { theme, setTheme } = useContext(ThemeContext)


  return (
    <Image
      src={theme == true ? "/assets/light.png" : "/assets/dark.png"}
      w="80px"
      h="80px"
      position="absolute"
      top="5px"
      right="10px"
      cursor="pointer"
      alt="cambiar de tema"
      title="cambia el tema de la app"
      _hover={{
        transform: "scale(1.1)",
        // boxShadow: "1px 0 1px 0"
      }}
      transition="all 0.5s"

      onClick={() => setTheme(!theme)}
    />
  )
}

export default ChangeTheme