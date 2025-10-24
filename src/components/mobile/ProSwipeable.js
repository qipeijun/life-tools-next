'use client'

import React, { memo, useRef, useEffect, useCallback, useState } from 'react'
import { cn } from '../../lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAdvancedGestures, hapticFeedback } from '../../hooks/useAdvancedGestures'

const ProSwipeable = memo(function ProSwipeable({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 60,
  snapToPoints = [],
  resistance = 0.6,
  showIndicators = false,
  loop = false,
  className = '',
  style = {},
  ...props
}) {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transform, setTransform] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [velocity, setVelocity] = useState(0)
  const dragStartRef = useRef({ x: 0, y: 0, time: 0 })
  const animationRef = useRef(null)

  // 计算吸附点
  const snapToClosest = useCallback((currentTransform) => {
    if (snapToPoints.length === 0) return currentTransform

    let closestIndex = 0
    let minDistance = Math.abs(currentTransform - snapToPoints[0])

    snapToPoints.forEach((point, index) => {
      const distance = Math.abs(currentTransform - point)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = index
      }
    })

    // 触觉反馈
    hapticFeedback.selection()

    // 动画到最近点
    animateToPoint(snapToPoints[closestIndex], closestIndex)
    return closestIndex
  }, [snapToPoints])

  // 平滑动画到指定点
  const animateToPoint = useCallback((targetX, targetIndex) => {
    const startX = transform
    const distance = targetX - startX
    const duration = 300

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Apple 风格缓动
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentX = startX + distance * easeOut

      setTransform(currentX)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setVelocity(0)
        setCurrentIndex(targetIndex)
      }
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [transform])

  // 处理滑动手势
  const handleSwipe = useCallback((event, direction, data) => {
    const { deltaX, deltaY, distance } = data

    switch (direction) {
      case 'left':
        if (onSwipeLeft) {
          hapticFeedback.swipe()
          onSwipeLeft(event, { deltaX, deltaY, distance })
        }
        // 自动吸附
        if (snapToPoints.length > 0) {
          const nextIndex = currentIndex < snapToPoints.length - 1 ? currentIndex + 1 : (loop ? 0 : currentIndex)
          animateToPoint(snapToPoints[nextIndex], nextIndex)
        }
        break
      case 'right':
        if (onSwipeRight) {
          hapticFeedback.swipe()
          onSwipeRight(event, { deltaX, deltaY, distance })
        }
        // 自动吸附
        if (snapToPoints.length > 0) {
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : (loop ? snapToPoints.length - 1 : currentIndex)
          animateToPoint(snapToPoints[prevIndex], prevIndex)
        }
        break
      case 'up':
        if (onSwipeUp) {
          hapticFeedback.swipe()
          onSwipeUp(event, { deltaX, deltaY, distance })
        }
        break
      case 'down':
        if (onSwipeDown) {
          hapticFeedback.swipe()
          onSwipeDown(event, { deltaX, deltaY, distance })
        }
        break
    }
  }, [currentIndex, snapToPoints, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, loop, animateToPoint])

  // 绑定高级手势
  useAdvancedGestures(containerRef, {
    onSwipe: handleSwipe,
    swipeThreshold: threshold
  })

  // 指示器点击
  const handleIndicatorClick = useCallback((index) => {
    animateToPoint(snapToPoints[index], index)
  }, [snapToPoints, animateToPoint])

  // 清理动画
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // 容器样式
  const containerClasses = cn(
    'relative overflow-hidden',
    'transition-apple',
    'transform-gpu will-change-transform',
    className
  )

  // 内容样式
  const contentStyle = {
    transform: `translateX(${transform}px) translateZ(0)`,
    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
    willChange: 'transform'
  }

  return (
    <div className={containerClasses} style={style} {...props}>
      {/* 滑动指示器 */}
      {showIndicators && snapToPoints.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {snapToPoints.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={cn(
                'w-2 h-2 rounded-system-full transition-all duration-300',
                index === currentIndex
                  ? 'w-6 bg-ios-blue-600 dark:bg-ios-blue-400'
                  : 'bg-ios-gray-300 dark:bg-ios-gray-600 hover:bg-ios-gray-400'
              )}
              aria-label={`跳转到第 ${index + 1} 页`}
            />
          ))}
        </div>
      )}

      {/* 滑动内容 */}
      <div
        className="w-full"
        style={contentStyle}
      >
        {children}
      </div>

      {/* 左右滑动提示 */}
      {!isDragging && snapToPoints.length === 0 && (
        <>
          {/* 左滑提示 */}
          {onSwipeLeft && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-30">
              <ChevronLeft className="w-6 h-6 text-ios-gray-400 dark:text-ios-gray-500" />
            </div>
          )}

          {/* 右滑提示 */}
          {onSwipeRight && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30">
              <ChevronRight className="w-6 h-6 text-ios-gray-400 dark:text-ios-gray-500" />
            </div>
          )}
        </>
      )}

      {/* 滑动边界阻力效果 */}
      {isDragging && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* 左边界 */}
          {transform > 20 && (
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ios-blue-500/20 rounded-full flex items-center justify-center"
              style={{
                backdropFilter: 'blur(4px)'
              }}
            >
              <ChevronLeft className="w-6 h-6 text-ios-blue-600" />
            </div>
          )}

          {/* 右边界 */}
          {transform < -20 && (
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ios-blue-500/20 rounded-full flex items-center justify-center"
              style={{
                backdropFilter: 'blur(4px)'
              }}
            >
              <ChevronRight className="w-6 h-6 text-ios-blue-600" />
            </div>
          )}
        </div>
      )}
    </div>
  )
})

ProSwipeable.displayName = 'ProSwipeable'

export default ProSwipeable