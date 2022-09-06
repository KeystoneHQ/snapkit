import { IconProps } from './types'

export function Send ({ className, width = '48', height = '48', color }: IconProps) {
  return (
    <svg width={width} height={height} className={className} style={{stroke: 'currentColor'}} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M32 13L13 13L12.9997 16L21.4392 24.4395L9.93933 35.9393L12.0607 38.0607L23.5605 26.5608L31.9997 35H32H35V32V16V13H32ZM17.2424 16L32 30.7576V16L17.2424 16Z" fill={color}/>
    </svg>
  )
}
