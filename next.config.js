/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scontent-scl2-1.cdninstagram.com',
       
      },
    ],
    domains: ['scontent-scl2-1.cdninstagram.com', 'scontent-iad3-1.cdninstagram.com'],
  }
}

module.exports = nextConfig
