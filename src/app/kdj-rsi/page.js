'use client'

import { useState, useCallback } from 'react'
import { ThemeToggle } from '../../components/ui/ThemeToggle'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { calculateKDJ } from '../../lib/calculations'
import { validateRSI, validateNumber } from '../../lib/validations'
import { QuickActions } from '../../components/ui/QuickActions'
import { ResultCard } from '../../components/ui/ResultCard'
import { TrendingUp, ArrowLeft, Activity } from 'lucide-react'
import Link from 'next/link'

export default function KDJRSIPage() {
  // 缓存键名
  const CACHE_KEYS = {
    J_VALUE: 'kdjrsi_jValue',
    RSI_VALUE: 'kdjrsi_rsiValue',
  }

  // 表单状态
  const [jValue, setJValue] = useLocalStorage(CACHE_KEYS.J_VALUE, '')
  const [rsiValue, setRsiValue] = useLocalStorage(CACHE_KEYS.RSI_VALUE, '')

  // 结果状态
  const [result, setResult] = useState(null)
  const [errors, setErrors] = useState({})
  const [selectedScenario, setSelectedScenario] = useState(null)

  // 快速场景
  const scenarioOptions = [
    { label: '超卖', value: 'oversold' },
    { label: '中性', value: 'neutral' },
    { label: '超买', value: 'overbought' },
  ]

  // 处理快速场景
  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario)
    if (scenario === 'oversold') {
      setJValue('25')
      setRsiValue('30')
    } else if (scenario === 'neutral') {
      setJValue('50')
      setRsiValue('50')
    } else if (scenario === 'overbought') {
      setJValue('75')
      setRsiValue('70')
    }
  }

  // 输入验证
  const validateInputs = useCallback(() => {
    const newErrors = {}

    const jValidation = validateNumber(jValue, -100, 100)
    if (!jValidation.isValid) {
      newErrors.jValue = '请输入有效的J值 (-100 到 100)'
    }

    const rsiValidation = validateRSI(rsiValue)
    if (!rsiValidation.isValid) {
      newErrors.rsiValue = '请输入有效的RSI值 (0 到 100)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [jValue, rsiValue])

  // 分析按钮点击处理
  const handleAnalyze = async () => {
    if (!validateInputs()) return

    try {
      const analysisResult = calculateKDJ(
        parseFloat(jValue),
        parseFloat(rsiValue),
        0,
        'day'
      )

      setResult(analysisResult)
    } catch (error) {
      console.error('分析失败:', error)
      setResult({
        signal: 'error',
        advice: '分析失败，请检查输入参数',
        confidence: 0,
      })
    }
  }

  // 清除结果
  const handleClear = () => {
    setResult(null)
    setErrors({})
  }

  // 获取信号样式
  const getSignalType = () => {
    if (!result) return 'neutral'
    switch (result.signal) {
      case 'strong_buy':
      case 'buy':
        return 'profit'
      case 'strong_sell':
      case 'sell':
        return 'loss'
      default:
        return 'neutral'
    }
  }

  // 获取信号文本
  const getSignalText = (signal) => {
    switch (signal) {
      case 'strong_buy':
        return '强烈买入'
      case 'buy':
        return '买入信号'
      case 'strong_sell':
        return '强烈卖出'
      case 'sell':
        return '卖出信号'
      case 'neutral':
        return '中性信号'
      default:
        return '无法判断'
    }
  }

  // 信心度星级
  const renderConfidenceStars = (confidence) => {
    const stars = Math.round(confidence * 5)
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < stars ? 'bg-current' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    )
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
        <h1 className="ios-large-title mb-8">KDJ 分析</h1>

        {/* 主要内容 */}
        <div className="ios-spacing-section">
          {/* 快速场景 */}
          <section>
            <h2 className="ios-section-header">快速场景</h2>
            <QuickActions
              options={scenarioOptions}
              selected={selectedScenario}
              onChange={handleScenarioSelect}
              columns={3}
            />
          </section>

          {/* 指标输入 */}
          <section>
            <h2 className="ios-section-header">指标输入</h2>
            <div className="ios-card ios-spacing-group">
              {/* J值 */}
              <div>
                <label className="ios-input-label">J 值</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="输入J值 (-100 到 100)"
                  value={jValue}
                  onChange={(e) => {
                    setJValue(e.target.value)
                    setSelectedScenario(null)
                  }}
                  className="ios-input w-full"
                  step="0.01"
                />
                {errors.jValue && (
                  <p className="text-xs text-red-500 mt-1">{errors.jValue}</p>
                )}
              </div>

              {/* RSI值 */}
              <div>
                <label className="ios-input-label">RSI 值</label>
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder="输入RSI值 (0 到 100)"
                  value={rsiValue}
                  onChange={(e) => {
                    setRsiValue(e.target.value)
                    setSelectedScenario(null)
                  }}
                  className="ios-input w-full"
                  step="0.01"
                />
                {errors.rsiValue && (
                  <p className="text-xs text-red-500 mt-1">{errors.rsiValue}</p>
                )}
              </div>
            </div>
          </section>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button
              onClick={handleAnalyze}
              disabled={!jValue || !rsiValue}
              className="ios-button-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center justify-center gap-2">
                <Activity className="w-5 h-5" />
                开始分析
              </span>
            </button>
            {result && (
              <button onClick={handleClear} className="ios-button-secondary">
                清除
              </button>
            )}
          </div>

          {/* 分析结果 */}
          {result && result.signal !== 'error' && (
            <section>
              <h2 className="ios-section-header">分析结果</h2>
              <ResultCard
                type={getSignalType()}
                title="交易信号"
                value={getSignalText(result.signal)}
                subtitle={
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm">置信度</span>
                    {renderConfidenceStars(result.confidence)}
                  </div>
                }
                icon={<TrendingUp />}
                details={[
                  { label: 'J 值', value: jValue },
                  { label: 'RSI 值', value: rsiValue },
                ]}
              />

              {/* 投资建议 */}
              <div className="mt-4 ios-card">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  投资建议
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {result.advice}
                </p>
              </div>
            </section>
          )}

          {/* 错误提示 */}
          {result && result.signal === 'error' && (
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-2xl p-4">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {result.advice}
              </p>
            </div>
          )}

          {/* 使用说明 */}
          <section>
            <h2 className="ios-section-header">使用说明</h2>
            <div className="ios-card">
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  • <strong>J值：</strong>KDJ指标中的J值，反映价格变化的敏感度
                </p>
                <p>
                  • <strong>RSI：</strong>相对强弱指标，判断超买超卖状态
                </p>
                <p>
                  • <strong>快速场景：</strong>一键填入常见指标值进行快速分析
                </p>
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-700">
                  ⚠️ 本工具仅供参考，投资有风险，入市需谨慎
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
