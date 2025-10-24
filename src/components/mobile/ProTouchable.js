'use client'

import React, { memo, useRef, useEffect, useCallback, useState } from 'react'
import { cn } from '../../lib/utils'
import { useAdvancedGestures, hapticFeedback, useAppleRipple } from '../../hooks/useAdvancedGestures'

const ProTouchable = memo(function ProTouchable({
  children,
  onPress,
  onLongPress,
  onDoubleTap,
  onSwipe,
  onPressHold,
  disabled = false,
  ripple = true,
  haptic = true,
  pressScale = 0.96,
  hoverScale = 1.02,
  touchFeedback = true,
  className = '',
  style = {},
  ...props
}) {
  const touchableRef = useRef(null)
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { createRipple } = useAppleRipple(touchableRef)

  // 触摸处理
  const handleTouchStart = useCallback((event) => {
    if (disabled) return

    setIsPressed(true)

    // 触觉反馈
    if (haptic) {
      hapticFeedback.light()
    }

    // 创建涟漪
    if (ripple) {
      createRipple(event)
    }
  }, [disabled, haptic, ripple, createRipple])

  const handleTouchEnd = useCallback((event) => {
    if (disabled) return

    setIsPressed(false)

    // 触觉反馈
    if (haptic) {
      hapticFeedback.selection()
    }
  }, [disabled, haptic])

  // 鼠标处理
  const handleMouseDown = useCallback((event) => {
    if (disabled) return

    setIsPressed(true)

    // 触觉反馈（桌面）
    if (haptic && typeof navigator !== 'undefined' && navigator.vibrate) {
      hapticFeedback.light()
    }

    // 创建涟漪
    if (ripple) {
      createRipple(event)
    }

    // 调用 onPress
    onPress?.(event)
  }, [disabled, haptic, ripple, createRipple, onPress])

  const handleMouseUp = useCallback(() => {
    if (disabled) return

    setIsPressed(false)
  }, [disabled])

  const handleMouseEnter = useCallback(() => {
    if (disabled) return
    setIsHovered(true)
  }, [disabled])

  const handleMouseLeave = useCallback(() => {
    if (disabled) return
    setIsHovered(false)
    setIsPressed(false)
  }, [disabled])

  // 键盘处理
  const handleKeyDown = useCallback((event) => {
    if (disabled) return

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleMouseDown({ ...event, type: 'keydown' })
    }
  }, [disabled, handleMouseDown])

  const handleKeyUp = useCallback((event) => {
    if (disabled) return

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleMouseUp()
    }
  }, [disabled, handleMouseUp])

  // 高级手势绑定
  useAdvancedGestures(touchableRef, {
    onTap: disabled ? undefined : onPress,
    onLongPress: disabled ? undefined : onLongPress,
    onDoubleTap: disabled ? undefined : onDoubleTap,
    onSwipe: disabled ? undefined : onSwipe,
    onPressHold: disabled ? undefined : onPressHold,
    swipeThreshold: 50,
    longPressDelay: 500
  })

  // 触摸反馈动画
  const touchFeedbackClasses = cn(
    // 基础样式
    'relative overflow-hidden',
    // 触摸目标大小
    'touch-target-lg min-w-[44px] min-h-[44px]',
    // 过渡动画
    'transition-apple',
    'transform-gpu will-change-transform',
    // 交互状态
    !disabled && [
      'cursor-pointer',
      'hover:scale-' + hoverScale,
      'active:scale-' + pressScale,
      'hover:-translate-y-0.5',
      'active:translate-y-0',
      isPressed && 'scale-' + pressScale,
      isHovered && 'scale-' + hoverScale
    ],
    // 禁用状态
    disabled && [
      'cursor-not-allowed opacity-50',
      'transform-none'
    ],
    // 自定义样式
    className
  )

  const containerProps = {
    ref: touchableRef,
    className: touchFeedbackClasses,
    style: {
      transform: isPressed ? `scale(${pressScale}) translateZ(0)` : 'translateZ(0)',
      ...style
    },
    // 事件处理器
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    role: 'button',
    tabIndex: disabled ? -1 : 0,
    'aria-disabled': disabled,
    ...props
  }

  return (
    <div {...containerProps}>
      {children}

      {/* Apple iOS 风格的按压效果 */}
      {touchFeedback && !disabled && (
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-150',
            'bg-black/5 dark:bg-white/5',
            isPressed && 'opacity-100'
          )}
          style={{
            borderRadius: 'inherit'
          }}
        />
      )}

      {/* 焦点指示器（键盘导航） */}
      {!disabled && (
        <div
          className={cn(
            'absolute inset-0 border-2 border-transparent transition-colors duration-200',
            'focus-visible:border-ios-blue-500 focus-visible:ring-2 focus-visible:ring-ios-blue-500/20'
          )}
        />
      )}
    </div>
  )
})

ProTouchable.displayName = 'ProTouchable'

export default ProTouchable