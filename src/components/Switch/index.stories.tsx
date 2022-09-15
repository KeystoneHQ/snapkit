import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Switch, SwitchProps } from '.'

const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => {
  const [open, setOpen] = useState(args.defaultValue)
  return (
    <>
      open: {JSON.stringify(open)}
      <Switch {...args} onChange={bool => setOpen(bool)}></Switch>
    </>
  )
}

export const Example = Template

export default {
  title: 'Switch',
  component: Switch,
  args: {
    defaultValue: true
  }
} as ComponentMeta<typeof Switch>
