/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'admin.hayedconsulting.com',
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  distDir: "build",
  output: 'export',
};

export default nextConfig;
