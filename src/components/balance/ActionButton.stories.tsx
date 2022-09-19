import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { Icon } from '../icon'

export default {
  title: 'Balance/ActionButtons',
  component: ActionButton
} as ComponentMeta<typeof ActionButton>

const Template: ComponentStory<typeof ActionButton> = (args: ActionButtonProps) => (
  <ActionButton {...args} />
)

export const SendButton = Template.bind({})
SendButton.args = {
  icon: <Icon.Send width="48" height="48" className="sk-c-pri50" />
}

export const ReceiveButton = Template.bind({})
ReceiveButton.args = {
  icon: <Icon.Receive width="48" height="48" className="sk-c-pri50" />
}

export const ReceiveSwap = Template.bind({})
ReceiveSwap.args = {
  icon: <Icon.Swap width="48" height="48" className="sk-c-pri50" />
}
