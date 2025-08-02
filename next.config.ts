// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this line to transpile the 'three' package
  transpilePackages: ['three'],
};

module.exports = nextConfig;