'use client'

import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../../lib/utils'
import { useIntersectionObserver } from '../../hooks/usePerformanceAnimation'

const ProProgressiveLoader = memo(function ProProgressiveLoader({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0,
  duration = 600,
  staggerDelay = 100,
  direction = 'up', // up, down, left, right, fade, scale
  trigger = 'visible', // visible, scroll, manual
  onComplete,
  className = '',
  style = {},
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [childrenReady, setChildrenReady] = useState(false)
  const containerRef = useRef(null)
  const timeoutRef = useRef(null)

  // 交叉观察器 - 用于检测可见性
  const elementRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting && !isVisible) {
      setIsVisible(true)
      // 延迟开始加载
      timeoutRef.current = setTimeout(() => {
        setChildrenReady(true)
        // 渐进式加载子组件
        setIsLoaded(true)
        onComplete?.(entry)
      }, delay)
    }
  }, { threshold, rootMargin })

  // 清理函数
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // 渐进式动画样式映射
  const getAnimationClasses = useCallback((index, total, isVisible, isLoaded) => {
    if (!isVisible) return 'opacity-0 transform translate-y-4 scale-0.95'

    const progress = index / total
    const animationDelay = `${staggerDelay * index}ms`
    const baseDelay = `${delay}ms`

    switch (direction) {
      case 'up':
        return isLoaded
          ? 'opacity-1 transform-translate-y-0 scale-100'
          : `opacity-1 transform-translate-y-${4 * (1 - progress)} scale-${95 + progress * 5}`
      case 'down':
        return isLoaded
          ? 'opacity-1 transform-translate-y-0 scale-100'
          : `opacity-1 transform-translate-y-${4 * progress} scale-${95 + progress * 5}`
      case 'left':
        return isLoaded
          ? 'opacity-1 transform-translate-x-0 scale-100'
          : `opacity-1 transform-translate-x-${4 * (1 - progress)} scale-${95 + progress * 5}`
      case 'right':
        return isLoaded
          ? 'opacity-1 transform-translate-x-0 scale-100'
          : `opacity-1 transform-translate-x-${4 * progress} scale-${95 + progress * 5}`
      case 'fade':
        return isLoaded
          ? 'opacity-1 scale-100'
          : `opacity-${progress} scale-${95 + progress * 5}`
      case 'scale':
        return isLoaded
          ? 'opacity-1 scale-100'
          : `opacity-${progress} scale-${progress}`
      default:
        return isLoaded
          ? 'opacity-1'
          : `opacity-${progress}`
    }
  }, [direction, staggerDelay, delay, isLoaded])

  // 滚动触发
  const handleScroll = useCallback(() => {
    if (!isLoaded && trigger === 'scroll') {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const elementTop = rect.top + scrollY

        if (elementTop < windowHeight && !isVisible) {
          setIsVisible(true)
          timeoutRef.current = setTimeout(() => {
            setChildrenReady(true)
            setIsLoaded(true)
            onComplete?.({ isIntersecting: true })
          }, delay)
        }
      }
    }
  }, [isLoaded, isVisible, trigger, delay, onComplete])

  // 滚动事件监听
  useEffect(() => {
    if (trigger === 'scroll') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, trigger])

  // 手动触发
  const manualTrigger = useCallback(() => {
    if (!isLoaded) {
      setIsVisible(true)
      timeoutRef.current = setTimeout(() => {
        setChildrenReady(true)
        setIsLoaded(true)
        onComplete?.({ isIntersecting: true })
      }, delay)
    }
  }, [isLoaded, delay, onComplete])

  // 转换children为数组
  const childrenArray = React.Children.toArray(children)

  return (
    <div
      ref={containerRef}
      className={cn(
        'gpu-accelerated',
        'performance-optimized',
        className
      )}
      style={style}
    >
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={cn(
            // 基础动画类
            'animate-60fps',
            // 过渡优化
            'transition-apple',
            // 性能优化
            'will-change: transform, opacity',
            // 样式计算
            getAnimationClasses(index, childrenArray.length, isVisible, isLoaded),
            // 延迟计算
            childrenReady && `delay-${animationDelay}`
          )}
          style={{
            transitionDuration: isLoaded ? '0ms' : `${duration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            // GPU加速
            transform: 'translateZ(0)',
            willChange: 'transform, opacity'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
})

ProProgressiveLoader.displayName = 'ProProgressiveLoader'

export default ProProgressiveLoader