import "./Header.css"
import React from "react"



const Header = () => {

  let where1 = "Home";  //! esto para que funcione tiene que ser un ESTADO - useState

  const [where, setWhere] = React.useState("home")
  //* indican cambios significativos, que queremos que repercutan en el apartado visual,
  //* haciendo que se renderice de nuevo el componente, cosa que con la variable no sucede


  const changePath = (newPath) => {
    setWhere(newPath)   // setWhere es la función que nos permite modificar el valor
    console.log(where); // where sirve solo para LEER el valor 
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => changePath("Home")} className={where === "Home" ? "active" : "disable"}>
              HOME
            </a>
          </li>
          <li>
            <a href="#">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#">
              CONTACT
            </a>

          </li>
        </ul>
      </nav>
    </header>

  )


}