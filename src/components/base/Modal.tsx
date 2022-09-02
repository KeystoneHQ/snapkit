import { Modal as BaseModal, ModalProps,  } from 'semantic-ui-react'
import { Icon } from '../icon'
import styles from './Modal.module.scss'

export function Modal ({ children, className, size = 'small', closeIcon, ...args }: ModalProps) {
  const _closeIcon = (
    <div className={`sk-icon ${styles.close} sk-flex sk-justify-center sk-items-center sk-bg-hover-ntd04 sk-a-transition`}>
      <Icon.Close></Icon.Close>
    </div>
  )

  return (
    <BaseModal
      className={`${className || ''} ${styles.modal}`}
      size={size}
      closeIcon={closeIcon === true ? _closeIcon : closeIcon}
      {...args}
    >
      <BaseModal.Content
        className={`${styles.content} sk-content`}
      >
        <div
          className={`sk-box ${styles.box}`}
        >
          {children}
        </div>
      </BaseModal.Content>
    </BaseModal>
  )
}
