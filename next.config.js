// @ts-check

// const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('next').NextConfig}
 * */

const nextConfig = {
  env: {
    PUBLIC_URL: '/',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i2.wp.com', 'i0.wp.com', 'i1.wp.com','localhost', 'digital-portfolio.digital4design.in'],
  },
  experimental: {
    appDir: true,
  }, 
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: 'graphql-operations-string-loader',
    });

    return config;
  },
  // sentry: {
  //   hideSourceMaps: true,
  // },
  
};

module.exports = nextConfig;