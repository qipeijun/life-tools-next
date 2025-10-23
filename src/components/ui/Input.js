'use client'

import React, { memo, useCallback } from 'react'
import { cn } from '../../lib/utils'

export const Input = memo(function Input({
 label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,
  error = '',
  className = '',
  required = false,
 disabled = false,
 icon = null,
 mobile = false,
  ...props
}) {
  // 优化事件处理函数
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e)
    }
  }, [onChange])

  const handleBlur = useCallback((e) => {
    if (onBlur) {
      onBlur(e)
    }
  }, [onBlur])

  const handleFocus = useCallback((e) => {
    if (onFocus) {
      onFocus(e)
    }
  }, [onFocus])

  const inputClasses = cn(
    'w-full px-4 py-3 rounded-xl border border-gray-300/70 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/70 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/60',
    'min-h-[52px] text-lg', // 适配移动端，增加最小高度和字体大小
    mobile && 'h-14 px-4 py-3 text-base min-h-[56px] rounded-2xl', // 移动端优化
    error && 'border-error/70 focus:ring-error/50 focus:border-error',
    icon && 'pl-12',
    className
  )

  return (
    <div className={cn('space-y-2 w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-foreground/80">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/70">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-error mt-1">{error}</p>
      )}
    </div>
  )
}, (prevProps, nextProps) => {
  // 自定义比较函数，只在必要时重新渲染
  return (
    prevProps.value === nextProps.value &&
    prevProps.error === nextProps.error &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.mobile === nextProps.mobile &&
    prevProps.label === nextProps.label &&
    prevProps.placeholder === nextProps.placeholder &&
    prevProps.type === nextProps.type &&
    prevProps.required === nextProps.required &&
    prevProps.icon === nextProps.icon
  )
})
