// 时间戳格式化
export const formatTime = (date, type) => {
  if (!date || date === '') return ''
  date = new Date(date * 1) //如果date为13位不需要乘1000

  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  if (type === 'all') {
    let res = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    return res
  } else if (type === 'YMD') {
    let res = `${year}/${month}/${day}`
    return res
  } else if (type === 'HMS') {
    let res = `${hours}:${minutes}:${seconds}`
    return res
  } else {
    return { year, month, day, hours, minutes, seconds }
  }
}

// 节流(throttle)
export const throttle = (fn, delay) => {
  let valid = true
  return function() {
    if (!valid) {
      //休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(() => {
      fn()
      valid = true
    }, delay)
  }
}

// 深拷贝
export const deepCopy = source => {
  let target = Array.isArray(source) ? [] : {}
  for (var k in source) {
    if (typeof source[k] === 'object') {
      target[k] = deepCopy(source[k])
    } else {
      target[k] = source[k]
    }
  }
  return target
}

// 复制到粘贴板
export const copyToClipboard = val => {
  return new Promise((resolve, reject) => {
    let input = document.createElement('input')
    input.value = val
    document.body.appendChild(input)
    input.select() // 选择对象;
    let res = document.execCommand('Copy') // 执行浏览器复制命令
    if (res) resolve(res)
    else reject(res)
    input.remove()
  })
}

// 播放器时间过滤
export const formatSecond = second => {
  let secondType = typeof second
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)
    let hours = Math.floor(second / 3600)
    second = second - hours * 3600
    let mimute = Math.floor(second / 60)
    second = second - mimute * 60
    return hours
      ? hours + ':' + ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
      : ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
  } else {
    return '0:00:00'
  }
}

export const sliceStr = (arr, key) => {
  let str = ''
  arr.forEach(item => {
    str += item[key] + '/'
  })
  return str.slice(0, -1)
}

export const cutLrc = lrc => {
  if (lrc === '') return
  const reg = new RegExp(/\[[^\]]*\]/, 'g')
  const lrcArr = []
  lrc.split('\n').forEach(ele => {
    const times = ele.match(reg) || []
    if (times.length > 0) {
      const handleTime = times[0].slice(1, -1).split(':')
      const lrc = ele.replace(times.join(''), '').trim()
      if (lrc) {
        lrcArr.push({
          time: Math.floor(handleTime[0] * 60) + Math.floor(handleTime[1]),
          lrc: ele.replace(times.join(''), '').trim()
        })
      }
    }
  })
  return lrcArr
}
