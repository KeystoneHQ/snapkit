import { IconProps } from './types'

export function Wallet ({ className, width = '24', height = '24', color }: IconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 13H28C28 13 28 24.7578 28 27C21.6667 27 14.3333 27 8 27C8 21.3333 8 14.6667 8 9C13.3333 9 18.6667 9 24 9V13ZM10 15V25H26V15H10ZM10 11V13H22V11H10ZM21 19H24V21H21V19Z" fill={color}/>
    </svg>
  )
}
