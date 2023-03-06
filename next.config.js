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
})

module.exports = nextConfig
