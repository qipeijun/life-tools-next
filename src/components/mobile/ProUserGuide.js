'use client'

import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import { cn } from '../../lib/utils'

const ProUserGuide = memo(function ProUserGuide({
  steps = [],
  autoStart = false,
  showSkip = true,
  showProgress = true,
  allowKeyboard = true,
  overlayClassName = '',
  onStepChange,
  onComplete,
  onSkip,
  className = '',
  style = {},
  ...props
}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [highlightedElement, setHighlightedElement] = useState(null)
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 })
  const timeoutRef = useRef(null)

  // 高亮目标元素
  const highlightTarget = useCallback((target) => {
    if (!target) return

    const element = typeof target === 'string'
      ? document.querySelector(target)
      : target

    if (element) {
      const rect = element.getBoundingClientRect()
      setHighlightedElement(element)
      setPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height
      })
    }
  }, [])

  // 开始引导
  const start = useCallback(() => {
    if (steps.length === 0) return

    setIsActive(true)
    setCurrentStep(0)

    const firstStep = steps[0]
    if (firstStep.target) {
      // 延迟高亮以确保DOM已渲染
      timeoutRef.current = setTimeout(() => {
        highlightTarget(firstStep.target)
      }, 100)
    }

    onStepChange?.(0, firstStep)
  }, [steps, highlightTarget, onStepChange])

  // 自动开始
  useEffect(() => {
    if (autoStart && steps.length > 0) {
      start()
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [autoStart, steps, start])

  // 切换步骤
  const goToStep = useCallback((stepIndex) => {
    if (stepIndex < 0 || stepIndex >= steps.length) return

    const newStep = steps[stepIndex]
    setCurrentStep(stepIndex)

    if (newStep.target) {
      highlightTarget(newStep.target)
    }

    onStepChange?.(stepIndex, newStep)
  }, [steps, highlightTarget, onStepChange])

  // 下一步
  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      goToStep(currentStep + 1)
    } else {
      complete()
    }
  }, [currentStep, steps, goToStep])

  // 上一步
  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      goToStep(currentStep - 1)
    }
  }, [currentStep, goToStep])

  // 完成
  const complete = useCallback(() => {
    setIsActive(false)
    setHighlightedElement(null)
    onComplete?.()
  }, [onComplete])

  // 跳过
  const skip = useCallback(() => {
    setIsActive(false)
    setHighlightedElement(null)
    onSkip?.()
  }, [onSkip])

  // 键盘控制
  useEffect(() => {
    if (!allowKeyboard || !isActive) return

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          nextStep()
          break
        case 'ArrowLeft':
          e.preventDefault()
          prevStep()
          break
        case 'Escape':
          e.preventDefault()
          skip()
          break
        case 'Enter':
          e.preventDefault()
          if (currentStep === steps.length - 1) {
            complete()
          } else {
            nextStep()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [allowKeyboard, isActive, currentStep, steps.length, nextStep, prevStep, skip, complete])

  // 获取引导气泡位置
  const getTooltipPosition = useCallback(() => {
    const step = steps[currentStep]
    if (!step) return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

    const placement = step.placement || 'bottom'
    const offset = step.offset || 16
    const tooltipWidth = 320 // 引导气泡宽度
    const tooltipHeight = 200 // 估计高度

    let top = position.top
    let left = position.left

    switch (placement) {
      case 'top':
        top -= offset + tooltipHeight
        left += position.width / 2
        return { top, left: left - tooltipWidth / 2, transform: 'none' }

      case 'bottom':
        top += position.height + offset
        left += position.width / 2
        return { top, left: left - tooltipWidth / 2, transform: 'none' }

      case 'left':
        top += position.height / 2
        left -= offset + tooltipWidth
        return { top: top - tooltipHeight / 2, left, transform: 'none' }

      case 'right':
        top += position.height / 2
        left += position.width + offset
        return { top: top - tooltipHeight / 2, left, transform: 'none' }

      case 'center':
      default:
        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    }
  }, [currentStep, steps, position])

  const currentStepData = steps[currentStep]
  const tooltipPosition = getTooltipPosition()

  if (!isActive || !currentStepData) return null

  return (
    <>
      {/* 遮罩层 */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
          overlayClassName
        )}
        onClick={skip}
      />

      {/* 高亮区域 */}
      {highlightedElement && (
        <div
          className="fixed z-[51] pointer-events-none"
          style={{
            top: position.top,
            left: position.left,
            width: position.width,
            height: position.height,
            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
            borderRadius: 'var(--radius-lg)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'
          }}
        />
      )}

      {/* 引导气泡 */}
      <div
        className={cn(
          'fixed z-[52] w-80 max-w-[calc(100vw-2rem)] glass-card rounded-2xl shadow-2xl',
          'animate-fade-in-scale',
          'transition-apple'
        )}
        style={{
          ...tooltipPosition,
          ...style
        }}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* 进度指示器 */}
        {showProgress && steps.length > 1 && (
          <div className="flex items-center justify-center p-4 border-b border-white/10">
            <div className="flex space-x-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'h-1 rounded-full transition-all duration-300',
                    index === currentStep
                      ? 'w-8 bg-ios-blue-500'
                      : 'w-4 bg-white/30'
                  )}
                />
              ))}
            </div>
          </div>
        )}

        {/* 内容区域 */}
        <div className="p-6">
          {/* 标题 */}
          {currentStepData.title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {currentStepData.title}
            </h3>
          )}

          {/* 描述 */}
          {currentStepData.content && (
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {currentStepData.content}
            </div>
          )}

          {/* 自定义内容 */}
          {currentStepData.customContent && (
            <div className="mb-6">
              {currentStepData.customContent}
            </div>
          )}

          {/* 操作按钮 */}
          <div className="flex items-center justify-between">
            {/* 跳过按钮 */}
            {showSkip && currentStep > 0 && (
              <button
                onClick={skip}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                跳过引导
              </button>
            )}

            <div className="flex space-x-3 ml-auto">
              {/* 上一步 */}
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  上一步
                </button>
              )}

              {/* 下一步/完成 */}
              <button
                onClick={currentStep === steps.length - 1 ? complete : nextStep}
                className="px-4 py-2 text-sm font-medium text-white bg-ios-blue-500 rounded-lg hover:bg-ios-blue-600 transition-colors"
              >
                {currentStep === steps.length - 1 ? '完成' : '下一步'}
              </button>
            </div>
          </div>
        </div>

        {/* 箭头指示器 */}
        {currentStepData.target && (
          <div
            className="absolute w-3 h-3 bg-white dark:bg-gray-800 transform rotate-45"
            style={{
              bottom: currentStepData.placement === 'top' ? '-6px' : 'auto',
              top: currentStepData.placement === 'bottom' ? '-6px' : 'auto',
              left: currentStepData.placement === 'right' ? '-6px' : 'auto',
              right: currentStepData.placement === 'left' ? '-6px' : '50%',
              transform: currentStepData.placement === 'bottom' || currentStepData.placement === 'top'
                ? 'translateX(-50%) rotate(45deg)'
                : 'translateY(-50%) rotate(45deg)'
            }}
          />
        )}
      </div>
    </>
  )
})

// Hook for managing user guide state
export const useUserGuide = (guideId, steps = []) => {
  const [hasSeenGuide, setHasSeenGuide] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  useEffect(() => {
    const storageKey = `user-guide-${guideId}`
    const seen = localStorage.getItem(storageKey)
    setHasSeenGuide(!!seen)
  }, [guideId])

  const startGuide = useCallback(() => {
    setShowGuide(true)
  }, [])

  const completeGuide = useCallback(() => {
    setShowGuide(false)
    const storageKey = `user-guide-${guideId}`
    localStorage.setItem(storageKey, 'true')
    setHasSeenGuide(true)
  }, [guideId])

  const skipGuide = useCallback(() => {
    setShowGuide(false)
  }, [])

  const resetGuide = useCallback(() => {
    const storageKey = `user-guide-${guideId}`
    localStorage.removeItem(storageKey)
    setHasSeenGuide(false)
  }, [guideId])

  return {
    hasSeenGuide,
    showGuide,
    startGuide,
    completeGuide,
    skipGuide,
    resetGuide
  }
}

// Quick start component
export const ProQuickStart = memo(function ProQuickStart({
  title = "快速开始",
  description = "让我们带您了解主要功能",
  steps = [],
  guideId = 'default',
  className = '',
  ...props
}) {
  const { hasSeenGuide, showGuide, startGuide, completeGuide, skipGuide } = useUserGuide(guideId, steps)

  return (
    <>
      {!hasSeenGuide && (
        <div
          className={cn(
            'fixed bottom-4 right-4 z-40 glass-card rounded-lg p-4 max-w-xs animate-fade-in-up',
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-ios-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{description}</p>
            </div>
            <button
              onClick={startGuide}
              className="px-3 py-1 text-xs font-medium text-ios-blue-600 hover:text-ios-blue-700 transition-colors"
            >
              开始
            </button>
          </div>
        </div>
      )}

      {showGuide && (
        <ProUserGuide
          steps={steps}
          onComplete={completeGuide}
          onSkip={skipGuide}
        />
      )}
    </>
  )
})

ProUserGuide.displayName = 'ProUserGuide'
ProQuickStart.displayName = 'ProQuickStart'

export default ProUserGuide