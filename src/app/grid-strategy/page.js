'use client'

import { useState, useCallback } from 'react'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { computeSmartGridRange, calculateGridProfit } from '../../lib/calculations'
import { validateNumber, validateRSI } from '../../lib/validations'
import { QuickActions } from '../../components/ui/QuickActions'
import { ResultCard } from '../../components/ui/ResultCard'
import {
  Grid3X3,
  TrendingUp,
  TrendingDown,
  ArrowLeft,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

export default function GridStrategyPage() {
  // 缓存键名
  const CACHE_KEYS = {
    CURRENT_PRICE: 'grid_currentPrice_v2',
    UPPER_PRICE: 'grid_upperPrice_v2',
    LOWER_PRICE: 'grid_lowerPrice_v2',
    RSI: 'grid_rsi_v2',
    GRID_COUNT: 'grid_count_v2',
    INVESTMENT: 'grid_investment_v2',
  }

  // 表单状态
  const [currentPrice, setCurrentPrice] = useLocalStorage(CACHE_KEYS.CURRENT_PRICE, '')
  const [upperPrice, setUpperPrice] = useLocalStorage(CACHE_KEYS.UPPER_PRICE, '')
  const [lowerPrice, setLowerPrice] = useLocalStorage(CACHE_KEYS.LOWER_PRICE, '')
  const [rsi, setRsi] = useLocalStorage(CACHE_KEYS.RSI, '50')
  const [gridCount, setGridCount] = useLocalStorage(CACHE_KEYS.GRID_COUNT, '15')
  const [investment, setInvestment] = useLocalStorage(CACHE_KEYS.INVESTMENT, '10000')

  // 结果状态
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [selectedStrategy, setSelectedStrategy] = useState(null)

  // 预设策略
  const strategyOptions = [
    { label: '保守型', value: 'conservative' },
    { label: '稳健型', value: 'balanced' },
    { label: '积极型', value: 'aggressive' },
  ]

  // 处理策略选择
  const handleStrategySelect = (strategy) => {
    setSelectedStrategy(strategy)
    if (strategy === 'conservative') {
      setRsi('30')
      setGridCount('10')
      if (currentPrice) {
        const current = parseFloat(currentPrice)
        setUpperPrice((current * 1.15).toFixed(2))
        setLowerPrice((current * 0.85).toFixed(2))
      }
    } else if (strategy === 'balanced') {
      setRsi('50')
      setGridCount('15')
      if (currentPrice) {
        const current = parseFloat(currentPrice)
        setUpperPrice((current * 1.20).toFixed(2))
        setLowerPrice((current * 0.80).toFixed(2))
      }
    } else if (strategy === 'aggressive') {
      setRsi('70')
      setGridCount('20')
      if (currentPrice) {
        const current = parseFloat(currentPrice)
        setUpperPrice((current * 1.25).toFixed(2))
        setLowerPrice((current * 0.75).toFixed(2))
      }
    }
  }

  // 输入验证
  const validateInputs = () => {
    const newErrors = {}

    const currentValidation = validateNumber(currentPrice, 0)
    if (!currentValidation.isValid) {
      newErrors.currentPrice = '请输入当前价格'
    }

    const upperValidation = validateNumber(upperPrice, 0)
    if (!upperValidation.isValid) {
      newErrors.upperPrice = '请输入上限价格'
    }

    const lowerValidation = validateNumber(lowerPrice, 0)
    if (!lowerValidation.isValid) {
      newErrors.lowerPrice = '请输入下限价格'
    }

    const rsiValidation = validateRSI(rsi)
    if (!rsiValidation.isValid && rsi) {
      newErrors.rsi = rsiValidation.message
    }

    const gridValidation = validateNumber(gridCount, 2, 50)
    if (!gridValidation.isValid) {
      newErrors.gridCount = '网格数量必须在2-50之间'
    }

    const investmentValidation = validateNumber(investment, 100)
    if (!investmentValidation.isValid) {
      newErrors.investment = '投资金额最少100'
    }

    // 逻辑验证
    if (currentPrice && upperPrice && lowerPrice) {
      const current = parseFloat(currentPrice)
      const upper = parseFloat(upperPrice)
      const lower = parseFloat(lowerPrice)

      if (upper <= lower) {
        newErrors.upperPrice = '上限必须大于下限'
      }

      if (current <= 0) {
        newErrors.currentPrice = '价格必须大于0'
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
    await new Promise((resolve) => setTimeout(resolve, 300))

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
          buyAmount: invest / count / (smartGrid.adjustedLower + gridSpacing * i),
        })
      }

      // 计算预期收益
      const profitAnalysis = calculateGridProfit(
        smartGrid.adjustedLower,
        smartGrid.adjustedUpper,
        count,
        invest,
        0.001
      )

      setResult({
        original: { upper, lower },
        adjusted: smartGrid,
        grids: grids,
        profit: profitAnalysis,
        rsi: rsiValue,
        investment: invest,
      })
    } catch (error) {
      console.error('计算失败:', error)
      setResult({
        error: true,
        message: '计算失败，请检查输入参数',
      })
    } finally {
      setIsLoading(false)
    }
  }, [upperPrice, lowerPrice, rsi, gridCount, investment])

  // 清除结果
  const handleClear = () => {
    setResult(null)
    setErrors({})
  }

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
        <h1 className="ios-large-title mb-8">网格策略</h1>

        {/* 主要内容 */}
        <div className="ios-spacing-section">
          {/* 快速策略 */}
          <section>
            <h2 className="ios-section-header">快速策略</h2>
            <QuickActions
              options={strategyOptions}
              selected={selectedStrategy}
              onChange={handleStrategySelect}
              columns={3}
            />
          </section>

          {/* 价格设置 */}
          <section>
            <h2 className="ios-section-header">价格区间</h2>
            <div className="ios-card ios-spacing-group">
              {/* 当前价格 */}
                  <div>
                <label className="ios-input-label">当前价格 (USDT)</label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder="ETH当前价格"
                    value={currentPrice}
                    onChange={(e) => {
                      setCurrentPrice(e.target.value)
                      setSelectedStrategy(null)
                    }}
                    className="ios-input w-full pl-10"
                    step="0.01"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    $
                  </span>
                </div>
                {errors.currentPrice && (
                  <p className="text-xs text-red-500 mt-1">{errors.currentPrice}</p>
                )}
                </div>

              {/* 上下限 */}
              <div className="grid grid-cols-2 gap-3">
                    <div>
                  <label className="ios-input-label">上限价格</label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="上限"
                      value={upperPrice}
                      onChange={(e) => {
                        setUpperPrice(e.target.value)
                        setSelectedStrategy(null)
                      }}
                      className="ios-input w-full pl-10"
                      step="0.01"
                    />
                    <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  {errors.upperPrice && (
                    <p className="text-xs text-red-500 mt-1">{errors.upperPrice}</p>
                  )}
                </div>

                <div>
                  <label className="ios-input-label">下限价格</label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="下限"
                      value={lowerPrice}
                      onChange={(e) => {
                        setLowerPrice(e.target.value)
                        setSelectedStrategy(null)
                      }}
                      className="ios-input w-full pl-10"
                      step="0.01"
                    />
                    <TrendingDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  {errors.lowerPrice && (
                    <p className="text-xs text-red-500 mt-1">{errors.lowerPrice}</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* 网格参数 */}
          <section>
            <h2 className="ios-section-header">网格参数</h2>
            <div className="ios-card ios-spacing-group">
              {/* 网格数量 */}
                    <div>
                <label className="ios-input-label">网格数量</label>
                <input
                        type="number"
                  inputMode="numeric"
                  placeholder="10-30个"
                          value={gridCount}
                  onChange={(e) => {
                    setGridCount(e.target.value)
                    setSelectedStrategy(null)
                  }}
                  className="ios-input w-full"
                          step="1"
                          min="2"
                          max="50"
                                                 />
                {errors.gridCount && (
                  <p className="text-xs text-red-500 mt-1">{errors.gridCount}</p>
                )}
              </div>

              {/* 投资金额 */}
              <div>
                <label className="ios-input-label">投资金额 (USDT)</label>
                <div className="relative">
                  <input
                          type="number"
                    inputMode="numeric"
                          placeholder="总投资金额"
                          value={investment}
                          onChange={(e) => setInvestment(e.target.value)}
                    className="ios-input w-full pl-10"
                          step="100"
                                                 />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    $
                  </span>
                      </div>
                {errors.investment && (
                  <p className="text-xs text-red-500 mt-1">{errors.investment}</p>
                )}
                    </div>

              {/* RSI (可选) */}
              <div>
                <label className="ios-input-label">RSI 指标 (可选)</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="用于智能优化区间"
                  value={rsi}
                  onChange={(e) => {
                    setRsi(e.target.value)
                    setSelectedStrategy(null)
                  }}
                  className="ios-input w-full"
                  step="0.01"
                />
                {errors.rsi && (
                  <p className="text-xs text-red-500 mt-1">{errors.rsi}</p>
                )}
              </div>
                </div>
          </section>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button
              onClick={handleCalculate}
              disabled={isLoading || !currentPrice || !upperPrice || !lowerPrice}
              className="ios-button-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                {isLoading ? '计算中...' : '生成策略'}
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
            <>
              {/* 优化区间 */}
              <section>
                <h2 className="ios-section-header">智能优化</h2>
                <div className="ios-card">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        原始区间
                      </div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        ${result.original.lower.toFixed(2)} - ${result.original.upper.toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        优化区间
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ${result.adjusted.adjustedLower.toFixed(2)} - $
                        {result.adjusted.adjustedUpper.toFixed(2)}
                      </div>
                            </div>
                          </div>
                  {rsi && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/10 rounded-lg p-3">
                      基于RSI({result.rsi})智能调整区间宽度 {result.adjusted.scaleRatio}x
                        </div>
                      )}
                    </div>
              </section>

              {/* 收益分析 */}
              <section>
                <h2 className="ios-section-header">收益分析</h2>
                <ResultCard
                  type="profit"
                  title="预期收益"
                  value={`${result.profit.profitRate}%`}
                  subtitle={`单格收益 $${result.profit.profitPerGrid}`}
                  icon={<Grid3X3 />}
                  expandable={true}
                  details={[
                    { label: '网格差价', value: `$${result.profit.gridSpacing}` },
                    { label: '年化收益', value: `${result.profit.annualizedRate}%` },
                    { label: '回本天数', value: `${result.profit.breakEvenDays}天` },
                    { label: '网格数量', value: `${result.grids.length}个` },
                    { label: '总投资', value: `$${result.investment}` },
                  ]}
                />
              </section>

              {/* 风险提示 */}
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-4">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  ⚠️ 网格交易适合震荡行情，单边行情可能产生亏损。本工具仅供参考，投资有风险。
                </p>
                    </div>
            </>
          )}

          {/* 错误提示 */}
          {result && result.error && (
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-2xl p-4">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {result.message}
              </p>
                  </div>
          )}

          {/* 使用说明 */}
          <section>
            <h2 className="ios-section-header">使用说明</h2>
            <div className="ios-card">
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  • <strong>快速策略：</strong>一键应用保守/稳健/积极三种策略
                </p>
                <p>
                  • <strong>价格区间：</strong>设置网格交易的上下限价格
                </p>
                <p>
                  • <strong>RSI优化：</strong>基于RSI指标智能调整网格区间
                </p>
                <p>
                  • <strong>收益预测：</strong>显示预期收益率和回本时间
                </p>
                  </div>
                </div>
          </section>
        </div>
      </div>
    </div>
  )
}
