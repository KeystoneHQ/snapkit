import React from 'react'
import { Install } from './Install'
import { Modal } from '../base/Modal'
import styles from './index.module.scss'

interface ConnectProps {
  open: boolean
  onClose(): void
  children: JSX.Element | JSX.Element[]
}

export function Connect ({ open, onClose, children }: ConnectProps) {
  return <Modal open={open} onClose={onClose} closeIcon={true} size='mini' className={`t-center ${styles.modal}`}>{children}</Modal>
}

Connect.Install = Install
