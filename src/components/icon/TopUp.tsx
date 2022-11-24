import { IconProps } from './types'

export const TopUp = ({
  className,
  width = '24',
  height = '24',
  color,
  style
}: IconProps) => (
  <svg
    width={width}
    height={height}
    className={className}
    style={{
      color,
      ...(style && { style })
    }}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 5.25H13.5V2.25H1.5V15.75H9.75V11.625H12.375L9 8.25L5.625 11.625H8.25V14.25H3V6.75H15V14.25H11.25V15.75H16.5V5.25ZM3 5.25V3.75H12V5.25H3Z"
      fill="currentColor"
    />
  </svg>
)
