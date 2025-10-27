'use client'

import React, { useState, useRef, useCallback } from 'react'
import {
  ProKeyboardOptimization,
  ProSmartInput,
  ProKeyboardToolbar,
  ProOrientationHandler,
  ProOrientationLayout,
  ProOrientationLock,
  ProLandscapeOptimization,
  ProAdvancedGestures,
  ProButton,
  ProCard,
  hapticFeedback
} from '../../components/mobile'

export default function DemoMobileOptimization() {
  const [textValue, setTextValue] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [orientation, setOrientation] = useState('portrait')
  const [orientationLocked, setOrientationLocked] = useState(false)
  const [gestureLog, setGestureLog] = useState([])
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)

  // 添加手势日志
  const addGestureLog = useCallback((type, data) => {
    const timestamp = new Date().toLocaleTimeString()
    setGestureLog(prev => [{ timestamp, type, data }, ...prev].slice(0, 10))
    hapticFeedback('light')
  }, [])

  // 键盘工具栏操作
  const keyboardActions = [
    {
      label: '完成',
      variant: 'primary',
      onClick: () => {
        document.activeElement?.blur()
        setKeyboardVisible(false)
      }
    },
    {
      label: '清空',
      onClick: () => {
        setTextValue('')
        document.getElementById('smart-input')?.focus()
      }
    },
    {
      label: '撤销',
      onClick: () => {
        setTextValue(prev => prev.slice(0, -1))
        document.getElementById('smart-input')?.focus()
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProKeyboardOptimization
        enableScrollAdjustment={true}
        enableViewportFix={true}
        onKeyboardShow={(height) => {
          setKeyboardVisible(true)
          setKeyboardHeight(height)
          console.log('键盘显示，高度:', height)
        }}
        onKeyboardHide={() => {
          setKeyboardVisible(false)
          setKeyboardHeight(0)
          console.log('键盘隐藏')
        }}
      >
        <ProOrientationHandler
          enableOrientationLock={orientationLocked}
          preferredOrientation="portrait"
          onOrientationChange={(data) => {
            setOrientation(data.orientation)
            console.log('方向变化:', data)
          }}
        >
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              移动端专项优化演示
            </h1>

            {/* 方向控制 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                屏幕方向控制
              </h2>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  当前方向: <span className="font-medium">{orientation === 'landscape' ? '横屏' : '竖屏'}</span>
                </div>
                <ProOrientationLock
                  isLocked={orientationLocked}
                  onToggle={() => setOrientationLocked(!orientationLocked)}
                  preferredOrientation="portrait"
                />
              </div>
            </div>

            {/* 键盘优化 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                智能键盘优化
              </h2>
              <div className="space-y-4">
                <ProSmartInput
                  id="smart-input"
                  type="text"
                  placeholder="试试这个智能输入框..."
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                  onSubmit={(value) => {
                    console.log('提交:', value)
                    addGestureLog('submit', { value })
                  }}
                />

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div>键盘状态: {keyboardVisible ? '显示' : '隐藏'}</div>
                  {keyboardVisible && (
                    <div>键盘高度: {keyboardHeight.toFixed(0)}px</div>
                  )}
                </div>
              </div>
            </div>

            {/* 手势识别 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                高级手势识别
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 基础手势 */}
                <ProAdvancedGestures
                  enableTap={true}
                  enableDoubleTap={true}
                  enableLongPress={true}
                  enableSwipe={true}
                  onTap={() => addGestureLog('tap', {})}
                  onDoubleTap={() => addGestureLog('double-tap', {})}
                  onLongPress={() => addGestureLog('long-press', {})}
                  onSwipe={(data) => addGestureLog('swipe', data)}
                >
                  <ProCard variant="elevated" className="h-48 flex items-center justify-center cursor-pointer">
                    <div className="text-center">
                      <div className="text-2xl mb-2">👆</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        点击、双击、长按、滑动
                      </div>
                    </div>
                  </ProCard>
                </ProAdvancedGestures>

                {/* 缩放和旋转 */}
                <ProAdvancedGestures
                  enablePinch={true}
                  enableRotate={true}
                  onPinch={(data) => {
                    setScale(data.scale)
                    addGestureLog('pinch', data)
                  }}
                  onRotate={(data) => {
                    setRotation(prev => prev + data.deltaRotation)
                    addGestureLog('rotate', data)
                  }}
                >
                  <ProCard
                    variant="elevated"
                    className="h-48 flex items-center justify-center cursor-pointer"
                    style={{
                      transform: `scale(${scale}) rotate(${rotation}deg)`,
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">✌️</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        双指缩放和旋转
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        缩放: {scale.toFixed(2)}x, 旋转: {rotation.toFixed(0)}°
                      </div>
                    </div>
                  </ProCard>
                </ProAdvancedGestures>
              </div>
            </div>

            {/* 手势日志 */}
            {gestureLog.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  手势识别日志
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 max-h-48 overflow-y-auto">
                  {gestureLog.map((log, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                          {log.timestamp}
                        </span>
                        <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                          {log.type}
                        </span>
                      </div>
                      {Object.keys(log.data).length > 0 && (
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {JSON.stringify(log.data, null, 2)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 测试按钮 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                触觉反馈测试
              </h2>
              <div className="flex flex-wrap gap-3">
                <ProButton
                  variant="outline"
                  onClick={() => hapticFeedback('light')}
                >
                  轻微反馈
                </ProButton>
                <ProButton
                  variant="outline"
                  onClick={() => hapticFeedback('medium')}
                >
                  中等反馈
                </ProButton>
                <ProButton
                  variant="outline"
                  onClick={() => hapticFeedback('heavy')}
                >
                  强烈反馈
                </ProButton>
                <ProButton
                  variant="outline"
                  onClick={() => hapticFeedback('success')}
                >
                  成功反馈
                </ProButton>
                <ProButton
                  variant="outline"
                  onClick={() => hapticFeedback('warning')}
                >
                  警告反馈
                </ProButton>
                <ProButton
                  variant="outline"
                  onClick={() => hapticFeedback('error')}
                >
                  错误反馈
                </ProButton>
              </div>
            </div>

            {/* 横屏优化布局 */}
            <ProLandscapeOptimization enableOptimization={true}>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  横屏优化布局
                </h2>
                <ProCard variant="surface" className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    在横屏模式下，这个布局会自动调整为侧边栏 + 主内容的布局形式，
                    充分利用横向空间提供更好的用户体验。
                  </p>
                </ProCard>
              </div>
            </ProLandscapeOptimization>
          </div>

          {/* 键盘工具栏 */}
          <ProKeyboardToolbar
            isVisible={keyboardVisible}
            actions={keyboardActions}
            position="top"
          />
        </ProOrientationHandler>
      </ProKeyboardOptimization>
    </div>
  )
}