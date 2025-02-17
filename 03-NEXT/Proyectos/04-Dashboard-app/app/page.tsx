import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import styles from "./ui/home.module.css"
import { hahmlet } from './ui/fonts';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <div className={styles.shape}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong className={`${hahmlet.className}`}>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
{/* 
          <img 
          src='/hero-desktop.png'
          alt='imagen de la sección hero de escritorio'
          /> */}

          <Image 
          src="/hero-desktop.png"
          alt='imagen de la sección hero del escritorio'
          width={1000}
          height={760}
          className='hidden md:block'
          />

          <Image 
          src="/hero-mobile.png"
          alt='imagen de la sección hero del escritorio'
          width={250}
          height={360}
          className='block md:hidden'
          />

        </div>
      </div>
    </main>
  );
}


//! COMPONENTE IMAGE
1// Next.js optimiza las imágenes por defecto: reduce el peso de 500MB a 170Kb (x ej) y cambia el formato si lo necesita (de png a webp)
2// es lazyloading por defecto
3// necesita la relación de tamaños con width y height
4// podemos poner un componente según si se encuentra en desktop o en mobile con las mediaQueries //* className='block md:hidden'
5// aunque estén los dos componentes Next renderiza uno y otro en función de si está en desktop o mobile, por lo que no afecta ala carga
6//? tiene un coste económico >> 1000 componentes Image gratis por cuenta de vercel
