// 输入验证函数
export function validateNumber(value, min = 0, max = Infinity) {
  const num = parseFloat(value)
  if (isNaN(num)) return { isValid: false, message: '请输入有效数字' }
  if (num < min) return { isValid: false, message: `数值不能小于${min}` }
  if (num > max) return { isValid: false, message: `数值不能大于${max}` }
  return { isValid: true, value: num }
}

export function validatePercentage(value) {
  return validateNumber(value, 0, 100)
}

export function validatePrice(value) {
  return validateNumber(value, 0.01, 10000)
}

export function validateRSI(value) {
  return validateNumber(value, 0, 100)
}

export function validateTime(timeString) {
  // 检查时间格式 HH:MM
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  if (!timeRegex.test(timeString)) {
    return { isValid: false, message: '请输入有效时间 (HH:MM)' }
  }
  
  // 分割小时和分钟
  const [hours, minutes] = timeString.split(':').map(Number)
  
  // 验证小时和分钟范围
  if (hours < 0 || hours > 23) {
    return { isValid: false, message: '小时必须在0-23之间' }
 }
  
  if (minutes < 0 || minutes > 59) {
    return { isValid: false, message: '分钟必须在0-59之间' }
  }
  
  return { isValid: true, value: timeString }
}
