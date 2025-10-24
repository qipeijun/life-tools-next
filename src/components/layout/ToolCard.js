'use client'

import React, { memo } from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'

const toolCardVariants = {
  size: {
    sm: 'h-40 p-6',
    md: 'h-48 p-6',
    lg: 'h-56 p-8',
    xl: 'h-64 p-8',
  },
  rounded: {
    sm: 'rounded-2xl',
    md: 'rounded-3xl',
    lg: 'rounded-3xl',
    xl: 'rounded-4xl',
  }
}

export const ToolCard = memo(function ToolCard({
  title,
  subtitle,
  description,
  href,
  gradient,
  icon,
  category = '',
  version = '',
  badge = '',
  delay = 0,
  size = 'lg',
  rounded = 'md',
  className = '',
  children,
  ...props
}) {
  const cardClasses = cn(
    // 基础样式
    'tool-card',
    // 移动端优先尺寸设计
    'h-48 sm:h-56 md:h-64', // 移动端稍小，便于触摸
    'p-6 sm:p-7 md:p-8', // 移动端稍紧的间距
    toolCardVariants.rounded[rounded],
    // 移动端动画和交互
    'animate-fade-in group',
    'active:scale-[0.97] transition-transform duration-150', // 移动端触摸反馈
    'touch-manipulation', // 优化触摸性能
    'will-change-transform', // 优化GPU渲染
    // 响应式阴影和边框
    'shadow-medium sm:shadow-lg hover:shadow-xl',
    'border border-white/10 hover:border-white/20',
    // 自定义样式
    className
  )

  const iconSize = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const titleSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  const subtitleSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  return (
    <Link
      href={href}
      className={cardClasses}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {/* 渐变背景 */}
      <div className={cn('tool-card-gradient', gradient)}>
        {/* 叠加层 */}
        <div className="tool-card-overlay" />
        
        {/* 内容区域 */}
        <div className="tool-card-content">
          {/* 头部区域 */}
          <div className="flex items-start justify-between mb-4">
            {/* 图标 */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <div className="w-6 h-6 text-white">
                  {icon}
                </div>
              </div>
            </div>
            
            {/* 徽章区域 */}
            <div className="flex items-center gap-2 flex-wrap">
              {category && (
                <span className="badge badge-primary text-xs backdrop-blur-sm">
                  {category}
                </span>
              )}
              {version && (
                <span className="badge badge-accent text-xs backdrop-blur-sm">
                  {version}
                </span>
              )}
              {badge && (
                <span className="badge badge-success text-xs backdrop-blur-sm">
                  {badge}
                </span>
              )}
            </div>
          </div>

          {/* 标题和副标题 */}
          <div className="space-y-1 mb-3">
            <h3 className={cn(
              'font-bold text-white drop-shadow-lg',
              titleSize[size]
            )}>
              {title}
            </h3>
            {subtitle && (
              <p className={cn(
                'text-white/90 drop-shadow-md',
                subtitleSize[size]
              )}>
                {subtitle}
              </p>
            )}
          </div>

          {/* 描述文本 */}
          {description && (
            <p className="text-sm text-white/70 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* 自定义内容 */}
          {children}
        </div>

        {/* 悬浮效果图标 */}
        <div className={cn(
          'absolute right-6 top-1/2 transform -translate-y-1/2',
          'opacity-20 group-hover:opacity-30 transition-opacity duration-500',
          'pointer-events-none',
          iconSize[size]
        )}>
          <div className={cn('flex items-center justify-center', iconSize[size])}>
            {icon}
          </div>
        </div>
      </div>
    </Link>
  )
})

// 专门的网格工具卡片组件
export const GridToolCard = memo(function GridToolCard({
  title,
  subtitle,
  description,
  href,
  gradient,
  icon,
  stats = null,
  delay = 0,
  className = '',
  ...props
}) {
  return (
    <Link
      href={href}
      className={cn(
        'block relative overflow-hidden rounded-2xl',
        'border border-white/10 hover:border-white/20',
        'transition-all duration-300',
        'hover:shadow-xl hover:-translate-y-0.5',
        'active:scale-[0.97] active:translate-y-0', // 移动端触摸反馈
        'backdrop-blur-sm bg-gradient-to-br',
        gradient,
        'animate-slide-up group',
        'h-44 sm:h-48 md:h-52', // 移动端优化高度
        'p-5 sm:p-6 md:p-7', // 移动端优化内边距
        'touch-manipulation will-change-transform',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {/* 渐变叠加 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      
      {/* 内容 */}
      <div className="relative h-full flex flex-col justify-between text-white z-10">
        {/* 头部 */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-white/90 drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* 图标 */}
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center ml-4 flex-shrink-0">
            <div className="w-5 h-5 text-white">
              {icon}
            </div>
          </div>
        </div>

        {/* 底部 */}
        <div className="flex items-end justify-between">
          {description && (
            <p className="text-xs text-white/70 line-clamp-2 max-w-[70%]">
              {description}
            </p>
          )}
          
          {stats && (
            <div className="text-right">
              <div className="text-lg font-bold text-white">
                {stats.value}
              </div>
              <div className="text-xs text-white/70">
                {stats.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
})

// 紧凑型工具卡片
export const CompactToolCard = memo(function CompactToolCard({
  title,
  subtitle,
  href,
  gradient,
  icon,
  badge = '',
  delay = 0,
  className = '',
  ...props
}) {
  return (
    <Link
      href={href}
      className={cn(
        'block relative overflow-hidden rounded-xl',
        'transition-all duration-300',
        'hover:shadow-medium hover:-translate-y-0.5',
        'active:scale-95',
        'bg-gradient-to-br',
        gradient,
        'animate-scale-in group',
        'h-32 p-4',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {/* 渐变叠加 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      {/* 内容 */}
      <div className="relative h-full flex items-center justify-between text-white z-10">
        {/* 文本内容 */}
        <div className="flex-1 mr-4">
          <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-white/90 drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* 图标和徽章 */}
        <div className="flex flex-col items-end gap-2">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
            <div className="w-5 h-5 text-white">
              {icon}
            </div>
          </div>
          
          {badge && (
            <span className="badge badge-primary text-xs backdrop-blur-sm">
              {badge}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
})

ToolCard.displayName = 'ToolCard'
GridToolCard.displayName = 'GridToolCard'
CompactToolCard.displayName = 'CompactToolCard'

export default ToolCard
