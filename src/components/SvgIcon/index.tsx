const SvgIcon = ({ name, prefix = 'icon', color = '#333', ...props }) => {
  const symbolId = `#${prefix}-${name}`
  return (
    <svg aria-hidden="true" {...props}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
