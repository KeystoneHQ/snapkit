import React from 'react'
import { Modal as BaseModal } from 'semantic-ui-react'
import styles from './Modal.module.scss'

interface ModalProps {
  open: boolean
  children: JSX.Element | JSX.Element[]
}

export function Modal ({ open, children }: ModalProps) {
  return (
    <BaseModal
      size='mini'
      className={styles.modal}
      open={open}
    >
      <BaseModal.Content
        className={styles.content}
      >
        <div
          className={styles.box}
        >
          {children}
        </div>
      </BaseModal.Content>
    </BaseModal>
  )
}
