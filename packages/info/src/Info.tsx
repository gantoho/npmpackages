import { forwardRef } from 'react'
import type { InfoProps } from './types'

export const Info = forwardRef<HTMLDivElement, InfoProps>(
  (
    {
      label = '备案',
      beian = '萌ICP备5201314号',
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
            'footer-info',
            ...(className ? className.split(' ') : [])
          ].join(' ')
        }
        { ...rest }
      >
        <span>{ label }</span> : <a href="https://beian.miit.gov.cn" target="_blank">{ beian }</a>
      </div>
    )
  }
)
