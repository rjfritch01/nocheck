/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow building even if some pages have minor type issues during development
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
