'use client'

import { useEffect, useState } from 'react'

export function ProgressBar({ 
  value = 0, 
  min = -5, 
  max = 5, 
  showMarker = true,
  markerPosition = 0,
  markerLabel = '平衡点',
  animated = true,
  height = 'h-3',
  className = ''
}) {
  const [animatedValue, setAnimatedValue] = useState(animated ? min : value)

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setAnimatedValue(value)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [value, animated])

  const currentValue = animated ? animatedValue : value
  
  // 计算百分比位置
  const percentage = ((currentValue - min) / (max - min)) * 100
  const markerPercentage = ((markerPosition - min) / (max - min)) * 100
  
  // 确定颜色
  const getColor = () => {
    if (currentValue > markerPosition) return 'bg-gradient-to-r from-green-400 to-green-600'
    if (currentValue < markerPosition) return 'bg-gradient-to-r from-red-400 to-red-600'
    return 'bg-gradient-to-r from-gray-400 to-gray-500'
  }

  return (
    <div className={`relative ${className}`}>
      {/* 进度条背景 */}
      <div className={`w-full ${height} bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden`}>
        {/* 进度条填充 */}
        <div
          className={`${height} ${getColor()} transition-all duration-700 ease-out rounded-full`}
          style={{ width: `${Math.max(0, Math.min(100, percentage))}%` }}
        />
      </div>

      {/* 平衡点标记 */}
      {showMarker && (
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gray-800 dark:bg-gray-200"
          style={{ left: `${markerPercentage}%` }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
            {markerLabel}
          </div>
        </div>
      )}

      {/* 数值标签 */}
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span>{min}%</span>
        <span className={`font-semibold ${
          currentValue > markerPosition ? 'text-green-600 dark:text-green-400' :
          currentValue < markerPosition ? 'text-red-600 dark:text-red-400' :
          'text-gray-600 dark:text-gray-400'
        }`}>
          {currentValue.toFixed(2)}%
        </span>
        <span>{max}%</span>
      </div>
    </div>
  )
}

