'use client'

import React, { memo, useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'
import { Loader2 } from 'lucide-react'

const ProButton = memo(function ProButton({
  children,
  variant = 'primary', // primary, secondary, ghost, danger, success, warning
  size = 'medium', // small, medium, large, xl
  icon = null,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  pressable = true,
  className = '',
  onClick,
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState([])
  const buttonRef = useRef(null)
  const timeoutRef = useRef(null)

  // 创建涟漪效果
  const createRipple = (event) => {
    if (!buttonRef.current || !pressable || loading || disabled) return

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

    timeoutRef.current = setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }

  // 交互处理
  const handleInteractionStart = () => {
    if (!pressable || loading || disabled) return
    setIsPressed(true)
  }

  const handleInteractionEnd = () => {
    if (!pressable || loading || disabled) return
    setTimeout(() => setIsPressed(false), 150)
  }

  const handleMouseDown = (event) => {
    handleInteractionStart()
    if (pressable && !loading && !disabled) {
      createRipple(event)
    }
  }

  const handleMouseUp = () => {
    handleInteractionEnd()
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
      button: 'h-10 min-h-[40px] px-4 text-system-sm',
      icon: 'w-4 h-4'
    },
    medium: {
      button: 'h-12 min-h-[48px] px-6 text-system-base',
      icon: 'w-5 h-5'
    },
    large: {
      button: 'h-14 min-h-[56px] px-8 text-system-lg',
      icon: 'w-6 h-6'
    },
    xl: {
      button: 'h-16 min-h-[64px] px-10 text-system-xl',
      icon: 'w-7 h-7'
    }
  }

  // 变体配置 - Apple iOS + Ant Design 混合
  const variantConfig = {
    primary: {
      background: 'bg-gradient-to-r from-ios-blue-500 to-ios-blue-600',
      hover: 'hover:from-ios-blue-600 hover:to-ios-blue-700',
      text: 'text-white',
      shadow: 'shadow-system-md hover:shadow-system-lg',
      ring: 'ring-2 ring-ios-blue-500/20'
    },
    secondary: {
      background: 'bg-white/95 dark:bg-gray-900/95',
      hover: 'hover:bg-white dark:hover:bg-gray-900',
      text: 'text-gray-900 dark:text-gray-100',
      border: 'border-2 border-ios-gray-300 dark:border-ios-gray-600',
      shadow: 'shadow-system hover:shadow-system-md',
      ring: 'ring-2 ring-gray-500/20'
    },
    ghost: {
      background: 'bg-white/10 dark:bg-gray-800/10',
      hover: 'hover:bg-white/20 dark:hover:bg-gray-800/20',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border border-white/20 dark:border-gray-700/20',
      shadow: 'shadow-system-sm hover:shadow-system-md',
      backdrop: 'backdrop-blur-xl'
    },
    danger: {
      background: 'bg-gradient-to-r from-ios-red-500 to-ios-red-600',
      hover: 'hover:from-ios-red-600 hover:to-ios-red-700',
      text: 'text-white',
      shadow: 'shadow-system-md hover:shadow-system-lg',
      ring: 'ring-2 ring-ios-red-500/20'
    },
    success: {
      background: 'bg-gradient-to-r from-ios-green-500 to-ios-green-600',
      hover: 'hover:from-ios-green-600 hover:to-ios-green-700',
      text: 'text-white',
      shadow: 'shadow-system-md hover:shadow-system-lg',
      ring: 'ring-2 ring-ios-green-500/20'
    },
    warning: {
      background: 'bg-gradient-to-r from-ios-orange-500 to-ios-orange-600',
      hover: 'hover:from-ios-orange-600 hover:to-ios-orange-700',
      text: 'text-white',
      shadow: 'shadow-system-md hover:shadow-system-lg',
      ring: 'ring-2 ring-ios-orange-500/20'
    }
  }

  const config = variantConfig[variant]
  const sizeClasses = sizeConfig[size]

  const buttonClasses = cn(
    // 专业级设计系统
    'relative overflow-hidden',
    'inline-flex items-center justify-center',
    'font-semibold text-center',
    // 现代化圆角
    'rounded-system-xl',
    // 专业级动画和过渡
    'transition-apple',
    'transform-gpu will-change-transform',
    // 尺寸
    sizeClasses.button,
    // 变体样式
    config.background,
    config.hover,
    config.text,
    config.border || '',
    config.shadow,
    // 交互状态
    pressable && !loading && !disabled && [
      'active:scale-[0.96] active:translate-y-0',
      'hover:scale-[1.02] hover:-translate-y-0.5',
      isPressed && 'scale-[0.96] translate-y-0'
    ],
    // 禁用状态
    disabled && [
      'opacity-50 cursor-not-allowed',
      'transform-none active:scale-100'
    ],
    // 加载状态
    loading && 'cursor-wait',
    // 焦点环
    pressable && 'focus-visible:outline-none focus-visible:' + config.ring,
    // 宽度
    fullWidth && 'w-full',
    // Apple iOS 触摸目标
    pressable && 'touch-target-lg',
    // 毛玻璃效果（ghost变体）
    variant === 'ghost' && config.backdrop,
    // 自定义类
    className
  )

  const contentClasses = cn(
    'relative z-10 flex items-center justify-center gap-2',
    // 加载动画
    loading && 'opacity-0'
  )

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
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      disabled={disabled || loading}
      {...props}
    >
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

      {/* 加载器 */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Loader2 className="w-5 h-5 animate-spin" />
        </div>
      )}

      {/* 专业级涟漪效果 */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            transform: 'scale(0)',
            opacity: 1,
            animation: 'rippleEffect 0.6s var(--ease-apple-out) forwards'
          }}
        />
      ))}

      {/* Apple iOS 风格的按压效果 */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-150',
          'bg-white/10 dark:bg-black/10',
          isPressed && 'opacity-100'
        )}
      />
    </button>
  )
})

ProButton.displayName = 'ProButton'

export default ProButton