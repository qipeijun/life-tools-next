/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出（用于GitHub Pages等静态托管）
  output: 'export',
  
  // 配置基础路径（如果部署在子路径，如 username.github.io/repo-name）
  // basePath: '/life-tools-next',
  
  // 图片优化配置（静态导出时需要使用unoptimized）
  images: {
    unoptimized: true,
    domains: ['qipeijun.github.io'],
  },
  
  // 实验性功能
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  
  // Turbopack配置
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },
}

export default nextConfig

