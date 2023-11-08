/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      plugins: [
        config.module.generator.asset.publicPath = "/_next/",
        new MiniCssExtractPlugin({
          experimentalUseImportModule: false
        }),
      ]
    return config
  },
}



module.exports = nextConfig
