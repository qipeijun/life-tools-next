'use client'

import React, { memo, useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/utils'

const ModernInput = memo(function ModernInput({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  error = '',
  label = '',
  helperText = '',
  icon = null,
  iconPosition = 'left',
  disabled = false,
  required = false,
  maxLength = null,
  showCharacterCount = false,
  className = '',
  inputClassName = '',
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [showError, setShowError] = useState(false)
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  // 检查是否有内容
  useEffect(() => {
    setIsFilled(!!value || !!props.defaultValue)
  }, [value, props.defaultValue])

  // 错误显示
  useEffect(() => {
    setShowError(!!error)
  }, [error])

  // 聚焦处理
  const handleFocus = (event) => {
    setIsFocused(true)
    setShowError(false)
    onFocus?.(event)
  }

  // 失焦处理
  const handleBlur = (event) => {
    setIsFocused(false)
    if (error) {
      setShowError(true)
    }
    onBlur?.(event)
  }

  // 输入变化处理
  const handleChange = (event) => {
    const newValue = event.target.value

    // 字符限制
    if (maxLength && newValue.length > maxLength) {
      return
    }

    setShowError(false)
    onChange?.(event)
  }

  // 标签动画类
  const labelClasses = cn(
    'absolute left-5 transition-apple pointer-events-none z-10',
    'select-none text-system-sm font-medium',
    // 浮动状态
    (isFocused || isFilled) && [
      '-top-3 left-4 text-system-xs',
      'bg-white dark:bg-gray-900 px-3 py-1 rounded-system-full',
      'text-ios-blue-600 dark:text-ios-blue-400',
      'shadow-system-sm border border-white/80 dark:border-gray-900/80'
    ],
    // 默认状态
    !isFocused && !isFilled && [
      'top-1/2 transform -translate-y-1/2',
      'text-gray-500 dark:text-gray-400'
    ],
    // 错误状态
    showError && 'text-ios-red dark:text-ios-red'
  )

  // 容器类
  const containerClasses = cn(
    'relative',
    'w-full',
    className
  )

  // 输入框容器类
  const inputContainerClasses = cn(
    // 专业级设计系统样式
    'card-surface',
    'relative overflow-hidden touch-target-md',
    // 专业级圆角
    'rounded-system-2xl sm:rounded-system-xl',
    // 专业级动画和过渡
    'transition-apple',
    'transform-gpu will-change-transform',
    // 专业级背景和毛玻璃
    'bg-white/90 dark:bg-gray-900/90',
    'backdrop-blur-xl',
    // 专业级边框和阴影
    'border-2 border-gray-200/50 dark:border-gray-700/50',
    'shadow-system hover:shadow-system-md',
    // 焦点状态
    isFocused && [
      'border-ios-blue-500 shadow-system-lg',
      'bg-white dark:bg-gray-900',
      'ring-2 ring-ios-blue-500/20 ring-offset-2 ring-offset-white dark:ring-offset-gray-900'
    ],
    // 错误状态
    showError && [
      'border-ios-red shadow-system-lg',
      'animate-pulse',
      'ring-2 ring-ios-red/20 ring-offset-2 ring-offset-white dark:ring-offset-gray-900'
    ],
    // 禁用状态
    disabled && [
      'opacity-50 cursor-not-allowed',
      'bg-gray-100/80 dark:bg-gray-800/80'
    ],
    // 图标调整
    icon && (iconPosition === 'left' ? 'pl-14' : 'pr-14')
  )

  // 输入框类
  const inputElementClasses = cn(
    'w-full h-14 sm:h-16 px-5',
    'bg-transparent border-0 outline-none',
    'text-system-base text-gray-900 dark:text-gray-100',
    'placeholder-transparent',
    'transition-apple',
    'transform-gpu',
    // 专业级字体设置
    'font-normal',
    // 焦点调整
    icon && (iconPosition === 'left' ? 'pl-0' : 'pr-0'),
    label && 'pt-7 pb-3',
    inputClassName
  )

  // 图标容器类
  const iconClasses = cn(
    'absolute top-1/2 transform -translate-y-1/2 z-20',
    'flex items-center justify-center',
    'w-10 h-10',
    'text-gray-400 dark:text-gray-500',
    'transition-colors duration-200',
    // 位置调整
    iconPosition === 'left' ? 'left-4' : 'right-4',
    // 状态变化
    (isFocused || showError) && [
      showError ? 'text-error-500' : 'text-primary-500'
    ],
    disabled && 'opacity-50'
  )

  // 字符计数类
  const counterClasses = cn(
    'absolute bottom-2 right-4 text-xs',
    'transition-colors duration-200',
    showError
      ? 'text-error-500'
      : isFocused
      ? 'text-primary-500'
      : 'text-gray-400 dark:text-gray-500'
  )

  return (
    <div className={containerClasses} ref={containerRef}>
      {/* 输入框容器 */}
      <div className={inputContainerClasses}>
        {/* 图标 */}
        {icon && (
          <div className={iconClasses}>
            {icon}
          </div>
        )}

        {/* 输入框 */}
        <div className="relative">
          {/* 浮动标签 */}
          {label && (
            <label className={labelClasses}>
              {label}
              {required && <span className="text-error-500 ml-1">*</span>}
            </label>
          )}

          {/* 输入元素 */}
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={label || placeholder}
            disabled={disabled}
            maxLength={maxLength}
            className={inputElementClasses}
            {...props}
          />
        </div>

        {/* 动态背景效果 */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-300',
            'bg-gradient-to-r from-primary-500/5 to-accent-500/5',
            isFocused && 'opacity-100'
          )}
        />

        {/* 触摸反馈波纹 */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-300',
            'bg-primary-500/10',
            isFocused && 'opacity-100'
          )}
        />
      </div>

      {/* 错误消息 */}
      {(showError && error) && (
        <div className="mt-2 animate-modern-slide-up">
          <p className="text-system-sm text-ios-red dark:text-ios-red flex items-center gap-2">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        </div>
      )}

      {/* 帮助文本 */}
      {helperText && !showError && (
        <p className="mt-2 text-system-sm text-gray-500 dark:text-gray-400 animate-modern-fade-in prose-caption">
          {helperText}
        </p>
      )}

      {/* 字符计数 */}
      {showCharacterCount && maxLength && (
        <div className={cn(
          counterClasses,
          'text-system-xs font-medium'
        )}>
          {value?.length || 0}/{maxLength}
        </div>
      )}
    </div>
  )
})

ModernInput.displayName = 'ModernInput'

export default ModernInput