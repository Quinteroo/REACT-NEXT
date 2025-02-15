import React from 'react'


async function fetchUsers(){  //! A
  const response = await fetch("https://reqres.in/api/users?page=2",{
    cache:"force-cache", // de esta manera forzamos a guardar los datos de la petición fetch en la caché del usuario pra usarlos en otro momento
    next:{
      revalidate:3600, //con esto le decimos a Next que tiene que actualizar la petición cada hora (por si hay variantes en los datos porque alguien lo haya modificado)
      tags:["users",] // si queremos que se modifque en funcuon de la etiqueta que lke hayamnos puesto
      //* actions.ts
    }
  })

  await new Promise((resolve)=> setTimeout(resolve,3000)) //* B

  if(!response.ok){
    throw new Error("Error en el fetch de usuarios");
  }

  return response.json()
}


async function UsersPage() {  //! A
  const users = await fetchUsers()

  return (
    <div>
      <h2>Hola desde User Page</h2>
      <h3>lista de usuarios 👇🏼</h3>
      <ul>
        {users.data.map((user)=>(
          <li key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage

//? https://s3.amazonaws.com/staticcontent.thepowermba/Desarrollo+web+avanzado/Next/03.+Data+Fetching/NEXT_013+-+Co%CC%81mo+consumir+datos+de+fuentes+externas.pdf
//! A >> podemos ver que en next podemos hacer funciones asyncronas, esto se debe a que la petición se hace del lado
//! del servidor
//* B >> esto es solo para que tarde en cargar para ver el compoennte loading.
//* importante recordar que no es neceario importarlo ya que Next lo emplea directamte si etá en la carpeta

