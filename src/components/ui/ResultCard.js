'use client'

import React, { memo, useState } from 'react'
import { cn } from '../../lib/utils'
import { ChevronDown, ChevronUp } from 'lucide-react'

/**
 * 结果展示卡片
 * iOS风格的结果展示，支持盈亏着色和详情展开
 */
export const ResultCard = memo(function ResultCard({
  type = 'neutral', // profit | loss | neutral
  title,
  value,
  subtitle,
  details = [],
  expandable = false,
  defaultExpanded = false,
  icon,
  className = '',
  ...props
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const typeColors = {
    profit: {
      bg: 'bg-green-50 dark:bg-green-900/10',
      border: 'border-green-100 dark:border-green-800/30',
      text: 'text-green-600 dark:text-green-400',
      icon: 'text-green-500',
    },
    loss: {
      bg: 'bg-red-50 dark:bg-red-900/10',
      border: 'border-red-100 dark:border-red-800/30',
      text: 'text-red-600 dark:text-red-400',
      icon: 'text-red-500',
    },
    neutral: {
      bg: 'bg-gray-50 dark:bg-gray-800/50',
      border: 'border-gray-100 dark:border-gray-700/30',
      text: 'text-gray-700 dark:text-gray-300',
      icon: 'text-gray-500',
    },
  }

  const colors = typeColors[type] || typeColors.neutral

  const cardClasses = cn(
    // iOS风格卡片
    'rounded-2xl p-6',
    'border',
    'transition-all duration-200',
    // 颜色
    colors.bg,
    colors.border,
    // 自定义类
    className
  )

  return (
    <div className={cardClasses} {...props}>
      {/* 标题和图标 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon && <span className={cn('text-xl', colors.icon)}>{icon}</span>}
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </h3>
        </div>
      </div>

      {/* 主要数值 */}
      <div className="mb-2">
        <div className={cn('text-4xl font-bold tracking-tight', colors.text)}>
          {value}
        </div>
        {subtitle && (
          <div className={cn('text-xl font-semibold mt-1', colors.text)}>
            {subtitle}
          </div>
        )}
      </div>

      {/* 详情列表 */}
      {details.length > 0 && (
        <>
          {/* 分割线 */}
          <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

          {/* 详情内容 */}
          <div
            className={cn(
              'space-y-3 overflow-hidden transition-all duration-300',
              !isExpanded && expandable && 'max-h-0 opacity-0',
              isExpanded && 'max-h-96 opacity-100'
            )}
          >
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {detail.label}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* 展开/收起按钮 */}
          {expandable && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                'w-full mt-4 py-2',
                'flex items-center justify-center gap-1',
                'text-sm font-medium',
                'text-gray-500 dark:text-gray-400',
                'hover:text-gray-700 dark:hover:text-gray-300',
                'transition-colors',
                'active:scale-95'
              )}
            >
              <span>{isExpanded ? '收起' : '查看详情'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          )}
        </>
      )}
    </div>
  )
})

ResultCard.displayName = 'ResultCard'

export default ResultCard

