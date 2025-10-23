'use client'

import React, { memo } from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'

export const ToolCard = memo(function ToolCard({
  title,
  subtitle,
  href,
  gradient,
  icon,
  version = null,
  delay = 0,
  mobile = false
}) {
  return (
    <Link
      href={href}
      className={cn(
        'block relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 active:scale-95 backdrop-blur-xl bg-gradient-to-br',
        gradient,
        mobile ? 'h-40' : 'h-64', // 移动端优化高度
        'animate-fade-in',
        'group'
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* 渐变叠加 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* 版本标签 */}
      {version && (
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-xl text-sm font-semibold uppercase tracking-wide z-10 border border-white/20 shadow-lg">
          {version}
        </div>
      )}

      {/* 图标 */}
      <div className={cn(
        "absolute right-6 top-1/2 transform -translate-y-1/2 opacity-30 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none",
        mobile ? "w-16 h-16" : "w-20 h-20" // 移动端优化图标大小
      )}>
        <div className={cn(
          "flex items-center justify-center",
          mobile ? "w-16 h-16" : "w-20 h-20" // 移动端优化容器大小
        )}>
          {icon}
        </div>
      </div>

      {/* 内容 */}
      <div className={cn(
        "relative h-full flex flex-col justify-end text-white z-10",
        mobile ? "p-6" : "p-8" // 移动端优化内边距
      )}>
        <h3 className={cn(
          "font-bold mb-2 drop-shadow-lg",
          mobile ? "text-xl" : "text-2xl" // 移动端优化字体大小
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-white/90 drop-shadow-md",
          mobile ? "text-sm" : "text-base" // 移动端优化字体大小
        )}>
          {subtitle}
        </p>
      </div>
    </Link>
  )
})

export default ToolCard
