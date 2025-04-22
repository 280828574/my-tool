/**
 * 通用js方法封装处理
 */
// 日期格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    time = new Date()
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time
        .replace(new RegExp(/-/gm), '/')
        .replace('T', ' ')
        .replace(new RegExp(/\.[\d]{3}/gm), '')
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 创建嵌套对象
export function createAssign(obj, keys, v) {
  if (keys.length === 1) {
    obj[keys[0]] = v
  } else {
    var key = keys.shift()
    obj[key] = createAssign(typeof obj[key] === 'undefined' ? {} : obj[key], keys, v)
  }

  return obj
}
// 距离指定日期还有多少天
// dateTime 指定日期
// pattern 日期格式
// isBefore 是否是今天之前的时间
// isObj 是否返回对象
export function getDistanceSpecifiedTime(dateTime, pattern, isBefore = false, isObj = false) {
  const format = pattern || '{d}天{h}小时{m}分{s}秒'
  // 指定日期和时间
  let EndTime = new Date(dateTime)
  // 当前系统时间
  let NowTime = new Date()
  let t = EndTime.getTime() - NowTime.getTime()
  if (t < 0 && isBefore) {
    t = -t
  }

  let formatObj = {
    d: Math.floor(t / 1000 / 60 / 60 / 24),
    h: Math.floor((t / 1000 / 60 / 60) % 24),
    m: Math.floor((t / 1000 / 60) % 60),
    s: Math.floor((t / 1000) % 60),
  }

  if (formatObj.d < 0) {
    return false
  }
  if (isObj) {
    let obj = {}
    format.replace(/{(d|h|m|s)+}/g, (result, key) => {
      let value = formatObj[key]
      obj[key] = value
    })
    return obj
  }
  const time_str = format.replace(/{(d|h|m|s)+}/g, (result, key) => {
    let value = formatObj[key]
    return value || 0
  })
  return time_str
}
