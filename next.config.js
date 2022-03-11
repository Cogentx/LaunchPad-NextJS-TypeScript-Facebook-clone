/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['platform-lookaside.fbsbx.com', 'firebasestorage.googleapis.com', 'links.papareact.com'],
  },
  presets: ['next/babel'],
};

module.exports = nextConfig;
