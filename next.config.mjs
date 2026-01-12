/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD:next.config.js
  /* config options here */
  output: 'standalone',
=======
>>>>>>> 8b31f7a9f26e90712fd8444b232cb805e4a76c23:next.config.mjs
  typescript: {
    ignoreBuildErrors: true,
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
};

export default nextConfig;
