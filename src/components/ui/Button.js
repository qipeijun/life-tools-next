'use client'

import React, { memo, useCallback } from 'react'
import { cn } from '../../lib/utils'

export const Button = memo(function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
 className = '',
  icon,
  onClick,
  type = 'button',
  mobile = false,
  ...props
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  }

  const sizes = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }

  // 优化点击事件处理
  const handleClick = useCallback((e) => {
    if (!disabled && !loading && onClick) {
      onClick(e)
    }
  }, [disabled, loading, onClick])

  const classes = cn(
    'btn',
    mobile && 'h-14 px-6 py-3 text-base min-h-[56px] rounded-2xl', // 移动端优化
    variants[variant],
    sizes[size],
    (disabled || loading) && 'opacity-50 cursor-not-allowed',
    loading && 'opacity-75',
    className
  )

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {icon && !loading && (
        <span className="w-4 h-4">{icon}</span>
      )}
      {children}
    </button>
  )
}, (prevProps, nextProps) => {
  // 自定义比较函数，只在必要时重新渲染
  return (
    prevProps.children === nextProps.children &&
    prevProps.variant === nextProps.variant &&
    prevProps.size === nextProps.size &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.loading === nextProps.loading &&
    prevProps.className === nextProps.className &&
    prevProps.icon === nextProps.icon &&
    prevProps.mobile === nextProps.mobile &&
    prevProps.type === nextProps.type
  )
})
