import React from "react"
import { useForm } from "react-hook-form"

const Form = () => {

  const { handlesubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: ""
    }
  })

  // Nombre de usuario: requerido
  // Correo electrónico: requerido y patrón regex de email
  // Contraseña: requerido y patrón regex de contraseña

  const submit = (formData) => {
    console.log(formData);
  }

  return (
    <form onSubmit={handlesubmit(submit)}>
      <div>
        <label htmlFor="username">
          Nombre Usuario*
        </label>
        <input type="text" id="username"
          {...register(userName),
          {
            required: {
              value: true,
              message: "necesitas poner un nombre ❌"
            }
          }}
        />
      </div>
      <div>
        <label htmlFor="email">
          email*
        </label>
        <input type="text" id="email" />

      </div>
      <div>
        <label htmlFor="password">
          contraseña*
        </label>
        <input type="text" id="password" />
      </div>
      <button>Enviar</button>
    </form>
  )
}


export default Form