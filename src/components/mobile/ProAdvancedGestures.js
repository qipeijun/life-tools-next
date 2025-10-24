'use client'

import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../../lib/utils'

const ProAdvancedGestures = memo(function ProAdvancedGestures({
  children,
  enableTap = true,
  enableDoubleTap = true,
  enableLongPress = true,
  enableSwipe = true,
  enablePinch = true,
  enableRotate = true,
  onTap,
  onDoubleTap,
  onLongPress,
  onSwipe,
  onPinch,
  onRotate,
  swipeThreshold = 50,
  longPressDelay = 500,
  doubleTapDelay = 300,
  pinchThreshold = 10,
  rotateThreshold = 10,
  className = '',
  style = {},
  ...props
}) {
  const containerRef = useRef(null)
  const [gestures, setGestures] = useState({
    isTapping: false,
    isLongPressing: false,
    isSwiping: false,
    isPinching: false,
    isRotating: false
  })

  const touchState = useRef({
    startTime: 0,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    distance: 0,
    angle: 0,
    lastDistance: 0,
    lastAngle: 0,
    tapCount: 0,
    longPressTimer: null,
    doubleTapTimer: null
  })

  // 触摸开始
  const handleTouchStart = useCallback((e) => {
    e.preventDefault()

    const touch = e.touches[0]
    const now = Date.now()
    const timeDiff = now - touchState.current.lastX || 0

    touchState.current.startTime = now
    touchState.current.startX = touch.clientX
    touchState.current.startY = touch.clientY
    touchState.current.lastX = touch.clientX
    touchState.current.lastY = touch.clientY

    // 检测双击
    if (enableDoubleTap && timeDiff < doubleTapDelay) {
      touchState.current.tapCount++

      if (touchState.current.tapCount === 2) {
        // 双击
        setGestures(prev => ({ ...prev, isTapping: true }))
        onDoubleTap?.(e)
        hapticFeedback('light')

        // 清除定时器
        if (touchState.current.doubleTapTimer) {
          clearTimeout(touchState.current.doubleTapTimer)
          touchState.current.doubleTapTimer = null
        }

        // 重置点击计数
        touchState.current.tapCount = 0
        return
      }
    } else {
      touchState.current.tapCount = 1
    }

    // 长按定时器
    if (enableLongPress) {
      touchState.current.longPressTimer = setTimeout(() => {
        setGestures(prev => ({ ...prev, isLongPressing: true }))
        onLongPress?.(e)
        hapticFeedback('medium')
      }, longPressDelay)
    }

    // 多点触控初始状态
    if (e.touches.length === 2) {
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]

      const dx = touch2.clientX - touch1.clientX
      const dy = touch2.clientY - touch1.clientY

      touchState.current.distance = Math.sqrt(dx * dx + dy * dy)
      touchState.current.angle = Math.atan2(dy, dx) * 180 / Math.PI
      touchState.current.lastDistance = touchState.current.distance
      touchState.current.lastAngle = touchState.current.angle
    }
  }, [
    enableDoubleTap,
    enableLongPress,
    doubleTapDelay,
    longPressDelay,
    onDoubleTap,
    onLongPress
  ])

  // 触摸移动
  const handleTouchMove = useCallback((e) => {
    e.preventDefault()

    const touch = e.touches[0]
    const currentX = touch.clientX
    const currentY = touch.clientY

    // 清除长按定时器
    if (touchState.current.longPressTimer) {
      clearTimeout(touchState.current.longPressTimer)
      touchState.current.longPressTimer = null
    }

    const deltaX = currentX - touchState.current.startX
    const deltaY = currentY - touchState.current.startY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    // 检测滑动手势
    if (enableSwipe && distance > swipeThreshold) {
      if (!gestures.isSwiping) {
        setGestures(prev => ({ ...prev, isSwiping: true }))

        const direction = getSwipeDirection(deltaX, deltaY)
        onSwipe?.({
          direction,
          deltaX,
          deltaY,
          distance,
          velocity: distance / (Date.now() - touchState.current.startTime)
        })
        hapticFeedback('light')
      }
    }

    // 多点触控手势
    if (e.touches.length === 2) {
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]

      const dx = touch2.clientX - touch1.clientX
      const dy = touch2.clientY - touch1.clientY

      const currentDistance = Math.sqrt(dx * dx + dy * dy)
      const currentAngle = Math.atan2(dy, dx) * 180 / Math.PI

      // 缩放手势
      if (enablePinch) {
        const scale = currentDistance / touchState.current.lastDistance
        const totalScale = currentDistance / touchState.current.distance

        if (Math.abs(totalScale - 1) > pinchThreshold / 100) {
          if (!gestures.isPinching) {
            setGestures(prev => ({ ...prev, isPinching: true }))
          }

          onPinch?.({
            scale: totalScale,
            deltaScale: scale,
            distance: currentDistance,
            centerX: (touch1.clientX + touch2.clientX) / 2,
            centerY: (touch1.clientY + touch2.clientY) / 2
          })
        }
      }

      // 旋转手势
      if (enableRotate) {
        let angleDiff = currentAngle - touchState.current.lastAngle
        let totalAngleDiff = currentAngle - touchState.current.angle

        // 处理角度跳跃
        if (angleDiff > 180) angleDiff -= 360
        if (angleDiff < -180) angleDiff += 360
        if (totalAngleDiff > 180) totalAngleDiff -= 360
        if (totalAngleDiff < -180) totalAngleDiff += 360

        if (Math.abs(totalAngleDiff) > rotateThreshold) {
          if (!gestures.isRotating) {
            setGestures(prev => ({ ...prev, isRotating: true }))
          }

          onRotate?.({
            rotation: totalAngleDiff,
            deltaRotation: angleDiff,
            angle: currentAngle,
            centerX: (touch1.clientX + touch2.clientX) / 2,
            centerY: (touch1.clientY + touch2.clientY) / 2
          })
        }
      }

      touchState.current.lastDistance = currentDistance
      touchState.current.lastAngle = currentAngle
    }

    touchState.current.lastX = currentX
    touchState.current.lastY = currentY
  }, [
    enableSwipe,
    enablePinch,
    enableRotate,
    swipeThreshold,
    pinchThreshold,
    rotateThreshold,
    gestures,
    onSwipe,
    onPinch,
    onRotate
  ])

  // 触摸结束
  const handleTouchEnd = useCallback((e) => {
    e.preventDefault()

    // 清除长按定时器
    if (touchState.current.longPressTimer) {
      clearTimeout(touchState.current.longPressTimer)
      touchState.current.longPressTimer = null
    }

    // 触摸检测
    if (enableTap && !gestures.isSwiping && !gestures.isLongPressing && !gestures.isPinching && !gestures.isRotating) {
      const now = Date.now()
      const touchDuration = now - touchState.current.startTime

      if (touchDuration < longPressDelay) {
        setGestures(prev => ({ ...prev, isTapping: true }))
        onTap?.(e)
        hapticFeedback('light')

        // 双击检测定时器
        if (enableDoubleTap) {
          touchState.current.doubleTapTimer = setTimeout(() => {
            touchState.current.tapCount = 0
          }, doubleTapDelay)
        }
      }
    }

    // 重置手势状态
    setGestures({
      isTapping: false,
      isLongPressing: false,
      isSwiping: false,
      isPinching: false,
      isRotating: false
    })
  }, [
    enableTap,
    enableDoubleTap,
    gestures,
    longPressDelay,
    doubleTapDelay,
    onTap
  ])

  // 获取滑动方向
  const getSwipeDirection = (deltaX, deltaY) => {
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)

    if (absX > absY) {
      return deltaX > 0 ? 'right' : 'left'
    } else {
      return deltaY > 0 ? 'down' : 'up'
    }
  }

  // 触觉反馈
  const hapticFeedback = useCallback((type = 'light') => {
    if (navigator.vibrate) {
      switch (type) {
        case 'light':
          navigator.vibrate(10)
          break
        case 'medium':
          navigator.vibrate(25)
          break
        case 'heavy':
          navigator.vibrate(50)
          break
        case 'success':
          navigator.vibrate([10, 50, 10])
          break
        case 'warning':
          navigator.vibrate([25, 25, 25])
          break
        case 'error':
          navigator.vibrate([50, 25, 50])
          break
      }
    }
  }, [])

  // 事件监听器
  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    element.addEventListener('touchstart', handleTouchStart, { passive: false })
    element.addEventListener('touchmove', handleTouchMove, { passive: false })
    element.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)

      // 清理定时器
      if (touchState.current.longPressTimer) {
        clearTimeout(touchState.current.longPressTimer)
      }
      if (touchState.current.doubleTapTimer) {
        clearTimeout(touchState.current.doubleTapTimer)
      }
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd])

  return (
    <div
      ref={containerRef}
      className={cn(
        'gesture-container',
        'touch-none',
        {
          'tap-active': gestures.isTapping,
          'long-press-active': gestures.isLongPressing,
          'swipe-active': gestures.isSwiping,
          'pinch-active': gestures.isPinching,
          'rotate-active': gestures.isRotating
        },
        className
      )}
      style={style}
      {...props}
    >
      {children}

      {/* 手势状态指示器（开发模式） */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50 px-3 py-2 bg-black/80 text-white rounded-lg text-xs font-mono space-y-1">
          <div>点击: {gestures.isTapping ? '✓' : '✗'}</div>
          <div>长按: {gestures.isLongPressing ? '✓' : '✗'}</div>
          <div>滑动: {gestures.isSwiping ? '✓' : '✗'}</div>
          <div>缩放: {gestures.isPinching ? '✓' : '✗'}</div>
          <div>旋转: {gestures.isRotating ? '✓' : '✗'}</div>
        </div>
      )}
    </div>
  )
})

// 手势识别器 Hook
export const useAdvancedGestures = (options = {}) => {
  const [gestureState, setGestureState] = useState({
    isActive: false,
    type: null,
    data: {}
  })

  const triggerGesture = useCallback((type, data) => {
    setGestureState({
      isActive: true,
      type,
      data
    })

    setTimeout(() => {
      setGestureState(prev => ({
        ...prev,
        isActive: false,
        type: null
      }))
    }, 100)
  }, [])

  return {
    gestureState,
    triggerGesture
  }
}

// 触觉反馈工具
export const hapticFeedback = {
  light: () => {
    if (navigator.vibrate) navigator.vibrate(10)
  },
  medium: () => {
    if (navigator.vibrate) navigator.vibrate(25)
  },
  heavy: () => {
    if (navigator.vibrate) navigator.vibrate(50)
  },
  success: () => {
    if (navigator.vibrate) navigator.vibrate([10, 50, 10])
  },
  warning: () => {
    if (navigator.vibrate) navigator.vibrate([25, 25, 25])
  },
  error: () => {
    if (navigator.vibrate) navigator.vibrate([50, 25, 50])
  }
}

ProAdvancedGestures.displayName = 'ProAdvancedGestures'

export default ProAdvancedGestures