import { IconProps } from './types'

export function Wallet({
  className,
  width = '24',
  height = '24',
  color,
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
        d="M16.5001 8.25C17.5001 8.25 18.5001 8.25 19.5001 8.25C19.5001 11.75 19.5001 15.25 19.5001 18.75C14.5001 18.75 9.50005 18.75 4.50002 18.75C4.50002 18.75 4.50002 7.46835 4.5 5.25H16.5001V8.25ZM6.00012 9.75V17.25H18.0001V9.75H6.00012ZM6.00012 6.75V8.25H15.0001V6.75H6.00012ZM14.2501 12.75H16.5001V14.25H14.2501V12.75Z"
        fill="currentColor"
      />
    </svg>
  )
}
