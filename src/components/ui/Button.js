'use client'

import React, { memo, useCallback, forwardRef } from 'react'
import { cn } from '../../lib/utils'

const buttonVariants = {
  variant: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  },
  size: {
    sm: 'btn-sm',      // h-8 px-3 text-xs
    md: 'btn-md',      // h-10 px-4 py-2 text-sm (默认)
    lg: 'btn-lg',      // h-12 px-6 text-base
    xl: 'btn-xl',      // h-14 px-8 text-lg
  },
}

export const Button = memo(forwardRef(function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  fullWidth = false,
  rounded = false,
  ...props
}, ref) {
  // 优化点击事件处理
  const handleClick = useCallback((e) => {
    if (!disabled && !loading && onClick) {
      onClick(e)
    }
  }, [disabled, loading, onClick])

  const baseClasses = cn(
    // 基础按钮样式
    'btn',
    // 变体样式
    buttonVariants.variant[variant],
    // 移动端优先设计 - 确保符合移动端触摸标准 (44px+)
    'min-h-[44px] px-4 text-base font-medium', // 默认移动端样式
    'active:scale-95 transition-transform duration-75', // 移动端触摸反馈
    // 小屏及以上可以稍小
    'sm:min-h-[40px] sm:px-3 sm:text-sm sm:font-normal',
    'md:min-h-[40px] md:px-4 md:text-sm md:font-normal',
    'lg:min-h-[40px] lg:px-4 lg:text-sm lg:font-normal',
    // 响应式间距 - 移动端更宽松的间距
    'py-3 sm:py-2 md:py-2 lg:py-2',
    // 状态样式
    disabled && 'cursor-not-allowed active:scale-100 opacity-60',
    loading && 'cursor-wait',
    // 布局样式
    fullWidth && 'w-full',
    rounded && 'rounded-full',
    // 移动端触摸优化
    'touch-manipulation', // 优化触摸性能
    'select-none', // 防止文字选择
    '-webkit-tap-highlight-color-transparent', // 移除iOS点击高亮
    // 对齐样式 - 确保图标和文字垂直居中
    'inline-flex items-center justify-center',
    // 自定义样式
    className
  )

  const renderIcon = () => {
    if (!icon) return null
    
    const iconClasses = cn(
      'flex-shrink-0',
      // 移动端优先图标尺寸
      'w-5 h-5', // 移动端 - 更大的触摸目标
      'sm:w-4 sm:h-4', // 小屏及以上
      'md:w-4 md:h-4', // 中屏及以上
      'lg:w-4 lg:h-4'  // 大屏及以上
    )

    return <span className={iconClasses}>{icon}</span>
  }

  const renderLoadingSpinner = () => {
    if (!loading) return null

    const spinnerClasses = cn(
      'animate-spin',
      // 移动端优先spinner尺寸
      'w-5 h-5', // 移动端 - 与图标尺寸一致
      'sm:w-4 sm:h-4', // 小屏及以上
      'md:w-4 md:h-4', // 中屏及以上
      'lg:w-4 lg:h-4'  // 大屏及以上
    )

    return (
      <svg
        className={spinnerClasses}
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      className={baseClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && renderLoadingSpinner()}
      {!loading && icon && iconPosition === 'left' && renderIcon()}
      <span className="truncate">{children}</span>
      {!loading && icon && iconPosition === 'right' && renderIcon()}
    </button>
  )
}))

// 设置显示名称
Button.displayName = 'Button'

// 比较函数优化
Button.equals = (prevProps, nextProps) => {
  return (
    prevProps.children === nextProps.children &&
    prevProps.variant === nextProps.variant &&
    prevProps.size === nextProps.size &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.loading === nextProps.loading &&
    prevProps.className === nextProps.className &&
    prevProps.icon === nextProps.icon &&
    prevProps.iconPosition === nextProps.iconPosition &&
    prevProps.fullWidth === nextProps.fullWidth &&
    prevProps.rounded === nextProps.rounded &&
    prevProps.type === nextProps.type
  )
}

// 导出变体配置供其他组件使用
export { buttonVariants }
