import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TransferButton, TransferButtonProps } from './TransferButton'
import { Icon } from '../icon'

export default {
  title: 'Balance/TransferButtons',
  component: TransferButton
} as ComponentMeta<typeof TransferButton>

const Template: ComponentStory<typeof TransferButton> = (args: TransferButtonProps) => (
  <TransferButton {...args} />
)

export const SendButton = Template.bind({})
SendButton.args = {
  text: 'Send',
  icon: <Icon.Send width="48" height="48" className="sk-c-pri50" />
}

export const ReceiveButton = Template.bind({})
ReceiveButton.args = {
  text: 'Receive',
  icon: <Icon.Receive width="48" height="48" className="sk-c-pri50" />
}

export const ReceiveSwap = Template.bind({})
ReceiveSwap.args = {
  text: 'Swap',
  icon: <Icon.Swap width="48" height="48" className="sk-c-pri50" />
}
