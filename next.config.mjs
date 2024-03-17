/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com"',
        port: '',
        pathname: '/7.x/lorelei/svg/**',
      },
    ],
  },
};

export default nextConfig;
