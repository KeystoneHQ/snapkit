import { ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import { Connect } from './index'

export default {
  title: 'Connect',
  component: Connect,
  args: {
    open: true
  }
} as ComponentMeta<typeof Connect>

export const Auto = () => {
  const [open, setOpen] = useState(true)
  return (
    <Connect name='Aptos' open={open} onClose={() => setOpen(false)}></Connect>
  )
}

export const Install = () => {
  const [open, setOpen] = useState(true)
  return (
    <Connect open={open} onClose={() => setOpen(false)}>
      <Connect.Install name='Aptos'></Connect.Install>
    </Connect>
  )
}

export const Connecting = () => {
  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(false)
  return (
    <Connect open={open} onClose={() => setOpen(false)}>
      <Connect.Connecting name='Aptos' loading={loading} onConnect={() => {
        console.log('onConnect')
        setLoading(true)
      }}></Connect.Connecting>
    </Connect>
  )
}

export const Address = () => {
  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(false)
  const onGetAddress = () => {
    setLoading(true)
    console.log('onGetAddress', loading)
  }
  return (
    <Connect open={open} onClose={() => setOpen(false)}>
      <Connect.Address name='Aptos' loading={loading} onGetAddress={onGetAddress}></Connect.Address>
    </Connect>
  )
}
