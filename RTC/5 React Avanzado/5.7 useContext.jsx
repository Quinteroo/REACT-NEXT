

//! Hook useContext
// useContext es un hook de React que se utiliza para acceder al valor de un contexto directamente dentro de un
// componente funcional. Los contextos en React son una forma de pasar datos a través del árbol de componentes
// sin tener que pasar props manualmente en cada nivel y con ello provocar el famoso prop drilling.




//! Prop Drilling
// Imaginémonos que tenemos una página en la que tenemos un total de 5 componentes, dispuestos de la siguiente manera ->

// Con esta disposición de componentes, App tendrá dentro un estado de un número, que podremos sumar, restar y pintarlo.

// Estas tareas las tenemos divididas en dos componentes: PrintNum (pintado del número) y SetNum(el componente que
//   se encargará de modificar el estado de App.jsx)


//? https://images.thepowermba.com/production/de123686-9ece-4013-8059-beaa266224ae.jpg


// Para conseguir que estos componentes consigan acceder al estado de App.jsx, este componente con los conocimientos
// actuales podría hacérselo llegar a sus componentes nietos por medio de las props, sin embargo, como podemos ver en la
// imagen, estas deberían pasarse primero a sus hijos y luego ya posteriormente a los componentes que realmente las necesitan.

// Esto significa que los componentes Hijo1.jsx e Hijo2.jsx únicamente están recibiendo una prop para posteriormente
// enviarla sin hacer uso como tal de ella.

// A esto se le denomina Prop drilling, ya que estamos "perforando" componentes con datos innecesarios.

//? https://images.thepowermba.com/production/a8ae6889-fb3d-4ef3-9d99-252098aba722.jpg





//! Para evitar el Prop Drilling,
// podremos crear un contexto y utilizar nuestro hook useContext.
// Este nos permitirá tener uno o varios estados generales a disposición de los componentes que los quieran utilizar,
// libremente y sin necesidad de enviar estos datos por props de uno en uno.

// Nuestro contexto envolvería a nuestra aplicación (o a los componentes necesarios) y Proveería a los mismos de los
// datos pertinentes.

// Los componentes que necesiten los datos del contexto únicamente tendrán que hacer uso del hook useContext para recogerlos.

//? https://images.thepowermba.com/production/4be50fbf-3643-4a88-aeb3-1aa9ad62581d.jpg



//! TIMING CONTENIDO
// 01.00 crea el proyecto ejemplo
//* 05.30 aplicaicón de useContext para evitar propDrilling
// 08.00 pone ejemplo con input
//
//


//! TIMING CONTENIDO USEcONTEXT AVANZADO
// 01.00 crea ccarpeta contexto
//
//
//
//
//
//
//
//
//












