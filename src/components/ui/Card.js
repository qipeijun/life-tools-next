'use client'

import React, { memo, forwardRef } from 'react'
import { cn } from '../../lib/utils'

const cardVariants = {
  variant: {
    default: 'card',
    elevated: 'card shadow-medium',
    outlined: 'card border-2',
    ghost: 'bg-transparent border-0 shadow-none',
    glass: 'glass',
    interactive: 'card card-interactive',
  },
  padding: {
    none: '',
    xs: 'p-2',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  }
}

export const Card = memo(forwardRef(function Card({
  children,
  variant = 'default',
  padding = 'lg',
  rounded = 'lg',
  hover = false,
  className = '',
  as: Component = 'div',
  ...props
}, ref) {
  const baseClasses = cn(
    // 基础变体
    cardVariants.variant[variant],
    // 移动端优化的内边距
    padding === 'none' && 'p-0',
    padding === 'xs' && 'p-3 sm:p-2',
    padding === 'sm' && 'p-4 sm:p-3',
    padding === 'md' && 'p-5 sm:p-4',
    padding === 'lg' && 'p-6 sm:p-5 md:p-4',
    padding === 'xl' && 'p-8 sm:p-6 md:p-5',
    // 圆角
    cardVariants.rounded[rounded],
    // 移动端阴影优化
    variant === 'elevated' && 'shadow-sm sm:shadow-medium md:shadow-lg',
    variant === 'default' && 'shadow-xs sm:shadow-sm md:shadow-md',
    // 交互效果 - 移动端触摸反馈
    hover && 'active:scale-[0.98] transition-transform duration-100 cursor-pointer',
    // 移动端边距优化
    '-mx-4 sm:mx-0 px-4 sm:px-0', // 移动端添加边距，桌面端无
    // 响应式断边
    'w-full sm:w-auto',
    // 自定义样式
    className
  )

  return (
    <Component
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {children}
    </Component>
  )
}))

Card.displayName = 'Card'

export const CardHeader = memo(forwardRef(function CardHeader({
  children,
  className = '',
  as: Component = 'div',
  ...props
}, ref) {
  const classes = cn(
    'card-header',
    // 移动端标题优化
    'text-lg sm:text-base md:text-lg font-semibold',
    'mb-4 sm:mb-3 md:mb-4',
    'leading-tight',
    className
  )

  return (
    <Component
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  )
}))

CardHeader.displayName = 'CardHeader'

export const CardBody = memo(forwardRef(function CardBody({
  children,
  className = '',
  as: Component = 'div',
  ...props
}, ref) {
  const classes = cn(
    'card-body',
    // 移动端内容间距优化
    'space-y-4 sm:space-y-3 md:space-y-4',
    'text-base sm:text-sm md:text-base leading-relaxed',
    className
  )

  return (
    <Component
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  )
}))

CardBody.displayName = 'CardBody'

export const CardFooter = memo(forwardRef(function CardFooter({
  children,
  className = '',
  as: Component = 'div',
  ...props
}, ref) {
  const classes = cn(
    'card-footer',
    'mobile-optimized',
    className
  )

  return (
    <Component
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  )
}))

CardFooter.displayName = 'CardFooter'

// 专门的标题卡片组件
export const CardTitle = memo(forwardRef(function CardTitle({
  children,
  className = '',
  as: Component = 'h3',
  ...props
}, ref) {
  const classes = cn(
    // 移动端标题样式优化
    'text-lg sm:text-base md:text-lg font-semibold',
    'leading-tight tracking-tight',
    'text-gray-900 dark:text-gray-100',
    className
  )

  return (
    <Component
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  )
}))

CardTitle.displayName = 'CardTitle'

// 描述文本组件
export const CardDescription = memo(forwardRef(function CardDescription({
  children,
  className = '',
  as: Component = 'p',
  ...props
}, ref) {
  const classes = cn(
    'text-sm text-muted-foreground',
    className
  )

  return (
    <Component
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  )
}))

CardDescription.displayName = 'CardDescription'

// 导出变体配置
export { cardVariants }
