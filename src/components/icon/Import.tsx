import { IconProps } from './types'

export function Import({
  className,
  width = '24',
  height = '24',
  style,
  color
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={{
        color,
        ...(style && { style })
      }}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 17V9H19V17H27V19H19V27H17V19H9V17H17Z" fill="currentColor" />
    </svg>
  )
}
