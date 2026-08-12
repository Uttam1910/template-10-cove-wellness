import type { NextConfig } from "next";

/**
 * Cove is a fully static frontend template — no API routes, no server actions,
 * no database. Every route is prerendered at build time.
 *
 * If you want plain HTML output (e.g. for GitHub Pages / S3), uncomment
 * `output: "export"` below and run `npm run build`.
 */
const nextConfig: NextConfig = {
  // output: "export",
  images: {
    // The template ships with local SVG artwork, so no remote loaders are needed.
    unoptimized: true,
  },
};

export default nextConfig;
