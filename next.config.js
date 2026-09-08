/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'api.example.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
