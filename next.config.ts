import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
