'use client'

import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../../lib/utils'

const ProOrientationHandler = memo(function ProOrientationHandler({
  children,
  enableOrientationLock = false,
  preferredOrientation = 'portrait', // portrait, landscape, auto
  onOrientationChange,
  onLandscape,
  onPortrait,
  className = '',
  style = {},
  ...props
}) {
  const [currentOrientation, setCurrentOrientation] = useState('portrait')
  const [isLandscape, setIsLandscape] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const previousOrientation = useRef('portrait')
  const timeoutRef = useRef(null)

  // 获取当前屏幕方向
  const getOrientation = useCallback(() => {
    if (typeof window === 'undefined') return 'portrait'

    // 优先使用 screen.orientation
    if (screen.orientation) {
      return screen.orientation.angle === 0 || screen.orientation.angle === 180 ? 'portrait' : 'landscape'
    }

    // 回退到 window.orientation
    if (window.orientation !== undefined) {
      return Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait'
    }

    // 最后使用屏幕尺寸判断
    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
  }, [])

  // 检测方向变化
  const detectOrientationChange = useCallback(() => {
    const orientation = getOrientation()
    const isLandscapeMode = orientation === 'landscape'

    setIsRotating(true)

    // 延迟处理以确保动画完成
    timeoutRef.current = setTimeout(() => {
      if (orientation !== currentOrientation) {
        previousOrientation.current = currentOrientation
        setCurrentOrientation(orientation)
        setIsLandscape(isLandscapeMode)

        // 触发回调
        onOrientationChange?.({
          orientation,
          isLandscape: isLandscapeMode,
          previousOrientation: previousOrientation.current,
          angle: screen.orientation?.angle || window.orientation || 0
        })

        if (isLandscapeMode) {
          onLandscape?.()
        } else {
          onPortrait?.()
        }
      }
      setIsRotating(false)
    }, 100)
  }, [currentOrientation, getOrientation, onOrientationChange, onLandscape, onPortrait])

  // 方向锁定
  const lockOrientation = useCallback(async (orientation) => {
    if (!enableOrientationLock || !screen.orientation?.lock) {
      console.warn('Screen orientation lock not supported')
      return false
    }

    try {
      await screen.orientation.lock(orientation)
      return true
    } catch (error) {
      console.warn('Failed to lock orientation:', error)
      return false
    }
  }, [enableOrientationLock])

  // 解除方向锁定
  const unlockOrientation = useCallback(() => {
    if (screen.orientation?.unlock) {
      screen.orientation.unlock()
    }
  }, [])

  // 监听方向变化
  useEffect(() => {
    // 初始方向检测
    detectOrientationChange()

    // 监听方向变化事件
    const handleOrientationChange = () => {
      detectOrientationChange()
    }

    // 监听 resize 事件（作为后备）
    const handleResize = () => {
      detectOrientationChange()
    }

    // 添加事件监听器
    if (screen.orientation) {
      screen.orientation.addEventListener('change', handleOrientationChange)
    } else {
      window.addEventListener('orientationchange', handleOrientationChange)
    }

    window.addEventListener('resize', handleResize)

    // 应用方向锁定
    if (enableOrientationLock && preferredOrientation !== 'auto') {
      lockOrientation(preferredOrientation)
    }

    return () => {
      // 清理事件监听器
      if (screen.orientation) {
        screen.orientation.removeEventListener('change', handleOrientationChange)
      } else {
        window.removeEventListener('orientationchange', handleOrientationChange)
      }

      window.removeEventListener('resize', handleResize)

      // 清理定时器
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // 解除方向锁定
      if (enableOrientationLock) {
        unlockOrientation()
      }
    }
  }, [detectOrientationChange, enableOrientationLock, preferredOrientation, lockOrientation, unlockOrientation])

  // 获取方向特定的样式类
  const getOrientationClasses = useCallback(() => {
    const classes = []

    if (isLandscape) {
      classes.push('orientation-landscape')
    } else {
      classes.push('orientation-portrait')
    }

    if (isRotating) {
      classes.push('orientation-rotating')
    }

    return classes
  }, [isLandscape, isRotating])

  // 方向特定的样式
  const orientationStyle = {
    ...style,
    // 旋转动画
    transition: isRotating ? 'transform 0.3s ease-in-out' : 'none'
  }

  return (
    <div
      className={cn(
        'orientation-container',
        ...getOrientationClasses(),
        className
      )}
      style={orientationStyle}
      data-orientation={currentOrientation}
      data-landscape={isLandscape}
      {...props}
    >
      {children}

      {/* 方向指示器（开发模式） */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 left-4 z-50 px-3 py-2 bg-black/80 text-white rounded-lg text-xs font-mono">
          <div>方向: {currentOrientation}</div>
          <div>角度: {screen.orientation?.angle || window.orientation || 0}°</div>
          <div>旋转: {isRotating ? '是' : '否'}</div>
        </div>
      )}
    </div>
  )
})

// 方向感知的布局组件
export const ProOrientationLayout = memo(function ProOrientationLayout({
  children,
  portraitLayout = 'vertical', // vertical, horizontal, grid
  landscapeLayout = 'horizontal', // vertical, horizontal, grid
  spacing = 'normal', // tight, normal, loose
  className = '',
  style = {},
  ...props
}) {
  const [currentOrientation, setCurrentOrientation] = useState('portrait')

  // 监听方向变化
  useEffect(() => {
    const updateOrientation = () => {
      const orientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      setCurrentOrientation(orientation)
    }

    updateOrientation()
    window.addEventListener('resize', updateOrientation)

    return () => {
      window.removeEventListener('resize', updateOrientation)
    }
  }, [])

  // 获取布局样式
  const getLayoutClasses = useCallback(() => {
    const baseClasses = [
      'orientation-layout',
      'transition-all duration-300 ease-in-out'
    ]

    const spacingMap = {
      tight: 'gap-2',
      normal: 'gap-4',
      loose: 'gap-6'
    }

    const layoutClass = currentOrientation === 'portrait'
      ? `layout-${portraitLayout}`
      : `layout-${landscapeLayout}`

    return [
      ...baseClasses,
      layoutClass,
      spacingMap[spacing] || spacingMap.normal
    ]
  }, [currentOrientation, portraitLayout, landscapeLayout, spacing])

  return (
    <div
      className={cn(...getLayoutClasses(), className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
})

// 方向锁定按钮组件
export const ProOrientationLock = memo(function ProOrientationLock({
  isLocked,
  onToggle,
  preferredOrientation = 'portrait',
  size = 'md', // sm, md, lg
  className = '',
  ...props
}) {
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    setSupported(!!screen.orientation?.lock)
  }, [])

  if (!supported) return null

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      onClick={onToggle}
      className={cn(
        'flex items-center space-x-2 rounded-lg transition-colors duration-200',
        isLocked
          ? 'bg-ios-blue-500 text-white hover:bg-ios-blue-600'
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isLocked ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        )}
      </svg>
      <span>
        {isLocked ? `${preferredOrientation === 'portrait' ? '竖屏' : '横屏'}锁定` : '解锁旋转'}
      </span>
    </button>
  )
})

// 横屏专用布局组件
export const ProLandscapeOptimization = memo(function ProLandscapeOptimization({
  children,
  enableOptimization = true,
  sidebarWidth = 320,
  className = '',
  style = {},
  ...props
}) {
  const [isLandscape, setIsLandscape] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight)
    }

    checkOrientation()
    window.addEventListener('resize', checkOrientation)

    return () => {
      window.removeEventListener('resize', checkOrientation)
    }
  }, [])

  if (!enableOptimization || !isLandscape) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex h-screen landscape-optimized',
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
})

ProOrientationHandler.displayName = 'ProOrientationHandler'
ProOrientationLayout.displayName = 'ProOrientationLayout'
ProOrientationLock.displayName = 'ProOrientationLock'
ProLandscapeOptimization.displayName = 'ProLandscapeOptimization'

export default ProOrientationHandler