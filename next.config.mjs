import nextComposePlugins from 'next-compose-plugins';
import nextImages from 'next-images';

const { withPlugins } = nextComposePlugins;
const withImagesPlugin = nextImages;

const nextConfig = {
  images: {
    domains: ['placehold.co'],
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
