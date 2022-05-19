/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
};

const withTM = require('next-transpile-modules')(['react-tradingview-embed']);

module.exports = withTM(nextConfig);
