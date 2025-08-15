import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isStaticExport = !!process.env.STATIC_EXPORT;

const nextConfig: NextConfig = {
  // Für Deployments unter Sub-Pfad optional aktivierbar (nur basePath, kein assetPrefix im App Router)
  basePath: basePath || undefined,

  images: {
    remotePatterns: [],
    // Bei statischem Export Image-Optimierung deaktivieren
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
  },

  // Bessere Fehlersuche in Prod
  productionBrowserSourceMaps: true,

  // Optionaler statischer Export (z. B. GitHub Pages)
  output: isStaticExport ? "export" : undefined,
  trailingSlash: isStaticExport,
};

export default nextConfig;
