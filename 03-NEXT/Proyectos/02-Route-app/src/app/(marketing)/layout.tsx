import React from 'react'



function MarketingLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <main>
      {children}
    </main>
  )
}

export default MarketingLayout


//! (carpeta)
// anidar páginas y carpetas en una carpeta con (paréntisis) lo que le estamos haciendo es indicarle a Next que es simplemente
// una forma de juntar en un mismo sitio aquellos archivos que comparten una lógica en común

// esto no afecta al path (ruta), la cual seguiría siendo la misma /contact  ó  /about

//! (carpeta)/layout.tsx
// al estar los elemntos dentro de (carpeta), nos permite crear un layout.tsx por si queremos darles a estos un diseño común.