import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
              //port: '',
              //pathname: '/account123/**',
              //search: '',
          },
      ],
  }
};

export default nextConfig;
