import React from 'react'
import { Install } from './Install'
import { Modal } from './Modal'

interface ConnectProps {
  open: boolean
  children: JSX.Element | JSX.Element[]
}

const Connect = ({ open, children }: ConnectProps) => <Modal open={open}>{children}</Modal>

Connect.Install = Install

export default Connect
