import { IconProps } from './types'

export function BackCard({
  className,
  color,
  width = '24',
  height = '24',
  style
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 17.5V11.5H18.5V17.5H5.5ZM5.5 10H18.5V7.5H5.5V10ZM20 6H18.5H5.5H4V7.5V17.5V19H5.5H18.5H20V17.5V7.5V6ZM14 16V15.5V14.5V14H15.5H17V14.5V15.5V16H15.5H14Z"
        fill="currentColor"
      />
    </svg>
  )
}
