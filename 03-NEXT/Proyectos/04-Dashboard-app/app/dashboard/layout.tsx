import React from 'react'
import SideNav from '../ui/dashboard/sidenav'

function InvoiceLayout({children}:{children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav/>  //todo
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}

export default InvoiceLayout


//! Layout Anidado
1// aveces vamos a querer incluir componentes en en un children específico, por ejemplo un sidebar que en funcuión de donde hagas clic
// se renderice un compoente u otro
2// solo va a plicar a los children que esté envolviendo

//todo
3// buscar componente para ver explicaicón
