'use client'

import React, { memo, useState, useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

const ProResponsiveGrid = memo(function ProResponsiveGrid({
  children,
  columns = 'auto', // auto, 1, 2, 3, 4, 5, custom
  customColumns = null,
  minColumnWidth = 280,
  gap = 'normal', // tight, normal, loose, custom
  className = '',
  style = {},
  ...props
}) {
  const containerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  // 检测是否为客户端
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 容器查询检测
  useEffect(() => {
    const container = containerRef.current
    if (!container || !isClient) return

    const updateSize = () => {
      const { width, height } = container.getBoundingClientRect()
      setContainerSize({ width, height })
    }

    // 初始尺寸设置
    updateSize()

    // ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          updateSize()
        }
      }
    })

    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [isClient])

  // 计算列数配置
  const getGridTemplate = useCallback(() => {
    if (columns === 'auto') {
      return 'repeat(auto-fit, minmax(280px, 1fr))'
    }

    if (typeof columns === 'number') {
      return `repeat(${columns}, 1fr)`
    }

    if (customColumns && Array.isArray(customColumns)) {
      return customColumns.join(' ')
    }

    return '1fr'
  }, [columns, customColumns])

  // 间距配置
  const gapConfig = {
    tight: 'var(--space-2)',
    normal: 'var(--space-4)',
    loose: 'var(--space-6)',
    custom: ''
  }

  const gridClasses = cn(
    // 基础网格样式
    'grid',
    // 动态列配置
    'grid-cols-4',
    // 响应式网格
    'responsive-grid',
    // GPU加速
    'gpu-accelerated',
    // 性能优化
    'performance-optimized',
    // 自定义样式
    className
  )

  const gridStyle = {
    // 动态网格模板
    gridTemplateColumns: getGridTemplate(),
    // 动态间距
    gap: gapConfig[gap],
    // 自定义样式
    ...style
  }

  return (
    <div
      ref={containerRef}
      className={gridClasses}
      style={gridStyle}
    >
      {children}
    </div>
  )
})

// 响应式列数HOC
export const withResponsiveColumns = (columnBreakpoints) => {
  return (WrappedComponent) => {
    const ResponsiveComponent = memo(function ResponsiveComponent(props) {
      const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
      const containerRef = useRef(null)

      // 获取匹配的列数
      const getMatchingColumns = useCallback(() => {
        const width = containerSize.width

        for (let i = columnBreakpoints.length - 1; i >= 0; i--) {
          const breakpoint = columnBreakpoints[i]
          if (width >= breakpoint.minWidth) {
            return breakpoint.columns
          }
        }

        return columnBreakpoints[0].columns
      }, [containerSize.width, columnBreakpoints])

      useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const updateSize = () => {
          const { width, height } = container.getBoundingClientRect()
          setContainerSize({ width, height })
        }

        updateSize()
        const resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.target === container) {
              updateSize()
            }
          }
        })

        resizeObserver.observe(container)

        return () => {
          resizeObserver.disconnect()
        }
      }, [])

      return (
        <div
          ref={containerRef}
          className="grid gpu-accelerated performance-optimized"
          style={{
            gridTemplateColumns: getMatchingColumns(),
            gap: 'var(--space-4)',
            ...props.style
          }}
          {...props}
        >
          <WrappedComponent {...props} />
        </div>
      )
    })

    ResponsiveComponent.displayName = `withResponsiveColumns(${WrappedComponent.displayName || WrappedComponent.name})`
    return ResponsiveComponent
  }
}

// 智能断点工具Hook
export const useBreakpoints = (breakpoints) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('default')

  const getBreakpoint = useCallback(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth

      for (let i = breakpoints.length - 1; i >= 0; i--) {
        const breakpoint = breakpoints[i]
        if (width >= breakpoint.minWidth) {
          return breakpoint.name
        }
      }

      return breakpoints[0]?.name || 'default'
    }, [breakpoints])

  useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(getBreakpoint())
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoints])

  return {
    currentBreakpoint,
    isBreakpoint: (name) => currentBreakpoint === name,
    isAbove: (name) => {
      const index = breakpoints.findIndex(bp => bp.name === name)
      if (index === -1) return true
      const breakpoint = breakpoints[index]
      const nextBreakpoint = breakpoints[index + 1]
      return !nextBreakpoint || window.innerWidth >= breakpoint.minWidth
    },
    isBelow: (name) => {
      const index = breakpoints.findIndex(bp => bp.name === name)
      if (index === -1) return true
      const breakpoint = breakpoints[index]
      const prevBreakpoint = breakpoints[index - 1]
      return prevBreakpoint && window.innerWidth < breakpoint.minWidth
    }
  }
}

ProResponsiveGrid.displayName = 'ProResponsiveGrid'

export default ProResponsiveGrid