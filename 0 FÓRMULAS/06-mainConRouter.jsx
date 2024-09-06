import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import './index.css'


import Home from "./pages/Home"
import About from "./pages/About"
import Heroes from "./pages/Heroes"
import Heroe from "./pages/Heroe"
import NotFound from "./pages/404"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="heroe/:id" element={<Heroe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>


    </BrowserRouter>
  </StrictMode>,
)

