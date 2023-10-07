

type TDateFormatLocale = '' | 'month' | 'monthLong' | 'long'
function toDate(str: number | string, timeZoneOffset): Date | boolean {
  let int = +str
  if (int) {
    if (int < 4102416000) int = int * 1000
  } else {
    int = new Date(str).getTime()
  }

  if (timeZoneOffset != null) {
    const tzLocal = new Date().getTimezoneOffset()
    int = int + (tzLocal - timeZoneOffset) * 60 * 1000
  }

  return int ? new Date(int) : false
}
function dateFormat(
  date: number | string | Date | null | undefined,
  fmt = 'YYYY-MM-DD HH:mm',
  cutYear = false,
  timeZoneOffset?: number,
): string {
  if (!date) {
    return ''
  }
  if (!(date instanceof Date)) {
    const d = toDate(date, timeZoneOffset)
    if (d === false) return ''
    else date = d as Date
  }
  const o: { [index: string]: number } = {
    'M+': date.getMonth() + 1, //月份
    'D+': date.getDate(), //日
    'H+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'Q+': Math.floor((date.getMonth() + 3) / 3), //季度
  }
  if (cutYear) {
    if (new Date().getFullYear() === date.getFullYear()) {
      fmt = fmt.replace(/Y+[^\w]*/, '')
    }
  }
  if (/(Y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').slice(4 - RegExp.$1.length),
    )

  Object.keys(o).forEach((k) => {
    fmt = fmt.replace(new RegExp(String(k)), ($0) => {
      const v = String(o[k])
      return $0.length === 1 ? v : ('00' + v).slice(v.length)
    })
  })

  return fmt
}
const Month = {
  1: '一月',
  2: '二月',
  3: '三月',
  4: '四月',
  5: '五月',
  6: '六月',
  7: '七月',
  8: '八月',
  9: '九月',
  10: '十月',
  11: '十一月',
  12: '十二月'
}
export function dateFormatLocale(
  date: number | string | Date | null | undefined,
  fmt: TDateFormatLocale = '',
) {
  if (fmt === '') return dateFormat(date, 'DD/MM/YYYY')
  if (fmt === 'month')
    return dateFormat(date, 'MM/YYYY')
  else if (fmt === 'monthLong')
    return dateFormat(date, 'YYYY年MM月').replace(
      /\$(\d{1,2})\b/,
      (_, m) => Month[Number(m)] || '',
    )

  return dateFormat(date, fmt)
}
