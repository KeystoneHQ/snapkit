import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Icon } from '../icon'
import { Connect } from './index'

export default {
  title: 'Connect',
  component: Connect,
  args: {
    open: true
  }
} as ComponentMeta<typeof Connect>

const SNAP_NAME = 'Aptos'
const SNAP_LOGO = <Icon.Aptos></Icon.Aptos>

const NoChildrenTemplate: ComponentStory<typeof Connect> = (args) => {
  const [open, setOpen] = useState(args.open)
  const [loading, setLoading] = useState(args.loading)
  const [connected, setConnected] = useState(args.connected)
  return (
    <Connect
      {...args}
      open={open}
      loading={loading}
      connected={connected}
      onClose={() => {
        setOpen(false)
      }}
      onConnect={() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setConnected(true)
        }, 3000)
      }}
      onGetAddress={() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          setOpen(false)
        }, 3000)
      }}
    ></Connect>
  )
}

export const NoChildren = NoChildrenTemplate.bind({})

NoChildren.args = {
  name: SNAP_NAME,
  logo: SNAP_LOGO,
  open: false,
  loading: false,
  connected: false,
  onConnect: () => { console.log('onConnect') },
  onGetAddress: () => { console.log('onGetAddress') },
}

export const Install = () => {
  const [open, setOpen] = useState(false)
  return (
    <Connect open={open} onClose={() => setOpen(false)}>
      <Connect.Install name={SNAP_NAME}></Connect.Install>
    </Connect>
  )
}

export const Connecting = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <Connect open={open} onClose={() => setOpen(false)}>
      <Connect.Connecting name={SNAP_NAME} loading={loading} onConnect={() => {
        setLoading(true)
      }}></Connect.Connecting>
    </Connect>
  )
}

export const Address = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  function onGetAddress() {
    console.log('onGetAddress')
    setLoading(true)
  }

  return (
    <Connect open={open} onClose={() => setOpen(false)}>
      <Connect.Address name={SNAP_NAME} loading={loading} onGetAddress={onGetAddress}></Connect.Address>
    </Connect>
  )
}
