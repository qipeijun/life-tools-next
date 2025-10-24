'use client'

import React, { memo, useState, useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

const ProAdaptiveContainer = memo(function ProAdaptiveContainer({
  children,
  maxWidth = 'none', // none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, full
  minWidth = 'none', // none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl
  padding = 'normal', // none, xs, sm, md, lg, xl
  centered = false,
  className = '',
  style = {},
  ...props
}) {
  const containerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  // 客户端检测
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 最大宽度配置
  const maxWidthConfig = {
    none: '',
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    full: 'max-w-full'
  }

  // 最小宽度配置
  const minWidthConfig = {
    none: '',
    xs: 'min-w-0',
    sm: 'min-w-sm',
    md: 'min-w-md',
    lg: 'min-w-lg',
    xl: 'min-w-xl',
    '2xl': 'min-w-2xl',
    '3xl': 'min-w-3xl',
    '4xl': 'min-w-4xl'
  }

  // 内边距配置
  const paddingConfig = {
    none: '',
    xs: 'p-0',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12'
  }

  // 居中对齐配置
  const centeredClass = centered ? 'mx-auto' : ''

  const containerClasses = cn(
    // 基础容器样式
    'relative w-full',
    // 响应式尺寸
    'adaptive-container',
    'max-w-full',
    // 最大宽度
    maxWidthConfig[maxWidth],
    // 最小宽度
    minWidthConfig[minWidth],
    // 内边距
    paddingConfig[padding],
    // 居中对齐
    centeredClass,
    // GPU加速
    'gpu-accelerated',
    // 性能优化
    'performance-optimized',
    // 自定义样式
    className
  )

  // 自适应逻辑
  const getAdaptiveStyles = useCallback(() => {
    if (!isClient || !containerRef.current) return {}

    const container = containerRef.current
    const { width } = container.getBoundingClientRect()

    // 基于容器宽度自动调整
    const styles = {}

    // 如果没有设置最大宽度，基于内容自适应
    if (maxWidth === 'none') {
      styles.maxWidth = '100%'
    } else {
      // 检查并应用最大宽度限制
      const currentMax = container.style?.maxWidth || ''
      if (currentMax && !currentMax.includes('%')) {
        // 将像素值转换为数字
        const currentMaxValue = parseFloat(currentMax)
        const computedMax = width * 100 / parseFloat(currentMaxValue.replace('px', ''))

        // 如果计算出的最大值小于CSS值，使用计算值
        if (computedMax < width) {
          styles.maxWidth = `${width}px`
        }
      }
    }

    return styles
  }, [isClient, maxWidth])

  const adaptiveStyles = getAdaptiveStyles()

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      style={{
        ...adaptiveStyles,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
})

ProAdaptiveContainer.displayName = 'ProAdaptiveContainer'

export default ProAdaptiveContainer