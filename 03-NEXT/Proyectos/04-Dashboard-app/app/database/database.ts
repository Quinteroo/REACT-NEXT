

//? https://nextjs.org/learn/dashboard-app/setting-up-your-database


//! BASE DE DATOS CON SUPABASE
1// Vercel ofrece una BBDD gratuita de SQL con Supabse en su plan básico, no es de lo mejor pero para side projects vale
2// tras crear la BBDD en vercel y añadir los parámetros .env.local que nos dan a nuestro archivo .env
//  vamos a generar el seed que nos dan en el proyecto para llenar de datos nuestra BBDD 
3// en este caso Vercel nos ofrece varios modos de hacerlo, nosotros lo haremos con Node.js por lo que
//  tenemos que instalar la librería que nos indica //* npm i supabase/supabase-js
4// de esta forma, como Vercel ya sabe las variables de entorno no vamos a tener ni que crear la conexión

//! SEED
5// añadimos a nuestro package.json //* seed: "node -r dotenv/config ./app/seed/route.ts"
6// lo ejecutamos //* npm run seed
7//
8//
9//
10//