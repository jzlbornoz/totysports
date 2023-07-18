/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: false,
})

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.nike.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.adidas.com',
      },
      {
        protocol: 'https',
        hostname: 'images.puma.com',
      },
      {
        protocol: 'https',
        hostname: 'umbro.vtexassets.com',
      },
      {
        protocol: 'https',
        hostname: 'store.acmilan.com',
      },
      {
        protocol: 'https',
        hostname: 'sportal365images.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'images.footballfanatics.com',
      },
      {
        protocol: 'https',
        hostname: 'brand.assets.adidas.com',
      },
    ],
  },
})

module.exports = nextConfig  

