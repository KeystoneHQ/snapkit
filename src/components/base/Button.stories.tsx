import { Button, ButtonProps } from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { tw } from 'twind'
import { Icon } from '../icon'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
  function trigger() {
    alert('trigger')
  }
  return <Button size="large" onClick={trigger} {...args}></Button>
}

export const Primary = Template.bind({})
Primary.args = { primary: true, children: <span>Primary</span> }

export const Disabled = Template.bind({})
Disabled.args = { primary: true, disabled: true, children: <span>Disabled</span> }

export const Loading = Template.bind({})
Loading.args = { loading: true }

export const Size = () => {
  const sizes = ['small', 'medium', 'large', null] as const
  return (
    <div className={tw`flex flex-col gap-2`}>
      {sizes.map(size => (
        <div key={size}>
          <Button primary size={size}>
            <span>{size || 'Size is null'}</span>
          </Button>
        </div>
      ))}
    </div>
  )
}

export const CustomLoadingIconButton = Loading.bind({})
CustomLoadingIconButton.args = { loading: true, loadingIcon: <Icon.Brave /> }

export const IconButton = () => {
  return (
    <div className={tw`flex gap-2`}>
      <div>
        <Button primary icon={<Icon.Scan />}>
          <span>Search</span>
        </Button>
      </div>
      <div>
        <Button primary icon={<Icon.Scan />}></Button>
      </div>
    </div>
  )
}

export const SuffixButton = () => {
  return (
    <div className={tw`flex gap-2`}>
      <div>
        <Button
          primary
          suffix={<span className={tw`text-blue-200 ml-2`}>Suffix Text</span>}
        >
          <span>Search</span>
        </Button>
      </div>
      <div>
        <Button
          primary
          suffix={
            <span className={tw`text-blue-200 ml-2`}>
              Suffix Icon <Icon.Check />
            </span>
          }
        >
          <span>Search</span>
        </Button>
      </div>
    </div>
  )
}

export const CustomTagName = () => (
  <Button tagName="a" primary href="https://google.com/" target="__blank">
    <span>This is a link</span>
  </Button>
)
