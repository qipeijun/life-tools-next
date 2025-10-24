'use client'

import { useRef, useEffect, useCallback } from 'react'

// 高性能动画Hook
export const usePerformanceAnimation = (
  animationType,
  options = {}
) => {
  const {
    duration = 300,
    easing = 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    delay = 0,
    onComplete,
    onUpdate
  } = options

  const animationRef = useRef(null)
  const startTimeRef = useRef(null)
  const rafRef = useRef(null)

  // 缓动函数
  const easingFunctions = {
    'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
    'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
    'apple-ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  }

  // 动画映射
  const animationMap = {
    'fade-in': {
      keyframes: [
        { opacity: 0, transform: 'scale(0.95)' },
        { opacity: 1, transform: 'scale(1)' }
      ]
    },
    'slide-up': {
      keyframes: [
        { opacity: 0, transform: 'translateY(30px) scale(0.95)' },
        { opacity: 1, transform: 'translateY(0) scale(1)' }
      ]
    },
    'slide-down': {
      keyframes: [
        { opacity: 0, transform: 'translateY(-30px) scale(0.95)' },
        { opacity: 1, transform: 'translateY(0) scale(1)' }
      ]
    },
    'slide-left': {
      keyframes: [
        { opacity: 0, transform: 'translateX(30px) scale(0.95)' },
        { opacity: 1, transform: 'translateX(0) scale(1)' }
      ]
    },
    'slide-right': {
      keyframes: [
        { opacity: 0, transform: 'translateX(-30px) scale(0.95)' },
        { opacity: 1, transform: 'translateX(0) scale(1)' }
      ]
    },
    'zoom-in': {
      keyframes: [
        { opacity: 0, transform: 'scale(0.3)' },
        { opacity: 1, transform: 'scale(1)' }
      ]
    },
    'bounce-in': {
      keyframes: [
        { opacity: 0, transform: 'scale(0.3)' },
        { opacity: 1, transform: 'scale(1.1)' },
        { opacity: 1, transform: 'scale(0.9)' },
        { opacity: 1, transform: 'scale(1)' }
      ]
    },
    'pulse': {
      keyframes: [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0.8, transform: 'scale(1.05)' },
        { opacity: 1, transform: 'scale(1)' }
      ]
    },
    'shake': {
      keyframes: [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0)' }
      ]
    },
    'rotate': {
      keyframes: [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
      ]
    },
    'flip': {
      keyframes: [
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(90deg)' }
      ]
    }
  }

  // 获取插值
  const interpolate = (start, end, progress) => {
    return start + (end - start) * progress
  }

  // 获取缓动值
  const getEasedProgress = (progress) => {
    const easingFn = easingFunctions[easing] || easingFunctions['apple-ease']

    if (easing === 'spring') {
      // 弹簧缓动
      return 1 - Math.pow(1 - progress, 3)
    } else if (easing === 'bounce') {
      // 弹跳缓动
      if (progress < 0.5) {
        return 8 * progress * progress * progress
      } else {
        const f = (progress - 0.5) * 2
        return 1 - f * f * f * f * 0.5 + 0.5
      }
    } else {
      // CSS缓动函数模拟
      return easingFn.replace('cubic-bezier', '').split(',').map(parseFloat).reduce((acc, val, i, arr) => {
        if (i % 4 === 0) acc.push([val])
        else if (i % 4 === 1) acc[acc.length - 1].push(val)
        else if (i % 4 === 2) acc[acc.length - 1].push(val)
        else acc[acc.length - 1].push(val)
        return acc
      }, []).reduce((bezier, controlPoints, i) => {
        const p = progress
        let x = 0

        // 计算贝塞尔曲线
        for (let j = 0; j < 4; j++) {
          x += controlPoints[i][j] * Math.pow(1 - p, 3 - j) * Math.pow(p, j) *
                Math.pow(1 - p, j) * Math.pow(1 - p, j) * 3 *
                controlPoints[i][j + 1] * Math.pow(p, j)
        }

        return x
      }, 1)[0]
    }
  }

  // 执行动画
  const animate = useCallback((element, keyframes) => {
    if (!element) return

    startTimeRef.current = performance.now()

    const animateFrame = (currentTime) => {
      const elapsed = currentTime - startTimeRef.current - delay
      const progress = Math.min(elapsed / duration, 1)

      if (progress < 0) {
        rafRef.current = requestAnimationFrame(animateFrame)
        return
      }

      const easedProgress = getEasedProgress(progress)

      // 计算当前帧的关键帧
      const frameIndex = Math.floor(easedProgress * (keyframes.length - 1))
      const nextFrameIndex = Math.min(frameIndex + 1, keyframes.length - 1)
      const frameProgress = (easedProgress * (keyframes.length - 1)) - frameIndex

      // 在关键帧之间插值
      const currentFrame = keyframes[frameIndex]
      const nextFrame = keyframes[nextFrameIndex]
      const interpolatedFrame = {}

      Object.keys(currentFrame).forEach(key => {
        interpolatedFrame[key] = interpolate(currentFrame[key], nextFrame[key], frameProgress)
      })

      // 应用样式
      Object.keys(interpolatedFrame).forEach(property => {
        if (property === 'transform') {
          element.style.transform = interpolatedFrame[property] + ' translateZ(0)'
          element.style.webkitTransform = interpolatedFrame[property] + ' translateZ(0)'
        } else {
          element.style[property] = interpolatedFrame[property]
        }
      })

      // 回调
      onUpdate?.(interpolatedFrame, progress)

      if (progress >= 1) {
        onComplete?.(interpolatedFrame)
      } else {
        rafRef.current = requestAnimationFrame(animateFrame)
      }
    }

    rafRef.current = requestAnimationFrame(animateFrame)
  }, [duration, delay, easing, onComplete, onUpdate])

  // 清理动画
  const cancel = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [])

  // 组件卸载时清理
  useEffect(() => {
    return cancel
  }, [cancel])

  const startAnimation = useCallback((element) => {
    if (!element) return

    const animation = animationMap[animationType]
    if (!animation) {
      console.warn(`Animation type "${animationType}" not found`)
      return
    }

    // 添加性能优化属性
    element.style.willChange = 'transform, opacity'
    element.style.backfaceVisibility = 'hidden'
    element.style.webkitBackfaceVisibility = 'hidden'

    animate(element, animation.keyframes)
  }, [animate, animationType])

  return {
    startAnimation,
    cancel,
    animationRef
  }
}

// 视口交叉观察器Hook - 用于懒加载和渐进式动画
export const useIntersectionObserver = (
  callback,
  options = {
    threshold: 0.1,
    rootMargin: '0px',
    triggerOnce: true
  }
) => {
  const elementRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry)

          // 如果只需要触发一次，则停止观察
          if (options.triggerOnce) {
            observerRef.current?.unobserve(element)
          }
        }
      })
    }, {
      threshold: options.threshold,
      rootMargin: options.rootMargin
    })

    observerRef.current.observe(element)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [callback, options.threshold, options.rootMargin, options.triggerOnce])

  return elementRef
}

// 懒加载Hook
export const useLazyLoad = (threshold = 0.1) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const elementRef = useIntersectionObserver((entry) => {
    if (!isLoaded) {
      setIsLoaded(true)
    }
  }, { threshold, triggerOnce: true })

  return { elementRef, isLoaded }
}

export default usePerformanceAnimation