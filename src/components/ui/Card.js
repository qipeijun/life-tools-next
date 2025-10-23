'use client'

import React, { memo } from 'react'
import { cn } from '../../lib/utils'

export const Card = memo(function Card({
  children,
  className = '',
  padding = 'normal',
  hover = false,
  mobile = false,
  ...props
}) {
  const paddings = {
    none: '',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8',
  }

  const classes = cn(
    'card',
    mobile && 'rounded-2xl p-4', // 移动端优化
    hover && 'card-hover',
    paddings[padding],
    className
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
})

export const CardHeader = memo(function CardHeader({ children, className = '', mobile = false, ...props }) {
  return (
    <div className={cn('card-header', mobile && 'p-4', className)} {...props}>
      {children}
    </div>
  )
})

export const CardBody = memo(function CardBody({ children, className = '', mobile = false, ...props }) {
  return (
    <div className={cn('card-body', mobile && 'p-4', className)} {...props}>
      {children}
    </div>
  )
})

export const CardFooter = memo(function CardFooter({ children, className = '', mobile = false, ...props }) {
  return (
    <div className={cn('card-footer', mobile && 'p-4', className)} {...props}>
      {children}
    </div>
  )
})
