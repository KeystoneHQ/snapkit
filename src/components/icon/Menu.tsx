import { IconProps } from './types'

export function Menu ({ className, width = '24', height = '24', color }: IconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 13V15H4V13H14ZM16 8V10H2V8H16ZM14 3V5H4V3H14Z" fill={color}/>
    </svg>
  )
}
