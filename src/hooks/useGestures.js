'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * 手势处理Hook
 * 提供触摸手势识别和反馈功能
 */
export const useGestures = (options = {}) => {
  const {
    onTap,
    onDoubleTap,
    onLongPress,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onPinch,
    longPressDelay = 500,
    swipeThreshold = 50,
    pinchThreshold = 20
  } = options

  const [gestures, setGestures] = useState({
    isPressed: false,
    isLongPressing: false,
    direction: null
  })

  const elementRef = useRef(null)
  const touchState = useRef({
    startTime: 0,
    startX: 0,
    startY: 0,
    lastTapTime: 0,
    touchCount: 0,
    initialDistance: 0
  })

  const longPressTimeout = useRef(null)
  const tapTimeout = useRef(null)

  // 清理timeout
  const clearTimeouts = useCallback(() => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current)
      longPressTimeout.current = null
    }
    if (tapTimeout.current) {
      clearTimeout(tapTimeout.current)
      tapTimeout.current = null
    }
  }, [])

  // 处理触摸开始
  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0]
    touchState.current = {
      startTime: Date.now(),
      startX: touch.clientX,
      startY: touch.clientY,
      lastTapTime: touchState.current.lastTapTime,
      touchCount: event.touches.length,
      initialDistance: event.touches.length === 2 ?
        Math.hypot(
          event.touches[1].clientX - touch.clientX,
          event.touches[1].clientY - touch.clientY
        ) : 0
    }

    setGestures(prev => ({ ...prev, isPressed: true }))

    // 长按检测
    if (onLongPress) {
      longPressTimeout.current = setTimeout(() => {
        setGestures(prev => ({ ...prev, isLongPressing: true }))
        onLongPress(event)
      }, longPressDelay)
    }

    // 触觉反馈模拟（视觉）
    if (elementRef.current) {
      elementRef.current.style.transform = 'scale(0.96)'
      elementRef.current.style.transition = 'transform 0.1s ease-out'
    }
  }, [onLongPress, longPressDelay])

  // 处理触摸移动
  const handleTouchMove = useCallback((event) => {
    const touch = event.touches[0]
    const deltaX = touch.clientX - touchState.current.startX
    const deltaY = touch.clientY - touchState.current.startY
    const distance = Math.hypot(deltaX, deltaY)

    // 如果移动距离超过阈值，取消长按
    if (distance > 10 && longPressTimeout.current) {
      clearTimeout(longPressTimeout.current)
      longPressTimeout.current = null
      setGestures(prev => ({ ...prev, isLongPressing: false }))
    }

    // 双指缩放
    if (event.touches.length === 2 && onPinch) {
      const currentDistance = Math.hypot(
        event.touches[1].clientX - touch.clientX,
        event.touches[1].clientY - touch.clientY
      )

      if (Math.abs(currentDistance - touchState.current.initialDistance) > pinchThreshold) {
        onPinch({
          scale: currentDistance / touchState.current.initialDistance,
          event
        })
      }
    }
  }, [onPinch, pinchThreshold])

  // 处理触摸结束
  const handleTouchEnd = useCallback((event) => {
    clearTimeouts()

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchState.current.startX
    const deltaY = touch.clientY - touchState.current.startY
    const deltaTime = Date.now() - touchState.current.startTime
    const distance = Math.hypot(deltaX, deltaY)

    setGestures(prev => ({
      ...prev,
      isPressed: false,
      isLongPressing: false
    }))

    // 恢复变换
    if (elementRef.current) {
      elementRef.current.style.transform = 'scale(1)'
    }

    // 判断手势类型
    if (distance < 10 && deltaTime < 200) {
      // 点击手势
      const now = Date.now()
      const timeSinceLastTap = now - touchState.current.lastTapTime

      if (timeSinceLastTap < 300) {
        // 双击
        onDoubleTap?.(event)
      } else {
        // 单击
        tapTimeout.current = setTimeout(() => {
          onTap?.(event)
        }, 300)
      }

      touchState.current.lastTapTime = now
    } else if (distance > swipeThreshold) {
      // 滑动手势
      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)
      let direction = null

      if (absX > absY) {
        direction = deltaX > 0 ? 'right' : 'left'
      } else {
        direction = deltaY > 0 ? 'down' : 'up'
      }

      setGestures(prev => ({ ...prev, direction }))

      // 调用相应的回调
      switch (direction) {
        case 'left':
          onSwipeLeft?.(event)
          break
        case 'right':
          onSwipeRight?.(event)
          break
        case 'up':
          onSwipeUp?.(event)
          break
        case 'down':
          onSwipeDown?.(event)
          break
      }

      // 清除方向状态
      setTimeout(() => {
        setGestures(prev => ({ ...prev, direction: null }))
      }, 500)
    }
  }, [onTap, onDoubleTap, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, swipeThreshold, clearTimeouts])

  // 处理鼠标按下
  const handleMouseDown = useCallback((event) => {
    touchState.current = {
      startTime: Date.now(),
      startX: event.clientX,
      startY: event.clientY,
      lastTapTime: touchState.current.lastTapTime,
      touchCount: 1,
      initialDistance: 0
    }

    setGestures(prev => ({ ...prev, isPressed: true }))

    if (elementRef.current) {
      elementRef.current.style.transform = 'scale(0.96)'
      elementRef.current.style.transition = 'transform 0.1s ease-out'
    }
  }, [])

  // 处理鼠标释放
  const handleMouseUp = useCallback((event) => {
    const deltaTime = Date.now() - touchState.current.startTime
    const deltaX = event.clientX - touchState.current.startX
    const deltaY = event.clientY - touchState.current.startY
    const distance = Math.hypot(deltaX, deltaY)

    setGestures(prev => ({ ...prev, isPressed: false }))

    if (elementRef.current) {
      elementRef.current.style.transform = 'scale(1)'
    }

    if (distance < 10 && deltaTime < 200) {
      onTap?.(event)
    }
  }, [onTap])

  // 清理
  useEffect(() => {
    return () => {
      clearTimeouts()
    }
  }, [clearTimeouts])

  return {
    elementRef,
    gestures,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp
    }
  }
}

/**
 * 滑动手势Hook
 * 专门用于处理滑动操作
 */
export const useSwipe = (onSwipe, options = {}) => {
  const { threshold = 50, restrictToVertical = false, restrictToHorizontal = false } = options

  return useGestures({
    onSwipeLeft: restrictToVertical ? undefined : (event) => onSwipe('left', event),
    onSwipeRight: restrictToVertical ? undefined : (event) => onSwipe('right', event),
    onSwipeUp: restrictToHorizontal ? undefined : (event) => onSwipe('up', event),
    onSwipeDown: restrictToHorizontal ? undefined : (event) => onSwipe('down', event),
    swipeThreshold: threshold
  })
}

/**
 * 拖拽Hook
 * 提供拖拽功能
 */
export const useDrag = (onDrag, options = {}) => {
  const {
    enabled = true,
    axis = 'both', // 'x', 'y', 'both'
    boundary = null // { top, right, bottom, left }
  } = options

  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const elementRef = useRef(null)
  const dragState = useRef({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0
  })

  const handleDragStart = useCallback((clientX, clientY) => {
    if (!enabled) return

    dragState.current = {
      startX: clientX,
      startY: clientY,
      initialX: position.x,
      initialY: position.y
    }
    setIsDragging(true)
  }, [enabled, position])

  const handleDragMove = useCallback((clientX, clientY) => {
    if (!isDragging || !enabled) return

    const deltaX = clientX - dragState.current.startX
    const deltaY = clientY - dragState.current.startY

    let newX = dragState.current.initialX + deltaX
    let newY = dragState.current.initialY + deltaY

    // 应用轴限制
    if (axis === 'x') {
      newY = dragState.current.initialY
    } else if (axis === 'y') {
      newX = dragState.current.initialX
    }

    // 应用边界限制
    if (boundary && elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()

      if (boundary.left !== undefined) {
        newX = Math.max(boundary.left, newX)
      }
      if (boundary.right !== undefined) {
        newX = Math.min(boundary.right - rect.width, newX)
      }
      if (boundary.top !== undefined) {
        newY = Math.max(boundary.top, newY)
      }
      if (boundary.bottom !== undefined) {
        newY = Math.min(boundary.bottom - rect.height, newY)
      }
    }

    const newPosition = { x: newX, y: newY }
    setPosition(newPosition)
    onDrag?.(newPosition, { deltaX, deltaY })
  }, [isDragging, enabled, axis, boundary, onDrag])

  const handleDragEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // 触摸事件
  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0]
    handleDragStart(touch.clientX, touch.clientY)
  }, [handleDragStart])

  const handleTouchMove = useCallback((event) => {
    const touch = event.touches[0]
    handleDragMove(touch.clientX, touch.clientY)
  }, [handleDragMove])

  // 鼠标事件
  const handleMouseDown = useCallback((event) => {
    handleDragStart(event.clientX, event.clientY)
  }, [handleDragStart])

  const handleMouseMove = useCallback((event) => {
    handleDragMove(event.clientX, event.clientY)
  }, [handleDragMove])

  // 全局鼠标事件处理
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (event) => {
        handleMouseMove(event)
      }

      const handleGlobalMouseUp = () => {
        handleDragEnd()
      }

      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove)
        document.removeEventListener('mouseup', handleGlobalMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleDragEnd])

  return {
    elementRef,
    isDragging,
    position,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleDragEnd,
      onMouseDown: handleMouseDown
    }
  }
}