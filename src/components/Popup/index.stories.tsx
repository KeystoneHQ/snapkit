import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Popup, PopupProps } from '.'
import { Button } from '../base/Button'

const Template: ComponentStory<typeof Popup> = (args: PopupProps) => (
  <>
    <Popup {...args}></Popup>
  </>
)

export const Example = Template.bind({})

export const Inverted = Template.bind({})
Inverted.args = { inverted: true }

export default {
  title: 'Popup',
  component: Popup,
  args: {
    trigger: <Button>123</Button>,
    content: 'asdf',
    inverted: false
  }
} as ComponentMeta<typeof Popup>
