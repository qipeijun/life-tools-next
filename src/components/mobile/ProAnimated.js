'use client'

import React, { memo, useRef, useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { usePerformanceAnimation, useIntersectionObserver } from '../../hooks'

const ProAnimated = memo(function ProAnimated({
  children,
  animation = 'fade-in', // fade-in, slide-up, slide-down, slide-left, slide-right, zoom-in, bounce-in, pulse, shake, rotate, flip
  trigger = 'mount', // mount, visible, hover, click, manual
  duration = 600,
  delay = 0,
  easing = 'apple-ease', // apple-ease, ease-in, ease-out, ease-in-out, spring, bounce
  repeat = false,
  repeatDelay = 2000,
  onComplete,
  onUpdate,
  className = '',
  style = {},
  ...props
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(trigger === 'mount')
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const animationRef = useRef(null)

  // 触发动画的函数
  const triggerAnimation = useRef(null)

  // 性能动画Hook
  const { startAnimation, cancel: stopAnimation } = usePerformanceAnimation(animation, {
    duration,
    delay,
    easing,
    onComplete,
    onUpdate
  })

  // 交叉观察器 - 用于可见性触发
  useIntersectionObserver(elementRef, (entry) => {
    if (trigger === 'visible' && entry.isIntersecting !== isVisible) {
      setIsVisible(entry.isIntersecting)
    }
  }, { threshold: 0.1 })

  // 处理不同的触发条件
  useEffect(() => {
    triggerAnimation.current = () => {
      if (elementRef.current) {
        startAnimation(elementRef.current)
      }
    }

    // 立即触发或挂载触发
    if (trigger === 'mount' || trigger === 'immediate') {
      triggerAnimation.current()
    }
  }, [startAnimation, trigger])

  // 可见性触发
  useEffect(() => {
    if (trigger === 'visible' && isVisible && elementRef.current) {
      triggerAnimation.current()
    }
  }, [isVisible, trigger])

  // 悬停触发
  useEffect(() => {
    if (trigger === 'hover' && isHovered && elementRef.current) {
      triggerAnimation.current()
    } else if (trigger === 'hover' && !isHovered && elementRef.current) {
      // 退出动画
      const reverseAnimation = getReverseAnimation(animation)
      if (reverseAnimation) {
        const { startAnimation: startReverseAnimation } = usePerformanceAnimation(reverseAnimation, {
          duration: duration / 2,
          easing: 'ease-out'
        })
        startReverseAnimation(elementRef.current)
      }
    }
  }, [isHovered, trigger])

  // 点击触发
  useEffect(() => {
    if (trigger === 'click' && isClicked && elementRef.current) {
      triggerAnimation.current()
    }
  }, [isClicked, trigger])

  // 重复动画
  useEffect(() => {
    if (repeat && elementRef.current) {
      const repeatAnimation = () => {
        triggerAnimation.current()
        animationRef.current = setTimeout(() => {
          repeatAnimation()
        }, repeatDelay)
      }

      animationRef.current = setTimeout(repeatAnimation, delay)
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
        animationRef.current = null
      }
    }
  }, [repeat, repeatDelay, trigger])

  // 获取反向动画
  const getReverseAnimation = (forwardAnimation) => {
    const reverseMap = {
      'fade-in': 'fade-out',
      'slide-up': 'slide-down',
      'slide-down': 'slide-up',
      'slide-left': 'slide-right',
      'slide-right': 'slide-left',
      'zoom-in': 'zoom-out',
      'bounce-in': 'bounce-out',
      'pulse': 'pulse',
      'shake': 'shake',
      'rotate': 'rotate',
      'flip': 'flip'
    }
    return reverseMap[forwardAnimation]
  }

  // 手动触发
  const manualTrigger = () => {
    triggerAnimation.current?.()
  }

  // 组件样式
  const containerClasses = cn(
    // 性能优化类
    'gpu-accelerated',
    'performance-optimized',
    // 动画类
    'animate-60fps',
    // 过渡优化
    'transition-apple',
    // 自定义样式
    className
  )

  const eventHandlers = {
    onMouseEnter: trigger === 'hover' ? () => setIsHovered(true) : undefined,
    onMouseLeave: trigger === 'hover' ? () => setIsHovered(false) : undefined,
    onClick: trigger === 'click' ? () => {
      setIsClicked(true)
      setTimeout(() => setIsClicked(false), 100)
    } : undefined
  }

  // 导出手动触发函数
  useEffect(() => {
    if (props.manualTriggerRef) {
      props.manualTriggerRef.current = manualTrigger
    }
  }, [manualTrigger])

  return (
    <div
      ref={elementRef}
      className={containerClasses}
      style={style}
      {...eventHandlers}
      {...props}
    >
      {children}
    </div>
  )
})

// 带手动触发功能的HOC
export const withProAnimated = (WrappedComponent) => {
  const AnimatedComponent = memo(function AnimatedComponent(props) {
    const triggerRef = useRef(null)

    return (
      <ProAnimated
        trigger="manual"
        manualTriggerRef={triggerRef}
        {...props}
      >
        <WrappedComponent {...props} triggerRef={triggerRef} />
      </ProAnimated>
    )
  })

  AnimatedComponent.displayName = `withProAnimated(${WrappedComponent.displayName || WrappedComponent.name})`
  return AnimatedComponent
}

ProAnimated.displayName = 'ProAnimated'

export default ProAnimated