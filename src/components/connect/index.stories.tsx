import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { Connect } from './index'

export default {
  title: 'Connect',
  component: Connect,
  args: {
    open: true
  }
} as ComponentMeta<typeof Connect>

export const Install = () => (
  <Connect open={true}>
    <Connect.Install></Connect.Install>
  </Connect>
)
