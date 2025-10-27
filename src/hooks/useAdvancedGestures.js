'use client'

import { useRef, useCallback, useEffect } from 'react'

// 触觉反馈模拟器
export const hapticFeedback = {
  // 轻微震动
  light: () => {
    if (navigator.vibrate) {
      navigator.vibrate(10)
    }
  },
  // 中等震动
  medium: () => {
    if (navigator.vibrate) {
      navigator.vibrate(25)
    }
  },
  // 重震动
  heavy: () => {
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  },
  // 成功反馈
  success: () => {
    if (navigator.vibrate) {
      navigator.vibrate([10, 50, 10])
    }
  },
  // 错误反馈
  error: () => {
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100])
    }
  },
  // 警告反馈
  warning: () => {
    if (navigator.vibrate) {
      navigator.vibrate([30, 20, 30])
    }
  },
  // 选择反馈
  selection: () => {
    if (navigator.vibrate) {
      navigator.vibrate(15)
    }
  },
  // 滑动反馈
  swipe: () => {
    if (navigator.vibrate) {
      navigator.vibrate(20)
    }
  }
}

// 高级手势Hook
export const useAdvancedGestures = (element, options = {}) => {
  const {
    onTap,
    onDoubleTap,
    onLongPress,
    onSwipe,
    onPinch,
    onRotate,
    onTapHold,
    swipeThreshold = 50,
    longPressDelay = 500,
    doubleTapDelay = 300,
    pinchThreshold = 10,
    rotationThreshold = 15
  } = options

  const gestureState = useRef({
    startTime: 0,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    lastTapTime: 0,
    tapCount: 0,
    longPressTimer: null,
    isLongPressing: false,
    initialDistance: 0,
    initialAngle: 0,
    touches: []
  })

  // 计算两点间距离
  const getDistance = (touches) => {
    if (touches.length < 2) return 0
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  // 计算角度
  const getAngle = (touches) => {
    if (touches.length < 2) return 0
    const dx = touches[1].clientX - touches[0].clientX
    const dy = touches[1].clientY - touches[0].clientY
    return Math.atan2(dy, dx) * 180 / Math.PI
  }

  // 处理触摸开始
  const handleTouchStart = useCallback((event) => {
    const touches = event.touches
    const currentTime = Date.now()

    gestureState.current.startTime = currentTime
    gestureState.current.touches = Array.from(touches)

    if (touches.length === 1) {
      // 单指触摸
      const touch = touches[0]
      gestureState.current.startX = touch.clientX
      gestureState.current.startY = touch.clientY
      gestureState.current.currentX = touch.clientX
      gestureState.current.currentY = touch.clientY

      // 检测双击
      const timeDiff = currentTime - gestureState.current.lastTapTime
      if (timeDiff < doubleTapDelay) {
        gestureState.current.tapCount++
        if (gestureState.current.tapCount === 2) {
          hapticFeedback.light()
          onDoubleTap?.(event)
          gestureState.current.tapCount = 0
          return
        }
      } else {
        gestureState.current.tapCount = 1
      }

      // 设置长按定时器
      gestureState.current.longPressTimer = setTimeout(() => {
        if (!gestureState.current.isLongPressing) {
          gestureState.current.isLongPressing = true
          hapticFeedback.heavy()
          onLongPress?.(event)
        }
      }, longPressDelay)
    } else if (touches.length === 2) {
      // 双指触摸
      gestureState.current.initialDistance = getDistance(touches)
      gestureState.current.initialAngle = getAngle(touches)
    }
  }, [onDoubleTap, onLongPress, longPressDelay, doubleTapDelay])

  // 处理触摸移动
  const handleTouchMove = useCallback((event) => {
    event.preventDefault()
    const touches = event.touches

    if (touches.length === 1 && !gestureState.current.isLongPressing) {
      // 单指移动
      const touch = touches[0]
      gestureState.current.currentX = touch.clientX
      gestureState.current.currentY = touch.clientY

      // 检测长按取消
      if (gestureState.current.longPressTimer) {
        const deltaX = Math.abs(touch.clientX - gestureState.current.startX)
        const deltaY = Math.abs(touch.clientY - gestureState.current.startY)

        if (deltaX > 10 || deltaY > 10) {
          clearTimeout(gestureState.current.longPressTimer)
        }
      }
    } else if (touches.length === 2) {
      // 双指手势
      const currentDistance = getDistance(touches)
      const currentAngle = getAngle(touches)

      // 检测缩放
      if (onPinch) {
        const scale = currentDistance / gestureState.current.initialDistance
        if (Math.abs(scale - 1) > pinchThreshold / 100) {
          onPinch(event, scale)
        }
      }

      // 检测旋转
      if (onRotate) {
        const rotation = currentAngle - gestureState.current.initialAngle
        if (Math.abs(rotation) > rotationThreshold) {
          onRotate(event, rotation)
        }
      }
    }
  }, [onPinch, onRotate, pinchThreshold, rotationThreshold])

  // 处理触摸结束
  const handleTouchEnd = useCallback((event) => {
    const currentTime = Date.now()

    // 清除长按定时器
    if (gestureState.current.longPressTimer) {
      clearTimeout(gestureState.current.longPressTimer)
    }

    if (event.touches.length === 0) {
      const deltaX = gestureState.current.currentX - gestureState.current.startX
      const deltaY = gestureState.current.currentY - gestureState.current.startY
      const deltaTime = currentTime - gestureState.current.startTime

      // 检测滑动手势
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      if (distance > swipeThreshold && deltaTime < 1000) {
        let direction = null
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          direction = deltaX > 0 ? 'right' : 'left'
        } else {
          direction = deltaY > 0 ? 'down' : 'up'
        }

        if (direction) {
          hapticFeedback.swipe()
          onSwipe?.(event, direction, { deltaX, deltaY, distance, time: deltaTime })
        }
      }

      // 检测点击
      if (!gestureState.current.isLongPressing && distance < 10) {
        if (gestureState.current.tapCount === 1) {
          // 延迟检测单击，确保不是双击
          setTimeout(() => {
            if (gestureState.current.tapCount === 1) {
              hapticFeedback.light()
              onTap?.(event)
              gestureState.current.tapCount = 0
            }
          }, doubleTapDelay)
        }
      }

      // 更新最后点击时间
      if (gestureState.current.tapCount === 1) {
        gestureState.current.lastTapTime = currentTime
      }

      // 重置状态
      gestureState.current.isLongPressing = false
    }

    gestureState.current.touches = Array.from(event.touches)
  }, [onTap, onSwipe, swipeThreshold, doubleTapDelay])

  // 绑定事件
  useEffect(() => {
    if (!element) return

    const elementRef = element.current || element
    if (!elementRef) return

    elementRef.addEventListener('touchstart', handleTouchStart, { passive: false })
    elementRef.addEventListener('touchmove', handleTouchMove, { passive: false })
    elementRef.addEventListener('touchend', handleTouchEnd, { passive: false })
    elementRef.addEventListener('touchcancel', handleTouchEnd, { passive: false })

    return () => {
      elementRef.removeEventListener('touchstart', handleTouchStart)
      elementRef.removeEventListener('touchmove', handleTouchMove)
      elementRef.removeEventListener('touchend', handleTouchEnd)
      elementRef.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [element, handleTouchStart, handleTouchMove, handleTouchEnd])

  return {
    hapticFeedback
  }
}

// Apple iOS 风格的涟漪效果Hook
export const useAppleRipple = (elementRef, options = {}) => {
  const {
    color = 'rgba(255, 255, 255, 0.3)',
    size = 'auto',
    duration = 600,
    centered = false
  } = options

  const createRipple = useCallback((event) => {
    if (!elementRef.current) return

    const element = elementRef.current
    const rect = element.getBoundingClientRect()

    // 计算涟漪大小和位置
    let rippleSize, rippleX, rippleY

    if (size === 'auto') {
      const maxDimension = Math.max(rect.width, rect.height)
      rippleSize = maxDimension * 2
    } else {
      rippleSize = size
    }

    if (centered) {
      rippleX = rect.width / 2
      rippleY = rect.height / 2
    } else {
      const touch = event.touches ? event.touches[0] : event
      rippleX = (touch || event).clientX - rect.left
      rippleY = (touch || event).clientY - rect.top
    }

    // 创建涟漪元素
    const ripple = document.createElement('span')
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: ${color};
      width: ${rippleSize}px;
      height: ${rippleSize}px;
      top: ${rippleY - rippleSize / 2}px;
      left: ${rippleX - rippleSize / 2}px;
      pointer-events: none;
      transform: scale(0);
      opacity: 1;
      animation: appleRipple ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    `

    // 确保容器有相对定位
    if (element.style.position !== 'absolute' && element.style.position !== 'relative') {
      element.style.position = 'relative'
    }
    element.style.overflow = 'hidden'

    // 添加涟漪
    element.appendChild(ripple)

    // 移除涟漪
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple)
      }
    }, duration)

    return ripple
  }, [color, size, duration, centered])

  return { createRipple }
}

// 添加CSS动画
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes appleRipple {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
}

export default useAdvancedGestures