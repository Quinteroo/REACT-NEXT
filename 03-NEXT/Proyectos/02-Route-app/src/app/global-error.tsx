

'use client' // Error boundaries must be Client Components
//? https://nextjs.org/docs/app/building-your-application/routing/error-handling
// esta es la forma recomentadad por Next


 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
//? podemos usar la misma estructura que con error

//! global-error
// En Next.js 13+ con App Router, el archivo global-error.tsx se encarga de manejar errores globales 
// en la aplicación, pero solo en el contexto de app/layout.tsx, no en otros componentes o el 
// rootLayout en sí.

// 📌 ¿Qué maneja global-error.tsx?
// ✅ Captura errores inesperados que ocurren en el App Router dentro del árbol de app/layout.tsx.
// ✅ Maneja fallos en cualquier ruta o componente dentro de app/ (incluyendo server y client components).
// ✅ Reemplaza el ErrorBoundary de React a nivel global en el App Router.

// ❌ ¿Qué NO maneja global-error.tsx?
// 🚫 No captura errores en el Client Router (useEffect, event handlers, setTimeout, etc.).
// 🚫 No maneja errores fuera del app/ folder, como en el pages/ router.
// 🚫 No afecta a los errores de API Routes (app/api/) o errores del servidor como fallos en middleware.ts.