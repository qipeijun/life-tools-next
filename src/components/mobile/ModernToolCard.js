'use client'

import React, { memo, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'

const ModernToolCard = memo(function ModernToolCard({
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
  className = '',
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState([])
  const cardRef = useRef(null)
  const timeoutRef = useRef(null)

  // 创建涟漪效果
  const createRipple = (event) => {
    if (!cardRef.current) return

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

    // 清理涟漪
    timeoutRef.current = setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)
  }

  // 触摸开始
  const handleTouchStart = () => {
    setIsPressed(true)
  }

  // 触摸结束
  const handleTouchEnd = () => {
    setTimeout(() => setIsPressed(false), 150)
  }

  // 鼠标按下
  const handleMouseDown = (event) => {
    setIsPressed(true)
    createRipple(event)
  }

  // 鼠标释放
  const handleMouseUp = () => {
    setTimeout(() => setIsPressed(false), 150)
  }

  // 清理timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const cardClasses = cn(
    // 专业级设计系统样式
    'card-surface-floating',
    'relative overflow-hidden cursor-pointer touch-target-lg',
    // 现代化尺寸
    'h-48 sm:h-56 md:h-64',
    // 专业级动画和过渡
    'transition-apple',
    'animate-modern-slide-up',
    'hover:scale-[1.02] hover:-translate-y-2',
    'active:scale-[0.96] active:translate-y-0',
    // GPU加速和性能优化
    'transform-gpu will-change-transform',
    // 状态变化
    isPressed && 'scale-[0.96] shadow-system-xl',
    className
  )

  return (
    <Link
      href={href}
      ref={cardRef}
      className={cardClasses}
      style={{
        animationDelay: `${delay}ms`,
        transform: isPressed ? 'scale(0.96) translateZ(0)' : 'translateZ(0)'
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {/* 专业级渐变背景 */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-90', gradient)} />

      {/* 增强的层次叠加 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* 卡片内容 */}
      <div className="relative h-full p-spacious sm:p-8 flex flex-col justify-between text-white">
        {/* 头部区域 */}
        <div className="flex items-start justify-between space-y-generous">
          {/* 专业级图标容器 */}
          <div className="flex-shrink-0">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-xl rounded-system-3xl flex items-center justify-center border border-white/30 shadow-system-lg"
              style={{
                boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(255,255,255,0.1)'
              }}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg">
                {icon}
              </div>
            </div>
          </div>

          {/* 专业级徽章区域 */}
          <div className="flex items-center gap-compact flex-wrap">
            {category && (
              <span
                className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-system-xs font-semibold text-white border border-white/20"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {category}
              </span>
            )}
            {version && (
              <span
                className="px-3 py-1 bg-accent-500/30 backdrop-blur-md rounded-full text-system-xs font-bold text-white border border-accent-400/30"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {version}
              </span>
            )}
            {badge && (
              <span
                className="px-3 py-1 bg-success-500/30 backdrop-blur-md rounded-full text-system-xs font-bold text-white border border-success-400/30"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* 主体内容 */}
        <div className="space-y-comfortable">
          {/* 标题和副标题 */}
          <div className="space-y-compact">
            <h3
              className="text-system-xl sm:text-system-2xl font-bold text-white drop-shadow-lg leading-tight"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                letterSpacing: '-0.025em'
              }}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className="text-system-sm sm:text-system-base text-white/95 drop-shadow-md leading-relaxed"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* 描述文本 */}
          {description && (
            <p
              className="text-system-sm text-white/80 line-clamp-2 leading-relaxed"
              style={{
                lineHeight: 'var(--line-height-relaxed)',
                opacity: 0.9
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* 背景装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 悬浮效果图标 */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-20">
          <div className="w-16 h-16 sm:w-20 sm:h-20 text-white blur-sm">
            {icon}
          </div>
        </div>

        {/* 专业级动态光效 */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientShift 8s ease-in-out infinite'
          }}
        />

        {/* 边缘高光效果 */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
            mask: 'linear-gradient(to bottom, black 30%, transparent 70%)',
            WebkitMask: 'linear-gradient(to bottom, black 30%, transparent 70%)'
          }}
        />
      </div>

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
    </Link>
  )
})

ModernToolCard.displayName = 'ModernToolCard'

export default ModernToolCard