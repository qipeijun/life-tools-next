'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardHeader, CardBody } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateKDJPro } from '../../lib/calculations'
import { validateRSI, validateNumber } from '../../lib/validations'
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Settings,
  Info,
  AlertCircle,
  Zap,
  Activity,
  ArrowLeft,
  LineChart
} from 'lucide-react'
import Link from 'next/link'

// 防抖函数
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// 生成模拟KDJ数据
const generateKDJData = (length) => {
  const data = []
  let k = 50, d = 50, j = 50
  
  for (let i = 0; i < length; i++) {
    // 模拟KDJ指标的变化
    k = Math.max(0, Math.min(100, k + (Math.random() - 0.5) * 10))
    d = Math.max(0, Math.min(100, d + (Math.random() - 0.5) * 8))
    j = Math.max(-100, Math.min(100, j + (Math.random() - 0.5) * 15))
    
    data.push({
      x: i,
      y: j,
      k: k,
      d: d,
      j: j
    })
  }
  
  return data
}

// 生成模拟RSI数据
const generateRSIData = (length, period = 14) => {
  const data = []
  let rsi = 50
  
  for (let i = 0; i < length; i++) {
    // 模拟RSI指标的变化
    rsi = Math.max(0, Math.min(100, rsi + (Math.random() - 0.5) * 12))
    
    data.push({
      x: i,
      y: rsi,
      rsi: rsi
    })
  }
  
  return data
}

export default function KDJRSIProPage() {
  // 缓存键名
  const CACHE_KEYS = {
    K_VALUE: 'kdjpro_kValue',
    D_VALUE: 'kdjpro_dValue',
    J_VALUE: 'kdjpro_jValue',
    RSI_VALUE: 'kdjpro_rsiValue',
    RSI_PERIOD: 'kdjpro_rsiPeriod',
    VOLUME: 'kdjpro_volume',
    CYCLE: 'kdjpro_cycle',
    ADVANCED: 'kdjpro_advanced'
  }

  // 预设周期
  const presetCycles = [
    { label: '分时', value: 'minute', periods: [5, 15, 30, 60] },
    { label: '日线', value: 'day', periods: [5, 10, 20, 30] },
    { label: '周线', value: 'week', periods: [5, 10, 20] },
    { label: '月线', value: 'month', periods: [3, 6, 12] }
  ]

  // 表单状态
  const [kValue, setKValue] = useLocalStorage(CACHE_KEYS.K_VALUE, '')
  const [dValue, setDValue] = useLocalStorage(CACHE_KEYS.D_VALUE, '')
  const [jValue, setJValue] = useLocalStorage(CACHE_KEYS.J_VALUE, '')
  const [rsiValue, setRsiValue] = useLocalStorage(CACHE_KEYS.RSI_VALUE, '')
  const [rsiPeriod, setRsiPeriod] = useLocalStorage(CACHE_KEYS.RSI_PERIOD, '14')
  const [volume, setVolume] = useLocalStorage(CACHE_KEYS.VOLUME, '')
  const [cycle, setCycle] = useLocalStorage(CACHE_KEYS.CYCLE, 'day')
  const [showAdvanced, setShowAdvanced] = useLocalStorage(CACHE_KEYS.ADVANCED, false)

  // 结果状态
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [showChart, setShowChart] = useState(false)
  const [chartData, setChartData] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

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

      const kValidation = validateNumber(kValue, 0, 100)
      if (!kValidation.isValid && kValue) {
        newErrors.kValue = kValidation.message
      }

      const dValidation = validateNumber(dValue, 0, 100)
      if (!dValidation.isValid && dValue) {
        newErrors.dValue = dValidation.message
      }

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
    [kValue, dValue, jValue, rsiValue, volume]
  )

  // 分析按钮点击处理
  const handleAnalyze = async () => {
    if (!validateInputs()) return

    setIsLoading(true)

    // 模拟异步处理
    await new Promise(resolve => setTimeout(resolve, 800))

    try {
      const analysisResult = calculateKDJPro(
        parseFloat(kValue) || undefined,
        parseFloat(dValue) || undefined,
        parseFloat(jValue),
        parseFloat(rsiValue),
        parseInt(rsiPeriod),
        parseFloat(volume) || 0,
        cycle
      )

      setResult(analysisResult)

      // 生成图表数据
      const kdjData = generateKDJData(20)
      const rsiData = generateRSIData(20, parseInt(rsiPeriod))

      setChartData({
        kdj: kdjData,
        rsi: rsiData,
        current: {
          k: parseFloat(kValue) || kdjData[kdjData.length - 1].k,
          d: parseFloat(dValue) || kdjData[kdjData.length - 1].d,
          j: parseFloat(jValue),
          rsi: parseFloat(rsiValue)
        }
      })

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
    setChartData(null)
    setShowChart(false)
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

  // 简单的图表组件
  const SimpleChart = ({ data, type, current }) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null

    const maxValue = Math.max(...data.map(d => d.y))
    const minValue = Math.min(...data.map(d => d.y))
    const range = maxValue - minValue || 1

    return (
      <div className="h-32 bg-muted/50 rounded-xl p-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 300 100">
            {data.map((point, index) => {
              const x = (index / (data.length - 1)) * 280 + 10
              const y = 90 - ((point.y - minValue) / range) * 70

              if (index === 0) {
                return (
                  <path
                    key={index}
                    d={`M ${x} ${y}`}
                    stroke={type === 'rsi' ? '#3B82F6' : '#10B981'}
                    strokeWidth="2"
                    fill="none"
                  />
                )
              }

              const prevPoint = data[index - 1]
              const prevX = ((index - 1) / (data.length - 1)) * 280 + 10
              const prevY = 90 - ((prevPoint.y - minValue) / range) * 70

              return (
                <g key={index}>
                  <path
                    d={`M ${prevX} ${prevY} L ${x} ${y}`}
                    stroke={type === 'rsi' ? '#3B82F6' : '#10B981'}
                    strokeWidth="2"
                    fill="none"
                  />
                  {index === data.length - 1 && current && (
                    <circle
                      cx={x}
                      cy={y}
                      r="4"
                      fill={type === 'rsi' ? '#3B82F6' : '#10B981'}
                      className="animate-pulse"
                    />
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        <div className="absolute top-2 right-2 text-xs text-muted-foreground">
          {type === 'rsi' ? 'RSI' : 'KDJ'}
        </div>

        <div className="absolute bottom-2 left-2 text-xs text-muted-foreground">
          {current ? `当前: ${current.toFixed(2)}` : ''}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* 背景装饰 */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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

          <div className="flex items-center space-x-3">
            <div className="text-center">
              <div className="flex items-center space-x-2">
                <LineChart className="w-6 h-6 text-purple-600 animate-pulse" />
                <h1 className="h2">KDJ + RSI Pro</h1>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-xs mt-1">
                <Zap className="w-3 h-3 mr-1" />
                增强版
              </div>
            </div>
          </div>

          <ThemeToggle />
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          {/* 工具介绍 */}
          <section className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              专业级技术指标分析工具，支持KDJ完整指标、图表显示和专业级分析算法
            </p>
          </section>

          {/* 输入表单 */}
          <section className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card hover>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <LineChart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="h3 mb-1">专业参数设置</h2>
                      <p className="text-muted-foreground">完整的技术指标参数配置</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {showAdvanced ? '简化' : '高级'}
                  </Button>
                </div>
              </CardHeader>

              <CardBody className="space-y-6">
                {/* KDJ指标 */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    KDJ 指标参数
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="K值"
                      type="number"
                      placeholder="0-100"
                      value={kValue}
                      onChange={(e) => setKValue(e.target.value)}
                      error={errors.kValue}
                      step="0.01"
                      icon={<TrendingUp className="w-4 h-4" />}
                    />
                    <Input
                      label="D值"
                      type="number"
                      placeholder="0-100"
                      value={dValue}
                      onChange={(e) => setDValue(e.target.value)}
                      error={errors.dValue}
                      step="0.01"
                      icon={<BarChart3 className="w-4 h-4" />}
                    />
                    <Input
                      label="J值"
                      type="number"
                      placeholder="-100 到 100"
                      value={jValue}
                      onChange={(e) => setJValue(e.target.value)}
                      error={errors.jValue}
                      step="0.01"
                      icon={<Activity className="w-4 h-4" />}
                      required
                    />
                  </div>
                </div>

                {/* RSI指标 */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                    </div>
                    RSI 指标参数
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="RSI 指标值"
                      type="number"
                      placeholder="0-100"
                      value={rsiValue}
                      onChange={(e) => setRsiValue(e.target.value)}
                      error={errors.rsiValue}
                      icon={<BarChart3 className="w-4 h-4" />}
                      step="0.01"
                      required
                    />
                    <Input
                      label="RSI 计算周期"
                      type="number"
                      placeholder="建议14"
                      value={rsiPeriod}
                      onChange={(e) => setRsiPeriod(e.target.value)}
                      error={errors.rsiPeriod}
                      step="1"
                      min="1"
                      max="50"
                    />
                  </div>
                </div>

                {/* 高级参数 */}
                {showAdvanced && (
                  <div className="space-y-6 border-t border-border pt-6">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <Activity className="w-4 h-4 text-orange-600" />
                        </div>
                        高级分析选项
                      </h4>

                      <Input
                        label="成交量 (可选)"
                        type="number"
                        placeholder="用于成交量分析"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        error={errors.volume}
                        icon={<Activity className="w-4 h-4" />}
                        step="1"
                      />

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          分析周期
                        </label>
                        <select
                          value={cycle}
                          onChange={(e) => setCycle(e.target.value)}
                          className="input"
                        >
                          {presetCycles.map(preset => (
                            <option key={preset.value} value={preset.value}>
                              {preset.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleAnalyze}
                    disabled={isLoading || !jValue || !rsiValue}
                    loading={isLoading}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                    size="lg"
                  >
                    {isLoading ? '分析中...' : '开始专业分析'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    disabled={isLoading}
                    size="lg"
                  >
                    清除结果
                  </Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* 分析结果 */}
          {result && (
            <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Card hover>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h2 className="h3 mb-1">专业分析结果</h2>
                    <div className={`badge ${getSignalStyle(result.signal)}`}>
                      {getSignalText(result.signal)}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    分析置信度: {Math.round(result.confidence * 100)}%
                  </div>
                </CardHeader>

                <CardBody className="space-y-6">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Info className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">投资建议</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {result.advice}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 分析详情 */}
                  {result.details && (
                    <div className="space-y-4">
                      <h4 className="font-semibold">详细分析</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-muted/50 rounded-xl p-6">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            </div>
                            <h5 className="font-semibold">KDJ状态</h5>
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            {result.details.kdjStatus}
                          </div>
                        </div>

                        <div className="bg-muted/50 rounded-xl p-6">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                              <BarChart3 className="w-4 h-4 text-blue-600" />
                            </div>
                            <h5 className="font-semibold">RSI状态</h5>
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            {result.details.rsiStatus}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 图表按钮 */}
                  {chartData && (
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setShowChart(!showChart)}
                        className="flex-1"
                      >
                        <Activity className="w-4 h-4 mr-2" />
                        {showChart ? '隐藏图表' : '显示图表'}
                      </Button>
                    </div>
                  )}

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

          {/* 图表显示 */}
          {showChart && chartData && (
            <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
              <Card hover>
                <CardHeader>
                  <h3 className="h3 mb-2">技术指标图表</h3>
                  <p className="text-muted-foreground">直观展示指标变化趋势</p>
                </CardHeader>

                <CardBody className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      KDJ 指标趋势
                    </h4>
                    <SimpleChart
                      data={chartData.kdj}
                      type="kdj"
                      current={chartData.current.j}
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                      </div>
                      RSI 指标趋势
                    </h4>
                    <SimpleChart
                      data={chartData.rsi}
                      type="rsi"
                      current={chartData.current.rsi}
                    />
                  </div>
                </CardBody>
              </Card>
            </section>
          )}

          {/* 专业版功能说明 */}
          <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Card className="bg-muted/30">
              <CardHeader>
                <h3 className="h4 mb-2 flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  专业版功能特色
                </h3>
                <p className="text-muted-foreground">了解专业版增强功能</p>
              </CardHeader>

              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-600">完整指标支持</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• 支持K、D、J三个独立参数输入</p>
                      <p>• 可调RSI计算周期</p>
                      <p>• 成交量综合分析</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-600">高级分析功能</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• 图表显示指标趋势</p>
                      <p>• 多周期时间分析</p>
                      <p>• 增强算法模型</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600">专业级体验</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• 更准确信号判断</p>
                      <p>• 详细分析报告</p>
                      <p>• 专业数据可视化</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                    <div className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>风险提示：</strong>本工具仅供投资参考，不构成投资建议。投资有风险，入市需谨慎。建议结合其他技术指标和基本面分析综合判断。
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
