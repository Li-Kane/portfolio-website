import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio-website",
  output: "export",
  reactStrictMode: true,
  images:{
    loader:"custom",
    loaderFile:"/path/to/custom-image-loader.js",
  },
};

export default nextConfig;
