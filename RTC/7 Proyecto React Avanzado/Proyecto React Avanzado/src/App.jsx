
import React, { useContext } from "react"
import ChangeTheme from "./components/ChangeTheme/ChangeTheme.jsx"
import { Box } from "@chakra-ui/react"
import { ThemeContext } from "./provider/ThemeProvider.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Colliseum from "./pages/Colliseum/Colliseum.jsx"

// import './App.css'

function App() {
  const { theme } = useContext(ThemeContext)


  return (
    <>
      <Box
        minHeight="100svh"
        bg={`var(--rtc-${theme ? "light" : "dark"}-mode-bg)`}
        color={`var(--rtc-${theme ? "light" : "dark"}-mode-text)`}
        transition="all 0.5s">
        <ChangeTheme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colliseum" element={<Colliseum />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>

    </>
  )
}

export default App
