'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateSoyMilkTime } from '../../lib/calculations'
import { validateTime, validateNumber } from '../../lib/validations'
import {
  Coffee,
  Clock,
  AlarmClock,
  Calendar,
  Info,
  AlertCircle,
  CheckCircle,
  Play,
  Settings,
  Timer,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function SoyMilkPage() {
  const [isMobile, setIsMobile] = useState(false)

  // 缓存键名
  const CACHE_KEYS = {
    TARGET_TIME: 'soymilk_targetTime',
    MAKING_TIME: 'soymilk_makingTime',
    PRESET_TIMES: 'soymilk_presetTimes',
    HISTORY: 'soymilk_history'
  }

  // 预设制作时长
  const presetMakingTimes = [
    { label: '快速模式', time: 15, description: '适合少量豆浆' },
    { label: '标准模式', time: 25, description: '常规制作时长' },
    { label: '浓浆模式', time: 35, description: '口感更浓郁' },
    { label: '米糊模式', time: 20, description: '制作米糊' }
  ]

  // 预设饮用时间
  const presetDrinkTimes = [
    { label: '早餐时间', time: '07:30', description: '早上7:30' },
    { label: '早茶时间', time: '10:00', description: '上午10:00' },
    { label: '午餐时间', time: '12:30', description: '中午12:30' },
    { label: '下午茶', time: '15:30', description: '下午3:30' },
    { label: '晚餐时间', time: '18:30', description: '晚上6:30' },
    { label: '夜宵时间', time: '21:00', description: '晚上9:00' }
  ]

  // 表单状态
  const [targetTime, setTargetTime] = useLocalStorage(CACHE_KEYS.TARGET_TIME, '')
  const [makingTime, setMakingTime] = useLocalStorage(CACHE_KEYS.MAKING_TIME, '25')
  const [history, setHistory] = useLocalStorage(CACHE_KEYS.HISTORY, [])

  // UI状态
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})
  const [showPresets, setShowPresets] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [countdown, setCountdown] = useState(null)

  // 更新当前时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 倒计时更新
  useEffect(() => {
    if (result && result.timeRemaining > 0) {
      const timer = setInterval(() => {
        setCountdown(Math.max(0, result.timeRemaining - 1000))
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [result])

  // 页面初始化
  useEffect(() => {
    // 检测是否为移动设备
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    setTimeout(() => {
      document.body.classList.remove('loading')
    }, 300)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      // 将时间字符串转换为完整的日期时间
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

      // 添加到历史记录
      const historyEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        targetTime: calculationResult.targetTime,
        appointmentTime: calculationResult.appointmentTime,
        makingTime: calculationResult.makingTime
      }

      setHistory(prev => [historyEntry, ...prev.slice(0, 4)]) // 保留最近5条
      setResult(calculationResult)
      setCountdown(calculationResult.timeRemaining)

    } catch (error) {
      console.error('计算失败:', error)
      setResult({
        error: true,
        message: '计算失败，请检查输入参数'
      })
    }
  }

  // 设置预设饮用时间
  const setPresetDrinkTime = (time) => {
    setTargetTime(time)
    setShowPresets(false)
  }

  // 设置预设制作时长
  const setPresetMakingTime = (time) => {
    setMakingTime(time.toString())
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
      return `${hours}小时${minutes}分${seconds}秒`
    } else if (minutes > 0) {
      return `${minutes}分${seconds}秒`
    } else {
      return `${seconds}秒`
    }
  }

  // 格式化时间显示
  const formatTime = (date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date)
  }

  // 检查是否需要立即开始
  const needsImmediateStart = result && result.appointmentTime <= new Date()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* 背景装饰 */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* 头部导航 */}
        <header className="flex items-center justify-between mb-8 animate-slide-up">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>

          <div className="flex items-center space-x-2">
            <Coffee className="w-6 h-6 text-orange-600 animate-pulse" />
            <h1 className="h2">豆浆助手</h1>
          </div>

          <ThemeToggle />
        </header>

        <main className="max-w-2xl mx-auto space-y-8">
          {/* 工具介绍 */}
          <section className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              智能预约制作，确保在最佳时间享用热腾腾的豆浆
            </p>
          </section>

          {/* 当前时间显示 */}
          <section className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card hover className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-90/20 dark:to-yellow-900/20 border-orange-200 dark:border-orange-800" mobile={isMobile}>
              <CardBody mobile={isMobile}>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-3">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="font-medium text-orange-800 dark:text-orange-20">
                      当前时间
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-orange-900 dark:text-orange-100 mb-1">
                    {formatTime(currentTime)}
                  </div>
                  <div className="text-sm text-orange-700 dark:text-orange-30">
                    系统实时时间
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* 输入表单 */}
          <section className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Card hover mobile={isMobile}>
              <CardHeader mobile={isMobile}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-10 rounded-xl flex items-center justify-center mr-4">
                    <Coffee className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="h3 mb-1">预约设置</h2>
                    <p className="text-muted-foreground">设置目标饮用时间和制作参数</p>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="space-y-6" mobile={isMobile}>
                {/* 目标饮用时间 */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    目标饮用时间
                  </label>
                  <div className="relative">
                    <Input
                      type="time"
                      value={targetTime}
                      onChange={(e) => setTargetTime(e.target.value)}
                      error={errors.targetTime}
                      icon={<AlarmClock className="w-4 h-4" />}
                      required
                      mobile={isMobile}
                    />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowPresets(!showPresets)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        mobile={isMobile}
                      >
                        <Timer className="w-4 h-4" />
                      </Button>
                  </div>

                  {/* 预设时间下拉 */}
                  {showPresets && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 max-h-64 overflow-y-auto">
                      {presetDrinkTimes.map((preset, index) => (
                        <button
                          key={index}
                          onClick={() => setPresetDrinkTime(preset.time)}
                          className="w-full text-left px-4 py-3 hover:bg-muted transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 first:rounded-t-xl last:rounded-b-xl"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-foreground">
                                {preset.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {preset.description}
                              </div>
                            </div>
                            <div className="text-lg font-bold text-orange-600">
                              {preset.time}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 制作时长 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    制作时长 (分钟)
                  </label>
                  <Input
                    type="number"
                    placeholder="请输入制作时长"
                    value={makingTime}
                    onChange={(e) => setMakingTime(e.target.value)}
                    error={errors.makingTime}
                    icon={<Clock className="w-4 h-4" />}
                    min="1"
                    max="120"
                    step="1"
                    required
                    mobile={isMobile}
                  />

                  {/* 预设制作时长 */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {presetMakingTimes.map((preset, index) => (
                      <Button
                        key={index}
                        variant={parseInt(makingTime) === preset.time ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setPresetMakingTime(preset.time)}
                        className="text-xs py-3"
                        mobile={isMobile}
                      >
                        {preset.label}
                        <span className="ml-1 opacity-75">({preset.time}分)</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleCalculate}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
                    size="lg"
                    mobile={isMobile}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    计算预约时间
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    size="lg"
                    mobile={isMobile}
                  >
                    清除结果
                  </Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* 结果展示 */}
          {result && !result.error && (
            <>
              {/* 预约结果 */}
              <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <Card hover mobile={isMobile}>
                  <CardHeader mobile={isMobile}>
                    <div className="text-center">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success mb-4">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-bold">预约时间已计算</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody className="space-y-6" mobile={isMobile}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* 预约时间 */}
                      <div className="bg-muted/50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold flex items-center">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                              <AlarmClock className="w-4 h-4 text-orange-600" />
                            </div>
                            预约开始时间
                          </h4>
                          {needsImmediateStart && (
                            <span className="badge badge-error">
                              需立即开始
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-bold mb-2">
                          {formatTime(result.appointmentTime)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          豆浆机开始制作的时间
                        </div>
                      </div>

                      {/* 目标饮用时间 */}
                      <div className="bg-muted/50 rounded-xl p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <Coffee className="w-4 h-4 text-orange-600" />
                          </div>
                          <h4 className="font-semibold">目标饮用时间</h4>
                        </div>
                        <div className="text-2xl font-bold mb-2">
                          {formatTime(result.targetTime)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          期望喝到热豆浆的时间
                        </div>
                      </div>
                    </div>

                    {/* 倒计时 */}
                    {countdown !== null && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                              <Timer className="w-4 h-4 text-blue-600" />
                            </div>
                            {needsImmediateStart ? '已过期' : '距离预约开始'}
                          </h4>
                        </div>
                        <div className={`text-3xl font-bold mb-2 ${
                          needsImmediateStart ? 'text-error' : 'text-blue-600'
                        }`}>
                          {needsImmediateStart ? '请立即开始' : formatCountdown(countdown)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {needsImmediateStart
                            ? '预约时间已过，建议立即开始制作'
                            : '剩余时间到预约开始'
                          }
                        </div>
                      </div>
                    )}

                    {/* 制作信息 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/50 rounded-xl p-6 text-center">
                        <div className="text-xs text-muted-foreground mb-2">制作时长</div>
                        <div className="text-2xl font-bold">
                          {result.makingTime} 分钟
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-6 text-center">
                        <div className="text-xs text-muted-foreground mb-2">完成等待</div>
                        <div className="text-2xl font-bold">
                          约 {Math.ceil(result.makingTime * 0.2)} 分钟
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          冷却到适宜温度
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </section>

              {/* 温馨提示 */}
              <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-80" mobile={isMobile}>
                  <CardBody mobile={isMobile}>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Info className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                          温馨提示
                        </h4>
                        <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                          <p>• 请提前准备好豆子和水</p>
                          <p>• 建议在预约开始前5分钟内准备好所有材料</p>
                          <p>• 制作完成后豆浆会很热，请小心烫伤</p>
                          <p>• 不同豆浆机型号可能有时间差异，请根据实际情况调整</p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </section>
            </>
          )}

          {/* 错误提示 */}
          {result && result.error && (
            <section className="animate-fade-in">
              <Card className="border-error bg-error/10" mobile={isMobile}>
                <CardBody mobile={isMobile}>
                  <div className="flex items-center text-error">
                    <AlertCircle className="w-5 h-5 mr-3" />
                    <div>
                      <h4 className="font-semibold">计算失败</h4>
                      <p className="text-sm">{result.message}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>
          )}

          {/* 历史记录 */}
          {history.length > 0 && (
            <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Card hover mobile={isMobile}>
                <CardHeader mobile={isMobile}>
                  <h3 className="h4 mb-2 flex items-center">
                    <div className="w-8 h-8 bg-orange-10 rounded-lg flex items-center justify-center mr-3">
                      <Calendar className="w-4 h-4 text-orange-600" />
                    </div>
                    最近预约记录
                  </h3>
                  <p className="text-muted-foreground">查看最近的历史预约记录</p>
                </CardHeader>

                <CardBody mobile={isMobile}>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {history.map((entry) => (
                      <div
                        key={entry.id}
                        className="flex items-center justify-between p-4 bg-muted/50 rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                            <Coffee className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {formatTime(new Date(entry.appointmentTime))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              制作 {entry.makingTime} 分钟
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(entry.timestamp).toLocaleDateString('zh-CN')}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </section>
          )}

          {/* 使用说明 */}
          <section className="animate-fade-in" style={{ animationDelay: '700ms' }}>
            <Card className="bg-muted/30" mobile={isMobile}>
              <CardHeader mobile={isMobile}>
                <h3 className="h4 mb-2 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Info className="w-4 h-4 text-primary" />
                  </div>
                  使用说明
                </h3>
                <p className="text-muted-foreground">了解如何使用豆浆助手</p>
              </CardHeader>

              <CardBody mobile={isMobile}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">功能说明</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>目标时间：</strong>您希望喝到豆浆的时间</p>
                      <p>• <strong>制作时长：</strong>根据豆浆机型号和食材量调整</p>
                      <p>• <strong>预约时间：</strong>系统自动计算，确保准时完成</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">使用技巧</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>倒计时提醒：</strong>实时显示距离预约开始的剩余时间</p>
                      <p>• <strong>历史记录：</strong>保存最近的预约记录，方便查看</p>
                      <p>• <strong>预设模式：</strong>快速选择常用的制作模式和饮用时间</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}
