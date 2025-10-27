'use client'

import { useState, useCallback } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateTDayProfit } from '../../lib/calculations'
import { validateNumber } from '../../lib/validations'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { SegmentedControl } from '../../components/ui/SegmentedControl'
import { QuickActions } from '../../components/ui/QuickActions'
import { ResultCard } from '../../components/ui/ResultCard'
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
} from 'lucide-react'
import Link from 'next/link'

export default function TDayCalculatorPage() {
  // 缓存键名
  const CACHE_KEYS = {
    BUY_PRICE: 'tday_buyPrice_v2',
    SELL_PRICE: 'tday_sellPrice_v2',
    QUANTITY: 'tday_quantity_v2',
    FEE_TYPE: 'tday_feeType_v2',
    FEE_VALUE: 'tday_feeValue_v2',
  }

  // 表单状态
  const [buyPrice, setBuyPrice] = useLocalStorage(CACHE_KEYS.BUY_PRICE, '')
  const [sellPrice, setSellPrice] = useLocalStorage(CACHE_KEYS.SELL_PRICE, '')
  const [quantity, setQuantity] = useLocalStorage(CACHE_KEYS.QUANTITY, '1000')
  const [feeType, setFeeType] = useLocalStorage(CACHE_KEYS.FEE_TYPE, 'ratio')
  const [feeValue, setFeeValue] = useLocalStorage(CACHE_KEYS.FEE_VALUE, '0.0003')

  // UI状态
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})
  const [selectedScenario, setSelectedScenario] = useState(null)

  // 快速场景选项
  const scenarioOptions = [
    { label: '+1%', value: 1 },
    { label: '+2%', value: 2 },
    { label: '+3%', value: 3 },
    { label: '+5%', value: 5 },
  ]

  // 快速场景处理
  const handleScenarioSelect = (percent) => {
    setSelectedScenario(percent)
    if (buyPrice) {
      const buy = parseFloat(buyPrice)
      if (!isNaN(buy)) {
        const sell = buy * (1 + percent / 100)
        setSellPrice(sell.toFixed(3))
      }
    }
  }

  // 输入验证
  const validateInputs = () => {
      const newErrors = {}

      const buyValidation = validateNumber(buyPrice, 0)
      if (!buyValidation.isValid) {
      newErrors.buyPrice = '请输入有效的买入价格'
      }

      const sellValidation = validateNumber(sellPrice, 0)
      if (!sellValidation.isValid) {
      newErrors.sellPrice = '请输入有效的卖出价格'
      }

      const quantityValidation = validateNumber(quantity, 1)
      if (!quantityValidation.isValid) {
      newErrors.quantity = '请输入有效的股票数量'
    }

    const feeValidation = validateNumber(feeValue, 0)
    if (!feeValidation.isValid) {
      newErrors.feeValue = '请输入有效的手续费'
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
  }

  // 计算收益
  const handleCalculate = useCallback(() => {
    if (!validateInputs()) return

    try {
      const feeConfig = {
        type: feeType,
        value: parseFloat(feeValue),
      }

      const calculationResult = calculateTDayProfit(
        parseFloat(buyPrice),
        parseFloat(sellPrice),
        parseInt(quantity),
        feeConfig
      )

      setResult(calculationResult)
    } catch (error) {
      console.error('计算失败:', error)
      setResult({
        error: true,
        message: '计算失败，请检查输入参数',
      })
    }
  }, [buyPrice, sellPrice, quantity, feeType, feeValue])

  // 清除结果
  const handleClear = () => {
    setResult(null)
    setErrors({})
  }

  // 判断盈亏类型
  const getResultType = () => {
    if (!result || result.error) return 'neutral'
    const profit = parseFloat(result.profit)
    return profit > 0 ? 'profit' : profit < 0 ? 'loss' : 'neutral'
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
        <h1 className="ios-large-title mb-8">做T计算器</h1>

        {/* 主要内容 */}
        <div className="ios-spacing-section">
          {/* 快速设置 */}
          <section>
            <h2 className="ios-section-header">快速设置</h2>
            <QuickActions
              options={scenarioOptions}
              selected={selectedScenario}
              onChange={handleScenarioSelect}
              columns={4}
            />
          </section>

          {/* 价格输入 */}
          <section>
            <h2 className="ios-section-header">价格设置</h2>
            <div className="ios-card ios-spacing-group">
              {/* 买入价格 */}
                    <div>
                <label className="ios-input-label">买入价格</label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder="输入买入价格"
                    value={buyPrice}
                    onChange={(e) => {
                      setBuyPrice(e.target.value)
                      setSelectedScenario(null)
                    }}
                    className="ios-input w-full pl-10"
                    step="0.01"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                    ¥
                  </span>
                </div>
                {errors.buyPrice && (
                  <p className="text-xs text-red-500 mt-1">{errors.buyPrice}</p>
                )}
              </div>

              {/* 卖出价格 */}
                <div>
                <label className="ios-input-label">卖出价格</label>
                <div className="relative">
                  <input
                      type="number"
                    inputMode="decimal"
                    placeholder="输入卖出价格"
                      value={sellPrice}
                    onChange={(e) => {
                      setSellPrice(e.target.value)
                      setSelectedScenario(null)
                    }}
                    className="ios-input w-full pl-10"
                    step="0.01"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                    ¥
                  </span>
                </div>
                {errors.sellPrice && (
                  <p className="text-xs text-red-500 mt-1">{errors.sellPrice}</p>
                )}
                </div>

              {/* 股票数量 */}
                <div>
                <label className="ios-input-label">股票数量</label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="输入股票数量"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="ios-input w-full pr-12"
                    step="100"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                    股
                  </span>
                </div>
                {errors.quantity && (
                  <p className="text-xs text-red-500 mt-1">{errors.quantity}</p>
                )}
              </div>
            </div>
          </section>

          {/* 手续费设置 */}
          <section>
            <h2 className="ios-section-header">手续费设置</h2>
            <div className="ios-card ios-spacing-group">
              {/* 费用类型切换 */}
                    <div>
                <SegmentedControl
                  options={[
                    { label: '按比例', value: 'ratio' },
                    { label: '固定金额', value: 'fixed' },
                  ]}
                  selected={feeType}
                  onChange={setFeeType}
                />
                      </div>

              {/* 费用输入 */}
              <div>
                <label className="ios-input-label">
                  {feeType === 'ratio' ? '手续费比例' : '手续费金额'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder={
                      feeType === 'ratio'
                        ? '例如: 0.0003 (万三)'
                        : '例如: 5 (每笔5元)'
                    }
                    value={feeValue}
                    onChange={(e) => setFeeValue(e.target.value)}
                    className="ios-input w-full pr-12"
                    step={feeType === 'ratio' ? '0.0001' : '0.5'}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                    {feeType === 'ratio' ? '%' : '¥'}
                  </span>
                            </div>
                {errors.feeValue && (
                  <p className="text-xs text-red-500 mt-1">{errors.feeValue}</p>
                )}
                {feeType === 'ratio' && (
                  <p className="text-xs text-gray-500 mt-2">
                    常用费率：万三(0.0003) 万二(0.0002) 万一(0.0001)
                  </p>
                      )}
                    </div>
                  </div>
          </section>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button
                    onClick={handleCalculate}
                    disabled={!buyPrice || !sellPrice || !quantity}
              className="ios-button-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                计算收益
              </span>
            </button>
            {result && (
              <button
                    onClick={handleClear}
                className="ios-button-secondary"
                  >
                清除
              </button>
            )}
                </div>

          {/* 结果展示 */}
          {result && !result.error && (
            <section>
              <h2 className="ios-section-header">计算结果</h2>
              <ResultCard
                type={getResultType()}
                title="净收益"
                value={`${parseFloat(result.profit) >= 0 ? '+' : ''}¥${result.profit}`}
                subtitle={`${parseFloat(result.profitRate) >= 0 ? '+' : ''}${result.profitRate}%`}
                icon={<DollarSign />}
                expandable={true}
                defaultExpanded={true}
                details={[
                  { label: '买入成本', value: `¥${result.buyCost}` },
                  { label: '卖出收入', value: `¥${result.sellIncome}` },
                  { label: '手续费总计', value: `¥${result.totalFee}` },
                  { label: '买入手续费', value: `¥${result.buyFee}` },
                  { label: '卖出手续费', value: `¥${result.sellFee}` },
                  { label: '印花税', value: `¥${result.stampDuty}` },
                  { label: '盈亏平衡价', value: `¥${result.breakEvenPrice}` },
                ]}
              />

                  {/* 操作建议 */}
              <div
                className={`mt-4 p-4 rounded-2xl border ${
                  getResultType() === 'profit'
                    ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800/30'
                    : getResultType() === 'loss'
                    ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800/30'
                    : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                }`}
              >
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {getResultType() === 'profit'
                    ? '🎉 本次交易盈利！卖出价格超过盈亏平衡点，获得正收益。'
                    : getResultType() === 'loss'
                    ? '⚠️ 本次交易亏损。建议提高价差或选择更低的手续费率。'
                    : '持平交易。收益与成本相当。'}
                </p>
                  </div>
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
                <p>• <strong>快速场景：</strong>点击快捷按钮自动计算对应百分比的卖出价</p>
                <p>• <strong>手续费：</strong>支持按比例（如万三）或固定金额（如每笔5元）</p>
                <p>• <strong>印花税：</strong>卖出时自动计算0.1%的印花税</p>
                <p>• <strong>盈亏平衡：</strong>显示覆盖所有成本所需的卖出价格</p>
                  </div>
                </div>
          </section>
        </div>
      </div>
    </div>
  )
}
