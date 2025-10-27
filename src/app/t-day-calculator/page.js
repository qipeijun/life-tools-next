'use client'

import { useState, useCallback } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateTDayProfit, calculateRequiredSellPrice } from '../../lib/calculations'
import { validateNumber } from '../../lib/validations'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { SegmentedControl } from '../../components/ui/SegmentedControl'
import { QuickActions } from '../../components/ui/QuickActions'
import { ResultCard } from '../../components/ui/ResultCard'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { FeeBreakdownChart } from '../../components/ui/FeeBreakdownChart'
import { PriceGradientTable } from '../../components/ui/PriceGradientTable'
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
} from 'lucide-react'
import Link from 'next/link'

export default function TDayCalculatorPage() {
  // 缓存键名
  const CACHE_KEYS = {
    CALC_MODE: 'tday_calcMode_v3',
    BUY_PRICE: 'tday_buyPrice_v3',
    SELL_PRICE: 'tday_sellPrice_v3',
    TARGET_RATE: 'tday_targetRate_v3',
    QUANTITY: 'tday_quantity_v3',
    FEE_TYPE: 'tday_feeType_v3',
    FEE_VALUE: 'tday_feeValue_v3',
  }

  // 表单状态
  const [calcMode, setCalcMode] = useLocalStorage(CACHE_KEYS.CALC_MODE, 'forward') // forward | reverse
  const [buyPrice, setBuyPrice] = useLocalStorage(CACHE_KEYS.BUY_PRICE, '')
  const [sellPrice, setSellPrice] = useLocalStorage(CACHE_KEYS.SELL_PRICE, '')
  const [targetRate, setTargetRate] = useLocalStorage(CACHE_KEYS.TARGET_RATE, '2')
  const [quantity, setQuantity] = useLocalStorage(CACHE_KEYS.QUANTITY, '1000')
  const [feeType, setFeeType] = useLocalStorage(CACHE_KEYS.FEE_TYPE, 'ratio')
  const [feeValue, setFeeValue] = useLocalStorage(CACHE_KEYS.FEE_VALUE, '0.0003')

  // UI状态
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})
  const [selectedScenario, setSelectedScenario] = useState(null)

  // 快速场景选项 - 盈利目标
  const profitScenarios = [
    { label: '+0.5%', value: 0.5 },
    { label: '+1%', value: 1 },
    { label: '+1.5%', value: 1.5 },
    { label: '+2%', value: 2 },
    { label: '+3%', value: 3 },
    { label: '+4%', value: 4 },
    { label: '+5%', value: 5 },
  ]

  // 快速场景选项 - 止损参考
  const lossScenarios = [
    { label: '-1%', value: -1 },
    { label: '-2%', value: -2 },
    { label: '-3%', value: -3 },
  ]

  // 股票数量快捷选项
  const quantityOptions = [
    { label: '100股', value: '100' },
    { label: '500股', value: '500' },
    { label: '1000股', value: '1000' },
    { label: '2000股', value: '2000' },
    { label: '5000股', value: '5000' },
  ]

  // 手续费率快捷预设
  const feeRatePresets = [
    { label: '万一', value: '0.0001' },
    { label: '万二', value: '0.0002' },
    { label: '万三', value: '0.0003' },
  ]

  // 快速场景处理
  const handleScenarioSelect = (percent) => {
    setSelectedScenario(percent)
    if (calcMode === 'forward') {
      // 正向模式：设置卖出价格
      if (buyPrice) {
        const buy = parseFloat(buyPrice)
        if (!isNaN(buy)) {
          const sell = buy * (1 + percent / 100)
          setSellPrice(sell.toFixed(3))
        }
      }
    } else {
      // 反向模式：设置目标收益率
      setTargetRate(String(percent))
    }
  }

  // 输入验证
  const validateInputs = () => {
      const newErrors = {}

      const buyValidation = validateNumber(buyPrice, 0)
      if (!buyValidation.isValid) {
      newErrors.buyPrice = '请输入有效的买入价格'
      }

    if (calcMode === 'forward') {
      // 正向模式：验证卖出价格
      const sellValidation = validateNumber(sellPrice, 0)
      if (!sellValidation.isValid) {
        newErrors.sellPrice = '请输入有效的卖出价格'
      }

      // 逻辑验证：卖出价不能低于买入价（允许止损场景）
      // if (buyPrice && sellPrice) {
      //   const buy = parseFloat(buyPrice)
      //   const sell = parseFloat(sellPrice)
      //   if (sell <= buy) {
      //     newErrors.sellPrice = '卖出价格必须大于买入价格'
      //   }
      // }
    } else {
      // 反向模式：验证目标收益率
      const rateValidation = validateNumber(targetRate)
      if (!rateValidation.isValid) {
        newErrors.targetRate = '请输入有效的目标收益率'
      }
    }

    const quantityValidation = validateNumber(quantity, 1)
    if (!quantityValidation.isValid) {
      newErrors.quantity = '请输入有效的股票数量'
    }

    const feeValidation = validateNumber(feeValue, 0)
    if (!feeValidation.isValid) {
      newErrors.feeValue = '请输入有效的手续费'
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

      let calculationResult

      if (calcMode === 'forward') {
        // 正向计算
        calculationResult = calculateTDayProfit(
        parseFloat(buyPrice),
        parseFloat(sellPrice),
        parseInt(quantity),
          feeConfig
        )
      } else {
        // 反向计算
        calculationResult = calculateRequiredSellPrice(
          parseFloat(buyPrice),
          parseInt(quantity),
          parseFloat(targetRate),
          feeConfig
        )
      }

      setResult(calculationResult)
    } catch (error) {
      console.error('计算失败:', error)
      setResult({
        error: true,
        message: '计算失败，请检查输入参数',
      })
    }
  }, [calcMode, buyPrice, sellPrice, targetRate, quantity, feeType, feeValue])

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
          {/* 计算模式切换 */}
          <section>
            <SegmentedControl
              options={[
                { label: '正向计算', value: 'forward' },
                { label: '反向计算', value: 'reverse' },
              ]}
              selected={calcMode}
              onChange={(mode) => {
                setCalcMode(mode)
                setResult(null)
                setErrors({})
                setSelectedScenario(null)
              }}
            />
          </section>

          {/* 快速设置 - 盈利目标 */}
          <section>
            <h2 className="ios-section-header">
              {calcMode === 'forward' ? '盈利目标（快速设置卖出价）' : '盈利目标（设置目标收益率）'}
            </h2>
            <QuickActions
              options={profitScenarios}
              selected={selectedScenario}
              onChange={handleScenarioSelect}
              columns={4}
            />
          </section>

          {/* 快速设置 - 止损参考 */}
          <section>
            <h2 className="ios-section-header">止损参考</h2>
            <QuickActions
              options={lossScenarios}
              selected={selectedScenario}
              onChange={handleScenarioSelect}
              columns={3}
            />
          </section>

          {/* 价格输入 */}
          <section>
            <h2 className="ios-section-header">价格设置</h2>
            <div className="ios-card ios-spacing-group">
              {/* 买入价格 */}
              <div>
                <label className="ios-input-label">买入价格</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="输入买入价格"
                  value={buyPrice}
                  onChange={(e) => {
                    setBuyPrice(e.target.value)
                    setSelectedScenario(null)
                  }}
                  className="ios-input w-full"
                  step="0.01"
                />
                {errors.buyPrice && (
                  <p className="text-xs text-red-500 mt-1">{errors.buyPrice}</p>
                )}
                    </div>

              {calcMode === 'forward' ? (
                // 正向模式：卖出价格
                    <div>
                  <label className="ios-input-label">卖出价格</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder="输入卖出价格"
                    value={sellPrice}
                    onChange={(e) => {
                      setSellPrice(e.target.value)
                      setSelectedScenario(null)
                    }}
                    className="ios-input w-full"
                    step="0.01"
                  />
                  {errors.sellPrice && (
                    <p className="text-xs text-red-500 mt-1">{errors.sellPrice}</p>
                  )}
                </div>
              ) : (
                // 反向模式：目标收益率
                <div>
                  <label className="ios-input-label">目标收益率</label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="输入目标收益率"
                      value={targetRate}
                      onChange={(e) => {
                        setTargetRate(e.target.value)
                        setSelectedScenario(null)
                      }}
                      className="ios-input w-full pr-12"
                      step="0.1"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                      %
                    </span>
                  </div>
                  {errors.targetRate && (
                    <p className="text-xs text-red-500 mt-1">{errors.targetRate}</p>
                  )}
                </div>
              )}
                    </div>
          </section>

          {/* 股票数量 */}
          <section>
            <h2 className="ios-section-header">股票数量</h2>
            <QuickActions
              options={quantityOptions}
              selected={quantity}
              onChange={setQuantity}
              columns={5}
            />
            <div className="ios-card mt-3">
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
                    { label: '固定费用', value: 'fixed' },
                  ]}
                  selected={feeType}
                  onChange={setFeeType}
                />
              </div>

              {/* 费率快捷预设（仅比例模式） */}
              {feeType === 'ratio' && (
                <div>
                  <QuickActions
                    options={feeRatePresets}
                    selected={feeValue}
                    onChange={setFeeValue}
                    columns={3}
                  />
                </div>
              )}

              {/* 费用输入 */}
                    <div>
                <label className="ios-input-label">
                  {feeType === 'ratio' ? '手续费比例' : '每笔固定费用'}
                </label>
                <input
                        type="number"
                  inputMode="decimal"
                  placeholder={
                    feeType === 'ratio'
                      ? '例如: 0.0003 (万三)'
                      : '例如: 5 (每笔固定费用)'
                  }
                  value={feeValue}
                  onChange={(e) => setFeeValue(e.target.value)}
                  className="ios-input w-full"
                  step={feeType === 'ratio' ? '0.0001' : '0.5'}
                />
                {errors.feeValue && (
                  <p className="text-xs text-red-500 mt-1">{errors.feeValue}</p>
                      )}
                    </div>
                  </div>
          </section>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button
              onClick={handleCalculate}
              disabled={
                calcMode === 'forward'
                  ? !buyPrice || !sellPrice || !quantity
                  : !buyPrice || !targetRate || !quantity
              }
              className="ios-button-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {calcMode === 'forward' ? '计算收益' : '计算所需价格'}
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
              <section>
                <h2 className="ios-section-header">
                  {calcMode === 'forward' ? '盈亏分析' : '目标价格'}
                </h2>
                
                {calcMode === 'reverse' && (
                  // 反向计算：突出显示所需卖出价
                  <div className="ios-card p-6 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        达到 {result.targetProfitRate}% 收益率需要
                      </p>
                      <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {result.requiredSellPrice}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        卖出价格
                      </p>
                    </div>
                  </div>
                )}

                <ResultCard
                  type={getResultType()}
                  title="净收益"
                  value={`${parseFloat(result.profit) >= 0 ? '+' : ''}${result.profit}`}
                  subtitle={`${parseFloat(result.profitRate) >= 0 ? '+' : ''}${result.profitRate}%`}
                  icon={<DollarSign />}
                  expandable={true}
                  defaultExpanded={false}
                  details={[
                    { label: '买入成本', value: result.buyCost },
                    { label: '卖出收入', value: result.sellIncome },
                    { label: '手续费总计', value: result.totalFee },
                    { label: '买入手续费', value: result.buyFee },
                    { label: '卖出手续费', value: result.sellFee },
                    { label: '印花税', value: result.stampDuty },
                    { label: '盈亏平衡价', value: result.breakEvenPrice },
                  ]}
                />

                {/* 收益率进度条 */}
                <div className="mt-4">
                  <ProgressBar
                    value={parseFloat(result.profitRate)}
                    min={-5}
                    max={5}
                    showMarker={true}
                    markerPosition={0}
                    markerLabel="平衡"
                    animated={true}
                  />
                </div>

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

              {/* 费用构成分析 */}
              <section>
                <h2 className="ios-section-header">费用构成</h2>
                <div className="ios-card">
                  <FeeBreakdownChart
                    buyFee={result.buyFee}
                    sellFee={result.sellFee}
                    stampDuty={result.stampDuty}
                    animated={true}
                  />
                </div>
              </section>

              {/* 价格梯度收益表 */}
              <section>
                <h2 className="ios-section-header">多档位收益对比</h2>
                <PriceGradientTable
                  buyPrice={buyPrice}
                  quantity={quantity}
                  feeConfig={{ type: feeType, value: parseFloat(feeValue) }}
                  breakEvenPrice={result.breakEvenPrice}
                />
              </section>
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

          {/* 使用提示 */}
          <section>
            <h2 className="ios-section-header">使用提示</h2>
            <div className="ios-card">
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p>• <strong>正向计算：</strong>输入买入价和卖出价，计算实际盈亏</p>
                <p>• <strong>反向计算：</strong>输入买入价和目标收益率，计算所需卖出价</p>
                <p>• <strong>快速场景：</strong>点击百分比按钮快速设置价格或收益率</p>
                <p>• <strong>手续费模式：</strong>支持按比例（如万三）或固定费用</p>
                <p>• <strong>印花税：</strong>卖出时自动计算0.1%的印花税</p>
                <p>• <strong>多档位对比：</strong>查看不同卖出价格下的收益情况</p>
                <p>• <strong>费用分析：</strong>直观了解各项费用占比</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
