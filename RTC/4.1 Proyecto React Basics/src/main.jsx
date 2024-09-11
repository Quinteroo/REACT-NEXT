// eslint-disable-next-line no-unused-vars
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Characters from "./components/Pages/Characters/Characters.jsx"
import Character from "./components/Pages/Character/Character.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Characters />} />
          <Route path='character' element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
