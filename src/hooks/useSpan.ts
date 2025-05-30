import { useEffect, useState } from 'react'
import { FormProps } from 'antd'

const useSpan = () => {
  const [span, setSpan] = useState(8)
  const [layout, setLayout] = useState<FormProps['layout']>('horizontal')

  const setBreakPoint = (e: UIEvent) => {
    const width = (e.target as Window).innerWidth

    switch (!!width) {
      case width < 768:
        setSpan(24) // 一行为24
        setLayout('vertical')
        break

      case width >= 768 && width < 992:
        setSpan(12)
        setLayout('vertical')
        break

      case width >= 992 && width < 1200:
        setLayout('vertical')
        setSpan(12)
        break

      case width >= 1200 && width < 1920:
        setLayout('horizontal')
        setSpan(8)
        break

      case width >= 1920:
        setLayout('horizontal')
        setSpan(6)
        break
    }
  }

  useEffect(() => {
    setBreakPoint({ target: { innerWidth: window.innerWidth } } as unknown as UIEvent)
    window.addEventListener('resize', setBreakPoint)
  }, [])

  return {
    span,
    layout
  }
}

export default useSpan
