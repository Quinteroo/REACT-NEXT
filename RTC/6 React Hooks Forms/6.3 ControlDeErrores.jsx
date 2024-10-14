


//! Control de errores en nuestros formularios
// Hasta aquí todo es muy sencillo y no hay mucha pérdida, obviando la decisión del hook a utilizar.
// Sin embargo, las dos cosas más importantes de un formulario son:

// - Recoger correctamente los valores para procesarlos. ✅

// - Indicar al usuario que lo utiliza cuando está haciendo algo mal.

// Es muy importante que el usuario utilice bien nuestro formulario, que si por ejemplo necesitamos
// que un campo sea rellenado para su envío no permitir que el usuario lo envíe, o si tenemos error de
// validación en un campo indicarlo igualmente.

// Para ello primero vamos a enseñaros de nuevo a cómo haríamos esto de manera nativa usando useState().



//! Comprobación de errores
// Si probamos este código podremos darnos cuenta de cómo estamos haciendo comprobaciones a la hora de intentar 
// enviar el formulario, por ejemplo cuando hacemos submit del mismo, si algo estuviese mal lo guardamos en un estado.

// De esta manera podemos posteriormente pintarlo en nuestro JSX indicando que campos están dando errores de una 
// manera muy sencilla

import { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    userName: "",
    age: null,
    password: "",
  });

  const [errors, setErrors] = useState({});

  console.log("SOY EL COMPONENTE Y ME RE-RENDERIZO");

  const submit = (e) => {
    e.preventDefault();
    let objetoErrores = {};
    if (inputUserName.current.value === "") {
      objetoErrores = { ...objetoErrores, userName: "Este campo es requerido" };
    }
    if (inputPassword.current.value.length < 4) {
      objetoErrores = {
        ...objetoErrores,
        password: "Este campo debe tener como mínimo 4 caracteres",
      };
    }
    setErrors(objetoErrores);
    if (Object.entries(objetoErrores).length === 0) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Nombre de usuario</label>
        <input onInput={(e) =>
          setFormData({ ...formData, userName: e.target.value })
        } />
        {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
      </div>
      <div>
        <label>Edad</label>
        <input type="number" onInput={(e) =>
          setFormData({ ...formData, age: e.target.value })
        } />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" onInput={(e) =>
          setFormData({ ...formData, password: e.target.value })
        } />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button>Registrar</button>
    </form>
  );
};

export default App;


//? https://images.thepowermba.com/production/8595c852-7bb1-4c25-9e88-fed5d2566d2e.jpg