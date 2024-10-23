


//! TIMING CONTENIDO
// 00.30 crea proyecto VITE
// 01.00 - 06.00 revisa la API Pokemóm
// 06.10 limpia proyecto
// 06.40 instala librerías
// router-dom, hook-form, chakra ui
// 08.00 BrowserRouter y ChacraProvider en <App />

//? =========== PROVIDER DARK/LIGHT ==========
// 10.00 busca imagen sol y luna para el mode
// 11.20 icono picachu para html
//* 12.00 empieza a crear componente para luego extrarlo
// 13.00 utiliza componente Image de Chakra
// 14.20 useState del theme
//* 15.00 condición src en componente Image
// evento onClick
 

//? ========== useContext=======
// 18.00 crea carpeta provider y ThemeProvider.jsx
// 19.00 componente proveedor
// incluye el estado en el provider
// 20.00 ThemeProvider en <App/>
// 20.30 aplica useContext en el componente Imagen
//* 21.00 extrae componente Image

//? === cambiar color de la app con Theme
//* 23.00
// Index.css con los estilos light y dark definidos
//* 24.00 Box de Chakra 
//* 25.00 crea el ternario en props del componente
// transition "ll 0.5s"


//? ==== Rutas ====
//* 27.00 crea Pages, Home.jsx y Coliseum.jsx
// 27.30 Routes y Route
// 28.00 not found
//! 30.00 meter valor de ThemeProvider en el localStorage para cuando se recarque la página
// 31.00 useEffect y localStorage
//* 38.00 getItem a Booleano 



//? ==== petición FETCH meten pokemons
//* 44.00 Home
// usa Flex de Chakra
// useEffect
// fetch API porkemon/
// bucle for para hacer los 151 fech ${i}
//*47.00
// crea usState([]) para rellenarlo en el fetch
// crea variable global (fuera de componente) const ALL_POKEMONS
// .then((res)=> ALL_POKEMONS.push(res))
// setPokemons(ALL_POKEMOS)
//* condiconal ig dentro del useEffect
// if(i === 151){setPokemons(ALL_POKEMONS)}
//* 52.00 mapeo de los pokemon dentro de Flex
//{pokemons.map()}
// da estilos al div Flex, con flez direction wrap etc
//* 55.00 sombra con un drop_shadow
//* 56.00 condicional en la sombra con el useContext() según sea dark/light mode
// 57.40 cambia el largo de la sombra según sea hover


//? ==============
//* 01.01.00









