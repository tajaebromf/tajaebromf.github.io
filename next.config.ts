import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a plain static site into ./out for GitHub Pages.
  output: "export",
  // The Pages host has no Next image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so static hosts resolve routes.
  trailingSlash: true,
};

export default nextConfig;
