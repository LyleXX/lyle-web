import React, { memo, useState } from 'react'
import { dateFormatLocale } from 'utils/dateFormatLocale'
import { ReactComponent as ChevronLeft } from 'assets/svg/chevron-left.svg'
import { ReactComponent as ChevronRight } from 'assets/svg/chevron-right.svg'
interface Props {
  activeDate: Date | undefined
  changeActiveDate: (val: Date) => void
}
const HomeCalendar = memo((props: Props) => {
  const MS_ONE_DAY = 8.64e7
  const NOW = new Date(),
    TODAY = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate()),
    TODAY_MS = TODAY.getTime()

  type MonthClassName = 'today' | 'active' | 'disabled'
  type DayClassName = 'prev' | 'next' | MonthClassName

  interface DayItem {
    date: Date
    classes: DayClassName[]
  }

  const [screenYear, setScreenYear] = useState(NOW.getFullYear())
  const [screenMonth, setScreenMonth] = useState(NOW.getMonth() + 1)

  function getDays(year: number, month: number): DayItem[] {
    const modelDay = props.activeDate

    const modelDayMs = modelDay
        ? new Date(modelDay.getFullYear(), modelDay.getMonth(), modelDay.getDate()).getTime()
        : 0,
      day1 = new Date(year, month, 1),
      day1WeekDay = day1.getDay(),
      day1Ms = day1.getTime(),
      days: DayItem[] = []

    for (let i = day1WeekDay; i > 0; i--) {
      days.push({
        date: new Date(day1Ms - MS_ONE_DAY * i),
        classes: ['prev'],
      })
    }

    const dayNextMonth1 = new Date(year, month + 1, 1),
      dayNextMonth1Ms = dayNextMonth1.getTime(),
      dayCount = new Date(dayNextMonth1Ms - MS_ONE_DAY).getDate()

    for (let i = 0; i < dayCount; i++) {
      const ms = day1Ms + MS_ONE_DAY * i
      days.push({
        date: new Date(ms),
        classes: [],
      })
    }

    const nextMonthShowDayCount = 42 - day1WeekDay - dayCount

    for (let i = 0; i < nextMonthShowDayCount; i++) {
      days.push({
        date: new Date(dayNextMonth1Ms + i * MS_ONE_DAY),
        classes: ['next'],
      })
    }

    days.forEach((d) => {
      const ms = d.date.getTime()

      if (TODAY_MS === ms) d.classes.push('today')
      if (modelDayMs === ms) d.classes.push('active')
    })

    return days
  }

  function btnPrevClick() {
    if (screenMonth === 1) setScreenYear(screenYear - 1)
    setScreenMonth(screenMonth === 1 ? 12 : screenMonth - 1)
  }

  function btnNextClick() {
    if (screenMonth === 12) setScreenYear(screenYear + 1)
    setScreenMonth(screenMonth === 12 ? 1 : screenMonth + 1)
  }

  function commitDay(day: DayItem) {
    if (day.classes.includes('disabled')) return
    props.changeActiveDate(day.date)
  }
  return (
    <div>
      <div className="home-calendar relative w-[380px] text-md">
        <div className="bg-b1 rounded-25 border">
          <div className="mt-12 flex items-center justify-center">
            <div
              className="hover-bg-light cursor-pointer rounded-15 p-10 text-t3"
              onClick={btnPrevClick}
            >
              <ChevronLeft className="block text-t3 sq-20" />
            </div>

            <div className="mx-15 text-lg text-t3">
              {dateFormatLocale(new Date(screenYear, screenMonth - 1), 'monthLong')}
            </div>

            <div
              className="hover-bg-light cursor-pointer rounded-15 p-10 text-t3"
              onClick={btnNextClick}
            >
              <ChevronRight className="block text-t3 sq-20" />
            </div>
          </div>

          <div className="pl-10 text-center leading-[40px]">
            <div className="mt-7 flex">
              <div className="mx-5 w-40">日</div>
              <div className="mx-5 w-40">一</div>
              <div className="mx-5 w-40">二</div>
              <div className="mx-5 w-40">三</div>
              <div className="mx-5 w-40">四</div>
              <div className="mx-5 w-40">五</div>
              <div className="mx-5 w-40">六</div>
            </div>
            <div className="flex flex-wrap">
              {getDays(screenYear, screenMonth - 1).map((day) => (
                <div
                  className={`mx-5 mt-10 w-40 cursor-pointer rounded-15  hover:bg-bb ${
                    day.classes.includes('today')
                      ? 'bg-p text-white hover:bg-p'
                      : day.classes.includes('active')
                      ? 'text-p bg-bb dark:bg-t3'
                      : day.classes.includes('prev') || day.classes.includes('next')
                      ? 'text-t4'
                      : 'text-t3'
                  } `}
                  key={day.date.getTime()}
                  onClick={() => commitDay(day)}
                >
                  {day.date.getDate()}
                </div>
              ))}
            </div>
            <div className="mt-15"></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default HomeCalendar
