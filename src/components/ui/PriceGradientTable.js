'use client'

import { calculateTDayProfit } from '../../lib/calculations'

export function PriceGradientTable({ 
  buyPrice, 
  quantity, 
  feeConfig,
  breakEvenPrice,
  steps = 7 
}) {
  if (!buyPrice || !quantity) return null

  const buy = parseFloat(buyPrice)
  const breakEven = parseFloat(breakEvenPrice)
  
  // 生成价格档位：从-2%到+5%
  const priceSteps = []
  const percentages = [-2, -1, 0, 1, 2, 3, 5]
  
  percentages.forEach(percent => {
    const sellPrice = buy * (1 + percent / 100)
    const result = calculateTDayProfit(buy, sellPrice, parseInt(quantity), feeConfig)
    const profit = parseFloat(result.profit)
    const profitRate = parseFloat(result.profitRate)
    
    priceSteps.push({
      percent,
      sellPrice: sellPrice.toFixed(3),
      profit: result.profit,
      profitRate: result.profitRate,
      isBreakEven: Math.abs(sellPrice - breakEven) < 0.001,
      isProfitable: profit > 0,
    })
  })

  const getRowColor = (step) => {
    if (step.isBreakEven) return 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-300 dark:border-yellow-700'
    if (step.isProfitable) return 'bg-green-50 dark:bg-green-900/10'
    return 'bg-red-50 dark:bg-red-900/10'
  }

  const getTextColor = (step) => {
    if (step.isBreakEven) return 'text-yellow-700 dark:text-yellow-400'
    if (step.isProfitable) return 'text-green-700 dark:text-green-400'
    return 'text-red-700 dark:text-red-400'
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-3 py-3 text-left font-medium text-gray-700 dark:text-gray-300">涨幅</th>
            <th className="px-3 py-3 text-right font-medium text-gray-700 dark:text-gray-300">卖出价</th>
            <th className="px-3 py-3 text-right font-medium text-gray-700 dark:text-gray-300">盈亏</th>
            <th className="px-3 py-3 text-right font-medium text-gray-700 dark:text-gray-300">收益率</th>
          </tr>
        </thead>
        <tbody>
          {priceSteps.map((step, index) => (
            <tr 
              key={index}
              className={`${getRowColor(step)} transition-colors border-t border-gray-200 dark:border-gray-700`}
            >
              <td className="px-3 py-3">
                <span className={`font-medium ${getTextColor(step)}`}>
                  {step.percent > 0 ? '+' : ''}{step.percent}%
                  {step.isBreakEven && <span className="ml-2 text-xs">⚖️</span>}
                </span>
              </td>
              <td className="px-3 py-3 text-right font-mono text-gray-900 dark:text-gray-100">
                {step.sellPrice}
              </td>
              <td className={`px-3 py-3 text-right font-semibold ${getTextColor(step)}`}>
                {parseFloat(step.profit) >= 0 ? '+' : ''}{step.profit}
              </td>
              <td className={`px-3 py-3 text-right font-semibold ${getTextColor(step)}`}>
                {parseFloat(step.profitRate) >= 0 ? '+' : ''}{step.profitRate}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* 说明 */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          💡 <span className="text-yellow-600 dark:text-yellow-400">⚖️ 标记</span>表示盈亏平衡点附近
        </p>
      </div>
    </div>
  )
}

