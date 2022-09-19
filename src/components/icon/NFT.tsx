import { IconProps } from './types'

export function NFT ({ className, width = '24', height = '24', color }: IconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.4738 13.6547L18 9.3094L25.5263 13.6547V22.3453L18 26.6906L10.4738 22.3453V13.6547ZM18 7L27.5263 12.5V23.5L18 29L8.47375 23.5V12.5L18 7ZM12.749 16.1154L17 18.5766V23.5H19V18.5766L23.2511 16.1154L22.249 14.3846L18 16.8445L13.7511 14.3846L12.749 16.1154Z" fill={color}/>
    </svg>
  )
}
