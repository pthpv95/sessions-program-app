/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["content.cloudfront.entrylevel.net"],
  },
};

module.exports = nextConfig;
