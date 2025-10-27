'use client'

import React, { memo } from 'react'
import { cn } from '../../lib/utils'

const ProContainer = memo(function ProContainer({
  children,
  size = 'default', // xs, sm, default, md, lg, xl, 2xl, 3xl, 4xl, full
  padding = 'default', // none, xs, sm, default, md, lg, xl, 2xl, 3xl
  centered = false,
  className = '',
  ...props
}) {
  // 容器最大宽度配置 - Apple iOS + Ant Design 混合
  const sizeConfig = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    default: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-8xl',
    '3xl': 'max-w-9xl',
    '4xl': 'max-w-10xl',
    full: 'max-w-full'
  }

  // 内边距配置 - 8点网格系统
  const paddingConfig = {
    none: '',
    xs: 'px-proximity',
    sm: 'px-compact',
    default: 'px-spacious',
    md: 'px-generous',
    lg: 'px-ample',
    xl: 'px-heroic',
    '2xl': 'px-screen',
    '3xl': 'px-monumental'
  }

  const containerClasses = cn(
    // 基础样式
    'w-full mx-auto',
    // 专业级设计系统
    sizeConfig[size],
    paddingConfig[padding],
    // 居中对齐
    centered && 'mx-auto',
    // 自定义样式
    className
  )

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  )
})

ProContainer.displayName = 'ProContainer'

export default ProContainer