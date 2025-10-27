'use client'

import React, { memo, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'

const ModernToolCardFixed = memo(function ModernToolCardFixed({
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
    // 基础样式
    'relative overflow-hidden cursor-pointer',
    // 尺寸
    'h-48 sm:h-56 lg:h-64',
    // 渐变背景
    gradient,
    // 过渡和动画
    'transition-all duration-300 ease-out',
    'hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl',
    'active:scale-[0.96] active:translate-y-0',
    // GPU加速
    'transform-gpu',
    // 形状
    'rounded-2xl',
    // 自定义样式
    className
  )

  return (
    <Link
      href={href}
      ref={cardRef}
      className={cardClasses}
      style={{
        animationDelay: `${delay}ms`,
        transform: isPressed ? 'scale(0.96)' : 'scale(1)',
        boxShadow: isPressed ? '0 20px 40px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.1)'
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {/* 渐变背景叠加 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80" />

      {/* 卡片内容 */}
      <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between text-white">
        {/* 头部区域 */}
        <div className="flex items-start justify-between space-y-3">
          {/* 图标容器 */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
              <div className="w-6 h-6 sm:w-7 sm:h-7 text-white">
                {icon}
              </div>
            </div>
          </div>

          {/* 徽章区域 */}
          <div className="flex items-center gap-2 flex-wrap">
            {category && (
              <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white">
                {category}
              </span>
            )}
            {version && (
              <span className="px-2 py-1 bg-purple-500/80 backdrop-blur-md rounded-full text-xs font-bold text-white">
                {version}
              </span>
            )}
            {badge && (
              <span className="px-2 py-1 bg-green-500/80 backdrop-blur-md rounded-full text-xs font-bold text-white">
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* 主体内容 */}
        <div className="space-y-3">
          {/* 标题和副标题 */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-white/90 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* 描述文本 */}
          {description && (
            <p className="text-sm text-white/80 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* 背景装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 悬浮效果图标 */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-10">
          <div className="w-12 h-12 sm:w-16 sm:h-16 text-white blur-sm">
            {icon}
          </div>
        </div>

        {/* 动态光效 */}
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

      {/* 涟漪效果 */}
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
            animation: 'rippleEffect 0.6s ease-out forwards'
          }}
        />
      ))}
    </Link>
  )
})

ModernToolCardFixed.displayName = 'ModernToolCardFixed'

export default ModernToolCardFixed