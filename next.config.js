const path = require('path');

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'styles')],
  },
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
    serverComponentsExternalPackages: ['typeorm'],
  },
};

module.exports = nextConfig;
