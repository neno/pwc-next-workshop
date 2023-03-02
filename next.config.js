/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
