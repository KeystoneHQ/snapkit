import { IconProps } from './types'

export const WalletEx = ({
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
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5001 8.25H19.5001V18.75H11.25V17.25H18.0001V9.75H6.00012V14.25H4.50001L4.5 5.25H16.5001V8.25ZM6.00012 6.75V8.25H15.0001V6.75H6.00012ZM14.2501 12.75H16.5001V14.25H14.2501V12.75ZM7.5 15.75V13.5L10.5 16.5L7.5 19.5V17.25H3.75V15.75H7.5Z"
      fill="currentColor"
    />
  </svg>
)
