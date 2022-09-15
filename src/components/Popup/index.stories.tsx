import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PopupProps } from 'semantic-ui-react'
import { Popup } from '.'
import { Button } from '../base/Button'

const Template: ComponentStory<typeof Popup> = (args: PopupProps) => (
  <>
    <Popup {...args}></Popup>
  </>
)

export const Example = Template

export default {
  title: 'Popup',
  component: Popup,
  args: {
    trigger: <Button>123</Button>,
    content: 'asdf'
  }
} as ComponentMeta<typeof Popup>
