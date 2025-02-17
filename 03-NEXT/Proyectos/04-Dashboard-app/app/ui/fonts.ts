import {Montserrat, Hahmlet, Lusitana} from "next/font/google"

export const monserrat = Montserrat({subsets: ["latin"]})  // traemos los carácteres solo en latín

export const hahmlet = Hahmlet({subsets:["latin"], weight:["500", "700"]}) // podemos indicar el grosor

export const lusitana= Lusitana({subsets:["latin"],weight:["400","700"]})



//! FONTS EN NEXT.JS
1// es una librería interna de Next
2// está mejor optimizada que descargala directamente de Google Fonts
3// son todas las funetes, para buscarlas solo hace falta presionarl CNTRL + ESPACIO dentro de los corchetes para verlas
4// la importamos al body de RootLayout para que afecte a toda la app
5// podemos descargar otras funetes y emplearlas de manera específica para que un componente