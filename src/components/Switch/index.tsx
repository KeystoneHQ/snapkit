import { createRef, useState } from 'react'
import { tw } from 'twind'
import { css } from 'twind/css'

export interface SwitchProps {
  defaultValue?: boolean
  className?: string
  size?: 'default'
  onChange?: (value: boolean) => void
}

const switchBoxsizeMaps = {
  default: 34
}

const switchCircleSizeMaps = {
  default: 10
}

export function Switch({
  defaultValue = false,
  size = 'default',
  className,
  onChange
}: SwitchProps) {
  const [open, setOpen] = useState(defaultValue)
  const style = tw(css`
    :hover {
      cursor: pointer;
    }
    & > label {
      position: relative;
      &::before {
        content: '';
        display: block;
        width: ${switchBoxsizeMaps[size]}px;
        height: 20px;
        border-radius: 20px;
        background-color: var(--sk-color-${open ? 'pri60' : 'n30'});
        transition: var(--sk-transition);
      }
      &::after {
        content: '';
        position: absolute;
        left: ${open ? 18 : 5}px;
        top: 5px;
        display: block;
        width: ${switchCircleSizeMaps[size]}px;
        height: ${switchCircleSizeMaps[size]}px;
        border-radius: 50%;
        background-color: white;
        transition: var(--sk-transition);
      }
    }
  `)

  function onChangeSwitch() {
    const setValue = !open
    console.log('%c 🍣 setValue', 'color:#93c0a4', setValue)
    setOpen(setValue)
    onChange?.(setValue)
  }

  return (
    <div className={'switch ' + style + ` ${className}`} onClick={onChangeSwitch}>
      <input type="checkbox" checked={open} className={tw`hidden`}></input>
      <label></label>
    </div>
  )
}
