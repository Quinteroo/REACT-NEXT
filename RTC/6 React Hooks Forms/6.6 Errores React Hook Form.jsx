


//! Manejo de errores en nuestro formulario
// Gracias al custom hook useForm() podremos obtener a parte de handleSubmit y register, los datos 
// del estado del formulario, la sintaxis para obtener el formState y su objeto errores sería la que 
// vemos en el fragmento de código y la manera de conocer si nuestro formulario está relleno, tiene 
// algún error en algún campo o está relleno y es válido la podremos sacar de formState.


const { handleSubmit, register, formState: { errors } } = useForm();


//! Manera de escuchar posibles errores en nuestros inputs
// Podríamos escuchar diferentes tipos de posibles errores metiendo un objeto de validaciones justo a 
// continuación del nombre del campo en el registro del mismo.

// Aquí tenemos un ejemplo sencillo de validación de campos, en este caso este campo deberá ser rellenado 
// para pasar la validación y que además cumpla con el patrón regex proporcionado, estos patrones los 
// podéis sacar súper fácil de internet o incluso pidiéndoselos a chatgpt

<input type="password" {...register("password", {
  required: true,
  pattern: {
    value: /^[0-9]{8}[A-Za-z]$/,
    message:
      "La contraseña debe incluir números, letras Mayúsculas y minúsculas y como máximos 8 caracteres",
  },
})} />



//! Uso del objeto errors para mostrar visualmente el error
// Como vimos anteriormente con el objeto errors que hicimos manualmente nosotros, el uso de este objeto 
// será súper sencillo, y el truco estaría en hallar las diferentes maneras de mostrarle al usuario estos errores.

// Por ejemplo aquí estamos pintando el borde de color rojo en el input en caso de que haya cualquier error, 
// y además estamos creando un párrafo rojo debajo del input indicando el mensaje de error del patrón 
// cuando este tipo de error exista.


```
<input type="password" {...register("password", {
     required: true,
     pattern: {
        value: /^[0-9]{8}[A-Za-z]$/,
        message:
          "La contraseña debe incluir números, letras Mayúsculas y minúsculas y como máximos 8 caracteres",
        },
     })}
     style={{ borderColor: errors.password && "red" }}>
{ errors.password.type === "pattern" && <p style={{ color: "red" }}>{ errors.password.message }</p> }
```
