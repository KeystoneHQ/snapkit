import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Switch, SwitchProps } from '.'

const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => {
  const [open, setOpen] = useState(args.defaultValue)
  function onChangeOpen(isOpen: boolean) {
    setOpen(isOpen)
    console.log('%c 🍌 isOpen', 'color:#6ec1c2', isOpen)
  }
  return (
    <>
      <Switch {...args} onChange={onChangeOpen}></Switch>
    </>
  )
}

export const Example = Template.bind({})

export const SetColor = Template.bind({})
SetColor.args = { color: 'blue' }

export default {
  title: 'Switch',
  component: Switch,
  args: {
    defaultValue: true,
    color: ''
  }
} as ComponentMeta<typeof Switch>
