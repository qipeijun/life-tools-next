'use client'

import React, { memo } from 'react'
import { cn } from '../../lib/utils'

/**
 * iOS风格分段控制器
 * 用于在多个选项之间切换
 */
export const SegmentedControl = memo(function SegmentedControl({
  options = [],
  selected,
  onChange,
  className = '',
  size = 'md',
  fullWidth = true,
  ...props
}) {
  const sizeClasses = {
    sm: 'h-8 text-xs',
    md: 'h-9 text-sm',
    lg: 'h-10 text-base',
  }

  const containerClasses = cn(
    // iOS风格容器
    'inline-flex p-0.5',
    'bg-gray-100 dark:bg-gray-800',
    'rounded-lg',
    'relative',
    // 尺寸
    sizeClasses[size],
    // 宽度
    fullWidth && 'w-full',
    // 自定义类
    className
  )

  const itemClasses = (isSelected) => cn(
    // 基础样式
    'relative z-10',
    'flex-1 px-3',
    'flex items-center justify-center',
    'font-semibold',
    'transition-colors duration-200',
    'cursor-pointer',
    'select-none',
    'touch-manipulation',
    // iOS风格字体
    'text-sm',
    // 颜色
    isSelected
      ? 'text-gray-900 dark:text-white'
      : 'text-gray-500 dark:text-gray-400',
    // 禁用hover在移动端
    !isSelected && 'active:text-gray-700 dark:active:text-gray-300'
  )

  const selectedIndex = options.findIndex(opt => opt.value === selected)

  return (
    <div className={containerClasses} {...props}>
      {/* 滑动背景 */}
      <div
        className={cn(
          'absolute inset-y-0.5 z-0',
          'bg-white dark:bg-gray-700',
          'rounded-md',
          'transition-all duration-200 ease-out',
          'shadow-sm'
        )}
        style={{
          left: `calc(${(selectedIndex * 100) / options.length}% + 2px)`,
          width: `calc(${100 / options.length}% - 4px)`,
        }}
      />

      {/* 选项 */}
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={itemClasses(option.value === selected)}
          aria-pressed={option.value === selected}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
})

SegmentedControl.displayName = 'SegmentedControl'

export default SegmentedControl

