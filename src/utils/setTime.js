/**
 * 倒计时
 * @param start_time 开始时间
 * @param end_time 结束时间
 */
export function countDown(start_time, end_time) {
  var NowTime = +new Date()
  if (start_time > end_time) return

  setInterval(function() {
    if (end_time - Math.round(NowTime / 1000) < 0) return
    getRtime()
  }, 1000)
  function getRtime() {
    var NowTime = +new Date()
    var time = end_time - Math.round(NowTime / 1000)
    d = Math.floor(time / 60 / 60 / 24)
    h = Math.floor((time / 60 / 60) % 24)
    m = Math.floor((time / 60) % 60)
    s = Math.floor(time % 60)

    d = d == 0 ? '' : d + '天'
    h = h == 0 ? '' : h + '小时'
    date = d + h + m + '分' + s + '秒'
    return date
  }
  return date
}
