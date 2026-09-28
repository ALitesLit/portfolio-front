// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbopack: {
      rules: {
        '.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  sassOptions: {
    prependData: `@import "@/shared/colors.scss";`,
  },
  devIndicators: false,
  images: {
    // Разрешает оптимизацию изображений с приватных IP (192.168.x.x)
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '192.168.1.182',
        pathname: '/static/**',
      },
    ],
  },
};

export default nextConfig;
