import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Balance, BalanceProps } from '.'

const Template: ComponentStory<typeof Balance> = (args: BalanceProps) => (
  <Balance {...args}></Balance>
)

export const Example = Template

export default {
  title: 'Balance',
  component: Balance,
  args: {
    value: 0
  }
} as ComponentMeta<typeof Balance>
