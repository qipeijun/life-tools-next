'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateSoyMilkTime } from '../../lib/calculations'
import { validateTime, validateNumber } from '../../lib/validations'
import { QuickActions } from '../../components/ui/QuickActions'
import { SegmentedControl } from '../../components/ui/SegmentedControl'
import { ResultCard } from '../../components/ui/ResultCard'
import {
  Coffee,
  Clock,
  ArrowLeft,
  Play,
} from 'lucide-react'
import Link from 'next/link'

export default function SoyMilkPage() {
  // 缓存键名
  const CACHE_KEYS = {
    TARGET_TIME: 'soymilk_targetTime',
    MAKING_TIME: 'soymilk_makingTime',
  }

  // 表单状态
  const [targetTime, setTargetTime] = useLocalStorage(CACHE_KEYS.TARGET_TIME, '')
  const [makingTime, setMakingTime] = useLocalStorage(CACHE_KEYS.MAKING_TIME, '25')

  // UI状态
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})
  const [currentTime, setCurrentTime] = useState(null)
  const [countdown, setCountdown] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const [selectedTimeScenario, setSelectedTimeScenario] = useState(null)
  const [selectedModeScenario, setSelectedModeScenario] = useState('standard')

  // 客户端检测
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 更新当前时间
  useEffect(() => {
    if (!isClient) return
    
    setCurrentTime(new Date())
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [isClient])

  // 倒计时更新
  useEffect(() => {
    if (result && result.timeRemaining > 0) {
      setCountdown(result.timeRemaining)
      const timer = setInterval(() => {
        setCountdown((prev) => Math.max(0, prev - 1000))
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [result])

  // 快速时间场景
  const timeScenarios = [
    { label: '早餐', value: '07:30' },
    { label: '午餐', value: '12:30' },
    { label: '晚餐', value: '18:30' },
  ]

  // 制作模式
  const modeOptions = [
    { label: '快速', value: 'fast' },
    { label: '标准', value: 'standard' },
    { label: '浓浆', value: 'thick' },
  ]

  // 处理快速时间选择
  const handleTimeScenarioSelect = (time) => {
    setSelectedTimeScenario(time)
    setTargetTime(time)
  }

  // 处理模式选择
  const handleModeSelect = (mode) => {
    setSelectedModeScenario(mode)
    const modeTime = {
      fast: '15',
      standard: '25',
      thick: '35',
    }
    setMakingTime(modeTime[mode])
  }

  // 输入验证
  const validateInputs = () => {
    const newErrors = {}

    if (!targetTime) {
      newErrors.targetTime = '请选择目标饮用时间'
    } else {
      const timeValidation = validateTime(targetTime)
      if (!timeValidation.isValid) {
        newErrors.targetTime = timeValidation.message
      }
    }

    const makingValidation = validateNumber(makingTime, 1, 120)
    if (!makingValidation.isValid) {
      newErrors.makingTime = '制作时长必须在1-120分钟之间'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 计算预约时间
  const handleCalculate = () => {
    if (!validateInputs()) return

    try {
      const today = new Date()
      const [hours, minutes] = targetTime.split(':')
      const targetDateTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        parseInt(hours),
        parseInt(minutes)
      )

      // 如果目标时间已过，设置为明天
      if (targetDateTime <= new Date()) {
        targetDateTime.setDate(targetDateTime.getDate() + 1)
      }

      const calculationResult = calculateSoyMilkTime(
        targetDateTime.toISOString(),
        parseInt(makingTime)
      )

      setResult(calculationResult)
      setCountdown(calculationResult.timeRemaining)
    } catch (error) {
      console.error('计算失败:', error)
      setResult({
        error: true,
        message: '计算失败，请检查输入参数',
      })
    }
  }

  // 清除结果
  const handleClear = () => {
    setResult(null)
    setCountdown(null)
    setErrors({})
  }

  // 格式化倒计时
  const formatCountdown = (milliseconds) => {
    if (!milliseconds || milliseconds <= 0) return '已过期'

    const hours = Math.floor(milliseconds / (1000 * 60 * 60))
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000)

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }
  }

  // 格式化时间显示
  const formatTime = (date) => {
    if (!date) return '--:--'
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  // 检查是否需要立即开始
  const needsImmediateStart = result && result.appointmentTime <= new Date()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-4 sm:py-6">
        {/* 导航栏 */}
        <header className="flex items-center justify-between mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-500 font-medium active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </Link>
          <ThemeToggle />
        </header>

        {/* Large Title */}
        <h1 className="ios-large-title mb-8">☕️ 豆浆助手</h1>

        {/* 主要内容 */}
        <div className="ios-spacing-section">
          {/* 当前时间 */}
          <section>
            <div className="ios-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border-amber-200 dark:border-amber-800/30">
              <div className="text-center">
                <div className="text-sm text-amber-700 dark:text-amber-400 mb-2">
                  当前时间
                </div>
                <div
                  className="text-4xl font-bold text-amber-900 dark:text-amber-100 tabular-nums"
                  suppressHydrationWarning
                >
                  {formatTime(currentTime)}
                </div>
              </div>
            </div>
          </section>

          {/* 快速选择时间 */}
          <section>
            <h2 className="ios-section-header">快速选择</h2>
            <QuickActions
              options={timeScenarios}
              selected={selectedTimeScenario}
              onChange={handleTimeScenarioSelect}
              columns={3}
            />
          </section>

          {/* 饮用时间 */}
          <section>
            <h2 className="ios-section-header">饮用时间</h2>
            <div className="ios-card">
              <label className="ios-input-label">目标时间</label>
              <input
                type="time"
                value={targetTime}
                onChange={(e) => {
                  setTargetTime(e.target.value)
                  setSelectedTimeScenario(null)
                }}
                className="ios-input w-full text-center text-2xl"
              />
              {errors.targetTime && (
                <p className="text-xs text-red-500 mt-2">{errors.targetTime}</p>
              )}
            </div>
          </section>

          {/* 制作时长 */}
          <section>
            <h2 className="ios-section-header">制作时长</h2>
            <div className="ios-card ios-spacing-group">
              <SegmentedControl
                options={modeOptions}
                selected={selectedModeScenario}
                onChange={handleModeSelect}
              />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {makingTime} 分钟
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {selectedModeScenario === 'fast' && '适合少量豆浆'}
                  {selectedModeScenario === 'standard' && '常规制作时长'}
                  {selectedModeScenario === 'thick' && '口感更浓郁'}
                </div>
              </div>
            </div>
          </section>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button
              onClick={handleCalculate}
              disabled={!targetTime}
              className="ios-button-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                计算预约时间
              </span>
            </button>
            {result && (
              <button onClick={handleClear} className="ios-button-secondary">
                清除
              </button>
            )}
          </div>

          {/* 结果展示 */}
          {result && !result.error && (
            <section>
              <h2 className="ios-section-header">预约时间</h2>
              
              {/* 预约时间卡片 */}
              <div className="ios-card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800/30 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                      {needsImmediateStart ? '⚠️ 需立即开始' : '预约开始时间'}
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-blue-900 dark:text-blue-100 mb-2 tabular-nums">
                    {formatTime(result.appointmentTime)}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {needsImmediateStart
                      ? '预约时间已过，建议立即开始制作'
                      : '豆浆机开始制作的时间'}
                  </div>
                </div>
              </div>

              {/* 倒计时 */}
              {!needsImmediateStart && countdown !== null && (
                <div className="ios-card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-green-200 dark:border-green-800/30">
                  <div className="text-center">
                    <div className="text-sm text-green-700 dark:text-green-400 mb-2">
                      距离预约开始还有
                    </div>
                    <div
                      className="text-4xl font-bold text-green-900 dark:text-green-100 tabular-nums"
                      suppressHydrationWarning
                    >
                      {formatCountdown(countdown)}
                    </div>
                  </div>
                </div>
              )}

              {/* 详细信息 */}
              <ResultCard
                type="neutral"
                title="预约详情"
                value={`${makingTime} 分钟`}
                subtitle="制作时长"
                icon={<Coffee />}
                details={[
                  { label: '饮用时间', value: formatTime(result.targetTime) },
                  { label: '预计完成', value: `约 ${Math.ceil(parseInt(makingTime) * 0.2)} 分钟后可饮用` },
                ]}
              />
            </section>
          )}

          {/* 错误提示 */}
          {result && result.error && (
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-2xl p-4">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {result.message}
              </p>
            </div>
          )}

          {/* 使用提示 */}
          <section>
            <h2 className="ios-section-header">使用提示</h2>
            <div className="ios-card">
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p>• <strong>快速选择：</strong>一键选择常用的饮用时间</p>
                <p>• <strong>制作模式：</strong>根据豆浆机型号选择合适的时长</p>
                <p>• <strong>倒计时：</strong>实时显示距离预约开始的剩余时间</p>
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-700">
                  💡 建议提前5分钟准备好材料
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
