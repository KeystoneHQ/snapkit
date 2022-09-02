import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

export const Primary = () => {
  const [open] = useState(true)
  return (
    <Modal open={open}>Content</Modal>
  )
}

export const CloseIcon = () => {
  const [open] = useState(true)
  return (
    <Modal open={open} closeIcon={true}>Content</Modal>
  )
}

