import { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal } from './Modal'
import { ModalProps } from 'semantic-ui-react'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    open: false,
    closeIcon: true
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => {
  const [open, setOpen] = useState(args.open)
  return <Modal {...args} open={open} onClose={() => {setOpen(false)}}></Modal>
}

export const Open = Template.bind({})

Open.args = {
  open: false,
}

export const CloseIcon = Template.bind({})

CloseIcon.args = {
  open: false,
  closeIcon: true,
}
