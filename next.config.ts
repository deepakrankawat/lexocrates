
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
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
    'https://6000-firebase-studio-1759745992095.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev/_next',
  ],
};

export default nextConfig;
