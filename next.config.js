/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  compiler: {
    styledComponents: {
      displayName: true,
      fileName: true,
      minify: true,
    },
  },
};

module.exports = nextConfig;
