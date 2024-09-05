

//! Componentes
// React Router DOM ofrece una serie de componentes fundamentales que permiten configurar y gestionar el enrutamiento, 
// estos componentes los podemos utilizar como si fueran nuestros, sin embargo, las props que le pasemos vendrán 
// limitadas por la propia manera y código que utiliza la librería, siempre que tengamos dudas de cómo utilizar 
// uno de los siguientes componentes lo suyo sería indagar en la documentación de la librería:

//? https://reactrouter.com/en/main




//* Componente <BrowserRouter>
// <BrowserRouter> es un componente contenedor que debe envolver toda la aplicación. Utiliza la API de HTML5 
// History para mantener la UI sincronizada con la URL en la barra de direcciones. Este componente debe estar 
// presente en la capa superior de la jerarquía de componentes, es decir, envolviendo la capa más superior 
// posible de componentes, a nosotros, nos gusta envolver directamente App en el Main.jsx, aunque se pueden 
// ver otras opciones.

//? pero no tiene que envolver StrictMode la app???

import ReactDOM from "react-dom/client";
import App1 from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);





//* Componente <Route>
// <Route> se utiliza para definir las correspondencias entre una URL y un componente específico que debe
// renderizarse cuando la URL coincide con cierto patrón. Podemos configurar rutas anidadas y maejnar
// parámetros de URL dentro de este componente.

// Normalmente solemos envolver todas nuestras rutas con el componente Routes 

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// En el componente App o en cualquier componente principal
const App2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};






//* Rutas anidadas
// Para anidar rutas tendremos una ruta superior que envuelve nuestras diferentes rutas y es de la que partimos

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// En el componente App o en cualquier componente principal
const App3 = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};






//* Componente <Link>
// <Link> proporciona una forma declarativa de crear enlaces (hipervínculos) en la aplicación que redirigen 
// a diferentes rutas. Es preferible usar <Link> en lugar de la etiqueta <a> estándar de HTML ya que <Link> 
// aprovecha el enrutamiento sin recargar la página completa, manteniendo la experiencia de SPA 
// (Single Page Application).


import React from 'react';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};






//* Componente <NavLink>
// Similar a <Link>, <NavLink> se utiliza para crear enlaces, pero con la capacidad adicional de aplicar 
// estilos especiales o clases de CSS cuando la ruta asociada está activa. Esto es útil para resaltar 
// o marcar visualmente la ruta activa.

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar2 = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};



//* Estilos a NavLink
// activeClassName="active" es un prop especial que se usa para agregar una clase CSS (en este caso, active)
// al enlace cuando su ruta corresponda con la ruta actual.

// Podemos poner la clase que queramos, irá en el lugar de "active" y simplemente podremos poner los estilos
// pertinentes en nuestro css para cambiar visualmente el Link que estemos visitando






//* Parámetros en rutas
// A nuestras rutas también les podremos pasar parámetros, es decir, elementos que pueden variar al entrar a una ruta, 
// esto nos puede servir para comunicar componentes mediante rutas también.

// Para ello, en la declaración de la ruta podremos indicar con : el parámetro que queramos contemplar en la ruta

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// En el componente App o en cualquier componente principal
const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ruta/:parametro" element={<Componente />} />
      </Route>
    </Routes>
  );
};



//* Utilizar el parámetro
// Cuando el componente se renderice, querremos obtener ese valor de parámetro, ya que lo podemos necesitar para x.
// Para acceder a ese parámetro haremos uso del custom Hook useParams() de react-router-dom.
// Este hook nos retornará al utilizarlo un objeto de parámetros con clave y valor, por lo tanto podemos 
// utilizar Object Destructuring para poder usar la variable parametro directamente.

import { useParams } from "react-router-dom";
import "./Componente.css"

const Componente = () => {

  const { parametro } = useParams();

  return (
    <div className="componente">nuestro Componente recibe el parámetro {parametro}</div>
  )
}




//* Route Not Found
// Si alguien intentase acceder a una ruta no existente o no accesible en ese momento le podríamos mostrar una página 
// NotFound echa por nosotros con la ruta path="*" al final de todas nuestras rutas.

// Esto provocará que si no se encuentra alguna ruta se muestre el componente NotFound, obviamente podemos llamar al 
// componente con el nombre que queramos.

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// En el componente App o en cualquier componente principal
const App4 = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ruta/:parametro" element={<Componente />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};


//*useNavigate
// El custom hook useNavigate se utilizará para generar una instancia o función que me permita navegar a lo largo 
// de nuestra página sin necesidad de que el usuario realice ninguna acción ni poner ningún enlace, por ejemplo:

// En este caso estamos utilizando useNavigate para generar esa función, la cual guardamos en la variable navigate 
// o como queramos llamarla y podemos generar una navegación por ejemplo pasados 5 segundos después de iniciar 
// el componente. (la acción daría igual cual fuese, no necesariamente tiene por qué estar manejado por un timeout 
//   el navigate)

import { useNavigate } from "react-hook-form";

const Navegar = () => {

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/about")
  }, 5000)

  return (
    <div>Navegar</div>
  );
};

export default Navegar;

