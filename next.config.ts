import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.immobiliare.it" },
      { protocol: "https", hostname: "**.idealista.it" },
      { protocol: "https", hostname: "**.idealista.com" },
      { protocol: "https", hostname: "**.casa.it" },
      { protocol: "https", hostname: "**.subito.it" },
      { protocol: "https", hostname: "**.wikimedia.org" },
    ],
  },
};

export default nextConfig;
