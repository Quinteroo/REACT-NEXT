

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


//! Error
// erro.tsx va a gestionar los errores de la carpeta donde se encuetr en este caso el users/page.tsx
// y users/comments y users/posts

// para poder manejar los erorres de layout y template hay que hacerlo desde un nivel superior
