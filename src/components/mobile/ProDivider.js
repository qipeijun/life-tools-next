'use client'

import React, { memo } from 'react'
import { cn } from '../../lib/utils'

const ProDivider = memo(function ProDivider({
  variant = 'horizontal', // horizontal, vertical
  thickness = 'thin', // thin, medium, thick
  spacing = 'md', // xs, sm, md, lg, xl, 2xl, 3xl
  color = 'default', // default, primary, secondary, success, warning, error
  dashed = false,
  className = '',
  ...props
}) {
  // 厚度配置
  const thicknessConfig = {
    thin: 'h-px w-px',
    medium: 'h-[2px] w-[2px]',
    thick: 'h-[3px] w-[3px]'
  }

  // 方向配置
  const orientationClasses = {
    horizontal: 'w-full',
    vertical: 'h-full'
  }

  // 颜色配置 - Apple iOS + Ant Design 混合
  const colorConfig = {
    default: 'bg-ios-gray-300 dark:bg-ios-gray-600',
    primary: 'bg-ios-blue-500',
    secondary: 'bg-ios-purple-500',
    success: 'bg-ios-green-500',
    warning: 'bg-ios-orange-500',
    error: 'bg-ios-red-500'
  }

  // 间距配置
  const spacingConfig = {
    xs: 'my-proximity mx-proximity',
    sm: 'my-compact mx-compact',
    md: 'my-comfortable mx-comfortable',
    lg: 'my-spacious mx-spacious',
    xl: 'my-generous mx-generous',
    '2xl': 'my-ample mx-ample',
    '3xl': 'my-heroic mx-heroic'
  }

  const dividerClasses = cn(
    // 基础样式
    'block',
    // 厚度和方向
    thicknessConfig[thickness],
    orientationClasses[variant],
    // 颜色
    colorConfig[color],
    // 虚线样式
    dashed && 'border-dashed border-0',
    dashed && variant === 'horizontal' && 'border-t',
    dashed && variant === 'vertical' && 'border-l',
    dashed && thickness === 'thin' && 'border-t-px border-l-px',
    dashed && thickness === 'medium' && 'border-t-2 border-l-2',
    dashed && thickness === 'thick' && 'border-t-[3px] border-l-[3px]',
    // 间距
    variant === 'horizontal' ? spacingConfig[spacing] : '',
    // 透明度
    'opacity-60 dark:opacity-40',
    // 自定义样式
    className
  )

  return (
    <div
      role="separator"
      aria-orientation={variant}
      className={dividerClasses}
      {...props}
    />
  )
})

ProDivider.displayName = 'ProDivider'

export default ProDivider