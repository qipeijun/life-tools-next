/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: ['qipeijun.github.io'],
  },
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },
}

module.exports = nextConfig