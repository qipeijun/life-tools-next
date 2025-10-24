'use client'

import { useState, useEffect } from 'react'
import ModernToolCardFixed from '../components/mobile/ModernToolCardFixed'
import ModernHeader from '../components/mobile/ModernHeader'
import {
  TrendingUp,
  Calculator,
  Grid3X3,
  Coffee,
  BarChart3,
  Sparkles,
  Zap
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

  const tools = {
    investment: [
      {
        title: 'KDJ + RSI',
        subtitle: '技术指标智能分析',
        description: '基于KDJ和RSI指标的专业分析工具，助您把握市场脉搏',
        href: '/kdj-rsi',
        gradient: 'from-blue-500 to-blue-600',
        icon: <TrendingUp className="w-full h-full" />,
        category: '交易工具'
      },
      {
        title: 'KDJ + RSI Pro',
        subtitle: '增强版分析工具',
        description: '支持KDJ完整指标、图表显示和专业级分析算法',
        href: '/kdj-rsi-pro',
        gradient: 'from-purple-500 to-purple-600',
        icon: <BarChart3 className="w-full h-full" />,
        version: 'Pro',
        category: '交易工具'
      },
      {
        title: '做T计算器',
        subtitle: '精准计算交易成本',
        description: '详细计算买卖成本、手续费和盈亏平衡点',
        href: '/t-day-calculator',
        gradient: 'from-green-500 to-green-600',
        icon: <Calculator className="w-full h-full" />,
        category: '交易工具'
      },
      {
        title: 'ETH 网格策略',
        subtitle: '动态区间智能优化',
        description: '基于RSI的智能网格区间计算和收益分析',
        href: '/grid-strategy',
        gradient: 'from-orange-500 to-orange-600',
        icon: <Grid3X3 className="w-full h-full" />,
        category: '交易工具'
      }
    ],
    lifestyle: [
      {
        title: '豆浆助手',
        subtitle: '精准时间计算',
        description: '智能预约制作，确保在最佳时间享用热腾腾的豆浆',
        href: '/soy-milk',
        gradient: 'from-yellow-500 to-orange-600',
        icon: <Coffee className="w-full h-full" />,
        category: '生活助手'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50" />
      </div>

      {/* 头部 */}
      <ModernHeader title="生活工具集" showMenu={true} />

      {/* 主要内容 */}
      <main className="relative">
        {/* 头部区域 */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="px-6 sm:px-8 lg:px-12">
            <div className="text-center space-y-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  生活工具集
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                  专业的投资分析工具和生活助手集合
                  <br />
                  <span className="font-semibold text-blue-600 dark:text-blue-400">让投资更智能，让生活更便捷</span>
                </p>
              </div>

              {/* 统计信息 */}
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 py-8">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-200">
                    5+
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    实用工具
                  </div>
                </div>

                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 hidden sm:block" />

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-200">
                    100%
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    免费使用
                  </div>
                </div>

                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 hidden sm:block" />

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-200">
                    24/7
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    随时可用
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 投资理财工具 */}
        <section className="py-16 sm:py-24">
          <div className="px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  投资理财
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                  专业的金融分析工具，助您做出明智投资决策
                </p>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-medium hidden lg:flex">
                <Zap className="w-6 h-6 animate-pulse" />
                <span>智能分析</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {tools.investment.map((tool, index) => (
                <ModernToolCardFixed
                  key={tool.href}
                  {...tool}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 生活助手 */}
        <section className="py-16 sm:py-24">
          <div className="px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  生活助手
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                  贴心实用的生活工具，让日常更加便利
                </p>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-medium hidden lg:flex">
                <Coffee className="w-6 h-6 animate-pulse" />
                <span>便捷生活</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {tools.lifestyle.map((tool, index) => (
                <ModernToolCardFixed
                  key={tool.href}
                  {...tool}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 特色功能 */}
        <section className="py-16 sm:py-24">
          <div className="px-6 sm:px-8 lg:px-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 sm:p-12 max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  为什么选择我们？
                </h3>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                  专业的算法设计、简洁的界面体验、强大的功能整合
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                <div className="text-center space-y-6 group cursor-pointer">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-400/10 dark:to-blue-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    专业精准
                  </h4>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    基于成熟算法，提供准确可靠的分析结果
                  </p>
                </div>

                <div className="text-center space-y-6 group cursor-pointer">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-br from-green-500/10 to-green-600/10 dark:from-green-400/10 dark:to-green-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    简洁易用
                  </h4>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    直观的界面设计，无需学习即可快速上手
                  </p>
                </div>

                <div className="text-center space-y-6 group cursor-pointer">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 dark:from-purple-400/10 dark:to-purple-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    实时计算
                  </h4>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    即时响应输入，实时查看计算结果
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="relative border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
        <div className="px-6 sm:px-8 lg:px-12 py-12">
          <div className="text-center space-y-4">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              用心打造，为您的投资和生活保驾护航
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                Made with ❤️ and Modern Design
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}