/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["t0.gstatic.com", "firebasestorage.googleapis.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
