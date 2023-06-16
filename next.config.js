/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: "/lincoln-50",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
