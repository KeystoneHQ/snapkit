import { IconProps } from './types'

export function Swap({ className, width = '24', height = '24' }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 21.5L5.5 19.5L7.62132 17.3787L12.3787 12.6213L14.5 10.5L16.6213 12.6213L21.3787 17.3787L23.5 19.5L21.5 21.5H21.2574H16V33H23V36H14.5H13V34.5V21.5H7.74264H7.5ZM18.2574 18.5L14.5 14.7426L10.7426 18.5H18.2574ZM32 15H25V12H33.5H35V13.5V26.5H40.2574H40.5L42.5 28.5L40.3787 30.6213L35.6213 35.3787L33.5 37.5L31.3787 35.3787L26.6213 30.6213L24.5 28.5L26.5 26.5H26.7426H32V15ZM33.5 33.2574L37.2574 29.5H29.7426L33.5 33.2574Z"
        fill="currentColor"
      />
    </svg>
  )
}
