
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>hola mundo</h1>
    <Link href="/users">Página de usuario</Link>

    <Link href="/products/1">Página de PRoducto 1</Link>
    </>
  );
}

//! page
// un archivo page.tsx representa una interfaz de usuario en una ruta específica

//! app/page.tsx
// como app es el directorio princial page es lo primero que se representa
