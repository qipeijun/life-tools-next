'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardHeader, CardBody } from '../../components/ui/Card'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateTDayProfit } from '../../lib/calculations'
import { validateNumber } from '../../lib/validations'
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Info,
  AlertCircle,
  BarChart3,
  Settings,
  ArrowLeft
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

export default function TDayCalculatorPage() {
  // 缓存键名
  const CACHE_KEYS = {
    BUY_PRICE: 'tday_buyPrice',
    SELL_PRICE: 'tday_sellPrice',
    QUANTITY: 'tday_quantity',
    COMMISSION: 'tday_commission',
    ADVANCED: 'tday_advanced'
  }

  // 预设配置
  const presetCommissions = [
    { label: '默认费率', value: 0.0003, description: '万三佣金' },
    { label: '低费率', value: 0.0002, description: '万二佣金' },
    { label: '超低费率', value: 0.0001, description: '万一佣金' }
  ]

  // 表单状态
  const [buyPrice, setBuyPrice] = useLocalStorage(CACHE_KEYS.BUY_PRICE, '')
  const [sellPrice, setSellPrice] = useLocalStorage(CACHE_KEYS.SELL_PRICE, '')
  const [quantity, setQuantity] = useLocalStorage(CACHE_KEYS.QUANTITY, '1000')
  const [commission, setCommission] = useLocalStorage(CACHE_KEYS.COMMISSION, '0.0003')
  const [showAdvanced, setShowAdvanced] = useLocalStorage(CACHE_KEYS.ADVANCED, false)

  // 结果状态
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})
  const [showBreakEven, setShowBreakEven] = useState(false)

  // 页面初始化
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('loading')
    }, 300)
  }, [])

  // 输入验证（带防抖）
  const validateInputs = useCallback(
    debounce(() => {
      const newErrors = {}

      const buyValidation = validateNumber(buyPrice, 0)
      if (!buyValidation.isValid) {
        newErrors.buyPrice = buyValidation.message
      }

      const sellValidation = validateNumber(sellPrice, 0)
      if (!sellValidation.isValid) {
        newErrors.sellPrice = sellValidation.message
      }

      const quantityValidation = validateNumber(quantity, 1)
      if (!quantityValidation.isValid) {
        newErrors.quantity = quantityValidation.message
      }

      const commissionValidation = validateNumber(commission, 0, 0.003)
      if (!commissionValidation.isValid) {
        newErrors.commission = commissionValidation.message
      }

      // 逻辑验证
      if (buyPrice && sellPrice) {
        const buy = parseFloat(buyPrice)
        const sell = parseFloat(sellPrice)

        if (sell <= buy) {
          newErrors.sellPrice = '卖出价格必须大于买入价格'
        }
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }, 300),
    [buyPrice, sellPrice, quantity, commission]
  )

  // 计算做T收益
  const handleCalculate = () => {
    if (!validateInputs()) return

    try {
      const calculationResult = calculateTDayProfit(
        parseFloat(buyPrice),
        parseFloat(sellPrice),
        parseInt(quantity),
        parseFloat(commission)
      )

      // 计算盈亏平衡点
      const profitPerShare = parseFloat(sellPrice) - parseFloat(buyPrice)
      const totalCommission = parseFloat(calculationResult.commissionAmount)
      const commissionPerShare = totalCommission / parseInt(quantity)
      const breakEvenPrice = parseFloat(buyPrice) + commissionPerShare

      setResult({
        ...calculationResult,
        profitPerShare: profitPerShare.toFixed(3),
        breakEvenPrice: breakEvenPrice.toFixed(3),
        priceSpread: (parseFloat(sellPrice) - parseFloat(buyPrice)).toFixed(3),
        spreadRate: ((parseFloat(sellPrice) - parseFloat(buyPrice)) / parseFloat(buyPrice) * 100).toFixed(3)
      })

    } catch (error) {
      console.error('计算失败:', error)
      setResult({
        error: true,
        message: '计算失败，请检查输入参数'
      })
    }
  }

  // 清除结果
  const handleClear = () => {
    setResult(null)
    setShowBreakEven(false)
    setErrors({})
  }

  // 计算盈亏平衡点所需价格
  const calculateRequiredSellPrice = () => {
    if (!buyPrice || !quantity || !commission) return 0

    const buy = parseFloat(buyPrice)
    const qty = parseInt(quantity)
    const comm = parseFloat(commission)

    // 计算总成本
    const buyCost = buy * qty * (1 + comm)

    // 计算需要卖出的价格（考虑卖出成本）
    const requiredSellPrice = buyCost / (qty * (1 - comm - 0.001)) // 0.001是印花税

    return requiredSellPrice.toFixed(3)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* 背景装饰 */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
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
            <Calculator className="w-6 h-6 text-green-600 animate-pulse" />
            <h1 className="h2">做T计算器</h1>
          </div>

          <ThemeToggle />
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          {/* 工具介绍 */}
          <section className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              精准计算买卖成本和盈亏平衡点，助您优化日内交易策略
            </p>
          </section>

          {/* 交易参数设置 */}
          <section className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card hover>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <Calculator className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="h3 mb-1">交易参数设置</h2>
                      <p className="text-muted-foreground">配置买入卖出价格和数量</p>
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
                {/* 基础价格参数 */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    价格参数
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="买入价格 (¥)"
                      type="number"
                      placeholder="股票买入价格"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                      error={errors.buyPrice}
                      icon={<TrendingUp className="w-4 h-4" />}
                      step="0.001"
                      required
                    />
                    <Input
                      label="卖出价格 (¥)"
                      type="number"
                      placeholder="股票卖出价格"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                      error={errors.sellPrice}
                      icon={<TrendingDown className="w-4 h-4" />}
                      step="0.001"
                      required
                    />
                  </div>
                </div>

                {/* 交易数量 */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <BarChart3 className="w-4 h-4 text-purple-600" />
                    </div>
                    交易数量
                  </h4>
                  <Input
                    label="股票数量 (股)"
                    type="number"
                    placeholder="交易股票数量"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    error={errors.quantity}
                    icon={<BarChart3 className="w-4 h-4" />}
                    step="100"
                    min="100"
                    required
                  />
                </div>

                {/* 高级参数 */}
                {showAdvanced && (
                  <div className="space-y-6 border-t border-border pt-6">
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                          <Settings className="w-4 h-4 text-orange-600" />
                        </div>
                        费率设置
                      </h4>

                      <Input
                        label="佣金费率"
                        type="number"
                        placeholder="默认0.0003（万三）"
                        value={commission}
                        onChange={(e) => setCommission(e.target.value)}
                        error={errors.commission}
                        step="0.0001"
                        min="0"
                        max="0.003"
                      />

                      {/* 预设费率 */}
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-foreground mb-2">
                          快速选择费率
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {presetCommissions.map((preset, index) => (
                            <Button
                              key={index}
                              variant={parseFloat(commission) === preset.value ? 'primary' : 'outline'}
                              size="sm"
                              onClick={() => setCommission(preset.value.toString())}
                              className="p-3 h-auto flex flex-col items-center space-y-1"
                            >
                              <div className="font-semibold">{preset.label}</div>
                              <div className="text-xs text-muted-foreground">
                                {preset.description}
                              </div>
                              <div className="text-xs font-mono">
                                {(preset.value * 10000).toFixed(0)}‱
                              </div>
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* 盈亏平衡点提示 */}
                      {buyPrice && quantity && commission && (
                        <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                              <Info className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="text-sm text-blue-800 dark:text-blue-200">
                              <div className="font-semibold mb-1">盈亏平衡点分析</div>
                              <div className="text-lg font-bold mb-1">
                                ¥{calculateRequiredSellPrice()}
                              </div>
                              <div className="text-xs">
                                卖出价格需达到此值才能覆盖所有交易成本（佣金+印花税）
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleCalculate}
                    disabled={!buyPrice || !sellPrice || !quantity}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    size="lg"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    计算收益
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    size="lg"
                  >
                    清除结果
                  </Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* 计算结果 */}
          {result && !result.error && (
            <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Card hover>
                <CardHeader>
                  <div className="text-center">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${
                      parseFloat(result.profit) > 0
                        ? 'bg-success/10 text-success'
                        : 'bg-error/10 text-error'
                    }`}>
                      <DollarSign className="w-5 h-5 mr-2" />
                      <span className="font-bold">
                        {parseFloat(result.profit) > 0 ? '交易盈利' : '交易亏损'}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardBody className="space-y-6">
                  {/* 主要收益指标 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 rounded-xl p-6 text-center">
                      <div className="text-sm text-muted-foreground mb-2">净收益</div>
                      <div className={`text-3xl font-bold ${
                        parseFloat(result.profit) > 0 ? 'text-success' : 'text-error'
                      }`}>
                        ¥{result.profit}
                      </div>
                      <div className={`text-sm mt-1 ${
                        parseFloat(result.profitRate) > 0 ? 'text-success' : 'text-error'
                      }`}>
                        {result.profitRate}%
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 text-center">
                      <div className="text-sm text-muted-foreground mb-2">总成本</div>
                      <div className="text-3xl font-bold">
                        ¥{result.buyCost}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        含所有手续费
                      </div>
                    </div>
                  </div>

                  {/* 交易详情分析 */}
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold mb-4">交易详情分析</h4>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                          <span className="text-sm text-muted-foreground">买入成本</span>
                          <span className="font-medium">¥{result.buyCost}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                          <span className="text-sm text-muted-foreground">卖出收入</span>
                          <span className="font-medium">¥{result.sellIncome}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                          <span className="text-sm text-muted-foreground">价差收益</span>
                          <span className="font-medium text-success">
                            ¥{(parseFloat(result.profit) + parseFloat(result.commissionAmount)).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                          <span className="text-sm text-muted-foreground">手续费总额</span>
                          <span className="font-medium text-error">-¥{result.commissionAmount}</span>
                        </div>
                      </div>

                      <div className="border-t border-border pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                            <span className="text-sm text-muted-foreground">每股价差</span>
                            <span className="font-medium">¥{result.priceSpread}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                            <span className="text-sm text-muted-foreground">价差比例</span>
                            <span className="font-medium">{result.spreadRate}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 收益分析 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/50 rounded-xl p-6 text-center">
                      <div className="text-sm text-muted-foreground mb-2">每股收益</div>
                      <div className={`text-2xl font-bold ${
                        parseFloat(result.profitPerShare) > 0 ? 'text-success' : 'text-error'
                      }`}>
                        ¥{result.profitPerShare}
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6 text-center">
                      <div className="text-sm text-muted-foreground mb-2">盈亏平衡价</div>
                      <div className="text-2xl font-bold text-primary">
                        ¥{result.breakEvenPrice}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        覆盖所有成本的价格
                      </div>
                    </div>
                  </div>

                  {/* 操作建议 */}
                  <div className={`rounded-xl p-4 border ${
                    parseFloat(result.profit) > 0
                      ? 'bg-success/10 border-success/30 text-success'
                      : 'bg-error/10 border-error/30 text-error'
                  }`}>
                    <div className="text-center">
                      <div className="font-semibold mb-1">
                        {parseFloat(result.profit) > 0 ? '🎉 交易建议' : '⚠️ 交易建议'}
                      </div>
                      <div className="text-sm">
                        {parseFloat(result.profit) > 0
                          ? '本次做T成功，获得了正收益！建议继续关注市场动态，适时止盈。'
                          : '本次做T出现亏损，建议提高价差或选择更低费率的券商，确保价差能覆盖交易成本。'
                        }
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </section>
          )}

          {/* 错误提示 */}
          {result && result.error && (
            <section className="animate-fade-in">
              <Card className="border-error bg-error/10">
                <CardBody>
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

          {/* 费用说明 */}
          <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Card className="bg-muted/30">
              <CardHeader>
                <h3 className="h4 mb-2 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Info className="w-4 h-4 text-primary" />
                  </div>
                  交易费用说明
                </h3>
                <p className="text-muted-foreground">了解A股交易的各种费用构成</p>
              </CardHeader>

              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">费用构成</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>佣金：</strong>双向收取，默认万三（0.03%）</p>
                      <p>• <strong>印花税：</strong>卖出时收取，千分之一（0.1%）</p>
                      <p>• <strong>过户费：</strong>双向收取，万分之0.2</p>
                      <p>• <strong>其他费用：</strong>可能包含监管费等</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">交易建议</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>盈亏平衡：</strong>需覆盖所有交易成本</p>
                      <p>• <strong>做T建议：</strong>价差至少覆盖成本，建议1%以上</p>
                      <p>• <strong>费率优化：</strong>选择低费率券商降低成本</p>
                      <p>• <strong>风险提示：</strong>股市有风险，投资需谨慎</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                    <div className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>重要提醒：</strong>本工具计算结果仅供参考，实际费用可能因券商不同而有差异。投资有风险，请根据自身情况谨慎决策。
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
