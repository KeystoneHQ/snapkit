import { IconProps } from './types'

export function Back({
  className,
  width = '24',
  height = '24',
  color = 'black'
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      style={{ stroke: 'currentColor' }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 5L5 12M5 12L12 19M5 12H20" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}
