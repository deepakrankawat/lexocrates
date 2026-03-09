/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['three', 'react-globe.gl', 'globe.gl', 'three-globe'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  allowedDevOrigins: [
    'https://6000-firebase-studio-1759745992095.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev',
    'https://9000-firebase-studio-1759745992095.cluster-zumahodzirciuujpqvsniawo3o.cloudworkstations.dev',
  ],
};

export default nextConfig;
