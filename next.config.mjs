/** @type {import('next').NextConfig} */
const erpNextRemotePattern = (() => {
  try {
    const url = new URL(process.env.ERPNEXT_URL);
    return {
      protocol: url.protocol.replace(':', ''),
      hostname: url.hostname,
      port: url.port,
      pathname: '/files/**',
    };
  } catch {
    return null;
  }
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['react-globe.gl', 'globe.gl', 'three-globe'],
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
      ...(erpNextRemotePattern ? [erpNextRemotePattern] : []),
    ],
  },
  async redirects() {
    return [
      {
        source: '/team/hameer-singh',
        destination: '/team/ambika-shekhawat',
        permanent: true,
      },
      {
        source: '/lawyer/hameer-singh',
        destination: '/lawyer/ambika-shekhawat',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
