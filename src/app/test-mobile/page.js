'use client'

import ModernToolCardFixed from '../../components/mobile/ModernToolCardFixed'
import { TrendingUp, Calculator } from 'lucide-react'

export default function TestMobilePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        移动端优化测试页面
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ModernToolCardFixed
            title="测试工具"
            subtitle="功能测试"
            description="这是一个用于测试移动端优化效果的演示工具卡片"
            href="/test"
            gradient="from-blue-500 to-purple-600"
            icon={<TrendingUp className="w-full h-full" />}
            category="测试"
          />

          <ModernToolCardFixed
            title="另一个工具"
            subtitle="更多测试"
            description="验证不同的渐变色和布局效果"
            href="/test"
            gradient="from-green-500 to-teal-600"
            icon={<Calculator className="w-full h-full" />}
            category="演示"
            version="Pro"
          />
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            测试说明
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✅ 使用正确的 Tailwind CSS 类名</li>
            <li>✅ 响应式布局 (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)</li>
            <li>✅ 移动端优先设计</li>
            <li>✅ 渐变背景效果</li>
            <li>✅ 悬停和点击交互</li>
            <li>✅ 触摸友好的尺寸</li>
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              移动端优化
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              44px 最小触摸目标，响应式间距，移动优先导航
            </p>
          </div>

          <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
              现代化设计
            </h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              Apple 风格设计语言，流畅动画，玻璃态效果
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}