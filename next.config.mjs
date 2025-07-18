import nextComposePlugins from 'next-compose-plugins';
import nextImages from 'next-images';

const { withPlugins } = nextComposePlugins;
const withImagesPlugin = nextImages;

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        sharp: false,
      };
    }
    return config;
  },
};

export default withPlugins([withImagesPlugin], nextConfig);
