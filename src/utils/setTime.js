/**
 * 倒计时
 * @param start_time 开始时间
 * @param end_time 结束时间
 */
export function countDown(start_time, end_time) {
  var s_time
  if (start_time > end_time) return
  setInterval(function() {
    if (end_time - Math.round(new Date().getTime() / 1000) < 0) {
      return
    }
    getRtime()
  }, 1000)
  function getRtime() {
    var time = end_time - Math.round(new Date().getTime() / 1000)
    // console.log(time)
    var d = Math.floor(time / 60 / 60 / 24)
    var h = Math.floor((time / 60 / 60) % 24)
    var m = Math.floor((time / 60) % 60)
    var s = Math.floor(time % 60)

    d = d == 0 ? '' : d + '天'
    h = h == 0 ? '' : h + '小时'
    s_time = d + h + m + '分' + s + '秒'
    return s_time
  }
  getRtime()
  return s_time
}
