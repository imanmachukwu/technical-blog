/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ]
  },
};

export default nextConfig;
