import React from 'react'
import { Connect } from './index'

export default {
  title: 'Connect',
  component: Connect
}

export const Install = () => (
  <Connect open={true}>
    <Connect.Install></Connect.Install>
  </Connect>
)
