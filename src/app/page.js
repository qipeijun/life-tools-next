'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from '../components/ui/ThemeToggle'
import Link from 'next/link'
import {
  Calculator,
  Coffee,
  TrendingUp,
  Grid3X3,
  BarChart3,
  ChevronRight,
} from 'lucide-react'

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 常用工具（大卡片展示）
  const favoriteTools = [
    {
      title: '做T计算器',
      description: '精准计算收益',
      href: '/t-day-calculator',
      icon: Calculator,
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: '豆浆助手',
      description: '智能预约时间',
      href: '/soy-milk',
      icon: Coffee,
      gradient: 'from-amber-400 to-amber-600',
    },
  ]

  // 投资分析工具（列表展示）
  const investmentTools = [
    {
      title: 'KDJ + RSI 分析',
      description: '技术指标智能分析',
      href: '/kdj-rsi',
      icon: TrendingUp,
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/10',
    },
    {
      title: 'KDJ + RSI Pro',
      description: '增强版分析工具',
      href: '/kdj-rsi-pro',
      icon: BarChart3,
      color: 'text-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-900/10',
      badge: 'Pro',
    },
    {
      title: 'ETH 网格策略',
      description: '智能区间计算',
      href: '/grid-strategy',
      icon: Grid3X3,
      color: 'text-indigo-500',
      bg: 'bg-indigo-50 dark:bg-indigo-900/10',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-4 sm:py-6">
        {/* 头部 */}
        <header className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <h1 className="ios-large-title">生活工具</h1>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-1">
              简洁、好用、高效
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* 主要内容 */}
        <div className="ios-spacing-section">
          {/* 常用工具 */}
          <section>
            <h2 className="ios-section-header">⚡️ 常用</h2>
            <div className="grid grid-cols-2 gap-4">
              {favoriteTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group block"
                >
                  <div
                    className={`
                      relative overflow-hidden
                      h-36 sm:h-40
                      rounded-2xl
                      bg-gradient-to-br ${tool.gradient}
                      shadow-sm
                      transition-all duration-200
                      active:scale-95
                    `}
                  >
                    {/* 渐变叠加 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    {/* 内容 */}
                    <div className="relative h-full p-5 flex flex-col justify-between text-white">
                      {/* 图标 */}
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* 文字 */}
                      <div>
                        <h3 className="text-lg font-bold mb-0.5 drop-shadow-lg">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-white/90 drop-shadow-md">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 投资分析 */}
          <section>
            <h2 className="ios-section-header">📈 投资分析</h2>
            <div className="space-y-3">
              {investmentTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block group"
                >
                  <div className="ios-card flex items-center justify-between hover:shadow-md transition-shadow">
                    {/* 左侧内容 */}
                    <div className="flex items-center gap-4 flex-1">
                      {/* 图标 */}
                      <div className={`
                        w-12 h-12 rounded-2xl flex items-center justify-center
                        ${tool.bg}
                      `}>
                        <tool.icon className={`w-6 h-6 ${tool.color}`} />
                      </div>
                      
                      {/* 文字 */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                            {tool.title}
                          </h3>
                          {tool.badge && (
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                              {tool.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* 右侧箭头 */}
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 特性介绍 */}
          <section>
            <h2 className="ios-section-header">✨ 特性</h2>
            <div className="ios-card">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-500 mb-1">
                    5+
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    实用工具
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500 mb-1">
                    100%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    免费使用
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500 mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    随时可用
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 页脚 */}
          <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
            <p>用心打造，为您的投资和生活保驾护航</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
