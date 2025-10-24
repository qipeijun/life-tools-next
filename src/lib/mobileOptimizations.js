'use client'

// 移动端性能优化工具
export class MobilePerformanceOptimizer {
  constructor() {
    this.isSupported = this.checkSupport()
    this.observers = new Map()
    this.intersectionObserver = null
    this.resizeObserver = null
    this.mutationObserver = null
    this.init()
  }

  checkSupport() {
    return {
      intersectionObserver: 'IntersectionObserver' in window,
      resizeObserver: 'ResizeObserver' in window,
      mutationObserver: 'MutationObserver' in window,
      requestIdleCallback: 'requestIdleCallback' in window,
      passiveEvents: this.supportsPassiveEvents(),
      webWorkers: 'Worker' in window,
      serviceWorker: 'serviceWorker' in navigator,
      localStorage: 'localStorage' in window,
      sessionStorage: 'sessionStorage' in window,
      indexedDB: 'indexedDB' in window
    }
  }

  supportsPassiveEvents() {
    let supportsPassive = false
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          supportsPassive = true
          return false
        }
      })
      window.addEventListener('testPassive', null, opts)
      window.removeEventListener('testPassive', null, opts)
    } catch (e) {
      // ignore
    }
    return supportsPassive
  }

  init() {
    // 初始化观察者
    if (this.isSupported.intersectionObserver) {
      this.intersectionObserver = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      )
    }

    if (this.isSupported.resizeObserver) {
      this.resizeObserver = new ResizeObserver(
        this.handleResize.bind(this)
      )
    }

    if (this.isSupported.mutationObserver) {
      this.mutationObserver = new MutationObserver(
        this.handleMutation.bind(this)
      )
    }
  }

  // 处理元素进入视窗
  handleIntersection(entries) {
    entries.forEach(entry => {
      const element = entry.target
      const callback = this.observers.get(element)

      if (callback) {
        callback(entry)
      }
    })
  }

  // 处理元素大小变化
  handleResize(entries) {
    entries.forEach(entry => {
      const element = entry.target
      const callback = this.observers.get(element)

      if (callback) {
        callback(entry)
      }
    })
  }

  // 处理DOM变化
  handleMutation(mutations) {
    mutations.forEach(mutation => {
      const callback = this.observers.get(mutation.target)

      if (callback) {
        callback(mutation)
      }
    })
  }

  // 观察元素
  observe(element, callback, type = 'intersection') {
    if (!element || !callback) return

    this.observers.set(element, callback)

    switch (type) {
      case 'intersection':
        if (this.intersectionObserver) {
          this.intersectionObserver.observe(element)
        }
        break
      case 'resize':
        if (this.resizeObserver) {
          this.resizeObserver.observe(element)
        }
        break
      case 'mutation':
        if (this.mutationObserver) {
          this.mutationObserver.observe(element, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeOldValue: true
          })
        }
        break
    }
  }

  // 取消观察
  unobserve(element, type = 'intersection') {
    if (!element) return

    this.observers.delete(element)

    switch (type) {
      case 'intersection':
        if (this.intersectionObserver) {
          this.intersectionObserver.unobserve(element)
        }
        break
      case 'resize':
        if (this.resizeObserver) {
          this.resizeObserver.unobserve(element)
        }
        break
      case 'mutation':
        if (this.mutationObserver) {
          this.mutationObserver.disconnect()
        }
        break
    }
  }

  // 优化的防抖函数
  debounce(func, wait, options = {}) {
    const { immediate = false, maxWait = null } = options
    let timeout = null
    let maxTimeout = null
    let lastCallTime = 0

    return function debounced(...args) {
      const now = Date.now()
      const later = () => {
        lastCallTime = 0
        clearTimeout(timeout)
        clearTimeout(maxTimeout)
        timeout = maxTimeout = null
        if (!immediate) func.apply(this, args)
      }

      const shouldCallNow = immediate && !timeout
      const timeSinceLastCall = now - lastCallTime

      clearTimeout(timeout)
      timeout = setTimeout(later, wait)

      if (maxWait && timeSinceLastCall >= maxWait) {
        clearTimeout(maxTimeout)
        maxTimeout = null
        lastCallTime = now
        func.apply(this, args)
      } else if (maxWait && !maxTimeout) {
        maxTimeout = setTimeout(() => {
          lastCallTime = now
          clearTimeout(timeout)
          timeout = maxTimeout = null
          func.apply(this, args)
        }, maxWait - timeSinceLastCall)
      }

      if (shouldCallNow) {
        lastCallTime = now
        func.apply(this, args)
      }
    }
  }

  // 优化的节流函数
  throttle(func, limit, options = {}) {
    const { leading = true, trailing = true } = options
    let inThrottle = false
    let lastArgs = null
    let lastThis = null

    return function throttled(...args) {
      if (!inThrottle) {
        if (leading) {
          func.apply(this, args)
        }
        inThrottle = true
        setTimeout(() => {
          inThrottle = false
          if (trailing && lastArgs) {
            func.apply(lastThis, lastArgs)
            lastArgs = null
            lastThis = null
          }
        }, limit)
      } else if (trailing) {
        lastArgs = args
        lastThis = this
      }
    }
  }

  // 空闲时执行任务
  runWhenIdle(callback, options = {}) {
    const { timeout = 1000, fallback = true } = options

    if (this.isSupported.requestIdleCallback) {
      requestIdleCallback(callback, { timeout })
    } else if (fallback) {
      // 降级到setTimeout
      setTimeout(callback, 16) // 约一帧的时间
    }
  }

  // 懒加载图片
  lazyLoadImage(img, src, srcSet = null, sizes = null) {
    if (!img) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target

          // 设置图片源
          image.src = src
          if (srcSet) image.srcset = srcSet
          if (sizes) image.sizes = sizes

          // 添加加载状态
          image.classList.add('loading')

          image.onload = () => {
            image.classList.remove('loading')
            image.classList.add('loaded')
          }

          image.onerror = () => {
            image.classList.remove('loading')
            image.classList.add('error')
          }

          observer.unobserve(image)
        }
      })
    }, {
      rootMargin: '50px 0px'
    })

    observer.observe(img)
  }

  // 优化CSS类切换
  toggleClass(element, className, condition) {
    if (!element || !className) return

    const hasClass = element.classList.contains(className)

    if (condition && !hasClass) {
      element.classList.add(className)
    } else if (!condition && hasClass) {
      element.classList.remove(className)
    }
  }

  // 批量DOM操作
  batchDOM(callbacks) {
    return new Promise(resolve => {
      // 使用requestAnimationFrame进行批量DOM操作
      requestAnimationFrame(() => {
        callbacks.forEach(callback => {
          try {
            callback()
          } catch (error) {
            console.error('DOM batch operation failed:', error)
          }
        })
        resolve()
      })
    })
  }

  // 监控性能
  measurePerformance(name, callback) {
    if (!this.isSupported.performance) return callback()

    const start = performance.now()
    const result = callback()
    const end = performance.now()

    console.log(`${name} took ${end - start} milliseconds`)
    return result
  }

  // 清理资源
  cleanup() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect()
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect()
    }
    this.observers.clear()
  }
}

// 全局性能优化实例
export const mobileOptimizer = new MobilePerformanceOptimizer()

// 移动端专用工具函数
export const MobileUtils = {
  // 检测是否为移动设备
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  },

  // 检测是否为iOS设备
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  },

  // 检测是否为Android设备
  isAndroid() {
    return /Android/.test(navigator.userAgent)
  },

  // 获取设备像素比
  getPixelRatio() {
    return window.devicePixelRatio || 1
  },

  // 获取视口尺寸
  getViewportSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight
    }
  },

  // 检测是否支持触摸
  supportsTouch() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  },

  // 获取网络类型
  getNetworkType() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    return connection ? connection.effectiveType : 'unknown'
  },

  // 检测是否为慢速网络
  isSlowNetwork() {
    const type = this.getNetworkType()
    return type === 'slow-2g' || type === '2g' || type === '3g'
  },

  // 获取电池状态
  async getBatteryStatus() {
    if ('getBattery' in navigator) {
      try {
        const battery = await navigator.getBattery()
        return {
          level: battery.level,
          charging: battery.charging
        }
      } catch (error) {
        console.error('Battery API not available:', error)
      }
    }
    return null
  },

  // 检测设备方向
  getOrientation() {
    if (screen.orientation) {
      return screen.orientation.angle
    }
    return window.orientation || 0
  },

  // 锁定屏幕方向
  async lockOrientation(orientation) {
    if (screen.orientation && screen.orientation.lock) {
      try {
        await screen.orientation.lock(orientation)
        return true
      } catch (error) {
        console.error('Failed to lock orientation:', error)
      }
    }
    return false
  },

  // 解锁屏幕方向
  unlockOrientation() {
    if (screen.orientation && screen.orientation.unlock) {
      screen.orientation.unlock()
    }
  }
}

// 移动端存储优化
export class MobileStorage {
  static set(key, value, options = {}) {
    const {
      storage = 'localStorage',
      encrypt = false,
      ttl = null
    } = options

    try {
      const data = {
        value: encrypt ? btoa(JSON.stringify(value)) : value,
        timestamp: Date.now(),
        ttl: ttl ? Date.now() + ttl : null
      }

      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage
      storageObj.setItem(key, JSON.stringify(data))
      return true
    } catch (error) {
      console.error('Storage set failed:', error)
      return false
    }
  }

  static get(key, options = {}) {
    const { storage = 'localStorage', decrypt = false } = options

    try {
      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage
      const item = storageObj.getItem(key)

      if (!item) return null

      const data = JSON.parse(item)

      // 检查是否过期
      if (data.ttl && Date.now() > data.ttl) {
        storageObj.removeItem(key)
        return null
      }

      return decrypt ? JSON.parse(atob(data.value)) : data.value
    } catch (error) {
      console.error('Storage get failed:', error)
      return null
    }
  }

  static remove(key, options = {}) {
    const { storage = 'localStorage' } = options

    try {
      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage
      storageObj.removeItem(key)
      return true
    } catch (error) {
      console.error('Storage remove failed:', error)
      return false
    }
  }

  static clear(storage = 'localStorage') {
    try {
      const storageObj = storage === 'localStorage' ? localStorage : sessionStorage
      storageObj.clear()
      return true
    } catch (error) {
      console.error('Storage clear failed:', error)
      return false
    }
  }
}