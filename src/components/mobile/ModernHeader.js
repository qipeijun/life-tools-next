'use client'

import React, { memo, useState, useEffect } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Sparkles, ArrowLeft, Home, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../../lib/utils'

const ModernHeader = memo(function ModernHeader({
  showBackButton = false,
  backHref = '/',
  title = '',
  showMenu = false,
  className = ''
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 监听滚动状态
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = cn(
    // 专业级设计系统样式
    'fixed top-0 left-0 right-0 z-fixed',
    // 专业级背景和毛玻璃效果
    'bg-white/95 dark:bg-gray-900/95',
    'backdrop-blur-2xl backdrop-saturate-150',
    'border-b border-white/20 dark:border-gray-700/20',
    // 专业级动画和过渡
    'transition-apple',
    // 滚动状态变化
    isScrolled
      ? 'shadow-system-lg shadow-black/5 dark:shadow-black/20 bg-white/98 dark:bg-gray-900/98'
      : 'shadow-system-sm',
    // 安全区域
    'pt-safe pb-safe',
    className
  )

  const navButtonClasses = cn(
    // 专业级设计系统样式
    'card-surface touch-target-md',
    'w-12 h-12 rounded-system-xl',
    'flex items-center justify-center',
    'bg-white/20 dark:bg-gray-800/20',
    'backdrop-blur-xl border border-white/20 dark:border-gray-700/20',
    // 专业级动画和过渡
    'transition-apple',
    'hover:bg-white/30 dark:hover:bg-gray-800/30',
    'hover:scale-105 active:scale-95',
    'text-gray-700 dark:text-gray-300',
    'touch-manipulation transform-gpu'
  )

  return (
    <>
      <header className={headerClasses}>
        <div className="px-spacious sm:px-8">
          <div className="modern-flex-between h-16 py-comfortable">
            {/* 左侧：返回按钮或Logo */}
            <div className="flex items-center gap-compact">
              {showBackButton ? (
                <Link
                  href={backHref}
                  className={navButtonClasses}
                  aria-label="返回"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-system-2xl bg-gradient-to-br from-ios-blue-500 to-ios-blue-600 flex items-center justify-center shadow-system-lg animate-pulse-slow">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  {title && (
                    <span className="text-system-lg font-bold bg-gradient-to-r from-ios-blue to-ios-purple bg-clip-text text-transparent prose-heading">
                      {title}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* 中间：标题 */}
            {title && !showBackButton && (
              <div className="flex-1 text-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {title}
                </h1>
              </div>
            )}

            {/* 右侧：功能按钮 */}
            <div className="flex items-center gap-compact">
              {showMenu && (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={navButtonClasses}
                  aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              )}

              {/* 主题切换 */}
              <div className="transform hover:scale-105 transition-transform duration-200">
                <ThemeToggle />
              </div>

              {/* 主页按钮 */}
              {showBackButton && (
                <Link
                  href="/"
                  className={navButtonClasses}
                  aria-label="主页"
                >
                  <Home className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 占位空间，防止内容被固定头部遮挡 */}
      <div className="h-16 pt-safe" />

      {/* 移动端侧边菜单 */}
      {isMenuOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* 侧边菜单 */}
          <div className="fixed top-0 right-0 z-50 w-80 max-w-[80vw] h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-l border-white/20 dark:border-gray-700/20 animate-slide-in-right">
            <div className="pt-safe h-full flex flex-col">
              {/* 菜单头部 */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-compact">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    菜单
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={navButtonClasses}
                  aria-label="关闭菜单"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 菜单内容 */}
              <div className="flex-1 overflow-y-auto modern-scroll p-6">
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <span className="text-gray-700 dark:text-gray-300">投资工具</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <span className="text-gray-700 dark:text-gray-300">生活助手</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <span className="text-gray-700 dark:text-gray-300">设置</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
})

ModernHeader.displayName = 'ModernHeader'

export default ModernHeader