import { IconProps } from "./types";

export function CheckS({ className, width = "18", height = "18" }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5 9L8.5 12.5L14 6.5" stroke="black" stroke-width="1.2"/>
    </svg>
  );
}
