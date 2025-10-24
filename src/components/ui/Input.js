'use client'

import React, { memo, useCallback, forwardRef } from 'react'
import { cn } from '../../lib/utils'

const inputVariants = {
  variant: {
    default: 'input',
    filled: 'input bg-gray-100 dark:bg-gray-800 border-transparent',
    outlined: 'input border-2',
    underlined: 'input border-0 border-b-2 rounded-none px-0',
    ghost: 'input border-transparent bg-transparent focus:bg-gray-50 dark:focus:bg-gray-800',
  },
  size: {
    sm: 'input-sm',      // h-8 px-2 text-xs
    md: 'input-md',      // h-10 px-3 text-sm (默认)
    lg: 'input-lg',      // h-12 px-4 text-base
  }
}

export const Input = memo(forwardRef(function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,
  error = '',
  variant = 'default',
  size = 'md',
  className = '',
  required = false,
  disabled = false,
  icon = null,
  iconPosition = 'left',
  fullWidth = true,
  helperText = '',
  ...props
}, ref) {
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
    // 基础变体
    inputVariants.variant[variant],
    // 移动端优先设计 - 56px高度确保触摸友好
    'h-14 px-4 text-base min-h-[56px]', // 移动端优化高度
    'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2', // 移动端焦点样式
    'transition-all duration-200', // 平滑过渡
    'text-16 leading-6', // 移动端友好的行高和字体大小
    'touch-manipulation', // 优化触摸性能
    // 小屏及以上
    'sm:h-12 sm:px-3 sm:text-sm sm:min-h-[48px]',
    'md:h-10 md:px-3 md:text-sm md:min-h-[40px]',
    'lg:h-10 lg:px-3 lg:text-sm lg:min-h-[40px]',
    // 状态样式
    error && 'border-error-500 focus:ring-error-500',
    disabled && 'opacity-50 cursor-not-allowed touch-none',
    // 布局样式
    fullWidth && 'w-full',
    // 图标间距 - 移动端更大的间距
    icon && iconPosition === 'left' && 'pl-14 sm:pl-12 md:pl-10 lg:pl-10',
    icon && iconPosition === 'right' && 'pr-14 sm:pr-12 md:pr-10 lg:pr-10',
    // 自定义样式
    className
  )

  const iconClasses = cn(
    'absolute top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none',
    // 移动端优先图标尺寸 - 更大的触摸目标
    'w-6 h-6 text-gray-400', // 移动端
    'sm:w-5 sm:h-5 sm:text-gray-400', // 小屏及以上
    'md:w-4 md:h-4', // 中屏及以上
    'lg:w-4 lg:h-4', // 大屏及以上
    // 图标位置 - 移动端更好的定位
    iconPosition === 'left' && 'left-4 sm:left-3 md:left-3 lg:left-3',
    iconPosition === 'right' && 'right-4 sm:right-3 md:right-3 lg:right-3'
  )

  return (
    <div className={cn('space-y-2 w-full')}>
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <div className="relative w-full">
        {icon && (
          <div className={iconClasses}>
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id || 'input'}-error` : helperText ? `${props.id || 'input'}-helper` : undefined}
          {...props}
        />
      </div>
      
      {error && (
        <p 
          id={`${props.id || 'input'}-error`}
          className="text-sm text-error flex items-center gap-1"
          role="alert"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p 
          id={`${props.id || 'input'}-helper`}
          className="text-sm text-muted-foreground"
        >
          {helperText}
        </p>
      )}
    </div>
  )
}))

Input.displayName = 'Input'

// 优化的比较函数
Input.equals = (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.error === nextProps.error &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.label === nextProps.label &&
    prevProps.placeholder === nextProps.placeholder &&
    prevProps.type === nextProps.type &&
    prevProps.variant === nextProps.variant &&
    prevProps.size === nextProps.size &&
    prevProps.required === nextProps.required &&
    prevProps.icon === nextProps.icon &&
    prevProps.iconPosition === nextProps.iconPosition &&
    prevProps.fullWidth === nextProps.fullWidth &&
    prevProps.helperText === nextProps.helperText
  )
}

// 导出变体配置
export { inputVariants }

// 文本域组件
export const Textarea = memo(forwardRef(function Textarea({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error = '',
  variant = 'default',
  className = '',
  required = false,
  disabled = false,
  rows = 4,
  resize = 'vertical',
  helperText = '',
  ...props
}, ref) {
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

  const textareaClasses = cn(
    // 基础样式
    'flex w-full rounded-xl border border-gray-300',
    'bg-white px-3 py-2 text-sm',
    'placeholder:text-gray-400',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-primary-500 focus-visible:border-primary-500',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'dark:border-gray-600 dark:bg-gray-800',
    'dark:text-gray-100 dark:placeholder:text-gray-500',
    // 变体样式
    variant === 'filled' && 'bg-gray-100 dark:bg-gray-800 border-transparent',
    variant === 'outlined' && 'border-2',
    variant === 'underlined' && 'border-0 border-b-2 rounded-none px-0',
    variant === 'ghost' && 'border-transparent bg-transparent focus:bg-gray-50 dark:focus:bg-gray-800',
    // 状态样式
    error && 'border-error-500 focus-visible:ring-error-500',
    disabled && 'opacity-50 cursor-not-allowed',
    // 调整大小
    resize === 'none' && 'resize-none',
    resize === 'vertical' && 'resize-y',
    resize === 'horizontal' && 'resize-x',
    resize === 'both' && 'resize',
    // 响应式优化
    'mobile-optimized',
    // 自定义样式
    className
  )

  return (
    <div className={cn('space-y-2 w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <textarea
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        disabled={disabled}
        rows={rows}
        className={textareaClasses}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.id || 'textarea'}-error` : helperText ? `${props.id || 'textarea'}-helper` : undefined}
        {...props}
      />
      
      {error && (
        <p 
          id={`${props.id || 'textarea'}-error`}
          className="text-sm text-error flex items-center gap-1"
          role="alert"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p 
          id={`${props.id || 'textarea'}-helper`}
          className="text-sm text-muted-foreground"
        >
          {helperText}
        </p>
      )}
    </div>
  )
}))

Textarea.displayName = 'Textarea'
