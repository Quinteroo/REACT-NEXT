
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Peticiones Fetch de datos</h1>
      <Link href={"/users"}>Go to Users Page</Link>
    </main>
  );
}
