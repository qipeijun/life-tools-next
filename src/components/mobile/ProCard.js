'use client'

import React, { memo, useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'

const ProCard = memo(function ProCard({
  children,
  variant = 'surface', // surface, elevated, floating, glass
  shadow = 'md', // sm, md, lg, xl, 2xl
  radius = 'xl', // sm, md, lg, xl, 2xl, 3xl, full
  padding = 'spacious', // proximity, compact, comfortabel, spacious, generous, ample
  hover = true,
  pressable = true,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState([])
  const cardRef = useRef(null)
  const timeoutRef = useRef(null)

  // 创建涟漪效果
  const createRipple = (event) => {
    if (!cardRef.current || !pressable) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
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

  // 触摸/鼠标事件处理
  const handleInteractionStart = () => {
    if (!pressable) return
    setIsPressed(true)
  }

  const handleInteractionEnd = () => {
    if (!pressable) return
    setTimeout(() => setIsPressed(false), 150)
  }

  const handleMouseDown = (event) => {
    handleInteractionStart()
    if (pressable) {
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

  // 变体配置
  const variantConfig = {
    surface: 'card-surface',
    elevated: 'card-surface-elevated',
    floating: 'card-surface-floating',
    glass: 'glass-card'
  }

  // 阴影配置
  const shadowConfig = {
    sm: 'shadow-system',
    md: 'shadow-system-md',
    lg: 'shadow-system-lg',
    xl: 'shadow-system-xl',
    '2xl': 'shadow-system-2xl'
  }

  // 圆角配置
  const radiusConfig = {
    sm: 'rounded-system',
    md: 'rounded-system-lg',
    lg: 'rounded-system-xl',
    xl: 'rounded-system-2xl',
    '2xl': 'rounded-system-3xl',
    '3xl': 'rounded-system-3xl',
    full: 'rounded-system-full'
  }

  // 内边距配置
  const paddingConfig = {
    proximity: 'p-proximity',
    compact: 'p-compact',
    comfortabel: 'p-comfortable',
    spacious: 'p-spacious',
    generous: 'p-generous',
    ample: 'p-ample'
  }

  const cardClasses = cn(
    // 基础样式
    'relative overflow-hidden',
    // 专业级设计系统
    variantConfig[variant],
    // 阴影
    shadowConfig[shadow],
    // 圆角
    radiusConfig[radius],
    // 内边距
    paddingConfig[padding],
    // 过渡动画
    'transition-apple',
    'transform-gpu will-change-transform',
    // 交互状态
    pressable && [
      'cursor-pointer touch-target-lg',
      hover && 'hover:scale-[1.02] hover:-translate-y-1',
      'active:scale-[0.98] active:translate-y-0'
    ],
    // 按压状态
    isPressed && 'scale-[0.98] shadow-system-xl',
    // 自定义样式
    className
  )

  const containerProps = {
    ref: cardRef,
    className: cardClasses,
    style: {
      transform: isPressed ? 'scale(0.98) translateZ(0)' : 'translateZ(0)',
      ...style
    },
    onClick,
    onMouseDown: pressable ? handleMouseDown : undefined,
    onMouseUp: pressable ? handleMouseUp : undefined,
    onMouseLeave: pressable ? handleInteractionEnd : undefined,
    onTouchStart: pressable ? handleInteractionStart : undefined,
    onTouchEnd: pressable ? handleInteractionEnd : undefined,
    ...props
  }

  return (
    <div {...containerProps}>
      {children}

      {/* 专业级涟漪效果 */}
      {pressable && ripples.map(ripple => (
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

      {/* Apple iOS 风格的光泽效果 */}
      {variant === 'surface' && (
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
            mask: 'linear-gradient(to bottom, black 30%, transparent 70%)',
            WebkitMask: 'linear-gradient(to bottom, black 30%, transparent 70%)'
          }}
        />
      )}
    </div>
  )
})

ProCard.displayName = 'ProCard'

export default ProCard