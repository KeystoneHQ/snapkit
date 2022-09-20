import { Popup as BasePopup, StrictPopupProps as BasePopupProps } from 'semantic-ui-react'

export type PopupProps = BasePopupProps

export function Popup(args: PopupProps) {
  console.log('args', args)
  return (
    <BasePopup
      {...args}
      style={{
        borderRadius: '8px'
      }}
    ></BasePopup>
  )
}
