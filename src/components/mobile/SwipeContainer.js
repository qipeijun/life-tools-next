'use client'

import React, { memo, useRef, useEffect, useState } from 'react'
import { useSwipe } from '../../hooks/useGestures'
import { cn } from '../../lib/utils'

const SwipeContainer = memo(function SwipeContainer({
  children,
  onSwipe,
  onSwipeStart,
  onSwipeEnd,
  threshold = 50,
  snapToPoints = [],
  resistance = 0.5,
  resistanceBoundaries = { left: -100, right: 100 },
  className = '',
  style = {},
  ...props
}) {
  const containerRef = useRef(null)
  const [transform, setTransform] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [velocity, setVelocity] = useState({ x: 0, y: 0 })
  const animationRef = useRef(null)
  const lastTimeRef = useRef(0)

  // 使用手势Hook
  const { gestures, handlers } = useSwipe((direction, event) => {
    if (onSwipe) {
      onSwipe(direction, event, { transform, velocity })
    }

    // 执行吸附到指定点
    if (snapToPoints.length > 0) {
      snapToClosest()
    }
  }, { threshold })

  // 吸附到最近的点
  const snapToClosest = () => {
    if (snapToPoints.length === 0) return

    const { x } = transform
    let closestPoint = 0
    let minDistance = Math.abs(x - snapToPoints[0])

    snapToPoints.forEach(point => {
      const distance = Math.abs(x - point)
      if (distance < minDistance) {
        minDistance = distance
        closestPoint = point
      }
    })

    // 执行平滑动画
    animateTransform(closestPoint)
  }

  // 平滑变换动画
  const animateTransform = (targetX) => {
    const startX = transform.x
    const distance = targetX - startX
    const duration = 300 // 动画持续时间
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // 使用ease-out缓动函数
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentX = startX + distance * easeOut

      setTransform(prev => ({ ...prev, x: currentX }))

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setVelocity({ x: 0, y: 0 })
        onSwipeEnd?.()
      }
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  // 处理触摸开始
  const handleTouchStart = (event) => {
    setIsDragging(true)
    lastTimeRef.current = performance.now()
    onSwipeStart?.(event)
    handlers.onTouchStart(event)
  }

  // 处理触摸移动
  const handleTouchMove = (event) => {
    if (!isDragging) return

    const currentTime = performance.now()
    const deltaTime = currentTime - lastTimeRef.current

    if (deltaTime > 0) {
      const touch = event.touches[0]
      const deltaX = touch.clientX - (touch.clientX - transform.x)

      // 计算速度
      const newVelocityX = deltaX / deltaTime
      setVelocity(prev => ({
        x: newVelocityX * 0.8 + prev.x * 0.2, // 平滑处理
        y: 0
      }))
    }

    lastTimeRef.current = currentTime
    handlers.onTouchMove(event)
  }

  // 处理触摸结束
  const handleTouchEnd = (event) => {
    setIsDragging(false)
    handlers.onTouchEnd(event)

    // 如果速度足够大，继续惯性滑动
    if (Math.abs(velocity.x) > 0.5) {
      const targetX = transform.x + velocity.x * 200 // 惯性距离

      // 应用阻力边界
      let finalX = targetX
      if (targetX < resistanceBoundaries.left) {
        finalX = resistanceBoundaries.left + (targetX - resistanceBoundaries.left) * resistance
      } else if (targetX > resistanceBoundaries.right) {
        finalX = resistanceBoundaries.right + (targetX - resistanceBoundaries.right) * resistance
      }

      animateTransform(finalX)
    }
  }

  // 清理动画
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // 计算变换样式
  const transformStyle = {
    transform: `translateX(${transform.x}px) translateZ(0)`,
    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: isDragging ? 'transform' : 'auto',
    ...style
  }

  // 容器样式
  const containerClasses = cn(
    'relative',
    'touch-manipulation',
    'select-none',
    // 防止默认的滚动行为
    isDragging && 'overflow-hidden',
    className
  )

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      style={transformStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {children}

      {/* 滑动指示器 */}
      {snapToPoints.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
          {snapToPoints.map((point, index) => {
            const isActive = Math.abs(transform.x - point) < 10
            return (
              <button
                key={index}
                onClick={() => animateTransform(point)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  isActive
                    ? 'w-6 bg-primary-600 dark:bg-primary-400'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                )}
                aria-label={`跳转到第 ${index + 1} 页`}
              />
            )
          })}
        </div>
      )}

      {/* 边界阻力指示器 */}
      {isDragging && (
        <div className="absolute inset-0 pointer-events-none z-40">
          {transform.x < resistanceBoundaries.left + 50 && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200/50 dark:bg-gray-700/50 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          )}
          {transform.x > resistanceBoundaries.right - 50 && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200/50 dark:bg-gray-700/50 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  )
})

SwipeContainer.displayName = 'SwipeContainer'

export default SwipeContainer