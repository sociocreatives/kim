/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const withImages = require('next-images');
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


module.exports = withImages()
module.exports = nextConfig
