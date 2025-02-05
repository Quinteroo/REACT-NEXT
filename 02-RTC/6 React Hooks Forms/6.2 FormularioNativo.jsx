


//! Formulario Nativo con useState
// Con un useState y eventos podemos recoger los datos de un formulario de manera muy sencilla, 
// aquí os damos el código para que podáis probarlo:


import { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    userName: "",
    age: null,
    password: "",
  });

  console.log("SOY EL COMPONENTE Y ME RE-RENDERIZO");

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Nombre de usuario</label>
        <input
          onInput={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
      </div>
      <div>
        <label>Edad</label>
        <input
          type="number"
          onInput={(e) => setFormData({ ...formData, age: e.target.value })}
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          onInput={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <button>Registrar</button>
    </form>
  );
};

export default App;


// Sin embargo, si nos fijamos en la consola, veremos que nuestro componente se está renderizando excesivas veces.

// A cada cambio que realizamos directamente en cualquiera de los inputs cambiamos el valor del estado y eso nos provoca
// una re-renderización del componente, efecto innecesario y que podemos evitarnos.

// Podríamos hacer diferentes cosas, como por ejemplo utilizar el hook useRef si no necesitamos una representación
// visual directa de los datos que estamos recogiendo en el momento de escritura del usuario, pero
// la librería react-hook-form nos facilitará todo esto de manera muy clara.
