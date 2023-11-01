import React, { memo, useState } from 'react'
import { ReactComponent as ChevronRight } from 'assets/svg/chevron-right.svg'
import { ReactComponent as ChevronLeft } from 'assets/svg/chevron-left.svg'
type ButtonName = 'more-next' | 'more-prev'
interface PaginationProps {
  className?: string
  pageIndex: number
  setIndex: (index: number) => void
  totalPage?: number
}
const Pagination = memo((props: PaginationProps) => {
  const { className, pageIndex, setIndex, totalPage } = props
  const wing = 2
  const showMore = () => totalPage > wing * 2 + 5
  const buttons = () => {
    let startI = 1,
      endI = totalPage - 1

    if (totalPage < 1) {
      return [0]
    }

    const array: Array<number | ButtonName> = []

    if (showMore) {
      let moreNext = false

      if (pageIndex > 3 + wing) {
        startI = pageIndex - wing
        if (totalPage - startI < wing * 2 + 2) startI = totalPage - (wing * 2 + 2)
        array.push(1, 'more-prev')
      }

      if (pageIndex < totalPage - wing - 2) {
        moreNext = true
        endI = pageIndex + wing
        if (endI < wing * 2 + 3) endI = wing * 2 + 3
      }

      for (let i = startI; i <= endI; i++) {
        array.push(i)
      }

      if (moreNext) array.push('more-next')
      array.push(totalPage)
    } else {
      for (let i = 1; i <= totalPage; i++) {
        array.push(i)
      }
    }

    return array
  }
  function morePrev() {
    setIndex(pageIndex - (wing * 2 + 1))
  }

  function moreNext() {
    setIndex(pageIndex + (wing * 2 + 1))
  }
  function prev() {
    setIndex(pageIndex - 1)
  }

  function next() {
    setIndex(pageIndex + 1)
  }
  function buttonClick(index: number | ButtonName) {
    if (index === 'more-prev') {
      morePrev()
    } else if (index === 'more-next') {
      moreNext()
    } else {
      setIndex(index)
    }
  }
  return (
    <div className={className}>
      <div className={`flex items-center text-center text-md leading-[48px] text-t3 space-x-8  `}>
        <button
          type="button"
          disabled={pageIndex <= 1}
          className="btn btn-o rounded-15 p-0 sq-50 flex-center disabled:bg-b1 disabled:hover:bg-b2"
          onClick={() => prev()}
        >
          <ChevronLeft />
        </button>

        {buttons().map((item, index) => {
          return (
            <button
              key={index}
              className={`btn btn-o rounded-15 p-0 sq-50 ${
                pageIndex === item
                  ? 'border-p text-t1 ring-1 ring-p dark:border-t1 dark:ring-t1'
                  : ''
              }`}
              type="button"
              onClick={() => buttonClick(item)}
            >
              {item === 'more-prev' || item === 'more-next' ? (
                <>
                  <i className="mx-1 inline-block rounded-full bg-current sq-3"></i>
                  <i className="mx-1 inline-block rounded-full bg-current sq-3"></i>
                  <i className="mx-1 inline-block rounded-full bg-current sq-3"></i>
                </>
              ) : (
                item
              )}
            </button>
          )
        })}
        <button
          disabled={pageIndex >= totalPage}
          type="button"
          className="btn btn-o rounded-15 p-0 sq-50 flex-center disabled:bg-b1 disabled:hover:bg-b2"
          onClick={() => next()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
})

export default Pagination
