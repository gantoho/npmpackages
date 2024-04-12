import { forwardRef } from 'react'
import type { MainProps } from './types'

export const Main = forwardRef<HTMLDivElement, MainProps>(
  (
    {
      align = 'left',
      children,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ ref }
        className={
          [
            'footer',
            align,
            ...(className ? className.split(' ') : [])
          ].join(' ')
        }
        { ...rest }
      >
        { children }
      </div>
    )
  }
)
