
//! TIMING CONTENIDO
// 00.00 xplica Docs de reac hook form
//* 00.40 form builder
// 02.00 crea componente
// 02.40 importa useForm()
//* 03.00 defaultValues
// esto va a representar lso valores del formulario (clave -valor)
// 07.00 register
// 09.00 App con compoennte



import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {

  const { register, handleSubmit } = useForm({
    defaultValues: {

    }
  });

  console.log("SOY EL COMPONENTE Y ME RE-RENDERIZO");

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>Nombre de usuario</label>
        <input {...register("userName")} />
      </div>
      <div>
        <label>Edad</label>
        <input type="number" {...register("age")} />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register("password")} />
      </div>
      <button>Registrar</button>
    </form>
  );
};

export default App;