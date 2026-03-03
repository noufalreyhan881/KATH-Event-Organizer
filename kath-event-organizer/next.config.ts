import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@generated/prisma': require.resolve('../generated/prisma'),
    };
    return config;
  },
  turbopack: {},
};

export default nextConfig;
