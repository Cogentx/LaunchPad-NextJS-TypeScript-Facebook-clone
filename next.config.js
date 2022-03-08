/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn0.iconfinder.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'links.papareact.com',
    ],
  },
};

module.exports = nextConfig;
