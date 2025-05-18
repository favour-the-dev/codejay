import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.coinranking.com',
        port: '',
        pathname: '/**/*',    // allow all paths under this domain
      },
    ]
  }
};

export default nextConfig;
