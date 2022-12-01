import { Button, ButtonProps } from './Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { css } from '@emotion/css'
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
    <div className={css`
      display: flex;
      flex-direction: column;
      gap: 2px;
    `}>
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

const flexGap2Style = css`display: flex; gap: 2px;`
export const IconButton = () => {
  return (
    <div className={flexGap2Style}>
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

const colorCyanMarginLeft2 = css`color: cyan; margin-left: 2px;`
export const SuffixButton = () => {
  return (
    <div className={flexGap2Style}>
      <div>
        <Button
          primary
          suffix={<span className={colorCyanMarginLeft2}>Suffix Text</span>}
        >
          <span>Search</span>
        </Button>
      </div>
      <div>
        <Button
          primary
          suffix={
            <span className={colorCyanMarginLeft2}>
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
