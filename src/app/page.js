'use client'

import { useState, useEffect } from 'react'
import { ToolCard } from '../components/layout/ToolCard'
import { ThemeToggle } from '../components/ui/ThemeToggle'
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
    // 检测是否为移动设备
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
        gradient: 'from-primary-500 to-primary-600',
        icon: <TrendingUp className="w-full h-full" />,
        category: '交易工具'
      },
      {
        title: 'KDJ + RSI Pro',
        subtitle: '增强版分析工具',
        description: '支持KDJ完整指标、图表显示和专业级分析算法',
        href: '/kdj-rsi-pro',
        gradient: 'from-accent-500 to-accent-600',
        icon: <BarChart3 className="w-full h-full" />,
        version: 'Pro',
        category: '交易工具'
      },
      {
        title: '做T计算器',
        subtitle: '精准计算交易成本',
        description: '详细计算买卖成本、手续费和盈亏平衡点',
        href: '/t-day-calculator',
        gradient: 'from-success-500 to-success-600',
        icon: <Calculator className="w-full h-full" />,
        category: '交易工具'
      },
      {
        title: 'ETH 网格策略',
        subtitle: '动态区间智能优化',
        description: '基于RSI的智能网格区间计算和收益分析',
        href: '/grid-strategy',
        gradient: 'from-warning-500 to-warning-600',
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
        gradient: 'from-amber-500 to-amber-600',
        icon: <Coffee className="w-full h-full" />,
        category: '生活助手'
      }
    ]
 }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-success/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container">
        {/* 头部 */}
        <header className="py-8 sm:py-12">
          <nav className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
            <div className="w-10" />
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="h1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-balance">
                生活工具集
              </h1>
              <Sparkles className="w-8 h-8 text-accent animate-pulse animate-delay-1000" />
            </div>
            <ThemeToggle />
          </nav>

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4 text-pretty">
              专业的投资分析工具和生活助手集合
              <br />
              <span className="text-primary font-semibold">让投资更智能，让生活更便捷</span>
            </p>

            {/* 统计信息 */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 px-4">
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">实用工具</div>
              </div>
              
              <div className="hidden sm:block w-px h-6 bg-border/50" />
              <div className="sm:hidden h-px w-16 bg-border/50" />
              
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-success">100%</div>
                <div className="text-sm text-muted-foreground">免费使用</div>
              </div>
              
              <div className="hidden sm:block w-px h-6 bg-border/50" />
              <div className="sm:hidden h-px w-16 bg-border/50" />
              
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">随时可用</div>
              </div>
            </div>
          </div>
        </header>

        {/* 主要内容 */}
        <main className="space-y-16 sm:space-y-20">
          {/* 投资理财工具 */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 px-4">
              <div>
                <h2 className="h2 mb-2">投资理财</h2>
                <p className="text-base text-muted-foreground">专业的金融分析工具，助您做出明智投资决策</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">智能分析</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {tools.investment.map((tool, index) => (
                <div key={tool.href}>
                  <ToolCard
                    {...tool}
                    size={isMobile ? 'sm' : 'md'}
                    delay={0}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 生活助手 */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 px-4">
              <div>
                <h2 className="h2 mb-2">生活助手</h2>
                <p className="text-base text-muted-foreground">贴心实用的生活工具，让日常更加便利</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-success">
                <Coffee className="w-5 h-5" />
                <span className="text-sm font-medium">便捷生活</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {tools.lifestyle.map((tool, index) => (
                <div key={tool.href}>
                  <ToolCard
                    {...tool}
                    size={isMobile ? 'sm' : 'md'}
                    delay={0}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 特色功能 */}
          <section className="glass rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="h3 mb-4">为什么选择我们？</h3>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
                专业的算法设计、简洁的界面体验、强大的功能整合
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold">专业精准</h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  基于成熟算法，提供准确可靠的分析结果
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-105 group-hover:bg-success/20">
                  <Sparkles className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold">简洁易用</h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  直观的界面设计，无需学习即可快速上手
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-105 group-hover:bg-accent/20">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold">实时计算</h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  即时响应用户输入，实时查看计算结果
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* 页脚 */}
        <footer className="mt-16 sm:mt-20 py-6 sm:py-8 border-t border-border/30 text-center text-muted-foreground">
          <p className="text-sm">
            用心打造，为您的投资和生活保驾护航
          </p>
        </footer>
      </div>
    </div>
  )
}
