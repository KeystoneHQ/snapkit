import { useState } from 'react'
import { css } from '@emotion/css'

export interface SwitchProps {
  defaultValue?: boolean
  className?: string
  size?: 'default'
  onChange?: (value: boolean) => void
  color?: string
}

const switchBoxsizeMaps = {
  default: 34
}

const switchCircleSizeMaps = {
  default: 10
}

const style = (config: {
  backgroundColor: string
  width: number
  open: boolean
  circleWidth: number
}) => css`
  :hover {
    cursor: pointer;
  }
  & > label {
    position: relative;
    &::before {
      content: '';
      display: block;
      width: ${config.width}px;
      height: 20px;
      border-radius: 20px;
      background-color: ${config.backgroundColor};
      transition: var(--sk-transition);
    }
    &::after {
      content: '';
      position: absolute;
      left: ${config.open ? 18 : 5}px;
      top: 5px;
      display: block;
      width: ${config.circleWidth}px;
      height: ${config.circleWidth}px;
      border-radius: 50%;
      background-color: white;
      transition: var(--sk-transition);
    }
  }
`

export function Switch({
  defaultValue = false,
  size = 'default',
  className,
  color,
  onChange
}: SwitchProps) {
  const [open, setOpen] = useState(defaultValue)
  const backgroundColor = color ? color : `var(--sk-color-${open ? 'pri60' : 'n30'})`

  function onChangeSwitch() {
    const setValue = !open
    setOpen(setValue)
    onChange?.(setValue)
  }

  const SetStyle = style({
    width: switchBoxsizeMaps[size],
    backgroundColor: open ? backgroundColor : `var(--sk-color-n30)`,
    open,
    circleWidth: switchCircleSizeMaps[size]
  })

  return (
    <div className={'switch ' + SetStyle + ` ${className}`} onClick={onChangeSwitch}>
      <input type="checkbox" checked={open} className={css`display: none;`}></input>
      <label></label>
    </div>
  )
}
