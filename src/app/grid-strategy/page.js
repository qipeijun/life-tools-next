'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardHeader, CardBody } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { computeSmartGridRange, calculateGridProfit } from '../../lib/calculations'
import { validateNumber, validateRSI } from '../../lib/validations'
import {
  Grid3X3,
  TrendingUp,
  TrendingDown,
  Calculator,
  BarChart3,
  Settings,
  Info,
  AlertCircle,
  Zap,
  Activity,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export default function GridStrategyPage() {
  const [isMobile, setIsMobile] = useState(false)

  // 缓存键名
  const CACHE_KEYS = {
    CURRENT_PRICE: 'grid_currentPrice',
    UPPER_PRICE: 'grid_upperPrice',
    LOWER_PRICE: 'grid_lowerPrice',
    RSI: 'grid_rsi',
    GRID_COUNT: 'grid_count',
    INVESTMENT: 'grid_investment',
    ADVANCED: 'grid_advanced'
  }

  // 预设配置
  const presetConfigs = [
    { name: '保守型', rsi: 30, count: 10, ratio: 0.15 },
    { name: '稳健型', rsi: 50, count: 15, ratio: 0.20 },
    { name: '积极型', rsi: 70, count: 20, ratio: 0.25 }
  ]

  // 表单状态
  const [currentPrice, setCurrentPrice] = useLocalStorage(CACHE_KEYS.CURRENT_PRICE, '')
  const [upperPrice, setUpperPrice] = useLocalStorage(CACHE_KEYS.UPPER_PRICE, '')
  const [lowerPrice, setLowerPrice] = useLocalStorage(CACHE_KEYS.LOWER_PRICE, '')
  const [rsi, setRsi] = useLocalStorage(CACHE_KEYS.RSI, '')
  const [gridCount, setGridCount] = useLocalStorage(CACHE_KEYS.GRID_COUNT, '15')
  const [investment, setInvestment] = useLocalStorage(CACHE_KEYS.INVESTMENT, '10000')
  const [showAdvanced, setShowAdvanced] = useLocalStorage(CACHE_KEYS.ADVANCED, false)

  // 结果状态
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [showProfit, setShowProfit] = useState(false)

  // 页面初始化
  useEffect(() => {
    // 检测是否为移动设备
    const checkMobile = () => {
      const mobile = window.innerWidth < 640
      if (mobile !== isMobile) {
        setIsMobile(mobile)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    setTimeout(() => {
      document.body.classList.remove('loading')
    }, 300)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [isMobile])

  // 输入验证
  const validateInputs = () => {
    const newErrors = {}

    const currentValidation = validateNumber(currentPrice, 0)
    if (!currentValidation.isValid) {
      newErrors.currentPrice = currentValidation.message
    }

    const upperValidation = validateNumber(upperPrice, 0)
    if (!upperValidation.isValid) {
      newErrors.upperPrice = upperValidation.message
    }

    const lowerValidation = validateNumber(lowerPrice, 0)
    if (!lowerValidation.isValid) {
      newErrors.lowerPrice = lowerValidation.message
    }

    const rsiValidation = validateRSI(rsi)
    if (!rsiValidation.isValid && rsi) {
      newErrors.rsi = rsiValidation.message
    }

    const gridValidation = validateNumber(gridCount, 2, 50)
    if (!gridValidation.isValid) {
      newErrors.gridCount = gridValidation.message
    }

    const investmentValidation = validateNumber(investment, 100)
    if (!investmentValidation.isValid) {
      newErrors.investment = investmentValidation.message
    }

    // 逻辑验证
    if (currentPrice && upperPrice && lowerPrice) {
      const current = parseFloat(currentPrice)
      const upper = parseFloat(upperPrice)
      const lower = parseFloat(lowerPrice)

      if (upper <= lower) {
        newErrors.upperPrice = '上限价格必须大于下限价格'
      }

      if (current <= 0) {
        newErrors.currentPrice = '当前价格必须大于0'
      }

      if (upper <= 0) {
        newErrors.upperPrice = '上限价格必须大于0'
      }

      if (lower <= 0) {
        newErrors.lowerPrice = '下限价格必须大于0'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 计算网格策略
  const handleCalculate = useCallback(async () => {
    if (!validateInputs()) return

    setIsLoading(true)

    // 模拟异步处理
    await new Promise(resolve => setTimeout(resolve, 600))

    try {
      const upper = parseFloat(upperPrice)
      const lower = parseFloat(lowerPrice)
      const rsiValue = rsi ? parseFloat(rsi) : 50
      const count = parseInt(gridCount)
      const invest = parseFloat(investment)

      // 计算智能网格区间
      const smartGrid = computeSmartGridRange(rsiValue, upper, lower)

      // 计算网格参数
      const gridSpacing = (smartGrid.adjustedUpper - smartGrid.adjustedLower) / (count - 1)
      const grids = []

      for (let i = 0; i < count; i++) {
        grids.push({
          level: i + 1,
          price: smartGrid.adjustedLower + gridSpacing * i,
          buyAmount: invest / count / (smartGrid.adjustedLower + gridSpacing * i)
        })
      }

      // 计算预期收益
      const profitAnalysis = calculateGridProfit(
        smartGrid.adjustedLower,
        smartGrid.adjustedUpper,
        count,
        invest,
        0.001 // 手续费
      )

      setResult({
        original: { upper, lower },
        adjusted: smartGrid,
        grids: grids,
        profit: profitAnalysis,
        rsi: rsiValue,
        investment: invest
      })

    } catch (error) {
      console.error('计算失败:', error)
      setResult({
        error: true,
        message: '计算失败，请检查输入参数'
      })
    } finally {
      setIsLoading(false)
    }
  }, [upperPrice, lowerPrice, rsi, gridCount, investment, validateInputs])

  // 清除结果
  const handleClear = () => {
    setResult(null)
    setShowProfit(false)
    setErrors({})
  }

  // 应用预设配置
  const applyPreset = (preset) => {
    setRsi(preset.rsi.toString())
    setGridCount(preset.count.toString())

    if (currentPrice) {
      const current = parseFloat(currentPrice)
      const range = current * preset.ratio
      setUpperPrice((current + range).toFixed(2))
      setLowerPrice((current - range).toFixed(2))
    }
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

          <div className="flex items-center space-x-2">
            <Grid3X3 className="w-6 h-6 text-purple-600 animate-pulse" />
            <h1 className="h2">ETH 网格策略</h1>
          </div>

          <ThemeToggle />
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          {/* 工具介绍 */}
          <section className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" mobile={isMobile}>
              基于RSI的智能网格区间计算和收益分析，助您优化量化交易策略
            </p>
          </section>

          {/* 快速配置 */}
          <section className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card hover className="bg-card/80 backdrop-blur-sm" mobile={isMobile}>
              <CardHeader mobile={isMobile}>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-purple-10/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="h3 mb-1">快速配置</h2>
                    <p className="text-muted-foreground">选择适合您的策略类型</p>
                  </div>
                </div>
              </CardHeader>

              <CardBody mobile={isMobile}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {presetConfigs.map((preset, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => applyPreset(preset)}
                      className="p-6 h-auto flex flex-col items-center space-y-3 rounded-2xl"
                      mobile={isMobile}
                    >
                      <div className="w-10 h-10 bg-purple-100/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Settings className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-lg">{preset.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          RSI {preset.rsi} | {preset.count}网格
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardBody>
            </Card>
          </section>

          {/* 参数设置 */}
          <section className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Card hover className="bg-card/80 backdrop-blur-sm" mobile={isMobile}>
              <CardHeader mobile={isMobile}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-purple-10/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                      <Grid3X3 className="w-7 h-7 text-purple-60" />
                    </div>
                    <div>
                      <h2 className="h3 mb-1">策略参数设置</h2>
                      <p className="text-muted-foreground">配置网格交易核心参数</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="rounded-xl"
                    mobile={isMobile}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {showAdvanced ? '简化' : '高级'}
                  </Button>
                </div>
              </CardHeader>

              <CardBody className="space-y-6" mobile={isMobile}>
                {/* 基础价格参数 */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <div className="w-10 h-10 bg-green-10/50 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    价格参数
                  </h4>
                  <div className="space-y-4">
                    <Input
                      label="当前价格 (USDT)"
                      type="number"
                      placeholder="ETH当前价格"
                      value={currentPrice}
                      onChange={(e) => setCurrentPrice(e.target.value)}
                      error={errors.currentPrice}
                      icon={<TrendingUp className="w-4 h-4" />}
                      step="0.01"
                      required
                      mobile={isMobile}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="上限价格"
                        type="number"
                        placeholder="网格上限"
                        value={upperPrice}
                        onChange={(e) => setUpperPrice(e.target.value)}
                        error={errors.upperPrice}
                        icon={<TrendingUp className="w-4 h-4" />}
                        step="0.01"
                        required
                        mobile={isMobile}
                      />
                      <Input
                        label="下限价格"
                        type="number"
                        placeholder="网格下限"
                        value={lowerPrice}
                        onChange={(e) => setLowerPrice(e.target.value)}
                        error={errors.lowerPrice}
                        icon={<TrendingDown className="w-4 h-4" />}
                        step="0.01"
                        required
                        mobile={isMobile}
                      />
                    </div>
                  </div>
                </div>

                {/* 高级参数 */}
                {showAdvanced && (
                  <div className="space-y-6 border-t border-border pt-6">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <BarChart3 className="w-4 h-4 text-blue-600" />
                        </div>
                        高级分析选项
                      </h4>

                      <Input
                        label="RSI 指标 (可选)"
                        type="number"
                        placeholder="用于智能优化区间"
                        value={rsi}
                        onChange={(e) => setRsi(e.target.value)}
                        error={errors.rsi}
                        icon={<BarChart3 className="w-4 h-4" />}
                        step="0.01"
                        mobile={isMobile}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="网格数量"
                          type="number"
                          placeholder="建议10-30个"
                          value={gridCount}
                          onChange={(e) => setGridCount(e.target.value)}
                          error={errors.gridCount}
                          icon={<Grid3X3 className="w-4 h-4" />}
                          step="1"
                          min="2"
                          max="50"
                          mobile={isMobile}
                        />
                        <Input
                          label="投资金额 (USDT)"
                          type="number"
                          placeholder="总投资金额"
                          value={investment}
                          onChange={(e) => setInvestment(e.target.value)}
                          error={errors.investment}
                          icon={<Calculator className="w-4 h-4" />}
                          step="100"
                          min="100"
                          mobile={isMobile}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleCalculate}
                    disabled={isLoading || !currentPrice || !upperPrice || !lowerPrice}
                    loading={isLoading}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                    size="lg"
                    mobile={isMobile}
                  >
                    {isLoading ? '计算中...' : '生成网格策略'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    disabled={isLoading}
                    size="lg"
                    mobile={isMobile}
                  >
                    清除结果
                  </Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* 分析结果 */}
          {result && !result.error && (
            <>
              <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <Card hover mobile={isMobile}>
                  <CardHeader mobile={isMobile}>
                    <div className="text-center">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 mb-4">
                        <Grid3X3 className="w-5 h-5 mr-2" />
                        <span className="font-bold">网格策略已优化</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody className="space-y-6" mobile={isMobile}>
                    {/* 智能区间优化 */}
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                          <Activity className="w-4 h-4 text-purple-600" />
                        </div>
                        智能区间优化
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">原始区间</div>
                          <div className="text-xl font-bold">
                            {result.original.lower.toFixed(2)} - {result.original.upper.toFixed(2)}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-2">优化区间</div>
                          <div className="text-xl font-bold text-purple-600">
                            {result.adjusted.adjustedLower.toFixed(2)} - {result.adjusted.adjustedUpper.toFixed(2)}
                          </div>
                        </div>
                      </div>

                      {rsi && (
                        <div className="text-sm text-muted-foreground bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                          基于RSI({result.rsi})智能调整区间宽度 {result.adjusted.scaleRatio}x
                          {result.adjusted.offsetRatio !== 0 && `，偏移 ${Math.abs(result.adjusted.offsetRatio * 100).toFixed(1)}%`}
                        </div>
                      )}
                    </div>

                    {/* 网格配置详情 */}
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4">网格配置详情</h4>

                      <div className="space-y-3">
                        {result.grids.slice(0, 6).map((grid, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-background rounded-lg">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full mr-3 ${
                                index === 0 ? 'bg-success' :
                                index === result.grids.length - 1 ? 'bg-error' :
                                'bg-muted-foreground'
                              }`} />
                              <div>
                                <div className="font-medium">网格 {grid.level}</div>
                                <div className="text-sm text-muted-foreground">
                                  {grid.buyAmount.toFixed(4)} ETH
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg">{grid.price.toFixed(2)}</div>
                              <div className="text-xs text-muted-foreground">USDT</div>
                            </div>
                          </div>
                        ))}

                        {result.grids.length > 6 && (
                          <div className="text-center text-sm text-muted-foreground py-2 bg-muted/30 rounded-lg">
                            还有 {result.grids.length - 6} 个网格层级...
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 收益分析 */}
                    <div className="bg-muted/50 rounded-xl p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">收益分析</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowProfit(!showProfit)}
                          mobile={isMobile}
                        >
                          <Calculator className="w-4 h-4 mr-2" />
                          {showProfit ? '简化' : '详细'}
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-background rounded-lg">
                          <div className="text-sm text-muted-foreground mb-2">单格收益</div>
                          <div className="text-2xl font-bold text-success">
                            {result.profit.profitPerGrid}
                          </div>
                          <div className="text-xs text-muted-foreground">USDT</div>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <div className="text-sm text-muted-foreground mb-2">收益率</div>
                          <div className="text-2xl font-bold text-primary">
                            {result.profit.profitRate}%
                          </div>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <div className="text-sm text-muted-foreground mb-2">年化收益</div>
                          <div className="text-2xl font-bold text-accent">
                            {result.profit.annualizedRate}%
                          </div>
                        </div>
                        <div className="text-center p-4 bg-background rounded-lg">
                          <div className="text-sm text-muted-foreground mb-2">回本天数</div>
                          <div className="text-2xl font-bold text-warning">
                            {result.profit.breakEvenDays}
                          </div>
                          <div className="text-xs text-muted-foreground">天</div>
                        </div>
                      </div>

                      {showProfit && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex justify-between p-3 bg-background rounded-lg">
                              <span className="text-muted-foreground">网格差价</span>
                              <span className="font-medium">{result.profit.gridSpacing} USDT</span>
                            </div>
                            <div className="flex justify-between p-3 bg-background rounded-lg">
                              <span className="text-muted-foreground">总投资</span>
                              <span className="font-medium">{result.investment} USDT</span>
                            </div>
                            <div className="flex justify-between p-3 bg-background rounded-lg">
                              <span className="text-muted-foreground">网格数量</span>
                              <span className="font-medium">{result.grids.length} 个</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </section>

              {/* 风险提示 */}
              <section className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800" mobile={isMobile}>
                  <CardHeader mobile={isMobile}>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Info className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                          投资风险提示
                        </h4>
                        <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                          <p>• 网格交易适合震荡行情，单边行情可能产生亏损</p>
                          <p>• 请确保有足够的资金支持所有网格层级的交易</p>
                          <p>• 建议定期根据市场情况调整网格参数</p>
                          <p>• 投资有风险，请根据自身风险承受能力合理配置资金</p>
                          <p>• 本工具仅供参考，不构成投资建议</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody mobile={isMobile}>
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

          {/* 使用说明 */}
          <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Card className="bg-muted/30" mobile={isMobile}>
              <CardHeader mobile={isMobile}>
                <h3 className="h4 mb-2 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Info className="w-4 h-4 text-primary" />
                  </div>
                  使用指南
                </h3>
                <p className="text-muted-foreground">了解网格策略的核心概念和使用方法</p>
              </CardHeader>

              <CardBody className="space-y-6" mobile={isMobile}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">参数说明</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>当前价格：</strong>ETH的实时市场价格</p>
                      <p>• <strong>上下限价格：</strong>网格交易的最高和最低价格区间</p>
                      <p>• <strong>RSI优化：</strong>基于RSI指标智能优化网格区间</p>
                      <p>• <strong>网格数量：</strong>建议10-30个网格</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">策略要点</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>投资金额：</strong>总投入资金，平均分配到各网格</p>
                      <p>• <strong>自动计算：</strong>系统自动计算每个网格的买入金额</p>
                      <p>• <strong>收益预估：</strong>提供预期收益和风险分析</p>
                      <p>• <strong>动态调整：</strong>支持根据市场变化调整参数</p>
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
