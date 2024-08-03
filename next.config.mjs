/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'hayed-admin.com',
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
