import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['@node-rs/argon2'], // example if needed
  experimental: {
    serverActions: {
      allowedOrigins: ['olo.co.id', 'www.olo.co.id', 'localhost:3000'],
    },
  },
};

export default nextConfig;
