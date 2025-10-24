'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardHeader, CardBody } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateKDJ } from '../../lib/calculations'
import { validateRSI, validateNumber } from '../../lib/validations'
import { TrendingUp, AlertCircle, Info, BarChart3, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// 防抖函数
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

export default function KDJRSIPage() {
  const [isMobile, setIsMobile] = useState(false)

  // 缓存键名
  const CACHE_KEYS = {
    J_VALUE: 'kdjrsi_jValue',
    RSI_VALUE: 'kdjrsi_rsiValue',
    VOLUME: 'kdjrsi_volume',
    CYCLE: 'kdjrsi_cycle'
  }

  // 表单状态
  const [jValue, setJValue] = useLocalStorage(CACHE_KEYS.J_VALUE, '')
  const [rsiValue, setRsiValue] = useLocalStorage(CACHE_KEYS.RSI_VALUE, '')
  const [volume, setVolume] = useLocalStorage(CACHE_KEYS.VOLUME, '')
  const [cycle, setCycle] = useLocalStorage(CACHE_KEYS.CYCLE, 'day')

  // 结果状态
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

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

  // 输入验证（带防抖）
  const validateInputs = useCallback(
    debounce(() => {
      const newErrors = {}

      const jValidation = validateNumber(jValue, -100, 100)
      if (!jValidation.isValid) {
        newErrors.jValue = jValidation.message
      }

      const rsiValidation = validateRSI(rsiValue)
      if (!rsiValidation.isValid) {
        newErrors.rsiValue = rsiValidation.message
      }

      const volumeValidation = validateNumber(volume, 0)
      if (!volumeValidation.isValid && volume) {
        newErrors.volume = volumeValidation.message
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }, 300),
    [jValue, rsiValue, volume]
  )

  // 分析按钮点击处理
  const handleAnalyze = async () => {
    if (!validateInputs()) return

    setIsLoading(true)

    // 模拟异步处理
    await new Promise(resolve => setTimeout(resolve, 500))

    try {
      const analysisResult = calculateKDJ(
        parseFloat(jValue),
        parseFloat(rsiValue),
        parseFloat(volume) || 0,
        cycle
      )

      setResult(analysisResult)
    } catch (error) {
      console.error('分析失败:', error)
      setResult({
        signal: 'error',
        advice: '分析失败，请检查输入参数',
        confidence: 0
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 清除结果
  const handleClear = () => {
    setResult(null)
    setErrors({})
  }

  // 获取信号样式
  const getSignalStyle = (signal) => {
    switch (signal) {
      case 'buy':
      case 'strong_buy':
        return 'badge-success'
      case 'sell':
      case 'strong_sell':
        return 'badge-error'
      case 'neutral':
        return 'badge-warning'
      default:
        return 'badge-secondary'
    }
  }

  // 获取信号文本
  const getSignalText = (signal) => {
    switch (signal) {
      case 'strong_buy': return '强烈买入'
      case 'buy': return '买入信号'
      case 'strong_sell': return '强烈卖出'
      case 'sell': return '卖出信号'
      case 'neutral': return '中性信号'
      default: return '无法判断'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* 移动端优化的容器 */}
      <div className="container mx-auto px-mobile-gutter py-mobile-section sm:px-6 sm:py-8">
        {/* 背景装饰 - 移动端优化 */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-success/5 rounded-full blur-3xl"></div>
        </div>

        {/* 移动端头部导航 */}
        <header className="flex items-center justify-between mb-6 sm:mb-8 animate-mobile-slide-up">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors px-2 py-2 -mx-2 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
            <span className="text-base sm:text-sm">返回</span>
          </Link>

          <div className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <h1 className="text-xl sm:text-lg font-bold text-gray-900 dark:text-white">KDJ分析</h1>
          </div>

          <div className="p-2">
            <ThemeToggle />
          </div>
        </header>

        <main className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          {/* 工具介绍 - 移动端优化 */}
          <section className="text-center animate-mobile-fade-in">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-mobile-card">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                基于KDJ和RSI指标的专业分析工具，助您把握市场脉搏
              </p>
            </div>
          </section>

          {/* 输入表单 - 移动端优化 */}
          <section className="animate-mobile-slide-up" style={{ animationDelay: '200ms' }}>
            <Card hover variant="elevated" className="shadow-mobile-elevated">
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <TrendingUp className="w-6 h-6 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">参数输入</h2>
                    <p className="text-sm text-muted-foreground">填写技术指标参数进行智能分析</p>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    label="KDJ - J值"
                    type="number"
                    placeholder="请输入J值 (-100 到 100)"
                    value={jValue}
                    onChange={(e) => setJValue(e.target.value)}
                    error={errors.jValue}
                    icon={<TrendingUp className="w-4 h-4" />}
                    step="0.01"
                    required
                  />

                  <Input
                    label="RSI 指标"
                    type="number"
                    placeholder="请输入RSI值 (0 到 100)"
                    value={rsiValue}
                    onChange={(e) => setRsiValue(e.target.value)}
                    error={errors.rsiValue}
                    icon={<BarChart3 className="w-4 h-4" />}
                    step="0.01"
                    required
                  />
                </div>

                <Input
                  label="成交量 (可选)"
                  type="number"
                  placeholder="请输入成交量"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  error={errors.volume}
                  icon={<TrendingUp className="w-4 h-4" />}
                  step="1"
                />

                <div>
                  <label className="block text-base sm:text-sm font-medium text-foreground mb-3 sm:mb-2">
                    分析周期
                  </label>
                  <select
                    value={cycle}
                    onChange={(e) => setCycle(e.target.value)}
                    className="h-14 sm:h-10 px-4 text-base sm:text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent touch-manipulation"
                  >
                    <option value="day">日线</option>
                    <option value="week">周线</option>
                    <option value="month">月线</option>
                    <option value="hour">小时线</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <Button
                    onClick={handleAnalyze}
                    disabled={isLoading || !jValue || !rsiValue}
                    loading={isLoading}
                    className="flex-1 h-touch-comfortable sm:h-auto"
                    fullWidth
                  >
                    <span className="text-base sm:text-sm font-medium">
                      {isLoading ? '分析中...' : '开始分析'}
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    disabled={isLoading}
                    className="h-touch-comfortable sm:h-auto"
                    fullWidth
                  >
                    <span className="text-base sm:text-sm font-medium">清除结果</span>
                  </Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* 分析结果 */}
          {result && (
            <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Card hover mobile={isMobile}>
                <CardHeader mobile={isMobile}>
                  <div className="flex items-center justify-between">
                    <h2 className="h3 mb-1">分析结果</h2>
                    <div className={`badge ${getSignalStyle(result.signal)}`}>
                      {getSignalText(result.signal)}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    置信度: {Math.round(result.confidence * 100)}%
                  </div>
                </CardHeader>

                <CardBody className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Info className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">投资建议</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {result.advice}
                        </p>
                      </div>
                    </div>
                  </div>

                  {result.signal === 'error' && (
                    <div className="flex items-center text-error bg-error/10 rounded-xl p-4">
                      <AlertCircle className="w-5 h-5 mr-3" />
                      <span className="text-sm">分析出现错误，请检查输入参数</span>
                    </div>
                  )}
                </CardBody>
              </Card>
            </section>
          )}

          {/* 使用说明 */}
          <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Card className="bg-muted/30">
              <CardHeader>
                <h3 className="h4 mb-2">使用说明</h3>
                <p className="text-muted-foreground">了解指标含义和使用技巧</p>
              </CardHeader>

              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">指标说明</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>J值：</strong>KDJ指标中的J值，反映价格变化的敏感度</p>
                      <p>• <strong>RSI：</strong>相对强弱指标，判断超买超卖状态</p>
                      <p>• <strong>成交量：</strong>市场活跃度的重要参考指标</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">使用建议</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• 建议结合其他技术指标和市场环境综合判断</p>
                      <p>• 不同周期指标可能产生不同的信号</p>
                      <p>• 本工具仅供参考，投资有风险，入市需谨慎</p>
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
