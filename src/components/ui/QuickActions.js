'use client'

import React, { memo } from 'react'
import { cn } from '../../lib/utils'

/**
 * 快捷操作按钮组
 * iOS风格的快捷选择按钮
 */
export const QuickActions = memo(function QuickActions({
  options = [],
  selected,
  onChange,
  className = '',
  columns = 3,
  ...props
}) {
  const containerClasses = cn(
    // Grid布局
    'grid gap-3',
    // 动态列数
    columns === 2 && 'grid-cols-2',
    columns === 3 && 'grid-cols-3',
    columns === 4 && 'grid-cols-4',
    // 自定义类
    className
  )

  const buttonClasses = (isSelected) => cn(
    // iOS风格按钮
    'h-12',
    'px-4',
    'flex items-center justify-center',
    'rounded-xl',
    'font-semibold text-base',
    'transition-all duration-200',
    'touch-manipulation',
    'select-none',
    'active:scale-95',
    // 颜色
    isSelected
      ? 'bg-blue-500 text-white shadow-sm'
      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    // iOS系统蓝色
    isSelected && 'ios-bg-blue'
  )

  return (
    <div className={containerClasses} {...props}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={buttonClasses(option.value === selected)}
          aria-pressed={option.value === selected}
        >
          {option.icon && <span className="mr-2">{option.icon}</span>}
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  )
})

QuickActions.displayName = 'QuickActions'

export default QuickActions

