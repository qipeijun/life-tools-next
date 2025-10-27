'use client'

import React, { memo, useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { Loader2, RefreshCw, Wifi, WifiOff, AlertTriangle } from 'lucide-react'

const ProLoader = memo(function ProLoader({
  type = 'spinner', // spinner, dots, pulse, skeleton, progress, shimmer, content
  size = 'medium', // small, medium, large
  color = 'primary', // primary, secondary, success, warning, error
  message = '',
  progress = 0,
  showPercentage = false,
  overlay = false,
  className = '',
  ...props
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 尺寸配置
  const sizeConfig = {
    small: {
      container: 'w-8 h-8',
      spinner: 'w-6 h-6',
      dots: 'gap-1'
    },
    medium: {
      container: 'w-12 h-12',
      spinner: 'w-8 h-8',
      dots: 'gap-2'
    },
    large: {
      container: 'w-16 h-16',
      spinner: 'w-10 h-10',
      dots: 'gap-3'
    }
  }

  // 颜色配置
  const colorConfig = {
    primary: {
      bg: 'bg-ios-blue-500',
      text: 'text-white',
      border: 'border-ios-blue-200'
    },
    secondary: {
      bg: 'bg-ios-gray-500',
      text: 'text-white',
      border: 'border-ios-gray-300'
    },
    success: {
      bg: 'bg-ios-green-500',
      text: 'text-white',
      border: 'border-ios-green-300'
    },
    warning: {
      bg: 'bg-ios-orange-500',
      text: 'text-white',
      border: 'border-ios-orange-300'
    },
    error: {
      bg: 'bg-ios-red-500',
      text: 'text-white',
      border: 'border-ios-red-300'
    }
  }

  const sizeClasses = sizeConfig[size]
  const colorClasses = colorConfig[color]

  // 加载状态渲染
  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className={cn(
            'relative inline-block animate-spin',
            sizeClasses.spinner
          )}>
            <Loader2 className="w-full h-full" />
          </div>
        )

      case 'dots':
        return (
          <div className={cn('flex items-center', sizeClasses.dots)}>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full animate-pulse',
                  colorClasses.bg,
                  index === 0 && 'animate-delay-0'
                )}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              />
            ))}
          </div>
        )

      case 'pulse':
        return (
          <div className={cn(
            'w-3 h-3 rounded-full animate-pulse',
            colorClasses.bg
          )} />
        )

      case 'shimmer':
        return (
          <div className={cn(
            'relative overflow-hidden rounded-system',
            sizeClasses.container,
            colorClasses.bg
          )}>
            <div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-60fps"
              style={{
                animationDuration: '2s'
              }}
            />
          </div>
        )

      case 'progress':
        return (
          <div className={cn(
            'relative w-full rounded-system overflow-hidden',
            colorClasses.bg,
            colorClasses.border
          )}>
            <div
              className="h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-60fps"
              style={{
                animationDuration: '3s'
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'inherit'
              }}
            >
              <div className="text-center">
                <span className={cn(
                  'text-system-lg font-bold',
                  colorClasses.text
                )}>
                  {Math.round(progress)}%
                </span>
                {showPercentage && (
                  <div className={cn(
                    'text-system-xs mt-1 opacity-70',
                    colorClasses.text
                  )}>
                    加载中...
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case 'skeleton':
        return (
          <div className={cn('space-y-2', sizeClasses.container)}>
            {/* 标题骨架 */}
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-system animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-system animate-pulse" />

            {/* 内容骨架 */}
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-system animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-system animate-pulse w-5/6" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-system animate-pulse" />
            </div>

            {/* 底部骨架 */}
            <div className="flex gap-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-system animate-pulse flex-1" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-system animate-pulse flex-2" />
            </div>
          </div>
        )

      case 'content':
        return (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center">
              <div className={cn(
                'animate-pulse',
                colorClasses.bg,
                'w-3 h-3 rounded-full mr-3'
              )} />
              <span className={cn(
                'text-system-base font-medium',
                colorClasses.text
              )}>
                {message || '加载中...'}
              </span>
            </div>
          </div>
        )

      default:
        return (
          <div className={cn('flex items-center justify-center', sizeClasses.container)}>
            <div className={cn(
              'animate-spin',
              sizeClasses.spinner
            )}>
              <RefreshCw className="w-full h-full" />
            </div>
          </div>
        )
    }
  }

  // 网络状态指示器
  const NetworkIndicator = ({ online }) => (
    <div className="flex items-center gap-2">
      {online ? (
        <>
          <Wifi className="w-4 h-4 text-ios-green" />
          <span className="text-system-xs text-ios-green">在线</span>
        </>
      ) : (
        <>
          <WifiOff className="w-4 h-4 text-ios-red" />
          <span className="text-system-xs text-ios-red">离线</span>
        </>
      )}
    </div>
  )

  // 错误状态指示器
  const ErrorIndicator = ({ error }) => (
    <div className="flex items-center gap-2">
      <AlertTriangle className="w-4 h-4 text-ios-red" />
      <span className="text-system-xs text-ios-red">{error}</span>
    </div>
  )

  const containerClasses = cn(
    'flex flex-col items-center justify-center',
    // 性能优化
    'gpu-accelerated',
    'performance-optimized',
    // 覆盖层样式
    overlay && [
      'fixed inset-0 z-modal bg-black/50 backdrop-blur-sm',
      'transition-apple'
    ],
    className
  )

  if (!mounted) {
    return null // 避免服务端渲染不一致
  }

  return (
    <div className={containerClasses}>
      {/* 主加载器 */}
      <div className="relative">
        {renderLoader()}

        {/* 状态指示器 */}
        {(type === 'progress' || type === 'content') && (
          <div className="mt-4 flex items-center gap-4">
            {type === 'progress' && (
              <>
                <NetworkIndicator online={progress > 0} />
                <div className="text-system-xs text-gray-500">
                  {progress < 100 ? `正在下载... ${Math.round(progress)}%` : '处理中...'}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* 消息 */}
      {message && type !== 'progress' && (
        <div className="mt-4 text-center">
          <p className={cn(
            'text-system-sm text-gray-600 dark:text-gray-400',
            'animate-fade-in-60fps'
          )}>
            {message}
          </p>
        </div>
      )}

      {/* 网络和错误状态 */}
      {(type === 'content' || type === 'progress') && (
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NetworkIndicator online={progress > 0 && progress < 100} />
          {progress === 100 && (
            <div className="text-system-sm text-ios-green">已完成</div>
          )}
        </div>
      )}
    </div>
  )
})

ProLoader.displayName = 'ProLoader'

export default ProLoader