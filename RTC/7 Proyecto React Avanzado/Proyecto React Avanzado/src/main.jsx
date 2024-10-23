import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import AppThemeProvider from "./provider/ThemeProvider.jsx" //! sin corchetes

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <ChakraProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </ChakraProvider>
  </BrowserRouter>


)


//! PRIMERO IMPORTAR Y LUEGO EMPLEAR  
