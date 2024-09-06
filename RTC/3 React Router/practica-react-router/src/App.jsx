import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <header>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

    </>
  )
}

export default App
