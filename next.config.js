/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Change back to false for optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig 