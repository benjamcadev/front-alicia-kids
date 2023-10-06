/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
       
      },
    ],
    domains: ['cdninstagram.com'],
  }
  
}

module.exports = nextConfig
