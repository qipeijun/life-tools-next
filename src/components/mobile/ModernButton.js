'use client'

import React, { memo, useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'

const ModernButton = memo(function ModernButton({
  children,
  variant = 'primary', // primary, secondary, ghost, danger, success
  size = 'medium', // small, medium, large, xl
  icon = null,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  rounded = 'full', // full, large, medium, small
  onClick,
  className = '',
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState([])
  const buttonRef = useRef(null)
  const timeoutRef = useRef(null)

  // 创建涟漪效果
  const createRipple = (event) => {
    if (!buttonRef.current || disabled || loading) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size
    }

    setRipples(prev => [...prev, newRipple])

    // 清理涟漪
    timeoutRef.current = setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }

  // 按下处理
  const handleMouseDown = (event) => {
    if (disabled || loading) return
    setIsPressed(true)
    createRipple(event)
  }

  // 释放处理
  const handleMouseUp = () => {
    setTimeout(() => setIsPressed(false), 150)
  }

  // 触摸开始
  const handleTouchStart = (event) => {
    if (disabled || loading) return
    setIsPressed(true)
    createRipple(event)
  }

  // 触摸结束
  const handleTouchEnd = () => {
    setTimeout(() => setIsPressed(false), 150)
  }

  // 清理
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // 尺寸配置
  const sizeConfig = {
    small: {
      button: 'h-10 px-4 text-sm min-h-[40px]',
      icon: 'w-4 h-4'
    },
    medium: {
      button: 'h-14 px-6 text-base min-h-[56px]',
      icon: 'w-5 h-5'
    },
    large: {
      button: 'h-16 px-8 text-lg min-h-[64px]',
      icon: 'w-6 h-6'
    },
    xl: {
      button: 'h-20 px-10 text-xl min-h-[80px]',
      icon: 'w-7 h-7'
    }
  }

  // 圆角配置
  const roundedConfig = {
    full: 'rounded-3xl',
    large: 'rounded-2xl',
    medium: 'rounded-xl',
    small: 'rounded-lg'
  }

  // 变体配置
  const variantConfig = {
    primary: {
      background: 'bg-gradient-to-r from-primary-600 to-primary-700',
      hover: 'hover:from-primary-700 hover:to-primary-800',
      text: 'text-white',
      border: 'border-primary-600',
      shadow: 'shadow-lg hover:shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40'
    },
    secondary: {
      background: 'bg-white/80 dark:bg-gray-900/80',
      hover: 'hover:bg-white dark:hover:bg-gray-900',
      text: 'text-gray-900 dark:text-gray-100',
      border: 'border-gray-200 dark:border-gray-700',
      shadow: 'shadow-lg hover:shadow-xl'
    },
    ghost: {
      background: 'bg-white/10 dark:bg-gray-800/10',
      hover: 'hover:bg-white/20 dark:hover:bg-gray-800/20',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border-white/20 dark:border-gray-700/20',
      shadow: 'shadow-md hover:shadow-lg'
    },
    danger: {
      background: 'bg-gradient-to-r from-error-600 to-error-700',
      hover: 'hover:from-error-700 hover:to-error-800',
      text: 'text-white',
      border: 'border-error-600',
      shadow: 'shadow-lg hover:shadow-xl shadow-error-500/25 hover:shadow-error-500/40'
    },
    success: {
      background: 'bg-gradient-to-r from-success-600 to-success-700',
      hover: 'hover:from-success-700 hover:to-success-800',
      text: 'text-white',
      border: 'border-success-600',
      shadow: 'shadow-lg hover:shadow-xl shadow-success-500/25 hover:shadow-success-500/40'
    }
  }

  const config = variantConfig[variant]
  const sizeClasses = sizeConfig[size]

  // 按钮类
  const buttonClasses = cn(
    // 专业级设计系统样式
    'card-surface-elevated',
    'relative overflow-hidden touch-target-lg',
    'inline-flex items-center justify-center',
    'font-semibold text-center',
    // 专业级动画和过渡
    'transition-apple',
    'transform-gpu will-change-transform',
    // 禁用状态
    disabled && [
      'opacity-50 cursor-not-allowed',
      'transform-none active:scale-100'
    ],
    // 加载状态
    loading && 'cursor-wait',
    // 尺寸
    sizeClasses.button,
    // 专业级圆角
    roundedConfig[rounded],
    // 变体样式
    config.background,
    config.hover,
    config.text,
    config.border,
    config.shadow,
    // 交互状态
    !disabled && !loading && [
      'active:scale-[0.96] active:translate-y-0',
      'hover:scale-[1.02] hover:-translate-y-0.5',
      isPressed && 'scale-[0.96] translate-y-0'
    ],
    // 宽度
    fullWidth && 'w-full',
    // 专业级毛玻璃效果（ghost变体）
    variant === 'ghost' && [
      'backdrop-blur-xl border-white/20 dark:border-gray-700/20',
      'bg-white/10 dark:bg-gray-800/10'
    ],
    className
  )

  // 内容类
  const contentClasses = cn(
    'relative z-10 flex items-center justify-center gap-2',
    // 加载动画
    loading && 'opacity-0'
  )

  // 图标类
  const iconClasses = cn(
    'flex-shrink-0 transition-transform duration-200',
    sizeClasses.icon,
    iconPosition === 'right' && 'rotate-180'
  )

  return (
    <button
      ref={buttonRef}
      className={buttonClasses}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      disabled={disabled || loading}
      {...props}
    >
      {/* 背景动画效果 */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-300',
          'bg-white/10 dark:bg-black/10',
          isPressed && 'opacity-100'
        )}
      />

      {/* 加载器 */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* 按钮内容 */}
      <div className={contentClasses}>
        {/* 左侧图标 */}
        {icon && iconPosition === 'left' && (
          <span className={iconClasses}>
            {icon}
          </span>
        )}

        {/* 按钮文本 */}
        <span className="select-none">
          {children}
        </span>

        {/* 右侧图标 */}
        {icon && iconPosition === 'right' && (
          <span className={iconClasses}>
            {icon}
          </span>
        )}
      </div>

      {/* 涟漪效果 */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  )
})

ModernButton.displayName = 'ModernButton'

export default ModernButton