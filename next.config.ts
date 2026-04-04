
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['three', 'react-globe.gl', 'globe.gl', 'three-globe'],
  // Enforce type and lint correctness in CI/production builds
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
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
