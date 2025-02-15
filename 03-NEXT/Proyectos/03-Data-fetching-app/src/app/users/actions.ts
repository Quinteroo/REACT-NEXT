"use server"
// al igual que hacemos con el "use client" aquí le indicamos que es una acción específica de servidor
// y que no la mande al navegador del usuario


import { revalidateTag, revalidatePath } from "next/cache"

export default async function (){
  revalidateTag("users");
  revalidatePath("/users");
}