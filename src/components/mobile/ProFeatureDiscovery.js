'use client'

import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../../lib/utils'

const ProFeatureDiscovery = memo(function ProFeatureDiscovery({
  features = [],
  position = 'bottom-right', // top-left, top-right, bottom-left, bottom-right, center
  autoShow = true,
  showDelay = 2000,
  hideDelay = 5000,
  showBadge = true,
  maxVisible = 3,
  animationDuration = 300,
  className = '',
  style = {},
  ...props
}) {
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRefs = useRef([])

  // 获取位置样式
  const getPositionClasses = useCallback(() => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4'
      case 'top-right':
        return 'top-4 right-4'
      case 'bottom-left':
        return 'bottom-4 left-4'
      case 'bottom-right':
        return 'bottom-4 right-4'
      case 'center':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      default:
        return 'bottom-4 right-4'
    }
  }, [position])

  // 显示功能发现
  const showFeature = useCallback((feature, index) => {
    setVisibleFeatures(prev => [...prev, { ...feature, id: Date.now() + index }])

    // 自动隐藏
    const hideTimeout = setTimeout(() => {
      setVisibleFeatures(prev => prev.filter(f => f.id !== feature.id || f.id !== Date.now() + index))
    }, hideDelay)

    timeoutRefs.current.push(hideTimeout)
  }, [hideDelay])

  // 自动显示功能
  useEffect(() => {
    if (!autoShow || features.length === 0) return

    features.slice(0, maxVisible).forEach((feature, index) => {
      const showTimeout = setTimeout(() => {
        showFeature(feature, index)
      }, showDelay + (index * 1000)) // 依次显示

      timeoutRefs.current.push(showTimeout)
    })

    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
      timeoutRefs.current = []
    }
  }, [autoShow, features, maxVisible, showDelay, showFeature])

  // 关闭特定功能
  const closeFeature = useCallback((featureId) => {
    setVisibleFeatures(prev => prev.filter(f => f.id !== featureId))
  }, [])

  // 关闭所有功能
  const closeAll = useCallback(() => {
    setVisibleFeatures([])
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current = []
  }, [])

  if (visibleFeatures.length === 0 && !showBadge) return null

  return (
    <div
      className={cn(
        'fixed z-40 space-y-3',
        getPositionClasses(),
        'max-w-sm',
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* 功能卡片 */}
      {visibleFeatures.map((feature) => (
        <div
          key={feature.id}
          className={cn(
            'glass-card rounded-xl p-4 shadow-lg',
            'animate-fade-in-right',
            'transition-all duration-300',
            'max-w-xs min-w-[280px]',
            isHovered ? 'transform scale-105' : ''
          )}
          style={{
            animationDuration: `${animationDuration}ms`
          }}
        >
          <div className="flex items-start space-x-3">
            {/* 图标 */}
            {feature.icon && (
              <div className="flex-shrink-0">
                <div className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center',
                  feature.iconBgColor || 'bg-ios-blue-100 dark:bg-ios-blue-900/30'
                )}>
                  {typeof feature.icon === 'string' ? (
                    <span className={cn(
                      'text-lg',
                      feature.iconColor || 'text-ios-blue-600 dark:text-ios-blue-400'
                    )}>
                      {feature.icon}
                    </span>
                  ) : (
                    <feature.icon className={cn(
                      'w-5 h-5',
                      feature.iconColor || 'text-ios-blue-600 dark:text-ios-blue-400'
                    )} />
                  )}
                </div>
              </div>
            )}

            {/* 内容 */}
            <div className="flex-1 min-w-0">
              {feature.title && (
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {feature.title}
                </h4>
              )}

              {feature.description && (
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                  {feature.description}
                </p>
              )}

              {/* 操作按钮 */}
              {feature.action && (
                <button
                  onClick={feature.action.onClick}
                  className={cn(
                    'text-xs font-medium px-3 py-1 rounded-md transition-colors',
                    feature.action.variant === 'primary'
                      ? 'bg-ios-blue-500 text-white hover:bg-ios-blue-600'
                      : 'text-ios-blue-600 dark:text-ios-blue-400 hover:text-ios-blue-700 dark:hover:text-ios-blue-300'
                  )}
                >
                  {feature.action.label}
                </button>
              )}
            </div>

            {/* 关闭按钮 */}
            <button
              onClick={() => closeFeature(feature.id)}
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 进度条 */}
          {feature.progress && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {feature.progress.label}
                </span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {feature.progress.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-ios-blue-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${feature.progress.value}%` }}
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* 徽章指示器 */}
      {showBadge && visibleFeatures.length === 0 && features.length > 0 && (
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <button
            onClick={() => {
              const nextFeature = features[0]
              if (nextFeature) {
                showFeature(nextFeature, 0)
              }
            }}
            className="w-12 h-12 bg-ios-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-ios-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </button>
        </div>
      )}

      {/* 关闭所有按钮 */}
      {visibleFeatures.length > 1 && (
        <button
          onClick={closeAll}
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          关闭所有
        </button>
      )}
    </div>
  )
})

// Hook for feature discovery management
export const useFeatureDiscovery = () => {
  const [discoveredFeatures, setDiscoveredFeatures] = useState([])

  const markAsDiscovered = useCallback((featureId) => {
    setDiscoveredFeatures(prev => [...new Set([...prev, featureId])])
    const storageKey = `discovered-features`
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]')
    localStorage.setItem(storageKey, JSON.stringify([...new Set([...existing, featureId])]))
  }, [])

  const isDiscovered = useCallback((featureId) => {
    return discoveredFeatures.includes(featureId)
  }, [discoveredFeatures])

  const resetDiscovery = useCallback(() => {
    setDiscoveredFeatures([])
    localStorage.removeItem('discovered-features')
  }, [])

  useEffect(() => {
    try {
      const storageKey = `discovered-features`
      const existing = JSON.parse(localStorage.getItem(storageKey) || '[]')
      setDiscoveredFeatures(existing)
    } catch (error) {
      console.warn('Failed to load discovered features:', error)
    }
  }, [])

  return {
    discoveredFeatures,
    markAsDiscovered,
    isDiscovered,
    resetDiscovery
  }
}

// Context提示组件
export const ProContextualTips = memo(function ProContextualTips({
  tips = [],
  trigger = 'hover', // hover, click, manual
  position = 'top',
  showDelay = 500,
  hideDelay = 200,
  className = '',
  ...props
}) {
  const [activeTip, setActiveTip] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRefs = useRef([])

  const showTip = useCallback((tip) => {
    setActiveTip(tip)
    const showTimeout = setTimeout(() => {
      setIsVisible(true)
    }, showDelay)
    timeoutRefs.current.push(showTimeout)
  }, [showDelay])

  const hideTip = useCallback(() => {
    setIsVisible(false)
    const hideTimeout = setTimeout(() => {
      setActiveTip(null)
    }, hideDelay)
    timeoutRefs.current.push(hideTimeout)
  }, [hideDelay])

  const getPositionClasses = useCallback(() => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2'
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2'
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2'
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
    }
  }, [position])

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  return (
    <div className={cn('relative inline-block', className)} {...props}>
      {tips.map((tip, index) => (
        <div key={index}>
          {React.cloneElement(tip.trigger, {
            onMouseEnter: trigger === 'hover' ? () => showTip(tip) : undefined,
            onMouseLeave: trigger === 'hover' ? hideTip : undefined,
            onClick: trigger === 'click' ? () => showTip(tip) : undefined,
            className: cn(tip.trigger.props?.className, 'cursor-help')
          })}

          {activeTip === tip && (
            <div
              className={cn(
                'absolute z-50 glass-card rounded-lg p-3 shadow-lg max-w-xs',
                'animate-fade-in-scale',
                getPositionClasses(),
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              )}
              style={{ transition: 'all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              {/* 箭头 */}
              <div
                className={cn(
                  'absolute w-2 h-2 bg-white dark:bg-gray-800 transform rotate-45',
                  position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' :
                  position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' :
                  position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' :
                  position === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''
                )}
              />

              {tip.title && (
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {tip.title}
                </h4>
              )}

              {tip.content && (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {tip.content}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
})

ProFeatureDiscovery.displayName = 'ProFeatureDiscovery'
ProContextualTips.displayName = 'ProContextualTips'

export default ProFeatureDiscovery