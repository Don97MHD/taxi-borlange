/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: true,

  async redirects() {
    return [
      
      {
        source: '/information',
        destination: '/', 
        permanent: true,
      }
    ];
  },
};

export default nextConfig;