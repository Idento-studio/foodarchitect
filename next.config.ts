import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                 // statische export, deploy via Vercel
  images: { unoptimized: true },    // geen Image-optimalisatie-API bij export
  trailingSlash: true,              // /contact/ i.p.v. /contact.html
};

export default nextConfig;
