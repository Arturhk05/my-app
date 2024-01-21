/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'store.storeimages.cdn-apple.com'
      }
    ]
  }
};

export default nextConfig;
