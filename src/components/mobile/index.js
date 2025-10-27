// 专业级移动端组件库 - Apple iOS + Ant Design 混合风格

// 核心组件
export { default as ProCard } from './ProCard'
export { default as ProButton } from './ProButton'
export { default as ProInput } from './ProInput'
export { default as ProSkeleton } from './ProSkeleton'
export { default as ProContainer } from './ProContainer'
export { default as ProDivider } from './ProDivider'
export { default as ProBadge } from './ProBadge'
export { default as ProTouchable } from './ProTouchable'
export { default as ProSwipeable } from './ProSwipeable'

// 现有现代化组件（保持向后兼容）
export { default as ModernToolCard } from './ModernToolCard'
export { default as ModernHeader } from './ModernHeader'
export { default as ModernInput } from './ModernInput'
export { default as ModernButton } from './ModernButton'
export { default as SwipeContainer } from './SwipeContainer'

// 专业级手势和触摸系统
export { default as useAdvancedGesturesOld, hapticFeedback, useAppleRipple } from '../hooks/useAdvancedGestures'

// 高性能动画系统
export { default as usePerformanceAnimation, useIntersectionObserver, useLazyLoad } from '../hooks/usePerformanceAnimation'

// 动画组件
export { default as ProAnimated, withProAnimated } from './ProAnimated'

// 加载组件
export { default as ProLoader } from './ProLoader'
export { default as ProProgressiveLoader } from './ProProgressiveLoader'

// 响应式布局组件
export { default as ProAdaptiveContainer } from './ProAdaptiveContainer'
export { default as ProResponsiveGrid, withResponsiveColumns, useBreakpoints } from './ProResponsiveGrid'

// 信息架构和用户引导组件
export { default as ProUserGuide, ProQuickStart, useUserGuide } from './ProUserGuide'
export { default as ProFeatureDiscovery, ProContextualTips, useFeatureDiscovery } from './ProFeatureDiscovery'
export { default as ProSearchInterface } from './ProSearchInterface'

// 移动端专项优化组件
export {
  default as ProKeyboardOptimization,
  ProSmartInput,
  ProKeyboardToolbar,
  ProKeyboardAwareLayout
} from './ProKeyboardOptimization'
export {
  default as ProOrientationHandler,
  ProOrientationLayout,
  ProOrientationLock,
  ProLandscapeOptimization
} from './ProOrientationHandler'
export {
  default as ProAdvancedGestures,
  useAdvancedGestures
} from './ProAdvancedGestures'

// 基础 Hooks
export { default as useGestures } from '../hooks/useGestures'
export { default as useLocalStorage } from '../hooks/useLocalStorage'