// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import StarsBackground from './components/StarsBackground/StarsBackground.jsx'
// eslint-disable-next-line no-unused-vars
import { NavLink, Outlet } from "react-router-dom"


function App() {

  return (
    <>
      <StarsBackground />
      <main>
        <Outlet />
      </main>

    </>
  )
}

export default App
