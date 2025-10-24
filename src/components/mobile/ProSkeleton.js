'use client'

import React, { memo } from 'react'
import { cn } from '../../lib/utils'

const ProSkeleton = memo(function ProSkeleton({
  variant = 'default', // default, text, circular, rectangular
  width = 'w-full',
  height = 'h-4',
  className = '',
  animate = true,
  ...props
}) {
  const baseClasses = cn(
    'relative overflow-hidden',
    'bg-ios-gray-200 dark:bg-ios-gray-700',
    animate && 'animate-shimmer',
    className
  )

  // 变体样式
  const variantClasses = {
    default: '',
    text: 'rounded-system-sm',
    circular: 'rounded-system-full',
    rectangular: 'rounded-system-md'
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        width,
        height
      )}
      {...props}
    >
      {/* Apple iOS 风格的闪光效果 */}
      {animate && (
        <div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            animation: 'shimmer 2s ease-in-out infinite'
          }}
        />
      )}
    </div>
  )
})

ProSkeleton.displayName = 'ProSkeleton'

export default ProSkeleton