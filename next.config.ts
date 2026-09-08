import type { NextConfig } from "next";
import { basePath } from "./src/lib/base-path";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    // Static export has no server to run Next's on-demand image
    // optimization API, so images are served as-is (already
    // pre-optimized to WebP in public/images).
    unoptimized: true,
  },
};

export default nextConfig;
