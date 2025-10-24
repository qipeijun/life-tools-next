'use client'

import { useCallback, useRef, useEffect } from 'react'

// 移动端手势支持钩子
export const useMobileGestures = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onTap,
  onLongPress,
  threshold = 50,
  longPressDelay = 500,
  enableGestures = true
}) => {
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const touchEndX = useRef(0)
  const touchEndY = useRef(0)
  const startTime = useRef(0)
  const longPressTimer = useRef(null)
  const isLongPressing = useRef(false)

  // 触摸开始
  const handleTouchStart = useCallback((e) => {
    if (!enableGestures) return

    const touch = e.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
    touchEndX.current = touch.clientX
    touchEndY.current = touch.clientY
    startTime.current = Date.now()
    isLongPressing.current = false

    // 设置长按定时器
    if (onLongPress) {
      longPressTimer.current = setTimeout(() => {
        isLongPressing.current = true
        onLongPress(e)
      }, longPressDelay)
    }
  }, [enableGestures, onLongPress, longPressDelay])

  // 触摸移动
  const handleTouchMove = useCallback((e) => {
    if (!enableGestures) return

    const touch = e.touches[0]
    touchEndX.current = touch.clientX
    touchEndY.current = touch.clientY

    // 如果移动距离超过阈值，取消长按
    const distance = Math.sqrt(
      Math.pow(touchEndX.current - touchStartX.current, 2) +
      Math.pow(touchEndY.current - touchStartY.current, 2)
    )

    if (distance > 10 && longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }, [enableGestures])

  // 触摸结束
  const handleTouchEnd = useCallback((e) => {
    if (!enableGestures) return

    // 清除长按定时器
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }

    const endTime = Date.now()
    const duration = endTime - startTime.current

    const deltaX = touchEndX.current - touchStartX.current
    const deltaY = touchEndY.current - touchStartY.current
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // 检查是否为点击
    if (absDeltaX < 5 && absDeltaY < 5 && !isLongPressing.current) {
      if (onTap) {
        onTap(e)
      }
      return
    }

    // 检查是否为滑动手势
    if (absDeltaX > threshold || absDeltaY > threshold) {
      const isHorizontalSwipe = absDeltaX > absDeltaY

      if (isHorizontalSwipe) {
        if (deltaX > 0 && onSwipeRight) {
          onSwipeRight(e)
        } else if (deltaX < 0 && onSwipeLeft) {
          onSwipeLeft(e)
        }
      } else {
        if (deltaY > 0 && onSwipeDown) {
          onSwipeDown(e)
        } else if (deltaY < 0 && onSwipeUp) {
          onSwipeUp(e)
        }
      }
    }

    // 重置状态
    touchStartX.current = 0
    touchStartY.current = 0
    touchEndX.current = 0
    touchEndY.current = 0
    isLongPressing.current = false
  }, [enableGestures, onTap, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, threshold])

  // 触摸取消
  const handleTouchCancel = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
    isLongPressing.current = false
  }, [])

  // 添加事件监听器
  useEffect(() => {
    const element = document.documentElement

    if (enableGestures) {
      element.addEventListener('touchstart', handleTouchStart, { passive: false })
      element.addEventListener('touchmove', handleTouchMove, { passive: false })
      element.addEventListener('touchend', handleTouchEnd, { passive: false })
      element.addEventListener('touchcancel', handleTouchCancel, { passive: false })

      return () => {
        element.removeEventListener('touchstart', handleTouchStart)
        element.removeEventListener('touchmove', handleTouchMove)
        element.removeEventListener('touchend', handleTouchEnd)
        element.removeEventListener('touchcancel', handleTouchCancel)

        if (longPressTimer.current) {
          clearTimeout(longPressTimer.current)
        }
      }
    }
  }, [enableGestures, handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel])

  return {
    // 手势状态
    isSupported: 'ontouchstart' in window,
    isEnabled: enableGestures
  }
}

// 触摸反馈钩子
export const useTouchFeedback = (options = {}) => {
  const {
    vibrationPattern = [10, 10], // 默认振动模式
    enabled = true
  } = options

  const triggerFeedback = useCallback((intensity = 'light') => {
    if (!enabled || !('vibrate' in navigator)) return

    const patterns = {
      light: [10],
      medium: [20, 10],
      heavy: [50, 20],
      success: [10, 20, 10],
      error: [100, 50, 100],
      longPress: [50]
    }

    try {
      navigator.vibrate(patterns[intensity] || vibrationPattern)
    } catch (error) {
      // 忽略振动API错误
    }
  }, [enabled, vibrationPattern])

  return {
    triggerFeedback,
    isSupported: 'vibrate' in navigator,
    canVibrate: enabled && 'vibrate' in navigator
  }
}

// 下拉刷新钩子
export const usePullToRefresh = ({
  onRefresh,
  threshold = 80,
  enabled = true
}) => {
  const [isPulling, setIsPulling] = useState(false)
  const [pullProgress, setPullProgress] = useState(0)
  const startY = useRef(0)
  const currentY = useRef(0)
  const isRefreshing = useRef(false)

  const handleTouchStart = useCallback((e) => {
    if (!enabled || window.scrollY > 0) return

    startY.current = e.touches[0].clientY
    setIsPulling(true)
  }, [enabled])

  const handleTouchMove = useCallback((e) => {
    if (!isPulling || !enabled || window.scrollY > 0) return

    currentY.current = e.touches[0].clientY
    const pullDistance = currentY.current - startY.current
    const progress = Math.min(Math.max(pullDistance, 0), threshold) / threshold

    setPullProgress(progress)
  }, [isPulling, enabled, threshold])

  const handleTouchEnd = useCallback(async () => {
    if (!isPulling || !enabled) return

    const pullDistance = currentY.current - startY.current

    if (pullDistance >= threshold && !isRefreshing.current && onRefresh) {
      isRefreshing.current = true
      setPullProgress(1)

      try {
        await onRefresh()
      } finally {
        isRefreshing.current = false
        setTimeout(() => {
          setPullProgress(0)
          setIsPulling(false)
        }, 300)
      }
    } else {
      setPullProgress(0)
      setIsPulling(false)
    }
  }, [isPulling, enabled, threshold, onRefresh])

  useEffect(() => {
    if (enabled) {
      const element = document.documentElement

      element.addEventListener('touchstart', handleTouchStart, { passive: true })
      element.addEventListener('touchmove', handleTouchMove, { passive: true })
      element.addEventListener('touchend', handleTouchEnd, { passive: true })

      return () => {
        element.removeEventListener('touchstart', handleTouchStart)
        element.removeEventListener('touchmove', handleTouchMove)
        element.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [enabled, handleTouchStart, handleTouchMove, handleTouchEnd])

  return {
    isPulling,
    pullProgress,
    isSupported: 'ontouchstart' in window
  }
}

// 修复缺失的useState导入
import { useState } from 'react'