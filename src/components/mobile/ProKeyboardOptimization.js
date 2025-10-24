'use client'

import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../../lib/utils'

const ProKeyboardOptimization = memo(function ProKeyboardOptimization({
  children,
  enableScrollAdjustment = true,
  enableViewportFix = true,
  enableInputOptimization = true,
  onKeyboardShow,
  onKeyboardHide,
  className = '',
  style = {},
  ...props
}) {
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
  const [activeInput, setActiveInput] = useState(null)
  const originalViewportHeight = useRef(0)
  const containerRef = useRef(null)

  // 获取初始视口高度
  useEffect(() => {
    originalViewportHeight.current = window.innerHeight
  }, [])

  // 检测键盘显示/隐藏
  const detectKeyboard = useCallback(() => {
    if (typeof window === 'undefined') return

    const currentHeight = window.innerHeight
    const heightDiff = originalViewportHeight.current - currentHeight

    // 键盘高度差异阈值（150px）
    const isShowing = heightDiff > 150

    if (isShowing !== isKeyboardVisible) {
      setIsKeyboardVisible(isShowing)
      setKeyboardHeight(isShowing ? heightDiff : 0)

      if (isShowing) {
        onKeyboardShow?.(heightDiff)
        document.documentElement.classList.add('keyboard-visible')
      } else {
        onKeyboardHide?.()
        document.documentElement.classList.remove('keyboard-visible')
      }
    }
  }, [isKeyboardVisible, onKeyboardShow, onKeyboardHide])

  // 监听视口变化
  useEffect(() => {
    if (!enableViewportFix) return

    const handleResize = () => {
      detectKeyboard()
    }

    const handleVisualViewportChange = () => {
      if (window.visualViewport) {
        const height = window.visualViewport.height
        const offsetTop = window.visualViewport.offsetTop || 0

        setKeyboardHeight(originalViewportHeight.current - height - offsetTop)

        const isShowing = originalViewportHeight.current - height > 150
        if (isShowing !== isKeyboardVisible) {
          setIsKeyboardVisible(isShowing)
          if (isShowing) {
            onKeyboardShow?.(originalViewportHeight.current - height - offsetTop)
          } else {
            onKeyboardHide?.()
          }
        }
      }
    }

    // 监听 window resize
    window.addEventListener('resize', handleResize)

    // 监听 Visual Viewport API（更准确的键盘检测）
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualViewportChange)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleVisualViewportChange)
      }
    }
  }, [enableViewportFix, isKeyboardVisible, detectKeyboard, onKeyboardShow, onKeyboardHide])

  // 输入框焦点管理
  useEffect(() => {
    if (!enableInputOptimization) return

    const handleFocusIn = (e) => {
      const input = e.target
      if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA' || input.contentEditable === 'true') {
        setActiveInput(input)

        // 滚动到输入框
        if (enableScrollAdjustment) {
          setTimeout(() => {
            input.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            })
          }, 300)
        }

        // 添加输入框样式
        input.classList.add('keyboard-active')
      }
    }

    const handleFocusOut = (e) => {
      const input = e.target
      setActiveInput(null)
      input?.classList.remove('keyboard-active')
    }

    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    return () => {
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
    }
  }, [enableInputOptimization, enableScrollAdjustment])

  // 键盘高度调整样式
  const containerStyle = {
    ...style,
    marginBottom: isKeyboardVisible && enableScrollAdjustment ? `${keyboardHeight}px` : '0',
    transition: 'margin-bottom 0.3s ease-out'
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'keyboard-optimized-container',
        isKeyboardVisible && 'keyboard-visible',
        className
      )}
      style={containerStyle}
      {...props}
    >
      {children}

      {/* 键盘状态指示器（开发模式下） */}
      {process.env.NODE_ENV === 'development' && (
        <div
          className={cn(
            'fixed bottom-4 right-4 z-50 px-3 py-2 rounded-lg text-xs font-mono',
            'bg-black/80 text-white',
            'transition-opacity duration-200',
            isKeyboardVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          键盘: {isKeyboardVisible ? `${keyboardHeight.toFixed(0)}px` : '隐藏'}
        </div>
      )}
    </div>
  )
})

// 智能输入框组件
export const ProSmartInput = memo(function ProSmartInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  onSubmit,
  autoCapitalize = 'sentences',
  autoCorrect = 'on',
  autoComplete = 'on',
  inputMode = 'text',
  pattern,
  maxLength,
  className = '',
  style = {},
  ...props
}) {
  const inputRef = useRef(null)

  // 处理键盘提交
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && onSubmit) {
      e.preventDefault()
      onSubmit(e.target.value)
    }
  }, [onSubmit])

  // 智能输入模式配置
  const getInputMode = useCallback(() => {
    switch (type) {
      case 'email':
        return 'email'
      case 'number':
      case 'tel':
        return 'numeric'
      case 'decimal':
        return 'decimal'
      case 'search':
        return 'search'
      case 'url':
        return 'url'
      default:
        return inputMode
    }
  }, [type, inputMode])

  const getAutoComplete = useCallback(() => {
    switch (type) {
      case 'email':
        return 'email'
      case 'tel':
        return 'tel'
      case 'password':
        return 'current-password'
      case 'search':
        return 'off'
      default:
        return autoComplete
    }
  }, [type, autoComplete])

  return (
    <input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      inputMode={getInputMode()}
      autoComplete={getAutoComplete()}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      pattern={pattern}
      maxLength={maxLength}
      className={cn(
        'w-full px-4 py-3',
        'border border-gray-200 dark:border-gray-700',
        'rounded-xl',
        'bg-white dark:bg-gray-800',
        'text-gray-900 dark:text-white',
        'placeholder-gray-400 dark:placeholder-gray-500',
        'focus:outline-none focus:ring-2 focus:ring-ios-blue-500 focus:border-transparent',
        'transition-all duration-200',
        // 移动端优化
        'text-base', // 防止iOS缩放
        'touch-target-lg',
        'keyboard-safe',
        className
      )}
      style={style}
      {...props}
    />
  )
})

// 虚拟键盘工具栏
export const ProKeyboardToolbar = memo(function ProKeyboardToolbar({
  isVisible,
  actions = [],
  position = 'top',
  className = '',
  style = {},
  ...props
}) {
  if (!isVisible || actions.length === 0) return null

  const positionClasses = {
    top: 'top-0 left-0 right-0',
    bottom: 'bottom-0 left-0 right-0'
  }

  return (
    <div
      className={cn(
        'fixed z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700',
        'px-4 py-2',
        'animate-slide-down',
        positionClasses[position],
        className
      )}
      style={style}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-lg',
                'transition-colors duration-200',
                action.variant === 'primary'
                  ? 'bg-ios-blue-500 text-white hover:bg-ios-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              {action.label}
            </button>
          ))}
        </div>

        {/* 键盘高度指示器 */}
        <div className="text-xs text-gray-500 dark:text-gray-400">
          键盘激活
        </div>
      </div>
    </div>
  )
})

// 键盘感知的布局容器
export const ProKeyboardAwareLayout = memo(function ProKeyboardAwareLayout({
  children,
  offset = 0,
  behavior = 'padding', // padding, margin, transform
  className = '',
  style = {},
  ...props
}) {
  const [layoutStyle, setLayoutStyle] = useState({})

  useEffect(() => {
    const handleKeyboardChange = (e) => {
      const keyboardHeight = e.detail?.height || 0

      const styles = {}
      switch (behavior) {
        case 'padding':
          styles.paddingBottom = keyboardHeight + offset
          break
        case 'margin':
          styles.marginBottom = keyboardHeight + offset
          break
        case 'transform':
          styles.transform = `translateY(-${keyboardHeight}px)`
          break
      }

      setLayoutStyle(styles)
    }

    // 监听自定义键盘事件
    window.addEventListener('keyboardchange', handleKeyboardChange)

    return () => {
      window.removeEventListener('keyboardchange', handleKeyboardChange)
    }
  }, [behavior, offset])

  return (
    <div
      className={cn(
        'keyboard-aware-layout',
        className
      )}
      style={{ ...layoutStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  )
})

ProKeyboardOptimization.displayName = 'ProKeyboardOptimization'
ProSmartInput.displayName = 'ProSmartInput'
ProKeyboardToolbar.displayName = 'ProKeyboardToolbar'
ProKeyboardAwareLayout.displayName = 'ProKeyboardAwareLayout'

export default ProKeyboardOptimization