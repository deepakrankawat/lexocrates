
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: [
    'https://6000-firebase-studio-1759745992095.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev',
    'https://9000-firebase-studio-1759745992095.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev',
  ],
};

module.exports = nextConfig;
