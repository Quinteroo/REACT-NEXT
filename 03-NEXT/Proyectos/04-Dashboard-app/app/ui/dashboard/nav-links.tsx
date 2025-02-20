"use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname()


  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
              ${pathname === link.href ? "bg-sky-100 text-cyan-400" : "" }
              `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

//! LINK VS <a/>
1// el problema de usar <a/> es que cada vez que hagamos click en el enalce se recarga toda la aplicaicón, sus recursos, librerías...
2// para que esta funcione como un SPA (single page application) debemos usar compoennte <Link />
3// de esta forma solo se renderiza el componente respetando el layout y el resto de archivos

//! HOOKS
1// Next.js nos surte de una gran variedad de hooks que podemos emplear
2// existen dos formas de renderizar los compoenntes, en el servidor y en el cliente
// pero por defecto se rendeiza del lado del servidor.
3// al usar un hooks, suele ser porque es porque necesitamos usar algún dato o se realiza un evento
// en el lado del cliente, como un click por ejemplo
4// por tanto tenemos que indicar en la parte superior del componente //*  "use client"
// para que indicarle a Next.js que ese compoennte tiene que renderizarse del lado del cliente
5// en este caso hemos usado //* usePathname() de Next/navigation
6//
7//
8//
9//
10//