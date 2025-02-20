import type { Metadata } from "next";  //* B
import { Geist, Geist_Mono } from "next/font/google";  //! A
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",  //! A
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",  //! A
  subsets: ["latin"],
});

export const metadata: Metadata = {   //* B
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (  //! A
    <html lang="en"> 
      <body>
      {children}

      </body>
    </html>
  );
}

//! A >> es una forma que nos proporciona Next de poder importar las fuentes de Google Font y emplearlas directamente
//! en nuestra app
//* B >> Next nos facilita la introdución de algunos metadatos