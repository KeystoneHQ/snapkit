import { IconProps } from './types'

export function Scan ({ className, width = '24', height = '24', color }: IconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3H9V4.5H4.5V8H3V4.5V3H4.5ZM15 3V4.5H19.5V8H21V4.5V3H19.5H15ZM19.5 19.5H15V21H19.5H21V19.5V16H19.5V19.5ZM4.5 19.5V16H3V19.5V21H4.5H9V19.5H4.5ZM3 12.75H21V11.25H3V12.75Z" fill={color}/>
    </svg>
  )
}
