'use client'

export function FeeBreakdownChart({ buyFee, sellFee, stampDuty, animated = true }) {
  const total = parseFloat(buyFee) + parseFloat(sellFee) + parseFloat(stampDuty)
  
  if (total === 0) return null

  const buyPercent = (parseFloat(buyFee) / total) * 100
  const sellPercent = (parseFloat(sellFee) / total) * 100
  const stampPercent = (parseFloat(stampDuty) / total) * 100

  const items = [
    { label: '买入手续费', value: buyFee, percent: buyPercent, color: 'bg-blue-500' },
    { label: '卖出手续费', value: sellFee, percent: sellPercent, color: 'bg-purple-500' },
    { label: '印花税', value: stampDuty, percent: stampPercent, color: 'bg-orange-500' },
  ]

  return (
    <div className="space-y-4">
      {/* 堆叠条形图 */}
      <div className="flex h-10 rounded-lg overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.color} ${animated ? 'transition-all duration-700' : ''} flex items-center justify-center text-white text-xs font-medium`}
            style={{ width: `${item.percent}%` }}
          >
            {item.percent > 10 && `${item.percent.toFixed(0)}%`}
          </div>
        ))}
      </div>

      {/* 详细列表 */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${item.color}`} />
              <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 dark:text-gray-400">
                {item.percent.toFixed(1)}%
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-100 min-w-[60px] text-right">
                {item.value}
              </span>
            </div>
          </div>
        ))}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm font-semibold">
          <span className="text-gray-700 dark:text-gray-300">费用总计</span>
          <span className="text-gray-900 dark:text-gray-100">{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

