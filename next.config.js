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
  },
  publicRuntimeConfig: {
    BING_MAP_APIKEY: process.env.BING_MAP_APIKEY
  }
  
}

module.exports = nextConfig
