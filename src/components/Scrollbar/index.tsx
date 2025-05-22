import { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'
import SimpleBar, { Props } from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import './index.less'

interface ScrollbarOptions extends Props {
  children: ReactNode
  className?: string
}

const Scrollbar: FC<ScrollbarOptions> = ({ children, className, ...props }) => {
  return (
    <SimpleBar className={classNames('h-full', className)} {...props}>
      {children}
    </SimpleBar>
  )
}

export default memo(Scrollbar)
