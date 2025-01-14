/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Remove if not using external images
    unoptimized: true, // Set to true for static exports
  },
  // Add this to help with asset handling
  assetPrefix: '.',
  output: 'standalone',
}

module.exports = nextConfig 