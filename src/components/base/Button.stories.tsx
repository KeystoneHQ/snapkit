import { Button, ButtonProps } from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { tw } from 'twind'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button size="large" {...args}></Button>
)

export const Primary = Template.bind({})
Primary.args = { primary: true, children: <span>Primary</span> }

export const Disabled = Template.bind({})
Disabled.args = { primary: true, disabled: true, children: <span>Disabled</span> }

export const Loading = Template.bind({})
Loading.args = { loading: true }

const sizes = ['small', 'medium', 'large'] as const

export const Size = () => (
  <>
    {sizes.map(size => (
      <div key={size} className={tw`my-1`}>
        <Button primary size={size}>
          <span>{size}</span>
        </Button>
      </div>
    ))}
    <div className={tw`my-1`}>
      <Button primary>
        <span>Size is null</span>
      </Button>
    </div>
  </>
)

export const CustomTagName = () => (
  <Button tagName="a" primary href="https://google.com/" target="__blank">
    <span>This is a link</span>
  </Button>
)
