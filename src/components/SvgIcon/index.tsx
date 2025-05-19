import { memo } from 'react'

const SvgIcon = ({ name, prefix = 'icon', color = '#333', size = null, ...props }) => {
  const symbolId = `#${prefix}-${name}`

  let iconStyle = {}
  if (size) {
    iconStyle = { width: `${size}px`, height: `${size}px` }
  }

  return (
    <svg aria-hidden="true" {...props} style={iconStyle}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default memo(SvgIcon)
