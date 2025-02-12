import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/old-route", // Ruta antigua
        destination: "/new-route", // Nueva ruta
        permanent: true, // true = Redirección 301 (permanente), false = Redirección 307 (temporal)
      },
      {
        source: "/blog/:id",
        destination: "/new-blog/:id",
        permanent: false, // Redirección 307
      },
    ];
  },
};

export default nextConfig;
