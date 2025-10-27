// KDJ 计算逻辑
export function calculateKDJ(jValue, rsiValue, volume = 0, cycle = 'day', options = {}) {
  const {
    overboughtThreshold = 80,
    oversoldThreshold = 20,
    sensitivity = 50
  } = options

  const j = parseFloat(jValue)
  const rsi = parseFloat(rsiValue)

  const result = {
    signal: 'neutral',
    advice: '中性信号，建议观望',
    confidence: 0.5
  }

  // 强烈买入条件
  if (j <= 20 && rsi <= oversoldThreshold) {
    result.signal = 'strong_buy'
    result.advice = `强烈买入信号：J值(${j.toFixed(1)})和RSI(${rsi.toFixed(1)})均处于严重超卖区域`
    result.confidence = 0.9
  }
  // 买入条件
  else if (j <= 30 || rsi <= 35) {
    result.signal = 'buy'
    result.advice = `买入信号：J值(${j.toFixed(1)})或RSI(${rsi.toFixed(1)})处于超卖区域`
    result.confidence = 0.7
  }
  // 强烈卖出条件
  else if (j >= 80 && rsi >= overboughtThreshold) {
    result.signal = 'strong_sell'
    result.advice = `强烈卖出信号：J值(${j.toFixed(1)})和RSI(${rsi.toFixed(1)})均处于严重超买区域`
    result.confidence = 0.9
  }
  // 卖出条件
  else if (j >= 70 || rsi >= 70) {
    result.signal = 'sell'
    result.advice = `卖出信号：J值(${j.toFixed(1)})或RSI(${rsi.toFixed(1)})处于超买区域`
    result.confidence = 0.7
  }
  // 中性区域
  else {
    if (rsi >= 45 && rsi <= 55) {
      result.advice = `市场处于平衡状态，J值(${j.toFixed(1)})，RSI(${rsi.toFixed(1)})在正常区间，建议观望`
    } else if (rsi > 55) {
      result.advice = `市场偏强势，J值(${j.toFixed(1)})，RSI(${rsi.toFixed(1)})偏高，可考虑逢高减仓`
    } else {
      result.advice = `市场偏弱势，J值(${j.toFixed(1)})，RSI(${rsi.toFixed(1)})偏低，可考虑逢低吸纳`
    }
    result.confidence = 0.4
  }

  // 根据成交量调整置信度
  if (volume > 0) {
    result.confidence = Math.min(0.95, result.confidence + 0.1)
  }

  return result
}

// 网格策略计算逻辑
export function computeSmartGridRange(rsi, bollUpper, bollLower, maxOffset = 0.1, maxScale = 0.2) {
  const center = (bollUpper + bollLower) / 2
  const width = bollUpper - bollLower

  // 偏移比例（决定位置）
  let offsetRatio = ((rsi - 50) / 50) * maxOffset
  offsetRatio = Math.max(-maxOffset, Math.min(maxOffset, offsetRatio))

  // 缩放比例（决定宽度）
  let scaleRatio = 1 + (Math.abs(rsi - 50) / 50) * maxScale

  const adjustedWidth = width * scaleRatio
  const offset = adjustedWidth * offsetRatio / 2

  const adjustedLower = +(center - adjustedWidth / 2 - offset).toFixed(2)
  const adjustedUpper = +(center + adjustedWidth / 2 - offset).toFixed(2)

  return {
    adjustedUpper,
    adjustedLower,
    adjustedWidth: +(adjustedUpper - adjustedLower).toFixed(2),
    scaleRatio: +scaleRatio.toFixed(4),
    offsetRatio: +offsetRatio.toFixed(4)
  }
}

// 做T利润计算（增强版 - 支持固定和比例手续费）
export function calculateTDayProfit(
  buyPrice, 
  sellPrice, 
  quantity, 
  feeConfig = { type: 'ratio', value: 0.0003 }
) {
  let buyFee, sellFee
  
  if (feeConfig.type === 'fixed') {
    // 固定手续费模式
    buyFee = feeConfig.value
    sellFee = feeConfig.value
  } else {
    // 比例手续费模式
    buyFee = buyPrice * quantity * feeConfig.value
    sellFee = sellPrice * quantity * feeConfig.value
  }
  
  const stampDuty = sellPrice * quantity * 0.001 // 印花税（卖出时收取）
  const buyCost = buyPrice * quantity + buyFee
  const sellIncome = sellPrice * quantity - sellFee - stampDuty
  const profit = sellIncome - buyCost
  const profitRate = (profit / buyCost) * 100
  const totalFee = buyFee + sellFee + stampDuty
  
  // 盈亏平衡价格（考虑所有成本）
  const breakEvenPrice = (buyCost + sellFee + stampDuty) / quantity

  return {
    buyCost: buyCost.toFixed(2),
    sellIncome: sellIncome.toFixed(2),
    profit: profit.toFixed(2),
    profitRate: profitRate.toFixed(2),
    buyFee: buyFee.toFixed(2),
    sellFee: sellFee.toFixed(2),
    stampDuty: stampDuty.toFixed(2),
    totalFee: totalFee.toFixed(2),
    breakEvenPrice: breakEvenPrice.toFixed(3),
    commissionAmount: totalFee.toFixed(2) // 保持向后兼容
  }
}

/**
 * 反向计算：根据目标收益率计算所需的卖出价格
 * @param {number} buyPrice - 买入价格
 * @param {number} quantity - 股票数量
 * @param {number} targetProfitRate - 目标收益率（百分比，如2表示2%）
 * @param {object} feeConfig - 手续费配置 { type: 'ratio'|'fixed', value: number }
 * @returns {object} 包含所需卖出价和完整计算结果
 */
export function calculateRequiredSellPrice(
  buyPrice,
  quantity,
  targetProfitRate,
  feeConfig = { type: 'ratio', value: 0.0003 }
) {
  const buy = parseFloat(buyPrice)
  const qty = parseInt(quantity)
  const targetRate = parseFloat(targetProfitRate) / 100 // 转换为小数
  
  // 计算买入手续费
  let buyFee
  if (feeConfig.type === 'fixed') {
    buyFee = feeConfig.value
  } else {
    buyFee = buy * qty * feeConfig.value
  }
  
  // 买入成本
  const buyCost = buy * qty + buyFee
  
  // 目标收益
  const targetProfit = buyCost * targetRate
  
  // 目标卖出收入
  const targetSellIncome = buyCost + targetProfit
  
  // 反向求解卖出价格
  // sellIncome = sellPrice * qty - sellFee - stampDuty
  // 其中 sellFee 和 stampDuty 都依赖于 sellPrice
  // 需要迭代求解或者解方程
  
  let sellPrice
  
  if (feeConfig.type === 'fixed') {
    // 固定手续费模式：相对简单
    // targetSellIncome = sellPrice * qty - feeConfig.value - sellPrice * qty * 0.001
    // targetSellIncome = sellPrice * qty * (1 - 0.001) - feeConfig.value
    // sellPrice = (targetSellIncome + feeConfig.value) / (qty * 0.999)
    sellPrice = (targetSellIncome + feeConfig.value) / (qty * 0.999)
  } else {
    // 比例手续费模式
    // targetSellIncome = sellPrice * qty - sellPrice * qty * feeConfig.value - sellPrice * qty * 0.001
    // targetSellIncome = sellPrice * qty * (1 - feeConfig.value - 0.001)
    // sellPrice = targetSellIncome / (qty * (1 - feeConfig.value - 0.001))
    sellPrice = targetSellIncome / (qty * (1 - feeConfig.value - 0.001))
  }
  
  // 使用计算出的卖出价格进行完整计算，验证结果
  const fullResult = calculateTDayProfit(buy, sellPrice, qty, feeConfig)
  
  return {
    requiredSellPrice: sellPrice.toFixed(3),
    targetProfitRate: targetProfitRate.toFixed(2),
    ...fullResult
  }
}

// 豆浆预约计算
export function calculateSoyMilkTime(targetDrinkTime, makingTime = 25) {
  const target = new Date(targetDrinkTime)
  const appointmentTime = new Date(target.getTime() - makingTime * 60000)

  return {
    appointmentTime: appointmentTime,
    targetTime: target,
    makingTime: makingTime,
    timeRemaining: appointmentTime - new Date()
  }
}

// KDJ Pro版本计算逻辑
export function calculateKDJPro(kValue, dValue, jValue, rsiValue, rsiPeriod = 14, volume = 0, cycle = 'day', options = {}) {
  const {
    overboughtThreshold = 70,
    oversoldThreshold = 30,
    sensitivity = 50
  } = options

  const k = kValue !== undefined ? parseFloat(kValue) : undefined
  const d = dValue !== undefined ? parseFloat(dValue) : undefined
  const j = parseFloat(jValue)
  const rsi = parseFloat(rsiValue)

  const result = {
    signal: 'neutral',
    advice: '中性信号，建议观望',
    confidence: 0.5,
    details: {
      kdjStatus: '',
      rsiStatus: ''
    }
  }

  // KDJ状态分析
  let kdjScore = 0
  let kdjStatus = ''

  if (k !== undefined && d !== undefined) {
    // 金叉死叉判断
    if (k > d && j > 0) {
      kdjStatus = '金叉向上'
      kdjScore = 2
    } else if (k < d && j < 0) {
      kdjStatus = '死叉向下'
      kdjScore = -2
    } else if (k > d) {
      kdjStatus = '偏强'
      kdjScore = 1
    } else {
      kdjStatus = '偏弱'
      kdjScore = -1
    }

    // 超买超卖判断
    if (j >= 100) {
      kdjStatus += '（严重超买）'
      kdjScore -= 2
    } else if (j <= -100) {
      kdjStatus += '（严重超卖）'
      kdjScore += 2
    } else if (j >= 80) {
      kdjStatus += '（超买）'
      kdjScore -= 1
    } else if (j <= 20) {
      kdjStatus += '（超卖）'
      kdjScore += 1
    }
  } else {
    // 仅J值分析
    if (j >= 80) {
      kdjStatus = 'J值超买'
      kdjScore = -1
    } else if (j <= 20) {
      kdjStatus = 'J值超卖'
      kdjScore = 1
    } else {
      kdjStatus = 'J值中性'
      kdjScore = 0
    }
  }

  result.details.kdjStatus = kdjStatus

  // RSI状态分析
  let rsiScore = 0
  let rsiStatus = ''

  if (rsi >= overboughtThreshold) {
    if (rsi >= 85) {
      rsiStatus = '严重超买'
      rsiScore = -2
    } else {
      rsiStatus = '超买'
      rsiScore = -1
    }
  } else if (rsi <= oversoldThreshold) {
    if (rsi <= 15) {
      rsiStatus = '严重超卖'
      rsiScore = 2
    } else {
      rsiStatus = '超卖'
      rsiScore = 1
    }
  } else {
    rsiStatus = '中性'
    rsiScore = 0
  }

  result.details.rsiStatus = rsiStatus

  // 综合评分
  const totalScore = kdjScore + rsiScore

  // 根据综合评分判断信号
  if (totalScore >= 3) {
    result.signal = 'strong_buy'
    result.advice = `强烈买入信号：${kdjStatus}，${rsiStatus}，多项指标显示强烈看涨`
    result.confidence = 0.85
  } else if (totalScore >= 1) {
    result.signal = 'buy'
    result.advice = `买入信号：${kdjStatus}，${rsiStatus}，指标显示看涨趋势`
    result.confidence = 0.7
  } else if (totalScore <= -3) {
    result.signal = 'strong_sell'
    result.advice = `强烈卖出信号：${kdjStatus}，${rsiStatus}，多项指标显示强烈看跌`
    result.confidence = 0.85
  } else if (totalScore <= -1) {
    result.signal = 'sell'
    result.advice = `卖出信号：${kdjStatus}，${rsiStatus}，指标显示看跌趋势`
    result.confidence = 0.7
  } else {
    result.advice = `中性信号：${kdjStatus}，${rsiStatus}，市场处于平衡状态，建议观望`
    result.confidence = 0.5
  }

  // 根据成交量调整置信度
  if (volume > 0) {
    result.confidence = Math.min(0.95, result.confidence + 0.05)
  }

  // 根据周期调整
  const cycleMultiplier = {
    'minute': 0.8,
    'hour': 0.9,
    'day': 1.0,
    'week': 1.1,
    'month': 1.2
  }

  result.confidence = Math.min(0.95, result.confidence * cycleMultiplier[cycle] || 1.0)

  return result
}

// 生成模拟KDJ数据用于图表
export function generateKDJData(count = 20) {
  const data = []
  let k = 50, d = 50, j = 50

  for (let i = 0; i < count; i++) {
    // 模拟KDJ变化
    k += (Math.random() - 0.5) * 10
    d += (Math.random() - 0.5) * 8
    j = 3 * k - 2 * d

    k = Math.max(0, Math.min(100, k))
    d = Math.max(0, Math.min(100, d))
    j = Math.max(-100, Math.min(200, j))

    data.push({
      x: i,
      y: j,
      k: k,
      d: d
    })
  }

  return data
}

// 生成模拟RSI数据用于图表
export function generateRSIData(count = 20, period = 14) {
  const data = []
  let rsi = 50

  for (let i = 0; i < count; i++) {
    // 模拟RSI变化
    rsi += (Math.random() - 0.5) * 15
    rsi = Math.max(0, Math.min(100, rsi))

    data.push({
      x: i,
      y: rsi
    })
  }

  return data
}

// 网格策略收益计算
export function calculateGridProfit(lowerPrice, upperPrice, gridCount, investment, commission = 0.001) {
  const gridSpacing = (upperPrice - lowerPrice) / (gridCount - 1)
  const perGridInvestment = investment / gridCount

  // 计算每格的预期收益
  const profitPerGrid = (gridSpacing * perGridInvestment / ((lowerPrice + upperPrice) / 2)) - (gridSpacing * perGridInvestment / ((lowerPrice + upperPrice) / 2)) * commission * 2

  // 计算总收益率
  const totalProfit = profitPerGrid * gridCount
  const profitRate = (totalProfit / investment) * 100

  // 年化收益率（假设每年50次网格交易）
  const annualizedRate = profitRate * 50

  // 回本天数
  const breakEvenDays = profitRate !== 0 ? Math.ceil(100 / Math.abs(profitRate)) : Infinity

  return {
    gridSpacing: gridSpacing.toFixed(2),
    profitPerGrid: profitPerGrid.toFixed(2),
    profitRate: profitRate.toFixed(2),
    annualizedRate: annualizedRate.toFixed(2),
    breakEvenDays: breakEvenDays,
    perGridInvestment: perGridInvestment.toFixed(2)
  }
}