'use client'

import React, { memo } from 'react'
import { cn } from '../../lib/utils'
import { Check, X, AlertTriangle, Info, Sparkles } from 'lucide-react'

const ProBadge = memo(function ProBadge({
  children,
  variant = 'default', // default, primary, secondary, success, warning, error, info
  size = 'medium', // small, medium, large
  shape = 'pill', // pill, square, rounded
  dot = false,
  icon = null,
  className = '',
  ...props
}) {
  // 尺寸配置
  const sizeConfig = {
    small: {
      text: 'text-system-xs',
      padding: 'px-2 py-0.5',
      icon: 'w-3 h-3'
    },
    medium: {
      text: 'text-system-sm',
      padding: 'px-3 py-1',
      icon: 'w-4 h-4'
    },
    large: {
      text: 'text-system-base',
      padding: 'px-4 py-1.5',
      icon: 'w-5 h-5'
    }
  }

  // 变体配置 - Apple iOS + Ant Design 混合
  const variantConfig = {
    default: {
      background: 'bg-ios-gray-100 dark:bg-ios-gray-800',
      text: 'text-ios-gray-800 dark:text-ios-gray-200',
      border: 'border border-ios-gray-300 dark:border-ios-gray-600'
    },
    primary: {
      background: 'bg-ios-blue-100 dark:bg-ios-blue-900/30',
      text: 'text-ios-blue-800 dark:text-ios-blue-300',
      border: 'border border-ios-blue-300 dark:border-ios-blue-700'
    },
    secondary: {
      background: 'bg-ios-purple-100 dark:bg-ios-purple-900/30',
      text: 'text-ios-purple-800 dark:text-ios-purple-300',
      border: 'border border-ios-purple-300 dark:border-ios-purple-700'
    },
    success: {
      background: 'bg-ios-green-100 dark:bg-ios-green-900/30',
      text: 'text-ios-green-800 dark:text-ios-green-300',
      border: 'border border-ios-green-300 dark:border-ios-green-700'
    },
    warning: {
      background: 'bg-ios-orange-100 dark:bg-ios-orange-900/30',
      text: 'text-ios-orange-800 dark:text-ios-orange-300',
      border: 'border border-ios-orange-300 dark:border-ios-orange-700'
    },
    error: {
      background: 'bg-ios-red-100 dark:bg-ios-red-900/30',
      text: 'text-ios-red-800 dark:text-ios-red-300',
      border: 'border border-ios-red-300 dark:border-ios-red-700'
    },
    info: {
      background: 'bg-ios-blue-100 dark:bg-ios-blue-900/30',
      text: 'text-ios-blue-800 dark:text-ios-blue-300',
      border: 'border border-ios-blue-300 dark:border-ios-blue-700'
    }
  }

  // 形状配置
  const shapeConfig = {
    pill: 'rounded-system-full',
    square: 'rounded-system',
    rounded: 'rounded-system-lg'
  }

  const sizeClasses = sizeConfig[size]
  const variantClasses = variantConfig[variant]

  // 默认图标
  const defaultIcon = {
    success: <Check className={sizeClasses.icon} />,
    error: <X className={sizeClasses.icon} />,
    warning: <AlertTriangle className={sizeClasses.icon} />,
    info: <Info className={sizeClasses.icon} />,
    default: <Sparkles className={sizeClasses.icon} />
  }

  const displayIcon = icon || defaultIcon[variant]

  // 点状徽章
  if (dot) {
    return (
      <span
        className={cn(
          'absolute top-0 right-0 block h-3 w-3 rounded-system-full',
          variantClasses.background,
          variant === 'success' && 'bg-ios-green',
          variant === 'error' && 'bg-ios-red',
          variant === 'warning' && 'bg-ios-orange',
          className
        )}
        {...props}
      />
    )
  }

  const badgeClasses = cn(
    // 基础样式
    'inline-flex items-center justify-center',
    'font-semibold text-center',
    'transition-apple',
    'transform-gpu will-change-transform',
    // 尺寸
    sizeClasses.padding,
    sizeClasses.text,
    // 变体样式
    variantClasses.background,
    variantClasses.text,
    variantClasses.border,
    // 形状
    shapeConfig[shape],
    // 悬停效果
    'hover:scale-105 active:scale-95',
    // 阴影
    'shadow-system-sm hover:shadow-system-md',
    // 自定义样式
    className
  )

  return (
    <span className={badgeClasses} {...props}>
      {/* 图标 */}
      {displayIcon && (
        <span className="flex-shrink-0">
          {displayIcon}
        </span>
      )}

      {/* 文本内容 */}
      {children && (
        <span className="truncate">
          {children}
        </span>
      )}
    </span>
  )
})

ProBadge.displayName = 'ProBadge'

export default ProBadge