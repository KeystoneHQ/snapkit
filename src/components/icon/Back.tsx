import { IconProps } from './types'

export function Back({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 5L5 12M5 12L12 19M5 12H20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
