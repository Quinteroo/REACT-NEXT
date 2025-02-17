import '@/app/ui/global.css';
import { monserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        
        {children}
        <footer className='flex justify-center items-center'>
          <p>Hecho con ❤ desde Vercel</p>
        </footer>
      </body>
    </html>
  );
}



//! LAYOUT
1// los layout son el "marco" que envuelven a lso children
2// en este caso el footer se comparte para toda la aplicaicón
3// viene muy bien para compoenntes genéricos como el header o el footer

