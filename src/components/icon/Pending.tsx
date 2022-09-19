import { IconProps } from './types'

import PendingImg from './imgs/pending.png'

export function Pending({ className, width = '18', height = '18' }: IconProps) {
  return (
    // <svg
    //   width={width}
    //   height={height}
    //   className={className}
    //   viewBox="0 0 48 48"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <defs>
    //     <linearGradient id="line-gradient-1">
    //       <stop offset="0" stopColor="#F58300" stopOpacity="0"></stop>
    //       <stop offset="1" stopColor="#FF6C0A"></stop>
    //     </linearGradient>
    //     <linearGradient id="line-gradient-2">
    //       <stop offset="0" stopColor="#F58300" stopOpacity="0"></stop>
    //       <stop offset="1" stopColor="#FF6C0A"></stop>
    //     </linearGradient>
    //   </defs>
    //   <circle
    //     r="18"
    //     cx="25"
    //     cy="25"
    //     fill="none"
    //     stroke="url(#line-gradient-2)"
    //     strokeWidth="10"
    //     strokeLinecap="round"
    //     strokeDasharray="360, 10000"
    //     rotate="90deg"
    //   ></circle>
    //   <circle
    //     r="18"
    //     cx="25"
    //     cy="25"
    //     fill="none"
    //     stroke="url(#line-gradient-1)"
    //     strokeWidth="10"
    //     strokeLinecap="round"
    //     strokeDasharray="500, 10000"
    //     rotate={270}
    //   ></circle>
    // </svg>
    <img src={PendingImg} className={className} width={width} height={height} />
  )
}
